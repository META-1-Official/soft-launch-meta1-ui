(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[809],
	{
		838: (e, t, n) => {
			'use strict';
			n.r(t), n.d(t, {default: () => mp});
			var r = n(67294),
				o = n(40226),
				s = n(37983),
				i = n(96520),
				a = n(18645),
				c = n(8564),
				l = n(79876),
				u = n(11230),
				p = n(41638),
				d = n(43393),
				h = n.n(d),
				f = n(13630),
				y = n(45424),
				b = n(15028),
				m = n(50250),
				g = n(45697),
				v = n.n(g),
				_ = n(53825),
				j = n(58074),
				x = n.n(j),
				w = n(71665),
				k = n(46194),
				O = n(17076),
				S = n(99111),
				C = n(674),
				P = n(40840),
				A = n(112),
				Z = n.n(A),
				M = n(99959),
				R = n(10033),
				N = n(98652),
				I = n(38648),
				T = n(71577),
				B = n(8174),
				E = n(35944),
				D = n(23085).Buffer,
				V = n(25108);
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
			function F(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function U(e, t) {
				return (
					(U =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					U(e, t)
				);
			}
			function L(e, t) {
				if (t && ('object' === q(t) || 'function' == typeof t)) return t;
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
			function z(e) {
				return (
					(z = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					z(e)
				);
			}
			var W,
				K,
				J,
				Q = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && U(e, t);
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
									t = z(r);
								if (o) {
									var n = z(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return L(this, e);
							});
					function i(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, i),
							((t = s.call(this, e)).state = {
								amount: e.amount,
								to: e.to,
								to_id: null,
								memo: '',
							}),
							t
						);
					}
					return (
						(t = i),
						(n = [
							{
								key: 'onAmountChanged',
								value: function (e) {
									var t = e.amount;
									this.setState({amount: t});
								},
							},
							{
								key: 'onToAccountChanged',
								value: function (e) {
									var t = e
										? {to: e.get('name'), to_id: e.get('id')}
										: {to_id: null};
									this.setState(t);
								},
							},
							{
								key: 'onToChanged',
								value: function (e) {
									this.setState({to: e, to_id: null});
								},
							},
							{
								key: 'onSubmit',
								value: function () {
									this.props.hideModal();
									var e = this.props.asset_to_issue,
										t = P.Z.get_asset_precision(e.get('precision')),
										n = this.state.amount.toString().replace(/,/g, '');
									(n *= t),
										M.Z.issue_asset(
											this.state.to_id,
											e.get('issuer'),
											e.get('id'),
											n,
											this.state.memo
												? new D(this.state.memo, 'utf-8')
												: this.state.memo
										).catch(function (e) {
											V.log('issue error caught here:', e),
												I.Z.error({
													message: Z().translate(
														'notifications.asset_issue_failure'
													),
												});
										}),
										this.setState({amount: 0, to: '', to_id: null, memo: ''});
								},
							},
							{
								key: 'onMemoChanged',
								value: function (e) {
									this.setState({memo: e.target.value});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props.asset_to_issue.get('id'),
										t = 1,
										n = [
											(0, E.jsx)(
												T.Z,
												{
													type: 'primary',
													onClick: this.onSubmit.bind(
														this,
														this.state.to,
														this.state.amount
													),
													disabled: !this.state.to_id || !this.state.amount,
													children: Z().translate('modal.issue.submit'),
												},
												'submit'
											),
											(0, E.jsx)(
												T.Z,
												{
													onClick: this.props.hideModal,
													children: Z().translate('cancel'),
												},
												'cancel'
											),
										];
									return (0, E.jsx)(B.Z, {
										title: Z().translate('modal.issue.submit'),
										visible: this.props.visible,
										onCancel: this.props.hideModal,
										footer: n,
										children: (0, E.jsx)('form', {
											className: 'grid-block vertical full-width-content',
											children: (0, E.jsxs)('div', {
												className: 'grid-container ',
												children: [
													(0, E.jsx)('div', {
														className: 'content-block',
														children: (0, E.jsx)(R.Z, {
															label: 'modal.issue.to',
															accountName: this.state.to,
															onAccountChanged:
																this.onToAccountChanged.bind(this),
															onChange: this.onToChanged.bind(this),
															account: this.state.to,
															tabIndex: t++,
														}),
													}),
													(0, E.jsx)('div', {
														className: 'content-block',
														children: (0, E.jsx)(N.Z, {
															label: 'modal.issue.amount',
															amount: this.state.amount,
															onChange: this.onAmountChanged.bind(this),
															asset: e,
															assets: [e],
															tabIndex: t++,
														}),
													}),
													(0, E.jsxs)('div', {
														className: 'content-block',
														children: [
															(0, E.jsxs)('label', {
																children: [
																	(0, E.jsx)(x(), {
																		component: 'span',
																		content: 'transfer.memo',
																	}),
																	' (',
																	(0, E.jsx)(x(), {
																		content: 'transfer.optional',
																	}),
																	')',
																],
															}),
															(0, E.jsx)('textarea', {
																rows: '3',
																value: this.state.memo,
																tabIndex: t++,
																onChange: this.onMemoChanged.bind(this),
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
						n && F(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						i
					);
				})(r.Component);
			(W = Q),
				(K = 'propTypes'),
				(J = {asset_to_issue: c.Z.ChainAsset.isRequired}),
				K in W
					? Object.defineProperty(W, K, {
							value: J,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (W[K] = J);
			const G = (0, l.Z)(Q);
			var Y = n(87718),
				H = n(31403),
				X = n(12330),
				$ = n(41185);
			function ee(e) {
				return (
					(ee =
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
					ee(e)
				);
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
			function re(e, t) {
				if (t && ('object' === ee(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return oe(e);
			}
			function oe(e) {
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
			function ie(e, t, n) {
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
			var ae = (function (e) {
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
					n,
					r,
					s,
					i =
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
								t = se(r);
							if (s) {
								var n = se(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return re(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((t = i.call(this, e)).state = {
							isIssueAssetModalVisible: !1,
							create: {
								symbol: '',
								name: '',
								description: '',
								max_supply: 1e15,
								precision: 4,
							},
							issue: {amount: 0, to: '', to_id: '', asset_id: '', symbol: ''},
							errors: {symbol: null},
							isValid: !1,
							searchTerm: '',
						}),
						(t._searchAccounts = (0, S.Z)(t._searchAccounts, 150)),
						(t.showIssueAssetModal = t.showIssueAssetModal.bind(oe(t))),
						(t.hideIssueAssetModal = t.hideIssueAssetModal.bind(oe(t))),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'showIssueAssetModal',
							value: function () {
								this.setState({isIssueAssetModalVisible: !0});
							},
						},
						{
							key: 'hideIssueAssetModal',
							value: function () {
								this.setState({isIssueAssetModalVisible: !1});
							},
						},
						{
							key: '_checkAssets',
							value: function (e, t) {
								if (!this.props.account.get('assets').size) {
									var n = e
										.sort(function (e, t) {
											return e.symbol > t.symbol
												? 1
												: e.symbol < t.symbol
												? -1
												: 0;
										})
										.last();
									0 === e.size || t
										? (w.Z.getAssetList.defer('A', 100),
										  this.setState({assetsFetched: 100}))
										: e.size >= this.state.assetsFetched &&
										  (w.Z.getAssetList.defer(n.symbol, 100),
										  this.setState({
												assetsFetched: this.state.assetsFetched + 99,
										  }));
								}
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								this._checkAssets(e.assets);
							},
						},
						{
							key: 'componentWillMount',
							value: function () {
								this._checkAssets(this.props.assets, !0);
							},
						},
						{
							key: '_onIssueInput',
							value: function (e, t) {
								var n = t.target.id,
									r = this.state.issue;
								if ('to' === n) {
									this._searchAccounts(t.target.value), (r.to = t.target.value);
									var o = this.props.searchAccounts.findEntry(function (e) {
										return e === t.target.value;
									});
									r.to_id = o ? o[0] : null;
								} else r[e] = t.target.value;
								this.setState({issue: r});
							},
						},
						{
							key: '_searchAccounts',
							value: function (e) {
								o.Z.accountSearch(e);
							},
						},
						{
							key: '_issueButtonClick',
							value: function (e, t, n) {
								n.preventDefault();
								var r = this.state.issue;
								(r.asset_id = e),
									(r.symbol = t),
									this.setState({issue: r}),
									this.showIssueAssetModal();
							},
						},
						{
							key: '_editButtonClick',
							value: function (e, t, n) {
								n.preventDefault(),
									this.props.history.push(
										'/account/'.concat(t, '/update-asset/').concat(e)
									);
							},
						},
						{
							key: '_createButtonClick',
							value: function (e) {
								this.props.history.push('/account/'.concat(e, '/create-asset'));
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props,
									n = t.account,
									r = t.account_name,
									o = t.assets,
									s = t.assetsList,
									i = !0;
								if (!n) return (0, E.jsx)(C.Z, {type: 'circle'});
								if ((n.notFound && (i = !1), !i))
									return (0, E.jsx)('div', {
										className: 'grid-block',
										children: (0, E.jsx)('h5', {
											children: (0, E.jsx)(x(), {
												component: 'h5',
												content: 'account.errors.not_found',
												name: r,
											}),
										}),
									});
								s.length &&
									((o = o.clear()),
									s.forEach(function (e) {
										e && (o = o.set(e.get('id'), e.toJS()));
									}));
								var a = o
									.filter(function (e) {
										return e.issuer === n.get('id');
									})
									.sort(function (e, t) {
										return (
											parseInt(e.id.substring(4, e.id.length), 10) -
											parseInt(t.id.substring(4, t.id.length), 10)
										);
									})
									.map(function (t) {
										var n = Y.Z.parseDescription(t.options.description),
											o = n.short_name ? n.short_name : n.main;
										o.length > 100 && (o = o.substr(0, 100) + '...');
										var s = e.props.getDynamicObject(t.dynamic_asset_data_id);
										return (0,
										E.jsxs)('tr', {children: [(0, E.jsx)('td', {style: {textAlign: 'left'}, children: (0, E.jsx)(_.Z, {to: '/asset/'.concat(t.symbol), children: t.symbol})}), (0, E.jsx)('td', {style: {textAlign: 'left'}, children: 'bitasset' in t ? (t.bitasset.is_prediction_market ? (0, E.jsx)(x(), {content: 'account.user_issued_assets.pm'}) : (0, E.jsx)(x(), {content: 'account.user_issued_assets.mpa'})) : 'User Issued Asset'}), (0, E.jsx)('td', {style: {textAlign: 'right'}, children: s ? (0, E.jsx)(O.Z, {hide_asset: !0, amount: parseInt(s.get('current_supply'), 10), asset: t.id}) : null}), (0, E.jsx)('td', {style: {textAlign: 'right'}, children: (0, E.jsx)(O.Z, {hide_asset: !0, amount: parseInt(t.options.max_supply, 10), asset: t.id})}), (0, E.jsx)('td', {children: t.bitasset_data_id ? null : (0, E.jsx)('a', {onClick: e._issueButtonClick.bind(e, t.id, t.symbol), children: (0, E.jsx)($.Z, {name: 'cross-circle', className: 'rotate45'})})}), (0, E.jsx)('td', {children: (0, E.jsx)('a', {onClick: e._editButtonClick.bind(e, t.symbol, r), children: (0, E.jsx)($.Z, {name: 'dashboard'})})})]}, t.symbol);
									})
									.toArray();
								return (0, E.jsx)('div', {
									className: 'grid-content app-tables no-padding',
									ref: 'appTables',
									children: (0, E.jsxs)('div', {
										className: 'content-block small-12',
										children: [
											(0, E.jsx)('div', {
												className: 'tabs-container generic-bordered-box',
												children: (0, E.jsx)(X.m, {
													segmented: !1,
													setting: 'issuedAssetsTab',
													className: 'account-tabs',
													tabsClass:
														'account-overview bordered-header content-block',
													contentClass: 'padding',
													children: (0, E.jsxs)(X.O, {
														title: 'account.user_issued_assets.issued_assets',
														children: [
															(0, E.jsx)('div', {
																className: 'content-block',
																children: (0, E.jsxs)('table', {
																	className: 'table dashboard-table',
																	children: [
																		(0, E.jsx)('thead', {
																			children: (0, E.jsxs)('tr', {
																				children: [
																					(0, E.jsx)('th', {
																						style: {textAlign: 'left'},
																						children: (0, E.jsx)(x(), {
																							content:
																								'account.user_issued_assets.symbol',
																						}),
																					}),
																					(0, E.jsx)('th', {
																						style: {textAlign: 'left'},
																						children: (0, E.jsx)(x(), {
																							content:
																								'explorer.asset.summary.asset_type',
																						}),
																					}),
																					(0, E.jsx)(x(), {
																						component: 'th',
																						content: 'markets.supply',
																						style: {textAlign: 'right'},
																					}),
																					(0, E.jsx)('th', {
																						style: {textAlign: 'right'},
																						children: (0, E.jsx)(x(), {
																							content:
																								'account.user_issued_assets.max_supply',
																						}),
																					}),
																					(0, E.jsx)('th', {
																						style: {textAlign: 'center'},
																						children: (0, E.jsx)(x(), {
																							content:
																								'transaction.trxTypes.asset_issue',
																						}),
																					}),
																					(0, E.jsx)('th', {
																						style: {textAlign: 'center'},
																						children: (0, E.jsx)(x(), {
																							content:
																								'transaction.trxTypes.asset_update',
																						}),
																					}),
																				],
																			}),
																		}),
																		(0, E.jsx)('tbody', {children: a}),
																	],
																}),
															}),
															(0, E.jsx)('div', {
																className: 'content-block',
																children: (0, E.jsx)('button', {
																	className: 'button',
																	onClick: this._createButtonClick.bind(
																		this,
																		r
																	),
																	children: (0, E.jsx)(x(), {
																		content:
																			'transaction.trxTypes.asset_create',
																	}),
																}),
															}),
														],
													}),
												}),
											}),
											(0, E.jsx)(G, {
												visible: this.state.isIssueAssetModalVisible,
												hideModal: this.hideIssueAssetModal,
												showModal: this.showIssueAssetModal,
												asset_to_issue: this.state.issue.asset_id,
											}),
										],
									}),
								});
							},
						},
					]),
					n && te(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			ie(ae, 'defaultProps', {
				symbol: '',
				name: '',
				description: '',
				max_supply: 0,
				precision: 0,
			}),
				ie(ae, 'propTypes', {symbol: v().string.isRequired}),
				(ae = (0, H.Z)(ae, {
					propNames: ['assetsList'],
					asList: !0,
					withDynamic: !0,
				}));
			const ce = (0, u.$)(ae, {
				listenTo: function () {
					return [k.Z];
				},
				getProps: function (e) {
					var t = (0, d.Map)(),
						n = (0, d.List)();
					return (
						e.account.get('assets', []).size
							? e.account.get('assets', []).forEach(function (e) {
									n = n.push(e);
							  })
							: (t = k.Z.getState().assets),
						{assets: t, assetsList: n}
					);
				},
			});
			var le = n(94184),
				ue = n.n(le),
				pe = n(52468),
				de = n(52233),
				he = n(33042),
				fe = n(44431),
				ye = n.n(fe),
				be = n(89203),
				me = n.n(be),
				ge = n(70534),
				ve = n(12028),
				_e = n(25108);
			function je(e) {
				return (
					(je =
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
					je(e)
				);
			}
			function xe(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function we(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ke(e, t, n) {
				return (
					t && we(e.prototype, t),
					n && we(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Oe(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Se(e, t);
			}
			function Se(e, t) {
				return (
					(Se =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Se(e, t)
				);
			}
			function Ce(e) {
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
						r = Ae(e);
					if (t) {
						var o = Ae(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return Pe(this, n);
				};
			}
			function Pe(e, t) {
				if (t && ('object' === je(t) || 'function' == typeof t)) return t;
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
			function Ae(e) {
				return (
					(Ae = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ae(e)
				);
			}
			function Ze(e, t, n) {
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
			var Me = new (ye())(me().GRAPHENE_MAX_SHARE_SUPPLY),
				Re = (function (e) {
					Oe(n, e);
					var t = Ce(n);
					function n(e) {
						var r;
						return (
							xe(this, n),
							((r = t.call(this, e)).state = {
								backingAsset: e.backingAsset.get('symbol'),
								error: null,
							}),
							r
						);
					}
					return (
						ke(n, [
							{
								key: '_onInputBackingAsset',
								value: function (e) {
									this.props.disableBackingAssetChange
										? this.props.disabledBackingAssetChangeCallback()
										: this.setState({
												backingAsset: e.toUpperCase(),
												error: null,
										  });
								},
							},
							{
								key: '_onFoundBackingAsset',
								value: function (e) {
									if (e) {
										var t =
												e.get('bitasset') &&
												de.BQ.getAsset(
													e.getIn([
														'bitasset',
														'options',
														'short_backing_asset',
													])
												),
											n =
												t &&
												t.get('bitasset') &&
												de.BQ.getAsset(
													t.getIn([
														'bitasset',
														'options',
														'short_backing_asset',
													])
												);
										n && '1.3.0' !== n
											? (this.setState({
													error: Z().translate(
														'account.user_issued_assets.error_too_deep'
													),
											  }),
											  this.props.onUpdate('invalid', !0))
											: e.getIn(['bitasset', 'is_prediction_market'])
											? (this.setState({
													error: Z().translate(
														'account.user_issued_assets.error_invalid'
													),
											  }),
											  this.props.onUpdate('invalid', !0))
											: this.props.isPredictionMarket &&
											  e.get('precision') !==
													parseInt(this.props.assetPrecision, 10)
											? (this.setState({
													error: Z().translate(
														'account.user_issued_assets.error_precision',
														{asset: this.props.assetSymbol}
													),
											  }),
											  this.props.onUpdate('invalid', !0))
											: (this.props.onUpdate(
													'short_backing_asset',
													e.get('id')
											  ),
											  this.props.onUpdate('invalid', !1));
									} else this.props.onUpdate('invalid', !0);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props.bitasset_opts,
										t = this.state.error;
									return (0, E.jsxs)('div', {
										className: 'small-12 grid-content',
										children: [
											(0, E.jsxs)('label', {
												children: [
													(0, E.jsx)(x(), {
														content:
															'account.user_issued_assets.feed_lifetime_sec',
													}),
													(0, E.jsx)('input', {
														type: 'number',
														value: e.feed_lifetime_sec / 60,
														onChange: this.props.onUpdate.bind(
															this,
															'feed_lifetime_sec'
														),
													}),
												],
											}),
											(0, E.jsxs)('label', {
												children: [
													(0, E.jsx)(x(), {
														content: 'account.user_issued_assets.minimum_feeds',
													}),
													(0, E.jsx)('input', {
														type: 'number',
														value: e.minimum_feeds,
														onChange: this.props.onUpdate.bind(
															this,
															'minimum_feeds'
														),
													}),
												],
											}),
											(0, E.jsxs)('label', {
												children: [
													(0, E.jsx)(x(), {
														content:
															'account.user_issued_assets.force_settlement_delay_sec',
													}),
													(0, E.jsx)('input', {
														type: 'number',
														value: e.force_settlement_delay_sec / 60,
														onChange: this.props.onUpdate.bind(
															this,
															'force_settlement_delay_sec'
														),
													}),
												],
											}),
											(0, E.jsxs)('label', {
												children: [
													(0, E.jsx)(x(), {
														content:
															'account.user_issued_assets.force_settlement_offset_percent',
													}),
													(0, E.jsx)('input', {
														type: 'number',
														value:
															e.force_settlement_offset_percent /
															me().GRAPHENE_1_PERCENT,
														onChange: this.props.onUpdate.bind(
															this,
															'force_settlement_offset_percent'
														),
													}),
												],
											}),
											(0, E.jsxs)('label', {
												children: [
													(0, E.jsx)(x(), {
														content:
															'account.user_issued_assets.maximum_force_settlement_volume',
													}),
													(0, E.jsx)('input', {
														type: 'number',
														value:
															e.maximum_force_settlement_volume /
															me().GRAPHENE_1_PERCENT,
														onChange: this.props.onUpdate.bind(
															this,
															'maximum_force_settlement_volume'
														),
													}),
												],
											}),
											(0, E.jsxs)('div', {
												className: 'grid-block no-margin small-12',
												children: [
													(0, E.jsx)(he.Z, {
														label: 'account.user_issued_assets.backing',
														onChange: this._onInputBackingAsset.bind(this),
														asset: this.state.backingAsset,
														assetInput: this.state.backingAsset,
														tabIndex: 1,
														style: {width: '100%', paddingRight: '10px'},
														onFound: this._onFoundBackingAsset.bind(this),
													}),
													t
														? (0, E.jsx)('div', {
																className: 'content-block has-error',
																children: t,
														  })
														: null,
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
			Ze(Re, 'propTypes', {
				backingAsset: c.Z.ChainAsset.isRequired,
				isUpdate: v().bool,
			}),
				Ze(Re, 'defaultProps', {isUpdate: !1}),
				(Re = (0, l.Z)(Re));
			var Ne = (function (e) {
				Oe(n, e);
				var t = Ce(n);
				function n(e) {
					var r;
					return (
						xe(this, n), ((r = t.call(this, e)).state = r.resetState(e)), r
					);
				}
				return (
					ke(n, [
						{
							key: 'resetState',
							value: function (e) {
								P.Z.get_asset_precision(4),
									P.Z.get_asset_precision(e.core.get('precision'));
								var t = this._getPermissions({isBitAsset: !1}),
									n = t.flagBooleans,
									r = t.permissionBooleans;
								return (
									de.BQ.getAsset('1.3.0').get('symbol'),
									{
										update: {
											symbol: '',
											precision: 4,
											max_supply: 1e5,
											max_market_fee: 0,
											market_fee_percent: 0,
											description: {main: ''},
											reward_percent: 0,
										},
										errors: {max_supply: null},
										isValid: !0,
										flagBooleans: n,
										permissionBooleans: r,
										isBitAsset: !1,
										is_prediction_market: !1,
										core_exchange_rate: {
											quote: {asset_id: null, amount: 1},
											base: {asset_id: '1.3.0', amount: 1},
										},
										bitasset_opts: {
											feed_lifetime_sec: 86400,
											minimum_feeds: 7,
											force_settlement_delay_sec: 86400,
											force_settlement_offset_percent:
												1 * me().GRAPHENE_1_PERCENT,
											maximum_force_settlement_volume:
												20 * me().GRAPHENE_1_PERCENT,
											short_backing_asset: '1.3.0',
										},
										marketInput: '',
									}
								);
							},
						},
						{
							key: '_getPermissions',
							value: function (e) {
								return {
									flagBooleans: Y.Z.getFlagBooleans(0, e.isBitAsset),
									permissionBooleans: Y.Z.getFlagBooleans('all', e.isBitAsset),
								};
							},
						},
						{
							key: '_createAsset',
							value: function (e) {
								e.preventDefault();
								var t = this.state,
									n = t.update,
									r = t.flagBooleans,
									o = t.permissionBooleans,
									s = t.core_exchange_rate,
									i = t.isBitAsset,
									a = t.is_prediction_market,
									c = t.bitasset_opts,
									l = this.props.account,
									u = Y.Z.getFlags(r, i),
									p = Y.Z.getPermissions(o, i);
								this.state.marketInput !== n.description.market &&
									(n.description.market = '');
								var d = JSON.stringify(n.description);
								w.Z.createAsset(l.get('id'), n, u, p, s, i, a, c, d).then(
									function (e) {
										_e.log(
											'... AssetActions.createAsset(account_id, update)',
											l.get('id'),
											n,
											u,
											p
										);
									}
								);
							},
						},
						{
							key: '_hasChanged',
							value: function () {
								return !P.Z.are_equal_shallow(
									this.state,
									this.resetState(this.props)
								);
							},
						},
						{
							key: '_reset',
							value: function (e) {
								e.preventDefault(), this.setState(this.resetState(this.props));
							},
						},
						{
							key: '_forcePositive',
							value: function (e) {
								return parseFloat(e) < 0 ? '0' : e;
							},
						},
						{
							key: '_onUpdateDescription',
							value: function (e, t) {
								var n = this.state.update,
									r = !0;
								switch (e) {
									case 'condition':
										if (t.target.value.length > 60) return void (r = !1);
										n.description[e] = t.target.value;
										break;
									case 'short_name':
										if (t.target.value.length > 32) return void (r = !1);
										n.description[e] = t.target.value;
										break;
									case 'market':
										n.description[e] = t;
										break;
									case 'visible':
										n.description[e] = !n.description[e];
										break;
									default:
										n.description[e] = t.target.value;
								}
								r && (this.forceUpdate(), this._validateEditFields(n));
							},
						},
						{
							key: 'onChangeBitAssetOpts',
							value: function (e, t) {
								var n = this.state,
									r = n.bitasset_opts,
									o = n.errors;
								switch (e) {
									case 'force_settlement_offset_percent':
									case 'maximum_force_settlement_volume':
										r[e] = parseFloat(t.target.value) * me().GRAPHENE_1_PERCENT;
										break;
									case 'minimum_feeds':
										r[e] = parseInt(t.target.value, 10);
										break;
									case 'feed_lifetime_sec':
									case 'force_settlement_delay_sec':
										_e.log(
											t.target.value,
											parseInt(60 * parseFloat(t.target.value), 10)
										),
											(r[e] = parseInt(60 * parseFloat(t.target.value), 10));
										break;
									case 'short_backing_asset':
										r[e] = t;
										break;
									case 'invalid':
										o.invalid_bitasset = t;
										break;
									default:
										r[e] = t.target.value;
								}
								var s = !o.symbol && !o.max_supply && !o.invalid_bitasset;
								this.setState({isValid: s, errors: o});
							},
						},
						{
							key: '_onUpdateInput',
							value: function (e, t) {
								var n = this.state,
									r = n.update,
									o = n.errors,
									s = !1,
									i = P.Z.get_asset_precision(this.state.update.precision),
									a = t.target,
									c = a.selectionStart,
									l = a.value;
								switch (e) {
									case 'market_fee_percent':
									case 'reward_percent':
									case 'precision':
										r[e] = this._forcePositive(a.value);
										break;
									case 'max_market_fee':
										if (new (ye())(l).times(i).gt(Me))
											return (
												(o.max_market_fee =
													'The number you tried to enter is too large'),
												this.setState({errors: o})
											);
										(a.value = P.Z.limitByPrecision(
											a.value,
											this.state.update.precision
										)),
											(r[e] = a.value);
										break;
									case 'max_supply':
										(s = !0),
											new RegExp(/[[:digit:]]/).test(a.value) ||
												(a.value = a.value.replace(/[^0-9.]/g, '')),
											'.' == a.value.charAt(0) && (a.value = '0.'),
											a.value.charAt(a.value.length) != a.value.search('.') &&
												a.value.substr(1),
											(a.value = P.Z.limitByPrecision(
												a.value,
												this.state.update.precision
											)),
											(r[e] = a.value);
										break;
									case 'symbol':
										s = !0;
										var u = a.value.toUpperCase(),
											p = new RegExp('^[.A-Z0-9]+$');
										if ('' !== u && !p.test(u)) break;
										de.BQ.getAsset(u), (r[e] = this._forcePositive(u));
										break;
									default:
										r[e] = a.value;
								}
								this.setState({update: r}, function () {
									if (s) {
										var t = c - (l.length - r[e].length);
										a.setSelectionRange(t, t);
									}
								}),
									this._validateEditFields(r);
							},
						},
						{
							key: '_validateEditFields',
							value: function (e) {
								var t = this.state.errors;
								(t.max_supply = null),
									(t.symbol = de.Jr.is_valid_symbol_error(e.symbol)),
									de.BQ.getAsset(e.symbol) &&
										(t.symbol = Z().translate(
											'account.user_issued_assets.exists'
										));
								try {
									t.max_supply =
										e.max_supply <= 0
											? Z().translate('account.user_issued_assets.max_positive')
											: new (ye())(e.max_supply)
													.times(Math.pow(10, e.precision))
													.gt(Me)
											? Z().translate('account.user_issued_assets.too_large')
											: null;
								} catch (e) {
									_e.log('err:', e),
										(t.max_supply = Z().translate(
											'account.user_issued_assets.too_large'
										));
								}
								var n = !t.symbol && !t.max_supply && !t.invalid_bitasset;
								this.setState({isValid: n, errors: t});
							},
						},
						{
							key: '_onFlagChange',
							value: function (e) {
								var t = this.state.flagBooleans;
								(t[e] = !t[e]), this.setState({flagBooleans: t});
							},
						},
						{
							key: '_onPermissionChange',
							value: function (e) {
								var t = this.state.permissionBooleans;
								(t[e] = !t[e]), this.setState({permissionBooleans: t});
							},
						},
						{
							key: '_onInputCoreAsset',
							value: function (e, t) {
								'quote' === e
									? this.setState({quoteAssetInput: t})
									: 'base' === e && this.setState({baseAssetInput: t});
							},
						},
						{
							key: '_onFoundCoreAsset',
							value: function (e, t) {
								if (t) {
									var n = this.state.core_exchange_rate;
									(n[e].asset_id = t.get('id')),
										this.setState({core_exchange_rate: n}),
										this._validateEditFields({
											max_supply: this.state.max_supply,
											core_exchange_rate: n,
										});
								}
							},
						},
						{
							key: '_onInputMarket',
							value: function (e) {
								this.setState({marketInput: e});
							},
						},
						{
							key: '_onFoundMarketAsset',
							value: function (e) {
								e && this._onUpdateDescription('market', e.get('symbol'));
							},
						},
						{
							key: '_onCoreRateChange',
							value: function (e, t) {
								var n, r;
								if ('quote' === e)
									(n = P.Z.limitByPrecision(
										t.target.value,
										this.state.update.precision
									)),
										(r = null);
								else {
									if (!t || !('amount' in t)) return;
									(n =
										'' == t.amount
											? '0'
											: P.Z.limitByPrecision(
													t.amount.toString().replace(/,/g, ''),
													this.props.core.get('precision')
											  )),
										(r = t.asset.get('id'));
								}
								(this.state.core_exchange_rate[e] = {amount: n, asset_id: r}),
									this.forceUpdate();
							},
						},
						{
							key: '_onToggleBitAsset',
							value: function () {
								this.state.update,
									(this.state.isBitAsset = !this.state.isBitAsset),
									this.state.isBitAsset ||
										(this.state.is_prediction_market = !1);
								var e = this._getPermissions(this.state),
									t = e.flagBooleans,
									n = e.permissionBooleans;
								(this.state.flagBooleans = t),
									(this.state.permissionBooleans = n),
									this.forceUpdate();
							},
						},
						{
							key: '_onTogglePM',
							value: function () {
								(this.state.is_prediction_market =
									!this.state.is_prediction_market),
									(this.state.update.precision =
										this.props.core.get('precision')),
									(this.state.core_exchange_rate.base.asset_id =
										this.props.core.get('id')),
									this.forceUpdate();
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.globalObject,
									n = e.core,
									r = this.state,
									o = r.errors,
									s = r.isValid,
									i = r.update,
									a = r.flagBooleans,
									c = r.permissionBooleans,
									l = r.core_exchange_rate,
									u = r.is_prediction_market,
									p = r.isBitAsset,
									d = r.bitasset_opts,
									h = i.symbol.length,
									f = 'N/A';
								3 === h
									? (f = (0, E.jsx)(O.Z, {
											amount: (0, ge.uQ)('asset_create', ['symbol3'], t),
											asset: '1.3.0',
									  }))
									: 4 === h
									? (f = (0, E.jsx)(O.Z, {
											amount: (0, ge.uQ)('asset_create', ['symbol4'], t),
											asset: '1.3.0',
									  }))
									: h > 4 &&
									  (f = (0, E.jsx)(O.Z, {
											amount: (0, ge.uQ)('asset_create', ['long_symbol'], t),
											asset: '1.3.0',
									  }));
								var y = [],
									b = function (e, t, n) {
										return (0, E.jsx)(
											'table',
											{
												className: 'table',
												children: (0, E.jsx)('tbody', {
													children: (0, E.jsxs)('tr', {
														children: [
															(0, E.jsxs)('td', {
																style: {border: 'none', width: '80%'},
																children: [
																	(0, E.jsx)(x(), {
																		content:
																			'account.user_issued_assets.'.concat(e),
																	}),
																	':',
																],
															}),
															(0, E.jsx)('td', {
																style: {border: 'none', textAlign: 'right'},
																children: (0, E.jsx)(ve.Z, {
																	checked: n,
																	onChange: t,
																}),
															}),
														],
													}),
												}),
											},
											'table_' + e
										);
									};
								for (var m in c)
									c[m] &&
										'charge_market_fee' !== m &&
										y.push(b(m, this._onFlagChange.bind(this, m), a[m]));
								y.push(
									b(
										'visible',
										this._onUpdateDescription.bind(this, 'visible'),
										!i.description.visible && !1 === i.description.visible
									)
								);
								var g = [];
								for (var v in c)
									g.push(
										(0, E.jsx)(
											'table',
											{
												className: 'table',
												children: (0, E.jsx)('tbody', {
													children: (0, E.jsxs)('tr', {
														children: [
															(0, E.jsxs)('td', {
																style: {border: 'none', width: '80%'},
																children: [
																	(0, E.jsx)(x(), {
																		content:
																			'account.user_issued_assets.'.concat(v),
																	}),
																	':',
																],
															}),
															(0, E.jsx)('td', {
																style: {border: 'none'},
																children: (0, E.jsx)(ve.Z, {
																	checked: c[v],
																	onChange: this._onPermissionChange.bind(
																		this,
																		v
																	),
																}),
															}),
														],
													}),
												}),
											},
											'table_' + v
										)
									);
								var _ = (0, E.jsxs)('div', {
									children: [
										(0, E.jsx)('button', {
											className: 'button',
											onClick: this._reset.bind(this),
											value: Z().translate('account.perm.reset'),
											children: (0, E.jsx)(x(), {
												content: 'account.perm.reset',
											}),
										}),
										(0, E.jsx)('button', {
											className: ue()('button', {disabled: !s}),
											onClick: this._createAsset.bind(this),
											children: (0, E.jsx)(x(), {
												content: 'header.create_asset',
											}),
										}),
									],
								});
								return (0, E.jsx)('div', {
									className: 'grid-content app-tables no-padding',
									ref: 'appTables',
									children: (0, E.jsx)('div', {
										className: 'content-block small-12',
										children: (0, E.jsxs)('div', {
											className: 'tabs-container generic-bordered-box',
											children: [
												(0, E.jsx)('div', {
													className: 'tabs-header',
													children: (0, E.jsx)('h3', {
														children: (0, E.jsx)(x(), {
															content: 'header.create_asset',
														}),
													}),
												}),
												(0, E.jsxs)(X.m, {
													setting: 'createAssetTab',
													className: 'account-tabs',
													tabsClass:
														'account-overview no-padding bordered-header content-block',
													contentClass:
														'grid-block shrink small-vertical medium-horizontal padding',
													segmented: !1,
													actionButtons: _,
													children: [
														(0, E.jsx)(X.O, {
															title: 'account.user_issued_assets.primary',
															children: (0, E.jsxs)('div', {
																className: 'small-12 grid-content',
																children: [
																	(0, E.jsxs)('label', {
																		children: [
																			(0, E.jsx)(x(), {
																				content:
																					'account.user_issued_assets.symbol',
																			}),
																			(0, E.jsx)('input', {
																				type: 'text',
																				value: i.symbol,
																				onChange: this._onUpdateInput.bind(
																					this,
																					'symbol'
																				),
																			}),
																		],
																	}),
																	o.symbol
																		? (0, E.jsx)('p', {
																				className: 'grid-content has-error',
																				children: o.symbol,
																		  })
																		: null,
																	(0, E.jsxs)('label', {
																		children: [
																			(0, E.jsx)(x(), {
																				content:
																					'account.user_issued_assets.max_supply',
																			}),
																			' ',
																			i.symbol
																				? (0, E.jsxs)('span', {
																						children: ['(', i.symbol, ')'],
																				  })
																				: null,
																			(0, E.jsx)('input', {
																				type: 'text',
																				value: i.max_supply,
																				onChange: this._onUpdateInput.bind(
																					this,
																					'max_supply'
																				),
																			}),
																		],
																	}),
																	o.max_supply
																		? (0, E.jsx)('p', {
																				className: 'grid-content has-error',
																				children: o.max_supply,
																		  })
																		: null,
																	(0, E.jsxs)('label', {
																		children: [
																			(0, E.jsx)(x(), {
																				content:
																					'account.user_issued_assets.decimals',
																			}),
																			(0, E.jsx)('input', {
																				min: '0',
																				max: '8',
																				step: '1',
																				type: 'range',
																				value: i.precision,
																				onChange: this._onUpdateInput.bind(
																					this,
																					'precision'
																				),
																			}),
																		],
																	}),
																	(0, E.jsx)('p', {children: i.precision}),
																	(0, E.jsx)('div', {
																		style: {marginBottom: 10},
																		className: 'txtlabel cancel',
																		children: (0, E.jsx)(x(), {
																			content:
																				'account.user_issued_assets.precision_warning',
																		}),
																	}),
																	(0, E.jsx)('table', {
																		className: 'table',
																		style: {width: 'inherit'},
																		children: (0, E.jsx)('tbody', {
																			children: (0, E.jsxs)('tr', {
																				children: [
																					(0, E.jsxs)('td', {
																						style: {border: 'none'},
																						children: [
																							(0, E.jsx)(x(), {
																								content:
																									'account.user_issued_assets.mpa',
																							}),
																							':',
																						],
																					}),
																					(0, E.jsx)('td', {
																						style: {border: 'none'},
																						children: (0, E.jsx)(ve.Z, {
																							checked: p,
																							onChange:
																								this._onToggleBitAsset.bind(
																									this
																								),
																						}),
																					}),
																				],
																			}),
																		}),
																	}),
																	p
																		? (0, E.jsx)('table', {
																				className: 'table',
																				style: {width: 'inherit'},
																				children: (0, E.jsx)('tbody', {
																					children: (0, E.jsxs)('tr', {
																						children: [
																							(0, E.jsxs)('td', {
																								style: {border: 'none'},
																								children: [
																									(0, E.jsx)(x(), {
																										content:
																											'account.user_issued_assets.pm',
																									}),
																									':',
																								],
																							}),
																							(0, E.jsx)('td', {
																								style: {border: 'none'},
																								children: (0, E.jsx)(ve.Z, {
																									checked: u,
																									onChange:
																										this._onTogglePM.bind(this),
																								}),
																							}),
																						],
																					}),
																				}),
																		  })
																		: null,
																	(0, E.jsx)(x(), {
																		component: 'h3',
																		content:
																			'account.user_issued_assets.core_exchange_rate',
																	}),
																	(0, E.jsxs)('label', {
																		children: [
																			(0, E.jsxs)('div', {
																				className: 'grid-block no-margin',
																				children: [
																					o.quote_asset
																						? (0, E.jsx)('p', {
																								className:
																									'grid-content has-error',
																								children: o.quote_asset,
																						  })
																						: null,
																					o.base_asset
																						? (0, E.jsx)('p', {
																								className:
																									'grid-content has-error',
																								children: o.base_asset,
																						  })
																						: null,
																					(0, E.jsx)('div', {
																						className:
																							'grid-block no-margin small-12 medium-6',
																						children: (0, E.jsxs)('div', {
																							className: 'amount-selector',
																							style: {
																								width: '100%',
																								paddingRight: '10px',
																							},
																							children: [
																								(0, E.jsx)(x(), {
																									component: 'label',
																									content:
																										'account.user_issued_assets.quote',
																								}),
																								(0, E.jsx)('div', {
																									className: 'inline-label',
																									children: (0, E.jsx)(
																										'input',
																										{
																											type: 'text',
																											placeholder: '0.0',
																											onChange:
																												this._onCoreRateChange.bind(
																													this,
																													'quote'
																												),
																											value: l.quote.amount,
																										}
																									),
																								}),
																							],
																						}),
																					}),
																					(0, E.jsx)('div', {
																						className:
																							'grid-block no-margin small-12 medium-6',
																						children: (0, E.jsx)(N.Z, {
																							label:
																								'account.user_issued_assets.base',
																							amount: l.base.amount,
																							onChange:
																								this._onCoreRateChange.bind(
																									this,
																									'base'
																								),
																							asset: l.base.asset_id,
																							assets: [l.base.asset_id],
																							placeholder: '0.0',
																							tabIndex: 1,
																							style: {
																								width: '100%',
																								paddingLeft: '10px',
																							},
																						}),
																					}),
																				],
																			}),
																			(0, E.jsx)('div', {
																				children: (0, E.jsxs)('h5', {
																					children: [
																						(0, E.jsx)(x(), {
																							content: 'exchange.price',
																						}),
																						(0, E.jsxs)('span', {
																							children: [
																								':',
																								' ',
																								P.Z.format_number(
																									P.Z.get_asset_price(
																										l.quote.amount *
																											P.Z.get_asset_precision(
																												i.precision
																											),
																										{precision: i.precision},
																										l.base.amount *
																											P.Z.get_asset_precision(
																												n
																											),
																										n
																									),
																									2 +
																										(parseInt(
																											i.precision,
																											10
																										) || 8)
																								),
																							],
																						}),
																						(0, E.jsxs)('span', {
																							children: [
																								' ',
																								i.symbol,
																								'/',
																								n.get('symbol'),
																							],
																						}),
																					],
																				}),
																			}),
																		],
																	}),
																	(0, E.jsxs)('div', {
																		children: [
																			(0, E.jsx)(x(), {
																				content:
																					'account.user_issued_assets.cer_warning_1',
																				component: 'label',
																				className: 'has-error',
																			}),
																			(0, E.jsx)(x(), {
																				content:
																					'account.user_issued_assets.cer_warning_2',
																				component: 'p',
																			}),
																		],
																	}),
																	(0, E.jsxs)('p', {
																		children: [
																			(0, E.jsx)(x(), {
																				content:
																					'account.user_issued_assets.approx_fee',
																			}),
																			': ',
																			f,
																		],
																	}),
																],
															}),
														}),
														(0, E.jsx)(X.O, {
															title: 'account.user_issued_assets.description',
															children: (0, E.jsxs)('div', {
																className: 'small-12 grid-content',
																children: [
																	(0, E.jsx)(x(), {
																		component: 'label',
																		content:
																			'account.user_issued_assets.description',
																	}),
																	(0, E.jsx)('label', {
																		children: (0, E.jsx)('textarea', {
																			style: {height: '7rem'},
																			rows: '1',
																			value: i.description.main,
																			onChange: this._onUpdateDescription.bind(
																				this,
																				'main'
																			),
																		}),
																	}),
																	(0, E.jsx)(x(), {
																		component: 'label',
																		content: 'account.user_issued_assets.short',
																	}),
																	(0, E.jsx)('label', {
																		children: (0, E.jsx)('input', {
																			type: 'text',
																			rows: '1',
																			value: i.description.short_name,
																			onChange: this._onUpdateDescription.bind(
																				this,
																				'short_name'
																			),
																		}),
																	}),
																	(0, E.jsx)(x(), {
																		component: 'label',
																		content:
																			'account.user_issued_assets.market',
																	}),
																	(0, E.jsx)(he.Z, {
																		label: 'account.user_issued_assets.name',
																		onChange: this._onInputMarket.bind(this),
																		asset: this.state.marketInput,
																		assetInput: this.state.marketInput,
																		style: {
																			width: '100%',
																			paddingRight: '10px',
																		},
																		onFound:
																			this._onFoundMarketAsset.bind(this),
																	}),
																	u
																		? (0, E.jsxs)('div', {
																				children: [
																					(0, E.jsx)(x(), {
																						component: 'h3',
																						content:
																							'account.user_issued_assets.condition',
																					}),
																					(0, E.jsx)('label', {
																						children: (0, E.jsx)('input', {
																							type: 'text',
																							rows: '1',
																							value: i.description.condition,
																							onChange:
																								this._onUpdateDescription.bind(
																									this,
																									'condition'
																								),
																						}),
																					}),
																					(0, E.jsx)(x(), {
																						component: 'h3',
																						content:
																							'account.user_issued_assets.expiry',
																					}),
																					(0, E.jsx)('label', {
																						children: (0, E.jsx)('input', {
																							type: 'date',
																							value: i.description.expiry,
																							onChange:
																								this._onUpdateDescription.bind(
																									this,
																									'expiry'
																								),
																						}),
																					}),
																				],
																		  })
																		: null,
																],
															}),
														}),
														p
															? (0, E.jsx)(X.O, {
																	title:
																		'account.user_issued_assets.bitasset_opts',
																	children: (0, E.jsx)(Re, {
																		bitasset_opts: d,
																		onUpdate:
																			this.onChangeBitAssetOpts.bind(this),
																		backingAsset: d.short_backing_asset,
																		assetPrecision: i.precision,
																		assetSymbol: i.symbol,
																		isPredictionMarket: u,
																	}),
															  })
															: null,
														(0, E.jsx)(X.O, {
															title: 'account.permissions',
															children: (0, E.jsxs)('div', {
																className: 'small-12 grid-content',
																children: [
																	(0, E.jsx)('div', {
																		style: {maxWidth: 800},
																		children: (0, E.jsx)(pe.Z, {
																			path: 'components/AccountAssetCreate',
																			section: 'permissions',
																		}),
																	}),
																	g,
																],
															}),
														}),
														(0, E.jsx)(X.O, {
															title: 'account.user_issued_assets.flags',
															children: (0, E.jsxs)('div', {
																className: 'small-12 grid-content',
																children: [
																	(0, E.jsx)('div', {
																		style: {maxWidth: 800},
																		children: (0, E.jsx)(pe.Z, {
																			path: 'components/AccountAssetCreate',
																			section: 'flags',
																		}),
																	}),
																	c.charge_market_fee
																		? (0, E.jsxs)('div', {
																				children: [
																					(0, E.jsxs)('h3', {
																						children: [
																							(0, E.jsx)(x(), {
																								component: 'span',
																								content:
																									'account.user_issued_assets.market_fee',
																								style: {paddingRight: '20px'},
																							}),
																							(0, E.jsx)(ve.Z, {
																								checked: a.charge_market_fee,
																								onChange:
																									this._onFlagChange.bind(
																										this,
																										'charge_market_fee'
																									),
																							}),
																						],
																					}),
																					(0, E.jsxs)('div', {
																						className: ue()({
																							disabled: !a.charge_market_fee,
																						}),
																						style: {
																							marginTop: '10px',
																							marginLeft: '30px',
																						},
																						children: [
																							(0, E.jsxs)('label', {
																								children: [
																									(0, E.jsx)(x(), {
																										content:
																											'account.user_issued_assets.market_fee',
																									}),
																									' ',
																									'(%)',
																									(0, E.jsx)('input', {
																										type: 'number',
																										value: i.market_fee_percent,
																										onChange:
																											this._onUpdateInput.bind(
																												this,
																												'market_fee_percent'
																											),
																									}),
																								],
																							}),
																							(0, E.jsxs)('label', {
																								children: [
																									(0, E.jsx)(x(), {
																										content:
																											'account.user_issued_assets.max_market_fee',
																									}),
																									' ',
																									'(',
																									i.symbol,
																									')',
																									(0, E.jsx)('input', {
																										type: 'number',
																										value: i.max_market_fee,
																										onChange:
																											this._onUpdateInput.bind(
																												this,
																												'max_market_fee'
																											),
																									}),
																								],
																							}),
																							(0, E.jsx)('div', {
																								className: ue()({
																									disabled: !(
																										i.market_fee_percent > 0
																									),
																								}),
																								children: (0, E.jsxs)('label', {
																									children: [
																										(0, E.jsx)(x(), {
																											content:
																												'account.user_issued_assets.reward_percent',
																										}),
																										' ',
																										'(%)',
																										(0, E.jsx)('input', {
																											type: 'number',
																											value: i.reward_percent,
																											onChange:
																												this._onUpdateInput.bind(
																													this,
																													'reward_percent'
																												),
																										}),
																									],
																								}),
																							}),
																							o.max_market_fee
																								? (0, E.jsx)('p', {
																										className:
																											'grid-content has-error',
																										children: o.max_market_fee,
																								  })
																								: null,
																						],
																					}),
																				],
																		  })
																		: null,
																	(0, E.jsx)('h3', {
																		children: (0, E.jsx)(x(), {
																			content:
																				'account.user_issued_assets.flags',
																		}),
																	}),
																	y,
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
					n
				);
			})(r.Component);
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
			function Te(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Be(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ee(e, t) {
				return (
					(Ee =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ee(e, t)
				);
			}
			function De(e, t) {
				if (t && ('object' === Ie(t) || 'function' == typeof t)) return t;
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
			function Ve(e) {
				return (
					(Ve = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ve(e)
				);
			}
			function qe(e, t, n) {
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
			Ze(Ne, 'propTypes', {
				core: c.Z.ChainAsset.isRequired,
				globalObject: c.Z.ChainObject.isRequired,
			}),
				Ze(Ne, 'defaultProps', {globalObject: '2.0.0', core: '1.3.0'}),
				(Ne = (0, l.Z)(Ne));
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
						t && Ee(e, t);
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
								t = Ve(r);
							if (o) {
								var n = Ve(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return De(this, e);
						});
				function i() {
					return Te(this, i), s.apply(this, arguments);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'getFee',
							value: function () {
								return (0, ge.uQ)(
									this.props.opType,
									this.props.options,
									this.props.globalObject
								);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.opType,
									n = e.options,
									r = e.globalObject;
								if (!t || !n || !r) return null;
								var o = (0, ge.uQ)(t, n, r);
								return (0, E.jsx)(O.Z, {amount: o, asset: '1.3.0'});
							},
						},
					]) && Be(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			qe(Fe, 'propTypes', {
				globalObject: c.Z.ChainObject.isRequired,
				opType: v().string,
				options: v().array,
			}),
				qe(Fe, 'defaultProps', {globalObject: '2.0.0', options: []});
			const Ue = (0, l.Z)(Fe);
			var Le = n(62746),
				ze = n(68769),
				We = n(77335),
				Ke = n(60521);
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
			function Qe(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ge(e, t) {
				return (
					(Ge =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ge(e, t)
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
			var Xe = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Ge(e, t);
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
								t = He(r);
							if (o) {
								var n = He(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Ye(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this)).state = {
							listType: e.assetWhiteListType,
							accountTable: -1 === e.assetWhiteListType.indexOf('markets'),
							listTypes: [
								'whitelist_authorities',
								'blacklist_authorities',
								'whitelist_markets',
								'blacklist_markets',
								'whitelist_market_fee_sharing',
							],
							assetInput: null,
							asset_id: null,
						}),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'renderAccountTables',
							value: function () {
								var e = this,
									t = this.state.listType,
									n = !1,
									r = 'explorer.asset.whitelist.enable_flag';
								return (
									'whitelist_market_fee_sharing' === t
										? this.props.marketFeeEnabled ||
										  ((n = !0),
										  (r = 'explorer.asset.whitelist.market_fee_enable_flag'))
										: (n = !this.props.whiteListEnabled),
									n
										? (0, E.jsx)('div', {
												children: (0, E.jsx)(x(), {
													className: 'txtlabel cancel',
													component: 'p',
													content: r,
												}),
										  })
										: (0, E.jsxs)('div', {
												children: [
													(0, E.jsxs)('table', {
														className: 'table dashboard-table table-hover',
														children: [
															(0, E.jsx)('thead', {
																children: (0, E.jsxs)('tr', {
																	children: [
																		(0, E.jsx)('th', {
																			children: (0, E.jsx)(x(), {
																				content: 'explorer.account.title',
																			}),
																		}),
																		(0, E.jsx)('th', {
																			children: (0, E.jsx)(x(), {
																				content: 'account.perm.remove_text',
																			}),
																		}),
																	],
																}),
															}),
															(0, E.jsx)('tbody', {
																children: this.props[t].map(function (n) {
																	return (0,
																	E.jsxs)('tr', {children: [(0, E.jsx)('td', {children: (0, E.jsx)(ze.Z, {account: n})}), (0, E.jsx)('td', {className: 'clickable', onClick: e.props.onChangeList.bind(e, t, 'remove', n), children: (0, E.jsx)($.Z, {name: 'cross-circle', title: 'icons.cross_circle.remove', className: 'icon-14px'})})]}, n);
																}),
															}),
														],
													}),
													(0, E.jsx)('div', {
														style: {paddingTop: '2rem'},
														children: (0, E.jsx)(R.Z, {
															label: 'account.whitelist.'.concat(t),
															accountName: this.props.authority_name,
															account: this.props.authority_name,
															onChange: this.props.onAccountNameChanged.bind(
																this,
																'authority_name'
															),
															onAccountChanged:
																this.props.onAccountChanged.bind(
																	this,
																	'new_authority_id'
																),
															error: null,
															tabIndex: 1,
															action_label: 'account.perm.confirm_add',
															onAction: this.props.onChangeList.bind(
																this,
																t,
																'add',
																this.props.new_authority_id
															),
														}),
													}),
												],
										  })
								);
							},
						},
						{
							key: '_onAssetChange',
							value: function (e) {
								this.setState({assetInput: e});
							},
						},
						{
							key: '_onAssetFound',
							value: function (e) {
								this.setState({asset_id: e ? e.get('id') : null});
							},
						},
						{
							key: 'renderMarketTable',
							value: function () {
								var e = this,
									t = this.state.listType;
								return (0, E.jsxs)('div', {
									children: [
										(0, E.jsxs)('table', {
											className: 'table dashboard-table table-hover',
											children: [
												(0, E.jsx)('thead', {
													children: (0, E.jsxs)('tr', {
														children: [
															(0, E.jsx)('th', {
																children: (0, E.jsx)(x(), {
																	content: 'explorer.asset.title',
																}),
															}),
															(0, E.jsx)('th', {
																children: (0, E.jsx)(x(), {
																	content: 'account.perm.remove_text',
																}),
															}),
														],
													}),
												}),
												(0, E.jsx)('tbody', {
													children: this.props[t].map(function (n) {
														return (0,
														E.jsxs)('tr', {children: [(0, E.jsx)('td', {children: (0, E.jsx)(We.Z, {asset: n})}), (0, E.jsx)('td', {className: 'clickable', onClick: e.props.onChangeList.bind(e, t, 'remove', n), children: (0, E.jsx)($.Z, {name: 'cross-circle', title: 'icons.cross_circle.remove', className: 'icon-14px'})})]}, n);
													}),
												}),
											],
										}),
										(0, E.jsx)('div', {
											style: {paddingTop: '2rem'},
											children: (0, E.jsx)(he.Z, {
												label: 'explorer.asset.whitelist.'.concat(t),
												onChange: this._onAssetChange.bind(this),
												asset: this.state.assetInput,
												assetInput: this.state.assetInput,
												tabIndex: 1,
												style: {width: '100%'},
												onFound: this._onAssetFound.bind(this),
												action_label: 'account.perm.confirm_add',
												onAction: this.props.onChangeList.bind(
													this,
													t,
													'add',
													this.state.asset_id
												),
											}),
										}),
									],
								});
							},
						},
						{
							key: '_onSwitchType',
							value: function (e) {
								this.setState({
									listType: e,
									accountTable: -1 === e.indexOf('markets'),
								}),
									Ke.Z.changeViewSetting({assetWhiteListType: e});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.state,
									n = t.accountTable,
									r =
										(t.listType,
										this.state.listTypes.indexOf(this.state.listType));
								return (0, E.jsx)('div', {
									className: 'small-12 large-8 large-offset-2 grid-content',
									children: (0, E.jsxs)('div', {
										children: [
											(0, E.jsx)('div', {
												className: 'header-selector',
												style: {paddingBottom: '2rem'},
												children: (0, E.jsx)('div', {
													className: 'selector',
													children: this.state.listTypes.map(function (t, n) {
														return (0,
														E.jsx)('div', {className: ue()('inline-block', {inactive: r !== n}), onClick: e._onSwitchType.bind(e, t), children: (0, E.jsx)(x(), {content: 'explorer.asset.whitelist.'.concat(t)})}, t);
													}),
												}),
											}),
											n ? this.renderAccountTables() : this.renderMarketTable(),
											this.props.children,
										],
									}),
								});
							},
						},
					]) && Qe(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			const $e = (0, u.$)(Xe, {
				listenTo: function () {
					return [i.Z];
				},
				getProps: function () {
					return {
						assetWhiteListType: i.Z.getState().viewSettings.get(
							'assetWhiteListType',
							'whitelist_authorities'
						),
					};
				},
			});
			function et(e) {
				return (
					(et =
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
					et(e)
				);
			}
			function tt(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function nt(e, t) {
				return (
					(nt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					nt(e, t)
				);
			}
			function rt(e, t) {
				if (t && ('object' === et(t) || 'function' == typeof t)) return t;
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
			function ot(e) {
				return (
					(ot = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ot(e)
				);
			}
			var st = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && nt(e, t);
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
									t = ot(r);
								if (o) {
									var n = ot(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return rt(this, e);
							});
					function i(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, i),
							((t = s.call(this, e)).state = {producer_name: null}),
							t
						);
					}
					return (
						(t = i),
						(n = [
							{
								key: 'onAccountChanged',
								value: function (e) {
									this.setState({new_producer_id: e ? e.get('id') : null});
								},
							},
							{
								key: 'onAccountNameChanged',
								value: function (e) {
									this.setState({producer_name: e});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props,
										n = t.witnessFed,
										r = t.committeeFed;
									return n || r
										? (0, E.jsxs)('div', {
												className:
													'grid-content small-12 large-8 large-offset-2',
												children: [
													(0, E.jsx)(x(), {
														component: 'p',
														content:
															'account.user_issued_assets.feed_not_allowed_1',
														className: 'has-error',
													}),
													(0, E.jsx)(x(), {
														component: 'p',
														content:
															'account.user_issued_assets.feed_not_allowed_2',
													}),
												],
										  })
										: (0, E.jsxs)('div', {
												className:
													'grid-content small-12 large-8 large-offset-2',
												children: [
													(0, E.jsxs)('table', {
														className: 'table dashboard-table table-hover',
														children: [
															(0, E.jsx)('thead', {
																children: (0, E.jsxs)('tr', {
																	children: [
																		(0, E.jsx)('th', {}),
																		(0, E.jsx)('th', {
																			style: {textAlign: 'left'},
																			children: (0, E.jsx)(x(), {
																				content: 'explorer.account.title',
																			}),
																		}),
																		(0, E.jsx)('th', {
																			children: (0, E.jsx)(x(), {
																				content: 'account.perm.remove_text',
																			}),
																		}),
																	],
																}),
															}),
															(0, E.jsx)('tbody', {
																children: this.props.producers.map(function (
																	t,
																	n
																) {
																	return (0, E.jsxs)(
																		'tr',
																		{
																			children: [
																				(0, E.jsxs)('td', {
																					style: {textAlign: 'left'},
																					children: ['#', n + 1],
																				}),
																				(0, E.jsx)('td', {
																					style: {textAlign: 'left'},
																					children: (0, E.jsx)(ze.Z, {
																						account: t,
																					}),
																				}),
																				(0, E.jsx)('td', {
																					className: 'clickable',
																					onClick: e.props.onChangeList.bind(
																						e,
																						'remove',
																						t
																					),
																					children: (0, E.jsx)($.Z, {
																						name: 'cross-circle',
																						title: 'icons.cross_circle.remove',
																						className: 'icon-14px',
																					}),
																				}),
																			],
																		},
																		t
																	);
																}),
															}),
														],
													}),
													(0, E.jsx)('div', {
														style: {paddingTop: '2rem'},
														children: (0, E.jsx)(R.Z, {
															label: 'account.user_issued_assets.add_feed',
															accountName: this.state.producer_name,
															account: this.state.producer_name,
															onChange: this.onAccountNameChanged.bind(this),
															onAccountChanged:
																this.onAccountChanged.bind(this),
															error: null,
															tabIndex: 1,
															action_label: 'account.perm.confirm_add',
															onAction: this.props.onChangeList.bind(
																this,
																'add',
																this.state.new_producer_id
															),
														}),
													}),
												],
										  });
								},
							},
						]) && tt(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						i
					);
				})(r.Component),
				it = n(24300),
				at = n(61580),
				ct = n(25108);
			function lt(e) {
				return (
					(lt =
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
					lt(e)
				);
			}
			function ut(e, t) {
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
			function pt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? ut(Object(n), !0).forEach(function (t) {
								jt(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: ut(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function dt(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ht(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ft(e, t, n) {
				return (
					t && ht(e.prototype, t),
					n && ht(e, n),
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
					t && bt(e, t);
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
			function mt(e) {
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
						r = _t(e);
					if (t) {
						var o = _t(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return gt(this, n);
				};
			}
			function gt(e, t) {
				if (t && ('object' === lt(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return vt(e);
			}
			function vt(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
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
			function jt(e, t, n) {
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
			var xt = new (ye())(me().GRAPHENE_MAX_SHARE_SUPPLY),
				wt = function () {
					I.Z.error({
						message: Z().translate(
							'account.user_issued_assets.invalid_backing_asset_change'
						),
					});
				},
				kt = (function (e) {
					yt(n, e);
					var t = mt(n);
					function n(e) {
						var r;
						return (
							dt(this, n),
							((r = t.call(this, e)).state = r.resetState(e)),
							(r.showAssetUpdateConfirmationModal =
								r.showAssetUpdateConfirmationModal.bind(vt(r))),
							(r.hideAssetUpdateConfirmationModal =
								r.hideAssetUpdateConfirmationModal.bind(vt(r))),
							r
						);
					}
					return (
						ft(n, [
							{
								key: '_openConfirm',
								value: function () {
									this.showAssetUpdateConfirmationModal();
								},
							},
							{
								key: '_cancelConfirm',
								value: function () {
									this.hideAssetUpdateConfirmationModal();
								},
							},
							{
								key: 'resetState',
								value: function (e) {
									var t = e.asset.toJS(),
										n = void 0 !== t.bitasset_data_id,
										r = P.Z.get_asset_precision(t.precision),
										o = P.Z.get_asset_precision(e.core.get('precision')),
										s = new (ye())(t.options.max_market_fee).div(r).toString(),
										i = new (ye())(t.options.max_supply).div(r).toString(),
										a = t.options.core_exchange_rate;
									(a.quote.amount =
										a.quote.asset_id === t.id
											? new (ye())(a.quote.amount).div(r).toString()
											: new (ye())(a.quote.amount).div(o).toString()),
										(a.base.amount =
											a.base.asset_id === t.id
												? new (ye())(a.base.amount).div(r).toString()
												: new (ye())(a.base.amount).div(o).toString());
									var c = Y.Z.getFlagBooleans(t.options.flags, n),
										l = Y.Z.getFlagBooleans(t.options.issuer_permissions, n);
									(t.options.market_fee_percent /= 100),
										null !== t.options.extensions &&
											null !== t.options.extensions.reward_percent &&
											(t.options.extensions.reward_percent /= 100);
									var u = de.BQ.getAsset(a.quote.asset_id).get('symbol'),
										p = de.BQ.getAsset(a.base.asset_id).get('symbol'),
										d = e.asset.getIn([
											'options',
											'extensions',
											'whitelist_market_fee_sharing',
										]);
									return {
										isAssetUpdateConfirmationModalVisible: !1,
										update: {
											max_supply: i,
											max_market_fee: s,
											reward_percent:
												void 0 ===
												e.asset.getIn([
													'options',
													'extensions',
													'reward_percent',
												])
													? void 0
													: t.options.extensions.reward_percent,
											market_fee_percent: t.options.market_fee_percent,
											description: Y.Z.parseDescription(t.options.description),
										},
										core_exchange_rate: a,
										issuer: t.issuer,
										new_issuer_account_id: null,
										new_funder_account: e.account.get('id'),
										asset_to_update: t.id,
										errors: {max_supply: null},
										new_authority_id: null,
										authority_name: null,
										isValid: !0,
										flagBooleans: c,
										permissionBooleans: l,
										isBitAsset: n,
										coreRateQuoteAssetName: u,
										quoteAssetInput: u,
										coreRateBaseAssetName: p,
										baseAssetInput: p,
										claimFeesAmount: 0,
										bitasset_opts: n ? t.bitasset.options : null,
										original_bitasset_opts: n
											? e.asset.getIn(['bitasset', 'options']).toJS()
											: null,
										marketInput: '',
										whitelist_authorities: e.asset.getIn([
											'options',
											'whitelist_authorities',
										]),
										blacklist_authorities: e.asset.getIn([
											'options',
											'blacklist_authorities',
										]),
										whitelist_markets: e.asset.getIn([
											'options',
											'whitelist_markets',
										]),
										whitelist_market_fee_sharing: d,
										blacklist_markets: e.asset.getIn([
											'options',
											'blacklist_markets',
										]),
										maxFeedProducers: e.globalObject.getIn([
											'parameters',
											'maximum_asset_feed_publishers',
										]),
										feedProducers: n
											? e.asset
													.getIn(['bitasset', 'feeds'], [])
													.map(function (e) {
														return e.first();
													})
											: null,
										originalFeedProducers: n
											? e.asset
													.getIn(['bitasset', 'feeds'], [])
													.map(function (e) {
														return e.first();
													})
											: null,
									};
								},
							},
							{
								key: 'hideAssetUpdateConfirmationModal',
								value: function () {
									this.setState({isAssetUpdateConfirmationModalVisible: !1});
								},
							},
							{
								key: 'showAssetUpdateConfirmationModal',
								value: function () {
									this.setState({isAssetUpdateConfirmationModalVisible: !0});
								},
							},
							{
								key: 'assetChanged',
								value: function () {
									var e = this.state,
										t = this.resetState(this.props);
									return (
										JSON.stringify(e.update) !== JSON.stringify(t.update) ||
										JSON.stringify(e.core_exchange_rate) !==
											JSON.stringify(t.core_exchange_rate) ||
										(null !== e.new_issuer_account_id &&
											e.new_issuer_account_id !== e.issuer) ||
										JSON.stringify(e.flagBooleans) !==
											JSON.stringify(t.flagBooleans) ||
										JSON.stringify(e.permissionBooleans) !==
											JSON.stringify(t.permissionBooleans) ||
										JSON.stringify(e.whitelist_authorities) !==
											JSON.stringify(t.whitelist_authorities) ||
										JSON.stringify(e.blacklist_authorities) !==
											JSON.stringify(t.blacklist_authorities) ||
										JSON.stringify(e.whitelist_markets) !==
											JSON.stringify(t.whitelist_markets) ||
										JSON.stringify(e.blacklist_markets) !==
											JSON.stringify(t.blacklist_markets) ||
										JSON.stringify(e.whitelist_market_fee_sharing) !==
											JSON.stringify(t.whitelist_market_fee_sharing)
									);
								},
							},
							{
								key: 'tabChanged',
								value: function (e) {
									var t = this.tabsChanged();
									return !!t[e] && t[e];
								},
							},
							{
								key: 'tabsChanged',
								value: function () {
									var e = this.state,
										t = this.resetState(this.props),
										n = [];
									return (
										(e.update.max_supply === t.update.max_supply &&
											e.core_exchange_rate.base.amount ===
												t.core_exchange_rate.base.amount &&
											e.core_exchange_rate.quote.amount ===
												t.core_exchange_rate.quote.amount) ||
											(n[0] = !0),
										(JSON.stringify(e.whitelist_authorities) ===
											JSON.stringify(t.whitelist_authorities) &&
											JSON.stringify(e.blacklist_authorities) ===
												JSON.stringify(t.blacklist_authorities) &&
											JSON.stringify(e.whitelist_markets) ===
												JSON.stringify(t.whitelist_markets) &&
											JSON.stringify(e.blacklist_markets) ===
												JSON.stringify(t.blacklist_markets) &&
											JSON.stringify(e.whitelist_market_fee_sharing) ===
												JSON.stringify(t.whitelist_market_fee_sharing)) ||
											(n[1] = !0),
										(e.update.description.main === t.update.description.main &&
											e.update.description.short_name ===
												t.update.description.short_name &&
											e.update.description.market ===
												t.update.description.market) ||
											(n[2] = !0),
										JSON.stringify(e.bitasset_opts) !==
											JSON.stringify(t.original_bitasset_opts) && (n[3] = !0),
										JSON.stringify(e.permissionBooleans) !==
											JSON.stringify(t.permissionBooleans) && (n[4] = !0),
										(JSON.stringify(e.flagBooleans) ===
											JSON.stringify(t.flagBooleans) &&
											e.update.market_fee_percent ===
												t.update.market_fee_percent &&
											e.update.max_market_fee === t.update.max_market_fee &&
											e.update.reward_percent === t.update.reward_percent) ||
											(n[5] = !0),
										JSON.stringify(e.feedProducers) !==
											JSON.stringify(t.originalFeedProducers) && (n[6] = !0),
										n
									);
								},
							},
							{
								key: 'pageChanged',
								value: function () {
									var e = this.state,
										t = e.isBitAsset,
										n = e.bitasset_opts,
										r = e.original_bitasset_opts,
										o = e.feedProducers,
										s = e.originalFeedProducers;
									return (
										this.assetChanged() ||
										(t &&
											(JSON.stringify(n) !== JSON.stringify(r) ||
												!P.Z.are_equal_shallow(o.toJS(), s.toJS())))
									);
								},
							},
							{
								key: '_updateAsset',
								value: function (e) {
									var t = this;
									e.preventDefault(), this.hideAssetUpdateConfirmationModal();
									var n = this.state,
										r = n.update,
										o = n.issuer,
										s = n.new_issuer_account_id,
										i = n.core_exchange_rate,
										a = n.flagBooleans,
										c = n.permissionBooleans,
										l = n.isBitAsset,
										u = n.bitasset_opts,
										p = n.original_bitasset_opts,
										d = n.feedProducers,
										h = n.originalFeedProducers,
										f = Y.Z.getFlags(a);
									128 & this.props.asset.getIn(['options', 'flags']) &&
										!(
											128 &
											this.props.asset.getIn(['options', 'issuer_permissions'])
										) &&
										(f += 128);
									var y = Y.Z.getPermissions(c, l);
									this.state.marketInput !== r.description.market &&
										(r.description.market = '');
									var b = JSON.stringify(r.description),
										m = {
											whitelist_authorities: this.state.whitelist_authorities,
											blacklist_authorities: this.state.blacklist_authorities,
											whitelist_markets: this.state.whitelist_markets,
											blacklist_markets: this.state.blacklist_markets,
											whitelist_market_fee_sharing:
												this.state.whitelist_market_fee_sharing,
										},
										g = l ? d.toJS() : null,
										v = l ? h.toJS() : null;
									w.Z.updateAsset(
										o,
										s,
										r,
										i,
										this.props.asset,
										f,
										y,
										l,
										u,
										p,
										b,
										m,
										g,
										v,
										this.assetChanged()
									).then(function () {
										ct.log(
											'... AssetActions.updateAsset(account_id, update)',
											o,
											s,
											t.props.asset.get('id'),
											r
										),
											setTimeout(function () {
												de.BQ.getAsset(t.props.asset.get('id')),
													t.setState(t.resetState(t.props));
											}, 3e3);
									});
								},
							},
							{
								key: '_reset',
								value: function (e) {
									e.preventDefault(),
										this.setState(this.resetState(this.props));
								},
							},
							{
								key: '_forcePositive',
								value: function (e) {
									return parseFloat(e) < 0 ? '0' : e;
								},
							},
							{
								key: '_onUpdateDescription',
								value: function (e, t) {
									var n = this.state.update,
										r = !0;
									switch (e) {
										case 'condition':
											if (t.target.value.length > 60) return void (r = !1);
											n.description[e] = t.target.value;
											break;
										case 'short_name':
											if (t.target.value.length > 32) return void (r = !1);
											n.description[e] = t.target.value;
											break;
										case 'market':
											n.description[e] = t;
											break;
										case 'visible':
											n.description[e] = !n.description[e];
											break;
										default:
											n.description[e] = t.target.value;
									}
									r && (this.forceUpdate(), this._validateEditFields(n));
								},
							},
							{
								key: 'onChangeBitAssetOpts',
								value: function (e, t) {
									var n = this.state.bitasset_opts;
									switch (e) {
										case 'force_settlement_offset_percent':
										case 'maximum_force_settlement_volume':
											n[e] =
												parseFloat(t.target.value) * me().GRAPHENE_1_PERCENT;
											break;
										case 'feed_lifetime_sec':
										case 'force_settlement_delay_sec':
											ct.log(
												t.target.value,
												parseInt(60 * parseFloat(t.target.value), 10)
											),
												(n[e] = parseInt(60 * parseFloat(t.target.value), 10));
											break;
										case 'short_backing_asset':
											n[e] = t;
											break;
										case 'minimum_feeds':
											n[e] = parseInt(t.target.value, 10);
									}
									this.forceUpdate();
								},
							},
							{
								key: '_onUpdateInput',
								value: function (e, t) {
									var n = this.state.update,
										r = !0,
										o = P.Z.get_asset_precision(
											this.props.asset.get('precision')
										);
									switch (e) {
										case 'market_fee_percent':
										case 'reward_percent':
											n[e] = this._forcePositive(t.target.value);
											break;
										case 'max_market_fee':
											var s = t.amount.replace(/,/g, '');
											if (new (ye())(s).times(o).gt(xt))
												return (
													(r = !1),
													this.setState({
														errors: {
															max_market_fee:
																'The number you tried to enter is too large',
														},
													})
												);
											n[e] = P.Z.limitByPrecision(
												s,
												this.props.asset.get('precision')
											);
											break;
										case 'max_supply':
											var i = t.amount.replace(/,/g, '');
											n[e] = P.Z.limitByPrecision(
												i,
												this.props.asset.get('precision')
											);
											break;
										default:
											n[e] = t.target.value;
									}
									r &&
										(this.setState({update: n}), this._validateEditFields(n));
								},
							},
							{
								key: '_validateEditFields',
								value: function (e) {
									var t = e.core_exchange_rate,
										n = e.feedProducers
											? e.feedProducers
											: this.state.feedProducers,
										r = this.state.flagBooleans,
										o = this.props,
										s = o.asset,
										i = o.core,
										a = {
											max_supply: null,
											quote_asset: null,
											base_asset: null,
											max_feed_producer: null,
											conflict_producer: null,
											invalid_market_pair: null,
										},
										c = this.props.asset.get('precision');
									try {
										a.max_supply =
											e.max_supply <= 0
												? Z().translate(
														'account.user_issued_assets.max_positive'
												  )
												: new (ye())(parseInt(e.max_supply, 10))
														.times(Math.pow(10, c))
														.gt(xt)
												? Z().translate('account.user_issued_assets.too_large')
												: null;
									} catch (e) {
										ct.log('err:', e),
											(a.max_supply = Z().translate(
												'account.user_issued_assets.too_large'
											));
									}
									t &&
										(t.quote.asset_id !== s.get('id') &&
											t.base.asset_id !== s.get('id') &&
											(a.quote_asset = Z().translate(
												'account.user_issued_assets.need_asset',
												{name: s.get('symbol')}
											)),
										t.quote.asset_id !== i.get('id') &&
											t.base.asset_id !== i.get('id') &&
											(a.base_asset = Z().translate(
												'account.user_issued_assets.need_asset',
												{name: i.get('symbol')}
											))),
										n &&
											n.size > this.state.maxFeedProducers &&
											(a.max_feed_producer = Z().translate(
												'account.user_issued_assets.too_many_feed',
												{max: this.state.maxFeedProducers}
											)),
										r.committee_fed_asset &&
											r.witness_fed_asset &&
											(a.conflict_producer = Z().translate(
												'account.user_issued_assets.conflict_feed'
											)),
										this.state.marketInput == this.props.asset.get('symbol') &&
											(a.invalid_market_pair = Z().translate(
												'account.user_issued_assets.invalid_market_pair'
											));
									var l = !(
										a.invalid_market_pair ||
										a.max_supply ||
										a.base_asset ||
										a.quote_asset ||
										a.max_feed_producer ||
										a.conflict_producer
									);
									this.setState({isValid: l, errors: a});
								},
							},
							{
								key: '_onCoreRateChange',
								value: function (e, t) {
									(t.amount =
										'' == t.amount ? '0' : t.amount.replace(/,/g, '')),
										(t.amount = P.Z.limitByPrecision(
											t.amount,
											t.asset.get('precision')
										)),
										(this.state.core_exchange_rate[e] = {
											amount: t.amount,
											asset_id: t.asset.get('id'),
										}),
										this.forceUpdate();
								},
							},
							{
								key: 'onAccountChanged',
								value: function (e, t) {
									this.setState(jt({}, e, t ? t.get('id') : null));
								},
							},
							{
								key: 'onAccountNameChanged',
								value: function (e, t) {
									this.setState(jt({}, e, t));
								},
							},
							{
								key: '_onInputCoreAsset',
								value: function (e, t) {
									'quote' === e
										? this.setState({quoteAssetInput: t})
										: 'base' === e && this.setState({baseAssetInput: t});
								},
							},
							{
								key: '_onFoundCoreAsset',
								value: function (e, t) {
									if (t) {
										var n = this.state.core_exchange_rate;
										(n[e].asset_id = t.get('id')),
											this.setState({core_exchange_rate: n}),
											this._validateEditFields({
												max_supply: this.state.max_supply,
												core_exchange_rate: n,
											});
									}
								},
							},
							{
								key: '_onInputMarket',
								value: function (e) {
									this.setState({marketInput: e});
								},
							},
							{
								key: '_onFoundMarketAsset',
								value: function (e) {
									e && this._onUpdateDescription('market', e.get('symbol'));
								},
							},
							{
								key: '_onFlagChange',
								value: function (e) {
									var t = this.state.flagBooleans;
									(t[e] = !t[e]),
										this.setState({flagBooleans: t}),
										this._validateEditFields({});
								},
							},
							{
								key: '_getCurrentSupply',
								value: function () {
									var e = this.props,
										t = e.asset,
										n = e.getDynamicObject;
									return (
										n && n(t.get('dynamic_asset_data_id')).get('current_supply')
									);
								},
							},
							{
								key: '_onPermissionChange',
								value: function (e) {
									var t = this.state,
										n = t.isBitAsset,
										r = t.permissionBooleans,
										o = !Y.Z.getFlagBooleans(
											this.props.asset.getIn(['options', 'issuer_permissions']),
											n
										)[e];
									if (this._getCurrentSupply() > 0 && o)
										I.Z.error({
											message: Z().translate(
												'account.user_issued_assets.invalid_permissions_change'
											),
										});
									else {
										var s = r;
										(s[e] = !s[e]), this.setState({permissionBooleans: s});
									}
								},
							},
							{
								key: '_onClaimInput',
								value: function (e) {
									this.setState({claimFeesAmount: e.amount});
								},
							},
							{
								key: 'onChangeList',
								value: function (e) {
									var t =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: 'add',
										n = arguments.length > 2 ? arguments[2] : void 0,
										r = this.state[e];
									void 0 === r && (r = new (h().List)([])),
										'add' !== t || r.includes(n)
											? 'remove' === t &&
											  r.includes(n) &&
											  (r = r.remove(r.indexOf(n)))
											: (r = r.push(n)),
										this.setState(jt({}, e, r));
								},
							},
							{
								key: 'onChangeFeedProducerList',
								value: function () {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: 'add',
										t = arguments.length > 1 ? arguments[1] : void 0,
										n = this.state.feedProducers;
									'add' !== e || n.includes(t)
										? 'remove' === e &&
										  n.includes(t) &&
										  (n = n.remove(n.indexOf(t)))
										: (n = n.push(t)),
										this.setState({feedProducers: n}),
										this._validateEditFields({feedProducers: n});
								},
							},
							{
								key: 'render',
								value: function () {
									var e,
										t = this,
										n = this.props.asset,
										r = this.state,
										o = r.errors,
										s = r.isValid,
										i = r.update,
										a = r.core_exchange_rate,
										c = r.flagBooleans,
										l = r.permissionBooleans,
										u = (r.claimFeesAmount, r.isBitAsset),
										p = r.bitasset_opts,
										d = n.get('symbol');
									e = (0, E.jsx)(Ue, {opType: 'asset_update'});
									var f = de.BQ.getAsset(a.quote.asset_id),
										y = P.Z.get_asset_precision(f.get('precision')),
										b = de.BQ.getAsset(a.base.asset_id),
										m = P.Z.get_asset_precision(b.get('precision')),
										g = parseFloat(a.quote.amount) * y,
										v = parseFloat(a.base.amount) * m,
										_ = Y.Z.getFlagBooleans(
											n.getIn(['options', 'issuer_permissions']),
											void 0 !== n.get('bitasset')
										),
										j = [],
										w = function (e, t, n) {
											return (0, E.jsx)(
												'table',
												{
													className: 'table',
													children: (0, E.jsx)('tbody', {
														children: (0, E.jsxs)('tr', {
															children: [
																(0, E.jsxs)('td', {
																	style: {border: 'none', width: '80%'},
																	children: [
																		(0, E.jsx)(x(), {
																			content:
																				'account.user_issued_assets.'.concat(e),
																		}),
																		':',
																	],
																}),
																(0, E.jsx)('td', {
																	style: {border: 'none', textAlign: 'right'},
																	children: (0, E.jsx)(ve.Z, {
																		checked: n,
																		onChange: t,
																	}),
																}),
															],
														}),
													}),
												},
												'table_' + e
											);
										};
									for (var k in _)
										_[k] &&
											'charge_market_fee' !== k &&
											j.push(w(k, this._onFlagChange.bind(this, k), c[k]));
									j.push(
										w(
											'visible',
											this._onUpdateDescription.bind(this, 'visible'),
											!i.description.visible && !1 === i.description.visible
										)
									);
									var O = [];
									for (var S in _)
										O.push(
											(0, E.jsx)(
												'table',
												{
													className: 'table',
													children: (0, E.jsx)('tbody', {
														children: (0, E.jsxs)('tr', {
															children: [
																(0, E.jsxs)('td', {
																	style: {border: 'none', width: '80%'},
																	children: [
																		(0, E.jsx)(x(), {
																			content:
																				'account.user_issued_assets.'.concat(S),
																		}),
																		':',
																	],
																}),
																(0, E.jsx)('td', {
																	style: {border: 'none'},
																	children: (0, E.jsx)(ve.Z, {
																		checked: l[S],
																		onChange: this._onPermissionChange.bind(
																			this,
																			S
																		),
																	}),
																}),
															],
														}),
													}),
												},
												'table_' + S
											)
										);
									var C = 0;
									this.tabsChanged().forEach(function () {
										C++;
									});
									var A = (0, E.jsxs)('div', {
											children: [
												(0, E.jsx)('button', {
													className: ue()('button', {
														disabled: !s || !this.pageChanged(),
													}),
													style: {width: '9rem'},
													onClick:
														C > 1
															? this._openConfirm.bind(this)
															: this._updateAsset.bind(this),
													children:
														C > 1
															? (0, E.jsx)(x(), {
																	content: 'account.perm.save_all',
															  })
															: (0, E.jsx)(x(), {content: 'account.perm.save'}),
												}),
												(0, E.jsx)('button', {
													className: ue()('button primary', {
														disabled: !this.pageChanged(),
													}),
													onClick: this._reset.bind(this),
													children: (0, E.jsx)(x(), {
														content: 'account.perm.reset',
													}),
												}),
											],
										}),
										M = !1;
									('1.3.0' !== f.get('id') && '1.3.0' !== b.get('id')) ||
										(f.get('id') !== n.get('id') &&
											b.get('id') !== n.get('id')) ||
										(M = !0);
									var R = n.getIn(['bitasset', 'is_prediction_market']),
										I = Y.Z.parseDescription(
											this.props.asset.toJS().options.description
										);
									return (0, E.jsxs)('div', {
										className: 'grid-content app-tables no-padding',
										ref: 'appTables',
										children: [
											(0, E.jsx)('div', {
												className: 'content-block small-12',
												children: (0, E.jsxs)('div', {
													className: 'tabs-container generic-bordered-box',
													children: [
														(0, E.jsx)('div', {
															className: 'tabs-header',
															children: (0, E.jsxs)('h3', {
																children: [
																	(0, E.jsx)(x(), {
																		content: 'header.update_asset',
																	}),
																	': ',
																	d,
																],
															}),
														}),
														(0, E.jsxs)(X.m, {
															setting: 'updateAssetTab',
															className: 'account-tabs',
															tabsClass:
																'account-overview bordered-header content-block',
															contentClass:
																'grid-block padding-top shrink small-vertical medium-horizontal',
															segmented: !1,
															actionButtons: A,
															onChangeTab: function (e) {
																t.setState({activeTab: e});
															},
															children: [
																(0, E.jsx)(X.O, {
																	title: 'account.user_issued_assets.primary',
																	updatedTab: this.tabChanged(0),
																	children: (0, E.jsxs)('div', {
																		className:
																			'small-12 large-8 large-offset-2 grid-content',
																		children: [
																			(0, E.jsxs)('label', {
																				children: [
																					(0, E.jsx)(x(), {
																						content:
																							'account.user_issued_assets.precision',
																					}),
																					(0, E.jsxs)('span', {
																						children: [
																							': ',
																							n.get('precision'),
																						],
																					}),
																				],
																			}),
																			(0, E.jsx)('br', {}),
																			(0, E.jsx)('label', {
																				children: (0, E.jsx)(N.Z, {
																					label:
																						'account.user_issued_assets.max_supply',
																					amount: i.max_supply,
																					onChange: this._onUpdateInput.bind(
																						this,
																						'max_supply'
																					),
																					asset: n.get('id'),
																					assets: [n.get('id')],
																					placeholder: '0.0',
																					tabIndex: 1,
																				}),
																			}),
																			o.max_supply
																				? (0, E.jsx)('p', {
																						className: 'grid-content has-error',
																						children: o.max_supply,
																				  })
																				: null,
																			(0, E.jsx)(x(), {
																				component: 'h3',
																				content:
																					'account.user_issued_assets.core_exchange_rate',
																			}),
																			(0, E.jsxs)('label', {
																				children: [
																					(0, E.jsxs)('div', {
																						className: 'grid-block no-margin',
																						children: [
																							M
																								? null
																								: (0, E.jsx)('div', {
																										className:
																											'grid-block no-margin small-12 medium-6',
																										children: (0, E.jsx)(he.Z, {
																											label:
																												'account.user_issued_assets.quote_name',
																											onChange:
																												this._onInputCoreAsset.bind(
																													this,
																													'quote'
																												),
																											asset:
																												this.state
																													.quoteAssetInput,
																											assetInput:
																												this.state
																													.quoteAssetInput,
																											tabIndex: 1,
																											style: {
																												width: '100%',
																												paddingRight: '10px',
																											},
																											onFound:
																												this._onFoundCoreAsset.bind(
																													this,
																													'quote'
																												),
																										}),
																								  }),
																							M
																								? null
																								: (0, E.jsx)('div', {
																										className:
																											'grid-block no-margin small-12 medium-6',
																										children: (0, E.jsx)(he.Z, {
																											label:
																												'account.user_issued_assets.base_name',
																											onChange:
																												this._onInputCoreAsset.bind(
																													this,
																													'base'
																												),
																											asset:
																												this.state
																													.baseAssetInput,
																											assetInput:
																												this.state
																													.baseAssetInput,
																											tabIndex: 1,
																											style: {
																												width: '100%',
																												paddingLeft: '10px',
																											},
																											onFound:
																												this._onFoundCoreAsset.bind(
																													this,
																													'base'
																												),
																										}),
																								  }),
																							o.quote_asset
																								? (0, E.jsx)('p', {
																										className:
																											'grid-content has-error',
																										children: o.quote_asset,
																								  })
																								: null,
																							o.base_asset
																								? (0, E.jsx)('p', {
																										className:
																											'grid-content has-error',
																										children: o.base_asset,
																								  })
																								: null,
																							(0, E.jsx)('div', {
																								className:
																									'grid-block no-margin small-12 medium-6',
																								children: (0, E.jsx)(N.Z, {
																									label:
																										'account.user_issued_assets.quote',
																									amount: a.quote.amount,
																									onChange:
																										this._onCoreRateChange.bind(
																											this,
																											'quote'
																										),
																									asset: a.quote.asset_id,
																									assets: [a.quote.asset_id],
																									placeholder: '0.0',
																									tabIndex: 1,
																									style: {
																										width: '100%',
																										paddingRight: '10px',
																									},
																								}),
																							}),
																							(0, E.jsx)('div', {
																								className:
																									'grid-block no-margin small-12 medium-6',
																								children: (0, E.jsx)(N.Z, {
																									label:
																										'account.user_issued_assets.base',
																									amount: a.base.amount,
																									onChange:
																										this._onCoreRateChange.bind(
																											this,
																											'base'
																										),
																									asset: a.base.asset_id,
																									assets: [a.base.asset_id],
																									placeholder: '0.0',
																									tabIndex: 1,
																									style: {
																										width: '100%',
																										paddingLeft: '10px',
																									},
																								}),
																							}),
																						],
																					}),
																					(0, E.jsx)('div', {
																						children: (0, E.jsxs)('h5', {
																							children: [
																								(0, E.jsx)(x(), {
																									content: 'exchange.price',
																								}),
																								':',
																								' ',
																								(0, E.jsx)(Le.Z, {
																									style: {fontWeight: 'bold'},
																									quote_amount: g,
																									quote_asset: a.quote.asset_id,
																									base_asset: a.base.asset_id,
																									base_amount: v,
																								}),
																							],
																						}),
																					}),
																				],
																			}),
																			(0, E.jsxs)('div', {
																				children: [
																					(0, E.jsx)(x(), {
																						content:
																							'account.user_issued_assets.cer_warning_1',
																						component: 'label',
																						className: 'has-error',
																					}),
																					(0, E.jsx)(x(), {
																						content:
																							'account.user_issued_assets.cer_warning_2',
																						component: 'p',
																					}),
																				],
																			}),
																			(0, E.jsxs)('p', {
																				children: [
																					(0, E.jsx)(x(), {
																						content:
																							'account.user_issued_assets.approx_fee',
																					}),
																					': ',
																					e,
																				],
																			}),
																		],
																	}),
																}),
																(0, E.jsx)(X.O, {
																	title: 'account.whitelist.title',
																	updatedTab: this.tabChanged(1),
																	children: (0, E.jsx)($e, {
																		whiteListEnabled: c.white_list,
																		marketFeeEnabled: c.charge_market_fee,
																		whitelist_authorities:
																			this.state.whitelist_authorities,
																		blacklist_authorities:
																			this.state.blacklist_authorities,
																		whitelist_markets:
																			this.state.whitelist_markets,
																		whitelist_market_fee_sharing:
																			void 0 ===
																			this.state.whitelist_market_fee_sharing
																				? new (h().List)([])
																				: this.state
																						.whitelist_market_fee_sharing,
																		blacklist_markets:
																			this.state.blacklist_markets,
																		new_authority_id:
																			this.state.new_authority_id,
																		authority_name: this.state.authority_name,
																		onAccountNameChanged:
																			this.onAccountNameChanged.bind(this),
																		onAccountChanged:
																			this.onAccountChanged.bind(this),
																		onChangeList: this.onChangeList.bind(this),
																		children: (0, E.jsxs)('p', {
																			children: [
																				(0, E.jsx)(x(), {
																					content:
																						'account.user_issued_assets.approx_fee',
																				}),
																				': ',
																				e,
																			],
																		}),
																	}),
																}),
																(0, E.jsx)(X.O, {
																	title:
																		'account.user_issued_assets.description',
																	updatedTab: this.tabChanged(2),
																	children: (0, E.jsxs)('div', {
																		className:
																			'small-12 large-8 large-offset-2 grid-content',
																		children: [
																			(0, E.jsx)('label', {
																				children: (0, E.jsx)('textarea', {
																					style: {height: '7rem'},
																					rows: '1',
																					value: i.description.main || '',
																					onChange:
																						this._onUpdateDescription.bind(
																							this,
																							'main'
																						),
																				}),
																			}),
																			(0, E.jsx)(x(), {
																				component: 'h3',
																				content:
																					'account.user_issued_assets.short',
																			}),
																			(0, E.jsx)('label', {
																				children: (0, E.jsx)('input', {
																					type: 'text',
																					rows: '1',
																					value: i.description.short_name || '',
																					onChange:
																						this._onUpdateDescription.bind(
																							this,
																							'short_name'
																						),
																				}),
																			}),
																			(0, E.jsx)(x(), {
																				component: 'h3',
																				content:
																					'account.user_issued_assets.market',
																			}),
																			(0, E.jsx)(he.Z, {
																				label:
																					'account.user_issued_assets.name',
																				onChange:
																					this._onInputMarket.bind(this),
																				placeholder: I.market,
																				asset: this.state.marketInput,
																				assetInput: this.state.marketInput,
																				style: {
																					width: '100%',
																					paddingRight: '10px',
																					paddingBottom: '20px',
																				},
																				onFound:
																					this._onFoundMarketAsset.bind(this),
																			}),
																			o.invalid_market_pair
																				? (0, E.jsx)('p', {
																						className: 'grid-content has-error',
																						children: o.invalid_market_pair,
																				  })
																				: null,
																			R
																				? (0, E.jsxs)('div', {
																						children: [
																							(0, E.jsx)(x(), {
																								component: 'h3',
																								content:
																									'account.user_issued_assets.condition',
																							}),
																							(0, E.jsx)('label', {
																								children: (0, E.jsx)('input', {
																									type: 'text',
																									rows: '1',
																									value:
																										i.description.condition,
																									onChange:
																										this._onUpdateDescription.bind(
																											this,
																											'condition'
																										),
																								}),
																							}),
																							(0, E.jsx)(x(), {
																								component: 'h3',
																								content:
																									'account.user_issued_assets.expiry',
																							}),
																							(0, E.jsx)('label', {
																								children: (0, E.jsx)('input', {
																									type: 'date',
																									value: i.description.expiry,
																									onChange:
																										this._onUpdateDescription.bind(
																											this,
																											'expiry'
																										),
																								}),
																							}),
																						],
																				  })
																				: null,
																			(0, E.jsxs)('p', {
																				children: [
																					(0, E.jsx)(x(), {
																						content:
																							'account.user_issued_assets.approx_fee',
																					}),
																					': ',
																					e,
																				],
																			}),
																		],
																	}),
																}),
																u
																	? (0, E.jsx)(X.O, {
																			title:
																				'account.user_issued_assets.bitasset_opts',
																			updatedTab: this.tabChanged(3),
																			children: (0, E.jsxs)('div', {
																				className:
																					'small-12 large-8 large-offset-2 grid-content',
																				children: [
																					(0, E.jsx)(Re, {
																						bitasset_opts: p,
																						onUpdate:
																							this.onChangeBitAssetOpts.bind(
																								this
																							),
																						backingAsset: p.short_backing_asset,
																						assetPrecision: n.get('precision'),
																						assetSymbol: n.get('symbol'),
																						disableBackingAssetChange:
																							this._getCurrentSupply() > 0,
																						disabledBackingAssetChangeCallback:
																							wt,
																					}),
																					(0, E.jsxs)('p', {
																						children: [
																							(0, E.jsx)(x(), {
																								content:
																									'account.user_issued_assets.approx_fee',
																							}),
																							': ',
																							e,
																						],
																					}),
																				],
																			}),
																	  })
																	: null,
																(0, E.jsx)(X.O, {
																	title: 'account.permissions',
																	updatedTab: this.tabChanged(4),
																	children: (0, E.jsxs)('div', {
																		className:
																			'small-12 large-8 large-offset-2 grid-content',
																		children: [
																			(0, E.jsx)(pe.Z, {
																				path: 'components/AccountAssetCreate',
																				section: 'permissions',
																			}),
																			(0, E.jsx)('p', {
																				className: 'grid-content has-error',
																				children: (0, E.jsx)(x(), {
																					content:
																						'account.user_issued_assets.perm_warning',
																				}),
																			}),
																			O,
																			(0, E.jsxs)('p', {
																				children: [
																					(0, E.jsx)(x(), {
																						content:
																							'account.user_issued_assets.approx_fee',
																					}),
																					': ',
																					e,
																				],
																			}),
																		],
																	}),
																}),
																(0, E.jsx)(X.O, {
																	title: 'account.user_issued_assets.flags',
																	updatedTab: this.tabChanged(5),
																	children: (0, E.jsxs)('div', {
																		className:
																			'small-12 large-8 large-offset-2 grid-content',
																		children: [
																			(0, E.jsx)(pe.Z, {
																				path: 'components/AccountAssetCreate',
																				section: 'flags',
																			}),
																			_.charge_market_fee
																				? (0, E.jsxs)('div', {
																						children: [
																							(0, E.jsxs)('h3', {
																								children: [
																									(0, E.jsx)(x(), {
																										component: 'span',
																										content:
																											'account.user_issued_assets.market_fee',
																										style: {
																											paddingRight: '20px',
																										},
																									}),
																									(0, E.jsx)(ve.Z, {
																										checked:
																											c.charge_market_fee,
																										onChange:
																											this._onFlagChange.bind(
																												this,
																												'charge_market_fee'
																											),
																									}),
																								],
																							}),
																							(0, E.jsxs)('div', {
																								className: ue()({
																									disabled:
																										!c.charge_market_fee,
																								}),
																								style: {
																									marginTop: '10px',
																									marginLeft: '30px',
																								},
																								children: [
																									(0, E.jsxs)('label', {
																										children: [
																											(0, E.jsx)(x(), {
																												content:
																													'account.user_issued_assets.market_fee',
																											}),
																											' ',
																											'(%)',
																											(0, E.jsx)('input', {
																												type: 'number',
																												value:
																													i.market_fee_percent,
																												onChange:
																													this._onUpdateInput.bind(
																														this,
																														'market_fee_percent'
																													),
																											}),
																										],
																									}),
																									(0, E.jsx)('label', {
																										children: (0, E.jsx)(N.Z, {
																											label:
																												'account.user_issued_assets.max_market_fee',
																											amount: i.max_market_fee,
																											onChange:
																												this._onUpdateInput.bind(
																													this,
																													'max_market_fee'
																												),
																											asset: n.get('id'),
																											assets: [n.get('id')],
																											placeholder: '0.0',
																											tabIndex: 1,
																										}),
																									}),
																									(0, E.jsx)('div', {
																										children: (0, E.jsxs)(
																											'label',
																											{
																												children: [
																													(0, E.jsxs)(at.Z, {
																														title:
																															Z().translate(
																																'account.user_issued_assets.reward_percent_tooltip'
																															),
																														children: [
																															(0, E.jsx)(x(), {
																																content:
																																	'account.user_issued_assets.reward_percent',
																															}),
																															' ',
																															'(%)',
																														],
																													}),
																													(0, E.jsx)('input', {
																														type: 'number',
																														value:
																															i.reward_percent,
																														onChange:
																															this._onUpdateInput.bind(
																																this,
																																'reward_percent'
																															),
																													}),
																												],
																											}
																										),
																									}),
																									o.max_market_fee
																										? (0, E.jsx)('p', {
																												className:
																													'grid-content has-error',
																												children:
																													o.max_market_fee,
																										  })
																										: null,
																								],
																							}),
																						],
																				  })
																				: null,
																			(0, E.jsx)('h3', {
																				children: (0, E.jsx)(x(), {
																					content:
																						'account.user_issued_assets.flags',
																				}),
																			}),
																			j,
																			(0, E.jsxs)('p', {
																				children: [
																					(0, E.jsx)(x(), {
																						content:
																							'account.user_issued_assets.approx_fee',
																					}),
																					': ',
																					e,
																				],
																			}),
																			o.conflict_producer
																				? (0, E.jsx)('p', {
																						className: 'grid-content has-error',
																						children: o.conflict_producer,
																				  })
																				: null,
																		],
																	}),
																}),
																u
																	? (0, E.jsxs)(X.O, {
																			title:
																				'account.user_issued_assets.feed_producers',
																			updatedTab: this.tabChanged(6),
																			children: [
																				(0, E.jsx)(st, {
																					asset: this.props.asset,
																					account: this.props.account,
																					witnessFed: c.witness_fed_asset,
																					committeeFed: c.committee_fed_asset,
																					producers: this.state.feedProducers,
																					onChangeList:
																						this.onChangeFeedProducerList.bind(
																							this
																						),
																				}),
																				o.max_feed_producer
																					? (0, E.jsx)('p', {
																							className:
																								'grid-content has-error large-8 large-offset-2',
																							style: {marginTop: '20px'},
																							children: o.max_feed_producer,
																					  })
																					: null,
																			],
																	  })
																	: null,
															],
														}),
													],
												}),
											}),
											(0, E.jsx)(
												Ot,
												pt(
													{
														visible:
															this.state.isAssetUpdateConfirmationModalVisible,
														hideModal: this.hideAssetUpdateConfirmationModal,
														showModal: this.showAssetUpdateConfirmationModal,
														tabsChanged: this.tabsChanged(),
														_cancelConfirm: this._cancelConfirm.bind(this),
														_updateAsset: this._updateAsset.bind(this),
													},
													this.props
												)
											),
										],
									});
								},
							},
						]),
						n
					);
				})(r.Component);
			jt(kt, 'propTypes', {globalObject: c.Z.ChainObject.isRequired}),
				jt(kt, 'defaultProps', {globalObject: '2.0.0'}),
				(kt = (0, l.Z)(kt)),
				(kt = (0, H.Z)(kt, {
					propNames: ['asset', 'core'],
					defaultProps: {core: '1.3.0'},
					withDynamic: !0,
				}));
			var Ot = (function (e) {
					yt(n, e);
					var t = mt(n);
					function n() {
						return dt(this, n), t.call(this);
					}
					return (
						ft(n, [
							{
								key: 'render',
								value: function () {
									var e = this.props.tabsChanged,
										t = [
											(0, E.jsx)(
												T.Z,
												{
													type: 'primary',
													onClick: this.props._updateAsset,
													children: Z().translate('global.confirm'),
												},
												'submit'
											),
											(0, E.jsx)(
												T.Z,
												{
													onClick: this.props.hideModal,
													children: Z().translate('global.cancel'),
												},
												'cancel'
											),
										];
									return (0, E.jsxs)(B.Z, {
										visible: this.props.visible,
										footer: t,
										onCancel: this.props.hideModal,
										title: Z().translate('account.confirm_asset_modal.header'),
										children: [
											(0, E.jsx)(x(), {
												content: 'account.confirm_asset_modal.are_you_sure',
												component: 'div',
												style: {paddingBottom: '1rem'},
											}),
											(0, E.jsx)('div', {
												children: (0, E.jsxs)('ul', {
													children: [
														e[0]
															? (0, E.jsx)('li', {
																	children: (0, E.jsx)(x(), {
																		content:
																			'account.user_issued_assets.primary',
																	}),
															  })
															: null,
														e[1]
															? (0, E.jsx)('li', {
																	children: (0, E.jsx)(x(), {
																		content: 'account.whitelist.title',
																	}),
															  })
															: null,
														e[2]
															? (0, E.jsx)('li', {
																	children: (0, E.jsx)(x(), {
																		content:
																			'account.user_issued_assets.description',
																	}),
															  })
															: null,
														e[3]
															? (0, E.jsx)('li', {
																	children: (0, E.jsx)(x(), {
																		content:
																			'account.user_issued_assets.bitasset_opts',
																	}),
															  })
															: null,
														e[4]
															? (0, E.jsx)('li', {
																	children: (0, E.jsx)(x(), {
																		content: 'account.permissions',
																	}),
															  })
															: null,
														e[5]
															? (0, E.jsx)('li', {
																	children: (0, E.jsx)(x(), {
																		content: 'account.user_issued_assets.flags',
																	}),
															  })
															: null,
														e[6]
															? (0, E.jsx)('li', {
																	children: (0, E.jsx)(x(), {
																		content:
																			'account.user_issued_assets.feed_producers',
																	}),
															  })
															: null,
													],
												}),
											}),
										],
									});
								},
							},
						]),
						n
					);
				})(r.Component),
				St = (function (e) {
					yt(n, e);
					var t = mt(n);
					function n() {
						return dt(this, n), t.apply(this, arguments);
					}
					return (
						ft(n, [
							{
								key: 'render',
								value: function () {
									var e = this.props.match.params.asset.toUpperCase();
									return (0, E.jsx)(kt, pt({asset: e}, this.props));
								},
							},
						]),
						n
					);
				})(r.Component);
			const Ct = (0, it.Z)(St);
			function Pt(e) {
				return (
					(Pt =
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
					Pt(e)
				);
			}
			function At(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Zt(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Mt(e, t) {
				return (
					(Mt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Mt(e, t)
				);
			}
			function Rt(e, t) {
				if (t && ('object' === Pt(t) || 'function' == typeof t)) return t;
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
			function Nt(e) {
				return (
					(Nt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Nt(e)
				);
			}
			var It = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Mt(e, t);
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
								t = Nt(r);
							if (o) {
								var n = Nt(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Rt(this, e);
						});
				function i() {
					return At(this, i), s.apply(this, arguments);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'render',
							value: function () {
								var e = this.props.stat_object.toJS();
								return (0, E.jsx)('tbody', {
									children: (0, E.jsxs)('tr', {
										children: [
											(0, E.jsxs)('td', {
												children: [
													(0, E.jsx)(x(), {
														content: 'account.member.fees_paid',
													}),
													' ',
												],
											}),
											(0, E.jsx)('td', {
												children: (0, E.jsx)(O.Z, {
													amount: parseFloat(e.lifetime_fees_paid),
													asset: '1.3.0',
												}),
											}),
										],
									}),
								});
							},
						},
					]) && Zt(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			!(function (e, t, n) {
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = n);
			})(It, 'propTypes', {stat_object: c.Z.ChainObject.isRequired});
			const Tt = (0, l.Z)(It);
			var Bt = n(53780),
				Et = n(5675);
			function Dt(e) {
				return (
					(Dt =
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
					Dt(e)
				);
			}
			function Vt(e, t) {
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
			function qt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Vt(Object(n), !0).forEach(function (t) {
								Gt(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Vt(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Ft(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Ut(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Lt(e, t, n) {
				return (
					t && Ut(e.prototype, t),
					n && Ut(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function zt(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Wt(e, t);
			}
			function Wt(e, t) {
				return (
					(Wt =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Wt(e, t)
				);
			}
			function Kt(e) {
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
						r = Qt(e);
					if (t) {
						var o = Qt(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return Jt(this, n);
				};
			}
			function Jt(e, t) {
				if (t && ('object' === Dt(t) || 'function' == typeof t)) return t;
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
			function Qt(e) {
				return (
					(Qt = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Qt(e)
				);
			}
			function Gt(e, t, n) {
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
			var Yt = (function (e) {
				zt(n, e);
				var t = Kt(n);
				function n() {
					return Ft(this, n), t.apply(this, arguments);
				}
				return (
					Lt(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props.dprops;
								return (0, E.jsx)(
									pe.Z,
									qt(
										qt({}, this.props),
										{},
										{
											path: 'components/AccountMembership',
											section: 'fee-division',
											nextMaintenanceTime: {
												time: e.get('next_maintenance_time'),
											},
										}
									)
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			Gt(Yt, 'propTypes', {dprops: c.Z.ChainObject.isRequired}),
				Gt(Yt, 'defaultProps', {dprops: '2.1.0'}),
				(Yt = (0, l.Z)(Yt));
			var Ht = (function (e) {
				zt(n, e);
				var t = Kt(n);
				function n() {
					return Ft(this, n), t.apply(this, arguments);
				}
				return (
					Lt(n, [
						{
							key: 'upgradeAccount',
							value: function (e, t, n) {
								n.preventDefault(), o.Z.upgradeAccount(e, t);
							},
						},
						{
							key: 'componentWillMount',
							value: function () {
								p.Z.getFinalFeeAsset(this.props.account, 'account_upgrade');
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.gprops,
									n = e.core_asset,
									r = this.props.account.toJS(),
									o = de.BQ.getAccount(r.lifetime_referrer, !1);
								o && (r.lifetime_referrer_name = o.get('name'));
								var s = de.BQ.getAccount(r.referrer, !1);
								s && (r.referrer_name = s.get('name'));
								var i = de.BQ.getAccount(r.registrar, !1);
								i && (r.registrar_name = i.get('name'));
								var a = r.name,
									c = r.network_fee_percentage / 100,
									l = r.lifetime_referrer_fee_percentage / 100,
									u = 100 - c - l,
									p = (u * r.referrer_rewards_percentage) / 1e4,
									d = 100 - p - l - c,
									h =
										(t.getIn([
											'parameters',
											'current_fees',
											'parameters',
											8,
											1,
											'membership_lifetime_fee',
										]) *
											t.getIn(['parameters', 'current_fees', 'scale'])) /
										1e4,
									f = de.BQ.getAccountMemberStatus(this.props.account),
									y = 'account.member.' + f,
									b = null;
								'annual' === f &&
									(b = (0, E.jsxs)('span', {
										children: [
											'(',
											(0, E.jsx)(x(), {content: 'account.member.expires'}),
											' ',
											(0, E.jsx)(Bt.Z, {time: r.membership_expiration_date}),
											')',
										],
									}));
								var m = r.membership_expiration_date;
								return (
									'1969-12-31T23:59:59' === m
										? (m = 'Never')
										: '1970-01-01T00:00:00' === m && (m = 'N/A'),
									(0, E.jsx)('div', {
										className: 'grid-content app-tables no-padding',
										ref: 'appTables',
										children: (0, E.jsx)('div', {
											className: 'content-block small-12',
											children: (0, E.jsx)('div', {
												className: 'tabs-container generic-bordered-box',
												children: (0, E.jsx)(X.m, {
													segmented: !1,
													setting: 'membershipTab',
													className: 'account-tabs',
													tabsClass:
														'account-overview bordered-header content-block',
													contentClass: 'padding',
													children: (0, E.jsxs)(X.O, {
														title: 'account.member.membership',
														children: [
															(0, E.jsxs)('h3', {
																children: [
																	(0, E.jsx)(x(), {content: y}),
																	' ',
																	b,
																],
															}),
															'lifetime' === f
																? null
																: (0, E.jsxs)('div', {
																		children: [
																			(0, E.jsxs)('div', {
																				className: 'large-6 medium-8',
																				children: [
																					(0, E.jsx)(pe.Z, {
																						path: 'components/AccountMembership',
																						section: 'lifetime',
																						feesCashback: 100 - c,
																						price: {amount: h, asset: n},
																					}),
																					(0, E.jsx)('div', {
																						className: 'button no-margin',
																						onClick: this.upgradeAccount.bind(
																							this,
																							r.id,
																							!0
																						),
																						children: (0, E.jsx)(x(), {
																							content:
																								'account.member.upgrade_lifetime',
																						}),
																					}),
																					' ',
																					'   ',
																					null,
																				],
																			}),
																			(0, E.jsx)('br', {}),
																			(0, E.jsx)('hr', {}),
																		],
																  }),
															(0, E.jsx)('div', {
																className: 'content-block no-margin',
																children: (0, E.jsxs)('div', {
																	className:
																		'no-margin grid-block vertical large-horizontal',
																	children: [
																		(0, E.jsx)('div', {
																			className: 'no-margin grid-block large-5',
																			children: (0, E.jsxs)('div', {
																				className: 'grid-content',
																				children: [
																					'lifetime' === f
																						? (0, E.jsxs)('div', {
																								children: [
																									(0, E.jsx)('h4', {
																										children: (0, E.jsx)(x(), {
																											content:
																												'account.member.referral_link',
																										}),
																									}),
																									(0, E.jsx)(x(), {
																										content:
																											'account.member.referral_text',
																										wallet_name: (0, Et.w)(),
																									}),
																									':',
																									(0, E.jsx)('h5', {
																										children:
																											(0, Et.dP)() +
																											'/?r='.concat(r.name),
																									}),
																								],
																						  })
																						: null,
																					(0, E.jsx)('h4', {
																						children: (0, E.jsx)(x(), {
																							content:
																								'account.member.fee_allocation',
																						}),
																					}),
																					(0, E.jsx)('table', {
																						className: 'table key-value-table',
																						children: (0, E.jsxs)('tbody', {
																							children: [
																								(0, E.jsxs)('tr', {
																									children: [
																										(0, E.jsx)('td', {
																											children: (0, E.jsx)(
																												x(),
																												{
																													content:
																														'account.member.network_percentage',
																												}
																											),
																										}),
																										(0, E.jsxs)('td', {
																											children: [c, '%'],
																										}),
																									],
																								}),
																								(0, E.jsxs)('tr', {
																									children: [
																										(0, E.jsxs)('td', {
																											children: [
																												(0, E.jsx)(x(), {
																													content:
																														'account.member.lifetime_referrer',
																												}),
																												' ',
																												'  (',
																												(0, E.jsx)(_.Z, {
																													to: '/account/'.concat(
																														r.lifetime_referrer_name
																													),
																													children:
																														r.lifetime_referrer_name,
																												}),
																												')',
																											],
																										}),
																										(0, E.jsxs)('td', {
																											children: [l, '%'],
																										}),
																									],
																								}),
																								(0, E.jsxs)('tr', {
																									children: [
																										(0, E.jsxs)('td', {
																											children: [
																												(0, E.jsx)(x(), {
																													content:
																														'account.member.registrar',
																												}),
																												' ',
																												'  (',
																												(0, E.jsx)(_.Z, {
																													to: '/account/'.concat(
																														r.registrar_name
																													),
																													children:
																														r.registrar_name,
																												}),
																												')',
																											],
																										}),
																										(0, E.jsxs)('td', {
																											children: [d, '%'],
																										}),
																									],
																								}),
																								(0, E.jsxs)('tr', {
																									children: [
																										(0, E.jsxs)('td', {
																											children: [
																												(0, E.jsx)(x(), {
																													content:
																														'account.member.referrer',
																												}),
																												' ',
																												'  (',
																												(0, E.jsx)(_.Z, {
																													to: '/account/'.concat(
																														r.referrer_name
																													),
																													children:
																														r.referrer_name,
																												}),
																												')',
																											],
																										}),
																										(0, E.jsxs)('td', {
																											children: [p, '%'],
																										}),
																									],
																								}),
																								(0, E.jsxs)('tr', {
																									children: [
																										(0, E.jsxs)('td', {
																											children: [
																												(0, E.jsx)(x(), {
																													content:
																														'account.member.membership_expiration',
																												}),
																												' ',
																											],
																										}),
																										(0, E.jsx)('td', {
																											children: m,
																										}),
																									],
																								}),
																							],
																						}),
																					}),
																					(0, E.jsx)('h4', {
																						style: {paddingTop: '1rem'},
																						children: (0, E.jsx)(x(), {
																							content:
																								'account.member.fees_cashback',
																						}),
																					}),
																					(0, E.jsx)('table', {
																						className: 'table key-value-table',
																						children: (0, E.jsx)(Tt, {
																							stat_object: r.statistics,
																						}),
																					}),
																				],
																			}),
																		}),
																		(0, E.jsx)('div', {
																			className: 'grid-block large-7',
																			children: (0, E.jsx)('div', {
																				className: 'grid-content',
																				children: (0, E.jsx)(Yt, {
																					account: a,
																					networkFee: c,
																					referrerFee: p,
																					registrarFee: d,
																					lifetimeFee: l,
																					referrerTotalFee: u,
																					maintenanceInterval: t.getIn([
																						'parameters',
																						'maintenance_interval',
																					]),
																					vestingThreshold: {
																						amount: t.getIn([
																							'parameters',
																							'cashback_vesting_threshold',
																						]),
																						asset: n,
																					},
																					vestingPeriod:
																						t.getIn([
																							'parameters',
																							'cashback_vesting_period_seconds',
																						]) /
																						60 /
																						60 /
																						24,
																				}),
																			}),
																		}),
																	],
																}),
															}),
														],
													}),
												}),
											}),
										}),
									})
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			Gt(Ht, 'propTypes', {
				account: c.Z.ChainAccount.isRequired,
				gprops: c.Z.ChainObject.isRequired,
				core_asset: c.Z.ChainAsset.isRequired,
			}),
				Gt(Ht, 'defaultProps', {gprops: '2.0.0', core_asset: '1.3.0'});
			const Xt = (Ht = (0, l.Z)(Ht));
			var $t = n(93205),
				en = n(18825),
				tn = n(94188),
				nn = n(62849),
				rn = n(25108);
			function on(e) {
				return (
					(on =
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
					on(e)
				);
			}
			function sn(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function an(e, t) {
				return (
					(an =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					an(e, t)
				);
			}
			function cn(e, t) {
				if (t && ('object' === on(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return ln(e);
			}
			function ln(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function un(e) {
				return (
					(un = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					un(e)
				);
			}
			var pn = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && an(e, t);
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
								t = un(r);
							if (o) {
								var n = un(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return cn(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = {
							vesting_balances: [],
							searchTerm: '',
							loading: !1,
							error: !1,
						}),
						(t.onSearch = t.onSearch.bind(ln(t))),
						(t.retrieveVestingBalances = t.retrieveVestingBalances.bind(ln(t))),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'componentWillMount',
							value: function () {
								this.retrieveVestingBalances.call(
									this,
									this.props.account.get('id')
								);
							},
						},
						{
							key: 'componentDidUpdate',
							value: function (e) {
								var t = e.account.get('id'),
									n = this.props.account.get('id');
								n !== t && this.retrieveVestingBalances.call(this, n);
							},
						},
						{
							key: 'retrieveVestingBalances',
							value: function (e) {
								var t = this;
								this.setState({loading: !0}),
									(e = e || this.props.account.get('id')),
									en.yX
										.instance()
										.db_api()
										.exec('get_vesting_balances', [e])
										.then(function (e) {
											t.mapVestingBalances(e), t.setState({loading: !1});
										})
										.catch(function (e) {
											rn.log('error:', e), t.setState({loading: !1, error: !0});
										});
							},
						},
						{
							key: 'mapVestingBalances',
							value: function (e) {
								if (!e) return null;
								var t = e.filter(function (e) {
									return e.balance.amount && e.balance.asset_id;
								});
								(t = t.map(function (e) {
									var t,
										n,
										r = 0,
										o = 0,
										s = 0,
										i = 0,
										a = !0,
										c = !0;
									if (e)
										if (
											((n = e.balance.amount),
											(t = de.BQ.getAsset(e.balance.asset_id)),
											e.policy && 2 !== e.policy[0])
										) {
											var l = Math.floor(
													new Date(e.policy[1].start_claim + 'Z').getTime() /
														1e3
												),
												u = Math.floor(new Date().getTime() / 1e3);
											if (l > 0) {
												a = !1;
												var p = u - l,
													d = e.policy[1].vesting_seconds;
												p < d
													? ((c = !1),
													  (o = parseFloat(p / 86400).toFixed(2)),
													  (i = (
															(s = parseFloat(d / 86400).toFixed(2)) - o
													  ).toFixed(2)),
													  (r = 0))
													: (r = 1);
											} else {
												var h = Math.floor(
														new Date(
															e.policy[1].coin_seconds_earned_last_update + 'Z'
														).getTime() / 1e3
													),
													f =
														parseFloat(e.policy[1].coin_seconds_earned) +
														n * (u - h),
													y = e.policy[1].vesting_seconds;
												(r = (r = 0 === y ? 1 : f / (y * n)) > 1 ? 1 : r),
													(o = P.Z.format_number(
														P.Z.get_asset_amount(f / 86400, t),
														0
													)),
													(s = P.Z.format_number(
														P.Z.get_asset_amount(
															(e.balance.amount * y) / 86400,
															t
														),
														0
													)),
													(i = P.Z.format_number(
														(y * (1 - r)) / 86400 || 0,
														2
													));
											}
										} else c && (r = 1);
									return {
										key: e.id,
										vestingId: e.id,
										vestingType: e.balance_type,
										vestingBalance: {
											amount: e.balance.amount,
											asset: e.balance.asset_id,
										},
										coinDaysRequired: {days_required: s, isCoinDays: a},
										coinDaysEarned: {days_earned: o, isCoinDays: a},
										coinDaysRemaining: {days_remaining: i, isCoinDays: a},
										availablePercent: r,
										canClaim: c,
										vb: e,
									};
								})),
									this.setState({vesting_balances: t});
							},
						},
						{
							key: 'getHeader',
							value: function () {
								var e = this;
								return [
									{
										title: '#',
										dataIndex: 'vestingId',
										align: 'left',
										defaultSortOrder: 'ascend',
										sorter: function (e, t) {
											return e.vestingId > t.vestingId
												? 1
												: e.vestingId < t.vestingId
												? -1
												: 0;
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.member.balance_type',
										}),
										dataIndex: 'vestingType',
										align: 'left',
										sorter: function (e, t) {
											return e.vestingType > t.vestingType
												? 1
												: e.vestingType < t.vestingType
												? -1
												: 0;
										},
										render: function (e) {
											return (0, E.jsx)('span', {
												children: (0, E.jsx)(x(), {
													content: 'account.vesting.type.' + e,
												}),
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.member.cashback',
										}),
										dataIndex: 'vestingBalance',
										align: 'left',
										render: function (e) {
											return (0, E.jsx)(O.Z, {
												amount: e.amount,
												asset: e.asset,
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.member.required',
										}),
										dataIndex: 'coinDaysRequired',
										align: 'left',
										render: function (e) {
											return e.days_required
												? (0, E.jsxs)('span', {
														children: [
															e.days_required,
															' ',
															(0, E.jsx)(x(), {
																content: e.isCoinDays
																	? 'account.member.coindays'
																	: 'account.member.days',
															}),
														],
												  })
												: null;
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'account.member.earned'}),
										dataIndex: 'coinDaysEarned',
										align: 'left',
										render: function (e) {
											return e.days_earned
												? (0, E.jsxs)('span', {
														children: [
															e.days_earned,
															' ',
															(0, E.jsx)(x(), {
																content: e.isCoinDays
																	? 'account.member.coindays'
																	: 'account.member.days',
															}),
														],
												  })
												: null;
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.member.remaining',
										}),
										dataIndex: 'coinDaysRemaining',
										align: 'left',
										render: function (e) {
											return e.days_remaining
												? (0, E.jsxs)('span', {
														children: [
															e.days_remaining,
															' ',
															(0, E.jsx)(x(), {content: 'account.member.days'}),
														],
												  })
												: null;
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.member.available',
										}),
										dataIndex: 'availablePercent',
										align: 'left',
										render: function (e) {
											return e
												? (0, E.jsxs)('span', {
														children: [(100 * e).toFixed(2), '%'],
												  })
												: null;
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'account.member.action'}),
										align: 'center',
										render: function (t) {
											return t.canClaim
												? (0, E.jsx)(T.Z, {
														onClick: function () {
															return e.onClaim(t);
														},
														type: 'secondary',
														children: (0, E.jsx)(x(), {
															content: 'account.member.claim',
														}),
												  })
												: null;
										},
									},
								];
							},
						},
						{
							key: 'onClaim',
							value: function (e) {
								var t = this,
									n = e.vb,
									r = this.props.account.get('id');
								$t.Z.claimVestingBalance(r, n, !1).then(function () {
									t.retrieveVestingBalances();
								});
							},
						},
						{
							key: 'onSearch',
							value: function (e) {
								this.setState({searchTerm: e.target.value || ''});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.getHeader(),
									n = this.state.vesting_balances.filter(function (t) {
										return (
											-1 !==
											''
												.concat(t.vestingId, '\0')
												.concat(t.vestingType)
												.toUpperCase()
												.indexOf(e.state.searchTerm.toUpperCase())
										);
									});
								return (0, E.jsxs)('div', {
									className: 'grid-content vertical',
									children: [
										(0, E.jsx)(x(), {
											component: 'h1',
											content: 'account.vesting.title',
										}),
										(0, E.jsx)(x(), {
											content: 'account.vesting.explain',
											component: 'p',
										}),
										(0, E.jsxs)('div', {
											className: 'header-selector padding',
											children: [
												(0, E.jsx)(nn.Z, {
													onChange: this.onSearch.bind(this),
													value: this.state.searchTerm,
													autoComplete: 'off',
													placeholder: Z().translate('exchange.filter'),
												}),
												this.state.error &&
													(0, E.jsx)(x(), {
														className: 'header-selector--error',
														content: 'errors.loading_from_blockchain',
													}),
											],
										}),
										(0, E.jsx)('div', {
											children: (0, E.jsx)(tn.Z, {
												loading: this.state.loading,
												rows: n,
												header: t,
												pageSize: 10,
											}),
										}),
									],
								});
							},
						},
					]),
					n && sn(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			const dn = pn;
			var hn = n(27326),
				fn = n.n(hn),
				yn = n(92592),
				bn = n(37065),
				mn = n(51785),
				gn = n.n(mn),
				vn = n(25108),
				_n = n(52982),
				jn = n(44945),
				xn = n(33041),
				wn = n(79361),
				kn = n.n(wn);
			function On(e) {
				return (
					(On =
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
					On(e)
				);
			}
			function Sn(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Cn(e, t) {
				return (
					(Cn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Cn(e, t)
				);
			}
			function Pn(e, t) {
				if (t && ('object' === On(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return An(e);
			}
			function An(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Zn(e) {
				return (
					(Zn = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Zn(e)
				);
			}
			var Mn = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Cn(e, t);
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
								t = Zn(r);
							if (o) {
								var n = Zn(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Pn(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = t._getInitialState()),
						(t.onPasswordEnter = t.onPasswordEnter.bind(An(t))),
						(t.onKeyDown = t.onKeyDown.bind(An(t))),
						(t.onCancel = t.onCancel.bind(An(t))),
						(t.onClose = t.onClose.bind(An(t))),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: '_getInitialState',
							value: function () {
								return {isShowQrcode: !1, keyString: null};
							},
						},
						{
							key: 'onCancel',
							value: function () {
								this.props.hideModal(), this.onClose();
							},
						},
						{
							key: 'onClose',
							value: function () {
								this.refs.password_input &&
									(this.refs.password_input.value = ''),
									this.setState(this._getInitialState());
							},
						},
						{
							key: 'onPasswordEnter',
							value: function (e) {
								e.preventDefault();
								var t = this.refs.password_input.value,
									n = this.props.keyValue;
								if (null != t && '' != t) {
									if (void 0 !== n && null != n && '' != n) {
										var r = de.AB.fromSeed(t).encryptToHex(n);
										this.setState({isShowQrcode: !0, keyString: r});
									}
								} else this.setState({isShowQrcode: !0, keyString: n});
							},
						},
						{
							key: 'onKeyDown',
							value: function (e) {
								13 === e.keyCode && this.onPasswordEnter(e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = null;
								this.state.isShowQrcode && (t = {textAlign: 'center'});
								var n = [];
								return (
									this.state.isShowQrcode ||
										n.push(
											(0, E.jsx)(
												T.Z,
												{
													type: 'primary',
													onClick: this.onPasswordEnter,
													children: Z().translate('modal.ok'),
												},
												'submit'
											)
										),
									n.push(
										(0, E.jsx)(
											T.Z,
											{
												onClick: this.onCancel,
												children: Z().translate('cancel'),
											},
											'cancel'
										)
									),
									(0, E.jsx)(B.Z, {
										visible: this.props.visible,
										onCancel: this.onCancel,
										footer: n,
										children: (0, E.jsxs)('div', {
											className: 'text-center',
											children: [
												(0, E.jsx)('div', {
													style: {margin: '1.5rem 0'},
													children: (0, E.jsx)(x(), {
														component: 'h4',
														content: 'modal.qrcode.title',
													}),
												}),
												(0, E.jsx)('form', {
													className: 'full-width',
													style: {margin: '0 3.5rem'},
													onSubmit: this.onPasswordEnter,
													noValidate: !0,
													children: (0, E.jsx)('div', {
														className: 'form-group',
														children: this.state.isShowQrcode
															? (0, E.jsx)('section', {
																	style: t,
																	children: (0, E.jsx)('span', {
																		style: {
																			background: '#fff',
																			padding: '.75rem',
																			display: 'inline-block',
																		},
																		children: (0, E.jsx)(kn(), {
																			size: 256,
																			value: this.state.keyString,
																		}),
																	}),
															  })
															: (0, E.jsxs)('section', {
																	children: [
																		(0, E.jsx)('label', {
																			className: 'left-label',
																			children: (0, E.jsx)(x(), {
																				unsafe: !0,
																				content: 'modal.qrcode.input_message',
																			}),
																		}),
																		(0, E.jsx)('input', {
																			name: 'password',
																			type: 'text',
																			onFocus: function () {
																				e.refs.password_input.setAttribute(
																					'type',
																					'password'
																				);
																			},
																			ref: 'password_input',
																			autoComplete: 'off',
																			onKeyDown: this.onKeyDown,
																		}),
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
					]),
					n && Sn(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			(Mn.propTypes = {modalId: v().string.isRequired, keyValue: v().string}),
				(Mn.defaultProps = {modalId: 'qr_code_password_modal'});
			const Rn = Mn;
			function Nn(e) {
				return (
					(Nn =
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
					Nn(e)
				);
			}
			function In(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Tn(e, t) {
				return (
					(Tn =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Tn(e, t)
				);
			}
			function Bn(e, t) {
				if (t && ('object' === Nn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return En(e);
			}
			function En(e) {
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
			var Vn = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Tn(e, t);
				})(a, e);
				var t,
					r,
					o,
					s,
					i =
						((o = a),
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
								t = Dn(o);
							if (s) {
								var n = Dn(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Bn(this, e);
						});
				function a() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((e = i.call(this)).state = e._getInitialState()),
						(e.showModal = e.showModal.bind(En(e))),
						(e.hideModal = e.hideModal.bind(En(e))),
						(e.showQrModal = e.showQrModal.bind(En(e))),
						(e.hideQrModal = e.hideQrModal.bind(En(e))),
						(e.onClose = e.onClose.bind(En(e))),
						e
					);
				}
				return (
					(t = a),
					(r = [
						{
							key: '_getInitialState',
							value: function () {
								return {isModalVisible: !1, isQrModalVisible: !1, wif: null};
							},
						},
						{
							key: 'reset',
							value: function () {
								this.setState(this._getInitialState());
							},
						},
						{
							key: 'hideModal',
							value: function () {
								this.setState({isModalVisible: !1});
							},
						},
						{
							key: 'showModal',
							value: function () {
								this.setState({isModalVisible: !0});
							},
						},
						{
							key: 'hideQrModal',
							value: function () {
								this.setState({isQrModalVisible: !1});
							},
						},
						{
							key: 'showQrModal',
							value: function () {
								this.setState({isQrModalVisible: !0});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = 'key_view_modal' + this.props.pubkey,
									t = xn.Z.getState().keys;
								if (!t.has(this.props.pubkey))
									return (0, E.jsx)('span', {children: this.props.children});
								var r = t.get(this.props.pubkey),
									o = [
										(0, E.jsx)(
											T.Z,
											{
												onClick: this.onClose,
												children: Z().translate('transfer.close'),
											},
											'cancel'
										),
									];
								return (0, E.jsxs)('span', {
									children: [
										(0, E.jsx)('a', {
											onClick: this.onOpen.bind(this),
											children: this.props.children,
										}),
										(0, E.jsx)(B.Z, {
											visible: this.state.isModalVisible,
											title: Z().translate('account.perm.key_viewer'),
											ref: e,
											id: e,
											onCancel: this.onClose,
											footer: o,
											children: (0, E.jsx)('div', {
												className: 'grid-block vertical',
												children: (0, E.jsxs)('div', {
													className: 'content-block',
													children: [
														(0, E.jsxs)('div', {
															className: 'grid-content',
															children: [
																(0, E.jsx)('label', {
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.public',
																	}),
																}),
																this.props.pubkey,
															],
														}),
														(0, E.jsx)('br', {}),
														(0, E.jsxs)('div', {
															className: 'grid-block grid-content',
															children: [
																(0, E.jsx)('label', {
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.private',
																	}),
																}),
																(0, E.jsx)('div', {
																	children: this.state.wif
																		? (0, E.jsxs)('span', {
																				children: [
																					(0, E.jsx)('p', {
																						style: {fontWeight: 600},
																						children: this.state.wif,
																					}),
																					(0, E.jsxs)('div', {
																						className: 'button-group',
																						children: [
																							(0, E.jsx)('div', {
																								className: 'button',
																								onClick: this.onHide.bind(this),
																								children: 'hide',
																							}),
																							(0, E.jsx)('div', {
																								className: 'clickable',
																								onClick: this.showQrModal,
																								children: (0, E.jsx)('img', {
																									style: {height: 50},
																									src: n(54397),
																								}),
																							}),
																						],
																					}),
																				],
																		  })
																		: (0, E.jsx)('span', {
																				children: (0, E.jsx)('div', {
																					className: 'button',
																					onClick: this.onShow.bind(this),
																					children: (0, E.jsx)(x(), {
																						content: 'account.perm.show',
																					}),
																				}),
																		  }),
																}),
															],
														}),
														(0, E.jsx)('br', {}),
														(0, E.jsxs)('div', {
															className: 'grid-block grid-content',
															children: [
																(0, E.jsx)('label', {
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.brain',
																	}),
																}),
																null == r.brainkey_sequence
																	? 'Non-deterministic'
																	: r.brainkey_sequence,
															],
														}),
														(0, E.jsx)('br', {}),
														r.import_account_names &&
														r.import_account_names.length
															? (0, E.jsxs)('div', {
																	className: 'grid-block grid-content',
																	children: [
																		(0, E.jsx)('label', {
																			children: (0, E.jsx)(x(), {
																				content: 'account.perm.from',
																			}),
																		}),
																		r.import_account_names.join(', '),
																		(0, E.jsx)('br', {}),
																	],
															  })
															: null,
													],
												}),
											}),
										}),
										(0, E.jsx)(Rn, {
											showModal: this.showQrModal,
											hideModal: this.hideQrModal,
											visible: this.state.isQrModalVisible,
											keyValue: this.state.wif,
										}),
									],
								});
							},
						},
						{
							key: 'onOpen',
							value: function () {
								this.showModal();
							},
						},
						{
							key: 'onClose',
							value: function () {
								this.reset(), this.hideModal();
							},
						},
						{
							key: 'onShow',
							value: function () {
								var e = this;
								jn.Z.unlock()
									.then(function () {
										var t = bn.Z.getPrivateKey(e.props.pubkey);
										e.setState({wif: t.toWif()});
									})
									.catch(function () {});
							},
						},
						{
							key: 'onHide',
							value: function () {
								this.setState({wif: null});
							},
						},
					]),
					r && In(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			!(function (e, t, n) {
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = n);
			})(Vn, 'propTypes', {pubkey: v().string.isRequired});
			var qn = n(24717);
			function Fn(e) {
				return (
					(Fn =
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
					Fn(e)
				);
			}
			function Un(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Ln(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function zn(e, t, n) {
				return (
					t && Ln(e.prototype, t),
					n && Ln(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Wn(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Kn(e, t);
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
			function Jn(e) {
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
						r = Yn(e);
					if (t) {
						var o = Yn(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return Qn(this, n);
				};
			}
			function Qn(e, t) {
				if (t && ('object' === Fn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Gn(e);
			}
			function Gn(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Yn(e) {
				return (
					(Yn = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Yn(e)
				);
			}
			function Hn(e, t, n) {
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
			var Xn = (function (e) {
				Wn(n, e);
				var t = Jn(n);
				function n() {
					return Un(this, n), t.apply(this, arguments);
				}
				return (
					zn(n, [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return !P.Z.are_equal_shallow(e, this.props);
							},
						},
						{
							key: '_lookUpPubKeyForAddress',
							value: function (e) {
								return qn.Z.getState().addresses.get(e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t,
									n,
									r = '_accounts',
									o = this.props.pubkey,
									s = xn.Z.getState().keys,
									i = !1;
								return (
									this.props.account
										? ((e = this.props.account.get('name')),
										  (t = this.props.account.get('id')),
										  (n = (0, E.jsx)(_.Z, {
												to: '/account/'.concat(e, '/permissions'),
												children: e,
										  })))
										: o
										? ((e = t = o),
										  (n = (0, E.jsx)(Vn, {pubkey: o, children: o})),
										  (r = '_keys'),
										  (i = s.has(o)))
										: this.props.address &&
										  ((o = this._lookUpPubKeyForAddress(this.props.address)),
										  (t = this.props.address),
										  (n = o
												? (0, E.jsx)(Vn, {pubkey: o, children: o})
												: this.props.address),
										  (r = '_addresses'),
										  (i = s.has(o))),
									(0, E.jsxs)(
										'tr',
										{
											children: [
												(0, E.jsx)('td', {
													children: this.props.account
														? (0, E.jsx)(_n.Z, {
																size: {height: 30, width: 30},
																account: e,
														  })
														: o
														? (0, E.jsx)('div', {
																className: 'account-image',
																children: (0, E.jsx)(Vn, {
																	pubkey: o,
																	children: (0, E.jsx)($.Z, {
																		name: 'key',
																		title: 'icons.key',
																		size: '4x',
																	}),
																}),
														  })
														: null,
												}),
												(0, E.jsx)('td', {
													className: (i ? 'my-key' : '') + ' pub-key',
													children: n,
												}),
												(0, E.jsx)('td', {children: this.props.weights[t]}),
												(0, E.jsx)('td', {
													children: (0, E.jsx)('button', {
														className: 'button',
														onClick: this.props.onRemoveItem.bind(this, t, r),
														children: (0, E.jsx)(x(), {
															content: 'account.votes.remove_witness',
														}),
													}),
												}),
											],
										},
										e
									)
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			Hn(Xn, 'propTypes', {
				account: v().object,
				pubkey: v().string,
				address: v().string,
				onRemoveItem: v().func.isRequired,
				weights: v().object,
			});
			var $n = (function (e) {
				Wn(n, e);
				var t = Jn(n);
				function n(e) {
					var r;
					return (
						Un(this, n),
						((r = t.call(this, e)).state = {
							selected_item: null,
							item_name_input: '',
							weight_input: '',
							error: null,
						}),
						(r.onItemChange = r.onItemChange.bind(Gn(r))),
						(r.onItemAccountChange = r.onItemAccountChange.bind(Gn(r))),
						(r.onAddItem = r.onAddItem.bind(Gn(r))),
						r
					);
				}
				return (
					zn(n, [
						{
							key: 'onItemChange',
							value: function (e) {
								this.setState({item_name_input: e});
							},
						},
						{
							key: 'onItemAccountChange',
							value: function (e) {
								var t = this;
								if (
									(this.setState({selected_item: e, error: null}),
									e && this.props.validateAccount)
								) {
									var n = this.props.validateAccount(e);
									if (null === n) return;
									'string' == typeof n
										? this.setState({error: n})
										: n.then(function (e) {
												return t.setState({error: e});
										  });
								}
							},
						},
						{
							key: 'onWeightChanged',
							value: function (e) {
								var t = e.target.value.trim();
								this.setState({weight_input: parseInt(t)});
							},
						},
						{
							key: 'onAddItem',
							value: function (e) {
								if (e) {
									this.setState({
										selected_item: null,
										item_name_input: '',
										weight_input: '',
										error: null,
									});
									var t = 'string' == typeof e ? e : e.get('id');
									this.props.onAddItem(t, this.state.weight_input);
								}
							},
						},
						{
							key: 'onWeightKeyDown',
							value: function (e) {
								13 === e.keyCode &&
									this.state.weight_input &&
									this.state.selected_item &&
									this.onAddItem(this.state.selected_item);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = 0,
									n = this.props.accounts
										.filter(function (e) {
											return !!e;
										})
										.sort(function (e, t) {
											return e.get('name') > t.get('name')
												? 1
												: e.get('name') < t.get('name')
												? -1
												: 0;
										})
										.map(function (n) {
											return (0,
											E.jsx)(Xn, {account: n, weights: e.props.weights, onRemoveItem: e.props.onRemoveItem}, t++);
										}),
									r = this.props.keys.map(function (n) {
										return (0,
										E.jsx)(Xn, {pubkey: n, weights: e.props.weights, onRemoveItem: e.props.onRemoveItem}, t++);
									}),
									o = this.props.addresses.map(function (n) {
										return (0,
										E.jsx)(Xn, {address: n, weights: e.props.weights, onRemoveItem: e.props.onRemoveItem}, t++);
									}),
									s = this.state.error;
								!s &&
									this.state.selected_item &&
									-1 !==
										this.props.accounts.indexOf(this.state.selected_item) &&
									(s = Z().translate('account.perm.warning3')),
									!s &&
										this.state.item_name_input &&
										-1 !==
											this.props.keys.indexOf(this.state.item_name_input) &&
										(s = Z().translate('account.perm.warning4'));
								var i = ['10%', '70%', '30%', '10%'];
								return (0, E.jsxs)('div', {
									children: [
										(0, E.jsx)(R.Z, {
											label: this.props.label,
											error: s,
											placeholder: this.props.placeholder,
											account: this.state.item_name_input,
											accountName: this.state.item_name_input,
											onChange: this.onItemChange,
											onAccountChanged: this.onItemAccountChange,
											onAction: this.onAddItem,
											action_label: 'account.votes.add_witness',
											tabIndex: this.props.tabIndex,
											allowPubKey: !0,
											disableActionButton: !this.state.weight_input,
											allowUppercase: !0,
											children: (0, E.jsx)('input', {
												value: this.state.weight_input,
												onChange: this.onWeightChanged.bind(this),
												className: 'weight-input',
												type: 'number',
												autoComplete: 'off',
												placeholder: Z().translate('account.perm.weight'),
												onKeyDown: this.onWeightKeyDown.bind(this),
												tabIndex: this.props.tabIndex + 1,
											}),
										}),
										(0, E.jsx)('div', {
											style: {paddingTop: '2rem'},
											children: (0, E.jsxs)('table', {
												className: 'table',
												children: [
													(0, E.jsx)('thead', {
														children: (0, E.jsxs)('tr', {
															children: [
																(0, E.jsx)('th', {style: {width: i[0]}}),
																(0, E.jsx)('th', {
																	style: {width: i[1]},
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.acct_or_key',
																	}),
																}),
																(0, E.jsx)('th', {
																	style: {width: i[2]},
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.weight',
																	}),
																}),
																(0, E.jsx)('th', {
																	style: {width: i[3]},
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.action',
																	}),
																}),
															],
														}),
													}),
													(0, E.jsxs)('tbody', {children: [n, r, o]}),
												],
											}),
										}),
									],
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			Hn($n, 'propTypes', {
				accounts: c.Z.ChainObjectsList,
				onAddItem: v().func.isRequired,
				onRemoveItem: v().func.isRequired,
				validateAccount: v().func,
				label: v().string.isRequired,
				placeholder: v().string,
				tabIndex: v().number,
				weights: v().object,
			});
			const er = (0, l.Z)($n, {autosubscribe: !1});
			var tr = n(23725),
				nr = n.n(tr),
				rr = n(62979);
			function or(e) {
				return (
					(or =
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
					or(e)
				);
			}
			function sr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ir(e, t) {
				return (
					(ir =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ir(e, t)
				);
			}
			function ar(e, t) {
				if (t && ('object' === or(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return cr(e);
			}
			function cr(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function lr(e) {
				return (
					(lr = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					lr(e)
				);
			}
			function ur(e, t, n) {
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
			var pr = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && ir(e, t);
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
								t = lr(r);
							if (o) {
								var n = lr(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return ar(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this)).handleChange = t.handleChange.bind(cr(t))),
						(t.onKeyDown = t.onKeyDown.bind(cr(t))),
						(t.state = {
							value: e.value || '',
							error: null,
							wrong: !1,
							doesnt_match: !1,
						}),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'value',
							value: function () {
								var e = this.refs.password;
								return e ? e.value : '';
							},
						},
						{
							key: 'clear',
							value: function () {
								(this.refs.password.value = ''),
									this.props.confirmation &&
										(this.refs.confirm_password.value = '');
							},
						},
						{
							key: 'focus',
							value: function () {
								this.refs.password.focus();
							},
						},
						{
							key: 'valid',
							value: function () {
								return (
									!(
										this.state.error ||
										this.state.wrong ||
										this.state.doesnt_match
									) && this.state.value.length >= this.props.passwordLength
								);
							},
						},
						{
							key: 'handleChange',
							value: function (e) {
								e.preventDefault(), e.stopPropagation();
								var t,
									n =
										!this.props.confirmation ||
										this.refs.confirm_password.value,
									r = this.refs.password.value,
									o = !!this.props.confirmation && n && r !== n,
									s = 0;
								this.props.checkStrength &&
									((s =
										this.state.value.length > 100
											? {score: 4}
											: nr().load({sync: !0})(this.state.value || '')),
									(t = Math.min(
										5,
										s.score +
											Math.floor(
												this.state.value.length /
													(1.5 * this.props.passwordLength)
											)
									)));
								var i = {
									valid:
										!this.state.error &&
										!this.state.wrong &&
										!(this.props.confirmation && o) &&
										n &&
										r.length >= this.props.passwordLength,
									value: r,
									score: t,
									doesnt_match: o,
								};
								this.props.onChange && this.props.onChange(i), this.setState(i);
							},
						},
						{
							key: 'onKeyDown',
							value: function (e) {
								this.props.onEnter && 13 === e.keyCode && this.props.onEnter(e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.state,
									t = e.score,
									n = e.value,
									r = this.props,
									o = r.copy,
									s = r.visible,
									i = r.readonly,
									a = null,
									c = null;
								this.state.wrong || this.props.wrongPassword
									? (a = (0, E.jsx)('div', {
											children: (0, E.jsx)(x(), {
												content: 'wallet.pass_incorrect',
											}),
									  }))
									: this.state.error &&
									  (a = (0, E.jsx)('div', {children: this.state.error})),
									!this.props.noValidation &&
										!a &&
										this.state.value.length > 0 &&
										this.state.value.length < this.props.passwordLength &&
										(a = (0, E.jsx)('div', {
											children: (0, E.jsx)(x(), {
												content: 'wallet.pass_length',
												minLength: this.props.passwordLength,
											}),
										})),
									this.state.doesnt_match &&
										(c = (0, E.jsx)('div', {
											children: (0, E.jsx)(x(), {
												content: 'wallet.confirm_error',
											}),
										}));
								var l = ue()('form-group', {'has-error': a}),
									u = ue()('form-group', {
										'has-error': this.state.doesnt_match,
									}),
									p = !1;
								return (
									this.refs.confirm_password &&
										this.refs.confirm_password.value &&
										!this.state.doesnt_match &&
										(p = !0),
									(0, E.jsxs)('div', {
										className: 'account-selector',
										children: [
											(0, E.jsxs)('div', {
												className: l,
												children: [
													(0, E.jsxs)('section', {
														children: [
															(0, E.jsx)('label', {
																className:
																	'left-label ' + (this.props.labelClass || ''),
																children: (0, E.jsx)(x(), {
																	content: 'wallet.enter_password',
																}),
															}),
															(0, E.jsxs)('div', {
																className: 'generated-password-section',
																children: [
																	(0, E.jsx)('input', {
																		style: {
																			marginBottom: this.props.checkStrength
																				? 0
																				: null,
																			display: o ? 'inline' : 'block',
																		},
																		id: 'current-password',
																		name: 'password',
																		type: s ? 'text' : 'password',
																		ref: 'password',
																		autoComplete: 'current-password',
																		onChange: this.handleChange,
																		onKeyDown: this.onKeyDown,
																		value: n,
																		readOnly: i,
																	}),
																	o &&
																		(0, E.jsx)(rr.Z, {
																			text: n,
																			tip: 'tooltip.copy_password',
																			dataPlace: 'top',
																			className: 'button password-copy-button',
																		}),
																],
															}),
															this.props.checkStrength
																? (0, E.jsx)('progress', {
																		style: {height: 10},
																		className:
																			5 === t
																				? 'high'
																				: 4 === t
																				? 'medium'
																				: 'low',
																		value: t,
																		max: '5',
																		min: '0',
																  })
																: null,
														],
													}),
													a,
												],
											}),
											this.props.confirmation
												? (0, E.jsxs)('div', {
														className: u,
														children: [
															(0, E.jsx)('label', {
																className: 'left-label',
																children: (0, E.jsx)(x(), {
																	content: 'wallet.confirm_password',
																}),
															}),
															(0, E.jsxs)('section', {
																style: {
																	position: 'relative',
																	maxWidth: '30rem',
																},
																children: [
																	(0, E.jsx)('input', {
																		id: 'confirm_password',
																		name: 'confirm_password',
																		type: 'password',
																		ref: 'confirm_password',
																		autoComplete: 'confirm-password',
																		onChange: this.handleChange,
																	}),
																	p
																		? (0, E.jsx)('div', {
																				className: 'ok-indicator success',
																				children: 'OK',
																		  })
																		: null,
																],
															}),
															c,
														],
												  })
												: null,
										],
									})
								);
							},
						},
					]),
					n && sr(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			ur(pr, 'propTypes', {
				onChange: v().func,
				onEnter: v().func,
				confirmation: v().bool,
				wrongPassword: v().bool,
				noValidation: v().bool,
				noLabel: v().bool,
				passwordLength: v().number,
				checkStrength: v().bool,
				value: v().string,
				copy: v().bool,
				visible: v().bool,
				readonly: v().bool,
			}),
				ur(pr, 'defaultProps', {
					confirmation: !1,
					wrongPassword: !1,
					noValidation: !1,
					noLabel: !1,
					passwordLength: 8,
					checkStrength: !1,
					value: '',
					copy: !1,
					visible: !1,
					readonly: !1,
				});
			const dr = pr;
			var hr = n(25108);
			function fr(e) {
				return (
					(fr =
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
					fr(e)
				);
			}
			function yr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function br(e, t) {
				return (
					(br =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					br(e, t)
				);
			}
			function mr(e, t) {
				if (t && ('object' === fr(t) || 'function' == typeof t)) return t;
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
			function gr(e) {
				return (
					(gr = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					gr(e)
				);
			}
			var vr = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && br(e, t);
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
								t = gr(r);
							if (o) {
								var n = gr(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return mr(this, e);
						});
				function i() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((e = s.call(this)).state = {
							validPassword: !1,
							pass: null,
							generatedPassword:
								'P' + de.Jy.get_random_key().toWif().toString(),
						}),
						e
					);
				}
				return (
					(t = i),
					(n = [
						{key: 'onSubmit', value: function () {}},
						{
							key: 'onPasswordChange',
							value: function (e) {
								var t = e.valid,
									n = this.props.account.get('name'),
									r = t
										? bn.Z.generateKeyFromPassword(n, 'active', e.value).pubKey
										: null,
									o = t
										? bn.Z.generateKeyFromPassword(n, 'owner', e.value).pubKey
										: null,
									s = t
										? bn.Z.generateKeyFromPassword(n, 'memo', e.value).pubKey
										: null;
								this.setState({validPassword: e.valid, pass: e.value}),
									this.props.onSetPasswordKeys({active: r, owner: o, memo: s});
							},
						},
						{
							key: 'checkKeyUse',
							value: function (e, t) {
								return (
									!!e &&
									('memo' === t
										? e === this.props.memoKey
										: this.props[''.concat(t, 'Keys')].reduce(function (t, n) {
												return n === e || t;
										  }, !1))
								);
							},
						},
						{
							key: '_onUseKey',
							value: function (e) {
								var t =
									arguments.length > 1 &&
									void 0 !== arguments[1] &&
									arguments[1];
								if (t)
									this.props[
										'active' === e ? 'onRemoveActive' : 'onRemoveOwner'
									](this.props[e], '_keys');
								else if (this.props[e]) {
									var n = {
										active: this.props.account.getIn([
											'active',
											'weight_threshold',
										]),
										owner: this.props.account.getIn([
											'owner',
											'weight_threshold',
										]),
									};
									hr.log(
										'key',
										this.props[e],
										'weights',
										n,
										'weight of role:',
										n[e]
									),
										this.props[
											'active' === e
												? 'onAddActive'
												: 'owner' === e
												? 'onAddOwner'
												: 'onSetMemo'
										](this.props[e], n[e]);
								}
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.checkKeyUse(
										this.props.active && this.props.active,
										'active'
									),
									t = this.checkKeyUse(
										this.props.owner && this.props.owner,
										'owner'
									),
									n = this.checkKeyUse(
										this.props.memo && this.props.memo,
										'memo'
									),
									r = Z().translate('account.perm.use_text'),
									o = Z().translate('account.perm.remove_text');
								return (0, E.jsxs)('div', {
									children: [
										(0, E.jsx)('p', {
											style: {maxWidth: '800px'},
											children: (0, E.jsx)(x(), {
												content: 'account.perm.password_model_1',
											}),
										}),
										(0, E.jsx)('p', {
											style: {maxWidth: '800px'},
											children: (0, E.jsx)(x(), {
												content: 'wallet.password_model_1',
											}),
										}),
										(0, E.jsx)('p', {
											style: {maxWidth: '800px'},
											children: (0, E.jsx)(x(), {
												unsafe: !0,
												content: 'wallet.password_model_2',
											}),
										}),
										(0, E.jsx)('div', {className: 'divider'}),
										(0, E.jsxs)('form', {
											style: {maxWidth: '40rem'},
											onSubmit: this.onSubmit.bind(this),
											noValidate: !0,
											children: [
												(0, E.jsx)('label', {
													className: 'left-label',
													children: (0, E.jsx)(x(), {
														content: 'wallet.generated',
													}),
												}),
												(0, E.jsx)('p', {
													children: this.state.generatedPassword,
												}),
												(0, E.jsx)('p', {
													style: {fontWeight: 'bold'},
													children: (0, E.jsx)(x(), {
														content: 'account.perm.password_model_2',
													}),
												}),
												(0, E.jsx)(dr, {
													ref: 'password',
													confirmation: !0,
													onChange: this.onPasswordChange.bind(this),
													noLabel: !0,
													passwordLength: 12,
													checkStrength: !0,
												}),
											],
										}),
										(0, E.jsx)('table', {
											className: 'table',
											children: (0, E.jsxs)('tbody', {
												children: [
													(0, E.jsxs)('tr', {
														className: e ? 'in-use' : '',
														children: [
															(0, E.jsxs)('td', {
																children: [
																	(0, E.jsx)(x(), {
																		content: 'account.perm.new_active',
																	}),
																	':',
																],
															}),
															(0, E.jsx)('td', {children: this.props.active}),
															(0, E.jsx)('td', {
																className: 'text-right',
																children: (0, E.jsx)('div', {
																	className: 'button',
																	onClick: this._onUseKey.bind(
																		this,
																		'active',
																		e
																	),
																	children: e ? o : r,
																}),
															}),
														],
													}),
													(0, E.jsxs)('tr', {
														className: t ? 'in-use' : '',
														children: [
															(0, E.jsxs)('td', {
																children: [
																	(0, E.jsx)(x(), {
																		content: 'account.perm.new_owner',
																	}),
																	':',
																],
															}),
															(0, E.jsx)('td', {children: this.props.owner}),
															(0, E.jsx)('td', {
																className: 'text-right',
																children: (0, E.jsx)('div', {
																	className: 'button',
																	onClick: this._onUseKey.bind(
																		this,
																		'owner',
																		t
																	),
																	children: t ? o : r,
																}),
															}),
														],
													}),
													(0, E.jsxs)('tr', {
														className: n ? 'in-use' : '',
														children: [
															(0, E.jsxs)('td', {
																children: [
																	(0, E.jsx)(x(), {
																		content: 'account.perm.new_memo',
																	}),
																	':',
																],
															}),
															(0, E.jsx)('td', {children: this.props.memo}),
															(0, E.jsx)('td', {
																className: 'text-right',
																children: (0, E.jsx)('div', {
																	className: 'button',
																	style: {visibility: n ? 'hidden' : ''},
																	onClick: this._onUseKey.bind(this, 'memo', n),
																	children: r,
																}),
															}),
														],
													}),
												],
											}),
										}),
										n
											? (0, E.jsx)('p', {
													style: {maxWidth: '800px', paddingTop: 10},
													className: 'has-error',
													children: (0, E.jsx)(x(), {
														content: 'account.perm.memo_warning',
													}),
											  })
											: null,
									],
								});
							},
						},
					]),
					n && yr(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			function _r(e) {
				return (
					(_r =
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
					_r(e)
				);
			}
			function jr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function xr(e, t) {
				return (
					(xr =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					xr(e, t)
				);
			}
			function wr(e, t) {
				if (t && ('object' === _r(t) || 'function' == typeof t)) return t;
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
			function kr(e) {
				return (
					(kr = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					kr(e)
				);
			}
			var Or = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && xr(e, t);
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
								t = kr(r);
							if (o) {
								var n = kr(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return wr(this, e);
						});
				function i(e) {
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						s.call(this, e)
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'isValidPubKey',
							value: function (e) {
								return !!de.nh.fromPublicKeyString(e);
							},
						},
						{
							key: 'onInputChanged',
							value: function (e) {
								var t = e.target.value.trim();
								this.props.onChange(t);
							},
						},
						{
							key: 'onKeyDown',
							value: function (e) {
								13 === e.keyCode && this.onAction(e);
							},
						},
						{
							key: 'onAction',
							value: function (e) {
								e.preventDefault(),
									this.props.onAction &&
										this.state.valid &&
										!this.props.disableActionButton &&
										this.props.onAction(e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props.error;
								e ||
									!this.props.value ||
									this.isValidPubKey(this.props.value) ||
									(e = 'Not a valid public key');
								var t = ue()('button', {
										disabled: e || this.props.disableActionButton,
									}),
									n = xn.Z.getState().keys,
									r =
										this.isValidPubKey(this.props.value) &&
										n.has(this.props.value);
								return (0, E.jsx)('div', {
									className: 'pubkey-input no-overflow',
									children: (0, E.jsxs)('div', {
										className: 'content-area',
										children: [
											(0, E.jsxs)('div', {
												className: 'header-area',
												children: [
													!e &&
													this.props.value &&
													this.isValidPubKey(this.props.value)
														? (0, E.jsx)('label', {
																className: 'right-label',
																children: (0, E.jsx)(x(), {
																	content: 'account.perm.valid_pub',
																}),
														  })
														: null,
													(0, E.jsx)(x(), {
														className: 'left-label',
														component: 'label',
														content: this.props.label,
													}),
												],
											}),
											(0, E.jsx)('div', {
												className: 'input-area',
												children: (0, E.jsxs)('span', {
													className: 'inline-label',
													children: [
														(0, E.jsx)('div', {
															className: 'account-image',
															children: (0, E.jsx)(Vn, {
																pubkey: this.props.value,
																children: (0, E.jsx)($.Z, {
																	name: 'key',
																	title: 'icons.key',
																	size: '4x',
																}),
															}),
														}),
														(0, E.jsx)('input', {
															type: 'text',
															className: r ? 'my-key' : '',
															value: this.props.value,
															placeholder:
																this.props.placeholder ||
																counterpart.translate('account.public_key'),
															ref: 'user_input',
															onChange: this.onInputChanged.bind(this),
															onKeyDown: this.onKeyDown.bind(this),
															tabIndex: this.props.tabIndex,
														}),
														this.props.onAction
															? (0, E.jsx)('button', {
																	className: t,
																	onClick: this.onAction.bind(this),
																	children: (0, E.jsx)(x(), {
																		content: this.props.action_label,
																	}),
															  })
															: null,
													],
												}),
											}),
											(0, E.jsx)('div', {
												className: 'error-area has-error',
												children: (0, E.jsx)('span', {children: e}),
											}),
										],
									}),
								});
							},
						},
					]),
					n && jr(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			!(function (e, t, n) {
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = n);
			})(Or, 'propTypes', {
				label: v().string.isRequired,
				value: v().string,
				error: v().string,
				placeholder: v().string,
				onChange: v().func,
				onAction: v().func,
				tabIndex: v().number,
				disableActionButton: v().bool,
			});
			const Sr = Or;
			var Cr = n(70403),
				Pr = n(25108);
			function Ar(e) {
				return (
					(Ar =
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
					Ar(e)
				);
			}
			function Zr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Mr(e, t) {
				return (
					(Mr =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Mr(e, t)
				);
			}
			function Rr(e, t) {
				if (t && ('object' === Ar(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Nr(e);
			}
			function Nr(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Ir(e) {
				return (
					(Ir = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ir(e)
				);
			}
			var Tr = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Mr(e, t);
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
								t = Ir(r);
							if (o) {
								var n = Ir(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Rr(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = {}),
						(t.onPublish = t.onPublish.bind(Nr(t))),
						(t.onReset = t.onReset.bind(Nr(t))),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'componentWillMount',
							value: function () {
								this.updateAccountData(this.props.account),
									p.Z.getFinalFeeAsset(this.props.account, 'account_update');
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								e.account !== this.props.account &&
									this.updateAccountData(e.account);
							},
						},
						{
							key: 'permissionsFromImmutableObj',
							value: function (e) {
								var t = e.get('weight_threshold'),
									n = e.get('account_auths'),
									r = e.get('key_auths'),
									o = e.get('address_auths'),
									s = n.map(function (e) {
										return e.get(0);
									}),
									i = r.map(function (e) {
										return e.get(0);
									}),
									a = o.map(function (e) {
										return e.get(0);
									}),
									c = n.reduce(function (e, t) {
										return (e[t.get(0)] = t.get(1)), e;
									}, {});
								return (
									(c = r.reduce(function (e, t) {
										return (e[t.get(0)] = t.get(1)), e;
									}, c)),
									{
										threshold: t,
										accounts: s,
										keys: i,
										addresses: a,
										weights: (c = o.reduce(function (e, t) {
											return (e[t.get(0)] = t.get(1)), e;
										}, c)),
									}
								);
							},
						},
						{
							key: 'permissionsToJson',
							value: function (e, t, n, r, o) {
								var s = {weight_threshold: e};
								return (
									(s.account_auths = t
										.sort(P.Z.sortID)
										.map(function (e) {
											return [e, o[e]];
										})
										.toJS()),
									(s.key_auths = n
										.sort(P.Z.sortID)
										.map(function (e) {
											return [e, o[e]];
										})
										.toJS()),
									(s.address_auths = r
										.sort(P.Z.sortID)
										.map(function (e) {
											return [e, o[e]];
										})
										.toJS()),
									s
								);
							},
						},
						{
							key: 'updateAccountData',
							value: function (e) {
								var t = this.permissionsFromImmutableObj(e.get('active')),
									n = this.permissionsFromImmutableObj(e.get('owner')),
									r = e.get('options').get('memo_key'),
									o = {
										active_accounts: t.accounts,
										active_keys: t.keys,
										active_addresses: t.addresses,
										owner_accounts: n.accounts,
										owner_keys: n.keys,
										owner_addresses: n.addresses,
										active_weights: t.weights,
										owner_weights: n.weights,
										active_threshold: t.threshold,
										owner_threshold: n.threshold,
										memo_key: r,
										prev_active_accounts: t.accounts,
										prev_active_keys: t.keys,
										prev_active_addresses: t.addresses,
										prev_owner_accounts: n.accounts,
										prev_owner_keys: n.keys,
										prev_owner_addresses: n.addresses,
										prev_active_weights: t.weights,
										prev_owner_weights: n.weights,
										prev_active_threshold: t.threshold,
										prev_owner_threshold: n.threshold,
										prev_memo_key: r,
									};
								this.setState(o);
							},
						},
						{
							key: 'isChanged',
							value: function () {
								var e = this.state;
								return (
									e.active_accounts !== e.prev_active_accounts ||
									e.active_keys !== e.prev_active_keys ||
									e.active_addresses !== e.prev_active_addresses ||
									e.owner_accounts !== e.prev_owner_accounts ||
									e.owner_keys !== e.prev_owner_keys ||
									e.owner_addresses !== e.prev_owner_addresses ||
									e.active_threshold !== e.prev_active_threshold ||
									e.owner_threshold !== e.prev_owner_threshold ||
									e.memo_key !== e.prev_memo_key
								);
							},
						},
						{
							key: 'didChange',
							value: function (e) {
								var t =
									arguments.length > 1 && void 0 !== arguments[1]
										? arguments[1]
										: this.state;
								if ('memo' === e) return t.memo_key !== t.prev_memo_key;
								var n = !1;
								return (
									[
										'_keys',
										'_active_addresses',
										'_accounts',
										'_threshold',
									].forEach(function (r) {
										var o = e + r;
										t[o] !== t['prev_' + o] && (n = !0);
									}),
									n
								);
							},
						},
						{
							key: 'onPublish',
							value: function () {
								var e = this.state,
									t = this.props.account.toJS();
								t.fee = {
									amount: 0,
									asset_id: p.Z.getFinalFeeAsset(t.id, 'account_update'),
								};
								var n = {account: t.id};
								if (
									(this.didChange('active') &&
										(n.active = this.permissionsToJson(
											e.active_threshold,
											e.active_accounts,
											e.active_keys,
											e.active_addresses,
											e.active_weights
										)),
									this.didChange('owner') &&
										(n.owner = this.permissionsToJson(
											e.owner_threshold,
											e.owner_accounts,
											e.owner_keys,
											e.owner_addresses,
											e.owner_weights
										)),
									this.didChange('owner') &&
										0 === e.owner_keys.size &&
										0 === e.owner_addresses.size &&
										1 === e.owner_accounts.size &&
										e.owner_accounts.first() === t.id)
								)
									return I.Z.warning({
										message: Z().translate(
											'notifications.account_permissions_update_warning'
										),
									});
								e.memo_key &&
									this.didChange('memo') &&
									this.isValidPubKey(e.memo_key) &&
									((n.new_options = this.props.account.get('options').toJS()),
									(n.new_options.memo_key = e.memo_key)),
									M.Z.updateAccount(n);
							},
						},
						{
							key: 'isValidPubKey',
							value: function (e) {
								return !!de.nh.fromPublicKeyString(e);
							},
						},
						{
							key: 'onReset',
							value: function () {
								var e = this.state;
								this.setState({
									active_accounts: e.prev_active_accounts,
									active_keys: e.prev_active_keys,
									active_addresses: e.prev_active_addresses,
									owner_accounts: e.prev_owner_accounts,
									owner_keys: e.prev_owner_keys,
									owner_addresses: e.prev_owner_addresses,
									active_weights: e.prev_active_weights,
									owner_weights: e.prev_owner_weights,
									active_threshold: e.prev_active_threshold,
									owner_threshold: e.prev_owner_threshold,
									memo_key: e.prev_memo_key,
								});
							},
						},
						{
							key: 'onAddItem',
							value: function (e, t, n) {
								var r = {},
									o = e + (P.Z.is_object_id(t) ? '_accounts' : '_keys');
								(r[o] = this.state[o].push(t)),
									(this.state[e + '_weights'][t] = n),
									this.setState(r);
							},
						},
						{
							key: 'onRemoveItem',
							value: function (e, t, n) {
								Pr.log('onRemoveItem', e, t, n);
								var r = {},
									o = e + n;
								(r[o] = this.state[o].filter(function (e) {
									return e !== t;
								})),
									this.setState(r);
							},
						},
						{
							key: 'onThresholdChanged',
							value: function (e, t) {
								var n = parseInt(t.target.value.trim()),
									r = {};
								(r[e] = n), this.setState(r);
							},
						},
						{
							key: 'validateAccount',
							value: function (e, t) {
								return null;
							},
						},
						{
							key: 'sumUpWeights',
							value: function (e, t, n, r) {
								var o = e.reduce(function (e, t) {
									return e + r[t];
								}, 0);
								return (
									(o = t.reduce(function (e, t) {
										return e + r[t];
									}, o)),
									n.reduce(function (e, t) {
										return e + r[t];
									}, o)
								);
							},
						},
						{
							key: 'onMemoKeyChanged',
							value: function (e) {
								this.setState({memo_key: e});
							},
						},
						{
							key: 'onSetPasswordKeys',
							value: function (e) {
								var t =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: ['active', 'owner', 'memo'],
									n = {};
								t.forEach(function (t) {
									n['password_'.concat(t)] = e[t];
								}),
									this.setState(n);
							},
						},
						{
							key: 'onPdfCreate',
							value: function () {
								!(function (e) {
									var t = function (t) {
										return e
											.get(t)
											.get('key_auths')
											.map(function (e) {
												return e.get(0);
											});
									};
									!(function (e, t, n, r) {
										var o = 110,
											s = [t, e, n],
											i = ['Active Key', 'Owner Key', 'Memo Key'],
											a = bn.Z.isLocked(),
											c = new (fn())({
												orientation: 'portrait',
												format: [1050, 1150],
												compressPdf: !0,
											}),
											l = function (e, t, n) {
												return (
													t >= n && (e.addPage(), (o = 10)),
													c.internal.getNumberOfPages()
												);
											},
											u = function (e) {
												var t = l(c, o, 400),
													n = null;
												a || ((n = bn.Z.getPrivateKey(e)) && (n = n.toWif())),
													p(e, 5, o + 10, t),
													!a && n && p(n, 315, o + 10, t),
													c.text('PublicKey', 57, o + 20),
													c.text(e, 57, o + 30),
													c.rect(56, o + 24, 258, 8),
													a ||
														(c.text('PrivateKey', 57, o + 40),
														n
															? c.text(n, 57, o + 50)
															: c.text('Not found.', 57, o + 50),
														c.rect(56, o + 44, 258, 8)),
													(o += 50);
											},
											p = function (e, t, n, r) {
												yn.toDataURL(e)
													.then(function (e) {
														c.setPage(r), c.addImage(e, 'JPEG', t, n, 50, 50);
													})
													.catch(function (e) {
														vn.error(e);
													});
											},
											d = new Image();
										(d.src = gn()),
											c.addImage(d, 'PNG', 115, 30, 150, 50, '', 'MEDIUM'),
											c.text('Account:', 18, o - 10),
											c.text(r, 42, o - 10);
										var h = s.map(function (e, t) {
											t >= 1 && (o += 25),
												l(c, o, 400),
												c.text('Public', 22, o + 7),
												c.text(i[t], 170, o + 7),
												a || c.text('Private', 327, o + 7),
												c.line(5, o + 1, 365, o + 1),
												c.line(5, o + 9, 365, o + 9),
												'string' == typeof e
													? u(e)
													: e.map(function (e) {
															u(e);
													  });
										});
										Promise.all(h).then(function () {
											c.save(
												'meta-paper-wallet-' +
													(a ? 'public-' : 'private-') +
													r +
													'.pdf'
											);
										});
									})(
										t('owner'),
										t('active'),
										e.get('options').get('memo_key'),
										e.get('name')
									);
								})(this.props.account);
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t,
									n = this,
									r = this.state,
									o = r.active_accounts,
									s = r.active_keys,
									i = r.active_addresses,
									a = r.active_weights,
									c = this.state,
									l = c.owner_accounts,
									u = c.owner_keys,
									p = c.owner_addresses,
									d = c.owner_weights,
									f =
										this.state.active_threshold > 0
											? this.state.active_threshold
											: 0,
									y = this.sumUpWeights(o, s, i, a);
								this.didChange('active') &&
									y < f &&
									(e = Z().translate('account.perm.warning1', {
										weights_total: y,
										threshold: f,
									})),
									(f =
										this.state.owner_threshold > 0
											? this.state.owner_threshold
											: 0),
									(y = this.sumUpWeights(l, u, p, d)),
									this.didChange('owner') &&
										y < f &&
										(t = Z().translate('account.perm.warning2', {
											weights_total: y,
											threshold: f,
										}));
								var b =
										'button' +
										(!e &&
										!t &&
										this.isChanged() &&
										this.isValidPubKey(this.state.memo_key)
											? ''
											: ' disabled'),
									m = 'button' + (this.isChanged() ? '' : ' disabled'),
									g = h().Set();
								return (
									(g = g.add(this.props.account.get('id'))),
									(0, E.jsx)('div', {
										className: 'grid-content app-tables no-padding',
										ref: 'appTables',
										children: (0, E.jsx)('div', {
											className: 'content-block small-12',
											children: (0, E.jsxs)('div', {
												className: 'tabs-container generic-bordered-box',
												children: [
													(0, E.jsxs)(X.m, {
														defaultActiveTab: 1,
														segmented: !1,
														setting: 'permissionsTab',
														className: 'account-tabs',
														tabsClass:
															'account-overview bordered-header content-block',
														contentClass: 'padding',
														actionButtons: (0, E.jsxs)('div', {
															className: 'action-buttons',
															children: [
																(0, E.jsx)('button', {
																	className: m,
																	onClick: this.onReset,
																	tabIndex: 8,
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.reset',
																	}),
																}),
																(0, E.jsx)('button', {
																	className: b,
																	onClick: this.onPublish,
																	tabIndex: 9,
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.publish',
																	}),
																}),
																(0, E.jsx)('button', {
																	className: 'button',
																	style: {marginLeft: 10},
																	'data-tip': Z().translate(
																		'account.perm.create_paperwallet_private_hint'
																	),
																	'data-place': 'bottom',
																	onClick: function () {
																		n.onPdfCreate();
																	},
																	tabIndex: 10,
																	children: (0, E.jsx)(x(), {
																		content: 'account.perm.create_paperwallet',
																	}),
																}),
															],
														}),
														children: [
															(0, E.jsxs)(X.O, {
																title: 'account.perm.active',
																children: [
																	(0, E.jsx)(pe.Z, {
																		path: 'components/AccountPermActive',
																	}),
																	(0, E.jsx)('form', {
																		className: 'threshold',
																		children: (0, E.jsxs)('label', {
																			className: 'horizontal',
																			children: [
																				(0, E.jsx)(x(), {
																					content: 'account.perm.threshold',
																				}),
																				'    ',
																				(0, E.jsx)('input', {
																					type: 'number',
																					placeholder: '0',
																					size: '5',
																					value: this.state.active_threshold,
																					onChange:
																						this.onThresholdChanged.bind(
																							this,
																							'active_threshold'
																						),
																					autoComplete: 'off',
																					tabIndex: 1,
																				}),
																			],
																		}),
																	}),
																	(0, E.jsx)(er, {
																		label: 'account.perm.add_permission_label',
																		accounts: o,
																		keys: s,
																		weights: a,
																		addresses: i,
																		validateAccount: this.validateAccount.bind(
																			this,
																			'active'
																		),
																		onAddItem: this.onAddItem.bind(
																			this,
																			'active'
																		),
																		onRemoveItem: this.onRemoveItem.bind(
																			this,
																			'active'
																		),
																		placeholder: Z().translate(
																			'account.perm.account_name_or_key'
																		),
																		tabIndex: 2,
																	}),
																	(0, E.jsx)('br', {}),
																	e
																		? (0, E.jsx)('div', {
																				className: 'content-block has-error',
																				children: e,
																		  })
																		: null,
																],
															}),
															(0, E.jsxs)(X.O, {
																title: 'account.perm.owner',
																children: [
																	(0, E.jsx)(pe.Z, {
																		path: 'components/AccountPermOwner',
																	}),
																	(0, E.jsx)('form', {
																		className: 'threshold',
																		children: (0, E.jsxs)('label', {
																			className: 'horizontal',
																			children: [
																				(0, E.jsx)(x(), {
																					content: 'account.perm.threshold',
																				}),
																				'    ',
																				(0, E.jsx)('input', {
																					type: 'number',
																					placeholder: '0',
																					size: '5',
																					value: this.state.owner_threshold,
																					onChange:
																						this.onThresholdChanged.bind(
																							this,
																							'owner_threshold'
																						),
																					autoComplete: 'off',
																					tabIndex: 4,
																				}),
																			],
																		}),
																	}),
																	(0, E.jsx)(er, {
																		label: 'account.perm.add_permission_label',
																		accounts: l,
																		keys: u,
																		weights: d,
																		addresses: p,
																		validateAccount: this.validateAccount.bind(
																			this,
																			'owner'
																		),
																		onAddItem: this.onAddItem.bind(
																			this,
																			'owner'
																		),
																		onRemoveItem: this.onRemoveItem.bind(
																			this,
																			'owner'
																		),
																		placeholder: Z().translate(
																			'account.perm.account_name_or_key'
																		),
																		tabIndex: 5,
																	}),
																	(0, E.jsx)('br', {}),
																	t
																		? (0, E.jsx)('div', {
																				className: 'content-block has-error',
																				children: t,
																		  })
																		: null,
																],
															}),
															(0, E.jsxs)(X.O, {
																title: 'account.perm.memo_key',
																children: [
																	(0, E.jsx)(pe.Z, {
																		style: {maxWidth: '800px'},
																		path: 'components/AccountPermMemo',
																	}),
																	(0, E.jsx)(Sr, {
																		ref: 'memo_key',
																		value: this.state.memo_key,
																		label: 'account.perm.memo_public_key',
																		placeholder: 'Public Key',
																		onChange: this.onMemoKeyChanged.bind(this),
																		tabIndex: 7,
																	}),
																],
															}),
															(0, E.jsx)(X.O, {
																title: 'account.perm.password_model',
																children: (0, E.jsx)(vr, {
																	active: this.state.password_active,
																	owner: this.state.password_owner,
																	memo: this.state.password_memo,
																	onSetPasswordKeys:
																		this.onSetPasswordKeys.bind(this),
																	account: this.props.account,
																	activeKeys: this.state.active_keys,
																	ownerKeys: this.state.owner_keys,
																	memoKey: this.state.memo_key,
																	onAddActive: this.onAddItem.bind(
																		this,
																		'active'
																	),
																	onRemoveActive: this.onRemoveItem.bind(
																		this,
																		'active'
																	),
																	onAddOwner: this.onAddItem.bind(
																		this,
																		'owner'
																	),
																	onRemoveOwner: this.onRemoveItem.bind(
																		this,
																		'owner'
																	),
																	onSetMemo: this.onMemoKeyChanged.bind(this),
																}),
															}),
														],
													}),
													(0, E.jsxs)('div', {
														className: 'tab-content',
														style: {padding: 10},
														children: [
															(0, E.jsx)('div', {className: 'divider'}),
															(0, E.jsx)(Cr.t, {
																accountsList: g,
																limit: 25,
																compactView: !1,
																filter: 'account_update',
																style: {paddingBottom: '2rem'},
															}),
														],
													}),
												],
											}),
										}),
									})
								);
							},
						},
					]),
					n && Zr(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			const Br = Tr;
			var Er = n(51614);
			function Dr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			var Vr = '-----BEGIN BITSHARES SIGNED MESSAGE-----',
				qr = '-----BEGIN META1-----',
				Fr = '-----BEGIN SIGNATURE-----',
				Ur = '-----END BITSHARES SIGNED MESSAGE-----',
				Lr = (function () {
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
								key: 'parseMessage',
								value: function (e) {
									var t, n, r, o, s, i, a, c;
									try {
										(n = (t = e.split(Vr)[1]).split(qr)),
											(t = n[0].replace(/^\n|\n$/g, '')),
											(r = n[1].split(Fr)),
											(n = r[0].trim()),
											(r = r[1].split(Ur)[0].trim()),
											(o = t + '\n' + n);
									} catch (e) {
										throw new Error(
											Z().translate('account.signedmessages.invalidformat')
										);
									}
									if (n)
										try {
											(s = (s = n.split('account='))[1].split('\n')[0].trim()),
												(i = (i = n.split('memokey='))[1]
													.split('\n')[0]
													.trim()),
												(a = (a = n.split('block='))[1].split('\n')[0].trim()),
												(c = (c = n.split('timestamp='))[1]
													.split('\n')[0]
													.trim());
										} catch (e) {
											throw new Error(
												Z().translate('account.signedmessages.invalidformat')
											);
										}
									return {
										content: t,
										meta: {account: s, key: i, block: a, timestamp: c},
										signed: o,
										signature: r,
									};
								},
							},
							{
								key: 'verifyMemo',
								value: function (e) {
									var t;
									if (
										((t =
											'string' == typeof e || e instanceof String
												? this.parseMessage(e)
												: e),
										null == de.BQ.getAccount(t.meta.account))
									)
										throw new Error(
											Z().translate('account.signedmessages.invaliduser')
										);
									var n = !1;
									try {
										n = de.Pc.fromHex(t.signature).verifyBuffer(
											t.signed,
											de.nh.fromPublicKeyString(t.meta.key)
										);
									} catch (e) {
										throw new Error(
											Z().translate('account.signedmessages.errorverifying')
										);
									}
									if (!n)
										throw new Error(
											Z().translate('account.signedmessages.invalidsignature')
										);
									return t;
								},
							},
							{
								key: 'signMessage',
								value: function (e, t) {
									return new Promise(function (n, r) {
										jn.Z.unlock()
											.then(function () {
												try {
													var o,
														s = e.get('options').get('memo_key');
													if (
														(/111111111111111111111/.test(s) && (s = null),
														t && s && !(o = bn.Z.getPrivateKey(s)))
													)
														throw new Error(
															Z().translate('account.signedmessages.invalidkey')
														);
													var i = de.BQ.getObject('2.1.0').get(
															'last_irreversible_block_num'
														),
														a = new Date(),
														c =
															'account=' +
															e.get('name') +
															'\nmemokey=' +
															s +
															'\nblock=' +
															i +
															'\ntimestamp=' +
															a.toUTCString(),
														l = t + '\n' + c;
													setTimeout(function () {
														try {
															var e = de.Pc.signBuffer(l, o, s),
																i =
																	Vr +
																	'\n' +
																	t +
																	'\n' +
																	qr +
																	'\n' +
																	c +
																	'\n' +
																	Fr +
																	'\n' +
																	e.toHex() +
																	'\n' +
																	Ur;
															n(i);
														} catch (e) {
															r(e);
														}
													}, 0);
												} catch (e) {
													r(e);
												}
											})
											.catch(function (e) {
												r(e);
											});
									});
								},
							},
						]) && Dr(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e
					);
				})();
			const zr = Er.Z.createActions(Lr);
			function Wr(e) {
				return (
					(Wr =
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
					Wr(e)
				);
			}
			function Kr(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Jr(e, t) {
				return (
					(Jr =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Jr(e, t)
				);
			}
			function Qr(e, t) {
				if (t && ('object' === Wr(t) || 'function' == typeof t)) return t;
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
			var Yr = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Jr(e, t);
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
								t = Gr(r);
							if (o) {
								var n = Gr(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Qr(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = {
							message: t.props.message,
							messageParsed: null,
							showRawMessage: !1,
							noVerification: t.props.noVerification,
							verified: null,
							notification: null,
						}),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: '_verifyMessage',
							value: function (e) {
								var t = this;
								this.setState({
									message: e,
									messageParsed: null,
									verified: null,
								});
								var n = null;
								try {
									(n = zr.parseMessage(e)),
										this.setState({verified: null, messageParsed: n}),
										this.state.noVerification ||
											(this.setState({
												verified: null,
												notification: Z().translate(
													'account.signedmessages.verifying'
												),
											}),
											setTimeout(function () {
												try {
													zr.verifyMemo(n),
														t.setState({verified: !0, notification: ''});
												} catch (e) {
													t._warning(e.message), t.setState({verified: !1});
												}
											}, 0));
								} catch (e) {
									this._warning(e.message);
								}
							},
						},
						{
							key: 'componentWillMount',
							value: function () {
								this._verifyMessage(this.state.message);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								var t = e.message;
								(null != t && null != t && t == this.state.message) ||
									this._verifyMessage(t);
							},
						},
						{
							key: '_warning',
							value: function (e) {
								this.setState({notification: e});
							},
						},
						{
							key: '_toggleRawMessage',
							value: function () {
								this.setState({showRawMessage: !this.state.showRawMessage});
							},
						},
						{
							key: 'render',
							value: function () {
								var e, t;
								null != this.state.messageParsed &&
									(null == this.state.verified
										? ((t = '#FFF'),
										  (e =
												'Unverified message from ' +
												this.state.messageParsed.meta.account))
										: this.state.verified
										? ((t = '#FFF'),
										  (e =
												'Verified message from ' +
												this.state.messageParsed.meta.account))
										: ((t = '#F00'),
										  (e =
												'Refuted message, indicated sender ' +
												this.state.messageParsed.meta.account)));
								var n = null != this.props.message && '' != this.props.message,
									r = this.state.notification && '' != this.state.notification;
								return (0, E.jsxs)('div', {
									style: {color: 'gray', margin: '10px 10px'},
									children: [
										null != this.state.messageParsed &&
											(0, E.jsxs)('fieldset', {
												style: {borderColor: t},
												children: [
													(0, E.jsx)('legend', {
														style: {color: 'white', weight: 'bold'},
														children: e,
													}),
													(0, E.jsxs)('pre', {
														style: {
															position: 'relative',
															width: '100%',
															display: 'table',
														},
														children: [
															this.state.messageParsed.content,
															r &&
																(0, E.jsx)('div', {
																	style: {
																		textAlign: 'center',
																		display: 'table-cell',
																		verticalAlign: 'middle',
																		position: 'absolute',
																		width: 'calc(100% - 30px)',
																		height: 'calc(100% + 15px)',
																		top: '0px',
																		right: '30px',
																		backgroundColor: 'rgba(50,50,50,0.5)',
																	},
																	id: 'overlay',
																	children: this.state.notification,
																}),
														],
													}),
													(0, E.jsxs)('span', {
														style: {fontSize: 'small', float: 'right'},
														children: [
															'Signed on ',
															this.state.messageParsed.meta.timestamp,
															' ',
															' ',
															(0, E.jsx)('button', {
																className: 'button',
																type: 'button',
																style: {
																	fontSize: 'small',
																	float: 'right',
																	padding: '0px 0px',
																	background: '#777',
																},
																onClick: this._toggleRawMessage.bind(this),
																children: '🔍',
															}),
														],
													}),
													this.state.showRawMessage && (0, E.jsx)('br', {}),
													this.state.showRawMessage && (0, E.jsx)('br', {}),
													this.state.showRawMessage &&
														(0, E.jsx)('div', {
															style: {
																overflow: 'auto',
																width: 'calc(100%)',
																maxWidth: '1000px',
															},
															children: (0, E.jsx)('pre', {
																children: this.state.message,
															}),
														}),
												],
											}),
										n &&
											null == this.state.messageParsed &&
											(0, E.jsxs)('fieldset', {
												style: {borderColor: '#F00'},
												children: [
													(0, E.jsx)('legend', {
														style: {color: 'red', weight: 'bold'},
														className: 'error',
														children:
															'Error while parsing message, please check syntax from message below',
													}),
													(0, E.jsx)('pre', {children: this.props.message}),
												],
											}),
									],
								});
							},
						},
					]) && Kr(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			!(function (e, t, n) {
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = n);
			})(Yr, 'defaultProps', {noVerification: !1});
			const Hr = Yr;
			function Xr(e) {
				return (
					(Xr =
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
					Xr(e)
				);
			}
			function $r(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function eo(e, t) {
				return (
					(eo =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					eo(e, t)
				);
			}
			function to(e, t) {
				if (t && ('object' === Xr(t) || 'function' == typeof t)) return t;
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
			function no(e) {
				return (
					(no = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					no(e)
				);
			}
			var ro = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && eo(e, t);
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
								t = no(r);
							if (o) {
								var n = no(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return to(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = {
							tabsm_memo_key: t.props.account.get('options').get('memo_key'),
							tabsm_popup: '',
							tabsm_message_text: '',
							tabsm_message_signed: '',
							tabvm_popup: '',
							tabvm_message_signed: '',
							tabvm_verified: null,
							tabvm_message_signed_and_verified: null,
							tabvm_flag_verifyonchange: !1,
						}),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: '_tabSMSignAction',
							value: function (e) {
								var t = this;
								e.preventDefault();
								try {
									var n = this.props.account.get('options').get('memo_key');
									if (this.state.tabsm_memo_key !== n)
										throw Error(
											Z().translate('account.signedmessages.keymismatch')
										);
									this.state.tabsm_message_text &&
										(this._tabSMPopMessage(
											Z().translate('account.signedmessages.signing'),
											0
										),
										zr
											.signMessage(
												this.props.account,
												this.state.tabsm_message_text
											)
											.then(function (e) {
												t.setState({tabsm_message_signed: e, tabsm_popup: ''});
											})
											.catch(function (e) {
												t._tabSMPopMessage(e.message),
													t.setState({tabsm_message_signed: null});
											}));
								} catch (e) {
									this._tabSMPopMessage(e.message),
										this.setState({tabsm_message_signed: null});
								}
							},
						},
						{
							key: '_tabSMHandleChange',
							value: function (e) {
								this.setState({tabsm_message_text: e.target.value});
							},
						},
						{
							key: '_tabSMHandleChangeKey',
							value: function (e) {
								this.setState({tabsm_memo_key: e});
							},
						},
						{
							key: '_tabSMCopyToClipBoard',
							value: function (e) {
								if ('' !== e.target.value) {
									e.target.focus(), e.target.select();
									try {
										var t = document.execCommand('copy');
										this._tabSMPopMessage(
											t
												? Z().translate('account.signedmessages.copysuccessful')
												: Z().translate(
														'account.signedmessages.copyunsuccessful'
												  )
										);
									} catch (e) {
										this._tabSMPopMessage(
											Z().translate('account.signedmessages.copyunsuccessful')
										);
									}
								}
							},
						},
						{
							key: '_tabSMPopMessage',
							value: function (e) {
								var t = this,
									n =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: 3e3;
								this.setState({tabsm_popup: e}),
									'' !== e &&
										n > 0 &&
										setTimeout(function () {
											t.setState({tabsm_popup: ''});
										}, n);
							},
						},
						{
							key: '_tabVMAction',
							value: function (e) {
								var t = this;
								e.preventDefault(),
									this.setState({
										tabvm_message_signed_and_verified: null,
										tabvm_verified: !1,
									}),
									this.state.tabvm_message_signed &&
										(this._tabVMPopMessage(
											Z().translate('account.signedmessages.verifying'),
											0
										),
										setTimeout(function () {
											try {
												var e = zr.verifyMemo(t.state.tabvm_message_signed);
												t.setState({
													tabvm_message_signed_and_verified: e,
													tabvm_verified: !0,
													tabvm_popup: '',
												});
											} catch (e) {
												t._tabVMPopMessage(e.message),
													t.setState({
														tabvm_message_signed_and_verified: null,
														tabvm_verified: !1,
													});
											}
										}, 0));
							},
						},
						{
							key: '_tabVMHandleChange',
							value: function (e) {
								this.setState({
									tabvm_message_signed: e.target.value,
									tabvm_verified: !1,
									tabvm_message_signed_and_verified: null,
								}),
									this.state.tabvm_flag_verifyonchange && this._tabVMAction(e);
							},
						},
						{
							key: '_tabVMPopMessage',
							value: function (e) {
								var t = this,
									n =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: 3e3;
								this.setState({tabvm_popup: e}),
									'' !== e &&
										n > 0 &&
										setTimeout(function () {
											t.setState({tabvm_popup: ''});
										}, n);
							},
						},
						{
							key: '_tabVMToggleVerifyOnChange',
							value: function () {
								this.setState({
									tabvm_flag_verifyonchange:
										!this.state.tabvm_flag_verifyonchange,
								});
							},
						},
						{
							key: 'render',
							value: function () {
								return (0, E.jsx)('div', {
									className: 'grid-content app-tables no-padding',
									ref: 'appTables',
									children: (0, E.jsx)('div', {
										className: 'content-block small-12',
										children: (0, E.jsx)('div', {
											className: 'tabs-container generic-bordered-box',
											children: (0, E.jsxs)(X.m, {
												className: 'account-tabs',
												tabsClass:
													'account-overview no-padding bordered-header content-block',
												setting: 'accountSignedMessagesTab',
												contentClass:
													'grid-content shrink small-vertical medium-horizontal padding',
												segmented: !1,
												children: [
													(0, E.jsx)(X.O, {
														title: 'account.signedmessages.signmessage',
														children: (0, E.jsxs)('div', {
															className: 'grid-content',
															style: {overflowX: 'hidden'},
															children: [
																(0, E.jsx)('div', {
																	className: 'content-block no-margin',
																	children: (0, E.jsx)('h3', {
																		children: (0, E.jsx)(x(), {
																			content:
																				'account.signedmessages.signmessage',
																		}),
																	}),
																}),
																(0, E.jsx)(Sr, {
																	ref: 'memo_key',
																	value: this.state.tabsm_memo_key,
																	label: 'account.perm.memo_public_key',
																	placeholder: 'Public Key',
																	tabIndex: 7,
																	onChange:
																		this._tabSMHandleChangeKey.bind(this),
																	disableActionButton: !0,
																}),
																(0, E.jsx)('br', {}),
																(0, E.jsx)('textarea', {
																	rows: '10',
																	value: this.state.tabsm_message_text,
																	onChange: this._tabSMHandleChange.bind(this),
																	placeholder: Z().translate(
																		'account.signedmessages.entermessage'
																	),
																}),
																(0, E.jsxs)('span', {
																	children: [
																		(0, E.jsx)('button', {
																			className: 'button',
																			onClick: this._tabSMSignAction.bind(this),
																			children: (0, E.jsx)(x(), {
																				content: 'account.signedmessages.sign',
																			}),
																		}),
																		(0, E.jsx)('div', {
																			style: {color: 'gray'},
																			children: this.state.tabsm_popup,
																		}),
																	],
																}),
																(0, E.jsx)('br', {}),
																(0, E.jsx)('br', {}),
																(0, E.jsx)('textarea', {
																	rows: '14',
																	value: this.state.tabsm_message_signed,
																	style: {editable: !1},
																	placeholder: Z().translate(
																		'account.signedmessages.automaticcreation'
																	),
																	onClick:
																		this._tabSMCopyToClipBoard.bind(this),
																}),
															],
														}),
													}),
													(0, E.jsx)(X.O, {
														title: 'account.signedmessages.verifymessage',
														children: (0, E.jsxs)('div', {
															className: 'grid-content',
															style: {overflowX: 'hidden'},
															children: [
																(0, E.jsxs)('div', {
																	className: 'content-block no-margin',
																	children: [
																		(0, E.jsx)('h3', {
																			children: (0, E.jsx)(x(), {
																				content:
																					'account.signedmessages.verifymessage',
																			}),
																		}),
																		(0, E.jsx)('div', {
																			style: {
																				float: 'right',
																				marginTop: '0.1em',
																				marginBottom: '0.5em',
																			},
																			children: (0, E.jsx)('table', {
																				children: (0, E.jsxs)('tr', {
																					children: [
																						(0, E.jsx)('td', {
																							children: (0, E.jsx)('label', {
																								style: {
																									marginBottom: 0,
																									marginRight: '0.5rem',
																								},
																								children: (0, E.jsx)(x(), {
																									content:
																										'account.signedmessages.verifyonchange',
																								}),
																							}),
																						}),
																						(0, E.jsx)('td', {
																							children: (0, E.jsx)(ve.Z, {
																								checked:
																									this.state
																										.tabvm_flag_verifyonchange,
																								onChange:
																									this._tabVMToggleVerifyOnChange.bind(
																										this
																									),
																							}),
																						}),
																					],
																				}),
																			}),
																		}),
																	],
																}),
																(0, E.jsx)('textarea', {
																	rows: '10',
																	value: this.state.tabvm_message_signed,
																	onChange: this._tabVMHandleChange.bind(this),
																	placeholder: Z().translate(
																		'account.signedmessages.entermessage'
																	),
																}),
																(0, E.jsxs)('span', {
																	children: [
																		(0, E.jsx)('button', {
																			className: 'button',
																			onClick: this._tabVMAction.bind(this),
																			children: (0, E.jsx)(x(), {
																				content:
																					'account.signedmessages.verify',
																			}),
																		}),
																		(0, E.jsx)('text', {
																			style: {color: 'gray'},
																			children: this.state.tabvm_popup,
																		}),
																		null !== this.state.tabvm_verified &&
																			(0, E.jsxs)('div', {
																				style: {float: 'right'},
																				children: [
																					'Message is:',
																					(0, E.jsx)('div', {
																						style: {
																							backgroundColor: this.state
																								.tabvm_verified
																								? 'green'
																								: 'red',
																						},
																						children: (0, E.jsx)('label', {
																							children: this.state
																								.tabvm_verified
																								? 'verified'
																								: 'not verified',
																						}),
																					}),
																				],
																			}),
																		((this.state.tabvm_verified &&
																			null !==
																				this.state
																					.tabvm_message_signed_and_verified) ||
																			this.state.tabvm_flag_verifyonchange) &&
																			(0, E.jsxs)('div', {
																				children: [
																					(0, E.jsx)('br', {}),
																					(0, E.jsx)(Hr, {
																						message:
																							this.state.tabvm_message_signed,
																					}),
																				],
																			}),
																	],
																}),
															],
														}),
													}),
												],
											}),
										}),
									}),
								});
							},
						},
					]),
					n && $r(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			!(function (e, t, n) {
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = n);
			})(ro, 'propTypes', {account: c.Z.ChainAccount.isRequired});
			const oo = (ro = (0, l.Z)(ro));
			var so = n(47428),
				io = n(53002),
				ao = n.n(io),
				co = n(350),
				lo = n(98063),
				uo = n(25108);
			function po(e) {
				return (
					(po =
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
					po(e)
				);
			}
			function ho(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function fo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function yo(e, t, n) {
				return (
					t && fo(e.prototype, t),
					n && fo(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function bo(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && mo(e, t);
			}
			function mo(e, t) {
				return (
					(mo =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					mo(e, t)
				);
			}
			function go(e) {
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
						r = jo(e);
					if (t) {
						var o = jo(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return vo(this, n);
				};
			}
			function vo(e, t) {
				if (t && ('object' === po(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return _o(e);
			}
			function _o(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function jo(e) {
				return (
					(jo = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					jo(e)
				);
			}
			function xo(e, t, n) {
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
			var wo = (function (e) {
				bo(n, e);
				var t = go(n);
				function n() {
					return ho(this, n), t.apply(this, arguments);
				}
				return (
					yo(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.account,
									n = e.onRemove;
								return (0, E.jsxs)('tr', {
									children: [
										(0, E.jsx)('td', {children: this.props.index}),
										(0, E.jsx)('td', {children: t.get('id')}),
										(0, E.jsx)('td', {
											children: (0, E.jsx)(ze.Z, {account: t.get('id')}),
										}),
										n
											? (0, E.jsx)('td', {
													children: (0, E.jsx)('button', {
														onClick: n.bind(this, t.get('id')),
														className: 'button outline',
														children: 'Remove',
													}),
											  })
											: null,
									],
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			xo(wo, 'propTypes', {account: c.Z.ChainAccount.isRequired}),
				xo(wo, 'defaultProps', {tempComponent: 'tr'}),
				(wo = (0, l.Z)(wo));
			var ko = (function (e) {
				bo(n, e);
				var t = go(n);
				function n() {
					return ho(this, n), t.apply(this, arguments);
				}
				return (
					yo(n, [
						{
							key: '_onRemove',
							value: function (e, t, n) {
								if (t) {
									var r = this.props.getCurrentState(t),
										o = co.Z.new_transaction();
									o.add_type_operation('account_whitelist', {
										fee: {
											amount: 0,
											asset_id:
												de.BQ.assets_by_symbol.get(
													this.props.settings.get('fee_asset')
												) || '1.3.0',
										},
										authorizing_account: this.props.account.get('id'),
										account_to_list: t,
										new_listing: r - ao().account_listing[e],
									}),
										bn.Z.process_transaction(o, null, !0);
								}
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props,
									n = t.removeButton,
									r = t.white,
									o = t.list
										.map(function (t, o) {
											return (0,
											E.jsx)(wo, {onRemove: n ? e._onRemove.bind(e, r ? 'white_listed' : 'black_listed') : null, account: t, index: o + 1}, t);
										})
										.toArray(),
									s = !0;
								return (
									o.length ||
										((s = !1),
										o.push(
											(0, E.jsx)(
												'tr',
												{
													children: (0, E.jsx)('td', {
														style: {padding: '1rem 0'},
														colSpan: n ? 4 : 3,
														css: function (e) {
															return {
																backgroundColor: 'transparent !important',
															};
														},
														children: (0, E.jsx)(x(), {
															css: function (e) {
																return {color: e.colors.primaryColor};
															},
															content: this.props.emptyText,
															account: this.props.account.get('name'),
														}),
													}),
												},
												'empty'
											)
										)),
									(0, E.jsxs)('table', {
										className: 'table compact dashboard-table',
										css: function (e) {
											return {backgroundColor: 'transparent'};
										},
										children: [
											s
												? (0, E.jsx)('thead', {
														css: function (e) {
															return {
																tr: {
																	backgroundColor: e.colors.tableColumnColor,
																	border: '2px solid '.concat(
																		e.colors.borderColor
																	),
																	borderBottom: '2px solid '.concat(
																		e.colors.borderColor
																	),
																	padding: '15px 10px',
																	textAlign: 'left',
																	fontSize: '13px !important',
																},
															};
														},
														children: (0, E.jsxs)('tr', {
															children: [
																(0, E.jsx)('th', {children: '#'}),
																(0, E.jsx)('th', {
																	children: (0, E.jsx)(x(), {
																		content: 'account.id',
																	}),
																}),
																(0, E.jsx)('th', {
																	children: (0, E.jsx)(x(), {
																		content: 'account.name',
																	}),
																}),
																n ? (0, E.jsx)('th', {}) : null,
															],
														}),
												  })
												: null,
											(0, E.jsx)('tbody', {children: o}),
										],
									})
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			ko = (0, u.$)(ko, {
				listenTo: function () {
					return [i.Z];
				},
				getProps: function () {
					return {settings: i.Z.getState().settings};
				},
			});
			const Oo = (function (e) {
				bo(n, e);
				var t = go(n);
				function n(e) {
					var r;
					return (
						ho(this, n),
						xo(_o((r = t.call(this, e))), 'onTabChange', function (e) {
							r.setState({currentTab: e});
						}),
						(r.state = {
							accountName: '',
							accountToList: null,
							currentTab: 'Whitelist',
						}),
						r
					);
				}
				return (
					yo(n, [
						{
							key: '_getCurrentState',
							value: function (e) {
								var t = this.props.account,
									n = t.get('whitelisted_accounts') || h().List(),
									r = t.get('blacklisted_accounts') || h().List(),
									o = ao().account_listing.no_listing;
								return (
									n.includes(e) && (o += ao().account_listing.white_listed),
									r.includes(e) && (o += ao().account_listing.black_listed),
									o
								);
							},
						},
						{
							key: '_onAdd',
							value: function (e, t) {
								var n = this.state.accountToList,
									r = this.props.account,
									o = this._getCurrentState(n);
								if (n) {
									var s = co.Z.new_transaction();
									s.add_type_operation('account_whitelist', {
										fee: {amount: 0, asset_id: '1.3.0'},
										authorizing_account: r.get('id'),
										account_to_list: n,
										new_listing: o + ao().account_listing[e],
									}),
										bn.Z.process_transaction(s, null, !0);
								}
							},
						},
						{
							key: '_onAccountFound',
							value: function (e) {
								this.setState({
									accountName: e ? e.get('name') : null,
									accountToList: e ? e.get('id') : null,
								});
							},
						},
						{
							key: '_onAccountChanged',
							value: function (e) {
								uo.log('account changed:', e),
									this.setState({accountName: e, accountToList: null});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props.account,
									t = this.state,
									n = t.accountName,
									r = t.currentTab;
								return (0, E.jsxs)(E.Fragment, {
									children: [
										(0, E.jsx)('div', {
											children: (0, E.jsx)(lo.Z, {
												title: r,
												level: 2,
												showDivider: !0,
											}),
										}),
										(0, E.jsx)('div', {
											css: function (e) {
												return xo(
													{padding: '3rem 4rem'},
													'@media (max-width: '.concat(e.sizes.sm, ')'),
													{padding: '1rem'}
												);
											},
											children: (0, E.jsxs)(so.Z, {
												defaultActiveKey: '1',
												animated: !1,
												onChange: this.onTabChange,
												css: function (e) {
													return {
														'.ant-tabs-nav': {margin: '0 0 0px 0'},
														'.ant-tabs-content-holder': xo(
															{
																border: '1px solid '.concat(
																	e.colors.borderColor
																),
																borderRadius: '7px',
																padding: '3rem',
															},
															'@media (max-width: '.concat(e.sizes.lg, ')'),
															{padding: '1rem'}
														),
													};
												},
												children: [
													(0, E.jsx)(
														so.Z.TabPane,
														{
															tab: (0, E.jsx)(x(), {
																content: 'account.whitelist.title',
															}),
															children: (0, E.jsxs)('div', {
																style: {paddingBottom: '1rem'},
																className: 'small-12',
																children: [
																	(0, E.jsx)('div', {
																		children: (0, E.jsx)(ko, {
																			emptyText: 'account.whitelist.empty',
																			account: e,
																			getCurrentState:
																				this._getCurrentState.bind(this),
																			list:
																				e.get('whitelisted_accounts') ||
																				h().List(),
																			removeButton: !0,
																			white: !0,
																		}),
																	}),
																	e.get('whitelisted_accounts')
																		? null
																		: (0, E.jsx)('p', {
																				className: 'has-error',
																				children:
																					'Please note, whitelisting is not working yet due to unresolved backend issue.',
																		  }),
																	(0, E.jsx)('div', {
																		css: function (e) {
																			return xo(
																				{
																					padding: '2rem 1rem',
																					width: '60%',
																					margin: '0 auto',
																					backgroundColor: '#15171b',
																					borderRadius: '10px',
																				},
																				'@media (max-width: '.concat(
																					e.sizes.lg,
																					')'
																				),
																				{width: '100%', padding: '1rem'}
																			);
																		},
																		children: (0, E.jsx)(R.Z, {
																			label: 'account.whitelist.add',
																			accountName: n,
																			onAccountChanged:
																				this._onAccountFound.bind(this),
																			onChange:
																				this._onAccountChanged.bind(this),
																			account: n,
																			tabIndex: 2,
																			onAction: this._onAdd.bind(
																				this,
																				'white_listed'
																			),
																			action_label: 'account.perm.confirm_add',
																			white: !1,
																			typeahead: !0,
																		}),
																	}),
																],
															}),
														},
														'Whitelist'
													),
													(0, E.jsx)(
														so.Z.TabPane,
														{
															tab: (0, E.jsx)(x(), {
																content: 'account.whitelist.black',
															}),
															children: (0, E.jsxs)('div', {
																style: {paddingBottom: '1rem'},
																className: 'small-12',
																children: [
																	(0, E.jsx)('div', {
																		children: (0, E.jsx)(ko, {
																			emptyText:
																				'account.whitelist.empty_black',
																			account: e,
																			getCurrentState:
																				this._getCurrentState.bind(this),
																			list: e.get('blacklisted_accounts'),
																			removeButton: !0,
																		}),
																	}),
																	(0, E.jsx)('div', {
																		css: function (e) {
																			return xo(
																				{
																					padding: '2rem 1rem',
																					width: '60%',
																					margin: '0 auto',
																					backgroundColor: '#15171b',
																					borderRadius: '10px',
																				},
																				'@media (max-width: '.concat(
																					e.sizes.lg,
																					')'
																				),
																				{width: '100%', padding: '1rem'}
																			);
																		},
																		children: (0, E.jsx)(R.Z, {
																			label: 'account.whitelist.add_black',
																			accountName: n,
																			onAccountChanged:
																				this._onAccountFound.bind(this),
																			onChange:
																				this._onAccountChanged.bind(this),
																			account: n,
																			tabIndex: 2,
																			onAction: this._onAdd.bind(
																				this,
																				'black_listed'
																			),
																			action_label: 'account.perm.confirm_add',
																			typeahead: !0,
																		}),
																	}),
																],
															}),
														},
														'Blacklist'
													),
													(0, E.jsx)(
														so.Z.TabPane,
														{
															tab: (0, E.jsx)(x(), {
																content: 'account.whitelist.white_by',
															}),
															children: (0, E.jsx)('div', {
																style: {paddingBottom: '1rem'},
																className: 'small-12',
																children: (0, E.jsx)('div', {
																	css: function (e) {
																		return xo(
																			{
																				padding: '2rem 1rem',
																				width: '60%',
																				margin: '0 auto',
																				backgroundColor: '#15171b',
																				borderRadius: '10px',
																			},
																			'@media (max-width: '.concat(
																				e.sizes.lg,
																				')'
																			),
																			{width: '100%', padding: '1rem'}
																		);
																	},
																	children: (0, E.jsx)(ko, {
																		emptyText:
																			'account.whitelist.empty_white_by',
																		account: e,
																		list: e.get('whitelisting_accounts'),
																	}),
																}),
															}),
														},
														'Whitelisted by'
													),
													(0, E.jsx)(
														so.Z.TabPane,
														{
															tab: (0, E.jsx)(x(), {
																content: 'account.whitelist.black_by',
															}),
															children: (0, E.jsx)('div', {
																css: function (e) {
																	return xo(
																		{
																			padding: '2rem 1rem',
																			width: '60%',
																			margin: '0 auto',
																			backgroundColor: '#15171b',
																			borderRadius: '10px',
																		},
																		'@media (max-width: '.concat(
																			e.sizes.lg,
																			')'
																		),
																		{width: '100%', padding: '1rem'}
																	);
																},
																className: 'small-12',
																children: (0, E.jsx)('div', {
																	children: (0, E.jsx)(ko, {
																		emptyText:
																			'account.whitelist.empty_black_by',
																		account: e,
																		list: e.get('blacklisting_accounts'),
																	}),
																}),
															}),
														},
														'Blacklisted By'
													),
												],
											}),
										}),
									],
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			var So = n(86005),
				Co = n(12267),
				Po = n(12615),
				Ao = n(95806),
				Zo = n.n(Ao),
				Mo = ['1.14.114', '1.14.107'],
				Ro = n(68924),
				No = n.n(Ro);
			function Io(e) {
				return (
					(Io =
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
					Io(e)
				);
			}
			function To(e, t, n) {
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
			function Bo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Eo(e, t) {
				return (
					(Eo =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Eo(e, t)
				);
			}
			function Do(e, t) {
				if (t && ('object' === Io(t) || 'function' == typeof t)) return t;
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
			var qo = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Eo(e, t);
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
								t = Vo(r);
							if (o) {
								var n = Vo(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Do(this, e);
						});
				function i(e) {
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						s.call(this, e)
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'onApprove',
							value: function (e) {
								var t = [],
									n = [];
								e.vote_ids.has(e.worker.get('vote_against')) &&
									n.push(e.worker.get('vote_against')),
									e.vote_ids.has(e.worker.get('vote_for')) ||
										t.push(e.worker.get('vote_for')),
									this.props.onChangeVotes(t, n);
							},
						},
						{
							key: 'onReject',
							value: function (e) {
								var t = [];
								e.vote_ids.has(e.worker.get('vote_against')) &&
									t.push(e.worker.get('vote_against')),
									e.vote_ids.has(e.worker.get('vote_for')) &&
										t.push(e.worker.get('vote_for')),
									this.props.onChangeVotes([], t);
							},
						},
						{
							key: 'getHeader',
							value: function (e, t) {
								var n = this;
								return [
									2 === e
										? null
										: {
												title: (0, E.jsx)(x(), {
													component: 'span',
													content: 'account.votes.line',
													style: {whiteSpace: 'nowrap'},
												}),
												dataIndex: 'line',
												align: 'right',
												render: function (e) {
													return (0, E.jsx)('span', {
														style: {
															textAlign: 'right',
															paddingRight: 10,
															paddingLeft: 0,
															whiteSpace: 'nowrap',
														},
														children:
															e || Z().translate('account.votes.expired'),
													});
												},
										  },
									{
										title: (0, E.jsx)(x(), {
											content: 'account.user_issued_assets.id',
											style: {whiteSpace: 'nowrap'},
										}),
										dataIndex: 'assets_id',
										align: 'center',
										sorter: function (e, t) {
											return e.assets_id > t.assets_id
												? 1
												: e.assets_id < t.assets_id
												? -1
												: 0;
										},
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.user_issued_assets.description',
											style: {whiteSpace: 'nowrap'},
										}),
										dataIndex: 'description',
										align: 'left',
										sorter: function (e, t) {
											return e.description.name > t.description.name
												? 1
												: e.description.name < t.description.name
												? -1
												: 0;
										},
										render: function (e) {
											return (0, E.jsxs)('span', {
												children: [
													(0, E.jsx)('div', {
														className: 'inline-block',
														style: {
															paddingRight: 5,
															position: 'relative',
															top: -1,
															whiteSpace: 'nowrap',
														},
														children: (0, E.jsx)('a', {
															style: {
																visibility:
																	e.url && -1 !== e.url.indexOf('.')
																		? 'visible'
																		: 'hidden',
															},
															href: No()(e.url, {
																whiteList: [],
																stripIgnoreTag: !0,
															}),
															target: '_blank',
															rel: 'noopener noreferrer',
															children: (0, E.jsx)($.Z, {
																name: 'share',
																size: '2x',
																title: 'icons.share',
															}),
														}),
													}),
													(0, E.jsxs)('div', {
														className: 'inline-block',
														children: [
															e.name,
															(0, E.jsx)('br', {}),
															(0, E.jsx)(ze.Z, {
																account: e.worker_account,
																maxDisplayAccountNameLength: null,
															}),
														],
													}),
												],
											});
										},
									},
									{
										className: 'column-hide-small',
										title: (0, E.jsx)(x(), {
											content: 'account.votes.total_votes',
											style: {whiteSpace: 'nowrap'},
										}),
										dataIndex: 'total_votes',
										align: 'right',
										sorter: function (e, t) {
											return e.total_votes - t.total_votes;
										},
										render: function (e) {
											return (0, E.jsx)(O.Z, {
												amount: e,
												asset: '1.3.0',
												decimalOffset: 5,
												hide_asset: !0,
												style: {whiteSpace: 'nowrap'},
											});
										},
									},
									0 === e
										? {
												title: (0, E.jsx)(x(), {
													content: 'account.votes.missing',
													style: {whiteSpace: 'nowrap'},
												}),
												dataIndex: 'missing',
												align: 'right',
												sorter: function (e, t) {
													return e.missing - t.missing;
												},
												render: function (e) {
													return (0, E.jsx)('span', {
														style: {textAlign: 'right', whiteSpace: 'nowrap'},
														children: (0, E.jsx)(O.Z, {
															amount: Math.max(0, e),
															asset: '1.3.0',
															hide_asset: !0,
															decimalOffset: 5,
														}),
													});
												},
										  }
										: null,
									{
										title: (0, E.jsx)(x(), {
											content: 'explorer.workers.period',
											style: {whiteSpace: 'nowrap'},
										}),
										dataIndex: 'period',
										align: 'right',
										sorter: function (e, t) {
											return (
												new Date(e.period.startDate) -
												new Date(t.period.startDate)
											);
										},
										render: function (e) {
											return (0, E.jsxs)('span', {
												style: {whiteSpace: 'nowrap'},
												children: [e.startDate, ' - ', e.endDate],
											});
										},
									},
									2 === e || 0 === e
										? null
										: {
												title: (0, E.jsx)(x(), {
													content: 'account.votes.funding',
													style: {whiteSpace: 'nowrap'},
												}),
												dataIndex: 'funding',
												align: 'right',
												render: function (e) {
													return (0, E.jsx)('span', {
														style: {textAlign: 'right', whiteSpace: 'nowrap'},
														className: 'hide-column-small',
														children: e.isExpired
															? '-'
															: P.Z.format_number(e.fundedPercent, 2) + '%',
													});
												},
										  },
									2 === e || 0 === e
										? null
										: {
												title: (0, E.jsxs)('span', {
													children: [
														(0, E.jsx)(x(), {
															content: 'explorer.witnesses.budget',
															style: {whiteSpace: 'nowrap'},
														}),
														(0, E.jsxs)('div', {
															style: {paddingTop: 5, fontSize: '0.8rem'},
															children: ['(', (0, E.jsx)(Po.Z, {name: t}), ')'],
														}),
													],
												}),
												dataIndex: 'budget',
												align: 'right',
												render: function (e) {
													return (0, E.jsx)('span', {
														style: {textAlign: 'right', whiteSpace: 'nowrap'},
														children:
															e.rest <= 0
																? e.isExpired
																	? '-'
																	: '0.00'
																: (0, E.jsx)(Co.i, {
																		hide_asset: !0,
																		fromAsset: '1.3.0',
																		toAsset: e.preferredUnit,
																		amount: e.rest,
																  }),
													});
												},
										  },
									{
										className: 'column-hide-small',
										title: (0, E.jsxs)('span', {
											children: [
												(0, E.jsx)(x(), {
													content: 'account.votes.daily_pay',
													style: {whiteSpace: 'nowrap'},
												}),
												(0, E.jsxs)('div', {
													style: {paddingTop: 5, fontSize: '0.8rem'},
													children: ['(', (0, E.jsx)(Po.Z, {name: t}), ')'],
												}),
											],
										}),
										dataIndex: 'daily_pay',
										align: 'right',
										sorter: function (e, t) {
											return e.daily_pay.daily_pay - t.daily_pay.daily_pay;
										},
										render: function (e) {
											return (0, E.jsx)('span', {
												className: e.proxy ? '' : 'clickable',
												style: {whiteSpace: 'nowrap'},
												onClick: e.proxy
													? function () {}
													: n[e.approvalState ? 'onReject' : 'onApprove'].bind(
															n,
															e
													  ),
												children: (0, E.jsx)(Co.i, {
													hide_asset: !0,
													fromAsset: '1.3.0',
													toAsset: e.preferredUnit,
													amount: e.daily_pay,
													style: {whiteSpace: 'nowrap'},
												}),
											});
										},
									},
									{
										className: 'column-hide-small',
										title: (0, E.jsx)(x(), {
											content: 'account.votes.toggle',
											style: {whiteSpace: 'nowrap'},
										}),
										dataIndex: 'toggle',
										align: 'right',
										render: function (e) {
											return (0, E.jsx)('span', {
												className: e.proxy ? '' : 'clickable',
												style: {whiteSpace: 'nowrap'},
												onClick: e.proxy
													? function () {}
													: n[e.approvalState ? 'onReject' : 'onApprove'].bind(
															n,
															e
													  ),
												children: e.proxy
													? (0, E.jsx)($.Z, {
															name: 'locked',
															title: 'icons.locked.action',
													  })
													: (0, E.jsx)($.Z, {
															name: e.approvalState
																? 'checkmark-circle'
																: 'minus-circle',
															title: e.approvalState
																? 'icons.checkmark_circle.approved'
																: 'icons.minus_circle.disapproved',
													  }),
											});
										},
									},
								].filter(function (e) {
									return e;
								});
							},
						},
						{
							key: 'getData',
							value: function (e) {
								var t =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: 0,
									n = this.props,
									r = n.hasProxy,
									o = n.proxy_vote_ids,
									s = n.vote_ids;
								return (
									(s = r ? o : s),
									(t = t || 0),
									e.map(function (e, n) {
										var o = e.worker.toJS(),
											i = n + 1,
											a = o.total_votes_for - o.total_votes_against,
											c =
												!!s.has(o.vote_for) || (!s.has(o.vote_against) && null),
											l = 0;
										o.daily_pay < e.rest
											? (l = 100)
											: e.rest > 0 && (l = (e.rest / o.daily_pay) * 100);
										var u = Z().localize(new Date(o.work_begin_date + 'Z'), {
												type: 'date',
												format: 'short_custom',
											}),
											p = Z().localize(new Date(o.work_end_date + 'Z'), {
												type: 'date',
												format: 'short_custom',
											}),
											d = new Date(),
											h = new Date(o.work_end_date + 'Z') <= d,
											f = new Date(o.work_begin_date + 'Z') <= d,
											y = (!h && a < t) || !f,
											b = !!e.poll;
										return {
											key: o.id,
											line: (!b && h) || h ? null : i,
											assets_id: o.id,
											description: o,
											total_votes: a,
											missing: t - a,
											period: {startDate: u, endDate: p},
											funding:
												b || (!h && !y)
													? {isExpired: h, fundedPercent: l}
													: null,
											daily_pay: {
												preferredUnit: e.preferredUnit,
												daily_pay: o.daily_pay,
												proxy: r,
												approvalState: c,
												worker: e.worker,
												vote_ids: s,
											},
											budget:
												b || (!h && !y)
													? To(
															{
																rest: e.rest,
																isExpired: h,
																preferredUnit: e.preferredUnit,
															},
															'rest',
															e.rest
													  )
													: null,
											toggle: {
												proxy: r,
												approvalState: c,
												worker: e.worker,
												vote_ids: s,
											},
										};
									})
								);
							},
						},
						{
							key: '_getMappedWorkers',
							value: function (e, t, n) {
								var r = this,
									o = new Date(),
									s = t,
									i = void 0;
								return {
									mappedWorkers: e
										.filter(function (e) {
											var t = e.get('name').toLowerCase();
											return e && -1 !== t.indexOf(n);
										})
										.sort(function (e, t) {
											return r._getTotalVotes(t) - r._getTotalVotes(e);
										})
										.map(function (e) {
											(e.isOngoing =
												new Date(e.get('work_end_date') + 'Z') > o &&
												new Date(e.get('work_begin_date') + 'Z') <= o),
												(e.isUpcoming =
													new Date(e.get('work_begin_date') + 'Z') > o),
												(e.isExpired =
													new Date(e.get('work_end_date') + 'Z') <= o);
											var t = parseInt(e.get('daily_pay'), 10);
											return (
												(e.votes =
													e.get('total_votes_for') -
													e.get('total_votes_against')),
												s > 0 && e.isOngoing
													? ((e.active = !0),
													  (s -= t) <= 0 && !i && (i = e.votes),
													  (e.remainingPayout = s + t))
													: ((e.active = !1), (e.remainingPayout = 0)),
												e
											);
										})
										.sort(function (e, t) {
											return e.isExpired !== t.isExpired
												? e.isExpired
													? 1
													: -1
												: r._getTotalVotes(t) - r._getTotalVotes(e);
										}),
									voteThreshold: i,
								};
							},
						},
						{
							key: '_getTotalVotes',
							value: function (e) {
								return (
									parseInt(e.get('total_votes_for'), 10) -
									parseInt(e.get('total_votes_against'), 10)
								);
							},
						},
						{
							key: '_decideRowClassName',
							value: function (e, t) {
								return e.toggle.approvalState ? '' : 'unsupported';
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.workerTableIndex,
									n = e.preferredUnit,
									r = e.setWorkersLength,
									o = e.workerBudget,
									s = e.hideLegacyProposals,
									i = e.getWorkerArray,
									a = e.filterSearch,
									c = this.getHeader(t, n),
									l = i(),
									u = this._getMappedWorkers(l, o, a),
									p = u.mappedWorkers,
									d = u.voteThreshold,
									h = p
										.filter(function (e) {
											var t = e.get('name').toLowerCase();
											return t.includes('bsip') || t.includes('poll');
										})
										.map(function (e) {
											return {
												preferredUnit: n,
												rest: e.remainingPayout,
												poll: !0,
												worker: e,
											};
										})
										.filter(function (e) {
											return !!e;
										}),
									f = (p = p.filter(function (e) {
										var t = e.get('name').toLowerCase();
										return !t.includes('bsip') && !t.includes('poll');
									})).filter(function (e) {
										return e.isOngoing;
									}),
									y = p
										.filter(function (e) {
											return e.active && e.isOngoing;
										})
										.map(function (e) {
											return {
												preferredUnit: n,
												rest: e.remainingPayout,
												worker: e,
											};
										})
										.filter(function (e) {
											return !!e;
										}),
									b = p
										.filter(function (e) {
											return (
												!e.active &&
												!e.isExpired &&
												(function (e, t) {
													if (!s) return !0;
													var n = t.some(function (t) {
															var n =
																	Zo().compareTwoStrings(
																		e.get('name'),
																		t.get('name')
																	) > 0.8,
																r = t.get('id') === e.get('id'),
																o =
																	t.get('id').substr(5, t.get('id').length) >
																	e.get('id').substr(5, t.get('id').length);
															return n && !r && o;
														}),
														r = new Date(),
														o =
															e.get('total_votes_for') -
																e.get('total_votes_against') <
															2e12,
														i =
															new Date(e.get('work_begin_date') + 'Z') <=
															new Date(r.setMonth(r.getMonth() - 2)),
														a = Mo.includes(e.get('id'));
													return !(((n || i) && o) || a);
												})(e, f)
											);
										})
										.map(function (e) {
											return {preferredUnit: n, rest: 0, worker: e};
										}),
									m = l
										.filter(function (e) {
											return e.isExpired;
										})
										.map(function (e) {
											return {preferredUnit: n, rest: 0, worker: e};
										});
								setTimeout(function () {
									r(b.length, y.length, h.length, m.length, d);
								}, 0);
								var g = 0 === t ? b : 1 === t ? y : 2 === t ? m : h;
								return (0, E.jsx)(tn.Z, {
									className: 'table dashboard-table table-hover',
									rowClassName: this._decideRowClassName.bind(this),
									rows: this.getData(g, d),
									header: c,
									pageSize: 50,
									label: 'utility.total_x_assets',
									leftPadding: '1.5rem',
								});
							},
						},
					]),
					n && Bo(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			const Fo = (0, l.Z)(qo);
			function Uo(e) {
				return (
					(Uo =
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
					Uo(e)
				);
			}
			function Lo(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function zo(e, t) {
				return (
					(zo =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					zo(e, t)
				);
			}
			function Wo(e, t) {
				if (t && ('object' === Uo(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Ko(e);
			}
			function Ko(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Jo(e) {
				return (
					(Jo = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Jo(e)
				);
			}
			function Qo(e, t, n) {
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
			function Go(e, t) {
				var n,
					r = '',
					o = 0;
				return (
					'witness' === e
						? (n = de.BQ.getWitnessById(t.get('id')))
						: 'committee' === e &&
						  (n = de.BQ.getCommitteeMemberById(t.get('id'))),
					(r = n ? n.get('url') : r),
					{
						url: (r = No()(r, {whiteList: [], stripIgnoreTag: !0})),
						votes: (o = n ? n.get('total_votes') : o),
						id: n.get('id'),
					}
				);
			}
			var Yo = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && zo(e, t);
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
								t = Jo(r);
							if (o) {
								var n = Jo(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Wo(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = {
							selected_item: null,
							item_name_input: '',
							error: null,
						}),
						(t.onItemChange = t.onItemChange.bind(Ko(t))),
						(t.onItemAccountChange = t.onItemAccountChange.bind(Ko(t))),
						(t.onAddItem = t.onAddItem.bind(Ko(t))),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'onItemChange',
							value: function (e) {
								this.setState({item_name_input: e});
							},
						},
						{
							key: 'onItemAccountChange',
							value: function (e) {
								var t = this;
								if (
									(this.setState({selected_item: e, error: null}),
									e && this.props.validateAccount)
								) {
									var n = this.props.validateAccount(e);
									if (null === n) return;
									'string' == typeof n
										? this.setState({error: n})
										: n.then(function (e) {
												return t.setState({error: e});
										  });
								}
							},
						},
						{
							key: 'onAddItem',
							value: function (e) {
								e &&
									(this.setState({
										selected_item: null,
										item_name_input: '',
										error: null,
									}),
									this.props.onAddItem(e.get('id')));
							},
						},
						{
							key: 'getHeader',
							value: function () {
								var e = this,
									t = ['10%', '20%', '40%', '20%', '10%'];
								return [
									{
										title: '#',
										dataIndex: 'num',
										align: 'right',
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'account.votes.name'}),
										dataIndex: 'name',
										align: 'left',
										sorter: function (e, t) {
											return e.key > t.key ? 1 : e.key < t.key ? -1 : 0;
										},
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {maxWidth: t[1], whiteSpace: 'nowrap'},
												children: (0, E.jsx)(ze.Z, {account: e}),
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'account.votes.about'}),
										dataIndex: 'about',
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {maxWidth: t[2], whiteSpace: 'nowrap'},
												children: (0, E.jsx)('a', {
													href: e,
													target: '_blank',
													rel: 'noopener noreferrer',
													children: (0, E.jsx)($.Z, {
														name: 'share',
														title: 'icons.share',
													}),
												}),
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'account.votes.votes'}),
										dataIndex: 'votes',
										sorter: function (e, t) {
											return e.votes - t.votes;
										},
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {maxWidth: t[3], whiteSpace: 'nowrap'},
												children: (0, E.jsx)(O.Z, {
													amount: e,
													asset: '1.3.0',
													decimalOffset: 5,
													hide_asset: !0,
												}),
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.votes.status.title',
										}),
										dataIndex: 'title',
										sorter: function (e, t) {
											return e.title > t.title ? 1 : e.title < t.title ? -1 : 0;
										},
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {maxWidth: t[4], whiteSpace: 'nowrap'},
												children: (0, E.jsx)(x(), {content: e}),
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.votes.supported',
										}),
										dataIndex: 'supported',
										align: 'center',
										sorter: function (e, t) {
											return e.supported.translate > t.supported.translate
												? 1
												: e.supported.translate < t.supported.translate
												? -1
												: 0;
										},
										render: function (n) {
											return (0, E.jsx)('span', {
												style: {maxWidth: t[0], whiteSpace: 'nowrap'},
												className: n.proxy ? '' : 'clickable',
												onClick: n.proxy
													? function () {}
													: n.onAction.bind(e, n.item_id),
												children: (0, E.jsx)(x(), {content: n.translate}),
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'account.votes.toggle'}),
										dataIndex: 'toggle',
										render: function (n) {
											return (0, E.jsx)('span', {
												style: {maxWidth: t[5], whiteSpace: 'nowrap'},
												className: n.proxy ? '' : 'clickable',
												onClick: n.proxy
													? function () {}
													: n.onAction.bind(e, n.item_id),
												children: n.proxy
													? (0, E.jsx)($.Z, {
															name: 'locked',
															title: 'icons.locked.action',
													  })
													: (0, E.jsx)($.Z, {
															name: n.isSupported
																? 'checkmark-circle'
																: 'minus-circle',
															title: n.isSupported
																? 'icons.checkmark_circle.yes'
																: 'icons.minus_circle.no',
													  }),
											});
										},
									},
								];
							},
						},
						{
							key: '_decideRowClassName',
							value: function (e, t) {
								return e.toggle.isSupported ? '' : 'unsupported';
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this;
								if (!this.props.items) return null;
								var t = this.getHeader(),
									n = this.props.items
										.filter(function (t) {
											return !(
												!t ||
												(e.props.filterSearch &&
													-1 === t.get('name').indexOf(e.props.filterSearch) &&
													-1 === t.get('id').indexOf(e.props.filterSearch))
											);
										})
										.sort(function (t, n) {
											var r = Go(e.props.type, t).votes,
												o = Go(e.props.type, n).votes;
											return r !== o
												? parseInt(o, 10) - parseInt(r, 10)
												: t.get('name') > n.get('name')
												? 1
												: t.get('name') < n.get('name')
												? -1
												: 0;
										})
										.map(function (t, n) {
											var r =
													e.props.supported &&
													e.props.supported.includes(t.get('id'))
														? 'remove'
														: 'add',
												o = e.props.active.includes(Go(e.props.type, t).id);
											return (function (e) {
												var t = e.account,
													n = e.type,
													r = e.action,
													o = e.isActive,
													s = e.idx,
													i = e.proxy,
													a = e.onAction,
													c = e.key,
													l = t.get('id'),
													u = Go(n, t),
													p = u.url,
													d = u.votes,
													h =
														p && p.length > 0 && -1 === p.indexOf('http')
															? 'http://' + p
															: p,
													f = 'remove' === r;
												return {
													key: c,
													num: s + 1,
													name: t.get('id'),
													about: h && -1 !== h.indexOf('.') ? h : null,
													votes: d,
													title: 'account.votes.'.concat(
														o ? 'active_short' : 'inactive'
													),
													supported: {
														translate: 'settings.'.concat(f ? 'yes' : 'no'),
														proxy: i,
														item_id: l,
														onAction: a,
													},
													toggle: {
														proxy: i,
														isSupported: f,
														item_id: l,
														onAction: a,
													},
												};
											})({
												idx: n,
												key: t.get('name'),
												account: t,
												type: e.props.type,
												onAction:
													'add' === r
														? e.props.onAddItem
														: e.props.onRemoveItem,
												isSelected: -1 !== e.props.items.indexOf(t),
												action: r,
												isActive: o,
												proxy: e.props.proxy,
											});
										}),
									r = this.state.error;
								return (
									!r &&
										this.state.selected_item &&
										-1 !== this.props.items.indexOf(this.state.selected_item) &&
										(r = Z().translate('account.votes.already')),
									(0, E.jsx)('div', {
										children: n.length
											? (0, E.jsx)(tn.Z, {
													className: 'table dashboard-table table-hover',
													rowClassName: this._decideRowClassName.bind(this),
													rows: n,
													header: t,
													pageSize: 20,
													label: 'utility.total_x_assets',
													leftPadding: '1.5rem',
											  })
											: null,
									})
								);
							},
						},
					]),
					n && Lo(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			Qo(Yo, 'propTypes', {
				items: c.Z.ChainObjectsList,
				onAddItem: v().func.isRequired,
				onRemoveItem: v().func.isRequired,
				validateAccount: v().func,
				label: v().string.isRequired,
				placeholder: v().string,
				tabIndex: v().number,
				action: v().string,
				filterSearch: v().string,
			}),
				Qo(Yo, 'defaultProps', {action: 'remove', filterSearch: null});
			const Ho = (0, l.Z)(Yo);
			var Xo = n(55019),
				$o = n(47933),
				es = n(71230),
				ts = n(15746),
				ns = n(22712);
			function rs(e) {
				return (
					(rs =
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
					rs(e)
				);
			}
			function os(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ss(e, t) {
				return (
					(ss =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ss(e, t)
				);
			}
			function is(e, t) {
				if (t && ('object' === rs(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return as(e);
			}
			function as(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function cs(e) {
				return (
					(cs = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					cs(e)
				);
			}
			var ls = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && ss(e, t);
				})(a, e);
				var t,
					n,
					r,
					s,
					i =
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
								t = cs(r);
							if (s) {
								var n = cs(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return is(this, e);
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
						})(as((t = i.call(this, e))), 'isValidPubKey', function (e) {
							return !de.nh.fromPublicKeyString(e);
						}),
						(t.state = t.getInitialState(e)),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'getInitialState',
							value: function (e) {
								return {witnessAccount: e.account, signingKey: '', url: ''};
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									this.state.url !== t.visible ||
									this.props.visible !== e.visible ||
									this.state.signingKey !== t.signingKey ||
									this.state.witnessAccount !== t.witnessAccount
								);
							},
						},
						{
							key: 'onAddWitness',
							value: function () {
								var e = this.state,
									t = e.witnessAccount,
									n = e.signingKey,
									r = e.url;
								t &&
									n &&
									o.Z.createWitness({account: t, url: r, signingKey: n}),
									this.props.hideModal();
							},
						},
						{
							key: 'onChangeCommittee',
							value: function (e) {
								this.setState({witnessAccount: e});
							},
						},
						{
							key: 'onMemoKeyChanged',
							value: function (e) {
								this.setState({signingKey: e.target.value});
							},
						},
						{
							key: 'onUrlChanged',
							value: function (e) {
								this.setState({
									url: No()(e.target.value.toLowerCase(), {
										whiteList: [],
										stripIgnoreTag: !0,
									}),
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.state,
									t = e.witnessAccount,
									n = e.signingKey,
									r = e.url;
								return (0, E.jsx)(B.Z, {
									title: Z().translate('modal.witness.create_witness'),
									onCancel: this.props.hideModal,
									visible: this.props.visible,
									footer: [
										(0, E.jsx)(
											T.Z,
											{
												type: 'primary',
												onClick: this.onAddWitness.bind(this),
												children: Z().translate('modal.witness.confirm'),
											},
											'submit'
										),
										(0, E.jsx)(
											T.Z,
											{
												style: {marginLeft: '8px'},
												onClick: this.props.hideModal,
												children: Z().translate('modal.cancel'),
											},
											'cancel'
										),
									],
									children: (0, E.jsxs)(ns.Z, {
										className: 'full-width',
										layout: 'vertical',
										children: [
											(0, E.jsx)(R.Z, {
												label: 'modal.witness.witness_account',
												accountName:
													(t && t.get('name')) || account.get('name'),
												account: t,
												onAccountChanged: this.onChangeCommittee.bind(this),
												size: 35,
												typeahead: !0,
											}),
											(0, E.jsx)(x(), {
												content: 'modal.witness.text',
												unsafe: !0,
												component: 'p',
											}),
											(0, E.jsx)(ns.Z.Item, {
												label: Z().translate('modal.witness.url'),
												children: (0, E.jsx)(Xo.Z, {
													value: r,
													onChange: this.onUrlChanged.bind(this),
													placeholder: Z().translate(
														'modal.witness.web_example'
													),
												}),
											}),
											(0, E.jsxs)(ns.Z.Item, {
												label: Z().translate(
													'modal.witness.public_signing_key'
												),
												children: [
													this.isValidPubKey(n)
														? (0, E.jsx)('label', {
																className: 'right-label',
																style: {marginTop: '-30px', position: 'static'},
																children: (0, E.jsx)(x(), {
																	content: 'modal.witness.invalid_key',
																}),
														  })
														: null,
													(0, E.jsx)(Xo.Z, {
														addonBefore: (0, E.jsx)($.Z, {
															name: 'key',
															title: 'icons.key',
															size: '1x',
														}),
														value: n,
														onChange: this.onMemoKeyChanged.bind(this),
														placeholder: Z().translate(
															'modal.witness.enter_public_signing_key'
														),
													}),
												],
											}),
										],
									}),
								});
							},
						},
					]) && os(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			const us = ls;
			function ps(e) {
				return (
					(ps =
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
					ps(e)
				);
			}
			function ds(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function hs(e, t) {
				return (
					(hs =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					hs(e, t)
				);
			}
			function fs(e, t) {
				if (t && ('object' === ps(t) || 'function' == typeof t)) return t;
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
			function ys(e) {
				return (
					(ys = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ys(e)
				);
			}
			const bs = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && hs(e, t);
				})(a, e);
				var t,
					n,
					r,
					s,
					i =
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
								t = ys(r);
							if (s) {
								var n = ys(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return fs(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((t = i.call(this, e)).state = t.getInitialState(e)),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'getInitialState',
							value: function () {
								return {committeeAccount: this.props.account, url: ''};
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									this.props.visible !== e.visible ||
									this.state.url !== t.url ||
									this.state.committeeAccount !== t.committeeAccount
								);
							},
						},
						{
							key: 'onAddComittee',
							value: function () {
								var e = this.state,
									t = e.committeeAccount,
									n = e.url;
								t && n && o.Z.createCommittee({account: t, url: n}),
									this.props.hideModal();
							},
						},
						{
							key: 'onChangeCommittee',
							value: function (e) {
								this.setState({committeeAccount: e});
							},
						},
						{
							key: 'onUrlChanged',
							value: function (e) {
								this.setState({
									url: No()(e.target.value.toLowerCase(), {
										whiteList: [],
										stripIgnoreTag: !0,
									}),
								});
							},
						},
						{
							key: 'onClose',
							value: function () {
								this.props.hideModal(),
									this.setState(this.getInitialState(this.props));
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.state,
									t = e.url,
									n = e.committeeAccount;
								return (0, E.jsx)(B.Z, {
									title: Z().translate('modal.committee.create_committee'),
									visible: this.props.visible,
									onCancel: this.props.hideModal,
									footer: [
										(0, E.jsx)(
											T.Z,
											{
												type: 'primary',
												onClick: this.onAddComittee.bind(this),
												children: Z().translate('modal.committee.confirm'),
											},
											'submit'
										),
										(0, E.jsx)(
											T.Z,
											{
												style: {marginLeft: '8px'},
												onClick: this.onClose.bind(this),
												children: Z().translate('modal.cancel'),
											},
											'cancel'
										),
									],
									children: (0, E.jsxs)(ns.Z, {
										className: 'full-width',
										layout: 'vertical',
										children: [
											(0, E.jsx)(R.Z, {
												label: 'modal.committee.from',
												accountName:
													(n && n.get('name')) || account.get('name'),
												account: n || account,
												onAccountChanged: this.onChangeCommittee.bind(this),
												size: 35,
												typeahead: !0,
											}),
											(0, E.jsx)(x(), {
												content: 'modal.committee.text',
												unsafe: !0,
												component: 'p',
											}),
											(0, E.jsx)(ns.Z.Item, {
												label: Z().translate('modal.committee.url'),
												children: (0, E.jsx)(Xo.Z, {
													value: t,
													onChange: this.onUrlChanged.bind(this),
													placeholder: Z().translate(
														'modal.committee.web_example'
													),
												}),
											}),
										],
									}),
								});
							},
						},
					]) && ds(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			var ms = n(8193),
				gs = n(25108);
			function vs(e) {
				return (
					(vs =
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
					vs(e)
				);
			}
			function _s(e, t) {
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
			function js(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? _s(Object(n), !0).forEach(function (t) {
								As(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: _s(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function xs(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
								  e['@@iterator'];
						if (null != n) {
							var r,
								o,
								s = [],
								i = !0,
								a = !1;
							try {
								for (
									n = n.call(e);
									!(i = (r = n.next()).done) &&
									(s.push(r.value), !t || s.length !== t);
									i = !0
								);
							} catch (e) {
								(a = !0), (o = e);
							} finally {
								try {
									i || null == n.return || n.return();
								} finally {
									if (a) throw o;
								}
							}
							return s;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ('string' == typeof e) return ws(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return (
								'Object' === n && e.constructor && (n = e.constructor.name),
								'Map' === n || 'Set' === n
									? Array.from(e)
									: 'Arguments' === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? ws(e, t)
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
			function ws(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function ks(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Os(e, t) {
				return (
					(Os =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Os(e, t)
				);
			}
			function Ss(e, t) {
				if (t && ('object' === vs(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Cs(e);
			}
			function Cs(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Ps(e) {
				return (
					(Ps = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ps(e)
				);
			}
			function As(e, t, n) {
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
			var Zs = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Os(e, t);
				})(c, e);
				var t,
					n,
					o,
					s,
					a =
						((o = c),
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
								t = Ps(o);
							if (s) {
								var n = Ps(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Ss(this, e);
						});
				function c(e) {
					var t;
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, c),
						As(Cs((t = a.call(this, e))), 'onRemoveProxy', function () {
							t.publish(null);
						});
					var n = e.proxy.get('id'),
						r = e.proxy.get('name');
					return (
						(t.state = {
							proxy_account_id: '1.2.5' === n ? '' : n,
							prev_proxy_account_id: '1.2.5' === n ? '' : n,
							current_proxy_input: '1.2.5' === n ? '' : r,
							witnesses: null,
							committee: null,
							vote_ids: h().Set(),
							proxy_vote_ids: h().Set(),
							lastBudgetObject: e.initialBudget.get('id'),
							workerTableIndex: e.viewSettings.get('workerTableIndex', 1),
							all_witnesses: h().List(),
							all_committee: h().List(),
							hideLegacyProposals: !0,
							newWorkersLength: null,
							activeWorkersLength: null,
							pollsLength: null,
							expiredWorkersLength: null,
							voteThreshold: null,
							filterSearch: '',
							showCreateCommitteeModal: !1,
							showCreateWitnessModal: !1,
						}),
						(t.onProxyAccountFound = t.onProxyAccountFound.bind(Cs(t))),
						(t.onPublish = t.onPublish.bind(Cs(t))),
						(t.onReset = t.onReset.bind(Cs(t))),
						(t._getVoteObjects = t._getVoteObjects.bind(Cs(t))),
						t
					);
				}
				return (
					(t = c),
					(n = [
						{
							key: 'componentWillMount',
							value: function () {
								p.Z.getFinalFeeAsset(this.props.account, 'account_update'),
									So.ChainStore.fetchAllWorkers(),
									this.getBudgetObject();
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this.updateAccountData(this.props),
									this._getVoteObjects(),
									this._getVoteObjects('committee');
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									t.showCreateWitnessModal !==
										this.state.showCreateWitnessModal ||
									t.showCreateCommitteeModal !==
										this.state.showCreateCommitteeModal ||
									t.workerTableIndex !== this.state.workerTableIndex ||
									t.prev_proxy_account_id !==
										this.state.prev_proxy_account_id ||
									t.newWorkersLength !== this.state.newWorkersLength ||
									t.activeWorkersLength !== this.state.activeWorkersLength ||
									t.pollsLength !== this.state.pollsLength ||
									t.expiredWorkersLength !== this.state.expiredWorkersLength ||
									t.voteThreshold !== this.state.voteThreshold ||
									t.hideLegacyProposals !== this.state.hideLegacyProposals ||
									t.workerTableIndex !== this.state.workerTableIndex ||
									t.vote_ids.size !== this.state.vote_ids.size ||
									t.current_proxy_input !== this.state.current_proxy_input ||
									t.filterSearch !== this.state.filterSearch ||
									t.witnesses !== this.state.witnesses ||
									t.committee !== this.state.committee
								);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								if (e.account !== this.props.account) {
									var t = e.proxy.get('id'),
										n = {proxy_account_id: '1.2.5' === t ? '' : t};
									this.setState({prev_proxy_account_id: n.proxy_account_id}),
										this.updateAccountData(e, n);
								}
								this.getBudgetObject();
							},
						},
						{
							key: 'updateAccountData',
							value: function (e) {
								var t = this,
									n = e.account,
									r =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: this.state,
									o = r.proxy_account_id,
									s = So.ChainStore.getAccount(o),
									i = n.get('options'),
									a = s ? s.get('options') : null,
									c = s ? s.get('name') : '';
								'1.2.5' === o && ((o = ''), (c = ''));
								var l = i.get('votes'),
									u = l.toArray(),
									p = h().Set(u);
								So.ChainStore.getObjectsByVoteIds(u);
								var d = null,
									f = h().Set([]),
									y = '1.2.5' !== o;
								if (y && a) {
									var b = a.get('votes'),
										m = b.toArray();
									(f = h().Set(m)),
										So.ChainStore.getObjectsByVoteIds(m),
										(d = (0, So.FetchChainObjects)(
											So.ChainStore.getObjectByVoteID,
											m,
											1e4
										));
								}
								Promise.all([
									(0, So.FetchChainObjects)(
										So.ChainStore.getObjectByVoteID,
										u,
										1e4
									),
									d,
								]).then(function (e) {
									var n = xs(e, 2),
										r = n[0],
										s = n[1];
									function i(e) {
										var t = new (h().List)(),
											n = new (h().List)(),
											r = new (h().Set)();
										return (
											e.forEach(function (e) {
												var r = e.get('committee_member_account');
												r
													? (n = n.push(r))
													: (r = e.get('worker_account')) ||
													  ((r = e.get('witness_account')) && (t = t.push(r)));
											}),
											{witnesses: t, committee: n, workers: r}
										);
									}
									var a = i(r),
										l = a.witnesses,
										u = a.committee,
										d = a.workers,
										y = i(s || []),
										b = y.witnesses,
										m = y.committee,
										g = y.workers,
										v = {
											proxy_account_id: o,
											current_proxy_input: c,
											witnesses: l,
											committee: u,
											workers: d,
											proxy_witnesses: b,
											proxy_committee: m,
											proxy_workers: g,
											vote_ids: p,
											proxy_vote_ids: f,
											prev_witnesses: l,
											prev_committee: u,
											prev_workers: d,
											prev_vote_ids: p,
										};
									t.setState(v);
								});
							},
						},
						{
							key: 'isChanged',
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: this.state;
								return (
									e.proxy_account_id !== e.prev_proxy_account_id ||
									e.witnesses !== e.prev_witnesses ||
									e.committee !== e.prev_committee ||
									!h().is(e.vote_ids, e.prev_vote_ids)
								);
							},
						},
						{
							key: '_getVoteObjects',
							value: function () {
								var e,
									t = this,
									n =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 'witnesses',
									r = arguments.length > 1 ? arguments[1] : void 0,
									o = this.state['all_'.concat(n)],
									s = 'witnesses' === n;
								if (r) e = parseInt(r[r.length - 1].split('.')[2], 10);
								else {
									r = [];
									var i = this.props.globalObject
											.get(s ? 'active_witnesses' : 'active_committee_members')
											.sort(function (e, t) {
												return (
													parseInt(e.split('.')[2], 10) -
													parseInt(t.split('.')[2], 10)
												);
											}),
										a = i.last() || '1.'.concat(s ? '6' : '5', '.1');
									e = parseInt(a.split('.')[2], 10);
									for (var c = 1; c <= e + 10; c++)
										r.push('1.'.concat(s ? '6' : '5', '.').concat(c));
								}
								(0, So.FetchChainObjects)(
									So.ChainStore.getObject,
									r,
									5e3,
									{}
								).then(function (i) {
									if (
										((t.state['all_'.concat(n)] = o.concat(
											h().List(
												i
													.filter(function (e) {
														return !!e;
													})
													.map(function (e) {
														return e.get(
															s ? 'witness_account' : 'committee_member_account'
														);
													})
											)
										)),
										i[i.length - 1])
									) {
										r = [];
										for (var a = e + 11; a <= e + 20; a++)
											r.push('1.'.concat(s ? '6' : '5', '.').concat(a));
										return t._getVoteObjects(n, r);
									}
									t.forceUpdate();
								});
							},
						},
						{
							key: 'onPublish',
							value: function () {
								this.publish(this.state.proxy_account_id);
							},
						},
						{
							key: 'showWitnessModal',
							value: function () {
								gs.log('asdasd'),
									this.setState({
										showCreateWitnessModal: !this.state.showCreateWitnessModal,
									});
							},
						},
						{
							key: 'showCommitteeModal',
							value: function () {
								this.setState({
									showCreateCommitteeModal:
										!this.state.showCreateCommitteeModal,
								});
							},
						},
						{
							key: 'publish',
							value: function (e) {
								var t = this,
									n = this.props.account.toJS(),
									r = {account: n.id},
									o = {memo_key: n.options.memo_key};
								(o.voting_account = e || '1.2.5'),
									(o.num_witness = this.state.witnesses.size),
									(o.num_committee = this.state.committee.size),
									(r.new_options = o),
									(r.fee = {
										amount: 0,
										asset_id: p.Z.getFinalFeeAsset(n.id, 'account_update'),
									});
								var s = this.state.vote_ids,
									i = this._getWorkerArray(),
									a = new Date();
								function c(e, t) {
									return e.includes(t) && (e = e.delete(t)), e;
								}
								i.forEach(function (e) {
									e &&
										(new Date(e.get('work_end_date')) <= a &&
											(s = c(s, e.get('vote_for'))),
										(s = c(s, e.get('vote_against'))));
								}),
									(0, So.FetchChainObjects)(
										So.ChainStore.getWitnessById,
										this.state.witnesses.toArray(),
										4e3
									)
										.then(function (e) {
											var n = e.map(function (e) {
												return e.get('vote_id');
											});
											return Promise.all([
												Promise.resolve(n),
												(0, So.FetchChainObjects)(
													So.ChainStore.getCommitteeMemberById,
													t.state.committee.toArray(),
													4e3
												),
											]);
										})
										.then(function (e) {
											(r.new_options.votes = e[0]
												.concat(
													e[1].map(function (e) {
														return e.get('vote_id');
													})
												)
												.concat(
													s
														.filter(function (e) {
															return '2' === e.split(':')[0];
														})
														.toArray()
												)
												.sort(function (e, t) {
													var n = e.split(':'),
														r = t.split(':');
													return parseInt(n[1], 10) - parseInt(r[1], 10);
												})),
												M.Z.updateAccount(r);
										});
							},
						},
						{
							key: '_getWorkerArray',
							value: function () {
								var e = [];
								return (
									So.ChainStore.workers.forEach(function (t) {
										var n = So.ChainStore.getObject(t, !1, !1);
										n && e.push(n);
									}),
									e
								);
							},
						},
						{
							key: 'onReset',
							value: function () {
								var e = this,
									t = this.state;
								this.refs.voting_proxy &&
									this.refs.voting_proxy.refs.bound_component &&
									this.refs.voting_proxy.refs.bound_component.onResetProxy(),
									this.setState(
										{
											proxy_account_id: t.prev_proxy_account_id,
											current_proxy_input: t.prev_proxy_input,
											witnesses: t.prev_witnesses,
											committee: t.prev_committee,
											workers: t.prev_workers,
											vote_ids: t.prev_vote_ids,
										},
										function () {
											e.updateAccountData(e.props);
										}
									);
							},
						},
						{
							key: 'onAddItem',
							value: function (e, t) {
								var n = {};
								(n[e] = this.state[e].push(t)), this.setState(n);
							},
						},
						{
							key: 'onRemoveItem',
							value: function (e, t) {
								var n = {};
								(n[e] = this.state[e].filter(function (e) {
									return e !== t;
								})),
									this.setState(n);
							},
						},
						{
							key: 'onChangeVotes',
							value: function (e, t) {
								var n = {};
								(n.vote_ids = this.state.vote_ids),
									e.length &&
										e.forEach(function (e) {
											n.vote_ids = n.vote_ids.add(e);
										}),
									t &&
										t.forEach(function (e) {
											n.vote_ids = n.vote_ids.delete(e);
										}),
									this.setState(n);
							},
						},
						{
							key: 'validateAccount',
							value: function (e, t) {
								return t
									? 'witnesses' === e
										? (0, So.FetchChainObjects)(
												So.ChainStore.getWitnessById,
												[t.get('id')],
												3e3
										  ).then(function (e) {
												return e[0] ? null : 'Not a witness';
										  })
										: 'committee' === e
										? (0, So.FetchChainObjects)(
												So.ChainStore.getCommitteeMemberById,
												[t.get('id')],
												3e3
										  ).then(function (e) {
												return e[0] ? null : 'Not a committee member';
										  })
										: null
									: null;
							},
						},
						{
							key: 'onProxyChange',
							value: function (e) {
								var t = So.ChainStore.getAccount(e);
								(!t || (t && t.get('id') !== this.state.proxy_account_id)) &&
									this.setState({
										proxy_account_id: '',
										proxy_witnesses: h().Set(),
										proxy_committee: h().Set(),
										proxy_workers: h().Set(),
									}),
									this.setState({current_proxy_input: e});
							},
						},
						{
							key: 'onProxyAccountFound',
							value: function (e) {
								var t = this,
									n = e ? e.get('id') : '';
								this.state.proxy_account_id !== n &&
									this.setState({proxy_account_id: n}, function () {
										t.updateAccountData(t.props);
									});
							},
						},
						{
							key: 'onClearProxy',
							value: function () {
								this.setState({proxy_account_id: ''});
							},
						},
						{
							key: 'getBudgetObject',
							value: function () {
								var e,
									t = this,
									n = this.state.lastBudgetObject;
								e = So.ChainStore.getObject(n);
								var r = parseInt(n.split('.')[2], 10);
								if (e) {
									var o = e.get('time');
									/Z$/.test(o) || (o += 'Z');
									var s = new Date(),
										a =
											r +
											Math.floor((s - new Date(o).getTime()) / 1e3 / 60 / 60) -
											1;
									if (r >= a) return;
									var c = '2.13.' + Math.max(r, a),
										l = parseInt(c.split('.')[2], 10);
									(0, So.FetchChainObjects)(
										So.ChainStore.getObject,
										[c],
										void 0,
										{}
									).then(function (e) {
										null === xs(e, 1)[0]
											? t.setState(
													{lastBudgetObject: '2.13.'.concat(l - 1)},
													t.getBudgetObject
											  )
											: (i.Z.setLastBudgetObject(c),
											  t.setState({lastBudgetObject: c}));
									});
								} else {
									var u = '2.13.'.concat(r - 1);
									(0, So.FetchChainObjects)(
										So.ChainStore.getObject,
										[u],
										void 0,
										{}
									).then(function (e) {
										null === xs(e, 1)[0]
											? t.setState(
													{lastBudgetObject: '2.13.'.concat(r - 2)},
													t.getBudgetObject
											  )
											: (i.Z.setLastBudgetObject(u),
											  t.setState({lastBudgetObject: u}));
									});
								}
							},
						},
						{
							key: '_setWorkerTableIndex',
							value: function (e) {
								this.setState({workerTableIndex: e.target.value});
							},
						},
						{
							key: 'setWorkersLength',
							value: function (e, t, n, r, o) {
								this.setState({
									newWorkersLength: e,
									activeWorkersLength: t,
									pollsLength: n,
									expiredWorkersLength: r,
									voteThreshold: o,
								});
							},
						},
						{
							key: 'handleFilterChange',
							value: function (e) {
								this.setState({filterSearch: e.target.value || ''});
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t = this,
									n = this.state,
									o = n.workerTableIndex,
									s = n.prev_proxy_account_id,
									i = n.newWorkersLength,
									a = n.activeWorkersLength,
									c = n.pollsLength,
									l = n.expiredWorkersLength,
									u = n.voteThreshold,
									p = n.hideLegacyProposals,
									d = n.filterSearch,
									h = !!s,
									f = this.props.settings.get('unit') || '1.3.0',
									y = !!this.state.proxy_account_id,
									b =
										(ue()('button', {disabled: !this.isChanged()}), this.props),
									m = b.globalObject,
									g = b.account;
								this.state.lastBudgetObject &&
									(e = So.ChainStore.getObject(this.state.lastBudgetObject));
								var v = 0,
									j = m
										? parseInt(
												m.getIn(['parameters', 'worker_budget_per_day']),
												10
										  )
										: 0;
								e &&
									((j = Math.min(24 * e.getIn(['record', 'worker_budget']), j)),
									(v = Math.min(24 * e.getIn(['record', 'worker_budget']), j)));
								var w = (0, E.jsx)(at.Z, {
										title: Z().translate(
											'account.votes.cast_votes_through_one_operation'
										),
										mouseEnterDelay: 0.5,
										children: (0, E.jsxs)('div', {
											style: {float: 'right'},
											children: [
												(0, E.jsx)(T.Z, {
													type: 'primary',
													onClick: this.onPublish,
													tabIndex: 4,
													disabled: !this.isChanged() || void 0,
													children: (0, E.jsx)(x(), {
														content: 'account.votes.publish',
													}),
												}),
												(0, E.jsx)(T.Z, {
													style: {marginLeft: '8px'},
													onClick: this.onReset,
													tabIndex: 8,
													children: (0, E.jsx)(x(), {
														content: 'account.perm.reset',
													}),
												}),
											],
										}),
									}),
									k = (0, E.jsxs)(r.Fragment, {
										children: [
											(0, E.jsx)(R.Z, {
												label: 'account.votes.proxy_short',
												style: {
													width: '50%',
													maxWidth: 250,
													display: 'inline-block',
												},
												account: this.state.current_proxy_input,
												accountName: this.state.current_proxy_input,
												onChange: this.onProxyChange.bind(this),
												onAccountChanged: this.onProxyAccountFound,
												tabIndex: 1,
												placeholder: Z().translate('account.votes.set_proxy'),
												tooltip: Z().translate(
													this.state.proxy_account_id
														? 'tooltip.proxy_remove'
														: 'tooltip.proxy_search'
												),
												hideImage: !0,
												children: (0, E.jsx)('span', {
													style: {paddingLeft: 5, position: 'relative', top: 9},
													children: (0, E.jsx)(_.Z, {
														to: '/exchange/help/voting',
														children: (0, E.jsx)($.Z, {
															name: 'question-circle',
															title: 'icons.question_circle',
															size: '1x',
														}),
													}),
												}),
											}),
											h &&
												(0, E.jsx)(T.Z, {
													style: {marginLeft: '1rem'},
													onClick: this.onRemoveProxy,
													tabIndex: 9,
													children: (0, E.jsx)(x(), {
														content: 'account.perm.remove_proxy',
													}),
												}),
										],
									}),
									S = (0, E.jsx)('div', {
										className: 'inline-block',
										style: {
											float: 'right',
											visibility: this.isChanged() ? 'visible' : 'hidden',
											color: 'red',
											padding: '0.85rem',
											fontSize: '0.9rem',
										},
										children: (0, E.jsx)(x(), {
											content: 'account.votes.save_finish',
										}),
									}),
									C = (0, E.jsx)('div', {
										className: 'inline-block',
										style: {marginLeft: '0.5em'},
										onClick: function () {
											t.setState({
												hideLegacyProposals: !t.state.hideLegacyProposals,
											});
										},
										children: (0, E.jsxs)(at.Z, {
											title: Z().translate('tooltip.legacy_explanation'),
											children: [
												(0, E.jsx)(ve.Z, {
													style: {marginRight: 6, marginTop: -3},
													checked: this.state.hideLegacyProposals,
												}),
												(0, E.jsx)(x(), {
													content: 'account.votes.hide_legacy_proposals',
												}),
											],
										}),
									});
								return (0, E.jsx)('div', {
									className: 'grid-content no-padding page-layout ',
									children: (0, E.jsxs)('div', {
										className: 'main-content content-block small-12 voting',
										children: [
											(0, E.jsxs)('div', {
												className: 'padding',
												children: [
													(0, E.jsxs)('div', {
														children: [
															(0, E.jsx)(x(), {
																content: 'voting.title',
																component: 'h1',
															}),
															(0, E.jsx)(x(), {
																content: 'voting.description',
																component: 'p',
															}),
														],
													}),
													(0, E.jsxs)('div', {
														className: 'proxy-row',
														children: [k, w],
													}),
												],
											}),
											(0, E.jsx)('div', {
												className: 'tabs-container generic-bordered-box',
												children: (0, E.jsxs)(X.m, {
													setting: 'votingTab',
													className: 'account-tabs',
													defaultActiveTab: 1,
													segmented: !1,
													actionButtons: S,
													tabsClass:
														'account-overview no-padding bordered-header content-block',
													children: [
														(0, E.jsxs)(X.O, {
															title: 'explorer.witnesses.title',
															children: [
																(0, E.jsxs)('div', {
																	className: ue()('content-block'),
																	children: [
																		(0, E.jsxs)('div', {
																			className: 'header-selector',
																			children: [
																				(0, E.jsx)('div', {
																					style: {float: 'right'},
																					children: (0, E.jsx)(T.Z, {
																						style: {marginRight: '5px'},
																						onClick:
																							this.showWitnessModal.bind(this),
																						children: (0, E.jsx)(x(), {
																							content:
																								'account.votes.join_witnesses',
																						}),
																					}),
																				}),
																				(0, E.jsx)('div', {
																					className: 'selector inline-block',
																					children: (0, E.jsx)(Xo.Z, {
																						placeholder: 'Filter...',
																						value: this.state.filterSearch,
																						style: {width: '220px'},
																						onChange:
																							this.handleFilterChange.bind(
																								this
																							),
																						addonAfter: (0, E.jsx)(ms.RB5, {}),
																					}),
																				}),
																			],
																		}),
																		(0, E.jsx)(Ho, {
																			type: 'witness',
																			label: 'account.votes.add_witness_label',
																			items: this.state.all_witnesses,
																			validateAccount:
																				this.validateAccount.bind(
																					this,
																					'witnesses'
																				),
																			onAddItem: this.onAddItem.bind(
																				this,
																				'witnesses'
																			),
																			onRemoveItem: this.onRemoveItem.bind(
																				this,
																				'witnesses'
																			),
																			tabIndex: y ? -1 : 2,
																			supported:
																				this.state[
																					y ? 'proxy_witnesses' : 'witnesses'
																				],
																			withSelector: !1,
																			active: m.get('active_witnesses'),
																			proxy: this.state.proxy_account_id,
																			filterSearch: d,
																		}),
																	],
																}),
																(0, E.jsx)(us, {
																	visible: this.state.showCreateWitnessModal,
																	account: g,
																	hideModal: this.showWitnessModal.bind(this),
																}),
															],
														}),
														(0, E.jsxs)(X.O, {
															title: 'explorer.committee_members.title',
															children: [
																(0, E.jsxs)('div', {
																	className: 'header-selector',
																	children: [
																		(0, E.jsx)('div', {
																			style: {float: 'right'},
																			children: (0, E.jsx)(T.Z, {
																				style: {marginRight: '5px'},
																				onClick:
																					this.showCommitteeModal.bind(this),
																				children: (0, E.jsx)(x(), {
																					content:
																						'account.votes.join_committee',
																				}),
																			}),
																		}),
																		(0, E.jsx)('div', {
																			className: 'selector inline-block',
																			children: (0, E.jsx)(Xo.Z, {
																				placeholder: 'Filter...',
																				value: this.state.filterSearch,
																				style: {width: '220px'},
																				onChange:
																					this.handleFilterChange.bind(this),
																			}),
																		}),
																	],
																}),
																(0, E.jsx)('div', {
																	className: ue()('content-block'),
																	children: (0, E.jsx)(Ho, {
																		type: 'committee',
																		label: 'account.votes.add_committee_label',
																		items: this.state.all_committee,
																		validateAccount: this.validateAccount.bind(
																			this,
																			'committee'
																		),
																		onAddItem: this.onAddItem.bind(
																			this,
																			'committee'
																		),
																		onRemoveItem: this.onRemoveItem.bind(
																			this,
																			'committee'
																		),
																		tabIndex: y ? -1 : 3,
																		supported:
																			this.state[
																				y ? 'proxy_committee' : 'committee'
																			],
																		withSelector: !1,
																		active: m.get('active_committee_members'),
																		proxy: this.state.proxy_account_id,
																		filterSearch: d,
																	}),
																}),
																(0, E.jsx)(bs, {
																	visible: this.state.showCreateCommitteeModal,
																	account: g,
																	hideModal: this.showCommitteeModal.bind(this),
																}),
															],
														}),
														(0, E.jsxs)(X.O, {
															title: 'account.votes.workers_short',
															children: [
																(0, E.jsxs)('div', {
																	className: 'header-selector',
																	children: [
																		(0, E.jsx)('div', {
																			style: {float: 'right'},
																			children: (0, E.jsx)(_.Z, {
																				to: '/exchange/create-worker',
																				className: 'button primary',
																				children: (0, E.jsx)(x(), {
																					content:
																						'account.votes.create_worker',
																				}),
																			}),
																		}),
																		(0, E.jsxs)('div', {
																			className: 'selector inline-block',
																			children: [
																				(0, E.jsx)(Xo.Z, {
																					placeholder: 'Filter...',
																					value: this.state.filterSearch,
																					style: {width: '220px'},
																					onChange:
																						this.handleFilterChange.bind(this),
																				}),
																				(0, E.jsxs)($o.ZP.Group, {
																					defaultValue: 1,
																					onChange:
																						this._setWorkerTableIndex.bind(
																							this
																						),
																					children: [
																						(0, E.jsx)($o.ZP, {
																							value: 0,
																							children: Z().translate(
																								'account.votes.new',
																								{count: i}
																							),
																						}),
																						(0, E.jsx)($o.ZP, {
																							value: 1,
																							children: Z().translate(
																								'account.votes.active',
																								{count: a}
																							),
																						}),
																						c
																							? (0, E.jsx)($o.ZP, {
																									value: 3,
																									children: Z().translate(
																										'account.votes.polls',
																										{count: c}
																									),
																							  })
																							: null,
																						l
																							? (0, E.jsx)($o.ZP, {
																									value: 2,
																									children: (0, E.jsx)(x(), {
																										content:
																											'account.votes.expired',
																									}),
																							  })
																							: null,
																					],
																				}),
																			],
																		}),
																		C,
																		(0, E.jsx)('br', {}),
																		(0, E.jsx)('br', {}),
																		(0, E.jsxs)(es.Z, {
																			children: [
																				(0, E.jsxs)(ts.Z, {
																					span: 3,
																					children: [
																						(0, E.jsx)(x(), {
																							content:
																								'account.votes.threshold',
																						}),
																						' (',
																						(0, E.jsx)(Po.Z, {name: f}),
																						')',
																					],
																				}),
																				(0, E.jsx)(ts.Z, {
																					span: 3,
																					style: {marginLeft: '10px'},
																					children: (0, E.jsx)(O.Z, {
																						decimalOffset: 4,
																						hide_asset: !0,
																						amount: u,
																						asset: '1.3.0',
																					}),
																				}),
																			],
																		}),
																		(0, E.jsxs)(es.Z, {
																			children: [
																				(0, E.jsxs)(ts.Z, {
																					span: 3,
																					children: [
																						(0, E.jsx)(x(), {
																							content:
																								'account.votes.total_budget',
																						}),
																						' (',
																						(0, E.jsx)(Po.Z, {name: f}),
																						')',
																					],
																				}),
																				(0, E.jsx)(ts.Z, {
																					span: 3,
																					style: {marginLeft: '10px'},
																					children: m
																						? (0, E.jsx)(Co.i, {
																								hide_asset: !0,
																								fromAsset: '1.3.0',
																								toAsset: f,
																								amount: v,
																						  })
																						: null,
																				}),
																			],
																		}),
																	],
																}),
																(0, E.jsx)(Fo, {
																	workerTableIndex: o,
																	preferredUnit: f,
																	setWorkersLength:
																		this.setWorkersLength.bind(this),
																	workerBudget: j,
																	hideLegacyProposals: p,
																	hasProxy: y,
																	proxy_vote_ids: this.state.proxy_vote_ids,
																	vote_ids: this.state.vote_ids,
																	onChangeVotes: this.onChangeVotes.bind(this),
																	getWorkerArray:
																		this._getWorkerArray.bind(this),
																	filterSearch: d,
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
					]),
					n && ks(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					c
				);
			})(r.Component);
			As(Zs, 'propTypes', {
				initialBudget: c.Z.ChainObject.isRequired,
				globalObject: c.Z.ChainObject.isRequired,
				proxy: c.Z.ChainAccount.isRequired,
			}),
				As(Zs, 'defaultProps', {globalObject: '2.0.0'}),
				(Zs = (0, l.Z)(Zs));
			const Ms = function (e) {
				var t = {};
				if (
					(e.initialBudget || (t.initialBudget = i.Z.getLastBudgetObject()),
					!e.account)
				) {
					var n =
						s.Z.getState().currentAccount || s.Z.getState().passwordAccount;
					(n = n && 'null' !== n ? n : 'committee-account'), (t.account = n);
				}
				if (!e.proxy) {
					var r,
						o = So.ChainStore.getAccount(e.account);
					if (!o) throw 'Account must be loaded';
					(r = o.getIn(['options', 'voting_account'])), (t.proxy = r);
				}
				return (0, E.jsx)(Zs, js(js({}, e), t));
			};
			var Rs = n(94990),
				Ns = n(50674);
			function Is(e) {
				return (
					(Is =
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
					Is(e)
				);
			}
			function Ts(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Bs(e, t) {
				return (
					(Bs =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Bs(e, t)
				);
			}
			function Es(e, t) {
				if (t && ('object' === Is(t) || 'function' == typeof t)) return t;
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
			function Ds(e) {
				return (
					(Ds = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ds(e)
				);
			}
			function Vs(e, t, n) {
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
			var qs = {textAlign: 'right'},
				Fs = {textAlign: 'left'},
				Us = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && Bs(e, t);
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
									t = Ds(r);
								if (o) {
									var n = Ds(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return Es(this, e);
							});
					function i(e) {
						var t;
						!(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
							(t = s.call(this, e));
						var n = null != e.object;
						return (
							(t.state = {
								isBorrowModalVisible: !1,
								modalRef:
									'cp_modal_' +
									(n
										? t.props.object.getIn(['call_price', 'quote', 'asset_id'])
										: t.props.debtAsset.get('id')),
								hasOrder: n,
							}),
							t
						);
					}
					return (
						(t = i),
						(n = [
							{
								key: 'showBorrowModal',
								value: function () {
									this.setState({isBorrowModalVisible: !0});
								},
							},
							{
								key: 'hideBorrowModal',
								value: function () {
									this.setState({isBorrowModalVisible: !1});
								},
							},
							{
								key: '_onUpdatePosition',
								value: function (e) {
									e.preventDefault(), this.refs[this.state.modalRef].show();
								},
							},
							{
								key: '_getFeedPrice',
								value: function () {
									return this.props
										? 1 /
												P.Z.get_asset_price(
													Y.Z.extractRawFeedPrice(this.props.debtAsset).getIn([
														'quote',
														'amount',
													]),
													this.props.collateralAsset,
													Y.Z.extractRawFeedPrice(this.props.debtAsset).getIn([
														'base',
														'amount',
													]),
													this.props.debtAsset
												)
										: 1;
								},
							},
							{
								key: '_onClosePosition',
								value: function (e) {
									e.preventDefault();
									var t = co.Z.new_transaction();
									t.add_type_operation('call_order_update', {
										fee: {amount: 0, asset_id: 0},
										funding_account: this.props.object.get('borrower'),
										delta_collateral: {
											amount: -this.props.object.get('collateral'),
											asset_id: this.props.object.getIn([
												'call_price',
												'base',
												'asset_id',
											]),
										},
										delta_debt: {
											amount: -this.props.object.get('debt'),
											asset_id: this.props.object.getIn([
												'call_price',
												'quote',
												'asset_id',
											]),
										},
									}),
										bn.Z.process_transaction(t, null, !0);
								},
							},
							{
								key: '_getBalance',
								value: function () {
									var e,
										t = this.props.account;
									e =
										null != this.props.object
											? this.props.object.getIn([
													'call_price',
													'quote',
													'asset_id',
											  ])
											: this.props.debtAsset.get('id');
									var n = t.get('balances'),
										r = 0;
									return (
										n &&
											n.forEach(function (t, n) {
												if (n == e) {
													var o = de.BQ.getObject(t);
													r = o.get('balance');
												}
											}),
										r
									);
								},
							},
							{
								key: '_getCollateralRatio',
								value: function () {
									var e = this.props.object.toJS();
									return (
										P.Z.get_asset_amount(
											e.collateral,
											this.props.collateralAsset
										) /
										(P.Z.get_asset_amount(e.debt, this.props.debtAsset) /
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
											? Z().translate('tooltip.cr_danger', {mr: t})
											: 'warning' === e
											? Z().translate('tooltip.cr_warning', {mr: t})
											: null
										: null;
								},
							},
							{
								key: '_getTargetCollateralRatio',
								value: function () {
									var e = this.props.object && this.props.object.toJS();
									return e && !isNaN(e.target_collateral_ratio)
										? e.target_collateral_ratio / 1e3
										: 0;
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.debtAsset,
										n = e.collateralAsset,
										r = e.object,
										o = null != r,
										s = this._getBalance(),
										i = o ? r.toJS() : null,
										a = P.Z.replaceName(this.props.debtAsset).isBitAsset,
										c =
											t.get('bitasset') &&
											t.getIn(['bitasset', 'is_prediction_market']),
										l = this.props.debtAsset.getIn([
											'bitasset',
											'settlement_fund',
										]),
										u = this.props.debtAsset.getIn([
											'bitasset',
											'current_feed',
											'maintenance_collateral_ratio',
										]),
										p = l > 0,
										h = o ? i.call_price.quote.asset_id : t.get('id'),
										f = o ? i.debt : 0,
										y = o ? i.collateral : 0,
										b = o ? i.call_price.base.asset_id : n.get('id'),
										m = this._getTargetCollateralRatio();
									return (0, E.jsxs)('tr', {
										className: 'margin-row',
										children: [
											(0, E.jsx)('td', {
												style: Fs,
												children: (0, E.jsx)(_.Z, {
													to: '/asset/'.concat(t.get('symbol')),
													children: (0, E.jsx)(Po.Z, {
														noTip: !0,
														name: t.get('symbol'),
													}),
												}),
											}),
											(0, E.jsx)('td', {
												style: qs,
												children: (0, E.jsx)(O.Z, {
													amount: s,
													asset: h,
													hide_asset: !0,
												}),
											}),
											(0, E.jsx)('td', {
												style: qs,
												children: (0, E.jsx)(O.Z, {
													amount: f,
													asset: h,
													hide_asset: !0,
												}),
											}),
											(0, E.jsx)('td', {
												style: qs,
												className: 'column-hide-medium',
												children: (0, E.jsx)(O.Z, {
													decimalOffset: 3,
													amount: y,
													asset: b,
												}),
											}),
											o
												? (0, E.jsx)('td', {
														'data-place': 'bottom',
														'data-tip': this._getCRTip(),
														className:
															'center-content ' + this._getStatusClass(),
														children: c
															? '1:1'
															: P.Z.format_number(
																	this._getCollateralRatio(),
																	2
															  ),
												  })
												: (0, E.jsx)('td', {}),
											(0, E.jsx)('td', {
												children: m && !c ? P.Z.format_number(m, 2) : null,
											}),
											(0, E.jsx)('td', {
												style: qs,
												children: o
													? (0, E.jsx)(Rs.Z, {
															noTip: !0,
															balances: (0, d.List)(),
															debt: Vs({}, t.get('id'), i.debt),
															collateral: Vs(
																{},
																n.get('id'),
																parseInt(i.collateral, 10)
															),
															hide_asset: !0,
													  })
													: null,
											}),
											(0, E.jsx)('td', {
												style: qs,
												className: 'column-hide-small',
												children: o
													? c
														? '-'
														: (0, E.jsx)(Le.Z, {
																base_amount: y,
																base_asset: n.get('id'),
																quote_amount: f * (u / 1e3),
																quote_asset: t.get('id'),
																hide_symbols: !0,
														  })
													: null,
											}),
											(0, E.jsx)('td', {
												style: qs,
												className: 'column-hide-small',
												children: o
													? c
														? '1'
														: (0, E.jsx)(Le.Z, {
																base_amount: Y.Z.extractRawFeedPrice(t).getIn([
																	'base',
																	'amount',
																]),
																base_asset: i.call_price.quote.asset_id,
																quote_amount: Y.Z.extractRawFeedPrice(t).getIn([
																	'quote',
																	'amount',
																]),
																quote_asset: i.call_price.base.asset_id,
																hide_symbols: !0,
														  })
													: null,
											}),
											(0, E.jsx)('td', {
												className: 'center-content column-hide-small',
												style: Fs,
												children: o
													? (0, E.jsx)(Le.Z, {
															base_amount: i.call_price.base.amount,
															base_asset: i.call_price.base.asset_id,
															quote_amount: i.call_price.quote.amount,
															quote_asset: i.call_price.quote.asset_id,
															hide_value: !0,
													  })
													: null,
											}),
											(0, E.jsx)('td', {
												style: {textAlign: 'center'},
												children: (0, E.jsx)(_.Z, {
													to: '/market/'
														.concat(t.get('symbol'), '_')
														.concat(n.get('symbol')),
													children: (0, E.jsx)($.Z, {
														name: 'trade',
														title: 'icons.trade.trade',
														className: 'icon-14px',
														style: {marginRight: 5},
													}),
												}),
											}),
											(0, E.jsx)('td', {
												children: p
													? (0, E.jsx)(at.Z, {
															placement: 'left',
															title: Z().translate('tooltip.borrow_disabled', {
																asset: a
																	? 'bit' + ''.concat(t.get('symbol'))
																	: ''.concat(t.get('symbol')),
															}),
															children: (0, E.jsx)('div', {
																style: {paddingBottom: 5},
																children: (0, E.jsx)(ms.znh, {}),
															}),
													  })
													: (0, E.jsx)(at.Z, {
															placement: 'left',
															title: Z().translate('tooltip.update_position'),
															children: (0, E.jsx)('div', {
																style: {paddingBottom: 5},
																children: (0, E.jsx)('a', {
																	onClick: this._onUpdatePosition.bind(this),
																	children: (0, E.jsx)($.Z, {
																		name: 'adjust',
																		title: 'icons.adjust',
																		className: 'icon-14px rotate90',
																	}),
																}),
															}),
													  }),
											}),
											(0, E.jsxs)('td', {
												children: [
													o
														? (0, E.jsx)('div', {
																'data-place': 'left',
																'data-tip': Z().translate(
																	'tooltip.close_position',
																	{
																		amount: P.Z.get_asset_amount(
																			i.debt,
																			this.props.debtAsset
																		),
																		asset: t.get('symbol'),
																	}
																),
																style: {paddingBottom: 5},
																children: (0, E.jsx)('a', {
																	onClick: this._onClosePosition.bind(this),
																	children: (0, E.jsx)($.Z, {
																		name: 'cross-circle',
																		title: 'icons.cross_circle.close_position',
																		className: 'icon-14px',
																	}),
																}),
														  })
														: null,
													t
														? (0, E.jsx)(Ns.Z, {
																visible: this.state.isBorrowModalVisible,
																showModal: this.showBorrowModal.bind(this),
																hideModal: this.hideBorrowModal.bind(this),
																ref: this.state.modalRef,
																modalId: this.state.modalRef,
																quoteAssetObj: h,
																backingAssetObj: t.getIn([
																	'bitasset',
																	'options',
																	'short_backing_asset',
																]),
																accountObj: this.props.account,
														  })
														: null,
												],
											}),
										],
									});
								},
							},
						]) && Ts(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						i
					);
				})(r.Component);
			Vs(Us, 'propTypes', {
				object: c.Z.ChainObject,
				debtAsset: c.Z.ChainAsset.isRequired,
				collateralAsset: c.Z.ChainAsset.isRequired,
			}),
				Vs(Us, 'defaultProps', {tempComponent: 'tr'});
			const Ls = (Us = (0, l.Z)(Us));
			var zs = n(54115);
			function Ws(e) {
				return (
					(Ws =
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
					Ws(e)
				);
			}
			function Ks(e, t) {
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
			function Js(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Qs(e, t) {
				return (
					(Qs =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Qs(e, t)
				);
			}
			function Gs(e, t) {
				if (t && ('object' === Ws(t) || 'function' == typeof t)) return t;
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
			function Ys(e) {
				return (
					(Ys = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ys(e)
				);
			}
			function Hs(e, t, n) {
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
			var Xs = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Qs(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					s,
					i =
						((o = a),
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
								t = Ys(o);
							if (s) {
								var n = Ys(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Gs(this, e);
						});
				function a(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((t = i.call(this, e)).state = {
							assetsPropsCount: 0,
							ordersJson: '',
						}),
						t
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props.account,
									n = this.state.assets
										.sort(function (e, t) {
											if (e.has_margin_order && t.has_margin_order)
												return t.order.get('debt') - e.order.get('debt');
											if (e.has_margin_order || t.has_margin_order)
												return e.has_margin_order ? -1 : 1;
											var n = P.Z.replaceName(e.asset),
												r = P.Z.replaceName(t.asset),
												o = (null != n.prefix ? n.prefix : '') + n.name,
												s = (null != r.prefix ? r.prefix : '') + r.name;
											return o.localeCompare(s);
										})
										.map(function (n) {
											var r,
												o,
												s = null;
											if (n.has_margin_order) {
												var i = n.order;
												(r = i.getIn(['call_price', 'quote', 'asset_id'])),
													(o = i.getIn(['call_price', 'base', 'asset_id'])),
													(s = i.get('id'));
											} else (r = n.asset.get('id')), (o = n.asset.getIn(['bitasset', 'options', 'short_backing_asset']));
											return (0, E.jsx)(
												Ls,
												(function (e) {
													for (var t = 1; t < arguments.length; t++) {
														var n = null != arguments[t] ? arguments[t] : {};
														t % 2
															? Ks(Object(n), !0).forEach(function (t) {
																	Hs(e, t, n[t]);
															  })
															: Object.getOwnPropertyDescriptors
															? Object.defineProperties(
																	e,
																	Object.getOwnPropertyDescriptors(n)
															  )
															: Ks(Object(n)).forEach(function (t) {
																	Object.defineProperty(
																		e,
																		t,
																		Object.getOwnPropertyDescriptor(n, t)
																	);
															  });
													}
													return e;
												})(
													{
														object: s,
														account: t,
														debtAsset: r,
														collateralAsset: o,
													},
													e.props
												),
												n.asset.get('id')
											);
										});
								return (0, E.jsx)('tbody', {children: n});
							},
						},
					]),
					(r = [
						{
							key: 'getDerivedStateFromProps',
							value: function (e, t) {
								var n = JSON.stringify(e.callOrders);
								if (
									null == t ||
									t.assetsPropsCount != e.bitAssets.length ||
									t.ordersJson != n
								) {
									var r = new Array(),
										o = {},
										s = 0;
									return (
										e.bitAssets.forEach(function (e) {
											(o[e.get('id')] = s++),
												r.push({asset: e, has_margin_order: !1});
										}),
										e.callOrders.length > 0 &&
											e.callOrders.forEach(function (e) {
												if (e) {
													var t = e.getIn(['call_price', 'quote', 'asset_id']);
													if (null == o[t]) {
														var n = de.BQ.getObject(t);
														void 0 !== n &&
															((o[t] = s++),
															r.push({
																asset: n,
																has_margin_order: !0,
																order: e,
															}));
													} else
														(r[o[t]].has_margin_order = !0),
															(r[o[t]].order = e);
												}
											}),
										{
											assetsPropsCount: e.bitAssets.length,
											assets: r,
											ordersJson: n,
										}
									);
								}
								return t;
							},
						},
					]),
					n && Js(t.prototype, n),
					r && Js(t, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			Hs(Xs, 'propTypes', {callOrders: c.Z.ChainObjectsList}),
				(Xs = (0, l.Z)(Xs)),
				(Xs = (0, H.Z)(Xs, {
					propNames: ['bitAssets'],
					defaultProps: {
						bitAssets: [
							'1.3.113',
							'1.3.120',
							'1.3.121',
							'1.3.1325',
							'1.3.105',
							'1.3.106',
							'1.3.103',
						],
					},
					asList: !0,
				}));
			var $s = n(71869),
				ei = n(5674),
				ti = function (e) {
					var t = this;
					(this.id = e.toJS ? e.get(0) : e[0]),
						(this.weight = e.toJS ? e.get(1) : e[1]),
						(this.isAvailable = function (e) {
							return e.includes ? e.includes(t.id) : -1 !== e.indexOf(t);
						});
				},
				ni = {
					AccountPermission: function (e, t, n) {
						var r = this;
						(this.id = e.get('id')),
							(this.weight = t),
							(this.threshold = e.getIn([n, 'weight_threshold'])),
							(this.accounts = []),
							(this.keys = e
								.getIn([n, 'key_auths'])
								.map(function (e) {
									return new ti(e);
								})
								.toArray()),
							(this.isAvailable = function (e) {
								return e.includes ? e.includes(r.id) : -1 !== e.indexOf(r);
							}),
							(this._sumWeights = function (e) {
								if (r.isNested() || r.isMultiSig()) {
									var t = r.accounts.reduce(function (t, n) {
										return t + (n._sumWeights(e) ? n.weight : 0);
									}, 0);
									return Math.floor(t / r.threshold);
								}
								return r.isAvailable(e) ? r.weight : 0;
							}),
							(this.getStatus = function (e, t) {
								if (r.isNested()) {
									var n = r.accounts.reduce(function (t, n) {
										return t + n._sumWeights(e);
									}, 0);
									return r.keys.length && (n += r.sumKeys(t)), n;
								}
								var o = r._sumWeights(e);
								return r.isMultiSig() && (o += r.sumKeys(t)), o;
							}),
							(this.sumKeys = function (e) {
								var t = r.keys.reduce(function (t, n) {
									return t + (n.isAvailable(e) ? n.weight : 0);
								}, 0);
								return t;
							}),
							(this.isNested = function () {
								return r.accounts.length > 0;
							}),
							(this.isMultiSig = function () {
								return r.keys.reduce(function (e, t) {
									return e || t.weight < r.threshold;
								}, !1);
							}),
							(this.getMissingSigs = function (e) {
								var t = [],
									n = [];
								return (
									r.isNested()
										? (n = r.accounts.reduce(function (t, n) {
												return t.concat(n.getMissingSigs(e));
										  }, []))
										: r.isAvailable(e) || t.push(r.id),
									t.concat(n)
								);
							}),
							(this.getMissingKeys = function (e) {
								var t = [],
									n = [];
								return (
									r.keys.length &&
										(r.isNested() || r.isMultiSig()) &&
										r.keys.forEach(function (n) {
											n.isAvailable(e) || t.push(n.id);
										}),
									r.isNested() &&
										(n = r.accounts.reduce(function (t, n) {
											return t.concat(n.getMissingKeys(e));
										}, [])),
									t.concat(n)
								);
							});
					},
					listToIDs: function (e) {
						var t = [];
						return (
							e.forEach(function (e) {
								e && t.push(e.get ? e.get('id') : e);
							}),
							t
						);
					},
					unravel: function (e, t) {
						var n = this,
							r =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: 0;
						if (r < 3) {
							var o = de.BQ.getAccount(e.id);
							o &&
								o.getIn([t, 'account_auths']).size &&
								o.getIn([t, 'account_auths']).forEach(function (o) {
									var s = de.BQ.getAccount(o.get(0));
									s &&
										e.accounts.push(
											n.unravel(
												new n.AccountPermission(s, o.get(1), t),
												t,
												r + 1
											)
										);
								});
						}
						return e;
					},
					unnest: function (e, t) {
						var n = this,
							r = [];
						return (
							e.forEach(function (e) {
								var o = de.BQ.getAccount(e);
								if (o) {
									var s = n.unravel(new n.AccountPermission(o, null, t), t);
									r.push(s);
								}
							}),
							r
						);
					},
					flatten_auths: function (e) {
						var t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: h().List();
						return e.size
							? (e.forEach(function (e) {
									t.includes(e.get(0)) || (t = t.push(e.get(0)));
							  }),
							  t)
							: t;
					},
				};
			const ri = ni;
			var oi = n(68652);
			function si(e) {
				return (
					(si =
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
					si(e)
				);
			}
			function ii(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ai(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ci(e, t) {
				return (
					(ci =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ci(e, t)
				);
			}
			function li(e, t) {
				if (t && ('object' === si(t) || 'function' == typeof t)) return t;
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
			function ui(e) {
				return (
					(ui = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ui(e)
				);
			}
			var pi = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && ci(e, t);
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
									t = ui(r);
								if (o) {
									var n = ui(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return li(this, e);
							});
					function i() {
						return ii(this, i), s.apply(this, arguments);
					}
					return (
						(t = i),
						(n = [
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.className,
										n = e.children,
										r = e.dataTip,
										o = e.content;
									return (0, E.jsx)(at.Z, {
										title: (r && r.trim()) || Z().translate(o),
										children: (0, E.jsx)('span', {
											className: 'tooltip ' + t,
											children: n,
										}),
									});
								},
							},
						]) && ai(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						i
					);
				})(r.Component),
				di = function () {
					return (0, E.jsx)(pi, {
						className: 'error appended',
						content: 'explorer.proposals.authority_depth_warning',
						children: '/!\\',
					});
				},
				hi = function () {
					return (0, E.jsx)(pi, {
						className: 'error appended',
						content: 'explorer.proposals.children_authority_depth_warning',
						children: '/!\\',
					});
				},
				fi = function () {
					return (0, E.jsx)(pi, {
						className: 'warning',
						content: 'explorer.proposals.pending_approval',
						children: (0, E.jsx)(x(), {content: 'explorer.proposals.pending'}),
					});
				},
				yi = function () {
					return (0, E.jsx)(pi, {
						className: 'warning',
						content: 'explorer.proposals.pending_review',
						children: (0, E.jsx)(x(), {content: 'explorer.proposals.review'}),
					});
				},
				bi = function (e) {
					var t = e.reason;
					return (0, E.jsx)(pi, {
						className: 'error',
						dataTip: t,
						content: 'explorer.proposals.no_reason_available_switch_node',
						children: (0, E.jsx)(x(), {content: 'explorer.proposals.failed'}),
					});
				},
				mi = function (e) {
					var t = e.onToggle,
						n = e.expanded;
					return (0, E.jsxs)('a', {
						className: 'expand-button',
						onClick: t,
						children: ['[', n ? '-' : '+', ']'],
					});
				},
				gi = function (e) {
					return e.approved
						? (0, E.jsx)($.Z, {
								name: 'checkmark-circle',
								size: '1x',
								className: 'success',
								title: 'icons.checkmark_circle.operation_succeed',
						  })
						: (0, E.jsx)($.Z, {
								name: 'cross-circle',
								size: '1x',
								className: 'error',
								title: 'icons.cross_circle.operation_failed',
						  });
				},
				vi = function (e) {
					var t = e.available,
						n = e.permission,
						r = e.weight,
						o = e.level;
					return (0, E.jsx)('tbody', {
						children: (0, E.jsxs)('tr', {
							children: [
								(0, E.jsxs)('td', {
									colSpan: '2',
									children: [
										(0, E.jsx)(gi, {approved: n.isAvailable(t)}),
										n.id.substr(0, 20 - 4 * o),
										'...',
									],
								}),
								(0, E.jsx)('td', {children: r}),
							],
						}),
					});
				},
				_i = function e(t, n) {
					var r =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
					return (
						r > t ||
						(!(!n.isNested() && !n.isMultiSig()) &&
							n.accounts.some(function (n) {
								return e(t, n, r + 1);
							}))
					);
				},
				ji = function (e, t, n) {
					return e.isNested() || e.isMultiSig()
						? (function (e, t, n) {
								return (
									e.accounts.reduce(function (e, r) {
										return e + (ji(r, t, n) ? r.weight : 0);
									}, 0) +
									e.keys.reduce(function (e, t) {
										return e + (t.isAvailable(n) ? t.weight : 0);
									}, 0)
								);
						  })(e, t, n) >= e.threshold
						: e.isAvailable(t);
				},
				xi = function (e, t, n) {
					return e && e.threshold > 10
						? ''.concat(
								P.Z.get_percentage(e.getStatus(t, n), e.threshold),
								' / 100%'
						  )
						: ''.concat(e.getStatus(t, n), ' / ').concat(e.threshold);
				},
				wi = function (e, t) {
					return t && t > 10 ? P.Z.get_percentage(e, t) : e;
				};
			function ki(e) {
				return (
					(ki =
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
					ki(e)
				);
			}
			function Oi(e, t) {
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
			function Si(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Oi(Object(n), !0).forEach(function (t) {
								Bi(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Oi(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Ci(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Pi(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ai(e, t, n) {
				return (
					t && Pi(e.prototype, t),
					n && Pi(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Zi(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Mi(e, t);
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
			function Ri(e) {
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
						r = Ti(e);
					if (t) {
						var o = Ti(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return Ni(this, n);
				};
			}
			function Ni(e, t) {
				if (t && ('object' === ki(t) || 'function' == typeof t)) return t;
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
			function Ti(e) {
				return (
					(Ti = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ti(e)
				);
			}
			function Bi(e, t, n) {
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
			var Ei = (function (e) {
				Zi(n, e);
				var t = Ri(n);
				function n(e) {
					var r;
					return (
						Ci(this, n),
						Bi(Ii((r = t.call(this, e))), 'handleExpandToggle', function () {
							r.setState({expanded: !r.state.expanded});
						}),
						(r.state = {expanded: !!e.expanded}),
						r
					);
				}
				return (
					Ai(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.account,
									n = e.available,
									r = e.availableKeys,
									o = e.permission,
									s = e.threshold,
									i = e.level,
									a = e.maxAuthorityDepth,
									c = e.hideRoot,
									l = this.state.expanded,
									u = ji(o, n, r),
									p = o.isNested(),
									d = o.isMultiSig(),
									h = wi(o.weight, s) || 1,
									f = xi(o, n, r),
									y = i >= a,
									b =
										p || d
											? (0, E.jsxs)('tr', {
													children: [
														(0, E.jsxs)('td', {
															colSpan: '2',
															children: [
																(0, E.jsx)(gi, {approved: u}),
																(0, E.jsx)(ze.Z, {
																	subpage: 'permissions',
																	account: t.get('id'),
																}),
															],
														}),
														(0, E.jsxs)('td', {
															children: [
																l
																	? (0, E.jsx)('span', {
																			className: u ? 'success-text' : '',
																			children: h,
																	  })
																	: h &&
																	  ''
																			.concat(h && 2 === h.length ? '  ' : '')
																			.concat(h, ' '),
																(0, E.jsx)(mi, {
																	onToggle: this.handleExpandToggle,
																	expanded: l,
																}),
																l &&
																	(0, E.jsxs)('span', {
																		className: 'appended',
																		children: ['(', f, ')'],
																	}),
																y
																	? (0, E.jsx)(di, {})
																	: _i(a, o, i) && !l && (0, E.jsx)(hi, {}),
															],
														}),
													],
											  })
											: (0, E.jsxs)('tr', {
													children: [
														(0, E.jsxs)('td', {
															colSpan: '2',
															children: [
																(0, E.jsx)(gi, {approved: u}),
																(0, E.jsx)(ze.Z, {
																	subpage: 'permissions',
																	account: t.get('id'),
																}),
															],
														}),
														(0, E.jsx)('td', {
															children:
																!p && h
																	? ''
																			.concat(h && 2 === h.length ? '  ' : '')
																			.concat(h, ' ')
																	: null,
														}),
													],
											  }),
									m = [];
								return (
									(p || d) &&
										l &&
										(o.accounts.forEach(function (e) {
											m.push(
												(0, E.jsx)(
													Di,
													{
														account: e.id,
														accounts: e.accounts,
														permission: e,
														available: n,
														availableKeys: r,
														threshold: o.threshold,
														level: i + 1,
														maxAuthorityDepth: a,
													},
													e.id
												)
											);
										}),
										o.keys.length &&
											o.keys.forEach(function (e) {
												return m.push(
													(0, E.jsx)(
														vi,
														{
															permission: e,
															available: r,
															level: i + (c ? 0 : 1),
															weight: wi(e.weight, s),
														},
														e.id
													)
												);
											})),
									m.length > 0
										? (0, E.jsxs)('tbody', {
												children: [
													c || b,
													(0, E.jsx)('tr', {
														children: (0, E.jsxs)('td', {
															colSpan: '3',
															className: 'heading-perm',
															children: [
																(0, E.jsx)('div', {
																	className: c ? '' : 'table-container',
																	children: (0, E.jsx)('table', {children: m}),
																}),
																l &&
																	0 === i &&
																	(0, E.jsx)('div', {className: 'spacer'}),
															],
														}),
													}),
												],
										  })
										: (0, E.jsx)('tbody', {children: b})
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			Bi(Ei, 'propTypes', {
				account: c.Z.ChainAccount.isRequired,
				accounts: c.Z.ChainAccountsList,
				level: v().number.isRequired,
			}),
				Bi(Ei, 'defaultProps', {level: 0});
			var Di = (0, l.Z)(Ei),
				Vi = (function (e) {
					Zi(n, e);
					var t = Ri(n);
					function n(e) {
						var r;
						return (
							Ci(this, n),
							Bi(Ii((r = t.call(this, e))), 'handleExpandToggle', function () {
								return r.setState({expanded: !r.state.expanded});
							}),
							(r.state = {requiredPermissions: [], expanded: e.expanded}),
							(r._updateState = r._updateState.bind(Ii(r))),
							r
						);
					}
					return (
						Ai(n, [
							{
								key: 'componentWillMount',
								value: function () {
									this._updateState(), de.BQ.subscribe(this._updateState);
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									de.BQ.unsubscribe(this._updateState);
								},
							},
							{
								key: '_updateState',
								value: function () {
									var e = ri.listToIDs(this.props.required),
										t = ri.listToIDs(this.props.available);
									this.setState({
										requiredPermissions: ri.unnest(e, this.props.type),
										required: e,
										available: t,
									});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props,
										n = (t.type, t.added),
										r = t.removed,
										o = t.availableKeys,
										s = t.globalObject,
										i = t.reviewPeriodTime,
										a = t.noFail,
										c = t.failReason,
										l = this.state,
										u = l.requiredPermissions,
										p = (l.required, l.available),
										d = l.expanded;
									(p = (0, oi.Z)(p)),
										(o = o.toJS()),
										n && (p.push(n), o.push(n)),
										r &&
											(-1 !== p.indexOf(r) && p.splice(p.indexOf(r), 1),
											-1 !== o.indexOf(r) && o.splice(o.indexOf(r), 1));
									var h = u.reduce(function (e, t) {
											return e + (ji(t, p, o) ? 1 : 0);
										}, 0),
										f = u.length,
										y = h === f,
										b = y && !i && !a,
										m = y && i,
										g = s.get('parameters').get('max_authority_depth'),
										v = 1 === u.length,
										_ = v ? u[0] : null,
										j = !v && ''.concat(h, ' / ').concat(f),
										x = u.map(function (t) {
											return (0,
											E.jsx)(Di, {account: t.id, accounts: t.accounts, permission: t, available: p, availableKeys: o, expanded: e.props.expanded || v, level: 0, maxAuthorityDepth: g, hideRoot: v}, t.id);
										});
									return (0, E.jsxs)('div', {
										className: 'nested-approval-state',
										children: [
											(0, E.jsxs)('div', {
												className: 'root-status',
												children: [
													b
														? (0, E.jsx)(bi, {reason: c})
														: m
														? (0, E.jsx)(yi, {})
														: (0, E.jsx)(fi, {}),
													' ',
													_
														? _.threshold > 1 && xi(_, p, o)
														: (0, E.jsxs)('span', {children: ['(', j, ')']}),
													(!_ || _.isMultiSig() || _.isNested()) &&
														(0, E.jsx)(mi, {
															onToggle: this.handleExpandToggle,
															expanded: d,
														}),
													!d &&
														u.some(function (e) {
															return _i(g, e, 0);
														}) &&
														(0, E.jsx)(hi, {}),
												],
											}),
											d && (0, E.jsx)('table', {children: x}),
										],
									});
								},
							},
						]),
						n
					);
				})(r.Component);
			Bi(Vi, 'propTypes', {
				required: c.Z.ChainAccountsList,
				available: c.Z.ChainAccountsList,
			}),
				Bi(Vi, 'defaultProps', {type: 'active', added: null, removed: null}),
				(Vi = (0, l.Z)(Vi));
			var qi = (function (e) {
				Zi(n, e);
				var t = Ri(n);
				function n() {
					return Ci(this, n), t.apply(this, arguments);
				}
				return (
					Ai(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.proposal,
									n = e.type,
									r = t.get('available_'.concat(n, '_approvals')),
									o = t.get('available_key_approvals'),
									s = t.get('required_'.concat(n, '_approvals')),
									i = t.get('fail_reason') || ' ';
								return (0, E.jsx)(
									Vi,
									Si(
										Si({}, this.props),
										{},
										{
											required: s,
											available: r,
											availableKeys: o,
											reviewPeriodTime: t.get('review_period_time'),
											failReason: i,
										}
									)
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			Bi(qi, 'propTypes', {
				proposal: c.Z.ChainObject.isRequired,
				type: v().string.isRequired,
				globalObject: c.Z.ChainObject.isRequired,
			}),
				Bi(qi, 'defaultProps', {
					type: 'active',
					added: null,
					globalObject: '2.0.0',
				});
			const Fi = (0, l.Z)(qi);
			function Ui(e) {
				return (
					(Ui =
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
					Ui(e)
				);
			}
			function Li(e, t) {
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
			function zi(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Li(Object(n), !0).forEach(function (t) {
								ta(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Li(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Wi(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function Ki(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Ji(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Qi(e, t, n) {
				return (
					t && Ji(e.prototype, t),
					n && Ji(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Gi(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Yi(e, t);
			}
			function Yi(e, t) {
				return (
					(Yi =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Yi(e, t)
				);
			}
			function Hi(e) {
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
						r = ea(e);
					if (t) {
						var o = ea(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return Xi(this, n);
				};
			}
			function Xi(e, t) {
				if (t && ('object' === Ui(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return $i(e);
			}
			function $i(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function ea(e) {
				return (
					(ea = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ea(e)
				);
			}
			function ta(e, t, n) {
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
			var na = function (e, t, n) {
					var r = [];
					e.forEach(function (e) {
						r = r.concat(e.getMissingSigs(t));
					});
					var o = [];
					return (
						e.forEach(function (e) {
							o = o.concat(e.getMissingKeys(n));
						}),
						[r, o]
					);
				},
				ra = (function (e) {
					Gi(n, e);
					var t = Hi(n);
					function n(e) {
						var r;
						return (
							Ki(this, n),
							((r = t.call(this)).state = {
								active: null,
								key: null,
								owner: null,
								payee: null,
							}),
							r
						);
					}
					return (
						Qi(n, [
							{
								key: 'onActiveAccount',
								value: function (e, t, n, r) {
									var o = {};
									t[r]
										? ((o.key = r), (o[n] = null))
										: r
										? ((o[n] = e[r]), (o.key = null))
										: ((o[n] = null), (o.key = null)),
										this.setState(o);
								},
							},
							{
								key: '_onProposalAction',
								value: function (e) {
									var t = this,
										n = e.toJS(),
										r = this.state,
										o = r.active,
										s = (r.key, r.owner, r.payee || o);
									if ('delete' === this.props.action) {
										var i = co.Z.new_transaction();
										i.add_type_operation('proposal_delete', {
											fee_paying_account: s || this.props.account.get('id'),
											proposal: n.id,
											using_owner_authority: !1,
										}),
											bn.Z.process_transaction(i, null, !0);
									} else {
										var a = {
												fee_paying_account: s,
												proposal: n.id,
												active_approvals_to_add: [],
												active_approvals_to_remove: [],
												owner_approvals_to_add: [],
												owner_approvals_to_remove: [],
												key_approvals_to_add: [],
												key_approvals_to_remove: [],
											},
											c = 'approve' === this.props.action,
											l = [];
										['active', 'owner', 'key'].forEach(function (e) {
											var r = t.state[e];
											if (r) {
												var o =
													-1 !==
													n['available_'.concat(e, '_approvals')].indexOf(r);
												((c && !o) || (!c && o)) &&
													('approve' === t.props.action
														? ((a[''.concat(e, '_approvals_to_add')] = [r]),
														  'key' === e && l.push(r))
														: 'reject' === t.props.action &&
														  ((a[''.concat(e, '_approvals_to_remove')] = [r]),
														  'key' === e && l.push(r)));
											}
										});
										var u = co.Z.new_transaction();
										u.add_type_operation('proposal_update', a),
											bn.Z.process_transaction(u, null, !0, l);
									}
									this.props.hideModal();
								},
							},
							{
								key: 'onChangePayee',
								value: function (e) {
									var t = de.BQ.getAccount(e);
									t && this.setState({payee: t.get('id')});
								},
							},
							{
								key: 'onCancel',
								value: function () {
									this.props.hideModal();
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.proposal,
										n = e.type,
										r = [],
										o = {},
										i = 'approve' === this.props.action;
									this.props.accounts.length &&
										this.props.accounts.forEach(function (e) {
											(i
												? e &&
												  !t
														.get('available_'.concat(n, '_approvals'))
														.includes(e.get('id'))
												: e &&
												  t
														.get('available_'.concat(n, '_approvals'))
														.includes(e.get('id'))) &&
												((o[e.get('name')] = e.get('id')),
												r.push(e.get('name')));
										});
									var a = [],
										c = {};
									this.props.keys.length &&
										this.props.keys.forEach(function (e) {
											var n = s.Z.isMyKey(e),
												r = t.get('available_key_approvals').includes(e);
											((n && i && !r) || (n && !i && r)) &&
												((c[e] = !0), a.push(e));
										});
									var l = s.Z.getMyAccounts(),
										u = [
											(0, E.jsx)(
												T.Z,
												{
													type: 'primary',
													onClick: this._onProposalAction.bind(this, t),
													children: Z().translate(
														'proposal.'.concat(this.props.action)
													),
												},
												'submit'
											),
											(0, E.jsx)(
												T.Z,
												{
													onClick: this.onCancel.bind(this),
													children: Z().translate('account.perm.cancel'),
												},
												'cancel'
											),
										];
									return (0, E.jsx)(B.Z, {
										visible: this.props.visible,
										title: Z().translate(
											'modal.proposals.actions.'.concat(this.props.action)
										),
										footer: u,
										onCancel: this.props.hideModal,
										children: (0, E.jsx)('div', {
											className: 'grid-block vertical',
											children: (0, E.jsx)('form', {
												className: 'grid-block vertical full-width-content',
												style: {paddingTop: 0},
												children: (0, E.jsxs)('div', {
													className: 'grid-container',
													children: [
														(0, E.jsx)('div', {
															className: 'content-block',
															style: {paddingRight: '20%'},
															children: (0, E.jsx)(Fi, {
																expanded: !0,
																proposal: t.get('id'),
																type: n,
																added: i
																	? this.state.key
																		? this.state.key
																		: this.state[n] || null
																	: null,
																removed: i
																	? null
																	: this.state.key
																	? this.state.key
																	: this.state[n] || null,
																noFail: !0,
															}),
														}),
														(0, E.jsxs)('div', {
															className: 'content-block full-width-content',
															children: [
																(0, E.jsxs)('div', {
																	className: 'full-width-content form-group',
																	children: [
																		(0, E.jsx)(x(), {
																			content: 'modal.proposals.pay_with',
																			component: 'label',
																		}),
																		(0, E.jsx)(ei.Z, {
																			account_names: l,
																			onChange: this.onChangePayee.bind(this),
																			selected: 1 === l.length ? l : null,
																		}),
																	],
																}),
																'delete' !== this.props.action &&
																(r.length || a.length)
																	? (0, E.jsxs)('div', {
																			className:
																				'full-width-content form-group',
																			children: [
																				(0, E.jsx)(x(), {
																					content:
																						'modal.proposals.approval_'.concat(
																							i ? 'add' : 'remove'
																						),
																					component: 'label',
																				}),
																				(0, E.jsx)(ei.Z, {
																					account_names: r.concat(a),
																					onChange: this.onActiveAccount.bind(
																						this,
																						o,
																						c,
																						n
																					),
																				}),
																			],
																	  })
																	: null,
																null,
															],
														}),
													],
												}),
											}),
										}),
									});
								},
							},
						]),
						n
					);
				})(r.Component);
			ta(ra, 'propTypes', {accounts: c.Z.ChainAccountsList}),
				(ra = (0, l.Z)(ra));
			var oa = (function (e) {
				Gi(n, e);
				var t = Hi(n);
				function n() {
					var e;
					return (
						Ki(this, n),
						((e = t.call(this))._updateState = e._updateState.bind($i(e))),
						e
					);
				}
				return (
					Qi(n, [
						{
							key: 'componentWillMount',
							value: function () {
								this._updateState(), de.BQ.subscribe(this._updateState);
							},
						},
						{
							key: 'componentWillUnmount',
							value: function () {
								de.BQ.unsubscribe(this._updateState);
							},
						},
						{
							key: '_updateState',
							value: function () {
								var e = this.props,
									t = e.proposal,
									n =
										(e.account,
										t.get('required_active_approvals').size
											? 'active'
											: 'owner'),
									r = ri.listToIDs(t.get('required_'.concat(n, '_approvals'))),
									o = ri.listToIDs(t.get('available_'.concat(n, '_approvals'))),
									s = ri.listToIDs(t.get('available_key_approvals'));
								this.setState({
									requiredPermissions: ri.unnest(r, n),
									available: o,
									availableKeys: s,
									type: n,
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t,
									n = this.props.action,
									r = this.state,
									o = r.requiredPermissions,
									s = r.available,
									i = r.availableKeys,
									a = r.type,
									c =
										((e = na(o, s, i)),
										(t = 2),
										(function (e) {
											if (Array.isArray(e)) return e;
										})(e) ||
											(function (e, t) {
												var n =
													null == e
														? null
														: ('undefined' != typeof Symbol &&
																e[Symbol.iterator]) ||
														  e['@@iterator'];
												if (null != n) {
													var r,
														o,
														s = [],
														i = !0,
														a = !1;
													try {
														for (
															n = n.call(e);
															!(i = (r = n.next()).done) &&
															(s.push(r.value), !t || s.length !== t);
															i = !0
														);
													} catch (e) {
														(a = !0), (o = e);
													} finally {
														try {
															i || null == n.return || n.return();
														} finally {
															if (a) throw o;
														}
													}
													return s;
												}
											})(e, t) ||
											(function (e, t) {
												if (e) {
													if ('string' == typeof e) return Wi(e, t);
													var n = Object.prototype.toString
														.call(e)
														.slice(8, -1);
													return (
														'Object' === n &&
															e.constructor &&
															(n = e.constructor.name),
														'Map' === n || 'Set' === n
															? Array.from(e)
															: 'Arguments' === n ||
															  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																	n
															  )
															? Wi(e, t)
															: void 0
													);
												}
											})(e, t) ||
											(function () {
												throw new TypeError(
													'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
												);
											})()),
									l = c[0],
									u = c[1];
								return (0, E.jsx)(
									ra,
									zi(
										zi({}, this.props),
										{},
										{
											type: a,
											accounts: 'approve' === n ? l : s,
											keys: 'approve' === n ? u : i,
										}
									)
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			ta(oa, 'propTypes', {
				account: c.Z.ChainAccount.isRequired,
				proposal: c.Z.ChainObject.isRequired,
			}),
				(oa = (0, l.Z)(oa));
			var sa = (function (e) {
					Gi(n, e);
					var t = Hi(n);
					function n() {
						return Ki(this, n), t.apply(this, arguments);
					}
					return (
						Qi(n, [
							{
								key: 'render',
								value: function () {
									return this.props.account &&
										this.props.proposal &&
										this.props.action
										? (0, E.jsx)(oa, zi({}, this.props))
										: null;
								},
							},
						]),
						n
					);
				})(r.Component),
				ia = n(51796);
			function aa(e) {
				return (
					(aa =
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
					aa(e)
				);
			}
			function ca(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function la(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ua(e, t) {
				return (
					(ua =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ua(e, t)
				);
			}
			function pa(e, t) {
				if (t && ('object' === aa(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return da(e);
			}
			function da(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function ha(e) {
				return (
					(ha = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ha(e)
				);
			}
			function fa(e, t, n) {
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
			var ya = de.FR.operations,
				ba = Object.keys(ya);
			ba.push(
				'property_create_operation',
				'property_update_operation',
				'property_approve_operation',
				'property_delete_operation',
				'asset_price_publish_operation'
			);
			var ma = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && ua(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					i =
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
								t = ha(r);
							if (o) {
								var n = ha(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return pa(this, e);
						});
				function a() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						fa(da((e = i.call(this))), 'closeJSONModal', function () {
							e.setState({visibleId: ''});
						}),
						(e.state = {
							isModalVisible: !1,
							modal: {action: null, proposalId: null, accountId: null},
							visibleId: '',
						}),
						(e._proposals = []),
						(e._loading = !1),
						(e.forceUpdate = e.forceUpdate.bind(da(e))),
						(e._isScam = e._isScam.bind(da(e))),
						(e._isUnknown = e._isUnknown.bind(da(e))),
						(e.showModal = e.showModal.bind(da(e))),
						(e.hideModal = e.hideModal.bind(da(e))),
						e
					);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'componentDidMount',
							value: function () {
								de.BQ.subscribe(this.forceUpdate);
							},
						},
						{
							key: '_setProposals',
							value: function () {
								this._loading = !0;
								var e = this.props.account;
								if (e.get('proposals').size) {
									var t = [];
									e.get('proposals').forEach(function (n) {
										var r = de.BQ.getObject(n);
										if (r) {
											var o = r.get('proposed_transaction').get('operations');
											t.push({operations: o, account: e, proposal: r});
										}
									}),
										(t = t.sort(function (e, t) {
											return P.Z.sortID(
												e.proposal.get('id'),
												t.proposal.get('id'),
												!0
											);
										})).forEach(function (e) {
											var t = e.proposal.get('required_active_approvals').size
													? 'active'
													: 'owner',
												n = ri.listToIDs(
													e.proposal.get('required_'.concat(t, '_approvals'))
												);
											e.requiredPermissions = ri.unnest(n, t);
										}),
										(this._proposals = t),
										(this._loading = !1);
								}
							},
						},
						{
							key: 'componentWillUnmount',
							value: function () {
								de.BQ.unsubscribe(this.forceUpdate);
							},
						},
						{
							key: 'showModal',
							value: function (e) {
								var t = e.action,
									n = e.proposalId,
									r = e.accountId;
								this.setState({
									isModalVisible: !0,
									modal: {action: t, proposalId: n, accountId: r},
								});
							},
						},
						{
							key: 'hideModal',
							value: function () {
								this.setState({
									isModalVisible: !1,
									modal: {action: null, proposalId: null, accountId: null},
								});
							},
						},
						{
							key: '_onApproveModal',
							value: function (e, t, n) {
								this.showModal({action: n, proposalId: e, accountId: t});
							},
						},
						{
							key: '_canReject',
							value: function (e) {
								return (
									e.available_active_approvals.length ||
									e.available_owner_approvals.length ||
									e.available_key_approvals.length
								);
							},
						},
						{
							key: '_isScam',
							value: function (e) {
								var t = this,
									n = !1,
									r = [];
								e.operations.forEach(function (e) {
									6 == e.get(0)
										? (r.push(e.getIn([1, 'active', 'account_auths', 0, 0])),
										  r.push(e.getIn([1, 'owner', 'account_auths', 0, 0])))
										: r.push(e.getIn([1, 'to']));
								});
								var o = e.proposal.get('proposer');
								return (
									r.push(o),
									r.forEach(function (e) {
										p.Z.isKnownScammer(e) && (n = !0),
											t.props.account
												.get('blacklisted_accounts')
												.some(function (t) {
													return t === e;
												}) && (n = !0);
									}),
									n
								);
							},
						},
						{
							key: '_isUnknown',
							value: function (e) {
								var t = this,
									n = !0,
									r = [];
								e.operations.forEach(function (e) {
									6 == e.get(0)
										? (r.push(e.getIn([1, 'active', 'account_auths', 0, 0])),
										  r.push(e.getIn([1, 'owner', 'account_auths', 0, 0])))
										: r.push(e.getIn([1, 'to']));
								});
								var o = e.proposal.get('proposer');
								return (
									r.push(o),
									r.forEach(function (e) {
										t.props.account
											.get('whitelisted_accounts')
											.some(function (t) {
												return t === e;
											}) && (n = !1),
											s.Z.getState().starredAccounts.some(function (t) {
												var n = de.BQ.getAccount(t, !1);
												return !!n && n.get('id') == e;
											}) && (n = !1),
											s.Z.getState().accountContacts.some(function (t) {
												var n = de.BQ.getAccount(t, !1);
												return !!n && n.get('id') == e;
											}) && (n = !1);
									}),
									n
								);
							},
						},
						{
							key: 'openJSONModal',
							value: function (e) {
								this.setState({visibleId: e});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props.account;
								if (!t) return null;
								((t.get('proposals').size > 0 && 0 == this._proposals.length) ||
									(this._proposals.length > 0 &&
										t !== this._proposals[0].account &&
										!this._loading)) &&
									this._setProposals();
								var n = this._proposals.reduce(function (t, n, r) {
									var o = n.proposal.get('id'),
										i = n.proposal.get('proposer'),
										a = n.proposal.get('expiration_time'),
										c = Z().translate('transaction.trxTypes'),
										l = n.operations && n.operations.toJS(),
										u =
											l.length > 1
												? Z().translate('transaction.operations')
												: c[ba[l[0] && l[0][0]]],
										p = n.operations
											.map(function (e, t) {
												return (0,
												E.jsx)($s.Z, {expiration: a, index: t, op: e.toJS(), inverted: !1, hideFee: !0, hideOpLabel: !0, hideExpiration: !0, hideDate: !0, proposal: !0, id: o, proposer: i, collapsed: !1}, n.proposal.get('id') + '_operation_' + t);
											})
											.toArray(),
										d = e._canReject(n.proposal.toJS()),
										h = n.proposal.get('id'),
										f = n.proposal.get('required_active_approvals').size
											? 'active'
											: 'owner';
									t.push(
										(0, E.jsx)(
											'tr',
											{
												children: (0, E.jsxs)('td', {
													colSpan: '4',
													className: 'proposal' + (0 === r ? ' first' : ''),
													children: [
														(0, E.jsx)($s.h, {
															id: o,
															expiration: a,
															openJSONModal: function () {
																return e.openJSONModal(o);
															},
														}),
														(0, E.jsx)(ia.Z, {
															visible: e.state.visibleId === o,
															operation: l.length > 1 ? l : l[0] && l[0][1],
															title: u || '',
															hideModal: e.closeJSONModal,
														}),
													],
												}),
											},
											''.concat(h, '_id')
										)
									);
									var y,
										b,
										m = ri.listToIDs(
											n.proposal.get('available_'.concat(f, '_approvals'))
										),
										g = ri.listToIDs(n.proposal.get('available_key_approvals')),
										v = n.requiredPermissions,
										_ =
											((y = na(v, m, g)),
											(b = 2),
											(function (e) {
												if (Array.isArray(e)) return e;
											})(y) ||
												(function (e, t) {
													var n =
														null == e
															? null
															: ('undefined' != typeof Symbol &&
																	e[Symbol.iterator]) ||
															  e['@@iterator'];
													if (null != n) {
														var r,
															o,
															s = [],
															i = !0,
															a = !1;
														try {
															for (
																n = n.call(e);
																!(i = (r = n.next()).done) &&
																(s.push(r.value), !t || s.length !== t);
																i = !0
															);
														} catch (e) {
															(a = !0), (o = e);
														} finally {
															try {
																i || null == n.return || n.return();
															} finally {
																if (a) throw o;
															}
														}
														return s;
													}
												})(y, b) ||
												(function (e, t) {
													if (e) {
														if ('string' == typeof e) return ca(e, t);
														var n = Object.prototype.toString
															.call(e)
															.slice(8, -1);
														return (
															'Object' === n &&
																e.constructor &&
																(n = e.constructor.name),
															'Map' === n || 'Set' === n
																? Array.from(e)
																: 'Arguments' === n ||
																  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																		n
																  )
																? ca(e, t)
																: void 0
														);
													}
												})(y, b) ||
												(function () {
													throw new TypeError(
														'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
													);
												})()),
										j = _[0],
										w = _[1],
										k = [];
									j.length &&
										j.forEach(function (e) {
											e &&
												!n.proposal
													.get('available_'.concat(f, '_approvals'))
													.includes(e) &&
												k.push(e);
										});
									var O = [];
									w.length &&
										w.forEach(function (e) {
											s.Z.isMyKey(e) &&
												!n.proposal
													.get('available_key_approvals')
													.includes(e) &&
												O.push(e);
										});
									var S = k.length + O.length > 0,
										C = e._isScam(n),
										P = e._isUnknown(n);
									return (
										t.push(
											(0, E.jsxs)(
												'tr',
												{
													className: 'top-left-align',
													children: [
														(0, E.jsx)('td', {children: p}),
														(0, E.jsx)('td', {
															children: v.map(function (e, t) {
																return (0,
																E.jsx)('div', {className: 'list-item', children: (0, E.jsx)(ze.Z, {subpage: 'permissions', account: e.id})}, ''.concat(h, '_approver_').concat(t));
															}),
														}),
														(0, E.jsx)('td', {
															children: (0, E.jsx)(Fi, {
																proposal: n.proposal.get('id'),
																type: f,
															}),
														}),
														(0, E.jsxs)('td', {
															className: 'approval-buttons',
															children: [
																C &&
																	(0, E.jsx)(at.Z, {
																		title: Z().translate(
																			'tooltip.propose_scam'
																		),
																		children: (0, E.jsx)('div', {
																			className: 'tooltip has-error scam-error',
																			children: 'SCAM ATTEMPT',
																		}),
																	}),
																e.props.hideFishingProposals &&
																	!C &&
																	P &&
																	(0, E.jsx)(at.Z, {
																		title: Z().translate(
																			'tooltip.propose_unknown'
																		),
																		children: (0, E.jsx)('div', {
																			className: 'tooltip has-error scam-error',
																			children: 'UNKNOWN SOURCE',
																		}),
																	}),
																!C &&
																	(!P || !e.props.hideFishingProposals) &&
																	(0, E.jsx)('button', {
																		onClick: S
																			? e._onApproveModal.bind(
																					e,
																					h,
																					n.account.get('id'),
																					'approve'
																			  )
																			: function () {},
																		className:
																			'button primary' + (S ? '' : ' hidden'),
																		children: (0, E.jsx)('span', {
																			children: (0, E.jsx)(x(), {
																				content: 'proposal.approve',
																			}),
																		}),
																	}),
																d
																	? (0, E.jsx)('button', {
																			onClick: e._onApproveModal.bind(
																				e,
																				h,
																				n.account.get('id'),
																				'reject'
																			),
																			className: 'button primary',
																			children: (0, E.jsx)(x(), {
																				content: 'proposal.reject',
																			}),
																	  })
																	: null,
																(0, E.jsx)('button', {
																	onClick: e._onApproveModal.bind(
																		e,
																		h,
																		n.account.get('id'),
																		'delete'
																	),
																	className: 'button primary',
																	children: (0, E.jsx)(x(), {
																		content: 'proposal.delete',
																	}),
																}),
															],
														}),
													],
												},
												''.concat(h, '_content')
											)
										),
										t.push(
											(0, E.jsx)(
												'tr',
												{
													children: (0, E.jsx)('td', {
														colSpan: '4',
														children: (0, E.jsx)('hr', {}),
													}),
												},
												''.concat(h, '_separator')
											)
										),
										t
									);
								}, []);
								return (0, E.jsxs)('div', {
									children: [
										(0, E.jsxs)('table', {
											className:
												'table proposals compact ' + this.props.className,
											children: [
												(0, E.jsx)('thead', {
													children: (0, E.jsxs)('tr', {
														children: [
															(0, E.jsx)('th', {
																children: (0, E.jsx)(x(), {
																	content: 'proposal.proposals',
																}),
															}),
															(0, E.jsx)('th', {
																children: (0, E.jsx)(x(), {
																	content: 'proposal.approvers',
																}),
															}),
															(0, E.jsx)('th', {
																children: (0, E.jsx)(x(), {
																	content: 'proposal.status',
																}),
															}),
															(0, E.jsx)('th', {
																children: (0, E.jsx)(x(), {
																	content: 'proposal.action',
																}),
															}),
														],
													}),
												}),
												(0, E.jsx)('tbody', {children: n}),
											],
										}),
										(0, E.jsx)(sa, {
											ref: 'modal',
											visible: this.state.isModalVisible,
											hideModal: this.hideModal,
											showModal: this.showModal,
											account: this.state && this.state.modal.accountId,
											proposal: this.state && this.state.modal.proposalId,
											action: this.state && this.state.modal.action,
										}),
									],
								});
							},
						},
					]),
					n && la(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			fa(ma, 'propTypes', {account: c.Z.ChainAccount.isRequired}), (0, l.Z)(ma);
			var ga = n(17772),
				va = n(86035),
				_a = n(91654),
				ja = n(22949);
			function xa(e) {
				return (
					(xa =
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
					xa(e)
				);
			}
			function wa(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ka(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Oa(e, t) {
				return (
					(Oa =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Oa(e, t)
				);
			}
			function Sa(e, t) {
				if (t && ('object' === xa(t) || 'function' == typeof t)) return t;
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
			function Ca(e) {
				return (
					(Ca = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ca(e)
				);
			}
			const Pa = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Oa(e, t);
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
								t = Ca(r);
							if (o) {
								var n = Ca(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Sa(this, e);
						});
				function i() {
					return wa(this, i), s.apply(this, arguments);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.base,
									n = e.quote,
									r = e.order,
									o = r.isBid(),
									s = o ? 'value positive' : 'value negative',
									i = o ? 'value negative' : 'value positive';
								return (0, E.jsx)(x(), {
									content: o
										? 'exchange.buy_description'
										: 'exchange.sell_description',
									baseAsset: P.Z.format_number(
										r[o ? 'amountToReceive' : 'amountForSale']().getAmount({
											real: !0,
										}),
										t.get('precision'),
										!1
									),
									quoteAsset: P.Z.format_number(
										r[o ? 'amountForSale' : 'amountToReceive']().getAmount({
											real: !0,
										}),
										n.get('precision'),
										!1
									),
									baseName: (0, E.jsx)(Po.Z, {
										noTip: !0,
										customClass: s,
										name: n.get('symbol'),
									}),
									quoteName: (0, E.jsx)(Po.Z, {
										noTip: !0,
										customClass: i,
										name: t.get('symbol'),
									}),
								});
							},
						},
					]) && ka(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			var Aa = n(73935);
			function Za(e) {
				return (
					(Za =
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
					Za(e)
				);
			}
			function Ma(e, t) {
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
			function Ra(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Ma(Object(n), !0).forEach(function (t) {
								Na(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Ma(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Na(e, t, n) {
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
			function Ia(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ta(e, t) {
				return (
					(Ta =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ta(e, t)
				);
			}
			function Ba(e, t) {
				if (t && ('object' === Za(t) || 'function' == typeof t)) return t;
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
			function Ea(e) {
				return (
					(Ea = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Ea(e)
				);
			}
			const Da = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Ta(e, t);
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
								t = Ea(r);
							if (o) {
								var n = Ea(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Ba(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = {
							isCollapsed: e.isCollapsed || !1,
							isCollapseAnimationCompleted: e.isCollapsed || !1,
						}),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'componentDidMount',
							value: function () {
								var e = this,
									t = Aa.findDOMNode(this).querySelector('.ant-table-tbody'),
									n = function () {
										e.setState({
											isCollapseAnimationCompleted: e.state.isCollapsed,
										});
									};
								t.addEventListener('animationend', n),
									t.addEventListener('webkitAnimationEnd', n),
									t.addEventListener('oAnimationEnd', n),
									t.addEventListener('MSAnimationEnd', n);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this;
								return (0, E.jsx)(
									ja.Z,
									Ra(
										Ra({}, this.props),
										{},
										{
											onHeaderRow: function (t, n) {
												var r = {},
													o = e.props.onHeaderRow;
												return (
													o && (r = o(t, n)),
													(r.onClick = function (r) {
														var s = r.target.getAttribute('class');
														if (
															(!s || !s.includes('ant-checkbox-input')) &&
															(e.setState({isCollapsed: !e.state.isCollapsed}),
															e.setState({isCollapseAnimationCompleted: !1}),
															o)
														) {
															var i = o(t, n);
															i.onClick && i.onClick(r);
														}
													}),
													r
												);
											},
											className: 'collapsible-table '
												.concat(
													this.state.isCollapsed
														? 'collapsible-table-collapsed'
														: 'collapsible-table-uncollapsed',
													'\n                '
												)
												.concat(
													this.state.isCollapseAnimationCompleted
														? 'collapsible-table-collapsed-animation-completed'
														: null
												),
										}
									)
								);
							},
						},
					]) && Ia(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			var Va = n(66090),
				qa = n(54783),
				Fa = n(9959),
				Ua = n(62254),
				La = n(15644);
			function za(e) {
				return (
					(za =
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
					za(e)
				);
			}
			function Wa(e, t) {
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
			function Ka(e, t, n) {
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
			function Ja() {
				return (
					(Ja =
						'undefined' != typeof Reflect && Reflect.get
							? Reflect.get
							: function (e, t, n) {
									var r = Qa(e, t);
									if (r) {
										var o = Object.getOwnPropertyDescriptor(r, t);
										return o.get
											? o.get.call(arguments.length < 3 ? e : n)
											: o.value;
									}
							  }),
					Ja.apply(this, arguments)
				);
			}
			function Qa(e, t) {
				for (
					;
					!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = nc(e));

				);
				return e;
			}
			function Ga(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Ya(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ha(e, t, n) {
				return (
					t && Ya(e.prototype, t),
					n && Ya(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Xa(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && $a(e, t);
			}
			function $a(e, t) {
				return (
					($a =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					$a(e, t)
				);
			}
			function ec(e) {
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
						r = nc(e);
					if (t) {
						var o = nc(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return tc(this, n);
				};
			}
			function tc(e, t) {
				if (t && ('object' === za(t) || 'function' == typeof t)) return t;
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
			function nc(e) {
				return (
					(nc = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					nc(e)
				);
			}
			var rc = (function (e) {
					Xa(n, e);
					var t = ec(n);
					function n(e) {
						var r;
						Ga(this, n), ((r = t.call(this)).statsInterval = null);
						var o = _a.Z.getMarketName(e.base, e.quote).marketName;
						return (r.state = {marketName: o}), r;
					}
					return (
						Ha(n, [
							{
								key: '_checkStats',
								value: function () {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: {close: {}},
										t =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: {close: {}};
									return (
										e.volumeBase !== t.volumeBase ||
										!P.Z.are_equal_shallow(
											e.close && e.close.base,
											t.close && t.close.base
										) ||
										!P.Z.are_equal_shallow(
											e.close && e.close.quote,
											t.close && t.close.quote
										)
									);
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return (
										this._checkStats(
											e.allMarketStats.get(this.state.marketName),
											this.props.allMarketStats.get(this.state.marketName)
										) ||
										e.base.get('id') !== this.props.base.get('id') ||
										e.quote.get('id') !== this.props.quote.get('id')
									);
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this.statsInterval && this.statsInterval();
								},
							},
						]),
						n
					);
				})(r.Component),
				oc = (function (e) {
					Xa(n, e);
					var t = ec(n);
					function n(e) {
						return Ga(this, n), t.call(this, e);
					}
					return (
						Ha(n, [
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return Ja(
										nc(n.prototype),
										'shouldComponentUpdate',
										this
									).call(this, e);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props.allMarketStats,
										t = this.state.marketName,
										n = e.get(t),
										r = n && n.price ? n.price : null;
									return (0, E.jsx)('span', {
										className: ue()('', this.props.className),
										children: r
											? (0, E.jsx)(Le.Z, {
													base_amount: r.base.amount,
													base_asset: r.base.asset_id,
													quote_amount: r.quote.amount,
													quote_asset: r.quote.asset_id,
													force_direction: this.props.force_direction,
													hide_symbols: this.props.hide_symbols,
											  })
											: 'n/a',
									});
								},
							},
						]),
						n
					);
				})(rc);
			oc = (0, H.Z)(oc, {propNames: ['quote', 'base']});
			var sc = (function (e) {
				Xa(n, e);
				var t = ec(n);
				function n() {
					return Ga(this, n), t.apply(this, arguments);
				}
				return (
					Ha(n, [
						{
							key: 'render',
							value: function () {
								return (0, E.jsx)(
									oc,
									(function (e) {
										for (var t = 1; t < arguments.length; t++) {
											var n = null != arguments[t] ? arguments[t] : {};
											t % 2
												? Wa(Object(n), !0).forEach(function (t) {
														Ka(e, t, n[t]);
												  })
												: Object.getOwnPropertyDescriptors
												? Object.defineProperties(
														e,
														Object.getOwnPropertyDescriptors(n)
												  )
												: Wa(Object(n)).forEach(function (t) {
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
			sc = (0, u.$)(sc, {
				listenTo: function () {
					return [La.Z];
				},
				getProps: function () {
					return {allMarketStats: La.Z.getState().allMarketStats};
				},
			});
			var ic = n(89583),
				ac = n(25108);
			function cc(e) {
				return (
					(cc =
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
					cc(e)
				);
			}
			function lc(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return pc(e);
					})(e) ||
					(function (e) {
						if (
							('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
							null != e['@@iterator']
						)
							return Array.from(e);
					})(e) ||
					uc(e) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function uc(e, t) {
				if (e) {
					if ('string' == typeof e) return pc(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return (
						'Object' === n && e.constructor && (n = e.constructor.name),
						'Map' === n || 'Set' === n
							? Array.from(e)
							: 'Arguments' === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? pc(e, t)
							: void 0
					);
				}
			}
			function pc(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function dc(e, t) {
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
			function hc(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? dc(Object(n), !0).forEach(function (t) {
								fc(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: dc(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function fc(e, t, n) {
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
			function yc(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function bc(e, t) {
				return (
					(bc =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					bc(e, t)
				);
			}
			function mc(e, t) {
				if (t && ('object' === cc(t) || 'function' == typeof t)) return t;
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
			function gc(e) {
				return (
					(gc = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					gc(e)
				);
			}
			var vc = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && bc(e, t);
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
								t = gc(r);
							if (o) {
								var n = gc(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return mc(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = {
							selectedOrders: [],
							filterValue: '',
							areAssetsGrouped: e.viewSettings.get(
								'accountOrdersGrouppedByAsset'
							),
						}),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: '_getFilteredOrders',
							value: function (e) {
								var t = this.state.filterValue;
								return (
									('settle' !== e
										? this.props.account.get('orders')
										: this.props.settleOrders) || []
								).filter(function (e) {
									var n = de.BQ.getObject(e).toJS(),
										r = de.BQ.getAsset(n.sell_price.base.asset_id),
										o = de.BQ.getAsset(n.sell_price.quote.asset_id),
										s = r.get('symbol').toLowerCase(),
										i = o.get('symbol').toLowerCase();
									return s.indexOf(t) > -1 || i.indexOf(t) > -1;
								});
							},
						},
						{
							key: '_getDataSource',
							value: function (e, t) {
								var n = this,
									r = [],
									o = 'settle' === t;
								return (
									e.forEach(function (e) {
										var t = null,
											s = null,
											i = null,
											a = null,
											c = null,
											l = null;
										if (
											(o
												? ((t = de.BQ.getObject(e).toJS()),
												  (s = de.BQ.getAsset(t.balance.asset_id)),
												  (i = de.BQ.getAsset(
														s.getIn([
															'bitasset',
															'options',
															'short_backing_asset',
														])
												  )))
												: ((t = de.BQ.getObject(e).toJS()),
												  (s = de.BQ.getAsset(t.sell_price.base.asset_id)),
												  (i = de.BQ.getAsset(t.sell_price.quote.asset_id))),
											s && i)
										) {
											var u,
												p =
													(fc((u = {}), s.get('id'), {
														precision: s.get('precision'),
													}),
													fc(u, i.get('id'), {precision: i.get('precision')}),
													u),
												d = _a.Z.getMarketName(s, i).marketName,
												h = n.props.marketDirections.get(d),
												f = h ? i.get('id') : s.get('id'),
												y = h ? s.get('id') : i.get('id');
											if (o) {
												var b = Y.Z.extractRawFeedPrice(s);
												(a = s.getIn([
													'bitasset',
													'current_feed',
													'maximum_short_squeeze_ratio',
												])),
													(c = new va.ad({
														priceObject: b,
														market_base: y,
														sqr: a,
														assets: p,
													})),
													(l = s.getIn(['bitasset', 'options']));
											}
											var m = o ? new va.l4(t, p, y, c, l) : new va.eN(t, p, f),
												g = de.BQ.getAsset(y),
												v = de.BQ.getAsset(f),
												_ = m.isBid(),
												j = {
													key: t.id,
													order: m,
													isBid: _,
													quote: v,
													base: g,
													marketName: d,
													marketDirection: h,
													preferredUnit: n.props.settings
														? n.props.settings.get('unit')
														: '1.3.0',
													quoteColor: _ ? 'value positive' : 'value negative',
													baseColor: _ ? 'value negative' : 'value positive',
												};
											o &&
												(j = hc(
													hc({}, j),
													{},
													{settlement_date: t.settlement_date, feed_price: c}
												)),
												r.push(j);
										}
									}),
									r.sort(function (e, t) {
										return e.order.getPrice() - t.order.getPrice();
									}),
									r.sort(function (e, t) {
										return e.marketName > t.marketName
											? 1
											: e.marketName < t.marketName
											? -1
											: e.marketDirection
											? 1
											: -1;
									}),
									r
								);
							},
						},
						{
							key: '_getColumns',
							value: function (e, t, n) {
								var r,
									o,
									s,
									i,
									a,
									c,
									l,
									u,
									p,
									d,
									h = this,
									f = function (e, t) {
										return {onClick: h.onFlip.bind(h, e.marketName)};
									},
									y = 'settle' === n,
									b = function (e) {
										return e.order[
											e.isBid ? 'amountToReceive' : 'amountForSale'
										]().getAmount({real: !0});
									},
									m = function (e) {
										return P.Z.format_number(e, r.base.get('precision'), !1);
									},
									g = function (e) {
										return e.order[
											e.isBid ? 'amountForSale' : 'amountToReceive'
										]().getAmount({real: !0});
									},
									v = function (e) {
										return P.Z.format_number(e, r.quote.get('precision'), !1);
									},
									j = function (e) {
										return (0, E.jsx)(sc, {
											base: e.base.get('id'),
											quote: e.quote.get('id'),
											force_direction: e.base.get('symbol'),
											hide_symbols: !0,
											hide_asset: !0,
										});
									};
								if (e) {
									(r = t[0]),
										(o = Z().translate(
											'exchange.' +
												(y ? 'settlement_of' : r.isBid ? 'buy' : 'sell')
										)),
										(s = Z().translate('transaction.for')),
										(i = m((0, Va.Z)(t, b))),
										(a = v((0, Va.Z)(t, g)));
									var w = r.isBid ? 'value positive' : 'value negative',
										k = r.isBid ? 'value negative' : 'value positive';
									(c = (0, E.jsx)(Po.Z, {
										noTip: !0,
										customClass: w,
										name: r.quote.get('symbol'),
									})),
										(l = (0, E.jsx)(Po.Z, {
											noTip: !0,
											customClass: k,
											name: r.base.get('symbol'),
										})),
										(u = (0, qa.Z)(t, function (e) {
											var t = e.order.sellPrice().toReal(!0);
											return e.marketDirection ? 1 / t : t;
										}));
									var O = Math.min(
										8,
										r.order.sellPrice()[r.isBid ? 'base' : 'quote'].precision
									);
									(u = (0, E.jsx)(Ua.BK, {
										value: u,
										minimumFractionDigits: Math.max(2, O),
										maximumFractionDigits: Math.max(2, O),
									})),
										(p = j(r));
									var S = (0, Va.Z)(t, function (e) {
										return e.order.amountForSale().getAmount();
									});
									d = (0, E.jsxs)('div', {
										children: [
											(0, E.jsx)(Co.i, {
												hide_asset: !0,
												amount: S,
												fromAsset: r.order.amountForSale().asset_id,
												noDecimals: !0,
												toAsset: r.preferredUnit,
											}),
											' ',
											(0, E.jsx)(Po.Z, {name: r.preferredUnit}),
										],
									});
								}
								return [
									{
										key: 'trade',
										title: Z().translate('account.trade'),
										align: 'center',
										render: function (e) {
											return (0, E.jsx)(_.Z, {
												to: '/market/'
													.concat(e.quote.get('symbol'), '_')
													.concat(e.base.get('symbol')),
												children: (0, E.jsx)(ic.NMh, {}),
											});
										},
									},
									{
										key: 'orderID',
										title: Z().translate('transaction.order_id'),
										render: function (e) {
											return '#' + e.order.id.substring(4);
										},
									},
								].concat(
									lc(
										e
											? [
													{
														key: 'operation',
														title: o,
														render: function (e) {
															return o;
														},
														onCell: f,
														className: 'clickable groupColumn',
													},
											  ].concat(
													lc(
														y
															? [
																	{
																		key: 'quoteAsset',
																		title: a,
																		render: function (e) {
																			return v(g(e));
																		},
																		className: 'clickable groupColumn',
																	},
																	{
																		key: 'baseName',
																		title: c,
																		render: function (e) {
																			return c;
																		},
																		className: 'clickable groupColumn',
																	},
															  ]
															: [
																	{
																		key: 'baseAsset',
																		title: i,
																		render: function (e) {
																			return m(b(e));
																		},
																		onCell: f,
																		className: 'clickable groupColumn',
																	},
																	{
																		key: 'baseName',
																		title: c,
																		render: function (e) {
																			return c;
																		},
																		onCell: f,
																		className: 'clickable groupColumn',
																	},
																	{
																		key: 'for',
																		title: s,
																		render: function (e) {
																			return s;
																		},
																		onCell: f,
																		className: 'clickable groupColumn',
																	},
																	{
																		key: 'quoteAsset',
																		title: a,
																		render: function (e) {
																			return v(g(e));
																		},
																		onCell: f,
																		className: 'clickable groupColumn',
																	},
																	{
																		key: 'quoteName',
																		title: l,
																		render: function (e) {
																			return l;
																		},
																		onCell: f,
																		className: 'clickable groupColumn',
																	},
															  ]
													)
											  )
											: [
													{
														key: 'description',
														title: Z().translate('exchange.description'),
														render: function (e) {
															return y
																? (0, E.jsx)(x(), {
																		content: 'exchange.settlement_description',
																		quoteAsset: P.Z.format_number(
																			e.order.for_sale.getAmount({real: !0}),
																			e.quote.get('precision'),
																			!1
																		),
																		quoteName: (0, E.jsx)(Po.Z, {
																			noTip: !0,
																			customClass: e.quoteColor,
																			name: e.quote.get('symbol'),
																		}),
																  })
																: (0, E.jsx)(Pa, hc({}, e));
														},
														onCell: f,
														className: 'clickable',
													},
											  ]
									),
									[
										{
											key: 'price',
											title: e
												? (0, E.jsxs)('div', {
														children: [
															(0, E.jsx)(x(), {
																content: 'account.average_price',
															}),
															(0, E.jsx)('br', {}),
															u,
														],
												  })
												: Z().translate('exchange.price'),
											align: e ? 'right' : 'left',
											render: function (e) {
												return (0, E.jsx)(Le.Z, {
													base_amount: e.order.sellPrice().base.amount,
													base_asset: e.order.sellPrice().base.asset_id,
													quote_amount: e.order.sellPrice().quote.amount,
													quote_asset: e.order.sellPrice().quote.asset_id,
													force_direction: e.base.get('symbol'),
													hide_symbols: !0,
												});
											},
											onCell: f,
											className: 'clickable',
										},
										{
											key: 'marketPrice',
											title: e
												? (0, E.jsxs)('div', {
														children: [
															(0, E.jsx)(x(), {
																content: 'exchange.price_market',
															}),
															(0, E.jsx)('br', {}),
															p,
														],
												  })
												: Z().translate('exchange.price_market'),
											align: e ? 'right' : 'left',
											render: j,
											onCell: f,
											className: 'clickable',
										},
										y && !e
											? {
													key: 'settlement_date',
													title: e
														? (0, E.jsxs)('div', {
																children: [
																	(0, E.jsx)(x(), {
																		content: 'exchange.settlement_date',
																	}),
																	(0, E.jsx)('br', {}),
																	p,
																],
														  })
														: Z().translate('exchange.settlement_date'),
													align: e ? 'right' : 'left',
													render: function (e) {
														return (0, E.jsx)('span', {
															children: e.settlement_date,
														});
													},
													onCell: f,
													className: 'clickable',
											  }
											: {},
										{
											key: 'value',
											title: e
												? (0, E.jsxs)('div', {
														children: [
															(0, E.jsx)(x(), {content: 'exchange.value'}),
															(0, E.jsx)('br', {}),
															d,
														],
												  })
												: Z().translate('exchange.value'),
											align: 'right',
											render: function (e) {
												return (0, E.jsxs)('div', {
													children: [
														(0, E.jsx)(Co.i, {
															hide_asset: !0,
															amount: e.order.amountForSale().getAmount(),
															fromAsset: e.order.amountForSale().asset_id,
															noDecimals: !0,
															toAsset: e.preferredUnit,
														}),
														' ',
														(0, E.jsx)(Po.Z, {name: e.preferredUnit}),
													],
												});
											},
											onCell: f,
											className: 'clickable',
										},
									]
								);
							},
						},
						{
							key: '_renderSettleOrdersTable',
							value: function () {
								var e = this.props.account,
									t = this.state.filterValue,
									n = e.get('settle_orders');
								t && (n = this._getFilteredOrders.call(this, 'settle'));
								var r = this._getDataSource(n, 'settle'),
									o = {
										hideOnSinglePage: !0,
										pageSize: 20,
										showTotal: function (e, t) {
											return Z().translate('utility.total_x_items', {count: e});
										},
									},
									s = this._getColumns(!1, r, 'settle');
								return (0, E.jsx)(ja.Z, {
									columns: s,
									dataSource: r,
									pagination: o,
									footer: function () {
										return (0, E.jsx)('span', {children: ' '});
									},
								});
							},
						},
						{
							key: '_renderOrdersTable',
							value: function () {
								var e = this,
									t = this.props.account,
									n = this.state,
									r = n.filterValue,
									o = n.areAssetsGrouped,
									s = t.get('orders');
								r && (s = this._getFilteredOrders.call(this));
								var i,
									a,
									c = this._getDataSource(s),
									l = {
										hideOnSinglePage: !0,
										pageSize: 20,
										showTotal: function (e, t) {
											return Z().translate('utility.total_x_items', {count: e});
										},
									},
									u = this.props.isMyAccount
										? {
												onChange: function (t, n) {
													e.setState({selectedOrders: t});
												},
												selectedRowKeys: this.state.selectedOrders,
										  }
										: null,
									p = [];
								if (o)
									for (
										var d = (0, Fa.Z)(c, function (e) {
												return (
													e.marketName +
													'_' +
													(e.marketDirection
														? e.base.get('id')
														: e.quote.get('id'))
												);
											}),
											h = 0,
											f = Object.entries(d);
										h < f.length;
										h++
									) {
										var y =
												((i = f[h]),
												(a = 2),
												(function (e) {
													if (Array.isArray(e)) return e;
												})(i) ||
													(function (e, t) {
														var n =
															null == e
																? null
																: ('undefined' != typeof Symbol &&
																		e[Symbol.iterator]) ||
																  e['@@iterator'];
														if (null != n) {
															var r,
																o,
																s = [],
																i = !0,
																a = !1;
															try {
																for (
																	n = n.call(e);
																	!(i = (r = n.next()).done) &&
																	(s.push(r.value), !t || s.length !== t);
																	i = !0
																);
															} catch (e) {
																(a = !0), (o = e);
															} finally {
																try {
																	i || null == n.return || n.return();
																} finally {
																	if (a) throw o;
																}
															}
															return s;
														}
													})(i, a) ||
													uc(i, a) ||
													(function () {
														throw new TypeError(
															'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
														);
													})()),
											b = y[0],
											m = y[1],
											g = void 0;
										m[0].settlement_date && (g = 'settle');
										var v = this._getColumns(o, m, g);
										p.push(
											(0, E.jsx)(
												'div',
												{
													className: 'grid-wrapper',
													children: (0, E.jsx)(Da, {
														columns: v,
														dataSource: m,
														rowSelection: u,
														pagination: l,
														isCollapsed: !0,
													}),
												},
												b
											)
										);
									}
								else {
									var _ = this._getColumns(o, c);
									p.push(
										(0, E.jsx)(
											'div',
											{
												className: 'grid-wrapper',
												children: (0, E.jsx)(ja.Z, {
													columns: _,
													dataSource: c,
													rowSelection: u,
													pagination: l,
													footer: function () {
														return e.props.children;
													},
												}),
											},
											'ungroupedTable'
										)
									);
								}
								return p;
							},
						},
						{
							key: '_cancelLimitOrders',
							value: function (e) {
								var t = this;
								ga.Z.cancelLimitOrders(
									this.props.account.get('id'),
									this.state.selectedOrders
								)
									.then(function () {
										t.resetSelected();
									})
									.catch(function (e) {
										ac.log('cancel orders error:', e);
									});
							},
						},
						{
							key: 'onFlip',
							value: function (e) {
								var t = {};
								(t[e] = !this.props.marketDirections.get(e)),
									Ke.Z.changeMarketDirection(t);
							},
						},
						{
							key: 'setFilterValue',
							value: function (e) {
								this.setState({filterValue: e.target.value.toLowerCase()});
							},
						},
						{
							key: 'resetSelected',
							value: function () {
								this.setState({selectedOrders: []});
							},
						},
						{
							key: 'cancelSelected',
							value: function () {
								this._cancelLimitOrders.call(this);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props.account,
									n = this.state.selectedOrders,
									r = this._renderOrdersTable(),
									o = this._renderSettleOrdersTable(),
									s = [r],
									i = t.get('settle_orders').size;
								return (0, E.jsxs)('div', {
									className: 'grid-content no-overflow no-padding',
									style: {paddingBottom: 15},
									children: [
										(0, E.jsxs)('div', {
											className: 'header-selector',
											style: {display: 'inline-block', width: '100%'},
											children: [
												(0, E.jsxs)('div', {
													className: 'filter-block',
													children: [
														(0, E.jsx)('div', {
															className: 'filter',
															children: (0, E.jsx)(Xo.Z, {
																type: 'text',
																placeholder: Z().translate(
																	'account.filter_orders'
																),
																onChange: this.setFilterValue.bind(this),
															}),
														}),
														(0, E.jsxs)('div', {
															className: 'group-by',
															children: [
																(0, E.jsx)(ve.Z, {
																	onChange: function (t, n) {
																		Ke.Z.changeViewSetting({
																			accountOrdersGrouppedByAsset: t,
																		}),
																			e.setState({areAssetsGrouped: t});
																	},
																	checked: this.state.areAssetsGrouped,
																}),
																'  ',
																(0, E.jsx)(x(), {
																	content: 'account.group_by_asset',
																}),
															],
														}),
													],
												}),
												n.length
													? (0, E.jsxs)('span', {
															className: 'action-buttons',
															children: [
																(0, E.jsx)(
																	T.Z,
																	{
																		type: 'primary',
																		onClick: this.cancelSelected.bind(this),
																		children: (0, E.jsx)(x(), {
																			content: 'account.cancel_orders',
																		}),
																	},
																	'submit'
																),
																' ',
																(0, E.jsx)(
																	T.Z,
																	{
																		type: 'secondary',
																		onClick: this.resetSelected.bind(this),
																		children: (0, E.jsx)(x(), {
																			content: 'account.reset_orders',
																		}),
																	},
																	'cancel'
																),
															],
													  })
													: null,
											],
										}),
										(0, E.jsxs)('div', {
											children: [
												i > 0 &&
													(0, E.jsx)('div', {
														className: 'header-selector',
														children: (0, E.jsx)(x(), {
															content: 'account.market_orders',
														}),
													}),
												s,
											],
										}),
										i > 0 &&
											(0, E.jsxs)(
												'div',
												{
													className: 'grid-wrapper',
													children: [
														(0, E.jsx)('div', {
															className: 'header-selector',
															children: (0, E.jsx)(x(), {
																content: 'account.settle_orders',
															}),
														}),
														o,
													],
												},
												'settleGroupedTable'
											),
									],
								});
							},
						},
					]),
					n && yc(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			const _c = (vc = (0, u.$)(vc, {
				listenTo: function () {
					return [i.Z];
				},
				getProps: function () {
					return {
						marketDirections: i.Z.getState().marketDirections,
						viewSettings: i.Z.getState().viewSettings,
					};
				},
			}));
			var jc = {};
			function xc(e) {
				if (!e || (e && !e.get('call_orders', []).size))
					return Promise.resolve(null);
				var t = e.get('name') + JSON.stringify(e.get('call_orders'));
				return jc[t]
					? jc[t].result
						? Promise.resolve(jc[t].result)
						: new Promise(function (e, n) {
								jc[t].queue.push({res: e, rej: n});
						  })
					: new Promise(function (n, r) {
							(jc[t] = {queue: [{res: n, rej: r}], result: null}),
								(0, de.aN)('getObject', e.get('call_orders').toArray())
									.then(function (e) {
										var n = [];
										e.forEach(function (e) {
											var t = e.getIn(['call_price', 'base', 'asset_id']),
												r = e.getIn(['call_price', 'quote', 'asset_id']);
											-1 === n.indexOf(t) && n.push(t),
												-1 === n.indexOf(r) && n.push(r);
										}),
											(0, de.aN)('getAsset', n, 6e3).then(function (n) {
												var r = {};
												n.forEach(function (e) {
													r[e.get('id')] = e.toJS();
												});
												var o = {};
												e.forEach(function (e) {
													var t =
															r[e.getIn(['call_price', 'quote', 'asset_id'])],
														n = r[e.getIn(['call_price', 'base', 'asset_id'])],
														s = Y.Z.extractRawFeedPrice(t);
													if (s.base.asset_id === s.quote.asset_id)
														o[t.id] = {ratio: null};
													else {
														var i = new va.xR({
																amount: e.get('collateral'),
																asset_id: n.id,
																precision: n.precision,
															}),
															a = new va.xR({
																amount: e.get('debt'),
																asset_id: t.id,
																precision: t.precision,
															}),
															c =
																t.bitasset.current_feed
																	.maintenance_collateral_ratio / 1e3,
															l = new va.ad({
																priceObject: Y.Z.extractRawFeedPrice(t),
																market_base:
																	Y.Z.extractRawFeedPrice(t).quote.asset_id,
																sqr: t.bitasset.current_feed
																	.maximum_short_squeeze_ratio,
																assets: r,
															}),
															u = {
																ratio:
																	i.getAmount({real: !0}) /
																	(a.getAmount({real: !0}) / l.toReal()),
															};
														if (isNaN(u.ratio)) return null;
														u.ratio < c
															? (u.statusClass = 'danger')
															: u.ratio < c + 0.5
															? (u.statusClass = 'warning')
															: (u.statusClass = null),
															(o[t.id] = u);
													}
												}),
													jc[t].queue.forEach(function (e) {
														e.res(o);
													}),
													(jc[t] = {result: o}),
													setTimeout(function () {
														delete jc[t];
													}, 6e4);
											});
									})
									.catch(function () {
										jc[t].queue.forEach(function (e) {
											e.rej();
										});
									});
					  });
			}
			function wc(e) {
				return (
					(wc =
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
					wc(e)
				);
			}
			var kc = ['wrap', 'orders'];
			function Oc(e, t) {
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
			function Sc(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Oc(Object(n), !0).forEach(function (t) {
								Rc(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Oc(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Cc(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Pc(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ac(e, t) {
				return (
					(Ac =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ac(e, t)
				);
			}
			function Zc(e, t) {
				if (t && ('object' === wc(t) || 'function' == typeof t)) return t;
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
			function Mc(e) {
				return (
					(Mc = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Mc(e)
				);
			}
			function Rc(e, t, n) {
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
			var Nc = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Ac(e, t);
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
								t = Mc(r);
							if (o) {
								var n = Mc(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Zc(this, e);
						});
				function i() {
					return Cc(this, i), s.apply(this, arguments);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.wrap,
									n = e.orders,
									r = (function (e, t) {
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
									})(e, kc),
									o = this.props.balances
										.filter(function (e) {
											return !!e && 0 !== e.get('balance');
										})
										.map(function (e) {
											return e.get('asset_type');
										}),
									s = n
										.filter(function (e) {
											return !!e;
										})
										.reduce(function (e, t) {
											var n = t.getIn(['sell_price', 'base', 'asset_id']);
											return (
												e[n] || (e[n] = 0),
												(e[n] += parseInt(t.get('for_sale'), 10)),
												e
											);
										}, {});
								for (var i in s) -1 === o.indexOf(i) && o.push(i);
								var a = t;
								return (0, E.jsx)(
									a,
									Sc(Sc({}, r), {}, {orders: s, balanceAssets: h().List(o)})
								);
							},
						},
					]) && Pc(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			Rc(Nc, 'propTypes', {
				balances: c.Z.ChainObjectsList,
				orders: c.Z.ChainObjectsList,
			}),
				Rc(Nc, 'defaultProps', {balances: h().List(), orders: h().List()});
			const Ic = (0, l.Z)(Nc);
			var Tc = n(10920),
				Bc = n.n(Tc),
				Ec = n(57473),
				Dc = n.n(Ec),
				Vc = n(1033),
				qc = n.n(Vc),
				Fc = n(72277);
			function Uc(e) {
				return (
					(Uc =
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
					Uc(e)
				);
			}
			function Lc(e, t) {
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
			function zc(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Lc(Object(n), !0).forEach(function (t) {
								$c(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Lc(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Wc(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Kc(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Jc(e, t, n) {
				return (
					t && Kc(e.prototype, t),
					n && Kc(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Qc(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Gc(e, t);
			}
			function Gc(e, t) {
				return (
					(Gc =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Gc(e, t)
				);
			}
			function Yc(e) {
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
						r = Xc(e);
					if (t) {
						var o = Xc(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return Hc(this, n);
				};
			}
			function Hc(e, t) {
				if (t && ('object' === Uc(t) || 'function' == typeof t)) return t;
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
			function Xc(e) {
				return (
					(Xc = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Xc(e)
				);
			}
			function $c(e, t, n) {
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
			Dc()(Bc().Highcharts), qc()(Bc().Highcharts);
			var el = (function (e) {
				Qc(n, e);
				var t = Yc(n);
				function n() {
					return Wc(this, n), t.apply(this, arguments);
				}
				return (
					Jc(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.balanceObjects,
									n = e.core_asset,
									r = e.marketStats,
									o = e.preferredAsset,
									s = e.history,
									i = null;
								if (t && t.length > 0) {
									var a = 0;
									(i = t.forEach(function (e) {
										if (e) {
											var t = 'string' == typeof e ? de.BQ.getObject(e) : e,
												s = t.get('asset_type'),
												i = de.BQ.getAsset(s);
											if (i && o) {
												var c = Number(t.get('balance')),
													l = _a.Z.convertValue(c, o, i, r, n);
												if (l) {
													var u = P.Z.get_asset_precision(o.get('precision'));
													a += l / u;
												}
											}
										}
									})),
										(i = t
											.map(function (e, t) {
												if (!e) return null;
												var s = 'string' == typeof e ? de.BQ.getObject(e) : e,
													i = s.get('asset_type'),
													c = de.BQ.getAsset(i);
												if (!c) return null;
												var l = Number(s.get('balance')),
													u = _a.Z.convertValue(l, o, c, r, n);
												if (!u) return null;
												var p = u / P.Z.get_asset_precision(o.get('precision')),
													d = (p / a) * 100;
												if (d < 0.5) return null;
												if (p < 1) return null;
												var h = c.get('symbol');
												return {
													symbol: h,
													name: ''
														.concat(h, ' (')
														.concat(0 === a ? 0 : d.toFixed(2), '%)'),
													value: p,
													color: Bc().Highcharts.getOptions().colors[t],
												};
											})
											.filter(function (e) {
												return !!e;
											}));
								}
								i && 1 === i.length && 0 === i[0].value && (i = null);
								var c = {
									chart: {
										backgroundColor: 'rgba(255, 0, 0, 0)',
										height: 250,
										spacingLeft: 0,
										spacingRight: 0,
										spacingBottom: 0,
									},
									credits: {enabled: !1},
									legend: {enabled: !1},
									plotOptions: {
										treemap: {
											animation: !1,
											tooltip: {
												pointFormatter: function () {
													return '<b>'
														.concat(this.name, '</b>: ')
														.concat(
															Bc().Highcharts.numberFormat(this.value, 0),
															' '
														)
														.concat(o.get('symbol'));
												},
											},
										},
										series: {
											cursor: 'pointer',
											point: {
												events: {
													click: function () {
														var e = '/asset/'.concat(this.symbol);
														s.push(e);
													},
												},
											},
										},
									},
									series: [
										{
											type: 'treemap',
											levels: [
												{
													level: 1,
													layoutAlgorithm: 'sliceAndDice',
													dataLabels: {
														enabled: !0,
														align: 'center',
														verticalAlign: 'middle',
													},
												},
											],
											data: i,
										},
									],
									title: {text: null},
								};
								return (0, E.jsx)(tl, {accountBalances: i, config: c});
							},
						},
					]),
					n
				);
			})(r.Component);
			function tl(e) {
				var t = e.accountBalances,
					n = e.config;
				return (0, E.jsxs)('div', {
					className: 'account-treemap',
					children: [
						(0, E.jsx)('div', {
							className: 'account-treemap--legend',
							children:
								t &&
								t.map(function (e, t) {
									var n = e.name,
										r = e.symbol,
										o = e.color;
									return (0,
									E.jsx)(_.Z, {to: '/asset/'.concat(r), children: (0, E.jsxs)('div', {className: 'legend-item', children: [(0, E.jsx)('div', {className: 'legend-square', style: {backgroundColor: o}}), n]})}, t);
								}),
						}),
						(0, E.jsx)(Bc(), {config: n}),
					],
				});
			}
			$c(el, 'propTypes', {
				assets: c.Z.ChainAssetsList,
				preferredAsset: c.Z.ChainAsset.isRequired,
			}),
				$c(el, 'defaultProps', {assets: [], preferredAsset: '1.3.0'}),
				(el = (0, l.Z)(el));
			var nl = (function (e) {
				Qc(n, e);
				var t = Yc(n);
				function n() {
					return Wc(this, n), t.apply(this, arguments);
				}
				return (
					Jc(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props.balanceObjects
									.filter(function (e) {
										return !!e;
									})
									.map(function (e) {
										return e.get('asset_type');
									});
								return (0, E.jsx)(
									el,
									zc(
										{
											preferredAsset: this.props.settings.get('unit', '1.3.0'),
											assets: e,
										},
										this.props
									)
								);
							},
						},
					]),
					n
				);
			})(r.Component);
			$c(nl, 'propTypes', {
				balanceObjects: c.Z.ChainObjectsList,
				core_asset: c.Z.ChainAsset.isRequired,
			}),
				$c(nl, 'defaultProps', {balanceObjects: [], core_asset: '1.3.0'}),
				(nl = (0, l.Z)(nl));
			var rl = (function (e) {
				Qc(n, e);
				var t = Yc(n);
				function n() {
					return Wc(this, n), t.apply(this, arguments);
				}
				return (
					Jc(n, [
						{
							key: 'render',
							value: function () {
								return (0, E.jsx)(Fc.Z, {
									stores: [i.Z, La.Z],
									inject: {
										marketStats: function () {
											return La.Z.getState().allMarketStats;
										},
										settings: function () {
											return i.Z.getState().settings;
										},
									},
									children: (0, E.jsx)(
										nl,
										zc(zc({}, this.props), {}, {ref: this.props.refCallback})
									),
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			const ol = (0, it.Z)(rl);
			var sl = n(80563),
				il = n(83370);
			function al(e) {
				return (
					(al =
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
					al(e)
				);
			}
			var cl = ['refCallback'];
			function ll(e, t) {
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
			function ul(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? ll(Object(n), !0).forEach(function (t) {
								jl(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: ll(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function pl(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function dl(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function hl(e, t, n) {
				return (
					t && dl(e.prototype, t),
					n && dl(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function fl() {
				return (
					(fl =
						'undefined' != typeof Reflect && Reflect.get
							? Reflect.get
							: function (e, t, n) {
									var r = yl(e, t);
									if (r) {
										var o = Object.getOwnPropertyDescriptor(r, t);
										return o.get
											? o.get.call(arguments.length < 3 ? e : n)
											: o.value;
									}
							  }),
					fl.apply(this, arguments)
				);
			}
			function yl(e, t) {
				for (
					;
					!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _l(e));

				);
				return e;
			}
			function bl(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && ml(e, t);
			}
			function ml(e, t) {
				return (
					(ml =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ml(e, t)
				);
			}
			function gl(e) {
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
						r = _l(e);
					if (t) {
						var o = _l(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return vl(this, n);
				};
			}
			function vl(e, t) {
				if (t && ('object' === al(t) || 'function' == typeof t)) return t;
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
			function _l(e) {
				return (
					(_l = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					_l(e)
				);
			}
			function jl(e, t, n) {
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
			var xl = (function (e) {
				bl(n, e);
				var t = gl(n);
				function n(e) {
					return pl(this, n), t.call(this, e);
				}
				return (
					hl(n, [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return (
									fl(_l(n.prototype), 'shouldComponentUpdate', this).call(
										this,
										e
									) || e.base !== this.props.base
								);
							},
						},
						{
							key: 'getValue',
							value: function () {
								var e = this.props.marketStats;
								return e && e.change ? e.change : 0;
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.getValue(),
									t =
										0 === parseFloat(e)
											? ''
											: parseFloat(e) < 0
											? 'change-down'
											: 'change-up',
									n = (0, E.jsx)(Ua.BK, {
										style: 'decimal',
										value: e,
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									});
								return isNaN(parseFloat(e))
									? (0, E.jsx)('span', {className: 'value ' + t, children: '-'})
									: (0, E.jsxs)('span', {
											className: 'value ' + t,
											children: [n, '%'],
									  });
							},
						},
					]),
					n
				);
			})(rc);
			jl(xl, 'defaultProps', {
				fullPrecision: !1,
				noDecimals: !1,
				hide_asset: !1,
			}),
				(xl = (0, H.Z)(xl, {
					propNames: ['quote', 'base'],
					defaultProps: {quote: '1.3.0'},
				}));
			var wl = (function (e) {
				bl(n, e);
				var t = gl(n);
				function n() {
					return pl(this, n), t.apply(this, arguments);
				}
				return (
					hl(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.refCallback,
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
									})(e, cl);
								return (0, E.jsx)(xl, ul(ul({}, n), {}, {ref: t}));
							},
						},
					]),
					n
				);
			})(r.Component);
			wl = (0, u.$)(wl, {
				listenTo: function () {
					return [La.Z];
				},
				getProps: function (e) {
					return {
						marketStats: La.Z.getState().allMarketStats.get(e.marketId),
						allMarketStats: La.Z.getState().allMarketStats,
					};
				},
			});
			var kl = n(47397);
			function Ol(e) {
				return (
					(Ol =
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
					Ol(e)
				);
			}
			var Sl = ['toAsset', 'forceDirection'];
			function Cl(e, t) {
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
			function Pl(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Cl(Object(n), !0).forEach(function (t) {
								Vl(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Cl(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Al(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Zl(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ml(e, t, n) {
				return (
					t && Zl(e.prototype, t),
					n && Zl(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Rl() {
				return (
					(Rl =
						'undefined' != typeof Reflect && Reflect.get
							? Reflect.get
							: function (e, t, n) {
									var r = Nl(e, t);
									if (r) {
										var o = Object.getOwnPropertyDescriptor(r, t);
										return o.get
											? o.get.call(arguments.length < 3 ? e : n)
											: o.value;
									}
							  }),
					Rl.apply(this, arguments)
				);
			}
			function Nl(e, t) {
				for (
					;
					!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Dl(e));

				);
				return e;
			}
			function Il(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Tl(e, t);
			}
			function Tl(e, t) {
				return (
					(Tl =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Tl(e, t)
				);
			}
			function Bl(e) {
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
						r = Dl(e);
					if (t) {
						var o = Dl(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return El(this, n);
				};
			}
			function El(e, t) {
				if (t && ('object' === Ol(t) || 'function' == typeof t)) return t;
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
			function Dl(e) {
				return (
					(Dl = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Dl(e)
				);
			}
			function Vl(e, t, n) {
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
			var ql = (function (e) {
				Il(n, e);
				var t = Bl(n);
				function n() {
					return Al(this, n), t.apply(this, arguments);
				}
				return (
					Ml(n, [
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									Rl(Dl(n.prototype), 'shouldComponentUpdate', this).call(
										this,
										e
									) ||
									e.base_amount !== this.props.base_amount ||
									e.quote_amount !== this.props.quote_amount ||
									e.decimals !== this.props.decimals ||
									!P.Z.are_equal_shallow(e.pulsate, this.props.pulsate) ||
									!P.Z.are_equal_shallow(t, this.state)
								);
							},
						},
						{
							key: 'getFinalPrice',
							value: function () {
								var e =
										arguments.length > 0 &&
										void 0 !== arguments[0] &&
										arguments[0],
									t = this.props,
									n = t.coreAsset,
									r = t.fromAsset,
									o = t.toAsset,
									s = t.allMarketStats;
								return _a.Z.getFinalPrice(n, r, o, s, e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.toAsset,
									n = e.forceDirection,
									r = (function (e, t) {
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
									})(e, Sl),
									o = this.getFinalPrice();
								return 1 === o
									? (0, E.jsx)('span', {children: '1.00'})
									: o
									? (0, E.jsx)(
											Le.Z,
											Pl(
												{
													force_direction: !!n && t.get('symbol'),
													base_amount: o.base.amount,
													base_asset: o.base.asset_id,
													quote_amount: o.quote.amount,
													quote_asset: o.quote.asset_id,
												},
												r
											)
									  )
									: (0, E.jsx)('span', {children: '--'});
							},
						},
					]),
					n
				);
			})(kl.Z);
			Vl(ql, 'defaultProps', {forceDirection: !0}),
				(ql = (0, H.Z)(ql, {
					propNames: ['toAsset', 'fromAsset', 'coreAsset'],
					defaultProps: {toAsset: '1.3.0', coreAsset: '1.3.0'},
				}));
			var Fl = (function (e) {
					Il(n, e);
					var t = Bl(n);
					function n() {
						return Al(this, n), t.apply(this, arguments);
					}
					return (
						Ml(n, [
							{
								key: 'render',
								value: function () {
									var e = this;
									return (0, E.jsx)(Fc.Z, {
										stores: [i.Z, La.Z],
										inject: {
											toAsset: function () {
												return (
													e.props.toAsset ||
													i.Z.getState().settings.get('unit', '1.3.0')
												);
											},
											allMarketStats: function () {
												return La.Z.getState().allMarketStats;
											},
										},
										children: (0, E.jsx)(
											ql,
											Pl(Pl({}, this.props), {}, {ref: this.props.refCallback})
										),
									});
								},
							},
						]),
						n
					);
				})(r.Component),
				Ul = n(96168);
			function Ll(e) {
				return (
					(Ll =
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
					Ll(e)
				);
			}
			function zl(e, t) {
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
			function Wl(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Kl(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Jl(e, t) {
				return (
					(Jl =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Jl(e, t)
				);
			}
			function Ql(e, t) {
				if (t && ('object' === Ll(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Gl(e);
			}
			function Gl(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Yl(e) {
				return (
					(Yl = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Yl(e)
				);
			}
			function Hl(e, t, n) {
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
			var Xl = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Jl(e, t);
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
								t = Yl(r);
							if (o) {
								var n = Yl(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Ql(this, e);
						});
				function i() {
					var e;
					Wl(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
						n[r] = arguments[r];
					return (
						Hl(
							Gl((e = s.call.apply(s, [this].concat(n)))),
							'tick',
							function () {
								var t = e.props,
									n = t.onIcon,
									r = t.offIcon,
									o = (e.state || {}).name,
									s = void 0 === o ? n : o;
								e.setState({name: s === n ? r : n});
							}
						),
						e
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'componentDidMount',
							value: function () {
								var e = this.props.duration;
								this.interval = setInterval(this.tick, e);
							},
						},
						{
							key: 'componentWillUnmount',
							value: function () {
								this.interval && clearInterval(this.interval);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.onIcon,
									n = e.rest,
									r = (this.state || {}).name,
									o = void 0 === r ? t : r,
									s = this.props.title;
								return (0, E.jsx)(
									$.Z,
									(function (e) {
										for (var t = 1; t < arguments.length; t++) {
											var n = null != arguments[t] ? arguments[t] : {};
											t % 2
												? zl(Object(n), !0).forEach(function (t) {
														Hl(e, t, n[t]);
												  })
												: Object.getOwnPropertyDescriptors
												? Object.defineProperties(
														e,
														Object.getOwnPropertyDescriptors(n)
												  )
												: zl(Object(n)).forEach(function (t) {
														Object.defineProperty(
															e,
															t,
															Object.getOwnPropertyDescriptor(n, t)
														);
												  });
										}
										return e;
									})({name: o, title: s}, n)
								);
							},
						},
					]),
					n && Kl(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			Hl(Xl, 'propTypes', {
				duration: v().number.isRequired,
				offIcon: v().string.isRequired,
				onIcon: v().string.isRequired,
				title: v().string.isRequired,
			});
			var $l = n(55301),
				eu = n(92224),
				tu = n(88209),
				nu = n.n(tu),
				ru = n(43957),
				ou = n(76772);
			function su(e) {
				return (
					(su =
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
					su(e)
				);
			}
			function iu(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function au(e, t) {
				return (
					(au =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					au(e, t)
				);
			}
			function cu(e, t) {
				if (t && ('object' === su(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return lu(e);
			}
			function lu(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function uu(e) {
				return (
					(uu = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					uu(e)
				);
			}
			var pu = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && au(e, t);
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
								t = uu(r);
							if (o) {
								var n = uu(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return cu(this, e);
						});
				function i(e) {
					var t;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						((t = s.call(this, e)).state = t.getInitialState(e)),
						(t.onSubmit = t.onSubmit.bind(lu(t))),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								e.asset &&
									this.props.asset &&
									e.asset.get('id') !== this.props.asset.get('id') &&
									this.setState(this.getInitialState(e));
							},
						},
						{
							key: 'getInitialState',
							value: function (e) {
								return {
									amount: 0,
									amountAsset: new va.xR({
										amount: 0,
										asset_id: e.asset.get('id'),
										precision: e.asset.get('precision'),
									}),
								};
							},
						},
						{
							key: 'onAmountChanged',
							value: function (e) {
								var t = e.amount,
									n = e.asset;
								this.state.amountAsset.setAmount({real: t}),
									this.setState({amount: t, asset: n});
							},
						},
						{
							key: 'onSubmit',
							value: function () {
								var e = this;
								w.Z.reserveAsset(
									this.state.amountAsset.getAmount(),
									this.props.asset.get('id'),
									this.props.account.get('id')
								).then(function () {
									e.state.amountAsset.setAmount({sats: 0}),
										e.setState({amount: 0});
								}),
									this.props.hideModal();
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props.asset.get('id'),
									n =
										this.props.account &&
										this.props.account.get('balances', []).size &&
										this.props.account.getIn(['balances', t])
											? de.BQ.getObject(
													this.props.account.getIn(['balances', t])
											  )
											: null;
								return n
									? (0, E.jsxs)(B.Z, {
											visible: this.props.visible,
											onCancel: this.props.hideModal,
											title: Z().translate('modal.reserve.title'),
											footer: [
												(0, E.jsx)(
													T.Z,
													{
														type: 'primary',
														onClick: this.onSubmit,
														children: Z().translate('modal.reserve.submit'),
													},
													'submit'
												),
												(0, E.jsx)(
													T.Z,
													{
														onClick: this.props.hideModal,
														children: Z().translate('cancel'),
													},
													'cancel'
												),
											],
											children: [
												(0, E.jsx)(ou.Z, {
													message: Z().translate(
														'modal.reserve.warning_message'
													),
													type: 'warning',
													showIcon: !0,
													style: {marginBottom: '2em'},
												}),
												(0, E.jsx)(ns.Z, {
													layout: 'vertical',
													children: (0, E.jsx)(ru.Z, {
														label: 'modal.reserve.amount',
														amount: this.state.amount,
														onChange: this.onAmountChanged.bind(this),
														asset: t,
														assets: [t],
														display_balance: (0, E.jsx)('div', {
															onClick: function () {
																e.state.amountAsset.setAmount({
																	sats: n.get('balance'),
																}),
																	e.setState({
																		amount: e.state.amountAsset.getAmount({
																			real: !0,
																		}),
																	});
															},
															children: (0, E.jsx)(il.Z, {
																balance: this.props.account.getIn([
																	'balances',
																	t,
																]),
															}),
														}),
														tabIndex: 1,
													}),
												}),
											],
									  })
									: null;
							},
						},
					]),
					n && iu(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			const du = (pu = (0, H.Z)(pu, {propNames: ['asset']}));
			var hu = n(42239),
				fu = n(9676);
			function yu(e) {
				return (
					(yu =
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
					yu(e)
				);
			}
			var bu = ['header'];
			function mu(e, t) {
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
			function gu(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? mu(Object(n), !0).forEach(function (t) {
								ku(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: mu(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function vu(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function _u(e, t) {
				return (
					(_u =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					_u(e, t)
				);
			}
			function ju(e, t) {
				if (t && ('object' === yu(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return xu(e);
			}
			function xu(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function wu(e) {
				return (
					(wu = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					wu(e)
				);
			}
			function ku(e, t, n) {
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
			var Ou = hu.Z.Option,
				Su = {name: 'j9a02z', styles: 'margin-top:6px'},
				Cu = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && _u(e, t);
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
									t = wu(r);
								if (o) {
									var n = wu(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return ju(this, e);
							});
					function i(e) {
						var t;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, i),
							((t = s.call(this, e)).state = {
								columnSelector: 'default',
								isDropDownOpen: !1,
							}),
							(t._columnSelectorChange = t._columnSelectorChange.bind(xu(t))),
							(t.isColumnChecked = t.isColumnChecked.bind(xu(t))),
							t
						);
					}
					return (
						(t = i),
						(n = [
							{
								key: '_getViewSettingsKey',
								value: function () {
									return 'columns_' + this.props.viewSettingsKey;
								},
							},
							{
								key: '_getEnabledColumns',
								value: function () {
									return (
										this.props.viewSettings.get(this._getViewSettingsKey()) ||
										{}
									);
								},
							},
							{
								key: '_getCustomizableColumns',
								value: function (e) {
									var t = this;
									return e.filter(function (e) {
										return t._isColumnCustomizable(e).customizable;
									});
								},
							},
							{
								key: 'modHeader',
								value: function (e) {
									var t = this;
									return this.props.allowCustomization
										? e.filter(function (e) {
												return (
													!t._isColumnCustomizable(e) || t.isColumnChecked(e)
												);
										  })
										: e;
								},
							},
							{
								key: '_columnCheckboxChange',
								value: function (e) {
									var t = this._getEnabledColumns();
									(t[e] = !this.isColumnChecked(e)),
										Ke.Z.changeViewSetting(
											ku({}, this._getViewSettingsKey(), t)
										);
								},
							},
							{
								key: '_isColumnCustomizable',
								value: function (e) {
									return e.dataIndex
										? {
												customizable: null == e.customizable || e.customizable,
												default:
													null == e.customizable ||
													'boolean' == typeof e.customizable ||
													e.customizable.default,
										  }
										: {customizable: !1, default: !1};
								},
							},
							{
								key: 'isColumnChecked',
								value: function (e) {
									return (
										'string' == typeof e &&
											(e = {dataIndex: e, customizable: !0}),
										null == this._getEnabledColumns()[e.dataIndex]
											? this._isColumnCustomizable(e).default
											: this._getEnabledColumns()[e.dataIndex]
									);
								},
							},
							{
								key: '_renderEnabledColumnsSelector',
								value: function () {
									var e = this,
										t = this.props.header;
									return (0, E.jsx)('div', {
										className: 'customizable-column--selector',
										children: (0, E.jsxs)(hu.Z, {
											defaultValue: this.state.columnSelector,
											value: this.state.columnSelector,
											onChange: this._columnSelectorChange,
											dropdownClassName:
												'customizable-column--selector--dropdown',
											onDropdownVisibleChange: function (t) {
												e.setState({isDropDownOpen: t});
											},
											css: function (e) {
												return {background: e.colors.greyColorContrast};
											},
											children: [
												(0, E.jsxs)(Ou, {
													className: 'customizable-column--selector--option',
													value: 'default',
													children: [
														!this.state.isDropDownOpen &&
															(0, E.jsx)(ms.xRF, {size: 18, css: Su}),
														this.state.isDropDownOpen &&
															Z().translate(
																'customizable_table.customize_the_columns'
															),
													],
												}),
												this._getCustomizableColumns(t).map(function (t, n) {
													return (0,
													E.jsx)(Ou, {className: 'customizable-column--selector--option', value: t.dataIndex, disabled: !0, children: (0, E.jsx)(fu.Z, {checked: e.isColumnChecked(t), onChange: e._columnCheckboxChange.bind(e, t.dataIndex), children: t.title})}, n);
												}),
											],
										}),
									});
								},
							},
							{
								key: '_columnSelectorChange',
								value: function () {
									this.setState({columnSelector: 'default'});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.props,
										t = e.header,
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
															(Object.prototype.propertyIsEnumerable.call(
																e,
																n
															) &&
																(o[n] = e[n]));
											}
											return o;
										})(e, bu);
									return (
										(t = this.modHeader(t)),
										(0, E.jsxs)('div', {
											children: [
												this.props.allowCustomization &&
													(0, E.jsx)('div', {
														style: {position: 'relative'},
														children: this._renderEnabledColumnsSelector(),
													}),
												(0, E.jsx)(tn.Z, gu(gu({}, n), {}, {header: t})),
												this.props.children,
											],
										})
									);
								},
							},
						]),
						n && vu(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						i
					);
				})(r.Component);
			ku(Cu, 'propTypes', {
				viewSettingsKey: v().string,
				viewSettings: v().object,
				allowCustomization: v().bool,
			}),
				ku(Cu, 'defaultProps', {
					viewSettingsKey: null,
					viewSettings: null,
					allowCustomization: !1,
				});
			const Pu = (Cu = (0, u.$)(Cu, {
				listenTo: function () {
					return [i.Z];
				},
				getProps: function (e) {
					return e.viewSettings
						? {}
						: {viewSettings: i.Z.getState().viewSettings};
				},
			}));
			var Au = n(74754);
			function Zu(e) {
				return (
					(Zu =
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
					Zu(e)
				);
			}
			function Mu(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ru(e, t) {
				return (
					(Ru =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ru(e, t)
				);
			}
			function Nu(e, t) {
				if (t && ('object' === Zu(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Iu(e);
			}
			function Iu(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Tu(e) {
				return (
					(Tu = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Tu(e)
				);
			}
			function Bu(e, t, n) {
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
			var Eu = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && Ru(e, t);
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
								t = Tu(r);
							if (o) {
								var n = Tu(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Nu(this, e);
						});
				function i(e) {
					var t;
					for (var n in ((function (e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, i),
					Bu(Iu((t = s.call(this, e))), 'sortFunctions', {
						qty: function (e, t, n) {
							return Number(this.qtyRefs[e.key]) < Number(this.qtyRefs[t.key])
								? this.state.portfolioSortDirection || n
									? -1
									: 1
								: Number(this.qtyRefs[e.key]) > Number(this.qtyRefs[t.key])
								? this.state.portfolioSortDirection || n
									? 1
									: -1
								: void 0;
						},
						alphabetic: function (e, t, n) {
							return e.key > t.key
								? this.state.portfolioSortDirection || n
									? 1
									: -1
								: e.key < t.key
								? this.state.portfolioSortDirection || n
									? -1
									: 1
								: 0;
						},
						priceValue: function (e, t) {
							var n = this.priceRefs[e.key],
								r = this.priceRefs[t.key];
							return n && r
								? this.props.sortDirection
									? n - r
									: r - n
								: null === n && null !== r
								? 1
								: null !== n && null === r
								? -1
								: this.sortFunctions.alphabetic(e, t, !0);
						},
						totalValue: function (e, t) {
							var n = this.valueRefs[e.key],
								r = this.valueRefs[t.key];
							return n && r
								? this.props.sortDirection
									? n - r
									: r - n
								: !n && r
								? 1
								: n && !r
								? -1
								: this.sortFunctions.alphabetic(e, t, !0);
						},
						changeValue: function (e, t) {
							var n = this.changeRefs[e.key],
								r = this.changeRefs[t.key];
							if (n && r) {
								var o = 'NaN' != parseFloat(n) ? parseFloat(n) : n,
									s = 'NaN' != parseFloat(r) ? parseFloat(r) : r;
								return void 0 === this.state.portfolioSortDirection ||
									this.state.portfolioSortDirection
									? o - s
									: s - o;
							}
						},
					}),
					(t.state = {
						isBridgeModalVisible: !1,
						isSettleModalVisible: !1,
						isBorrowModalVisible: !1,
						isDepositModalVisible: !1,
						isWithdrawModalVisible: !1,
						isBurnModalVisible: !1,
						isBridgeModalVisibleBefore: !1,
						isSettleModalVisibleBefore: !1,
						isBorrowModalVisibleBefore: !1,
						isDepositModalVisibleBefore: !1,
						isWithdrawModalVisibleBefore: !1,
						isBurnModalVisibleBefore: !1,
						borrow: null,
						settleAsset: '1.3.0',
						depositAsset: null,
						withdrawAsset: null,
						bridgeAsset: null,
						allRefsAssigned: !1,
						portfolioSort: e.viewSettings.get('portfolioSort', 'value'),
						portfolioSortDirection: e.viewSettings.get(
							'portfolioSortDirection',
							'ascend'
						),
					}),
					(t.qtyRefs = {}),
					(t.priceRefs = {}),
					(t.valueRefs = {}),
					(t.changeRefs = {}),
					t.sortFunctions))
						t.sortFunctions[n] = t.sortFunctions[n].bind(Iu(t));
					return (
						(t._checkRefAssignments = t._checkRefAssignments.bind(Iu(t))),
						(t.showSettleModal = t.showSettleModal.bind(Iu(t))),
						(t.hideSettleModal = t.hideSettleModal.bind(Iu(t))),
						(t.showDepositModal = t.showDepositModal.bind(Iu(t))),
						(t.hideDepositModal = t.hideDepositModal.bind(Iu(t))),
						(t.showWithdrawModal = t.showWithdrawModal.bind(Iu(t))),
						(t.hideWithdrawModal = t.hideWithdrawModal.bind(Iu(t))),
						(t.showBorrowModal = t.showBorrowModal.bind(Iu(t))),
						(t.hideBorrowModal = t.hideBorrowModal.bind(Iu(t))),
						(t.showBurnModal = t.showBurnModal.bind(Iu(t))),
						(t.hideBurnModal = t.hideBurnModal.bind(Iu(t))),
						(t.showBridgeModal = t.showBridgeModal.bind(Iu(t))),
						(t.hideBridgeModal = t.hideBridgeModal.bind(Iu(t))),
						(t.toggleSortOrder = t.toggleSortOrder.bind(Iu(t))),
						t
					);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'componentWillMount',
							value: function () {
								this.refCheckInterval = setInterval(this._checkRefAssignments);
							},
						},
						{
							key: 'componentWillUnmount',
							value: function () {
								clearInterval(this.refCheckInterval);
							},
						},
						{
							key: '_checkRefAssignments',
							value: function () {
								var e = this;
								if (!this.state.allRefsAssigned) {
									var t = [
										'qtyRefs',
										'priceRefs',
										'valueRefs',
										'changeRefs',
									].reduce(function (t, n) {
										return void 0 === t
											? !!Object.keys(e[n]).length
											: !!Object.keys(e[n]).length && t;
									}, void 0);
									t &&
										(clearInterval(this.refCheckInterval),
										this.setState({allRefsAssigned: t}));
								}
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								var n = this;
								return (
									!P.Z.are_equal_shallow(t, this.state) ||
									!P.Z.are_equal_shallow(e.balances, this.props.balances) ||
									!P.Z.are_equal_shallow(
										e.balanceList,
										this.props.balanceList
									) ||
									!P.Z.are_equal_shallow(
										e.optionalAssets,
										this.props.optionalAssets
									) ||
									e.account !== this.props.account ||
									e.visible !== this.props.visible ||
									e.settings !== this.props.settings ||
									e.hiddenAssets !== this.props.hiddenAssets ||
									t.portfolioSort !== this.state.portfolioSort ||
									t.portfolioSortDirection !==
										this.state.portfolioSortDirection ||
									e.allMarketStats.reduce(function (e, t, r) {
										return (
											P.Z.check_market_stats(
												t,
												n.props.allMarketStats.get(r)
											) || e
										);
									}, !1)
								);
							},
						},
						{
							key: 'showBridgeModal',
							value: function () {
								this.setState({
									isBridgeModalVisible: !0,
									isBridgeModalVisibleBefore: !0,
								});
							},
						},
						{
							key: 'hideBridgeModal',
							value: function () {
								this.setState({isBridgeModalVisible: !1});
							},
						},
						{
							key: 'showWithdrawModal',
							value: function () {
								this.setState({
									isWithdrawModalVisible: !0,
									isWithdrawModalVisibleBefore: !0,
								});
							},
						},
						{
							key: 'hideWithdrawModal',
							value: function () {
								this.setState({isWithdrawModalVisible: !1});
							},
						},
						{
							key: 'showBurnModal',
							value: function () {
								this.setState({
									isBurnModalVisible: !0,
									isBurnModalVisibleBefore: !0,
								});
							},
						},
						{
							key: 'hideBurnModal',
							value: function () {
								this.setState({isBurnModalVisible: !1});
							},
						},
						{
							key: 'showSettleModal',
							value: function () {
								this.setState({
									isSettleModalVisible: !0,
									isSettleModalVisibleBefore: !0,
								});
							},
						},
						{
							key: 'hideSettleModal',
							value: function () {
								this.setState({isSettleModalVisible: !1});
							},
						},
						{
							key: 'showDepositModal',
							value: function () {
								this.setState({
									isDepositModalVisible: !0,
									isDepositModalVisibleBefore: !0,
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
							key: 'showBorrowModal',
							value: function (e, t, n) {
								this.setState({
									isBorrowModalVisible: !0,
									isBorrowModalVisibleBefore: !0,
									borrow: {quoteAsset: e, backingAsset: t, account: n},
								});
							},
						},
						{
							key: 'hideBorrowModal',
							value: function () {
								this.setState({borrow: null, isBorrowModalVisible: !1});
							},
						},
						{
							key: 'triggerSend',
							value: function (e) {
								var t = this;
								this.setState({send_asset: e}, function () {
									t.send_modal && t.send_modal.show();
								});
							},
						},
						{
							key: '_onSettleAsset',
							value: function (e, t) {
								t.preventDefault(),
									this.setState({settleAsset: e}),
									this.showSettleModal();
							},
						},
						{
							key: '_hideAsset',
							value: function (e, t) {
								Ke.Z.hideAsset(e, t);
							},
						},
						{
							key: '_burnAsset',
							value: function (e, t) {
								t.preventDefault(),
									this.setState({reserve: e}),
									this.showBurnModal();
							},
						},
						{
							key: '_showDepositModal',
							value: function (e, t) {
								var n = this;
								t.preventDefault(),
									this.setState({depositAsset: e}, function () {
										n.showDepositModal();
									});
							},
						},
						{
							key: '_showDepositWithdraw',
							value: function (e, t, n, r) {
								var o,
									s = this;
								r.preventDefault(),
									this.setState(
										(Bu(
											(o = {}),
											'bridge_modal' === e
												? 'bridgeAsset'
												: 'deposit_modal' === e
												? 'depositAsset'
												: 'withdrawAsset',
											t
										),
										Bu(o, 'fiatModal', n),
										o),
										function () {
											return 'bridge_modal' === e
												? (s.showBridgeModal(), !0)
												: 'deposit_modal' === e
												? (s.showDepositModal(), !0)
												: void s.showWithdrawModal();
										}
									);
							},
						},
						{
							key: '_getSeparator',
							value: function (e) {
								return e ? (0, E.jsx)('span', {children: ' | '}) : null;
							},
						},
						{
							key: 'toggleSortOrder',
							value: function (e, t, n) {
								Ke.Z.changeViewSetting({
									portfolioSortDirection: n.order,
									portfolioSort: n.columnKey,
								}),
									this.setState({
										portfolioSortDirection: n.order,
										portfolioSort: n.columnKey,
									});
							},
						},
						{
							key: 'getHeader',
							value: function () {
								var e = this.props.settings,
									t = this.state,
									n = (t.shownAssets, t.portfolioSortDirection),
									r = t.portfolioSort,
									o = e.get('unit') || this.props.core_asset.get('symbol'),
									s = e.get('showAssetPercent', !1);
								return [
									{
										title: (0, E.jsx)(x(), {content: 'account.asset'}),
										dataIndex: 'asset',
										align: 'left',
										customizable: !1,
										sorter: this.sortFunctions.alphabetic,
										sortOrder: 'asset' === r && n,
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'account.qty'}),
										dataIndex: 'qty',
										align: 'right',
										customizable: !1,
										sorter: this.sortFunctions.qty,
										sortOrder: 'qty' === r && n,
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										className: 'column-hide-small',
										title: (0, E.jsxs)('span', {
											style: {whiteSpace: 'nowrap'},
											children: [
												(0, E.jsx)(x(), {content: 'exchange.price'}),
												' (',
												(0, E.jsx)(Po.Z, {name: o, noTip: !0}),
												')',
											],
										}),
										dataIndex: 'price',
										align: 'right',
										sorter: this.sortFunctions.priceValue,
										sortOrder: 'price' === r && n,
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										className: 'column-hide-small',
										title: (0, E.jsx)(x(), {content: 'account.hour_24_short'}),
										dataIndex: 'hour24',
										align: 'right',
										sorter: this.sortFunctions.changeValue,
										sortOrder: 'hour24' === r && n,
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										className: 'column-hide-small',
										title: (0, E.jsx)('span', {
											style: {whiteSpace: 'nowrap'},
											children: (0, E.jsx)(zs.Z, {
												noLink: !0,
												string: 'account.eq_value_header',
												keys: [{type: 'asset', value: o, arg: 'asset'}],
												noTip: !0,
											}),
										}),
										dataIndex: 'value',
										align: 'right',
										customizable: !1,
										sorter: this.sortFunctions.totalValue,
										sortOrder: 'value' === r && n,
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'account.percent'}),
										dataIndex: 'percent',
										align: 'right',
										customizable: {default: s},
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {content: 'header.payments'}),
										dataIndex: 'payments',
										align: 'center',
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										title: (0, E.jsx)(x(), {
											content: 'account.trade',
											style: {whiteSpace: 'nowrap'},
										}),
										dataIndex: 'trade',
										align: 'center',
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
									{
										className: 'column-hide-small',
										title: (0, E.jsx)(x(), {content: 'modal.reserve.submit'}),
										dataIndex: 'burn',
										align: 'center',
										render: function (e) {
											return (0, E.jsx)('span', {
												style: {whiteSpace: 'nowrap'},
												children: e,
											});
										},
									},
								];
							},
						},
						{
							key: '_renderBalances',
							value: function (e, t, n) {
								var r = this,
									o = this.props,
									s = o.coreSymbol,
									i = o.preferredUnit,
									a = (o.settings, o.hiddenAssets),
									c = o.orders,
									l = function (e, t) {
										var n = e && e.has('bitasset_data_id'),
											o = !!(n && e.getIn(['bitasset', 'settlement_fund']) > 0);
										return {
											isBitAsset: n,
											borrowLink:
												!n || o
													? null
													: (0, E.jsx)('a', {
															onClick: function () {
																Ul.Z.hide(),
																	r.showBorrowModal(
																		e.get('id'),
																		e.getIn([
																			'bitasset',
																			'options',
																			'short_backing_asset',
																		]),
																		t
																	);
															},
															children: (0, E.jsx)($.Z, {
																name: 'dollar',
																title: 'icons.dollar.borrow',
																className: 'icon-14px',
															}),
													  }),
										};
									},
									u = [],
									p = '-';
								return (
									e.forEach(function (e) {
										var t = de.BQ.getObject(e);
										if (t) {
											var n = t.get('asset_type'),
												o = de.BQ.getObject(n);
											if (o) {
												var d,
													h,
													f,
													y = '',
													b = (o.get('symbol'), '1.3.0' !== o.get('id')),
													m = i !== s,
													g = Y.Z.parseDescription(
														o.getIn(['options', 'description'])
													).market;
												-1 === (y = o.get('symbol')).indexOf('OPEN.') ||
													g ||
													(g = 'USDT');
												var v = g || i;
												b && v === y && (v = s),
													(d = b
														? (0, E.jsx)(_.Z, {
																to: '/market/'
																	.concat(o.get('symbol'), '_')
																	.concat(v),
																children: (0, E.jsx)(Au.Z, {
																	buttonType: 'white',
																	children: 'Trade',
																}),
														  })
														: m
														? (0, E.jsx)(_.Z, {
																to: '/market/'
																	.concat(o.get('symbol'), '_')
																	.concat(i),
																children: (0, E.jsx)(Au.Z, {
																	buttonType: 'white',
																	children: 'Trade',
																}),
														  })
														: p),
													(f = (0, E.jsx)(Au.Z, {
														buttonType: 'transparent',
														onClick: r.triggerSend.bind(r, o.get('id')),
														children: 'Send',
													}));
												var j = l(o, r.props.account),
													x = j.isBitAsset,
													w = j.borrowLink,
													k = (a.includes(n), !!t.get('balance')),
													O = !!c[n],
													S = t.get('balance');
												r.qtyRefs[o.get('symbol')] = P.Z.get_asset_amount(S, o);
												var C,
													A =
														o && o.getIn(['bitasset', 'options'])
															? o.getIn(['bitasset', 'options']).toJS()
															: null,
													M =
														A && A.short_backing_asset
															? de.BQ.getAsset(A.short_backing_asset)
															: null,
													R = P.Z.replaceName(o).isBitAsset,
													N = P.Z.replaceName(M).isBitAsset;
												if (x) {
													var I = o.get('bitasset').get('settlement_fund') > 0,
														T = o.getIn(['bitasset', 'is_prediction_market']);
													(C = I
														? 'tooltip.global_settle'
														: T
														? 'tooltip.settle_market_prediction'
														: 'tooltip.settle'),
														(h =
															T && !I
																? (0, E.jsx)(ic.MXt, {})
																: (0, E.jsx)('a', {
																		onClick: r._onSettleAsset.bind(
																			r,
																			o.get('id')
																		),
																		children: (0, E.jsx)($.Z, {
																			name: 'settle',
																			title: 'icons.settle',
																			className: 'icon-14px',
																		}),
																  }));
												}
												var B = de.BQ.getAsset(i);
												(r.valueRefs[o.get('symbol')] =
													k && B
														? _a.Z.convertValue(
																S,
																B,
																o,
																r.props.allMarketStats,
																r.props.coreAsset,
																!0
														  )
														: null),
													(r.priceRefs[o.get('symbol')] = B
														? _a.Z.getFinalPrice(
																r.props.coreAsset,
																o,
																B,
																r.props.allMarketStats,
																!0
														  )
														: null);
												var D = o.get('symbol') + '_' + i,
													V = r.props.allMarketStats.get(D);
												(r.changeRefs[o.get('symbol')] =
													V && V.change ? V.change : 0),
													u.push({
														key: o.get('symbol'),
														asset: (0, E.jsx)(We.Z, {asset: o.get('id')}),
														qty:
															k || O
																? (0, E.jsx)(il.Z, {balance: e, hide_asset: !0})
																: null,
														price: (0, E.jsx)(Fl, {
															fromAsset: o.get('id'),
															pulsate: {reverse: !0, fill: 'forwards'},
															hide_symbols: !0,
														}),
														hour24: (0, E.jsx)(wl, {
															base: o.get('id'),
															quote: i,
															marketId: D,
															hide_symbols: !0,
														}),
														value:
															k || O
																? (0, E.jsx)(Co.G, {
																		balance: e,
																		toAsset: i,
																		hide_asset: !0,
																  })
																: null,
														percent: k
															? (0, E.jsx)(il.Z, {balance: e, asPercentage: !0})
															: null,
														payments: f,
														trade: d,
														borrow:
															x && w
																? (0, E.jsx)(at.Z, {
																		title: Z().translate('tooltip.borrow', {
																			asset: R ? 'bit' + y : y,
																		}),
																		children: w,
																  })
																: x && !w
																? (0, E.jsx)(at.Z, {
																		title: Z().translate(
																			'tooltip.borrow_disabled',
																			{asset: R ? 'bit' + y : y}
																		),
																		children: (0, E.jsx)(ic.MXt, {}),
																  })
																: p,
														settle:
															x && M
																? (0, E.jsx)(at.Z, {
																		placement: 'bottom',
																		title: Z().translate(C, {
																			asset: R ? 'bit' + y : y,
																			backingAsset: N
																				? 'bit' + M.get('symbol')
																				: M.get('symbol'),
																			settleDelay:
																				A.force_settlement_delay_sec / 3600,
																		}),
																		children: (0, E.jsx)('div', {
																			className: 'inline-block',
																			children: h,
																		}),
																  })
																: p,
														burn: x
															? null
															: (0, E.jsx)(Au.Z, {
																	buttonType: 'red',
																	onClick: r._burnAsset.bind(r, o.get('id')),
																	children: 'Burn',
															  }),
													});
											}
										}
									}),
									t &&
										t
											.filter(function (e) {
												var t = !0;
												return (
													u.forEach(function (n) {
														n.key === e && (t = !1);
													}),
													t && !1
												);
											})
											.forEach(function (e) {
												var t = de.BQ.getAsset(e);
												if (t && r.props.isMyAccount) {
													var o = !a.includes(t.get('id')),
														i = '1.3.0' !== t.get('id'),
														c = Y.Z.parseDescription(
															t.getIn(['options', 'description'])
														).market;
													-1 === t.get('symbol').indexOf('OPEN.') ||
														c ||
														(c = 'USDT');
													var d = c || s,
														h = i
															? (0, E.jsx)(_.Z, {
																	to: '/market/'
																		.concat(t.get('symbol'), '_')
																		.concat(d),
																	children: (0, E.jsx)('div', {
																		className: 'portfolio-btn',
																		children: (0, E.jsx)($.Z, {
																			name: 'trade',
																			title: 'icons.trade.trade',
																			className: 'icon-14px',
																		}),
																	}),
															  })
															: p,
														f = l(t, r.props.account),
														y = f.isBitAsset,
														b = f.borrowLink;
													((o && n) || (!o && !n)) &&
														u.push({
															key: t.get('symbol'),
															asset: (0, E.jsx)(We.Z, {asset: t.get('id')}),
															qty: p,
															price: p,
															hour24: p,
															value: p,
															percent: p,
															payments: p,
															deposit: r.props.isMyAccount
																? (0, E.jsx)('span', {
																		children: (0, E.jsx)($.Z, {
																			style: {cursor: 'pointer'},
																			name: 'deposit',
																			title: 'icons.deposit.deposit',
																			className: 'icon-14x',
																			onClick: r._showDepositModal.bind(
																				r,
																				t.get('symbol')
																			),
																		}),
																  })
																: p,
															withdraw: p,
															trade: h,
															borrow: y
																? (0, E.jsx)(at.Z, {
																		placement: 'bottom',
																		title: Z().translate('tooltip.borrow', {
																			asset: t.get('symbol'),
																		}),
																		children: (0, E.jsx)('div', {
																			className: 'inline-block',
																			children: b,
																		}),
																  })
																: p,
															settle: p,
															burn: p,
														});
												}
											}),
									u
								);
							},
						},
						{
							key: '_renderSendModal',
							value: function () {
								var e = this;
								return (0, E.jsx)($l.Z, {
									id: 'send_modal_portfolio',
									refCallback: function (t) {
										t && (e.send_modal = t);
									},
									from_name: this.props.account.get('name'),
									asset_id: this.state.send_asset || '1.3.0',
								});
							},
						},
						{
							key: '_renderBorrowModal',
							value: function () {
								return this.state.borrow &&
									this.state.borrow.quoteAsset &&
									this.state.borrow.backingAsset &&
									this.state.borrow.account &&
									this.state.isBorrowModalVisibleBefore
									? (0, E.jsx)(Ns.Z, {
											visible: this.state.isBorrowModalVisible,
											showModal: this.showBorrowModal,
											hideModal: this.hideBorrowModal,
											accountObj:
												this.state.borrow && this.state.borrow.account,
											quoteAssetObj:
												this.state.borrow && this.state.borrow.quoteAsset,
											backingAssetObj:
												this.state.borrow && this.state.borrow.backingAsset,
									  })
									: null;
							},
						},
						{
							key: '_renderSettleModal',
							value: function () {
								return (0, E.jsx)(eu.Z, {
									visible: this.state.isSettleModalVisible,
									hideModal: this.hideSettleModal,
									showModal: this.showSettleModal,
									asset: this.state.settleAsset,
									account: this.props.account,
								});
							},
						},
						{
							key: 'render',
							value: function () {
								return (0, E.jsx)('div', {
									children: (0, E.jsxs)(Pu, {
										className: 'table dashboard-table table-hover',
										rows: this._renderBalances(
											this.props.balanceList,
											this.props.optionalAssets,
											this.props.visible
										),
										header: this.getHeader(),
										pageSize: 20,
										label: 'utility.total_x_assets',
										extraRow: this.props.extraRow,
										leftPadding: '1.5rem',
										toggleSortOrder: this.toggleSortOrder,
										viewSettings: this.props.viewSettings,
										viewSettingsKey: 'portfolioColumns',
										allowCustomization: !0,
										children: [
											this._renderSendModal(),
											(this.state.isSettleModalVisible ||
												this.state.isSettleModalVisibleBefore) &&
												this._renderSettleModal(),
											this._renderBorrowModal(),
											(this.state.isBurnModalVisible ||
												this.state.isBurnModalVisibleBefore) &&
												(0, E.jsx)(du, {
													visible: this.state.isBurnModalVisible,
													hideModal: this.hideBurnModal,
													asset: this.state.reserve,
													account: this.props.account,
													onClose: function () {
														nu().publish('reserve_asset', 'close');
													},
												}),
										],
									}),
								});
							},
						},
					]),
					n && Mu(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			Eu = (0, u.$)(Eu, {
				listenTo: function () {
					return [i.Z, La.Z];
				},
				getProps: function () {
					return {
						settings: i.Z.getState().settings,
						viewSettings: i.Z.getState().viewSettings,
						allMarketStats: La.Z.getState().allMarketStats,
					};
				},
			});
			const Du = (Eu = (0, sl.Z)(Eu, 50, {leading: !1}));
			var Vu = n(19650);
			function qu(e) {
				return (
					(qu =
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
					qu(e)
				);
			}
			function Fu(e, t) {
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
			function Uu(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Fu(Object(n), !0).forEach(function (t) {
								Lu(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Fu(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Lu(e, t, n) {
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
			function zu(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Wu(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ku(e, t, n) {
				return (
					t && Wu(e.prototype, t),
					n && Wu(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Ju(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Qu(e, t);
			}
			function Qu(e, t) {
				return (
					(Qu =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Qu(e, t)
				);
			}
			function Gu(e) {
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
						r = Xu(e);
					if (t) {
						var o = Xu(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return Yu(this, n);
				};
			}
			function Yu(e, t) {
				if (t && ('object' === qu(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return Hu(e);
			}
			function Hu(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function Xu(e) {
				return (
					(Xu = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Xu(e)
				);
			}
			var $u = {name: 'nfd03i', styles: 'margin-right:1rem'},
				ep = {name: 'nfd03i', styles: 'margin-right:1rem'},
				tp = (function (e) {
					Ju(n, e);
					var t = Gu(n);
					function n(e) {
						var r;
						return (
							zu(this, n),
							((r = t.call(this)).state = {
								shownAssets: e.viewSettings.get('shownAssets', 'active'),
								alwaysShowAssets: ['META1'],
								hideFishingProposals: !0,
								currentDisplay: 'portfolio',
							}),
							(r._handleFilterInput = r._handleFilterInput.bind(Hu(r))),
							r
						);
					}
					return (
						Ku(n, [
							{
								key: '_handleFilterInput',
								value: function (e) {
									this.setState({filterValue: e.target.value});
								},
							},
							{
								key: 'componentWillMount',
								value: function () {
									this._checkMarginStatus();
								},
							},
							{
								key: '_checkMarginStatus',
								value: function () {
									var e = this,
										t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: this.props;
									xc(t.account).then(function (t) {
										var n = null;
										for (var r in t) n = t[r].statusClass || n;
										e.setState({globalMarginStatus: n});
									});
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (e) {
									e.account !== this.props.account &&
										this._checkMarginStatus(e);
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (e, t) {
									return (
										!P.Z.are_equal_shallow(e.balances, this.props.balances) ||
										e.account !== this.props.account ||
										e.isMyAccount !== this.props.isMyAccount ||
										e.settings !== this.props.settings ||
										e.hiddenAssets !== this.props.hiddenAssets ||
										!P.Z.are_equal_shallow(t, this.state) ||
										this.state.filterValue !== t.filterValue ||
										this.state.enabledColumns !== t.enabledColumns
									);
								},
							},
							{
								key: '_changeShownAssets',
								value: function () {
									var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 'active';
									this.setState({shownAssets: e}),
										Ke.Z.changeViewSetting({shownAssets: e});
								},
							},
							{
								key: '_toggleHideProposal',
								value: function () {
									this.setState({
										hideFishingProposals: !this.state.hideFishingProposals,
									});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props,
										n = t.account,
										r = t.hiddenAssets,
										o = t.settings,
										s = t.orders,
										i = this.state.shownAssets;
									if (!n) return null;
									var a,
										c = o.get('unit') || this.props.core_asset.get('symbol'),
										l = [],
										u = {},
										p = {};
									n.toJS &&
										n.has('call_orders') &&
										(l = n.get('call_orders').toJS());
									var d = n.get('balances'),
										f = h().List(),
										y = h().List();
									l.forEach(function (e) {
										var t = de.BQ.getObject(e);
										if (t) {
											var n = t.getIn(['call_price', 'base', 'asset_id']);
											u[n]
												? (u[n] += parseInt(t.get('collateral'), 10))
												: (u[n] = parseInt(t.get('collateral'), 10));
											var r = t.getIn(['call_price', 'quote', 'asset_id']);
											p[r]
												? (p[r] += parseInt(t.get('debt'), 10))
												: (p[r] = parseInt(t.get('debt'), 10));
										}
									}),
										d &&
											(d = d.filter(function (e, t) {
												var n = de.BQ.getObject(e);
												return !(n && !n.get('balance') && !s[t]);
											})).forEach(function (t, n) {
												var o = de.BQ.getAsset(n),
													s = '',
													i = '';
												e.state.filterValue &&
													((i = e.state.filterValue
														? String(e.state.filterValue).toLowerCase()
														: ''),
													(s = o.get('symbol').toLowerCase()),
													P.Z.replaceName(o).isBitAsset && (s = 'bit' + s)),
													r.includes(n) && s.includes(i)
														? (y = y.push(t))
														: s.includes(i) && (f = f.push(t));
											});
									var b = (0, E.jsx)(Rs.Z, {
											noTip: !0,
											balances: y,
											hide_asset: !0,
										}),
										m = (0, E.jsx)(Rs.Z, {
											noTip: !0,
											balances: f,
											hide_asset: !0,
										}),
										g = (0, E.jsx)(Rs.Z, {
											noTip: !0,
											balances: h().List(),
											openOrders: s,
											hide_asset: !0,
										}),
										v =
											((0, E.jsx)(Rs.Z, {
												noTip: !0,
												balances: h().List(),
												debt: p,
												collateral: u,
												hide_asset: !0,
											}),
											(0, E.jsx)(Rs.Z, {
												noTip: !0,
												balances: h().List(),
												debt: p,
												hide_asset: !0,
											}),
											(0, E.jsx)(Rs.Z, {
												noTip: !0,
												balances: h().List(),
												collateral: u,
												hide_asset: !0,
											}),
											(0, E.jsx)(zs.Z, {
												noLink: !0,
												string: 'account.total',
												keys: [{type: 'asset', value: c, arg: 'asset'}],
											})),
										_ = (0, E.jsxs)(
											'span',
											{className: 'total-value', children: [v, ': ', m]},
											'portfolio'
										),
										j = (0, E.jsxs)(
											'span',
											{className: 'total-value', children: [v, ': ', b]},
											'portfolio'
										);
									(a = (0, E.jsx)(Du, {
										balanceList: f,
										optionalAssets: this.state.filterValue
											? null
											: this.state.alwaysShowAssets,
										visible: !0,
										preferredUnit: c,
										coreAsset: this.props.core_asset,
										coreSymbol: this.props.core_asset.get('symbol'),
										hiddenAssets: r,
										orders: s,
										account: this.props.account,
										isMyAccount: this.props.isMyAccount,
										balances: this.props.balances,
										extraRow: _,
										viewSettings: this.props.viewSettings,
									})),
										(0, E.jsx)(Du, {
											balanceList: y,
											optionalAssets: this.state.filterValue
												? null
												: this.state.alwaysShowAsset,
											visible: !1,
											preferredUnit: c,
											coreSymbol: this.props.core_asset.get('symbol'),
											settings: o,
											hiddenAssets: r,
											orders: s,
											account: this.props.account,
											isMyAccount: this.props.isMyAccount,
											balances: this.props.balances,
											extraRow: j,
											viewSettings: this.props.viewSettings,
											enabledColumns: this.state.enabledColumns,
										});
									var w = function (t) {
											e.setState({currentDisplay: t});
										},
										k = this.state.currentDisplay;
									return (0, E.jsxs)(E.Fragment, {
										children: [
											(0, E.jsxs)('div', {
												css: function (e) {
													return {
														borderBottom: '1px solid '.concat(
															e.colors.borderColor,
															' '
														),
													};
												},
												children: [
													(0, E.jsx)(lo.Z, {
														title: 'Your Assets',
														showDivider: !1,
														level: 4,
													}),
													(0, E.jsxs)('div', {
														css: function (e) {
															return {
																display: 'flex',
																width: '100%',
																justifyContent: 'space-between',
																padding: '0rem 2rem 1.5rem 2rem',
															};
														},
														children: [
															(0, E.jsxs)(Vu.Z, {
																wrap: !0,
																children: [
																	(0, E.jsx)(Au.Z, {
																		buttonType:
																			'portfolio' === k
																				? 'primary'
																				: 'transparent',
																		onClick: function () {
																			w('portfolio');
																		},
																		children: (0, E.jsx)(x(), {
																			content: 'account.portfolio',
																		}),
																	}),
																	(0, E.jsx)(Au.Z, {
																		buttonType:
																			'openOrders' === k
																				? 'primary'
																				: 'transparent',
																		onClick: function () {
																			w('openOrders');
																		},
																		children: 'Open Orders',
																	}),
																	(0, E.jsx)(Au.Z, {
																		buttonType:
																			'transactionHistory' === k
																				? 'primary'
																				: 'transparent',
																		onClick: function () {
																			w('transactionHistory');
																		},
																		children: 'Transaction History',
																	}),
																],
															}),
															(0, E.jsx)(Vu.Z, {
																align: 'start',
																children: (0, E.jsx)(Au.Z, {
																	buttonType: 'primary',
																	onClick: function () {
																		return e.props.history.push(
																			'/onramperwallet'
																		);
																	},
																	children: 'Fund Accounts',
																}),
															}),
														],
													}),
												],
											}),
											(0, E.jsxs)('div', {
												css: function (e) {
													return {padding: '1rem  2rem'};
												},
												children: [
													'portfolio' === k &&
														(0, E.jsxs)(E.Fragment, {
															children: [
																(0, E.jsxs)('div', {
																	className: 'header-selector',
																	css: function (e) {
																		return {marginBottom: '1rem'};
																	},
																	children: [
																		(0, E.jsx)('div', {
																			className: 'filter inline-block',
																			children: (0, E.jsx)(nn.Z, {
																				value: this.state.filterValue,
																				onChange: this._handleFilterInput,
																			}),
																		}),
																		(0, E.jsxs)('div', {
																			className: 'selector inline-block',
																			style: {position: 'relative', top: '8px'},
																			children: [
																				(0, E.jsx)(Au.Z, {
																					css: $u,
																					buttonType:
																						'active' === i
																							? 'primary'
																							: 'transparent',
																					onClick:
																						'active' != i
																							? this._changeShownAssets.bind(
																									this,
																									'active'
																							  )
																							: function () {},
																					children: (0, E.jsx)(x(), {
																						content: 'account.hide_hidden',
																					}),
																				}),
																				y.size
																					? (0, E.jsx)(Au.Z, {
																							css: ep,
																							buttonType:
																								'hidden' === i
																									? 'primary'
																									: 'transparent',
																							onClick:
																								'hidden' != i
																									? this._changeShownAssets.bind(
																											this,
																											'hidden'
																									  )
																									: function () {},
																							children: (0, E.jsx)(x(), {
																								content: 'account.show_hidden',
																							}),
																					  })
																					: null,
																				(0, E.jsx)(Au.Z, {
																					buttonType:
																						'visual' === i
																							? 'primary'
																							: 'transparent',
																					onClick:
																						'visual' != i
																							? this._changeShownAssets.bind(
																									this,
																									'visual'
																							  )
																							: function () {},
																					children: (0, E.jsx)(x(), {
																						content: 'account.show_visual',
																					}),
																				}),
																			],
																		}),
																	],
																}),
																(0, E.jsx)('div', {
																	children:
																		'visual' != i
																			? 'hidden' === i && y.size
																				? 'hiddenPortfolioList'
																				: a
																			: (0, E.jsx)(ol, {balanceObjects: f}),
																}),
															],
														}),
													'openOrders' === k &&
														(0, E.jsx)(
															_c,
															Uu(
																Uu({}, this.props),
																{},
																{
																	children: (0, E.jsxs)('div', {
																		className: 'total-value',
																		children: [
																			(0, E.jsx)('span', {
																				className: 'text',
																				children: v,
																			}),
																			(0, E.jsx)('span', {
																				className: 'value',
																				children: g,
																			}),
																		],
																	}),
																}
															)
														),
													'transactionHistory' === k &&
														(0, E.jsx)(Cr.t, {
															accountsList: h().fromJS([n.get('id')]),
															compactView: !1,
															showMore: !0,
															fullHeight: !0,
															limit: 100,
															showFilters: !0,
															dashboard: !0,
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
			tp = (0, H.Z)(tp, {propNames: ['core_asset']});
			var np = (function (e) {
				Ju(n, e);
				var t = Gu(n);
				function n() {
					return zu(this, n), t.apply(this, arguments);
				}
				return (
					Ku(n, [
						{
							key: 'render',
							value: function () {
								return (0, E.jsx)(Ic, Uu(Uu({}, this.props), {}, {wrap: tp}));
							},
						},
					]),
					n
				);
			})(r.Component);
			function rp(e) {
				return (
					(rp =
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
					rp(e)
				);
			}
			function op(e, t) {
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
			function sp(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? op(Object(n), !0).forEach(function (t) {
								fp(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: op(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function ip(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ap(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function cp(e, t, n) {
				return (
					t && ap(e.prototype, t),
					n && ap(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function lp(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && up(e, t);
			}
			function up(e, t) {
				return (
					(up =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					up(e, t)
				);
			}
			function pp(e) {
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
						r = hp(e);
					if (t) {
						var o = hp(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return dp(this, n);
				};
			}
			function dp(e, t) {
				if (t && ('object' === rp(t) || 'function' == typeof t)) return t;
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
			function hp(e) {
				return (
					(hp = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					hp(e)
				);
			}
			function fp(e, t, n) {
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
			var yp = (function (e) {
				lp(n, e);
				var t = pp(n);
				function n(e) {
					return ip(this, n), t.call(this, e);
				}
				return (
					cp(n, [
						{
							key: 'componentDidMount',
							value: function () {
								this.props.account &&
									(o.Z.setCurrentAccount.defer(this.props.account.get('name')),
									p.Z.getPossibleFees(this.props.account, 'transfer'));
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								if (e.account) {
									var t = e.account.get('name'),
										n = this.props.account && this.props.account.get('name');
									(this.props.account && t === n) ||
										(o.Z.setCurrentAccount.defer(t),
										p.Z.getPossibleFees(e.account, 'transfer'));
								}
							},
						},
						{
							key: 'componentDidUpdate',
							value: function (e) {
								var t = this.props,
									n = t.currentAccount,
									r = t.history,
									o = t.location;
								if (e.currentAccount !== n && n) {
									var s = o.pathname.split('/');
									(s[2] = n), r.push(s.join('/'));
								}
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.myActiveAccounts,
									n = e.searchAccounts,
									r = e.settings,
									o = e.wallet_locked,
									i = e.account,
									a = e.hiddenAssets;
								if (!i) return (0, E.jsx)(f.Z, {});
								var c = this.props.account.get('name'),
									l = {
										account_name: c,
										myActiveAccounts: t,
										searchAccounts: n,
										settings: r,
										wallet_locked: o,
										account: i,
										isMyAccount: s.Z.isMyAccount(i),
										hiddenAssets: a,
										contained: !0,
										balances: i.get('balances', (0, d.List)()).toList(),
										orders: i.get('orders', (0, d.List)()).toList(),
										viewSettings: this.props.viewSettings,
										proxy: i.getIn(['options', 'voting_account']),
										history: this.props.history,
									};
								return (0, E.jsx)('div', {
									className: 'no-padding',
									children: (0, E.jsxs)(y.Z, {
										children: [
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c),
												exact: !0,
												render: function () {
													return (0, E.jsx)(np, sp({}, l));
												},
											}),
											(0, E.jsx)(m.Z, {
												from: '/account/'.concat(c, '/overview'),
												to: '/account/'.concat(c),
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/assets'),
												exact: !0,
												render: function () {
													return (0, E.jsx)(ce, sp({}, l));
												},
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/create-asset'),
												exact: !0,
												render: function () {
													return (0, E.jsx)(Ne, sp({}, l));
												},
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/update-asset/:asset'),
												exact: !0,
												render: function () {
													return (0, E.jsx)(Ct, sp({}, l));
												},
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/member-stats'),
												exact: !0,
												render: function () {
													return (0, E.jsx)(Xt, sp({}, l));
												},
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/vesting'),
												exact: !0,
												render: function () {
													return (0, E.jsx)(dn, sp({}, l));
												},
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/permissions'),
												exact: !0,
												render: function () {
													return (0, E.jsx)(Br, sp({}, l));
												},
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/voting/:tab'),
												render: function () {
													return (0, E.jsx)(Ms, sp({}, l));
												},
											}),
											(0, E.jsx)(m.Z, {
												from: '/account/'.concat(c, '/voting'),
												to: '/account/'.concat(c, '/voting/witnesses'),
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/whitelist'),
												exact: !0,
												render: function () {
													return (0, E.jsx)(Oo, sp({}, l));
												},
											}),
											(0, E.jsx)(b.Z, {
												path: '/account/'.concat(c, '/signedmessages'),
												exact: !0,
												render: function () {
													return (0, E.jsx)(oo, sp({}, l));
												},
											}),
										],
									}),
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			fp(yp, 'propTypes', {account: c.Z.ChainAccount.isRequired}),
				(yp = (0, l.Z)(yp, {show_loader: !0}));
			var bp = (function (e) {
				lp(n, e);
				var t = pp(n);
				function n() {
					return ip(this, n), t.apply(this, arguments);
				}
				return (
					cp(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props.match.params.account_name;
								return (0, E.jsx)(yp, sp(sp({}, this.props), {}, {account: e}));
							},
						},
					]),
					n
				);
			})(r.Component);
			const mp = (0, u.$)(bp, {
				listenTo: function () {
					return [s.Z, i.Z, a.Z];
				},
				getProps: function () {
					return {
						myActiveAccounts: s.Z.getState().myActiveAccounts,
						searchAccounts: s.Z.getState().searchAccounts,
						currentAccount:
							s.Z.getState().currentAccount || s.Z.getState().passwordAccount,
						settings: i.Z.getState().settings,
						hiddenAssets: i.Z.getState().hiddenAssets,
						wallet_locked: a.Z.getState().locked,
						viewSettings: i.Z.getState().viewSettings,
					};
				},
			});
		},
		98652: (e, t, n) => {
			'use strict';
			n.d(t, {Z: () => Z});
			var r = n(67294),
				o = n(58074),
				s = n.n(o),
				i = n(17076),
				a = n(97891),
				c = n(43393),
				l = n.n(c),
				u = n(112),
				p = n.n(u),
				d = n(31403),
				h = n(40840),
				f = n(45697),
				y = n.n(f),
				b = n(31143),
				m = n(35944);
			function g(e) {
				return (
					(g =
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
					g(e)
				);
			}
			function v(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function _(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function j(e, t, n) {
				return (
					t && _(e.prototype, t),
					n && _(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function x(e, t) {
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
						r = S(e);
					if (t) {
						var o = S(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return O(this, n);
				};
			}
			function O(e, t) {
				if (t && ('object' === g(t) || 'function' == typeof t)) return t;
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
			function C(e, t, n) {
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
			var P = (function (e) {
				x(n, e);
				var t = k(n);
				function n() {
					return v(this, n), t.apply(this, arguments);
				}
				return (
					j(n, [
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return (
									!h.Z.are_equal_shallow(e.assets, this.props.assets) ||
									e.value !== this.props.value ||
									e.scroll_length !== this.props.scroll_length
								);
							},
						},
						{
							key: 'render',
							value: function () {
								return this.props.assets.length
									? (0, m.jsx)(a.Z, {
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
												? (0, m.jsx)(i.Z, {
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
			C(P, 'propTypes', {
				value: y().string,
				onChange: y().func,
				scroll_length: y().number,
			}),
				(P = (0, d.Z)(P, {asList: !0}));
			var A = (function (e) {
				x(n, e);
				var t = k(n);
				function n() {
					return v(this, n), t.apply(this, arguments);
				}
				return (
					j(n, [
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
								return (0, m.jsxs)('div', {
									className: 'amount-selector',
									style: this.props.style,
									children: [
										(0, m.jsx)('label', {
											className: 'right-label',
											children: this.props.display_balance,
										}),
										(0, m.jsx)(s(), {
											className: 'left-label',
											component: 'label',
											content: this.props.label,
										}),
										(0, m.jsxs)('div', {
											className: 'inline-label input-wrapper',
											children: [
												(0, m.jsx)('input', {
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
												(0, m.jsx)('div', {
													style: {marginTop: '-10px'},
													className: 'form-label select floating-dropdown',
													children: this.props.isPrice
														? (0, m.jsx)('div', {
																className: 'dropdown-wrapper inactive',
																children: (0, m.jsxs)('div', {
																	children: [
																		this.props.asset.get('symbol'),
																		'/',
																		this.props.base,
																	],
																}),
														  })
														: (0, m.jsx)(P, {
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
			})(b.C);
			C(A, 'propTypes', {
				label: y().string,
				assets: y().array,
				amount: y().any,
				placeholder: y().string,
				onChange: y().func,
				tabIndex: y().number,
				error: y().string,
				scroll_length: y().number,
			}),
				C(A, 'defaultProps', {disabled: !1, tabIndex: 0});
			const Z = (A = (0, d.Z)(A));
		},
		33042: (e, t, n) => {
			'use strict';
			n.d(t, {Z: () => N});
			var r = n(67294),
				o = n(58074),
				s = n.n(o),
				i = n(52233),
				a = n(8564),
				c = n(79876),
				l = n(112),
				u = n.n(l),
				p = n(97891),
				d = n(17076),
				h = n(43393),
				f = n.n(h),
				y = n(94184),
				b = n.n(y),
				m = n(31403),
				g = n(45697),
				v = n.n(g),
				_ = n(35944);
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
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function w(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function k(e, t, n) {
				return (
					t && w(e.prototype, t),
					n && w(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function O(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && S(e, t);
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
			function C(e) {
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
						r = A(e);
					if (t) {
						var o = A(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return P(this, n);
				};
			}
			function P(e, t) {
				if (t && ('object' === j(t) || 'function' == typeof t)) return t;
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
			var M = (function (e) {
				O(n, e);
				var t = C(n);
				function n() {
					return x(this, n), t.apply(this, arguments);
				}
				return (
					k(n, [
						{
							key: 'render',
							value: function () {
								return 0 !== this.props.assets.length && this.props.value
									? (0, _.jsx)(p.Z, {
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
												? (0, _.jsx)(d.Z, {
														asset: this.props.assets[0].get('id'),
														amount: 0,
														hide_amount: !0,
												  })
												: null,
											value: '',
											onChange: this.props.onChange,
									  })
									: null;
							},
						},
					]),
					n
				);
			})(r.Component);
			Z(M, 'propTypes', {value: v().string, onChange: v().func}),
				(M = (0, m.Z)(M, {asList: !0}));
			var R = (function (e) {
				O(n, e);
				var t = C(n);
				function n() {
					return x(this, n), t.apply(this, arguments);
				}
				return (
					k(n, [
						{
							key: 'getAsset',
							value: function () {
								return this.props.asset;
							},
						},
						{
							key: 'getError',
							value: function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.props.assetInput,
									t = this.props.error;
								return (
									t ||
										!e ||
										this.getNameType(e) ||
										(t = u().translate('explorer.asset.invalid', {name: e})),
									t
								);
							},
						},
						{
							key: 'getNameType',
							value: function (e) {
								return e
									? i.Jr.is_valid_symbol_error(e, !0)
										? null
										: 'symbol'
									: null;
							},
						},
						{
							key: 'onInputChanged',
							value: function (e) {
								var t = e.target.value.trim().substr(0, 16).toUpperCase();
								this.props.onChange &&
									t !== this.props.assetInput &&
									this.props.onChange(t);
							},
						},
						{
							key: 'onKeyDown',
							value: function (e) {
								13 === e.keyCode && (this.onFound(e), this.onAction(e));
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this.props.onFound &&
									this.props.asset &&
									this.props.onFound(this.props.asset);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								this.props.onFound &&
									e.asset !== this.props.asset &&
									this.props.onFound(e.asset);
							},
						},
						{
							key: 'onFound',
							value: function (e) {
								e.preventDefault(),
									!this.props.onFound ||
										this.getError() ||
										this.props.disableActionButton ||
										(this.props.asset && this.props.onFound(this.props.asset));
							},
						},
						{
							key: 'onAssetSelect',
							value: function (e) {
								e &&
									(this.props.onFound(e), this.props.onChange(e.get('symbol')));
							},
						},
						{
							key: 'onAction',
							value: function (e) {
								e.preventDefault(),
									!this.props.onAction ||
										this.getError() ||
										this.props.disableActionButton ||
										(this.props.asset && this.props.onAction(this.props.asset));
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t = this.props,
									n = t.disabled,
									r = t.noLabel,
									o = this.getError();
								n ||
									(this.props.asset
										? (e = this.props.asset.get('symbol'))
										: !o &&
										  this.props.assetInput &&
										  (o = u().translate('explorer.asset.not_found', {
												name: this.props.assetInput,
										  })));
								var i = b()('button', {
									disabled:
										!this.props.asset || o || this.props.disableActionButton,
								});
								return (0, _.jsx)('div', {
									className: 'asset-selector',
									style: this.props.style,
									children: (0, _.jsxs)('div', {
										children: [
											(0, _.jsxs)('div', {
												className: 'header-area',
												children: [
													o || r
														? null
														: (0, _.jsxs)('label', {
																className: 'right-label',
																children: [
																	'  ',
																	(0, _.jsx)('span', {children: e}),
																],
														  }),
													(0, _.jsx)(s(), {
														component: 'label',
														content: this.props.label,
													}),
												],
											}),
											(0, _.jsx)('div', {
												className: 'input-area',
												children: (0, _.jsxs)('div', {
													className: 'inline-label input-wrapper',
													children: [
														(0, _.jsx)('input', {
															style: this.props.inputStyle,
															disabled: this.props.disabled,
															type: 'text',
															value: this.props.assetInput || '',
															placeholder:
																this.props.placeholder ||
																u().translate('explorer.assets.symbol'),
															ref: 'user_input',
															onChange: this.onInputChanged.bind(this),
															onKeyDown: this.onKeyDown.bind(this),
															tabIndex: this.props.tabIndex,
														}),
														(0, _.jsx)('div', {
															className: 'form-label select floating-dropdown',
															children: this.props.asset
																? (0, _.jsx)(M, {
																		ref: this.props.refCallback,
																		value: this.props.asset.get('symbol'),
																		assets: f().List(this.props.assets),
																		onChange: this.onAssetSelect.bind(this),
																  })
																: null,
														}),
														this.props.children,
														this.props.onAction
															? (0, _.jsx)('button', {
																	className: i,
																	onClick: this.onAction.bind(this),
																	children: (0, _.jsx)(s(), {
																		content: this.props.action_label,
																	}),
															  })
															: null,
													],
												}),
											}),
											(0, _.jsx)('div', {
												className: 'error-area',
												style: {paddingBottom: '10px'},
												children: (0, _.jsx)('span', {
													style: {wordBreak: 'break-all'},
													children: o,
												}),
											}),
										],
									}),
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			Z(R, 'propTypes', {
				label: v().string,
				error: v().string,
				placeholder: v().string,
				onChange: v().func,
				onFound: v().func,
				assetInput: v().string,
				asset: a.Z.ChainAsset,
				tabIndex: v().number,
				disableActionButton: v().bool,
			}),
				Z(R, 'defaultProps', {disabled: !1});
			const N = (0, c.Z)(R);
		},
		12267: (e, t, n) => {
			'use strict';
			n.d(t, {G: () => q, i: () => V});
			var r = n(67294),
				o = n(17076),
				s = n(8564),
				i = n(79876),
				a = n(31403),
				c = n(40840),
				l = n(11230),
				u = n(15644),
				p = n(58074),
				d = n.n(p),
				h = n(112),
				f = n.n(h),
				y = n(96168),
				b = n(47397),
				m = n(91654),
				g = n(61580),
				v = n(35944);
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
			var j = ['amount', 'toAsset', 'fromAsset', 'fullPrecision'],
				x = ['refCallback'],
				w = ['balance'];
			function k(e, t) {
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
			function O(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? k(Object(n), !0).forEach(function (t) {
								E(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: k(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function S(e, t) {
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
			}
			function C(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
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
			function A(e, t, n) {
				return (
					t && P(e.prototype, t),
					n && P(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Z() {
				return (
					(Z =
						'undefined' != typeof Reflect && Reflect.get
							? Reflect.get
							: function (e, t, n) {
									var r = M(e, t);
									if (r) {
										var o = Object.getOwnPropertyDescriptor(r, t);
										return o.get
											? o.get.call(arguments.length < 3 ? e : n)
											: o.value;
									}
							  }),
					Z.apply(this, arguments)
				);
			}
			function M(e, t) {
				for (
					;
					!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = B(e));

				);
				return e;
			}
			function R(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && N(e, t);
			}
			function N(e, t) {
				return (
					(N =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					N(e, t)
				);
			}
			function I(e) {
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
						r = B(e);
					if (t) {
						var o = B(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return T(this, n);
				};
			}
			function T(e, t) {
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
			function B(e) {
				return (
					(B = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					B(e)
				);
			}
			function E(e, t, n) {
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
			var D = (function (e) {
				R(n, e);
				var t = I(n);
				function n(e) {
					return C(this, n), t.call(this, e);
				}
				return (
					A(n, [
						{
							key: 'componentDidMount',
							value: function () {
								y.Z.rebuild();
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e) {
								return (
									Z(B(n.prototype), 'shouldComponentUpdate', this).call(
										this,
										e
									) ||
									!c.Z.are_equal_shallow(e.pulsate, this.props.pulsate) ||
									e.toAsset !== this.props.toAsset ||
									e.fromAsset !== this.props.fromAsset ||
									e.amount !== this.props.amount
								);
							},
						},
						{
							key: 'getValue',
							value: function () {
								var e = this.props,
									t = e.amount,
									n = e.toAsset,
									r = e.fromAsset,
									o = e.fullPrecision,
									s = e.allMarketStats,
									i = e.coreAsset;
								return m.Z.convertValue(t, n, r, s, i, o);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.amount,
									n = e.toAsset,
									r = e.fromAsset,
									s = e.fullPrecision,
									i = S(e, j),
									a = n.get('id'),
									l = n.get('symbol');
								s || (t = c.Z.get_asset_amount(t, r));
								var u = this.getValue();
								return u || 0 === u
									? (0, v.jsx)(
											o.Z,
											O(
												{
													noPrefix: !0,
													amount: u,
													asset: a,
													decimalOffset:
														-1 !== l.indexOf('BTC')
															? 4
															: this.props.fullDecimals
															? 0
															: this.props.noDecimals
															? n.get('precision')
															: n.get('precision') - 2,
												},
												i
											)
									  )
									: (0, v.jsx)(g.Z, {
											placement: 'bottom',
											title: f().translate('tooltip.no_price'),
											children: (0, v.jsx)('div', {
												className: 'tooltip inline-block',
												style: {fontSize: '0.9rem'},
												children: (0, v.jsx)(d(), {
													content: 'account.no_price',
												}),
											}),
									  });
							},
						},
					]),
					n
				);
			})(b.Z);
			E(D, 'defaultProps', {
				fullPrecision: !0,
				noDecimals: !1,
				fullDecimals: !1,
				hide_asset: !1,
			}),
				(D = (0, a.Z)(D, {
					propNames: ['toAsset', 'fromAsset', 'coreAsset'],
					defaultProps: {toAsset: '1.3.0', coreAsset: '1.3.0'},
				}));
			var V = (function (e) {
				R(n, e);
				var t = I(n);
				function n() {
					return C(this, n), t.apply(this, arguments);
				}
				return (
					A(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.refCallback,
									n = S(e, x);
								return (0, v.jsx)(D, O(O({}, n), {}, {ref: t}));
							},
						},
					]),
					n
				);
			})(r.Component);
			V = (0, l.$)(V, {
				listenTo: function () {
					return [u.Z];
				},
				getProps: function () {
					return {allMarketStats: u.Z.getState().allMarketStats};
				},
			});
			var q = (function (e) {
				R(n, e);
				var t = I(n);
				function n() {
					return C(this, n), t.apply(this, arguments);
				}
				return (
					A(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props,
									t = e.balance,
									n = S(e, w),
									r = !!t.getIn(['balance', 'amount']),
									o = Number(
										r ? t.getIn(['balance', 'amount']) : t.get('balance')
									),
									s = r
										? t.getIn(['balance', 'asset_id'])
										: t.get('asset_type');
								return isNaN(o)
									? (0, v.jsx)('span', {children: '--'})
									: (0, v.jsx)(
											V,
											O({amount: o, fromAsset: s, noDecimals: !0}, n)
									  );
							},
						},
					]),
					n
				);
			})(r.Component);
			E(q, 'propTypes', {balance: s.Z.ChainObject.isRequired}),
				(q = (0, i.Z)(q, {keep_updating: !0}));
		},
		51785: (e) => {
			e.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAACsCAMAAADBhmxaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMiaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4MDlENzFGMzUwQzExRThBODQ4RTZGMTEwMDhCNDBCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4MDlENzIwMzUwQzExRThBODQ4RTZGMTEwMDhCNDBCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzgwOUQ3MUQzNTBDMTFFOEE4NDhFNkYxMTAwOEI0MEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzgwOUQ3MUUzNTBDMTFFOEE4NDhFNkYxMTAwOEI0MEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7e79/CAAADAFBMVEVMaXEvLjI7NzMtLTIxMDI0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';
		},
		54397: (e) => {
			e.exports =
				'data:image/png;base64,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';
		},
	},
]);
