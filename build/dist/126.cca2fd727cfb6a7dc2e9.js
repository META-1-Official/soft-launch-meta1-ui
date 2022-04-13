'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[126],
	{
		81915: (e, t, n) => {
			n.d(t, {Z: () => Oe});
			var r = n(67294),
				s = n(43393),
				o = n.n(s),
				i = n(95891),
				a = n.n(i),
				l = n(40840),
				c = n(58074),
				u = n.n(c),
				p = n(54115),
				h = n(11230),
				f = n(17076),
				d = n(31403),
				y = n(8564),
				m = n(79876),
				b = n(35944);
			function v(e) {
				return (
					(v =
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
					v(e)
				);
			}
			function g(e, t) {
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
			function j(e, t) {
				if (t && ('object' === v(t) || 'function' == typeof t)) return t;
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
			function _(e) {
				return (
					(_ = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					_(e)
				);
			}
			function S(e, t, n) {
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
			var w = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && x(e, t);
				})(i, e);
				var t,
					n,
					r,
					s,
					o =
						((r = i),
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
								t = _(r);
							if (s) {
								var n = _(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return j(this, e);
						});
				function i() {
					return g(this, i), o.apply(this, arguments);
				}
				return (
					(t = i),
					(n = [
						{
							key: 'render',
							value: function () {
								return this.props.account
									? (0, b.jsx)('span', {
											children: this.props.account.get('name'),
									  })
									: null;
							},
						},
					]) && k(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(r.Component);
			S(w, 'propTypes', {account: y.Z.ChainObject.isRequired}),
				S(w, 'defaultProps', {autosubscribe: !1});
			const M = (0, m.Z)(w);
			var O = n(41185),
				C = n(17772),
				T = n(60521),
				B = n(24300),
				P = n(61580);
			function A(e) {
				return (
					(A =
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
					A(e)
				);
			}
			function Z(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
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
			function I(e, t) {
				if (t && ('object' === A(t) || 'function' == typeof t)) return t;
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
			function q(e) {
				return (
					(q = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					q(e)
				);
			}
			var R,
				E,
				D,
				L = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && N(e, t);
					})(i, e);
					var t,
						n,
						r,
						s,
						o =
							((r = i),
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
									t = q(r);
								if (s) {
									var n = q(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return I(this, e);
							});
					function i() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, i),
							((e = o.call(this)).statsInterval = null),
							e
						);
					}
					return (
						(t = i),
						(n = [
							{
								key: '_onClick',
								value: function (e) {
									'/market/'.concat(e) !== this.props.location.pathname &&
										(C.Z.switchMarket(),
										this.props.history.push('/market/'.concat(e)));
								},
							},
							{
								key: 'componentDidMount',
								value: function () {
									(this.statsChecked = new Date()),
										(this.statsInterval = C.Z.getMarketStatsInterval(
											35e3,
											this.props.base,
											this.props.quote
										));
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this.statsInterval && this.statsInterval();
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (e) {
									return !l.Z.are_equal_shallow(e, this.props);
								},
							},
							{
								key: '_onStar',
								value: function (e, t, n) {
									n.preventDefault(),
										this.props.starred
											? T.Z.removeStarMarket(e, t)
											: T.Z.addStarMarket(e, t);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props,
										n = t.quote,
										r = t.base,
										s = (t.noSymbols, t.stats),
										o = t.starred;
									if (!n || !r) return null;
									var i = n.get('symbol') + '_' + r.get('symbol'),
										a = n.get('symbol') + ':' + r.get('symbol'),
										c = this.props.getDynamicObject(
											n.get('dynamic_asset_data_id')
										),
										u = this.props.getDynamicObject(
											r.get('dynamic_asset_data_id')
										),
										p = l.Z.convertPrice(n, r),
										h = {};
									this.props.leftAlign && (h.textAlign = 'left');
									var d = 'button outline',
										y = null;
									this.props.compact &&
										((d += ' no-margin'),
										(y = {
											marginBottom: 0,
											fontSize: '0.75rem',
											padding: '4px 10px',
											borderRadius: '0px',
											letterSpacing: '0.05rem',
										}));
									var m = this.props.columns
											.map(function (t) {
												switch (t.name) {
													case 'star':
														var h = o ? 'gold-star' : 'grey-star';
														return (0,
														b.jsx)('td', {onClick: e._onStar.bind(e, n.get('symbol'), r.get('symbol')), children: (0, b.jsx)(O.Z, {className: h, name: 'fi-star', title: 'icons.fi_star.symbol'})}, t.index);
													case 'vol':
														var m = s ? s.volumeBase : 0;
														return (0,
														b.jsx)('td', {onClick: e._onClick.bind(e, i), className: 'text-right', children: l.Z.format_volume(m)}, t.index);
													case 'change':
														var v = l.Z.format_number(
																s && s.change ? s.change : 0,
																2
															),
															g =
																'0.00' === v
																	? ''
																	: v > 0
																	? 'change-up'
																	: 'change-down';
														return (0,
														b.jsx)('td', {onClick: e._onClick.bind(e, i), className: 'text-right ' + g, children: v + '%'}, t.index);
													case 'marketName':
														return (0,
														b.jsx)('td', {onClick: e._onClick.bind(e, i), children: (0, b.jsx)('div', {className: d, style: y, children: a})}, t.index);
													case 'market':
														return (0,
														b.jsx)('td', {onClick: e._onClick.bind(e, i), children: e.props.name}, t.index);
													case 'price':
														var k =
																s && s.price
																	? s.price.toReal()
																	: s &&
																	  s.close &&
																	  s.close.quote.amount &&
																	  s.close.base.amount
																	? l.Z.get_asset_price(
																			s.close.quote.amount,
																			n,
																			s.close.base.amount,
																			r,
																			!0
																	  )
																	: l.Z.get_asset_price(
																			p.quote.amount,
																			n,
																			p.base.amount,
																			r,
																			!0
																	  ),
															x = 6;
														return (
															-1 !==
																[
																	'BTC',
																	'OPEN.BTC',
																	'TRADE.BTC',
																	'GOLD',
																	'SILVER',
																].indexOf(r.get('symbol')) && (x = 8),
															(0, b.jsx)(
																'td',
																{
																	onClick: e._onClick.bind(e, i),
																	className: 'text-right',
																	children: l.Z.format_number(
																		k,
																		k > 1e3 ? 0 : k > 10 ? 2 : x
																	),
																},
																t.index
															)
														);
													case 'quoteSupply':
														return (0,
														b.jsx)('td', {onClick: e._onClick.bind(e, i), children: c ? (0, b.jsx)(f.Z, {style: {fontWeight: 'bold'}, amount: parseInt(c.get('current_supply'), 10), asset: n.get('id')}) : null}, t.index);
													case 'baseSupply':
														return (0,
														b.jsx)('td', {onClick: e._onClick.bind(e, i), children: u ? (0, b.jsx)(f.Z, {style: {fontWeight: 'bold'}, amount: parseInt(u.get('current_supply'), 10), asset: r.get('id')}) : null}, t.index);
													case 'issuer':
														return (0,
														b.jsx)('td', {onClick: e._onClick.bind(e, i), children: (0, b.jsx)(M, {account: n.get('issuer')})}, t.index);
													case 'add':
														return (0,
														b.jsx)('td', {style: {textAlign: 'right'}, onClick: e.props.onCheckMarket.bind(e, i), children: (0, b.jsx)(P.Z, {title: e.props.isDefault ? 'This market is a default market and cannot be removed' : null, children: (0, b.jsx)('input', {type: 'checkbox', checked: !!e.props.isChecked || e.props.isDefault, disabled: e.props.isDefault})})}, t.index);
													case 'remove':
														return (0,
														b.jsx)('td', {className: 'clickable', onClick: e.props.removeMarket, children: (0, b.jsx)('span', {style: {marginBottom: '6px', marginRight: '6px', zIndex: 999}, className: 'text float-right remove', children: '–'})}, t.index);
												}
											})
											.sort(function (e, t) {
												return e.key > t.key;
											}),
										v = 'clickable';
									return (
										this.props.current && (v += ' activeMarket'),
										(0, b.jsx)('tr', {className: v, style: h, children: m})
									);
								},
							},
						]) && Z(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						i
					);
				})(r.Component);
			(D = {noSymbols: !1}),
				(E = 'defaultProps') in (R = L)
					? Object.defineProperty(R, E, {
							value: D,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (R[E] = D),
				(L = (0, B.Z)(L));
			const W = (0, d.Z)(L, {
				propNames: ['quote', 'base'],
				defaultProps: {tempComponent: 'tr'},
				withDynamic: !0,
			});
			var F = n(96520),
				U = n(15644),
				V = n(46194),
				z = n(12615),
				Q = n(71665),
				H = n(94184),
				G = n.n(H),
				J = n(99111),
				K = n(33042),
				$ = n(112),
				X = n.n($),
				Y = n(674),
				ee = n(52233),
				te = n(80563),
				ne = n(8174),
				re = n(71577);
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
			function ie(e, t) {
				return (
					(ie =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ie(e, t)
				);
			}
			function ae(e, t) {
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
			function le(e) {
				return (
					(le = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					le(e)
				);
			}
			var ce = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && ie(e, t);
					})(i, e);
					var t,
						n,
						r,
						s,
						o =
							((r = i),
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
									t = le(r);
								if (s) {
									var n = le(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return ae(this, e);
							});
					function i() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, i),
							((e = o.call(this)).state = {
								backingAsset: '',
								error: !1,
								valid: !1,
							}),
							e
						);
					}
					return (
						(t = i),
						(n = [
							{
								key: '_onMoveUp',
								value: function (e) {
									var t = this.props.quotes.findIndex(function (t) {
										return t === e;
									});
									T.Z.modifyPreferedBases({oldIndex: t, newIndex: t - 1});
								},
							},
							{
								key: '_onMoveDown',
								value: function (e) {
									var t = this.props.quotes.findIndex(function (t) {
										return t === e;
									});
									T.Z.modifyPreferedBases({oldIndex: t, newIndex: t + 1});
								},
							},
							{
								key: '_onRemove',
								value: function (e) {
									var t = this.props.quotes.findIndex(function (t) {
										return t === e;
									});
									t >= 0 && T.Z.modifyPreferedBases({remove: t});
								},
							},
							{
								key: '_onAdd',
								value: function (e) {
									-1 ===
										this.props.quotes.findIndex(function (t) {
											return t === e.get('symbol');
										}) && T.Z.modifyPreferedBases({add: e.get('symbol')});
								},
							},
							{
								key: '_onInputBackingAsset',
								value: function (e) {
									this.setState({backingAsset: e.toUpperCase(), error: null});
								},
							},
							{
								key: '_onFoundBackingAsset',
								value: function (e) {
									e &&
										(this.props.quotes.includes(e.get('symbol'))
											? this.setState({
													error: 'Asset already being used',
													isValid: !1,
											  })
											: this.setState({isValid: !0}));
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.state.error,
										n = this.props.quotes.size;
									return (0, b.jsx)(ne.Z, {
										title: X().translate('exchange.quote_selection'),
										closable: !1,
										visible: this.props.visible,
										id: 'quote_selection',
										overlay: !0,
										onCancel: this.props.hideModal,
										footer: [
											(0, b.jsx)(re.Z, {
												onClick: this.props.hideModal,
												children: X().translate('modal.close'),
											}),
										],
										children: (0, b.jsxs)('section', {
											className: 'no-border-bottom',
											children: [
												(0, b.jsxs)('table', {
													className: 'table',
													children: [
														(0, b.jsx)('thead', {
															children: (0, b.jsxs)('tr', {
																children: [
																	(0, b.jsx)('th', {}),
																	(0, b.jsx)('th', {
																		children: (0, b.jsx)(u(), {
																			content: 'account.quote',
																		}),
																	}),
																	(0, b.jsx)('th', {
																		style: {textAlign: 'center'},
																		children: (0, b.jsx)(u(), {
																			content: 'exchange.move_down',
																		}),
																	}),
																	(0, b.jsx)('th', {
																		style: {textAlign: 'center'},
																		children: (0, b.jsx)(u(), {
																			content: 'exchange.move_up',
																		}),
																	}),
																	(0, b.jsx)('th', {
																		style: {textAlign: 'center'},
																		children: (0, b.jsx)(u(), {
																			content: 'exchange.remove',
																		}),
																	}),
																],
															}),
														}),
														(0, b.jsx)('tbody', {
															children: this.props.quotes.map(function (t, r) {
																return (0,
																b.jsxs)('tr', {children: [(0, b.jsx)('td', {children: r + 1}), (0, b.jsx)('td', {children: t}), (0, b.jsx)('td', {className: 'text-center', children: r !== n - 1 && (0, b.jsx)(O.Z, {onClick: e._onMoveDown.bind(e, t), name: 'chevron-down', className: 'clickable'})}), (0, b.jsx)('td', {className: 'text-center', children: 0 !== r && (0, b.jsx)(O.Z, {onClick: e._onMoveUp.bind(e, t), name: 'chevron-down', className: 'clickable rotate180'})}), (0, b.jsx)('td', {className: 'text-center', children: n > 1 && (0, b.jsx)(O.Z, {onClick: e._onRemove.bind(e, t), name: 'cross-circle', className: 'clickable'})})]}, t);
															}),
														}),
													],
												}),
												(0, b.jsx)('br', {}),
												(0, b.jsxs)('div', {
													children: [
														(0, b.jsx)(K.Z, {
															label: 'exchange.custom_quote',
															onChange: this._onInputBackingAsset.bind(this),
															asset: this.state.backingAsset,
															assetInput: this.state.backingAsset,
															tabIndex: 1,
															style: {width: '100%', paddingRight: '10px'},
															onFound: this._onFoundBackingAsset.bind(this),
															onAction: this._onAdd.bind(this),
															action_label: 'exchange.add_quote',
															disableActionButton: !!t,
															noLabel: !0,
														}),
														(0, b.jsx)('div', {
															className: 'error-area',
															children: t,
														}),
													],
												}),
											],
										}),
									});
								},
							},
						]) && oe(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						i
					);
				})(r.Component),
				ue = n(62849);
			function pe(e) {
				return (
					(pe =
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
					pe(e)
				);
			}
			function he(e, t) {
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
			function fe(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function de(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ye(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function me(e, t, n) {
				return (
					t && ye(e.prototype, t),
					n && ye(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function be(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && ve(e, t);
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
			function ge(e) {
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
						r = je(e);
					if (t) {
						var s = je(this).constructor;
						n = Reflect.construct(r, arguments, s);
					} else n = r.apply(this, arguments);
					return ke(this, n);
				};
			}
			function ke(e, t) {
				if (t && ('object' === pe(t) || 'function' == typeof t)) return t;
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
			var Se = (function (e) {
				be(n, e);
				var t = ge(n);
				function n(e) {
					var r;
					return (
						de(this, n), ((r = t.call(this)).state = r._getInitialState(e)), r
					);
				}
				return (
					me(n, [
						{
							key: '_getInitialState',
							value: function (e) {
								var t =
									!!e.findMarketTab ||
									e.viewSettings.get('myMarketsBase_'.concat(e.index));
								return {
									open: void 0 === t || t,
									inverseSort: e.viewSettings.get('myMarketsInvert', !0),
									sortBy: e.viewSettings.get('myMarketsSort', 'volume'),
								};
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								e.findMarketTab !== this.props.findMarketTab &&
									this.setState(this._getInitialState(e));
							},
						},
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return !(
									e.markets &&
									this.props.markets &&
									l.Z.are_equal_shallow(t, this.state) &&
									l.Z.are_equal_shallow(e.markets, this.props.markets) &&
									e.starredMarkets === this.props.starredMarkets &&
									e.marketStats === this.props.marketStats &&
									e.userMarkets === this.props.userMarkets
								);
							},
						},
						{
							key: '_inverseSort',
							value: function () {
								T.Z.changeViewSetting({
									myMarketsInvert: !this.state.myMarketsInvert,
								}),
									this.setState({inverseSort: !this.state.inverseSort});
							},
						},
						{
							key: '_changeSort',
							value: function (e) {
								e !== this.state.sortBy
									? (T.Z.changeViewSetting({myMarketsSort: e}),
									  this.setState({sortBy: e}))
									: this._inverseSort();
							},
						},
						{
							key: '_onToggle',
							value: function () {
								if (!this.props.findMarketTab) {
									var e = !this.state.open;
									this.setState({open: e});
									var t = {};
									(t['myMarketsBase_'.concat(this.props.index)] = e),
										T.Z.changeViewSetting(t);
								}
							},
						},
						{
							key: '_onToggleUserMarket',
							value: function (e) {
								var t,
									n,
									r =
										((t = e.split('_')),
										(n = 2),
										(function (e) {
											if (Array.isArray(e)) return e;
										})(t) ||
											(function (e, t) {
												var n =
													null == e
														? null
														: ('undefined' != typeof Symbol &&
																e[Symbol.iterator]) ||
														  e['@@iterator'];
												if (null != n) {
													var r,
														s,
														o = [],
														i = !0,
														a = !1;
													try {
														for (
															n = n.call(e);
															!(i = (r = n.next()).done) &&
															(o.push(r.value), !t || o.length !== t);
															i = !0
														);
													} catch (e) {
														(a = !0), (s = e);
													} finally {
														try {
															i || null == n.return || n.return();
														} finally {
															if (a) throw s;
														}
													}
													return o;
												}
											})(t, n) ||
											(function (e, t) {
												if (e) {
													if ('string' == typeof e) return fe(e, t);
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
															? fe(e, t)
															: void 0
													);
												}
											})(t, n) ||
											(function () {
												throw new TypeError(
													'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
												);
											})()),
									s = r[0],
									o = r[1],
									i = !this.props.userMarkets.get(e);
								T.Z.setUserMarket(s, o, i);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props,
									n = t.columns,
									r = t.markets,
									s = t.base,
									o = t.marketStats,
									i = t.starredMarkets,
									a = t.current,
									l = this.state,
									c = l.sortBy,
									p = l.inverseSort,
									h = l.open;
								if (!r || !r.length) return null;
								var f = n.map(function (t) {
										switch (t.name) {
											case 'market':
												return (0,
												b.jsx)('th', {className: 'clickable', onClick: e._changeSort.bind(e, 'name'), children: (0, b.jsx)(u(), {content: 'exchange.market'})}, t.name);
											case 'vol':
												return (0,
												b.jsx)('th', {className: 'clickable', onClick: e._changeSort.bind(e, 'volume'), children: (0, b.jsx)(u(), {content: 'exchange.vol_short'})}, t.name);
											case 'price':
												return (0,
												b.jsx)('th', {children: (0, b.jsx)(u(), {content: 'exchange.price'})}, t.name);
											case 'quoteSupply':
												return (0,
												b.jsx)('th', {children: (0, b.jsx)(u(), {content: 'exchange.base_supply'})}, t.name);
											case 'baseSupply':
												return (0,
												b.jsx)('th', {children: (0, b.jsx)(u(), {content: 'exchange.quote_supply'})}, t.name);
											case 'change':
												return (0,
												b.jsx)('th', {className: 'clickable', onClick: e._changeSort.bind(e, 'change'), children: (0, b.jsx)(u(), {content: 'exchange.change'})}, t.name);
											case 'issuer':
												return (0,
												b.jsx)('th', {children: (0, b.jsx)(u(), {content: 'explorer.assets.issuer'})}, t.name);
											case 'add':
												return (0,
												b.jsx)('th', {style: {textAlign: 'right'}, children: (0, b.jsx)(u(), {content: 'account.perm.confirm_add'})}, t.name);
											default:
												return (0, b.jsx)('th', {}, t.name);
										}
									}),
									d = r
										.map(function (t) {
											return e.props.onlyLiquid &&
												o.get(t.id) &&
												0 == o.get(t.id).volumeBase
												? null
												: (0, b.jsx)(
														W,
														{
															name:
																'others' === s
																	? (0, b.jsxs)('span', {
																			children: [
																				(0, b.jsx)(z.Z, {name: t.quote}),
																				':',
																				(0, b.jsx)(z.Z, {name: t.base}),
																			],
																	  })
																	: (0, b.jsx)(z.Z, {
																			dataPlace: 'left',
																			name: t.quote,
																	  }),
															quote: t.quote,
															base: t.base,
															columns: n,
															leftAlign: !0,
															compact: !0,
															noSymbols: !0,
															stats: o.get(t.id),
															starred: i.has(t.id),
															current: a === t.id,
															isChecked: e.props.userMarkets.has(t.id),
															isDefault:
																e.props.defaultMarkets &&
																e.props.defaultMarkets.has(t.id),
															onCheckMarket: e._onToggleUserMarket.bind(e),
															location: e.props.location,
															history: e.props.history,
														},
														t.id
												  );
										})
										.filter(function (e) {
											return null !== e;
										})
										.sort(function (e, t) {
											var n = e.key.split('_'),
												r = t.key.split('_'),
												s = o.get(n[0] + '_' + n[1]),
												i = o.get(r[0] + '_' + r[1]);
											switch (c) {
												case 'name':
													return n[0] > r[0]
														? p
															? -1
															: 1
														: n[0] < r[0]
														? p
															? 1
															: -1
														: n[1] > r[1]
														? p
															? -1
															: 1
														: n[1] < r[1]
														? p
															? 1
															: -1
														: 0;
												case 'volume':
													return s && i
														? p
															? i.volumeBase - s.volumeBase
															: s.volumeBase - i.volumeBase
														: 0;
												case 'change':
													return s && i
														? p
															? i.change - s.change
															: s.change - i.change
														: 0;
											}
										});
								return (0, b.jsx)('div', {
									style: {paddingRight: 10},
									children: h
										? (0, b.jsxs)('table', {
												className: 'table table-hover text-right',
												children: [
													(0, b.jsx)('thead', {
														children: (0, b.jsx)('tr', {children: f}),
													}),
													d && d.length
														? (0, b.jsx)('tbody', {children: d})
														: null,
												],
										  })
										: null,
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			_e(Se, 'defaultProps', {maxRows: 20, onlyLiquid: !1});
			var we = (function (e) {
				be(r, e);
				var t = ge(r);
				function r(e) {
					var n;
					return (
						de(this, r),
						_e(xe((n = t.call(this))), 'clearInput', function () {
							n.setState({myMarketFilter: ''});
						}),
						_e(xe(n), 'handleSearchUpdate', function (e) {
							n.setState({
								myMarketFilter: e.target.value && e.target.value.toUpperCase(),
							});
						}),
						(n.state = {
							isQuoteModalVisible: !1,
							inverseSort: e.viewSettings.get('myMarketsInvert', !0),
							sortBy: e.viewSettings.get('myMarketsSort', 'volume'),
							activeTab: e.viewSettings.get('favMarketTab', 'my-market'),
							activeMarketTab: e.viewSettings.get('activeMarketTab', 0),
							lookupQuote: null,
							lookupBase: null,
							inputValue: '',
							minWidth: '100%',
							findBaseInput: 'USDT',
							activeFindBase: 'USDT',
						}),
						(n._setMinWidth = n._setMinWidth.bind(xe(n))),
						(n.getAssetList = (0, J.Z)(Q.Z.getAssetList.defer, 150)),
						(n.showQuoteModal = n.showQuoteModal.bind(xe(n))),
						(n.hideQuoteModal = n.hideQuoteModal.bind(xe(n))),
						n
					);
				}
				return (
					me(r, [
						{
							key: 'shouldComponentUpdate',
							value: function (e, t) {
								return (
									'find-market' === this.state.activeTab ||
										'find-market' !== t.activeTab ||
										e.searchAssets.size ||
										this._lookupAssets('OPEN.', !0),
									this.state.activeTab !== t.activeTab
										? this._changeTab(t.activeTab)
										: e.tabHeader ||
										  this.state.activeTab === e.activeTab ||
										  this._changeTab(e.activeTab),
									!(
										o().is(e.searchAssets, this.props.searchAssets) &&
										o().is(e.markets, this.props.markets) &&
										o().is(e.starredMarkets, this.props.starredMarkets) &&
										o().is(e.defaultMarkets, this.props.defaultMarkets) &&
										o().is(e.marketStats, this.props.marketStats) &&
										l.Z.are_equal_shallow(t, this.state) &&
										e.current === this.props.current &&
										e.minWidth === this.props.minWidth &&
										e.listHeight === this.props.listHeight &&
										e.preferredBases === this.props.preferredBases &&
										e.onlyStars === this.props.onlyStars &&
										e.onlyLiquid === this.props.onlyLiquid &&
										e.assetsLoading === this.props.assetsLoading &&
										e.userMarkets === this.props.userMarkets
									)
								);
							},
						},
						{
							key: 'componentWillMount',
							value: function () {
								if (
									(this.props.setMinWidth &&
										window.addEventListener('resize', this._setMinWidth, {
											capture: !1,
											passive: !0,
										}),
									this.props.currrent)
								) {
									var e = this.props.current.split('_')[1],
										t = this.props.preferredBases.findIndex(function (t) {
											return t === e;
										});
									-1 !== t &&
										t !== this.state.activeMarketTab &&
										this.setState({activeMarketTab: t});
								}
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								var e = this,
									t = this.refs.favorites;
								a().initialize(t),
									this._setMinWidth(),
									'find-market' === this.state.activeTab &&
										this._lookupAssets('OPEN.', !0),
									this.state.activeTab !== this.props.activeTab &&
										setTimeout(function () {
											e._changeTab(e.props.activeTab);
										}, 100);
							},
						},
						{
							key: 'componentWillUnmount',
							value: function () {
								this.props.setMinWidth &&
									window.removeEventListener('resize', this._setMinWidth),
									clearTimeout(this.timer);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								this.props.myMarketTab &&
									!e.myMarketTab &&
									this.refs.findSearchInput &&
									this.refs.findSearchInput.focus();
							},
						},
						{
							key: 'hideQuoteModal',
							value: function () {
								this.setState({isQuoteModalVisible: !1});
							},
						},
						{
							key: 'showQuoteModal',
							value: function () {
								this.setState({isQuoteModalVisible: !0});
							},
						},
						{
							key: '_setMinWidth',
							value: function () {
								this.props.setMinWidth &&
									this.refs.favorites &&
									'my-market' === this.props.activeTab &&
									this.state.minWidth !== this.refs.favorites.offsetWidth &&
									this.setState({minWidth: this.refs.favorites.offsetWidth});
							},
						},
						{
							key: 'componentDidUpdate',
							value: function () {
								if (this.refs.favorites) {
									var e = this.refs.favorites;
									a().update(e);
								}
							},
						},
						{
							key: '_inverseSort',
							value: function () {
								T.Z.changeViewSetting({
									myMarketsInvert: !this.state.myMarketsInvert,
								}),
									this.setState({inverseSort: !this.state.inverseSort});
							},
						},
						{
							key: '_changeSort',
							value: function (e) {
								e !== this.state.sortBy
									? (T.Z.changeViewSetting({myMarketsSort: e}),
									  this.setState({sortBy: e}))
									: this._inverseSort();
							},
						},
						{
							key: '_goMarkets',
							value: function () {
								this.props.history.push('/markets');
							},
						},
						{
							key: '_changeTab',
							value: function (e) {
								T.Z.changeViewSetting({favMarketTab: e}),
									this.setState({activeTab: e}),
									this._setMinWidth();
							},
						},
						{
							key: '_onInputName',
							value: function (e, t) {
								var n = this,
									r = t.target.value.trim().toUpperCase(),
									s = !ee.Jr.is_valid_symbol_error(r, !0);
								this.setState({inputValue: r}),
									(r && r.length >= 2 && !s) ||
										(this.state.inputValue !== r &&
											this.timer &&
											clearTimeout(this.timer),
										(this.timer = setTimeout(function () {
											n._lookupAssets(r, e);
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
									var n = e.toUpperCase().split(':'),
										r = n[0],
										s = 2 === n.length ? n[1] : null;
									this.setState({lookupQuote: r, lookupBase: s}),
										T.Z.changeViewSetting.defer({
											marketLookupInput: e.toUpperCase(),
										}),
										this.getAssetList(r, 50, t);
								}
							},
						},
						{
							key: 'toggleActiveMarketTab',
							value: function (e) {
								T.Z.changeViewSetting({activeMarketTab: e}),
									this.setState({activeMarketTab: e});
							},
						},
						{
							key: '_onInputBaseAsset',
							value: function (e) {
								this.setState({findBaseInput: e.toUpperCase(), error: null});
							},
						},
						{
							key: '_onFoundBaseAsset',
							value: function (e) {
								e && this.setState({activeFindBase: e.get('symbol')});
							},
						},
						{
							key: '_getMarkets',
							value: function () {
								var e = this.props,
									t = e.searchAssets,
									n = e.defaultMarkets,
									r = e.onlyStars,
									s = e.userMarkets,
									i = e.preferredBases,
									a = e.starredMarkets,
									l = this.state,
									c = l.activeTab,
									u = l.lookupQuote,
									p = l.lookupBase,
									h = l.myMarketFilter,
									f = l.activeMarketTab,
									d = this._getBases(),
									y = [],
									m = {},
									b = [],
									v = 'my-market' === c;
								t.size &&
									t
										.filter(function (e) {
											try {
												if (e.options.description) {
													var t = JSON.parse(e.options.description);
													if ('visible' in t && !t.visible) return !1;
												}
											} catch (e) {}
											return (
												-1 !== e.symbol.indexOf(u) &&
												e.symbol.length >= u.length
											);
										})
										.forEach(function (e) {
											d.forEach(function (t) {
												var n = e.symbol + '_' + t;
												t !== e.symbol &&
													y.push([n, {quote: e.symbol, base: t}]);
											});
										}),
									(y = y.filter(function (e) {
										return !p || e[1].quote === u;
									}));
								var g = v ? n : o().Map(y);
								if (
									(v &&
										s.size &&
										s.forEach(function (e, t) {
											g.has(t) || (g = g.set(t, e));
										}),
									g.size > 0)
								) {
									var k = v ? i.get(f) : this.state.activeFindBase,
										x = (function (e, t, n, s, o) {
											return {
												otherMarkets: n
													.filter(function (e) {
														if (e.base === e.quote) return !1;
														if (v) {
															var t = e.quote + '_' + e.base;
															return h
																? -1 !== t.indexOf(h)
																: !(r && !a.has(t));
														}
														return !(u.length < 1) && -1 !== e.quote.indexOf(u);
													})
													.map(function (n) {
														var r = n.quote + '_' + n.base;
														if (-1 !== t.indexOf(n.base)) {
															s[e] || (s[e] = []);
															var o = {id: r, quote: n.quote, base: n.base};
															return (
																s[e].find(function (e) {
																	return e.id === r;
																}) || s[e].push(o),
																null
															);
														}
														if (!i.includes(n.base))
															return {id: r, quote: n.quote, base: n.base};
													})
													.filter(function (e) {
														return !!e;
													})
													.take(v ? 100 : 20)
													.toArray()
													.concat(o),
												baseGroups: s,
											};
										})(k, [k], g, m, b);
									(b = x.otherMarkets), (m = x.baseGroups);
								}
								return {baseGroups: m, otherMarkets: b};
							},
						},
						{
							key: '_getBases',
							value: function () {
								var e = this.props,
									t = e.preferredBases,
									n = e.searchAssets,
									r = this.state,
									s = r.lookupQuote,
									o = r.lookupBase,
									i = n
										.filter(function (e) {
											return o && o.length
												? 0 === e.symbol.indexOf(o)
												: -1 !== e.symbol.indexOf(s);
										})
										.map(function (e) {
											if (o && o.length) {
												if (0 === e.symbol.indexOf(o)) return e.symbol;
											} else if (t.includes(e.symbol) && e.symbol.length >= s.length && e.symbol.length < s.length + 3) return e.symbol;
										})
										.filter(function (e) {
											return !!e;
										})
										.toArray();
								return (i = i.concat(
									t
										.filter(function (e) {
											return !o || !o.length || 0 === e.indexOf(o);
										})
										.toArray()
								)).filter(function (e) {
									return !(o && o.length > 1) || 0 === e.indexOf(o);
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = this.props,
									r = t.starredMarkets,
									s = t.marketStats,
									o = t.columns,
									i = t.assetsLoading,
									a = t.preferredBases,
									l = t.current,
									c = t.viewSettings,
									h = t.listHeight,
									f = this.state,
									d = f.activeMarketTab,
									y = 'my-market' === f.activeTab,
									m = a.map(function (e) {
										return e;
									});
								y || (a = (a = a.clear()).push(this.state.activeFindBase)),
									y || (d = 0);
								var v = this._getMarkets(),
									g = v.baseGroups,
									k = v.otherMarkets,
									x = k && k.length,
									j = 'mymarkets-header clickable',
									_ = G()(j, {inactive: !y}),
									S = G()(j, {inactive: y}),
									w = {minWidth: this.state.minWidth, minHeight: '6rem'};
								h && (w.height = h);
								var M = n(112);
								return (0, b.jsxs)('div', {
									className: this.props.className,
									style: this.props.style,
									children: [
										this.props.tabHeader
											? (0, b.jsxs)('div', {
													style: this.props.headerStyle,
													className:
														'grid-block shrink left-orderbook-header bottom-header',
													children: [
														(0, b.jsx)('div', {
															ref: 'myMarkets',
															className: _,
															onClick: this._changeTab.bind(this, 'my-market'),
															'data-intro': M.translate(
																'walkthrough.my_markets_tab'
															),
															children: (0, b.jsx)(u(), {
																content: 'exchange.market_name',
															}),
														}),
														(0, b.jsx)('div', {
															className: S,
															onClick: this._changeTab.bind(
																this,
																'find-market'
															),
															'data-intro': M.translate(
																'walkthrough.find_markets_tab'
															),
															children: (0, b.jsx)(u(), {
																content: 'exchange.more',
															}),
														}),
													],
											  })
											: null,
										this.props.noHeader || this.props.tabHeader
											? null
											: (0, b.jsx)('div', {
													style: this.props.headerStyle,
													children: (0, b.jsx)('div', {
														className: 'exchange-content-header',
														children: (0, b.jsx)('span', {
															children: (0, b.jsx)(u(), {
																content: 'exchange.market_name',
															}),
														}),
													}),
											  }),
										this.props.controls
											? (0, b.jsx)('div', {
													className: 'small-12 medium-6',
													style: {padding: '1rem 0'},
													children: this.props.controls
														? (0, b.jsx)('div', {
																style: {paddingBottom: '0.5rem'},
																children: this.props.controls,
														  })
														: null,
											  })
											: null,
										y
											? (0, b.jsxs)('div', {
													className: 'grid-block vertical shrink',
													style: {
														width: '100%',
														textAlign: 'left',
														padding: '0 0.5rem 0.75rem 0.5rem',
													},
													children: [
														(0, b.jsxs)('div', {
															children: [
																(0, b.jsxs)('label', {
																	style: {margin: '3px 0 0'},
																	children: [
																		(0, b.jsx)('input', {
																			style: {position: 'relative', top: 3},
																			className: 'no-margin',
																			type: 'checkbox',
																			checked: this.props.onlyLiquid,
																			onChange: function () {
																				T.Z.changeViewSetting({
																					onlyLiquid: !e.props.onlyLiquid,
																				});
																			},
																		}),
																		(0, b.jsx)('span', {
																			style: {paddingLeft: '0.4rem'},
																			children: (0, b.jsx)(u(), {
																				content: 'exchange.show_only_liquid',
																			}),
																		}),
																	],
																}),
																(0, b.jsxs)('label', {
																	style: {margin: '3px 0 0'},
																	children: [
																		(0, b.jsx)('input', {
																			style: {position: 'relative', top: 3},
																			className: 'no-margin',
																			type: 'checkbox',
																			checked: this.props.onlyStars,
																			onChange: function () {
																				C.Z.toggleStars();
																			},
																		}),
																		(0, b.jsx)('span', {
																			style: {paddingLeft: '0.4rem'},
																			children: (0, b.jsx)(p.Z, {
																				string:
																					'exchange.show_only_star_formatter',
																				keys: [
																					{
																						type: 'icon',
																						value: 'fi-star',
																						className: 'gold-star',
																						arg: 'star_icon',
																					},
																				],
																			}),
																		}),
																	],
																}),
																(0, b.jsx)('br', {}),
															],
														}),
														(0, b.jsx)('div', {
															className: 'search-wrapper',
															children: (0, b.jsx)('form', {
																children: (0, b.jsx)('div', {
																	className: 'filter inline-block',
																	children: (0, b.jsx)(ue.Z, {
																		style: {
																			fontSize: '0.9rem',
																			height: 'inherit',
																			position: 'relative',
																		},
																		className: 'no-margin market-filter-input',
																		value: this.state.myMarketFilter,
																		onChange: this.handleSearchUpdate,
																	}),
																}),
															}),
														}),
													],
											  })
											: (0, b.jsx)('div', {
													style: {
														width: '100%',
														textAlign: 'left',
														padding: '0.75rem 0.5rem',
													},
													children: (0, b.jsx)('table', {
														children: (0, b.jsxs)('tbody', {
															children: [
																(0, b.jsx)('tr', {
																	style: {width: '100%'},
																	children: (0, b.jsx)('td', {
																		children: (0, b.jsx)(K.Z, {
																			onAssetSelect:
																				this._onFoundBaseAsset.bind(this),
																			assets: m,
																			onChange:
																				this._onInputBaseAsset.bind(this),
																			asset: this.state.findBaseInput,
																			assetInput: this.state.findBaseInput,
																			tabIndex: 1,
																			style: {
																				width: '100%',
																				paddingBottom: '1.5rem',
																			},
																			onFound:
																				this._onFoundBaseAsset.bind(this),
																			label: 'exchange.quote',
																			noLabel: !0,
																			inputStyle: {fontSize: '0.9rem'},
																		}),
																	}),
																}),
																(0, b.jsx)('tr', {
																	style: {width: '100%'},
																	children: (0, b.jsxs)('td', {
																		children: [
																			(0, b.jsxs)('label', {
																				children: [
																					(0, b.jsx)(u(), {
																						content:
																							'account.user_issued_assets.name',
																					}),
																					':',
																				],
																			}),
																			(0, b.jsx)('input', {
																				style: {
																					fontSize: '0.9rem',
																					position: 'relative',
																					top: 1,
																				},
																				type: 'text',
																				value: this.state.inputValue,
																				onChange: this._onInputName.bind(
																					this,
																					!0
																				),
																				placeholder:
																					X().translate('exchange.search'),
																				maxLength: 16,
																				tabIndex: 2,
																				ref: 'findSearchInput',
																			}),
																			this.state.assetNameError
																				? (0, b.jsx)('div', {
																						className: 'error-area',
																						style: {paddingTop: 10},
																						children: (0, b.jsx)('span', {
																							style: {wordBreak: 'break-all'},
																							children: (0, b.jsx)(u(), {
																								content:
																									'explorer.asset.invalid',
																								name: this.state.inputValue,
																							}),
																						}),
																				  })
																				: null,
																		],
																	}),
																}),
															],
														}),
													}),
											  }),
										(0, b.jsxs)('ul', {
											className: 'mymarkets-tabs',
											style: {marginBottom: 0},
											children: [
												y &&
													(0, b.jsx)(
														'li',
														{
															style: {textTransform: 'uppercase'},
															onClick: this.showQuoteModal,
															className: 'mymarkets-tab',
															children: ' + ',
														},
														'quote_edit'
													),
												y || this.state.inputValue
													? a.map(function (t, n) {
															return t
																? (0, b.jsx)(
																		'li',
																		{
																			onClick: e.toggleActiveMarketTab.bind(
																				e,
																				n
																			),
																			className: G()('mymarkets-tab', {
																				active: d === n,
																			}),
																			children: t,
																		},
																		t
																  )
																: null;
													  })
													: null,
												y && x
													? (0, b.jsx)(
															'li',
															{
																style: {textTransform: 'uppercase'},
																onClick: this.toggleActiveMarketTab.bind(
																	this,
																	a.size + 1
																),
																className: G()('mymarkets-tab', {
																	active: d === a.size + 1,
																}),
																children: (0, b.jsx)(u(), {
																	content: 'exchange.others',
																}),
															},
															'others'
													  )
													: null,
											],
										}),
										(0, b.jsxs)('div', {
											style: w,
											className:
												'table-container grid-block vertical mymarkets-list',
											ref: 'favorites',
											children: [
												i
													? (0, b.jsx)('div', {
															style: {
																position: 'absolute',
																paddingTop: '3rem',
																textAlign: 'right',
																width: '100%',
															},
															children: (0, b.jsx)(Y.Z, {type: 'three-bounce'}),
													  })
													: null,
												a
													.filter(function (e) {
														return e === a.get(d);
													})
													.map(function (t, n) {
														return (0,
														b.jsx)(Se, {userMarkets: e.props.userMarkets, defaultMarkets: e.props.defaultMarkets, index: n, allowChange: !1, current: l, starredMarkets: r, marketStats: s, viewSettings: c, columns: y ? o : e.props.findColumns || o, markets: g[t], base: t, maxRows: y ? 20 : 10, findMarketTab: !y, location: e.props.location, history: e.props.history, onlyLiquid: e.props.onlyLiquid && y}, t);
													}),
												d === a.size + 1 && y && x
													? (0, b.jsx)(Se, {
															userMarkets: this.props.userMarkets,
															index: a.size,
															current: l,
															starredMarkets: r,
															marketStats: s,
															viewSettings: c,
															columns: o,
															markets: k,
															base: 'others',
															maxRows: y ? 20 : 10,
															findMarketTab: !y,
															location: this.props.location,
															history: this.props.history,
													  })
													: null,
											],
										}),
										(0, b.jsx)(ce, {
											visible: this.state.isQuoteModalVisible,
											hideModal: this.hideQuoteModal,
											showModal: this.showQuoteModal,
											quotes: this.props.preferredBases,
										}),
									],
								});
							},
						},
					]),
					r
				);
			})(r.Component);
			_e(we, 'defaultProps', {activeTab: 'my-market', setMinWidth: !1}),
				(we = (0, te.Z)(we, 50, {leading: !1}));
			var Me = (function (e) {
				be(n, e);
				var t = ge(n);
				function n() {
					return de(this, n), t.apply(this, arguments);
				}
				return (
					me(n, [
						{
							key: 'render',
							value: function () {
								return (0, b.jsx)(
									we,
									(function (e) {
										for (var t = 1; t < arguments.length; t++) {
											var n = null != arguments[t] ? arguments[t] : {};
											t % 2
												? he(Object(n), !0).forEach(function (t) {
														_e(e, t, n[t]);
												  })
												: Object.getOwnPropertyDescriptors
												? Object.defineProperties(
														e,
														Object.getOwnPropertyDescriptors(n)
												  )
												: he(Object(n)).forEach(function (t) {
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
			const Oe = (0, h.$)(Me, {
				listenTo: function () {
					return [F.Z, U.Z, V.Z];
				},
				getProps: function () {
					return {
						starredMarkets: F.Z.getState().starredMarkets,
						onlyLiquid: F.Z.getState().viewSettings.get('onlyLiquid', !1),
						defaultMarkets: F.Z.getState().defaultMarkets,
						viewSettings: F.Z.getState().viewSettings,
						preferredBases: F.Z.getState().preferredBases,
						marketStats: U.Z.getState().allMarketStats,
						userMarkets: F.Z.getState().userMarkets,
						searchAssets: V.Z.getState().assets,
						onlyStars: U.Z.getState().onlyStars,
						assetsLoading: V.Z.getState().assetsLoading,
					};
				},
			});
		},
		33042: (e, t, n) => {
			n.d(t, {Z: () => Z});
			var r = n(67294),
				s = n(58074),
				o = n.n(s),
				i = n(52233),
				a = n(8564),
				l = n(79876),
				c = n(112),
				u = n.n(c),
				p = n(97891),
				h = n(17076),
				f = n(43393),
				d = n.n(f),
				y = n(94184),
				m = n.n(y),
				b = n(31403),
				v = n(45697),
				g = n.n(v),
				k = n(35944);
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
			function j(e, t) {
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
			function S(e, t, n) {
				return (
					t && _(e.prototype, t),
					n && _(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function w(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && M(e, t);
			}
			function M(e, t) {
				return (
					(M =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					M(e, t)
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
						r = T(e);
					if (t) {
						var s = T(this).constructor;
						n = Reflect.construct(r, arguments, s);
					} else n = r.apply(this, arguments);
					return C(this, n);
				};
			}
			function C(e, t) {
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
			function T(e) {
				return (
					(T = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					T(e)
				);
			}
			function B(e, t, n) {
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
				w(n, e);
				var t = O(n);
				function n() {
					return j(this, n), t.apply(this, arguments);
				}
				return (
					S(n, [
						{
							key: 'render',
							value: function () {
								return 0 !== this.props.assets.length && this.props.value
									? (0, k.jsx)(p.Z, {
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
												? (0, k.jsx)(h.Z, {
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
			B(P, 'propTypes', {value: g().string, onChange: g().func}),
				(P = (0, b.Z)(P, {asList: !0}));
			var A = (function (e) {
				w(n, e);
				var t = O(n);
				function n() {
					return j(this, n), t.apply(this, arguments);
				}
				return (
					S(n, [
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
									s = this.getError();
								n ||
									(this.props.asset
										? (e = this.props.asset.get('symbol'))
										: !s &&
										  this.props.assetInput &&
										  (s = u().translate('explorer.asset.not_found', {
												name: this.props.assetInput,
										  })));
								var i = m()('button', {
									disabled:
										!this.props.asset || s || this.props.disableActionButton,
								});
								return (0, k.jsx)('div', {
									className: 'asset-selector',
									style: this.props.style,
									children: (0, k.jsxs)('div', {
										children: [
											(0, k.jsxs)('div', {
												className: 'header-area',
												children: [
													s || r
														? null
														: (0, k.jsxs)('label', {
																className: 'right-label',
																children: [
																	'  ',
																	(0, k.jsx)('span', {children: e}),
																],
														  }),
													(0, k.jsx)(o(), {
														component: 'label',
														content: this.props.label,
													}),
												],
											}),
											(0, k.jsx)('div', {
												className: 'input-area',
												children: (0, k.jsxs)('div', {
													className: 'inline-label input-wrapper',
													children: [
														(0, k.jsx)('input', {
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
														(0, k.jsx)('div', {
															className: 'form-label select floating-dropdown',
															children: this.props.asset
																? (0, k.jsx)(P, {
																		ref: this.props.refCallback,
																		value: this.props.asset.get('symbol'),
																		assets: d().List(this.props.assets),
																		onChange: this.onAssetSelect.bind(this),
																  })
																: null,
														}),
														this.props.children,
														this.props.onAction
															? (0, k.jsx)('button', {
																	className: i,
																	onClick: this.onAction.bind(this),
																	children: (0, k.jsx)(o(), {
																		content: this.props.action_label,
																	}),
															  })
															: null,
													],
												}),
											}),
											(0, k.jsx)('div', {
												className: 'error-area',
												style: {paddingBottom: '10px'},
												children: (0, k.jsx)('span', {
													style: {wordBreak: 'break-all'},
													children: s,
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
			B(A, 'propTypes', {
				label: g().string,
				error: g().string,
				placeholder: g().string,
				onChange: g().func,
				onFound: g().func,
				assetInput: g().string,
				asset: a.Z.ChainAsset,
				tabIndex: g().number,
				disableActionButton: g().bool,
			}),
				B(A, 'defaultProps', {disabled: !1});
			const Z = (0, l.Z)(A);
		},
		66422: (e, t, n) => {
			n.d(t, {Z: () => y});
			var r = n(67294),
				s = n(1174),
				o = n.n(s),
				i = n(35944);
			function a(e) {
				return (
					(a =
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
					a(e)
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
			function c(e, t) {
				return (
					(c =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					c(e, t)
				);
			}
			function u(e, t) {
				if (t && ('object' === a(t) || 'function' == typeof t)) return t;
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
			function p(e) {
				return (
					(p = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					p(e)
				);
			}
			var h,
				f,
				d,
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
							t && c(e, t);
					})(f, e);
					var t,
						n,
						s,
						a,
						h =
							((s = f),
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
									t = p(s);
								if (a) {
									var n = p(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return u(this, e);
							});
					function f() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, f),
							((e = h.call(this)).state = {animateEnter: !1}),
							(e.timer = null),
							e
						);
					}
					return (
						(t = f),
						(n = [
							{
								key: 'componentDidMount',
								value: function () {
									this.enableAnimation();
								},
							},
							{
								key: 'resetAnimation',
								value: function () {
									this.setState({animateEnter: !1}), this.enableAnimation();
								},
							},
							{
								key: 'enableAnimation',
								value: function () {
									var e = this;
									this.timer = setTimeout(function () {
										e.timer && e.setState({animateEnter: !0});
									}, 2e3);
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									clearTimeout(this.timer), (this.timer = null);
								},
							},
							{
								key: 'render',
								value: function () {
									return this.props.children
										? (0, i.jsx)(o(), {
												id: this.props.id,
												className: this.props.className,
												component: this.props.component,
												transitionName: this.props.transitionName,
												transitionEnterTimeout: this.props.enterTimeout,
												transitionEnter: this.state.animateEnter,
												transitionLeave: !1,
												children: this.props.children,
										  })
										: r.createElement(this.props.component);
								},
							},
						]) && l(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						f
					);
				})(r.Component);
			(d = {component: 'span', enterTimeout: 2e3}),
				(f = 'defaultProps') in (h = y)
					? Object.defineProperty(h, f, {
							value: d,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (h[f] = d);
		},
	},
]);
