'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[631],
	{
		99177: (e, t, n) => {
			n.d(t, {Z: () => j});
			var r = n(71002),
				a = n(4942),
				u = n(87462),
				o = n(29439),
				l = n(67294),
				i = n(93433),
				c = n(94184),
				s = n.n(c),
				f = n(96774),
				v = n.n(f),
				d = n(21770),
				m = n(44925),
				p = n(1413),
				h = n(15105);
			const g = l.createContext({
				min: 0,
				max: 0,
				direction: 'ltr',
				step: 1,
				includedStart: 0,
				includedEnd: 0,
				tabIndex: 0,
			});
			function b(e, t, n) {
				return (e - t) / (n - t);
			}
			function x(e, t, n, r) {
				var a = b(t, n, r),
					u = {};
				switch (e) {
					case 'rtl':
						(u.right = ''.concat(100 * a, '%')),
							(u.transform = 'translateX(50%)');
						break;
					case 'btt':
						(u.bottom = ''.concat(100 * a, '%')),
							(u.transform = 'translateY(50%)');
						break;
					case 'ttb':
						(u.top = ''.concat(100 * a, '%')),
							(u.transform = 'translateY(-50%)');
						break;
					default:
						(u.left = ''.concat(100 * a, '%')),
							(u.transform = 'translateX(-50%)');
				}
				return u;
			}
			function y(e, t) {
				return Array.isArray(e) ? e[t] : e;
			}
			var Z = [
				'prefixCls',
				'value',
				'valueIndex',
				'onStartMove',
				'style',
				'render',
				'dragging',
				'onOffsetChange',
			];
			const C = l.forwardRef(function (e, t) {
				var n,
					r,
					o = e.prefixCls,
					i = e.value,
					c = e.valueIndex,
					f = e.onStartMove,
					v = e.style,
					d = e.render,
					b = e.dragging,
					C = e.onOffsetChange,
					E = (0, m.Z)(e, Z),
					k = l.useContext(g),
					M = k.min,
					S = k.max,
					w = k.direction,
					F = k.disabled,
					P = k.range,
					R = k.tabIndex,
					O = k.ariaLabelForHandle,
					L = k.ariaLabelledByForHandle,
					N = k.ariaValueTextFormatterForHandle,
					I = ''.concat(o, '-handle'),
					D = function (e) {
						F || f(e, c);
					},
					H = x(w, i, M, S),
					T = l.createElement(
						'div',
						(0, u.Z)(
							{
								ref: t,
								className: s()(
									I,
									((n = {}),
									(0, a.Z)(n, ''.concat(I, '-').concat(c + 1), P),
									(0, a.Z)(n, ''.concat(I, '-dragging'), b),
									n)
								),
								style: (0, p.Z)((0, p.Z)({}, H), v),
								onMouseDown: D,
								onTouchStart: D,
								onKeyDown: function (e) {
									if (!F) {
										var t = null;
										switch (e.which || e.keyCode) {
											case h.Z.LEFT:
												t = 'ltr' === w || 'btt' === w ? -1 : 1;
												break;
											case h.Z.RIGHT:
												t = 'ltr' === w || 'btt' === w ? 1 : -1;
												break;
											case h.Z.UP:
												t = 'ttb' !== w ? 1 : -1;
												break;
											case h.Z.DOWN:
												t = 'ttb' !== w ? -1 : 1;
												break;
											case h.Z.HOME:
												t = 'min';
												break;
											case h.Z.END:
												t = 'max';
												break;
											case h.Z.PAGE_UP:
												t = 2;
												break;
											case h.Z.PAGE_DOWN:
												t = -2;
										}
										null !== t && (e.preventDefault(), C(t, c));
									}
								},
								tabIndex: F ? null : y(R, c),
								role: 'slider',
								'aria-valuemin': M,
								'aria-valuemax': S,
								'aria-valuenow': i,
								'aria-disabled': F,
								'aria-label': y(O, c),
								'aria-labelledby': y(L, c),
								'aria-valuetext':
									null === (r = y(N, c)) || void 0 === r ? void 0 : r(i),
							},
							E
						)
					);
				return (
					d && (T = d(T, {index: c, prefixCls: o, value: i, dragging: b})), T
				);
			});
			var E = [
				'prefixCls',
				'style',
				'onStartMove',
				'onOffsetChange',
				'values',
				'handleRender',
				'draggingIndex',
			];
			const k = l.forwardRef(function (e, t) {
				var n = e.prefixCls,
					r = e.style,
					a = e.onStartMove,
					o = e.onOffsetChange,
					i = e.values,
					c = e.handleRender,
					s = e.draggingIndex,
					f = (0, m.Z)(e, E),
					v = l.useRef({});
				return (
					l.useImperativeHandle(t, function () {
						return {
							focus: function (e) {
								var t;
								null === (t = v.current[e]) || void 0 === t || t.focus();
							},
						};
					}),
					l.createElement(
						l.Fragment,
						null,
						i.map(function (e, t) {
							return l.createElement(
								C,
								(0, u.Z)(
									{
										ref: function (e) {
											e ? (v.current[t] = e) : delete v.current[t];
										},
										dragging: s === t,
										prefixCls: n,
										style: y(r, t),
										key: t,
										value: e,
										valueIndex: t,
										onStartMove: a,
										onOffsetChange: o,
										render: c,
									},
									f
								)
							);
						})
					)
				);
			});
			function M(e) {
				var t = 'touches' in e ? e.touches[0] : e;
				return {pageX: t.pageX, pageY: t.pageY};
			}
			function S(e) {
				var t = e.prefixCls,
					n = e.style,
					r = e.start,
					a = e.end,
					u = e.index,
					o = e.onStartMove,
					i = l.useContext(g),
					c = i.direction,
					f = i.min,
					v = i.max,
					d = i.disabled,
					m = i.range,
					h = ''.concat(t, '-track'),
					x = b(r, f, v),
					y = b(a, f, v),
					Z = function (e) {
						!d && o && o(e, -1);
					},
					C = {};
				switch (c) {
					case 'rtl':
						(C.right = ''.concat(100 * x, '%')),
							(C.width = ''.concat(100 * y - 100 * x, '%'));
						break;
					case 'btt':
						(C.bottom = ''.concat(100 * x, '%')),
							(C.height = ''.concat(100 * y - 100 * x, '%'));
						break;
					case 'ttb':
						(C.top = ''.concat(100 * x, '%')),
							(C.height = ''.concat(100 * y - 100 * x, '%'));
						break;
					default:
						(C.left = ''.concat(100 * x, '%')),
							(C.width = ''.concat(100 * y - 100 * x, '%'));
				}
				return l.createElement('div', {
					className: s()(h, m && ''.concat(h, '-').concat(u + 1)),
					style: (0, p.Z)((0, p.Z)({}, C), n),
					onMouseDown: Z,
					onTouchStart: Z,
				});
			}
			function w(e) {
				var t = e.prefixCls,
					n = e.style,
					r = e.values,
					a = e.startPoint,
					u = e.onStartMove,
					o = l.useContext(g),
					i = o.included,
					c = o.range,
					s = o.min,
					f = l.useMemo(
						function () {
							if (!c) {
								if (0 === r.length) return [];
								var e = null != a ? a : s,
									t = r[0];
								return [{start: Math.min(e, t), end: Math.max(e, t)}];
							}
							for (var n = [], u = 0; u < r.length - 1; u += 1)
								n.push({start: r[u], end: r[u + 1]});
							return n;
						},
						[r, c, a, s]
					);
				return i
					? f.map(function (e, r) {
							var a = e.start,
								o = e.end;
							return l.createElement(S, {
								index: r,
								prefixCls: t,
								style: y(n, r),
								start: a,
								end: o,
								key: r,
								onStartMove: u,
							});
					  })
					: null;
			}
			function F(e) {
				var t = e.prefixCls,
					n = e.style,
					r = e.children,
					u = e.value,
					o = e.onClick,
					i = l.useContext(g),
					c = i.min,
					f = i.max,
					v = i.direction,
					d = i.includedStart,
					m = i.includedEnd,
					h = i.included,
					b = ''.concat(t, '-text'),
					y = x(v, u, c, f);
				return l.createElement(
					'span',
					{
						className: s()(
							b,
							(0, a.Z)({}, ''.concat(b, '-active'), h && d <= u && u <= m)
						),
						style: (0, p.Z)((0, p.Z)({}, y), n),
						onMouseDown: function (e) {
							e.stopPropagation();
						},
						onClick: function () {
							o(u);
						},
					},
					r
				);
			}
			function P(e) {
				var t = e.prefixCls,
					n = e.marks,
					r = e.onClick,
					a = ''.concat(t, '-mark');
				return n.length
					? l.createElement(
							'div',
							{className: a},
							n.map(function (e) {
								var t = e.value,
									n = e.style,
									u = e.label;
								return l.createElement(
									F,
									{key: t, prefixCls: a, style: n, value: t, onClick: r},
									u
								);
							})
					  )
					: null;
			}
			function R(e) {
				var t = e.prefixCls,
					n = e.value,
					r = e.style,
					u = e.activeStyle,
					o = l.useContext(g),
					i = o.min,
					c = o.max,
					f = o.direction,
					v = o.included,
					d = o.includedStart,
					m = o.includedEnd,
					h = ''.concat(t, '-dot'),
					b = v && d <= n && n <= m,
					y = (0, p.Z)((0, p.Z)({}, x(f, n, i, c)), r);
				return (
					b && (y = (0, p.Z)((0, p.Z)({}, y), u)),
					l.createElement('span', {
						className: s()(h, (0, a.Z)({}, ''.concat(h, '-active'), b)),
						style: y,
					})
				);
			}
			function O(e) {
				var t = e.prefixCls,
					n = e.marks,
					r = e.dots,
					a = e.style,
					u = e.activeStyle,
					o = l.useContext(g),
					i = o.min,
					c = o.max,
					s = o.step,
					f = l.useMemo(
						function () {
							var e = new Set();
							if (
								(n.forEach(function (t) {
									e.add(t.value);
								}),
								r)
							)
								for (var t = i; t <= c; ) e.add(t), (t += s);
							return Array.from(e);
						},
						[i, c, s, r, n]
					);
				return l.createElement(
					'div',
					{className: ''.concat(t, '-step')},
					f.map(function (e) {
						return l.createElement(R, {
							prefixCls: t,
							key: e,
							value: e,
							style: a,
							activeStyle: u,
						});
					})
				);
			}
			n(80334);
			var L = l.forwardRef(function (e, t) {
				var n,
					u = e.prefixCls,
					c = void 0 === u ? 'rc-slider' : u,
					f = e.className,
					m = e.style,
					p = e.disabled,
					h = void 0 !== p && p,
					b = e.autoFocus,
					x = e.onFocus,
					y = e.onBlur,
					Z = e.min,
					C = void 0 === Z ? 0 : Z,
					E = e.max,
					S = void 0 === E ? 100 : E,
					F = e.step,
					R = void 0 === F ? 1 : F,
					L = e.value,
					N = e.defaultValue,
					I = e.range,
					D = e.count,
					H = e.onChange,
					T = e.onBeforeChange,
					B = e.onAfterChange,
					A = e.allowCross,
					j = void 0 === A || A,
					X = e.pushable,
					Y = void 0 !== X && X,
					V = e.draggableTrack,
					_ = e.reverse,
					G = e.vertical,
					z = e.included,
					U = void 0 === z || z,
					W = e.startPoint,
					K = e.trackStyle,
					Q = e.handleStyle,
					q = e.railStyle,
					J = e.dotStyle,
					$ = e.activeDotStyle,
					ee = e.marks,
					te = e.dots,
					ne = e.handleRender,
					re = e.tabIndex,
					ae = void 0 === re ? 0 : re,
					ue = e.ariaLabelForHandle,
					oe = e.ariaLabelledByForHandle,
					le = e.ariaValueTextFormatterForHandle,
					ie = l.useRef(),
					ce = l.useRef(),
					se = l.useMemo(
						function () {
							return G ? (_ ? 'ttb' : 'btt') : _ ? 'rtl' : 'ltr';
						},
						[_, G]
					),
					fe = l.useMemo(
						function () {
							return isFinite(C) ? C : 0;
						},
						[C]
					),
					ve = l.useMemo(
						function () {
							return isFinite(S) ? S : 100;
						},
						[S]
					),
					de = l.useMemo(
						function () {
							return null !== R && R <= 0 ? 1 : R;
						},
						[R]
					),
					me = l.useMemo(
						function () {
							return !0 === Y ? de : Y >= 0 && Y;
						},
						[Y, de]
					),
					pe = l.useMemo(
						function () {
							return Object.keys(ee || {})
								.map(function (e) {
									var t = ee[e],
										n = {value: Number(e)};
									return (
										t &&
										'object' === (0, r.Z)(t) &&
										!l.isValidElement(t) &&
										('label' in t || 'style' in t)
											? ((n.style = t.style), (n.label = t.label))
											: (n.label = t),
										n
									);
								})
								.filter(function (e) {
									var t = e.label;
									return t || 'number' == typeof t;
								})
								.sort(function (e, t) {
									return e.value - t.value;
								});
						},
						[ee]
					),
					he = (function (e, t, n, r, a, u) {
						var o = l.useCallback(
								function (n) {
									var r = isFinite(n);
									return (r = Math.min(t, n)), Math.max(e, r);
								},
								[e, t]
							),
							c = l.useCallback(
								function (r) {
									if (null !== n) {
										var a = e + Math.round((o(r) - e) / n) * n,
											u = function (e) {
												return (String(e).split('.')[1] || '').length;
											},
											l = Math.max(u(n), u(t), u(e)),
											i = Number(a.toFixed(l));
										return e <= i && i <= t ? i : null;
									}
									return null;
								},
								[n, e, t, o]
							),
							s = l.useCallback(
								function (a) {
									var u = o(a),
										l = r.map(function (e) {
											return e.value;
										});
									null !== n && l.push(c(a)), l.push(e, t);
									var i = l[0],
										s = t - e;
									return (
										l.forEach(function (e) {
											var t = Math.abs(u - e);
											t <= s && ((i = e), (s = t));
										}),
										i
									);
								},
								[e, t, r, n, o, c]
							),
							f = function a(u, o, l) {
								var s =
									arguments.length > 3 && void 0 !== arguments[3]
										? arguments[3]
										: 'unit';
								if ('number' == typeof o) {
									var f,
										v = u[l],
										d = v + o,
										m = [];
									r.forEach(function (e) {
										m.push(e.value);
									}),
										m.push(e, t),
										m.push(c(v));
									var p = o > 0 ? 1 : -1;
									'unit' === s ? m.push(c(v + p * n)) : m.push(c(d)),
										(m = m
											.filter(function (e) {
												return null !== e;
											})
											.filter(function (e) {
												return o < 0 ? e <= v : e >= v;
											})),
										'unit' === s &&
											(m = m.filter(function (e) {
												return e !== v;
											}));
									var h = 'unit' === s ? v : d;
									f = m[0];
									var g = Math.abs(f - h);
									if (
										(m.forEach(function (e) {
											var t = Math.abs(e - h);
											t < g && ((f = e), (g = t));
										}),
										void 0 === f)
									)
										return o < 0 ? e : t;
									if ('dist' === s) return f;
									if (Math.abs(o) > 1) {
										var b = (0, i.Z)(u);
										return (b[l] = f), a(b, o - p, l, s);
									}
									return f;
								}
								return 'min' === o ? e : 'max' === o ? t : void 0;
							},
							v = function (e, t, n) {
								var r =
										arguments.length > 3 && void 0 !== arguments[3]
											? arguments[3]
											: 'unit',
									a = e[n],
									u = f(e, t, n, r);
								return {value: u, changed: u !== a};
							},
							d = function (e) {
								return (
									(null === u && 0 === e) || ('number' == typeof u && e < u)
								);
							};
						return [
							s,
							function (e, t, n) {
								var r =
										arguments.length > 3 && void 0 !== arguments[3]
											? arguments[3]
											: 'unit',
									o = e.map(s),
									l = o[n],
									i = f(o, t, n, r);
								if (((o[n] = i), !1 === a)) {
									var c = u || 0;
									n > 0 &&
										o[n - 1] !== l &&
										(o[n] = Math.max(o[n], o[n - 1] + c)),
										n < o.length - 1 &&
											o[n + 1] !== l &&
											(o[n] = Math.min(o[n], o[n + 1] - c));
								} else if ('number' == typeof u || null === u) {
									for (var m = n + 1; m < o.length; m += 1)
										for (var p = !0; d(o[m] - o[m - 1]) && p; ) {
											var h = v(o, 1, m);
											(o[m] = h.value), (p = h.changed);
										}
									for (var g = n; g > 0; g -= 1)
										for (var b = !0; d(o[g] - o[g - 1]) && b; ) {
											var x = v(o, -1, g - 1);
											(o[g - 1] = x.value), (b = x.changed);
										}
									for (var y = o.length - 1; y > 0; y -= 1)
										for (var Z = !0; d(o[y] - o[y - 1]) && Z; ) {
											var C = v(o, -1, y - 1);
											(o[y - 1] = C.value), (Z = C.changed);
										}
									for (var E = 0; E < o.length - 1; E += 1)
										for (var k = !0; d(o[E + 1] - o[E]) && k; ) {
											var M = v(o, 1, E + 1);
											(o[E + 1] = M.value), (k = M.changed);
										}
								}
								return {value: o[n], values: o};
							},
						];
					})(fe, ve, de, pe, j, me),
					ge = (0, o.Z)(he, 2),
					be = ge[0],
					xe = ge[1],
					ye = (0, d.Z)(N, {value: L}),
					Ze = (0, o.Z)(ye, 2),
					Ce = Ze[0],
					Ee = Ze[1],
					ke = l.useMemo(
						function () {
							var e = null == Ce ? [] : Array.isArray(Ce) ? Ce : [Ce],
								t = (0, o.Z)(e, 1)[0],
								n = null === Ce ? [] : [void 0 === t ? fe : t];
							if (I) {
								if (((n = (0, i.Z)(e)), D || void 0 === Ce)) {
									var r = D >= 0 ? D + 1 : 2;
									for (n = n.slice(0, r); n.length < r; ) {
										var a;
										n.push(
											null !== (a = n[n.length - 1]) && void 0 !== a ? a : fe
										);
									}
								}
								n.sort(function (e, t) {
									return e - t;
								});
							}
							return (
								n.forEach(function (e, t) {
									n[t] = be(e);
								}),
								n
							);
						},
						[Ce, I, fe, D, be]
					),
					Me = l.useRef(ke);
				Me.current = ke;
				var Se = function (e) {
						return I ? e : e[0];
					},
					we = function (e) {
						var t = (0, i.Z)(e).sort(function (e, t) {
							return e - t;
						});
						H && !v()(t, Me.current) && H(Se(t)), Ee(t);
					},
					Fe = function (e) {
						if (!h) {
							var t = 0,
								n = ve - fe;
							ke.forEach(function (r, a) {
								var u = Math.abs(e - r);
								u <= n && ((n = u), (t = a));
							});
							var r = (0, i.Z)(ke);
							(r[t] = e),
								I && !ke.length && void 0 === D && r.push(e),
								null == T || T(Se(r)),
								we(r),
								null == B || B(Se(r));
						}
					},
					Pe = l.useState(null),
					Re = (0, o.Z)(Pe, 2),
					Oe = Re[0],
					Le = Re[1];
				l.useEffect(
					function () {
						if (null !== Oe) {
							var e = ke.indexOf(Oe);
							e >= 0 && ie.current.focus(e);
						}
						Le(null);
					},
					[Oe]
				);
				var Ne = l.useMemo(
						function () {
							return (!V || null !== de) && V;
						},
						[V, de]
					),
					Ie = (function (e, t, n, r, a, u, c, s, f) {
						var v = l.useState(null),
							d = (0, o.Z)(v, 2),
							m = d[0],
							p = d[1],
							h = l.useState(-1),
							g = (0, o.Z)(h, 2),
							b = g[0],
							x = g[1],
							y = l.useState(n),
							Z = (0, o.Z)(y, 2),
							C = Z[0],
							E = Z[1],
							k = l.useState(n),
							S = (0, o.Z)(k, 2),
							w = S[0],
							F = S[1],
							P = l.useRef(null),
							R = l.useRef(null);
						l.useEffect(
							function () {
								-1 === b && E(n);
							},
							[n, b]
						),
							l.useEffect(function () {
								return function () {
									document.removeEventListener('mousemove', P.current),
										document.removeEventListener('mouseup', R.current),
										document.removeEventListener('touchmove', P.current),
										document.removeEventListener('touchend', R.current);
								};
							}, []);
						var O = function (e, t) {
								C.some(function (t, n) {
									return t !== e[n];
								}) && (void 0 !== t && p(t), E(e), c(e));
							},
							L = function (e, t) {
								if (-1 === e) {
									var n = w[0],
										o = w[w.length - 1],
										l = r - n,
										c = a - o,
										s = t * (a - r);
									(s = Math.max(s, l)), (s = Math.min(s, c));
									var v = u(n + s);
									s = v - n;
									var d = w.map(function (e) {
										return e + s;
									});
									O(d);
								} else {
									var m = (a - r) * t,
										p = (0, i.Z)(C);
									p[e] = w[e];
									var h = f(p, m, e, 'dist');
									O(h.values, h.value);
								}
							},
							N = l.useRef(L);
						N.current = L;
						var I = l.useMemo(
							function () {
								var e = (0, i.Z)(n).sort(function (e, t) {
										return e - t;
									}),
									t = (0, i.Z)(C).sort(function (e, t) {
										return e - t;
									});
								return e.every(function (e, n) {
									return e === t[n];
								})
									? C
									: n;
							},
							[n, C]
						);
						return [
							b,
							m,
							I,
							function (r, a) {
								r.stopPropagation();
								var u = n[a];
								x(a), p(u), F(n);
								var o = M(r),
									l = o.pageX,
									i = o.pageY,
									c = function (n) {
										n.preventDefault();
										var r,
											u = M(n),
											o = u.pageX,
											c = u.pageY,
											s = o - l,
											f = c - i,
											v = e.current.getBoundingClientRect(),
											d = v.width,
											m = v.height;
										switch (t) {
											case 'btt':
												r = -f / m;
												break;
											case 'ttb':
												r = f / m;
												break;
											case 'rtl':
												r = -s / d;
												break;
											default:
												r = s / d;
										}
										N.current(a, r);
									},
									s = function e(t) {
										t.preventDefault(),
											document.removeEventListener('mouseup', e),
											document.removeEventListener('mousemove', c),
											document.removeEventListener('touchend', e),
											document.removeEventListener('touchmove', c),
											(P.current = null),
											(R.current = null),
											x(-1),
											null == B || B(Se(Me.current));
									};
								document.addEventListener('mouseup', s),
									document.addEventListener('mousemove', c),
									document.addEventListener('touchend', s),
									document.addEventListener('touchmove', c),
									(P.current = c),
									(R.current = s);
							},
						];
					})(ce, se, ke, fe, ve, be, we, 0, xe),
					De = (0, o.Z)(Ie, 4),
					He = De[0],
					Te = De[1],
					Be = De[2],
					Ae = De[3],
					je = function (e, t) {
						Ae(e, t), null == T || T(Se(Me.current));
					},
					Xe = -1 !== He;
				l.useEffect(
					function () {
						if (!Xe) {
							var e = ke.lastIndexOf(Te);
							ie.current.focus(e);
						}
					},
					[Xe]
				);
				var Ye = l.useMemo(
						function () {
							return (0, i.Z)(Be).sort(function (e, t) {
								return e - t;
							});
						},
						[Be]
					),
					Ve = l.useMemo(
						function () {
							return I ? [Ye[0], Ye[Ye.length - 1]] : [fe, Ye[0]];
						},
						[Ye, I, fe]
					),
					_e = (0, o.Z)(Ve, 2),
					Ge = _e[0],
					ze = _e[1];
				l.useImperativeHandle(t, function () {
					return {
						focus: function () {
							ie.current.focus(0);
						},
						blur: function () {
							var e = document.activeElement;
							ce.current.contains(e) && (null == e || e.blur());
						},
					};
				}),
					l.useEffect(function () {
						b && ie.current.focus(0);
					}, []);
				var Ue = l.useMemo(
					function () {
						return {
							min: fe,
							max: ve,
							direction: se,
							disabled: h,
							step: de,
							included: U,
							includedStart: Ge,
							includedEnd: ze,
							range: I,
							tabIndex: ae,
							ariaLabelForHandle: ue,
							ariaLabelledByForHandle: oe,
							ariaValueTextFormatterForHandle: le,
						};
					},
					[fe, ve, se, h, de, U, Ge, ze, I, ae, ue, oe, le]
				);
				return l.createElement(
					g.Provider,
					{value: Ue},
					l.createElement(
						'div',
						{
							ref: ce,
							className: s()(
								c,
								f,
								((n = {}),
								(0, a.Z)(n, ''.concat(c, '-disabled'), h),
								(0, a.Z)(n, ''.concat(c, '-vertical'), G),
								(0, a.Z)(n, ''.concat(c, '-horizontal'), !G),
								(0, a.Z)(n, ''.concat(c, '-with-marks'), pe.length),
								n)
							),
							style: m,
							onMouseDown: function (e) {
								e.preventDefault();
								var t,
									n = ce.current.getBoundingClientRect(),
									r = n.width,
									a = n.height,
									u = n.left,
									o = n.top,
									l = n.bottom,
									i = n.right,
									c = e.clientX,
									s = e.clientY;
								switch (se) {
									case 'btt':
										t = (l - s) / a;
										break;
									case 'ttb':
										t = (s - o) / a;
										break;
									case 'rtl':
										t = (i - c) / r;
										break;
									default:
										t = (c - u) / r;
								}
								Fe(be(fe + t * (ve - fe)));
							},
						},
						l.createElement('div', {
							className: ''.concat(c, '-rail'),
							style: q,
						}),
						l.createElement(w, {
							prefixCls: c,
							style: K,
							values: Ye,
							startPoint: W,
							onStartMove: Ne ? je : null,
						}),
						l.createElement(O, {
							prefixCls: c,
							marks: pe,
							dots: te,
							style: J,
							activeStyle: $,
						}),
						l.createElement(k, {
							ref: ie,
							prefixCls: c,
							style: Q,
							values: Be,
							draggingIndex: He,
							onStartMove: je,
							onOffsetChange: function (e, t) {
								if (!h) {
									var n = xe(ke, e, t);
									null == T || T(Se(ke)),
										we(n.values),
										null == B || B(Se(n.values)),
										Le(n.value);
								}
							},
							onFocus: x,
							onBlur: y,
							handleRender: ne,
						}),
						l.createElement(P, {prefixCls: c, marks: pe, onClick: Fe})
					)
				);
			});
			const N = L;
			var I = n(42550),
				D = n(75164),
				H = n(61580);
			const T = l.forwardRef(function (e, t) {
				var n = e.visible,
					r = (0, l.useRef)(null),
					a = (0, l.useRef)(null);
				function o() {
					D.Z.cancel(a.current), (a.current = null);
				}
				return (
					l.useEffect(
						function () {
							return (
								n
									? (a.current = (0, D.Z)(function () {
											var e;
											null === (e = r.current) ||
												void 0 === e ||
												e.forcePopupAlign(),
												(a.current = null);
									  }))
									: o(),
								o
							);
						},
						[n, e.title]
					),
					l.createElement(H.Z, (0, u.Z)({ref: (0, I.sQ)(r, t)}, e))
				);
			});
			var B = n(65632),
				A = l.forwardRef(function (e, t) {
					var n = l.useContext(B.E_),
						i = n.getPrefixCls,
						c = n.direction,
						f = n.getPopupContainer,
						v = l.useState({}),
						d = (0, o.Z)(v, 2),
						m = d[0],
						p = d[1],
						h = function (e, t) {
							p(function (n) {
								return (0, u.Z)((0, u.Z)({}, n), (0, a.Z)({}, e, t));
							});
						},
						g = function (e, t) {
							return e || (t ? ('rtl' === c ? 'left' : 'right') : 'top');
						},
						b = e.prefixCls,
						x = e.tooltipPrefixCls,
						y = e.range,
						Z = e.className,
						C = (function (e, t) {
							var n = {};
							for (var r in e)
								Object.prototype.hasOwnProperty.call(e, r) &&
									t.indexOf(r) < 0 &&
									(n[r] = e[r]);
							if (
								null != e &&
								'function' == typeof Object.getOwnPropertySymbols
							) {
								var a = 0;
								for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
									t.indexOf(r[a]) < 0 &&
										Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
										(n[r[a]] = e[r[a]]);
							}
							return n;
						})(e, ['prefixCls', 'tooltipPrefixCls', 'range', 'className']),
						E = i('slider', b),
						k = i('tooltip', x),
						M = s()(Z, (0, a.Z)({}, ''.concat(E, '-rtl'), 'rtl' === c));
					'rtl' !== c || C.vertical || (C.reverse = !C.reverse);
					var S = l.useMemo(
							function () {
								return y
									? 'object' === (0, r.Z)(y)
										? [!0, y.draggableTrack]
										: [!0, !1]
									: [!1];
							},
							[y]
						),
						w = (0, o.Z)(S, 2),
						F = w[0],
						P = w[1];
					return l.createElement(
						N,
						(0, u.Z)({}, C, {
							step: C.step,
							range: F,
							draggableTrack: P,
							className: M,
							ref: t,
							prefixCls: E,
							handleRender: function (t, n) {
								var r = n.index,
									a = n.dragging,
									o = i(),
									c = e.tipFormatter,
									s = e.tooltipVisible,
									v = e.tooltipPlacement,
									d = e.getTooltipPopupContainer,
									p = e.vertical,
									b = !!c && (m[r] || a),
									x = s || (void 0 === s && b),
									y = (0, u.Z)((0, u.Z)({}, t.props), {
										onMouseEnter: function () {
											return h(r, !0);
										},
										onMouseLeave: function () {
											return h(r, !1);
										},
									});
								return l.createElement(
									T,
									{
										prefixCls: k,
										title: c ? c(n.value) : '',
										visible: x,
										placement: g(v, p),
										transitionName: ''.concat(o, '-zoom-down'),
										key: r,
										overlayClassName: ''.concat(E, '-tooltip'),
										getPopupContainer: d || f,
									},
									l.cloneElement(t, y)
								);
							},
						})
					);
				});
			(A.displayName = 'Slider'),
				(A.defaultProps = {
					tipFormatter: function (e) {
						return 'number' == typeof e ? e.toString() : '';
					},
				});
			const j = A;
		},
	},
]);
