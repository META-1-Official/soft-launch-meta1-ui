(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[368],
	{
		83399: (e, t, n) => {
			'use strict';
			n(55835), n(25017);
		},
		91817: (e, t, n) => {
			'use strict';
			n.r(t), n.d(t, {default: () => p});
			var r = n(67294),
				o =
					(n(86035),
					n(46737),
					n(52233),
					n(44945),
					n(96168),
					n(33041),
					n(37065),
					n(37983),
					n(60521),
					n(83399),
					n(35944)),
				i = n(25108);
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
			function a(e, t, n, r, o, i, c) {
				try {
					var a = e[i](c),
						u = a.value;
				} catch (e) {
					return void n(e);
				}
				a.done ? t(u) : Promise.resolve(u).then(r, o);
			}
			function u(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function s(e, t) {
				return (
					(s =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					s(e, t)
				);
			}
			function f(e, t) {
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
			function l(e) {
				return (
					(l = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					l(e)
				);
			}
			const p = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && s(e, t);
				})(h, e);
				var t,
					n,
					r,
					c,
					p =
						((r = h),
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
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = l(r);
							if (c) {
								var n = l(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return f(this, e);
						});
				function h() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, h),
						((e = p.call(this)).state = {confirmCode: '', message: ''}),
						e
					);
				}
				return (
					(t = h),
					(n = [
						{
							key: 'componentDidMount',
							value: function () {
								var e = this;
								i.log(this.props.match.params.confirmCode),
									i.log('this.props.match.params.confirmCode'),
									fetch(
										'https://gateway.dev.meta1.io/api/user/verify/' +
											this.props.match.params.confirmCode,
										{
											method: 'GET',
											headers: {
												Accept: 'application/json, text/plain, */*',
												'Content-Type': 'application/json',
												'X-Requested-With': 'XMLHttpRequest',
											},
										}
									)
										.then(
											(function () {
												var t,
													n =
														((t = regeneratorRuntime.mark(function t(n) {
															return regeneratorRuntime.wrap(function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			200 === n.status
																				? e.setState({
																						message: 'Your email is confirmed',
																				  })
																				: (i.log('post'),
																				  e.setState({
																						message:
																							'Your email is unconfirmed',
																				  }));
																		case 1:
																		case 'end':
																			return t.stop();
																	}
															}, t);
														})),
														function () {
															var e = this,
																n = arguments;
															return new Promise(function (r, o) {
																var i = t.apply(e, n);
																function c(e) {
																	a(i, r, o, c, u, 'next', e);
																}
																function u(e) {
																	a(i, r, o, c, u, 'throw', e);
																}
																c(void 0);
															});
														});
												return function (e) {
													return n.apply(this, arguments);
												};
											})()
										)
										.catch(function (e) {
											i.log(e);
										});
							},
						},
						{
							key: 'render',
							value: function () {
								return (
									i.log(this.props.match.params),
									(0, o.jsx)('div', {
										className: 'grid-container page-layout help-content-layout',
										children: (0, o.jsx)('div', {
											className: 'grid-block page-layout',
											children: (0, o.jsxs)('div', {
												className:
													'grid-block main-content wrap regular-padding',
												children: [
													(0, o.jsx)('div', {className: 'grid-block medium-3'}),
													(0, o.jsx)('div', {
														children: (0, o.jsx)('h2', {
															children: this.state.message,
														}),
													}),
												],
											}),
										}),
									})
								);
							},
						},
					]),
					n && u(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					h
				);
			})(r.Component);
		},
		81321: (e, t, n) => {
			var r = n(23085).Buffer,
				o = n(55835),
				i = {
					gen: function (e, t) {
						e = e || '';
						var n = (t = t || {}).counter || 0,
							i = new r(a(n)),
							c = o.createHmac('sha1', new r(e)).update(i).digest('hex'),
							s = u(c),
							f = 15 & s[19],
							l =
								((127 & s[f]) << 24) |
								((255 & s[f + 1]) << 16) |
								((255 & s[f + 2]) << 8) |
								(255 & s[f + 3]);
						return (l += '').substr(l.length - 6, 6);
					},
					verify: function (e, t, n) {
						for (
							var r = (n = n || {}).window || 50, o = n.counter || 0, i = o - r;
							i <= o + r;
							++i
						)
							if (((n.counter = i), this.gen(t, n) === e))
								return {delta: i - o};
						return null;
					},
				},
				c = {
					gen: function (e, t) {
						var n = (t = t || {}).time || 30,
							r = new Date().getTime();
						if (t._t)
							throw new Error('cannot overwrite time in non-test environment!');
						return (t.counter = Math.floor(r / 1e3 / n)), i.gen(e, t);
					},
					verify: function (e, t, n) {
						var r = (n = n || {}).time || 30,
							o = new Date().getTime();
						if (n._t)
							throw new Error('cannot overwrite time in non-test environment!');
						return (n.counter = Math.floor(o / 1e3 / r)), i.verify(e, t, n);
					},
				};
			(e.exports.hotp = i), (e.exports.totp = c);
			var a = function (e) {
					for (var t = [], n = 7; n >= 0; --n) (t[n] = 255 & e), (e >>= 8);
					return t;
				},
				u = function (e) {
					for (var t = [], n = 0; n < e.length; n += 2)
						t.push(parseInt(e.substr(n, 2), 16));
					return t;
				};
		},
		25017: (e, t, n) => {
			var r = n(80883);
			(t.encode = r.encode), (t.decode = r.decode);
		},
		80883: (e, t, n) => {
			var r = n(23085).Buffer,
				o = [
					255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
					255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
					17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0,
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
					21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
				];
			(t.encode = function (e) {
				var t,
					n,
					o = 0,
					i = 0,
					c = 0,
					a = 0,
					u = new r(
						8 *
							((t = e),
							(n = Math.floor(t.length / 5)),
							t.length % 5 == 0 ? n : n + 1)
					);
				for (r.isBuffer(e) || (e = new r(e)); o < e.length; ) {
					var s = e[o];
					c > 3
						? ((a =
								((a = s & (255 >> c)) << (c = (c + 5) % 8)) |
								((o + 1 < e.length ? e[o + 1] : 0) >> (8 - c))),
						  o++)
						: ((a = (s >> (8 - (c + 5))) & 31), 0 == (c = (c + 5) % 8) && o++),
						(u[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(a)),
						i++;
				}
				for (o = i; o < u.length; o++) u[o] = 61;
				return u;
			}),
				(t.decode = function (e) {
					var t,
						n = 0,
						i = 0,
						c = 0;
					r.isBuffer(e) || (e = new r(e));
					for (
						var a = new r(Math.ceil((5 * e.length) / 8)), u = 0;
						u < e.length && 61 != e[u];
						u++
					) {
						var s = e[u] - 48;
						if (!(s < o.length))
							throw new Error(
								'Invalid input - it is not base32 encoded string'
							);
						(i = o[s]),
							n <= 3
								? 0 == (n = (n + 5) % 8)
									? ((t |= i), (a[c] = t), c++, (t = 0))
									: (t |= 255 & (i << (8 - n)))
								: ((t |= 255 & (i >>> (n = (n + 5) % 8))),
								  (a[c] = t),
								  c++,
								  (t = 255 & (i << (8 - n))));
					}
					return a.slice(0, c);
				});
		},
	},
]);
