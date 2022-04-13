'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[855],
	{
		98063: (t, e, a) => {
			a.d(e, {Z: () => p}), a(67294);
			var o = a(26170),
				n = a(35944),
				r = ['title', 'level', 'showDivider'];
			function i(t, e) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					e &&
						(o = o.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						a.push.apply(a, o);
				}
				return a;
			}
			function s(t) {
				for (var e = 1; e < arguments.length; e++) {
					var a = null != arguments[e] ? arguments[e] : {};
					e % 2
						? i(Object(a), !0).forEach(function (e) {
								l(t, e, a[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
						: i(Object(a)).forEach(function (e) {
								Object.defineProperty(
									t,
									e,
									Object.getOwnPropertyDescriptor(a, e)
								);
						  });
				}
				return t;
			}
			function l(t, e, a) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: a,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = a),
					t
				);
			}
			var c = o.Z.Title,
				u = {name: 'blceb2', styles: 'margin:0px !important'};
			const p = function (t) {
				var e = t.title,
					a = t.level,
					o = t.showDivider,
					i = (function (t, e) {
						if (null == t) return {};
						var a,
							o,
							n = (function (t, e) {
								if (null == t) return {};
								var a,
									o,
									n = {},
									r = Object.keys(t);
								for (o = 0; o < r.length; o++)
									(a = r[o]), e.indexOf(a) >= 0 || (n[a] = t[a]);
								return n;
							})(t, e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(t);
							for (o = 0; o < r.length; o++)
								(a = r[o]),
									e.indexOf(a) >= 0 ||
										(Object.prototype.propertyIsEnumerable.call(t, a) &&
											(n[a] = t[a]));
						}
						return n;
					})(t, r);
				return (0, n.jsx)('div', {
					css: function (t) {
						return {
							padding: '1rem 2rem',
							borderBottom: o
								? '1px solid '.concat(t.colors.borderColor)
								: 'none',
							color: t.colors.themeOpositeColor,
						};
					},
					children: (0, n.jsx)(
						c,
						s(s({css: u, level: a}, i), {}, {children: e})
					),
				});
			};
		},
		50674: (t, e, a) => {
			a.d(e, {Z: () => Y});
			var o = a(67294),
				n = a(45697),
				r = a.n(n),
				i = a(88209),
				s = a.n(i),
				l = a(8564),
				c = a(96168),
				u = a(79876),
				p = a(40840),
				d = a(350),
				h = a(37065),
				b = a(112),
				_ = a.n(b),
				g = a(43393),
				f = a.n(g),
				m = a(71577),
				v = a(8174),
				y = a(87718),
				j = a(58074),
				O = a.n(j),
				k = a(17076),
				w = a(43957),
				C = a(62746),
				x = a(52468),
				P = a(22712),
				S = a(71230),
				A = a(15746),
				R = a(55019),
				Z = a(9676),
				B = a(61580),
				I = a(99177),
				L = a(8193),
				T = a(35944);
			function F(t) {
				var e = t.accountObj,
					a = t.backingAssetObj,
					n = t.collateralBalanceObj,
					r = t.debtBalanceObj,
					i = t.quoteAssetObj,
					s = t.newPosition,
					l = t.errors,
					c = t.collateral,
					u = t.collateral_ratio,
					d = t.debtAmount,
					h = t.backingPrecision,
					b = t.maintenanceRatio,
					g = t.remainingBackingBalance,
					f = t.remainingDebtBalance,
					m = t.target_collateral_ratio,
					v = t.unlockedInputType,
					j = t.disableHelp,
					F = t.isRatioLocked,
					q = t.isOriginalBelowMCR,
					M = t.isPredictionMarket,
					D = t.isValid,
					N = t.useTargetCollateral,
					E = t.onPayDebt,
					U = t.onMaximizeCollatereal,
					z = t.onBorrowChange,
					J = t.onLockChangeDebt,
					H = t.onCollateralChange,
					W = t.onLockChangeCollateral,
					V = t.onRatioChange,
					G = (t.onLockChangeCR, t.onSetUseTCR),
					K = t.onTCRatioChange,
					Q = p.Z.get_asset_precision(i.get('precision')),
					X = s
						? (0, T.jsx)(C.Z, {
								noPopOver: !0,
								noTip: !0,
								quote_amount: b * d * Q,
								quote_asset: i.get('id'),
								base_asset: a.get('id'),
								base_amount: c * h,
						  })
						: null,
					Y = (0, T.jsx)('div', {
						style: {textAlign: 'center'},
						children: (0, T.jsx)(O(), {
							component: 'h3',
							content: 'borrow.no_valid',
							asset_symbol: i.get('symbol'),
						}),
					}),
					$ = (0, T.jsx)('span', {
						children: (0, T.jsxs)('span', {
							children: [
								0 != c
									? (0, T.jsxs)('span', {
											children: [
												(0, T.jsx)(O(), {
													component: 'a',
													onClick: E.bind(this),
													content: 'borrow.pay_max_debt',
												}),
												' ',
											],
									  })
									: null,
								(0, T.jsx)(O(), {
									component: 'span',
									content: 'transfer.available',
								}),
								':',
								' ',
								(0, T.jsx)('span', {
									children: r.id
										? (0, T.jsx)(k.Z, {amount: f, asset: i.get('id')})
										: (0, T.jsx)(k.Z, {amount: 0, asset: i.get('id')}),
								}),
							],
						}),
					}),
					tt = (0, T.jsx)('span', {
						children: (0, T.jsxs)('span', {
							children: [
								(0, T.jsxs)('span', {
									children: [
										(0, T.jsx)(O(), {
											component: 'a',
											onClick: U.bind(this),
											content: 'borrow.use_max',
										}),
										' ',
									],
								}),
								(0, T.jsx)(O(), {
									component: 'span',
									content: 'transfer.available',
								}),
								':',
								' ',
								(0, T.jsx)('span', {
									children: n.id
										? (0, T.jsx)(k.Z, {amount: g, asset: a.get('id')})
										: (0, T.jsx)(k.Z, {amount: 0, asset: a.get('id')}),
								}),
							],
						}),
					});
				return D
					? (0, T.jsxs)('div', {
							style: {textAlign: 'left'},
							children: [
								j
									? null
									: (0, T.jsx)('div', {
											style: {paddingBottom: '1rem'},
											children: (0, T.jsx)(x.Z, {
												path:
													'components/' +
													(M ? 'BorrowModalPrediction' : 'BorrowModal'),
												debt: i.get('symbol'),
												collateral: a.get('symbol'),
												borrower: e.get('name'),
												mr: b,
											}),
									  }),
								!M && q
									? (0, T.jsx)(O(), {
											component: 'h6',
											className: 'has-warning',
											content: 'borrow.errors.below_info',
									  })
									: null,
								M
									? null
									: (0, T.jsxs)('div', {
											style: {paddingTop: '1rem', paddingBottom: '1rem'},
											children: [
												(0, T.jsxs)('div', {
													className: 'borrow-price-feeds',
													children: [
														(0, T.jsxs)('span', {
															className: 'borrow-price-label',
															children: [
																(0, T.jsx)(O(), {
																	content: 'transaction.feed_price',
																}),
																': ',
															],
														}),
														(0, T.jsx)(C.Z, {
															noPopOver: !0,
															quote_amount: y.Z.extractRawFeedPrice(i).getIn([
																'base',
																'amount',
															]),
															quote_asset: y.Z.extractRawFeedPrice(i).getIn([
																'base',
																'asset_id',
															]),
															base_asset: y.Z.extractRawFeedPrice(i).getIn([
																'quote',
																'asset_id',
															]),
															base_amount: y.Z.extractRawFeedPrice(i).getIn([
																'quote',
																'amount',
															]),
														}),
													],
												}),
												(0, T.jsx)('b', {}),
												(0, T.jsxs)('div', {
													className:
														'borrow-price-final ' +
														(l.below_maintenance
															? 'has-error'
															: l.close_maintenance
															? 'has-warning'
															: ''),
													children: [
														(0, T.jsxs)('span', {
															className: 'borrow-price-label',
															children: [
																(0, T.jsx)(O(), {
																	content: 'exchange.your_price',
																}),
																': ',
															],
														}),
														X,
													],
												}),
											],
									  }),
								(0, T.jsxs)(P.Z, {
									className: 'full-width',
									layout: 'vertical',
									children: [
										(0, T.jsx)(w.Z, {
											label: 'transaction.borrow_amount',
											amount: d.toString(),
											onChange: z.bind(this),
											asset: i.get('id'),
											assets: [i.get('id')],
											display_balance: $,
											placeholder: '0.0',
											tabIndex: 1,
											lockStatus: 'debt' != v && !F,
											onLockChange: J.bind(this),
										}),
										(0, T.jsx)(w.Z, {
											label: 'transaction.collateral',
											amount: c.toString(),
											onChange: H.bind(this),
											asset: a.get('id'),
											assets: [a.get('id')],
											display_balance: tt,
											placeholder: '0.0',
											tabIndex: 2,
											lockStatus: 'collateral' != v && !F,
											onLockChange: W.bind(this),
											validateStatus: l.collateral_balance ? 'error' : '',
											help: l.collateral_balance ? l.collateral_balance : null,
										}),
										M
											? null
											: (0, T.jsxs)(o.Fragment, {
													children: [
														(0, T.jsxs)(S.Z, {
															gutter: 16,
															children: [
																(0, T.jsx)(A.Z, {
																	span: 12,
																	children: (0, T.jsx)(P.Z.Item, {
																		label: _().translate('borrow.coll_ratio'),
																		validateStatus: l.close_maintenance
																			? 'warning'
																			: l.below_maintenance
																			? 'error'
																			: null,
																		help: l.close_maintenance
																			? l.close_maintenance
																			: l.below_maintenance
																			? l.below_maintenance
																			: null,
																		children: (0, T.jsx)(R.Z, {
																			value: 0 == u ? '' : u,
																			tabIndex: 3,
																			onChange: V.bind(this),
																			className:
																				'input-group-unbordered-before',
																		}),
																	}),
																}),
																(0, T.jsx)(A.Z, {
																	span: 12,
																	children: (0, T.jsxs)(P.Z.Item, {
																		validateStatus: l.tcr_below_maintenance
																			? 'error'
																			: '',
																		help: l.tcr_below_maintenance
																			? l.tcr_below_maintenance
																			: null,
																		children: [
																			(0, T.jsxs)(R.Z.Group, {
																				compact: !0,
																				style: {marginBottom: 8},
																				children: [
																					(0, T.jsx)(Z.Z, {
																						onClick: G.bind(this),
																						checked: N,
																						tabIndex: 4,
																						children: (0, T.jsx)(O(), {
																							content:
																								'borrow.enable_target_collateral_ratio',
																						}),
																					}),
																					(0, T.jsx)(B.Z, {
																						title: _().translate(
																							'tooltip.target_collateral_ratio'
																						),
																						children: (0, T.jsx)(L.KpA, {}),
																					}),
																				],
																			}),
																			N
																				? (0, T.jsx)(R.Z, {
																						value: isNaN(m) ? '0' : m,
																						tabIndex: 5,
																						onChange: K.bind(this),
																				  })
																				: null,
																		],
																	}),
																}),
															],
														}),
														(0, T.jsx)(P.Z.Item, {
															label: 'Ratio Slider',
															children: (0, T.jsx)(I.Z, {
																step: 0.01,
																min: 0,
																max: 12 * b,
																value: u,
																onChange: V.bind(this),
															}),
														}),
													],
											  }),
									],
								}),
							],
					  })
					: Y;
			}
			var q = a(80563);
			function M(t) {
				return (
					(M =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
							  }
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					M(t)
				);
			}
			function D(t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			}
			function N(t, e) {
				for (var a = 0; a < e.length; a++) {
					var o = e[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function E(t, e, a) {
				return (
					e && N(t.prototype, e),
					a && N(t, a),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					t
				);
			}
			function U(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: {value: t, writable: !0, configurable: !0},
				})),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					e && z(t, e);
			}
			function z(t, e) {
				return (
					(z =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					z(t, e)
				);
			}
			function J(t) {
				var e = (function () {
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
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var a,
						o = V(t);
					if (e) {
						var n = V(this).constructor;
						a = Reflect.construct(o, arguments, n);
					} else a = o.apply(this, arguments);
					return H(this, a);
				};
			}
			function H(t, e) {
				if (e && ('object' === M(e) || 'function' == typeof e)) return e;
				if (void 0 !== e)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return W(t);
			}
			function W(t) {
				if (void 0 === t)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return t;
			}
			function V(t) {
				return (
					(V = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					V(t)
				);
			}
			var G,
				K,
				Q,
				X = (function (t) {
					U(a, t);
					var e = J(a);
					function a(t) {
						var o;
						return (
							D(this, a),
							((o = e.call(this, t)).state = o._initialState(t)),
							(o._onSubmit = o._onSubmit.bind(W(o))),
							o
						);
					}
					return (
						E(a, [
							{
								key: '_initialState',
								value: function (t) {
									var e = t ? this._getCurrentPosition(t) : {};
									if (e.collateral) {
										var a = p.Z.get_asset_amount(e.debt, t.quoteAssetObj),
											o = p.Z.get_asset_amount(e.collateral, t.backingAssetObj),
											n = isNaN(e.target_collateral_ratio)
												? 0
												: e.target_collateral_ratio / 1e3;
										return {
											debtAmount: a ? a.toString() : null,
											collateral: o ? o.toString() : null,
											collateral_ratio: this._getCollateralRatio(a, o),
											target_collateral_ratio: n,
											errors: this._getInitialErrors(),
											useTargetCollateral: n > 0,
											original_position: {
												debt: a,
												collateral: o,
												target_collateral_ratio: n,
											},
											unlockedInputType: 'collateral',
											isRatioLocked: !0,
										};
									}
									return {
										debtAmount: 0,
										collateral: 0,
										collateral_ratio: this._getInitialCollateralRatio(t),
										target_collateral_ratio: this._getMaintenanceRatio(),
										errors: this._getInitialErrors(),
										useTargetCollateral: !1,
										original_position: {debt: 0, collateral: 0},
										unlockedInputType: 'debt',
										isRatioLocked: !0,
									};
								},
							},
							{
								key: 'componentDidUpdate',
								value: function () {
									c.Z.rebuild();
								},
							},
							{
								key: 'componentDidMount',
								value: function () {
									var t = this._initialState(this.props);
									this.setState(t), this._setUpdatedPosition(t);
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (t, e) {
									return !(
										this.props.visible === t.visible &&
										p.Z.are_equal_shallow(e, this.state) &&
										f().is(t.quoteAssetObj, this.props.quoteAssetObj) &&
										!t.backingAssetObj.get('symbol') !==
											this.props.backingAssetObj.get('symbol') &&
										f().is(t.accountObj, this.props.accountObj) &&
										f().is(t.call_orders, this.props.call_orders) &&
										this.state.unlockedInputType === e.unlockedInputType
									);
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (t) {
									var e = this.state,
										a = e.debtAmount,
										o = e.collateral,
										n = e.collateral_ratio;
									if (
										t.accountObj !== this.props.accountObj ||
										t.hasCallOrders !== this.props.hasCallOrders ||
										t.quoteAssetObj.get('id') !==
											this.props.quoteAssetObj.get('id')
									) {
										var r = this._initialState(t),
											i = !1;
										(a || o || n) &&
											((r.debtAmount = a),
											(r.collateral = o),
											(r.collateral_ratio = n),
											(i = !0)),
											this.setState(r),
											i && this._validateFields(r);
									}
								},
							},
							{
								key: '_getInitialErrors',
								value: function () {
									return {collateral_balance: null, ratio_too_high: null};
								},
							},
							{
								key: '_getMaintenanceRatio',
								value: function () {
									return (
										this.props.quoteAssetObj.getIn([
											'bitasset',
											'current_feed',
											'maintenance_collateral_ratio',
										]) / 1e3
									);
								},
							},
							{
								key: 'confirmClicked',
								value: function (t) {
									t.preventDefault(), s().publish(this.props.modalId, 'close');
								},
							},
							{
								key: '_onBorrowChange',
								value: function (t) {
									var e = this._getFeedPrice(),
										a = t.amount.replace(/,/g, ''),
										o = {
											debtAmount: a,
											collateral: this.state.isRatioLocked
												? (
														this.state.collateral_ratio *
														(a / e).toFixed(
															this.props.backingAssetObj.get('precision')
														)
												  ).toFixed(this.props.backingAssetObj.get('precision'))
												: this.state.collateral,
											collateral_ratio: this.state.isRatioLocked
												? this.state.collateral_ratio
												: this.state.collateral / (a / e),
										};
									this.setState(o),
										this._validateFields(o),
										this._setUpdatedPosition(o);
								},
							},
							{
								key: '_onCollateralChange',
								value: function (t) {
									var e = this.state,
										a = e.isRatioLocked,
										o = e.collateral_ratio,
										n = t.amount.replace(/,/g, ''),
										r = this._getFeedPrice(),
										i = a ? o : n / (this.state.debtAmount / r),
										s = a
											? ((n * r) / i).toFixed(
													this.props.backingAssetObj.get('precision')
											  )
											: this.state.debtAmount,
										l = this._isPredictionMarket(this.props)
											? {debtAmount: n, collateral: n, collateral_ratio: 1}
											: {debtAmount: s, collateral: n, collateral_ratio: i};
									this.setState(l),
										this._validateFields(l),
										this._setUpdatedPosition(l);
								},
							},
							{
								key: '_onTargetRatioChange',
								value: function (t) {
									var e = t.target.value;
									new RegExp(/[[:digit:]]/).test(e) ||
										(e = e.replace(/[^0-9.]/g, ''));
									var a = {target_collateral_ratio: e};
									this.setState(a),
										this._validateFields(a),
										this._setUpdatedPosition(a);
								},
							},
							{
								key: '_onRatioChange',
								value: function (t) {
									var e,
										a,
										o = this._getFeedPrice(),
										n = 0;
									t.target
										? (new RegExp(/[[:digit:]]/).test(t.target.value) ||
												(t.target.value = t.target.value.replace(
													/[^0-9.]/g,
													''
												)),
										  (n = t.target.value))
										: (n = t),
										'debt' == this.state.unlockedInputType
											? ((e = (
													(this.state.collateral * o) /
													parseFloat(n)
											  ).toFixed(this.props.backingAssetObj.get('precision'))),
											  (a = this.state.collateral))
											: ((e = this.state.debtAmount),
											  (a = (
													(this.state.debtAmount / o) *
													parseFloat(n)
											  ).toFixed(
													this.props.backingAssetObj.get('precision')
											  )));
									var r = {debtAmount: e, collateral: a, collateral_ratio: n};
									this.setState(r),
										this._validateFields(r),
										this._setUpdatedPosition(r);
								},
							},
							{
								key: '_maximizeCollateral',
								value: function () {
									var t = this.props
											? this._getCurrentPosition(this.props)
											: {},
										e = 0;
									t.collateral &&
										(e = p.Z.convert_satoshi_to_typed(
											t.collateral,
											this.props.backingAssetObj
										));
									var a = p.Z.convert_satoshi_to_typed(
											this.props.collateralBalanceObj.get('balance'),
											this.props.backingAssetObj
										),
										o = Math.max(Math.floor(a + e - 10), 0);
									this._onCollateralChange(new Object({amount: o.toString()}));
								},
							},
							{
								key: '_maximizeDebt',
								value: function () {
									var t = this.props
											? this._getCurrentPosition(this.props)
											: {},
										e = 0;
									t.collateral &&
										(e = p.Z.get_asset_amount(
											t.collateral,
											this.props.backingAssetObj
										));
									var a =
											this.props.collateralBalanceObj.get('balance') /
												p.Z.get_asset_precision(this.props.backingAssetObj) +
											e -
											10,
										o = {
											debtAmount:
												(a / this.state.collateral_ratio) *
												this._getFeedPrice(),
											collateral: a,
											collateral_ratio: this.state.collateral_ratio,
										};
									this.setState(o),
										this._validateFields(o),
										this._setUpdatedPosition(o);
								},
							},
							{
								key: '_payDebt',
								value: function () {
									var t = this.props
										? this._getCurrentPosition(this.props)
										: {debt: 0};
									if (!(t.debt <= 0)) {
										var e = p.Z.get_asset_amount(
											Math.max(
												t.debt - this.props.debtBalanceObj.get('balance'),
												0
											),
											this.props.quoteAssetObj
										);
										this._onBorrowChange({amount: e.toString()});
									}
								},
							},
							{
								key: '_setUpdatedPosition',
								value: function (t) {
									this.setState({
										newPosition:
											parseFloat(t.debtAmount) / parseFloat(t.collateral),
									});
								},
							},
							{
								key: '_validateFields',
								value: function (t) {
									var e = this._getInitialErrors(),
										a = this.state.original_position,
										o = this.props.collateralBalanceObj
											? this.props.collateralBalanceObj.toJS()
											: {balance: 0},
										n = this._getMaintenanceRatio(),
										r = this._getCollateralRatio(a.debt, a.collateral),
										i = a.collateral > 0 && r < n;
									parseFloat(t.collateral) - a.collateral >
										p.Z.get_asset_amount(
											o.balance,
											this.props.backingAssetObj.toJS()
										) &&
										(e.collateral_balance = _().translate(
											'borrow.errors.collateral'
										)),
										t.target_collateral_ratio &&
											t.target_collateral_ratio < n &&
											(e.tcr_below_maintenance = _().translate(
												'borrow.errors.below_mcr_tcr',
												{mr: n}
											)),
										i && t.debtAmount > a.debt
											? (e.below_maintenance = _().translate(
													'borrow.errors.increased_debt_on_margin_call'
											  ))
											: i && parseFloat(t.collateral_ratio) <= parseFloat(r)
											? (e.below_maintenance = _().translate(
													'borrow.errors.below_ratio_mcr_update',
													{ocr: r.toFixed(4)}
											  ))
											: !i &&
											  parseFloat(t.collateral_ratio) <
													(this._isPredictionMarket(this.props) ? 1 : n)
											? (e.below_maintenance = _().translate(
													'borrow.errors.below',
													{mr: n}
											  ))
											: parseFloat(t.collateral_ratio) <
													(this._isPredictionMarket(this.props)
														? 1
														: n + 0.5) &&
											  (e.close_maintenance = _().translate(
													'borrow.errors.close',
													{mr: n}
											  )),
										this.setState({errors: e});
								},
							},
							{
								key: '_onSubmit',
								value: function (t) {
									t.preventDefault(), this.props.hideModal();
									var e = p.Z.get_asset_precision(
											this.props.quoteAssetObj.get('precision')
										),
										a = p.Z.get_asset_precision(
											this.props.backingAssetObj.get('precision')
										),
										o = this._getCurrentPosition(this.props),
										n = !1;
									void 0 !== this.state.target_collateral_ratio &&
										this.state.target_collateral_ratio > 0 &&
										this.state.useTargetCollateral &&
										(n = {
											target_collateral_ratio: parseInt(
												1e3 * this.state.target_collateral_ratio,
												10
											),
										});
									var r = parseInt(
											this.state.collateral * a - o.collateral,
											10
										),
										i = parseInt(this.state.debtAmount * e - o.debt, 10);
									0 == r && 0 == i && (r = 1);
									var l = d.Z.new_transaction();
									n
										? l.add_type_operation('call_order_update', {
												fee: {amount: 0, asset_id: 0},
												funding_account: this.props.accountObj.get('id'),
												delta_collateral: {
													amount: r,
													asset_id: this.props.backingAssetObj.get('id'),
												},
												delta_debt: {
													amount: i,
													asset_id: this.props.quoteAssetObj.get('id'),
												},
												extensions: n,
										  })
										: l.add_type_operation('call_order_update', {
												fee: {amount: 0, asset_id: 0},
												funding_account: this.props.accountObj.get('id'),
												delta_collateral: {
													amount: r,
													asset_id: this.props.backingAssetObj.get('id'),
												},
												delta_debt: {
													amount: i,
													asset_id: this.props.quoteAssetObj.get('id'),
												},
										  }),
										h.Z.process_transaction(l, null, !0).catch(function (t) {}),
										s().publish(this.props.modalId, 'close');
								},
							},
							{
								key: '_getCurrentPosition',
								value: function (t) {
									var e = {collateral: null, debt: null};
									return (
										t &&
											t.hasCallOrders &&
											t.call_orders &&
											(e = (e = t.call_orders
												.filter(function (t) {
													return !!t;
												})
												.find(function (e) {
													return (
														e.getIn(['call_price', 'quote', 'asset_id']) ===
														t.quoteAssetObj.get('id')
													);
												}))
												? e.toJS()
												: {collateral: null, debt: null}),
										e
									);
								},
							},
							{
								key: '_getFeedPrice',
								value: function () {
									return this.props
										? this._isPredictionMarket(this.props)
											? 1
											: 1 /
											  p.Z.get_asset_price(
													y.Z.extractRawFeedPrice(
														this.props.quoteAssetObj
													).getIn(['quote', 'amount']),
													this.props.backingAssetObj,
													y.Z.extractRawFeedPrice(
														this.props.quoteAssetObj
													).getIn(['base', 'amount']),
													this.props.quoteAssetObj
											  )
										: 1;
								},
							},
							{
								key: '_getInitialCollateralRatio',
								value: function (t) {
									return this._isPredictionMarket(t)
										? 1
										: 2 * this._getMaintenanceRatio();
								},
							},
							{
								key: '_getCollateralRatio',
								value: function (t, e) {
									return e / (t / this._getFeedPrice());
								},
							},
							{
								key: '_isPredictionMarket',
								value: function (t) {
									return t.quoteAssetObj.getIn([
										'bitasset',
										'is_prediction_market',
									]);
								},
							},
							{
								key: '_setUseTargetCollateral',
								value: function () {
									this.setState({
										useTargetCollateral: !this.state.useTargetCollateral,
									});
								},
							},
							{
								key: '_onLockChange',
								value: function (t) {
									this.setState({isRatioLocked: !1, unlockedInputType: t});
								},
							},
							{
								key: '_onLockCR',
								value: function () {
									this.setState({isRatioLocked: !this.state.isRatioLocked});
								},
							},
							{
								key: 'render',
								value: function () {
									var t = this,
										e = this.props,
										a = e.quoteAssetObj,
										o = e.backingAssetObj,
										n = e.debtBalanceObj,
										r = e.collateralBalanceObj,
										i = this.state,
										s = i.debtAmount,
										l = i.collateral,
										c = i.collateral_ratio,
										u = i.target_collateral_ratio,
										d = i.errors,
										h = i.original_position,
										b = i.useTargetCollateral;
									(c && !isNaN(c) && c > 0 && c < 1e3) || (c = 0),
										-1 != c.toString().indexOf('.') &&
											c.toString().split('.')[1].length > 2 &&
											(c =
												c.toString().split('.')[0] +
												'.' +
												c.toString().split('.')[1].substr(0, 2)),
										-1 != u.toString().indexOf('.') &&
											u.toString().split('.')[1].length > 2 &&
											(u =
												u.toString().split('.')[0] +
												'.' +
												u.toString().split('.')[1].substr(0, 2)),
										(n = n ? n.toJS() : {balance: 0, id: null}),
										(r = r ? r.toJS() : {balance: 0, id: null});
									var g = p.Z.get_asset_precision(
											this.props.backingAssetObj.get('precision')
										),
										f = p.Z.get_asset_precision(
											this.props.quoteAssetObj.get('precision')
										),
										y = this._getCurrentPosition(this.props),
										j = parseInt(this.state.collateral * g - y.collateral, 10),
										O = parseInt(this.state.debtAmount * f - y.debt, 10),
										k = r.balance - j,
										w = n.balance + O,
										C = this._getFeedPrice(),
										x = this._getMaintenanceRatio(),
										P = this._isPredictionMarket(this.props),
										S =
											h.collateral > 0 &&
											this._getCollateralRatio(h.debt, h.collateral) < x,
										A = [];
									return (
										!P && isNaN(C)
											? A.push(
													(0, T.jsx)(m.Z, {
														tabIndex: 6,
														onClick: this.props.hideModal,
														children: _().translate('accountObj.perm.cancel'),
													})
											  )
											: (A.push(
													(0, T.jsx)(
														m.Z,
														{
															tabIndex: 6,
															type: 'primary',
															onClick: this._onSubmit,
															children: _().translate('borrow.adjust'),
														},
														'submit'
													)
											  ),
											  A.push(
													(0, T.jsx)(
														m.Z,
														{
															tabIndex: 7,
															onClick: function () {
																t.setState(t._initialState(t.props));
															},
															children: _().translate('wallet.reset'),
														},
														'cancel'
													)
											  )),
										(0, T.jsx)(v.Z, {
											title: _().translate('borrow.title', {
												asset_symbol: a.get('symbol'),
											}),
											visible: this.props.visible,
											onCancel: this.props.hideModal,
											footer: A,
											children: (0, T.jsx)(F, {
												accountObj: this.props.accountObj,
												backingAssetObj: o,
												collateralBalanceObj: r,
												debtBalanceObj: n,
												quoteAssetObj: a,
												newPosition: this.state.newPosition || null,
												errors: d,
												collateral: l,
												collateral_ratio: c,
												debtAmount: s,
												backingPrecision: g,
												maintenanceRatio: x,
												remainingBackingBalance: k,
												remainingDebtBalance: w,
												target_collateral_ratio: u,
												unlockedInputType: this.state.unlockedInputType,
												disableHelp: this.props.disableHelp,
												isRatioLocked: this.state.isRatioLocked,
												isOriginalBelowMCR: S,
												isPredictionMarket: P,
												isValid: P || (!P && !isNaN(C)),
												useTargetCollateral: b,
												onBorrowChange: this._onBorrowChange.bind(this),
												onCollateralChange: this._onCollateralChange.bind(this),
												onMaximizeCollatereal:
													this._maximizeCollateral.bind(this),
												onRatioChange: this._onRatioChange.bind(this),
												onLockChangeCR: this._onLockCR.bind(this),
												onLockChangeCollateral: this._onLockChange.bind(
													this,
													'debt'
												),
												onLockChangeDebt: this._onLockChange.bind(
													this,
													'collateral'
												),
												onPayDebt: this._payDebt.bind(this),
												onTCRatioChange: this._onTargetRatioChange.bind(this),
												onSetUseTCR: this._setUseTargetCollateral.bind(this),
											}),
										})
									);
								},
							},
						]),
						a
					);
				})(o.Component);
			(G = X),
				(K = 'propTypes'),
				(Q = {
					quoteAssetObj: l.Z.ChainAsset.isRequired,
					backingAssetObj: l.Z.ChainAsset.isRequired,
					debtBalanceObj: l.Z.ChainObject,
					collateralBalanceObj: l.Z.ChainObject,
					call_orders: l.Z.ChainObjectsList,
					hasCallOrders: r().bool,
				}),
				K in G
					? Object.defineProperty(G, K, {
							value: Q,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (G[K] = Q),
				(X = (0, u.Z)(X)),
				(X = (0, q.Z)(X, 50, {leading: !1}));
			var Y = (function (t) {
				U(a, t);
				var e = J(a);
				function a() {
					var t;
					return (
						D(this, a),
						((t = e.call(this)).state = {smallScreen: !1, open: !1}),
						t
					);
				}
				return (
					E(a, [
						{
							key: 'show',
							value: function () {
								this.props.showModal();
							},
						},
						{
							key: 'componentWillMount',
							value: function () {
								this.setState({smallScreen: window.innerHeight <= 800});
							},
						},
						{
							key: 'render',
							value: function () {
								var t,
									e,
									a = this.props,
									o = a.quoteAssetObj,
									n = a.backingAssetObj,
									r = a.accountObj,
									i = r.get('balances').toJS();
								if (i)
									for (var s in i) s === n && (t = i[s]), s === o && (e = i[s]);
								return this.props.visible
									? (0, T.jsx)(X, {
											visible: this.props.visible,
											hideModal: this.props.hideModal,
											showModal: this.props.showModal,
											quoteAssetObj: o,
											call_orders: r.get('call_orders', (0, g.List)()).toList(),
											hasCallOrders:
												r.get('call_orders') && r.get('call_orders').size > 0,
											modalId: this.props.modalId,
											debtBalanceObj: e,
											collateralBalanceObj: t,
											backingAssetObj: n,
											disableHelp: this.state.smallScreen,
											accountObj: r,
									  })
									: null;
							},
						},
					]),
					a
				);
			})(o.Component);
		},
		97891: (t, e, a) => {
			a.d(e, {Z: () => g});
			var o = a(67294),
				n = a(40840),
				r = a(45697),
				i = a.n(r),
				s = a(35944);
			function l(t) {
				return (
					(l =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
							  }
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					l(t)
				);
			}
			function c(t, e) {
				for (var a = 0; a < e.length; a++) {
					var o = e[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function u(t, e) {
				return (
					(u =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					u(t, e)
				);
			}
			function p(t, e) {
				if (e && ('object' === l(e) || 'function' == typeof e)) return e;
				if (void 0 !== e)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return d(t);
			}
			function d(t) {
				if (void 0 === t)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return t;
			}
			function h(t) {
				return (
					(h = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					h(t)
				);
			}
			function b(t, e, a) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: a,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = a),
					t
				);
			}
			var _ = (function (t) {
				!(function (t, e) {
					if ('function' != typeof e && null !== e)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(t.prototype = Object.create(e && e.prototype, {
						constructor: {value: t, writable: !0, configurable: !0},
					})),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e && u(t, e);
				})(l, t);
				var e,
					a,
					o,
					r,
					i =
						((o = l),
						(r = (function () {
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
							} catch (t) {
								return !1;
							}
						})()),
						function () {
							var t,
								e = h(o);
							if (r) {
								var a = h(this).constructor;
								t = Reflect.construct(e, arguments, a);
							} else t = e.apply(this, arguments);
							return p(this, t);
						});
				function l(t) {
					var e;
					return (
						(function (t, e) {
							if (!(t instanceof e))
								throw new TypeError('Cannot call a class as a function');
						})(this, l),
						t.scroll_length,
						((e = i.call(this, t)).state = {active: !1}),
						(e.listener = !1),
						(e.onBodyClick = e.onBodyClick.bind(d(e))),
						e
					);
				}
				return (
					(e = l),
					(a = [
						{
							key: 'componentDidMount',
							value: function () {
								this._setListener();
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (t, e) {
								return (
									!n.Z.are_equal_shallow(t.entries, this.props.entries) ||
									!n.Z.are_equal_shallow(e, this.state) ||
									t.value !== this.props.value
								);
							},
						},
						{
							key: '_setListener',
							value: function () {
								var t =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: this.props;
								t.entries.length > 1 &&
									!this.listener &&
									((this.listener = !0),
									document.body.addEventListener('click', this.onBodyClick, {
										capture: !1,
										passive: !0,
									}));
							},
						},
						{
							key: '_removeListener',
							value: function () {
								document.body.removeEventListener('click', this.onBodyClick),
									(this.listener = !1);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (t) {
								1 === t.entries.length
									? this._removeListener()
									: t.entries.length > 1 && this._setListener(t);
							},
						},
						{
							key: 'componentWillUnmount',
							value: function () {
								this._removeListener();
							},
						},
						{
							key: 'onBodyClick',
							value: function (t) {
								var e = t.target,
									a = !1;
								do {
									if (
										e.classList &&
										e.classList.contains('dropdown') &&
										e.id === this.props.id
									) {
										a = !0;
										break;
									}
								} while ((e = e.parentNode));
								a ? t.stopPropagation() : this.setState({active: !1});
							},
						},
						{
							key: 'onChange',
							value: function (t, e) {
								e.preventDefault(),
									e.stopPropagation(),
									this.props.onChange(t),
									this.setState({active: !1});
							},
						},
						{
							key: '_toggleDropdown',
							value: function () {
								this.setState({active: !this.state.active});
							},
						},
						{
							key: 'render',
							value: function () {
								var t = this,
									e = this.props,
									a = e.entries,
									o = e.value,
									n = this.state.active;
								if (0 === a.length) return null;
								if (1 == a.length)
									return (0, s.jsx)('div', {
										className:
											'dropdown-wrapper inactive' +
											(this.props.upperCase ? ' upper-case' : ''),
										children: (0, s.jsx)('div', {
											style: {marginTop: '-10px'},
											children: this.props.singleEntry
												? this.props.singleEntry
												: a[0],
										}),
									});
								var r = a.map(function (e) {
									return (0,
									s.jsx)('li', {className: t.props.upperCase ? 'upper-case' : '', onClick: t.onChange.bind(t, t.props.values[e]), children: (0, s.jsx)('span', {children: e})}, e);
								});
								return (0, s.jsxs)('div', {
									onClick: this._toggleDropdown.bind(this),
									className:
										'dropdown-wrapper' +
										(n ? ' active' : '') +
										(this.props.upperCase ? ' upper-case' : ''),
									children: [
										(0, s.jsx)('div', {
											style: {paddingRight: 15},
											children:
												o ||
												(0, s.jsx)('span', {
													className: 'hidden',
													children: 'A',
												}),
										}),
										(0, s.jsx)('ul', {
											className: 'dropdown',
											style: {
												overflow:
													a.length > this.props.scroll_length
														? 'auto'
														: 'hidden',
											},
											children: r,
										}),
									],
								});
							},
						},
					]),
					a && c(e.prototype, a),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					l
				);
			})(o.Component);
			b(_, 'propTypes', {scroll_length: i().number}),
				b(_, 'defaultProps', {scroll_length: 9});
			const g = _;
		},
	},
]);
