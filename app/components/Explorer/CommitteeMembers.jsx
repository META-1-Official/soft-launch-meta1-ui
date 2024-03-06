import counterpart from 'counterpart';
import React, {useState, useEffect, useMemo} from 'react';
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

	useEffect(() => {
		const fetchData = async () => {
			const globalObject = await Apis.db.get_objects(['2.0.0']);
			if (globalObject && globalObject['0']) {
				const committeeMembers = globalObject['0'].active_committee_members;
				if (
					committeeMembers &&
					committeeMembers.length > 0 &&
					committeeMembers[1]
				) {
					const dataSourcePromise = Promise.all(
						committeeMembers.map(async (a, index) => {
							if (!a) return false;
							const committeeMember = (await Apis.db.get_objects([a]))['0'];
							if (!committeeMember) return false;
							const account = (
								await Apis.db.get_objects([
									committeeMember.committee_member_account,
								])
							)['0'];
							return {
								key: a,
								rank: index + 1,
								name: account.name,
								votes: committeeMember.total_votes,
								url: sanitize(
									`${committeeMember.url}/${account.name}-committee`,
									{
										whiteList: [],
										stripIgnoreTag: true,
									}
								),
							};
						})
					);
					const data = await dataSourcePromise;
					const rmZeroVotes = data.filter((ele) => ele.votes !== 0);
					setDataSource(rmZeroVotes);
					setFilteredDataSource(rmZeroVotes);
				}
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		SettingsActions.changeViewSetting({
			filterCommitteeMember: filter.toLowerCase(),
		});
	}, [filter]);

	useEffect(() => {
		setFilteredDataSource(
			dataSource.filter((ele) => ele.name?.includes(filter))
		);
	}, [filter, dataSource]);

	const _onFilter = (e) => {
		setFilter(e.target.value.toLowerCase() || '');
	};

	const columns = useMemo(
		() => [
			{
				key: '#',
				title: '#',
				dataIndex: 'rank',
				sorter: (a, b) => a.rank - b.rank,
			},
			{
				key: 'name',
				title: counterpart.translate('account.votes.name'),
				dataIndex: 'name',
				sorter: (a, b) => a.name.localeCompare(b.name),
			},
			{
				key: 'votes',
				title: counterpart.translate('account.votes.votes'),
				dataIndex: 'votes',
				render: (item) => (
					<FormattedAsset amount={item} asset="1.3.0" decimalOffset={5} />
				),
				sorter: (a, b) => a.votes - b.votes,
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
		],
		[]
	);

	return (
		<div className="committee-tab">
			<div style={{padding: '30px'}}>
				<SearchInput
					placeholder={counterpart.translate(
						'explorer.witnesses.filter_by_name'
					)}
					value={filter}
					onChange={_onFilter}
					style={{width: '200px', marginBottom: '12px', marginTop: '4px'}}
				/>
				{columns && filteredDataSource && (
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

const CommitteeMembersStoreWrapper = (props) => {
	return <CommitteeMembers {...props} />;
};

export default connect(CommitteeMembersStoreWrapper, {
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
