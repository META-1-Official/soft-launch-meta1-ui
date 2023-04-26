import React from 'react';
import Immutable from 'immutable';
import counterpart from 'counterpart';
import classNames from 'classnames';
import Translate from 'react-translate-component';
import HelpContent from '../Utility/HelpContent';
import ChainTypes from '../Utility/ChainTypes';
import BindToChainState from '../Utility/BindToChainState';
import FormattedAsset from '../Utility/FormattedAsset';
import {EquivalentValueComponent} from '../Utility/EquivalentValueComponent';
import {ChainStore, ChainTypes as grapheneChainTypes} from 'meta1-vision-js';
import {Card} from 'antd';
import theme from 'lib/styles/themeDark';
const {operations} = grapheneChainTypes;
let ops = Object.keys(operations);
ops.push(
	'property_create_operation',
	'property_update_operation',
	'property_approve_operation',
	'property_delete_operation',
	'asset_price_publish_operation'
);

// Define groups and their corresponding operation ids
let fee_grouping = {
	general: [0, 25, 26, 27, 28, 32, 33, 37, 39, 41, 49, 50, 52],
	asset: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 43, 44, 47, 48],
	market: [1, 2, 3, 4, 45, 46],
	account: [5, 6, 7, 8, 9],
	business: [20, 21, 22, 23, 24, 29, 30, 31, 34, 35, 36],
};

const ops_type_labels = [
	{text: 'Transfer', color: '#ff0000', type: 0},
	{text: 'Order Create', color: '#6BBCD7', type: 1},
	{text: 'Order Cancel', color: '#E9C842', type: 2},
	{text: 'Fill Order', color: '#008000', type: 4},
	{text: 'Transfer', color: '#81CA80', type: 5},
	{text: 'Account Create', color: '#CCCCCC', type: 6},
	{text: 'Create Asset', color: '#ff0000', type: 10},
	{text: 'Update Asset', color: '#ddee00', type: 11},
	{text: 'Update Smart Coin', color: '#dddd11', type: 12},
	{text: 'Asset Price Publish', color: '#FF2A55', type: 58},
];

// Operations that require LTM
let ltm_required = [5, 7, 20, 21, 34];

class FeeGroup extends React.Component {
	static propTypes = {
		globalObject: ChainTypes.ChainObject.isRequired,
	};

