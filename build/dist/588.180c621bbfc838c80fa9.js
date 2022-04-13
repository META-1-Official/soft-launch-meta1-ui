'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[588],
	{
		68588: (e, n, t) => {
			t.d(n, {Z: () => Pn});
			var r = t(30381),
				a = t.n(r),
				o = t(80334);
			const c = {
				getNow: function () {
					return a()();
				},
				getFixedDate: function (e) {
					return a()(e, 'YYYY-MM-DD');
				},
				getEndDate: function (e) {
					return e.clone().endOf('month');
				},
				getWeekDay: function (e) {
					var n = e.clone().locale('en_US');
					return n.weekday() + n.localeData().firstDayOfWeek();
				},
				getYear: function (e) {
					return e.year();
				},
				getMonth: function (e) {
					return e.month();
				},
				getDate: function (e) {
					return e.date();
				},
				getHour: function (e) {
					return e.hour();
				},
				getMinute: function (e) {
					return e.minute();
				},
				getSecond: function (e) {
					return e.second();
				},
				addYear: function (e, n) {
					return e.clone().add(n, 'year');
				},
				addMonth: function (e, n) {
					return e.clone().add(n, 'month');
				},
				addDate: function (e, n) {
					return e.clone().add(n, 'day');
				},
				setYear: function (e, n) {
					return e.clone().year(n);
				},
				setMonth: function (e, n) {
					return e.clone().month(n);
				},
				setDate: function (e, n) {
					return e.clone().date(n);
				},
				setHour: function (e, n) {
					return e.clone().hour(n);
				},
				setMinute: function (e, n) {
					return e.clone().minute(n);
				},
				setSecond: function (e, n) {
					return e.clone().second(n);
				},
				isAfter: function (e, n) {
					return e.isAfter(n);
				},
				isValidate: function (e) {
					return e.isValid();
				},
				locale: {
					getWeekFirstDay: function (e) {
						return a()().locale(e).localeData().firstDayOfWeek();
					},
					getWeekFirstDate: function (e, n) {
						return n.clone().locale(e).weekday(0);
					},
					getWeek: function (e, n) {
						return n.clone().locale(e).week();
					},
					getShortWeekDays: function (e) {
						return a()().locale(e).localeData().weekdaysMin();
					},
					getShortMonths: function (e) {
						return a()().locale(e).localeData().monthsShort();
					},
					format: function (e, n, t) {
						return n.clone().locale(e).format(t);
					},
					parse: function (e, n, t) {
						for (var r = [], c = 0; c < t.length; c += 1) {
							var l = t[c],
								u = n;
							if (l.includes('wo') || l.includes('Wo')) {
								var i = (l = l.replace(/wo/g, 'w').replace(/Wo/g, 'W')).match(
										/[-YyMmDdHhSsWwGg]+/g
									),
									f = u.match(/[-\d]+/g);
								i && f
									? ((l = i.join('')), (u = f.join('')))
									: r.push(l.replace(/o/g, ''));
							}
							var s = a()(u, l, e, !0);
							if (s.isValid()) return s;
						}
						for (var d = 0; d < r.length; d += 1) {
							var m = a()(n, r[d], e, !1);
							if (m.isValid())
								return (
									(0, o.ET)(
										!1,
										'Not match any format strictly and fallback to fuzzy match. Please help to fire a issue about this.'
									),
									m
								);
						}
						return null;
					},
				},
			};
			var l = t(87462),
				u = t(67294),
				i = t(71577),
				f = t(60331),
				s = t(4942),
				d = t(15671),
				m = t(43144),
				p = t(60136),
				v = t(98557),
				g = t(94184),
				h = t.n(g),
				C = t(1413);
			const k = {
				icon: {
					tag: 'svg',
					attrs: {viewBox: '64 64 896 896', focusable: 'false'},
					children: [
						{
							tag: 'path',
							attrs: {
								d: 'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z',
							},
						},
					],
				},
				name: 'calendar',
				theme: 'outlined',
			};
			var Z = t(30076),
				w = function (e, n) {
					return u.createElement(
						Z.Z,
						(0, C.Z)((0, C.Z)({}, e), {}, {ref: n, icon: k})
					);
				};
			w.displayName = 'CalendarOutlined';
			const b = u.forwardRef(w),
				y = {
					icon: {
						tag: 'svg',
						attrs: {viewBox: '64 64 896 896', focusable: 'false'},
						children: [
							{
								tag: 'path',
								attrs: {
									d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
								},
							},
							{
								tag: 'path',
								attrs: {
									d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
								},
							},
						],
					},
					name: 'clock-circle',
					theme: 'outlined',
				};
			var E = function (e, n) {
				return u.createElement(
					Z.Z,
					(0, C.Z)((0, C.Z)({}, e), {}, {ref: n, icon: y})
				);
			};
			E.displayName = 'ClockCircleOutlined';
			const D = u.forwardRef(E);
			var x = t(43061),
				N = t(29439),
				P = t(21770),
				M = t(71002),
				R = t(15105);
			const S = u.createContext({});
			var Y = {visibility: 'hidden'};
			const V = function (e) {
					var n = e.prefixCls,
						t = e.prevIcon,
						r = void 0 === t ? '‹' : t,
						a = e.nextIcon,
						o = void 0 === a ? '›' : a,
						c = e.superPrevIcon,
						l = void 0 === c ? '«' : c,
						i = e.superNextIcon,
						f = void 0 === i ? '»' : i,
						s = e.onSuperPrev,
						d = e.onSuperNext,
						m = e.onPrev,
						p = e.onNext,
						v = e.children,
						g = u.useContext(S),
						h = g.hideNextBtn,
						C = g.hidePrevBtn;
					return u.createElement(
						'div',
						{className: n},
						s &&
							u.createElement(
								'button',
								{
									type: 'button',
									onClick: s,
									tabIndex: -1,
									className: ''.concat(n, '-super-prev-btn'),
									style: C ? Y : {},
								},
								l
							),
						m &&
							u.createElement(
								'button',
								{
									type: 'button',
									onClick: m,
									tabIndex: -1,
									className: ''.concat(n, '-prev-btn'),
									style: C ? Y : {},
								},
								r
							),
						u.createElement('div', {className: ''.concat(n, '-view')}, v),
						p &&
							u.createElement(
								'button',
								{
									type: 'button',
									onClick: p,
									tabIndex: -1,
									className: ''.concat(n, '-next-btn'),
									style: h ? Y : {},
								},
								o
							),
						d &&
							u.createElement(
								'button',
								{
									type: 'button',
									onClick: d,
									tabIndex: -1,
									className: ''.concat(n, '-super-next-btn'),
									style: h ? Y : {},
								},
								f
							)
					);
				},
				L = function (e) {
					var n = e.prefixCls,
						t = e.generateConfig,
						r = e.viewDate,
						a = e.onPrevDecades,
						o = e.onNextDecades;
					if (u.useContext(S).hideHeader) return null;
					var c = ''.concat(n, '-header'),
						i = t.getYear(r),
						f = Math.floor(i / $) * $,
						s = f + $ - 1;
					return u.createElement(
						V,
						(0, l.Z)({}, e, {prefixCls: c, onSuperPrev: a, onSuperNext: o}),
						f,
						'-',
						s
					);
				};
			function T(e, n, t, r, a) {
				var o = e.setHour(n, t);
				return (o = e.setMinute(o, r)), e.setSecond(o, a);
			}
			function O(e, n, t) {
				if (!t) return n;
				var r = n;
				return (
					(r = e.setHour(r, e.getHour(t))),
					(r = e.setMinute(r, e.getMinute(t))),
					e.setSecond(r, e.getSecond(t))
				);
			}
			function H(e, n) {
				var t = e.getYear(n),
					r = e.getMonth(n) + 1,
					a = e.getEndDate(e.getFixedDate(''.concat(t, '-').concat(r, '-01'))),
					o = e.getDate(a),
					c = r < 10 ? '0'.concat(r) : ''.concat(r);
				return ''.concat(t, '-').concat(c, '-').concat(o);
			}
			function F(e) {
				for (
					var n = e.prefixCls,
						t = e.disabledDate,
						r = e.onSelect,
						a = e.picker,
						o = e.rowNum,
						c = e.colNum,
						l = e.prefixColumn,
						i = e.rowClassName,
						f = e.baseDate,
						d = e.getCellClassName,
						m = e.getCellText,
						p = e.getCellNode,
						v = e.getCellDate,
						g = e.generateConfig,
						k = e.titleCell,
						Z = e.headerCells,
						w = u.useContext(S),
						b = w.onDateMouseEnter,
						y = w.onDateMouseLeave,
						E = w.mode,
						D = ''.concat(n, '-cell'),
						x = [],
						N = 0;
					N < o;
					N += 1
				) {
					for (
						var P = [],
							M = void 0,
							R = function (e) {
								var n,
									o = v(f, N * c + e),
									i = me({
										cellDate: o,
										mode: E,
										disabledDate: t,
										generateConfig: g,
									});
								0 === e && ((M = o), l && P.push(l(M)));
								var Z = k && k(o);
								P.push(
									u.createElement(
										'td',
										{
											key: e,
											title: Z,
											className: h()(
												D,
												(0, C.Z)(
													((n = {}),
													(0, s.Z)(n, ''.concat(D, '-disabled'), i),
													(0, s.Z)(
														n,
														''.concat(D, '-start'),
														1 === m(o) || ('year' === a && Number(Z) % 10 == 0)
													),
													(0, s.Z)(
														n,
														''.concat(D, '-end'),
														Z === H(g, o) ||
															('year' === a && Number(Z) % 10 == 9)
													),
													n),
													d(o)
												)
											),
											onClick: function () {
												i || r(o);
											},
											onMouseEnter: function () {
												!i && b && b(o);
											},
											onMouseLeave: function () {
												!i && y && y(o);
											},
										},
										p
											? p(o)
											: u.createElement(
													'div',
													{className: ''.concat(D, '-inner')},
													m(o)
											  )
									)
								);
							},
							Y = 0;
						Y < c;
						Y += 1
					)
						R(Y);
					x.push(u.createElement('tr', {key: N, className: i && i(M)}, P));
				}
				return u.createElement(
					'div',
					{className: ''.concat(n, '-body')},
					u.createElement(
						'table',
						{className: ''.concat(n, '-content')},
						Z && u.createElement('thead', null, u.createElement('tr', null, Z)),
						u.createElement('tbody', null, x)
					)
				);
			}
			const A = function (e) {
				var n = J - 1,
					t = e.prefixCls,
					r = e.viewDate,
					a = e.generateConfig,
					o = ''.concat(t, '-cell'),
					c = a.getYear(r),
					i = Math.floor(c / J) * J,
					f = Math.floor(c / $) * $,
					d = f + $ - 1,
					m = a.setYear(r, f - Math.ceil((12 * J - $) / 2));
				return u.createElement(
					F,
					(0, l.Z)({}, e, {
						rowNum: 4,
						colNum: 3,
						baseDate: m,
						getCellText: function (e) {
							var t = a.getYear(e);
							return ''.concat(t, '-').concat(t + n);
						},
						getCellClassName: function (e) {
							var t,
								r = a.getYear(e),
								c = r + n;
							return (
								(t = {}),
								(0, s.Z)(t, ''.concat(o, '-in-view'), f <= r && c <= d),
								(0, s.Z)(t, ''.concat(o, '-selected'), r === i),
								t
							);
						},
						getCellDate: function (e, n) {
							return a.addYear(e, n * J);
						},
					})
				);
			};
			var I = t(93433),
				W = t(75164),
				K = t(5110),
				j = new Map();
			function B(e, n, t) {
				if ((j.get(e) && cancelAnimationFrame(j.get(e)), t <= 0))
					j.set(
						e,
						requestAnimationFrame(function () {
							e.scrollTop = n;
						})
					);
				else {
					var r = ((n - e.scrollTop) / t) * 10;
					j.set(
						e,
						requestAnimationFrame(function () {
							(e.scrollTop += r), e.scrollTop !== n && B(e, n, t - 10);
						})
					);
				}
			}
			function q(e, n) {
				var t = n.onLeftRight,
					r = n.onCtrlLeftRight,
					a = n.onUpDown,
					o = n.onPageUpDown,
					c = n.onEnter,
					l = e.which,
					u = e.ctrlKey,
					i = e.metaKey;
				switch (l) {
					case R.Z.LEFT:
						if (u || i) {
							if (r) return r(-1), !0;
						} else if (t) return t(-1), !0;
						break;
					case R.Z.RIGHT:
						if (u || i) {
							if (r) return r(1), !0;
						} else if (t) return t(1), !0;
						break;
					case R.Z.UP:
						if (a) return a(-1), !0;
						break;
					case R.Z.DOWN:
						if (a) return a(1), !0;
						break;
					case R.Z.PAGE_UP:
						if (o) return o(-1), !0;
						break;
					case R.Z.PAGE_DOWN:
						if (o) return o(1), !0;
						break;
					case R.Z.ENTER:
						if (c) return c(), !0;
				}
				return !1;
			}
			function U(e, n, t, r) {
				var a = e;
				if (!a)
					switch (n) {
						case 'time':
							a = r ? 'hh:mm:ss a' : 'HH:mm:ss';
							break;
						case 'week':
							a = 'gggg-wo';
							break;
						case 'month':
							a = 'YYYY-MM';
							break;
						case 'quarter':
							a = 'YYYY-[Q]Q';
							break;
						case 'year':
							a = 'YYYY';
							break;
						default:
							a = t ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
					}
				return a;
			}
			function z(e, n, t) {
				var r = 'time' === e ? 8 : 10,
					a = 'function' == typeof n ? n(t.getNow()).length : n.length;
				return Math.max(r, a) + 2;
			}
			var Q = null,
				_ = new Set(),
				G = {
					year: function (e) {
						return 'month' === e || 'date' === e ? 'year' : e;
					},
					month: function (e) {
						return 'date' === e ? 'month' : e;
					},
					quarter: function (e) {
						return 'month' === e || 'date' === e ? 'quarter' : e;
					},
					week: function (e) {
						return 'date' === e ? 'week' : e;
					},
					time: null,
					date: null,
				};
			function X(e, n) {
				return e.some(function (e) {
					return e && e.contains(n);
				});
			}
			var J = 10,
				$ = 10 * J;
			const ee = function (e) {
				var n = e.prefixCls,
					t = e.onViewDateChange,
					r = e.generateConfig,
					a = e.viewDate,
					o = e.operationRef,
					c = e.onSelect,
					i = e.onPanelChange,
					f = ''.concat(n, '-decade-panel');
				o.current = {
					onKeyDown: function (e) {
						return q(e, {
							onLeftRight: function (e) {
								c(r.addYear(a, e * J), 'key');
							},
							onCtrlLeftRight: function (e) {
								c(r.addYear(a, e * $), 'key');
							},
							onUpDown: function (e) {
								c(r.addYear(a, e * J * 3), 'key');
							},
							onEnter: function () {
								i('year', a);
							},
						});
					},
				};
				var s = function (e) {
					var n = r.addYear(a, e * $);
					t(n), i(null, n);
				};
				return u.createElement(
					'div',
					{className: f},
					u.createElement(
						L,
						(0, l.Z)({}, e, {
							prefixCls: n,
							onPrevDecades: function () {
								s(-1);
							},
							onNextDecades: function () {
								s(1);
							},
						})
					),
					u.createElement(
						A,
						(0, l.Z)({}, e, {
							prefixCls: n,
							onSelect: function (e) {
								c(e, 'mouse'), i('year', e);
							},
						})
					)
				);
			};
			function ne(e, n) {
				return (!e && !n) || (!(!e || !n) && void 0);
			}
			function te(e, n, t) {
				var r = ne(n, t);
				return 'boolean' == typeof r ? r : e.getYear(n) === e.getYear(t);
			}
			function re(e, n) {
				return Math.floor(e.getMonth(n) / 3) + 1;
			}
			function ae(e, n, t) {
				var r = ne(n, t);
				return 'boolean' == typeof r ? r : te(e, n, t) && re(e, n) === re(e, t);
			}
			function oe(e, n, t) {
				var r = ne(n, t);
				return 'boolean' == typeof r
					? r
					: te(e, n, t) && e.getMonth(n) === e.getMonth(t);
			}
			function ce(e, n, t) {
				var r = ne(n, t);
				return 'boolean' == typeof r
					? r
					: e.getYear(n) === e.getYear(t) &&
							e.getMonth(n) === e.getMonth(t) &&
							e.getDate(n) === e.getDate(t);
			}
			function le(e, n, t, r) {
				var a = ne(t, r);
				return 'boolean' == typeof a
					? a
					: e.locale.getWeek(n, t) === e.locale.getWeek(n, r);
			}
			function ue(e, n, t) {
				return (
					ce(e, n, t) &&
					(function (e, n, t) {
						var r = ne(n, t);
						return 'boolean' == typeof r
							? r
							: e.getHour(n) === e.getHour(t) &&
									e.getMinute(n) === e.getMinute(t) &&
									e.getSecond(n) === e.getSecond(t);
					})(e, n, t)
				);
			}
			function ie(e, n, t, r) {
				return (
					!!(n && t && r) &&
					!ce(e, n, r) &&
					!ce(e, t, r) &&
					e.isAfter(r, n) &&
					e.isAfter(t, r)
				);
			}
			function fe(e, n, t) {
				var r =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
				switch (n) {
					case 'year':
						return t.addYear(e, 10 * r);
					case 'quarter':
					case 'month':
						return t.addYear(e, r);
					default:
						return t.addMonth(e, r);
				}
			}
			function se(e, n) {
				var t = n.generateConfig,
					r = n.locale,
					a = n.format;
				return 'function' == typeof a ? a(e) : t.locale.format(r.locale, e, a);
			}
			function de(e, n) {
				var t = n.generateConfig,
					r = n.locale,
					a = n.formatList;
				return e && 'function' != typeof a[0]
					? t.locale.parse(r.locale, e, a)
					: null;
			}
			function me(e) {
				var n = e.cellDate,
					t = e.mode,
					r = e.disabledDate,
					a = e.generateConfig;
				if (!r) return !1;
				var o = function (e, t, o) {
					for (var c = t; c <= o; ) {
						var l = void 0;
						switch (e) {
							case 'date':
								if (((l = a.setDate(n, c)), !r(l))) return !1;
								break;
							case 'month':
								if (
									!me({
										cellDate: (l = a.setMonth(n, c)),
										mode: 'month',
										generateConfig: a,
										disabledDate: r,
									})
								)
									return !1;
								break;
							case 'year':
								if (
									!me({
										cellDate: (l = a.setYear(n, c)),
										mode: 'year',
										generateConfig: a,
										disabledDate: r,
									})
								)
									return !1;
						}
						c += 1;
					}
					return !0;
				};
				switch (t) {
					case 'date':
					case 'week':
						return r(n);
					case 'month':
						return o('date', 1, a.getDate(a.getEndDate(n)));
					case 'quarter':
						var c = 3 * Math.floor(a.getMonth(n) / 3);
						return o('month', c, c + 2);
					case 'year':
						return o('month', 0, 11);
					case 'decade':
						var l = a.getYear(n),
							u = Math.floor(l / J) * J;
						return o('year', u, u + J - 1);
				}
			}
			const pe = function (e) {
				if (u.useContext(S).hideHeader) return null;
				var n = e.prefixCls,
					t = e.generateConfig,
					r = e.locale,
					a = e.value,
					o = e.format,
					c = ''.concat(n, '-header');
				return u.createElement(
					V,
					{prefixCls: c},
					a ? se(a, {locale: r, format: o, generateConfig: t}) : ' '
				);
			};
			var ve = t(56982);
			const ge = function (e) {
				var n = e.prefixCls,
					t = e.units,
					r = e.onSelect,
					a = e.value,
					o = e.active,
					c = e.hideDisabledOptions,
					l = ''.concat(n, '-cell'),
					i = u.useContext(S).open,
					f = (0, u.useRef)(null),
					d = (0, u.useRef)(new Map()),
					m = (0, u.useRef)();
				return (
					(0, u.useLayoutEffect)(
						function () {
							var e = d.current.get(a);
							e && !1 !== i && B(f.current, e.offsetTop, 120);
						},
						[a]
					),
					(0, u.useLayoutEffect)(
						function () {
							if (i) {
								var e = d.current.get(a);
								e &&
									(m.current =
										((n = e),
										(t = function () {
											B(f.current, e.offsetTop, 0);
										}),
										(function e() {
											(0, K.Z)(n)
												? t()
												: (r = (0, W.Z)(function () {
														e();
												  }));
										})(),
										function () {
											W.Z.cancel(r);
										}));
							}
							var n, t, r;
							return function () {
								var e;
								null === (e = m.current) || void 0 === e || e.call(m);
							};
						},
						[i]
					),
					u.createElement(
						'ul',
						{
							className: h()(
								''.concat(n, '-column'),
								(0, s.Z)({}, ''.concat(n, '-column-active'), o)
							),
							ref: f,
							style: {position: 'relative'},
						},
						t.map(function (e) {
							var n;
							return c && e.disabled
								? null
								: u.createElement(
										'li',
										{
											key: e.value,
											ref: function (n) {
												d.current.set(e.value, n);
											},
											className: h()(
												l,
												((n = {}),
												(0, s.Z)(n, ''.concat(l, '-disabled'), e.disabled),
												(0, s.Z)(n, ''.concat(l, '-selected'), a === e.value),
												n)
											),
											onClick: function () {
												e.disabled || r(e.value);
											},
										},
										u.createElement(
											'div',
											{className: ''.concat(l, '-inner')},
											e.label
										)
								  );
						})
					)
				);
			};
			function he(e, n) {
				for (
					var t =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: '0',
						r = String(e);
					r.length < n;

				)
					r = ''.concat(t).concat(e);
				return r;
			}
			function Ce(e) {
				return null == e ? [] : Array.isArray(e) ? e : [e];
			}
			function ke(e) {
				var n = {};
				return (
					Object.keys(e).forEach(function (t) {
						('data-' !== t.substr(0, 5) &&
							'aria-' !== t.substr(0, 5) &&
							'role' !== t &&
							'name' !== t) ||
							'data-__' === t.substr(0, 7) ||
							(n[t] = e[t]);
					}),
					n
				);
			}
			function Ze(e, n) {
				return e ? e[n] : null;
			}
			function we(e, n, t) {
				var r = [Ze(e, 0), Ze(e, 1)];
				return (
					(r[t] = 'function' == typeof n ? n(r[t]) : n), r[0] || r[1] ? r : null
				);
			}
			function be(e, n) {
				if (e.length !== n.length) return !0;
				for (var t = 0; t < e.length; t += 1)
					if (e[t].disabled !== n[t].disabled) return !0;
				return !1;
			}
			function ye(e, n, t, r) {
				for (var a = [], o = e; o <= n; o += t)
					a.push({label: he(o, 2), value: o, disabled: (r || []).includes(o)});
				return a;
			}
			const Ee = function (e) {
					var n,
						t = e.generateConfig,
						r = e.prefixCls,
						a = e.operationRef,
						o = e.activeColumnIndex,
						c = e.value,
						l = e.showHour,
						i = e.showMinute,
						f = e.showSecond,
						s = e.use12Hours,
						d = e.hourStep,
						m = void 0 === d ? 1 : d,
						p = e.minuteStep,
						v = void 0 === p ? 1 : p,
						g = e.secondStep,
						h = void 0 === g ? 1 : g,
						k = e.disabledHours,
						Z = e.disabledMinutes,
						w = e.disabledSeconds,
						b = e.disabledTime,
						y = e.hideDisabledOptions,
						E = e.onSelect,
						D = [],
						x = ''.concat(r, '-content'),
						P = ''.concat(r, '-time-panel'),
						M = c ? t.getHour(c) : -1,
						R = M,
						S = c ? t.getMinute(c) : -1,
						Y = c ? t.getSecond(c) : -1,
						V = t.getNow(),
						L = u.useMemo(
							function () {
								if (b) {
									var e = b(V);
									return [
										e.disabledHours,
										e.disabledMinutes,
										e.disabledSeconds,
									];
								}
								return [k, Z, w];
							},
							[k, Z, w, b, V]
						),
						O = (0, N.Z)(L, 3),
						H = O[0],
						F = O[1],
						A = O[2],
						I = function (e, n, r, a) {
							var o = c || t.getNow(),
								l = Math.max(0, n),
								u = Math.max(0, r),
								i = Math.max(0, a);
							return T(t, o, s && e ? l + 12 : l, u, i);
						},
						W = ye(0, 23, m, H && H()),
						K = (0, ve.Z)(
							function () {
								return W;
							},
							W,
							be
						);
					s && ((n = R >= 12), (R %= 12));
					var j = u.useMemo(
							function () {
								if (!s) return [!1, !1];
								var e = [!0, !0];
								return (
									K.forEach(function (n) {
										var t = n.disabled,
											r = n.value;
										t || (r >= 12 ? (e[1] = !1) : (e[0] = !1));
									}),
									e
								);
							},
							[s, K]
						),
						B = (0, N.Z)(j, 2),
						q = B[0],
						U = B[1],
						z = u.useMemo(
							function () {
								return s
									? K.filter(
											n
												? function (e) {
														return e.value >= 12;
												  }
												: function (e) {
														return e.value < 12;
												  }
									  ).map(function (e) {
											var n = e.value % 12,
												t = 0 === n ? '12' : he(n, 2);
											return (0,
											C.Z)((0, C.Z)({}, e), {}, {label: t, value: n});
									  })
									: K;
							},
							[s, n, K]
						),
						Q = ye(0, 59, v, F && F(M)),
						_ = ye(0, 59, h, A && A(M, S));
					function G(e, n, t, r, a) {
						!1 !== e &&
							D.push({
								node: u.cloneElement(n, {
									prefixCls: P,
									value: t,
									active: o === D.length,
									onSelect: a,
									units: r,
									hideDisabledOptions: y,
								}),
								onSelect: a,
								value: t,
								units: r,
							});
					}
					(a.current = {
						onUpDown: function (e) {
							var n = D[o];
							if (n)
								for (
									var t = n.units.findIndex(function (e) {
											return e.value === n.value;
										}),
										r = n.units.length,
										a = 1;
									a < r;
									a += 1
								) {
									var c = n.units[(t + e * a + r) % r];
									if (!0 !== c.disabled) {
										n.onSelect(c.value);
										break;
									}
								}
						},
					}),
						G(l, u.createElement(ge, {key: 'hour'}), R, z, function (e) {
							E(I(n, e, S, Y), 'mouse');
						}),
						G(i, u.createElement(ge, {key: 'minute'}), S, Q, function (e) {
							E(I(n, R, e, Y), 'mouse');
						}),
						G(f, u.createElement(ge, {key: 'second'}), Y, _, function (e) {
							E(I(n, R, S, e), 'mouse');
						});
					var X = -1;
					return (
						'boolean' == typeof n && (X = n ? 1 : 0),
						G(
							!0 === s,
							u.createElement(ge, {key: '12hours'}),
							X,
							[
								{label: 'AM', value: 0, disabled: q},
								{label: 'PM', value: 1, disabled: U},
							],
							function (e) {
								E(I(!!e, R, S, Y), 'mouse');
							}
						),
						u.createElement(
							'div',
							{className: x},
							D.map(function (e) {
								return e.node;
							})
						)
					);
				},
				De = function (e) {
					var n = e.generateConfig,
						t = e.format,
						r = void 0 === t ? 'HH:mm:ss' : t,
						a = e.prefixCls,
						o = e.active,
						c = e.operationRef,
						i = e.showHour,
						f = e.showMinute,
						d = e.showSecond,
						m = e.use12Hours,
						p = void 0 !== m && m,
						v = e.onSelect,
						g = e.value,
						C = ''.concat(a, '-time-panel'),
						k = u.useRef(),
						Z = u.useState(-1),
						w = (0, N.Z)(Z, 2),
						b = w[0],
						y = w[1],
						E = [i, f, d, p].filter(function (e) {
							return !1 !== e;
						}).length;
					return (
						(c.current = {
							onKeyDown: function (e) {
								return q(e, {
									onLeftRight: function (e) {
										y((b + e + E) % E);
									},
									onUpDown: function (e) {
										-1 === b ? y(0) : k.current && k.current.onUpDown(e);
									},
									onEnter: function () {
										v(g || n.getNow(), 'key'), y(-1);
									},
								});
							},
							onBlur: function () {
								y(-1);
							},
						}),
						u.createElement(
							'div',
							{className: h()(C, (0, s.Z)({}, ''.concat(C, '-active'), o))},
							u.createElement(pe, (0, l.Z)({}, e, {format: r, prefixCls: a})),
							u.createElement(
								Ee,
								(0, l.Z)({}, e, {
									prefixCls: a,
									activeColumnIndex: b,
									operationRef: k,
								})
							)
						)
					);
				},
				xe = u.createContext({});
			function Ne(e) {
				var n = e.cellPrefixCls,
					t = e.generateConfig,
					r = e.rangedValue,
					a = e.hoverRangedValue,
					o = e.isInView,
					c = e.isSameCell,
					l = e.offsetCell,
					u = e.today,
					i = e.value;
				return function (e) {
					var f,
						d = l(e, -1),
						m = l(e, 1),
						p = Ze(r, 0),
						v = Ze(r, 1),
						g = Ze(a, 0),
						h = Ze(a, 1),
						C = ie(t, g, h, e);
					function k(e) {
						return c(p, e);
					}
					function Z(e) {
						return c(v, e);
					}
					var w = c(g, e),
						b = c(h, e),
						y = (C || b) && (!o(d) || Z(d)),
						E = (C || w) && (!o(m) || k(m));
					return (
						(f = {}),
						(0, s.Z)(f, ''.concat(n, '-in-view'), o(e)),
						(0, s.Z)(f, ''.concat(n, '-in-range'), ie(t, p, v, e)),
						(0, s.Z)(f, ''.concat(n, '-range-start'), k(e)),
						(0, s.Z)(f, ''.concat(n, '-range-end'), Z(e)),
						(0, s.Z)(f, ''.concat(n, '-range-start-single'), k(e) && !v),
						(0, s.Z)(f, ''.concat(n, '-range-end-single'), Z(e) && !p),
						(0, s.Z)(
							f,
							''.concat(n, '-range-start-near-hover'),
							k(e) && (c(d, g) || ie(t, g, h, d))
						),
						(0, s.Z)(
							f,
							''.concat(n, '-range-end-near-hover'),
							Z(e) && (c(m, h) || ie(t, g, h, m))
						),
						(0, s.Z)(f, ''.concat(n, '-range-hover'), C),
						(0, s.Z)(f, ''.concat(n, '-range-hover-start'), w),
						(0, s.Z)(f, ''.concat(n, '-range-hover-end'), b),
						(0, s.Z)(f, ''.concat(n, '-range-hover-edge-start'), y),
						(0, s.Z)(f, ''.concat(n, '-range-hover-edge-end'), E),
						(0, s.Z)(
							f,
							''.concat(n, '-range-hover-edge-start-near-range'),
							y && c(d, v)
						),
						(0, s.Z)(
							f,
							''.concat(n, '-range-hover-edge-end-near-range'),
							E && c(m, p)
						),
						(0, s.Z)(f, ''.concat(n, '-today'), c(u, e)),
						(0, s.Z)(f, ''.concat(n, '-selected'), c(i, e)),
						f
					);
				};
			}
			const Pe = function (e) {
					var n = e.prefixCls,
						t = e.generateConfig,
						r = e.prefixColumn,
						a = e.locale,
						o = e.rowCount,
						c = e.viewDate,
						i = e.value,
						f = e.dateRender,
						s = u.useContext(xe),
						d = s.rangedValue,
						m = s.hoverRangedValue,
						p = (function (e, n, t) {
							var r = n.locale.getWeekFirstDay(e),
								a = n.setDate(t, 1),
								o = n.getWeekDay(a),
								c = n.addDate(a, r - o);
							return (
								n.getMonth(c) === n.getMonth(t) &&
									n.getDate(c) > 1 &&
									(c = n.addDate(c, -7)),
								c
							);
						})(a.locale, t, c),
						v = ''.concat(n, '-cell'),
						g = t.locale.getWeekFirstDay(a.locale),
						h = t.getNow(),
						C = [],
						k =
							a.shortWeekDays ||
							(t.locale.getShortWeekDays
								? t.locale.getShortWeekDays(a.locale)
								: []);
					r &&
						C.push(
							u.createElement('th', {key: 'empty', 'aria-label': 'empty cell'})
						);
					for (var Z = 0; Z < 7; Z += 1)
						C.push(u.createElement('th', {key: Z}, k[(Z + g) % 7]));
					var w = Ne({
							cellPrefixCls: v,
							today: h,
							value: i,
							generateConfig: t,
							rangedValue: r ? null : d,
							hoverRangedValue: r ? null : m,
							isSameCell: function (e, n) {
								return ce(t, e, n);
							},
							isInView: function (e) {
								return oe(t, e, c);
							},
							offsetCell: function (e, n) {
								return t.addDate(e, n);
							},
						}),
						b = f
							? function (e) {
									return f(e, h);
							  }
							: void 0;
					return u.createElement(
						F,
						(0, l.Z)({}, e, {
							rowNum: o,
							colNum: 7,
							baseDate: p,
							getCellNode: b,
							getCellText: t.getDate,
							getCellClassName: w,
							getCellDate: t.addDate,
							titleCell: function (e) {
								return se(e, {
									locale: a,
									format: 'YYYY-MM-DD',
									generateConfig: t,
								});
							},
							headerCells: C,
						})
					);
				},
				Me = function (e) {
					var n = e.prefixCls,
						t = e.generateConfig,
						r = e.locale,
						a = e.viewDate,
						o = e.onNextMonth,
						c = e.onPrevMonth,
						i = e.onNextYear,
						f = e.onPrevYear,
						s = e.onYearClick,
						d = e.onMonthClick;
					if (u.useContext(S).hideHeader) return null;
					var m = ''.concat(n, '-header'),
						p =
							r.shortMonths ||
							(t.locale.getShortMonths
								? t.locale.getShortMonths(r.locale)
								: []),
						v = t.getMonth(a),
						g = u.createElement(
							'button',
							{
								type: 'button',
								key: 'year',
								onClick: s,
								tabIndex: -1,
								className: ''.concat(n, '-year-btn'),
							},
							se(a, {locale: r, format: r.yearFormat, generateConfig: t})
						),
						h = u.createElement(
							'button',
							{
								type: 'button',
								key: 'month',
								onClick: d,
								tabIndex: -1,
								className: ''.concat(n, '-month-btn'),
							},
							r.monthFormat
								? se(a, {locale: r, format: r.monthFormat, generateConfig: t})
								: p[v]
						),
						C = r.monthBeforeYear ? [h, g] : [g, h];
					return u.createElement(
						V,
						(0, l.Z)({}, e, {
							prefixCls: m,
							onSuperPrev: f,
							onPrev: c,
							onNext: o,
							onSuperNext: i,
						}),
						C
					);
				},
				Re = function (e) {
					var n = e.prefixCls,
						t = e.panelName,
						r = void 0 === t ? 'date' : t,
						a = e.keyboardConfig,
						o = e.active,
						c = e.operationRef,
						i = e.generateConfig,
						f = e.value,
						d = e.viewDate,
						m = e.onViewDateChange,
						p = e.onPanelChange,
						v = e.onSelect,
						g = ''.concat(n, '-').concat(r, '-panel');
					c.current = {
						onKeyDown: function (e) {
							return q(
								e,
								(0, C.Z)(
									{
										onLeftRight: function (e) {
											v(i.addDate(f || d, e), 'key');
										},
										onCtrlLeftRight: function (e) {
											v(i.addYear(f || d, e), 'key');
										},
										onUpDown: function (e) {
											v(i.addDate(f || d, 7 * e), 'key');
										},
										onPageUpDown: function (e) {
											v(i.addMonth(f || d, e), 'key');
										},
									},
									a
								)
							);
						},
					};
					var k = function (e) {
							var n = i.addYear(d, e);
							m(n), p(null, n);
						},
						Z = function (e) {
							var n = i.addMonth(d, e);
							m(n), p(null, n);
						};
					return u.createElement(
						'div',
						{className: h()(g, (0, s.Z)({}, ''.concat(g, '-active'), o))},
						u.createElement(
							Me,
							(0, l.Z)({}, e, {
								prefixCls: n,
								value: f,
								viewDate: d,
								onPrevYear: function () {
									k(-1);
								},
								onNextYear: function () {
									k(1);
								},
								onPrevMonth: function () {
									Z(-1);
								},
								onNextMonth: function () {
									Z(1);
								},
								onMonthClick: function () {
									p('month', d);
								},
								onYearClick: function () {
									p('year', d);
								},
							})
						),
						u.createElement(
							Pe,
							(0, l.Z)({}, e, {
								onSelect: function (e) {
									return v(e, 'mouse');
								},
								prefixCls: n,
								value: f,
								viewDate: d,
								rowCount: 6,
							})
						)
					);
				};
			var Se = (function () {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
					n[t] = arguments[t];
				return n;
			})('date', 'time');
			const Ye = function (e) {
					var n = e.prefixCls,
						t = e.operationRef,
						r = e.generateConfig,
						a = e.value,
						o = e.defaultValue,
						c = e.disabledTime,
						i = e.showTime,
						f = e.onSelect,
						d = ''.concat(n, '-datetime-panel'),
						m = u.useState(null),
						p = (0, N.Z)(m, 2),
						v = p[0],
						g = p[1],
						k = u.useRef({}),
						Z = u.useRef({}),
						w = 'object' === (0, M.Z)(i) ? (0, C.Z)({}, i) : {},
						b = function (e) {
							Z.current.onBlur && Z.current.onBlur(e), g(null);
						};
					t.current = {
						onKeyDown: function (e) {
							if (e.which === R.Z.TAB) {
								var n =
									((t = e.shiftKey ? -1 : 1),
									(r = Se.indexOf(v) + t),
									Se[r] || null);
								return g(n), n && e.preventDefault(), !0;
							}
							var t, r;
							if (v) {
								var a = 'date' === v ? k : Z;
								return (
									a.current && a.current.onKeyDown && a.current.onKeyDown(e), !0
								);
							}
							return (
								!![R.Z.LEFT, R.Z.RIGHT, R.Z.UP, R.Z.DOWN].includes(e.which) &&
								(g('date'), !0)
							);
						},
						onBlur: b,
						onClose: b,
					};
					var y = function (e, n) {
							var t = e;
							'date' === n && !a && w.defaultValue
								? ((t = r.setHour(t, r.getHour(w.defaultValue))),
								  (t = r.setMinute(t, r.getMinute(w.defaultValue))),
								  (t = r.setSecond(t, r.getSecond(w.defaultValue))))
								: 'time' === n &&
								  !a &&
								  o &&
								  ((t = r.setYear(t, r.getYear(o))),
								  (t = r.setMonth(t, r.getMonth(o))),
								  (t = r.setDate(t, r.getDate(o)))),
								f && f(t, 'mouse');
						},
						E = c ? c(a || null) : {};
					return u.createElement(
						'div',
						{className: h()(d, (0, s.Z)({}, ''.concat(d, '-active'), v))},
						u.createElement(
							Re,
							(0, l.Z)({}, e, {
								operationRef: k,
								active: 'date' === v,
								onSelect: function (e) {
									y(
										O(
											r,
											e,
											a || 'object' !== (0, M.Z)(i) ? null : i.defaultValue
										),
										'date'
									);
								},
							})
						),
						u.createElement(
							De,
							(0, l.Z)({}, e, {format: void 0}, w, E, {
								disabledTime: null,
								defaultValue: void 0,
								operationRef: Z,
								active: 'time' === v,
								onSelect: function (e) {
									y(e, 'time');
								},
							})
						)
					);
				},
				Ve = function (e) {
					var n = e.prefixCls,
						t = e.generateConfig,
						r = e.locale,
						a = e.value,
						o = ''.concat(n, '-cell'),
						c = ''.concat(n, '-week-panel-row');
					return u.createElement(
						Re,
						(0, l.Z)({}, e, {
							panelName: 'week',
							prefixColumn: function (e) {
								return u.createElement(
									'td',
									{key: 'week', className: h()(o, ''.concat(o, '-week'))},
									t.locale.getWeek(r.locale, e)
								);
							},
							rowClassName: function (e) {
								return h()(
									c,
									(0, s.Z)({}, ''.concat(c, '-selected'), le(t, r.locale, a, e))
								);
							},
							keyboardConfig: {onLeftRight: null},
						})
					);
				},
				Le = function (e) {
					var n = e.prefixCls,
						t = e.generateConfig,
						r = e.locale,
						a = e.viewDate,
						o = e.onNextYear,
						c = e.onPrevYear,
						i = e.onYearClick;
					if (u.useContext(S).hideHeader) return null;
					var f = ''.concat(n, '-header');
					return u.createElement(
						V,
						(0, l.Z)({}, e, {prefixCls: f, onSuperPrev: c, onSuperNext: o}),
						u.createElement(
							'button',
							{
								type: 'button',
								onClick: i,
								className: ''.concat(n, '-year-btn'),
							},
							se(a, {locale: r, format: r.yearFormat, generateConfig: t})
						)
					);
				},
				Te = function (e) {
					var n = e.prefixCls,
						t = e.locale,
						r = e.value,
						a = e.viewDate,
						o = e.generateConfig,
						c = e.monthCellRender,
						i = u.useContext(xe),
						f = i.rangedValue,
						s = i.hoverRangedValue,
						d = Ne({
							cellPrefixCls: ''.concat(n, '-cell'),
							value: r,
							generateConfig: o,
							rangedValue: f,
							hoverRangedValue: s,
							isSameCell: function (e, n) {
								return oe(o, e, n);
							},
							isInView: function () {
								return !0;
							},
							offsetCell: function (e, n) {
								return o.addMonth(e, n);
							},
						}),
						m =
							t.shortMonths ||
							(o.locale.getShortMonths
								? o.locale.getShortMonths(t.locale)
								: []),
						p = o.setMonth(a, 0),
						v = c
							? function (e) {
									return c(e, t);
							  }
							: void 0;
					return u.createElement(
						F,
						(0, l.Z)({}, e, {
							rowNum: 4,
							colNum: 3,
							baseDate: p,
							getCellNode: v,
							getCellText: function (e) {
								return t.monthFormat
									? se(e, {locale: t, format: t.monthFormat, generateConfig: o})
									: m[o.getMonth(e)];
							},
							getCellClassName: d,
							getCellDate: o.addMonth,
							titleCell: function (e) {
								return se(e, {locale: t, format: 'YYYY-MM', generateConfig: o});
							},
						})
					);
				},
				Oe = function (e) {
					var n = e.prefixCls,
						t = e.operationRef,
						r = e.onViewDateChange,
						a = e.generateConfig,
						o = e.value,
						c = e.viewDate,
						i = e.onPanelChange,
						f = e.onSelect,
						s = ''.concat(n, '-month-panel');
					t.current = {
						onKeyDown: function (e) {
							return q(e, {
								onLeftRight: function (e) {
									f(a.addMonth(o || c, e), 'key');
								},
								onCtrlLeftRight: function (e) {
									f(a.addYear(o || c, e), 'key');
								},
								onUpDown: function (e) {
									f(a.addMonth(o || c, 3 * e), 'key');
								},
								onEnter: function () {
									i('date', o || c);
								},
							});
						},
					};
					var d = function (e) {
						var n = a.addYear(c, e);
						r(n), i(null, n);
					};
					return u.createElement(
						'div',
						{className: s},
						u.createElement(
							Le,
							(0, l.Z)({}, e, {
								prefixCls: n,
								onPrevYear: function () {
									d(-1);
								},
								onNextYear: function () {
									d(1);
								},
								onYearClick: function () {
									i('year', c);
								},
							})
						),
						u.createElement(
							Te,
							(0, l.Z)({}, e, {
								prefixCls: n,
								onSelect: function (e) {
									f(e, 'mouse'), i('date', e);
								},
							})
						)
					);
				},
				He = function (e) {
					var n = e.prefixCls,
						t = e.generateConfig,
						r = e.locale,
						a = e.viewDate,
						o = e.onNextYear,
						c = e.onPrevYear,
						i = e.onYearClick;
					if (u.useContext(S).hideHeader) return null;
					var f = ''.concat(n, '-header');
					return u.createElement(
						V,
						(0, l.Z)({}, e, {prefixCls: f, onSuperPrev: c, onSuperNext: o}),
						u.createElement(
							'button',
							{
								type: 'button',
								onClick: i,
								className: ''.concat(n, '-year-btn'),
							},
							se(a, {locale: r, format: r.yearFormat, generateConfig: t})
						)
					);
				},
				Fe = function (e) {
					var n = e.prefixCls,
						t = e.locale,
						r = e.value,
						a = e.viewDate,
						o = e.generateConfig,
						c = u.useContext(xe),
						i = c.rangedValue,
						f = c.hoverRangedValue,
						s = Ne({
							cellPrefixCls: ''.concat(n, '-cell'),
							value: r,
							generateConfig: o,
							rangedValue: i,
							hoverRangedValue: f,
							isSameCell: function (e, n) {
								return ae(o, e, n);
							},
							isInView: function () {
								return !0;
							},
							offsetCell: function (e, n) {
								return o.addMonth(e, 3 * n);
							},
						}),
						d = o.setDate(o.setMonth(a, 0), 1);
					return u.createElement(
						F,
						(0, l.Z)({}, e, {
							rowNum: 1,
							colNum: 4,
							baseDate: d,
							getCellText: function (e) {
								return se(e, {
									locale: t,
									format: t.quarterFormat || '[Q]Q',
									generateConfig: o,
								});
							},
							getCellClassName: s,
							getCellDate: function (e, n) {
								return o.addMonth(e, 3 * n);
							},
							titleCell: function (e) {
								return se(e, {
									locale: t,
									format: 'YYYY-[Q]Q',
									generateConfig: o,
								});
							},
						})
					);
				},
				Ae = function (e) {
					var n = e.prefixCls,
						t = e.operationRef,
						r = e.onViewDateChange,
						a = e.generateConfig,
						o = e.value,
						c = e.viewDate,
						i = e.onPanelChange,
						f = e.onSelect,
						s = ''.concat(n, '-quarter-panel');
					t.current = {
						onKeyDown: function (e) {
							return q(e, {
								onLeftRight: function (e) {
									f(a.addMonth(o || c, 3 * e), 'key');
								},
								onCtrlLeftRight: function (e) {
									f(a.addYear(o || c, e), 'key');
								},
								onUpDown: function (e) {
									f(a.addYear(o || c, e), 'key');
								},
							});
						},
					};
					var d = function (e) {
						var n = a.addYear(c, e);
						r(n), i(null, n);
					};
					return u.createElement(
						'div',
						{className: s},
						u.createElement(
							He,
							(0, l.Z)({}, e, {
								prefixCls: n,
								onPrevYear: function () {
									d(-1);
								},
								onNextYear: function () {
									d(1);
								},
								onYearClick: function () {
									i('year', c);
								},
							})
						),
						u.createElement(
							Fe,
							(0, l.Z)({}, e, {
								prefixCls: n,
								onSelect: function (e) {
									f(e, 'mouse');
								},
							})
						)
					);
				},
				Ie = function (e) {
					var n = e.prefixCls,
						t = e.generateConfig,
						r = e.viewDate,
						a = e.onPrevDecade,
						o = e.onNextDecade,
						c = e.onDecadeClick;
					if (u.useContext(S).hideHeader) return null;
					var i = ''.concat(n, '-header'),
						f = t.getYear(r),
						s = Math.floor(f / Ke) * Ke,
						d = s + Ke - 1;
					return u.createElement(
						V,
						(0, l.Z)({}, e, {prefixCls: i, onSuperPrev: a, onSuperNext: o}),
						u.createElement(
							'button',
							{
								type: 'button',
								onClick: c,
								className: ''.concat(n, '-decade-btn'),
							},
							s,
							'-',
							d
						)
					);
				},
				We = function (e) {
					var n = e.prefixCls,
						t = e.value,
						r = e.viewDate,
						a = e.locale,
						o = e.generateConfig,
						c = u.useContext(xe),
						i = c.rangedValue,
						f = c.hoverRangedValue,
						s = ''.concat(n, '-cell'),
						d = o.getYear(r),
						m = Math.floor(d / Ke) * Ke,
						p = m + Ke - 1,
						v = o.setYear(r, m - Math.ceil((12 - Ke) / 2)),
						g = Ne({
							cellPrefixCls: s,
							value: t,
							generateConfig: o,
							rangedValue: i,
							hoverRangedValue: f,
							isSameCell: function (e, n) {
								return te(o, e, n);
							},
							isInView: function (e) {
								var n = o.getYear(e);
								return m <= n && n <= p;
							},
							offsetCell: function (e, n) {
								return o.addYear(e, n);
							},
						});
					return u.createElement(
						F,
						(0, l.Z)({}, e, {
							rowNum: 4,
							colNum: 3,
							baseDate: v,
							getCellText: o.getYear,
							getCellClassName: g,
							getCellDate: o.addYear,
							titleCell: function (e) {
								return se(e, {locale: a, format: 'YYYY', generateConfig: o});
							},
						})
					);
				};
			var Ke = 10;
			const je = function (e) {
				var n = e.prefixCls,
					t = e.operationRef,
					r = e.onViewDateChange,
					a = e.generateConfig,
					o = e.value,
					c = e.viewDate,
					i = e.sourceMode,
					f = e.onSelect,
					s = e.onPanelChange,
					d = ''.concat(n, '-year-panel');
				t.current = {
					onKeyDown: function (e) {
						return q(e, {
							onLeftRight: function (e) {
								f(a.addYear(o || c, e), 'key');
							},
							onCtrlLeftRight: function (e) {
								f(a.addYear(o || c, e * Ke), 'key');
							},
							onUpDown: function (e) {
								f(a.addYear(o || c, 3 * e), 'key');
							},
							onEnter: function () {
								s('date' === i ? 'date' : 'month', o || c);
							},
						});
					},
				};
				var m = function (e) {
					var n = a.addYear(c, 10 * e);
					r(n), s(null, n);
				};
				return u.createElement(
					'div',
					{className: d},
					u.createElement(
						Ie,
						(0, l.Z)({}, e, {
							prefixCls: n,
							onPrevDecade: function () {
								m(-1);
							},
							onNextDecade: function () {
								m(1);
							},
							onDecadeClick: function () {
								s('decade', c);
							},
						})
					),
					u.createElement(
						We,
						(0, l.Z)({}, e, {
							prefixCls: n,
							onSelect: function (e) {
								s('date' === i ? 'date' : 'month', e), f(e, 'mouse');
							},
						})
					)
				);
			};
			function Be(e, n, t) {
				return t
					? u.createElement(
							'div',
							{className: ''.concat(e, '-footer-extra')},
							t(n)
					  )
					: null;
			}
			function qe(e) {
				var n,
					t,
					r = e.prefixCls,
					a = e.rangeList,
					o = void 0 === a ? [] : a,
					c = e.components,
					l = void 0 === c ? {} : c,
					i = e.needConfirmButton,
					f = e.onNow,
					s = e.onOk,
					d = e.okDisabled,
					m = e.showNow,
					p = e.locale;
				if (o.length) {
					var v = l.rangeItem || 'span';
					n = u.createElement(
						u.Fragment,
						null,
						o.map(function (e) {
							var n = e.label,
								t = e.onClick,
								a = e.onMouseEnter,
								o = e.onMouseLeave;
							return u.createElement(
								'li',
								{key: n, className: ''.concat(r, '-preset')},
								u.createElement(
									v,
									{onClick: t, onMouseEnter: a, onMouseLeave: o},
									n
								)
							);
						})
					);
				}
				if (i) {
					var g = l.button || 'button';
					f &&
						!n &&
						!1 !== m &&
						(n = u.createElement(
							'li',
							{className: ''.concat(r, '-now')},
							u.createElement(
								'a',
								{className: ''.concat(r, '-now-btn'), onClick: f},
								p.now
							)
						)),
						(t =
							i &&
							u.createElement(
								'li',
								{className: ''.concat(r, '-ok')},
								u.createElement(g, {disabled: d, onClick: s}, p.ok)
							));
				}
				return n || t
					? u.createElement('ul', {className: ''.concat(r, '-ranges')}, n, t)
					: null;
			}
			const Ue = function (e) {
				var n,
					t = e.prefixCls,
					r = void 0 === t ? 'rc-picker' : t,
					a = e.className,
					c = e.style,
					i = e.locale,
					f = e.generateConfig,
					d = e.value,
					m = e.defaultValue,
					p = e.pickerValue,
					v = e.defaultPickerValue,
					g = e.disabledDate,
					k = e.mode,
					Z = e.picker,
					w = void 0 === Z ? 'date' : Z,
					b = e.tabIndex,
					y = void 0 === b ? 0 : b,
					E = e.showNow,
					D = e.showTime,
					x = e.showToday,
					Y = e.renderExtraFooter,
					V = e.hideHeader,
					L = e.onSelect,
					H = e.onChange,
					F = e.onPanelChange,
					A = e.onMouseDown,
					I = e.onPickerValueChange,
					W = e.onOk,
					K = e.components,
					j = e.direction,
					B = e.hourStep,
					q = void 0 === B ? 1 : B,
					U = e.minuteStep,
					z = void 0 === U ? 1 : U,
					Q = e.secondStep,
					_ = void 0 === Q ? 1 : Q,
					X = ('date' === w && !!D) || 'time' === w,
					J = 24 % q == 0,
					$ = 60 % z == 0,
					ne = 60 % _ == 0,
					te = u.useContext(S),
					re = te.operationRef,
					ae = te.panelRef,
					oe = te.onSelect,
					ce = te.hideRanges,
					le = te.defaultOpenValue,
					ie = u.useContext(xe),
					fe = ie.inRange,
					se = ie.panelPosition,
					de = ie.rangedValue,
					me = ie.hoverRangedValue,
					pe = u.useRef({}),
					ve = u.useRef(!0),
					ge = (0, P.Z)(null, {
						value: d,
						defaultValue: m,
						postState: function (e) {
							return !e && le && 'time' === w ? le : e;
						},
					}),
					he = (0, N.Z)(ge, 2),
					Ce = he[0],
					ke = he[1],
					Ze = (0, P.Z)(null, {
						value: p,
						defaultValue: v || Ce,
						postState: function (e) {
							var n = f.getNow();
							return e
								? !Ce && D
									? 'object' === (0, M.Z)(D)
										? O(f, Array.isArray(e) ? e[0] : e, D.defaultValue || n)
										: O(f, Array.isArray(e) ? e[0] : e, m || n)
									: e
								: n;
						},
					}),
					we = (0, N.Z)(Ze, 2),
					be = we[0],
					ye = we[1],
					Ee = function (e) {
						ye(e), I && I(e);
					},
					Ne = function (e) {
						var n = G[w];
						return n ? n(e) : e;
					},
					Pe = (0, P.Z)(
						function () {
							return 'time' === w ? 'time' : Ne('date');
						},
						{value: k}
					),
					Me = (0, N.Z)(Pe, 2),
					Se = Me[0],
					Le = Me[1];
				u.useEffect(
					function () {
						Le(w);
					},
					[w]
				);
				var Te,
					He = u.useState(function () {
						return Se;
					}),
					Fe = (0, N.Z)(He, 2),
					Ie = Fe[0],
					We = Fe[1],
					Ke = function (e, n) {
						var t =
							arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						(Se === w || t) &&
							(ke(e),
							L && L(e),
							oe && oe(e, n),
							!H || ue(f, e, Ce) || (null == g ? void 0 : g(e)) || H(e));
					},
					Ue = function (e) {
						return pe.current && pe.current.onKeyDown
							? ([
									R.Z.LEFT,
									R.Z.RIGHT,
									R.Z.UP,
									R.Z.DOWN,
									R.Z.PAGE_UP,
									R.Z.PAGE_DOWN,
									R.Z.ENTER,
							  ].includes(e.which) && e.preventDefault(),
							  pe.current.onKeyDown(e))
							: ((0, o.ZP)(
									!1,
									'Panel not correct handle keyDown event. Please help to fire issue about this.'
							  ),
							  !1);
					};
				re &&
					'right' !== se &&
					(re.current = {
						onKeyDown: Ue,
						onClose: function () {
							pe.current && pe.current.onClose && pe.current.onClose();
						},
					}),
					u.useEffect(
						function () {
							d && !ve.current && ye(d);
						},
						[d]
					),
					u.useEffect(function () {
						ve.current = !1;
					}, []);
				var ze,
					Qe,
					_e,
					Ge = (0, C.Z)(
						(0, C.Z)({}, e),
						{},
						{
							operationRef: pe,
							prefixCls: r,
							viewDate: be,
							value: Ce,
							onViewDateChange: Ee,
							sourceMode: Ie,
							onPanelChange: function (e, n) {
								var t = Ne(e || Se);
								We(Se), Le(t), F && (Se !== t || ue(f, be, be)) && F(n, t);
							},
							disabledDate: g,
						}
					);
				switch ((delete Ge.onChange, delete Ge.onSelect, Se)) {
					case 'decade':
						Te = u.createElement(
							ee,
							(0, l.Z)({}, Ge, {
								onSelect: function (e, n) {
									Ee(e), Ke(e, n);
								},
							})
						);
						break;
					case 'year':
						Te = u.createElement(
							je,
							(0, l.Z)({}, Ge, {
								onSelect: function (e, n) {
									Ee(e), Ke(e, n);
								},
							})
						);
						break;
					case 'month':
						Te = u.createElement(
							Oe,
							(0, l.Z)({}, Ge, {
								onSelect: function (e, n) {
									Ee(e), Ke(e, n);
								},
							})
						);
						break;
					case 'quarter':
						Te = u.createElement(
							Ae,
							(0, l.Z)({}, Ge, {
								onSelect: function (e, n) {
									Ee(e), Ke(e, n);
								},
							})
						);
						break;
					case 'week':
						Te = u.createElement(
							Ve,
							(0, l.Z)({}, Ge, {
								onSelect: function (e, n) {
									Ee(e), Ke(e, n);
								},
							})
						);
						break;
					case 'time':
						delete Ge.showTime,
							(Te = u.createElement(
								De,
								(0, l.Z)({}, Ge, 'object' === (0, M.Z)(D) ? D : null, {
									onSelect: function (e, n) {
										Ee(e), Ke(e, n);
									},
								})
							));
						break;
					default:
						Te = D
							? u.createElement(
									Ye,
									(0, l.Z)({}, Ge, {
										onSelect: function (e, n) {
											Ee(e), Ke(e, n);
										},
									})
							  )
							: u.createElement(
									Re,
									(0, l.Z)({}, Ge, {
										onSelect: function (e, n) {
											Ee(e), Ke(e, n);
										},
									})
							  );
				}
				if (
					(ce ||
						((ze = Be(r, Se, Y)),
						(Qe = qe({
							prefixCls: r,
							components: K,
							needConfirmButton: X,
							okDisabled: !Ce || (g && g(Ce)),
							locale: i,
							showNow: E,
							onNow:
								X &&
								function () {
									var e = f.getNow(),
										n = (function (e, n, t, r, a, o) {
											var c = Math.floor(e / r) * r;
											if (c < e) return [c, 60 - a, 60 - o];
											var l = Math.floor(n / a) * a;
											return l < n
												? [c, l, 60 - o]
												: [c, l, Math.floor(t / o) * o];
										})(
											f.getHour(e),
											f.getMinute(e),
											f.getSecond(e),
											J ? q : 1,
											$ ? z : 1,
											ne ? _ : 1
										),
										t = T(f, e, n[0], n[1], n[2]);
									Ke(t, 'submit');
								},
							onOk: function () {
								Ce && (Ke(Ce, 'submit', !0), W && W(Ce));
							},
						}))),
					x && 'date' === Se && 'date' === w && !D)
				) {
					var Xe = f.getNow(),
						Je = ''.concat(r, '-today-btn'),
						$e = g && g(Xe);
					_e = u.createElement(
						'a',
						{
							className: h()(Je, $e && ''.concat(Je, '-disabled')),
							'aria-disabled': $e,
							onClick: function () {
								$e || Ke(Xe, 'mouse', !0);
							},
						},
						i.today
					);
				}
				return u.createElement(
					S.Provider,
					{
						value: (0, C.Z)(
							(0, C.Z)({}, te),
							{},
							{
								mode: Se,
								hideHeader: 'hideHeader' in e ? V : te.hideHeader,
								hidePrevBtn: fe && 'right' === se,
								hideNextBtn: fe && 'left' === se,
							}
						),
					},
					u.createElement(
						'div',
						{
							tabIndex: y,
							className: h()(
								''.concat(r, '-panel'),
								a,
								((n = {}),
								(0, s.Z)(
									n,
									''.concat(r, '-panel-has-range'),
									de && de[0] && de[1]
								),
								(0, s.Z)(
									n,
									''.concat(r, '-panel-has-range-hover'),
									me && me[0] && me[1]
								),
								(0, s.Z)(n, ''.concat(r, '-panel-rtl'), 'rtl' === j),
								n)
							),
							style: c,
							onKeyDown: Ue,
							onBlur: function (e) {
								pe.current && pe.current.onBlur && pe.current.onBlur(e);
							},
							onMouseDown: A,
							ref: ae,
						},
						Te,
						ze || Qe || _e
							? u.createElement(
									'div',
									{className: ''.concat(r, '-footer')},
									ze,
									Qe,
									_e
							  )
							: null
					)
				);
			};
			var ze = t(18481),
				Qe = {
					bottomLeft: {
						points: ['tl', 'bl'],
						offset: [0, 4],
						overflow: {adjustX: 1, adjustY: 1},
					},
					bottomRight: {
						points: ['tr', 'br'],
						offset: [0, 4],
						overflow: {adjustX: 1, adjustY: 1},
					},
					topLeft: {
						points: ['bl', 'tl'],
						offset: [0, -4],
						overflow: {adjustX: 0, adjustY: 1},
					},
					topRight: {
						points: ['br', 'tr'],
						offset: [0, -4],
						overflow: {adjustX: 0, adjustY: 1},
					},
				};
			const _e = function (e) {
				var n,
					t = e.prefixCls,
					r = e.popupElement,
					a = e.popupStyle,
					o = e.visible,
					c = e.dropdownClassName,
					l = e.dropdownAlign,
					i = e.transitionName,
					f = e.getPopupContainer,
					d = e.children,
					m = e.range,
					p = e.popupPlacement,
					v = e.direction,
					g = ''.concat(t, '-dropdown');
				return u.createElement(
					ze.Z,
					{
						showAction: [],
						hideAction: [],
						popupPlacement:
							void 0 !== p ? p : 'rtl' === v ? 'bottomRight' : 'bottomLeft',
						builtinPlacements: Qe,
						prefixCls: g,
						popupTransitionName: i,
						popup: r,
						popupAlign: l,
						popupVisible: o,
						popupClassName: h()(
							c,
							((n = {}),
							(0, s.Z)(n, ''.concat(g, '-range'), m),
							(0, s.Z)(n, ''.concat(g, '-rtl'), 'rtl' === v),
							n)
						),
						popupStyle: a,
						getPopupContainer: f,
					},
					d
				);
			};
			function Ge(e) {
				var n = e.open,
					t = e.value,
					r = e.isClickOutside,
					a = e.triggerOpen,
					o = e.forwardKeyDown,
					c = e.onKeyDown,
					l = e.blurToCancel,
					i = e.onSubmit,
					f = e.onCancel,
					s = e.onFocus,
					d = e.onBlur,
					m = (0, u.useState)(!1),
					p = (0, N.Z)(m, 2),
					v = p[0],
					g = p[1],
					h = (0, u.useState)(!1),
					C = (0, N.Z)(h, 2),
					k = C[0],
					Z = C[1],
					w = (0, u.useRef)(!1),
					b = (0, u.useRef)(!1),
					y = (0, u.useRef)(!1),
					E = {
						onMouseDown: function () {
							g(!0), a(!0);
						},
						onKeyDown: function (e) {
							if (
								(c(e, function () {
									y.current = !0;
								}),
								!y.current)
							) {
								switch (e.which) {
									case R.Z.ENTER:
										return (
											n ? !1 !== i() && g(!0) : a(!0), void e.preventDefault()
										);
									case R.Z.TAB:
										return void (v && n && !e.shiftKey
											? (g(!1), e.preventDefault())
											: !v &&
											  n &&
											  !o(e) &&
											  e.shiftKey &&
											  (g(!0), e.preventDefault()));
									case R.Z.ESC:
										return g(!0), void f();
								}
								n || [R.Z.SHIFT].includes(e.which) ? v || o(e) : a(!0);
							}
						},
						onFocus: function (e) {
							g(!0), Z(!0), s && s(e);
						},
						onBlur: function (e) {
							!w.current && r(document.activeElement)
								? (l
										? setTimeout(function () {
												for (
													var e = document.activeElement;
													e && e.shadowRoot;

												)
													e = e.shadowRoot.activeElement;
												r(e) && f();
										  }, 0)
										: n && (a(!1), b.current && i()),
								  Z(!1),
								  d && d(e))
								: (w.current = !1);
						},
					};
				return (
					(0, u.useEffect)(
						function () {
							b.current = !1;
						},
						[n]
					),
					(0, u.useEffect)(
						function () {
							b.current = !0;
						},
						[t]
					),
					(0, u.useEffect)(function () {
						return (
							(e = function (e) {
								var t = (function (e) {
									var n,
										t = e.target;
									return (
										(e.composed &&
											t.shadowRoot &&
											(null === (n = e.composedPath) || void 0 === n
												? void 0
												: n.call(e)[0])) ||
										t
									);
								})(e);
								if (n) {
									var o = r(t);
									o
										? (k && !o) || a(!1)
										: ((w.current = !0),
										  requestAnimationFrame(function () {
												w.current = !1;
										  }));
								}
							}),
							!Q &&
								'undefined' != typeof window &&
								window.addEventListener &&
								((Q = function (e) {
									(0, I.Z)(_).forEach(function (n) {
										n(e);
									});
								}),
								window.addEventListener('mousedown', Q)),
							_.add(e),
							function () {
								_.delete(e),
									0 === _.size &&
										(window.removeEventListener('mousedown', Q), (Q = null));
							}
						);
						var e;
					}),
					[E, {focused: k, typing: v}]
				);
			}
			function Xe(e) {
				var n = e.valueTexts,
					t = e.onTextChange,
					r = u.useState(''),
					a = (0, N.Z)(r, 2),
					o = a[0],
					c = a[1],
					l = u.useRef([]);
				function i() {
					c(l.current[0]);
				}
				return (
					(l.current = n),
					u.useEffect(
						function () {
							n.every(function (e) {
								return e !== o;
							}) && i();
						},
						[n.join('||')]
					),
					[
						o,
						function (e) {
							c(e), t(e);
						},
						i,
					]
				);
			}
			var Je = t(96774),
				$e = t.n(Je);
			function en(e, n) {
				var t = n.formatList,
					r = n.generateConfig,
					a = n.locale;
				return (0, ve.Z)(
					function () {
						if (!e) return [[''], ''];
						for (var n = '', o = [], c = 0; c < t.length; c += 1) {
							var l = t[c],
								u = se(e, {generateConfig: r, locale: a, format: l});
							o.push(u), 0 === c && (n = u);
						}
						return [o, n];
					},
					[e, t],
					function (e, n) {
						return e[0] !== n[0] || !$e()(e[1], n[1]);
					}
				);
			}
			function nn(e, n) {
				var t = n.formatList,
					r = n.generateConfig,
					a = n.locale,
					o = (0, u.useState)(null),
					c = (0, N.Z)(o, 2),
					l = c[0],
					i = c[1],
					f = (0, u.useRef)(null);
				function s(e) {
					var n =
						arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					cancelAnimationFrame(f.current),
						n
							? i(e)
							: (f.current = requestAnimationFrame(function () {
									i(e);
							  }));
				}
				var d = en(l, {formatList: t, generateConfig: r, locale: a}),
					m = (0, N.Z)(d, 2)[1];
				function p() {
					var e =
						arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					s(null, e);
				}
				return (
					(0, u.useEffect)(
						function () {
							p(!0);
						},
						[e]
					),
					(0, u.useEffect)(function () {
						return function () {
							return cancelAnimationFrame(f.current);
						};
					}, []),
					[
						m,
						function (e) {
							s(e);
						},
						p,
					]
				);
			}
			function tn(e) {
				var n,
					t = e.prefixCls,
					r = void 0 === t ? 'rc-picker' : t,
					a = e.id,
					c = e.tabIndex,
					i = e.style,
					f = e.className,
					d = e.dropdownClassName,
					m = e.dropdownAlign,
					p = e.popupStyle,
					v = e.transitionName,
					g = e.generateConfig,
					k = e.locale,
					Z = e.inputReadOnly,
					w = e.allowClear,
					b = e.autoFocus,
					y = e.showTime,
					E = e.picker,
					D = void 0 === E ? 'date' : E,
					x = e.format,
					M = e.use12Hours,
					R = e.value,
					Y = e.defaultValue,
					V = e.open,
					L = e.defaultOpen,
					T = e.defaultOpenValue,
					O = e.suffixIcon,
					H = e.clearIcon,
					F = e.disabled,
					A = e.disabledDate,
					I = e.placeholder,
					W = e.getPopupContainer,
					K = e.pickerRef,
					j = e.panelRender,
					B = e.onChange,
					q = e.onOpenChange,
					Q = e.onFocus,
					_ = e.onBlur,
					G = e.onMouseDown,
					J = e.onMouseUp,
					$ = e.onMouseEnter,
					ee = e.onMouseLeave,
					ne = e.onContextMenu,
					te = e.onClick,
					re = e.onKeyDown,
					ae = e.onSelect,
					oe = e.direction,
					ce = e.autoComplete,
					le = void 0 === ce ? 'off' : ce,
					ie = e.inputRender,
					fe = u.useRef(null),
					me = ('date' === D && !!y) || 'time' === D,
					pe = Ce(U(x, D, y, M)),
					ve = u.useRef(null),
					ge = u.useRef(null),
					he = u.useRef(null),
					Ze = (0, P.Z)(null, {value: R, defaultValue: Y}),
					we = (0, N.Z)(Ze, 2),
					be = we[0],
					ye = we[1],
					Ee = u.useState(be),
					De = (0, N.Z)(Ee, 2),
					xe = De[0],
					Ne = De[1],
					Pe = u.useRef(null),
					Me = (0, P.Z)(!1, {
						value: V,
						defaultValue: L,
						postState: function (e) {
							return !F && e;
						},
						onChange: function (e) {
							q && q(e),
								!e && Pe.current && Pe.current.onClose && Pe.current.onClose();
						},
					}),
					Re = (0, N.Z)(Me, 2),
					Se = Re[0],
					Ye = Re[1],
					Ve = en(xe, {formatList: pe, generateConfig: g, locale: k}),
					Le = (0, N.Z)(Ve, 2),
					Te = Le[0],
					Oe = Le[1],
					He = Xe({
						valueTexts: Te,
						onTextChange: function (e) {
							var n = de(e, {locale: k, formatList: pe, generateConfig: g});
							!n || (A && A(n)) || Ne(n);
						},
					}),
					Fe = (0, N.Z)(He, 3),
					Ae = Fe[0],
					Ie = Fe[1],
					We = Fe[2],
					Ke = function (e) {
						Ne(e),
							ye(e),
							B &&
								!ue(g, be, e) &&
								B(
									e,
									e ? se(e, {generateConfig: g, locale: k, format: pe[0]}) : ''
								);
					},
					je = function (e) {
						(F && e) || Ye(e);
					},
					Be = Ge({
						blurToCancel: me,
						open: Se,
						value: Ae,
						triggerOpen: je,
						forwardKeyDown: function (e) {
							return Se && Pe.current && Pe.current.onKeyDown
								? Pe.current.onKeyDown(e)
								: ((0, o.ZP)(
										!1,
										'Picker not correct forward KeyDown operation. Please help to fire issue about this.'
								  ),
								  !1);
						},
						isClickOutside: function (e) {
							return !X([ve.current, ge.current, he.current], e);
						},
						onSubmit: function () {
							return !(!xe || (A && A(xe)) || (Ke(xe), je(!1), We(), 0));
						},
						onCancel: function () {
							je(!1), Ne(be), We();
						},
						onKeyDown: function (e, n) {
							null == re || re(e, n);
						},
						onFocus: Q,
						onBlur: _,
					}),
					qe = (0, N.Z)(Be, 2),
					ze = qe[0],
					Qe = qe[1],
					Je = Qe.focused,
					$e = Qe.typing;
				u.useEffect(
					function () {
						Se ||
							(Ne(be), Te.length && '' !== Te[0] ? Oe !== Ae && We() : Ie(''));
					},
					[Se, Te]
				),
					u.useEffect(
						function () {
							Se || We();
						},
						[D]
					),
					u.useEffect(
						function () {
							Ne(be);
						},
						[be]
					),
					K &&
						(K.current = {
							focus: function () {
								fe.current && fe.current.focus();
							},
							blur: function () {
								fe.current && fe.current.blur();
							},
						});
				var tn = nn(Ae, {formatList: pe, generateConfig: g, locale: k}),
					rn = (0, N.Z)(tn, 3),
					an = rn[0],
					on = rn[1],
					cn = rn[2],
					ln = (0, C.Z)(
						(0, C.Z)({}, e),
						{},
						{
							className: void 0,
							style: void 0,
							pickerValue: void 0,
							onPickerValueChange: void 0,
							onChange: null,
						}
					),
					un = u.createElement(
						Ue,
						(0, l.Z)({}, ln, {
							generateConfig: g,
							className: h()((0, s.Z)({}, ''.concat(r, '-panel-focused'), !$e)),
							value: xe,
							locale: k,
							tabIndex: -1,
							onSelect: function (e) {
								null == ae || ae(e), Ne(e);
							},
							direction: oe,
							onPanelChange: function (n, t) {
								var r = e.onPanelChange;
								cn(!0), null == r || r(n, t);
							},
						})
					);
				j && (un = j(un));
				var fn,
					sn,
					dn = u.createElement(
						'div',
						{
							className: ''.concat(r, '-panel-container'),
							onMouseDown: function (e) {
								e.preventDefault();
							},
						},
						un
					);
				O &&
					(fn = u.createElement(
						'span',
						{className: ''.concat(r, '-suffix')},
						O
					)),
					w &&
						be &&
						!F &&
						(sn = u.createElement(
							'span',
							{
								onMouseDown: function (e) {
									e.preventDefault(), e.stopPropagation();
								},
								onMouseUp: function (e) {
									e.preventDefault(), e.stopPropagation(), Ke(null), je(!1);
								},
								className: ''.concat(r, '-clear'),
								role: 'button',
							},
							H ||
								u.createElement('span', {className: ''.concat(r, '-clear-btn')})
						));
				var mn = (0, C.Z)(
						(0, C.Z)(
							(0, C.Z)(
								{
									id: a,
									tabIndex: c,
									disabled: F,
									readOnly: Z || 'function' == typeof pe[0] || !$e,
									value: an || Ae,
									onChange: function (e) {
										Ie(e.target.value);
									},
									autoFocus: b,
									placeholder: I,
									ref: fe,
									title: Ae,
								},
								ze
							),
							{},
							{size: z(D, pe[0], g)},
							ke(e)
						),
						{},
						{autoComplete: le}
					),
					pn = ie ? ie(mn) : u.createElement('input', mn),
					vn = 'rtl' === oe ? 'bottomRight' : 'bottomLeft';
				return u.createElement(
					S.Provider,
					{
						value: {
							operationRef: Pe,
							hideHeader: 'time' === D,
							panelRef: ve,
							onSelect: function (e, n) {
								('submit' === n || ('key' !== n && !me)) && (Ke(e), je(!1));
							},
							open: Se,
							defaultOpenValue: T,
							onDateMouseEnter: on,
							onDateMouseLeave: cn,
						},
					},
					u.createElement(
						_e,
						{
							visible: Se,
							popupElement: dn,
							popupStyle: p,
							prefixCls: r,
							dropdownClassName: d,
							dropdownAlign: m,
							getPopupContainer: W,
							transitionName: v,
							popupPlacement: vn,
							direction: oe,
						},
						u.createElement(
							'div',
							{
								ref: he,
								className: h()(
									r,
									f,
									((n = {}),
									(0, s.Z)(n, ''.concat(r, '-disabled'), F),
									(0, s.Z)(n, ''.concat(r, '-focused'), Je),
									(0, s.Z)(n, ''.concat(r, '-rtl'), 'rtl' === oe),
									n)
								),
								style: i,
								onMouseDown: G,
								onMouseUp: function () {
									J && J.apply(void 0, arguments),
										fe.current && (fe.current.focus(), je(!0));
								},
								onMouseEnter: $,
								onMouseLeave: ee,
								onContextMenu: ne,
								onClick: te,
							},
							u.createElement(
								'div',
								{
									className: h()(
										''.concat(r, '-input'),
										(0, s.Z)({}, ''.concat(r, '-input-placeholder'), !!an)
									),
									ref: ge,
								},
								pn,
								fn,
								sn
							)
						)
					)
				);
			}
			const rn = (function (e) {
				(0, p.Z)(t, e);
				var n = (0, v.Z)(t);
				function t() {
					var e;
					(0, d.Z)(this, t);
					for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
						a[o] = arguments[o];
					return (
						((e = n.call.apply(n, [this].concat(a))).pickerRef = u.createRef()),
						(e.focus = function () {
							e.pickerRef.current && e.pickerRef.current.focus();
						}),
						(e.blur = function () {
							e.pickerRef.current && e.pickerRef.current.blur();
						}),
						e
					);
				}
				return (
					(0, m.Z)(t, [
						{
							key: 'render',
							value: function () {
								return u.createElement(
									tn,
									(0, l.Z)({}, this.props, {pickerRef: this.pickerRef})
								);
							},
						},
					]),
					t
				);
			})(u.Component);
			function an(e) {
				var n = e.values,
					t = e.picker,
					r = e.defaultDates,
					a = e.generateConfig,
					o = u.useState(function () {
						return [Ze(r, 0), Ze(r, 1)];
					}),
					c = (0, N.Z)(o, 2),
					l = c[0],
					i = c[1],
					f = u.useState(null),
					s = (0, N.Z)(f, 2),
					d = s[0],
					m = s[1],
					p = Ze(n, 0),
					v = Ze(n, 1);
				return [
					function (e) {
						return l[e]
							? l[e]
							: Ze(d, e) ||
									(function (e, n, t, r) {
										var a = Ze(e, 0),
											o = Ze(e, 1);
										if (0 === n) return a;
										if (a && o)
											switch (
												(function (e, n, t, r) {
													var a = fe(e, t, r, 1);
													function o(t) {
														return t(e, n)
															? 'same'
															: t(a, n)
															? 'closing'
															: 'far';
													}
													switch (t) {
														case 'year':
															return o(function (e, n) {
																return (function (e, n, t) {
																	var r = ne(n, t);
																	return 'boolean' == typeof r
																		? r
																		: Math.floor(e.getYear(n) / 10) ===
																				Math.floor(e.getYear(t) / 10);
																})(r, e, n);
															});
														case 'quarter':
														case 'month':
															return o(function (e, n) {
																return te(r, e, n);
															});
														default:
															return o(function (e, n) {
																return oe(r, e, n);
															});
													}
												})(a, o, t, r)
											) {
												case 'same':
												case 'closing':
													return a;
												default:
													return fe(o, t, r, -1);
											}
										return a;
									})(n, e, t, a) ||
									p ||
									v ||
									a.getNow();
					},
					function (e, t) {
						if (e) {
							var r = we(d, e, t);
							i(we(l, null, t) || [null, null]);
							var a = (t + 1) % 2;
							Ze(n, a) || (r = we(r, e, a)), m(r);
						} else (p || v) && m(null);
					},
				];
			}
			function on(e, n) {
				return e && e[0] && e[1] && n.isAfter(e[0], e[1]) ? [e[1], e[0]] : e;
			}
			function cn(e, n, t, r) {
				return !!e || !(!r || !r[n]) || !!t[(n + 1) % 2];
			}
			function ln(e) {
				var n,
					t,
					r,
					a = e.prefixCls,
					c = void 0 === a ? 'rc-picker' : a,
					i = e.id,
					f = e.style,
					d = e.className,
					m = e.popupStyle,
					p = e.dropdownClassName,
					v = e.transitionName,
					g = e.dropdownAlign,
					k = e.getPopupContainer,
					Z = e.generateConfig,
					w = e.locale,
					b = e.placeholder,
					y = e.autoFocus,
					E = e.disabled,
					D = e.format,
					x = e.picker,
					R = void 0 === x ? 'date' : x,
					Y = e.showTime,
					V = e.use12Hours,
					L = e.separator,
					T = void 0 === L ? '~' : L,
					O = e.value,
					H = e.defaultValue,
					F = e.defaultPickerValue,
					A = e.open,
					I = e.defaultOpen,
					W = e.disabledDate,
					K = e.disabledTime,
					j = e.dateRender,
					B = e.panelRender,
					q = e.ranges,
					Q = e.allowEmpty,
					_ = e.allowClear,
					G = e.suffixIcon,
					J = e.clearIcon,
					$ = e.pickerRef,
					ee = e.inputReadOnly,
					ne = e.mode,
					te = e.renderExtraFooter,
					oe = e.onChange,
					ie = e.onOpenChange,
					me = e.onPanelChange,
					pe = e.onCalendarChange,
					ve = e.onFocus,
					ge = e.onBlur,
					he = e.onMouseDown,
					be = e.onMouseUp,
					ye = e.onMouseEnter,
					Ee = e.onMouseLeave,
					De = e.onClick,
					Ne = e.onOk,
					Pe = e.onKeyDown,
					Me = e.components,
					Re = e.order,
					Se = e.direction,
					Ye = e.activePickerIndex,
					Ve = e.autoComplete,
					Le = void 0 === Ve ? 'off' : Ve,
					Te = ('date' === R && !!Y) || 'time' === R,
					Oe = (0, u.useRef)({}),
					He = (0, u.useRef)(null),
					Fe = (0, u.useRef)(null),
					Ae = (0, u.useRef)(null),
					Ie = (0, u.useRef)(null),
					We = (0, u.useRef)(null),
					Ke = (0, u.useRef)(null),
					je = (0, u.useRef)(null),
					ze = (0, u.useRef)(null),
					Qe = Ce(U(D, R, Y, V)),
					Je = (0, P.Z)(0, {value: Ye}),
					$e = (0, N.Z)(Je, 2),
					tn = $e[0],
					rn = $e[1],
					ln = (0, u.useRef)(null),
					un = u.useMemo(
						function () {
							return Array.isArray(E) ? E : [E || !1, E || !1];
						},
						[E]
					),
					fn = (0, P.Z)(null, {
						value: O,
						defaultValue: H,
						postState: function (e) {
							return 'time' !== R || Re ? on(e, Z) : e;
						},
					}),
					sn = (0, N.Z)(fn, 2),
					dn = sn[0],
					mn = sn[1],
					pn = an({values: dn, picker: R, defaultDates: F, generateConfig: Z}),
					vn = (0, N.Z)(pn, 2),
					gn = vn[0],
					hn = vn[1],
					Cn = (0, P.Z)(dn, {
						postState: function (e) {
							var n = e;
							if (un[0] && un[1]) return n;
							for (var t = 0; t < 2; t += 1)
								!un[t] || Ze(n, t) || Ze(Q, t) || (n = we(n, Z.getNow(), t));
							return n;
						},
					}),
					kn = (0, N.Z)(Cn, 2),
					Zn = kn[0],
					wn = kn[1],
					bn = (0, P.Z)([R, R], {value: ne}),
					yn = (0, N.Z)(bn, 2),
					En = yn[0],
					Dn = yn[1];
				(0, u.useEffect)(
					function () {
						Dn([R, R]);
					},
					[R]
				);
				var xn = function (e, n) {
						Dn(e), me && me(n, e);
					},
					Nn = (function (e, n, t) {
						var r = e.picker,
							a = e.locale,
							o = e.selectedValue,
							c = e.disabledDate,
							l = e.disabled,
							i = e.generateConfig,
							f = Ze(o, 0),
							s = Ze(o, 1);
						function d(e) {
							return i.locale.getWeekFirstDate(a.locale, e);
						}
						function m(e) {
							return 100 * i.getYear(e) + i.getMonth(e);
						}
						function p(e) {
							return 10 * i.getYear(e) + re(i, e);
						}
						return [
							u.useCallback(
								function (e) {
									if (c && c(e)) return !0;
									if (l[1] && s) return !ce(i, e, s) && i.isAfter(e, s);
									if (n && s)
										switch (r) {
											case 'quarter':
												return p(e) > p(s);
											case 'month':
												return m(e) > m(s);
											case 'week':
												return d(e) > d(s);
											default:
												return !ce(i, e, s) && i.isAfter(e, s);
										}
									return !1;
								},
								[c, l[1], s, n]
							),
							u.useCallback(
								function (e) {
									if (c && c(e)) return !0;
									if (l[0] && f) return !ce(i, e, s) && i.isAfter(f, e);
									if (t && f)
										switch (r) {
											case 'quarter':
												return p(e) < p(f);
											case 'month':
												return m(e) < m(f);
											case 'week':
												return d(e) < d(f);
											default:
												return !ce(i, e, f) && i.isAfter(f, e);
										}
									return !1;
								},
								[c, l[0], f, t]
							),
						];
					})(
						{
							picker: R,
							selectedValue: Zn,
							locale: w,
							disabled: un,
							disabledDate: W,
							generateConfig: Z,
						},
						Oe.current[1],
						Oe.current[0]
					),
					Pn = (0, N.Z)(Nn, 2),
					Mn = Pn[0],
					Rn = Pn[1],
					Sn = (0, P.Z)(!1, {
						value: A,
						defaultValue: I,
						postState: function (e) {
							return !un[tn] && e;
						},
						onChange: function (e) {
							ie && ie(e),
								!e && ln.current && ln.current.onClose && ln.current.onClose();
						},
					}),
					Yn = (0, N.Z)(Sn, 2),
					Vn = Yn[0],
					Ln = Yn[1],
					Tn = Vn && 0 === tn,
					On = Vn && 1 === tn,
					Hn = (0, u.useState)(0),
					Fn = (0, N.Z)(Hn, 2),
					An = Fn[0],
					In = Fn[1];
				(0, u.useEffect)(
					function () {
						!Vn && He.current && In(He.current.offsetWidth);
					},
					[Vn]
				);
				var Wn = u.useRef();
				function Kn(e, n) {
					if (e)
						clearTimeout(Wn.current),
							(Oe.current[n] = !0),
							rn(n),
							Ln(e),
							Vn || hn(null, n);
					else if (tn === n) {
						Ln(e);
						var t = Oe.current;
						Wn.current = setTimeout(function () {
							t === Oe.current && (Oe.current = {});
						});
					}
				}
				function jn(e) {
					Kn(!0, e),
						setTimeout(function () {
							var n = [Ke, je][e];
							n.current && n.current.focus();
						}, 0);
				}
				function Bn(e, n) {
					var t = e,
						r = Ze(t, 0),
						a = Ze(t, 1);
					r &&
						a &&
						Z.isAfter(r, a) &&
						(('week' === R && !le(Z, w.locale, r, a)) ||
						('quarter' === R && !ae(Z, r, a)) ||
						('week' !== R && 'quarter' !== R && 'time' !== R && !ce(Z, r, a))
							? (0 === n
									? ((t = [r, null]), (a = null))
									: ((r = null), (t = [null, a])),
							  (Oe.current = (0, s.Z)({}, n, !0)))
							: ('time' === R && !1 === Re) || (t = on(t, Z))),
						wn(t);
					var o =
							t && t[0]
								? se(t[0], {generateConfig: Z, locale: w, format: Qe[0]})
								: '',
						c =
							t && t[1]
								? se(t[1], {generateConfig: Z, locale: w, format: Qe[0]})
								: '';
					pe && pe(t, [o, c], {range: 0 === n ? 'start' : 'end'});
					var l = cn(r, 0, un, Q),
						u = cn(a, 1, un, Q);
					(null === t || (l && u)) &&
						(mn(t),
						!oe ||
							(ue(Z, Ze(dn, 0), r) && ue(Z, Ze(dn, 1), a)) ||
							oe(t, [o, c]));
					var i = null;
					0 !== n || un[1] ? 1 !== n || un[0] || (i = 0) : (i = 1),
						null === i || i === tn || (Oe.current[i] && Ze(t, i)) || !Ze(t, n)
							? Kn(!1, n)
							: jn(i);
				}
				var qn = function (e) {
						return Vn && ln.current && ln.current.onKeyDown
							? ln.current.onKeyDown(e)
							: ((0, o.ZP)(
									!1,
									'Picker not correct forward KeyDown operation. Please help to fire issue about this.'
							  ),
							  !1);
					},
					Un = {formatList: Qe, generateConfig: Z, locale: w},
					zn = en(Ze(Zn, 0), Un),
					Qn = (0, N.Z)(zn, 2),
					_n = Qn[0],
					Gn = Qn[1],
					Xn = en(Ze(Zn, 1), Un),
					Jn = (0, N.Z)(Xn, 2),
					$n = Jn[0],
					et = Jn[1],
					nt = function (e, n) {
						var t = de(e, {locale: w, formatList: Qe, generateConfig: Z});
						t && !(0 === n ? Mn : Rn)(t) && (wn(we(Zn, t, n)), hn(t, n));
					},
					tt = Xe({
						valueTexts: _n,
						onTextChange: function (e) {
							return nt(e, 0);
						},
					}),
					rt = (0, N.Z)(tt, 3),
					at = rt[0],
					ot = rt[1],
					ct = rt[2],
					lt = Xe({
						valueTexts: $n,
						onTextChange: function (e) {
							return nt(e, 1);
						},
					}),
					ut = (0, N.Z)(lt, 3),
					it = ut[0],
					ft = ut[1],
					st = ut[2],
					dt = (0, u.useState)(null),
					mt = (0, N.Z)(dt, 2),
					pt = mt[0],
					vt = mt[1],
					gt = (0, u.useState)(null),
					ht = (0, N.Z)(gt, 2),
					Ct = ht[0],
					kt = ht[1],
					Zt = nn(at, {formatList: Qe, generateConfig: Z, locale: w}),
					wt = (0, N.Z)(Zt, 3),
					bt = wt[0],
					yt = wt[1],
					Et = wt[2],
					Dt = nn(it, {formatList: Qe, generateConfig: Z, locale: w}),
					xt = (0, N.Z)(Dt, 3),
					Nt = xt[0],
					Pt = xt[1],
					Mt = xt[2],
					Rt = function (e, n) {
						return {
							blurToCancel: Te,
							forwardKeyDown: qn,
							onBlur: ge,
							isClickOutside: function (e) {
								return !X([Fe.current, Ae.current, Ie.current, He.current], e);
							},
							onFocus: function (n) {
								rn(e), ve && ve(n);
							},
							triggerOpen: function (n) {
								Kn(n, e);
							},
							onSubmit: function () {
								if (!Zn || (W && W(Zn[e]))) return !1;
								Bn(Zn, e), n();
							},
							onCancel: function () {
								Kn(!1, e), wn(dn), n();
							},
						};
					},
					St = Ge(
						(0, C.Z)(
							(0, C.Z)({}, Rt(0, ct)),
							{},
							{
								open: Tn,
								value: at,
								onKeyDown: function (e, n) {
									null == Pe || Pe(e, n);
								},
							}
						)
					),
					Yt = (0, N.Z)(St, 2),
					Vt = Yt[0],
					Lt = Yt[1],
					Tt = Lt.focused,
					Ot = Lt.typing,
					Ht = Ge(
						(0, C.Z)(
							(0, C.Z)({}, Rt(1, st)),
							{},
							{
								open: On,
								value: it,
								onKeyDown: function (e, n) {
									null == Pe || Pe(e, n);
								},
							}
						)
					),
					Ft = (0, N.Z)(Ht, 2),
					At = Ft[0],
					It = Ft[1],
					Wt = It.focused,
					Kt = It.typing,
					jt =
						dn && dn[0]
							? se(dn[0], {
									locale: w,
									format: 'YYYYMMDDHHmmss',
									generateConfig: Z,
							  })
							: '',
					Bt =
						dn && dn[1]
							? se(dn[1], {
									locale: w,
									format: 'YYYYMMDDHHmmss',
									generateConfig: Z,
							  })
							: '';
				(0, u.useEffect)(
					function () {
						Vn ||
							(wn(dn),
							_n.length && '' !== _n[0] ? Gn !== at && ct() : ot(''),
							$n.length && '' !== $n[0] ? et !== it && st() : ft(''));
					},
					[Vn, _n, $n]
				),
					(0, u.useEffect)(
						function () {
							wn(dn);
						},
						[jt, Bt]
					),
					$ &&
						($.current = {
							focus: function () {
								Ke.current && Ke.current.focus();
							},
							blur: function () {
								Ke.current && Ke.current.blur(),
									je.current && je.current.blur();
							},
						});
				var qt = Object.keys(q || {}).map(function (e) {
					var n = q[e],
						t = 'function' == typeof n ? n() : n;
					return {
						label: e,
						onClick: function () {
							Bn(t, null), Kn(!1, tn);
						},
						onMouseEnter: function () {
							vt(t);
						},
						onMouseLeave: function () {
							vt(null);
						},
					};
				});
				function Ut() {
					var n =
							arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						r = null;
					Vn && Ct && Ct[0] && Ct[1] && Z.isAfter(Ct[1], Ct[0]) && (r = Ct);
					var a = Y;
					if (Y && 'object' === (0, M.Z)(Y) && Y.defaultValue) {
						var o = Y.defaultValue;
						a = (0, C.Z)(
							(0, C.Z)({}, Y),
							{},
							{defaultValue: Ze(o, tn) || void 0}
						);
					}
					var i = null;
					return (
						j &&
							(i = function (e, n) {
								return j(e, n, {range: tn ? 'end' : 'start'});
							}),
						u.createElement(
							xe.Provider,
							{
								value: {
									inRange: !0,
									panelPosition: n,
									rangedValue: pt || Zn,
									hoverRangedValue: r,
								},
							},
							u.createElement(
								Ue,
								(0, l.Z)({}, e, t, {
									dateRender: i,
									showTime: a,
									mode: En[tn],
									generateConfig: Z,
									style: void 0,
									direction: Se,
									disabledDate: 0 === tn ? Mn : Rn,
									disabledTime: function (e) {
										return !!K && K(e, 0 === tn ? 'start' : 'end');
									},
									className: h()(
										(0, s.Z)(
											{},
											''.concat(c, '-panel-focused'),
											0 === tn ? !Ot : !Kt
										)
									),
									value: Ze(Zn, tn),
									locale: w,
									tabIndex: -1,
									onPanelChange: function (e, t) {
										0 === tn && Et(!0),
											1 === tn && Mt(!0),
											xn(we(En, t, tn), we(Zn, e, tn));
										var r = e;
										'right' === n && En[tn] === t && (r = fe(r, t, Z, -1)),
											hn(r, tn);
									},
									onOk: null,
									onSelect: void 0,
									onChange: void 0,
									defaultValue: Ze(Zn, 0 === tn ? 1 : 0),
								})
							)
						)
					);
				}
				var zt = 0,
					Qt = 0;
				tn &&
					Ae.current &&
					We.current &&
					Fe.current &&
					((zt = Ae.current.offsetWidth + We.current.offsetWidth),
					Fe.current.offsetWidth &&
						ze.current.offsetWidth &&
						zt >
							Fe.current.offsetWidth -
								ze.current.offsetWidth -
								('rtl' === Se || ze.current.offsetLeft > zt
									? 0
									: ze.current.offsetLeft) &&
						(Qt = zt));
				var _t,
					Gt,
					Xt = 'rtl' === Se ? {right: zt} : {left: zt},
					Jt = u.createElement(
						'div',
						{
							className: h()(
								''.concat(c, '-range-wrapper'),
								''.concat(c, '-').concat(R, '-range-wrapper')
							),
							style: {minWidth: An},
						},
						u.createElement('div', {
							ref: ze,
							className: ''.concat(c, '-range-arrow'),
							style: Xt,
						}),
						(function () {
							var e,
								n = Be(c, En[tn], te),
								t = qe({
									prefixCls: c,
									components: Me,
									needConfirmButton: Te,
									okDisabled: !Ze(Zn, tn) || (W && W(Zn[tn])),
									locale: w,
									rangeList: qt,
									onOk: function () {
										Ze(Zn, tn) && (Bn(Zn, tn), Ne && Ne(Zn));
									},
								});
							if ('time' === R || Y) e = Ut();
							else {
								var r = gn(tn),
									a = fe(r, R, Z),
									o = En[tn] === R,
									l = Ut(!!o && 'left', {
										pickerValue: r,
										onPickerValueChange: function (e) {
											hn(e, tn);
										},
									}),
									i = Ut('right', {
										pickerValue: a,
										onPickerValueChange: function (e) {
											hn(fe(e, R, Z, -1), tn);
										},
									});
								e =
									'rtl' === Se
										? u.createElement(u.Fragment, null, i, o && l)
										: u.createElement(u.Fragment, null, l, o && i);
							}
							var f = u.createElement(
								u.Fragment,
								null,
								u.createElement('div', {className: ''.concat(c, '-panels')}, e),
								(n || t) &&
									u.createElement(
										'div',
										{className: ''.concat(c, '-footer')},
										n,
										t
									)
							);
							return (
								B && (f = B(f)),
								u.createElement(
									'div',
									{
										className: ''.concat(c, '-panel-container'),
										style: {marginLeft: Qt},
										ref: Fe,
										onMouseDown: function (e) {
											e.preventDefault();
										},
									},
									f
								)
							);
						})()
					);
				G &&
					(_t = u.createElement(
						'span',
						{className: ''.concat(c, '-suffix')},
						G
					)),
					_ &&
						((Ze(dn, 0) && !un[0]) || (Ze(dn, 1) && !un[1])) &&
						(Gt = u.createElement(
							'span',
							{
								onMouseDown: function (e) {
									e.preventDefault(), e.stopPropagation();
								},
								onMouseUp: function (e) {
									e.preventDefault(), e.stopPropagation();
									var n = dn;
									un[0] || (n = we(n, null, 0)),
										un[1] || (n = we(n, null, 1)),
										Bn(n, null),
										Kn(!1, tn);
								},
								className: ''.concat(c, '-clear'),
							},
							J ||
								u.createElement('span', {className: ''.concat(c, '-clear-btn')})
						));
				var $t = {size: z(R, Qe[0], Z)},
					er = 0,
					nr = 0;
				Ae.current &&
					Ie.current &&
					We.current &&
					(0 === tn
						? (nr = Ae.current.offsetWidth)
						: ((er = zt), (nr = Ie.current.offsetWidth)));
				var tr = 'rtl' === Se ? {right: er} : {left: er};
				return u.createElement(
					S.Provider,
					{
						value: {
							operationRef: ln,
							hideHeader: 'time' === R,
							onDateMouseEnter: function (e) {
								kt(we(Zn, e, tn)), 0 === tn ? yt(e) : Pt(e);
							},
							onDateMouseLeave: function () {
								kt(we(Zn, null, tn)), 0 === tn ? Et() : Mt();
							},
							hideRanges: !0,
							onSelect: function (e, n) {
								var t = we(Zn, e, tn);
								'submit' === n || ('key' !== n && !Te)
									? (Bn(t, tn), 0 === tn ? Et() : Mt())
									: wn(t);
							},
							open: Vn,
						},
					},
					u.createElement(
						_e,
						{
							visible: Vn,
							popupElement: Jt,
							popupStyle: m,
							prefixCls: c,
							dropdownClassName: p,
							dropdownAlign: g,
							getPopupContainer: k,
							transitionName: v,
							range: !0,
							direction: Se,
						},
						u.createElement(
							'div',
							(0, l.Z)(
								{
									ref: He,
									className: h()(
										c,
										''.concat(c, '-range'),
										d,
										((n = {}),
										(0, s.Z)(n, ''.concat(c, '-disabled'), un[0] && un[1]),
										(0, s.Z)(n, ''.concat(c, '-focused'), 0 === tn ? Tt : Wt),
										(0, s.Z)(n, ''.concat(c, '-rtl'), 'rtl' === Se),
										n)
									),
									style: f,
									onClick: function (e) {
										De && De(e),
											Vn ||
												Ke.current.contains(e.target) ||
												je.current.contains(e.target) ||
												(un[0] ? un[1] || jn(1) : jn(0));
									},
									onMouseEnter: ye,
									onMouseLeave: Ee,
									onMouseDown: function (e) {
										he && he(e),
											!Vn ||
												(!Tt && !Wt) ||
												Ke.current.contains(e.target) ||
												je.current.contains(e.target) ||
												e.preventDefault();
									},
									onMouseUp: be,
								},
								ke(e)
							),
							u.createElement(
								'div',
								{
									className: h()(
										''.concat(c, '-input'),
										((t = {}),
										(0, s.Z)(t, ''.concat(c, '-input-active'), 0 === tn),
										(0, s.Z)(t, ''.concat(c, '-input-placeholder'), !!bt),
										t)
									),
									ref: Ae,
								},
								u.createElement(
									'input',
									(0, l.Z)(
										{
											id: i,
											disabled: un[0],
											readOnly: ee || 'function' == typeof Qe[0] || !Ot,
											value: bt || at,
											onChange: function (e) {
												ot(e.target.value);
											},
											autoFocus: y,
											placeholder: Ze(b, 0) || '',
											ref: Ke,
										},
										Vt,
										$t,
										{autoComplete: Le}
									)
								)
							),
							u.createElement(
								'div',
								{className: ''.concat(c, '-range-separator'), ref: We},
								T
							),
							u.createElement(
								'div',
								{
									className: h()(
										''.concat(c, '-input'),
										((r = {}),
										(0, s.Z)(r, ''.concat(c, '-input-active'), 1 === tn),
										(0, s.Z)(r, ''.concat(c, '-input-placeholder'), !!Nt),
										r)
									),
									ref: Ie,
								},
								u.createElement(
									'input',
									(0, l.Z)(
										{
											disabled: un[1],
											readOnly: ee || 'function' == typeof Qe[0] || !Kt,
											value: Nt || it,
											onChange: function (e) {
												ft(e.target.value);
											},
											placeholder: Ze(b, 1) || '',
											ref: je,
										},
										At,
										$t,
										{autoComplete: Le}
									)
								)
							),
							u.createElement('div', {
								className: ''.concat(c, '-active-bar'),
								style: (0, C.Z)(
									(0, C.Z)({}, tr),
									{},
									{width: nr, position: 'absolute'}
								),
							}),
							_t,
							Gt
						)
					)
				);
			}
			const un = (function (e) {
					(0, p.Z)(t, e);
					var n = (0, v.Z)(t);
					function t() {
						var e;
						(0, d.Z)(this, t);
						for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
							a[o] = arguments[o];
						return (
							((e = n.call.apply(n, [this].concat(a))).pickerRef =
								u.createRef()),
							(e.focus = function () {
								e.pickerRef.current && e.pickerRef.current.focus();
							}),
							(e.blur = function () {
								e.pickerRef.current && e.pickerRef.current.blur();
							}),
							e
						);
					}
					return (
						(0, m.Z)(t, [
							{
								key: 'render',
								value: function () {
									return u.createElement(
										ln,
										(0, l.Z)({}, this.props, {pickerRef: this.pickerRef})
									);
								},
							},
						]),
						t
					);
				})(u.Component),
				fn = rn;
			var sn = t(97870);
			function dn(e, n, t) {
				return void 0 !== t
					? t
					: 'year' === e && n.lang.yearPlaceholder
					? n.lang.yearPlaceholder
					: 'quarter' === e && n.lang.quarterPlaceholder
					? n.lang.quarterPlaceholder
					: 'month' === e && n.lang.monthPlaceholder
					? n.lang.monthPlaceholder
					: 'week' === e && n.lang.weekPlaceholder
					? n.lang.weekPlaceholder
					: 'time' === e && n.timePickerLocale.placeholder
					? n.timePickerLocale.placeholder
					: n.lang.placeholder;
			}
			function mn(e, n, t) {
				return void 0 !== t
					? t
					: 'year' === e && n.lang.yearPlaceholder
					? n.lang.rangeYearPlaceholder
					: 'quarter' === e && n.lang.quarterPlaceholder
					? n.lang.rangeQuarterPlaceholder
					: 'month' === e && n.lang.monthPlaceholder
					? n.lang.rangeMonthPlaceholder
					: 'week' === e && n.lang.weekPlaceholder
					? n.lang.rangeWeekPlaceholder
					: 'time' === e && n.timePickerLocale.placeholder
					? n.timePickerLocale.rangePlaceholder
					: n.lang.rangePlaceholder;
			}
			function pn(e, n) {
				var t = {adjustX: 1, adjustY: 1};
				switch (n) {
					case 'bottomLeft':
						return {points: ['tl', 'bl'], offset: [0, 4], overflow: t};
					case 'bottomRight':
						return {points: ['tr', 'br'], offset: [0, 4], overflow: t};
					case 'topLeft':
						return {points: ['bl', 'tl'], offset: [0, -4], overflow: t};
					case 'topRight':
						return {points: ['br', 'tr'], offset: [0, -4], overflow: t};
					default:
						return 'rtl' === e
							? {points: ['tr', 'br'], offset: [0, 4], overflow: t}
							: {points: ['tl', 'bl'], offset: [0, 4], overflow: t};
				}
			}
			var vn = t(21687),
				gn = t(65632),
				hn = t(42051),
				Cn = t(97647),
				kn = t(65223),
				Zn = t(9708);
			const wn = {
				icon: {
					tag: 'svg',
					attrs: {viewBox: '0 0 1024 1024', focusable: 'false'},
					children: [
						{
							tag: 'path',
							attrs: {
								d: 'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z',
							},
						},
					],
				},
				name: 'swap-right',
				theme: 'outlined',
			};
			var bn = function (e, n) {
				return u.createElement(
					Z.Z,
					(0, C.Z)((0, C.Z)({}, e), {}, {ref: n, icon: wn})
				);
			};
			bn.displayName = 'SwapRightOutlined';
			const yn = u.forwardRef(bn);
			var En = function (e, n) {
					var t = {};
					for (var r in e)
						Object.prototype.hasOwnProperty.call(e, r) &&
							n.indexOf(r) < 0 &&
							(t[r] = e[r]);
					if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
							n.indexOf(r[a]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
								(t[r[a]] = e[r[a]]);
					}
					return t;
				},
				Dn = t(93355),
				xn = {
					button: function (e) {
						return u.createElement(
							i.Z,
							(0, l.Z)({size: 'small', type: 'primary'}, e)
						);
					},
					rangeItem: function (e) {
						return u.createElement(f.Z, (0, l.Z)({color: 'blue'}, e));
					},
				};
			function Nn(e) {
				var n,
					t = e.format,
					r = e.picker,
					a = e.showHour,
					o = e.showMinute,
					c = e.showSecond,
					u = e.use12Hours,
					i = ((n = t), n ? (Array.isArray(n) ? n : [n]) : [])[0],
					f = (0, l.Z)({}, e);
				return (
					i &&
						'string' == typeof i &&
						(i.includes('s') || void 0 !== c || (f.showSecond = !1),
						i.includes('m') || void 0 !== o || (f.showMinute = !1),
						i.includes('H') ||
							i.includes('h') ||
							void 0 !== a ||
							(f.showHour = !1),
						(i.includes('a') || i.includes('A')) &&
							void 0 === u &&
							(f.use12Hours = !0)),
					'time' === r
						? f
						: ('function' == typeof i && delete f.format, {showTime: f})
				);
			}
			(0, Dn.b)('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
			const Pn =
				((Rn = (function (e) {
					function n(n, t) {
						var r = (function (r) {
							(0, p.Z)(o, r);
							var a = (0, v.Z)(o);
							function o(r) {
								var c;
								return (
									(0, d.Z)(this, o),
									((c = a.call(this, r)).pickerRef = u.createRef()),
									(c.focus = function () {
										c.pickerRef.current && c.pickerRef.current.focus();
									}),
									(c.blur = function () {
										c.pickerRef.current && c.pickerRef.current.blur();
									}),
									(c.renderFeedback = function (e) {
										return u.createElement(kn.NV.Consumer, null, function (n) {
											var t = n.hasFeedback,
												r = n.status,
												a = c.props.status,
												o = (0, Zn.Ff)(r, a);
											return t && (0, Zn.zl)(e, o);
										});
									}),
									(c.renderSuffix = function (e, n) {
										return u.createElement(
											u.Fragment,
											null,
											'time' === n
												? u.createElement(D, null)
												: u.createElement(b, null),
											c.renderFeedback(e)
										);
									}),
									(c.renderPicker = function (t) {
										var r = (0, l.Z)((0, l.Z)({}, t), c.props.locale),
											a = c.context,
											o = a.getPrefixCls,
											i = a.direction,
											f = a.getPopupContainer,
											d = c.props,
											m = d.prefixCls,
											p = d.getPopupContainer,
											v = d.className,
											g = d.size,
											C = d.bordered,
											k = void 0 === C || C,
											Z = d.placement,
											w = d.placeholder,
											b = d.status,
											y = (function (e, n) {
												var t = {};
												for (var r in e)
													Object.prototype.hasOwnProperty.call(e, r) &&
														n.indexOf(r) < 0 &&
														(t[r] = e[r]);
												if (
													null != e &&
													'function' == typeof Object.getOwnPropertySymbols
												) {
													var a = 0;
													for (
														r = Object.getOwnPropertySymbols(e);
														a < r.length;
														a++
													)
														n.indexOf(r[a]) < 0 &&
															Object.prototype.propertyIsEnumerable.call(
																e,
																r[a]
															) &&
															(t[r[a]] = e[r[a]]);
												}
												return t;
											})(d, [
												'prefixCls',
												'getPopupContainer',
												'className',
												'size',
												'bordered',
												'placement',
												'placeholder',
												'status',
											]),
											E = c.props,
											D = E.format,
											N = E.showTime,
											P = o('picker', m),
											M = {showToday: !0},
											R = {};
										n && (R.picker = n);
										var S = n || c.props.picker;
										R = (0, l.Z)(
											(0, l.Z)(
												(0, l.Z)({}, R),
												N ? Nn((0, l.Z)({format: D, picker: S}, N)) : {}
											),
											'time' === S
												? Nn(
														(0, l.Z)((0, l.Z)({format: D}, c.props), {
															picker: S,
														})
												  )
												: {}
										);
										var Y = o();
										return u.createElement(Cn.Z.Consumer, null, function (n) {
											var t = g || n;
											return u.createElement(
												kn.NV.Consumer,
												null,
												function (n) {
													var a,
														o = n.hasFeedback,
														d = n.status;
													return u.createElement(
														fn,
														(0, l.Z)(
															{
																ref: c.pickerRef,
																placeholder: dn(S, r, w),
																suffixIcon: c.renderSuffix(P, S),
																dropdownAlign: pn(i, Z),
																clearIcon: u.createElement(x.Z, null),
																prevIcon: u.createElement('span', {
																	className: ''.concat(P, '-prev-icon'),
																}),
																nextIcon: u.createElement('span', {
																	className: ''.concat(P, '-next-icon'),
																}),
																superPrevIcon: u.createElement('span', {
																	className: ''.concat(P, '-super-prev-icon'),
																}),
																superNextIcon: u.createElement('span', {
																	className: ''.concat(P, '-super-next-icon'),
																}),
																allowClear: !0,
																transitionName: ''.concat(Y, '-slide-up'),
															},
															M,
															y,
															R,
															{
																locale: r.lang,
																className: h()(
																	((a = {}),
																	(0, s.Z)(a, ''.concat(P, '-').concat(t), t),
																	(0, s.Z)(a, ''.concat(P, '-borderless'), !k),
																	a),
																	(0, Zn.Zu)(P, (0, Zn.Ff)(d, b), o),
																	v
																),
																prefixCls: P,
																getPopupContainer: p || f,
																generateConfig: e,
																components: xn,
																direction: i,
															}
														)
													);
												}
											);
										});
									}),
									(0, vn.Z)(
										'quarter' !== n,
										t,
										'DatePicker.'
											.concat(
												t,
												" is legacy usage. Please use DatePicker[picker='"
											)
											.concat(n, "'] directly.")
									),
									c
								);
							}
							return (
								(0, m.Z)(o, [
									{
										key: 'render',
										value: function () {
											return u.createElement(
												hn.Z,
												{componentName: 'DatePicker', defaultLocale: sn.Z},
												this.renderPicker
											);
										},
									},
								]),
								o
							);
						})(u.Component);
						return (r.contextType = gn.E_), t && (r.displayName = t), r;
					}
					return {
						DatePicker: n(),
						WeekPicker: n('week', 'WeekPicker'),
						MonthPicker: n('month', 'MonthPicker'),
						YearPicker: n('year', 'YearPicker'),
						TimePicker: n('time', 'TimePicker'),
						QuarterPicker: n('quarter', 'QuarterPicker'),
					};
				})((Mn = c))),
				(Sn = Rn.DatePicker),
				(Yn = Rn.WeekPicker),
				(Vn = Rn.MonthPicker),
				(Ln = Rn.YearPicker),
				(Tn = Rn.TimePicker),
				(On = Rn.QuarterPicker),
				(Hn = (function (e) {
					var n = (function (n) {
						(0, p.Z)(r, n);
						var t = (0, v.Z)(r);
						function r() {
							var n;
							return (
								(0, d.Z)(this, r),
								((n = t.apply(this, arguments)).pickerRef = u.createRef()),
								(n.focus = function () {
									n.pickerRef.current && n.pickerRef.current.focus();
								}),
								(n.blur = function () {
									n.pickerRef.current && n.pickerRef.current.blur();
								}),
								(n.renderFeedback = function (e) {
									return u.createElement(kn.NV.Consumer, null, function (t) {
										var r = t.hasFeedback,
											a = t.status,
											o = n.props.status,
											c = (0, Zn.Ff)(a, o);
										return r && (0, Zn.zl)(e, c);
									});
								}),
								(n.renderSuffix = function (e, t) {
									return u.createElement(
										u.Fragment,
										null,
										'time' === t
											? u.createElement(D, null)
											: u.createElement(b, null),
										n.renderFeedback(e)
									);
								}),
								(n.renderPicker = function (t) {
									var r = (0, l.Z)((0, l.Z)({}, t), n.props.locale),
										a = n.context,
										o = a.getPrefixCls,
										c = a.direction,
										i = a.getPopupContainer,
										f = n.props,
										d = f.prefixCls,
										m = f.getPopupContainer,
										p = f.className,
										v = f.placement,
										g = f.size,
										C = f.bordered,
										k = void 0 === C || C,
										Z = f.placeholder,
										w = f.status,
										b = En(f, [
											'prefixCls',
											'getPopupContainer',
											'className',
											'placement',
											'size',
											'bordered',
											'placeholder',
											'status',
										]),
										y = n.props,
										E = y.format,
										D = y.showTime,
										N = y.picker,
										P = o('picker', d),
										M = {};
									M = (0, l.Z)(
										(0, l.Z)(
											(0, l.Z)({}, M),
											D ? Nn((0, l.Z)({format: E, picker: N}, D)) : {}
										),
										'time' === N
											? Nn(
													(0, l.Z)((0, l.Z)({format: E}, n.props), {picker: N})
											  )
											: {}
									);
									var R = o();
									return u.createElement(Cn.Z.Consumer, null, function (t) {
										var a = g || t;
										return u.createElement(kn.NV.Consumer, null, function (t) {
											var o,
												f = t.hasFeedback,
												d = t.status;
											return u.createElement(
												un,
												(0, l.Z)(
													{
														separator: u.createElement(
															'span',
															{
																'aria-label': 'to',
																className: ''.concat(P, '-separator'),
															},
															u.createElement(yn, null)
														),
														ref: n.pickerRef,
														dropdownAlign: pn(c, v),
														placeholder: mn(N, r, Z),
														suffixIcon: n.renderSuffix(P, N),
														clearIcon: u.createElement(x.Z, null),
														prevIcon: u.createElement('span', {
															className: ''.concat(P, '-prev-icon'),
														}),
														nextIcon: u.createElement('span', {
															className: ''.concat(P, '-next-icon'),
														}),
														superPrevIcon: u.createElement('span', {
															className: ''.concat(P, '-super-prev-icon'),
														}),
														superNextIcon: u.createElement('span', {
															className: ''.concat(P, '-super-next-icon'),
														}),
														allowClear: !0,
														transitionName: ''.concat(R, '-slide-up'),
													},
													b,
													M,
													{
														className: h()(
															((o = {}),
															(0, s.Z)(o, ''.concat(P, '-').concat(a), a),
															(0, s.Z)(o, ''.concat(P, '-borderless'), !k),
															o),
															(0, Zn.Zu)(P, (0, Zn.Ff)(d, w), f),
															p
														),
														locale: r.lang,
														prefixCls: P,
														getPopupContainer: m || i,
														generateConfig: e,
														components: xn,
														direction: c,
													}
												)
											);
										});
									});
								}),
								n
							);
						}
						return (
							(0, m.Z)(r, [
								{
									key: 'render',
									value: function () {
										return u.createElement(
											hn.Z,
											{componentName: 'DatePicker', defaultLocale: sn.Z},
											this.renderPicker
										);
									},
								},
							]),
							r
						);
					})(u.Component);
					return (n.contextType = gn.E_), n;
				})(Mn)),
				((Fn = Sn).WeekPicker = Yn),
				(Fn.MonthPicker = Vn),
				(Fn.YearPicker = Ln),
				(Fn.RangePicker = Hn),
				(Fn.TimePicker = Tn),
				(Fn.QuarterPicker = On),
				Fn);
			var Mn, Rn, Sn, Yn, Vn, Ln, Tn, On, Hn, Fn;
		},
	},
]);
