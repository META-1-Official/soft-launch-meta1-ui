'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[39],
	{
		98063: (e, t, r) => {
			r.d(t, {Z: () => p}), r(67294);
			var n = r(26170),
				o = r(35944),
				i = ['title', 'level', 'showDivider'];
			function c(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(r), !0).forEach(function (t) {
								u(e, t, r[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: c(Object(r)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(r, t)
								);
						  });
				}
				return e;
			}
			function u(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = r),
					e
				);
			}
			var s = n.Z.Title,
				a = {name: 'blceb2', styles: 'margin:0px !important'};
			const p = function (e) {
				var t = e.title,
					r = e.level,
					n = e.showDivider,
					c = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = (function (e, t) {
								if (null == e) return {};
								var r,
									n,
									o = {},
									i = Object.keys(e);
								for (n = 0; n < i.length; n++)
									(r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
								return o;
							})(e, t);
						if (Object.getOwnPropertySymbols) {
							var i = Object.getOwnPropertySymbols(e);
							for (n = 0; n < i.length; n++)
								(r = i[n]),
									t.indexOf(r) >= 0 ||
										(Object.prototype.propertyIsEnumerable.call(e, r) &&
											(o[r] = e[r]));
						}
						return o;
					})(e, i);
				return (0, o.jsx)('div', {
					css: function (e) {
						return {
							padding: '1rem 2rem',
							borderBottom: n
								? '1px solid '.concat(e.colors.borderColor)
								: 'none',
							color: e.colors.themeOpositeColor,
						};
					},
					children: (0, o.jsx)(
						s,
						l(l({css: a, level: r}, c), {}, {children: t})
					),
				});
			};
		},
		18186: (e, t, r) => {
			r.r(t), r.d(t, {default: () => m});
			var n = r(67294),
				o = r(52468),
				i = r(21705),
				c = r(98063),
				l = r(71230),
				u = r(15746),
				s = r(35944),
				a = r(25108);
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
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function b(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function y(e, t) {
				return (
					(y =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					y(e, t)
				);
			}
			function h(e, t) {
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
			function d(e) {
				return (
					(d = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					d(e)
				);
			}
			const m = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && y(e, t);
				})(O, e);
				var t,
					r,
					n,
					p,
					m =
						((n = O),
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
								t = d(n);
							if (p) {
								var r = d(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return h(this, e);
						});
				function O() {
					return f(this, O), m.apply(this, arguments);
				}
				return (
					(t = O),
					(r = [
						{
							key: 'render',
							value: function () {
								a.log(this.props.match.params);
								var e = (0, i.Z)(this.props.match.params)
									.map(function (e) {
										return e[1];
									})
									.join('/');
								return (0, s.jsxs)(s.Fragment, {
									children: [
										(0, s.jsx)(c.Z, {title: 'Help', showDivider: !0, level: 2}),
										(0, s.jsx)('div', {
											css: function () {
												return {height: '100%'};
											},
											children: (0, s.jsxs)(l.Z, {
												css: function () {
													return {height: '80vh', overflow: 'auto'};
												},
												children: [
													(0, s.jsx)(u.Z, {
														xs: 24,
														sm: 8,
														lg: 6,
														children: (0, s.jsx)('div', {
															css: function (e) {
																return {
																	padding: '20px',
																	height: '100%',
																	ul: {
																		listStyle: 'none !important',
																		height: '100%',
																		backgroundColor: e.colors.helpSideBarColor,
																	},
																	li: {
																		border: '1px solid '.concat(
																			e.colors.borderColor
																		),
																		padding: '5px 0px 3px 2rem',
																	},
																	a: {
																		color: 'white !important',
																		'&: hover': {
																			color: ''.concat(
																				e.colors.primaryColor,
																				' !important'
																			),
																			backgroundColor: 'transparent !important',
																		},
																	},
																};
															},
															children: (0, s.jsx)(o.Z, {path: 'toc'}),
														}),
													}),
													(0, s.jsx)(u.Z, {
														sm: 16,
														lg: 18,
														xs: 24,
														css: function () {
															return {padding: '0rem 2rem', marginTop: '4rem'};
														},
														children: (0, s.jsx)(o.Z, {path: e || 'index'}),
													}),
												],
											}),
										}),
									],
								});
							},
						},
					]) && b(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					O
				);
			})(n.Component);
		},
	},
]);
