import {ChainTypes, ChainStore} from 'meta1js';
import counterpart from 'counterpart';
import utils from 'common/utils';
import Tap from '@tapfiliate/tapfiliate-js';

import ls from 'lib/common/localStorage';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

// track customer
export const checkCustomer = (customerId) => {
	Tap.customer(customerId);
};

// track conversion
export const checkConversion = (o, referred_user) => {
	const ops = Object.keys(ChainTypes?.operations);

	ops.push(
		'property_create_operation',
		'property_update_operation',
		'property_approve_operation',
		'property_delete_operation',
		'asset_price_publish_operation'
	);

	const dynGlobalObject = ChainStore.getObject('2.1.0');
	const lastIrreversibleBlockNum = dynGlobalObject.get(
		'last_irreversible_block_num'
	);
	let trxTypes = counterpart.translate('transaction.trxTypes');

	if (
		trxTypes[ops[o.op[0]]] !== 'Transfer' ||
		o.block_num > lastIrreversibleBlockNum ||
		!referred_user
	)
		return;

	const info = [
		{
			type: 'account',
			details: ChainStore.getAccount(o.op[1].from)
				? ChainStore.getAccount(o.op[1].from).toJS()
				: {},
			arg: 'from',
		},
		{
			type: 'amount',
			value: o.op[1].amount,
			details: ChainStore.getAsset(o.op[1].amount.asset_id)
				? ChainStore.getAsset(o.op[1].amount.asset_id).toJS()
				: {},
		},
		{
			type: 'account',
			details: ChainStore.getAccount(o.op[1].to)
				? ChainStore.getAccount(o.op[1].to).toJS()
				: {},
			arg: 'to',
		},
	];

	if (referred_user === info[2].details.name && info[1].details.symbol) {
		const precision = utils.get_asset_precision(info[1].details.precision);
		const decimalOffset = o.op[1].amount.asset_id.asset_id === '1.3.0' ? 5 : 0;
		const decimals = Math.max(0, precision - decimalOffset);

		Tap.conversion(`${o.id}`, info[1].value.amount / decimals, {
			customer_id: info[2].details.name,
			meta_data: {
				raw_amount: info[1].value.amount,
				parsed_amount: info[1].value.amount / decimals,
				crypto_currency: info[1].details.symbol,
				precision: precision,
				sender: info[0].details.name,
				sender_id: info[0].details.id,
				receiver: info[2].details.name,
				received_id: info[2].details.id,
			},
		});
		ss.remove('referred_user_id');
	}
};
