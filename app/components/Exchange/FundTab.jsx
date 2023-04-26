import React from 'react';
import debounceRender from 'react-debounce-render';
import BalanceComponent from '../Utility/BalanceComponent';
import {ChainStore} from 'meta1-vision-js';
import GatewayStore from 'stores/GatewayStore';
import {connect} from 'alt-react';
import utils from 'common/utils';
import {Table, Button} from 'antd';
import Translate from 'react-translate-component';
import StyledButton from 'components/Button/Button';
import {getAssetIcon, getAssetFullName} from 'constants/assets';
import DepositModal from '../Modal/DepositModal';
import WithdrawModal from 'components/Modal/WithdrawModal';
import accountUtils from 'common/account_utils';

class FundTab extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isDepositModalVisible: false,
			isWithdrawModalVisible: false,
			isDepositModalVisibleBefore: false,
			isWithdrawModalVisibleBefore: false,
			depositAsset: null,
			withdrawAsset: null,
			columns: [],
		};

		this.showDepositModal = this.showDepositModal.bind(this);
		this.hideDepositModal = this.hideDepositModal.bind(this);

		this.showWithdrawModal = this.showWithdrawModal.bind(this);
		this.hideWithdrawModal = this.hideWithdrawModal.bind(this);
	}

	componentWillMount() {
		this.getHeader();
	}

	shouldComponentUpdate(np, ns) {
		return (
			!utils.are_equal_shallow(ns, this.state) ||
			np.account !== this.props.account ||
			np.account.get('balances') !== this.props.account.get('balances')
		);
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

	_showDepositModal(asset, e) {
		e.preventDefault();
		this.setState({depositAsset: asset.toLowerCase()}, () => {
			this.showDepositModal();
		});
	}

	_showWithdrawModal(asset, e) {
		e.preventDefault();
		this.setState({withdrawAsset: asset.toLowerCase()}, () => {
			this.showWithdrawModal();
		});
	}

	getHeader() {
		this.setState({
			columns: [
				{
					title: 'Assets',
					dataIndex: 'asset',
					customizable: false,
					render: (item) => {
						return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
					},
				},
				{
					title: 'Balance Breakdown',
					dataIndex: 'qty',
					customizable: false,
					render: (item) => {
						return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
					},
				},
				{
					title: 'Action',
					dataIndex: 'action',
					render: (item) => <span style={{whiteSpace: 'nowrap'}}>{item}</span>,
				},
			],
		});
	}

	_renderBalances(account) {
		let balances = [];
		let account_balances = account.get('balances');

		account_balances.forEach((balance, asset_type) => {
			const asset = ChainStore.getAsset(asset_type);

			let isDepositable = ['BTC', 'LTC', 'ETH', 'USDT'].includes(
				asset.get('symbol')
			);
			let isWithdrawable = ['ETH', 'USDT'].includes(asset.get('symbol'));

			balances.push({
				key: asset.get('symbol'),
				asset: getAssetFullName(asset.get('symbol')),
				qty: <BalanceComponent balance={balance} hide_asset />,
				action: (
					<div className="fund-action-wrapper">
						<Button
							onClick={this._showDepositModal.bind(this, asset.get('symbol'))}
							disabled={!isDepositable}
							style={{
								opacity: isDepositable ? '1.0' : '0.5',
							}}
						>
							<Translate content="exchange.deposit" />
						</Button>
						<Button
							onClick={this._showWithdrawModal.bind(this, asset.get('symbol'))}
							disabled={!isWithdrawable}
							style={{
								opacity: isWithdrawable ? '1.0' : '0.5',
							}}
						>
							Withdraw
						</Button>
					</div>
				),
			});
		});

		return balances;
	}

	render() {
		const {account, balances} = this.props;
		const {columns} = this.state;
		const totalBalances = this._renderBalances(account);
		let account_balances = account.get('balances');
		let usdTotal = parseFloat(
			accountUtils.getUsd(
				accountUtils.getTotalBalance(account_balances, 'META1'),
				'META1'
			)
		).toFixed(2);

		return (
			<div className="fund-tab-wrapper">
				<div className="total-balance-title">
					<div>Total Portfolio Value</div>
					<div>${usdTotal}</div>
				</div>
				<Table
					columns={columns}
					dataSource={totalBalances}
					pagination={{
						pageSize: 5,
					}}
				/>
				<DepositModal
					visibleMeta={this.state.isDepositModalVisible}
					hideModalMeta={this.hideDepositModal}
					showModalMeta={this.showDepositModal}
					ref="deposit_modal_new11"
					modalId="deposit_modal_new11"
					account={account}
					assetType={this.state.depositAsset}
				/>
				<WithdrawModal
					visible={this.state.isWithdrawModalVisible}
					hideModal={this.hideWithdrawModal}
					showModal={this.showWithdrawModal}
					ref="withdraw_modal_new"
					modalId="withdraw_modal_new"
					backedCoins={this.props.backedCoins}
				/>
			</div>
		);
	}
}

FundTab = connect(FundTab, {
	listenTo() {
		return [GatewayStore];
	},
	getProps() {
		return {
			backedCoins: GatewayStore.getState().backedCoins,
		};
	},
});

FundTab = debounceRender(FundTab, 50, {
	leading: false,
});

export default FundTab;
