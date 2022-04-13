'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[810],
	{
		56004: (e, t, n) => {
			n.d(t, {Z: () => b}), n(67294);
			var r = n(55019),
				o = n(31143),
				i = n(35944);
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
			function c(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(n), !0).forEach(function (t) {
								u(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: c(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function u(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function p(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function d(e, t) {
				return (
					(d =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					d(e, t)
				);
			}
			function f(e, t) {
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
			function h(e) {
				return (
					(h = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					h(e)
				);
			}
			const b = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && d(e, t);
				})(u, e);
				var t,
					n,
					o,
					s,
					c =
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
								t = h(o);
							if (s) {
								var n = h(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return f(this, e);
						});
				function u() {
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, u),
						c.call(this)
					);
				}
				return (
					(t = u),
					(n = [
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
											var n,
												r,
												o = (function (e, t) {
													if (null == e) return {};
													var n,
														r,
														o = {},
														i = Object.keys(e);
													for (r = 0; r < i.length; r++)
														(n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
													return o;
												})(e, t);
											if (Object.getOwnPropertySymbols) {
												var i = Object.getOwnPropertySymbols(e);
												for (r = 0; r < i.length; r++)
													(n = i[r]),
														t.indexOf(n) >= 0 ||
															(Object.prototype.propertyIsEnumerable.call(
																e,
																n
															) &&
																(o[n] = e[n]));
											}
											return o;
										})(e, a));
								return (0, i.jsx)(
									r.Z,
									l(
										l({ref: 'input', type: 'text'}, t),
										{},
										{
											onPaste: this.props.onPaste || this.onPaste.bind(this),
											onKeyPress: this.onKeyPress.bind(this),
										}
									)
								);
							},
						},
					]) && p(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					u
				);
			})(o.C);
		},
		30791: (e, t, n) => {
			n.r(t), n.d(t, {default: () => gt});
			var r = n(67294),
				o = n(46194),
				i = n(15644),
				s = (n(72277), n(87718)),
				a = n(71665),
				c = n(17772),
				l = n(112),
				u = n.n(l),
				p = n(45697),
				d = n.n(p),
				f = n(77335),
				h = n(68769),
				b = n(71577),
				y = n(52233),
				m = n(94188),
				v = n(8564),
				g = n(80563),
				_ = n(17076),
				O = n(40840),
				k = n(35944);
			function j(e) {
				return (
					(j =
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
					j(e)
				);
			}
			function w(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function x(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? w(Object(n), !0).forEach(function (t) {
								Z(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: w(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function P(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function S(e, t) {
				return (
					(S =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					S(e, t)
				);
			}
			function A(e, t) {
				if (t && ('object' === j(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return C(e);
			}
			function C(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function M(e) {
				return (
					(M = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					M(e)
				);
			}
			function Z(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			n(89737);
			var R = ['1.2.1634961'],
				N = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && S(e, t);
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
									t = M(o);
								if (i) {
									var n = M(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return A(this, e);
							});
					function a(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							Z(C((t = s.call(this, e))), 'onRowAction', function (e) {
								return {onClick: t.onMarketAction.bind(C(t), e)};
							}),
							(t.state = {ticker: {}}),
							(t.tickersLoaded = {}),
							t
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'onMarketAction',
								value: function (e) {
									var t =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: 'yes';
									this.props.onMarketAction({market: e, action: t});
								},
							},
							{
								key: 'getHeader',
								value: function () {
									var e = this;
									return [
										{
											title: '#',
											dataIndex: 'asset_id',
											align: 'left',
											defaultSortOrder: 'ascend',
											sorter: function (e, t) {
												return e.symbol > t.symbol
													? 1
													: e.symbol < t.symbol
													? -1
													: 0;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'nowrap'},
													children: (0, k.jsx)(f.Z, {asset: e}),
												});
											},
										},
										{
											title: u().translate('prediction.overview.issuer'),
											dataIndex: 'issuer',
											align: 'left',
											sorter: function (e, t) {
												var n = y.BQ.getAccount(e.issuer),
													r = y.BQ.getAccount(t.issuer),
													o = null,
													i = null;
												return (
													n && r && ((o = n.get('name')), (i = r.get('name'))),
													o > i ? 1 : o < i ? -1 : 0
												);
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'nowrap'},
													children: (0, k.jsx)(h.Z, {account: e}),
												});
											},
										},
										{
											title: u().translate('prediction.overview.prediction'),
											dataIndex: 'condition',
											align: 'left',
											sorter: function (e, t) {
												return e.condition && '' !== e.condition
													? t.condition && '' !== t.condition
														? e.condition.localeCompare(t.condition)
														: 1
													: -1;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'normal'},
													children: (0, k.jsx)('span', {children: e}),
												});
											},
										},
										{
											title: u().translate(
												'prediction.overview.market_confidence'
											),
											dataIndex: 'marketConfidence',
											align: 'left',
											sorter: function (e, t) {
												return e.marketConfidence > t.marketConfidence
													? 1
													: e.marketConfidence < t.marketConfidence
													? -1
													: 0;
											},
											render: function (t, n) {
												var r = Object.assign({}, e.state.ticker[n.asset_id]);
												return r
													? (r.quote_volume &&
													  '0' !== r.quote_volume &&
													  '1' !== r.quote_volume &&
													  'NaN' !== r.quote_volume &&
													  '-NaN' !== r.quote_volume
															? (r.quote_volume = O.Z.convert_typed_to_satoshi(
																	parseFloat(r.quote_volume),
																	y.BQ.getAsset(
																		n.asset[1].bitasset_data.options
																			.short_backing_asset
																	)
															  ))
															: (r.quote_volume = 0),
													  r.percent_change &&
													  'NaN' !== r.percent_change &&
													  '-NaN' !== r.percent_change
															? '0' == r.percent_change
																? (r.percent_change = '0%')
																: (r.percent_change =
																		(parseFloat(r.latest) > 0 ? '+' : '-') +
																		r.percent_change +
																		'%')
															: (r.percent_change = '-'),
													  (0, k.jsxs)('span', {
															children: [
																u().translate('exchange.vol_short'),
																' ',
																(0, k.jsx)(_.Z, {
																	amount: r.quote_volume,
																	asset:
																		n.asset[1].bitasset_data.options
																			.short_backing_asset,
																}),
																' ',
															],
													  }))
													: null;
											},
										},
										{
											title: u().translate(
												'prediction.overview.market_predicated_likelihood'
											),
											dataIndex: 'marketLikelihood',
											align: 'left',
											sorter: function (e, t) {
												return e.marketLikelihood > t.marketLikelihood
													? 1
													: e.marketLikelihood < t.marketLikelihood
													? -1
													: 0;
											},
											render: function (t, n) {
												var o = Object.assign({}, e.state.ticker[n.asset_id]);
												return o
													? (o.latest &&
													  '0' !== o.latest &&
													  '1' !== o.latest &&
													  'NaN' !== o.latest &&
													  '-NaN' !== o.latest
															? (o.latest =
																	(100 * parseFloat(o.latest)).toPrecision(3) +
																	'%')
															: (o.latest = '-'),
													  o.highest_bid &&
													  '0' !== o.highest_bid &&
													  '1' !== o.highest_bid &&
													  'NaN' !== o.highest_bid &&
													  '-NaN' !== o.highest_bid
															? (o.highest_bid =
																	(100 * parseFloat(o.highest_bid)).toPrecision(
																		3
																	) + '%')
															: (o.highest_bid = '-'),
													  o.lowest_ask &&
													  '0' !== o.lowest_ask &&
													  '1' !== o.lowest_ask &&
													  'NaN' !== o.lowest_ask &&
													  '-NaN' !== o.lowest_ask
															? (o.lowest_ask =
																	(100 * parseFloat(o.lowest_ask)).toPrecision(
																		3
																	) + '%')
															: (o.lowest_ask = '-'),
													  '-' !== o.latest
															? (0, k.jsxs)(r.Fragment, {
																	children: [
																		(0, k.jsxs)('span', {
																			children: [o.latest, ' '],
																		}),
																		(0, k.jsxs)('span', {
																			className: 'supsub',
																			children: [
																				(0, k.jsx)('sup', {
																					className: 'superscript',
																					children: o.highest_bid,
																				}),
																				(0, k.jsx)('sub', {
																					className: 'subscript',
																					children: o.lowest_ask,
																				}),
																			],
																		}),
																		'   ',
																	],
															  })
															: '-')
													: null;
											},
										},
										{
											title: u().translate('prediction.overview.description'),
											dataIndex: 'description',
											align: 'left',
											sorter: function (e, t) {
												return e.description && '' !== e.description
													? t.description && '' !== t.description
														? e.description.localeCompare(t.description)
														: 1
													: -1;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'normal'},
													children: (0, k.jsx)('span', {children: e}),
												});
											},
										},
										{
											title: u().translate('prediction.overview.expiry'),
											dataIndex: 'expiry',
											align: 'left',
											sorter: function (e, t) {
												return e.expiry && '' !== e.expiry
													? t.expiry && '' !== t.expiry
														? e.expiry.localeCompare(t.expiry)
														: 1
													: -1;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'normal'},
													children: (0, k.jsx)('span', {children: e}),
												});
											},
										},
										{
											title: u().translate('prediction.overview.action'),
											align: 'center',
											render: function (t) {
												return (0, k.jsx)('div', {
													style: {
														display: 'flex',
														flexDirection: 'column',
														alignItems: 'center',
													},
													children:
														((n = t.issuer),
														e.props.currentAccount.get('id') === n
															? (0, k.jsx)(b.Z, {
																	style: {width: '170px'},
																	className: 'align-middle',
																	onClick: function () {
																		return e.onMarketAction(t, 'resolve');
																	},
																	children: u().translate(
																		'prediction.overview.resolve'
																	),
															  })
															: (0, k.jsx)('div', {
																	style: {
																		display: 'flex',
																		flexDirection: 'row',
																		alignItems: 'center',
																	},
																	children: (0, k.jsx)(b.Z, {
																		style: {marginRight: '5px'},
																		className: 'align-middle',
																		onClick: function () {
																			return e.onMarketAction(t, 'yes');
																		},
																		children: 'Details',
																	}),
															  })),
												});
												var n;
											},
										},
									];
								},
							},
							{
								key: '_decideRowClassName',
								value: function (e, t) {
									return this.props.selectedPredictionMarket
										? 'selected-row'
										: '';
								},
							},
							{
								key: 'componentDidUpdate',
								value: function (e) {
									var t = this;
									e.predictionMarkets.length !==
										this.props.predictionMarkets.length &&
										this.props.predictionMarkets.forEach(function (e) {
											e.asset[1].id in Object.keys(t.tickersLoaded) ||
												((t.tickersLoaded[e.asset[1].id] = {}),
												c.Z.getTicker(
													e.asset[1].bitasset_data.options.short_backing_asset,
													e.asset[1].id
												).then(function (n) {
													var r = Object.assign(
														t.tickersLoaded,
														t.state.ticker
													);
													(r[e.asset[1].id] = n),
														(t.tickersLoaded[e.asset[1].id] = n),
														t.setState({ticker: r});
												}));
										});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.getHeader(),
										n = [];
									if (this.props.selectedPredictionMarket)
										n = [this.props.selectedPredictionMarket];
									else if (this.props.predictionMarkets) {
										(n = this.props.predictionMarkets),
											this.props.hideUnknownHouses &&
												(n = n.filter(function (e) {
													return R.includes(e.issuer);
												})),
											(n = n.filter(function (t) {
												return (
													-1 !==
													(
														(y.BQ.getAccount(t.issuer)
															? y.BQ.getAccount(t.issuer).get('name')
															: null) +
														'\0' +
														t.condition +
														'\0' +
														t.description
													)
														.toUpperCase()
														.indexOf(e.props.searchTerm)
												);
											}));
										var r = 0;
										n = n.map(function (e) {
											return x(
												x({}, e),
												{},
												{key: ''.concat(e.asset_id).concat(r++)}
											);
										});
									}
									var o = {
										type: this.props.selectedPredictionMarket
											? void 0
											: 'radio',
										hideDefaultSelections: !0,
										onChange: function (t, n) {
											n.length > 0
												? e.onMarketAction(n[0], null)
												: e.onMarketAction(null, null);
										},
										selectedRowKeys: this.props.selectedPredictionMarket
											? [this.props.selectedPredictionMarket.key]
											: [],
									};
									return (0, k.jsx)(m.Z, {
										rowSelection: o,
										rows: n,
										header: t,
										pageSize: 10,
										rowClassName: this._decideRowClassName.bind(this),
									});
								},
							},
						]),
						n && P(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component);
			(N.propTypes = {
				predictionMarkets: d().array.isRequired,
				onMarketAction: d().func.isRequired,
				currentAccount: v.Z.ChainAccount.isRequired,
				searchTerm: d().string,
				selectedPredictionMarket: d().object,
				hideUnknownHouses: d().bool,
			}),
				(N.defaultProps = {predictionMarkets: []});
			const T = (N = (0, g.Z)(N, 150, {leading: !1}));
			var E = n(61580),
				D = n(8193);
			function I(e) {
				return (
					(I =
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
					I(e)
				);
			}
			function F(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function B(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? F(Object(n), !0).forEach(function (t) {
								q(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: F(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function q(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function L(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function H(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
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
			function U(e, t) {
				if (t && ('object' === I(t) || 'function' == typeof t)) return t;
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
			function Q(e) {
				return (
					(Q = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Q(e)
				);
			}
			var W = {name: 'k7q4zw', styles: 'font-size:1.3rem;margin-right:0.5rem'},
				G = (function (e) {
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
									t = Q(o);
								if (i) {
									var n = Q(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return U(this, e);
							});
					function a() {
						return L(this, a), s.apply(this, arguments);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'getHeader',
								value: function () {
									var e = this,
										t =
											(Math.pow(
												10,
												y.BQ.getAsset(
													this.props.predictionMarketData.predictionMarket
														.asset_id
												).get('precision')
											),
											this.props.currentAccount.get('id'));
									return [
										{
											title: '#',
											dataIndex: 'order_id',
											align: 'left',
											sorter_inactive: function (e, t) {
												return e.order_id > t.order_id
													? 1
													: e.order_id < t.order_id
													? -1
													: 0;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'nowrap'},
													children: (0, k.jsx)('span', {children: e}),
												});
											},
										},
										{
											title: u().translate('prediction.details.predictor'),
											dataIndex: 'opinionator',
											align: 'left',
											sorter_inactive: function (e, t) {
												var n = y.BQ.getAccount(e.opinionator).get('name'),
													r = y.BQ.getAccount(t.opinionator).get('name');
												return n > r ? 1 : n < r ? -1 : 0;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'nowrap'},
													children: (0, k.jsx)(h.Z, {account: e}),
												});
											},
										},
										{
											title: u().translate('prediction.details.prediction'),
											dataIndex: 'opinion',
											align: 'left',
											sorter_inactive: function (e, t) {
												return e.opinion > t.opinion
													? 1
													: e.opinion < t.opinion
													? -1
													: 0;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'nowrap'},
													children: (0, k.jsx)('span', {
														children: u().translate(
															'prediction.details.' +
																('yes' == e ? 'proves_true' : 'incorrect')
														),
													}),
												});
											},
										},
										{
											title: u().translate(
												'prediction.details.predicated_likelihood'
											),
											dataIndex: 'likelihood',
											align: 'left',
											sortOrder:
												'yes' == this.props.opinionFilter
													? 'descend'
													: 'ascend',
											sorter: function (e, t) {
												return e.likelihood > t.likelihood
													? 1
													: e.likelihood < t.likelihood
													? -1
													: 0;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'nowrap'},
													children: (0, k.jsxs)('span', {
														children: [(100 * e).toPrecision(3), '%'],
													}),
												});
											},
										},
										{
											title: u().translate('prediction.details.premium'),
											dataIndex: 'premium',
											align: 'left',
											sorter_inactive: function (e, t) {
												return e.amount > t.amount
													? 1
													: e.amount < t.amount
													? -1
													: 0;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'nowrap'},
													children: (0, k.jsx)(_.Z, {
														amount: e.amount,
														asset: e.asset_id,
													}),
												});
											},
										},
										{
											title: u().translate('prediction.details.commission'),
											dataIndex: 'commission',
											align: 'left',
											sorter_inactive: function (e, t) {
												return e.fee > t.fee ? 1 : e.fee < t.fee ? -1 : 0;
											},
											render: function (e, t) {
												return (0, k.jsxs)('div', {
													style: {whiteSpace: 'nowrap'},
													children: [
														(0, k.jsx)(_.Z, {
															amount: e.amount,
															asset: e.asset_id,
														}),
														' (',
														(
															(t.commission.amount / t.premium.amount) *
															100
														).toPrecision(3),
														'%)',
													],
												});
											},
										},
										{
											title: u().translate(
												'prediction.details.potential_profit'
											),
											dataIndex: 'potentialProfit',
											align: 'left',
											sorter_inactive: function (e, t) {
												return e.amount > t.amount
													? 1
													: e.amount < t.amount
													? -1
													: 0;
											},
											render: function (e) {
												return (0, k.jsx)('div', {
													style: {whiteSpace: 'nowrap'},
													children: (0, k.jsx)(_.Z, {
														amount: e.amount,
														asset: e.asset_id,
													}),
												});
											},
										},
										{
											title: u().translate('prediction.overview.action'),
											align: 'left',
											render: function (n) {
												return (0, k.jsx)('div', {
													style: {
														display: 'flex',
														flexDirection: 'column',
														alignItems: 'right',
													},
													children:
														t && n.opinionator === t
															? (0, k.jsx)(b.Z, {
																	onClick: function () {
																		e.props.onCancel(n);
																	},
																	children: u().translate(
																		'prediction.details.cancel'
																	),
															  })
															: (0, k.jsx)(r.Fragment, {
																	children: (0, k.jsxs)('span', {
																		children: [
																			(0, k.jsx)(E.Z, {
																				title: u().translate(
																					'yes' == n.opinion
																						? 'prediction.tooltips.oppose_proves_true'
																						: 'prediction.tooltips.oppose_is_incorrect'
																				),
																				children: (0, k.jsx)(D.znh, {css: W}),
																			}),
																			(0, k.jsx)(b.Z, {
																				onClick: function () {
																					e.props.onOppose(n);
																				},
																				children: u().translate(
																					'prediction.details.oppose'
																				),
																			}),
																		],
																	}),
															  }),
												});
											},
										},
									];
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.getHeader(),
										n = this.props.predictionMarketData.opinions.filter(
											function (t) {
												var n = y.BQ.getAccount(t.opinionator)
													? y.BQ.getAccount(t.opinionator).get('name')
													: null;
												if (
													e.props.detailsSearchTerm &&
													-1 !==
														!(n + '\0' + t.opinion)
															.toUpperCase()
															.indexOf(e.props.detailsSearchTerm)
												)
													return !1;
												if (e.props.opinionFilter) {
													if ('all' == e.props.opinionFilter) return !0;
													if (e.props.opinionFilter != t.opinion) return !1;
												}
												return !0;
											}
										),
										r = 0;
									return (
										(n = n.map(function (e) {
											return B(
												B({}, e),
												{},
												{key: ''.concat(e.order_id).concat(r++)}
											);
										})),
										(0, k.jsx)(m.Z, {rows: n, header: t, pageSize: 10})
									);
								},
							},
						]) && H(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component);
			(G.propTypes = {
				predictionMarketData: d().any.isRequired,
				onOppose: d().func.isRequired,
				onCancel: d().func.isRequired,
				currentAccount: v.Z.ChainAccount.isRequired,
				detailsSearchTerm: d().string,
				opinionFilter: d().string,
			}),
				(G.defaultProps = {predictionMarketData: {}});
			var V = n(62849),
				K = n(52468),
				J = n(38648),
				$ = n(8174),
				Y = n(22712),
				X = n(55019),
				ee = n(47933),
				te = n(58074),
				ne = n.n(te),
				re = n(43957),
				oe = n(86035),
				ie = n(56004),
				se = n(25108);
			function ae(e) {
				return (
					(ae =
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
					ae(e)
				);
			}
			function ce(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function le(e, t) {
				return (
					(le =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					le(e, t)
				);
			}
			function ue(e, t) {
				if (t && ('object' === ae(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return pe(e);
			}
			function pe(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function de(e) {
				return (
					(de = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					de(e)
				);
			}
			var fe = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && le(e, t);
				})(s, e);
				var t,
					n,
					r,
					o,
					i =
						((r = s),
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
								t = de(r);
							if (o) {
								var n = de(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return ue(this, e);
						});
				function s(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, s),
						((t = i.call(this, e)).state = {
							newOpinionParameters: {
								opinionator: null,
								opinion: t.props.preselectedOpinion,
								amount:
									t.props.preselectedAmount /
										Math.pow(10, t.props.baseAsset.get('precision')) || ' ',
								probability: t.props.preselectedProbability || null,
								fee: null,
							},
							showWarning: !1,
							inProgress: !1,
							selectedOpinion: t.props.preselectedOpinion,
							selectedAsset: null,
							wrongPropability: !1,
						}),
						(t.handleOpinionChange = t.handleOpinionChange.bind(pe(t))),
						(t.handleAmountChange = t.handleAmountChange.bind(pe(t))),
						(t.onSubmit = t.onSubmit.bind(pe(t))),
						(t.handleProbabilityChange = t.handleProbabilityChange.bind(pe(t))),
						t
					);
				}
				return (
					(t = s),
					(n = [
						{
							key: '_createOrder',
							value: function () {
								var e = this;
								this.setState({inProgress: !0});
								var t =
										'yes' === this.state.newOpinionParameters.opinion
											? 'buy'
											: 'shortAndSell',
									n = this.props.baseAsset.get('id'),
									r = this.props.predictionMarket.options.description,
									o = JSON.parse(r),
									i = new Date();
								i.setFullYear(i.getFullYear() + 1);
								var s = o.expiry ? new Date(o.expiry) : i,
									a = {
										for_sale: new oe.xR({
											asset_id: this.props.baseAsset.get('id'),
											precision: this.props.baseAsset.get('precision'),
											amount:
												this.state.newOpinionParameters.amount *
												Math.pow(10, this.props.quoteAsset.get('precision')) *
												this.state.newOpinionParameters.probability,
										}),
										to_receive: new oe.xR({
											asset_id: this.props.quoteAsset.get('id'),
											precision: this.props.quoteAsset.get('precision'),
											amount:
												this.state.newOpinionParameters.amount *
												Math.pow(10, this.props.quoteAsset.get('precision')),
										}),
									};
								a.price = new oe.tA({base: a.for_sale, quote: a.to_receive});
								var l = {
									for_sale: new oe.xR({
										asset_id: this.props.quoteAsset.get('id'),
										precision: this.props.quoteAsset.get('precision'),
										amount:
											this.state.newOpinionParameters.amount *
											Math.pow(10, this.props.quoteAsset.get('precision')),
									}),
									to_receive: new oe.xR({
										asset_id: this.props.baseAsset.get('id'),
										precision: this.props.baseAsset.get('precision'),
										amount:
											this.state.newOpinionParameters.amount *
											Math.pow(10, this.props.quoteAsset.get('precision')) *
											this.state.newOpinionParameters.probability,
									}),
								};
								l.price = new oe.tA({base: l.for_sale, quote: l.to_receive});
								var p = 'buy' === t ? l : a;
								if (
									(new oe.F6({
										for_sale: p.for_sale,
										expiration: s,
										to_receive: p.to_receive,
										seller: this.props.currentAccount.get('id'),
										fee: {asset_id: n, amount: 0},
									}),
									'buy' === t)
								) {
									var d = new oe.F6({
										for_sale: new oe.xR({
											asset_id: this.props.baseAsset.get('id'),
											precision: this.props.baseAsset.get('precision'),
											amount: O.Z.convert_typed_to_satoshi(
												this.state.newOpinionParameters.amount,
												this.props.baseAsset
											),
										}),
										expiration: null,
										to_receive: new oe.xR({
											asset_id: this.props.quoteAsset.get('id'),
											precision: this.props.quoteAsset.get('precision'),
											amount:
												O.Z.convert_typed_to_satoshi(
													this.state.newOpinionParameters.amount,
													this.props.quoteAsset
												) /
												parseFloat(this.state.newOpinionParameters.probability),
										}),
										seller: this.props.currentAccount.get('id'),
										fee: {asset_id: n, amount: 0},
									});
									return c.Z.createLimitOrder2(d)
										.then(function (t) {
											e.setState({inProgress: !1}),
												t.error &&
													'wallet locked' !== t.error.message &&
													J.Z.error({
														message: u().translate(
															'notifications.exchange_unknown_error_place_order',
															{
																amount: p.to_receive.getAmount({real: !0}),
																symbol: p.to_receive.asset_id,
															}
														),
													});
										})
										.catch(function (e) {
											se.error('order failed:', e);
										});
								}
								if ('shortAndSell' === t) {
									var f = new oe.F6({
											for_sale: new oe.xR({
												asset_id: this.props.quoteAsset.get('id'),
												precision: this.props.quoteAsset.get('precision'),
												amount: O.Z.convert_typed_to_satoshi(
													this.state.newOpinionParameters.amount,
													this.props.quoteAsset
												),
											}),
											expiration: null,
											to_receive: new oe.xR({
												asset_id: this.props.baseAsset.get('id'),
												precision: this.props.baseAsset.get('precision'),
												amount:
													O.Z.convert_typed_to_satoshi(
														this.state.newOpinionParameters.amount,
														this.props.baseAsset
													) *
													parseFloat(
														this.state.newOpinionParameters.probability
													),
											}),
											seller: this.props.currentAccount.get('id'),
											fee: {asset_id: n, amount: 0},
										}),
										h = new oe.xR({
											amount: f.amount_for_sale.getAmount(),
											asset_id: this.props.baseAsset.get('id'),
											precision: this.props.baseAsset.get('precision'),
										});
									c.Z.createPredictionShort(f, h).then(function (t) {
										e.setState({inProgress: !1}),
											t.error &&
												'wallet locked' !== t.error.message &&
												J.Z.error({
													message: u().translate(
														'notifications.exchange_unknown_error_place_order',
														{amount: buyAssetAmount, symbol: buyAsset.symbol}
													),
												});
									});
								}
							},
						},
						{
							key: 'handleOpinionChange',
							value: function () {
								var e = this.state.newOpinionParameters;
								(e.opinion = 'no' === e.opinion ? 'yes' : 'no'),
									(e.opinionator = this.props.currentAccount.get('id')),
									this.setState({
										newOpinionParameters: e,
										selectedOpinion: e.opinion,
									});
							},
						},
						{
							key: 'handleAmountChange',
							value: function (e) {
								var t = e.amount,
									n = e.asset,
									r = this.state.newOpinionParameters;
								(r.amount = t),
									(r.opinionator = this.props.currentAccount.get('id')),
									this.setState({newOpinionParameter: r}),
									'string' == typeof n && this.setState({selectedAsset: n});
							},
						},
						{
							key: 'handleProbabilityChange',
							value: function (e) {
								var t = this.state.newOpinionParameters;
								(t.probability = e.target.value),
									this.setState({
										newOpinionParameter: t,
										wrongProbability: !this._isProbabilityValid(t),
									});
							},
						},
						{
							key: '_isProbabilityValid',
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: null;
								return (
									null == e && (e = this.state.newOpinionParameters),
									!(
										!e.probability ||
										e.probability <= 0.01 ||
										e.probability >= 0.99
									)
								);
							},
						},
						{
							key: '_isFormValid',
							value: function () {
								return (
									this._isProbabilityValid() &&
									parseFloat(this.state.newOpinionParameters.amount) > 0
								);
							},
						},
						{
							key: '_getPotentialWinnings',
							value: function () {
								return this.state.newOpinionParameters.probability &&
									this.state.newOpinionParameters.amount
									? 'yes' === this.state.newOpinionParameters.opinion
										? O.Z.format_number(
												this.state.newOpinionParameters.amount /
													parseFloat(
														this.state.newOpinionParameters.probability
													),
												this.props.baseAsset.get('precision'),
												!1
										  )
										: O.Z.format_number(
												this.state.newOpinionParameters.amount *
													(1 +
														(this.state.newOpinionParameters.probability
															? parseFloat(
																	this.state.newOpinionParameters.probability
															  )
															: 0)),
												this.props.baseAsset.get('precision'),
												!1
										  )
									: 0;
							},
						},
						{
							key: 'onSubmit',
							value: function () {
								this._isFormValid()
									? this._createOrder.call(this)
									: this.setState({showWarning: !0});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.state,
									t = e.showWarning,
									n = e.newOpinionParameters,
									r = e.wrongProbability,
									o = [
										(0, k.jsx)(
											b.Z,
											{
												type: 'primary',
												onClick: this.onSubmit,
												disabled: this.state.inProgress,
												children: u().translate('global.confirm'),
											},
											'submit'
										),
										(0, k.jsx)(
											b.Z,
											{
												onClick: this.props.onClose,
												disabled: this.state.inProgress,
												children: u().translate('global.cancel'),
											},
											'cancel'
										),
									];
								return (
									se.log('asd'),
									(0, k.jsx)($.Z, {
										title: (0, k.jsx)(ne(), {
											content: 'prediction.add_opinion_modal.title',
										}),
										visible: this.props.visible,
										onCancel: this.props.onClose,
										overlay: !0,
										closable: !this.state.inProgress,
										footer: o,
										children: (0, k.jsx)('div', {
											className: 'prediction-markets--add-prediction-offer',
											children: (0, k.jsxs)(Y.Z, {
												className: 'full-width',
												layout: 'vertical',
												children: [
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsxs)('label', {
															className: 'left-label',
															children: [
																(0, k.jsx)(ne(), {
																	content:
																		'prediction.add_opinion_modal.symbol',
																}),
																(0, k.jsx)(X.Z, {
																	type: 'text',
																	disabled: !0,
																	tabIndex: 1,
																	value: this.props.predictionMarket.symbol,
																}),
															],
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsxs)('label', {
															className: 'left-label',
															children: [
																(0, k.jsx)(ne(), {
																	content: 'prediction.details.prediction',
																}),
																(0, k.jsx)(X.Z, {
																	type: 'text',
																	disabled: !0,
																	tabIndex: 2,
																	value: this.props.predictionMarket.condition,
																}),
															],
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsx)('span', {
															className:
																(!n.probability && t) || r ? 'has-error' : '',
															children: (0, k.jsxs)('label', {
																className: 'left-label',
																children: [
																	(0, k.jsx)(ne(), {
																		content:
																			'prediction.details.predicated_likelihood',
																	}),
																	(0, k.jsx)(ie.Z, {
																		placeholder: '0.0',
																		onChange: this.handleProbabilityChange,
																		value:
																			this.state.newOpinionParameters
																				.probability,
																	}),
																],
															}),
														}),
													}),
													(0, k.jsxs)(Y.Z.Item, {
														style: {marginBottom: '1rem'},
														children: [
															(0, k.jsx)('span', {
																children: (0, k.jsx)('label', {
																	className: 'left-label',
																	children: (0, k.jsx)(ne(), {
																		content: 'prediction.details.i_think_that',
																	}),
																}),
															}),
															(0, k.jsxs)(ee.ZP.Group, {
																value: this.state.selectedOpinion,
																onChange: this.handleOpinionChange,
																children: [
																	(0, k.jsx)(ee.ZP, {
																		value: 'yes',
																		children: u().translate(
																			'prediction.details.proves_true'
																		),
																	}),
																	(0, k.jsx)(ee.ZP, {
																		value: 'no',
																		children: u().translate(
																			'prediction.details.incorrect'
																		),
																	}),
																],
															}),
														],
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsx)('span', {
															children: (0, k.jsxs)('label', {
																className: 'left-label',
																children: [
																	(0, k.jsx)(ne(), {
																		content: 'prediction.details.premium',
																	}),
																	(0, k.jsx)(re.Z, {
																		onChange: this.handleAmountChange,
																		placeholder: '0.0',
																		tabIndex: 6,
																		amount:
																			this.state.newOpinionParameters.amount,
																		asset: this.props.baseAsset.get('id'),
																	}),
																],
															}),
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsxs)('label', {
															className: 'left-label',
															children: [
																(0, k.jsx)(ne(), {
																	content: 'prediction.details.commission',
																}),
																(0, k.jsx)(re.Z, {
																	disabled: !0,
																	amount: Math.min(
																		this.props.predictionMarket.max_market_fee,
																		(this.state.newOpinionParameters.amount *
																			this.props.predictionMarket.market_fee) /
																			1e4
																	),
																	asset: this.props.baseAsset.get('id'),
																}),
															],
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsxs)('label', {
															className: 'left-label',
															children: [
																(0, k.jsx)(ne(), {
																	content:
																		'prediction.details.potential_profit',
																}),
																(0, k.jsx)(re.Z, {
																	disabled: !0,
																	amount: this._getPotentialWinnings(),
																	asset: this.props.baseAsset.get('id'),
																}),
															],
														}),
													}),
													this.state.inProgress
														? (0, k.jsx)(ne(), {content: 'footer.loading'})
														: null,
												],
											}),
										}),
									})
								);
							},
						},
					]),
					n && ce(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})($.Z);
			(fe.propTypes = {
				visible: d().bool,
				onClose: d().func,
				predictionMarket: d().any.isRequired,
				opinion: d().any,
				currentAccount: v.Z.ChainAccount.isRequired,
				submitNewOpinion: d().func,
				preselectedOpinion: d().string,
				preselectedAmount: d().number,
				preselectedProbability: d().number,
				baseAsset: d().object,
				quoteAsset: d().object,
			}),
				(fe.defaultProps = {visible: !1, predictionMarket: null, opinion: {}});
			var he = n(68588),
				be = n(37092),
				ye = n(89203),
				me = n.n(ye),
				ve = n(30381),
				ge = n.n(ve),
				_e = n(25108);
			function Oe(e) {
				return (
					(Oe =
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
					Oe(e)
				);
			}
			function ke(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function je(e, t) {
				return (
					(je =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					je(e, t)
				);
			}
			function we(e, t) {
				if (t && ('object' === Oe(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return xe(e);
			}
			function xe(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Pe(e) {
				return (
					(Pe = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Pe(e)
				);
			}
			var Se = !0,
				Ae = {name: 'uaob3j', styles: 'margin-left:0.5rem'},
				Ce = {name: 'uaob3j', styles: 'margin-left:0.5rem'},
				Me = {name: 'uaob3j', styles: 'margin-left:0.5rem'},
				Ze = {name: 'uaob3j', styles: 'margin-left:0.5rem'},
				Re = {name: 'uaob3j', styles: 'margin-left:0.5rem'},
				Ne = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && je(e, t);
					})(c, e);
					var t,
						n,
						r,
						o,
						i =
							((r = c),
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
									t = Pe(r);
								if (o) {
									var n = Pe(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return we(this, e);
							});
					function c(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, c),
							((t = i.call(this, e)).state = {
								marketOptions: {
									precision: '5',
									max_supply: 1e5,
									max_market_fee: 0,
									market_fee_percent: 0,
									description: {main: ''},
									reward_percent: 0,
									symbol: '',
								},
								showWarning: !1,
								wrongSymbol: !1,
								wrongDate: !1,
								core_exchange_rate: {
									quote: {asset_id: null, amount: 1},
									base: {asset_id: '1.3.0', amount: 1},
								},
								bitasset_opts: {
									feed_lifetime_sec: 86400,
									minimum_feeds: 7,
									force_settlement_delay_sec: 86400,
									force_settlement_offset_percent: 1 * me().GRAPHENE_1_PERCENT,
									maximum_force_settlement_volume: 20 * me().GRAPHENE_1_PERCENT,
									short_backing_asset: '1.3.0',
								},
								inProgress: !1,
							}),
							(t.handleChange = t.handleChange.bind(xe(t))),
							(t.handleAssetChange = t.handleAssetChange.bind(xe(t))),
							(t.handleFeeChange = t.handleFeeChange.bind(xe(t))),
							(t.onSubmit = t.onSubmit.bind(xe(t))),
							t
						);
					}
					return (
						(t = c),
						(n = [
							{
								key: '_getPermissions',
								value: function () {
									var e = s.Z.getFlagBooleans(0, Se),
										t = s.Z.getFlagBooleans('all', Se);
									return (
										(e.charge_market_fee = !0),
										{flagBooleans: e, permissionBooleans: t}
									);
								},
							},
							{
								key: '_createAsset',
								value: function (e) {
									var t = this;
									e && e.preventDefault();
									var n = this._getPermissions(),
										r = n.flagBooleans,
										o = n.permissionBooleans,
										i = this.state,
										c = i.marketOptions,
										l = i.core_exchange_rate,
										u = i.bitasset_opts,
										p = y.BQ.getAccount(this.props.currentAccount).get('id'),
										d = s.Z.getFlags(r, Se),
										f = s.Z.getPermissions(o, Se),
										h = JSON.stringify(this.state.marketOptions.description);
									this.setState({inProgress: !0}),
										a.Z.createAsset(p, c, d, f, l, Se, !0, u, h)
											.then(function (e) {
												t.setState({inProgress: !1}),
													_e.log(
														'... AssetActions.createAsset(account_id, update)',
														p,
														c,
														d,
														f
													),
													t.props.onMarketCreated(c.symbol);
											})
											.catch(function (e) {
												_e.error(e), t.setState({inProgress: !1});
											});
								},
							},
							{
								key: 'handleChange',
								value: function (e) {
									var t = this.state.marketOptions;
									switch (
										(e instanceof ge() &&
											(e.set('milliseconds', 0),
											(e = {target: {name: 'expiry', value: e.toISOString()}})),
										e.target.name)
									) {
										case 'symbol':
											t[e.target.name] = e.target.value.toUpperCase();
											break;
										case 'main':
										case 'condition':
										case 'expiry':
											t.description[e.target.name] = e.target.value;
											break;
										default:
											t[e.target.name] = e.target.value;
									}
									this.setState({marketOptions: t});
								},
							},
							{
								key: 'handleAssetChange',
								value: function (e) {
									if (e) {
										var t = this.state.bitasset_opts,
											n = this.state.marketOptions,
											r = this.state.core_exchange_rate;
										(t.short_backing_asset = e),
											(n.precision = y.BQ.getAsset(e).get('precision')),
											(r.base.asset_id = e),
											this.setState({
												bitasset_opts: t,
												core_exchange_rate: r,
												marketOptions: n,
											});
									}
								},
							},
							{
								key: '_forcePositive',
								value: function (e) {
									return parseFloat(e) < 0 ? '0' : e;
								},
							},
							{
								key: 'handleFeeChange',
								value: function (e) {
									_e.log(e);
									var t = this.state.marketOptions;
									(t.market_fee_percent = this._forcePositive(e.target.value)),
										this.setState({marketOptions: t});
								},
							},
							{
								key: '_isFormValid',
								value: function () {
									return this.props.symbols.includes(
										this.state.marketOptions.symbol
									)
										? (this.setState({wrongSymbol: !0}), !1)
										: (this.setState({wrongSymbol: !1}),
										  new Date() >
										  new Date(this.state.marketOptions.description.expiry)
												? (this.setState({wrongDate: !0}), !1)
												: (this.setState({wrongDate: !1}),
												  this.state.marketOptions.symbol &&
														this.state.marketOptions.description.main &&
														this.state.marketOptions.description.condition &&
														this.state.marketOptions.description.expiry));
								},
							},
							{
								key: 'onSubmit',
								value: function (e) {
									this._isFormValid()
										? this._createAsset.call(this, e)
										: this.setState({showWarning: !0});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.state,
										t = e.showWarning,
										n = e.marketOptions,
										r = e.wrongSymbol,
										o = e.wrongDate,
										i = [
											(0, k.jsx)(
												b.Z,
												{
													type: 'primary',
													onClick: this.onSubmit,
													disabled: this.state.inProgress,
													children: u().translate('global.confirm'),
												},
												'submit'
											),
											(0, k.jsx)(
												b.Z,
												{
													onClick: this.props.onClose,
													disabled: this.state.inProgress,
													children: u().translate('global.cancel'),
												},
												'cancel'
											),
										];
									return (0, k.jsx)($.Z, {
										title: (0, k.jsx)(ne(), {
											content: 'prediction.create_market_modal.title',
										}),
										visible: this.props.visible,
										onCancel: this.props.onClose,
										overlay: !0,
										closable: !this.state.inProgress,
										footer: i,
										children: (0, k.jsx)('div', {
											children: (0, k.jsxs)(Y.Z, {
												className: 'full-width',
												layout: 'vertical',
												children: [
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsx)('span', {
															className:
																(!n.symbol && t) || r ? 'has-error' : '',
															children: (0, k.jsxs)('label', {
																className: 'left-label',
																children: [
																	(0, k.jsxs)(E.Z, {
																		title: u().translate(
																			'prediction.create_market_modal.tooltip_symbol'
																		),
																		placement: 'topLeft',
																		children: [
																			(0, k.jsx)(ne(), {
																				content:
																					'prediction.create_market_modal.symbol',
																			}),
																			(0, k.jsx)(D.KpA, {css: Ae}),
																		],
																	}),
																	(0, k.jsx)(X.Z, {
																		name: 'symbol',
																		type: 'text',
																		onChange: this.handleChange,
																		tabIndex: 1,
																		value: this.state.marketOptions.symbol,
																	}),
																],
															}),
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsx)('span', {
															className:
																!n.description.condition && t
																	? 'has-error'
																	: '',
															children: (0, k.jsxs)('label', {
																className: 'left-label',
																children: [
																	(0, k.jsxs)(E.Z, {
																		title: u().translate(
																			'prediction.create_market_modal.tooltip_condition'
																		),
																		placement: 'topLeft',
																		children: [
																			(0, k.jsx)(ne(), {
																				content:
																					'prediction.create_market_modal.condition',
																			}),
																			(0, k.jsx)(D.KpA, {css: Ce}),
																		],
																	}),
																	(0, k.jsx)(X.Z, {
																		name: 'condition',
																		type: 'text',
																		onChange: this.handleChange,
																		tabIndex: 2,
																	}),
																],
															}),
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsx)('span', {
															className:
																!n.description.main && t ? 'has-error' : '',
															children: (0, k.jsxs)('label', {
																className: 'left-label',
																children: [
																	(0, k.jsxs)(E.Z, {
																		title: u().translate(
																			'prediction.create_market_modal.tooltip_description'
																		),
																		placement: 'topLeft',
																		children: [
																			(0, k.jsx)(ne(), {
																				content:
																					'prediction.create_market_modal.description',
																			}),
																			(0, k.jsx)(Icon, {
																				style: {marginLeft: '0.5rem'},
																				theme: 'filled',
																				type: 'question-circle',
																			}),
																		],
																	}),
																	(0, k.jsx)(X.Z.TextArea, {
																		name: 'main',
																		onChange: this.handleChange,
																		tabIndex: 3,
																	}),
																],
															}),
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsx)('span', {
															className:
																(!n.description.expiry && t) || o
																	? 'has-error'
																	: '',
															children: (0, k.jsxs)('label', {
																className: 'left-label',
																children: [
																	(0, k.jsxs)(E.Z, {
																		title: u().translate(
																			'prediction.create_market_modal.tooltip_resolution_date'
																		),
																		placement: 'topLeft',
																		children: [
																			(0, k.jsx)(ne(), {
																				content:
																					'prediction.create_market_modal.resolution_date',
																			}),
																			(0, k.jsx)(D.znh, {css: Me}),
																		],
																	}),
																	(0, k.jsx)('div', {
																		children: (0, k.jsx)(he.Z, {
																			style: {width: '100%'},
																			name: 'expiry',
																			showTime: !0,
																			placeholder: u().translate(
																				'prediction.create_market_modal.select_date_and_time'
																			),
																			onChange: this.handleChange,
																			onOk: this.handleChange,
																			tabIndex: 4,
																		}),
																	}),
																],
															}),
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsxs)('label', {
															className: 'left-label',
															children: [
																(0, k.jsxs)(E.Z, {
																	title: u().translate(
																		'prediction.create_market_modal.tooltip_backing_asset'
																	),
																	placement: 'topLeft',
																	children: [
																		(0, k.jsx)(ne(), {
																			content:
																				'prediction.create_market_modal.backing_asset',
																		}),
																		(0, k.jsx)(D.znh, {css: Ze}),
																	],
																}),
																(0, k.jsx)(be.Z, {
																	assets: [
																		'1.3.0',
																		'1.3.113',
																		'1.3.120',
																		'1.3.121',
																	],
																	value:
																		this.state.bitasset_opts
																			.short_backing_asset,
																	onChange: this.handleAssetChange,
																	tabIndex: 5,
																}),
															],
														}),
													}),
													(0, k.jsx)(Y.Z.Item, {
														children: (0, k.jsxs)('label', {
															className: 'left-label',
															children: [
																(0, k.jsxs)(E.Z, {
																	title: u().translate(
																		'prediction.create_market_modal.tooltip_commission'
																	),
																	placement: 'topLeft',
																	children: [
																		(0, k.jsx)(ne(), {
																			content:
																				'prediction.create_market_modal.commission',
																		}),
																		(0, k.jsx)(D.znh, {css: Re}),
																	],
																}),
																(0, k.jsx)(X.Z, {
																	tabIndex: 6,
																	type: 'number',
																	value:
																		this.state.marketOptions.market_fee_percent,
																	onChange: this.handleFeeChange,
																}),
															],
														}),
													}),
													this.state.inProgress
														? (0, k.jsx)(ne(), {content: 'footer.loading'})
														: null,
												],
											}),
										}),
									});
								},
							},
						]) && ke(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						c
					);
				})($.Z);
			function Te(e) {
				return (
					(Te =
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
					Te(e)
				);
			}
			function Ee(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function De(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Ee(Object(n), !0).forEach(function (t) {
								Ie(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Ee(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Ie(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function Fe(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Be(e, t) {
				return (
					(Be =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Be(e, t)
				);
			}
			function qe(e, t) {
				if (t && ('object' === Te(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Le(e);
			}
			function Le(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function He(e) {
				return (
					(He = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					He(e)
				);
			}
			(Ne.propTypes = {
				visible: d().bool,
				onClose: d().func,
				currentAccount: d().string,
				symbols: d().array,
				onMarketCreated: d().func,
			}),
				(Ne.defaultProps = {visible: !1});
			var ze = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Be(e, t);
				})(s, e);
				var t,
					n,
					r,
					o,
					i =
						((r = s),
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
								t = He(r);
							if (o) {
								var n = He(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return qe(this, e);
						});
				function s(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, s),
						((t = i.call(this, e)).state = {
							resolveParameters: {
								asset_id: t.props.predictionMarket.asset_id,
								result: 'yes',
							},
							result: 'yes',
						}),
						(t.handleResultChange = t.handleResultChange.bind(Le(t))),
						t
					);
				}
				return (
					(t = s),
					(n = [
						{
							key: 'handleResultChange',
							value: function (e) {
								var t = e.target.value;
								this.setState({
									resolveParameters: De(
										De({}, this.state.resolveParameters),
										{},
										{result: t}
									),
									result: t,
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = [
										(0, k.jsx)(
											b.Z,
											{
												type: 'primary',
												onClick: function () {
													return e.props.onResolveMarket(
														e.state.resolveParameters
													);
												},
												disabled: this.state.inProgress,
												children: u().translate('global.confirm'),
											},
											'submit'
										),
										(0, k.jsx)(
											b.Z,
											{
												onClick: this.props.onClose,
												disabled: this.state.inProgress,
												children: u().translate('global.cancel'),
											},
											'cancel'
										),
									];
								return (0, k.jsx)($.Z, {
									title: (0, k.jsx)(ne(), {
										content: 'prediction.resolve_modal.title',
									}),
									visible: this.props.visible,
									onCancel: this.props.onClose,
									overlay: !0,
									closable: !this.state.inProgress,
									footer: t,
									children: (0, k.jsx)('div', {
										className:
											'prediction-markets--resolve-prediction-market-asset',
										children: (0, k.jsxs)(Y.Z, {
											className: 'full-width',
											layout: 'vertical',
											children: [
												(0, k.jsx)(Y.Z.Item, {
													children: (0, k.jsxs)('label', {
														className: 'left-label',
														children: [
															(0, k.jsx)(ne(), {
																content: 'prediction.resolve_modal.symbol',
															}),
															(0, k.jsx)(X.Z, {
																type: 'text',
																disabled: !0,
																tabIndex: 1,
																value: this.props.predictionMarket.symbol,
															}),
														],
													}),
												}),
												(0, k.jsx)(Y.Z.Item, {
													children: (0, k.jsxs)('label', {
														className: 'left-label',
														children: [
															(0, k.jsx)(ne(), {
																content: 'prediction.resolve_modal.prediction',
															}),
															(0, k.jsx)(X.Z, {
																type: 'text',
																disabled: !0,
																tabIndex: 2,
																value: this.props.predictionMarket.condition,
															}),
														],
													}),
												}),
												(0, k.jsxs)(Y.Z.Item, {
													children: [
														(0, k.jsx)('label', {
															className: 'left-label',
															children: (0, k.jsx)(ne(), {
																content:
																	'prediction.resolve_modal.the_prediction_has',
															}),
														}),
														(0, k.jsxs)(ee.ZP.Group, {
															value: this.state.result,
															onChange: this.handleResultChange,
															children: [
																(0, k.jsx)(ee.ZP, {
																	value: 'yes',
																	children: u().translate(
																		'prediction.resolve_modal.proven_true'
																	),
																}),
																(0, k.jsx)(ee.ZP, {
																	value: 'no',
																	children: u().translate(
																		'prediction.resolve_modal.was_incorrect'
																	),
																}),
															],
														}),
													],
												}),
											],
										}),
									}),
								});
							},
						},
					]) && Fe(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})($.Z);
			(ze.propTypes = {
				predictionMarket: d().any.isRequired,
				onResolveMarket: d().func.isRequired,
				visible: d().bool,
				onClose: d().func,
			}),
				(ze.defaultProps = {visible: !1, predictionMarket: null});
			var Ue = n(12028),
				Qe = n(674),
				We = n(85017),
				Ge = n(11230),
				Ve = n(25108);
			function Ke(e) {
				return (
					(Ke =
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
					Ke(e)
				);
			}
			function Je(e, t, n, r, o, i, s) {
				try {
					var a = e[i](s),
						c = a.value;
				} catch (e) {
					return void n(e);
				}
				a.done ? t(c) : Promise.resolve(c).then(r, o);
			}
			function $e(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return Ye(e);
					})(e) ||
					(function (e) {
						if (
							('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
							null != e['@@iterator']
						)
							return Array.from(e);
					})(e) ||
					(function (e, t) {
						if (e) {
							if ('string' == typeof e) return Ye(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return (
								'Object' === n && e.constructor && (n = e.constructor.name),
								'Map' === n || 'Set' === n
									? Array.from(e)
									: 'Arguments' === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? Ye(e, t)
									: void 0
							);
						}
					})(e) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function Ye(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function Xe(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function et(e, t) {
				return (
					(et =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					et(e, t)
				);
			}
			function tt(e, t) {
				if (t && ('object' === Ke(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return nt(e);
			}
			function nt(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function rt(e) {
				return (
					(rt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					rt(e)
				);
			}
			function ot(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var it = ['1.2.1634961'],
				st = {name: 'uaob3j', styles: 'margin-left:0.5rem'},
				at = {name: 'uaob3j', styles: 'margin-left:0.5rem'},
				ct = {name: 'k7q4zw', styles: 'font-size:1.3rem;margin-right:0.5rem'},
				lt = {name: 'uaob3j', styles: 'margin-left:0.5rem'},
				ut = {name: 'k7q4zw', styles: 'font-size:1.3rem;margin-right:0.5rem'},
				pt = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && et(e, t);
					})(d, e);
					var t,
						n,
						r,
						o,
						i,
						l,
						p =
							((i = d),
							(l = (function () {
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
									t = rt(i);
								if (l) {
									var n = rt(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return tt(this, e);
							});
					function d(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, d),
							ot(nt((t = p.call(this, e))), 'onOppose', function (e) {
								t.setState({
									preselectedOpinion: 'no' === e.opinion ? 'yes' : 'no',
									preselectedAmount: e.amount,
									preselectedProbability: e.probability,
								}),
									t.onAddOpinionModalOpen();
							}),
							ot(nt(t), 'onCancelOpinion', function (e) {
								t._cancelLimitOrders([e.order_id]);
							}),
							ot(nt(t), 'onSubmitNewOpinion', function (e) {
								t.state.opinions
									? t.setState({
											opinions: [].concat($e(t.state.opinions), [e]),
											isAddOpinionModalOpen: !1,
									  })
									: t.setState({opinions: [e], isAddOpinionModalOpen: !1});
							}),
							ot(nt(t), 'onResolveMarket', function (e) {
								var n = t.props.currentAccount.get('id'),
									r = 'yes' === e.result ? 1 : 0,
									o = y.BQ.getAsset(e.asset_id).toJS(),
									i = new oe.xR({
										real: r,
										asset_id: o.id,
										precision: o.precision,
									}),
									s = y.BQ.getAsset(o.bitasset.options.short_backing_asset),
									c = new oe.xR({
										real: 1,
										asset_id: o.bitasset.options.short_backing_asset,
										precision: s.get('precision'),
									}),
									l = new oe.tA({quote: c, base: i});
								a.Z.assetGlobalSettle(o, n, l).then(function () {
									new Promise(function (e) {
										return setTimeout(e, 1e3);
									}).then(function (e) {
										t.updateAsset(o.symbol);
									});
								}),
									t.setState({isResolveModalOpen: !1});
							}),
							(t.state = {
								lastAssetSymbol: null,
								predictionMarkets: [],
								isFetchingFinished: !1,
								searchTerm: '',
								detailsSearchTerm: '',
								selectedPredictionMarket: null,
								opinions: [],
								fetchedAssets: [],
								preselectedOpinion: 'yes',
								preselectedAmount: 0,
								preselectedProbability: 0,
								isCreateMarketModalOpen: !1,
								isAddOpinionModalOpen: !1,
								isResolveModalOpen: !1,
								isHideUnknownHousesChecked: !0,
								isHideInvalidAssetsChecked: !0,
								opinionFilter: 'yes',
								predictionMarketAssetFilter: 'open',
							}),
							(t.onCreatePredictionMarketModalOpen =
								t.onCreatePredictionMarketModalOpen.bind(nt(t))),
							(t.onCreatePredictionMarketModalClose =
								t.onCreatePredictionMarketModalClose.bind(nt(t))),
							(t.onAddOpinionModalOpen = t.onAddOpinionModalOpen.bind(nt(t))),
							(t.onAddOpinionModalClose = t.onAddOpinionModalClose.bind(nt(t))),
							(t.onSearch = t.onSearch.bind(nt(t))),
							(t.onSearchDetails = t.onSearchDetails.bind(nt(t))),
							(t.onMarketAction = t.onMarketAction.bind(nt(t))),
							(t.onResolveModalOpen = t.onResolveModalOpen.bind(nt(t))),
							(t.onResolveModalClose = t.onResolveModalClose.bind(nt(t))),
							(t.updateAsset = t.updateAsset.bind(nt(t))),
							(t.handleUnknownHousesToggleChange =
								t.handleUnknownHousesToggleChange.bind(nt(t))),
							(t.handleInvalidAssetsChecked = t.handleInvalidAssetsChecked.bind(
								nt(t)
							)),
							t
						);
					}
					return (
						(t = d),
						(n = [
							{
								key: 'componentWillMount',
								value: function () {
									this._checkAssets(this.props.assets);
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									e.assets !== this.props.assets && this._checkAssets(e.assets),
										e.marketLimitOrders !== this.props.marketLimitOrders &&
											this._updateOpinionsList(e.marketLimitOrders);
								},
							},
							{
								key: '_checkAssets',
								value: function (e) {
									var t = this.state.lastAssetSymbol
										? this.state.lastAssetSymbol
										: 'A';
									if (e) {
										var n = e
											.sort(function (e, t) {
												return e.symbol > t.symbol
													? 1
													: e.symbol < t.symbol
													? -1
													: 0;
											})
											.last();
										(t = n ? n.symbol : 'A'),
											e.forEach(function (e) {
												e.forPredictions ||
													(e.forPredictions = {
														description: s.Z.parseDescription(
															e.options.description
														),
														flagBooleans: s.Z.getFlagBooleans(
															e.options.flags,
															!0
														),
													});
											}),
											this._updatePredictionMarketsList(e);
									}
									this.state.lastAssetSymbol && this.state.lastAssetSymbol === t
										? this.setState({isFetchingFinished: !0, fetchedAssets: e})
										: (a.Z.getAssetList.defer(t, 100),
										  this.setState({lastAssetSymbol: t}));
								},
							},
							{
								key: '_isKnownIssuer',
								value: function (e) {
									return it.includes(e.issuer);
								},
							},
							{
								key: '_isValidPredictionMarketAsset',
								value: function (e) {
									var t = new Date(e.forPredictions.description.expiry);
									return !(
										(t instanceof Date && isNaN(t.getTime())) ||
										!e.forPredictions.description.condition ||
										!e.forPredictions.description.main ||
										e.forPredictions.description.condition.length < 10 ||
										e.forPredictions.description.main.length < 20 ||
										e.options.market_fee_percent / 100 >= 10
									);
								},
							},
							{
								key: '_updatePredictionMarketsList',
								value: function () {
									var e = this,
										t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: null;
									null == t && (t = this.state.fetchedAssets);
									var n = this.state.predictionMarketAssetFilter,
										r = t.filter(function (t) {
											if (
												t.bitasset_data &&
												t.bitasset_data.is_prediction_market
											) {
												if (
													e.state.isHideUnknownHousesChecked &&
													!e._isKnownIssuer(t)
												)
													return !1;
												if (
													e.state.isHideInvalidAssetsChecked &&
													!e._isValidPredictionMarketAsset(t)
												)
													return !1;
												if (n && 'all' !== n) {
													var r = new Date(t.forPredictions.description.expiry),
														o =
															t.bitasset_data.settlement_fund > 0 ||
															r < new Date();
													return 'open' === n
														? !o
														: 'past_resolution_date' === n && o;
												}
												return !0;
											}
											return !1;
										}),
										o = $e(r).map(function (e) {
											var t = 0,
												n = 0;
											return (
												e[1].forPredictions.flagBooleans.charge_market_fee &&
													((t = e[1].options.market_fee_percent),
													(n = e[1].options.max_market_fee)),
												{
													asset: e,
													asset_id: e[1].id,
													issuer: e[1].issuer,
													description: e[1].forPredictions.description.main,
													symbol: e[1].symbol,
													condition: e[1].forPredictions.description.condition,
													expiry: e[1].forPredictions.description.expiry,
													options: e[1].options,
													marketConfidence: 0,
													marketLikelihood: 0,
													market_fee: t,
													max_market_fee: n,
												}
											);
										});
									this.setState({predictionMarkets: o});
								},
							},
							{
								key: '_updateOpinionsList',
								value: function (e) {
									var t = [],
										n = this.state.selectedPredictionMarket;
									e.forEach(function (e, r) {
										var o =
												e.market_base === e.sell_price.base.asset_id
													? 'no'
													: 'yes',
											i =
												e.market_base === e.sell_price.base.asset_id
													? e.sell_price.invert().toReal()
													: e.sell_price.toReal(),
											a =
												e.market_base === e.sell_price.base.asset_id
													? e.amountForSale()
													: e.amountToReceive(),
											c =
												e.market_base === e.sell_price.base.asset_id
													? e.amountToReceive()
													: e.amountForSale(),
											l = 0;
										s.Z.getFlagBooleans(n.options.flags, !0)
											.charge_market_fee &&
											(l = Math.min(
												n.options.max_market_fee,
												(a.amount * n.options.market_fee_percent) / 1e4
											)),
											i < 1 &&
												t.push({
													order_id: r,
													opinionator: e.seller,
													opinion: o,
													amount: a,
													likelihood: i,
													potentialProfit: new oe.xR({
														amount: a.amount,
														asset_id: c.asset_id,
														precision: c.precision,
													}),
													premium: c,
													commission: new oe.xR({
														amount: l * i,
														asset_id: c.asset_id,
														precision: c.precision,
													}),
												});
									}),
										this.setState({opinions: [].concat(t)});
								},
							},
							{
								key: 'getMarketOpinions',
								value:
									((r = regeneratorRuntime.mark(function e(t) {
										var n, r;
										return regeneratorRuntime.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (!this.state.subscribedMarket) {
																e.next = 3;
																break;
															}
															return (
																(e.next = 3),
																c.Z.unSubscribeMarket(
																	this.state.subscribedMarket.quote.get('id'),
																	this.state.subscribedMarket.base.get('id')
																)
															);
														case 3:
															return (
																(n = y.BQ.getAsset(
																	t.options.core_exchange_rate.base.asset_id
																)),
																(r = y.BQ.getAsset(
																	t.options.core_exchange_rate.quote.asset_id
																)),
																(e.next = 7),
																c.Z.subscribeMarket(
																	n,
																	r,
																	this.props.bucketSize,
																	this.props.currentGroupOrderLimit
																)
															);
														case 7:
															this.setState({
																subscribedMarket: {base: n, quote: r},
															});
														case 8:
														case 'end':
															return e.stop();
													}
											},
											e,
											this
										);
									})),
									(o = function () {
										var e = this,
											t = arguments;
										return new Promise(function (n, o) {
											var i = r.apply(e, t);
											function s(e) {
												Je(i, n, o, s, a, 'next', e);
											}
											function a(e) {
												Je(i, n, o, s, a, 'throw', e);
											}
											s(void 0);
										});
									}),
									function (e) {
										return o.apply(this, arguments);
									}),
							},
							{
								key: 'onMarketAction',
								value: function (e) {
									var t = this,
										n = e.market,
										r = e.action;
									if ('string' == typeof r)
										switch (
											(this.state.selectedPredictionMarket ||
												this.setState({selectedPredictionMarket: n}),
											r)
										) {
											case 'resolve':
												this.setState({
													preselectedAmount: 0,
													preselectedProbability: 0,
												}),
													this.onResolveModalOpen();
												break;
											case 'yes':
												this.state.subscribedMarket &&
													(this.setState({
														preselectedAmount: 0,
														preselectedProbability: 0,
														preselectedOpinion: 'yes',
													}),
													this.onAddOpinionModalOpen());
												break;
											case 'no':
												this.state.subscribedMarket &&
													(this.setState({
														preselectedAmount: 0,
														preselectedProbability: 0,
														preselectedOpinion: 'no',
													}),
													this.onAddOpinionModalOpen());
												break;
											default:
												this.setState({
													preselectedAmount: 0,
													preselectedProbability: 0,
												});
										}
									else
										this.state.selectedPredictionMarket
											? this.setState({selectedPredictionMarket: null})
											: this.setState(
													{selectedPredictionMarket: n},
													function () {
														return t.getMarketOpinions(n);
													}
											  );
								},
							},
							{
								key: 'onSearch',
								value: function (e) {
									this.setState({searchTerm: e.target.value || ''});
								},
							},
							{
								key: 'onSearchDetails',
								value: function (e) {
									this.setState({detailsSearchTerm: e.target.value || ''});
								},
							},
							{
								key: 'onCreatePredictionMarketModalOpen',
								value: function () {
									this.setState({isCreateMarketModalOpen: !0});
								},
							},
							{
								key: 'onCreatePredictionMarketModalClose',
								value: function () {
									this.setState({isCreateMarketModalOpen: !1});
								},
							},
							{
								key: 'onAddOpinionModalOpen',
								value: function () {
									this.setState({isAddOpinionModalOpen: !0});
								},
							},
							{
								key: 'onAddOpinionModalClose',
								value: function () {
									this.setState({
										isAddOpinionModalOpen: !1,
										preselectedOpinion: 'no',
										preselectedAmount: 0,
										preselectedProbability: 0,
									});
								},
							},
							{
								key: 'onResolveModalOpen',
								value: function () {
									this.setState({isResolveModalOpen: !0});
								},
							},
							{
								key: 'onResolveModalClose',
								value: function () {
									this.setState({isResolveModalOpen: !1});
								},
							},
							{
								key: 'handleUnknownHousesToggleChange',
								value: function () {
									var e = this,
										t = !this.state.isHideUnknownHousesChecked;
									this.setState(
										{
											isHideUnknownHousesChecked: t,
											selectedPredictionMarket: null,
										},
										function () {
											return e._updatePredictionMarketsList();
										}
									);
								},
							},
							{
								key: 'handleInvalidAssetsChecked',
								value: function () {
									var e = this,
										t = !this.state.isHideInvalidAssetsChecked;
									this.setState(
										{
											isHideInvalidAssetsChecked: t,
											selectedPredictionMarket: null,
										},
										function () {
											return e._updatePredictionMarketsList();
										}
									);
								},
							},
							{
								key: '_cancelLimitOrders',
								value: function (e) {
									c.Z.cancelLimitOrders(
										this.props.currentAccount.get('id'),
										e
									).catch(function (e) {
										Ve.log('cancel orders error:', e);
									});
								},
							},
							{
								key: 'updateAsset',
								value: function (e) {
									a.Z.getAssetList.defer(e, 1);
								},
							},
							{
								key: 'getOverviewSection',
								value: function () {
									var e = this;
									return (0, k.jsxs)('div', {
										children: [
											(0, k.jsxs)('div', {
												className: 'header-selector',
												style: {display: 'inline-block', width: '100%'},
												children: [
													(0, k.jsxs)('div', {
														className: 'filter-block',
														children: [
															(0, k.jsx)(V.Z, {
																onChange: this.onSearch,
																value: this.state.searchTerm,
															}),
															(0, k.jsxs)(ee.ZP.Group, {
																style: {marginLeft: '20px'},
																value: this.state.predictionMarketAssetFilter,
																onChange: function (t) {
																	e.setState(
																		{
																			predictionMarketAssetFilter:
																				t.target.value,
																		},
																		e._updatePredictionMarketsList
																	);
																},
																children: [
																	(0, k.jsx)(ee.ZP, {
																		value: 'all',
																		children: u().translate(
																			'prediction.overview.all'
																		),
																	}),
																	(0, k.jsx)(ee.ZP, {
																		value: 'open',
																		children: u().translate(
																			'prediction.overview.open'
																		),
																	}),
																	(0, k.jsx)(ee.ZP, {
																		value: 'past_resolution_date',
																		children: u().translate(
																			'prediction.overview.past_resolution_date'
																		),
																	}),
																],
															}),
															(0, k.jsxs)('span', {
																children: [
																	(0, k.jsx)(Ue.Z, {
																		style: {marginLeft: '20px'},
																		onChange:
																			this.handleUnknownHousesToggleChange,
																		checked:
																			this.state.isHideUnknownHousesChecked,
																	}),
																	(0, k.jsx)(ne(), {
																		onClick:
																			this.handleUnknownHousesToggleChange,
																		content:
																			'prediction.overview.hide_unknown_houses',
																		style: {
																			marginLeft: '10px',
																			cursor: 'pointer',
																		},
																	}),
																	(0, k.jsx)(E.Z, {
																		title: u().translate(
																			'prediction.tooltips.hide_unknown_houses'
																		),
																		children: (0, k.jsx)(D.znh, {css: st}),
																	}),
																	(0, k.jsx)(Ue.Z, {
																		style: {marginLeft: '20px'},
																		onChange: this.handleInvalidAssetsChecked,
																		checked:
																			this.state.isHideInvalidAssetsChecked,
																	}),
																	(0, k.jsx)(ne(), {
																		onClick: this.handleInvalidAssetsChecked,
																		content:
																			'prediction.overview.hide_invalid_asset',
																		style: {
																			marginLeft: '10px',
																			cursor: 'pointer',
																		},
																	}),
																	(0, k.jsx)(E.Z, {
																		title: u().translate(
																			'prediction.tooltips.hide_invalid_asset'
																		),
																		children: (0, k.jsx)(D.znh, {css: at}),
																	}),
																],
															}),
														],
													}),
													(0, k.jsxs)('span', {
														className: 'action-buttons',
														children: [
															(0, k.jsx)(E.Z, {
																title: u().translate(
																	'prediction.tooltips.create_prediction_market_asset'
																),
																children: (0, k.jsx)(D.znh, {css: ct}),
															}),
															(0, k.jsx)(b.Z, {
																onClick: this.onCreatePredictionMarketModalOpen,
																children: u().translate(
																	'prediction.overview.create_market'
																),
															}),
														],
													}),
												],
											}),
											(0, k.jsx)(T, {
												predictionMarkets: this.state.predictionMarkets,
												currentAccount: this.props.currentAccount,
												onMarketAction: this.onMarketAction,
												searchTerm: this.state.searchTerm.toUpperCase(),
												selectedPredictionMarket:
													this.state.selectedPredictionMarket,
												hideUnknownHouses:
													this.state.isHideUnknownHousesChecked,
											}),
										],
									});
								},
							},
							{
								key: 'getDetailsSection',
								value: function () {
									var e = this;
									return (0, k.jsxs)('div', {
										children: [
											(0, k.jsxs)('h3', {
												children: [
													u().translate(
														'prediction.details.list_of_current_prediction_offers'
													),
													(0, k.jsx)(E.Z, {
														title: u().translate(
															'prediction.tooltips.what_is_a_prediction_offer'
														),
														children: (0, k.jsx)(D.znh, {css: lt}),
													}),
												],
											}),
											(0, k.jsxs)('div', {
												className: 'header-selector',
												style: {display: 'inline-block', width: '100%'},
												children: [
													(0, k.jsxs)('div', {
														className: 'filter-block',
														children: [
															(0, k.jsx)(V.Z, {
																onChange: this.onSearchDetails,
																value: this.state.detailsSearchTerm,
																autoComplete: 'off',
															}),
															(0, k.jsxs)(ee.ZP.Group, {
																style: {marginLeft: '20px'},
																value: this.state.opinionFilter,
																onChange: function (t) {
																	e.setState({opinionFilter: t.target.value});
																},
																children: [
																	(0, k.jsx)(ee.ZP, {
																		value: 'all',
																		children: u().translate(
																			'prediction.details.all'
																		),
																	}),
																	(0, k.jsx)(ee.ZP, {
																		value: 'yes',
																		children: u().translate(
																			'prediction.details.proves_true'
																		),
																	}),
																	(0, k.jsx)(ee.ZP, {
																		value: 'no',
																		children: u().translate(
																			'prediction.details.incorrect'
																		),
																	}),
																],
															}),
														],
													}),
													(0, k.jsxs)('span', {
														className: 'action-buttons',
														children: [
															(0, k.jsx)(E.Z, {
																title: u().translate(
																	'prediction.tooltips.add_prediction'
																),
																children: (0, k.jsx)(D.znh, {css: ut}),
															}),
															(0, k.jsx)(b.Z, {
																onClick: this.onAddOpinionModalOpen,
																children: u().translate(
																	'prediction.details.add_prediction'
																),
															}),
														],
													}),
												],
											}),
											this.state.opinions
												? (0, k.jsx)(G, {
														predictionMarketData: {
															predictionMarket:
																this.state.selectedPredictionMarket,
															opinions: this.state.opinions,
														},
														currentAccount: this.props.currentAccount,
														onOppose: this.onOppose,
														onCancel: this.onCancelOpinion,
														detailsSearchTerm:
															this.state.detailsSearchTerm.toUpperCase(),
														opinionFilter: this.state.opinionFilter,
												  })
												: null,
										],
									});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = $e(this.props.assets).map(function (e) {
										return e[1].symbol;
									});
									return (0, k.jsxs)('div', {
										className: 'prediction-markets grid-block vertical',
										style: {overflow: 'visible', margin: '15px'},
										children: [
											(0, k.jsx)('div', {
												className: 'grid-block small-12 shrink',
												style: {overflow: 'visible'},
												children: (0, k.jsx)(K.Z, {
													path: 'components/PredictionMarkets',
												}),
											}),
											this.getOverviewSection(),
											this.state.selectedPredictionMarket
												? this.getDetailsSection()
												: null,
											this.state.isCreateMarketModalOpen
												? (0, k.jsx)(Ne, {
														visible: this.state.isCreateMarketModalOpen,
														onClose: this.onCreatePredictionMarketModalClose,
														currentAccount: this.props.currentAccount,
														symbols: e,
														onMarketCreated: this.updateAsset,
												  })
												: null,
											this.state.isAddOpinionModalOpen
												? (0, k.jsx)(fe, {
														visible: this.state.isAddOpinionModalOpen,
														onClose: this.onAddOpinionModalClose,
														predictionMarket:
															this.state.selectedPredictionMarket,
														opinion: this.state.initialOpinion,
														currentAccount: this.props.currentAccount,
														submitNewOpinion: this.onSubmitNewOpinion,
														preselectedOpinion: this.state.preselectedOpinion,
														preselectedAmount: this.state.preselectedAmount,
														preselectedProbability:
															this.state.preselectedProbability,
														baseAsset: this.state.subscribedMarket.base,
														quoteAsset: this.state.subscribedMarket.quote,
												  })
												: null,
											this.state.isResolveModalOpen
												? (0, k.jsx)(ze, {
														visible: this.state.isResolveModalOpen,
														onClose: this.onResolveModalClose,
														predictionMarket:
															this.state.selectedPredictionMarket,
														onResolveMarket: this.onResolveMarket,
												  })
												: null,
											this.state.isFetchingFinished
												? null
												: (0, k.jsx)(Qe.Z, {
														loadingText: u().translate(
															'prediction.overview.loading'
														),
												  }),
										],
									});
								},
							},
						]),
						n && Xe(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						d
					);
				})(r.Component);
			pt = (0, Ge.$)(pt, {
				listenTo: function () {
					return [o.Z, i.Z];
				},
				getProps: function () {
					return {
						assets: o.Z.getState().assets,
						markets: i.Z.getState().marketData,
						bucketSize: i.Z.getState().bucketSize,
						currentGroupOrderLimit: i.Z.getState().currentGroupLimit,
						marketLimitOrders: i.Z.getState().marketLimitOrders,
					};
				},
			});
			const dt = (pt = (0, We.h)(pt));
			function ft(e) {
				return (
					(ft =
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
					ft(e)
				);
			}
			function ht(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function bt(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function yt(e, t) {
				return (
					(yt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					yt(e, t)
				);
			}
			function mt(e, t) {
				if (t && ('object' === ft(t) || 'function' == typeof t)) return t;
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
			function vt(e) {
				return (
					(vt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					vt(e)
				);
			}
			const gt = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && yt(e, t);
				})(s, e);
				var t,
					n,
					r,
					o,
					i =
						((r = s),
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
								t = vt(r);
							if (o) {
								var n = vt(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return mt(this, e);
						});
				function s() {
					return ht(this, s), i.apply(this, arguments);
				}
				return (
					(t = s),
					(n = [
						{
							key: 'render',
							value: function () {
								return (0, k.jsx)(dt, {});
							},
						},
					]) && bt(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(r.Component);
		},
		85017: (e, t, n) => {
			n.d(t, {h: () => g, u: () => v});
			var r = n(67294),
				o = n(8564),
				i = n(80563),
				s = n(79876),
				a = n(11230),
				c = n(37983),
				l = n(674),
				u = n(35944);
			function p(e) {
				return (
					(p =
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
					p(e)
				);
			}
			function d(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function f(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function h(e, t) {
				return (
					(h =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					h(e, t)
				);
			}
			function b(e, t) {
				if (t && ('object' === p(t) || 'function' == typeof t)) return t;
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
			function y(e) {
				return (
					(y = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					y(e)
				);
			}
			function m(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var v = function (e) {
					return !!e && !!e.get('id');
				},
				g = function (e) {
					var t,
						n =
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
										t && h(e, t);
								})(a, t);
								var n,
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
												t = y(o);
											if (i) {
												var n = y(this).constructor;
												e = Reflect.construct(t, arguments, n);
											} else e = t.apply(this, arguments);
											return b(this, e);
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
									(n = a),
									(r = [
										{
											key: 'render',
											value: function () {
												return v(this.props.currentAccount)
													? (0, u.jsx)(
															e,
															(function (e) {
																for (var t = 1; t < arguments.length; t++) {
																	var n =
																		null != arguments[t] ? arguments[t] : {};
																	t % 2
																		? d(Object(n), !0).forEach(function (t) {
																				m(e, t, n[t]);
																		  })
																		: Object.getOwnPropertyDescriptors
																		? Object.defineProperties(
																				e,
																				Object.getOwnPropertyDescriptors(n)
																		  )
																		: d(Object(n)).forEach(function (t) {
																				Object.defineProperty(
																					e,
																					t,
																					Object.getOwnPropertyDescriptor(n, t)
																				);
																		  });
																}
																return e;
															})({}, this.props)
													  )
													: (0, u.jsx)(l.Z, {});
											},
										},
									]),
									r && f(n.prototype, r),
									Object.defineProperty(n, 'prototype', {writable: !1}),
									a
								);
							})(r.Component)),
							m(t, 'propTypes', {currentAccount: o.Z.ChainAccount}),
							m(t, 'defaultProps', {autosubscribe: !0}),
							t);
					return (
						(n = (0, s.Z)(n)),
						(n = (0, i.Z)(n, 100, {leading: !1})),
						(0, a.$)(n, {
							listenTo: function () {
								return [c.Z];
							},
							getProps: function () {
								var e =
									c.Z.getState().currentAccount ||
									c.Z.getState().passwordAccount ||
									'please-login';
								return {currentAccount: new Map([['name', e]])};
							},
						})
					);
				};
		},
		94188: (e, t, n) => {
			n.d(t, {Z: () => y});
			var r = n(67294),
				o = n(112),
				i = n.n(o),
				s = n(22949),
				a = n(35944);
			function c(e) {
				return (
					(c =
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
					c(e)
				);
			}
			function l(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function u(e, t) {
				return (
					(u =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					u(e, t)
				);
			}
			function p(e, t) {
				if (t && ('object' === c(t) || 'function' == typeof t)) return t;
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
			function d(e) {
				return (
					(d = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					d(e)
				);
			}
			var f,
				h,
				b,
				y = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && u(e, t);
					})(f, e);
					var t,
						n,
						r,
						o,
						c =
							((r = f),
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
									t = d(r);
								if (o) {
									var n = d(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return p(this, e);
							});
					function f(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, f),
							((t = c.call(this, e)).state = {pageSize: e.pageSize}),
							t
						);
					}
					return (
						(t = f),
						(n = [
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.state.pageSize,
										n = this.props,
										r = n.header,
										o = n.rows,
										c = n.extraRow,
										l = n.loading,
										u = [10, 20, 30, 40, 50, 100].filter(function (e) {
											return e < o.length;
										});
									return (
										u.push(o.length),
										(0, a.jsxs)('div', {
											className: 'paginated-list',
											style: this.props.style,
											children: [
												(0, a.jsx)(s.Z, {
													loading: l,
													dataSource: o,
													uns: !0,
													columns: Array.isArray(r) ? r : [],
													footer: function () {
														return c || (0, a.jsx)('span', {children: ' '});
													},
													onChange: this.props.toggleSortOrder,
													pagination: {
														showSizeChanger: !0,
														hideOnSinglePage: !1,
														defaultPageSize: t,
														pageSizeOptions: u,
														showTotal: function (t, n) {
															return i().translate(e.props.label, {count: t});
														},
													},
													rowClassName:
														null == this.props.rowClassName
															? void 0
															: function (t, n) {
																	return e.props.rowClassName(t, n);
															  },
													rowSelection: this.props.rowSelection,
												}),
												this.props.children,
											],
										})
									);
								},
							},
						]) && l(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						f
					);
				})(r.Component);
			(b = {
				rows: [],
				pageSize: 20,
				label: 'utility.total_x_items',
				className: 'table',
				extraRow: null,
				style: {paddingBottom: '1rem'},
				loading: !1,
			}),
				(h = 'defaultProps') in (f = y)
					? Object.defineProperty(f, h, {
							value: b,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (f[h] = b);
		},
		89737: (e, t, n) => {
			n.r(t);
		},
	},
]);
