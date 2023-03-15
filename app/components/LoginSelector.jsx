import React from 'react';
import {connect} from 'alt-react';
import counterpart from 'counterpart';
import AccountStore from 'stores/AccountStore';
import {Link} from 'react-router-dom';
import Translate from 'react-translate-component';
import TranslateWithLinks from './Utility/TranslateWithLinks';
import {isIncognito} from 'feature_detect';
import SettingsStore from 'stores/SettingsStore';
import IntlActions from 'actions/IntlActions';
import AccountRegistrationForm from './Registration/AccountRegistrationForm';
import {Route} from 'react-router-dom';
import {getWalletName, getLogo} from 'branding';
import {Select, Row, Col} from 'antd';
var logo = getLogo();
import {AiOutlineGlobal} from 'react-icons/ai';

class LoginSelector extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
			locales: SettingsStore.getState().defaults.locale,
			currentLocale: SettingsStore.getState().settings.get('locale'),
		};
		this.unmounted = false;

		this.handleLanguageSelect = this.handleLanguageSelect.bind(this);
	}

	UNSAFE_componentWillMount() {
		isIncognito((incognito) => {
			if (!this.unmounted) {
				this.setState({incognito});
			}
		});
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	onSelect(route) {
		this.props.history.push('/registration/' + route);
	}

	handleLanguageSelect(locale) {
		IntlActions.switchLocale(locale);
		this.setState({
			currentLocale: locale,
		});
	}

	languagesFilter(input, option) {
		return (
			option.props.language.toLowerCase().indexOf(input.toLowerCase()) >= 0
		);
	}

	render() {
		const translator = require('counterpart');

		const flagDropdown = (
			<Select
				showSearch
				filterOption={this.languagesFilter}
				value={this.state.currentLocale}
				onChange={this.handleLanguageSelect}
				style={{width: '123px', marginBottom: '16px'}}
				getPopupContainer={(triggerNode) => triggerNode.parentNode}
			>
				{this.state.locales.map((locale) => (
					<Select.Option
						key={locale}
						language={counterpart.translate('languages.' + locale)}
					>
						{counterpart.translate('languages.' + locale)}
					</Select.Option>
				))}
			</Select>
		);

		return (
			<div className="grid-block align-center" id="accountForm">
				<div className="grid-block shrink vertical">
					<div className="grid-content shrink text-center account-creation">
						<div>
							<img src={logo} />
						</div>

						<div>
							<Translate content="header.create_account" component="h4" />
						</div>

						<div>
							<Translate
								content="account.intro_text_title"
								component="h4"
								wallet_name={getWalletName()}
							/>
							<Translate unsafe content="account.intro_text_1" component="p" />

							<div className="shrink text-center">
								<div className="grp-menu-item overflow-visible account-drop-down">
									<div
										className="grp-menu-item overflow-visible login-selector--language-select"
										style={{margin: '0 auto'}}
										data-intro={translator.translate(
											'walkthrough.language_flag'
										)}
									>
										<Row className="login-selector--language-select--wrapper">
											<Col span={4}>
												<AiOutlineGlobal className="login-selector--language-select--icon" />
											</Col>
											<Col span={20}>{flagDropdown}</Col>
										</Row>
									</div>
								</div>
							</div>
						</div>

						<div className="grid-block account-login-options">
							<Link
								id="account_login_button"
								to="/registration"
								className="button primary"
								data-intro={translator.translate(
									'walkthrough.create_cloud_wallet'
								)}
							>
								<Translate content="header.create_account" />
							</Link>

							<span className="button primary" onClick={() => {}}>
								<Translate content="header.unlock_short" />
							</span>
						</div>

						<div className="additional-account-options">
							<h5 style={{textAlign: 'center'}}>
								<TranslateWithLinks
									string="account.optional.formatter"
									keys={[
										{
											type: 'link',
											value: '/wallet/backup/restore',
											translation: 'account.optional.restore_link',
											dataIntro: translator.translate(
												'walkthrough.restore_account'
											),
											arg: 'restore_link',
										},
										{
											type: 'link',
											value: '/registration',
											translation: 'account.optional.restore_form',
											dataIntro: translator.translate(
												'walkthrough.create_local_wallet'
											),
											arg: 'restore_form',
										},
									]}
								/>
							</h5>
						</div>

						<Route
							path="/registration"
							exact
							component={AccountRegistrationForm}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(LoginSelector, {
	listenTo() {
		return [AccountStore];
	},
	getProps() {
		return {
			currentAccount:
				AccountStore.getState().currentAccount ||
				AccountStore.getState().passwordAccount,
		};
	},
});
