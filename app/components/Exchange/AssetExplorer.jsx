import React, {useState, useEffect} from 'react';
import {Col, Row, List, Avatar, Progress, Tabs, Typography} from 'antd';
import counterpart from 'counterpart';
import PageHeader from 'components/PageHeader/PageHeader';
import {getBankingAssetsLogo, getGoldImage} from 'branding';
import {useTheme} from '@emotion/react';
import SearchInput from '../Utility/SearchInput';
import {Apis} from 'meta1-vision-ws';

const {Text} = Typography;
const {TabPane} = Tabs;

const AssetExplorer = ({history}) => {
	const theme = useTheme();

	const bankingAssetsLogo = getBankingAssetsLogo();
	const [backingAssets, setBackingAssets] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [meta1Price, setMeta1Price] = useState(0.0);

	useEffect(() => {
		ochestrateData();
	}, []);

	const ochestrateData = async () => {
		var bk_assets = await Apis.db.get_all_properties();
		var meta1_price =
			(await Apis.db.get_asset_limitation_value('META1')) / 1000000000;
		setMeta1Price(meta1_price);

		var ochestratedAssets = [];
		bk_assets.map(async (asset) => {
			let status = counterpart.translate('exchange.asset_explorer.pending');
			if (asset.approval_date) {
				status = counterpart.translate('exchange.asset_explorer.approved');
			}
			if (asset.expired && !asset.approval_date) {
				status = counterpart.translate('exchange.asset_explorer.cancelled');
			}

			ochestratedAssets.push({
				description: asset.options.description,
				descriptionAmount: asset.options.property_surety_bond_value,
				status,
				percent: get_allocation_progress(asset),
				pid: asset.property_id,
			});
		});

		setBackingAssets(ochestratedAssets);
	};

	const get_allocation_progress = (asset) => {
		const {
			initial_counter,
			initial_counter_max,
			approval_counter,
			approval_counter_max,
		} = asset;

		const initial = initial_counter / initial_counter_max;
		const approval = approval_counter / approval_counter_max;

		const a = initial / 4;
		const b = (approval * 3) / 4;

		return (a + b) * 100;
	};

	const onSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const onDescriptionClick = (pid) => {
		history.push(`asset-explorer-details?backed_asset_property_id=${pid}`);
	};

	const renderList = (status) => (
		<List
			itemLayout="horizontal"
			dataSource={backingAssets.filter((asset) => {
				return (
					asset.status === status &&
					asset.description.toLowerCase().includes(searchQuery)
				);
			})}
			renderItem={({description, descriptionAmount, status, percent, pid}) => (
				<List.Item>
					<List.Item.Meta
						avatar={<Avatar src={getGoldImage()} className="asset-img" />}
						description={
							<Row>
								<Col xs={24} sm={12} className="container">
									<Text
										onClick={() => onDescriptionClick(pid)}
										style={{
											color: theme.colors.descriptionTextColor,
											fontSize: '16px',
											cursor: 'pointer',
										}}
									>
										{description}
									</Text>
									<br />
									<Text
										style={{
											color: theme.colors.themeOpositeColor,
											fontWeight: 'bold',
											fontSize: '18px',
											lineHeight: '45x',
										}}
									>
										${Number(descriptionAmount).toLocaleString()}
									</Text>
								</Col>
								<Col
									xs={24}
									sm={6}
									style={{
										textAlign: 'center',
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<Text
										className="content"
										style={{
											color: theme.colors.bankingAssetsStatusColor,
										}}
									>
										{status}
									</Text>
								</Col>

								<Col
									xs={24}
									sm={6}
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
									}}
								>
									<Text
										className="percentage-content"
										style={{
											color: percent > 50 ? '#0F923A' : '#FFC000',
										}}
									>
										{percent}%
									</Text>
									<Progress
										percent={percent}
										strokeColor={percent > 50 ? '#0F923A' : '#FFC000'}
										showInfo={false}
										trailColor={theme.colors.borderColor}
										className="progress"
									/>
								</Col>
							</Row>
						}
					/>
				</List.Item>
			)}
		/>
	);

	return (
		<div className="backing-assets">
			<PageHeader
				title={counterpart.translate('header.arts')}
				level={3}
				showDivider
			/>
			<div className="content-body">
				<Row align="middle" gutter={[16, 16]} className="header">
					<Col xs={4} sm={3}>
						<img src={bankingAssetsLogo} />
					</Col>
					<Col xs={20} sm={19} className="header-content">
						<Text
							className="title1"
							style={{color: theme.colors.descriptionTextColor}}
						>
							{counterpart.translate(
								'exchange.asset_explorer.explore_assets_assigned_to_meta1'
							)}
						</Text>
						<Text
							className="title2"
							style={{color: theme.colors.themeOpositeColor}}
						>
							{counterpart.translate(
								'exchange.asset_explorer.meta1_coin_current_asset_value'
							)}
							:&nbsp;
							<Text className="golden">${meta1Price.toFixed(6)}</Text>
						</Text>
						<Text
							className="title3"
							style={{color: theme.colors.descriptionTextColor}}
						>
							{counterpart.translate(
								'exchange.asset_explorer.asset_assignment_statistics_history_data'
							)}
						</Text>
					</Col>
				</Row>
				<div className="list-wrapper">
					<SearchInput
						placeholder={counterpart.translate(
							'exchange.asset_explorer.search_for_backing_assets'
						)}
						value={searchQuery}
						onChange={onSearchChange}
					/>
					<Tabs defaultActiveKey="1" type="card">
						<TabPane
							tab={counterpart.translate('exchange.asset_explorer.approved')}
							key="1"
							className="approved-tab"
						>
							{renderList(
								counterpart.translate('exchange.asset_explorer.approved')
							)}
						</TabPane>
						<TabPane
							tab={counterpart.translate('exchange.asset_explorer.cancelled')}
							key="2"
						>
							{renderList(
								counterpart.translate('exchange.asset_explorer.cancelled')
							)}
						</TabPane>
						<TabPane
							tab={counterpart.translate('exchange.asset_explorer.pending')}
							key="3"
						>
							{renderList(
								counterpart.translate('exchange.asset_explorer.pending')
							)}
						</TabPane>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default AssetExplorer;
