import React from 'react';
import HelpContent from './Utility/HelpContent';
import {toPairs} from 'lodash-es';
import PageHeader from 'components/PageHeader/PageHeader';
import {Col, Row} from 'antd';

class Help extends React.Component {
	render() {
		console.log(this.props.match.params);
		let path = toPairs(this.props.match.params)
			.map((p) => p[1])
			.join('/');

		return (
			<>
				<PageHeader title="Help" />
				<div
					css={() => ({
						height: '100%',
					})}
				>
					<Row
						css={() => ({
							height: '80vh',
							overflow: 'auto',
						})}
					>
						<Col xs={12} sm={8} lg={6}>
							<div
								// className="help-toc"
								css={(theme) => ({
									padding: '20px',
									height: '100%',
									ul: {
										listStyle: 'none',
										height: `80vh`,
										backgroundColor: '#111215',
									},
									li: {
										border: `1px solid ${theme.colors.borderColor}`,
										padding: '5px 16px !important',
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
								<HelpContent path="toc" />
							</div>
						</Col>
						<Col
							sm={17}
							css={(theme) => ({
								padding: '0rem 2rem',
								marginTop: '4rem',
								// border: '1px solid red',
								p: {
									color: 'white',
									fontSize: '14px',
								},
							})}
						>
							{/* <div className="grid-content main-content"> */}

							<HelpContent path={path || 'index'} />
							{/* </div> */}
						</Col>
					</Row>
				</div>

				{/* <div className="grid-container page-layout help-content-layout">
					<div className="grid-block page-layout">
						<div className="grid-block main-content wrap regular-padding">
							<div className="grid-block medium-3">
								<div className="grid-content help-toc responsive-list">
									<HelpContent path="toc" />
								</div>
							</div>

							<div className="grid-block medium-9">
								<div className="grid-content main-content">
									<HelpContent path={path || 'index'} />
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</>
		);
	}
}

export default Help;
