'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[584],
	{
		61355: (t, e, n) => {
			n.r(e), n.d(e, {default: () => z});
			var o = n(67294),
				r = n(11211),
				i = n(72277),
				c = n(45697),
				s = n.n(c),
				l = n(62254),
				u = n(43393),
				a = n.n(u),
				p = n(19676),
				f = n(82661),
				h = n(58074),
				b = n.n(h),
				y = n(8564),
				d = n(79876),
				m = n(57312),
				v = n(66261),
				j = n(35944);
			function g(t) {
				return (
					(g =
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
					g(t)
				);
			}
			function k(t, e, n) {
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
			function x(t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			}
			function O(t, e) {
				for (var n = 0; n < e.length; n++) {
					var o = e[n];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function w(t, e, n) {
				return (
					e && O(t.prototype, e),
					n && O(t, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					t
				);
			}
			function _(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: {value: t, writable: !0, configurable: !0},
				})),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					e && P(t, e);
			}
			function P(t, e) {
				return (
					(P =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					P(t, e)
				);
			}
			function S(t) {
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
						o = C(t);
					if (e) {
						var r = C(this).constructor;
						n = Reflect.construct(o, arguments, r);
					} else n = o.apply(this, arguments);
					return T(this, n);
				};
			}
			function T(t, e) {
				if (e && ('object' === g(e) || 'function' == typeof e)) return e;
				if (void 0 !== e)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return I(t);
			}
			function I(t) {
				if (void 0 === t)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return t;
			}
			function C(t) {
				return (
					(C = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					C(t)
				);
			}
			var R = (function (t) {
					_(n, t);
					var e = S(n);
					function n() {
						return x(this, n), e.apply(this, arguments);
					}
					return (
						w(n, [
							{
								key: 'shouldComponentUpdate',
								value: function (t) {
									return t.block.id !== this.props.block.id;
								},
							},
							{
								key: 'render',
								value: function () {
									var t = this.props.block,
										e = null;
									return (
										(e = []),
										t.transactions.length > 0 &&
											((e = []),
											t.transactions.forEach(function (n, o) {
												e.push(
													(0, j.jsx)(
														v.W_,
														{
															id: 'tx_'.concat(o),
															name: 'tx_'.concat(o),
															children: (0, j.jsx)(
																f.Z,
																{block: t, trx: n, index: o},
																o
															),
														},
														o
													)
												);
											})),
										(0, j.jsx)('div', {children: e})
									);
								},
							},
						]),
						n
					);
				})(o.Component),
				E = (function (t) {
					_(n, t);
					var e = S(n);
					function n(t) {
						var o;
						return (
							x(this, n),
							((o = e.call(this, t)).state = {showInput: !1}),
							(o.scrollToTop = o.scrollToTop.bind(I(o))),
							o
						);
					}
					return (
						w(n, [
							{
								key: 'componentDidMount',
								value: function () {
									var t = this;
									this._getBlock(this.props.height),
										v.zW.scrollEvent.register('begin', function () {}),
										v.zW.scrollEvent.register('end', function () {
											t.setState({scrollEnded: !0});
										});
								},
							},
							{
								key: 'componentWillReceiveProps',
								value: function (t) {
									t.height !== this.props.height && this._getBlock(t.height);
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (t, e) {
									return (
										!a().is(t.blocks, this.props.blocks) ||
										t.height !== this.props.height ||
										t.dynGlobalObject !== this.props.dynGlobalObject ||
										e.showInput !== this.state.showInput
									);
								},
							},
							{
								key: 'scrollToTop',
								value: function () {
									v.NY.scrollToTop({
										duration: 1500,
										delay: 100,
										smooth: !0,
										containerId: 'blockContainer',
									});
								},
							},
							{
								key: '_getBlock',
								value: function (t) {
									t &&
										((t = parseInt(t, 10)),
										this.props.blocks.get(t) || p.Z.getBlock(t));
								},
							},
							{
								key: '_nextBlock',
								value: function () {
									var t = this.props.match.params.height,
										e = Math.min(
											this.props.dynGlobalObject.get('head_block_number'),
											parseInt(t, 10) + 1
										);
									this.props.history.push('/block/'.concat(e));
								},
							},
							{
								key: '_previousBlock',
								value: function () {
									var t = this.props.match.params.height,
										e = Math.max(1, parseInt(t, 10) - 1);
									this.props.history.push('/block/'.concat(e));
								},
							},
							{
								key: 'toggleInput',
								value: function (t) {
									t.preventDefault(), this.setState({showInput: !0});
								},
							},
							{
								key: '_onKeyDown',
								value: function (t) {
									t &&
										13 === t.keyCode &&
										(this.props.history.push('/block/'.concat(t.target.value)),
										this.setState({showInput: !1}));
								},
							},
							{
								key: '_onSubmit',
								value: function () {
									var t = this.refs.blockInput.value;
									t && this._onKeyDown({keyCode: 13, target: {value: t}});
								},
							},
							{
								key: 'componentDidUpdate',
								value: function () {
									var t = this.props.blocks,
										e = parseInt(this.props.height, 10),
										n = t.get(e);
									this.props.scrollToIndex &&
										!this.state.scrollEnded &&
										n &&
										v.OK.scrollTo('tx_'.concat(this.props.scrollToIndex), {
											duration: 1500,
											delay: 100,
											smooth: !0,
											offset: -100,
											containerId: 'blockContainer',
										});
								},
							},
							{
								key: 'render',
								value: function () {
									var t = this.state.showInput,
										e = this.props.blocks,
										n = parseInt(this.props.height, 10),
										o = e.get(n),
										r = t
											? (0, j.jsxs)('span', {
													className: 'inline-label',
													children: [
														(0, j.jsx)('input', {
															ref: 'blockInput',
															type: 'number',
															onKeyDown: this._onKeyDown.bind(this),
														}),
														(0, j.jsx)('button', {
															onClick: this._onSubmit.bind(this),
															className: 'button',
															children: (0, j.jsx)(b(), {
																content: 'explorer.block.go_to',
															}),
														}),
													],
											  })
											: (0, j.jsxs)('span', {
													children: [
														(0, j.jsx)(b(), {
															style: {textTransform: 'uppercase'},
															component: 'span',
															content: 'explorer.block.title',
														}),
														(0, j.jsxs)('a', {
															onClick: this.toggleInput.bind(this),
															children: [' #', n],
														}),
													],
											  });
									return (0, j.jsx)('div', {
										className: 'grid-block page-layout',
										children: (0, j.jsx)('div', {
											className: 'grid-block main-content',
											children: (0, j.jsx)('div', {
												className: 'grid-content',
												id: 'blockContainer',
												children: (0, j.jsxs)('div', {
													className:
														'grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12',
													children: [
														(0, j.jsx)('h4', {
															className: 'text-center',
															children: r,
														}),
														(0, j.jsxs)('ul', {
															children: [
																(0, j.jsxs)('li', {
																	children: [
																		(0, j.jsx)(b(), {
																			component: 'span',
																			content: 'explorer.block.date',
																		}),
																		':',
																		' ',
																		o
																			? (0, j.jsx)(l.Ji, {
																					value: o.timestamp,
																					format: 'full',
																			  })
																			: null,
																	],
																}),
																(0, j.jsxs)('li', {
																	children: [
																		(0, j.jsx)(b(), {
																			component: 'span',
																			content: 'explorer.block.witness',
																		}),
																		':',
																		' ',
																		o
																			? (0, j.jsx)(m.Z, {witness: o.witness})
																			: null,
																	],
																}),
																(0, j.jsxs)('li', {
																	children: [
																		(0, j.jsx)(b(), {
																			component: 'span',
																			content: 'explorer.block.previous',
																		}),
																		': ',
																		o ? o.previous : null,
																	],
																}),
																(0, j.jsxs)('li', {
																	children: [
																		(0, j.jsx)(b(), {
																			component: 'span',
																			content: 'explorer.block.transactions',
																		}),
																		': ',
																		o ? o.transactions.length : null,
																	],
																}),
															],
														}),
														(0, j.jsxs)('div', {
															className: 'clearfix',
															style: {marginBottom: '1rem'},
															children: [
																(0, j.jsx)('div', {
																	className: 'button float-left outline',
																	onClick: this._previousBlock.bind(this),
																	children: '←',
																}),
																(0, j.jsx)('div', {
																	className: 'button float-right outline',
																	onClick: this._nextBlock.bind(this),
																	children: '→',
																}),
															],
														}),
														o ? (0, j.jsx)(R, {block: o}) : null,
														(0, j.jsx)('div', {
															style: {textAlign: 'center', marginBottom: 20},
															children: (0, j.jsx)('a', {
																onClick: this.scrollToTop,
																children: (0, j.jsx)(b(), {
																	content: 'global.return_to_top',
																}),
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
						n
					);
				})(o.Component);
			k(E, 'propTypes', {
				dynGlobalObject: y.Z.ChainObject.isRequired,
				blocks: s().object.isRequired,
				height: s().number.isRequired,
			}),
				k(E, 'defaultProps', {dynGlobalObject: '2.1.0', blocks: {}, height: 1});
			const B = (0, d.Z)(E);
			function D(t) {
				return (
					(D =
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
					D(t)
				);
			}
			function Z(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					e &&
						(o = o.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, o);
				}
				return n;
			}
			function N(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? Z(Object(n), !0).forEach(function (e) {
								G(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: Z(Object(n)).forEach(function (e) {
								Object.defineProperty(
									t,
									e,
									Object.getOwnPropertyDescriptor(n, e)
								);
						  });
				}
				return t;
			}
			function G(t, e, n) {
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
			function K(t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			}
			function q(t, e) {
				for (var n = 0; n < e.length; n++) {
					var o = e[n];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function W(t, e) {
				return (
					(W =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					W(t, e)
				);
			}
			function M(t, e) {
				if (e && ('object' === D(e) || 'function' == typeof e)) return e;
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
			function U(t) {
				return (
					(U = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					U(t)
				);
			}
			const z = (function (t) {
				!(function (t, e) {
					if ('function' != typeof e && null !== e)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(t.prototype = Object.create(e && e.prototype, {
						constructor: {value: t, writable: !0, configurable: !0},
					})),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e && W(t, e);
				})(l, t);
				var e,
					n,
					o,
					c,
					s =
						((o = l),
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
								e = U(o);
							if (c) {
								var n = U(this).constructor;
								t = Reflect.construct(e, arguments, n);
							} else t = e.apply(this, arguments);
							return M(this, t);
						});
				function l() {
					return K(this, l), s.apply(this, arguments);
				}
				return (
					(e = l),
					(n = [
						{
							key: 'render',
							value: function () {
								var t = parseInt(this.props.match.params.height, 10),
									e = this.props.match.params.txIndex
										? parseInt(this.props.match.params.txIndex)
										: 0;
								return (0, j.jsx)(i.Z, {
									stores: [r.Z],
									inject: {
										blocks: function () {
											return r.Z.getState().blocks;
										},
									},
									children: (0, j.jsx)(
										B,
										N(N({}, this.props), {}, {height: t, scrollToIndex: e})
									),
								});
							},
						},
					]) && q(e.prototype, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					l
				);
			})(o.Component);
		},
		57312: (t, e, n) => {
			n.d(e, {Z: () => v});
			var o = n(67294),
				r = n(8564),
				i = n(79876),
				c = n(68769),
				s = n(35944);
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
			function u(t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			}
			function a(t, e) {
				for (var n = 0; n < e.length; n++) {
					var o = e[n];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function p(t, e) {
				return (
					(p =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					p(t, e)
				);
			}
			function f(t, e) {
				if (e && ('object' === l(e) || 'function' == typeof e)) return e;
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
			var b,
				y,
				d,
				m = (function (t) {
					!(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(t.prototype = Object.create(e && e.prototype, {
							constructor: {value: t, writable: !0, configurable: !0},
						})),
							Object.defineProperty(t, 'prototype', {writable: !1}),
							e && p(t, e);
					})(l, t);
					var e,
						n,
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
									var n = h(this).constructor;
									t = Reflect.construct(e, arguments, n);
								} else t = e.apply(this, arguments);
								return f(this, t);
							});
					function l() {
						return u(this, l), i.apply(this, arguments);
					}
					return (
						(e = l),
						(n = [
							{
								key: 'render',
								value: function () {
									var t = this.props.witness.get('witness_account');
									return (0, s.jsx)(c.Z, {account: t});
								},
							},
						]) && a(e.prototype, n),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						l
					);
				})(o.Component);
			(b = m),
				(y = 'propTypes'),
				(d = {witness: r.Z.ChainObject.isRequired}),
				y in b
					? Object.defineProperty(b, y, {
							value: d,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (b[y] = d);
			const v = (m = (0, i.Z)(m));
		},
	},
]);
