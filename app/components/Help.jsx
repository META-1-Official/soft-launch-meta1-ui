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

		return (
			<>
				<PageHeader title="Help" showDivider level={2} />
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
						<Col xs={24} sm={8} lg={6}>
							<div
								className="help-toc"
								css={(theme) => ({
									padding: '20px',
									height: '100%',
									ul: {
										listStyle: 'none !important',
										height: `100%`,
										backgroundColor: theme.colors.helpSideBarColor,
									},
									li: {
										border: `1px solid ${theme.colors.borderColor}`,
										padding: '0',
									},
									a: {
										color: 'white !important',
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
