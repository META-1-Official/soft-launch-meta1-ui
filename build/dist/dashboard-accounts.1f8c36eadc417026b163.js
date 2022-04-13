'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[884],
	{
		52976: (t, e, n) => {
			n.r(e), n.d(e, {default: () => St});
			var r = n(67294),
				o = n(43393),
				c = n.n(o),
				s = n(40840),
				i = n(58074),
				a = n.n(i),
				l = n(11230),
				u = n(96520),
				d = n(18645),
				h = n(8564),
				p = n(79876),
				f = n(60521),
				g = n(40226),
				y = n(41185),
				b = n(52233),
				m = n(94990),
				v = n(37983),
				j = n(112),
				w = n.n(j),
				x = n(37065),
				_ = n(24300),
				O = n(35944);
			function k(t) {
				return (
					(k =
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
					k(t)
				);
			}
			function S(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e &&
						(r = r.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function A(t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			}
			function Z(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function C(t, e, n) {
				return (
					e && Z(t.prototype, e),
					n && Z(t, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					t
				);
			}
			function P(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: {value: t, writable: !0, configurable: !0},
				})),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					e && L(t, e);
			}
			function L(t, e) {
				return (
					(L =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					L(t, e)
				);
			}
			function N(t) {
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
					var n,
						r = E(t);
					if (e) {
						var o = E(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return I(this, n);
				};
			}
			function I(t, e) {
				if (e && ('object' === k(e) || 'function' == typeof e)) return e;
				if (void 0 !== e)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (t) {
					if (void 0 === t)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return t;
				})(t);
			}
			function E(t) {
				return (
					(E = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					E(t)
				);
			}
			function R(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = n),
					t
				);
			}
			var T = (function (t) {
				P(n, t);
				var e = N(n);
				function n(t) {
					var r;
					return (
						A(this, n),
						((r = e.call(this)).state = {
							inverseSort: t.viewSettings.get('dashboardSortInverse', !0),
							sortBy: t.viewSettings.get('dashboardSort', 'star'),
							dashboardFilter: t.viewSettings.get('dashboardFilter', ''),
						}),
						r
					);
				}
				return (
					C(n, [
						{
							key: 'shouldComponentUpdate',
							value: function (t, e) {
								return (
									!s.Z.are_equal_shallow(t.accounts, this.props.accounts) ||
									t.isContactsList !== this.props.isContactsList ||
									t.showMyAccounts !== this.props.showMyAccounts ||
									t.width !== this.props.width ||
									t.showIgnored !== this.props.showIgnored ||
									t.locked !== this.props.locked ||
									t.passwordAccount !== this.props.passwordAccount ||
									!s.Z.are_equal_shallow(
										t.starredAccounts,
										this.props.starredAccounts
									) ||
									!s.Z.are_equal_shallow(e, this.state)
								);
							},
						},
						{
							key: '_onStar',
							value: function (t, e, n) {
								n.preventDefault(),
									e ? g.Z.removeStarAccount(t) : g.Z.addStarAccount(t);
							},
						},
						{
							key: '_goAccount',
							value: function (t, e) {
								this.props.history.push('/account/'.concat(t)),
									f.Z.changeViewSetting({overviewTab: e});
							},
						},
						{
							key: '_createAccount',
							value: function () {
								this.props.history.push('/registration');
							},
						},
						{
							key: '_onFilter',
							value: function (t) {
								this.setState({dashboardFilter: t.target.value.toLowerCase()}),
									f.Z.changeViewSetting({
										dashboardFilter: t.target.value.toLowerCase(),
									});
							},
						},
						{
							key: '_setSort',
							value: function (t) {
								var e =
									t === this.state.sortBy
										? !this.state.inverseSort
										: this.state.inverseSort;
								this.setState({sortBy: t, inverseSort: e}),
									f.Z.changeViewSetting({
										dashboardSort: t,
										dashboardSortInverse: e,
									});
							},
						},
						{
							key: '_onAddContact',
							value: function (t) {
								g.Z.addAccountContact(t);
							},
						},
						{
							key: '_onRemoveContact',
							value: function (t) {
								g.Z.removeAccountContact(t);
							},
						},
						{
							key: '_renderList',
							value: function (t, e) {
								var n = this,
									r = this.props,
									o = r.width,
									i = r.starredAccounts,
									a = r.isContactsList,
									l = r.passwordAccount,
									u = this.state,
									d = u.dashboardFilter,
									h = u.sortBy,
									p = u.inverseSort,
									f = c().List();
								return t
									.filter(function (t) {
										if (!t) return !1;
										var e = t.get('name'),
											r = v.Z.isMyAccount(t) || e === l;
										return !!a || r === n.props.showMyAccounts;
									})
									.filter(function (t) {
										return !!t && -1 !== t.get('name').toLowerCase().indexOf(d);
									})
									.sort(function (t, e) {
										switch (h) {
											case 'star':
												return (function (t, e, n, r) {
													var o = t.get('name'),
														c = e.get('name'),
														i = r.has(o),
														a = r.has(c);
													return i && !a
														? n
															? -1
															: 1
														: (a && !i) || o > c
														? n
															? 1
															: -1
														: o < c
														? n
															? -1
															: 1
														: s.Z.sortText(o, c, !n);
												})(t, e, p, i);
											case 'name':
												return s.Z.sortText(t.get('name'), e.get('name'), p);
										}
									})
									.map(function (t) {
										if (t) {
											var r = {},
												c = {},
												s = {};
											f = f.clear();
											var u = t.get('name'),
												d = t.get('lifetime_referrer_name') === u;
											t.get('orders') &&
												t.get('orders').forEach(function (t, e) {
													var n = b.BQ.getObject(t);
													if (n) {
														var r = n.getIn(['sell_price', 'base', 'asset_id']);
														s[r]
															? (s[r] += parseInt(n.get('for_sale'), 10))
															: (s[r] = parseInt(n.get('for_sale'), 10));
													}
												}),
												t.get('call_orders') &&
													t.get('call_orders').forEach(function (t, e) {
														var n = b.BQ.getObject(t);
														if (n) {
															var o = n.getIn([
																'call_price',
																'base',
																'asset_id',
															]);
															r[o]
																? (r[o] += parseInt(n.get('collateral'), 10))
																: (r[o] = parseInt(n.get('collateral'), 10));
															var s = n.getIn([
																'call_price',
																'quote',
																'asset_id',
															]);
															c[s]
																? (c[s] += parseInt(n.get('debt'), 10))
																: (c[s] = parseInt(n.get('debt'), 10));
														}
													});
											var h = t.get('balances');
											t.get('balances') &&
												h.forEach(function (t) {
													var e = b.BQ.getObject(t);
													if (!e || !e.get('balance')) return null;
													f = f.push(t);
												});
											var p = v.Z.isMyAccount(t) || u === l,
												g = i.has(u),
												j = g ? 'gold-star' : 'grey-star';
											return (0, O.jsxs)(
												'tr',
												{
													children: [
														(0, O.jsx)('td', {
															className: 'clickable',
															onClick: n._onStar.bind(n, u, g),
															children: (0, O.jsx)(y.Z, {
																className: j,
																name: 'fi-star',
																title: 'icons.fi_star.account',
															}),
														}),
														a
															? (e &&
																	(0, O.jsx)('td', {
																		onClick: n._onAddContact.bind(n, u),
																		children: (0, O.jsx)(y.Z, {
																			name: 'plus-circle',
																			title: 'icons.plus_circle.add_contact',
																		}),
																	})) ||
															  (0, O.jsx)('td', {
																	onClick: n._onRemoveContact.bind(n, u),
																	children: (0, O.jsx)(y.Z, {
																		name: 'minus-circle',
																		title: 'icons.minus_circle.remove_contact',
																	}),
															  })
															: null,
														(0, O.jsx)('td', {
															style: {textAlign: 'left'},
															children: t.get('id'),
														}),
														(0, O.jsx)('td', {
															style: {textAlign: 'left', paddingLeft: 10},
															onClick: n._goAccount.bind(n, u, 0),
															className: 'clickable' + (p ? ' my-account' : ''),
															children: (0, O.jsx)('span', {
																className: d ? 'lifetime' : '',
																children: u,
															}),
														}),
														(0, O.jsx)('td', {
															className: 'clickable',
															onClick: n._goAccount.bind(n, u, 1),
															style: {textAlign: 'right'},
															children: (0, O.jsx)(m.Z, {
																noTip: !0,
																balances: [],
																openOrders: s,
															}),
														}),
														o >= 750
															? (0, O.jsx)('td', {
																	className: 'clickable',
																	onClick: n._goAccount.bind(n, u, 2),
																	style: {textAlign: 'right'},
																	children: (0, O.jsx)(m.Z, {
																		noTip: !0,
																		balances: [],
																		collateral: r,
																	}),
															  })
															: null,
														o >= 1200
															? (0, O.jsx)('td', {
																	className: 'clickable',
																	onClick: n._goAccount.bind(n, u, 2),
																	style: {textAlign: 'right'},
																	children: (0, O.jsx)(m.Z, {
																		noTip: !0,
																		balances: [],
																		debt: c,
																	}),
															  })
															: null,
														(0, O.jsx)('td', {
															className: 'clickable',
															onClick: n._goAccount.bind(n, u, 0),
															style: {textAlign: 'right'},
															children: (0, O.jsx)(m.Z, {
																noTip: !0,
																balances: f,
																collateral: r,
																debt: c,
																openOrders: s,
															}),
														}),
													],
												},
												u
											);
										}
									});
							},
						},
						{
							key: 'render',
							value: function () {
								var t = this.props,
									e = t.width,
									n = t.showIgnored,
									r = t.isContactsList,
									o = this.state.dashboardFilter,
									c = this._renderList(this.props.accounts),
									s = this._renderList(this.props.ignoredAccounts, !0),
									i = r
										? w().translate('explorer.accounts.filter_contacts')
										: w().translate('explorer.accounts.filter');
								i += '...';
								var l = !!x.Z.getWallet();
								return (0, O.jsxs)('div', {
									style: this.props.style,
									children: [
										this.props.compact
											? null
											: (0, O.jsxs)('section', {
													style: {paddingTop: '1rem', paddingLeft: '2rem'},
													children: [
														(0, O.jsx)('input', {
															placeholder: i,
															style: {
																maxWidth: '20rem',
																display: 'inline-block',
															},
															type: 'text',
															value: o,
															onChange: this._onFilter.bind(this),
														}),
														l && !r
															? (0, O.jsx)('div', {
																	onClick: this._createAccount.bind(this),
																	style: {
																		display: 'inline-block',
																		marginLeft: 5,
																		marginBottom: '1rem',
																	},
																	className: 'button small',
																	children: (0, O.jsx)(a(), {
																		content: 'header.create_account',
																	}),
															  })
															: null,
														s && s.length
															? (0, O.jsx)('div', {
																	onClick: this.props.onToggleIgnored,
																	style: {
																		display: 'inline-block',
																		float: 'right',
																		marginRight: '20px',
																	},
																	className: 'button small',
																	children: (0, O.jsx)(a(), {
																		content: 'account.'.concat(
																			this.props.showIgnored
																				? 'hide_ignored'
																				: 'show_ignored'
																		),
																	}),
															  })
															: null,
													],
											  }),
										(0, O.jsxs)('table', {
											className: 'table table-hover dashboard-table',
											style: {fontSize: '0.85rem'},
											children: [
												this.props.compact
													? null
													: (0, O.jsx)('thead', {
															children: (0, O.jsxs)('tr', {
																children: [
																	(0, O.jsx)('th', {
																		onClick: this._setSort.bind(this, 'star'),
																		className: 'clickable',
																		children: (0, O.jsx)(y.Z, {
																			className: 'grey-star',
																			name: 'fi-star',
																			title: 'icons.fi_star.sort_accounts',
																		}),
																	}),
																	r
																		? (0, O.jsx)('th', {
																				children: (0, O.jsx)(y.Z, {
																					name: 'user',
																					title: 'icons.user.account',
																				}),
																		  })
																		: null,
																	(0, O.jsx)('th', {
																		style: {textAlign: 'left'},
																		children: 'ID',
																	}),
																	(0, O.jsx)('th', {
																		style: {textAlign: 'left', paddingLeft: 10},
																		onClick: this._setSort.bind(this, 'name'),
																		className: 'clickable',
																		children: (0, O.jsx)(a(), {
																			content: 'header.account',
																		}),
																	}),
																	(0, O.jsx)('th', {
																		style: {textAlign: 'right'},
																		children: (0, O.jsx)(a(), {
																			content: 'account.open_orders',
																		}),
																	}),
																	e >= 750
																		? (0, O.jsx)('th', {
																				style: {textAlign: 'right'},
																				children: (0, O.jsx)(a(), {
																					content: 'account.as_collateral',
																				}),
																		  })
																		: null,
																	e >= 1200
																		? (0, O.jsx)('th', {
																				style: {textAlign: 'right'},
																				children: (0, O.jsx)(a(), {
																					content: 'transaction.borrow_amount',
																				}),
																		  })
																		: null,
																	(0, O.jsx)('th', {
																		style: {
																			textAlign: 'right',
																			marginRight: 20,
																		},
																		children: (0, O.jsx)(a(), {
																			content: 'account.total_value',
																		}),
																	}),
																],
															}),
													  }),
												(0, O.jsxs)('tbody', {
													children: [
														c,
														n && s.length
															? (0, O.jsx)(
																	'tr',
																	{
																		className:
																			'dashboard-table--hiddenAccounts',
																		style: {backgroundColor: 'transparent'},
																		children: (0, O.jsxs)('td', {
																			colSpan: '8',
																			children: [
																				w().translate(
																					'account.hidden_accounts_row'
																				),
																				':',
																			],
																		}),
																	},
																	'hidden'
															  )
															: null,
														n && s,
													],
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
			R(T, 'propTypes', {
				accounts: h.Z.ChainAccountsList.isRequired,
				ignoredAccounts: h.Z.ChainAccountsList,
			}),
				R(T, 'defaultProps', {width: 2e3, compact: !1}),
				(T = (0, p.Z)(T));
			var D = (function (t) {
				P(n, t);
				var e = N(n);
				function n() {
					return A(this, n), e.apply(this, arguments);
				}
				return (
					C(n, [
						{
							key: 'render',
							value: function () {
								return (0, O.jsx)(
									T,
									(function (t) {
										for (var e = 1; e < arguments.length; e++) {
											var n = null != arguments[e] ? arguments[e] : {};
											e % 2
												? S(Object(n), !0).forEach(function (e) {
														R(t, e, n[e]);
												  })
												: Object.getOwnPropertyDescriptors
												? Object.defineProperties(
														t,
														Object.getOwnPropertyDescriptors(n)
												  )
												: S(Object(n)).forEach(function (e) {
														Object.defineProperty(
															t,
															e,
															Object.getOwnPropertyDescriptor(n, e)
														);
												  });
										}
										return t;
									})({}, this.props)
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			D = (0, _.Z)(D);
			const B = (0, l.$)(D, {
				listenTo: function () {
					return [u.Z, d.Z, v.Z];
				},
				getProps: function () {
					return {
						locked: d.Z.getState().locked,
						starredAccounts: v.Z.getState().starredAccounts,
						viewSettings: u.Z.getState().viewSettings,
					};
				},
			});
			var F = n(70403),
				M = n(674),
				W = n(53825),
				q = n(54115),
				z = n(95852),
				H = n(44945),
				V = n(71242),
				U = n(58358),
				Q = n(15028),
				$ = n(5675),
				G = n(42239),
				J = n(71230),
				K = n(15746),
				X = n(8193);
			function Y(t) {
				return (
					(Y =
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
					Y(t)
				);
			}
			function tt(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function et(t, e) {
				return (
					(et =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					et(t, e)
				);
			}
			function nt(t, e) {
				if (e && ('object' === Y(e) || 'function' == typeof e)) return e;
				if (void 0 !== e)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return rt(t);
			}
			function rt(t) {
				if (void 0 === t)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return t;
			}
			function ot(t) {
				return (
					(ot = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					ot(t)
				);
			}
			var ct = (0, $.R7)(),
				st = (function (t) {
					!(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(t.prototype = Object.create(e && e.prototype, {
							constructor: {value: t, writable: !0, configurable: !0},
						})),
							Object.defineProperty(t, 'prototype', {writable: !1}),
							e && et(t, e);
					})(i, t);
					var e,
						r,
						o,
						c,
						s =
							((o = i),
							(c = (function () {
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
									e = ot(o);
								if (c) {
									var n = ot(this).constructor;
									t = Reflect.construct(e, arguments, n);
								} else t = e.apply(this, arguments);
								return nt(this, t);
							});
					function i(t) {
						var e;
						return (
							(function (t, e) {
								if (!(t instanceof e))
									throw new TypeError('Cannot call a class as a function');
							})(this, i),
							((e = s.call(this, t)).state = {
								step: 1,
								locales: u.Z.getState().defaults.locale,
								currentLocale: u.Z.getState().settings.get('locale'),
							}),
							(e.unmounted = !1),
							(e.handleLanguageSelect = e.handleLanguageSelect.bind(rt(e))),
							e
						);
					}
					return (
						(e = i),
						(r = [
							{
								key: 'componentWillMount',
								value: function () {
									var t = this;
									(0, z.Z)(function (e) {
										t.unmounted || t.setState({incognito: e});
									});
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this.unmounted = !0;
								},
							},
							{
								key: 'onSelect',
								value: function (t) {
									this.props.history.push('/registration/' + t);
								},
							},
							{
								key: 'handleLanguageSelect',
								value: function (t) {
									V.Z.switchLocale(t), this.setState({currentLocale: t});
								},
							},
							{
								key: 'languagesFilter',
								value: function (t, e) {
									return (
										e.props.language.toLowerCase().indexOf(t.toLowerCase()) >= 0
									);
								},
							},
							{
								key: 'render',
								value: function () {
									var t = n(112),
										e = (0, O.jsx)(G.Z, {
											showSearch: !0,
											filterOption: this.languagesFilter,
											value: this.state.currentLocale,
											onChange: this.handleLanguageSelect,
											style: {width: '123px', marginBottom: '16px'},
											children: this.state.locales.map(function (t) {
												return (0,
												O.jsx)(G.Z.Option, {language: w().translate('languages.' + t), children: w().translate('languages.' + t)}, t);
											}),
										});
									return (0, O.jsx)('div', {
										className: 'grid-block align-center',
										id: 'accountForm',
										children: (0, O.jsx)('div', {
											className: 'grid-block shrink vertical',
											children: (0, O.jsxs)('div', {
												className:
													'grid-content shrink text-center account-creation',
												children: [
													(0, O.jsx)('div', {
														children: (0, O.jsx)('img', {src: ct}),
													}),
													(0, O.jsx)('div', {
														children: (0, O.jsx)(a(), {
															content: 'header.create_account',
															component: 'h4',
														}),
													}),
													(0, O.jsxs)('div', {
														children: [
															(0, O.jsx)(a(), {
																content: 'account.intro_text_title',
																component: 'h4',
																wallet_name: (0, $.w)(),
															}),
															(0, O.jsx)(a(), {
																unsafe: !0,
																content: 'account.intro_text_1',
																component: 'p',
															}),
															(0, O.jsx)('div', {
																className: 'shrink text-center',
																children: (0, O.jsx)('div', {
																	className:
																		'grp-menu-item overflow-visible account-drop-down',
																	children: (0, O.jsx)('div', {
																		className:
																			'grp-menu-item overflow-visible login-selector--language-select',
																		style: {margin: '0 auto'},
																		'data-intro': t.translate(
																			'walkthrough.language_flag'
																		),
																		children: (0, O.jsxs)(J.Z, {
																			className:
																				'login-selector--language-select--wrapper',
																			children: [
																				(0, O.jsx)(K.Z, {
																					span: 4,
																					children: (0, O.jsx)(X.HmR, {
																						className:
																							'login-selector--language-select--icon',
																					}),
																				}),
																				(0, O.jsx)(K.Z, {
																					span: 20,
																					children: e,
																				}),
																			],
																		}),
																	}),
																}),
															}),
														],
													}),
													(0, O.jsxs)('div', {
														className: 'grid-block account-login-options',
														children: [
															(0, O.jsx)(W.Z, {
																id: 'account_login_button',
																to: '/registration',
																className: 'button primary',
																'data-intro': t.translate(
																	'walkthrough.create_cloud_wallet'
																),
																children: (0, O.jsx)(a(), {
																	content: 'header.create_account',
																}),
															}),
															(0, O.jsx)('span', {
																className: 'button primary',
																onClick: function () {
																	f.Z.changeSetting.defer({
																		setting: 'passwordlessLogin',
																		value: !0,
																	}),
																		H.Z.unlock().catch(function () {});
																},
																children: (0, O.jsx)(a(), {
																	content: 'header.unlock_short',
																}),
															}),
														],
													}),
													(0, O.jsx)('div', {
														className: 'additional-account-options',
														children: (0, O.jsx)('h5', {
															style: {textAlign: 'center'},
															children: (0, O.jsx)(q.Z, {
																string: 'account.optional.formatter',
																keys: [
																	{
																		type: 'link',
																		value: '/wallet/backup/restore',
																		translation:
																			'account.optional.restore_link',
																		dataIntro: t.translate(
																			'walkthrough.restore_account'
																		),
																		arg: 'restore_link',
																	},
																	{
																		type: 'link',
																		value: '/registration',
																		translation:
																			'account.optional.restore_form',
																		dataIntro: t.translate(
																			'walkthrough.create_local_wallet'
																		),
																		arg: 'restore_form',
																	},
																],
															}),
														}),
													}),
													(0, O.jsx)(Q.Z, {
														path: '/registration',
														exact: !0,
														component: U.Z,
													}),
												],
											}),
										}),
									});
								},
							},
						]) && tt(e.prototype, r),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						i
					);
				})(r.Component);
			const it = (0, l.$)(st, {
				listenTo: function () {
					return [v.Z];
				},
				getProps: function () {
					return {
						currentAccount:
							v.Z.getState().currentAccount || v.Z.getState().passwordAccount,
					};
				},
			});
			var at = n(15644),
				lt = n(12330),
				ut = n(72277);
			function dt(t) {
				return (
					(dt =
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
					dt(t)
				);
			}
			function ht(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e &&
						(r = r.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function pt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? ht(Object(n), !0).forEach(function (e) {
								ft(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: ht(Object(n)).forEach(function (e) {
								Object.defineProperty(
									t,
									e,
									Object.getOwnPropertyDescriptor(n, e)
								);
						  });
				}
				return t;
			}
			function ft(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = n),
					t
				);
			}
			function gt(t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			}
			function yt(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function bt(t, e, n) {
				return (
					e && yt(t.prototype, e),
					n && yt(t, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					t
				);
			}
			function mt(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: {value: t, writable: !0, configurable: !0},
				})),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					e && vt(t, e);
			}
			function vt(t, e) {
				return (
					(vt =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					vt(t, e)
				);
			}
			function jt(t) {
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
					var n,
						r = _t(t);
					if (e) {
						var o = _t(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return wt(this, n);
				};
			}
			function wt(t, e) {
				if (e && ('object' === dt(e) || 'function' == typeof e)) return e;
				if (void 0 !== e)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return xt(t);
			}
			function xt(t) {
				if (void 0 === t)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return t;
			}
			function _t(t) {
				return (
					(_t = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					_t(t)
				);
			}
			var Ot = (function (t) {
					mt(n, t);
					var e = jt(n);
					function n() {
						return gt(this, n), e.apply(this, arguments);
					}
					return (
						bt(n, [
							{
								key: 'render',
								value: function () {
									return (0, O.jsx)(ut.Z, {
										stores: [v.Z, u.Z, at.Z],
										inject: {
											contacts: function () {
												return v.Z.getState().accountContacts;
											},
											myActiveAccounts: function () {
												return v.Z.getState().myActiveAccounts;
											},
											myHiddenAccounts: function () {
												return v.Z.getState().myHiddenAccounts;
											},
											accountsReady: function () {
												return (
													v.Z.getState().accountsLoaded &&
													v.Z.getState().refsLoaded
												);
											},
											passwordAccount: function () {
												return v.Z.getState().passwordAccount;
											},
											currentEntry: u.Z.getState().viewSettings.get(
												'dashboardEntry',
												'accounts'
											),
										},
										children: (0, O.jsx)(kt, pt({}, this.props)),
									});
								},
							},
						]),
						n
					);
				})(r.Component),
				kt = (function (t) {
					mt(n, t);
					var e = jt(n);
					function n(t) {
						var r;
						return (
							gt(this, n),
							((r = e.call(this)).state = {
								width: null,
								showIgnored: !1,
								currentEntry: t.currentEntry,
							}),
							(r._setDimensions = r._setDimensions.bind(xt(r))),
							r
						);
					}
					return (
						bt(n, [
							{
								key: 'componentDidMount',
								value: function () {
									this._setDimensions(),
										window.addEventListener('resize', this._setDimensions, {
											capture: !1,
											passive: !0,
										});
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (t, e) {
									return (
										t.myActiveAccounts !== this.props.myActiveAccounts ||
										t.contacts !== this.props.contacts ||
										t.ignoredAccounts !== this.props.ignoredAccounts ||
										t.passwordAccount !== this.props.passwordAccount ||
										e.width !== this.state.width ||
										t.accountsReady !== this.props.accountsReady ||
										e.showIgnored !== this.state.showIgnored ||
										e.currentEntry !== this.state.currentEntry
									);
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									window.removeEventListener('resize', this._setDimensions);
								},
							},
							{
								key: '_setDimensions',
								value: function () {
									var t = window.innerWidth;
									t !== this.state.width && this.setState({width: t});
								},
							},
							{
								key: '_onToggleIgnored',
								value: function () {
									this.setState({showIgnored: !this.state.showIgnored});
								},
							},
							{
								key: '_onSwitchType',
								value: function (t) {
									this.setState({currentEntry: t}),
										f.Z.changeViewSetting({dashboardEntry: t});
								},
							},
							{
								key: 'render',
								value: function () {
									var t = this.props,
										e = t.myActiveAccounts,
										n = t.myHiddenAccounts,
										r = t.accountsReady,
										o = t.passwordAccount,
										s = this.state,
										i = s.width,
										a = s.showIgnored;
									o && !e.has(o) && (e = e.add(o));
									var l = e.toArray().sort();
									o && -1 === l.indexOf(o) && l.push(o);
									var u = n.toArray().sort(),
										d = e.size + n.size + (o ? 1 : 0);
									if (!r) return (0, O.jsx)(M.Z, {});
									if (!d) return (0, O.jsx)(it, {});
									var h = this.props.contacts.toArray();
									return (0, O.jsx)('div', {
										ref: 'wrapper',
										className: 'grid-block page-layout vertical',
										children: (0, O.jsx)('div', {
											ref: 'container',
											className: 'tabs-container generic-bordered-box',
											children: (0, O.jsxs)(lt.m, {
												setting: 'accountTab',
												className: 'account-tabs',
												defaultActiveTab: 1,
												segmented: !1,
												tabsClass:
													'account-overview no-padding bordered-header content-block',
												children: [
													(0, O.jsx)(lt.O, {
														title: 'account.accounts',
														children: (0, O.jsx)('div', {
															className: 'generic-bordered-box',
															children: (0, O.jsx)('div', {
																className: 'box-content',
																children: (0, O.jsx)(B, {
																	accounts: c().List(l),
																	ignoredAccounts: c().List(u),
																	width: i,
																	onToggleIgnored:
																		this._onToggleIgnored.bind(this),
																	showIgnored: a,
																	showMyAccounts: !0,
																}),
															}),
														}),
													}),
													(0, O.jsx)(lt.O, {
														title: 'account.contacts',
														children: (0, O.jsx)('div', {
															className: 'generic-bordered-box',
															children: (0, O.jsx)('div', {
																className: 'box-content',
																children: (0, O.jsx)(B, {
																	accounts: h,
																	passwordAccount: o,
																	ignoredAccounts: c().List(u),
																	width: i,
																	onToggleIgnored:
																		this._onToggleIgnored.bind(this),
																	showIgnored: a,
																	isContactsList: !0,
																}),
															}),
														}),
													}),
													(0, O.jsx)(lt.O, {
														title: 'account.recent',
														children: (0, O.jsx)(F.t, {
															accountsList: e,
															limit: 10,
															compactView: !1,
															fullHeight: !0,
															showFilters: !0,
															dashboard: !0,
														}),
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
			const St = function (t) {
				return (0, O.jsx)(Ot, pt(pt({}, t), {}, {onlyAccounts: !0}));
			};
		},
	},
]);
