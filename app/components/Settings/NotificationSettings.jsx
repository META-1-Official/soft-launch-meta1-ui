import React, {useEffect, useState, useReducer} from 'react';
import {Switch, Select} from 'antd';
import {toast} from 'react-toastify';
import {getAssetIcon} from 'constants/assets';

// notification items
import AnnouncementIcon from 'assets/notifications/announcements.png';
import EventIcon from 'assets/notifications/events.png';
import DepositIcon from 'assets/notifications/deposit.png';
import WithdrawlIcon from 'assets/notifications/withdrawal.png';
import SendIcon from 'assets/notifications/send.png';
import ReceiveIcon from 'assets/notifications/receive.png';
import OrderCreatedIcon from 'assets/notifications/order-created.png';
import OrderCancelledIcon from 'assets/notifications/order-cancelled.png';

const NotificationSettings = (props) => {
	const [notiMode, setNotiMode] = useState(null);
	const [selectedCoinMovement, setSelectedCoinMovement] = useState('META1');
	const [selectedTendency, setSelectedTendency] = useState('up');
	const [selectedComparator, setSelectedComparator] = useState('price');
	const [comparatorValue, setComparatorValue] = useState();
	const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
	const iconList = {
		events: EventIcon,
		announcements: AnnouncementIcon,
		deposits: DepositIcon,
		withdrawals: WithdrawlIcon,
		tradeExcuted: OrderCreatedIcon,
		tradeCanceled: OrderCancelledIcon,
		send: SendIcon,
		receive: ReceiveIcon,
	};

	useEffect(() => {
		var conf = JSON.parse(localStorage.getItem('noti_conf'));
		conf && setNotiMode(conf);
	}, [localStorage.getItem('noti_conf')]);

	const handleCoinSelect = (value) => {
		setSelectedCoinMovement(value);
	};

	const handleTendencyChange = (event) => {
		setSelectedTendency(event.target.value);
	};

	const handleComparatorChange = (event) => {
		setSelectedComparator(event.target.value);
	};

	const handleComparatorValueChange = (event) => {
		setComparatorValue(event.target.value);
	};

	const handleToggle = (value) => {
		var new_conf = notiMode;

		new_conf.specNotification.map((ele, index) => {
			var obj_key, obj_value;
			for (var key in ele) {
				obj_key = key;
				obj_value = ele[key];
			}

			if (obj_key === value)
				new_conf.specNotification[index][obj_key] =
					!new_conf.specNotification[index][obj_key];
		});

		localStorage.setItem('noti_conf', JSON.stringify(new_conf));
		// dispatch(getNotificationsRequest({ login: accountNameState }));
		setNotiMode(new_conf);
		forceUpdate();
	};

	const handleCoinMovementToggle = (value) => {
		let asset = value.toLowerCase();
		var new_conf = notiMode;

		new_conf.coinMovements.map((ele, index) => {
			var obj_key, obj_value;
			for (var key in ele) {
				obj_key = key;
				obj_value = ele[key];
			}

			if (obj_key === asset)
				new_conf.coinMovements[index][obj_key].toggle =
					!new_conf.coinMovements[index][obj_key].toggle;
		});

		localStorage.setItem('noti_conf', JSON.stringify(new_conf));
		// dispatch(getNotificationsRequest({ login: accountNameState }));
		setNotiMode(new_conf);
		forceUpdate();
	};

	const handleCoinSave = () => {
		if (!selectedCoinMovement) {
			toast('Please select asset');
			return;
		}
		if (!selectedTendency) {
			toast('Please select tendency');
			return;
		}
		if (!selectedComparator) {
			toast('Please select tendency');
			return;
		}
		if (!comparatorValue) {
			toast('Please adjust value');
			return;
		}

		var new_conf = notiMode;
		var flag = false;
		var symbol = selectedCoinMovement.toLowerCase();

		new_conf.coinMovements.map((ele, index) => {
			var obj_key, obj_value;
			for (var key in ele) {
				obj_key = key;
				obj_value = ele[key];
			}

			if (obj_key === symbol) {
				new_conf.coinMovements[index][obj_key].toggle = true;
				new_conf.coinMovements[index][obj_key].tendency = selectedTendency;
				new_conf.coinMovements[index][obj_key].comparator = [
					selectedComparator,
					comparatorValue,
				];
				flag = true;
			}
		});

		if (!flag) {
			var pushVal = {};
			pushVal[symbol] = {};
			pushVal[symbol].toggle = true;
			pushVal[symbol].tendency = selectedTendency;
			pushVal[symbol].comparator = [selectedComparator, comparatorValue];
			new_conf.coinMovements.push(pushVal);
		}

		localStorage.setItem('noti_conf', JSON.stringify(new_conf));
		// dispatch(getNotificationsRequest({ login: accountNameState }));
		setNotiMode(new_conf);
		toast('Successfully saved your settings');
		forceUpdate();
	};

	const handleClose = (val) => {
		var symbol = val.toLowerCase();
		var new_conf = notiMode;

		new_conf.coinMovements.map((ele, index) => {
			var obj_key, obj_value;
			for (var key in ele) {
				obj_key = key;
				obj_value = ele[key];
			}

			if (obj_key === symbol) {
				new_conf.coinMovements.splice(index, 1);
			}
		});

		localStorage.setItem('noti_conf', JSON.stringify(new_conf));
		// dispatch(getNotificationsRequest({ login: accountNameState }));
		setNotiMode(new_conf);
		toast('Successfully deleted.');
		forceUpdate();
	};

	return (
		<div className="notificationTabWrapper">
			<div className="changeNotifcationBlock">
				<div className="notificationPrefContent">
					<h5>
						Select the kind of notifications you get about your activities.
					</h5>
					<hr />
					{notiMode &&
						notiMode.specNotification &&
						notiMode.specNotification.map((ele) => {
							var obj_key, obj_value;
							for (var key in ele) {
								obj_key = key;
								obj_value = ele[key];
							}
							return (
								<div className="notificationItem" key={key}>
									<div className="leftItem">
										<div>
											<img src={iconList[obj_key]} alt={obj_key} />
										</div>
										<span>{obj_key}</span>
									</div>
									<div className="rightItem">
										<Switch
											className="switch"
											onChange={() => handleToggle(obj_key)}
											inputProps={{'aria-label': 'controlled'}}
											color={'warning'}
											checked={obj_value}
										/>
									</div>
								</div>
							);
						})}
					<div className="coinMovements">Coin Movements</div>
					{notiMode &&
						notiMode.coinMovements &&
						notiMode.coinMovements.map((ele) => {
							var obj_key, obj_value;
							for (var key in ele) {
								obj_key = key;
								obj_value = ele[key];
							}
							return (
								<div className="coinNotificationItem" key={key}>
									<div className="leftItem">
										<img
											src={getAssetIcon(obj_key.toUpperCase())}
											alt="edit profile"
										/>
										<div className="coinSec">
											<span>{obj_key.toUpperCase()}</span>
											<span>{`Price move ${obj_value.tendency} by ${
												obj_value.comparator[0] === 'price' ? '$' : ''
											}${obj_value.comparator[1]}${
												obj_value.comparator[0] === 'percentage' ? '%' : ''
											}`}</span>
										</div>
									</div>
									<div className="rightItem">
										<Switch
											className="switch"
											checked={obj_value.toggle}
											onChange={() => handleCoinMovementToggle(obj_key)}
											inputProps={{'aria-label': 'controlled'}}
											color={'warning'}
										/>
										<button
											onClick={() => handleClose(obj_key.toUpperCase())}
											className="close-btn"
										>
											X
										</button>
									</div>
								</div>
							);
						})}
				</div>
				<div className="form_custom">
					<div className="row">
						<div className="col-lg-12">
							<div className="coin-122">
								<p className="coin_p">Coin Movements</p>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="common_margin">
								<label className="label_same">Coins:</label>
								<Select
									value={selectedCoinMovement}
									onChange={handleCoinSelect}
									dropdownClassName="coin-movement"
								>
									{process.env.CRYPTOS_ARRAY.split(',').map((ele) => {
										if (ele !== 'USDT') {
											return (
												<div value={ele} className="wallet-option">
													<div className="wallet-option-picture">
														<img alt="eth" src={getAssetIcon(ele)} />
													</div>
													<div>
														<div className="wallet-option-content__currency">
															<span className="wallet-option-content__name">
																{ele}{' '}
															</span>
														</div>
													</div>
												</div>
											);
										}
									})}
								</Select>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="common_margin">
								<label className="label_same">Movement:</label>
								<select
									value={selectedTendency}
									onChange={handleTendencyChange}
									className="select_same"
								>
									<option value="up">Greater Than</option>
									<option value="down">Less Than</option>
								</select>
							</div>
						</div>
					</div>
					<div className="row comparator-wrapper">
						<div className="col-lg-6 left">
							<div className="common_margin">
								<select
									value={selectedComparator}
									onChange={handleComparatorChange}
									className="select_same"
								>
									<option value="price">By Price</option>
									<option value="percentage">By Percentage</option>
								</select>
							</div>
						</div>
						<div className="col-lg-6 right">
							<div className="common_margin">
								<input
									type="number"
									placeholder={
										selectedComparator === 'price' ? '$10.00' : '5.00%'
									}
									value={comparatorValue}
									onChange={handleComparatorValueChange}
								/>
							</div>
						</div>
					</div>
					<button className="btn_save_movment" onClick={handleCoinSave}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotificationSettings;
