import React from 'react';
import {Link} from 'react-router-dom';
import BlockchainActions from 'actions/BlockchainActions';
import Translate from 'react-translate-component';
import {FormattedDate} from 'react-intl';
import Operation from '../Blockchain/Operation';
import LinkToWitnessById from '../Utility/LinkToWitnessById';
import ChainTypes from '../Utility/ChainTypes';
import BindToChainState from '../Utility/BindToChainState';
import AssetWrapper from '../Utility/AssetWrapper';
import TransactionChart from './TransactionChart';
import BlocktimeChart from './BlocktimeChart';
import classNames from 'classnames';
import utils from 'common/utils';
import Immutable from 'immutable';
import TimeAgo from '../Utility/TimeAgo';
import FormattedAsset from '../Utility/FormattedAsset';
import Ps from 'perfect-scrollbar';
import TransitionWrapper from '../Utility/TransitionWrapper';
import {Row, Col, Typography} from 'antd';
import ExploreCard from 'components/ExploreCard/ExploreCard';

require('../Blockchain/json-inspector.scss');

// const logo = require('assets/asset-symbols/blockNumber.png');
const blockNumberIcon = require('assets/explorer/blockNumber.png');
const witnessIcon = require('assets/explorer/witness.png');
const committeeIcon = require('assets/explorer/committee.png');
const volumeIcon = require('assets/explorer/volume.png');

const {Text} = Typography;
class BlockTimeAgo extends React.Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.blockTime !== this.props.blockTime;
	}

	render() {
		let {blockTime} = this.props;

		// let timePassed = Date.now() - blockTime;
		let timePassed = new Date().getTime() - new Date(blockTime).getTime();

		let textClass = classNames(
			'txtlabel',
			{success: timePassed <= 6000},
			{info: timePassed > 6000 && timePassed <= 15000},
			{warning: timePassed > 15000 && timePassed <= 25000},
			{error: timePassed > 25000}
		);

		return blockTime ? (
			<div>
				<Text
					className={textClass}
					css={() => ({
						fontSize: '1.2rem',
						color: 'white',
						fontWeight: 700,
					})}
				>
					<TimeAgo time={blockTime} />
				</Text>
			</div>
		) : null;
	}
}

class Blocks extends React.Component {
	static propTypes = {
		globalObject: ChainTypes.ChainObject.isRequired,
		dynGlobalObject: ChainTypes.ChainObject.isRequired,
	};

	static defaultProps = {
		globalObject: '2.0.0',
		dynGlobalObject: '2.1.0',
		latestBlocks: {},
		assets: {},
		accounts: {},
		height: 1,
	};

	constructor(props) {
		super(props);

		this.state = {
			animateEnter: false,
			operationsHeight: null,
			blocksHeight: null,
		};

		this._updateHeight = this._updateHeight.bind(this);
	}

	_getBlock(height, maxBlock) {
		if (height) {
			height = parseInt(height, 10);
			BlockchainActions.getLatest(height, maxBlock);
		}
	}

	componentWillMount() {
		window.addEventListener('resize', this._updateHeight, {
			capture: false,
			passive: true,
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._updateHeight);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.latestBlocks.size === 0) {
			return this._getInitialBlocks();
		} else if (!this.state.animateEnter) {
			this.setState({
				animateEnter: true,
			});
		}

		let maxBlock = nextProps.dynGlobalObject.get('head_block_number');
		if (
			nextProps.latestBlocks.size >= 20 &&
			nextProps.dynGlobalObject.get('head_block_number') !==
				nextProps.latestBlocks.get(0).id
		) {
			return this._getBlock(maxBlock, maxBlock);
		}
	}

