(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[699],
	{
		65987: (t) => {
			'use strict';
			var e = {
				single_source_shortest_paths: function (t, n, o) {
					var i = {},
						r = {};
					r[n] = 0;
					var s,
						a,
						l,
						h,
						c,
						u,
						d,
						f = e.PriorityQueue.make();
					for (f.push(n, 0); !f.empty(); )
						for (l in ((a = (s = f.pop()).value),
						(h = s.cost),
						(c = t[a] || {})))
							c.hasOwnProperty(l) &&
								((u = h + c[l]),
								(d = r[l]),
								(void 0 === r[l] || d > u) &&
									((r[l] = u), f.push(l, u), (i[l] = a)));
					if (void 0 !== o && void 0 === r[o]) {
						var p = ['Could not find a path from ', n, ' to ', o, '.'].join('');
						throw new Error(p);
					}
					return i;
				},
				extract_shortest_path_from_predecessor_list: function (t, e) {
					for (var n = [], o = e; o; ) n.push(o), t[o], (o = t[o]);
					return n.reverse(), n;
				},
				find_path: function (t, n, o) {
					var i = e.single_source_shortest_paths(t, n, o);
					return e.extract_shortest_path_from_predecessor_list(i, o);
				},
				PriorityQueue: {
					make: function (t) {
						var n,
							o = e.PriorityQueue,
							i = {};
						for (n in ((t = t || {}), o)) o.hasOwnProperty(n) && (i[n] = o[n]);
						return (i.queue = []), (i.sorter = t.sorter || o.default_sorter), i;
					},
					default_sorter: function (t, e) {
						return t.cost - e.cost;
					},
					push: function (t, e) {
						var n = {value: t, cost: e};
						this.queue.push(n), this.queue.sort(this.sorter);
					},
					pop: function () {
						return this.queue.shift();
					},
					empty: function () {
						return 0 === this.queue.length;
					},
				},
			};
			t.exports = e;
		},
		62378: (t) => {
			'use strict';
			t.exports = function (t) {
				for (var e = [], n = t.length, o = 0; o < n; o++) {
					var i = t.charCodeAt(o);
					if (i >= 55296 && i <= 56319 && n > o + 1) {
						var r = t.charCodeAt(o + 1);
						r >= 56320 &&
							r <= 57343 &&
							((i = 1024 * (i - 55296) + r - 56320 + 65536), (o += 1));
					}
					i < 128
						? e.push(i)
						: i < 2048
						? (e.push((i >> 6) | 192), e.push((63 & i) | 128))
						: i < 55296 || (i >= 57344 && i < 65536)
						? (e.push((i >> 12) | 224),
						  e.push(((i >> 6) & 63) | 128),
						  e.push((63 & i) | 128))
						: i >= 65536 && i <= 1114111
						? (e.push((i >> 18) | 240),
						  e.push(((i >> 12) & 63) | 128),
						  e.push(((i >> 6) & 63) | 128),
						  e.push((63 & i) | 128))
						: e.push(239, 191, 189);
				}
				return new Uint8Array(e).buffer;
			};
		},
		1033: (t, e, n) => {
			var o, i;
			(i = function (t) {
				!(function (t) {
					var e,
						n = t.addEvent,
						o = t.Axis,
						i = t.Chart,
						r = t.color,
						s = t.each,
						a = t.extend,
						l = t.isNumber,
						h = t.Legend,
						c = t.LegendSymbolMixin,
						u = t.noop,
						d = t.merge,
						f = t.pick;
					t.ColorAxis ||
						((e = t.ColorAxis =
							function () {
								this.init.apply(this, arguments);
							}),
						a(e.prototype, o.prototype),
						a(e.prototype, {
							defaultColorAxisOptions: {
								lineWidth: 0,
								minPadding: 0,
								maxPadding: 0,
								gridLineWidth: 1,
								tickPixelInterval: 72,
								startOnTick: !0,
								endOnTick: !0,
								offset: 0,
								marker: {
									animation: {duration: 50},
									width: 0.01,
									color: '#999999',
								},
								labels: {overflow: 'justify', rotation: 0},
								minColor: '#e6ebf5',
								maxColor: '#003399',
								tickLength: 5,
								showInLegend: !0,
							},
							keepProps: [
								'legendGroup',
								'legendItemHeight',
								'legendItemWidth',
								'legendItem',
								'legendSymbol',
							].concat(o.prototype.keepProps),
							init: function (t, e) {
								var n,
									i = 'vertical' !== t.options.legend.layout;
								(this.coll = 'colorAxis'),
									(n = d(
										this.defaultColorAxisOptions,
										{side: i ? 2 : 1, reversed: !i},
										e,
										{
											opposite: !i,
											showEmpty: !1,
											title: null,
											visible: t.options.legend.enabled,
										}
									)),
									o.prototype.init.call(this, t, n),
									e.dataClasses && this.initDataClasses(e),
									this.initStops(),
									(this.horiz = i),
									(this.zoomEnabled = !1),
									(this.defaultLegendLength = 200);
							},
							initDataClasses: function (t) {
								var e,
									n = this.chart,
									o = 0,
									i = n.options.chart.colorCount,
									a = this.options,
									l = t.dataClasses.length;
								(this.dataClasses = e = []),
									(this.legendItems = []),
									s(t.dataClasses, function (t, s) {
										(t = d(t)),
											e.push(t),
											t.color ||
												('category' === a.dataClassColor
													? ((s = n.options.colors),
													  (i = s.length),
													  (t.color = s[o]),
													  (t.colorIndex = o),
													  ++o === i && (o = 0))
													: (t.color = r(a.minColor).tweenTo(
															r(a.maxColor),
															2 > l ? 0.5 : s / (l - 1)
													  )));
									});
							},
							setTickPositions: function () {
								if (!this.dataClasses)
									return o.prototype.setTickPositions.call(this);
							},
							initStops: function () {
								(this.stops = this.options.stops || [
									[0, this.options.minColor],
									[1, this.options.maxColor],
								]),
									s(this.stops, function (t) {
										t.color = r(t[1]);
									});
							},
							setOptions: function (t) {
								o.prototype.setOptions.call(this, t),
									(this.options.crosshair = this.options.marker);
							},
							setAxisSize: function () {
								var t,
									e,
									n = this.legendSymbol,
									o = this.chart,
									i = o.options.legend || {};
								n
									? ((this.left = i = n.attr('x')),
									  (this.top = t = n.attr('y')),
									  (this.width = e = n.attr('width')),
									  (this.height = n = n.attr('height')),
									  (this.right = o.chartWidth - i - e),
									  (this.bottom = o.chartHeight - t - n),
									  (this.len = this.horiz ? e : n),
									  (this.pos = this.horiz ? i : t))
									: (this.len =
											(this.horiz ? i.symbolWidth : i.symbolHeight) ||
											this.defaultLegendLength);
							},
							normalizedValue: function (t) {
								return (
									this.isLog && (t = this.val2lin(t)),
									1 - (this.max - t) / (this.max - this.min || 1)
								);
							},
							toColor: function (t, e) {
								var n,
									o,
									i,
									r,
									s = this.stops,
									a = this.dataClasses;
								if (a) {
									for (r = a.length; r--; )
										if (
											((n = (i = a[r]).from),
											(s = i.to),
											(void 0 === n || t >= n) && (void 0 === s || t <= s))
										) {
											(o = i.color),
												e && ((e.dataClass = r), (e.colorIndex = i.colorIndex));
											break;
										}
								} else {
									for (
										t = this.normalizedValue(t), r = s.length;
										r-- && !(t > s[r][0]);

									);
									(n = s[r] || s[r + 1]),
										(t = 1 - ((s = s[r + 1] || n)[0] - t) / (s[0] - n[0] || 1)),
										(o = n.color.tweenTo(s.color, t));
								}
								return o;
							},
							getOffset: function () {
								var t = this.legendGroup,
									e = this.chart.axisOffset[this.side];
								t &&
									((this.axisParent = t),
									o.prototype.getOffset.call(this),
									this.added ||
										((this.added = !0),
										(this.labelLeft = 0),
										(this.labelRight = this.width)),
									(this.chart.axisOffset[this.side] = e));
							},
							setLegendColor: function () {
								var t,
									e = this.reversed;
								(t = e ? 1 : 0),
									(e = e ? 0 : 1),
									(t = this.horiz ? [t, 0, e, 0] : [0, e, 0, t]),
									(this.legendColor = {
										linearGradient: {x1: t[0], y1: t[1], x2: t[2], y2: t[3]},
										stops: this.stops,
									});
							},
							drawLegendSymbol: function (t, e) {
								var n = t.padding,
									o = t.options,
									i = this.horiz,
									r = f(o.symbolWidth, i ? this.defaultLegendLength : 12),
									s = f(o.symbolHeight, i ? 12 : this.defaultLegendLength),
									a = f(o.labelPadding, i ? 16 : 30);
								(o = f(o.itemDistance, 10)),
									this.setLegendColor(),
									(e.legendSymbol = this.chart.renderer
										.rect(0, t.baseline - 11, r, s)
										.attr({zIndex: 1})
										.add(e.legendGroup)),
									(this.legendItemWidth = r + n + (i ? o : a)),
									(this.legendItemHeight = s + n + (i ? a : 0));
							},
							setState: function (t) {
								s(this.series, function (e) {
									e.setState(t);
								});
							},
							visible: !0,
							setVisible: u,
							getSeriesExtremes: function () {
								var t = this.series,
									e = t.length;
								for (this.dataMin = 1 / 0, this.dataMax = -1 / 0; e--; )
									t[e].getExtremes(),
										void 0 !== t[e].valueMin &&
											((this.dataMin = Math.min(this.dataMin, t[e].valueMin)),
											(this.dataMax = Math.max(this.dataMax, t[e].valueMax)));
							},
							drawCrosshair: function (t, e) {
								var n,
									i = e && e.plotX,
									r = e && e.plotY,
									s = this.pos,
									a = this.len;
								e &&
									((n = this.toPixels(e[e.series.colorKey])) < s
										? (n = s - 2)
										: n > s + a && (n = s + a + 2),
									(e.plotX = n),
									(e.plotY = this.len - n),
									o.prototype.drawCrosshair.call(this, t, e),
									(e.plotX = i),
									(e.plotY = r),
									this.cross &&
										!this.cross.addedToColorAxis &&
										this.legendGroup &&
										(this.cross
											.addClass('highcharts-coloraxis-marker')
											.add(this.legendGroup),
										(this.cross.addedToColorAxis = !0),
										this.cross.attr({fill: this.crosshair.color})));
							},
							getPlotLinePath: function (t, e, n, i, r) {
								return l(r)
									? this.horiz
										? [
												'M',
												r - 4,
												this.top - 6,
												'L',
												r + 4,
												this.top - 6,
												r,
												this.top,
												'Z',
										  ]
										: [
												'M',
												this.left,
												r,
												'L',
												this.left - 6,
												r + 6,
												this.left - 6,
												r - 6,
												'Z',
										  ]
									: o.prototype.getPlotLinePath.call(this, t, e, n, i);
							},
							update: function (t, e) {
								var n = this.chart,
									i = n.legend;
								s(this.series, function (t) {
									t.isDirtyData = !0;
								}),
									t.dataClasses &&
										i.allItems &&
										(s(i.allItems, function (t) {
											t.isDataClass && t.legendGroup && t.legendGroup.destroy();
										}),
										(n.isDirtyLegend = !0)),
									(n.options[this.coll] = d(this.userOptions, t)),
									o.prototype.update.call(this, t, e),
									this.legendItem &&
										(this.setLegendColor(), i.colorizeItem(this, !0));
							},
							remove: function () {
								this.legendItem && this.chart.legend.destroyItem(this),
									o.prototype.remove.call(this);
							},
							getDataClassLegendSymbols: function () {
								var e,
									n = this,
									o = this.chart,
									i = this.legendItems,
									r = o.options.legend,
									l = r.valueDecimals,
									h = r.valueSuffix || '';
								return (
									i.length ||
										s(this.dataClasses, function (r, d) {
											var f = !0,
												p = r.from,
												g = r.to;
											(e = ''),
												void 0 === p ? (e = '< ') : void 0 === g && (e = '> '),
												void 0 !== p && (e += t.numberFormat(p, l) + h),
												void 0 !== p && void 0 !== g && (e += ' - '),
												void 0 !== g && (e += t.numberFormat(g, l) + h),
												i.push(
													a(
														{
															chart: o,
															name: e,
															options: {},
															drawLegendSymbol: c.drawRectangle,
															visible: !0,
															setState: u,
															isDataClass: !0,
															setVisible: function () {
																(f = this.visible = !f),
																	s(n.series, function (t) {
																		s(t.points, function (t) {
																			t.dataClass === d && t.setVisible(f);
																		});
																	}),
																	o.legend.colorizeItem(this, f);
															},
														},
														r
													)
												);
										}),
									i
								);
							},
							name: '',
						}),
						s(['fill', 'stroke'], function (e) {
							t.Fx.prototype[e + 'Setter'] = function () {
								this.elem.attr(
									e,
									r(this.start).tweenTo(r(this.end), this.pos),
									null,
									!0
								);
							};
						}),
						n(i, 'afterGetAxes', function () {
							var t = this.options.colorAxis;
							(this.colorAxis = []), t && new e(this, t);
						}),
						n(h, 'afterGetAllItems', function (e) {
							var n = [],
								o = this.chart.colorAxis[0];
							for (
								o &&
									o.options &&
									o.options.showInLegend &&
									(o.options.dataClasses
										? (n = o.getDataClassLegendSymbols())
										: n.push(o),
									s(o.series, function (n) {
										t.erase(e.allItems, n);
									})),
									o = n.length;
								o--;

							)
								e.allItems.unshift(n[o]);
						}),
						n(h, 'afterColorizeItem', function (t) {
							t.visible &&
								t.item.legendColor &&
								t.item.legendSymbol.attr({fill: t.item.legendColor});
						}),
						n(h, 'afterUpdate', function (t, e, n) {
							this.chart.colorAxis[0] && this.chart.colorAxis[0].update({}, n);
						}));
				})(t),
					(function (t) {
						var e = t.defined,
							n = t.each,
							o = t.noop,
							i = t.seriesTypes;
						(t.colorPointMixin = {
							isValid: function () {
								return (
									null !== this.value &&
									1 / 0 !== this.value &&
									-1 / 0 !== this.value
								);
							},
							setVisible: function (t) {
								var e = this,
									o = t ? 'show' : 'hide';
								(e.visible = !!t),
									n(['graphic', 'dataLabel'], function (t) {
										e[t] && e[t][o]();
									});
							},
							setState: function (e) {
								t.Point.prototype.setState.call(this, e),
									this.graphic &&
										this.graphic.attr({zIndex: 'hover' === e ? 1 : 0});
							},
						}),
							(t.colorSeriesMixin = {
								pointArrayMap: ['value'],
								axisTypes: ['xAxis', 'yAxis', 'colorAxis'],
								optionalAxis: 'colorAxis',
								trackerGroups: ['group', 'markerGroup', 'dataLabelsGroup'],
								getSymbol: o,
								parallelArrays: ['x', 'y', 'value'],
								colorKey: 'value',
								pointAttribs: i.column.prototype.pointAttribs,
								translateColors: function () {
									var t = this,
										e = this.options.nullColor,
										o = this.colorAxis,
										i = this.colorKey;
									n(this.data, function (n) {
										var r = n[i];
										(r =
											n.options.color ||
											(n.isNull
												? e
												: o && void 0 !== r
												? o.toColor(r, n)
												: n.color || t.color)) && (n.color = r);
									});
								},
								colorAttribs: function (t) {
									var n = {};
									return (
										e(t.color) && (n[this.colorProp || 'fill'] = t.color), n
									);
								},
							});
					})(t),
					(function (t) {
						var e = t.colorPointMixin,
							n = t.each,
							o = t.merge,
							i = t.noop,
							r = t.pick,
							s = t.Series,
							a = t.seriesType,
							l = t.seriesTypes;
						a(
							'heatmap',
							'scatter',
							{
								animation: !1,
								borderWidth: 0,
								nullColor: '#f7f7f7',
								dataLabels: {
									formatter: function () {
										return this.point.value;
									},
									inside: !0,
									verticalAlign: 'middle',
									crop: !1,
									overflow: !1,
									padding: 0,
								},
								marker: null,
								pointRange: null,
								tooltip: {
									pointFormat: '{point.x}, {point.y}: {point.value}<br/>',
								},
								states: {hover: {halo: !1, brightness: 0.2}},
							},
							o(t.colorSeriesMixin, {
								pointArrayMap: ['y', 'value'],
								hasPointSpecificOptions: !0,
								getExtremesFromAll: !0,
								directTouch: !0,
								init: function () {
									var t;
									l.scatter.prototype.init.apply(this, arguments),
										((t = this.options).pointRange = r(
											t.pointRange,
											t.colsize || 1
										)),
										(this.yAxis.axisPointRange = t.rowsize || 1);
								},
								translate: function () {
									var t = this.options,
										e = this.xAxis,
										o = this.yAxis,
										i = t.pointPadding || 0,
										s = function (t, e, n) {
											return Math.min(Math.max(e, t), n);
										};
									this.generatePoints(),
										n(this.points, function (n) {
											var a = (t.colsize || 1) / 2,
												l = (t.rowsize || 1) / 2,
												h = s(
													Math.round(e.len - e.translate(n.x - a, 0, 1, 0, 1)),
													-e.len,
													2 * e.len
												),
												c =
													((a = s(
														Math.round(
															e.len - e.translate(n.x + a, 0, 1, 0, 1)
														),
														-e.len,
														2 * e.len
													)),
													s(
														Math.round(o.translate(n.y - l, 0, 1, 0, 1)),
														-o.len,
														2 * o.len
													)),
												u =
													((l = s(
														Math.round(o.translate(n.y + l, 0, 1, 0, 1)),
														-o.len,
														2 * o.len
													)),
													r(n.pointPadding, i));
											(n.plotX = n.clientX = (h + a) / 2),
												(n.plotY = (c + l) / 2),
												(n.shapeType = 'rect'),
												(n.shapeArgs = {
													x: Math.min(h, a) + u,
													y: Math.min(c, l) + u,
													width: Math.abs(a - h) - 2 * u,
													height: Math.abs(l - c) - 2 * u,
												});
										}),
										this.translateColors();
								},
								drawPoints: function () {
									l.column.prototype.drawPoints.call(this),
										n(
											this.points,
											function (t) {
												t.graphic.attr(this.colorAttribs(t));
											},
											this
										);
								},
								animate: i,
								getBox: i,
								drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
								alignDataLabel: l.column.prototype.alignDataLabel,
								getExtremes: function () {
									s.prototype.getExtremes.call(this, this.valueData),
										(this.valueMin = this.dataMin),
										(this.valueMax = this.dataMax),
										s.prototype.getExtremes.call(this);
								},
							}),
							t.extend(
								{
									haloPath: function (t) {
										if (!t) return [];
										var e = this.shapeArgs;
										return [
											'M',
											e.x - t,
											e.y - t,
											'L',
											e.x - t,
											e.y + e.height + t,
											e.x + e.width + t,
											e.y + e.height + t,
											e.x + e.width + t,
											e.y - t,
											'Z',
										];
									},
								},
								e
							)
						);
					})(t);
			}),
				t.exports
					? (t.exports = i)
					: void 0 ===
							(o = function () {
								return i;
							}.call(e, n, e, t)) || (t.exports = o);
		},
		57473: (t, e, n) => {
			var o, i;
			(i = function (t) {
				var e = (function (t) {
					var e = t.each,
						n = t.extend,
						o = t.isArray,
						i = t.isObject,
						r = t.isNumber,
						s = t.merge,
						a = t.pick,
						l = t.reduce;
					return {
						getColor: function (e, n) {
							var o,
								i,
								r,
								s,
								l = n.index,
								h = n.mapOptionsToLevel,
								c = n.parentColor,
								u = n.parentColorIndex,
								d = n.series,
								f = n.colors,
								p = n.siblings,
								g = d.points;
							return (
								e &&
									((g = g[e.i]),
									(e = h[e.level] || {}),
									(o = g && e.colorByPoint) &&
										((r =
											g.index %
											(f ? f.length : d.chart.options.chart.colorCount)),
										(i = f && f[r])),
									(f = g && g.options.color),
									(o = e && e.color),
									(h = c) &&
										(h =
											(h = e && e.colorVariation) && 'brightness' === h.key
												? t
														.color(c)
														.brighten((l / p) * h.to)
														.get()
												: c),
									(o = a(f, o, i, h, d.color)),
									(s = a(
										g && g.options.colorIndex,
										e && e.colorIndex,
										r,
										u,
										n.colorIndex
									))),
								{color: o, colorIndex: s}
							);
						},
						getLevelOptions: function (t) {
							var e,
								a,
								h,
								c,
								u = null;
							if (i(t))
								for (
									u = {},
										h = r(t.from) ? t.from : 1,
										c = t.levels,
										a = {},
										e = i(t.defaults) ? t.defaults : {},
										o(c) &&
											(a = l(
												c,
												function (t, o) {
													var a, l;
													return (
														i(o) &&
															r(o.level) &&
															((a =
																'boolean' ==
																typeof (l = s({}, o)).levelIsConstant
																	? l.levelIsConstant
																	: e.levelIsConstant),
															delete l.levelIsConstant,
															delete l.level,
															(o = o.level + (a ? 0 : h - 1)),
															i(t[o]) ? n(t[o], l) : (t[o] = l)),
														t
													);
												},
												{}
											)),
										c = r(t.to) ? t.to : 1,
										t = 0;
									t <= c;
									t++
								)
									u[t] = s({}, e, i(a[t]) ? a[t] : {});
							return u;
						},
						setTreeValues: function t(o, i) {
							var r = i.before,
								s = i.idRoot,
								l = i.mapIdToNode[s],
								h = i.points[o.i],
								c = (h && h.options) || {},
								u = 0,
								d = [];
							return (
								n(o, {
									levelDynamic:
										o.level -
										('boolean' != typeof i.levelIsConstant || i.levelIsConstant
											? 0
											: l.level),
									name: a(h && h.name, ''),
									visible:
										s === o.id || ('boolean' == typeof i.visible && i.visible),
								}),
								'function' == typeof r && (o = r(o, i)),
								e(o.children, function (e, r) {
									var s = n({}, i);
									n(s, {
										index: r,
										siblings: o.children.length,
										visible: o.visible,
									}),
										(e = t(e, s)),
										d.push(e),
										e.visible && (u += e.val);
								}),
								(o.visible = 0 < u || o.visible),
								(r = a(c.value, u)),
								n(o, {
									children: d,
									childrenTotal: u,
									isLeaf: o.visible && !u,
									val: r,
								}),
								o
							);
						},
						updateRootId: function (t) {
							var e;
							return (
								i(t) &&
									((e = i(t.options) ? t.options : {}),
									(e = a(t.rootNode, e.rootId, '')),
									i(t.userOptions) && (t.userOptions.rootId = e),
									(t.rootNode = e)),
								e
							);
						},
					};
				})(t);
				!(function (t, e) {
					var n = t.seriesType,
						o = t.seriesTypes,
						i = t.map,
						r = t.merge,
						s = t.extend,
						a = t.noop,
						l = t.each,
						h = e.getColor,
						c = e.getLevelOptions,
						u = t.grep,
						d = t.isArray,
						f = t.isNumber,
						p = t.isObject,
						g = t.isString,
						m = t.pick,
						v = t.Series,
						y = t.stableSort,
						x = t.Color,
						b = t.reduce,
						w = function (t, e, n) {
							(n = n || this), !1 !== (t = e.call(n, t)) && w(t, e, n);
						},
						C = e.updateRootId;
					n(
						'treemap',
						'scatter',
						{
							showInLegend: !1,
							marker: !1,
							colorByPoint: !1,
							dataLabels: {
								enabled: !0,
								defer: !1,
								verticalAlign: 'middle',
								formatter: function () {
									return this.point.name || this.point.id;
								},
								inside: !0,
							},
							tooltip: {
								headerFormat: '',
								pointFormat: '<b>{point.name}</b>: {point.value}<br/>',
							},
							ignoreHiddenPoint: !0,
							layoutAlgorithm: 'sliceAndDice',
							layoutStartingDirection: 'vertical',
							alternateStartingDirection: !1,
							levelIsConstant: !0,
							drillUpButton: {position: {align: 'right', x: -10, y: 10}},
							borderColor: '#e6e6e6',
							borderWidth: 1,
							opacity: 0.15,
							states: {
								hover: {
									borderColor: '#999999',
									brightness: o.heatmap ? 0 : 0.1,
									halo: !1,
									opacity: 0.75,
									shadow: !1,
								},
							},
						},
						{
							pointArrayMap: ['value'],
							directTouch: !0,
							optionalAxis: 'colorAxis',
							getSymbol: a,
							parallelArrays: ['x', 'y', 'value', 'colorValue'],
							colorKey: 'colorValue',
							trackerGroups: ['group', 'dataLabelsGroup'],
							getListOfParents: function (e, n) {
								e = d(e) ? e : [];
								var o = d(n) ? n : [];
								return (
									(n = b(
										e,
										function (t, e, n) {
											return (
												void 0 === t[(e = m(e.parent, ''))] && (t[e] = []),
												t[e].push(n),
												t
											);
										},
										{'': []}
									)),
									(function (e, n, o) {
										(o = o || this),
											t.objectEach(e, function (t, i) {
												n.call(o, t, i, e);
											});
									})(n, function (e, n, i) {
										'' !== n &&
											-1 === t.inArray(n, o) &&
											(l(e, function (t) {
												i[''].push(t);
											}),
											delete i[n]);
									}),
									n
								);
							},
							getTree: function () {
								var t = i(this.data, function (t) {
									return t.id;
								});
								return (
									(t = this.getListOfParents(this.data, t)),
									(this.nodeMap = []),
									this.buildNode('', -1, 0, t, null)
								);
							},
							init: function (e, n) {
								var o = t.colorSeriesMixin;
								t.colorSeriesMixin &&
									((this.translateColors = o.translateColors),
									(this.colorAttribs = o.colorAttribs),
									(this.axisTypes = o.axisTypes)),
									v.prototype.init.call(this, e, n),
									this.options.allowDrillToNode &&
										t.addEvent(this, 'click', this.onClickDrillToNode);
							},
							buildNode: function (t, e, n, o, i) {
								var r,
									s = this,
									a = [],
									h = s.points[e],
									c = 0;
								return (
									l(o[t] || [], function (e) {
										(r = s.buildNode(s.points[e].id, e, n + 1, o, t)),
											(c = Math.max(r.height + 1, c)),
											a.push(r);
									}),
									(e = {
										id: t,
										i: e,
										children: a,
										height: c,
										level: n,
										parent: i,
										visible: !1,
									}),
									(s.nodeMap[e.id] = e),
									h && (h.node = e),
									e
								);
							},
							setTreeValues: function (t) {
								var e,
									n = this,
									o = n.options,
									i = n.nodeMap[n.rootNode],
									r =
										((o =
											'boolean' != typeof o.levelIsConstant ||
											o.levelIsConstant),
										0),
									a = [],
									h = n.points[t.i];
								return (
									l(t.children, function (t) {
										(t = n.setTreeValues(t)),
											a.push(t),
											t.ignore || (r += t.val);
									}),
									y(a, function (t, e) {
										return t.sortIndex - e.sortIndex;
									}),
									(e = m(h && h.options.value, r)),
									h && (h.value = e),
									s(t, {
										children: a,
										childrenTotal: r,
										ignore: !(m(h && h.visible, !0) && 0 < e),
										isLeaf: t.visible && !r,
										levelDynamic: t.level - (o ? 0 : i.level),
										name: m(h && h.name, ''),
										sortIndex: m(h && h.sortIndex, -e),
										val: e,
									}),
									t
								);
							},
							calculateChildrenAreas: function (t, e) {
								var n,
									o = this,
									i = o.options,
									s = o.mapOptionsToLevel[t.level + 1],
									a = m(
										o[s && s.layoutAlgorithm] && s.layoutAlgorithm,
										i.layoutAlgorithm
									),
									h = i.alternateStartingDirection;
								(t = u(t.children, function (t) {
									return !t.ignore;
								})),
									s &&
										s.layoutStartingDirection &&
										(e.direction =
											'vertical' === s.layoutStartingDirection ? 0 : 1),
									(n = o[a](e, t)),
									l(t, function (t, i) {
										(i = n[i]),
											(t.values = r(i, {
												val: t.childrenTotal,
												direction: h ? 1 - e.direction : e.direction,
											})),
											(t.pointValues = r(i, {
												x: i.x / o.axisRatio,
												width: i.width / o.axisRatio,
											})),
											t.children.length &&
												o.calculateChildrenAreas(t, t.values);
									});
							},
							setPointValues: function () {
								var t = this,
									e = t.xAxis,
									n = t.yAxis;
								l(t.points, function (o) {
									var i,
										r,
										s,
										a = o.node,
										l = a.pointValues;
									(s = ((t.pointAttribs(o)['stroke-width'] || 0) % 2) / 2),
										l && a.visible
											? ((a = Math.round(e.translate(l.x, 0, 0, 0, 1)) - s),
											  (i =
													Math.round(e.translate(l.x + l.width, 0, 0, 0, 1)) -
													s),
											  (r = Math.round(n.translate(l.y, 0, 0, 0, 1)) - s),
											  (l =
													Math.round(n.translate(l.y + l.height, 0, 0, 0, 1)) -
													s),
											  (o.shapeType = 'rect'),
											  (o.shapeArgs = {
													x: Math.min(a, i),
													y: Math.min(r, l),
													width: Math.abs(i - a),
													height: Math.abs(l - r),
											  }),
											  (o.plotX = o.shapeArgs.x + o.shapeArgs.width / 2),
											  (o.plotY = o.shapeArgs.y + o.shapeArgs.height / 2))
											: (delete o.plotX, delete o.plotY);
								});
							},
							setColorRecursive: function (t, e, n, o, i) {
								var r,
									s = this,
									a = (a = s && s.chart) && a.options && a.options.colors;
								t &&
									((r = h(t, {
										colors: a,
										index: o,
										mapOptionsToLevel: s.mapOptionsToLevel,
										parentColor: e,
										parentColorIndex: n,
										series: s,
										siblings: i,
									})),
									(e = s.points[t.i]) &&
										((e.color = r.color), (e.colorIndex = r.colorIndex)),
									l(t.children || [], function (e, n) {
										s.setColorRecursive(
											e,
											r.color,
											r.colorIndex,
											n,
											t.children.length
										);
									}));
							},
							algorithmGroup: function (t, e, n, o) {
								(this.height = t),
									(this.width = e),
									(this.plot = o),
									(this.startDirection = this.direction = n),
									(this.lH = this.nH = this.lW = this.nW = this.total = 0),
									(this.elArr = []),
									(this.lP = {
										total: 0,
										lH: 0,
										nH: 0,
										lW: 0,
										nW: 0,
										nR: 0,
										lR: 0,
										aspectRatio: function (t, e) {
											return Math.max(t / e, e / t);
										},
									}),
									(this.addElement = function (t) {
										(this.lP.total = this.elArr[this.elArr.length - 1]),
											(this.total += t),
											0 === this.direction
												? ((this.lW = this.nW),
												  (this.lP.lH = this.lP.total / this.lW),
												  (this.lP.lR = this.lP.aspectRatio(
														this.lW,
														this.lP.lH
												  )),
												  (this.nW = this.total / this.height),
												  (this.lP.nH = this.lP.total / this.nW),
												  (this.lP.nR = this.lP.aspectRatio(
														this.nW,
														this.lP.nH
												  )))
												: ((this.lH = this.nH),
												  (this.lP.lW = this.lP.total / this.lH),
												  (this.lP.lR = this.lP.aspectRatio(
														this.lP.lW,
														this.lH
												  )),
												  (this.nH = this.total / this.width),
												  (this.lP.nW = this.lP.total / this.nH),
												  (this.lP.nR = this.lP.aspectRatio(
														this.lP.nW,
														this.nH
												  ))),
											this.elArr.push(t);
									}),
									(this.reset = function () {
										(this.lW = this.nW = 0),
											(this.elArr = []),
											(this.total = 0);
									});
							},
							algorithmCalcPoints: function (t, e, n, o) {
								var i,
									r,
									s,
									a,
									h,
									c = n.lW,
									u = n.lH,
									d = n.plot,
									f = 0,
									p = n.elArr.length - 1;
								e
									? ((c = n.nW), (u = n.nH))
									: (h = n.elArr[n.elArr.length - 1]),
									l(n.elArr, function (t) {
										(e || f < p) &&
											(0 === n.direction
												? ((i = d.x), (r = d.y), (a = t / (s = c)))
												: ((i = d.x), (r = d.y), (s = t / (a = u))),
											o.push({x: i, y: r, width: s, height: a}),
											0 === n.direction ? (d.y += a) : (d.x += s)),
											(f += 1);
									}),
									n.reset(),
									0 === n.direction ? (n.width -= c) : (n.height -= u),
									(d.y = d.parent.y + (d.parent.height - n.height)),
									(d.x = d.parent.x + (d.parent.width - n.width)),
									t && (n.direction = 1 - n.direction),
									e || n.addElement(h);
							},
							algorithmLowAspectRatio: function (t, e, n) {
								var o,
									i = [],
									r = this,
									s = {x: e.x, y: e.y, parent: e},
									a = 0,
									h = n.length - 1,
									c = new this.algorithmGroup(
										e.height,
										e.width,
										e.direction,
										s
									);
								return (
									l(n, function (n) {
										(o = (n.val / e.val) * e.height * e.width),
											c.addElement(o),
											c.lP.nR > c.lP.lR &&
												r.algorithmCalcPoints(t, !1, c, i, s),
											a === h && r.algorithmCalcPoints(t, !0, c, i, s),
											(a += 1);
									}),
									i
								);
							},
							algorithmFill: function (t, e, n) {
								var o,
									i,
									r,
									s,
									a,
									h = [],
									c = e.direction,
									u = e.x,
									d = e.y,
									f = e.width,
									p = e.height;
								return (
									l(n, function (n) {
										(o = (n.val / e.val) * e.height * e.width),
											(i = u),
											(r = d),
											0 === c
												? ((f -= s = o / (a = p)), (u += s))
												: ((p -= a = o / (s = f)), (d += a)),
											h.push({x: i, y: r, width: s, height: a}),
											t && (c = 1 - c);
									}),
									h
								);
							},
							strip: function (t, e) {
								return this.algorithmLowAspectRatio(!1, t, e);
							},
							squarified: function (t, e) {
								return this.algorithmLowAspectRatio(!0, t, e);
							},
							sliceAndDice: function (t, e) {
								return this.algorithmFill(!0, t, e);
							},
							stripes: function (t, e) {
								return this.algorithmFill(!1, t, e);
							},
							translate: function () {
								var t,
									e,
									n = this,
									o = n.options,
									i = C(n);
								v.prototype.translate.call(n),
									(e = n.tree = n.getTree()),
									(t = n.nodeMap[i]),
									(n.mapOptionsToLevel = c({
										from: t.level + 1,
										levels: o.levels,
										to: e.height,
										defaults: {
											levelIsConstant: n.options.levelIsConstant,
											colorByPoint: o.colorByPoint,
										},
									})),
									'' === i ||
										(t && t.children.length) ||
										(n.drillToNode('', !1),
										(i = n.rootNode),
										(t = n.nodeMap[i])),
									w(n.nodeMap[n.rootNode], function (t) {
										var e = !1,
											o = t.parent;
										return (
											(t.visible = !0), (o || '' === o) && (e = n.nodeMap[o]), e
										);
									}),
									w(n.nodeMap[n.rootNode].children, function (t) {
										var e = !1;
										return (
											l(t, function (t) {
												(t.visible = !0),
													t.children.length &&
														(e = (e || []).concat(t.children));
											}),
											e
										);
									}),
									n.setTreeValues(e),
									(n.axisRatio = n.xAxis.len / n.yAxis.len),
									(n.nodeMap[''].pointValues = i =
										{x: 0, y: 0, width: 100, height: 100}),
									(n.nodeMap[''].values = i =
										r(i, {
											width: i.width * n.axisRatio,
											direction:
												'vertical' === o.layoutStartingDirection ? 0 : 1,
											val: e.val,
										})),
									n.calculateChildrenAreas(e, i),
									n.colorAxis
										? n.translateColors()
										: o.colorByPoint || n.setColorRecursive(n.tree),
									o.allowDrillToNode &&
										((o = t.pointValues),
										n.xAxis.setExtremes(o.x, o.x + o.width, !1),
										n.yAxis.setExtremes(o.y, o.y + o.height, !1),
										n.xAxis.setScale(),
										n.yAxis.setScale()),
									n.setPointValues();
							},
							drawDataLabels: function () {
								var t,
									e,
									n = this,
									o = n.mapOptionsToLevel,
									i = u(n.points, function (t) {
										return t.node.visible;
									});
								l(i, function (i) {
									(e = o[i.node.level]),
										(t = {style: {}}),
										i.node.isLeaf || (t.enabled = !1),
										e &&
											e.dataLabels &&
											((t = r(t, e.dataLabels)), (n._hasPointLabels = !0)),
										i.shapeArgs &&
											((t.style.width = i.shapeArgs.width),
											i.dataLabel &&
												i.dataLabel.css({width: i.shapeArgs.width + 'px'})),
										(i.dlOptions = r(t, i.options.dataLabels));
								}),
									v.prototype.drawDataLabels.call(this);
							},
							alignDataLabel: function (t) {
								o.column.prototype.alignDataLabel.apply(this, arguments),
									t.dataLabel &&
										t.dataLabel.attr({zIndex: (t.node.zIndex || 0) + 1});
							},
							pointAttribs: function (t, e) {
								var n = p(this.mapOptionsToLevel) ? this.mapOptionsToLevel : {},
									o = (t && n[t.node.level]) || {},
									i = ((n = this.options), (e && n.states[e]) || {}),
									r = (t && t.getClassName()) || '';
								return (
									(t = {
										stroke:
											(t && t.borderColor) ||
											o.borderColor ||
											i.borderColor ||
											n.borderColor,
										'stroke-width': m(
											t && t.borderWidth,
											o.borderWidth,
											i.borderWidth,
											n.borderWidth
										),
										dashstyle:
											(t && t.borderDashStyle) ||
											o.borderDashStyle ||
											i.borderDashStyle ||
											n.borderDashStyle,
										fill: (t && t.color) || this.color,
									}),
									-1 !== r.indexOf('highcharts-above-level')
										? ((t.fill = 'none'), (t['stroke-width'] = 0))
										: -1 !== r.indexOf('highcharts-internal-node-interactive')
										? ((e = m(i.opacity, n.opacity)),
										  (t.fill = x(t.fill).setOpacity(e).get()),
										  (t.cursor = 'pointer'))
										: -1 !== r.indexOf('highcharts-internal-node')
										? (t.fill = 'none')
										: e && (t.fill = x(t.fill).brighten(i.brightness).get()),
									t
								);
							},
							drawPoints: function () {
								var t = this,
									e = u(t.points, function (t) {
										return t.node.visible;
									});
								l(e, function (e) {
									var n = 'level-group-' + e.node.levelDynamic;
									t[n] ||
										(t[n] = t.chart.renderer
											.g(n)
											.attr({zIndex: 1e3 - e.node.levelDynamic})
											.add(t.group)),
										(e.group = t[n]);
								}),
									o.column.prototype.drawPoints.call(this),
									t.options.allowDrillToNode &&
										l(e, function (e) {
											e.graphic &&
												(e.drillId = t.options.interactByLeaf
													? t.drillToByLeaf(e)
													: t.drillToByGroup(e));
										});
							},
							onClickDrillToNode: function (t) {
								var e = (t = t.point) && t.drillId;
								g(e) && (t.setState(''), this.drillToNode(e));
							},
							drillToByGroup: function (t) {
								var e = !1;
								return (
									1 != t.node.level - this.nodeMap[this.rootNode].level ||
										t.node.isLeaf ||
										(e = t.id),
									e
								);
							},
							drillToByLeaf: function (t) {
								var e = !1;
								if (t.node.parent !== this.rootNode && t.node.isLeaf)
									for (t = t.node; !e; )
										(t = this.nodeMap[t.parent]).parent === this.rootNode &&
											(e = t.id);
								return e;
							},
							drillUp: function () {
								var t = this.nodeMap[this.rootNode];
								t && g(t.parent) && this.drillToNode(t.parent);
							},
							drillToNode: function (t, e) {
								var n = this.nodeMap[t];
								(this.idPreviousRoot = this.rootNode),
									(this.rootNode = t),
									'' === t
										? (this.drillUpButton = this.drillUpButton.destroy())
										: this.showDrillUpButton((n && n.name) || t),
									(this.isDirty = !0),
									m(e, !0) && this.chart.redraw();
							},
							showDrillUpButton: function (t) {
								var e = this;
								t = t || '< Back';
								var n,
									o,
									i = e.options.drillUpButton;
								i.text && (t = i.text),
									this.drillUpButton
										? ((this.drillUpButton.placed = !1),
										  this.drillUpButton.attr({text: t}).align())
										: ((o = (n = i.theme) && n.states),
										  (this.drillUpButton = this.chart.renderer
												.button(
													t,
													null,
													null,
													function () {
														e.drillUp();
													},
													n,
													o && o.hover,
													o && o.select
												)
												.addClass('highcharts-drillup-button')
												.attr({align: i.position.align, zIndex: 7})
												.add()
												.align(i.position, !1, i.relativeTo || 'plotBox')));
							},
							buildKDTree: a,
							drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
							getExtremes: function () {
								v.prototype.getExtremes.call(this, this.colorValueData),
									(this.valueMin = this.dataMin),
									(this.valueMax = this.dataMax),
									v.prototype.getExtremes.call(this);
							},
							getExtremesFromAll: !0,
							bindAxes: function () {
								var e = {
									endOnTick: !1,
									gridLineWidth: 0,
									lineWidth: 0,
									min: 0,
									dataMin: 0,
									minPadding: 0,
									max: 100,
									dataMax: 100,
									maxPadding: 0,
									startOnTick: !1,
									title: null,
									tickPositions: [],
								};
								v.prototype.bindAxes.call(this),
									t.extend(this.yAxis.options, e),
									t.extend(this.xAxis.options, e);
							},
							utils: {recursive: w, reduce: b},
						},
						{
							getClassName: function () {
								var e = t.Point.prototype.getClassName.call(this),
									n = this.series,
									o = n.options;
								return (
									this.node.level <= n.nodeMap[n.rootNode].level
										? (e += ' highcharts-above-level')
										: this.node.isLeaf ||
										  m(o.interactByLeaf, !o.allowDrillToNode)
										? this.node.isLeaf || (e += ' highcharts-internal-node')
										: (e += ' highcharts-internal-node-interactive'),
									e
								);
							},
							isValid: function () {
								return this.id || f(this.value);
							},
							setState: function (e) {
								t.Point.prototype.setState.call(this, e),
									this.graphic &&
										this.graphic.attr({zIndex: 'hover' === e ? 1 : 0});
							},
							setVisible: o.pie.prototype.pointClass.prototype.setVisible,
						}
					);
				})(t, e);
			}),
				t.exports
					? (t.exports = i)
					: void 0 ===
							(o = function () {
								return i;
							}.call(e, n, e, t)) || (t.exports = o);
		},
		92592: (t, e, n) => {
			const o = n(47138),
				i = n(95115),
				r = n(6907),
				s = n(93776);
			function a(t, e, n, r, s) {
				const a = [].slice.call(arguments, 1),
					l = a.length,
					h = 'function' == typeof a[l - 1];
				if (!h && !o()) throw new Error('Callback required as last argument');
				if (!h) {
					if (l < 1) throw new Error('Too few arguments provided');
					return (
						1 === l
							? ((n = e), (e = r = void 0))
							: 2 !== l || e.getContext || ((r = n), (n = e), (e = void 0)),
						new Promise(function (o, s) {
							try {
								const s = i.create(n, r);
								o(t(s, e, r));
							} catch (t) {
								s(t);
							}
						})
					);
				}
				if (l < 2) throw new Error('Too few arguments provided');
				2 === l
					? ((s = n), (n = e), (e = r = void 0))
					: 3 === l &&
					  (e.getContext && void 0 === s
							? ((s = r), (r = void 0))
							: ((s = r), (r = n), (n = e), (e = void 0)));
				try {
					const o = i.create(n, r);
					s(null, t(o, e, r));
				} catch (t) {
					s(t);
				}
			}
			(e.create = i.create),
				(e.toCanvas = a.bind(null, r.render)),
				(e.toDataURL = a.bind(null, r.renderToDataURL)),
				(e.toString = a.bind(null, function (t, e, n) {
					return s.render(t, n);
				}));
		},
		47138: (t) => {
			t.exports = function () {
				return (
					'function' == typeof Promise &&
					Promise.prototype &&
					Promise.prototype.then
				);
			};
		},
		21845: (t, e, n) => {
			const o = n(10242).getSymbolSize;
			(e.getRowColCoords = function (t) {
				if (1 === t) return [];
				const e = Math.floor(t / 7) + 2,
					n = o(t),
					i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
					r = [n - 7];
				for (let t = 1; t < e - 1; t++) r[t] = r[t - 1] - i;
				return r.push(6), r.reverse();
			}),
				(e.getPositions = function (t) {
					const n = [],
						o = e.getRowColCoords(t),
						i = o.length;
					for (let t = 0; t < i; t++)
						for (let e = 0; e < i; e++)
							(0 === t && 0 === e) ||
								(0 === t && e === i - 1) ||
								(t === i - 1 && 0 === e) ||
								n.push([o[t], o[e]]);
					return n;
				});
		},
		8260: (t, e, n) => {
			const o = n(76910),
				i = [
					'0',
					'1',
					'2',
					'3',
					'4',
					'5',
					'6',
					'7',
					'8',
					'9',
					'A',
					'B',
					'C',
					'D',
					'E',
					'F',
					'G',
					'H',
					'I',
					'J',
					'K',
					'L',
					'M',
					'N',
					'O',
					'P',
					'Q',
					'R',
					'S',
					'T',
					'U',
					'V',
					'W',
					'X',
					'Y',
					'Z',
					' ',
					'$',
					'%',
					'*',
					'+',
					'-',
					'.',
					'/',
					':',
				];
			function r(t) {
				(this.mode = o.ALPHANUMERIC), (this.data = t);
			}
			(r.getBitsLength = function (t) {
				return 11 * Math.floor(t / 2) + (t % 2) * 6;
			}),
				(r.prototype.getLength = function () {
					return this.data.length;
				}),
				(r.prototype.getBitsLength = function () {
					return r.getBitsLength(this.data.length);
				}),
				(r.prototype.write = function (t) {
					let e;
					for (e = 0; e + 2 <= this.data.length; e += 2) {
						let n = 45 * i.indexOf(this.data[e]);
						(n += i.indexOf(this.data[e + 1])), t.put(n, 11);
					}
					this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6);
				}),
				(t.exports = r);
		},
		97245: (t) => {
			function e() {
				(this.buffer = []), (this.length = 0);
			}
			(e.prototype = {
				get: function (t) {
					const e = Math.floor(t / 8);
					return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
				},
				put: function (t, e) {
					for (let n = 0; n < e; n++)
						this.putBit(1 == ((t >>> (e - n - 1)) & 1));
				},
				getLengthInBits: function () {
					return this.length;
				},
				putBit: function (t) {
					const e = Math.floor(this.length / 8);
					this.buffer.length <= e && this.buffer.push(0),
						t && (this.buffer[e] |= 128 >>> this.length % 8),
						this.length++;
				},
			}),
				(t.exports = e);
		},
		73280: (t) => {
			function e(t) {
				if (!t || t < 1)
					throw new Error('BitMatrix size must be defined and greater than 0');
				(this.size = t),
					(this.data = new Uint8Array(t * t)),
					(this.reservedBit = new Uint8Array(t * t));
			}
			(e.prototype.set = function (t, e, n, o) {
				const i = t * this.size + e;
				(this.data[i] = n), o && (this.reservedBit[i] = !0);
			}),
				(e.prototype.get = function (t, e) {
					return this.data[t * this.size + e];
				}),
				(e.prototype.xor = function (t, e, n) {
					this.data[t * this.size + e] ^= n;
				}),
				(e.prototype.isReserved = function (t, e) {
					return this.reservedBit[t * this.size + e];
				}),
				(t.exports = e);
		},
		43424: (t, e, n) => {
			const o = n(62378),
				i = n(76910);
			function r(t) {
				(this.mode = i.BYTE), (this.data = new Uint8Array(o(t)));
			}
			(r.getBitsLength = function (t) {
				return 8 * t;
			}),
				(r.prototype.getLength = function () {
					return this.data.length;
				}),
				(r.prototype.getBitsLength = function () {
					return r.getBitsLength(this.data.length);
				}),
				(r.prototype.write = function (t) {
					for (let e = 0, n = this.data.length; e < n; e++)
						t.put(this.data[e], 8);
				}),
				(t.exports = r);
		},
		35393: (t, e, n) => {
			const o = n(64908),
				i = [
					1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
					4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
					10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
					11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
					25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
					23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
					40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
					60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
					24, 47, 65, 77, 25, 49, 68, 81,
				],
				r = [
					7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
					72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
					160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
					104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
					408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
					224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
					750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
					1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
					1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
					1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
					1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
					2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
				];
			(e.getBlocksCount = function (t, e) {
				switch (e) {
					case o.L:
						return i[4 * (t - 1) + 0];
					case o.M:
						return i[4 * (t - 1) + 1];
					case o.Q:
						return i[4 * (t - 1) + 2];
					case o.H:
						return i[4 * (t - 1) + 3];
					default:
						return;
				}
			}),
				(e.getTotalCodewordsCount = function (t, e) {
					switch (e) {
						case o.L:
							return r[4 * (t - 1) + 0];
						case o.M:
							return r[4 * (t - 1) + 1];
						case o.Q:
							return r[4 * (t - 1) + 2];
						case o.H:
							return r[4 * (t - 1) + 3];
						default:
							return;
					}
				});
		},
		64908: (t, e) => {
			(e.L = {bit: 1}),
				(e.M = {bit: 0}),
				(e.Q = {bit: 3}),
				(e.H = {bit: 2}),
				(e.isValid = function (t) {
					return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
				}),
				(e.from = function (t, n) {
					if (e.isValid(t)) return t;
					try {
						return (function (t) {
							if ('string' != typeof t)
								throw new Error('Param is not a string');
							switch (t.toLowerCase()) {
								case 'l':
								case 'low':
									return e.L;
								case 'm':
								case 'medium':
									return e.M;
								case 'q':
								case 'quartile':
									return e.Q;
								case 'h':
								case 'high':
									return e.H;
								default:
									throw new Error('Unknown EC Level: ' + t);
							}
						})(t);
					} catch (t) {
						return n;
					}
				});
		},
		76526: (t, e, n) => {
			const o = n(10242).getSymbolSize;
			e.getPositions = function (t) {
				const e = o(t);
				return [
					[0, 0],
					[e - 7, 0],
					[0, e - 7],
				];
			};
		},
		61642: (t, e, n) => {
			const o = n(10242),
				i = o.getBCHDigit(1335);
			e.getEncodedBits = function (t, e) {
				const n = (t.bit << 3) | e;
				let r = n << 10;
				for (; o.getBCHDigit(r) - i >= 0; ) r ^= 1335 << (o.getBCHDigit(r) - i);
				return 21522 ^ ((n << 10) | r);
			};
		},
		69729: (t, e) => {
			const n = new Uint8Array(512),
				o = new Uint8Array(256);
			!(function () {
				let t = 1;
				for (let e = 0; e < 255; e++)
					(n[e] = t), (o[t] = e), (t <<= 1), 256 & t && (t ^= 285);
				for (let t = 255; t < 512; t++) n[t] = n[t - 255];
			})(),
				(e.log = function (t) {
					if (t < 1) throw new Error('log(' + t + ')');
					return o[t];
				}),
				(e.exp = function (t) {
					return n[t];
				}),
				(e.mul = function (t, e) {
					return 0 === t || 0 === e ? 0 : n[o[t] + o[e]];
				});
		},
		35442: (t, e, n) => {
			const o = n(76910),
				i = n(10242);
			function r(t) {
				(this.mode = o.KANJI), (this.data = t);
			}
			(r.getBitsLength = function (t) {
				return 13 * t;
			}),
				(r.prototype.getLength = function () {
					return this.data.length;
				}),
				(r.prototype.getBitsLength = function () {
					return r.getBitsLength(this.data.length);
				}),
				(r.prototype.write = function (t) {
					let e;
					for (e = 0; e < this.data.length; e++) {
						let n = i.toSJIS(this.data[e]);
						if (n >= 33088 && n <= 40956) n -= 33088;
						else {
							if (!(n >= 57408 && n <= 60351))
								throw new Error(
									'Invalid SJIS character: ' +
										this.data[e] +
										'\nMake sure your charset is UTF-8'
								);
							n -= 49472;
						}
						(n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13);
					}
				}),
				(t.exports = r);
		},
		27126: (t, e) => {
			e.Patterns = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7,
			};
			function n(t, n, o) {
				switch (t) {
					case e.Patterns.PATTERN000:
						return (n + o) % 2 == 0;
					case e.Patterns.PATTERN001:
						return n % 2 == 0;
					case e.Patterns.PATTERN010:
						return o % 3 == 0;
					case e.Patterns.PATTERN011:
						return (n + o) % 3 == 0;
					case e.Patterns.PATTERN100:
						return (Math.floor(n / 2) + Math.floor(o / 3)) % 2 == 0;
					case e.Patterns.PATTERN101:
						return ((n * o) % 2) + ((n * o) % 3) == 0;
					case e.Patterns.PATTERN110:
						return (((n * o) % 2) + ((n * o) % 3)) % 2 == 0;
					case e.Patterns.PATTERN111:
						return (((n * o) % 3) + ((n + o) % 2)) % 2 == 0;
					default:
						throw new Error('bad maskPattern:' + t);
				}
			}
			(e.isValid = function (t) {
				return null != t && '' !== t && !isNaN(t) && t >= 0 && t <= 7;
			}),
				(e.from = function (t) {
					return e.isValid(t) ? parseInt(t, 10) : void 0;
				}),
				(e.getPenaltyN1 = function (t) {
					const e = t.size;
					let n = 0,
						o = 0,
						i = 0,
						r = null,
						s = null;
					for (let a = 0; a < e; a++) {
						(o = i = 0), (r = s = null);
						for (let l = 0; l < e; l++) {
							let e = t.get(a, l);
							e === r ? o++ : (o >= 5 && (n += o - 5 + 3), (r = e), (o = 1)),
								(e = t.get(l, a)),
								e === s ? i++ : (i >= 5 && (n += i - 5 + 3), (s = e), (i = 1));
						}
						o >= 5 && (n += o - 5 + 3), i >= 5 && (n += i - 5 + 3);
					}
					return n;
				}),
				(e.getPenaltyN2 = function (t) {
					const e = t.size;
					let n = 0;
					for (let o = 0; o < e - 1; o++)
						for (let i = 0; i < e - 1; i++) {
							const e =
								t.get(o, i) +
								t.get(o, i + 1) +
								t.get(o + 1, i) +
								t.get(o + 1, i + 1);
							(4 !== e && 0 !== e) || n++;
						}
					return 3 * n;
				}),
				(e.getPenaltyN3 = function (t) {
					const e = t.size;
					let n = 0,
						o = 0,
						i = 0;
					for (let r = 0; r < e; r++) {
						o = i = 0;
						for (let s = 0; s < e; s++)
							(o = ((o << 1) & 2047) | t.get(r, s)),
								s >= 10 && (1488 === o || 93 === o) && n++,
								(i = ((i << 1) & 2047) | t.get(s, r)),
								s >= 10 && (1488 === i || 93 === i) && n++;
					}
					return 40 * n;
				}),
				(e.getPenaltyN4 = function (t) {
					let e = 0;
					const n = t.data.length;
					for (let o = 0; o < n; o++) e += t.data[o];
					return 10 * Math.abs(Math.ceil((100 * e) / n / 5) - 10);
				}),
				(e.applyMask = function (t, e) {
					const o = e.size;
					for (let i = 0; i < o; i++)
						for (let r = 0; r < o; r++)
							e.isReserved(r, i) || e.xor(r, i, n(t, r, i));
				}),
				(e.getBestMask = function (t, n) {
					const o = Object.keys(e.Patterns).length;
					let i = 0,
						r = 1 / 0;
					for (let s = 0; s < o; s++) {
						n(s), e.applyMask(s, t);
						const o =
							e.getPenaltyN1(t) +
							e.getPenaltyN2(t) +
							e.getPenaltyN3(t) +
							e.getPenaltyN4(t);
						e.applyMask(s, t), o < r && ((r = o), (i = s));
					}
					return i;
				});
		},
		76910: (t, e, n) => {
			const o = n(43114),
				i = n(7007);
			(e.NUMERIC = {id: 'Numeric', bit: 1, ccBits: [10, 12, 14]}),
				(e.ALPHANUMERIC = {id: 'Alphanumeric', bit: 2, ccBits: [9, 11, 13]}),
				(e.BYTE = {id: 'Byte', bit: 4, ccBits: [8, 16, 16]}),
				(e.KANJI = {id: 'Kanji', bit: 8, ccBits: [8, 10, 12]}),
				(e.MIXED = {bit: -1}),
				(e.getCharCountIndicator = function (t, e) {
					if (!t.ccBits) throw new Error('Invalid mode: ' + t);
					if (!o.isValid(e)) throw new Error('Invalid version: ' + e);
					return e >= 1 && e < 10
						? t.ccBits[0]
						: e < 27
						? t.ccBits[1]
						: t.ccBits[2];
				}),
				(e.getBestModeForData = function (t) {
					return i.testNumeric(t)
						? e.NUMERIC
						: i.testAlphanumeric(t)
						? e.ALPHANUMERIC
						: i.testKanji(t)
						? e.KANJI
						: e.BYTE;
				}),
				(e.toString = function (t) {
					if (t && t.id) return t.id;
					throw new Error('Invalid mode');
				}),
				(e.isValid = function (t) {
					return t && t.bit && t.ccBits;
				}),
				(e.from = function (t, n) {
					if (e.isValid(t)) return t;
					try {
						return (function (t) {
							if ('string' != typeof t)
								throw new Error('Param is not a string');
							switch (t.toLowerCase()) {
								case 'numeric':
									return e.NUMERIC;
								case 'alphanumeric':
									return e.ALPHANUMERIC;
								case 'kanji':
									return e.KANJI;
								case 'byte':
									return e.BYTE;
								default:
									throw new Error('Unknown mode: ' + t);
							}
						})(t);
					} catch (t) {
						return n;
					}
				});
		},
		41085: (t, e, n) => {
			const o = n(76910);
			function i(t) {
				(this.mode = o.NUMERIC), (this.data = t.toString());
			}
			(i.getBitsLength = function (t) {
				return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
			}),
				(i.prototype.getLength = function () {
					return this.data.length;
				}),
				(i.prototype.getBitsLength = function () {
					return i.getBitsLength(this.data.length);
				}),
				(i.prototype.write = function (t) {
					let e, n, o;
					for (e = 0; e + 3 <= this.data.length; e += 3)
						(n = this.data.substr(e, 3)), (o = parseInt(n, 10)), t.put(o, 10);
					const i = this.data.length - e;
					i > 0 &&
						((n = this.data.substr(e)),
						(o = parseInt(n, 10)),
						t.put(o, 3 * i + 1));
				}),
				(t.exports = i);
		},
		26143: (t, e, n) => {
			const o = n(69729);
			(e.mul = function (t, e) {
				const n = new Uint8Array(t.length + e.length - 1);
				for (let i = 0; i < t.length; i++)
					for (let r = 0; r < e.length; r++) n[i + r] ^= o.mul(t[i], e[r]);
				return n;
			}),
				(e.mod = function (t, e) {
					let n = new Uint8Array(t);
					for (; n.length - e.length >= 0; ) {
						const t = n[0];
						for (let i = 0; i < e.length; i++) n[i] ^= o.mul(e[i], t);
						let i = 0;
						for (; i < n.length && 0 === n[i]; ) i++;
						n = n.slice(i);
					}
					return n;
				}),
				(e.generateECPolynomial = function (t) {
					let n = new Uint8Array([1]);
					for (let i = 0; i < t; i++)
						n = e.mul(n, new Uint8Array([1, o.exp(i)]));
					return n;
				});
		},
		95115: (t, e, n) => {
			const o = n(10242),
				i = n(64908),
				r = n(97245),
				s = n(73280),
				a = n(21845),
				l = n(76526),
				h = n(27126),
				c = n(35393),
				u = n(52882),
				d = n(23103),
				f = n(61642),
				p = n(76910),
				g = n(16130);
			function m(t, e, n) {
				const o = t.size,
					i = f.getEncodedBits(e, n);
				let r, s;
				for (r = 0; r < 15; r++)
					(s = 1 == ((i >> r) & 1)),
						r < 6
							? t.set(r, 8, s, !0)
							: r < 8
							? t.set(r + 1, 8, s, !0)
							: t.set(o - 15 + r, 8, s, !0),
						r < 8
							? t.set(8, o - r - 1, s, !0)
							: r < 9
							? t.set(8, 15 - r - 1 + 1, s, !0)
							: t.set(8, 15 - r - 1, s, !0);
				t.set(o - 8, 8, 1, !0);
			}
			function v(t, e, n, i) {
				let f;
				if (Array.isArray(t)) f = g.fromArray(t);
				else {
					if ('string' != typeof t) throw new Error('Invalid data');
					{
						let o = e;
						if (!o) {
							const e = g.rawSplit(t);
							o = d.getBestVersionForData(e, n);
						}
						f = g.fromString(t, o || 40);
					}
				}
				const v = d.getBestVersionForData(f, n);
				if (!v)
					throw new Error(
						'The amount of data is too big to be stored in a QR Code'
					);
				if (e) {
					if (e < v)
						throw new Error(
							'\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: ' +
								v +
								'.\n'
						);
				} else e = v;
				const y = (function (t, e, n) {
						const i = new r();
						n.forEach(function (e) {
							i.put(e.mode.bit, 4),
								i.put(e.getLength(), p.getCharCountIndicator(e.mode, t)),
								e.write(i);
						});
						const s =
							8 *
							(o.getSymbolTotalCodewords(t) - c.getTotalCodewordsCount(t, e));
						for (
							i.getLengthInBits() + 4 <= s && i.put(0, 4);
							i.getLengthInBits() % 8 != 0;

						)
							i.putBit(0);
						const a = (s - i.getLengthInBits()) / 8;
						for (let t = 0; t < a; t++) i.put(t % 2 ? 17 : 236, 8);
						return (function (t, e, n) {
							const i = o.getSymbolTotalCodewords(e),
								r = i - c.getTotalCodewordsCount(e, n),
								s = c.getBlocksCount(e, n),
								a = s - (i % s),
								l = Math.floor(i / s),
								h = Math.floor(r / s),
								d = h + 1,
								f = l - h,
								p = new u(f);
							let g = 0;
							const m = new Array(s),
								v = new Array(s);
							let y = 0;
							const x = new Uint8Array(t.buffer);
							for (let t = 0; t < s; t++) {
								const e = t < a ? h : d;
								(m[t] = x.slice(g, g + e)),
									(v[t] = p.encode(m[t])),
									(g += e),
									(y = Math.max(y, e));
							}
							const b = new Uint8Array(i);
							let w,
								C,
								A = 0;
							for (w = 0; w < y; w++)
								for (C = 0; C < s; C++) w < m[C].length && (b[A++] = m[C][w]);
							for (w = 0; w < f; w++) for (C = 0; C < s; C++) b[A++] = v[C][w];
							return b;
						})(i, t, e);
					})(e, n, f),
					x = o.getSymbolSize(e),
					b = new s(x);
				return (
					(function (t, e) {
						const n = t.size,
							o = l.getPositions(e);
						for (let e = 0; e < o.length; e++) {
							const i = o[e][0],
								r = o[e][1];
							for (let e = -1; e <= 7; e++)
								if (!(i + e <= -1 || n <= i + e))
									for (let o = -1; o <= 7; o++)
										r + o <= -1 ||
											n <= r + o ||
											((e >= 0 && e <= 6 && (0 === o || 6 === o)) ||
											(o >= 0 && o <= 6 && (0 === e || 6 === e)) ||
											(e >= 2 && e <= 4 && o >= 2 && o <= 4)
												? t.set(i + e, r + o, !0, !0)
												: t.set(i + e, r + o, !1, !0));
						}
					})(b, e),
					(function (t) {
						const e = t.size;
						for (let n = 8; n < e - 8; n++) {
							const e = n % 2 == 0;
							t.set(n, 6, e, !0), t.set(6, n, e, !0);
						}
					})(b),
					(function (t, e) {
						const n = a.getPositions(e);
						for (let e = 0; e < n.length; e++) {
							const o = n[e][0],
								i = n[e][1];
							for (let e = -2; e <= 2; e++)
								for (let n = -2; n <= 2; n++)
									-2 === e ||
									2 === e ||
									-2 === n ||
									2 === n ||
									(0 === e && 0 === n)
										? t.set(o + e, i + n, !0, !0)
										: t.set(o + e, i + n, !1, !0);
						}
					})(b, e),
					m(b, n, 0),
					e >= 7 &&
						(function (t, e) {
							const n = t.size,
								o = d.getEncodedBits(e);
							let i, r, s;
							for (let e = 0; e < 18; e++)
								(i = Math.floor(e / 3)),
									(r = (e % 3) + n - 8 - 3),
									(s = 1 == ((o >> e) & 1)),
									t.set(i, r, s, !0),
									t.set(r, i, s, !0);
						})(b, e),
					(function (t, e) {
						const n = t.size;
						let o = -1,
							i = n - 1,
							r = 7,
							s = 0;
						for (let a = n - 1; a > 0; a -= 2)
							for (6 === a && a--; ; ) {
								for (let n = 0; n < 2; n++)
									if (!t.isReserved(i, a - n)) {
										let o = !1;
										s < e.length && (o = 1 == ((e[s] >>> r) & 1)),
											t.set(i, a - n, o),
											r--,
											-1 === r && (s++, (r = 7));
									}
								if (((i += o), i < 0 || n <= i)) {
									(i -= o), (o = -o);
									break;
								}
							}
					})(b, y),
					isNaN(i) && (i = h.getBestMask(b, m.bind(null, b, n))),
					h.applyMask(i, b),
					m(b, n, i),
					{
						modules: b,
						version: e,
						errorCorrectionLevel: n,
						maskPattern: i,
						segments: f,
					}
				);
			}
			e.create = function (t, e) {
				if (void 0 === t || '' === t) throw new Error('No input text');
				let n,
					r,
					s = i.M;
				return (
					void 0 !== e &&
						((s = i.from(e.errorCorrectionLevel, i.M)),
						(n = d.from(e.version)),
						(r = h.from(e.maskPattern)),
						e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
					v(t, n, s, r)
				);
			};
		},
		52882: (t, e, n) => {
			const o = n(26143);
			function i(t) {
				(this.genPoly = void 0),
					(this.degree = t),
					this.degree && this.initialize(this.degree);
			}
			(i.prototype.initialize = function (t) {
				(this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
			}),
				(i.prototype.encode = function (t) {
					if (!this.genPoly) throw new Error('Encoder not initialized');
					const e = new Uint8Array(t.length + this.degree);
					e.set(t);
					const n = o.mod(e, this.genPoly),
						i = this.degree - n.length;
					if (i > 0) {
						const t = new Uint8Array(this.degree);
						return t.set(n, i), t;
					}
					return n;
				}),
				(t.exports = i);
		},
		7007: (t, e) => {
			let n =
				'(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
			n = n.replace(/u/g, '\\u');
			const o = '(?:(?![A-Z0-9 $%*+\\-./:]|' + n + ')(?:.|[\r\n]))+';
			(e.KANJI = new RegExp(n, 'g')),
				(e.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')),
				(e.BYTE = new RegExp(o, 'g')),
				(e.NUMERIC = new RegExp('[0-9]+', 'g')),
				(e.ALPHANUMERIC = new RegExp('[A-Z $%*+\\-./:]+', 'g'));
			const i = new RegExp('^' + n + '$'),
				r = new RegExp('^[0-9]+$'),
				s = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
			(e.testKanji = function (t) {
				return i.test(t);
			}),
				(e.testNumeric = function (t) {
					return r.test(t);
				}),
				(e.testAlphanumeric = function (t) {
					return s.test(t);
				});
		},
		16130: (t, e, n) => {
			const o = n(76910),
				i = n(41085),
				r = n(8260),
				s = n(43424),
				a = n(35442),
				l = n(7007),
				h = n(10242),
				c = n(65987);
			function u(t) {
				return unescape(encodeURIComponent(t)).length;
			}
			function d(t, e, n) {
				const o = [];
				let i;
				for (; null !== (i = t.exec(n)); )
					o.push({data: i[0], index: i.index, mode: e, length: i[0].length});
				return o;
			}
			function f(t) {
				const e = d(l.NUMERIC, o.NUMERIC, t),
					n = d(l.ALPHANUMERIC, o.ALPHANUMERIC, t);
				let i, r;
				return (
					h.isKanjiModeEnabled()
						? ((i = d(l.BYTE, o.BYTE, t)), (r = d(l.KANJI, o.KANJI, t)))
						: ((i = d(l.BYTE_KANJI, o.BYTE, t)), (r = [])),
					e
						.concat(n, i, r)
						.sort(function (t, e) {
							return t.index - e.index;
						})
						.map(function (t) {
							return {data: t.data, mode: t.mode, length: t.length};
						})
				);
			}
			function p(t, e) {
				switch (e) {
					case o.NUMERIC:
						return i.getBitsLength(t);
					case o.ALPHANUMERIC:
						return r.getBitsLength(t);
					case o.KANJI:
						return a.getBitsLength(t);
					case o.BYTE:
						return s.getBitsLength(t);
				}
			}
			function g(t, e) {
				let n;
				const l = o.getBestModeForData(t);
				if (((n = o.from(e, l)), n !== o.BYTE && n.bit < l.bit))
					throw new Error(
						'"' +
							t +
							'" cannot be encoded with mode ' +
							o.toString(n) +
							'.\n Suggested mode is: ' +
							o.toString(l)
					);
				switch ((n !== o.KANJI || h.isKanjiModeEnabled() || (n = o.BYTE), n)) {
					case o.NUMERIC:
						return new i(t);
					case o.ALPHANUMERIC:
						return new r(t);
					case o.KANJI:
						return new a(t);
					case o.BYTE:
						return new s(t);
				}
			}
			(e.fromArray = function (t) {
				return t.reduce(function (t, e) {
					return (
						'string' == typeof e
							? t.push(g(e, null))
							: e.data && t.push(g(e.data, e.mode)),
						t
					);
				}, []);
			}),
				(e.fromString = function (t, n) {
					const i = (function (t) {
							const e = [];
							for (let n = 0; n < t.length; n++) {
								const i = t[n];
								switch (i.mode) {
									case o.NUMERIC:
										e.push([
											i,
											{data: i.data, mode: o.ALPHANUMERIC, length: i.length},
											{data: i.data, mode: o.BYTE, length: i.length},
										]);
										break;
									case o.ALPHANUMERIC:
										e.push([i, {data: i.data, mode: o.BYTE, length: i.length}]);
										break;
									case o.KANJI:
										e.push([
											i,
											{data: i.data, mode: o.BYTE, length: u(i.data)},
										]);
										break;
									case o.BYTE:
										e.push([{data: i.data, mode: o.BYTE, length: u(i.data)}]);
								}
							}
							return e;
						})(f(t, h.isKanjiModeEnabled())),
						r = (function (t, e) {
							const n = {},
								i = {start: {}};
							let r = ['start'];
							for (let s = 0; s < t.length; s++) {
								const a = t[s],
									l = [];
								for (let t = 0; t < a.length; t++) {
									const h = a[t],
										c = '' + s + t;
									l.push(c), (n[c] = {node: h, lastCount: 0}), (i[c] = {});
									for (let t = 0; t < r.length; t++) {
										const s = r[t];
										n[s] && n[s].node.mode === h.mode
											? ((i[s][c] =
													p(n[s].lastCount + h.length, h.mode) -
													p(n[s].lastCount, h.mode)),
											  (n[s].lastCount += h.length))
											: (n[s] && (n[s].lastCount = h.length),
											  (i[s][c] =
													p(h.length, h.mode) +
													4 +
													o.getCharCountIndicator(h.mode, e)));
									}
								}
								r = l;
							}
							for (let t = 0; t < r.length; t++) i[r[t]].end = 0;
							return {map: i, table: n};
						})(i, n),
						s = c.find_path(r.map, 'start', 'end'),
						a = [];
					for (let t = 1; t < s.length - 1; t++) a.push(r.table[s[t]].node);
					return e.fromArray(
						a.reduce(function (t, e) {
							const n = t.length - 1 >= 0 ? t[t.length - 1] : null;
							return n && n.mode === e.mode
								? ((t[t.length - 1].data += e.data), t)
								: (t.push(e), t);
						}, [])
					);
				}),
				(e.rawSplit = function (t) {
					return e.fromArray(f(t, h.isKanjiModeEnabled()));
				});
		},
		10242: (t, e) => {
			let n;
			const o = [
				0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
				655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
				1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
				3706,
			];
			(e.getSymbolSize = function (t) {
				if (!t) throw new Error('"version" cannot be null or undefined');
				if (t < 1 || t > 40)
					throw new Error('"version" should be in range from 1 to 40');
				return 4 * t + 17;
			}),
				(e.getSymbolTotalCodewords = function (t) {
					return o[t];
				}),
				(e.getBCHDigit = function (t) {
					let e = 0;
					for (; 0 !== t; ) e++, (t >>>= 1);
					return e;
				}),
				(e.setToSJISFunction = function (t) {
					if ('function' != typeof t)
						throw new Error('"toSJISFunc" is not a valid function.');
					n = t;
				}),
				(e.isKanjiModeEnabled = function () {
					return void 0 !== n;
				}),
				(e.toSJIS = function (t) {
					return n(t);
				});
		},
		43114: (t, e) => {
			e.isValid = function (t) {
				return !isNaN(t) && t >= 1 && t <= 40;
			};
		},
		23103: (t, e, n) => {
			const o = n(10242),
				i = n(35393),
				r = n(64908),
				s = n(76910),
				a = n(43114),
				l = o.getBCHDigit(7973);
			function h(t, e) {
				return s.getCharCountIndicator(t, e) + 4;
			}
			function c(t, e) {
				let n = 0;
				return (
					t.forEach(function (t) {
						const o = h(t.mode, e);
						n += o + t.getBitsLength();
					}),
					n
				);
			}
			(e.from = function (t, e) {
				return a.isValid(t) ? parseInt(t, 10) : e;
			}),
				(e.getCapacity = function (t, e, n) {
					if (!a.isValid(t)) throw new Error('Invalid QR Code version');
					void 0 === n && (n = s.BYTE);
					const r =
						8 * (o.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e));
					if (n === s.MIXED) return r;
					const l = r - h(n, t);
					switch (n) {
						case s.NUMERIC:
							return Math.floor((l / 10) * 3);
						case s.ALPHANUMERIC:
							return Math.floor((l / 11) * 2);
						case s.KANJI:
							return Math.floor(l / 13);
						case s.BYTE:
						default:
							return Math.floor(l / 8);
					}
				}),
				(e.getBestVersionForData = function (t, n) {
					let o;
					const i = r.from(n, r.M);
					if (Array.isArray(t)) {
						if (t.length > 1)
							return (function (t, n) {
								for (let o = 1; o <= 40; o++)
									if (c(t, o) <= e.getCapacity(o, n, s.MIXED)) return o;
							})(t, i);
						if (0 === t.length) return 1;
						o = t[0];
					} else o = t;
					return (function (t, n, o) {
						for (let i = 1; i <= 40; i++)
							if (n <= e.getCapacity(i, o, t)) return i;
					})(o.mode, o.getLength(), i);
				}),
				(e.getEncodedBits = function (t) {
					if (!a.isValid(t) || t < 7)
						throw new Error('Invalid QR Code version');
					let e = t << 12;
					for (; o.getBCHDigit(e) - l >= 0; )
						e ^= 7973 << (o.getBCHDigit(e) - l);
					return (t << 12) | e;
				});
		},
		6907: (t, e, n) => {
			const o = n(89653);
			(e.render = function (t, e, n) {
				let i = n,
					r = e;
				void 0 !== i || (e && e.getContext) || ((i = e), (e = void 0)),
					e ||
						(r = (function () {
							try {
								return document.createElement('canvas');
							} catch (t) {
								throw new Error('You need to specify a canvas element');
							}
						})()),
					(i = o.getOptions(i));
				const s = o.getImageWidth(t.modules.size, i),
					a = r.getContext('2d'),
					l = a.createImageData(s, s);
				return (
					o.qrToImageData(l.data, t, i),
					(function (t, e, n) {
						t.clearRect(0, 0, e.width, e.height),
							e.style || (e.style = {}),
							(e.height = n),
							(e.width = n),
							(e.style.height = n + 'px'),
							(e.style.width = n + 'px');
					})(a, r, s),
					a.putImageData(l, 0, 0),
					r
				);
			}),
				(e.renderToDataURL = function (t, n, o) {
					let i = o;
					void 0 !== i || (n && n.getContext) || ((i = n), (n = void 0)),
						i || (i = {});
					const r = e.render(t, n, i),
						s = i.type || 'image/png',
						a = i.rendererOpts || {};
					return r.toDataURL(s, a.quality);
				});
		},
		93776: (t, e, n) => {
			const o = n(89653);
			function i(t, e) {
				const n = t.a / 255,
					o = e + '="' + t.hex + '"';
				return n < 1
					? o + ' ' + e + '-opacity="' + n.toFixed(2).slice(1) + '"'
					: o;
			}
			function r(t, e, n) {
				let o = t + e;
				return void 0 !== n && (o += ' ' + n), o;
			}
			e.render = function (t, e, n) {
				const s = o.getOptions(e),
					a = t.modules.size,
					l = t.modules.data,
					h = a + 2 * s.margin,
					c = s.color.light.a
						? '<path ' +
						  i(s.color.light, 'fill') +
						  ' d="M0 0h' +
						  h +
						  'v' +
						  h +
						  'H0z"/>'
						: '',
					u =
						'<path ' +
						i(s.color.dark, 'stroke') +
						' d="' +
						(function (t, e, n) {
							let o = '',
								i = 0,
								s = !1,
								a = 0;
							for (let l = 0; l < t.length; l++) {
								const h = Math.floor(l % e),
									c = Math.floor(l / e);
								h || s || (s = !0),
									t[l]
										? (a++,
										  (l > 0 && h > 0 && t[l - 1]) ||
												((o += s ? r('M', h + n, 0.5 + c + n) : r('m', i, 0)),
												(i = 0),
												(s = !1)),
										  (h + 1 < e && t[l + 1]) || ((o += r('h', a)), (a = 0)))
										: i++;
							}
							return o;
						})(l, a, s.margin) +
						'"/>',
					d = 'viewBox="0 0 ' + h + ' ' + h + '"',
					f =
						'<svg xmlns="http://www.w3.org/2000/svg" ' +
						(s.width
							? 'width="' + s.width + '" height="' + s.width + '" '
							: '') +
						d +
						' shape-rendering="crispEdges">' +
						c +
						u +
						'</svg>\n';
				return 'function' == typeof n && n(null, f), f;
			};
		},
		89653: (t, e) => {
			function n(t) {
				if (('number' == typeof t && (t = t.toString()), 'string' != typeof t))
					throw new Error('Color should be defined as hex string');
				let e = t.slice().replace('#', '').split('');
				if (e.length < 3 || 5 === e.length || e.length > 8)
					throw new Error('Invalid hex color: ' + t);
				(3 !== e.length && 4 !== e.length) ||
					(e = Array.prototype.concat.apply(
						[],
						e.map(function (t) {
							return [t, t];
						})
					)),
					6 === e.length && e.push('F', 'F');
				const n = parseInt(e.join(''), 16);
				return {
					r: (n >> 24) & 255,
					g: (n >> 16) & 255,
					b: (n >> 8) & 255,
					a: 255 & n,
					hex: '#' + e.slice(0, 6).join(''),
				};
			}
			(e.getOptions = function (t) {
				t || (t = {}), t.color || (t.color = {});
				const e =
						void 0 === t.margin || null === t.margin || t.margin < 0
							? 4
							: t.margin,
					o = t.width && t.width >= 21 ? t.width : void 0,
					i = t.scale || 4;
				return {
					width: o,
					scale: o ? 4 : i,
					margin: e,
					color: {
						dark: n(t.color.dark || '#000000ff'),
						light: n(t.color.light || '#ffffffff'),
					},
					type: t.type,
					rendererOpts: t.rendererOpts || {},
				};
			}),
				(e.getScale = function (t, e) {
					return e.width && e.width >= t + 2 * e.margin
						? e.width / (t + 2 * e.margin)
						: e.scale;
				}),
				(e.getImageWidth = function (t, n) {
					const o = e.getScale(t, n);
					return Math.floor((t + 2 * n.margin) * o);
				}),
				(e.qrToImageData = function (t, n, o) {
					const i = n.modules.size,
						r = n.modules.data,
						s = e.getScale(i, o),
						a = Math.floor((i + 2 * o.margin) * s),
						l = o.margin * s,
						h = [o.color.light, o.color.dark];
					for (let e = 0; e < a; e++)
						for (let n = 0; n < a; n++) {
							let c = 4 * (e * a + n),
								u = o.color.light;
							e >= l &&
								n >= l &&
								e < a - l &&
								n < a - l &&
								(u =
									h[
										r[Math.floor((e - l) / s) * i + Math.floor((n - l) / s)]
											? 1
											: 0
									]),
								(t[c++] = u.r),
								(t[c++] = u.g),
								(t[c++] = u.b),
								(t[c] = u.a);
						}
				});
		},
		95806: (t) => {
			function e(t, e) {
				if (!t.length && !e.length) return 1;
				if (!t.length || !e.length) return 0;
				if (t.toUpperCase() === e.toUpperCase()) return 1;
				if (1 === t.length && 1 === e.length) return 0;
				const n = i(t),
					o = i(e),
					r = n.length + o.length;
				let s = 0;
				return (
					n.forEach((t) => {
						for (let e, n = 0; (e = o[n]); n++)
							if (t === e) {
								s++, o.splice(n, 1);
								break;
							}
					}),
					(2 * s) / r
				);
			}
			function n(t) {
				return Array.isArray(t) ? t.reduce((t, e) => t.concat(n(e)), []) : [t];
			}
			function o(t) {
				const e = [];
				for (let n = 0, o = t.length - 1; n < o; n++)
					e[n] = t.substring(n, n + 2);
				return e;
			}
			function i(t) {
				return n(t.toUpperCase().split(' ').map(o));
			}
			t.exports = {
				compareTwoStrings: e,
				findBestMatch: function (t, n) {
					if (
						!(function (t, e) {
							return (
								'string' == typeof t &&
								!!Array.isArray(e) &&
								!!e.length &&
								!e.find((t) => 'string' != typeof t)
							);
						})(t, n)
					)
						throw new Error(
							'Bad arguments: First argument should be a string, second should be an array of strings'
						);
					const o = n.map((n) => ({target: n, rating: e(t, n)}));
					return {
						ratings: o,
						bestMatch: Array.from(o).sort((t, e) => e.rating - t.rating)[0],
					};
				},
			};
		},
		23725: (t, e, n) => {
			var o = n(25108),
				i = o.debug || o.log;
			t.exports = {
				load: function (t, e) {
					var r = Object.assign(
						{
							sync: !1,
							libUrl:
								'https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js',
						},
						t
					);
					return r.sync
						? (function (t) {
								return (
									a(
										t.libUrl,
										function () {
											i('zxcvbn loaded'), (l = n.g.zxcvbn);
										},
										function () {
											o.error(new Error('Cannot load zxcvbn'));
										}
									),
									function (t, e) {
										return l
											? l(t, e)
											: {
													password: t,
													user_inputs: e,
													guesses: -1,
													guesses_log10: -1,
													crack_times_seconds: -1,
													crack_times_display: -1,
													score: -1,
													feedback: {suggestions: [], warning: ''},
													sequence: [],
													calc_time: 0,
											  };
									}
								);
						  })(r)
						: (function (t, e) {
								if ('function' != typeof e)
									return new Promise(function (e, o) {
										a(
											t.libUrl,
											function () {
												e(n.g.zxcvbn);
											},
											function () {
												o(new Error('Cannot load zxcvbn'));
											}
										);
									});
								a(
									t.libUrl,
									function () {
										e(null, n.g.zxcvbn);
									},
									function () {
										e(new Error('Cannot load zxcvbn'));
									}
								);
						  })(r, e);
				},
			};
			var r = !1,
				s = 0;
			function a(t, e, o) {
				if (r) 1 === s ? e() : -1 === s && o();
				else {
					r = !0;
					var i = n.g.document.getElementsByTagName('head')[0],
						a = n.g.document.createElement('script');
					(a.type = 'text/javascript'),
						(a.async = !0),
						(a.onload = function () {
							(s = 1), e();
						}),
						(a.onerror = function () {
							(s = -1), o();
						}),
						(a.src = t),
						i.appendChild(a);
				}
			}
			var l = null;
		},
		58811: (t, e, n) => {
			'use strict';
			n.d(e, {Z: () => o});
			const o = function (t, e) {
				for (var n, o = -1, i = t.length; ++o < i; ) {
					var r = e(t[o]);
					void 0 !== r && (n = void 0 === n ? r : n + r);
				}
				return n;
			};
		},
		9959: (t, e, n) => {
			'use strict';
			n.d(e, {Z: () => c});
			var o = n(74752);
			const i = function (t, e, n, o) {
				for (var i = -1, r = null == t ? 0 : t.length; ++i < r; ) {
					var s = t[i];
					e(o, s, n(s), t);
				}
				return o;
			};
			var r = n(54356);
			const s = function (t, e, n, o) {
				return (
					(0, r.Z)(t, function (t, i, r) {
						e(o, t, n(t), r);
					}),
					o
				);
			};
			var a = n(61324),
				l = n(19475);
			var h = Object.prototype.hasOwnProperty;
			const c =
				((u = function (t, e, n) {
					h.call(t, n) ? t[n].push(e) : (0, o.Z)(t, n, [e]);
				}),
				function (t, e) {
					var n = (0, l.Z)(t) ? i : s,
						o = d ? d() : {};
					return n(t, u, (0, a.Z)(e, 2), o);
				});
			var u, d;
		},
		54783: (t, e, n) => {
			'use strict';
			n.d(e, {Z: () => r});
			var o = n(61324),
				i = n(58811);
			const r = function (t, e) {
				return (function (t, e) {
					var n = null == t ? 0 : t.length;
					return n ? (0, i.Z)(t, e) / n : NaN;
				})(t, (0, o.Z)(e, 2));
			};
		},
		66090: (t, e, n) => {
			'use strict';
			n.d(e, {Z: () => r});
			var o = n(61324),
				i = n(58811);
			const r = function (t, e) {
				return t && t.length ? (0, i.Z)(t, (0, o.Z)(e, 2)) : 0;
			};
		},
	},
]);
