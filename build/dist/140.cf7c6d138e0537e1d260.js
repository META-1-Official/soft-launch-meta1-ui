'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[140],
	{
		62849: (e, t, n) => {
			n.d(t, {Z: () => m});
			var s = n(67294),
				r = n(45697),
				o = n.n(r),
				a = n(55019),
				i = n(112),
				c = n.n(i),
				u = n(89583),
				l = n(35944),
				_ = [
					'onChange',
					'value',
					'placeholder',
					'maxLength',
					'style',
					'className',
					'name',
					'autoComplete',
					'onClear',
					'type',
				];
			function f(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					t &&
						(s = s.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, s);
				}
				return n;
			}
			function p(e, t, n) {
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
			var d = s.createRef();
			function m(e) {
				var t = e.onChange,
					n = e.value,
					s = e.placeholder,
					r = e.maxLength,
					o = e.style,
					i = e.className,
					c = e.name,
					m = e.autoComplete,
					y = e.onClear,
					g = e.type,
					h = (function (e, t) {
						if (null == e) return {};
						var n,
							s,
							r = (function (e, t) {
								if (null == e) return {};
								var n,
									s,
									r = {},
									o = Object.keys(e);
								for (s = 0; s < o.length; s++)
									(n = o[s]), t.indexOf(n) >= 0 || (r[n] = e[n]);
								return r;
							})(e, t);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(e);
							for (s = 0; s < o.length; s++)
								(n = o[s]),
									t.indexOf(n) >= 0 ||
										(Object.prototype.propertyIsEnumerable.call(e, n) &&
											(r[n] = e[n]));
						}
						return r;
					})(e, _);
				return (
					null == y &&
						(y = function () {
							t({target: {value: ''}}), d.current.focus();
						}),
					(0, l.jsx)(
						a.Z,
						(function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2
									? f(Object(n), !0).forEach(function (t) {
											p(e, t, n[t]);
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
						})(
							{
								ref: d,
								autoComplete: m,
								style: o,
								type: g,
								className: i + ' search-input',
								placeholder: s,
								maxLength: r,
								name: c,
								value: n,
								onChange: t,
								addonAfter: (0, l.jsx)(u.U41, {
									css: function (e) {
										return {color: e.colors.primaryColor};
									},
								}),
								suffix: y
									? (0, l.jsx)(u.GjQ, {
											onClick: y,
											type: 'close',
											className: n ? 'cursor-pointer' : 'hide',
									  })
									: (0, l.jsx)('span', {}),
							},
							h
						)
					)
				);
			}
			(m.propTypes = {
				onChange: o().func.isRequired,
				value: o().string,
				placeholder: o().string,
				style: o().object,
				className: o().string,
				type: o().string,
				name: o().string,
				autoComplete: o().string,
				maxLength: o().number,
				onClear: o().func,
			}),
				(m.defaultProps = {
					placeholder: c().translate('exchange.filter'),
					style: {width: '200px'},
					className: '',
					type: 'text',
					name: 'focus',
					autoComplete: 'off',
					maxLength: 16,
					onClear: void 0,
				});
		},
		71665: (e, t, n) => {
			n.d(t, {Z: () => m});
			var s = n(51614),
				r = n(18825),
				o = n(40840),
				a = n(350),
				i = n(37065),
				c = n(52233),
				u = n(44431),
				l = n.n(u),
				_ = n(25108);
			function f(e, t) {
				for (var n = 0; n < t.length; n++) {
					var s = t[n];
					(s.enumerable = s.enumerable || !1),
						(s.configurable = !0),
						'value' in s && (s.writable = !0),
						Object.defineProperty(e, s.key, s);
				}
			}
			var p = {},
				d = (function () {
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
										s = e.mcr,
										r = e.mssr,
										o = e.feedPrice,
										c = e.cer,
										u = a.Z.new_transaction();
									return (
										u.add_type_operation('asset_publish_feed', {
											publisher: t,
											asset_id: n,
											feed: {
												settlement_price: o.toObject(),
												maintenance_collateral_ratio: s,
												maximum_short_squeeze_ratio: r,
												core_exchange_rate: c.toObject(),
											},
										}),
										function (e) {
											return i.Z.process_transaction(u, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													_.log('----- fundPool error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'fundPool',
								value: function (e, t, n, s) {
									var r = a.Z.new_transaction(),
										c = o.Z.get_asset_precision(t.get('precision'));
									return (
										r.add_type_operation('asset_fund_fee_pool', {
											fee: {amount: 0, asset_id: '1.3.0'},
											from_account: e,
											asset_id: n.get('id'),
											amount: s * c,
										}),
										function (e) {
											return i.Z.process_transaction(r, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													_.log('----- fundPool error -----\x3e', t), e(!1);
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
													_.log('----- claimPool error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'bidCollateral',
								value: function (e, t, n, s, r) {
									var c = o.Z.get_asset_precision(t.get('precision')),
										u = o.Z.get_asset_precision(n.get('precision')),
										l = a.Z.new_transaction();
									return (
										l.add_type_operation('bid_collateral', {
											fee: {amount: 0, asset_id: '1.3.0'},
											bidder: e,
											additional_collateral: {
												amount: s * c,
												asset_id: t.get('id'),
											},
											debt_covered: {amount: r * u, asset_id: n.get('id')},
											extensions: [],
										}),
										function (e) {
											return i.Z.process_transaction(l, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													_.log('----- collateralBid error -----\x3e', t),
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
													_.log('----- updateOwner error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'updateFeedProducers',
								value: function (e, t, n) {
									var s = a.Z.new_transaction();
									return (
										s.add_type_operation('asset_update_feed_producers', {
											fee: {amount: 0, asset_id: '1.3.0'},
											issuer: e,
											asset_to_update: t.get('id'),
											new_feed_producers: n,
										}),
										function (e) {
											return i.Z.process_transaction(s, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													_.log('----- updateFeedProducers error -----\x3e', t),
														e(!1);
												});
										}
									);
								},
							},
							{
								key: 'claimPoolFees',
								value: function (e, t, n) {
									var s = a.Z.new_transaction();
									return (
										s.add_type_operation('asset_claim_fees', {
											fee: {amount: 0, asset_id: 0},
											issuer: e,
											amount_to_claim: {
												asset_id: t.get('id'),
												amount: n.getAmount(),
											},
										}),
										function (e) {
											return i.Z.process_transaction(s, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													_.log('----- claimFees error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'assetGlobalSettle',
								value: function (e, t, n) {
									var s = a.Z.new_transaction();
									return (
										s.add_type_operation('asset_global_settle', {
											fee: {amount: 0, asset_id: 0},
											issuer: t,
											asset_to_settle: e.id,
											settle_price: n,
										}),
										function (e) {
											return i.Z.process_transaction(s, null, !0)
												.then(function () {
													e(!0);
												})
												.catch(function (t) {
													_.log(
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
								value: function (e, t, n, s, r, u, f, p, d) {
									_.log(
										'create asset:',
										t,
										'flags:',
										n,
										'isBitAsset:',
										u,
										'bitasset_opts:',
										p
									);
									var m = a.Z.new_transaction(),
										y = o.Z.get_asset_precision(t.precision);
									l().config({DECIMAL_PLACES: t.precision});
									var g = new (l())(t.max_supply).times(y).toString(),
										h = new (l())(t.max_market_fee || 0).times(y).toString(),
										b = o.Z.get_asset_precision(
											c.BQ.getAsset(r.base.asset_id).get('precision')
										),
										v = {
											fee: {amount: 0, asset_id: 0},
											issuer: e,
											symbol: t.symbol,
											precision: parseInt(t.precision, 10),
											common_options: {
												max_supply: g,
												market_fee_percent: 100 * t.market_fee_percent || 0,
												max_market_fee: h,
												issuer_permissions: s,
												flags: n,
												core_exchange_rate: {
													base: {
														amount: r.base.amount * b,
														asset_id: r.base.asset_id,
													},
													quote: {
														amount: r.quote.amount * y,
														asset_id: '1.3.1',
													},
												},
												whitelist_authorities: [],
												blacklist_authorities: [],
												whitelist_markets: [],
												blacklist_markets: [],
												description: d,
												extensions: {
													reward_percent: 100 * t.reward_percent || 0,
													whitelist_market_fee_sharing: [],
												},
											},
											is_prediction_market: f,
											extensions: null,
										};
									return (
										u && (v.bitasset_opts = p),
										m.add_type_operation('asset_create', v),
										function (e) {
											return i.Z.process_transaction(m, null, !0)
												.then(function (t) {
													e(!0);
												})
												.catch(function (t) {
													_.log('----- createAsset error -----\x3e', t), e(!1);
												});
										}
									);
								},
							},
							{
								key: 'updateAsset',
								value: function (e, t, n, s, r, u, f, p, d, m, y, g, h, b, v) {
									var w = a.Z.new_transaction();
									if (v) {
										var k = o.Z.get_asset_precision(r.get('precision'));
										l().config({DECIMAL_PLACES: r.get('precision')});
										var x = new (l())(n.max_supply).times(k).toString(),
											O = new (l())(n.max_market_fee || 0).times(k).toString(),
											j = c.BQ.getAsset(s.quote.asset_id),
											Z = o.Z.get_asset_precision(j.get('precision')),
											A = c.BQ.getAsset(s.base.asset_id),
											P = o.Z.get_asset_precision(A.get('precision')),
											S = new (l())(s.quote.amount).times(Z).toString(),
											C = new (l())(s.base.amount).times(P).toString(),
											L = r.getIn(['options', 'extensions']).toJS();
										void 0 !== n.reward_percent &&
											(L.reward_percent = 100 * n.reward_percent),
											g.whitelist_market_fee_sharing &&
												(L.whitelist_market_fee_sharing =
													g.whitelist_market_fee_sharing.toJS());
										var E = {
											fee: {amount: 0, asset_id: 0},
											asset_to_update: r.get('id'),
											extensions: r.get('extensions'),
											issuer: e,
											new_issuer: t,
											new_options: {
												max_supply: x,
												max_market_fee: O,
												market_fee_percent: 100 * n.market_fee_percent,
												description: y,
												issuer_permissions: f,
												flags: u,
												whitelist_authorities: g.whitelist_authorities.toJS(),
												blacklist_authorities: g.blacklist_authorities.toJS(),
												whitelist_markets: g.whitelist_markets.toJS(),
												blacklist_markets: g.blacklist_markets.toJS(),
												extensions: L,
												core_exchange_rate: {
													quote: {amount: S, asset_id: s.quote.asset_id},
													base: {amount: C, asset_id: s.base.asset_id},
												},
											},
										};
										(e !== t && t) || delete E.new_issuer,
											w.add_type_operation('asset_update', E);
									}
									if (
										(_.log('bitasset_opts:', d, 'original_bitasset_opts:', m),
										p &&
											(d.feed_lifetime_sec !== m.feed_lifetime_sec ||
												d.minimum_feeds !== m.minimum_feeds ||
												d.force_settlement_delay_sec !==
													m.force_settlement_delay_sec ||
												d.force_settlement_offset_percent !==
													m.force_settlement_offset_percent ||
												d.maximum_force_settlement_volume !==
													m.maximum_force_settlement_volume ||
												d.short_backing_asset !== m.short_backing_asset))
									) {
										var B = {
											fee: {amount: 0, asset_id: 0},
											asset_to_update: r.get('id'),
											issuer: e,
											new_options: d,
										};
										w.add_type_operation('asset_update_bitasset', B);
									}
									return (
										_.log('feedProducers:', h, 'originalFeedProducers:', b),
										p &&
											!o.Z.are_equal_shallow(h, b) &&
											w.add_type_operation('asset_update_feed_producers', {
												fee: {amount: 0, asset_id: '1.3.0'},
												issuer: e,
												asset_to_update: r.get('id'),
												new_feed_producers: h,
											}),
										i.Z.process_transaction(w, null, !0)
											.then(function (e) {
												return _.log('asset create result:', e), !0;
											})
											.catch(function (e) {
												return (
													_.log('----- updateAsset error -----\x3e', e), !1
												);
											})
									);
								},
							},
							{
								key: 'getAssetList',
								value: function (e, t) {
									var n = this,
										s =
											arguments.length > 2 &&
											void 0 !== arguments[2] &&
											arguments[2],
										o = e + '_' + t;
									return function (a) {
										if (!p[o]) {
											var i;
											(p[o] = !0),
												a({loading: !0}),
												(i = r.yX
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
														var s = r.yX
																.instance()
																.db_api()
																.exec('get_objects', [n]),
															i =
																t.length > 0
																	? r.yX
																			.instance()
																			.db_api()
																			.exec('get_objects', [t])
																	: null;
														Promise.all([s, i]).then(function (t) {
															return (
																delete p[o],
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
														_.log('Error in AssetActions.getAssetList: ', e),
															a({loading: !1}),
															delete p[o];
													}));
											var u = Object.keys({
												META1: {
													id: 'META1',
													name: 'META1',
													selected: !1,
													options: {enabled: !1, selected: !1},
												},
											});
											return (
												s &&
													u.forEach(function (t) {
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
													var s = c.BQ.getAsset(e);
													s && n({assets: [s], searchID: t, symbol: e});
												}, 200);
										  };
								},
							},
							{
								key: 'reserveAsset',
								value: function (e, t, n) {
									var s = a.Z.new_transaction();
									return (
										s.add_type_operation('asset_reserve', {
											fee: {amount: 0, asset_id: 0},
											amount_to_reserve: {amount: e, asset_id: t},
											payer: n,
											extensions: [],
										}),
										function (e) {
											return i.Z.process_transaction(s, null, !0)
												.then(function () {
													return e(!0), !0;
												})
												.catch(function (t) {
													return (
														e(!1),
														_.log('----- reserveAsset error -----\x3e', t),
														!1
													);
												});
										}
									);
								},
							},
						]),
						n && f(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e
					);
				})();
			const m = s.Z.createActions(d);
		},
		46194: (e, t, n) => {
			n.d(t, {Z: () => d});
			var s = n(91725),
				r = n(43393),
				o = n.n(r),
				a = n(51614),
				i = n(71665);
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
			function u(e, t) {
				for (var n = 0; n < t.length; n++) {
					var s = t[n];
					(s.enumerable = s.enumerable || !1),
						(s.configurable = !0),
						'value' in s && (s.writable = !0),
						Object.defineProperty(e, s.key, s);
				}
			}
			function l(e, t) {
				return (
					(l =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					l(e, t)
				);
			}
			function _(e, t) {
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
			var p = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && l(e, t);
				})(c, e);
				var t,
					n,
					s,
					r,
					a =
						((s = c),
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
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = f(s);
							if (r) {
								var n = f(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return _(this, e);
						});
				function c() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, c),
						((e = a.call(this)).assets = o().Map()),
						(e.asset_symbol_to_id = {}),
						(e.searchTerms = {}),
						(e.lookupResults = []),
						(e.assetsLoading = !1),
						e.bindListeners({
							onGetAssetList: i.Z.getAssetList,
							onLookupAsset: i.Z.lookupAsset,
						}),
						e
					);
				}
				return (
					(t = c),
					(n = [
						{
							key: 'onGetAssetList',
							value: function (e) {
								var t = this;
								if (!e) return !1;
								(this.assetsLoading = e.loading),
									e.assets &&
										e.assets.forEach(function (n) {
											for (var s = 0; s < e.dynamic.length; s++)
												if (e.dynamic[s].id === n.dynamic_asset_data_id) {
													n.dynamic = e.dynamic[s];
													break;
												}
											if (n.bitasset_data_id) {
												for (
													n.market_asset = !0, s = 0;
													s < e.bitasset_data.length;
													s++
												)
													if (e.bitasset_data[s].id === n.bitasset_data_id) {
														n.bitasset_data = e.bitasset_data[s];
														break;
													}
											} else n.market_asset = !1;
											(t.assets = t.assets.set(n.id, n)),
												(t.asset_symbol_to_id[n.symbol] = n.id);
										});
							},
						},
						{
							key: 'onLookupAsset',
							value: function (e) {
								(this.searchTerms[e.searchID] = e.symbol),
									(this.lookupResults = e.assets);
							},
						},
					]) && u(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					c
				);
			})(s.Z);
			const d = a.Z.createStore(p, 'AssetStore');
		},
	},
]);
