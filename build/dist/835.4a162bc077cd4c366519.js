(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[835],
	{
		78840: function (t, e, i) {
			var s,
				n,
				o,
				r = i(25108);
			(n = 'undefined' != typeof window ? window : this),
				(o = function (t) {
					var e,
						i,
						s,
						n,
						o,
						a,
						h,
						l,
						c =
							((i = (e = void 0 === t ? window : t).document),
							(s = (e.navigator && e.navigator.userAgent) || ''),
							(n =
								i &&
								i.createElementNS &&
								!!i.createElementNS('http://www.w3.org/2000/svg', 'svg')
									.createSVGRect),
							(o = /(edge|msie|trident)/i.test(s) && !e.opera),
							(a = -1 !== s.indexOf('Firefox')),
							(h = -1 !== s.indexOf('Chrome')),
							(l = a && 4 > parseInt(s.split('Firefox/')[1], 10)),
							e.Highcharts
								? e.Highcharts.error(16, !0)
								: {
										product: 'Highcharts',
										version: '6.2.0',
										deg2rad: (2 * Math.PI) / 360,
										doc: i,
										hasBidiBug: l,
										hasTouch: i && void 0 !== i.documentElement.ontouchstart,
										isMS: o,
										isWebKit: -1 !== s.indexOf('AppleWebKit'),
										isFirefox: a,
										isChrome: h,
										isSafari: !h && -1 !== s.indexOf('Safari'),
										isTouchDevice: /(Mobile|Android|Windows Phone)/.test(s),
										SVG_NS: 'http://www.w3.org/2000/svg',
										chartCount: 0,
										seriesTypes: {},
										symbolSizes: {},
										svg: n,
										win: e,
										marginNames: [
											'plotTop',
											'marginRight',
											'marginBottom',
											'plotLeft',
										],
										noop: function () {},
										charts: [],
								  });
					!(function (t) {
						t.timers = [];
						var e = t.charts,
							i = t.doc,
							s = t.win;
						(t.error = function (e, i) {
							if (
								((e = t.isNumber(e)
									? 'Highcharts error #' +
									  e +
									  ': www.highcharts.com/errors/' +
									  e
									: e),
								i)
							)
								throw Error(e);
							s.console && r.log(e);
						}),
							(t.Fx = function (t, e, i) {
								(this.options = e), (this.elem = t), (this.prop = i);
							}),
							(t.Fx.prototype = {
								dSetter: function () {
									var t,
										e = this.paths[0],
										i = this.paths[1],
										s = [],
										n = this.now,
										o = e.length;
									if (1 === n) s = this.toD;
									else if (o === i.length && 1 > n)
										for (; o--; )
											(t = parseFloat(e[o])),
												(s[o] = isNaN(t) ? i[o] : n * parseFloat(i[o] - t) + t);
									else s = i;
									this.elem.attr('d', s, null, !0);
								},
								update: function () {
									var t = this.elem,
										e = this.prop,
										i = this.now,
										s = this.options.step;
									this[e + 'Setter']
										? this[e + 'Setter']()
										: t.attr
										? t.element && t.attr(e, i, null, !0)
										: (t.style[e] = i + this.unit),
										s && s.call(t, i, this);
								},
								run: function (e, i, n) {
									var o = this,
										r = o.options,
										a = function (t) {
											return !a.stopped && o.step(t);
										},
										h =
											s.requestAnimationFrame ||
											function (t) {
												setTimeout(t, 13);
											},
										l = function () {
											for (var e = 0; e < t.timers.length; e++)
												t.timers[e]() || t.timers.splice(e--, 1);
											t.timers.length && h(l);
										};
									e !== i || this.elem['forceAnimate:' + this.prop]
										? ((this.startTime = +new Date()),
										  (this.start = e),
										  (this.end = i),
										  (this.unit = n),
										  (this.now = this.start),
										  (this.pos = 0),
										  (a.elem = this.elem),
										  (a.prop = this.prop),
										  a() && 1 === t.timers.push(a) && h(l))
										: (delete r.curAnim[this.prop],
										  r.complete &&
												0 === t.keys(r.curAnim).length &&
												r.complete.call(this.elem));
								},
								step: function (e) {
									var i,
										s = +new Date(),
										n = this.options,
										o = this.elem,
										r = n.complete,
										a = n.duration,
										h = n.curAnim;
									return (
										o.attr && !o.element
											? (e = !1)
											: e || s >= a + this.startTime
											? ((this.now = this.end),
											  (this.pos = 1),
											  this.update(),
											  (i = h[this.prop] = !0),
											  t.objectEach(h, function (t) {
													!0 !== t && (i = !1);
											  }),
											  i && r && r.call(o),
											  (e = !1))
											: ((this.pos = n.easing((s - this.startTime) / a)),
											  (this.now =
													this.start + (this.end - this.start) * this.pos),
											  this.update(),
											  (e = !0)),
										e
									);
								},
								initPath: function (e, i, s) {
									function n(t) {
										var e, i;
										for (c = t.length; c--; )
											(e = 'M' === t[c] || 'L' === t[c]),
												(i = /[a-zA-Z]/.test(t[c + 3])),
												e &&
													i &&
													t.splice(
														c + 1,
														0,
														t[c + 1],
														t[c + 2],
														t[c + 1],
														t[c + 2]
													);
									}
									function o(t, e) {
										for (; t.length < h; ) {
											t[0] = e[h - t.length];
											var i = t.slice(0, f);
											[].splice.apply(t, [0, 0].concat(i)),
												m &&
													((i = t.slice(t.length - f)),
													[].splice.apply(t, [t.length, 0].concat(i)),
													c--);
										}
										t[0] = 'M';
									}
									function r(t, e) {
										for (var i = (h - t.length) / f; 0 < i && i--; )
											((l = t.slice().splice(t.length / x - f, f * x))[0] =
												e[h - f - i * f]),
												u && ((l[f - 6] = l[f - 2]), (l[f - 5] = l[f - 1])),
												[].splice.apply(t, [t.length / x, 0].concat(l)),
												m && i--;
									}
									i = i || '';
									var a,
										h,
										l,
										c,
										d = e.startX,
										p = e.endX,
										u = -1 < i.indexOf('C'),
										f = u ? 7 : 3;
									(i = i.split(' ')), (s = s.slice());
									var g,
										m = e.isArea,
										x = m ? 2 : 1;
									if ((u && (n(i), n(s)), d && p)) {
										for (c = 0; c < d.length; c++) {
											if (d[c] === p[0]) {
												a = c;
												break;
											}
											if (d[0] === p[p.length - d.length + c]) {
												(a = c), (g = !0);
												break;
											}
										}
										void 0 === a && (i = []);
									}
									return (
										i.length &&
											t.isNumber(a) &&
											((h = s.length + a * x * f),
											g ? (o(i, s), r(s, i)) : (o(s, i), r(i, s))),
										[i, s]
									);
								},
								fillSetter: function () {
									t.Fx.prototype.strokeSetter.apply(this, arguments);
								},
								strokeSetter: function () {
									this.elem.attr(
										this.prop,
										t.color(this.start).tweenTo(t.color(this.end), this.pos),
										null,
										!0
									);
								},
							}),
							(t.merge = function () {
								var e,
									i,
									s = arguments,
									n = {},
									o = function (e, i) {
										return (
											'object' != typeof e && (e = {}),
											t.objectEach(i, function (s, n) {
												!t.isObject(s, !0) || t.isClass(s) || t.isDOMElement(s)
													? (e[n] = i[n])
													: (e[n] = o(e[n] || {}, s));
											}),
											e
										);
									};
								for (
									!0 === s[0] &&
										((n = s[1]), (s = Array.prototype.slice.call(s, 2))),
										i = s.length,
										e = 0;
									e < i;
									e++
								)
									n = o(n, s[e]);
								return n;
							}),
							(t.pInt = function (t, e) {
								return parseInt(t, e || 10);
							}),
							(t.isString = function (t) {
								return 'string' == typeof t;
							}),
							(t.isArray = function (t) {
								return (
									'[object Array]' ===
										(t = Object.prototype.toString.call(t)) ||
									'[object Array Iterator]' === t
								);
							}),
							(t.isObject = function (e, i) {
								return !(!e || 'object' != typeof e || (i && t.isArray(e)));
							}),
							(t.isDOMElement = function (e) {
								return t.isObject(e) && 'number' == typeof e.nodeType;
							}),
							(t.isClass = function (e) {
								var i = e && e.constructor;
								return !(
									!t.isObject(e, !0) ||
									t.isDOMElement(e) ||
									!i ||
									!i.name ||
									'Object' === i.name
								);
							}),
							(t.isNumber = function (t) {
								return (
									'number' == typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t
								);
							}),
							(t.erase = function (t, e) {
								for (var i = t.length; i--; )
									if (t[i] === e) {
										t.splice(i, 1);
										break;
									}
							}),
							(t.defined = function (t) {
								return null != t;
							}),
							(t.attr = function (e, i, s) {
								var n;
								return (
									t.isString(i)
										? t.defined(s)
											? e.setAttribute(i, s)
											: e &&
											  e.getAttribute &&
											  ((n = e.getAttribute(i)) ||
													'class' !== i ||
													(n = e.getAttribute(i + 'Name')))
										: t.defined(i) &&
										  t.isObject(i) &&
										  t.objectEach(i, function (t, i) {
												e.setAttribute(i, t);
										  }),
									n
								);
							}),
							(t.splat = function (e) {
								return t.isArray(e) ? e : [e];
							}),
							(t.syncTimeout = function (t, e, i) {
								if (e) return setTimeout(t, e, i);
								t.call(0, i);
							}),
							(t.clearTimeout = function (e) {
								t.defined(e) && clearTimeout(e);
							}),
							(t.extend = function (t, e) {
								var i;
								for (i in (t || (t = {}), e)) t[i] = e[i];
								return t;
							}),
							(t.pick = function () {
								var t,
									e,
									i = arguments,
									s = i.length;
								for (t = 0; t < s; t++) if (null != (e = i[t])) return e;
							}),
							(t.css = function (e, i) {
								t.isMS &&
									!t.svg &&
									i &&
									void 0 !== i.opacity &&
									(i.filter = 'alpha(opacity=' + 100 * i.opacity + ')'),
									t.extend(e.style, i);
							}),
							(t.createElement = function (e, s, n, o, r) {
								e = i.createElement(e);
								var a = t.css;
								return (
									s && t.extend(e, s),
									r && a(e, {padding: 0, border: 'none', margin: 0}),
									n && a(e, n),
									o && o.appendChild(e),
									e
								);
							}),
							(t.extendClass = function (e, i) {
								var s = function () {};
								return (s.prototype = new e()), t.extend(s.prototype, i), s;
							}),
							(t.pad = function (t, e, i) {
								return (
									Array((e || 2) + 1 - String(t).replace('-', '').length).join(
										i || 0
									) + t
								);
							}),
							(t.relativeLength = function (t, e, i) {
								return /%$/.test(t)
									? (e * parseFloat(t)) / 100 + (i || 0)
									: parseFloat(t);
							}),
							(t.wrap = function (t, e, i) {
								var s = t[e];
								t[e] = function () {
									var t = Array.prototype.slice.call(arguments),
										e = arguments,
										n = this;
									return (
										(n.proceed = function () {
											s.apply(n, arguments.length ? arguments : e);
										}),
										t.unshift(s),
										(t = i.apply(this, t)),
										(n.proceed = null),
										t
									);
								};
							}),
							(t.datePropsToTimestamps = function (e) {
								t.objectEach(e, function (i, s) {
									t.isObject(i) && 'function' == typeof i.getTime
										? (e[s] = i.getTime())
										: (t.isObject(i) || t.isArray(i)) &&
										  t.datePropsToTimestamps(i);
								});
							}),
							(t.formatSingle = function (e, i, s) {
								var n = t.defaultOptions.lang;
								return (
									/f$/.test(e)
										? ((s = (s = e.match(/\.([0-9])/)) ? s[1] : -1),
										  null !== i &&
												(i = t.numberFormat(
													i,
													s,
													n.decimalPoint,
													-1 < e.indexOf(',') ? n.thousandsSep : ''
												)))
										: (i = (s || t.time).dateFormat(e, i)),
									i
								);
							}),
							(t.format = function (e, i, s) {
								for (
									var n, o, r, a, h, l = '{', c = !1, d = [];
									e && -1 !== (l = e.indexOf(l));

								) {
									if (((n = e.slice(0, l)), c)) {
										for (
											a = (o = (n = n.split(':')).shift().split('.')).length,
												h = i,
												r = 0;
											r < a;
											r++
										)
											h && (h = h[o[r]]);
										n.length && (h = t.formatSingle(n.join(':'), h, s)),
											d.push(h);
									} else d.push(n);
									(e = e.slice(l + 1)), (l = (c = !c) ? '}' : '{');
								}
								return d.push(e), d.join('');
							}),
							(t.getMagnitude = function (t) {
								return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
							}),
							(t.normalizeTickInterval = function (e, i, s, n, o) {
								var r,
									a = e;
								for (
									r = e / (s = t.pick(s, 1)),
										i ||
											((i = o
												? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
												: [1, 2, 2.5, 5, 10]),
											!1 === n &&
												(1 === s
													? (i = t.grep(i, function (t) {
															return 0 == t % 1;
													  }))
													: 0.1 >= s && (i = [1 / s]))),
										n = 0;
									n < i.length &&
									((a = i[n]),
									!(
										(o && a * s >= e) ||
										(!o && r <= (i[n] + (i[n + 1] || i[n])) / 2)
									));
									n++
								);
								return t.correctFloat(
									a * s,
									-Math.round(Math.log(0.001) / Math.LN10)
								);
							}),
							(t.stableSort = function (t, e) {
								var i,
									s,
									n = t.length;
								for (s = 0; s < n; s++) t[s].safeI = s;
								for (
									t.sort(function (t, s) {
										return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i;
									}),
										s = 0;
									s < n;
									s++
								)
									delete t[s].safeI;
							}),
							(t.arrayMin = function (t) {
								for (var e = t.length, i = t[0]; e--; ) t[e] < i && (i = t[e]);
								return i;
							}),
							(t.arrayMax = function (t) {
								for (var e = t.length, i = t[0]; e--; ) t[e] > i && (i = t[e]);
								return i;
							}),
							(t.destroyObjectProperties = function (e, i) {
								t.objectEach(e, function (t, s) {
									t && t !== i && t.destroy && t.destroy(), delete e[s];
								});
							}),
							(t.discardElement = function (e) {
								var i = t.garbageBin;
								i || (i = t.createElement('div')),
									e && i.appendChild(e),
									(i.innerHTML = '');
							}),
							(t.correctFloat = function (t, e) {
								return parseFloat(t.toPrecision(e || 14));
							}),
							(t.setAnimation = function (e, i) {
								i.renderer.globalAnimation = t.pick(
									e,
									i.options.chart.animation,
									!0
								);
							}),
							(t.animObject = function (e) {
								return t.isObject(e) ? t.merge(e) : {duration: e ? 500 : 0};
							}),
							(t.timeUnits = {
								millisecond: 1,
								second: 1e3,
								minute: 6e4,
								hour: 36e5,
								day: 864e5,
								week: 6048e5,
								month: 24192e5,
								year: 314496e5,
							}),
							(t.numberFormat = function (e, i, s, n) {
								(e = +e || 0), (i = +i);
								var o,
									r,
									a = t.defaultOptions.lang,
									h = (e.toString().split('.')[1] || '').split('e')[0].length,
									l = e.toString().split('e');
								return (
									-1 === i
										? (i = Math.min(h, 20))
										: t.isNumber(i)
										? i &&
										  l[1] &&
										  0 > l[1] &&
										  (0 <= (o = i + +l[1])
												? ((l[0] = (+l[0]).toExponential(o).split('e')[0]),
												  (i = o))
												: ((l[0] = l[0].split('.')[0] || 0),
												  (e =
														20 > i
															? (l[0] * Math.pow(10, l[1])).toFixed(i)
															: 0),
												  (l[1] = 0)))
										: (i = 2),
									(r = (
										Math.abs(l[1] ? l[0] : e) +
										Math.pow(10, -Math.max(i, h) - 1)
									).toFixed(i)),
									(o = 3 < (h = String(t.pInt(r))).length ? h.length % 3 : 0),
									(s = t.pick(s, a.decimalPoint)),
									(n = t.pick(n, a.thousandsSep)),
									(e = (0 > e ? '-' : '') + (o ? h.substr(0, o) + n : '')),
									(e += h.substr(o).replace(/(\d{3})(?=\d)/g, '$1' + n)),
									i && (e += s + r.slice(-i)),
									l[1] && 0 != +e && (e += 'e' + l[1]),
									e
								);
							}),
							(Math.easeInOutSine = function (t) {
								return -0.5 * (Math.cos(Math.PI * t) - 1);
							}),
							(t.getStyle = function (e, i, n) {
								return 'width' === i
									? Math.max(
											0,
											Math.min(e.offsetWidth, e.scrollWidth) -
												t.getStyle(e, 'padding-left') -
												t.getStyle(e, 'padding-right')
									  )
									: 'height' === i
									? Math.max(
											0,
											Math.min(e.offsetHeight, e.scrollHeight) -
												t.getStyle(e, 'padding-top') -
												t.getStyle(e, 'padding-bottom')
									  )
									: (s.getComputedStyle || t.error(27, !0),
									  (e = s.getComputedStyle(e, void 0)) &&
											((e = e.getPropertyValue(i)),
											t.pick(n, 'opacity' !== i) && (e = t.pInt(e))),
									  e);
							}),
							(t.inArray = function (e, i, s) {
								return (t.indexOfPolyfill || Array.prototype.indexOf).call(
									i,
									e,
									s
								);
							}),
							(t.grep = function (e, i) {
								return (t.filterPolyfill || Array.prototype.filter).call(e, i);
							}),
							(t.find = Array.prototype.find
								? function (t, e) {
										return t.find(e);
								  }
								: function (t, e) {
										var i,
											s = t.length;
										for (i = 0; i < s; i++) if (e(t[i], i)) return t[i];
								  }),
							(t.some = function (e, i, s) {
								return (t.somePolyfill || Array.prototype.some).call(e, i, s);
							}),
							(t.map = function (t, e) {
								for (var i = [], s = 0, n = t.length; s < n; s++)
									i[s] = e.call(t[s], t[s], s, t);
								return i;
							}),
							(t.keys = function (e) {
								return (t.keysPolyfill || Object.keys).call(void 0, e);
							}),
							(t.reduce = function (e, i, s) {
								return (t.reducePolyfill || Array.prototype.reduce).apply(
									e,
									2 < arguments.length ? [i, s] : [i]
								);
							}),
							(t.offset = function (t) {
								var e = i.documentElement;
								return {
									top:
										(t =
											t.parentElement || t.parentNode
												? t.getBoundingClientRect()
												: {top: 0, left: 0}).top +
										(s.pageYOffset || e.scrollTop) -
										(e.clientTop || 0),
									left:
										t.left +
										(s.pageXOffset || e.scrollLeft) -
										(e.clientLeft || 0),
								};
							}),
							(t.stop = function (e, i) {
								for (var s = t.timers.length; s--; )
									t.timers[s].elem !== e ||
										(i && i !== t.timers[s].prop) ||
										(t.timers[s].stopped = !0);
							}),
							(t.each = function (e, i, s) {
								return (t.forEachPolyfill || Array.prototype.forEach).call(
									e,
									i,
									s
								);
							}),
							(t.objectEach = function (t, e, i) {
								for (var s in t)
									t.hasOwnProperty(s) && e.call(i || t[s], t[s], s, t);
							}),
							(t.addEvent = function (e, i, s, n) {
								var o,
									r = e.addEventListener || t.addEventListenerPolyfill;
								return (
									(o =
										'function' == typeof e && e.prototype
											? (e.prototype.protoEvents =
													e.prototype.protoEvents || {})
											: (e.hcEvents = e.hcEvents || {})),
									t.Point &&
										e instanceof t.Point &&
										e.series &&
										e.series.chart &&
										(e.series.chart.runTrackerClick = !0),
									r && r.call(e, i, s, !1),
									o[i] || (o[i] = []),
									o[i].push(s),
									n &&
										t.isNumber(n.order) &&
										((s.order = n.order),
										o[i].sort(function (t, e) {
											return t.order - e.order;
										})),
									function () {
										t.removeEvent(e, i, s);
									}
								);
							}),
							(t.removeEvent = function (e, i, s) {
								function n(i, s) {
									var n =
										e.removeEventListener || t.removeEventListenerPolyfill;
									n && n.call(e, i, s, !1);
								}
								function o(s) {
									var o, r;
									e.nodeName &&
										(i ? ((o = {})[i] = !0) : (o = s),
										t.objectEach(o, function (t, e) {
											if (s[e]) for (r = s[e].length; r--; ) n(e, s[e][r]);
										}));
								}
								var r, a;
								t.each(['protoEvents', 'hcEvents'], function (h) {
									var l = e[h];
									l &&
										(i
											? ((r = l[i] || []),
											  s
													? (-1 < (a = t.inArray(s, r)) &&
															(r.splice(a, 1), (l[i] = r)),
													  n(i, s))
													: (o(l), (l[i] = [])))
											: (o(l), (e[h] = {})));
								});
							}),
							(t.fireEvent = function (e, s, n, o) {
								var r, a, h, l, c;
								(n = n || {}),
									i.createEvent && (e.dispatchEvent || e.fireEvent)
										? ((r = i.createEvent('Events')).initEvent(s, !0, !0),
										  t.extend(r, n),
										  e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent(s, r))
										: t.each(['protoEvents', 'hcEvents'], function (i) {
												if (e[i])
													for (
														a = e[i][s] || [],
															h = a.length,
															n.target ||
																t.extend(n, {
																	preventDefault: function () {
																		n.defaultPrevented = !0;
																	},
																	target: e,
																	type: s,
																}),
															l = 0;
														l < h;
														l++
													)
														(c = a[l]) &&
															!1 === c.call(e, n) &&
															n.preventDefault();
										  }),
									o && !n.defaultPrevented && o.call(e, n);
							}),
							(t.animate = function (e, i, s) {
								var n,
									o,
									r,
									a,
									h = '';
								t.isObject(s) ||
									(s = {
										duration: (a = arguments)[2],
										easing: a[3],
										complete: a[4],
									}),
									t.isNumber(s.duration) || (s.duration = 400),
									(s.easing =
										'function' == typeof s.easing
											? s.easing
											: Math[s.easing] || Math.easeInOutSine),
									(s.curAnim = t.merge(i)),
									t.objectEach(i, function (a, l) {
										t.stop(e, l),
											(r = new t.Fx(e, s, l)),
											(o = null),
											'd' === l
												? ((r.paths = r.initPath(e, e.d, i.d)),
												  (r.toD = i.d),
												  (n = 0),
												  (o = 1))
												: e.attr
												? (n = e.attr(l))
												: ((n = parseFloat(t.getStyle(e, l)) || 0),
												  'opacity' !== l && (h = 'px')),
											o || (o = a),
											o &&
												o.match &&
												o.match('px') &&
												(o = o.replace(/px/g, '')),
											r.run(n, o, h);
									});
							}),
							(t.seriesType = function (e, i, s, n, o) {
								var r = t.getOptions(),
									a = t.seriesTypes;
								return (
									(r.plotOptions[e] = t.merge(r.plotOptions[i], s)),
									(a[e] = t.extendClass(a[i] || function () {}, n)),
									(a[e].prototype.type = e),
									o && (a[e].prototype.pointClass = t.extendClass(t.Point, o)),
									a[e]
								);
							}),
							(t.uniqueKey = (function () {
								var t = Math.random().toString(36).substring(2, 9),
									e = 0;
								return function () {
									return 'highcharts-' + t + '-' + e++;
								};
							})()),
							s.jQuery &&
								(s.jQuery.fn.highcharts = function () {
									var i = [].slice.call(arguments);
									if (this[0])
										return i[0]
											? (new t[t.isString(i[0]) ? i.shift() : 'Chart'](
													this[0],
													i[0],
													i[1]
											  ),
											  this)
											: e[t.attr(this[0], 'data-highcharts-chart')];
								});
					})(c),
						(function (t) {
							var e = t.each,
								i = t.isNumber,
								s = t.map,
								n = t.merge,
								o = t.pInt;
							(t.Color = function (e) {
								if (!(this instanceof t.Color)) return new t.Color(e);
								this.init(e);
							}),
								(t.Color.prototype = {
									parsers: [
										{
											regex:
												/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
											parse: function (t) {
												return [
													o(t[1]),
													o(t[2]),
													o(t[3]),
													parseFloat(t[4], 10),
												];
											},
										},
										{
											regex:
												/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
											parse: function (t) {
												return [o(t[1]), o(t[2]), o(t[3]), 1];
											},
										},
									],
									names: {white: '#ffffff', black: '#000000'},
									init: function (e) {
										var i, n, o, r;
										if (
											(this.input = e =
												this.names[e && e.toLowerCase ? e.toLowerCase() : ''] ||
												e) &&
											e.stops
										)
											this.stops = s(e.stops, function (e) {
												return new t.Color(e[1]);
											});
										else if (
											(e &&
												e.charAt &&
												'#' === e.charAt() &&
												((i = e.length),
												(e = parseInt(e.substr(1), 16)),
												7 === i
													? (n = [
															(16711680 & e) >> 16,
															(65280 & e) >> 8,
															255 & e,
															1,
													  ])
													: 4 === i &&
													  (n = [
															((3840 & e) >> 4) | ((3840 & e) >> 8),
															((240 & e) >> 4) | (240 & e),
															((15 & e) << 4) | (15 & e),
															1,
													  ])),
											!n)
										)
											for (o = this.parsers.length; o-- && !n; )
												(i = (r = this.parsers[o]).regex.exec(e)) &&
													(n = r.parse(i));
										this.rgba = n || [];
									},
									get: function (t) {
										var s,
											o = this.input,
											r = this.rgba;
										return (
											this.stops
												? (((s = n(o)).stops = [].concat(s.stops)),
												  e(this.stops, function (e, i) {
														s.stops[i] = [s.stops[i][0], e.get(t)];
												  }))
												: (s =
														r && i(r[0])
															? 'rgb' === t || (!t && 1 === r[3])
																? 'rgb(' + r[0] + ',' + r[1] + ',' + r[2] + ')'
																: 'a' === t
																? r[3]
																: 'rgba(' + r.join(',') + ')'
															: o),
											s
										);
									},
									brighten: function (t) {
										var s,
											n = this.rgba;
										if (this.stops)
											e(this.stops, function (e) {
												e.brighten(t);
											});
										else if (i(t) && 0 !== t)
											for (s = 0; 3 > s; s++)
												(n[s] += o(255 * t)),
													0 > n[s] && (n[s] = 0),
													255 < n[s] && (n[s] = 255);
										return this;
									},
									setOpacity: function (t) {
										return (this.rgba[3] = t), this;
									},
									tweenTo: function (t, e) {
										var i = this.rgba,
											s = t.rgba;
										return s.length && i && i.length
											? ((t = 1 !== s[3] || 1 !== i[3]) ? 'rgba(' : 'rgb(') +
													Math.round(s[0] + (i[0] - s[0]) * (1 - e)) +
													',' +
													Math.round(s[1] + (i[1] - s[1]) * (1 - e)) +
													',' +
													Math.round(s[2] + (i[2] - s[2]) * (1 - e)) +
													(t ? ',' + (s[3] + (i[3] - s[3]) * (1 - e)) : '') +
													')'
											: t.input || 'none';
									},
								}),
								(t.color = function (e) {
									return new t.Color(e);
								});
						})(c),
						(function (t) {
							var e,
								i,
								s = t.addEvent,
								n = t.animate,
								o = t.attr,
								r = t.charts,
								a = t.color,
								h = t.css,
								l = t.createElement,
								c = t.defined,
								d = t.deg2rad,
								p = t.destroyObjectProperties,
								u = t.doc,
								f = t.each,
								g = t.extend,
								m = t.erase,
								x = t.grep,
								v = t.hasTouch,
								y = t.inArray,
								b = t.isArray,
								k = t.isFirefox,
								w = t.isMS,
								M = t.isObject,
								S = t.isString,
								T = t.isWebKit,
								A = t.merge,
								L = t.noop,
								P = t.objectEach,
								C = t.pick,
								O = t.pInt,
								I = t.removeEvent,
								D = t.stop,
								z = t.svg,
								E = t.SVG_NS,
								B = t.symbolSizes,
								R = t.win;
							(e = t.SVGElement =
								function () {
									return this;
								}),
								g(e.prototype, {
									opacity: 1,
									SVG_NS: E,
									textProps:
										'direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor'.split(
											' '
										),
									init: function (t, e) {
										(this.element =
											'span' === e ? l(e) : u.createElementNS(this.SVG_NS, e)),
											(this.renderer = t);
									},
									animate: function (e, i, s) {
										return (
											0 !==
											(i = t.animObject(
												C(i, this.renderer.globalAnimation, !0)
											)).duration
												? (s && (i.complete = s), n(this, e, i))
												: (this.attr(e, null, s), i.step && i.step.call(this)),
											this
										);
									},
									complexColor: function (e, i, s) {
										var n,
											o,
											r,
											a,
											h,
											l,
											d,
											p,
											u,
											g,
											m,
											x,
											v = this.renderer,
											y = [];
										t.fireEvent(
											this.renderer,
											'complexColor',
											{args: arguments},
											function () {
												e.radialGradient
													? (o = 'radialGradient')
													: e.linearGradient && (o = 'linearGradient'),
													o &&
														((r = e[o]),
														(h = v.gradients),
														(d = e.stops),
														(g = s.radialReference),
														b(r) &&
															(e[o] = r =
																{
																	x1: r[0],
																	y1: r[1],
																	x2: r[2],
																	y2: r[3],
																	gradientUnits: 'userSpaceOnUse',
																}),
														'radialGradient' === o &&
															g &&
															!c(r.gradientUnits) &&
															((a = r),
															(r = A(r, v.getRadialAttr(g, a), {
																gradientUnits: 'userSpaceOnUse',
															}))),
														P(r, function (t, e) {
															'id' !== e && y.push(e, t);
														}),
														P(d, function (t) {
															y.push(t);
														}),
														(y = y.join(',')),
														h[y]
															? (m = h[y].attr('id'))
															: ((r.id = m = t.uniqueKey()),
															  (h[y] = l =
																	v.createElement(o).attr(r).add(v.defs)),
															  (l.radAttr = a),
															  (l.stops = []),
															  f(d, function (e) {
																	0 === e[1].indexOf('rgba')
																		? ((n = t.color(e[1])),
																		  (p = n.get('rgb')),
																		  (u = n.get('a')))
																		: ((p = e[1]), (u = 1)),
																		(e = v
																			.createElement('stop')
																			.attr({
																				offset: e[0],
																				'stop-color': p,
																				'stop-opacity': u,
																			})
																			.add(l)),
																		l.stops.push(e);
															  })),
														(x = 'url(' + v.url + '#' + m + ')'),
														s.setAttribute(i, x),
														(s.gradient = y),
														(e.toString = function () {
															return x;
														}));
											}
										);
									},
									applyTextOutline: function (e) {
										var i,
											s,
											n,
											r,
											a,
											h = this.element;
										if (
											(-1 !== e.indexOf('contrast') &&
												(e = e.replace(
													/contrast/g,
													this.renderer.getContrast(h.style.fill)
												)),
											(e = e.split(' ')),
											(s = e[e.length - 1]),
											(n = e[0]) && 'none' !== n && t.svg)
										) {
											for (
												this.fakeTS = !0,
													e = [].slice.call(h.getElementsByTagName('tspan')),
													this.ySetter = this.xSetter,
													n = n.replace(
														/(^[\d\.]+)(.*?)$/g,
														function (t, e, i) {
															return 2 * e + i;
														}
													),
													a = e.length;
												a--;

											)
												'highcharts-text-outline' ===
													(i = e[a]).getAttribute('class') &&
													m(e, h.removeChild(i));
											(r = h.firstChild),
												f(e, function (t, e) {
													0 === e &&
														(t.setAttribute('x', h.getAttribute('x')),
														(e = h.getAttribute('y')),
														t.setAttribute('y', e || 0),
														null === e && h.setAttribute('y', 0)),
														(t = t.cloneNode(1)),
														o(t, {
															class: 'highcharts-text-outline',
															fill: s,
															stroke: s,
															'stroke-width': n,
															'stroke-linejoin': 'round',
														}),
														h.insertBefore(t, r);
												});
										}
									},
									attr: function (t, e, i, s) {
										var n,
											o,
											r,
											a,
											h = this.element,
											l = this;
										return (
											'string' == typeof t &&
												void 0 !== e &&
												((n = t), ((t = {})[n] = e)),
											'string' == typeof t
												? (l = (this[t + 'Getter'] || this._defaultGetter).call(
														this,
														t,
														h
												  ))
												: (P(
														t,
														function (e, i) {
															(r = !1),
																s || D(this, i),
																this.symbolName &&
																	/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(
																		i
																	) &&
																	(o || (this.symbolAttr(t), (o = !0)),
																	(r = !0)),
																!this.rotation ||
																	('x' !== i && 'y' !== i) ||
																	(this.doTransform = !0),
																r ||
																	((a =
																		this[i + 'Setter'] ||
																		this._defaultSetter).call(this, e, i, h),
																	this.shadows &&
																		/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(
																			i
																		) &&
																		this.updateShadows(i, e, a));
														},
														this
												  ),
												  this.afterSetters()),
											i && i.call(this),
											l
										);
									},
									afterSetters: function () {
										this.doTransform &&
											(this.updateTransform(), (this.doTransform = !1));
									},
									updateShadows: function (t, e, i) {
										for (var s = this.shadows, n = s.length; n--; )
											i.call(
												s[n],
												'height' === t
													? Math.max(e - (s[n].cutHeight || 0), 0)
													: 'd' === t
													? this.d
													: e,
												t,
												s[n]
											);
									},
									addClass: function (t, e) {
										var i = this.attr('class') || '';
										return (
											-1 === i.indexOf(t) &&
												(e || (t = (i + (i ? ' ' : '') + t).replace('  ', ' ')),
												this.attr('class', t)),
											this
										);
									},
									hasClass: function (t) {
										return -1 !== y(t, (this.attr('class') || '').split(' '));
									},
									removeClass: function (t) {
										return this.attr(
											'class',
											(this.attr('class') || '').replace(t, '')
										);
									},
									symbolAttr: function (t) {
										var e = this;
										f(
											'x y r start end width height innerR anchorX anchorY'.split(
												' '
											),
											function (i) {
												e[i] = C(t[i], e[i]);
											}
										),
											e.attr({
												d: e.renderer.symbols[e.symbolName](
													e.x,
													e.y,
													e.width,
													e.height,
													e
												),
											});
									},
									clip: function (t) {
										return this.attr(
											'clip-path',
											t ? 'url(' + this.renderer.url + '#' + t.id + ')' : 'none'
										);
									},
									crisp: function (t, e) {
										var i;
										return (
											(e = e || t.strokeWidth || 0),
											(i = (Math.round(e) % 2) / 2),
											(t.x = Math.floor(t.x || this.x || 0) + i),
											(t.y = Math.floor(t.y || this.y || 0) + i),
											(t.width = Math.floor(
												(t.width || this.width || 0) - 2 * i
											)),
											(t.height = Math.floor(
												(t.height || this.height || 0) - 2 * i
											)),
											c(t.strokeWidth) && (t.strokeWidth = e),
											t
										);
									},
									css: function (t) {
										var e,
											i,
											s = this.styles,
											n = {},
											r = this.element,
											a = '',
											l = !s,
											c = ['textOutline', 'textOverflow', 'width'];
										return (
											t && t.color && (t.fill = t.color),
											s &&
												P(t, function (t, e) {
													t !== s[e] && ((n[e] = t), (l = !0));
												}),
											l &&
												(s && (t = g(s, n)),
												t &&
													(null === t.width || 'auto' === t.width
														? delete this.textWidth
														: 'text' === r.nodeName.toLowerCase() &&
														  t.width &&
														  (e = this.textWidth = O(t.width))),
												(this.styles = t),
												e && !z && this.renderer.forExport && delete t.width,
												r.namespaceURI === this.SVG_NS
													? ((i = function (t, e) {
															return '-' + e.toLowerCase();
													  }),
													  P(t, function (t, e) {
															-1 === y(e, c) &&
																(a += e.replace(/([A-Z])/g, i) + ':' + t + ';');
													  }),
													  a && o(r, 'style', a))
													: h(r, t),
												this.added &&
													('text' === this.element.nodeName &&
														this.renderer.buildText(this),
													t &&
														t.textOutline &&
														this.applyTextOutline(t.textOutline))),
											this
										);
									},
									strokeWidth: function () {
										return this['stroke-width'] || 0;
									},
									on: function (t, e) {
										var i = this,
											s = i.element;
										return (
											v && 'click' === t
												? ((s.ontouchstart = function (t) {
														(i.touchEventFired = Date.now()),
															t.preventDefault(),
															e.call(s, t);
												  }),
												  (s.onclick = function (t) {
														(-1 === R.navigator.userAgent.indexOf('Android') ||
															1100 < Date.now() - (i.touchEventFired || 0)) &&
															e.call(s, t);
												  }))
												: (s['on' + t] = e),
											this
										);
									},
									setRadialReference: function (t) {
										var e = this.renderer.gradients[this.element.gradient];
										return (
											(this.element.radialReference = t),
											e &&
												e.radAttr &&
												e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
											this
										);
									},
									translate: function (t, e) {
										return this.attr({translateX: t, translateY: e});
									},
									invert: function (t) {
										return (this.inverted = t), this.updateTransform(), this;
									},
									updateTransform: function () {
										var t = this.translateX || 0,
											e = this.translateY || 0,
											i = this.scaleX,
											s = this.scaleY,
											n = this.inverted,
											o = this.rotation,
											r = this.matrix,
											a = this.element;
										n && ((t += this.width), (e += this.height)),
											(t = ['translate(' + t + ',' + e + ')']),
											c(r) && t.push('matrix(' + r.join(',') + ')'),
											n
												? t.push('rotate(90) scale(-1,1)')
												: o &&
												  t.push(
														'rotate(' +
															o +
															' ' +
															C(this.rotationOriginX, a.getAttribute('x'), 0) +
															' ' +
															C(
																this.rotationOriginY,
																a.getAttribute('y') || 0
															) +
															')'
												  ),
											(c(i) || c(s)) &&
												t.push('scale(' + C(i, 1) + ' ' + C(s, 1) + ')'),
											t.length && a.setAttribute('transform', t.join(' '));
									},
									toFront: function () {
										var t = this.element;
										return t.parentNode.appendChild(t), this;
									},
									align: function (t, e, i) {
										var s,
											n,
											o,
											r,
											a,
											h,
											l = {};
										return (
											(o = (n = this.renderer).alignedObjects),
											t
												? ((this.alignOptions = t),
												  (this.alignByTranslate = e),
												  (!i || S(i)) &&
														((this.alignTo = s = i || 'renderer'),
														m(o, this),
														o.push(this),
														(i = null)))
												: ((t = this.alignOptions),
												  (e = this.alignByTranslate),
												  (s = this.alignTo)),
											(i = C(i, n[s], n)),
											(s = t.align),
											(n = t.verticalAlign),
											(o = (i.x || 0) + (t.x || 0)),
											(r = (i.y || 0) + (t.y || 0)),
											'right' === s ? (a = 1) : 'center' === s && (a = 2),
											a && (o += (i.width - (t.width || 0)) / a),
											(l[e ? 'translateX' : 'x'] = Math.round(o)),
											'bottom' === n ? (h = 1) : 'middle' === n && (h = 2),
											h && (r += (i.height - (t.height || 0)) / h),
											(l[e ? 'translateY' : 'y'] = Math.round(r)),
											this[this.placed ? 'animate' : 'attr'](l),
											(this.placed = !0),
											(this.alignAttr = l),
											this
										);
									},
									getBBox: function (t, e) {
										var i,
											s,
											n,
											o,
											r,
											a = this.renderer,
											h = this.element,
											l = this.styles,
											p = this.textStr,
											u = a.cache,
											m = a.cacheKeys,
											x = h.namespaceURI === this.SVG_NS;
										if (
											((s = (e = C(e, this.rotation)) * d),
											(n = l && l.fontSize),
											c(p) &&
												(-1 === (r = p.toString()).indexOf('<') &&
													(r = r.replace(/[0-9]/g, '0')),
												(r += [
													'',
													e || 0,
													n,
													this.textWidth,
													l && l.textOverflow,
												].join())),
											r && !t && (i = u[r]),
											!i)
										) {
											if (x || a.forExport) {
												try {
													(o =
														this.fakeTS &&
														function (t) {
															f(
																h.querySelectorAll('.highcharts-text-outline'),
																function (e) {
																	e.style.display = t;
																}
															);
														}) && o('none'),
														(i = h.getBBox
															? g({}, h.getBBox())
															: {width: h.offsetWidth, height: h.offsetHeight}),
														o && o('');
												} catch (t) {}
												(!i || 0 > i.width) && (i = {width: 0, height: 0});
											} else i = this.htmlGetBBox();
											if (
												(a.isSVG &&
													((t = i.width),
													(a = i.height),
													x &&
														(i.height = a =
															{'11px,17': 14, '13px,20': 16}[
																l && l.fontSize + ',' + Math.round(a)
															] || a),
													e &&
														((i.width =
															Math.abs(a * Math.sin(s)) +
															Math.abs(t * Math.cos(s))),
														(i.height =
															Math.abs(a * Math.cos(s)) +
															Math.abs(t * Math.sin(s))))),
												r && 0 < i.height)
											) {
												for (; 250 < m.length; ) delete u[m.shift()];
												u[r] || m.push(r), (u[r] = i);
											}
										}
										return i;
									},
									show: function (t) {
										return this.attr({visibility: t ? 'inherit' : 'visible'});
									},
									hide: function () {
										return this.attr({visibility: 'hidden'});
									},
									fadeOut: function (t) {
										var e = this;
										e.animate(
											{opacity: 0},
											{
												duration: t || 150,
												complete: function () {
													e.attr({y: -9999});
												},
											}
										);
									},
									add: function (t) {
										var e,
											i = this.renderer,
											s = this.element;
										return (
											t && (this.parentGroup = t),
											(this.parentInverted = t && t.inverted),
											void 0 !== this.textStr && i.buildText(this),
											(this.added = !0),
											(!t || t.handleZ || this.zIndex) &&
												(e = this.zIndexSetter()),
											e || (t ? t.element : i.box).appendChild(s),
											this.onAdd && this.onAdd(),
											this
										);
									},
									safeRemoveChild: function (t) {
										var e = t.parentNode;
										e && e.removeChild(t);
									},
									destroy: function () {
										var t = this,
											e = t.element || {},
											i =
												t.renderer.isSVG &&
												'SPAN' === e.nodeName &&
												t.parentGroup,
											s = e.ownerSVGElement,
											n = t.clipPath;
										if (
											((e.onclick =
												e.onmouseout =
												e.onmouseover =
												e.onmousemove =
												e.point =
													null),
											D(t),
											n &&
												s &&
												(f(
													s.querySelectorAll('[clip-path],[CLIP-PATH]'),
													function (t) {
														var e = t.getAttribute('clip-path'),
															i = n.element.id;
														(-1 < e.indexOf('(#' + i + ')') ||
															-1 < e.indexOf('("#' + i + '")')) &&
															t.removeAttribute('clip-path');
													}
												),
												(t.clipPath = n.destroy())),
											t.stops)
										) {
											for (s = 0; s < t.stops.length; s++)
												t.stops[s] = t.stops[s].destroy();
											t.stops = null;
										}
										for (
											t.safeRemoveChild(e), t.destroyShadows();
											i && i.div && 0 === i.div.childNodes.length;

										)
											(e = i.parentGroup),
												t.safeRemoveChild(i.div),
												delete i.div,
												(i = e);
										return (
											t.alignTo && m(t.renderer.alignedObjects, t),
											P(t, function (e, i) {
												delete t[i];
											}),
											null
										);
									},
									shadow: function (t, e, i) {
										var s,
											n,
											r,
											a,
											h,
											l,
											c = [],
											d = this.element;
										if (t) {
											if (!this.shadows) {
												for (
													a = C(t.width, 3),
														h = (t.opacity || 0.15) / a,
														l = this.parentInverted
															? '(-1,-1)'
															: '(' +
															  C(t.offsetX, 1) +
															  ', ' +
															  C(t.offsetY, 1) +
															  ')',
														s = 1;
													s <= a;
													s++
												)
													(n = d.cloneNode(0)),
														(r = 2 * a + 1 - 2 * s),
														o(n, {
															stroke: t.color || '#000000',
															'stroke-opacity': h * s,
															'stroke-width': r,
															transform: 'translate' + l,
															fill: 'none',
														}),
														n.setAttribute(
															'class',
															(n.getAttribute('class') || '') +
																' highcharts-shadow'
														),
														i &&
															(o(n, 'height', Math.max(o(n, 'height') - r, 0)),
															(n.cutHeight = r)),
														e
															? e.element.appendChild(n)
															: d.parentNode && d.parentNode.insertBefore(n, d),
														c.push(n);
												this.shadows = c;
											}
										} else this.destroyShadows();
										return this;
									},
									destroyShadows: function () {
										f(
											this.shadows || [],
											function (t) {
												this.safeRemoveChild(t);
											},
											this
										),
											(this.shadows = void 0);
									},
									xGetter: function (t) {
										return (
											'circle' === this.element.nodeName &&
												('x' === t ? (t = 'cx') : 'y' === t && (t = 'cy')),
											this._defaultGetter(t)
										);
									},
									_defaultGetter: function (t) {
										return (
											(t = C(
												this[t + 'Value'],
												this[t],
												this.element ? this.element.getAttribute(t) : null,
												0
											)),
											/^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)),
											t
										);
									},
									dSetter: function (t, e, i) {
										t && t.join && (t = t.join(' ')),
											/(NaN| {2}|^$)/.test(t) && (t = 'M 0 0'),
											this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
									},
									dashstyleSetter: function (t) {
										var e,
											i = this['stroke-width'];
										if (
											('inherit' === i && (i = 1), (t = t && t.toLowerCase()))
										) {
											for (
												e = (t = t
													.replace('shortdashdotdot', '3,1,1,1,1,1,')
													.replace('shortdashdot', '3,1,1,1')
													.replace('shortdot', '1,1,')
													.replace('shortdash', '3,1,')
													.replace('longdash', '8,3,')
													.replace(/dot/g, '1,3,')
													.replace('dash', '4,3,')
													.replace(/,$/, '')
													.split(',')).length;
												e--;

											)
												t[e] = O(t[e]) * i;
											(t = t.join(',').replace(/NaN/g, 'none')),
												this.element.setAttribute('stroke-dasharray', t);
										}
									},
									alignSetter: function (t) {
										(this.alignValue = t),
											this.element.setAttribute(
												'text-anchor',
												{left: 'start', center: 'middle', right: 'end'}[t]
											);
									},
									opacitySetter: function (t, e, i) {
										(this[e] = t), i.setAttribute(e, t);
									},
									titleSetter: function (t) {
										var e = this.element.getElementsByTagName('title')[0];
										e ||
											((e = u.createElementNS(this.SVG_NS, 'title')),
											this.element.appendChild(e)),
											e.firstChild && e.removeChild(e.firstChild),
											e.appendChild(
												u.createTextNode(
													String(C(t), '')
														.replace(/<[^>]*>/g, '')
														.replace(/&lt;/g, '<')
														.replace(/&gt;/g, '>')
												)
											);
									},
									textSetter: function (t) {
										t !== this.textStr &&
											(delete this.bBox,
											(this.textStr = t),
											this.added && this.renderer.buildText(this));
									},
									fillSetter: function (t, e, i) {
										'string' == typeof t
											? i.setAttribute(e, t)
											: t && this.complexColor(t, e, i);
									},
									visibilitySetter: function (t, e, i) {
										'inherit' === t
											? i.removeAttribute(e)
											: this[e] !== t && i.setAttribute(e, t),
											(this[e] = t);
									},
									zIndexSetter: function (t, e) {
										var i,
											s,
											n,
											o,
											r = this.renderer,
											a = this.parentGroup,
											h = (a || r).element || r.box,
											l = this.element;
										if (
											((r = h === r.box),
											(i = this.added),
											c(t)
												? (l.setAttribute('data-z-index', t),
												  (t = +t),
												  this[e] === t && (i = !1))
												: c(this[e]) && l.removeAttribute('data-z-index'),
											(this[e] = t),
											i)
										) {
											for (
												(t = this.zIndex) && a && (a.handleZ = !0),
													o = (e = h.childNodes).length - 1;
												0 <= o && !s;
												o--
											)
												(i = (a = e[o]).getAttribute('data-z-index')),
													(n = !c(i)),
													a !== l &&
														(0 > t && n && !r && !o
															? (h.insertBefore(l, e[o]), (s = !0))
															: (O(i) <= t || (n && (!c(t) || 0 <= t))) &&
															  (h.insertBefore(l, e[o + 1] || null),
															  (s = !0)));
											s || (h.insertBefore(l, e[r ? 3 : 0] || null), (s = !0));
										}
										return s;
									},
									_defaultSetter: function (t, e, i) {
										i.setAttribute(e, t);
									},
								}),
								(e.prototype.yGetter = e.prototype.xGetter),
								(e.prototype.translateXSetter =
									e.prototype.translateYSetter =
									e.prototype.rotationSetter =
									e.prototype.verticalAlignSetter =
									e.prototype.rotationOriginXSetter =
									e.prototype.rotationOriginYSetter =
									e.prototype.scaleXSetter =
									e.prototype.scaleYSetter =
									e.prototype.matrixSetter =
										function (t, e) {
											(this[e] = t), (this.doTransform = !0);
										}),
								(e.prototype['stroke-widthSetter'] = e.prototype.strokeSetter =
									function (t, i, s) {
										(this[i] = t),
											this.stroke && this['stroke-width']
												? (e.prototype.fillSetter.call(
														this,
														this.stroke,
														'stroke',
														s
												  ),
												  s.setAttribute('stroke-width', this['stroke-width']),
												  (this.hasStroke = !0))
												: 'stroke-width' === i &&
												  0 === t &&
												  this.hasStroke &&
												  (s.removeAttribute('stroke'), (this.hasStroke = !1));
									}),
								(i = t.SVGRenderer =
									function () {
										this.init.apply(this, arguments);
									}),
								g(i.prototype, {
									Element: e,
									SVG_NS: E,
									init: function (t, e, i, n, r, a) {
										var l, c;
										(l = (n = this.createElement('svg')
											.attr({version: '1.1', class: 'highcharts-root'})
											.css(this.getStyle(n))).element),
											t.appendChild(l),
											o(t, 'dir', 'ltr'),
											-1 === t.innerHTML.indexOf('xmlns') &&
												o(l, 'xmlns', this.SVG_NS),
											(this.isSVG = !0),
											(this.box = l),
											(this.boxWrapper = n),
											(this.alignedObjects = []),
											(this.url =
												(k || T) && u.getElementsByTagName('base').length
													? R.location.href
															.split('#')[0]
															.replace(/<[^>]*>/g, '')
															.replace(/([\('\)])/g, '\\$1')
															.replace(/ /g, '%20')
													: ''),
											this.createElement('desc')
												.add()
												.element.appendChild(
													u.createTextNode('Created with Highcharts 6.2.0')
												),
											(this.defs = this.createElement('defs').add()),
											(this.allowHTML = a),
											(this.forExport = r),
											(this.gradients = {}),
											(this.cache = {}),
											(this.cacheKeys = []),
											(this.imgCount = 0),
											this.setSize(e, i, !1),
											k &&
												t.getBoundingClientRect &&
												((e = function () {
													h(t, {left: 0, top: 0}),
														(c = t.getBoundingClientRect()),
														h(t, {
															left: Math.ceil(c.left) - c.left + 'px',
															top: Math.ceil(c.top) - c.top + 'px',
														});
												})(),
												(this.unSubPixelFix = s(R, 'resize', e)));
									},
									getStyle: function (t) {
										return (this.style = g(
											{
												fontFamily:
													'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
												fontSize: '12px',
											},
											t
										));
									},
									setStyle: function (t) {
										this.boxWrapper.css(this.getStyle(t));
									},
									isHidden: function () {
										return !this.boxWrapper.getBBox().width;
									},
									destroy: function () {
										var t = this.defs;
										return (
											(this.box = null),
											(this.boxWrapper = this.boxWrapper.destroy()),
											p(this.gradients || {}),
											(this.gradients = null),
											t && (this.defs = t.destroy()),
											this.unSubPixelFix && this.unSubPixelFix(),
											(this.alignedObjects = null)
										);
									},
									createElement: function (t) {
										var e = new this.Element();
										return e.init(this, t), e;
									},
									draw: L,
									getRadialAttr: function (t, e) {
										return {
											cx: t[0] - t[2] / 2 + e.cx * t[2],
											cy: t[1] - t[2] / 2 + e.cy * t[2],
											r: e.r * t[2],
										};
									},
									truncate: function (t, e, i, s, n, o, r) {
										var a,
											h,
											l,
											c = this,
											d = t.rotation,
											p = s ? 1 : 0,
											f = (i || s).length,
											g = f,
											m = [],
											x = function (t) {
												e.firstChild && e.removeChild(e.firstChild),
													t && e.appendChild(u.createTextNode(t));
											},
											v = function (o, a) {
												if (void 0 === m[(a = a || o)])
													if (e.getSubStringLength)
														try {
															m[a] = n + e.getSubStringLength(0, s ? a + 1 : a);
														} catch (t) {}
													else
														c.getSpanWidth &&
															(x(r(i || s, o)),
															(m[a] = n + c.getSpanWidth(t, e)));
												return m[a];
											};
										if (
											((t.rotation = 0),
											(h = v(e.textContent.length)),
											(l = n + h > o))
										) {
											for (; p <= f; )
												(g = Math.ceil((p + f) / 2)),
													s && (a = r(s, g)),
													(h = v(g, a && a.length - 1)),
													p === f ? (p = f + 1) : h > o ? (f = g - 1) : (p = g);
											0 === f
												? x('')
												: (i && f === i.length - 1) || x(a || r(i || s, g));
										}
										return (
											s && s.splice(0, g),
											(t.actualWidth = h),
											(t.rotation = d),
											l
										);
									},
									escapes: {
										'&': '&amp;',
										'<': '&lt;',
										'>': '&gt;',
										"'": '&#39;',
										'"': '&quot;',
									},
									buildText: function (t) {
										var e,
											i,
											s,
											n = t.element,
											r = this,
											a = r.forExport,
											l = C(t.textStr, '').toString(),
											c = -1 !== l.indexOf('<'),
											d = n.childNodes,
											p = o(n, 'x'),
											g = t.styles,
											m = t.textWidth,
											v = g && g.lineHeight,
											b = g && g.textOutline,
											k = g && 'ellipsis' === g.textOverflow,
											w = g && 'nowrap' === g.whiteSpace,
											M = g && g.fontSize,
											S = d.length,
											T =
												((g = m && !t.added && this.box),
												function (t) {
													var e;
													return (
														(e = /(px|em)$/.test(t && t.style.fontSize)
															? t.style.fontSize
															: M || r.style.fontSize || 12),
														v
															? O(v)
															: r.fontMetrics(
																	e,
																	t.getAttribute('style') ? t : n
															  ).h
													);
												}),
											A = function (t, e) {
												return (
													P(r.escapes, function (i, s) {
														(e && -1 !== y(i, e)) ||
															(t = t.toString().replace(new RegExp(i, 'g'), s));
													}),
													t
												);
											},
											L = function (t, e) {
												var i;
												if (
													((i = t.indexOf('<')),
													-1 !==
														(i = (t = t.substring(
															i,
															t.indexOf('>') - i
														)).indexOf(e + '=')) &&
														((i = i + e.length + 1),
														'"' === (e = t.charAt(i)) || "'" === e))
												)
													return (t = t.substring(i + 1)).substring(
														0,
														t.indexOf(e)
													);
											};
										if ((i = [l, k, w, v, b, M, m].join()) !== t.textCache) {
											for (t.textCache = i; S--; ) n.removeChild(d[S]);
											c || b || k || m || -1 !== l.indexOf(' ')
												? (g && g.appendChild(n),
												  (l = c
														? l
																.replace(
																	/<(b|strong)>/g,
																	'<span style="font-weight:bold">'
																)
																.replace(
																	/<(i|em)>/g,
																	'<span style="font-style:italic">'
																)
																.replace(/<a/g, '<span')
																.replace(/<\/(b|strong|i|em|a)>/g, '</span>')
																.split(/<br.*?>/g)
														: [l]),
												  (l = x(l, function (t) {
														return '' !== t;
												  })),
												  f(l, function (i, l) {
														var c,
															d = 0,
															g = 0;
														(i = i
															.replace(/^\s+|\s+$/g, '')
															.replace(/<span/g, '|||<span')
															.replace(/<\/span>/g, '</span>|||')),
															(c = i.split('|||')),
															f(c, function (i) {
																if ('' !== i || 1 === c.length) {
																	var f,
																		x,
																		v = {},
																		y = u.createElementNS(r.SVG_NS, 'tspan');
																	if (
																		((f = L(i, 'class')) && o(y, 'class', f),
																		(f = L(i, 'style')) &&
																			((f = f.replace(
																				/(;| |^)color([ :])/,
																				'$1fill$2'
																			)),
																			o(y, 'style', f)),
																		(x = L(i, 'href')) &&
																			!a &&
																			(o(
																				y,
																				'onclick',
																				'location.href="' + x + '"'
																			),
																			o(y, 'class', 'highcharts-anchor'),
																			h(y, {cursor: 'pointer'})),
																		' ' !==
																			(i = A(
																				i.replace(
																					/<[a-zA-Z\/](.|\n)*?>/g,
																					''
																				) || ' '
																			)))
																	) {
																		if (
																			(y.appendChild(u.createTextNode(i)),
																			d
																				? (v.dx = 0)
																				: l && null !== p && (v.x = p),
																			o(y, v),
																			n.appendChild(y),
																			!d &&
																				s &&
																				(!z && a && h(y, {display: 'block'}),
																				o(y, 'dy', T(y))),
																			m)
																		) {
																			var b = i
																				.replace(/([^\^])-/g, '$1- ')
																				.split(' ');
																			(v =
																				!w &&
																				(1 < c.length || l || 1 < b.length)),
																				(x = 0);
																			var S = T(y);
																			if (k)
																				e = r.truncate(
																					t,
																					y,
																					i,
																					void 0,
																					0,
																					Math.max(
																						0,
																						m - parseInt(M || 12, 10)
																					),
																					function (t, e) {
																						return t.substring(0, e) + '…';
																					}
																				);
																			else if (v)
																				for (; b.length; )
																					b.length &&
																						!w &&
																						0 < x &&
																						((y = u.createElementNS(
																							E,
																							'tspan'
																						)),
																						o(y, {dy: S, x: p}),
																						f && o(y, 'style', f),
																						y.appendChild(
																							u.createTextNode(
																								b.join(' ').replace(/- /g, '-')
																							)
																						),
																						n.appendChild(y)),
																						r.truncate(
																							t,
																							y,
																							null,
																							b,
																							0 === x ? g : 0,
																							m,
																							function (t, e) {
																								return b
																									.slice(0, e)
																									.join(' ')
																									.replace(/- /g, '-');
																							}
																						),
																						(g = t.actualWidth),
																						x++;
																		}
																		d++;
																	}
																}
															}),
															(s = s || n.childNodes.length);
												  }),
												  k &&
														e &&
														t.attr('title', A(t.textStr, ['&lt;', '&gt;'])),
												  g && g.removeChild(n),
												  b && t.applyTextOutline && t.applyTextOutline(b))
												: n.appendChild(u.createTextNode(A(l)));
										}
									},
									getContrast: function (t) {
										return (
											((t = a(t).rgba)[0] *= 1),
											(t[1] *= 1.2),
											(t[2] *= 0.5),
											459 < t[0] + t[1] + t[2] ? '#000000' : '#FFFFFF'
										);
									},
									button: function (t, e, i, n, o, r, a, h, l) {
										var c,
											d,
											p,
											u,
											f = this.label(
												t,
												e,
												i,
												l,
												null,
												null,
												null,
												null,
												'button'
											),
											m = 0;
										return (
											f.attr(A({padding: 8, r: 2}, o)),
											(o = A(
												{
													fill: '#f7f7f7',
													stroke: '#cccccc',
													'stroke-width': 1,
													style: {
														color: '#333333',
														cursor: 'pointer',
														fontWeight: 'normal',
													},
												},
												o
											)),
											(c = o.style),
											delete o.style,
											(r = A(o, {fill: '#e6e6e6'}, r)),
											(d = r.style),
											delete r.style,
											(a = A(
												o,
												{
													fill: '#e6ebf5',
													style: {color: '#000000', fontWeight: 'bold'},
												},
												a
											)),
											(p = a.style),
											delete a.style,
											(h = A(o, {style: {color: '#cccccc'}}, h)),
											(u = h.style),
											delete h.style,
											s(f.element, w ? 'mouseover' : 'mouseenter', function () {
												3 !== m && f.setState(1);
											}),
											s(f.element, w ? 'mouseout' : 'mouseleave', function () {
												3 !== m && f.setState(m);
											}),
											(f.setState = function (t) {
												1 !== t && (f.state = m = t),
													f
														.removeClass(
															/highcharts-button-(normal|hover|pressed|disabled)/
														)
														.addClass(
															'highcharts-button-' +
																['normal', 'hover', 'pressed', 'disabled'][
																	t || 0
																]
														),
													f
														.attr([o, r, a, h][t || 0])
														.css([c, d, p, u][t || 0]);
											}),
											f.attr(o).css(g({cursor: 'default'}, c)),
											f.on('click', function (t) {
												3 !== m && n.call(f, t);
											})
										);
									},
									crispLine: function (t, e) {
										return (
											t[1] === t[4] &&
												(t[1] = t[4] = Math.round(t[1]) - (e % 2) / 2),
											t[2] === t[5] &&
												(t[2] = t[5] = Math.round(t[2]) + (e % 2) / 2),
											t
										);
									},
									path: function (t) {
										var e = {fill: 'none'};
										return (
											b(t) ? (e.d = t) : M(t) && g(e, t),
											this.createElement('path').attr(e)
										);
									},
									circle: function (t, e, i) {
										return (
											(t = M(t) ? t : {x: t, y: e, r: i}),
											((e = this.createElement('circle')).xSetter = e.ySetter =
												function (t, e, i) {
													i.setAttribute('c' + e, t);
												}),
											e.attr(t)
										);
									},
									arc: function (t, e, i, s, n, o) {
										return (
											M(t)
												? ((e = (s = t).y), (i = s.r), (t = s.x))
												: (s = {innerR: s, start: n, end: o}),
											((t = this.symbol('arc', t, e, i, i, s)).r = i),
											t
										);
									},
									rect: function (t, e, i, s, n, r) {
										n = M(t) ? t.r : n;
										var a = this.createElement('rect');
										return (
											(t = M(t)
												? t
												: void 0 === t
												? {}
												: {
														x: t,
														y: e,
														width: Math.max(i, 0),
														height: Math.max(s, 0),
												  }),
											void 0 !== r && ((t.strokeWidth = r), (t = a.crisp(t))),
											(t.fill = 'none'),
											n && (t.r = n),
											(a.rSetter = function (t, e, i) {
												o(i, {rx: t, ry: t});
											}),
											a.attr(t)
										);
									},
									setSize: function (t, e, i) {
										var s = this.alignedObjects,
											n = s.length;
										for (
											this.width = t,
												this.height = e,
												this.boxWrapper.animate(
													{width: t, height: e},
													{
														step: function () {
															this.attr({
																viewBox:
																	'0 0 ' +
																	this.attr('width') +
																	' ' +
																	this.attr('height'),
															});
														},
														duration: C(i, !0) ? void 0 : 0,
													}
												);
											n--;

										)
											s[n].align();
									},
									g: function (t) {
										var e = this.createElement('g');
										return t ? e.attr({class: 'highcharts-' + t}) : e;
									},
									image: function (t, e, i, n, o, r) {
										var a,
											h = {preserveAspectRatio: 'none'},
											l = function (t, e) {
												t.setAttributeNS
													? t.setAttributeNS(
															'http://www.w3.org/1999/xlink',
															'href',
															e
													  )
													: t.setAttribute('hc-svg-href', e);
											},
											c = function (e) {
												l(a.element, t), r.call(a, e);
											};
										return (
											1 < arguments.length &&
												g(h, {x: e, y: i, width: n, height: o}),
											(a = this.createElement('image').attr(h)),
											r
												? (l(
														a.element,
														'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
												  ),
												  (h = new R.Image()),
												  s(h, 'load', c),
												  (h.src = t),
												  h.complete && c({}))
												: l(a.element, t),
											a
										);
									},
									symbol: function (t, e, i, s, n, o) {
										var a,
											d,
											p,
											m = this,
											x = /^url\((.*?)\)$/,
											v = x.test(t),
											y = !v && (this.symbols[t] ? t : 'circle'),
											b = y && this.symbols[y],
											k =
												c(e) &&
												b &&
												b.call(
													this.symbols,
													Math.round(e),
													Math.round(i),
													s,
													n,
													o
												);
										return (
											b
												? ((a = this.path(k)).attr('fill', 'none'),
												  g(a, {
														symbolName: y,
														x: e,
														y: i,
														width: s,
														height: n,
												  }),
												  o && g(a, o))
												: v &&
												  ((d = t.match(x)[1]),
												  ((a = this.image(d)).imgwidth = C(
														B[d] && B[d].width,
														o && o.width
												  )),
												  (a.imgheight = C(B[d] && B[d].height, o && o.height)),
												  (p = function () {
														a.attr({width: a.width, height: a.height});
												  }),
												  f(['width', 'height'], function (t) {
														a[t + 'Setter'] = function (t, e) {
															var i = {},
																s = this['img' + e],
																n = 'width' === e ? 'translateX' : 'translateY';
															(this[e] = t),
																c(s) &&
																	(this.element &&
																		this.element.setAttribute(e, s),
																	this.alignByTranslate ||
																		((i[n] = ((this[e] || 0) - s) / 2),
																		this.attr(i)));
														};
												  }),
												  c(e) && a.attr({x: e, y: i}),
												  (a.isImg = !0),
												  c(a.imgwidth) && c(a.imgheight)
														? p()
														: (a.attr({width: 0, height: 0}),
														  l('img', {
																onload: function () {
																	var t = r[m.chartIndex];
																	0 === this.width &&
																		(h(this, {
																			position: 'absolute',
																			top: '-999em',
																		}),
																		u.body.appendChild(this)),
																		(B[d] = {
																			width: this.width,
																			height: this.height,
																		}),
																		(a.imgwidth = this.width),
																		(a.imgheight = this.height),
																		a.element && p(),
																		this.parentNode &&
																			this.parentNode.removeChild(this),
																		m.imgCount--,
																		!m.imgCount && t && t.onload && t.onload();
																},
																src: d,
														  }),
														  this.imgCount++)),
											a
										);
									},
									symbols: {
										circle: function (t, e, i, s) {
											return this.arc(t + i / 2, e + s / 2, i / 2, s / 2, {
												start: 0,
												end: 2 * Math.PI,
												open: !1,
											});
										},
										square: function (t, e, i, s) {
											return [
												'M',
												t,
												e,
												'L',
												t + i,
												e,
												t + i,
												e + s,
												t,
												e + s,
												'Z',
											];
										},
										triangle: function (t, e, i, s) {
											return [
												'M',
												t + i / 2,
												e,
												'L',
												t + i,
												e + s,
												t,
												e + s,
												'Z',
											];
										},
										'triangle-down': function (t, e, i, s) {
											return ['M', t, e, 'L', t + i, e, t + i / 2, e + s, 'Z'];
										},
										diamond: function (t, e, i, s) {
											return [
												'M',
												t + i / 2,
												e,
												'L',
												t + i,
												e + s / 2,
												t + i / 2,
												e + s,
												t,
												e + s / 2,
												'Z',
											];
										},
										arc: function (t, e, i, s, n) {
											var o = n.start,
												r = n.r || i,
												a = n.r || s || i,
												h = n.end - 0.001;
											(i = n.innerR),
												(s = C(
													n.open,
													0.001 > Math.abs(n.end - n.start - 2 * Math.PI)
												));
											var l = Math.cos(o),
												d = Math.sin(o),
												p = Math.cos(h);
											return (
												(h = Math.sin(h)),
												(r = [
													'M',
													t + r * l,
													e + a * d,
													'A',
													r,
													a,
													0,
													(n = 0.001 > n.end - o - Math.PI ? 0 : 1),
													1,
													t + r * p,
													e + a * h,
												]),
												c(i) &&
													r.push(
														s ? 'M' : 'L',
														t + i * p,
														e + i * h,
														'A',
														i,
														i,
														0,
														n,
														0,
														t + i * l,
														e + i * d
													),
												r.push(s ? '' : 'Z'),
												r
											);
										},
										callout: function (t, e, i, s, n) {
											var o,
												r = Math.min((n && n.r) || 0, i, s),
												a = r + 6,
												h = n && n.anchorX;
											return (
												(n = n && n.anchorY),
												(o = [
													'M',
													t + r,
													e,
													'L',
													t + i - r,
													e,
													'C',
													t + i,
													e,
													t + i,
													e,
													t + i,
													e + r,
													'L',
													t + i,
													e + s - r,
													'C',
													t + i,
													e + s,
													t + i,
													e + s,
													t + i - r,
													e + s,
													'L',
													t + r,
													e + s,
													'C',
													t,
													e + s,
													t,
													e + s,
													t,
													e + s - r,
													'L',
													t,
													e + r,
													'C',
													t,
													e,
													t,
													e,
													t + r,
													e,
												]),
												h && h > i
													? n > e + a && n < e + s - a
														? o.splice(
																13,
																3,
																'L',
																t + i,
																n - 6,
																t + i + 6,
																n,
																t + i,
																n + 6,
																t + i,
																e + s - r
														  )
														: o.splice(
																13,
																3,
																'L',
																t + i,
																s / 2,
																h,
																n,
																t + i,
																s / 2,
																t + i,
																e + s - r
														  )
													: h && 0 > h
													? n > e + a && n < e + s - a
														? o.splice(
																33,
																3,
																'L',
																t,
																n + 6,
																t - 6,
																n,
																t,
																n - 6,
																t,
																e + r
														  )
														: o.splice(
																33,
																3,
																'L',
																t,
																s / 2,
																h,
																n,
																t,
																s / 2,
																t,
																e + r
														  )
													: n && n > s && h > t + a && h < t + i - a
													? o.splice(
															23,
															3,
															'L',
															h + 6,
															e + s,
															h,
															e + s + 6,
															h - 6,
															e + s,
															t + r,
															e + s
													  )
													: n &&
													  0 > n &&
													  h > t + a &&
													  h < t + i - a &&
													  o.splice(
															3,
															3,
															'L',
															h - 6,
															e,
															h,
															e - 6,
															h + 6,
															e,
															i - r,
															e
													  ),
												o
											);
										},
									},
									clipRect: function (e, i, s, n) {
										var o = t.uniqueKey(),
											r = this.createElement('clipPath')
												.attr({id: o})
												.add(this.defs);
										return (
											((e = this.rect(e, i, s, n, 0).add(r)).id = o),
											(e.clipPath = r),
											(e.count = 0),
											e
										);
									},
									text: function (t, e, i, s) {
										var n = {};
										return !s || (!this.allowHTML && this.forExport)
											? ((n.x = Math.round(e || 0)),
											  i && (n.y = Math.round(i)),
											  c(t) && (n.text = t),
											  (t = this.createElement('text').attr(n)),
											  s ||
													(t.xSetter = function (t, e, i) {
														var s,
															n,
															o = i.getElementsByTagName('tspan'),
															r = i.getAttribute(e);
														for (n = 0; n < o.length; n++)
															(s = o[n]).getAttribute(e) === r &&
																s.setAttribute(e, t);
														i.setAttribute(e, t);
													}),
											  t)
											: this.html(t, e, i);
									},
									fontMetrics: function (t, e) {
										return (
											(t =
												t ||
												(e && e.style && e.style.fontSize) ||
												(this.style && this.style.fontSize)),
											{
												h: (e =
													24 >
													(t = /px/.test(t)
														? O(t)
														: /em/.test(t)
														? parseFloat(t) *
														  (e ? this.fontMetrics(null, e.parentNode).f : 16)
														: 12)
														? t + 3
														: Math.round(1.2 * t)),
												b: Math.round(0.8 * e),
												f: t,
											}
										);
									},
									rotCorr: function (t, e, i) {
										var s = t;
										return (
											e && i && (s = Math.max(s * Math.cos(e * d), 4)),
											{x: (-t / 3) * Math.sin(e * d), y: s}
										);
									},
									label: function (i, s, n, o, r, a, h, l, d) {
										var p,
											u,
											m,
											x,
											v,
											y,
											b,
											k,
											w,
											M,
											S,
											T,
											L,
											P = this,
											C = P.g('button' !== d && 'label'),
											O = (C.text = P.text('', 0, 0, h).attr({zIndex: 1})),
											D = 0,
											z = 3,
											E = 0,
											B = {},
											R = /^url\((.*?)\)$/.test(o),
											N = R;
										d && C.addClass('highcharts-' + d),
											(N = R),
											(M = function () {
												return ((k || 0) % 2) / 2;
											}),
											(S = function () {
												var t = O.element.style,
													e = {};
												(u =
													(void 0 === m || void 0 === x || b) &&
													c(O.textStr) &&
													O.getBBox()),
													(C.width = (m || u.width || 0) + 2 * z + E),
													(C.height = (x || u.height || 0) + 2 * z),
													(w = z + P.fontMetrics(t && t.fontSize, O).b),
													N &&
														(p ||
															((C.box = p =
																P.symbols[o] || R ? P.symbol(o) : P.rect()),
															p.addClass(
																('button' === d ? '' : 'highcharts-label-box') +
																	(d ? ' highcharts-' + d + '-box' : '')
															),
															p.add(C),
															(t = M()),
															(e.x = t),
															(e.y = (l ? -w : 0) + t)),
														(e.width = Math.round(C.width)),
														(e.height = Math.round(C.height)),
														p.attr(g(e, B)),
														(B = {}));
											}),
											(T = function () {
												var t,
													e = E + z;
												(t = l ? 0 : w),
													c(m) &&
														u &&
														('center' === b || 'right' === b) &&
														(e += {center: 0.5, right: 1}[b] * (m - u.width)),
													(e === O.x && t === O.y) ||
														(O.attr('x', e),
														O.hasBoxWidthChanged && ((u = O.getBBox(!0)), S()),
														void 0 !== t && O.attr('y', t)),
													(O.x = e),
													(O.y = t);
											}),
											(L = function (t, e) {
												p ? p.attr(t, e) : (B[t] = e);
											}),
											(C.onAdd = function () {
												O.add(C),
													C.attr({text: i || 0 === i ? i : '', x: s, y: n}),
													p && c(r) && C.attr({anchorX: r, anchorY: a});
											}),
											(C.widthSetter = function (e) {
												m = t.isNumber(e) ? e : null;
											}),
											(C.heightSetter = function (t) {
												x = t;
											}),
											(C['text-alignSetter'] = function (t) {
												b = t;
											}),
											(C.paddingSetter = function (t) {
												c(t) && t !== z && ((z = C.padding = t), T());
											}),
											(C.paddingLeftSetter = function (t) {
												c(t) && t !== E && ((E = t), T());
											}),
											(C.alignSetter = function (t) {
												(t = {left: 0, center: 0.5, right: 1}[t]) !== D &&
													((D = t), u && C.attr({x: v}));
											}),
											(C.textSetter = function (t) {
												void 0 !== t && O.textSetter(t), S(), T();
											}),
											(C['stroke-widthSetter'] = function (t, e) {
												t && (N = !0), (k = this['stroke-width'] = t), L(e, t);
											}),
											(C.strokeSetter =
												C.fillSetter =
												C.rSetter =
													function (t, e) {
														'r' !== e &&
															('fill' === e && t && (N = !0), (C[e] = t)),
															L(e, t);
													}),
											(C.anchorXSetter = function (t, e) {
												(r = C.anchorX = t), L(e, Math.round(t) - M() - v);
											}),
											(C.anchorYSetter = function (t, e) {
												(a = C.anchorY = t), L(e, t - y);
											}),
											(C.xSetter = function (t) {
												(C.x = t),
													D &&
														((t -= D * ((m || u.width) + 2 * z)),
														(C['forceAnimate:x'] = !0)),
													(v = Math.round(t)),
													C.attr('translateX', v);
											}),
											(C.ySetter = function (t) {
												(y = C.y = Math.round(t)), C.attr('translateY', y);
											});
										var W = C.css;
										return g(C, {
											css: function (t) {
												if (t) {
													var e = {};
													(t = A(t)),
														f(C.textProps, function (i) {
															void 0 !== t[i] && ((e[i] = t[i]), delete t[i]);
														}),
														O.css(e),
														'width' in e && S();
												}
												return W.call(C, t);
											},
											getBBox: function () {
												return {
													width: u.width + 2 * z,
													height: u.height + 2 * z,
													x: u.x - z,
													y: u.y - z,
												};
											},
											shadow: function (t) {
												return t && (S(), p && p.shadow(t)), C;
											},
											destroy: function () {
												I(C.element, 'mouseenter'),
													I(C.element, 'mouseleave'),
													O && (O = O.destroy()),
													p && (p = p.destroy()),
													e.prototype.destroy.call(C),
													(C = P = S = T = L = null);
											},
										});
									},
								}),
								(t.Renderer = i);
						})(c),
						(function (t) {
							var e = t.attr,
								i = t.createElement,
								s = t.css,
								n = t.defined,
								o = t.each,
								r = t.extend,
								a = t.isFirefox,
								h = t.isMS,
								l = t.isWebKit,
								c = t.pick,
								d = t.pInt,
								p = t.SVGRenderer,
								u = t.win,
								f = t.wrap;
							r(t.SVGElement.prototype, {
								htmlCss: function (t) {
									var e = 'SPAN' === this.element.tagName && t && 'width' in t,
										i = c(e && t.width, void 0);
									return (
										e &&
											(delete t.width,
											(this.textWidth = i),
											this.htmlUpdateTransform()),
										t &&
											'ellipsis' === t.textOverflow &&
											((t.whiteSpace = 'nowrap'), (t.overflow = 'hidden')),
										(this.styles = r(this.styles, t)),
										s(this.element, t),
										this
									);
								},
								htmlGetBBox: function () {
									var t = this.element;
									return {
										x: t.offsetLeft,
										y: t.offsetTop,
										width: t.offsetWidth,
										height: t.offsetHeight,
									};
								},
								htmlUpdateTransform: function () {
									if (this.added) {
										var t = this.renderer,
											e = this.element,
											i = this.translateX || 0,
											r = this.translateY || 0,
											a = this.x || 0,
											h = this.y || 0,
											l = this.textAlign || 'left',
											c = {left: 0, center: 0.5, right: 1}[l],
											p = (f = this.styles) && f.whiteSpace;
										if (
											(s(e, {marginLeft: i, marginTop: r}),
											this.shadows &&
												o(this.shadows, function (t) {
													s(t, {marginLeft: i + 1, marginTop: r + 1});
												}),
											this.inverted &&
												o(e.childNodes, function (i) {
													t.invertChild(i, e);
												}),
											'SPAN' === e.tagName)
										) {
											var u,
												f = this.rotation,
												g = this.textWidth && d(this.textWidth),
												m = [
													f,
													l,
													e.innerHTML,
													this.textWidth,
													this.textAlign,
												].join();
											(u = g !== this.oldTextWidth) &&
												!(u = g > this.oldTextWidth) &&
												((u = this.textPxLength) ||
													(s(e, {width: '', whiteSpace: p || 'nowrap'}),
													(u = e.offsetWidth)),
												(u = u > g)),
												u && /[ \-]/.test(e.textContent || e.innerText)
													? (s(e, {
															width: g + 'px',
															display: 'block',
															whiteSpace: p || 'normal',
													  }),
													  (this.oldTextWidth = g),
													  (this.hasBoxWidthChanged = !0))
													: (this.hasBoxWidthChanged = !1),
												m !== this.cTT &&
													((p = t.fontMetrics(e.style.fontSize).b),
													!n(f) ||
														(f === (this.oldRotation || 0) &&
															l === this.oldAlign) ||
														this.setSpanRotation(f, c, p),
													this.getSpanCorrection(
														(!n(f) && this.textPxLength) || e.offsetWidth,
														p,
														c,
														f,
														l
													)),
												s(e, {
													left: a + (this.xCorr || 0) + 'px',
													top: h + (this.yCorr || 0) + 'px',
												}),
												(this.cTT = m),
												(this.oldRotation = f),
												(this.oldAlign = l);
										}
									} else this.alignOnAdd = !0;
								},
								setSpanRotation: function (t, e, i) {
									var n = {},
										o = this.renderer.getTransformKey();
									(n[o] = n.transform = 'rotate(' + t + 'deg)'),
										(n[o + (a ? 'Origin' : '-origin')] = n.transformOrigin =
											100 * e + '% ' + i + 'px'),
										s(this.element, n);
								},
								getSpanCorrection: function (t, e, i) {
									(this.xCorr = -t * i), (this.yCorr = -e);
								},
							}),
								r(p.prototype, {
									getTransformKey: function () {
										return h && !/Edge/.test(u.navigator.userAgent)
											? '-ms-transform'
											: l
											? '-webkit-transform'
											: a
											? 'MozTransform'
											: u.opera
											? '-o-transform'
											: '';
									},
									html: function (t, s, n) {
										var a = this.createElement('span'),
											h = a.element,
											l = a.renderer,
											d = l.isSVG,
											p = function (t, e) {
												o(['opacity', 'visibility'], function (i) {
													f(t, i + 'Setter', function (t, i, s, n) {
														t.call(this, i, s, n), (e[s] = i);
													});
												}),
													(t.addedSetters = !0);
											};
										return (
											(a.textSetter = function (t) {
												t !== h.innerHTML && delete this.bBox,
													(this.textStr = t),
													(h.innerHTML = c(t, '')),
													(a.doTransform = !0);
											}),
											d && p(a, a.element.style),
											(a.xSetter =
												a.ySetter =
												a.alignSetter =
												a.rotationSetter =
													function (t, e) {
														'align' === e && (e = 'textAlign'),
															(a[e] = t),
															(a.doTransform = !0);
													}),
											(a.afterSetters = function () {
												this.doTransform &&
													(this.htmlUpdateTransform(), (this.doTransform = !1));
											}),
											a
												.attr({text: t, x: Math.round(s), y: Math.round(n)})
												.css({
													fontFamily: this.style.fontFamily,
													fontSize: this.style.fontSize,
													position: 'absolute',
												}),
											(h.style.whiteSpace = 'nowrap'),
											(a.css = a.htmlCss),
											d &&
												(a.add = function (t) {
													var s,
														n = l.box.parentNode,
														c = [];
													if ((this.parentGroup = t)) {
														if (!(s = t.div)) {
															for (; t; ) c.push(t), (t = t.parentGroup);
															o(c.reverse(), function (t) {
																function o(e, i) {
																	(t[i] = e),
																		'translateX' === i
																			? (h.left = e + 'px')
																			: (h.top = e + 'px'),
																		(t.doTransform = !0);
																}
																var h,
																	l = e(t.element, 'class');
																l && (l = {className: l}),
																	(s = t.div =
																		t.div ||
																		i(
																			'div',
																			l,
																			{
																				position: 'absolute',
																				left: (t.translateX || 0) + 'px',
																				top: (t.translateY || 0) + 'px',
																				display: t.display,
																				opacity: t.opacity,
																				pointerEvents:
																					t.styles && t.styles.pointerEvents,
																			},
																			s || n
																		)),
																	(h = s.style),
																	r(t, {
																		classSetter: (function (t) {
																			return function (e) {
																				this.element.setAttribute('class', e),
																					(t.className = e);
																			};
																		})(s),
																		on: function () {
																			return (
																				c[0].div &&
																					a.on.apply(
																						{element: c[0].div},
																						arguments
																					),
																				t
																			);
																		},
																		translateXSetter: o,
																		translateYSetter: o,
																	}),
																	t.addedSetters || p(t, h);
															});
														}
													} else s = n;
													return (
														s.appendChild(h),
														(a.added = !0),
														a.alignOnAdd && a.htmlUpdateTransform(),
														a
													);
												}),
											a
										);
									},
								});
						})(c),
						(function (t) {
							var e = t.defined,
								i = t.each,
								s = t.extend,
								n = t.merge,
								o = t.pick,
								r = t.timeUnits,
								a = t.win;
							(t.Time = function (t) {
								this.update(t, !1);
							}),
								(t.Time.prototype = {
									defaultOptions: {},
									update: function (t) {
										var e = o(t && t.useUTC, !0),
											i = this;
										(this.options = t = n(!0, this.options || {}, t)),
											(this.Date = t.Date || a.Date),
											(this.timezoneOffset =
												(this.useUTC = e) && t.timezoneOffset),
											(this.getTimezoneOffset = this.timezoneOffsetFunction()),
											(this.variableTimezone = !(
												e &&
												!t.getTimezoneOffset &&
												!t.timezone
											)) || this.timezoneOffset
												? ((this.get = function (t, e) {
														var s = e.getTime(),
															n = s - i.getTimezoneOffset(e);
														return (
															e.setTime(n),
															(t = e['getUTC' + t]()),
															e.setTime(s),
															t
														);
												  }),
												  (this.set = function (t, e, s) {
														var n;
														'Milliseconds' === t ||
														'Seconds' === t ||
														('Minutes' === t && 0 == e.getTimezoneOffset() % 60)
															? e['set' + t](s)
															: ((n = i.getTimezoneOffset(e)),
															  (n = e.getTime() - n),
															  e.setTime(n),
															  e['setUTC' + t](s),
															  (t = i.getTimezoneOffset(e)),
															  (n = e.getTime() + t),
															  e.setTime(n));
												  }))
												: e
												? ((this.get = function (t, e) {
														return e['getUTC' + t]();
												  }),
												  (this.set = function (t, e, i) {
														return e['setUTC' + t](i);
												  }))
												: ((this.get = function (t, e) {
														return e['get' + t]();
												  }),
												  (this.set = function (t, e, i) {
														return e['set' + t](i);
												  }));
									},
									makeTime: function (e, i, s, n, r, a) {
										var h, l, c;
										return (
											this.useUTC
												? ((h = this.Date.UTC.apply(0, arguments)),
												  (h += l = this.getTimezoneOffset(h)),
												  l !== (c = this.getTimezoneOffset(h))
														? (h += c - l)
														: l - 36e5 !== this.getTimezoneOffset(h - 36e5) ||
														  t.isSafari ||
														  (h -= 36e5))
												: (h = new this.Date(
														e,
														i,
														o(s, 1),
														o(n, 0),
														o(r, 0),
														o(a, 0)
												  ).getTime()),
											h
										);
									},
									timezoneOffsetFunction: function () {
										var e = this,
											i = this.options,
											s = a.moment;
										if (!this.useUTC)
											return function (t) {
												return 6e4 * new Date(t).getTimezoneOffset();
											};
										if (i.timezone) {
											if (s)
												return function (t) {
													return 6e4 * -s.tz(t, i.timezone).utcOffset();
												};
											t.error(25);
										}
										return this.useUTC && i.getTimezoneOffset
											? function (t) {
													return 6e4 * i.getTimezoneOffset(t);
											  }
											: function () {
													return 6e4 * (e.timezoneOffset || 0);
											  };
									},
									dateFormat: function (e, i, s) {
										if (!t.defined(i) || isNaN(i))
											return t.defaultOptions.lang.invalidDate || '';
										e = t.pick(e, '%Y-%m-%d %H:%M:%S');
										var n = this,
											o = new this.Date(i),
											r = this.get('Hours', o),
											a = this.get('Day', o),
											h = this.get('Date', o),
											l = this.get('Month', o),
											c = this.get('FullYear', o),
											d = t.defaultOptions.lang,
											p = d.weekdays,
											u = d.shortWeekdays,
											f = t.pad;
										return (
											(o = t.extend(
												{
													a: u ? u[a] : p[a].substr(0, 3),
													A: p[a],
													d: f(h),
													e: f(h, 2, ' '),
													w: a,
													b: d.shortMonths[l],
													B: d.months[l],
													m: f(l + 1),
													o: l + 1,
													y: c.toString().substr(2, 2),
													Y: c,
													H: f(r),
													k: r,
													I: f(r % 12 || 12),
													l: r % 12 || 12,
													M: f(n.get('Minutes', o)),
													p: 12 > r ? 'AM' : 'PM',
													P: 12 > r ? 'am' : 'pm',
													S: f(o.getSeconds()),
													L: f(Math.floor(i % 1e3), 3),
												},
												t.dateFormats
											)),
											t.objectEach(o, function (t, s) {
												for (; -1 !== e.indexOf('%' + s); )
													e = e.replace(
														'%' + s,
														'function' == typeof t ? t.call(n, i) : t
													);
											}),
											s ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
										);
									},
									resolveDTLFormat: function (e) {
										return t.isObject(e, !0)
											? e
											: {main: (e = t.splat(e))[0], from: e[1], to: e[2]};
									},
									getTimeTicks: function (t, n, a, h) {
										var l,
											c,
											d = this,
											p = [],
											u = {};
										l = new d.Date(n);
										var f,
											g = t.unitRange,
											m = t.count || 1;
										if (((h = o(h, 1)), e(n))) {
											d.set(
												'Milliseconds',
												l,
												g >= r.second
													? 0
													: m * Math.floor(d.get('Milliseconds', l) / m)
											),
												g >= r.second &&
													d.set(
														'Seconds',
														l,
														g >= r.minute
															? 0
															: m * Math.floor(d.get('Seconds', l) / m)
													),
												g >= r.minute &&
													d.set(
														'Minutes',
														l,
														g >= r.hour
															? 0
															: m * Math.floor(d.get('Minutes', l) / m)
													),
												g >= r.hour &&
													d.set(
														'Hours',
														l,
														g >= r.day
															? 0
															: m * Math.floor(d.get('Hours', l) / m)
													),
												g >= r.day &&
													d.set(
														'Date',
														l,
														g >= r.month
															? 1
															: m * Math.floor(d.get('Date', l) / m)
													),
												g >= r.month &&
													(d.set(
														'Month',
														l,
														g >= r.year
															? 0
															: m * Math.floor(d.get('Month', l) / m)
													),
													(c = d.get('FullYear', l))),
												g >= r.year && d.set('FullYear', l, c - (c % m)),
												g === r.week &&
													((c = d.get('Day', l)),
													d.set(
														'Date',
														l,
														d.get('Date', l) - c + h + (c < h ? -7 : 0)
													)),
												(c = d.get('FullYear', l)),
												(h = d.get('Month', l));
											var x = d.get('Date', l),
												v = d.get('Hours', l);
											for (
												n = l.getTime(),
													d.variableTimezone &&
														(f =
															a - n > 4 * r.month ||
															d.getTimezoneOffset(n) !==
																d.getTimezoneOffset(a)),
													n = l.getTime(),
													l = 1;
												n < a;

											)
												p.push(n),
													(n =
														g === r.year
															? d.makeTime(c + l * m, 0)
															: g === r.month
															? d.makeTime(c, h + l * m)
															: !f || (g !== r.day && g !== r.week)
															? f && g === r.hour && 1 < m
																? d.makeTime(c, h, x, v + l * m)
																: n + g * m
															: d.makeTime(
																	c,
																	h,
																	x + l * m * (g === r.day ? 1 : 7)
															  )),
													l++;
											p.push(n),
												g <= r.hour &&
													1e4 > p.length &&
													i(p, function (t) {
														0 == t % 18e5 &&
															'000000000' === d.dateFormat('%H%M%S%L', t) &&
															(u[t] = 'day');
													});
										}
										return (
											(p.info = s(t, {higherRanks: u, totalRange: g * m})), p
										);
									},
								});
						})(c),
						(function (t) {
							var e = t.color,
								i = t.merge;
							(t.defaultOptions = {
								colors:
									'#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1'.split(
										' '
									),
								symbols: [
									'circle',
									'diamond',
									'square',
									'triangle',
									'triangle-down',
								],
								lang: {
									loading: 'Loading...',
									months:
										'January February March April May June July August September October November December'.split(
											' '
										),
									shortMonths:
										'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(
											' '
										),
									weekdays:
										'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(
											' '
										),
									decimalPoint: '.',
									numericSymbols: 'kMGTPE'.split(''),
									resetZoom: 'Reset zoom',
									resetZoomTitle: 'Reset zoom level 1:1',
									thousandsSep: ' ',
								},
								global: {},
								time: t.Time.prototype.defaultOptions,
								chart: {
									borderRadius: 0,
									defaultSeriesType: 'line',
									ignoreHiddenSeries: !0,
									spacing: [10, 10, 15, 10],
									resetZoomButton: {
										theme: {zIndex: 6},
										position: {align: 'right', x: -10, y: 10},
									},
									width: null,
									height: null,
									borderColor: '#335cad',
									backgroundColor: '#ffffff',
									plotBorderColor: '#cccccc',
								},
								title: {
									text: 'Chart title',
									align: 'center',
									margin: 15,
									widthAdjust: -44,
								},
								subtitle: {text: '', align: 'center', widthAdjust: -44},
								plotOptions: {},
								labels: {style: {position: 'absolute', color: '#333333'}},
								legend: {
									enabled: !0,
									align: 'center',
									alignColumns: !0,
									layout: 'horizontal',
									labelFormatter: function () {
										return this.name;
									},
									borderColor: '#999999',
									borderRadius: 0,
									navigation: {
										activeColor: '#003399',
										inactiveColor: '#cccccc',
									},
									itemStyle: {
										color: '#333333',
										fontSize: '12px',
										fontWeight: 'bold',
										textOverflow: 'ellipsis',
									},
									itemHoverStyle: {color: '#000000'},
									itemHiddenStyle: {color: '#cccccc'},
									shadow: !1,
									itemCheckboxStyle: {
										position: 'absolute',
										width: '13px',
										height: '13px',
									},
									squareSymbol: !0,
									symbolPadding: 5,
									verticalAlign: 'bottom',
									x: 0,
									y: 0,
									title: {style: {fontWeight: 'bold'}},
								},
								loading: {
									labelStyle: {
										fontWeight: 'bold',
										position: 'relative',
										top: '45%',
									},
									style: {
										position: 'absolute',
										backgroundColor: '#ffffff',
										opacity: 0.5,
										textAlign: 'center',
									},
								},
								tooltip: {
									enabled: !0,
									animation: t.svg,
									borderRadius: 3,
									dateTimeLabelFormats: {
										millisecond: '%A, %b %e, %H:%M:%S.%L',
										second: '%A, %b %e, %H:%M:%S',
										minute: '%A, %b %e, %H:%M',
										hour: '%A, %b %e, %H:%M',
										day: '%A, %b %e, %Y',
										week: 'Week from %A, %b %e, %Y',
										month: '%B %Y',
										year: '%Y',
									},
									footerFormat: '',
									padding: 8,
									snap: t.isTouchDevice ? 25 : 10,
									backgroundColor: e('#f7f7f7').setOpacity(0.85).get(),
									borderWidth: 1,
									headerFormat:
										'<span style="font-size: 10px">{point.key}</span><br/>',
									pointFormat:
										'<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
									shadow: !0,
									style: {
										color: '#333333',
										cursor: 'default',
										fontSize: '12px',
										pointerEvents: 'none',
										whiteSpace: 'nowrap',
									},
								},
								credits: {
									enabled: !0,
									href: 'https://www.highcharts.com',
									position: {
										align: 'right',
										x: -10,
										verticalAlign: 'bottom',
										y: -5,
									},
									style: {cursor: 'pointer', color: '#999999', fontSize: '9px'},
									text: 'Highcharts.com',
								},
							}),
								(t.setOptions = function (e) {
									return (
										(t.defaultOptions = i(!0, t.defaultOptions, e)),
										t.time.update(
											i(t.defaultOptions.global, t.defaultOptions.time),
											!1
										),
										t.defaultOptions
									);
								}),
								(t.getOptions = function () {
									return t.defaultOptions;
								}),
								(t.defaultPlotOptions = t.defaultOptions.plotOptions),
								(t.time = new t.Time(
									i(t.defaultOptions.global, t.defaultOptions.time)
								)),
								(t.dateFormat = function (e, i, s) {
									return t.time.dateFormat(e, i, s);
								});
						})(c),
						(function (t) {
							var e = t.correctFloat,
								i = t.defined,
								s = t.destroyObjectProperties,
								n = t.fireEvent,
								o = t.isNumber,
								r = t.merge,
								a = t.pick,
								h = t.deg2rad;
							(t.Tick = function (t, e, i, s, n) {
								(this.axis = t),
									(this.pos = e),
									(this.type = i || ''),
									(this.isNewLabel = this.isNew = !0),
									(this.parameters = n || {}),
									(this.tickmarkOffset = this.parameters.tickmarkOffset),
									(this.options = this.parameters.options),
									i || s || this.addLabel();
							}),
								(t.Tick.prototype = {
									addLabel: function () {
										var s,
											n,
											o,
											h,
											l = this,
											c = l.axis,
											d = c.options,
											p = c.chart,
											u = c.categories,
											f = c.names,
											g = l.pos,
											m = a(l.options && l.options.labels, d.labels),
											x = g === (b = c.tickPositions)[0],
											v = g === b[b.length - 1],
											y =
												((u =
													this.parameters.category ||
													(u ? a(u[g], f[g], g) : g)),
												l.label),
											b = b.info;
										c.isDatetimeAxis &&
											b &&
											(s = (n = p.time.resolveDTLFormat(
												d.dateTimeLabelFormats[
													(!d.grid && b.higherRanks[g]) || b.unitName
												]
											)).main),
											(l.isFirst = x),
											(l.isLast = v),
											(l.formatCtx = {
												axis: c,
												chart: p,
												isFirst: x,
												isLast: v,
												dateTimeLabelFormat: s,
												tickPositionInfo: b,
												value: c.isLog ? e(c.lin2log(u)) : u,
												pos: g,
											}),
											(d = c.labelFormatter.call(l.formatCtx, this.formatCtx)),
											(h = n && n.list) &&
												(l.shortenLabel = function () {
													for (o = 0; o < h.length; o++)
														if (
															(y.attr({
																text: c.labelFormatter.call(
																	t.extend(l.formatCtx, {
																		dateTimeLabelFormat: h[o],
																	})
																),
															}),
															y.getBBox().width <
																c.getSlotWidth(l) - 2 * a(m.padding, 5))
														)
															return;
													y.attr({text: ''});
												}),
											i(y)
												? y &&
												  y.textStr !== d &&
												  (!y.textWidth ||
														(m.style && m.style.width) ||
														y.styles.width ||
														y.css({width: null}),
												  y.attr({text: d}))
												: ((l.label = y =
														i(d) && m.enabled
															? p.renderer
																	.text(d, 0, 0, m.useHTML)
																	.css(r(m.style))
																	.add(c.labelGroup)
															: null) && (y.textPxLength = y.getBBox().width),
												  (l.rotation = 0));
									},
									getLabelSize: function () {
										return this.label
											? this.label.getBBox()[
													this.axis.horiz ? 'height' : 'width'
											  ]
											: 0;
									},
									handleOverflow: function (t) {
										var e,
											i = this.axis,
											s = i.options.labels,
											n = t.x,
											o = i.chart.chartWidth,
											r = i.chart.spacing,
											l = a(i.labelLeft, Math.min(i.pos, r[3])),
											c =
												((r = a(
													i.labelRight,
													Math.max(i.isRadial ? 0 : i.pos + i.len, o - r[1])
												)),
												this.label),
											d = this.rotation,
											p = {left: 0, center: 0.5, right: 1}[
												i.labelAlign || c.attr('align')
											],
											u = c.getBBox().width,
											f = i.getSlotWidth(this),
											g = f,
											m = 1,
											x = {};
										d || 'justify' !== a(s.overflow, 'justify')
											? 0 > d && n - p * u < l
												? (e = Math.round(n / Math.cos(d * h) - l))
												: 0 < d &&
												  n + p * u > r &&
												  (e = Math.round((o - n) / Math.cos(d * h)))
											: ((o = n + (1 - p) * u),
											  n - p * u < l
													? (g = t.x + g * (1 - p) - l)
													: o > r && ((g = r - t.x + g * p), (m = -1)),
											  (g = Math.min(f, g)) < f &&
													'center' === i.labelAlign &&
													(t.x += m * (f - g - p * (f - Math.min(u, g)))),
											  (u > g || (i.autoRotation && (c.styles || {}).width)) &&
													(e = g)),
											e &&
												(this.shortenLabel
													? this.shortenLabel()
													: ((x.width = e),
													  (s.style || {}).textOverflow ||
															(x.textOverflow = 'ellipsis'),
													  c.css(x)));
									},
									getPosition: function (e, i, s, o) {
										var r = this.axis,
											a = r.chart,
											h = (o && a.oldChartHeight) || a.chartHeight;
										return (
											(e = {
												x: e
													? t.correctFloat(
															r.translate(i + s, null, null, o) + r.transB
													  )
													: r.left +
													  r.offset +
													  (r.opposite
															? ((o && a.oldChartWidth) || a.chartWidth) -
															  r.right -
															  r.left
															: 0),
												y: e
													? h -
													  r.bottom +
													  r.offset -
													  (r.opposite ? r.height : 0)
													: t.correctFloat(
															h - r.translate(i + s, null, null, o) - r.transB
													  ),
											}),
											n(this, 'afterGetPosition', {pos: e}),
											e
										);
									},
									getLabelPosition: function (t, e, s, o, r, a, l, c) {
										var d = this.axis,
											p = d.transA,
											u = d.reversed,
											f = d.staggerLines,
											g = d.tickRotCorr || {x: 0, y: 0},
											m = r.y,
											x =
												o || d.reserveSpaceDefault
													? 0
													: -d.labelOffset *
													  ('center' === d.labelAlign ? 0.5 : 1),
											v = {};
										return (
											i(m) ||
												(m =
													0 === d.side
														? s.rotation
															? -8
															: -s.getBBox().height
														: 2 === d.side
														? g.y + 8
														: Math.cos(s.rotation * h) *
														  (g.y - s.getBBox(!1, 0).height / 2)),
											(t =
												t +
												r.x +
												x +
												g.x -
												(a && o ? a * p * (u ? -1 : 1) : 0)),
											(e = e + m - (a && !o ? a * p * (u ? 1 : -1) : 0)),
											f &&
												((s = (l / (c || 1)) % f),
												d.opposite && (s = f - s - 1),
												(e += (d.labelOffset / f) * s)),
											(v.x = t),
											(v.y = Math.round(e)),
											n(this, 'afterGetLabelPosition', {pos: v}),
											v
										);
									},
									getMarkPath: function (t, e, i, s, n, o) {
										return o.crispLine(
											['M', t, e, 'L', t + (n ? 0 : -i), e + (n ? i : 0)],
											s
										);
									},
									renderGridLine: function (t, e, i) {
										var s = this.axis,
											n = s.options,
											o = this.gridLine,
											r = {},
											h = this.pos,
											l = this.type,
											c = a(this.tickmarkOffset, s.tickmarkOffset),
											d = s.chart.renderer,
											p = l ? l + 'Grid' : 'grid',
											u = n[p + 'LineWidth'],
											f = n[p + 'LineColor'];
										(n = n[p + 'LineDashStyle']),
											o ||
												((r.stroke = f),
												(r['stroke-width'] = u),
												n && (r.dashstyle = n),
												l || (r.zIndex = 1),
												t && (e = 0),
												(this.gridLine = o =
													d
														.path()
														.attr(r)
														.addClass(
															'highcharts-' + (l ? l + '-' : '') + 'grid-line'
														)
														.add(s.gridGroup))),
											o &&
												(i = s.getPlotLinePath(
													h + c,
													o.strokeWidth() * i,
													t,
													'pass'
												)) &&
												o[t || this.isNew ? 'attr' : 'animate']({
													d: i,
													opacity: e,
												});
									},
									renderMark: function (t, e, i) {
										var s = this.axis,
											n = s.options,
											o = s.chart.renderer,
											r = this.type,
											h = r ? r + 'Tick' : 'tick',
											l = s.tickSize(h),
											c = this.mark,
											d = !c,
											p = t.x;
										t = t.y;
										var u = a(n[h + 'Width'], !r && s.isXAxis ? 1 : 0);
										(n = n[h + 'Color']),
											l &&
												(s.opposite && (l[0] = -l[0]),
												d &&
													((this.mark = c =
														o
															.path()
															.addClass(
																'highcharts-' + (r ? r + '-' : '') + 'tick'
															)
															.add(s.axisGroup)),
													c.attr({stroke: n, 'stroke-width': u})),
												c[d ? 'attr' : 'animate']({
													d: this.getMarkPath(
														p,
														t,
														l[0],
														c.strokeWidth() * i,
														s.horiz,
														o
													),
													opacity: e,
												}));
									},
									renderLabel: function (t, e, i, s) {
										var n = (d = this.axis).horiz,
											r = d.options,
											h = this.label,
											l = r.labels,
											c = l.step,
											d = a(this.tickmarkOffset, d.tickmarkOffset),
											p = !0,
											u = t.x;
										(t = t.y),
											h &&
												o(u) &&
												((h.xy = t =
													this.getLabelPosition(u, t, h, n, l, d, s, c)),
												(this.isFirst &&
													!this.isLast &&
													!a(r.showFirstLabel, 1)) ||
												(this.isLast && !this.isFirst && !a(r.showLastLabel, 1))
													? (p = !1)
													: !n ||
													  l.step ||
													  l.rotation ||
													  e ||
													  0 === i ||
													  this.handleOverflow(t),
												c && s % c && (p = !1),
												p && o(t.y)
													? ((t.opacity = i),
													  h[this.isNewLabel ? 'attr' : 'animate'](t),
													  (this.isNewLabel = !1))
													: (h.attr('y', -9999), (this.isNewLabel = !0)));
									},
									render: function (e, i, s) {
										var n = (l = this.axis).horiz,
											o = this.pos,
											r = a(this.tickmarkOffset, l.tickmarkOffset),
											h = ((r = (o = this.getPosition(n, o, r, i)).x), o.y),
											l =
												(n && r === l.pos + l.len) || (!n && h === l.pos)
													? -1
													: 1;
										(s = a(s, 1)),
											(this.isActive = !0),
											this.renderGridLine(i, s, l),
											this.renderMark(o, s, l),
											this.renderLabel(o, i, s, e),
											(this.isNew = !1),
											t.fireEvent(this, 'afterRender');
									},
									destroy: function () {
										s(this, this.axis);
									},
								});
						})(c);
					var d = (function (t) {
						var e = t.addEvent,
							i = t.animObject,
							s = t.arrayMax,
							n = t.arrayMin,
							o = t.color,
							r = t.correctFloat,
							a = t.defaultOptions,
							h = t.defined,
							l = t.deg2rad,
							c = t.destroyObjectProperties,
							d = t.each,
							p = t.extend,
							u = t.fireEvent,
							f = t.format,
							g = t.getMagnitude,
							m = t.grep,
							x = t.inArray,
							v = t.isArray,
							y = t.isNumber,
							b = t.isString,
							k = t.merge,
							w = t.normalizeTickInterval,
							M = t.objectEach,
							S = t.pick,
							T = t.removeEvent,
							A = t.splat,
							L = t.syncTimeout,
							P = t.Tick,
							C = function () {
								this.init.apply(this, arguments);
							};
						return (
							t.extend(C.prototype, {
								defaultOptions: {
									dateTimeLabelFormats: {
										millisecond: {main: '%H:%M:%S.%L', range: !1},
										second: {main: '%H:%M:%S', range: !1},
										minute: {main: '%H:%M', range: !1},
										hour: {main: '%H:%M', range: !1},
										day: {main: '%e. %b'},
										week: {main: '%e. %b'},
										month: {main: "%b '%y"},
										year: {main: '%Y'},
									},
									endOnTick: !1,
									labels: {
										enabled: !0,
										indentation: 10,
										x: 0,
										style: {
											color: '#666666',
											cursor: 'default',
											fontSize: '11px',
										},
									},
									maxPadding: 0.01,
									minorTickLength: 2,
									minorTickPosition: 'outside',
									minPadding: 0.01,
									startOfWeek: 1,
									startOnTick: !1,
									tickLength: 10,
									tickPixelInterval: 100,
									tickmarkPlacement: 'between',
									tickPosition: 'outside',
									title: {align: 'middle', style: {color: '#666666'}},
									type: 'linear',
									minorGridLineColor: '#f2f2f2',
									minorGridLineWidth: 1,
									minorTickColor: '#999999',
									lineColor: '#ccd6eb',
									lineWidth: 1,
									gridLineColor: '#e6e6e6',
									tickColor: '#ccd6eb',
								},
								defaultYAxisOptions: {
									endOnTick: !0,
									maxPadding: 0.05,
									minPadding: 0.05,
									tickPixelInterval: 72,
									showLastLabel: !0,
									labels: {x: -8},
									startOnTick: !0,
									title: {rotation: 270, text: 'Values'},
									stackLabels: {
										allowOverlap: !1,
										enabled: !1,
										formatter: function () {
											return t.numberFormat(this.total, -1);
										},
										style: {
											color: '#000000',
											fontSize: '11px',
											fontWeight: 'bold',
											textOutline: '1px contrast',
										},
									},
									gridLineWidth: 1,
									lineWidth: 0,
								},
								defaultLeftAxisOptions: {
									labels: {x: -15},
									title: {rotation: 270},
								},
								defaultRightAxisOptions: {
									labels: {x: 15},
									title: {rotation: 90},
								},
								defaultBottomAxisOptions: {
									labels: {autoRotation: [-45], x: 0},
									title: {rotation: 0},
								},
								defaultTopAxisOptions: {
									labels: {autoRotation: [-45], x: 0},
									title: {rotation: 0},
								},
								init: function (t, i) {
									var s = i.isX,
										n = this;
									(n.chart = t),
										(n.horiz = t.inverted && !n.isZAxis ? !s : s),
										(n.isXAxis = s),
										(n.coll = n.coll || (s ? 'xAxis' : 'yAxis')),
										u(this, 'init', {userOptions: i}),
										(n.opposite = i.opposite),
										(n.side =
											i.side ||
											(n.horiz ? (n.opposite ? 0 : 2) : n.opposite ? 1 : 3)),
										n.setOptions(i);
									var o = this.options,
										r = o.type;
									(n.labelFormatter =
										o.labels.formatter || n.defaultLabelFormatter),
										(n.userOptions = i),
										(n.minPixelPadding = 0),
										(n.reversed = o.reversed),
										(n.visible = !1 !== o.visible),
										(n.zoomEnabled = !1 !== o.zoomEnabled),
										(n.hasNames = 'category' === r || !0 === o.categories),
										(n.categories = o.categories || n.hasNames),
										n.names || ((n.names = []), (n.names.keys = {})),
										(n.plotLinesAndBandsGroups = {}),
										(n.isLog = 'logarithmic' === r),
										(n.isDatetimeAxis = 'datetime' === r),
										(n.positiveValuesOnly = n.isLog && !n.allowNegativeLog),
										(n.isLinked = h(o.linkedTo)),
										(n.ticks = {}),
										(n.labelEdge = []),
										(n.minorTicks = {}),
										(n.plotLinesAndBands = []),
										(n.alternateBands = {}),
										(n.len = 0),
										(n.minRange = n.userMinRange = o.minRange || o.maxZoom),
										(n.range = o.range),
										(n.offset = o.offset || 0),
										(n.stacks = {}),
										(n.oldStacks = {}),
										(n.stacksTouched = 0),
										(n.max = null),
										(n.min = null),
										(n.crosshair = S(
											o.crosshair,
											A(t.options.tooltip.crosshairs)[s ? 0 : 1],
											!1
										)),
										(i = n.options.events),
										-1 === x(n, t.axes) &&
											(s ? t.axes.splice(t.xAxis.length, 0, n) : t.axes.push(n),
											t[n.coll].push(n)),
										(n.series = n.series || []),
										t.inverted &&
											!n.isZAxis &&
											s &&
											void 0 === n.reversed &&
											(n.reversed = !0),
										M(i, function (t, i) {
											e(n, i, t);
										}),
										(n.lin2log = o.linearToLogConverter || n.lin2log),
										n.isLog &&
											((n.val2lin = n.log2lin), (n.lin2val = n.lin2log)),
										u(this, 'afterInit');
								},
								setOptions: function (t) {
									(this.options = k(
										this.defaultOptions,
										'yAxis' === this.coll && this.defaultYAxisOptions,
										[
											this.defaultTopAxisOptions,
											this.defaultRightAxisOptions,
											this.defaultBottomAxisOptions,
											this.defaultLeftAxisOptions,
										][this.side],
										k(a[this.coll], t)
									)),
										u(this, 'afterSetOptions', {userOptions: t});
								},
								defaultLabelFormatter: function () {
									var e,
										i = this.axis,
										s = this.value,
										n = i.chart.time,
										o = i.categories,
										r = this.dateTimeLabelFormat,
										h = (l = a.lang).numericSymbols,
										l = l.numericSymbolMagnitude || 1e3,
										c = h && h.length,
										d = i.options.labels.format;
									if (((i = i.isLog ? Math.abs(s) : i.tickInterval), d))
										e = f(d, this, n);
									else if (o) e = s;
									else if (r) e = n.dateFormat(r, s);
									else if (c && 1e3 <= i)
										for (; c-- && void 0 === e; )
											i >= (n = Math.pow(l, c + 1)) &&
												0 == (10 * s) % n &&
												null !== h[c] &&
												0 !== s &&
												(e = t.numberFormat(s / n, -1) + h[c]);
									return (
										void 0 === e &&
											(e =
												1e4 <= Math.abs(s)
													? t.numberFormat(s, -1)
													: t.numberFormat(s, -1, void 0, '')),
										e
									);
								},
								getSeriesExtremes: function () {
									var t = this,
										e = t.chart;
									u(this, 'getSeriesExtremes', null, function () {
										(t.hasVisibleSeries = !1),
											(t.dataMin = t.dataMax = t.threshold = null),
											(t.softThreshold = !t.isXAxis),
											t.buildStacks && t.buildStacks(),
											d(t.series, function (i) {
												if (i.visible || !e.options.chart.ignoreHiddenSeries) {
													var o,
														r = i.options,
														a = r.threshold;
													(t.hasVisibleSeries = !0),
														t.positiveValuesOnly && 0 >= a && (a = null),
														t.isXAxis
															? (r = i.xData).length &&
															  ((i = n(r)),
															  (o = s(r)),
															  y(i) ||
																	i instanceof Date ||
																	((r = m(r, y)), (i = n(r)), (o = s(r))),
															  r.length &&
																	((t.dataMin = Math.min(
																		S(t.dataMin, r[0], i),
																		i
																	)),
																	(t.dataMax = Math.max(
																		S(t.dataMax, r[0], o),
																		o
																	))))
															: (i.getExtremes(),
															  (o = i.dataMax),
															  (i = i.dataMin),
															  h(i) &&
																	h(o) &&
																	((t.dataMin = Math.min(S(t.dataMin, i), i)),
																	(t.dataMax = Math.max(S(t.dataMax, o), o))),
															  h(a) && (t.threshold = a),
															  (!r.softThreshold || t.positiveValuesOnly) &&
																	(t.softThreshold = !1));
												}
											});
									}),
										u(this, 'afterGetSeriesExtremes');
								},
								translate: function (t, e, i, s, n, o) {
									var r = this.linkedParent || this,
										a = 1,
										h = 0,
										l = s ? r.oldTransA : r.transA;
									s = s ? r.oldMin : r.min;
									var c = r.minPixelPadding;
									return (
										(n =
											(r.isOrdinal || r.isBroken || (r.isLog && n)) &&
											r.lin2val),
										l || (l = r.transA),
										i && ((a *= -1), (h = r.len)),
										r.reversed && (h -= (a *= -1) * (r.sector || r.len)),
										e
											? ((t = (t * a + h - c) / l + s), n && (t = r.lin2val(t)))
											: (n && (t = r.val2lin(t)),
											  (t = y(s)
													? a * (t - s) * l + h + a * c + (y(o) ? l * o : 0)
													: void 0)),
										t
									);
								},
								toPixels: function (t, e) {
									return (
										this.translate(t, !1, !this.horiz, null, !0) +
										(e ? 0 : this.pos)
									);
								},
								toValue: function (t, e) {
									return this.translate(
										t - (e ? 0 : this.pos),
										!0,
										!this.horiz,
										null,
										!0
									);
								},
								getPlotLinePath: function (t, e, i, s, n) {
									var o,
										r,
										a,
										h = this.chart,
										l = this.left,
										c = this.top,
										d = (i && h.oldChartHeight) || h.chartHeight,
										p = (i && h.oldChartWidth) || h.chartWidth;
									o = this.transB;
									var u = function (t, e, i) {
										return (
											(('pass' !== s && t < e) || t > i) &&
												(s ? (t = Math.min(Math.max(e, t), i)) : (a = !0)),
											t
										);
									};
									return (
										(n = S(n, this.translate(t, null, null, i))),
										(n = Math.min(Math.max(-1e5, n), 1e5)),
										(t = i = Math.round(n + o)),
										(o = r = Math.round(d - n - o)),
										y(n)
											? this.horiz
												? ((o = c),
												  (r = d - this.bottom),
												  (t = i = u(t, l, l + this.width)))
												: ((t = l),
												  (i = p - this.right),
												  (o = r = u(o, c, c + this.height)))
											: ((a = !0), (s = !1)),
										a && !s
											? null
											: h.renderer.crispLine(['M', t, o, 'L', i, r], e || 1)
									);
								},
								getLinearTickPositions: function (t, e, i) {
									var s,
										n = r(Math.floor(e / t) * t);
									i = r(Math.ceil(i / t) * t);
									var o,
										a = [];
									if ((r(n + t) === n && (o = 20), this.single)) return [e];
									for (e = n; e <= i && (a.push(e), (e = r(e + t, o)) !== s); )
										s = e;
									return a;
								},
								getMinorTickInterval: function () {
									var t = this.options;
									return !0 === t.minorTicks
										? S(t.minorTickInterval, 'auto')
										: !1 === t.minorTicks
										? null
										: t.minorTickInterval;
								},
								getMinorTickPositions: function () {
									var t = this,
										e = t.options,
										i = t.tickPositions,
										s = t.minorTickInterval,
										n = [],
										o = t.pointRangePadding || 0,
										r = t.min - o,
										a = (o = t.max + o) - r;
									if (a && a / s < t.len / 3)
										if (t.isLog)
											d(this.paddedTicks, function (e, i, o) {
												i &&
													n.push.apply(
														n,
														t.getLogTickPositions(s, o[i - 1], o[i], !0)
													);
											});
										else if (
											t.isDatetimeAxis &&
											'auto' === this.getMinorTickInterval()
										)
											n = n.concat(
												t.getTimeTicks(
													t.normalizeTimeTickInterval(s),
													r,
													o,
													e.startOfWeek
												)
											);
										else
											for (
												e = r + ((i[0] - r) % s);
												e <= o && e !== n[0];
												e += s
											)
												n.push(e);
									return 0 !== n.length && t.trimTicks(n), n;
								},
								adjustForMinRange: function () {
									var t,
										e,
										i,
										o,
										r,
										a,
										l,
										c = this.options,
										p = this.min,
										u = this.max;
									this.isXAxis &&
										void 0 === this.minRange &&
										!this.isLog &&
										(h(c.min) || h(c.max)
											? (this.minRange = null)
											: (d(this.series, function (t) {
													for (
														a = t.xData, o = t.xIncrement ? 1 : a.length - 1;
														0 < o;
														o--
													)
														(r = a[o] - a[o - 1]),
															(void 0 === i || r < i) && (i = r);
											  }),
											  (this.minRange = Math.min(
													5 * i,
													this.dataMax - this.dataMin
											  )))),
										u - p < this.minRange &&
											((e = this.dataMax - this.dataMin >= this.minRange),
											(t = [
												p - (t = ((l = this.minRange) - u + p) / 2),
												S(c.min, p - t),
											]),
											e &&
												(t[2] = this.isLog
													? this.log2lin(this.dataMin)
													: this.dataMin),
											(u = [(p = s(t)) + l, S(c.max, p + l)]),
											e &&
												(u[2] = this.isLog
													? this.log2lin(this.dataMax)
													: this.dataMax),
											(u = n(u)) - p < l &&
												((t[0] = u - l), (t[1] = S(c.min, u - l)), (p = s(t)))),
										(this.min = p),
										(this.max = u);
								},
								getClosest: function () {
									var t;
									return (
										this.categories
											? (t = 1)
											: d(this.series, function (e) {
													var i = e.closestPointRange,
														s =
															e.visible ||
															!e.chart.options.chart.ignoreHiddenSeries;
													!e.noSharedTooltip &&
														h(i) &&
														s &&
														(t = h(t) ? Math.min(t, i) : i);
											  }),
										t
									);
								},
								nameToX: function (t) {
									var e,
										i = v(this.categories),
										s = i ? this.categories : this.names,
										n = t.options.x;
									return (
										(t.series.requireSorting = !1),
										h(n) ||
											(n =
												!1 === this.options.uniqueNames
													? t.series.autoIncrement()
													: i
													? x(t.name, s)
													: S(s.keys[t.name], -1)),
										-1 === n ? i || (e = s.length) : (e = n),
										void 0 !== e &&
											((this.names[e] = t.name), (this.names.keys[t.name] = e)),
										e
									);
								},
								updateNames: function () {
									var e = this,
										i = this.names;
									0 < i.length &&
										(d(t.keys(i.keys), function (t) {
											delete i.keys[t];
										}),
										(i.length = 0),
										(this.minRange = this.userMinRange),
										d(this.series || [], function (t) {
											(t.xIncrement = null),
												(t.points && !t.isDirtyData) ||
													(t.processData(), t.generatePoints()),
												d(t.points, function (i, s) {
													var n;
													i.options &&
														void 0 !== (n = e.nameToX(i)) &&
														n !== i.x &&
														((i.x = n), (t.xData[s] = n));
												});
										}));
								},
								setAxisTranslation: function (t) {
									var e,
										i = this,
										s = i.max - i.min,
										n = i.axisPointRange || 0,
										o = 0,
										r = 0,
										a = i.linkedParent,
										h = !!i.categories,
										l = i.transA,
										c = i.isXAxis;
									(c || h || n) &&
										((e = i.getClosest()),
										a
											? ((o = a.minPointOffset), (r = a.pointRangePadding))
											: d(i.series, function (t) {
													var s = h
														? 1
														: c
														? S(t.options.pointRange, e, 0)
														: i.axisPointRange || 0;
													(t = t.options.pointPlacement),
														(n = Math.max(n, s)),
														i.single ||
															((o = Math.max(o, b(t) ? 0 : s / 2)),
															(r = Math.max(r, 'on' === t ? 0 : s)));
											  }),
										(a = i.ordinalSlope && e ? i.ordinalSlope / e : 1),
										(i.minPointOffset = o *= a),
										(i.pointRangePadding = r *= a),
										(i.pointRange = Math.min(n, s)),
										c && (i.closestPointRange = e)),
										t && (i.oldTransA = l),
										(i.translationSlope =
											i.transA =
											l =
												i.staticScale || i.len / (s + r || 1)),
										(i.transB = i.horiz ? i.left : i.bottom),
										(i.minPixelPadding = l * o),
										u(this, 'afterSetAxisTranslation');
								},
								minFromRange: function () {
									return this.max - this.range;
								},
								setTickInterval: function (e) {
									var i,
										s,
										n,
										o,
										a = this,
										l = a.chart,
										c = a.options,
										p = a.isLog,
										f = a.isDatetimeAxis,
										m = a.isXAxis,
										x = a.isLinked,
										v = c.maxPadding,
										b = c.minPadding,
										k = c.tickInterval,
										M = c.tickPixelInterval,
										T = a.categories,
										A = y(a.threshold) ? a.threshold : null,
										L = a.softThreshold;
									f || T || x || this.getTickAmount(),
										(n = S(a.userMin, c.min)),
										(o = S(a.userMax, c.max)),
										x
											? ((a.linkedParent = l[a.coll][c.linkedTo]),
											  (l = a.linkedParent.getExtremes()),
											  (a.min = S(l.min, l.dataMin)),
											  (a.max = S(l.max, l.dataMax)),
											  c.type !== a.linkedParent.options.type &&
													t.error(11, 1))
											: (!L &&
													h(A) &&
													(a.dataMin >= A
														? ((i = A), (b = 0))
														: a.dataMax <= A && ((s = A), (v = 0))),
											  (a.min = S(n, i, a.dataMin)),
											  (a.max = S(o, s, a.dataMax))),
										p &&
											(a.positiveValuesOnly &&
												!e &&
												0 >= Math.min(a.min, S(a.dataMin, a.min)) &&
												t.error(10, 1),
											(a.min = r(a.log2lin(a.min), 15)),
											(a.max = r(a.log2lin(a.max), 15))),
										a.range &&
											h(a.max) &&
											((a.userMin =
												a.min =
												n =
													Math.max(a.dataMin, a.minFromRange())),
											(a.userMax = o = a.max),
											(a.range = null)),
										u(a, 'foundExtremes'),
										a.beforePadding && a.beforePadding(),
										a.adjustForMinRange(),
										!(T || a.axisPointRange || a.usePercentage || x) &&
											h(a.min) &&
											h(a.max) &&
											(l = a.max - a.min) &&
											(!h(n) && b && (a.min -= l * b),
											!h(o) && v && (a.max += l * v)),
										y(c.softMin) &&
											!y(a.userMin) &&
											(a.min = Math.min(a.min, c.softMin)),
										y(c.softMax) &&
											!y(a.userMax) &&
											(a.max = Math.max(a.max, c.softMax)),
										y(c.floor) && (a.min = Math.max(a.min, c.floor)),
										y(c.ceiling) && (a.max = Math.min(a.max, c.ceiling)),
										L &&
											h(a.dataMin) &&
											((A = A || 0),
											!h(n) && a.min < A && a.dataMin >= A
												? (a.min = A)
												: !h(o) && a.max > A && a.dataMax <= A && (a.max = A)),
										(a.tickInterval =
											a.min === a.max || void 0 === a.min || void 0 === a.max
												? 1
												: x &&
												  !k &&
												  M === a.linkedParent.options.tickPixelInterval
												? (k = a.linkedParent.tickInterval)
												: S(
														k,
														this.tickAmount
															? (a.max - a.min) /
																	Math.max(this.tickAmount - 1, 1)
															: void 0,
														T ? 1 : ((a.max - a.min) * M) / Math.max(a.len, M)
												  )),
										m &&
											!e &&
											d(a.series, function (t) {
												t.processData(a.min !== a.oldMin || a.max !== a.oldMax);
											}),
										a.setAxisTranslation(!0),
										a.beforeSetTickPositions && a.beforeSetTickPositions(),
										a.postProcessTickInterval &&
											(a.tickInterval = a.postProcessTickInterval(
												a.tickInterval
											)),
										a.pointRange &&
											!k &&
											(a.tickInterval = Math.max(a.pointRange, a.tickInterval)),
										(e = S(
											c.minTickInterval,
											a.isDatetimeAxis && a.closestPointRange
										)),
										!k && a.tickInterval < e && (a.tickInterval = e),
										f ||
											p ||
											k ||
											(a.tickInterval = w(
												a.tickInterval,
												null,
												g(a.tickInterval),
												S(
													c.allowDecimals,
													!(
														0.5 < a.tickInterval &&
														5 > a.tickInterval &&
														1e3 < a.max &&
														9999 > a.max
													)
												),
												!!this.tickAmount
											)),
										this.tickAmount || (a.tickInterval = a.unsquish()),
										this.setTickPositions();
								},
								setTickPositions: function () {
									var e,
										i = this.options,
										s = i.tickPositions;
									e = this.getMinorTickInterval();
									var n = i.tickPositioner,
										o = i.startOnTick,
										r = i.endOnTick;
									(this.tickmarkOffset =
										this.categories &&
										'between' === i.tickmarkPlacement &&
										1 === this.tickInterval
											? 0.5
											: 0),
										(this.minorTickInterval =
											'auto' === e && this.tickInterval
												? this.tickInterval / 5
												: e),
										(this.single =
											this.min === this.max &&
											h(this.min) &&
											!this.tickAmount &&
											(parseInt(this.min, 10) === this.min ||
												!1 !== i.allowDecimals)),
										(this.tickPositions = e = s && s.slice()),
										!e &&
											(!this.ordinalPositions &&
											(this.max - this.min) / this.tickInterval >
												Math.max(2 * this.len, 200)
												? ((e = [this.min, this.max]), t.error(19))
												: (e = this.isDatetimeAxis
														? this.getTimeTicks(
																this.normalizeTimeTickInterval(
																	this.tickInterval,
																	i.units
																),
																this.min,
																this.max,
																i.startOfWeek,
																this.ordinalPositions,
																this.closestPointRange,
																!0
														  )
														: this.isLog
														? this.getLogTickPositions(
																this.tickInterval,
																this.min,
																this.max
														  )
														: this.getLinearTickPositions(
																this.tickInterval,
																this.min,
																this.max
														  )),
											e.length > this.len &&
												(e = [e[0], e.pop()])[0] === e[1] &&
												(e.length = 1),
											(this.tickPositions = e),
											n && (n = n.apply(this, [this.min, this.max]))) &&
											(this.tickPositions = e = n),
										(this.paddedTicks = e.slice(0)),
										this.trimTicks(e, o, r),
										this.isLinked ||
											(this.single &&
												2 > e.length &&
												((this.min -= 0.5), (this.max += 0.5)),
											s || n || this.adjustTickAmount()),
										u(this, 'afterSetTickPositions');
								},
								trimTicks: function (t, e, i) {
									var s = t[0],
										n = t[t.length - 1],
										o = this.minPointOffset || 0;
									if (!this.isLinked) {
										if (e && -1 / 0 !== s) this.min = s;
										else for (; this.min - o > t[0]; ) t.shift();
										if (i) this.max = n;
										else for (; this.max + o < t[t.length - 1]; ) t.pop();
										0 === t.length &&
											h(s) &&
											!this.options.tickPositions &&
											t.push((n + s) / 2);
									}
								},
								alignToOthers: function () {
									var t,
										e = {},
										i = this.options;
									return (
										!1 === this.chart.options.chart.alignTicks ||
											!1 === i.alignTicks ||
											!1 === i.startOnTick ||
											!1 === i.endOnTick ||
											this.isLog ||
											d(this.chart[this.coll], function (i) {
												var s = i.options;
												(s = [
													i.horiz ? s.left : s.top,
													s.width,
													s.height,
													s.pane,
												].join()),
													i.series.length && (e[s] ? (t = !0) : (e[s] = 1));
											}),
										t
									);
								},
								getTickAmount: function () {
									var t = this.options,
										e = t.tickAmount,
										i = t.tickPixelInterval;
									!h(t.tickInterval) &&
										this.len < i &&
										!this.isRadial &&
										!this.isLog &&
										t.startOnTick &&
										t.endOnTick &&
										(e = 2),
										!e &&
											this.alignToOthers() &&
											(e = Math.ceil(this.len / i) + 1),
										4 > e && ((this.finalTickAmt = e), (e = 5)),
										(this.tickAmount = e);
								},
								adjustTickAmount: function () {
									var t = this.tickInterval,
										e = this.tickPositions,
										i = this.tickAmount,
										s = this.finalTickAmt,
										n = e && e.length,
										o = S(this.threshold, this.softThreshold ? 0 : null);
									if (this.hasData()) {
										if (n < i) {
											for (; e.length < i; )
												e.length % 2 || this.min === o
													? e.push(r(e[e.length - 1] + t))
													: e.unshift(r(e[0] - t));
											(this.transA *= (n - 1) / (i - 1)),
												(this.min = e[0]),
												(this.max = e[e.length - 1]);
										} else
											n > i &&
												((this.tickInterval *= 2), this.setTickPositions());
										if (h(s)) {
											for (t = i = e.length; t--; )
												((3 === s && 1 == t % 2) ||
													(2 >= s && 0 < t && t < i - 1)) &&
													e.splice(t, 1);
											this.finalTickAmt = void 0;
										}
									}
								},
								setScale: function () {
									var t, e;
									(this.oldMin = this.min),
										(this.oldMax = this.max),
										(this.oldAxisLength = this.len),
										this.setAxisSize(),
										(e = this.len !== this.oldAxisLength),
										d(this.series, function (e) {
											(e.isDirtyData || e.isDirty || e.xAxis.isDirty) &&
												(t = !0);
										}),
										e ||
										t ||
										this.isLinked ||
										this.forceRedraw ||
										this.userMin !== this.oldUserMin ||
										this.userMax !== this.oldUserMax ||
										this.alignToOthers()
											? (this.resetStacks && this.resetStacks(),
											  (this.forceRedraw = !1),
											  this.getSeriesExtremes(),
											  this.setTickInterval(),
											  (this.oldUserMin = this.userMin),
											  (this.oldUserMax = this.userMax),
											  this.isDirty ||
													(this.isDirty =
														e ||
														this.min !== this.oldMin ||
														this.max !== this.oldMax))
											: this.cleanStacks && this.cleanStacks(),
										u(this, 'afterSetScale');
								},
								setExtremes: function (t, e, i, s, n) {
									var o = this,
										r = o.chart;
									(i = S(i, !0)),
										d(o.series, function (t) {
											delete t.kdTree;
										}),
										(n = p(n, {min: t, max: e})),
										u(o, 'setExtremes', n, function () {
											(o.userMin = t),
												(o.userMax = e),
												(o.eventArgs = n),
												i && r.redraw(s);
										});
								},
								zoom: function (t, e) {
									var i = this.dataMin,
										s = this.dataMax,
										n = this.options,
										o = Math.min(i, S(n.min, i));
									return (
										(n = Math.max(s, S(n.max, s))),
										(t === this.min && e === this.max) ||
											(this.allowZoomOutside ||
												(h(i) && (t < o && (t = o), t > n && (t = n)),
												h(s) && (e < o && (e = o), e > n && (e = n))),
											(this.displayBtn = void 0 !== t || void 0 !== e),
											this.setExtremes(t, e, !1, void 0, {trigger: 'zoom'})),
										!0
									);
								},
								setAxisSize: function () {
									var e = this.chart,
										i = (a = this.options).offsets || [0, 0, 0, 0],
										s = this.horiz,
										n = (this.width = Math.round(
											t.relativeLength(
												S(a.width, e.plotWidth - i[3] + i[1]),
												e.plotWidth
											)
										)),
										o = (this.height = Math.round(
											t.relativeLength(
												S(a.height, e.plotHeight - i[0] + i[2]),
												e.plotHeight
											)
										)),
										r = (this.top = Math.round(
											t.relativeLength(
												S(a.top, e.plotTop + i[0]),
												e.plotHeight,
												e.plotTop
											)
										)),
										a = (this.left = Math.round(
											t.relativeLength(
												S(a.left, e.plotLeft + i[3]),
												e.plotWidth,
												e.plotLeft
											)
										));
									(this.bottom = e.chartHeight - o - r),
										(this.right = e.chartWidth - n - a),
										(this.len = Math.max(s ? n : o, 0)),
										(this.pos = s ? a : r);
								},
								getExtremes: function () {
									var t = this.isLog;
									return {
										min: t ? r(this.lin2log(this.min)) : this.min,
										max: t ? r(this.lin2log(this.max)) : this.max,
										dataMin: this.dataMin,
										dataMax: this.dataMax,
										userMin: this.userMin,
										userMax: this.userMax,
									};
								},
								getThreshold: function (t) {
									var e = (i = this.isLog) ? this.lin2log(this.min) : this.min,
										i = i ? this.lin2log(this.max) : this.max;
									return (
										null === t || -1 / 0 === t
											? (t = e)
											: 1 / 0 === t
											? (t = i)
											: e > t
											? (t = e)
											: i < t && (t = i),
										this.translate(t, 0, 1, 0, 1)
									);
								},
								autoLabelAlign: function (t) {
									return 15 < (t = (S(t, 0) - 90 * this.side + 720) % 360) &&
										165 > t
										? 'right'
										: 195 < t && 345 > t
										? 'left'
										: 'center';
								},
								tickSize: function (t) {
									var e = this.options,
										i = e[t + 'Length'],
										s = S(e[t + 'Width'], 'tick' === t && this.isXAxis ? 1 : 0);
									if (s && i)
										return 'inside' === e[t + 'Position'] && (i = -i), [i, s];
								},
								labelMetrics: function () {
									var t = (this.tickPositions && this.tickPositions[0]) || 0;
									return this.chart.renderer.fontMetrics(
										this.options.labels.style &&
											this.options.labels.style.fontSize,
										this.ticks[t] && this.ticks[t].label
									);
								},
								unsquish: function () {
									var t,
										e,
										i,
										s = this.options.labels,
										n = this.horiz,
										o = this.tickInterval,
										a = o,
										c =
											this.len /
											(((this.categories ? 1 : 0) + this.max - this.min) / o),
										p = s.rotation,
										u = this.labelMetrics(),
										f = Number.MAX_VALUE,
										g = function (t) {
											return (
												(t = 1 < (t /= c || 1) ? Math.ceil(t) : 1), r(t * o)
											);
										};
									return (
										n
											? (i =
													!s.staggerLines &&
													!s.step &&
													(h(p)
														? [p]
														: c < S(s.autoRotationLimit, 80) &&
														  s.autoRotation)) &&
											  d(i, function (i) {
													var s;
													(i === p || (i && -90 <= i && 90 >= i)) &&
														(s =
															(e = g(Math.abs(u.h / Math.sin(l * i)))) +
															Math.abs(i / 360)) < f &&
														((f = s), (t = i), (a = e));
											  })
											: s.step || (a = g(u.h)),
										(this.autoRotation = i),
										(this.labelRotation = S(t, p)),
										a
									);
								},
								getSlotWidth: function (t) {
									var e = this.chart,
										i = this.horiz,
										s = this.options.labels,
										n = Math.max(
											this.tickPositions.length - (this.categories ? 0 : 1),
											1
										),
										o = e.margin[3];
									return (
										(t && t.slotWidth) ||
										(i &&
											2 > (s.step || 0) &&
											!s.rotation &&
											((this.staggerLines || 1) * this.len) / n) ||
										(!i &&
											((s.style && parseInt(s.style.width, 10)) ||
												(o && o - e.spacing[3]) ||
												0.33 * e.chartWidth))
									);
								},
								renderUnsquish: function () {
									var t,
										e,
										i,
										s = this.chart,
										n = s.renderer,
										o = this.tickPositions,
										r = this.ticks,
										a = this.options.labels,
										h = (a && a.style) || {},
										l = this.horiz,
										c = this.getSlotWidth(),
										p = Math.max(1, Math.round(c - 2 * (a.padding || 5))),
										u = {},
										f = this.labelMetrics(),
										g = a.style && a.style.textOverflow,
										m = 0;
									if (
										(b(a.rotation) || (u.rotation = a.rotation || 0),
										d(o, function (t) {
											(t = r[t]) &&
												t.label &&
												t.label.textPxLength > m &&
												(m = t.label.textPxLength);
										}),
										(this.maxLabelLength = m),
										this.autoRotation)
									)
										m > p && m > f.h
											? (u.rotation = this.labelRotation)
											: (this.labelRotation = 0);
									else if (c && ((t = p), !g))
										for (e = 'clip', p = o.length; !l && p--; )
											(i = o[p]),
												(i = r[i].label) &&
													(i.styles && 'ellipsis' === i.styles.textOverflow
														? i.css({textOverflow: 'clip'})
														: i.textPxLength > c && i.css({width: c + 'px'}),
													i.getBBox().height >
														this.len / o.length - (f.h - f.f) &&
														(i.specificTextOverflow = 'ellipsis'));
									u.rotation &&
										((t = m > 0.5 * s.chartHeight ? 0.33 * s.chartHeight : m),
										g || (e = 'ellipsis')),
										(this.labelAlign =
											a.align || this.autoLabelAlign(this.labelRotation)) &&
											(u.align = this.labelAlign),
										d(
											o,
											function (i) {
												var s = (i = r[i]) && i.label,
													n = h.width,
													o = {};
												s &&
													(s.attr(u),
													i.shortenLabel
														? i.shortenLabel()
														: t &&
														  !n &&
														  'nowrap' !== h.whiteSpace &&
														  (t < s.textPxLength ||
																'SPAN' === s.element.tagName)
														? ((o.width = t),
														  g ||
																(o.textOverflow = s.specificTextOverflow || e),
														  s.css(o))
														: s.styles &&
														  s.styles.width &&
														  !o.width &&
														  !n &&
														  s.css({width: null}),
													delete s.specificTextOverflow,
													(i.rotation = u.rotation));
											},
											this
										),
										(this.tickRotCorr = n.rotCorr(
											f.b,
											this.labelRotation || 0,
											0 !== this.side
										));
								},
								hasData: function () {
									return (
										this.hasVisibleSeries ||
										(h(this.min) &&
											h(this.max) &&
											this.tickPositions &&
											0 < this.tickPositions.length)
									);
								},
								addTitle: function (t) {
									var e,
										i = this.chart.renderer,
										s = this.horiz,
										n = this.opposite,
										o = this.options.title;
									this.axisTitle ||
										((e = o.textAlign) ||
											(e = (
												s
													? {low: 'left', middle: 'center', high: 'right'}
													: {
															low: n ? 'right' : 'left',
															middle: 'center',
															high: n ? 'left' : 'right',
													  }
											)[o.align]),
										(this.axisTitle = i
											.text(o.text, 0, 0, o.useHTML)
											.attr({zIndex: 7, rotation: o.rotation || 0, align: e})
											.addClass('highcharts-axis-title')
											.css(k(o.style))
											.add(this.axisGroup)),
										(this.axisTitle.isNew = !0)),
										o.style.width ||
											this.isRadial ||
											this.axisTitle.css({width: this.len}),
										this.axisTitle[t ? 'show' : 'hide'](!0);
								},
								generateTick: function (t) {
									var e = this.ticks;
									e[t] ? e[t].addLabel() : (e[t] = new P(this, t));
								},
								getOffset: function () {
									var t,
										e,
										i,
										s = this,
										n = (b = s.chart).renderer,
										o = s.options,
										r = s.tickPositions,
										a = s.ticks,
										l = s.horiz,
										c = s.side,
										p = b.inverted && !s.isZAxis ? [1, 0, 3, 2][c] : c,
										f = 0,
										g = 0,
										m = o.title,
										x = o.labels,
										v = 0,
										y = b.axisOffset,
										b = b.clipOffset,
										k = [-1, 1, 1, -1][c],
										w = o.className,
										T = s.axisParent;
									(t = s.hasData()),
										(s.showAxis = e = t || S(o.showEmpty, !0)),
										(s.staggerLines = s.horiz && x.staggerLines),
										s.axisGroup ||
											((s.gridGroup = n
												.g('grid')
												.attr({zIndex: o.gridZIndex || 1})
												.addClass(
													'highcharts-' +
														this.coll.toLowerCase() +
														'-grid ' +
														(w || '')
												)
												.add(T)),
											(s.axisGroup = n
												.g('axis')
												.attr({zIndex: o.zIndex || 2})
												.addClass(
													'highcharts-' +
														this.coll.toLowerCase() +
														' ' +
														(w || '')
												)
												.add(T)),
											(s.labelGroup = n
												.g('axis-labels')
												.attr({zIndex: x.zIndex || 7})
												.addClass(
													'highcharts-' +
														s.coll.toLowerCase() +
														'-labels ' +
														(w || '')
												)
												.add(T))),
										t || s.isLinked
											? (d(r, function (t, e) {
													s.generateTick(t, e);
											  }),
											  s.renderUnsquish(),
											  (s.reserveSpaceDefault =
													0 === c ||
													2 === c ||
													{1: 'left', 3: 'right'}[c] === s.labelAlign),
											  S(
													x.reserveSpace,
													'center' === s.labelAlign || null,
													s.reserveSpaceDefault
											  ) &&
													d(r, function (t) {
														v = Math.max(a[t].getLabelSize(), v);
													}),
											  s.staggerLines && (v *= s.staggerLines),
											  (s.labelOffset = v * (s.opposite ? -1 : 1)))
											: M(a, function (t, e) {
													t.destroy(), delete a[e];
											  }),
										m &&
											m.text &&
											!1 !== m.enabled &&
											(s.addTitle(e),
											e &&
												!1 !== m.reserveSpace &&
												((s.titleOffset = f =
													s.axisTitle.getBBox()[l ? 'height' : 'width']),
												(i = m.offset),
												(g = h(i) ? 0 : S(m.margin, l ? 5 : 10)))),
										s.renderLine(),
										(s.offset = k * S(o.offset, y[c])),
										(s.tickRotCorr = s.tickRotCorr || {x: 0, y: 0}),
										(n =
											0 === c
												? -s.labelMetrics().h
												: 2 === c
												? s.tickRotCorr.y
												: 0),
										(g = Math.abs(v) + g),
										v &&
											(g =
												g -
												n +
												k * (l ? S(x.y, s.tickRotCorr.y + 8 * k) : x.x)),
										(s.axisTitleMargin = S(i, g)),
										s.getMaxLabelDimensions &&
											(s.maxLabelDimensions = s.getMaxLabelDimensions(a, r)),
										(l = this.tickSize('tick')),
										(y[c] = Math.max(
											y[c],
											s.axisTitleMargin + f + k * s.offset,
											g,
											t && r.length && l ? l[0] + k * s.offset : 0
										)),
										(o = o.offset
											? 0
											: 2 * Math.floor(s.axisLine.strokeWidth() / 2)),
										(b[p] = Math.max(b[p], o)),
										u(this, 'afterGetOffset');
								},
								getLinePath: function (t) {
									var e = this.chart,
										i = this.opposite,
										s = this.offset,
										n = this.horiz,
										o = this.left + (i ? this.width : 0) + s;
									return (
										(s =
											e.chartHeight - this.bottom - (i ? this.height : 0) + s),
										i && (t *= -1),
										e.renderer.crispLine(
											[
												'M',
												n ? this.left : o,
												n ? s : this.top,
												'L',
												n ? e.chartWidth - this.right : o,
												n ? s : e.chartHeight - this.bottom,
											],
											t
										)
									);
								},
								renderLine: function () {
									this.axisLine ||
										((this.axisLine = this.chart.renderer
											.path()
											.addClass('highcharts-axis-line')
											.add(this.axisGroup)),
										this.axisLine.attr({
											stroke: this.options.lineColor,
											'stroke-width': this.options.lineWidth,
											zIndex: 7,
										}));
								},
								getTitlePosition: function () {
									var t = this.horiz,
										e = this.left,
										i = this.top,
										s = this.len,
										n = this.options.title,
										o = t ? e : i,
										r = this.opposite,
										a = this.offset,
										h = n.x || 0,
										l = n.y || 0,
										c = this.axisTitle,
										d = this.chart.renderer.fontMetrics(
											n.style && n.style.fontSize,
											c
										);
									return (
										(c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0)),
										(s = {
											low: o + (t ? 0 : s),
											middle: o + s / 2,
											high: o + (t ? s : 0),
										}[n.align]),
										(e =
											(t ? i + this.height : e) +
											(t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin +
											[-c, c, d.f, -c][this.side]),
										{
											x: t ? s + h : e + (r ? this.width : 0) + a + h,
											y: t ? e + l - (r ? this.height : 0) + a : s + l,
										}
									);
								},
								renderMinorTick: function (t) {
									var e = this.chart.hasRendered && y(this.oldMin),
										i = this.minorTicks;
									i[t] || (i[t] = new P(this, t, 'minor')),
										e && i[t].isNew && i[t].render(null, !0),
										i[t].render(null, !1, 1);
								},
								renderTick: function (t, e) {
									var i = this.isLinked,
										s = this.ticks,
										n = this.chart.hasRendered && y(this.oldMin);
									(!i || (t >= this.min && t <= this.max)) &&
										(s[t] || (s[t] = new P(this, t)),
										n && s[t].isNew && s[t].render(e, !0, -1),
										s[t].render(e));
								},
								render: function () {
									var e,
										s,
										n = this,
										o = n.chart,
										r = n.options,
										a = n.isLog,
										h = n.isLinked,
										l = n.tickPositions,
										c = n.axisTitle,
										p = n.ticks,
										f = n.minorTicks,
										g = n.alternateBands,
										m = r.stackLabels,
										x = r.alternateGridColor,
										v = n.tickmarkOffset,
										b = n.axisLine,
										k = n.showAxis,
										w = i(o.renderer.globalAnimation);
									(n.labelEdge.length = 0),
										(n.overlap = !1),
										d([p, f, g], function (t) {
											M(t, function (t) {
												t.isActive = !1;
											});
										}),
										(n.hasData() || h) &&
											(n.minorTickInterval &&
												!n.categories &&
												d(n.getMinorTickPositions(), function (t) {
													n.renderMinorTick(t);
												}),
											l.length &&
												(d(l, function (t, e) {
													n.renderTick(t, e);
												}),
												v &&
													(0 === n.min || n.single) &&
													(p[-1] || (p[-1] = new P(n, -1, null, !0)),
													p[-1].render(-1))),
											x &&
												d(l, function (i, r) {
													(s = void 0 !== l[r + 1] ? l[r + 1] + v : n.max - v),
														0 == r % 2 &&
															i < n.max &&
															s <= n.max + (o.polar ? -v : v) &&
															(g[i] || (g[i] = new t.PlotLineOrBand(n)),
															(e = i + v),
															(g[i].options = {
																from: a ? n.lin2log(e) : e,
																to: a ? n.lin2log(s) : s,
																color: x,
															}),
															g[i].render(),
															(g[i].isActive = !0));
												}),
											n._addedPlotLB ||
												(d(
													(r.plotLines || []).concat(r.plotBands || []),
													function (t) {
														n.addPlotBandOrLine(t);
													}
												),
												(n._addedPlotLB = !0))),
										d([p, f, g], function (t) {
											var e,
												i = [],
												s = w.duration;
											M(t, function (t, e) {
												t.isActive ||
													(t.render(e, !1, 0), (t.isActive = !1), i.push(e));
											}),
												L(
													function () {
														for (e = i.length; e--; )
															t[i[e]] &&
																!t[i[e]].isActive &&
																(t[i[e]].destroy(), delete t[i[e]]);
													},
													t !== g && o.hasRendered && s ? s : 0
												);
										}),
										b &&
											(b[b.isPlaced ? 'animate' : 'attr']({
												d: this.getLinePath(b.strokeWidth()),
											}),
											(b.isPlaced = !0),
											b[k ? 'show' : 'hide'](!0)),
										c &&
											k &&
											((r = n.getTitlePosition()),
											y(r.y)
												? (c[c.isNew ? 'attr' : 'animate'](r), (c.isNew = !1))
												: (c.attr('y', -9999), (c.isNew = !0))),
										m && m.enabled && n.renderStackTotals(),
										(n.isDirty = !1),
										u(this, 'afterRender');
								},
								redraw: function () {
									this.visible &&
										(this.render(),
										d(this.plotLinesAndBands, function (t) {
											t.render();
										})),
										d(this.series, function (t) {
											t.isDirty = !0;
										});
								},
								keepProps: 'extKey hcEvents names series userMax userMin'.split(
									' '
								),
								destroy: function (t) {
									var e,
										i = this,
										s = i.stacks,
										n = i.plotLinesAndBands;
									if (
										(u(this, 'destroy', {keepEvents: t}),
										t || T(i),
										M(s, function (t, e) {
											c(t), (s[e] = null);
										}),
										d([i.ticks, i.minorTicks, i.alternateBands], function (t) {
											c(t);
										}),
										n)
									)
										for (t = n.length; t--; ) n[t].destroy();
									for (e in (d(
										'stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar'.split(
											' '
										),
										function (t) {
											i[t] && (i[t] = i[t].destroy());
										}
									),
									i.plotLinesAndBandsGroups))
										i.plotLinesAndBandsGroups[e] =
											i.plotLinesAndBandsGroups[e].destroy();
									M(i, function (t, e) {
										-1 === x(e, i.keepProps) && delete i[e];
									});
								},
								drawCrosshair: function (t, e) {
									var i,
										s,
										n = this.crosshair,
										r = S(n.snap, !0),
										a = this.cross;
									if (
										(u(this, 'drawCrosshair', {e: t, point: e}),
										t || (t = this.cross && this.cross.e),
										this.crosshair && !1 !== (h(e) || !r))
									) {
										if (
											(r
												? h(e) &&
												  (s = S(
														e.crosshairPos,
														this.isXAxis ? e.plotX : this.len - e.plotY
												  ))
												: (s =
														t &&
														(this.horiz
															? t.chartX - this.pos
															: this.len - t.chartY + this.pos)),
											h(s) &&
												(i =
													this.getPlotLinePath(
														e && (this.isXAxis ? e.x : S(e.stackY, e.y)),
														null,
														null,
														null,
														s
													) || null),
											!h(i))
										)
											return void this.hideCrosshair();
										(r = this.categories && !this.isRadial),
											a ||
												((this.cross = a =
													this.chart.renderer
														.path()
														.addClass(
															'highcharts-crosshair highcharts-crosshair-' +
																(r ? 'category ' : 'thin ') +
																n.className
														)
														.attr({zIndex: S(n.zIndex, 2)})
														.add()),
												a
													.attr({
														stroke:
															n.color ||
															(r
																? o('#ccd6eb').setOpacity(0.25).get()
																: '#cccccc'),
														'stroke-width': S(n.width, 1),
													})
													.css({'pointer-events': 'none'}),
												n.dashStyle && a.attr({dashstyle: n.dashStyle})),
											a.show().attr({d: i}),
											r && !n.width && a.attr({'stroke-width': this.transA}),
											(this.cross.e = t);
									} else this.hideCrosshair();
									u(this, 'afterDrawCrosshair', {e: t, point: e});
								},
								hideCrosshair: function () {
									this.cross && this.cross.hide();
								},
							}),
							(t.Axis = C)
						);
					})(c);
					return (
						(function (t) {
							var e = t.Axis,
								i = t.getMagnitude,
								s = t.normalizeTickInterval,
								n = t.timeUnits;
							(e.prototype.getTimeTicks = function () {
								return this.chart.time.getTimeTicks.apply(
									this.chart.time,
									arguments
								);
							}),
								(e.prototype.normalizeTimeTickInterval = function (t, e) {
									var o = e || [
										['millisecond', [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
										['second', [1, 2, 5, 10, 15, 30]],
										['minute', [1, 2, 5, 10, 15, 30]],
										['hour', [1, 2, 3, 4, 6, 8, 12]],
										['day', [1, 2]],
										['week', [1, 2]],
										['month', [1, 2, 3, 4, 6]],
										['year', null],
									];
									e = o[o.length - 1];
									var r,
										a = n[e[0]],
										h = e[1];
									for (
										r = 0;
										r < o.length &&
										((e = o[r]),
										(a = n[e[0]]),
										(h = e[1]),
										!(
											o[r + 1] &&
											t <= (a * h[h.length - 1] + n[o[r + 1][0]]) / 2
										));
										r++
									);
									return (
										a === n.year && t < 5 * a && (h = [1, 2, 5]),
										{
											unitRange: a,
											count: (t = s(
												t / a,
												h,
												'year' === e[0] ? Math.max(i(t / a), 1) : 1
											)),
											unitName: e[0],
										}
									);
								});
						})(c),
						(function (t) {
							var e = t.Axis,
								i = t.getMagnitude,
								s = t.map,
								n = t.normalizeTickInterval,
								o = t.pick;
							(e.prototype.getLogTickPositions = function (t, e, r, a) {
								var h = this.options,
									l = this.len,
									c = [];
								if ((a || (this._minorAutoInterval = null), 0.5 <= t))
									(t = Math.round(t)),
										(c = this.getLinearTickPositions(t, e, r));
								else if (0.08 <= t) {
									var d, p, u, f, g;
									for (
										l = Math.floor(e),
											h =
												0.3 < t
													? [1, 2, 4]
													: 0.15 < t
													? [1, 2, 4, 6, 8]
													: [1, 2, 3, 4, 5, 6, 7, 8, 9];
										l < r + 1 && !g;
										l++
									)
										for (p = h.length, d = 0; d < p && !g; d++)
											(u = this.log2lin(this.lin2log(l) * h[d])) > e &&
												(!a || f <= r) &&
												void 0 !== f &&
												c.push(f),
												f > r && (g = !0),
												(f = u);
								} else
									(e = this.lin2log(e)),
										(r = this.lin2log(r)),
										(t = a ? this.getMinorTickInterval() : h.tickInterval),
										(t = o(
											'auto' === t ? null : t,
											this._minorAutoInterval,
											((h.tickPixelInterval / (a ? 5 : 1)) * (r - e)) /
												((a ? l / this.tickPositions.length : l) || 1)
										)),
										(t = n(t, null, i(t))),
										(c = s(this.getLinearTickPositions(t, e, r), this.log2lin)),
										a || (this._minorAutoInterval = t / 5);
								return a || (this.tickInterval = t), c;
							}),
								(e.prototype.log2lin = function (t) {
									return Math.log(t) / Math.LN10;
								}),
								(e.prototype.lin2log = function (t) {
									return Math.pow(10, t);
								});
						})(c),
						(function (t, e) {
							var i = t.arrayMax,
								s = t.arrayMin,
								n = t.defined,
								o = t.destroyObjectProperties,
								r = t.each,
								a = t.erase,
								h = t.merge,
								l = t.pick;
							(t.PlotLineOrBand = function (t, e) {
								(this.axis = t), e && ((this.options = e), (this.id = e.id));
							}),
								(t.PlotLineOrBand.prototype = {
									render: function () {
										t.fireEvent(this, 'render');
										var e = this,
											i = e.axis,
											s = i.horiz,
											o = e.options,
											r = o.label,
											a = e.label,
											c = o.to,
											d = o.from,
											p = o.value,
											u = n(d) && n(c),
											f = n(p),
											g = e.svgElem,
											m = !g,
											x = [],
											v = o.color,
											y = l(o.zIndex, 0),
											b = o.events,
											k =
												((x = {
													class:
														'highcharts-plot-' +
														(u ? 'band ' : 'line ') +
														(o.className || ''),
												}),
												{}),
											w = i.chart.renderer,
											M = u ? 'bands' : 'lines';
										if (
											(i.isLog &&
												((d = i.log2lin(d)),
												(c = i.log2lin(c)),
												(p = i.log2lin(p))),
											f
												? ((x.stroke = v),
												  (x['stroke-width'] = o.width),
												  o.dashStyle && (x.dashstyle = o.dashStyle))
												: u &&
												  (v && (x.fill = v),
												  o.borderWidth &&
														((x.stroke = o.borderColor),
														(x['stroke-width'] = o.borderWidth))),
											(k.zIndex = y),
											(M += '-' + y),
											(v = i.plotLinesAndBandsGroups[M]) ||
												(i.plotLinesAndBandsGroups[M] = v =
													w
														.g('plot-' + M)
														.attr(k)
														.add()),
											m && (e.svgElem = g = w.path().attr(x).add(v)),
											f)
										)
											x = i.getPlotLinePath(p, g.strokeWidth());
										else {
											if (!u) return;
											x = i.getPlotBandPath(d, c, o);
										}
										return (
											m && x && x.length
												? (g.attr({d: x}),
												  b &&
														t.objectEach(b, function (t, i) {
															g.on(i, function (t) {
																b[i].apply(e, [t]);
															});
														}))
												: g &&
												  (x
														? (g.show(), g.animate({d: x}))
														: (g.hide(), a && (e.label = a = a.destroy()))),
											r &&
											n(r.text) &&
											x &&
											x.length &&
											0 < i.width &&
											0 < i.height &&
											!x.isFlat
												? ((r = h(
														{
															align: s && u && 'center',
															x: s ? !u && 4 : 10,
															verticalAlign: !s && u && 'middle',
															y: s ? (u ? 16 : 10) : u ? 6 : -4,
															rotation: s && !u && 90,
														},
														r
												  )),
												  this.renderLabel(r, x, u, y))
												: a && a.hide(),
											e
										);
									},
									renderLabel: function (t, e, n, o) {
										var r = this.label,
											a = this.axis.chart.renderer;
										r ||
											(((r = {
												align: t.textAlign || t.align,
												rotation: t.rotation,
												class:
													'highcharts-plot-' +
													(n ? 'band' : 'line') +
													'-label ' +
													(t.className || ''),
											}).zIndex = o),
											(this.label = r =
												a.text(t.text, 0, 0, t.useHTML).attr(r).add()),
											r.css(t.style)),
											(o = e.xBounds || [e[1], e[4], n ? e[6] : e[1]]),
											(e = e.yBounds || [e[2], e[5], n ? e[7] : e[2]]),
											(n = s(o)),
											(a = s(e)),
											r.align(t, !1, {
												x: n,
												y: a,
												width: i(o) - n,
												height: i(e) - a,
											}),
											r.show();
									},
									destroy: function () {
										a(this.axis.plotLinesAndBands, this),
											delete this.axis,
											o(this);
									},
								}),
								t.extend(e.prototype, {
									getPlotBandPath: function (t, e) {
										var i,
											s = this.getPlotLinePath(e, null, null, !0),
											n = this.getPlotLinePath(t, null, null, !0),
											o = [],
											r = this.horiz,
											a = 1;
										if (
											((t =
												(t < this.min && e < this.min) ||
												(t > this.max && e > this.max)),
											n && s)
										)
											for (
												t && ((i = n.toString() === s.toString()), (a = 0)),
													t = 0;
												t < n.length;
												t += 6
											)
												r && s[t + 1] === n[t + 1]
													? ((s[t + 1] += a), (s[t + 4] += a))
													: r ||
													  s[t + 2] !== n[t + 2] ||
													  ((s[t + 2] += a), (s[t + 5] += a)),
													o.push(
														'M',
														n[t + 1],
														n[t + 2],
														'L',
														n[t + 4],
														n[t + 5],
														s[t + 4],
														s[t + 5],
														s[t + 1],
														s[t + 2],
														'z'
													),
													(o.isFlat = i);
										return o;
									},
									addPlotBand: function (t) {
										return this.addPlotBandOrLine(t, 'plotBands');
									},
									addPlotLine: function (t) {
										return this.addPlotBandOrLine(t, 'plotLines');
									},
									addPlotBandOrLine: function (e, i) {
										var s = new t.PlotLineOrBand(this, e).render(),
											n = this.userOptions;
										return (
											s &&
												(i && ((n[i] = n[i] || []), n[i].push(e)),
												this.plotLinesAndBands.push(s)),
											s
										);
									},
									removePlotBandOrLine: function (t) {
										for (
											var e = this.plotLinesAndBands,
												i = this.options,
												s = this.userOptions,
												n = e.length;
											n--;

										)
											e[n].id === t && e[n].destroy();
										r(
											[
												i.plotLines || [],
												s.plotLines || [],
												i.plotBands || [],
												s.plotBands || [],
											],
											function (e) {
												for (n = e.length; n--; ) e[n].id === t && a(e, e[n]);
											}
										);
									},
									removePlotBand: function (t) {
										this.removePlotBandOrLine(t);
									},
									removePlotLine: function (t) {
										this.removePlotBandOrLine(t);
									},
								});
						})(c, d),
						(function (t) {
							var e = t.doc,
								i = t.each,
								s = t.extend,
								n = t.format,
								o = t.isNumber,
								r = t.map,
								a = t.merge,
								h = t.pick,
								l = t.splat,
								c = t.syncTimeout,
								d = t.timeUnits;
							(t.Tooltip = function () {
								this.init.apply(this, arguments);
							}),
								(t.Tooltip.prototype = {
									init: function (t, e) {
										(this.chart = t),
											(this.options = e),
											(this.crosshairs = []),
											(this.now = {x: 0, y: 0}),
											(this.isHidden = !0),
											(this.split = e.split && !t.inverted),
											(this.shared = e.shared || this.split),
											(this.outside = e.outside && !this.split);
									},
									cleanSplit: function (t) {
										i(this.chart.series, function (e) {
											var i = e && e.tt;
											i &&
												(!i.isActive || t
													? (e.tt = i.destroy())
													: (i.isActive = !1));
										});
									},
									getLabel: function () {
										var e,
											i = this.chart.renderer,
											s = this.options;
										return (
											this.label ||
												(this.outside &&
													((this.container = e = t.doc.createElement('div')),
													(e.className = 'highcharts-tooltip-container'),
													t.css(e, {
														position: 'absolute',
														top: '1px',
														pointerEvents: s.style && s.style.pointerEvents,
													}),
													t.doc.body.appendChild(e),
													(this.renderer = i = new t.Renderer(e, 0, 0))),
												this.split
													? (this.label = i.g('tooltip'))
													: ((this.label = i
															.label(
																'',
																0,
																0,
																s.shape || 'callout',
																null,
																null,
																s.useHTML,
																null,
																'tooltip'
															)
															.attr({padding: s.padding, r: s.borderRadius})),
													  this.label
															.attr({
																fill: s.backgroundColor,
																'stroke-width': s.borderWidth,
															})
															.css(s.style)
															.shadow(s.shadow)),
												this.outside &&
													(this.label.attr({
														x: this.distance,
														y: this.distance,
													}),
													(this.label.xSetter = function (t) {
														e.style.left = t + 'px';
													}),
													(this.label.ySetter = function (t) {
														e.style.top = t + 'px';
													})),
												this.label.attr({zIndex: 8}).add()),
											this.label
										);
									},
									update: function (t) {
										this.destroy(),
											a(!0, this.chart.options.tooltip.userOptions, t),
											this.init(this.chart, a(!0, this.options, t));
									},
									destroy: function () {
										this.label && (this.label = this.label.destroy()),
											this.split &&
												this.tt &&
												(this.cleanSplit(this.chart, !0),
												(this.tt = this.tt.destroy())),
											this.renderer &&
												((this.renderer = this.renderer.destroy()),
												t.discardElement(this.container)),
											t.clearTimeout(this.hideTimer),
											t.clearTimeout(this.tooltipTimeout);
									},
									move: function (e, i, n, o) {
										var r = this,
											a = r.now,
											h =
												!1 !== r.options.animation &&
												!r.isHidden &&
												(1 < Math.abs(e - a.x) || 1 < Math.abs(i - a.y)),
											l = r.followPointer || 1 < r.len;
										s(a, {
											x: h ? (2 * a.x + e) / 3 : e,
											y: h ? (a.y + i) / 2 : i,
											anchorX: l ? void 0 : h ? (2 * a.anchorX + n) / 3 : n,
											anchorY: l ? void 0 : h ? (a.anchorY + o) / 2 : o,
										}),
											r.getLabel().attr(a),
											h &&
												(t.clearTimeout(this.tooltipTimeout),
												(this.tooltipTimeout = setTimeout(function () {
													r && r.move(e, i, n, o);
												}, 32)));
									},
									hide: function (e) {
										var i = this;
										t.clearTimeout(this.hideTimer),
											(e = h(e, this.options.hideDelay, 500)),
											this.isHidden ||
												(this.hideTimer = c(function () {
													i.getLabel()[e ? 'fadeOut' : 'hide'](),
														(i.isHidden = !0);
												}, e));
									},
									getAnchor: function (t, e) {
										var s,
											n,
											o = this.chart,
											a = o.pointer,
											h = o.inverted,
											c = o.plotTop,
											d = o.plotLeft,
											p = 0,
											u = 0;
										return (
											(t = l(t)),
											this.followPointer && e
												? (void 0 === e.chartX && (e = a.normalize(e)),
												  (t = [e.chartX - o.plotLeft, e.chartY - c]))
												: t[0].tooltipPos
												? (t = t[0].tooltipPos)
												: (i(t, function (t) {
														(s = t.series.yAxis),
															(n = t.series.xAxis),
															(p += t.plotX + (!h && n ? n.left - d : 0)),
															(u +=
																(t.plotLow
																	? (t.plotLow + t.plotHigh) / 2
																	: t.plotY) + (!h && s ? s.top - c : 0));
												  }),
												  (p /= t.length),
												  (u /= t.length),
												  (t = [
														h ? o.plotWidth - u : p,
														this.shared && !h && 1 < t.length && e
															? e.chartY - c
															: h
															? o.plotHeight - p
															: u,
												  ])),
											r(t, Math.round)
										);
									},
									getPosition: function (t, i, s) {
										var n,
											o = this.chart,
											r = this.distance,
											a = {},
											l = (o.inverted && s.h) || 0,
											c = this.outside,
											d = c
												? e.documentElement.clientWidth - 2 * r
												: o.chartWidth,
											p = c
												? Math.max(
														e.body.scrollHeight,
														e.documentElement.scrollHeight,
														e.body.offsetHeight,
														e.documentElement.offsetHeight,
														e.documentElement.clientHeight
												  )
												: o.chartHeight,
											u = o.pointer.chartPosition,
											f = [
												'y',
												p,
												i,
												(c ? u.top - r : 0) + s.plotY + o.plotTop,
												c ? 0 : o.plotTop,
												c ? p : o.plotTop + o.plotHeight,
											],
											g = [
												'x',
												d,
												t,
												(c ? u.left - r : 0) + s.plotX + o.plotLeft,
												c ? 0 : o.plotLeft,
												c ? d : o.plotLeft + o.plotWidth,
											],
											m =
												!this.followPointer &&
												h(s.ttBelow, !o.inverted == !!s.negative),
											x = function (t, e, i, s, n, o) {
												var h = i < s - r,
													c = s + r + i < e,
													d = s - r - i;
												if (((s += r), m && c)) a[t] = s;
												else if (!m && h) a[t] = d;
												else if (h)
													a[t] = Math.min(o - i, 0 > d - l ? d : d - l);
												else {
													if (!c) return !1;
													a[t] = Math.max(n, s + l + i > e ? s : s + l);
												}
											},
											v = function (t, e, i, s) {
												var n;
												return (
													s < r || s > e - r
														? (n = !1)
														: (a[t] =
																s < i / 2
																	? 1
																	: s > e - i / 2
																	? e - i - 2
																	: s - i / 2),
													n
												);
											},
											y = function (t) {
												var e = f;
												(f = g), (g = e), (n = t);
											},
											b = function () {
												!1 !== x.apply(0, f)
													? !1 !== v.apply(0, g) || n || (y(!0), b())
													: n
													? (a.x = a.y = 0)
													: (y(!0), b());
											};
										return (o.inverted || 1 < this.len) && y(), b(), a;
									},
									defaultFormatter: function (t) {
										var e,
											i = this.points || l(this);
										return (
											(e = (e = [t.tooltipFooterHeaderFormatter(i[0])]).concat(
												t.bodyFormatter(i)
											)).push(t.tooltipFooterHeaderFormatter(i[0], !0)),
											e
										);
									},
									refresh: function (e, s) {
										var n,
											o,
											r,
											a,
											c = this.options,
											d = e,
											p = {},
											u = [];
										(n = c.formatter || this.defaultFormatter),
											(p = this.shared),
											c.enabled &&
												(t.clearTimeout(this.hideTimer),
												(this.followPointer =
													l(d)[0].series.tooltipOptions.followPointer),
												(s = (r = this.getAnchor(d, s))[0]),
												(o = r[1]),
												!p || (d.series && d.series.noSharedTooltip)
													? (p = d.getLabelConfig())
													: (i(d, function (t) {
															t.setState('hover'), u.push(t.getLabelConfig());
													  }),
													  ((p = {x: d[0].category, y: d[0].y}).points = u),
													  (d = d[0])),
												(this.len = u.length),
												(p = n.call(p, this)),
												(a = d.series),
												(this.distance = h(a.tooltipOptions.distance, 16)),
												!1 === p
													? this.hide()
													: ((n = this.getLabel()),
													  this.isHidden && n.attr({opacity: 1}).show(),
													  this.split
															? this.renderSplit(p, l(e))
															: (c.style.width ||
																	n.css({width: this.chart.spacingBox.width}),
															  n.attr({text: p && p.join ? p.join('') : p}),
															  n
																	.removeClass(/highcharts-color-[\d]+/g)
																	.addClass(
																		'highcharts-color-' +
																			h(d.colorIndex, a.colorIndex)
																	),
															  n.attr({
																	stroke:
																		c.borderColor ||
																		d.color ||
																		a.color ||
																		'#666666',
															  }),
															  this.updatePosition({
																	plotX: s,
																	plotY: o,
																	negative: d.negative,
																	ttBelow: d.ttBelow,
																	h: r[2] || 0,
															  })),
													  (this.isHidden = !1)));
									},
									renderSplit: function (e, s) {
										var n,
											o = this,
											r = [],
											a = this.chart,
											l = a.renderer,
											c = !0,
											d = this.options,
											p = 0,
											u = this.getLabel(),
											f = a.plotTop;
										t.isString(e) && (e = [!1, e]),
											i(e.slice(0, s.length + 1), function (t, e) {
												if (!1 !== t) {
													var i =
															(e = s[e - 1] || {
																isHeader: !0,
																plotX: s[0].plotX,
															}).series || o,
														g = i.tt,
														m = e.series || {},
														x =
															'highcharts-color-' +
															h(e.colorIndex, m.colorIndex, 'none');
													g ||
														(i.tt = g =
															l
																.label(
																	null,
																	null,
																	null,
																	'callout',
																	null,
																	null,
																	d.useHTML
																)
																.addClass(
																	'highcharts-tooltip-box ' +
																		x +
																		(e.isHeader
																			? ' highcharts-tooltip-header'
																			: '')
																)
																.attr({
																	padding: d.padding,
																	r: d.borderRadius,
																	fill: d.backgroundColor,
																	stroke:
																		d.borderColor ||
																		e.color ||
																		m.color ||
																		'#333333',
																	'stroke-width': d.borderWidth,
																})
																.add(u)),
														(g.isActive = !0),
														g.attr({text: t}),
														g.css(d.style).shadow(d.shadow),
														(m = (t = g.getBBox()).width + g.strokeWidth()),
														e.isHeader
															? ((p = t.height),
															  a.xAxis[0].opposite && ((n = !0), (f -= p)),
															  (m = Math.max(
																	0,
																	Math.min(
																		e.plotX + a.plotLeft - m / 2,
																		a.chartWidth +
																			(a.scrollablePixels
																				? a.scrollablePixels - a.marginRight
																				: 0) -
																			m
																	)
															  )))
															: (m =
																	e.plotX + a.plotLeft - h(d.distance, 16) - m),
														0 > m && (c = !1),
														(t =
															(e.series &&
																e.series.yAxis &&
																e.series.yAxis.pos) + (e.plotY || 0)),
														(t -= f),
														e.isHeader && (t = n ? -p : a.plotHeight + p),
														r.push({
															target: t,
															rank: e.isHeader ? 1 : 0,
															size: i.tt.getBBox().height + 1,
															point: e,
															x: m,
															tt: g,
														});
												}
											}),
											this.cleanSplit(),
											t.distribute(r, a.plotHeight + p),
											i(r, function (t) {
												var e = t.point,
													i = e.series;
												t.tt.attr({
													visibility: void 0 === t.pos ? 'hidden' : 'inherit',
													x:
														c || e.isHeader
															? t.x
															: e.plotX + a.plotLeft + h(d.distance, 16),
													y: t.pos + f,
													anchorX: e.isHeader
														? e.plotX + a.plotLeft
														: e.plotX + i.xAxis.pos,
													anchorY: e.isHeader
														? a.plotTop + a.plotHeight / 2
														: e.plotY + i.yAxis.pos,
												});
											});
									},
									updatePosition: function (t) {
										var e,
											i = this.chart,
											s = this.getLabel(),
											n = (this.options.positioner || this.getPosition).call(
												this,
												s.width,
												s.height,
												t
											),
											o = t.plotX + i.plotLeft;
										(t = t.plotY + i.plotTop),
											this.outside &&
												((e =
													(this.options.borderWidth || 0) + 2 * this.distance),
												this.renderer.setSize(s.width + e, s.height + e, !1),
												(o += i.pointer.chartPosition.left - n.x),
												(t += i.pointer.chartPosition.top - n.y)),
											this.move(Math.round(n.x), Math.round(n.y || 0), o, t);
									},
									getDateFormat: function (t, e, i, s) {
										var n,
											o,
											r = this.chart.time,
											a = r.dateFormat('%m-%d %H:%M:%S.%L', e),
											h = {
												millisecond: 15,
												second: 12,
												minute: 9,
												hour: 6,
												day: 3,
											},
											l = 'millisecond';
										for (o in d) {
											if (
												t === d.week &&
												+r.dateFormat('%w', e) === i &&
												'00:00:00.000' === a.substr(6)
											) {
												o = 'week';
												break;
											}
											if (d[o] > t) {
												o = l;
												break;
											}
											if (
												h[o] &&
												a.substr(h[o]) !== '01-01 00:00:00.000'.substr(h[o])
											)
												break;
											'week' !== o && (l = o);
										}
										return o && (n = r.resolveDTLFormat(s[o]).main), n;
									},
									getXDateFormat: function (t, e, i) {
										e = e.dateTimeLabelFormats;
										var s = i && i.closestPointRange;
										return (
											(s
												? this.getDateFormat(s, t.x, i.options.startOfWeek, e)
												: e.day) || e.year
										);
									},
									tooltipFooterHeaderFormatter: function (t, e) {
										e = e ? 'footer' : 'header';
										var s = t.series,
											r = s.tooltipOptions,
											a = r.xDateFormat,
											h = s.xAxis,
											l = h && 'datetime' === h.options.type && o(t.key),
											c = r[e + 'Format'];
										return (
											l && !a && (a = this.getXDateFormat(t, r, h)),
											l &&
												a &&
												i(
													(t.point && t.point.tooltipDateKeys) || ['key'],
													function (t) {
														c = c.replace(
															'{point.' + t + '}',
															'{point.' + t + ':' + a + '}'
														);
													}
												),
											n(c, {point: t, series: s}, this.chart.time)
										);
									},
									bodyFormatter: function (t) {
										return r(t, function (t) {
											var e = t.series.tooltipOptions;
											return (
												e[(t.point.formatPrefix || 'point') + 'Formatter'] ||
												t.point.tooltipFormatter
											).call(
												t.point,
												e[(t.point.formatPrefix || 'point') + 'Format']
											);
										});
									},
								});
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.attr,
								s = t.charts,
								n = t.color,
								o = t.css,
								r = t.defined,
								a = t.each,
								h = t.extend,
								l = t.find,
								c = t.fireEvent,
								d = t.isNumber,
								p = t.isObject,
								u = t.offset,
								f = t.pick,
								g = t.splat,
								m = t.Tooltip;
							(t.Pointer = function (t, e) {
								this.init(t, e);
							}),
								(t.Pointer.prototype = {
									init: function (t, e) {
										(this.options = e),
											(this.chart = t),
											(this.runChartClick =
												e.chart.events && !!e.chart.events.click),
											(this.pinchDown = []),
											(this.lastValidTouch = {}),
											m &&
												((t.tooltip = new m(t, e.tooltip)),
												(this.followTouchMove = f(
													e.tooltip.followTouchMove,
													!0
												))),
											this.setDOMEvents();
									},
									zoomOption: function (t) {
										var e = (s = this.chart).options.chart,
											i = e.zoomType || '',
											s = s.inverted;
										/touch/.test(t.type) && (i = f(e.pinchType, i)),
											(this.zoomX = t = /x/.test(i)),
											(this.zoomY = i = /y/.test(i)),
											(this.zoomHor = (t && !s) || (i && s)),
											(this.zoomVert = (i && !s) || (t && s)),
											(this.hasZoom = t || i);
									},
									normalize: function (t, e) {
										var i;
										return (
											(i = t.touches
												? t.touches.length
													? t.touches.item(0)
													: t.changedTouches[0]
												: t),
											e || (this.chartPosition = e = u(this.chart.container)),
											h(t, {
												chartX: Math.round(i.pageX - e.left),
												chartY: Math.round(i.pageY - e.top),
											})
										);
									},
									getCoordinates: function (t) {
										var e = {xAxis: [], yAxis: []};
										return (
											a(this.chart.axes, function (i) {
												e[i.isXAxis ? 'xAxis' : 'yAxis'].push({
													axis: i,
													value: i.toValue(t[i.horiz ? 'chartX' : 'chartY']),
												});
											}),
											e
										);
									},
									findNearestKDPoint: function (t, e, i) {
										var s;
										return (
											a(t, function (t) {
												var n =
													!(t.noSharedTooltip && e) &&
													0 > t.options.findNearestPointBy.indexOf('y');
												if (
													((t = t.searchPoint(i, n)),
													(n = p(t, !0)) && !(n = !p(s, !0)))
												) {
													n = s.distX - t.distX;
													var o = s.dist - t.dist,
														r =
															(t.series.group && t.series.group.zIndex) -
															(s.series.group && s.series.group.zIndex);
													n =
														0 <
														(0 !== n && e
															? n
															: 0 !== o
															? o
															: 0 !== r
															? r
															: s.series.index > t.series.index
															? -1
															: 1);
												}
												n && (s = t);
											}),
											s
										);
									},
									getPointFromEvent: function (t) {
										t = t.target;
										for (var e; t && !e; ) (e = t.point), (t = t.parentNode);
										return e;
									},
									getChartCoordinatesFromPoint: function (t, e) {
										var i = (s = t.series).xAxis,
											s = s.yAxis,
											n = f(t.clientX, t.plotX),
											o = t.shapeArgs;
										return i && s
											? e
												? {
														chartX: i.len + i.pos - n,
														chartY: s.len + s.pos - t.plotY,
												  }
												: {chartX: n + i.pos, chartY: t.plotY + s.pos}
											: o && o.x && o.y
											? {chartX: o.x, chartY: o.y}
											: void 0;
									},
									getHoverData: function (e, i, s, n, o, r, h) {
										var c,
											d = [],
											u = h && h.isBoosting;
										return (
											(n = !(!n || !e)),
											(h =
												i && !i.stickyTracking
													? [i]
													: t.grep(s, function (t) {
															return (
																t.visible &&
																!(!o && t.directTouch) &&
																f(t.options.enableMouseTracking, !0) &&
																t.stickyTracking
															);
													  })),
											(i =
												(c = n ? e : this.findNearestKDPoint(h, o, r)) &&
												c.series),
											c &&
												(o && !i.noSharedTooltip
													? ((h = t.grep(s, function (t) {
															return (
																t.visible &&
																!(!o && t.directTouch) &&
																f(t.options.enableMouseTracking, !0) &&
																!t.noSharedTooltip
															);
													  })),
													  a(h, function (t) {
															var e = l(t.points, function (t) {
																return t.x === c.x && !t.isNull;
															});
															p(e) && (u && (e = t.getPoint(e)), d.push(e));
													  }))
													: d.push(c)),
											{hoverPoint: c, hoverSeries: i, hoverPoints: d}
										);
									},
									runPointActions: function (i, n) {
										var o,
											r = this.chart,
											h =
												r.tooltip && r.tooltip.options.enabled
													? r.tooltip
													: void 0,
											l = !!h && h.shared,
											c =
												((d = n || r.hoverPoint) && d.series) || r.hoverSeries,
											d = (c = this.getHoverData(
												d,
												c,
												r.series,
												'touchmove' !== i.type &&
													(!!n || (c && c.directTouch && this.isDirectTouch)),
												l,
												i,
												{isBoosting: r.isBoosting}
											)).hoverPoint;
										if (
											((o = c.hoverPoints),
											(n =
												(c = c.hoverSeries) && c.tooltipOptions.followPointer),
											(l = l && c && !c.noSharedTooltip),
											d && (d !== r.hoverPoint || (h && h.isHidden)))
										) {
											if (
												(a(r.hoverPoints || [], function (e) {
													-1 === t.inArray(e, o) && e.setState();
												}),
												a(o || [], function (t) {
													t.setState('hover');
												}),
												r.hoverSeries !== c && c.onMouseOver(),
												r.hoverPoint && r.hoverPoint.firePointEvent('mouseOut'),
												!d.series)
											)
												return;
											d.firePointEvent('mouseOver'),
												(r.hoverPoints = o),
												(r.hoverPoint = d),
												h && h.refresh(l ? o : d, i);
										} else
											n &&
												h &&
												!h.isHidden &&
												((d = h.getAnchor([{}], i)),
												h.updatePosition({plotX: d[0], plotY: d[1]}));
										this.unDocMouseMove ||
											(this.unDocMouseMove = e(
												r.container.ownerDocument,
												'mousemove',
												function (e) {
													var i = s[t.hoverChartIndex];
													i && i.pointer.onDocumentMouseMove(e);
												}
											)),
											a(r.axes, function (e) {
												var s = f(e.crosshair.snap, !0),
													n = s
														? t.find(o, function (t) {
																return t.series[e.coll] === e;
														  })
														: void 0;
												n || !s ? e.drawCrosshair(i, n) : e.hideCrosshair();
											});
									},
									reset: function (t, e) {
										var i = this.chart,
											s = i.hoverSeries,
											n = i.hoverPoint,
											o = i.hoverPoints,
											r = i.tooltip,
											h = r && r.shared ? o : n;
										t &&
											h &&
											a(g(h), function (e) {
												e.series.isCartesian && void 0 === e.plotX && (t = !1);
											}),
											t
												? r &&
												  h &&
												  (r.refresh(h),
												  r.shared && o
														? a(o, function (t) {
																t.setState(t.state, !0),
																	t.series.isCartesian &&
																		(t.series.xAxis.crosshair &&
																			t.series.xAxis.drawCrosshair(null, t),
																		t.series.yAxis.crosshair &&
																			t.series.yAxis.drawCrosshair(null, t));
														  })
														: n &&
														  (n.setState(n.state, !0),
														  a(i.axes, function (t) {
																t.crosshair && t.drawCrosshair(null, n);
														  })))
												: (n && n.onMouseOut(),
												  o &&
														a(o, function (t) {
															t.setState();
														}),
												  s && s.onMouseOut(),
												  r && r.hide(e),
												  this.unDocMouseMove &&
														(this.unDocMouseMove = this.unDocMouseMove()),
												  a(i.axes, function (t) {
														t.hideCrosshair();
												  }),
												  (this.hoverX = i.hoverPoints = i.hoverPoint = null));
									},
									scaleGroups: function (t, e) {
										var i,
											s = this.chart;
										a(s.series, function (n) {
											(i = t || n.getPlotBox()),
												n.xAxis &&
													n.xAxis.zoomEnabled &&
													n.group &&
													(n.group.attr(i),
													n.markerGroup &&
														(n.markerGroup.attr(i),
														n.markerGroup.clip(e ? s.clipRect : null)),
													n.dataLabelsGroup && n.dataLabelsGroup.attr(i));
										}),
											s.clipRect.attr(e || s.clipBox);
									},
									dragStart: function (t) {
										var e = this.chart;
										(e.mouseIsDown = t.type),
											(e.cancelClick = !1),
											(e.mouseDownX = this.mouseDownX = t.chartX),
											(e.mouseDownY = this.mouseDownY = t.chartY);
									},
									drag: function (t) {
										var e,
											i = this.chart,
											s = i.options.chart,
											o = t.chartX,
											r = t.chartY,
											a = this.zoomHor,
											h = this.zoomVert,
											l = i.plotLeft,
											c = i.plotTop,
											d = i.plotWidth,
											p = i.plotHeight,
											u = this.selectionMarker,
											f = this.mouseDownX,
											g = this.mouseDownY,
											m = s.panKey && t[s.panKey + 'Key'];
										(u && u.touch) ||
											(o < l ? (o = l) : o > l + d && (o = l + d),
											r < c ? (r = c) : r > c + p && (r = c + p),
											(this.hasDragged = Math.sqrt(
												Math.pow(f - o, 2) + Math.pow(g - r, 2)
											)),
											10 < this.hasDragged &&
												((e = i.isInsidePlot(f - l, g - c)),
												i.hasCartesianSeries &&
													(this.zoomX || this.zoomY) &&
													e &&
													!m &&
													!u &&
													(this.selectionMarker = u =
														i.renderer
															.rect(l, c, a ? 1 : d, h ? 1 : p, 0)
															.attr({
																fill:
																	s.selectionMarkerFill ||
																	n('#335cad').setOpacity(0.25).get(),
																class: 'highcharts-selection-marker',
																zIndex: 7,
															})
															.add()),
												u &&
													a &&
													((o -= f),
													u.attr({width: Math.abs(o), x: (0 < o ? 0 : o) + f})),
												u &&
													h &&
													((o = r - g),
													u.attr({
														height: Math.abs(o),
														y: (0 < o ? 0 : o) + g,
													})),
												e && !u && s.panning && i.pan(t, s.panning)));
									},
									drop: function (t) {
										var e = this,
											i = this.chart,
											s = this.hasPinched;
										if (this.selectionMarker) {
											var n,
												l = {originalEvent: t, xAxis: [], yAxis: []},
												p = this.selectionMarker,
												u = p.attr ? p.attr('x') : p.x,
												f = p.attr ? p.attr('y') : p.y,
												g = p.attr ? p.attr('width') : p.width,
												m = p.attr ? p.attr('height') : p.height;
											(this.hasDragged || s) &&
												(a(i.axes, function (i) {
													if (
														i.zoomEnabled &&
														r(i.min) &&
														(s || e[{xAxis: 'zoomX', yAxis: 'zoomY'}[i.coll]])
													) {
														var o = i.horiz,
															a = 'touchend' === t.type ? i.minPixelPadding : 0,
															h = i.toValue((o ? u : f) + a);
														(o = i.toValue((o ? u + g : f + m) - a)),
															l[i.coll].push({
																axis: i,
																min: Math.min(h, o),
																max: Math.max(h, o),
															}),
															(n = !0);
													}
												}),
												n &&
													c(i, 'selection', l, function (t) {
														i.zoom(h(t, s ? {animation: !1} : null));
													})),
												d(i.index) &&
													(this.selectionMarker =
														this.selectionMarker.destroy()),
												s && this.scaleGroups();
										}
										i &&
											d(i.index) &&
											(o(i.container, {cursor: i._cursor}),
											(i.cancelClick = 10 < this.hasDragged),
											(i.mouseIsDown = this.hasDragged = this.hasPinched = !1),
											(this.pinchDown = []));
									},
									onContainerMouseDown: function (t) {
										2 !== (t = this.normalize(t)).button &&
											(this.zoomOption(t),
											t.preventDefault && t.preventDefault(),
											this.dragStart(t));
									},
									onDocumentMouseUp: function (e) {
										s[t.hoverChartIndex] &&
											s[t.hoverChartIndex].pointer.drop(e);
									},
									onDocumentMouseMove: function (t) {
										var e = this.chart,
											i = this.chartPosition;
										(t = this.normalize(t, i)),
											!i ||
												this.inClass(t.target, 'highcharts-tracker') ||
												e.isInsidePlot(
													t.chartX - e.plotLeft,
													t.chartY - e.plotTop
												) ||
												this.reset();
									},
									onContainerMouseLeave: function (e) {
										var i = s[t.hoverChartIndex];
										i &&
											(e.relatedTarget || e.toElement) &&
											(i.pointer.reset(), (i.pointer.chartPosition = null));
									},
									onContainerMouseMove: function (e) {
										var i = this.chart;
										(r(t.hoverChartIndex) &&
											s[t.hoverChartIndex] &&
											s[t.hoverChartIndex].mouseIsDown) ||
											(t.hoverChartIndex = i.index),
											((e = this.normalize(e)).returnValue = !1),
											'mousedown' === i.mouseIsDown && this.drag(e),
											(!this.inClass(e.target, 'highcharts-tracker') &&
												!i.isInsidePlot(
													e.chartX - i.plotLeft,
													e.chartY - i.plotTop
												)) ||
												i.openMenu ||
												this.runPointActions(e);
									},
									inClass: function (t, e) {
										for (var s; t; ) {
											if ((s = i(t, 'class'))) {
												if (-1 !== s.indexOf(e)) return !0;
												if (-1 !== s.indexOf('highcharts-container')) return !1;
											}
											t = t.parentNode;
										}
									},
									onTrackerMouseOut: function (t) {
										var e = this.chart.hoverSeries;
										(t = t.relatedTarget || t.toElement),
											(this.isDirectTouch = !1),
											!e ||
												!t ||
												e.stickyTracking ||
												this.inClass(t, 'highcharts-tooltip') ||
												(this.inClass(t, 'highcharts-series-' + e.index) &&
													this.inClass(t, 'highcharts-tracker')) ||
												e.onMouseOut();
									},
									onContainerClick: function (t) {
										var e = this.chart,
											i = e.hoverPoint,
											s = e.plotLeft,
											n = e.plotTop;
										(t = this.normalize(t)),
											e.cancelClick ||
												(i && this.inClass(t.target, 'highcharts-tracker')
													? (c(i.series, 'click', h(t, {point: i})),
													  e.hoverPoint && i.firePointEvent('click', t))
													: (h(t, this.getCoordinates(t)),
													  e.isInsidePlot(t.chartX - s, t.chartY - n) &&
															c(e, 'click', t)));
									},
									setDOMEvents: function () {
										var i = this,
											s = i.chart.container,
											n = s.ownerDocument;
										(s.onmousedown = function (t) {
											i.onContainerMouseDown(t);
										}),
											(s.onmousemove = function (t) {
												i.onContainerMouseMove(t);
											}),
											(s.onclick = function (t) {
												i.onContainerClick(t);
											}),
											(this.unbindContainerMouseLeave = e(
												s,
												'mouseleave',
												i.onContainerMouseLeave
											)),
											t.unbindDocumentMouseUp ||
												(t.unbindDocumentMouseUp = e(
													n,
													'mouseup',
													i.onDocumentMouseUp
												)),
											t.hasTouch &&
												((s.ontouchstart = function (t) {
													i.onContainerTouchStart(t);
												}),
												(s.ontouchmove = function (t) {
													i.onContainerTouchMove(t);
												}),
												t.unbindDocumentTouchEnd ||
													(t.unbindDocumentTouchEnd = e(
														n,
														'touchend',
														i.onDocumentTouchEnd
													)));
									},
									destroy: function () {
										var e = this;
										e.unDocMouseMove && e.unDocMouseMove(),
											this.unbindContainerMouseLeave(),
											t.chartCount ||
												(t.unbindDocumentMouseUp &&
													(t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()),
												t.unbindDocumentTouchEnd &&
													(t.unbindDocumentTouchEnd =
														t.unbindDocumentTouchEnd())),
											clearInterval(e.tooltipTimeout),
											t.objectEach(e, function (t, i) {
												e[i] = null;
											});
									},
								});
						})(c),
						(function (t) {
							var e = t.charts,
								i = t.each,
								s = t.extend,
								n = t.map,
								o = t.noop,
								r = t.pick;
							s(t.Pointer.prototype, {
								pinchTranslate: function (t, e, i, s, n, o) {
									this.zoomHor &&
										this.pinchTranslateDirection(!0, t, e, i, s, n, o),
										this.zoomVert &&
											this.pinchTranslateDirection(!1, t, e, i, s, n, o);
								},
								pinchTranslateDirection: function (t, e, i, s, n, o, r, a) {
									var h,
										l,
										c,
										d = this.chart,
										p = t ? 'x' : 'y',
										u = t ? 'X' : 'Y',
										f = 'chart' + u,
										g = t ? 'width' : 'height',
										m = d['plot' + (t ? 'Left' : 'Top')],
										x = a || 1,
										v = d.inverted,
										y = d.bounds[t ? 'h' : 'v'],
										b = 1 === e.length,
										k = e[0][f],
										w = i[0][f],
										M = !b && e[1][f],
										S = !b && i[1][f];
									(i = function () {
										!b &&
											20 < Math.abs(k - M) &&
											(x = a || Math.abs(w - S) / Math.abs(k - M)),
											(l = (m - w) / x + k),
											(h = d['plot' + (t ? 'Width' : 'Height')] / x);
									})(),
										(e = l) < y.min
											? ((e = y.min), (c = !0))
											: e + h > y.max && ((e = y.max - h), (c = !0)),
										c
											? ((w -= 0.8 * (w - r[p][0])),
											  b || (S -= 0.8 * (S - r[p][1])),
											  i())
											: (r[p] = [w, S]),
										v || ((o[p] = l - m), (o[g] = h)),
										(o = v ? 1 / x : x),
										(n[g] = h),
										(n[p] = e),
										(s[v ? (t ? 'scaleY' : 'scaleX') : 'scale' + u] = x),
										(s['translate' + u] = o * m + (w - o * k));
								},
								pinch: function (t) {
									var e = this,
										a = e.chart,
										h = e.pinchDown,
										l = t.touches,
										c = l.length,
										d = e.lastValidTouch,
										p = e.hasZoom,
										u = e.selectionMarker,
										f = {},
										g =
											1 === c &&
											((e.inClass(t.target, 'highcharts-tracker') &&
												a.runTrackerClick) ||
												e.runChartClick),
										m = {};
									1 < c && (e.initiated = !0),
										p && e.initiated && !g && t.preventDefault(),
										n(l, function (t) {
											return e.normalize(t);
										}),
										'touchstart' === t.type
											? (i(l, function (t, e) {
													h[e] = {chartX: t.chartX, chartY: t.chartY};
											  }),
											  (d.x = [h[0].chartX, h[1] && h[1].chartX]),
											  (d.y = [h[0].chartY, h[1] && h[1].chartY]),
											  i(a.axes, function (t) {
													if (t.zoomEnabled) {
														var e = a.bounds[t.horiz ? 'h' : 'v'],
															i = t.minPixelPadding,
															s = t.toPixels(r(t.options.min, t.dataMin)),
															n = t.toPixels(r(t.options.max, t.dataMax)),
															o = Math.max(s, n);
														(e.min = Math.min(t.pos, Math.min(s, n) - i)),
															(e.max = Math.max(t.pos + t.len, o + i));
													}
											  }),
											  (e.res = !0))
											: e.followTouchMove && 1 === c
											? this.runPointActions(e.normalize(t))
											: h.length &&
											  (u ||
													(e.selectionMarker = u =
														s({destroy: o, touch: !0}, a.plotBox)),
											  e.pinchTranslate(h, l, f, u, m, d),
											  (e.hasPinched = p),
											  e.scaleGroups(f, m),
											  e.res && ((e.res = !1), this.reset(!1, 0)));
								},
								touch: function (e, i) {
									var s,
										n = this.chart;
									n.index !== t.hoverChartIndex &&
										this.onContainerMouseLeave({relatedTarget: !0}),
										(t.hoverChartIndex = n.index),
										1 === e.touches.length
											? ((e = this.normalize(e)),
											  n.isInsidePlot(
													e.chartX - n.plotLeft,
													e.chartY - n.plotTop
											  ) && !n.openMenu
													? (i && this.runPointActions(e),
													  'touchmove' === e.type &&
															(s =
																!!(i = this.pinchDown)[0] &&
																4 <=
																	Math.sqrt(
																		Math.pow(i[0].chartX - e.chartX, 2) +
																			Math.pow(i[0].chartY - e.chartY, 2)
																	)),
													  r(s, !0) && this.pinch(e))
													: i && this.reset())
											: 2 === e.touches.length && this.pinch(e);
								},
								onContainerTouchStart: function (t) {
									this.zoomOption(t), this.touch(t, !0);
								},
								onContainerTouchMove: function (t) {
									this.touch(t);
								},
								onDocumentTouchEnd: function (i) {
									e[t.hoverChartIndex] && e[t.hoverChartIndex].pointer.drop(i);
								},
							});
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.charts,
								s = t.css,
								n = t.doc,
								o = t.extend,
								r = t.noop,
								a = t.Pointer,
								h = t.removeEvent,
								l = t.win,
								c = t.wrap;
							if (!t.hasTouch && (l.PointerEvent || l.MSPointerEvent)) {
								var d = {},
									p = !!l.PointerEvent,
									u = function () {
										var e = [];
										return (
											(e.item = function (t) {
												return this[t];
											}),
											t.objectEach(d, function (t) {
												e.push({
													pageX: t.pageX,
													pageY: t.pageY,
													target: t.target,
												});
											}),
											e
										);
									},
									f = function (e, s, n, o) {
										('touch' !== e.pointerType &&
											e.pointerType !== e.MSPOINTER_TYPE_TOUCH) ||
											!i[t.hoverChartIndex] ||
											(o(e),
											(o = i[t.hoverChartIndex].pointer)[s]({
												type: n,
												target: e.currentTarget,
												preventDefault: r,
												touches: u(),
											}));
									};
								o(a.prototype, {
									onContainerPointerDown: function (t) {
										f(t, 'onContainerTouchStart', 'touchstart', function (t) {
											d[t.pointerId] = {
												pageX: t.pageX,
												pageY: t.pageY,
												target: t.currentTarget,
											};
										});
									},
									onContainerPointerMove: function (t) {
										f(t, 'onContainerTouchMove', 'touchmove', function (t) {
											(d[t.pointerId] = {pageX: t.pageX, pageY: t.pageY}),
												d[t.pointerId].target ||
													(d[t.pointerId].target = t.currentTarget);
										});
									},
									onDocumentPointerUp: function (t) {
										f(t, 'onDocumentTouchEnd', 'touchend', function (t) {
											delete d[t.pointerId];
										});
									},
									batchMSEvents: function (t) {
										t(
											this.chart.container,
											p ? 'pointerdown' : 'MSPointerDown',
											this.onContainerPointerDown
										),
											t(
												this.chart.container,
												p ? 'pointermove' : 'MSPointerMove',
												this.onContainerPointerMove
											),
											t(
												n,
												p ? 'pointerup' : 'MSPointerUp',
												this.onDocumentPointerUp
											);
									},
								}),
									c(a.prototype, 'init', function (t, e, i) {
										t.call(this, e, i),
											this.hasZoom &&
												s(e.container, {
													'-ms-touch-action': 'none',
													'touch-action': 'none',
												});
									}),
									c(a.prototype, 'setDOMEvents', function (t) {
										t.apply(this),
											(this.hasZoom || this.followTouchMove) &&
												this.batchMSEvents(e);
									}),
									c(a.prototype, 'destroy', function (t) {
										this.batchMSEvents(h), t.call(this);
									});
							}
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.css,
								s = t.discardElement,
								n = t.defined,
								o = t.each,
								r = t.fireEvent,
								a = t.isFirefox,
								h = t.marginNames,
								l = t.merge,
								c = t.pick,
								d = t.setAnimation,
								p = t.stableSort,
								u = t.win,
								f = t.wrap;
							(t.Legend = function (t, e) {
								this.init(t, e);
							}),
								(t.Legend.prototype = {
									init: function (t, i) {
										(this.chart = t),
											this.setOptions(i),
											i.enabled &&
												(this.render(),
												e(this.chart, 'endResize', function () {
													this.legend.positionCheckboxes();
												}),
												this.proximate
													? (this.unchartrender = e(
															this.chart,
															'render',
															function () {
																this.legend.proximatePositions(),
																	this.legend.positionItems();
															}
													  ))
													: this.unchartrender && this.unchartrender());
									},
									setOptions: function (t) {
										var e = c(t.padding, 8);
										(this.options = t),
											(this.itemStyle = t.itemStyle),
											(this.itemHiddenStyle = l(
												this.itemStyle,
												t.itemHiddenStyle
											)),
											(this.itemMarginTop = t.itemMarginTop || 0),
											(this.padding = e),
											(this.initialItemY = e - 5),
											(this.symbolWidth = c(t.symbolWidth, 16)),
											(this.pages = []),
											(this.proximate =
												'proximate' === t.layout && !this.chart.inverted);
									},
									update: function (t, e) {
										var i = this.chart;
										this.setOptions(l(!0, this.options, t)),
											this.destroy(),
											(i.isDirtyLegend = i.isDirtyBox = !0),
											c(e, !0) && i.redraw(),
											r(this, 'afterUpdate');
									},
									colorizeItem: function (t, e) {
										t.legendGroup[e ? 'removeClass' : 'addClass'](
											'highcharts-legend-item-hidden'
										);
										var i = this.options,
											s = t.legendItem,
											n = t.legendLine,
											o = t.legendSymbol,
											a = this.itemHiddenStyle.color,
											h =
												((i = e ? i.itemStyle.color : a), (e && t.color) || a),
											l = t.options && t.options.marker,
											c = {fill: h};
										s && s.css({fill: i, color: i}),
											n && n.attr({stroke: h}),
											o &&
												(l &&
													o.isMarker &&
													((c = t.pointAttribs()),
													e || (c.stroke = c.fill = a)),
												o.attr(c)),
											r(this, 'afterColorizeItem', {item: t, visible: e});
									},
									positionItems: function () {
										o(this.allItems, this.positionItem, this),
											this.chart.isResizing || this.positionCheckboxes();
									},
									positionItem: function (t) {
										var e = (i = this.options).symbolPadding,
											i = !i.rtl,
											s = (o = t._legendItemPos)[0],
											o = o[1],
											r = t.checkbox;
										(t = t.legendGroup) &&
											t.element &&
											t[n(t.translateY) ? 'animate' : 'attr']({
												translateX: i ? s : this.legendWidth - s - 2 * e - 4,
												translateY: o,
											}),
											r && ((r.x = s), (r.y = o));
									},
									destroyItem: function (t) {
										var e = t.checkbox;
										o(
											[
												'legendItem',
												'legendLine',
												'legendSymbol',
												'legendGroup',
											],
											function (e) {
												t[e] && (t[e] = t[e].destroy());
											}
										),
											e && s(t.checkbox);
									},
									destroy: function () {
										function t(t) {
											this[t] && (this[t] = this[t].destroy());
										}
										o(this.getAllItems(), function (e) {
											o(['legendItem', 'legendGroup'], t, e);
										}),
											o(
												'clipRect up down pager nav box title group'.split(' '),
												t,
												this
											),
											(this.display = null);
									},
									positionCheckboxes: function () {
										var t,
											e = this.group && this.group.alignAttr,
											s = this.clipHeight || this.legendHeight,
											n = this.titleHeight;
										e &&
											((t = e.translateY),
											o(
												this.allItems,
												function (o) {
													var r,
														a = o.checkbox;
													a &&
														((r = t + n + a.y + (this.scrollOffset || 0) + 3),
														i(a, {
															left:
																e.translateX +
																o.checkboxOffset +
																a.x -
																20 +
																'px',
															top: r + 'px',
															display:
																this.proximate || (r > t - 6 && r < t + s - 6)
																	? ''
																	: 'none',
														}));
												},
												this
											));
									},
									renderTitle: function () {
										var t = this.options,
											e = this.padding,
											i = t.title,
											s = 0;
										i.text &&
											(this.title ||
												(this.title = this.chart.renderer
													.label(
														i.text,
														e - 3,
														e - 4,
														null,
														null,
														null,
														t.useHTML,
														null,
														'legend-title'
													)
													.attr({zIndex: 1})
													.css(i.style)
													.add(this.group)),
											(s = (t = this.title.getBBox()).height),
											(this.offsetWidth = t.width),
											this.contentGroup.attr({translateY: s})),
											(this.titleHeight = s);
									},
									setText: function (e) {
										var i = this.options;
										e.legendItem.attr({
											text: i.labelFormat
												? t.format(i.labelFormat, e, this.chart.time)
												: i.labelFormatter.call(e),
										});
									},
									renderItem: function (t) {
										var e = this.chart,
											i = e.renderer,
											s = this.options,
											n = this.symbolWidth,
											o = s.symbolPadding,
											r = this.itemStyle,
											a = this.itemHiddenStyle,
											h = 'horizontal' === s.layout ? c(s.itemDistance, 20) : 0,
											d = !s.rtl,
											p = t.legendItem,
											u = !t.series,
											f = !u && t.series.drawLegendSymbol ? t.series : t,
											g = f.options,
											m =
												((h =
													n +
													o +
													h +
													((g =
														this.createCheckboxForItem && g && g.showCheckbox)
														? 20
														: 0)),
												s.useHTML),
											x = t.options.className;
										p ||
											((t.legendGroup = i
												.g('legend-item')
												.addClass(
													'highcharts-' +
														f.type +
														'-series highcharts-color-' +
														t.colorIndex +
														(x ? ' ' + x : '') +
														(u ? ' highcharts-series-' + t.index : '')
												)
												.attr({zIndex: 1})
												.add(this.scrollGroup)),
											(t.legendItem = p =
												i
													.text('', d ? n + o : -o, this.baseline || 0, m)
													.css(l(t.visible ? r : a))
													.attr({align: d ? 'left' : 'right', zIndex: 2})
													.add(t.legendGroup)),
											this.baseline ||
												((n = r.fontSize),
												(this.fontMetrics = i.fontMetrics(n, p)),
												(this.baseline =
													this.fontMetrics.f + 3 + this.itemMarginTop),
												p.attr('y', this.baseline)),
											(this.symbolHeight =
												s.symbolHeight || this.fontMetrics.f),
											f.drawLegendSymbol(this, t),
											this.setItemEvents && this.setItemEvents(t, p, m),
											g && this.createCheckboxForItem(t)),
											this.colorizeItem(t, t.visible),
											r.width ||
												p.css({
													width:
														(s.itemWidth || s.width || e.spacingBox.width) - h,
												}),
											this.setText(t),
											(e = p.getBBox()),
											(t.itemWidth = t.checkboxOffset =
												s.itemWidth || t.legendItemWidth || e.width + h),
											(this.maxItemWidth = Math.max(
												this.maxItemWidth,
												t.itemWidth
											)),
											(this.totalItemWidth += t.itemWidth),
											(this.itemHeight = t.itemHeight =
												Math.round(
													t.legendItemHeight || e.height || this.symbolHeight
												));
									},
									layoutItem: function (t) {
										var e = this.options,
											i = this.padding,
											s = 'horizontal' === e.layout,
											n = t.itemHeight,
											o = e.itemMarginBottom || 0,
											r = this.itemMarginTop,
											a = s ? c(e.itemDistance, 20) : 0,
											h = e.width,
											l = h || this.chart.spacingBox.width - 2 * i - e.x;
										(e =
											e.alignColumns && this.totalItemWidth > l
												? this.maxItemWidth
												: t.itemWidth),
											s &&
												this.itemX - i + e > l &&
												((this.itemX = i),
												(this.itemY += r + this.lastLineHeight + o),
												(this.lastLineHeight = 0)),
											(this.lastItemY = r + this.itemY + o),
											(this.lastLineHeight = Math.max(n, this.lastLineHeight)),
											(t._legendItemPos = [this.itemX, this.itemY]),
											s
												? (this.itemX += e)
												: ((this.itemY += r + n + o),
												  (this.lastLineHeight = n)),
											(this.offsetWidth =
												h ||
												Math.max(
													(s ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i,
													this.offsetWidth
												));
									},
									getAllItems: function () {
										var t = [];
										return (
											o(this.chart.series, function (e) {
												var i = e && e.options;
												e &&
													c(i.showInLegend, !n(i.linkedTo) && void 0, !0) &&
													(t = t.concat(
														e.legendItems ||
															('point' === i.legendType ? e.data : e)
													));
											}),
											r(this, 'afterGetAllItems', {allItems: t}),
											t
										);
									},
									getAlignment: function () {
										var t = this.options;
										return this.proximate
											? t.align.charAt(0) + 'tv'
											: t.floating
											? ''
											: t.align.charAt(0) +
											  t.verticalAlign.charAt(0) +
											  t.layout.charAt(0);
									},
									adjustMargins: function (t, e) {
										var i = this.chart,
											s = this.options,
											r = this.getAlignment();
										r &&
											o(
												[
													/(lth|ct|rth)/,
													/(rtv|rm|rbv)/,
													/(rbh|cb|lbh)/,
													/(lbv|lm|ltv)/,
												],
												function (o, a) {
													o.test(r) &&
														!n(t[a]) &&
														(i[h[a]] = Math.max(
															i[h[a]],
															i.legend[
																(a + 1) % 2 ? 'legendHeight' : 'legendWidth'
															] +
																[1, -1, -1, 1][a] * s[a % 2 ? 'x' : 'y'] +
																c(s.margin, 12) +
																e[a] +
																(0 === a && void 0 !== i.options.title.margin
																	? i.titleOffset + i.options.title.margin
																	: 0)
														));
												}
											);
									},
									proximatePositions: function () {
										var e = this.chart,
											i = [],
											s = 'left' === this.options.align;
										o(
											this.allItems,
											function (n) {
												var o, r;
												(o = s),
													n.xAxis &&
														n.points &&
														(n.xAxis.options.reversed && (o = !o),
														(o = t.find(
															o ? n.points : n.points.slice(0).reverse(),
															function (e) {
																return t.isNumber(e.plotY);
															}
														)),
														(r = n.legendGroup.getBBox().height),
														i.push({
															target: n.visible
																? (o ? o.plotY : n.xAxis.height) - 0.3 * r
																: e.plotHeight,
															size: r,
															item: n,
														}));
											},
											this
										),
											t.distribute(i, e.plotHeight),
											o(i, function (t) {
												t.item._legendItemPos[1] =
													e.plotTop - e.spacing[0] + t.pos;
											});
									},
									render: function () {
										var t,
											e,
											i,
											s = this.chart,
											n = s.renderer,
											r = this.group,
											a = this.box,
											h = this.options,
											c = this.padding;
										(this.itemX = c),
											(this.itemY = this.initialItemY),
											(this.lastItemY = this.offsetWidth = 0),
											r ||
												((this.group = r =
													n.g('legend').attr({zIndex: 7}).add()),
												(this.contentGroup = n.g().attr({zIndex: 1}).add(r)),
												(this.scrollGroup = n.g().add(this.contentGroup))),
											this.renderTitle(),
											(t = this.getAllItems()),
											p(t, function (t, e) {
												return (
													((t.options && t.options.legendIndex) || 0) -
													((e.options && e.options.legendIndex) || 0)
												);
											}),
											h.reversed && t.reverse(),
											(this.allItems = t),
											(this.display = e = !!t.length),
											(this.itemHeight =
												this.totalItemWidth =
												this.maxItemWidth =
												this.lastLineHeight =
													0),
											o(t, this.renderItem, this),
											o(t, this.layoutItem, this),
											(t = (h.width || this.offsetWidth) + c),
											(i =
												this.lastItemY +
												this.lastLineHeight +
												this.titleHeight),
											(i = this.handleOverflow(i)),
											(i += c),
											a ||
												((this.box = a =
													n
														.rect()
														.addClass('highcharts-legend-box')
														.attr({r: h.borderRadius})
														.add(r)),
												(a.isNew = !0)),
											a
												.attr({
													stroke: h.borderColor,
													'stroke-width': h.borderWidth || 0,
													fill: h.backgroundColor || 'none',
												})
												.shadow(h.shadow),
											0 < t &&
												0 < i &&
												(a[a.isNew ? 'attr' : 'animate'](
													a.crisp.call(
														{},
														{x: 0, y: 0, width: t, height: i},
														a.strokeWidth()
													)
												),
												(a.isNew = !1)),
											a[e ? 'show' : 'hide'](),
											(this.legendWidth = t),
											(this.legendHeight = i),
											e &&
												((n = s.spacingBox),
												/(lth|ct|rth)/.test(this.getAlignment()) &&
													(n = l(n, {
														y: n.y + s.titleOffset + s.options.title.margin,
													})),
												r.align(
													l(h, {
														width: t,
														height: i,
														verticalAlign: this.proximate
															? 'top'
															: h.verticalAlign,
													}),
													!0,
													n
												)),
											this.proximate || this.positionItems();
									},
									handleOverflow: function (t) {
										var e,
											i,
											s = this,
											n = (l = this.chart).renderer,
											r = this.options,
											a = r.y,
											h = this.padding,
											l =
												l.spacingBox.height +
												('top' === r.verticalAlign ? -a : a) -
												h,
											d = ((a = r.maxHeight), this.clipRect),
											p = r.navigation,
											u = c(p.animation, !0),
											f = p.arrowSize || 12,
											g = this.nav,
											m = this.pages,
											x = this.allItems,
											v = function (t) {
												'number' == typeof t
													? d.attr({height: t})
													: d &&
													  ((s.clipRect = d.destroy()), s.contentGroup.clip()),
													s.contentGroup.div &&
														(s.contentGroup.div.style.clip = t
															? 'rect(' + h + 'px,9999px,' + (h + t) + 'px,0)'
															: 'auto');
											};
										return (
											'horizontal' !== r.layout ||
												'middle' === r.verticalAlign ||
												r.floating ||
												(l /= 2),
											a && (l = Math.min(l, a)),
											(m.length = 0),
											t > l && !1 !== p.enabled
												? ((this.clipHeight = e =
														Math.max(l - 20 - this.titleHeight - h, 0)),
												  (this.currentPage = c(this.currentPage, 1)),
												  (this.fullHeight = t),
												  o(x, function (t, s) {
														var n = t._legendItemPos[1],
															o = Math.round(t.legendItem.getBBox().height),
															r = m.length;
														(!r ||
															(n - m[r - 1] > e && (i || n) !== m[r - 1])) &&
															(m.push(i || n), r++),
															(t.pageIx = r - 1),
															i && (x[s - 1].pageIx = r - 1),
															s === x.length - 1 &&
																n + o - m[r - 1] > e &&
																(m.push(n), (t.pageIx = r)),
															n !== i && (i = n);
												  }),
												  d ||
														((d = s.clipRect = n.clipRect(0, h, 9999, 0)),
														s.contentGroup.clip(d)),
												  v(e),
												  g ||
														((this.nav = g =
															n.g().attr({zIndex: 1}).add(this.group)),
														(this.up = n
															.symbol('triangle', 0, 0, f, f)
															.on('click', function () {
																s.scroll(-1, u);
															})
															.add(g)),
														(this.pager = n
															.text('', 15, 10)
															.addClass('highcharts-legend-navigation')
															.css(p.style)
															.add(g)),
														(this.down = n
															.symbol('triangle-down', 0, 0, f, f)
															.on('click', function () {
																s.scroll(1, u);
															})
															.add(g))),
												  s.scroll(0),
												  (t = l))
												: g &&
												  (v(),
												  (this.nav = g.destroy()),
												  this.scrollGroup.attr({translateY: 1}),
												  (this.clipHeight = 0)),
											t
										);
									},
									scroll: function (t, e) {
										var i = this.pages,
											s = i.length;
										t = this.currentPage + t;
										var n = this.clipHeight,
											o = this.options.navigation,
											r = this.pager,
											a = this.padding;
										t > s && (t = s),
											0 < t &&
												(void 0 !== e && d(e, this.chart),
												this.nav.attr({
													translateX: a,
													translateY: n + this.padding + 7 + this.titleHeight,
													visibility: 'visible',
												}),
												this.up.attr({
													class:
														1 === t
															? 'highcharts-legend-nav-inactive'
															: 'highcharts-legend-nav-active',
												}),
												r.attr({text: t + '/' + s}),
												this.down.attr({
													x: 18 + this.pager.getBBox().width,
													class:
														t === s
															? 'highcharts-legend-nav-inactive'
															: 'highcharts-legend-nav-active',
												}),
												this.up
													.attr({
														fill: 1 === t ? o.inactiveColor : o.activeColor,
													})
													.css({cursor: 1 === t ? 'default' : 'pointer'}),
												this.down
													.attr({
														fill: t === s ? o.inactiveColor : o.activeColor,
													})
													.css({cursor: t === s ? 'default' : 'pointer'}),
												(this.scrollOffset = -i[t - 1] + this.initialItemY),
												this.scrollGroup.animate({
													translateY: this.scrollOffset,
												}),
												(this.currentPage = t),
												this.positionCheckboxes());
									},
								}),
								(t.LegendSymbolMixin = {
									drawRectangle: function (t, e) {
										var i = t.symbolHeight,
											s = t.options.squareSymbol;
										e.legendSymbol = this.chart.renderer
											.rect(
												s ? (t.symbolWidth - i) / 2 : 0,
												t.baseline - i + 1,
												s ? i : t.symbolWidth,
												i,
												c(t.options.symbolRadius, i / 2)
											)
											.addClass('highcharts-point')
											.attr({zIndex: 3})
											.add(e.legendGroup);
									},
									drawLineMarker: function (t) {
										var e,
											i = this.options,
											s = i.marker,
											n = t.symbolWidth,
											o = t.symbolHeight,
											r = o / 2,
											a = this.chart.renderer,
											h = this.legendGroup;
										(t = t.baseline - Math.round(0.3 * t.fontMetrics.b)),
											(e = {'stroke-width': i.lineWidth || 0}),
											i.dashStyle && (e.dashstyle = i.dashStyle),
											(this.legendLine = a
												.path(['M', 0, t, 'L', n, t])
												.addClass('highcharts-graph')
												.attr(e)
												.add(h)),
											s &&
												!1 !== s.enabled &&
												n &&
												((i = Math.min(c(s.radius, r), r)),
												0 === this.symbol.indexOf('url') &&
													((s = l(s, {width: o, height: o})), (i = 0)),
												(this.legendSymbol = s =
													a
														.symbol(
															this.symbol,
															n / 2 - i,
															t - i,
															2 * i,
															2 * i,
															s
														)
														.addClass('highcharts-point')
														.add(h)),
												(s.isMarker = !0));
									},
								}),
								(/Trident\/7\.0/.test(u.navigator.userAgent) || a) &&
									f(t.Legend.prototype, 'positionItem', function (t, e) {
										var i = this,
											s = function () {
												e._legendItemPos && t.call(i, e);
											};
										s(), setTimeout(s);
									});
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.animate,
								s = t.animObject,
								n = t.attr,
								o = t.doc,
								r = t.Axis,
								a = t.createElement,
								h = t.defaultOptions,
								l = t.discardElement,
								c = t.charts,
								d = t.css,
								p = t.defined,
								u = t.each,
								f = t.extend,
								g = t.find,
								m = t.fireEvent,
								x = t.grep,
								v = t.isNumber,
								y = t.isObject,
								b = t.isString,
								k = t.Legend,
								w = t.marginNames,
								M = t.merge,
								S = t.objectEach,
								T = t.Pointer,
								A = t.pick,
								L = t.pInt,
								P = t.removeEvent,
								C = t.seriesTypes,
								O = t.splat,
								I = t.syncTimeout,
								D = t.win,
								z = (t.Chart = function () {
									this.getArgs.apply(this, arguments);
								});
							(t.chart = function (t, e, i) {
								return new z(t, e, i);
							}),
								f(z.prototype, {
									callbacks: [],
									getArgs: function () {
										var t = [].slice.call(arguments);
										(b(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()),
											this.init(t[0], t[1]);
									},
									init: function (i, s) {
										var n,
											o,
											r = i.series,
											a = i.plotOptions || {};
										m(this, 'init', {args: arguments}, function () {
											for (o in ((i.series = null), (n = M(h, i)).plotOptions))
												n.plotOptions[o].tooltip =
													(a[o] && M(a[o].tooltip)) || void 0;
											(n.tooltip.userOptions =
												(i.chart &&
													i.chart.forExport &&
													i.tooltip.userOptions) ||
												i.tooltip),
												(n.series = i.series = r),
												(this.userOptions = i);
											var l = n.chart,
												d = l.events;
											(this.margin = []),
												(this.spacing = []),
												(this.bounds = {h: {}, v: {}}),
												(this.labelCollectors = []),
												(this.callback = s),
												(this.isResizing = 0),
												(this.options = n),
												(this.axes = []),
												(this.series = []),
												(this.time =
													i.time && t.keys(i.time).length
														? new t.Time(i.time)
														: t.time),
												(this.hasCartesianSeries = l.showAxes);
											var p = this;
											(p.index = c.length),
												c.push(p),
												t.chartCount++,
												d &&
													S(d, function (t, i) {
														e(p, i, t);
													}),
												(p.xAxis = []),
												(p.yAxis = []),
												(p.pointCount = p.colorCounter = p.symbolCounter = 0),
												m(p, 'afterInit'),
												p.firstRender();
										});
									},
									initSeries: function (e) {
										var i = this.options.chart;
										return (
											(i = C[e.type || i.type || i.defaultSeriesType]) ||
												t.error(17, !0),
											(i = new i()).init(this, e),
											i
										);
									},
									orderSeries: function (t) {
										var e = this.series;
										for (t = t || 0; t < e.length; t++)
											e[t] && ((e[t].index = t), (e[t].name = e[t].getName()));
									},
									isInsidePlot: function (t, e, i) {
										var s = i ? e : t;
										return (
											(t = i ? t : e),
											0 <= s &&
												s <= this.plotWidth &&
												0 <= t &&
												t <= this.plotHeight
										);
									},
									redraw: function (e) {
										m(this, 'beforeRedraw');
										var i,
											s,
											n,
											o = this.axes,
											r = this.series,
											a = this.pointer,
											h = this.legend,
											l = this.userOptions.legend,
											c = this.isDirtyLegend,
											d = this.hasCartesianSeries,
											p = this.isDirtyBox,
											g = this.renderer,
											x = g.isHidden(),
											v = [];
										for (
											this.setResponsive && this.setResponsive(!1),
												t.setAnimation(e, this),
												x && this.temporaryDisplay(),
												this.layOutTitles(),
												e = r.length;
											e--;

										)
											if (
												(n = r[e]).options.stacking &&
												((i = !0), n.isDirty)
											) {
												s = !0;
												break;
											}
										if (s)
											for (e = r.length; e--; )
												(n = r[e]).options.stacking && (n.isDirty = !0);
										u(r, function (t) {
											t.isDirty &&
												('point' === t.options.legendType
													? (t.updateTotals && t.updateTotals(), (c = !0))
													: l &&
													  (l.labelFormatter || l.labelFormat) &&
													  (c = !0)),
												t.isDirtyData && m(t, 'updatedData');
										}),
											c &&
												h &&
												h.options.enabled &&
												(h.render(), (this.isDirtyLegend = !1)),
											i && this.getStacks(),
											d &&
												u(o, function (t) {
													t.updateNames(),
														t.updateYNames && t.updateYNames(),
														t.setScale();
												}),
											this.getMargins(),
											d &&
												(u(o, function (t) {
													t.isDirty && (p = !0);
												}),
												u(o, function (t) {
													var e = t.min + ',' + t.max;
													t.extKey !== e &&
														((t.extKey = e),
														v.push(function () {
															m(
																t,
																'afterSetExtremes',
																f(t.eventArgs, t.getExtremes())
															),
																delete t.eventArgs;
														})),
														(p || i) && t.redraw();
												})),
											p && this.drawChartBox(),
											m(this, 'predraw'),
											u(r, function (t) {
												(p || t.isDirty) && t.visible && t.redraw(),
													(t.isDirtyData = !1);
											}),
											a && a.reset(!0),
											g.draw(),
											m(this, 'redraw'),
											m(this, 'render'),
											x && this.temporaryDisplay(!0),
											u(v, function (t) {
												t.call();
											});
									},
									get: function (t) {
										function e(e) {
											return e.id === t || (e.options && e.options.id === t);
										}
										var i,
											s,
											n = this.series;
										for (
											i = g(this.axes, e) || g(this.series, e), s = 0;
											!i && s < n.length;
											s++
										)
											i = g(n[s].points || [], e);
										return i;
									},
									getAxes: function () {
										var t = this,
											e = ((i = this.options).xAxis = O(i.xAxis || {})),
											i = (i.yAxis = O(i.yAxis || {}));
										m(this, 'getAxes'),
											u(e, function (t, e) {
												(t.index = e), (t.isX = !0);
											}),
											u(i, function (t, e) {
												t.index = e;
											}),
											(e = e.concat(i)),
											u(e, function (e) {
												new r(t, e);
											}),
											m(this, 'afterGetAxes');
									},
									getSelectedPoints: function () {
										var t = [];
										return (
											u(this.series, function (e) {
												t = t.concat(
													x(e.data || [], function (t) {
														return t.selected;
													})
												);
											}),
											t
										);
									},
									getSelectedSeries: function () {
										return x(this.series, function (t) {
											return t.selected;
										});
									},
									setTitle: function (t, e, i) {
										var s,
											n = this,
											o = n.options;
										(s = o.title =
											M(
												{
													style: {
														color: '#333333',
														fontSize: o.isStock ? '16px' : '18px',
													},
												},
												o.title,
												t
											)),
											(o = o.subtitle =
												M({style: {color: '#666666'}}, o.subtitle, e)),
											u(
												[
													['title', t, s],
													['subtitle', e, o],
												],
												function (t, e) {
													var i = t[0],
														s = n[i],
														o = t[1];
													(t = t[2]),
														s && o && (n[i] = s = s.destroy()),
														t &&
															!s &&
															((n[i] = n.renderer
																.text(t.text, 0, 0, t.useHTML)
																.attr({
																	align: t.align,
																	class: 'highcharts-' + i,
																	zIndex: t.zIndex || 4,
																})
																.add()),
															(n[i].update = function (t) {
																n.setTitle(!e && t, e && t);
															}),
															n[i].css(t.style));
												}
											),
											n.layOutTitles(i);
									},
									layOutTitles: function (t) {
										var e,
											i = 0,
											s = this.renderer,
											n = this.spacingBox;
										u(
											['title', 'subtitle'],
											function (t) {
												var e,
													o = this[t],
													r = this.options[t];
												(t = 'title' === t ? -3 : r.verticalAlign ? 0 : i + 2),
													o &&
														((e = r.style.fontSize),
														(e = s.fontMetrics(e, o).b),
														o
															.css({
																width:
																	(r.width || n.width + r.widthAdjust) + 'px',
															})
															.align(f({y: t + e}, r), !1, 'spacingBox'),
														r.floating ||
															r.verticalAlign ||
															(i = Math.ceil(i + o.getBBox(r.useHTML).height)));
											},
											this
										),
											(e = this.titleOffset !== i),
											(this.titleOffset = i),
											!this.isDirtyBox &&
												e &&
												((this.isDirtyBox = this.isDirtyLegend = e),
												this.hasRendered &&
													A(t, !0) &&
													this.isDirtyBox &&
													this.redraw());
									},
									getChartSize: function () {
										var e = (i = this.options.chart).width,
											i = i.height,
											s = this.renderTo;
										p(e) || (this.containerWidth = t.getStyle(s, 'width')),
											p(i) || (this.containerHeight = t.getStyle(s, 'height')),
											(this.chartWidth = Math.max(
												0,
												e || this.containerWidth || 600
											)),
											(this.chartHeight = Math.max(
												0,
												t.relativeLength(i, this.chartWidth) ||
													(1 < this.containerHeight
														? this.containerHeight
														: 400)
											));
									},
									temporaryDisplay: function (e) {
										var i = this.renderTo;
										if (e)
											for (; i && i.style; )
												i.hcOrigStyle &&
													(t.css(i, i.hcOrigStyle), delete i.hcOrigStyle),
													i.hcOrigDetached &&
														(o.body.removeChild(i), (i.hcOrigDetached = !1)),
													(i = i.parentNode);
										else
											for (
												;
												i &&
												i.style &&
												(o.body.contains(i) ||
													i.parentNode ||
													((i.hcOrigDetached = !0), o.body.appendChild(i)),
												('none' === t.getStyle(i, 'display', !1) ||
													i.hcOricDetached) &&
													((i.hcOrigStyle = {
														display: i.style.display,
														height: i.style.height,
														overflow: i.style.overflow,
													}),
													(e = {display: 'block', overflow: 'hidden'}),
													i !== this.renderTo && (e.height = 0),
													t.css(i, e),
													i.offsetWidth ||
														i.style.setProperty(
															'display',
															'block',
															'important'
														)),
												(i = i.parentNode) !== o.body);

											);
									},
									setClassName: function (t) {
										this.container.className =
											'highcharts-container ' + (t || '');
									},
									getContainer: function () {
										var e,
											i,
											s,
											r = this.options,
											h = r.chart;
										e = this.renderTo;
										var l,
											d = t.uniqueKey();
										e || (this.renderTo = e = h.renderTo),
											b(e) && (this.renderTo = e = o.getElementById(e)),
											e || t.error(13, !0),
											(i = L(n(e, 'data-highcharts-chart'))),
											v(i) && c[i] && c[i].hasRendered && c[i].destroy(),
											n(e, 'data-highcharts-chart', this.index),
											(e.innerHTML = ''),
											h.skipClone || e.offsetWidth || this.temporaryDisplay(),
											this.getChartSize(),
											(i = this.chartWidth),
											(s = this.chartHeight),
											(l = f(
												{
													position: 'relative',
													overflow: 'hidden',
													width: i + 'px',
													height: s + 'px',
													textAlign: 'left',
													lineHeight: 'normal',
													zIndex: 0,
													'-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
												},
												h.style
											)),
											(this.container = e = a('div', {id: d}, l, e)),
											(this._cursor = e.style.cursor),
											(this.renderer = new (t[h.renderer] || t.Renderer)(
												e,
												i,
												s,
												null,
												h.forExport,
												r.exporting && r.exporting.allowHTML
											)),
											this.setClassName(h.className),
											this.renderer.setStyle(h.style),
											(this.renderer.chartIndex = this.index),
											m(this, 'afterGetContainer');
									},
									getMargins: function (t) {
										var e = this.spacing,
											i = this.margin,
											s = this.titleOffset;
										this.resetMargins(),
											s &&
												!p(i[0]) &&
												(this.plotTop = Math.max(
													this.plotTop,
													s + this.options.title.margin + e[0]
												)),
											this.legend &&
												this.legend.display &&
												this.legend.adjustMargins(i, e),
											m(this, 'getMargins'),
											t || this.getAxisMargins();
									},
									getAxisMargins: function () {
										var t = this,
											e = (t.axisOffset = [0, 0, 0, 0]),
											i = t.margin;
										t.hasCartesianSeries &&
											u(t.axes, function (t) {
												t.visible && t.getOffset();
											}),
											u(w, function (s, n) {
												p(i[n]) || (t[s] += e[n]);
											}),
											t.setChartSize();
									},
									reflow: function (e) {
										var i = this,
											s = i.options.chart,
											n = i.renderTo,
											r = p(s.width) && p(s.height),
											a = s.width || t.getStyle(n, 'width');
										(s = s.height || t.getStyle(n, 'height')),
											(n = e ? e.target : D),
											r ||
												i.isPrinting ||
												!a ||
												!s ||
												(n !== D && n !== o) ||
												((a === i.containerWidth && s === i.containerHeight) ||
													(t.clearTimeout(i.reflowTimeout),
													(i.reflowTimeout = I(
														function () {
															i.container && i.setSize(void 0, void 0, !1);
														},
														e ? 100 : 0
													))),
												(i.containerWidth = a),
												(i.containerHeight = s));
									},
									setReflow: function (t) {
										var i = this;
										!1 === t || this.unbindReflow
											? !1 === t &&
											  this.unbindReflow &&
											  (this.unbindReflow = this.unbindReflow())
											: ((this.unbindReflow = e(D, 'resize', function (t) {
													i.reflow(t);
											  })),
											  e(this, 'destroy', this.unbindReflow));
									},
									setSize: function (e, n, o) {
										var r = this,
											a = r.renderer;
										(r.isResizing += 1),
											t.setAnimation(o, r),
											(r.oldChartHeight = r.chartHeight),
											(r.oldChartWidth = r.chartWidth),
											void 0 !== e && (r.options.chart.width = e),
											void 0 !== n && (r.options.chart.height = n),
											r.getChartSize(),
											((e = a.globalAnimation) ? i : d)(
												r.container,
												{
													width: r.chartWidth + 'px',
													height: r.chartHeight + 'px',
												},
												e
											),
											r.setChartSize(!0),
											a.setSize(r.chartWidth, r.chartHeight, o),
											u(r.axes, function (t) {
												(t.isDirty = !0), t.setScale();
											}),
											(r.isDirtyLegend = !0),
											(r.isDirtyBox = !0),
											r.layOutTitles(),
											r.getMargins(),
											r.redraw(o),
											(r.oldChartHeight = null),
											m(r, 'resize'),
											I(function () {
												r &&
													m(r, 'endResize', null, function () {
														--r.isResizing;
													});
											}, s(e).duration);
									},
									setChartSize: function (t) {
										var e,
											i,
											s,
											n,
											o = this.inverted,
											r = this.renderer,
											a = this.chartWidth,
											h = this.chartHeight,
											l = this.options.chart,
											c = this.spacing,
											d = this.clipOffset;
										(this.plotLeft = e = Math.round(this.plotLeft)),
											(this.plotTop = i = Math.round(this.plotTop)),
											(this.plotWidth = s =
												Math.max(0, Math.round(a - e - this.marginRight))),
											(this.plotHeight = n =
												Math.max(0, Math.round(h - i - this.marginBottom))),
											(this.plotSizeX = o ? n : s),
											(this.plotSizeY = o ? s : n),
											(this.plotBorderWidth = l.plotBorderWidth || 0),
											(this.spacingBox = r.spacingBox =
												{
													x: c[3],
													y: c[0],
													width: a - c[3] - c[1],
													height: h - c[0] - c[2],
												}),
											(this.plotBox = r.plotBox =
												{x: e, y: i, width: s, height: n}),
											(a = 2 * Math.floor(this.plotBorderWidth / 2)),
											(o = Math.ceil(Math.max(a, d[3]) / 2)),
											(r = Math.ceil(Math.max(a, d[0]) / 2)),
											(this.clipBox = {
												x: o,
												y: r,
												width: Math.floor(
													this.plotSizeX - Math.max(a, d[1]) / 2 - o
												),
												height: Math.max(
													0,
													Math.floor(this.plotSizeY - Math.max(a, d[2]) / 2 - r)
												),
											}),
											t ||
												u(this.axes, function (t) {
													t.setAxisSize(), t.setAxisTranslation();
												}),
											m(this, 'afterSetChartSize', {skipAxes: t});
									},
									resetMargins: function () {
										var t = this,
											e = t.options.chart;
										u(['margin', 'spacing'], function (i) {
											var s = e[i],
												n = y(s) ? s : [s, s, s, s];
											u(['Top', 'Right', 'Bottom', 'Left'], function (s, o) {
												t[i][o] = A(e[i + s], n[o]);
											});
										}),
											u(w, function (e, i) {
												t[e] = A(t.margin[i], t.spacing[i]);
											}),
											(t.axisOffset = [0, 0, 0, 0]),
											(t.clipOffset = [0, 0, 0, 0]);
									},
									drawChartBox: function () {
										var t,
											e,
											i = this.options.chart,
											s = this.renderer,
											n = this.chartWidth,
											o = this.chartHeight,
											r = this.chartBackground,
											a = this.plotBackground,
											h = this.plotBorder,
											l = this.plotBGImage,
											c = i.backgroundColor,
											d = i.plotBackgroundColor,
											p = i.plotBackgroundImage,
											u = this.plotLeft,
											f = this.plotTop,
											g = this.plotWidth,
											x = this.plotHeight,
											v = this.plotBox,
											y = this.clipRect,
											b = this.clipBox,
											k = 'animate';
										r ||
											((this.chartBackground = r =
												s.rect().addClass('highcharts-background').add()),
											(k = 'attr')),
											(e = (t = i.borderWidth || 0) + (i.shadow ? 8 : 0)),
											(c = {fill: c || 'none'}),
											(t || r['stroke-width']) &&
												((c.stroke = i.borderColor), (c['stroke-width'] = t)),
											r.attr(c).shadow(i.shadow),
											r[k]({
												x: e / 2,
												y: e / 2,
												width: n - e - (t % 2),
												height: o - e - (t % 2),
												r: i.borderRadius,
											}),
											(k = 'animate'),
											a ||
												((k = 'attr'),
												(this.plotBackground = a =
													s
														.rect()
														.addClass('highcharts-plot-background')
														.add())),
											a[k](v),
											a.attr({fill: d || 'none'}).shadow(i.plotShadow),
											p &&
												(l
													? l.animate(v)
													: (this.plotBGImage = s.image(p, u, f, g, x).add())),
											y
												? y.animate({width: b.width, height: b.height})
												: (this.clipRect = s.clipRect(b)),
											(k = 'animate'),
											h ||
												((k = 'attr'),
												(this.plotBorder = h =
													s
														.rect()
														.addClass('highcharts-plot-border')
														.attr({zIndex: 1})
														.add())),
											h.attr({
												stroke: i.plotBorderColor,
												'stroke-width': i.plotBorderWidth || 0,
												fill: 'none',
											}),
											h[k](
												h.crisp(
													{x: u, y: f, width: g, height: x},
													-h.strokeWidth()
												)
											),
											(this.isDirtyBox = !1),
											m(this, 'afterDrawChartBox');
									},
									propFromSeries: function () {
										var t,
											e,
											i,
											s = this,
											n = s.options.chart,
											o = s.options.series;
										u(['inverted', 'angular', 'polar'], function (r) {
											for (
												t = C[n.type || n.defaultSeriesType],
													i = n[r] || (t && t.prototype[r]),
													e = o && o.length;
												!i && e--;

											)
												(t = C[o[e].type]) && t.prototype[r] && (i = !0);
											s[r] = i;
										});
									},
									linkSeries: function () {
										var t = this,
											e = t.series;
										u(e, function (t) {
											t.linkedSeries.length = 0;
										}),
											u(e, function (e) {
												var i = e.options.linkedTo;
												b(i) &&
													(i =
														':previous' === i
															? t.series[e.index - 1]
															: t.get(i)) &&
													i.linkedParent !== e &&
													(i.linkedSeries.push(e),
													(e.linkedParent = i),
													(e.visible = A(
														e.options.visible,
														i.options.visible,
														e.visible
													)));
											}),
											m(this, 'afterLinkSeries');
									},
									renderSeries: function () {
										u(this.series, function (t) {
											t.translate(), t.render();
										});
									},
									renderLabels: function () {
										var t = this,
											e = t.options.labels;
										e.items &&
											u(e.items, function (i) {
												var s = f(e.style, i.style),
													n = L(s.left) + t.plotLeft,
													o = L(s.top) + t.plotTop + 12;
												delete s.left,
													delete s.top,
													t.renderer
														.text(i.html, n, o)
														.attr({zIndex: 2})
														.css(s)
														.add();
											});
									},
									render: function () {
										var t,
											e,
											i,
											s = this.axes,
											n = this.renderer,
											o = this.options;
										this.setTitle(),
											(this.legend = new k(this, o.legend)),
											this.getStacks && this.getStacks(),
											this.getMargins(!0),
											this.setChartSize(),
											(o = this.plotWidth),
											(t = this.plotHeight = Math.max(this.plotHeight - 21, 0)),
											u(s, function (t) {
												t.setScale();
											}),
											this.getAxisMargins(),
											(e = 1.1 < o / this.plotWidth),
											(i = 1.05 < t / this.plotHeight),
											(e || i) &&
												(u(s, function (t) {
													((t.horiz && e) || (!t.horiz && i)) &&
														t.setTickInterval(!0);
												}),
												this.getMargins()),
											this.drawChartBox(),
											this.hasCartesianSeries &&
												u(s, function (t) {
													t.visible && t.render();
												}),
											this.seriesGroup ||
												(this.seriesGroup = n
													.g('series-group')
													.attr({zIndex: 3})
													.add()),
											this.renderSeries(),
											this.renderLabels(),
											this.addCredits(),
											this.setResponsive && this.setResponsive(),
											(this.hasRendered = !0);
									},
									addCredits: function (t) {
										var e = this;
										(t = M(!0, this.options.credits, t)).enabled &&
											!this.credits &&
											((this.credits = this.renderer
												.text(t.text + (this.mapCredits || ''), 0, 0)
												.addClass('highcharts-credits')
												.on('click', function () {
													t.href && (D.location.href = t.href);
												})
												.attr({align: t.position.align, zIndex: 8})
												.css(t.style)
												.add()
												.align(t.position)),
											(this.credits.update = function (t) {
												(e.credits = e.credits.destroy()), e.addCredits(t);
											}));
									},
									destroy: function () {
										var e,
											i = this,
											s = i.axes,
											n = i.series,
											o = i.container,
											r = o && o.parentNode;
										for (
											m(i, 'destroy'),
												i.renderer.forExport
													? t.erase(c, i)
													: (c[i.index] = void 0),
												t.chartCount--,
												i.renderTo.removeAttribute('data-highcharts-chart'),
												P(i),
												e = s.length;
											e--;

										)
											s[e] = s[e].destroy();
										for (
											this.scroller &&
												this.scroller.destroy &&
												this.scroller.destroy(),
												e = n.length;
											e--;

										)
											n[e] = n[e].destroy();
										u(
											'title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer'.split(
												' '
											),
											function (t) {
												var e = i[t];
												e && e.destroy && (i[t] = e.destroy());
											}
										),
											o && ((o.innerHTML = ''), P(o), r && l(o)),
											S(i, function (t, e) {
												delete i[e];
											});
									},
									firstRender: function () {
										var t = this,
											e = t.options;
										(t.isReadyToRender && !t.isReadyToRender()) ||
											(t.getContainer(),
											t.resetMargins(),
											t.setChartSize(),
											t.propFromSeries(),
											t.getAxes(),
											u(e.series || [], function (e) {
												t.initSeries(e);
											}),
											t.linkSeries(),
											m(t, 'beforeRender'),
											T && (t.pointer = new T(t, e)),
											t.render(),
											!t.renderer.imgCount && t.onload && t.onload(),
											t.temporaryDisplay(!0));
									},
									onload: function () {
										u(
											[this.callback].concat(this.callbacks),
											function (t) {
												t && void 0 !== this.index && t.apply(this, [this]);
											},
											this
										),
											m(this, 'load'),
											m(this, 'render'),
											p(this.index) &&
												this.setReflow(this.options.chart.reflow),
											(this.onload = null);
									},
								});
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.Chart,
								s = t.each;
							e(i, 'afterSetChartSize', function (e) {
								var i = this.options.chart.scrollablePlotArea;
								(i = i && i.minWidth) &&
									!this.renderer.forExport &&
									(this.scrollablePixels = i =
										Math.max(0, i - this.chartWidth)) &&
									((this.plotWidth += i),
									(this.clipBox.width += i),
									e.skipAxes ||
										s(this.axes, function (e) {
											1 === e.side
												? (e.getPlotLinePath = function () {
														var i,
															s = this.right;
														return (
															(this.right = s - e.chart.scrollablePixels),
															(i = t.Axis.prototype.getPlotLinePath.apply(
																this,
																arguments
															)),
															(this.right = s),
															i
														);
												  })
												: (e.setAxisSize(), e.setAxisTranslation());
										}));
							}),
								e(i, 'render', function () {
									this.scrollablePixels
										? (this.setUpScrolling && this.setUpScrolling(),
										  this.applyFixed())
										: this.fixedDiv && this.applyFixed();
								}),
								(i.prototype.setUpScrolling = function () {
									(this.scrollingContainer = t.createElement(
										'div',
										{className: 'highcharts-scrolling'},
										{overflowX: 'auto', WebkitOverflowScrolling: 'touch'},
										this.renderTo
									)),
										(this.innerContainer = t.createElement(
											'div',
											{className: 'highcharts-inner-container'},
											null,
											this.scrollingContainer
										)),
										this.innerContainer.appendChild(this.container),
										(this.setUpScrolling = null);
								}),
								(i.prototype.applyFixed = function () {
									var e,
										i,
										s = this.container;
									(n = !this.fixedDiv) &&
										((this.fixedDiv = t.createElement(
											'div',
											{className: 'highcharts-fixed'},
											{
												position: 'absolute',
												overflow: 'hidden',
												pointerEvents: 'none',
												zIndex: 2,
											},
											null,
											!0
										)),
										this.renderTo.insertBefore(
											this.fixedDiv,
											this.renderTo.firstChild
										),
										(this.fixedRenderer = e =
											new t.Renderer(this.fixedDiv, 0, 0)),
										(this.scrollableMask = e
											.path()
											.attr({
												fill: t
													.color(this.options.chart.backgroundColor || '#fff')
													.setOpacity(0.85)
													.get(),
												zIndex: -1,
											})
											.addClass('highcharts-scrollable-mask')
											.add()),
										t.each(
											[
												this.inverted
													? '.highcharts-xaxis'
													: '.highcharts-yaxis',
												this.inverted
													? '.highcharts-xaxis-labels'
													: '.highcharts-yaxis-labels',
												'.highcharts-contextbutton',
												'.highcharts-credits',
												'.highcharts-legend',
												'.highcharts-subtitle',
												'.highcharts-title',
												'.highcharts-legend-checkbox',
											],
											function (i) {
												t.each(s.querySelectorAll(i), function (t) {
													(t.namespaceURI === e.SVG_NS
														? e.box
														: e.box.parentNode
													).appendChild(t),
														(t.style.pointerEvents = 'auto');
												});
											}
										)),
										this.fixedRenderer.setSize(
											this.chartWidth,
											this.chartHeight
										),
										(i = this.chartWidth + this.scrollablePixels),
										t.stop(this.container),
										(this.container.style.width = i + 'px'),
										this.renderer.boxWrapper.attr({
											width: i,
											height: this.chartHeight,
											viewBox: [0, 0, i, this.chartHeight].join(' '),
										}),
										this.chartBackground.attr({width: i}),
										n &&
											(i = this.options.chart.scrollablePlotArea)
												.scrollPositionX &&
											(this.scrollingContainer.scrollLeft =
												this.scrollablePixels * i.scrollPositionX),
										(n = this.axisOffset),
										(i = this.plotTop - n[0] - 1);
									var n = this.plotTop + this.plotHeight + n[2],
										o = this.plotLeft + this.plotWidth - this.scrollablePixels;
									this.scrollableMask.attr({
										d: this.scrollablePixels
											? [
													'M',
													0,
													i,
													'L',
													this.plotLeft - 1,
													i,
													'L',
													this.plotLeft - 1,
													n,
													'L',
													0,
													n,
													'Z',
													'M',
													o,
													i,
													'L',
													this.chartWidth,
													i,
													'L',
													this.chartWidth,
													n,
													'L',
													o,
													n,
													'Z',
											  ]
											: ['M', 0, 0],
									});
								});
						})(c),
						(function (t) {
							var e,
								i = t.each,
								s = t.extend,
								n = t.erase,
								o = t.fireEvent,
								r = t.format,
								a = t.isArray,
								h = t.isNumber,
								l = t.pick,
								c = t.uniqueKey,
								d = t.defined,
								p = t.removeEvent;
							(t.Point = e = function () {}),
								(t.Point.prototype = {
									init: function (t, e, i) {
										return (
											(this.series = t),
											(this.color = t.color),
											this.applyOptions(e, i),
											(this.id = d(this.id) ? this.id : c()),
											t.options.colorByPoint
												? ((e = t.options.colors || t.chart.options.colors),
												  (this.color = this.color || e[t.colorCounter]),
												  (e = e.length),
												  (i = t.colorCounter),
												  t.colorCounter++,
												  t.colorCounter === e && (t.colorCounter = 0))
												: (i = t.colorIndex),
											(this.colorIndex = l(this.colorIndex, i)),
											t.chart.pointCount++,
											o(this, 'afterInit'),
											this
										);
									},
									applyOptions: function (t, i) {
										var n = this.series,
											o = n.options.pointValKey || n.pointValKey;
										return (
											(t = e.prototype.optionsToObject.call(this, t)),
											s(this, t),
											(this.options = this.options ? s(this.options, t) : t),
											t.group && delete this.group,
											t.dataLabels && delete this.dataLabels,
											o && (this.y = this[o]),
											(this.isNull = l(
												this.isValid && !this.isValid(),
												null === this.x || !h(this.y, !0)
											)),
											this.selected && (this.state = 'select'),
											'name' in this &&
												void 0 === i &&
												n.xAxis &&
												n.xAxis.hasNames &&
												(this.x = n.xAxis.nameToX(this)),
											void 0 === this.x &&
												n &&
												(this.x = void 0 === i ? n.autoIncrement(this) : i),
											this
										);
									},
									setNestedProperty: function (e, i, s) {
										return (
											(s = s.split('.')),
											t.reduce(
												s,
												function (e, s, n, o) {
													return (
														(e[s] =
															o.length - 1 === n
																? i
																: t.isObject(e[s], !0)
																? e[s]
																: {}),
														e[s]
													);
												},
												e
											),
											e
										);
									},
									optionsToObject: function (e) {
										var i = {},
											s = this.series,
											n = s.options.keys,
											o = n || s.pointArrayMap || ['y'],
											r = o.length,
											l = 0,
											c = 0;
										if (h(e) || null === e) i[o[0]] = e;
										else if (a(e))
											for (
												!n &&
												e.length > r &&
												('string' == (s = typeof e[0])
													? (i.name = e[0])
													: 'number' === s && (i.x = e[0]),
												l++);
												c < r;

											)
												(n && void 0 === e[l]) ||
													(0 < o[c].indexOf('.')
														? t.Point.prototype.setNestedProperty(i, e[l], o[c])
														: (i[o[c]] = e[l])),
													l++,
													c++;
										else
											'object' == typeof e &&
												((i = e),
												e.dataLabels && (s._hasPointLabels = !0),
												e.marker && (s._hasPointMarkers = !0));
										return i;
									},
									getClassName: function () {
										return (
											'highcharts-point' +
											(this.selected ? ' highcharts-point-select' : '') +
											(this.negative ? ' highcharts-negative' : '') +
											(this.isNull ? ' highcharts-null-point' : '') +
											(void 0 !== this.colorIndex
												? ' highcharts-color-' + this.colorIndex
												: '') +
											(this.options.className
												? ' ' + this.options.className
												: '') +
											(this.zone && this.zone.className
												? ' ' +
												  this.zone.className.replace('highcharts-negative', '')
												: '')
										);
									},
									getZone: function () {
										var t,
											e = (i = this.series).zones,
											i = i.zoneAxis || 'y',
											s = 0;
										for (t = e[s]; this[i] >= t.value; ) t = e[++s];
										return (
											this.nonZonedColor || (this.nonZonedColor = this.color),
											(this.color =
												t && t.color && !this.options.color
													? t.color
													: this.nonZonedColor),
											t
										);
									},
									destroy: function () {
										var t,
											e = this.series.chart,
											i = e.hoverPoints;
										for (t in (e.pointCount--,
										i &&
											(this.setState(),
											n(i, this),
											i.length || (e.hoverPoints = null)),
										this === e.hoverPoint && this.onMouseOut(),
										(this.graphic || this.dataLabel || this.dataLabels) &&
											(p(this), this.destroyElements()),
										this.legendItem && e.legend.destroyItem(this),
										this))
											this[t] = null;
									},
									destroyElements: function () {
										for (
											var t,
												e = [
													'graphic',
													'dataLabel',
													'dataLabelUpper',
													'connector',
													'shadowGroup',
												],
												s = 6;
											s--;

										)
											this[(t = e[s])] && (this[t] = this[t].destroy());
										this.dataLabels &&
											(i(this.dataLabels, function (t) {
												t.element && t.destroy();
											}),
											delete this.dataLabels),
											this.connectors &&
												(i(this.connectors, function (t) {
													t.element && t.destroy();
												}),
												delete this.connectors);
									},
									getLabelConfig: function () {
										return {
											x: this.category,
											y: this.y,
											color: this.color,
											colorIndex: this.colorIndex,
											key: this.name || this.category,
											series: this.series,
											point: this,
											percentage: this.percentage,
											total: this.total || this.stackTotal,
										};
									},
									tooltipFormatter: function (t) {
										var e = this.series,
											s = e.tooltipOptions,
											n = l(s.valueDecimals, ''),
											o = s.valuePrefix || '',
											a = s.valueSuffix || '';
										return (
											i(e.pointArrayMap || ['y'], function (e) {
												(e = '{point.' + e),
													(o || a) &&
														(t = t.replace(
															RegExp(e + '}', 'g'),
															o + e + '}' + a
														)),
													(t = t.replace(
														RegExp(e + '}', 'g'),
														e + ':,.' + n + 'f}'
													));
											}),
											r(t, {point: this, series: this.series}, e.chart.time)
										);
									},
									firePointEvent: function (t, e, i) {
										var s = this,
											n = this.series.options;
										(n.point.events[t] ||
											(s.options && s.options.events && s.options.events[t])) &&
											this.importEvents(),
											'click' === t &&
												n.allowPointSelect &&
												(i = function (t) {
													s.select &&
														s.select(
															null,
															t.ctrlKey || t.metaKey || t.shiftKey
														);
												}),
											o(this, t, e, i);
									},
									visible: !0,
								});
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.animObject,
								s = t.arrayMax,
								n = t.arrayMin,
								o = t.correctFloat,
								r = t.defaultOptions,
								a = t.defaultPlotOptions,
								h = t.defined,
								l = t.each,
								c = t.erase,
								d = t.extend,
								p = t.fireEvent,
								u = t.grep,
								f = t.isArray,
								g = t.isNumber,
								m = t.isString,
								x = t.merge,
								v = t.objectEach,
								y = t.pick,
								b = t.removeEvent,
								k = t.splat,
								w = t.SVGElement,
								M = t.syncTimeout,
								S = t.win;
							t.Series = t.seriesType(
								'line',
								null,
								{
									lineWidth: 2,
									allowPointSelect: !1,
									showCheckbox: !1,
									animation: {duration: 1e3},
									events: {},
									marker: {
										lineWidth: 0,
										lineColor: '#ffffff',
										enabledThreshold: 2,
										radius: 4,
										states: {
											normal: {animation: !0},
											hover: {
												animation: {duration: 50},
												enabled: !0,
												radiusPlus: 2,
												lineWidthPlus: 1,
											},
											select: {
												fillColor: '#cccccc',
												lineColor: '#000000',
												lineWidth: 2,
											},
										},
									},
									point: {events: {}},
									dataLabels: {
										align: 'center',
										formatter: function () {
											return null === this.y ? '' : t.numberFormat(this.y, -1);
										},
										style: {
											fontSize: '11px',
											fontWeight: 'bold',
											color: 'contrast',
											textOutline: '1px contrast',
										},
										verticalAlign: 'bottom',
										x: 0,
										y: 0,
										padding: 5,
									},
									cropThreshold: 300,
									pointRange: 0,
									softThreshold: !0,
									states: {
										normal: {animation: !0},
										hover: {
											animation: {duration: 50},
											lineWidthPlus: 1,
											marker: {},
											halo: {size: 10, opacity: 0.25},
										},
										select: {},
									},
									stickyTracking: !0,
									turboThreshold: 1e3,
									findNearestPointBy: 'x',
								},
								{
									isCartesian: !0,
									pointClass: t.Point,
									sorted: !0,
									requireSorting: !0,
									directTouch: !1,
									axisTypes: ['xAxis', 'yAxis'],
									colorCounter: 0,
									parallelArrays: ['x', 'y'],
									coll: 'series',
									init: function (t, i) {
										var s,
											n,
											o = this,
											r = t.series;
										(o.chart = t),
											(o.options = i = o.setOptions(i)),
											(o.linkedSeries = []),
											o.bindAxes(),
											d(o, {
												name: i.name,
												state: '',
												visible: !1 !== i.visible,
												selected: !0 === i.selected,
											}),
											(s = i.events),
											v(s, function (t, i) {
												e(o, i, t);
											}),
											((s && s.click) ||
												(i.point && i.point.events && i.point.events.click) ||
												i.allowPointSelect) &&
												(t.runTrackerClick = !0),
											o.getColor(),
											o.getSymbol(),
											l(o.parallelArrays, function (t) {
												o[t + 'Data'] = [];
											}),
											o.setData(i.data, !1),
											o.isCartesian && (t.hasCartesianSeries = !0),
											r.length && (n = r[r.length - 1]),
											(o._i = y(n && n._i, -1) + 1),
											t.orderSeries(this.insert(r)),
											p(this, 'afterInit');
									},
									insert: function (t) {
										var e,
											i = this.options.index;
										if (g(i)) {
											for (e = t.length; e--; )
												if (i >= y(t[e].options.index, t[e]._i)) {
													t.splice(e + 1, 0, this);
													break;
												}
											-1 === e && t.unshift(this), (e += 1);
										} else t.push(this);
										return y(e, t.length - 1);
									},
									bindAxes: function () {
										var e,
											i = this,
											s = i.options,
											n = i.chart;
										l(i.axisTypes || [], function (o) {
											l(n[o], function (t) {
												(e = t.options),
													(s[o] === e.index ||
														(void 0 !== s[o] && s[o] === e.id) ||
														(void 0 === s[o] && 0 === e.index)) &&
														(i.insert(t.series), (i[o] = t), (t.isDirty = !0));
											}),
												i[o] || i.optionalAxis === o || t.error(18, !0);
										});
									},
									updateParallelArrays: function (t, e) {
										var i = t.series,
											s = arguments,
											n = g(e)
												? function (s) {
														var n =
															'y' === s && i.toYData ? i.toYData(t) : t[s];
														i[s + 'Data'][e] = n;
												  }
												: function (t) {
														Array.prototype[e].apply(
															i[t + 'Data'],
															Array.prototype.slice.call(s, 2)
														);
												  };
										l(i.parallelArrays, n);
									},
									autoIncrement: function () {
										var t,
											e = this.options,
											i = this.xIncrement,
											s = e.pointIntervalUnit,
											n = this.chart.time;
										return (
											(i = y(i, e.pointStart, 0)),
											(this.pointInterval = t =
												y(this.pointInterval, e.pointInterval, 1)),
											s &&
												((e = new n.Date(i)),
												'day' === s
													? n.set('Date', e, n.get('Date', e) + t)
													: 'month' === s
													? n.set('Month', e, n.get('Month', e) + t)
													: 'year' === s &&
													  n.set('FullYear', e, n.get('FullYear', e) + t),
												(t = e.getTime() - i)),
											(this.xIncrement = i + t),
											i
										);
									},
									setOptions: function (t) {
										var e = this.chart,
											i = e.options,
											s = i.plotOptions,
											n = (e.userOptions || {}).plotOptions || {},
											o = s[this.type];
										return (
											(this.userOptions = t),
											(e = x(o, s.series, t)),
											(this.tooltipOptions = x(
												r.tooltip,
												r.plotOptions.series && r.plotOptions.series.tooltip,
												r.plotOptions[this.type].tooltip,
												i.tooltip.userOptions,
												s.series && s.series.tooltip,
												s[this.type].tooltip,
												t.tooltip
											)),
											(this.stickyTracking = y(
												t.stickyTracking,
												n[this.type] && n[this.type].stickyTracking,
												n.series && n.series.stickyTracking,
												!(
													!this.tooltipOptions.shared || this.noSharedTooltip
												) || e.stickyTracking
											)),
											null === o.marker && delete e.marker,
											(this.zoneAxis = e.zoneAxis),
											(t = this.zones = (e.zones || []).slice()),
											(!e.negativeColor && !e.negativeFillColor) ||
												e.zones ||
												t.push({
													value:
														e[this.zoneAxis + 'Threshold'] || e.threshold || 0,
													className: 'highcharts-negative',
													color: e.negativeColor,
													fillColor: e.negativeFillColor,
												}),
											t.length &&
												h(t[t.length - 1].value) &&
												t.push({color: this.color, fillColor: this.fillColor}),
											p(this, 'afterSetOptions', {options: e}),
											e
										);
									},
									getName: function () {
										return this.name || 'Series ' + (this.index + 1);
									},
									getCyclic: function (t, e, i) {
										var s,
											n = this.chart,
											o = this.userOptions,
											r = t + 'Index',
											a = t + 'Counter',
											l = i
												? i.length
												: y(n.options.chart[t + 'Count'], n[t + 'Count']);
										e ||
											((s = y(o[r], o['_' + r])),
											h(s) ||
												(n.series.length || (n[a] = 0),
												(o['_' + r] = s = n[a] % l),
												(n[a] += 1)),
											i && (e = i[s])),
											void 0 !== s && (this[r] = s),
											(this[t] = e);
									},
									getColor: function () {
										this.options.colorByPoint
											? (this.options.color = null)
											: this.getCyclic(
													'color',
													this.options.color || a[this.type].color,
													this.chart.options.colors
											  );
									},
									getSymbol: function () {
										this.getCyclic(
											'symbol',
											this.options.marker.symbol,
											this.chart.options.symbols
										);
									},
									drawLegendSymbol: t.LegendSymbolMixin.drawLineMarker,
									updateData: function (e) {
										var i,
											s,
											n,
											o = this.options,
											r = this.points,
											a = [],
											h = this.requireSorting;
										if (
											(l(
												e,
												function (e) {
													var s;
													(s =
														t.defined(e) &&
														this.pointClass.prototype.optionsToObject.call(
															{series: this},
															e
														).x),
														g(s) &&
															(-1 === (s = t.inArray(s, this.xData, n)) ||
															r[s].touched
																? a.push(e)
																: e !== o.data[s]
																? (r[s].update(e, !1, null, !1),
																  (r[s].touched = !0),
																  h && (n = s + 1))
																: r[s] && (r[s].touched = !0),
															(i = !0));
												},
												this
											),
											i)
										)
											for (e = r.length; e--; )
												(s = r[e]).touched || s.remove(!1), (s.touched = !1);
										else {
											if (e.length !== r.length) return !1;
											l(e, function (t, e) {
												r[e].update &&
													t !== o.data[e] &&
													r[e].update(t, !1, null, !1);
											});
										}
										return (
											l(
												a,
												function (t) {
													this.addPoint(t, !1);
												},
												this
											),
											!0
										);
									},
									setData: function (e, i, s, n) {
										var o,
											r,
											a = this,
											h = a.points,
											c = (h && h.length) || 0,
											d = a.options,
											p = a.chart,
											u = null,
											x = a.xAxis,
											v = d.turboThreshold,
											b = this.xData,
											k = this.yData,
											w = (o = a.pointArrayMap) && o.length;
										if (
											((o = (e = e || []).length),
											(i = y(i, !0)),
											!1 !== n &&
												o &&
												c &&
												!a.cropped &&
												!a.hasGroupedData &&
												a.visible &&
												!a.isSeriesBoosting &&
												(r = this.updateData(e)),
											!r)
										) {
											if (
												((a.xIncrement = null),
												(a.colorCounter = 0),
												l(this.parallelArrays, function (t) {
													a[t + 'Data'].length = 0;
												}),
												v && o > v)
											) {
												for (s = 0; null === u && s < o; ) (u = e[s]), s++;
												if (g(u))
													for (s = 0; s < o; s++)
														(b[s] = this.autoIncrement()), (k[s] = e[s]);
												else if (f(u))
													if (w)
														for (s = 0; s < o; s++)
															(u = e[s]),
																(b[s] = u[0]),
																(k[s] = u.slice(1, w + 1));
													else
														for (s = 0; s < o; s++)
															(u = e[s]), (b[s] = u[0]), (k[s] = u[1]);
												else t.error(12);
											} else
												for (s = 0; s < o; s++)
													void 0 !== e[s] &&
														((u = {series: a}),
														a.pointClass.prototype.applyOptions.apply(u, [
															e[s],
														]),
														a.updateParallelArrays(u, s));
											for (
												k && m(k[0]) && t.error(14, !0),
													a.data = [],
													a.options.data = a.userOptions.data = e,
													s = c;
												s--;

											)
												h[s] && h[s].destroy && h[s].destroy();
											x && (x.minRange = x.userMinRange),
												(a.isDirty = p.isDirtyBox = !0),
												(a.isDirtyData = !!h),
												(s = !1);
										}
										'point' === d.legendType &&
											(this.processData(), this.generatePoints()),
											i && p.redraw(s);
									},
									processData: function (e) {
										var i,
											s = this.xData,
											n = this.yData,
											o = s.length;
										i = 0;
										var r,
											a,
											h,
											l = this.xAxis;
										h = (f = this.options).cropThreshold;
										var c,
											d,
											p = this.getExtremesFromAll || f.getExtremesFromAll,
											u = this.isCartesian,
											f = l && l.val2lin,
											g = l && l.isLog,
											m = this.requireSorting;
										if (
											u &&
											!this.isDirty &&
											!l.isDirty &&
											!this.yAxis.isDirty &&
											!e
										)
											return !1;
										for (
											l && ((c = (e = l.getExtremes()).min), (d = e.max)),
												u &&
													this.sorted &&
													!p &&
													(!h || o > h || this.forceCrop) &&
													(s[o - 1] < c || s[0] > d
														? ((s = []), (n = []))
														: this.yData &&
														  (s[0] < c || s[o - 1] > d) &&
														  ((s = (i = this.cropData(
																this.xData,
																this.yData,
																c,
																d
														  )).xData),
														  (n = i.yData),
														  (i = i.start),
														  (r = !0))),
												h = s.length || 1;
											--h;

										)
											0 < (o = g ? f(s[h]) - f(s[h - 1]) : s[h] - s[h - 1]) &&
											(void 0 === a || o < a)
												? (a = o)
												: 0 > o && m && (t.error(15), (m = !1));
										(this.cropped = r),
											(this.cropStart = i),
											(this.processedXData = s),
											(this.processedYData = n),
											(this.closestPointRange = a);
									},
									cropData: function (t, e, i, s, n) {
										var o,
											r = t.length,
											a = 0,
											h = r;
										for (n = y(n, this.cropShoulder, 1), o = 0; o < r; o++)
											if (t[o] >= i) {
												a = Math.max(0, o - n);
												break;
											}
										for (i = o; i < r; i++)
											if (t[i] > s) {
												h = i + n;
												break;
											}
										return {
											xData: t.slice(a, h),
											yData: e.slice(a, h),
											start: a,
											end: h,
										};
									},
									generatePoints: function () {
										var t,
											e,
											i,
											s,
											n = (u = this.options).data,
											o = this.data,
											r = this.processedXData,
											a = this.processedYData,
											h = this.pointClass,
											l = r.length,
											c = this.cropStart || 0,
											p = this.hasGroupedData,
											u = u.keys,
											f = [];
										for (
											o ||
												p ||
												(((o = []).length = n.length), (o = this.data = o)),
												u && p && (this.options.keys = !1),
												s = 0;
											s < l;
											s++
										)
											(e = c + s),
												p
													? (((i = new h().init(
															this,
															[r[s]].concat(k(a[s]))
													  )).dataGroup = this.groupMap[s]),
													  i.dataGroup.options &&
															((i.options = i.dataGroup.options),
															d(i, i.dataGroup.options)))
													: (i = o[e]) ||
													  void 0 === n[e] ||
													  (o[e] = i = new h().init(this, n[e], r[s])),
												i && ((i.index = e), (f[s] = i));
										if (
											((this.options.keys = u),
											o && (l !== (t = o.length) || p))
										)
											for (s = 0; s < t; s++)
												s !== c || p || (s += l),
													o[s] &&
														(o[s].destroyElements(), (o[s].plotX = void 0));
										(this.data = o), (this.points = f);
									},
									getExtremes: function (t) {
										var e,
											i,
											o,
											r,
											a,
											h = this.yAxis,
											l = this.processedXData,
											c = [],
											d = 0,
											p = (e = this.xAxis.getExtremes()).min,
											u = e.max,
											m = this.requireSorting ? 1 : 0;
										for (
											e = (t =
												t || this.stackedYData || this.processedYData || [])
												.length,
												a = 0;
											a < e;
											a++
										)
											if (
												((o = l[a]),
												(r = t[a]),
												(i =
													(g(r, !0) || f(r)) &&
													(!h.positiveValuesOnly || r.length || 0 < r)),
												(o =
													this.getExtremesFromAll ||
													this.options.getExtremesFromAll ||
													this.cropped ||
													((l[a + m] || o) >= p && (l[a - m] || o) <= u)),
												i && o)
											)
												if ((i = r.length))
													for (; i--; )
														'number' == typeof r[i] && (c[d++] = r[i]);
												else c[d++] = r;
										(this.dataMin = n(c)), (this.dataMax = s(c));
									},
									translate: function () {
										this.processedXData || this.processData(),
											this.generatePoints();
										var t,
											e,
											i,
											s,
											n = this.options,
											r = n.stacking,
											a = this.xAxis,
											l = a.categories,
											c = this.yAxis,
											d = this.points,
											u = d.length,
											f = !!this.modifyValue,
											m = n.pointPlacement,
											x = 'between' === m || g(m),
											v = n.threshold,
											b = n.startFromThreshold ? v : 0,
											k = Number.MAX_VALUE;
										for (
											'between' === m && (m = 0.5),
												g(m) && (m *= y(n.pointRange || a.pointRange)),
												n = 0;
											n < u;
											n++
										) {
											var w = d[n],
												M = w.x,
												S = w.y;
											e = w.low;
											var T,
												A =
													r &&
													c.stacks[
														(this.negStacks && S < (b ? 0 : v) ? '-' : '') +
															this.stackKey
													];
											c.positiveValuesOnly &&
												null !== S &&
												0 >= S &&
												(w.isNull = !0),
												(w.plotX = t =
													o(
														Math.min(
															Math.max(
																-1e5,
																a.translate(
																	M,
																	0,
																	0,
																	0,
																	1,
																	m,
																	'flags' === this.type
																)
															),
															1e5
														)
													)),
												r &&
													this.visible &&
													!w.isNull &&
													A &&
													A[M] &&
													((s = this.getStackIndicator(s, M, this.index)),
													(e = (S = (T = A[M]).points[s.key])[0]),
													(S = S[1]),
													e === b &&
														s.key === A[M].base &&
														(e = y(g(v) && v, c.min)),
													c.positiveValuesOnly && 0 >= e && (e = null),
													(w.total = w.stackTotal = T.total),
													(w.percentage = T.total && (w.y / T.total) * 100),
													(w.stackY = S),
													T.setOffset(this.pointXOffset || 0, this.barW || 0)),
												(w.yBottom = h(e)
													? Math.min(
															Math.max(-1e5, c.translate(e, 0, 1, 0, 1)),
															1e5
													  )
													: null),
												f && (S = this.modifyValue(S, w)),
												(w.plotY = e =
													'number' == typeof S && 1 / 0 !== S
														? Math.min(
																Math.max(-1e5, c.translate(S, 0, 1, 0, 1)),
																1e5
														  )
														: void 0),
												(w.isInside =
													void 0 !== e &&
													0 <= e &&
													e <= c.len &&
													0 <= t &&
													t <= a.len),
												(w.clientX = x ? o(a.translate(M, 0, 0, 0, 1, m)) : t),
												(w.negative = w.y < (v || 0)),
												(w.category = l && void 0 !== l[w.x] ? l[w.x] : w.x),
												w.isNull ||
													(void 0 !== i && (k = Math.min(k, Math.abs(t - i))),
													(i = t)),
												(w.zone = this.zones.length && w.getZone());
										}
										(this.closestPointRangePx = k), p(this, 'afterTranslate');
									},
									getValidPoints: function (t, e) {
										var i = this.chart;
										return u(t || this.points || [], function (t) {
											return !(
												(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted)) ||
												t.isNull
											);
										});
									},
									setClip: function (t) {
										var e = this.chart,
											i = this.options,
											s = e.renderer,
											n = e.inverted,
											o = this.clipBox,
											r = o || e.clipBox,
											a =
												this.sharedClipKey ||
												[
													'_sharedClip',
													t && t.duration,
													t && t.easing,
													r.height,
													i.xAxis,
													i.yAxis,
												].join(),
											h = e[a],
											l = e[a + 'm'];
										h ||
											(t &&
												((r.width = 0),
												n && (r.x = e.plotSizeX),
												(e[a + 'm'] = l =
													s.clipRect(
														n ? e.plotSizeX + 99 : -99,
														n ? -e.plotLeft : -e.plotTop,
														99,
														n ? e.chartWidth : e.chartHeight
													))),
											(e[a] = h = s.clipRect(r)),
											(h.count = {length: 0})),
											t &&
												!h.count[this.index] &&
												((h.count[this.index] = !0), (h.count.length += 1)),
											!1 !== i.clip &&
												(this.group.clip(t || o ? h : e.clipRect),
												this.markerGroup.clip(l),
												(this.sharedClipKey = a)),
											t ||
												(h.count[this.index] &&
													(delete h.count[this.index], --h.count.length),
												0 === h.count.length &&
													a &&
													e[a] &&
													(o || (e[a] = e[a].destroy()),
													e[a + 'm'] && (e[a + 'm'] = e[a + 'm'].destroy())));
									},
									animate: function (t) {
										var e,
											s = this.chart,
											n = i(this.options.animation);
										t
											? this.setClip(n)
											: ((t = s[(e = this.sharedClipKey)]) &&
													t.animate({width: s.plotSizeX, x: 0}, n),
											  s[e + 'm'] &&
													s[e + 'm'].animate(
														{width: s.plotSizeX + 99, x: 0},
														n
													),
											  (this.animate = null));
									},
									afterAnimate: function () {
										this.setClip(),
											p(this, 'afterAnimate'),
											(this.finishedAnimating = !0);
									},
									drawPoints: function () {
										var t,
											e,
											i,
											s,
											n,
											o,
											r,
											a,
											h = this.points,
											l = this.chart,
											c = this.options.marker,
											d = this[this.specialGroup] || this.markerGroup,
											p = y(
												c.enabled,
												!!this.xAxis.isRadial || null,
												this.closestPointRangePx >=
													c.enabledThreshold * c.radius
											);
										if (!1 !== c.enabled || this._hasPointMarkers)
											for (t = 0; t < h.length; t++)
												(s = (e = h[t]).graphic),
													(n = e.marker || {}),
													(o = !!e.marker),
													(i = (p && void 0 === n.enabled) || n.enabled),
													(r = e.isInside),
													i && !e.isNull
														? ((i = y(n.symbol, this.symbol)),
														  (a = this.markerAttribs(
																e,
																e.selected && 'select'
														  )),
														  s
																? s[r ? 'show' : 'hide'](!0).animate(a)
																: r &&
																  (0 < a.width || e.hasImage) &&
																  (e.graphic = s =
																		l.renderer
																			.symbol(
																				i,
																				a.x,
																				a.y,
																				a.width,
																				a.height,
																				o ? n : c
																			)
																			.add(d)),
														  s &&
																s.attr(
																	this.pointAttribs(e, e.selected && 'select')
																),
														  s && s.addClass(e.getClassName(), !0))
														: s && (e.graphic = s.destroy());
									},
									markerAttribs: function (t, e) {
										var i = this.options.marker,
											s = t.marker || {},
											n = s.symbol || i.symbol,
											o = y(s.radius, i.radius);
										return (
											e &&
												((i = i.states[e]),
												(e = s.states && s.states[e]),
												(o = y(
													e && e.radius,
													i && i.radius,
													o + ((i && i.radiusPlus) || 0)
												))),
											(t.hasImage = n && 0 === n.indexOf('url')),
											t.hasImage && (o = 0),
											(t = {x: Math.floor(t.plotX) - o, y: t.plotY - o}),
											o && (t.width = t.height = 2 * o),
											t
										);
									},
									pointAttribs: function (t, e) {
										var i = this.options.marker,
											s = ((a = t && t.options) && a.marker) || {},
											n = this.color,
											o = a && a.color,
											r = t && t.color,
											a = y(s.lineWidth, i.lineWidth);
										return (
											(t = t && t.zone && t.zone.color),
											(n = o || t || r || n),
											(t = s.fillColor || i.fillColor || n),
											(n = s.lineColor || i.lineColor || n),
											e &&
												((i = i.states[e]),
												(e = (s.states && s.states[e]) || {}),
												(a = y(
													e.lineWidth,
													i.lineWidth,
													a + y(e.lineWidthPlus, i.lineWidthPlus, 0)
												)),
												(t = e.fillColor || i.fillColor || t),
												(n = e.lineColor || i.lineColor || n)),
											{stroke: n, 'stroke-width': a, fill: t}
										);
									},
									destroy: function () {
										var e,
											i,
											s,
											n = this,
											o = n.chart,
											r = /AppleWebKit\/533/.test(S.navigator.userAgent),
											a = n.data || [];
										for (
											p(n, 'destroy'),
												b(n),
												l(n.axisTypes || [], function (t) {
													(s = n[t]) &&
														s.series &&
														(c(s.series, n), (s.isDirty = s.forceRedraw = !0));
												}),
												n.legendItem && n.chart.legend.destroyItem(n),
												e = a.length;
											e--;

										)
											(i = a[e]) && i.destroy && i.destroy();
										(n.points = null),
											t.clearTimeout(n.animationTimeout),
											v(n, function (t, e) {
												t instanceof w &&
													!t.survive &&
													t[r && 'group' === e ? 'hide' : 'destroy']();
											}),
											o.hoverSeries === n && (o.hoverSeries = null),
											c(o.series, n),
											o.orderSeries(),
											v(n, function (t, e) {
												delete n[e];
											});
									},
									getGraphPath: function (t, e, i) {
										var s,
											n,
											o = this,
											r = o.options,
											a = r.step,
											c = [],
											d = [];
										return (
											(s = (t = t || o.points).reversed) && t.reverse(),
											(a = {right: 1, center: 2}[a] || (a && 3)) &&
												s &&
												(a = 4 - a),
											!r.connectNulls || e || i || (t = this.getValidPoints(t)),
											l(t, function (s, l) {
												var p = s.plotX,
													u = s.plotY,
													f = t[l - 1];
												(s.leftCliff || (f && f.rightCliff)) && !i && (n = !0),
													s.isNull && !h(e) && 0 < l
														? (n = !r.connectNulls)
														: s.isNull && !e
														? (n = !0)
														: (0 === l || n
																? (l = ['M', s.plotX, s.plotY])
																: o.getPointSpline
																? (l = o.getPointSpline(t, s, l))
																: a
																? (l =
																		1 === a
																			? ['L', f.plotX, u]
																			: 2 === a
																			? [
																					'L',
																					(f.plotX + p) / 2,
																					f.plotY,
																					'L',
																					(f.plotX + p) / 2,
																					u,
																			  ]
																			: ['L', p, f.plotY]).push('L', p, u)
																: (l = ['L', p, u]),
														  d.push(s.x),
														  a && (d.push(s.x), 2 === a && d.push(s.x)),
														  c.push.apply(c, l),
														  (n = !1));
											}),
											(c.xMap = d),
											(o.graphPath = c)
										);
									},
									drawGraph: function () {
										var t = this,
											e = this.options,
											i = (this.gappedPath || this.getGraphPath).call(this),
											s = [
												[
													'graph',
													'highcharts-graph',
													e.lineColor || this.color,
													e.dashStyle,
												],
											];
										(s = t.getZonesGraphs(s)),
											l(s, function (s, n) {
												var o = s[0],
													r = t[o];
												r
													? ((r.endX = t.preventGraphAnimation ? null : i.xMap),
													  r.animate({d: i}))
													: i.length &&
													  ((t[o] = t.chart.renderer
															.path(i)
															.addClass(s[1])
															.attr({zIndex: 1})
															.add(t.group)),
													  (r = {
															stroke: s[2],
															'stroke-width': e.lineWidth,
															fill: (t.fillGraph && t.color) || 'none',
													  }),
													  s[3]
															? (r.dashstyle = s[3])
															: 'square' !== e.linecap &&
															  (r['stroke-linecap'] = r['stroke-linejoin'] =
																	'round'),
													  (r = t[o].attr(r).shadow(2 > n && e.shadow))),
													r && ((r.startX = i.xMap), (r.isArea = i.isArea));
											});
									},
									getZonesGraphs: function (t) {
										return (
											l(
												this.zones,
												function (e, i) {
													t.push([
														'zone-graph-' + i,
														'highcharts-graph highcharts-zone-graph-' +
															i +
															' ' +
															(e.className || ''),
														e.color || this.color,
														e.dashStyle || this.options.dashStyle,
													]);
												},
												this
											),
											t
										);
									},
									applyZones: function () {
										var t,
											e,
											i,
											s,
											n,
											o,
											r,
											a,
											h,
											c = this,
											d = this.chart,
											p = d.renderer,
											u = this.zones,
											f = this.clips || [],
											g = this.graph,
											m = this.area,
											x = Math.max(d.chartWidth, d.chartHeight),
											v = this[(this.zoneAxis || 'y') + 'Axis'],
											b = d.inverted,
											k = !1;
										u.length &&
											(g || m) &&
											v &&
											void 0 !== v.min &&
											((n = v.reversed),
											(o = v.horiz),
											g && !this.showLine && g.hide(),
											m && m.hide(),
											(s = v.getExtremes()),
											l(u, function (l, u) {
												(t = n
													? o
														? d.plotWidth
														: 0
													: o
													? 0
													: v.toPixels(s.min)),
													(t = Math.min(Math.max(y(e, t), 0), x)),
													(e = Math.min(
														Math.max(
															Math.round(v.toPixels(y(l.value, s.max), !0)),
															0
														),
														x
													)),
													k && (t = e = v.toPixels(s.max)),
													(r = Math.abs(t - e)),
													(a = Math.min(t, e)),
													(h = Math.max(t, e)),
													v.isXAxis
														? ((i = {x: b ? h : a, y: 0, width: r, height: x}),
														  o || (i.x = d.plotHeight - i.x))
														: ((i = {x: 0, y: b ? h : a, width: x, height: r}),
														  o && (i.y = d.plotWidth - i.y)),
													b &&
														p.isVML &&
														(i = v.isXAxis
															? {
																	x: 0,
																	y: n ? a : h,
																	height: i.width,
																	width: d.chartWidth,
															  }
															: {
																	x: i.y - d.plotLeft - d.spacingBox.x,
																	y: 0,
																	width: i.height,
																	height: d.chartHeight,
															  }),
													f[u]
														? f[u].animate(i)
														: ((f[u] = p.clipRect(i)),
														  g && c['zone-graph-' + u].clip(f[u]),
														  m && c['zone-area-' + u].clip(f[u])),
													(k = l.value > s.max),
													c.resetZones && 0 === e && (e = void 0);
											}),
											(this.clips = f));
									},
									invertGroups: function (t) {
										function i() {
											l(['group', 'markerGroup'], function (e) {
												n[e] &&
													(o.renderer.isVML &&
														n[e].attr({
															width: n.yAxis.len,
															height: n.xAxis.len,
														}),
													(n[e].width = n.yAxis.len),
													(n[e].height = n.xAxis.len),
													n[e].invert(t));
											});
										}
										var s,
											n = this,
											o = n.chart;
										n.xAxis &&
											((s = e(o, 'resize', i)),
											e(n, 'destroy', s),
											i(),
											(n.invertGroups = i));
									},
									plotGroup: function (t, e, i, s, n) {
										var o = this[t],
											r = !o;
										return (
											r &&
												(this[t] = o =
													this.chart.renderer
														.g()
														.attr({zIndex: s || 0.1})
														.add(n)),
											o.addClass(
												'highcharts-' +
													e +
													' highcharts-series-' +
													this.index +
													' highcharts-' +
													this.type +
													'-series ' +
													(h(this.colorIndex)
														? 'highcharts-color-' + this.colorIndex + ' '
														: '') +
													(this.options.className || '') +
													(o.hasClass('highcharts-tracker')
														? ' highcharts-tracker'
														: ''),
												!0
											),
											o
												.attr({visibility: i})
												[r ? 'attr' : 'animate'](this.getPlotBox()),
											o
										);
									},
									getPlotBox: function () {
										var t = this.chart,
											e = this.xAxis,
											i = this.yAxis;
										return (
											t.inverted && ((e = i), (i = this.xAxis)),
											{
												translateX: e ? e.left : t.plotLeft,
												translateY: i ? i.top : t.plotTop,
												scaleX: 1,
												scaleY: 1,
											}
										);
									},
									render: function () {
										var t,
											e = this,
											s = e.chart,
											n = e.options,
											o =
												!!e.animate &&
												s.renderer.isSVG &&
												i(n.animation).duration,
											r = e.visible ? 'inherit' : 'hidden',
											a = n.zIndex,
											h = e.hasRendered,
											l = s.seriesGroup,
											c = s.inverted;
										(t = e.plotGroup('group', 'series', r, a, l)),
											(e.markerGroup = e.plotGroup(
												'markerGroup',
												'markers',
												r,
												a,
												l
											)),
											o && e.animate(!0),
											(t.inverted = !!e.isCartesian && c),
											e.drawGraph && (e.drawGraph(), e.applyZones()),
											e.drawDataLabels && e.drawDataLabels(),
											e.visible && e.drawPoints(),
											e.drawTracker &&
												!1 !== e.options.enableMouseTracking &&
												e.drawTracker(),
											e.invertGroups(c),
											!1 === n.clip ||
												e.sharedClipKey ||
												h ||
												t.clip(s.clipRect),
											o && e.animate(),
											h ||
												(e.animationTimeout = M(function () {
													e.afterAnimate();
												}, o)),
											(e.isDirty = !1),
											(e.hasRendered = !0),
											p(e, 'afterRender');
									},
									redraw: function () {
										var t = this.chart,
											e = this.isDirty || this.isDirtyData,
											i = this.group,
											s = this.xAxis,
											n = this.yAxis;
										i &&
											(t.inverted &&
												i.attr({width: t.plotWidth, height: t.plotHeight}),
											i.animate({
												translateX: y(s && s.left, t.plotLeft),
												translateY: y(n && n.top, t.plotTop),
											})),
											this.translate(),
											this.render(),
											e && delete this.kdTree;
									},
									kdAxisArray: ['clientX', 'plotY'],
									searchPoint: function (t, e) {
										var i = this.xAxis,
											s = this.yAxis,
											n = this.chart.inverted;
										return this.searchKDTree(
											{
												clientX: n
													? i.len - t.chartY + i.pos
													: t.chartX - i.pos,
												plotY: n ? s.len - t.chartX + s.pos : t.chartY - s.pos,
											},
											e
										);
									},
									buildKDTree: function () {
										function t(i, s, n) {
											var o, r;
											if ((r = i && i.length))
												return (
													(o = e.kdAxisArray[s % n]),
													i.sort(function (t, e) {
														return t[o] - e[o];
													}),
													{
														point: i[(r = Math.floor(r / 2))],
														left: t(i.slice(0, r), s + 1, n),
														right: t(i.slice(r + 1), s + 1, n),
													}
												);
										}
										this.buildingKdTree = !0;
										var e = this,
											i =
												-1 < e.options.findNearestPointBy.indexOf('y') ? 2 : 1;
										delete e.kdTree,
											M(
												function () {
													(e.kdTree = t(
														e.getValidPoints(null, !e.directTouch),
														i,
														i
													)),
														(e.buildingKdTree = !1);
												},
												e.options.kdNow ? 0 : 1
											);
									},
									searchKDTree: function (t, e) {
										var i = this,
											s = this.kdAxisArray[0],
											n = this.kdAxisArray[1],
											o = e ? 'distX' : 'dist';
										if (
											((e =
												-1 < i.options.findNearestPointBy.indexOf('y') ? 2 : 1),
											this.kdTree || this.buildingKdTree || this.buildKDTree(),
											this.kdTree)
										)
											return (function t(e, r, a, l) {
												var c,
													d,
													p = r.point,
													u = i.kdAxisArray[a % l],
													f = p;
												return (
													(c =
														((d =
															h(e[s]) && h(p[s])
																? Math.pow(e[s] - p[s], 2)
																: null) || 0) +
														((c =
															h(e[n]) && h(p[n])
																? Math.pow(e[n] - p[n], 2)
																: null) || 0)),
													(p.dist = h(c) ? Math.sqrt(c) : Number.MAX_VALUE),
													(p.distX = h(d) ? Math.sqrt(d) : Number.MAX_VALUE),
													(d = 0 > (u = e[u] - p[u]) ? 'right' : 'left'),
													r[(c = 0 > u ? 'left' : 'right')] &&
														(f = (c = t(e, r[c], a + 1, l))[o] < f[o] ? c : p),
													r[d] &&
														Math.sqrt(u * u) < f[o] &&
														(f = (e = t(e, r[d], a + 1, l))[o] < f[o] ? e : f),
													f
												);
											})(t, this.kdTree, e, e);
									},
								}
							);
						})(c),
						(function (t) {
							var e = t.Axis,
								i = t.Chart,
								s = t.correctFloat,
								n = t.defined,
								o = t.destroyObjectProperties,
								r = t.each,
								a = t.format,
								h = t.objectEach,
								l = t.pick,
								c = t.Series;
							(t.StackItem = function (t, e, i, s, n) {
								var o = t.chart.inverted;
								(this.axis = t),
									(this.isNegative = i),
									(this.options = e),
									(this.x = s),
									(this.total = null),
									(this.points = {}),
									(this.stack = n),
									(this.rightCliff = this.leftCliff = 0),
									(this.alignOptions = {
										align: e.align || (o ? (i ? 'left' : 'right') : 'center'),
										verticalAlign:
											e.verticalAlign || (o ? 'middle' : i ? 'bottom' : 'top'),
										y: l(e.y, o ? 4 : i ? 14 : -6),
										x: l(e.x, o ? (i ? -6 : 6) : 0),
									}),
									(this.textAlign =
										e.textAlign || (o ? (i ? 'right' : 'left') : 'center'));
							}),
								(t.StackItem.prototype = {
									destroy: function () {
										o(this, this.axis);
									},
									render: function (t) {
										var e = this.axis.chart,
											i = this.options,
											s = (s = i.format)
												? a(s, this, e.time)
												: i.formatter.call(this);
										this.label
											? this.label.attr({text: s, visibility: 'hidden'})
											: (this.label = e.renderer
													.text(s, null, null, i.useHTML)
													.css(i.style)
													.attr({
														align: this.textAlign,
														rotation: i.rotation,
														visibility: 'hidden',
													})
													.add(t)),
											(this.label.labelrank = e.plotHeight);
									},
									setOffset: function (t, e) {
										var i = this.axis,
											s = i.chart,
											o = i.translate(
												i.usePercentage ? 100 : this.total,
												0,
												0,
												0,
												1
											),
											r = i.translate(0);
										(r = n(o) && Math.abs(o - r)),
											(t = s.xAxis[0].translate(this.x) + t),
											(i = n(o) && this.getStackBox(s, this, t, o, e, r, i)),
											(e = this.label) &&
												i &&
												(e.align(this.alignOptions, null, i),
												(i = e.alignAttr),
												e[
													!1 === this.options.crop || s.isInsidePlot(i.x, i.y)
														? 'show'
														: 'hide'
												](!0));
									},
									getStackBox: function (t, e, i, s, n, o, r) {
										var a = e.axis.reversed,
											h = t.inverted;
										return (
											(t = r.height + r.pos - (h ? t.plotLeft : t.plotTop)),
											(e = (e.isNegative && !a) || (!e.isNegative && a)),
											{
												x: h ? (e ? s : s - o) : i,
												y: h ? t - i - n : e ? t - s - o : t - s,
												width: h ? o : n,
												height: h ? n : o,
											}
										);
									},
								}),
								(i.prototype.getStacks = function () {
									var t = this;
									r(t.yAxis, function (t) {
										t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks);
									}),
										r(t.series, function (e) {
											!e.options.stacking ||
												(!0 !== e.visible &&
													!1 !== t.options.chart.ignoreHiddenSeries) ||
												(e.stackKey = e.type + l(e.options.stack, ''));
										});
								}),
								(e.prototype.buildStacks = function () {
									var t,
										e = this.series,
										i = l(this.options.reversedStacks, !0),
										s = e.length;
									if (!this.isXAxis) {
										for (this.usePercentage = !1, t = s; t--; )
											e[i ? t : s - t - 1].setStackedPoints();
										for (t = 0; t < s; t++) e[t].modifyStacks();
									}
								}),
								(e.prototype.renderStackTotals = function () {
									var t = this.chart,
										e = t.renderer,
										i = this.stacks,
										s = this.stackTotalGroup;
									s ||
										(this.stackTotalGroup = s =
											e
												.g('stack-labels')
												.attr({visibility: 'visible', zIndex: 6})
												.add()),
										s.translate(t.plotLeft, t.plotTop),
										h(i, function (t) {
											h(t, function (t) {
												t.render(s);
											});
										});
								}),
								(e.prototype.resetStacks = function () {
									var t = this,
										e = t.stacks;
									t.isXAxis ||
										h(e, function (e) {
											h(e, function (i, s) {
												i.touched < t.stacksTouched
													? (i.destroy(), delete e[s])
													: ((i.total = null), (i.cumulative = null));
											});
										});
								}),
								(e.prototype.cleanStacks = function () {
									var t;
									this.isXAxis ||
										(this.oldStacks && (t = this.stacks = this.oldStacks),
										h(t, function (t) {
											h(t, function (t) {
												t.cumulative = t.total;
											});
										}));
								}),
								(c.prototype.setStackedPoints = function () {
									if (
										this.options.stacking &&
										(!0 === this.visible ||
											!1 === this.chart.options.chart.ignoreHiddenSeries)
									) {
										var e,
											i,
											o,
											r,
											a,
											h,
											c,
											d = this.processedXData,
											p = this.processedYData,
											u = [],
											f = p.length,
											g = (v = this.options).threshold,
											m = l(v.startFromThreshold && g, 0),
											x = v.stack,
											v = v.stacking,
											y = this.stackKey,
											b = '-' + y,
											k = this.negStacks,
											w = this.yAxis,
											M = w.stacks,
											S = w.oldStacks;
										for (w.stacksTouched += 1, a = 0; a < f; a++)
											(h = d[a]),
												(c = p[a]),
												(r = (e = this.getStackIndicator(e, h, this.index))
													.key),
												M[(o = (i = k && c < (m ? 0 : g)) ? b : y)] ||
													(M[o] = {}),
												M[o][h] ||
													(S[o] && S[o][h]
														? ((M[o][h] = S[o][h]), (M[o][h].total = null))
														: (M[o][h] = new t.StackItem(
																w,
																w.options.stackLabels,
																i,
																h,
																x
														  ))),
												(o = M[o][h]),
												null !== c
													? ((o.points[r] = o.points[this.index] =
															[l(o.cumulative, m)]),
													  n(o.cumulative) || (o.base = r),
													  (o.touched = w.stacksTouched),
													  0 < e.index &&
															!1 === this.singleStacks &&
															(o.points[r][0] =
																o.points[this.index + ',' + h + ',0'][0]))
													: (o.points[r] = o.points[this.index] = null),
												'percent' === v
													? ((i = i ? y : b),
													  k && M[i] && M[i][h]
															? ((i = M[i][h]),
															  (o.total = i.total =
																	Math.max(i.total, o.total) + Math.abs(c) ||
																	0))
															: (o.total = s(o.total + (Math.abs(c) || 0))))
													: (o.total = s(o.total + (c || 0))),
												(o.cumulative = l(o.cumulative, m) + (c || 0)),
												null !== c &&
													(o.points[r].push(o.cumulative),
													(u[a] = o.cumulative));
										'percent' === v && (w.usePercentage = !0),
											(this.stackedYData = u),
											(w.oldStacks = {});
									}
								}),
								(c.prototype.modifyStacks = function () {
									var t,
										e = this,
										i = e.stackKey,
										s = e.yAxis.stacks,
										n = e.processedXData,
										o = e.options.stacking;
									e[o + 'Stacker'] &&
										r([i, '-' + i], function (i) {
											for (var r, a, h = n.length; h--; )
												(r = n[h]),
													(t = e.getStackIndicator(t, r, e.index, i)),
													(a = (r = s[i] && s[i][r]) && r.points[t.key]) &&
														e[o + 'Stacker'](a, r, h);
										});
								}),
								(c.prototype.percentStacker = function (t, e, i) {
									(e = e.total ? 100 / e.total : 0),
										(t[0] = s(t[0] * e)),
										(t[1] = s(t[1] * e)),
										(this.stackedYData[i] = t[1]);
								}),
								(c.prototype.getStackIndicator = function (t, e, i, s) {
									return (
										!n(t) || t.x !== e || (s && t.key !== s)
											? (t = {x: e, index: 0, key: s})
											: t.index++,
										(t.key = [i, e, t.index].join()),
										t
									);
								});
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.animate,
								s = t.Axis,
								n = t.createElement,
								o = t.css,
								r = t.defined,
								a = t.each,
								h = t.erase,
								l = t.extend,
								c = t.fireEvent,
								d = t.inArray,
								p = t.isNumber,
								u = t.isObject,
								f = t.isArray,
								g = t.merge,
								m = t.objectEach,
								x = t.pick,
								v = t.Point,
								y = t.Series,
								b = t.seriesTypes,
								k = t.setAnimation,
								w = t.splat;
							l(t.Chart.prototype, {
								addSeries: function (t, e, i) {
									var s,
										n = this;
									return (
										t &&
											((e = x(e, !0)),
											c(n, 'addSeries', {options: t}, function () {
												(s = n.initSeries(t)),
													(n.isDirtyLegend = !0),
													n.linkSeries(),
													c(n, 'afterAddSeries'),
													e && n.redraw(i);
											})),
										s
									);
								},
								addAxis: function (t, e, i, n) {
									var o = e ? 'xAxis' : 'yAxis',
										r = this.options;
									return (
										(t = g(t, {index: this[o].length, isX: e})),
										(e = new s(this, t)),
										(r[o] = w(r[o] || {})),
										r[o].push(t),
										x(i, !0) && this.redraw(n),
										e
									);
								},
								showLoading: function (t) {
									var s = this,
										r = s.options,
										a = s.loadingDiv,
										h = r.loading,
										c = function () {
											a &&
												o(a, {
													left: s.plotLeft + 'px',
													top: s.plotTop + 'px',
													width: s.plotWidth + 'px',
													height: s.plotHeight + 'px',
												});
										};
									a ||
										((s.loadingDiv = a =
											n(
												'div',
												{
													className:
														'highcharts-loading highcharts-loading-hidden',
												},
												null,
												s.container
											)),
										(s.loadingSpan = n(
											'span',
											{className: 'highcharts-loading-inner'},
											null,
											a
										)),
										e(s, 'redraw', c)),
										(a.className = 'highcharts-loading'),
										(s.loadingSpan.innerHTML = t || r.lang.loading),
										o(a, l(h.style, {zIndex: 10})),
										o(s.loadingSpan, h.labelStyle),
										s.loadingShown ||
											(o(a, {opacity: 0, display: ''}),
											i(
												a,
												{opacity: h.style.opacity || 0.5},
												{duration: h.showDuration || 0}
											)),
										(s.loadingShown = !0),
										c();
								},
								hideLoading: function () {
									var t = this.options,
										e = this.loadingDiv;
									e &&
										((e.className =
											'highcharts-loading highcharts-loading-hidden'),
										i(
											e,
											{opacity: 0},
											{
												duration: t.loading.hideDuration || 100,
												complete: function () {
													o(e, {display: 'none'});
												},
											}
										)),
										(this.loadingShown = !1);
								},
								propsRequireDirtyBox:
									'backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow'.split(
										' '
									),
								propsRequireUpdateSeries:
									'chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip'.split(
										' '
									),
								update: function (t, e, i, s) {
									var n,
										o,
										h = this,
										l = {
											credits: 'addCredits',
											title: 'setTitle',
											subtitle: 'setSubtitle',
										},
										u = t.chart,
										f = [];
									c(h, 'update', {options: t}),
										u &&
											(g(!0, h.options.chart, u),
											'className' in u && h.setClassName(u.className),
											'reflow' in u && h.setReflow(u.reflow),
											('inverted' in u || 'polar' in u || 'type' in u) &&
												(h.propFromSeries(), (n = !0)),
											'alignTicks' in u && (n = !0),
											m(u, function (t, e) {
												-1 !== d('chart.' + e, h.propsRequireUpdateSeries) &&
													(o = !0),
													-1 !== d(e, h.propsRequireDirtyBox) &&
														(h.isDirtyBox = !0);
											}),
											'style' in u && h.renderer.setStyle(u.style)),
										t.colors && (this.options.colors = t.colors),
										t.plotOptions &&
											g(!0, this.options.plotOptions, t.plotOptions),
										m(t, function (t, e) {
											h[e] && 'function' == typeof h[e].update
												? h[e].update(t, !1)
												: 'function' == typeof h[l[e]] && h[l[e]](t),
												'chart' !== e &&
													-1 !== d(e, h.propsRequireUpdateSeries) &&
													(o = !0);
										}),
										a(
											'xAxis yAxis zAxis series colorAxis pane'.split(' '),
											function (e) {
												var s;
												t[e] &&
													('series' === e &&
														((s = []),
														a(h[e], function (t, e) {
															t.options.isInternal || s.push(e);
														})),
													a(w(t[e]), function (t, n) {
														(n =
															(r(t.id) && h.get(t.id)) || h[e][s ? s[n] : n]) &&
															n.coll === e &&
															(n.update(t, !1), i && (n.touched = !0)),
															!n &&
																i &&
																('series' === e
																	? (h.addSeries(t, !1).touched = !0)
																	: ('xAxis' !== e && 'yAxis' !== e) ||
																	  (h.addAxis(t, 'xAxis' === e, !1).touched =
																			!0));
													}),
													i &&
														a(h[e], function (t) {
															t.touched || t.options.isInternal
																? delete t.touched
																: f.push(t);
														}));
											}
										),
										a(f, function (t) {
											t.remove && t.remove(!1);
										}),
										n &&
											a(h.axes, function (t) {
												t.update({}, !1);
											}),
										o &&
											a(h.series, function (t) {
												t.update({}, !1);
											}),
										t.loading && g(!0, h.options.loading, t.loading),
										(n = u && u.width),
										(u = u && u.height),
										(p(n) && n !== h.chartWidth) ||
										(p(u) && u !== h.chartHeight)
											? h.setSize(n, u, s)
											: x(e, !0) && h.redraw(s),
										c(h, 'afterUpdate', {options: t});
								},
								setSubtitle: function (t) {
									this.setTitle(void 0, t);
								},
							}),
								l(v.prototype, {
									update: function (t, e, i, s) {
										function n() {
											r.applyOptions(t),
												null === r.y && h && (r.graphic = h.destroy()),
												u(t, !0) &&
													(h &&
														h.element &&
														t &&
														t.marker &&
														void 0 !== t.marker.symbol &&
														(r.graphic = h.destroy()),
													t &&
														t.dataLabels &&
														r.dataLabel &&
														(r.dataLabel = r.dataLabel.destroy()),
													r.connector && (r.connector = r.connector.destroy())),
												(o = r.index),
												a.updateParallelArrays(r, o),
												(c.data[o] =
													u(c.data[o], !0) || u(t, !0)
														? r.options
														: x(t, c.data[o])),
												(a.isDirty = a.isDirtyData = !0),
												!a.fixedBox &&
													a.hasCartesianSeries &&
													(l.isDirtyBox = !0),
												'point' === c.legendType && (l.isDirtyLegend = !0),
												e && l.redraw(i);
										}
										var o,
											r = this,
											a = r.series,
											h = r.graphic,
											l = a.chart,
											c = a.options;
										(e = x(e, !0)),
											!1 === s
												? n()
												: r.firePointEvent('update', {options: t}, n);
									},
									remove: function (t, e) {
										this.series.removePoint(d(this, this.series.data), t, e);
									},
								}),
								l(y.prototype, {
									addPoint: function (t, e, i, s) {
										var n,
											o,
											r,
											a,
											h = this.options,
											l = this.data,
											c = this.chart,
											d = (d = this.xAxis) && d.hasNames && d.names,
											p = h.data,
											u = this.xData;
										if (
											((e = x(e, !0)),
											(n = {series: this}),
											this.pointClass.prototype.applyOptions.apply(n, [t]),
											(a = n.x),
											(r = u.length),
											this.requireSorting && a < u[r - 1])
										)
											for (o = !0; r && u[r - 1] > a; ) r--;
										this.updateParallelArrays(n, 'splice', r, 0, 0),
											this.updateParallelArrays(n, r),
											d && n.name && (d[a] = n.name),
											p.splice(r, 0, t),
											o && (this.data.splice(r, 0, null), this.processData()),
											'point' === h.legendType && this.generatePoints(),
											i &&
												(l[0] && l[0].remove
													? l[0].remove(!1)
													: (l.shift(),
													  this.updateParallelArrays(n, 'shift'),
													  p.shift())),
											(this.isDirtyData = this.isDirty = !0),
											e && c.redraw(s);
									},
									removePoint: function (t, e, i) {
										var s = this,
											n = s.data,
											o = n[t],
											r = s.points,
											a = s.chart,
											h = function () {
												r && r.length === n.length && r.splice(t, 1),
													n.splice(t, 1),
													s.options.data.splice(t, 1),
													s.updateParallelArrays(
														o || {series: s},
														'splice',
														t,
														1
													),
													o && o.destroy(),
													(s.isDirty = !0),
													(s.isDirtyData = !0),
													e && a.redraw();
											};
										k(i, a),
											(e = x(e, !0)),
											o ? o.firePointEvent('remove', null, h) : h();
									},
									remove: function (t, e, i) {
										function s() {
											n.destroy(),
												(n.remove = null),
												(o.isDirtyLegend = o.isDirtyBox = !0),
												o.linkSeries(),
												x(t, !0) && o.redraw(e);
										}
										var n = this,
											o = n.chart;
										!1 !== i ? c(n, 'remove', null, s) : s();
									},
									update: function (e, i) {
										var s,
											n = this,
											o = n.chart,
											r = n.userOptions,
											h = n.oldType || n.type,
											p = e.type || r.type || o.options.chart.type,
											u = b[h].prototype,
											f = ['group', 'markerGroup', 'dataLabelsGroup'],
											m = ['navigatorSeries', 'baseSeries'],
											v = n.finishedAnimating && {animation: !1},
											y = ['data', 'name', 'turboThreshold'],
											k = t.keys(e),
											w = 0 < k.length;
										if (
											(a(k, function (t) {
												-1 === d(t, y) && (w = !1);
											}),
											w)
										)
											e.data && this.setData(e.data, !1),
												e.name && this.setName(e.name, !1);
										else {
											for (s in ((m = f.concat(m)),
											a(m, function (t) {
												(m[t] = n[t]), delete n[t];
											}),
											(e = g(
												r,
												v,
												{
													index: n.index,
													pointStart: x(r.pointStart, n.xData[0]),
												},
												{data: n.options.data},
												e
											)),
											n.remove(!1, null, !1),
											u))
												n[s] = void 0;
											b[p || h] ? l(n, b[p || h].prototype) : t.error(17, !0),
												a(m, function (t) {
													n[t] = m[t];
												}),
												n.init(o, e),
												e.zIndex !== r.zIndex &&
													a(f, function (t) {
														n[t] && n[t].attr({zIndex: e.zIndex});
													}),
												(n.oldType = h),
												o.linkSeries();
										}
										c(this, 'afterUpdate'), x(i, !0) && o.redraw(!!w && void 0);
									},
									setName: function (t) {
										(this.name = this.options.name = this.userOptions.name = t),
											(this.chart.isDirtyLegend = !0);
									},
								}),
								l(s.prototype, {
									update: function (t, e) {
										var i = this.chart,
											s = (t && t.events) || {};
										(t = g(this.userOptions, t)),
											i.options[this.coll].indexOf &&
												(i.options[this.coll][
													i.options[this.coll].indexOf(this.userOptions)
												] = t),
											m(i.options[this.coll].events, function (t, e) {
												void 0 === s[e] && (s[e] = void 0);
											}),
											this.destroy(!0),
											this.init(i, l(t, {events: s})),
											(i.isDirtyBox = !0),
											x(e, !0) && i.redraw();
									},
									remove: function (t) {
										for (
											var e = this.chart,
												i = this.coll,
												s = this.series,
												n = s.length;
											n--;

										)
											s[n] && s[n].remove(!1);
										h(e.axes, this),
											h(e[i], this),
											f(e.options[i])
												? e.options[i].splice(this.options.index, 1)
												: delete e.options[i],
											a(e[i], function (t, e) {
												t.options.index = t.userOptions.index = e;
											}),
											this.destroy(),
											(e.isDirtyBox = !0),
											x(t, !0) && e.redraw();
									},
									setTitle: function (t, e) {
										this.update({title: t}, e);
									},
									setCategories: function (t, e) {
										this.update({categories: t}, e);
									},
								});
						})(c),
						(function (t) {
							var e = t.color,
								i = t.each,
								s = t.map,
								n = t.pick,
								o = t.Series;
							(0, t.seriesType)(
								'area',
								'line',
								{softThreshold: !1, threshold: 0},
								{
									singleStacks: !1,
									getStackPoints: function (e) {
										var o,
											r,
											a = [],
											h = [],
											l = this.xAxis,
											c = this.yAxis,
											d = c.stacks[this.stackKey],
											p = {},
											u = this.index,
											f = c.series,
											g = f.length,
											m = n(c.options.reversedStacks, !0) ? 1 : -1;
										if (((e = e || this.points), this.options.stacking)) {
											for (r = 0; r < e.length; r++)
												(e[r].leftNull = e[r].rightNull = null),
													(p[e[r].x] = e[r]);
											t.objectEach(d, function (t, e) {
												null !== t.total && h.push(e);
											}),
												h.sort(function (t, e) {
													return t - e;
												}),
												(o = s(f, function () {
													return this.visible;
												})),
												i(h, function (t, e) {
													var s,
														n,
														f = 0;
													if (p[t] && !p[t].isNull)
														a.push(p[t]),
															i([-1, 1], function (i) {
																var a = 1 === i ? 'rightNull' : 'leftNull',
																	l = 0,
																	c = d[h[e + i]];
																if (c)
																	for (r = u; 0 <= r && r < g; )
																		(s = c.points[r]) ||
																			(r === u
																				? (p[t][a] = !0)
																				: o[r] &&
																				  (n = d[t].points[r]) &&
																				  (l -= n[1] - n[0])),
																			(r += m);
																p[t][1 === i ? 'rightCliff' : 'leftCliff'] = l;
															});
													else {
														for (r = u; 0 <= r && r < g; ) {
															if ((s = d[t].points[r])) {
																f = s[1];
																break;
															}
															r += m;
														}
														(f = c.translate(f, 0, 1, 0, 1)),
															a.push({
																isNull: !0,
																plotX: l.translate(t, 0, 0, 0, 1),
																x: t,
																plotY: f,
																yBottom: f,
															});
													}
												});
										}
										return a;
									},
									getGraphPath: function (t) {
										var e,
											i,
											s,
											r,
											a = o.prototype.getGraphPath,
											h = (m = this.options).stacking,
											l = this.yAxis,
											c = [],
											d = [],
											p = this.index,
											u = l.stacks[this.stackKey],
											f = m.threshold,
											g = l.getThreshold(m.threshold),
											m = m.connectNulls || 'percent' === h,
											x = function (e, i, n) {
												var o = t[e];
												e = h && u[o.x].points[p];
												var r,
													a,
													m = o[n + 'Null'] || 0;
												(n = o[n + 'Cliff'] || 0),
													(o = !0),
													n || m
														? ((r = (m ? e[0] : e[1]) + n),
														  (a = e[0] + n),
														  (o = !!m))
														: !h && t[i] && t[i].isNull && (r = a = f),
													void 0 !== r &&
														(d.push({
															plotX: s,
															plotY: null === r ? g : l.getThreshold(r),
															isNull: o,
															isCliff: !0,
														}),
														c.push({
															plotX: s,
															plotY: null === a ? g : l.getThreshold(a),
															doCurve: !1,
														}));
											};
										for (
											t = t || this.points,
												h && (t = this.getStackPoints(t)),
												e = 0;
											e < t.length;
											e++
										)
											(i = t[e].isNull),
												(s = n(t[e].rectPlotX, t[e].plotX)),
												(r = n(t[e].yBottom, g)),
												(!i || m) &&
													(m || x(e, e - 1, 'left'),
													(i && !h && m) ||
														(d.push(t[e]), c.push({x: e, plotX: s, plotY: r})),
													m || x(e, e + 1, 'right'));
										return (
											(e = a.call(this, d, !0, !0)),
											(c.reversed = !0),
											(i = a.call(this, c, !0, !0)).length && (i[0] = 'L'),
											(i = e.concat(i)),
											(a = a.call(this, d, !1, m)),
											(i.xMap = e.xMap),
											(this.areaPath = i),
											a
										);
									},
									drawGraph: function () {
										(this.areaPath = []), o.prototype.drawGraph.apply(this);
										var t = this,
											s = this.areaPath,
											r = this.options,
											a = [
												['area', 'highcharts-area', this.color, r.fillColor],
											];
										i(this.zones, function (e, i) {
											a.push([
												'zone-area-' + i,
												'highcharts-area highcharts-zone-area-' +
													i +
													' ' +
													e.className,
												e.color || t.color,
												e.fillColor || r.fillColor,
											]);
										}),
											i(a, function (i) {
												var o = i[0],
													a = t[o];
												a
													? ((a.endX = t.preventGraphAnimation ? null : s.xMap),
													  a.animate({d: s}))
													: ((a = t[o] =
															t.chart.renderer
																.path(s)
																.addClass(i[1])
																.attr({
																	fill: n(
																		i[3],
																		e(i[2])
																			.setOpacity(n(r.fillOpacity, 0.75))
																			.get()
																	),
																	zIndex: 0,
																})
																.add(t.group)).isArea = !0),
													(a.startX = s.xMap),
													(a.shiftUnit = r.step ? 2 : 1);
											});
									},
									drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
								}
							);
						})(c),
						(function (t) {
							var e = t.pick;
							(t = t.seriesType)(
								'spline',
								'line',
								{},
								{
									getPointSpline: function (t, i, s) {
										var n,
											o,
											r,
											a,
											h = i.plotX,
											l = i.plotY,
											c = t[s - 1];
										if (
											((s = t[s + 1]),
											c &&
												!c.isNull &&
												!1 !== c.doCurve &&
												!i.isCliff &&
												s &&
												!s.isNull &&
												!1 !== s.doCurve &&
												!i.isCliff)
										) {
											(t = c.plotY), (r = s.plotX);
											var d = 0;
											(o = (1.5 * l + t) / 2.5),
												(a = (1.5 * l + (s = s.plotY)) / 2.5),
												(r = (1.5 * h + r) / 2.5) !=
													(n = (1.5 * h + c.plotX) / 2.5) &&
													(d = ((a - o) * (r - h)) / (r - n) + l - a),
												(a += d),
												(o += d) > t && o > l
													? (a = 2 * l - (o = Math.max(t, l)))
													: o < t &&
													  o < l &&
													  (a = 2 * l - (o = Math.min(t, l))),
												a > s && a > l
													? (o = 2 * l - (a = Math.max(s, l)))
													: a < s &&
													  a < l &&
													  (o = 2 * l - (a = Math.min(s, l))),
												(i.rightContX = r),
												(i.rightContY = a);
										}
										return (
											(i = [
												'C',
												e(c.rightContX, c.plotX),
												e(c.rightContY, c.plotY),
												e(n, h),
												e(o, l),
												h,
												l,
											]),
											(c.rightContX = c.rightContY = null),
											i
										);
									},
								}
							);
						})(c),
						(function (t) {
							var e = t.seriesTypes.area.prototype;
							(0, t.seriesType)(
								'areaspline',
								'spline',
								t.defaultPlotOptions.area,
								{
									getStackPoints: e.getStackPoints,
									getGraphPath: e.getGraphPath,
									drawGraph: e.drawGraph,
									drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
								}
							);
						})(c),
						(function (t) {
							var e = t.animObject,
								i = t.color,
								s = t.each,
								n = t.extend,
								o = t.defined,
								r = t.isNumber,
								a = t.merge,
								h = t.pick,
								l = t.Series,
								c = t.seriesType,
								d = t.svg;
							c(
								'column',
								'line',
								{
									borderRadius: 0,
									crisp: !0,
									groupPadding: 0.2,
									marker: null,
									pointPadding: 0.1,
									minPointLength: 0,
									cropThreshold: 50,
									pointRange: null,
									states: {
										hover: {halo: !1, brightness: 0.1},
										select: {color: '#cccccc', borderColor: '#000000'},
									},
									dataLabels: {align: null, verticalAlign: null, y: null},
									softThreshold: !1,
									startFromThreshold: !0,
									stickyTracking: !1,
									tooltip: {distance: 6},
									threshold: 0,
									borderColor: '#ffffff',
								},
								{
									cropShoulder: 0,
									directTouch: !0,
									trackerGroups: ['group', 'dataLabelsGroup'],
									negStacks: !0,
									init: function () {
										l.prototype.init.apply(this, arguments);
										var t = this,
											e = t.chart;
										e.hasRendered &&
											s(e.series, function (e) {
												e.type === t.type && (e.isDirty = !0);
											});
									},
									getColumnMetrics: function () {
										var t,
											e = this,
											i = e.options,
											n = e.xAxis,
											o = e.yAxis,
											r = n.options.reversedStacks,
											a = ((r = (n.reversed && !r) || (!n.reversed && r)), {}),
											l = 0;
										!1 === i.grouping
											? (l = 1)
											: s(e.chart.series, function (i) {
													var s,
														n = i.options,
														r = i.yAxis;
													i.type !== e.type ||
														(!i.visible &&
															e.chart.options.chart.ignoreHiddenSeries) ||
														o.len !== r.len ||
														o.pos !== r.pos ||
														(n.stacking
															? ((t = i.stackKey),
															  void 0 === a[t] && (a[t] = l++),
															  (s = a[t]))
															: !1 !== n.grouping && (s = l++),
														(i.columnIndex = s));
											  });
										var c = Math.min(
												Math.abs(n.transA) *
													(n.ordinalSlope ||
														i.pointRange ||
														n.closestPointRange ||
														n.tickInterval ||
														1),
												n.len
											),
											d = c * i.groupPadding,
											p = (c - 2 * d) / (l || 1);
										return (
											(i = Math.min(
												i.maxPointWidth || n.len,
												h(i.pointWidth, p * (1 - 2 * i.pointPadding))
											)),
											(e.columnMetrics = {
												width: i,
												offset:
													(p - i) / 2 +
													(d +
														((e.columnIndex || 0) + (r ? 1 : 0)) * p -
														c / 2) *
														(r ? -1 : 1),
											}),
											e.columnMetrics
										);
									},
									crispCol: function (t, e, i, s) {
										var n = this.chart,
											o = -((r = this.borderWidth) % 2 ? 0.5 : 0),
											r = r % 2 ? 0.5 : 1;
										return (
											n.inverted && n.renderer.isVML && (r += 1),
											this.options.crisp &&
												((i = Math.round(t + i) + o),
												(i -= t = Math.round(t) + o)),
											(s = Math.round(e + s) + r),
											(o = 0.5 >= Math.abs(e) && 0.5 < s),
											(s -= e = Math.round(e) + r),
											o && s && (--e, (s += 1)),
											{x: t, y: e, width: i, height: s}
										);
									},
									translate: function () {
										var t = this,
											e = t.chart,
											i = t.options,
											n = (t.dense = 2 > t.closestPointRange * t.xAxis.transA),
											r =
												((n = t.borderWidth = h(i.borderWidth, n ? 0 : 1)),
												t.yAxis),
											a = i.threshold,
											c = (t.translatedThreshold = r.getThreshold(a)),
											d = h(i.minPointLength, 5),
											p = t.getColumnMetrics(),
											u = p.width,
											f = (t.barW = Math.max(u, 1 + 2 * n)),
											g = (t.pointXOffset = p.offset);
										e.inverted && (c -= 0.5),
											i.pointPadding && (f = Math.ceil(f)),
											l.prototype.translate.apply(t),
											s(t.points, function (i) {
												var s,
													n = h(i.yBottom, c),
													l = 999 + Math.abs(n),
													p = u,
													m =
														((l = Math.min(Math.max(-l, i.plotY), r.len + l)),
														i.plotX + g),
													x = f,
													v = Math.min(l, n),
													y = Math.max(l, n) - v;
												d &&
													Math.abs(y) < d &&
													((y = d),
													(s =
														(!r.reversed && !i.negative) ||
														(r.reversed && i.negative)),
													i.y === a && t.dataMax <= a && r.min < a && (s = !s),
													(v = Math.abs(v - c) > d ? n - d : c - (s ? d : 0))),
													o(i.options.pointWidth) &&
														((p = x = Math.ceil(i.options.pointWidth)),
														(m -= Math.round((p - u) / 2))),
													(i.barX = m),
													(i.pointWidth = p),
													(i.tooltipPos = e.inverted
														? [
																r.len + r.pos - e.plotLeft - l,
																t.xAxis.len - m - x / 2,
																y,
														  ]
														: [m + x / 2, l + r.pos - e.plotTop, y]),
													(i.shapeType = 'rect'),
													(i.shapeArgs = t.crispCol.apply(
														t,
														i.isNull ? [m, c, x, 0] : [m, v, x, y]
													));
											});
									},
									getSymbol: t.noop,
									drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
									drawGraph: function () {
										this.group[this.dense ? 'addClass' : 'removeClass'](
											'highcharts-dense-data'
										);
									},
									pointAttribs: function (t, e) {
										var s,
											n = this.options;
										s =
											(c = this.pointAttrToOptions || {}).stroke ||
											'borderColor';
										var o = c['stroke-width'] || 'borderWidth',
											r = (t && t.color) || this.color,
											h = (t && t[s]) || n[s] || this.color || r,
											l = (t && t[o]) || n[o] || this[o] || 0,
											c = n.dashStyle;
										return (
											t &&
												this.zones.length &&
												((r = t.getZone()),
												(r = t.options.color || (r && r.color) || this.color)),
											e &&
												((e = (t = a(
													n.states[e],
													(t.options.states && t.options.states[e]) || {}
												)).brightness),
												(r =
													t.color ||
													(void 0 !== e && i(r).brighten(t.brightness).get()) ||
													r),
												(h = t[s] || h),
												(l = t[o] || l),
												(c = t.dashStyle || c)),
											(s = {fill: r, stroke: h, 'stroke-width': l}),
											c && (s.dashstyle = c),
											s
										);
									},
									drawPoints: function () {
										var t,
											e = this,
											i = this.chart,
											n = e.options,
											o = i.renderer,
											h = n.animationLimit || 250;
										s(e.points, function (s) {
											var l = s.graphic,
												c = l && i.pointCount < h ? 'animate' : 'attr';
											r(s.plotY) && null !== s.y
												? ((t = s.shapeArgs),
												  l
														? l[c](a(t))
														: (s.graphic = l =
																o[s.shapeType](t).add(s.group || e.group)),
												  n.borderRadius && l.attr({r: n.borderRadius}),
												  l[c](
														e.pointAttribs(s, s.selected && 'select')
												  ).shadow(
														n.shadow,
														null,
														n.stacking && !n.borderRadius
												  ),
												  l.addClass(s.getClassName(), !0))
												: l && (s.graphic = l.destroy());
										});
									},
									animate: function (t) {
										var i,
											s = this,
											o = this.yAxis,
											r = s.options,
											a = this.chart.inverted,
											h = {},
											l = a ? 'translateX' : 'translateY';
										d &&
											(t
												? ((h.scaleY = 0.001),
												  (t = Math.min(
														o.pos + o.len,
														Math.max(o.pos, o.toPixels(r.threshold))
												  )),
												  a ? (h.translateX = t - o.len) : (h.translateY = t),
												  s.group.attr(h))
												: ((i = s.group.attr(l)),
												  s.group.animate(
														{scaleY: 1},
														n(e(s.options.animation), {
															step: function (t, e) {
																(h[l] = i + e.pos * (o.pos - i)),
																	s.group.attr(h);
															},
														})
												  ),
												  (s.animate = null)));
									},
									remove: function () {
										var t = this,
											e = t.chart;
										e.hasRendered &&
											s(e.series, function (e) {
												e.type === t.type && (e.isDirty = !0);
											}),
											l.prototype.remove.apply(t, arguments);
									},
								}
							);
						})(c),
						(function (t) {
							(t = t.seriesType)('bar', 'column', null, {inverted: !0});
						})(c),
						(function (t) {
							var e = t.Series;
							(t = t.seriesType)(
								'scatter',
								'line',
								{
									lineWidth: 0,
									findNearestPointBy: 'xy',
									marker: {enabled: !0},
									tooltip: {
										headerFormat:
											'<span style="color:{point.color}">●</span> <span style="font-size: 0.85em"> {series.name}</span><br/>',
										pointFormat:
											'x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>',
									},
								},
								{
									sorted: !1,
									requireSorting: !1,
									noSharedTooltip: !0,
									trackerGroups: ['group', 'markerGroup', 'dataLabelsGroup'],
									takeOrdinalPosition: !1,
									drawGraph: function () {
										this.options.lineWidth && e.prototype.drawGraph.call(this);
									},
								}
							);
						})(c),
						(function (t) {
							var e = t.deg2rad,
								i = t.isNumber,
								s = t.pick,
								n = t.relativeLength;
							t.CenteredSeriesMixin = {
								getCenter: function () {
									var t,
										e,
										i = this.options,
										o = this.chart,
										r = 2 * (i.slicedOffset || 0),
										a = o.plotWidth - 2 * r,
										h = ((o = o.plotHeight - 2 * r), i.center),
										l =
											((h = [
												s(h[0], '50%'),
												s(h[1], '50%'),
												i.size || '100%',
												i.innerSize || 0,
											]),
											Math.min(a, o));
									for (t = 0; 4 > t; ++t)
										(e = h[t]),
											(i = 2 > t || (2 === t && /%$/.test(e))),
											(h[t] = n(e, [a, o, l, h[2]][t]) + (i ? r : 0));
									return h[3] > h[2] && (h[3] = h[2]), h;
								},
								getStartAndEndRadians: function (t, s) {
									return (
										(t = i(t) ? t : 0),
										(s = i(s) && s > t && 360 > s - t ? s : t + 360),
										{start: e * (t + -90), end: e * (s + -90)}
									);
								},
							};
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.CenteredSeriesMixin,
								s = t.defined,
								n = t.each,
								o = t.extend,
								r = i.getStartAndEndRadians,
								a = t.inArray,
								h = t.noop,
								l = t.pick,
								c = t.Point,
								d = t.Series,
								p = t.seriesType,
								u = t.setAnimation;
							p(
								'pie',
								'line',
								{
									center: [null, null],
									clip: !1,
									colorByPoint: !0,
									dataLabels: {
										allowOverlap: !0,
										distance: 30,
										enabled: !0,
										formatter: function () {
											return this.point.isNull ? void 0 : this.point.name;
										},
										x: 0,
									},
									ignoreHiddenPoint: !0,
									legendType: 'point',
									marker: null,
									size: null,
									showInLegend: !1,
									slicedOffset: 10,
									stickyTracking: !1,
									tooltip: {followPointer: !0},
									borderColor: '#ffffff',
									borderWidth: 1,
									states: {hover: {brightness: 0.1}},
								},
								{
									isCartesian: !1,
									requireSorting: !1,
									directTouch: !0,
									noSharedTooltip: !0,
									trackerGroups: ['group', 'dataLabelsGroup'],
									axisTypes: [],
									pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
									animate: function (t) {
										var e = this,
											i = e.points,
											s = e.startAngleRad;
										t ||
											(n(i, function (t) {
												var i = t.graphic,
													n = t.shapeArgs;
												i &&
													(i.attr({
														r: t.startR || e.center[3] / 2,
														start: s,
														end: s,
													}),
													i.animate(
														{r: n.r, start: n.start, end: n.end},
														e.options.animation
													));
											}),
											(e.animate = null));
									},
									updateTotals: function () {
										var t,
											e,
											i = 0,
											s = this.points,
											n = s.length,
											o = this.options.ignoreHiddenPoint;
										for (t = 0; t < n; t++)
											(e = s[t]),
												(i += (o && !e.visible) || e.isNull ? 0 : e.y);
										for (this.total = i, t = 0; t < n; t++)
											((e = s[t]).percentage =
												0 < i && (e.visible || !o) ? (e.y / i) * 100 : 0),
												(e.total = i);
									},
									generatePoints: function () {
										d.prototype.generatePoints.call(this), this.updateTotals();
									},
									translate: function (t) {
										this.generatePoints();
										var e,
											i,
											s,
											n,
											o,
											a,
											h = 0,
											c = (m = this.options).slicedOffset,
											d = c + (m.borderWidth || 0),
											p = r(m.startAngle, m.endAngle),
											u = (this.startAngleRad = p.start),
											f = ((p = (this.endAngleRad = p.end) - u), this.points),
											g = m.dataLabels.distance,
											m = m.ignoreHiddenPoint,
											x = f.length;
										for (
											t || (this.center = t = this.getCenter()),
												this.getX = function (e, i, n) {
													return (
														(s = Math.asin(
															Math.min(
																(e - t[1]) / (t[2] / 2 + n.labelDistance),
																1
															)
														)),
														t[0] +
															(i ? -1 : 1) *
																Math.cos(s) *
																(t[2] / 2 + n.labelDistance)
													);
												},
												o = 0;
											o < x;
											o++
										)
											((a = f[o]).labelDistance = l(
												a.options.dataLabels && a.options.dataLabels.distance,
												g
											)),
												(this.maxLabelDistance = Math.max(
													this.maxLabelDistance || 0,
													a.labelDistance
												)),
												(e = u + h * p),
												(m && !a.visible) || (h += a.percentage / 100),
												(i = u + h * p),
												(a.shapeType = 'arc'),
												(a.shapeArgs = {
													x: t[0],
													y: t[1],
													r: t[2] / 2,
													innerR: t[3] / 2,
													start: Math.round(1e3 * e) / 1e3,
													end: Math.round(1e3 * i) / 1e3,
												}),
												(s = (i + e) / 2) > 1.5 * Math.PI
													? (s -= 2 * Math.PI)
													: s < -Math.PI / 2 && (s += 2 * Math.PI),
												(a.slicedTranslation = {
													translateX: Math.round(Math.cos(s) * c),
													translateY: Math.round(Math.sin(s) * c),
												}),
												(i = (Math.cos(s) * t[2]) / 2),
												(n = (Math.sin(s) * t[2]) / 2),
												(a.tooltipPos = [t[0] + 0.7 * i, t[1] + 0.7 * n]),
												(a.half = s < -Math.PI / 2 || s > Math.PI / 2 ? 1 : 0),
												(a.angle = s),
												(e = Math.min(d, a.labelDistance / 5)),
												(a.labelPos = [
													t[0] + i + Math.cos(s) * a.labelDistance,
													t[1] + n + Math.sin(s) * a.labelDistance,
													t[0] + i + Math.cos(s) * e,
													t[1] + n + Math.sin(s) * e,
													t[0] + i,
													t[1] + n,
													0 > a.labelDistance
														? 'center'
														: a.half
														? 'right'
														: 'left',
													s,
												]);
									},
									drawGraph: null,
									drawPoints: function () {
										var t,
											e,
											i,
											s,
											r = this,
											a = r.chart.renderer,
											h = r.options.shadow;
										h &&
											!r.shadowGroup &&
											(r.shadowGroup = a.g('shadow').add(r.group)),
											n(r.points, function (n) {
												if (((e = n.graphic), n.isNull))
													e && (n.graphic = e.destroy());
												else {
													(s = n.shapeArgs), (t = n.getTranslate());
													var l = n.shadowGroup;
													h &&
														!l &&
														(l = n.shadowGroup =
															a.g('shadow').add(r.shadowGroup)),
														l && l.attr(t),
														(i = r.pointAttribs(n, n.selected && 'select')),
														e
															? e
																	.setRadialReference(r.center)
																	.attr(i)
																	.animate(o(s, t))
															: ((n.graphic = e =
																	a[n.shapeType](s)
																		.setRadialReference(r.center)
																		.attr(t)
																		.add(r.group)),
															  e
																	.attr(i)
																	.attr({'stroke-linejoin': 'round'})
																	.shadow(h, l)),
														e.attr({
															visibility: n.visible ? 'inherit' : 'hidden',
														}),
														e.addClass(n.getClassName());
												}
											});
									},
									searchPoint: h,
									sortByAngle: function (t, e) {
										t.sort(function (t, i) {
											return void 0 !== t.angle && (i.angle - t.angle) * e;
										});
									},
									drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
									getCenter: i.getCenter,
									getSymbol: h,
								},
								{
									init: function () {
										c.prototype.init.apply(this, arguments);
										var t,
											i = this;
										return (
											(i.name = l(i.name, 'Slice')),
											(t = function (t) {
												i.slice('select' === t.type);
											}),
											e(i, 'select', t),
											e(i, 'unselect', t),
											i
										);
									},
									isValid: function () {
										return t.isNumber(this.y, !0) && 0 <= this.y;
									},
									setVisible: function (t, e) {
										var i = this,
											s = i.series,
											o = s.chart,
											r = s.options.ignoreHiddenPoint;
										(e = l(e, r)),
											t !== i.visible &&
												((i.visible =
													i.options.visible =
													t =
														void 0 === t ? !i.visible : t),
												(s.options.data[a(i, s.data)] = i.options),
												n(
													['graphic', 'dataLabel', 'connector', 'shadowGroup'],
													function (e) {
														i[e] && i[e][t ? 'show' : 'hide'](!0);
													}
												),
												i.legendItem && o.legend.colorizeItem(i, t),
												t || 'hover' !== i.state || i.setState(''),
												r && (s.isDirty = !0),
												e && o.redraw());
									},
									slice: function (t, e, i) {
										var n = this.series;
										u(i, n.chart),
											l(e, !0),
											(this.sliced = this.options.sliced =
												s(t) ? t : !this.sliced),
											(n.options.data[a(this, n.data)] = this.options),
											this.graphic.animate(this.getTranslate()),
											this.shadowGroup &&
												this.shadowGroup.animate(this.getTranslate());
									},
									getTranslate: function () {
										return this.sliced
											? this.slicedTranslation
											: {translateX: 0, translateY: 0};
									},
									haloPath: function (t) {
										var e = this.shapeArgs;
										return this.sliced || !this.visible
											? []
											: this.series.chart.renderer.symbols.arc(
													e.x,
													e.y,
													e.r + t,
													e.r + t,
													{
														innerR: this.shapeArgs.r - 1,
														start: e.start,
														end: e.end,
													}
											  );
									},
								}
							);
						})(c),
						(function (t) {
							var e = t.addEvent,
								i = t.arrayMax,
								s = t.defined,
								n = t.each,
								o = t.extend,
								r = t.format,
								a = t.map,
								h = t.merge,
								l = t.noop,
								c = t.pick,
								d = t.relativeLength,
								p = t.Series,
								u = t.seriesTypes,
								f = t.some,
								g = t.stableSort,
								m = t.isArray,
								x = t.splat;
							(t.distribute = function (e, i, s) {
								function o(t, e) {
									return t.target - e.target;
								}
								var r,
									h,
									l = !0,
									d = e,
									p = [];
								h = 0;
								var u = d.reducedLen || i;
								for (r = e.length; r--; ) h += e[r].size;
								if (h > u) {
									for (
										g(e, function (t, e) {
											return (e.rank || 0) - (t.rank || 0);
										}),
											h = r = 0;
										h <= u;

									)
										(h += e[r].size), r++;
									p = e.splice(r - 1, e.length);
								}
								for (
									g(e, o),
										e = a(e, function (t) {
											return {
												size: t.size,
												targets: [t.target],
												align: c(t.align, 0.5),
											};
										});
									l;

								) {
									for (r = e.length; r--; )
										(l = e[r]),
											(h =
												(Math.min.apply(0, l.targets) +
													Math.max.apply(0, l.targets)) /
												2),
											(l.pos = Math.min(
												Math.max(0, h - l.size * l.align),
												i - l.size
											));
									for (r = e.length, l = !1; r--; )
										0 < r &&
											e[r - 1].pos + e[r - 1].size > e[r].pos &&
											((e[r - 1].size += e[r].size),
											(e[r - 1].targets = e[r - 1].targets.concat(
												e[r].targets
											)),
											(e[r - 1].align = 0.5),
											e[r - 1].pos + e[r - 1].size > i &&
												(e[r - 1].pos = i - e[r - 1].size),
											e.splice(r, 1),
											(l = !0));
								}
								d.push.apply(d, p),
									(r = 0),
									f(e, function (e) {
										var o = 0;
										if (
											f(e.targets, function () {
												if (
													((d[r].pos = e.pos + o),
													Math.abs(d[r].pos - d[r].target) > s)
												)
													return (
														n(d.slice(0, r + 1), function (t) {
															delete t.pos;
														}),
														(d.reducedLen = (d.reducedLen || i) - 0.1 * i),
														d.reducedLen > 0.1 * i && t.distribute(d, i, s),
														!0
													);
												(o += d[r].size), r++;
											})
										)
											return !0;
									}),
									g(d, o);
							}),
								(p.prototype.drawDataLabels = function () {
									function i(t, e) {
										var i,
											s = [];
										if (m(t) && !m(e))
											s = a(t, function (t) {
												return h(t, e);
											});
										else if (m(e) && !m(t))
											s = a(e, function (e) {
												return h(t, e);
											});
										else if (m(t) || m(e))
											for (i = Math.max(t.length, e.length); i--; )
												s[i] = h(t[i], e[i]);
										else s = h(t, e);
										return s;
									}
									var o,
										l,
										d = this,
										p = d.chart,
										u = d.options,
										f = u.dataLabels,
										g = d.points,
										v = d.hasRendered || 0,
										y = c(f.defer, !!u.animation),
										b = p.renderer;
									(f = i(
										i(
											p.options.plotOptions &&
												p.options.plotOptions.series &&
												p.options.plotOptions.series.dataLabels,
											p.options.plotOptions &&
												p.options.plotOptions[d.type] &&
												p.options.plotOptions[d.type].dataLabels
										),
										f
									)),
										(m(f) || f.enabled || d._hasPointLabels) &&
											((l = d.plotGroup(
												'dataLabelsGroup',
												'data-labels',
												y && !v ? 'hidden' : 'visible',
												f.zIndex || 6
											)),
											y &&
												(l.attr({opacity: +v}),
												v ||
													e(d, 'afterAnimate', function () {
														d.visible && l.show(!0),
															l[u.animation ? 'animate' : 'attr'](
																{opacity: 1},
																{duration: 200}
															);
													})),
											n(g, function (e) {
												(o = x(
													i(
														f,
														e.dlOptions || (e.options && e.options.dataLabels)
													)
												)),
													n(o, function (i, n) {
														var o,
															a,
															h,
															f,
															g =
																i.enabled &&
																!e.isNull &&
																(function (t, e) {
																	var i = e.filter;
																	return (
																		!i ||
																		((e = i.operator),
																		(t = t[i.property]),
																		(i = i.value),
																		('>' === e && t > i) ||
																			('<' === e && t < i) ||
																			('>=' === e && t >= i) ||
																			('<=' === e && t <= i) ||
																			('==' === e && t == i) ||
																			('===' === e && t === i))
																	);
																})(e, i),
															m = e.dataLabels ? e.dataLabels[n] : e.dataLabel,
															x = e.connectors ? e.connectors[n] : e.connector,
															v = !m;
														g &&
															((o = e.getLabelConfig()),
															(a = i[e.formatPrefix + 'Format'] || i.format),
															(o = s(a)
																? r(a, o, p.time)
																: (
																		i[e.formatPrefix + 'Formatter'] ||
																		i.formatter
																  ).call(o, i)),
															(a = i.style),
															(h = i.rotation),
															(a.color = c(
																i.color,
																a.color,
																d.color,
																'#000000'
															)),
															'contrast' === a.color &&
																((e.contrastColor = b.getContrast(
																	e.color || d.color
																)),
																(a.color =
																	i.inside ||
																	0 > c(i.distance, e.labelDistance) ||
																	u.stacking
																		? e.contrastColor
																		: '#000000')),
															u.cursor && (a.cursor = u.cursor),
															(f = {
																fill: i.backgroundColor,
																stroke: i.borderColor,
																'stroke-width': i.borderWidth,
																r: i.borderRadius || 0,
																rotation: h,
																padding: i.padding,
																zIndex: 1,
															}),
															t.objectEach(f, function (t, e) {
																void 0 === t && delete f[e];
															})),
															!m || (g && s(o))
																? g &&
																  s(o) &&
																  (m
																		? (f.text = o)
																		: ((e.dataLabels = e.dataLabels || []),
																		  (m = e.dataLabels[n] =
																				h
																					? b
																							.text(o, 0, -9999)
																							.addClass('highcharts-data-label')
																					: b.label(
																							o,
																							0,
																							-9999,
																							i.shape,
																							null,
																							null,
																							i.useHTML,
																							null,
																							'data-label'
																					  )),
																		  n || (e.dataLabel = m),
																		  m.addClass(
																				' highcharts-data-label-color-' +
																					e.colorIndex +
																					' ' +
																					(i.className || '') +
																					(i.useHTML
																						? ' highcharts-tracker'
																						: '')
																		  )),
																  (m.options = i),
																  m.attr(f),
																  m.css(a).shadow(i.shadow),
																  m.added || m.add(l),
																  d.alignDataLabel(e, m, i, null, v))
																: ((e.dataLabel = e.dataLabel.destroy()),
																  e.dataLabels &&
																		(1 === e.dataLabels.length
																			? delete e.dataLabels
																			: delete e.dataLabels[n]),
																  n || delete e.dataLabel,
																  x &&
																		((e.connector = e.connector.destroy()),
																		e.connectors &&
																			(1 === e.connectors.length
																				? delete e.connectors
																				: delete e.connectors[n])));
													});
											})),
										t.fireEvent(this, 'afterDrawDataLabels');
								}),
								(p.prototype.alignDataLabel = function (t, e, i, s, n) {
									var r,
										a = this.chart,
										h = a.inverted,
										l = c(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
										d = c(t.plotY, -9999),
										p = e.getBBox(),
										u = i.rotation,
										f = i.align,
										g =
											this.visible &&
											(t.series.forceDL ||
												a.isInsidePlot(l, Math.round(d), h) ||
												(s &&
													a.isInsidePlot(
														l,
														h ? s.x + 1 : s.y + s.height - 1,
														h
													))),
										m = 'justify' === c(i.overflow, 'justify');
									g &&
										((r = i.style.fontSize),
										(r = a.renderer.fontMetrics(r, e).b),
										(s = o(
											{
												x: h ? this.yAxis.len - d : l,
												y: Math.round(h ? this.xAxis.len - l : d),
												width: 0,
												height: 0,
											},
											s
										)),
										o(i, {width: p.width, height: p.height}),
										u
											? ((m = !1),
											  (l = a.renderer.rotCorr(r, u)),
											  (l = {
													x: s.x + i.x + s.width / 2 + l.x,
													y:
														s.y +
														i.y +
														{top: 0, middle: 0.5, bottom: 1}[i.verticalAlign] *
															s.height,
											  }),
											  e[n ? 'attr' : 'animate'](l).attr({align: f}),
											  (d = 180 < (d = (u + 720) % 360) && 360 > d),
											  'left' === f
													? (l.y -= d ? p.height : 0)
													: 'center' === f
													? ((l.x -= p.width / 2), (l.y -= p.height / 2))
													: 'right' === f &&
													  ((l.x -= p.width), (l.y -= d ? 0 : p.height)),
											  (e.placed = !0),
											  (e.alignAttr = l))
											: (e.align(i, null, s), (l = e.alignAttr)),
										m && 0 <= s.height
											? (t.isLabelJustified = this.justifyDataLabel(
													e,
													i,
													l,
													p,
													s,
													n
											  ))
											: c(i.crop, !0) &&
											  (g =
													a.isInsidePlot(l.x, l.y) &&
													a.isInsidePlot(l.x + p.width, l.y + p.height)),
										i.shape && !u) &&
										e[n ? 'attr' : 'animate']({
											anchorX: h ? a.plotWidth - t.plotY : t.plotX,
											anchorY: h ? a.plotHeight - t.plotX : t.plotY,
										}),
										g || (e.attr({y: -9999}), (e.placed = !1));
								}),
								(p.prototype.justifyDataLabel = function (t, e, i, s, n, o) {
									var r,
										a,
										h = this.chart,
										l = e.align,
										c = e.verticalAlign,
										d = t.box ? 0 : t.padding || 0;
									return (
										0 > (r = i.x + d) &&
											('right' === l ? (e.align = 'left') : (e.x = -r),
											(a = !0)),
										(r = i.x + s.width - d) > h.plotWidth &&
											('left' === l
												? (e.align = 'right')
												: (e.x = h.plotWidth - r),
											(a = !0)),
										0 > (r = i.y + d) &&
											('bottom' === c ? (e.verticalAlign = 'top') : (e.y = -r),
											(a = !0)),
										(r = i.y + s.height - d) > h.plotHeight &&
											('top' === c
												? (e.verticalAlign = 'bottom')
												: (e.y = h.plotHeight - r),
											(a = !0)),
										a && ((t.placed = !o), t.align(e, null, n)),
										a
									);
								}),
								u.pie &&
									((u.pie.prototype.drawDataLabels = function () {
										var e,
											o,
											r,
											a,
											h,
											l,
											d,
											u,
											f,
											g,
											m = this,
											x = m.data,
											v = m.chart,
											y = m.options.dataLabels,
											b = c(y.connectorPadding, 10),
											k = c(y.connectorWidth, 1),
											w = v.plotWidth,
											M = v.plotHeight,
											S = Math.round(v.chartWidth / 3),
											T = m.center,
											A = T[2] / 2,
											L = T[1],
											P = [[], []],
											C = [0, 0, 0, 0];
										m.visible &&
											(y.enabled || m._hasPointLabels) &&
											(n(x, function (t) {
												t.dataLabel &&
													t.visible &&
													t.dataLabel.shortened &&
													(t.dataLabel
														.attr({width: 'auto'})
														.css({width: 'auto', textOverflow: 'clip'}),
													(t.dataLabel.shortened = !1));
											}),
											p.prototype.drawDataLabels.apply(m),
											n(x, function (t) {
												t.dataLabel &&
													(t.visible
														? (P[t.half].push(t),
														  (t.dataLabel._pos = null),
														  !s(y.style.width) &&
																!s(
																	t.options.dataLabels &&
																		t.options.dataLabels.style &&
																		t.options.dataLabels.style.width
																) &&
																t.dataLabel.getBBox().width > S &&
																(t.dataLabel.css({width: 0.7 * S}),
																(t.dataLabel.shortened = !0)))
														: ((t.dataLabel = t.dataLabel.destroy()),
														  t.dataLabels &&
																1 === t.dataLabels.length &&
																delete t.dataLabels));
											}),
											n(P, function (i, o) {
												var p,
													x,
													k,
													S = i.length,
													P = [];
												if (S)
													for (
														m.sortByAngle(i, o - 0.5),
															0 < m.maxLabelDistance &&
																((p = Math.max(0, L - A - m.maxLabelDistance)),
																(x = Math.min(
																	L + A + m.maxLabelDistance,
																	v.plotHeight
																)),
																n(i, function (t) {
																	0 < t.labelDistance &&
																		t.dataLabel &&
																		((t.top = Math.max(
																			0,
																			L - A - t.labelDistance
																		)),
																		(t.bottom = Math.min(
																			L + A + t.labelDistance,
																			v.plotHeight
																		)),
																		(k = t.dataLabel.getBBox().height || 21),
																		(t.distributeBox = {
																			target: t.labelPos[1] - t.top + k / 2,
																			size: k,
																			rank: t.y,
																		}),
																		P.push(t.distributeBox));
																}),
																(p = x + k - p),
																t.distribute(P, p, p / 5)),
															g = 0;
														g < S;
														g++
													)
														(e = i[g]),
															(h = e.labelPos),
															(r = e.dataLabel),
															(f = !1 === e.visible ? 'hidden' : 'inherit'),
															(u = p = h[1]),
															P &&
																s(e.distributeBox) &&
																(void 0 === e.distributeBox.pos
																	? (f = 'hidden')
																	: ((l = e.distributeBox.size),
																	  (u = e.top + e.distributeBox.pos))),
															delete e.positionIndex,
															(d = y.justify
																? T[0] + (o ? -1 : 1) * (A + e.labelDistance)
																: m.getX(
																		u < e.top + 2 || u > e.bottom - 2 ? p : u,
																		o,
																		e
																  )),
															(r._attr = {visibility: f, align: h[6]}),
															(r._pos = {
																x: d + y.x + ({left: b, right: -b}[h[6]] || 0),
																y: u + y.y - 10,
															}),
															(h.x = d),
															(h.y = u),
															c(y.crop, !0) &&
																((a = r.getBBox().width),
																(p = null),
																d - a < b && 1 === o
																	? ((p = Math.round(a - d + b)),
																	  (C[3] = Math.max(p, C[3])))
																	: d + a > w - b &&
																	  0 === o &&
																	  ((p = Math.round(d + a - w + b)),
																	  (C[1] = Math.max(p, C[1]))),
																0 > u - l / 2
																	? (C[0] = Math.max(
																			Math.round(l / 2 - u),
																			C[0]
																	  ))
																	: u + l / 2 > M &&
																	  (C[2] = Math.max(
																			Math.round(u + l / 2 - M),
																			C[2]
																	  )),
																(r.sideOverflow = p));
											}),
											0 === i(C) || this.verifyDataLabelOverflow(C)) &&
											(this.placeDataLabels(),
											k &&
												n(this.points, function (t) {
													var e;
													(o = t.connector),
														(r = t.dataLabel) &&
														r._pos &&
														t.visible &&
														0 < t.labelDistance
															? ((f = r._attr.visibility),
															  (e = !o) &&
																	((t.connector = o =
																		v.renderer
																			.path()
																			.addClass(
																				'highcharts-data-label-connector  highcharts-color-' +
																					t.colorIndex +
																					(t.className ? ' ' + t.className : '')
																			)
																			.add(m.dataLabelsGroup)),
																	o.attr({
																		'stroke-width': k,
																		stroke:
																			y.connectorColor || t.color || '#666666',
																	})),
															  o[e ? 'attr' : 'animate']({
																	d: m.connectorPath(t.labelPos),
															  }),
															  o.attr('visibility', f))
															: o && (t.connector = o.destroy());
												}));
									}),
									(u.pie.prototype.connectorPath = function (t) {
										var e = t.x,
											i = t.y;
										return c(this.options.dataLabels.softConnector, !0)
											? [
													'M',
													e + ('left' === t[6] ? 5 : -5),
													i,
													'C',
													e,
													i,
													2 * t[2] - t[4],
													2 * t[3] - t[5],
													t[2],
													t[3],
													'L',
													t[4],
													t[5],
											  ]
											: [
													'M',
													e + ('left' === t[6] ? 5 : -5),
													i,
													'L',
													t[2],
													t[3],
													'L',
													t[4],
													t[5],
											  ];
									}),
									(u.pie.prototype.placeDataLabels = function () {
										n(
											this.points,
											function (t) {
												var e = t.dataLabel;
												e &&
													t.visible &&
													((t = e._pos)
														? (e.sideOverflow &&
																((e._attr.width =
																	e.getBBox().width - e.sideOverflow),
																e.css({
																	width: e._attr.width + 'px',
																	textOverflow:
																		(this.options.dataLabels.style || {})
																			.textOverflow || 'ellipsis',
																}),
																(e.shortened = !0)),
														  e.attr(e._attr),
														  e[e.moved ? 'animate' : 'attr'](t),
														  (e.moved = !0))
														: e && e.attr({y: -9999}));
											},
											this
										);
									}),
									(u.pie.prototype.alignDataLabel = l),
									(u.pie.prototype.verifyDataLabelOverflow = function (t) {
										var e,
											i = this.center,
											s = this.options,
											n = s.center,
											o = s.minSize || 80,
											r = null !== s.size;
										return (
											r ||
												(null !== n[0]
													? (e = Math.max(i[2] - Math.max(t[1], t[3]), o))
													: ((e = Math.max(i[2] - t[1] - t[3], o)),
													  (i[0] += (t[3] - t[1]) / 2)),
												null !== n[1]
													? (e = Math.max(
															Math.min(e, i[2] - Math.max(t[0], t[2])),
															o
													  ))
													: ((e = Math.max(Math.min(e, i[2] - t[0] - t[2]), o)),
													  (i[1] += (t[0] - t[2]) / 2)),
												e < i[2]
													? ((i[2] = e),
													  (i[3] = Math.min(d(s.innerSize || 0, e), e)),
													  this.translate(i),
													  this.drawDataLabels && this.drawDataLabels())
													: (r = !0)),
											r
										);
									})),
								u.column &&
									(u.column.prototype.alignDataLabel = function (
										t,
										e,
										i,
										s,
										n
									) {
										var o = this.chart.inverted,
											r = t.series,
											a = t.dlBox || t.shapeArgs,
											l = c(
												t.below,
												t.plotY > c(this.translatedThreshold, r.yAxis.len)
											),
											d = c(i.inside, !!this.options.stacking);
										a &&
											(0 > (s = h(a)).y && ((s.height += s.y), (s.y = 0)),
											0 < (a = s.y + s.height - r.yAxis.len) && (s.height -= a),
											o &&
												(s = {
													x: r.yAxis.len - s.y - s.height,
													y: r.xAxis.len - s.x - s.width,
													width: s.height,
													height: s.width,
												}),
											d ||
												(o
													? ((s.x += l ? 0 : s.width), (s.width = 0))
													: ((s.y += l ? s.height : 0), (s.height = 0)))),
											(i.align = c(
												i.align,
												!o || d ? 'center' : l ? 'right' : 'left'
											)),
											(i.verticalAlign = c(
												i.verticalAlign,
												o || d ? 'middle' : l ? 'top' : 'bottom'
											)),
											p.prototype.alignDataLabel.call(this, t, e, i, s, n),
											t.isLabelJustified &&
												t.contrastColor &&
												e.css({color: t.contrastColor});
									});
						})(c),
						(function (t) {
							var e = t.Chart,
								i = t.each,
								s = t.isArray,
								n = t.objectEach,
								o = t.pick;
							(t = t.addEvent)(e, 'render', function () {
								var t = [];
								i(this.labelCollectors || [], function (e) {
									t = t.concat(e());
								}),
									i(this.yAxis || [], function (e) {
										e.options.stackLabels &&
											!e.options.stackLabels.allowOverlap &&
											n(e.stacks, function (e) {
												n(e, function (e) {
													t.push(e.label);
												});
											});
									}),
									i(this.series || [], function (e) {
										var n = e.options.dataLabels;
										e.visible &&
											(!1 !== n.enabled || e._hasPointLabels) &&
											i(e.points, function (e) {
												if (e.visible) {
													var n = s(e.dataLabels)
														? e.dataLabels
														: e.dataLabel
														? [e.dataLabel]
														: [];
													i(n, function (i) {
														var s = i.options;
														(i.labelrank = o(
															s.labelrank,
															e.labelrank,
															e.shapeArgs && e.shapeArgs.height
														)),
															s.allowOverlap || t.push(i);
													});
												}
											});
									}),
									this.hideOverlappingLabels(t);
							}),
								(e.prototype.hideOverlappingLabels = function (t) {
									var e,
										s,
										n,
										o,
										r,
										a,
										h = t.length,
										l = this.renderer,
										c = function (t, e, i, s, n, o, r, a) {
											return !(
												n > t + i ||
												n + r < t ||
												o > e + s ||
												o + a < e
											);
										};
									for (
										n = function (t) {
											var e,
												i,
												s,
												n = t.box ? 0 : t.padding || 0;
											if (((s = 0), t && (!t.alignAttr || t.placed)))
												return (
													(e = t.alignAttr || {x: t.attr('x'), y: t.attr('y')}),
													(i = t.parentGroup),
													t.width ||
														((s = t.getBBox()),
														(t.width = s.width),
														(t.height = s.height),
														(s = l.fontMetrics(null, t.element).h)),
													{
														x: e.x + (i.translateX || 0) + n,
														y: e.y + (i.translateY || 0) + n - s,
														width: t.width - 2 * n,
														height: t.height - 2 * n,
													}
												);
										},
											s = 0;
										s < h;
										s++
									)
										(e = t[s]) &&
											((e.oldOpacity = e.opacity),
											(e.newOpacity = 1),
											(e.absoluteBox = n(e)));
									for (
										t.sort(function (t, e) {
											return (e.labelrank || 0) - (t.labelrank || 0);
										}),
											s = 0;
										s < h;
										s++
									)
										for (a = (n = t[s]) && n.absoluteBox, e = s + 1; e < h; ++e)
											(r = (o = t[e]) && o.absoluteBox),
												a &&
													r &&
													n !== o &&
													0 !== n.newOpacity &&
													0 !== o.newOpacity &&
													(r = c(
														a.x,
														a.y,
														a.width,
														a.height,
														r.x,
														r.y,
														r.width,
														r.height
													)) &&
													((n.labelrank < o.labelrank ? n : o).newOpacity = 0);
									i(t, function (t) {
										var e, i;
										t &&
											((i = t.newOpacity),
											t.oldOpacity !== i &&
												(t.alignAttr && t.placed
													? (i
															? t.show(!0)
															: (e = function () {
																	t.hide();
															  }),
													  (t.alignAttr.opacity = i),
													  t[t.isOld ? 'animate' : 'attr'](
															t.alignAttr,
															null,
															e
													  ))
													: t.attr({opacity: i})),
											(t.isOld = !0));
									});
								});
						})(c),
						(function (t) {
							var e,
								i = t.addEvent,
								s = t.Chart,
								n = t.createElement,
								o = t.css,
								r = t.defaultOptions,
								a = t.defaultPlotOptions,
								h = t.each,
								l = t.extend,
								c = t.fireEvent,
								d = t.hasTouch,
								p = t.inArray,
								u = t.isObject,
								f = t.Legend,
								g = t.merge,
								m = t.pick,
								x = t.Point,
								v = t.Series,
								y = t.seriesTypes,
								b = t.svg;
							(e = t.TrackerMixin =
								{
									drawTrackerPoint: function () {
										var t = this,
											e = t.chart.pointer,
											i = function (t) {
												var i = e.getPointFromEvent(t);
												void 0 !== i &&
													((e.isDirectTouch = !0), i.onMouseOver(t));
											};
										h(t.points, function (t) {
											t.graphic && (t.graphic.element.point = t),
												t.dataLabel &&
													(t.dataLabel.div
														? (t.dataLabel.div.point = t)
														: (t.dataLabel.element.point = t));
										}),
											t._hasTracking ||
												(h(t.trackerGroups, function (s) {
													t[s] &&
														(t[s]
															.addClass('highcharts-tracker')
															.on('mouseover', i)
															.on('mouseout', function (t) {
																e.onTrackerMouseOut(t);
															}),
														d && t[s].on('touchstart', i),
														t.options.cursor &&
															t[s].css(o).css({cursor: t.options.cursor}));
												}),
												(t._hasTracking = !0)),
											c(this, 'afterDrawTracker');
									},
									drawTrackerGraph: function () {
										var t,
											e = this,
											i = e.options,
											s = i.trackByArea,
											n = [].concat(s ? e.areaPath : e.graphPath),
											o = n.length,
											r = e.chart,
											a = r.pointer,
											l = r.renderer,
											p = r.options.tooltip.snap,
											u = e.tracker,
											f = function () {
												r.hoverSeries !== e && e.onMouseOver();
											},
											g = 'rgba(192,192,192,' + (b ? 1e-4 : 0.002) + ')';
										if (o && !s)
											for (t = o + 1; t--; )
												'M' === n[t] &&
													n.splice(t + 1, 0, n[t + 1] - p, n[t + 2], 'L'),
													((t && 'M' === n[t]) || t === o) &&
														n.splice(t, 0, 'L', n[t - 2] + p, n[t - 1]);
										u
											? u.attr({d: n})
											: e.graph &&
											  ((e.tracker = l
													.path(n)
													.attr({
														'stroke-linejoin': 'round',
														stroke: g,
														fill: s ? g : 'none',
														'stroke-width':
															e.graph.strokeWidth() + (s ? 0 : 2 * p),
														visibility: e.visible ? 'visible' : 'hidden',
														zIndex: 2,
													})
													.addClass(
														s
															? 'highcharts-tracker-area'
															: 'highcharts-tracker-line'
													)
													.add(e.group)),
											  h([e.tracker, e.markerGroup], function (t) {
													t
														.addClass('highcharts-tracker')
														.on('mouseover', f)
														.on('mouseout', function (t) {
															a.onTrackerMouseOut(t);
														}),
														i.cursor && t.css({cursor: i.cursor}),
														d && t.on('touchstart', f);
											  })),
											c(this, 'afterDrawTracker');
									},
								}),
								y.column &&
									(y.column.prototype.drawTracker = e.drawTrackerPoint),
								y.pie && (y.pie.prototype.drawTracker = e.drawTrackerPoint),
								y.scatter &&
									(y.scatter.prototype.drawTracker = e.drawTrackerPoint),
								(r.legend.itemStyle.cursor = 'pointer'),
								l(f.prototype, {
									setItemEvents: function (t, e, i) {
										var s = this,
											n = s.chart.renderer.boxWrapper,
											o =
												'highcharts-legend-' +
												(t instanceof x ? 'point' : 'series') +
												'-active';
										(i ? e : t.legendGroup)
											.on('mouseover', function () {
												t.setState('hover'),
													n.addClass(o),
													e.css(s.options.itemHoverStyle);
											})
											.on('mouseout', function () {
												e.css(g(t.visible ? s.itemStyle : s.itemHiddenStyle)),
													n.removeClass(o),
													t.setState();
											})
											.on('click', function (e) {
												var i = function () {
													t.setVisible && t.setVisible();
												};
												n.removeClass(o),
													(e = {browserEvent: e}),
													t.firePointEvent
														? t.firePointEvent('legendItemClick', e, i)
														: c(t, 'legendItemClick', e, i);
											});
									},
									createCheckboxForItem: function (t) {
										(t.checkbox = n(
											'input',
											{
												type: 'checkbox',
												className: 'highcharts-legend-checkbox',
												checked: t.selected,
												defaultChecked: t.selected,
											},
											this.options.itemCheckboxStyle,
											this.chart.container
										)),
											i(t.checkbox, 'click', function (e) {
												c(
													t.series || t,
													'checkboxClick',
													{checked: e.target.checked, item: t},
													function () {
														t.select();
													}
												);
											});
									},
								}),
								l(s.prototype, {
									showResetZoom: function () {
										function t() {
											e.zoomOut();
										}
										var e = this,
											i = r.lang,
											s = e.options.chart.resetZoomButton,
											n = s.theme,
											o = n.states,
											a = 'chart' === s.relativeTo ? null : 'plotBox';
										c(this, 'beforeShowResetZoom', null, function () {
											e.resetZoomButton = e.renderer
												.button(i.resetZoom, null, null, t, n, o && o.hover)
												.attr({
													align: s.position.align,
													title: i.resetZoomTitle,
												})
												.addClass('highcharts-reset-zoom')
												.add()
												.align(s.position, !1, a);
										});
									},
									zoomOut: function () {
										c(this, 'selection', {resetSelection: !0}, this.zoom);
									},
									zoom: function (t) {
										var e,
											i,
											s = this.pointer,
											n = !1;
										!t || t.resetSelection
											? (h(this.axes, function (t) {
													e = t.zoom();
											  }),
											  (s.initiated = !1))
											: h(t.xAxis.concat(t.yAxis), function (t) {
													var i = t.axis;
													s[i.isXAxis ? 'zoomX' : 'zoomY'] &&
														((e = i.zoom(t.min, t.max)),
														i.displayBtn && (n = !0));
											  }),
											(i = this.resetZoomButton),
											n && !i
												? this.showResetZoom()
												: !n && u(i) && (this.resetZoomButton = i.destroy()),
											e &&
												this.redraw(
													m(
														this.options.chart.animation,
														t && t.animation,
														100 > this.pointCount
													)
												);
									},
									pan: function (t, e) {
										var i,
											s = this,
											n = s.hoverPoints;
										n &&
											h(n, function (t) {
												t.setState();
											}),
											h('xy' === e ? [1, 0] : [1], function (e) {
												var n,
													o = (e = s[e ? 'xAxis' : 'yAxis'][0]).horiz,
													r = t[o ? 'chartX' : 'chartY'],
													a = s[(o = o ? 'mouseDownX' : 'mouseDownY')],
													h = (e.pointRange || 0) / 2,
													l =
														(e.reversed && !s.inverted) ||
														(!e.reversed && s.inverted)
															? -1
															: 1,
													c = e.getExtremes(),
													d = e.toValue(a - r, !0) + h * l;
												(a = (n =
													(l = e.toValue(a + e.len - r, !0) - h * l) < d)
													? l
													: d),
													(d = n ? d : l),
													0 <
														(n =
															(l = Math.min(
																c.dataMin,
																h
																	? c.min
																	: e.toValue(
																			e.toPixels(c.min) - e.minPixelPadding
																	  )
															)) - a) && ((d += n), (a = l)),
													0 <
														(n =
															d -
															(h = Math.max(
																c.dataMax,
																h
																	? c.max
																	: e.toValue(
																			e.toPixels(c.max) + e.minPixelPadding
																	  )
															))) && ((d = h), (a -= n)),
													e.series.length &&
														a !== c.min &&
														d !== c.max &&
														(e.setExtremes(a, d, !1, !1, {trigger: 'pan'}),
														(i = !0)),
													(s[o] = r);
											}),
											i && s.redraw(!1),
											o(s.container, {cursor: 'move'});
									},
								}),
								l(x.prototype, {
									select: function (t, e) {
										var i = this,
											s = i.series,
											n = s.chart;
										(t = m(t, !i.selected)),
											i.firePointEvent(
												t ? 'select' : 'unselect',
												{accumulate: e},
												function () {
													(i.selected = i.options.selected = t),
														(s.options.data[p(i, s.data)] = i.options),
														i.setState(t && 'select'),
														e ||
															h(n.getSelectedPoints(), function (t) {
																t.selected &&
																	t !== i &&
																	((t.selected = t.options.selected = !1),
																	(s.options.data[p(t, s.data)] = t.options),
																	t.setState(''),
																	t.firePointEvent('unselect'));
															});
												}
											);
									},
									onMouseOver: function (t) {
										var e = this.series.chart,
											i = e.pointer;
										(t = t
											? i.normalize(t)
											: i.getChartCoordinatesFromPoint(this, e.inverted)),
											i.runPointActions(t, this);
									},
									onMouseOut: function () {
										var t = this.series.chart;
										this.firePointEvent('mouseOut'),
											h(t.hoverPoints || [], function (t) {
												t.setState();
											}),
											(t.hoverPoints = t.hoverPoint = null);
									},
									importEvents: function () {
										if (!this.hasImportedEvents) {
											var e = this,
												s = g(e.series.options.point, e.options).events;
											(e.events = s),
												t.objectEach(s, function (t, s) {
													i(e, s, t);
												}),
												(this.hasImportedEvents = !0);
										}
									},
									setState: function (t, e) {
										var i,
											s = Math.floor(this.plotX),
											n = this.plotY,
											o = this.series,
											r = o.options.states[t || 'normal'] || {},
											h = a[o.type].marker && o.options.marker,
											d = h && !1 === h.enabled,
											p = (h && h.states && h.states[t || 'normal']) || {},
											u = !1 === p.enabled,
											f = o.stateMarkerGraphic,
											g = this.marker || {},
											x = o.chart,
											v = o.halo,
											y = h && o.markerAttribs;
										((t = t || '') === this.state && !e) ||
											(this.selected && 'select' !== t) ||
											!1 === r.enabled ||
											(t && (u || (d && !1 === p.enabled))) ||
											(t &&
												g.states &&
												g.states[t] &&
												!1 === g.states[t].enabled) ||
											(y && (i = o.markerAttribs(this, t)),
											this.graphic
												? (this.state &&
														this.graphic.removeClass(
															'highcharts-point-' + this.state
														),
												  t && this.graphic.addClass('highcharts-point-' + t),
												  this.graphic.animate(
														o.pointAttribs(this, t),
														m(x.options.chart.animation, r.animation)
												  ),
												  i &&
														this.graphic.animate(
															i,
															m(
																x.options.chart.animation,
																p.animation,
																h.animation
															)
														),
												  f && f.hide())
												: (t &&
														p &&
														((h = g.symbol || o.symbol),
														f && f.currentSymbol !== h && (f = f.destroy()),
														f
															? f[e ? 'animate' : 'attr']({x: i.x, y: i.y})
															: h &&
															  ((o.stateMarkerGraphic = f =
																	x.renderer
																		.symbol(h, i.x, i.y, i.width, i.height)
																		.add(o.markerGroup)),
															  (f.currentSymbol = h)),
														f && f.attr(o.pointAttribs(this, t))),
												  f &&
														(f[
															t && x.isInsidePlot(s, n, x.inverted)
																? 'show'
																: 'hide'
														](),
														(f.element.point = this))),
											(s = r.halo) && s.size
												? (v ||
														(o.halo = v =
															x.renderer
																.path()
																.add((this.graphic || f).parentGroup)),
												  v
														.show()
														[e ? 'animate' : 'attr']({
															d: this.haloPath(s.size),
														}),
												  v.attr({
														class:
															'highcharts-halo highcharts-color-' +
															m(this.colorIndex, o.colorIndex) +
															(this.className ? ' ' + this.className : ''),
														zIndex: -1,
												  }),
												  (v.point = this),
												  v.attr(
														l(
															{
																fill: this.color || o.color,
																'fill-opacity': s.opacity,
															},
															s.attributes
														)
												  ))
												: v &&
												  v.point &&
												  v.point.haloPath &&
												  v.animate({d: v.point.haloPath(0)}, null, v.hide),
											(this.state = t),
											c(this, 'afterSetState'));
									},
									haloPath: function (t) {
										return this.series.chart.renderer.symbols.circle(
											Math.floor(this.plotX) - t,
											this.plotY - t,
											2 * t,
											2 * t
										);
									},
								}),
								l(v.prototype, {
									onMouseOver: function () {
										var t = this.chart,
											e = t.hoverSeries;
										e && e !== this && e.onMouseOut(),
											this.options.events.mouseOver && c(this, 'mouseOver'),
											this.setState('hover'),
											(t.hoverSeries = this);
									},
									onMouseOut: function () {
										var t = this.options,
											e = this.chart,
											i = e.tooltip,
											s = e.hoverPoint;
										(e.hoverSeries = null),
											s && s.onMouseOut(),
											this && t.events.mouseOut && c(this, 'mouseOut'),
											!i ||
												this.stickyTracking ||
												(i.shared && !this.noSharedTooltip) ||
												i.hide(),
											this.setState();
									},
									setState: function (t) {
										var e = this,
											i = e.options,
											s = e.graph,
											n = i.states,
											o = i.lineWidth;
										if (
											((i = 0),
											(t = t || ''),
											e.state !== t &&
												(h(
													[e.group, e.markerGroup, e.dataLabelsGroup],
													function (i) {
														i &&
															(e.state &&
																i.removeClass('highcharts-series-' + e.state),
															t && i.addClass('highcharts-series-' + t));
													}
												),
												(e.state = t),
												!n[t] || !1 !== n[t].enabled) &&
												(t &&
													(o = n[t].lineWidth || o + (n[t].lineWidthPlus || 0)),
												s && !s.dashstyle))
										)
											for (
												o = {'stroke-width': o},
													s.animate(
														o,
														m(
															n[t || 'normal'] && n[t || 'normal'].animation,
															e.chart.options.chart.animation
														)
													);
												e['zone-graph-' + i];

											)
												e['zone-graph-' + i].attr(o), (i += 1);
									},
									setVisible: function (t, e) {
										var i,
											s = this,
											n = s.chart,
											o = s.legendItem,
											r = n.options.chart.ignoreHiddenSeries,
											a = s.visible;
										(i = (s.visible =
											t =
											s.options.visible =
											s.userOptions.visible =
												void 0 === t ? !a : t)
											? 'show'
											: 'hide'),
											h(
												[
													'group',
													'dataLabelsGroup',
													'markerGroup',
													'tracker',
													'tt',
												],
												function (t) {
													s[t] && s[t][i]();
												}
											),
											(n.hoverSeries !== s &&
												(n.hoverPoint && n.hoverPoint.series) !== s) ||
												s.onMouseOut(),
											o && n.legend.colorizeItem(s, t),
											(s.isDirty = !0),
											s.options.stacking &&
												h(n.series, function (t) {
													t.options.stacking && t.visible && (t.isDirty = !0);
												}),
											h(s.linkedSeries, function (e) {
												e.setVisible(t, !1);
											}),
											r && (n.isDirtyBox = !0),
											c(s, i),
											!1 !== e && n.redraw();
									},
									show: function () {
										this.setVisible(!0);
									},
									hide: function () {
										this.setVisible(!1);
									},
									select: function (t) {
										(this.selected = t = void 0 === t ? !this.selected : t),
											this.checkbox && (this.checkbox.checked = t),
											c(this, t ? 'select' : 'unselect');
									},
									drawTracker: e.drawTrackerGraph,
								});
						})(c),
						(function (t) {
							var e = t.Chart,
								i = t.each,
								s = t.inArray,
								n = t.isArray,
								o = t.isObject,
								r = t.pick,
								a = t.splat;
							(e.prototype.setResponsive = function (e) {
								var s = this.options.responsive,
									n = [],
									o = this.currentResponsive;
								s &&
									s.rules &&
									i(
										s.rules,
										function (i) {
											void 0 === i._id && (i._id = t.uniqueKey()),
												this.matchResponsiveRule(i, n, e);
										},
										this
									);
								var r = t.merge.apply(
									0,
									t.map(n, function (e) {
										return t.find(s.rules, function (t) {
											return t._id === e;
										}).chartOptions;
									})
								);
								(n = n.toString() || void 0) !== (o && o.ruleIds) &&
									(o && this.update(o.undoOptions, e),
									n
										? ((this.currentResponsive = {
												ruleIds: n,
												mergedOptions: r,
												undoOptions: this.currentOptions(r),
										  }),
										  this.update(r, e))
										: (this.currentResponsive = void 0));
							}),
								(e.prototype.matchResponsiveRule = function (t, e) {
									var i = t.condition;
									(
										i.callback ||
										function () {
											return (
												this.chartWidth <= r(i.maxWidth, Number.MAX_VALUE) &&
												this.chartHeight <= r(i.maxHeight, Number.MAX_VALUE) &&
												this.chartWidth >= r(i.minWidth, 0) &&
												this.chartHeight >= r(i.minHeight, 0)
											);
										}
									).call(this) && e.push(t._id);
								}),
								(e.prototype.currentOptions = function (e) {
									var i = {};
									return (
										(function e(i, r, h, l) {
											var c;
											t.objectEach(i, function (t, i) {
												if (!l && -1 < s(i, ['series', 'xAxis', 'yAxis']))
													for (t = a(t), h[i] = [], c = 0; c < t.length; c++)
														r[i][c] &&
															((h[i][c] = {}),
															e(t[c], r[i][c], h[i][c], l + 1));
												else
													o(t)
														? ((h[i] = n(t) ? [] : {}),
														  e(t, r[i] || {}, h[i], l + 1))
														: (h[i] = r[i] || null);
											});
										})(e, this.options, i, 0),
										i
									);
								});
						})(c),
						c
					);
				}),
				t.exports
					? (t.exports = n.document ? o(n) : o)
					: void 0 ===
							(s = function () {
								return o(n);
							}.call(e, i, e, t)) || (t.exports = s);
		},
		10920: function (t, e, i) {
			var s, n;
			'undefined' != typeof self && self,
				(t.exports =
					((s = i(67294)),
					(n = i(78840)),
					(function (t) {
						var e = {};
						function i(s) {
							if (e[s]) return e[s].exports;
							var n = (e[s] = {i: s, l: !1, exports: {}});
							return (
								t[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
							);
						}
						return (
							(i.m = t),
							(i.c = e),
							(i.d = function (t, e, s) {
								i.o(t, e) ||
									Object.defineProperty(t, e, {
										configurable: !1,
										enumerable: !0,
										get: s,
									});
							}),
							(i.n = function (t) {
								var e =
									t && t.__esModule
										? function () {
												return t.default;
										  }
										: function () {
												return t;
										  };
								return i.d(e, 'a', e), e;
							}),
							(i.o = function (t, e) {
								return Object.prototype.hasOwnProperty.call(t, e);
							}),
							(i.p = ''),
							i((i.s = 4))
						);
					})([
						function (t, e) {
							t.exports = s;
						},
						function (t, e, i) {
							'use strict';
							(function (s) {
								Object.defineProperty(e, '__esModule', {value: !0});
								var n,
									o =
										Object.assign ||
										function (t) {
											for (var e = 1; e < arguments.length; e++) {
												var i = arguments[e];
												for (var s in i)
													Object.prototype.hasOwnProperty.call(i, s) &&
														(t[s] = i[s]);
											}
											return t;
										},
									r = (function () {
										function t(t, e) {
											for (var i = 0; i < e.length; i++) {
												var s = e[i];
												(s.enumerable = s.enumerable || !1),
													(s.configurable = !0),
													'value' in s && (s.writable = !0),
													Object.defineProperty(t, s.key, s);
											}
										}
										return function (e, i, s) {
											return i && t(e.prototype, i), s && t(e, s), e;
										};
									})(),
									a = i(0),
									h = (n = a) && n.__esModule ? n : {default: n},
									l = void 0 === s ? window : s;
								(e.default = function (e, i) {
									var s = (function (t) {
										function s() {
											!(function (t, e) {
												if (!(t instanceof e))
													throw new TypeError(
														'Cannot call a class as a function'
													);
											})(this, s);
											var t = (function (t, e) {
												if (!t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													);
												return !e ||
													('object' != typeof e && 'function' != typeof e)
													? t
													: e;
											})(
												this,
												(s.__proto__ || Object.getPrototypeOf(s)).call(this)
											);
											return (
												(t.chartType = e),
												(t.Highcharts = i),
												(t.displayName = 'Highcharts' + e),
												t
											);
										}
										return (
											(function (t, e) {
												if ('function' != typeof e && null !== e)
													throw new TypeError(
														'Super expression must either be null or a function, not ' +
															typeof e
													);
												(t.prototype = Object.create(e && e.prototype, {
													constructor: {
														value: t,
														enumerable: !1,
														writable: !0,
														configurable: !0,
													},
												})),
													e &&
														(Object.setPrototypeOf
															? Object.setPrototypeOf(t, e)
															: (t.__proto__ = e));
											})(s, a.Component),
											r(s, [
												{
													key: 'setChartRef',
													value: function (t) {
														this.chartRef = t;
													},
												},
												{
													key: 'renderChart',
													value: function (t) {
														var e = this;
														if (!t)
															throw new Error(
																'Config must be specified for the ' +
																	this.displayName +
																	' component'
															);
														var i = t.chart;
														this.chart && this.chart.destroy(),
															(this.chart = new this.Highcharts[this.chartType](
																o({}, t, {
																	chart: o({}, i, {renderTo: this.chartRef}),
																}),
																this.props.callback
															)),
															this.props.neverReflow ||
																(l &&
																	l.requestAnimationFrame &&
																	requestAnimationFrame(function () {
																		e.chart &&
																			e.chart.options &&
																			e.chart.reflow();
																	}));
													},
												},
												{
													key: 'shouldComponentUpdate',
													value: function (t) {
														return (
															!!(
																t.neverReflow ||
																(t.isPureConfig &&
																	this.props.config === t.config)
															) || (this.renderChart(t.config), !1)
														);
													},
												},
												{
													key: 'getChart',
													value: function () {
														if (!this.chart)
															throw new Error(
																'getChart() should not be called before the component is mounted'
															);
														return this.chart;
													},
												},
												{
													key: 'componentDidMount',
													value: function () {
														this.renderChart(this.props.config);
													},
												},
												{
													key: 'componentWillUnmount',
													value: function () {
														this.chart.destroy();
													},
												},
												{
													key: 'render',
													value: function () {
														return h.default.createElement(
															'div',
															o(
																{ref: this.setChartRef.bind(this)},
																this.props.domProps
															)
														);
													},
												},
											]),
											s
										);
									})();
									s.defaultProps = {callback: function () {}, domProps: {}};
									var n = s;
									return (
										(n.Highcharts = i),
										(n.withHighcharts = function (i) {
											return t.exports(e, i);
										}),
										n
									);
								}),
									(t.exports = e.default);
							}.call(e, i(2)));
						},
						function (t, e) {
							var i;
							i = (function () {
								return this;
							})();
							try {
								i = i || Function('return this')() || (0, eval)('this');
							} catch (t) {
								'object' == typeof window && (i = window);
							}
							t.exports = i;
						},
						,
						function (t, e, i) {
							t.exports = i(5);
						},
						function (t, e, i) {
							'use strict';
							Object.defineProperty(e, '__esModule', {value: !0});
							var s = o(i(1)),
								n = o(i(6));
							function o(t) {
								return t && t.__esModule ? t : {default: t};
							}
							(e.default = (0, s.default)('Chart', n.default)),
								(t.exports = e.default);
						},
						function (t, e) {
							t.exports = n;
						},
					])));
		},
		99111: (t, e, i) => {
			'use strict';
			i.d(e, {Z: () => l});
			var s = i(77226),
				n = i(66092);
			const o = function () {
				return n.Z.Date.now();
			};
			var r = i(3782),
				a = Math.max,
				h = Math.min;
			const l = function (t, e, i) {
				var n,
					l,
					c,
					d,
					p,
					u,
					f = 0,
					g = !1,
					m = !1,
					x = !0;
				if ('function' != typeof t) throw new TypeError('Expected a function');
				function v(e) {
					var i = n,
						s = l;
					return (n = l = void 0), (f = e), (d = t.apply(s, i));
				}
				function y(t) {
					return (f = t), (p = setTimeout(k, e)), g ? v(t) : d;
				}
				function b(t) {
					var i = t - u;
					return void 0 === u || i >= e || i < 0 || (m && t - f >= c);
				}
				function k() {
					var t = o();
					if (b(t)) return w(t);
					p = setTimeout(
						k,
						(function (t) {
							var i = e - (t - u);
							return m ? h(i, c - (t - f)) : i;
						})(t)
					);
				}
				function w(t) {
					return (p = void 0), x && n ? v(t) : ((n = l = void 0), d);
				}
				function M() {
					var t = o(),
						i = b(t);
					if (((n = arguments), (l = this), (u = t), i)) {
						if (void 0 === p) return y(u);
						if (m) return clearTimeout(p), (p = setTimeout(k, e)), v(u);
					}
					return void 0 === p && (p = setTimeout(k, e)), d;
				}
				return (
					(e = (0, r.Z)(e) || 0),
					(0, s.Z)(i) &&
						((g = !!i.leading),
						(c = (m = 'maxWait' in i) ? a((0, r.Z)(i.maxWait) || 0, e) : c),
						(x = 'trailing' in i ? !!i.trailing : x)),
					(M.cancel = function () {
						void 0 !== p && clearTimeout(p), (f = 0), (n = u = l = p = void 0);
					}),
					(M.flush = function () {
						return void 0 === p ? d : w(o());
					}),
					M
				);
			};
		},
	},
]);
