import {ChainTypes, ChainStore} from 'meta1-vision-js';
import counterpart from 'counterpart';
import utils from 'common/utils';
import Tap from '@tapfiliate/tapfiliate-js';

import ls from 'lib/common/localStorage';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

// track customer
export const checkCustomer = async (customerId) => {
	await Tap.customer(customerId);
};

// track conversion
export const checkConversion = async (o, referred_user) => {
	const ops = Object.keys(ChainTypes?.operations);

	ops.push(
		'property_create_operation',
		'property_update_operation',
		'property_approve_operation',
		'property_delete_operation',
		'asset_price_publish_operation'
	);

	const dynGlobalObject = await ChainStore.getObject('2.1.0');
	const lastIrreversibleBlockNum = dynGlobalObject.get(
		'last_irreversible_block_num'
	);
	let trxTypes = counterpart.translate('transaction.trxTypes');

	console.log('@00', trxTypes, ops[o.op[0]], lastIrreversibleBlockNum);

	if (
		trxTypes[ops[o.op[0]]] !== 'Transfer' ||
		// o.block_num > lastIrreversibleBlockNum ||
		!referred_user
	)
		return;

	const fromAcc = await ChainStore.getAccount(o.op[1].from);
	const asset = await ChainStore.getAsset(o.op[1].amount.asset_id);
	const toAcc = await ChainStore.getAccount(o.op[1].to);

	const info = [
		{
			type: 'account',
			details: fromAcc ? fromAcc.toJS() : {},
			arg: 'from',
		},
		{
			type: 'amount',
			value: o.op[1].amount,
			details: asset ? asset.toJS() : {},
		},
		{
			type: 'account',
			details: toAcc ? toAcc.toJS() : {},
			arg: 'to',
		},
	];

	console.log('@11', info);

	if (referred_user === info[2].details.name && info[1].details.symbol) {
		const precision = utils.get_asset_precision(info[1].details.precision);
		const decimalOffset = o.op[1].amount.asset_id.asset_id === '1.3.0' ? 5 : 0;
		const decimals = Math.max(0, precision - decimalOffset);

		await Tap.conversion(`${o.id}`, info[1].value.amount / decimals, {
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

		console.log('Conversion Created');
		ss.remove('referred_user_id');
	}
};
