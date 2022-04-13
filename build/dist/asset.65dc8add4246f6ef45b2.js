'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[521],
	{
		27279: (e, t, n) => {
			n.d(t, {Z: () => T});
			var r = n(87462),
				s = n(4942),
				o = n(67294),
				a = n(93433),
				i = n(15671),
				c = n(43144),
				l = n(60136),
				u = n(98557),
				d = n(71002),
				p = n(94184),
				f = n.n(p),
				h = n(96774),
				m = n.n(h),
				_ = n(50344),
				b = n(63441),
				y = n(29439),
				x = o.forwardRef(function (e, t) {
					var n,
						r = e.prefixCls,
						a = e.forceRender,
						i = e.className,
						c = e.style,
						l = e.children,
						u = e.isActive,
						d = e.role,
						p = o.useState(u || a),
						h = (0, y.Z)(p, 2),
						m = h[0],
						_ = h[1];
					return (
						o.useEffect(
							function () {
								(a || u) && _(!0);
							},
							[a, u]
						),
						m
							? o.createElement(
									'div',
									{
										ref: t,
										className: f()(
											''.concat(r, '-content'),
											((n = {}),
											(0, s.Z)(n, ''.concat(r, '-content-active'), u),
											(0, s.Z)(n, ''.concat(r, '-content-inactive'), !u),
											n),
											i
										),
										style: c,
										role: d,
									},
									o.createElement(
										'div',
										{className: ''.concat(r, '-content-box')},
										l
									)
							  )
							: null
					);
				});
			x.displayName = 'PanelContent';
			const v = x;
			var g = (function (e) {
				(0, l.Z)(n, e);
				var t = (0, u.Z)(n);
				function n() {
					var e;
					(0, i.Z)(this, n);
					for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
						s[o] = arguments[o];
					return (
						((e = t.call.apply(t, [this].concat(s))).handleItemClick =
							function () {
								var t = e.props,
									n = t.onItemClick,
									r = t.panelKey;
								'function' == typeof n && n(r);
							}),
						(e.handleKeyPress = function (t) {
							('Enter' !== t.key && 13 !== t.keyCode && 13 !== t.which) ||
								e.handleItemClick();
						}),
						e
					);
				}
				return (
					(0, c.Z)(n, [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return !m()(this.props, e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t,
									n = this,
									a = this.props,
									i = a.className,
									c = a.id,
									l = a.style,
									u = a.prefixCls,
									d = a.header,
									p = a.headerClass,
									h = a.children,
									m = a.isActive,
									_ = a.showArrow,
									y = a.destroyInactivePanel,
									x = a.accordion,
									g = a.forceRender,
									j = a.openMotion,
									w = a.expandIcon,
									k = a.extra,
									P = a.collapsible,
									C = 'disabled' === P,
									O = f()(
										''.concat(u, '-header'),
										((e = {}),
										(0, s.Z)(e, p, p),
										(0, s.Z)(
											e,
											''.concat(u, '-header-collapsible-only'),
											'header' === P
										),
										e)
									),
									Z = f()(
										((t = {}),
										(0, s.Z)(t, ''.concat(u, '-item'), !0),
										(0, s.Z)(t, ''.concat(u, '-item-active'), m),
										(0, s.Z)(t, ''.concat(u, '-item-disabled'), C),
										t),
										i
									),
									S = o.createElement('i', {className: 'arrow'});
								_ && 'function' == typeof w && (S = w(this.props));
								var A = null != k && 'boolean' != typeof k;
								return o.createElement(
									'div',
									{className: Z, style: l, id: c},
									o.createElement(
										'div',
										{
											className: O,
											onClick: function () {
												return 'header' !== P && n.handleItemClick();
											},
											role: x ? 'tab' : 'button',
											tabIndex: C ? -1 : 0,
											'aria-expanded': m,
											onKeyPress: this.handleKeyPress,
										},
										_ && S,
										'header' === P
											? o.createElement(
													'span',
													{
														onClick: this.handleItemClick,
														className: ''.concat(u, '-header-text'),
													},
													d
											  )
											: d,
										A &&
											o.createElement(
												'div',
												{className: ''.concat(u, '-extra')},
												k
											)
									),
									o.createElement(
										b.Z,
										(0, r.Z)(
											{
												visible: m,
												leavedClassName: ''.concat(u, '-content-hidden'),
											},
											j,
											{forceRender: g, removeOnLeave: y}
										),
										function (e, t) {
											var n = e.className,
												r = e.style;
											return o.createElement(
												v,
												{
													ref: t,
													prefixCls: u,
													className: n,
													style: r,
													isActive: m,
													forceRender: g,
													role: x ? 'tabpanel' : null,
												},
												h
											);
										}
									)
								);
							},
						},
					]),
					n
				);
			})(o.Component);
			g.defaultProps = {
				showArrow: !0,
				isActive: !1,
				onItemClick: function () {},
				headerClass: '',
				forceRender: !1,
			};
			const j = g;
			function w(e) {
				var t = e;
				if (!Array.isArray(t)) {
					var n = (0, d.Z)(t);
					t = 'number' === n || 'string' === n ? [t] : [];
				}
				return t.map(function (e) {
					return String(e);
				});
			}
			var k = (function (e) {
				(0, l.Z)(n, e);
				var t = (0, u.Z)(n);
				function n(e) {
					var r;
					(0, i.Z)(this, n),
						((r = t.call(this, e)).onClickItem = function (e) {
							var t = r.state.activeKey;
							if (r.props.accordion) t = t[0] === e ? [] : [e];
							else {
								var n = (t = (0, a.Z)(t)).indexOf(e);
								n > -1 ? t.splice(n, 1) : t.push(e);
							}
							r.setActiveKey(t);
						}),
						(r.getNewChild = function (e, t) {
							if (!e) return null;
							var n = r.state.activeKey,
								s = r.props,
								a = s.prefixCls,
								i = s.openMotion,
								c = s.accordion,
								l = s.destroyInactivePanel,
								u = s.expandIcon,
								d = s.collapsible,
								p = e.key || String(t),
								f = e.props,
								h = f.header,
								m = f.headerClass,
								_ = f.destroyInactivePanel,
								b = f.collapsible,
								y = null != b ? b : d,
								x = {
									key: p,
									panelKey: p,
									header: h,
									headerClass: m,
									isActive: c ? n[0] === p : n.indexOf(p) > -1,
									prefixCls: a,
									destroyInactivePanel: null != _ ? _ : l,
									openMotion: i,
									accordion: c,
									children: e.props.children,
									onItemClick: 'disabled' === y ? null : r.onClickItem,
									expandIcon: u,
									collapsible: y,
								};
							return 'string' == typeof e.type ? e : o.cloneElement(e, x);
						}),
						(r.getItems = function () {
							var e = r.props.children;
							return (0, _.Z)(e).map(r.getNewChild);
						}),
						(r.setActiveKey = function (e) {
							'activeKey' in r.props || r.setState({activeKey: e}),
								r.props.onChange(r.props.accordion ? e[0] : e);
						});
					var s = e.activeKey,
						c = e.defaultActiveKey;
					return 'activeKey' in e && (c = s), (r.state = {activeKey: w(c)}), r;
				}
				return (
					(0, c.Z)(
						n,
						[
							{
								key: 'shouldComponentUpdate',
								value: function (e, t) {
									return !m()(this.props, e) || !m()(this.state, t);
								},
							},
							{
								key: 'render',
								value: function () {
									var e,
										t = this.props,
										n = t.prefixCls,
										r = t.className,
										a = t.style,
										i = t.accordion,
										c = f()(
											((e = {}), (0, s.Z)(e, n, !0), (0, s.Z)(e, r, !!r), e)
										);
									return o.createElement(
										'div',
										{className: c, style: a, role: i ? 'tablist' : null},
										this.getItems()
									);
								},
							},
						],
						[
							{
								key: 'getDerivedStateFromProps',
								value: function (e) {
									var t = {};
									return 'activeKey' in e && (t.activeKey = w(e.activeKey)), t;
								},
							},
						]
					),
					n
				);
			})(o.Component);
			(k.defaultProps = {
				prefixCls: 'rc-collapse',
				onChange: function () {},
				accordion: !1,
				destroyInactivePanel: !1,
			}),
				(k.Panel = j);
			const P = k;
			k.Panel;
			var C = n(8812),
				O = n(98423),
				Z = n(65632),
				S = n(21687);
			var A = n(33603),
				R = n(96159),
				N = function (e) {
					var t,
						n,
						a,
						i = o.useContext(Z.E_),
						c = i.getPrefixCls,
						l = i.direction,
						u = e.prefixCls,
						d = e.className,
						p = void 0 === d ? '' : d,
						h = e.bordered,
						m = void 0 === h || h,
						b = e.ghost,
						y = c('collapse', u),
						x =
							void 0 !== (n = e.expandIconPosition)
								? n
								: 'rtl' === l
								? 'right'
								: 'left',
						v = f()(
							((t = {}),
							(0, s.Z)(t, ''.concat(y, '-borderless'), !m),
							(0, s.Z)(t, ''.concat(y, '-icon-position-').concat(x), !0),
							(0, s.Z)(t, ''.concat(y, '-rtl'), 'rtl' === l),
							(0, s.Z)(t, ''.concat(y, '-ghost'), !!b),
							t),
							p
						),
						g = (0, r.Z)((0, r.Z)({}, A.ZP), {
							motionAppear: !1,
							leavedClassName: ''.concat(y, '-content-hidden'),
						});
					return o.createElement(
						P,
						(0, r.Z)({openMotion: g}, e, {
							expandIcon: function () {
								var t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: {},
									n = e.expandIcon,
									r = n
										? n(t)
										: o.createElement(C.Z, {rotate: t.isActive ? 90 : void 0});
								return o.createElement(
									'div',
									null,
									(0, R.Tm)(r, function () {
										return {
											className: f()(r.props.className, ''.concat(y, '-arrow')),
										};
									})
								);
							},
							prefixCls: y,
							className: v,
						}),
						((a = e.children),
						(0, _.Z)(a).map(function (e, t) {
							var n;
							if (
								null === (n = e.props) || void 0 === n ? void 0 : n.disabled
							) {
								var s = e.key || String(t),
									o = e.props,
									a = o.disabled,
									i = o.collapsible,
									c = (0, r.Z)((0, r.Z)({}, (0, O.Z)(e.props, ['disabled'])), {
										key: s,
										collapsible: null != i ? i : a ? 'disabled' : void 0,
									});
								return (0, R.Tm)(e, c);
							}
							return e;
						}))
					);
				};
			N.Panel = function (e) {
				(0, S.Z)(
					!('disabled' in e),
					'Collapse.Panel',
					'`disabled` is deprecated. Please use `collapsible="disabled"` instead.'
				);
				var t = o.useContext(Z.E_).getPrefixCls,
					n = e.prefixCls,
					a = e.className,
					i = void 0 === a ? '' : a,
					c = e.showArrow,
					l = void 0 === c || c,
					u = t('collapse', n),
					d = f()((0, s.Z)({}, ''.concat(u, '-no-arrow'), !l), i);
				return o.createElement(
					P.Panel,
					(0, r.Z)({}, e, {prefixCls: u, className: d})
				);
			};
			const T = N;
		},
		43014: (e, t, n) => {
			n.r(t), n.d(t, {default: () => lt});
			var r = n(67294),
				s = n(53825),
				o = n(47428),
				a = n(58074),
				i = n.n(a),
				c = n(68769),
				l = n(77335),
				u = n(31403),
				d = n(17076),
				p = n(62746),
				f = n(12615),
				h = n(53780),
				m = n(52468),
				_ = n(87718),
				b = n(40840),
				y = n(35944);
			function x(e) {
				return (
					(x =
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
					x(e)
				);
			}
			function v(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function g(e, t) {
				return (
					(g =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					g(e, t)
				);
			}
			function j(e, t) {
				if (t && ('object' === x(t) || 'function' == typeof t)) return t;
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
			function w(e) {
				return (
					(w = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					w(e)
				);
			}
			const k = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && g(e, t);
				})(a, e);
				var t,
					n,
					r,
					s,
					o =
						((r = a),
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
								t = w(r);
							if (s) {
								var n = w(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return j(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((t = o.call(this, e)).state = {time: e.time}),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'getHours',
							value: function (e) {
								return e / 3600;
							},
						},
						{
							key: 'render',
							value: function () {
								return (0, y.jsxs)('div', {
									children: [this.getHours(this.state.time), 'h'],
								});
							},
						},
					]) && v(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			var P = n(52233),
				C = n(18825),
				O = n(86035),
				Z = n(13630),
				S = n(94184),
				A = n.n(S),
				R = n(10033),
				N = n(98652),
				T = n(71665);
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
			function E(e, t) {
				if (t && ('object' === I(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return q(e);
			}
			function q(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function D(e) {
				return (
					(D = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					D(e)
				);
			}
			function L(e, t, n) {
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
			var M = function (e, t) {
					var n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: function (e) {
									return e;
							  };
					return function (r) {
						return e.setState(L({}, t, n(r)));
					};
				},
				K = (function (e) {
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
					})(a, e);
					var t,
						n,
						r,
						s,
						o =
							((r = a),
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
									t = D(r);
								if (s) {
									var n = D(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return E(this, e);
							});
					function a(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							L(
								q((t = o.call(this, e))),
								'onAccountNameChanged',
								M(q(t), 'funderAccountName')
							),
							L(q(t), 'onAccountChanged', M(q(t), 'newFunderAccount')),
							L(
								q(t),
								'onPoolInput',
								M(
									q(t),
									'fundPoolAmount',
									('amount',
									function (e) {
										return e.amount;
									})
								)
							),
							L(q(t), 'onFundPool', function () {
								return T.Z.fundPool(
									t.state.newFunderAccount
										? t.state.newFunderAccount.get('id')
										: null,
									t.props.core,
									t.props.asset,
									t.state.fundPoolAmount.replace(/,/g, '')
								);
							}),
							L(q(t), 'reset', function () {
								t.setState(t.initialState());
							}),
							L(q(t), 'initialState', function () {
								return {
									funderAccountName: t.props.funderAccountName,
									fundPoolAmount: 0,
									fundPoolAsset: new O.xR({
										amount: 0,
										precision: t.props.core.get('precision'),
										asset_id: t.props.core.get('id'),
									}),
									claimPoolAmount: 0,
									claimPoolAmountAsset: new O.xR({
										amount: 0,
										precision: t.props.core.get('precision'),
										asset_id: t.props.core.get('id'),
									}),
									claimFeesAmount: 0,
									claimFeesAmountAsset: new O.xR({
										amount: 0,
										precision: t.props.asset.get('precision'),
										asset_id: t.props.asset.get('id'),
									}),
								};
							}),
							L(q(t), 'onClaimPool', function () {
								return T.Z.claimPool(
									t.props.asset,
									t.state.claimPoolAmountAsset
								);
							}),
							(t.state = t.initialState()),
							t
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'onClaimInput',
								value: function (e, t) {
									var n = t.amount;
									this.state[e + 'Asset'].setAmount({real: n}),
										this.setState(L({}, e, n));
								},
							},
							{
								key: 'onClaimFees',
								value: function () {
									var e = P.BQ.getAccount(this.props.funderAccountName);
									e &&
										T.Z.claimPoolFees(
											e.get('id'),
											this.props.asset,
											this.state.claimFeesAmountAsset
										);
								},
							},
							{
								key: 'renderFundPool',
								value: function () {
									var e = this.props,
										t = this.state,
										n = this.onPoolInput,
										r = this.onFundPool,
										s = this.reset,
										o = this.onAccountNameChanged,
										a = this.onAccountChanged,
										c = e.asset,
										l = e.core,
										u = e.hideBalance,
										p = e.getDynamicObject,
										f = t.funderAccountName,
										h = t.fundPoolAmount,
										m = t.newFunderAccount,
										_ = null;
									u || (_ = p(c.get('dynamic_asset_data_id')));
									var b = l.get('id') || '1.3.0',
										x = 0;
									if (m) {
										var v = m.getIn(['balances', b]);
										if (v) {
											var g = P.BQ.getObject(v);
											g && (x = g.get('balance'));
										}
									}
									var j = (0, y.jsxs)('span', {
										children: [
											(0, y.jsx)(i(), {
												component: 'span',
												content: 'transfer.available',
											}),
											': ',
											(0, y.jsx)(d.Z, {amount: x, asset: b}),
										],
									});
									return (0, y.jsxs)('div', {
										children: [
											u ||
												(0, y.jsxs)('div', {
													style: {paddingBottom: '1.5rem'},
													children: [
														(0, y.jsx)(i(), {
															content: 'explorer.asset.fee_pool.pool_balance',
														}),
														(0, y.jsx)('span', {children: ': '}),
														_
															? (0, y.jsx)(d.Z, {
																	amount: _.get('fee_pool'),
																	asset: b,
															  })
															: null,
													],
												}),
											(0, y.jsx)(R.Z, {
												label: 'transaction.funding_account',
												accountName: f,
												onChange: o,
												onAccountChanged: a,
												account: f,
												error: null,
												tabIndex: 1,
											}),
											(0, y.jsx)(N.Z, {
												label: 'transfer.amount',
												display_balance: j,
												amount: h,
												onChange: n,
												asset: b,
												assets: [b],
												placeholder: '0.0',
												tabIndex: 2,
												style: {width: '100%', paddingTop: 16},
											}),
											(0, y.jsxs)('div', {
												style: {paddingTop: '1rem'},
												className: 'button-group',
												children: [
													(0, y.jsx)('button', {
														className: A()('button', {disabled: h <= 0}),
														onClick: r,
														children: (0, y.jsx)(i(), {
															content:
																'transaction.trxTypes.asset_fund_fee_pool',
														}),
													}),
													(0, y.jsx)('button', {
														className: 'button outline',
														onClick: s,
														children: (0, y.jsx)(i(), {
															content: 'account.perm.reset',
														}),
													}),
												],
											}),
										],
									});
								},
							},
							{
								key: 'renderClaimPool',
								value: function () {
									var e = this,
										t = this.props,
										n = this.onClaimPool,
										r = this.reset,
										s = this.state.claimPoolAmount,
										o = t.asset,
										a = t.core,
										c = (0, t.getDynamicObject)(o.get('dynamic_asset_data_id')),
										l = a.get('id') || '1.3.0',
										u = c
											? (0, y.jsxs)('span', {
													onClick: function () {
														e.state.claimPoolAmountAsset.setAmount({
															sats: c.get('fee_pool'),
														}),
															e.setState({
																claimPoolAmount:
																	e.state.claimPoolAmountAsset.getAmount({
																		real: !0,
																	}),
															});
													},
													children: [
														(0, y.jsx)(i(), {
															component: 'span',
															content: 'transfer.available',
														}),
														': ',
														(0, y.jsx)(d.Z, {
															amount: c.get('fee_pool'),
															asset: l,
														}),
													],
											  })
											: null;
									return (0, y.jsxs)('div', {
										children: [
											(0, y.jsx)(i(), {
												component: 'p',
												content: 'explorer.asset.fee_pool.claim_pool_text',
											}),
											(0, y.jsx)(N.Z, {
												label: 'transfer.amount',
												display_balance: u,
												amount: s,
												onChange: this.onClaimInput.bind(
													this,
													'claimPoolAmount'
												),
												asset: l,
												assets: [l],
												placeholder: '0.0',
												tabIndex: 2,
												style: {width: '100%', paddingTop: 16},
											}),
											(0, y.jsxs)('div', {
												style: {paddingTop: '1rem'},
												className: 'button-group',
												children: [
													(0, y.jsx)('button', {
														className: A()('button', {disabled: s <= 0}),
														onClick: n,
														children: (0, y.jsx)(i(), {
															content:
																'transaction.trxTypes.asset_claim_fee_pool',
														}),
													}),
													(0, y.jsx)('button', {
														className: 'button outline',
														onClick: r,
														children: (0, y.jsx)(i(), {
															content: 'account.perm.reset',
														}),
													}),
												],
											}),
										],
									});
								},
							},
							{
								key: 'renderClaimFees',
								value: function () {
									var e = this.props,
										t = this.state.claimFeesAmount,
										n = e.asset,
										r = (0, e.getDynamicObject)(n.get('dynamic_asset_data_id')),
										s = r ? r.get('accumulated_fees') : 0,
										o =
											t > 0 && this.state.claimFeesAmountAsset.getAmount() <= s,
										a = (0, y.jsxs)('span', {
											children: [
												(0, y.jsx)(i(), {
													component: 'span',
													content: 'transfer.available',
												}),
												': ',
												(0, y.jsx)(d.Z, {amount: s, asset: n.get('id')}),
											],
										});
									return (0, y.jsxs)('div', {
										children: [
											(0, y.jsx)(i(), {
												component: 'p',
												content: 'explorer.asset.fee_pool.claim_text',
												asset: n.get('symbol'),
											}),
											(0, y.jsxs)('div', {
												style: {paddingBottom: '1rem'},
												children: [
													(0, y.jsx)(i(), {
														content:
															'explorer.asset.fee_pool.unclaimed_issuer_income',
													}),
													': ',
													r
														? (0, y.jsx)(d.Z, {
																amount: r.get('accumulated_fees'),
																asset: n.get('id'),
														  })
														: null,
												],
											}),
											(0, y.jsx)(N.Z, {
												label: 'transfer.amount',
												display_balance: a,
												amount: t,
												onChange: this.onClaimInput.bind(
													this,
													'claimFeesAmount'
												),
												asset: n.get('id'),
												assets: [n.get('id')],
												placeholder: '0.0',
												tabIndex: 1,
												style: {width: '100%', paddingTop: 16},
											}),
											(0, y.jsxs)('div', {
												style: {paddingTop: '1rem'},
												className: 'button-group',
												children: [
													(0, y.jsx)('button', {
														className: A()('button', {disabled: !o}),
														onClick: this.onClaimFees.bind(this),
														children: (0, y.jsx)(i(), {
															content: 'explorer.asset.fee_pool.claim_fees',
														}),
													}),
													(0, y.jsx)('button', {
														className: 'button outline',
														onClick: this.reset.bind(this),
														children: (0, y.jsx)(i(), {
															content: 'account.perm.reset',
														}),
													}),
												],
											}),
										],
									});
								},
							},
							{
								key: 'render',
								value: function () {
									return 'fund' === this.props.type
										? this.renderFundPool()
										: 'claim' === this.props.type
										? this.renderClaimPool()
										: 'claim_fees' === this.props.type
										? this.renderClaimFees()
										: void 0;
								},
							},
						]) && F(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component);
			L(K, 'defaultProps', {type: 'fund'});
			const z = (K = (0, u.Z)(K, {
				propNames: ['asset', 'core'],
				defaultProps: {core: '1.3.0'},
				withDynamic: !0,
			}));
			var J = n(37983),
				Q = n(11230),
				U = n(112),
				G = n.n(U),
				V = n(8564),
				W = n(79876);
			function X(e) {
				return (
					(X =
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
					X(e)
				);
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
			function $(e, t) {
				return (
					($ =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					$(e, t)
				);
			}
			function Y(e, t) {
				if (t && ('object' === X(t) || 'function' == typeof t)) return t;
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
			function ee(e) {
				return (
					(ee = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ee(e)
				);
			}
			function te(e, t, n) {
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
			var ne = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && $(e, t);
				})(a, e);
				var t,
					n,
					r,
					s,
					o =
						((r = a),
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
								t = ee(r);
							if (s) {
								var n = ee(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Y(this, e);
						});
				function a() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((e = o.call(this)).state = {
							new_issuer_account_id: null,
							issuer_account_name: null,
						}),
						e
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'onAccountNameChanged',
							value: function (e, t) {
								this.setState(te({}, e, t));
							},
						},
						{
							key: 'onAccountChanged',
							value: function (e, t) {
								this.setState(te({}, e, t ? t.get('id') : null));
							},
						},
						{
							key: 'onSubmit',
							value: function () {
								var e = this;
								T.Z.updateOwner(
									this.props.asset,
									this.state.new_issuer_account_id
								).then(function () {
									e.onReset();
								});
							},
						},
						{
							key: 'onReset',
							value: function () {
								this.setState({
									new_issuer_account_id: null,
									issuer_account_name: null,
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props.currentOwner;
								return (0, y.jsxs)('div', {
									children: [
										(0, y.jsx)('div', {
											style: {paddingBottom: '1rem'},
											children: (0, y.jsx)(R.Z, {
												label: 'account.user_issued_assets.current_issuer',
												accountName: e.get('name'),
												account: e.get('name'),
												error: null,
												tabIndex: 1,
												disabled: !0,
											}),
										}),
										(0, y.jsx)(R.Z, {
											label: 'account.user_issued_assets.new_issuer',
											accountName: this.state.issuer_account_name,
											onChange: this.onAccountNameChanged.bind(
												this,
												'issuer_account_name'
											),
											onAccountChanged: this.onAccountChanged.bind(
												this,
												'new_issuer_account_id'
											),
											account: this.state.issuer_account_name,
											error: null,
											tabIndex: 1,
											typeahead: !0,
											excludeAccounts: [e.get('name')],
										}),
										(0, y.jsxs)('div', {
											style: {paddingTop: '1rem'},
											className: 'button-group',
											children: [
												(0, y.jsx)('button', {
													className: A()('button', {
														disabled: !this.state.new_issuer_account_id,
													}),
													onClick: this.onSubmit.bind(this),
													children: (0, y.jsx)(i(), {
														content: 'account.user_issued_assets.update_owner',
													}),
												}),
												(0, y.jsx)('button', {
													className: 'button outline',
													onClick: this.onReset.bind(this),
													children: (0, y.jsx)(i(), {
														content: 'account.perm.reset',
													}),
												}),
											],
										}),
									],
								});
							},
						},
					]) && H(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			te(ne, 'propTypes', {
				account: V.Z.ChainAccount.isRequired,
				currentOwner: V.Z.ChainAccount.isRequired,
			});
			const re = (ne = (0, W.Z)(ne));
			function se(e) {
				return (
					(se =
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
					se(e)
				);
			}
			function oe(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ae(e, t) {
				return (
					(ae =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ae(e, t)
				);
			}
			function ie(e, t) {
				if (t && ('object' === se(t) || 'function' == typeof t)) return t;
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
			function ce(e) {
				return (
					(ce = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ce(e)
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
						t && ae(e, t);
				})(a, e);
				var t,
					n,
					r,
					s,
					o =
						((r = a),
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
								t = ce(r);
							if (s) {
								var n = ce(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return ie(this, e);
						});
				function a(e) {
					var t;
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, a),
						(t = o.call(this));
					var n = new O.xR({
							amount: 0,
							asset_id: e.quote.get('id'),
							precision: e.quote.get('precision'),
						}),
						r = new O.xR({
							amount: 0,
							asset_id: e.base.get('id'),
							precision: e.base.get('precision'),
						}),
						s = new O.tA({quote: n, base: r});
					return (t.state = {price: s, realPriceValue: s.toReal()}), t;
				}
				return (
					(t = a),
					(n = [
						{
							key: 'onPriceChanged',
							value: function (e) {
								var t = e.amount;
								this.state.price.setPriceFromReal(parseFloat(t)),
									this.setState({realPriceValue: t}),
									this.props.onPriceChanged &&
										this.props.onPriceChanged(this.state.price.clone());
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.state,
									t = e.realPriceValue,
									n = e.price;
								return (0, y.jsx)(N.Z, {
									label: this.props.label,
									amount: t,
									onChange: this.onPriceChanged.bind(this),
									asset: n.base.asset_id,
									base: this.props.quote.get('symbol'),
									isPrice: !0,
									assets: [n.quote.asset_id],
									placeholder: '0.0',
									tabIndex: 1,
									style: {width: '100%', paddingRight: '10px'},
								});
							},
						},
					]) && oe(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			const ue = (le = (0, u.Z)(le, {
				propNames: ['quote', 'base'],
				defaultProps: {base: '1.3.0'},
			}));
			function de(e) {
				return (
					(de =
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
					de(e)
				);
			}
			function pe(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function fe(e, t) {
				return (
					(fe =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					fe(e, t)
				);
			}
			function he(e, t) {
				if (t && ('object' === de(t) || 'function' == typeof t)) return t;
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
			function me(e) {
				return (
					(me = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					me(e)
				);
			}
			function _e(e, t, n) {
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
			var be = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && fe(e, t);
				})(a, e);
				var t,
					n,
					r,
					s,
					o =
						((r = a),
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
								t = me(r);
							if (s) {
								var n = me(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return he(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((t = o.call(this)).state = t.resetState(e)),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'resetState',
							value: function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.props,
									t = e.account.get('id'),
									n = e.asset.getIn(['bitasset', 'current_feed']),
									r = n.get('maintenance_collateral_ratio', 1750),
									s = n.get('maximum_short_squeeze_ratio', 1100);
								return {
									publisher: e.account.get('name'),
									publisher_id: t,
									mcr: r,
									mcrValue: r / 1e3,
									mssr: s,
									mssrValue: s / 1e3,
								};
							},
						},
						{
							key: 'onAccountNameChanged',
							value: function (e, t) {
								this.setState(_e({}, e, t));
							},
						},
						{
							key: 'onAccountChanged',
							value: function (e, t) {
								this.setState(_e({}, e, t ? t.get('id') : null));
							},
						},
						{
							key: 'onSubmit',
							value: function () {
								T.Z.publishFeed({
									publisher: this.state.publisher_id,
									asset_id: this.props.asset.get('id'),
									mcr: this.state.mcr,
									mssr: this.state.mssr,
									feedPrice: this.state.feedPrice,
									cer: this.state.cer,
								});
							},
						},
						{
							key: 'onPriceChanged',
							value: function (e, t) {
								this.setState(_e({}, e, t));
							},
						},
						{
							key: 'onSetRatio',
							value: function (e, t) {
								var n,
									r = t.amount;
								r &&
									'string' == typeof r &&
									-1 !== r.indexOf('.') &&
									r.indexOf('.') + 4 !== r.length &&
									(r = r.substr(0, r.indexOf('.') + 4)),
									this.setState(
										(_e((n = {}), e + 'Value', r),
										_e(n, e, Math.floor(1e3 * parseFloat(r))),
										n)
									);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props.asset,
									t = this.state,
									n = t.mcrValue,
									r = t.mssrValue,
									s = t.publisher,
									o = e.get('id'),
									a = e.getIn(['bitasset', 'options', 'short_backing_asset']);
								return (0, y.jsxs)('div', {
									children: [
										(0, y.jsx)(R.Z, {
											label: 'explorer.asset.feed_producer',
											accountName: s,
											onChange: this.onAccountNameChanged.bind(
												this,
												'publisher'
											),
											onAccountChanged: this.onAccountChanged.bind(
												this,
												'publisher_id'
											),
											account: s,
											error: null,
											tabIndex: 1,
											typeahead: !0,
										}),
										(0, y.jsx)('br', {}),
										(0, y.jsx)(ue, {
											onPriceChanged: this.onPriceChanged.bind(this, 'cer'),
											label: 'explorer.asset.fee_pool.core_exchange_rate',
											quote: '1.3.0',
											base: o,
										}),
										(0, y.jsx)('br', {}),
										(0, y.jsx)(ue, {
											onPriceChanged: this.onPriceChanged.bind(
												this,
												'feedPrice'
											),
											label: 'explorer.asset.price_feed.feed_price',
											quote: a,
											base: o,
										}),
										(0, y.jsx)('br', {}),
										(0, y.jsx)(N.Z, {
											label:
												'explorer.asset.price_feed.maintenance_collateral_ratio',
											amount: n,
											onChange: this.onSetRatio.bind(this, 'mcr'),
											placeholder: '0.0',
											style: {width: '100%', paddingRight: '10px'},
										}),
										(0, y.jsx)('br', {}),
										(0, y.jsx)(N.Z, {
											label:
												'explorer.asset.price_feed.maximum_short_squeeze_ratio',
											amount: r,
											onChange: this.onSetRatio.bind(this, 'mssr'),
											placeholder: '0.0',
											style: {width: '100%', paddingRight: '10px'},
										}),
										(0, y.jsx)('div', {
											style: {paddingTop: '1rem'},
											className: 'button-group',
											children: (0, y.jsx)('button', {
												className: A()('button', {disabled: !1}),
												onClick: this.onSubmit.bind(this),
												children: (0, y.jsx)(i(), {
													content: 'transaction.trxTypes.asset_publish_feed',
												}),
											}),
										}),
									],
								});
							},
						},
					]),
					n && pe(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			_e(be, 'propTypes', {account: V.Z.ChainAccount.isRequired}),
				(be = (0, W.Z)(be));
			const ye = (be = (0, u.Z)(be));
			var xe = n(22712),
				ve = n(61580),
				ge = n(47933),
				je = n(71577),
				we = n(43957);
			function ke(e) {
				return (
					(ke =
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
					ke(e)
				);
			}
			function Pe(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ce(e, t) {
				return (
					(Ce =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ce(e, t)
				);
			}
			function Oe(e, t) {
				if (t && ('object' === ke(t) || 'function' == typeof t)) return t;
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
			function Ze(e) {
				return (
					(Ze = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ze(e)
				);
			}
			var Se,
				Ae,
				Re,
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
							t && Ce(e, t);
					})(a, e);
					var t,
						n,
						r,
						s,
						o =
							((r = a),
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
									t = Ze(r);
								if (s) {
									var n = Ze(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return Oe(this, e);
							});
					function a() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((e = o.call(this)).state = {
								globalSettlementPrice: null,
								customPrice: !1,
							}),
							e
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'shouldComponentUpdate',
								value: function (e, t) {
									return (
										e.asset.id !== this.props.asset.id ||
										t.globalSettlementPrice !==
											this.state.globalSettlementPrice ||
										t.customPrice !== this.state.customPrice
									);
								},
							},
							{
								key: 'onPriceChanged',
								value: function (e) {
									2 != e || this.state.customPrice
										? this.setState({globalSettlementPrice: e})
										: this.setState({
												globalSettlementPrice: 1,
												customPrice: !0,
										  });
								},
							},
							{
								key: 'onPriceChangedObject',
								value: function (e) {
									this.onPriceChanged(e.toReal());
								},
							},
							{
								key: 'onSubmit',
								value: function () {
									var e = this,
										t = this.props,
										n = t.asset,
										r = t.account,
										s = new O.xR({
											real: this.state.globalSettlementPrice,
											asset_id: this.props.asset.id,
											precision: this.props.asset.precision,
										}),
										o = P.BQ.getAsset(n.bitasset.options.short_backing_asset),
										a = new O.xR({
											real: 1,
											asset_id:
												this.props.asset.bitasset.options.short_backing_asset,
											precision: o.get('precision'),
										}),
										i = new O.tA({quote: a, base: s});
									T.Z.assetGlobalSettle(n, r.get('id'), i).then(function () {
										e.onReset();
									});
								},
							},
							{
								key: 'onReset',
								value: function () {
									this.setState({globalSettlementPrice: null, customPrice: !1});
								},
							},
							{
								key: 'onChange',
								value: function (e) {
									var t = e.amount;
									this.onPriceChanged(t);
								},
							},
							{
								key: 'onChangeRadio',
								value: function (e) {
									this.onPriceChanged(e.target.value);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props.asset,
										t = P.BQ.getAsset(e.bitasset.options.short_backing_asset),
										n = _.Z.parseDescription(e.options.description);
									return (0, y.jsx)('div', {
										children: (0, y.jsxs)(xe.Z, {
											style: {paddingBottom: '1rem'},
											className: 'full-width',
											layout: 'vertical',
											children: [
												(0, y.jsx)('div', {
													children: (0, y.jsxs)(ve.Z, {
														title: G().translate(
															'explorer.asset.prediction_market_asset.tooltip_prediction'
														),
														placement: 'topLeft',
														children: [
															(0, y.jsx)(i(), {
																content:
																	'explorer.asset.prediction_market_asset.prediction',
															}),
															': ',
															(0, y.jsx)('p', {children: n.condition}),
														],
													}),
												}),
												(0, y.jsx)('div', {
													children: (0, y.jsxs)(ve.Z, {
														title: G().translate(
															'explorer.asset.prediction_market_asset.tooltip_resolution_date'
														),
														placement: 'topLeft',
														children: [
															(0, y.jsx)(i(), {
																content:
																	'explorer.asset.prediction_market_asset.resolution_date',
															}),
															': ',
															(0, y.jsx)('p', {children: n.expiry}),
														],
													}),
												}),
												(0, y.jsxs)(ge.ZP.Group, {
													onChange: this.onChangeRadio.bind(this),
													value: this.state.globalSettlementPrice,
													children: [
														(0, y.jsx)(ge.ZP, {
															value: 1,
															disabled: !!this.state.customPrice || void 0,
															children: (0, y.jsx)(i(), {
																content: 'boolean.true',
															}),
														}),
														(0, y.jsx)(ge.ZP, {
															value: 0,
															disabled: !!this.state.customPrice || void 0,
															children: (0, y.jsx)(i(), {
																content: 'boolean.false',
															}),
														}),
														(0, y.jsx)(ge.ZP, {
															value: this.state.customPrice
																? this.state.globalSettlementPrice
																: 2,
															children: (0, y.jsx)(i(), {
																content: 'settings.custom',
															}),
														}),
													],
												}),
												(0, y.jsx)('br', {}),
												(0, y.jsx)('br', {}),
												(0, y.jsx)(we.Z, {
													disabled: !this.state.customPrice || void 0,
													label:
														'explorer.asset.price_feed.global_settlement_price',
													amount: this.state.globalSettlementPrice,
													onChange: this.onChange.bind(this),
													asset: t.get('id'),
													base: e.symbol,
													isPrice: !0,
													assets: [t.get('id')],
													placeholder: '0.0',
													style: {width: '100%'},
												}),
												(0, y.jsxs)('div', {
													style: {paddingTop: '1rem'},
													className: 'button-group',
													children: [
														(0, y.jsx)(je.Z, {
															type: 'primary',
															disabled:
																null == this.state.globalSettlementPrice ||
																void 0,
															onClick: this.onSubmit.bind(this),
															children: (0, y.jsx)(i(), {
																content: 'account.perm.publish_prediction',
															}),
														}),
														(0, y.jsx)(je.Z, {
															style: {marginLeft: '8px'},
															onClick: this.onReset.bind(this),
															children: (0, y.jsx)(i(), {
																content: 'account.perm.reset',
															}),
														}),
													],
												}),
											],
										}),
									});
								},
							},
						]) && Pe(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component);
			(Se = Ne),
				(Ae = 'propTypes'),
				(Re = {account: V.Z.ChainAccount.isRequired}),
				Ae in Se
					? Object.defineProperty(Se, Ae, {
							value: Re,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (Se[Ae] = Re);
			const Te = (Ne = (0, W.Z)(Ne));
			function Ie(e) {
				return (
					(Ie =
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
					Ie(e)
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
			function Ee(e, t) {
				if (t && ('object' === Ie(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return qe(e);
			}
			function qe(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function De(e) {
				return (
					(De = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					De(e)
				);
			}
			var Le = (function (e) {
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
				})(a, e);
				var t,
					n,
					r,
					s,
					o =
						((r = a),
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
								t = De(r);
							if (s) {
								var n = De(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Ee(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						(function (e, t, n) {
							t in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = n);
						})(qe((t = o.call(this, e))), 'initialState', function () {
							return {
								account: P.BQ.getAccount(t.props.funderAccountName),
								collateralAmount: '0',
								debtAmount: '0',
							};
						}),
						(t.state = t.initialState()),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'reset',
							value: function () {
								this.setState(this.initialState());
							},
						},
						{
							key: '_collateralBidInput',
							value: function (e) {
								this.setState({collateralAmount: e.amount});
							},
						},
						{
							key: '_debtBidInput',
							value: function (e) {
								this.setState({debtAmount: e.amount});
							},
						},
						{
							key: '_onBidCollateral',
							value: function () {
								var e = this,
									t = this.state,
									n = t.collateralAmount,
									r = t.debtAmount;
								(n = 0 == n ? n : n.replace(/,/g, '')),
									(r = 0 == r ? r : r.replace(/,/g, '')),
									T.Z.bidCollateral(
										this.state.account ? this.state.account.get('id') : null,
										this.props.core,
										this.props.asset,
										n,
										r
									),
									setTimeout(function () {
										e.props.onUpdate();
									}, 6e3);
							},
						},
						{
							key: 'removeBid',
							value: function () {
								var e = this;
								T.Z.bidCollateral(
									this.state.account ? this.state.account.get('id') : null,
									this.props.core,
									this.props.asset,
									0,
									0
								),
									setTimeout(function () {
										e.props.onUpdate();
									}, 6e3);
							},
						},
						{
							key: 'renderCollateralBid',
							value: function () {
								var e = this.props,
									t = e.asset,
									n = e.core,
									r = this.state,
									s = r.account,
									o = r.collateralAmount,
									a = r.debtAmount,
									c = 1,
									l = 0,
									u = s ? s.getIn(['balances', n.get('id')]) : null;
								if (u) {
									var f = P.BQ.getObject(u);
									f && (l = f.get('balance'));
								}
								var h = (0, y.jsxs)('span', {
									children: [
										(0, y.jsx)(i(), {
											component: 'span',
											content: 'transfer.available',
										}),
										': ',
										(0, y.jsx)(d.Z, {amount: l, asset: n.get('id')}),
									],
								});
								return (0, y.jsxs)('div', {
									children: [
										(0, y.jsx)(N.Z, {
											label: 'transaction.collateral',
											display_balance: h,
											amount: o,
											onChange: this._collateralBidInput.bind(this),
											asset: n.get('id'),
											assets: [n.get('id')],
											placeholder: '0.0',
											tabIndex: c++,
											style: {width: '100%', paddingTop: 16},
										}),
										(0, y.jsx)(N.Z, {
											label: 'transaction.borrow_amount',
											amount: a,
											onChange: this._debtBidInput.bind(this),
											asset: t.get('id'),
											assets: [t.get('id')],
											placeholder: '0.0',
											tabIndex: c++,
											style: {width: '100%', paddingTop: 16},
										}),
										'0' !== this.state.collateralAmount &&
											'0' !== this.state.debtAmount &&
											(0, y.jsxs)('div', {
												style: {paddingTop: '1rem'},
												children: [
													(0, y.jsx)(i(), {
														content: 'explorer.asset.collateral.bid_price',
													}),
													' ',
													(0, y.jsx)(p.Z, {
														base_amount: this.state.collateralAmount / 1,
														base_asset: n.get('id'),
														quote_amount: this.state.debtAmount / 1,
														quote_asset: t.get('id'),
														noPopOver: !0,
														ignorePriceFeed: !0,
													}),
												],
											}),
										(0, y.jsxs)('div', {
											style: {paddingTop: '1rem'},
											className: 'button-group',
											children: [
												(0, y.jsx)('button', {
													className: A()('button'),
													onClick: this._onBidCollateral.bind(this),
													tabIndex: c++,
													children: (0, y.jsx)(i(), {
														content: 'transaction.trxTypes.bid_collateral',
													}),
												}),
												(0, y.jsx)('button', {
													className: 'button outline',
													onClick: this.reset.bind(this),
													tabIndex: c++,
													children: (0, y.jsx)(i(), {
														content: 'account.perm.reset',
													}),
												}),
											],
										}),
									],
								});
							},
						},
						{
							key: 'render',
							value: function () {
								return this.renderCollateralBid();
							},
						},
					]),
					n && Fe(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			const Me = (Le = (0, u.Z)(Le, {
				propNames: ['asset', 'core'],
				withDynamic: !0,
			}));
			var Ke = n(27279),
				ze = n(22949),
				Je = n(8193),
				Qe = n(25108);
			function Ue(e) {
				return (
					(Ue =
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
					Ue(e)
				);
			}
			function Ge(e, t) {
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
			function Ve(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Ge(Object(n), !0).forEach(function (t) {
								We(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Ge(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function We(e, t, n) {
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
			function Xe(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function He(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function $e(e, t, n) {
				return (
					t && He(e.prototype, t),
					n && He(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Ye(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && et(e, t);
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
			function tt(e) {
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
						r = rt(e);
					if (t) {
						var s = rt(this).constructor;
						n = Reflect.construct(r, arguments, s);
					} else n = r.apply(this, arguments);
					return nt(this, n);
				};
			}
			function nt(e, t) {
				if (t && ('object' === Ue(t) || 'function' == typeof t)) return t;
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
			var st = Ke.Z.Panel,
				ot = (function (e) {
					Ye(n, e);
					var t = tt(n);
					function n() {
						return Xe(this, n), t.apply(this, arguments);
					}
					return (
						$e(n, [
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.isSet,
										n = e.name;
									return t
										? (0, y.jsx)('span', {
												className: 'asset-flag',
												children: (0, y.jsx)('span', {
													className: 'label info',
													children: (0, y.jsx)(i(), {
														content: 'account.user_issued_assets.' + n,
													}),
												}),
										  })
										: (0, y.jsx)('span', {});
								},
							},
						]),
						n
					);
				})(r.Component),
				at = (function (e) {
					Ye(n, e);
					var t = tt(n);
					function n() {
						return Xe(this, n), t.apply(this, arguments);
					}
					return (
						$e(n, [
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.isSet,
										n = e.name;
									return t
										? (0, y.jsx)('span', {
												className: 'asset-flag',
												children: (0, y.jsx)('span', {
													className: 'label info',
													children: (0, y.jsx)(i(), {
														content: 'account.user_issued_assets.' + n,
													}),
												}),
										  })
										: (0, y.jsx)('span', {});
								},
							},
						]),
						n
					);
				})(r.Component),
				it = (function (e) {
					Ye(n, e);
					var t = tt(n);
					function n(e) {
						var r;
						return (
							Xe(this, n),
							((r = t.call(this, e)).state = {
								callOrders: [],
								collateralBids: [],
								marginTableSort: 'ratio',
								collateralTableSort: 'price',
								sortDirection: !0,
								showCollateralBidInInfo: !1,
								cumulativeGrouping: !1,
								activeFeedTab: 'margin',
								activeAssetTab: 'info',
							}),
							r
						);
					}
					return (
						$e(n, [
							{
								key: 'componentWillMount',
								value: function () {
									this._getMarginCollateral();
								},
							},
							{
								key: 'updateOnCollateralBid',
								value: function () {
									this._getMarginCollateral();
								},
							},
							{
								key: '_getMarginCollateral',
								value: function () {
									var e = this;
									if (this.props.asset.has('bitasset')) {
										var t,
											n =
												(We(
													(t = {}),
													this.props.asset.get('id'),
													this.props.asset.toJS()
												),
												We(
													t,
													this.props.backingAsset.get('id'),
													this.props.backingAsset.toJS()
												),
												t),
											r = this.props.asset.getIn(
												['bitasset', 'is_prediction_market'],
												!1
											),
											s = this._getFeedPrice();
										if (s) {
											try {
												var o = this.props.asset.getIn([
													'bitasset',
													'current_feed',
													'maintenance_collateral_ratio',
												]);
												C.yX
													.instance()
													.db_api()
													.exec('get_call_orders', [
														this.props.asset.get('id'),
														300,
													])
													.then(function (t) {
														var a = t.map(function (t) {
															return new O.Gy(
																t,
																n,
																e.props.asset.get('id'),
																s,
																o,
																r
															);
														});
														e.setState({callOrders: a});
													});
											} catch (e) {}
											try {
												C.yX
													.instance()
													.db_api()
													.exec('get_collateral_bids', [
														this.props.asset.get('id'),
														100,
														0,
													])
													.then(function (t) {
														var r = t.map(function (t) {
															return new O.DI(t, n, e.props.asset.get('id'), s);
														});
														e.setState({collateralBids: r});
													});
											} catch (e) {
												Qe.log('get_collateral_bids Error: ', e);
											}
										}
									}
								},
							},
							{
								key: '_getFeedPrice',
								value: function () {
									var e,
										t =
											(We(
												(e = {}),
												this.props.asset.get('id'),
												this.props.asset.toJS()
											),
											We(
												e,
												this.props.backingAsset.get('id'),
												this.props.backingAsset.toJS()
											),
											e),
										n = this.props.asset.getIn(
											['bitasset', 'is_prediction_market'],
											!1
										),
										r = this.props.asset.getIn([
											'bitasset',
											'current_feed',
											'maximum_short_squeeze_ratio',
										]),
										s = _.Z.extractRawFeedPrice(this.props.asset);
									return 0 == s.getIn(['base', 'amount']) &&
										0 == s.getIn(['quote', 'amount'])
										? null
										: (n &&
												s.getIn(['base', 'asset_id']) ===
													s.getIn(['quote', 'asset_id']) &&
												(t[this.props.backingAsset.get('id')] ||
													(t[this.props.backingAsset.get('id')] = {
														precision: this.props.asset.get('precision'),
													}),
												(s = (s = (s = (s = s.setIn(
													['base', 'amount'],
													1
												)).setIn(
													['base', 'asset_id'],
													this.props.backingAsset.get('id')
												)).setIn(['quote', 'amount'], 1)).setIn(
													['quote', 'asset_id'],
													this.props.asset.get('id')
												)),
												(r = 1e3)),
										  !s.toJS || t[s.toJS().base.asset_id]
												? new O.ad({
														priceObject: s,
														market_base: this.props.asset.get('id'),
														sqr: r,
														assets: t,
												  })
												: void 0);
								},
							},
							{
								key: '_toggleCumulativeGrouping',
								value: function () {
									this.setState({
										cumulativeGrouping: !this.state.cumulativeGrouping,
									});
								},
							},
							{
								key: '_assetType',
								value: function (e) {
									return 'bitasset' in e
										? e.bitasset.is_prediction_market
											? 'Prediction'
											: 'Smart'
										: 'Simple';
								},
							},
							{
								key: 'formattedPrice',
								value: function (e) {
									var t =
											arguments.length > 1 &&
											void 0 !== arguments[1] &&
											arguments[1],
										n =
											arguments.length > 2 &&
											void 0 !== arguments[2] &&
											arguments[2],
										r =
											arguments.length > 3 && void 0 !== arguments[3]
												? arguments[3]
												: 0,
										s =
											arguments.length > 4 &&
											void 0 !== arguments[4] &&
											arguments[4];
									if ('number' == typeof e && isNaN(e)) return '-';
									var o = e.base,
										a = e.quote;
									return (0, y.jsx)(p.Z, {
										base_amount: o.amount,
										base_asset: o.asset_id,
										quote_amount: a.amount,
										quote_asset: a.asset_id,
										hide_value: n,
										hide_symbols: t,
										factor: r,
										negative_invert: s,
									});
								},
							},
							{
								key: 'renderFlagIndicators',
								value: function (e, t) {
									return (0, y.jsx)('div', {
										children: t.map(function (t) {
											return (0,
											y.jsx)(ot, {name: t, isSet: e[t]}, 'flag_'.concat(t));
										}),
									});
								},
							},
							{
								key: 'renderPermissionIndicators',
								value: function (e, t) {
									return (0, y.jsx)('div', {
										children: t.map(function (t) {
											return (0,
											y.jsx)(at, {name: t, isSet: e[t]}, 'perm_'.concat(t));
										}),
									});
								},
							},
							{
								key: 'renderAuthorityList',
								value: function (e) {
									return e.map(function (e) {
										return (0,
										y.jsxs)('span', {children: [(0, y.jsx)(c.Z, {account: e}), ' ']}, e);
									});
								},
							},
							{
								key: 'renderMarketList',
								value: function (e, t) {
									var n = e.symbol;
									return t.map(
										function (e) {
											if (e == n) return null;
											var t = e + '_' + n,
												r = e + '/' + n;
											return (0, y.jsxs)(
												'span',
												{
													children: [
														(0, y.jsx)(s.Z, {
															to: '/market/'.concat(t),
															children: r,
														}),
														' ',
													],
												},
												t
											);
										}.bind(this)
									);
								},
							},
							{
								key: 'renderAboutBox',
								value: function (e, t) {
									var n = P.BQ.getObject(e.issuer, !1, !1),
										r = n ? n.get('name') : '',
										o = _.Z.parseDescription(e.options.description),
										a = o.main,
										c = o.short_name ? o.short_name : null,
										l = (a = a && a.length > 0 ? a + ' ' : a).match(
											/(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g
										),
										u = P.BQ.getAsset('1.3.0'),
										d = o.market ? o.market : u ? u.get('symbol') : 'META1';
									e.symbol === u.get('symbol') && (d = 'USDT'),
										l &&
											l.length &&
											l.forEach(function (e) {
												var t =
													'<a target="_blank" class="external-link" rel="noopener noreferrer" href="'
														.concat(e, '">')
														.concat(e, '</a>');
												a = a.replace(e, t);
											});
									var p = b.Z.replaceName(t),
										f = p.name,
										h = p.prefix;
									return (0, y.jsxs)('div', {
										style: {overflow: 'visible'},
										children: [
											(0, y.jsx)(m.Z, {
												path: 'assets/' + e.symbol,
												alt_path: 'assets/Asset',
												section: 'summary',
												symbol: (h || '') + f,
												description: a,
												prediction: 'asdsad',
												issuer: r,
												hide_issuer: 'true',
											}),
											c ? (0, y.jsx)('p', {children: c}) : null,
											(0, y.jsx)(s.Z, {
												className: 'button market-button',
												to: '/market/'.concat(e.symbol, '_').concat(d),
												children: (0, y.jsx)(i(), {content: 'exchange.market'}),
											}),
										],
									});
								},
							},
							{
								key: 'renderSummary',
								value: function (e) {
									var t = this.props.getDynamicObject(e.dynamic_asset_data_id);
									t && (t = t.toJS());
									var n = e.options,
										s = _.Z.getFlagBooleans(
											e.options.flags,
											this.props.asset.has('bitasset_data_id')
										),
										o = Object.keys(s),
										a = 'bitasset' in e && e.bitasset.is_prediction_market,
										u = null;
									if (a) {
										var p = _.Z.parseDescription(e.options.description);
										u = (0, y.jsxs)(r.Fragment, {
											children: [
												(0, y.jsxs)('tr', {
													children: [
														(0, y.jsx)('td', {
															children: (0, y.jsx)(ve.Z, {
																title: G().translate(
																	'explorer.asset.prediction_market_asset.tooltip_prediction'
																),
																children: (0, y.jsx)(i(), {
																	content:
																		'explorer.asset.prediction_market_asset.prediction',
																}),
															}),
														}),
														(0, y.jsx)('td', {
															children: (0, y.jsx)(ve.Z, {
																title: G().translate(
																	'explorer.asset.prediction_market_asset.tooltip_prediction'
																),
																children: p.condition,
															}),
														}),
													],
												}),
												(0, y.jsxs)('tr', {
													children: [
														(0, y.jsx)('td', {
															children: (0, y.jsx)(ve.Z, {
																title: G().translate(
																	'explorer.asset.prediction_market_asset.tooltip_resolution_date'
																),
																children: (0, y.jsx)(i(), {
																	content:
																		'explorer.asset.prediction_market_asset.resolution_date',
																}),
															}),
														}),
														(0, y.jsx)('td', {
															children: (0, y.jsx)(ve.Z, {
																title: G().translate(
																	'explorer.asset.prediction_market_asset.tooltip_resolution_date'
																),
																children: p.expiry,
															}),
														}),
													],
												}),
											],
										});
									}
									var h = t
											? (0, y.jsxs)('tr', {
													children: [
														(0, y.jsx)('td', {
															children: (0, y.jsx)(i(), {
																content:
																	'explorer.asset.summary.current_supply',
															}),
														}),
														(0, y.jsx)('td', {
															children: (0, y.jsx)(d.Z, {
																amount: t.current_supply,
																asset: e.id,
															}),
														}),
													],
											  })
											: null,
										m = t
											? (0, y.jsxs)('tr', {
													children: [
														(0, y.jsx)('td', {
															children: (0, y.jsx)(i(), {
																content:
																	'explorer.asset.summary.stealth_supply',
															}),
														}),
														(0, y.jsx)('td', {
															children: (0, y.jsx)(d.Z, {
																amount: t.confidential_supply,
																asset: e.id,
															}),
														}),
													],
											  })
											: null,
										b = s.charge_market_fee
											? (0, y.jsxs)('tr', {
													children: [
														(0, y.jsx)('td', {
															children: (0, y.jsx)(i(), {
																content: 'explorer.asset.summary.market_fee',
															}),
														}),
														(0, y.jsxs)('td', {
															children: [
																' ',
																n.market_fee_percent / 100,
																' % ',
															],
														}),
													],
											  })
											: null,
										x =
											s.charge_market_fee &&
											n.extensions &&
											n.extensions.reward_percent >= 0
												? (0, y.jsxs)('tr', {
														children: [
															(0, y.jsx)('td', {
																children: (0, y.jsxs)(ve.Z, {
																	title: G().translate(
																		'account.user_issued_assets.reward_percent_tooltip'
																	),
																	children: [
																		(0, y.jsx)(i(), {
																			content:
																				'explorer.asset.summary.market_fee_referral_reward_percent',
																		}),
																		' ',
																		(0, y.jsx)(Je.znh, {}),
																	],
																}),
															}),
															(0, y.jsxs)('td', {
																children: [
																	' ',
																	n.extensions.reward_percent / 100,
																	' % ',
																],
															}),
														],
												  })
												: null;
									return (0, y.jsxs)('div', {
										className: 'asset-card no-padding',
										children: [
											(0, y.jsx)('div', {
												className: 'card-divider',
												children: (0, y.jsx)(f.Z, {name: e.symbol}),
											}),
											(0, y.jsx)('table', {
												className: 'table key-value-table table-hover',
												children: (0, y.jsxs)('tbody', {
													children: [
														(0, y.jsxs)('tr', {
															children: [
																(0, y.jsx)('td', {
																	children: (0, y.jsx)(i(), {
																		content:
																			'explorer.asset.summary.asset_type',
																	}),
																}),
																(0, y.jsxs)('td', {
																	children: [' ', this._assetType(e), ' '],
																}),
															],
														}),
														a && u,
														(0, y.jsxs)('tr', {
															children: [
																(0, y.jsx)('td', {
																	children: (0, y.jsx)(i(), {
																		content: 'explorer.asset.summary.issuer',
																	}),
																}),
																(0, y.jsx)('td', {
																	children: (0, y.jsx)(c.Z, {
																		account: e.issuer,
																	}),
																}),
															],
														}),
														(0, y.jsxs)('tr', {
															children: [
																(0, y.jsx)('td', {
																	children: (0, y.jsx)(i(), {
																		content: 'explorer.assets.precision',
																	}),
																}),
																(0, y.jsxs)('td', {
																	children: [' ', e.precision, ' '],
																}),
															],
														}),
														e.bitasset
															? (0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.assets.backing_asset',
																			}),
																		}),
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(l.Z, {
																				asset:
																					e.bitasset.options
																						.short_backing_asset,
																			}),
																		}),
																	],
															  })
															: null,
														h,
														m,
														b,
														x,
													],
												}),
											}),
											(0, y.jsx)('br', {}),
											this.renderFlagIndicators(s, o),
										],
									});
								},
							},
							{
								key: 'renderPriceFeed',
								value: function (e) {
									var t = e.bitasset;
									if (!('current_feed' in t))
										return (0, y.jsx)('div', {header: s});
									var n = t.current_feed,
										r = this.formattedPrice(_.Z.extractRawFeedPrice(e)),
										s = (0, y.jsxs)('div', {
											children: [
												(0, y.jsx)(i(), {
													content: 'explorer.asset.price_feed.title',
												}),
												(0, y.jsx)('span', {
													className: 'float-right',
													children: r,
												}),
											],
										});
									return (0, y.jsx)(st, {
										header: s,
										children: (0, y.jsx)('table', {
											className: 'table key-value-table table-hover',
											style: {padding: '1.2rem'},
											children: (0, y.jsxs)('tbody', {
												children: [
													(0, y.jsxs)('tr', {
														children: [
															(0, y.jsx)('td', {
																children: (0, y.jsx)(i(), {
																	content:
																		'explorer.asset.price_feed.external_feed_price',
																}),
															}),
															(0, y.jsx)('td', {children: r}),
														],
													}),
													(0, y.jsxs)('tr', {
														children: [
															(0, y.jsx)('td', {
																children: (0, y.jsx)(i(), {
																	content:
																		'explorer.asset.price_feed.feed_lifetime',
																}),
															}),
															(0, y.jsx)('td', {
																children: t.options.feed_lifetime_sec / 60 / 60,
															}),
														],
													}),
													(0, y.jsxs)('tr', {
														children: [
															(0, y.jsx)('td', {
																children: (0, y.jsx)(i(), {
																	content:
																		'explorer.asset.price_feed.min_feeds',
																}),
															}),
															(0, y.jsx)('td', {
																children: t.options.minimum_feeds,
															}),
														],
													}),
													(0, y.jsxs)('tr', {
														children: [
															(0, y.jsx)('td', {
																children: (0, y.jsx)(i(), {
																	content:
																		'explorer.asset.price_feed.maintenance_collateral_ratio',
																}),
															}),
															(0, y.jsx)('td', {
																children: n.maintenance_collateral_ratio / 1e3,
															}),
														],
													}),
													(0, y.jsxs)('tr', {
														children: [
															(0, y.jsx)('td', {
																children: (0, y.jsx)(i(), {
																	content:
																		'explorer.asset.price_feed.maximum_short_squeeze_ratio',
																}),
															}),
															(0, y.jsx)('td', {
																children: n.maximum_short_squeeze_ratio / 1e3,
															}),
														],
													}),
												],
											}),
										}),
									});
								},
							},
							{
								key: '_analyzeBids',
								value: function (e) {
									var t = e,
										n = 0,
										r = 0;
									return (
										this.state.collateralBids
											.sort(function (e, t) {
												return t.bid.toReal() - e.bid.toReal();
											})
											.forEach(function (e) {
												var s = e.collateral,
													o = e.debt;
												r < t
													? (r + o >= t
															? ((s = ((o = t - r) / e.debt) * s),
															  (e.consideredIfRevived = 2))
															: (e.consideredIfRevived = 1),
													  (n += s),
													  (r += o))
													: (e.consideredIfRevived = 0);
											}),
										{collateral: n, debt: r}
									);
								},
							},
							{
								key: 'renderSettlement',
								value: function (e) {
									var t = this,
										n = e.bitasset;
									if (!('current_feed' in n))
										return (0, y.jsx)('div', {header: I});
									var r = this.props.getDynamicObject(e.dynamic_asset_data_id);
									r && (r = r.toJS());
									var s = r ? r.current_supply : 0,
										o = n.current_feed,
										a = e.bitasset.settlement_fund > 0,
										c = null,
										l = null,
										u = null;
									if (a) {
										var f,
											h = n.settlement_fund,
											m = this.formattedPrice(n.settlement_price),
											b = this.formattedPrice(
												n.settlement_price,
												!1,
												!1,
												o.maintenance_collateral_ratio / 1e3,
												!0
											),
											x =
												(We(
													(f = {}),
													this.props.asset.get('id'),
													this.props.asset.toJS()
												),
												We(
													f,
													this.props.backingAsset.get('id'),
													this.props.backingAsset.toJS()
												),
												f),
											v = s,
											g = n.settlement_fund,
											j = this._analyzeBids(v);
										(u = (0, y.jsx)(p.Z, {
											base_amount: n.settlement_fund / 1 + j.collateral,
											base_asset: x[n.options.short_backing_asset].id,
											quote_amount: j.debt,
											quote_asset: e.id,
											hide_value: !1,
											hide_symbols: !1,
											factor: o.maintenance_collateral_ratio / 1e3,
											negative_invert: !0,
										})),
											(v /= Math.pow(10, e.precision)),
											(g /= Math.pow(
												10,
												x[n.options.short_backing_asset].precision
											));
										var w =
												j.collateral /
												Math.pow(
													10,
													x[n.options.short_backing_asset].precision
												),
											P = this._getFeedPrice();
										P &&
											((c = g / P.toReal() / v),
											(l = (g + w) / P.toReal() / v));
									} else
										var C = this.getGlobalSettlementPrice(),
											O = this.getGlobalSettlementPrice(
												o.maximum_short_squeeze_ratio / 1e3
											),
											Z = n.force_settled_volume,
											S = n.options.force_settlement_offset_percent,
											A = n.options.force_settlement_delay_sec,
											R = n.options.maximum_force_settlement_volume,
											N = this.formattedPrice(
												_.Z.extractRawFeedPrice(e),
												!1,
												!1,
												o.maximum_short_squeeze_ratio / 1e3
											),
											T = this.formattedPrice(
												_.Z.extractRawFeedPrice(e),
												!1,
												!1,
												1 - S / 1e4
											);
									var I = (0, y.jsxs)('div', {
										children: [
											(0, y.jsx)(i(), {
												content: 'explorer.asset.settlement.title',
											}),
											(0, y.jsx)('span', {
												className: 'float-right',
												children: a ? m : T,
											}),
										],
									});
									return (0, y.jsxs)(st, {
										header: I,
										children: [
											a &&
												(0, y.jsx)(i(), {
													component: 'p',
													content: 'explorer.asset.settlement.gs_description',
												}),
											a &&
												(0, y.jsxs)('p', {
													children: [
														(0, y.jsx)(i(), {
															content: 'explorer.asset.settlement.gs_revive',
														}),
														' (',
														(0, y.jsx)(i(), {
															content:
																'explorer.asset.settlement.gs_see_actions',
														}),
														',  ',
														(0, y.jsx)(i(), {
															content: 'explorer.asset.settlement.gs_or',
														}),
														' ',
														(0, y.jsx)('a', {
															onClick: function () {
																t.setState({
																	showCollateralBidInInfo:
																		!t.state.showCollateralBidInInfo,
																});
															},
															children: (0, y.jsx)(i(), {
																content:
																	'explorer.asset.settlement.gs_place_bid',
															}),
														}),
														').',
													],
												}),
											(0, y.jsx)('table', {
												className: 'table key-value-table table-hover',
												style: {padding: '1.2rem'},
												children: a
													? (0, y.jsxs)('tbody', {
															children: [
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.settlement.settlement_price',
																			}),
																		}),
																		(0, y.jsx)('td', {children: m}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.settlement.settlement_funds',
																			}),
																		}),
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(d.Z, {
																				asset: n.options.short_backing_asset,
																				amount: h,
																			}),
																		}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.settlement.settlement_funds_collateral_ratio',
																			}),
																		}),
																		(0, y.jsx)('td', {
																			children: c ? c.toFixed(6) : '-',
																		}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {children: ' '}),
																		(0, y.jsx)('td', {children: ' '}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				style: {fontWeight: 'bold'},
																				content:
																					'explorer.asset.settlement.gs_revert',
																			}),
																		}),
																		(0, y.jsx)('td', {children: ' '}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.settlement.gs_auto_revive_price',
																			}),
																		}),
																		(0, y.jsxs)('td', {
																			children: [b, ' / ', u],
																		}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.settlement.gs_collateral_valuation',
																				mcr:
																					o.maintenance_collateral_ratio / 1e3,
																			}),
																		}),
																		(0, y.jsx)('td', {
																			children: l ? l.toFixed(6) : '-',
																		}),
																	],
																}),
															],
													  })
													: (0, y.jsxs)('tbody', {
															children: [
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.price_feed.maximum_short_squeeze_price',
																			}),
																		}),
																		(0, y.jsx)('td', {children: N}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.price_feed.global_settlement_trigger',
																			}),
																		}),
																		(0, y.jsx)('td', {children: O || '-'}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.price_feed.global_settlement_price',
																			}),
																		}),
																		(0, y.jsx)('td', {children: C || '-'}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {children: ' '}),
																		(0, y.jsx)('td', {children: ' '}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				style: {fontWeight: 'bold'},
																				content:
																					'explorer.asset.settlement.force_settlement',
																			}),
																		}),
																		(0, y.jsx)('td', {children: ' '}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsxs)('td', {
																			children: [
																				(0, y.jsx)(i(), {
																					content:
																						'explorer.asset.settlement.price',
																				}),
																				'  (',
																				S / 100,
																				'%',
																				' ',
																				(0, y.jsx)(i(), {
																					content:
																						'explorer.asset.settlement.offset',
																				}),
																				')',
																			],
																		}),
																		(0, y.jsx)('td', {children: T}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.settlement.delay',
																			}),
																		}),
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(k, {time: A}),
																		}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsxs)('td', {
																			children: [
																				(0, y.jsx)(i(), {
																					content:
																						'explorer.asset.settlement.max_settle_volume',
																				}),
																				' (',
																				R / 100,
																				'%)',
																			],
																		}),
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(d.Z, {
																				asset: e.id,
																				amount: s * (R / 1e4),
																			}),
																		}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.settlement.current_settled',
																			}),
																		}),
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(d.Z, {
																				asset: e.id,
																				amount: Z,
																			}),
																		}),
																	],
																}),
																(0, y.jsxs)('tr', {
																	children: [
																		(0, y.jsx)('td', {
																			children: (0, y.jsx)(i(), {
																				content:
																					'explorer.asset.settlement.settle_remaining_volume',
																			}),
																		}),
																		(0, y.jsxs)('td', {
																			children: [
																				0 == Z
																					? 100
																					: Math.round(
																							100 - (Z / (s * (R / 1e4))) * 100,
																							2
																					  ),
																				'%',
																			],
																		}),
																	],
																}),
															],
													  }),
											}),
										],
									});
								},
							},
							{
								key: 'renderFeePool',
								value: function (e) {
									var t = this.props.getDynamicObject(e.dynamic_asset_data_id);
									t && (t = t.toJS());
									var n = e.options,
										r = P.BQ.getAsset('1.3.0');
									return (0, y.jsx)(st, {
										header: (0, y.jsxs)('div', {
											children: [
												(0, y.jsx)(i(), {
													content: 'explorer.asset.fee_pool.title',
												}),
												t
													? (0, y.jsx)('span', {
															className: 'float-right',
															children: (0, y.jsx)(d.Z, {
																asset: '1.3.0',
																amount: t.fee_pool,
															}),
													  })
													: null,
											],
										}),
										children: (0, y.jsxs)('div', {
											children: [
												(0, y.jsx)(i(), {
													component: 'p',
													content: 'explorer.asset.fee_pool.pool_text',
													unsafe: !0,
													asset: e.symbol,
													core: r.get('symbol'),
												}),
												(0, y.jsx)('table', {
													className: 'table key-value-table',
													style: {padding: '1.2rem'},
													children: (0, y.jsxs)('tbody', {
														children: [
															(0, y.jsxs)('tr', {
																children: [
																	(0, y.jsx)('td', {
																		children: (0, y.jsx)(i(), {
																			content:
																				'explorer.asset.fee_pool.core_exchange_rate',
																		}),
																	}),
																	(0, y.jsx)('td', {
																		children: this.formattedPrice(
																			n.core_exchange_rate
																		),
																	}),
																],
															}),
															(0, y.jsxs)('tr', {
																children: [
																	(0, y.jsx)('td', {
																		children: (0, y.jsx)(i(), {
																			content:
																				'explorer.asset.fee_pool.pool_balance',
																		}),
																	}),
																	(0, y.jsx)('td', {
																		children: t
																			? (0, y.jsx)(d.Z, {
																					asset: '1.3.0',
																					amount: t.fee_pool,
																			  })
																			: null,
																	}),
																],
															}),
															(0, y.jsxs)('tr', {
																children: [
																	(0, y.jsx)('td', {
																		children: (0, y.jsx)(i(), {
																			content:
																				'explorer.asset.fee_pool.unclaimed_issuer_income',
																		}),
																	}),
																	(0, y.jsx)('td', {
																		children: t
																			? (0, y.jsx)(d.Z, {
																					asset: e.id,
																					amount: t.accumulated_fees,
																			  })
																			: null,
																	}),
																],
															}),
														],
													}),
												}),
											],
										}),
									});
								},
							},
							{
								key: 'renderAssetOwnerUpdate',
								value: function (e) {
									return (0, y.jsxs)(st, {
										header: (0, y.jsx)(i(), {
											content: 'account.user_issued_assets.update_owner',
										}),
										children: [
											(0, y.jsx)(i(), {
												component: 'p',
												content: 'account.user_issued_assets.update_owner_text',
												asset: e.symbol,
											}),
											(0, y.jsx)(re, {
												asset: e,
												account: this.props.currentAccount,
												currentOwner: e.issuer,
											}),
										],
									});
								},
							},
							{
								key: 'renderFeedPublish',
								value: function (e) {
									return (0, y.jsxs)(st, {
										header: (0, y.jsx)(i(), {
											content: 'transaction.trxTypes.asset_publish_feed',
										}),
										children: [
											(0, y.jsx)(i(), {
												component: 'p',
												content: 'explorer.asset.feed_producer_text',
											}),
											(0, y.jsx)(ye, {
												asset: e.id,
												account: this.props.currentAccount,
												currentOwner: e.issuer,
											}),
										],
									});
								},
							},
							{
								key: 'renderCollateralBid',
								value: function (e) {
									return (0, y.jsxs)(st, {
										header: (0, y.jsx)(i(), {
											content: 'explorer.asset.collateral.bid',
										}),
										children: [
											(0, y.jsx)(i(), {
												component: 'p',
												content: 'explorer.asset.collateral.bid_text',
												asset: e.symbol,
											}),
											(0, y.jsx)(i(), {
												component: 'p',
												content:
													'explorer.asset.settlement.gs_included_on_revival',
											}),
											(0, y.jsx)(i(), {
												component: 'p',
												content: 'explorer.asset.collateral.remove_bid',
											}),
											(0, y.jsx)(Me, {
												asset: e.symbol,
												core: e.bitasset.options.short_backing_asset,
												funderAccountName: this.props.currentAccount,
												onUpdate: this.updateOnCollateralBid.bind(this),
												hideBalance: !0,
											}),
										],
									});
								},
							},
							{
								key: 'renderFeePoolFunding',
								value: function (e) {
									return (0, y.jsxs)(st, {
										header: (0, y.jsx)(i(), {
											content: 'explorer.asset.fee_pool.fund',
										}),
										children: [
											(0, y.jsx)(i(), {
												component: 'p',
												content: 'explorer.asset.fee_pool.fund_text',
												asset: e.symbol,
											}),
											(0, y.jsx)(z, {
												asset: e.symbol,
												funderAccountName: this.props.currentAccount,
												hideBalance: !0,
											}),
										],
									});
								},
							},
							{
								key: 'renderFeePoolClaiming',
								value: function (e) {
									var t = this.props.getDynamicObject(e.dynamic_asset_data_id);
									return (
										t && (t = t.toJS()),
										(0, y.jsx)(st, {
											header: (0, y.jsx)(i(), {
												content: 'explorer.asset.fee_pool.claim_balance',
											}),
											children: (0, y.jsx)(z, {
												asset: e.symbol,
												funderAccountName: this.props.currentAccount,
												dynamic: t,
												hideBalance: !0,
												type: 'claim',
											}),
										})
									);
								},
							},
							{
								key: 'renderFeesClaiming',
								value: function (e) {
									var t = this.props.getDynamicObject(e.dynamic_asset_data_id);
									return (
										t && (t = t.toJS()),
										(0, y.jsx)(st, {
											header: (0, y.jsx)(i(), {
												content: 'transaction.trxTypes.asset_claim_fees',
											}),
											children: (0, y.jsx)(z, {
												asset: e.symbol,
												dynamic: t,
												funderAccountName: this.props.currentAccount,
												hideBalance: !0,
												type: 'claim_fees',
											}),
										})
									);
								},
							},
							{
								key: 'renderPermissions',
								value: function (e) {
									var t = e.options,
										n = _.Z.getFlagBooleans(
											e.options.issuer_permissions,
											this.props.asset.has('bitasset_data_id')
										),
										s = Object.keys(n),
										o = n.charge_market_fee
											? (0, y.jsxs)('tr', {
													children: [
														(0, y.jsx)('td', {
															children: (0, y.jsx)(i(), {
																content:
																	'explorer.asset.permissions.max_market_fee',
															}),
														}),
														(0, y.jsx)('td', {
															children:
																'USD' === e.symbol
																	? (0, y.jsx)(d.Z, {
																			amount: 100 * +t.max_market_fee,
																			asset: e.id,
																	  })
																	: (0, y.jsx)(d.Z, {
																			amount: +t.max_market_fee,
																			asset: e.id,
																	  }),
														}),
													],
											  })
											: null,
										a = (0, y.jsxs)('tr', {
											children: [
												(0, y.jsx)('td', {
													children: (0, y.jsx)(i(), {
														content: 'explorer.asset.permissions.max_supply',
													}),
												}),
												(0, y.jsx)('td', {
													children:
														'USD' === e.symbol
															? (0, y.jsx)(d.Z, {
																	amount: 100 * +t.max_supply,
																	asset: e.id,
															  })
															: (0, y.jsx)(d.Z, {
																	amount: +t.max_supply,
																	asset: e.id,
															  }),
												}),
											],
										}),
										c = n.white_list
											? (0, y.jsxs)('div', {
													children: [
														(0, y.jsx)('br', {}),
														!!t.blacklist_authorities &&
															!!t.blacklist_authorities.length &&
															(0, y.jsxs)(r.Fragment, {
																children: [
																	(0, y.jsx)(i(), {
																		content:
																			'explorer.asset.permissions.blacklist_authorities',
																	}),
																	':  ',
																	this.renderAuthorityList(
																		t.blacklist_authorities
																	),
																],
															}),
														!!t.blacklist_markets &&
															!!t.blacklist_markets.length &&
															(0, y.jsxs)(r.Fragment, {
																children: [
																	(0, y.jsx)('br', {}),
																	(0, y.jsx)(i(), {
																		content:
																			'explorer.asset.permissions.blacklist_markets',
																	}),
																	':  ',
																	this.renderMarketList(e, t.blacklist_markets),
																],
															}),
														!!t.whitelist_authorities &&
															!!t.whitelist_authorities.length &&
															(0, y.jsxs)(r.Fragment, {
																children: [
																	(0, y.jsx)('br', {}),
																	(0, y.jsx)(i(), {
																		content:
																			'explorer.asset.permissions.whitelist_authorities',
																	}),
																	':  ',
																	this.renderAuthorityList(
																		t.whitelist_authorities
																	),
																],
															}),
														!!t.whitelist_markets &&
															!!t.whitelist_markets.length &&
															(0, y.jsxs)(r.Fragment, {
																children: [
																	(0, y.jsx)('br', {}),
																	(0, y.jsx)(i(), {
																		content:
																			'explorer.asset.permissions.whitelist_markets',
																	}),
																	':  ',
																	this.renderMarketList(e, t.whitelist_markets),
																],
															}),
													],
											  })
											: null,
										l =
											e.options.extensions.whitelist_market_fee_sharing &&
											(0, y.jsxs)(r.Fragment, {
												children: [
													(0, y.jsx)('br', {}),
													(0, y.jsx)(i(), {
														content:
															'explorer.asset.permissions.accounts_in_whitelist_market_fee_sharing',
													}),
													':  ',
													this.renderAuthorityList(
														e.options.extensions.whitelist_market_fee_sharing
													),
												],
											});
									return (0, y.jsx)(st, {
										header: (0, y.jsx)(i(), {
											content: 'explorer.asset.permissions.title',
										}),
										children: (0, y.jsxs)('div', {
											children: [
												(0, y.jsx)('table', {
													className: 'table key-value-table table-hover',
													style: {padding: '1.2rem'},
													children: (0, y.jsxs)('tbody', {children: [o, a]}),
												}),
												(0, y.jsx)('br', {}),
												this.renderPermissionIndicators(n, s),
												(0, y.jsx)('br', {}),
												c,
												l,
											],
										}),
									});
								},
							},
							{
								key: 'getGlobalSettlementPrice',
								value: function () {
									var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 1;
									if (!this.state.callOrders) return null;
									for (
										var t = null,
											n = null,
											r = this.state.callOrders.length,
											s = 0;
										s < r;
										s++
									) {
										var o = this.state.callOrders[s];
										null == t
											? ((t = o), (n = o.getRatio()))
											: o.getRatio() < n && ((n = o.getRatio()), (t = o));
									}
									if (null == t) return null;
									var a = t.debt * e,
										i = t.collateral;
									return (0, y.jsx)(p.Z, {
										base_amount: i,
										base_asset: t.call_price.base.asset_id,
										quote_amount: a,
										quote_asset: t.call_price.quote.asset_id,
									});
								},
							},
							{
								key: '_renderFeedTable',
								value: function (e) {
									var t = this,
										n = e.bitasset;
									if (
										!('feeds' in n) ||
										0 == n.feeds.length ||
										n.is_prediction_market ||
										!n.feeds.length
									)
										return null;
									var s = n.feeds,
										o = _.Z.extractRawFeedPrice(s[0][1][1]),
										a = s[0][1][1].core_exchange_rate,
										l = new Date().getTime(),
										u = new Date(
											l - 1e3 * e.bitasset.options.feed_lifetime_sec
										);
									s = s
										.filter(function (e) {
											return new Date(e[1][0]) > u;
										})
										.sort(function (e, t) {
											return new Date(t[1][0]) - new Date(e[1][0]);
										});
									var d,
										p = _.Z.extractRawFeedPrice(e),
										f = p.base.amount / p.quote.amount,
										m = [];
									d = [
										{
											key: 'publisher',
											fixed: 'left',
											width: 150,
											title: (0, y.jsx)(i(), {
												content: 'explorer.asset.price_feed_data.publisher',
											}),
											dataIndex: 'publisher',
											sorter: function (e, t) {
												var n = P.BQ.getAccount(e.publisher, !1);
												n && (n = n.get('name'));
												var r = P.BQ.getAccount(t.publisher, !1);
												return (
													r && (r = r.get('name')), n > r ? 1 : n < r ? -1 : 0
												);
											},
											render: function (e) {
												return (0, y.jsx)(c.Z, {account: e});
											},
										},
										{
											key: 'feed_price',
											title: (0, y.jsxs)(r.Fragment, {
												children: [
													(0, y.jsx)(i(), {
														content:
															'explorer.asset.price_feed_data.feed_price',
													}),
													' (',
													this.formattedPrice(o, !1, !0),
													')',
												],
											}),
											dataIndex: 'feed_price',
											sorter: function (e, t) {
												var n = parseFloat(
														e.feed_price.base.amount / e.feed_price.quote.amount
													),
													r = parseFloat(
														t.feed_price.base.amount / t.feed_price.quote.amount
													);
												return n > r ? 1 : n < r ? -1 : 0;
											},
											render: function (e) {
												var n = (
													(parseFloat(e.base.amount / e.quote.amount) / f) *
														100 -
													100
												).toFixed(2);
												return (0, y.jsxs)(r.Fragment, {
													children: [
														t.formattedPrice(e, !0),
														'(',
														(0, y.jsxs)('span', {
															className:
																n > 0
																	? 'txtlabel success'
																	: n < 0
																	? 'txtlabel warning'
																	: 'txtlabel',
															children: [n, '%'],
														}),
														')',
													],
												});
											},
										},
										{
											key: 'core_exchange_rate',
											title: (0, y.jsxs)(r.Fragment, {
												children: [
													(0, y.jsx)(i(), {
														content:
															'explorer.asset.price_feed_data.core_exchange_rate',
													}),
													' ',
													'(',
													this.formattedPrice(a, !1, !0),
													')',
												],
											}),
											dataIndex: 'core_exchange_rate',
											render: function (e) {
												return t.formattedPrice(e, !0);
											},
										},
										{
											key: 'maintenance_collateral_ratio',
											title: (0, y.jsx)(i(), {
												content:
													'explorer.asset.price_feed_data.maintenance_collateral_ratio',
											}),
											dataIndex: 'maintenance_collateral_ratio',
											render: function (e) {
												return e;
											},
										},
										{
											key: 'maximum_short_squeeze_ratio',
											title: (0, y.jsx)(i(), {
												content:
													'explorer.asset.price_feed_data.maximum_short_squeeze_ratio',
											}),
											dataIndex: 'maximum_short_squeeze_ratio',
											render: function (e) {
												return e;
											},
										},
										{
											key: 'publishDate',
											fixed: 'right',
											width: 150,
											title: (0, y.jsx)(i(), {
												content: 'explorer.asset.price_feed_data.published',
											}),
											dataIndex: 'publishDate',
											sorter: function (e, t) {
												return e.publishDate.getTime() > t.publishDate.getTime()
													? 1
													: e.publishDate.getTime() < t.publishDate.getTime()
													? -1
													: 0;
											},
											render: function (e) {
												return (0, y.jsx)(h.Z, {time: e});
											},
										},
									];
									for (var b = 0; b < s.length; b++) {
										var x = s[b],
											v = x[0],
											g = new Date(x[1][0] + 'Z'),
											j = _.Z.extractRawFeedPrice(x[1][1]),
											w = x[1][1].core_exchange_rate,
											k = '' + x[1][1].maintenance_collateral_ratio / 1e3,
											C = '' + x[1][1].maximum_short_squeeze_ratio / 1e3;
										m.push({
											publisher: v,
											feed_price: j,
											core_exchange_rate: w,
											maintenance_collateral_ratio: k,
											maximum_short_squeeze_ratio: C,
											publishDate: g,
										});
									}
									return (0, y.jsx)(ze.Z, {
										style: {width: '100%'},
										rowKey: 'feedPublisher',
										columns: d,
										dataSource: m,
										pagination: !1,
										locale: {
											emptyText: (0, y.jsx)(i(), {
												content: 'explorer.asset.price_feed_data.empty',
											}),
										},
									});
								},
							},
							{
								key: '_renderMarginTable',
								value: function () {
									var e = this,
										t = this.state.cumulativeGrouping,
										n = [];
									if (
										this.state.callOrders &&
										this.state.callOrders.length > 0
									) {
										var s = t
												? (0, y.jsxs)('span', {
														children: [
															' (',
															(0, y.jsx)(i(), {
																content: 'explorer.asset.cumulative',
															}),
															')',
														],
												  })
												: (0, y.jsx)('span', {children: '      '}),
											o = 0,
											a = 0;
										this.state.callOrders.map(function (e) {
											(o += e.debt),
												(a += e.collateral),
												n.push({
													borrower: e.borrower,
													collateral: {
														amount: t ? a : e.collateral,
														asset: e.getCollateral().asset_id,
													},
													debt: {
														amount: t ? o : e.debt,
														asset: e.amountToReceive().asset_id,
													},
													call: e.call_price,
													tcr: e.order.target_collateral_ratio,
													cr: {ratio: e.getRatio(), status: e.getStatus()},
												});
										});
										var c = function (t) {
											var r = n[0][t];
											return n.length
												? (0, y.jsxs)('span', {
														children: [
															(0, y.jsx)('br', {}),
															r.base
																? e.formattedPrice(r, !1, !0)
																: (0, y.jsx)(d.Z, {
																		asset: r.asset,
																		amount: r.amount,
																		hide_amount: !0,
																  }),
														],
												  })
												: null;
										};
										(0, y.jsx)(i(), {content: 'transaction.borrower'}),
											(0, y.jsxs)(r.Fragment, {
												children: [
													(0, y.jsx)(i(), {content: 'transaction.collateral'}),
													s,
													c('collateral'),
												],
											}),
											(0, y.jsxs)(r.Fragment, {
												children: [
													(0, y.jsx)(i(), {
														content: 'transaction.borrow_amount',
													}),
													s,
													c('debt'),
												],
											}),
											(0, y.jsxs)('span', {
												children: [
													(0, y.jsx)(i(), {content: 'exchange.call'}),
													c('call'),
												],
											}),
											(0, y.jsx)(ve.Z, {
												title: G().translate(
													'borrow.target_collateral_ratio_explanation'
												),
												children: (0, y.jsx)(i(), {
													content: 'borrow.target_collateral_ratio_short',
												}),
											}),
											(0, y.jsx)(i(), {content: 'borrow.coll_ratio'});
									}
								},
							},
							{
								key: '_renderCollBidTable',
								value: function () {
									var e,
										t = [];
									e = [
										{
											key: 'bidder',
											title: (0, y.jsx)(i(), {content: 'transaction.bidder'}),
											dataIndex: 'bidder',
											fixed: 'left',
											width: 200,
											render: function (e) {
												return (0, y.jsx)(c.Z, {account: e});
											},
										},
										{
											key: 'collateral',
											title: (0, y.jsx)(i(), {
												content: 'transaction.collateral',
											}),
											dataIndex: 'collateral',
											render: function (e) {
												return (0, y.jsx)(d.Z, {
													amount: e.amount,
													asset: e.asset_id,
													hide_asset: !0,
												});
											},
										},
										{
											key: 'debt',
											title: (0, y.jsx)(i(), {
												content: 'transaction.borrow_amount',
											}),
											dataIndex: 'debt',
											render: function (e) {
												return (0, y.jsx)(d.Z, {
													amount: e.amount,
													asset: e.asset_id,
													hide_asset: !0,
												});
											},
										},
										{
											key: 'debt_cum',
											title: (0, y.jsx)(i(), {
												content: 'transaction.cumulative_borrow_amount',
											}),
											dataIndex: 'debt_cum',
											render: function (e) {
												return (0, y.jsx)(d.Z, {
													amount: e.amount,
													asset: e.asset_id,
													hide_asset: !0,
												});
											},
										},
										{
											key: 'price',
											title: (0, y.jsx)(i(), {
												content: 'explorer.asset.collateral_bid.bid',
											}),
											dataIndex: 'price',
											render: function (e) {
												return (0, y.jsx)(p.Z, {
													base_amount: e.base.amount,
													base_asset: e.base.asset_id,
													quote_amount: e.quote.amount,
													quote_asset: e.quote.asset_id,
													hide_symbols: !0,
												});
											},
										},
										{
											key: 'cr',
											title: (0, y.jsx)(i(), {content: 'borrow.coll_ratio'}),
											dataIndex: 'cr',
											render: function (e) {
												return e.toFixed(3);
											},
										},
										{
											key: 'included',
											title: (0, y.jsx)(i(), {
												content: 'borrow.considered_on_revival',
											}),
											dataIndex: 'included',
											render: function (e) {
												return 2 == e
													? (0, y.jsx)(i(), {
															content:
																'explorer.asset.collateral_bid.included.partial',
													  })
													: 1 == e
													? (0, y.jsx)(i(), {
															content:
																'explorer.asset.collateral_bid.included.yes',
													  })
													: (0, y.jsx)(i(), {
															content:
																'explorer.asset.collateral_bid.included.no',
													  });
											},
										},
									];
									var n = 0;
									return (
										this.state.collateralBids.map(function (e) {
											(n += e.debt),
												t.push({
													bidder: e.bidder,
													collateral: {
														amount: e.bid.base.amount,
														asset: e.bid.base.asset_id,
													},
													debt: {
														amount: e.bid.quote.amount,
														asset: e.bid.quote.asset_id,
													},
													debt_cum: {amount: n, asset: e.bid.quote.asset_id},
													price: e.bid,
													cr: e.getRatio(),
													included: e.consideredIfRevived,
												});
										}),
										(0, y.jsx)(ze.Z, {
											style: {width: '100%'},
											rowKey: 'feedCollBid',
											columns: e,
											dataSource: t,
											pagination: {pageSize: Number(25)},
											locale: {
												emptyText: (0, y.jsx)(i(), {
													content: 'explorer.asset.collateral_bid.empty',
												}),
											},
										})
									);
								},
							},
							{
								key: '_setFeedTab',
								value: function (e) {
									this.setState({activeFeedTab: e});
								},
							},
							{
								key: '_setAssetTab',
								value: function (e) {
									this.setState({activeAssetTab: e});
								},
							},
							{
								key: 'renderFeedTables',
								value: function (e) {
									var t = e.bitasset;
									return 'feeds' in t &&
										0 != t.feeds.length &&
										!t.is_prediction_market &&
										t.feeds.length
										? (t.settlement_fund,
										  (0, y.jsx)(o.Z, {
												onChange: this._setFeedTab.bind(this),
												activeKey: this.state.activeFeedTab,
												children: (0, y.jsx)(
													o.Z.TabPane,
													{
														tab: G().translate(
															'explorer.asset.price_feed_data.title'
														),
														children:
															'feed' == this.state.activeFeedTab
																? this._renderFeedTable(e)
																: null,
													},
													'feed'
												),
										  }))
										: null;
								},
							},
							{
								key: 'renderAssetResolvePrediction',
								value: function (e) {
									return (0, y.jsxs)(st, {
										header: (0, y.jsx)(i(), {
											content: 'account.user_issued_assets.resolve_prediction',
										}),
										children: [
											(0, y.jsx)(i(), {
												component: 'p',
												content:
													'account.user_issued_assets.resolve_prediction_text',
											}),
											(0, y.jsx)(Te, {
												asset: e,
												account: this.props.currentAccount,
											}),
										],
									});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props.asset.toJS(),
										t = 'bitasset' in e ? this.renderPriceFeed(e) : null,
										n = 'bitasset' in e ? this.renderFeedTables(e) : null;
									return (0, y.jsx)('div', {
										className: 'grid-container asset-page',
										children: (0, y.jsx)('div', {
											className: 'grid-block page-layout',
											children: (0, y.jsxs)('div', {
												className: 'grid-block main-content wrap',
												children: [
													(0, y.jsx)('div', {
														className: 'grid-block medium-up-1',
														style: {width: '100%'},
														children: this.renderAboutBox(e, this.props.asset),
													}),
													(0, y.jsxs)(o.Z, {
														onChange: this._setAssetTab.bind(this),
														activeKey: this.state.activeAssetTab,
														className: 'grid-block vertical',
														children: [
															(0, y.jsxs)(
																o.Z.TabPane,
																{
																	tab: G().translate('explorer.asset.info'),
																	children: [
																		(0, y.jsxs)('div', {
																			className:
																				'grid-block vertical large-horizontal medium-up-1 large-up-2',
																			style: {paddingTop: '1rem'},
																			children: [
																				(0, y.jsx)('div', {
																					className:
																						'grid-content small-no-padding',
																					children: this.renderSummary(e),
																				}),
																				(0, y.jsx)('div', {
																					children: (0, y.jsxs)(Ke.Z, {
																						className: 'asset-collapse',
																						children: [
																							this.renderPermissions(e),
																							this.renderFeePool(e),
																							t
																								? this.renderPriceFeed(e)
																								: null,
																							t
																								? this.renderSettlement(e)
																								: null,
																							this.state.showCollateralBidInInfo
																								? this.renderCollateralBid(e)
																								: null,
																						],
																					}),
																				}),
																			],
																		}),
																		n || null,
																	],
																},
																'info'
															),
															(0, y.jsx)(
																o.Z.TabPane,
																{
																	tab: G().translate('explorer.asset.actions'),
																	children: (0, y.jsxs)(Ke.Z, {
																		className: 'asset-collapse',
																		children: [
																			this.renderFeePoolFunding(e),
																			this.renderFeePoolClaiming(e),
																			this.renderFeesClaiming(e),
																			this.renderAssetOwnerUpdate(e),
																			'bitasset' in e &&
																				!e.bitasset.is_prediction_market &&
																				this.renderFeedPublish(e),
																			this.state.collateralBids.length > 0 &&
																				this.renderCollateralBid(e),
																			'bitasset' in e &&
																				e.bitasset.is_prediction_market &&
																				this.renderAssetResolvePrediction(e),
																		],
																	}),
																},
																'actions'
															),
														],
													}),
												],
											}),
										}),
									});
								},
							},
						]),
						n
					);
				})(r.Component);
			(it = (0, Q.$)(it, {
				listenTo: function () {
					return [J.Z];
				},
				getProps: function () {
					return {
						currentAccount:
							J.Z.getState().currentAccount || J.Z.getState().passwordAccount,
					};
				},
			})),
				(it = (0, u.Z)(it, {propNames: ['backingAsset']}));
			var ct = (function (e) {
				Ye(n, e);
				var t = tt(n);
				function n() {
					return Xe(this, n), t.apply(this, arguments);
				}
				return (
					$e(n, [
						{
							key: 'render',
							value: function () {
								if (null === this.props.asset)
									return (0, y.jsx)(Z.Z, {
										subtitle: 'asset_not_found_subtitle',
									});
								var e = this.props.asset.has('bitasset')
									? this.props.asset.getIn([
											'bitasset',
											'options',
											'short_backing_asset',
									  ])
									: '1.3.0';
								return (0, y.jsx)(
									it,
									Ve(Ve({}, this.props), {}, {backingAsset: e})
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			ct = (0, u.Z)(ct, {withDynamic: !0});
			var lt = (function (e) {
				Ye(n, e);
				var t = tt(n);
				function n() {
					return Xe(this, n), t.apply(this, arguments);
				}
				return (
					$e(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props.match.params.symbol.toUpperCase();
								return (0, y.jsx)(ct, Ve(Ve({}, this.props), {}, {asset: e}));
							},
						},
					]),
					n
				);
			})(r.Component);
		},
		98652: (e, t, n) => {
			n.d(t, {Z: () => A});
			var r = n(67294),
				s = n(58074),
				o = n.n(s),
				a = n(17076),
				i = n(97891),
				c = n(43393),
				l = n.n(c),
				u = n(112),
				d = n.n(u),
				p = n(31403),
				f = n(40840),
				h = n(45697),
				m = n.n(h),
				_ = n(31143),
				b = n(35944);
			function y(e) {
				return (
					(y =
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
					y(e)
				);
			}
			function x(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function v(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function g(e, t, n) {
				return (
					t && v(e.prototype, t),
					n && v(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function j(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && w(e, t);
			}
			function w(e, t) {
				return (
					(w =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					w(e, t)
				);
			}
			function k(e) {
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
						r = C(e);
					if (t) {
						var s = C(this).constructor;
						n = Reflect.construct(r, arguments, s);
					} else n = r.apply(this, arguments);
					return P(this, n);
				};
			}
			function P(e, t) {
				if (t && ('object' === y(t) || 'function' == typeof t)) return t;
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
			function C(e) {
				return (
					(C = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					C(e)
				);
			}
			function O(e, t, n) {
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
			var Z = (function (e) {
				j(n, e);
				var t = k(n);
				function n() {
					return x(this, n), t.apply(this, arguments);
				}
				return (
					g(n, [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return (
									!f.Z.are_equal_shallow(e.assets, this.props.assets) ||
									e.value !== this.props.value ||
									e.scroll_length !== this.props.scroll_length
								);
							},
						},
						{
							key: 'render',
							value: function () {
								return this.props.assets.length
									? (0, b.jsx)(i.Z, {
											entries: this.props.assets
												.map(function (e) {
													return e && e.get('symbol');
												})
												.filter(function (e) {
													return !!e;
												}),
											values: this.props.assets.reduce(function (e, t) {
												return (
													t && t.get('symbol') && (e[t.get('symbol')] = t), e
												);
											}, {}),
											singleEntry: this.props.assets[0]
												? (0, b.jsx)(a.Z, {
														asset: this.props.assets[0].get('id'),
														amount: 0,
														hide_amount: !0,
												  })
												: null,
											value: this.props.value,
											onChange: this.props.onChange,
											scroll_length: this.props.scroll_length,
									  })
									: null;
							},
						},
					]),
					n
				);
			})(r.Component);
			O(Z, 'propTypes', {
				value: m().string,
				onChange: m().func,
				scroll_length: m().number,
			}),
				(Z = (0, p.Z)(Z, {asList: !0}));
			var S = (function (e) {
				j(n, e);
				var t = k(n);
				function n() {
					return x(this, n), t.apply(this, arguments);
				}
				return (
					g(n, [
						{
							key: 'componentDidMount',
							value: function () {
								this.onAssetChange(this.props.asset);
							},
						},
						{
							key: 'formatAmount',
							value: function (e) {
								return (
									e || (e = ''),
									'number' == typeof e && (e = e.toString()),
									e.trim().replace(/,/g, '')
								);
							},
						},
						{
							key: '_onChange',
							value: function (e) {
								this.props.onChange &&
									this.props.onChange({
										amount: this.getNumericEventValue(e),
										asset: this.props.asset,
									});
							},
						},
						{
							key: 'onAssetChange',
							value: function (e) {
								this.props.onChange &&
									this.props.onChange({amount: this.props.amount, asset: e});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props.error
									? d().translate(this.props.error)
									: this.formatAmount(this.props.amount);
								return (0, b.jsxs)('div', {
									className: 'amount-selector',
									style: this.props.style,
									children: [
										(0, b.jsx)('label', {
											className: 'right-label',
											children: this.props.display_balance,
										}),
										(0, b.jsx)(o(), {
											className: 'left-label',
											component: 'label',
											content: this.props.label,
										}),
										(0, b.jsxs)('div', {
											className: 'inline-label input-wrapper',
											children: [
												(0, b.jsx)('input', {
													disabled: this.props.disabled,
													type: 'text',
													value: e || '',
													placeholder: this.props.placeholder,
													onChange: this._onChange.bind(this),
													tabIndex: this.props.tabIndex,
													onPaste:
														this.props.onPaste || this.onPaste.bind(this),
													onKeyPress: this.onKeyPress.bind(this),
												}),
												(0, b.jsx)('div', {
													style: {marginTop: '-10px'},
													className: 'form-label select floating-dropdown',
													children: this.props.isPrice
														? (0, b.jsx)('div', {
																className: 'dropdown-wrapper inactive',
																children: (0, b.jsxs)('div', {
																	children: [
																		this.props.asset.get('symbol'),
																		'/',
																		this.props.base,
																	],
																}),
														  })
														: (0, b.jsx)(Z, {
																ref: this.props.refCallback,
																value: this.props.asset.get('symbol'),
																assets: l().List(this.props.assets),
																onChange: this.onAssetChange.bind(this),
																scroll_length: this.props.scroll_length,
														  }),
												}),
											],
										}),
									],
								});
							},
						},
					]),
					n
				);
			})(_.C);
			O(S, 'propTypes', {
				label: m().string,
				assets: m().array,
				amount: m().any,
				placeholder: m().string,
				onChange: m().func,
				tabIndex: m().number,
				error: m().string,
				scroll_length: m().number,
			}),
				O(S, 'defaultProps', {disabled: !1, tabIndex: 0});
			const A = (S = (0, p.Z)(S));
		},
		97891: (e, t, n) => {
			n.d(t, {Z: () => _});
			var r = n(67294),
				s = n(40840),
				o = n(45697),
				a = n.n(o),
				i = n(35944);
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
			function d(e, t) {
				if (t && ('object' === c(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return p(e);
			}
			function p(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
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
			function h(e, t, n) {
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
			var m = (function (e) {
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
				})(c, e);
				var t,
					n,
					r,
					o,
					a =
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
								t = f(r);
							if (o) {
								var n = f(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return d(this, e);
						});
				function c(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, c),
						e.scroll_length,
						((t = a.call(this, e)).state = {active: !1}),
						(t.listener = !1),
						(t.onBodyClick = t.onBodyClick.bind(p(t))),
						t
					);
				}
				return (
					(t = c),
					(n = [
						{
							key: 'componentDidMount',
							value: function () {
								this._setListener();
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									!s.Z.are_equal_shallow(e.entries, this.props.entries) ||
									!s.Z.are_equal_shallow(t, this.state) ||
									e.value !== this.props.value
								);
							},
						},
						{
							key: '_setListener',
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: this.props;
								e.entries.length > 1 &&
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
							value: function (e) {
								1 === e.entries.length
									? this._removeListener()
									: e.entries.length > 1 && this._setListener(e);
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
							value: function (e) {
								var t = e.target,
									n = !1;
								do {
									if (
										t.classList &&
										t.classList.contains('dropdown') &&
										t.id === this.props.id
									) {
										n = !0;
										break;
									}
								} while ((t = t.parentNode));
								n ? e.stopPropagation() : this.setState({active: !1});
							},
						},
						{
							key: 'onChange',
							value: function (e, t) {
								t.preventDefault(),
									t.stopPropagation(),
									this.props.onChange(e),
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
								var e = this,
									t = this.props,
									n = t.entries,
									r = t.value,
									s = this.state.active;
								if (0 === n.length) return null;
								if (1 == n.length)
									return (0, i.jsx)('div', {
										className:
											'dropdown-wrapper inactive' +
											(this.props.upperCase ? ' upper-case' : ''),
										children: (0, i.jsx)('div', {
											style: {marginTop: '-10px'},
											children: this.props.singleEntry
												? this.props.singleEntry
												: n[0],
										}),
									});
								var o = n.map(function (t) {
									return (0,
									i.jsx)('li', {className: e.props.upperCase ? 'upper-case' : '', onClick: e.onChange.bind(e, e.props.values[t]), children: (0, i.jsx)('span', {children: t})}, t);
								});
								return (0, i.jsxs)('div', {
									onClick: this._toggleDropdown.bind(this),
									className:
										'dropdown-wrapper' +
										(s ? ' active' : '') +
										(this.props.upperCase ? ' upper-case' : ''),
									children: [
										(0, i.jsx)('div', {
											style: {paddingRight: 15},
											children:
												r ||
												(0, i.jsx)('span', {
													className: 'hidden',
													children: 'A',
												}),
										}),
										(0, i.jsx)('ul', {
											className: 'dropdown',
											style: {
												overflow:
													n.length > this.props.scroll_length
														? 'auto'
														: 'hidden',
											},
											children: o,
										}),
									],
								});
							},
						},
					]),
					n && l(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					c
				);
			})(r.Component);
			h(m, 'propTypes', {scroll_length: a().number}),
				h(m, 'defaultProps', {scroll_length: 9});
			const _ = m;
		},
		71665: (e, t, n) => {
			n.d(t, {Z: () => m});
			var r = n(51614),
				s = n(18825),
				o = n(40840),
				a = n(350),
				i = n(37065),
				c = n(52233),
				l = n(44431),
				u = n.n(l),
				d = n(25108);
			function p(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			var f = {},
				h = (function () {
					function e() {
						!(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e);
					}
					var t, n;
					return (
						(t = e),
						(n = [
							{
								key: 'publishFeed',
								value: function (e) {
									var t = e.publisher,
										n = e.asset_id,
										r = e.mcr,
										s = e.mssr,
										o = e.feedPrice,
										c = e.cer,
										l = a.Z.new_transaction();
									return (
										l.add_type_operation('asset_publish_feed', {
											publisher: t,
											asset_id: n,
											feed: {
												settlement_price: o.toObject(),
												maintenance_collateral_ratio: r,
												maximum_short_squeeze_ratio: s,
												core_exchange_rate: c.toObject(),
											},
										}),
										function (e) {
											return i.Z.process_transaction(l, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													d.log('----- fundPool error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'fundPool',
								value: function (e, t, n, r) {
									var s = a.Z.new_transaction(),
										c = o.Z.get_asset_precision(t.get('precision'));
									return (
										s.add_type_operation('asset_fund_fee_pool', {
											fee: {amount: 0, asset_id: '1.3.0'},
											from_account: e,
											asset_id: n.get('id'),
											amount: r * c,
										}),
										function (e) {
											return i.Z.process_transaction(s, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													d.log('----- fundPool error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'claimPool',
								value: function (e, t) {
									var n = a.Z.new_transaction();
									return (
										n.add_type_operation('asset_claim_pool', {
											fee: {amount: 0, asset_id: '1.3.0'},
											issuer: e.get('issuer'),
											asset_id: e.get('id'),
											amount_to_claim: t.toObject(),
										}),
										function (e) {
											return i.Z.process_transaction(n, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													d.log('----- claimPool error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'bidCollateral',
								value: function (e, t, n, r, s) {
									var c = o.Z.get_asset_precision(t.get('precision')),
										l = o.Z.get_asset_precision(n.get('precision')),
										u = a.Z.new_transaction();
									return (
										u.add_type_operation('bid_collateral', {
											fee: {amount: 0, asset_id: '1.3.0'},
											bidder: e,
											additional_collateral: {
												amount: r * c,
												asset_id: t.get('id'),
											},
											debt_covered: {amount: s * l, asset_id: n.get('id')},
											extensions: [],
										}),
										function (e) {
											return i.Z.process_transaction(u, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													d.log('----- collateralBid error -----\x3e', t),
														e(!1);
												});
										}
									);
								},
							},
							{
								key: 'updateOwner',
								value: function (e, t) {
									var n = a.Z.new_transaction();
									return (
										n.add_type_operation('asset_update_issuer', {
											fee: {amount: 0, asset_id: '1.3.0'},
											issuer: e.issuer,
											asset_to_update: e.id,
											new_issuer: t,
										}),
										function (e) {
											return i.Z.process_transaction(n, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													d.log('----- updateOwner error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'updateFeedProducers',
								value: function (e, t, n) {
									var r = a.Z.new_transaction();
									return (
										r.add_type_operation('asset_update_feed_producers', {
											fee: {amount: 0, asset_id: '1.3.0'},
											issuer: e,
											asset_to_update: t.get('id'),
											new_feed_producers: n,
										}),
										function (e) {
											return i.Z.process_transaction(r, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													d.log('----- updateFeedProducers error -----\x3e', t),
														e(!1);
												});
										}
									);
								},
							},
							{
								key: 'claimPoolFees',
								value: function (e, t, n) {
									var r = a.Z.new_transaction();
									return (
										r.add_type_operation('asset_claim_fees', {
											fee: {amount: 0, asset_id: 0},
											issuer: e,
											amount_to_claim: {
												asset_id: t.get('id'),
												amount: n.getAmount(),
											},
										}),
										function (e) {
											return i.Z.process_transaction(r, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													d.log('----- claimFees error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'assetGlobalSettle',
								value: function (e, t, n) {
									var r = a.Z.new_transaction();
									return (
										r.add_type_operation('asset_global_settle', {
											fee: {amount: 0, asset_id: 0},
											issuer: t,
											asset_to_settle: e.id,
											settle_price: n,
										}),
										function (e) {
											return i.Z.process_transaction(r, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													d.log(
														'[AssetActions.js:223] ----- assetGlobalSettle error -----\x3e',
														t
													),
														e(!1);
												});
										}
									);
								},
							},
							{
								key: 'createAsset',
								value: function (e, t, n, r, s, l, p, f, h) {
									d.log(
										'create asset:',
										t,
										'flags:',
										n,
										'isBitAsset:',
										l,
										'bitasset_opts:',
										f
									);
									var m = a.Z.new_transaction(),
										_ = o.Z.get_asset_precision(t.precision);
									u().config({DECIMAL_PLACES: t.precision});
									var b = new (u())(t.max_supply).times(_).toString(),
										y = new (u())(t.max_market_fee || 0).times(_).toString(),
										x = o.Z.get_asset_precision(
											c.BQ.getAsset(s.base.asset_id).get('precision')
										),
										v = {
											fee: {amount: 0, asset_id: 0},
											issuer: e,
											symbol: t.symbol,
											precision: parseInt(t.precision, 10),
											common_options: {
												max_supply: b,
												market_fee_percent: 100 * t.market_fee_percent || 0,
												max_market_fee: y,
												issuer_permissions: r,
												flags: n,
												core_exchange_rate: {
													base: {
														amount: s.base.amount * x,
														asset_id: s.base.asset_id,
													},
													quote: {
														amount: s.quote.amount * _,
														asset_id: '1.3.1',
													},
												},
												whitelist_authorities: [],
												blacklist_authorities: [],
												whitelist_markets: [],
												blacklist_markets: [],
												description: h,
												extensions: {
													reward_percent: 100 * t.reward_percent || 0,
													whitelist_market_fee_sharing: [],
												},
											},
											is_prediction_market: p,
											extensions: null,
										};
									return (
										l && (v.bitasset_opts = f),
										m.add_type_operation('asset_create', v),
										function (e) {
											return i.Z.process_transaction(m, null, !0)
												.then(function (t) {
													e(!0);
												})
												.catch(function (t) {
													d.log('----- createAsset error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'updateAsset',
								value: function (e, t, n, r, s, l, p, f, h, m, _, b, y, x, v) {
									var g = a.Z.new_transaction();
									if (v) {
										var j = o.Z.get_asset_precision(s.get('precision'));
										u().config({DECIMAL_PLACES: s.get('precision')});
										var w = new (u())(n.max_supply).times(j).toString(),
											k = new (u())(n.max_market_fee || 0).times(j).toString(),
											P = c.BQ.getAsset(r.quote.asset_id),
											C = o.Z.get_asset_precision(P.get('precision')),
											O = c.BQ.getAsset(r.base.asset_id),
											Z = o.Z.get_asset_precision(O.get('precision')),
											S = new (u())(r.quote.amount).times(C).toString(),
											A = new (u())(r.base.amount).times(Z).toString(),
											R = s.getIn(['options', 'extensions']).toJS();
										void 0 !== n.reward_percent &&
											(R.reward_percent = 100 * n.reward_percent),
											b.whitelist_market_fee_sharing &&
												(R.whitelist_market_fee_sharing =
													b.whitelist_market_fee_sharing.toJS());
										var N = {
											fee: {amount: 0, asset_id: 0},
											asset_to_update: s.get('id'),
											extensions: s.get('extensions'),
											issuer: e,
											new_issuer: t,
											new_options: {
												max_supply: w,
												max_market_fee: k,
												market_fee_percent: 100 * n.market_fee_percent,
												description: _,
												issuer_permissions: p,
												flags: l,
												whitelist_authorities: b.whitelist_authorities.toJS(),
												blacklist_authorities: b.blacklist_authorities.toJS(),
												whitelist_markets: b.whitelist_markets.toJS(),
												blacklist_markets: b.blacklist_markets.toJS(),
												extensions: R,
												core_exchange_rate: {
													quote: {amount: S, asset_id: r.quote.asset_id},
													base: {amount: A, asset_id: r.base.asset_id},
												},
											},
										};
										(e !== t && t) || delete N.new_issuer,
											g.add_type_operation('asset_update', N);
									}
									if (
										(d.log('bitasset_opts:', h, 'original_bitasset_opts:', m),
										f &&
											(h.feed_lifetime_sec !== m.feed_lifetime_sec ||
												h.minimum_feeds !== m.minimum_feeds ||
												h.force_settlement_delay_sec !==
													m.force_settlement_delay_sec ||
												h.force_settlement_offset_percent !==
													m.force_settlement_offset_percent ||
												h.maximum_force_settlement_volume !==
													m.maximum_force_settlement_volume ||
												h.short_backing_asset !== m.short_backing_asset))
									) {
										var T = {
											fee: {amount: 0, asset_id: 0},
											asset_to_update: s.get('id'),
											issuer: e,
											new_options: h,
										};
										g.add_type_operation('asset_update_bitasset', T);
									}
									return (
										d.log('feedProducers:', y, 'originalFeedProducers:', x),
										f &&
											!o.Z.are_equal_shallow(y, x) &&
											g.add_type_operation('asset_update_feed_producers', {
												fee: {amount: 0, asset_id: '1.3.0'},
												issuer: e,
												asset_to_update: s.get('id'),
												new_feed_producers: y,
											}),
										i.Z.process_transaction(g, null, !0)
											.then(function (e) {
												return d.log('asset create result:', e), !0;
											})
											.catch(function (e) {
												return (
													d.log('----- updateAsset error -----\x3e', e), !1
												);
											})
									);
								},
							},
							{
								key: 'getAssetList',
								value: function (e, t) {
									var n = this,
										r =
											arguments.length > 2 &&
											void 0 !== arguments[2] &&
											arguments[2],
										o = e + '_' + t;
									return function (a) {
										if (!f[o]) {
											var i;
											(f[o] = !0),
												a({loading: !0}),
												(i = s.yX
													.instance()
													.db_api()
													.exec('list_assets', [e, t])
													.then(function (e) {
														var t = [],
															n = [];
														e.forEach(function (e) {
															c.BQ._updateObject(e, !1),
																n.push(e.dynamic_asset_data_id),
																e.bitasset_data_id &&
																	t.push(e.bitasset_data_id);
														});
														var r = s.yX
																.instance()
																.db_api()
																.exec('get_objects', [n]),
															i =
																t.length > 0
																	? s.yX
																			.instance()
																			.db_api()
																			.exec('get_objects', [t])
																	: null;
														Promise.all([r, i]).then(function (t) {
															return (
																delete f[o],
																a({
																	assets: e,
																	dynamic: t[0],
																	bitasset_data: t[1],
																	loading: !1,
																}),
																e && e.length
															);
														});
													})
													.catch(function (e) {
														d.log('Error in AssetActions.getAssetList: ', e),
															a({loading: !1}),
															delete f[o];
													}));
											var l = Object.keys({
												META1: {
													id: 'META1',
													name: 'META1',
													selected: !1,
													options: {enabled: !1, selected: !1},
												},
											});
											return (
												r &&
													l.forEach(function (t) {
														n.getAssetList(t + '.' + e, 10);
													}),
												i
											);
										}
									};
								},
							},
							{
								key: 'lookupAsset',
								value: function (e, t) {
									var n = c.BQ.getAsset(e);
									return n
										? {assets: [n], searchID: t, symbol: e}
										: function (n) {
												setTimeout(function () {
													var r = c.BQ.getAsset(e);
													r && n({assets: [r], searchID: t, symbol: e});
												}, 200);
										  };
								},
							},
							{
								key: 'reserveAsset',
								value: function (e, t, n) {
									var r = a.Z.new_transaction();
									return (
										r.add_type_operation('asset_reserve', {
											fee: {amount: 0, asset_id: 0},
											amount_to_reserve: {amount: e, asset_id: t},
											payer: n,
											extensions: [],
										}),
										function (e) {
											return i.Z.process_transaction(r, null, !0)
												.then(function () {
													return e(!0), !0;
												})
												.catch(function (t) {
													return (
														e(!1),
														d.log('----- reserveAsset error -----\x3e', t),
														!1
													);
												});
										}
									);
								},
							},
						]),
						n && p(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e
					);
				})();
			const m = r.Z.createActions(h);
		},
	},
]);
