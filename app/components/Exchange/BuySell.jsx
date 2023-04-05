import cnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import utils from 'common/utils';
import Translate from 'react-translate-component';
import TranslateWithLinks from '../Utility/TranslateWithLinks';
import counterpart from 'counterpart';
import ChainTypes from '../Utility/ChainTypes';
import BindToChainState from '../Utility/BindToChainState';
import PriceText from '../Utility/PriceText';
import AssetName from '../Utility/AssetName';
import {Asset} from 'common/MarketClasses';
import ExchangeInput from './ExchangeInput';
import Icon from '../Icon/Icon';
import SettleModal from '../Modal/SettleModal';
import {Button, Tooltip} from 'antd';
import ReactTooltip from 'react-tooltip';
import walletIcon from '../../assets/icons/walleticon.png';
import {BalanceValueComponent} from '../Utility/EquivalentValueComponent';

class BuySell extends React.Component {
	static propTypes = {
		balance: ChainTypes.ChainObject,
		type: PropTypes.string,
		amountChange: PropTypes.func.isRequired,
		priceChange: PropTypes.func.isRequired,
		onSubmit: PropTypes.func.isRequired,
		onExpirationTypeChange: PropTypes.func.isRequired,
		onExpirationCustomChange: PropTypes.func.isRequired,
		account: ChainTypes.ChainAccount.isRequired,
	};

	static defaultProps = {
		type: 'bid',
	};

	constructor(props) {
		super(props);
		this.state = {
			forceReRender: false,
			isSettleModalVisible: false,
			totalPercent: 100,
			currencyBalance: '',
			globalCurrencyBalance: '',
			currencyPrice: '',
			forceUpdateAmount: false,
		};

		this.showSettleModal = this.showSettleModal.bind(this);
		this.hideSettleModal = this.hideSettleModal.bind(this);
	}

	componentDidMount() {
		this.props.priceChangePercent(this.props.type, this.props.marketPrice);
	}

