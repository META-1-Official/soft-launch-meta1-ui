import React, {Fragment} from 'react';
import Translate from 'react-translate-component';
import {saveAs} from 'file-saver';
import ChainTypes from '../Utility/ChainTypes';
import BindToChainState from '../Utility/BindToChainState';
import utils from 'common/utils';
import {
	ChainTypes as grapheneChainTypes,
	FetchChain,
	ChainStore,
} from 'meta1-vision-js';
import counterpart from 'counterpart';
import Icon from '../Icon/Icon';
import cnames from 'classnames';
import PropTypes from 'prop-types';
import PaginatedList from '../Utility/PaginatedList';
const {operations} = grapheneChainTypes;
import report from 'bitshares-report';
import LoadingIndicator from '../LoadingIndicator';
import {Tooltip, Modal, Button, Select, Input, Row, Col} from 'antd';
const ops = Object.keys(operations);
ops.push(
	'property_create_operation',
	'property_update_operation',
	'property_approve_operation',
	'property_delete_operation',
	'asset_price_publish_operation'
);
import {Link} from 'react-router-dom';
import FormattedAsset from '../Utility/FormattedAsset';
import BlockTime from '../Blockchain/BlockTime';
import OperationAnt from '../Blockchain/OperationAnt';
import SettingsStore from 'stores/SettingsStore';
import {connect} from 'alt-react';
import PendingBlock from '../Utility/PendingBlock';
import {AiOutlineFileSearch} from 'react-icons/ai';
import {CaretDownFilled} from '@ant-design/icons';
import DatePicker from 'react-datepicker2';
import moment from 'moment-timezone';
const operation = new OperationAnt();

const Option = Select.Option;

const OptGroup = Select.OptGroup;

import AccountHistoryExporter, {
	FULL,
	COINBASE,
} from '../../services/AccountHistoryExporter';

import {explorerApi} from '../../services/api';
import {settingsAPIs} from 'api/apiConfig';
import BlockchainActions from '../../actions/BlockchainActions';
import BlockchainStore from '../../stores/BlockchainStore';
import TrxHash from '../Blockchain/TrxHash';
import {FaWeight} from 'react-icons/fa';
import axios from 'axios';

function compareOps(b, a) {
	if (a.block_num === b.block_num) {
		if (a.trx_in_block !== b.trx_in_block) {
			return a.trx_in_block - b.trx_in_block;
		}

		if (a.op_in_trx !== b.op_in_trx) {
			return a.op_in_trx - b.op_in_trx;
		}
		return a.virtual_op - b.virtual_op;
	} else {
		return a.block_num - b.block_num;
	}
}

class RecentTransactions extends React.Component {
	static propTypes = {
		accountsList: ChainTypes.ChainAccountsList.isRequired,
		limit: PropTypes.number,
		maxHeight: PropTypes.number,
		fullHeight: PropTypes.bool,
		showFilters: PropTypes.bool,
		showAll: PropTypes.bool,
	};

	static defaultProps = {
		limit: 0,
		showAll: false,
		maxHeight: 500,
		fullHeight: false,
		showFilters: false,
	};

	constructor(props) {
		super();

		this.state = {
			limit: props.limit,
			total: 0,
			pageSize: 20,
			fetchingAccountHistory: false,
			headerHeight: 85,
			filter: 'all',
			accountHistoryError: false,
			rows: [],
			esNodeCustom: false,
			esNode: settingsAPIs.ES_WRAPPER_LIST[0].url,
			visibleId: '',
			history: [],
			dateFrom: moment.unix(0),
			dateTo: moment(),
			startIndex: 0,
			endIndex: 20,
		};
		this.getDataSource = this.getDataSource.bind(this);

		this.useCustom = counterpart.translate('account.export_modal.use_custom');
		this.esNodeChange = this.esNodeChange.bind(this);
		this._generateCSV = this._generateCSV.bind(this);
		this.onDateFromChange = this.onDateFromChange.bind(this);
		this.onDateToChange = this.onDateToChange.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
	}

