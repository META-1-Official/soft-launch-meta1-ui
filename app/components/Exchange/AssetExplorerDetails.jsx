import React, {useState, useEffect} from 'react';
import counterpart from 'counterpart';
import {Col, Row, Typography, Progress} from 'antd';
import {getGoldImage} from 'branding';
import theme from '../../lib/styles/themeDark';
import {FaArrowLeft} from 'react-icons/fa';
import {Apis} from 'meta1-vision-ws';

const {Text, Title} = Typography;

const AssetExplorerDetails = ({history}) => {
	const asset_pid = history?.location?.search.split('=')[1];
	const [asset, setAsset] = useState();
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		var asset = await Apis.db.get_property_by_id(parseInt(asset_pid));
		setAsset(asset);
		setPercent(get_allocation_progress(asset));
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

	const timeFormat = (minutes) => {
		if (minutes <= 1) return `One Minute`;
		if (1 < minutes && minutes < 60) return `${minutes} Minutes`;

		var hours = Math.floor(minutes / 60);
		var re_mins = minutes % 60;
		if (hours <= 1) {
			if (re_mins == 0 || re_mins == 60) return `One Hour`;
			if (re_mins == 1) return `One Hour & One Minute`;
			if (1 < re_mins) return `One Hour & ${re_mins} Minutes`;
		}

		if (1 < hours && hours < 24) {
			if (re_mins == 0 || re_mins == 60) return `${hours} Hours`;
			if (re_mins == 1) return `${hours} Hours & One Minute`;
			if (1 < re_mins) return `${hours} Hours & ${re_mins} Minutes`;
		}

		var days = Math.floor(hours / 24);
		var re_hours = hours % 24;

		if (days == 1) {
			if (re_hours == 0 || re_hours == 24) return `One Day`;
			if (re_hours == 1) return `One Day & One Hour`;
			if (1 < re_hours) return `One Day & ${re_hours} Hours`;
		}

		if (re_hours == 0 || re_hours == 24) return `${days} Days`;
		if (re_hours == 1) return `${days} Days & One Hour`;
		if (1 < re_hours) return `${days} Days & ${re_hours} Hours`;
	};

	return (
		<div className="backing-asset-detail">
			<div className="header-wrapper">
				<Title
					level={3}
					css={(theme) => ({
						color: `${theme.colors.helpTextColor} !important`,
						fontWeight: '500 !important',
						fontSize: '30px !important',
					})}
				>
					{counterpart.translate(
						'exchange.asset_explorer.explore_assets_assigned_to_meta1'
					)}
				</Title>
				<Title
					level={5}
					css={(theme) => ({
						color: `${theme.colors.helpTextColor} !important`,
						marginTop: '10px !important',
						fontSize: '16px !important',
						fontWeight: '400 !important',
					})}
				>
					{counterpart.translate(
						'exchange.asset_explorer.asset_assignment_statistics_history_data'
					)}
				</Title>
			</div>
			<div className="main-body">
				<Text
					css={(theme) => ({
						color: `${theme.colors.primaryColor} !important`,
						fontSize: '15px',
						marginBottom: '1rem',
						cursor: 'pointer',
					})}
					onClick={() => history.push('./asset-explorer')}
				>
					<FaArrowLeft
						css={(theme) => ({
							marginRight: '10px',
							color: `${theme.colors.primaryColor} !important`,
						})}
					/>
					{counterpart.translate('wallet.back')}
				</Text>
				<div>
					<div className="title-wrapper">
						<Text
							css={(theme) => ({
								color: `${theme.colors.white} !important`,
								fontSize: '18px',
								lineHeight: '27px',
							})}
						>
							{asset?.options.title}
						</Text>
					</div>
					<div className="info-body">
						<Row className="info-details" align="middle">
							<Col xs={24} sm={6} lg={12}>
								<img
									src={getGoldImage()}
									css={{marginLeft: '10px', marginRight: '10px'}}
									className="info-img"
								/>
							</Col>
							<Col xs={24} sm={18} lg={12}>
								<div
									css={() => ({
										marginBottom: '2rem',
									})}
								>
									<Text
										css={(theme) => ({
											color: `${theme.colors.helpTextColor} !important`,
										})}
										className="info-content"
									>
										{asset?.options.description}
									</Text>
								</div>

								<Row
									gutter={[16, 16]}
									css={(theme) => ({
										color: `${theme.colors.helpTextColor} !important`,
										fontSize: '15px',
										lineHeight: '1.5rem',
									})}
								>
									<Col xs={12} sm={9} className="info-content-value">
										{counterpart.translate('exchange.asset_explorer.custodian')}
										:
									</Col>
									<Col xs={12} sm={9} className="info-content-value">
										{' '}
										{asset?.options.custodian}
									</Col>
								</Row>
								<Row
									gutter={[16, 16]}
									css={(theme) => ({
										color: `${theme.colors.helpTextColor} !important`,
										fontSize: '15px',
										lineHeight: '1.5rem',
									})}
								>
									<Col xs={12} sm={9} className="info-content-value">
										{counterpart.translate(
											'exchange.asset_explorer.contact_email'
										)}
										:
									</Col>
									<Col xs={12} sm={9} className="info-content-value">
										{asset?.options.owner_contact_email}
									</Col>
								</Row>
								<div
									css={() => ({
										fontSize: '15px',
										padding: '1rem 0rem',
									})}
								>
									<a
										css={(theme) => ({
											color: `${theme.colors.primaryColor} !important`,
										})}
										className="document-link"
										href={asset?.options.detailed_document_link}
									>
										{counterpart.translate(
											'exchange.asset_explorer.document_link'
										)}
									</a>
								</div>

								<Row
									css={(theme) => ({
										color: `${theme.colors.helpTextColor} !important`,
										fontSize: '15px',
										lineHeight: '1.3rem',
									})}
									gutter={[16, 16]}
								>
									<Col xs={12} sm={9} className="info-text">
										{counterpart.translate(
											'exchange.asset_explorer.appraised_asset_value'
										)}
										:
									</Col>
									<Col xs={12} sm={9} className="info-text">
										${Number(asset?.appraised_property_value).toLocaleString()}
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{counterpart.translate(
											'exchange.asset_explorer.surety_bond_value'
										)}
										:
									</Col>
									<Col xs={12} sm={9} className="info-text">
										$
										{Number(
											asset?.options.property_surety_bond_value
										).toLocaleString()}
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{counterpart.translate(
											'exchange.asset_explorer.surety_bond_number'
										)}
										:
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{asset?.options.property_surety_bond_number}
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{counterpart.translate(
											'exchange.asset_explorer.time_of_smooth_allocation'
										)}
										:
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{timeFormat(parseInt(asset?.allocation_duration_minutes))}
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{counterpart.translate(
											'exchange.asset_explorer.backed_by_asset'
										)}
										:
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{asset?.backed_by_asset_symbol}
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{counterpart.translate(
											'exchange.asset_explorer.creation_date'
										)}
										:
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{asset?.creation_date}
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{counterpart.translate(
											'exchange.asset_explorer.approval_end_date'
										)}
										:
									</Col>
									<Col xs={12} sm={9} className="info-text">
										{asset?.approval_end_date}
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</div>
				<div className="footer-progress">
					<Text
						css={(theme) => ({
							color: `${theme.colors.white} !important`,
							fontSize: '16px',
							fontWeight: 500,
						})}
					>
						{counterpart.translate(
							'exchange.asset_explorer.smooth_allocation_progress'
						)}
					</Text>
					<div className="progress-wrapper">
						<Text
							css={() => ({
								color: 'white',
								textAlign: 'right',
								fontSize: '16px',
								marginRight: '10px',
							})}
						>
							{percent}%
						</Text>
						<Progress
							percent={percent}
							strokeColor={'white'}
							showInfo={false}
							trailColor={theme.colors.borderColor}
							className="progress"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssetExplorerDetails;
