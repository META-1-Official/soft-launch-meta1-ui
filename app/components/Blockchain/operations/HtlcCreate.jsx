import React from 'react';
import TranslateWithLinks from '../../Utility/TranslateWithLinks';
import {Tooltip} from 'antd';
import {ChainStore} from 'meta1-vision-js';
import utils from 'common/utils';
import counterpart from 'counterpart';

export const HtlcCreate = ({op, block}) => {
	const globalObject = ChainStore.getObject(process.env.GLOBAL_PROPERTY);
	const dynGlobalObject = ChainStore.getObject(
		process.env.DYNAMIC_GLOBAL_PROPERTY
	);
	let block_time = utils.calc_block_time(block, globalObject, dynGlobalObject);
	let estimated = false;
	if (!block_time) {
		block_time = utils.calc_block_time(
			block,
			globalObject,
			dynGlobalObject,
			true
		);
		estimated = true;
	}

	op[1].amount.amount = parseFloat(op[1].amount.amount);

	let expiryTime = new Date();

	expiryTime.setTime(block_time.getTime() + op[1].claim_period_seconds * 1000);
	return (
		<React.Fragment>
			<span className="right-td">
				<TranslateWithLinks
					string="operation.htlc_create"
					keys={[
						{
							type: 'date',
							arg: 'lock_period',
							value: expiryTime,
						},
						{
							type: 'account',
							value: op[1].from,
							arg: 'from',
						},
						{
							type: 'amount',
							value: op[1].amount,
							arg: 'amount',
							decimalOffset:
								op[1].amount.asset_id === process.env.META1_ASSET_ID ? 5 : null,
						},
						{
							type: 'account',
							value: op[1].to,
							arg: 'to',
						},
					]}
				/>
				<Tooltip title={'Estimated'}>{estimated ? '*' : ''}</Tooltip>
			</span>
			<div className="memo" style={{paddingTop: 5, cursor: 'help'}}>
				<Tooltip
					placement="bottom"
					title={counterpart.translate('htlc.preimage_hash_explanation')}
				>
					<span className="inline-block">
						{counterpart.translate('htlc.preimage_hash') +
							' (' +
							op[1].preimage_size +
							', ' +
							op[1].preimage_hash[0] +
							'): ' +
							op[1].preimage_hash[1]}
					</span>
				</Tooltip>
			</div>
		</React.Fragment>
	);
};
