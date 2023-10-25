import React, {useState, useEffect} from 'react';
import {Table, Select} from 'antd';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Immutable from 'immutable';
import Translate from 'react-translate-component';
import AccountActions from 'actions/AccountActions';
import {debounce} from 'lodash-es';
import BalanceComponent from '../Utility/BalanceComponent';
import AccountStore from 'stores/AccountStore';
import LoadingIndicator from '../LoadingIndicator';
import SearchInput from '../Utility/SearchInput';
import {ChainStore} from 'meta1-vision-js';
import {FaUserPlus, FaUserAlt, FaUserMinus} from 'react-icons/fa';
import counterpart from 'counterpart';

const Accounts = (props) => {
	const [searchTerm, setSearchTerm] = useState(props.searchTerm || '');
	const [isLoading, setIsLoading] = useState(false);
	const [rowsOnPage, setRowsOnPage] = useState(25);
	const [dataSource, setDataSource] = useState([]);
	const [columns, setColumns] = useState([]);
	const balanceObjects = [];

	useEffect(async () => {
		await initColums();
		AccountActions.accountSearch('');
	}, []);

	useEffect(async () => {
		await initDataSource();
	}, [props.searchAccounts]);

	const _onSearchChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
		setIsLoading(true);
		AccountActions.accountSearch(searchTerm);
	};

	const _onAddContact = (account, e) => {
		e.preventDefault();
		AccountActions.addAccountContact(account);
	};

	const _onRemoveContact = (account, e) => {
		e.preventDefault();
		AccountActions.removeAccountContact(account);
	};

	const handleRowsChange = (rows) => {
		setRowsOnPage(rows);
	};

	const _ensureBalanceObject = (object_id) => {
		if (object_id && typeof object_id === 'string') {
			if (!this.balanceObjects[object_id]) {
				this.balanceObjects[object_id] = parseFloat(
					ChainStore.getObject(object_id).get('balance')
				);
			}
		}
		if (!this.balanceObjects[object_id]) {
			this.balanceObjects[object_id] = 0;
		}
	};

	const initColums = async () => {
		const columns = [
			{
				title: <Translate component="span" content="explorer.assets.id" />,
				dataIndex: 'accountId',
				key: 'accountId',
				defaultSortOrder: 'ascend',
				sorter: (a, b) => {
					return a.accountId > b.accountId
						? 1
						: a.accountId < b.accountId
						? -1
						: 0;
				},
				render: (id) => {
					return <div>{id}</div>;
				},
			},
			{
				title: <FaUserAlt />,
				dataIndex: 'accountContacts',
				key: 'accountContacts',
				render: (contacts, record) => {
					return contacts.has(record.accountName) ? (
						<div onClick={() => _onRemoveContact(record.accountName)}>
							<FaUserMinus />
						</div>
					) : (
						<div onClick={() => _onAddContact(record.accountName)}>
							<FaUserPlus />
						</div>
					);
				},
			},
			{
				title: <Translate component="span" content="account.name" />,
				dataIndex: 'accountName',
				key: 'accountName',
				sorter: (a, b) => {
					return a.accountName > b.accountName
						? 1
						: a.accountName < b.accountName
						? -1
						: 0;
				},
				render: (name) => {
					return (
						<div>
							<Link to={`/account/${name}/overview`}>{name}</Link>
						</div>
					);
				},
			},
			{
				title: <Translate component="span" content="gateway.balance" />,
				dataIndex: 'accountBalance',
				key: 'accountBalance',
				sorter: (a, b) => {
					this._ensureBalanceObject(a.accountBalance);
					this._ensureBalanceObject(b.accountBalance);

					return this.balanceObjects[a.accountBalance] >
						this.balanceObjects[b.accountBalance]
						? 1
						: this.balanceObjects[a.accountBalance] <
						  this.balanceObjects[b.accountBalance]
						? -1
						: 0;
				},
				render: (balance) => {
					return (
						<div>
							{!balance ? 'n/a' : <BalanceComponent balance={balance} />}
						</div>
					);
				},
			},
			{
				title: <Translate component="span" content="account.percent" />,
				dataIndex: 'accountBalance',
				key: 'accountBalancePercentage',
				sorter: (a, b) => {
					this._ensureBalanceObject(a.accountBalance);
					this._ensureBalanceObject(b.accountBalance);

					return this.balanceObjects[a.accountBalance] >
						this.balanceObjects[b.accountBalance]
						? 1
						: this.balanceObjects[a.accountBalance] <
						  this.balanceObjects[b.accountBalance]
						? -1
						: 0;
				},
				render: (balance) => {
					return (
						<div>
							{!balance ? (
								'n/a'
							) : (
								<BalanceComponent balance={balance} asPercentage={true} />
							)}
						</div>
					);
				},
			},
		];

		setColumns(columns);
	};

	const initDataSource = async () => {
		let {searchAccounts} = props;
		let dataSource = [];

		if (searchAccounts.size > 0) {
			searchAccounts
				.filter((a) => {
					return a.includes(searchTerm);
				})
				.sort((a, b) => {
					if (a > b) {
						return 1;
					} else if (a < b) {
						return -1;
					} else {
						return 0;
					}
				})
				.map((name, id) => {
					let currentAccount = ChainStore.getAccount(id.toLowerCase());
					let balance = currentAccount
						? currentAccount.getIn(['balances', '1.3.0']) || null
						: null;
					dataSource.push({
						accountId: id,
						accountContacts: AccountStore.getState().accountContacts,
						accountName: name,
						accountBalance: balance,
					});
				});
		}

		setDataSource(dataSource);
		setIsLoading(false);
	};

	return (
		<div className="accounts-tab">
			<div style={{padding: '30px'}}>
				<div className="search-input">
					<SearchInput
						placeholder={counterpart.translate('markets.search')}
						value={searchTerm}
						onChange={_onSearchChange}
					/>

					<div
						style={{
							display: 'inline-block',
							marginLeft: '24px',
						}}
					>
						{searchTerm && searchTerm.length == 0 ? (
							<Translate content="account.start_typing_to_search" />
						) : null}
					</div>
				</div>

				<Table
					style={{width: '100%', marginTop: '16px'}}
					rowKey="accountId"
					columns={columns}
					dataSource={dataSource}
					pagination={{
						position: 'bottom',
						pageSize: Number(rowsOnPage),
					}}
				/>
				{isLoading ? (
					<div style={{textAlign: 'center', padding: 10}}>
						<LoadingIndicator type="three-bounce" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Accounts;
