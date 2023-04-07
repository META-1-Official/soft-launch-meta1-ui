import {Button, Table} from 'antd';
import SearchInput from 'components/Utility/SearchInput';
import React from 'react';
import counterpart from 'counterpart';

const DUMMY_DATA = [
	{
		id: 1,
		name: 'Test1',
		username: 'user1',
		createdDate: new Date('2022-03-30').toUTCString(),
	},
	{
		id: 2,
		name: 'Test2',
		username: 'user2',
		createdDate: new Date('2022-01-30').toUTCString(),
	},
	{
		id: 3,
		name: 'Test3',
		username: 'user3',
		createdDate: new Date('2021-12-30').toUTCString(),
	},
	{
		id: 4,
		name: 'Test4',
		username: 'user4',
		createdDate: new Date('2022-05-30').toUTCString(),
	},
	{
		id: 5,
		name: 'Test5',
		username: 'user5',
		createdDate: new Date('2022-03-30').toUTCString(),
	},

	{
		id: 6,
		name: 'Test6',
		username: 'user6',
		createdDate: new Date('2022-03-30').toUTCString(),
	},
	{
		id: 7,
		name: 'Test7',
		username: 'user7',
		createdDate: new Date('2022-01-30').toUTCString(),
	},
	{
		id: 8,
		name: 'Test8',
		username: 'user8',
		createdDate: new Date('2021-12-30').toUTCString(),
	},
	{
		id: 9,
		name: 'Test9',
		username: 'user9',
		createdDate: new Date('2022-05-30').toUTCString(),
	},
	{
		id: 10,
		name: 'Test10',
		username: 'user10',
		createdDate: new Date('2022-03-30').toUTCString(),
	},
	{
		id: 11,
		name: 'Test11',
		username: 'user11',
		createdDate: new Date('2022-03-30').toUTCString(),
	},
	{
		id: 12,
		name: 'Test12',
		username: 'user12',
		createdDate: new Date('2022-03-30').toUTCString(),
	},
];
class AddContact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contactData: DUMMY_DATA,
			searchTerm: '',
			rowCollection: DUMMY_DATA,
		};
	}
	formatDate(date) {
		var month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const newDate = new Date(date).toUTCString();
		const newDateArr = newDate.split(' ');
		return `${month[new Date(date).getMonth()]} ${newDateArr[1]}, ${
			newDateArr[3]
		}`;
	}
	_onSearchChange(e) {
		this.setState({
			searchTerm: e.target.value,
		});
	}
	_buildColumns() {
		return [
			{
				title: (
					<span>
						{counterpart.translate('contact.meta1users').toUpperCase()}
					</span>
				),
				colSpan: 1,
				className: 'col-name',
				key: 'name',
				render: (rowData) => {
					return (
						<div>
							<span className="span_1">@{rowData.username}</span>
							<p className="para_1" style={{color: '#ffc000'}}>
								{counterpart.translate('account.votes.name')}: {rowData.name}
							</p>
						</div>
					);
				},
			},
			{
				title: (
					<span>
						{counterpart.translate('contact.wallet_created').toUpperCase()}
					</span>
				),
				colSpan: 1,
				className: 'col-acc',
				key: 'createdDate',
				render: (rowData) => {
					return (
						<div>
							<span>{this.formatDate(rowData.createdDate)}</span>
						</div>
					);
				},
			},
			{
				title: (
					<span>
						{counterpart.translate('contact.add_to_contact').toUpperCase()}
					</span>
				),
				colSpan: 1,
				key: 'addBtn',
				className: 'col-btn',
				render: () => {
					return (
						<div>
							<Button type="primary" className="add-contact-btn">
								{counterpart.translate('contact.add')}
							</Button>
						</div>
					);
				},
			},
		];
	}
	render() {
		const columns = this._buildColumns();
		return (
			<div className="add-contact">
				<div className="add-contact-div-title">
					<span className="page-title">
						{counterpart.translate('header.add_contact')}
					</span>
				</div>
				<div className="contact-container">
					<div style={{width: '70%'}}>
						<SearchInput
							placeholder={counterpart.translate('contact.search_meta1_users')}
							value={this.state.searchTerm}
							className="input-box-search"
							style={{width: '100%'}}
							onChange={this._onSearchChange.bind(this)}
						/>
						<div className="table">
							<Table
								style={{width: '100%', marginTop: '16px'}}
								rowKey="name"
								columns={columns}
								dataSource={this.state.contactData.filter((data) => {
									return Object.keys(data).some((obj) => {
										return String(data[obj])
											.toLowerCase()
											.includes(this.state.searchTerm.toLowerCase());
									});
								})}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddContact;