	componentDidMount() {
		if (!this.props.fullHeight) {
			let t = this.refs.transactions;
			this._setHeaderHeight();
		}

		let {accountsList, customFilter, filter} = this.props;

		this._getHistory(accountsList);
	}

	esNodeChange(e) {
		let newValue = null;
		if (e.target) {
			newValue = e.target.value;
		} else {
			newValue = e;
		}
		if (newValue == this.useCustom) {
			this.setState({
				esNode: '',
				esNodeCustom: true,
			});
		} else {
			this.setState({
				esNode: newValue,
			});
		}
	}

	_setHeaderHeight() {
		let height = this.refs.header.offsetHeight;

		if (height !== this.state.headerHeight) {
			this.setState({
				headerHeight: height,
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (
			!utils.are_equal_shallow(this.props.accountsList, nextProps.accountsList)
		)
			return true;
		if (this.props.maxHeight !== nextProps.maxHeight) return true;
		if (this.state.headerHeight !== nextState.headerHeight) return true;
		if (this.state.filter !== nextState.filter) return true;
		if (this.props.blocks !== nextProps.blocks) return true;
		if (this.props.customFilter) {
			if (
				!utils.are_equal_shallow(
					this.props.customFilter.fields,
					nextProps.customFilter.fields
				) ||
				!utils.are_equal_shallow(
					this.props.customFilter.values,
					nextProps.customFilter.values
				)
			) {
				return true;
			}
		}

		if (this.props.maxHeight !== nextProps.maxHeight) return true;
		if (
			nextState.limit !== this.state.limit ||
			nextState.fetchingAccountHistory !== this.state.fetchingAccountHistory
		)
			return true;

		for (let key = 0; key < nextProps.accountsList.length; ++key) {
			let npa = nextProps.accountsList[key];
			let nsa = this.props.accountsList[key];
			if (npa && nsa && npa.get('history') !== nsa.get('history')) return true;
		}

		if (this.state.esNode !== nextState.esNode) return true;
		if (this.state.esNodeCustom !== nextState.esNodeCustom) return true;
		if (this.state.visibleId !== nextState.visibleId) return true;
		if (this.state.history.length !== nextState.history.length) return true;
		if (!this.props.transactionHistoryCheckbox) return false;
		if (!nextProps.transactionHistoryCheckbox) return false;
		if (
			this.props.transactionHistoryCheckbox.length !==
			nextProps.transactionHistoryCheckbox.length
		) {
			return true;
		}
		return false;
	}

	_onIncreaseLimit() {
		this.setState({
			limit: this.state.limit + 30,
		});
	}

	async _getHistory(accountsList) {
		let history = [];

		let seen_ops = new Set();
		for (let account of accountsList) {
			if (account) {
				if (!this.props.showAll) {
					let h = account.get('history');
					if (h) {
						history = history.concat(
							h
								.toJS()
								.filter((op) => !seen_ops.has(op.id) && seen_ops.add(op.id))
						);
					}
				} else {
					const countResponse = await explorerApi.get(`v1/es/account_history`, {
						params: {
							account_id: account.get('id'),
							size: 1,
							from: 0,
							type: 'data',
							sort_by: '-account_history.sequence',
						},
					});

					const count = countResponse.data.count;

					const response = await explorerApi.get(`v1/es/account_history`, {
						params: {
							account_id: account.get('id'),
							size: count,
							from: 0,
							type: 'data',
							sort_by: '-account_history.sequence',
						},
					});

					if (response.status === 200) {
						response.data.data.forEach((h) => {
							history.push({
								id: h.account_history.operation_id,
								block_num: h.block_data.block_num,
								op_in_trx: h.operation_history.op_in_trx,
								trx_in_block: h.operation_history.trx_in_block,
								virtual_op: h.operation_history.virtual_op,
								op: JSON.parse(h.operation_history.op),
								result: JSON.parse(h.operation_history.operation_result),
								block_time: {
									timestamp: moment.utc(h.block_data.block_time).toDate(),
								},
							});
						});

						this.setState({limit: count, total: count});
					}
				}
			}
		}

		this.setState({history});
	}

	_filterHistory(accountsList, filterOp, customFilter) {
		let {history} = this.state;
		// Filtering
		let myCustomFilters = [
			'received',
			'sent',
			'last_month',
			'last_week',
			'24h',
			'from',
			'to',
		];
		const dynGlobalObject = ChainStore.getObject('2.1.0');
		const lastIrreversibleBlockNum = dynGlobalObject.get(
			'last_irreversible_block_num'
		);
		let current_account_id =
			accountsList.length === 1 && accountsList[0]
				? accountsList[0].get('id')
				: null;

		if (filterOp) {
			if (myCustomFilters.includes(filterOp)) {
				switch (filterOp) {
					// Balances - amount
					// Txns with positive amount & to current user
					case 'received':
						history = history.filter((a) => {
							if (a.op[1].amount) {
								return (
									a.op[1].amount.amount > 0 && a.op[1].to === current_account_id
								);
							}
						});
						break;
					// Txns with positive amount & from the current user
					case 'sent':
						history = history.filter((a) => {
							if (a.op[1].amount) {
								return (
									a.op[1].amount.amount > 0 &&
									a.op[1].from === current_account_id
								);
							}
						});
						break;
					// Date and Time
					// Txns of the last month
					case 'last_month':
						history = history.filter((a) => {
							const timestamp = moment(a.block_time.timestamp).valueOf();
							return timestamp >= moment().startOf('month').valueOf();
						});
						break;
					// Txns of the last week
					case 'last_week':
						history = history.filter((a) => {
							const timestamp = moment(a.block_time.timestamp).valueOf();
							return timestamp >= moment().subtract(1, 'w').valueOf();
						});
						break;
					// Txns of the last 24 h
					case '24h':
						history = history.filter((a) => {
							const timestamp = moment(a.block_time.timestamp).valueOf();
							return timestamp >= moment().subtract(1, 'd').valueOf();
						});
						break;
					// Username
					// All incoming txns to the current user
					// Txns to the current user
					case 'from':
						history = history.filter((a) => {
							if (a.op[1].amount) {
								return a.op[1].from === current_account_id;
							}
						});
						break;
					// All outgoing txns to the current user
					// Txns to the current user
					case 'to':
						history = history.filter((a) => {
							if (a.op[1].amount) {
								return a.op[1].to === current_account_id;
							}
						});
						break;
				}
			} else {
				history = history.filter((a) => {
					return a.op[0] === operations[filterOp];
				});
			}
		}

		if (customFilter) {
			history = history.filter((a) => {
				let finalValue = customFilter.fields.reduce((final, filter) => {
					switch (filter) {
						case 'asset_id':
							return (
								final &&
								a.op[1]['amount'][filter] === customFilter.values[filter]
							);
							break;
						default:
							return final && a.op[1][filter] === customFilter.values[filter];
							break;
					}
				}, true);
				return finalValue;
			});
			this.setState({limit: history.length});
		}

		if (!filterOp) this.setState({limit: this.state.total});
		else this.setState({limit: history.length});

		if (this.state.startIndex > history.length) {
			this.setState({
				startIndex:
					Math.floor(history.length / this.state.pageSize) *
					this.state.pageSize,
				endIndex: history.length,
			});
		}

		return history;
	}

	async _generateCSV(exportType) {
		if (__DEV__) {
			console.log('intializing fetching of ES data');
		}
		try {
			const AHE = new AccountHistoryExporter();

			this.setState({fetchingAccountHistory: true});

			await AHE.generateCSV(
				this.props.accountsList,
				this.state.esNode,
				exportType
			);

			this.setState({
				fetchingAccountHistory: false,
				accountHistoryError: null,
			});
		} catch (err) {
			this.setState({
				fetchingAccountHistory: false,
				accountHistoryError: err,
				esNodeCustom: false,
				esNode: settingsAPIs.ES_WRAPPER_LIST[0].url,
			});
		}
	}

	_onChangeFilter(value) {
		this.setState({
			filter: value,
		});
	}

	getDataSource(o, current_account_id) {
		let fee = o.op[1].fee;
		let trxTypes = counterpart.translate('transaction.trxTypes');
		const info = operation.getColumn(
			o.op,
			current_account_id,
			o.block_num,
			o.result,
			this.props.marketDirections
		);
		fee.amount = parseInt(fee.amount, 10);
		const dynGlobalObject = ChainStore.getObject('2.1.0');
		const lastIrreversibleBlockNum = dynGlobalObject.get(
			'last_irreversible_block_num'
		);

		return {
			pairData: trxTypes[ops[o.op[0]]],
			pair: (
				<div className="pair">
					<div
						className={
							cnames('txtlabel', info.color || 'info') +
							' ' +
							cnames('label', info.color || 'info')
						}
					>
						100%
					</div>
					<span className={cnames('txtlabel', info.color || 'info')}>
						{trxTypes[ops[o.op[0]]]}
					</span>
				</div>
			),
			info: (
				<div>
					<div>
						<span className="info-class">{info.column}</span>
					</div>
					<div style={{fontSize: 14, paddingTop: 5}}>
						{o.block_num > lastIrreversibleBlockNum ? (
							<PendingBlock blockNumber={o.block_num} />
						) : null}
					</div>
				</div>
			),
			transaction: (
				<TrxHash
					trx={
						this.props.blocks
							.toArray()
							.filter((block) => block.id === o.block_num)[0]
							?.transaction_merkle_root
					}
				/>
			),
			fee: <FormattedAsset amount={fee.amount} asset={fee.asset_id} />,
			time: (
				<BlockTime
					blockHeader={o.block_time}
					block_number={o.block_num}
					fullDate={true}
					transactionDate={true}
					type={'datetime'}
					format={'short'}
				/>
			),
		};
	}

	_getRowClassName(row) {
		const labelStrIndex =
			row.pair.props.children[0].props.className.indexOf(' label ');
		return row.pair.props.children[0].props.className
			.replace('txtlabel', 'tr')
			.substr(0, labelStrIndex - 4);
	}

	onDateFromChange(dateFrom) {
		this.setState({dateFrom}, () => {
			this.forceUpdate();
		});
	}

	onDateToChange(dateTo) {
		this.setState({dateTo}, () => {
			this.forceUpdate();
		});
	}

	onChangePage(currentPage, pageSize) {
		this.setState(
			{
				startIndex: (currentPage - 1) * pageSize,
				endIndex: currentPage * pageSize,
				pageSize: pageSize,
			},
			() => {
				this.forceUpdate();
			}
		);
	}

	render() {
		let {accountsList, filter, customFilter, style, blocks} = this.props;

		let {limit, dateFrom, dateTo, startIndex, endIndex, pageSize} = this.state;

		let current_account_id =
			accountsList.length === 1 && accountsList[0]
				? accountsList[0].get('id')
				: null;

		let history = this._filterHistory(
			accountsList,
			this.props.showFilters && this.state.filter !== 'all'
				? this.state.filter
				: filter,
			customFilter
		).sort(compareOps);
		style = style ? style : {width: '100%', height: '100%'};

		if (history.length > 0) delete style.height;
		history = history.filter((a) => {
			const timestamp = moment(a.block_time.timestamp).valueOf();
			return timestamp >= dateFrom.valueOf() && timestamp <= dateTo.valueOf();
		});

		let defaultOptions = null;
		let amountOptions = null;
		let dateTimeOptions = null;
		let usernamesOptions = null;

		// Default options for filters
		if (true || this.props.showFilters) {
			defaultOptions = [
				'all',
				'transfer',
				// 'proposal_create',
				// 'proposal_update',
				// 'proposal_delete',
				'limit_order_create',
				'limit_order_cancel',
				'fill_order',
				'account_create',
				'account_update',
				'asset_create',
				'witness_withdraw_pay',
				'vesting_balance_withdraw',
			].map((type) => {
				return (
					<Option value={type} key={type}>
						{counterpart.translate('transaction.trxTypes.' + type)}
					</Option>
				);
			});

			// Amount Options
			amountOptions = ['received', 'sent'].map((type) => {
				return (
					<Option value={type} key={type}>
						{counterpart.translate('transaction.trxTypes.' + type)}
					</Option>
				);
			});

			// Date and Time
			dateTimeOptions = ['last_month', 'last_week', '24h'].map((type) => {
				return (
					<Option value={type} key={type}>
						{counterpart.translate('transaction.trxTypes.' + type)}
					</Option>
				);
			});

			// Usernames
			usernamesOptions = ['from', 'to'].map((type) => {
				return (
					<Option value={type} key={type}>
						{counterpart.translate('transaction.trxTypes.' + type)}
					</Option>
				);
			});
		}

		let hideFee = false;

		let display_history = history.length
			? history.slice(startIndex, endIndex).map((o) => {
					return this.getDataSource(o, current_account_id);
			  })
			: [];

		let block_nums = history.slice(startIndex, endIndex).map((h) => {
			return h.block_num;
		});

		block_nums = [...new Set(block_nums)];

		if (block_nums.length > 0) {
			const loadedBlockNums = this.props.blocks.toArray().map((o) => o.id);
			for (let block_num of block_nums) {
				if (loadedBlockNums.indexOf(block_num) < 0) {
					BlockchainActions.getBlock(block_num);
				}
			}
		}

		let action = (
			<div className="total-value" key="total_value">
				<span style={{textAlign: 'center'}}>&nbsp;</span>
			</div>
		);

		return (
			<div
				className="recent-transactions transactions-history-font-class"
				style={style}
			>
				<div className="generic-bordered-box">
					{this.props.dashboard ? null : (
						<div ref="header">
							<div className="block-content-header">
								<span>
									{this.props.title ? (
										this.props.title
									) : (
										<Translate content="account.recent" />
									)}
								</span>
							</div>
						</div>
					)}
					<div className="header-selector">
						<div className="header-selector-body">
							<div style={{display: 'flex', justifyContent: 'center'}}>
								<span className="page-title">Transaction History</span>
								<span style={{marginLeft: '20px', marginRight: '20px'}}>
									<DatePicker
										onChange={(dateFrom) => this.onDateFromChange(dateFrom)}
										value={this.state.dateFrom}
									/>
								</span>
								<DatePicker
									onChange={(dateTo) => this.onDateToChange(dateTo)}
									value={this.state.dateTo}
								/>
							</div>

							<div className="filter inline-block">
								{this.props.showFilters ? (
									<Select
										className="filter-selector"
										value={this.state.filter}
										onChange={this._onChangeFilter.bind(this)}
										suffixIcon={<CaretDownFilled />}
										getPopupContainer={(triggerNode) => triggerNode.parentNode}
									>
										<OptGroup label="General">{defaultOptions}</OptGroup>
										<OptGroup label="Balances">{amountOptions}</OptGroup>
										<OptGroup label="Date and Time">{dateTimeOptions}</OptGroup>
										<OptGroup label="Username">{usernamesOptions}</OptGroup>
									</Select>
								) : null}
							</div>
						</div>
						{this.state.accountHistoryError && (
							<div className="has-error" style={{paddingLeft: '0.75rem'}}>
								<Translate content="account.history_error" />
							</div>
						)}
					</div>
					<PaginatedList
						withTransition
						pageSize={pageSize}
						className={
							'table table-striped ' +
							(this.props.dashboard ? ' dashboard-table table-hover' : '')
						}
						header={[
							{
								title: (
									<div className="transaction-history-table-title">
										<Translate content="account.user_issued_assets.operation" />
									</div>
								),
								isShow:
									this.props.transactionHistoryCheckbox?.includes('Operation'),
								dataIndex: 'pairData',
								align: 'left',
								render: (item) => {
									return (
										<div>
											{item === 'Cancel order' && (
												<div className="transaction-span transaction-span-cancel">
													{item}
												</div>
											)}
											{item === 'Place order' && (
												<div className="transaction-span transaction-span-place">
													{item}
												</div>
											)}
											{item !== 'Place order' && item !== 'Cancel order' && (
												<div className="transaction-span transaction-span-fill">
													{item}
												</div>
											)}
										</div>
									);
								},
							},
							{
								title: (
									<div className="transaction-history-table-title">
										<Translate content="account.transactions.info" />
									</div>
								),
								isShow: this.props.transactionHistoryCheckbox?.includes('Info'),
								dataIndex: 'info',
								align: 'left',
								render: (item) => {
									return (
										<span
											style={{
												whiteSpace: 'nowrap',
											}}
										>
											{item}
										</span>
									);
								},
							},
							{
								title: (
									<div className="transaction-history-table-title">
										<Translate
											style={{whiteSpace: 'nowrap'}}
											content="account.transactions.hash"
										/>
									</div>
								),
								dataIndex: 'transaction',
								isShow: true,
								render: (item) => {
									return item;
								},
							},
							!hideFee
								? {
										title: (
											<div className="transaction-history-table-title">
												<Translate content="account.transactions.fee" />
											</div>
										),
										dataIndex: 'fee',
										align: 'left',
										isShow:
											this.props.transactionHistoryCheckbox?.includes('Fee'),
										render: (item) => {
											return (
												<span
													style={{
														whiteSpace: 'nowrap',
													}}
												>
													{item}
												</span>
											);
										},
								  }
								: {},
							{
								title: (
									<div className="transaction-history-table-title">
										<Translate
											style={{whiteSpace: 'nowrap'}}
											content="account.transactions.time"
										/>
									</div>
								),
								isShow: this.props.transactionHistoryCheckbox?.includes('Time'),
								dataIndex: 'time',
								render: (item) => {
									return <span style={{whiteSpace: 'nowrap'}}>{item}</span>;
								},
							},
						].filter((ele) => {
							if (ele.isShow) return ele;
						})}
						rows={display_history}
						label="utility.total_x_operations"
						extraRow={action}
						total={limit}
						rowClassName={(row) => this._getRowClassName(row)}
						onChangePage={this.onChangePage}
					/>

					{this.state.fetchingAccountHistory && <LoadingIndicator />}
				</div>
			</div>
		);
	}
}
RecentTransactions = BindToChainState(RecentTransactions);

RecentTransactions = connect(RecentTransactions, {
	listenTo() {
		return [SettingsStore, BlockchainStore];
	},
	getProps() {
		return {
			marketDirections: SettingsStore.getState().marketDirections,
			blocks: BlockchainStore.getState().blocks,
		};
	},
});

class TransactionWrapper extends React.Component {
	static propTypes = {
		asset: ChainTypes.ChainAsset.isRequired,
		to: ChainTypes.ChainAccount.isRequired,
		fromAccount: ChainTypes.ChainAccount.isRequired,
	};

	static defaultProps = {
		asset: '1.3.0',
	};

	render() {
		return <span className="wrapper">{this.props.children(this.props)}</span>;
	}
}
TransactionWrapper = BindToChainState(TransactionWrapper);

export {RecentTransactions, TransactionWrapper};
