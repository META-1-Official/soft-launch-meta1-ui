'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[571, 397],
	{
		76922: (e, t, n) => {
			n.r(t), n.d(t, {default: () => $n});
			var r = n(67294),
				o = n(96520),
				s = n(12191),
				a = n(72277),
				i = n(112),
				c = n.n(i),
				l = n(26170),
				u = n(14289),
				p = n(22712),
				f = n(71242),
				d = n(58074),
				h = n.n(d),
				m = n(60521),
				y = n(25957),
				b = n(12615),
				_ = n(67652),
				g = n.n(_),
				v = n(11230),
				w = n(52233),
				j = n(37297),
				x = n(74754),
				O = n(35944);
			function k(e) {
				return (
					(k =
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
					k(e)
				);
			}
			function S(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function P(e, t) {
				return (
					(P =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					P(e, t)
				);
			}
			function C(e, t) {
				if (t && ('object' === k(t) || 'function' == typeof t)) return t;
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
			function Z(e) {
				return (
					(Z = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Z(e)
				);
			}
			var A = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && P(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					s =
						((r = a),
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
								t = Z(r);
							if (o) {
								var n = Z(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return C(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((t = s.call(this, e)).state = {
							showModal: !1,
							current_asset: w.BQ.assets_by_symbol.get(e.fee_asset) || '1.3.0',
						}),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'shouldComponentUpdate',
							value: function () {
								return !0;
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = w.BQ.getAsset(this.state.current_asset);
								return (0, O.jsxs)('div', {
									style: {
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',
									},
									children: [
										(0, O.jsxs)('div', {
											children: [
												' ',
												(0, O.jsx)(h(), {
													component: 'span',
													content: 'settings.current_fee_asset',
													style: {marginRight: '10px', color: 'white'},
												}),
												t ? (0, O.jsx)(b.Z, {name: t.get('symbol')}) : null,
											],
										}),
										(0, O.jsx)(
											x.Z,
											{
												buttonType: 'primary',
												style: {margin: '15px'},
												onClick: function () {
													e.setState({showModal: !0});
												},
												children: c().translate(
													'settings.change_default_fee_asset'
												),
											},
											'open_change_fee_asset'
										),
										this.state.showModal &&
											(0, O.jsx)(
												j.Z,
												{
													className: 'modal',
													show: this.state.showModal,
													current_asset: this.state.current_asset,
													displayFees: !1,
													forceDefault: !0,
													onChange: function (t) {
														e.setState({current_asset: t});
													},
													close: function () {
														e.setState({showModal: !1});
													},
												},
												'change_fee_asset_modal'
											),
									],
								});
							},
						},
					]) && S(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			const B = (0, v.$)(A, {
				listenTo: function () {
					return [o.Z];
				},
				getProps: function (e) {
					return {fee_asset: o.Z.getState().settings.get('fee_asset')};
				},
			});
			var R = n(42239),
				N = n(9676),
				T = n(55019),
				E = n(70917),
				M = n(78004),
				D = ['children'];
			function I(e, t) {
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
						? I(Object(n), !0).forEach(function (t) {
								V(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: I(Object(n)).forEach(function (t) {
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
			const L = function (e) {
				var t = e.children,
					n = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = (function (e, t) {
								if (null == e) return {};
								var n,
									r,
									o = {},
									s = Object.keys(e);
								for (r = 0; r < s.length; r++)
									(n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
								return o;
							})(e, t);
						if (Object.getOwnPropertySymbols) {
							var s = Object.getOwnPropertySymbols(e);
							for (r = 0; r < s.length; r++)
								(n = s[r]),
									t.indexOf(n) >= 0 ||
										(Object.prototype.propertyIsEnumerable.call(e, n) &&
											(o[n] = e[n]));
						}
						return o;
					})(e, D),
					r = (0, M.a)();
				return (0, O.jsx)(
					R.Z,
					F(
						F({}, n),
						{},
						{
							dropdownStyle: {backgroundColor: r.colors.dropdownOptionsColor},
							css: (0, E.iv)(
								{
									'&&& .ant-select-selector': {
										backgroundColor: r.colors.inputBackgroundColor,
										color: r.colors.inputTextColor,
										borderRadius: '6px',
										border: '1px solid #1c1f27',
									},
									'& .ant-select-arrow': {color: r.colors.primaryColor},
									'& .ant-select-item-option-content': {
										color: r.colors.primaryColor,
									},
								},
								'',
								''
							),
							children: t,
						}
					)
				);
			};
			function z(e) {
				return (
					(z =
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
					z(e)
				);
			}
			function Q(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function W(e, t) {
				return (
					(W =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					W(e, t)
				);
			}
			function U(e, t) {
				if (t && ('object' === z(t) || 'function' == typeof t)) return t;
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
			function H(e) {
				return (
					(H = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					H(e)
				);
			}
			l.Z.Text;
			var K = p.Z.Item,
				J = R.Z.Option,
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
							t && W(e, t);
					})(a, e);
					var t,
						n,
						r,
						o,
						s =
							((r = a),
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
									t = H(r);
								if (o) {
									var n = H(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return U(this, e);
							});
					function a() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((e = s.call(this)).state = {message: null}),
							(e.handleNotificationChange = e.handleNotificationChange.bind(
								q(e)
							)),
							e
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: '_setMessage',
								value: function (e) {
									var t = this;
									this.setState({message: c().translate(e)}),
										(this.timer = setTimeout(function () {
											t.setState({message: null});
										}, 4e3));
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									clearTimeout(this.timer);
								},
							},
							{
								key: 'handleNotificationChange',
								value: function (e) {
									var t = this;
									return function (n) {
										t.props.onNotificationChange(e, !!n.target.checked);
									};
								},
							},
							{
								key: 'render',
								value: function () {
									var e,
										t,
										n,
										r = this.props,
										o = r.defaults,
										s = r.setting,
										a = r.settings.get(s),
										i = null;
									switch (s) {
										case 'locale':
											(t = a),
												(e = o.map(function (e) {
													var t = 'languages.' + e,
														n = c().translate(t);
													return (0, O.jsx)(J, {value: e, children: n}, e);
												}));
											break;
										case 'themes':
											(t = a),
												(e = o.map(function (e) {
													var t = 'settings.' + e,
														n = c().translate(t);
													return (0, O.jsx)(J, {value: e, children: n}, e);
												}));
											break;
										case 'browser_notifications':
											(t = a),
												(i = (0, O.jsxs)('div', {
													className: 'settings--notifications',
													children: [
														(0, O.jsxs)('div', {
															className: 'settings--notifications--group',
															children: [
																(0, O.jsx)('div', {
																	className: 'settings--notifications--item',
																	children: (0, O.jsx)(N.Z, {
																		id: 'browser_notifications.allow',
																		checked: !!t.allow,
																		onChange:
																			this.handleNotificationChange('allow'),
																		children: c().translate(
																			'settings.browser_notifications_allow'
																		),
																	}),
																}),
																(0, O.jsx)('div', {
																	className: 'settings--notifications--group',
																	children: (0, O.jsx)('div', {
																		className: 'settings--notifications--item',
																		children: (0, O.jsx)(N.Z, {
																			id: 'browser_notifications.additional.transferToMe',
																			disabled: !t.allow,
																			checked: !!t.additional.transferToMe,
																			onChange: this.handleNotificationChange(
																				'additional.transferToMe'
																			),
																			children: c().translate(
																				'settings.browser_notifications_additional_transfer_to_me'
																			),
																		}),
																	}),
																}),
															],
														}),
														!!t.allow &&
															g().needsPermission &&
															(0, O.jsx)('a', {
																href: 'https://goo.gl/zZ7NHY',
																target: '_blank',
																rel: 'noopener noreferrer',
																className: 'external-link',
																children: (0, O.jsx)(h(), {
																	component: 'div',
																	className:
																		'settings--notifications--no-browser-support',
																	content:
																		'settings.browser_notifications_disabled_by_browser_notify',
																}),
															}),
													],
												}));
											break;
										case 'fee_asset':
											(e = null),
												(t = !0),
												(i = (0, O.jsx)(B, {}, 'fee_asset_component'));
											break;
										case 'defaultMarkets':
											(e = null), (t = null);
											break;
										case 'walletLockTimeout':
											(t = a),
												(n = (0, O.jsx)(T.Z, {
													css: function (e) {
														return {
															'&&': {
																backgroundColor: e.colors.inputBackgroundColor,
																border: 'none',
																color: e.colors.inputTextColor,
																borderRadius: '6px',
															},
														};
													},
													type: 'text',
													value: a,
													onChange: this.props.onChange.bind(this, s),
												}));
											break;
										default:
											'number' == typeof a
												? (t = o[a])
												: 'boolean' == typeof a
												? (t = a ? o[0] : o[1])
												: 'string' == typeof a && (t = a),
												o
													? (e = o.map(function (e) {
															var t = e.translate
																? c().translate('settings.'.concat(e.translate))
																: e;
															('unit' !== s && 'fee_asset' !== s) ||
																(t = (0, O.jsx)(b.Z, {name: e}));
															var n = e.translate ? e.translate : e;
															return (0,
															O.jsx)(J, {value: e.translate ? e.translate : e, children: t}, n);
													  }))
													: (n = (0, O.jsx)('input', {
															css: function (e) {
																return {
																	'&&': {
																		backgroundColor:
																			e.colors.inputBackgroundColor,
																		border: 'none',
																		color: e.colors.inputTextColor,
																		borderRadius: '6px',
																	},
																};
															},
															type: 'text',
															defaultValue: t,
															onBlur: this.props.onChange.bind(this, s),
													  }));
									}
									return 'number' == typeof t || t || e
										? (t && t.translate && (t = t.translate),
										  (0, O.jsxs)('div', {
												css: function (e) {
													return {
														backgroundColor: e.colors.settingBlockColor,
														margin: '1rem',
														padding: '1rem',
														borderRadius: '6px',
														'& .ant-form-item-label > label': {
															color: e.colors.white,
														},
													};
												},
												children: [
													(0, O.jsxs)(
														function (e) {
															var t = e.noHeader,
																n = e.setting,
																r = e.children;
															return (0, O.jsx)(O.Fragment, {
																children:
																	(t && r) ||
																	(0, O.jsx)(K, {
																		label: c().translate('settings.'.concat(n)),
																		children: r,
																	}),
															});
														},
														{
															noHeader: !1,
															setting: s,
															children: [
																e
																	? (0, O.jsxs)(O.Fragment, {
																			children: [
																				void 0,
																				(0, O.jsx)(L, {
																					value: t,
																					onChange: this.props.onChange.bind(
																						this,
																						s
																					),
																					children: e,
																				}),
																				void 0,
																			],
																	  })
																	: null,
																n || null,
																i || null,
															],
														}
													),
													(0, O.jsx)('div', {
														className: 'facolor-success',
														children: this.state.message,
													}),
												],
										  }))
										: null;
								},
							},
						]),
						n && Q(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component),
				$ = n(53825),
				X = n(37983),
				Y = n(40226),
				ee = n(40840);
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
			function ne(e, t, n) {
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
			function re(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
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
			function se(e, t) {
				return (
					(se =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					se(e, t)
				);
			}
			function ae(e, t) {
				if (t && ('object' === te(t) || 'function' == typeof t)) return t;
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
			var ce = l.Z.Title,
				le = {name: '1s8ymgn', styles: 'padding:1rem 1.5rem'},
				ue = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && se(e, t);
					})(a, e);
					var t,
						n,
						r,
						o,
						s =
							((r = a),
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
									t = ie(r);
								if (o) {
									var n = ie(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return ae(this, e);
							});
					function a() {
						return re(this, a), s.apply(this, arguments);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return (
										!ee.Z.are_equal_shallow(
											e.myAccounts,
											this.props.myAccounts
										) || e.hiddenAccounts !== this.props.hiddenAccounts
									);
								},
							},
							{
								key: 'onToggleHide',
								value: function (e, t, n) {
									n.preventDefault(), Y.Z.toggleHideAccount(e, t);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props,
										n = t.myAccounts,
										r = t.hiddenAccounts,
										o = r.toArray().concat(n).sort();
									return (0, O.jsxs)(O.Fragment, {
										children: [
											(0, O.jsxs)('div', {
												css: function (e) {
													return {
														padding: '1rem 1.5rem',
														borderBottom: '1px solid '.concat(
															e.colors.borderColor
														),
													};
												},
												children: [
													(0, O.jsx)(h(), {
														component: 'h3',
														css: function (e) {
															var t;
															return {
																'&&':
																	((t = {
																		color: e.colors.primaryColor,
																		marginBottom: '10px',
																		fontSize: '1.25rem',
																		textTransform: 'capitalize',
																	}),
																	ne(t, 'marginBottom', '10px'),
																	ne(t, 'fontWeight', '100'),
																	ne(t, 'fontSize', '1.35rem'),
																	t),
															};
														},
														content:
															'settings.' +
															this.props.menuEntries[this.props.activeSetting],
													}),
													(0, O.jsx)(ce, {
														css: function () {
															return {
																'&&': {
																	fontSize: '0.8125rem',
																	marginTop: '10px',
																},
															};
														},
														children: (0, O.jsx)(h(), {
															unsafe: !0,
															style: {paddingTop: 5, marginBottom: 30},
															content: 'settings.'.concat(
																this.props.menuEntries[
																	this.props.activeSetting
																],
																'_text'
															),
															className: 'panel-bg-color',
														}),
													}),
												],
											}),
											(0, O.jsx)('div', {
												css: le,
												children: o.length
													? (0, O.jsx)('table', {
															className: 'table',
															children: (0, O.jsx)('tbody', {
																children: o.map(function (t) {
																	var n = r.has(t),
																		o = (0, O.jsx)('a', {
																			onClick: n
																				? e.onToggleHide.bind(e, t, !1)
																				: e.onToggleHide.bind(e, t, !0),
																			children: (0, O.jsx)(h(), {
																				content:
																					'account.' +
																					(n ? 'unignore' : 'ignore'),
																			}),
																		});
																	return (0,
																	O.jsxs)('tr', {children: [(0, O.jsx)('td', {children: t}), (0, O.jsx)('td', {children: (0, O.jsx)($.Z, {to: '/account/'.concat(t, '/permissions'), children: (0, O.jsx)(h(), {content: 'settings.view_keys'})})}), (0, O.jsx)('td', {children: o})]}, t);
																}),
															}),
													  })
													: (0, O.jsx)('div', {
															children: (0, O.jsx)(h(), {
																content: 'settings.no_accounts',
															}),
													  }),
											}),
										],
									});
								},
							},
						]) && oe(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component);
			const pe = (ue = (0, v.$)(ue, {
				listenTo: function () {
					return [X.Z];
				},
				getProps: function () {
					return {
						myAccounts: X.Z.getMyAccounts(),
						hiddenAccounts: X.Z.getState().myHiddenAccounts,
					};
				},
			}));
			var fe = n(288),
				de = n(76685),
				he = n(37065),
				me = n(71577);
			function ye(e) {
				return (
					(ye =
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
					ye(e)
				);
			}
			function be(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function _e(e, t) {
				return (
					(_e =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					_e(e, t)
				);
			}
			function ge(e, t) {
				if (t && ('object' === ye(t) || 'function' == typeof t)) return t;
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
			function ve(e) {
				return (
					(ve = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ve(e)
				);
			}
			var we = p.Z.Item,
				je = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && _e(e, t);
					})(a, e);
					var t,
						n,
						r,
						o,
						s =
							((r = a),
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
									t = ve(r);
								if (o) {
									var n = ve(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return ge(this, e);
							});
					function a() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((e = s.call(this)).state = {
								lookupActive: !1,
								resetMessage: null,
							}),
							e
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'onLookup',
								value: function () {
									this.setState({lookupActive: !0});
								},
							},
							{
								key: 'onResetBrainkeySequence',
								value: function () {
									he.Z.resetBrainKeySequence(),
										this.setState({
											resetMessage: c().translate(
												'wallet.brainkey_reset_success'
											),
										});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.state.lookupActive;
									return this.props.deprecated
										? (0, O.jsxs)('div', {
												children: [
													(0, O.jsx)(fe.ChangeActiveWallet, {}),
													(0, O.jsx)(fe.WalletDelete, {}),
												],
										  })
										: (0, O.jsxs)('div', {
												children: [
													(0, O.jsx)(fe.ChangeActiveWallet, {}),
													(0, O.jsx)(fe.WalletDelete, {}),
													(0, O.jsxs)(we, {
														label: c().translate('wallet.balance_claims'),
														className: 'no-offset',
														style: {padding: '15px 0'},
														children: [
															(0, O.jsxs)('div', {
																style: {paddingBottom: 10},
																children: [
																	(0, O.jsx)(h(), {
																		content: 'settings.lookup_text',
																	}),
																	':',
																],
															}),
															(0, O.jsx)(me.Z, {
																onClick: this.onLookup.bind(this),
																children: (0, O.jsx)(h(), {
																	content: 'wallet.balance_claim_lookup',
																}),
															}),
														],
													}),
													e ? (0, O.jsx)(de.Z, {}) : null,
													(0, O.jsx)(we, {
														label: c().translate('wallet.brainkey_seq_reset'),
														className: 'no-offset',
														style: {paddingBottom: '15px'},
														children: (0, O.jsxs)('div', {
															style: {paddingBottom: 10},
															children: [
																(0, O.jsx)('p', {
																	children: (0, O.jsx)(h(), {
																		unsafe: !0,
																		content: 'wallet.brainkey_seq_reset_text',
																	}),
																}),
																(0, O.jsx)(me.Z, {
																	onClick:
																		this.onResetBrainkeySequence.bind(this),
																	children: (0, O.jsx)(h(), {
																		content: 'wallet.brainkey_seq_reset_button',
																	}),
																}),
																this.state.resetMessage
																	? (0, O.jsx)('p', {
																			style: {paddingTop: 10},
																			className: 'facolor-success',
																			children: this.state.resetMessage,
																	  })
																	: null,
															],
														}),
													}),
												],
										  });
								},
							},
						]) && be(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component),
				xe = n(40822);
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
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Se(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Pe(e, t) {
				return (
					(Pe =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Pe(e, t)
				);
			}
			function Ce(e, t) {
				if (t && ('object' === Oe(t) || 'function' == typeof t)) return t;
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
			var Ae = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && Pe(e, t);
					})(a, e);
					var t,
						n,
						r,
						o,
						s =
							((r = a),
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
									t = Ze(r);
								if (o) {
									var n = Ze(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return Ce(this, e);
							});
					function a() {
						return ke(this, a), s.apply(this, arguments);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'render',
								value: function () {
									return (0, O.jsx)(xe.Z, {});
								},
							},
						]) && Se(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component),
				Be = n(99545),
				Re = n(15947),
				Ne = n(18153),
				Te = n(38648);
			function Ee(e) {
				return (
					(Ee =
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
					Ee(e)
				);
			}
			function Me(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function De(e, t) {
				return (
					(De =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					De(e, t)
				);
			}
			function Ie(e, t) {
				if (t && ('object' === Ee(t) || 'function' == typeof t)) return t;
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
			function Fe(e) {
				return (
					(Fe = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Fe(e)
				);
			}
			const Ve = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && De(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					s =
						((r = a),
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
								t = Fe(r);
							if (o) {
								var n = Fe(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Ie(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((t = s.call(this, e)).state = {json: null, error: null}),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'upload',
							value: function (e) {
								var t = this;
								this.setState({error: !1, json: null});
								var n = e.target.files[0],
									r = new FileReader();
								(r.onload = function (e) {
									var n = e.target.result;
									try {
										var r = JSON.parse(n);
										for (var o in r) {
											var s = r[o],
												a = s.quote,
												i = s.base;
											if (!a || !i) throw new Error('Cannot parse json data.');
										}
										t.setState({json: r});
									} catch (e) {
										t.setState({error: !0});
									}
								}),
									r.readAsText(n);
							},
						},
						{
							key: 'finish',
							value: function () {
								var e = this.state.json;
								for (var t in (m.Z.clearStarredMarkets(), e)) {
									var n = e[t],
										r = n.quote,
										o = n.base;
									m.Z.addStarMarket(r, o);
								}
								Te.Z.success({
									message: c()('settings.backup_favorites_success'),
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.state;
								return (0, O.jsxs)('div', {
									children: [
										(0, O.jsx)('input', {
											type: 'file',
											id: 'file_input',
											accept: '.json',
											style: {border: 'solid', marginBottom: 15},
											onChange: this.upload.bind(this),
										}),
										e.error &&
											(0, O.jsx)('h5', {
												children: (0, O.jsx)(h(), {
													content: 'settings.backup_favorites_error',
												}),
											}),
										e.json &&
											(0, O.jsx)('p', {
												children: (0, O.jsx)(me.Z, {
													type: 'primary',
													onClick: this.finish.bind(this),
													children: (0, O.jsx)(h(), {
														content: 'settings.backup_favorites_finish',
													}),
												}),
											}),
									],
								});
							},
						},
					]) && Me(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			function Le(e) {
				return (
					(Le =
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
					Le(e)
				);
			}
			function ze(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Qe(e, t) {
				return (
					(Qe =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Qe(e, t)
				);
			}
			function We(e, t) {
				if (t && ('object' === Le(t) || 'function' == typeof t)) return t;
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
			function Ue(e) {
				return (
					(Ue = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ue(e)
				);
			}
			var qe = R.Z.Option,
				He = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && Qe(e, t);
					})(a, e);
					var t,
						n,
						r,
						o,
						s =
							((r = a),
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
									t = Ue(r);
								if (o) {
									var n = Ue(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return We(this, e);
							});
					function a() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((e = s.call(this)).state = {
								restoreType: 0,
								types: ['backup', 'key', 'legacy', 'brainkey', 'favorites'],
							}),
							e
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: '_setWalletMode',
								value: function () {
									m.Z.changeSetting({setting: 'passwordlessLogin', value: !1}),
										m.Z.changeSetting({setting: 'passwordLogin', value: !1});
								},
							},
							{
								key: '_changeType',
								value: function (e) {
									this.setState({restoreType: this.state.types.indexOf(e)});
								},
							},
							{
								key: 'render',
								value: function () {
									if (this.props.passwordLogin)
										return (0, O.jsxs)('div', {
											children: [
												(0, O.jsx)(h(), {
													content: 'settings.wallet_required',
													component: 'h4',
												}),
												(0, O.jsxs)('p', {
													className: 'dark-text-color',
													children: [
														(0, O.jsx)(h(), {
															content: 'settings.wallet_required_text',
														}),
														':',
													],
												}),
												(0, O.jsx)(me.Z, {
													type: 'primary',
													className: 'button',
													onClick: this._setWalletMode,
													children: (0, O.jsx)(h(), {
														content: 'settings.enable_wallet',
													}),
												}),
											],
										});
									var e,
										t = this.state,
										n = t.types,
										r = t.restoreType,
										o = n.map(function (e) {
											return (0,
											O.jsxs)(qe, {value: e, children: [c().translate('settings.backup_'.concat(e)), ' ']}, e);
										});
									switch (n[r]) {
										case 'backup':
											e = (0, O.jsx)('div', {children: (0, O.jsx)(Be.aQ, {})});
											break;
										case 'brainkey':
											e = (0, O.jsxs)('div', {
												children: [
													(0, O.jsx)('p', {
														style: {maxWidth: '40rem', paddingBottom: 10},
														children: (0, O.jsx)(h(), {
															content: 'settings.restore_brainkey_text',
														}),
													}),
													(0, O.jsx)(Ne.D, {nested: !0}),
												],
											});
											break;
										case 'favorites':
											e = (0, O.jsx)('div', {children: (0, O.jsx)(Ve, {})});
											break;
										default:
											e = (0, O.jsx)(Re.Z, {privateKey: 1 === r});
									}
									return (0, O.jsxs)('div', {
										children: [
											(0, O.jsx)(R.Z, {
												onChange: this._changeType.bind(this),
												className: 'bts-select',
												value: n[r],
												children: o,
											}),
											e,
										],
									});
								},
							},
						]) && ze(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component),
				Ke = n(99323);
			function Je(e) {
				return (
					(Je =
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
					Je(e)
				);
			}
			function Ge(e, t, n) {
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
			function $e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Xe(e, t) {
				return (
					(Xe =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Xe(e, t)
				);
			}
			function Ye(e, t) {
				if (t && ('object' === Je(t) || 'function' == typeof t)) return t;
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
			var tt = l.Z.Title,
				nt = {name: '1s8ymgn', styles: 'padding:1rem 1.5rem'},
				rt = {name: '1bkpu5b', styles: 'margin-top:30px'},
				ot = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && Xe(e, t);
					})(a, e);
					var t,
						n,
						r,
						o,
						s =
							((r = a),
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
									t = et(r);
								if (o) {
									var n = et(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return Ye(this, e);
							});
					function a() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((e = s.call(this)).state = {message: null}),
							e
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: '_setMessage',
								value: function (e) {
									var t = this;
									this.setState({message: c().translate(e)}),
										(this.timer = setTimeout(function () {
											t.setState({message: null});
										}, 4e3));
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									clearTimeout(this.timer);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this;
									return (0, O.jsxs)('div', {
										children: [
											(0, O.jsxs)('div', {
												css: function (e) {
													return {
														padding: '1rem 1.5rem',
														borderBottom: '1px solid '.concat(
															e.colors.borderColor
														),
													};
												},
												children: [
													(0, O.jsx)(h(), {
														component: 'h3',
														css: function (e) {
															var t;
															return {
																'&&':
																	((t = {
																		color: e.colors.primaryColor,
																		marginBottom: '10px',
																		fontSize: '1.25rem',
																		textTransform: 'capitalize',
																	}),
																	Ge(t, 'marginBottom', '10px'),
																	Ge(t, 'fontWeight', '100'),
																	Ge(t, 'fontSize', '1.35rem'),
																	t),
															};
														},
														content:
															'settings.' +
															this.props.menuEntries[this.props.activeSetting],
													}),
													(0, O.jsx)(tt, {
														css: function () {
															return {
																'&&': {
																	fontSize: '0.8125rem',
																	marginTop: '10px',
																},
															};
														},
														children: (0, O.jsx)(h(), {
															unsafe: !0,
															style: {paddingTop: 5, marginBottom: 30},
															content: 'settings.'.concat(
																this.props.menuEntries[
																	this.props.activeSetting
																],
																'_text'
															),
															className: 'panel-bg-color',
														}),
													}),
												],
											}),
											(0, O.jsxs)('div', {
												css: nt,
												children: [
													(0, O.jsx)(h(), {
														component: 'div',
														style: {
															fontWeight: 'normal',
															fontFamily: 'Roboto-Medium, arial, sans-serif',
															fontStyle: 'normal',
															fontSize: '14px',
														},
														content: 'settings.reset_text_description',
														generalName: c().translate('settings.general'),
														with: {
															generalName: c().translate('settings.general'),
															accessName: c().translate('settings.access'),
															faucetName: c().translate(
																'settings.faucet_address'
															),
														},
													}),
													(0, O.jsx)(x.Z, {
														buttonType: 'primary',
														css: rt,
														onClick: function () {
															m.Z.clearSettings().then(function () {
																e._setMessage(
																	'settings.restore_default_success'
																),
																	setTimeout(function () {
																		(0, Ke.Z)(!1);
																	}, 50);
															});
														},
														children: c().translate('settings.reset'),
													}),
													(0, O.jsx)('div', {
														className: 'facolor-success',
														style: {marginTop: '20px', height: '18px'},
														children: this.state.message,
													}),
												],
											}),
										],
									});
								},
							},
						]) && $e(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component),
				st = n(12787),
				at = n(78598);
			function it(e) {
				return (
					(it =
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
					it(e)
				);
			}
			function ct(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function lt(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ut(e, t) {
				return (
					(ut =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ut(e, t)
				);
			}
			function pt(e, t) {
				if (t && ('object' === it(t) || 'function' == typeof t)) return t;
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
			function ft(e) {
				return (
					(ft = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ft(e)
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
						t && ut(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					s =
						((r = a),
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
								t = ft(r);
							if (o) {
								var n = ft(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return pt(this, e);
						});
				function a() {
					return ct(this, a), s.apply(this, arguments);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'makeBackup',
							value: function () {
								var e = this.props.starredMarkets.toJS(),
									t = new Blob([JSON.stringify(e)], {
										type: 'application/json; charset=us-ascii',
									});
								(0, at.saveAs)(t, 'favorites.json');
							},
						},
						{
							key: 'render',
							value: function () {
								return (0, O.jsxs)('div', {
									children: [
										(0, O.jsx)('p', {
											children: (0, O.jsx)(h(), {
												content: 'settings.backup_favoritestext',
											}),
										}),
										(0, O.jsx)(me.Z, {
											type: 'primary',
											onClick: this.makeBackup.bind(this),
											children: (0, O.jsx)(h(), {
												content: 'settings.backup_favoritesbtn',
											}),
										}),
									],
								});
							},
						},
					]) && lt(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			const ht = (0, v.$)(dt, {
				listenTo: function () {
					return [o.Z];
				},
				getProps: function () {
					return {starredMarkets: o.Z.getState().starredMarkets};
				},
			});
			function mt(e) {
				return (
					(mt =
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
					mt(e)
				);
			}
			function yt(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function bt(e, t) {
				return (
					(bt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					bt(e, t)
				);
			}
			function _t(e, t) {
				if (t && ('object' === mt(t) || 'function' == typeof t)) return t;
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
			function gt(e) {
				return (
					(gt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					gt(e)
				);
			}
			var vt = R.Z.Option,
				wt = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && bt(e, t);
					})(a, e);
					var t,
						n,
						r,
						o,
						s =
							((r = a),
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
									t = gt(r);
								if (o) {
									var n = gt(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return _t(this, e);
							});
					function a() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((e = s.call(this)).state = {
								restoreType: 0,
								types: ['backup', 'brainkey', 'favorites'],
							}),
							e
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: '_changeType',
								value: function (e) {
									this.setState({restoreType: this.state.types.indexOf(e)});
								},
							},
							{
								key: 'render',
								value: function () {
									var e,
										t = this.state,
										n = t.types,
										r = t.restoreType,
										o = n.map(function (e) {
											return (0,
											O.jsxs)(vt, {value: e, children: [c().translate('settings.backupcreate_'.concat(e)), ' ']}, e);
										});
									switch (n[r]) {
										case 'backup':
											e = (0, O.jsx)(Be.Yy, {});
											break;
										case 'brainkey':
											e = (0, O.jsx)(st.Z, {});
											break;
										case 'favorites':
											e = (0, O.jsx)(ht, {});
									}
									return (0, O.jsxs)('div', {
										children: [
											(0, O.jsx)(R.Z, {
												onChange: this._changeType.bind(this),
												className: 'bts-select',
												value: n[r],
												style: {marginBottom: '16px'},
												children: o,
											}),
											e,
										],
									});
								},
							},
						]) && yt(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component),
				jt = n(24328),
				xt = n(48707),
				Ot = n(5675);
			function kt(e, t, n) {
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
			var St = l.Z.Title,
				Pt = {name: '1s8ymgn', styles: 'padding:1rem 1.5rem'};
			const Ct = function (e) {
				var t = e.disabled,
					n = e.defaultValue,
					r = e.onChange,
					o = e.menuEntries,
					s = e.activeSetting;
				return (0, O.jsxs)('div', {
					children: [
						(0, O.jsxs)('div', {
							css: function (e) {
								return {
									padding: '1rem 1.5rem',
									borderBottom: '1px solid '.concat(e.colors.borderColor),
								};
							},
							children: [
								(0, O.jsx)(h(), {
									component: 'h3',
									css: function (e) {
										var t;
										return {
											'&&':
												((t = {
													color: e.colors.primaryColor,
													marginBottom: '10px',
													fontSize: '1.25rem',
													textTransform: 'capitalize',
												}),
												kt(t, 'marginBottom', '10px'),
												kt(t, 'fontWeight', '100'),
												kt(t, 'fontSize', '1.35rem'),
												t),
										};
									},
									content: 'settings.' + o[s],
								}),
								(0, O.jsx)(St, {
									css: function () {
										return {'&&': {fontSize: '0.8125rem', marginTop: '10px'}};
									},
									children: (0, O.jsx)(h(), {
										unsafe: !0,
										style: {paddingTop: 5, marginBottom: 30},
										content: 'settings.'.concat(o[s], '_text'),
										className: 'panel-bg-color',
									}),
								}),
							],
						}),
						(0, O.jsx)('div', {
							css: Pt,
							children: (0, O.jsx)(T.Z, {
								css: function (e) {
									return {
										'&&': {
											backgroundColor: e.colors.inputBackgroundColor,
											border: 'none',
											color: e.colors.inputTextColor,
											borderRadius: '6px',
										},
									};
								},
								disabled: t,
								type: 'text',
								defaultValue: n,
								onChange: r,
							}),
						}),
					],
				});
			};
			function Zt(e) {
				return (
					(Zt =
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
					Zt(e)
				);
			}
			function At(e, t) {
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
			function Bt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? At(Object(n), !0).forEach(function (t) {
								Dt(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: At(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Rt(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Nt(e, t) {
				return (
					(Nt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Nt(e, t)
				);
			}
			function Tt(e, t) {
				if (t && ('object' === Zt(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Et(e);
			}
			function Et(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Mt(e) {
				return (
					(Mt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Mt(e)
				);
			}
			function Dt(e, t, n) {
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
			var It = l.Z.Title,
				Ft = {name: 'fu2xek', styles: 'padding:0rem 1rem'},
				Vt = {name: '1f0e1a6', styles: 'height:100%;flex:1 1 auto'};
			const Lt = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Nt(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					s =
						((r = a),
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
								t = Mt(r);
							if (o) {
								var n = Mt(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Tt(this, e);
						});
				function a(e) {
					var t;
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, a),
						Dt(Et((t = s.call(this))), 'onSettingMenuClick', function (e) {
							var n = e.key;
							t.setState({current: n}), t._redirectToEntry(n);
						});
					var n = t._getMenuEntries(e),
						r = 0,
						o = e.match.params.tab
							? n.indexOf(e.match.params.tab)
							: e.viewSettings.get('activeSetting', 0);
					o >= 0 && (r = o);
					var i = [
						'locale',
						'unit',
						'fee_asset',
						'browser_notifications',
						'showSettles',
						'walletLockTimeout',
						'themes',
						'showAssetPercent',
						'viewOnlyMode',
					];
					return (
						i.push('reset'),
						(t.state = {
							isAddNodeModalVisible: !1,
							isRemoveNodeModalVisible: !1,
							removeNode: {name: null, url: null},
							apiServer: e.settings.get('apiServer'),
							activeSetting: r,
							menuEntries: n,
							settingEntries: {
								general: i,
								access: ['apiServer', 'faucet_address'],
							},
						}),
						(t.showAddNodeModal = t.showAddNodeModal.bind(Et(t))),
						(t.hideAddNodeModal = t.hideAddNodeModal.bind(Et(t))),
						(t.showRemoveNodeModal = t.showRemoveNodeModal.bind(Et(t))),
						(t.hideRemoveNodeModal = t.hideRemoveNodeModal.bind(Et(t))),
						(t._handleNotificationChange = t._handleNotificationChange.bind(
							Et(t)
						)),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'componentDidUpdate',
							value: function (e) {
								e.match.params.tab !== this.props.match.params.tab &&
									this.props.match.params.tab &&
									this._onChangeMenu(this.props.match.params.tab);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								if (
									e.settings.get('passwordLogin') !==
									this.props.settings.get('passwordLogin')
								) {
									var t = this._getMenuEntries(this.props),
										n = this._getMenuEntries(e),
										r = t[this.state.activeSetting],
										o = n.indexOf(r),
										s = n[o];
									this.setState({menuEntries: n}),
										o && o !== this.state.activeSetting
											? this.setState({activeSetting: n.indexOf(r)})
											: (!s || this.state.activeSetting > n.length - 1) &&
											  this.setState({activeSetting: 0});
								}
							},
						},
						{
							key: 'showAddNodeModal',
							value: function () {
								this.setState({isAddNodeModalVisible: !0});
							},
						},
						{
							key: 'hideAddNodeModal',
							value: function () {
								this.setState({isAddNodeModalVisible: !1});
							},
						},
						{
							key: 'showRemoveNodeModal',
							value: function (e, t) {
								this.setState({
									isRemoveNodeModalVisible: !0,
									removeNode: {url: e, name: t},
								});
							},
						},
						{
							key: 'hideRemoveNodeModal',
							value: function () {
								this.setState({
									isRemoveNodeModalVisible: !1,
									removeNode: {url: null, name: null},
								});
							},
						},
						{
							key: '_getMenuEntries',
							value: function (e) {
								if (e.deprecated) return ['wallet', 'backup'];
								var t = [];
								return (
									t.push('general'),
									e.settings.get('passwordLogin') || t.push('wallet'),
									t.push('accounts'),
									e.settings.get('passwordLogin') || t.push('password'),
									e.settings.get('passwordLogin') || t.push('backup'),
									e.settings.get('passwordLogin') || t.push('restore'),
									t.push('access'),
									(0, Ot.dM)().show && t.push('faucet_address'),
									t.push('reset'),
									t
								);
							},
						},
						{
							key: 'triggerModal',
							value: function (e) {
								for (
									var t,
										n = arguments.length,
										r = new Array(n > 1 ? n - 1 : 0),
										o = 1;
									o < n;
									o++
								)
									r[o - 1] = arguments[o];
								(t = this.refs.ws_modal).show.apply(t, [e].concat(r));
							},
						},
						{
							key: '_handleNotificationChange',
							value: function (e, t) {
								var n = (0, xt.Z)(
									this.props.settings.get('browser_notifications'),
									e,
									t
								);
								m.Z.changeSetting({setting: 'browser_notifications', value: n});
							},
						},
						{
							key: '_handleSettingsEntryChange',
							value: function (e, t) {
								t.target
									? this._onChangeSetting(e, t)
									: this._onChangeSetting(e, {target: {value: t}});
							},
						},
						{
							key: '_onChangeSetting',
							value: function (e, t) {
								t.preventDefault && t.preventDefault();
								var n = this.props.defaults,
									r = null;
								function o(e, t) {
									if (!t) return e;
									if (!t[0].translate) return t.indexOf(e);
									for (var n = 0; n < t.length; n++)
										if (c().translate('settings.'.concat(t[n].translate)) === e)
											return n;
								}
								switch (e) {
									case 'locale':
										var s = c().getLocale();
										t.target.value !== s &&
											(f.Z.switchLocale(t.target.value),
											m.Z.changeSetting({
												setting: 'locale',
												value: t.target.value,
											}));
										break;
									case 'themes':
										m.Z.changeSetting({
											setting: 'themes',
											value: t.target.value,
										});
										break;
									case 'defaultMarkets':
										break;
									case 'walletLockTimeout':
										var a = parseInt(t.target.value, 10);
										isNaN(a) && (a = 0),
											isNaN(a) ||
												'number' != typeof a ||
												m.Z.changeSetting({
													setting: 'walletLockTimeout',
													value: a,
												});
										break;
									case 'inverseMarket':
									case 'confirmMarketOrder':
										r = 0 === o(t.target.value, n[e]);
										break;
									case 'apiServer':
										m.Z.changeSetting({
											setting: 'apiServer',
											value: t.target.value,
										}),
											this.setState({apiServer: t.target.value});
										break;
									case 'showSettles':
									case 'showAssetPercent':
									case 'passwordLogin':
									case 'viewOnlyMode':
										var i = n[e][0];
										i.translate && (i = i.translate),
											m.Z.changeSetting({
												setting: e,
												value: t.target.value === i,
											});
										break;
									case 'fee_asset':
									case 'unit':
										var l = n.unit,
											u = o(t.target.value, l);
										m.Z.changeSetting({setting: e, value: l[u]});
										break;
									default:
										r = o(t.target.value, n[e]);
								}
								null !== r && m.Z.changeSetting({setting: e, value: r});
							},
						},
						{
							key: 'onReset',
							value: function () {
								m.Z.clearSettings();
							},
						},
						{
							key: '_redirectToEntry',
							value: function (e) {
								this.props.history.push('/settings/' + e);
							},
						},
						{
							key: '_onChangeMenu',
							value: function (e) {
								var t = this.state.menuEntries.indexOf(e);
								this.setState({activeSetting: t}),
									m.Z.changeViewSetting({activeSetting: t});
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t = this,
									n = this.props,
									r = n.settings,
									o = n.defaults,
									s = this.state,
									a = s.menuEntries,
									i = s.activeSetting,
									c = s.settingEntries,
									l = a[i] || a[0];
								switch (l) {
									case 'accounts':
										e = (0, O.jsx)(pe, {menuEntries: a, activeSetting: i});
										break;
									case 'wallet':
										e = (0, O.jsx)(je, Bt({}, this.props));
										break;
									case 'password':
										e = (0, O.jsx)(Ae, {});
										break;
									case 'backup':
										e = (0, O.jsx)(wt, {});
										break;
									case 'restore':
										e = (0, O.jsx)(He, {
											passwordLogin: this.props.settings.get('passwordLogin'),
										});
										break;
									case 'access':
										e = (0, O.jsx)(jt.Z, {
											faucet: r.get('faucet_address'),
											nodes: o.apiServer,
											onChange: this._onChangeSetting.bind(this),
											showAddNodeModal: this.showAddNodeModal,
											showRemoveNodeModal: this.showRemoveNodeModal,
											menuEntries: a,
											activeSetting: i,
										});
										break;
									case 'faucet_address':
										e = (0, O.jsx)(Ct, {
											disabled: !(0, Ot.dM)().editable,
											defaultValue: r.get('faucet_address'),
											onChange: function () {
												return (0, Ot.dM)().editable
													? t._onChangeSetting.bind(t, 'faucet_address')
													: null;
											},
											menuEntries: a,
											activeSetting: i,
										});
										break;
									case 'reset':
										e = (0, O.jsx)(ot, {menuEntries: a, activeSetting: i});
										break;
									default:
										e = (0, O.jsxs)('div', {
											css: Ft,
											children: [
												(0, O.jsxs)('div', {
													css: function () {
														return {padding: '1rem 1.5rem 0rem'};
													},
													children: [
														(0, O.jsx)(h(), {
															component: 'h3',
															css: function (e) {
																var t;
																return {
																	'&&':
																		((t = {
																			color: e.colors.primaryColor,
																			marginBottom: '10px',
																			fontSize: '1.25rem',
																			textTransform: 'capitalize',
																		}),
																		Dt(t, 'marginBottom', '10px'),
																		Dt(t, 'fontWeight', '100'),
																		Dt(t, 'fontSize', '1.35rem'),
																		t),
																};
															},
															content: 'settings.' + a[i],
														}),
														(0, O.jsx)(It, {
															css: function () {
																return {
																	'&&': {
																		fontSize: '0.8125rem',
																		marginTop: '10px',
																	},
																};
															},
															children: (0, O.jsx)(h(), {
																unsafe: !0,
																style: {paddingTop: 5, marginBottom: 30},
																content: 'settings.'.concat(a[i], '_text'),
																className: 'panel-bg-color',
															}),
														}),
													],
												}),
												c[l].map(function (e) {
													return (0,
													O.jsx)(G, Bt({setting: e, settings: r, defaults: o['fee_asset' === e ? 'unit' : e], onChange: t._handleSettingsEntryChange.bind(t), onNotificationChange: t._handleNotificationChange, locales: t.props.localesObject}, t.state), e);
												}),
											],
										});
								}
								return (0, O.jsxs)('div', {
									css: function (e) {
										return Dt(
											{padding: '0.3rem 2rem', width: '75%'},
											'@media (max-width: '.concat(e.sizes.lg, ')'),
											{width: '100%'}
										);
									},
									children: [
										(0, O.jsx)(u.Z, {
											onClick: this.onSettingMenuClick,
											selectedKeys: [l],
											mode: 'horizontal',
											children: a.map(function (e, t) {
												return (0,
												O.jsx)(u.Z.Item, {className: t === i ? 'active' : '', children: (0, O.jsx)(h(), {content: 'settings.' + e})}, e);
											}),
										}),
										(0, O.jsx)('div', {
											css: function (e) {
												return {
													border: '1px solid '.concat(e.colors.borderColor),
													borderRadius: '7px',
												};
											},
											children: (0, O.jsx)(p.Z, {
												layout: 'vertical',
												children: (0, O.jsxs)('div', {
													children: [
														(0, O.jsx)('div', {
															css: Vt,
															children: (0, O.jsx)('div', {
																className:
																	'grid-block small-12 no-margin vertical',
																children: e,
															}),
														}),
														(0, O.jsx)(y.Z, {
															removeNode: this.state.removeNode,
															isAddNodeModalVisible:
																this.state.isAddNodeModalVisible,
															isRemoveNodeModalVisible:
																this.state.isRemoveNodeModalVisible,
															onAddNodeClose: this.hideAddNodeModal,
															onRemoveNodeClose: this.hideRemoveNodeModal,
															apis: o.apiServer,
															api: o.apiServer
																.filter(function (e) {
																	return e.url === t.state.apiServer;
																})
																.reduce(function (e, t) {
																	return t && t.url;
																}, null),
															changeConnection: function (e) {
																t.setState({apiServer: e});
															},
														}),
													],
												}),
											}),
										}),
									],
								});
							},
						},
					]),
					n && Rt(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			var zt = n(79876),
				Qt = n(8564),
				Wt = n(3049),
				Ut = n(11211),
				qt = n(41185),
				Ht = n(34342),
				Kt = n.n(Ht),
				Jt = n(674),
				Gt = n(3768),
				$t = n(62979),
				Xt = n(87753),
				Yt = n.n(Xt),
				en = n(8174),
				tn = n(61580),
				nn = n(25108);
			function rn(e) {
				return (
					(rn =
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
					rn(e)
				);
			}
			function on(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function sn(e, t) {
				return (
					(sn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					sn(e, t)
				);
			}
			function an(e, t) {
				if (t && ('object' === rn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return cn(e);
			}
			function cn(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function ln(e) {
				return (
					(ln = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ln(e)
				);
			}
			function un(e, t, n) {
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
			const pn = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && sn(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					s =
						((r = a),
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
								t = ln(r);
							if (o) {
								var n = ln(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return an(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						un(cn((t = s.call(this, e))), 'showScreenshot', function () {
							t.setState({showScreen: !t.state.showScreen});
						}),
						un(cn(t), 'getLogs', function () {
							Gt.Z.getLogs().then(function (e) {
								t.setState({logEntries: e.join('\n')});
							});
						}),
						(t.state = t.getInitialState(e)),
						(t.showLog = t.showLog.bind(cn(t))),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'getInitialState',
							value: function () {
								return {
									loadingImage: !1,
									logEntries: [],
									logsCopySuccess: !1,
									showLog: !1,
									imageURI: null,
									showScreen: !1,
								};
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								var n = this,
									r =
										this.props.visible !== e.visible ||
										this.state.imageURI !== t.imageURI ||
										this.state.showLog !== t.showLog ||
										this.state.showScreen !== t.showScreen;
								return (
									e.visible &&
										this.props.visible !== e.visible &&
										(this.getLogs(),
										Yt()(document.getElementById('content'))
											.then(function (e) {
												return e.toDataURL('image/png');
											})
											.then(
												function (e) {
													return n.setState({imageURI: e});
												},
												function (e) {
													nn.error('Screenshot could not be captured', e),
														n.setState({
															imageURI: 'Screenshot could not be captured',
														});
												}
											)),
									r
								);
							},
						},
						{
							key: 'onLogEntryChanged',
							value: function (e) {
								this.setState({logEntries: [e.target.value]});
							},
						},
						{
							key: 'showLog',
							value: function () {
								this.setState({showLog: !this.state.showLog});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.state,
									n = t.logEntries,
									r = t.loadingImage,
									o = t.logsCopySuccess,
									s = t.showLog,
									a = t.showScreen;
								return (0, O.jsx)(en.Z, {
									title: c().translate('modal.report.title'),
									visible: this.props.visible,
									onCancel: this.props.hideModal,
									footer: [
										(0, O.jsx)(
											me.Z,
											{
												onClick: this.props.hideModal,
												children: c().translate('modal.ok'),
											},
											'submit'
										),
									],
									children: (0, O.jsxs)('div', {
										className: 'grid-block vertical no-overflow',
										children: [
											(0, O.jsx)('p', {
												children: (0, O.jsx)(h(), {
													content: 'modal.report.explanatory_text_1',
												}),
											}),
											(0, O.jsxs)('span', {
												className: 'raw',
												style: {
													border: '1px solid darkgray',
													marginBottom: '1em',
												},
												children: [
													(0, O.jsx)('div', {
														className: 'right-label',
														style: {paddingBottom: '0em'},
														children: (0, O.jsx)($t.Z, {
															text: this.state.logEntries,
														}),
													}),
													(0, O.jsx)(tn.Z, {
														title: this.state.showLog
															? c().translate('modal.report.hideLog')
															: c().translate('modal.report.showLog'),
														children: (0, O.jsx)('div', {
															onClick: this.showLog,
															style: {cursor: 'pointer'},
															children: (0, O.jsxs)('label', {
																className: 'left-label',
																style: {
																	paddingTop: '1em',
																	paddingLeft: '0.5em',
																	cursor: 'pointer',
																},
																children: [
																	this.state.showLog ? '-' : '+',
																	' ',
																	(0, O.jsx)(h(), {
																		content: 'modal.report.lastLogEntries',
																	}),
																],
															}),
														}),
													}),
													(function () {
														if (s)
															return (0, O.jsx)('textarea', {
																id: 'logsText',
																style: {},
																rows: '20',
																value: n,
																onChange: e.onLogEntryChanged.bind(e),
															});
													})(),
												],
											}),
											(0, O.jsxs)('span', {
												className: 'raw',
												style: {
													border: '1px solid darkgray',
													marginBottom: '1em',
												},
												children: [
													(0, O.jsx)('div', {
														className: 'right-label',
														style: {paddingBottom: '0em'},
														children:
															null != this.state.imageURI
																? (0, O.jsx)('img', {
																		style: {
																			height: '2.8em',
																			marginTop: '0em',
																			marginRight: '0em',
																		},
																		src: this.state.imageURI,
																  })
																: 'Failed',
													}),
													(0, O.jsx)('div', {
														className: 'right-label',
														style: {
															paddingBottom: '0em',
															paddingTop: '1em',
															paddingRight: '0.5em',
														},
														children: (0, O.jsx)(h(), {
															content: 'modal.report.copyScreenshot',
														}),
													}),
													(0, O.jsx)(tn.Z, {
														title: this.state.showScreen
															? c().translate('modal.report.hideScreenshot')
															: c().translate('modal.report.takeScreenshot'),
														children: (0, O.jsx)('div', {
															onClick: this.showScreenshot,
															style: {cursor: 'pointer'},
															children: (0, O.jsxs)('label', {
																className: 'left-label',
																style: {
																	paddingTop: '1em',
																	paddingLeft: '0.5em',
																	cursor: 'pointer',
																},
																children: [
																	this.state.showScreen ? '-' : '+',
																	' ',
																	(0, O.jsx)(h(), {
																		content: 'modal.report.screenshot',
																	}),
																],
															}),
														}),
													}),
													(function () {
														if (null != e.state.imageURI && a)
															return e.state.imageURI.length > 100
																? (0, O.jsx)('img', {src: e.state.imageURI})
																: (0, O.jsx)('text', {
																		children: 'this.state.imageURI',
																  });
													})(),
												],
											}),
											(0, O.jsx)('br', {}),
											(0, O.jsxs)('p', {
												children: [
													(0, O.jsx)(h(), {
														content: 'modal.report.explanatory_text_2',
													}),
													(0, O.jsx)('br', {}),
													'  ',
													(0, O.jsx)('a', {
														href: 'https://Meta1.com',
														target: '_blank',
														rel: 'noopener noreferrer',
														style: {textAlign: 'center', width: '100%'},
														className: 'external-link',
														children:
															'https://github.com/bitshares/bitshares-ui',
													}),
													(0, O.jsx)('br', {}),
													(0, O.jsx)(h(), {
														content: 'modal.report.explanatory_text_3',
													}),
													(0, O.jsx)('br', {}),
													(0, O.jsx)('br', {}),
													(0, O.jsx)(h(), {
														content: 'modal.report.explanatory_text_4',
													}),
													(0, O.jsx)('br', {}),
													'  ',
													(0, O.jsx)('a', {
														href: 'https://t.me/meta1exchange',
														target: '_blank',
														rel: 'noopener noreferrer',
														style: {textAlign: 'center', width: '100%'},
														className: 'external-link',
														children: 'https://t.me/meta1exchange',
													}),
												],
											}),
											r &&
												(0, O.jsx)('div', {
													style: {textAlign: 'center'},
													children: (0, O.jsx)(Jt.Z, {type: 'three-bounce'}),
												}),
											o &&
												(0, O.jsx)('p', {
													children: (0, O.jsx)(h(), {
														content: 'modal.report.copySuccess',
													}),
												}),
										],
									}),
								});
							},
						},
					]) && on(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			var fn = n(45697),
				dn = n.n(fn);
			function hn(e) {
				return (
					(hn =
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
					hn(e)
				);
			}
			function mn(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function yn(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function bn(e, t) {
				return (
					(bn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					bn(e, t)
				);
			}
			function _n(e, t) {
				if (t && ('object' === hn(t) || 'function' == typeof t)) return t;
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
			function gn(e) {
				return (
					(gn = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					gn(e)
				);
			}
			function vn(e, t, n) {
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
			var wn = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && bn(e, t);
				})(i, e);
				var t,
					n,
					o,
					s,
					a =
						((o = i),
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
								t = gn(o);
							if (s) {
								var n = gn(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return _n(this, e);
						});
				function i() {
					return mn(this, i), a.apply(this, arguments);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'confirmClicked',
							value: function (e, t) {
								var n = this;
								t.preventDefault(),
									setTimeout(function () {
										n.props.hideModal();
									}, 500),
									e();
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = [];
								return (
									this.props.choices.map(function (n, r) {
										t.push(
											(0, O.jsx)(
												me.Z,
												{
													type: 'primary',
													onClick: e.confirmClicked.bind(e, n.callback),
													children: c().translate(n.translationKey),
												},
												r
											)
										);
									}),
									t.push(
										(0, O.jsx)(
											me.Z,
											{
												onClick: this.props.hideModal,
												children: c().translate('modal.cancel'),
											},
											'cancel'
										)
									),
									(0, O.jsx)(en.Z, {
										width: 600,
										title: c().translate('connection.title_out_of_sync'),
										visible: this.props.visible,
										onCancel: this.props.hideModal,
										footer: t,
										id: this.props.modalId,
										overlay: !0,
										children: (0, O.jsxs)('div', {
											className: 'grid-block vertical',
											children: [
												this.props.content,
												r.Children.map(this.props.children, function (e, t) {
													var n = {};
													return (n.key = t + ''), r.cloneElement(e, n);
												}),
											],
										}),
									})
								);
							},
						},
					]) && yn(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			vn(wn, 'propTypes', {
				choices: dn().array.isRequired,
				content: dn().object,
			}),
				vn(wn, 'defaultProps', {content: null});
			const jn = wn;
			var xn = n(2486),
				On = n.n(xn),
				kn = n(25108);
			function Sn(e) {
				return (
					(Sn =
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
					Sn(e)
				);
			}
			function Pn(e, t) {
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
			function Cn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Pn(Object(n), !0).forEach(function (t) {
								In(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Pn(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Zn(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function An(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Bn(e, t, n) {
				return (
					t && An(e.prototype, t),
					n && An(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Rn(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Nn(e, t);
			}
			function Nn(e, t) {
				return (
					(Nn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Nn(e, t)
				);
			}
			function Tn(e) {
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
						r = Dn(e);
					if (t) {
						var o = Dn(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return En(this, n);
				};
			}
			function En(e, t) {
				if (t && ('object' === Sn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Mn(e);
			}
			function Mn(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Dn(e) {
				return (
					(Dn = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Dn(e)
				);
			}
			function In(e, t, n) {
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
			var Fn = (function (e) {
				Rn(r, e);
				var t = Tn(r);
				function r(e) {
					var n;
					return (
						Zn(this, r),
						((n = t.call(this, e)).state = {
							hasOutOfSyncModalBeenShownOnce: !1,
							isOutOfSyncModalVisible: !1,
							isReportModalVisible: !1,
							isAccessSettingsPopoverVisible: !1,
							showConnectingPopup: !1,
							showAccessSettingsTooltip: !1,
						}),
						(n.getNode = n.getNode.bind(Mn(n))),
						(n._showOutOfSyncModal = n._showOutOfSyncModal.bind(Mn(n))),
						(n._hideOutOfSyncModal = n._hideOutOfSyncModal.bind(Mn(n))),
						(n._showReportModal = n._showReportModal.bind(Mn(n))),
						(n._hideReportModal = n._hideReportModal.bind(Mn(n))),
						(n._showAccessSettingsTooltip = n._showAccessSettingsTooltip.bind(
							Mn(n)
						)),
						n
					);
				}
				return (
					Bn(r, [
						{
							key: '_showOutOfSyncModal',
							value: function () {
								this.setState({isOutOfSyncModalVisible: !0});
							},
						},
						{
							key: '_hideOutOfSyncModal',
							value: function () {
								this.setState({isOutOfSyncModalVisible: !1});
							},
						},
						{
							key: '_showReportModal',
							value: function () {
								this.setState({isReportModalVisible: !0});
							},
						},
						{
							key: '_hideReportModal',
							value: function () {
								this.setState({isReportModalVisible: !1});
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this.checkNewVersionAvailable.call(this),
									(this.downloadLink = 'https://bitshares.org/download');
								var e = this._ensureConnectivity.bind(this);
								On().on('wakeup', function () {
									e();
								});
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									t.isOutOfSyncModalVisible !==
										this.state.isOutOfSyncModalVisible ||
									t.isReportModalVisible !== this.state.isReportModalVisible ||
									e.dynGlobalObject !== this.props.dynGlobalObject ||
									e.backup_recommended !== this.props.backup_recommended ||
									e.rpc_connection_status !==
										this.props.rpc_connection_status ||
									e.synced !== this.props.synced ||
									t.isAccessSettingsPopoverVisible !==
										this.state.isAccessSettingsPopoverVisible ||
									t.showAccessSettingsTooltip !==
										this.state.showAccessSettingsTooltip
								);
							},
						},
						{key: 'checkNewVersionAvailable', value: function () {}},
						{
							key: 'downloadVersion',
							value: function () {
								var e = document.createElement('a');
								(e.href = this.downloadLink),
									(e.target = '_blank'),
									(e.rel = 'noopener noreferrer'),
									(e.style = 'display: none;'),
									document.body.appendChild(e),
									e.click(),
									document.body.removeChild(e);
							},
						},
						{
							key: 'launchIntroJS',
							value: function () {
								var e = n(112),
									t = document.querySelectorAll('[data-intro]'),
									r = o.Z.getState().settings.get('themes');
								0 == t.length
									? this.props.history.push('/help')
									: Kt()
											.introJs()
											.setOptions({
												tooltipClass: r,
												highlightClass: r,
												showBullets: !1,
												hideNext: !0,
												hidePrev: !0,
												nextLabel: e.translate('walkthrough.next_label'),
												prevLabel: e.translate('walkthrough.prev_label'),
												skipLabel: e.translate('walkthrough.skip_label'),
												doneLabel: e.translate('walkthrough.done_label'),
											})
											.start();
							},
						},
						{
							key: 'getNodeIndexByURL',
							value: function (e) {
								var t = this.props.defaults.apiServer.findIndex(function (t) {
									return !!t && !!t.url && t.url === e;
								});
								return -1 === t ? null : t;
							},
						},
						{
							key: 'getCurrentNodeIndex',
							value: function () {
								var e = this.props;
								return this.getNodeIndexByURL.call(this, e.currentNode);
							},
						},
						{
							key: 'getNode',
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: {url: '', operator: ''};
								if (!e || !e.url) throw 'Node is undefined of has no url';
								var t = this.props,
									n = -1 !== e.url.indexOf('testnet');
								e.location &&
									e.location.translate &&
									(e.location = c().translate(e.location.translate));
								var r = e.country;
								return {
									name: r,
									url: e.url,
									ping: e.url in t.apiLatencies ? t.apiLatencies[e.url] : -1,
									testNet: n,
								};
							},
						},
						{
							key: 'getBlockTime',
							value: function () {
								var e = w.BQ.getObject('2.1.0');
								if (e) {
									var t = e.get('time');
									return /Z$/.test(t) || (t += 'Z'), new Date(t);
								}
								throw new Error('Blocktime not available right now');
							},
						},
						{
							key: 'getBlockTimeDelta',
							value: function () {
								try {
									var e =
											(this.getBlockTime().getTime() +
												w.BQ.getEstimatedChainTimeOffset()) /
											1e3,
										t = new Date().getTime() / 1e3;
									return Math.abs(t - e);
								} catch (e) {
									return kn.log(e), -1;
								}
							},
						},
						{
							key: '_closeOutOfSyncModal',
							value: function () {
								this._hideOutOfSyncModal();
							},
						},
						{
							key: '_ensureConnectivity',
							value: function () {
								var e = this;
								if (On().now('active'))
									if ('closed' !== this.props.rpc_connection_status)
										if (this.props.synced)
											setTimeout(function () {
												e._closeOutOfSyncModal(),
													e.setState({hasOutOfSyncModalBeenShownOnce: !1});
											}, 50);
										else {
											var t = this._getForceReconnectAfterSeconds();
											setTimeout(function () {
												e.props.synced || e._triggerReconnect();
											}, 1e3 * t),
												this.getBlockTimeDelta() > 19 &&
													(kn.log(
														'Your node is out of sync since ' +
															this.getBlockTimeDelta() +
															' seconds, waiting 10 seconds, then we notify you'
													),
													setTimeout(function () {
														e.getBlockTimeDelta() > 19 &&
															!1 === e.state.hasOutOfSyncModalBeenShownOnce &&
															(e.setState({hasOutOfSyncModalBeenShownOnce: !0}),
															e._showOutOfSyncModal());
													}, 1e4));
										}
									else
										kn.log('Your connection was lost'),
											setTimeout(function () {
												e._triggerReconnect();
											}, 50);
							},
						},
						{
							key: '_getForceReconnectAfterSeconds',
							value: function () {
								return 60;
							},
						},
						{
							key: '_triggerReconnect',
							value: function () {
								var e = this,
									t =
										!(arguments.length > 0 && void 0 !== arguments[0]) ||
										arguments[0];
								if (
									(!t || Ke._.isAutoSelection()) &&
									!Ke._.isTransitionInProgress()
								) {
									this._closeOutOfSyncModal(),
										kn.log('Trying to reconnect ...');
									var n = Ke._.willTransitionTo(!1);
									n &&
										setTimeout(function () {
											e.forceUpdate();
										}, 10),
										n.then(function () {
											kn.log('... done trying to reconnect');
										});
								}
							},
						},
						{
							key: '_showAccessSettingsTooltip',
							value: function (e) {
								this.state.isAccessSettingsPopoverVisible
									? this.setState({showAccessSettingsTooltip: !1})
									: this.setState({showAccessSettingsTooltip: e});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.state,
									n = this.props,
									r = n.synced,
									o = !('closed' === this.props.rpc_connection_status),
									s = this.props.defaults.apiServer,
									a = this.getCurrentNodeIndex.call(this),
									i = this.getNode(s[a] || s[0]);
								if ('wss://fake.automatic-selection.com' == i.url) {
									var l = n.activeNode;
									i = (a = this.getNodeIndexByURL.call(this, l))
										? this.getNode(s[a])
										: this.getNode(s[0]);
								}
								var u = this.props.dynGlobalObject.get('head_block_number'),
									p = '3.1.190820-rc1'.match(/2\.0\.(\d\w+)/),
									f = p ? '.'.concat(p[1]) : ' '.concat('3.1.190820-rc1'),
									d = '3.1.190820-rc1'.match(/-rc[0-9]$/);
								return (
									d && (f += d[0]),
									this._ensureConnectivity(),
									(0, O.jsxs)('div', {
										children: [
											!!Ke._ &&
												Ke._.isTransitionInProgress() &&
												(0, O.jsx)(Jt.Z, {
													loadingText: Ke._.getTransitionTarget(),
												}),
											(0, O.jsx)(jn, {
												showModal: this._showOutOfSyncModal,
												hideModal: this._hideOutOfSyncModal,
												visible: this.state.isOutOfSyncModalVisible,
												choices: [
													{
														translationKey: 'connection.manual_reconnect',
														callback: function () {
															e.props.synced || e._triggerReconnect(!1);
														},
													},
													{
														translationKey: 'connection.manual_ping',
														callback: function () {
															e.props.synced || e.onAccess();
														},
													},
												],
												children: (0, O.jsxs)('div', {
													children: [
														(0, O.jsx)(h(), {
															content: 'connection.out_of_sync',
															out_of_sync_seconds: parseInt(
																this.getBlockTimeDelta()
															),
														}),
														(0, O.jsx)('br', {}),
														(0, O.jsx)('br', {}),
														(0, O.jsx)(h(), {
															content: 'connection.want_to_reconnect',
														}),
														Ke._.isAutoSelection() &&
															(0, O.jsx)(h(), {
																content: 'connection.automatic_reconnect',
																reconnect_in_seconds: parseInt(
																	this._getForceReconnectAfterSeconds()
																),
															}),
													],
												}),
											}),
											(0, O.jsx)('div', {
												className: 'show-for-medium grid-block shrink footer',
												children: (0, O.jsxs)('div', {
													className: 'align-justify grid-block',
													children: [
														(0, O.jsx)('div', {
															className: 'grid-block',
															children: (0, O.jsxs)(
																'div',
																Cn(
																	Cn(
																		{
																			className: 'logo',
																			style: {
																				fontSize: t.newVersion
																					? '0.9em'
																					: '1em',
																				cursor: t.newVersion
																					? 'pointer'
																					: 'normal',
																				marginTop: t.newVersion
																					? '-5px'
																					: '0px',
																				overflow: 'hidden',
																			},
																			onClick: t.newVersion
																				? this.downloadVersion.bind(this)
																				: null,
																		},
																		{}
																	),
																	{},
																	{
																		children: [
																			t.newVersion &&
																				(0, O.jsx)(qt.Z, {
																					name: 'download',
																					title: c().translate(
																						'icons.download',
																						{wallet_name: (0, Ot.w)()}
																					),
																					style: {
																						marginRight: '20px',
																						marginTop: '10px',
																						fontSize: '1.35em',
																						display: 'inline-block',
																					},
																				}),
																			(0, O.jsxs)('span', {
																				style: {
																					display: 'inline-block',
																					verticalAlign: 'top',
																				},
																				children: [
																					(0, O.jsx)(h(), {
																						content: 'footer.title',
																						wallet_name: (0, Ot.w)(),
																					}),
																					(0, O.jsx)('span', {
																						className: 'version',
																						children: f,
																					}),
																				],
																			}),
																			t.newVersion &&
																				(0, O.jsx)(h(), {
																					content: 'footer.update_available',
																					style: {
																						color: '#FCAB53',
																						position: 'absolute',
																						top: '8px',
																						left: '36px',
																					},
																				}),
																		],
																	}
																)
															),
														}),
														!!Ke._ &&
															Ke._.isBackgroundPingingInProgress() &&
															(0, O.jsxs)('div', {
																onClick: function () {
																	e._showNodesPopover();
																},
																style: {cursor: 'pointer'},
																className: 'grid-block shrink txtlabel',
																children: [
																	Ke._.getBackgroundPingingTarget(),
																	(0, O.jsx)('div', {
																		style: {
																			marginTop: '0.4rem',
																			marginLeft: '0.5rem',
																		},
																		children: (0, O.jsx)(Jt.Z, {
																			type: 'circle',
																		}),
																	}),
																	'   ',
																],
															}),
														r
															? null
															: (0, O.jsxs)('div', {
																	className:
																		'grid-block shrink txtlabel cancel',
																	children: [
																		(0, O.jsx)(h(), {content: 'footer.nosync'}),
																		'   ',
																	],
															  }),
														o
															? null
															: (0, O.jsxs)('div', {
																	className: 'grid-block shrink txtlabel error',
																	children: [
																		(0, O.jsx)(h(), {
																			content: 'footer.connection',
																		}),
																		'   ',
																	],
															  }),
														this.props.backup_recommended
															? (0, O.jsx)('span', {
																	children: (0, O.jsxs)('div', {
																		className: 'grid-block',
																		children: [
																			(0, O.jsx)(tn.Z, {
																				overlay: (0, O.jsx)('div', {
																					children:
																						'Please understand that you are responsible for making your own backup…',
																				}),
																				children: (0, O.jsx)('a', {
																					className:
																						'shrink txtlabel facolor-alert',
																					onClick: this.onBackup.bind(this),
																					children: (0, O.jsx)(h(), {
																						content: 'footer.backup',
																					}),
																				}),
																			}),
																			'  ',
																		],
																	}),
															  })
															: null,
														this.props.backup_brainkey_recommended
															? (0, O.jsx)('span', {
																	children: (0, O.jsxs)('div', {
																		className: 'grid-block',
																		children: [
																			(0, O.jsx)('a', {
																				className:
																					'grid-block shrink txtlabel facolor-alert',
																				onClick:
																					this.onBackupBrainkey.bind(this),
																				children: (0, O.jsx)(h(), {
																					content: 'footer.brainkey',
																				}),
																			}),
																			'  ',
																		],
																	}),
															  })
															: null,
														u
															? (0, O.jsxs)('div', {
																	className: 'grid-block shrink',
																	children: [
																		(0, O.jsx)(tn.Z, {
																			title: c().translate(
																				'tooltip.nodes_popup'
																			),
																			mouseEnterDelay: 0.5,
																			onVisibleChange:
																				this._showAccessSettingsTooltip,
																			visible:
																				this.state.showAccessSettingsTooltip,
																			children: (0, O.jsxs)('div', {
																				onClick: function () {
																					e._showNodesPopover();
																				},
																				style: {
																					position: 'relative',
																					cursor: 'pointer',
																				},
																				children: [
																					(0, O.jsxs)('div', {
																						className: 'footer-status',
																						children: [
																							o &&
																								i.testNet &&
																								(0, O.jsxs)('span', {
																									className: 'testnet',
																									children: [
																										(0, O.jsx)(h(), {
																											content:
																												'settings.testnet_nodes',
																										}),
																										' ',
																									],
																								}),
																							o
																								? (0, O.jsx)('span', {
																										className: 'success',
																										children: i.name,
																								  })
																								: (0, O.jsx)('span', {
																										className: 'warning',
																										children: (0, O.jsx)(h(), {
																											content:
																												'footer.disconnected',
																										}),
																								  }),
																						],
																					}),
																					(0, O.jsx)('div', {
																						className: 'footer-block',
																						children: (0, O.jsxs)('span', {
																							children: [
																								(0, O.jsx)('span', {
																									className:
																										'footer-block-title',
																									children: (0, O.jsx)(h(), {
																										content: 'footer.latency',
																									}),
																								}),
																								' ',
																								o && i.ping
																									? parseInt(i.ping) + 'ms'
																									: '-',
																								' / ',
																								(0, O.jsx)('span', {
																									className:
																										'footer-block-title',
																									children: (0, O.jsx)(h(), {
																										content: 'footer.block',
																									}),
																								}),
																								' #',
																								u,
																							],
																						}),
																					}),
																				],
																			}),
																		}),
																		(0, O.jsx)('div', {
																			className: 'grid-block',
																			children: (0, O.jsx)(tn.Z, {
																				title: c().translate(
																					'tooltip.debug_report'
																				),
																				placement: 'topRight',
																				mouseEnterDelay: 0.5,
																				children: (0, O.jsx)('div', {
																					className: 'introjs-launcher',
																					onClick: function (t) {
																						e._showReportModal(t);
																					},
																					children: (0, O.jsx)(h(), {
																						content: 'modal.report.button',
																					}),
																				}),
																			}),
																		}),
																	],
															  })
															: (0, O.jsx)('div', {
																	className: 'grid-block shrink',
																	children: (0, O.jsx)(h(), {
																		content: 'footer.loading',
																	}),
															  }),
													],
												}),
											}),
											(0, O.jsxs)('div', {
												onMouseLeave: function () {
													e.setState({isAccessSettingsPopoverVisible: !1});
												},
												className: 'node-access-popup',
												style: {
													display: this.state.isAccessSettingsPopoverVisible
														? ''
														: 'none',
												},
												children: [
													(0, O.jsx)(jt.Z, {
														nodes: this.props.defaults.apiServer,
														popup: !0,
													}),
													(0, O.jsx)('div', {
														style: {paddingTop: 15},
														children: (0, O.jsx)('a', {
															onClick: this.onAccess.bind(this),
															children: (0, O.jsx)(h(), {
																content: 'footer.advanced_settings',
															}),
														}),
													}),
												],
											}),
											(0, O.jsx)('div', {
												className: 'introjs-launcher show-for-small-only',
												onClick: function () {
													e.launchIntroJS();
												},
												children: (0, O.jsx)(h(), {content: 'global.help'}),
											}),
											(0, O.jsx)(pn, {
												showModal: this._showReportModal,
												hideModal: this._hideReportModal,
												visible: this.state.isReportModalVisible,
												refCallback: function (t) {
													t && (e.reportModal = t);
												},
											}),
										],
									})
								);
							},
						},
						{
							key: '_showNodesPopover',
							value: function () {
								this.state.showAccessSettingsTooltip &&
									this.state.isAccessSettingsPopoverVisible,
									this.setState({
										isAccessSettingsPopoverVisible:
											!this.state.isAccessSettingsPopoverVisible,
										showAccessSettingsTooltip: !1,
									});
							},
						},
						{
							key: 'onBackup',
							value: function () {
								this.props.history.push('/wallet/backup/create');
							},
						},
						{
							key: 'onBackupBrainkey',
							value: function () {
								this.props.history.push('/wallet/backup/brainkey');
							},
						},
						{
							key: 'onPopup',
							value: function () {
								this.setState({
									isAccessSettingsPopoverVisible:
										!this.state.isAccessSettingsPopoverVisible,
								});
							},
						},
						{
							key: 'onAccess',
							value: function () {
								m.Z.changeViewSetting({activeSetting: 6}),
									this.props.history.push('/settings/access');
							},
						},
					]),
					r
				);
			})(r.Component);
			In(Fn, 'propTypes', {
				dynGlobalObject: Qt.Z.ChainObject.isRequired,
				synced: dn().bool.isRequired,
			}),
				In(Fn, 'defaultProps', {dynGlobalObject: '2.1.0'}),
				(Fn = (0, zt.Z)(Fn));
			const Vn = (function (e) {
				Rn(n, e);
				var t = Tn(n);
				function n() {
					return Zn(this, n), t.apply(this, arguments);
				}
				return (
					Bn(n, [
						{
							key: 'render',
							value: function () {
								var e = he.Z.getWallet();
								return (0, O.jsx)('div', {
									style: {marginBottom: '2rem', width: '100%'},
									children: (0, O.jsx)(a.Z, {
										stores: [Wt.Z, Ut.Z, he.Z, o.Z],
										inject: {
											defaults: function () {
												return o.Z.getState().defaults;
											},
											apiLatencies: function () {
												return o.Z.getState().apiLatencies;
											},
											currentNode: function () {
												return o.Z.getState().settings.get('apiServer');
											},
											activeNode: function () {
												return o.Z.getState().settings.get('activeNode');
											},
											backup_recommended: function () {
												return (
													e &&
													(!e.backup_date || Wt.Z.get('backup_recommended'))
												);
											},
											rpc_connection_status: function () {
												return Ut.Z.getState().rpc_connection_status;
											},
										},
										children: (0, O.jsx)(Fn, Cn({}, this.props)),
									}),
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			var Ln = n(98063);
			function zn(e) {
				return (
					(zn =
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
					zn(e)
				);
			}
			function Qn(e, t) {
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
			function Wn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Qn(Object(n), !0).forEach(function (t) {
								Un(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Qn(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Un(e, t, n) {
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
			function qn(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Hn(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Kn(e, t) {
				return (
					(Kn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Kn(e, t)
				);
			}
			function Jn(e, t) {
				if (t && ('object' === zn(t) || 'function' == typeof t)) return t;
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
			const $n = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Kn(e, t);
				})(l, e);
				var t,
					n,
					r,
					i,
					c =
						((r = l),
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
								t = Gn(r);
							if (i) {
								var n = Gn(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Jn(this, e);
						});
				function l() {
					return qn(this, l), c.apply(this, arguments);
				}
				return (
					(t = l),
					(n = [
						{
							key: 'render',
							value: function () {
								return (0, O.jsxs)(a.Z, {
									stores: [o.Z],
									inject: {
										settings: function () {
											return o.Z.getState().settings;
										},
										viewSettings: function () {
											return o.Z.getState().viewSettings;
										},
										defaults: function () {
											return o.Z.getState().defaults;
										},
										localesObject: function () {
											return s.Z.getState().localesObject;
										},
										apiLatencies: function () {
											return o.Z.getState().apiLatencies;
										},
									},
									children: [
										(0, O.jsx)(Ln.Z, {
											title: 'Setting',
											showDivider: !0,
											level: 2,
										}),
										(0, O.jsx)(Lt, Wn({}, this.props)),
										(0, O.jsx)(Vn, {}),
									],
								});
							},
						},
					]) && Hn(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					l
				);
			})(r.Component);
		},
		30524: (e, t, n) => {
			n.r(t), n.d(t, {default: () => Q});
			var r = n(67294),
				o = n(58074),
				s = n.n(o),
				a = n(19181),
				i = n(76772),
				c = n(61580),
				l = n(71577),
				u = n(39144),
				p = n(55019),
				f = n(12028),
				d = n(71230),
				h = n(15746),
				m = n(10033),
				y = n(112),
				b = n.n(y),
				_ = n(37983),
				g = n(52233),
				v = n(98652),
				w = n(86035),
				j = n(40840),
				x = n(70534),
				O = n(83370),
				k = n(99959),
				S = n(30335),
				P = n(8193),
				C = n(35944),
				Z = n(23085).Buffer,
				A = n(25108);
			function B(e) {
				return (
					(B =
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
					B(e)
				);
			}
			function R(e, t) {
				var n =
					('undefined' != typeof Symbol && e[Symbol.iterator]) ||
					e['@@iterator'];
				if (!n) {
					if (
						Array.isArray(e) ||
						(n = T(e)) ||
						(t && e && 'number' == typeof e.length)
					) {
						n && (e = n);
						var r = 0,
							o = function () {};
						return {
							s: o,
							n: function () {
								return r >= e.length ? {done: !0} : {done: !1, value: e[r++]};
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
				var s,
					a = !0,
					i = !1;
				return {
					s: function () {
						n = n.call(e);
					},
					n: function () {
						var e = n.next();
						return (a = e.done), e;
					},
					e: function (e) {
						(i = !0), (s = e);
					},
					f: function () {
						try {
							a || null == n.return || n.return();
						} finally {
							if (i) throw s;
						}
					},
				};
			}
			function N(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return E(e);
					})(e) ||
					(function (e) {
						if (
							('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
							null != e['@@iterator']
						)
							return Array.from(e);
					})(e) ||
					T(e) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function T(e, t) {
				if (e) {
					if ('string' == typeof e) return E(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return (
						'Object' === n && e.constructor && (n = e.constructor.name),
						'Map' === n || 'Set' === n
							? Array.from(e)
							: 'Arguments' === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? E(e, t)
							: void 0
					);
				}
			}
			function E(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
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
			function D(e, t) {
				return (
					(D =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					D(e, t)
				);
			}
			function I(e, t) {
				if (t && ('object' === B(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return F(e);
			}
			function F(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function V(e) {
				return (
					(V = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					V(e)
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
			function z(e, t) {
				if (e) return e / Math.pow(10, t);
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
						t && D(e, t);
				})(T, e);
				var t,
					n,
					o,
					y,
					B =
						((o = T),
						(y = (function () {
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
								t = V(o);
							if (y) {
								var n = V(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return I(this, e);
						});
				function T() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, T),
						L(F((e = B.call(this))), 'onMemoChanged', function (t, n) {
							return function (r) {
								var o = Object.assign({}, e.state.memo);
								if (
									((o[t][n] = {message: r.target.value, shown: !0}),
									'from_barter' === t)
								) {
									var s = e.state.from_barter;
									e.setState(
										{memo: o},
										e._updateFee(
											s[n].from_fee_asset_id,
											e.state.from_account,
											s[n].from_asset_id,
											n,
											!0,
											s
										)
									);
								} else if ('to_barter' === t) {
									var a = e.state.to_barter;
									e.setState(
										{memo: o},
										e._updateFee(
											a[n].to_fee_asset_id,
											e.state.to_account,
											a[n].to_asset_id,
											n,
											!1,
											a
										)
									);
								} else e.setState({memo: o});
							};
						}),
						L(F(e), 'handleMemoOpen', function (t, n) {
							return function (r) {
								var o = Object.assign({}, e.state.memo);
								(o[t][n] = {message: '', shown: !0}), e.setState({memo: o});
							};
						}),
						(e.state = {
							from_name: '',
							to_name: '',
							from_account: null,
							to_account: null,
							from_barter: [
								{
									index: 0,
									from_amount: '',
									from_asset_id: null,
									from_asset: null,
									from_feeAmount: new w.xR({amount: 0}),
									from_feeAsset: null,
									from_fee_asset_id: null,
									from_hasPoolBalance: null,
									from_balanceError: !1,
									memo: '',
								},
							],
							to_barter: [
								{
									index: 0,
									to_amount: '',
									to_asset_id: null,
									to_asset: null,
									to_feeAmount: new w.xR({amount: 0}),
									to_feeAsset: null,
									to_fee_asset_id: null,
									to_hasPoolBalance: null,
									to_balanceError: !1,
									memo: '',
								},
							],
							amount_counter: [],
							amount_index: 0,
							from_error: null,
							to_error: null,
							memo: {
								from_barter: [{message: '', shown: !1}],
								to_barter: [{message: '', shown: !1}],
								escrow: [{message: '', shown: !1}],
							},
							proposal_fee: 0,
							showEscrow: !1,
							escrow_account_name: '',
							escrow_account: null,
							send_to_escrow: !1,
							escrow_payment: 0,
							escrow_payment_changed: !1,
							balanceWarning: {peer1: [], peer2: []},
						}),
						(e._checkBalance = e._checkBalance.bind(F(e))),
						(e.onTrxIncluded = e.onTrxIncluded.bind(F(e))),
						e
					);
				}
				return (
					(t = T),
					(n = [
						{
							key: 'componentWillMount',
							value: function () {
								var e = this,
									t = _.Z.getState().currentAccount;
								this.state.from_name || this.setState({from_name: t}),
									(0, x.Ir)('proposal_create').then(function (t) {
										e.setState({
											proposal_fee: new w.xR({amount: t}).getAmount({real: !0}),
										});
									}),
									(0, x.Ir)('transfer').then(function (t) {
										e.setState({
											transfer_fee: new w.xR({amount: t}).getAmount({real: !0}),
										});
									});
							},
						},
						{
							key: 'fromChanged',
							value: function (e) {
								this.setState({from_name: e});
							},
						},
						{
							key: 'escrowAccountChanged',
							value: function (e) {
								this.setState({escrow_account_name: e});
							},
						},
						{
							key: 'onFromAccountChanged',
							value: function (e) {
								this.setState({
									from_account: e,
									from_barter: [
										{
											from_amount: '',
											from_asset_id: null,
											from_asset: null,
											from_feeAmount: new w.xR({amount: 0}),
											from_feeAsset: null,
											from_fee_asset_id: null,
											from_hasPoolBalance: null,
											from_balanceError: !1,
										},
									],
								});
							},
						},
						{
							key: 'onEscrowAccountChanged',
							value: function (e) {
								this.setState({escrow_account: e});
							},
						},
						{
							key: 'toChanged',
							value: function (e) {
								this.setState({to_name: e});
							},
						},
						{
							key: 'onToAccountChanged',
							value: function (e) {
								this.setState({
									to_account: e,
									to_barter: [
										{
											to_amount: '',
											to_asset_id: null,
											to_asset: null,
											to_feeAmount: new w.xR({amount: 0}),
											to_feeAsset: null,
											to_fee_asset_id: null,
											to_hasPoolBalance: null,
											to_balanceError: !1,
										},
									],
								});
							},
						},
						{
							key: 'onFromAmountChanged',
							value: function (e, t) {
								var n = this,
									r = t.asset,
									o = t.amount;
								if (r) {
									var s = N(this.state.from_barter);
									(s[e] = {
										index: e,
										from_amount: o,
										from_asset: r,
										from_asset_id: r.get('id'),
										from_feeAmount: new w.xR({amount: 0}),
										from_feeAsset: r,
										from_fee_asset_id: '1.3.0',
										from_balanceError: !1,
									}),
										this.setState(
											{from_barter: s, from_error: null},
											function () {
												n._checkBalance(
													s[e].from_feeAmount,
													o,
													n.state.from_account,
													r,
													e,
													!0,
													s[e].from_fee_asset_id,
													s
												),
													n.checkAmountsTotal();
											}
										);
								}
							},
						},
						{
							key: 'onToAmountChanged',
							value: function (e, t) {
								var n = this,
									r = t.asset,
									o = t.amount;
								if (r) {
									var s = N(this.state.to_barter);
									(s[e] = {
										index: e,
										to_amount: o,
										to_asset: r,
										to_asset_id: r.get('id'),
										to_feeAmount: new w.xR({amount: 0}),
										to_feeAsset: r,
										to_fee_asset_id: '1.3.0',
										to_balanceError: !1,
									}),
										this.setState({to_barter: s, to_error: null}, function () {
											n._checkBalance(
												s[e].to_feeAmount,
												o,
												n.state.to_account,
												r,
												e,
												!1,
												s[e].to_fee_asset_id,
												s
											),
												n.checkAmountsTotal();
										});
								}
							},
						},
						{
							key: '_checkBalance',
							value: function (e, t, n, r, o, s, a, i) {
								if (r && n) {
									this._updateFee(a, n, r.get('id'), o, s, i);
									var c = n.getIn(['balances', r.get('id')]),
										l = n.getIn(['balances', e.asset_id]);
									if (r && n) {
										if (!c)
											return s
												? ((i[o].from_balanceError = !0),
												  this.setState({from_barter: i}))
												: ((i[o].to_balanceError = !0),
												  this.setState({to_barter: i}));
										var u = g.BQ.getObject(c),
											p = l ? g.BQ.getObject(l) : null;
										if (
											((p && 0 !== p.get('balance')) ||
												(s
													? ((i[o].from_fee_asset_id = '1.3.0'),
													  this.setState(
															{from_barter: i},
															this._updateFee(
																i[o].from_fee_asset_id,
																n,
																r.get('id'),
																o,
																s,
																i
															)
													  ))
													: ((i[o].to_fee_asset_id = '1.3.0'),
													  this.setState(
															{to_barter: i},
															this._updateFee(
																i[o].to_fee_asset_id,
																n,
																r.get('id'),
																o,
																s,
																i
															)
													  ))),
											u && e)
										) {
											if (!t)
												return s
													? ((i[o].from_balanceError = !1),
													  this.setState({from_barter: i}))
													: ((i[o].to_balanceError = !1),
													  this.setState({to_barter: i}));
											var f = (0, x.cr)(t, r, e, u);
											if (null !== f)
												return s
													? ((i[o].from_balanceError = !f),
													  this.setState({from_barter: i}))
													: ((i[o].to_balanceError = !f),
													  this.setState({to_barter: i}));
										}
									}
								}
							},
						},
						{
							key: '_updateFee',
							value: function (e, t, n, r, o, s) {
								var a = this,
									i = this._getAvailableAssets(this.state),
									c = i.from_fee_asset_types,
									l = i.to_fee_asset_types,
									u = o ? c : l;
								if ((1 === u.length && u[0] !== e && (e = u[0]), !t))
									return null;
								var p = this.state.memo[o ? 'from_barter' : 'to_barter'][r],
									f =
										p && p.shown && '' !== p.message
											? new Z(p.message, 'utf-8')
											: '';
								(0, x.rX)({
									accountID: t.get('id'),
									feeID: e,
									options: ['price_per_kbyte'],
									data: {type: 'memo', content: f},
								})
									.then(function (e) {
										var i = e.fee,
											c = e.hasBalance,
											l = e.hasPoolBalance;
										return (0, x.G7)(t, i).then(function (e) {
											o
												? e
													? ((s[r].from_fee_asset_id = n),
													  a.setState({from_barter: s}))
													: ((s[r].from_feeAmount = i),
													  (s[r].from_fee_asset_id = i.asset_id),
													  (s[r].from_hasPoolBalance = l),
													  a.setState({from_barter: s, from_error: !c || !l}))
												: e
												? ((s[r].to_fee_asset_id = n),
												  a.setState({to_barter: s}))
												: ((s[r].to_feeAmount = i),
												  (s[r].to_fee_asset_id = i.asset_id),
												  (s[r].to_hasPoolBalance = l),
												  a.setState({to_barter: s, to_error: !c || !l}));
										});
									})
									.catch(function (e) {
										A.error(e);
									});
							},
						},
						{
							key: '_getAvailableAssets',
							value: function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.state,
									t = e.from_account,
									n = e.from_error,
									r = e.to_account,
									o = e.to_error,
									s = function (e, t) {
										var n = [],
											r = [];
										if (!e || !e.get('balances') || t)
											return {asset_types: n, fee_asset_types: r};
										var o = e.get('balances').toJS();
										for (var s in ((n = Object.keys(o).sort(j.Z.sortID)),
										(r = Object.keys(o).sort(j.Z.sortID)),
										o)) {
											var a = g.BQ.getObject(o[s]);
											a &&
												0 === a.get('balance') &&
												(n.splice(n.indexOf(s), 1),
												-1 !== r.indexOf(s) && r.splice(r.indexOf(s), 1));
										}
										return {asset_types: n, fee_asset_types: r};
									},
									a = s(t, n),
									i = s(r, o);
								return {
									from_asset_types: a.asset_types || [],
									to_asset_types: i.asset_types || [],
									from_fee_asset_types: a.fee_asset_types || [],
									to_fee_asset_types: i.fee_asset_types || [],
								};
							},
						},
						{
							key: 'addFromAmount',
							value: function () {
								this.state.from_barter.push({
									from_amount: '',
									from_asset_id: null,
									from_asset: null,
									from_feeAmount: new w.xR({amount: 0}),
									from_feeAsset: null,
									from_fee_asset_id: null,
								}),
									this.setState({from_barter: this.state.from_barter});
							},
						},
						{
							key: 'addToAmount',
							value: function () {
								this.state.to_barter.push({
									to_amount: '',
									to_asset_id: null,
									to_asset: null,
									to_feeAmount: new w.xR({amount: 0}),
									to_feeAsset: null,
									to_fee_asset_id: null,
								}),
									this.setState({to_barter: this.state.to_barter});
							},
						},
						{
							key: 'onSubmit',
							value: function (e) {
								var t,
									n = this;
								e.preventDefault(),
									this.setState({from_error: null, to_error: null});
								var r = [],
									o = _.Z.getState().currentAccount,
									s = this.state.from_account,
									a =
										this.state.memo.escrow[0] &&
										this.state.memo.escrow[0].message;
								if (
									(this.state.showEscrow &&
										this.state.send_to_escrow &&
										(s = this.state.escrow_account),
									this.state.showEscrow)
								) {
									var i = this.state.escrow_payment_changed
										? new w.xR({real: this.state.escrow_payment}).getAmount()
										: fee(!0);
									i > 0 &&
										r.push({
											from_account: this.state.from_account.get('id'),
											to_account: this.state.escrow_account.get('id'),
											amount: i,
											asset: '1.3.0',
											memo: a ? new Z(a, 'utf-8') : null,
											feeAsset: '1.3.0',
											propose_account: o,
										});
								}
								this.state.from_barter.forEach(function (e, i) {
									var c = e.from_asset,
										l = e.from_amount;
									t = new w.xR({
										real: l,
										asset_id: c.get('id'),
										precision: c.get('precision'),
									});
									var u =
										n.state.memo.from_barter[i] &&
										n.state.memo.from_barter[i].message;
									n.state.showEscrow &&
										n.state.send_to_escrow &&
										r.push({
											from_account: n.state.from_account.get('id'),
											to_account: n.state.escrow_account.get('id'),
											amount: t.getAmount(),
											asset: c.get('id'),
											memo: a ? new Z(a, 'utf-8') : n.state.memo,
											feeAsset: e.from_feeAsset
												? e.from_feeAsset.get('id')
												: '1.3.0',
										}),
										r.push({
											from_account: s.get('id'),
											to_account: n.state.to_account.get('id'),
											amount: t.getAmount(),
											asset: c.get('id'),
											memo: u ? new Z(u, 'utf-8') : null,
											feeAsset: e.from_feeAsset
												? e.from_feeAsset.get('id')
												: '1.3.0',
											propose_account: o,
										});
								}),
									this.state.showEscrow &&
										!this.state.send_to_escrow &&
										r.push({
											from_account: this.state.escrow_account.get('id'),
											to_account: this.state.from_account.get('id'),
											amount: 1,
											asset: '1.3.0',
											memo: null,
											feeAsset: '1.3.0',
											propose_account: o,
										}),
									this.state.to_barter.forEach(function (e, s) {
										var a = e.to_asset,
											i = e.to_amount,
											c =
												n.state.memo.to_barter[s] &&
												n.state.memo.to_barter[s].message;
										(t = new w.xR({
											real: i,
											asset_id: a.get('id'),
											precision: a.get('precision'),
										})),
											r.push({
												from_account: n.state.to_account.get('id'),
												to_account: n.state.from_account.get('id'),
												amount: t.getAmount(),
												asset: a.get('id'),
												memo: c ? new Z(c, 'utf-8') : null,
												feeAsset: e.to_feeAsset
													? e.to_feeAsset.get('id')
													: '1.3.0',
												propose_account: o,
											});
									}),
									k.Z.transfer_list(r);
							},
						},
						{
							key: 'onTrxIncluded',
							value: function (e) {
								((e.included && e.broadcasted_transaction) || e.closed) &&
									(TransactionConfirmStore.unlisten(this.onTrxIncluded),
									TransactionConfirmStore.reset());
							},
						},
						{
							key: 'renderMemoField',
							value: function (e, t) {
								var n = this.state.memo,
									r = n[e][t] && n[e][t].message ? n[e][t].message : '';
								return (0, C.jsxs)('div', {
									className: 'content-block transfer-input',
									children: [
										(0, C.jsx)(s(), {
											className: 'left-label',
											component: 'label',
											content: 'transfer.memo',
										}),
										(0, C.jsx)('textarea', {
											style: {marginBottom: 0},
											rows: '1',
											value: r,
											onChange: this.onMemoChanged(e, t),
										}),
									],
								});
							},
						},
						{
							key: 'getBalance',
							value: function (e, t) {
								return g.BQ.getAccountBalance(e, t);
							},
						},
						{
							key: 'checkAmountsTotal',
							value: function () {
								var e = this,
									t = this.state,
									n = t.from_barter,
									r = t.to_barter,
									o = t.from_account,
									s = t.to_account,
									a = {},
									i = {};
								n.forEach(function (e) {
									e.from_amount &&
										(a.hasOwnProperty(e.from_asset_id)
											? (a[e.from_asset_id] = {
													amount:
														Number(a[e.from_asset_id].amount) +
														Number(e.from_amount),
													precision: e.from_asset.get('precision'),
													symbol: e.from_asset.get('symbol'),
											  })
											: (a[e.from_asset_id] = {
													amount: Number(e.from_amount),
													precision: e.from_asset.get('precision'),
													symbol: e.from_asset.get('symbol'),
											  }));
								});
								var c = (0, S.Z)(a, function (t, n) {
									var r = e.getBalance(o, n),
										s = Math.max(0, t.precision),
										a = r ? z(r, s) : 0;
									return (
										(t.assetId = n),
										t.amount > a && ((t.warning = !0), (t.balance = a)),
										t
									);
								});
								r.forEach(function (e) {
									e.to_amount &&
										(i.hasOwnProperty(e.to_asset_id)
											? (i[e.to_asset_id] = {
													amount:
														Number(i[e.to_asset_id].amount) +
														Number(e.to_amount),
													precision: e.to_asset.get('precision'),
													symbol: e.to_asset.get('symbol'),
											  })
											: (i[e.to_asset_id] = {
													amount: Number(e.to_amount),
													precision: e.to_asset.get('precision'),
													symbol: e.to_asset.get('symbol'),
											  }));
								});
								var l = (0, S.Z)(i, function (t, n) {
									var r = e.getBalance(s, n),
										o = Math.max(0, t.precision),
										a = r ? z(r, o) : 0;
									return (
										(t.assetId = n),
										t.amount > a && ((t.warning = !0), (t.balance = a)),
										t
									);
								});
								this.setState({balanceWarning: {peer1: c, peer2: l}});
							},
						},
						{
							key: 'renderBalanceWarnings',
							value: function () {
								var e = this.state.balanceWarning,
									t = e.peer1,
									n = e.peer2,
									o = t.some(function (e) {
										return !!e.warning;
									}),
									s = n.some(function (e) {
										return !!e.warning;
									}),
									c = b().translate('showcases.barter.peer_left'),
									l = b().translate('showcases.barter.peer_right'),
									u = o
										? (0, C.jsxs)('div', {
												style: {maxWidth: '25rem'},
												children: [
													b().translate(
														'showcases.barter.balance_warning_tooltip',
														{peer: c}
													),
													(0, C.jsx)('br', {}),
													t.map(function (e) {
														if (e.warning)
															return (0, C.jsxs)(r.Fragment, {
																children: [
																	(0, C.jsx)('br', {}),
																	(0, C.jsx)(
																		'span',
																		{
																			style: {marginRight: '10px'},
																			children:
																				' - ' +
																				b().translate(
																					'showcases.barter.balance_warning_line',
																					{
																						asset_symbol: e.symbol,
																						asset_balance: e.balance,
																						asset_amount: e.amount,
																					}
																				),
																		},
																		e.assetId
																	),
																],
															});
													}),
												],
										  })
										: null,
									p = s
										? (0, C.jsxs)('div', {
												style: {maxWidth: '25rem'},
												children: [
													b().translate(
														'showcases.barter.balance_warning_tooltip',
														{peer: l}
													),
													n.map(function (e) {
														if (e.warning)
															return (0, C.jsxs)(
																'span',
																{
																	style: {marginRight: '10px'},
																	children: [
																		(0, C.jsx)('br', {}),
																		(0, C.jsx)('br', {}),
																		b().translate(
																			'showcases.barter.balance_warning_line',
																			{
																				asset_symbol: e.symbol,
																				asset_balance: e.balance,
																				asset_amount: e.amount,
																			}
																		),
																		';',
																	],
																},
																e.assetId
															);
													}),
												],
										  })
										: null;
								return (0, C.jsxs)('span', {
									className: 'barter-balance-warning',
									children: [
										o &&
											(0, C.jsx)(a.Z, {
												content: u,
												title: b().translate(
													'showcases.barter.balance_warning'
												),
												children: (0, C.jsx)('span', {
													style: {cursor: 'help'},
													children: (0, C.jsx)(i.Z, {
														style: {display: 'inline', marginRight: '1rem'},
														message:
															c +
															' ' +
															b().translate('showcases.barter.balance_warning'),
														type: 'warning',
														showIcon: !0,
													}),
												}),
											}),
										s &&
											(0, C.jsx)(a.Z, {
												content: p,
												title: b().translate(
													'showcases.barter.balance_warning'
												),
												children: (0, C.jsx)('span', {
													style: {cursor: 'help'},
													children: (0, C.jsx)(i.Z, {
														style: {display: 'inline'},
														message:
															l +
															' ' +
															b().translate('showcases.barter.balance_warning'),
														type: 'warning',
														showIcon: !0,
													}),
												}),
											}),
									],
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.state,
									n = t.from_name,
									r = t.to_name,
									o = t.from_account,
									a = t.to_account,
									i = t.from_barter,
									y = t.to_barter,
									_ = t.amount_index,
									w = t.from_error,
									j = t.to_error,
									x = this._getAvailableAssets(),
									k = x.from_asset_types,
									S = x.to_asset_types,
									Z = window.innerWidth < 850,
									A = [],
									B = [],
									N = function () {
										var e,
											t = R(i);
										try {
											for (t.s(); !(e = t.n()).done; ) {
												var n = e.value,
													r = parseFloat(
														String.prototype.replace.call(
															n.from_amount,
															/,/g,
															''
														)
													);
												if (isNaN(r) || 0 === r) return !1;
											}
										} catch (e) {
											t.e(e);
										} finally {
											t.f();
										}
										var o,
											s = R(y);
										try {
											for (s.s(); !(o = s.n()).done; ) {
												var a = o.value,
													c = parseFloat(
														String.prototype.replace.call(a.to_amount, /,/g, '')
													);
												if (isNaN(c) || 0 === c) return !1;
											}
										} catch (e) {
											s.e(e);
										} finally {
											s.f();
										}
										return !0;
									},
									T = function (e) {
										var t = 0;
										return (
											e
												? ((t = t),
												  i.forEach(function (e) {
														t += e.from_feeAmount.getAmount({real: !0});
												  }))
												: y.forEach(function (e) {
														t += e.to_feeAmount.getAmount({real: !0});
												  }),
											t
										);
									},
									E = this.state.showEscrow && !this.state.escrow_account,
									M =
										!o ||
										!a ||
										o.get('id') == a.get('id') ||
										j ||
										!N() ||
										w ||
										E,
									D = function (e, t, n, r) {
										if (e && e.get('balances')) {
											var o = e.get('balances').toJS(),
												a = t ? 'has-error' : '';
											if (
												(1 === n.length && (r = g.BQ.getAsset(n[0])),
												n.length > 0)
											) {
												var i = r ? r.get('id') : n[0];
												return (0, C.jsxs)('span', {
													children: [
														(0, C.jsx)(s(), {
															component: 'span',
															content: 'transfer.available',
														}),
														':',
														' ',
														(0, C.jsx)('span', {
															className: a,
															style: {
																borderBottom: '#A09F9F 1px dotted',
																cursor: 'pointer',
															},
															children: (0, C.jsx)(O.Z, {balance: o[i]}),
														}),
													],
												});
											}
											return (0, C.jsx)('span', {
												children: (0, C.jsx)('span', {
													className: a,
													children: (0, C.jsx)(s(), {
														content: 'transfer.errors.noFunds',
													}),
												}),
											});
										}
									},
									I = i.map(function (t, n) {
										var r = '';
										t.from_asset &&
											((r = t.from_asset.get('symbol')),
											A.push([t.from_amount || 0, r].join(' ')));
										var s =
											e.state.memo.from_barter[n] &&
											e.state.memo.from_barter[n].shown;
										return (0,
										C.jsxs)('div', {children: [(0, C.jsxs)('div', {style: {position: 'relative'}, children: [!s && (0, C.jsx)(c.Z, {title: b().translate('tooltip.add_memo_field'), placement: 'topLeft', children: (0, C.jsx)(l.Z, {onClick: e.handleMemoOpen('from_barter', n), size: 'small', icon: 'message', className: 'add-memo-btn'})}), (0, C.jsx)(v.Z, {label: 'showcases.barter.bartering_asset', style: {marginBottom: '1rem'}, amount: t.from_amount, onChange: e.onFromAmountChanged.bind(e, n), asset: k.length > 0 && t.from_asset ? t.from_asset.get('id') : t.from_asset_id ? t.from_asset_id : k[0], assets: k, display_balance: D(o, t.from_balanceError, k, t.from_asset), allowNaN: !0})]}), s && e.renderMemoField('from_barter', n)]}, _++);
									}),
									F = y.map(function (t, n) {
										t.to_asset &&
											(t.to_asset.get('symbol'),
											B.push(
												[t.to_amount || 0, t.to_asset.get('symbol')].join(' ')
											));
										var r =
											e.state.memo.to_barter[n] &&
											e.state.memo.to_barter[n].shown;
										return (0,
										C.jsxs)('div', {children: [(0, C.jsxs)('div', {style: {position: 'relative'}, children: [!r && (0, C.jsx)(c.Z, {title: b().translate('tooltip.add_memo_field'), placement: 'topLeft', children: (0, C.jsx)(l.Z, {onClick: e.handleMemoOpen('to_barter', n), size: 'small', icon: 'message', className: 'add-memo-btn'})}), (0, C.jsx)(v.Z, {label: 'showcases.barter.bartering_asset', style: {marginBottom: '1rem'}, amount: t.to_amount, onChange: e.onToAmountChanged.bind(e, n), asset: S.length > 0 && t.to_asset ? t.to_asset.get('id') : t.to_asset_id ? t.to_asset_id : S[0], assets: S, display_balance: D(a, t.to_balanceError, S, t.to_asset), allowNaN: !0})]}), r && e.renderMemoField('to_barter', n)]}, _++);
									}),
									V = (0, C.jsxs)(u.Z, {
										style: {borderRadius: '10px'},
										children: [
											(0, C.jsx)(s(), {content: 'showcases.barter.peer_left'}),
											(0, C.jsx)(m.Z, {
												label: 'showcases.barter.account',
												placeholder: 'placeholder',
												style: {marginTop: '0.5rem', marginBottom: '1rem'},
												allowPubKey: !0,
												allowUppercase: !0,
												account: o,
												accountName: n,
												onChange: this.fromChanged.bind(this),
												onAccountChanged: this.onFromAccountChanged.bind(this),
												hideImage: !0,
												typeahead: !0,
											}),
											o &&
												(0, C.jsxs)('div', {
													children: [
														I,
														(0, C.jsx)('div', {
															style: {
																paddingTop: '10px',
																paddingBottom: '10px',
															},
															children: (0, C.jsx)(l.Z, {
																onClick: this.addFromAmount.bind(this),
																disabled:
																	!o ||
																	!this.state.from_barter[
																		this.state.from_barter.length - 1
																	].from_amount,
																children: '+ Add asset',
															}),
														}),
													],
												}),
										],
									}),
									L = (0, C.jsxs)(u.Z, {
										style: {borderRadius: '10px'},
										children: [
											(0, C.jsx)(s(), {content: 'showcases.barter.peer_right'}),
											(0, C.jsx)(m.Z, {
												label: 'showcases.barter.account',
												placeholder: 'placeholder',
												style: {marginTop: '0.5rem', marginBottom: '1rem'},
												allowPubKey: !0,
												allowUppercase: !0,
												account: a,
												accountName: r,
												onChange: this.toChanged.bind(this),
												onAccountChanged: this.onToAccountChanged.bind(this),
												hideImage: !0,
												typeahead: !0,
											}),
											a &&
												(0, C.jsxs)('div', {
													children: [
														F,
														(0, C.jsx)('div', {
															style: {
																paddingTop: '10px',
																paddingBottom: '10px',
															},
															children: (0, C.jsx)(l.Z, {
																onClick: this.addToAmount.bind(this),
																disabled:
																	!a ||
																	!this.state.to_barter[
																		this.state.to_barter.length - 1
																	].to_amount,
																children: '+ Add asset',
															}),
														}),
													],
												}),
										],
									}),
									z = 'showcases.barter.not_complete';
								M &&
									(o
										? a
											? o.get('id') == a.get('id')
												? (z = 'showcases.barter.error_same_name')
												: N()
												? E
													? (z = 'showcases.barter.error_fill_in_escrow_name')
													: !this.state.showEscrow ||
													  (o.get('id') !=
															this.state.escrow_account.get('id') &&
															a.get('id') !=
																this.state.escrow_account.get('id')) ||
													  (z = 'showcases.barter.error_same_name_escrow')
												: (z =
														'showcases.barter.error_fill_in_valid_asset_amount')
											: (z = 'showcases.barter.error_fill_in_peer_right_name')
										: (z = 'showcases.barter.error_fill_in_peer_left_name'));
								var Q,
									W = (0, C.jsxs)(u.Z, {
										style: {borderRadius: '10px'},
										children: [
											!M &&
												(0, C.jsxs)('div', {
													className: 'left-label',
													style: {fontSize: '1rem'},
													children: [
														b().translate('showcases.barter.action', {
															peer_left: n,
															assets_left: A.join(', '),
															peer_right: r,
															assets_right: B.join(', '),
														}),
														this.state.showEscrow &&
															!this.state.send_to_escrow &&
															b().translate(
																'showcases.barter.escrow_as_witness',
																{escrow: this.state.escrow_account.get('name')}
															),
														this.state.showEscrow &&
															this.state.send_to_escrow &&
															b().translate(
																'showcases.barter.escrow_as_custodian',
																{escrow: this.state.escrow_account.get('name')}
															),
													],
												}),
											M &&
												(0, C.jsx)('div', {
													className: 'left-label',
													style: {fontSize: '1rem'},
													children: b().translate(z),
												}),
											(0, C.jsx)(c.Z, {
												title: b().translate(
													'showcases.barter.add_escrow_tooltip'
												),
												placement: 'topRight',
												children: (0, C.jsx)(
													l.Z,
													{
														onClick: this.toggleEscrow.bind(this),
														style: {float: 'right'},
														children: b().translate(
															this.state.showEscrow
																? 'showcases.barter.remove_escrow'
																: 'showcases.barter.add_escrow'
														),
													},
													this.state.showEscrow ? 'remove_escrow' : 'add_escrow'
												),
											}),
											500 === i.length && 500 === y.length
												? (0, C.jsxs)('div', {
														className: 'amount-selector',
														style: this.props.style,
														children: [
															(0, C.jsx)(s(), {
																className: 'left-label',
																component: 'label',
																content: 'transfer.explict_price',
															}),
															(0, C.jsxs)('div', {
																className: 'inline-label input-wrapper',
																children: [
																	(0, C.jsx)(p.Z, {
																		disabled: !1,
																		type: 'text',
																		value:
																			((Q = ''),
																			N() &&
																				(Q =
																					parseFloat(i[0].from_amount) /
																					parseFloat(y[0].to_amount)),
																			Q),
																	}),
																	(0, C.jsx)('div', {
																		className:
																			'form-label select floating-dropdown',
																		children: (0, C.jsx)('div', {
																			className: 'dropdown-wrapper inactive',
																			children: (0, C.jsx)('div', {
																				children: ''.concat('', '/').concat(''),
																			}),
																		}),
																	}),
																],
															}),
														],
												  })
												: '',
										],
									}),
									U = (0, C.jsxs)(u.Z, {
										style: {borderRadius: '10px'},
										children: [
											(0, C.jsx)(s(), {content: 'showcases.barter.peer_left'}),
											(0, C.jsx)(c.Z, {
												title: b().translate(
													this.state.send_to_escrow
														? 'showcases.barter.fee_due_now_tooltip'
														: 'showcases.barter.fee_when_proposal_executes_tooltip'
												),
												children: (0, C.jsx)('div', {
													children: (0, C.jsx)(v.Z, {
														label: this.state.send_to_escrow
															? 'showcases.barter.fee_due_now'
															: 'showcases.barter.fee_when_proposal_executes',
														disabled: !0,
														style: {marginTop: '0.5rem', marginBottom: '1rem'},
														amount: T(!0) + 0,
														asset: '1.3.0',
														assets: ['1.3.0'],
														error:
															!1 === this.state.hasPoolBalance
																? 'transfer.errors.insufficient'
																: null,
														scroll_length: 2,
													}),
												}),
											}),
											(0, C.jsx)(c.Z, {
												title: b().translate(
													'showcases.barter.proposal_fee_tooltip'
												),
												children: (0, C.jsx)('div', {
													children: (0, C.jsx)(v.Z, {
														label: 'showcases.barter.proposal_fee',
														disabled: !0,
														amount: this.state.proposal_fee,
														style: {marginBottom: '1rem'},
														asset: '1.3.0',
														assets: ['1.3.0'],
														error:
															!1 === this.state.hasPoolBalance
																? 'transfer.errors.insufficient'
																: null,
														scroll_length: 2,
													}),
												}),
											}),
											(0, C.jsx)(c.Z, {
												title: b().translate(
													'showcases.barter.total_fees_tooltip'
												),
												children: (0, C.jsx)('span', {
													style: {marginTop: '1rem'},
													children: (0, C.jsx)(s(), {
														content: 'showcases.barter.total_fees',
														className: 'left-label',
														component: 'label',
														fee: T(!0) + this.state.proposal_fee,
														asset: 'META1',
													}),
												}),
											}),
										],
									}),
									q = (0, C.jsxs)(u.Z, {
										style: {borderRadius: '10px'},
										children: [
											(0, C.jsx)(s(), {content: 'showcases.barter.peer_right'}),
											(0, C.jsx)(c.Z, {
												title: b().translate(
													'showcases.barter.fee_when_proposal_executes_tooltip'
												),
												children: (0, C.jsx)('div', {
													children: (0, C.jsx)(v.Z, {
														label:
															'showcases.barter.fee_when_proposal_executes',
														disabled: !0,
														amount: T(!1),
														style: {marginTop: '0.5rem'},
														asset: '1.3.0',
														assets: ['1.3.0'],
														error:
															!1 === this.state.hasPoolBalance
																? 'transfer.errors.insufficient'
																: null,
														scroll_length: 2,
													}),
												}),
											}),
										],
									}),
									H = null;
								this.state.showEscrow &&
									(H = (0, C.jsxs)(u.Z, {
										style: {borderRadius: '10px'},
										children: [
											(0, C.jsx)(s(), {
												content: 'showcases.barter.escrow_account',
											}),
											(0, C.jsx)(c.Z, {
												title: b().translate(
													'showcases.barter.fee_when_proposal_executes_tooltip'
												),
												children: (0, C.jsx)('div', {
													children: (0, C.jsx)(v.Z, {
														label:
															'showcases.barter.fee_when_proposal_executes',
														disabled: !1,
														amount: T(!0),
														style: {marginTop: '0.5rem'},
														asset: '1.3.0',
														assets: ['1.3.0'],
														error:
															!1 === this.state.hasPoolBalance
																? 'transfer.errors.insufficient'
																: null,
														scroll_length: 2,
													}),
												}),
											}),
										],
									}));
								var K = (0, C.jsx)(u.Z, {
										style: {borderRadius: '10px'},
										children: (0, C.jsx)(c.Z, {
											title: b().translate(
												'showcases.barter.new_barter_tooltip'
											),
											placement: 'bottom',
											children: (0, C.jsxs)('h2', {
												style: {textAlign: 'center'},
												children: [
													(0, C.jsx)(s(), {
														content: 'showcases.barter.new_barter',
													}),
													' ',
													(0, C.jsx)(P.znh, {}),
												],
											}),
										}),
									}),
									J = null,
									G =
										this.state.memo.escrow[0] &&
										this.state.memo.escrow[0].shown,
									$ = this.state.escrow_payment_changed
										? this.state.escrow_payment
										: T(!0);
								return (
									this.state.showEscrow &&
										(J = (0, C.jsxs)(u.Z, {
											style: {borderRadius: '10px'},
											children: [
												(0, C.jsx)(m.Z, {
													label: 'showcases.barter.escrow_account',
													placeholder: 'placeholder',
													style: {marginBottom: '1rem'},
													allowPubKey: !0,
													allowUppercase: !0,
													account: this.state.escrow_account,
													accountName: this.state.escrow_account_name,
													onChange: this.escrowAccountChanged.bind(this),
													onAccountChanged:
														this.onEscrowAccountChanged.bind(this),
													hideImage: !0,
													typeahead: !0,
												}),
												(0, C.jsx)(c.Z, {
													title: b().translate(
														'showcases.barter.send_to_escrow_tooltip'
													),
													children: (0, C.jsxs)('span', {
														children: [
															(0, C.jsx)(f.Z, {
																style: {margin: 6},
																checked: this.state.send_to_escrow,
																onChange: this.onToggleSendToEscrow.bind(this),
															}),
															(0, C.jsx)(s(), {
																content: 'showcases.barter.send_to_escrow',
															}),
														],
													}),
												}),
												(0, C.jsxs)('div', {
													style: {position: 'relative'},
													children: [
														!G &&
															(0, C.jsx)(c.Z, {
																title: b().translate('tooltip.add_memo_field'),
																placement: 'topLeft',
																children: (0, C.jsx)(l.Z, {
																	onClick: this.handleMemoOpen('escrow', 0),
																	size: 'small',
																	icon: 'message',
																	className: 'add-memo-btn',
																}),
															}),
														(0, C.jsx)(c.Z, {
															title: b().translate(
																'showcases.barter.escrow_payment_tooltip'
															),
															placement: 'topLeft',
															children: (0, C.jsx)('div', {
																children: (0, C.jsx)(v.Z, {
																	label: 'showcases.barter.escrow_payment',
																	disabled: !1,
																	amount: $,
																	onChange: this._updateEscrowFee.bind(this),
																	style: {margin: '1rem 0'},
																	asset: '1.3.0',
																	assets: ['1.3.0'],
																	error:
																		!1 === this.state.hasPoolBalance
																			? 'transfer.errors.insufficient'
																			: null,
																	scroll_length: 2,
																}),
															}),
														}),
														G && this.renderMemoField('escrow', 0),
													],
												}),
											],
										})),
									(0, C.jsx)('div', {
										className: 'center',
										style: {
											padding: '10px',
											maxWidth: '80rem',
											width: '100%',
											margin: '0 auto',
										},
										children: (0, C.jsxs)(u.Z, {
											children: [
												Z
													? (0, C.jsxs)('div', {
															children: [
																(0, C.jsx)(d.Z, {
																	children: (0, C.jsx)(h.Z, {
																		style: {padding: '10px'},
																		children: K,
																	}),
																}),
																(0, C.jsx)(d.Z, {
																	children: (0, C.jsx)(h.Z, {
																		style: {padding: '10px'},
																		children: V,
																	}),
																}),
																(0, C.jsx)(d.Z, {
																	children: (0, C.jsx)(h.Z, {
																		style: {padding: '10px'},
																		children: L,
																	}),
																}),
																(0, C.jsx)(d.Z, {
																	children: (0, C.jsx)(h.Z, {
																		style: {padding: '10px'},
																		children: W,
																	}),
																}),
																J &&
																	(0, C.jsx)(d.Z, {
																		children: (0, C.jsx)(h.Z, {
																			style: {padding: '10px'},
																			children: J,
																		}),
																	}),
																(0, C.jsx)(d.Z, {
																	children: (0, C.jsx)(h.Z, {
																		style: {padding: '10px'},
																		children: U,
																	}),
																}),
																(0, C.jsx)(d.Z, {
																	children: (0, C.jsx)(h.Z, {
																		style: {padding: '10px'},
																		children: q,
																	}),
																}),
																null != H &&
																	(0, C.jsx)(d.Z, {
																		children: (0, C.jsx)(h.Z, {
																			style: {padding: '10px'},
																			children: H,
																		}),
																	}),
															],
													  })
													: (0, C.jsxs)('div', {
															children: [
																(0, C.jsx)(d.Z, {
																	children: (0, C.jsx)(h.Z, {
																		style: {padding: '10px'},
																		children: K,
																	}),
																}),
																(0, C.jsxs)(d.Z, {
																	children: [
																		(0, C.jsx)(h.Z, {
																			span: 12,
																			style: {padding: '10px'},
																			children: V,
																		}),
																		(0, C.jsx)(h.Z, {
																			span: 12,
																			style: {padding: '10px'},
																			children: L,
																		}),
																	],
																}),
																(0, C.jsx)(d.Z, {
																	children: (0, C.jsx)(h.Z, {
																		style: {padding: '10px'},
																		children: W,
																	}),
																}),
																J &&
																	(0, C.jsx)(d.Z, {
																		children: (0, C.jsx)(h.Z, {
																			style: {padding: '10px'},
																			children: J,
																		}),
																	}),
																(0, C.jsxs)(d.Z, {
																	children: [
																		(0, C.jsx)(h.Z, {
																			span: 12,
																			style: {padding: '10px'},
																			children: U,
																		}),
																		(0, C.jsxs)(h.Z, {
																			span: 12,
																			style: {padding: '10px'},
																			children: [q, H],
																		}),
																	],
																}),
															],
													  }),
												(0, C.jsxs)('div', {
													className: 'barter-footer',
													children: [
														(0, C.jsx)(c.Z, {
															title: b().translate(
																'showcases.barter.propose_tooltip'
															),
															placement: 'topLeft',
															children: (0, C.jsx)(
																l.Z,
																{
																	disabled: M,
																	onClick: M ? null : this.onSubmit.bind(this),
																	children: b().translate('propose'),
																},
																'propose'
															),
														}),
														!M && this.renderBalanceWarnings(),
													],
												}),
											],
										}),
									})
								);
							},
						},
						{
							key: '_updateEscrowFee',
							value: function (e) {
								this.setState({
									escrow_payment_changed: !0,
									escrow_payment: e.amount,
								});
							},
						},
						{
							key: 'onToggleSendToEscrow',
							value: function () {
								this.setState({send_to_escrow: !this.state.send_to_escrow});
							},
						},
						{
							key: 'toggleEscrow',
							value: function () {
								this.setState({showEscrow: !this.state.showEscrow});
							},
						},
					]),
					n && M(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					T
				);
			})(r.Component);
		},
		26325: (e, t, n) => {
			n.r(t), n.d(t, {default: () => Z});
			var r = n(67294),
				o = n(112),
				s = n.n(o),
				a = n(58074),
				i = n.n(a),
				c = n(39144),
				l = n(61580),
				u = n(71577),
				p = n(97880),
				f = n(80563),
				d = (n(31403), n(11230)),
				h = n(52233),
				m = n(44945),
				y = n(50674),
				b = n(37983),
				_ = n(41185),
				g = n(37092),
				v = n(73935),
				w = n(35944);
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
			function x(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function O(e, t) {
				return (
					(O =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					O(e, t)
				);
			}
			function k(e, t) {
				if (t && ('object' === j(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return S(e);
			}
			function S(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function P(e) {
				return (
					(P = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					P(e)
				);
			}
			var C = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && O(e, t);
				})(d, e);
				var t,
					n,
					o,
					a,
					f =
						((o = d),
						(a = (function () {
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
								t = P(o);
							if (a) {
								var n = P(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return k(this, e);
						});
				function d() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, d),
						((e = f.call(this)).state = {
							isBorrowBaseModalVisible: !1,
							selectedAsset: null,
							step: 0,
						}),
						(e.steps = [
							{key: 'introduction', icon: 'borrow'},
							{key: 'concept', has_legend: !0},
							{key: 'setup', has_legend: !0},
							{key: 'benefits', has_legend: !0},
							{key: 'risks', has_legend: !0},
						]),
						(e.showBorrowModal = e.showBorrowModal.bind(S(e))),
						(e.hideBorrowModal = e.hideBorrowModal.bind(S(e))),
						e
					);
				}
				return (
					(t = d),
					(n = [
						{
							key: 'showBorrowModal',
							value: function () {
								var e = this;
								this.props.currentAccount
									? this.setState({isBorrowBaseModalVisible: !0})
									: m.Z.unlock()
											.then(function () {
												e.setState({isBorrowBaseModalVisible: !0});
											})
											.catch(function () {});
							},
						},
						{
							key: 'hideBorrowModal',
							value: function () {
								this.setState({isBorrowBaseModalVisible: !1});
							},
						},
						{
							key: 'next',
							value: function () {
								var e = this.state.step + 1;
								e >= this.steps.length && (e = this.steps.length),
									this.setState({step: e});
							},
						},
						{
							key: 'prev',
							value: function () {
								var e = this.state.step - 1;
								e < 0 && (e = 0), this.setState({step: e});
							},
						},
						{
							key: 'onAssetChange',
							value: function (e) {
								this.setState({selectedAsset: e});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = h.BQ.getAccount(this.props.currentAccount),
									n = !(!t || 'string' == typeof t),
									o = this.state.step,
									a = window.innerWidth <= 800,
									f = this.state.step > 0,
									d = h.BQ.getAsset(this.state.selectedAsset),
									m = this.steps,
									b = null;
								if (o < m.length)
									try {
										m[o].has_legend &&
											(b = (b = s().translate(
												'showcases.borrow.steps_' + m[o].key + '.text_legend'
											))
												.split('\n')
												.map(function (e) {
													return e.split(':');
												}));
									} catch (e) {
										b = s().translate(
											'showcases.borrow.steps_' + m[o].key + '.text_legend'
										);
									}
								var v = null;
								return (
									o >= m.length &&
										(v = (0, w.jsxs)(c.Z, {
											children: [
												(0, w.jsx)('div', {
													className: 'center-content',
													children: (0, w.jsx)(i(), {
														content: 'showcases.borrow.choose',
														component: 'h4',
													}),
												}),
												(0, w.jsx)('div', {
													style: {display: 'flex', justifyContent: 'center'},
													children: (0, w.jsxs)('div', {
														children: [
															(0, w.jsx)(g.Z, {
																style: {width: '12rem', marginBottom: '1rem'},
																assets: [
																	'1.3.113',
																	'1.3.120',
																	'1.3.121',
																	'1.3.1325',
																	'1.3.105',
																	'1.3.106',
																	'1.3.103',
																],
																value: this.state.selectedAsset,
																onChange: this.onAssetChange.bind(this),
															}),
															(0, w.jsx)(l.Z, {
																title: s().translate(
																	'showcases.borrow.borrow_tooltip'
																),
																placement: 'bottom',
																children: (0, w.jsx)(u.Z, {
																	type: 'primary',
																	style: {width: '12rem'},
																	disabled:
																		null === this.state.selectedAsset ||
																		!n ||
																		'1.2.3' === t.get('id'),
																	onClick: this.showBorrowModal,
																	children: (0, w.jsx)(i(), {
																		content: 'exchange.borrow',
																	}),
																}),
															}),
														],
													}),
												}),
											],
										})),
									(0, w.jsxs)('div', {
										style: {
											align: 'center',
											display: 'flex',
											paddingTop: '1rem',
											justifyContent: 'center',
										},
										onKeyDown: this.onKeyDown.bind(this),
										children: [
											(0, w.jsxs)(c.Z, {
												style: {
													borderRadius: '50px',
													width: '70%',
													maxWidth: '70rem',
													paddingTop: '1rem',
													paddingBottom: '1rem',
												},
												children: [
													(0, w.jsx)('div', {
														style: {display: 'flex', justifyContent: 'center'},
														children: (0, w.jsx)(i(), {
															component: 'h1',
															content:
																null != v
																	? 'showcases.borrow.now_ready'
																	: 'showcases.borrow.title_long',
														}),
													}),
													f &&
														(a
															? o < this.steps.length
																? (0, w.jsxs)(r.Fragment, {
																		children: [
																			o + '. ',
																			(0, w.jsx)(i(), {
																				content:
																					'showcases.borrow.steps_' +
																					m[o].key +
																					'.title',
																			}),
																		],
																  })
																: null
															: (0, w.jsx)(p.Z, {
																	progressDot: !0,
																	current: o - 1,
																	children: m.map(function (e, t) {
																		return 0 == t
																			? null
																			: (0, w.jsx)(
																					p.Z.Step,
																					{
																						title: s().translate(
																							'showcases.borrow.steps_' +
																								e.key +
																								'.title'
																						),
																					},
																					e.key
																			  );
																	}),
															  })),
													(0, w.jsxs)('div', {
														style: {paddingTop: '1rem', paddingBottom: '1rem'},
														children: [
															null != v && v,
															null == v &&
																(0, w.jsxs)(c.Z, {
																	onKeyDown: this.onKeyDown.bind(this),
																	children: [
																		!!m[o].icon &&
																			(0, w.jsx)(_.Z, {
																				name: 'steps[current].icon',
																			}),
																		(0, w.jsx)(i(), {
																			component: 'h2',
																			content:
																				'showcases.borrow.steps_' +
																				m[o].key +
																				'.title_within',
																		}),
																		(0, w.jsx)(i(), {
																			component: 'p',
																			content:
																				'showcases.borrow.steps_' +
																				m[o].key +
																				'.text',
																		}),
																		!!m[o].has_legend &&
																			(0, w.jsx)(r.Fragment, {
																				children: b.map(function (e, t) {
																					return (0,
																					w.jsxs)('p', {children: [(0, w.jsx)('strong', {children: e[0]}), ': ', e[1]]}, 'borrow_subp_' + t);
																				}),
																			}),
																	],
																}),
														],
													}),
													(0, w.jsxs)('div', {
														className: 'steps-action',
														children: [
															o < m.length &&
																(0, w.jsx)(l.Z, {
																	title:
																		0 == o
																			? s().translate(
																					'showcases.borrow.navigate_with_keys'
																			  )
																			: null,
																	children: (0, w.jsxs)(u.Z, {
																		type: 'primary',
																		onClick: function () {
																			return e.next();
																		},
																		tabIndex: '0',
																		ref: 'next',
																		onKeyDown: this.onKeyDown.bind(this),
																		children: [
																			0 == o &&
																				(0, w.jsx)(i(), {
																					content:
																						'showcases.borrow.get_started',
																				}),
																			o > 0 &&
																				o < m.length - 1 &&
																				(0, w.jsx)(i(), {
																					content: 'showcases.borrow.next',
																				}),
																			o === m.length - 1 &&
																				(0, w.jsx)(i(), {
																					content: 'showcases.borrow.do_it',
																				}),
																		],
																	}),
																}),
															o > 0 &&
																(0, w.jsx)(u.Z, {
																	style: {marginLeft: 8},
																	onClick: function () {
																		return e.prev();
																	},
																	ref: 'previous',
																	onKeyDown: this.onKeyDown.bind(this),
																	children: (0, w.jsx)(i(), {
																		content: 'showcases.borrow.previous',
																	}),
																}),
														],
													}),
												],
											}),
											n &&
												!!d &&
												(0, w.jsx)(y.Z, {
													visible: this.state.isBorrowBaseModalVisible,
													hideModal: this.hideBorrowModal,
													quoteAssetObj: d.get('id'),
													backingAssetObj: d.getIn([
														'bitasset',
														'options',
														'short_backing_asset',
													]),
													accountObj: t,
												}),
										],
									})
								);
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this.focusDiv();
							},
						},
						{
							key: 'componentDidUpdate',
							value: function () {
								this.focusDiv();
							},
						},
						{
							key: 'focusDiv',
							value: function () {
								var e = this.state.step,
									t = this.steps;
								e < t.length && this.refs.next
									? v.findDOMNode(this.refs.next).focus()
									: e == t.length &&
									  this.refs.previous &&
									  v.findDOMNode(this.refs.previous).focus();
							},
						},
						{
							key: 'onKeyDown',
							value: function (e) {
								39 === e.keyCode || 'ArrowRight' == e.key
									? (e.preventDefault(), e.stopPropagation(), this.next())
									: (37 !== e.keyCode && 'ArrowLeft' != e.key) ||
									  (e.preventDefault(), e.stopPropagation(), this.prev());
							},
						},
					]) && x(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					d
				);
			})(r.Component);
			C = (0, f.Z)(C, 50, {leading: !1});
			const Z = (0, d.$)(C, {
				listenTo: function () {
					return [b.Z];
				},
				getProps: function () {
					return {
						currentAccount:
							b.Z.getState().currentAccount || b.Z.getState().passwordAccount,
					};
				},
			});
		},
		54097: (e, t, n) => {
			n.r(t), n.d(t, {default: () => Ve});
			var r = n(67294),
				o = n(18825),
				s = n(71577),
				a = n(39144),
				i = n(71230),
				c = n(15746),
				l = n(55019),
				u = n(22949),
				p = n(112),
				f = n.n(p),
				d = n(52233),
				h = n(40840),
				m = n(58074),
				y = n.n(m),
				b = n(98652),
				_ = n(17076),
				g = n(97891),
				v = (n(43393), n(31403), n(45697)),
				w = n.n(v),
				j = n(35944);
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
			function O(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function k(e, t) {
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
			function P(e, t) {
				if (t && ('object' === x(t) || 'function' == typeof t)) return t;
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
			function Z(e) {
				return (
					(Z = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Z(e)
				);
			}
			function A(e, t, n) {
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
			var B = (function (e) {
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
					r,
					o,
					s =
						((r = a),
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
								t = Z(r);
							if (o) {
								var n = Z(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return P(this, e);
						});
				function a() {
					var e;
					O(this, a);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
						n[r] = arguments[r];
					return (
						A(
							C((e = s.call.apply(s, [this].concat(n)))),
							'onInputChange',
							function (t) {
								var n = e.props,
									r = n.onChange,
									o = n.periodType;
								r && r({amount: e.getNumericEventValue(t), type: o});
							}
						),
						A(C(e), 'onTypeChange', function (t) {
							var n = e.props,
								r = n.onChange,
								o = n.inputValue;
							r && r({amount: o, type: t});
						}),
						e
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'getNumericEventValue',
							value: function (e) {
								return '' == e.target.value ||
									null == e.target.value ||
									e.target.value < 0
									? ''
									: 0 === e.target.value
									? 0
									: parseFloat(e.target.value) == e.target.value
									? e.target.value.trim()
									: parseFloat(e.target.value.trim().replace(/[^\d.-]/g, '')) ||
									  0;
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.inputValue,
									n = e.values,
									r = e.entries,
									o = e.periodType,
									s = e.tabIndex,
									a = e.placeholder,
									i = e.disabled,
									c = e.scroll_length;
								return (0, j.jsxs)('div', {
									className: 'amount-selector',
									style: this.props.style,
									children: [
										(0, j.jsx)(y(), {
											className: 'left-label',
											component: 'label',
											content: this.props.label,
										}),
										(0, j.jsxs)('div', {
											className: 'inline-label input-wrapper',
											children: [
												(0, j.jsx)('span', {
													className: 'input-addon-before',
													children: 'TIME',
												}),
												(0, j.jsx)('input', {
													disabled: i,
													type: 'number',
													min: '1',
													value: t || '',
													placeholder: a,
													onChange: this.onInputChange,
													tabIndex: s,
													style: {paddingLeft: '70px', backgroundColor: 'grey'},
												}),
												(0, j.jsx)('div', {
													className: 'form-label select floating-dropdown',
													children: (0, j.jsx)(g.Z, {
														entries: r,
														values: n,
														value: o && o.name,
														onChange: this.onTypeChange,
														scroll_length: c,
													}),
												}),
											],
										}),
									],
								});
							},
						},
					]) && k(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			A(B, 'propTypes', {
				label: w().string,
				placeholder: w().string,
				onChange: w().func,
				tabIndex: w().number,
				error: w().string,
				scroll_length: w().number,
			}),
				A(B, 'defaultProps', {disabled: !1, tabIndex: 0});
			const R = B;
			var N = n(37983),
				T = n(10033),
				E = n(72777),
				M = n(86035),
				D = n(69864),
				I = n(99111),
				F = n(70534),
				V = n(83370),
				L = n(11230),
				z = n(96520),
				Q = n(8174),
				W = n(61580),
				U = n(68588),
				q = n(99959),
				H = n(30381),
				K = n.n(H),
				J = n(25108);
			function G(e) {
				return (
					(G =
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
					G(e)
				);
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
			function X(e, t) {
				return (
					(X =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					X(e, t)
				);
			}
			function Y(e, t) {
				if (t && ('object' === G(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return ee(e);
			}
			function ee(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function te(e) {
				return (
					(te = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					te(e)
				);
			}
			function ne(e, t, n) {
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
			var re = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && X(e, t);
				})(i, e);
				var t,
					n,
					r,
					o,
					a =
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
								t = te(r);
							if (o) {
								var n = te(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Y(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						ne(ee((t = a.call(this, e))), 'onSubmit', function (e) {
							e.preventDefault();
							var n = t.state,
								r = n.feeAsset,
								o = (n.feeAmount, n.from_account),
								s = n.to_account,
								a = n.amount,
								i = n.asset,
								c = n.asset_id,
								l = n.fee_asset_id,
								u = n.period,
								p = n.num_of_periods,
								f = n.period_start_time,
								d = n.permissionId,
								m = t.props.operation.type;
							'create' === m
								? q.Z.createWithdrawPermission(
										o,
										s,
										c,
										h.Z.convert_typed_to_satoshi(a, i),
										u.type.seconds * Number(u.amount),
										p,
										f.valueOf(),
										r ? r.get('id') : l
								  )
										.then(function (e) {
											t.props.hideModal();
										})
										.catch(function (e) {
											J.error(e);
										})
								: 'update' === m &&
								  q.Z.updateWithdrawPermission(
										d,
										o,
										s,
										c,
										h.Z.convert_typed_to_satoshi(a, i),
										u.type.seconds * Number(u.amount),
										p,
										f.valueOf(),
										r ? r.get('id') : l
								  )
										.then(function (e) {
											t.props.hideModal();
										})
										.catch(function (e) {
											J.error(e);
										});
						}),
						ne(ee(t), 'onToAccountChanged', function (e) {
							t.setState({to_account: e, error: null});
						}),
						ne(ee(t), 'onAmountChanged', function (e) {
							var n = e.amount,
								r = e.asset;
							r &&
								t.setState(
									{
										amount: n,
										asset: r,
										asset_id: r.get('id'),
										error: null,
										maxAmount: !1,
									},
									t._checkBalance
								);
						}),
						ne(ee(t), 'toChanged', function (e) {
							t.setState({to_name: e, error: null});
						}),
						ne(ee(t), 'onNumOfPeriodsChanged', function (e) {
							var n = parseInt(e.target.value, 10);
							!(0, D.Z)(n) &&
								'number' == typeof n &&
								n >= 0 &&
								t.setState({num_of_periods: n});
						}),
						ne(ee(t), 'onPeriodChanged', function (e) {
							var n = e.amount,
								r = e.type;
							t.setState({period: {amount: n, type: r}}), J.log(t.state.period);
						}),
						ne(ee(t), 'onStartDateChanged', function (e) {
							e
								? t.setState({period_start_time: e})
								: t.setState({period_start_time: null});
						}),
						(t.state = t.getInitialState(e)),
						(t.onTrxIncluded = t.onTrxIncluded.bind(ee(t))),
						(t._updateFee = (0, I.Z)(t._updateFee.bind(ee(t)), 250)),
						(t._checkFeeStatus = t._checkFeeStatus.bind(ee(t))),
						(t._checkBalance = t._checkBalance.bind(ee(t))),
						(t._isMounted = !1),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'getInitialState',
							value: function () {
								return {
									to_name: '',
									from_account: null,
									to_account: null,
									amount: '',
									asset_id: null,
									asset: null,
									error: null,
									feeAsset: null,
									fee_asset_id:
										d.BQ.assets_by_symbol.get(this.props.fee_asset_symbol) ||
										'1.3.0',
									feeAmount: new M.xR({amount: 0}),
									feeStatus: {},
									maxAmount: !1,
									num_of_periods: 1,
									period: {amount: '15', type: {seconds: 3024e4, name: 'Year'}},
									period_start_time: K()().add('seconds', 120),
									permissionId: '',
									balanceError: !1,
								};
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this._isMounted = !0;
							},
						},
						{
							key: 'componentDidUpdate',
							value: function (e, t) {
								var n = this,
									r = this.props.operation;
								if (
									(this.props.isModalVisible &&
									e.isModalVisible !== this.props.isModalVisible
										? this.setState(
												{
													from_account: d.BQ.getAccount(
														this.props.currentAccount
													),
												},
												function () {
													n._updateFee(), n._checkFeeStatus(n.state);
												}
										  )
										: this.props.isModalVisible ||
										  e.isModalVisible === this.props.isModalVisible ||
										  this.setState(this.getInitialState()),
									r && 'update' === r.type && r.payload.id !== t.permissionId)
								) {
									var o = d.BQ.getAccount(r.payload.authorized_account);
									if (o && o.get) {
										for (
											var s,
												a,
												i,
												c = K().utc(r.payload.period_start_time).valueOf(),
												l =
													(K().utc(r.payload.expiration).valueOf() - c) /
													(1e3 * r.payload.withdrawal_period_sec),
												u = [
													{seconds: 604800, name: 'Week'},
													{seconds: 86400, name: 'Day'},
													{seconds: 3600, name: 'Hour'},
													{seconds: 60, name: 'Minute'},
												],
												p = 0;
											p < u.length;
											p++
										)
											if (r.payload.withdrawal_period_sec >= u[p].seconds) {
												var f = u[p];
												(a = f.name),
													(s = f.seconds),
													(i = Math.round(
														r.payload.withdrawal_period_sec / f.seconds
													));
												break;
											}
										var m = d.BQ.getAsset(r.payload.withdrawal_limit.asset_id);
										this.setState({
											to_account: o,
											to_name: o.get('name'),
											asset: m,
											permissionId: r.payload.id,
											amount: h.Z.convert_satoshi_to_typed(
												r.payload.withdrawal_limit.amount,
												m
											),
											asset_id: r.payload.withdrawal_limit.asset_id,
											num_of_periods: l,
											period: {amount: i, type: {seconds: s, name: a}},
											period_start_time: K().utc(r.payload.period_start_time),
										});
									}
								}
							},
						},
						{
							key: 'componentWillUnmount',
							value: function () {
								this._isMounted = !1;
							},
						},
						{
							key: '_checkBalance',
							value: function () {
								var e = this.state,
									t = e.feeAmount,
									n = e.amount,
									r = e.from_account,
									o = e.asset;
								if (o && r) {
									this._updateFee();
									var s = r.getIn(['balances', o.get('id')]),
										a = r.getIn(['balances', t.asset_id]);
									if (o && r) {
										if (!s) return this.setState({balanceError: !0});
										var i = d.BQ.getObject(s),
											c = a ? d.BQ.getObject(a) : null;
										if (
											((c && 0 !== c.get('balance')) ||
												this.setState(
													{fee_asset_id: this.state.fee_asset_id},
													this._updateFee
												),
											i && t)
										) {
											if (!n) return this.setState({balanceError: !1});
											var l = (0, F.cr)(n, o, t, i);
											null !== l && this.setState({balanceError: !l});
										}
									}
								}
							},
						},
						{
							key: '_checkFeeStatus',
							value: function () {
								var e = this,
									t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.state,
									n = t.from_account,
									r = this.props,
									o = r.isModalVisible,
									s = r.operation;
								if (n && o) {
									var a = Object.keys(n.get('balances').toJS()).sort(
											h.Z.sortID
										),
										i = {},
										c = [];
									a.forEach(function (e) {
										c.push(
											(0, F.rX)({
												accountID: n.get('id'),
												feeID: e,
												type:
													s && 'update' === s.type
														? 'withdraw_permission_update'
														: 'withdraw_permission_create',
												data: {type: 'memo', content: null},
											})
										);
									}),
										Promise.all(c)
											.then(function (t) {
												a.forEach(function (e, n) {
													i[e] = t[n];
												}),
													h.Z.are_equal_shallow(e.state.feeStatus, i) ||
														e.setState({feeStatus: i}),
													e._checkBalance();
											})
											.catch(function (e) {
												J.error(e);
											});
								}
							},
						},
						{
							key: '_setTotal',
							value: function (e, t) {
								var n = this.state.feeAmount,
									r = d.BQ.getObject(t),
									o = d.BQ.getObject(e),
									s = new M.xR({
										amount: r.get('balance'),
										asset_id: o.get('id'),
										precision: o.get('precision'),
									});
								r &&
									(n.asset_id === s.asset_id && s.minus(n),
									this.setState(
										{maxAmount: !0, amount: s.getAmount({real: !0})},
										this._checkBalance
									));
							},
						},
						{
							key: '_getAvailableAssets',
							value: function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.state,
									t = this.state.feeStatus;
								function n(e) {
									return void 0 === t[e] || (t[e] && t[e].hasPoolBalance);
								}
								function r(e) {
									return void 0 === t[e] || (t[e] && t[e].hasBalance);
								}
								var o = e.from_account,
									s = [],
									a = [];
								if (!o || !o.get('balances'))
									return {asset_types: s, fee_asset_types: a};
								var i = e.from_account.get('balances').toJS();
								for (var c in ((s = Object.keys(i).sort(h.Z.sortID)),
								(a = Object.keys(i).sort(h.Z.sortID)),
								i)) {
									var l = d.BQ.getObject(i[c]);
									l &&
										0 === l.get('balance') &&
										(s.splice(s.indexOf(c), 1),
										-1 !== a.indexOf(c) && a.splice(a.indexOf(c), 1));
								}
								return {
									asset_types: s,
									fee_asset_types: (a = a.filter(function (e) {
										return n(e) && r(e);
									})),
								};
							},
						},
						{
							key: '_updateFee',
							value: function () {
								var e = this,
									t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.state;
								if (this.props.isModalVisible) {
									var n = this.props.operation,
										r = t.fee_asset_id,
										o = t.from_account,
										s = t.asset_id,
										a = this._getAvailableAssets(t),
										i = a.fee_asset_types;
									if ((1 === i.length && i[0] !== r && (r = i[0]), !o))
										return null;
									(0, F.rX)({
										accountID: o.get('id'),
										feeID: r,
										type:
											n && 'update' === n.type
												? 'withdraw_permission_update'
												: 'withdraw_permission_create',
										data: {type: 'memo', content: null},
									}).then(function (t) {
										var n = t.fee,
											r = t.hasBalance,
											a = t.hasPoolBalance;
										(0, F.G7)(o, n).then(function (t) {
											return t
												? e.setState({fee_asset_id: s}, e._updateFee)
												: e.setState({
														feeAmount: n,
														fee_asset_id: n.asset_id,
														hasBalance: r,
														hasPoolBalance: a,
														error: !r || !a,
												  });
										});
									});
								}
							},
						},
						{
							key: 'onFeeChanged',
							value: function (e) {
								var t = e.asset;
								this.setState(
									{feeAsset: t, fee_asset_id: t.get('id'), error: null},
									this._updateFee
								);
							},
						},
						{
							key: 'onTrxIncluded',
							value: function (e) {
								((e.included && e.broadcasted_transaction) || e.closed) &&
									(E.Z.unlisten(this.onTrxIncluded), E.Z.reset());
							},
						},
						{
							key: 'onDatepickerRef',
							value: function (e) {
								e && e.picker.input && (e.picker.input.readOnly = !1);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.state,
									n = t.from_account,
									r = t.to_account,
									o = t.asset,
									a = t.asset_id,
									i = t.feeAmount,
									c = t.amount,
									l = (t.error, t.to_name),
									u = t.feeAsset,
									p = t.fee_asset_id,
									h = t.balanceError,
									m = t.num_of_periods,
									_ = t.period,
									g = t.period_start_time,
									v = this.props.operation,
									w = this._getAvailableAssets(),
									x = w.asset_types,
									O = w.fee_asset_types,
									k = null,
									S = null,
									P = this.state.feeAmount.getAmount({real: !0});
								if (n && n.get('balances')) {
									var C = n.get('balances').toJS(),
										Z = this.state.balanceError ? 'has-error' : '';
									if (
										(1 === x.length && (o = d.BQ.getAsset(x[0])), x.length > 0)
									) {
										var A = o ? o.get('id') : x[0],
											B = u ? u.get('id') : p;
										(k = (0, j.jsxs)('span', {
											children: [
												(0, j.jsx)(y(), {
													component: 'span',
													content: 'transfer.available',
												}),
												':',
												' ',
												(0, j.jsx)('span', {
													className: Z,
													style: {
														borderBottom: '#A09F9F 1px dotted',
														cursor: 'pointer',
													},
													onClick: this._setTotal.bind(this, A, C[A], P, B),
													children: (0, j.jsx)(V.Z, {balance: C[A]}),
												}),
											],
										})),
											B == A &&
												this.state.balanceError &&
												(S = (0, j.jsx)('span', {
													children: (0, j.jsx)('span', {
														className: Z,
														children: (0, j.jsx)(y(), {
															content: 'transfer.errors.insufficient',
														}),
													}),
												}));
									} else
										(k = (0, j.jsx)('span', {
											children: (0, j.jsx)('span', {
												className: Z,
												children: (0, j.jsx)(y(), {
													content: 'transfer.errors.noFunds',
												}),
											}),
										})),
											(S = (0, j.jsx)('span', {
												children: (0, j.jsx)('span', {
													className: Z,
													children: (0, j.jsx)(y(), {
														content: 'transfer.errors.noFunds',
													}),
												}),
											}));
								}
								var N = parseFloat(String.prototype.replace.call(c, /,/g, '')),
									E = N && !(0, D.Z)(N),
									M =
										!n ||
										!r ||
										!E ||
										!o ||
										h ||
										n.get('id') == r.get('id') ||
										!_.amount ||
										!m ||
										!g;
								return (0, j.jsx)(Q.Z, {
									title:
										v && 'create' === v.type
											? f().translate(
													'showcases.direct_debit.create_new_mandate'
											  )
											: f().translate('showcases.direct_debit.update_mandate'),
									visible: this.props.isModalVisible,
									overlay: !0,
									onCancel: this.props.hideModal,
									footer: [
										(0, j.jsx)(
											s.Z,
											{
												disabled: M,
												onClick: M ? null : this.onSubmit.bind(this),
												children:
													v && 'create' === v.type
														? f().translate('showcases.direct_debit.create')
														: null,
											},
											'send'
										),
										(0, j.jsx)(
											s.Z,
											{
												onClick: this.props.hideModal,
												children: (0, j.jsx)(y(), {
													component: 'span',
													content: 'transfer.cancel',
												}),
											},
											'Cancel'
										),
									],
									children: (0, j.jsx)('div', {
										className: 'grid-block vertical no-overflow',
										children: (0, j.jsxs)('form', {
											noValidate: !0,
											children: [
												(0, j.jsx)('div', {
													children: (0, j.jsx)(W.Z, {
														title: f().translate(
															'showcases.direct_debit.tooltip.authorized_account'
														),
														mouseEnterDelay: 0.5,
														children: (0, j.jsx)('div', {
															className: 'content-block',
															children: (0, j.jsx)(T.Z, {
																label:
																	'showcases.direct_debit.authorized_account',
																accountName: l,
																account: r,
																onChange: this.toChanged.bind(this),
																onAccountChanged: this.onToAccountChanged,
																size: 60,
																typeahead: !0,
																hideImage: !0,
															}),
														}),
													}),
												}),
												(0, j.jsx)(W.Z, {
													title: f().translate(
														'showcases.direct_debit.tooltip.limit_per_period'
													),
													mouseEnterDelay: 0.5,
													children: (0, j.jsx)('div', {
														className: 'content-block transfer-input',
														children: (0, j.jsx)(b.Z, {
															label: 'showcases.direct_debit.limit_per_period',
															amount: c,
															onChange: this.onAmountChanged,
															asset:
																x.length > 0 && o ? o.get('id') : a || x[0],
															assets: x,
															display_balance: k,
															allowNaN: !0,
														}),
													}),
												}),
												(0, j.jsx)(W.Z, {
													title: f().translate(
														'showcases.direct_debit.tooltip.period'
													),
													mouseEnterDelay: 0.5,
													children: (0, j.jsx)('div', {
														className: 'content-block transfer-input',
														children: (0, j.jsx)(R, {
															disabled: !0,
															label: 'showcases.direct_debit.period',
															inputValue: _.amount,
															entries: ['Years'],
															values: {Year: {seconds: 29030400, name: 'Year'}},
															periodType: _.type,
															onChange: this.onPeriodChanged,
														}),
													}),
												}),
												(0, j.jsxs)('div', {
													className: 'content-block transfer-input',
													children: [
														(0, j.jsx)('label', {
															className: 'left-label',
															children: f().translate(
																'showcases.direct_debit.start_date'
															),
														}),
														(0, j.jsx)(W.Z, {
															title: f().translate(
																'showcases.direct_debit.tooltip.start_time'
															),
															mouseEnterDelay: 0.5,
															children: (0, j.jsx)(U.Z, {
																value: g,
																showToday: !1,
																showTime: !0,
																placeholder: '',
																onChange: this.onStartDateChanged,
																className: 'date-picker-width100',
																style: {width: '100%'},
																ref: function (t) {
																	return e.onDatepickerRef(t);
																},
																disabledDate: function (e) {
																	return e && e < K()().add(2, 'minutes');
																},
															}),
														}),
													],
												}),
												(0, j.jsx)('div', {
													className: 'content-block transfer-input',
													children: (0, j.jsx)('div', {
														className: 'no-margin no-padding',
														children: (0, j.jsx)('div', {
															id: 'txFeeSelector',
															className: 'small-12',
															children: (0, j.jsx)(b.Z, {
																label: 'transfer.fee',
																disabled: !0,
																amount: P,
																onChange: this.onFeeChanged.bind(this),
																asset:
																	O.length && i
																		? i.asset_id
																		: 1 === O.length
																		? O[0]
																		: p || O[0],
																assets: O,
																display_balance: S,
																error:
																	!1 === this.state.hasPoolBalance
																		? 'transfer.errors.insufficient'
																		: null,
																scroll_length: 2,
															}),
														}),
													}),
												}),
											],
										}),
									}),
								});
							},
						},
					]),
					n && $(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			const oe = (0, L.$)(re, {
				listenTo: function () {
					return [N.Z, z.Z];
				},
				getProps: function () {
					return {
						currentAccount: N.Z.getState().currentAccount,
						passwordAccount: N.Z.getState().passwordAccount,
						fee_asset_symbol: z.Z.getState().settings.get('fee_asset'),
					};
				},
			});
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
			function ae(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ie(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ce(e, t) {
				return (
					(ce =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ce(e, t)
				);
			}
			function le(e, t) {
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
			function ue(e) {
				return (
					(ue = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ue(e)
				);
			}
			function pe(e, t, n) {
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
						t && ce(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					s =
						((r = a),
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
								t = ue(r);
							if (o) {
								var n = ue(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return le(this, e);
						});
				function a() {
					return ae(this, a), s.apply(this, arguments);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'render',
							value: function () {
								return (0, j.jsx)(_.Z, {
									amount: this.props.amount,
									asset: this.props.assetId,
									asPercentage: this.props.asPercentage,
									assetInfo: this.props.assetInfo,
									replace: this.props.replace,
									hide_asset: this.props.hide_asset,
								});
							},
						},
					]) && ie(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			pe(fe, 'propTypes', {hide_asset: w().bool}),
				pe(fe, 'defaultProps', {hide_asset: !1});
			const de = fe;
			var he = n(8193),
				me = n(23085).Buffer,
				ye = n(25108);
			function be(e) {
				return (
					(be =
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
					be(e)
				);
			}
			function _e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ge(e, t) {
				return (
					(ge =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ge(e, t)
				);
			}
			function ve(e, t) {
				if (t && ('object' === be(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return we(e);
			}
			function we(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function je(e) {
				return (
					(je = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					je(e)
				);
			}
			function xe(e, t, n) {
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
			var Oe = {name: '1e2os1d', styles: 'color:#fe8c00'},
				ke = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && ge(e, t);
					})(i, e);
					var t,
						n,
						r,
						o,
						a =
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
									t = je(r);
								if (o) {
									var n = je(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return ve(this, e);
							});
					function i(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, i),
							xe(we((t = a.call(this, e))), 'onSubmit', function (e) {
								e.preventDefault();
								var n = t.state,
									r = n.from_account,
									o = n.to_account,
									s = n.feeAsset,
									a = n.fee_asset_id,
									i = n.permissionId,
									c = n.amount,
									l = n.asset,
									u = n.asset_id,
									p = n.memo;
								q.Z.claimWithdrawPermission(
									i,
									r,
									o,
									u,
									h.Z.convert_typed_to_satoshi(c, l),
									p ? new me(p, 'utf-8') : p,
									s ? s.get('id') : a
								)
									.then(function (e) {
										t.props.hideModal();
									})
									.catch(function (e) {
										t.setState({errorMessage: e});
									});
							}),
							xe(we(t), 'setTotalLimit', function (e) {
								return function () {
									var n = t.state,
										r = n.asset,
										o = n.claimedAmount,
										s = h.Z.get_asset_amount(e - o, r);
									t.setState({maxAmount: !0, amount: s}, t.checkLimit);
								};
							}),
							xe(we(t), 'onAmountChanged', function (e) {
								var n = e.amount,
									r = e.asset;
								r &&
									t.setState(
										{
											amount: n,
											asset: r,
											asset_id: r.get('id'),
											error: null,
											maxAmount: !1,
										},
										t.checkLimit
									);
							}),
							(t.state = t.getInitialState(e)),
							(t._updateFee = (0, I.Z)(t._updateFee.bind(we(t)), 250)),
							(t._checkFeeStatus = t._checkFeeStatus.bind(we(t))),
							(t._checkBalance = t._checkBalance.bind(we(t))),
							t
						);
					}
					return (
						(t = i),
						(n = [
							{
								key: 'getInitialState',
								value: function () {
									return {
										to_name: '',
										from_account: null,
										to_account: null,
										amount: '',
										asset_id: null,
										asset: null,
										memo: '',
										error: null,
										feeAsset: null,
										fee_asset_id:
											d.BQ.assets_by_symbol.get(this.props.fee_asset_symbol) ||
											'1.3.0',
										feeAmount: new M.xR({amount: 0}),
										feeStatus: {},
										maxAmount: !1,
										permissionId: '',
										balanceError: !1,
										limitError: !1,
										firstPeriodError: !1,
										payerBalanceWarning: !1,
										withdrawal_limit: null,
										current_period_expires: '',
										claimedAmount: '',
										errorMessage: null,
									};
								},
							},
							{
								key: 'componentDidUpdate',
								value: function (e, t) {
									var n = this.props,
										r = n.operation;
									if (
										n.isModalVisible &&
										r &&
										t.permissionId !== r.payload.id
									) {
										var o = new Date(
												r.payload.period_start_time + 'Z'
											).getTime(),
											s = new Date().getTime() - o,
											a = '',
											i = 1e3 * r.payload.withdrawal_period_sec;
										s < 0
											? ye.log('first period is not started')
											: (a = o + i * Math.ceil(s / i));
										var c = d.BQ.getAccount(r.payload.authorized_account, !1),
											l = d.BQ.getAccount(r.payload.withdraw_from_account, !1);
										this.setState(
											{
												to_account: c,
												from_account: l,
												permissionId: r.payload.id,
												withdrawal_limit: r.payload.withdrawal_limit,
												claimedAmount: r.payload.claimed_this_period,
												current_period_expires_date: a,
												asset: d.BQ.getAsset(
													r.payload.withdrawal_limit.asset_id
												),
											},
											this._checkFeeStatus
										);
									}
								},
							},
							{
								key: '_checkBalance',
								value: function () {
									var e = this.state,
										t = e.feeAmount,
										n = e.from_account,
										r = e.asset;
									if (r && n) {
										this._updateFee();
										var o = n.getIn(['balances', r.get('id')]),
											s = n.getIn(['balances', t.asset_id]);
										if (r && n) {
											if (!o) return this.setState({balanceError: !0});
											var a = d.BQ.getObject(o),
												i = s ? d.BQ.getObject(s) : null;
											if (
												((i && 0 !== i.get('balance')) ||
													this.setState(
														{fee_asset_id: '1.3.0'},
														this._updateFee
													),
												a && t)
											) {
												var c = new M.xR({
													real: a.get('balance'),
													asset_id: r.get('id'),
													precision: r.get('precision'),
												});
												c.minus(t);
												var l = c.getAmount({real: !0}) > 0;
												null !== l && this.setState({balanceError: !l});
											}
										}
									}
								},
							},
							{
								key: '_checkFeeStatus',
								value: function () {
									var e = this,
										t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: this.state,
										n = t.from_account,
										r = this.props.isModalVisible;
									if (n && r) {
										var o = Object.keys(n.get('balances').toJS()).sort(
												h.Z.sortID
											),
											s = {},
											a = [];
										o.forEach(function (e) {
											a.push(
												(0, F.rX)({
													accountID: n.get('id'),
													feeID: e,
													type: 'withdraw_permission_claim',
													options: ['price_per_kbyte'],
													data: {type: 'memo', content: t.memo},
												})
											);
										}),
											Promise.all(a)
												.then(function (t) {
													o.forEach(function (e, n) {
														s[e] = t[n];
													}),
														h.Z.are_equal_shallow(e.state.feeStatus, s) ||
															e.setState({feeStatus: s}),
														e._checkBalance();
												})
												.catch(function (e) {
													ye.error(e);
												});
									}
								},
							},
							{
								key: 'checkLimit',
								value: function () {
									var e = this.state,
										t = e.withdrawal_limit,
										n = e.amount,
										r = e.limitError,
										o = e.asset,
										s = e.claimedAmount,
										a = h.Z.get_asset_amount(t.amount - s, o);
									n > a && !r
										? this.setState({limitError: !0})
										: n <= a && r && this.setState({limitError: !1});
								},
							},
							{
								key: '_getAvailableAssets',
								value: function () {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: this.state,
										t = this.state.feeStatus;
									function n(e) {
										return void 0 === t[e] || (t[e] && t[e].hasPoolBalance);
									}
									function r(e) {
										return void 0 === t[e] || (t[e] && t[e].hasBalance);
									}
									var o = e.from_account,
										s = [],
										a = [];
									if (!o || !o.get('balances'))
										return {asset_types: s, fee_asset_types: a};
									var i = e.from_account.get('balances').toJS();
									for (var c in ((s = Object.keys(i).sort(h.Z.sortID)),
									(a = Object.keys(i).sort(h.Z.sortID)),
									i)) {
										var l = d.BQ.getObject(i[c]);
										l &&
											0 === l.get('balance') &&
											(s.splice(s.indexOf(c), 1),
											-1 !== a.indexOf(c) && a.splice(a.indexOf(c), 1));
									}
									return {
										asset_types: s,
										fee_asset_types: (a = a.filter(function (e) {
											return n(e) && r(e);
										})),
									};
								},
							},
							{
								key: '_updateFee',
								value: function () {
									var e = this,
										t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: this.state;
									if (this.props.isModalVisible) {
										var n = t.fee_asset_id,
											r = t.from_account,
											o = t.asset_id,
											s = this._getAvailableAssets(t),
											a = s.fee_asset_types;
										if ((1 === a.length && a[0] !== n && (n = a[0]), !r))
											return null;
										(0, F.rX)({
											accountID: r.get('id'),
											feeID: n,
											type: 'withdraw_permission_claim',
											options: ['price_per_kbyte'],
											data: {type: 'memo', content: t.memo},
										}).then(function (t) {
											var n = t.fee,
												s = t.hasBalance,
												a = t.hasPoolBalance;
											(0, F.G7)(r, n).then(function (t) {
												return t
													? e.setState({fee_asset_id: o}, e._updateFee)
													: e.setState({
															feeAmount: n,
															fee_asset_id: n.asset_id,
															hasBalance: s,
															hasPoolBalance: a,
															error: !s || !a,
													  });
											});
										});
									}
								},
							},
							{
								key: 'onFeeChanged',
								value: function (e) {
									var t = e.asset;
									this.setState(
										{feeAsset: t, fee_asset_id: t.get('id'), error: null},
										this._updateFee
									);
								},
							},
							{
								key: 'onMemoChanged',
								value: function (e) {
									this.setState({memo: e.target.value}, this._checkBalance);
								},
							},
							{
								key: 'isPayerBalanceWarning',
								value: function () {
									var e = this.state,
										t = e.withdrawal_limit,
										n = e.asset,
										r = e.to_account,
										o = e.payerBalanceWarning,
										s = e.claimedAmount,
										a = h.Z.get_asset_amount(t.amount, n),
										i = r.getIn(['balances', t.asset_id]);
									if (i) {
										var c = d.BQ.getObject(i).get('balance');
										c < a - s && !o
											? this.setState({payerBalanceWarning: !0})
											: c >= a - s &&
											  o &&
											  this.setState({payerBalanceWarning: !1});
									} else o || this.setState({payerBalanceWarning: !0});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.state,
										t = e.from_account,
										n = e.to_account,
										r = e.asset,
										o = (e.asset_id, e.feeAmount),
										a = e.amount,
										i = (e.error, e.memo),
										c = e.feeAsset,
										l = e.fee_asset_id,
										u = e.balanceError,
										p = e.limitError,
										h = e.payerBalanceWarning,
										m = e.withdrawal_limit,
										_ = e.current_period_expires_date,
										g = e.claimedAmount,
										v = this._getAvailableAssets(),
										w = v.asset_types,
										x = v.fee_asset_types,
										O = null,
										k = null,
										S = this.state.feeAmount.getAmount({real: !0});
									if (t && t.get('balances')) {
										var P = this.state.balanceError ? 'has-error' : '';
										if (
											(1 === w.length && (r = d.BQ.getAsset(w[0])),
											w.length > 0)
										) {
											var C = r ? r.get('id') : w[0],
												Z = c ? c.get('id') : l;
											this.isPayerBalanceWarning(),
												(O = (0, j.jsxs)('span', {
													children: [
														(0, j.jsx)(y(), {
															component: 'span',
															content: 'showcases.direct_debit.limit',
														}),
														':',
														' ',
														(0, j.jsx)('span', {
															className: p ? 'has-error' : '',
															style: {
																borderBottom: '#A09F9F 1px dotted',
																cursor: 'pointer',
															},
															onClick: this.setTotalLimit(m.amount),
															children: (0, j.jsx)(de, {
																amount: m.amount - g,
																assetId: m && m.asset_id,
															}),
														}),
														' ',
														h &&
															(0, j.jsx)(W.Z, {
																placement: 'top',
																title:
																	'You have not enough on your balance to pay the fee!',
																children: (0, j.jsx)(he.ELj, {css: Oe}),
															}),
													],
												})),
												Z == C &&
													this.state.balanceError &&
													(k = (0, j.jsx)('span', {
														children: (0, j.jsx)('span', {
															className: P,
															children: (0, j.jsx)(y(), {
																content: 'transfer.errors.insufficient',
															}),
														}),
													}));
										} else
											(O = (0, j.jsx)('span', {
												children: (0, j.jsx)('span', {
													className: P,
													children: (0, j.jsx)(y(), {
														content: 'transfer.errors.noFunds',
													}),
												}),
											})),
												(k = (0, j.jsx)('span', {
													children: (0, j.jsx)('span', {
														className: P,
														children: (0, j.jsx)(y(), {
															content: 'transfer.errors.noFunds',
														}),
													}),
												}));
									}
									var A = parseFloat(
											String.prototype.replace.call(a, /,/g, '')
										),
										B = A && !(0, D.Z)(A),
										R =
											!t ||
											!n ||
											!B ||
											!r ||
											u ||
											p ||
											h ||
											!_ ||
											t.get('id') == n.get('id');
									return (0, j.jsx)(Q.Z, {
										title: f().translate('showcases.direct_debit.claim_funds'),
										visible: this.props.isModalVisible,
										overlay: !0,
										onCancel: this.props.hideModal,
										footer: [
											this.state.errorMessage &&
												(0, j.jsx)('span', {
													className: 'red',
													style: {marginRight: '10px'},
													children: this.state.errorMessage,
												}),
											(0, j.jsx)(
												s.Z,
												{
													disabled: R,
													onClick: R ? null : this.onSubmit.bind(this),
													children: f().translate(
														'showcases.direct_debit.claim'
													),
												},
												'send'
											),
											(0, j.jsx)(
												s.Z,
												{
													onClick: this.props.hideModal,
													children: (0, j.jsx)(y(), {
														component: 'span',
														content: 'transfer.cancel',
													}),
												},
												'Cancel'
											),
										],
										children: (0, j.jsx)('div', {
											className: 'grid-block vertical no-overflow',
											children: (0, j.jsxs)('form', {
												noValidate: !0,
												children: [
													(0, j.jsx)('div', {
														children: (0, j.jsx)('div', {
															className: 'content-block',
															children: (0, j.jsx)(T.Z, {
																label:
																	'showcases.direct_debit.authorizing_account',
																accountName: t ? t.get('name') : '',
																account: t,
																size: 60,
																hideImage: !0,
																disabled: !0,
															}),
														}),
													}),
													(0, j.jsxs)('div', {
														className: 'content-block transfer-input',
														children: [
															(0, j.jsx)('label', {
																className: 'left-label',
																children: f().translate(
																	'showcases.direct_debit.current_period_expires'
																),
															}),
															(0, j.jsx)('input', {
																type: 'text',
																value: _
																	? f().localize(new Date(_), {
																			type: 'date',
																			format: 'full',
																	  })
																	: f().translate(
																			'showcases.direct_debit.first_period_not_started'
																	  ),
																disabled: !0,
																className: _ ? '' : 'error-area',
															}),
														],
													}),
													(0, j.jsx)('div', {
														className: 'content-block transfer-input',
														children: (0, j.jsx)(b.Z, {
															label:
																'showcases.direct_debit.amount_to_withdraw',
															amount: a,
															onChange: this.onAmountChanged,
															asset: m && m.asset_id,
															assets: m && [m.asset_id],
															display_balance: O,
															allowNaN: !0,
														}),
													}),
													(0, j.jsxs)('div', {
														className: 'content-block transfer-input',
														children: [
															i && i.length
																? (0, j.jsx)('label', {
																		className: 'right-label',
																		children: i.length,
																  })
																: null,
															(0, j.jsx)(W.Z, {
																placement: 'top',
																title: f().translate('tooltip.memo_tip'),
																children: (0, j.jsx)(y(), {
																	className: 'left-label tooltip',
																	component: 'label',
																	content: 'transfer.memo',
																}),
															}),
															(0, j.jsx)('textarea', {
																style: {marginBottom: 0},
																rows: '3',
																value: i,
																onChange: this.onMemoChanged.bind(this),
															}),
														],
													}),
													(0, j.jsx)('div', {
														className: 'content-block transfer-input',
														children: (0, j.jsx)('div', {
															className: 'no-margin no-padding',
															children: (0, j.jsx)('div', {
																id: 'txFeeSelector',
																className: 'small-12',
																children: (0, j.jsx)(b.Z, {
																	label: 'transfer.fee',
																	disabled: !0,
																	amount: S,
																	onChange: this.onFeeChanged.bind(this),
																	asset:
																		x.length && o
																			? o.asset_id
																			: 1 === x.length
																			? x[0]
																			: l || x[0],
																	assets: x,
																	display_balance: k,
																	error:
																		!1 === this.state.hasPoolBalance
																			? 'transfer.errors.insufficient'
																			: null,
																	scroll_length: 1,
																}),
															}),
														}),
													}),
												],
											}),
										}),
									});
								},
							},
						]),
						n && _e(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						i
					);
				})(r.Component);
			const Se = (0, L.$)(ke, {
				listenTo: function () {
					return [N.Z, z.Z];
				},
				getProps: function () {
					return {
						currentAccount: N.Z.getState().currentAccount,
						passwordAccount: N.Z.getState().passwordAccount,
						fee_asset_symbol: z.Z.getState().settings.get('fee_asset'),
					};
				},
			});
			var Pe = n(77335),
				Ce = n(85017),
				Ze = n(25108);
			function Ae(e) {
				return (
					(Ae =
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
					Ae(e)
				);
			}
			function Be(e, t) {
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
			function Re(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Be(Object(n), !0).forEach(function (t) {
								Ie(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Be(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Ne(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Te(e, t) {
				return (
					(Te =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Te(e, t)
				);
			}
			function Ee(e, t) {
				if (t && ('object' === Ae(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Me(e);
			}
			function Me(e) {
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
			var Fe = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Te(e, t);
				})(y, e);
				var t,
					n,
					r,
					p,
					m =
						((r = y),
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
								t = De(r);
							if (p) {
								var n = De(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Ee(this, e);
						});
				function y(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, y),
						Ie(Me((t = m.call(this, e))), 'showModal', function (e) {
							return function () {
								t.setState({isModalVisible: !0, operationData: e});
							};
						}),
						Ie(Me(t), 'hideModal', function () {
							t.setState({isModalVisible: !1, operation: null});
						}),
						Ie(Me(t), 'showClaimModal', function (e) {
							return function () {
								t.setState({isClaimModalVisible: !0, operationClaimData: e});
							};
						}),
						Ie(Me(t), 'hideClaimModal', function () {
							t.setState({isClaimModalVisible: !1});
						}),
						Ie(Me(t), '_onFilter', function (e) {
							e.preventDefault(),
								t.setState({filterString: e.target.value.toLowerCase()});
						}),
						Ie(Me(t), 'handleDeleteProposal', function (e) {
							Ze.log('delete permissin'),
								q.Z.deleteWithdrawPermission(
									e.id,
									e.withdraw_from_account,
									e.authorized_account
								)
									.then(function () {})
									.catch(function (e) {
										t.setState({errorMessage: e.toString()}), Ze.error(e);
									});
						}),
						(t.state = {
							isModalVisible: !1,
							isClaimModalVisible: !1,
							filterString: '',
							operationData: '',
							operationClaimData: '',
							withdraw_permission_list: [],
						}),
						t
					);
				}
				return (
					(t = y),
					(n = [
						{
							key: '_update',
							value: function () {
								var e = this,
									t = this.props.currentAccount;
								(0, Ce.u)(t) &&
									Promise.all([
										o.yX
											.instance()
											.db_api()
											.exec('get_withdraw_permissions_by_giver', [
												t.get('id'),
												'1.12.0',
												100,
											]),
										o.yX
											.instance()
											.db_api()
											.exec('get_withdraw_permissions_by_recipient', [
												t.get('id'),
												'1.12.0',
												100,
											]),
									]).then(function (t) {
										var n = [];
										(n = (n = n.concat(t[0])).concat(t[1])).forEach(function (
											e
										) {
											try {
												d.BQ.getAccount(e.authorized_account, !1),
													d.BQ.getAccount(e.withdraw_from_account, !1);
											} catch (e) {}
										}),
											e.setState({withdraw_permission_list: n});
									});
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this._update();
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function () {
								this._update();
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.state,
									n = t.isModalVisible,
									r = t.isClaimModalVisible,
									o = t.withdraw_permission_list,
									p = t.operationData,
									m = t.operationClaimData,
									y = t.filterString,
									b = this.props.currentAccount,
									_ = null;
								o.length &&
									(_ = o.map(function (e) {
										var t = d.BQ.getObject(e.withdrawal_limit.asset_id, !1),
											n = d.BQ.getAccountName(e.authorized_account),
											r = d.BQ.getAccountName(e.withdraw_from_account),
											o = new Date(e.period_start_time + 'Z').getTime(),
											s = new Date().getTime() - o,
											a = '',
											i = 1e3 * e.withdrawal_period_sec;
										return (
											s < 0
												? Ze.log('first period is not started')
												: (a = o + i * Math.ceil(s / i)),
											{
												key: e.id,
												id: e.id,
												type:
													e.authorized_account == b.get('id')
														? 'payee'
														: 'payer',
												authorized: n,
												from: r,
												to: n,
												limit: (0, j.jsxs)('span', {
													children: [
														h.Z.get_asset_amount(e.withdrawal_limit.amount, t) +
															' ',
														(0, j.jsx)(Pe.Z, {
															asset: e.withdrawal_limit.asset_id,
														}),
													],
												}),
												until: a
													? f().localize(new Date(a), {
															type: 'date',
															format: 'full',
													  })
													: f().translate(
															'showcases.direct_debit.first_period_not_started'
													  ),
												expires: f().localize(new Date(e.expiration + 'Z'), {
													type: 'date',
													format: 'full',
												}),
												claimed:
													0 == e.claimed_this_period
														? '-'
														: (0, j.jsxs)('span', {
																children: [
																	h.Z.get_asset_amount(
																		e.claimed_this_period,
																		t
																	) + ' ',
																	(0, j.jsx)(Pe.Z, {
																		asset: e.withdrawal_limit.asset_id,
																	}),
																],
														  }),
												rawData: Re({}, e),
											}
										);
									})).length &&
									_.filter(function (e) {
										return e.authorized && -1 !== e.authorized.indexOf(y);
									});
								var g = [
									{
										title: '#',
										dataIndex: 'id',
										key: 'id',
										sorter: function (e, t) {
											return e.id > t.id ? 1 : e.id < t.id ? -1 : 0;
										},
									},
									{
										title: 'From',
										dataIndex: 'from',
										key: 'from',
										sorter: function (e, t) {
											return e.from > t.from ? 1 : e.from < t.from ? -1 : 0;
										},
									},
									{
										title: 'To',
										dataIndex: 'to',
										key: 'to',
										sorter: function (e, t) {
											return e.to > t.to ? 1 : e.to < t.to ? -1 : 0;
										},
									},
									{
										title: f().translate(
											'showcases.direct_debit.current_period_expires'
										),
										dataIndex: 'until',
										key: 'until',
										sorter: function (e, t) {
											return e.until > t.until ? 1 : e.until < t.until ? -1 : 0;
										},
									},
									{
										title: 'Limit',
										dataIndex: 'limit',
										key: 'limit',
										sorter: function (e, t) {
											return (
												e.rawData.withdrawal_limit.amount -
												t.rawData.withdrawal_limit.amount
											);
										},
									},
									{
										title: 'Claimed',
										dataIndex: 'claimed',
										key: 'claimed',
										sorter: function (e, t) {
											var n = e.rawData.claimed_this_period;
											return e.rawData.claimed_this_period - n;
										},
									},
									{
										title: f().translate('showcases.direct_debit.expires'),
										dataIndex: 'expires',
										key: 'expires',
										sorter: function (e, t) {
											return e.expires > t.expires
												? 1
												: e.expires < t.expires
												? -1
												: 0;
										},
									},
									{
										title: 'Actions',
										dataIndex: 'action',
										key: 'action',
										render: function (t, n) {
											return n.type
												? 'payer' === n.type
													? null
													: (0, j.jsx)('span', {
															onClick: e.showClaimModal({
																type: 'claim',
																payload: n.rawData,
															}),
															children: (0, j.jsx)(s.Z, {
																children: f().translate(
																	'showcases.direct_debit.claim'
																),
															}),
													  })
												: null;
										},
									},
								];
								return (0, j.jsx)('div', {
									className: 'direct-debit-view',
									children: (0, j.jsxs)(a.Z, {
										className: 'direct-debit-table-card',
										children: [
											(0, j.jsx)(i.Z, {
												children: (0, j.jsxs)(c.Z, {
													span: 24,
													style: {padding: '10px'},
													children: [
														(0, j.jsxs)('div', {
															style: {marginBottom: '30px'},
															children: [
																(0, j.jsx)(l.Z, {
																	className: 'direct-debit-table__filter-input',
																	placeholder: f().translate(
																		'explorer.witnesses.filter_by_name'
																	),
																	onChange: this._onFilter,
																	style: {width: '200px', marginRight: '30px'},
																}),
																(0, j.jsx)(s.Z, {
																	onClick: this.showModal({
																		type: 'create',
																		payload: null,
																	}),
																	style: {marginRight: '30px'},
																	children: f().translate(
																		'showcases.direct_debit.create_new_mandate'
																	),
																}),
																!!this.state.errorMessage &&
																	(0, j.jsx)('span', {
																		className: 'red',
																		children: this.state.errorMessage,
																	}),
															],
														}),
														(0, j.jsx)(u.Z, {
															columns: g,
															dataSource: _,
															pagination: !1,
															className: 'direct-debit-table',
														}),
													],
												}),
											}),
											(0, j.jsx)(oe, {
												isModalVisible: n,
												hideModal: this.hideModal,
												operation: p,
											}),
											(0, j.jsx)(Se, {
												isModalVisible: r,
												hideModal: this.hideClaimModal,
												operation: m,
											}),
										],
									}),
								});
							},
						},
					]) && Ne(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					y
				);
			})(r.Component);
			const Ve = (Fe = (0, Ce.h)(Fe));
		},
		46452: (e, t, n) => {
			n.r(t), n.d(t, {default: () => Se});
			var r = n(67294),
				o = n(61580),
				s = n(71577),
				a = n(39144),
				i = n(71230),
				c = n(15746),
				l = n(55019),
				u = n(22949),
				p = n(112),
				f = n.n(p),
				d = n(52233),
				h = n(40840),
				m = n(58074),
				y = n.n(m),
				b = n(43957),
				_ = n(94184),
				g = n.n(_),
				v = n(10033),
				w = n(72777),
				j = n(86035),
				x = n(99111),
				O = n(69864),
				k = n(70534),
				S = n(83370),
				P = n(62979),
				C = n(11230),
				Z = n(96520),
				A = n(47933),
				B = n(22712),
				R = n(42239),
				N = n(8174),
				T = n(68588),
				E = n(30381),
				M = n.n(E),
				D = n(51614),
				I = (n(18825), n(350)),
				F = n(37065),
				V = n(25108),
				L = n(23085).Buffer;
			function z(e, t, n, r, o, s, a) {
				try {
					var i = e[s](a),
						c = i.value;
				} catch (e) {
					return void n(e);
				}
				i.done ? t(c) : Promise.resolve(c).then(r, o);
			}
			function Q(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			var W = function (e, t) {
					var n = null;
					switch (e) {
						case 'sha256':
							n = d.vp.sha256(t);
							break;
						case 'ripemd160':
							n = d.vp.ripemd160(t);
							break;
						case 'sha1':
							throw new Error(
								'sha1 is not considered a secure hashing algorithm, plaase use sha256'
							);
						default:
							throw new Error(
								'Wrong cipher name provided when creating htlc op'
							);
					}
					return n;
				},
				U = (function () {
					function e() {
						!(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, e);
					}
					var t, n, r, o;
					return (
						(t = e),
						(n = [
							{
								key: 'create',
								value: function (e) {
									var t = e.from_account_id,
										n = e.to_account_id,
										r = e.asset_id,
										o = e.amount,
										s = e.lock_time,
										a = e.preimage_cipher,
										i = e.preimage,
										c = void 0 === i ? null : i,
										l = e.preimage_hash,
										u = void 0 === l ? null : l,
										p = e.preimage_size,
										f = void 0 === p ? null : p,
										d = I.Z.new_transaction(),
										h = (function (e) {
											var t = null;
											switch (e) {
												case 'sha256':
													t = 2;
													break;
												case 'ripemd160':
													t = 0;
													break;
												case 'sha1':
													throw new Error(
														'sha1 is not considered a secure hashing algorithm, plaase use sha256'
													);
												default:
													throw new Error(
														'Wrong cipher name provided when creating htlc op'
													);
											}
											return t;
										})(a);
									if ((c && !u && (u = W(a, c)), !f)) {
										if (!c)
											throw Error('Preimage must be given if size is empty');
										f = c.length;
									}
									return (
										d.add_type_operation('htlc_create', {
											from: t,
											to: n,
											fee: {amount: 0, asset_id: '1.3.0'},
											amount: {amount: o, asset_id: r},
											preimage_hash: [h, u],
											preimage_size: f,
											claim_period_seconds: s,
										}),
										function (e) {
											return F.Z.process_transaction(d, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													V.log(
														'[HtlcActions.js:69] ----- htlc create error -----\x3e',
														t
													),
														e(!1);
												});
										}
									);
								},
							},
							{
								key: 'redeem',
								value: function (e) {
									var t = e.htlc_id,
										n = e.user_id,
										r = e.preimage,
										o = I.Z.new_transaction();
									return (
										o.add_type_operation('htlc_redeem', {
											preimage: new L(r).toString('hex'),
											fee: {amount: 0, asset_id: '1.3.0'},
											htlc_id: t,
											redeemer: n,
										}),
										function (e) {
											return F.Z.process_transaction(o, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													V.log(
														'[HtlcActions.js:98] ----- htlc redeem error -----\x3e',
														t
													),
														e(!1);
												});
										}
									);
								},
							},
							{
								key: 'extend',
								value: function (e) {
									var t = e.htlc_id,
										n = e.user_id,
										r = e.seconds_to_add,
										o = I.Z.new_transaction();
									return (
										o.add_type_operation('htlc_extend', {
											fee: {amount: 0, asset_id: '1.3.0'},
											htlc_id: t,
											update_issuer: n,
											seconds_to_add: r,
										}),
										function (e) {
											return F.Z.process_transaction(o, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													V.log(
														'[HtlcActions.js:127] ----- htlc extend error -----\x3e',
														t
													),
														e(!1);
												});
										}
									);
								},
							},
							{
								key: 'calculateHash',
								value: function (e, t) {
									var n = W(t, e),
										r = n.length;
									return {hash: new L(n).toString('hex'), size: r};
								},
							},
							{
								key: 'getHTLCs',
								value:
									((r = regeneratorRuntime.mark(function e(t) {
										var n, r, o, s, a;
										return regeneratorRuntime.wrap(function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														(n = []), (r = 1);
													case 2:
														if (!(r < 300)) {
															e.next = 13;
															break;
														}
														for (o = [], s = r; s < r + 10; s++)
															o.push('1.16.' + s);
														return (
															(a = {}),
															(e.next = 8),
															(0, d.jB)(d.BQ.getObject, o, void 0, a)
														);
													case 8:
														e.sent.forEach(function (e) {
															e &&
																(((e = e.toJS()).transfer.to != t &&
																	e.transfer.from != t) ||
																	n.push(e));
														});
													case 10:
														(r += 10), (e.next = 2);
														break;
													case 13:
														return e.abrupt('return', n);
													case 14:
													case 'end':
														return e.stop();
												}
										}, e);
									})),
									(o = function () {
										var e = this,
											t = arguments;
										return new Promise(function (n, o) {
											var s = r.apply(e, t);
											function a(e) {
												z(s, n, o, a, i, 'next', e);
											}
											function i(e) {
												z(s, n, o, a, i, 'throw', e);
											}
											a(void 0);
										});
									}),
									function (e) {
										return o.apply(this, arguments);
									}),
							},
						]),
						n && Q(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e
					);
				})();
			const q = D.Z.createActions(U);
			var H = n(8564),
				K = n(45697),
				J = n.n(K),
				G = n(85017),
				$ = n(35944),
				X = n(25108);
			function Y(e) {
				return (
					(Y =
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
					Y(e)
				);
			}
			function ee(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function te(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ne(e, t, n) {
				return (
					t && te(e.prototype, t),
					n && te(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function re(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && oe(e, t);
			}
			function oe(e, t) {
				return (
					(oe =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					oe(e, t)
				);
			}
			function se(e) {
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
						r = ce(e);
					if (t) {
						var o = ce(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return ae(this, n);
				};
			}
			function ae(e, t) {
				if (t && ('object' === Y(t) || 'function' == typeof t)) return t;
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
			function le(e, t, n) {
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
			var ue = (function (e) {
				re(n, e);
				var t = se(n);
				function n(e) {
					var r;
					return (
						ee(this, n),
						((r = t.call(this, e)).state = r.getInitialState()),
						(r.hasRandomHash = !1),
						r
					);
				}
				return (
					ne(n, [
						{
							key: 'getInitialState',
							value: function () {
								return {
									stage: 1,
									preimage_hash_calculated: null,
									ciphers: ['sha256', 'ripemd160'],
								};
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this.props.preimage_hash ||
									this.hasRandomHash ||
									this.generateRandom({target: {}});
							},
						},
						{
							key: 'componentDidUpdate',
							value: function (e, t) {
								e.preimage_hash === this.props.preimage_hash ||
									this.props.preimage_hash ||
									(this.hasRandomHash = !1),
									this.props.preimage_hash ||
										this.hasRandomHash ||
										this.generateRandom({target: {}});
							},
						},
						{
							key: 'onClick',
							value: function (e) {
								var t = this,
									n = !1;
								this.state.stage !== e.target.value &&
									1 == e.target.value &&
									(n = !0),
									this.setState({stage: e.target.value}, function () {
										return n ? t.generateRandom() : null;
									});
							},
						},
						{
							key: 'onSizeChanged',
							value: function (e) {
								this.props.onAction({
									preimage_size: e.target.value
										? parseInt(e.target.value)
										: null,
								});
							},
						},
						{
							key: 'onHashChanged',
							value: function (e) {
								this.props.onAction({preimage_hash: e.target.value});
							},
						},
						{
							key: 'onInputChanged',
							value: function (e) {
								var t = this.props,
									n = t.preimage,
									r = t.preimage_cipher;
								if (
									(r || (r = 'sha256'),
									e.target
										? ((n = e.target.value), (this.hashingInProgress = !1))
										: (r = e),
									2 == this.state.stage)
								)
									this.props.onAction({preimage_cipher: r});
								else {
									var o = q.calculateHash(n, r).hash;
									'create' !== this.props.type
										? (this.props.onAction({
												preimage: n,
												preimage_cipher: r,
												preimage_size: n.length,
										  }),
										  this.setState({preimage_hash_calculated: o}))
										: this.props.onAction({
												preimage: n,
												preimage_cipher: r,
												preimage_hash: o,
												preimage_size: n.length,
										  });
								}
							},
						},
						{
							key: 'generateRandom',
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: {target: {}};
								(this.hasRandomHash = !0),
									(e.target.value = d.Jy.get_random_key()
										.toWif()
										.substr(10, 30)),
									this.onInputChanged(e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = (0, $.jsxs)(r.Fragment, {
										children: [
											f().translate(this.props.label),
											'create' == this.props.type &&
												(0, $.jsxs)(A.ZP.Group, {
													value: this.state.stage,
													onChange: this.onClick.bind(this),
													style: {marginBottom: '7px', marginLeft: '24px'},
													children: [
														(0, $.jsx)(A.ZP, {
															value: 1,
															children: (0, $.jsx)(y(), {
																content: 'showcases.htlc.first_stage',
															}),
														}),
														(0, $.jsx)(A.ZP, {
															value: 2,
															children: (0, $.jsx)(y(), {
																content: 'showcases.htlc.second_stage',
															}),
														}),
														(0, $.jsx)(A.ZP, {
															value: 3,
															children: (0, $.jsx)(y(), {
																content: 'showcases.htlc.custom',
															}),
														}),
													],
												}),
										],
									}),
									t =
										'create' !== this.props.type &&
										null !== this.state.preimage_hash_calculated
											? this.state.preimage_hash_calculated ==
											  this.props.preimage_hash
											: null;
								return (0, $.jsxs)(B.Z.Item, {
									label: e,
									children: [
										(0, $.jsx)('span', {
											children: f().translate(
												'showcases.htlc.preimage_has_been_created'
											),
										}),
										(0, $.jsxs)(l.Z.Group, {
											className: 'content-block transfer-input preimage-row',
											children: [
												(0, $.jsx)(o.Z, {
													title: f().translate(
														'create' !== this.props.type
															? 'showcases.htlc.tooltip.enter_preimage'
															: 'showcases.htlc.tooltip.preimage_random'
													),
													mouseEnterDelay: 0.5,
													children: (0, $.jsx)(l.Z, {
														style: {
															width: '60%',
															color: null == t ? void 0 : t ? 'green' : 'red',
														},
														name: 'preimage',
														id: 'preimage',
														type: 'text',
														onChange: this.onInputChanged.bind(this),
														value:
															2 == this.state.stage ? '' : this.props.preimage,
														placeholder: f().translate(
															this.props.hash
																? 'showcases.htlc.enter_secret_preimage'
																: 'showcases.htlc.preimage'
														),
														disabled:
															'create' === this.props.type &&
															(1 == this.state.stage || 2 == this.state.stage),
													}),
												}),
												(0, $.jsx)(R.Z, {
													optionLabelProp: 'value',
													style: {width: '19.5%'},
													onChange: this.onInputChanged.bind(this),
													value: this.props.preimage_cipher,
													children: this.state.ciphers.map(function (e) {
														return (0,
														$.jsx)(R.Z.Option, {value: e, children: e}, e);
													}),
												}),
												(0, $.jsx)(o.Z, {
													title: f().translate(
														'showcases.htlc.tooltip.new_random'
													),
													mouseEnterDelay: 0.5,
													children: (0, $.jsx)(s.Z, {
														type: 'primary',
														icon: 'deployment-unit',
														style: {verticalAlign: 'top'},
														onClick: this.generateRandom.bind(this),
													}),
												}),
												(0, $.jsx)('div', {
													style: {float: 'right'},
													children: (0, $.jsx)(P.Z, {
														dataPlace: 'top',
														text:
															'preimage: ' +
															this.props.preimage +
															' hash type: ' +
															this.props.preimage_cipher,
													}),
												}),
											],
										}),
										(0, $.jsxs)(l.Z.Group, {
											className: 'content-block transfer-input preimage-row',
											children: [
												(0, $.jsx)(o.Z, {
													title: f().translate(
														'showcases.htlc.tooltip.preimage_hash'
													),
													mouseEnterDelay: 0.5,
													children: (0, $.jsx)(l.Z, {
														style: {width: '78%'},
														name: 'hash',
														id: 'hash',
														type: 'text',
														onChange: this.onHashChanged.bind(this),
														value: this.props.preimage_hash || '',
														placeholder: f().translate('showcases.htlc.hash'),
														disabled: 1 == this.state.stage,
													}),
												}),
												(0, $.jsx)(o.Z, {
													title: f().translate(
														'showcases.htlc.tooltip.preimage_size'
													),
													mouseEnterDelay: 0.5,
													children: (0, $.jsx)(l.Z, {
														style: {width: '53px', marginRight: '0.2rem'},
														name: 'size',
														id: 'size',
														type: 'text',
														onChange: this.onSizeChanged.bind(this),
														value: this.props.preimage_size || '',
														placeholder: f().translate('showcases.htlc.size'),
														disabled: 1 == this.state.stage,
													}),
												}),
												(0, $.jsx)('div', {
													style: {float: 'right'},
													children: (0, $.jsx)(P.Z, {
														dataPlace: 'top',
														text:
															'hash: ' +
															this.props.preimage_hash +
															' preimage size: ' +
															this.props.preimage_size,
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
			})(r.Component);
			le(ue, 'propTypes', {
				preimage_hash: J().string,
				preimage_size: J().number,
				preimage: J().string,
				preimage_cipher: J().string,
			});
			var pe = (function (e) {
				re(n, e);
				var t = se(n);
				function n(e) {
					var r;
					return (
						ee(this, n),
						le(ie((r = t.call(this, e))), 'onSubmit', function (e) {
							e.preventDefault();
							var t = r.state,
								n = t.from_account,
								o = t.to_account,
								s = t.amount,
								a = t.asset,
								i = t.asset_id,
								c = t.preimage,
								l = t.preimage_size,
								u = t.preimage_hash,
								p = t.preimage_cipher,
								f = t.claim_period,
								d = r.props.operation.type;
							'create' === d
								? q
										.create({
											from_account_id: n.get('id'),
											to_account_id: o.get('id'),
											asset_id: i,
											amount: h.Z.convert_typed_to_satoshi(s, a),
											lock_time: f,
											preimage: c,
											preimage_size: l,
											preimage_hash: u,
											preimage_cipher: p,
										})
										.then(function (e) {
											r.props.hideModal();
										})
										.catch(function (e) {
											X.error(e);
										})
								: 'redeem' === d
								? q
										.redeem({
											htlc_id: r.props.operation.payload.id,
											user_id: o.get('id'),
											preimage: c,
										})
										.then(function (e) {
											r.props.hideModal();
										})
										.catch(function (e) {
											X.error(e);
										})
								: 'extend' === d &&
								  q
										.extend({
											htlc_id: r.props.operation.payload.id,
											user_id: n.get('id'),
											seconds_to_add: f,
										})
										.then(function (e) {
											r.props.hideModal();
										})
										.catch(function (e) {
											X.error(e);
										});
						}),
						le(ie(r), 'onToAccountChanged', function (e) {
							r.setState({to_account: e, error: null});
						}),
						le(ie(r), 'onAmountChanged', function (e) {
							var t = e.amount,
								n = e.asset;
							n &&
								('object' !== Y(n) && (n = d.BQ.getAsset(n)),
								r.setState(
									{
										amount: t,
										asset: n,
										asset_id: n.get('id'),
										error: null,
										maxAmount: !1,
									},
									r._checkBalance
								));
						}),
						le(ie(r), 'toChanged', function (e) {
							r.setState({to_name: e, error: null});
						}),
						le(ie(r), 'onExpirationDateChanged', function (e) {
							if (e) {
								var t = r.state.period_start_time,
									n = e.valueOf(),
									o = t.valueOf(),
									s = Math.floor((n - o) / 1e3);
								r.setState({claim_period: s, period: null, expirationDate: e});
							} else r.setState({claim_period: 0, period: null, expirationDate: null});
						}),
						le(ie(r), 'setPeriod', function (e) {
							var t = M()().add(e, 'day'),
								n = 'one_day',
								o = 60 * e * 60 * 24;
							switch (e) {
								case 1:
									n = 'one_day';
									break;
								case 2:
									n = 'two_days';
									break;
								case 7:
									n = 'one_week';
							}
							r.setState({claim_period: o, period: n, expirationDate: t});
						}),
						(r.state = r.getInitialState(e)),
						(r.onTrxIncluded = r.onTrxIncluded.bind(ie(r))),
						(r._updateFee = (0, x.Z)(r._updateFee.bind(ie(r)), 250)),
						(r._checkFeeStatus = r._checkFeeStatus.bind(ie(r))),
						(r._checkBalance = r._checkBalance.bind(ie(r))),
						r
					);
				}
				return (
					ne(n, [
						{
							key: 'getInitialState',
							value: function () {
								var e = M()().add('seconds', 120);
								return {
									from_name: '',
									to_name: '',
									from_account: null,
									to_account: null,
									amount: '',
									asset_id: null,
									asset: null,
									error: null,
									feeAsset: null,
									fee_asset_id:
										d.BQ.assets_by_symbol.get(this.props.fee_asset_symbol) ||
										'1.3.0',
									feeAmount: new j.xR({amount: 0}),
									feeStatus: {},
									maxAmount: !1,
									num_of_periods: '',
									period_start_time: e,
									htlcId: '',
									balanceError: !1,
									preimage: null,
									preimage_cipher: null,
									preimage_hash: null,
									preimage_size: null,
									claim_period: 86400,
									period: 'one_day',
									expirationDate: M()().add('seconds', 180).add(1, 'day'),
								};
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t, n) {
								return !(e.fromAccount && !(0, G.u)(e.fromAccount));
							},
						},
						{
							key: '_syncOperation',
							value: function (e) {
								if (e && e.payload && 'create' !== e.type) {
									var t = e.payload.transfer.to,
										n = e.payload.transfer.from,
										r = {
											amount: e.payload.transfer.amount,
											asset_id: e.payload.transfer.asset_id,
										},
										o = new Date(e.payload.conditions.time_lock.expiration),
										s = d.BQ.getAccount(t),
										a = d.BQ.getAccount(n);
									if (s && a && s.get && a.get) {
										var i = d.BQ.getAsset(r.asset_id, !1);
										this.setState({
											to_account: s,
											to_name: s.get('name'),
											from_account: a,
											from_name: a.get('name'),
											asset: i,
											amount: h.Z.convert_satoshi_to_typed(r.amount, i),
											asset_id: r.asset_id,
											period_start_time: o,
											htlcId: e.payload.id,
											preimage_hash:
												e.payload.conditions.hash_lock.preimage_hash[1],
											preimage_size:
												e.payload.conditions.hash_lock.preimage_hash[0],
											expirationDate: M()(
												new Date(
													h.Z.makeISODateString(
														e.payload.conditions.time_lock.expiration
													)
												)
											),
											period: null,
										});
									} else
										this.setState({
											htlcId: e.payload.id,
											preimage_hash:
												e.payload.conditions.hash_lock.preimage_hash[1],
											preimage_size:
												e.payload.conditions.hash_lock.preimage_hash[0],
											expirationDate: M()(
												new Date(
													h.Z.makeISODateString(
														e.payload.conditions.time_lock.expiration
													)
												)
											),
											period: null,
										});
								} else
									this.setState({
										htlcId: null,
										preimage_hash: null,
										preimage_size: null,
									});
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this._syncOperation(this.props.operation);
							},
						},
						{
							key: 'componentDidUpdate',
							value: function (e, t) {
								var n = this,
									r = this.props.operation;
								(this.props.fromAccount === e.fromAccount &&
									null != this.state.from_account) ||
									this.setState(
										{
											from_account: this.props.fromAccount,
											from_name: this.props.fromAccount.get('name'),
										},
										function () {
											n._updateFee(), n._checkFeeStatus(n.state);
										}
									),
									e.operation !== this.props.operation &&
										this._syncOperation(r);
							},
						},
						{
							key: '_checkBalance',
							value: function () {
								var e = this.state,
									t = e.feeAmount,
									n = e.amount,
									r = e.from_account,
									o = e.asset;
								if (o && r) {
									this._updateFee();
									var s = r.getIn(['balances', o.get('id')]),
										a = r.getIn(['balances', t.asset_id]);
									if (o && r) {
										if (!s) return this.setState({balanceError: !0});
										var i = d.BQ.getObject(s),
											c = a ? d.BQ.getObject(a) : null;
										if (
											((c && 0 !== c.get('balance')) ||
												this.setState(
													{fee_asset_id: this.state.fee_asset_id},
													this._updateFee
												),
											i && t)
										) {
											if (!n) return this.setState({balanceError: !1});
											var l = (0, k.cr)(n, o, t, i);
											null !== l && this.setState({balanceError: !l});
										}
									}
								}
							},
						},
						{
							key: '_checkFeeStatus',
							value: function () {
								var e = this,
									t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.state,
									n = t.from_account,
									r = this.props,
									o = r.isModalVisible,
									s = r.operation;
								if (n && o) {
									var a = Object.keys(n.get('balances').toJS()).sort(
											h.Z.sortID
										),
										i = {},
										c = [];
									a.forEach(function (e) {
										c.push(
											(0, k.rX)({
												accountID: n.get('id'),
												feeID: e,
												type:
													s && 'create' === s.type
														? 'htlc_create'
														: s && 'redeem' === s.type
														? 'htlc_redeem'
														: 'htlc_extend',
												data: {type: 'memo', content: null},
											})
										);
									}),
										Promise.all(c)
											.then(function (t) {
												a.forEach(function (e, n) {
													i[e] = t[n];
												}),
													h.Z.are_equal_shallow(e.state.feeStatus, i) ||
														e.setState({feeStatus: i}),
													e._checkBalance();
											})
											.catch(function (e) {
												X.error(e);
											});
								}
							},
						},
						{
							key: '_setTotal',
							value: function (e, t) {
								var n = this.state.feeAmount,
									r = d.BQ.getObject(t),
									o = d.BQ.getObject(e),
									s = new j.xR({
										amount: r.get('balance'),
										asset_id: o.get('id'),
										precision: o.get('precision'),
									});
								r &&
									(n.asset_id === s.asset_id && s.minus(n),
									this.setState(
										{maxAmount: !0, amount: s.getAmount({real: !0})},
										this._checkBalance
									));
							},
						},
						{
							key: '_getAvailableAssets',
							value: function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.state,
									t = this.state.feeStatus;
								function n(e) {
									return void 0 === t[e] || (t[e] && t[e].hasPoolBalance);
								}
								function r(e) {
									return void 0 === t[e] || (t[e] && t[e].hasBalance);
								}
								var o = e.from_account,
									s = [],
									a = [];
								if (!o || !o.get('balances'))
									return {asset_types: s, fee_asset_types: a};
								var i = e.from_account.get('balances').toJS();
								for (var c in ((s = Object.keys(i).sort(h.Z.sortID)),
								(a = Object.keys(i).sort(h.Z.sortID)),
								i)) {
									var l = d.BQ.getObject(i[c]);
									l &&
										0 === l.get('balance') &&
										(s.splice(s.indexOf(c), 1),
										-1 !== a.indexOf(c) && a.splice(a.indexOf(c), 1));
								}
								return {
									asset_types: s,
									fee_asset_types: (a = a.filter(function (e) {
										return n(e) && r(e);
									})),
								};
							},
						},
						{
							key: '_updateFee',
							value: function () {
								var e = this,
									t =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.state;
								if (this.props.isModalVisible) {
									var n = this.props.operation,
										r = t.fee_asset_id,
										o = t.from_account,
										s = t.asset_id,
										a = this._getAvailableAssets(t),
										i = a.fee_asset_types;
									if ((1 === i.length && i[0] !== r && (r = i[0]), !o))
										return null;
									(0, k.rX)({
										accountID: o.get('id'),
										feeID: r,
										type:
											n && 'create' === n.type
												? 'htlc_create'
												: n && 'redeem' === n.type
												? 'htlc_redeem'
												: 'htlc_extend',
										data: {type: 'memo', content: null},
									}).then(function (t) {
										var n = t.fee,
											r = t.hasBalance,
											a = t.hasPoolBalance;
										(0, k.G7)(o, n).then(function (t) {
											return t
												? e.setState({fee_asset_id: s}, e._updateFee)
												: e.setState({
														feeAmount: n,
														fee_asset_id: n.asset_id,
														hasBalance: r,
														hasPoolBalance: a,
														error: !r || !a,
												  });
										});
									});
								}
							},
						},
						{
							key: 'onFeeChanged',
							value: function (e) {
								var t = e.asset;
								'object' !== Y(t) && (t = d.BQ.getAsset(t)),
									this.setState(
										{feeAsset: t, fee_asset_id: t.get('id'), error: null},
										this._updateFee
									);
							},
						},
						{
							key: 'onTrxIncluded',
							value: function (e) {
								((e.included && e.broadcasted_transaction) || e.closed) &&
									(w.Z.unlisten(this.onTrxIncluded), w.Z.reset());
							},
						},
						{
							key: 'onDatepickerRef',
							value: function (e) {
								e && e.picker.input && (e.picker.input.readOnly = !1);
							},
						},
						{
							key: 'onPreimageChanged',
							value: function (e) {
								var t = e.preimage,
									n = e.preimage_cipher,
									r = e.preimage_hash,
									o = e.preimage_size,
									s = {};
								void 0 !== t && (s.preimage = t),
									void 0 !== n && (s.preimage_cipher = n),
									void 0 !== r && (s.preimage_hash = r),
									void 0 !== o && (s.preimage_size = o),
									this.setState(s);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.state,
									n = t.from_account,
									r = t.to_account,
									o = t.asset,
									a = t.asset_id,
									i = t.feeAmount,
									c = t.amount,
									u = t.from_name,
									p = t.to_name,
									h = t.feeAsset,
									m = t.fee_asset_id,
									_ = t.balanceError,
									w = t.preimage,
									j = t.preimage_cipher,
									x = t.claim_period,
									k = t.preimage_hash,
									P = t.preimage_size,
									C = t.period_start_time,
									Z = t.expirationDate,
									A = this.props.operation,
									R = A && 'extend' === A.type,
									E = A && 'redeem' === A.type,
									M = this._getAvailableAssets(),
									D = M.asset_types,
									I = M.fee_asset_types,
									F = null,
									V = null,
									L = this.state.feeAmount.getAmount({real: !0});
								if (n && n.get('balances')) {
									var z = n.get('balances').toJS(),
										Q = this.state.balanceError ? 'has-error' : '';
									if (
										(1 === D.length && (o = d.BQ.getAsset(D[0])), D.length > 0)
									) {
										var W = o ? o.get('id') : D[0],
											U = h ? h.get('id') : m;
										(F = (0, $.jsxs)('span', {
											children: [
												(0, $.jsx)(y(), {
													component: 'span',
													content: 'transfer.available',
												}),
												':',
												' ',
												(0, $.jsx)('span', {
													className: Q,
													style: {
														borderBottom: '#A09F9F 1px dotted',
														cursor: 'pointer',
													},
													onClick: this._setTotal.bind(this, W, z[W], L, U),
													children: (0, $.jsx)(S.Z, {balance: z[W]}),
												}),
											],
										})),
											U == W &&
												this.state.balanceError &&
												(V = (0, $.jsx)('span', {
													children: (0, $.jsx)('span', {
														className: Q,
														children: (0, $.jsx)(y(), {
															content: 'transfer.errors.insufficient',
														}),
													}),
												}));
									} else
										(F = (0, $.jsx)('span', {
											children: (0, $.jsx)('span', {
												className: Q,
												children: (0, $.jsx)(y(), {
													content: 'transfer.errors.noFunds',
												}),
											}),
										})),
											(V = (0, $.jsx)('span', {
												children: (0, $.jsx)('span', {
													className: Q,
													children: (0, $.jsx)(y(), {
														content: 'transfer.errors.noFunds',
													}),
												}),
											}));
								}
								var q = parseFloat(String.prototype.replace.call(c, /,/g, '')),
									H = q && !(0, O.Z)(q),
									K =
										!n ||
										!r ||
										!H ||
										!o ||
										_ ||
										n.get('id') == r.get('id') ||
										!((j && w) || k) ||
										!x,
									J =
										A && 'create' === A.type
											? f().translate('showcases.htlc.create_htlc')
											: R
											? f().translate('showcases.htlc.extend_htlc')
											: f().translate('showcases.htlc.redeem_htlc'),
									G =
										A && 'create' === A.type
											? f().translate('showcases.direct_debit.create')
											: null,
									X = (0, $.jsxs)('div', {
										className: 'form-input-header--label',
										children: [
											f().translate('showcases.htlc.expiration_date'),
											(0, $.jsxs)('div', {
												className: 'form-input-header--right',
												children: [
													(0, $.jsx)('span', {
														className: g()('period-row', {
															'is-active': 'one_day' === this.state.period,
														}),
														onClick: function () {
															return e.setPeriod(1);
														},
														children: f().translate(
															'showcases.htlc.expiration_period.one_day'
														),
													}),
													(0, $.jsx)('span', {
														className: g()('period-row', {
															'is-active': 'two_days' === this.state.period,
														}),
														onClick: function () {
															return e.setPeriod(2);
														},
														children: f().translate(
															'showcases.htlc.expiration_period.two_days'
														),
													}),
													(0, $.jsx)('span', {
														className: g()('period-row', {
															'is-active': 'one_week' === this.state.period,
														}),
														onClick: function () {
															return e.setPeriod(7);
														},
														children: f().translate(
															'showcases.htlc.expiration_period.one_week'
														),
													}),
												],
											}),
										],
									});
								return (0, $.jsx)(N.Z, {
									title: J,
									visible: this.props.isModalVisible,
									overlay: !0,
									onCancel: this.props.hideModal,
									footer: [
										(0, $.jsx)(
											s.Z,
											{
												disabled: K,
												onClick: K ? null : this.onSubmit.bind(this),
												children: G,
											},
											'send'
										),
										(0, $.jsx)(
											s.Z,
											{
												onClick: this.props.hideModal,
												children: (0, $.jsx)(y(), {
													component: 'span',
													content: 'transfer.cancel',
												}),
											},
											'Cancel'
										),
									],
									children: (0, $.jsx)('div', {
										className: 'grid-block vertical no-overflow',
										children: (0, $.jsxs)(B.Z, {
											className: 'full-width',
											layout: 'vertical',
											children: [
												(0, $.jsx)(v.Z, {
													label: 'showcases.htlc.sender',
													accountName: u,
													account: n,
													size: 60,
													typeahead: !0,
													hideImage: !0,
													disabled: !0,
												}),
												(0, $.jsx)(v.Z, {
													label: 'showcases.htlc.recipient',
													accountName: p,
													account: r,
													onChange: this.toChanged.bind(this),
													onAccountChanged: this.onToAccountChanged,
													size: 60,
													typeahead: !0,
													hideImage: !0,
													disabled: R || E,
												}),
												E
													? null
													: (0, $.jsx)(b.Z, {
															label: 'showcases.htlc.amount',
															amount: c,
															onChange: this.onAmountChanged.bind(this),
															asset:
																D.length > 0 && o ? o.get('id') : a || D[0],
															assets: D,
															display_balance: R || E ? void 0 : F,
															allowNaN: !0,
															disabled: R || E,
															selectDisabled: R || E,
													  }),
												R
													? (0, $.jsx)(B.Z.Item, {
															label: f().translate('showcases.htlc.preimage'),
															children: (0, $.jsx)(l.Z, {
																type: 'text',
																value: k || '',
																placeholder: f().translate(
																	'showcases.htlc.hash'
																),
																readOnly: !0,
																disabled: !0,
															}),
													  })
													: (0, $.jsx)(ue, {
															ref: function (t) {
																return (e.preimage = t);
															},
															label: 'showcases.htlc.preimage',
															onAction: this.onPreimageChanged.bind(this),
															preimage_hash: k,
															preimage_size: P,
															preimage: w,
															preimage_cipher: j,
															type: A && A.type ? A.type : 'create',
													  }),
												E
													? null
													: (0, $.jsxs)('div', {
															children: [
																(0, $.jsx)(B.Z.Item, {
																	label: X,
																	validateStatus: '',
																	className: 'form-input-header',
																	children: (0, $.jsx)(T.Z, {
																		showToday: !0,
																		showTime: !0,
																		placeholder: '',
																		onChange: this.onExpirationDateChanged,
																		className: 'date-picker-width100',
																		style: {width: '100%'},
																		ref: function (t) {
																			return e.onDatepickerRef(t);
																		},
																		disabledDate: function (e) {
																			return e && e < C;
																		},
																		value: Z,
																	}),
																}),
																(0, $.jsx)('div', {
																	className: 'content-block transfer-input',
																	children: (0, $.jsx)('div', {
																		className: 'no-margin no-padding',
																		children: (0, $.jsx)('div', {
																			id: 'txFeeSelector',
																			className: 'small-12',
																			children: (0, $.jsx)(b.Z, {
																				label: 'transfer.fee',
																				disabled: !0,
																				amount: L,
																				onChange: this.onFeeChanged.bind(this),
																				asset:
																					I.length && i
																						? i.asset_id
																						: 1 === I.length
																						? I[0]
																						: m || I[0],
																				assets: I,
																				display_balance: V,
																				error:
																					!1 === this.state.hasPoolBalance
																						? 'transfer.errors.insufficient'
																						: null,
																				scroll_length: 2,
																			}),
																		}),
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
					n
				);
			})(r.Component);
			le(pe, 'propTypes', {
				isModalVisible: J().bool.isRequired,
				hideModal: J().func.isRequired,
				fromAccount: H.Z.ChainObject.isRequired,
				operation: J().object,
			});
			const fe = (0, C.$)(pe, {
				listenTo: function () {
					return [Z.Z];
				},
				getProps: function (e) {
					return {fee_asset_symbol: Z.Z.getState().settings.get('fee_asset')};
				},
			});
			var de = n(77335);
			function he(e) {
				return (
					(he =
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
					he(e)
				);
			}
			function me(e, t) {
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
			function ye(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? me(Object(n), !0).forEach(function (t) {
								Oe(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: me(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function be(e, t, n, r, o, s, a) {
				try {
					var i = e[s](a),
						c = i.value;
				} catch (e) {
					return void n(e);
				}
				i.done ? t(c) : Promise.resolve(c).then(r, o);
			}
			function _e(e) {
				return function () {
					var t = this,
						n = arguments;
					return new Promise(function (r, o) {
						var s = e.apply(t, n);
						function a(e) {
							be(s, r, o, a, i, 'next', e);
						}
						function i(e) {
							be(s, r, o, a, i, 'throw', e);
						}
						a(void 0);
					});
				};
			}
			function ge(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ve(e, t) {
				return (
					(ve =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ve(e, t)
				);
			}
			function we(e, t) {
				if (t && ('object' === he(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return je(e);
			}
			function je(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function xe(e) {
				return (
					(xe = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					xe(e)
				);
			}
			function Oe(e, t, n) {
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
			var ke = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && ve(e, t);
				})(b, e);
				var t,
					n,
					r,
					p,
					m,
					y =
						((p = b),
						(m = (function () {
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
								t = xe(p);
							if (m) {
								var n = xe(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return we(this, e);
						});
				function b(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, b),
						Oe(je((t = y.call(this, e))), 'showModal', function (e) {
							return _e(
								regeneratorRuntime.mark(function n() {
									return regeneratorRuntime.wrap(function (n) {
										for (;;)
											switch ((n.prev = n.next)) {
												case 0:
													if (!e.payload) {
														n.next = 7;
														break;
													}
													return (
														(n.next = 3),
														(0, d.jB)(
															d.BQ.getAccount,
															[e.payload.transfer.to],
															void 0,
															{}
														)
													);
												case 3:
													return (
														(n.next = 5),
														(0, d.jB)(
															d.BQ.getAccount,
															[e.payload.transfer.from],
															void 0,
															{}
														)
													);
												case 5:
													return (
														(n.next = 7),
														(0, d.jB)(d.BQ.getAsset, [
															e.payload.transfer.asset_id,
														])
													);
												case 7:
													t.setState({isModalVisible: !0, operationData: e});
												case 8:
												case 'end':
													return n.stop();
											}
									}, n);
								})
							);
						}),
						Oe(je(t), 'hideModal', function () {
							t.setState({isModalVisible: !1, operation: null});
						}),
						Oe(je(t), '_onFilter', function (e) {
							e.preventDefault(),
								t.setState({filterString: e.target.value.toLowerCase()});
						}),
						(t.state = {
							isModalVisible: !1,
							filterString: '',
							operationData: void 0,
							htlc_list: [],
							tableIsLoading: !1,
						}),
						(t.hasLoadedOnce = null),
						t
					);
				}
				return (
					(t = b),
					(n = [
						{
							key: '_update',
							value:
								((r = _e(
									regeneratorRuntime.mark(function e() {
										var t, n, r, o;
										return regeneratorRuntime.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((t = this.props.currentAccount),
																!(0, G.u)(t) ||
																	this.hasLoadedOnce === t.get('id'))
															) {
																e.next = 24;
																break;
															}
															return (
																(this.hasLoadedOnce = t.get('id')),
																this.setState({tableIsLoading: !0}),
																(e.next = 7),
																q.getHTLCs(t.get('id'))
															);
														case 7:
															(n = e.sent), (r = 0);
														case 9:
															if (!(r < n.length)) {
																e.next = 23;
																break;
															}
															return (
																(o = n[r]),
																(e.prev = 11),
																(e.next = 14),
																(0, d.jB)(
																	d.BQ.getObject,
																	[o.transfer.asset_id],
																	void 0,
																	{}
																)
															);
														case 14:
															return (
																(e.next = 16),
																(0, d.jB)(d.BQ.getAccountName, [
																	o.transfer.from,
																	o.transfer.to,
																])
															);
														case 16:
															e.next = 20;
															break;
														case 18:
															(e.prev = 18), (e.t0 = e.catch(11));
														case 20:
															r++, (e.next = 9);
															break;
														case 23:
															this.setState({htlc_list: n, tableIsLoading: !1});
														case 24:
														case 'end':
															return e.stop();
													}
											},
											e,
											this,
											[[11, 18]]
										);
									})
								)),
								function () {
									return r.apply(this, arguments);
								}),
						},
						{
							key: 'componentDidMount',
							value: function () {
								this._update();
							},
						},
						{
							key: 'componentDidUpdate',
							value: function (e) {
								this._update();
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.state,
									n = t.isModalVisible,
									r = t.htlc_list,
									p = t.operationData,
									m = t.filterString,
									y = this.props.currentAccount,
									b = null;
								r.length &&
									(b = r.map(function (e) {
										var t = e.transfer.to,
											n = e.transfer.from,
											r = {
												amount: e.transfer.amount,
												asset_id: e.transfer.asset_id,
											},
											s = e.conditions.time_lock.expiration,
											a = d.BQ.getAsset(r.asset_id, !1),
											i = d.BQ.getAccountName(t) || t,
											c = d.BQ.getAccountName(n) || n;
										return {
											key: e.id,
											id: e.id,
											type: t == y.get('id') ? 'payee' : 'payer',
											from: c,
											to: i,
											amount: (0, $.jsxs)('span', {
												children: [
													a ? h.Z.get_asset_amount(r.amount, a) + ' ' : null,
													(0, $.jsx)(de.Z, {asset: r.asset_id}),
												],
											}),
											hash: (0, $.jsx)(o.Z, {
												title: f().translate('htlc.preimage_hash_explanation'),
												children: (0, $.jsx)('span', {
													children:
														'(' +
														e.conditions.hash_lock.preimage_size +
														',' +
														e.conditions.hash_lock.preimage_hash[0] +
														'): ' +
														e.conditions.hash_lock.preimage_hash[1],
												}),
											}),
											expires: s,
											rawData: ye({}, e),
										};
									})).length &&
									b.filter(function (e) {
										return e.to && -1 !== e.to.indexOf(m);
									});
								var _ = [
									{
										title: '#',
										dataIndex: 'id',
										key: 'id',
										sorter: function (e, t) {
											return e.id > t.id ? 1 : e.id < t.id ? -1 : 0;
										},
									},
									{
										title: f().translate('showcases.htlc.from'),
										dataIndex: 'from',
										key: 'from',
										sorter: function (e, t) {
											return e.from > t.from ? 1 : e.from < t.from ? -1 : 0;
										},
									},
									{
										title: f().translate('showcases.htlc.to'),
										dataIndex: 'to',
										key: 'to',
										sorter: function (e, t) {
											return e.to > t.to ? 1 : e.to < t.to ? -1 : 0;
										},
									},
									{
										title: f().translate('showcases.htlc.amount'),
										dataIndex: 'amount',
										key: 'amount',
										sorter: function (e, t) {
											return (
												e.rawData.op[1].amount.amount -
												t.rawData.op[1].amount.amount
											);
										},
									},
									{
										title: f().translate('showcases.htlc.hash'),
										dataIndex: 'hash',
										key: 'hash',
									},
									{
										title: f().translate('showcases.htlc.expires'),
										dataIndex: 'expires',
										key: 'expires',
										sorter: function (e, t) {
											return e.expires > t.expires
												? 1
												: e.expires < t.expires
												? -1
												: 0;
										},
										render: function (e, t) {
											return f().localize(new Date(h.Z.makeISODateString(e)), {
												type: 'date',
												format: 'full',
											});
										},
									},
									{
										title: f().translate('showcases.htlc.actions'),
										dataIndex: 'action',
										key: 'action',
										render: function (t, n) {
											return n.type
												? 'payer' === n.type
													? (0, $.jsx)('span', {
															children: (0, $.jsx)(s.Z, {
																style: {marginRight: '10px'},
																onClick: e.showModal({
																	type: 'extend',
																	payload: n.rawData,
																}),
																children: f().translate(
																	'showcases.htlc.extend'
																),
															}),
													  })
													: (0, $.jsx)('span', {
															onClick: e.showModal({
																type: 'redeem',
																payload: n.rawData,
															}),
															children: (0, $.jsx)(s.Z, {
																children: f().translate(
																	'showcases.htlc.redeem'
																),
															}),
													  })
												: null;
										},
									},
								];
								return (0, $.jsx)('div', {
									className: 'direct-debit-view',
									children: (0, $.jsxs)(a.Z, {
										className: 'direct-debit-table-card',
										children: [
											(0, $.jsx)(i.Z, {
												children: (0, $.jsxs)(c.Z, {
													span: 24,
													style: {padding: '10px'},
													children: [
														(0, $.jsxs)('div', {
															style: {marginBottom: '30px'},
															children: [
																(0, $.jsx)(l.Z, {
																	className: 'direct-debit-table__filter-input',
																	placeholder: f().translate(
																		'explorer.witnesses.filter_by_name'
																	),
																	onChange: this._onFilter,
																	style: {width: '200px', marginRight: '30px'},
																}),
																(0, $.jsx)(s.Z, {
																	onClick: this.showModal({
																		type: 'create',
																		payload: null,
																	}),
																	style: {marginRight: '30px'},
																	children: f().translate(
																		'showcases.htlc.create_htlc'
																	),
																}),
																!!this.state.errorMessage &&
																	(0, $.jsx)('span', {
																		className: 'red',
																		children: this.state.errorMessage,
																	}),
															],
														}),
														(0, $.jsx)(u.Z, {
															columns: _,
															dataSource: b,
															pagination: !1,
															className: 'direct-debit-table',
															loading: this.state.tableIsLoading,
														}),
													],
												}),
											}),
											(0, $.jsx)(fe, {
												isModalVisible: n,
												hideModal: this.hideModal,
												operation: p,
												fromAccount: this.props.currentAccount,
											}),
										],
									}),
								});
							},
						},
					]),
					n && ge(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					b
				);
			})(r.Component);
			const Se = (ke = (0, G.h)(ke));
		},
		98652: (e, t, n) => {
			n.d(t, {Z: () => A});
			var r = n(67294),
				o = n(58074),
				s = n.n(o),
				a = n(17076),
				i = n(97891),
				c = n(43393),
				l = n.n(c),
				u = n(112),
				p = n.n(u),
				f = n(31403),
				d = n(40840),
				h = n(45697),
				m = n.n(h),
				y = n(31143),
				b = n(35944);
			function _(e) {
				return (
					(_ =
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
					_(e)
				);
			}
			function g(e, t) {
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
			function w(e, t, n) {
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
					t && x(e, t);
			}
			function x(e, t) {
				return (
					(x =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					x(e, t)
				);
			}
			function O(e) {
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
						r = S(e);
					if (t) {
						var o = S(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return k(this, n);
				};
			}
			function k(e, t) {
				if (t && ('object' === _(t) || 'function' == typeof t)) return t;
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
			function S(e) {
				return (
					(S = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					S(e)
				);
			}
			function P(e, t, n) {
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
			var C = (function (e) {
				j(n, e);
				var t = O(n);
				function n() {
					return g(this, n), t.apply(this, arguments);
				}
				return (
					w(n, [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return (
									!d.Z.are_equal_shallow(e.assets, this.props.assets) ||
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
			P(C, 'propTypes', {
				value: m().string,
				onChange: m().func,
				scroll_length: m().number,
			}),
				(C = (0, f.Z)(C, {asList: !0}));
			var Z = (function (e) {
				j(n, e);
				var t = O(n);
				function n() {
					return g(this, n), t.apply(this, arguments);
				}
				return (
					w(n, [
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
									? p().translate(this.props.error)
									: this.formatAmount(this.props.amount);
								return (0, b.jsxs)('div', {
									className: 'amount-selector',
									style: this.props.style,
									children: [
										(0, b.jsx)('label', {
											className: 'right-label',
											children: this.props.display_balance,
										}),
										(0, b.jsx)(s(), {
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
														: (0, b.jsx)(C, {
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
			})(y.C);
			P(Z, 'propTypes', {
				label: m().string,
				assets: m().array,
				amount: m().any,
				placeholder: m().string,
				onChange: m().func,
				tabIndex: m().number,
				error: m().string,
				scroll_length: m().number,
			}),
				P(Z, 'defaultProps', {disabled: !1, tabIndex: 0});
			const A = (Z = (0, f.Z)(Z));
		},
		85017: (e, t, n) => {
			n.d(t, {h: () => g, u: () => _});
			var r = n(67294),
				o = n(8564),
				s = n(80563),
				a = n(79876),
				i = n(11230),
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
			function f(e, t) {
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
			function d(e, t) {
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
			function m(e, t) {
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
			function b(e, t, n) {
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
			var _ = function (e) {
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
								})(i, t);
								var n,
									r,
									o,
									s,
									a =
										((o = i),
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
												t = y(o);
											if (s) {
												var n = y(this).constructor;
												e = Reflect.construct(t, arguments, n);
											} else e = t.apply(this, arguments);
											return m(this, e);
										});
								function i(e) {
									return (
										(function (e, t) {
											if (!(e instanceof t))
												throw new TypeError(
													'Cannot call a class as a function'
												);
										})(this, i),
										a.call(this, e)
									);
								}
								return (
									(n = i),
									(r = [
										{
											key: 'render',
											value: function () {
												return _(this.props.currentAccount)
													? (0, u.jsx)(
															e,
															(function (e) {
																for (var t = 1; t < arguments.length; t++) {
																	var n =
																		null != arguments[t] ? arguments[t] : {};
																	t % 2
																		? f(Object(n), !0).forEach(function (t) {
																				b(e, t, n[t]);
																		  })
																		: Object.getOwnPropertyDescriptors
																		? Object.defineProperties(
																				e,
																				Object.getOwnPropertyDescriptors(n)
																		  )
																		: f(Object(n)).forEach(function (t) {
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
									r && d(n.prototype, r),
									Object.defineProperty(n, 'prototype', {writable: !1}),
									i
								);
							})(r.Component)),
							b(t, 'propTypes', {currentAccount: o.Z.ChainAccount}),
							b(t, 'defaultProps', {autosubscribe: !0}),
							t);
					return (
						(n = (0, a.Z)(n)),
						(n = (0, s.Z)(n, 100, {leading: !1})),
						(0, i.$)(n, {
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
	},
]);
