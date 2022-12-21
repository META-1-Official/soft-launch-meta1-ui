import React from 'react';
import Translate from 'react-translate-component';
import FormattedAsset from '../../Utility/FormattedAsset';
import TranslateWithLinks from '../../Utility/TranslateWithLinks';

export const WorkerCreate = ({op, fromComponent}) => {
	if (fromComponent === 'proposed_operation') {
		return (
			<span>
				<Translate component="span" content="proposal.create_worker" />
				&nbsp;
				<FormattedAsset
					style={{fontWeight: 'bold'}}
					amount={op[1].daily_pay}
					asset={process.env.META1_ASSET_ID}
				/>
			</span>
		);
	} else {
		return (
			<span>
				<TranslateWithLinks
					string="operation.worker_create"
					keys={[
						{
							type: 'account',
							value: op[1].owner,
							arg: 'account',
						},
						{
							type: 'amount',
							value: {
								amount: op[1].daily_pay,
								asset_id: process.env.META1_ASSET_ID,
							},
							arg: 'pay',
						},
					]}
					params={{
						name: op[1].name,
					}}
				/>
			</span>
		);
	}
};
