import React from 'react';
import {Col, Row, List, Avatar, Progress, Tabs, Typography} from 'antd';
import PageHeader from 'components/PageHeader/PageHeader';
import {getBankingAssetsLogo, getGoldImage} from 'branding';
import theme from '../../lib/styles/themeDark';

const {Text} = Typography;
const {TabPane} = Tabs;

const AssetExplorer = ({history}) => {
	const bankingAssetsLogo = getBankingAssetsLogo();

	const data = [
		{
			description:
				'BEGINNING BALANCE GOLD RESERVE ASSIGNMENT OF $8,888,888,888.00 WITH SUPPORTING BONDS OF EQUAL VALUE INSURING THE PRINCIPAL GOLD RESERVES',
			descriptionAmount: '$8,888,888,888',
			status: 'Approved',
			percent: 100,
		},
		{
			description:
				'GOLD RESERVE ASSET ASSIGNMENT OF $500,000,000.00 WITH SUPPORTING BONDS OF EQUAL VALUE INSURING THE PRINCIPAL GOLD RESERVES',
			descriptionAmount: '$8,888,888,888',
			status: 'Approved',
			percent: 100,
		},
		{
			description:
				'GOLD RESERVE ASSET ASSIGNMENT OF $5,600,000,000 WITH SUPPORTING BONDS OF EQUAL VALUE INSURING THE PRINCIPAL GOLD RESERVES',
			descriptionAmount: '$5,600,000,000',
			status: 'Approved',
			percent: 71.8,
		},
	];

	const onDescriptionClick = () => {
		history.push('asset-explorer-details');
	};

	return (
		<div>
			<PageHeader title="Banking Assets" level={3} showDivider />
			<div
				css={(theme) => ({
					margin: '2rem',
					border: `1px solid ${theme.colors.borderColor}`,
				})}
			>
				<Row align="middle" gutter={[16, 16]} css={{padding: '1.4rem 1rem'}}>
					<Col xs={4} sm={3}>
						<img src={bankingAssetsLogo} />
					</Col>
					<Col xs={20} sm={19}>
						<div
							css={(theme) => ({
								marginBottom: '10px',
							})}
						>
							<Text
								css={(theme) => ({
									color: theme.colors.helpTextColor,
									fontSize: '20px',
									paddingBottom: '10px',
									fontFamily: 'Poppins',
								})}
							>
								Explore assets assigned to META1 coin on the META blockchain{' '}
							</Text>
						</div>
						<div
							css={(theme) => ({
								marginBottom: '10px',
							})}
						>
							<Text
								css={(theme) => ({
									color: theme.colors.themeOppositeColor,
									fontSize: '16px',
									fontFamily: 'Poppins',
								})}
							>
								META1 Coin Current Asset Value: $99.74
							</Text>
						</div>
						<div
							css={(theme) => ({
								marginBottom: '10px',
							})}
						>
							<Text
								css={(theme) => ({
									color: theme.colors.helpTextColor,
									fontSize: '14px',
									paddingBottom: '10px',
									fontFamily: 'Poppins',
								})}
							>
								Asset Assignment statistics, history & data
							</Text>
						</div>
					</Col>
				</Row>

				<div
					css={() => ({
						padding: '10px',
					})}
				>
					<Tabs
						defaultActiveKey="1"
						type="card"
						css={{
							'.ant-tabs-nav-wrap': {
								backgroundColor: '#15171b',
							},
						}}
					>
						<TabPane tab="Approved" key="1">
							<List
								itemLayout="horizontal"
								dataSource={data}
								renderItem={({
									description,
									descriptionAmount,
									status,
									percent,
								}) => (
									<List.Item>
										<List.Item.Meta
											avatar={
												<Avatar
													src={getGoldImage()}
													size={{
														xs: 24,
														sm: 32,
														md: 40,
														lg: 54,
														xl: 60,
														xxl: 80,
													}}
													css={{marginLeft: '10px'}}
												/>
											}
											description={
												<Row>
													<Col xs={24} sm={12} css={{paddingLeft: '1rem'}}>
														<Text
															onClick={onDescriptionClick}
															css={(theme) => ({
																color: theme.colors.descriptionTextColor,
																fontSize: '14px',
																paddingBottom: '10px',
																fontFamily: 'Poppins',
																cursor: 'pointer',
															})}
														>
															{description}
														</Text>
														<br />
														<Text
															css={(theme) => ({
																color: theme.colors.primaryColor,
																fontWeight: 'bold',
															})}
														>
															{descriptionAmount}
														</Text>
													</Col>
													<Col xs={24} sm={6} css={{textAlign: 'center'}}>
														<Text
															css={(theme) => ({
																color: theme.colors.bankingAssetsStatusColor,
																fontSize: '14px',
																paddingBottom: '10px',
																fontFamily: 'Poppins',
															})}
														>
															{status}
														</Text>
													</Col>

													<Col xs={24} sm={6}>
														<Text
															css={(theme) => ({
																color: theme.colors.themeOppositeColor,
																float: 'right',
															})}
														>
															{percent}%
														</Text>
														<Progress
															percent={percent}
															strokeColor={
																theme.colors.bankingAssetsStatusColor
															}
															showInfo={false}
															trailColor={theme.colors.borderColor}
														/>
													</Col>
												</Row>
											}
										/>
									</List.Item>
								)}
							/>
						</TabPane>
						<TabPane tab="Cancelled" key="2">
							No backed assets found with required filter.
						</TabPane>
						<TabPane tab="Pending" key="3">
							No backed assets found with required filter.{' '}
						</TabPane>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default AssetExplorer;

// import React from 'react';
// class AssetExplorer extends React.Component {
// 	render() {
// 		return (
// 			<div
// 				dangerouslySetInnerHTML={{
// 					__html: `<iframe src="https://api.dev.meta1.io" width="100%" style="height:100vh; border-width:0px; border:none;" height="100%"></iframe>`,
// 				}}
// 			/>
// 		);
// 	}
// }

// export default AssetExplorer;
