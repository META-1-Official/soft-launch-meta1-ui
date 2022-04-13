(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[663],
	{
		16358: function (e, t, r) {
			var n = r(25108);
			!(function (e) {
				'use strict';
				function t(e, r) {
					var n = o({}, e);
					for (var i in r)
						'object' != typeof e[i] || null === e[i] || Array.isArray(e[i])
							? void 0 !== r[i] && (n[i] = r[i])
							: (n[i] = t(e[i], r[i]));
					return n;
				}
				function r() {
					return '1.12 (internal id 630b704a @ 2018-06-06 02:16:11.305509)';
				}
				var o =
						Object.assign ||
						function (e) {
							for (
								var t, r = arguments, n = 1, o = arguments.length;
								n < o;
								n++
							)
								for (var i in (t = r[n]))
									Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
							return e;
						},
					i = {
						mobile: {
							disabled_features: [
								'left_toolbar',
								'header_widget',
								'timeframes_toolbar',
								'edit_buttons_in_legend',
								'context_menus',
								'control_bar',
								'border_around_the_chart',
							],
							enabled_features: [],
						},
					},
					s = {
						width: 800,
						height: 500,
						symbol: 'AA',
						interval: 'D',
						timezone: 'UTC',
						container_id: '',
						library_path: '',
						locale: 'en',
						widgetbar: {
							details: !1,
							watchlist: !1,
							watchlist_settings: {default_symbols: []},
						},
						overrides: {'mainSeriesProperties.showCountdown': !1},
						studies_overrides: {},
						brokerConfig: {configFlags: {}},
						fullscreen: !1,
						autosize: !1,
						disabled_features: [],
						enabled_features: [],
						debug: !1,
						logo: {},
						time_frames: [
							{text: '5y', resolution: 'W'},
							{text: '1y', resolution: 'W'},
							{text: '6m', resolution: '120'},
							{text: '3m', resolution: '60'},
							{text: '1m', resolution: '30'},
							{text: '5d', resolution: '5'},
							{text: '1d', resolution: '1'},
						],
						client_id: '0',
						user_id: '0',
						charts_storage_api_version: '1.0',
						favorites: {intervals: [], chartTypes: []},
					},
					a = (function () {
						function e(e) {
							if (
								((this._id =
									'tradingview_' +
									((1048576 * (1 + Math.random())) | 0)
										.toString(16)
										.substring(1)),
								(this._ready = !1),
								(this._readyHandlers = []),
								(this._onWindowResize = this._autoResizeChart.bind(this)),
								!e.datafeed)
							)
								throw new Error('Datafeed is not defined');
							if (((this._options = t(s, e)), e.preset)) {
								var r = i[e.preset];
								r
									? (void 0 !== this._options.disabled_features
											? (this._options.disabled_features =
													this._options.disabled_features.concat(
														r.disabled_features
													))
											: (this._options.disabled_features = r.disabled_features),
									  void 0 !== this._options.enabled_features
											? (this._options.enabled_features =
													this._options.enabled_features.concat(
														r.enabled_features
													))
											: (this._options.enabled_features = r.enabled_features))
									: n.warn('Unknown preset: `' + e.preset + '`');
							}
							this._create();
						}
						return (
							(e.prototype.onChartReady = function (e) {
								this._ready ? e.call(this) : this._readyHandlers.push(e);
							}),
							(e.prototype.onGrayedObjectClicked = function (e) {
								this._innerAPI().onGrayedObjectClicked(e);
							}),
							(e.prototype.onShortcut = function (e, t) {
								this._innerWindow().createShortcutAction(e, t);
							}),
							(e.prototype.subscribe = function (e, t) {
								this._innerAPI().subscribe(e, t);
							}),
							(e.prototype.unsubscribe = function (e, t) {
								this._innerAPI().unsubscribe(e, t);
							}),
							(e.prototype.chart = function (e) {
								return this._innerAPI().chart(e);
							}),
							(e.prototype.setLanguage = function (e) {
								this.remove(), (this._options.locale = e), this._create();
							}),
							(e.prototype.setSymbol = function (e, t, r) {
								this._innerAPI().changeSymbol(e, t + '', r);
							}),
							(e.prototype.remove = function () {
								window.removeEventListener('resize', this._onWindowResize),
									this._readyHandlers.splice(0, this._readyHandlers.length),
									delete window[this._id];
								var e = this._getIFrameElement();
								e.contentWindow.destroyChart(),
									e.parentNode && e.parentNode.removeChild(e);
							}),
							(e.prototype.closePopupsAndDialogs = function () {
								this._innerAPI().closePopupsAndDialogs();
							}),
							(e.prototype.selectLineTool = function (e) {
								this._innerAPI().selectLineTool(e);
							}),
							(e.prototype.selectedLineTool = function () {
								return this._innerAPI().selectedLineTool();
							}),
							(e.prototype.save = function (e) {
								this._innerAPI().saveChart(e);
							}),
							(e.prototype.load = function (e, t) {
								this._innerAPI().loadChart({json: e, extendedData: t});
							}),
							(e.prototype.getSavedCharts = function (e) {
								this._innerAPI().getSavedCharts(e);
							}),
							(e.prototype.loadChartFromServer = function (e) {
								this._innerAPI().loadChartFromServer(e);
							}),
							(e.prototype.saveChartToServer = function (e, t, r, n) {
								this._innerAPI().saveChartToServer(e, t, r, n);
							}),
							(e.prototype.removeChartFromServer = function (e, t) {
								this._innerAPI().removeChartFromServer(e, t);
							}),
							(e.prototype.onContextMenu = function (e) {
								this._innerAPI().onContextMenu(e);
							}),
							(e.prototype.createButton = function (e) {
								return this._innerWindow().createButton(e);
							}),
							(e.prototype.showNoticeDialog = function (e) {
								this._innerAPI().showNoticeDialog(e);
							}),
							(e.prototype.showConfirmDialog = function (e) {
								this._innerAPI().showConfirmDialog(e);
							}),
							(e.prototype.showLoadChartDialog = function () {
								this._innerAPI().showLoadChartDialog();
							}),
							(e.prototype.showSaveAsChartDialog = function () {
								this._innerAPI().showSaveAsChartDialog();
							}),
							(e.prototype.symbolInterval = function () {
								return this._innerAPI().getSymbolInterval();
							}),
							(e.prototype.mainSeriesPriceFormatter = function () {
								return this._innerAPI().mainSeriesPriceFormatter();
							}),
							(e.prototype.getIntervals = function () {
								return this._innerAPI().getIntervals();
							}),
							(e.prototype.getStudiesList = function () {
								return this._innerAPI().getStudiesList();
							}),
							(e.prototype.addCustomCSSFile = function (e) {
								this._innerWindow().addCustomCSSFile(e);
							}),
							(e.prototype.applyOverrides = function (e) {
								(this._options = t(this._options, {overrides: e})),
									this._innerWindow().applyOverrides(e);
							}),
							(e.prototype.applyStudiesOverrides = function (e) {
								this._innerWindow().applyStudiesOverrides(e);
							}),
							(e.prototype.watchList = function () {
								return this._innerAPI().watchlist();
							}),
							(e.prototype.activeChart = function () {
								return this._innerAPI().activeChart();
							}),
							(e.prototype.chartsCount = function () {
								return this._innerAPI().chartsCount();
							}),
							(e.prototype.layout = function () {
								return this._innerAPI().layout();
							}),
							(e.prototype.setLayout = function (e) {
								this._innerAPI().setLayout(e);
							}),
							(e.prototype._getIFrameElement = function () {
								var e = document.getElementById(this._id);
								if (null === e) throw new Error('There is no such iframe');
								return e;
							}),
							(e.prototype._innerAPI = function () {
								return this._getIFrameElement().contentWindow.tradingViewApi;
							}),
							(e.prototype._innerWindow = function () {
								return this._getIFrameElement().contentWindow;
							}),
							(e.prototype._autoResizeChart = function () {
								this._options.fullscreen &&
									(this._getIFrameElement().style.height =
										window.innerHeight + 'px');
							}),
							(e.prototype._create = function () {
								var e = this,
									t = this._render(),
									r = document.getElementById(this._options.container_id);
								if (null === r)
									throw new Error(
										'There is no such element - #' + this._options.container_id
									);
								r.innerHTML = t;
								var n = this._getIFrameElement();
								(this._options.autosize || this._options.fullscreen) &&
									((n.style.width = '100%'),
									this._options.fullscreen || (n.style.height = '100%')),
									window.addEventListener('resize', this._onWindowResize),
									this._onWindowResize();
								var o = function () {
									n.removeEventListener('load', o, !1),
										n.contentWindow.widgetReady(function () {
											e._ready = !0;
											for (var t = 0, r = e._readyHandlers; t < r.length; t++)
												r[t].call(e);
											n.contentWindow.initializationFinished();
										});
								};
								n.addEventListener('load', o, !1);
							}),
							(e.prototype._render = function () {
								var e = window;
								(e[this._id] = {
									datafeed: this._options.datafeed,
									customFormatters: this._options.customFormatters,
									brokerFactory: this._options.brokerFactory,
									overrides: this._options.overrides,
									studiesOverrides: this._options.studies_overrides,
									disabledFeatures: this._options.disabled_features,
									enabledFeatures: this._options.enabled_features,
									brokerConfig: this._options.brokerConfig,
									restConfig: this._options.restConfig,
									favorites: this._options.favorites,
									logo: this._options.logo,
									numeric_formatting: this._options.numeric_formatting,
									rss_news_feed: this._options.rss_news_feed,
									newsProvider: this._options.news_provider,
									loadLastChart: this._options.load_last_chart,
									saveLoadAdapter: this._options.save_load_adapter,
									loading_screen: this._options.loading_screen,
									settingsAdapter: this._options.settings_adapter,
								}),
									this._options.saved_data &&
										(e[this._id].chartContent = {
											json: this._options.saved_data,
										});
								var t =
									(this._options.library_path || '') +
									'static/tv-chart.630b704a2b9d0eaf1593.html#localserver=1&symbol=' +
									encodeURIComponent(this._options.symbol) +
									'&interval=' +
									encodeURIComponent(this._options.interval) +
									(this._options.timeframe
										? '&timeframe=' +
										  encodeURIComponent(this._options.timeframe)
										: '') +
									(this._options.toolbar_bg
										? '&toolbarbg=' + this._options.toolbar_bg.replace('#', '')
										: '') +
									(this._options.studies_access
										? '&studiesAccess=' +
										  encodeURIComponent(
												JSON.stringify(this._options.studies_access)
										  )
										: '') +
									'&widgetbar=' +
									encodeURIComponent(JSON.stringify(this._options.widgetbar)) +
									(this._options.drawings_access
										? '&drawingsAccess=' +
										  encodeURIComponent(
												JSON.stringify(this._options.drawings_access)
										  )
										: '') +
									'&timeFrames=' +
									encodeURIComponent(
										JSON.stringify(this._options.time_frames)
									) +
									'&locale=' +
									encodeURIComponent(this._options.locale) +
									'&uid=' +
									encodeURIComponent(this._id) +
									'&clientId=' +
									encodeURIComponent(String(this._options.client_id)) +
									'&userId=' +
									encodeURIComponent(String(this._options.user_id)) +
									(this._options.charts_storage_url
										? '&chartsStorageUrl=' +
										  encodeURIComponent(this._options.charts_storage_url)
										: '') +
									(this._options.charts_storage_api_version
										? '&chartsStorageVer=' +
										  encodeURIComponent(
												this._options.charts_storage_api_version
										  )
										: '') +
									(this._options.indicators_file_name
										? '&indicatorsFile=' +
										  encodeURIComponent(this._options.indicators_file_name)
										: '') +
									(this._options.custom_css_url
										? '&customCSS=' +
										  encodeURIComponent(this._options.custom_css_url)
										: '') +
									(this._options.auto_save_delay
										? '&autoSaveDelay=' +
										  encodeURIComponent(String(this._options.auto_save_delay))
										: '') +
									'&debug=' +
									this._options.debug +
									(this._options.snapshot_url
										? '&snapshotUrl=' +
										  encodeURIComponent(this._options.snapshot_url)
										: '') +
									(this._options.timezone
										? '&timezone=' + encodeURIComponent(this._options.timezone)
										: '') +
									(this._options.study_count_limit
										? '&studyCountLimit=' +
										  encodeURIComponent(
												String(this._options.study_count_limit)
										  )
										: '') +
									(this._options.symbol_search_request_delay
										? '&ssreqdelay=' +
										  encodeURIComponent(
												String(this._options.symbol_search_request_delay)
										  )
										: '');
								return (
									'<iframe id="' +
									this._id +
									'" name="' +
									this._id +
									'"  src="' +
									t +
									'"' +
									(this._options.autosize || this._options.fullscreen
										? ''
										: ' width="' +
										  this._options.width +
										  '" height="' +
										  this._options.height +
										  '"') +
									' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'
								);
							}),
							e
						);
					})(),
					l = a;
				(window.TradingView = window.TradingView || {}),
					(window.TradingView.version = r),
					(e.version = r),
					(e.onready = function (e) {
						window.addEventListener('DOMContentLoaded', e, !1);
					}),
					(e.widget = l),
					Object.defineProperty(e, '__esModule', {value: !0});
			})(t);
		},
		34106: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, {default: () => _}), r(67294);
			var n = r(26170),
				o = r(47428),
				i = r(71230),
				s = r(15746),
				a = r(38272),
				l = r(51890),
				c = r(54458),
				u = r(98063),
				d = r(5675),
				p = r(34601),
				h = r(35944),
				f = n.Z.Text,
				m = o.Z.TabPane,
				b = {name: '19sewir', styles: 'padding:1.4rem 1rem'},
				y = {
					name: 'fou5a6',
					styles: '.ant-tabs-nav-wrap{background-color:#15171b;}',
				},
				g = {name: '1a2afmv', styles: 'margin-left:10px'},
				v = {name: '1htmj9j', styles: 'padding-left:1rem'},
				x = {name: '1azakc', styles: 'text-align:center'};
			const _ = function (e) {
				var t = e.history,
					r = (0, d.Xu)(),
					n = function () {
						t.push('asset-explorer-details');
					};
				return (0, h.jsxs)('div', {
					children: [
						(0, h.jsx)(u.Z, {
							title: 'Banking Assets',
							level: 3,
							showDivider: !0,
						}),
						(0, h.jsxs)('div', {
							css: function (e) {
								return {
									margin: '2rem',
									border: '1px solid '.concat(e.colors.borderColor),
								};
							},
							children: [
								(0, h.jsxs)(i.Z, {
									align: 'middle',
									gutter: [16, 16],
									css: b,
									children: [
										(0, h.jsx)(s.Z, {
											xs: 4,
											sm: 3,
											children: (0, h.jsx)('img', {src: r}),
										}),
										(0, h.jsxs)(s.Z, {
											xs: 20,
											sm: 19,
											children: [
												(0, h.jsx)('div', {
													css: function (e) {
														return {marginBottom: '10px'};
													},
													children: (0, h.jsxs)(f, {
														css: function (e) {
															return {
																color: e.colors.helpTextColor,
																fontSize: '20px',
																paddingBottom: '10px',
																fontFamily: 'Poppins',
															};
														},
														children: [
															'Explore assets assigned to META1 coin on the META blockchain',
															' ',
														],
													}),
												}),
												(0, h.jsx)('div', {
													css: function (e) {
														return {marginBottom: '10px'};
													},
													children: (0, h.jsx)(f, {
														css: function (e) {
															return {
																color: e.colors.themeOpositeColor,
																fontSize: '16px',
																fontFamily: 'Poppins',
															};
														},
														children: 'META1 Coin Current Asset Value: $99.74',
													}),
												}),
												(0, h.jsx)('div', {
													css: function (e) {
														return {marginBottom: '10px'};
													},
													children: (0, h.jsx)(f, {
														css: function (e) {
															return {
																color: e.colors.helpTextColor,
																fontSize: '14px',
																paddingBottom: '10px',
																fontFamily: 'Poppins',
															};
														},
														children:
															'Asset Assignment statistics, history & data',
													}),
												}),
											],
										}),
									],
								}),
								(0, h.jsx)('div', {
									css: function () {
										return {padding: '10px'};
									},
									children: (0, h.jsxs)(o.Z, {
										defaultActiveKey: '1',
										type: 'card',
										css: y,
										children: [
											(0, h.jsx)(
												m,
												{
													tab: 'Approved',
													children: (0, h.jsx)(a.ZP, {
														itemLayout: 'horizontal',
														dataSource: [
															{
																description:
																	'BEGINNING BALANCE GOLD RESERVE ASSIGNMENT OF $8,888,888,888.00 WITH SUPPORTING BONDS OF EQUAL VALUE INSURING THE PRINCIPAL GOLD RESERVES',
																descriptionAmount: '$8,888,888,888',
																status: 'Approved',
																percent: 100,
															},
															{
																description:
																	'GOLD RESERVE ASSET ASSIGNMENT OF $500,000,000.00 WITH SUPPORTING BONDS OF EQUAL VALUE INSURING THE PRINCIPAL GOLD RESERVES',
																descriptionAmount: '$8,888,888,888',
																status: 'Approved',
																percent: 100,
															},
															{
																description:
																	'GOLD RESERVE ASSET ASSIGNMENT OF $5,600,000,000 WITH SUPPORTING BONDS OF EQUAL VALUE INSURING THE PRINCIPAL GOLD RESERVES',
																descriptionAmount: '$5,600,000,000',
																status: 'Approved',
																percent: 71.8,
															},
														],
														renderItem: function (e) {
															var t = e.description,
																r = e.descriptionAmount,
																o = e.status,
																u = e.percent;
															return (0, h.jsx)(a.ZP.Item, {
																children: (0, h.jsx)(a.ZP.Item.Meta, {
																	avatar: (0, h.jsx)(l.C, {
																		src: (0, d.V7)(),
																		size: {
																			xs: 24,
																			sm: 32,
																			md: 40,
																			lg: 54,
																			xl: 60,
																			xxl: 80,
																		},
																		css: g,
																	}),
																	description: (0, h.jsxs)(i.Z, {
																		children: [
																			(0, h.jsxs)(s.Z, {
																				xs: 24,
																				sm: 12,
																				css: v,
																				children: [
																					(0, h.jsx)(f, {
																						onClick: n,
																						css: function (e) {
																							return {
																								color:
																									e.colors.descriptionTextColor,
																								fontSize: '14px',
																								paddingBottom: '10px',
																								fontFamily: 'Poppins',
																								cursor: 'pointer',
																							};
																						},
																						children: t,
																					}),
																					(0, h.jsx)('br', {}),
																					(0, h.jsx)(f, {
																						css: function (e) {
																							return {
																								color: e.colors.primaryColor,
																								fontWeight: 'bold',
																							};
																						},
																						children: r,
																					}),
																				],
																			}),
																			(0, h.jsx)(s.Z, {
																				xs: 24,
																				sm: 6,
																				css: x,
																				children: (0, h.jsx)(f, {
																					css: function (e) {
																						return {
																							color:
																								e.colors
																									.bankingAssetsStatusColor,
																							fontSize: '14px',
																							paddingBottom: '10px',
																							fontFamily: 'Poppins',
																						};
																					},
																					children: o,
																				}),
																			}),
																			(0, h.jsxs)(s.Z, {
																				xs: 24,
																				sm: 6,
																				children: [
																					(0, h.jsxs)(f, {
																						css: function (e) {
																							return {
																								color:
																									e.colors.themeOpositeColor,
																								float: 'right',
																							};
																						},
																						children: [u, '%'],
																					}),
																					(0, h.jsx)(c.Z, {
																						percent: u,
																						strokeColor:
																							p.Z.colors
																								.bankingAssetsStatusColor,
																						showInfo: !1,
																						trailColor: p.Z.colors.borderColor,
																					}),
																				],
																			}),
																		],
																	}),
																}),
															});
														},
													}),
												},
												'1'
											),
											(0, h.jsx)(
												m,
												{
													tab: 'Cancelled',
													children:
														'No backed assets found with required filter.',
												},
												'2'
											),
											(0, h.jsxs)(
												m,
												{
													tab: 'Pending',
													children: [
														'No backed assets found with required filter.',
														' ',
													],
												},
												'3'
											),
										],
									}),
								}),
							],
						}),
					],
				});
			};
		},
		41158: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, {default: () => ps});
			var n = r(67294),
				o = r(15644),
				i = r(37983),
				s = r(96520),
				a = r(12191),
				l = r(18645),
				c = r(72277),
				u = r(18825),
				d = r(52233),
				p = r(47428),
				h = r(38648),
				f = r(27279),
				m = r(61580),
				b = r(94184),
				y = r.n(b),
				g = r(112),
				v = r.n(g),
				x = (r(34342), r(99111)),
				_ = r(30381),
				j = r.n(_),
				k = r(95891),
				S = r.n(k),
				w = r(45697),
				A = r.n(w),
				C = r(60521),
				O = r(17772),
				P = r(87718),
				T = r(91654),
				N = r(86035),
				Z = r(70534),
				R = r(40840),
				B = r(58074),
				F = r.n(B),
				M = r(54115),
				E = r(8564),
				I = r(79876),
				q = r(35944);
			function L(e) {
				return (
					(L =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					L(e)
				);
			}
			function D(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function V(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function z(e, t) {
				return (
					(z =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					z(e, t)
				);
			}
			function H(e, t) {
				if (t && ('object' === L(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function U(e) {
				return (
					(U = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					U(e)
				);
			}
			const W = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && z(e, t);
				})(s, e);
				var t,
					r,
					n,
					o,
					i =
						((n = s),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = U(n);
							if (o) {
								var r = U(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return H(this, e);
						});
				function s() {
					return D(this, s), i.apply(this, arguments);
				}
				return (
					(t = s),
					(r = [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.price,
									r = e.preFormattedPrice,
									n = e.quote,
									o = e.base;
								if (!t && !r) return null;
								var i = r || R.Z.price_to_text(t, n, o);
								return i.full >= 1
									? (0, q.jsxs)('span', {
											children: [
												'  ',
												(0, q.jsxs)('span', {
													className: 'price-integer',
													children: [i.int, '.'],
												}),
												i.dec
													? (0, q.jsx)('span', {
															className: 'price-integer',
															children: i.dec,
													  })
													: null,
												i.trailing
													? (0, q.jsx)('span', {
															className: 'price-decimal',
															children: i.trailing,
													  })
													: null,
											],
									  })
									: i.full >= 0.1
									? (0, q.jsxs)('span', {
											children: [
												'  ',
												(0, q.jsxs)('span', {
													className: 'price-decimal',
													children: [i.int, '.'],
												}),
												i.dec
													? (0, q.jsx)('span', {
															className: 'price-integer',
															children: i.dec,
													  })
													: null,
												i.trailing
													? (0, q.jsx)('span', {
															className: 'price-decimal',
															children: i.trailing,
													  })
													: null,
											],
									  })
									: (0, q.jsxs)('span', {
											children: [
												'  ',
												(0, q.jsxs)('span', {
													className: 'price-decimal',
													children: [i.int, '.'],
												}),
												i.dec
													? (0, q.jsx)('span', {
															className: 'price-decimal',
															children: i.dec,
													  })
													: null,
												i.trailing
													? (0, q.jsx)('span', {
															className: 'price-integer',
															children: i.trailing,
													  })
													: null,
											],
									  });
							},
						},
					]) && V(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(n.Component);
			var G = r(12615),
				Q = r(56004),
				K = r(68588),
				Y = r(41185),
				J = r(92224),
				$ = r(42239),
				X = r(71577),
				ee = r(96168);
			function te(e) {
				return (
					(te =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					te(e)
				);
			}
			function re(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function ne(e, t) {
				return (
					(ne =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ne(e, t)
				);
			}
			function oe(e, t) {
				if (t && ('object' === te(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return ie(e);
			}
			function ie(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function se(e) {
				return (
					(se = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					se(e)
				);
			}
			function ae(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			var le = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && ne(e, t);
				})(a, e);
				var t,
					r,
					n,
					o,
					s =
						((n = a),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = se(n);
							if (o) {
								var r = se(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return oe(this, e);
						});
				function a() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						ae(ie((e = s.call(this))), 'getDatePickerRef', function (t) {
							e.datePricker = t;
						}),
						ae(ie(e), 'handleQuickDepositVisibleChange', function (t) {
							e.setState({isQuickDepositVisible: t}),
								t &&
									setTimeout(function () {
										ee.Z.rebuild();
									}, 20);
						}),
						ae(ie(e), 'onExpirationSelectChange', function (t) {
							'SPECIFIC' === t.target.value
								? e.datePricker.picker.handleOpenChange(!0)
								: e.datePricker.picker.handleOpenChange(!1),
								e.props.onExpirationTypeChange(t);
						}),
						ae(ie(e), 'onExpirationSelectClick', function (t) {
							'SPECIFIC' === t.target.value &&
								(e.firstClick && (e.secondClick = !0),
								(e.firstClick = !0),
								e.secondClick &&
									(e.datePricker.picker.handleOpenChange(!0),
									(e.firstClick = !1),
									(e.secondClick = !1)));
						}),
						ae(ie(e), 'onExpirationSelectBlur', function () {
							(e.firstClick = !1), (e.secondClick = !1);
						}),
						(e.state = {forceReRender: !1, isSettleModalVisible: !1}),
						(e.showSettleModal = e.showSettleModal.bind(ie(e))),
						(e.hideSettleModal = e.hideSettleModal.bind(ie(e))),
						e
					);
				}
				return (
					(t = a),
					(r = [
						{
							key: '_forceRender',
							value: function (e) {
								this.state.forceReRender && this.setState({forceReRender: !1}),
									this.props.parentWidth !== e.parentWidth &&
										this.setState({forceReRender: !0});
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									this._forceRender(e, t),
									t.isSettleModalVisible !== this.state.isSettleModalVisible ||
										e.amount !== this.props.amount ||
										e.onBorrow !== this.props.onBorrow ||
										e.total !== this.props.total ||
										e.currentPrice !== this.props.currentPrice ||
										e.price !== this.props.price ||
										e.balance !== this.props.balance ||
										e.account !== this.props.account ||
										e.className !== this.props.className ||
										(!(!e.fee || !this.props.fee) &&
											e.fee.ne(this.props.fee)) ||
										e.isPredictionMarket !== this.props.isPredictionMarket ||
										e.feeAsset !== this.props.feeAsset ||
										e.isOpen !== this.props.isOpen ||
										e.hasFeeBalance !== this.props.hasFeeBalance ||
										e.expirationType !== this.props.expirationType ||
										e.expirationCustomTime !==
											this.props.expirationCustomTime ||
										e.parentWidth !== this.props.parentWidth ||
										t.forceReRender !== this.state.forceReRender ||
										e.singleColumnOrderForm !==
											this.props.singleColumnOrderForm ||
										e.hideFunctionButtons !== this.props.hideFunctionButtons ||
										t.isQuickDepositVisible !==
											this.state.isQuickDepositVisible ||
										e.base !== this.props.base ||
										e.quote !== this.props.quote
								);
							},
						},
						{
							key: 'showSettleModal',
							value: function () {
								this.setState({isSettleModalVisible: !0});
							},
						},
						{
							key: 'hideSettleModal',
							value: function () {
								this.setState({isSettleModalVisible: !1});
							},
						},
						{
							key: '_addBalance',
							value: function (e) {
								'bid' === this.props.type
									? this.props.totalChange({
											target: {value: e.getAmount({real: !0}).toString()},
									  })
									: this.props.amountChange({
											target: {value: e.getAmount({real: !0}).toString()},
									  });
							},
						},
						{
							key: '_setPrice',
							value: function (e) {
								this.props.priceChange({target: {value: e.toString()}});
							},
						},
						{
							key: 'onDeposit',
							value: function () {
								this.setState({isQuickDepositVisible: !1}),
									this.props.onDeposit();
							},
						},
						{
							key: 'onBuy',
							value: function () {
								this.setState({isQuickDepositVisible: !1}), this.props.onBuy();
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t,
									r,
									n = this,
									o = this.props,
									s = o.type,
									a = o.quote,
									l = o.base,
									c = o.amountChange,
									u = o.fee,
									d = o.isPredictionMarket,
									p = o.priceChange,
									h = o.onSubmit,
									f = o.balance,
									b = o.totalChange,
									g = o.balancePrecision,
									x = o.currentPrice,
									_ = o.currentPriceObject,
									k = o.feeAsset,
									S = o.feeAssets,
									w = o.hasFeeBalance,
									A = o.hideHeader,
									C = o.verticalOrderForm,
									O = this.props.expirationCustomTime,
									T = !!(
										(this.refs.order_form
											? this.refs.order_form.clientWidth
											: 0) < 450 || this.props.singleColumnOrderForm
									);
								this.props.amount && (e = this.props.amount),
									this.props.price && (t = this.props.price),
									this.props.total && (r = this.props.total);
								var Z = new N.xR({
										amount: f ? f.get('balance') : 0,
										precision: g,
										asset_id: this.props.balanceId,
									}),
									B = new N.xR({
										amount: l.getIn(['options', 'max_market_fee']),
										asset_id: l.get('asset_id'),
										precision: l.get('precision'),
									}),
									E = new N.xR({
										amount: a.getIn(['options', 'max_market_fee']),
										asset_id: a.get('asset_id'),
										precision: a.get('precision'),
									}),
									I = l.getIn(['options', 'market_fee_percent']) / 100 + '%',
									L = a.getIn(['options', 'market_fee_percent']) / 100 + '%',
									D = e
										? Math.min(
												E.getAmount({real: !0}),
												(e * a.getIn(['options', 'market_fee_percent'])) / 1e4
										  ).toFixed(E.precision)
										: 0,
									V = e
										? Math.min(
												B.getAmount({real: !0}),
												(r * l.getIn(['options', 'market_fee_percent'])) / 1e4
										  ).toFixed(B.precision)
										: 0,
									z = P.Z.getFlagBooleans(
										l.getIn(['options', 'flags']),
										l.has('bitasset_data_id')
									),
									H = P.Z.getFlagBooleans(
										a.getIn(['options', 'flags']),
										a.has('bitasset_data_id')
									),
									U = R.Z.replaceName(this.props.base),
									ee = U.name,
									te = U.prefix,
									re = z.charge_market_fee
										? C
											? (0, q.jsx)(m.Z, {
													title: v().translate('tooltip.market_fee', {
														percent: I,
														asset: (te || '') + ee,
													}),
													children: (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														children: [
															(0, q.jsxs)('div', {
																className: 'small-12 buy-sell-label',
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'explorer.asset.summary.market_fee',
																	}),
																	',',
																	' ',
																	I,
																],
															}),
															(0, q.jsx)('div', {
																className: 'inputAddon small-12',
																children: (0, q.jsx)(Q.Z, {
																	placeholder: '0.0',
																	id: 'baseMarketFee',
																	defaultValue: V,
																	value: V,
																	addonAfter: (0, q.jsx)('span', {
																		children: (0, q.jsx)(G.Z, {
																			noTip: !0,
																			name: l.get('symbol'),
																		}),
																	}),
																}),
															}),
														],
													}),
											  })
											: T
											? (0, q.jsx)(m.Z, {
													title: v().translate('tooltip.market_fee', {
														percent: I,
														asset: (te || '') + ee,
													}),
													children: (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														children: [
															(0, q.jsxs)('div', {
																className: 'small-3 buy-sell-label',
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'explorer.asset.summary.market_fee',
																	}),
																	',',
																	' ',
																	I,
																],
															}),
															(0, q.jsx)('div', {
																className: 'inputAddon small-9',
																children: (0, q.jsx)(Q.Z, {
																	placeholder: '0.0',
																	id: 'baseMarketFee',
																	defaultValue: V,
																	value: V,
																	addonAfter: (0, q.jsx)('span', {
																		children: (0, q.jsx)(G.Z, {
																			noTip: !0,
																			name: l.get('symbol'),
																		}),
																	}),
																}),
															}),
														],
													}),
											  })
											: (0, q.jsx)(m.Z, {
													title: v().translate('tooltip.market_fee', {
														percent: I,
														asset: (te || '') + ee,
													}),
													children: (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														children: [
															(0, q.jsxs)('div', {
																className: 'small-12 buy-sell-label',
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'explorer.asset.summary.market_fee',
																	}),
																	',',
																	' ',
																	I,
																],
															}),
															(0, q.jsx)('div', {
																className: 'inputAddon small-12',
																children: (0, q.jsx)(Q.Z, {
																	placeholder: '0.0',
																	id: 'baseMarketFee',
																	defaultValue: V,
																	value: V,
																	addonAfter: (0, q.jsx)('span', {
																		children: (0, q.jsx)(G.Z, {
																			noTip: !0,
																			name: l.get('symbol'),
																		}),
																	}),
																}),
															}),
														],
													}),
											  })
										: null,
									ne = R.Z.replaceName(this.props.quote),
									oe = ne.name,
									ie = ne.prefix,
									se = H.charge_market_fee
										? C
											? (0, q.jsx)(m.Z, {
													title: v().translate('tooltip.market_fee', {
														percent: L,
														asset: (ie || '') + oe,
													}),
													children: (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														children: [
															(0, q.jsxs)('div', {
																className: 'small-12 buy-sell-label',
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'explorer.asset.summary.market_fee',
																	}),
																	',',
																	' ',
																	L,
																],
															}),
															(0, q.jsx)('div', {
																className: 'inputAddon small-12',
																children: (0, q.jsx)(Q.Z, {
																	placeholder: '0.0',
																	id: 'quoteMarketFee',
																	defaultValue: D,
																	value: D,
																	addonAfter: (0, q.jsx)('span', {
																		children: (0, q.jsx)(G.Z, {
																			style: {width: 100},
																			noTip: !0,
																			name: a.get('symbol'),
																		}),
																	}),
																}),
															}),
														],
													}),
											  })
											: T
											? (0, q.jsx)(m.Z, {
													title: v().translate('tooltip.market_fee', {
														percent: L,
														asset: (ie || '') + oe,
													}),
													children: (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														children: [
															(0, q.jsxs)('div', {
																className: 'small-3 buy-sell-label',
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'explorer.asset.summary.market_fee',
																	}),
																	',',
																	' ',
																	L,
																],
															}),
															(0, q.jsx)('div', {
																className: 'inputAddon small-9',
																children: (0, q.jsx)(Q.Z, {
																	placeholder: '0.0',
																	id: 'quoteMarketFee',
																	defaultValue: D,
																	value: D,
																	addonAfter: (0, q.jsx)('span', {
																		children: (0, q.jsx)(G.Z, {
																			style: {width: 100},
																			noTip: !0,
																			name: a.get('symbol'),
																		}),
																	}),
																}),
															}),
														],
													}),
											  })
											: (0, q.jsx)(m.Z, {
													title: v().translate('tooltip.market_fee', {
														percent: L,
														asset: (ie || '') + oe,
													}),
													children: (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														children: [
															(0, q.jsxs)('div', {
																className: 'small-12 buy-sell-label',
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'explorer.asset.summary.market_fee',
																	}),
																	',',
																	' ',
																	L,
																],
															}),
															(0, q.jsx)('div', {
																className: 'inputAddon small-12',
																children: (0, q.jsx)(Q.Z, {
																	placeholder: '0.0',
																	id: 'quoteMarketFee',
																	defaultValue: D,
																	value: D,
																	addonAfter: (0, q.jsx)('span', {
																		children: (0, q.jsx)(G.Z, {
																			style: {width: 100},
																			noTip: !0,
																			name: a.get('symbol'),
																		}),
																	}),
																}),
															}),
														],
													}),
											  })
										: null,
									ae = C
										? null
										: (0, q.jsxs)('div', {
												style: {visibility: 'hidden'},
												className: 'grid-block no-overflow wrap shrink',
												children: [
													(0, q.jsx)('div', {
														className: 'small-3 buy-sell-label',
														children: (0, q.jsx)(F(), {
															content: 'explorer.asset.summary.market_fee',
														}),
													}),
													(0, q.jsx)('div', {
														className: 'inputAddon small-9',
														children: (0, q.jsx)(Q.Z, {
															placeholder: '0.0',
															id: 'emptyPlaceholder',
															defaultValue: '0',
															addonAfter: (0, q.jsx)('span', {
																children: (0, q.jsx)(G.Z, {
																	style: {width: 100},
																	noTip: !0,
																	name: a.get('symbol'),
																}),
															}),
														}),
													}),
												],
										  }),
									le = 'bid' === s,
									ce = le && se ? se : !le && re ? re : se || re ? ae : null,
									ue = le
										? Z.getAmount({real: !0}) >= parseFloat(r)
										: Z.getAmount({real: !0}) >= parseFloat(e),
									de = le
										? v().translate('exchange.buy')
										: v().translate('exchange.sell'),
									pe = !(d || (Z.getAmount() > 0 && ue)),
									he = !(t > 0),
									fe = !(e > 0),
									me = pe || he || fe,
									be = y()(s, {disabled: me}),
									ye = le ? l.get('symbol') : a.get('symbol'),
									ge = he
										? v().translate('exchange.invalid_price')
										: fe
										? v().translate('exchange.invalid_amount')
										: pe
										? v().translate('exchange.no_balance')
										: null;
								S[1] &&
									'1.3.0' ===
										S[1].getIn([
											'options',
											'core_exchange_rate',
											'quote',
											'asset_id',
										]) &&
									'1.3.0' ===
										S[1].getIn([
											'options',
											'core_exchange_rate',
											'base',
											'asset_id',
										]) &&
									((k = S[0]), S.splice(1, 1));
								var ve,
									xe,
									_e = 0,
									je = S.map(function (e) {
										var t = R.Z.replaceName(e),
											r = t.name,
											n = t.prefix;
										return (0,
										q.jsxs)($.Z.Option, {value: _e++, children: [n, r]}, e.get('id'));
									});
								(ve =
									k.get('symbol') === ye
										? Z.clone(Z.getAmount() - u.getAmount())
										: Z),
									le
										? v().translate('walkthrough.buy_form')
										: v().translate('walkthrough.sell_form'),
									'SPECIFIC' !== this.props.expirationType &&
										(xe =
											this.props.expirations[this.props.expirationType].get());
								var ke,
									Se = Object.keys(this.props.expirations).map(function (e) {
										return (0,
										q.jsx)('option', {value: e, children: 'SPECIFIC' === e && 'Specific' !== O ? j()(O).format('Do MMM YYYY hh:mm A') : n.props.expirations[e].title}, e);
									}),
									we = 'small-12';
								ke = C
									? (0, q.jsxs)('div', {
											className: we,
											children: [
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)(F(), {
															className: 'small-12 buy-sell-label',
															content: 'exchange.price',
														}),
														(0, q.jsx)('div', {
															className: 'inputAddon small-12',
															children: (0, q.jsx)(Q.Z, {
																id: ''.concat(s, 'Price'),
																value: t,
																onChange: p,
																autoComplete: 'off',
																placeholder: '0.0',
																addonAfter: (0, q.jsxs)('span', {
																	children: [
																		(0, q.jsx)(G.Z, {
																			dataPlace: 'right',
																			name: l.get('symbol'),
																		}),
																		' / ',
																		(0, q.jsx)(G.Z, {
																			dataPlace: 'right',
																			name: a.get('symbol'),
																		}),
																	],
																}),
															}),
														}),
													],
												}),
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)(F(), {
															className: 'small-12 buy-sell-label',
															content: 'transfer.amount',
														}),
														(0, q.jsx)('div', {
															className: 'inputAddon small-12',
															children: (0, q.jsx)(Q.Z, {
																id: ''.concat(s, 'Amount'),
																value: e,
																onChange: c,
																autoComplete: 'off',
																placeholder: '0.0',
																addonAfter: (0, q.jsx)('span', {
																	children: (0, q.jsx)(G.Z, {
																		dataPlace: 'right',
																		name: a.get('symbol'),
																	}),
																}),
															}),
														}),
													],
												}),
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)(F(), {
															className: 'small-12 buy-sell-label',
															content: 'exchange.total',
														}),
														(0, q.jsx)('div', {
															className: 'inputAddon small-12',
															children: (0, q.jsx)(Q.Z, {
																id: ''.concat(s, 'Total'),
																value: r,
																onChange: b,
																autoComplete: 'off',
																placeholder: '0.0',
																addonAfter: (0, q.jsx)('span', {
																	children: (0, q.jsx)(G.Z, {
																		dataPlace: 'right',
																		name: l.get('symbol'),
																	}),
																}),
															}),
														}),
													],
												}),
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)(F(), {
															className: 'small-12 buy-sell-label',
															content: 'transfer.fee',
														}),
														(0, q.jsx)('div', {
															className: 'inputAddon small-12',
															children: (0, q.jsx)(Q.Z, {
																id: ''.concat(s, 'Fee'),
																placeholder: '0.0',
																defaultValue: w
																	? u.getAmount({real: !0})
																	: v().translate(
																			'transfer.errors.insufficient'
																	  ),
																disabled: !0,
																addonAfter: (0, q.jsx)($.Z, {
																	style: {width: 100},
																	disabled: 1 === S.length,
																	defaultValue: S.indexOf(this.props.feeAsset),
																	onChange: this.props.onChangeFeeAsset,
																	children: je,
																}),
															}),
														}),
													],
												}),
												ce,
											],
									  })
									: T
									? (0, q.jsxs)('div', {
											className: we,
											children: [
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)(F(), {
															className: 'small-3 buy-sell-label',
															content: 'exchange.price',
														}),
														(0, q.jsx)('div', {
															className: 'inputAddon small-9',
															children: (0, q.jsx)(Q.Z, {
																id: ''.concat(s, 'Price'),
																value: t,
																onChange: p,
																autoComplete: 'off',
																placeholder: '0.0',
																addonAfter: (0, q.jsxs)('span', {
																	children: [
																		(0, q.jsx)(G.Z, {
																			dataPlace: 'right',
																			name: l.get('symbol'),
																		}),
																		' / ',
																		(0, q.jsx)(G.Z, {
																			dataPlace: 'right',
																			name: a.get('symbol'),
																		}),
																	],
																}),
															}),
														}),
													],
												}),
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)(F(), {
															className: 'small-3 buy-sell-label',
															content: 'transfer.amount',
														}),
														(0, q.jsx)('div', {
															className: 'inputAddon small-9',
															children: (0, q.jsx)(Q.Z, {
																id: ''.concat(s, 'Amount'),
																value: e,
																onChange: c,
																autoComplete: 'off',
																placeholder: '0.0',
																addonAfter: (0, q.jsx)('span', {
																	children: (0, q.jsx)(G.Z, {
																		dataPlace: 'right',
																		name: a.get('symbol'),
																	}),
																}),
															}),
														}),
													],
												}),
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)(F(), {
															className: 'small-3 buy-sell-label',
															content: 'exchange.total',
														}),
														(0, q.jsx)('div', {
															className: 'inputAddon small-9',
															children: (0, q.jsx)(Q.Z, {
																id: ''.concat(s, 'Total'),
																value: r,
																onChange: b,
																autoComplete: 'off',
																placeholder: '0.0',
																addonAfter: (0, q.jsx)('span', {
																	children: (0, q.jsx)(G.Z, {
																		dataPlace: 'right',
																		name: l.get('symbol'),
																	}),
																}),
															}),
														}),
													],
												}),
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)(F(), {
															className: 'small-3 buy-sell-label',
															content: 'transfer.fee',
														}),
														(0, q.jsx)('div', {
															className: 'inputAddon small-9',
															children: (0, q.jsx)(Q.Z, {
																id: ''.concat(s, 'Fee'),
																placeholder: '0.0',
																value: w
																	? u.getAmount({real: !0})
																	: v().translate(
																			'transfer.errors.insufficient'
																	  ),
																disabled: !0,
																addonAfter: (0, q.jsx)($.Z, {
																	style: {width: 100},
																	disabled: 1 === S.length,
																	defaultValue: S.indexOf(this.props.feeAsset),
																	onChange: this.props.onChangeFeeAsset,
																	children: je,
																}),
															}),
														}),
													],
												}),
												ce,
											],
									  })
									: (0, q.jsxs)('div', {
											className: we,
											children: [
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsxs)('div', {
															className: 'small-6',
															children: [
																(0, q.jsxs)('div', {
																	className:
																		'small-11 grid-block no-overflow wrap shrink',
																	children: [
																		(0, q.jsx)(F(), {
																			className: 'small-3 buy-sell-label',
																			content: 'exchange.price',
																		}),
																		(0, q.jsx)('div', {
																			className: 'small-9 buy-sell-label',
																			style: {textAlign: 'right'},
																			children: (0, q.jsxs)('span', {
																				style: {
																					borderBottom: '#A09F9F 1px dotted',
																					cursor: 'pointer',
																				},
																				onClick: this.props.setPrice.bind(
																					this,
																					s,
																					_.sellPrice()
																				),
																				children: [
																					(0, q.jsx)(W, {
																						price: x,
																						quote: a,
																						base: l,
																					}),
																					' ',
																				],
																			}),
																		}),
																	],
																}),
																(0, q.jsx)('div', {
																	className: 'inputAddon small-11',
																	children: (0, q.jsx)(Q.Z, {
																		id: ''.concat(s, 'Price'),
																		value: t,
																		onChange: p,
																		autoComplete: 'off',
																		placeholder: '0.0',
																		addonAfter: (0, q.jsxs)('span', {
																			children: [
																				(0, q.jsx)(G.Z, {
																					dataPlace: 'right',
																					name: l.get('symbol'),
																				}),
																				' / ',
																				(0, q.jsx)(G.Z, {
																					dataPlace: 'right',
																					name: a.get('symbol'),
																				}),
																			],
																		}),
																	}),
																}),
															],
														}),
														(0, q.jsxs)('div', {
															className: 'small-6',
															children: [
																(0, q.jsxs)('div', {
																	className:
																		'small-12 grid-block no-overflow wrap shrink',
																	children: [
																		(0, q.jsx)(F(), {
																			className: 'small-3 buy-sell-label',
																			content: 'exchange.total',
																		}),
																		(0, q.jsxs)('div', {
																			className: 'small-9 buy-sell-label',
																			style: {textAlign: 'right'},
																			children: [
																				(0, q.jsx)(F(), {
																					className: 'small-3 buy-sell-label',
																					content: 'exchange.balance',
																				}),
																				' ',
																				(0, q.jsxs)('span', {
																					style: {
																						borderBottom: '#A09F9F 1px dotted',
																						cursor: 'pointer',
																					},
																					onClick: this._addBalance.bind(
																						this,
																						ve
																					),
																					children: [
																						R.Z.format_number(
																							Z.getAmount({real: !0}),
																							g
																						),
																						' ',
																					],
																				}),
																			],
																		}),
																	],
																}),
																(0, q.jsx)('div', {
																	className: 'inputAddon small-12',
																	children: (0, q.jsx)(Q.Z, {
																		id: ''.concat(s, 'Total'),
																		value: r,
																		onChange: b,
																		autoComplete: 'off',
																		placeholder: '0.0',
																		addonAfter: (0, q.jsx)('span', {
																			children: (0, q.jsx)(G.Z, {
																				dataPlace: 'right',
																				name: l.get('symbol'),
																			}),
																		}),
																	}),
																}),
															],
														}),
													],
												}),
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsxs)('div', {
															className: 'small-6',
															children: [
																(0, q.jsx)(F(), {
																	className: 'small-3 buy-sell-label',
																	content: 'transfer.amount',
																}),
																(0, q.jsx)('div', {
																	className: 'inputAddon small-11',
																	children: (0, q.jsx)(Q.Z, {
																		id: ''.concat(s, 'Amount'),
																		value: e,
																		onChange: c,
																		autoComplete: 'off',
																		placeholder: '0.0',
																		addonAfter: (0, q.jsx)('span', {
																			children: (0, q.jsx)(G.Z, {
																				dataPlace: 'right',
																				name: a.get('symbol'),
																			}),
																		}),
																	}),
																}),
															],
														}),
														(0, q.jsxs)('div', {
															className: 'small-6',
															children: [
																(0, q.jsx)(F(), {
																	className: 'small-3 buy-sell-label',
																	content: 'transfer.fee',
																}),
																(0, q.jsx)('div', {
																	className: 'inputAddon small-12',
																	children: (0, q.jsx)(Q.Z, {
																		id: ''.concat(s, 'Fee'),
																		placeholder: '0.0',
																		defaultValue: w
																			? u.getAmount({real: !0})
																			: v().translate(
																					'transfer.errors.insufficient'
																			  ),
																		disabled: !0,
																		addonAfter: (0, q.jsx)($.Z, {
																			style: {width: 100},
																			disabled: 1 === S.length,
																			defaultValue: S.indexOf(
																				this.props.feeAsset
																			),
																			onChange: this.props.onChangeFeeAsset,
																			children: je,
																		}),
																	}),
																}),
															],
														}),
													],
												}),
											],
									  });
								var Ae = le ? l : a,
									Ce =
										!!Ae.get('bitasset') &&
										Ae.get('bitasset').get('settlement_fund') > 0;
								return (
									i.Z.getState().currentAccount,
									(0, q.jsxs)('div', {
										className: y()(this.props.className),
										style: this.props.styles,
										children: [
											(0, q.jsxs)('div', {
												className: 'buy-sell-container',
												style: {paddingRight: 5},
												children: [
													A
														? null
														: (0, q.jsxs)('div', {
																className:
																	'exchange-content-header exchange-content-header--buy-sell-form ' +
																	s,
																children: [
																	(0, q.jsx)('span', {
																		children: (0, q.jsx)(M.Z, {
																			string: 'exchange.buysell_formatter',
																			noLink: !0,
																			noTip: !0,
																			keys: [
																				{
																					type: 'asset',
																					value: a.get('symbol'),
																					arg: 'asset',
																				},
																				{
																					type: 'translate',
																					value: d
																						? 'exchange.short'
																						: le
																						? 'exchange.buy'
																						: 'exchange.sell',
																					arg: 'direction',
																				},
																			],
																		}),
																	}),
																	this.props.onFlip &&
																	!this.props.hideFunctionButtons
																		? (0, q.jsxs)('span', {
																				onClick: this.props.onFlip,
																				style: {
																					cursor: 'pointer',
																					fontSize: '1rem',
																				},
																				className: 'flip-arrow',
																				children: [' ', '⇆'],
																		  })
																		: null,
																	this.props.onTogglePosition &&
																	!this.props.hideFunctionButtons
																		? (0, q.jsxs)('span', {
																				onClick: this.props.onTogglePosition,
																				style: {
																					cursor: 'pointer',
																					fontSize: '1rem',
																				},
																				className: 'flip-arrow',
																				children: [' ', '⇅'],
																		  })
																		: null,
																	this.props.moveOrderForm &&
																	!this.props.hideFunctionButtons
																		? (0, q.jsx)(Y.Z, {
																				onClick: this.props.moveOrderForm,
																				name: 'thumb-tack',
																				className:
																					'icon-14px icon-fill order-book-button-v',
																				style: {marginLeft: 5},
																		  })
																		: null,
																],
														  }),
													(0, q.jsxs)('form', {
														ref: 'order_form',
														className:
															(this.props.isOpen ? '' : 'hide-container ') +
															'order-form',
														style: {fontSize: '14px'},
														noValidate: !0,
														children: [
															(0, q.jsxs)('div', {
																className: 'grid-block no-overflow wrap shrink',
																children: [
																	this.props.moveOrderForm && C
																		? (0, q.jsx)('div', {
																				style: {
																					width: '100%',
																					textAlign: 'right',
																				},
																				onClick: this.props.moveOrderForm,
																				children: (0, q.jsx)(Y.Z, {
																					name: 'thumb-tack',
																					className:
																						'icon-18px icon-fill order-book-button-v',
																				}),
																		  })
																		: null,
																	ke,
																],
															}),
															(0, q.jsxs)('div', {
																className: 'grid-block no-overflow wrap shrink',
																children: [
																	(0, q.jsxs)('div', {
																		className: T
																			? 'small-12 grid-block'
																			: 'small-6',
																		children: [
																			(0, q.jsx)(F(), {
																				className: 'small-4 buy-sell-label',
																				content: 'transaction.expiration',
																			}),
																			(0, q.jsxs)('div', {
																				className:
																					'small-8 expiration-datetime-picker',
																				children: [
																					(0, q.jsx)(K.Z, {
																						ref: this.getDatePickerRef,
																						className:
																							'expiration-datetime-picker--hidden',
																						showTime: !0,
																						showToday: !1,
																						disabledDate: function (e) {
																							return (
																								e < j()().add(59, 'minutes')
																							);
																						},
																						value:
																							'Specific' !== O
																								? O
																								: j()().add(1, 'hour'),
																						onChange:
																							this.props
																								.onExpirationCustomChange,
																					}),
																					(0, q.jsx)('select', {
																						className: 'cursor-pointer',
																						onChange:
																							this.onExpirationSelectChange,
																						onClick:
																							this.onExpirationSelectClick,
																						onBlur: this.onExpirationSelectBlur,
																						'data-tip':
																							xe &&
																							j()(xe).format(
																								'Do MMM YYYY hh:mm A'
																							),
																						value: this.props.expirationType,
																						children: Se,
																					}),
																				],
																			}),
																		],
																	}),
																	T
																		? null
																		: (0, q.jsx)('div', {
																				className: 'small-6',
																				children: ce,
																		  }),
																	(0, q.jsxs)('div', {
																		className: 'small-12 medium-12 xlarge-12',
																		children: [
																			T
																				? (0, q.jsxs)('div', {
																						className:
																							'grid-block no-overflow wrap shrink',
																						children: [
																							(0, q.jsx)(F(), {
																								className:
																									'small-4 buy-sell-label',
																								content: le
																									? 'exchange.lowest_ask'
																									: 'exchange.highest_bid',
																							}),
																							(0, q.jsx)('div', {
																								className:
																									'small-8 buy-sell-label',
																								children: (0, q.jsxs)('span', {
																									style: {
																										borderBottom:
																											'#A09F9F 1px dotted',
																										cursor: 'pointer',
																									},
																									onClick:
																										this.props.setPrice.bind(
																											this,
																											s,
																											_.sellPrice()
																										),
																									children: [
																										(0, q.jsx)(W, {
																											price: x,
																											quote: a,
																											base: l,
																										}),
																										' ',
																										(0, q.jsx)(G.Z, {
																											name: l.get('symbol'),
																											noTip: !0,
																										}),
																										'/',
																										(0, q.jsx)(G.Z, {
																											name: a.get('symbol'),
																											noTip: !0,
																										}),
																									],
																								}),
																							}),
																						],
																				  })
																				: null,
																			T
																				? (0, q.jsxs)('div', {
																						className:
																							'grid-block no-overflow wrap shrink',
																						children: [
																							(0, q.jsx)(F(), {
																								className:
																									'small-4 buy-sell-label',
																								content: 'exchange.balance',
																							}),
																							(0, q.jsx)('div', {
																								className:
																									'small-8 buy-sell-label',
																								children: (0, q.jsxs)('span', {
																									style: {
																										borderBottom:
																											'#A09F9F 1px dotted',
																										cursor: 'pointer',
																									},
																									onClick:
																										this._addBalance.bind(
																											this,
																											ve
																										),
																									children: [
																										R.Z.format_number(
																											Z.getAmount({real: !0}),
																											g
																										),
																										' ',
																										(0, q.jsx)(G.Z, {
																											name: ye,
																											noTip: !0,
																										}),
																									],
																								}),
																							}),
																						],
																				  })
																				: null,
																			(0, q.jsx)('div', {
																				style: {marginTop: 10},
																				children: (0, q.jsxs)('div', {
																					className: 'short-long-button',
																					children: [
																						(0, q.jsx)(m.Z, {
																							placement: 'top',
																							title: ge || '',
																							children: (0, q.jsx)('button', {
																								style: le
																									? me
																										? {
																												backgroundColor:
																													'#446600',
																												marginTop: '10px',
																												width: '100%',
																												height: '32px',
																												color: 'grey',
																										  }
																										: {
																												backgroundColor:
																													'#70a800',
																												marginTop: '10px',
																												width: '100%',
																												height: '32px',
																												color: 'white',
																										  }
																									: me
																									? {
																											backgroundColor:
																												'#5a0c21',
																											marginTop: '10px',
																											width: '100%',
																											height: '32px',
																											color: 'grey',
																									  }
																									: {
																											backgroundColor:
																												'#e6416e',
																											marginTop: '10px',
																											width: '100%',
																											height: '32px',
																											color: 'white',
																									  },
																								disabled: me,
																								onClick: h.bind(this, !0),
																								type: 'primary',
																								children: le ? 'BUY' : 'SELL',
																							}),
																						}),
																						Ce
																							? (0, q.jsx)(X.Z, {
																									disabled:
																										!this.props
																											.currentAccount ||
																										'1.2.3' ===
																											this.props.currentAccount.get(
																												'id'
																											),
																									onClick: this.showSettleModal,
																									'data-tip': v().translate(
																										'exchange.settle_globally_settled_tooltip'
																									),
																									children: (0, q.jsx)(F(), {
																										content:
																											'exchange.settle_globally_settled',
																									}),
																							  })
																							: null,
																					],
																				}),
																			}),
																		],
																	}),
																],
															}),
															(0, q.jsx)('div', {
																children: (0, q.jsx)('div', {
																	className:
																		'grid-content clear-fix no-padding',
																	children:
																		ge && d
																			? (0, q.jsx)(m.Z, {
																					title: ge,
																					placement: 'right',
																					children: (0, q.jsx)('div', {
																						style: {paddingRight: 10},
																						className: 'float-right',
																						children: (0, q.jsx)('input', {
																							style: {margin: 0},
																							className: be,
																							type: 'submit',
																							onClick: h.bind(this, !1),
																							value: de,
																						}),
																					}),
																			  })
																			: d
																			? (0, q.jsx)(m.Z, {
																					title: '',
																					placement: 'right',
																					children: (0, q.jsx)('div', {
																						style: {paddingRight: 10},
																						className: 'float-right',
																						children: (0, q.jsx)('input', {
																							style: {margin: 0},
																							className: be,
																							type: 'submit',
																							onClick: h.bind(this, !1),
																							value: de,
																						}),
																					}),
																			  })
																			: null,
																}),
															}),
														],
													}),
												],
											}),
											Ce &&
												!!this.props.currentAccount &&
												(0, q.jsx)(J.Z, {
													visible: this.state.isSettleModalVisible,
													hideModal: this.hideSettleModal,
													showModal: this.showSettleModal,
													asset: Ae.get('id'),
													account: this.props.currentAccount,
												}),
										],
									})
								);
							},
						},
					]) && re(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(n.Component);
			ae(le, 'propTypes', {
				balance: E.Z.ChainObject,
				type: A().string,
				amountChange: A().func.isRequired,
				priceChange: A().func.isRequired,
				onSubmit: A().func.isRequired,
				onExpirationTypeChange: A().func.isRequired,
				onExpirationCustomChange: A().func.isRequired,
			}),
				ae(le, 'defaultProps', {type: 'bid'});
			const ce = (0, I.Z)(le);
			var ue = r(55019),
				de = r(22712),
				pe = r(40074),
				he = r(81214);
			function fe(e) {
				return (
					(fe =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					fe(e)
				);
			}
			var me = {
					email:
						/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					url: new RegExp(
						'^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
						'i'
					),
					hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
				},
				be = {
					integer: function (e) {
						return be.number(e) && parseInt(e, 10) === Number(e);
					},
					float: function (e) {
						return be.number(e) && !be.integer(e);
					},
					array: function (e) {
						return Array.isArray(e);
					},
					regexp: function (e) {
						if (e instanceof RegExp) return !0;
						try {
							return !!new RegExp(e);
						} catch (e) {
							return !1;
						}
					},
					date: function (e) {
						return (
							'function' == typeof e.getTime &&
							'function' == typeof e.getMonth &&
							'function' == typeof e.getYear
						);
					},
					number: function (e) {
						return (
							!isNaN(e) && !isNaN(Number(e)) && 'number' == typeof Number(e)
						);
					},
					object: function (e) {
						return 'object' === fe(e) && !be.array(e);
					},
					method: function (e) {
						return 'function' == typeof e;
					},
					email: function (e) {
						return (
							'string' == typeof e && !!e.match(me.email) && e.length < 255
						);
					},
					url: function (e) {
						return 'string' == typeof e && !!e.match(me.url);
					},
					hex: function (e) {
						return 'string' == typeof e && !!e.match(me.hex);
					},
					string: function (e) {
						return 'string' == typeof e;
					},
					boolean: function (e) {
						return 'boolean' == typeof e;
					},
					enum: function (e, t) {
						return Array.isArray(t) && t.indexOf(e) >= -1;
					},
				};
			const ye = be;
			function ge(e) {
				return (
					(ge =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					ge(e)
				);
			}
			var ve = function () {
					var e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
					return e
						? v().translate('validation.messages.requiredNamed', {name: e})
						: v().translate('validation.messages.required');
				},
				xe = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: '',
						t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: '';
					return t
						? v().translate('validation.messages.types.'.concat(e, 'Named'), {
								name: t,
								type: e,
						  })
						: v().translate('validation.messages.types.'.concat(e), {type: e});
				},
				_e = function (e, t, r) {
					return r
						? v().translate('validation.messages.rangeNamed', {
								name: r,
								min: e,
								max: t,
						  })
						: v().translate('validation.messages.range', {min: e, max: t});
				},
				je = function (e, t) {
					return t
						? v().translate('validation.messages.minNamed', {name: t, min: e})
						: v().translate('validation.messages.min', {min: e});
				},
				ke = function (e, t) {
					return t
						? v().translate('validation.messages.maxNamed', {name: t, max: e})
						: v().translate('validation.messages.max', {max: e});
				},
				Se = function (e) {
					return e
						? v().translate('validation.messages.numberNamed', {name: e})
						: v().translate('validation.messages.number');
				},
				we = function (e) {
					return e
						? v().translate('validation.messages.integerNamed', {name: e})
						: v().translate('validation.messages.integer');
				},
				Ae = function (e) {
					return e
						? v().translate('validation.messages.floatNamed', {name: e})
						: v().translate('validation.messages.float');
				},
				Ce = function (e) {
					return e
						? v().translate('validation.messages.emailNamed', {name: e})
						: v().translate('validation.messages.email');
				},
				Oe = function (e) {
					return e
						? v().translate('validation.messages.urlNamed', {name: e})
						: v().translate('validation.messages.url');
				},
				Pe = function (e, t) {
					return e
						? v().translate('validation.messages.oneOfNamed', {
								name: e,
								list: t,
						  })
						: v().translate('validation.messages.oneOf', {list: t});
				},
				Te = function (e, t) {
					return v().translate('validation.messages.balance', {
						balance: e,
						symbol: t,
					});
				},
				Ne = {
					required: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: {},
							t = '';
						return (
							(t = 'string' == typeof e ? e : e && e.name),
							{required: !0, message: ve(t)}
						);
					},
					type: function (e) {
						var t = '',
							r = '';
						if (
							('string' == typeof e && (t = e),
							e && e.type && (t = e.type),
							e && e.name && (r = e.name),
							'' === t)
						)
							throw new Error(
								'[Validation] Rules.Type the property type is missed'
							);
						if (!ye[t])
							throw new Error(
								"[Validation] Rules.Type the property type '".concat(
									e && e.type,
									"' is not listed in supported types"
								)
							);
						return {
							validator: function (e, r, n) {
								return ye[t](r) ? n() : n(!1);
							},
							message: xe(t, r),
						};
					},
					range: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: {},
							t = Number(e.max),
							r = Number(e.min);
						if (void 0 === t || isNaN(t))
							throw new Error(
								"[Validation] Rules.Range the property max '".concat(
									e && e.max,
									"' is incorrect. Should be a number"
								)
							);
						if (void 0 === r || isNaN(r))
							throw new Error(
								"[Validation] Rules.Range the property min '".concat(
									e && e.min,
									"' is incorrect. Should be a number"
								)
							);
						if (t < r)
							throw new Error(
								"[Validation] Rules.Range the property min '"
									.concat(e && e.min, "' cannot be higher than max '")
									.concat(e && e.max, "'")
							);
						return {
							validator: function (e, n, o) {
								return (
									(n = Number(n)), isNaN(n) || n < r || n > t ? o(!1) : o()
								);
							},
							message: _e(r, t, e.name || ''),
						};
					},
					min: function (e) {
						var t;
						if (
							void 0 ===
								(t = 'object' === ge(e) ? Number(e && e.min) : Number(e)) ||
							isNaN(t)
						)
							throw new Error(
								"[Validation] Rules.Min the property min '".concat(
									e && e.min,
									"' is incorrect. Should be a number"
								)
							);
						return {
							validator: function (r, n, o) {
								if (((n = Number(n)), e && e.higherThan)) {
									if (isNaN(n) || n <= t) return o(!1);
								} else if (isNaN(n) || n < t) return o(!1);
								return o();
							},
							message: je(t, e.name || ''),
						};
					},
					max: function (e) {
						var t;
						if (
							void 0 ===
								(t = 'object' === ge(e) ? Number(e && e.max) : Number(e)) ||
							isNaN(t)
						)
							throw new Error(
								"[Validation] Rules.Min the property max '".concat(
									e && e.max,
									"' is incorrect. Should be a number"
								)
							);
						return {
							validator: function (e, r, n) {
								return (r = Number(r)), isNaN(r) || r > t ? n(!1) : n();
							},
							message: ke(t, e.name || ''),
						};
					},
					number: function (e) {
						return {
							validator: function (e, t, r) {
								return ye.number(t) ? r() : r(!1);
							},
							message: Se(e || ''),
						};
					},
					integer: function (e) {
						return {
							validator: function (e, t, r) {
								return ye.integer(t) ? r() : r(!1);
							},
							message: we(e || ''),
						};
					},
					float: function (e) {
						return {
							validator: function (e, t, r) {
								return ye.float(t) ? r() : r(!1);
							},
							message: Ae(e || ''),
						};
					},
					email: function (e) {
						return {
							validator: function (e, t, r) {
								return ye.email(t) ? r() : r(!1);
							},
							message: Ce(e || ''),
						};
					},
					url: function (e) {
						return {
							validator: function (e, t, r) {
								return ye.url(t) ? r() : r(!1);
							},
							message: Oe(e || ''),
						};
					},
					oneOf: function () {
						var e,
							t =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: {};
						if (!Array.isArray(t && t.list))
							throw new Error(
								'[Validation] Rules.oneOf the property list is missed or incorrect'
							);
						return (
							(e = t.list),
							{
								validator: function (t, r, n) {
									return -1 === e.indexOf(r) ? n(!1) : n();
								},
								message: Pe(
									(t && t.name) || '',
									e.toString().replace(/,([a-z])/g, ', $1')
								),
							}
						);
					},
					balance: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: {},
							t = Ne.range({min: 0, max: e.balance});
						return {validator: t.validator, message: Te(e.balance, e.symbol)};
					},
				},
				Ze = {Rules: Ne},
				Re = function (e) {
					return function (t, r) {
						var n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: 6;
						return +e(t, r).toFixed(n);
					};
				},
				Be = function (e, t) {
					return e + t;
				},
				Fe = function (e, t) {
					return e - t;
				},
				Me = function (e, t) {
					return e * t;
				},
				Ee = function (e, t) {
					return e / t;
				},
				Ie = function (e, t, r) {
					return Re(Be)(e, t, r);
				},
				qe = function (e, t, r) {
					return Re(Fe)(e, t, r);
				},
				Le = function (e, t, r) {
					return Re(Me)(e, t, r);
				},
				De = function (e, t, r) {
					return Re(Ee)(e, t, r);
				},
				Ve = r(25108);
			function ze(e) {
				return (
					(ze =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					ze(e)
				);
			}
			function He(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function Ue(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? He(Object(r), !0).forEach(function (t) {
								tt(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: He(Object(r)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(r, t)
								);
						  });
				}
				return e;
			}
			function We(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Ge(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Qe(e, t, r) {
				return (
					t && Ge(e.prototype, t),
					r && Ge(e, r),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Ke(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Ye(e, t);
			}
			function Ye(e, t) {
				return (
					(Ye =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ye(e, t)
				);
			}
			function Je(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var r,
						n = et(e);
					if (t) {
						var o = et(this).constructor;
						r = Reflect.construct(n, arguments, o);
					} else r = n.apply(this, arguments);
					return $e(this, r);
				};
			}
			function $e(e, t) {
				if (t && ('object' === ze(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Xe(e);
			}
			function Xe(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function et(e) {
				return (
					(et = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					et(e)
				);
			}
			function tt(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			var rt = (function (e) {
					Ke(r, e);
					var t = Je(r);
					function r(e) {
						var o;
						return (
							We(this, r),
							tt(Xe((o = t.call(this, e))), 'getDatePickerRef', function (e) {
								o.datePricker = e;
							}),
							tt(Xe(o), 'onExpirationSelectChange', function (e) {
								'SPECIFIC' === e.target.value
									? o.datePricker.picker.handleOpenChange(!0)
									: o.datePricker.picker.handleOpenChange(!1),
									o.props.onExpirationTypeChange(e);
							}),
							tt(Xe(o), 'onExpirationSelectClick', function (e) {
								'SPECIFIC' === e.target.value &&
									(o.firstClick && (o.secondClick = !0),
									(o.firstClick = !0),
									o.secondClick &&
										(o.datePricker.picker.handleOpenChange(!0),
										(o.firstClick = !1),
										(o.secondClick = !1)));
							}),
							tt(Xe(o), 'onExpirationSelectBlur', function () {
								(o.firstClick = !1), (o.secondClick = !1);
							}),
							(o.state = {orderCount: 1, feeAssets: []}),
							(o.handleClickBalance = o.handleClickBalance.bind(Xe(o))),
							(o.handleCurrentPriceClick = o.handleCurrentPriceClick.bind(
								Xe(o)
							)),
							(o.formRef = n.createRef()),
							o
						);
					}
					return (
						Qe(r, [
							{
								key: 'componentDidMount',
								value: function () {
									this._checkFeeAssets();
								},
							},
							{
								key: 'componentDidUpdate',
								value: function () {
									var e = this,
										t = Number(this._getFormValues().orderCount || 1),
										r = Number(this.state.orderCount);
									isNaN(r) ||
										isNaN(t) ||
										Number(this.state.orderCount) === t ||
										this.setState({orderCount: t}, function () {
											e._checkFeeAssets();
										});
								},
							},
							{
								key: 'isFormValid',
								value: function () {
									var e = this._getFormValues();
									return !(
										!e ||
										!e.priceLower ||
										isNaN(Number(e.priceLower)) ||
										Number(e.priceLower) <= 0 ||
										!e.amount ||
										isNaN(Number(e.amount)) ||
										Number(e.amount) <= 0 ||
										!e.priceUpper ||
										isNaN(Number(e.priceUpper)) ||
										Number(e.priceUpper) <= 0 ||
										Number(e.priceUpper) <= Number(e.priceLower) ||
										!e.orderCount ||
										isNaN(Number(e.orderCount)) ||
										Number(e.orderCount) <= 1
									);
								},
							},
							{
								key: '_getBaseAssetFlags',
								value: function () {
									return P.Z.getFlagBooleans(
										this.props.baseAsset.getIn(['options', 'flags']),
										this.props.baseAsset.has('bitasset_data_id')
									);
								},
							},
							{
								key: '_getQuoteAssetFlags',
								value: function () {
									return P.Z.getFlagBooleans(
										this.props.quoteAsset.getIn(['options', 'flags']),
										this.props.quoteAsset.has('bitasset_data_id')
									);
								},
							},
							{
								key: '_isMarketFeeVisible',
								value: function () {
									var e = this._getBaseAssetFlags(),
										t = this._getQuoteAssetFlags();
									return (
										!(
											this._getFormValues().action !== pe.vg.SELL ||
											!e.charge_market_fee
										) ||
										!(
											this._getFormValues().action !== pe.vg.BUY ||
											!t.charge_market_fee
										)
									);
								},
							},
							{
								key: '_getFormValues',
								value: function () {
									var e, t;
									return this.formRef && this.formRef.current
										? (Ve.log(
												'&&&& this.formRef.current.getFieldsValue()',
												null === (e = this.formRef) ||
													void 0 === e ||
													null === (t = e.current) ||
													void 0 === t
													? void 0
													: t.getFieldsValue()
										  ),
										  this.formRef.current.getFieldsValue())
										: {};
								},
							},
							{
								key: '_filterFeeStatuses',
								value: function (e) {
									return e
										.filter(function (e) {
											return e && e.hasPoolBalance && e.hasBalance;
										})
										.map(function (e) {
											return {
												fee: e,
												amount:
													e.fee.getAmount() / Math.pow(10, e.fee.precision),
												asset: he.Z.getAsset(e.fee.asset_id),
											};
										});
								},
							},
							{
								key: '_checkFeeAssets',
								value: function () {
									var e = this;
									this._getAccountAssetsFeeStatus().then(function (t) {
										var r = e._filterFeeStatuses(t);
										e.setState({feeAssets: r});
									});
								},
							},
							{
								key: '_getAccountAssetsFeeStatus',
								value: function () {
									var e = this.props.currentAccount,
										t = this._getFormValues().orderCount;
									return (
										!!(e && e.get && e.get('balances')) &&
										new Promise(function (r) {
											var n = [];
											e.get('balances').forEach(function (r) {
												var o = he.Z.getObject(r),
													i = (0, Z.rX)({
														accountID: e.get('id'),
														feeID: o.get('asset_type'),
														type: 'limit_order_create',
														operationsCount: t,
													});
												n.push(i);
											}),
												Promise.all(n).then(function (e) {
													r(e);
												});
										})
									);
								},
							},
							{
								key: '_getFee',
								value: function () {
									var e = this._getFormValues(),
										t = 0;
									return (
										e &&
											e.feeCurrency &&
											this.state.feeAssets.forEach(function (r) {
												r &&
													r.asset &&
													r.asset.get('symbol') === e.feeCurrency &&
													(t = r.amount);
											}),
										t
									);
								},
							},
							{
								key: '_getMarketFee',
								value: function () {
									var e = this._getFormValues(),
										t = this.props.baseAsset,
										r = this.props.quoteAsset,
										n = Number(this._getTotal()),
										o = e.action;
									if (isNaN(n)) return null;
									var i = null;
									if (
										(o === pe.vg.SELL && (i = t),
										o === pe.vg.BUY && (i = r),
										!i || !i.get || !i.getIn)
									)
										return null;
									var s = new N.xR({
											amount: i.getIn(['options', 'max_market_fee']),
											asset_id: i.get('asset_id'),
											precision: i.get('precision'),
										}),
										a = this._getMarketFeePercentage();
									return n
										? Math.min(s.getAmount({real: !0}), (n / 100) * a).toFixed(
												s.precision
										  )
										: 0;
								},
							},
							{
								key: '_getMarketFeePercentage',
								value: function () {
									var e = this._getFormValues().action,
										t = this.props.baseAsset,
										r = this.props.quoteAsset,
										n = null;
									return (
										e === pe.vg.SELL && (n = t),
										e === pe.vg.BUY && (n = r),
										Number(n.getIn(['options', 'market_fee_percent']) / 100)
									);
								},
							},
							{
								key: '_getTotal',
								value: function () {
									var e = this._getFormValues() || {},
										t = Number(e.amount),
										r = Number(e.priceLower),
										n = Number(e.priceUpper),
										o = Number(e.orderCount),
										i = function (e) {
											return !isNaN(e);
										};
									if (
										!i(r) ||
										!i(n) ||
										!i(t) ||
										!i(o) ||
										o <= 1 ||
										o <= 0 ||
										r >= n
									)
										return 0;
									for (
										var s = De(qe(n, r), qe(o, 1)), a = De(t, o), l = 0, c = 0;
										c < o;
										c += 1
									)
										l = Ie(l, Le(a, Ie(r, Le(s, c))));
									return l;
								},
							},
							{
								key: '_getQuantityFromTotal',
								value: function (e) {
									var t = this._getFormValues(),
										r = Number(t.priceLower),
										n = Number(t.priceUpper),
										o = Number(t.orderCount),
										i = function (e) {
											return !isNaN(e);
										};
									if (!i(r) || !i(n) || !i(e) || !i(o) || o <= 0 || r >= n)
										return 0;
									for (
										var s = De(qe(n, r), qe(o, 1)), a = 0, l = 0;
										l < o;
										l += 1
									)
										a = Ie(a, Number(De(Ie(r, Le(s, l)), o)));
									return De(e, a);
								},
							},
							{
								key: '_getPreviewDataSource',
								value: function () {
									var e = this._getFormValues(),
										t = [],
										r = e.action,
										n = Number(e.amount),
										o = Number(e.priceLower),
										i = Number(e.priceUpper),
										s = Number(e.orderCount),
										a = function (e) {
											return !isNaN(e);
										};
									if (!a(o) || !a(i) || !a(n) || !a(s) || s <= 0 || o >= i)
										return [];
									for (
										var l = ((i - o) / (s - 1)).toFixed(6), c = n / s, u = 0;
										u < s;
										u += 1
									)
										t.push({
											quote: c.toFixed(6),
											base: (c * (o + l * u)).toFixed(6),
											price: (o + l * u).toFixed(6),
										});
									return r === pe.vg.BUY ? t.reverse() : t;
								},
							},
							{
								key: 'handleClickBalance',
								value: function () {
									var e, t;
									'bid' === this.props.type
										? null === (e = this.formRef.current) ||
										  void 0 === e ||
										  e.setFieldsValue({
												amount: this._getQuantityFromTotal(
													this.props.baseAssetBalance
												),
										  })
										: null === (t = this.formRef.current) ||
										  void 0 === t ||
										  t.setFieldsValue({amount: this.props.quoteAssetBalance});
								},
							},
							{
								key: 'handleCurrentPriceClick',
								value: function () {
									var e;
									null === (e = this.formRef.current) ||
										void 0 === e ||
										e.setFieldsValue({priceLower: this.props.currentPrice});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props,
										r = t.type,
										n = t.quoteAsset,
										o = t.baseAsset,
										i = t.expirationCustomTime,
										s = 'bid' === r,
										a = n,
										l = o;
									Ve.log('**** getFieldDecorator', this.formRef.current);
									var c = (0, q.jsx)(G.Z, {
											name: this.props.quoteAsset.get('symbol'),
										}),
										u = (0, q.jsx)(G.Z, {
											name: this.props.quoteAsset.get('symbol'),
										}),
										d = (0, q.jsx)(G.Z, {
											name: this.props.baseAsset.get('symbol'),
										}),
										p = (0, q.jsxs)('span', {
											children: [
												(0, q.jsx)(G.Z, {
													dataPlace: 'right',
													name: o.get('symbol'),
												}),
												' / ',
												(0, q.jsx)(G.Z, {
													dataPlace: 'right',
													name: n.get('symbol'),
												}),
											],
										}),
										h = {
											labelCol: {span: 6},
											wrapperCol: {span: 16, offset: 2},
										},
										f = this._getFormValues(),
										m = Number((f && f.priceLower) || 0),
										b = (0, q.jsx)(ue.Z, {
											disabled: !0,
											style: {width: '100%'},
											autoComplete: 'off',
											addonAfter: c,
											value: this._getMarketFee(),
										}),
										y = Ze.Rules.balance({
											balance: this.props.baseAssetBalance,
											symbol: this.props.baseAsset.get('symbol'),
										}),
										g = y.validator(null, this._getTotal(), function (e) {
											return void 0 === e;
										}),
										x = s && !g ? y.message : null,
										_ = s && !g ? 'error' : '',
										k = [
											Ze.Rules.required(),
											Ze.Rules.number(),
											Ze.Rules.min({min: 0, higherThan: !0, name: 'Quantity'}),
										];
									s ||
										k.push(
											Ze.Rules.balance({
												balance: this.props.quoteAssetBalance,
												symbol: this.props.quoteAsset.get('symbol'),
											})
										);
									var S,
										w = v().translate(
											s ? 'exchange.lowest_ask' : 'exchange.highest_bid'
										);
									'SPECIFIC' !== this.props.expirationType &&
										(S =
											this.props.expirations[this.props.expirationType].get());
									var A = Object.keys(this.props.expirations).map(function (t) {
										return (0,
										q.jsx)('option', {value: t, children: 'SPECIFIC' === t && 'Specific' !== i ? j()(i).format('Do MMM YYYY hh:mm A') : e.props.expirations[t].title}, t);
									});
									return (0, q.jsx)('div', {
										className: 'buy-sell-container',
										style: {padding: '5px'},
										children: (0, q.jsxs)(de.Z, {
											className: 'order-form',
											layout: 'horizontal',
											hideRequiredMark: !0,
											style: {padding: '0px 0px'},
											ref: this.formRef,
											children: [
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue({}, h),
														{},
														{
															name: 'priceLower',
															label: v().translate('scaled_orders.price_lower'),
															validateFirst: !0,
															validateTrigger: 'onBlur',
															rules: [
																Ze.Rules.required(),
																Ze.Rules.number(),
																Ze.Rules.min({
																	min: 0,
																	name: 'Price',
																	higherThan: !0,
																}),
															],
															children: (0, q.jsx)(ue.Z, {
																placeholder: '0.0',
																style: {width: '100%'},
																autoComplete: 'off',
																addonAfter: p,
															}),
														}
													)
												),
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue({}, h),
														{},
														{
															name: 'priceUpper',
															label: v().translate('scaled_orders.price_upper'),
															validateFirst: !0,
															validateTrigger: 'onBlur',
															rules: [
																Ze.Rules.required(),
																Ze.Rules.number(),
																Ze.Rules.min({
																	min: m,
																	name: 'Price',
																	higherThan: !0,
																}),
															],
															children: (0, q.jsx)(ue.Z, {
																placeholder: '0.0',
																style: {width: '100%'},
																autoComplete: 'off',
																addonAfter: p,
															}),
														}
													)
												),
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue({}, h),
														{},
														{
															label: v().translate('scaled_orders.quantity'),
															name: 'amount',
															validateFirst: !0,
															validateTrigger: 'onBlur',
															rules: k,
															children: (0, q.jsx)(ue.Z, {
																placeholder: '0.0',
																style: {width: '100%'},
																autoComplete: 'off',
																addonAfter: u,
															}),
														}
													)
												),
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue({}, h),
														{},
														{
															label: v().translate('scaled_orders.order_count'),
															name: 'orderCount',
															validateFirst: !0,
															rules: [
																Ze.Rules.required(),
																Ze.Rules.number(),
																Ze.Rules.min({
																	min: 1,
																	name: 'Orders Count',
																	higherThan: !0,
																}),
															],
															children: (0, q.jsx)(ue.Z, {
																style: {width: '100%'},
																placeholder: '0',
																autoComplete: 'off',
																addonAfter: v().translate(
																	'scaled_orders.order_s'
																),
															}),
														}
													)
												),
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue({}, h),
														{},
														{
															help: x,
															validateStatus: _,
															label: v().translate('scaled_orders.total'),
															children: e.formRef
																? (0, q.jsx)(ue.Z, {
																		disabled: !0,
																		style: {width: '100%'},
																		autoComplete: 'off',
																		addonAfter: d,
																		value: e._getTotal(),
																  })
																: (0, q.jsx)(q.Fragment, {}),
														}
													)
												),
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue({}, h),
														{},
														{
															label: v().translate('scaled_orders.fee'),
															name: 'feeCurrency',
															initialValue:
																he.Z.getAsset('1.3.0') &&
																he.Z.getAsset('1.3.0').get &&
																he.Z.getAsset('1.3.0').get('symbol'),
															children: e.formRef
																? (0, q.jsx)(ue.Z, {
																		disabled: !0,
																		placeholder: '0.0',
																		style: {width: '100%'},
																		autoComplete: 'off',
																		addonAfter: function () {
																			return (0, q.jsx)($.Z, {
																				showSearch: !0,
																				dropdownMatchSelectWidth: !1,
																				style: {
																					minWidth: '80px',
																					maxWidth: '120px',
																				},
																				initialValue:
																					he.Z.getAsset('1.3.0') &&
																					he.Z.getAsset('1.3.0').get &&
																					he.Z.getAsset('1.3.0').get('symbol'),
																				children:
																					e.state.feeAssets &&
																					e.state.feeAssets.map &&
																					e.state.feeAssets.map(function (e) {
																						return (0,
																						q.jsx)($.Z.Option, {value: ''.concat(e.asset.get('symbol')), children: (0, q.jsx)(G.Z, {name: e.asset.get('symbol'), noTip: !0})}, e.asset.get('symbol'));
																					}),
																			});
																		},
																		value: e._getFee(),
																  })
																: (0, q.jsx)(q.Fragment, {}),
														}
													)
												),
												this._isMarketFeeVisible() &&
													(0, q.jsx)(
														de.Z.Item,
														Ue(
															Ue({}, h),
															{},
															{
																label: ''
																	.concat(
																		v().translate('scaled_orders.market_fee'),
																		' '
																	)
																	.concat(this._getMarketFeePercentage(), '%'),
																children: b,
															}
														)
													),
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue(
															{
																style: {marginBottom: '6px'},
																label: v().translate('transaction.expiration'),
															},
															h
														),
														{},
														{
															children: (0, q.jsxs)('div', {
																className:
																	'expiration-datetime-picker scaled-orders',
																children: [
																	(0, q.jsx)(K.Z, {
																		ref: this.getDatePickerRef,
																		className:
																			'expiration-datetime-picker--hidden',
																		showTime: !0,
																		showToday: !1,
																		disabledDate: function (e) {
																			return e < j()().add(59, 'minutes');
																		},
																		value:
																			'Specific' !== i
																				? i
																				: j()().add(1, 'hour'),
																		onChange:
																			this.props.onExpirationCustomChange,
																	}),
																	(0, q.jsx)('select', {
																		className: 'cursor-pointer',
																		onChange: this.onExpirationSelectChange,
																		onClick: this.onExpirationSelectClick,
																		onBlur: this.onExpirationSelectBlur,
																		'data-tip':
																			S && j()(S).format('Do MMM YYYY hh:mm A'),
																		value: this.props.expirationType,
																		children: A,
																	}),
																],
															}),
														}
													)
												),
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue({style: {marginTop: '7px'}, label: w}, h),
														{},
														{
															children: (0, q.jsxs)('span', {
																style: {
																	borderBottom: '#A09F9F 1px dotted',
																	cursor: 'pointer',
																},
																onClick: this.handleCurrentPriceClick,
																children: [
																	(0, q.jsx)(W, {
																		price: this.props.currentPrice,
																		quote: a,
																		base: l,
																	}),
																	' ',
																	(0, q.jsx)(G.Z, {
																		name: l.get('symbol'),
																		noTip: !0,
																	}),
																	'/',
																	(0, q.jsx)(G.Z, {
																		name: a.get('symbol'),
																		noTip: !0,
																	}),
																],
															}),
														}
													)
												),
												(0, q.jsx)(
													de.Z.Item,
													Ue(
														Ue(
															{
																style: {marginTop: '7px'},
																label: v().translate('exchange.balance'),
															},
															h
														),
														{},
														{
															children: (0, q.jsxs)('span', {
																style: {
																	borderBottom: '#A09F9F 1px dotted',
																	cursor: 'pointer',
																},
																onClick: this.handleClickBalance,
																children: [
																	s
																		? this.props.baseAssetBalance
																		: this.props.quoteAssetBalance,
																	' ',
																	(0, q.jsx)(G.Z, {
																		name: s ? l.get('symbol') : a.get('symbol'),
																		noTip: !0,
																	}),
																],
															}),
														}
													)
												),
												(0, q.jsx)('button', {
													onClick: this.props.handleSubmit,
													style: s
														? this.isFormValid()
															? {
																	backgroundColor: '#70a800',
																	marginTop: '10px',
																	width: '100%',
																	height: '32px',
																	color: 'white',
															  }
															: {
																	backgroundColor: '#446600',
																	marginTop: '10px',
																	width: '100%',
																	height: '32px',
																	color: 'grey',
															  }
														: this.isFormValid()
														? {
																backgroundColor: '#e6416e',
																marginTop: '10px',
																width: '100%',
																height: '32px',
																color: 'white',
														  }
														: {
																backgroundColor: '#5a0c21',
																marginTop: '10px',
																width: '100%',
																height: '32px',
																color: 'grey',
														  },
													type: 'primary',
													disabled: !this.isFormValid(),
													children: s ? 'BUY' : 'SELL',
												}),
											],
										}),
									});
								},
							},
						]),
						r
					);
				})(n.Component),
				nt = (function (e) {
					Ke(r, e);
					var t = Je(r);
					function r(e) {
						var n;
						return (
							We(this, r),
							((n = t.call(this, e)).saveFormRef = n.saveFormRef.bind(Xe(n))),
							(n.handleSubmit = n.handleSubmit.bind(Xe(n))),
							(n.handleCancel = n.handleCancel.bind(Xe(n))),
							n
						);
					}
					return (
						Qe(r, [
							{
								key: 'componentDidUpdate',
								value: function (e) {
									this.props.baseAsset &&
										e.baseAsset &&
										this.props.baseAsset.get &&
										e.baseAsset.get &&
										this.props.baseAsset.get('id') !== e.baseAsset.get('id') &&
										this.formRef &&
										this.formRef.props &&
										this.formRef.props.form &&
										this.formRef.props.form.resetFields(),
										this.props.lastClickedPrice &&
											this.props.lastClickedPrice !== e.lastClickedPrice &&
											this.formRef &&
											this.formRef.props &&
											this.formRef.props.form &&
											this.formRef.props.form.setFieldsValue &&
											this.formRef.props.form.setFieldsValue({
												priceLower: Number(this.props.lastClickedPrice),
											});
								},
							},
							{
								key: 'prepareOrders',
								value: function (e) {
									var t = [],
										r = Number(e.amount),
										n = Number(e.priceLower),
										o = Number(e.priceUpper),
										i = Number(e.orderCount),
										s = null;
									this.props.expirationType,
										(s = this.props.expirations[this.props.expirationType].get(
											this.props.type
										));
									var a = function (e) {
										return !isNaN(e);
									};
									if (!a(n) || !a(o) || !a(r) || !a(i) || i <= 0 || n >= o)
										return [];
									for (
										var l = ((o - n) / (i - 1)).toPrecision(5),
											c = r / i,
											u =
												e.action === pe.vg.SELL
													? this.props.quoteAsset
													: this.props.baseAsset,
											d =
												e.action === pe.vg.BUY
													? this.props.quoteAsset
													: this.props.baseAsset,
											p = function (t) {
												var r = c * (n + l * t);
												return e.action === pe.vg.BUY
													? Number(r.toPrecision(5)) *
															Math.pow(10, u.get('precision'))
													: Number(c.toPrecision(5)) *
															Math.pow(10, u.get('precision'));
											},
											h = function (t) {
												var r = c * (n + l * t);
												return e.action === pe.vg.SELL
													? Number(r.toPrecision(5)) *
															Math.pow(10, d.get('precision'))
													: Number(c.toPrecision(5)) *
															Math.pow(10, d.get('precision'));
											},
											f = 0;
										f < i;
										f += 1
									)
										t.push({
											for_sale: new N.xR({
												asset_id: u.get('id'),
												precision: u.get('precision'),
												amount: p(f),
											}),
											to_receive: new N.xR({
												asset_id: d.get('id'),
												precision: d.get('precision'),
												amount: h(f),
											}),
											expirationTime: s,
										});
									this.props.createScaledOrder(
										t,
										he.Z.getAsset(e.feeCurrency).get('id')
									);
								},
							},
							{
								key: 'handleSubmit',
								value: function () {
									var e = this;
									this.formRef.props.form.validateFields(function (t, r) {
										t || e.prepareOrders(r);
									});
								},
							},
							{
								key: 'handleCancel',
								value: function () {
									this.props.hideModal();
								},
							},
							{
								key: 'saveFormRef',
								value: function (e) {
									this.formRef = e;
								},
							},
							{
								key: '_getBalanceByAssetId',
								value: function (e, t) {
									var r = 0,
										n = this.props.currentAccount.get('balances');
									return (
										void 0 !== n.get(e) &&
											(r =
												he.Z.getObject(n.get(e)).get('balance') /
												Math.pow(10, t)),
										r
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this._getBalanceByAssetId(
											this.props.baseAsset.get('id'),
											this.props.baseAsset.get('precision')
										),
										t = this._getBalanceByAssetId(
											this.props.quoteAsset.get('id'),
											this.props.quoteAsset.get('precision')
										);
									return (0, q.jsx)(
										rt,
										Ue(
											Ue({}, this.props),
											{},
											{
												wrappedComponentRef: this.saveFormRef,
												baseAssetBalance: e,
												quoteAssetBalance: t,
												handleSubmit: this.handleSubmit,
											}
										)
									);
								},
							},
						]),
						r
					);
				})(n.Component);
			const ot = nt;
			var it = r(53825);
			function st(e) {
				return (
					(st =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					st(e)
				);
			}
			function at(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function lt(e, t) {
				return (
					(lt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					lt(e, t)
				);
			}
			function ct(e, t) {
				if (t && ('object' === st(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function ut(e) {
				return (
					(ut = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ut(e)
				);
			}
			var dt = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && lt(e, t);
				})(s, e);
				var t,
					r,
					n,
					o,
					i =
						((n = s),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = ut(n);
							if (o) {
								var r = ut(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return ct(this, e);
						});
				function s() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, s),
						((e = i.call(this)).state = {
							change: null,
							curMarket: null,
							marketChange: !1,
						}),
						e
					);
				}
				return (
					(t = s),
					(r = [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return (
									!(!e.volume2 || e.volume2 === this.props.volume2) ||
									e.price !== this.props.price ||
									e.ready !== this.props.ready
								);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								var t = {change: 0},
									r = e.market,
									n = this.state.curMarket !== r,
									o = null != this.state.curMarket && n;
								(t.marketChange = o),
									(t.curMarket = r),
									(t.prevAsset = this.state.marketAsset),
									e.ready &&
										this.props.ready &&
										(t.change =
											parseFloat(e.price) - parseFloat(this.props.price)),
									this.setState(t);
							},
						},
						{
							key: 'componentDidUpdate',
							value: function () {
								ee.Z.rebuild();
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.base,
									r = e.quote,
									n = e.price,
									o = e.content,
									i = e.ready,
									s = e.volume,
									a = e.toolTip,
									l = e.ignoreColorChange,
									c = this.state,
									u = c.change,
									d = null;
								!c.marketChange &&
									u &&
									null !== u &&
									!0 !== l &&
									(d = u > 0 ? 'pulsate green' : 'pulsate red');
								var p = s ? R.Z.format_volume(n) : R.Z.price_text(n, r, t);
								return (0, q.jsx)('li', {
									className: y()('stressed-stat', this.props.className, d),
									onClick: this.props.onClick,
									children: (0, q.jsxs)(m.Z, {
										placement: 'bottom',
										title: a,
										children: [
											(0, q.jsxs)('span', {
												children: [
													(0, q.jsxs)('span', {
														className: 'value stat-primary',
														children: [i ? p : 0, ' '],
													}),
													(0, q.jsx)('span', {
														className: 'symbol-text',
														children: (0, q.jsx)(G.Z, {name: t.get('symbol')}),
													}),
												],
											}),
											o
												? (0, q.jsx)('div', {
														className: 'stat-text',
														children: (0, q.jsx)(F(), {content: o}),
												  })
												: null,
										],
									}),
								});
							},
						},
					]) && at(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(n.Component);
			function pt(e) {
				return (
					(pt =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					pt(e)
				);
			}
			function ht(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function ft(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function mt(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function bt(e, t, r) {
				return (
					t && mt(e.prototype, t),
					r && mt(e, r),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function yt(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && gt(e, t);
			}
			function gt(e, t) {
				return (
					(gt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					gt(e, t)
				);
			}
			function vt(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var r,
						n = _t(e);
					if (t) {
						var o = _t(this).constructor;
						r = Reflect.construct(n, arguments, o);
					} else r = n.apply(this, arguments);
					return xt(this, r);
				};
			}
			function xt(e, t) {
				if (t && ('object' === pt(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function _t(e) {
				return (
					(_t = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					_t(e)
				);
			}
			function jt(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			var kt = (function (e) {
				yt(r, e);
				var t = vt(r);
				function r() {
					return ft(this, r), t.apply(this, arguments);
				}
				return (
					bt(r, [
						{
							key: '_getFeedPrice',
							value: function () {
								return this.props
									? 1 /
											R.Z.get_asset_price(
												P.Z.extractRawFeedPrice(this.props.debtAsset).getIn([
													'quote',
													'amount',
												]),
												this.props.collateralAsset,
												P.Z.extractRawFeedPrice(this.props.debtAsset).getIn([
													'base',
													'amount',
												]),
												this.props.debtAsset
											)
									: 1;
							},
						},
						{
							key: '_getCollateralRatio',
							value: function () {
								var e = this.props.object.toJS();
								return (
									R.Z.get_asset_amount(
										e.collateral,
										this.props.collateralAsset
									) /
									(R.Z.get_asset_amount(e.debt, this.props.debtAsset) /
										this._getFeedPrice())
								);
							},
						},
						{
							key: '_getMR',
							value: function () {
								return (
									this.props.debtAsset.getIn([
										'bitasset',
										'current_feed',
										'maintenance_collateral_ratio',
									]) / 1e3
								);
							},
						},
						{
							key: '_getStatusClass',
							value: function () {
								var e = this._getCollateralRatio(),
									t = this._getMR();
								return isNaN(e)
									? null
									: e < t
									? 'danger'
									: e < t + 0.5
									? 'warning'
									: '';
							},
						},
						{
							key: '_getCRTip',
							value: function () {
								var e = this._getStatusClass(),
									t = this._getMR();
								return e && '' !== e
									? 'danger' === e
										? v().translate('tooltip.cr_danger', {mr: t})
										: 'warning' === e
										? v().translate('tooltip.cr_warning', {mr: t})
										: null
									: null;
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props.object.toJS(),
									t = this._getCollateralRatio(),
									r =
										(R.Z.get_asset_amount(e.debt, this.props.debtAsset),
										this._getStatusClass());
								return (0, q.jsx)(m.Z, {
									placement: 'bottom',
									title: this._getCRTip(),
									children: (0, q.jsxs)('li', {
										className: y()('stressed-stat', this.props.className),
										onClick: this.props.onClick,
										children: [
											(0, q.jsx)('span', {
												children: (0, q.jsx)('span', {
													className: y()('value stat-primary', r),
													children: R.Z.format_number(t, 2),
												}),
											}),
											(0, q.jsx)('div', {
												className: 'stat-text',
												children: (0, q.jsx)(F(), {
													content: 'header.collateral_ratio',
												}),
											}),
										],
									}),
								});
							},
						},
					]),
					r
				);
			})(n.Component);
			jt(kt, 'propTypes', {
				debtAsset: E.Z.ChainAsset.isRequired,
				collateralAsset: E.Z.ChainAsset.isRequired,
			}),
				(kt = (0, I.Z)(kt));
			var St = (function (e) {
				yt(r, e);
				var t = vt(r);
				function r() {
					return ft(this, r), t.apply(this, arguments);
				}
				return (
					bt(r, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.object,
									r = e.account,
									n = t.getIn(['call_price', 'quote', 'asset_id']),
									o = t.getIn(['call_price', 'base', 'asset_id']);
								return (0, q.jsx)(
									kt,
									(function (e) {
										for (var t = 1; t < arguments.length; t++) {
											var r = null != arguments[t] ? arguments[t] : {};
											t % 2
												? ht(Object(r), !0).forEach(function (t) {
														jt(e, t, r[t]);
												  })
												: Object.getOwnPropertyDescriptors
												? Object.defineProperties(
														e,
														Object.getOwnPropertyDescriptors(r)
												  )
												: ht(Object(r)).forEach(function (t) {
														Object.defineProperty(
															e,
															t,
															Object.getOwnPropertyDescriptor(r, t)
														);
												  });
										}
										return e;
									})({debtAsset: n, collateralAsset: o, account: r}, this.props)
								);
							},
						},
					]),
					r
				);
			})(n.Component);
			jt(St, 'propTypes', {object: E.Z.ChainObject.isRequired});
			const wt = (St = (0, I.Z)(St));
			function At(e) {
				return (
					(At =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					At(e)
				);
			}
			function Ct(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Ot(e, t) {
				return (
					(Ot =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ot(e, t)
				);
			}
			function Pt(e, t) {
				if (t && ('object' === At(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function Tt(e) {
				return (
					(Tt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Tt(e)
				);
			}
			var Nt = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && Ot(e, t);
					})(a, e);
					var t,
						n,
						o,
						i,
						s =
							((o = a),
							(i = (function () {
								if ('undefined' == typeof Reflect || !Reflect.construct)
									return !1;
								if (Reflect.construct.sham) return !1;
								if ('function' == typeof Proxy) return !0;
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {})
										),
										!0
									);
								} catch (e) {
									return !1;
								}
							})()),
							function () {
								var e,
									t = Tt(o);
								if (i) {
									var r = Tt(this).constructor;
									e = Reflect.construct(t, arguments, r);
								} else e = t.apply(this, arguments);
								return Pt(this, e);
							});
					function a(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((t = s.call(this)).state = {
								isModalVisible: !1,
								volumeShowQuote: !0,
								selectedMarketPickerAsset: e.selectedMarketPickerAsset,
							}),
							t
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'componentWillMount',
								value: function () {
									null !== this.props.quoteAsset && this.props.baseAsset;
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									this.setState({
										selectedMarketPickerAsset: e.selectedMarketPickerAsset,
									});
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return !!e.marketReady;
								},
							},
							{
								key: '_addMarket',
								value: function (e, t) {
									var r = ''.concat(e, '_').concat(t);
									this.props.starredMarkets.has(r)
										? C.Z.removeStarMarket(e, t)
										: C.Z.addStarMarket(e, t);
								},
							},
							{
								key: 'changeVolumeBase',
								value: function () {
									this.setState({volumeShowQuote: !this.state.volumeShowQuote});
								},
							},
							{
								key: 'marketPicker',
								value: function (e) {
									var t = this.state.selectedMarketPickerAsset;
									(t = t && t == e ? null : e),
										this.setState({selectedMarketPickerAsset: t}),
										this.props.onToggleMarketPicker(t);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props,
										n = t.quoteAsset,
										o = t.baseAsset,
										i = t.starredMarkets,
										s = t.hasPrediction,
										a = t.feedPrice,
										l = t.showCallLimit,
										c = t.lowestCallPrice,
										u = t.marketReady,
										p = t.latestPrice,
										h = t.marketStats,
										f = t.account,
										m = o.get('symbol'),
										b = n.get('symbol'),
										y = ''.concat(b, '_').concat(m),
										g = i.has(y) ? 'gold-star' : 'grey-star',
										x = h.get('change'),
										_ =
											0 === parseFloat(x) || isNaN(x)
												? ''
												: parseFloat(x) < 0
												? 'negative'
												: 'positive',
										j = h.get('volumeBase'),
										k = h.get('volumeQuote'),
										S = isNaN(x) ? void 0 : x > 0 ? '+' + x : x,
										w = this.state.volumeShowQuote ? k : j,
										A = this.state.volumeShowQuote ? n : o,
										C = !1,
										P = n.get('id'),
										T = o.get('id'),
										Z = '1.3.0' === P ? T : '1.3.0' === T ? P : null,
										R = Z ? d.BQ.getAsset(Z) : null,
										B = '',
										M = null,
										E = 'exchange.settle',
										I = 'tooltip.settle_price';
									if (R && R.get('bitasset')) {
										if (f.toJS && f.has('call_orders'))
											for (
												var L = f.get('call_orders').toJS(), D = 0;
												D < L.length;
												D++
											) {
												var V = L[D];
												if (
													d.BQ.getObject(V).getIn([
														'call_price',
														'quote',
														'asset_id',
													]) === Z
												) {
													(B = V), (C = !0);
													break;
												}
											}
										var z = '1.3.0' == T ? n : '1.3.0' == P ? o : n;
										if (R.get('bitasset').get('settlement_fund') > 0)
											(E = 'exchange.global_settle'),
												(I = 'tooltip.global_settle_price'),
												(M = R.get('bitasset').get('settlement_price').toJS())
													.base.asset_id == o.get('id')
													? ((M.base.precision = o.get('precision')),
													  (M.quote.precision = n.get('precision')))
													: ((M.quote.precision = o.get('precision')),
													  (M.base.precision = n.get('precision'))),
												(M = new N.tA({
													quote: new N.xR({
														asset_id: M.quote.asset_id,
														precision: M.quote.precision,
														amount: M.quote.amount,
													}),
													base: new N.xR({
														asset_id: M.base.asset_id,
														precision: M.base.precision,
														amount: M.base.amount,
													}),
												}).toReal()),
												(M = '1.3.0' == T ? 1 / M : M);
										else if (z && a) {
											var H = z
												.getIn(['bitasset', 'options'])
												.toJS().force_settlement_offset_percent;
											M =
												'1.3.0' == T
													? a.toReal() / (1 + H / 1e4)
													: a.toReal() * (1 + H / 1e4);
										}
									}
									var U = r(112),
										W =
											!!this.state.selectedMarketPickerAsset &&
											this.state.selectedMarketPickerAsset == b,
										Q =
											!!this.state.selectedMarketPickerAsset &&
											this.state.selectedMarketPickerAsset == m;
									return (
										this.props.hasAnyPriceAlert,
										(0, q.jsx)('div', {
											className:
												'grid-block shrink no-padding overflow-visible top-bar',
											children: (0, q.jsxs)('div', {
												className: 'grid-block overflow-visible',
												children: [
													(0, q.jsxs)('div', {
														className: 'grid-block shrink',
														children: [
															'  ',
															(0, q.jsx)('a', {
																id: 'center-item',
																onClick: function () {
																	e._addMarket(
																		e.props.quoteAsset.get('symbol'),
																		e.props.baseAsset.get('symbol')
																	);
																},
																'data-intro': U.translate(
																	'walkthrough.favourite_button'
																),
																children: (0, q.jsx)(Y.Z, {
																	size: '1_5x',
																	className: g,
																	name: 'fi-star',
																	title: 'icons.fi_star.market',
																}),
															}),
															(0, q.jsx)(it.Z, {
																id: 'center-item',
																style: {marginLeft: 0},
																onClick: function () {
																	O.Z.switchMarket();
																},
																to: '/market/'.concat(m, '_').concat(b),
																'data-intro': U.translate(
																	'walkthrough.switch_button'
																),
																children: (0, q.jsx)(Y.Z, {
																	className: 'shuffle center-item',
																	name: 'shuffle',
																	title: 'icons.shuffle',
																}),
															}),
															(0, q.jsx)('div', {
																style: {
																	padding: '12px',
																	borderRight: '1px solid black',
																	borderLeft: '1px solid black',
																	height: '100%',
																},
																children: s
																	? (0, q.jsx)('a', {
																			className: 'market-symbol',
																			children: (0, q.jsx)('span', {
																				children: ''.concat(b, ' : ').concat(m),
																			}),
																	  })
																	: (0, q.jsxs)('div', {
																			style: {
																				padding: '0 5px',
																				fontSize: this.props.tinyScreen
																					? '13px'
																					: '18px',
																			},
																			children: [
																				(0, q.jsx)('span', {
																					onClick: this.marketPicker.bind(
																						this,
																						b
																					),
																					style: {
																						cursor: 'pointer',
																						color: W ? '#2196f3' : '',
																					},
																					children: (0, q.jsx)(G.Z, {
																						name: b,
																						replace: !0,
																						noTip: !0,
																					}),
																				}),
																				(0, q.jsx)('span', {
																					style: {padding: '0 5px'},
																					children: '/',
																				}),
																				(0, q.jsx)('span', {
																					onClick: this.marketPicker.bind(
																						this,
																						m
																					),
																					style: {
																						cursor: 'pointer',
																						color: Q ? '#2196f3' : '',
																					},
																					children: (0, q.jsx)(G.Z, {
																						name: m,
																						replace: !0,
																						noTip: !0,
																					}),
																				}),
																			],
																	  }),
															}),
														],
													}),
													(0, q.jsx)('div', {
														className: 'grid-block vertical',
														style: {overflow: 'visible'},
														children: (0, q.jsx)('div', {
															className:
																'grid-block wrap market-stats-container',
															children: (0, q.jsxs)('ul', {
																className: 'market-stats stats top-stats',
																style: {marginBottom: '0'},
																children: [
																	p
																		? (0, q.jsx)(dt, {
																				ignoreColorChange: !0,
																				ready: u,
																				price: p,
																				quote: n,
																				base: o,
																				market: y,
																				content: 'exchange.latest',
																		  })
																		: null,
																	(0, q.jsxs)('li', {
																		className:
																			'hide-order-1 stressed-stat daily_change ' +
																			_,
																		children: [
																			(0, q.jsxs)('span', {
																				children: [
																					(0, q.jsx)('b', {
																						className: 'value',
																						children: S ? (u ? S : 0) : '-',
																					}),
																					S &&
																						(0, q.jsx)('span', {
																							children: ' %',
																						}),
																				],
																			}),
																			(0, q.jsx)(F(), {
																				component: 'div',
																				className: 'stat-text',
																				content: 'account.hour_24',
																			}),
																		],
																	}),
																	j >= 0
																		? (0, q.jsx)(dt, {
																				ignoreColorChange: !0,
																				onClick:
																					this.changeVolumeBase.bind(this),
																				ready: u,
																				decimals: 0,
																				volume: !0,
																				price: w,
																				className: 'hide-order-2 clickable',
																				base: A,
																				market: y,
																				content: 'exchange.volume_24',
																		  })
																		: null,
																	!s && a
																		? (0, q.jsx)(dt, {
																				ignoreColorChange: !0,
																				toolTip:
																					v().translate('tooltip.feed_price'),
																				ready: u,
																				className: 'hide-order-3',
																				price: a.toReal(),
																				quote: n,
																				base: o,
																				market: y,
																				content: 'exchange.feed_price',
																		  })
																		: null,
																	!s && M
																		? (0, q.jsx)(dt, {
																				ignoreColorChange: !0,
																				toolTip: v().translate(I),
																				ready: u,
																				className: 'hide-order-4',
																				price: M,
																				quote: n,
																				base: o,
																				market: y,
																				content: E,
																		  })
																		: null,
																	C
																		? (0, q.jsx)(wt, {
																				object: B,
																				account: f,
																				className: 'hide-order-1',
																		  })
																		: null,
																	c && l
																		? (0, q.jsx)(dt, {
																				toolTip:
																					v().translate('tooltip.call_limit'),
																				ready: u,
																				className: 'hide-order-5 is-call',
																				price: c,
																				quote: n,
																				base: o,
																				market: y,
																				content: 'explorer.block.call_limit',
																		  })
																		: null,
																	a && l
																		? (0, q.jsx)(dt, {
																				toolTip: v().translate(
																					'tooltip.margin_price'
																				),
																				ready: u,
																				className: 'hide-order-6 is-call',
																				price: a.getSqueezePrice({real: !0}),
																				quote: n,
																				base: o,
																				market: y,
																				content: 'exchange.squeeze',
																		  })
																		: null,
																],
															}),
														}),
													}),
												],
											}),
										})
									);
								},
							},
						]) && Ct(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(n.Component),
				Zt = r(45287),
				Rt = r.n(Zt),
				Bt = r(66422);
			function Ft(e) {
				return (
					(Ft =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Ft(e)
				);
			}
			function Mt(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Et(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function It(e, t, r) {
				return (
					t && Et(e.prototype, t),
					r && Et(e, r),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function qt(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Lt(e, t);
			}
			function Lt(e, t) {
				return (
					(Lt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Lt(e, t)
				);
			}
			function Dt(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var r,
						n = zt(e);
					if (t) {
						var o = zt(this).constructor;
						r = Reflect.construct(n, arguments, o);
					} else r = n.apply(this, arguments);
					return Vt(this, r);
				};
			}
			function Vt(e, t) {
				if (t && ('object' === Ft(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function zt(e) {
				return (
					(zt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					zt(e)
				);
			}
			(function (e) {
				qt(r, e);
				var t = Dt(r);
				function r() {
					return Mt(this, r), t.apply(this, arguments);
				}
				return (
					It(r, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.baseSymbol,
									r = e.quoteSymbol;
								return (0, q.jsx)('thead', {
									children: (0, q.jsxs)('tr', {
										children: [
											(0, q.jsxs)('th', {
												style: {textAlign: 'right'},
												children: [
													(0, q.jsx)(F(), {content: 'exchange.price'}),
													(0, q.jsx)('br', {}),
													t
														? (0, q.jsxs)('span', {
																className: 'header-sub-title',
																children: [
																	'(',
																	(0, q.jsx)(G.Z, {name: t}),
																	'/',
																	(0, q.jsx)(G.Z, {name: r}),
																	')',
																],
														  })
														: null,
												],
											}),
											(0, q.jsxs)('th', {
												style: {textAlign: 'right'},
												children: [
													(0, q.jsx)(F(), {content: 'transfer.amount'}),
													(0, q.jsx)('br', {}),
													r
														? (0, q.jsxs)('span', {
																className: 'header-sub-title',
																children: [
																	'(',
																	(0, q.jsx)(G.Z, {name: r}),
																	')',
																],
														  })
														: null,
												],
											}),
											(0, q.jsxs)('th', {
												style: {textAlign: 'right'},
												children: [
													(0, q.jsx)(F(), {
														content: 'transaction.settlement_date',
													}),
													(0, q.jsx)('br', {}),
													(0, q.jsx)('span', {
														style: {visibility: 'hidden'},
														className: 'header-sub-title',
														children: 'd',
													}),
												],
											}),
										],
									}),
								});
							},
						},
					]),
					r
				);
			})(n.Component).defaultProps = {quoteSymbol: null, baseSymbol: null};
			var Ht = (function (e) {
				qt(r, e);
				var t = Dt(r);
				function r() {
					return Mt(this, r), t.apply(this, arguments);
				}
				return (
					It(r, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.base,
									r = e.quote,
									n = e.order,
									o = e.showSymbols,
									i =
										'1.3.0' == t.get('id')
											? n.getPrice() / (1 + n.offset_percent / 1e4)
											: n.getPrice() * (1 + n.offset_percent / 1e4),
									s = o ? ' ' + r.get('symbol') : null;
								return (0, q.jsxs)('tr', {
									children: [
										(0, q.jsx)('td', {
											className: 'text-center',
											style: {width: '6%'},
											children: ' ',
										}),
										(0, q.jsxs)('td', {
											children: [
												R.Z.format_number(i, r.get('precision')),
												' ',
												s,
											],
										}),
										(0, q.jsx)('td', {
											children: R.Z.format_number(
												n[
													n.isBid() ? 'amountToReceive' : 'amountForSale'
												]().getAmount({real: !0}),
												r.get('precision')
											),
										}),
										(0, q.jsx)('td', {
											children: R.Z.format_number(
												n[
													n.isBid() ? 'amountForSale' : 'amountToReceive'
												]().getAmount({real: !0}),
												t.get('precision')
											),
										}),
										(0, q.jsx)('td', {
											children: (0, q.jsx)(m.Z, {
												title: new Date(n.settlement_date).toString(),
												children: (0, q.jsx)('div', {
													style: {textAlign: 'right', whiteSpace: 'nowrap'},
													children: v().localize(new Date(n.settlement_date), {
														type: 'date',
														format:
															-1 !== Rt()().toLowerCase().indexOf('en-us')
																? 'market_history_us'
																: 'market_history',
													}),
												}),
											}),
										}),
									],
								});
							},
						},
					]),
					r
				);
			})(n.Component);
			Ht.defaultProps = {showSymbols: !1, invert: !1};
			var Ut = (function (e) {
				qt(r, e);
				var t = Dt(r);
				function r() {
					return Mt(this, r), t.apply(this, arguments);
				}
				return (
					It(r, [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return (
									e.currentAccount !== this.props.currentAccount ||
									e.orders !== this.props.orders
								);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.orders,
									r = e.base,
									n = e.quote,
									o = null,
									i = (0, q.jsx)('tbody', {
										children: (0, q.jsx)('tr', {
											children: (0, q.jsx)('td', {
												className: 'centric-items',
												style: {lineHeight: 4, fontStyle: 'italic'},
												colSpan: '5',
												children: (0, q.jsx)(F(), {
													content: 'account.no_orders',
												}),
											}),
										}),
									});
								return (
									t.size > 0 &&
										r &&
										n &&
										(o = t
											.sort(function (e, t) {
												return e.isBefore(t) ? -1 : 1;
											})
											.map(function (e) {
												return Date.now() < e.settlement_date
													? (0, q.jsx)(Ht, {order: e, base: r, quote: n}, e.id)
													: null;
											})
											.toArray()),
									(0, q.jsx)(Bt.Z, {
										ref: 'contentTransition',
										component: 'tbody',
										transitionName: 'newrow',
										children: o || i,
									})
								);
							},
						},
					]),
					r
				);
			})(n.Component);
			(Ut.defaultProps = {
				base: {},
				quote: {},
				orders: {},
				quoteSymbol: '',
				baseSymbol: '',
			}),
				(Ut.propTypes = {
					base: A().object.isRequired,
					quote: A().object.isRequired,
					orders: A().object.isRequired,
					quoteSymbol: A().string.isRequired,
					baseSymbol: A().string.isRequired,
				});
			const Wt = Ut;
			var Gt = r(9676);
			function Qt(e) {
				return (
					(Qt =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Qt(e)
				);
			}
			function Kt(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Yt(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Jt(e, t) {
				return (
					(Jt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Jt(e, t)
				);
			}
			function $t(e, t) {
				if (t && ('object' === Qt(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function Xt(e) {
				return (
					(Xt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Xt(e)
				);
			}
			function er(e) {
				var t = e.baseSymbol,
					r = e.quoteSymbol,
					n = e.selected,
					o = e.onCancelToggle;
				return (0, q.jsx)('thead', {
					children: (0, q.jsxs)('tr', {
						children: [
							(0, q.jsx)('th', {
								style: {width: '6%', textAlign: 'center'},
								children: o
									? (0, q.jsx)(m.Z, {
											title: v().translate('exchange.cancel_order_select_all'),
											placement: 'left',
											children: (0, q.jsx)(Gt.Z, {
												className: 'order-cancel-toggle',
												checked: n,
												onChange: o,
											}),
									  })
									: null,
							}),
							(0, q.jsx)('th', {
								style: {textAlign: 'right'},
								children: (0, q.jsx)(F(), {
									className: 'header-sub-title',
									content: 'exchange.price',
								}),
							}),
							(0, q.jsx)('th', {
								style: {textAlign: 'right'},
								children: t
									? (0, q.jsx)('span', {
											className: 'header-sub-title',
											children: (0, q.jsx)(G.Z, {dataPlace: 'top', name: r}),
									  })
									: null,
							}),
							(0, q.jsx)('th', {
								style: {textAlign: 'right'},
								children: t
									? (0, q.jsx)('span', {
											className: 'header-sub-title',
											children: (0, q.jsx)(G.Z, {dataPlace: 'top', name: t}),
									  })
									: null,
							}),
							(0, q.jsx)('th', {
								style: {textAlign: 'right'},
								children: (0, q.jsx)(F(), {
									className: 'header-sub-title',
									content: 'transaction.expiration',
								}),
							}),
						],
					}),
				});
			}
			er.defaultProps = {quoteSymbol: null, baseSymbol: null};
			var tr = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && Jt(e, t);
					})(s, e);
					var t,
						r,
						n,
						o,
						i =
							((n = s),
							(o = (function () {
								if ('undefined' == typeof Reflect || !Reflect.construct)
									return !1;
								if (Reflect.construct.sham) return !1;
								if ('function' == typeof Proxy) return !0;
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {})
										),
										!0
									);
								} catch (e) {
									return !1;
								}
							})()),
							function () {
								var e,
									t = Xt(n);
								if (o) {
									var r = Xt(this).constructor;
									e = Reflect.construct(t, arguments, r);
								} else e = t.apply(this, arguments);
								return $t(this, e);
							});
					function s() {
						return Kt(this, s), i.apply(this, arguments);
					}
					return (
						(t = s),
						(r = [
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.style,
										r = e.className,
										n = e.innerClass,
										o = e.innerStyle,
										i = e.headerStyle,
										s = e.noHeader,
										a = e.isSelected,
										l = e.tinyScreen,
										c = e.activeTab,
										u = e.baseSymbol,
										d = e.quoteSymbol,
										p = e.contentContainer,
										h = e.footerContainer,
										f = e.onCancelToggle;
									return (0, q.jsx)(
										'div',
										{
											style: t,
											className: r,
											children: (0, q.jsxs)('div', {
												className: n,
												style: o,
												children: [
													s
														? null
														: (0, q.jsxs)('div', {
																style: i,
																className: 'exchange-content-header',
																children: [
																	'my_orders' == c
																		? (0, q.jsx)(F(), {
																				content: 'exchange.my_orders',
																		  })
																		: null,
																	'open_settlement' == c
																		? (0, q.jsx)(F(), {
																				content: 'exchange.settle_orders',
																		  })
																		: null,
																],
														  }),
													(0, q.jsx)('div', {
														className:
															'grid-block shrink left-orderbook-header market-right-padding-only',
														children: (0, q.jsx)('table', {
															className:
																'table order-table text-right fixed-table market-right-padding',
															children: (0, q.jsx)(er, {
																baseSymbol: u,
																quoteSymbol: d,
																selected: a,
																onCancelToggle: 'my_orders' == c ? f : null,
															}),
														}),
													}),
													(0, q.jsx)('div', {
														className:
															'table-container grid-block market-right-padding-only no-overflow',
														ref: 'container',
														style: {
															overflow: 'hidden',
															minHeight: l ? 260 : 0,
															maxHeight: 190,
															lineHeight: '13px',
														},
														children: (0, q.jsx)('table', {
															className:
																'table order-table table-highlight-hover table-hover no-stripes text-right fixed-table market-right-padding',
															children: p,
														}),
													}),
													h,
												],
											}),
										},
										'open_orders'
									);
								},
							},
						]) && Yt(t.prototype, r),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						s
					);
				})(n.Component),
				rr = r(25108);
			function nr(e) {
				return (
					(nr =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					nr(e)
				);
			}
			function or(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			function ir(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function sr(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function ar(e, t, r) {
				return (
					t && sr(e.prototype, t),
					r && sr(e, r),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function lr(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && cr(e, t);
			}
			function cr(e, t) {
				return (
					(cr =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					cr(e, t)
				);
			}
			function ur(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var r,
						n = hr(e);
					if (t) {
						var o = hr(this).constructor;
						r = Reflect.construct(n, arguments, o);
					} else r = n.apply(this, arguments);
					return dr(this, r);
				};
			}
			function dr(e, t) {
				if (t && ('object' === nr(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return pr(e);
			}
			function pr(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function hr(e) {
				return (
					(hr = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					hr(e)
				);
			}
			function fr(e) {
				var t = e.order,
					r = e.selected,
					n = e.base,
					o = e.quote,
					i = e.onCheckCancel,
					s = t.isBid(),
					a = t.isCall(),
					l = a
						? 'orderHistoryCall'
						: s
						? 'orderHistoryBid'
						: 'orderHistoryAsk';
				return (0, q.jsxs)(
					'tr',
					{
						className: l,
						children: [
							(0, q.jsx)('td', {
								className: 'text-center',
								style: {width: '6%'},
								children: a
									? null
									: (0, q.jsx)(Gt.Z, {
											className: 'orderCancel',
											checked: r,
											onChange: i,
									  }),
							}),
							(0, q.jsx)('td', {
								className: l,
								style: {paddingLeft: 10},
								children: (0, q.jsx)(W, {
									price: t.getPrice(),
									base: n,
									quote: o,
								}),
							}),
							(0, q.jsxs)('td', {
								children: [
									R.Z.format_number(
										t[s ? 'amountToReceive' : 'amountForSale']().getAmount({
											real: !0,
										}),
										o.get('precision')
									),
									' ',
								],
							}),
							(0, q.jsxs)('td', {
								children: [
									R.Z.format_number(
										t[s ? 'amountForSale' : 'amountToReceive']().getAmount({
											real: !0,
										}),
										n.get('precision')
									),
									' ',
								],
							}),
							(0, q.jsx)('td', {
								children: (0, q.jsx)(m.Z, {
									title: t.expiration.toLocaleString(),
									children: (0, q.jsx)('div', {
										style: {textAlign: 'right', whiteSpace: 'nowrap'},
										children: a
											? null
											: v().localize(new Date(t.expiration), {
													type: 'date',
													format: 'short_custom',
											  }),
									}),
								}),
							}),
						],
					},
					t.id
				);
			}
			var mr = (function (e) {
					lr(r, e);
					var t = ur(r);
					function r() {
						return ir(this, r), t.apply(this, arguments);
					}
					return (
						ar(r, [
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return (
										e.order.for_sale !== this.props.order.for_sale ||
										e.order.id !== this.props.order.id ||
										e.quote !== this.props.quote ||
										e.base !== this.props.base ||
										e.order.market_base !== this.props.order.market_base ||
										e.selected !== this.props.selected
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.base,
										r = e.quote,
										n = e.order,
										o = e.selected;
									return (0, q.jsx)(
										fr,
										{
											order: n,
											selected: o,
											base: t,
											quote: r,
											onCheckCancel: this.props.onCheckCancel.bind(this),
										},
										n.id
									);
								},
							},
						]),
						r
					);
				})(n.Component),
				br = (function (e) {
					lr(r, e);
					var t = ur(r);
					function r(e) {
						var n;
						return (
							ir(this, r),
							((n = t.call(this)).state = {
								activeTab: e.activeTab,
								rowCount: 20,
								showAll: !1,
								selectedOrders: [],
							}),
							(n._getOrders = n._getOrders.bind(pr(n))),
							n
						);
					}
					return (
						ar(r, [
							{
								key: 'shouldComponentUpdate',
								value: function (e, t) {
									return (
										e.baseSymbol !== this.props.baseSymbol ||
										e.quoteSymbol !== this.props.quoteSymbol ||
										e.className !== this.props.className ||
										e.activeTab !== this.props.activeTab ||
										t.activeTab !== this.state.activeTab ||
										t.showAll !== this.state.showAll ||
										e.currentAccount !== this.props.currentAccount ||
										t.selectedOrders !== this.state.selectedOrders ||
										e.settleOrders !== this.props.settleOrders
									);
								},
							},
							{
								key: 'componentDidMount',
								value: function () {
									this.props.hideScrollbars || this.updateContainer(1);
								},
							},
							{
								key: 'componentDidUpdate',
								value: function (e) {
									var t = this.props.hideScrollbars,
										r = this.state.showAll;
									e.showAll != r &&
										(r && !t
											? this.updateContainer(2)
											: r || t
											? r && t
												? this.updateContainer(1)
												: this.updateContainer(0)
											: this.updateContainer(3));
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									e.activeTab !== this.state.activeTab &&
										this.changeTab(e.activeTab),
										(e.baseSymbol === this.props.baseSymbol &&
											e.quoteSymbol === this.props.quoteSymbol) ||
											(this.setState({showAll: !1}),
											this.updateContainer(0),
											this.props.hideScrollbars || this.updateContainer(1)),
										e.hideScrollbars !== this.props.hideScrollbars &&
											(this.updateContainer(0),
											e.hideScrollbars || this.updateContainer(1));
								},
							},
							{
								key: 'updateContainer',
								value: function () {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: 2,
										t = this.refs.view.refs.container,
										r = this.refs.contentTransition;
									t &&
										(0 == e
											? ((t.scrollTop = 0), S().destroy(t))
											: 1 == e
											? (S().initialize(t), this.updateContainer(3))
											: 2 == e
											? S().update(t)
											: 3 == e && ((t.scrollTop = 0), S().update(t)),
										r && r.resetAnimation());
								},
							},
							{
								key: '_onSetShowAll',
								value: function () {
									this.setState({showAll: !this.state.showAll});
								},
							},
							{
								key: 'changeTab',
								value: function (e) {
									C.Z.changeViewSetting({ordersTab: e}),
										this.setState({activeTab: e}),
										this.updateContainer(3),
										setTimeout(ee.Z.rebuild, 1e3);
								},
							},
							{
								key: 'onCheckCancel',
								value: function (e, t) {
									var r = this.state.selectedOrders;
									if (t.target.checked)
										this.setState({selectedOrders: r.concat([e])});
									else {
										var n = r.indexOf(e);
										n > -1 &&
											this.setState({
												selectedOrders: r.slice(0, n).concat(r.slice(n + 1)),
											});
									}
								},
							},
							{
								key: 'cancelSelected',
								value: function () {
									this._cancelLimitOrders.call(this);
								},
							},
							{
								key: 'resetSelected',
								value: function () {
									this.setState({selectedOrders: []});
								},
							},
							{
								key: 'onCancelToggle',
								value: function (e) {
									var t = this._getOrders(),
										r = [];
									t.forEach(function (e) {
										r.push(e.id);
									}),
										e.target.checked
											? this.setState({selectedOrders: r})
											: this.resetSelected();
								},
							},
							{
								key: '_cancelLimitOrders',
								value: function () {
									var e = this;
									O.Z.cancelLimitOrders(
										this.props.currentAccount.get('id'),
										this.state.selectedOrders
									)
										.then(function () {
											e.resetSelected();
										})
										.catch(function (e) {
											rr.log('cancel orders error:', e);
										});
								},
							},
							{
								key: '_getOrders',
								value: function () {
									var e,
										t = this.props,
										r = t.currentAccount,
										n = t.base,
										o = t.quote,
										i = t.feedPrice,
										s = r.get('orders'),
										a = r.get('call_orders'),
										l = n.get('id'),
										c = o.get('id'),
										u =
											(or((e = {}), n.get('id'), {
												precision: n.get('precision'),
											}),
											or(e, o.get('id'), {precision: o.get('precision')}),
											e),
										p = s
											.toArray()
											.map(function (e) {
												var t = d.BQ.getObject(e);
												if (!t) return null;
												var r = t.getIn(['sell_price', 'base', 'asset_id']),
													n = t.getIn(['sell_price', 'quote', 'asset_id']);
												return (r === l && n === c) || (r === c && n === l)
													? new N.eN(t.toJS(), u, o.get('id'))
													: void 0;
											})
											.filter(function (e) {
												return !!e;
											}),
										h = a
											.toArray()
											.map(function (e) {
												try {
													var t = d.BQ.getObject(e);
													if (!t) return null;
													var r = t.getIn(['call_price', 'base', 'asset_id']),
														n = t.getIn(['call_price', 'quote', 'asset_id']);
													if ((r === l && n === c) || (r === c && n === l))
														return i
															? new N.Gy(t.toJS(), u, o.get('id'), i)
															: null;
												} catch (e) {
													return null;
												}
											})
											.filter(function (e) {
												return !!e;
											})
											.filter(function (e) {
												try {
													return e.isMarginCalled();
												} catch (e) {
													return !1;
												}
											});
									return p.concat(h);
								},
							},
							{
								key: 'render',
								value: function () {
									var e,
										t,
										r = this,
										o = this.props,
										i = o.base,
										s = o.quote,
										a = o.quoteSymbol,
										l = o.baseSymbol,
										c = o.settleOrders,
										u = this.state,
										d = u.activeTab,
										p = u.showAll,
										h = u.rowCount,
										f = u.selectedOrders;
									if (!i || !s) return null;
									var m = 0;
									if (!d || 'my_orders' == d) {
										var b = this._getOrders(),
											y = (0, q.jsx)('tr', {
												children: (0, q.jsx)('td', {
													className: 'centric-items',
													style: {lineHeight: 4, fontStyle: 'italic'},
													colSpan: '5',
													children: (0, q.jsx)(F(), {
														content: 'account.no_orders',
													}),
												}),
											}),
											g = b
												.filter(function (e) {
													return e.isBid();
												})
												.sort(function (e, t) {
													return t.getPrice() - e.getPrice();
												})
												.map(function (e) {
													var t = e.getPrice();
													return (0,
													q.jsx)(mr, {price: t, order: e, base: i, quote: s, selected: r.state.selectedOrders.length > 0 && r.state.selectedOrders.includes(e.id), onCancel: r.props.onCancel.bind(r, e.id), onCheckCancel: r.onCheckCancel.bind(r, e.id)}, e.id);
												}),
											v = b
												.filter(function (e) {
													return !e.isBid();
												})
												.sort(function (e, t) {
													return e.getPrice() - t.getPrice();
												})
												.map(function (e) {
													var t = e.getPrice();
													return (0,
													q.jsx)(mr, {price: t, order: e, base: i, quote: s, selected: r.state.selectedOrders.length > 0 && r.state.selectedOrders.includes(e.id), onCancel: r.props.onCancel.bind(r, e.id), onCheckCancel: r.onCheckCancel.bind(r, e.id)}, e.id);
												}),
											x = [];
										v.length && (x = x.concat(v)),
											g.length && (x = x.concat(g)),
											x.sort(function (e, t) {
												return e.props.price - t.props.price;
											}),
											(m = x.length) > 0 && !p && x.splice(h, x.length);
										var _ = (0, q.jsx)('div', {
											style: {display: 'grid'},
											children: (0, q.jsx)(X.Z, {
												onClick: this.cancelSelected.bind(this),
												children: (0, q.jsx)(F(), {
													content: 'exchange.cancel_selected_orders',
												}),
											}),
										});
										(e = (0, q.jsx)(Bt.Z, {
											ref: 'contentTransition',
											component: 'tbody',
											transitionName: 'newrow',
											children: x.length ? x : y,
										})),
											(t =
												m > 11
													? (0, q.jsxs)(n.Fragment, {
															children: [
																(0, q.jsx)('div', {
																	className: 'orderbook-showall',
																	children: (0, q.jsx)('a', {
																		onClick: this._onSetShowAll.bind(this),
																		children: (0, q.jsx)(F(), {
																			content: p
																				? 'exchange.hide'
																				: 'exchange.show_all_orders',
																			rowcount: m,
																		}),
																	}),
																}),
																f.length > 0 ? _ : null,
															],
													  })
													: f.length > 0
													? _
													: null);
									}
									d &&
										'open_settlement' == d &&
										((m = c.length) > 0 && !p && c.splice(h, c.length),
										(e = (0, q.jsx)(
											Wt,
											{
												orders: c,
												base: i,
												quote: s,
												baseSymbol: l,
												quoteSymbol: a,
											},
											'settle_orders'
										)),
										(t =
											m > 11 &&
											(0, q.jsx)('div', {
												className: 'orderbook-showall',
												children: (0, q.jsx)('a', {
													onClick: this._onSetShowAll.bind(this),
													children: (0, q.jsx)(F(), {
														content: p
															? 'exchange.hide'
															: 'exchange.show_all_orders',
														rowcount: m,
													}),
												}),
											})));
									var j =
										this.state.selectedOrders.length > 0 &&
										this.state.selectedOrders.length == m;
									return (0, q.jsx)(tr, {
										ref: 'view',
										style: this.props.style,
										className: this.props.className,
										innerClass: this.props.innerClass,
										innerStyle: this.props.innerStyle,
										headerStyle: this.props.headerStyle,
										noHeader: this.props.noHeader,
										isSelected: j,
										tinyScreen: this.props.tinyScreen,
										activeTab: d,
										baseSymbol: l,
										quoteSymbol: a,
										contentContainer: e,
										footerContainer: t,
										onCancelToggle: this.onCancelToggle.bind(this),
									});
								},
							},
						]),
						r
					);
				})(n.Component);
			(br.defaultProps = {
				base: {},
				quote: {},
				orders: {},
				quoteSymbol: '',
				baseSymbol: '',
			}),
				(br.propTypes = {
					base: A().object.isRequired,
					quote: A().object.isRequired,
					orders: A().object.isRequired,
					quoteSymbol: A().string.isRequired,
					baseSymbol: A().string.isRequired,
				});
			var yr = r(55132),
				gr = r(66261);
			function vr(e) {
				return (
					(vr =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					vr(e)
				);
			}
			function xr(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function _r(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function jr(e, t, r) {
				return (
					t && _r(e.prototype, t),
					r && _r(e, r),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function kr(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Sr(e, t);
			}
			function Sr(e, t) {
				return (
					(Sr =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Sr(e, t)
				);
			}
			function wr(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var r,
						n = Or(e);
					if (t) {
						var o = Or(this).constructor;
						r = Reflect.construct(n, arguments, o);
					} else r = n.apply(this, arguments);
					return Ar(this, r);
				};
			}
			function Ar(e, t) {
				if (t && ('object' === vr(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Cr(e);
			}
			function Cr(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Or(e) {
				return (
					(Or = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Or(e)
				);
			}
			function Pr(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			var Tr = (function (e) {
				kr(r, e);
				var t = wr(r);
				function r() {
					return xr(this, r), t.apply(this, arguments);
				}
				return (
					jr(r, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.orderRows,
									r = e.noOrders,
									n = e.isBid,
									o = e.id;
								return (0, q.jsx)(Bt.Z, {
									id: o,
									ref: n ? 'bidTransition' : 'askTransaction',
									className: 'transition-container clickable',
									component: 'div',
									transitionName: 'newrow',
									children:
										t.length > 0
											? t
											: r ||
											  (0, q.jsx)('div', {
													className: 'sticky-table-row',
													children: (0, q.jsx)('td', {
														className: 'cell no-orders',
														colSpan: '3',
														children: n
															? (0, q.jsx)(F(), {content: 'exchange.no_bids'})
															: (0, q.jsx)(F(), {content: 'exchange.no_asks'}),
													}),
											  }),
								});
							},
						},
					]),
					r
				);
			})(n.Component);
			Pr(Tr, 'propTypes', {
				orderRows: A().array.isRequired,
				noOrders: A().bool.isRequired,
				isBid: A().bool.isRequired,
			});
			var Nr = (function (e) {
					kr(r, e);
					var t = wr(r);
					function r() {
						return xr(this, r), t.apply(this, arguments);
					}
					return (
						jr(r, [
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return (
										e.order.market_base === this.props.order.market_base &&
										(e.order.ne(this.props.order) ||
											e.index !== this.props.index ||
											e.currentAccount !== this.props.currentAccount ||
											e.isPanelActive !== this.props.isPanelActive ||
											e.horizontal !== this.props.horizontal)
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.order,
										r = e.quote,
										n = e.base,
										o = e.final,
										i = t.isBid(),
										s = t.isCall()
											? 'orderHistoryCall'
											: i
											? 'orderHistoryBid'
											: 'orderHistoryAsk',
										a = (0, q.jsx)(W, {price: t.getPrice(), quote: r, base: n});
									return (0, q.jsxs)('div', {
										onClick: this.props.onClick,
										className: y()(
											'sticky-table-row order-row',
											{'final-row': o},
											{'my-order': t.isMine(this.props.currentAccount)}
										),
										children: [
											(0, q.jsx)('div', {
												className: 'cell left',
												children: R.Z.format_number(
													t[
														i ? 'amountForSale' : 'amountToReceive'
													]().getAmount({real: !0}),
													n.get('precision')
												),
											}),
											(0, q.jsx)('div', {
												className: 'cell',
												children: R.Z.format_number(
													t[
														i ? 'amountToReceive' : 'amountForSale'
													]().getAmount({real: !0}),
													r.get('precision')
												),
											}),
											(0, q.jsx)('div', {
												className: 'cell '.concat(s, ' right'),
												children: a,
											}),
										],
									});
								},
							},
						]),
						r
					);
				})(n.Component),
				Zr = function (e) {
					return e ? e.getBoundingClientRect().height : 0;
				},
				Rr = (function (e) {
					kr(r, e);
					var t = wr(r);
					function r() {
						return xr(this, r), t.apply(this, arguments);
					}
					return (
						jr(r, [
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return (
										e.order.ne(this.props.order) ||
										e.position !== this.props.position ||
										e.index !== this.props.index ||
										e.currentAccount !== this.props.currentAccount ||
										e.quoteTotal !== this.props.quoteTotal
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.order,
										r = e.quote,
										n = e.base,
										o = (e.position, e.quoteTotal),
										i = t.isBid(),
										s = t.isCall()
											? 'orderHistoryCall'
											: i
											? 'orderHistoryBid'
											: 'orderHistoryAsk',
										a = (0, q.jsx)(W, {price: t.getPrice(), quote: r, base: n}),
										l = i
											? R.Z.format_number(
													t.amountToReceive().getAmount({real: !0}),
													r.get('precision')
											  )
											: R.Z.format_number(
													t.amountForSale().getAmount({real: !0}),
													r.get('precision')
											  ),
										c = i
											? R.Z.format_number(
													t.amountForSale().getAmount({real: !0}),
													n.get('precision')
											  )
											: R.Z.format_number(
													t.amountToReceive().getAmount({real: !0}),
													n.get('precision')
											  ),
										u = o ? t.totalToReceive() : t.totalForSale(),
										d = o ? t.totalForSale() : t.totalToReceive(),
										p = o ? r : n,
										h = i
											? R.Z.format_number(
													u.getAmount({real: !0}),
													p.get('precision')
											  )
											: R.Z.format_number(
													d.getAmount({real: !0}),
													p.get('precision')
											  );
									return (0, q.jsx)(m.Z, {
										title: 'Total: ' + h,
										placement: 'right',
										children: (0, q.jsxs)('tr', {
											onClick: this.props.onClick,
											className: t.isMine(this.props.currentAccount)
												? 'my-order'
												: '',
											children: [
												(0, q.jsx)('td', {
													style: {width: '33.5%'},
													className: s,
													children: a,
												}),
												(0, q.jsxs)('td', {children: [' ', l]}),
												(0, q.jsx)('td', {
													className: 'column-hide-xs',
													children: c,
												}),
											],
										}),
									});
								},
							},
						]),
						r
					);
				})(n.Component),
				Br = (function (e) {
					kr(r, e);
					var t = wr(r);
					function r() {
						return xr(this, r), t.apply(this, arguments);
					}
					return (
						jr(r, [
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return (
										e.order.market_base === this.props.order.market_base &&
										(e.order.ne(this.props.order) ||
											e.index !== this.props.index ||
											e.currentAccount !== this.props.currentAccount)
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.order,
										r = e.quote,
										n = e.base,
										o = e.final,
										i = t.isBid(),
										s = i ? 'orderHistoryBid' : 'orderHistoryAsk',
										a = (0, q.jsx)(W, {price: t.getPrice(), quote: r, base: n});
									return (0, q.jsxs)('div', {
										onClick: this.props.onClick,
										className: y()('sticky-table-row order-row', {
											'final-row': o,
										}),
										children: [
											(0, q.jsx)('div', {
												className: 'cell left',
												children: R.Z.format_number(
													t[
														i ? 'amountForSale' : 'amountToReceive'
													]().getAmount({real: !0}),
													n.get('precision')
												),
											}),
											(0, q.jsx)('div', {
												className: 'cell',
												children: R.Z.format_number(
													t[
														i ? 'amountToReceive' : 'amountForSale'
													]().getAmount({real: !0}),
													r.get('precision')
												),
											}),
											(0, q.jsx)('div', {
												className: 'cell '.concat(s, ' right'),
												children: a,
											}),
										],
									});
								},
							},
						]),
						r
					);
				})(n.Component),
				Fr = (function (e) {
					kr(r, e);
					var t = wr(r);
					function r() {
						return xr(this, r), t.apply(this, arguments);
					}
					return (
						jr(r, [
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return (
										e.order.ne(this.props.order) ||
										e.position !== this.props.position ||
										e.index !== this.props.index ||
										e.currentAccount !== this.props.currentAccount ||
										e.quoteTotal !== this.props.quoteTotal
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.order,
										r = e.quote,
										n = e.base,
										o = e.position,
										i = e.quoteTotal,
										s = t.isBid(),
										a = s ? 'orderHistoryBid' : 'orderHistoryAsk',
										l = (0, q.jsx)(W, {price: t.getPrice(), quote: r, base: n}),
										c = s
											? R.Z.format_number(
													t.amountToReceive().getAmount({real: !0}),
													r.get('precision')
											  )
											: R.Z.format_number(
													t.amountForSale().getAmount({real: !0}),
													r.get('precision')
											  ),
										u = s
											? R.Z.format_number(
													t.amountForSale().getAmount({real: !0}),
													n.get('precision')
											  )
											: R.Z.format_number(
													t.amountToReceive().getAmount({real: !0}),
													n.get('precision')
											  ),
										d = i ? t.totalToReceive() : t.totalForSale(),
										p = i ? t.totalForSale() : t.totalToReceive(),
										h = i ? r : n,
										f = s
											? R.Z.format_number(
													d.getAmount({real: !0}),
													h.get('precision')
											  )
											: R.Z.format_number(
													p.getAmount({real: !0}),
													h.get('precision')
											  );
									return (0, q.jsxs)('tr', {
										onClick: this.props.onClick,
										children: [
											'left' === o
												? (0, q.jsx)('td', {
														className: 'column-hide-xs',
														children: f,
												  })
												: (0, q.jsx)('td', {
														style: {width: '25%'},
														className: a,
														children: l,
												  }),
											(0, q.jsx)('td', {children: 'left' === o ? u : c}),
											(0, q.jsx)('td', {children: 'left' === o ? c : u}),
											'right' === o
												? (0, q.jsx)('td', {
														className: 'column-hide-xs',
														children: f,
												  })
												: (0, q.jsx)('td', {
														style: {width: '25%'},
														className: a,
														children: l,
												  }),
										],
									});
								},
							},
						]),
						r
					);
				})(n.Component),
				Mr = (function (e) {
					kr(r, e);
					var t = wr(r);
					function r() {
						var e;
						return (
							xr(this, r), ((e = t.call(this)).state = {groupLimit: ''}), e
						);
					}
					return (
						jr(
							r,
							[
								{
									key: 'render',
									value: function () {
										var e = this,
											t = 0 === this.props.trackedGroupsConfig.length,
											r = this.props.trackedGroupsConfig.map(function (t) {
												return e.props.globalSettingsSelector
													? (0, q.jsx)(
															$.Z.Option,
															{value: t, children: ''.concat(t / 100, '%')},
															t
													  )
													: (0, q.jsx)(
															'option',
															{value: t, children: ''.concat(t / 100, '%')},
															t
													  );
											});
										return this.props.globalSettingsSelector
											? (0, q.jsxs)($.Z, {
													placeholder: 'Select option',
													style: {width: '100%'},
													value: this.props.currentGroupOrderLimit,
													disabled: t,
													onChange:
														this.props.handleGroupOrderLimitChange.bind(this),
													children: [
														t
															? (0, q.jsx)($.Z.Option, {
																	value: 0,
																	children: (0, q.jsx)(F(), {
																		content: 'tooltip.no_groups_available',
																	}),
															  })
															: (0, q.jsx)($.Z.Option, {
																	value: 0,
																	children: (0, q.jsx)(F(), {
																		content: 'settings.disabled',
																	}),
															  }),
														r,
													],
											  })
											: (0, q.jsx)(m.Z, {
													placement: 'bottom',
													title: t
														? v().translate('tooltip.no_groups_available')
														: null,
													children: (0, q.jsxs)('select', {
														value: this.state.groupLimit,
														onChange: this.props.handleGroupOrderLimitChange,
														className: 'settings-select',
														style: t ? {cursor: 'not-allowed'} : null,
														children: [
															(0, q.jsx)(F(), {
																content: 'exchange.group_order_limit',
																component: 'option',
																value: '0',
															}),
															r,
														],
													}),
											  });
									},
								},
							],
							[
								{
									key: 'getDerivedStateFromProps',
									value: function (e) {
										return {groupLimit: e.currentGroupOrderLimit};
									},
								},
							]
						),
						r
					);
				})(n.Component),
				Er = (function (e) {
					kr(r, e);
					var t = wr(r);
					function r(e) {
						var o;
						return (
							xr(this, r),
							Pr(Cr((o = t.call(this))), 'queryStickyTable', function (e) {
								return o.verticalStickyTable.current.table.querySelector(e);
							}),
							Pr(Cr(o), 'verticalScrollBar', function () {
								return o.queryStickyTable('#y-scrollbar');
							}),
							Pr(Cr(o), 'toggleSpreadValue', function () {
								o.setState({
									displaySpreadAsPercentage: !o.state.displaySpreadAsPercentage,
								});
							}),
							Pr(Cr(o), 'toggleAutoScroll', function () {
								o.setState({autoScroll: !o.state.autoScroll});
							}),
							(o.state = {
								flip: e.flipOrderBook,
								showAllBids: !1,
								showAllAsks: !1,
								rowCount: 100,
								autoScroll: !1,
								quoteTotalBids: !1,
								quoteTotalAsks: !1,
							}),
							(o.verticalStickyTable = n.createRef()),
							(o.centerText = n.createRef()),
							o
						);
					}
					return (
						jr(r, [
							{
								key: 'shouldComponentUpdate',
								value: function (e, t) {
									if (
										this.props.horizontal &&
										this.props.hideScrollbars &&
										t.showAllAsks != this.state.showAllAsks
									) {
										var r = this.refs.hor_asks;
										t.showAllAsks
											? (S().initialize(r), this.psUpdate())
											: S().destroy(r),
											this.refs.askTransition.resetAnimation(),
											this.refs.hor_asks && (this.refs.hor_asks.scrollTop = 0);
									}
									if (
										this.props.horizontal &&
										this.props.hideScrollbars &&
										t.showAllBids != this.state.showAllBids
									) {
										var n = this.refs.hor_bids;
										t.showAllBids
											? (S().initialize(n), this.psUpdate())
											: S().destroy(n),
											this.refs.bidTransition.resetAnimation(),
											this.refs.hor_bids && (this.refs.hor_bids.scrollTop = 0);
									}
									return !0;
								},
							},
							{
								key: 'componentDidUpdate',
								value: function (e, t, r) {
									var n = this.props;
									(n.base.get('id') === e.base.get('id') &&
										n.quote.get('id') === e.quote.get('id')) ||
										(this.refs.askTransition &&
											(this.refs.askTransition.resetAnimation(),
											this.refs.hor_asks && (this.refs.hor_asks.scrollTop = 0),
											this.refs.hor_bids && (this.refs.hor_bids.scrollTop = 0)),
										this.refs.bidTransition &&
											this.refs.bidTransition.resetAnimation(),
										this.refs.vert_bids && (this.refs.vert_bids.scrollTop = 0),
										this.props.horizontal ||
											this.setState({autoScroll: this.state.autoScroll})),
										this.scrollToBottom();
									var o = this.refs.hor_bids,
										i = this.refs.hor_asks;
									this.props.horizontal &&
										n.hideScrollbars !== this.props.hideScrollbars &&
										n.hideScrollbars &&
										(S().destroy(o), S().destroy(i)),
										this.props.horizontal &&
											n.hideScrollbars !== this.props.hideScrollbars &&
											!n.hideScrollbars &&
											(S().initialize(o),
											S().initialize(i),
											this.refs.askTransition.resetAnimation(),
											this.refs.bidTransition.resetAnimation(),
											i && (i.scrollTop = 0),
											o && (o.scrollTop = 0),
											this.psUpdate()),
										this.centerVerticalScrollBar();
								},
							},
							{
								key: 'componentDidMount',
								value: function () {
									if (this.props.horizontal) {
										if (!this.props.hideScrollbars) {
											var e = this.refs.hor_bids;
											S().initialize(e);
											var t = this.refs.hor_asks;
											S().initialize(t);
										}
									} else S().initialize(this.verticalScrollBar());
									this.scrollToBottom();
								},
							},
							{
								key: 'scrollToBottom',
								value: function () {
									gr.NY.scrollToBottom({containerId: 'top-order-table'});
								},
							},
							{
								key: 'centerVerticalScrollBar',
								value: function () {
									if (!this.props.horizontal && this.state.autoScroll) {
										var e = this.queryStickyTable('#sticky-table-y-wrapper'),
											t = this.queryStickyTable('#sticky-table-header'),
											r = this.centerText.current,
											n = Zr(this.queryStickyTable('.order-row')),
											o =
												(0 !== this.props.currentGroupOrderLimit
													? this.props.orderBookReversed
														? this.props.groupedBids
														: this.props.groupedAsks
													: this.props.orderBookReversed
													? this.props.combinedBids
													: this.props.combinedAsks
												).length * n,
											i = Zr(e) - Zr(t),
											s = o + Zr(r) / 2 - i / 2;
										e.scrollTop = s;
									}
								},
							},
							{
								key: 'psUpdate',
								value: function () {
									if (this.props.horizontal) {
										var e = this.refs.hor_bids;
										S().update(e);
										var t = this.refs.hor_asks;
										S().update(t);
									} else S().update(this.verticalScrollBar());
								},
							},
							{
								key: '_onSetShowAll',
								value: function (e) {
									'asks' === e
										? (this.setState({showAllAsks: !this.state.showAllAsks}),
										  this.state.showAllAsks &&
												(this.refs.hor_asks.scrollTop = 0))
										: (this.setState({showAllBids: !this.state.showAllBids}),
										  this.state.showAllBids &&
												(this.refs.hor_bids.scrollTop = 0));
								},
							},
							{
								key: 'toggleTotalAsset',
								value: function (e) {
									var t = e ? 'quoteTotalBids' : 'quoteTotalAsks';
									this.setState(Pr({}, t, !this.state[t]));
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props,
										r = t.combinedBids,
										n = t.combinedAsks,
										o = t.highestBid,
										i = t.lowestAsk,
										s = t.quote,
										a = t.base,
										l = (t.totalAsks, t.totalBids, t.quoteSymbol),
										c = t.baseSymbol,
										u = t.horizontal,
										d = (t.trackedGroupsConfig, t.currentGroupOrderLimit),
										p = (t.handleGroupOrderLimitChange, t.orderBookReversed),
										h = t.groupedBids,
										f = t.groupedAsks,
										m = t.flipOrderBook,
										b = this.state,
										g = b.showAllAsks,
										x = b.showAllBids,
										_ = b.rowCount,
										j = b.displaySpreadAsPercentage,
										k = !i.sell_price && !o.sell_price,
										S =
											!(!i.sell_price || !o.sell_price) &&
											(j
												? ''.concat(
														(100 * (i._real_price / o._real_price - 1)).toFixed(
															2
														),
														'%'
												  )
												: (0, q.jsx)(W, {
														price: i._real_price - o._real_price,
														base: a,
														quote: s,
												  })),
										w = null,
										A = null,
										C = 0 !== this.props.currentGroupOrderLimit ? f : n,
										O = 0 !== this.props.currentGroupOrderLimit ? h : r;
									if (
										(u || p
											? !u &&
											  p &&
											  (O.sort(function (e, t) {
													return e.getPrice() - t.getPrice();
											  }),
											  C.sort(function (e, t) {
													return e.getPrice() - t.getPrice();
											  }))
											: (O.sort(function (e, t) {
													return t.getPrice() - e.getPrice();
											  }),
											  C.sort(function (e, t) {
													return t.getPrice() - e.getPrice();
											  })),
										a && s)
									)
										if (0 !== this.props.currentGroupOrderLimit)
											(w = O.map(function (t, r) {
												return u
													? (0, q.jsx)(
															Fr,
															{
																index: r,
																order: t,
																onClick: e.props.onClick.bind(e, t),
																base: a,
																quote: s,
																position: m ? 'right' : 'left',
																currentAccount: e.props.currentAccount,
																quoteTotal: e.state.quoteTotalBids,
															},
															t.getPrice() + (t.isBid() ? '_bid' : '')
													  )
													: (0, q.jsx)(
															Br,
															{
																index: r,
																order: t,
																onClick: e.props.onClick.bind(e, t),
																base: a,
																quote: s,
																final: 0 === r,
																currentAccount: e.props.currentAccount,
															},
															t.getPrice() + (t.isBid() ? '_bid' : '')
													  );
											})),
												(A = C.map(function (t, r) {
													return u
														? (0, q.jsx)(
																Fr,
																{
																	index: r,
																	order: t,
																	onClick: e.props.onClick.bind(e, t),
																	base: a,
																	quote: s,
																	type: t.type,
																	position: m ? 'left' : 'right',
																	currentAccount: e.props.currentAccount,
																	quoteTotal: e.state.quoteTotalAsks,
																},
																t.getPrice() + (t.isBid() ? '_bid' : '')
														  )
														: (0, q.jsx)(
																Br,
																{
																	index: r,
																	order: t,
																	onClick: e.props.onClick.bind(e, t),
																	base: a,
																	quote: s,
																	type: t.type,
																	final: 0 === r,
																	currentAccount: e.props.currentAccount,
																},
																t.getPrice() + (t.isBid() ? '_bid' : '')
														  );
												}));
										else {
											if (
												((w = O.map(function (t, r) {
													return u
														? (0, q.jsx)(
																Rr,
																{
																	index: r,
																	order: t,
																	onClick: e.props.onClick.bind(e, t),
																	base: a,
																	quote: s,
																	position: m ? 'right' : 'left',
																	currentAccount: e.props.currentAccount,
																	quoteTotal: e.state.quoteTotalBids,
																},
																t.getPrice() + (t.isCall() ? '_call' : '')
														  )
														: (0, q.jsx)(
																Nr,
																{
																	index: r,
																	order: t,
																	onClick: e.props.onClick.bind(e, t),
																	base: a,
																	quote: s,
																	final: 0 === r,
																	currentAccount: e.props.currentAccount,
																},
																t.getPrice() + (t.isCall() ? '_call' : '')
														  );
												})),
												(A = C.map(function (t, r) {
													return u
														? (0, q.jsx)(
																Rr,
																{
																	index: r,
																	order: t,
																	onClick: e.props.onClick.bind(e, t),
																	base: a,
																	quote: s,
																	type: t.type,
																	position: m ? 'left' : 'right',
																	currentAccount: e.props.currentAccount,
																	quoteTotal: e.state.quoteTotalAsks,
																},
																t.getPrice() + (t.isCall() ? '_call' : '')
														  )
														: (0, q.jsx)(
																Nr,
																{
																	index: r,
																	order: t,
																	onClick: e.props.onClick.bind(e, t),
																	base: a,
																	quote: s,
																	type: t.type,
																	final: 0 === r,
																	currentAccount: e.props.currentAccount,
																},
																t.getPrice() + (t.isCall() ? '_call' : '')
														  );
												})).length < 100)
											)
												for (var P = 0; P < 100 - A.length; P++)
													A.push(
														(0, q.jsxs)('tr', {
															children: [
																(0, q.jsx)('td', {
																	className: 'orderHistoryAsk',
																	children: '-',
																}),
																(0, q.jsx)('td', {children: '-'}),
																(0, q.jsx)('td', {
																	className: 'column-hide-xs',
																	children: '-',
																}),
															],
														})
													);
											if (w.length < 100)
												for (P = 0; P < 100 - w.length; P++)
													w.push(
														(0, q.jsxs)('tr', {
															children: [
																(0, q.jsx)('td', {
																	className: 'orderHistoryBid',
																	children: '-',
																}),
																(0, q.jsx)('td', {children: '-'}),
																(0, q.jsx)('td', {
																	className: 'column-hide-xs',
																	children: '-',
																}),
															],
														})
													);
										}
									if (this.props.horizontal) {
										w.length,
											A.length,
											x || w.splice(_, w.length),
											g || A.splice(_, A.length);
										var T = (0, q.jsx)('thead', {
												children: (0, q.jsxs)(
													'tr',
													{
														className: 'top-header',
														children: [
															(0, q.jsx)('th', {
																children: (0, q.jsx)(F(), {
																	className:
																		(m ? 'ask-total' : 'bid-total') +
																		' header-sub-title',
																	content: 'exchange.price',
																}),
															}),
															(0, q.jsx)('th', {
																children: (0, q.jsx)('span', {
																	className: 'header-sub-title',
																	children: (0, q.jsx)(G.Z, {
																		dataPlace: 'top',
																		name: l,
																	}),
																}),
															}),
															(0, q.jsxs)('th', {
																className: 'column-hide-xs',
																children: [
																	(0, q.jsx)(F(), {
																		className: 'header-sub-title',
																		content: 'exchange.total',
																	}),
																	(0, q.jsxs)('span', {
																		className: 'header-sub-title',
																		children: [
																			' ',
																			'(',
																			(0, q.jsx)(G.Z, {
																				dataPlace: 'top',
																				name: c,
																			}),
																			')',
																		],
																	}),
																],
															}),
														],
													},
													'top-header'
												),
											}),
											N = (0, q.jsx)('thead', {
												children: (0, q.jsxs)(
													'tr',
													{
														className: 'top-header',
														children: [
															(0, q.jsx)('th', {
																style: {textAlign: 'right'},
																children: (0, q.jsx)(F(), {
																	className:
																		(m ? 'bid-total' : 'ask-total') +
																		' header-sub-title',
																	content: 'exchange.price',
																}),
															}),
															(0, q.jsx)('th', {
																style: {textAlign: 'right'},
																children: (0, q.jsx)('span', {
																	className: 'header-sub-title',
																	children: (0, q.jsx)(G.Z, {
																		dataPlace: 'top',
																		name: l,
																	}),
																}),
															}),
															(0, q.jsx)('th', {
																style: {textAlign: 'right'},
																children: (0, q.jsx)(F(), {
																	className: 'header-sub-title',
																	content: 'exchange.total',
																}),
															}),
														],
													},
													'top-header'
												),
											}),
											Z = this.props.wrapperClass,
											R = this.props.innerClass;
										return (0, q.jsxs)('div', {
											ref: 'order_book',
											style: {
												marginRight: (this.props.smallScreen, 0),
												height: '100%',
											},
											className: y()(Z),
											children: [
												(0, q.jsx)('div', {
													style: {
														height: '51%',
														paddingBottom: '4px',
														overflow: 'hidden',
														color: '#e6416e',
													},
													className: y()(R, m ? 'order-1' : 'order-2'),
													children: (0, q.jsxs)('div', {
														style: {height: '100%'},
														children: [
															(0, q.jsx)('div', {
																className: 'market-right-padding-only',
																children: (0, q.jsx)('table', {
																	className:
																		'table order-table table-hover fixed-table text-right',
																	children: m ? T : N,
																}),
															}),
															(0, q.jsx)('div', {
																id: 'top-order-table',
																className: 'grid-block',
																ref: 'hor_asks',
																style: {
																	paddingRight: '0.6rem',
																	overflow: 'hidden',
																	maxHeight: this.props.chartHeight / 2 - 2,
																	lineHeight: '20px',
																	minHeight: '93%',
																},
																children: (0, q.jsx)('table', {
																	className:
																		'table order-table no-stripes table-hover fixed-table text-right no-overflow',
																	style: {height: '100%'},
																	children: (0, q.jsx)(Bt.Z, {
																		ref: 'askTransition',
																		className: 'orderbook clickable',
																		component: 'tbody',
																		transitionName: 'newrow',
																		id: 'top-order-rows',
																		children: A.reverse(),
																	}),
																}),
															}),
														],
													}),
												}),
												(0, q.jsx)('div', {
													style: {
														borderTop: '2px solid black',
														height: '48%',
														paddingTop: '4px',
														color: '#70a800',
													},
													className: y()(R, m ? 'order-2' : 'order-1'),
													children: (0, q.jsx)('div', {
														style: {height: '100%'},
														children: (0, q.jsx)('div', {
															className: 'grid-block',
															ref: 'hor_bids',
															id: 'bottom-order-table',
															style: {
																paddingRight: '0.6rem',
																overflow: 'hidden',
																maxHeight: this.props.chartHeight / 2 - 2,
																lineHeight: '20px',
																minHeight: '100%',
															},
															children: (0, q.jsx)('table', {
																style: {paddingBottom: 5, height: '100%'},
																className:
																	'table order-table no-stripes table-hover fixed-table text-right no-overflow',
																children: (0, q.jsx)(Bt.Z, {
																	ref: 'bidTransition',
																	className: 'orderbook clickable',
																	component: 'tbody',
																	transitionName: 'newrow',
																	children: w,
																}),
															}),
														}),
													}),
												}),
											],
										});
									}
									return (0, q.jsx)('div', {
										className: 'order-table-container',
										children: (0, q.jsxs)(yr.StickyTable, {
											stickyColumnCount: 0,
											className: 'order-table table',
											ref: this.verticalStickyTable,
											children: [
												(0, q.jsxs)('div', {
													className: 'sticky-table-row top-header',
													children: [
														(0, q.jsx)('div', {
															className: 'cell header-cell left',
															children: (0, q.jsx)('span', {
																className: 'header-sub-title',
																children: (0, q.jsx)(G.Z, {name: c}),
															}),
														}),
														(0, q.jsx)('div', {
															className: 'cell header-cell',
															children: (0, q.jsx)('span', {
																className: 'header-sub-title',
																children: (0, q.jsx)(G.Z, {name: l}),
															}),
														}),
														(0, q.jsx)('div', {
															className: 'cell header-cell right',
															children: (0, q.jsx)(F(), {
																className: 'header-sub-title',
																content: 'exchange.price',
															}),
														}),
													],
												}),
												p
													? (0, q.jsx)(Tr, {
															id: 'top-order-rows',
															noOrders: k,
															orderRows: w,
															isBid: !0,
													  })
													: (0, q.jsx)(Tr, {
															id: 'top-order-rows',
															noOrders: k,
															orderRows: A,
															isBid: !1,
													  }),
												k
													? (0, q.jsxs)('div', {
															className: 'sticky-table-row',
															ref: this.centerText,
															children: [
																(0, q.jsx)('div', {className: 'cell'}),
																(0, q.jsx)('div', {
																	className: 'cell no-orders padtop',
																	children: (0, q.jsx)(F(), {
																		content: 'exchange.no_orders',
																	}),
																}),
															],
													  })
													: (0, q.jsxs)('div', {
															className:
																'sticky-table-row orderbook-latest-price',
															ref: this.centerText,
															style: {padding: 0},
															children: [
																(0, q.jsx)('div', {
																	className: 'cell right',
																	children: (0, q.jsxs)('span', {
																		className: 'clickable left',
																		onClick: this.toggleSpreadValue,
																		children: [
																			(0, q.jsx)(F(), {
																				className: 'orderbook-center-title',
																				content: 'exchange.spread',
																			}),
																			' ',
																			(0, q.jsx)('span', {
																				className: 'spread-value',
																				children: S || '0',
																			}),
																		],
																	}),
																}),
																(0, q.jsx)('div', {
																	className: 'cell cell-center',
																	children: (0, q.jsxs)('span', {
																		style: {width: 75},
																		children: [
																			this.props.hideFunctionButtons
																				? null
																				: (0, q.jsx)(Y.Z, {
																						className:
																							'lock-unlock clickable icon-fill',
																						onClick: this.toggleAutoScroll,
																						name: this.state.autoScroll
																							? 'locked'
																							: 'unlocked',
																						title: this.state.autoScroll
																							? 'icons.unlocked.disable_auto_scroll'
																							: 'icons.locked.enable_auto_scroll',
																				  }),
																			' ',
																			this.props.hideFunctionButtons
																				? null
																				: (0, q.jsx)(Y.Z, {
																						onClick: this.props.moveOrderBook,
																						name: 'thumb-tack',
																						className:
																							'icon-14px icon-fill order-book-button-v clickable',
																						title: this.props.horizontal
																							? 'icons.thumb_tack'
																							: 'icons.thumb_untack',
																						style: {marginLeft: 0},
																				  }),
																			' ',
																			0 == d
																				? null
																				: (0, q.jsx)(Y.Z, {
																						name: 'grouping',
																						className: 'icon-14px',
																						title: v().translate(
																							'icons.order_grouping'
																						),
																						style: {marginLeft: 0},
																				  }),
																		],
																	}),
																}),
																(0, q.jsx)('div', {
																	className: 'cell',
																	children:
																		!!this.props.latest &&
																		(0, q.jsx)('span', {
																			className: 'right',
																			children: (0, q.jsx)('span', {
																				className: this.props.changeClass
																					? this.props.changeClass
																					: 'spread-value',
																				children: (0, q.jsx)(W, {
																					price: this.props.latest,
																					base: this.props.base,
																					quote: this.props.quote,
																				}),
																			}),
																		}),
																}),
															],
													  }),
												p
													? (0, q.jsx)(Tr, {
															noOrders: k,
															orderRows: A,
															isBid: !1,
													  })
													: (0, q.jsx)(Tr, {
															noOrders: k,
															orderRows: w,
															isBid: !0,
													  }),
											],
										}),
									});
								},
							},
						]),
						r
					);
				})(n.Component);
			(Er.defaultProps = {bids: [], asks: [], orders: {}}),
				(Er.propTypes = {
					bids: A().array.isRequired,
					asks: A().array.isRequired,
					orders: A().object.isRequired,
				});
			var Ir = r(81915),
				qr = r(43393),
				Lr = r.n(qr),
				Dr = r(11230);
			function Vr(e) {
				return (
					(Vr =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Vr(e)
				);
			}
			function zr(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Hr(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Ur(e, t) {
				return (
					(Ur =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ur(e, t)
				);
			}
			function Wr(e, t) {
				if (t && ('object' === Vr(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function Gr(e) {
				return (
					(Gr = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Gr(e)
				);
			}
			var Qr = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && Ur(e, t);
					})(s, e);
					var t,
						r,
						n,
						o,
						i =
							((n = s),
							(o = (function () {
								if ('undefined' == typeof Reflect || !Reflect.construct)
									return !1;
								if (Reflect.construct.sham) return !1;
								if ('function' == typeof Proxy) return !0;
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {})
										),
										!0
									);
								} catch (e) {
									return !1;
								}
							})()),
							function () {
								var e,
									t = Gr(n);
								if (o) {
									var r = Gr(this).constructor;
									e = Reflect.construct(t, arguments, r);
								} else e = t.apply(this, arguments);
								return Wr(this, e);
							});
					function s() {
						return zr(this, s), i.apply(this, arguments);
					}
					return (
						(t = s),
						(r = [
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.className,
										r = e.innerClass,
										n = e.innerStyle,
										o = e.noHeader,
										i = e.headerStyle,
										s = e.activeTab,
										a = e.quoteSymbol,
										l =
											(e.baseSymbol, e.tinyScreen, e.totalRows, e.historyRows),
										c =
											(e.showAll,
											(0, q.jsx)('tr', {
												children: (0, q.jsx)('td', {
													className: 'centric-items',
													style: {lineHeight: 4, fontStyle: 'italic'},
													colSpan: '5',
													children: (0, q.jsx)(F(), {
														content: 'account.no_orders',
													}),
												}),
											}));
									return (0, q.jsx)('div', {
										className: y()(t),
										style: {height: '100%'},
										children: (0, q.jsxs)('div', {
											className: r,
											style: n,
											children: [
												o
													? null
													: (0, q.jsx)('div', {
															style: i,
															className: 'exchange-content-header',
															children:
																'history' === s
																	? (0, q.jsx)(F(), {
																			content: 'exchange.history',
																	  })
																	: null,
													  }),
												(0, q.jsx)('div', {
													className:
														'grid-block shrink left-orderbook-header market-right-padding-only',
													children: (0, q.jsx)('table', {
														className:
															'table table-no-padding order-table text-left fixed-table market-right-padding',
														children: (0, q.jsx)('thead', {
															children: (0, q.jsxs)('tr', {
																children: [
																	(0, q.jsx)('th', {
																		style: {textAlign: 'right'},
																		children: (0, q.jsx)(F(), {
																			className: 'header-sub-title',
																			content: 'exchange.price',
																		}),
																	}),
																	(0, q.jsx)('th', {
																		style: {textAlign: 'right'},
																		children: (0, q.jsx)('span', {
																			className: 'header-sub-title',
																			children: (0, q.jsx)(G.Z, {
																				dataPlace: 'top',
																				name: a,
																			}),
																		}),
																	}),
																	(0, q.jsx)('th', {
																		style: {textAlign: 'right'},
																		children: (0, q.jsx)(F(), {
																			className: 'header-sub-title',
																			content: 'explorer.block.date',
																		}),
																	}),
																],
															}),
														}),
													}),
												}),
												(0, q.jsx)('div', {
													className:
														'table-container grid-block market-right-padding-only no-overflow market-history-rows',
													ref: 'history',
													id: 'market-orders-view-container',
													style: {
														minHeight: '100%',
														overflow: 'hidden',
														lineHeight: '18px',
													},
													children: (0, q.jsx)('table', {
														className:
															'table order-table no-stripes table-hover fixed-table text-right no-overflow',
														children: (0, q.jsx)(Bt.Z, {
															ref: 'historyTransition',
															component: 'tbody',
															transitionName: 'newrow',
															className: 'orderbook',
															children: l && l.length > 0 ? l : c,
														}),
													}),
												}),
											],
										}),
									});
								},
							},
						]) && Hr(t.prototype, r),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						s
					);
				})(n.Component),
				Kr = r(11211),
				Yr = r(19676);
			function Jr(e) {
				return (
					(Jr =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Jr(e)
				);
			}
			function $r(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Xr(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function en(e, t) {
				return (
					(en =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					en(e, t)
				);
			}
			function tn(e, t) {
				if (t && ('object' === Jr(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function rn(e) {
				return (
					(rn = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					rn(e)
				);
			}
			var nn,
				on,
				sn,
				an = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && en(e, t);
					})(a, e);
					var t,
						r,
						o,
						i,
						s =
							((o = a),
							(i = (function () {
								if ('undefined' == typeof Reflect || !Reflect.construct)
									return !1;
								if (Reflect.construct.sham) return !1;
								if ('function' == typeof Proxy) return !0;
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {})
										),
										!0
									);
								} catch (e) {
									return !1;
								}
							})()),
							function () {
								var e,
									t = rn(o);
								if (i) {
									var r = rn(this).constructor;
									e = Reflect.construct(t, arguments, r);
								} else e = t.apply(this, arguments);
								return tn(this, e);
							});
					function a() {
						return $r(this, a), s.apply(this, arguments);
					}
					return (
						(t = a),
						(r = [
							{
								key: 'componentWillMount',
								value: function () {
									this.props.blockHeader ||
										Yr.Z.getHeader.defer(this.props.block_number);
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return (
										e.blockHeader &&
											!this.props.blockHeader &&
											setTimeout(ee.Z.rebuild, 1e3),
										e.blockHeader !== this.props.blockHeader
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.blockHeader,
										r = e.tooltip,
										o = e.component,
										i = e.format;
									return t
										? n.createElement(
												o,
												{className: r ? 'tooltip' : ''},
												(0, q.jsx)(m.Z, {
													title: r ? t.timestamp.toString() : '',
													placement: 'left',
													children: (0, q.jsx)('span', {
														children: v().localize(t.timestamp, {
															type: 'date',
															format: i,
														}),
													}),
												})
										  )
										: n.createElement(o);
								},
							},
						]) && Xr(t.prototype, r),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(n.Component);
			(nn = an),
				(on = 'defaultProps'),
				(sn = {
					format:
						-1 !== Rt()().toLowerCase().indexOf('en-us')
							? 'market_history_us'
							: 'market_history',
					tooltip: !1,
					component: 'span',
				}),
				on in nn
					? Object.defineProperty(nn, on, {
							value: sn,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (nn[on] = sn);
			const ln = (an = (0, Dr.$)(an, {
				listenTo: function () {
					return [Kr.Z];
				},
				getProps: function (e) {
					return {
						blockHeader: Kr.Z.getState().blockHeaders.get(e.block_number),
					};
				},
			}));
			function cn(e) {
				return (
					(cn =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					cn(e)
				);
			}
			function un(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			function dn(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function pn(e, t) {
				return (
					(pn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					pn(e, t)
				);
			}
			function hn(e, t) {
				if (t && ('object' === cn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function fn(e) {
				return (
					(fn = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					fn(e)
				);
			}
			var mn = d.FR.operations;
			function bn(e) {
				var t = e.fill,
					r = e.base,
					n = e.quote,
					o =
						-1 !== t.id.indexOf('5.0')
							? (0, q.jsx)('td', {
									children: (0, q.jsx)(m.Z, {
										title: t.time.toString(),
										placement: 'left',
										children: (0, q.jsx)('div', {
											className: 'tooltip',
											style: {whiteSpace: 'nowrap'},
											children: v().localize(t.time, {
												type: 'date',
												format:
													-1 !== Rt()().toLowerCase().indexOf('en-us')
														? 'market_history_us'
														: 'market_history',
											}),
										}),
									}),
							  })
							: (0, q.jsx)(ln, {
									component: 'td',
									block_number: t.block,
									tooltip: !0,
							  });
				return (0, q.jsxs)('tr', {
					className: t.className,
					children: [
						(0, q.jsx)('td', {
							className: t.className,
							children: (0, q.jsx)(W, {price: t.getPrice(), base: r, quote: n}),
						}),
						(0, q.jsx)('td', {children: t.amountToReceive()}),
						o,
					],
				});
			}
			var yn = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && pn(e, t);
				})(s, e);
				var t,
					r,
					n,
					o,
					i =
						((n = s),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = fn(n);
							if (o) {
								var r = fn(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return hn(this, e);
						});
				function s(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, s),
						((t = i.call(this)).state = {
							activeTab: e.viewSettings.get('historyTab', 'history'),
							rowCount: 100,
							showAll: !1,
						}),
						t
					);
				}
				return (
					(t = s),
					(r = [
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									!Lr().is(e.history, this.props.history) ||
									e.baseSymbol !== this.props.baseSymbol ||
									e.quoteSymbol !== this.props.quoteSymbol ||
									e.className !== this.props.className ||
									e.activeTab !== this.props.activeTab ||
									t.activeTab !== this.state.activeTab ||
									t.showAll !== this.state.showAll ||
									e.currentAccount !== this.props.currentAccount ||
									e.isPanelActive !== this.props.isPanelActive ||
									e.hideScrollbars !== this.props.hideScrollbars
								);
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this.props.hideScrollbars || this.updateContainer(1);
							},
						},
						{
							key: 'componentDidUpdate',
							value: function (e) {
								var t = this.props.hideScrollbars,
									r = this.state.showAll;
								e.showAll != r &&
									(r && !t
										? this.updateContainer(2)
										: r || t
										? r && t
											? this.updateContainer(1)
											: this.updateContainer(0)
										: this.updateContainer(3));
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								e.activeTab !== this.props.activeTab &&
									this.changeTab(e.activeTab),
									(e.baseSymbol === this.props.baseSymbol &&
										e.quoteSymbol === this.props.quoteSymbol) ||
										(this.setState({showAll: !1}),
										this.updateContainer(0),
										this.props.hideScrollbars || this.updateContainer(1)),
									e.hideScrollbars !== this.props.hideScrollbars &&
										(this.updateContainer(0),
										e.hideScrollbars || this.updateContainer(1));
							},
						},
						{
							key: 'updateContainer',
							value: function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 2,
									t = this.refs.view.refs.history,
									r = this.refs.view.refs.historyTransition;
								t &&
									(0 == e
										? ((t.scrollTop = 0), S().destroy(t))
										: 1 == e
										? (S().initialize(t), this.updateContainer(3))
										: 2 == e
										? S().update(t)
										: 3 == e && ((t.scrollTop = 0), S().update(t)),
									r && r.resetAnimation());
							},
						},
						{
							key: 'onSetShowAll',
							value: function () {
								this.setState({showAll: !this.state.showAll});
							},
						},
						{
							key: 'changeTab',
							value: function (e) {
								C.Z.changeViewSetting({historyTab: e}),
									this.setState({activeTab: e}),
									this.updateContainer(3),
									setTimeout(ee.Z.rebuild, 1e3);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.history,
									r = e.myHistory,
									n = e.base,
									o = e.quote,
									i = e.baseSymbol,
									s = e.quoteSymbol,
									a = e.isNullAccount,
									l = e.activeTab,
									c = this.state,
									u = c.rowCount,
									d = c.showAll,
									p = null;
								if ((a && (l = 'history'), 'my_history' === l && r && r.size)) {
									var h,
										f =
											(un((h = {}), o.get('id'), {
												precision: o.get('precision'),
											}),
											un(h, n.get('id'), {precision: n.get('precision')}),
											h);
									p = r
										.filter(function (e) {
											return e.getIn(['op', 0]) === mn.fill_order;
										})
										.filter(function (e) {
											var t = o.get('id'),
												r = n.get('id'),
												i = e.getIn(['op', 1, 'pays', 'asset_id']),
												s = e.getIn(['op', 1, 'receives', 'asset_id']);
											return !((t !== i && t !== s) || (r !== i && r !== s));
										})
										.sort(function (e, t) {
											return t.get('block_num') - e.get('block_num');
										})
										.map(function (e) {
											var t = new N.te(e.toJS(), f, o.get('id'));
											return (0, q.jsx)(bn, {fill: t, base: n, quote: o}, t.id);
										})
										.toArray();
								} else
									t &&
										t.size &&
										(p = this.props.history
											.take(100)
											.map(function (e) {
												return (0,
												q.jsx)(bn, {fill: e, base: n, quote: o}, e.id);
											})
											.toArray());
								var m = p ? p.length : null;
								return (
									!d && p && p.splice(u, p.length),
									(0, q.jsx)(Qr, {
										ref: 'view',
										className: this.props.className,
										innerClass: this.props.innerClass,
										innerStyle: this.props.innerStyle,
										noHeader: this.props.noHeader,
										headerStyle: this.props.headerStyle,
										activeTab: l,
										chartHeight: this.props.chartHeight,
										quoteSymbol: s,
										baseSymbol: i,
										tinyScreen: this.props.tinyScreen,
										historyRows: p,
										totalRows: m,
										showAll: d,
										onSetShowAll: this.onSetShowAll.bind(this),
									})
								);
							},
						},
					]),
					r && dn(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(n.Component);
			(yn.defaultProps = {history: []}),
				(yn.propTypes = {history: A().object.isRequired});
			const gn = (0, Dr.$)(yn, {
				listenTo: function () {
					return [s.Z];
				},
				getProps: function () {
					return {viewSettings: s.Z.getState().viewSettings};
				},
			});
			var vn = r(8174),
				xn = r(70507),
				_n = r(12028),
				jn = r(8193);
			function kn(e) {
				return (
					(kn =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					kn(e)
				);
			}
			function Sn(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function wn(e, t) {
				return (
					(wn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					wn(e, t)
				);
			}
			function An(e, t) {
				if (t && ('object' === kn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Cn(e);
			}
			function Cn(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function On(e) {
				return (
					(On = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					On(e)
				);
			}
			var Pn = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && wn(e, t);
				})(s, e);
				var t,
					r,
					n,
					o,
					i =
						((n = s),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = On(n);
							if (o) {
								var r = On(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return An(this, e);
						});
				function s(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, s),
						((t = i.call(this)).state = {
							open: !1,
							smallScreen: !1,
							autoScroll: e.viewSettings.get('global_AutoScroll', !0),
						}),
						(t.setChartHeight = t.setChartHeight.bind(Cn(t))),
						t
					);
				}
				return (
					(t = s),
					(r = [
						{
							key: 'componentWillMount',
							value: function () {
								this.setState({smallScreen: window.innerWidth <= 800});
							},
						},
						{
							key: 'onClose',
							value: function () {
								this.props.hideModal();
							},
						},
						{
							key: 'setChartHeight',
							value: function (e) {
								this.props.onChangeChartHeight({value: e});
							},
						},
						{
							key: 'setAutoscroll',
							value: function (e) {
								var t = 1 == e;
								this.setState({autoScroll: t}),
									C.Z.changeViewSetting({global_AutoScroll: t}),
									this.props.onSetAutoscroll(t);
							},
						},
						{
							key: '_getGroupingOptions',
							value: function (e) {
								return (0, q.jsxs)($.Z, {
									placeholder: v().translate('settings.placeholder_select'),
									style: {width: '100%'},
									onChange: this.props.onSetPanelTabs.bind(this, e),
									value: this.props.panelTabs[e],
									children: [
										(0, q.jsx)($.Z.Option, {
											value: 0,
											children: (0, q.jsx)(F(), {
												content:
													'exchange.settings.options.grouping_standalone',
											}),
										}),
										(0, q.jsx)($.Z.Option, {
											value: 1,
											children: (0, q.jsx)(F(), {
												content: 'exchange.settings.options.grouping_1',
											}),
										}),
										(0, q.jsx)($.Z.Option, {
											value: 2,
											children: (0, q.jsx)(F(), {
												content: 'exchange.settings.options.grouping_2',
											}),
										}),
									],
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.chartType,
									r = e.chartHeight;
								return (0, q.jsx)(vn.Z, {
									title: v().translate('exchange.settings.header.title'),
									visible: this.props.visible,
									id: this.props.modalId,
									overlay: !0,
									footer: [
										(0, q.jsx)(
											X.Z,
											{
												onClick: this.onClose.bind(this),
												children: v().translate('modal.close'),
											},
											'close'
										),
									],
									onCancel: this.onClose.bind(this),
									noHeaderContainer: !0,
									ref: this.props.modalId,
									children: (0, q.jsxs)(de.Z.Item, {
										children: [
											(0, q.jsx)('header', {
												children: (0, q.jsx)(F(), {
													content: 'exchange.settings.header.chart_options',
												}),
											}),
											this.props.tinyScreen
												? null
												: (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														children: [
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)('h6', {
																	style: {margin: 9},
																	children: [
																		(0, q.jsx)(F(), {
																			content:
																				'exchange.settings.title.chart_type',
																		}),
																		' ',
																		(0, q.jsx)(m.Z, {
																			title: v().translate(
																				'exchange.settings.tooltip.chart_type'
																			),
																			children: (0, q.jsx)(jn.znh, {}),
																		}),
																		' ',
																		(0, q.jsx)(m.Z, {
																			title: v().translate(
																				'exchange.settings.tooltip.chart_reload'
																			),
																			children: (0, q.jsx)(jn.kA6, {}),
																		}),
																	],
																}),
															}),
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)($.Z, {
																	placeholder: v().translate(
																		'settings.placeholder_select'
																	),
																	style: {width: '100%'},
																	value: t,
																	onChange: this.props.onToggleChart.bind(this),
																	children: [
																		(0, q.jsx)($.Z.Option, {
																			value: 'market_depth',
																			children: v().translate(
																				'exchange.order_depth'
																			),
																		}),
																		(0, q.jsx)($.Z.Option, {
																			value: 'price_chart',
																			children: v().translate(
																				'exchange.price_history'
																			),
																		}),
																		(0, q.jsx)($.Z.Option, {
																			value: 'hidden_chart',
																			children: v().translate(
																				'exchange.settings.options.hidden_chart'
																			),
																		}),
																	],
																}),
															}),
														],
												  }),
											(0, q.jsxs)('div', {
												className: 'grid-block no-overflow wrap shrink',
												children: [
													(0, q.jsx)('div', {
														className: 'small-6',
														children: (0, q.jsxs)('h6', {
															style: {margin: 9},
															children: [
																(0, q.jsx)(F(), {
																	content:
																		'exchange.settings.title.chart_height',
																}),
																' ',
																(0, q.jsx)(m.Z, {
																	title: v().translate(
																		'exchange.settings.tooltip.chart_height'
																	),
																	children: (0, q.jsx)(jn.znh, {}),
																}),
															],
														}),
													}),
													(0, q.jsx)('div', {
														className: 'small-6',
														children: (0, q.jsx)(xn.Z, {
															value: 'number' == typeof r && r,
															onChange: this.setChartHeight.bind(this),
														}),
													}),
												],
											}),
											!this.props.tinyScreen &&
												'price_chart' == t &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsxs)('h6', {
																style: {margin: 9},
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'exchange.settings.title.chart_tools',
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.chart_tools'
																		),
																		children: (0, q.jsx)(jn.znh, {}),
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.chart_reload'
																		),
																		children: (0, q.jsx)(jn.kA6, {}),
																	}),
																],
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)(_n.Z, {
																style: {margin: 6},
																checked: this.props.chartTools,
																onChange: this.props.onChartTools.bind(this),
															}),
														}),
													],
												}),
											!this.props.tinyScreen &&
												'price_chart' == t &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsxs)('h6', {
																style: {margin: 9},
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'exchange.settings.title.show_markets',
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.show_markets'
																		),
																		children: (0, q.jsx)(jn.znh, {}),
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.chart_reload'
																		),
																		children: (0, q.jsx)(jn.kA6, {}),
																	}),
																],
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)(_n.Z, {
																style: {margin: 6},
																checked: this.props.chartTools,
																onChange: this.props.onChartTools.bind(this),
															}),
														}),
													],
												}),
											!this.props.tinyScreen &&
												'price_chart' == t &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsxs)('h6', {
																style: {margin: 9},
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'exchange.settings.title.chart_zoom',
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.chart_zoom'
																		),
																		children: (0, q.jsx)(jn.znh, {}),
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.chart_reload'
																		),
																		children: (0, q.jsx)(jn.kA6, {}),
																	}),
																],
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)(_n.Z, {
																style: {margin: 6},
																checked: this.props.chartZoom,
																onChange: this.props.onChartZoom.bind(this),
															}),
														}),
													],
												}),
											(0, q.jsx)('header', {
												children: (0, q.jsx)(F(), {
													content: 'exchange.settings.header.order_options',
												}),
											}),
											(0, q.jsxs)('div', {
												className: 'grid-block no-overflow wrap shrink',
												children: [
													(0, q.jsx)('div', {
														className: 'small-6',
														children: (0, q.jsxs)('h6', {
															style: {margin: 9},
															children: [
																(0, q.jsx)(F(), {
																	content:
																		'exchange.settings.title.order_book_grouping',
																}),
																' ',
																(0, q.jsx)(m.Z, {
																	title: v().translate(
																		'exchange.settings.tooltip.order_book_grouping'
																	),
																	children: (0, q.jsx)(jn.znh, {}),
																}),
															],
														}),
													}),
													(0, q.jsx)('div', {
														className: 'small-6',
														children: this.props.trackedGroupsConfig
															? (0, q.jsx)(Mr, {
																	globalSettingsSelector: !0,
																	trackedGroupsConfig:
																		this.props.trackedGroupsConfig,
																	handleGroupOrderLimitChange:
																		this.props.handleGroupOrderLimitChange.bind(
																			this
																		),
																	currentGroupOrderLimit:
																		this.props.currentGroupOrderLimit,
															  })
															: null,
													}),
												],
											}),
											!this.props.tinyScreen &&
												!this.props.smallScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsxs)('h6', {
																style: {margin: 9},
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'exchange.settings.title.order_style',
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.order_style'
																		),
																		children: (0, q.jsx)(jn.znh, {}),
																	}),
																],
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsxs)($.Z, {
																placeholder: v().translate(
																	'settings.placeholder_select'
																),
																style: {width: '100%'},
																value: this.props.verticalOrderBook.toString(),
																onSelect: this.props.onMoveOrderBook.bind(this),
																children: [
																	(0, q.jsx)($.Z.Option, {
																		value: 'true',
																		children: (0, q.jsx)(F(), {
																			content:
																				'exchange.settings.options.vertical',
																		}),
																	}),
																	(0, q.jsx)($.Z.Option, {
																		value: 'false',
																		children: (0, q.jsx)(F(), {
																			content:
																				'exchange.settings.options.horizontal',
																		}),
																	}),
																],
															}),
														}),
													],
												}),
											(!this.props.tinyScreen &&
												!this.props.verticalOrderBook) ||
											this.props.smallScreen
												? (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														style: {paddingTop: '0.5em'},
														children: [
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)('h6', {
																	style: {margin: 9},
																	children: [
																		(0, q.jsx)(F(), {
																			content:
																				'exchange.settings.title.position_order_form',
																		}),
																		' ',
																		(0, q.jsx)(m.Z, {
																			title: v().translate(
																				'exchange.settings.tooltip.position_order_form'
																			),
																			children: (0, q.jsx)(jn.znh, {}),
																		}),
																	],
																}),
															}),
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)($.Z, {
																	placeholder: v().translate(
																		'settings.placeholder_select'
																	),
																	style: {width: '100%'},
																	value: this.props.flipBuySell.toString(),
																	onSelect: this.props.onFlipBuySell.bind(this),
																	children: [
																		(0, q.jsx)($.Z.Option, {
																			value: 'false',
																			children: (0, q.jsx)(F(), {
																				content:
																					'exchange.settings.options.position_order_form_opt1',
																			}),
																		}),
																		(0, q.jsx)($.Z.Option, {
																			value: 'true',
																			children: (0, q.jsx)(F(), {
																				content:
																					'exchange.settings.options.position_order_form_opt2',
																			}),
																		}),
																	],
																}),
															}),
														],
												  })
												: null,
											(!this.props.tinyScreen &&
												!this.props.verticalOrderBook) ||
											this.props.smallScreen
												? (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														style: {paddingTop: '0.5em'},
														children: [
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)('h6', {
																	style: {margin: 9},
																	children: [
																		(0, q.jsx)(F(), {
																			content:
																				'exchange.settings.title.position_order_orders',
																		}),
																		' ',
																		(0, q.jsx)(m.Z, {
																			title: v().translate(
																				'exchange.settings.tooltip.position_order_orders'
																			),
																			children: (0, q.jsx)(jn.znh, {}),
																		}),
																	],
																}),
															}),
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)($.Z, {
																	placeholder: v().translate(
																		'settings.placeholder_select'
																	),
																	style: {width: '100%'},
																	value: this.props.flipOrderBook.toString(),
																	onSelect:
																		this.props.onFlipOrderBook.bind(this),
																	children: [
																		(0, q.jsx)($.Z.Option, {
																			value: 'false',
																			children: (0, q.jsx)(F(), {
																				content:
																					'exchange.settings.options.position_order_orders_opt1',
																			}),
																		}),
																		(0, q.jsx)($.Z.Option, {
																			value: 'true',
																			children: (0, q.jsx)(F(), {
																				content:
																					'exchange.settings.options.position_order_orders_opt2',
																			}),
																		}),
																	],
																}),
															}),
														],
												  })
												: null,
											(!this.props.tinyScreen &&
												!this.props.verticalOrderBook) ||
											this.props.smallScreen
												? (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														style: {paddingTop: '0.5em'},
														children: [
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)('h6', {
																	style: {margin: 9},
																	children: [
																		(0, q.jsx)(F(), {
																			content:
																				'exchange.settings.title.position_order_asset',
																		}),
																		' ',
																		(0, q.jsx)(m.Z, {
																			title: v().translate(
																				'exchange.settings.tooltip.position_order_asset'
																			),
																			children: (0, q.jsx)(jn.znh, {}),
																		}),
																	],
																}),
															}),
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)($.Z, {
																	placeholder: v().translate(
																		'settings.placeholder_select'
																	),
																	style: {width: '100%'},
																	value: this.props.buySellTop.toString(),
																	onSelect:
																		this.props.onToggleBuySellPosition.bind(
																			this
																		),
																	children: [
																		(0, q.jsx)($.Z.Option, {
																			value: 'false',
																			children: (0, q.jsx)(F(), {
																				content:
																					'exchange.settings.options.position_order_asset_opt1',
																			}),
																		}),
																		(0, q.jsx)($.Z.Option, {
																			value: 'true',
																			children: (0, q.jsx)(F(), {
																				content:
																					'exchange.settings.options.position_order_asset_opt2',
																			}),
																		}),
																	],
																}),
															}),
														],
												  })
												: null,
											!this.props.tinyScreen && this.props.verticalOrderBook
												? (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														style: {paddingTop: '0.5em'},
														children: [
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)('h6', {
																	style: {margin: 9},
																	children: [
																		(0, q.jsx)(F(), {
																			content:
																				'exchange.settings.title.orderbook_auto_scroll',
																		}),
																		' ',
																		(0, q.jsx)(m.Z, {
																			title: v().translate(
																				'exchange.settings.tooltip.orderbook_auto_scroll'
																			),
																			children: (0, q.jsx)(jn.znh, {}),
																		}),
																	],
																}),
															}),
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsx)(_n.Z, {
																	style: {margin: 6},
																	checked: this.state.autoScroll,
																	onChange: this.setAutoscroll.bind(this),
																}),
															}),
														],
												  })
												: null,
											!this.props.tinyScreen && this.props.verticalOrderBook
												? (0, q.jsxs)('div', {
														className: 'grid-block no-overflow wrap shrink',
														children: [
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsxs)('h6', {
																	style: {margin: 9},
																	children: [
																		(0, q.jsx)(F(), {
																			content:
																				'exchange.settings.title.reverse_order_book',
																		}),
																		' ',
																		(0, q.jsx)(m.Z, {
																			title: v().translate(
																				'exchange.settings.tooltip.reverse_order_book'
																			),
																			children: (0, q.jsx)(jn.znh, {}),
																		}),
																	],
																}),
															}),
															(0, q.jsx)('div', {
																className: 'small-6',
																children: (0, q.jsx)(_n.Z, {
																	style: {margin: 6},
																	checked: this.props.orderBookReversed,
																	onChange:
																		this.props.onOrderBookReversed.bind(this),
																}),
															}),
														],
												  })
												: null,
											!this.props.tinyScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															style: {paddingRight: 5},
															children: (0, q.jsxs)('h6', {
																style: {margin: 9},
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'exchange.settings.title.single_colum_order_form',
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.single_colum_order_form'
																		),
																		children: (0, q.jsx)(jn.znh, {}),
																	}),
																],
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)(_n.Z, {
																style: {margin: 6},
																checked: this.props.singleColumnOrderForm,
																onChange:
																	this.props.onToggleSingleColumnOrderForm.bind(
																		this
																	),
															}),
														}),
													],
												}),
											!this.props.tinyScreen &&
												(0, q.jsxs)('header', {
													children: [
														(0, q.jsx)(F(), {
															content:
																'exchange.settings.header.panel_grouping',
														}),
														' ',
														(0, q.jsx)(m.Z, {
															title: v().translate(
																'exchange.settings.tooltip.panel_grouping'
															),
															children: (0, q.jsx)(jn.znh, {}),
														}),
													],
												}),
											!this.props.tinyScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													style: {paddingBottom: '0.5em'},
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)('h6', {
																style: {margin: 9},
																children: (0, q.jsx)(F(), {
																	content: 'exchange.settings.title.my_trades',
																}),
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: this._getGroupingOptions('my_history'),
														}),
													],
												}),
											!this.props.tinyScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													style: {paddingBottom: '0.5em'},
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)('h6', {
																style: {margin: 9},
																children: (0, q.jsx)(F(), {
																	content:
																		'exchange.settings.title.market_trades',
																}),
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: this._getGroupingOptions('history'),
														}),
													],
												}),
											!this.props.tinyScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													style: {paddingBottom: '0.5em'},
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)('h6', {
																style: {margin: 9},
																children: (0, q.jsx)(F(), {
																	content:
																		'exchange.settings.title.open_orders',
																}),
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: this._getGroupingOptions('my_orders'),
														}),
													],
												}),
											!this.props.tinyScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													style: {paddingBottom: '0.5em'},
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)('h6', {
																style: {margin: 9},
																children: (0, q.jsx)(F(), {
																	content:
																		'exchange.settings.title.settlements',
																}),
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children:
																this._getGroupingOptions('open_settlement'),
														}),
													],
												}),
											!this.props.tinyScreen &&
												(0, q.jsx)('header', {
													children: (0, q.jsx)(F(), {
														content: 'exchange.settings.header.general',
													}),
												}),
											!this.props.tinyScreen &&
												!this.props.smallScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													style: {paddingBottom: '0.5em'},
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															style: {paddingRight: 5},
															children: (0, q.jsxs)('h6', {
																style: {margin: 9},
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'exchange.settings.title.market_location',
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.market_location'
																		),
																		children: (0, q.jsx)(jn.znh, {}),
																	}),
																],
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsxs)($.Z, {
																placeholder: v().translate(
																	'settings.placeholder_select'
																),
																style: {width: '100%'},
																value: this.props.mirrorPanels.toString(),
																onSelect: this.props.onMirrorPanels.bind(this),
																children: [
																	(0, q.jsx)($.Z.Option, {
																		value: 'false',
																		children: (0, q.jsx)(F(), {
																			content: 'settings.left',
																		}),
																	}),
																	(0, q.jsx)($.Z.Option, {
																		value: 'true',
																		children: (0, q.jsx)(F(), {
																			content: 'settings.right',
																		}),
																	}),
																],
															}),
														}),
													],
												}),
											!this.props.tinyScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															style: {paddingRight: 5},
															children: (0, q.jsxs)('h6', {
																style: {margin: 9},
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'exchange.settings.title.reduce_scrollbars',
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.reduce_scrollbars'
																		),
																		children: (0, q.jsx)(jn.znh, {}),
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.reload'
																		),
																		children: (0, q.jsx)(jn.kA6, {}),
																	}),
																],
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)(_n.Z, {
																style: {margin: 6},
																checked: this.props.hideScrollbars,
																onChange:
																	this.props.onToggleScrollbars.bind(this),
															}),
														}),
													],
												}),
											!this.props.tinyScreen &&
												(0, q.jsxs)('div', {
													className: 'grid-block no-overflow wrap shrink',
													children: [
														(0, q.jsx)('div', {
															className: 'small-6',
															style: {paddingRight: 5},
															children: (0, q.jsxs)('h6', {
																style: {margin: 9},
																children: [
																	(0, q.jsx)(F(), {
																		content:
																			'exchange.settings.title.hide_function_buttons',
																	}),
																	' ',
																	(0, q.jsx)(m.Z, {
																		title: v().translate(
																			'exchange.settings.tooltip.hide_function_buttons'
																		),
																		children: (0, q.jsx)(jn.znh, {}),
																	}),
																],
															}),
														}),
														(0, q.jsx)('div', {
															className: 'small-6',
															children: (0, q.jsx)(_n.Z, {
																style: {margin: 6},
																checked: this.props.hideFunctionButtons,
																onChange:
																	this.props.onHideFunctionButtons.bind(this),
															}),
														}),
													],
												}),
										],
									}),
								});
							},
						},
					]),
					r && Sn(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(n.Component);
			const Tn = Pn;
			var Nn = r(71665),
				Zn = r(46194),
				Rn = r(7085);
			function Bn(e) {
				return (
					(Bn =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Bn(e)
				);
			}
			function Fn(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function Mn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Fn(Object(r), !0).forEach(function (t) {
								Qn(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: Fn(Object(r)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(r, t)
								);
						  });
				}
				return e;
			}
			function En(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var r =
							null == e
								? null
								: ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
								  e['@@iterator'];
						if (null != r) {
							var n,
								o,
								i = [],
								s = !0,
								a = !1;
							try {
								for (
									r = r.call(e);
									!(s = (n = r.next()).done) &&
									(i.push(n.value), !t || i.length !== t);
									s = !0
								);
							} catch (e) {
								(a = !0), (o = e);
							} finally {
								try {
									s || null == r.return || r.return();
								} finally {
									if (a) throw o;
								}
							}
							return i;
						}
					})(e, t) ||
					In(e, t) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function In(e, t) {
				if (e) {
					if ('string' == typeof e) return qn(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					return (
						'Object' === r && e.constructor && (r = e.constructor.name),
						'Map' === r || 'Set' === r
							? Array.from(e)
							: 'Arguments' === r ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
							? qn(e, t)
							: void 0
					);
				}
			}
			function qn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function Ln(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Dn(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Vn(e, t, r) {
				return (
					t && Dn(e.prototype, t),
					r && Dn(e, r),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function zn(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Hn(e, t);
			}
			function Hn(e, t) {
				return (
					(Hn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Hn(e, t)
				);
			}
			function Un(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var r,
						n = Gn(e);
					if (t) {
						var o = Gn(this).constructor;
						r = Reflect.construct(n, arguments, o);
					} else r = n.apply(this, arguments);
					return Wn(this, r);
				};
			}
			function Wn(e, t) {
				if (t && ('object' === Bn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function Gn(e) {
				return (
					(Gn = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Gn(e)
				);
			}
			function Qn(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			var Kn = (function (e) {
				zn(r, e);
				var t = Un(r);
				function r() {
					return Ln(this, r), t.apply(this, arguments);
				}
				return (
					Vn(r, [
						{
							key: 'onKeyPress',
							value: function (e, t) {
								'Enter' == t.key && this.props.history.push(e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.quoteSymbol,
									r = e.baseSymbol,
									n = e.market,
									o = e.marketPickerAsset,
									i = this.props.onClose,
									s = n[1].quote,
									a =
										t == o
											? '/market/'.concat(s, '_').concat(r)
											: '/market/'.concat(t, '_').concat(s);
								return (0, q.jsx)(
									'li',
									{
										style: {height: 40},
										onKeyPress: this.onKeyPress.bind(this, a),
										tabIndex: this.props.tabIndex,
										children: (0, q.jsxs)(it.Z, {
											style: {display: 'flex'},
											onClick: i,
											to: a,
											children: [
												(0, q.jsx)('div', {
													style: {flex: 2},
													children: (0, q.jsx)(G.Z, {name: n[1].quote}),
												}),
												(0, q.jsx)('div', {
													style: {flex: 3},
													children: n[1].issuer,
												}),
											],
										}),
									},
									n[0]
								);
							},
						},
					]),
					r
				);
			})(n.Component);
			Qn(Kn, 'propTypes', {
				onClose: A().func,
				quoteSymbol: A().string,
				baseSymbol: A().string,
				market: A().array,
				marketPickerAsset: A().string,
			});
			var Yn = (function (e) {
					zn(r, e);
					var t = Un(r);
					function r() {
						var e;
						return (
							Ln(this, r),
							((e = t.call(this)).state = e.initialState()),
							(e.getAssetList = (0, x.Z)(Nn.Z.getAssetList.defer, 150)),
							e
						);
					}
					return (
						Vn(r, [
							{
								key: 'initialState',
								value: function () {
									return {marketsList: [], lookupQuote: null, inputValue: ''};
								},
							},
							{
								key: 'componentDidMount',
								value: function () {
									this.refs.marketPicker_input.focus();
								},
							},
							{
								key: 'componentDidUpdate',
								value: function () {
									this.refs.marketPicker_input.focus();
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									e.marketPickerAsset !== this.props.marketPickerAsset &&
										this.setState(this.initialState()),
										e.searchAssets !== this.props.searchAssets &&
											this.assetFilter();
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (e, t) {
									return (
										e.visible !== this.props.visible ||
										e.marketPickerAsset !== this.props.marketPickerAsset ||
										e.searchAssets !== this.props.searchAssets ||
										t.marketsList !== this.state.marketsList ||
										!R.Z.are_equal_shallow(t, this.state)
									);
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this.intervalId && clearInterval(this.intervalId);
								},
							},
							{
								key: '_onInputName',
								value: function (e, t) {
									var r = this,
										n = t.target.value.trim().toUpperCase();
									d.Jr.is_valid_symbol_error(n, !0)
										? this.setState({
												inputValue: n,
												activeSearch: !1,
												marketsList: [],
										  })
										: (this.setState({
												inputValue: n,
												activeSearch: !0,
												marketsList: [],
										  }),
										  this.state.inputValue !== n &&
												this.timer &&
												clearTimeout(this.timer),
										  (this.timer = setTimeout(function () {
												r._lookupAssets(n, e);
										  }, 1500)));
								},
							},
							{
								key: '_lookupAssets',
								value: function (e) {
									var t =
										arguments.length > 1 &&
										void 0 !== arguments[1] &&
										arguments[1];
									if (e || '' === e) {
										var r = e.toUpperCase();
										r.startsWith('BIT') &&
											r.length >= 6 &&
											(r = e.substr(3, r.length - 1)),
											this.getAssetList(r, 10, t),
											this.setState({lookupQuote: r});
									}
								},
							},
							{
								key: '_fetchIssuerName',
								value: function (e) {
									var t = d.BQ.getObject(e, !1, !1);
									return t ? t.get('name') : void 0;
								},
							},
							{
								key: '_getMarketSortComponents',
								value: function (e) {
									var t = {},
										r = e.quote;
									if (-1 !== r.indexOf('.')) {
										var n = En(r.split('.'), 2),
											o = n[0],
											i = n[1];
										(t.gateway = o), (t.asset = i);
									} else t.asset = r;
									return '1.2.0' === e.issuerId && (t.isCommittee = !0), t;
								},
							},
							{
								key: '_sortMarketsList',
								value: function (e, t) {
									var r = this;
									return (
										t.startsWith('BIT') &&
											t.length >= 6 &&
											(t = t.substr(3, t.length - 1)),
										e.sort(function (e, n) {
											var o = En(e, 2)[1],
												i = En(n, 2)[1],
												s = r._getMarketSortComponents(o),
												a = r._getMarketSortComponents(i);
											if (s.asset !== a.asset) {
												if (s.asset === t) return -1;
												if (a.asset === t) return 1;
												if (s.asset > a.asset) return -1;
												if (s.asset < a.asset) return 1;
											}
											if (s.isCommittee ^ a.isCommittee) {
												if (s.isCommittee) return -1;
												if (a.isCommittee) return 1;
											}
											return s.gateway > a.gateway
												? 1
												: s.gateway < a.gateway
												? -1
												: 0;
										})
									);
								},
							},
							{
								key: '_checkAndUpdateMarketList',
								value: function (e) {
									var t = this;
									clearInterval(this.intervalId),
										(this.intervalId = setInterval(function () {
											var r,
												n = 0,
												o = (function (e, t) {
													var r =
														('undefined' != typeof Symbol &&
															e[Symbol.iterator]) ||
														e['@@iterator'];
													if (!r) {
														if (Array.isArray(e) || (r = In(e))) {
															r && (e = r);
															var n = 0,
																o = function () {};
															return {
																s: o,
																n: function () {
																	return n >= e.length
																		? {done: !0}
																		: {done: !1, value: e[n++]};
																},
																e: function (e) {
																	throw e;
																},
																f: o,
															};
														}
														throw new TypeError(
															'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
														);
													}
													var i,
														s = !0,
														a = !1;
													return {
														s: function () {
															r = r.call(e);
														},
														n: function () {
															var e = r.next();
															return (s = e.done), e;
														},
														e: function (e) {
															(a = !0), (i = e);
														},
														f: function () {
															try {
																s || null == r.return || r.return();
															} finally {
																if (a) throw i;
															}
														},
													};
												})(e);
											try {
												for (o.s(); !(r = o.n()).done; ) {
													var i = En(r.value, 2)[1];
													i.issuer ||
														((i.issuer = t._fetchIssuerName(i.issuerId)),
														i.issuer || n++);
												}
											} catch (e) {
												o.e(e);
											} finally {
												o.f();
											}
											n ||
												(clearInterval(t.intervalId),
												t.setState({marketsList: e, activeSearch: !1}));
										}, 300));
								},
							},
							{
								key: 'componentWillMount',
								value: function () {
									null !== this.props.quoteAsset && this.props.baseAsset;
								},
							},
							{
								key: 'assetFilter',
								value: function () {
									var e = this,
										t = this.props,
										r = t.searchAssets,
										n = t.marketPickerAsset,
										o = this.state,
										i = o.inputValue,
										s = o.lookupQuote;
									this.setState({activeSearch: !0});
									var a = 0,
										l = [],
										c = this.props.baseAsset.get('symbol'),
										u = this.props.quoteAsset.get('symbol');
									r.size &&
										i &&
										i.length > 2 &&
										r
											.filter(function (e) {
												try {
													if (e.options.description) {
														var t = JSON.parse(e.options.description);
														if ('visible' in t && !t.visible) return !1;
													}
												} catch (e) {}
												return -1 !== e.symbol.indexOf(s);
											})
											.forEach(function (t) {
												if (!(a > 100)) {
													a++;
													var r = e._fetchIssuerName(t.issuer),
														o = e.props.baseAsset.get('symbol'),
														i = t.symbol + '_' + o,
														s = u == n;
													((s && t.symbol != c) || (!s && t.symbol != u)) &&
														l.push([
															i,
															{
																quote: t.symbol,
																base: o,
																issuerId: t.issuer,
																issuer: r,
															},
														]);
												}
											});
									var d = this._sortMarketsList(l, i);
									this._checkAndUpdateMarketList(d);
								},
							},
							{
								key: 'renderSearchBar',
								value: function () {
									var e = this.state.inputValue,
										t = v()
											.translate('exchange.market_picker.find_by_asset')
											.toUpperCase();
									return (0, q.jsx)('div', {
										id: 'filter',
										children: (0, q.jsx)(de.Z.Item, {
											label: t,
											children: (0, q.jsx)(ue.Z, {
												type: 'text',
												ref: 'marketPicker_input',
												value: e,
												onChange: this._onInputName.bind(this, !0),
												placeholder: v().translate(
													'exchange.market_picker.search'
												),
												maxLength: 16,
												tabIndex: 2,
											}),
										}),
									});
								},
							},
							{
								key: 'renderResults',
								value: function () {
									var e = this,
										t = this.state.marketsList,
										r = this.state,
										n = r.activeSearch,
										o = r.inputValue,
										i = n && 0 != o.length,
										s = this.props.marketPickerAsset,
										a = this.props.baseAsset.get('symbol'),
										l = this.props.quoteAsset.get('symbol');
									return i
										? (0, q.jsx)(Rn.Z, {style: {marginLeft: '8px'}})
										: (0, q.jsx)('div', {
												className: 'results',
												children: (0, q.jsx)('ul', {
													style: {marginLeft: 0, minHeight: '20px'},
													children: t.map(function (t, r) {
														return (0,
														q.jsx)(Kn, {tabIndex: r + 100, baseSymbol: a, quoteSymbol: l, market: t, marketPickerAsset: s, history: e.props.history, onClose: e.props.onClose.bind(e)}, r);
													}),
												}),
										  });
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props.marketPickerAsset;
									return (0, q.jsxs)('div', {
										className: 'marketPicker',
										children: [
											(0, q.jsxs)('div', {
												className: 'marketPicker__subHeader',
												children: [
													(0, q.jsx)(F(), {
														content: 'exchange.market_picker.sub_title',
													}),
													' ',
													(0, q.jsx)(it.Z, {
														to: '/asset/'.concat(e),
														style: {
															cursor: 'pointer',
															color: 'lightblue !important',
														},
														children: (0, q.jsx)(G.Z, {name: e}),
													}),
												],
											}),
											this.renderSearchBar(),
											this.renderResults(),
										],
									});
								},
							},
						]),
						r
					);
				})(n.Component),
				Jn = (function (e) {
					zn(r, e);
					var t = Un(r);
					function r() {
						var e;
						return (
							Ln(this, r),
							((e = t.call(this)).state = {open: !1, smallScreen: !1}),
							e
						);
					}
					return (
						Vn(r, [
							{
								key: 'componentWillMount',
								value: function () {
									this.setState({smallScreen: window.innerWidth <= 800});
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									(this.props.quoteAsset.get('id') === e.quoteAsset.get('id') &&
										this.props.baseAsset.get('id') === e.baseAsset.get('id')) ||
										this.onClose();
								},
							},
							{
								key: 'show',
								value: function () {
									this.props.showModal();
								},
							},
							{
								key: 'onClose',
								value: function () {
									this.props.onToggleMarketPicker(null), this.props.hideModal();
								},
							},
							{
								key: 'render',
								value: function () {
									return (0, q.jsx)(
										vn.Z,
										Mn(
											Mn(
												{
													title: v().translate('exchange.market_picker.title'),
													closable: !1,
													visible: this.props.visible,
													id: this.props.modalId,
													overlay: !0,
													onCancel: this.onClose.bind(this),
													noHeaderContainer: !0,
													footer: null,
													ref: this.props.modalId,
												},
												this.props
											),
											{},
											{
												children: (0, q.jsx)(
													Yn,
													Mn({onClose: this.onClose.bind(this)}, this.props)
												),
											}
										)
									);
								},
							},
						]),
						r
					);
				})(n.Component);
			const $n = (Jn = (0, Dr.$)(Jn, {
				listenTo: function () {
					return [Zn.Z];
				},
				getProps: function () {
					return {
						searchAssets: Zn.Z.getState().assets,
						assetsLoading: Zn.Z.getState().assetsLoading,
					};
				},
			}));
			function Xn(e) {
				return (
					(Xn =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Xn(e)
				);
			}
			function eo(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function to(e, t) {
				return (
					(to =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					to(e, t)
				);
			}
			function ro(e, t) {
				if (t && ('object' === Xn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return no(e);
			}
			function no(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function oo(e) {
				return (
					(oo = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					oo(e)
				);
			}
			var io = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && to(e, t);
					})(s, e);
					var t,
						r,
						n,
						o,
						i =
							((n = s),
							(o = (function () {
								if ('undefined' == typeof Reflect || !Reflect.construct)
									return !1;
								if (Reflect.construct.sham) return !1;
								if ('function' == typeof Proxy) return !0;
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {})
										),
										!0
									);
								} catch (e) {
									return !1;
								}
							})()),
							function () {
								var e,
									t = oo(n);
								if (o) {
									var r = oo(this).constructor;
									e = Reflect.construct(t, arguments, r);
								} else e = t.apply(this, arguments);
								return ro(this, e);
							});
					function s(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, s),
							((t = i.call(this, e)).submit = t.submit.bind(no(t))),
							(t.cancel = t.cancel.bind(no(t))),
							t
						);
					}
					return (
						(t = s),
						(r = [
							{
								key: '_onForce',
								value: function (e, t) {
									t.preventDefault(),
										this.props.hideModal(),
										e && this.props.onForce();
								},
							},
							{
								key: 'submit',
								value: function (e) {
									this._onForce(!0, e);
								},
							},
							{
								key: 'cancel',
								value: function (e) {
									this._onForce(!1, e);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.type,
										r = e.diff,
										n = e.hasOrders,
										o = [
											(0, q.jsx)(
												X.Z,
												{
													onClick: this.submit,
													children: v().translate('settings.yes'),
												},
												'submit'
											),
											(0, q.jsx)(
												X.Z,
												{
													type: 'primary',
													onClick: this.cancel,
													children: v().translate('settings.no'),
												},
												'cancel'
											),
										];
									return (0, q.jsx)(vn.Z, {
										footer: o,
										visible: this.props.visible,
										onCancel: this.cancel,
										title: v().translate('transaction.confirm'),
										children: (0, q.jsx)('div', {
											className: 'grid-block vertical',
											children: n
												? (0, q.jsx)(F(), {
														content: 'exchange.confirm_' + t,
														diff: R.Z.format_number(r, 2),
												  })
												: (0, q.jsx)(F(), {
														content: 'exchange.confirm_no_orders_' + t,
												  }),
										}),
									});
								},
							},
						]),
						r && eo(t.prototype, r),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						s
					);
				})(n.Component),
				so = r(71468),
				ao = r.n(so),
				lo = r(80008),
				co = r.n(lo),
				uo = r(25108);
			function po(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var r =
							null == e
								? null
								: ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
								  e['@@iterator'];
						if (null != r) {
							var n,
								o,
								i = [],
								s = !0,
								a = !1;
							try {
								for (
									r = r.call(e);
									!(s = (n = r.next()).done) &&
									(i.push(n.value), !t || i.length !== t);
									s = !0
								);
							} catch (e) {
								(a = !0), (o = e);
							} finally {
								try {
									s || null == r.return || r.return();
								} finally {
									if (a) throw o;
								}
							}
							return i;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ('string' == typeof e) return ho(e, t);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							return (
								'Object' === r && e.constructor && (r = e.constructor.name),
								'Map' === r || 'Set' === r
									? Array.from(e)
									: 'Arguments' === r ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
									? ho(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function ho(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function fo(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function mo(e, t, r) {
				return (
					t && fo(e.prototype, t),
					r && fo(e, r),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function bo(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			var yo = mo(function e(t) {
				bo(this, e), (this.name = t.ticker), (this.ticker = t.ticker);
				var r = R.Z.replaceName(t.baseAsset),
					n = r.name,
					o = r.prefix,
					i = R.Z.replaceName(t.quoteAsset),
					s = i.name,
					a = i.prefix;
				(this.description = ''
					.concat(a || '')
					.concat(s, ' / ')
					.concat(o || '')
					.concat(n, ' ')
					.concat('('.concat('OPEN', ')'))),
					(this.type = 'bitcoin'),
					(this.session = '24x7'),
					(this.timezone = co().tz.guess()),
					(this.data_status = 'streaming'),
					(this.supported_resolutions = t.resolutions),
					(this.has_empty_bars = !0),
					(this.pricescale = Math.pow(10, t.baseAsset.get('precision'))),
					(this.quoteAsset = t.quoteAsset),
					(this.baseAsset = t.baseAsset),
					(this.minmov = 1),
					(this.has_intraday = this.supported_resolutions.reduce(function (
						e,
						t
					) {
						return e || !isNaN(parseInt(t, 10));
					},
					!1)),
					(this.intraday_multipliers = this.supported_resolutions.filter(
						function (e) {
							return !isNaN(parseInt(e, 10));
						}
					)),
					(this.has_seconds = this.supported_resolutions.reduce(function (
						e,
						t
					) {
						return e || -1 !== t.indexOf('S');
					},
					!1)),
					(this.seconds_multipliers = this.supported_resolutions.filter(
						function (e) {
							return -1 !== e.indexOf('S');
						}
					)),
					(this.has_daily = this.supported_resolutions.reduce(function (e, t) {
						return e || -1 !== t.indexOf('D');
					}, !1)),
					(this.has_daily = this.supported_resolutions.reduce(function (e, t) {
						return e || -1 !== t.indexOf('D');
					}, !1));
			});
			function go(e) {
				return e
					.map(function (e) {
						var t = e / 60,
							r = t / 60 / 24,
							n = r / 7;
						if (t < 1) return e + 'S';
						if (r < 1 && parseInt(t, 10) === t) return t.toString();
						if (n < 1) {
							if (r >= 1 && parseInt(r, 10) === r)
								return 1 === r ? 'D' : r + 'D';
						} else if (n >= 1 && parseInt(n, 10) === n) return n + 'D';
						return null;
					})
					.filter(function (e) {
						return !!e;
					});
			}
			var vo = (function () {
					function e() {
						bo(this, e);
					}
					return (
						mo(e, [
							{
								key: 'update',
								value: function (e) {
									for (var t in e)
										switch (t) {
											case 'resolutions':
												this.supported_resolutions = go(e.resolutions);
												break;
											case 'onMarketChange':
												o.Z.unsubscribe('market_change'),
													o.Z.subscribe('market_change', e[t]);
												break;
											default:
												this[t] = e[t];
										}
								},
							},
							{
								key: 'clearSubs',
								value: function () {
									o.Z.clearSubs();
								},
							},
							{
								key: 'onReady',
								value: function (e) {
									var t = this;
									setTimeout(function () {
										e({
											exchanges: [
												{
													value: 'OPEN.',
													name: 'Openledger',
													desc: 'Openledger Gateway',
												},
											],
											symbols_types: [],
											supported_resolutions: t.supported_resolutions,
											supports_marks: !1,
											supports_search: !1,
											supports_time: !0,
										});
									}, 10);
								},
							},
							{
								key: 'searchSymbols',
								value: function (e, t, r, n) {
									uo.log('searchSymbols', e, t, r), n([]);
								},
							},
							{
								key: 'resolveSymbol',
								value: function (e, t, r) {
									var n = this,
										o = po(e.split('_'), 2),
										i = o[0],
										s = o[1];
									Promise.all([
										(0, d.aN)('getAsset', i),
										(0, d.aN)('getAsset', s),
									])
										.then(function (r) {
											var o = po(r, 2),
												i = o[0],
												s = o[1];
											t(
												new yo({
													ticker: e,
													quoteAsset: i,
													baseAsset: s,
													resolutions: n.supported_resolutions,
												})
											);
										})
										.catch(r);
								},
							},
							{
								key: 'getBars',
								value: function (e, t, r, n, o, i, s) {
									var a = this;
									(r *= 1e3), (n *= 1e3);
									var l,
										c = this._getHistory();
									if (
										((this.latestBar = c[c.length - 1]),
										(c = c.filter(function (e) {
											return e.time >= r && e.time <= n;
										})),
										this.interval !== t)
									) {
										if (!s) return;
										var u =
											'D' === (l = t)
												? 86400
												: -1 !== l.indexOf('W')
												? 7 * parseInt(l.replace('D', ''), 10) * 24 * 60 * 60
												: -1 !== l.indexOf('D')
												? 24 * parseInt(l.replace('D', ''), 10) * 60 * 60
												: -1 !== l.indexOf('S')
												? parseInt(l.replace('S', ''), 10)
												: 60 * parseInt(l, 10);
										return (
											O.Z.changeBucketSize(u),
											O.Z.unSubscribeMarket(
												e.quoteAsset.get('id'),
												e.baseAsset.get('id')
											).then(function () {
												O.Z.subscribeMarket(e.baseAsset, e.quoteAsset, u).then(
													function () {
														var e = a._getHistory();
														if (
															((a.latestBar = e[e.length - 1]),
															(e = e.filter(function (e) {
																return e.time >= r && e.time <= n;
															})),
															(a.interval = t),
															!e.length)
														)
															return o(e, {noData: !0});
														o(e);
													}
												);
											})
										);
									}
									if (((this.interval = t), !c.length))
										return o(c, {noData: !0});
									o(c);
								},
							},
							{
								key: '_getHistory',
								value: function () {
									return o.Z.getState().priceData;
								},
							},
							{
								key: 'subscribeBars',
								value: function (e, t, r, n, i) {
									var s = this;
									o.Z.unsubscribe('subscribeBars'),
										i(),
										o.Z.subscribe('subscribeBars', function () {
											var e = s._getHistory(),
												t = e.filter(function (e) {
													return !s.latestBar || e.time > s.latestBar.time;
												});
											if (t.length)
												t.forEach(function (e) {
													r(e);
												}),
													(s.latestBar = t[t.length - 1]);
											else {
												var n = !1;
												for (var o in s.latestBar)
													s.latestBar[o] !== e[e.length - 1][o] && (n = !0);
												n && r(e[e.length - 1]);
											}
										});
								},
							},
							{key: 'unsubscribeBars', value: function () {}},
							{key: 'calculateHistoryDepth', value: function (e, t, r) {}},
							{
								key: 'getServerTime',
								value: function (e) {
									e(new Date().getTime() / 1e3);
								},
							},
						]),
						e
					);
				})(),
				xo = [
					'America/Argentina/Buenos_Aires',
					'America/Bogota',
					'America/Caracas',
					'America/Chicago',
					'America/El_Salvador',
					'America/Los_Angeles',
					'America/Mexico_City',
					'America/New_York',
					'America/Phoenix',
					'America/Sao_Paulo',
					'America/Toronto',
					'America/Vancouver',
					'Asia/Almaty',
					'Asia/Ashkhabad',
					'Asia/Bangkok',
					'Asia/Dubai',
					'Asia/Hong_Kong',
					'Asia/Kathmandu',
					'Asia/Kolkata',
					'Asia/Seoul',
					'Asia/Shanghai',
					'Asia/Singapore',
					'Asia/Taipei',
					'Asia/Tehran',
					'Asia/Tokyo',
					'Australia/ACT',
					'Australia/Adelaide',
					'Australia/Brisbane',
					'Australia/Sydney',
					'Europe/Athens',
					'Europe/Berlin',
					'Europe/Istanbul',
					'Europe/London',
					'Europe/Madrid',
					'Europe/Moscow',
					'Europe/Paris',
					'Europe/Warsaw',
					'Europe/Zurich',
					'Pacific/Auckland',
					'Pacific/Chatham',
					'Pacific/Fakaofo',
					'Pacific/Honolulu',
					'US/Mountain',
				];
			function _o() {
				var e = co().tz.guess();
				if (-1 !== xo.indexOf(e)) return e;
				for (
					var t = co()().toISOString(), r = co().tz(t, e).format(), n = 0;
					n < xo.length;
					n++
				)
					if (co().tz(t, xo[n]).format() === r) return xo[n];
				return (
					uo.log(
						'No matching timezone found for '.concat(
							e,
							', setting to default value of Europe/London'
						)
					),
					'Europe/London'
				);
			}
			var jo = r(22949),
				ko = r(25108);
			function So(e) {
				return (
					(So =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					So(e)
				);
			}
			function wo(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Ao(e, t) {
				return (
					(Ao =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ao(e, t)
				);
			}
			function Co(e, t) {
				if (t && ('object' === So(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Oo(e);
			}
			function Oo(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Po(e) {
				return (
					(Po = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Po(e)
				);
			}
			var To = r(16358),
				No = {name: '1p2i2oq', styles: 'width:32px'},
				Zo = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && Ao(e, t);
					})(a, e);
					var t,
						r,
						o,
						i,
						s =
							((o = a),
							(i = (function () {
								if ('undefined' == typeof Reflect || !Reflect.construct)
									return !1;
								if (Reflect.construct.sham) return !1;
								if ('function' == typeof Proxy) return !0;
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {})
										),
										!0
									);
								} catch (e) {
									return !1;
								}
							})()),
							function () {
								var e,
									t = Po(o);
								if (i) {
									var r = Po(this).constructor;
									e = Reflect.construct(t, arguments, r);
								} else e = t.apply(this, arguments);
								return Co(this, e);
							});
					function a(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((t = s.call(this)).state = {
								showSaveModal: !1,
								showLoadModal: !1,
								error: !1,
							}),
							(t.layoutName = n.createRef()),
							(t.hideModal = t.hideModal.bind(Oo(t))),
							(t.resetError = t.resetError.bind(Oo(t))),
							(t.loadLastChart = t.loadLastChart.bind(Oo(t))),
							t
						);
					}
					return (
						(t = a),
						(r = [
							{
								key: 'loadTradingView',
								value: function (e) {
									var t = this,
										r = e.dataFeed,
										n = ao()[e.theme],
										o = this;
									if (r && !this.tvWidget) {
										r.update({
											resolutions: e.buckets,
											ticker: e.quoteSymbol + '_' + e.baseSymbol,
											interval: go([e.bucketSize])[0],
										});
										var i = [
												'symbol_info',
												'symbol_search_hot_key',
												'border_around_the_chart',
												'header_symbol_search',
												'header_compare',
												'header_saveload',
											],
											s = [];
										(!this.props.mobile && this.props.chartZoom) ||
											(i.push('chart_scroll'), i.push('chart_zoom')),
											this.props.mobile || !this.props.chartTools
												? (i.push('left_toolbar'),
												  i.push('chart_crosshair_menu'),
												  i.push('chart_events'),
												  i.push('footer_share_buttons'),
												  i.push('footer_screenshot'),
												  i.push('footer_publish_idea_button'),
												  i.push('caption_buttons_text_if_possible'),
												  i.push('line_tool_templates'),
												  i.push('widgetbar_tabs'),
												  i.push('support_manage_drawings'),
												  i.push('support_multicharts'),
												  i.push('right_bar_stays_on_scroll'),
												  i.push('charts_auto_save'),
												  i.push('edit_buttons_in_legend'),
												  i.push('context_menus'),
												  i.push('control_bar'),
												  i.push('header_fullscreen_button'),
												  i.push('header_widget'),
												  i.push('symbollist_context_menu'),
												  i.push('show_pro_features'))
												: (s.push('study_templates'),
												  s.push('keep_left_toolbar_visible_on_small_screens')),
											(this.tvWidget = new To.widget({
												fullscreen: !1,
												symbol: e.quoteSymbol + '_' + e.baseSymbol,
												interval: go([e.bucketSize])[0],
												library_path: ''.concat('', '/charting_library/'),
												datafeed: r,
												container_id: 'tv_chart',
												charts_storage_url: 'https://saveload.tradingview.com',
												charts_storage_api_version: '1.1',
												client_id: 'tradingview.com',
												user_id: 'public_user_id',
												autosize: !0,
												locale: e.locale,
												timezone: _o(),
												toolbar_bg: n.bgColor,
												overrides: {
													'paneProperties.background': n.bgColor,
													'paneProperties.horzGridProperties.color':
														n.axisLineColor,
													'paneProperties.vertGridProperties.color':
														n.axisLineColor,
													'scalesProperties.lineColor': n.axisLineColor,
													'scalesProperties.textColor': n.textColor,
												},
												custom_css_url: e.theme + '.css',
												enabled_features: s,
												disabled_features: i,
												debug: !1,
												preset: this.props.mobile ? 'mobile' : '',
											})),
											this.tvWidget.onChartReady(function () {
												t.tvWidget
													.createButton()
													.attr(
														'title',
														v().translate('exchange.load_custom_charts')
													)
													.addClass('apply-common-tooltip')
													.on('click', function () {
														o.setState({showLoadModal: !0});
													})
													.append(
														'<span>'.concat(
															v().translate('exchange.chart_load'),
															'</span>'
														)
													),
													t.tvWidget
														.createButton()
														.attr(
															'title',
															v().translate('exchange.save_custom_charts')
														)
														.addClass('apply-common-tooltip')
														.on('click', function () {
															o.setState({showSaveModal: !0});
														})
														.append(
															'<span>'.concat(
																v().translate('exchange.chart_save'),
																'</span>'
															)
														),
													r.update({onMarketChange: t._setSymbol.bind(t)}),
													t.loadLastChart();
											}),
											(this._onWheel = this._onWheel.bind(this));
									}
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									e.marketReady &&
										!this.props.dataFeed &&
										e.dataFeed &&
										loadTradingView(e);
								},
							},
							{
								key: '_setSymbol',
								value: function (e) {
									this.tvWidget &&
										(this.tvWidget.chart().removeAllShapes(),
										this.loadLastChart(),
										this.tvWidget.setSymbol(e, go([this.props.bucketSize])[0]));
								},
							},
							{
								key: 'componentDidMount',
								value: function () {
									this.loadTradingView(this.props);
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this.props.dataFeed.clearSubs();
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (e, t) {
									return (
										t.showLoadModal !== this.state.showLoadModal ||
										t.showSaveModal !== this.state.showSaveModal ||
										e.chartHeight !== this.props.chartHeight ||
										this.props.charts.size !== e.charts.size ||
										!this.tvWidget ||
										e.marketReady
									);
								},
							},
							{
								key: '_onWheel',
								value: function (e) {
									ko.log('Test wheel interception');
								},
							},
							{
								key: 'onSubmitConfirmation',
								value: function (e) {
									var t = this,
										r = this.layoutName,
										n = this.props.charts.some(function (e) {
											return (
												e.key === r.current.state.value &&
												e.symbol ===
													t.props.quoteSymbol + '_' + t.props.baseSymbol
											);
										}),
										o = this;
									n
										? this.setState({error: n})
										: (this.resetError(),
										  this.tvWidget.save(function (e) {
												var t = {};
												(t.key = r.current.state.value || ''),
													(t.object = e),
													(t.name = r.current.state.value || ''),
													(t.symbol =
														o.props.quoteSymbol + '_' + o.props.baseSymbol),
													(t.modified = new Date().toLocaleDateString('en-US')),
													C.Z.addChartLayout(t),
													o.setState({showSaveModal: !1}, function () {
														o.layoutName.current.state &&
															(o.layoutName.current.state.value = null);
													});
										  }));
								},
							},
							{
								key: 'hideModal',
								value: function () {
									this.resetError(),
										this.setState({showSaveModal: !1, showLoadModal: !1});
								},
							},
							{
								key: 'handleDelete',
								value: function (e) {
									C.Z.deleteChartLayout(e);
								},
							},
							{
								key: 'resetError',
								value: function () {
									this.setState({error: !1});
								},
							},
							{
								key: 'loadLastChart',
								value: function () {
									var e = this.props,
										t = e.charts,
										r = e.quoteSymbol,
										n = e.baseSymbol,
										o = t.toArray().filter(function (e) {
											return e.symbol === r + '_' + n && e.enabled;
										});
									o[0] && this.tvWidget.load(o[0].object);
								},
							},
							{
								key: 'render',
								value: function () {
									var e,
										t = this,
										r = this.props,
										n = r.charts,
										o = r.quoteSymbol,
										i = r.baseSymbol,
										s = this.state.error,
										a = s ? 'has-error' : '',
										l = n.toArray().filter(function (e) {
											return e.symbol === o + '_' + i;
										}),
										c = [
											{
												title: v().translate('exchange.layout_name'),
												dataIndex: 'name',
												key: 'name',
											},
											{
												title: v().translate('exchange.modified'),
												dataIndex: 'modified',
												key: 'modified',
											},
											{
												title: v().translate('exchange.actions'),
												dataIndex: 'actions',
												key: 'actions',
												render: function (e, r) {
													return (0, q.jsx)(jn.VPh, {
														css: No,
														onClick: t.handleDelete.bind(t, r.name),
													});
												},
											},
										];
									return (
										(e =
											window.innerWidth > 640
												? {height: '100%', minHeight: '300px'}
												: {height: '100%'}),
										(0, q.jsxs)('div', {
											className: 'small-12',
											style: {height: '100%'},
											children: [
												(0, q.jsx)('div', {
													className: 'exchange-bordered',
													style: e,
													id: 'tv_chart',
												}),
												(0, q.jsx)(vn.Z, {
													title: v().translate('exchange.load_chart_layout'),
													closable: !1,
													visible: this.state.showLoadModal,
													footer: [
														(0, q.jsx)(
															X.Z,
															{
																onClick: this.hideModal,
																children: v().translate('modal.close'),
															},
															'cancel'
														),
													],
													children: (0, q.jsx)(jo.Z, {
														dataSource: l || [],
														columns: c,
														onRow: function (e) {
															return {
																onClick: function (r) {
																	'td' === r.target.localName
																		? (t.hideModal(),
																		  C.Z.addChartLayout(e),
																		  t.tvWidget.load(e.object))
																		: 1 ===
																				r.currentTarget.parentElement
																					.childElementCount && t.hideModal();
																},
															};
														},
													}),
												}),
												(0, q.jsx)(vn.Z, {
													title: v().translate(
														'exchange.save_new_chart_layout'
													),
													closable: !1,
													visible: this.state.showSaveModal,
													footer: [
														(0, q.jsx)(
															X.Z,
															{
																type: 'primary',
																onClick: this.onSubmitConfirmation.bind(this),
																children: v().translate('modal.save'),
															},
															'submit'
														),
														(0, q.jsx)(
															X.Z,
															{
																onClick: this.hideModal,
																children: v().translate('modal.close'),
															},
															'cancel'
														),
													],
													children: (0, q.jsxs)('div', {
														children: [
															s
																? (0, q.jsx)('span', {
																		className: a,
																		children: (0, q.jsx)(F(), {
																			content: 'exchange.chart_error',
																		}),
																  })
																: null,
															(0, q.jsx)('span', {
																className: a,
																style: {borderBottom: '#A09F9F 1px dotted'},
																children: (0, q.jsx)(ue.Z, {
																	placeholder: v().translate(
																		'exchange.enter_chart_layout_name'
																	),
																	ref: this.layoutName,
																	onChange: this.resetError,
																	onPressEnter:
																		this.onSubmitConfirmation.bind(this),
																}),
															}),
														],
													}),
												}),
											],
										})
									);
								},
							},
						]) && wo(t.prototype, r),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(n.Component);
			const Ro = (0, Dr.$)(Zo, {
				listenTo: function () {
					return [s.Z];
				},
				getProps: function () {
					return {charts: s.Z.getState().chartLayouts};
				},
			});
			var Bo = r(10920),
				Fo = r.n(Bo),
				Mo = r(68652);
			function Eo(e) {
				return (
					(Eo =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Eo(e)
				);
			}
			function Io(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function qo(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Lo(e, t) {
				return (
					(Lo =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Lo(e, t)
				);
			}
			function Do(e, t) {
				if (t && ('object' === Eo(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function Vo(e) {
				return (
					(Vo = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Vo(e)
				);
			}
			var zo = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Lo(e, t);
				})(s, e);
				var t,
					r,
					n,
					o,
					i =
						((n = s),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = Vo(n);
							if (o) {
								var r = Vo(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return Do(this, e);
						});
				function s() {
					return Io(this, s), i.apply(this, arguments);
				}
				return (
					(t = s),
					(r = [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								var t =
									!isNaN(e.feedPrice) && e.feedPrice !== this.props.feedPrice;
								return (
									(0, N.Pz)(e.orders, this.props.orders) ||
									(0, N.Pz)(e.call_orders, this.props.call_orders) ||
									t ||
									e.feedPrice !== this.props.feedPrice ||
									e.height !== this.props.height ||
									e.isPanelActive !== this.props.isPanelActive ||
									e.activePanels !== this.props.activePanels ||
									e.LCP !== this.props.LCP ||
									e.showCallLimit !== this.props.showCallLimit ||
									e.hasPrediction !== this.props.hasPrediction ||
									e.feedPrice !== this.props.feedPrice ||
									e.marketReady !== this.props.marketReady
								);
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this.reflowChart(500);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								this.refs.depthChart &&
									e.activePanels !== this.props.activePanels &&
									this.reflowChart(100);
							},
						},
						{
							key: 'componentWillUpdate',
							value: function () {
								this.props.centerRef &&
									(this.tempScroll = this.props.centerRef.scrollTop);
							},
						},
						{
							key: 'componentDidUpdate',
							value: function () {
								this.props.centerRef &&
									(this.props.centerRef.scrollTop = this.tempScroll);
							},
						},
						{
							key: 'reflowChart',
							value: function (e) {
								var t = this;
								setTimeout(function () {
									t.refs.depthChart && t.refs.depthChart.chart.reflow();
								}, e);
							},
						},
						{
							key: '_getThemeColors',
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: this.props;
								return ao()[e.theme];
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.flat_bids,
									r = e.flat_asks,
									n = e.flat_calls,
									o = e.flat_settles,
									i = e.totalBids,
									s = e.totalAsks,
									a = e.base,
									l = e.quote,
									c = e.feedPrice,
									u = this._getThemeColors(),
									d = u.primaryText,
									p = u.callColor,
									h = u.settleColor,
									f = u.settleFillColor,
									m = u.bidColor,
									b = u.bidFillColor,
									y = u.askColor,
									g = u.askFillColor,
									x = u.axisLineColor,
									_ = window.innerWidth > 640,
									j = R.Z.replaceName(a),
									k = j.name,
									S = j.prefix,
									w = R.Z.replaceName(l),
									A = w.name,
									C = w.prefix;
								(k = (S || '') + k), (A = (C || '') + A);
								var O,
									P,
									T = (0, Mo.Z)(t),
									N = (0, Mo.Z)(r),
									Z = (0, Mo.Z)(n),
									B = (0, Mo.Z)(o),
									M = {
										chart: {
											type: 'area',
											backgroundColor: 'rgba(255, 0, 0, 0)',
											spacing: [10, 0, 5, 0],
										},
										title: {text: null},
										credits: {enabled: !1},
										legend: {enabled: !1},
										rangeSelector: {enabled: !1},
										navigator: {enabled: !1},
										scrollbar: {enabled: !1},
										dataGrouping: {enabled: !1},
										tooltip: {
											shared: !1,
											backgroundColor: 'rgba(0, 0, 0, 0.75)',
											useHTML: !0,
											formatter: function () {
												return '\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>'
													.concat(
														v().translate('exchange.price'),
														':</td>\n\t\t\t\t\t\t\t<td style="text-align: right">'
													)
													.concat(
														R.Z.format_number(this.x, a.get('precision')),
														' '
													)
													.concat(k, '/')
													.concat(
														A,
														'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>'
													)
													.concat(
														v().translate('exchange.quantity'),
														':</td>\n\t\t\t\t\t\t\t<td style="text-align: right">'
													)
													.concat(
														R.Z.format_number(this.y, l.get('precision')),
														' '
													)
													.concat(
														A,
														'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t'
													);
											},
											style: {color: '#FFFFFF'},
										},
										series: [],
										yAxis: {
											labels: {
												enabled: !0,
												style: {color: d},
												formatter: function () {
													return R.Z.format_number(
														this.value,
														l.get('precision')
													);
												},
											},
											opposite: !1,
											title: {text: null, style: {color: '#FFFFFF'}},
											gridLineWidth: 1,
											gridLineColor: 'rgba(196, 196, 196, 0.30)',
											gridZIndex: 1,
											crosshair: {snap: !1},
											currentPriceIndicator: {enabled: !1},
										},
										xAxis: {
											labels: {style: {color: d}},
											ordinal: !1,
											lineColor: '#000000',
											title: {text: null},
											plotLines: [],
										},
										plotOptions: {
											area: {
												animation: !1,
												marker: {enabled: !1},
												series: {enableMouseTracking: !1},
											},
										},
									};
								if (T.length > 0 && N.length > 0) {
									var E = (N[0][0] + T[T.length - 1][0]) / 2;
									(M.xAxis.min = 0.4 * E),
										(M.xAxis.max = 1.6 * E),
										M.xAxis.max < N[0][0] && (M.xAxis.max = 1.5 * N[0][0]),
										M.xAxis.min > T[T.length - 1][0] &&
											(M.xAxis.min = 0.5 * T[T.length - 1][0]);
									var I = 0;
									T.forEach(function (e) {
										e[0] >= M.xAxis.min && (I = Math.max(e[1], I));
									}),
										N.forEach(function (e) {
											e[0] <= M.xAxis.max && (I = Math.max(e[1], I));
										}),
										(M.yAxis.max = 1.15 * I);
									var L = I > 10 ? 0 : I > 1 ? 2 : 5;
									M.yAxis.labels.formatter = function () {
										return R.Z.format_number(this.value, L);
									};
								} else
									T.length && !N.length
										? ((M.xAxis.min = 0.4 * T[T.length - 1][0]),
										  (M.xAxis.max = 1.6 * T[T.length - 1][0]))
										: N.length &&
										  !T.length &&
										  ((M.xAxis.min = 0), (M.xAxis.max = 2 * N[0][0]));
								if (
									(this.props.hasPrediction &&
										((M.xAxis.min = -0.05), (M.xAxis.max = 1.05)),
									this.props.LCP)
								) {
									var D = a.get('bitasset_data_id') ? a : l,
										V =
											D.getIn([
												'bitasset',
												'current_feed',
												'maintenance_collateral_ratio',
											]) / 1e3,
										z =
											D.getIn([
												'bitasset',
												'current_feed',
												'maximum_short_squeeze_ratio',
											]) / 1e3,
										H = this.props.invertedCalls
											? (this.props.LCP / V) * z
											: (this.props.LCP * V) / z;
									M.xAxis.plotLines.push({
										color: x,
										id: 'plot_line',
										dashStyle: 'longdash',
										value: this.props.LCP,
										label: {
											text: v().translate('explorer.block.call_limit', {
												price: this.props.LCP.toFixed(4),
											}),
											style: {color: d, fontWeight: 'bold'},
											x: this.props.invertedCalls ? 5 : -10,
										},
										width: 2,
										zIndex: 5,
									}),
										M.xAxis.plotLines.push({
											color: x,
											id: 'plot_line',
											dashStyle: 'longdash',
											value: H,
											label: {
												text: v().translate('explorer.block.gs_support', {
													price: H.toFixed(4),
												}),
												style: {color: d, fontWeight: 'bold'},
												x: this.props.invertedCalls ? -10 : 5,
											},
											width: 2,
											zIndex: 5,
										});
								}
								if (c) {
									var U = a.has('bitasset') ? y : m;
									M.xAxis.plotLines.push({
										color: U,
										id: 'plot_line',
										dashStyle: 'solid',
										value: c,
										label: {
											text: v().translate('explorer.block.feed_price', {
												price: c.toFixed(4),
											}),
											style: {color: d, fontWeight: 'bold'},
											x: this.props.invertedCalls ? 5 : -10,
										},
										width: 2,
										zIndex: 5,
									}),
										Z &&
											Z.length &&
											M.series.push({
												name: 'Call '.concat(A),
												data: Z,
												color: p,
											});
								}
								return (
									c &&
										B &&
										B.length &&
										M.series.push({
											name: 'Settle '.concat(A),
											data: B,
											color: h,
											fillColor: f,
										}),
									T.length &&
										M.series.push({
											step: 'right',
											name: 'Bid '.concat(A),
											data: T,
											color: m,
											fillColor: b,
										}),
									N.length &&
										M.series.push({
											step: 'left',
											name: 'Ask '.concat(A),
											data: N,
											color: y,
											fillColor: g,
										}),
									(M.chart.height = this.props.height),
									this.props.onClick &&
										(M.chart.events = {click: this.props.onClick.bind(this)}),
									this.props.noFrame
										? (0, q.jsxs)('div', {
												className: 'grid-content no-overflow no-padding',
												children: [
													T.length || N.length || Z.length
														? null
														: (0, q.jsx)('span', {
																className: 'no-data',
																children: (0, q.jsx)(F(), {
																	content: 'exchange.no_data',
																}),
														  }),
													this.props.noText
														? null
														: (0, q.jsxs)('p', {
																className: 'bid-total',
																children: [
																	R.Z.format_number(i, a.get('precision')),
																	' ',
																	k,
																],
														  }),
													this.props.noText
														? null
														: (0, q.jsxs)('p', {
																className: 'ask-total',
																children: [
																	R.Z.format_number(s, l.get('precision')),
																	' ',
																	A,
																],
														  }),
													T || N || Z ? (0, q.jsx)(Fo(), {config: M}) : null,
												],
										  })
										: ((O = _
												? {height: '100%', position: 'relative'}
												: {height: '100%'}),
										  (P = _
												? {position: 'absolute', bottom: 0, width: '100%'}
												: {}),
										  (0, q.jsx)('div', {
												className:
													'grid-content no-overflow no-padding middle-content',
												style: {height: '100%'},
												children: (0, q.jsxs)('div', {
													className: 'exchange-bordered',
													id: 'depth_chart',
													style: O,
													children: [
														(0, q.jsxs)('div', {
															className: 'exchange-content-header',
															children: [
																this.props.noText
																	? null
																	: (0, q.jsxs)('span', {
																			className: 'bid-total',
																			children: [
																				R.Z.format_number(
																					i,
																					a.get('precision')
																				),
																				' ',
																				(0, q.jsx)(G.Z, {
																					name: a.get('symbol'),
																				}),
																			],
																	  }),
																this.props.noText
																	? null
																	: (0, q.jsxs)('span', {
																			className: 'ask-total float-right',
																			children: [
																				R.Z.format_number(
																					s,
																					l.get('precision')
																				),
																				' ',
																				(0, q.jsx)(G.Z, {
																					name: l.get('symbol'),
																				}),
																			],
																	  }),
															],
														}),
														(0, q.jsxs)('div', {
															style: P,
															children: [
																T.length || N.length || Z.length
																	? null
																	: (0, q.jsx)('span', {
																			className: 'no-data',
																			children: (0, q.jsx)(F(), {
																				content: 'exchange.no_data',
																			}),
																	  }),
																T || N || Z
																	? (0, q.jsx)(Fo(), {
																			ref: 'depthChart',
																			config: M,
																	  })
																	: null,
															],
														}),
													],
												}),
										  }))
								);
							},
						},
					]),
					r && qo(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(n.Component);
			(zo.defaultProps = {
				flat_bids: [],
				flat_asks: [],
				orders: {},
				noText: !1,
				noFrame: !0,
			}),
				(zo.propTypes = {
					flat_bids: A().array.isRequired,
					flat_asks: A().array.isRequired,
					orders: A().object.isRequired,
				});
			const Ho = zo;
			var Uo = r(674),
				Wo = r(50674),
				Go = r(64500),
				Qo = r.n(Go),
				Ko = r(88209),
				Yo = r.n(Ko),
				Jo = r(57891);
			function $o(e) {
				return (
					($o =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					$o(e)
				);
			}
			function Xo(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ei(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function ti(e, t) {
				return (
					(ti =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ti(e, t)
				);
			}
			function ri(e, t) {
				if (t && ('object' === $o(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function ni(e) {
				return (
					(ni = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ni(e)
				);
			}
			var oi = d.FR.operations,
				ii = Object.keys(oi),
				si = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && ti(e, t);
					})(s, e);
					var t,
						r,
						n,
						o,
						i =
							((n = s),
							(o = (function () {
								if ('undefined' == typeof Reflect || !Reflect.construct)
									return !1;
								if (Reflect.construct.sham) return !1;
								if ('function' == typeof Proxy) return !0;
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {})
										),
										!0
									);
								} catch (e) {
									return !1;
								}
							})()),
							function () {
								var e,
									t = ni(n);
								if (o) {
									var r = ni(this).constructor;
									e = Reflect.construct(t, arguments, r);
								} else e = t.apply(this, arguments);
								return ri(this, e);
							});
					function s() {
						return Xo(this, s), i.apply(this, arguments);
					}
					return (
						(t = s),
						(r = [
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									if (
										e.account &&
										e.account.size &&
										this.props.account &&
										this.props.account.get('history')
									) {
										var t =
												this.props.account.get('history') &&
												this.props.account.get('history').first()
													? this.props.account.get('history').first().toJS()
													: null,
											r =
												e.account.get('history') &&
												e.account.get('history').first()
													? e.account.get('history').first().toJS()
													: null;
										r &&
											t &&
											'fill_order' === ii[r.op[0]] &&
											((!t && r.id) || r.id !== t.id) &&
											(Yo().publish('account-notify', 'open'),
											setTimeout(function () {
												Yo().publish('account-notify', 'close');
											}, 5e3));
									}
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return !(
										!e.account ||
										!this.props.account ||
										(Lr().is(
											e.account.get('history'),
											this.props.account.get('history')
										) &&
											Lr().is(e.account, this.props.account))
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var e,
										t,
										r = this.props.account;
									return r
										? (this.props.account.get('history') &&
												this.props.account.get('history').size &&
												(e = this.props.account
													.get('history')
													.first()
													.toJS()) &&
												(t = (0, q.jsx)(
													Jo.Z,
													{
														op: e.op,
														result: e.result,
														block: e.block_num,
														current: r.get('id'),
														hideDate: !0,
														hideFee: !0,
													},
													e.id
												)),
										  e
												? (0, q.jsx)(Qo().Static, {
														id: 'account-notify',
														title: null,
														image: '',
														wrapperElement: 'div',
														children: (0, q.jsx)('table', {
															className: 'table',
															children: (0, q.jsx)('tbody', {children: t}),
														}),
												  })
												: (0, q.jsx)('div', {}))
										: (0, q.jsx)('div', {});
								},
							},
						]) && ei(t.prototype, r),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						s
					);
				})(n.Component);
			!(function (e, t, r) {
				t in e
					? Object.defineProperty(e, t, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = r);
			})(si, 'propTypes', {account: E.Z.ChainAccount.isRequired});
			const ai = (si = (0, I.Z)(si));
			function li(e) {
				return (
					(li =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					li(e)
				);
			}
			function ci(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ui(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function di(e, t) {
				return (
					(di =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					di(e, t)
				);
			}
			function pi(e, t) {
				if (t && ('object' === li(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function hi(e) {
				return (
					(hi = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					hi(e)
				);
			}
			const fi = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && di(e, t);
				})(a, e);
				var t,
					r,
					n,
					o,
					s =
						((n = a),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = hi(n);
							if (o) {
								var r = hi(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return pi(this, e);
						});
				function a() {
					return ci(this, a), s.apply(this, arguments);
				}
				return (
					(t = a),
					(r = [
						{
							key: 'render',
							value: function () {
								return (0, q.jsx)(c.Z, {
									stores: [i.Z],
									inject: {
										account: function () {
											return i.Z.getState().currentAccount;
										},
									},
									children: (0, q.jsx)(ai, {}),
								});
							},
						},
					]) && ui(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(n.Component);
			var mi = r(31403);
			function bi(e) {
				return (
					(bi =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					bi(e)
				);
			}
			function yi(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function gi(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function vi(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? gi(Object(r), !0).forEach(function (t) {
								xi(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: gi(Object(r)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(r, t)
								);
						  });
				}
				return e;
			}
			function xi(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			function _i(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function ji(e, t) {
				return (
					(ji =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ji(e, t)
				);
			}
			function ki(e, t) {
				if (t && ('object' === bi(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Si(e);
			}
			function Si(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function wi(e) {
				return (
					(wi = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					wi(e)
				);
			}
			var Ai = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && ji(e, t);
				})(s, e);
				var t,
					r,
					n,
					o,
					i =
						((n = s),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = wi(n);
							if (o) {
								var r = wi(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return ki(this, e);
						});
				function s(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, s),
						((t = i.call(this, e)).state = {rules: [].concat([])}),
						(t.handleSave = t.handleSave.bind(Si(t))),
						(t.handleAddRule = t.handleAddRule.bind(Si(t))),
						(t.handleTypeChange = t.handleTypeChange.bind(Si(t))),
						(t.handleDeleteRule = t.handleDeleteRule.bind(Si(t))),
						(t.handlePriceChange = t.handlePriceChange.bind(Si(t))),
						(t.handlePriceFieldBlur = t.handlePriceFieldBlur.bind(Si(t))),
						t
					);
				}
				return (
					(t = s),
					(r = [
						{
							key: 'componentDidUpdate',
							value: function (e) {
								if (!e.visible && this.props.visible) {
									var t,
										r = {
											type: pe.je.HIGHER_THAN,
											price: this.props.latestPrice
												? Number(this.props.latestPrice)
												: null,
										};
									(t = this.props.rules.length
										? this.props.rules
										: this.state.openedPreviously
										? []
										: [r]),
										this.setState({rules: t, openedPreviously: !0});
								}
							},
						},
						{
							key: 'handleTypeChange',
							value: function (e) {
								var t = this;
								return function (r) {
									var n = t.state.rules.map(function (n, o) {
										if (Number(e) !== Number(o)) return n;
										var i = t.validatePrice(
											r,
											Number(n.price),
											Number(t.props.latestPrice)
										);
										return vi(vi(vi({}, n), i), {}, {type: String(r)});
									});
									t.setState({rules: n});
								};
							},
						},
						{
							key: 'validatePrice',
							value: function (e, t, r) {
								return e === pe.je.HIGHER_THAN && t < r
									? {
											validateStatus: 'error',
											help: 'Price of Alert should be higher than current price',
									  }
									: e === pe.je.LOWER_THAN && t > r
									? {
											validateStatus: 'error',
											help: 'Price of Alert  should be lower than current price',
									  }
									: {validateStatus: 'success', help: ''};
							},
						},
						{
							key: 'validatePriceFieldByKey',
							value: function (e) {
								var t = this,
									r = this.state.rules.map(function (r, n) {
										if (Number(e) !== Number(n)) return r;
										var o = t.validatePrice(
											r.type,
											Number(r.price),
											Number(t.props.latestPrice)
										);
										return vi(
											vi({}, r),
											{},
											{validateStatus: o.validateStatus, help: o.help}
										);
									});
								this.setState({rules: r});
							},
						},
						{
							key: 'handlePriceFieldBlur',
							value: function (e) {
								var t = this;
								return function () {
									t.validatePriceFieldByKey(e);
								};
							},
						},
						{
							key: 'handlePriceChange',
							value: function (e) {
								var t = this;
								return function (r) {
									var n = t.state.rules.map(function (n, o) {
										if (Number(e) !== Number(o)) return n;
										var i = {};
										return (
											n.validateStatus &&
												(i = t.validatePrice(
													n.type,
													Number(r.target.value),
													Number(t.props.latestPrice)
												)),
											vi(vi(vi({}, n), i), {}, {price: r.target.value})
										);
									});
									t.setState({rules: n});
								};
							},
						},
						{
							key: 'handleAddRule',
							value: function () {
								var e,
									t =
										(function (e) {
											if (Array.isArray(e)) return yi(e);
										})((e = this.state.rules)) ||
										(function (e) {
											if (
												('undefined' != typeof Symbol &&
													null != e[Symbol.iterator]) ||
												null != e['@@iterator']
											)
												return Array.from(e);
										})(e) ||
										(function (e, t) {
											if (e) {
												if ('string' == typeof e) return yi(e, t);
												var r = Object.prototype.toString.call(e).slice(8, -1);
												return (
													'Object' === r &&
														e.constructor &&
														(r = e.constructor.name),
													'Map' === r || 'Set' === r
														? Array.from(e)
														: 'Arguments' === r ||
														  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
														? yi(e, t)
														: void 0
												);
											}
										})(e) ||
										(function () {
											throw new TypeError(
												'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
											);
										})();
								t.push({
									type: pe.je.HIGHER_THAN,
									price: this.props.latestPrice
										? Number(this.props.latestPrice)
										: null,
								}),
									this.setState({rules: t});
							},
						},
						{
							key: 'handleDeleteRule',
							value: function (e) {
								var t = this;
								return function () {
									var r = t.state.rules.filter(function (t, r) {
										return Number(r) !== Number(e);
									});
									t.setState({rules: r});
								};
							},
						},
						{
							key: 'handleSave',
							value: function () {
								this.props.onSave(this.state.rules);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this;
								if (
									!(
										this.props.quoteAsset &&
										this.props.quoteAsset.get &&
										this.props.baseAsset &&
										this.props.baseAsset.get
									)
								)
									return null;
								var t = [
										(0, q.jsx)(
											X.Z,
											{
												type: 'primary',
												onClick: this.handleSave,
												children: v().translate('modal.save'),
											},
											'submit'
										),
										(0, q.jsx)(
											X.Z,
											{
												onClick: this.props.hideModal,
												children: v().translate('modal.cancel'),
											},
											'cancel'
										),
									],
									r = this.props.baseAsset.get('symbol'),
									n = this.props.quoteAsset.get('symbol'),
									o = '/'.concat(n, '_').concat(r);
								return (0, q.jsx)(vn.Z, {
									visible: this.props.visible,
									onCancel: this.props.hideModal,
									title: v().translate('exchange.price_alert.title'),
									footer: t,
									children: (0, q.jsx)('div', {
										className: 'exchange--price-alert',
										children: (0, q.jsxs)('div', {
											className: 'exchange--price-alert--description',
											children: [
												this.state.rules.length
													? (0, q.jsxs)('div', {
															children: [
																v().translate(
																	'exchange.price_alert.alert_when'
																),
																' ',
																(0, q.jsxs)(it.Z, {
																	to: o,
																	children: [
																		(0, q.jsx)(G.Z, {name: n}),
																		'/',
																		(0, q.jsx)(G.Z, {name: r}),
																	],
																}),
																' ',
																'price:',
															],
													  })
													: (0, q.jsxs)('div', {
															children: [
																v().translate(
																	'exchange.price_alert.use_button'
																),
																(0, q.jsxs)(it.Z, {
																	to: o,
																	children: [
																		(0, q.jsx)(G.Z, {name: n}),
																		'/',
																		(0, q.jsx)(G.Z, {name: r}),
																	],
																}),
																':',
															],
													  }),
												(0, q.jsxs)(de.Z, {
													layout: 'vertical',
													children: [
														(0, q.jsx)('div', {
															className: 'exchange--price-alert--items',
															children: this.state.rules.map(function (t, n) {
																return (0,
																q.jsx)(de.Z.Item, {validateStatus: t.validateStatus || null, help: t.help || null, children: (0, q.jsxs)(ue.Z.Group, {className: 'exchange--price-alert--item', compact: !0, children: [(0, q.jsxs)($.Z, {value: t.type, style: {width: '200px'}, onChange: e.handleTypeChange(n), children: [(0, q.jsx)($.Z.Option, {value: pe.je.HIGHER_THAN, children: v().translate('exchange.price_alert.higher_than')}, '1'), (0, q.jsx)($.Z.Option, {value: pe.je.LOWER_THAN, children: v().translate('exchange.price_alert.lower_than')}, '2')]}), (0, q.jsx)(ue.Z, {onBlur: e.handlePriceFieldBlur(n), style: {width: 'calc(100% - 200px - 32px)', marginTop: '1px'}, onChange: e.handlePriceChange(n), value: t.price, className: 'exchange--price-alert--item--price', placeholder: v().translate('exchange.price_alert.price'), addonAfter: (0, q.jsx)(G.Z, {name: r})}), (0, q.jsx)(X.Z, {style: {width: '32px'}, onClick: e.handleDeleteRule(n), className: 'exchange--price-alert--item--control', type: 'icon', icon: 'delete'})]})}, n);
															}),
														}),
														(0, q.jsx)('div', {
															className: 'exchange--price-alert--items--add',
															children: (0, q.jsxs)('a', {
																href: 'javascript:void(0)',
																onClick: this.handleAddRule,
																children: [
																	(0, q.jsx)(jn.Lfi, {}),
																	v().translate(
																		'exchange.price_alert.add_rule'
																	),
																],
															}),
														}),
													],
												}),
											],
										}),
									}),
								});
							},
						},
					]),
					r && _i(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(n.Component);
			const Ci = (Ai = (0, mi.Z)(Ai, {propNames: ['quoteAsset', 'baseAsset']}));
			var Oi = r(25108);
			function Pi(e) {
				return (
					(Pi =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Pi(e)
				);
			}
			function Ti(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return Zi(e);
					})(e) ||
					(function (e) {
						if (
							('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
							null != e['@@iterator']
						)
							return Array.from(e);
					})(e) ||
					Ni(e) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function Ni(e, t) {
				if (e) {
					if ('string' == typeof e) return Zi(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					return (
						'Object' === r && e.constructor && (r = e.constructor.name),
						'Map' === r || 'Set' === r
							? Array.from(e)
							: 'Arguments' === r ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
							? Zi(e, t)
							: void 0
					);
				}
			}
			function Zi(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function Ri(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function Bi(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Ri(Object(r), !0).forEach(function (t) {
								Li(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: Ri(Object(r)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(r, t)
								);
						  });
				}
				return e;
			}
			function Fi(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Mi(e, t) {
				return (
					(Mi =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Mi(e, t)
				);
			}
			function Ei(e, t) {
				if (t && ('object' === Pi(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Ii(e);
			}
			function Ii(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function qi(e) {
				return (
					(qi = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					qi(e)
				);
			}
			function Li(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			var Di = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Mi(e, t);
				})(s, e);
				var t,
					r,
					n,
					o,
					i =
						((n = s),
						(o = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = qi(n);
							if (o) {
								var r = qi(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return Ei(this, e);
						});
				function s(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, s),
						Li(Ii((t = i.call(this))), 'EXPIRATIONS', {
							HOUR: {
								title: '1 hour',
								get: function () {
									return j()().add(1, 'hour').valueOf();
								},
							},
							'12HOURS': {
								title: '12 hours',
								get: function () {
									return j()().add(12, 'hour').valueOf();
								},
							},
							'24HOURS': {
								title: '24 hours',
								get: function () {
									return j()().add(1, 'day').valueOf();
								},
							},
							'7DAYS': {
								title: '7 days',
								get: function () {
									return j()().add(7, 'day').valueOf();
								},
							},
							MONTH: {
								title: '30 days',
								get: function () {
									return j()().add(30, 'day').valueOf();
								},
							},
							YEAR: {
								title: '1 year',
								get: function () {
									return j()().add(1, 'year').valueOf();
								},
							},
							SPECIFIC: {
								title: 'Specific',
								get: function (e) {
									return t.state.expirationCustomTime[e].valueOf();
								},
							},
						}),
						Li(Ii(t), '_chartZoom', function () {
							C.Z.changeViewSetting({chartZoom: !t.state.chartZoom});
							var e = t.state.chartType;
							t.setState({
								chartZoom: !t.state.chartZoom,
								chartType: 'hidden_chart',
							}),
								setTimeout(function () {
									t.setState({chartType: e});
								}, 100);
						}),
						Li(Ii(t), '_chartTools', function () {
							C.Z.changeViewSetting({chartTools: !t.state.chartTools});
							var e = t.state.chartType;
							t.setState({
								chartTools: !t.state.chartTools,
								chartType: 'hidden_chart',
							}),
								setTimeout(function () {
									t.setState({chartType: e});
								}, 100);
						}),
						Li(Ii(t), '_flipOrderBook', function () {
							C.Z.changeViewSetting({flipOrderBook: !t.state.flipOrderBook}),
								t.setState({flipOrderBook: !t.state.flipOrderBook});
						}),
						Li(Ii(t), '_orderBookReversed', function () {
							C.Z.changeViewSetting({
								orderBookReversed: !t.state.orderBookReversed,
							}),
								t.setState({orderBookReversed: !t.state.orderBookReversed});
						}),
						Li(Ii(t), '_hideFunctionButtons', function () {
							C.Z.changeViewSetting({
								hideFunctionButtons: !t.state.hideFunctionButtons,
							}),
								t.setState({hideFunctionButtons: !t.state.hideFunctionButtons});
						}),
						(t.state = Bi(
							Bi({}, t._initialState(e)),
							{},
							{
								expirationType: {
									bid: e.exchange.getIn(['lastExpiration', 'bid']) || 'YEAR',
									ask: e.exchange.getIn(['lastExpiration', 'ask']) || 'YEAR',
								},
								expirationCustomTime: {bid: 'Specific', ask: 'Specific'},
								feeStatus: {},
							}
						)),
						(t._getWindowSize = (0, x.Z)(t._getWindowSize.bind(Ii(t)), 150)),
						(t._checkFeeStatus = t._checkFeeStatus.bind(Ii(t))),
						(t._handleExpirationChange = t._handleExpirationChange.bind(Ii(t))),
						(t._handleCustomExpirationChange =
							t._handleCustomExpirationChange.bind(Ii(t))),
						(t.showPersonalizeModal = t.showPersonalizeModal.bind(Ii(t))),
						(t.hidePersonalizeModal = t.hidePersonalizeModal.bind(Ii(t))),
						(t.showConfirmSellOrderModal = t.showConfirmSellOrderModal.bind(
							Ii(t)
						)),
						(t.hideConfirmSellOrderModal = t.hideConfirmSellOrderModal.bind(
							Ii(t)
						)),
						(t.showConfirmBuyOrderModal = t.showConfirmBuyOrderModal.bind(
							Ii(t)
						)),
						(t.hideConfirmBuyOrderModal = t.hideConfirmBuyOrderModal.bind(
							Ii(t)
						)),
						(t.showMarketPickerModal = t.showMarketPickerModal.bind(Ii(t))),
						(t.hideMarketPickerModal = t.hideMarketPickerModal.bind(Ii(t))),
						(t.showDepositBridgeModal = t.showDepositBridgeModal.bind(Ii(t))),
						(t.hideDepositBridgeModal = t.hideDepositBridgeModal.bind(Ii(t))),
						(t.showDepositModal = t.showDepositModal.bind(Ii(t))),
						(t.hideDepositModal = t.hideDepositModal.bind(Ii(t))),
						(t.showBorrowQuoteModal = t.showBorrowQuoteModal.bind(Ii(t))),
						(t.hideBorrowQuoteModal = t.hideBorrowQuoteModal.bind(Ii(t))),
						(t.showBorrowBaseModal = t.showBorrowBaseModal.bind(Ii(t))),
						(t.hideBorrowBaseModal = t.hideBorrowBaseModal.bind(Ii(t))),
						(t.showPriceAlertModal = t.showPriceAlertModal.bind(Ii(t))),
						(t.hidePriceAlertModal = t.hidePriceAlertModal.bind(Ii(t))),
						(t.showScaledOrderModal = t.showScaledOrderModal.bind(Ii(t))),
						(t.hideScaledOrderModal = t.hideScaledOrderModal.bind(Ii(t))),
						(t.handlePriceAlertSave = t.handlePriceAlertSave.bind(Ii(t))),
						(t._createScaledOrder = t._createScaledOrder.bind(Ii(t))),
						(t.psInit = !0),
						t
					);
				}
				return (
					(t = s),
					(r = [
						{
							key: 'handleOrderTypeTabChange',
							value: function (e, t) {
								C.Z.changeViewSetting(Li({}, 'order-form-'.concat(e), t));
							},
						},
						{
							key: 'handlePriceAlertSave',
							value: function () {
								var e = this,
									t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: [];
								t = t.map(function (t) {
									return {
										type: t.type,
										price: t.price,
										baseAssetSymbol: e.props.baseAsset.get('symbol'),
										quoteAssetSymbol: e.props.quoteAsset.get('symbol'),
									};
								});
								var r = this.props.priceAlert.filter(function (t) {
									return (
										t &&
										e.props.baseAsset &&
										e.props.quoteAsset &&
										(t.get('baseAssetSymbol') !==
											e.props.baseAsset.get('symbol') ||
											t.get('quoteAssetSymbol') !==
												e.props.quoteAsset.get('symbol'))
									);
								});
								(r = [].concat(Ti(r), Ti(t))),
									C.Z.setPriceAlert(r),
									this.hidePriceAlertModal();
							},
						},
						{
							key: 'getPriceAlertRules',
							value: function () {
								var e = this;
								return this.props.priceAlert
									.filter(function (t) {
										return (
											t &&
											e.props.baseAsset &&
											e.props.quoteAsset &&
											t.get('baseAssetSymbol') ===
												e.props.baseAsset.get('symbol') &&
											t.get('quoteAssetSymbol') ===
												e.props.quoteAsset.get('symbol')
										);
									})
									.toJS();
							},
						},
						{
							key: '_handleExpirationChange',
							value: function (e, t) {
								var r = Bi(
									Bi({}, this.state.expirationType),
									{},
									Li({}, e, t.target.value)
								);
								'SPECIFIC' !== t.target.value &&
									C.Z.setExchangeLastExpiration(
										Bi(
											Bi(
												{},
												(this.props.exchange.has('lastExpiration') &&
													this.props.exchange.get('lastExpiration').toJS()) ||
													{}
											),
											{},
											Li({}, e, t.target.value)
										)
									),
									this.setState({expirationType: r});
							},
						},
						{
							key: '_handleCustomExpirationChange',
							value: function (e, t) {
								var r = Bi(
									Bi({}, this.state.expirationCustomTime),
									{},
									Li({}, e, t)
								);
								this.setState({expirationCustomTime: r});
							},
						},
						{
							key: '_initialOrderState',
							value: function (e) {
								var t = {
									forSaleText: '',
									toReceiveText: '',
									priceText: '',
									for_sale: new N.xR({
										asset_id: e.baseAsset.get('id'),
										precision: e.baseAsset.get('precision'),
									}),
									to_receive: new N.xR({
										asset_id: e.quoteAsset.get('id'),
										precision: e.quoteAsset.get('precision'),
									}),
								};
								t.price = new N.tA({base: t.for_sale, quote: t.to_receive});
								var r = {
									forSaleText: '',
									toReceiveText: '',
									priceText: '',
									for_sale: new N.xR({
										asset_id: e.quoteAsset.get('id'),
										precision: e.quoteAsset.get('precision'),
									}),
									to_receive: new N.xR({
										asset_id: e.baseAsset.get('id'),
										precision: e.baseAsset.get('precision'),
									}),
								};
								return (
									(r.price = new N.tA({base: r.for_sale, quote: r.to_receive})),
									{ask: r, bid: t}
								);
							},
						},
						{
							key: '_initialState',
							value: function (e) {
								var t = e.viewSettings,
									r = this._initialOrderState(e),
									n = r.ask,
									o = r.bid,
									i = t.get('chartHeight', 500);
								return (
									620 == i && window.innerWidth < 640 && (i = 425),
									{
										isDepositBridgeModelLoaded: !1,
										isDepositModalLoaded: !1,
										isPersonalizeModalLoaded: !1,
										isMarketPickerModalLoaded: !1,
										isBorrowQuoteModalLoaded: !1,
										isBorrowBaseModalLoaded: !1,
										isDepositBridgeModalVisible: !1,
										isDepositModalVisible: !1,
										isPersonalizeModalVisible: !1,
										isMarketPickerModalVisible: !1,
										isBorrowQuoteModalVisible: !1,
										isBorrowBaseModalVisible: !1,
										history: [],
										isConfirmBuyOrderModalVisible: !1,
										isConfirmBuyOrderModalLoaded: !1,
										isConfirmSellOrderModalVisible: !1,
										isPriceAlertModalVisible: !1,
										isScaledOrderModalVisible: !1,
										isConfirmSellOrderModalLoaded: !1,
										tabVerticalPanel: t.get('tabVerticalPanel', 'my-market'),
										tabBuySell: t.get('tabBuySell', 'buy'),
										buySellOpen: t.get('buySellOpen', !0),
										bid: o,
										ask: n,
										height: window.innerHeight,
										width: window.innerWidth,
										favorite: !1,
										buyDiff: !1,
										sellDiff: !1,
										autoScroll: t.get('global_AutoScroll', !0),
										buySellTop: t.get('buySellTop', !0),
										buyFeeAssetIdx: t.get('buyFeeAssetIdx', 0),
										sellFeeAssetIdx: t.get('sellFeeAssetIdx', 0),
										verticalOrderBook: t.get('verticalOrderBook', !1),
										verticalOrderForm: t.get('verticalOrderForm', !1),
										hidePanel: t.get('hidePanel', !1),
										hideScrollbars: t.get('hideScrollbars', !1),
										singleColumnOrderForm: t.get('singleColumnOrderForm', !0),
										flipOrderBook: t.get('flipOrderBook', !1),
										flipBuySell: t.get('flipBuySell', !1),
										orderBookReversed: t.get('orderBookReversed', !1),
										chartType: t.get('chartType', 'price_chart'),
										chartHeight: i,
										chartZoom: t.get('chartZoom', !0),
										chartTools: t.get('chartTools', !0),
										hideFunctionButtons: t.get('hideFunctionButtons', !0),
										currentPeriod: t.get('currentPeriod', 7776e3),
										showMarketPicker: !1,
										activePanels: t.get('activePanels', ['left']),
										mobileKey: [''],
										forceReRender: 0,
										panelWidth: 0,
										mirrorPanels: t.get('mirrorPanels', !1),
										panelTabs: t.get('panelTabs', {
											my_history: 1,
											history: 1,
											my_orders: 2,
											open_settlement: 2,
										}),
										panelTabsActive: t.get('panelTabsActive', {
											1: 'my_history',
											2: 'my_orders',
										}),
									}
								);
							},
						},
						{
							key: 'showMarketPickerModal',
							value: function () {
								this.setState({
									isMarketPickerModalVisible: !0,
									isMarketPickerModalLoaded: !0,
								});
							},
						},
						{
							key: 'hideMarketPickerModal',
							value: function () {
								this.setState({isMarketPickerModalVisible: !1});
							},
						},
						{
							key: 'showPersonalizeModal',
							value: function () {
								this.setState({
									isPersonalizeModalVisible: !0,
									isPersonalizeModalLoaded: !0,
								});
							},
						},
						{
							key: 'hidePersonalizeModal',
							value: function () {
								this.setState({isPersonalizeModalVisible: !1});
							},
						},
						{
							key: 'showPriceAlertModal',
							value: function () {
								this.setState({isPriceAlertModalVisible: !0});
							},
						},
						{
							key: 'hidePriceAlertModal',
							value: function () {
								this.setState({isPriceAlertModalVisible: !1});
							},
						},
						{
							key: 'showScaledOrderModal',
							value: function () {
								this.setState({isScaledOrderModalVisible: !0});
							},
						},
						{
							key: 'hideScaledOrderModal',
							value: function () {
								this.setState({isScaledOrderModalVisible: !1});
							},
						},
						{
							key: 'showBorrowQuoteModal',
							value: function () {
								this.setState({
									isBorrowQuoteModalVisible: !0,
									isBorrowQuoteModalLoaded: !0,
								});
							},
						},
						{
							key: 'hideBorrowQuoteModal',
							value: function () {
								this.setState({isBorrowQuoteModalVisible: !1});
							},
						},
						{
							key: 'showBorrowBaseModal',
							value: function () {
								this.setState({
									isBorrowBaseModalVisible: !0,
									isBorrowBaseModalLoaded: !0,
								});
							},
						},
						{
							key: 'hideBorrowBaseModal',
							value: function () {
								this.setState({isBorrowBaseModalVisible: !1});
							},
						},
						{
							key: 'showDepositBridgeModal',
							value: function () {
								this.setState({
									isDepositBridgeModalVisible: !0,
									isDepositBridgeModalLoaded: !0,
								});
							},
						},
						{
							key: 'hideDepositBridgeModal',
							value: function () {
								this.setState({isDepositBridgeModalVisible: !1});
							},
						},
						{
							key: 'showDepositModal',
							value: function () {
								this.setState({
									isDepositModalVisible: !0,
									isDepositModalLoaded: !0,
								});
							},
						},
						{
							key: 'hideDepositModal',
							value: function () {
								this.setState({isDepositModalVisible: !1});
							},
						},
						{
							key: '_getLastMarketKey',
							value: function () {
								var e = u.yX.instance().chain_id;
								return 'lastMarket'.concat(e ? '_' + e.substr(0, 8) : '');
							},
						},
						{
							key: 'showConfirmBuyOrderModal',
							value: function () {
								this.setState({
									isConfirmBuyOrderModalVisible: !0,
									isConfirmBuyOrderModalLoaded: !0,
								});
							},
						},
						{
							key: 'hideConfirmBuyOrderModal',
							value: function () {
								this.setState({isConfirmBuyOrderModalVisible: !1});
							},
						},
						{
							key: 'showConfirmSellOrderModal',
							value: function () {
								this.setState({
									isConfirmSellOrderModalVisible: !0,
									isConfirmSellOrderModalLoaded: !0,
								});
							},
						},
						{
							key: 'hideConfirmSellOrderModal',
							value: function () {
								this.setState({isConfirmSellOrderModalVisible: !1});
							},
						},
						{
							key: 'componentWillMount',
							value: function () {
								window.addEventListener('resize', this._setDimensions, {
									capture: !1,
									passive: !0,
								}),
									this._checkFeeStatus();
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								O.Z.getTrackedGroupsConfig(),
									C.Z.changeViewSetting.defer(
										Li(
											{},
											this._getLastMarketKey(),
											this.props.quoteAsset.get('symbol') +
												'_' +
												this.props.baseAsset.get('symbol')
										)
									),
									window.addEventListener('resize', this._getWindowSize, {
										capture: !1,
										passive: !0,
									});
							},
						},
						{
							key: '_forceRender',
							value: function (e, t) {
								this.state.forceReRender && this.setState({forceReRender: !1}),
									(R.Z.are_equal_shallow(
										this.state.activePanels,
										t.activePanels
									) &&
										R.Z.are_equal_shallow(
											this.state.verticalOrderBook,
											t.verticalOrderBook
										) &&
										e.quoteAsset === this.props.quoteAsset &&
										e.baseAsset === this.props.baseAsset) ||
										this.setState({forceReRender: !0});
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								var r = this.state.expirationType;
								if (
									(this._forceRender(e, t),
									!e.marketReady && !this.props.marketReady)
								)
									return !1;
								var n = !1,
									o = !1;
								for (var i in ((e.quoteAsset === this.props.quoteAsset &&
									e.baseAsset === this.props.baseAsset) ||
									this.setState({
										expirationType: {
											bid: 'SPECIFIC' == r.bid ? r.bid : 'YEAR',
											ask: 'SPECIFIC' == r.ask ? r.ask : 'YEAR',
										},
									}),
								e))
									if (
										e.hasOwnProperty(i) &&
										(n = n || !R.Z.are_equal_shallow(e[i], this.props[i]))
									)
										break;
								for (var s in t.panelTabsActive)
									o = !R.Z.are_equal_shallow(
										t.panelTabsActive[s],
										this.state.panelTabsActive[s]
									);
								return n || o || !R.Z.are_equal_shallow(t, this.state);
							},
						},
						{
							key: '_checkFeeStatus',
							value: function () {
								var e = this,
									t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: [
													this.props.coreAsset,
													this.props.baseAsset,
													this.props.quoteAsset,
											  ],
									r =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: this.props.currentAccount,
									n = {},
									o = [];
								t.forEach(function (e) {
									o.push(
										(0, Z.rX)({
											accountID: r.get('id'),
											feeID: e.get('id'),
											type: 'limit_order_create',
										})
									);
								}),
									Promise.all(o)
										.then(function (r) {
											t.forEach(function (e, t) {
												n[e.get('id')] = r[t];
											}),
												R.Z.are_equal_shallow(e.state.feeStatus, n) ||
													e.setState({feeStatus: n});
										})
										.catch(function (t) {
											Oi.error('checkFeeStatusAsync error', t),
												e.setState({feeStatus: {}});
										});
							},
						},
						{
							key: '_getWindowSize',
							value: function () {
								var e = window,
									t = e.innerHeight,
									r = e.innerWidth;
								if (t !== this.state.height || r !== this.state.width) {
									this.setState({height: t, width: r});
									var n = this.refs.center;
									n && S().update(n);
								}
							},
						},
						{key: 'componentDidUpdate', value: function (e, t) {}},
						{
							key: '_initPsContainer',
							value: function () {
								if (this.refs.center && this.psInit) {
									var e = this.refs.center;
									e && (S().initialize(e), (this.psInit = !1));
								}
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								if (
									(this._initPsContainer(),
									(e.quoteAsset === this.props.quoteAsset &&
										e.baseAsset === this.props.baseAsset &&
										e.currentAccount === this.props.currentAccount) ||
										this._checkFeeStatus(
											[e.coreAsset, e.baseAsset, e.quoteAsset],
											e.currentAccount
										),
									e.quoteAsset.get('symbol') !==
										this.props.quoteAsset.get('symbol') ||
										e.baseAsset.get('symbol') !==
											this.props.baseAsset.get('symbol'))
								)
									return (
										this.setState(this._initialState(e)),
										C.Z.changeViewSetting(
											Li(
												{},
												this._getLastMarketKey(),
												e.quoteAsset.get('symbol') +
													'_' +
													e.baseAsset.get('symbol')
											)
										)
									);
							},
						},
						{
							key: 'componentWillUnmount',
							value: function () {
								window.removeEventListener('resize', this._getWindowSize);
							},
						},
						{
							key: '_getFeeAssets',
							value: function (e, t, r) {
								var n = this,
									o = this.props.currentAccount,
									i = this.state.feeStatus;
								function s(e, t) {
									-1 === e.indexOf(t) && e.push(t);
								}
								var a = [r, e === r ? t : e];
								s(a, e), s(a, t);
								var l = [r, t === r ? e : t];
								s(l, e), s(l, t);
								var c = {};
								function u(e, t, n) {
									var o;
									return (
										(e = e.filter(function (e) {
											return (
												!!t[e.get('id')] &&
												((r = e.get('id')),
												i[r] &&
													i[r].hasPoolBalance &&
													(function (e) {
														return i[e] && i[e].hasBalance;
													})(e.get('id')))
											);
											var r;
										})).length
											? (o = e[Math.min(e.length - 1, n)])
											: ((o = r), e.push(r)),
										{assets: e, asset: o}
									);
								}
								o.get('balances', [])
									.filter(function (r, n) {
										return ['1.3.0', e.get('id'), t.get('id')].indexOf(n) >= 0;
									})
									.forEach(function (e, t) {
										var r = d.BQ.getObject(e);
										c[t] = {
											balance: r ? parseInt(r.get('balance'), 10) : 0,
											fee: n._getFee(d.BQ.getAsset(t)),
										};
									});
								var p = u(a, c, this.state.sellFeeAssetIdx),
									h = p.assets,
									f = p.asset,
									m = u(l, c, this.state.buyFeeAssetIdx),
									b = m.assets,
									y = m.asset;
								return {
									sellFeeAsset: f,
									sellFeeAssets: h,
									sellFee: this._getFee(f),
									buyFeeAsset: y,
									buyFeeAssets: b,
									buyFee: this._getFee(y),
								};
							},
						},
						{
							key: '_getFee',
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: this.props.coreAsset;
								return (
									this.state.feeStatus[e.get('id')] &&
									this.state.feeStatus[e.get('id')].fee
								);
							},
						},
						{
							key: '_verifyFee',
							value: function (e, t, r, n) {
								var o = this._getFee();
								return '1.3.0' === e.asset_id
									? o.getAmount() <= n
										? '1.3.0'
										: null
									: (t.asset_id === e.asset_id
											? e.getAmount() + t.getAmount()
											: t.getAmount()) <= r
									? e.asset_id
									: o.getAmount() <= n && '1.3.0' !== e.asset_id
									? '1.3.0'
									: null;
							},
						},
						{
							key: '_createLimitOrderConfirm',
							value: function (e, t, r, n, o, i) {
								var s =
										!(arguments.length > 6 && void 0 !== arguments[6]) ||
										arguments[6],
									a = arguments.length > 7 ? arguments[7] : void 0;
								a.preventDefault();
								var l = this.props.marketData,
									c = l.highestBid,
									u = l.lowestAsk,
									p = this.state['sell' === i ? 'ask' : 'bid'];
								(r = p.for_sale.clone(
									r ? parseInt(d.BQ.getObject(r).toJS().balance, 10) : 0
								)),
									(n = new N.xR({
										amount: n
											? parseInt(d.BQ.getObject(n).toJS().balance, 10)
											: 0,
									}));
								var f = this._getFee(o),
									m = this._verifyFee(
										f,
										p.for_sale,
										r.getAmount(),
										n.getAmount()
									);
								if (!m)
									return h.Z.error({
										message: v().translate(
											'notifications.exchange_insufficient_funds_for_fees'
										),
									});
								if ('buy' === i && u) {
									var b = this.state.bid.price.toReal() / u.getPrice();
									if (b > 1.2)
										return (
											this.showConfirmBuyOrderModal(),
											this.setState({buyDiff: b})
										);
								} else if ('sell' === i && c) {
									var y = 1 / (this.state.ask.price.toReal() / c.getPrice());
									if (y > 1.2)
										return (
											this.showConfirmSellOrderModal(),
											this.setState({sellDiff: y})
										);
								}
								var g = t.getIn(['bitasset', 'is_prediction_market']);
								return p.for_sale.gt(r) && !g
									? h.Z.error({
											message: v().translate(
												'notifications.exchange_insufficient_funds_to_place_order',
												{
													amount: p.for_sale.getAmount({real: !0}),
													symbol: t.get('symbol'),
												}
											),
									  })
									: p.for_sale.getAmount() > 0 && p.to_receive.getAmount() > 0
									? 'sell' === i && g && s
										? this._createPredictionShort(m)
										: void this._createLimitOrder(i, m)
									: h.Z.warning({
											message: v().translate(
												'notifications.exchange_enter_valid_values'
											),
									  });
							},
						},
						{
							key: '_createScaledOrder',
							value: function (e, t) {
								var r = this,
									n = e.map(function (e) {
										return new N.F6({
											for_sale: e.for_sale,
											expiration: new Date(e.expirationTime || !1),
											to_receive: e.to_receive,
											seller: r.props.currentAccount.get('id'),
											fee: {asset_id: t, amount: 0},
										});
									});
								return O.Z.createLimitOrder2(n)
									.then(function (e) {
										e.error &&
											'wallet locked' !== e.error.message &&
											h.Z.error({
												message: v().translate(
													'notifications.exchange_unknown_error_place_scaled_order'
												),
											}),
											Oi.log('order success');
									})
									.catch(function (e) {
										Oi.log('order failed:', e);
									});
							},
						},
						{
							key: '_createLimitOrder',
							value: function (e, t) {
								var r,
									n = 'sell' === e ? 'ask' : 'bid',
									o = this.state[n];
								r =
									'SPECIFIC' === this.state.expirationType[n]
										? this.EXPIRATIONS[this.state.expirationType[n]].get(n)
										: this.EXPIRATIONS[this.state.expirationType[n]].get();
								var i = new N.F6({
										for_sale: o.for_sale,
										expiration: new Date(r || !1),
										to_receive: o.to_receive,
										seller: this.props.currentAccount.get('id'),
										fee: {asset_id: t, amount: 0},
									}),
									s = T.Z.getMarketName(
										this.props.baseAsset,
										this.props.quoteAsset
									),
									a = s.marketName,
									l = s.first,
									c = this.props.marketDirections.get(a);
								if (
									(c && l.get('id') !== this.props.baseAsset.get('id')) ||
									(!c && l.get('id') !== this.props.baseAsset.get('id'))
								) {
									var u = {};
									(u[a] = !c), C.Z.changeMarketDirection(u);
								}
								return O.Z.createLimitOrder2(i)
									.then(function (e) {
										e.error &&
											('wallet locked' !== e.error.message && Oi.log(e.error),
											h.Z.error({
												message: v().translate(
													'notifications.exchange_unknown_error_place_order',
													{
														amount: o.to_receive.getAmount({real: !0}),
														symbol: o.to_receive.asset_id,
													}
												),
											}));
									})
									.catch(function (e) {
										Oi.error('order failed:', e);
									});
							},
						},
						{
							key: '_clearForms',
							value: function (e) {
								var t = this._initialOrderState(this.props),
									r = t.ask,
									n = t.bid;
								e
									? 'ask' == e
										? this.setState({ask: r})
										: 'bid' == e && this.setState({bid: n})
									: this.setState({bid: n, ask: r});
							},
						},
						{
							key: '_createPredictionShort',
							value: function (e) {
								var t = this.state.ask,
									r = new N.F6({
										for_sale: t.for_sale,
										to_receive: t.to_receive,
										seller: this.props.currentAccount.get('id'),
										fee: {asset_id: e, amount: 0},
									});
								Promise.all([
									(0, d.aN)(
										'getAsset',
										this.props.quoteAsset.getIn([
											'bitasset',
											'options',
											'short_backing_asset',
										])
									),
								]).then(function (e) {
									var t,
										n,
										o = ((t = e),
										(n = 1),
										(function (e) {
											if (Array.isArray(e)) return e;
										})(t) ||
											(function (e, t) {
												var r =
													null == e
														? null
														: ('undefined' != typeof Symbol &&
																e[Symbol.iterator]) ||
														  e['@@iterator'];
												if (null != r) {
													var n,
														o,
														i = [],
														s = !0,
														a = !1;
													try {
														for (
															r = r.call(e);
															!(s = (n = r.next()).done) &&
															(i.push(n.value), !t || i.length !== t);
															s = !0
														);
													} catch (e) {
														(a = !0), (o = e);
													} finally {
														try {
															s || null == r.return || r.return();
														} finally {
															if (a) throw o;
														}
													}
													return i;
												}
											})(t, n) ||
											Ni(t, n) ||
											(function () {
												throw new TypeError(
													'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
												);
											})())[0],
										i = new N.xR({
											amount: r.amount_for_sale.getAmount(),
											asset_id: o.get('id'),
											precision: o.get('precision'),
										});
									O.Z.createPredictionShort(r, i).then(function (e) {
										e.error &&
											'wallet locked' !== e.error.message &&
											h.Z.error({
												message: v().translate(
													'notifications.exchange_unknown_error_place_order',
													{amount: buyAssetAmount, symbol: buyAsset.symbol}
												),
											});
									});
								});
							},
						},
						{
							key: '_forceBuy',
							value: function (e, t, r, n) {
								var o = this.state['sell' === e ? 'ask' : 'bid'];
								(r = o.for_sale.clone(
									r ? parseInt(d.BQ.getObject(r).get('balance'), 10) : 0
								)),
									(n = new N.xR({
										amount: n
											? parseInt(d.BQ.getObject(n).toJS().balance, 10)
											: 0,
									}));
								var i = this._getFee(t),
									s = this._verifyFee(
										i,
										o.for_sale,
										r.getAmount(),
										n.getAmount()
									);
								s
									? this._createLimitOrder(e, s)
									: Oi.error(
											'Unable to pay fees, aborting limit order creation'
									  );
							},
						},
						{
							key: '_forceSell',
							value: function (e, t, r, n) {
								var o = this.state['sell' === e ? 'ask' : 'bid'];
								(r = o.for_sale.clone(
									r ? parseInt(d.BQ.getObject(r).get('balance'), 10) : 0
								)),
									(n = new N.xR({
										amount: n
											? parseInt(d.BQ.getObject(n).toJS().balance, 10)
											: 0,
									}));
								var i = this._getFee(t),
									s = this._verifyFee(
										i,
										o.for_sale,
										r.getAmount(),
										n.getAmount()
									);
								s
									? this._createLimitOrder(e, s)
									: Oi.error(
											'Unable to pay fees, aborting limit order creation'
									  );
							},
						},
						{
							key: '_cancelLimitOrder',
							value: function (e, t) {
								t.preventDefault();
								var r = this.props.currentAccount;
								O.Z.cancelLimitOrder(r.get('id'), e);
							},
						},
						{
							key: '_changeZoomPeriod',
							value: function (e, t) {
								t.preventDefault(),
									e !== this.state.currentPeriod &&
										(this.setState({currentPeriod: e}),
										C.Z.changeViewSetting({currentPeriod: e}));
							},
						},
						{
							key: '_onGroupOrderLimitChange',
							value: function (e) {
								var t,
									r = this;
								if (
									('object' == Pi(e) &&
										(e.preventDefault(), (t = parseInt(e.target.value))),
									'number' == typeof e && (t = parseInt(e)),
									O.Z.changeCurrentGroupLimit(t),
									t !== this.props.currentGroupOrderLimit)
								) {
									O.Z.changeCurrentGroupLimit(t);
									var n = this.props.sub.split('_');
									O.Z.unSubscribeMarket(n[0], n[1]).then(function () {
										r.props.subToMarket(r.props, r.props.bucketSize, t);
									});
								}
							},
						},
						{
							key: '_depthChartClick',
							value: function (e, t, r) {
								r.preventDefault();
								var n = this.state,
									o = n.bid,
									i = n.ask;
								(o.price = new N.tA({
									base: this.state.bid.for_sale,
									quote: this.state.bid.to_receive,
									real: r.xAxis[0].value,
								})),
									(o.priceText = o.price.toReal()),
									(i.price = new N.tA({
										base: this.state.ask.to_receive,
										quote: this.state.ask.for_sale,
										real: r.xAxis[0].value,
									})),
									(i.priceText = i.price.toReal());
								var s = {bid: o, ask: i, depthLine: o.price.toReal()};
								this._setForSale(o, !0) || this._setReceive(o, !0),
									this._setReceive(i) || this._setForSale(i),
									this._setPriceText(o, !0),
									this._setPriceText(i, !1),
									this.setState(s);
							},
						},
						{
							key: '_setAutoscroll',
							value: function (e) {
								this.setState({autoScroll: e});
							},
						},
						{
							key: '_togglePanel',
							value: function (e) {
								if (e) {
									var t = [];
									this.state.activePanels.forEach(function (r) {
										r !== e && t.push(r);
									}),
										this.state.activePanels.includes(e) || t.push(e),
										this.setState({activePanels: t}),
										C.Z.changeViewSetting({activePanels: t});
								}
							},
						},
						{
							key: '_toggleChart',
							value: function (e) {
								this.setState({chartType: e}),
									C.Z.changeViewSetting({chartType: e});
							},
						},
						{
							key: '_flipBuySell',
							value: function () {
								this.setState({flipBuySell: !this.state.flipBuySell}),
									C.Z.changeViewSetting({flipBuySell: !this.state.flipBuySell});
							},
						},
						{
							key: '_toggleOpenBuySell',
							value: function () {
								C.Z.changeViewSetting({buySellOpen: !this.state.buySellOpen}),
									this.setState({buySellOpen: !this.state.buySellOpen});
							},
						},
						{
							key: '_toggleMarketPicker',
							value: function (e) {
								var t = !!e;
								t && this.showMarketPickerModal(),
									this.setState({showMarketPicker: t, marketPickerAsset: e});
							},
						},
						{
							key: '_moveOrderBook',
							value: function () {
								this.state.verticalOrderForm && this._moveOrderForm(),
									C.Z.changeViewSetting({
										verticalOrderBook: !this.state.verticalOrderBook,
									}),
									this.setState({
										verticalOrderBook: !this.state.verticalOrderBook,
									});
							},
						},
						{
							key: '_moveOrderForm',
							value: function () {
								this.state.verticalOrderBook && this._moveOrderBook(),
									C.Z.changeViewSetting({
										verticalOrderForm: !this.state.verticalOrderForm,
									}),
									this.setState({
										verticalOrderForm: !this.state.verticalOrderForm,
									});
							},
						},
						{
							key: '_togglePersonalize',
							value: function () {
								this.state.isPersonalizeModalVisible
									? this.setState({
											isPersonalizeModalVisible:
												!this.state.isPersonalizeModalVisible,
									  })
									: this.setState({
											isPersonalizeModalVisible:
												!this.state.isPersonalizeModalVisible,
											isPersonalizeModalLoaded: !0,
									  });
							},
						},
						{
							key: '_toggleScrollbars',
							value: function () {
								C.Z.changeViewSetting({
									hideScrollbars: !this.state.hideScrollbars,
								}),
									this.setState({hideScrollbars: !this.state.hideScrollbars});
							},
						},
						{
							key: '_toggleSingleColumnOrderForm',
							value: function () {
								C.Z.changeViewSetting({
									singleColumnOrderForm: !this.state.singleColumnOrderForm,
								}),
									this.setState({
										singleColumnOrderForm: !this.state.singleColumnOrderForm,
									});
							},
						},
						{
							key: '_mirrorPanels',
							value: function () {
								this.setState({mirrorPanels: !this.state.mirrorPanels}),
									C.Z.changeViewSetting({
										mirrorPanels: !this.state.mirrorPanels,
									});
							},
						},
						{
							key: '_currentPriceClick',
							value: function (e, t) {
								var r = 'bid' === e,
									n = this.state[e];
								(n.price = t[r ? 'invert' : 'clone']()),
									(n.priceText = n.price.toReal()),
									r
										? this._setForSale(n, r) || this._setReceive(n, r)
										: this._setReceive(n, r) || this._setForSale(n, r),
									this.forceUpdate();
							},
						},
						{
							key: '_orderbookClick',
							value: function (e) {
								var t = e.isBid(),
									r = e.totalToReceive({noCache: !0}),
									n = r.times(e.sellPrice()),
									o = new N.tA({base: t ? n : r, quote: t ? r : n}),
									i = this.state[t ? 'bid' : 'ask'];
								(i.price = o), (i.priceText = o.toReal());
								var s = Li({}, t ? 'ask' : 'bid', {
									for_sale: r,
									forSaleText: r.getAmount({real: !0}),
									to_receive: n,
									toReceiveText: n.getAmount({real: !0}),
									price: o,
									priceText: o.toReal(),
								});
								t
									? this._setForSale(i, t) || this._setReceive(i, t)
									: this._setReceive(i, t) || this._setForSale(i, t),
									this.setState(s);
							},
						},
						{
							key: '_borrowQuote',
							value: function () {
								this.showBorrowQuoteModal();
							},
						},
						{
							key: '_borrowBase',
							value: function () {
								this.showBorrowBaseModal();
							},
						},
						{
							key: '_onDeposit',
							value: function (e) {
								this.setState({depositModalType: e}), this.showDepositModal();
							},
						},
						{
							key: '_onBuy',
							value: function (e) {
								this.setState({buyModalType: e}), this.showDepositBridgeModal();
							},
						},
						{
							key: '_getSettlementInfo',
							value: function () {
								var e = this.props,
									t = e.lowestCallPrice,
									r = e.feedPrice,
									n = e.quoteAsset,
									o = !1;
								return (
									r && (o = r.inverted ? t <= r.toReal() : t >= r.toReal()),
									!(!o || !t || n.getIn(['bitasset', 'is_prediction_market']))
								);
							},
						},
						{
							key: '_setTabVerticalPanel',
							value: function (e) {
								this.setState({tabVerticalPanel: e}),
									C.Z.changeViewSetting({tabVerticalPanel: e});
							},
						},
						{
							key: '_setTabBuySell',
							value: function (e) {
								this.setState({tabBuySell: e}),
									C.Z.changeViewSetting({tabBuySell: e});
							},
						},
						{
							key: '_setPanelTabInGroup',
							value: function (e, t) {
								var r = this.state.panelTabsActive;
								Object.keys(r).map(function (n) {
									n == e && (r[n] = t);
								}),
									this.setState({panelTabsActive: r, forceReRender: !0}),
									C.Z.changeViewSetting({panelTabsActive: r});
							},
						},
						{
							key: '_setPanelTabs',
							value: function (e, t) {
								var r = this.state,
									n = r.panelTabs,
									o = r.panelTabsActive,
									i = {panelTabs: n, panelTabsActive: o};
								Object.keys(n).map(function (r) {
									i.panelTabs[r] = r == e ? t : n[r];
								}),
									Object.keys(o).map(function (e) {
										i.panelTabsActive[e] = '';
									}),
									this.setState({newState: i}),
									C.Z.changeViewSetting(Bi({}, i));
							},
						},
						{
							key: 'onChangeFeeAsset',
							value: function (e, t) {
								'buy' === e
									? (this.setState({buyFeeAssetIdx: t}),
									  C.Z.changeViewSetting({buyFeeAssetIdx: t}))
									: (this.setState({sellFeeAssetIdx: t}),
									  C.Z.changeViewSetting({sellFeeAssetIdx: t}));
							},
						},
						{
							key: 'onChangeChartHeight',
							value: function (e) {
								var t = e.value,
									r = e.increase,
									n = t || this.state.chartHeight + (r ? 20 : -20);
								n < 425 && (n = 425),
									n > 1e3 && (n = 1e3),
									this.setState({chartHeight: n}),
									C.Z.changeViewSetting({chartHeight: n});
							},
						},
						{
							key: '_toggleBuySellPosition',
							value: function () {
								this.setState({buySellTop: !this.state.buySellTop}),
									C.Z.changeViewSetting({buySellTop: !this.state.buySellTop});
							},
						},
						{
							key: '_setReceive',
							value: function (e, t) {
								return !(
									!e.price.isValid() ||
									!e.for_sale.hasAmount() ||
									((e.to_receive = e.for_sale.times(e.price)),
									(e.toReceiveText = e.to_receive
										.getAmount({real: !0})
										.toString()),
									0)
								);
							},
						},
						{
							key: '_setForSale',
							value: function (e, t) {
								return !(
									!e.price.isValid() ||
									!e.to_receive.hasAmount() ||
									((e.for_sale = e.to_receive.times(e.price, !0)),
									(e.forSaleText = e.for_sale.getAmount({real: !0}).toString()),
									0)
								);
							},
						},
						{
							key: '_setPrice',
							value: function (e) {
								return !(
									!e.for_sale.hasAmount() ||
									!e.to_receive.hasAmount() ||
									((e.price = new N.tA({
										base: e.for_sale,
										quote: e.to_receive,
									})),
									(e.priceText = e.price.toReal().toString()),
									0)
								);
							},
						},
						{
							key: '_setPriceText',
							value: function (e, t) {
								var r = e[t ? 'for_sale' : 'to_receive'],
									n = e[t ? 'to_receive' : 'for_sale'];
								r.hasAmount() &&
									n.hasAmount() &&
									(e.priceText = new N.tA({base: r, quote: n})
										.toReal()
										.toString());
							},
						},
						{
							key: '_onInputPrice',
							value: function (e, t) {
								var r = this.state[e],
									n = 'bid' === e;
								(r.price = new N.tA({
									base: r[n ? 'for_sale' : 'to_receive'],
									quote: r[n ? 'to_receive' : 'for_sale'],
									real: parseFloat(t.target.value) || 0,
								})),
									n
										? this._setForSale(r, n) || this._setReceive(r, n)
										: this._setReceive(r, n) || this._setForSale(r, n),
									(r.priceText = t.target.value),
									this.forceUpdate();
							},
						},
						{
							key: '_onInputSell',
							value: function (e, t, r) {
								var n = this.state[e];
								n.for_sale.setAmount({real: parseFloat(r.target.value) || 0}),
									n.price.isValid()
										? this._setReceive(n, t)
										: this._setPrice(n),
									(n.forSaleText = r.target.value),
									this._setPriceText(n, 'bid' === e),
									this.forceUpdate();
							},
						},
						{
							key: '_onInputReceive',
							value: function (e, t, r) {
								var n = this.state[e];
								n.to_receive.setAmount({real: parseFloat(r.target.value) || 0}),
									n.price.isValid()
										? this._setForSale(n, t)
										: this._setPrice(n),
									(n.toReceiveText = r.target.value),
									this._setPriceText(n, 'bid' === e),
									this.forceUpdate();
							},
						},
						{
							key: 'isMarketFrozen',
							value: function () {
								var e = this.props,
									t = e.baseAsset,
									r = e.quoteAsset,
									n = t.getIn(['options', 'whitelist_markets']).toJS(),
									o = r.getIn(['options', 'whitelist_markets']).toJS(),
									i = t.getIn(['options', 'blacklist_markets']).toJS(),
									s = r.getIn(['options', 'blacklist_markets']).toJS();
								return o.length && -1 === o.indexOf(t.get('id'))
									? {isFrozen: !0, frozenAsset: r.get('symbol')}
									: n.length && -1 === n.indexOf(r.get('id'))
									? {isFrozen: !0, frozenAsset: t.get('symbol')}
									: s.length && -1 !== s.indexOf(t.get('id'))
									? {isFrozen: !0, frozenAsset: r.get('symbol')}
									: i.length && -1 !== i.indexOf(r.get('id'))
									? {isFrozen: !0, frozenAsset: t.get('symbol')}
									: {isFrozen: !1};
							},
						},
						{
							key: '_toggleMiniChart',
							value: function () {
								C.Z.changeViewSetting({
									miniDepthChart: !this.props.miniDepthChart,
								});
							},
						},
						{
							key: '_onChangeMobilePanel',
							value: function (e) {
								this.setState({mobileKey: e});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props,
									r = t.currentAccount,
									n = t.marketLimitOrders,
									o = t.marketCallOrders,
									i = t.marketData,
									s = t.activeMarketHistory,
									a = t.invertedCalls,
									l = t.starredMarkets,
									c = t.quoteAsset,
									u = t.baseAsset,
									d = t.lowestCallPrice,
									h = t.marketStats,
									b = t.marketReady,
									g = t.marketSettleOrders,
									x = t.bucketSize,
									_ = t.totals,
									j = t.feedPrice,
									k = t.buckets,
									S = t.coreAsset,
									w = t.trackedGroupsConfig,
									A = t.currentGroupOrderLimit,
									C = i.combinedBids,
									O = i.combinedAsks,
									T = i.lowestAsk,
									N = i.highestBid,
									Z = i.flatBids,
									R = i.flatAsks,
									B = i.flatCalls,
									F = i.flatSettles,
									E = i.groupedBids,
									I = i.groupedAsks,
									L = this.state,
									D = L.bid,
									V = L.ask,
									z = L.verticalOrderBook,
									H = L.verticalOrderForm,
									U = L.chartHeight,
									W = L.chartType,
									G = L.flipBuySell,
									Q = L.buyDiff,
									K = L.sellDiff,
									Y = L.width,
									J = L.buySellTop,
									$ = L.tabBuySell,
									X = L.tabVerticalPanel,
									ee = L.hidePanel,
									te = L.hideScrollbars,
									re = (L.buyModalType, L.depositModalType, L.autoScroll),
									ne = L.activePanels,
									oe = (L.panelWidth, L.mirrorPanels),
									ie = L.panelTabsActive,
									se = L.panelTabs,
									ae = L.singleColumnOrderForm,
									le = L.flipOrderBook,
									ue = L.orderBookReversed,
									de = L.chartZoom,
									pe = L.chartTools,
									he = L.hideFunctionButtons,
									fe = this.isMarketFrozen(),
									me = fe.isFrozen,
									be = (fe.frozenAsset, Y);
								this.refs.center && (be = this.refs.center.clientWidth);
								var ye,
									ge,
									ve,
									xe,
									_e = null,
									je = null,
									ke = null,
									Se = null,
									we = null,
									Ae = null,
									Ce = !1,
									Oe = this.props.viewSettings.get('showVolumeChart', !0);
								if (((te = !!Ue || te), c.size && u.size && r.size)) {
									if (
										((je = c),
										(ge = (_e = u).get('symbol')),
										(ye = je.get('symbol')),
										(ke = r.get('balances').toJS()))
									)
										for (var Pe in ke)
											Pe === je.get('id') && (Se = ke[Pe]),
												Pe === _e.get('id') && (we = ke[Pe]),
												'1.3.0' === Pe && (Ae = ke[Pe]);
									Ce = this._getSettlementInfo();
								}
								var Te = !!c.get('bitasset_data_id'),
									Ne = !!u.get('bitasset_data_id'),
									Ze = T && N ? T.getPrice() - N.getPrice() : 0;
								if (s.size) {
									var Re = s.take(2);
									ve = Re.first();
									var Be = Re.last();
									xe =
										ve.getPrice() === Be.getPrice()
											? ''
											: ve.getPrice() - Be.getPrice() > 0
											? 'change-up'
											: 'change-down';
								}
								if (!S || !Object.keys(this.state.feeStatus).length)
									return null;
								var Fe = this._getFeeAssets(je, _e, S),
									Me = Fe.sellFeeAsset,
									Ee = Fe.sellFeeAssets,
									Ie = Fe.sellFee,
									qe = Fe.buyFeeAsset,
									Le = Fe.buyFeeAssets,
									De = Fe.buyFee,
									Ve =
										_e.getIn(['bitasset', 'is_prediction_market']) ||
										je.getIn(['bitasset', 'is_prediction_market']),
									ze = null;
								Ve &&
									((ze = c.getIn(['options', 'description'])),
									(ze = P.Z.parseDescription(ze).main));
								var He = Y < 850,
									Ue = Y < 640,
									We =
										(Math.max(this.state.height > 1100 ? U : U - 125, 300),
										this.state.expirationType),
									Ge = this.state.expirationCustomTime,
									Qe = ne.length >= 1,
									Ke = _e.getIn(['bitasset', 'is_prediction_market']),
									Ye = 0,
									Je = function (t) {
										return (0, q.jsx)('div', {
											className: 'exchange-content-header',
											children: (0, q.jsx)(M.Z, {
												string: 'exchange.buysell_formatter',
												noLink: !0,
												noTip: !0,
												keys: [
													{
														type: 'asset',
														value: e.props.quoteAsset.get('symbol'),
														arg: 'asset',
													},
													{
														type: 'translate',
														value: t ? 'exchange.buy' : 'exchange.sell',
														arg: 'direction',
													},
												],
											}),
										});
									},
									$e =
										me || (Ue && !this.state.mobileKey.includes('buySellTab'))
											? null
											: (0, q.jsxs)(p.Z, {
													animated: !1,
													activeKey:
														this.props.viewSettings.get('order-form-bid') ||
														'limit',
													style: {
														borderRight: '2px solid black',
														borderLeft: '4px solid black',
														borderTop: '2px solid black',
														borderBottom: '4px solid black',
														flexGrow: 1,
														minWidth: '290px',
													},
													onChange: this.handleOrderTypeTabChange.bind(
														this,
														'bid'
													),
													tabBarExtraContent: (0, q.jsx)('div', {
														children: Je(!0),
													}),
													defaultActiveKey: 'limit',
													className: y()(
														'exchange--buy-sell-form',
														'small-3',
														'middle-content',
														G
															? 'order-'
																	.concat(3, ' large-order-')
																	.concat(J ? 3 : 5, ' sell-form')
															: 'order-'
																	.concat(2, ' large-order-')
																	.concat(J ? 2 : 4, ' buy-form')
													),
													children: [
														(0, q.jsx)(
															p.Z.TabPane,
															{
																tab: v().translate('exchange.limit'),
																children: (0, q.jsx)(
																	ce,
																	{
																		showScaledOrderModal:
																			this.showScaledOrderModal,
																		onBorrow: Ne
																			? this._borrowBase.bind(this)
																			: null,
																		onBuy: this._onBuy.bind(this, 'bid'),
																		onDeposit: this._onDeposit.bind(
																			this,
																			'bid'
																		),
																		currentAccount: r,
																		isOpen: this.state.buySellOpen,
																		onToggleOpen:
																			this._toggleOpenBuySell.bind(this),
																		parentWidth: be,
																		styles: {
																			padding: 5,
																			paddingRight: oe ? 15 : 5,
																		},
																		type: 'bid',
																		hideHeader: !0,
																		expirationType: We.bid,
																		expirations: this.EXPIRATIONS,
																		expirationCustomTime: Ge.bid,
																		onExpirationTypeChange:
																			this._handleExpirationChange.bind(
																				this,
																				'bid'
																			),
																		onExpirationCustomChange:
																			this._handleCustomExpirationChange.bind(
																				this,
																				'bid'
																			),
																		amount: D.toReceiveText,
																		price: D.priceText,
																		total: D.forSaleText,
																		quote: je,
																		base: _e,
																		amountChange: this._onInputReceive.bind(
																			this,
																			'bid',
																			!0
																		),
																		priceChange: this._onInputPrice.bind(
																			this,
																			'bid'
																		),
																		setPrice:
																			this._currentPriceClick.bind(this),
																		totalChange: this._onInputSell.bind(
																			this,
																			'bid',
																			!1
																		),
																		clearForm: this._clearForms.bind(
																			this,
																			'bid'
																		),
																		balance: we,
																		balanceId: _e.get('id'),
																		onSubmit:
																			this._createLimitOrderConfirm.bind(
																				this,
																				je,
																				_e,
																				we,
																				Ae,
																				qe,
																				'buy'
																			),
																		balancePrecision: _e.get('precision'),
																		quotePrecision: je.get('precision'),
																		totalPrecision: _e.get('precision'),
																		currentPrice: T.getPrice(),
																		currentPriceObject: T,
																		account: r.get('name'),
																		fee: De,
																		hasFeeBalance:
																			this.state.feeStatus[De.asset_id]
																				.hasBalance,
																		feeAssets: Le,
																		feeAsset: qe,
																		onChangeFeeAsset:
																			this.onChangeFeeAsset.bind(this, 'buy'),
																		isPredictionMarket: _e.getIn([
																			'bitasset',
																			'is_prediction_market',
																		]),
																		onFlip: G
																			? null
																			: this._flipBuySell.bind(this),
																		onTogglePosition:
																			this.state.buySellTop && !z
																				? this._toggleBuySellPosition.bind(this)
																				: null,
																		moveOrderForm:
																			He || (G && !H)
																				? null
																				: this._moveOrderForm.bind(this),
																		verticalOrderForm: !He && H,
																		isPanelActive: Qe,
																		activePanels: ne,
																		singleColumnOrderForm: ae,
																		hideFunctionButtons: he,
																	},
																	'actionCard_'.concat(Ye++)
																),
															},
															'limit'
														),
														(0, q.jsx)(
															p.Z.TabPane,
															{
																style: {fontSize: '10px'},
																tab: v().translate('exchange.scaled'),
																children: (0, q.jsx)(ot, {
																	expirationType: We.bid,
																	expirations: this.EXPIRATIONS,
																	expirationCustomTime: Ge.bid,
																	onExpirationTypeChange:
																		this._handleExpirationChange.bind(
																			this,
																			'bid'
																		),
																	onExpirationCustomChange:
																		this._handleCustomExpirationChange.bind(
																			this,
																			'bid'
																		),
																	currentPrice: T.getPrice(),
																	lastClickedPrice:
																		this.state.ask && this.state.ask.priceText,
																	currentAccount: r,
																	createScaledOrder: this._createScaledOrder,
																	type: 'bid',
																	quoteAsset: je,
																	baseAsset: _e,
																}),
															},
															'scaled'
														),
													],
											  }),
									Xe =
										me || (Ue && !this.state.mobileKey.includes('buySellTab'))
											? null
											: (0, q.jsxs)(p.Z, {
													activeKey:
														this.props.viewSettings.get('order-form-ask') ||
														'limit',
													onChange: this.handleOrderTypeTabChange.bind(
														this,
														'ask'
													),
													animated: !1,
													tabBarExtraContent: (0, q.jsx)('div', {
														children: Je(!1),
													}),
													defaultActiveKey: 'limit',
													style: {
														borderLeft: '2px solid black',
														borderTop: '2px solid black',
														borderBottom: '4px solid black',
														flexGrow: 1,
														minWidth: '290px',
													},
													className: y()(
														'exchange--buy-sell-form',
														'small-3 middle-content',
														G
															? 'order-'
																	.concat(J ? 6 : 2, ' large-order-')
																	.concat(J ? 6 : 4, ' buy-form')
															: 'order-'
																	.concat(J ? 2 : 3, ' large-order-')
																	.concat(J ? 2 : 5, ' sell-form')
													),
													children: [
														(0, q.jsx)(
															p.Z.TabPane,
															{
																tab: v().translate('exchange.limit'),
																children: (0, q.jsx)(
																	ce,
																	{
																		showScaledOrderModal:
																			this.showScaledOrderModal,
																		onBorrow: Te
																			? this._borrowQuote.bind(this)
																			: null,
																		onBuy: this._onBuy.bind(this, 'ask'),
																		onDeposit: this._onDeposit.bind(
																			this,
																			'ask'
																		),
																		currentAccount: r,
																		isOpen: this.state.buySellOpen,
																		onToggleOpen:
																			this._toggleOpenBuySell.bind(this),
																		parentWidth: be,
																		styles: {
																			padding: 5,
																			paddingRight: oe ? 15 : 5,
																		},
																		type: 'ask',
																		hideHeader: !0,
																		amount: V.forSaleText,
																		price: V.priceText,
																		total: V.toReceiveText,
																		quote: je,
																		base: _e,
																		expirationType: We.ask,
																		expirations: this.EXPIRATIONS,
																		expirationCustomTime: Ge.ask,
																		onExpirationTypeChange:
																			this._handleExpirationChange.bind(
																				this,
																				'ask'
																			),
																		onExpirationCustomChange:
																			this._handleCustomExpirationChange.bind(
																				this,
																				'ask'
																			),
																		amountChange: this._onInputSell.bind(
																			this,
																			'ask',
																			!1
																		),
																		priceChange: this._onInputPrice.bind(
																			this,
																			'ask'
																		),
																		setPrice:
																			this._currentPriceClick.bind(this),
																		totalChange: this._onInputReceive.bind(
																			this,
																			'ask',
																			!0
																		),
																		clearForm: this._clearForms.bind(
																			this,
																			'ask'
																		),
																		balance: Se,
																		balanceId: je.get('id'),
																		onSubmit:
																			this._createLimitOrderConfirm.bind(
																				this,
																				_e,
																				je,
																				Se,
																				Ae,
																				Me,
																				'sell'
																			),
																		balancePrecision: je.get('precision'),
																		quotePrecision: je.get('precision'),
																		totalPrecision: _e.get('precision'),
																		currentPrice: N.getPrice(),
																		currentPriceObject: N,
																		account: r.get('name'),
																		fee: Ie,
																		hasFeeBalance:
																			this.state.feeStatus[Ie.asset_id]
																				.hasBalance,
																		feeAssets: Ee,
																		feeAsset: Me,
																		onChangeFeeAsset:
																			this.onChangeFeeAsset.bind(this, 'sell'),
																		isPredictionMarket: je.getIn([
																			'bitasset',
																			'is_prediction_market',
																		]),
																		onFlip: G
																			? this._flipBuySell.bind(this)
																			: null,
																		onTogglePosition:
																			this.state.buySellTop && !z
																				? this._toggleBuySellPosition.bind(this)
																				: null,
																		moveOrderForm:
																			He || (!G && !H)
																				? null
																				: this._moveOrderForm.bind(this),
																		verticalOrderForm: !He && H,
																		isPanelActive: Qe,
																		activePanels: ne,
																		singleColumnOrderForm: ae,
																		hideFunctionButtons: he,
																	},
																	'actionCard_'.concat(Ye++)
																),
															},
															'limit'
														),
														(0, q.jsx)(
															p.Z.TabPane,
															{
																tab: v().translate('exchange.scaled'),
																children: (0, q.jsx)(ot, {
																	expirationType: We.ask,
																	expirations: this.EXPIRATIONS,
																	expirationCustomTime: Ge.ask,
																	onExpirationTypeChange:
																		this._handleExpirationChange.bind(
																			this,
																			'ask'
																		),
																	onExpirationCustomChange:
																		this._handleCustomExpirationChange.bind(
																			this,
																			'ask'
																		),
																	currentPrice: N.getPrice(),
																	lastClickedPrice:
																		this.state.ask && this.state.ask.priceText,
																	currentAccount: r,
																	createScaledOrder: this._createScaledOrder,
																	type: 'ask',
																	baseAsset: _e,
																	quoteAsset: je,
																}),
															},
															'scaled'
														),
													],
											  }),
									et =
										Ue && !this.state.mobileKey.includes('myMarkets')
											? null
											: (0, q.jsx)(
													Ir.Z,
													{
														className: 'left-order-book no-overflow order-9',
														style: {
															minWidth: 350,
															height: He ? 680 : 'calc(100vh - 167px)',
															padding: He ? 10 : 0,
														},
														headerStyle: {
															width: '100%',
															display: He ? '' : 'display: none',
														},
														noHeader: !0,
														listHeight: this.state.height - 450,
														columns: [
															{name: 'star', index: 1},
															{name: 'market', index: 2},
															{name: 'vol', index: 3},
															{name: 'price', index: 4},
															{name: 'change', index: 5},
														],
														findColumns: [
															{name: 'market', index: 1},
															{name: 'issuer', index: 2},
															{name: 'vol', index: 3},
															{name: 'add', index: 4},
														],
														current: ''.concat(ye, '_').concat(ge),
														location: this.props.location,
														history: this.props.history,
														activeTab: X || 'my-market',
													},
													'actionCard_'.concat(Ye++)
											  ),
									tt =
										Ue && !this.state.mobileKey.includes('orderBook')
											? null
											: (0, q.jsx)(
													Er,
													{
														ref: 'order_book',
														latest: ve && ve.getPrice(),
														changeClass: xe,
														orders: n,
														calls: o,
														invertedCalls: a,
														combinedBids: C,
														combinedAsks: O,
														highestBid: N,
														chartHeight: U,
														lowestAsk: T,
														totalBids: _.bid,
														totalAsks: _.ask,
														base: _e,
														quote: je,
														baseSymbol: ge,
														quoteSymbol: ye,
														onClick: this._orderbookClick.bind(this),
														horizontal: !(z && !He),
														flipOrderBook: le,
														orderBookReversed: ue,
														marketReady: b,
														currentAccount: this.props.currentAccount.get('id'),
														handleGroupOrderLimitChange:
															this._onGroupOrderLimitChange.bind(this),
														trackedGroupsConfig: w,
														currentGroupOrderLimit: A,
														groupedBids: E,
														groupedAsks: I,
														isPanelActive: ne.length >= 1,
														onTogglePosition: this.state.buySellTop
															? null
															: this._toggleBuySellPosition.bind(this),
														moveOrderBook: He
															? null
															: this._moveOrderBook.bind(this),
														smallScreen: He,
														hideScrollbars: te,
														autoScroll: re,
														onFlipOrderBook: this._flipOrderBook.bind(this),
														hideFunctionButtons: he,
													},
													'actionCard_'.concat(Ye++)
											  ),
									rt =
										Ue && !this.state.mobileKey.includes('marketHistory')
											? null
											: (0, q.jsx)(
													gn,
													{
														className: y()(
															0 == se.history
																? be > 1200
																	? 'medium-6 large-6 xlarge-4'
																	: be > 800
																	? 'medium-6'
																	: ''
																: 'medium-12',
															'no-padding no-overflow small-12 order-6'
														),
														innerStyle: {paddingBottom: '0', height: '100%'},
														noHeader: 0 != se.history,
														history: s,
														currentAccount: r,
														myHistory: r.get('history'),
														base: _e,
														quote: je,
														chartHeight: U,
														baseSymbol: ge,
														quoteSymbol: ye,
														activeTab: 'history',
														tinyScreen: Ue,
														isPanelActive: Qe,
														hideScrollbars: te,
													},
													'actionCard_'.concat(Ye++)
											  ),
									nt =
										Ue && !this.state.mobileKey.includes('myMarketHistory')
											? null
											: (0, q.jsx)(
													gn,
													{
														className: y()(
															0 == se.my_history
																? be > 1200
																	? 'medium-6 large-6 xlarge-4'
																	: be > 800
																	? 'medium-6'
																	: ''
																: 'medium-12',
															'no-padding no-overflow small-12',
															z || H ? 'order-4' : 'order-3'
														),
														innerStyle: {paddingBottom: '0', height: '225px'},
														noHeader: 0 != se.my_history,
														history: s,
														currentAccount: r,
														myHistory: r.get('history'),
														base: _e,
														quote: je,
														baseSymbol: ge,
														quoteSymbol: ye,
														activeTab: 'my_history',
														tinyScreen: Ue,
														isPanelActive: Qe,
														hideScrollbars: te,
													},
													'actionCard_'.concat(Ye++)
											  ),
									it =
										Ue && !this.state.mobileKey.includes('myOpenOrders')
											? null
											: (0, q.jsx)(
													br,
													{
														style: {marginBottom: 0},
														className: y()(
															0 == se.my_orders
																? be > 1200
																	? 'medium-6 large-6 xlarge-4'
																	: be > 800
																	? 'medium-12'
																	: ''
																: 'medium-12',
															'no-padding no-overflow small-12 order-7'
														),
														innerStyle: {paddingBottom: '0'},
														noHeader: 0 != se.my_orders,
														orders: n,
														settleOrders: g,
														currentAccount: r,
														base: _e,
														quote: je,
														baseSymbol: ge,
														quoteSymbol: ye,
														activeTab: 'my_orders',
														onCancel: this._cancelLimitOrder.bind(this),
														flipMyOrders:
															this.props.viewSettings.get('flipMyOrders'),
														feedPrice: this.props.feedPrice,
														smallScreen: He,
														tinyScreen: Ue,
														hidePanel: ee,
														isPanelActive: Qe,
														hideScrollbars: te,
													},
													'actionCard_'.concat(Ye++)
											  ),
									st =
										0 === g.size ||
										(Ue && !this.state.mobileKey.includes('settlementOrders'))
											? null
											: (0, q.jsx)(
													br,
													{
														style: {marginBottom: 0},
														className: y()(
															0 == se.open_settlement
																? be > 1200
																	? 'medium-6 large-6 xlarge-4'
																	: be > 800
																	? 'medium-6'
																	: ''
																: 'medium-12',
															'no-padding no-overflow small-12 order-8'
														),
														innerStyle: {paddingBottom: '0'},
														noHeader: 0 != se.open_settlement,
														orders: n,
														settleOrders: g,
														currentAccount: r,
														base: _e,
														quote: je,
														baseSymbol: ge,
														quoteSymbol: ye,
														activeTab: 'open_settlement',
														onCancel: this._cancelLimitOrder.bind(this),
														flipMyOrders:
															this.props.viewSettings.get('flipMyOrders'),
														feedPrice: this.props.feedPrice,
														smallScreen: He,
														tinyScreen: Ue,
														hidePanel: ee,
														isPanelActive: Qe,
														hideScrollbars: te,
													},
													'actionCard_'.concat(Ye++)
											  ),
									at =
										(!Ue && 'price_chart' != W) ||
										(Ue && !this.state.mobileKey.includes('tradingViewChart'))
											? null
											: (0, q.jsx)(Ro, {
													locale: this.props.locale,
													dataFeed: this.props.dataFeed,
													baseSymbol: ge,
													quoteSymbol: ye,
													marketReady: b,
													theme: this.props.settings.get('themes'),
													buckets: k,
													bucketSize: x,
													currentPeriod: this.state.currentPeriod,
													chartHeight: U + 22,
													chartZoom: !Ue && de,
													chartTools: !Ue && pe,
													mobile: Ue,
											  }),
									lt =
										(!Ue && 'market_depth' != W) ||
										(Ue && !this.state.mobileKey.includes('deptHighChart'))
											? null
											: (0, q.jsx)(Ho, {
													marketReady: b,
													orders: n,
													showCallLimit: Ce,
													call_orders: o,
													flat_asks: R,
													flat_bids: Z,
													flat_calls: Ce ? B : [],
													flat_settles:
														this.props.settings.get('showSettles') && F,
													settles: g,
													invertedCalls: a,
													totalBids: _.bid,
													totalAsks: _.ask,
													base: _e,
													quote: je,
													height: U + 8,
													isPanelActive: Qe,
													onClick: this._depthChartClick.bind(this, _e, je),
													feedPrice: !Ve && j && j.toReal(),
													spread: Ze,
													LCP: Ce ? d : null,
													hasPrediction: Ve,
													noFrame: !1,
													theme: this.props.settings.get('themes'),
													centerRef: this.refs.center,
													activePanels: ne,
											  }),
									ct = (0, q.jsx)(
										'div',
										{
											className: 'left-order-book small-12',
											style: {paddingLeft: 5, width: !He && 600},
											children: (0, q.jsxs)(p.Z, {
												defaultActiveKey: 'buy',
												activeKey: $,
												onChange: this._setTabBuySell.bind(this),
												style: {
													padding: '0px !important',
													margin: '0px !important',
												},
												children: [
													(0, q.jsx)(
														p.Z.TabPane,
														{
															tab: (0, q.jsx)(M.Z, {
																string: 'exchange.buysell_formatter',
																noLink: !0,
																noTip: !1,
																keys: [
																	{
																		type: 'asset',
																		value: je.get('symbol'),
																		arg: 'asset',
																	},
																	{
																		type: 'translate',
																		value: Ke
																			? 'exchange.short'
																			: 'exchange.buy',
																		arg: 'direction',
																	},
																],
															}),
															children: $e,
														},
														'buy'
													),
													(0, q.jsx)(
														p.Z.TabPane,
														{
															tab: (0, q.jsx)(M.Z, {
																string: 'exchange.buysell_formatter',
																noLink: !0,
																noTip: !1,
																keys: [
																	{
																		type: 'asset',
																		value: je.get('symbol'),
																		arg: 'asset',
																	},
																	{
																		type: 'translate',
																		value: Ke
																			? 'exchange.short'
																			: 'exchange.sell',
																		arg: 'direction',
																	},
																],
															}),
															children: Xe,
														},
														'sell'
													),
												],
											}),
										},
										'actionCard_'.concat(Ye++)
									),
									ut = {1: [], 2: []},
									dt = [];
								Object.keys(se)
									.sort()
									.map(function (e) {
										0 == se[e]
											? ('my_history' == e && dt.push(nt),
											  'history' == e && dt.push(rt),
											  'my_orders' == e && dt.push(it),
											  'open_settlement' == e && null !== st && dt.push(st))
											: ('history' == e &&
													ut[se[e]].push(
														(0, q.jsx)(
															'div',
															{style: {height: '100%'}, children: rt},
															'history'
														)
													),
											  'my_orders' == e &&
													(ut[se[e]].push(
														(0, q.jsx)(
															p.Z.TabPane,
															{
																tab: v().translate('exchange.my_orders'),
																children: it,
															},
															'my_orders'
														)
													),
													ut[se[e]].push(
														(0, q.jsx)(
															p.Z.TabPane,
															{
																tab: v().translate('exchange.my_history'),
																children: nt,
															},
															'my_history'
														)
													)),
											  'open_settlement' == e &&
													null !== st &&
													ut[se[e]].push(
														(0, q.jsx)(
															p.Z.TabPane,
															{
																tab: v().translate('exchange.settle_orders'),
																children: st,
															},
															'open_settlement'
														)
													));
									}),
									Object.keys(ie).map(function (e) {
										Object.keys(se).map(function (t) {
											var r = !1;
											r ||
												e != se[t] ||
												((ie[e] = ie[e] ? ie[e] : t), (r = !0));
										});
									});
								var pt = dt.length;
								Object.keys(ut).map(function (e) {
									ut[e].length && pt++;
								});
								var ht =
										ut[2].length > 0
											? (0, q.jsx)(
													'div',
													{
														style: {height: '100%'},
														className: y()(
															be > 1200
																? 1 == pt
																	? 'medium-12 xlarge-6'
																	: 'medium-6 xlarge-6'
																: be > 800
																? 1 == pt
																	? 'medium-12'
																	: 'medium-6'
																: '',
															'small-12 order-1 my-open-orders-res'
														),
														children: (0, q.jsx)(p.Z, {
															style: {
																borderTop: '2px solid black',
																height: '100%',
															},
															activeKey: ie[2],
															onChange: this._setPanelTabInGroup.bind(this, 2),
															children: ut[2],
														}),
													},
													'actionCard_'.concat(Ye++)
											  )
											: null,
									ft =
										pt > 2
											? null
											: (0, q.jsx)(
													'div',
													{
														className: y()(
															be > 1200 && (z || z)
																? 'xlarge-order-6 xlarge-8 order-9'
																: '',
															'small-12 grid-block orderbook no-padding align-spaced no-overflow wrap'
														),
														style: {height: '100%'},
														children: ' ',
													},
													'actionCard_'.concat(Ye++)
											  ),
									mt = [];
								He
									? Ue
										? (mt = (0, q.jsxs)(f.Z, {
												activeKey: this.state.mobileKey,
												onChange: this._onChangeMobilePanel.bind(this),
												children: [
													(0, q.jsx)(
														f.Z.Panel,
														{
															header: v().translate('exchange.price_history'),
															children: at,
														},
														'tradingViewChart'
													),
													(0, q.jsx)(
														f.Z.Panel,
														{
															header: v().translate('exchange.order_depth'),
															children: lt,
														},
														'deptHighChart'
													),
													(0, q.jsx)(
														f.Z.Panel,
														{
															header: v().translate('exchange.buy_sell'),
															children: ct,
														},
														'buySellTab'
													),
													(0, q.jsx)(
														f.Z.Panel,
														{
															header: v().translate('exchange.order_book'),
															children: tt,
														},
														'orderBook'
													),
													(0, q.jsx)(
														f.Z.Panel,
														{
															header: v().translate('exchange.history'),
															children: rt,
														},
														'marketHistory'
													),
													null !== st
														? (0, q.jsx)(
																f.Z.Panel,
																{
																	header: v().translate(
																		'exchange.settle_orders'
																	),
																	children: st,
																},
																'settlementOrders'
														  )
														: null,
													(0, q.jsx)(
														f.Z.Panel,
														{
															header: v().translate('exchange.my_history'),
															children: nt,
														},
														'myMarketHistory'
													),
													(0, q.jsx)(
														f.Z.Panel,
														{
															header: v().translate('exchange.my_orders'),
															children: it,
														},
														'myOpenOrders'
													),
													(0, q.jsxs)(
														f.Z.Panel,
														{
															header: v().translate('exchange.market_name'),
															children: [
																(0, q.jsxs)(p.Z, {
																	defaultActiveKey: 'my-market',
																	activeKey: X,
																	onChange:
																		this._setTabVerticalPanel.bind(this),
																	children: [
																		(0, q.jsx)(
																			p.Z.TabPane,
																			{
																				tab: v().translate(
																					'exchange.market_name'
																				),
																			},
																			'my-market'
																		),
																		(0, q.jsx)(
																			p.Z.TabPane,
																			{tab: v().translate('exchange.more')},
																			'find-market'
																		),
																	],
																}),
																et,
															],
														},
														'myMarkets'
													),
												],
										  }))
										: (mt.push($e),
										  mt.push(Xe),
										  mt.push(dt),
										  mt.push(ht),
										  mt.push(
												(0, q.jsxs)(
													'div',
													{
														className: 'order-10 small-12',
														children: [
															(0, q.jsxs)(p.Z, {
																defaultActiveKey: 'my-market',
																activeKey: X,
																onChange: this._setTabVerticalPanel.bind(this),
																children: [
																	(0, q.jsx)(
																		p.Z.TabPane,
																		{
																			tab: v().translate(
																				'exchange.market_name'
																			),
																		},
																		'my-market'
																	),
																	(0, q.jsx)(
																		p.Z.TabPane,
																		{tab: v().translate('exchange.more')},
																		'find-market'
																	),
																],
															}),
															et,
														],
													},
													'actionCard_'.concat(Ye++)
												)
										  ))
									: (H || (mt.push($e), mt.push(Xe)),
									  (z || H) && mt.push(ft),
									  mt.push(dt),
									  mt.push(ht));
								var bt = null,
									yt = null,
									gt = null,
									vt = null,
									xt = !1,
									_t = !1;
								He ||
									(z &&
										(bt = (0, q.jsx)('div', {
											className: 'left-order-book no-padding no-overflow',
											style: {
												display: 'block',
												height: 'calc(100vh - 170px)',
												width: 350,
											},
											children: tt,
										})),
									H &&
										(bt = (0, q.jsx)('div', {
											className: 'left-order-book no-padding no-overflow',
											style: {
												display: 'block',
												height: 'calc(100vh - 170px)',
												width: 300,
											},
											children: ct,
										})),
									(yt = (0, q.jsxs)(
										'div',
										{
											className: 'left-order-book no-padding no-overflow',
											style: {display: 'block'},
											children: [
												(0, q.jsx)('div', {
													className:
														'v-align no-padding align-center grid-block footer shrink column',
													'data-intro': v().translate('walkthrough.my_markets'),
													children: (0, q.jsxs)(p.Z, {
														defaultActiveKey: 'my-market',
														activeKey: X,
														onChange: this._setTabVerticalPanel.bind(this),
														children: [
															(0, q.jsx)(
																p.Z.TabPane,
																{tab: v().translate('exchange.market_name')},
																'my-market'
															),
															(0, q.jsx)(
																p.Z.TabPane,
																{tab: v().translate('exchange.more')},
																'find-market'
															),
														],
													}),
												}),
												et,
											],
										},
										'actionCard_'.concat(Ye++)
									)),
									((!oe && bt) || (oe && yt)) && (xt = !0),
									((!oe && yt) || (oe && bt)) && (_t = !0),
									(gt = (0, q.jsxs)('div', {
										className: 'grid-block left-column shrink no-overflow',
										children: [
											ne.includes('left') ? (oe ? yt : bt) : null,
											xt
												? (0, q.jsx)('div', {
														style: {
															width: 'auto',
															paddingTop: 'calc(50vh - 80px)',
														},
														onClick: this._togglePanel.bind(this, 'left'),
												  })
												: null,
										],
									})),
									(vt = (0, q.jsxs)('div', {
										style: {
											position: 'absolute',
											right: '0',
											height: '100%',
											zIndex: '1',
										},
										className: 'grid-block left-column shrink no-overflow',
										children: [
											_t
												? (0, q.jsx)('div', {
														onClick: this._togglePanel.bind(this, 'right'),
												  })
												: null,
											ne.includes('right') ? (oe ? bt : yt) : null,
										],
									})));
								var jt = (0, q.jsxs)('div', {
									className: 'exchange--chart-control',
									style: {
										height: 0,
										position: 'absolute',
										top: '10px',
										right: '20px',
									},
									children: [
										!He &&
											(0, q.jsx)(m.Z, {
												title: v().translate(
													'exchange.settings.tooltip.show_markets'
												),
											}),
										'price_chart' == W &&
											(0, q.jsx)(m.Z, {
												title: v().translate(
													'exchange.settings.tooltip.chart_tools'
												),
											}),
										(0, q.jsx)(m.Z, {
											title:
												'market_depth' == W
													? v().translate(
															'exchange.settings.tooltip.show_price_chart'
													  )
													: v().translate(
															'exchange.settings.tooltip.show_market_depth'
													  ),
										}),
									],
								});
								return (0, q.jsxs)('div', {
									className: 'grid-block vertical',
									children: [
										this.props.marketReady ? null : (0, q.jsx)(Uo.Z, {}),
										(0, q.jsx)(Nt, {
											hasAnyPriceAlert: this.props.hasAnyPriceAlert,
											showPriceAlertModal: this.showPriceAlertModal,
											account: this.props.currentAccount,
											quoteAsset: c,
											baseAsset: u,
											hasPrediction: Ve,
											starredMarkets: l,
											lowestAsk: T,
											highestBid: N,
											lowestCallPrice: d,
											showCallLimit: Ce,
											feedPrice: j,
											marketReady: b,
											latestPrice: ve && ve.getPrice(),
											marketStats: h,
											selectedMarketPickerAsset: this.state.marketPickerAsset,
											onToggleMarketPicker: this._toggleMarketPicker.bind(this),
											onTogglePersonalize: this._togglePersonalize.bind(this),
											showVolumeChart: Oe,
										}),
										jt,
										(0, q.jsxs)('div', {
											className: 'grid-block page-layout market-layout',
											children: [
												this.state.isMarketPickerModalVisible ||
												this.state.isMarketPickerModalLoaded
													? (0, q.jsx)(
															$n,
															Bi(
																{
																	visible:
																		this.state.isMarketPickerModalVisible,
																	showModal: this.showMarketPickerModal,
																	hideModal: this.hideMarketPickerModal,
																	marketPickerAsset:
																		this.state.marketPickerAsset,
																	onToggleMarketPicker:
																		this._toggleMarketPicker.bind(this),
																},
																this.props
															)
													  )
													: null,
												this.state.isPersonalizeModalVisible ||
												this.state.isPersonalizeModalLoaded
													? (0, q.jsx)(Tn, {
															visible: this.state.isPersonalizeModalVisible,
															showModal: this.showPersonalizeModal,
															hideModal: this.hidePersonalizeModal,
															viewSettings: this.props.viewSettings,
															chartType: W,
															chartHeight: U,
															onTogglePersonalize:
																this._togglePersonalize.bind(this),
															onChangeChartHeight:
																this.onChangeChartHeight.bind(this),
															handleGroupOrderLimitChange:
																this._onGroupOrderLimitChange.bind(this),
															trackedGroupsConfig: w,
															currentGroupOrderLimit: A,
															verticalOrderBook: z,
															hideScrollbars: te,
															mirrorPanels: oe,
															panelTabs: se,
															singleColumnOrderForm: ae,
															buySellTop: J,
															flipBuySell: G,
															flipOrderBook: le,
															tinyScreen: Ue,
															smallScreen: He,
															orderBookReversed: ue,
															chartZoom: de,
															chartTools: pe,
															hideFunctionButtons: he,
															onMoveOrderBook: this._moveOrderBook.bind(this),
															onMirrorPanels: this._mirrorPanels.bind(this),
															onToggleScrollbars:
																this._toggleScrollbars.bind(this),
															onSetAutoscroll: this._setAutoscroll.bind(this),
															onToggleChart: this._toggleChart.bind(this),
															onSetPanelTabs: this._setPanelTabs.bind(this),
															onToggleSingleColumnOrderForm:
																this._toggleSingleColumnOrderForm.bind(this),
															onToggleBuySellPosition:
																this._toggleBuySellPosition.bind(this),
															onFlipBuySell: this._flipBuySell.bind(this),
															onFlipOrderBook: this._flipOrderBook.bind(this),
															onOrderBookReversed:
																this._orderBookReversed.bind(this),
															onChartZoom: this._chartZoom.bind(this),
															onChartTools: this._chartTools.bind(this),
															onHideFunctionButtons:
																this._hideFunctionButtons.bind(this),
													  })
													: null,
												(0, q.jsx)(fi, {}),
												gt,
												(0, q.jsx)('div', {
													style: {paddingTop: 0},
													className: y()(
														'grid-block main-content vertical no-overflow'
													),
													children: (0, q.jsxs)('div', {
														className:
															'grid-block vertical no-padding ps-container',
														id: 'CenterContent',
														ref: 'center',
														'data-intro': Ue
															? v().translate('walkthrough.collapsed_items')
															: null,
														children: [
															Ue
																? null
																: (0, q.jsxs)('div', {
																		className: 'tiny-screen-flex',
																		children: [
																			W && 'price_chart' == W
																				? (0, q.jsx)('div', {
																						className:
																							'grid-block shrink no-overflow',
																						id: 'market-charts',
																						style: {
																							flexGrow: '2',
																							display: 'inline-block',
																							borderBottom: '2px solid black',
																						},
																						children: at,
																				  })
																				: null,
																			W && 'market_depth' == W
																				? (0, q.jsx)('div', {
																						className:
																							'grid-block vertical no-padding shrink',
																						id: 'market-charts',
																						style: {
																							flexGrow: '2',
																							width: '280px',
																							minHeight: '280px',
																							display: 'inline-block',
																							borderBottom: '2px solid black',
																						},
																						children: lt,
																				  })
																				: null,
																			(0, q.jsx)('div', {
																				className:
																					'orders-trade-form grid-block shrink no-overflow small-2',
																				style: {
																					flexGrow: '1',
																					minWidth: '280px',
																					display: 'inline-block',
																					borderBottom: '2px solid black',
																					borderRight: '2px solid black',
																				},
																				children: tt,
																			}),
																			(0, q.jsx)('div', {
																				className: 'small-2 orders-trade-form',
																				style: {
																					flexGrow: '1',
																					minWidth: '280px',
																					display: 'inline-block',
																					position: 'relative',
																					borderBottom: '2px solid black',
																					borderLeft: '2px solid black',
																				},
																				children: ut[1],
																			}),
																		],
																  }),
															(0, q.jsx)('div', {
																className: 'grid-block no-overflow wrap shrink',
																children: mt,
															}),
														],
													}),
												}),
												vt,
											],
										}),
										Te &&
										(this.state.isBorrowQuoteModalVisible ||
											this.state.isBorrowQuoteModalLoaded)
											? (0, q.jsx)(Wo.Z, {
													visible: this.state.isBorrowQuoteModalVisible,
													hideModal: this.hideBorrowQuoteModal,
													quoteAssetObj: c.get('id'),
													backingAssetObj: c.getIn([
														'bitasset',
														'options',
														'short_backing_asset',
													]),
													accountObj: r,
											  })
											: null,
										Ne &&
										(this.state.isBorrowBaseModalVisible ||
											this.state.isBorrowBaseModalLoaded)
											? (0, q.jsx)(Wo.Z, {
													visible: this.state.isBorrowBaseModalVisible,
													hideModal: this.hideBorrowBaseModal,
													quoteAssetObj: u.get('id'),
													backingAssetObj: u.getIn([
														'bitasset',
														'options',
														'short_backing_asset',
													]),
													accountObj: r,
											  })
											: null,
										this.state.isConfirmBuyOrderModalVisible ||
										this.state.isConfirmBuyOrderModalLoaded
											? (0, q.jsx)(io, {
													visible: this.state.isConfirmBuyOrderModalVisible,
													hideModal: this.hideConfirmBuyOrderModal,
													type: 'buy',
													onForce: this._forceBuy.bind(this, 'buy', qe, we, Ae),
													diff: Q,
													hasOrders: O.length > 0,
											  })
											: null,
										this.state.isConfirmSellOrderModalVisible ||
										this.state.isConfirmSellOrderModalLoaded
											? (0, q.jsx)(io, {
													visible: this.state.isConfirmSellOrderModalVisible,
													hideModal: this.hideConfirmSellOrderModal,
													type: 'sell',
													onForce: this._forceSell.bind(
														this,
														'sell',
														Me,
														Se,
														Ae
													),
													diff: K,
													hasOrders: C.length > 0,
											  })
											: null,
										(0, q.jsx)(Ci, {
											onSave: this.handlePriceAlertSave,
											rules: this.getPriceAlertRules(),
											latestPrice: ve && ve.getPrice(),
											quoteAsset: this.props.quoteAsset.get('id'),
											baseAsset: this.props.baseAsset.get('id'),
											visible: this.state.isPriceAlertModalVisible,
											showModal: this.showPriceAlertModal,
											hideModal: this.hidePriceAlertModal,
										}),
									],
								});
							},
						},
					]),
					r && Fi(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(n.Component);
			Li(Di, 'propTypes', {
				marketCallOrders: A().object.isRequired,
				activeMarketHistory: A().object.isRequired,
				viewSettings: A().object.isRequired,
			}),
				Li(Di, 'defaultProps', {
					marketCallOrders: [],
					activeMarketHistory: {},
					viewSettings: {},
				});
			const Vi = Di;
			var zi = r(13630);
			function Hi(e) {
				return (
					(Hi =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					Hi(e)
				);
			}
			function Ui(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function Wi(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Ui(Object(r), !0).forEach(function (t) {
								Gi(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: Ui(Object(r)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(r, t)
								);
						  });
				}
				return e;
			}
			function Gi(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			function Qi(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Ki(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function Yi(e, t, r) {
				return (
					t && Ki(e.prototype, t),
					r && Ki(e, r),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Ji(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && $i(e, t);
			}
			function $i(e, t) {
				return (
					($i =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					$i(e, t)
				);
			}
			function Xi(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var r,
						n = rs(e);
					if (t) {
						var o = rs(this).constructor;
						r = Reflect.construct(n, arguments, o);
					} else r = n.apply(this, arguments);
					return es(this, r);
				};
			}
			function es(e, t) {
				if (t && ('object' === Hi(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return ts(e);
			}
			function ts(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function rs(e) {
				return (
					(rs = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					rs(e)
				);
			}
			var ns,
				os,
				is,
				ss,
				as,
				ls = (function (e) {
					Ji(r, e);
					var t = Xi(r);
					function r() {
						return Qi(this, r), t.apply(this, arguments);
					}
					return (
						Yi(r, [
							{
								key: 'render',
								value: function () {
									var e = this.props.match.params.marketID
										.toUpperCase()
										.split('_');
									return e[0] === e[1]
										? (0, q.jsx)(zi.Z, {subtitle: 'market_not_found_subtitle'})
										: (0, q.jsx)(c.Z, {
												stores: [o.Z, i.Z, s.Z, l.Z, a.Z],
												inject: {
													hasAnyPriceAlert: function () {
														return s.Z.hasAnyPriceAlert(e[0], e[1]);
													},
													priceAlert: function () {
														return s.Z.getState().priceAlert;
													},
													locale: function () {
														return a.Z.getState().currentLocale;
													},
													lockedWalletState: function () {
														return l.Z.getState().locked;
													},
													marketLimitOrders: function () {
														return o.Z.getState().marketLimitOrders;
													},
													marketCallOrders: function () {
														return o.Z.getState().marketCallOrders;
													},
													invertedCalls: function () {
														return o.Z.getState().invertedCalls;
													},
													marketSettleOrders: function () {
														return o.Z.getState().marketSettleOrders;
													},
													marketData: function () {
														return o.Z.getState().marketData;
													},
													totals: function () {
														return o.Z.getState().totals;
													},
													activeMarketHistory: function () {
														return o.Z.getState().activeMarketHistory;
													},
													bucketSize: function () {
														return o.Z.getState().bucketSize;
													},
													buckets: function () {
														return o.Z.getState().buckets;
													},
													lowestCallPrice: function () {
														return o.Z.getState().lowestCallPrice;
													},
													feedPrice: function () {
														return o.Z.getState().feedPrice;
													},
													currentAccount: function () {
														return i.Z.getState().currentAccount;
													},
													myActiveAccounts: function () {
														return i.Z.getState().myActiveAccounts;
													},
													viewSettings: function () {
														return s.Z.getState().viewSettings;
													},
													settings: function () {
														return s.Z.getState().settings;
													},
													exchange: function () {
														return s.Z.getState().exchange;
													},
													starredMarkets: function () {
														return s.Z.getState().starredMarkets;
													},
													marketDirections: function () {
														return s.Z.getState().marketDirections;
													},
													marketStats: function () {
														return o.Z.getState().marketStats;
													},
													marketReady: function () {
														return o.Z.getState().marketReady;
													},
													miniDepthChart: function () {
														return s.Z.getState().viewSettings.get(
															'miniDepthChart',
															!0
														);
													},
													dataFeed: function () {
														return new vo();
													},
													trackedGroupsConfig: function () {
														return o.Z.getState().trackedGroupsConfig;
													},
													currentGroupOrderLimit: function () {
														return o.Z.getState().currentGroupLimit;
													},
												},
												children: (0, q.jsx)(ds, {
													history: this.props.history,
													location: this.props.location,
													quoteAsset: e[0],
													baseAsset: e[1],
												}),
										  });
								},
							},
						]),
						r
					);
				})(n.Component),
				cs = (0, d.o9)(),
				us = {name: 'o0x664', styles: 'padding-bottom:2rem'},
				ds = (function (e) {
					Ji(r, e);
					var t = Xi(r);
					function r(e) {
						var n;
						return (
							Qi(this, r),
							((n = t.call(this)).state = {sub: null}),
							(n._subToMarket = n._subToMarket.bind(ts(n))),
							n
						);
					}
					return (
						Yi(r, [
							{
								key: 'componentWillMount',
								value: function () {
									var e = this;
									null !== this.props.quoteAsset &&
										null !== this.props.baseAsset &&
										(this.props.quoteAsset.toJS &&
											this.props.baseAsset.toJS &&
											this._subToMarket(this.props),
										cs.on('cancel-order', (os = O.Z.cancelLimitOrderSuccess)),
										cs.on('close-call', (ns = O.Z.closeCallOrderSuccess)),
										cs.on(
											'call-order-update',
											(is = function (t) {
												var r = t.call_price.base.asset_id,
													n = t.call_price.quote.asset_id,
													o = e.props.baseAsset.get('id'),
													i = e.props.quoteAsset.get('id');
												(r !== o && r !== i) ||
													(n !== o && n !== i) ||
													O.Z.callOrderUpdate(t);
											})
										),
										cs.on('bitasset-update', (ss = O.Z.feedUpdate)),
										cs.on(
											'settle-order-update',
											(as = function (t) {
												var r = market_utils.isMarketAsset(
														e.props.quoteAsset,
														e.props.baseAsset
													),
													n = r.isMarketAsset,
													o = r.marketAsset;
												n &&
													o.id === t.balance.asset_id &&
													O.Z.settleOrderUpdate(o.id);
											})
										));
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									var t = this;
									if (null !== e.quoteAsset && null !== e.baseAsset) {
										if (
											(e.baseAsset &&
												e.baseAsset.getIn([
													'bitasset',
													'is_prediction_market',
												]) &&
												this.props.history.push(
													'/market/'
														.concat(e.baseAsset.get('symbol'), '_')
														.concat(e.quoteAsset.get('symbol'))
												),
											e.quoteAsset && e.baseAsset && !this.state.sub)
										)
											return this._subToMarket(e);
										if (
											e.quoteAsset.get('symbol') !==
												this.props.quoteAsset.get('symbol') ||
											e.baseAsset.get('symbol') !==
												this.props.baseAsset.get('symbol')
										) {
											var r = this.state.sub.split('_');
											O.Z.unSubscribeMarket(r[0], r[1]).then(function () {
												t._subToMarket(e);
											});
										}
									}
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									var e = this.props,
										t = e.quoteAsset,
										r = e.baseAsset;
									null !== t &&
										null !== r &&
										(O.Z.unSubscribeMarket(t.get('id'), r.get('id')),
										cs &&
											(cs.off('cancel-order', os),
											cs.off('close-call', ns),
											cs.off('call-order-update', is),
											cs.off('bitasset-update', ss),
											cs.off('settle-order-update', as)));
								},
							},
							{
								key: '_subToMarket',
								value: function (e, t, r) {
									var n = e.quoteAsset,
										o = e.baseAsset,
										i = e.bucketSize,
										s = e.currentGroupOrderLimit;
									t && (i = t),
										r && (s = r),
										n.get('id') &&
											o.get('id') &&
											(O.Z.subscribeMarket.defer(o, n, i, s),
											this.setState({
												sub: ''.concat(n.get('id'), '_').concat(o.get('id')),
											}));
								},
							},
							{
								key: 'render',
								value: function () {
									return null === this.props.quoteAsset ||
										null === this.props.baseAsset
										? (0, q.jsx)(zi.Z, {subtitle: 'market_not_found_subtitle'})
										: (0, q.jsx)('div', {
												css: us,
												children: (0, q.jsx)(
													Vi,
													Wi(
														Wi({}, this.props),
														{},
														{
															sub: this.state.sub,
															subToMarket: this._subToMarket,
														}
													)
												),
										  });
								},
							},
						]),
						r
					);
				})(n.Component);
			Gi(ds, 'propTypes', {
				currentAccount: E.Z.ChainAccount.isRequired,
				quoteAsset: E.Z.ChainAsset.isRequired,
				baseAsset: E.Z.ChainAsset.isRequired,
				coreAsset: E.Z.ChainAsset.isRequired,
			}),
				Gi(ds, 'defaultProps', {currentAccount: '1.2.3', coreAsset: '1.3.0'}),
				(ds = (0, I.Z)(ds, {show_loader: !0}));
			const ps = ls;
		},
		56004: (e, t, r) => {
			'use strict';
			r.d(t, {Z: () => m}), r(67294);
			var n = r(55019),
				o = r(31143),
				i = r(35944);
			function s(e) {
				return (
					(s =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					s(e)
				);
			}
			var a = ['allowNaN'];
			function l(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function c(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? l(Object(r), !0).forEach(function (t) {
								u(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: l(Object(r)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(r, t)
								);
						  });
				}
				return e;
			}
			function u(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			function d(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function p(e, t) {
				return (
					(p =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					p(e, t)
				);
			}
			function h(e, t) {
				if (t && ('object' === s(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function f(e) {
				return (
					(f = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					f(e)
				);
			}
			const m = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && p(e, t);
				})(u, e);
				var t,
					r,
					o,
					s,
					l =
						((o = u),
						(s = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = f(o);
							if (s) {
								var r = f(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return h(this, e);
						});
				function u() {
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, u),
						l.call(this)
					);
				}
				return (
					(t = u),
					(r = [
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								this.props.value && !e.value && (this.refs.input.value = '');
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t =
										(e.allowNaN,
										(function (e, t) {
											if (null == e) return {};
											var r,
												n,
												o = (function (e, t) {
													if (null == e) return {};
													var r,
														n,
														o = {},
														i = Object.keys(e);
													for (n = 0; n < i.length; n++)
														(r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
													return o;
												})(e, t);
											if (Object.getOwnPropertySymbols) {
												var i = Object.getOwnPropertySymbols(e);
												for (n = 0; n < i.length; n++)
													(r = i[n]),
														t.indexOf(r) >= 0 ||
															(Object.prototype.propertyIsEnumerable.call(
																e,
																r
															) &&
																(o[r] = e[r]));
											}
											return o;
										})(e, a));
								return (0, i.jsx)(
									n.Z,
									c(
										c({ref: 'input', type: 'text'}, t),
										{},
										{
											onPaste: this.props.onPaste || this.onPaste.bind(this),
											onKeyPress: this.onKeyPress.bind(this),
										}
									)
								);
							},
						},
					]) && d(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					u
				);
			})(o.C);
		},
		47080: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, {default: () => K});
			var n = r(67294),
				o = r(17076),
				i = r(40226),
				s = r(10033),
				a = r(83370),
				l = r(52233),
				c = r(12705),
				u = r(72777),
				d = r(19303),
				p = r(14013),
				h = r.n(p),
				f = r(40840),
				m = r(61580),
				b = r(71577),
				y = r(112),
				g = r.n(y),
				v = r(27326),
				x = r.n(v),
				_ = (r(18159), r(11211)),
				j = r(19676),
				k = r(35944);
			function S(e, t) {
				if (e) {
					if ('string' == typeof e) return w(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					return (
						'Object' === r && e.constructor && (r = e.constructor.name),
						'Map' === r || 'Set' === r
							? Array.from(e)
							: 'Arguments' === r ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
							? w(e, t)
							: void 0
					);
				}
			}
			function w(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			const A = function (e) {
				var t = e.data,
					r = e.parsePrice,
					n = g().translate('invoice.print_receipt');
				return (
					t.blockNum && j.Z.getHeader.defer(t.blockNum),
					(0, k.jsx)(m.Z, {
						placement: 'left',
						title: g().translate('tooltip.print_receipt'),
						children: (0, k.jsx)(b.Z, {
							type: 'primary',
							icon: 'download',
							onClick: function () {
								return (function (e) {
									var t = e.data,
										r = e.parsePrice,
										n = t.line_items,
										o = t.to,
										i = t.asset,
										s = t.from,
										a = t.total_amount,
										l = t.memo,
										c = t.currency,
										u = t.blockNum,
										d = t.to_name,
										p = t.note,
										h = 10,
										f = 0,
										m = [],
										b = '',
										y = '';
									s &&
										(s.get('history').forEach(function (e) {
											e.get('block_num') !== u || (b = e.get('id'));
										}),
										(y = s.get('name')));
									var v = _.Z.getState().blockHeaders.get(u),
										j = v
											? v.timestamp
													.toLocaleDateString('en-US')
													.replace(/\//g, '.')
											: new Date()
													.toLocaleDateString('en-US')
													.replace(/\//g, '.'),
										k = new (x())({orientation: 'portrait', compressPdf: !0});
									k.setFontStyle('bold'),
										k.setFontSize(16),
										k.text(
											g().translate('invoice.pay_to').toUpperCase(),
											15,
											(f += 25)
										),
										k.setFontStyle('normal'),
										k.text(d, 15, (f += h)),
										k.text(o, 15, (f += h)),
										k.autoTable({
											body: [
												['', g().translate('invoice.memo'), l],
												[
													{
														content: g()
															.translate('invoice.paid_by')
															.toUpperCase(),
														styles: {fontStyle: 'bold'},
													},
													g().translate('invoice.date'),
													j,
												],
												[y, g().translate('invoice.transaction'), b],
												[
													{
														content: g()
															.translate('invoice.note')
															.toUpperCase(),
														styles: {fontStyle: 'bold'},
													},
													'',
													'',
												],
												[p, '', ''],
											],
											bodyStyles: {valign: 'top'},
											styles: {
												cellWidth: 'wrap',
												rowPageBreak: 'auto',
												halign: 'justify',
											},
											columnStyles: {
												0: {halign: 'left', cellWidth: 90},
												1: {fontStyle: 'bold'},
												2: {cellWidth: 40},
											},
											startY: (f += h),
											theme: 'plain',
										}),
										k.line(5, (f = k.autoTable.previous.finalY + h), 205, f),
										k.setFontSize(20),
										k.text(
											g().translate('invoice.receipt_total').toUpperCase(),
											15,
											(f += h)
										),
										k.text(''.concat(a, ' ').concat(c), 150, f),
										k.line(5, (f += 5), 205, f),
										k.setFontStyle('normal'),
										k.setFontSize(16);
									var A,
										C,
										O = (function (e, t) {
											var r =
												('undefined' != typeof Symbol && e[Symbol.iterator]) ||
												e['@@iterator'];
											if (!r) {
												if (Array.isArray(e) || (r = S(e))) {
													r && (e = r);
													var n = 0,
														o = function () {};
													return {
														s: o,
														n: function () {
															return n >= e.length
																? {done: !0}
																: {done: !1, value: e[n++]};
														},
														e: function (e) {
															throw e;
														},
														f: o,
													};
												}
												throw new TypeError(
													'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
												);
											}
											var i,
												s = !0,
												a = !1;
											return {
												s: function () {
													r = r.call(e);
												},
												n: function () {
													var e = r.next();
													return (s = e.done), e;
												},
												e: function (e) {
													(a = !0), (i = e);
												},
												f: function () {
													try {
														s || null == r.return || r.return();
													} finally {
														if (a) throw i;
													}
												},
											};
										})(n);
									try {
										for (O.s(); !(A = O.n()).done; ) {
											var P = A.value,
												T = r(P.price),
												N = ''.concat(T, ' ').concat(i),
												Z = ''.concat(P.quantity * T, ' ').concat(i);
											m = [].concat(
												(function (e) {
													if (Array.isArray(e)) return w(e);
												})((C = m)) ||
													(function (e) {
														if (
															('undefined' != typeof Symbol &&
																null != e[Symbol.iterator]) ||
															null != e['@@iterator']
														)
															return Array.from(e);
													})(C) ||
													S(C) ||
													(function () {
														throw new TypeError(
															'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
														);
													})(),
												[
													{
														descrption: P.label,
														unit: N,
														amount: P.quantity,
														total: Z,
													},
												]
											);
										}
									} catch (e) {
										O.e(e);
									} finally {
										O.f();
									}
									k.autoTable({
										columns: [
											{
												header: {
													content: 'DESCRIPTION',
													styles: {halign: 'left'},
												},
												dataKey: 'descrption',
											},
											{header: 'AMOUNT', dataKey: 'amount'},
											{header: 'UNIT', dataKey: 'unit'},
											{header: 'TOTAL', dataKey: 'total'},
										],
										body: m,
										startY: f + h,
										bodyStyles: {valign: 'top'},
										styles: {
											cellWidth: 'auto',
											rowPageBreak: 'auto',
											halign: 'right',
										},
										columnStyles: {descrption: {halign: 'left'}},
										theme: 'plain',
									}),
										k.save('bitshares-receipt-' + o + '.pdf');
								})({data: t, parsePrice: r});
							},
							children: n,
						}),
					})
				);
			};
			var C = r(58074),
				O = r.n(C),
				P = r(71230),
				T = r(15746),
				N = r(39144),
				Z = r(68924),
				R = r.n(Z),
				B = r(85017),
				F = r(57891),
				M = r(8193),
				E = r(25108),
				I = r(23085).Buffer;
			function q(e) {
				return (
					(q =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					q(e)
				);
			}
			function L(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function D(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? L(Object(r), !0).forEach(function (t) {
								V(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: L(Object(r)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(r, t)
								);
						  });
				}
				return e;
			}
			function V(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			function z(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function H(e, t) {
				return (
					(H =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					H(e, t)
				);
			}
			function U(e, t) {
				if (t && ('object' === q(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return W(e);
			}
			function W(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function G(e) {
				return (
					(G = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					G(e)
				);
			}
			var Q = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && H(e, t);
				})(v, e);
				var t,
					r,
					n,
					p,
					y =
						((n = v),
						(p = (function () {
							if ('undefined' == typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' == typeof Proxy) return !0;
							try {
								return (
									Boolean.prototype.valueOf.call(
										Reflect.construct(Boolean, [], function () {})
									),
									!0
								);
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = G(n);
							if (p) {
								var r = G(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return U(this, e);
						});
				function v(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, v),
						((t = y.call(this, e)).state = {
							invoice: null,
							pay_from_name: null,
							pay_from_account: null,
							pay_to_account: null,
							error: null,
							blockNum: null,
						}),
						(t.onBroadcastAndConfirm = t.onBroadcastAndConfirm.bind(W(t))),
						(t.getTotal = t.getTotal.bind(W(t))),
						t
					);
				}
				return (
					(t = v),
					(r = [
						{
							key: '_validateFormat',
							value: function (e) {
								return !0;
							},
						},
						{
							key: '_printExampleInvoice',
							value: function () {
								(0, d.nN)(
									JSON.stringify({
										to: 'sschiessl',
										to_label: 'Stefan S.',
										currency: 'META1',
										memo: 'Invoice #1234',
										line_items: [
											{label: 'Something to Buy', quantity: 1, price: '0.1'},
											{label: '10 things to Buy', quantity: 10, price: '0.02'},
										],
										note: 'Something the merchant wants to say to the user',
									}),
									9,
									function (e, t) {
										h(), E.log(h().encode(I.from(e)));
									}
								);
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								var e = this,
									t = h().decode(this.props.match.params.data);
								u.Z.unlisten(this.onBroadcastAndConfirm),
									u.Z.listen(this.onBroadcastAndConfirm);
								try {
									(0, d.Lj)(t, function (t) {
										t = R()(t, {whiteList: [], stripIgnoreTag: !0});
										var r = JSON.parse(t);
										e._validateFormat(r)
											? (0, l.jB)(l.BQ.getAsset, [r.currency]).then(function (
													t
											  ) {
													e.setState({invoice: r, asset: t[0]}, e.getTotal);
											  })
											: e.setState({
													error: g().translate('invoice.invalid_format'),
											  });
									});
								} catch (e) {
									E.error(e), this.setState({error: e.message});
								}
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e, t) {
								if (
									null == this.state.pay_from_name &&
									this.props.currentAccount
								) {
									var r = this._findPayment();
									this.setState({
										pay_from_name: this.props.currentAccount.get('name'),
										paymentOperation: r,
									});
								}
							},
						},
						{
							key: 'parsePrice',
							value: function (e) {
								var t = e.match(/([\d\,\.\s]+)/);
								return !t || t.length, parseFloat(t[1].replace(/[\,\s]/g, ''));
							},
						},
						{
							key: '_findPayment',
							value: function () {
								var e = this;
								if (
									(0, B.u)(this.props.currentAccount) &&
									this.state.total_amount
								) {
									var t = this.state.pay_to_account.get('id'),
										r = this.state.asset.get('id'),
										n =
											this.state.total_amount *
											Math.pow(10, this.state.asset.get('precision')),
										o = null;
									return (
										this.props.currentAccount
											.get('history')
											.toJS()
											.forEach(function (i) {
												var s = i.op;
												if (0 == s[0]) {
													s[1].from;
													var a = s[1].to,
														l = s[1].amount.amount,
														c = s[1].amount.asset_id;
													e.state.invoice,
														E.log(t, a, r, c, n, l),
														t == a && r == c && n == l && (o = i);
												}
											}),
										o
									);
								}
							},
						},
						{
							key: 'getTotal',
							value: function () {
								var e = this,
									t = this.state.invoice.line_items;
								if (!t || 0 === t.length) return 0;
								var r = t.reduce(function (t, r) {
										var n = e.parsePrice(r.price);
										return n ? t + r.quantity * n : t;
									}, 0),
									n = this._findPayment();
								this.setState({
									total_amount: parseFloat(
										r.toFixed(this.state.asset.get('precision'))
									),
									paymentOperation: n,
								});
							},
						},
						{
							key: 'onBroadcastAndConfirm',
							value: function (e) {
								e.included &&
									e.broadcasted_transaction &&
									(u.Z.unlisten(this.onBroadcastAndConfirm),
									u.Z.reset(),
									this.setState({blockNum: e.trx_block_num}));
							},
						},
						{
							key: 'onPayClick',
							value: function (e) {
								var t = this;
								e.preventDefault();
								var r = this.state,
									n = r.asset,
									o = r.total_amount,
									s = f.Z.get_asset_precision(n.get('precision')),
									a = l.BQ.getAccount(this.state.invoice.to);
								a
									? i.Z.transfer(
											this.state.pay_from_account.get('id'),
											a.get('id'),
											parseInt(o * s, 10),
											n.get('id'),
											this.state.invoice.memo
									  )
											.then(function () {
												u.Z.unlisten(t.onBroadcastAndConfirm),
													u.Z.listen(t.onBroadcastAndConfirm);
											})
											.catch(function (e) {
												E.log('error: ', e);
											})
									: c.Z.error(
											'Account '.concat(this.state.invoice.to, ' not found')
									  );
							},
						},
						{
							key: 'fromChanged',
							value: function (e) {
								this.setState({pay_from_name: e, pay_from_account: null});
							},
						},
						{
							key: 'onFromAccountChanged',
							value: function (e) {
								this.setState({pay_from_account: e});
							},
						},
						{
							key: 'onToAccountChanged',
							value: function (e) {
								this.setState({pay_to_account: e});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this;
								if (this.state.error)
									return (0, k.jsxs)('div', {
										children: [
											(0, k.jsx)('br', {}),
											(0, k.jsx)('h4', {
												className: 'has-error text-center',
												children: this.state.error,
											}),
										],
									});
								if (!this.state.invoice) return null;
								if (!this.state.asset)
									return (0, k.jsx)('div', {
										children: (0, k.jsx)(O(), {
											className: 'has-error text-center',
											component: 'h4',
											content: 'transfer.errors.asset_unsupported',
											currency: this.state.invoice.currency,
										}),
									});
								var t = this.state,
									r = t.invoice,
									n = t.total_amount,
									i = r.currency;
								r.to_label && (r.to_name = r.to_label);
								var l = D(
									D({}, r),
									{},
									{
										total_amount: n ? n.toString() : 0,
										asset: i,
										from: this.state.pay_from_account,
										blockNum: this.state.blockNum,
									}
								);
								if (this.state.pay_from_account) {
									var c = this.state.pay_from_account
										.get('balances')
										.get(this.state.asset.get('id'));
									(0, k.jsxs)('span', {
										children: [
											(0, k.jsx)(O(), {
												component: 'span',
												content: 'transfer.available',
											}),
											(0, k.jsx)('span', {
												style: {
													borderBottom: '#A09F9F 1px dotted',
													cursor: 'pointer',
												},
												children: (0, k.jsx)(a.Z, {balance: c}),
											}),
										],
									});
								}
								var u = r.line_items.map(function (t, r) {
									var n = e.parsePrice(t.price),
										s = t.quantity * n;
									return (0,
									k.jsxs)(P.Z, {children: [(0, k.jsxs)(T.Z, {span: 10, children: [(0, k.jsx)('div', {className: 'item-name', children: t.label}), (0, k.jsx)('div', {className: 'item-description'})]}), (0, k.jsxs)(T.Z, {span: 3, children: [t.quantity, ' x']}), (0, k.jsx)(T.Z, {span: 5, children: (0, k.jsx)(o.Z, {amount: t.price, asset: i, exact_amount: !0})}), (0, k.jsx)(T.Z, {span: 5, children: (0, k.jsx)(o.Z, {amount: s, asset: i, exact_amount: !0})})]}, 'invoice_item_' + r);
								});
								return (
									E.log(this.state.paymentOperation),
									(0, k.jsx)('div', {
										className: 'center',
										style: {
											padding: '10px',
											maxWidth: '60rem',
											minWidth: '40rem',
											width: '100%',
											margin: '0 auto',
										},
										children: (0, k.jsxs)(N.Z, {
											children: [
												(0, k.jsx)('div', {
													style: {float: 'right'},
													children: (0, k.jsx)(A, {
														data: l,
														parsePrice: this.parsePrice,
													}),
												}),
												(0, k.jsx)(O(), {
													component: 'h3',
													content: 'invoice.payment_request',
												}),
												(0, k.jsx)('br', {}),
												(0, k.jsx)('h4', {children: r.memo}),
												(0, k.jsxs)('div', {
													style: {width: '30rem'},
													children: [
														(0, k.jsx)(s.Z, {
															label: 'invoice.paid_by',
															accountName: this.state.pay_from_name,
															onChange: this.fromChanged.bind(this),
															onAccountChanged:
																this.onFromAccountChanged.bind(this),
															account: this.state.pay_from_name,
															typeahead: !0,
															size: 32,
														}),
														(0, k.jsx)(s.Z, {
															label: 'invoice.pay_to',
															accountName: r.to,
															disabled: !0,
															onAccountChanged:
																this.onToAccountChanged.bind(this),
															account: this.state.pay_to_account,
															size: 32,
														}),
													],
												}),
												r.to_name &&
													(0, k.jsxs)('div', {
														children: [
															(0, k.jsx)(O(), {
																content: 'invoice.recipient_name',
															}),
															(0, k.jsx)('p', {children: r.to_name}),
														],
													}),
												r.note &&
													(0, k.jsxs)('div', {
														children: [
															(0, k.jsx)(O(), {content: 'invoice.note'}),
															(0, k.jsx)('p', {children: r.note}),
														],
													}),
												(0, k.jsxs)(P.Z, {
													children: [
														(0, k.jsx)(T.Z, {
															span: 10,
															children: (0, k.jsx)(O(), {
																component: 'span',
																content: 'invoice.items',
															}),
														}),
														(0, k.jsx)(T.Z, {
															span: 3,
															children: (0, k.jsx)(O(), {
																component: 'span',
																content: 'invoice.amount',
															}),
														}),
														(0, k.jsx)(T.Z, {
															span: 5,
															children: (0, k.jsx)(O(), {
																component: 'span',
																content: 'invoice.unit',
															}),
														}),
														(0, k.jsx)(T.Z, {
															span: 5,
															children: (0, k.jsx)(O(), {
																component: 'span',
																content: 'invoice.total',
															}),
														}),
													],
												}),
												(0, k.jsx)('div', {className: 'divider'}),
												u,
												(0, k.jsx)('div', {className: 'divider'}),
												(0, k.jsxs)(P.Z, {
													children: [
														(0, k.jsx)(T.Z, {
															span: 18,
															children: (0, k.jsx)(O(), {
																component: 'span',
																content: 'invoice.total',
															}),
														}),
														(0, k.jsx)(T.Z, {
															span: 5,
															children: (0, k.jsx)(o.Z, {
																amount: n,
																asset: i,
																exact_amount: !0,
															}),
														}),
													],
												}),
												this.state.paymentOperation
													? (0, k.jsxs)('div', {
															children: [
																(0, k.jsxs)('h3', {
																	children: [
																		g().translate('invoice.payment_proof'),
																		' ',
																		(0, k.jsx)(m.Z, {
																			title: g().translate(
																				'invoice.tooltip_payment_proof'
																			),
																			mouseEnterDelay: 0.5,
																			children: (0, k.jsx)(M.KpA, {}),
																		}),
																	],
																}),
																(0, k.jsx)('table', {
																	className: 'table',
																	children: (0, k.jsx)('tbody', {
																		children: (0, k.jsx)(
																			F.Z,
																			{
																				includeOperationId: !0,
																				operationId:
																					this.state.paymentOperation.id,
																				op: this.state.paymentOperation.op,
																				result:
																					this.state.paymentOperation.result,
																				block:
																					this.state.paymentOperation.block_num,
																				current:
																					this.props.currentAccount.get('id'),
																			},
																			this.state.paymentOperation.id
																		),
																	}),
																}),
															],
													  })
													: (0, k.jsx)(b.Z, {
															type: 'primary',
															style: {marginTop: '30px'},
															disabled: !this.state.pay_from_account,
															onClick: this.onPayClick.bind(this),
															children: (0, k.jsx)(O(), {
																content: 'invoice.pay_button',
																asset: (0, k.jsx)(o.Z, {
																	amount: n,
																	asset: i,
																	exact_amount: !0,
																}),
																name: r.to,
															}),
													  }),
											],
										}),
									})
								);
							},
						},
					]) && z(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					v
				);
			})(n.Component);
			const K = (Q = (0, B.h)(Q));
		},
		85017: (e, t, r) => {
			'use strict';
			r.d(t, {h: () => v, u: () => g});
			var n = r(67294),
				o = r(8564),
				i = r(80563),
				s = r(79876),
				a = r(11230),
				l = r(37983),
				c = r(674),
				u = r(35944);
			function d(e) {
				return (
					(d =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  }),
					d(e)
				);
			}
			function p(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function h(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function f(e, t) {
				return (
					(f =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					f(e, t)
				);
			}
			function m(e, t) {
				if (t && ('object' === d(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function b(e) {
				return (
					(b = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					b(e)
				);
			}
			function y(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			var g = function (e) {
					return !!e && !!e.get('id');
				},
				v = function (e) {
					var t,
						r =
							((t = (function (t) {
								!(function (e, t) {
									if ('function' != typeof t && null !== t)
										throw new TypeError(
											'Super expression must either be null or a function'
										);
									(e.prototype = Object.create(t && t.prototype, {
										constructor: {value: e, writable: !0, configurable: !0},
									})),
										Object.defineProperty(e, 'prototype', {writable: !1}),
										t && f(e, t);
								})(a, t);
								var r,
									n,
									o,
									i,
									s =
										((o = a),
										(i = (function () {
											if ('undefined' == typeof Reflect || !Reflect.construct)
												return !1;
											if (Reflect.construct.sham) return !1;
											if ('function' == typeof Proxy) return !0;
											try {
												return (
													Boolean.prototype.valueOf.call(
														Reflect.construct(Boolean, [], function () {})
													),
													!0
												);
											} catch (e) {
												return !1;
											}
										})()),
										function () {
											var e,
												t = b(o);
											if (i) {
												var r = b(this).constructor;
												e = Reflect.construct(t, arguments, r);
											} else e = t.apply(this, arguments);
											return m(this, e);
										});
								function a(e) {
									return (
										(function (e, t) {
											if (!(e instanceof t))
												throw new TypeError(
													'Cannot call a class as a function'
												);
										})(this, a),
										s.call(this, e)
									);
								}
								return (
									(r = a),
									(n = [
										{
											key: 'render',
											value: function () {
												return g(this.props.currentAccount)
													? (0, u.jsx)(
															e,
															(function (e) {
																for (var t = 1; t < arguments.length; t++) {
																	var r =
																		null != arguments[t] ? arguments[t] : {};
																	t % 2
																		? p(Object(r), !0).forEach(function (t) {
																				y(e, t, r[t]);
																		  })
																		: Object.getOwnPropertyDescriptors
																		? Object.defineProperties(
																				e,
																				Object.getOwnPropertyDescriptors(r)
																		  )
																		: p(Object(r)).forEach(function (t) {
																				Object.defineProperty(
																					e,
																					t,
																					Object.getOwnPropertyDescriptor(r, t)
																				);
																		  });
																}
																return e;
															})({}, this.props)
													  )
													: (0, u.jsx)(c.Z, {});
											},
										},
									]),
									n && h(r.prototype, n),
									Object.defineProperty(r, 'prototype', {writable: !1}),
									a
								);
							})(n.Component)),
							y(t, 'propTypes', {currentAccount: o.Z.ChainAccount}),
							y(t, 'defaultProps', {autosubscribe: !0}),
							t);
					return (
						(r = (0, s.Z)(r)),
						(r = (0, i.Z)(r, 100, {leading: !1})),
						(0, a.$)(r, {
							listenTo: function () {
								return [l.Z];
							},
							getProps: function () {
								var e =
									l.Z.getState().currentAccount ||
									l.Z.getState().passwordAccount ||
									'please-login';
								return {currentAccount: new Map([['name', e]])};
							},
						})
					);
				};
		},
		71468: (e) => {
			e.exports = {
				midnightTheme: {
					bidColor: 'rgb(112, 168, 0)',
					bidFillColor: 'rgba(80, 210, 194, 0.5)',
					askColor: '#e6416e',
					askFillColor: 'rgba(227, 116, 91, 0.5)',
					callColor: '#BBBF2B',
					settleColor: 'rgba(125, 134, 214, 1)',
					settleFillColor: 'rgba(125, 134, 214, 0.5)',
					positiveColor: 'rgb(112, 168, 0)',
					negativeColor: '#DB0000',
					strokeColor: '#FFFF00',
					primaryText: '#e0e0e0',
					volumeColor: '#848484',
					tooltipBackgroundColor: 'rgba(0, 0, 0, 0.4)',
					tooltipColor: '#fff',
					tooltipFillColor: '#fff',
					axisLabelsColor: '#fff',
					axisLineColor: 'rgba(200, 200, 200, 0.3)',
					indicatorLineColor: '#FFFFFF',
					bgColor: '#191a1f',
					textColor: '#e0e0e0',
				},
				darkTheme: {
					bidColor: 'rgb(112, 168, 0)',
					bidFillColor: 'rgba(80, 210, 194, 0.5)',
					askColor: '#e6416e',
					askFillColor: 'rgba(227, 116, 91, 0.5)',
					callColor: '#BBBF2B',
					settleColor: 'rgba(125, 134, 214, 1)',
					settleFillColor: 'rgba(125, 134, 214, 0.5)',
					positiveColor: 'rgb(112, 168, 0)',
					negativeColor: '#DB0000',
					strokeColor: '#FFFF00',
					primaryText: '#e0e0e0',
					volumeColor: '#848484',
					tooltipBackgroundColor: 'rgba(0, 0, 0, 0.4)',
					tooltipColor: '#fff',
					tooltipFillColor: '#fff',
					axisLabelsColor: '#fff',
					axisLineColor: 'rgba(200, 200, 200, 0.3)',
					indicatorLineColor: '#FFFFFF',
					bgColor: 'black',
					textColor: '#ffffff',
				},
				lightTheme: {
					bidColor: 'rgb(112, 168, 0)',
					bidFillColor: 'rgba(80, 210, 194, 0.5)',
					askColor: '#EA340B',
					askFillColor: 'rgba(227, 116, 91, 0.5)',
					callColor: '#BBBF2B',
					settleColor: 'rgba(125, 134, 214, 1)',
					settleFillColor: 'rgba(125, 134, 214, 0.5)',
					positiveColor: '#528c0a',
					negativeColor: 'rgba(225, 66, 74, 1)',
					strokeColor: '#000000',
					primaryText: '#242424',
					volumeColor: '#848484',
					tooltipBackgroundColor: 'rgba(255,255,255, 0.9)',
					tooltipColor: '#000',
					tooltipFillColor: '#000',
					axisLabelsColor: '#000',
					axisLineColor: 'rgba(200, 200, 200, 0.3)',
					indicatorLineColor: '#848484',
					bgColor: '#fff',
					textColor: '#3d3d3d',
				},
			};
		},
		14013: (e, t, r) => {
			e.exports = r(77191);
		},
	},
]);