	static defaultProps = {
		globalObject: '2.0.0',
	};

	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps) {
		return !Immutable.is(nextProps.globalObject, this.props.globalObject);
	}

	getOpColor(id) {
		var op_color = '#D99512';

		// ops_type_labels.map((op) => {
		// 	if (op.type === id) {
		// 		op_color = op.color;
		// 	}
		// });

		return op_color;
	}

	render() {
		let {globalObject, settings, opIds} = this.props;
		globalObject = globalObject.toJSON();
		const core_asset = ChainStore.getAsset('1.3.0');

		let current_fees = globalObject.parameters.current_fees;
		let network_fee = globalObject.parameters.network_percent_of_fee / 1e4;
		let scale = current_fees.scale;
		let feesRaw = current_fees.parameters;
		let preferredUnit = settings.get('fee_asset') || core_asset.get('symbol');

		let trxTypes = counterpart.translate('transaction.trxTypes');

		let fees = opIds.map((opID) => {
			let feeIdx = feesRaw.findIndex((f) => f[0] === opID);
			if (feeIdx === -1) {
				console.warn(
					'Asking for non-existing fee id %d! Check group settings in Fees.jsx',
					opID
				);
				return; // FIXME, if I ask for a fee that does not exist?
			}

			let feeStruct = feesRaw[feeIdx];

			let opId = feeStruct[0];
			let fee = feeStruct[1];

			let operation_name = ops[opId];
			let feename = trxTypes[operation_name];

			let feeRateForLTM = network_fee;
			if (opId === 10) {
				feeRateForLTM = 0.5 + 0.5 * network_fee;
			}

			let rows = [];
			let headIncluded = false;
			let labelClass = classNames('label', 'info', 'explore-fee-title-text');

			for (let key in fee) {
				let amount = (fee[key] * scale) / 1e4;
				let amountForLTM = amount * feeRateForLTM;
				let feeTypes = counterpart.translate('transaction.feeTypes');

				let assetAmount = amount ? (
					<FormattedAsset amount={amount} asset="1.3.0" />
				) : (
					feeTypes['_none']
				);
				let equivalentAmount = amount ? (
					<EquivalentValueComponent
						fromAsset="1.3.0"
						fullPrecision={true}
						amount={amount}
						toAsset={preferredUnit}
						fullDecimals={true}
					/>
				) : (
					feeTypes['_none']
				);
				let assetAmountLTM = amountForLTM ? (
					<FormattedAsset amount={amountForLTM} asset="1.3.0" />
				) : (
					feeTypes['_none']
				);
				let equivalentAmountLTM = amountForLTM ? (
					<EquivalentValueComponent
						fromAsset="1.3.0"
						fullPrecision={true}
						amount={amountForLTM}
						toAsset={preferredUnit}
						fullDecimals={true}
					/>
				) : (
					feeTypes['_none']
				);
				let title = null;

				if (!headIncluded) {
					headIncluded = true;
					title = (
						<td rowSpan="6" style={{width: '20rem'}}>
							<span
								css={(theme) => ({
									background: this.getOpColor(opId),
									border: `1px solid ${theme.colors.borderColor}`,
									borderRadius: '5px',
									padding: '4px 8px',
									color: 'white',
								})}
							>
								{feename}
							</span>
						</td>
					);
				}

				if (ltm_required.indexOf(opId) < 0) {
					let is_annual = feeTypes[key] == 'Annual Membership'; // annual membership deprecated, so not showing in the table.
					let is_ltm = feeTypes[key] == 'Lifetime Membership';

					// if (feeTypes[key] != 'Annual Membership') {
					rows.push(
						<tr key={opId.toString() + key}>
							{title}
							<td style={{display: is_annual ? 'none' : 'table-cell'}}>
								{feeTypes[key]}
							</td>
							<td
								style={{
									textAlign: 'right',
									display: is_annual ? 'none' : 'table-cell',
								}}
							>
								{assetAmount}
								{amount !== 0 && preferredUnit !== 'META1' ? (
									<span>
										&nbsp;/&nbsp;
										{equivalentAmount}
									</span>
								) : null}
							</td>
							<td
								style={{
									textAlign: 'right',
									display: is_annual ? 'none' : 'table-cell',
								}}
							>
								{feeIdx !== 8 ? assetAmountLTM : null}
								{feeIdx !== 8 && amount !== 0 && preferredUnit !== 'META1' ? (
									<span>
										&nbsp;/&nbsp;
										{equivalentAmountLTM}
									</span>
								) : null}
								{feeIdx === 8 ? 'Free of Charge' : null}
							</td>
						</tr>
					);
					// }
				} else {
					rows.push(
						<tr key={opId.toString() + key}>
							{title}
							<td>{feeTypes[key]}</td>
							<td style={{textAlign: 'right'}}>
								- <sup>*</sup>
							</td>
							<td style={{textAlign: 'right'}}>
								{assetAmountLTM}
								{amount !== 0 && preferredUnit !== 'META1' ? (
									<span>
										&nbsp;/&nbsp;
										{equivalentAmountLTM}
									</span>
								) : null}
							</td>
						</tr>
					);
				}
			}
			return <tbody key={feeIdx}>{rows}</tbody>;
		});

		return (
			<div className="asset-card">
				<Card bordered={false}>{this.props.title.toUpperCase()}</Card>
				<div style={{overflow: 'auto'}}>
					<table className="table">
						<thead>
							<tr>
								<th>
									<Translate content={'explorer.block.op'} />
								</th>
								<th>
									<Translate content={'explorer.fees.type'} />
								</th>
								<th style={{textAlign: 'right'}}>
									<Translate content={'explorer.fees.fee'} />
								</th>
								<th style={{textAlign: 'right'}}>
									<Translate content={'explorer.fees.feeltm'} />
								</th>
							</tr>
						</thead>
						{fees}
					</table>
				</div>
			</div>
		);
	}
}
FeeGroup = BindToChainState(FeeGroup);

class Fees extends React.Component {
	render() {
		let FeeGroupsTitle = counterpart.translate('transaction.feeGroups');
		let feeGroups = [];

		for (let groupName in fee_grouping) {
			let groupNameText = FeeGroupsTitle[groupName];
			let feeIds = fee_grouping[groupName];
			feeGroups.push(
				<FeeGroup
					key={groupName}
					settings={this.props.settings}
					opIds={feeIds}
					title={groupNameText}
				/>
			);
		}

		return (
			<div className="fees-tab">
				<HelpContent path={'components/Fees'} />
				<div className="fee-section-wrapper">{feeGroups}</div>
			</div>
		);
	}
}

export default Fees;