	componentDidMount() {
		this._getInitialBlocks();
		let oc = this.refs.operations;
		Ps.initialize(oc);
		let blocks = this.refs.blocks;
		Ps.initialize(blocks);
		this._updateHeight();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			!Immutable.is(nextProps.latestBlocks, this.props.latestBlocks) ||
			!utils.are_equal_shallow(nextState, this.state)
		);
	}

	componentDidUpdate() {
		this._updateHeight();
	}

	_getInitialBlocks() {
		let maxBlock = parseInt(
			this.props.dynGlobalObject.get('head_block_number'),
			10
		);
		if (maxBlock) {
			for (let i = 19; i >= 0; i--) {
				let exists = false;
				if (this.props.latestBlocks.size > 0) {
					for (let j = 0; j < this.props.latestBlocks.size; j++) {
						if (this.props.latestBlocks.get(j).id === maxBlock - i) {
							exists = true;
							break;
						}
					}
				}
				if (!exists) {
					this._getBlock(maxBlock - i, maxBlock);
				}
			}
		}
	}

	_updateHeight() {
		let containerHeight = this.refs.outerWrapper.offsetHeight;
		let operationsTextHeight = this.refs.operationsText.offsetHeight;
		let blocksTextHeight = this.refs.blocksText.offsetHeight;

		this.setState(
			{
				operationsHeight: containerHeight - operationsTextHeight,
				blocksHeight: containerHeight - blocksTextHeight,
			},
			this.psUpdate
		);
	}

	psUpdate() {
		let oc = this.refs.operations;
		Ps.update(oc);
		let blocks = this.refs.blocks;
		Ps.update(blocks);
	}

	render() {
		let {
			latestBlocks,
			latestTransactions,
			globalObject,
			dynGlobalObject,
			coreAsset,
		} = this.props;
		let {blocksHeight, operationsHeight} = this.state;
		const dynamicObject = this.props.getDynamicObject(
			coreAsset.get('dynamic_asset_data_id')
		);
		let blocks = null,
			transactions = null;
		let headBlock = null;
		let trxCount = 0,
			blockCount = latestBlocks.size,
			trxPerSec = 0,
			blockTimes = [],
			avgTime = 0;

		if (latestBlocks && latestBlocks.size >= 20) {
			let previousTime;

			let lastBlock, firstBlock;

			// Map out the block times for the latest blocks and count the number of transactions
			latestBlocks
				.filter((a, index) => {
					// Only use consecutive blocks counting back from head block
					return a.id === dynGlobalObject.get('head_block_number') - index;
				})
				.sort((a, b) => {
					return a.id - b.id;
				})
				.forEach((block, index) => {
					trxCount += block.transactions.length;
					if (index > 0) {
						blockTimes.push([
							block.id,
							(block.timestamp - previousTime) / 1000,
						]);
						lastBlock = block.timestamp;
					} else {
						firstBlock = block.timestamp;
					}
					previousTime = block.timestamp;
				});

			// Output block rows for the last 20 blocks
			blocks = latestBlocks
				.sort((a, b) => {
					return b.id - a.id;
				})
				.take(20)
				.map((block) => {
					return (
						<tr
							key={block.id}
							css={(theme) => ({
								border: `1px solid ${theme.colors.borderColor}`,
							})}
						>
							<td>
								<Link to={`/block/${block.id}`}>
									<span
										css={(theme) => ({
											color: theme.colors.primaryColor,
										})}
									>
										#{utils.format_number(block.id, 0)}{' '}
									</span>
								</Link>
							</td>
							<td>
								<FormattedDate value={block.timestamp} format="time" />
							</td>
							<td>
								<LinkToWitnessById witness={block.witness} />
							</td>
							<td>{utils.format_number(block.transactions.length, 0)}</td>
						</tr>
					);
				})
				.toArray();

			let trxIndex = 0;

			transactions = latestTransactions
				.sort((a, b) => {
					return b.block_num - a.block_num;
				})
				.take(20)
				.map((trx) => {
					let opIndex = 0;
					return trx.operations
						.map((op) => {
							if (trxIndex > 15) return null;
							return (
								<Operation
									key={trxIndex++}
									op={op}
									result={trx.operation_results[opIndex++]}
									block={trx.block_num}
									hideFee={true}
									hideOpLabel={false}
									current={'1.2.0'}
									hideDate
									hidePending
								/>
							);
						})
						.filter((a) => !!a);
				})
				.toArray();

			headBlock = latestBlocks.first().timestamp;
			avgTime = blockTimes.reduce((previous, current, idx, array) => {
				return previous + current[1] / array.length;
			}, 0);

			trxPerSec = trxCount / ((lastBlock - firstBlock) / 1000);
		}

		return (
			<div ref="outerWrapper">
				{/* First row of stats */}
				<div
					css={(theme) => ({
						backgroundColor: theme.colors.explorerBackground,
						padding: '2rem 1rem',
					})}
				>
					<Row justify="center" gutter={16}>
						<Col xs={24} sm={12} md={5} lg={6}>
							<ExploreCard
								icon={blockNumberIcon}
								textContent="explorer.blocks.current_block"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{utils.format_number(
											dynGlobalObject.get('head_block_number'),
											0
										)}
									</Text>
								</div>
							</ExploreCard>
						</Col>

						<Col xs={24} sm={12} md={5} lg={6}>
							<ExploreCard
								icon={blockNumberIcon}
								textContent="explorer.blocks.last_block"
							>
								<BlockTimeAgo blockTime={headBlock} />
							</ExploreCard>
						</Col>
						<Col xs={24} sm={12} md={5} lg={6}>
							<ExploreCard
								icon={blockNumberIcon}
								textContent="explorer.blocks.avg_conf_time"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{utils.format_number(trxPerSec, 2)}
									</Text>
								</div>
							</ExploreCard>
						</Col>
						<Col xs={24} sm={12} md={5} lg={6}>
							<ExploreCard
								icon={blockNumberIcon}
								textContent="explorer.blocks.trx_per_sec"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{utils.format_number(trxPerSec / 2, 2)}s
									</Text>
								</div>
							</ExploreCard>
						</Col>
					</Row>

					<Row justify="center" gutter={[16, 16]} style={{marginTop: '1rem'}}>
						<Col xs={24} sm={12} md={4} lg={6}>
							<ExploreCard
								icon={blockNumberIcon}
								textContent="explorer.blocks.avg_conf_time"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{utils.format_number(avgTime / 2, 2)}s
									</Text>
								</div>
							</ExploreCard>
						</Col>

						<Col xs={24} sm={12} md={4} lg={6}>
							<ExploreCard
								icon={witnessIcon}
								textContent="explorer.blocks.active_witnesses"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{globalObject.get('active_witnesses').size}
									</Text>
								</div>
							</ExploreCard>
						</Col>
						<Col xs={24} sm={12} md={4} lg={6}>
							<ExploreCard
								icon={committeeIcon}
								textContent="explorer.blocks.active_committee_members"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{globalObject.get('active_committee_members').size}
									</Text>
								</div>
							</ExploreCard>
						</Col>
						<Col xs={24} sm={12} md={4} lg={6}>
							<ExploreCard
								icon={blockNumberIcon}
								textContent="explorer.blocks.trx_per_block"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{utils.format_number(trxCount / blockCount || 0, 2)}{' '}
									</Text>
								</div>
							</ExploreCard>
						</Col>
					</Row>

					<Row justify="center" gutter={[16, 16]} style={{marginTop: '1rem'}}>
						<Col xs={24} sm={12} md={4} lg={6}>
							<ExploreCard
								icon={blockNumberIcon}
								textContent="explorer.blocks.trx_per_block"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{utils.format_number(trxCount / blockCount || 0, 2)}{' '}
									</Text>
								</div>
							</ExploreCard>
						</Col>
						<Col xs={24} sm={12} md={4} lg={6}>
							<ExploreCard
								icon={volumeIcon}
								textContent="explorer.asset.summary.current_supply"
							>
								<div>
									<Text
										css={() => ({
											fontSize: '1.2rem',
											color: 'white',
											fontWeight: 700,
										})}
									>
										{dynamicObject ? (
											<FormattedAsset
												amount={dynamicObject.get('current_supply')}
												asset={coreAsset.get('id')}
												decimalOffset={5}
											/>
										) : null}
									</Text>
								</div>
							</ExploreCard>
						</Col>
						<Col xs={24} sm={12} md={4} lg={6}>
							<ExploreCard
								icon={volumeIcon}
								textContent="explorer.blocks.block_times"
								showOtherGraph={true}
							>
								<BlocktimeChart
									blockTimes={blockTimes}
									head_block_number={dynGlobalObject.get('head_block_number')}
								/>
							</ExploreCard>
						</Col>
						<Col xs={24} sm={12} md={4} lg={6}>
							<ExploreCard
								icon={volumeIcon}
								textContent="explorer.blocks.trx_per_block"
								showOtherGraph={true}
							>
								<TransactionChart
									blocks={latestBlocks}
									head_block={dynGlobalObject.get('head_block_number')}
								/>
							</ExploreCard>
						</Col>
					</Row>
				</div>

				{/* Third row: graphs */}
				{/* <div className="align-center grid-block shrink small-vertical medium-horizontal blocks-row">
					<div className="grid-block text-center small-12 medium-3">
						<div className="grid-content no-overflow clear-fix">
							<span className="txtlabel">
								<Translate
									component="span"
									content="explorer.asset.summary.stealth_supply"
								/>
							</span>
							<h3 className="txtlabel">
								{dynamicObject ? (
									<FormattedAsset
										amount={dynamicObject.get('confidential_supply')}
										asset={coreAsset.get('id')}
										decimalOffset={5}
									/>
								) : null}
							</h3>
						</div>
					</div>
				</div> */}

				{/* Fourth row: transactions and blocks */}
				<div
					ref="transactionsBlock"
					className="grid-block no-overflow"
					css={{padding: '2rem'}}
				>
					<div className="grid-block small-12 medium-6 vertical no-overflow">
						<div
							css={{marginBottom: '3.5rem'}}
							className="grid-block vertical no-overflow generic-bordered-box"
						>
							<div ref="operationsText">
								<div className="block-content-header">
									<Translate content="account.recent" />
								</div>
								<table
									className="table fixed-height-2rem"
									css={(theme) => ({
										border: `2px solid ${theme.colors.borderColor}`,
									})}
								>
									<thead
										css={(theme) => ({
											tr: {
												backgroundColor: '#15171b',
												border: `2px solid ${theme.colors.borderColor}`,
												fontSize: '13px !important',
												padding: '15px 10px',
												textAlign: 'left',
											},
										})}
									>
										<tr>
											<th>
												<Translate content="account.votes.info" />
											</th>
										</tr>
									</thead>
								</table>
							</div>
							<div
								className="grid-block"
								style={{
									maxHeight: operationsHeight || '400px',
									overflow: 'hidden',
								}}
								ref="operations"
							>
								<table className="table fixed-height-2rem">
									<tbody>{transactions}</tbody>
								</table>
							</div>
						</div>
					</div>
					<div
						className="grid-block medium-6 show-for-medium vertical no-overflow"
						style={{paddingBottom: 0, paddingLeft: 5}}
					>
						<div className="grid-block vertical no-overflow generic-bordered-box">
							<div ref="blocksText">
								<div className="block-content-header">
									<Translate
										component="span"
										content="explorer.blocks.recent"
									/>
								</div>
							</div>
							<div
								className="grid-block vertical"
								style={{
									maxHeight: blocksHeight || '438px',
									overflow: 'hidden',
								}}
								ref="blocks"
							>
								<table className="table fixed-height-2rem">
									<thead
										css={(theme) => ({
											tr: {
												backgroundColor: '#15171b',
												border: `2px solid ${theme.colors.borderColor}`,
												borderBottom: `2px solid ${theme.colors.borderColor}`,
												padding: '15px 10px',
												textAlign: 'left',
												fontSize: '13px !important',
											},
										})}
									>
										<tr>
											<th>
												<Translate
													component="span"
													content="explorer.block.id"
												/>
											</th>
											<th>
												<Translate
													component="span"
													content="explorer.block.date"
												/>
											</th>
											<th>
												<Translate
													component="span"
													content="explorer.block.witness"
												/>
											</th>
											<th>
												<Translate
													component="span"
													content="explorer.block.count"
												/>
											</th>
										</tr>
									</thead>

									<TransitionWrapper component="tbody" transitionName="newrow">
										{blocks}
									</TransitionWrapper>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Blocks = BindToChainState(Blocks, {show_loader: true});
Blocks = AssetWrapper(Blocks, {
	propNames: ['coreAsset'],
	withDynamic: true,
});
export default Blocks;
