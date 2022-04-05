import React from 'react';
import {Col, Row, List, Avatar, Progress, Tabs, Typography} from 'antd';
import PageHeader from 'components/PageHeader/PageHeader';
import {getBankingAssetsLogo, getGoldImage} from 'branding';

const {Text} = Typography;
const {TabPane} = Tabs;
const AssetExplorer = () => {
	const bankingAssetsLogo = getBankingAssetsLogo();

	const data = [
		{
			title: 'Ant Design Title 1',
		},
		{
			title: 'Ant Design Title 2',
		},
		{
			title: 'Ant Design Title 3',
		},
		{
			title: 'Ant Design Title 4',
		},
	];

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
									color: theme.colors.themeOpositeColor,
									fontSize: '16px',
									fontFamily: 'Poppins',
								})}
							>
								META1 Coin Current Asset Value: $99.74{' '}
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
								Asset Assignment statistics, history & data{' '}
							</Text>
						</div>
					</Col>
				</Row>

				<div
					css={(theme) => ({
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
								renderItem={(item) => (
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
															css={(theme) => ({
																color: theme.colors.descriptionTextColor,
																fontSize: '14px',
																paddingBottom: '10px',
																fontFamily: 'Poppins',
															})}
														>
															BEGINNING BALANCE GOLD RESERVE ASSIGNMENT OF
															$8,888,888,888.00 WITH SUPPORTING BONDS OF EQUAL
															VALUE INSURING THE PRINCIPAL GOLD RESERVES
														</Text>
														<br />
														<Text
															css={(theme) => ({
																color: theme.colors.primaryColor,
																fontWeight: 'bold',
															})}
														>
															$8,888,888,888
														</Text>
													</Col>
													<Col xs={24} sm={6}>
														<Text
															css={(theme) => ({
																color: '#0f923a',
																fontSize: '14px',
																paddingBottom: '10px',
																fontFamily: 'Poppins',
															})}
														>
															Approved
														</Text>
													</Col>

													<Col xs={24} sm={6}>
														<Progress percent={50} showInfo={false} />
													</Col>
												</Row>
											}
										/>
									</List.Item>
								)}
							/>
						</TabPane>
						<TabPane tab="Cancelled" key="2">
							Content of card tab 2
						</TabPane>
						<TabPane tab="Pending" key="3">
							Content of card tab 3
						</TabPane>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default AssetExplorer;

// import React from "react";

// class AssetExplorer extends React.Component {
//     render() {
//         return (
//             <div
//                 dangerouslySetInnerHTML={{
//                     __html: `<iframe src="https://api.meta1.io" width="100%" style="height:100vh; border-width:0px; border:none;" height="100%"></iframe>`
//                 }}
//             />
//         );
//     }
// }

// export default AssetExplorer;
