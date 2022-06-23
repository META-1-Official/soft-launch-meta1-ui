import React from 'react';
import debounceRender from 'react-debounce-render';
import BalanceComponent from '../Utility/BalanceComponent';
import {BalanceValueComponent} from '../Utility/EquivalentValueComponent';
import {Market24HourChangeComponent} from '../Utility/MarketChangeComponent';
import assetUtils from 'common/asset_utils';
import counterpart from 'counterpart';
import {Link} from 'react-router-dom';
import EquivalentPrice from '../Utility/EquivalentPrice';
import LinkToAssetById from '../Utility/LinkToAssetById';
import BorrowModal from '../Modal/BorrowModal';
import ReactTooltip from 'react-tooltip';
import {ChainStore} from 'meta1js';
import {connect} from 'alt-react';
import SettingsStore from 'stores/SettingsStore';
import MarketsStore from 'stores/MarketsStore';
import Icon from '../Icon/Icon';
import PulseIcon from '../Icon/PulseIcon';
import utils from 'common/utils';
import SendModal from '../Modal/SendModal';
import SettingsActions from 'actions/SettingsActions';
import SettleModal from '../Modal/SettleModal';
import ZfApi from 'react-foundation-apps/src/utils/foundation-api';
import ReserveAssetModal from '../Modal/ReserveAssetModal';
import CustomTable from '../Utility/CustomTable';
import MarketUtils from 'common/market_utils';
import {Tooltip} from 'antd';
import Translate from 'react-translate-component';
import AssetName from '../Utility/AssetName';
import TranslateWithLinks from '../Utility/TranslateWithLinks';
import StyledButton from 'components/Button/Button';
import {FaQuestionCircle} from 'react-icons/fa';
import {getAssetIcon, getAssetFullName} from '../utils/asset';
import DepositModal from '../Modal/DepositModal';

