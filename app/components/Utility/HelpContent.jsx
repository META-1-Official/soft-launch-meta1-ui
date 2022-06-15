import React from 'react';
import {zipObject} from 'lodash-es';
import counterpart from 'counterpart';
import utils from 'common/utils';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import sanitize from 'sanitize';
import {css} from '@emotion/react';

let req = require.context('../../help', true, /\.md/);
let HelpData = {};

function endsWith(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function split_into_sections(str) {
	let sections = str.split(/\[#\s?(.+?)\s?\]/);
	if (sections.length === 1) return sections[0];
	if (sections[0].length < 4) sections.splice(0, 1);

	for (let i = sections.length - 1; i >= 1; i -= 2) {
		// remove extra </p> and <p>
		sections[i] = sections[i].replace(/(^<\/p>|<p>$)/g, '');
		sections[i - 1] = [sections[i - 1], sections[i]];
		sections.splice(i, 1);
	}

	return zipObject(sections);
}

function adjust_links(str, newRoute) {
	return str.replace(/\<a\shref\=\"(.+?)\"/gi, (match, text) => {
		text = sanitize(text, {
			whiteList: [], // empty, means filter out all tags
			stripIgnoreTag: true, // filter out all HTML not in the whilelist
		});

		if (text.indexOf((__HASH_HISTORY__ ? '#' : '') + '/') === 0)
			return `<a href="${text}" onclick="_onClickLink(event)"`;

		if (text.indexOf('http') === 0)
			return `<a href="${text}" rel="noopener noreferrer" class="external-link" target="_blank"`;

		let page = endsWith(text, '.md') ? text.substr(0, text.length - 3) : text;
		if (!page.startsWith('/help')) {
			page = '/help/' + page;
		} else if (page.startsWith('help')) {
			page = '/' + page;
		}

		return endsWith(text, '.md')
			? `<div style="
					padding: 6px 0px 6px 2rem; cursor: pointer; display: inline-block; width: 100%;
					${page === newRoute ? 'border-right: 2px solid yellow;' : ''}
				"
				href="${__HASH_HISTORY__ ? '#' : ''}${page}"
				onclick="_onClickLink(event)"
			>
				<a
					style="${
						page === newRoute
							? 'color: #ffc000 !important; cursor: pointer;'
							: 'cursor: pointer;'
					}"
					href="${__HASH_HISTORY__ ? '#' : ''}${page}"`
			: `<a href="${
					__HASH_HISTORY__ ? '#' : ''
			  }${page}" onclick="_onClickLink(event)"`;
	});
}

class HelpContent extends React.PureComponent {
	static propTypes = {
		path: PropTypes.string.isRequired,
		pathUrl: PropTypes.string,
		section: PropTypes.string,
		from: PropTypes.string,
	};

	static defaultProps = {
		hide_issuer: 'false',
	};

	constructor(props) {
		super(props);
		window._onClickLink = this.onClickLink.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const newRoute = nextProps.pathUrl;

		this.updateMenu(newRoute);
	}

	componentWillMount() {
		const newRoute = this.props.pathUrl;

		this.updateMenu(newRoute);
	}

	updateMenu(newRoute) {
		let locale = this.props.locale || counterpart.getLocale() || 'en';

		// Only load helpData for the current locale as well as the fallback 'en'
		req
			.keys()
			.filter((a) => {
				return a.indexOf(`/${locale}/`) !== -1 || a.indexOf('/en/') !== -1;
			})
			.forEach(function (filename) {
				var res = filename.match(/\/(.+?)\/(.+)\./);
				let locale = res[1];
				let key = res[2];
				let help_locale = HelpData[locale];
				if (!help_locale) HelpData[locale] = help_locale = {};
				let content = req(filename);
				help_locale[key] = split_into_sections(adjust_links(content, newRoute));
			});
	}

	onClickLink(e) {
		e.preventDefault();

		let pathname = '';
		if (e.target.nodeName === 'DIV') {
			pathname = e.target.firstElementChild.hash;
		} else if (e.target.nodeName === 'A') {
			pathname = e.target.hash;
		}

		let path = (__HASH_HISTORY__ ? pathname : e.target.pathname)
			.split('/')
			.filter((p) => p && p !== '#');

		if (path.length === 0) return false;

		var newRoute = '/' + path.join('/');

		if (pathname.includes('#/help//explorer/fees')) newRoute = '/explorer/fees';
		if (pathname.includes('#/help//settings')) newRoute = '/settings';

		this.updateMenu(newRoute);
		this.props.history.push(newRoute);
		return false;
	}

	setVars(str, hideIssuer) {
		if (hideIssuer == 'true') {
			str = str.replace(/<p>[^<]*{issuer}[^<]*<\/p>/gm, '');
		}

		return str.replace(/(\{.+?\})/gi, (match, text) => {
			let key = text.substr(1, text.length - 2);
			let value = this.props[key] !== undefined ? this.props[key] : text;
			if (value && typeof value === 'string')
				value = sanitize(value, {
					whiteList: [], // empty, means filter out all tags
					stripIgnoreTag: true, // filter out all HTML not in the whilelist
				});
			if (value.amount && value.asset)
				value = utils.format_asset(value.amount, value.asset, false, false);
			if (value.date) value = utils.format_date(value.date);
			if (value.time) value = utils.format_time(value.time);

			return value;
		});
	}

	render() {
		let locale = this.props.locale || counterpart.getLocale() || 'en';
		if (!HelpData[locale]) {
			console.error(
				`missing locale '${locale}' help files, rolling back to 'en'`
			);
			locale = 'en';
		}
		let value = HelpData[locale][this.props.path];

		if (!value && locale !== 'en') {
			console.warn(
				`missing path '${this.props.path}' for locale '${locale}' help files, rolling back to 'en'`
			);
			value = HelpData['en'][this.props.path];
		}

		if (!value && this.props.alt_path) {
			console.warn(
				`missing path '${this.props.path}' for locale '${locale}' help files, rolling back to alt_path '${this.props.alt_path}'`
			);
			value = HelpData[locale][this.props.alt_path];
		}

		if (!value && this.props.alt_path && locale != 'en') {
			console.warn(
				`missing alt_path '${this.props.alt_path}' for locale '${locale}' help files, rolling back to 'en'`
			);
			value = HelpData['en'][this.props.alt_path];
		}

		if (!value) {
			console.error(
				`help file not found '${this.props.path}' for locale '${locale}'`
			);
			return !null;
		}

		if (this.props.section) {
			/* The previously used remarkable-loader parsed the md properly as an object, the new one does not */
			for (let key in value) {
				if (!!key.match(this.props.section)) {
					value = key.replace(new RegExp('^' + this.props.section + ','), '');
					break;
				}
			}
		}

		if (!value) {
			console.error(
				`help section not found ${this.props.path}#${this.props.section}`
			);
			return null;
		}

		if (typeof value === 'object') {
			console.error(
				`help section content invalid ${this.props.path}#${this.props.section}`
			);
			return null;
		}

		return (
			<div
				css={(theme) =>
					(this.props.path === 'toc') !== true
						? {
								h1: {
									marginTop: '0px',
									fontSize: '1.5rem',
									color: theme.colors.primaryColor,
								},
								'h2, h3': {
									fontSize: '1rem',
									color: theme.colors.themeOpositeColor,
								},
								ul: {
									listStyle: 'none',
								},
								li: {
									paddingLeft: '12px',
									paddingTop: '10px',
									color: theme.colors.themeOpositeColor,
									':before': {
										content: `'\\2022'`,
										color: theme.colors.primaryColor,
										marginLeft: '-2rem',
										marginRight: '1rem',
										fontSize: '1rem',
									},
									p: {
										display: 'inline',
										strong: {
											color: theme.colors.primaryColor,
										},
									},
								},
								a: {
									color: theme.colors.primaryColor, // $link-text-color;
								},
								hr: {
									border: 'none',
									height: '1px',
									width: '100%',
									backgroundColor: theme.colors.themeOpositeColor,
								},
								code: {
									color: theme.colors.primaryColor,
									backgroundColor: 'transparent',
									borderColor: theme.colors.borderColor,
								},
								blockquote: {
									color: theme.colors.primaryColor,
									borderLeft: `3px solid ${theme.colors.themeOpositeColor}`,
								},
								table: {
									width: '50%',
									border: `1px solid ${theme.colors.helpTableBorderColor}`,
									borderCollapse: 'collapse',
									marginBottom: '20px',
									color: 'white',
									'td, th': {
										padding: '10px',
										fontSize: '14px',
									},
									thead: {
										backgroundColor: '#111215',
										th: {
											textAlign: 'left',
											padding: '10px',
											color: theme.colors.primaryColor,
										},
									},
									tbody: {
										'tr:nth-child(even)': {
											background: theme.colors.helpTableRowDarkColor,
										},
										'tr:nth-child(odd)': {
											background: theme.colors.helpTableRowLightColor,
										},
									},
								},
								'p, p:last-of-type': {
									marginBottom:
										this.props.from !== 'permissions' ? '2.5rem' : '0px',
									color: `${theme.colors.helpTextColor} !important`,
									fontSize: '15px',
								},
						  }
						: {height: '100%'}
				}
				dangerouslySetInnerHTML={{
					__html: this.setVars(value, this.props.hide_issuer),
				}}
			/>
		);
	}
}

export default withRouter(HelpContent);
