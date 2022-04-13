'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[28],
	{
		31413: (e, t, r) => {
			r.r(t), r.d(t, {default: () => b});
			var n = r(67294),
				l = r(27418),
				o = r.n(l),
				i = function () {
					return (
						(i =
							Object.assign ||
							function (e) {
								for (var t, r = 1, n = arguments.length; r < n; r++)
									for (var l in (t = arguments[r]))
										Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
								return e;
							}),
						i.apply(this, arguments)
					);
				};
			const u = function (e) {
				for (
					var t = e.url,
						r = e.allowFullScreen,
						l = e.position,
						u = e.display,
						a = e.height,
						c = e.width,
						s = e.overflow,
						f = e.styles,
						p = e.onLoad,
						y = e.onMouseOver,
						b = e.onMouseOut,
						d = e.scrolling,
						h = e.id,
						w = e.frameBorder,
						m = e.ariaHidden,
						v = e.sandbox,
						O = e.allow,
						g = e.className,
						j = e.title,
						k = e.ariaLabel,
						P = e.ariaLabelledby,
						S = e.name,
						_ = e.target,
						x = e.loading,
						R = e.importance,
						B = e.referrerpolicy,
						E = e.allowpaymentrequest,
						C = e.src,
						L = o()({
							src: C || t,
							target: _ || null,
							style: {
								position: l || null,
								display: u || 'block',
								overflow: s || null,
							},
							scrolling: d || null,
							allowpaymentrequest: E || null,
							importance: R || null,
							sandbox: v || null,
							loading: x || null,
							styles: f || null,
							name: S || null,
							className: g || null,
							referrerpolicy: B || null,
							title: j || null,
							allow: O || null,
							id: h || null,
							'aria-labelledby': P || null,
							'aria-hidden': m || null,
							'aria-label': k || null,
							width: c || null,
							height: a || null,
							onLoad: p || null,
							onMouseOver: y || null,
							onMouseOut: b || null,
						}),
						M = Object.create(null),
						T = 0,
						q = Object.keys(L);
					T < q.length;
					T++
				) {
					var F = q[T];
					null != L[F] && (M[F] = L[F]);
				}
				for (var N = 0, D = Object.keys(M.style); N < D.length; N++) {
					var H = D[N];
					null == M.style[H] && delete M.style[H];
				}
				if (r)
					if ('allow' in M) {
						var z = M.allow.replace('fullscreen', '');
						M.allow = ('fullscreen ' + z.trim()).trim();
					} else M.allow = 'fullscreen';
				return (
					w >= 0 && (M.style.hasOwnProperty('border') || (M.style.border = w)),
					n.createElement('iframe', i({}, M))
				);
			};
			var a = r(35944);
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
			function s(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			function f(e, t) {
				return (
					(f =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					f(e, t)
				);
			}
			function p(e, t) {
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
			const b = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && f(e, t);
				})(i, e);
				var t,
					r,
					n,
					l,
					o =
						((n = i),
						(l = (function () {
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
								t = y(n);
							if (l) {
								var r = y(this).constructor;
								e = Reflect.construct(t, arguments, r);
							} else e = t.apply(this, arguments);
							return p(this, e);
						});
				function i(e) {
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, i),
						o.call(this, e)
					);
				}
				return (
					(t = i),
					(r = [
						{
							key: 'render',
							value: function () {
								return (0, a.jsx)(u, {
									url: 'https://api.dev.meta1.io/explorer-backing-assets',
									display: 'initial',
									position: 'relative',
									allowFullScreen: !0,
								});
							},
						},
					]) && s(t.prototype, r),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					i
				);
			})(n.Component);
		},
	},
]);