	_forceRender(np) {
		if (this.state.forceReRender) {
			this.setState({
				forceReRender: false,
			});
		}

		if (this.props.parentWidth !== np.parentWidth) {
			this.setState({
				forceReRender: true,
			});
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps?.historyUrl?.pathname !== this.props?.historyUrl?.pathname) {
			this.setState({
				forceReRender: true,
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		this._forceRender(nextProps, nextState);

		if (
			(nextProps.currentPrice !== this.props.currentPrice ||
				nextProps.marketPrice !== this.props.marketPrice ||
				nextProps.base !== this.props.base ||
				nextProps.quote !== this.props.quote) &&
			!!nextProps.marketPrice
		) {
			this.props.priceChangePercent(nextProps.type, nextProps.marketPrice);
		}

		return (
			nextState.isSettleModalVisible !== this.state.isSettleModalVisible ||
			nextProps.amount !== this.props.amount ||
			nextProps.onBorrow !== this.props.onBorrow ||
			nextProps.total !== this.props.total ||
			nextProps.currentPrice !== this.props.currentPrice ||
			nextProps.price !== this.props.price ||
			nextProps.balance !== this.props.balance ||
			nextProps.account !== this.props.account ||
			nextProps.className !== this.props.className ||
			(nextProps.fee && this.props.fee
				? nextProps.fee.ne(this.props.fee)
				: false) ||
			nextProps.isPredictionMarket !== this.props.isPredictionMarket ||
			nextProps.feeAsset !== this.props.feeAsset ||
			nextProps.isOpen !== this.props.isOpen ||
			nextProps.hasFeeBalance !== this.props.hasFeeBalance ||
			nextProps.expirationType !== this.props.expirationType ||
			nextProps.expirationCustomTime !== this.props.expirationCustomTime ||
			nextProps.parentWidth !== this.props.parentWidth ||
			nextState.forceReRender !== this.state.forceReRender ||
			nextProps.singleColumnOrderForm !== this.props.singleColumnOrderForm ||
			nextProps.hideFunctionButtons !== this.props.hideFunctionButtons ||
			nextState.isQuickDepositVisible !== this.state.isQuickDepositVisible ||
			nextProps.base !== this.props.base ||
			nextProps.quote !== this.props.quote ||
			nextProps.locked_v2 !== this.props.locked_v2
		);
	}

	getDatePickerRef = (node) => {
		this.datePricker = node;
	};

	showSettleModal() {
		this.setState({
			isSettleModalVisible: true,
		});
	}

	hideSettleModal() {
		this.setState({
			isSettleModalVisible: false,
		});
	}

	_addBalance(balance) {
		if (this.props.type === 'bid') {
			this.props.totalChange({
				target: {value: balance.getAmount({real: true}).toString()},
			});
		} else {
			this.props.amountChange({
				target: {value: balance.getAmount({real: true}).toString()},
			});
		}
	}

	_setPrice(price) {
		this.props.priceChange({target: {value: price.toString()}});
	}

	handleQuickDepositVisibleChange = (visible) => {
		this.setState({isQuickDepositVisible: visible});
		if (visible) {
			setTimeout(() => {
				ReactTooltip.rebuild();
			}, 20);
		}
	};

	onDeposit() {
		this.setState({
			isQuickDepositVisible: false,
		});
		this.props.onDeposit();
	}

	onBuy() {
		this.setState({
			isQuickDepositVisible: false,
		});
		this.props.onBuy();
	}

	onExpirationSelectChange = (value) => {
		if (value === 'SPECIFIC') {
			this.datePricker.picker.handleOpenChange(true);
		}

		this.props.onExpirationTypeChange(value);
	};

	onExpirationSelectClick = (e) => {
		if (e.target.value === 'SPECIFIC') {
			if (this.firstClick) {
				this.secondClick = true;
			}
			this.firstClick = true;
			if (this.secondClick) {
				this.datePricker.picker.handleOpenChange(true);
				this.firstClick = false;
				this.secondClick = false;
			}
		}
	};

	onExpirationSelectBlur = () => {
		this.firstClick = false;
		this.secondClick = false;
	};

	onChangeTotalPercentHandler(percent) {
		let marketPrice = this.props.price;
		if (!Number(marketPrice)) {
			this.setState({totalPercent: percent});
			return;
		}

		if (this.props.price === '') {
			marketPrice = this.props.marketPrice;
		}
		this.props.priceChangePercent(this.props.type, marketPrice);
		this.props.amountChangePercent(
			this.props.type,
			false,
			(Number(this.state.currencyBalance) * (percent / 100)) /
				Number(marketPrice),
			percent === 100
		);
		this.setState({
			totalPercent: percent,
			forceReRender: true,
		});
	}

	render() {
		let {
			type,
			quote,
			base,
			amountChange,
			fee,
			isPredictionMarket,
			priceChange,
			onSubmit,
			balance,
			totalChange,
			balancePrecision,
			currentPrice,
			currentPriceObject,
			feeAsset,
			feeAssets,
			hideHeader,
			verticalOrderForm,
		} = this.props;

		let account_balances = this.props.account.get('balances');

		var symbolType = new Map();

		symbolType.set('META1', '1.3.0');
		symbolType.set('USDT', '1.3.1');
		symbolType.set('BTC', '1.3.5');
		symbolType.set('ETH', '1.3.4');
		symbolType.set('EOS', '1.3.3');
		symbolType.set('XLM', '1.3.6');
		symbolType.set('BNB', '1.3.7');
		symbolType.set('LTC', '1.3.2');

		const tradeSymbol = {};
		if (this.props.historyUrl) {
			tradeSymbol.currencyId = symbolType.get(
				this.props.historyUrl.pathname.split('/')[2].split('_')[0]
			);
			tradeSymbol.symbol = this.props.historyUrl.pathname
				.split('/')[2]
				.split('_')[0];
			tradeSymbol.id = account_balances.get(
				symbolType.get(
					this.props.type === 'bid'
						? this.props.historyUrl.pathname.split('/')[2].split('_')[1]
						: this.props.historyUrl.pathname.split('/')[2].split('_')[0]
				)
			);
		}

		const balanceData = (
			<BalanceValueComponent
				balance={tradeSymbol?.id}
				toAsset={this.props.historyUrl.pathname.split('/')[2].split('_')[1]}
				balanceHandler={(data) => {
					this.setState({
						currencyBalance: data,
					});
				}}
				hide_asset
				fromExchange={true}
			/>
		);

		let clientWidth = this.refs.order_form
			? this.refs.order_form.clientWidth
			: 0;
		let singleColumnForm =
			clientWidth < 450 || this.props.singleColumnOrderForm ? true : false;

		let amount, price, total;

		if (this.props.amount) amount = this.props.amount;
		if (this.props.price) price = this.props.price;
		if (this.props.total) total = this.props.total;

		let balanceAmount = new Asset({
			amount: balance ? balance.get('balance') : 0,
			precision: balancePrecision,
			asset_id: this.props.balanceId,
		});

		const isBid = type === 'bid';

		let hasBalance = isBid
			? balanceAmount.getAmount({real: true}) >= parseFloat(total)
			: balanceAmount.getAmount({real: true}) >= parseFloat(amount);

		let forceSellText = isBid
			? counterpart.translate('exchange.buy')
			: counterpart.translate('exchange.sell');

		let noBalance = isPredictionMarket
			? false
			: !(balanceAmount.getAmount() > 0 && hasBalance) || this.props.locked_v2;
		let invalidPrice = !(price > 0);
		let invalidAmount = !(amount > 0);

		let isNotUsdtMeta1 = true;
		const pathUrl = this.props.historyUrl.pathname;
		if (pathUrl) {
			const pathUrlArr = pathUrl.split('/');
			if (Array.isArray(pathUrlArr) && pathUrlArr.length === 3) {
				if (
					pathUrlArr[2].toLowerCase().includes('usdt') ||
					pathUrlArr[2].toLowerCase().includes('meta1')
				) {
					isNotUsdtMeta1 = false;
				}
			}
		}

		let disabled = noBalance || invalidPrice || invalidAmount || isNotUsdtMeta1;

		let buttonClass = classNames(type, {
			disabled: disabled,
		});
		let balanceSymbol = isBid ? base.get('symbol') : quote.get('symbol');

		let disabledText = invalidPrice
			? counterpart.translate('exchange.invalid_price')
			: invalidAmount
			? counterpart.translate('exchange.invalid_amount')
			: noBalance
			? counterpart.translate('exchange.no_balance')
			: null;

		let buyButton = {
			backgroundColor: '#FFC000',
			marginTop: '10px',
			width: '100%',
			height: '46px',
			color: '#330000',
			borderRadius: '5px',
		};
		let buyButtonDisabled = {
			backgroundColor: '#FFC000',
			marginTop: '10px',
			width: '100%',
			height: '46px',
			color: '#330000',
			opacity: '0.5',
			borderRadius: '5px',
		};
		let sellButton = {
			backgroundColor: '#FF2929',
			marginTop: '10px',
			width: '100%',
			height: '46px',
			color: 'white',
			borderRadius: '5px',
		};
		let sellButtonDisabled = {
			backgroundColor: '#FF2929',
			marginTop: '10px',
			width: '100%',
			height: '46px',
			color: 'white',
			opacity: '0.5',
			borderRadius: '5px',
		};

		// Fee asset selection
		if (
			feeAssets[1] &&
			feeAssets[1].getIn([
				'options',
				'core_exchange_rate',
				'quote',
				'asset_id',
			]) === '1.3.0' &&
			feeAssets[1].getIn([
				'options',
				'core_exchange_rate',
				'base',
				'asset_id',
			]) === '1.3.0'
		) {
			feeAsset = feeAssets[0];
			feeAssets.splice(1, 1);
		}

		// Subtract fee from amount to sell
		let balanceToAdd;

		if (feeAsset.get('symbol') === balanceSymbol) {
			balanceToAdd = balanceAmount.clone(
				balanceAmount.getAmount() - fee.getAmount()
			);
		} else {
			balanceToAdd = balanceAmount;
		}

		const containerClass = 'small-12';
		let formContent;

		// OrderForm is in panel
		if (verticalOrderForm) {
			formContent = (
				<div className={containerClass}>
					<div className="limit-order-split-line">AAAA</div>
					<div className="grid-block no-overflow shrink limit-order-input-wrapper">
						<Translate
							className="small-12 buy-sell-label"
							content="exchange.price"
						/>
						{/* working */}
						<div className="inputAddon limit-order-input">
							<ExchangeInput
								id={`${type}Price`}
								value={price}
								onChange={(e) => {
									priceChange(e);
									if (this.state.totalPercent) {
										this.setState({
											totalPercent: '',
										});
									}
								}}
								autoComplete="off"
								placeholder="0.0"
								addonAfter={
									<span className="limit-order-text">
										{base.get('symbol')} / {quote.get('symbol')}
									</span>
								}
							/>
						</div>
					</div>
					<div className="grid-block no-overflow shrink limit-order-input-wrapper">
						{/*  */}
						<Translate
							className="small-12 buy-sell-label"
							content="transfer.amount"
						/>
						<div className="inputAddon limit-order-input">
							<ExchangeInput
								id={`${type}Amount`}
								value={amount}
								onChange={amountChange}
								autoComplete="off"
								placeholder="0.0"
								addonAfter={
									<span>
										<AssetName dataPlace="right" name={quote.get('symbol')} />
									</span>
								}
							/>
						</div>
					</div>
					<div className="grid-block no-overflow shrink limit-order-input-wrapper">
						<Translate
							className="small-12 buy-sell-label"
							content="exchange.total"
						/>
						<div className="inputAddon limit-order-input">
							<ExchangeInput
								id={`${type}Total`}
								value={total}
								onChange={(e) => {
									totalChange(e);
								}}
								autoComplete="off"
								placeholder="0.0"
								addonAfter={
									<span>
										<AssetName dataPlace="right" name={base.get('symbol')} />
									</span>
								}
							/>
						</div>
					</div>
				</div>
			);
		} else {
			formContent = singleColumnForm ? (
				<div className={containerClass}>
					<div className="grid-block no-overflow shrink limit-order-input-wrapper">
						<Translate
							className="small-3 buy-sell-label"
							content="exchange.price"
						/>
						<div className="inputAddon limit-order-input">
							<ExchangeInput
								id={`${type}Price`}
								value={price}
								onChange={(e) => {
									priceChange(e);
									const obj = {
										totalPercent: 100,
									};
									if (this.state.totalPercent) {
										this.setState({...obj});
									}
								}}
								autoComplete="off"
								placeholder="0.0"
								addonAfter={
									<span className="limit-order-text">
										{base.get('symbol')} / {quote.get('symbol')}
									</span>
								}
							/>
						</div>
					</div>
					<div className="grid-block no-overflow shrink limit-order-input-wrapper">
						{/*  */}
						<Translate
							className="small-3 buy-sell-label"
							content="transfer.amount"
						/>
						<div className="inputAddon limit-order-input">
							<ExchangeInput
								id={`${type}Amount`}
								value={amount}
								onChange={(e) => {
									amountChange(e);
									const obj = {
										totalPercent: 100,
									};
									if (this.state.totalPercent) {
										this.setState({...obj});
									}
								}}
								autoComplete="off"
								placeholder="0.0"
								addonAfter={
									<span className="limit-order-text">
										{quote.get('symbol')}
									</span>
								}
							/>
						</div>
					</div>
					<div className="grid-block no-overflow shrink limit-order-input-wrapper">
						<Translate
							className="small-3 buy-sell-label"
							content="exchange.total"
						/>
						<div className="inputAddon limit-order-input">
							<ExchangeInput
								id={`${type}Total`}
								value={total}
								onChange={(e) => {
									totalChange(e);
									if (this.state.totalPercent) {
										const obj = {
											totalPercent: 100,
										};
										this.setState({...obj});
									}
								}}
								autoComplete="off"
								placeholder="0.0"
								addonAfter={
									<span className="limit-order-text">{base.get('symbol')}</span>
								}
							/>
						</div>
					</div>
					<div className="amount_footer">
						<div className="left_footer_sec">
							<img className="wallet_img" src={walletIcon} alt="img" />
							<span>
								{Number(this.state.currencyBalance).toFixed(6)}{' '}
								{base.get('symbol')}
							</span>
						</div>
						<div className="right_footer_sec">
							<span
								onClick={this.onChangeTotalPercentHandler.bind(this, 25)}
								className={`per_item ${
									this.state.totalPercent === 25 ? 'active_item' : ''
								}`}
							>
								25%
							</span>
							<span
								onClick={this.onChangeTotalPercentHandler.bind(this, 50)}
								className={`per_item ${
									this.state.totalPercent === 50 ? 'active_item' : ''
								}`}
							>
								50%
							</span>
							<span
								onClick={this.onChangeTotalPercentHandler.bind(this, 75)}
								className={`per_item ${
									this.state.totalPercent === 75 ? 'active_item' : ''
								}`}
							>
								75%
							</span>
							<span
								onClick={this.onChangeTotalPercentHandler.bind(this, 100)}
								className={`per_item ${
									this.state.totalPercent === 100 ? 'active_item' : ''
								}`}
							>
								100%
							</span>
						</div>
					</div>
				</div>
			) : (
				<div className={containerClass}>
					<div className="grid-block no-overflow shrink">
						<div className="small-6">
							<div className="small-11 grid-block no-overflow shrink limit-order-input-wrapper">
								<Translate
									className="small-3 buy-sell-label"
									content="exchange.price"
								/>
								<div
									className="small-9 buy-sell-label"
									style={{textAlign: 'right'}}
								>
									<span
										style={{
											borderBottom: '#A09F9F 1px dotted',
											cursor: 'pointer',
										}}
										onClick={this.props.setPrice.bind(
											this,
											type,
											currentPriceObject.sellPrice()
										)}
									>
										<PriceText price={currentPrice} quote={quote} base={base} />{' '}
									</span>
								</div>
							</div>
							<div className="inputAddon limit-order-input">
								<ExchangeInput
									id={`${type}Price`}
									value={price}
									onChange={priceChange}
									autoComplete="off"
									placeholder="0.0"
									addonAfter={
										<span>
											<AssetName dataPlace="right" name={base.get('symbol')} />
											&nbsp;/&nbsp;
											<AssetName dataPlace="right" name={quote.get('symbol')} />
										</span>
									}
								/>
							</div>
						</div>
						<div className="small-6">
							<div className="small-12 grid-block no-overflow shrink limit-order-input-wrapper">
								<Translate
									className="small-3 buy-sell-label"
									content="exchange.total"
								/>
								<div
									className="small-9 buy-sell-label"
									style={{textAlign: 'right'}}
								>
									<Translate
										className="small-3 buy-sell-label"
										content="exchange.balance"
									/>
									&nbsp;
									<span
										style={{
											borderBottom: '#A09F9F 1px dotted',
											cursor: 'pointer',
										}}
										onClick={this._addBalance.bind(this, balanceToAdd)}
									>
										{utils.format_number(
											balanceAmount.getAmount({
												real: true,
											}),
											balancePrecision
										)}{' '}
									</span>
								</div>
							</div>

							<div className="inputAddon limit-order-input">
								<ExchangeInput
									id={`${type}Total`}
									value={total}
									onChange={totalChange}
									autoComplete="off"
									placeholder="0.0"
									addonAfter={
										<span>
											<AssetName dataPlace="right" name={base.get('symbol')} />
										</span>
									}
								/>
							</div>
						</div>
					</div>
					<div className="grid-block no-overflow shrink limit-order-input-wrapper limit-order-input-wrapper">
						<div className="small-6">
							{/*  */}
							<Translate
								className="small-3 buy-sell-label"
								content="transfer.amount"
							/>
							<div className="inputAddon limit-order-input">
								<ExchangeInput
									id={`${type}Amount`}
									value={amount}
									onChange={amountChange}
									autoComplete="off"
									placeholder="0.0"
									addonAfter={
										<span>
											<AssetName dataPlace="right" name={quote.get('symbol')} />
										</span>
									}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		}

		const otherAsset = isBid ? base : quote;
		const isBitAsset = !!otherAsset.get('bitasset');
		// check if globally settled
		const isGloballySettled =
			isBitAsset && otherAsset.get('bitasset').get('settlement_fund') > 0;

		return (
			<div className={cnames(this.props.className)} style={this.props.styles}>
				<div style={{display: 'none'}}>{balanceData}</div>
				<div className="buy-sell-container">
					{!hideHeader ? (
						<div className={'exchange-content-header ' + type}>
							<span>
								<TranslateWithLinks
									string="exchange.buysell_formatter"
									noLink
									noTip
									keys={[
										{
											type: 'asset',
											value: quote.get('symbol'),
											arg: 'asset',
										},
										{
											type: 'translate',
											value: isPredictionMarket
												? 'exchange.short'
												: isBid
												? 'exchange.buy'
												: 'exchange.sell',
											arg: 'direction',
										},
									]}
								/>
							</span>
							{this.props.moveOrderForm && !this.props.hideFunctionButtons ? (
								<Icon
									onClick={this.props.moveOrderForm}
									name="thumb-tack"
									className="icon-14px icon-fill order-book-button-v"
									style={{marginLeft: 5}}
								/>
							) : null}
						</div>
					) : null}

					<form
						ref="order_form"
						className={
							(!this.props.isOpen ? 'hide-container ' : '') + 'order-form'
						}
						style={{fontSize: '14px'}}
						noValidate
					>
						<div className="grid-block no-overflow shrink">
							{this.props.moveOrderForm && verticalOrderForm ? (
								<div
									style={{width: '100%', textAlign: 'right'}}
									onClick={this.props.moveOrderForm}
								>
									<Icon
										name="thumb-tack"
										className="icon-18px icon-fill order-book-button-v"
									/>
								</div>
							) : null}
							{formContent}
						</div>

						<div className="grid-block vertical no-overflow shrink ">
							<div className="small-12 medium-12 xlarge-12">
								<div style={{marginTop: 10}}>
									<div className="short-long-button">
										<Tooltip
											placement="top"
											title={disabledText ? disabledText : ''}
										>
											<button
												style={
													isBid
														? disabled
															? buyButtonDisabled
															: buyButton
														: disabled
														? sellButtonDisabled
														: sellButton
												}
												disabled={disabled}
												onClick={onSubmit.bind(this, true)}
												type="primary"
											>
												<div
													style={{
														fontWeight: 600,
														fontSize: '18px',
														textTransform: 'uppercase',
														color: isBid ? '#330000' : 'white',
													}}
												>
													{isBid
														? counterpart.translate('exchange.buy')
														: counterpart.translate('exchange.sell')}
													&nbsp;
													{this.props.quote.get('symbol')}
												</div>
											</button>
										</Tooltip>
										<div style={{fontSize: 12, marginTop: 10}}>
											<span style={{color: '#ffc000'}}>
												{counterpart.translate('account.transactions.fee')}:
											</span>{' '}
											0.00002 Meta1
										</div>
										{isGloballySettled ? (
											<Button
												disabled={
													!this.props.currentAccount ||
													this.props.currentAccount.get('id') === '1.2.3'
												}
												onClick={this.showSettleModal}
												data-tip={counterpart.translate(
													'exchange.settle_globally_settled_tooltip'
												)}
											>
												<Translate content="exchange.settle_globally_settled" />
											</Button>
										) : null}
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="grid-content clear-fix no-padding">
								{/* SHORT button */}
								{disabledText && isPredictionMarket ? (
									<Tooltip title={disabledText} placement="right">
										<div style={{paddingRight: 10}} className="float-right">
											<input
												style={{margin: 0}}
												className={buttonClass}
												type="submit"
												onClick={onSubmit.bind(this, false)}
												value={forceSellText}
											/>
										</div>
									</Tooltip>
								) : isPredictionMarket ? (
									<Tooltip title={''} placement="right">
										<div style={{paddingRight: 10}} className="float-right">
											<input
												style={{margin: 0}}
												className={buttonClass}
												type="submit"
												onClick={onSubmit.bind(this, false)}
												value={forceSellText}
											/>
										</div>
									</Tooltip>
								) : null}
							</div>
						</div>
					</form>
				</div>

				{isGloballySettled && !!this.props.currentAccount && (
					<SettleModal
						visible={this.state.isSettleModalVisible}
						hideModal={this.hideSettleModal}
						showModal={this.showSettleModal}
						asset={otherAsset.get('id')}
						account={this.props.currentAccount}
					/>
				)}
			</div>
		);
	}
}

export default BindToChainState(BuySell);
