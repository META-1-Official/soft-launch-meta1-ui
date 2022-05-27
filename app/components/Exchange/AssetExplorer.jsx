import React, {useState, useEffect} from 'react';
import {Col, Row, List, Avatar, Progress, Tabs, Typography} from 'antd';
import PageHeader from 'components/PageHeader/PageHeader';
import {getBankingAssetsLogo, getGoldImage} from 'branding';
import theme from '../../lib/styles/themeDark';
import SearchInput from '../Utility/SearchInput';
import {Apis} from 'meta1js-ws';

const {Text} = Typography;
const {TabPane} = Tabs;

const AssetExplorer = ({history}) => {
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
			let status = 'Pending';
			if (asset.approval_date) {
				status = 'Approved';
			}
			if (asset.expired && !asset.approval_date) {
				status = 'Cancelled';
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
								<Col xs={24} sm={12} css={{paddingLeft: '1rem'}}>
									<Text
										onClick={() => onDescriptionClick(pid)}
										css={(theme) => ({
											color: theme.colors.descriptionTextColor,
											fontSize: '16px',
											cursor: 'pointer',
										})}
									>
										{description}
									</Text>
									<br />
									<Text
										css={(theme) => ({
											color: 'white',
											fontWeight: 'bold',
											fontSize: '18px',
											lineHeight: '45x',
										})}
									>
										${Number(descriptionAmount).toLocaleString()}
									</Text>
								</Col>
								<Col
									xs={24}
									sm={6}
									css={{
										textAlign: 'center',
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<Text
										css={(theme) => ({
											color: theme.colors.bankingAssetsStatusColor,
											fontSize: '16px',
											width: '100%',
										})}
									>
										{status}
									</Text>
								</Col>

								<Col
									xs={24}
									sm={6}
									css={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
									}}
								>
									<Text
										css={(theme) => ({
											color: percent > 50 ? '#0F923A' : '#FFC000',
											float: 'right',
											width: '170px',
											textAlign: 'right',
											fontSize: '15px',
											marginBottom: '10px',
										})}
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
			<PageHeader title="Backing Assets" level={3} showDivider />
			<div className="content-body">
				<Row align="middle" gutter={[16, 16]} css={{padding: '30px'}}>
					<Col xs={4} sm={3}>
						<img src={bankingAssetsLogo} />
					</Col>
					<Col xs={20} sm={19} css={{display: 'flex', flexDirection: 'column'}}>
						<Text className="title1">
							Explore assets assigned to META1 coin on the META blockchain{' '}
						</Text>
						<Text className="title2">
							META1 Coin Current Asset Value:{' '}
							<Text className="golden">${meta1Price.toFixed(2)}</Text>
						</Text>
						<Text className="title3">
							Asset Assignment statistics, history & data
						</Text>
					</Col>
				</Row>
				<div className="list-wrapper">
					<SearchInput
						placeholder={'Search for backing assets'}
						value={searchQuery}
						onChange={onSearchChange}
					/>
					<Tabs defaultActiveKey="1" type="card">
						<TabPane tab="Approved" key="1" className="approved-tab">
							{renderList('Approved')}
						</TabPane>
						<TabPane tab="Cancelled" key="2">
							{renderList('Cancelled')}
						</TabPane>
						<TabPane tab="Pending" key="3">
							{renderList('Pending')}
						</TabPane>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default AssetExplorer;
