import React from 'react';
import HelpContent from './Utility/HelpContent';
import {toPairs} from 'lodash-es';
import PageHeader from 'components/PageHeader/PageHeader';
import {Col, Row} from 'antd';

class Help extends React.Component {
	render() {
		const path = toPairs(this.props.match.params)
			.map((p) => p[1])
			.join('/');
		let isDesktop = window.matchMedia('(min-width: 1000px)').matches;
		return (
			<>
				<PageHeader title="Learn" showDivider level={2} />
				<div
					css={() => ({
						height: '100%',
						overflowY: 'hidden !important',
					})}
				>
					<Row
						css={() => ({
							height: '80vh',
							overflow: 'auto',
						})}
					>
						<Col xs={24} sm={24} lg={6}>
							<div
								className="help-toc"
								css={(theme) => ({
									padding: '20px',
									height: isDesktop ? '100%' : 'fit-content',
									ul: {
										listStyle: 'none !important',
										height: isDesktop ? `100%` : '44px',
										backgroundColor: theme.colors.helpSideBarColor,
										width: isDesktop ? '' : window.width,
										display: isDesktop ? '' : 'flex',
										overflowX: isDesktop ? '' : 'scroll',
										overflowY: isDesktop ? '' : 'hidden',
										margin: isDesktop ? '' : '0px',
									},
									li: {
										border: isDesktop
											? `1px solid ${theme.colors.borderColor}`
											: '',
										padding: '0',
										float: 'left',
										width: isDesktop ? '100%' : 'unset',
										div: {
											width: !isDesktop ? '120px !important' : '',
											display: !isDesktop ? 'flex !important' : '',
											justifyContent: !isDesktop ? 'center' : '',
											width: !isDesktop ? '120px' : '',
											padding: !isDesktop ? '6px 19px 6px !important' : '',

											a: {
												whiteSpace: !isDesktop ? 'nowrap' : '',
											},
										},
									},
									a: {
										display: isDesktop ? '' : 'block',
										color: theme.colors.themeOpositeColor,
										'&: hover': {
											color: `${theme.colors.primaryColor} !important`,
											backgroundColor: 'transparent !important',
										},
									},
								})}
							>
								<HelpContent path="toc" pathUrl={this.props.match.url} />
							</div>
						</Col>
						<Col
							sm={16}
							lg={18}
							xs={24}
							css={() => ({
								padding: '0rem 2rem',
								marginTop: '1rem',
							})}
						>
							<HelpContent
								path={path || 'index'}
								pathUrl={this.props.match.url}
							/>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

export default Help;
