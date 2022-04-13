'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[428],
	{
		47428: (e, t, n) => {
			n.d(t, {Z: () => $});
			var a = n(87462),
				r = n(4942),
				o = n(67294),
				i = n(29439),
				c = n(71002),
				l = n(44925),
				u = n(1413),
				s = n(94184),
				d = n.n(s),
				f = n(50344),
				v = n(31131),
				m = n(21770),
				b = n(93433),
				h = n(75164),
				p = n(48717);
			function y(e) {
				var t = (0, o.useRef)(),
					n = (0, o.useRef)(!1);
				return (
					(0, o.useEffect)(function () {
						return function () {
							(n.current = !0), h.Z.cancel(t.current);
						};
					}, []),
					function () {
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
							r[o] = arguments[o];
						n.current ||
							(h.Z.cancel(t.current),
							(t.current = (0, h.Z)(function () {
								e.apply(void 0, r);
							})));
					}
				);
			}
			var Z = n(15105);
			function g(e, t) {
				var n,
					a = e.prefixCls,
					i = e.id,
					c = e.active,
					l = e.tab,
					u = l.key,
					s = l.tab,
					f = l.disabled,
					v = l.closeIcon,
					m = e.closable,
					b = e.renderWrapper,
					h = e.removeAriaLabel,
					p = e.editable,
					y = e.onClick,
					g = e.onRemove,
					E = e.onFocus,
					k = e.style,
					x = ''.concat(a, '-tab');
				o.useEffect(function () {
					return g;
				}, []);
				var w = p && !1 !== m && !f;
				function C(e) {
					f || y(e);
				}
				var N = o.createElement(
					'div',
					{
						key: u,
						ref: t,
						className: d()(
							x,
							((n = {}),
							(0, r.Z)(n, ''.concat(x, '-with-remove'), w),
							(0, r.Z)(n, ''.concat(x, '-active'), c),
							(0, r.Z)(n, ''.concat(x, '-disabled'), f),
							n)
						),
						style: k,
						onClick: C,
					},
					o.createElement(
						'div',
						{
							role: 'tab',
							'aria-selected': c,
							id: i && ''.concat(i, '-tab-').concat(u),
							className: ''.concat(x, '-btn'),
							'aria-controls': i && ''.concat(i, '-panel-').concat(u),
							'aria-disabled': f,
							tabIndex: f ? null : 0,
							onClick: function (e) {
								e.stopPropagation(), C(e);
							},
							onKeyDown: function (e) {
								[Z.Z.SPACE, Z.Z.ENTER].includes(e.which) &&
									(e.preventDefault(), C(e));
							},
							onFocus: E,
						},
						s
					),
					w &&
						o.createElement(
							'button',
							{
								type: 'button',
								'aria-label': h || 'remove',
								tabIndex: 0,
								className: ''.concat(x, '-remove'),
								onClick: function (e) {
									var t;
									e.stopPropagation(),
										(t = e).preventDefault(),
										t.stopPropagation(),
										p.onEdit('remove', {key: u, event: t});
								},
							},
							v || p.removeIcon || '×'
						)
				);
				return b ? b(N) : N;
			}
			const E = o.forwardRef(g);
			var k = {width: 0, height: 0, left: 0, top: 0},
				x = {width: 0, height: 0, left: 0, top: 0, right: 0},
				w = n(11688),
				C = n(96753);
			function N(e, t) {
				var n = e.prefixCls,
					a = e.editable,
					r = e.locale,
					i = e.style;
				return a && !1 !== a.showAdd
					? o.createElement(
							'button',
							{
								ref: t,
								type: 'button',
								className: ''.concat(n, '-nav-add'),
								style: i,
								'aria-label':
									(null == r ? void 0 : r.addAriaLabel) || 'Add tab',
								onClick: function (e) {
									a.onEdit('add', {event: e});
								},
							},
							a.addIcon || '+'
					  )
					: null;
			}
			const T = o.forwardRef(N);
			function I(e, t) {
				var n = e.prefixCls,
					a = e.id,
					c = e.tabs,
					l = e.locale,
					u = e.mobile,
					s = e.moreIcon,
					f = void 0 === s ? 'More' : s,
					v = e.moreTransitionName,
					m = e.style,
					b = e.className,
					h = e.editable,
					p = e.tabBarGutter,
					y = e.rtl,
					g = e.removeAriaLabel,
					E = e.onTabClick,
					k = (0, o.useState)(!1),
					x = (0, i.Z)(k, 2),
					N = x[0],
					I = x[1],
					P = (0, o.useState)(null),
					S = (0, i.Z)(P, 2),
					R = S[0],
					M = S[1],
					B = ''.concat(a, '-more-popup'),
					L = ''.concat(n, '-dropdown'),
					A = null !== R ? ''.concat(B, '-').concat(R) : null,
					D = null == l ? void 0 : l.dropdownAriaLabel,
					K = o.createElement(
						w.ZP,
						{
							onClick: function (e) {
								var t = e.key,
									n = e.domEvent;
								E(t, n), I(!1);
							},
							id: B,
							tabIndex: -1,
							role: 'listbox',
							'aria-activedescendant': A,
							selectedKeys: [R],
							'aria-label': void 0 !== D ? D : 'expanded dropdown',
						},
						c.map(function (e) {
							var t = h && !1 !== e.closable && !e.disabled;
							return o.createElement(
								w.sN,
								{
									key: e.key,
									id: ''.concat(B, '-').concat(e.key),
									role: 'option',
									'aria-controls': a && ''.concat(a, '-panel-').concat(e.key),
									disabled: e.disabled,
								},
								o.createElement('span', null, e.tab),
								t &&
									o.createElement(
										'button',
										{
											type: 'button',
											'aria-label': g || 'remove',
											tabIndex: 0,
											className: ''.concat(L, '-menu-item-remove'),
											onClick: function (t) {
												var n, a;
												t.stopPropagation(),
													(n = t),
													(a = e.key),
													n.preventDefault(),
													n.stopPropagation(),
													h.onEdit('remove', {key: a, event: n});
											},
										},
										e.closeIcon || h.removeIcon || '×'
									)
							);
						})
					);
				function O(e) {
					for (
						var t = c.filter(function (e) {
								return !e.disabled;
							}),
							n =
								t.findIndex(function (e) {
									return e.key === R;
								}) || 0,
							a = t.length,
							r = 0;
						r < a;
						r += 1
					) {
						var o = t[(n = (n + e + a) % a)];
						if (!o.disabled) return void M(o.key);
					}
				}
				(0, o.useEffect)(
					function () {
						var e = document.getElementById(A);
						e && e.scrollIntoView && e.scrollIntoView(!1);
					},
					[R]
				),
					(0, o.useEffect)(
						function () {
							N || M(null);
						},
						[N]
					);
				var j = (0, r.Z)({}, y ? 'marginRight' : 'marginLeft', p);
				c.length || ((j.visibility = 'hidden'), (j.order = 1));
				var W = d()((0, r.Z)({}, ''.concat(L, '-rtl'), y)),
					q = u
						? null
						: o.createElement(
								C.Z,
								{
									prefixCls: L,
									overlay: K,
									trigger: ['hover'],
									visible: N,
									transitionName: v,
									onVisibleChange: I,
									overlayClassName: W,
									mouseEnterDelay: 0.1,
									mouseLeaveDelay: 0.1,
								},
								o.createElement(
									'button',
									{
										type: 'button',
										className: ''.concat(n, '-nav-more'),
										style: j,
										tabIndex: -1,
										'aria-hidden': 'true',
										'aria-haspopup': 'listbox',
										'aria-controls': B,
										id: ''.concat(a, '-more'),
										'aria-expanded': N,
										onKeyDown: function (e) {
											var t = e.which;
											if (N)
												switch (t) {
													case Z.Z.UP:
														O(-1), e.preventDefault();
														break;
													case Z.Z.DOWN:
														O(1), e.preventDefault();
														break;
													case Z.Z.ESC:
														I(!1);
														break;
													case Z.Z.SPACE:
													case Z.Z.ENTER:
														null !== R && E(R, e);
												}
											else
												[Z.Z.DOWN, Z.Z.SPACE, Z.Z.ENTER].includes(t) &&
													(I(!0), e.preventDefault());
										},
									},
									f
								)
						  );
				return o.createElement(
					'div',
					{
						className: d()(''.concat(n, '-nav-operations'), b),
						style: m,
						ref: t,
					},
					q,
					o.createElement(T, {prefixCls: n, locale: l, editable: h})
				);
			}
			const P = o.memo(o.forwardRef(I), function (e, t) {
					return t.tabMoving;
				}),
				S = (0, o.createContext)(null);
			var R = Math.pow(0.995, 20);
			function M(e, t) {
				var n = o.useRef(e),
					a = o.useState({}),
					r = (0, i.Z)(a, 2)[1];
				return [
					n.current,
					function (e) {
						var a = 'function' == typeof e ? e(n.current) : e;
						a !== n.current && t(a, n.current), (n.current = a), r({});
					},
				];
			}
			var B = function (e) {
				var t,
					n = e.position,
					a = e.prefixCls,
					r = e.extra;
				if (!r) return null;
				var i = {};
				return (
					r && 'object' === (0, c.Z)(r) && !o.isValidElement(r)
						? (i = r)
						: (i.right = r),
					'right' === n && (t = i.right),
					'left' === n && (t = i.left),
					t
						? o.createElement(
								'div',
								{className: ''.concat(a, '-extra-content')},
								t
						  )
						: null
				);
			};
			function L(e, t) {
				var n,
					c,
					l = o.useContext(S),
					s = l.prefixCls,
					f = l.tabs,
					v = e.className,
					m = e.style,
					Z = e.id,
					g = e.animated,
					w = e.activeKey,
					C = e.rtl,
					N = e.extra,
					I = e.editable,
					L = e.locale,
					A = e.tabPosition,
					D = e.tabBarGutter,
					K = e.children,
					O = e.onTabClick,
					j = e.onTabScroll,
					W = (0, o.useRef)(),
					q = (0, o.useRef)(),
					V = (0, o.useRef)(),
					_ = (0, o.useRef)(),
					z =
						((c = (0, o.useRef)(new Map())),
						[
							function (e) {
								return (
									c.current.has(e) || c.current.set(e, o.createRef()),
									c.current.get(e)
								);
							},
							function (e) {
								c.current.delete(e);
							},
						]),
					G = (0, i.Z)(z, 2),
					H = G[0],
					Y = G[1],
					F = 'top' === A || 'bottom' === A,
					X = M(0, function (e, t) {
						F && j && j({direction: e > t ? 'left' : 'right'});
					}),
					U = (0, i.Z)(X, 2),
					J = U[0],
					Q = U[1],
					$ = M(0, function (e, t) {
						!F && j && j({direction: e > t ? 'top' : 'bottom'});
					}),
					ee = (0, i.Z)($, 2),
					te = ee[0],
					ne = ee[1],
					ae = (0, o.useState)(0),
					re = (0, i.Z)(ae, 2),
					oe = re[0],
					ie = re[1],
					ce = (0, o.useState)(0),
					le = (0, i.Z)(ce, 2),
					ue = le[0],
					se = le[1],
					de = (0, o.useState)(null),
					fe = (0, i.Z)(de, 2),
					ve = fe[0],
					me = fe[1],
					be = (0, o.useState)(null),
					he = (0, i.Z)(be, 2),
					pe = he[0],
					ye = he[1],
					Ze = (0, o.useState)(0),
					ge = (0, i.Z)(Ze, 2),
					Ee = ge[0],
					ke = ge[1],
					xe = (0, o.useState)(0),
					we = (0, i.Z)(xe, 2),
					Ce = we[0],
					Ne = we[1],
					Te = (function (e) {
						var t = (0, o.useRef)([]),
							n = (0, o.useState)({}),
							a = (0, i.Z)(n, 2)[1],
							r = (0, o.useRef)('function' == typeof e ? e() : e),
							c = y(function () {
								var e = r.current;
								t.current.forEach(function (t) {
									e = t(e);
								}),
									(t.current = []),
									(r.current = e),
									a({});
							});
						return [
							r.current,
							function (e) {
								t.current.push(e), c();
							},
						];
					})(new Map()),
					Ie = (0, i.Z)(Te, 2),
					Pe = Ie[0],
					Se = Ie[1],
					Re = (function (e, t, n) {
						return (0, o.useMemo)(
							function () {
								for (
									var n,
										a = new Map(),
										r =
											t.get(
												null === (n = e[0]) || void 0 === n ? void 0 : n.key
											) || k,
										o = r.left + r.width,
										i = 0;
									i < e.length;
									i += 1
								) {
									var c,
										l = e[i].key,
										s = t.get(l);
									s ||
										(s =
											t.get(
												null === (c = e[i - 1]) || void 0 === c ? void 0 : c.key
											) || k);
									var d = a.get(l) || (0, u.Z)({}, s);
									(d.right = o - d.left - d.width), a.set(l, d);
								}
								return a;
							},
							[
								e
									.map(function (e) {
										return e.key;
									})
									.join('_'),
								t,
								n,
							]
						);
					})(f, Pe, oe),
					Me = ''.concat(s, '-nav-operations-hidden'),
					Be = 0,
					Le = 0;
				function Ae(e) {
					return e < Be ? Be : e > Le ? Le : e;
				}
				F
					? C
						? ((Be = 0), (Le = Math.max(0, oe - ve)))
						: ((Be = Math.min(0, ve - oe)), (Le = 0))
					: ((Be = Math.min(0, pe - ue)), (Le = 0));
				var De = (0, o.useRef)(),
					Ke = (0, o.useState)(),
					Oe = (0, i.Z)(Ke, 2),
					je = Oe[0],
					We = Oe[1];
				function qe() {
					We(Date.now());
				}
				function Ve() {
					window.clearTimeout(De.current);
				}
				function _e() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: w,
						t = Re.get(e) || {width: 0, height: 0, left: 0, right: 0, top: 0};
					if (F) {
						var n = J;
						C
							? t.right < J
								? (n = t.right)
								: t.right + t.width > J + ve && (n = t.right + t.width - ve)
							: t.left < -J
							? (n = -t.left)
							: t.left + t.width > -J + ve && (n = -(t.left + t.width - ve)),
							ne(0),
							Q(Ae(n));
					} else {
						var a = te;
						t.top < -te
							? (a = -t.top)
							: t.top + t.height > -te + pe && (a = -(t.top + t.height - pe)),
							Q(0),
							ne(Ae(a));
					}
				}
				!(function (e, t) {
					var n = (0, o.useState)(),
						a = (0, i.Z)(n, 2),
						r = a[0],
						c = a[1],
						l = (0, o.useState)(0),
						u = (0, i.Z)(l, 2),
						s = u[0],
						d = u[1],
						f = (0, o.useState)(0),
						v = (0, i.Z)(f, 2),
						m = v[0],
						b = v[1],
						h = (0, o.useState)(),
						p = (0, i.Z)(h, 2),
						y = p[0],
						Z = p[1],
						g = (0, o.useRef)(),
						E = (0, o.useRef)(),
						k = (0, o.useRef)(null);
					(k.current = {
						onTouchStart: function (e) {
							var t = e.touches[0],
								n = t.screenX,
								a = t.screenY;
							c({x: n, y: a}), window.clearInterval(g.current);
						},
						onTouchMove: function (e) {
							if (r) {
								e.preventDefault();
								var n = e.touches[0],
									a = n.screenX,
									o = n.screenY;
								c({x: a, y: o});
								var i = a - r.x,
									l = o - r.y;
								t(i, l);
								var u = Date.now();
								d(u), b(u - s), Z({x: i, y: l});
							}
						},
						onTouchEnd: function () {
							if (r && (c(null), Z(null), y)) {
								var e = y.x / m,
									n = y.y / m,
									a = Math.abs(e),
									o = Math.abs(n);
								if (Math.max(a, o) < 0.1) return;
								var i = e,
									l = n;
								g.current = window.setInterval(function () {
									Math.abs(i) < 0.01 && Math.abs(l) < 0.01
										? window.clearInterval(g.current)
										: t(20 * (i *= R), 20 * (l *= R));
								}, 20);
							}
						},
						onWheel: function (e) {
							var n = e.deltaX,
								a = e.deltaY,
								r = 0,
								o = Math.abs(n),
								i = Math.abs(a);
							o === i
								? (r = 'x' === E.current ? n : a)
								: o > i
								? ((r = n), (E.current = 'x'))
								: ((r = a), (E.current = 'y')),
								t(-r, -r) && e.preventDefault();
						},
					}),
						o.useEffect(function () {
							function t(e) {
								k.current.onTouchMove(e);
							}
							function n(e) {
								k.current.onTouchEnd(e);
							}
							return (
								document.addEventListener('touchmove', t, {passive: !1}),
								document.addEventListener('touchend', n, {passive: !1}),
								e.current.addEventListener(
									'touchstart',
									function (e) {
										k.current.onTouchStart(e);
									},
									{passive: !1}
								),
								e.current.addEventListener('wheel', function (e) {
									k.current.onWheel(e);
								}),
								function () {
									document.removeEventListener('touchmove', t),
										document.removeEventListener('touchend', n);
								}
							);
						}, []);
				})(W, function (e, t) {
					function n(e, t) {
						e(function (e) {
							return Ae(e + t);
						});
					}
					if (F) {
						if (ve >= oe) return !1;
						n(Q, e);
					} else {
						if (pe >= ue) return !1;
						n(ne, t);
					}
					return Ve(), qe(), !0;
				}),
					(0, o.useEffect)(
						function () {
							return (
								Ve(),
								je &&
									(De.current = window.setTimeout(function () {
										We(0);
									}, 100)),
								Ve
							);
						},
						[je]
					);
				var ze = (function (e, t, n, a, r) {
						var i,
							c,
							l,
							u = r.tabs,
							s = r.tabPosition,
							d = r.rtl;
						['top', 'bottom'].includes(s)
							? ((i = 'width'),
							  (c = d ? 'right' : 'left'),
							  (l = Math.abs(t.left)))
							: ((i = 'height'), (c = 'top'), (l = -t.top));
						var f = t[i],
							v = n[i],
							m = a[i],
							b = f;
						return (
							v + m > f && v < f && (b = f - m),
							(0, o.useMemo)(
								function () {
									if (!u.length) return [0, 0];
									for (var t = u.length, n = t, a = 0; a < t; a += 1) {
										var r = e.get(u[a].key) || x;
										if (r[c] + r[i] > l + b) {
											n = a - 1;
											break;
										}
									}
									for (var o = 0, s = t - 1; s >= 0; s -= 1)
										if ((e.get(u[s].key) || x)[c] < l) {
											o = s + 1;
											break;
										}
									return [o, n];
								},
								[
									e,
									l,
									b,
									s,
									u
										.map(function (e) {
											return e.key;
										})
										.join('_'),
									d,
								]
							)
						);
					})(
						Re,
						{width: ve, height: pe, left: J, top: te},
						{width: oe, height: ue},
						{width: Ee, height: Ce},
						(0, u.Z)((0, u.Z)({}, e), {}, {tabs: f})
					),
					Ge = (0, i.Z)(ze, 2),
					He = Ge[0],
					Ye = Ge[1],
					Fe = {};
				'top' === A || 'bottom' === A
					? (Fe[C ? 'marginRight' : 'marginLeft'] = D)
					: (Fe.marginTop = D);
				var Xe = f.map(function (e, t) {
						var n = e.key;
						return o.createElement(E, {
							id: Z,
							prefixCls: s,
							key: n,
							tab: e,
							style: 0 === t ? void 0 : Fe,
							closable: e.closable,
							editable: I,
							active: n === w,
							renderWrapper: K,
							removeAriaLabel: null == L ? void 0 : L.removeAriaLabel,
							ref: H(n),
							onClick: function (e) {
								O(n, e);
							},
							onRemove: function () {
								Y(n);
							},
							onFocus: function () {
								_e(n),
									qe(),
									W.current &&
										(C || (W.current.scrollLeft = 0),
										(W.current.scrollTop = 0));
							},
						});
					}),
					Ue = y(function () {
						var e,
							t,
							n,
							a,
							r,
							o,
							i =
								(null === (e = W.current) || void 0 === e
									? void 0
									: e.offsetWidth) || 0,
							c =
								(null === (t = W.current) || void 0 === t
									? void 0
									: t.offsetHeight) || 0,
							l =
								(null === (n = _.current) || void 0 === n
									? void 0
									: n.offsetWidth) || 0,
							u =
								(null === (a = _.current) || void 0 === a
									? void 0
									: a.offsetHeight) || 0;
						me(i), ye(c), ke(l), Ne(u);
						var s =
								((null === (r = q.current) || void 0 === r
									? void 0
									: r.offsetWidth) || 0) - l,
							d =
								((null === (o = q.current) || void 0 === o
									? void 0
									: o.offsetHeight) || 0) - u;
						ie(s),
							se(d),
							Se(function () {
								var e = new Map();
								return (
									f.forEach(function (t) {
										var n = t.key,
											a = H(n).current;
										a &&
											e.set(n, {
												width: a.offsetWidth,
												height: a.offsetHeight,
												left: a.offsetLeft,
												top: a.offsetTop,
											});
									}),
									e
								);
							});
					}),
					Je = f.slice(0, He),
					Qe = f.slice(Ye + 1),
					$e = [].concat((0, b.Z)(Je), (0, b.Z)(Qe)),
					et = (0, o.useState)(),
					tt = (0, i.Z)(et, 2),
					nt = tt[0],
					at = tt[1],
					rt = Re.get(w),
					ot = (0, o.useRef)();
				function it() {
					h.Z.cancel(ot.current);
				}
				(0, o.useEffect)(
					function () {
						var e = {};
						return (
							rt &&
								(F
									? (C ? (e.right = rt.right) : (e.left = rt.left),
									  (e.width = rt.width))
									: ((e.top = rt.top), (e.height = rt.height))),
							it(),
							(ot.current = (0, h.Z)(function () {
								at(e);
							})),
							it
						);
					},
					[rt, F, C]
				),
					(0, o.useEffect)(
						function () {
							_e();
						},
						[w, rt, Re, F]
					),
					(0, o.useEffect)(
						function () {
							Ue();
						},
						[
							C,
							D,
							w,
							f
								.map(function (e) {
									return e.key;
								})
								.join('_'),
						]
					);
				var ct,
					lt,
					ut,
					st,
					dt = !!$e.length,
					ft = ''.concat(s, '-nav-wrap');
				return (
					F
						? C
							? ((lt = J > 0), (ct = J + ve < oe))
							: ((ct = J < 0), (lt = -J + ve < oe))
						: ((ut = te < 0), (st = -te + pe < ue)),
					o.createElement(
						'div',
						{
							ref: t,
							role: 'tablist',
							className: d()(''.concat(s, '-nav'), v),
							style: m,
							onKeyDown: function () {
								qe();
							},
						},
						o.createElement(B, {position: 'left', extra: N, prefixCls: s}),
						o.createElement(
							p.Z,
							{onResize: Ue},
							o.createElement(
								'div',
								{
									className: d()(
										ft,
										((n = {}),
										(0, r.Z)(n, ''.concat(ft, '-ping-left'), ct),
										(0, r.Z)(n, ''.concat(ft, '-ping-right'), lt),
										(0, r.Z)(n, ''.concat(ft, '-ping-top'), ut),
										(0, r.Z)(n, ''.concat(ft, '-ping-bottom'), st),
										n)
									),
									ref: W,
								},
								o.createElement(
									p.Z,
									{onResize: Ue},
									o.createElement(
										'div',
										{
											ref: q,
											className: ''.concat(s, '-nav-list'),
											style: {
												transform: 'translate('
													.concat(J, 'px, ')
													.concat(te, 'px)'),
												transition: je ? 'none' : void 0,
											},
										},
										Xe,
										o.createElement(T, {
											ref: _,
											prefixCls: s,
											locale: L,
											editable: I,
											style: (0, u.Z)(
												(0, u.Z)({}, 0 === Xe.length ? void 0 : Fe),
												{},
												{visibility: dt ? 'hidden' : null}
											),
										}),
										o.createElement('div', {
											className: d()(
												''.concat(s, '-ink-bar'),
												(0, r.Z)(
													{},
													''.concat(s, '-ink-bar-animated'),
													g.inkBar
												)
											),
											style: nt,
										})
									)
								)
							)
						),
						o.createElement(
							P,
							(0, a.Z)({}, e, {
								removeAriaLabel: null == L ? void 0 : L.removeAriaLabel,
								ref: V,
								prefixCls: s,
								tabs: $e,
								className: !dt && Me,
								tabMoving: !!je,
							})
						),
						o.createElement(B, {position: 'right', extra: N, prefixCls: s})
					)
				);
			}
			const A = o.forwardRef(L);
			function D(e) {
				var t = e.id,
					n = e.activeKey,
					a = e.animated,
					i = e.tabPosition,
					c = e.rtl,
					l = e.destroyInactiveTabPane,
					u = o.useContext(S),
					s = u.prefixCls,
					f = u.tabs,
					v = a.tabPane,
					m = f.findIndex(function (e) {
						return e.key === n;
					});
				return o.createElement(
					'div',
					{className: d()(''.concat(s, '-content-holder'))},
					o.createElement(
						'div',
						{
							className: d()(
								''.concat(s, '-content'),
								''.concat(s, '-content-').concat(i),
								(0, r.Z)({}, ''.concat(s, '-content-animated'), v)
							),
							style:
								m && v
									? (0, r.Z)(
											{},
											c ? 'marginRight' : 'marginLeft',
											'-'.concat(m, '00%')
									  )
									: null,
						},
						f.map(function (e) {
							return o.cloneElement(e.node, {
								key: e.key,
								prefixCls: s,
								tabKey: e.key,
								id: t,
								animated: v,
								active: e.key === n,
								destroyInactiveTabPane: l,
							});
						})
					)
				);
			}
			function K(e) {
				var t = e.prefixCls,
					n = e.forceRender,
					a = e.className,
					r = e.style,
					c = e.id,
					l = e.active,
					s = e.animated,
					f = e.destroyInactiveTabPane,
					v = e.tabKey,
					m = e.children,
					b = o.useState(n),
					h = (0, i.Z)(b, 2),
					p = h[0],
					y = h[1];
				o.useEffect(
					function () {
						l ? y(!0) : f && y(!1);
					},
					[l, f]
				);
				var Z = {};
				return (
					l ||
						(s
							? ((Z.visibility = 'hidden'),
							  (Z.height = 0),
							  (Z.overflowY = 'hidden'))
							: (Z.display = 'none')),
					o.createElement(
						'div',
						{
							id: c && ''.concat(c, '-panel-').concat(v),
							role: 'tabpanel',
							tabIndex: l ? 0 : -1,
							'aria-labelledby': c && ''.concat(c, '-tab-').concat(v),
							'aria-hidden': !l,
							style: (0, u.Z)((0, u.Z)({}, Z), r),
							className: d()(
								''.concat(t, '-tabpane'),
								l && ''.concat(t, '-tabpane-active'),
								a
							),
						},
						(l || p || n) && m
					)
				);
			}
			var O = [
					'id',
					'prefixCls',
					'className',
					'children',
					'direction',
					'activeKey',
					'defaultActiveKey',
					'editable',
					'animated',
					'tabPosition',
					'tabBarGutter',
					'tabBarStyle',
					'tabBarExtraContent',
					'locale',
					'moreIcon',
					'moreTransitionName',
					'destroyInactiveTabPane',
					'renderTabBar',
					'onChange',
					'onTabClick',
					'onTabScroll',
				],
				j = 0;
			function W(e, t) {
				var n,
					s,
					b = e.id,
					h = e.prefixCls,
					p = void 0 === h ? 'rc-tabs' : h,
					y = e.className,
					Z = e.children,
					g = e.direction,
					E = e.activeKey,
					k = e.defaultActiveKey,
					x = e.editable,
					w = e.animated,
					C = void 0 === w ? {inkBar: !0, tabPane: !1} : w,
					N = e.tabPosition,
					T = void 0 === N ? 'top' : N,
					I = e.tabBarGutter,
					P = e.tabBarStyle,
					R = e.tabBarExtraContent,
					M = e.locale,
					B = e.moreIcon,
					L = e.moreTransitionName,
					K = e.destroyInactiveTabPane,
					W = e.renderTabBar,
					q = e.onChange,
					V = e.onTabClick,
					_ = e.onTabScroll,
					z = (0, l.Z)(e, O),
					G = (function (e) {
						return (0, f.Z)(e)
							.map(function (e) {
								if (o.isValidElement(e)) {
									var t = void 0 !== e.key ? String(e.key) : void 0;
									return (0, u.Z)((0, u.Z)({key: t}, e.props), {}, {node: e});
								}
								return null;
							})
							.filter(function (e) {
								return e;
							});
					})(Z),
					H = 'rtl' === g;
				s =
					!1 === C
						? {inkBar: !1, tabPane: !1}
						: !0 === C
						? {inkBar: !0, tabPane: !0}
						: (0, u.Z)(
								{inkBar: !0, tabPane: !1},
								'object' === (0, c.Z)(C) ? C : {}
						  );
				var Y = (0, o.useState)(!1),
					F = (0, i.Z)(Y, 2),
					X = F[0],
					U = F[1];
				(0, o.useEffect)(function () {
					U((0, v.Z)());
				}, []);
				var J = (0, m.Z)(
						function () {
							var e;
							return null === (e = G[0]) || void 0 === e ? void 0 : e.key;
						},
						{value: E, defaultValue: k}
					),
					Q = (0, i.Z)(J, 2),
					$ = Q[0],
					ee = Q[1],
					te = (0, o.useState)(function () {
						return G.findIndex(function (e) {
							return e.key === $;
						});
					}),
					ne = (0, i.Z)(te, 2),
					ae = ne[0],
					re = ne[1];
				(0, o.useEffect)(
					function () {
						var e,
							t = G.findIndex(function (e) {
								return e.key === $;
							});
						-1 === t &&
							((t = Math.max(0, Math.min(ae, G.length - 1))),
							ee(null === (e = G[t]) || void 0 === e ? void 0 : e.key)),
							re(t);
					},
					[
						G.map(function (e) {
							return e.key;
						}).join('_'),
						$,
						ae,
					]
				);
				var oe = (0, m.Z)(null, {value: b}),
					ie = (0, i.Z)(oe, 2),
					ce = ie[0],
					le = ie[1],
					ue = T;
				X && !['left', 'right'].includes(T) && (ue = 'top'),
					(0, o.useEffect)(function () {
						b || (le('rc-tabs-'.concat(j)), (j += 1));
					}, []);
				var se,
					de = {
						id: ce,
						activeKey: $,
						animated: s,
						tabPosition: ue,
						rtl: H,
						mobile: X,
					},
					fe = (0, u.Z)(
						(0, u.Z)({}, de),
						{},
						{
							editable: x,
							locale: M,
							moreIcon: B,
							moreTransitionName: L,
							tabBarGutter: I,
							onTabClick: function (e, t) {
								null == V || V(e, t);
								var n = e !== $;
								ee(e), n && (null == q || q(e));
							},
							onTabScroll: _,
							extra: R,
							style: P,
							panes: Z,
						}
					);
				return (
					(se = W ? W(fe, A) : o.createElement(A, fe)),
					o.createElement(
						S.Provider,
						{value: {tabs: G, prefixCls: p}},
						o.createElement(
							'div',
							(0, a.Z)(
								{
									ref: t,
									id: b,
									className: d()(
										p,
										''.concat(p, '-').concat(ue),
										((n = {}),
										(0, r.Z)(n, ''.concat(p, '-mobile'), X),
										(0, r.Z)(n, ''.concat(p, '-editable'), x),
										(0, r.Z)(n, ''.concat(p, '-rtl'), H),
										n),
										y
									),
								},
								z
							),
							se,
							o.createElement(
								D,
								(0, a.Z)({destroyInactiveTabPane: K}, de, {animated: s})
							)
						)
					)
				);
			}
			var q = o.forwardRef(W);
			q.TabPane = K;
			const V = q;
			var _ = n(44545);
			const z = {
				icon: {
					tag: 'svg',
					attrs: {viewBox: '64 64 896 896', focusable: 'false'},
					children: [
						{tag: 'defs', attrs: {}, children: [{tag: 'style', attrs: {}}]},
						{
							tag: 'path',
							attrs: {
								d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
							},
						},
						{
							tag: 'path',
							attrs: {
								d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z',
							},
						},
					],
				},
				name: 'plus',
				theme: 'outlined',
			};
			var G = n(30076),
				H = function (e, t) {
					return o.createElement(
						G.Z,
						(0, u.Z)((0, u.Z)({}, e), {}, {ref: t, icon: z})
					);
				};
			H.displayName = 'PlusOutlined';
			const Y = o.forwardRef(H);
			var F = n(54549),
				X = n(21687),
				U = n(65632),
				J = n(97647);
			function Q(e) {
				var t,
					n = e.type,
					i = e.className,
					c = e.size,
					l = e.onEdit,
					u = e.hideAdd,
					s = e.centered,
					f = e.addIcon,
					v = (function (e, t) {
						var n = {};
						for (var a in e)
							Object.prototype.hasOwnProperty.call(e, a) &&
								t.indexOf(a) < 0 &&
								(n[a] = e[a]);
						if (
							null != e &&
							'function' == typeof Object.getOwnPropertySymbols
						) {
							var r = 0;
							for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
								t.indexOf(a[r]) < 0 &&
									Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
									(n[a[r]] = e[a[r]]);
						}
						return n;
					})(e, [
						'type',
						'className',
						'size',
						'onEdit',
						'hideAdd',
						'centered',
						'addIcon',
					]),
					m = v.prefixCls,
					b = v.moreIcon,
					h = void 0 === b ? o.createElement(_.Z, null) : b,
					p = o.useContext(U.E_),
					y = p.getPrefixCls,
					Z = p.direction,
					g = y('tabs', m);
				'editable-card' === n &&
					(t = {
						onEdit: function (e, t) {
							var n = t.key,
								a = t.event;
							null == l || l('add' === e ? a : n, e);
						},
						removeIcon: o.createElement(F.Z, null),
						addIcon: f || o.createElement(Y, null),
						showAdd: !0 !== u,
					});
				var E = y();
				return (
					(0, X.Z)(
						!('onPrevClick' in v) && !('onNextClick' in v),
						'Tabs',
						'`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.'
					),
					o.createElement(J.Z.Consumer, null, function (e) {
						var l,
							u = void 0 !== c ? c : e;
						return o.createElement(
							V,
							(0, a.Z)(
								{direction: Z, moreTransitionName: ''.concat(E, '-slide-up')},
								v,
								{
									className: d()(
										((l = {}),
										(0, r.Z)(l, ''.concat(g, '-').concat(u), u),
										(0, r.Z)(
											l,
											''.concat(g, '-card'),
											['card', 'editable-card'].includes(n)
										),
										(0, r.Z)(
											l,
											''.concat(g, '-editable-card'),
											'editable-card' === n
										),
										(0, r.Z)(l, ''.concat(g, '-centered'), s),
										l),
										i
									),
									editable: t,
									moreIcon: h,
									prefixCls: g,
								}
							)
						);
					})
				);
			}
			Q.TabPane = K;
			const $ = Q;
		},
	},
]);
