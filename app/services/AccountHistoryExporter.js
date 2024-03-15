import {saveAs} from 'file-saver';
import {ChainTypes as grapheneChainTypes, FetchChain} from 'meta1-vision-js';
import report from 'bitshares-report';
const {operations} = grapheneChainTypes;
const ops = Object.keys(operations);
ops.push(
	'property_create_operation',
	'property_update_operation',
	'property_approve_operation',
	'property_delete_operation',
	'asset_price_publish_operation'
);

const FULL = 'FULL';
const COINBASE = 'COINBASE';

export {FULL, COINBASE};

class AccountHistoryExporter {
	pad(number, length) {
		return String(number).padStart(length, '0');
	}

	formatDate(d) {
		const pad = (num) => String(num).padStart(2, '0');
		const offsetSign = d.getTimezoneOffset() < 0 ? '+' : '-';
		const offsetHours = Math.abs(Math.floor(d.getTimezoneOffset() / 60))
			.toString()
			.padStart(2, '0');
		const offsetMinutes = Math.abs(d.getTimezoneOffset() % 60)
			.toString()
			.padStart(2, '0');

		return `${pad(d.getDate())}.${pad(
			d.getMonth() + 1
		)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
			d.getSeconds()
		)} GMT${offsetSign}${offsetHours}:${offsetMinutes}`;
	}

	async generateCSV(accountsList, esNode, exportType) {
		const limit = 150;
		const account = accountsList[0].get('id');
		const accountName = (await FetchChain('getAccount', account)).get('name');
		const recordData = {};

		let start = 0;
		while (true) {
			const res = await this._getAccountHistoryES(
				account,
				limit,
				start,
				esNode
			);
			if (!res.length) break;

			await report.resolveBlockTimes(res);
			await report.resolveAssets(res);

			for (const record of res) {
				const trx_id = record.id;
				const type = ops[record.op.type];
				let data = record.op.data;

				switch (type) {
					case 'vesting_balance_withdraw':
					case 'transfer':
						data.amount = data.amount_;
						break;
				}

				if (!['vesting_balance_withdraw', 'transfer'].includes(type)) {
					recordData[trx_id] = {
						timestamp: new Date(record.block_time),
						type,
						data,
					};
				}
			}

			start += res.length;
		}

		if (Object.keys(recordData).length === 0) return;

		let parsedData;
		if (exportType === FULL) {
			parsedData = Object.entries(recordData);
		} else {
			const groupedRecordData = report.groupEntries(recordData);
			parsedData = report.parseData(groupedRecordData, account, accountName);
		}

		const blob = this.dataToCSV(parsedData, exportType);
		const today = new Date();
		const filename = `bitshares-account-history-${accountName}-${today.getFullYear()}-${(
			'0' +
			(today.getMonth() + 1)
		).slice(-2)}-${('0' + today.getDate()).slice(-2)}-${(
			'0' + today.getHours()
		).slice(-2)}${('0' + today.getMinutes()).slice(-2)}.csv`;

		saveAs(blob, filename);
	}

	async _getAccountHistoryES(account_id, limit, start, esNode) {
		const url = `${esNode}/get_account_history?account_id=${account_id}&from_=${start}&size=${limit}&sort_by=block_data.block_time&type=data&agg_field=operation_type`;

		console.log('query', url);

		try {
			const response = await fetch(url);
			const result = await response.json();

			const opHistory = result.map((r) => ({
				id: r.account_history.operation_id,
				op: {
					type: r.operation_type,
					data: r.operation_history.op_object,
				},
				result: JSON.parse(r.operation_history.operation_result),
				block_num: r.block_data.block_num,
				block_time: `${r.block_data.block_time}Z`,
			}));

			return opHistory;
		} catch (err) {
			throw err;
		}
	}

	dataToCSV(data, exportType) {
		let csvString = '';

		if (exportType === COINBASE) {
			csvString = data
				.map((line) => {
					if (line.length >= 11 && line[10] instanceof Date) {
						line[10] = this.formatDate(line[10]);
					}
					return line.join(',');
				})
				.join('\n');
		} else {
			csvString = data.map((line) => JSON.stringify(line)).join('\n');
		}

		return new Blob([csvString], {type: 'text/csv;charset=utf-8'});
	}
}

export default AccountHistoryExporter;
