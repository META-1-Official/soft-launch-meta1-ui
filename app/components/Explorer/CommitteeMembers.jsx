import counterpart from 'counterpart';
import React, {useState, useEffect} from 'react';
import Immutable from 'immutable';
import ChainTypes from '../Utility/ChainTypes';
import BindToChainState from '../Utility/BindToChainState';
import {ChainStore} from 'meta1-vision-js';
import {connect} from 'alt-react';
import SettingsActions from 'actions/SettingsActions';
import FormattedAsset from '../Utility/FormattedAsset';
import SettingsStore from 'stores/SettingsStore';
import {Table} from 'antd';
import sanitize from 'sanitize';
import SearchInput from '../Utility/SearchInput';
import {Apis} from 'meta1-vision-ws';

const CommitteeMembers = (props) => {
	const [filter, setFilter] = useState(props.filter || '');
	const [dataSource, setDataSource] = useState([]);
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [columns, setColumns] = useState([]);

	useEffect(async () => {
		var obj = await Apis.db.get_objects(['2.0.0']);
		obj['0'] && (await getData(obj['0']));
	}, []);

	const _onFilter = (e) => {
		setFilter(e.target.value.toLowerCase() || '');
		SettingsActions.changeViewSetting({
			filterCommitteeMember: e.target.value.toLowerCase(),
		});
	};

	useEffect(() => {
		setFilteredDataSource(
			dataSource.filter((ele) => ele.name.includes(filter))
		);
		if (filter === '') {
			setFilteredDataSource(dataSource);
		}
	}, [filter, dataSource]);

	const getData = async (globalObject) => {
		let committee_members = globalObject.active_committee_members;
		let dataSourcePromise = [];

		if (committee_members.length > 0 && committee_members[1]) {
			dataSourcePromise = committee_members.map(async (a, index) => {
				if (!a) {
					return false;
				}
				let committee_member = (await Apis.db.get_objects([a]))['0'];
				if (!committee_member) {
					return false;
				}
				let account = (
					await Apis.db.get_objects([committee_member.committee_member_account])
				)['0'];

				return {
					key: a,
					rank: index + 1,
					name: account.name,
					votes: committee_member.total_votes,
					url: sanitize(`${committee_member.url}/${account.name}-committee`, {
						whiteList: [], // empty, means filter out all tags
						stripIgnoreTag: true, // filter out all HTML not in the whilelist
					}),
				};
			});
		}

		const columns = [
			{
				key: '#',
				title: '#',
				dataIndex: 'rank',
				sorter: (a, b) => {
					return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
				},
			},
			{
				key: 'name',
				title: counterpart.translate('account.votes.name'),
				dataIndex: 'name',
				sorter: (a, b) => {
					return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
				},
			},
			{
				key: 'votes',
				title: counterpart.translate('account.votes.votes'),
				dataIndex: 'votes',
				render: (item) => (
					<FormattedAsset amount={item} asset="1.3.0" decimalOffset={5} />
				),
				sorter: (a, b) => {
					return a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0;
				},
			},
			{
				key: 'url',
				title: counterpart.translate('account.votes.url'),
				dataIndex: 'url',
				render: (item) => (
					<a href={item} target="_blank" rel="noopener noreferrer">
						{item}
					</a>
				),
			},
		];

		Promise.all(dataSourcePromise).then((data) => setDataSource(data));
		setColumns(columns);
	};

	return (
		<div className="committee-tab">
			<div style={{padding: '30px'}}>
				<SearchInput
					placeholder={counterpart.translate(
						'explorer.witnesses.filter_by_name'
					)}
					value={filter}
					onChange={_onFilter}
					style={{
						width: '200px',
						marginBottom: '12px',
						marginTop: '4px',
					}}
				/>
				{columns && dataSource && (
					<Table
						columns={columns}
						dataSource={filteredDataSource}
						pagination={false}
					/>
				)}
			</div>
		</div>
	);
};

class CommitteeMembersStoreWrapper extends React.Component {
	render() {
		return <CommitteeMembers {...this.props} />;
	}
}

CommitteeMembersStoreWrapper = connect(CommitteeMembersStoreWrapper, {
	listenTo() {
		return [SettingsStore];
	},
	getProps() {
		return {
			filter: SettingsStore.getState().viewSettings.get(
				'filterCommitteeMember'
			),
		};
	},
});

export default CommitteeMembersStoreWrapper;
