'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[224],
	{
		92224: (e, t, n) => {
			n.d(t, {Z: () => fe});
			var r = n(67294),
				o = n(43393),
				s = n.n(o),
				i = n(45697),
				a = n.n(i),
				c = n(58074),
				u = n.n(c),
				l = n(12615),
				f = n(53825),
				p = (n(8564), n(31403)),
				y = n(35944);
			function b(e) {
				return (
					(b =
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
					b(e)
				);
			}
			function m(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function h(e, t) {
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
			function g(e, t) {
				if (t && ('object' === b(t) || 'function' == typeof t)) return t;
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
			function j(e) {
				return (
					(j = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					j(e)
				);
			}
			var v = (function (e) {
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
				})(i, e);
				var t,
					n,
					r,
					o,
					s =
						((r = i),
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
								t = j(r);
							if (o) {
								var n = j(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return g(this, e);
						});
				function i() {
					return m(this, i), s.apply(this, arguments);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.base,
									n = e.quote;
								if (t.get('id') === n.get('id')) return null;
								var r = n.get('symbol') + '_' + t.get('symbol'),
									o = (0, y.jsxs)('span', {
										children: [
											(0, y.jsx)(l.Z, {name: n.get('symbol')}),
											' /',
											' ',
											(0, y.jsx)(l.Z, {name: t.get('symbol')}),
										],
									});
								return (0, y.jsx)(f.Z, {to: '/market/'.concat(r), children: o});
							},
						},
					]) && h(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			const _ = (v = (0, p.Z)(v, {
				propNames: ['quote', 'base'],
				defaultProps: {base: '1.3.0'},
			}));
			var x = n(83370),
				O = n(350),
				w = n(37065),
				P = n(112),
				k = n.n(P),
				S = n(52233),
				Z = n(43957),
				R = n(18825),
				D = n(86035),
				E = n(87718);
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
			function C(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function M(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function B(e, t) {
				return (
					(B =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					B(e, t)
				);
			}
			function T(e, t) {
				if (t && ('object' === I(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return N(e);
			}
			function N(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function A(e) {
				return (
					(A = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					A(e)
				);
			}
			function q(e, t) {
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
			function F(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? q(Object(n), !0).forEach(function (t) {
								V(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: q(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function V(e, t, n) {
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
			var L = n(54115),
				z = n(61580),
				J = n(71577),
				W = n(76772),
				Q = n(22712),
				U = n(8174),
				X = n(40840),
				G = n(25108);
			function H(e) {
				return (
					(H =
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
					H(e)
				);
			}
			function K(e, t) {
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
			function Y(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function $(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ee(e, t, n) {
				return (
					t && $(e.prototype, t),
					n && $(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function te(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && ne(e, t);
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
			function re(e) {
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
					var n,
						r = ie(e);
					if (t) {
						var o = ie(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return oe(this, n);
				};
			}
			function oe(e, t) {
				if (t && ('object' === H(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return se(e);
			}
			function se(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function ie(e) {
				return (
					(ie = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ie(e)
				);
			}
			function ae(e, t, n) {
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
			var ce,
				ue =
					((ce = function (e) {
						var t = e.worthLessSettlement,
							n = e.asset,
							r = e.shortBackingAsset,
							o = e.marketPrice,
							s = e.settlementPrice;
						switch (
							((o = X.Z.format_number(o, n.get('precision'))),
							(s = X.Z.format_number(s, n.get('precision'))),
							t)
						) {
							case !0:
								return (0, y.jsxs)('div', {
									children: [
										(0, y.jsx)(u(), {
											component: 'h2',
											content: 'exchange.settle_better_marketprice',
										}),
										(0, y.jsxs)('span', {
											children: [
												(0, y.jsx)(L.Z, {
													string: 'exchange.worth_less_settlement_warning',
													keys: [
														{
															value: (0, y.jsx)(_, {
																base: n.get('id'),
																quote: r.get('id'),
															}),
															arg: 'market_link',
														},
													],
												}),
												(0, y.jsx)('br', {}),
												'  ',
												(0, y.jsx)(u(), {content: 'exchange.price_market'}),
												':  ',
												o,
												(0, y.jsx)('br', {}),
												'  ',
												(0, y.jsx)(u(), {content: 'exchange.settle'}),
												':  ',
												s,
											],
										}),
									],
								});
							case void 0:
								return (0, y.jsx)(u(), {
									content: 'exchange.checking_for_worth_less_settlement',
								});
							default:
								return (0, y.jsxs)('div', {
									children: [
										(0, y.jsx)(u(), {
											component: 'h2',
											content: 'exchange.settle_better_settleprice',
										}),
										(0, y.jsxs)('span', {
											children: [
												(0, y.jsx)(L.Z, {
													string: 'exchange.settlement_hint',
													keys: [
														{
															value: (0, y.jsx)(_, {
																base: n.get('id'),
																quote: r.get('id'),
															}),
															arg: 'market_link',
														},
														{
															value: (0, y.jsx)(l.Z, {name: n.get('symbol')}),
															arg: 'long',
														},
													],
												}),
												(0, y.jsx)('br', {}),
												'  ',
												(0, y.jsx)(u(), {content: 'exchange.price_market'}),
												':  ',
												o,
												(0, y.jsx)('br', {}),
												'  ',
												(0, y.jsx)(u(), {content: 'exchange.settle'}),
												':  ',
												s,
											],
										}),
									],
								});
						}
					}),
					(function (e) {
						var t = (0, p.Z)(e, {propNames: ['shortBackingAsset']});
						return (0, p.Z)(function (e) {
							return (0,
							y.jsx)(t, F(F({}, e), {}, {shortBackingAsset: e.asset.getIn(['bitasset', 'options', 'short_backing_asset'])}));
						});
					})(
						(function (e) {
							!(function (e, t) {
								if ('function' != typeof t && null !== t)
									throw new TypeError(
										'Super expression must either be null or a function'
									);
								(e.prototype = Object.create(t && t.prototype, {
									constructor: {value: e, writable: !0, configurable: !0},
								})),
									Object.defineProperty(e, 'prototype', {writable: !1}),
									t && B(e, t);
							})(i, e);
							var t,
								n,
								r,
								o,
								s =
									((r = i),
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
											t = A(r);
										if (o) {
											var n = A(this).constructor;
											e = Reflect.construct(t, arguments, n);
										} else e = t.apply(this, arguments);
										return T(this, e);
									});
							function i() {
								var e;
								C(this, i);
								for (
									var t = arguments.length, n = new Array(t), r = 0;
									r < t;
									r++
								)
									n[r] = arguments[r];
								return (
									V(N((e = s.call.apply(s, [this].concat(n)))), 'state', {
										worthLessSettlement: void 0,
									}),
									e
								);
							}
							return (
								(t = i),
								(n = [
									{
										key: 'updateFlag',
										value: function () {
											var e = this,
												t = this.props,
												n = t.asset,
												r = t.shortBackingAsset,
												o = n.get('id'),
												s = r.get('id'),
												i = R.yX
													.instance()
													.db_api()
													.exec('get_order_book', [s, o, 1])
													.then(function (e) {
														return 0 === e.bids.length
															? 0
															: Number(e.bids[0].price);
													}),
												a = null,
												c = 1;
											n.get('bitasset') &&
											n.get('bitasset').get('settlement_fund') > 0
												? (a = n.get('bitasset').get('settlement_price'))
												: ((a = E.Z.extractRawFeedPrice(n)),
												  (c =
														1 -
														n
															.get('bitasset')
															.get('options')
															.get('force_settlement_offset_percent') /
															1e4));
											var u =
												new D.tA({
													base: new D.xR({
														asset_id: s,
														amount: a.getIn(['quote', 'amount']),
														preicision: r.get('precision'),
													}),
													quote: new D.xR({
														asset_id: o,
														amount: a.getIn(['base', 'amount']),
														precision: n.get('precision'),
													}),
												}).toReal() * c;
											i.then(function (t) {
												return e.setState({
													worthLessSettlement: t > u,
													marketPrice: t,
													settlementPrice: u,
												});
											});
										},
									},
									{
										key: 'componentWillMount',
										value: function () {
											this.updateFlag();
										},
									},
									{
										key: 'componentDidUpdate',
										value: function () {
											this.updateFlag();
										},
									},
									{
										key: 'render',
										value: function () {
											var e = this.props,
												t = this.state,
												n = t.worthLessSettlement,
												r = t.marketPrice,
												o = t.settlementPrice;
											return (0, y.jsx)(
												ce,
												F(
													F({}, e),
													{},
													{
														worthLessSettlement: n,
														marketPrice: r,
														settlementPrice: o,
													}
												)
											);
										},
									},
								]) && M(t.prototype, n),
								Object.defineProperty(t, 'prototype', {writable: !1}),
								i
							);
						})(r.PureComponent)
					)),
				le = (function (e) {
					te(n, e);
					var t = re(n);
					function n() {
						var e;
						return (
							Y(this, n),
							((e = t.call(this)).state = {amount: 0}),
							(e.onSubmit = e.onSubmit.bind(se(e))),
							e
						);
					}
					return (
						ee(n, [
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									e.asset &&
										this.props.asset &&
										e.asset.get('id') !== this.props.asset.get('id') &&
										this.setState({amount: 0});
								},
							},
							{
								key: 'getSettlementInfo',
								value: function () {
									var e = this.props,
										t = e.getDynamicObject,
										n = e.asset,
										r = e.core,
										o = t(n.get('dynamic_asset_data_id')),
										s = o && o.size ? o.get('current_supply') : 0,
										i =
											r && r.size
												? r.getIn(['parameters', 'maintenance_interval'])
												: 0,
										a = n.get('bitasset').toJS(),
										c = a.force_settled_volume,
										u = s * (a.options.maximum_force_settlement_volume / 1e4);
									return {
										maxSettlementVolume: u,
										remainingVolume: c ? u - c : u,
										maintenanceInterval: i,
										settlementDelay: a.options.force_settlement_delay_sec,
									};
								},
							},
							{
								key: 'onAmountChanged',
								value: function (e) {
									var t = e.amount;
									e.asset, this.setState({amount: t});
								},
							},
							{
								key: 'onSubmit',
								value: function (e) {
									var t = this.state.amount;
									e.preventDefault(),
										this.props.hideModal(),
										(t = parseInt(
											t * Math.pow(10, this.props.asset.get('precision'))
										));
									var n = O.Z.new_transaction();
									return (
										n.add_type_operation('asset_settle', {
											fee: {amount: 0, asset_id: 0},
											account: this.props.account.get('id'),
											amount: {amount: t, asset_id: this.props.asset.get('id')},
										}),
										w.Z.process_transaction(n, null, !0)
											.then(function (e) {
												return !0;
											})
											.catch(function (e) {
												return G.error('asset settle error: ', e), !1;
											})
									);
								},
							},
							{
								key: '_useMaxValue',
								value: function (e) {
									this.setState({
										amount: e / Math.pow(10, this.props.asset.get('precision')),
									});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.asset,
										n = e.account,
										o = this.state.amount;
									if (!t) return null;
									var s =
											t && t.getIn(['bitasset', 'options'])
												? t.getIn(['bitasset', 'options']).toJS()
												: null,
										i = t.get('bitasset').get('settlement_fund') > 0,
										a = 0;
									i ||
										(a =
											t
												.get('bitasset')
												.get('options')
												.get('force_settlement_offset_percent') / 100);
									var c = t.get('id'),
										l = n.get('balances'),
										f = X.Z.replaceName(t),
										p = f.name,
										b = (f.prefix || '') + p,
										m = null,
										h = 0;
									l &&
										l.forEach(function (e) {
											var t = S.BQ.getObject(e);
											if (!t.get('balance')) return null;
											t.get('asset_type') === c &&
												((m = e), (h = t.get('balance')));
										});
									var d = (0, y.jsxs)('span', {
											children: [
												(0, y.jsx)(u(), {content: 'exchange.balance'}),
												': ',
												m
													? (0, y.jsx)('span', {
															className: 'underline',
															onClick: this._useMaxValue.bind(this, h),
															children: (0, y.jsx)(x.Z, {balance: m}),
													  })
													: '0 ' + t.get('symbol'),
											],
										}),
										g = !1;
									o > h / Math.pow(10, this.props.asset.get('precision')) &&
										(g = !0);
									var j = [
											(0, y.jsx)(z.Z, {
												title: g ? k().translate('tooltip.lack_funds') : null,
												children: (0, y.jsx)(
													J.Z,
													{
														type: 'primary',
														onClick: this.onSubmit,
														disabled: g,
														children: k().translate('modal.settle.submit'),
													},
													'submit'
												),
											}),
											(0, y.jsx)(
												J.Z,
												{
													onClick: this.props.hideModal,
													children: k().translate('modal.close'),
												},
												'close'
											),
										],
										v = this.getSettlementInfo(),
										_ = v.maxSettlementVolume,
										O = v.remainingVolume,
										w = v.settlementDelay,
										P = v.maintenanceInterval,
										R = i ? 0 : (w + Math.floor(o / _) * P) / 3600,
										D = t.getIn(['bitasset', 'is_prediction_market']),
										E = D
											? (0, y.jsx)(W.Z, {
													message: k().translate(
														'tooltip.settle_market_prediction'
													),
													type: 'info',
													showIcon: !0,
											  })
											: (0, y.jsxs)(r.Fragment, {
													children: [
														i
															? (0, y.jsx)(W.Z, {
																	message: k().translate(
																		'exchange.settle_delay_globally_settled'
																	),
																	type: 'warning',
																	showIcon: !0,
															  })
															: (0, y.jsx)(W.Z, {
																	message: k().translate(
																		'exchange.settle_delay',
																		{hours: s.force_settlement_delay_sec / 3600}
																	),
																	description: R
																		? k().translate('modal.settle.delay', {
																				amount: R,
																		  })
																		: null,
																	type: 'info',
																	showIcon: !0,
															  }),
														(0, y.jsx)(ue, {asset: c}),
														(0, y.jsx)('br', {}),
														i
															? null
															: (0, y.jsx)(u(), {
																	component: 'div',
																	content: 'exchange.settle_offset',
																	offset: a,
															  }),
														(0, y.jsx)('br', {}),
														(0, y.jsxs)(Q.Z, {
															className: 'full-width',
															layout: 'vertical',
															children: [
																(0, y.jsx)(Z.Z, {
																	label: 'modal.settle.amount',
																	amount: o,
																	onChange: this.onAmountChanged.bind(this),
																	display_balance: d,
																	asset: c,
																	assets: [c],
																	tabIndex: 1,
																	style: o > O ? {'margin-bottom': '0'} : {},
																}),
																o > O
																	? (0, y.jsxs)(r.Fragment, {
																			children: [
																				(0, y.jsx)(u(), {
																					className: 'facolor-info',
																					content: 'modal.settle.max_volume',
																					amount: _,
																					asset: b,
																				}),
																				(0, y.jsx)('br', {}),
																				(0, y.jsx)(u(), {
																					className: 'facolor-info',
																					content:
																						'modal.settle.remaining_volume',
																					amount: O,
																					asset: b,
																				}),
																			],
																	  })
																	: null,
															],
														}),
													],
											  });
									return (0, y.jsx)(U.Z, {
										title: k().translate('modal.settle.title', {asset: b}),
										visible: this.props.visible,
										id: this.props.modalId,
										footer: D ? null : j,
										onCancel: this.props.hideModal,
										overlay: !0,
										ref: 'settlement_modal',
										children: E,
									});
								},
							},
						]),
						n
					);
				})(r.Component);
			ae(le, 'propTypes', {
				asset: a().instanceOf(s().Map),
				core: a().instanceOf(s().Map),
				account: a().instanceOf(s().Map),
			}),
				ae(le, 'defaultProps', {
					asset: s().Map(),
					core: s().Map(),
					account: s().Map(),
				}),
				(le = (0, p.Z)(le, {
					propNames: ['asset', 'core'],
					withDynamic: !0,
					defaultProps: {core: '2.0.0'},
				}));
			const fe = (function (e) {
				te(n, e);
				var t = re(n);
				function n() {
					return Y(this, n), t.apply(this, arguments);
				}
				return (
					ee(n, [
						{
							key: 'render',
							value: function () {
								return (0, y.jsx)(
									le,
									(function (e) {
										for (var t = 1; t < arguments.length; t++) {
											var n = null != arguments[t] ? arguments[t] : {};
											t % 2
												? K(Object(n), !0).forEach(function (t) {
														ae(e, t, n[t]);
												  })
												: Object.getOwnPropertyDescriptors
												? Object.defineProperties(
														e,
														Object.getOwnPropertyDescriptors(n)
												  )
												: K(Object(n)).forEach(function (t) {
														Object.defineProperty(
															e,
															t,
															Object.getOwnPropertyDescriptor(n, t)
														);
												  });
										}
										return e;
									})({}, this.props)
								);
							},
						},
					]),
					n
				);
			})(r.Component);
		},
	},
]);