class AccountPortfolioList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isBridgeModalVisible: false,
			isSettleModalVisible: false,
			isBorrowModalVisible: false,
			isDepositModalVisible: false,
			isWithdrawModalVisible: false,
			isBurnModalVisible: false,
			isBridgeModalVisibleBefore: false,
			isSettleModalVisibleBefore: false,
			isBorrowModalVisibleBefore: false,
			isDepositModalVisibleBefore: false,
			isWithdrawModalVisibleBefore: false,
			isBurnModalVisibleBefore: false,
			borrow: null,
			settleAsset: '1.3.0',
			depositAsset: null,
			withdrawAsset: null,
			bridgeAsset: null,
			allRefsAssigned: false,
			portfolioSort: props.viewSettings.get('portfolioSort', 'value'),
			portfolioSortDirection: props.viewSettings.get(
				'portfolioSortDirection',
				'ascend'
			), // alphabetical A -> B, numbers high to low
		};

		this.qtyRefs = {};
		this.priceRefs = {};
		this.valueRefs = {};
		this.changeRefs = {};
		for (let key in this.sortFunctions) {
			this.sortFunctions[key] = this.sortFunctions[key].bind(this);
		}
		this._checkRefAssignments = this._checkRefAssignments.bind(this);

		this.showSettleModal = this.showSettleModal.bind(this);
		this.hideSettleModal = this.hideSettleModal.bind(this);

		this.showDepositModal = this.showDepositModal.bind(this);
		this.hideDepositModal = this.hideDepositModal.bind(this);

		this.showWithdrawModal = this.showWithdrawModal.bind(this);
		this.hideWithdrawModal = this.hideWithdrawModal.bind(this);

		this.showBorrowModal = this.showBorrowModal.bind(this);
		this.hideBorrowModal = this.hideBorrowModal.bind(this);

		this.showBurnModal = this.showBurnModal.bind(this);
		this.hideBurnModal = this.hideBurnModal.bind(this);

		this.showBridgeModal = this.showBridgeModal.bind(this);
		this.hideBridgeModal = this.hideBridgeModal.bind(this);

		this.toggleSortOrder = this.toggleSortOrder.bind(this);
	}

	componentWillMount() {
		this.refCheckInterval = setInterval(this._checkRefAssignments);
	}

	componentWillUnmount() {
		clearInterval(this.refCheckInterval);
	}

	_checkRefAssignments() {
		/*
		 * In order for sorting to work all refs must be assigned, so we check
		 * this here and update the state to trigger a rerender
		 */
		if (!this.state.allRefsAssigned) {
			let refKeys = ['qtyRefs', 'priceRefs', 'valueRefs', 'changeRefs'];
			const allRefsAssigned = refKeys.reduce((a, b) => {
				if (a === undefined) return !!Object.keys(this[b]).length;
				return !!Object.keys(this[b]).length && a;
			}, undefined);
			if (allRefsAssigned) {
				clearInterval(this.refCheckInterval);
				this.setState({allRefsAssigned});
			}
		}
	}

	shouldComponentUpdate(np, ns) {
		return (
			!utils.are_equal_shallow(ns, this.state) ||
			!utils.are_equal_shallow(np.balances, this.props.balances) ||
			!utils.are_equal_shallow(np.balanceList, this.props.balanceList) ||
			!utils.are_equal_shallow(np.optionalAssets, this.props.optionalAssets) ||
			np.account !== this.props.account ||
			np.visible !== this.props.visible ||
			np.settings !== this.props.settings ||
			np.hiddenAssets !== this.props.hiddenAssets ||
			ns.portfolioSort !== this.state.portfolioSort ||
			ns.portfolioSortDirection !== this.state.portfolioSortDirection ||
			np.allMarketStats.reduce((a, value, key) => {
				return (
					utils.check_market_stats(value, this.props.allMarketStats.get(key)) ||
					a
				);
			}, false)
		);
	}

	showBridgeModal() {
		this.setState({
			isBridgeModalVisible: true,
			isBridgeModalVisibleBefore: true,
		});
	}

	hideBridgeModal() {
		this.setState({
			isBridgeModalVisible: false,
		});
	}

	showWithdrawModal() {
		this.setState({
			isWithdrawModalVisible: true,
			isWithdrawModalVisibleBefore: true,
		});
	}

	hideWithdrawModal() {
		this.setState({
			isWithdrawModalVisible: false,
		});
	}

	showBurnModal() {
		this.setState({
			isBurnModalVisible: true,
			isBurnModalVisibleBefore: true,
		});
	}

	hideBurnModal() {
		this.setState({
			isBurnModalVisible: false,
		});
	}

	showSettleModal() {
		this.setState({
			isSettleModalVisible: true,
			isSettleModalVisibleBefore: true,
		});
	}

	hideSettleModal() {
		this.setState({
			isSettleModalVisible: false,
		});
	}

	showDepositModal() {
		this.setState({
			isDepositModalVisible: true,
			isDepositModalVisibleBefore: true,
		});
	}

	hideDepositModal() {
		this.setState({
			isDepositModalVisible: false,
		});
	}

	showBorrowModal(quoteAsset, backingAsset, account) {
		this.setState({
			isBorrowModalVisible: true,
			isBorrowModalVisibleBefore: true,
			borrow: {
				quoteAsset: quoteAsset,
				backingAsset: backingAsset,
				account: account,
			},
		});
	}

	hideBorrowModal() {
		this.setState({
			borrow: null,
			isBorrowModalVisible: false,
		});
	}

	sortFunctions = {
		qty: function (a, b, force) {
			if (Number(this.qtyRefs[a.key]) < Number(this.qtyRefs[b.key]))
				return this.state.portfolioSortDirection || force ? -1 : 1;

			if (Number(this.qtyRefs[a.key]) > Number(this.qtyRefs[b.key]))
				return this.state.portfolioSortDirection || force ? 1 : -1;
		},
		alphabetic: function (a, b, force) {
			if (a.key > b.key)
				return this.state.portfolioSortDirection || force ? 1 : -1;
			if (a.key < b.key)
				return this.state.portfolioSortDirection || force ? -1 : 1;
			return 0;
		},
		priceValue: function (a, b) {
			let aPrice = this.priceRefs[a.key];
			let bPrice = this.priceRefs[b.key];
			if (aPrice && bPrice) {
				return this.props.sortDirection ? aPrice - bPrice : bPrice - aPrice;
			} else if (aPrice === null && bPrice !== null) {
				return 1;
			} else if (aPrice !== null && bPrice === null) {
				return -1;
			} else {
				return this.sortFunctions.alphabetic(a, b, true);
			}
		},
		totalValue: function (a, b) {
			let aValue = this.valueRefs[a.key];
			let bValue = this.valueRefs[b.key];
			if (aValue && bValue) {
				return this.props.sortDirection ? aValue - bValue : bValue - aValue;
			} else if (!aValue && bValue) {
				return 1;
			} else if (aValue && !bValue) {
				return -1;
			} else {
				return this.sortFunctions.alphabetic(a, b, true);
			}
		},
		changeValue: function (a, b) {
			let aValue = this.changeRefs[a.key];
			let bValue = this.changeRefs[b.key];

			if (aValue && bValue) {
				let aChange = parseFloat(aValue) != 'NaN' ? parseFloat(aValue) : aValue;
				let bChange = parseFloat(bValue) != 'NaN' ? parseFloat(bValue) : bValue;
				let direction =
					typeof this.state.portfolioSortDirection !== 'undefined'
						? this.state.portfolioSortDirection
						: true;

				return direction ? aChange - bChange : bChange - aChange;
			}
		},
	};

	triggerSend(asset) {
		this.setState({send_asset: asset}, () => {
			if (this.send_modal) this.send_modal.show();
		});
	}

	_onSettleAsset(id, e) {
		e.preventDefault();
		this.setState({
			settleAsset: id,
		});

		this.showSettleModal();
	}

	_hideAsset(asset, status) {
		SettingsActions.hideAsset(asset, status);
	}

	_burnAsset(asset, e) {
		e.preventDefault();
		this.setState({reserve: asset});
		this.showBurnModal();
	}

	_showDepositModal(asset, e) {
		e.preventDefault();
		this.setState({depositAsset: asset.toLowerCase()}, () => {
			this.showDepositModal();
		});
	}

	_showDepositWithdraw(action, asset, fiatModal, e) {
		e.preventDefault();
		this.setState(
			{
				[action === 'bridge_modal'
					? 'bridgeAsset'
					: action === 'deposit_modal'
					? 'depositAsset'
					: 'withdrawAsset']: asset,
				fiatModal,
			},
			() => {
				if (action === 'bridge_modal') {
					this.showBridgeModal();
					return true;
				}

				if (action === 'deposit_modal') {
					this.showDepositModal();
					return true;
				}

				this.showWithdrawModal();
			}
		);
	}

	_getSeparator(render) {
		return render ? <span>&nbsp;|&nbsp;</span> : null;
	}

	toggleSortOrder(pagination, filters, sorter) {
		SettingsActions.changeViewSetting({
			portfolioSortDirection: sorter.order,
			portfolioSort: sorter.field,
		});
		this.setState({
			portfolioSortDirection: sorter.order,
			portfolioSort: sorter.field,
		});
	}

	getHeader() {
		let {settings} = this.props;
		let {shownAssets, portfolioSortDirection, portfolioSort} = this.state;

		const preferredUnit =
			settings.get('unit') || this.props.core_asset.get('symbol');
		const showAssetPercent = settings.get('showAssetPercent', false);

		return [
			{
				title: <Translate content="account.votes.name" />,
				dataIndex: 'asset',
				align: 'left',
				customizable: false,
				sorter: this.sortFunctions.alphabetic,
				sortOrder: portfolioSort === 'asset' && portfolioSortDirection,
				render: (item) => {
					return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
				},
			},
			{
				title: <Translate content="account.qty" />,
				dataIndex: 'qty',
				align: 'right',
				customizable: false,
				sorter: this.sortFunctions.qty,
				sortOrder: portfolioSort === 'qty' && portfolioSortDirection,
				render: (item) => {
					return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
				},
			},
			{
				className: 'column-hide-small',
				title: (
					<span style={{whiteSpace: 'nowrap'}}>
						<TranslateWithLinks
							noLink
							string="account.eq_value_header"
							keys={[
								{
									type: 'asset',
									value: preferredUnit,
									arg: 'asset',
								},
							]}
							noTip
						/>
					</span>
				),
				dataIndex: 'value',
				align: 'right',
				customizable: false,
				sorter: this.sortFunctions.totalValue,
				sortOrder: portfolioSort === 'value' && portfolioSortDirection,
				render: (item) => {
					return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
				},
			},
			{
				className: 'column-hide-small',
				title: (
					<span style={{whiteSpace: 'nowrap'}}>
						<Translate content="exchange.price" /> (
						<AssetName name={preferredUnit} noTip />)
					</span>
				),
				dataIndex: 'price',
				align: 'right',
				sorter: this.sortFunctions.priceValue,
				sortOrder: portfolioSort === 'price' && portfolioSortDirection,
				render: (item) => {
					return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
				},
			},
			{
				title: <Translate content="account.percent" />,
				dataIndex: 'percent',
				align: 'right',
				customizable: {
					default: showAssetPercent,
				},
				render: (item) => {
					return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
				},
			},
			{
				title: (
					<Translate content="account.trade" style={{whiteSpace: 'nowrap'}} />
				),
				dataIndex: 'trade',
				align: 'center',
				render: (item) => {
					return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
				},
			},
			{
				title: <Translate content="header.payments" />,
				dataIndex: 'payments',
				align: 'center',
				render: (item) => {
					return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
				},
			},
			{
				title: (
					<Translate
						content="exchange.deposit"
						style={{whiteSpace: 'nowrap'}}
					/>
				),
				dataIndex: 'deposit',
				align: 'center',
				render: (item) => <span style={{whiteSpace: 'nowrap'}}>{item}</span>,
			},
		];
	}

	_renderBalances(balanceList, optionalAssets, visible) {
		const {coreSymbol, preferredUnit, settings, hiddenAssets, orders} =
			this.props;

		const renderBorrow = (asset, account) => {
			let isBitAsset = asset && asset.has('bitasset_data_id');
			let isGlobalSettled =
				isBitAsset && asset.getIn(['bitasset', 'settlement_fund']) > 0
					? true
					: false;

			return {
				isBitAsset,
				borrowLink:
					!isBitAsset || isGlobalSettled ? null : (
						<a
							onClick={() => {
								ReactTooltip.hide();
								this.showBorrowModal(
									asset.get('id'),
									asset.getIn(['bitasset', 'options', 'short_backing_asset']),
									account
								);
							}}
						>
							<Icon
								name="dollar"
								title="icons.dollar.borrow"
								className="icon-14px"
							/>
						</a>
					),
			};
		};

		let balances = [];
		const emptyCell = '-';

		balanceList.forEach((balance) => {
			let balanceObject = ChainStore.getObject(balance);
			if (!balanceObject) return;
			let asset_type = balanceObject.get('asset_type');
			let asset = ChainStore.getObject(asset_type);
			if (!asset) return;

			let directMarketLink, settleLink, transferLink;
			let symbol = '';

			const assetName = asset.get('symbol');
			const notCore = asset.get('id') !== '1.3.0';
			const notCorePrefUnit = preferredUnit !== coreSymbol;

			let {market} = assetUtils.parseDescription(
				asset.getIn(['options', 'description'])
			);
			symbol = asset.get('symbol');
			if (symbol.indexOf('OPEN.') !== -1 && !market) market = 'USDT';
			let preferredMarket = market ? market : preferredUnit;

			if (notCore && preferredMarket === symbol) preferredMarket = coreSymbol;

			/* Table content */
			directMarketLink = notCore ? (
				<Link to={`/market/${asset.get('symbol')}_${preferredMarket}`}>
					<StyledButton buttonType="white">Trade</StyledButton>
				</Link>
			) : notCorePrefUnit ? (
				<Link to={`/market/${asset.get('symbol')}_${preferredUnit}`}>
					<StyledButton buttonType="white">Trade</StyledButton>
				</Link>
			) : (
				emptyCell
			);
			transferLink = (
				<StyledButton
					buttonType="transparent"
					onClick={this.triggerSend.bind(this, asset.get('id'))}
				>
					Send
				</StyledButton>
			);

			let {isBitAsset, borrowLink} = renderBorrow(asset, this.props.account);

			const includeAsset = !hiddenAssets.includes(asset_type);
			const hasBalance = !!balanceObject.get('balance');
			const hasOnOrder = !!orders[asset_type];

			const assetAmount = balanceObject.get('balance');

			/* Sorting refs */
			this.qtyRefs[asset.get('symbol')] = utils.get_asset_amount(
				assetAmount,
				asset
			);

			{
				/* Asset and Backing Asset Prefixes */
			}
			let options =
				asset && asset.getIn(['bitasset', 'options'])
					? asset.getIn(['bitasset', 'options']).toJS()
					: null;
			let backingAsset =
				options && options.short_backing_asset
					? ChainStore.getAsset(options.short_backing_asset)
					: null;
			let {isBitAsset: isAssetBitAsset} = utils.replaceName(asset);
			let {isBitAsset: isBackingBitAsset} = utils.replaceName(backingAsset);
			let settlePriceTitle;

			if (isBitAsset) {
				const globally_settled =
					asset.get('bitasset').get('settlement_fund') > 0;
				const isPrediction = asset.getIn(['bitasset', 'is_prediction_market']);
				if (globally_settled) {
					settlePriceTitle = 'tooltip.global_settle';
				} else if (isPrediction) {
					settlePriceTitle = 'tooltip.settle_market_prediction';
				} else {
					settlePriceTitle = 'tooltip.settle';
				}
				settleLink =
					isPrediction && !globally_settled ? (
						<FaQuestionCircle />
					) : (
						<a onClick={this._onSettleAsset.bind(this, asset.get('id'))}>
							<Icon name="settle" title="icons.settle" className="icon-14px" />
						</a>
					);
			}

			let preferredAsset = ChainStore.getAsset(preferredUnit);
			this.valueRefs[asset.get('symbol')] =
				hasBalance && !!preferredAsset
					? MarketUtils.convertValue(
							assetAmount,
							preferredAsset,
							asset,
							this.props.allMarketStats,
							this.props.coreAsset,
							true
					  )
					: null;

			this.priceRefs[asset.get('symbol')] = !preferredAsset
				? null
				: MarketUtils.getFinalPrice(
						this.props.coreAsset,
						asset,
						preferredAsset,
						this.props.allMarketStats,
						true
				  );

			let marketId = asset.get('symbol') + '_' + preferredUnit;
			let currentMarketStats = this.props.allMarketStats.get(marketId);
			this.changeRefs[asset.get('symbol')] =
				currentMarketStats && currentMarketStats.change
					? currentMarketStats.change
					: 0;

			balances.push({
				key: asset.get('symbol'),
				asset: (
					<div className="asset-name">
						<img
							className="asset-img"
							src={getAssetIcon(asset.get('symbol'))}
							alt="Asset logo"
							width="28px"
						/>
						<div>
							<LinkToAssetById className="asset-name" asset={asset.get('id')} />
							<p>{getAssetFullName(asset.get('symbol'))}</p>
						</div>
					</div>
				),
				qty:
					hasBalance || hasOnOrder ? (
						<BalanceComponent balance={balance} hide_asset />
					) : null,
				value:
					hasBalance || hasOnOrder ? (
						<BalanceValueComponent
							balance={balance}
							toAsset={preferredUnit}
							hide_asset
						/>
					) : null,
				price: (
					<div>
						<EquivalentPrice
							fromAsset={asset.get('id')}
							pulsate={{reverse: true, fill: 'forwards'}}
							hide_symbols
						/>
						<Market24HourChangeComponent
							base={asset.get('id')}
							quote={preferredUnit}
							marketId={marketId}
							hide_symbols
						/>
					</div>
				),
				hour24: (
					<Market24HourChangeComponent
						base={asset.get('id')}
						quote={preferredUnit}
						marketId={marketId}
						hide_symbols
					/>
				),
				percent: hasBalance ? (
					<BalanceComponent balance={balance} asPercentage={true} />
				) : null,
				trade: directMarketLink,
				payments: transferLink,
				borrow:
					isBitAsset && borrowLink ? (
						<Tooltip
							title={counterpart.translate('tooltip.borrow', {
								asset: isAssetBitAsset ? 'bit' + symbol : symbol,
							})}
						>
							{borrowLink}
						</Tooltip>
					) : isBitAsset && !borrowLink ? (
						<Tooltip
							title={counterpart.translate('tooltip.borrow_disabled', {
								asset: isAssetBitAsset ? 'bit' + symbol : symbol,
							})}
						>
							<FaQuestionCircle />
						</Tooltip>
					) : (
						emptyCell
					),
				settle:
					isBitAsset && backingAsset ? (
						<Tooltip
							placement="bottom"
							title={counterpart.translate(settlePriceTitle, {
								asset: isAssetBitAsset ? 'bit' + symbol : symbol,
								backingAsset: isBackingBitAsset
									? 'bit' + backingAsset.get('symbol')
									: backingAsset.get('symbol'),
								settleDelay: options.force_settlement_delay_sec / 3600,
							})}
						>
							<div className="inline-block">{settleLink}</div>
						</Tooltip>
					) : (
						emptyCell
					),
				burn: !isBitAsset ? (
					<StyledButton
						buttonType="red"
						onClick={this._burnAsset.bind(this, asset.get('id'))}
					>
						Burn
					</StyledButton>
				) : null,
				deposit:
					this.props.isMyAccount &&
					['BTC', 'LTC', 'ETH', 'USDT'].indexOf(asset.get('symbol')) > -1 ? (
						<StyledButton
							buttonType="green"
							onClick={this._showDepositModal.bind(this, asset.get('symbol'))}
						>
							Deposit
						</StyledButton>
					) : null,
			});
		});
		if (optionalAssets) {
			optionalAssets
				.filter((asset) => {
					let isAvailable = false;
					let keep = true;
					balances.forEach((a) => {
						if (a.key === asset) keep = false;
					});
					return keep && isAvailable;
				})
				.forEach((a) => {
					let asset = ChainStore.getAsset(a);
					if (asset && this.props.isMyAccount) {
						const includeAsset = !hiddenAssets.includes(asset.get('id'));
						const canDeposit = true;

						const notCore = asset.get('id') !== '1.3.0';
						let {market} = assetUtils.parseDescription(
							asset.getIn(['options', 'description'])
						);
						if (asset.get('symbol').indexOf('OPEN.') !== -1 && !market)
							market = 'USDT';
						let preferredMarket = market ? market : coreSymbol;

						let directMarketLink = notCore ? (
							<Link to={`/market/${asset.get('symbol')}_${preferredMarket}`}>
								<div className="portfolio-btn">
									<Icon
										name="trade"
										title="icons.trade.trade"
										className="icon-14px"
									/>
								</div>
							</Link>
						) : (
							emptyCell
						);
						let {isBitAsset, borrowLink} = renderBorrow(
							asset,
							this.props.account
						);
						if ((includeAsset && visible) || (!includeAsset && !visible))
							balances.push({
								key: asset.get('symbol'),
								asset: <LinkToAssetById asset={asset.get('id')} />,
								qty: emptyCell,
								price: emptyCell,
								hour24: emptyCell,
								value: emptyCell,
								percent: emptyCell,
								payments: emptyCell,
								deposit:
									canDeposit && this.props.isMyAccount ? (
										<span>
											<Icon
												style={{cursor: 'pointer'}}
												name="deposit"
												title="icons.deposit.deposit"
												className="icon-14x"
												onClick={this._showDepositModal.bind(
													this,
													asset.get('symbol')
												)}
											/>
										</span>
									) : (
										emptyCell
									),
								withdraw: emptyCell,
								trade: directMarketLink,
								borrow: isBitAsset ? (
									<Tooltip
										placement="bottom"
										title={counterpart.translate('tooltip.borrow', {
											asset: asset.get('symbol'),
										})}
									>
										<div className="inline-block">{borrowLink}</div>
									</Tooltip>
								) : (
									emptyCell
								),
								settle: emptyCell,
								burn: emptyCell,
							});
					}
				});
		}
		return balances;
	}

	_renderSendModal() {
		return (
			<SendModal
				id="send_modal_portfolio"
				refCallback={(e) => {
					if (e) this.send_modal = e;
				}}
				from_name={this.props.account.get('name')}
				asset_id={this.state.send_asset || '1.3.0'}
			/>
		);
	}

	_renderBorrowModal() {
		if (
			!this.state.borrow ||
			!this.state.borrow.quoteAsset ||
			!this.state.borrow.backingAsset ||
			!this.state.borrow.account ||
			!this.state.isBorrowModalVisibleBefore
		) {
			return null;
		}

		return (
			<BorrowModal
				visible={this.state.isBorrowModalVisible}
				showModal={this.showBorrowModal}
				hideModal={this.hideBorrowModal}
				accountObj={this.state.borrow && this.state.borrow.account}
				quoteAssetObj={this.state.borrow && this.state.borrow.quoteAsset}
				backingAssetObj={this.state.borrow && this.state.borrow.backingAsset}
			/>
		);
	}

	_renderSettleModal() {
		return (
			<SettleModal
				visible={this.state.isSettleModalVisible}
				hideModal={this.hideSettleModal}
				showModal={this.showSettleModal}
				asset={this.state.settleAsset}
				account={this.props.account}
			/>
		);
	}

	render() {
		const {currentAccount} = this.props;

		return (
			<div className="portfolio-table-wrapper">
				<CustomTable
					className="table dashboard-table table-hover"
					rows={this._renderBalances(
						this.props.balanceList,
						this.props.optionalAssets,
						this.props.visible
					)}
					header={this.getHeader()}
					pageSize={20}
					label="utility.total_x_assets"
					leftPadding="1.5rem"
					toggleSortOrder={this.toggleSortOrder}
					viewSettings={this.props.viewSettings}
					viewSettingsKey="portfolioColumns"
					allowCustomization={true}
				>
					{this._renderSendModal()}
					{(this.state.isSettleModalVisible ||
						this.state.isSettleModalVisibleBefore) &&
						this._renderSettleModal()}
					{this._renderBorrowModal()}

					{/* Burn Modal */}
					{(this.state.isBurnModalVisible ||
						this.state.isBurnModalVisibleBefore) && (
						<ReserveAssetModal
							visible={this.state.isBurnModalVisible}
							hideModal={this.hideBurnModal}
							asset={this.state.reserve}
							account={this.props.account}
							onClose={() => {
								ZfApi.publish('reserve_asset', 'close');
							}}
						/>
					)}

					<DepositModal
						visibleMeta={this.state.isDepositModalVisible}
						hideModalMeta={this.hideDepositModal}
						showModalMeta={this.showDepositModal}
						ref="deposit_modal_new11"
						modalId="deposit_modal_new11"
						account={currentAccount}
						assetType={this.state.depositAsset}
					/>
				</CustomTable>
			</div>
		);
	}
}

AccountPortfolioList = connect(AccountPortfolioList, {
	listenTo() {
		return [SettingsStore, MarketsStore];
	},
	getProps() {
		return {
			settings: SettingsStore.getState().settings,
			viewSettings: SettingsStore.getState().viewSettings,
			allMarketStats: MarketsStore.getState().allMarketStats,
		};
	},
});

AccountPortfolioList = debounceRender(AccountPortfolioList, 50, {
	leading: false,
});

export default AccountPortfolioList;
