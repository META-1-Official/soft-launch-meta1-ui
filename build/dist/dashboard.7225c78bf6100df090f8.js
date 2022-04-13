'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[966],
	{
		59992: (t, e, n) => {
			n.r(e), n.d(e, {default: () => y});
			var r = n(67294),
				o = n(11230),
				i = n(35944);
			function c(t) {
				return (
					(c =
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
					c(t)
				);
			}
			function u(t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			}
			function f(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function l(t, e) {
				return (
					(l =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					l(t, e)
				);
			}
			function a(t, e) {
				if (e && ('object' === c(e) || 'function' == typeof e)) return e;
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
			function p(t) {
				return (
					(p = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					p(t)
				);
			}
			var s = (function (t) {
				!(function (t, e) {
					if ('function' != typeof e && null !== e)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(t.prototype = Object.create(e && e.prototype, {
						constructor: {value: t, writable: !0, configurable: !0},
					})),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e && l(t, e);
				})(s, t);
				var e,
					n,
					r,
					o,
					c =
						((r = s),
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
							} catch (t) {
								return !1;
							}
						})()),
						function () {
							var t,
								e = p(r);
							if (o) {
								var n = p(this).constructor;
								t = Reflect.construct(e, arguments, n);
							} else t = e.apply(this, arguments);
							return a(this, t);
						});
				function s() {
					return u(this, s), c.apply(this, arguments);
				}
				return (
					(e = s),
					(n = [
						{
							key: 'componentDidMount',
							value: function () {
								window.location.reload();
							},
						},
						{
							key: 'render',
							value: function () {
								return (0, i.jsx)('a', {
									style: {verticalAlign: 'middle', textAlign: 'center'},
									href: 'https://zeus.meta-exchange.info',
									children: 'If redirect failded - please click this link',
								});
							},
						},
					]) && f(e.prototype, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					s
				);
			})(r.Component);
			const y = (0, o.$)(s);
		},
	},
]);
