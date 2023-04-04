import React from 'react';
import counterpart from 'counterpart';
import {Table} from 'antd';
import './paginated-list.scss';
export default class PaginatedList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pageSize: props.pageSize,
		};
	}

	static defaultProps = {
		rows: [],
		pageSize: 20,
		total: 0,
		label: 'utility.total_x_items',
		className: 'table',
		extraRow: null,
		style: {paddingBottom: '1rem'},
		loading: false,
	};

	onChangePage(e) {
		if (this.props.onChangePage) this.props.onChangePage(e.current, e.pageSize);
	}

	render() {
		const {pageSize} = this.state;
		const {header, rows, extraRow, loading, total} = this.props;
		const pageSizeOptions = [10, 20, 30, 40, 50, 100].filter(
			(item) => item < total
		);
		if (total > 0) pageSizeOptions.push(total);
		if (rows.length < 20) {
			pageSizeOptions.push(20);
		}
		return (
			<div className="paginated-list" style={this.props.style}>
				<Table
					loading={loading}
					dataSource={rows}
					uns
					columns={Array.isArray(header) ? header : []}
					footer={() => (extraRow ? extraRow : <span>&nbsp;</span>)}
					onChange={this.onChangePage.bind(this)}
					pagination={{
						showSizeChanger: true,
						hideOnSinglePage: false,
						defaultPageSize: pageSize,
						pageSizeOptions,
						total: total,
						showTotal: (total, range) =>
							counterpart.translate(this.props.label, {
								count: total,
							}),
					}}
					rowClassName={
						this.props.rowClassName == null
							? undefined
							: (record, index) => this.props.rowClassName(record, index)
					}
					rowSelection={this.props.rowSelection}
					locale={{emptyText: counterpart.translate('exchange.no_data')}}
				/>
				{this.props.children}
			</div>
		);
	}
}
