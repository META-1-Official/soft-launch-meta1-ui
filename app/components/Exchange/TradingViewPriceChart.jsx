import React from 'react';
const TradingView = require('../../../charting_library/charting_library.min.js');
import colors from 'assets/colors';
import {getResolutionsFromBuckets, getTVTimezone} from './tradingViewClasses';
import {Modal, Input, Table, Button} from 'antd';
import counterpart from 'counterpart';
import SettingsStore from 'stores/SettingsStore';
import SettingsActions from 'actions/SettingsActions';
import {connect} from 'alt-react';
import Translate from 'react-translate-component';
import {AiOutlineDelete} from 'react-icons/ai';

class TradingViewPriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSaveModal: false,
			showLoadModal: false,
			error: false,
		};
		this.layoutName = React.createRef();
		this.hideModal = this.hideModal.bind(this);
		this.resetError = this.resetError.bind(this);
		this.loadLastChart = this.loadLastChart.bind(this);
	}

	loadTradingView(props) {
		const {dataFeed} = props;
		let themeColors = colors[props.theme];

		if (!dataFeed) return;

		if (__DEV__)
			console.log(
				'currentResolution',
				getResolutionsFromBuckets([props.bucketSize])[0],
				'symbol',
				props.quoteSymbol + '_' + props.baseSymbol,
				'timezone:',
				getTVTimezone()
			);

		dataFeed.update({
			resolutions: props.buckets,
			ticker: props.quoteSymbol + '_' + props.baseSymbol,
			interval: getResolutionsFromBuckets([props.bucketSize])[0],
		});

		let disabled_features = [
			'symbol_info',
			'symbol_search_hot_key',
			'border_around_the_chart',
			'header_symbol_search',
			'header_compare',
			'header_saveload',
			'create_volume_indicator_by_default',
			'create_volume_indicator_by_default_once',
		];

		let enabled_features = ['hide_left_toolbar_by_default'];

		if (this.props.mobile || !this.props.chartZoom) {
			disabled_features.push('chart_scroll');
			disabled_features.push('chart_zoom');
		}

		if (this.props.mobile || !this.props.chartTools) {
			disabled_features.push('left_toolbar');
			disabled_features.push('chart_crosshair_menu');
			disabled_features.push('chart_events');
			disabled_features.push('footer_share_buttons');
			disabled_features.push('footer_screenshot');
			disabled_features.push('footer_publish_idea_button');
			disabled_features.push('caption_buttons_text_if_possible');
			disabled_features.push('line_tool_templates');
			disabled_features.push('widgetbar_tabs');
			disabled_features.push('support_manage_drawings');
			disabled_features.push('support_multicharts');
			disabled_features.push('right_bar_stays_on_scroll');
			disabled_features.push('charts_auto_save');
			disabled_features.push('edit_buttons_in_legend');
			disabled_features.push('context_menus');
			disabled_features.push('control_bar');
			disabled_features.push('header_fullscreen_button');
			disabled_features.push('header_widget');
			disabled_features.push('symbollist_context_menu');
			disabled_features.push('show_pro_features');
		} else {
			enabled_features.push('study_templates');
			enabled_features.push('keep_left_toolbar_visible_on_small_screens');
		}

		if (__DEV__) console.log('*** Load Chart ***');
		if (__DEV__) console.time('*** Chart load time: ');

		this.tvWidget = new TradingView.widget({
			fullscreen: false,
			symbol: props.quoteSymbol + '_' + props.baseSymbol,
			interval: getResolutionsFromBuckets([props.bucketSize])[0],
			library_path: `${__ELECTRON__ ? __BASE_URL__ : ''}/charting_library/`,
			datafeed: dataFeed,
			container_id: 'tv_chart',
			charts_storage_url: 'https://saveload.tradingview.com',
			charts_storage_api_version: '1.1',
			client_id: 'tradingview.com',
			user_id: 'public_user_id',
			autosize: true,
			locale: props.locale,
			timezone: getTVTimezone(),
			toolbar_bg: themeColors.bgColor,
			overrides: {
				'paneProperties.background': themeColors.bgColor,
				'paneProperties.horzGridProperties.color': themeColors.axisLineColor,
				'paneProperties.vertGridProperties.color': themeColors.axisLineColor,
				'scalesProperties.lineColor': themeColors.axisLineColor,
				'scalesProperties.textColor': themeColors.textColor,
			},
			custom_css_url: props.theme + '.css',
			enabled_features: enabled_features,
			disabled_features: disabled_features,
			debug: false,
			preset: this.props.mobile ? 'mobile' : '',
		});

		this._onWheel = this._onWheel.bind(this);
	}

	UNSAFE_componentWillReceiveProps(np) {
		if (!np.marketReady) return;
		if ((!this.props.dataFeed && np.dataFeed) || np.theme != this.props.theme) {
			loadTradingView(np);
		}
	}

	_setSymbol(ticker) {
		if (this.tvWidget) {
			this.tvWidget.chart().removeAllShapes();
			this.loadLastChart();
			this.tvWidget.setSymbol(
				ticker,
				getResolutionsFromBuckets([this.props.bucketSize])[0]
			);
		}
	}

	componentDidMount() {
		this.loadTradingView(this.props);

		// continue investigating how to disable mouse wheel, here are the containted docs
		// document.getElementById("tv_chart").children[0].contentWindow
		// document.getElementById("tv_chart").children[0].contentDocument
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.baseSymbol !== prevProps.baseSymbol ||
			this.props.quoteSymbol !== prevProps.quoteSymbol
		) {
			this.loadTradingView(this.props);
		}
	}

	componentWillUnmount() {
		this.props.dataFeed.clearSubs();
	}

	shouldComponentUpdate(np, state) {
		return (
			state.showLoadModal !== this.state.showLoadModal ||
			state.showSaveModal !== this.state.showSaveModal ||
			np.chartHeight !== this.props.chartHeight ||
			this.props.charts.size !== np.charts.size ||
			!this.tvWidget ||
			np.marketReady
		);
	}

	_onWheel() {
		console.log('Test wheel interception');
	}

	onSubmitConfirmation() {
		const {layoutName} = this;
		const error = this.props.charts.some(
			(chart) =>
				chart.key === layoutName.current.state.value &&
				chart.symbol === this.props.quoteSymbol + '_' + this.props.baseSymbol
		);
		const that = this;
		if (!error) {
			this.resetError();
			this.tvWidget.save(function (object) {
				let chart = {};
				chart.key = layoutName.current.state.value || '';
				chart.object = object;
				chart.name = layoutName.current.state.value || '';
				chart.symbol = that.props.quoteSymbol + '_' + that.props.baseSymbol;
				chart.modified = new Date().toLocaleDateString('en-US');
				SettingsActions.addChartLayout(chart);
				that.setState({showSaveModal: false}, () => {
					if (that.layoutName.current.state) {
						that.layoutName.current.state.value = null;
					}
				});
			});
		} else {
			this.setState({error});
		}
	}

	hideModal() {
		this.resetError();
		this.setState({showSaveModal: false, showLoadModal: false});
	}

	handleDelete(name) {
		SettingsActions.deleteChartLayout(name);
	}

	resetError() {
		this.setState({error: false});
	}

	loadLastChart() {
		const {charts, quoteSymbol, baseSymbol} = this.props;

		const chart = charts
			.toArray()
			.filter(
				(chart) =>
					chart.symbol === quoteSymbol + '_' + baseSymbol && chart.enabled
			);
		chart[0] && this.tvWidget.load(chart[0].object);
	}

	render() {
		const {charts, quoteSymbol, baseSymbol} = this.props;
		const {error} = this.state;
		let _error = error ? 'has-error' : '';
		let dataSource = charts
			.toArray()
			.filter((chart) => chart.symbol === quoteSymbol + '_' + baseSymbol);
		const columns = [
			{
				title: counterpart.translate('exchange.layout_name'),
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: counterpart.translate('exchange.modified'),
				dataIndex: 'modified',
				key: 'modified',
			},
			{
				title: counterpart.translate('exchange.actions'),
				dataIndex: 'actions',
				key: 'actions',
				render: (text, record) => {
					return (
						<AiOutlineDelete
							css={{width: '32px'}}
							onClick={this.handleDelete.bind(this, record.name)}
						/>
					);
				},
			},
		];

		const onRow = (record) => {
			return {
				onClick: (event) => {
					if (event.target.localName === 'td') {
						this.hideModal();
						SettingsActions.addChartLayout(record);
						this.tvWidget.load(record.object);
					} else if (event.currentTarget.parentElement.childElementCount === 1)
						this.hideModal();
				},
			};
		};

		let width = window.innerWidth;
		let wideScreen = width > 640 ? true : false;
		let exchangeBordered;
		exchangeBordered = wideScreen
			? {height: '100%', minHeight: '500px!important'}
			: {height: '100%'};

		return (
			<div
				className="small-12"
				style={{height: '100%', minHeight: '500px!important'}}
			>
				<div
					className="exchange-bordered"
					style={exchangeBordered}
					id="tv_chart"
				/>
				<Modal
					title={counterpart.translate('exchange.load_chart_layout')}
					closable={false}
					visible={this.state.showLoadModal}
					footer={[
						<Button key="cancel" onClick={this.hideModal}>
							{counterpart.translate('modal.close')}
						</Button>,
					]}
				>
					<Table
						dataSource={dataSource || []}
						columns={columns}
						onRow={onRow}
					/>
				</Modal>
				<Modal
					title={counterpart.translate('exchange.save_new_chart_layout')}
					closable={false}
					visible={this.state.showSaveModal}
					footer={[
						<Button
							key="submit"
							type="primary"
							onClick={this.onSubmitConfirmation.bind(this)}
						>
							{counterpart.translate('modal.save')}
						</Button>,
						<Button key="cancel" onClick={this.hideModal}>
							{counterpart.translate('modal.close')}
						</Button>,
					]}
				>
					<div>
						{error ? (
							<span className={_error}>
								<Translate content="exchange.chart_error" />
							</span>
						) : null}
						<span
							className={_error}
							style={{
								borderBottom: '#A09F9F 1px dotted',
							}}
						>
							<Input
								placeholder={counterpart.translate(
									'exchange.enter_chart_layout_name'
								)}
								ref={this.layoutName}
								onChange={this.resetError}
								onPressEnter={this.onSubmitConfirmation.bind(this)}
							/>
						</span>
					</div>
				</Modal>
			</div>
		);
	}
}

export default connect(TradingViewPriceChart, {
	listenTo() {
		return [SettingsStore];
	},
	getProps() {
		return {
			charts: SettingsStore.getState().chartLayouts,
		};
	},
});
