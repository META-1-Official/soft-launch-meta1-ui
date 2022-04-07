import React from 'react';
import {Col, Row, Typography} from 'antd';
import {getGoldImage} from 'branding';
import {FaArrowLeft} from 'react-icons/fa';

const {Text, Title} = Typography;

const AssetExplorerDetails = () => {
	return (
		<div
			css={(theme) => ({
				width: '70%',
				margin: '0 auto',
				paddingBottom: '4rem',
				[`@media (max-width: ${theme.sizes.lg})`]: {
					width: '100%',
					padding: '1rem',
				},
			})}
		>
			<div
				css={(theme) => ({
					padding: '3rem',
					textAlign: 'center',
					[`@media (max-width: ${theme.sizes.lg})`]: {
						padding: '1rem',
					},
				})}
			>
				<Title
					level={3}
					css={(theme) => ({
						fontFamily: 'Poppins',
						color: `${theme.colors.helpTextColor} !important`,
						fontWeight: '500 !important',
					})}
				>
					Explore assets Assigned to META BLOCKCHAIN{' '}
				</Title>
				<Title
					level={5}
					css={(theme) => ({
						fontFamily: 'Poppins',
						color: `${theme.colors.helpTextColor} !important`,
						marginTop: '10px !important',
					})}
				>
					Asset Assignment statistics, history & data
				</Title>
			</div>
			<div>
				<Text
					css={(theme) => ({
						fontFamily: 'Poppins',
						color: `${theme.colors.primaryColor} !important`,
						fontSize: '14px',
						marginBottom: '1rem',
					})}
				>
					<FaArrowLeft
						css={(theme) => ({
							marginRight: '10px',
							color: `${theme.colors.primaryColor} !important`,
						})}
					/>
					Back
				</Text>
				<div>
					<div
						css={(theme) => ({
							marginTop: '1rem',
							backgroundColor: `#21252f`,
							padding: '1.3rem 2rem',
							textTransform: 'uppercase',
							lineHeight: '1.5rem',
							borderTopLeftRadius: '10px',
							borderTopRightRadius: '10px',
							[`@media (max-width: ${theme.sizes.lg})`]: {
								padding: '1.3rem 10px',
							},
						})}
					>
						<Text
							css={(theme) => ({
								fontFamily: 'Poppins',
								color: `${theme.colors.white} !important`,
								fontSize: '14px',
							})}
						>
							Beginning balance gold reserve assignment of $8,888,888,888.00
							with supporting bonds of equal value insuring the principal gold
							reserves
						</Text>
					</div>
					<div
						css={(theme) => ({
							backgroundColor: theme.colors.bankingAssetsDetailBackground,
							borderBottomLeftRadius: '10px',
							borderBottomRightRadius: '10px',
							padding: '1.5rem 3rem',
							[`@media (max-width: ${theme.sizes.lg})`]: {
								padding: '1.3rem 10px',
							},
						})}
					>
						<Row align="middle">
							<Col xs={24} sm={4} lg={7}>
								<img
									src={getGoldImage()}
									css={{marginLeft: '10px'}}
									width={'80%'}
								/>
							</Col>
							<Col xs={24} sm={20} lg={17}>
								<div
									css={(theme) => ({
										marginBottom: '2rem',
									})}
								>
									<Text
										css={(theme) => ({
											fontFamily: 'Poppins',
											color: `${theme.colors.helpTextColor} !important`,
											fontSize: '16px',
										})}
									>
										GOLD RESERVES WITH BOND BG535327277-6420 RECORDED IN
										COMMERCE
									</Text>
								</div>

								<Row
									gutter={[16, 16]}
									css={(theme) => ({
										fontFamily: 'Poppins',
										color: `${theme.colors.helpTextColor} !important`,
										fontSize: '15px',
										lineHeight: '1.5rem',
									})}
								>
									<Col xs={12} sm={9}>
										Custodian
									</Col>
									<Col xs={12} sm={9}>
										{' '}
										META HOLDINGS TRUST{' '}
									</Col>
								</Row>
								<Row
									gutter={[16, 16]}
									css={(theme) => ({
										fontFamily: 'Poppins',
										color: `${theme.colors.helpTextColor} !important`,
										fontSize: '15px',
										lineHeight: '1.5rem',
									})}
								>
									<Col xs={12} sm={9}>
										Contact Email:
									</Col>
									<Col xs={12} sm={9}>
										private@meta1.io
									</Col>
								</Row>
								<div
									css={(theme) => ({
										fontFamily: 'Poppins',
										fontSize: '15px',
										padding: '1rem 0rem',
									})}
								>
									<Text
										css={(theme) => ({
											fontFamily: 'Poppins',
											color: `${theme.colors.primaryColor} !important`,
											textDecoration: 'underline',
										})}
									>
										Document Link
									</Text>
								</div>

								<Row
									css={(theme) => ({
										fontFamily: 'Poppins',
										color: `${theme.colors.helpTextColor} !important`,
										fontSize: '15px',
										lineHeight: '1.3rem',
									})}
									gutter={[16, 16]}
								>
									<Col xs={12} sm={9}>
										Appraised Asset Value:
									</Col>
									<Col xs={12} sm={9}>
										$8,888,888,888{' '}
									</Col>
									<Col xs={12} sm={9}>
										Surety Bond Value:
									</Col>
									<Col xs={12} sm={9}>
										$8,888,888,888{' '}
									</Col>
									<Col xs={12} sm={9}>
										Surety Bond Number:{' '}
									</Col>
									<Col xs={12} sm={9}>
										5353272776420{' '}
									</Col>
									<Col xs={12} sm={9}>
										Time of Smooth Allocation:
									</Col>
									<Col xs={12} sm={9}>
										One hour{' '}
									</Col>
									<Col xs={12} sm={9}>
										Backed by Asset:{' '}
									</Col>
									<Col xs={12} sm={9}>
										META1
									</Col>
									<Col xs={12} sm={9}>
										Creation Date:
									</Col>
									<Col xs={12} sm={9}>
										2020-07-06T12:42:00
									</Col>
									<Col xs={12} sm={9}>
										Approval End Date:
									</Col>
									<Col xs={12} sm={9}>
										2020-07-06T13:42:00
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssetExplorerDetails;

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
