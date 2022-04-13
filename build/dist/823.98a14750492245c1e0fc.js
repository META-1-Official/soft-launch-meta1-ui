/*! For license information please see 823.98a14750492245c1e0fc.js.LICENSE.txt */
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[823],
	{
		39144: (t, e, n) => {
			'use strict';
			n.d(e, {Z: () => m});
			var r = n(4942),
				a = n(87462),
				i = n(67294),
				o = n(94184),
				l = n.n(o),
				s = n(98423),
				u = n(65632);
			const c = function (t) {
				var e = t.prefixCls,
					n = t.className,
					o = t.hoverable,
					s = void 0 === o || o,
					c = (function (t, e) {
						var n = {};
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) &&
								e.indexOf(r) < 0 &&
								(n[r] = t[r]);
						if (
							null != t &&
							'function' == typeof Object.getOwnPropertySymbols
						) {
							var a = 0;
							for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
								e.indexOf(r[a]) < 0 &&
									Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
									(n[r[a]] = t[r[a]]);
						}
						return n;
					})(t, ['prefixCls', 'className', 'hoverable']);
				return i.createElement(u.C, null, function (t) {
					var o = (0, t.getPrefixCls)('card', e),
						u = l()(
							''.concat(o, '-grid'),
							n,
							(0, r.Z)({}, ''.concat(o, '-grid-hoverable'), s)
						);
					return i.createElement('div', (0, a.Z)({}, c, {className: u}));
				});
			};
			var d = n(47428),
				h = n(71230),
				f = n(15746),
				g = n(97647),
				p = i.forwardRef(function (t, e) {
					var n,
						o,
						p,
						m = i.useContext(u.E_),
						v = m.getPrefixCls,
						b = m.direction,
						x = i.useContext(g.Z),
						y = t.prefixCls,
						_ = t.className,
						k = t.extra,
						w = t.headStyle,
						M = void 0 === w ? {} : w,
						C = t.bodyStyle,
						S = void 0 === C ? {} : C,
						P = t.title,
						A = t.loading,
						D = t.bordered,
						O = void 0 === D || D,
						T = t.size,
						I = t.type,
						F = t.cover,
						L = t.actions,
						E = t.tabList,
						R = t.children,
						N = t.activeTabKey,
						z = t.defaultActiveTabKey,
						B = t.tabBarExtraContent,
						W = t.hoverable,
						V = t.tabProps,
						j = void 0 === V ? {} : V,
						H = (function (t, e) {
							var n = {};
							for (var r in t)
								Object.prototype.hasOwnProperty.call(t, r) &&
									e.indexOf(r) < 0 &&
									(n[r] = t[r]);
							if (
								null != t &&
								'function' == typeof Object.getOwnPropertySymbols
							) {
								var a = 0;
								for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
									e.indexOf(r[a]) < 0 &&
										Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
										(n[r[a]] = t[r[a]]);
							}
							return n;
						})(t, [
							'prefixCls',
							'className',
							'extra',
							'headStyle',
							'bodyStyle',
							'title',
							'loading',
							'bordered',
							'size',
							'type',
							'cover',
							'actions',
							'tabList',
							'children',
							'activeTabKey',
							'defaultActiveTabKey',
							'tabBarExtraContent',
							'hoverable',
							'tabProps',
						]),
						q = v('card', y),
						U = 0 === S.padding || '0px' === S.padding ? {padding: 24} : void 0,
						Z = i.createElement('div', {
							className: ''.concat(q, '-loading-block'),
						}),
						Y = i.createElement(
							'div',
							{className: ''.concat(q, '-loading-content'), style: U},
							i.createElement(
								h.Z,
								{gutter: 8},
								i.createElement(f.Z, {span: 22}, Z)
							),
							i.createElement(
								h.Z,
								{gutter: 8},
								i.createElement(f.Z, {span: 8}, Z),
								i.createElement(f.Z, {span: 15}, Z)
							),
							i.createElement(
								h.Z,
								{gutter: 8},
								i.createElement(f.Z, {span: 6}, Z),
								i.createElement(f.Z, {span: 18}, Z)
							),
							i.createElement(
								h.Z,
								{gutter: 8},
								i.createElement(f.Z, {span: 13}, Z),
								i.createElement(f.Z, {span: 9}, Z)
							),
							i.createElement(
								h.Z,
								{gutter: 8},
								i.createElement(f.Z, {span: 4}, Z),
								i.createElement(f.Z, {span: 3}, Z),
								i.createElement(f.Z, {span: 16}, Z)
							)
						),
						K = void 0 !== N,
						$ = (0, a.Z)(
							(0, a.Z)({}, j),
							((n = {}),
							(0, r.Z)(n, K ? 'activeKey' : 'defaultActiveKey', K ? N : z),
							(0, r.Z)(n, 'tabBarExtraContent', B),
							n)
						),
						G =
							E && E.length
								? i.createElement(
										d.Z,
										(0, a.Z)({size: 'large'}, $, {
											className: ''.concat(q, '-head-tabs'),
											onChange: function (e) {
												var n;
												null === (n = t.onTabChange) ||
													void 0 === n ||
													n.call(t, e);
											},
										}),
										E.map(function (t) {
											return i.createElement(d.Z.TabPane, {
												tab: t.tab,
												disabled: t.disabled,
												key: t.key,
											});
										})
								  )
								: null;
					(P || k || G) &&
						(p = i.createElement(
							'div',
							{className: ''.concat(q, '-head'), style: M},
							i.createElement(
								'div',
								{className: ''.concat(q, '-head-wrapper')},
								P &&
									i.createElement(
										'div',
										{className: ''.concat(q, '-head-title')},
										P
									),
								k &&
									i.createElement('div', {className: ''.concat(q, '-extra')}, k)
							),
							G
						));
					var X,
						J = F
							? i.createElement('div', {className: ''.concat(q, '-cover')}, F)
							: null,
						Q = i.createElement(
							'div',
							{className: ''.concat(q, '-body'), style: S},
							A ? Y : R
						),
						tt =
							L && L.length
								? i.createElement(
										'ul',
										{className: ''.concat(q, '-actions')},
										(function (t) {
											return t.map(function (e, n) {
												return i.createElement(
													'li',
													{
														style: {width: ''.concat(100 / t.length, '%')},
														key: 'action-'.concat(n),
													},
													i.createElement('span', null, e)
												);
											});
										})(L)
								  )
								: null,
						et = (0, s.Z)(H, ['onTabChange']),
						nt = T || x,
						rt = l()(
							q,
							((o = {}),
							(0, r.Z)(o, ''.concat(q, '-loading'), A),
							(0, r.Z)(o, ''.concat(q, '-bordered'), O),
							(0, r.Z)(o, ''.concat(q, '-hoverable'), W),
							(0, r.Z)(
								o,
								''.concat(q, '-contain-grid'),
								(i.Children.forEach(t.children, function (t) {
									t && t.type && t.type === c && (X = !0);
								}),
								X)
							),
							(0, r.Z)(o, ''.concat(q, '-contain-tabs'), E && E.length),
							(0, r.Z)(o, ''.concat(q, '-').concat(nt), nt),
							(0, r.Z)(o, ''.concat(q, '-type-').concat(I), !!I),
							(0, r.Z)(o, ''.concat(q, '-rtl'), 'rtl' === b),
							o),
							_
						);
					return i.createElement(
						'div',
						(0, a.Z)({ref: e}, et, {className: rt}),
						p,
						J,
						Q,
						tt
					);
				});
			(p.Grid = c),
				(p.Meta = function (t) {
					return i.createElement(u.C, null, function (e) {
						var n = e.getPrefixCls,
							r = t.prefixCls,
							o = t.className,
							s = t.avatar,
							u = t.title,
							c = t.description,
							d = (function (t, e) {
								var n = {};
								for (var r in t)
									Object.prototype.hasOwnProperty.call(t, r) &&
										e.indexOf(r) < 0 &&
										(n[r] = t[r]);
								if (
									null != t &&
									'function' == typeof Object.getOwnPropertySymbols
								) {
									var a = 0;
									for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
										e.indexOf(r[a]) < 0 &&
											Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
											(n[r[a]] = t[r[a]]);
								}
								return n;
							})(t, [
								'prefixCls',
								'className',
								'avatar',
								'title',
								'description',
							]),
							h = n('card', r),
							f = l()(''.concat(h, '-meta'), o),
							g = s
								? i.createElement(
										'div',
										{className: ''.concat(h, '-meta-avatar')},
										s
								  )
								: null,
							p = u
								? i.createElement(
										'div',
										{className: ''.concat(h, '-meta-title')},
										u
								  )
								: null,
							m = c
								? i.createElement(
										'div',
										{className: ''.concat(h, '-meta-description')},
										c
								  )
								: null,
							v =
								p || m
									? i.createElement(
											'div',
											{className: ''.concat(h, '-meta-detail')},
											p,
											m
									  )
									: null;
						return i.createElement(
							'div',
							(0, a.Z)({}, d, {className: f}),
							g,
							v
						);
					});
				});
			const m = p;
		},
		17757: function (t, e, n) {
			var r = n(25108);
			t.exports = (function (t) {
				'use strict';
				t = t && t.hasOwnProperty('default') ? t.default : t;
				var e = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50],
					},
					n = (function (t, e) {
						return t((e = {exports: {}}), e.exports), e.exports;
					})(function (t) {
						var n = {};
						for (var r in e) e.hasOwnProperty(r) && (n[e[r]] = r);
						var a = (t.exports = {
							rgb: {channels: 3, labels: 'rgb'},
							hsl: {channels: 3, labels: 'hsl'},
							hsv: {channels: 3, labels: 'hsv'},
							hwb: {channels: 3, labels: 'hwb'},
							cmyk: {channels: 4, labels: 'cmyk'},
							xyz: {channels: 3, labels: 'xyz'},
							lab: {channels: 3, labels: 'lab'},
							lch: {channels: 3, labels: 'lch'},
							hex: {channels: 1, labels: ['hex']},
							keyword: {channels: 1, labels: ['keyword']},
							ansi16: {channels: 1, labels: ['ansi16']},
							ansi256: {channels: 1, labels: ['ansi256']},
							hcg: {channels: 3, labels: ['h', 'c', 'g']},
							apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
							gray: {channels: 1, labels: ['gray']},
						});
						for (var i in a)
							if (a.hasOwnProperty(i)) {
								if (!('channels' in a[i]))
									throw new Error('missing channels property: ' + i);
								if (!('labels' in a[i]))
									throw new Error('missing channel labels property: ' + i);
								if (a[i].labels.length !== a[i].channels)
									throw new Error('channel and label counts mismatch: ' + i);
								var o = a[i].channels,
									l = a[i].labels;
								delete a[i].channels,
									delete a[i].labels,
									Object.defineProperty(a[i], 'channels', {value: o}),
									Object.defineProperty(a[i], 'labels', {value: l});
							}
						(a.rgb.hsl = function (t) {
							var e,
								n,
								r = t[0] / 255,
								a = t[1] / 255,
								i = t[2] / 255,
								o = Math.min(r, a, i),
								l = Math.max(r, a, i),
								s = l - o;
							return (
								l === o
									? (e = 0)
									: r === l
									? (e = (a - i) / s)
									: a === l
									? (e = 2 + (i - r) / s)
									: i === l && (e = 4 + (r - a) / s),
								(e = Math.min(60 * e, 360)) < 0 && (e += 360),
								(n = (o + l) / 2),
								[
									e,
									100 *
										(l === o ? 0 : n <= 0.5 ? s / (l + o) : s / (2 - l - o)),
									100 * n,
								]
							);
						}),
							(a.rgb.hsv = function (t) {
								var e,
									n,
									r,
									a,
									i,
									o = t[0] / 255,
									l = t[1] / 255,
									s = t[2] / 255,
									u = Math.max(o, l, s),
									c = u - Math.min(o, l, s),
									d = function (t) {
										return (u - t) / 6 / c + 0.5;
									};
								return (
									0 === c
										? (a = i = 0)
										: ((i = c / u),
										  (e = d(o)),
										  (n = d(l)),
										  (r = d(s)),
										  o === u
												? (a = r - n)
												: l === u
												? (a = 1 / 3 + e - r)
												: s === u && (a = 2 / 3 + n - e),
										  a < 0 ? (a += 1) : a > 1 && (a -= 1)),
									[360 * a, 100 * i, 100 * u]
								);
							}),
							(a.rgb.hwb = function (t) {
								var e = t[0],
									n = t[1],
									r = t[2];
								return [
									a.rgb.hsl(t)[0],
									(1 / 255) * Math.min(e, Math.min(n, r)) * 100,
									100 * (r = 1 - (1 / 255) * Math.max(e, Math.max(n, r))),
								];
							}),
							(a.rgb.cmyk = function (t) {
								var e,
									n = t[0] / 255,
									r = t[1] / 255,
									a = t[2] / 255;
								return [
									100 *
										((1 - n - (e = Math.min(1 - n, 1 - r, 1 - a))) / (1 - e) ||
											0),
									100 * ((1 - r - e) / (1 - e) || 0),
									100 * ((1 - a - e) / (1 - e) || 0),
									100 * e,
								];
							}),
							(a.rgb.keyword = function (t) {
								var r = n[t];
								if (r) return r;
								var a,
									i,
									o,
									l = 1 / 0;
								for (var s in e)
									if (e.hasOwnProperty(s)) {
										var u =
											((i = t),
											(o = e[s]),
											Math.pow(i[0] - o[0], 2) +
												Math.pow(i[1] - o[1], 2) +
												Math.pow(i[2] - o[2], 2));
										u < l && ((l = u), (a = s));
									}
								return a;
							}),
							(a.keyword.rgb = function (t) {
								return e[t];
							}),
							(a.rgb.xyz = function (t) {
								var e = t[0] / 255,
									n = t[1] / 255,
									r = t[2] / 255;
								return [
									100 *
										(0.4124 *
											(e =
												e > 0.04045
													? Math.pow((e + 0.055) / 1.055, 2.4)
													: e / 12.92) +
											0.3576 *
												(n =
													n > 0.04045
														? Math.pow((n + 0.055) / 1.055, 2.4)
														: n / 12.92) +
											0.1805 *
												(r =
													r > 0.04045
														? Math.pow((r + 0.055) / 1.055, 2.4)
														: r / 12.92)),
									100 * (0.2126 * e + 0.7152 * n + 0.0722 * r),
									100 * (0.0193 * e + 0.1192 * n + 0.9505 * r),
								];
							}),
							(a.rgb.lab = function (t) {
								var e = a.rgb.xyz(t),
									n = e[0],
									r = e[1],
									i = e[2];
								return (
									(r /= 100),
									(i /= 108.883),
									(n =
										(n /= 95.047) > 0.008856
											? Math.pow(n, 1 / 3)
											: 7.787 * n + 16 / 116),
									[
										116 *
											(r =
												r > 0.008856
													? Math.pow(r, 1 / 3)
													: 7.787 * r + 16 / 116) -
											16,
										500 * (n - r),
										200 *
											(r -
												(i =
													i > 0.008856
														? Math.pow(i, 1 / 3)
														: 7.787 * i + 16 / 116)),
									]
								);
							}),
							(a.hsl.rgb = function (t) {
								var e,
									n,
									r,
									a,
									i,
									o = t[0] / 360,
									l = t[1] / 100,
									s = t[2] / 100;
								if (0 === l) return [(i = 255 * s), i, i];
								(e = 2 * s - (n = s < 0.5 ? s * (1 + l) : s + l - s * l)),
									(a = [0, 0, 0]);
								for (var u = 0; u < 3; u++)
									(r = o + (1 / 3) * -(u - 1)) < 0 && r++,
										r > 1 && r--,
										(i =
											6 * r < 1
												? e + 6 * (n - e) * r
												: 2 * r < 1
												? n
												: 3 * r < 2
												? e + (n - e) * (2 / 3 - r) * 6
												: e),
										(a[u] = 255 * i);
								return a;
							}),
							(a.hsl.hsv = function (t) {
								var e = t[0],
									n = t[1] / 100,
									r = t[2] / 100,
									a = n,
									i = Math.max(r, 0.01);
								return (
									(n *= (r *= 2) <= 1 ? r : 2 - r),
									(a *= i <= 1 ? i : 2 - i),
									[
										e,
										100 * (0 === r ? (2 * a) / (i + a) : (2 * n) / (r + n)),
										((r + n) / 2) * 100,
									]
								);
							}),
							(a.hsv.rgb = function (t) {
								var e = t[0] / 60,
									n = t[1] / 100,
									r = t[2] / 100,
									a = Math.floor(e) % 6,
									i = e - Math.floor(e),
									o = 255 * r * (1 - n),
									l = 255 * r * (1 - n * i),
									s = 255 * r * (1 - n * (1 - i));
								switch (((r *= 255), a)) {
									case 0:
										return [r, s, o];
									case 1:
										return [l, r, o];
									case 2:
										return [o, r, s];
									case 3:
										return [o, l, r];
									case 4:
										return [s, o, r];
									case 5:
										return [r, o, l];
								}
							}),
							(a.hsv.hsl = function (t) {
								var e,
									n,
									r,
									a = t[0],
									i = t[1] / 100,
									o = t[2] / 100,
									l = Math.max(o, 0.01);
								return (
									(r = (2 - i) * o),
									(n = i * l),
									[
										a,
										100 * (n = (n /= (e = (2 - i) * l) <= 1 ? e : 2 - e) || 0),
										100 * (r /= 2),
									]
								);
							}),
							(a.hwb.rgb = function (t) {
								var e,
									n,
									r,
									a,
									i,
									o,
									l,
									s = t[0] / 360,
									u = t[1] / 100,
									c = t[2] / 100,
									d = u + c;
								switch (
									(d > 1 && ((u /= d), (c /= d)),
									(r = 6 * s - (e = Math.floor(6 * s))),
									0 != (1 & e) && (r = 1 - r),
									(a = u + r * ((n = 1 - c) - u)),
									e)
								) {
									default:
									case 6:
									case 0:
										(i = n), (o = a), (l = u);
										break;
									case 1:
										(i = a), (o = n), (l = u);
										break;
									case 2:
										(i = u), (o = n), (l = a);
										break;
									case 3:
										(i = u), (o = a), (l = n);
										break;
									case 4:
										(i = a), (o = u), (l = n);
										break;
									case 5:
										(i = n), (o = u), (l = a);
								}
								return [255 * i, 255 * o, 255 * l];
							}),
							(a.cmyk.rgb = function (t) {
								var e = t[0] / 100,
									n = t[1] / 100,
									r = t[2] / 100,
									a = t[3] / 100;
								return [
									255 * (1 - Math.min(1, e * (1 - a) + a)),
									255 * (1 - Math.min(1, n * (1 - a) + a)),
									255 * (1 - Math.min(1, r * (1 - a) + a)),
								];
							}),
							(a.xyz.rgb = function (t) {
								var e,
									n,
									r,
									a = t[0] / 100,
									i = t[1] / 100,
									o = t[2] / 100;
								return (
									(n = -0.9689 * a + 1.8758 * i + 0.0415 * o),
									(r = 0.0557 * a + -0.204 * i + 1.057 * o),
									(e =
										(e = 3.2406 * a + -1.5372 * i + -0.4986 * o) > 0.0031308
											? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
											: 12.92 * e),
									(n =
										n > 0.0031308
											? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
											: 12.92 * n),
									(r =
										r > 0.0031308
											? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
											: 12.92 * r),
									[
										255 * (e = Math.min(Math.max(0, e), 1)),
										255 * (n = Math.min(Math.max(0, n), 1)),
										255 * (r = Math.min(Math.max(0, r), 1)),
									]
								);
							}),
							(a.xyz.lab = function (t) {
								var e = t[0],
									n = t[1],
									r = t[2];
								return (
									(n /= 100),
									(r /= 108.883),
									(e =
										(e /= 95.047) > 0.008856
											? Math.pow(e, 1 / 3)
											: 7.787 * e + 16 / 116),
									[
										116 *
											(n =
												n > 0.008856
													? Math.pow(n, 1 / 3)
													: 7.787 * n + 16 / 116) -
											16,
										500 * (e - n),
										200 *
											(n -
												(r =
													r > 0.008856
														? Math.pow(r, 1 / 3)
														: 7.787 * r + 16 / 116)),
									]
								);
							}),
							(a.lab.xyz = function (t) {
								var e,
									n,
									r,
									a = t[0];
								(e = t[1] / 500 + (n = (a + 16) / 116)), (r = n - t[2] / 200);
								var i = Math.pow(n, 3),
									o = Math.pow(e, 3),
									l = Math.pow(r, 3);
								return (
									(n = i > 0.008856 ? i : (n - 16 / 116) / 7.787),
									(e = o > 0.008856 ? o : (e - 16 / 116) / 7.787),
									(r = l > 0.008856 ? l : (r - 16 / 116) / 7.787),
									[(e *= 95.047), (n *= 100), (r *= 108.883)]
								);
							}),
							(a.lab.lch = function (t) {
								var e,
									n = t[0],
									r = t[1],
									a = t[2];
								return (
									(e = (360 * Math.atan2(a, r)) / 2 / Math.PI) < 0 &&
										(e += 360),
									[n, Math.sqrt(r * r + a * a), e]
								);
							}),
							(a.lch.lab = function (t) {
								var e,
									n = t[0],
									r = t[1];
								return (
									(e = (t[2] / 360) * 2 * Math.PI),
									[n, r * Math.cos(e), r * Math.sin(e)]
								);
							}),
							(a.rgb.ansi16 = function (t) {
								var e = t[0],
									n = t[1],
									r = t[2],
									i = 1 in arguments ? arguments[1] : a.rgb.hsv(t)[2];
								if (0 === (i = Math.round(i / 50))) return 30;
								var o =
									30 +
									((Math.round(r / 255) << 2) |
										(Math.round(n / 255) << 1) |
										Math.round(e / 255));
								return 2 === i && (o += 60), o;
							}),
							(a.hsv.ansi16 = function (t) {
								return a.rgb.ansi16(a.hsv.rgb(t), t[2]);
							}),
							(a.rgb.ansi256 = function (t) {
								var e = t[0],
									n = t[1],
									r = t[2];
								return e === n && n === r
									? e < 8
										? 16
										: e > 248
										? 231
										: Math.round(((e - 8) / 247) * 24) + 232
									: 16 +
											36 * Math.round((e / 255) * 5) +
											6 * Math.round((n / 255) * 5) +
											Math.round((r / 255) * 5);
							}),
							(a.ansi16.rgb = function (t) {
								var e = t % 10;
								if (0 === e || 7 === e)
									return t > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e];
								var n = 0.5 * (1 + ~~(t > 50));
								return [
									(1 & e) * n * 255,
									((e >> 1) & 1) * n * 255,
									((e >> 2) & 1) * n * 255,
								];
							}),
							(a.ansi256.rgb = function (t) {
								if (t >= 232) {
									var e = 10 * (t - 232) + 8;
									return [e, e, e];
								}
								var n;
								return (
									(t -= 16),
									[
										(Math.floor(t / 36) / 5) * 255,
										(Math.floor((n = t % 36) / 6) / 5) * 255,
										((n % 6) / 5) * 255,
									]
								);
							}),
							(a.rgb.hex = function (t) {
								var e = (
									((255 & Math.round(t[0])) << 16) +
									((255 & Math.round(t[1])) << 8) +
									(255 & Math.round(t[2]))
								)
									.toString(16)
									.toUpperCase();
								return '000000'.substring(e.length) + e;
							}),
							(a.hex.rgb = function (t) {
								var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
								if (!e) return [0, 0, 0];
								var n = e[0];
								3 === e[0].length &&
									(n = n
										.split('')
										.map(function (t) {
											return t + t;
										})
										.join(''));
								var r = parseInt(n, 16);
								return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
							}),
							(a.rgb.hcg = function (t) {
								var e,
									n = t[0] / 255,
									r = t[1] / 255,
									a = t[2] / 255,
									i = Math.max(Math.max(n, r), a),
									o = Math.min(Math.min(n, r), a),
									l = i - o;
								return (
									(e =
										l <= 0
											? 0
											: i === n
											? ((r - a) / l) % 6
											: i === r
											? 2 + (a - n) / l
											: 4 + (n - r) / l + 4),
									(e /= 6),
									[360 * (e %= 1), 100 * l, 100 * (l < 1 ? o / (1 - l) : 0)]
								);
							}),
							(a.hsl.hcg = function (t) {
								var e,
									n = t[1] / 100,
									r = t[2] / 100,
									a = 0;
								return (
									(e = r < 0.5 ? 2 * n * r : 2 * n * (1 - r)) < 1 &&
										(a = (r - 0.5 * e) / (1 - e)),
									[t[0], 100 * e, 100 * a]
								);
							}),
							(a.hsv.hcg = function (t) {
								var e = t[1] / 100,
									n = t[2] / 100,
									r = e * n,
									a = 0;
								return (
									r < 1 && (a = (n - r) / (1 - r)), [t[0], 100 * r, 100 * a]
								);
							}),
							(a.hcg.rgb = function (t) {
								var e = t[0] / 360,
									n = t[1] / 100,
									r = t[2] / 100;
								if (0 === n) return [255 * r, 255 * r, 255 * r];
								var a,
									i = [0, 0, 0],
									o = (e % 1) * 6,
									l = o % 1,
									s = 1 - l;
								switch (Math.floor(o)) {
									case 0:
										(i[0] = 1), (i[1] = l), (i[2] = 0);
										break;
									case 1:
										(i[0] = s), (i[1] = 1), (i[2] = 0);
										break;
									case 2:
										(i[0] = 0), (i[1] = 1), (i[2] = l);
										break;
									case 3:
										(i[0] = 0), (i[1] = s), (i[2] = 1);
										break;
									case 4:
										(i[0] = l), (i[1] = 0), (i[2] = 1);
										break;
									default:
										(i[0] = 1), (i[1] = 0), (i[2] = s);
								}
								return (
									(a = (1 - n) * r),
									[
										255 * (n * i[0] + a),
										255 * (n * i[1] + a),
										255 * (n * i[2] + a),
									]
								);
							}),
							(a.hcg.hsv = function (t) {
								var e = t[1] / 100,
									n = e + (t[2] / 100) * (1 - e),
									r = 0;
								return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n];
							}),
							(a.hcg.hsl = function (t) {
								var e = t[1] / 100,
									n = (t[2] / 100) * (1 - e) + 0.5 * e,
									r = 0;
								return (
									n > 0 && n < 0.5
										? (r = e / (2 * n))
										: n >= 0.5 && n < 1 && (r = e / (2 * (1 - n))),
									[t[0], 100 * r, 100 * n]
								);
							}),
							(a.hcg.hwb = function (t) {
								var e = t[1] / 100,
									n = e + (t[2] / 100) * (1 - e);
								return [t[0], 100 * (n - e), 100 * (1 - n)];
							}),
							(a.hwb.hcg = function (t) {
								var e = t[1] / 100,
									n = 1 - t[2] / 100,
									r = n - e,
									a = 0;
								return (
									r < 1 && (a = (n - r) / (1 - r)), [t[0], 100 * r, 100 * a]
								);
							}),
							(a.apple.rgb = function (t) {
								return [
									(t[0] / 65535) * 255,
									(t[1] / 65535) * 255,
									(t[2] / 65535) * 255,
								];
							}),
							(a.rgb.apple = function (t) {
								return [
									(t[0] / 255) * 65535,
									(t[1] / 255) * 65535,
									(t[2] / 255) * 65535,
								];
							}),
							(a.gray.rgb = function (t) {
								return [
									(t[0] / 100) * 255,
									(t[0] / 100) * 255,
									(t[0] / 100) * 255,
								];
							}),
							(a.gray.hsl = a.gray.hsv =
								function (t) {
									return [0, 0, t[0]];
								}),
							(a.gray.hwb = function (t) {
								return [0, 100, t[0]];
							}),
							(a.gray.cmyk = function (t) {
								return [0, 0, 0, t[0]];
							}),
							(a.gray.lab = function (t) {
								return [t[0], 0, 0];
							}),
							(a.gray.hex = function (t) {
								var e = 255 & Math.round((t[0] / 100) * 255),
									n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
								return '000000'.substring(n.length) + n;
							}),
							(a.rgb.gray = function (t) {
								return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
							});
					});
				function a(t) {
					var e = (function () {
							for (
								var t = {}, e = Object.keys(n), r = e.length, a = 0;
								a < r;
								a++
							)
								t[e[a]] = {distance: -1, parent: null};
							return t;
						})(),
						r = [t];
					for (e[t].distance = 0; r.length; )
						for (
							var a = r.pop(), i = Object.keys(n[a]), o = i.length, l = 0;
							l < o;
							l++
						) {
							var s = i[l],
								u = e[s];
							-1 === u.distance &&
								((u.distance = e[a].distance + 1),
								(u.parent = a),
								r.unshift(s));
						}
					return e;
				}
				function i(t, e) {
					return function (n) {
						return e(t(n));
					};
				}
				function o(t, e) {
					for (
						var r = [e[t].parent, t], a = n[e[t].parent][t], o = e[t].parent;
						e[o].parent;

					)
						r.unshift(e[o].parent),
							(a = i(n[e[o].parent][o], a)),
							(o = e[o].parent);
					return (a.conversion = r), a;
				}
				n.rgb,
					n.hsl,
					n.hsv,
					n.hwb,
					n.cmyk,
					n.xyz,
					n.lab,
					n.lch,
					n.hex,
					n.keyword,
					n.ansi16,
					n.ansi256,
					n.hcg,
					n.apple,
					n.gray;
				var l = {};
				Object.keys(n).forEach(function (t) {
					(l[t] = {}),
						Object.defineProperty(l[t], 'channels', {value: n[t].channels}),
						Object.defineProperty(l[t], 'labels', {value: n[t].labels});
					var e = (function (t) {
						for (
							var e = a(t), n = {}, r = Object.keys(e), i = r.length, l = 0;
							l < i;
							l++
						) {
							var s = r[l];
							null !== e[s].parent && (n[s] = o(s, e));
						}
						return n;
					})(t);
					Object.keys(e).forEach(function (n) {
						var r = e[n];
						(l[t][n] = (function (t) {
							var e = function (e) {
								if (null == e) return e;
								arguments.length > 1 &&
									(e = Array.prototype.slice.call(arguments));
								var n = t(e);
								if ('object' == typeof n)
									for (var r = n.length, a = 0; a < r; a++)
										n[a] = Math.round(n[a]);
								return n;
							};
							return 'conversion' in t && (e.conversion = t.conversion), e;
						})(r)),
							(l[t][n].raw = (function (t) {
								var e = function (e) {
									return null == e
										? e
										: (arguments.length > 1 &&
												(e = Array.prototype.slice.call(arguments)),
										  t(e));
								};
								return 'conversion' in t && (e.conversion = t.conversion), e;
							})(r));
					});
				});
				var s = l,
					u = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50],
					},
					c = {
						getRgba: d,
						getHsla: h,
						getRgb: function (t) {
							var e = d(t);
							return e && e.slice(0, 3);
						},
						getHsl: function (t) {
							var e = h(t);
							return e && e.slice(0, 3);
						},
						getHwb: f,
						getAlpha: function (t) {
							var e = d(t);
							return e || (e = h(t)) || (e = f(t)) ? e[3] : void 0;
						},
						hexString: function (t, e) {
							return (
								(e = void 0 !== e && 3 === t.length ? e : t[3]),
								'#' +
									b(t[0]) +
									b(t[1]) +
									b(t[2]) +
									(e >= 0 && e < 1 ? b(Math.round(255 * e)) : '')
							);
						},
						rgbString: function (t, e) {
							return e < 1 || (t[3] && t[3] < 1)
								? g(t, e)
								: 'rgb(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
						},
						rgbaString: g,
						percentString: function (t, e) {
							return e < 1 || (t[3] && t[3] < 1)
								? p(t, e)
								: 'rgb(' +
										Math.round((t[0] / 255) * 100) +
										'%, ' +
										Math.round((t[1] / 255) * 100) +
										'%, ' +
										Math.round((t[2] / 255) * 100) +
										'%)';
						},
						percentaString: p,
						hslString: function (t, e) {
							return e < 1 || (t[3] && t[3] < 1)
								? m(t, e)
								: 'hsl(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%)';
						},
						hslaString: m,
						hwbString: function (t, e) {
							return (
								void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
								'hwb(' +
									t[0] +
									', ' +
									t[1] +
									'%, ' +
									t[2] +
									'%' +
									(void 0 !== e && 1 !== e ? ', ' + e : '') +
									')'
							);
						},
						keyword: function (t) {
							return x[t.slice(0, 3)];
						},
					};
				function d(t) {
					if (t) {
						var e = [0, 0, 0],
							n = 1,
							r = t.match(/^#([a-fA-F0-9]{3,4})$/i),
							a = '';
						if (r) {
							a = (r = r[1])[3];
							for (var i = 0; i < e.length; i++)
								e[i] = parseInt(r[i] + r[i], 16);
							a && (n = Math.round((parseInt(a + a, 16) / 255) * 100) / 100);
						} else if ((r = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
							for (a = r[2], r = r[1], i = 0; i < e.length; i++)
								e[i] = parseInt(r.slice(2 * i, 2 * i + 2), 16);
							a && (n = Math.round((parseInt(a, 16) / 255) * 100) / 100);
						} else if (
							(r = t.match(
								/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
							))
						) {
							for (i = 0; i < e.length; i++) e[i] = parseInt(r[i + 1]);
							n = parseFloat(r[4]);
						} else if (
							(r = t.match(
								/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
							))
						) {
							for (i = 0; i < e.length; i++)
								e[i] = Math.round(2.55 * parseFloat(r[i + 1]));
							n = parseFloat(r[4]);
						} else if ((r = t.match(/(\w+)/))) {
							if ('transparent' == r[1]) return [0, 0, 0, 0];
							if (!(e = u[r[1]])) return;
						}
						for (i = 0; i < e.length; i++) e[i] = v(e[i], 0, 255);
						return (n = n || 0 == n ? v(n, 0, 1) : 1), (e[3] = n), e;
					}
				}
				function h(t) {
					if (t) {
						var e = t.match(
							/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
						);
						if (e) {
							var n = parseFloat(e[4]);
							return [
								v(parseInt(e[1]), 0, 360),
								v(parseFloat(e[2]), 0, 100),
								v(parseFloat(e[3]), 0, 100),
								v(isNaN(n) ? 1 : n, 0, 1),
							];
						}
					}
				}
				function f(t) {
					if (t) {
						var e = t.match(
							/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
						);
						if (e) {
							var n = parseFloat(e[4]);
							return [
								v(parseInt(e[1]), 0, 360),
								v(parseFloat(e[2]), 0, 100),
								v(parseFloat(e[3]), 0, 100),
								v(isNaN(n) ? 1 : n, 0, 1),
							];
						}
					}
				}
				function g(t, e) {
					return (
						void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
						'rgba(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + e + ')'
					);
				}
				function p(t, e) {
					return (
						'rgba(' +
						Math.round((t[0] / 255) * 100) +
						'%, ' +
						Math.round((t[1] / 255) * 100) +
						'%, ' +
						Math.round((t[2] / 255) * 100) +
						'%, ' +
						(e || t[3] || 1) +
						')'
					);
				}
				function m(t, e) {
					return (
						void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
						'hsla(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%, ' + e + ')'
					);
				}
				function v(t, e, n) {
					return Math.min(Math.max(e, t), n);
				}
				function b(t) {
					var e = t.toString(16).toUpperCase();
					return e.length < 2 ? '0' + e : e;
				}
				var x = {};
				for (var y in u) x[u[y]] = y;
				var _ = function (t) {
					return t instanceof _
						? t
						: this instanceof _
						? ((this.valid = !1),
						  (this.values = {
								rgb: [0, 0, 0],
								hsl: [0, 0, 0],
								hsv: [0, 0, 0],
								hwb: [0, 0, 0],
								cmyk: [0, 0, 0, 0],
								alpha: 1,
						  }),
						  void ('string' == typeof t
								? (e = c.getRgba(t))
									? this.setValues('rgb', e)
									: (e = c.getHsla(t))
									? this.setValues('hsl', e)
									: (e = c.getHwb(t)) && this.setValues('hwb', e)
								: 'object' == typeof t &&
								  (void 0 !== (e = t).r || void 0 !== e.red
										? this.setValues('rgb', e)
										: void 0 !== e.l || void 0 !== e.lightness
										? this.setValues('hsl', e)
										: void 0 !== e.v || void 0 !== e.value
										? this.setValues('hsv', e)
										: void 0 !== e.w || void 0 !== e.whiteness
										? this.setValues('hwb', e)
										: (void 0 === e.c && void 0 === e.cyan) ||
										  this.setValues('cmyk', e))))
						: new _(t);
					var e;
				};
				(_.prototype = {
					isValid: function () {
						return this.valid;
					},
					rgb: function () {
						return this.setSpace('rgb', arguments);
					},
					hsl: function () {
						return this.setSpace('hsl', arguments);
					},
					hsv: function () {
						return this.setSpace('hsv', arguments);
					},
					hwb: function () {
						return this.setSpace('hwb', arguments);
					},
					cmyk: function () {
						return this.setSpace('cmyk', arguments);
					},
					rgbArray: function () {
						return this.values.rgb;
					},
					hslArray: function () {
						return this.values.hsl;
					},
					hsvArray: function () {
						return this.values.hsv;
					},
					hwbArray: function () {
						var t = this.values;
						return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
					},
					cmykArray: function () {
						return this.values.cmyk;
					},
					rgbaArray: function () {
						var t = this.values;
						return t.rgb.concat([t.alpha]);
					},
					hslaArray: function () {
						var t = this.values;
						return t.hsl.concat([t.alpha]);
					},
					alpha: function (t) {
						return void 0 === t
							? this.values.alpha
							: (this.setValues('alpha', t), this);
					},
					red: function (t) {
						return this.setChannel('rgb', 0, t);
					},
					green: function (t) {
						return this.setChannel('rgb', 1, t);
					},
					blue: function (t) {
						return this.setChannel('rgb', 2, t);
					},
					hue: function (t) {
						return (
							t && (t = (t %= 360) < 0 ? 360 + t : t),
							this.setChannel('hsl', 0, t)
						);
					},
					saturation: function (t) {
						return this.setChannel('hsl', 1, t);
					},
					lightness: function (t) {
						return this.setChannel('hsl', 2, t);
					},
					saturationv: function (t) {
						return this.setChannel('hsv', 1, t);
					},
					whiteness: function (t) {
						return this.setChannel('hwb', 1, t);
					},
					blackness: function (t) {
						return this.setChannel('hwb', 2, t);
					},
					value: function (t) {
						return this.setChannel('hsv', 2, t);
					},
					cyan: function (t) {
						return this.setChannel('cmyk', 0, t);
					},
					magenta: function (t) {
						return this.setChannel('cmyk', 1, t);
					},
					yellow: function (t) {
						return this.setChannel('cmyk', 2, t);
					},
					black: function (t) {
						return this.setChannel('cmyk', 3, t);
					},
					hexString: function () {
						return c.hexString(this.values.rgb);
					},
					rgbString: function () {
						return c.rgbString(this.values.rgb, this.values.alpha);
					},
					rgbaString: function () {
						return c.rgbaString(this.values.rgb, this.values.alpha);
					},
					percentString: function () {
						return c.percentString(this.values.rgb, this.values.alpha);
					},
					hslString: function () {
						return c.hslString(this.values.hsl, this.values.alpha);
					},
					hslaString: function () {
						return c.hslaString(this.values.hsl, this.values.alpha);
					},
					hwbString: function () {
						return c.hwbString(this.values.hwb, this.values.alpha);
					},
					keyword: function () {
						return c.keyword(this.values.rgb, this.values.alpha);
					},
					rgbNumber: function () {
						var t = this.values.rgb;
						return (t[0] << 16) | (t[1] << 8) | t[2];
					},
					luminosity: function () {
						for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
							var r = t[n] / 255;
							e[n] =
								r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
						}
						return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
					},
					contrast: function (t) {
						var e = this.luminosity(),
							n = t.luminosity();
						return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
					},
					level: function (t) {
						var e = this.contrast(t);
						return e >= 7.1 ? 'AAA' : e >= 4.5 ? 'AA' : '';
					},
					dark: function () {
						var t = this.values.rgb;
						return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
					},
					light: function () {
						return !this.dark();
					},
					negate: function () {
						for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
						return this.setValues('rgb', t), this;
					},
					lighten: function (t) {
						var e = this.values.hsl;
						return (e[2] += e[2] * t), this.setValues('hsl', e), this;
					},
					darken: function (t) {
						var e = this.values.hsl;
						return (e[2] -= e[2] * t), this.setValues('hsl', e), this;
					},
					saturate: function (t) {
						var e = this.values.hsl;
						return (e[1] += e[1] * t), this.setValues('hsl', e), this;
					},
					desaturate: function (t) {
						var e = this.values.hsl;
						return (e[1] -= e[1] * t), this.setValues('hsl', e), this;
					},
					whiten: function (t) {
						var e = this.values.hwb;
						return (e[1] += e[1] * t), this.setValues('hwb', e), this;
					},
					blacken: function (t) {
						var e = this.values.hwb;
						return (e[2] += e[2] * t), this.setValues('hwb', e), this;
					},
					greyscale: function () {
						var t = this.values.rgb,
							e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
						return this.setValues('rgb', [e, e, e]), this;
					},
					clearer: function (t) {
						var e = this.values.alpha;
						return this.setValues('alpha', e - e * t), this;
					},
					opaquer: function (t) {
						var e = this.values.alpha;
						return this.setValues('alpha', e + e * t), this;
					},
					rotate: function (t) {
						var e = this.values.hsl,
							n = (e[0] + t) % 360;
						return (e[0] = n < 0 ? 360 + n : n), this.setValues('hsl', e), this;
					},
					mix: function (t, e) {
						var n = this,
							r = t,
							a = void 0 === e ? 0.5 : e,
							i = 2 * a - 1,
							o = n.alpha() - r.alpha(),
							l = ((i * o == -1 ? i : (i + o) / (1 + i * o)) + 1) / 2,
							s = 1 - l;
						return this.rgb(
							l * n.red() + s * r.red(),
							l * n.green() + s * r.green(),
							l * n.blue() + s * r.blue()
						).alpha(n.alpha() * a + r.alpha() * (1 - a));
					},
					toJSON: function () {
						return this.rgb();
					},
					clone: function () {
						var t,
							e,
							n = new _(),
							a = this.values,
							i = n.values;
						for (var o in a)
							a.hasOwnProperty(o) &&
								((t = a[o]),
								'[object Array]' === (e = {}.toString.call(t))
									? (i[o] = t.slice(0))
									: '[object Number]' === e
									? (i[o] = t)
									: r.error('unexpected color value:', t));
						return n;
					},
				}),
					(_.prototype.spaces = {
						rgb: ['red', 'green', 'blue'],
						hsl: ['hue', 'saturation', 'lightness'],
						hsv: ['hue', 'saturation', 'value'],
						hwb: ['hue', 'whiteness', 'blackness'],
						cmyk: ['cyan', 'magenta', 'yellow', 'black'],
					}),
					(_.prototype.maxes = {
						rgb: [255, 255, 255],
						hsl: [360, 100, 100],
						hsv: [360, 100, 100],
						hwb: [360, 100, 100],
						cmyk: [100, 100, 100, 100],
					}),
					(_.prototype.getValues = function (t) {
						for (var e = this.values, n = {}, r = 0; r < t.length; r++)
							n[t.charAt(r)] = e[t][r];
						return 1 !== e.alpha && (n.a = e.alpha), n;
					}),
					(_.prototype.setValues = function (t, e) {
						var n,
							r,
							a = this.values,
							i = this.spaces,
							o = this.maxes,
							l = 1;
						if (((this.valid = !0), 'alpha' === t)) l = e;
						else if (e.length) (a[t] = e.slice(0, t.length)), (l = e[t.length]);
						else if (void 0 !== e[t.charAt(0)]) {
							for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
							l = e.a;
						} else if (void 0 !== e[i[t][0]]) {
							var u = i[t];
							for (n = 0; n < t.length; n++) a[t][n] = e[u[n]];
							l = e.alpha;
						}
						if (
							((a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l))),
							'alpha' === t)
						)
							return !1;
						for (n = 0; n < t.length; n++)
							(r = Math.max(0, Math.min(o[t][n], a[t][n]))),
								(a[t][n] = Math.round(r));
						for (var c in i) c !== t && (a[c] = s[t][c](a[t]));
						return !0;
					}),
					(_.prototype.setSpace = function (t, e) {
						var n = e[0];
						return void 0 === n
							? this.getValues(t)
							: ('number' == typeof n && (n = Array.prototype.slice.call(e)),
							  this.setValues(t, n),
							  this);
					}),
					(_.prototype.setChannel = function (t, e, n) {
						var r = this.values[t];
						return void 0 === n
							? r[e]
							: (n === r[e] || ((r[e] = n), this.setValues(t, r)), this);
					}),
					'undefined' != typeof window && (window.Color = _);
				var k = _;
				function w(t) {
					return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
				}
				var M,
					C = {
						noop: function () {},
						uid:
							((M = 0),
							function () {
								return M++;
							}),
						isNullOrUndef: function (t) {
							return null == t;
						},
						isArray: function (t) {
							if (Array.isArray && Array.isArray(t)) return !0;
							var e = Object.prototype.toString.call(t);
							return '[object' === e.substr(0, 7) && 'Array]' === e.substr(-6);
						},
						isObject: function (t) {
							return (
								null !== t &&
								'[object Object]' === Object.prototype.toString.call(t)
							);
						},
						isFinite: function (t) {
							return (
								('number' == typeof t || t instanceof Number) && isFinite(t)
							);
						},
						valueOrDefault: function (t, e) {
							return void 0 === t ? e : t;
						},
						valueAtIndexOrDefault: function (t, e, n) {
							return C.valueOrDefault(C.isArray(t) ? t[e] : t, n);
						},
						callback: function (t, e, n) {
							if (t && 'function' == typeof t.call) return t.apply(n, e);
						},
						each: function (t, e, n, r) {
							var a, i, o;
							if (C.isArray(t))
								if (((i = t.length), r))
									for (a = i - 1; a >= 0; a--) e.call(n, t[a], a);
								else for (a = 0; a < i; a++) e.call(n, t[a], a);
							else if (C.isObject(t))
								for (i = (o = Object.keys(t)).length, a = 0; a < i; a++)
									e.call(n, t[o[a]], o[a]);
						},
						arrayEquals: function (t, e) {
							var n, r, a, i;
							if (!t || !e || t.length !== e.length) return !1;
							for (n = 0, r = t.length; n < r; ++n)
								if (
									((a = t[n]),
									(i = e[n]),
									a instanceof Array && i instanceof Array)
								) {
									if (!C.arrayEquals(a, i)) return !1;
								} else if (a !== i) return !1;
							return !0;
						},
						clone: function (t) {
							if (C.isArray(t)) return t.map(C.clone);
							if (C.isObject(t)) {
								for (
									var e = Object.create(t),
										n = Object.keys(t),
										r = n.length,
										a = 0;
									a < r;
									++a
								)
									e[n[a]] = C.clone(t[n[a]]);
								return e;
							}
							return t;
						},
						_merger: function (t, e, n, r) {
							if (w(t)) {
								var a = e[t],
									i = n[t];
								C.isObject(a) && C.isObject(i)
									? C.merge(a, i, r)
									: (e[t] = C.clone(i));
							}
						},
						_mergerIf: function (t, e, n) {
							if (w(t)) {
								var r = e[t],
									a = n[t];
								C.isObject(r) && C.isObject(a)
									? C.mergeIf(r, a)
									: e.hasOwnProperty(t) || (e[t] = C.clone(a));
							}
						},
						merge: function (t, e, n) {
							var r,
								a,
								i,
								o,
								l,
								s = C.isArray(e) ? e : [e],
								u = s.length;
							if (!C.isObject(t)) return t;
							for (r = (n = n || {}).merger || C._merger, a = 0; a < u; ++a)
								if (((e = s[a]), C.isObject(e)))
									for (l = 0, o = (i = Object.keys(e)).length; l < o; ++l)
										r(i[l], t, e, n);
							return t;
						},
						mergeIf: function (t, e) {
							return C.merge(t, e, {merger: C._mergerIf});
						},
						extend:
							Object.assign ||
							function (t) {
								return C.merge(t, [].slice.call(arguments, 1), {
									merger: function (t, e, n) {
										e[t] = n[t];
									},
								});
							},
						inherits: function (t) {
							var e = this,
								n =
									t && t.hasOwnProperty('constructor')
										? t.constructor
										: function () {
												return e.apply(this, arguments);
										  },
								r = function () {
									this.constructor = n;
								};
							return (
								(r.prototype = e.prototype),
								(n.prototype = new r()),
								(n.extend = C.inherits),
								t && C.extend(n.prototype, t),
								(n.__super__ = e.prototype),
								n
							);
						},
						_deprecated: function (t, e, n, a) {
							void 0 !== e &&
								r.warn(
									t +
										': "' +
										n +
										'" is deprecated. Please use "' +
										a +
										'" instead'
								);
						},
					},
					S = C;
				(C.callCallback = C.callback),
					(C.indexOf = function (t, e, n) {
						return Array.prototype.indexOf.call(t, e, n);
					}),
					(C.getValueOrDefault = C.valueOrDefault),
					(C.getValueAtIndexOrDefault = C.valueAtIndexOrDefault);
				var P = {
						linear: function (t) {
							return t;
						},
						easeInQuad: function (t) {
							return t * t;
						},
						easeOutQuad: function (t) {
							return -t * (t - 2);
						},
						easeInOutQuad: function (t) {
							return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
						},
						easeInCubic: function (t) {
							return t * t * t;
						},
						easeOutCubic: function (t) {
							return (t -= 1) * t * t + 1;
						},
						easeInOutCubic: function (t) {
							return (t /= 0.5) < 1
								? 0.5 * t * t * t
								: 0.5 * ((t -= 2) * t * t + 2);
						},
						easeInQuart: function (t) {
							return t * t * t * t;
						},
						easeOutQuart: function (t) {
							return -((t -= 1) * t * t * t - 1);
						},
						easeInOutQuart: function (t) {
							return (t /= 0.5) < 1
								? 0.5 * t * t * t * t
								: -0.5 * ((t -= 2) * t * t * t - 2);
						},
						easeInQuint: function (t) {
							return t * t * t * t * t;
						},
						easeOutQuint: function (t) {
							return (t -= 1) * t * t * t * t + 1;
						},
						easeInOutQuint: function (t) {
							return (t /= 0.5) < 1
								? 0.5 * t * t * t * t * t
								: 0.5 * ((t -= 2) * t * t * t * t + 2);
						},
						easeInSine: function (t) {
							return 1 - Math.cos(t * (Math.PI / 2));
						},
						easeOutSine: function (t) {
							return Math.sin(t * (Math.PI / 2));
						},
						easeInOutSine: function (t) {
							return -0.5 * (Math.cos(Math.PI * t) - 1);
						},
						easeInExpo: function (t) {
							return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
						},
						easeOutExpo: function (t) {
							return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
						},
						easeInOutExpo: function (t) {
							return 0 === t
								? 0
								: 1 === t
								? 1
								: (t /= 0.5) < 1
								? 0.5 * Math.pow(2, 10 * (t - 1))
								: 0.5 * (2 - Math.pow(2, -10 * --t));
						},
						easeInCirc: function (t) {
							return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
						},
						easeOutCirc: function (t) {
							return Math.sqrt(1 - (t -= 1) * t);
						},
						easeInOutCirc: function (t) {
							return (t /= 0.5) < 1
								? -0.5 * (Math.sqrt(1 - t * t) - 1)
								: 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
						},
						easeInElastic: function (t) {
							var e = 1.70158,
								n = 0,
								r = 1;
							return 0 === t
								? 0
								: 1 === t
								? 1
								: (n || (n = 0.3),
								  r < 1
										? ((r = 1), (e = n / 4))
										: (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
								  -r *
										Math.pow(2, 10 * (t -= 1)) *
										Math.sin(((t - e) * (2 * Math.PI)) / n));
						},
						easeOutElastic: function (t) {
							var e = 1.70158,
								n = 0,
								r = 1;
							return 0 === t
								? 0
								: 1 === t
								? 1
								: (n || (n = 0.3),
								  r < 1
										? ((r = 1), (e = n / 4))
										: (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
								  r *
										Math.pow(2, -10 * t) *
										Math.sin(((t - e) * (2 * Math.PI)) / n) +
										1);
						},
						easeInOutElastic: function (t) {
							var e = 1.70158,
								n = 0,
								r = 1;
							return 0 === t
								? 0
								: 2 == (t /= 0.5)
								? 1
								: (n || (n = 0.45),
								  r < 1
										? ((r = 1), (e = n / 4))
										: (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
								  t < 1
										? r *
										  Math.pow(2, 10 * (t -= 1)) *
										  Math.sin(((t - e) * (2 * Math.PI)) / n) *
										  -0.5
										: r *
												Math.pow(2, -10 * (t -= 1)) *
												Math.sin(((t - e) * (2 * Math.PI)) / n) *
												0.5 +
										  1);
						},
						easeInBack: function (t) {
							var e = 1.70158;
							return t * t * ((e + 1) * t - e);
						},
						easeOutBack: function (t) {
							var e = 1.70158;
							return (t -= 1) * t * ((e + 1) * t + e) + 1;
						},
						easeInOutBack: function (t) {
							var e = 1.70158;
							return (t /= 0.5) < 1
								? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
								: 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
						},
						easeInBounce: function (t) {
							return 1 - P.easeOutBounce(1 - t);
						},
						easeOutBounce: function (t) {
							return t < 1 / 2.75
								? 7.5625 * t * t
								: t < 2 / 2.75
								? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
								: t < 2.5 / 2.75
								? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
								: 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
						},
						easeInOutBounce: function (t) {
							return t < 0.5
								? 0.5 * P.easeInBounce(2 * t)
								: 0.5 * P.easeOutBounce(2 * t - 1) + 0.5;
						},
					},
					A = {effects: P};
				S.easingEffects = P;
				var D = Math.PI,
					O = D / 180,
					T = 2 * D,
					I = D / 2,
					F = D / 4,
					L = (2 * D) / 3,
					E = {
						clear: function (t) {
							t.ctx.clearRect(0, 0, t.width, t.height);
						},
						roundedRect: function (t, e, n, r, a, i) {
							if (i) {
								var o = Math.min(i, a / 2, r / 2),
									l = e + o,
									s = n + o,
									u = e + r - o,
									c = n + a - o;
								t.moveTo(e, s),
									l < u && s < c
										? (t.arc(l, s, o, -D, -I),
										  t.arc(u, s, o, -I, 0),
										  t.arc(u, c, o, 0, I),
										  t.arc(l, c, o, I, D))
										: l < u
										? (t.moveTo(l, n),
										  t.arc(u, s, o, -I, I),
										  t.arc(l, s, o, I, D + I))
										: s < c
										? (t.arc(l, s, o, -D, 0), t.arc(l, c, o, 0, D))
										: t.arc(l, s, o, -D, D),
									t.closePath(),
									t.moveTo(e, n);
							} else t.rect(e, n, r, a);
						},
						drawPoint: function (t, e, n, r, a, i) {
							var o,
								l,
								s,
								u,
								c,
								d = (i || 0) * O;
							if (
								e &&
								'object' == typeof e &&
								('[object HTMLImageElement]' === (o = e.toString()) ||
									'[object HTMLCanvasElement]' === o)
							)
								return (
									t.save(),
									t.translate(r, a),
									t.rotate(d),
									t.drawImage(
										e,
										-e.width / 2,
										-e.height / 2,
										e.width,
										e.height
									),
									void t.restore()
								);
							if (!(isNaN(n) || n <= 0)) {
								switch ((t.beginPath(), e)) {
									default:
										t.arc(r, a, n, 0, T), t.closePath();
										break;
									case 'triangle':
										t.moveTo(r + Math.sin(d) * n, a - Math.cos(d) * n),
											(d += L),
											t.lineTo(r + Math.sin(d) * n, a - Math.cos(d) * n),
											(d += L),
											t.lineTo(r + Math.sin(d) * n, a - Math.cos(d) * n),
											t.closePath();
										break;
									case 'rectRounded':
										(u = n - (c = 0.516 * n)),
											(l = Math.cos(d + F) * u),
											(s = Math.sin(d + F) * u),
											t.arc(r - l, a - s, c, d - D, d - I),
											t.arc(r + s, a - l, c, d - I, d),
											t.arc(r + l, a + s, c, d, d + I),
											t.arc(r - s, a + l, c, d + I, d + D),
											t.closePath();
										break;
									case 'rect':
										if (!i) {
											(u = Math.SQRT1_2 * n),
												t.rect(r - u, a - u, 2 * u, 2 * u);
											break;
										}
										d += F;
									case 'rectRot':
										(l = Math.cos(d) * n),
											(s = Math.sin(d) * n),
											t.moveTo(r - l, a - s),
											t.lineTo(r + s, a - l),
											t.lineTo(r + l, a + s),
											t.lineTo(r - s, a + l),
											t.closePath();
										break;
									case 'crossRot':
										d += F;
									case 'cross':
										(l = Math.cos(d) * n),
											(s = Math.sin(d) * n),
											t.moveTo(r - l, a - s),
											t.lineTo(r + l, a + s),
											t.moveTo(r + s, a - l),
											t.lineTo(r - s, a + l);
										break;
									case 'star':
										(l = Math.cos(d) * n),
											(s = Math.sin(d) * n),
											t.moveTo(r - l, a - s),
											t.lineTo(r + l, a + s),
											t.moveTo(r + s, a - l),
											t.lineTo(r - s, a + l),
											(d += F),
											(l = Math.cos(d) * n),
											(s = Math.sin(d) * n),
											t.moveTo(r - l, a - s),
											t.lineTo(r + l, a + s),
											t.moveTo(r + s, a - l),
											t.lineTo(r - s, a + l);
										break;
									case 'line':
										(l = Math.cos(d) * n),
											(s = Math.sin(d) * n),
											t.moveTo(r - l, a - s),
											t.lineTo(r + l, a + s);
										break;
									case 'dash':
										t.moveTo(r, a),
											t.lineTo(r + Math.cos(d) * n, a + Math.sin(d) * n);
								}
								t.fill(), t.stroke();
							}
						},
						_isPointInArea: function (t, e) {
							var n = 1e-6;
							return (
								t.x > e.left - n &&
								t.x < e.right + n &&
								t.y > e.top - n &&
								t.y < e.bottom + n
							);
						},
						clipArea: function (t, e) {
							t.save(),
								t.beginPath(),
								t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
								t.clip();
						},
						unclipArea: function (t) {
							t.restore();
						},
						lineTo: function (t, e, n, r) {
							var a = n.steppedLine;
							if (a) {
								if ('middle' === a) {
									var i = (e.x + n.x) / 2;
									t.lineTo(i, r ? n.y : e.y), t.lineTo(i, r ? e.y : n.y);
								} else
									('after' === a && !r) || ('after' !== a && r)
										? t.lineTo(e.x, n.y)
										: t.lineTo(n.x, e.y);
								t.lineTo(n.x, n.y);
							} else
								n.tension
									? t.bezierCurveTo(
											r ? e.controlPointPreviousX : e.controlPointNextX,
											r ? e.controlPointPreviousY : e.controlPointNextY,
											r ? n.controlPointNextX : n.controlPointPreviousX,
											r ? n.controlPointNextY : n.controlPointPreviousY,
											n.x,
											n.y
									  )
									: t.lineTo(n.x, n.y);
						},
					},
					R = E;
				(S.clear = E.clear),
					(S.drawRoundedRectangle = function (t) {
						t.beginPath(), E.roundedRect.apply(E, arguments);
					});
				var N = {
					_set: function (t, e) {
						return S.merge(this[t] || (this[t] = {}), e);
					},
				};
				N._set('global', {
					defaultColor: 'rgba(0,0,0,0.1)',
					defaultFontColor: '#666',
					defaultFontFamily:
						"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					defaultFontSize: 12,
					defaultFontStyle: 'normal',
					defaultLineHeight: 1.2,
					showLines: !0,
				});
				var z = N,
					B = S.valueOrDefault;
				var W = {
						toLineHeight: function (t, e) {
							var n = ('' + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
							if (!n || 'normal' === n[1]) return 1.2 * e;
							switch (((t = +n[2]), n[3])) {
								case 'px':
									return t;
								case '%':
									t /= 100;
							}
							return e * t;
						},
						toPadding: function (t) {
							var e, n, r, a;
							return (
								S.isObject(t)
									? ((e = +t.top || 0),
									  (n = +t.right || 0),
									  (r = +t.bottom || 0),
									  (a = +t.left || 0))
									: (e = n = r = a = +t || 0),
								{
									top: e,
									right: n,
									bottom: r,
									left: a,
									height: e + r,
									width: a + n,
								}
							);
						},
						_parseFont: function (t) {
							var e = z.global,
								n = B(t.fontSize, e.defaultFontSize),
								r = {
									family: B(t.fontFamily, e.defaultFontFamily),
									lineHeight: S.options.toLineHeight(
										B(t.lineHeight, e.defaultLineHeight),
										n
									),
									size: n,
									style: B(t.fontStyle, e.defaultFontStyle),
									weight: null,
									string: '',
								};
							return (
								(r.string = (function (t) {
									return !t ||
										S.isNullOrUndef(t.size) ||
										S.isNullOrUndef(t.family)
										? null
										: (t.style ? t.style + ' ' : '') +
												(t.weight ? t.weight + ' ' : '') +
												t.size +
												'px ' +
												t.family;
								})(r)),
								r
							);
						},
						resolve: function (t, e, n, r) {
							var a,
								i,
								o,
								l = !0;
							for (a = 0, i = t.length; a < i; ++a)
								if (
									void 0 !== (o = t[a]) &&
									(void 0 !== e &&
										'function' == typeof o &&
										((o = o(e)), (l = !1)),
									void 0 !== n && S.isArray(o) && ((o = o[n]), (l = !1)),
									void 0 !== o)
								)
									return r && !l && (r.cacheable = !1), o;
						},
					},
					V = {
						_factorize: function (t) {
							var e,
								n = [],
								r = Math.sqrt(t);
							for (e = 1; e < r; e++) t % e == 0 && (n.push(e), n.push(t / e));
							return (
								r === (0 | r) && n.push(r),
								n
									.sort(function (t, e) {
										return t - e;
									})
									.pop(),
								n
							);
						},
						log10:
							Math.log10 ||
							function (t) {
								var e = Math.log(t) * Math.LOG10E,
									n = Math.round(e);
								return t === Math.pow(10, n) ? n : e;
							},
					},
					j = V;
				S.log10 = V.log10;
				var H = S,
					q = A,
					U = R,
					Z = W,
					Y = j,
					K = {
						getRtlAdapter: function (t, e, n) {
							return t
								? (function (t, e) {
										return {
											x: function (n) {
												return t + t + e - n;
											},
											setWidth: function (t) {
												e = t;
											},
											textAlign: function (t) {
												return 'center' === t
													? t
													: 'right' === t
													? 'left'
													: 'right';
											},
											xPlus: function (t, e) {
												return t - e;
											},
											leftForLtr: function (t, e) {
												return t - e;
											},
										};
								  })(e, n)
								: {
										x: function (t) {
											return t;
										},
										setWidth: function (t) {},
										textAlign: function (t) {
											return t;
										},
										xPlus: function (t, e) {
											return t + e;
										},
										leftForLtr: function (t, e) {
											return t;
										},
								  };
						},
						overrideTextDirection: function (t, e) {
							var n, r;
							('ltr' !== e && 'rtl' !== e) ||
								((r = [
									(n = t.canvas.style).getPropertyValue('direction'),
									n.getPropertyPriority('direction'),
								]),
								n.setProperty('direction', e, 'important'),
								(t.prevTextDirection = r));
						},
						restoreTextDirection: function (t) {
							var e = t.prevTextDirection;
							void 0 !== e &&
								(delete t.prevTextDirection,
								t.canvas.style.setProperty('direction', e[0], e[1]));
						},
					};
				(H.easing = q),
					(H.canvas = U),
					(H.options = Z),
					(H.math = Y),
					(H.rtl = K);
				var $ = function (t) {
					H.extend(this, t), this.initialize.apply(this, arguments);
				};
				H.extend($.prototype, {
					_type: void 0,
					initialize: function () {
						this.hidden = !1;
					},
					pivot: function () {
						var t = this;
						return (
							t._view || (t._view = H.extend({}, t._model)), (t._start = {}), t
						);
					},
					transition: function (t) {
						var e = this,
							n = e._model,
							r = e._start,
							a = e._view;
						return n && 1 !== t
							? (a || (a = e._view = {}),
							  r || (r = e._start = {}),
							  (function (t, e, n, r) {
									var a,
										i,
										o,
										l,
										s,
										u,
										c,
										d,
										h,
										f = Object.keys(n);
									for (a = 0, i = f.length; a < i; ++a)
										if (
											((u = n[(o = f[a])]),
											e.hasOwnProperty(o) || (e[o] = u),
											(l = e[o]) !== u && '_' !== o[0])
										) {
											if (
												(t.hasOwnProperty(o) || (t[o] = l),
												(c = typeof u) == typeof (s = t[o]))
											)
												if ('string' === c) {
													if ((d = k(s)).valid && (h = k(u)).valid) {
														e[o] = h.mix(d, r).rgbString();
														continue;
													}
												} else if (H.isFinite(s) && H.isFinite(u)) {
													e[o] = s + (u - s) * r;
													continue;
												}
											e[o] = u;
										}
							  })(r, a, n, t),
							  e)
							: ((e._view = H.extend({}, n)), (e._start = null), e);
					},
					tooltipPosition: function () {
						return {x: this._model.x, y: this._model.y};
					},
					hasValue: function () {
						return H.isNumber(this._model.x) && H.isNumber(this._model.y);
					},
				}),
					($.extend = H.inherits);
				var G = $,
					X = G.extend({
						chart: null,
						currentStep: 0,
						numSteps: 60,
						easing: '',
						render: null,
						onAnimationProgress: null,
						onAnimationComplete: null,
					}),
					J = X;
				Object.defineProperty(X.prototype, 'animationObject', {
					get: function () {
						return this;
					},
				}),
					Object.defineProperty(X.prototype, 'chartInstance', {
						get: function () {
							return this.chart;
						},
						set: function (t) {
							this.chart = t;
						},
					}),
					z._set('global', {
						animation: {
							duration: 1e3,
							easing: 'easeOutQuart',
							onProgress: H.noop,
							onComplete: H.noop,
						},
					});
				var Q = {
						animations: [],
						request: null,
						addAnimation: function (t, e, n, r) {
							var a,
								i,
								o = this.animations;
							for (
								e.chart = t,
									e.startTime = Date.now(),
									e.duration = n,
									r || (t.animating = !0),
									a = 0,
									i = o.length;
								a < i;
								++a
							)
								if (o[a].chart === t) return void (o[a] = e);
							o.push(e), 1 === o.length && this.requestAnimationFrame();
						},
						cancelAnimation: function (t) {
							var e = H.findIndex(this.animations, function (e) {
								return e.chart === t;
							});
							-1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
						},
						requestAnimationFrame: function () {
							var t = this;
							null === t.request &&
								(t.request = H.requestAnimFrame.call(window, function () {
									(t.request = null), t.startDigest();
								}));
						},
						startDigest: function () {
							var t = this;
							t.advance(), t.animations.length > 0 && t.requestAnimationFrame();
						},
						advance: function () {
							for (var t, e, n, r, a = this.animations, i = 0; i < a.length; )
								(e = (t = a[i]).chart),
									(n = t.numSteps),
									(r =
										Math.floor(((Date.now() - t.startTime) / t.duration) * n) +
										1),
									(t.currentStep = Math.min(r, n)),
									H.callback(t.render, [e, t], e),
									H.callback(t.onAnimationProgress, [t], e),
									t.currentStep >= n
										? (H.callback(t.onAnimationComplete, [t], e),
										  (e.animating = !1),
										  a.splice(i, 1))
										: ++i;
						},
					},
					tt = H.options.resolve,
					et = ['push', 'pop', 'shift', 'splice', 'unshift'];
				function nt(t, e) {
					var n = t._chartjs;
					if (n) {
						var r = n.listeners,
							a = r.indexOf(e);
						-1 !== a && r.splice(a, 1),
							r.length > 0 ||
								(et.forEach(function (e) {
									delete t[e];
								}),
								delete t._chartjs);
					}
				}
				var rt = function (t, e) {
					this.initialize(t, e);
				};
				H.extend(rt.prototype, {
					datasetElementType: null,
					dataElementType: null,
					_datasetElementOptions: [
						'backgroundColor',
						'borderCapStyle',
						'borderColor',
						'borderDash',
						'borderDashOffset',
						'borderJoinStyle',
						'borderWidth',
					],
					_dataElementOptions: [
						'backgroundColor',
						'borderColor',
						'borderWidth',
						'pointStyle',
					],
					initialize: function (t, e) {
						var n = this;
						(n.chart = t),
							(n.index = e),
							n.linkScales(),
							n.addElements(),
							(n._type = n.getMeta().type);
					},
					updateIndex: function (t) {
						this.index = t;
					},
					linkScales: function () {
						var t = this,
							e = t.getMeta(),
							n = t.chart,
							r = n.scales,
							a = t.getDataset(),
							i = n.options.scales;
						(null !== e.xAxisID && e.xAxisID in r && !a.xAxisID) ||
							(e.xAxisID = a.xAxisID || i.xAxes[0].id),
							(null !== e.yAxisID && e.yAxisID in r && !a.yAxisID) ||
								(e.yAxisID = a.yAxisID || i.yAxes[0].id);
					},
					getDataset: function () {
						return this.chart.data.datasets[this.index];
					},
					getMeta: function () {
						return this.chart.getDatasetMeta(this.index);
					},
					getScaleForId: function (t) {
						return this.chart.scales[t];
					},
					_getValueScaleId: function () {
						return this.getMeta().yAxisID;
					},
					_getIndexScaleId: function () {
						return this.getMeta().xAxisID;
					},
					_getValueScale: function () {
						return this.getScaleForId(this._getValueScaleId());
					},
					_getIndexScale: function () {
						return this.getScaleForId(this._getIndexScaleId());
					},
					reset: function () {
						this._update(!0);
					},
					destroy: function () {
						this._data && nt(this._data, this);
					},
					createMetaDataset: function () {
						var t = this,
							e = t.datasetElementType;
						return e && new e({_chart: t.chart, _datasetIndex: t.index});
					},
					createMetaData: function (t) {
						var e = this,
							n = e.dataElementType;
						return (
							n && new n({_chart: e.chart, _datasetIndex: e.index, _index: t})
						);
					},
					addElements: function () {
						var t,
							e,
							n = this,
							r = n.getMeta(),
							a = n.getDataset().data || [],
							i = r.data;
						for (t = 0, e = a.length; t < e; ++t)
							i[t] = i[t] || n.createMetaData(t);
						r.dataset = r.dataset || n.createMetaDataset();
					},
					addElementAndReset: function (t) {
						var e = this.createMetaData(t);
						this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
					},
					buildOrUpdateElements: function () {
						var t,
							e,
							n = this,
							r = n.getDataset(),
							a = r.data || (r.data = []);
						n._data !== a &&
							(n._data && nt(n._data, n),
							a &&
								Object.isExtensible(a) &&
								((e = n),
								(t = a)._chartjs
									? t._chartjs.listeners.push(e)
									: (Object.defineProperty(t, '_chartjs', {
											configurable: !0,
											enumerable: !1,
											value: {listeners: [e]},
									  }),
									  et.forEach(function (e) {
											var n = 'onData' + e.charAt(0).toUpperCase() + e.slice(1),
												r = t[e];
											Object.defineProperty(t, e, {
												configurable: !0,
												enumerable: !1,
												value: function () {
													var e = Array.prototype.slice.call(arguments),
														a = r.apply(this, e);
													return (
														H.each(t._chartjs.listeners, function (t) {
															'function' == typeof t[n] && t[n].apply(t, e);
														}),
														a
													);
												},
											});
									  }))),
							(n._data = a)),
							n.resyncElements();
					},
					_configure: function () {
						var t = this;
						t._config = H.merge(
							Object.create(null),
							[t.chart.options.datasets[t._type], t.getDataset()],
							{
								merger: function (t, e, n) {
									'_meta' !== t && 'data' !== t && H._merger(t, e, n);
								},
							}
						);
					},
					_update: function (t) {
						var e = this;
						e._configure(), (e._cachedDataOpts = null), e.update(t);
					},
					update: H.noop,
					transition: function (t) {
						for (
							var e = this.getMeta(), n = e.data || [], r = n.length, a = 0;
							a < r;
							++a
						)
							n[a].transition(t);
						e.dataset && e.dataset.transition(t);
					},
					draw: function () {
						var t = this.getMeta(),
							e = t.data || [],
							n = e.length,
							r = 0;
						for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw();
					},
					getStyle: function (t) {
						var e,
							n = this,
							r = n.getMeta(),
							a = r.dataset;
						return (
							n._configure(),
							a && void 0 === t
								? (e = n._resolveDatasetElementOptions(a || {}))
								: ((t = t || 0),
								  (e = n._resolveDataElementOptions(r.data[t] || {}, t))),
							(!1 !== e.fill && null !== e.fill) ||
								(e.backgroundColor = e.borderColor),
							e
						);
					},
					_resolveDatasetElementOptions: function (t, e) {
						var n,
							r,
							a,
							i,
							o = this,
							l = o.chart,
							s = o._config,
							u = t.custom || {},
							c =
								l.options.elements[o.datasetElementType.prototype._type] || {},
							d = o._datasetElementOptions,
							h = {},
							f = {
								chart: l,
								dataset: o.getDataset(),
								datasetIndex: o.index,
								hover: e,
							};
						for (n = 0, r = d.length; n < r; ++n)
							(a = d[n]),
								(i = e ? 'hover' + a.charAt(0).toUpperCase() + a.slice(1) : a),
								(h[a] = tt([u[i], s[i], c[i]], f));
						return h;
					},
					_resolveDataElementOptions: function (t, e) {
						var n = this,
							r = t && t.custom,
							a = n._cachedDataOpts;
						if (a && !r) return a;
						var i,
							o,
							l,
							s,
							u = n.chart,
							c = n._config,
							d = u.options.elements[n.dataElementType.prototype._type] || {},
							h = n._dataElementOptions,
							f = {},
							g = {
								chart: u,
								dataIndex: e,
								dataset: n.getDataset(),
								datasetIndex: n.index,
							},
							p = {cacheable: !r};
						if (((r = r || {}), H.isArray(h)))
							for (o = 0, l = h.length; o < l; ++o)
								f[(s = h[o])] = tt([r[s], c[s], d[s]], g, e, p);
						else
							for (o = 0, l = (i = Object.keys(h)).length; o < l; ++o)
								f[(s = i[o])] = tt([r[s], c[h[s]], c[s], d[s]], g, e, p);
						return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f;
					},
					removeHoverStyle: function (t) {
						H.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
					},
					setHoverStyle: function (t) {
						var e = this.chart.data.datasets[t._datasetIndex],
							n = t._index,
							r = t.custom || {},
							a = t._model,
							i = H.getHoverColor;
						(t.$previousStyle = {
							backgroundColor: a.backgroundColor,
							borderColor: a.borderColor,
							borderWidth: a.borderWidth,
						}),
							(a.backgroundColor = tt(
								[
									r.hoverBackgroundColor,
									e.hoverBackgroundColor,
									i(a.backgroundColor),
								],
								void 0,
								n
							)),
							(a.borderColor = tt(
								[r.hoverBorderColor, e.hoverBorderColor, i(a.borderColor)],
								void 0,
								n
							)),
							(a.borderWidth = tt(
								[r.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth],
								void 0,
								n
							));
					},
					_removeDatasetHoverStyle: function () {
						var t = this.getMeta().dataset;
						t && this.removeHoverStyle(t);
					},
					_setDatasetHoverStyle: function () {
						var t,
							e,
							n,
							r,
							a,
							i,
							o = this.getMeta().dataset,
							l = {};
						if (o) {
							for (
								i = o._model,
									a = this._resolveDatasetElementOptions(o, !0),
									t = 0,
									e = (r = Object.keys(a)).length;
								t < e;
								++t
							)
								(l[(n = r[t])] = i[n]), (i[n] = a[n]);
							o.$previousStyle = l;
						}
					},
					resyncElements: function () {
						var t = this,
							e = t.getMeta(),
							n = t.getDataset().data,
							r = e.data.length,
							a = n.length;
						a < r
							? e.data.splice(a, r - a)
							: a > r && t.insertElements(r, a - r);
					},
					insertElements: function (t, e) {
						for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
					},
					onDataPush: function () {
						var t = arguments.length;
						this.insertElements(this.getDataset().data.length - t, t);
					},
					onDataPop: function () {
						this.getMeta().data.pop();
					},
					onDataShift: function () {
						this.getMeta().data.shift();
					},
					onDataSplice: function (t, e) {
						this.getMeta().data.splice(t, e),
							this.insertElements(t, arguments.length - 2);
					},
					onDataUnshift: function () {
						this.insertElements(0, arguments.length);
					},
				}),
					(rt.extend = H.inherits);
				var at = rt,
					it = 2 * Math.PI;
				function ot(t, e) {
					var n = e.startAngle,
						r = e.endAngle,
						a = e.pixelMargin,
						i = a / e.outerRadius,
						o = e.x,
						l = e.y;
					t.beginPath(),
						t.arc(o, l, e.outerRadius, n - i, r + i),
						e.innerRadius > a
							? ((i = a / e.innerRadius),
							  t.arc(o, l, e.innerRadius - a, r + i, n - i, !0))
							: t.arc(o, l, a, r + Math.PI / 2, n - Math.PI / 2),
						t.closePath(),
						t.clip();
				}
				function lt(t, e, n) {
					var r = 'inner' === e.borderAlign;
					r
						? ((t.lineWidth = 2 * e.borderWidth), (t.lineJoin = 'round'))
						: ((t.lineWidth = e.borderWidth), (t.lineJoin = 'bevel')),
						n.fullCircles &&
							(function (t, e, n, r) {
								var a,
									i = n.endAngle;
								for (
									r &&
										((n.endAngle = n.startAngle + it),
										ot(t, n),
										(n.endAngle = i),
										n.endAngle === n.startAngle &&
											n.fullCircles &&
											((n.endAngle += it), n.fullCircles--)),
										t.beginPath(),
										t.arc(
											n.x,
											n.y,
											n.innerRadius,
											n.startAngle + it,
											n.startAngle,
											!0
										),
										a = 0;
									a < n.fullCircles;
									++a
								)
									t.stroke();
								for (
									t.beginPath(),
										t.arc(
											n.x,
											n.y,
											e.outerRadius,
											n.startAngle,
											n.startAngle + it
										),
										a = 0;
									a < n.fullCircles;
									++a
								)
									t.stroke();
							})(t, e, n, r),
						r && ot(t, n),
						t.beginPath(),
						t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
						t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
						t.closePath(),
						t.stroke();
				}
				z._set('global', {
					elements: {
						arc: {
							backgroundColor: z.global.defaultColor,
							borderColor: '#fff',
							borderWidth: 2,
							borderAlign: 'center',
						},
					},
				});
				var st = G.extend({
						_type: 'arc',
						inLabelRange: function (t) {
							var e = this._view;
							return (
								!!e &&
								Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
							);
						},
						inRange: function (t, e) {
							var n = this._view;
							if (n) {
								for (
									var r = H.getAngleFromPoint(n, {x: t, y: e}),
										a = r.angle,
										i = r.distance,
										o = n.startAngle,
										l = n.endAngle;
									l < o;

								)
									l += it;
								for (; a > l; ) a -= it;
								for (; a < o; ) a += it;
								var s = a >= o && a <= l,
									u = i >= n.innerRadius && i <= n.outerRadius;
								return s && u;
							}
							return !1;
						},
						getCenterPoint: function () {
							var t = this._view,
								e = (t.startAngle + t.endAngle) / 2,
								n = (t.innerRadius + t.outerRadius) / 2;
							return {x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n};
						},
						getArea: function () {
							var t = this._view;
							return (
								Math.PI *
								((t.endAngle - t.startAngle) / (2 * Math.PI)) *
								(Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
							);
						},
						tooltipPosition: function () {
							var t = this._view,
								e = t.startAngle + (t.endAngle - t.startAngle) / 2,
								n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
							return {x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n};
						},
						draw: function () {
							var t,
								e = this._chart.ctx,
								n = this._view,
								r = 'inner' === n.borderAlign ? 0.33 : 0,
								a = {
									x: n.x,
									y: n.y,
									innerRadius: n.innerRadius,
									outerRadius: Math.max(n.outerRadius - r, 0),
									pixelMargin: r,
									startAngle: n.startAngle,
									endAngle: n.endAngle,
									fullCircles: Math.floor(n.circumference / it),
								};
							if (
								(e.save(),
								(e.fillStyle = n.backgroundColor),
								(e.strokeStyle = n.borderColor),
								a.fullCircles)
							) {
								for (
									a.endAngle = a.startAngle + it,
										e.beginPath(),
										e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
										e.arc(
											a.x,
											a.y,
											a.innerRadius,
											a.endAngle,
											a.startAngle,
											!0
										),
										e.closePath(),
										t = 0;
									t < a.fullCircles;
									++t
								)
									e.fill();
								a.endAngle = a.startAngle + (n.circumference % it);
							}
							e.beginPath(),
								e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
								e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
								e.closePath(),
								e.fill(),
								n.borderWidth && lt(e, n, a),
								e.restore();
						},
					}),
					ut = H.valueOrDefault,
					ct = z.global.defaultColor;
				z._set('global', {
					elements: {
						line: {
							tension: 0.4,
							backgroundColor: ct,
							borderWidth: 3,
							borderColor: ct,
							borderCapStyle: 'butt',
							borderDash: [],
							borderDashOffset: 0,
							borderJoinStyle: 'miter',
							capBezierPoints: !0,
							fill: !0,
						},
					},
				});
				var dt = G.extend({
						_type: 'line',
						draw: function () {
							var t,
								e,
								n,
								r = this,
								a = r._view,
								i = r._chart.ctx,
								o = a.spanGaps,
								l = r._children.slice(),
								s = z.global,
								u = s.elements.line,
								c = -1,
								d = r._loop;
							if (l.length) {
								if (r._loop) {
									for (t = 0; t < l.length; ++t)
										if (
											((e = H.previousItem(l, t)),
											!l[t]._view.skip && e._view.skip)
										) {
											(l = l.slice(t).concat(l.slice(0, t))), (d = o);
											break;
										}
									d && l.push(l[0]);
								}
								for (
									i.save(),
										i.lineCap = a.borderCapStyle || u.borderCapStyle,
										i.setLineDash &&
											i.setLineDash(a.borderDash || u.borderDash),
										i.lineDashOffset = ut(
											a.borderDashOffset,
											u.borderDashOffset
										),
										i.lineJoin = a.borderJoinStyle || u.borderJoinStyle,
										i.lineWidth = ut(a.borderWidth, u.borderWidth),
										i.strokeStyle = a.borderColor || s.defaultColor,
										i.beginPath(),
										(n = l[0]._view).skip || (i.moveTo(n.x, n.y), (c = 0)),
										t = 1;
									t < l.length;
									++t
								)
									(n = l[t]._view),
										(e = -1 === c ? H.previousItem(l, t) : l[c]),
										n.skip ||
											((c !== t - 1 && !o) || -1 === c
												? i.moveTo(n.x, n.y)
												: H.canvas.lineTo(i, e._view, n),
											(c = t));
								d && i.closePath(), i.stroke(), i.restore();
							}
						},
					}),
					ht = H.valueOrDefault,
					ft = z.global.defaultColor;
				function gt(t) {
					var e = this._view;
					return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
				}
				z._set('global', {
					elements: {
						point: {
							radius: 3,
							pointStyle: 'circle',
							backgroundColor: ft,
							borderColor: ft,
							borderWidth: 1,
							hitRadius: 1,
							hoverRadius: 4,
							hoverBorderWidth: 1,
						},
					},
				});
				var pt = G.extend({
						_type: 'point',
						inRange: function (t, e) {
							var n = this._view;
							return (
								!!n &&
								Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
									Math.pow(n.hitRadius + n.radius, 2)
							);
						},
						inLabelRange: gt,
						inXRange: gt,
						inYRange: function (t) {
							var e = this._view;
							return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
						},
						getCenterPoint: function () {
							var t = this._view;
							return {x: t.x, y: t.y};
						},
						getArea: function () {
							return Math.PI * Math.pow(this._view.radius, 2);
						},
						tooltipPosition: function () {
							var t = this._view;
							return {x: t.x, y: t.y, padding: t.radius + t.borderWidth};
						},
						draw: function (t) {
							var e = this._view,
								n = this._chart.ctx,
								r = e.pointStyle,
								a = e.rotation,
								i = e.radius,
								o = e.x,
								l = e.y,
								s = z.global,
								u = s.defaultColor;
							e.skip ||
								((void 0 === t || H.canvas._isPointInArea(e, t)) &&
									((n.strokeStyle = e.borderColor || u),
									(n.lineWidth = ht(
										e.borderWidth,
										s.elements.point.borderWidth
									)),
									(n.fillStyle = e.backgroundColor || u),
									H.canvas.drawPoint(n, r, i, o, l, a)));
						},
					}),
					mt = z.global.defaultColor;
				function vt(t) {
					return t && void 0 !== t.width;
				}
				function bt(t) {
					var e, n, r, a, i;
					return (
						vt(t)
							? ((i = t.width / 2),
							  (e = t.x - i),
							  (n = t.x + i),
							  (r = Math.min(t.y, t.base)),
							  (a = Math.max(t.y, t.base)))
							: ((i = t.height / 2),
							  (e = Math.min(t.x, t.base)),
							  (n = Math.max(t.x, t.base)),
							  (r = t.y - i),
							  (a = t.y + i)),
						{left: e, top: r, right: n, bottom: a}
					);
				}
				function xt(t, e, n) {
					return t === e ? n : t === n ? e : t;
				}
				function yt(t, e, n) {
					var r,
						a,
						i,
						o,
						l = t.borderWidth,
						s = (function (t) {
							var e = t.borderSkipped,
								n = {};
							return e
								? (t.horizontal
										? t.base > t.x && (e = xt(e, 'left', 'right'))
										: t.base < t.y && (e = xt(e, 'bottom', 'top')),
								  (n[e] = !0),
								  n)
								: n;
						})(t);
					return (
						H.isObject(l)
							? ((r = +l.top || 0),
							  (a = +l.right || 0),
							  (i = +l.bottom || 0),
							  (o = +l.left || 0))
							: (r = a = i = o = +l || 0),
						{
							t: s.top || r < 0 ? 0 : r > n ? n : r,
							r: s.right || a < 0 ? 0 : a > e ? e : a,
							b: s.bottom || i < 0 ? 0 : i > n ? n : i,
							l: s.left || o < 0 ? 0 : o > e ? e : o,
						}
					);
				}
				function _t(t, e, n) {
					var r = null === e,
						a = null === n,
						i = !(!t || (r && a)) && bt(t);
					return (
						i &&
						(r || (e >= i.left && e <= i.right)) &&
						(a || (n >= i.top && n <= i.bottom))
					);
				}
				z._set('global', {
					elements: {
						rectangle: {
							backgroundColor: mt,
							borderColor: mt,
							borderSkipped: 'bottom',
							borderWidth: 0,
						},
					},
				});
				var kt = G.extend({
						_type: 'rectangle',
						draw: function () {
							var t = this._chart.ctx,
								e = this._view,
								n = (function (t) {
									var e = bt(t),
										n = e.right - e.left,
										r = e.bottom - e.top,
										a = yt(t, n / 2, r / 2);
									return {
										outer: {x: e.left, y: e.top, w: n, h: r},
										inner: {
											x: e.left + a.l,
											y: e.top + a.t,
											w: n - a.l - a.r,
											h: r - a.t - a.b,
										},
									};
								})(e),
								r = n.outer,
								a = n.inner;
							(t.fillStyle = e.backgroundColor),
								t.fillRect(r.x, r.y, r.w, r.h),
								(r.w === a.w && r.h === a.h) ||
									(t.save(),
									t.beginPath(),
									t.rect(r.x, r.y, r.w, r.h),
									t.clip(),
									(t.fillStyle = e.borderColor),
									t.rect(a.x, a.y, a.w, a.h),
									t.fill('evenodd'),
									t.restore());
						},
						height: function () {
							var t = this._view;
							return t.base - t.y;
						},
						inRange: function (t, e) {
							return _t(this._view, t, e);
						},
						inLabelRange: function (t, e) {
							var n = this._view;
							return vt(n) ? _t(n, t, null) : _t(n, null, e);
						},
						inXRange: function (t) {
							return _t(this._view, t, null);
						},
						inYRange: function (t) {
							return _t(this._view, null, t);
						},
						getCenterPoint: function () {
							var t,
								e,
								n = this._view;
							return (
								vt(n)
									? ((t = n.x), (e = (n.y + n.base) / 2))
									: ((t = (n.x + n.base) / 2), (e = n.y)),
								{x: t, y: e}
							);
						},
						getArea: function () {
							var t = this._view;
							return vt(t)
								? t.width * Math.abs(t.y - t.base)
								: t.height * Math.abs(t.x - t.base);
						},
						tooltipPosition: function () {
							var t = this._view;
							return {x: t.x, y: t.y};
						},
					}),
					wt = {},
					Mt = st,
					Ct = dt,
					St = pt,
					Pt = kt;
				(wt.Arc = Mt), (wt.Line = Ct), (wt.Point = St), (wt.Rectangle = Pt);
				var At = H._deprecated,
					Dt = H.valueOrDefault;
				function Ot(t, e, n) {
					var r,
						a,
						i = n.barThickness,
						o = e.stackCount,
						l = e.pixels[t],
						s = H.isNullOrUndef(i)
							? (function (t, e) {
									var n,
										r,
										a,
										i,
										o = t._length;
									for (a = 1, i = e.length; a < i; ++a)
										o = Math.min(o, Math.abs(e[a] - e[a - 1]));
									for (a = 0, i = t.getTicks().length; a < i; ++a)
										(r = t.getPixelForTick(a)),
											(o = a > 0 ? Math.min(o, Math.abs(r - n)) : o),
											(n = r);
									return o;
							  })(e.scale, e.pixels)
							: -1;
					return (
						H.isNullOrUndef(i)
							? ((r = s * n.categoryPercentage), (a = n.barPercentage))
							: ((r = i * o), (a = 1)),
						{chunk: r / o, ratio: a, start: l - r / 2}
					);
				}
				z._set('bar', {
					hover: {mode: 'label'},
					scales: {
						xAxes: [
							{type: 'category', offset: !0, gridLines: {offsetGridLines: !0}},
						],
						yAxes: [{type: 'linear'}],
					},
				}),
					z._set('global', {
						datasets: {bar: {categoryPercentage: 0.8, barPercentage: 0.9}},
					});
				var Tt = at.extend({
						dataElementType: wt.Rectangle,
						_dataElementOptions: [
							'backgroundColor',
							'borderColor',
							'borderSkipped',
							'borderWidth',
							'barPercentage',
							'barThickness',
							'categoryPercentage',
							'maxBarThickness',
							'minBarLength',
						],
						initialize: function () {
							var t,
								e,
								n = this;
							at.prototype.initialize.apply(n, arguments),
								((t = n.getMeta()).stack = n.getDataset().stack),
								(t.bar = !0),
								(e = n._getIndexScale().options),
								At(
									'bar chart',
									e.barPercentage,
									'scales.[x/y]Axes.barPercentage',
									'dataset.barPercentage'
								),
								At(
									'bar chart',
									e.barThickness,
									'scales.[x/y]Axes.barThickness',
									'dataset.barThickness'
								),
								At(
									'bar chart',
									e.categoryPercentage,
									'scales.[x/y]Axes.categoryPercentage',
									'dataset.categoryPercentage'
								),
								At(
									'bar chart',
									n._getValueScale().options.minBarLength,
									'scales.[x/y]Axes.minBarLength',
									'dataset.minBarLength'
								),
								At(
									'bar chart',
									e.maxBarThickness,
									'scales.[x/y]Axes.maxBarThickness',
									'dataset.maxBarThickness'
								);
						},
						update: function (t) {
							var e,
								n,
								r = this,
								a = r.getMeta().data;
							for (r._ruler = r.getRuler(), e = 0, n = a.length; e < n; ++e)
								r.updateElement(a[e], e, t);
						},
						updateElement: function (t, e, n) {
							var r = this,
								a = r.getMeta(),
								i = r.getDataset(),
								o = r._resolveDataElementOptions(t, e);
							(t._xScale = r.getScaleForId(a.xAxisID)),
								(t._yScale = r.getScaleForId(a.yAxisID)),
								(t._datasetIndex = r.index),
								(t._index = e),
								(t._model = {
									backgroundColor: o.backgroundColor,
									borderColor: o.borderColor,
									borderSkipped: o.borderSkipped,
									borderWidth: o.borderWidth,
									datasetLabel: i.label,
									label: r.chart.data.labels[e],
								}),
								H.isArray(i.data[e]) && (t._model.borderSkipped = null),
								r._updateElementGeometry(t, e, n, o),
								t.pivot();
						},
						_updateElementGeometry: function (t, e, n, r) {
							var a = this,
								i = t._model,
								o = a._getValueScale(),
								l = o.getBasePixel(),
								s = o.isHorizontal(),
								u = a._ruler || a.getRuler(),
								c = a.calculateBarValuePixels(a.index, e, r),
								d = a.calculateBarIndexPixels(a.index, e, u, r);
							(i.horizontal = s),
								(i.base = n ? l : c.base),
								(i.x = s ? (n ? l : c.head) : d.center),
								(i.y = s ? d.center : n ? l : c.head),
								(i.height = s ? d.size : void 0),
								(i.width = s ? void 0 : d.size);
						},
						_getStacks: function (t) {
							var e,
								n,
								r = this._getIndexScale(),
								a = r._getMatchingVisibleMetas(this._type),
								i = r.options.stacked,
								o = a.length,
								l = [];
							for (
								e = 0;
								e < o &&
								((n = a[e]),
								(!1 === i ||
									-1 === l.indexOf(n.stack) ||
									(void 0 === i && void 0 === n.stack)) &&
									l.push(n.stack),
								n.index !== t);
								++e
							);
							return l;
						},
						getStackCount: function () {
							return this._getStacks().length;
						},
						getStackIndex: function (t, e) {
							var n = this._getStacks(t),
								r = void 0 !== e ? n.indexOf(e) : -1;
							return -1 === r ? n.length - 1 : r;
						},
						getRuler: function () {
							var t,
								e,
								n = this,
								r = n._getIndexScale(),
								a = [];
							for (t = 0, e = n.getMeta().data.length; t < e; ++t)
								a.push(r.getPixelForValue(null, t, n.index));
							return {
								pixels: a,
								start: r._startPixel,
								end: r._endPixel,
								stackCount: n.getStackCount(),
								scale: r,
							};
						},
						calculateBarValuePixels: function (t, e, n) {
							var r,
								a,
								i,
								o,
								l,
								s,
								u,
								c = this,
								d = c.chart,
								h = c._getValueScale(),
								f = h.isHorizontal(),
								g = d.data.datasets,
								p = h._getMatchingVisibleMetas(c._type),
								m = h._parseValue(g[t].data[e]),
								v = n.minBarLength,
								b = h.options.stacked,
								x = c.getMeta().stack,
								y =
									void 0 === m.start
										? 0
										: m.max >= 0 && m.min >= 0
										? m.min
										: m.max,
								_ =
									void 0 === m.start
										? m.end
										: m.max >= 0 && m.min >= 0
										? m.max - m.min
										: m.min - m.max,
								k = p.length;
							if (b || (void 0 === b && void 0 !== x))
								for (r = 0; r < k && (a = p[r]).index !== t; ++r)
									a.stack === x &&
										((i =
											void 0 === (u = h._parseValue(g[a.index].data[e])).start
												? u.end
												: u.min >= 0 && u.max >= 0
												? u.max
												: u.min),
										((m.min < 0 && i < 0) || (m.max >= 0 && i > 0)) &&
											(y += i));
							return (
								(o = h.getPixelForValue(y)),
								(s = (l = h.getPixelForValue(y + _)) - o),
								void 0 !== v &&
									Math.abs(s) < v &&
									((s = v),
									(l = (_ >= 0 && !f) || (_ < 0 && f) ? o - v : o + v)),
								{size: s, base: o, head: l, center: l + s / 2}
							);
						},
						calculateBarIndexPixels: function (t, e, n, r) {
							var a =
									'flex' === r.barThickness
										? (function (t, e, n) {
												var r,
													a = e.pixels,
													i = a[t],
													o = t > 0 ? a[t - 1] : null,
													l = t < a.length - 1 ? a[t + 1] : null,
													s = n.categoryPercentage;
												return (
													null === o &&
														(o = i - (null === l ? e.end - e.start : l - i)),
													null === l && (l = i + i - o),
													(r = i - ((i - Math.min(o, l)) / 2) * s),
													{
														chunk: ((Math.abs(l - o) / 2) * s) / e.stackCount,
														ratio: n.barPercentage,
														start: r,
													}
												);
										  })(e, n, r)
										: Ot(e, n, r),
								i = this.getStackIndex(t, this.getMeta().stack),
								o = a.start + a.chunk * i + a.chunk / 2,
								l = Math.min(Dt(r.maxBarThickness, 1 / 0), a.chunk * a.ratio);
							return {base: o - l / 2, head: o + l / 2, center: o, size: l};
						},
						draw: function () {
							var t = this,
								e = t.chart,
								n = t._getValueScale(),
								r = t.getMeta().data,
								a = t.getDataset(),
								i = r.length,
								o = 0;
							for (H.canvas.clipArea(e.ctx, e.chartArea); o < i; ++o) {
								var l = n._parseValue(a.data[o]);
								isNaN(l.min) || isNaN(l.max) || r[o].draw();
							}
							H.canvas.unclipArea(e.ctx);
						},
						_resolveDataElementOptions: function () {
							var t = this,
								e = H.extend(
									{},
									at.prototype._resolveDataElementOptions.apply(t, arguments)
								),
								n = t._getIndexScale().options,
								r = t._getValueScale().options;
							return (
								(e.barPercentage = Dt(n.barPercentage, e.barPercentage)),
								(e.barThickness = Dt(n.barThickness, e.barThickness)),
								(e.categoryPercentage = Dt(
									n.categoryPercentage,
									e.categoryPercentage
								)),
								(e.maxBarThickness = Dt(n.maxBarThickness, e.maxBarThickness)),
								(e.minBarLength = Dt(r.minBarLength, e.minBarLength)),
								e
							);
						},
					}),
					It = H.valueOrDefault,
					Ft = H.options.resolve;
				z._set('bubble', {
					hover: {mode: 'single'},
					scales: {
						xAxes: [{type: 'linear', position: 'bottom', id: 'x-axis-0'}],
						yAxes: [{type: 'linear', position: 'left', id: 'y-axis-0'}],
					},
					tooltips: {
						callbacks: {
							title: function () {
								return '';
							},
							label: function (t, e) {
								var n = e.datasets[t.datasetIndex].label || '',
									r = e.datasets[t.datasetIndex].data[t.index];
								return (
									n + ': (' + t.xLabel + ', ' + t.yLabel + ', ' + r.r + ')'
								);
							},
						},
					},
				});
				var Lt = at.extend({
						dataElementType: wt.Point,
						_dataElementOptions: [
							'backgroundColor',
							'borderColor',
							'borderWidth',
							'hoverBackgroundColor',
							'hoverBorderColor',
							'hoverBorderWidth',
							'hoverRadius',
							'hitRadius',
							'pointStyle',
							'rotation',
						],
						update: function (t) {
							var e = this,
								n = e.getMeta().data;
							H.each(n, function (n, r) {
								e.updateElement(n, r, t);
							});
						},
						updateElement: function (t, e, n) {
							var r = this,
								a = r.getMeta(),
								i = t.custom || {},
								o = r.getScaleForId(a.xAxisID),
								l = r.getScaleForId(a.yAxisID),
								s = r._resolveDataElementOptions(t, e),
								u = r.getDataset().data[e],
								c = r.index,
								d = n
									? o.getPixelForDecimal(0.5)
									: o.getPixelForValue('object' == typeof u ? u : NaN, e, c),
								h = n ? l.getBasePixel() : l.getPixelForValue(u, e, c);
							(t._xScale = o),
								(t._yScale = l),
								(t._options = s),
								(t._datasetIndex = c),
								(t._index = e),
								(t._model = {
									backgroundColor: s.backgroundColor,
									borderColor: s.borderColor,
									borderWidth: s.borderWidth,
									hitRadius: s.hitRadius,
									pointStyle: s.pointStyle,
									rotation: s.rotation,
									radius: n ? 0 : s.radius,
									skip: i.skip || isNaN(d) || isNaN(h),
									x: d,
									y: h,
								}),
								t.pivot();
						},
						setHoverStyle: function (t) {
							var e = t._model,
								n = t._options,
								r = H.getHoverColor;
							(t.$previousStyle = {
								backgroundColor: e.backgroundColor,
								borderColor: e.borderColor,
								borderWidth: e.borderWidth,
								radius: e.radius,
							}),
								(e.backgroundColor = It(
									n.hoverBackgroundColor,
									r(n.backgroundColor)
								)),
								(e.borderColor = It(n.hoverBorderColor, r(n.borderColor))),
								(e.borderWidth = It(n.hoverBorderWidth, n.borderWidth)),
								(e.radius = n.radius + n.hoverRadius);
						},
						_resolveDataElementOptions: function (t, e) {
							var n = this,
								r = n.chart,
								a = n.getDataset(),
								i = t.custom || {},
								o = a.data[e] || {},
								l = at.prototype._resolveDataElementOptions.apply(n, arguments),
								s = {chart: r, dataIndex: e, dataset: a, datasetIndex: n.index};
							return (
								n._cachedDataOpts === l && (l = H.extend({}, l)),
								(l.radius = Ft(
									[
										i.radius,
										o.r,
										n._config.radius,
										r.options.elements.point.radius,
									],
									s,
									e
								)),
								l
							);
						},
					}),
					Et = H.valueOrDefault,
					Rt = Math.PI,
					Nt = 2 * Rt,
					zt = Rt / 2;
				z._set('doughnut', {
					animation: {animateRotate: !0, animateScale: !1},
					hover: {mode: 'single'},
					legendCallback: function (t) {
						var e,
							n,
							r,
							a = document.createElement('ul'),
							i = t.data,
							o = i.datasets,
							l = i.labels;
						if ((a.setAttribute('class', t.id + '-legend'), o.length))
							for (e = 0, n = o[0].data.length; e < n; ++e)
								((r = a.appendChild(document.createElement('li'))).appendChild(
									document.createElement('span')
								).style.backgroundColor = o[0].backgroundColor[e]),
									l[e] && r.appendChild(document.createTextNode(l[e]));
						return a.outerHTML;
					},
					legend: {
						labels: {
							generateLabels: function (t) {
								var e = t.data;
								return e.labels.length && e.datasets.length
									? e.labels.map(function (n, r) {
											var a = t.getDatasetMeta(0),
												i = a.controller.getStyle(r);
											return {
												text: n,
												fillStyle: i.backgroundColor,
												strokeStyle: i.borderColor,
												lineWidth: i.borderWidth,
												hidden:
													isNaN(e.datasets[0].data[r]) || a.data[r].hidden,
												index: r,
											};
									  })
									: [];
							},
						},
						onClick: function (t, e) {
							var n,
								r,
								a,
								i = e.index,
								o = this.chart;
							for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
								(a = o.getDatasetMeta(n)).data[i] &&
									(a.data[i].hidden = !a.data[i].hidden);
							o.update();
						},
					},
					cutoutPercentage: 50,
					rotation: -zt,
					circumference: Nt,
					tooltips: {
						callbacks: {
							title: function () {
								return '';
							},
							label: function (t, e) {
								var n = e.labels[t.index],
									r = ': ' + e.datasets[t.datasetIndex].data[t.index];
								return H.isArray(n) ? ((n = n.slice())[0] += r) : (n += r), n;
							},
						},
					},
				});
				var Bt = at.extend({
					dataElementType: wt.Arc,
					linkScales: H.noop,
					_dataElementOptions: [
						'backgroundColor',
						'borderColor',
						'borderWidth',
						'borderAlign',
						'hoverBackgroundColor',
						'hoverBorderColor',
						'hoverBorderWidth',
					],
					getRingIndex: function (t) {
						for (var e = 0, n = 0; n < t; ++n)
							this.chart.isDatasetVisible(n) && ++e;
						return e;
					},
					update: function (t) {
						var e,
							n,
							r,
							a,
							i = this,
							o = i.chart,
							l = o.chartArea,
							s = o.options,
							u = 1,
							c = 1,
							d = 0,
							h = 0,
							f = i.getMeta(),
							g = f.data,
							p = s.cutoutPercentage / 100 || 0,
							m = s.circumference,
							v = i._getRingWeight(i.index);
						if (m < Nt) {
							var b = s.rotation % Nt,
								x = (b += b >= Rt ? -Nt : b < -Rt ? Nt : 0) + m,
								y = Math.cos(b),
								_ = Math.sin(b),
								k = Math.cos(x),
								w = Math.sin(x),
								M = (b <= 0 && x >= 0) || x >= Nt,
								C = (b <= zt && x >= zt) || x >= Nt + zt,
								S = (b <= -zt && x >= -zt) || x >= Rt + zt,
								P = b === -Rt || x >= Rt ? -1 : Math.min(y, y * p, k, k * p),
								A = S ? -1 : Math.min(_, _ * p, w, w * p),
								D = M ? 1 : Math.max(y, y * p, k, k * p),
								O = C ? 1 : Math.max(_, _ * p, w, w * p);
							(u = (D - P) / 2),
								(c = (O - A) / 2),
								(d = -(D + P) / 2),
								(h = -(O + A) / 2);
						}
						for (r = 0, a = g.length; r < a; ++r)
							g[r]._options = i._resolveDataElementOptions(g[r], r);
						for (
							o.borderWidth = i.getMaxBorderWidth(),
								e = (l.right - l.left - o.borderWidth) / u,
								n = (l.bottom - l.top - o.borderWidth) / c,
								o.outerRadius = Math.max(Math.min(e, n) / 2, 0),
								o.innerRadius = Math.max(o.outerRadius * p, 0),
								o.radiusLength =
									(o.outerRadius - o.innerRadius) /
									(i._getVisibleDatasetWeightTotal() || 1),
								o.offsetX = d * o.outerRadius,
								o.offsetY = h * o.outerRadius,
								f.total = i.calculateTotal(),
								i.outerRadius =
									o.outerRadius -
									o.radiusLength * i._getRingWeightOffset(i.index),
								i.innerRadius = Math.max(i.outerRadius - o.radiusLength * v, 0),
								r = 0,
								a = g.length;
							r < a;
							++r
						)
							i.updateElement(g[r], r, t);
					},
					updateElement: function (t, e, n) {
						var r = this,
							a = r.chart,
							i = a.chartArea,
							o = a.options,
							l = o.animation,
							s = (i.left + i.right) / 2,
							u = (i.top + i.bottom) / 2,
							c = o.rotation,
							d = o.rotation,
							h = r.getDataset(),
							f =
								(n && l.animateRotate) || t.hidden
									? 0
									: r.calculateCircumference(h.data[e]) *
									  (o.circumference / Nt),
							g = n && l.animateScale ? 0 : r.innerRadius,
							p = n && l.animateScale ? 0 : r.outerRadius,
							m = t._options || {};
						H.extend(t, {
							_datasetIndex: r.index,
							_index: e,
							_model: {
								backgroundColor: m.backgroundColor,
								borderColor: m.borderColor,
								borderWidth: m.borderWidth,
								borderAlign: m.borderAlign,
								x: s + a.offsetX,
								y: u + a.offsetY,
								startAngle: c,
								endAngle: d,
								circumference: f,
								outerRadius: p,
								innerRadius: g,
								label: H.valueAtIndexOrDefault(h.label, e, a.data.labels[e]),
							},
						});
						var v = t._model;
						(n && l.animateRotate) ||
							((v.startAngle =
								0 === e ? o.rotation : r.getMeta().data[e - 1]._model.endAngle),
							(v.endAngle = v.startAngle + v.circumference)),
							t.pivot();
					},
					calculateTotal: function () {
						var t,
							e = this.getDataset(),
							n = this.getMeta(),
							r = 0;
						return (
							H.each(n.data, function (n, a) {
								(t = e.data[a]), isNaN(t) || n.hidden || (r += Math.abs(t));
							}),
							r
						);
					},
					calculateCircumference: function (t) {
						var e = this.getMeta().total;
						return e > 0 && !isNaN(t) ? Nt * (Math.abs(t) / e) : 0;
					},
					getMaxBorderWidth: function (t) {
						var e,
							n,
							r,
							a,
							i,
							o,
							l,
							s,
							u = 0,
							c = this.chart;
						if (!t)
							for (e = 0, n = c.data.datasets.length; e < n; ++e)
								if (c.isDatasetVisible(e)) {
									(t = (r = c.getDatasetMeta(e)).data),
										e !== this.index && (i = r.controller);
									break;
								}
						if (!t) return 0;
						for (e = 0, n = t.length; e < n; ++e)
							(a = t[e]),
								i
									? (i._configure(), (o = i._resolveDataElementOptions(a, e)))
									: (o = a._options),
								'inner' !== o.borderAlign &&
									((l = o.borderWidth),
									(u = (s = o.hoverBorderWidth) > (u = l > u ? l : u) ? s : u));
						return u;
					},
					setHoverStyle: function (t) {
						var e = t._model,
							n = t._options,
							r = H.getHoverColor;
						(t.$previousStyle = {
							backgroundColor: e.backgroundColor,
							borderColor: e.borderColor,
							borderWidth: e.borderWidth,
						}),
							(e.backgroundColor = Et(
								n.hoverBackgroundColor,
								r(n.backgroundColor)
							)),
							(e.borderColor = Et(n.hoverBorderColor, r(n.borderColor))),
							(e.borderWidth = Et(n.hoverBorderWidth, n.borderWidth));
					},
					_getRingWeightOffset: function (t) {
						for (var e = 0, n = 0; n < t; ++n)
							this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
						return e;
					},
					_getRingWeight: function (t) {
						return Math.max(Et(this.chart.data.datasets[t].weight, 1), 0);
					},
					_getVisibleDatasetWeightTotal: function () {
						return this._getRingWeightOffset(this.chart.data.datasets.length);
					},
				});
				z._set('horizontalBar', {
					hover: {mode: 'index', axis: 'y'},
					scales: {
						xAxes: [{type: 'linear', position: 'bottom'}],
						yAxes: [
							{
								type: 'category',
								position: 'left',
								offset: !0,
								gridLines: {offsetGridLines: !0},
							},
						],
					},
					elements: {rectangle: {borderSkipped: 'left'}},
					tooltips: {mode: 'index', axis: 'y'},
				}),
					z._set('global', {
						datasets: {
							horizontalBar: {categoryPercentage: 0.8, barPercentage: 0.9},
						},
					});
				var Wt = Tt.extend({
						_getValueScaleId: function () {
							return this.getMeta().xAxisID;
						},
						_getIndexScaleId: function () {
							return this.getMeta().yAxisID;
						},
					}),
					Vt = H.valueOrDefault,
					jt = H.options.resolve,
					Ht = H.canvas._isPointInArea;
				function qt(t, e) {
					var n = (t && t.options.ticks) || {},
						r = n.reverse,
						a = void 0 === n.min ? e : 0,
						i = void 0 === n.max ? e : 0;
					return {start: r ? i : a, end: r ? a : i};
				}
				function Ut(t, e, n) {
					var r = n / 2,
						a = qt(t, r),
						i = qt(e, r);
					return {top: i.end, right: a.end, bottom: i.start, left: a.start};
				}
				function Zt(t) {
					var e, n, r, a;
					return (
						H.isObject(t)
							? ((e = t.top), (n = t.right), (r = t.bottom), (a = t.left))
							: (e = n = r = a = t),
						{top: e, right: n, bottom: r, left: a}
					);
				}
				z._set('line', {
					showLines: !0,
					spanGaps: !1,
					hover: {mode: 'label'},
					scales: {
						xAxes: [{type: 'category', id: 'x-axis-0'}],
						yAxes: [{type: 'linear', id: 'y-axis-0'}],
					},
				});
				var Yt = at.extend({
						datasetElementType: wt.Line,
						dataElementType: wt.Point,
						_datasetElementOptions: [
							'backgroundColor',
							'borderCapStyle',
							'borderColor',
							'borderDash',
							'borderDashOffset',
							'borderJoinStyle',
							'borderWidth',
							'cubicInterpolationMode',
							'fill',
						],
						_dataElementOptions: {
							backgroundColor: 'pointBackgroundColor',
							borderColor: 'pointBorderColor',
							borderWidth: 'pointBorderWidth',
							hitRadius: 'pointHitRadius',
							hoverBackgroundColor: 'pointHoverBackgroundColor',
							hoverBorderColor: 'pointHoverBorderColor',
							hoverBorderWidth: 'pointHoverBorderWidth',
							hoverRadius: 'pointHoverRadius',
							pointStyle: 'pointStyle',
							radius: 'pointRadius',
							rotation: 'pointRotation',
						},
						update: function (t) {
							var e,
								n,
								r = this,
								a = r.getMeta(),
								i = a.dataset,
								o = a.data || [],
								l = r.chart.options,
								s = r._config,
								u = (r._showLine = Vt(s.showLine, l.showLines));
							for (
								r._xScale = r.getScaleForId(a.xAxisID),
									r._yScale = r.getScaleForId(a.yAxisID),
									u &&
										(void 0 !== s.tension &&
											void 0 === s.lineTension &&
											(s.lineTension = s.tension),
										(i._scale = r._yScale),
										(i._datasetIndex = r.index),
										(i._children = o),
										(i._model = r._resolveDatasetElementOptions(i)),
										i.pivot()),
									e = 0,
									n = o.length;
								e < n;
								++e
							)
								r.updateElement(o[e], e, t);
							for (
								u && 0 !== i._model.tension && r.updateBezierControlPoints(),
									e = 0,
									n = o.length;
								e < n;
								++e
							)
								o[e].pivot();
						},
						updateElement: function (t, e, n) {
							var r,
								a,
								i = this,
								o = i.getMeta(),
								l = t.custom || {},
								s = i.getDataset(),
								u = i.index,
								c = s.data[e],
								d = i._xScale,
								h = i._yScale,
								f = o.dataset._model,
								g = i._resolveDataElementOptions(t, e);
							(r = d.getPixelForValue('object' == typeof c ? c : NaN, e, u)),
								(a = n ? h.getBasePixel() : i.calculatePointY(c, e, u)),
								(t._xScale = d),
								(t._yScale = h),
								(t._options = g),
								(t._datasetIndex = u),
								(t._index = e),
								(t._model = {
									x: r,
									y: a,
									skip: l.skip || isNaN(r) || isNaN(a),
									radius: g.radius,
									pointStyle: g.pointStyle,
									rotation: g.rotation,
									backgroundColor: g.backgroundColor,
									borderColor: g.borderColor,
									borderWidth: g.borderWidth,
									tension: Vt(l.tension, f ? f.tension : 0),
									steppedLine: !!f && f.steppedLine,
									hitRadius: g.hitRadius,
								});
						},
						_resolveDatasetElementOptions: function (t) {
							var e = this,
								n = e._config,
								r = t.custom || {},
								a = e.chart.options,
								i = a.elements.line,
								o = at.prototype._resolveDatasetElementOptions.apply(
									e,
									arguments
								);
							return (
								(o.spanGaps = Vt(n.spanGaps, a.spanGaps)),
								(o.tension = Vt(n.lineTension, i.tension)),
								(o.steppedLine = jt([r.steppedLine, n.steppedLine, i.stepped])),
								(o.clip = Zt(
									Vt(n.clip, Ut(e._xScale, e._yScale, o.borderWidth))
								)),
								o
							);
						},
						calculatePointY: function (t, e, n) {
							var r,
								a,
								i,
								o,
								l,
								s,
								u,
								c = this.chart,
								d = this._yScale,
								h = 0,
								f = 0;
							if (d.options.stacked) {
								for (
									l = +d.getRightValue(t),
										u = (s = c._getSortedVisibleDatasetMetas()).length,
										r = 0;
									r < u && (i = s[r]).index !== n;
									++r
								)
									(a = c.data.datasets[i.index]),
										'line' === i.type &&
											i.yAxisID === d.id &&
											((o = +d.getRightValue(a.data[e])) < 0
												? (f += o || 0)
												: (h += o || 0));
								return l < 0
									? d.getPixelForValue(f + l)
									: d.getPixelForValue(h + l);
							}
							return d.getPixelForValue(t);
						},
						updateBezierControlPoints: function () {
							var t,
								e,
								n,
								r,
								a = this.chart,
								i = this.getMeta(),
								o = i.dataset._model,
								l = a.chartArea,
								s = i.data || [];
							function u(t, e, n) {
								return Math.max(Math.min(t, n), e);
							}
							if (
								(o.spanGaps &&
									(s = s.filter(function (t) {
										return !t._model.skip;
									})),
								'monotone' === o.cubicInterpolationMode)
							)
								H.splineCurveMonotone(s);
							else
								for (t = 0, e = s.length; t < e; ++t)
									(n = s[t]._model),
										(r = H.splineCurve(
											H.previousItem(s, t)._model,
											n,
											H.nextItem(s, t)._model,
											o.tension
										)),
										(n.controlPointPreviousX = r.previous.x),
										(n.controlPointPreviousY = r.previous.y),
										(n.controlPointNextX = r.next.x),
										(n.controlPointNextY = r.next.y);
							if (a.options.elements.line.capBezierPoints)
								for (t = 0, e = s.length; t < e; ++t)
									(n = s[t]._model),
										Ht(n, l) &&
											(t > 0 &&
												Ht(s[t - 1]._model, l) &&
												((n.controlPointPreviousX = u(
													n.controlPointPreviousX,
													l.left,
													l.right
												)),
												(n.controlPointPreviousY = u(
													n.controlPointPreviousY,
													l.top,
													l.bottom
												))),
											t < s.length - 1 &&
												Ht(s[t + 1]._model, l) &&
												((n.controlPointNextX = u(
													n.controlPointNextX,
													l.left,
													l.right
												)),
												(n.controlPointNextY = u(
													n.controlPointNextY,
													l.top,
													l.bottom
												))));
						},
						draw: function () {
							var t,
								e = this,
								n = e.chart,
								r = e.getMeta(),
								a = r.data || [],
								i = n.chartArea,
								o = n.canvas,
								l = 0,
								s = a.length;
							for (
								e._showLine &&
								((t = r.dataset._model.clip),
								H.canvas.clipArea(n.ctx, {
									left: !1 === t.left ? 0 : i.left - t.left,
									right: !1 === t.right ? o.width : i.right + t.right,
									top: !1 === t.top ? 0 : i.top - t.top,
									bottom: !1 === t.bottom ? o.height : i.bottom + t.bottom,
								}),
								r.dataset.draw(),
								H.canvas.unclipArea(n.ctx));
								l < s;
								++l
							)
								a[l].draw(i);
						},
						setHoverStyle: function (t) {
							var e = t._model,
								n = t._options,
								r = H.getHoverColor;
							(t.$previousStyle = {
								backgroundColor: e.backgroundColor,
								borderColor: e.borderColor,
								borderWidth: e.borderWidth,
								radius: e.radius,
							}),
								(e.backgroundColor = Vt(
									n.hoverBackgroundColor,
									r(n.backgroundColor)
								)),
								(e.borderColor = Vt(n.hoverBorderColor, r(n.borderColor))),
								(e.borderWidth = Vt(n.hoverBorderWidth, n.borderWidth)),
								(e.radius = Vt(n.hoverRadius, n.radius));
						},
					}),
					Kt = H.options.resolve;
				z._set('polarArea', {
					scale: {
						type: 'radialLinear',
						angleLines: {display: !1},
						gridLines: {circular: !0},
						pointLabels: {display: !1},
						ticks: {beginAtZero: !0},
					},
					animation: {animateRotate: !0, animateScale: !0},
					startAngle: -0.5 * Math.PI,
					legendCallback: function (t) {
						var e,
							n,
							r,
							a = document.createElement('ul'),
							i = t.data,
							o = i.datasets,
							l = i.labels;
						if ((a.setAttribute('class', t.id + '-legend'), o.length))
							for (e = 0, n = o[0].data.length; e < n; ++e)
								((r = a.appendChild(document.createElement('li'))).appendChild(
									document.createElement('span')
								).style.backgroundColor = o[0].backgroundColor[e]),
									l[e] && r.appendChild(document.createTextNode(l[e]));
						return a.outerHTML;
					},
					legend: {
						labels: {
							generateLabels: function (t) {
								var e = t.data;
								return e.labels.length && e.datasets.length
									? e.labels.map(function (n, r) {
											var a = t.getDatasetMeta(0),
												i = a.controller.getStyle(r);
											return {
												text: n,
												fillStyle: i.backgroundColor,
												strokeStyle: i.borderColor,
												lineWidth: i.borderWidth,
												hidden:
													isNaN(e.datasets[0].data[r]) || a.data[r].hidden,
												index: r,
											};
									  })
									: [];
							},
						},
						onClick: function (t, e) {
							var n,
								r,
								a,
								i = e.index,
								o = this.chart;
							for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
								(a = o.getDatasetMeta(n)).data[i].hidden = !a.data[i].hidden;
							o.update();
						},
					},
					tooltips: {
						callbacks: {
							title: function () {
								return '';
							},
							label: function (t, e) {
								return e.labels[t.index] + ': ' + t.yLabel;
							},
						},
					},
				});
				var $t = at.extend({
					dataElementType: wt.Arc,
					linkScales: H.noop,
					_dataElementOptions: [
						'backgroundColor',
						'borderColor',
						'borderWidth',
						'borderAlign',
						'hoverBackgroundColor',
						'hoverBorderColor',
						'hoverBorderWidth',
					],
					_getIndexScaleId: function () {
						return this.chart.scale.id;
					},
					_getValueScaleId: function () {
						return this.chart.scale.id;
					},
					update: function (t) {
						var e,
							n,
							r,
							a = this,
							i = a.getDataset(),
							o = a.getMeta(),
							l = a.chart.options.startAngle || 0,
							s = (a._starts = []),
							u = (a._angles = []),
							c = o.data;
						for (
							a._updateRadius(),
								o.count = a.countVisibleElements(),
								e = 0,
								n = i.data.length;
							e < n;
							e++
						)
							(s[e] = l), (r = a._computeAngle(e)), (u[e] = r), (l += r);
						for (e = 0, n = c.length; e < n; ++e)
							(c[e]._options = a._resolveDataElementOptions(c[e], e)),
								a.updateElement(c[e], e, t);
					},
					_updateRadius: function () {
						var t = this,
							e = t.chart,
							n = e.chartArea,
							r = e.options,
							a = Math.min(n.right - n.left, n.bottom - n.top);
						(e.outerRadius = Math.max(a / 2, 0)),
							(e.innerRadius = Math.max(
								r.cutoutPercentage
									? (e.outerRadius / 100) * r.cutoutPercentage
									: 1,
								0
							)),
							(e.radiusLength =
								(e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
							(t.outerRadius = e.outerRadius - e.radiusLength * t.index),
							(t.innerRadius = t.outerRadius - e.radiusLength);
					},
					updateElement: function (t, e, n) {
						var r = this,
							a = r.chart,
							i = r.getDataset(),
							o = a.options,
							l = o.animation,
							s = a.scale,
							u = a.data.labels,
							c = s.xCenter,
							d = s.yCenter,
							h = o.startAngle,
							f = t.hidden ? 0 : s.getDistanceFromCenterForValue(i.data[e]),
							g = r._starts[e],
							p = g + (t.hidden ? 0 : r._angles[e]),
							m = l.animateScale
								? 0
								: s.getDistanceFromCenterForValue(i.data[e]),
							v = t._options || {};
						H.extend(t, {
							_datasetIndex: r.index,
							_index: e,
							_scale: s,
							_model: {
								backgroundColor: v.backgroundColor,
								borderColor: v.borderColor,
								borderWidth: v.borderWidth,
								borderAlign: v.borderAlign,
								x: c,
								y: d,
								innerRadius: 0,
								outerRadius: n ? m : f,
								startAngle: n && l.animateRotate ? h : g,
								endAngle: n && l.animateRotate ? h : p,
								label: H.valueAtIndexOrDefault(u, e, u[e]),
							},
						}),
							t.pivot();
					},
					countVisibleElements: function () {
						var t = this.getDataset(),
							e = this.getMeta(),
							n = 0;
						return (
							H.each(e.data, function (e, r) {
								isNaN(t.data[r]) || e.hidden || n++;
							}),
							n
						);
					},
					setHoverStyle: function (t) {
						var e = t._model,
							n = t._options,
							r = H.getHoverColor,
							a = H.valueOrDefault;
						(t.$previousStyle = {
							backgroundColor: e.backgroundColor,
							borderColor: e.borderColor,
							borderWidth: e.borderWidth,
						}),
							(e.backgroundColor = a(
								n.hoverBackgroundColor,
								r(n.backgroundColor)
							)),
							(e.borderColor = a(n.hoverBorderColor, r(n.borderColor))),
							(e.borderWidth = a(n.hoverBorderWidth, n.borderWidth));
					},
					_computeAngle: function (t) {
						var e = this,
							n = this.getMeta().count,
							r = e.getDataset(),
							a = e.getMeta();
						if (isNaN(r.data[t]) || a.data[t].hidden) return 0;
						var i = {
							chart: e.chart,
							dataIndex: t,
							dataset: r,
							datasetIndex: e.index,
						};
						return Kt(
							[e.chart.options.elements.arc.angle, (2 * Math.PI) / n],
							i,
							t
						);
					},
				});
				z._set('pie', H.clone(z.doughnut)),
					z._set('pie', {cutoutPercentage: 0});
				var Gt = Bt,
					Xt = H.valueOrDefault;
				z._set('radar', {
					spanGaps: !1,
					scale: {type: 'radialLinear'},
					elements: {line: {fill: 'start', tension: 0}},
				});
				var Jt = at.extend({
					datasetElementType: wt.Line,
					dataElementType: wt.Point,
					linkScales: H.noop,
					_datasetElementOptions: [
						'backgroundColor',
						'borderWidth',
						'borderColor',
						'borderCapStyle',
						'borderDash',
						'borderDashOffset',
						'borderJoinStyle',
						'fill',
					],
					_dataElementOptions: {
						backgroundColor: 'pointBackgroundColor',
						borderColor: 'pointBorderColor',
						borderWidth: 'pointBorderWidth',
						hitRadius: 'pointHitRadius',
						hoverBackgroundColor: 'pointHoverBackgroundColor',
						hoverBorderColor: 'pointHoverBorderColor',
						hoverBorderWidth: 'pointHoverBorderWidth',
						hoverRadius: 'pointHoverRadius',
						pointStyle: 'pointStyle',
						radius: 'pointRadius',
						rotation: 'pointRotation',
					},
					_getIndexScaleId: function () {
						return this.chart.scale.id;
					},
					_getValueScaleId: function () {
						return this.chart.scale.id;
					},
					update: function (t) {
						var e,
							n,
							r = this,
							a = r.getMeta(),
							i = a.dataset,
							o = a.data || [],
							l = r.chart.scale,
							s = r._config;
						for (
							void 0 !== s.tension &&
								void 0 === s.lineTension &&
								(s.lineTension = s.tension),
								i._scale = l,
								i._datasetIndex = r.index,
								i._children = o,
								i._loop = !0,
								i._model = r._resolveDatasetElementOptions(i),
								i.pivot(),
								e = 0,
								n = o.length;
							e < n;
							++e
						)
							r.updateElement(o[e], e, t);
						for (r.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
							o[e].pivot();
					},
					updateElement: function (t, e, n) {
						var r = this,
							a = t.custom || {},
							i = r.getDataset(),
							o = r.chart.scale,
							l = o.getPointPositionForValue(e, i.data[e]),
							s = r._resolveDataElementOptions(t, e),
							u = r.getMeta().dataset._model,
							c = n ? o.xCenter : l.x,
							d = n ? o.yCenter : l.y;
						(t._scale = o),
							(t._options = s),
							(t._datasetIndex = r.index),
							(t._index = e),
							(t._model = {
								x: c,
								y: d,
								skip: a.skip || isNaN(c) || isNaN(d),
								radius: s.radius,
								pointStyle: s.pointStyle,
								rotation: s.rotation,
								backgroundColor: s.backgroundColor,
								borderColor: s.borderColor,
								borderWidth: s.borderWidth,
								tension: Xt(a.tension, u ? u.tension : 0),
								hitRadius: s.hitRadius,
							});
					},
					_resolveDatasetElementOptions: function () {
						var t = this,
							e = t._config,
							n = t.chart.options,
							r = at.prototype._resolveDatasetElementOptions.apply(
								t,
								arguments
							);
						return (
							(r.spanGaps = Xt(e.spanGaps, n.spanGaps)),
							(r.tension = Xt(e.lineTension, n.elements.line.tension)),
							r
						);
					},
					updateBezierControlPoints: function () {
						var t,
							e,
							n,
							r,
							a = this.getMeta(),
							i = this.chart.chartArea,
							o = a.data || [];
						function l(t, e, n) {
							return Math.max(Math.min(t, n), e);
						}
						for (
							a.dataset._model.spanGaps &&
								(o = o.filter(function (t) {
									return !t._model.skip;
								})),
								t = 0,
								e = o.length;
							t < e;
							++t
						)
							(n = o[t]._model),
								(r = H.splineCurve(
									H.previousItem(o, t, !0)._model,
									n,
									H.nextItem(o, t, !0)._model,
									n.tension
								)),
								(n.controlPointPreviousX = l(r.previous.x, i.left, i.right)),
								(n.controlPointPreviousY = l(r.previous.y, i.top, i.bottom)),
								(n.controlPointNextX = l(r.next.x, i.left, i.right)),
								(n.controlPointNextY = l(r.next.y, i.top, i.bottom));
					},
					setHoverStyle: function (t) {
						var e = t._model,
							n = t._options,
							r = H.getHoverColor;
						(t.$previousStyle = {
							backgroundColor: e.backgroundColor,
							borderColor: e.borderColor,
							borderWidth: e.borderWidth,
							radius: e.radius,
						}),
							(e.backgroundColor = Xt(
								n.hoverBackgroundColor,
								r(n.backgroundColor)
							)),
							(e.borderColor = Xt(n.hoverBorderColor, r(n.borderColor))),
							(e.borderWidth = Xt(n.hoverBorderWidth, n.borderWidth)),
							(e.radius = Xt(n.hoverRadius, n.radius));
					},
				});
				z._set('scatter', {
					hover: {mode: 'single'},
					scales: {
						xAxes: [{id: 'x-axis-1', type: 'linear', position: 'bottom'}],
						yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left'}],
					},
					tooltips: {
						callbacks: {
							title: function () {
								return '';
							},
							label: function (t) {
								return '(' + t.xLabel + ', ' + t.yLabel + ')';
							},
						},
					},
				}),
					z._set('global', {datasets: {scatter: {showLine: !1}}});
				var Qt = {
					bar: Tt,
					bubble: Lt,
					doughnut: Bt,
					horizontalBar: Wt,
					line: Yt,
					polarArea: $t,
					pie: Gt,
					radar: Jt,
					scatter: Yt,
				};
				function te(t, e) {
					return t.native ? {x: t.x, y: t.y} : H.getRelativePosition(t, e);
				}
				function ee(t, e) {
					var n,
						r,
						a,
						i,
						o,
						l,
						s = t._getSortedVisibleDatasetMetas();
					for (r = 0, i = s.length; r < i; ++r)
						for (a = 0, o = (n = s[r].data).length; a < o; ++a)
							(l = n[a])._view.skip || e(l);
				}
				function ne(t, e) {
					var n = [];
					return (
						ee(t, function (t) {
							t.inRange(e.x, e.y) && n.push(t);
						}),
						n
					);
				}
				function re(t, e, n, r) {
					var a = Number.POSITIVE_INFINITY,
						i = [];
					return (
						ee(t, function (t) {
							if (!n || t.inRange(e.x, e.y)) {
								var o = t.getCenterPoint(),
									l = r(e, o);
								l < a ? ((i = [t]), (a = l)) : l === a && i.push(t);
							}
						}),
						i
					);
				}
				function ae(t) {
					var e = -1 !== t.indexOf('x'),
						n = -1 !== t.indexOf('y');
					return function (t, r) {
						var a = e ? Math.abs(t.x - r.x) : 0,
							i = n ? Math.abs(t.y - r.y) : 0;
						return Math.sqrt(Math.pow(a, 2) + Math.pow(i, 2));
					};
				}
				function ie(t, e, n) {
					var r = te(e, t);
					n.axis = n.axis || 'x';
					var a = ae(n.axis),
						i = n.intersect ? ne(t, r) : re(t, r, !1, a),
						o = [];
					return i.length
						? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
								var e = t.data[i[0]._index];
								e && !e._view.skip && o.push(e);
						  }),
						  o)
						: [];
				}
				var oe = {
						modes: {
							single: function (t, e) {
								var n = te(e, t),
									r = [];
								return (
									ee(t, function (t) {
										if (t.inRange(n.x, n.y)) return r.push(t), r;
									}),
									r.slice(0, 1)
								);
							},
							label: ie,
							index: ie,
							dataset: function (t, e, n) {
								var r = te(e, t);
								n.axis = n.axis || 'xy';
								var a = ae(n.axis),
									i = n.intersect ? ne(t, r) : re(t, r, !1, a);
								return (
									i.length > 0 &&
										(i = t.getDatasetMeta(i[0]._datasetIndex).data),
									i
								);
							},
							'x-axis': function (t, e) {
								return ie(t, e, {intersect: !1});
							},
							point: function (t, e) {
								return ne(t, te(e, t));
							},
							nearest: function (t, e, n) {
								var r = te(e, t);
								n.axis = n.axis || 'xy';
								var a = ae(n.axis);
								return re(t, r, n.intersect, a);
							},
							x: function (t, e, n) {
								var r = te(e, t),
									a = [],
									i = !1;
								return (
									ee(t, function (t) {
										t.inXRange(r.x) && a.push(t),
											t.inRange(r.x, r.y) && (i = !0);
									}),
									n.intersect && !i && (a = []),
									a
								);
							},
							y: function (t, e, n) {
								var r = te(e, t),
									a = [],
									i = !1;
								return (
									ee(t, function (t) {
										t.inYRange(r.y) && a.push(t),
											t.inRange(r.x, r.y) && (i = !0);
									}),
									n.intersect && !i && (a = []),
									a
								);
							},
						},
					},
					le = H.extend;
				function se(t, e) {
					return H.where(t, function (t) {
						return t.pos === e;
					});
				}
				function ue(t, e) {
					return t.sort(function (t, n) {
						var r = e ? n : t,
							a = e ? t : n;
						return r.weight === a.weight
							? r.index - a.index
							: r.weight - a.weight;
					});
				}
				function ce(t, e, n, r) {
					return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
				}
				function de(t, e, n) {
					var r,
						a,
						i = n.box,
						o = t.maxPadding;
					if (
						(n.size && (t[n.pos] -= n.size),
						(n.size = n.horizontal ? i.height : i.width),
						(t[n.pos] += n.size),
						i.getPadding)
					) {
						var l = i.getPadding();
						(o.top = Math.max(o.top, l.top)),
							(o.left = Math.max(o.left, l.left)),
							(o.bottom = Math.max(o.bottom, l.bottom)),
							(o.right = Math.max(o.right, l.right));
					}
					if (
						((r = e.outerWidth - ce(o, t, 'left', 'right')),
						(a = e.outerHeight - ce(o, t, 'top', 'bottom')),
						r !== t.w || a !== t.h)
					) {
						(t.w = r), (t.h = a);
						var s = n.horizontal ? [r, t.w] : [a, t.h];
						return !(s[0] === s[1] || (isNaN(s[0]) && isNaN(s[1])));
					}
				}
				function he(t, e) {
					var n,
						r = e.maxPadding;
					return (
						(n = {left: 0, top: 0, right: 0, bottom: 0}),
						(t ? ['left', 'right'] : ['top', 'bottom']).forEach(function (t) {
							n[t] = Math.max(e[t], r[t]);
						}),
						n
					);
				}
				function fe(t, e, n) {
					var r,
						a,
						i,
						o,
						l,
						s,
						u = [];
					for (r = 0, a = t.length; r < a; ++r)
						(o = (i = t[r]).box).update(
							i.width || e.w,
							i.height || e.h,
							he(i.horizontal, e)
						),
							de(e, n, i) && ((s = !0), u.length && (l = !0)),
							o.fullWidth || u.push(i);
					return (l && fe(u, e, n)) || s;
				}
				function ge(t, e, n) {
					var r,
						a,
						i,
						o,
						l = n.padding,
						s = e.x,
						u = e.y;
					for (r = 0, a = t.length; r < a; ++r)
						(o = (i = t[r]).box),
							i.horizontal
								? ((o.left = o.fullWidth ? l.left : e.left),
								  (o.right = o.fullWidth
										? n.outerWidth - l.right
										: e.left + e.w),
								  (o.top = u),
								  (o.bottom = u + o.height),
								  (o.width = o.right - o.left),
								  (u = o.bottom))
								: ((o.left = s),
								  (o.right = s + o.width),
								  (o.top = e.top),
								  (o.bottom = e.top + e.h),
								  (o.height = o.bottom - o.top),
								  (s = o.right));
					(e.x = s), (e.y = u);
				}
				z._set('global', {
					layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}},
				});
				var pe,
					me = {
						defaults: {},
						addBox: function (t, e) {
							t.boxes || (t.boxes = []),
								(e.fullWidth = e.fullWidth || !1),
								(e.position = e.position || 'top'),
								(e.weight = e.weight || 0),
								(e._layers =
									e._layers ||
									function () {
										return [
											{
												z: 0,
												draw: function () {
													e.draw.apply(e, arguments);
												},
											},
										];
									}),
								t.boxes.push(e);
						},
						removeBox: function (t, e) {
							var n = t.boxes ? t.boxes.indexOf(e) : -1;
							-1 !== n && t.boxes.splice(n, 1);
						},
						configure: function (t, e, n) {
							for (
								var r,
									a = ['fullWidth', 'position', 'weight'],
									i = a.length,
									o = 0;
								o < i;
								++o
							)
								(r = a[o]), n.hasOwnProperty(r) && (e[r] = n[r]);
						},
						update: function (t, e, n) {
							if (t) {
								var r = t.options.layout || {},
									a = H.options.toPadding(r.padding),
									i = e - a.width,
									o = n - a.height,
									l = (function (t) {
										var e = (function (t) {
												var e,
													n,
													r,
													a = [];
												for (e = 0, n = (t || []).length; e < n; ++e)
													(r = t[e]),
														a.push({
															index: e,
															box: r,
															pos: r.position,
															horizontal: r.isHorizontal(),
															weight: r.weight,
														});
												return a;
											})(t),
											n = ue(se(e, 'left'), !0),
											r = ue(se(e, 'right')),
											a = ue(se(e, 'top'), !0),
											i = ue(se(e, 'bottom'));
										return {
											leftAndTop: n.concat(a),
											rightAndBottom: r.concat(i),
											chartArea: se(e, 'chartArea'),
											vertical: n.concat(r),
											horizontal: a.concat(i),
										};
									})(t.boxes),
									s = l.vertical,
									u = l.horizontal,
									c = Object.freeze({
										outerWidth: e,
										outerHeight: n,
										padding: a,
										availableWidth: i,
										vBoxMaxWidth: i / 2 / s.length,
										hBoxMaxHeight: o / 2,
									}),
									d = le(
										{maxPadding: le({}, a), w: i, h: o, x: a.left, y: a.top},
										a
									);
								(function (t, e) {
									var n, r, a;
									for (n = 0, r = t.length; n < r; ++n)
										((a = t[n]).width = a.horizontal
											? a.box.fullWidth && e.availableWidth
											: e.vBoxMaxWidth),
											(a.height = a.horizontal && e.hBoxMaxHeight);
								})(s.concat(u), c),
									fe(s, d, c),
									fe(u, d, c) && fe(s, d, c),
									(function (t) {
										var e = t.maxPadding;
										function n(n) {
											var r = Math.max(e[n] - t[n], 0);
											return (t[n] += r), r;
										}
										(t.y += n('top')),
											(t.x += n('left')),
											n('right'),
											n('bottom');
									})(d),
									ge(l.leftAndTop, d, c),
									(d.x += d.w),
									(d.y += d.h),
									ge(l.rightAndBottom, d, c),
									(t.chartArea = {
										left: d.left,
										top: d.top,
										right: d.left + d.w,
										bottom: d.top + d.h,
									}),
									H.each(l.chartArea, function (e) {
										var n = e.box;
										le(n, t.chartArea), n.update(d.w, d.h);
									});
							}
						},
					},
					ve =
						((pe = Object.freeze({
							__proto__: null,
							default:
								'/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n',
						})) &&
							pe.default) ||
						pe,
					be = 'chartjs-size-monitor',
					xe = 'chartjs-render-monitor',
					ye = ['animationstart', 'webkitAnimationStart'],
					_e = {
						touchstart: 'mousedown',
						touchmove: 'mousemove',
						touchend: 'mouseup',
						pointerenter: 'mouseenter',
						pointerdown: 'mousedown',
						pointermove: 'mousemove',
						pointerup: 'mouseup',
						pointerleave: 'mouseout',
						pointerout: 'mouseout',
					};
				function ke(t, e) {
					var n = H.getStyle(t, e),
						r = n && n.match(/^(\d+)(\.\d+)?px$/);
					return r ? Number(r[1]) : void 0;
				}
				var we = (function () {
						var t = !1;
						try {
							var e = Object.defineProperty({}, 'passive', {
								get: function () {
									t = !0;
								},
							});
							window.addEventListener('e', null, e);
						} catch (t) {}
						return t;
					})(),
					Me = !!we && {passive: !0};
				function Ce(t, e, n) {
					t.addEventListener(e, n, Me);
				}
				function Se(t, e, n) {
					t.removeEventListener(e, n, Me);
				}
				function Pe(t, e, n, r, a) {
					return {
						type: t,
						chart: e,
						native: a || null,
						x: void 0 !== n ? n : null,
						y: void 0 !== r ? r : null,
					};
				}
				function Ae(t) {
					var e = document.createElement('div');
					return (e.className = t || ''), e;
				}
				function De(t, e, n) {
					var r,
						a,
						i,
						o,
						l = t.$chartjs || (t.$chartjs = {}),
						s = (l.resizer = (function (t) {
							var e = 1e6,
								n = Ae(be),
								r = Ae(be + '-expand'),
								a = Ae(be + '-shrink');
							r.appendChild(Ae()),
								a.appendChild(Ae()),
								n.appendChild(r),
								n.appendChild(a),
								(n._reset = function () {
									(r.scrollLeft = e),
										(r.scrollTop = e),
										(a.scrollLeft = e),
										(a.scrollTop = e);
								});
							var i = function () {
								n._reset(), t();
							};
							return (
								Ce(r, 'scroll', i.bind(r, 'expand')),
								Ce(a, 'scroll', i.bind(a, 'shrink')),
								n
							);
						})(
							((r = function () {
								if (l.resizer) {
									var r = n.options.maintainAspectRatio && t.parentNode,
										a = r ? r.clientWidth : 0;
									e(Pe('resize', n)),
										r && r.clientWidth < a && n.canvas && e(Pe('resize', n));
								}
							}),
							(i = !1),
							(o = []),
							function () {
								(o = Array.prototype.slice.call(arguments)),
									(a = a || this),
									i ||
										((i = !0),
										H.requestAnimFrame.call(window, function () {
											(i = !1), r.apply(a, o);
										}));
							})
						));
					!(function (t, e) {
						var n = t.$chartjs || (t.$chartjs = {}),
							r = (n.renderProxy = function (t) {
								'chartjs-render-animation' === t.animationName && e();
							});
						H.each(ye, function (e) {
							Ce(t, e, r);
						}),
							(n.reflow = !!t.offsetParent),
							t.classList.add(xe);
					})(t, function () {
						if (l.resizer) {
							var e = t.parentNode;
							e && e !== s.parentNode && e.insertBefore(s, e.firstChild),
								s._reset();
						}
					});
				}
				function Oe(t) {
					var e = t.$chartjs || {},
						n = e.resizer;
					delete e.resizer,
						(function (t) {
							var e = t.$chartjs || {},
								n = e.renderProxy;
							n &&
								(H.each(ye, function (e) {
									Se(t, e, n);
								}),
								delete e.renderProxy),
								t.classList.remove(xe);
						})(t),
						n && n.parentNode && n.parentNode.removeChild(n);
				}
				var Te = {
					disableCSSInjection: !1,
					_enabled:
						'undefined' != typeof window && 'undefined' != typeof document,
					_ensureLoaded: function (t) {
						if (!this.disableCSSInjection) {
							var e = t.getRootNode ? t.getRootNode() : document;
							!(function (t, e) {
								var n = t.$chartjs || (t.$chartjs = {});
								if (!n.containsStyles) {
									(n.containsStyles = !0), (e = '/* Chart.js */\n' + e);
									var r = document.createElement('style');
									r.setAttribute('type', 'text/css'),
										r.appendChild(document.createTextNode(e)),
										t.appendChild(r);
								}
							})(e.host ? e : document.head, ve);
						}
					},
					acquireContext: function (t, e) {
						'string' == typeof t
							? (t = document.getElementById(t))
							: t.length && (t = t[0]),
							t && t.canvas && (t = t.canvas);
						var n = t && t.getContext && t.getContext('2d');
						return n && n.canvas === t
							? (this._ensureLoaded(t),
							  (function (t, e) {
									var n = t.style,
										r = t.getAttribute('height'),
										a = t.getAttribute('width');
									if (
										((t.$chartjs = {
											initial: {
												height: r,
												width: a,
												style: {
													display: n.display,
													height: n.height,
													width: n.width,
												},
											},
										}),
										(n.display = n.display || 'block'),
										null === a || '' === a)
									) {
										var i = ke(t, 'width');
										void 0 !== i && (t.width = i);
									}
									if (null === r || '' === r)
										if ('' === t.style.height)
											t.height = t.width / (e.options.aspectRatio || 2);
										else {
											var o = ke(t, 'height');
											void 0 !== i && (t.height = o);
										}
							  })(t, e),
							  n)
							: null;
					},
					releaseContext: function (t) {
						var e = t.canvas;
						if (e.$chartjs) {
							var n = e.$chartjs.initial;
							['height', 'width'].forEach(function (t) {
								var r = n[t];
								H.isNullOrUndef(r)
									? e.removeAttribute(t)
									: e.setAttribute(t, r);
							}),
								H.each(n.style || {}, function (t, n) {
									e.style[n] = t;
								}),
								(e.width = e.width),
								delete e.$chartjs;
						}
					},
					addEventListener: function (t, e, n) {
						var r = t.canvas;
						if ('resize' !== e) {
							var a = n.$chartjs || (n.$chartjs = {});
							Ce(
								r,
								e,
								((a.proxies || (a.proxies = {}))[t.id + '_' + e] = function (
									e
								) {
									n(
										(function (t, e) {
											var n = _e[t.type] || t.type,
												r = H.getRelativePosition(t, e);
											return Pe(n, e, r.x, r.y, t);
										})(e, t)
									);
								})
							);
						} else De(r, n, t);
					},
					removeEventListener: function (t, e, n) {
						var r = t.canvas;
						if ('resize' !== e) {
							var a = ((n.$chartjs || {}).proxies || {})[t.id + '_' + e];
							a && Se(r, e, a);
						} else Oe(r);
					},
				};
				(H.addEvent = Ce), (H.removeEvent = Se);
				var Ie = Te._enabled
						? Te
						: {
								acquireContext: function (t) {
									return (
										t && t.canvas && (t = t.canvas),
										(t && t.getContext('2d')) || null
									);
								},
						  },
					Fe = H.extend(
						{
							initialize: function () {},
							acquireContext: function () {},
							releaseContext: function () {},
							addEventListener: function () {},
							removeEventListener: function () {},
						},
						Ie
					);
				z._set('global', {plugins: {}});
				var Le = {
						_plugins: [],
						_cacheId: 0,
						register: function (t) {
							var e = this._plugins;
							[].concat(t).forEach(function (t) {
								-1 === e.indexOf(t) && e.push(t);
							}),
								this._cacheId++;
						},
						unregister: function (t) {
							var e = this._plugins;
							[].concat(t).forEach(function (t) {
								var n = e.indexOf(t);
								-1 !== n && e.splice(n, 1);
							}),
								this._cacheId++;
						},
						clear: function () {
							(this._plugins = []), this._cacheId++;
						},
						count: function () {
							return this._plugins.length;
						},
						getAll: function () {
							return this._plugins;
						},
						notify: function (t, e, n) {
							var r,
								a,
								i,
								o,
								l,
								s = this.descriptors(t),
								u = s.length;
							for (r = 0; r < u; ++r)
								if (
									'function' == typeof (l = (i = (a = s[r]).plugin)[e]) &&
									((o = [t].concat(n || [])).push(a.options),
									!1 === l.apply(i, o))
								)
									return !1;
							return !0;
						},
						descriptors: function (t) {
							var e = t.$plugins || (t.$plugins = {});
							if (e.id === this._cacheId) return e.descriptors;
							var n = [],
								r = [],
								a = (t && t.config) || {},
								i = (a.options && a.options.plugins) || {};
							return (
								this._plugins.concat(a.plugins || []).forEach(function (t) {
									if (-1 === n.indexOf(t)) {
										var e = t.id,
											a = i[e];
										!1 !== a &&
											(!0 === a && (a = H.clone(z.global.plugins[e])),
											n.push(t),
											r.push({plugin: t, options: a || {}}));
									}
								}),
								(e.descriptors = r),
								(e.id = this._cacheId),
								r
							);
						},
						_invalidate: function (t) {
							delete t.$plugins;
						},
					},
					Ee = {
						constructors: {},
						defaults: {},
						registerScaleType: function (t, e, n) {
							(this.constructors[t] = e), (this.defaults[t] = H.clone(n));
						},
						getScaleConstructor: function (t) {
							return this.constructors.hasOwnProperty(t)
								? this.constructors[t]
								: void 0;
						},
						getScaleDefaults: function (t) {
							return this.defaults.hasOwnProperty(t)
								? H.merge(Object.create(null), [z.scale, this.defaults[t]])
								: {};
						},
						updateScaleDefaults: function (t, e) {
							var n = this;
							n.defaults.hasOwnProperty(t) &&
								(n.defaults[t] = H.extend(n.defaults[t], e));
						},
						addScalesToLayout: function (t) {
							H.each(t.scales, function (e) {
								(e.fullWidth = e.options.fullWidth),
									(e.position = e.options.position),
									(e.weight = e.options.weight),
									me.addBox(t, e);
							});
						},
					},
					Re = H.valueOrDefault,
					Ne = H.rtl.getRtlAdapter;
				z._set('global', {
					tooltips: {
						enabled: !0,
						custom: null,
						mode: 'nearest',
						position: 'average',
						intersect: !0,
						backgroundColor: 'rgba(0,0,0,0.8)',
						titleFontStyle: 'bold',
						titleSpacing: 2,
						titleMarginBottom: 6,
						titleFontColor: '#fff',
						titleAlign: 'left',
						bodySpacing: 2,
						bodyFontColor: '#fff',
						bodyAlign: 'left',
						footerFontStyle: 'bold',
						footerSpacing: 2,
						footerMarginTop: 6,
						footerFontColor: '#fff',
						footerAlign: 'left',
						yPadding: 6,
						xPadding: 6,
						caretPadding: 2,
						caretSize: 5,
						cornerRadius: 6,
						multiKeyBackground: '#fff',
						displayColors: !0,
						borderColor: 'rgba(0,0,0,0)',
						borderWidth: 0,
						callbacks: {
							beforeTitle: H.noop,
							title: function (t, e) {
								var n = '',
									r = e.labels,
									a = r ? r.length : 0;
								if (t.length > 0) {
									var i = t[0];
									i.label
										? (n = i.label)
										: i.xLabel
										? (n = i.xLabel)
										: a > 0 && i.index < a && (n = r[i.index]);
								}
								return n;
							},
							afterTitle: H.noop,
							beforeBody: H.noop,
							beforeLabel: H.noop,
							label: function (t, e) {
								var n = e.datasets[t.datasetIndex].label || '';
								return (
									n && (n += ': '),
									H.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value),
									n
								);
							},
							labelColor: function (t, e) {
								var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
								return {
									borderColor: n.borderColor,
									backgroundColor: n.backgroundColor,
								};
							},
							labelTextColor: function () {
								return this._options.bodyFontColor;
							},
							afterLabel: H.noop,
							afterBody: H.noop,
							beforeFooter: H.noop,
							footer: H.noop,
							afterFooter: H.noop,
						},
					},
				});
				var ze = {
					average: function (t) {
						if (!t.length) return !1;
						var e,
							n,
							r = 0,
							a = 0,
							i = 0;
						for (e = 0, n = t.length; e < n; ++e) {
							var o = t[e];
							if (o && o.hasValue()) {
								var l = o.tooltipPosition();
								(r += l.x), (a += l.y), ++i;
							}
						}
						return {x: r / i, y: a / i};
					},
					nearest: function (t, e) {
						var n,
							r,
							a,
							i = e.x,
							o = e.y,
							l = Number.POSITIVE_INFINITY;
						for (n = 0, r = t.length; n < r; ++n) {
							var s = t[n];
							if (s && s.hasValue()) {
								var u = s.getCenterPoint(),
									c = H.distanceBetweenPoints(e, u);
								c < l && ((l = c), (a = s));
							}
						}
						if (a) {
							var d = a.tooltipPosition();
							(i = d.x), (o = d.y);
						}
						return {x: i, y: o};
					},
				};
				function Be(t, e) {
					return (
						e && (H.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
						t
					);
				}
				function We(t) {
					return ('string' == typeof t || t instanceof String) &&
						t.indexOf('\n') > -1
						? t.split('\n')
						: t;
				}
				function Ve(t) {
					var e = z.global;
					return {
						xPadding: t.xPadding,
						yPadding: t.yPadding,
						xAlign: t.xAlign,
						yAlign: t.yAlign,
						rtl: t.rtl,
						textDirection: t.textDirection,
						bodyFontColor: t.bodyFontColor,
						_bodyFontFamily: Re(t.bodyFontFamily, e.defaultFontFamily),
						_bodyFontStyle: Re(t.bodyFontStyle, e.defaultFontStyle),
						_bodyAlign: t.bodyAlign,
						bodyFontSize: Re(t.bodyFontSize, e.defaultFontSize),
						bodySpacing: t.bodySpacing,
						titleFontColor: t.titleFontColor,
						_titleFontFamily: Re(t.titleFontFamily, e.defaultFontFamily),
						_titleFontStyle: Re(t.titleFontStyle, e.defaultFontStyle),
						titleFontSize: Re(t.titleFontSize, e.defaultFontSize),
						_titleAlign: t.titleAlign,
						titleSpacing: t.titleSpacing,
						titleMarginBottom: t.titleMarginBottom,
						footerFontColor: t.footerFontColor,
						_footerFontFamily: Re(t.footerFontFamily, e.defaultFontFamily),
						_footerFontStyle: Re(t.footerFontStyle, e.defaultFontStyle),
						footerFontSize: Re(t.footerFontSize, e.defaultFontSize),
						_footerAlign: t.footerAlign,
						footerSpacing: t.footerSpacing,
						footerMarginTop: t.footerMarginTop,
						caretSize: t.caretSize,
						cornerRadius: t.cornerRadius,
						backgroundColor: t.backgroundColor,
						opacity: 0,
						legendColorBackground: t.multiKeyBackground,
						displayColors: t.displayColors,
						borderColor: t.borderColor,
						borderWidth: t.borderWidth,
					};
				}
				function je(t, e) {
					return 'center' === e
						? t.x + t.width / 2
						: 'right' === e
						? t.x + t.width - t.xPadding
						: t.x + t.xPadding;
				}
				function He(t) {
					return Be([], We(t));
				}
				var qe = G.extend({
						initialize: function () {
							(this._model = Ve(this._options)), (this._lastActive = []);
						},
						getTitle: function () {
							var t = this,
								e = t._options.callbacks,
								n = e.beforeTitle.apply(t, arguments),
								r = e.title.apply(t, arguments),
								a = e.afterTitle.apply(t, arguments),
								i = [];
							return (i = Be(i, We(n))), (i = Be(i, We(r))), Be(i, We(a));
						},
						getBeforeBody: function () {
							return He(
								this._options.callbacks.beforeBody.apply(this, arguments)
							);
						},
						getBody: function (t, e) {
							var n = this,
								r = n._options.callbacks,
								a = [];
							return (
								H.each(t, function (t) {
									var i = {before: [], lines: [], after: []};
									Be(i.before, We(r.beforeLabel.call(n, t, e))),
										Be(i.lines, r.label.call(n, t, e)),
										Be(i.after, We(r.afterLabel.call(n, t, e))),
										a.push(i);
								}),
								a
							);
						},
						getAfterBody: function () {
							return He(
								this._options.callbacks.afterBody.apply(this, arguments)
							);
						},
						getFooter: function () {
							var t = this,
								e = t._options.callbacks,
								n = e.beforeFooter.apply(t, arguments),
								r = e.footer.apply(t, arguments),
								a = e.afterFooter.apply(t, arguments),
								i = [];
							return (i = Be(i, We(n))), (i = Be(i, We(r))), Be(i, We(a));
						},
						update: function (t) {
							var e,
								n,
								r,
								a,
								i,
								o,
								l,
								s,
								u,
								c,
								d = this,
								h = d._options,
								f = d._model,
								g = (d._model = Ve(h)),
								p = d._active,
								m = d._data,
								v = {xAlign: f.xAlign, yAlign: f.yAlign},
								b = {x: f.x, y: f.y},
								x = {width: f.width, height: f.height},
								y = {x: f.caretX, y: f.caretY};
							if (p.length) {
								g.opacity = 1;
								var _ = [],
									k = [];
								y = ze[h.position].call(d, p, d._eventPosition);
								var w = [];
								for (e = 0, n = p.length; e < n; ++e)
									w.push(
										((r = p[e]),
										(a = void 0),
										(i = void 0),
										(o = void 0),
										(l = void 0),
										(s = void 0),
										(u = void 0),
										(c = void 0),
										(a = r._xScale),
										(i = r._yScale || r._scale),
										(o = r._index),
										(l = r._datasetIndex),
										(s = r._chart.getDatasetMeta(l).controller),
										(u = s._getIndexScale()),
										(c = s._getValueScale()),
										{
											xLabel: a ? a.getLabelForIndex(o, l) : '',
											yLabel: i ? i.getLabelForIndex(o, l) : '',
											label: u ? '' + u.getLabelForIndex(o, l) : '',
											value: c ? '' + c.getLabelForIndex(o, l) : '',
											index: o,
											datasetIndex: l,
											x: r._model.x,
											y: r._model.y,
										})
									);
								h.filter &&
									(w = w.filter(function (t) {
										return h.filter(t, m);
									})),
									h.itemSort &&
										(w = w.sort(function (t, e) {
											return h.itemSort(t, e, m);
										})),
									H.each(w, function (t) {
										_.push(h.callbacks.labelColor.call(d, t, d._chart)),
											k.push(h.callbacks.labelTextColor.call(d, t, d._chart));
									}),
									(g.title = d.getTitle(w, m)),
									(g.beforeBody = d.getBeforeBody(w, m)),
									(g.body = d.getBody(w, m)),
									(g.afterBody = d.getAfterBody(w, m)),
									(g.footer = d.getFooter(w, m)),
									(g.x = y.x),
									(g.y = y.y),
									(g.caretPadding = h.caretPadding),
									(g.labelColors = _),
									(g.labelTextColors = k),
									(g.dataPoints = w),
									(b = (function (t, e, n, r) {
										var a = t.x,
											i = t.y,
											o = t.caretSize,
											l = t.caretPadding,
											s = t.cornerRadius,
											u = n.xAlign,
											c = n.yAlign,
											d = o + l,
											h = s + l;
										return (
											'right' === u
												? (a -= e.width)
												: 'center' === u &&
												  ((a -= e.width / 2) + e.width > r.width &&
														(a = r.width - e.width),
												  a < 0 && (a = 0)),
											'top' === c
												? (i += d)
												: (i -= 'bottom' === c ? e.height + d : e.height / 2),
											'center' === c
												? 'left' === u
													? (a += d)
													: 'right' === u && (a -= d)
												: 'left' === u
												? (a -= h)
												: 'right' === u && (a += h),
											{x: a, y: i}
										);
									})(
										g,
										(x = (function (t, e) {
											var n = t._chart.ctx,
												r = 2 * e.yPadding,
												a = 0,
												i = e.body,
												o = i.reduce(function (t, e) {
													return (
														t +
														e.before.length +
														e.lines.length +
														e.after.length
													);
												}, 0);
											o += e.beforeBody.length + e.afterBody.length;
											var l = e.title.length,
												s = e.footer.length,
												u = e.titleFontSize,
												c = e.bodyFontSize,
												d = e.footerFontSize;
											(r += l * u),
												(r += l ? (l - 1) * e.titleSpacing : 0),
												(r += l ? e.titleMarginBottom : 0),
												(r += o * c),
												(r += o ? (o - 1) * e.bodySpacing : 0),
												(r += s ? e.footerMarginTop : 0),
												(r += s * d),
												(r += s ? (s - 1) * e.footerSpacing : 0);
											var h = 0,
												f = function (t) {
													a = Math.max(a, n.measureText(t).width + h);
												};
											return (
												(n.font = H.fontString(
													u,
													e._titleFontStyle,
													e._titleFontFamily
												)),
												H.each(e.title, f),
												(n.font = H.fontString(
													c,
													e._bodyFontStyle,
													e._bodyFontFamily
												)),
												H.each(e.beforeBody.concat(e.afterBody), f),
												(h = e.displayColors ? c + 2 : 0),
												H.each(i, function (t) {
													H.each(t.before, f),
														H.each(t.lines, f),
														H.each(t.after, f);
												}),
												(h = 0),
												(n.font = H.fontString(
													d,
													e._footerFontStyle,
													e._footerFontFamily
												)),
												H.each(e.footer, f),
												{width: (a += 2 * e.xPadding), height: r}
											);
										})(this, g)),
										(v = (function (t, e) {
											var n,
												r,
												a,
												i,
												o,
												l = t._model,
												s = t._chart,
												u = t._chart.chartArea,
												c = 'center',
												d = 'center';
											l.y < e.height
												? (d = 'top')
												: l.y > s.height - e.height && (d = 'bottom');
											var h = (u.left + u.right) / 2,
												f = (u.top + u.bottom) / 2;
											'center' === d
												? ((n = function (t) {
														return t <= h;
												  }),
												  (r = function (t) {
														return t > h;
												  }))
												: ((n = function (t) {
														return t <= e.width / 2;
												  }),
												  (r = function (t) {
														return t >= s.width - e.width / 2;
												  })),
												(a = function (t) {
													return (
														t + e.width + l.caretSize + l.caretPadding > s.width
													);
												}),
												(i = function (t) {
													return t - e.width - l.caretSize - l.caretPadding < 0;
												}),
												(o = function (t) {
													return t <= f ? 'top' : 'bottom';
												}),
												n(l.x)
													? ((c = 'left'),
													  a(l.x) && ((c = 'center'), (d = o(l.y))))
													: r(l.x) &&
													  ((c = 'right'),
													  i(l.x) && ((c = 'center'), (d = o(l.y))));
											var g = t._options;
											return {
												xAlign: g.xAlign ? g.xAlign : c,
												yAlign: g.yAlign ? g.yAlign : d,
											};
										})(this, x)),
										d._chart
									));
							} else g.opacity = 0;
							return (
								(g.xAlign = v.xAlign),
								(g.yAlign = v.yAlign),
								(g.x = b.x),
								(g.y = b.y),
								(g.width = x.width),
								(g.height = x.height),
								(g.caretX = y.x),
								(g.caretY = y.y),
								(d._model = g),
								t && h.custom && h.custom.call(d, g),
								d
							);
						},
						drawCaret: function (t, e) {
							var n = this._chart.ctx,
								r = this._view,
								a = this.getCaretPosition(t, e, r);
							n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
						},
						getCaretPosition: function (t, e, n) {
							var r,
								a,
								i,
								o,
								l,
								s,
								u = n.caretSize,
								c = n.cornerRadius,
								d = n.xAlign,
								h = n.yAlign,
								f = t.x,
								g = t.y,
								p = e.width,
								m = e.height;
							if ('center' === h)
								(l = g + m / 2),
									'left' === d
										? ((a = (r = f) - u), (i = r), (o = l + u), (s = l - u))
										: ((a = (r = f + p) + u),
										  (i = r),
										  (o = l - u),
										  (s = l + u));
							else if (
								('left' === d
									? ((r = (a = f + c + u) - u), (i = a + u))
									: 'right' === d
									? ((r = (a = f + p - c - u) - u), (i = a + u))
									: ((r = (a = n.caretX) - u), (i = a + u)),
								'top' === h)
							)
								(l = (o = g) - u), (s = o);
							else {
								(l = (o = g + m) + u), (s = o);
								var v = i;
								(i = r), (r = v);
							}
							return {x1: r, x2: a, x3: i, y1: o, y2: l, y3: s};
						},
						drawTitle: function (t, e, n) {
							var r,
								a,
								i,
								o = e.title,
								l = o.length;
							if (l) {
								var s = Ne(e.rtl, e.x, e.width);
								for (
									t.x = je(e, e._titleAlign),
										n.textAlign = s.textAlign(e._titleAlign),
										n.textBaseline = 'middle',
										r = e.titleFontSize,
										a = e.titleSpacing,
										n.fillStyle = e.titleFontColor,
										n.font = H.fontString(
											r,
											e._titleFontStyle,
											e._titleFontFamily
										),
										i = 0;
									i < l;
									++i
								)
									n.fillText(o[i], s.x(t.x), t.y + r / 2),
										(t.y += r + a),
										i + 1 === l && (t.y += e.titleMarginBottom - a);
							}
						},
						drawBody: function (t, e, n) {
							var r,
								a,
								i,
								o,
								l,
								s,
								u,
								c,
								d = e.bodyFontSize,
								h = e.bodySpacing,
								f = e._bodyAlign,
								g = e.body,
								p = e.displayColors,
								m = 0,
								v = p ? je(e, 'left') : 0,
								b = Ne(e.rtl, e.x, e.width),
								x = function (e) {
									n.fillText(e, b.x(t.x + m), t.y + d / 2), (t.y += d + h);
								},
								y = b.textAlign(f);
							for (
								n.textAlign = f,
									n.textBaseline = 'middle',
									n.font = H.fontString(d, e._bodyFontStyle, e._bodyFontFamily),
									t.x = je(e, y),
									n.fillStyle = e.bodyFontColor,
									H.each(e.beforeBody, x),
									m =
										p && 'right' !== y
											? 'center' === f
												? d / 2 + 1
												: d + 2
											: 0,
									l = 0,
									u = g.length;
								l < u;
								++l
							) {
								for (
									r = g[l],
										a = e.labelTextColors[l],
										i = e.labelColors[l],
										n.fillStyle = a,
										H.each(r.before, x),
										s = 0,
										c = (o = r.lines).length;
									s < c;
									++s
								) {
									if (p) {
										var _ = b.x(v);
										(n.fillStyle = e.legendColorBackground),
											n.fillRect(b.leftForLtr(_, d), t.y, d, d),
											(n.lineWidth = 1),
											(n.strokeStyle = i.borderColor),
											n.strokeRect(b.leftForLtr(_, d), t.y, d, d),
											(n.fillStyle = i.backgroundColor),
											n.fillRect(
												b.leftForLtr(b.xPlus(_, 1), d - 2),
												t.y + 1,
												d - 2,
												d - 2
											),
											(n.fillStyle = a);
									}
									x(o[s]);
								}
								H.each(r.after, x);
							}
							(m = 0), H.each(e.afterBody, x), (t.y -= h);
						},
						drawFooter: function (t, e, n) {
							var r,
								a,
								i = e.footer,
								o = i.length;
							if (o) {
								var l = Ne(e.rtl, e.x, e.width);
								for (
									t.x = je(e, e._footerAlign),
										t.y += e.footerMarginTop,
										n.textAlign = l.textAlign(e._footerAlign),
										n.textBaseline = 'middle',
										r = e.footerFontSize,
										n.fillStyle = e.footerFontColor,
										n.font = H.fontString(
											r,
											e._footerFontStyle,
											e._footerFontFamily
										),
										a = 0;
									a < o;
									++a
								)
									n.fillText(i[a], l.x(t.x), t.y + r / 2),
										(t.y += r + e.footerSpacing);
							}
						},
						drawBackground: function (t, e, n, r) {
							(n.fillStyle = e.backgroundColor),
								(n.strokeStyle = e.borderColor),
								(n.lineWidth = e.borderWidth);
							var a = e.xAlign,
								i = e.yAlign,
								o = t.x,
								l = t.y,
								s = r.width,
								u = r.height,
								c = e.cornerRadius;
							n.beginPath(),
								n.moveTo(o + c, l),
								'top' === i && this.drawCaret(t, r),
								n.lineTo(o + s - c, l),
								n.quadraticCurveTo(o + s, l, o + s, l + c),
								'center' === i && 'right' === a && this.drawCaret(t, r),
								n.lineTo(o + s, l + u - c),
								n.quadraticCurveTo(o + s, l + u, o + s - c, l + u),
								'bottom' === i && this.drawCaret(t, r),
								n.lineTo(o + c, l + u),
								n.quadraticCurveTo(o, l + u, o, l + u - c),
								'center' === i && 'left' === a && this.drawCaret(t, r),
								n.lineTo(o, l + c),
								n.quadraticCurveTo(o, l, o + c, l),
								n.closePath(),
								n.fill(),
								e.borderWidth > 0 && n.stroke();
						},
						draw: function () {
							var t = this._chart.ctx,
								e = this._view;
							if (0 !== e.opacity) {
								var n = {width: e.width, height: e.height},
									r = {x: e.x, y: e.y},
									a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
									i =
										e.title.length ||
										e.beforeBody.length ||
										e.body.length ||
										e.afterBody.length ||
										e.footer.length;
								this._options.enabled &&
									i &&
									(t.save(),
									(t.globalAlpha = a),
									this.drawBackground(r, e, t, n),
									(r.y += e.yPadding),
									H.rtl.overrideTextDirection(t, e.textDirection),
									this.drawTitle(r, e, t),
									this.drawBody(r, e, t),
									this.drawFooter(r, e, t),
									H.rtl.restoreTextDirection(t, e.textDirection),
									t.restore());
							}
						},
						handleEvent: function (t) {
							var e,
								n = this,
								r = n._options;
							return (
								(n._lastActive = n._lastActive || []),
								'mouseout' === t.type
									? (n._active = [])
									: ((n._active = n._chart.getElementsAtEventForMode(
											t,
											r.mode,
											r
									  )),
									  r.reverse && n._active.reverse()),
								(e = !H.arrayEquals(n._active, n._lastActive)) &&
									((n._lastActive = n._active),
									(r.enabled || r.custom) &&
										((n._eventPosition = {x: t.x, y: t.y}),
										n.update(!0),
										n.pivot())),
								e
							);
						},
					}),
					Ue = ze,
					Ze = qe;
				Ze.positioners = Ue;
				var Ye = H.valueOrDefault;
				function Ke() {
					return H.merge(Object.create(null), [].slice.call(arguments), {
						merger: function (t, e, n, r) {
							if ('xAxes' === t || 'yAxes' === t) {
								var a,
									i,
									o,
									l = n[t].length;
								for (e[t] || (e[t] = []), a = 0; a < l; ++a)
									(o = n[t][a]),
										(i = Ye(o.type, 'xAxes' === t ? 'category' : 'linear')),
										a >= e[t].length && e[t].push({}),
										!e[t][a].type || (o.type && o.type !== e[t][a].type)
											? H.merge(e[t][a], [Ee.getScaleDefaults(i), o])
											: H.merge(e[t][a], o);
							} else H._merger(t, e, n, r);
						},
					});
				}
				function $e() {
					return H.merge(Object.create(null), [].slice.call(arguments), {
						merger: function (t, e, n, r) {
							var a = e[t] || Object.create(null),
								i = n[t];
							'scales' === t
								? (e[t] = Ke(a, i))
								: 'scale' === t
								? (e[t] = H.merge(a, [Ee.getScaleDefaults(i.type), i]))
								: H._merger(t, e, n, r);
						},
					});
				}
				function Ge(t) {
					var e = t.options;
					H.each(t.scales, function (e) {
						me.removeBox(t, e);
					}),
						(e = $e(z.global, z[t.config.type], e)),
						(t.options = t.config.options = e),
						t.ensureScalesHaveIDs(),
						t.buildOrUpdateScales(),
						(t.tooltip._options = e.tooltips),
						t.tooltip.initialize();
				}
				function Xe(t, e, n) {
					var r,
						a = function (t) {
							return t.id === r;
						};
					do {
						r = e + n++;
					} while (H.findIndex(t, a) >= 0);
					return r;
				}
				function Je(t) {
					return 'top' === t || 'bottom' === t;
				}
				function Qe(t, e) {
					return function (n, r) {
						return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
					};
				}
				z._set('global', {
					elements: {},
					events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
					hover: {
						onHover: null,
						mode: 'nearest',
						intersect: !0,
						animationDuration: 400,
					},
					onClick: null,
					maintainAspectRatio: !0,
					responsive: !0,
					responsiveAnimationDuration: 0,
				});
				var tn = function (t, e) {
					return this.construct(t, e), this;
				};
				H.extend(tn.prototype, {
					construct: function (t, e) {
						var n = this;
						e = (function (t) {
							var e = ((t = t || Object.create(null)).data = t.data || {});
							return (
								(e.datasets = e.datasets || []),
								(e.labels = e.labels || []),
								(t.options = $e(z.global, z[t.type], t.options || {})),
								t
							);
						})(e);
						var a = Fe.acquireContext(t, e),
							i = a && a.canvas,
							o = i && i.height,
							l = i && i.width;
						(n.id = H.uid()),
							(n.ctx = a),
							(n.canvas = i),
							(n.config = e),
							(n.width = l),
							(n.height = o),
							(n.aspectRatio = o ? l / o : null),
							(n.options = e.options),
							(n._bufferedRender = !1),
							(n._layers = []),
							(n.chart = n),
							(n.controller = n),
							(tn.instances[n.id] = n),
							Object.defineProperty(n, 'data', {
								get: function () {
									return n.config.data;
								},
								set: function (t) {
									n.config.data = t;
								},
							}),
							a && i
								? (n.initialize(), n.update())
								: r.error(
										"Failed to create chart: can't acquire context from the given item"
								  );
					},
					initialize: function () {
						var t = this;
						return (
							Le.notify(t, 'beforeInit'),
							H.retinaScale(t, t.options.devicePixelRatio),
							t.bindEvents(),
							t.options.responsive && t.resize(!0),
							t.initToolTip(),
							Le.notify(t, 'afterInit'),
							t
						);
					},
					clear: function () {
						return H.canvas.clear(this), this;
					},
					stop: function () {
						return Q.cancelAnimation(this), this;
					},
					resize: function (t) {
						var e = this,
							n = e.options,
							r = e.canvas,
							a = (n.maintainAspectRatio && e.aspectRatio) || null,
							i = Math.max(0, Math.floor(H.getMaximumWidth(r))),
							o = Math.max(0, Math.floor(a ? i / a : H.getMaximumHeight(r)));
						if (
							(e.width !== i || e.height !== o) &&
							((r.width = e.width = i),
							(r.height = e.height = o),
							(r.style.width = i + 'px'),
							(r.style.height = o + 'px'),
							H.retinaScale(e, n.devicePixelRatio),
							!t)
						) {
							var l = {width: i, height: o};
							Le.notify(e, 'resize', [l]),
								n.onResize && n.onResize(e, l),
								e.stop(),
								e.update({duration: n.responsiveAnimationDuration});
						}
					},
					ensureScalesHaveIDs: function () {
						var t = this.options,
							e = t.scales || {},
							n = t.scale;
						H.each(e.xAxes, function (t, n) {
							t.id || (t.id = Xe(e.xAxes, 'x-axis-', n));
						}),
							H.each(e.yAxes, function (t, n) {
								t.id || (t.id = Xe(e.yAxes, 'y-axis-', n));
							}),
							n && (n.id = n.id || 'scale');
					},
					buildOrUpdateScales: function () {
						var t = this,
							e = t.options,
							n = t.scales || {},
							r = [],
							a = Object.keys(n).reduce(function (t, e) {
								return (t[e] = !1), t;
							}, {});
						e.scales &&
							(r = r.concat(
								(e.scales.xAxes || []).map(function (t) {
									return {options: t, dtype: 'category', dposition: 'bottom'};
								}),
								(e.scales.yAxes || []).map(function (t) {
									return {options: t, dtype: 'linear', dposition: 'left'};
								})
							)),
							e.scale &&
								r.push({
									options: e.scale,
									dtype: 'radialLinear',
									isDefault: !0,
									dposition: 'chartArea',
								}),
							H.each(r, function (e) {
								var r = e.options,
									i = r.id,
									o = Ye(r.type, e.dtype);
								Je(r.position) !== Je(e.dposition) &&
									(r.position = e.dposition),
									(a[i] = !0);
								var l = null;
								if (i in n && n[i].type === o)
									((l = n[i]).options = r), (l.ctx = t.ctx), (l.chart = t);
								else {
									var s = Ee.getScaleConstructor(o);
									if (!s) return;
									(l = new s({
										id: i,
										type: o,
										options: r,
										ctx: t.ctx,
										chart: t,
									})),
										(n[l.id] = l);
								}
								l.mergeTicksOptions(), e.isDefault && (t.scale = l);
							}),
							H.each(a, function (t, e) {
								t || delete n[e];
							}),
							(t.scales = n),
							Ee.addScalesToLayout(this);
					},
					buildOrUpdateControllers: function () {
						var t,
							e,
							n = this,
							r = [],
							a = n.data.datasets;
						for (t = 0, e = a.length; t < e; t++) {
							var i = a[t],
								o = n.getDatasetMeta(t),
								l = i.type || n.config.type;
							if (
								(o.type &&
									o.type !== l &&
									(n.destroyDatasetMeta(t), (o = n.getDatasetMeta(t))),
								(o.type = l),
								(o.order = i.order || 0),
								(o.index = t),
								o.controller)
							)
								o.controller.updateIndex(t), o.controller.linkScales();
							else {
								var s = Qt[o.type];
								if (void 0 === s)
									throw new Error('"' + o.type + '" is not a chart type.');
								(o.controller = new s(n, t)), r.push(o.controller);
							}
						}
						return r;
					},
					resetElements: function () {
						var t = this;
						H.each(
							t.data.datasets,
							function (e, n) {
								t.getDatasetMeta(n).controller.reset();
							},
							t
						);
					},
					reset: function () {
						this.resetElements(), this.tooltip.initialize();
					},
					update: function (t) {
						var e,
							n,
							r = this;
						if (
							((t && 'object' == typeof t) ||
								(t = {duration: t, lazy: arguments[1]}),
							Ge(r),
							Le._invalidate(r),
							!1 !== Le.notify(r, 'beforeUpdate'))
						) {
							r.tooltip._data = r.data;
							var a = r.buildOrUpdateControllers();
							for (e = 0, n = r.data.datasets.length; e < n; e++)
								r.getDatasetMeta(e).controller.buildOrUpdateElements();
							r.updateLayout(),
								r.options.animation &&
									r.options.animation.duration &&
									H.each(a, function (t) {
										t.reset();
									}),
								r.updateDatasets(),
								r.tooltip.initialize(),
								(r.lastActive = []),
								Le.notify(r, 'afterUpdate'),
								r._layers.sort(Qe('z', '_idx')),
								r._bufferedRender
									? (r._bufferedRequest = {
											duration: t.duration,
											easing: t.easing,
											lazy: t.lazy,
									  })
									: r.render(t);
						}
					},
					updateLayout: function () {
						var t = this;
						!1 !== Le.notify(t, 'beforeLayout') &&
							(me.update(this, this.width, this.height),
							(t._layers = []),
							H.each(
								t.boxes,
								function (e) {
									e._configure && e._configure(),
										t._layers.push.apply(t._layers, e._layers());
								},
								t
							),
							t._layers.forEach(function (t, e) {
								t._idx = e;
							}),
							Le.notify(t, 'afterScaleUpdate'),
							Le.notify(t, 'afterLayout'));
					},
					updateDatasets: function () {
						var t = this;
						if (!1 !== Le.notify(t, 'beforeDatasetsUpdate')) {
							for (var e = 0, n = t.data.datasets.length; e < n; ++e)
								t.updateDataset(e);
							Le.notify(t, 'afterDatasetsUpdate');
						}
					},
					updateDataset: function (t) {
						var e = this,
							n = e.getDatasetMeta(t),
							r = {meta: n, index: t};
						!1 !== Le.notify(e, 'beforeDatasetUpdate', [r]) &&
							(n.controller._update(), Le.notify(e, 'afterDatasetUpdate', [r]));
					},
					render: function (t) {
						var e = this;
						(t && 'object' == typeof t) ||
							(t = {duration: t, lazy: arguments[1]});
						var n = e.options.animation,
							r = Ye(t.duration, n && n.duration),
							a = t.lazy;
						if (!1 !== Le.notify(e, 'beforeRender')) {
							var i = function (t) {
								Le.notify(e, 'afterRender'),
									H.callback(n && n.onComplete, [t], e);
							};
							if (n && r) {
								var o = new J({
									numSteps: r / 16.66,
									easing: t.easing || n.easing,
									render: function (t, e) {
										var n = H.easing.effects[e.easing],
											r = e.currentStep,
											a = r / e.numSteps;
										t.draw(n(a), a, r);
									},
									onAnimationProgress: n.onProgress,
									onAnimationComplete: i,
								});
								Q.addAnimation(e, o, r, a);
							} else e.draw(), i(new J({numSteps: 0, chart: e}));
							return e;
						}
					},
					draw: function (t) {
						var e,
							n,
							r = this;
						if (
							(r.clear(),
							H.isNullOrUndef(t) && (t = 1),
							r.transition(t),
							!(r.width <= 0 || r.height <= 0) &&
								!1 !== Le.notify(r, 'beforeDraw', [t]))
						) {
							for (n = r._layers, e = 0; e < n.length && n[e].z <= 0; ++e)
								n[e].draw(r.chartArea);
							for (r.drawDatasets(t); e < n.length; ++e) n[e].draw(r.chartArea);
							r._drawTooltip(t), Le.notify(r, 'afterDraw', [t]);
						}
					},
					transition: function (t) {
						for (
							var e = this, n = 0, r = (e.data.datasets || []).length;
							n < r;
							++n
						)
							e.isDatasetVisible(n) &&
								e.getDatasetMeta(n).controller.transition(t);
						e.tooltip.transition(t);
					},
					_getSortedDatasetMetas: function (t) {
						var e,
							n,
							r = this,
							a = [];
						for (e = 0, n = (r.data.datasets || []).length; e < n; ++e)
							(t && !r.isDatasetVisible(e)) || a.push(r.getDatasetMeta(e));
						return a.sort(Qe('order', 'index')), a;
					},
					_getSortedVisibleDatasetMetas: function () {
						return this._getSortedDatasetMetas(!0);
					},
					drawDatasets: function (t) {
						var e,
							n,
							r = this;
						if (!1 !== Le.notify(r, 'beforeDatasetsDraw', [t])) {
							for (
								n = (e = r._getSortedVisibleDatasetMetas()).length - 1;
								n >= 0;
								--n
							)
								r.drawDataset(e[n], t);
							Le.notify(r, 'afterDatasetsDraw', [t]);
						}
					},
					drawDataset: function (t, e) {
						var n = {meta: t, index: t.index, easingValue: e};
						!1 !== Le.notify(this, 'beforeDatasetDraw', [n]) &&
							(t.controller.draw(e), Le.notify(this, 'afterDatasetDraw', [n]));
					},
					_drawTooltip: function (t) {
						var e = this,
							n = e.tooltip,
							r = {tooltip: n, easingValue: t};
						!1 !== Le.notify(e, 'beforeTooltipDraw', [r]) &&
							(n.draw(), Le.notify(e, 'afterTooltipDraw', [r]));
					},
					getElementAtEvent: function (t) {
						return oe.modes.single(this, t);
					},
					getElementsAtEvent: function (t) {
						return oe.modes.label(this, t, {intersect: !0});
					},
					getElementsAtXAxis: function (t) {
						return oe.modes['x-axis'](this, t, {intersect: !0});
					},
					getElementsAtEventForMode: function (t, e, n) {
						var r = oe.modes[e];
						return 'function' == typeof r ? r(this, t, n) : [];
					},
					getDatasetAtEvent: function (t) {
						return oe.modes.dataset(this, t, {intersect: !0});
					},
					getDatasetMeta: function (t) {
						var e = this,
							n = e.data.datasets[t];
						n._meta || (n._meta = {});
						var r = n._meta[e.id];
						return (
							r ||
								(r = n._meta[e.id] =
									{
										type: null,
										data: [],
										dataset: null,
										controller: null,
										hidden: null,
										xAxisID: null,
										yAxisID: null,
										order: n.order || 0,
										index: t,
									}),
							r
						);
					},
					getVisibleDatasetCount: function () {
						for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
							this.isDatasetVisible(e) && t++;
						return t;
					},
					isDatasetVisible: function (t) {
						var e = this.getDatasetMeta(t);
						return 'boolean' == typeof e.hidden
							? !e.hidden
							: !this.data.datasets[t].hidden;
					},
					generateLegend: function () {
						return this.options.legendCallback(this);
					},
					destroyDatasetMeta: function (t) {
						var e = this.id,
							n = this.data.datasets[t],
							r = n._meta && n._meta[e];
						r && (r.controller.destroy(), delete n._meta[e]);
					},
					destroy: function () {
						var t,
							e,
							n = this,
							r = n.canvas;
						for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
							n.destroyDatasetMeta(t);
						r &&
							(n.unbindEvents(),
							H.canvas.clear(n),
							Fe.releaseContext(n.ctx),
							(n.canvas = null),
							(n.ctx = null)),
							Le.notify(n, 'destroy'),
							delete tn.instances[n.id];
					},
					toBase64Image: function () {
						return this.canvas.toDataURL.apply(this.canvas, arguments);
					},
					initToolTip: function () {
						var t = this;
						t.tooltip = new Ze(
							{
								_chart: t,
								_chartInstance: t,
								_data: t.data,
								_options: t.options.tooltips,
							},
							t
						);
					},
					bindEvents: function () {
						var t = this,
							e = (t._listeners = {}),
							n = function () {
								t.eventHandler.apply(t, arguments);
							};
						H.each(t.options.events, function (r) {
							Fe.addEventListener(t, r, n), (e[r] = n);
						}),
							t.options.responsive &&
								((n = function () {
									t.resize();
								}),
								Fe.addEventListener(t, 'resize', n),
								(e.resize = n));
					},
					unbindEvents: function () {
						var t = this,
							e = t._listeners;
						e &&
							(delete t._listeners,
							H.each(e, function (e, n) {
								Fe.removeEventListener(t, n, e);
							}));
					},
					updateHoverStyle: function (t, e, n) {
						var r,
							a,
							i,
							o = n ? 'set' : 'remove';
						for (a = 0, i = t.length; a < i; ++a)
							(r = t[a]) &&
								this.getDatasetMeta(r._datasetIndex).controller[
									o + 'HoverStyle'
								](r);
						'dataset' === e &&
							this.getDatasetMeta(t[0]._datasetIndex).controller[
								'_' + o + 'DatasetHoverStyle'
							]();
					},
					eventHandler: function (t) {
						var e = this,
							n = e.tooltip;
						if (!1 !== Le.notify(e, 'beforeEvent', [t])) {
							(e._bufferedRender = !0), (e._bufferedRequest = null);
							var r = e.handleEvent(t);
							n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)),
								Le.notify(e, 'afterEvent', [t]);
							var a = e._bufferedRequest;
							return (
								a
									? e.render(a)
									: r &&
									  !e.animating &&
									  (e.stop(),
									  e.render({
											duration: e.options.hover.animationDuration,
											lazy: !0,
									  })),
								(e._bufferedRender = !1),
								(e._bufferedRequest = null),
								e
							);
						}
					},
					handleEvent: function (t) {
						var e,
							n = this,
							r = n.options || {},
							a = r.hover;
						return (
							(n.lastActive = n.lastActive || []),
							'mouseout' === t.type
								? (n.active = [])
								: (n.active = n.getElementsAtEventForMode(t, a.mode, a)),
							H.callback(r.onHover || r.hover.onHover, [t.native, n.active], n),
							('mouseup' !== t.type && 'click' !== t.type) ||
								(r.onClick && r.onClick.call(n, t.native, n.active)),
							n.lastActive.length &&
								n.updateHoverStyle(n.lastActive, a.mode, !1),
							n.active.length &&
								a.mode &&
								n.updateHoverStyle(n.active, a.mode, !0),
							(e = !H.arrayEquals(n.active, n.lastActive)),
							(n.lastActive = n.active),
							e
						);
					},
				}),
					(tn.instances = {});
				var en = tn;
				(tn.Controller = tn),
					(tn.types = {}),
					(H.configMerge = $e),
					(H.scaleMerge = Ke);
				function nn() {
					throw new Error(
						'This method is not implemented: either no adapter can be found or an incomplete integration was provided.'
					);
				}
				function rn(t) {
					this.options = t || {};
				}
				H.extend(rn.prototype, {
					formats: nn,
					parse: nn,
					format: nn,
					add: nn,
					diff: nn,
					startOf: nn,
					endOf: nn,
					_create: function (t) {
						return t;
					},
				}),
					(rn.override = function (t) {
						H.extend(rn.prototype, t);
					});
				var an = {_date: rn},
					on = {
						formatters: {
							values: function (t) {
								return H.isArray(t) ? t : '' + t;
							},
							linear: function (t, e, n) {
								var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
								Math.abs(r) > 1 &&
									t !== Math.floor(t) &&
									(r = t - Math.floor(t));
								var a = H.log10(Math.abs(r)),
									i = '';
								if (0 !== t)
									if (
										Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4
									) {
										var o = H.log10(Math.abs(t)),
											l = Math.floor(o) - Math.floor(a);
										(l = Math.max(Math.min(l, 20), 0)),
											(i = t.toExponential(l));
									} else {
										var s = -1 * Math.floor(a);
										(s = Math.max(Math.min(s, 20), 0)), (i = t.toFixed(s));
									}
								else i = '0';
								return i;
							},
							logarithmic: function (t, e, n) {
								var r = t / Math.pow(10, Math.floor(H.log10(t)));
								return 0 === t
									? '0'
									: 1 === r ||
									  2 === r ||
									  5 === r ||
									  0 === e ||
									  e === n.length - 1
									? t.toExponential()
									: '';
							},
						},
					},
					ln = H.isArray,
					sn = H.isNullOrUndef,
					un = H.valueOrDefault,
					cn = H.valueAtIndexOrDefault;
				function dn(t, e, n) {
					var r,
						a = t.getTicks().length,
						i = Math.min(e, a - 1),
						o = t.getPixelForTick(i),
						l = t._startPixel,
						s = t._endPixel,
						u = 1e-6;
					if (
						!(
							n &&
							((r =
								1 === a
									? Math.max(o - l, s - o)
									: 0 === e
									? (t.getPixelForTick(1) - o) / 2
									: (o - t.getPixelForTick(i - 1)) / 2),
							(o += i < e ? r : -r) < l - u || o > s + u)
						)
					)
						return o;
				}
				function hn(t, e, n, r) {
					var a,
						i,
						o,
						l,
						s,
						u,
						c,
						d,
						h,
						f,
						g,
						p,
						m,
						v = n.length,
						b = [],
						x = [],
						y = [],
						_ = 0,
						k = 0;
					for (a = 0; a < v; ++a) {
						if (
							((l = n[a].label),
							(s = n[a].major ? e.major : e.minor),
							(t.font = u = s.string),
							(c = r[u] = r[u] || {data: {}, gc: []}),
							(d = s.lineHeight),
							(h = f = 0),
							sn(l) || ln(l))
						) {
							if (ln(l))
								for (i = 0, o = l.length; i < o; ++i)
									(g = l[i]),
										sn(g) ||
											ln(g) ||
											((h = H.measureText(t, c.data, c.gc, h, g)), (f += d));
						} else (h = H.measureText(t, c.data, c.gc, h, l)), (f = d);
						b.push(h),
							x.push(f),
							y.push(d / 2),
							(_ = Math.max(h, _)),
							(k = Math.max(f, k));
					}
					function w(t) {
						return {width: b[t] || 0, height: x[t] || 0, offset: y[t] || 0};
					}
					return (
						(function (t, e) {
							H.each(t, function (t) {
								var n,
									r = t.gc,
									a = r.length / 2;
								if (a > e) {
									for (n = 0; n < a; ++n) delete t.data[r[n]];
									r.splice(0, a);
								}
							});
						})(r, v),
						(p = b.indexOf(_)),
						(m = x.indexOf(k)),
						{first: w(0), last: w(v - 1), widest: w(p), highest: w(m)}
					);
				}
				function fn(t) {
					return t.drawTicks ? t.tickMarkLength : 0;
				}
				function gn(t) {
					var e, n;
					return t.display
						? ((e = H.options._parseFont(t)),
						  (n = H.options.toPadding(t.padding)),
						  e.lineHeight + n.height)
						: 0;
				}
				function pn(t, e) {
					return H.extend(
						H.options._parseFont({
							fontFamily: un(e.fontFamily, t.fontFamily),
							fontSize: un(e.fontSize, t.fontSize),
							fontStyle: un(e.fontStyle, t.fontStyle),
							lineHeight: un(e.lineHeight, t.lineHeight),
						}),
						{
							color: H.options.resolve([
								e.fontColor,
								t.fontColor,
								z.global.defaultFontColor,
							]),
						}
					);
				}
				function mn(t) {
					var e = pn(t, t.minor);
					return {minor: e, major: t.major.enabled ? pn(t, t.major) : e};
				}
				function vn(t) {
					var e,
						n,
						r,
						a = [];
					for (n = 0, r = t.length; n < r; ++n)
						void 0 !== (e = t[n])._index && a.push(e);
					return a;
				}
				function bn(t, e, n, r) {
					var a,
						i,
						o,
						l,
						s = un(n, 0),
						u = Math.min(un(r, t.length), t.length),
						c = 0;
					for (
						e = Math.ceil(e), r && (e = (a = r - n) / Math.floor(a / e)), l = s;
						l < 0;

					)
						c++, (l = Math.round(s + c * e));
					for (i = Math.max(s, 0); i < u; i++)
						(o = t[i]),
							i === l
								? ((o._index = i), c++, (l = Math.round(s + c * e)))
								: delete o.label;
				}
				z._set('scale', {
					display: !0,
					position: 'left',
					offset: !1,
					gridLines: {
						display: !0,
						color: 'rgba(0,0,0,0.1)',
						lineWidth: 1,
						drawBorder: !0,
						drawOnChartArea: !0,
						drawTicks: !0,
						tickMarkLength: 10,
						zeroLineWidth: 1,
						zeroLineColor: 'rgba(0,0,0,0.25)',
						zeroLineBorderDash: [],
						zeroLineBorderDashOffset: 0,
						offsetGridLines: !1,
						borderDash: [],
						borderDashOffset: 0,
					},
					scaleLabel: {
						display: !1,
						labelString: '',
						padding: {top: 4, bottom: 4},
					},
					ticks: {
						beginAtZero: !1,
						minRotation: 0,
						maxRotation: 50,
						mirror: !1,
						padding: 0,
						reverse: !1,
						display: !0,
						autoSkip: !0,
						autoSkipPadding: 0,
						labelOffset: 0,
						callback: on.formatters.values,
						minor: {},
						major: {},
					},
				});
				var xn = G.extend({
					zeroLineIndex: 0,
					getPadding: function () {
						var t = this;
						return {
							left: t.paddingLeft || 0,
							top: t.paddingTop || 0,
							right: t.paddingRight || 0,
							bottom: t.paddingBottom || 0,
						};
					},
					getTicks: function () {
						return this._ticks;
					},
					_getLabels: function () {
						var t = this.chart.data;
						return (
							this.options.labels ||
							(this.isHorizontal() ? t.xLabels : t.yLabels) ||
							t.labels ||
							[]
						);
					},
					mergeTicksOptions: function () {},
					beforeUpdate: function () {
						H.callback(this.options.beforeUpdate, [this]);
					},
					update: function (t, e, n) {
						var r,
							a,
							i,
							o,
							l,
							s = this,
							u = s.options.ticks,
							c = u.sampleSize;
						if (
							(s.beforeUpdate(),
							(s.maxWidth = t),
							(s.maxHeight = e),
							(s.margins = H.extend({left: 0, right: 0, top: 0, bottom: 0}, n)),
							(s._ticks = null),
							(s.ticks = null),
							(s._labelSizes = null),
							(s._maxLabelLines = 0),
							(s.longestLabelWidth = 0),
							(s.longestTextCache = s.longestTextCache || {}),
							(s._gridLineItems = null),
							(s._labelItems = null),
							s.beforeSetDimensions(),
							s.setDimensions(),
							s.afterSetDimensions(),
							s.beforeDataLimits(),
							s.determineDataLimits(),
							s.afterDataLimits(),
							s.beforeBuildTicks(),
							(o = s.buildTicks() || []),
							(!(o = s.afterBuildTicks(o) || o) || !o.length) && s.ticks)
						)
							for (o = [], r = 0, a = s.ticks.length; r < a; ++r)
								o.push({value: s.ticks[r], major: !1});
						return (
							(s._ticks = o),
							(l = c < o.length),
							(i = s._convertTicksToLabels(
								l
									? (function (t, e) {
											for (
												var n = [], r = t.length / e, a = 0, i = t.length;
												a < i;
												a += r
											)
												n.push(t[Math.floor(a)]);
											return n;
									  })(o, c)
									: o
							)),
							s._configure(),
							s.beforeCalculateTickRotation(),
							s.calculateTickRotation(),
							s.afterCalculateTickRotation(),
							s.beforeFit(),
							s.fit(),
							s.afterFit(),
							(s._ticksToDraw =
								u.display && (u.autoSkip || 'auto' === u.source)
									? s._autoSkip(o)
									: o),
							l && (i = s._convertTicksToLabels(s._ticksToDraw)),
							(s.ticks = i),
							s.afterUpdate(),
							s.minSize
						);
					},
					_configure: function () {
						var t,
							e,
							n = this,
							r = n.options.ticks.reverse;
						n.isHorizontal()
							? ((t = n.left), (e = n.right))
							: ((t = n.top), (e = n.bottom), (r = !r)),
							(n._startPixel = t),
							(n._endPixel = e),
							(n._reversePixels = r),
							(n._length = e - t);
					},
					afterUpdate: function () {
						H.callback(this.options.afterUpdate, [this]);
					},
					beforeSetDimensions: function () {
						H.callback(this.options.beforeSetDimensions, [this]);
					},
					setDimensions: function () {
						var t = this;
						t.isHorizontal()
							? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
							: ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
							(t.paddingLeft = 0),
							(t.paddingTop = 0),
							(t.paddingRight = 0),
							(t.paddingBottom = 0);
					},
					afterSetDimensions: function () {
						H.callback(this.options.afterSetDimensions, [this]);
					},
					beforeDataLimits: function () {
						H.callback(this.options.beforeDataLimits, [this]);
					},
					determineDataLimits: H.noop,
					afterDataLimits: function () {
						H.callback(this.options.afterDataLimits, [this]);
					},
					beforeBuildTicks: function () {
						H.callback(this.options.beforeBuildTicks, [this]);
					},
					buildTicks: H.noop,
					afterBuildTicks: function (t) {
						var e = this;
						return ln(t) && t.length
							? H.callback(e.options.afterBuildTicks, [e, t])
							: ((e.ticks =
									H.callback(e.options.afterBuildTicks, [e, e.ticks]) ||
									e.ticks),
							  t);
					},
					beforeTickToLabelConversion: function () {
						H.callback(this.options.beforeTickToLabelConversion, [this]);
					},
					convertTicksToLabels: function () {
						var t = this,
							e = t.options.ticks;
						t.ticks = t.ticks.map(e.userCallback || e.callback, this);
					},
					afterTickToLabelConversion: function () {
						H.callback(this.options.afterTickToLabelConversion, [this]);
					},
					beforeCalculateTickRotation: function () {
						H.callback(this.options.beforeCalculateTickRotation, [this]);
					},
					calculateTickRotation: function () {
						var t,
							e,
							n,
							r,
							a,
							i,
							o,
							l = this,
							s = l.options,
							u = s.ticks,
							c = l.getTicks().length,
							d = u.minRotation || 0,
							h = u.maxRotation,
							f = d;
						!l._isVisible() ||
						!u.display ||
						d >= h ||
						c <= 1 ||
						!l.isHorizontal()
							? (l.labelRotation = d)
							: ((e = (t = l._getLabelSizes()).widest.width),
							  (n = t.highest.height - t.highest.offset),
							  (r = Math.min(l.maxWidth, l.chart.width - e)),
							  e + 6 > (a = s.offset ? l.maxWidth / c : r / (c - 1)) &&
									((a = r / (c - (s.offset ? 0.5 : 1))),
									(i =
										l.maxHeight -
										fn(s.gridLines) -
										u.padding -
										gn(s.scaleLabel)),
									(o = Math.sqrt(e * e + n * n)),
									(f = H.toDegrees(
										Math.min(
											Math.asin(Math.min((t.highest.height + 6) / a, 1)),
											Math.asin(Math.min(i / o, 1)) - Math.asin(n / o)
										)
									)),
									(f = Math.max(d, Math.min(h, f)))),
							  (l.labelRotation = f));
					},
					afterCalculateTickRotation: function () {
						H.callback(this.options.afterCalculateTickRotation, [this]);
					},
					beforeFit: function () {
						H.callback(this.options.beforeFit, [this]);
					},
					fit: function () {
						var t = this,
							e = (t.minSize = {width: 0, height: 0}),
							n = t.chart,
							r = t.options,
							a = r.ticks,
							i = r.scaleLabel,
							o = r.gridLines,
							l = t._isVisible(),
							s = 'bottom' === r.position,
							u = t.isHorizontal();
						if (
							(u ? (e.width = t.maxWidth) : l && (e.width = fn(o) + gn(i)),
							u ? l && (e.height = fn(o) + gn(i)) : (e.height = t.maxHeight),
							a.display && l)
						) {
							var c = mn(a),
								d = t._getLabelSizes(),
								h = d.first,
								f = d.last,
								g = d.widest,
								p = d.highest,
								m = 0.4 * c.minor.lineHeight,
								v = a.padding;
							if (u) {
								var b = 0 !== t.labelRotation,
									x = H.toRadians(t.labelRotation),
									y = Math.cos(x),
									_ = Math.sin(x),
									k =
										_ * g.width +
										y * (p.height - (b ? p.offset : 0)) +
										(b ? 0 : m);
								e.height = Math.min(t.maxHeight, e.height + k + v);
								var w,
									M,
									C = t.getPixelForTick(0) - t.left,
									S = t.right - t.getPixelForTick(t.getTicks().length - 1);
								b
									? ((w = s
											? y * h.width + _ * h.offset
											: _ * (h.height - h.offset)),
									  (M = s
											? _ * (f.height - f.offset)
											: y * f.width + _ * f.offset))
									: ((w = h.width / 2), (M = f.width / 2)),
									(t.paddingLeft =
										Math.max(((w - C) * t.width) / (t.width - C), 0) + 3),
									(t.paddingRight =
										Math.max(((M - S) * t.width) / (t.width - S), 0) + 3);
							} else {
								var P = a.mirror ? 0 : g.width + v + m;
								(e.width = Math.min(t.maxWidth, e.width + P)),
									(t.paddingTop = h.height / 2),
									(t.paddingBottom = f.height / 2);
							}
						}
						t.handleMargins(),
							u
								? ((t.width = t._length =
										n.width - t.margins.left - t.margins.right),
								  (t.height = e.height))
								: ((t.width = e.width),
								  (t.height = t._length =
										n.height - t.margins.top - t.margins.bottom));
					},
					handleMargins: function () {
						var t = this;
						t.margins &&
							((t.margins.left = Math.max(t.paddingLeft, t.margins.left)),
							(t.margins.top = Math.max(t.paddingTop, t.margins.top)),
							(t.margins.right = Math.max(t.paddingRight, t.margins.right)),
							(t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)));
					},
					afterFit: function () {
						H.callback(this.options.afterFit, [this]);
					},
					isHorizontal: function () {
						var t = this.options.position;
						return 'top' === t || 'bottom' === t;
					},
					isFullWidth: function () {
						return this.options.fullWidth;
					},
					getRightValue: function (t) {
						if (sn(t)) return NaN;
						if (('number' == typeof t || t instanceof Number) && !isFinite(t))
							return NaN;
						if (t)
							if (this.isHorizontal()) {
								if (void 0 !== t.x) return this.getRightValue(t.x);
							} else if (void 0 !== t.y) return this.getRightValue(t.y);
						return t;
					},
					_convertTicksToLabels: function (t) {
						var e,
							n,
							r,
							a = this;
						for (
							a.ticks = t.map(function (t) {
								return t.value;
							}),
								a.beforeTickToLabelConversion(),
								e = a.convertTicksToLabels(t) || a.ticks,
								a.afterTickToLabelConversion(),
								n = 0,
								r = t.length;
							n < r;
							++n
						)
							t[n].label = e[n];
						return e;
					},
					_getLabelSizes: function () {
						var t = this,
							e = t._labelSizes;
						return (
							e ||
								((t._labelSizes = e =
									hn(
										t.ctx,
										mn(t.options.ticks),
										t.getTicks(),
										t.longestTextCache
									)),
								(t.longestLabelWidth = e.widest.width)),
							e
						);
					},
					_parseValue: function (t) {
						var e, n, r, a;
						return (
							ln(t)
								? ((e = +this.getRightValue(t[0])),
								  (n = +this.getRightValue(t[1])),
								  (r = Math.min(e, n)),
								  (a = Math.max(e, n)))
								: ((e = void 0),
								  (n = t = +this.getRightValue(t)),
								  (r = t),
								  (a = t)),
							{min: r, max: a, start: e, end: n}
						);
					},
					_getScaleLabel: function (t) {
						var e = this._parseValue(t);
						return void 0 !== e.start
							? '[' + e.start + ', ' + e.end + ']'
							: +this.getRightValue(t);
					},
					getLabelForIndex: H.noop,
					getPixelForValue: H.noop,
					getValueForPixel: H.noop,
					getPixelForTick: function (t) {
						var e = this,
							n = e.options.offset,
							r = e._ticks.length,
							a = 1 / Math.max(r - (n ? 0 : 1), 1);
						return t < 0 || t > r - 1
							? null
							: e.getPixelForDecimal(t * a + (n ? a / 2 : 0));
					},
					getPixelForDecimal: function (t) {
						var e = this;
						return (
							e._reversePixels && (t = 1 - t), e._startPixel + t * e._length
						);
					},
					getDecimalForPixel: function (t) {
						var e = (t - this._startPixel) / this._length;
						return this._reversePixels ? 1 - e : e;
					},
					getBasePixel: function () {
						return this.getPixelForValue(this.getBaseValue());
					},
					getBaseValue: function () {
						var t = this,
							e = t.min,
							n = t.max;
						return t.beginAtZero
							? 0
							: e < 0 && n < 0
							? n
							: e > 0 && n > 0
							? e
							: 0;
					},
					_autoSkip: function (t) {
						var e,
							n,
							r,
							a,
							i = this,
							o = i.options.ticks,
							l = i._length,
							s = o.maxTicksLimit || l / i._tickSize() + 1,
							u = o.major.enabled
								? (function (t) {
										var e,
											n,
											r = [];
										for (e = 0, n = t.length; e < n; e++)
											t[e].major && r.push(e);
										return r;
								  })(t)
								: [],
							c = u.length,
							d = u[0],
							h = u[c - 1];
						if (c > s)
							return (
								(function (t, e, n) {
									var r,
										a,
										i = 0,
										o = e[0];
									for (n = Math.ceil(n), r = 0; r < t.length; r++)
										(a = t[r]),
											r === o
												? ((a._index = r), (o = e[++i * n]))
												: delete a.label;
								})(t, u, c / s),
								vn(t)
							);
						if (
							((r = (function (t, e, n, r) {
								var a,
									i,
									o,
									l,
									s = (function (t) {
										var e,
											n,
											r = t.length;
										if (r < 2) return !1;
										for (n = t[0], e = 1; e < r; ++e)
											if (t[e] - t[e - 1] !== n) return !1;
										return n;
									})(t),
									u = (e.length - 1) / r;
								if (!s) return Math.max(u, 1);
								for (
									o = 0, l = (a = H.math._factorize(s)).length - 1;
									o < l;
									o++
								)
									if ((i = a[o]) > u) return i;
								return Math.max(u, 1);
							})(u, t, 0, s)),
							c > 0)
						) {
							for (e = 0, n = c - 1; e < n; e++) bn(t, r, u[e], u[e + 1]);
							return (
								(a = c > 1 ? (h - d) / (c - 1) : null),
								bn(t, r, H.isNullOrUndef(a) ? 0 : d - a, d),
								bn(t, r, h, H.isNullOrUndef(a) ? t.length : h + a),
								vn(t)
							);
						}
						return bn(t, r), vn(t);
					},
					_tickSize: function () {
						var t = this,
							e = t.options.ticks,
							n = H.toRadians(t.labelRotation),
							r = Math.abs(Math.cos(n)),
							a = Math.abs(Math.sin(n)),
							i = t._getLabelSizes(),
							o = e.autoSkipPadding || 0,
							l = i ? i.widest.width + o : 0,
							s = i ? i.highest.height + o : 0;
						return t.isHorizontal()
							? s * r > l * a
								? l / r
								: s / a
							: s * a < l * r
							? s / r
							: l / a;
					},
					_isVisible: function () {
						var t,
							e,
							n,
							r = this,
							a = r.chart,
							i = r.options.display;
						if ('auto' !== i) return !!i;
						for (t = 0, e = a.data.datasets.length; t < e; ++t)
							if (
								a.isDatasetVisible(t) &&
								((n = a.getDatasetMeta(t)).xAxisID === r.id ||
									n.yAxisID === r.id)
							)
								return !0;
						return !1;
					},
					_computeGridLineItems: function (t) {
						var e,
							n,
							r,
							a,
							i,
							o,
							l,
							s,
							u,
							c,
							d,
							h,
							f,
							g,
							p,
							m,
							v,
							b = this,
							x = b.chart,
							y = b.options,
							_ = y.gridLines,
							k = y.position,
							w = _.offsetGridLines,
							M = b.isHorizontal(),
							C = b._ticksToDraw,
							S = C.length + (w ? 1 : 0),
							P = fn(_),
							A = [],
							D = _.drawBorder ? cn(_.lineWidth, 0, 0) : 0,
							O = D / 2,
							T = H._alignPixel,
							I = function (t) {
								return T(x, t, D);
							};
						for (
							'top' === k
								? ((e = I(b.bottom)),
								  (l = b.bottom - P),
								  (u = e - O),
								  (d = I(t.top) + O),
								  (f = t.bottom))
								: 'bottom' === k
								? ((e = I(b.top)),
								  (d = t.top),
								  (f = I(t.bottom) - O),
								  (l = e + O),
								  (u = b.top + P))
								: 'left' === k
								? ((e = I(b.right)),
								  (o = b.right - P),
								  (s = e - O),
								  (c = I(t.left) + O),
								  (h = t.right))
								: ((e = I(b.left)),
								  (c = t.left),
								  (h = I(t.right) - O),
								  (o = e + O),
								  (s = b.left + P)),
								n = 0;
							n < S;
							++n
						)
							(r = C[n] || {}),
								(sn(r.label) && n < C.length) ||
									(n === b.zeroLineIndex && y.offset === w
										? ((g = _.zeroLineWidth),
										  (p = _.zeroLineColor),
										  (m = _.zeroLineBorderDash || []),
										  (v = _.zeroLineBorderDashOffset || 0))
										: ((g = cn(_.lineWidth, n, 1)),
										  (p = cn(_.color, n, 'rgba(0,0,0,0.1)')),
										  (m = _.borderDash || []),
										  (v = _.borderDashOffset || 0)),
									void 0 !== (a = dn(b, r._index || n, w)) &&
										((i = T(x, a, g)),
										M ? (o = s = c = h = i) : (l = u = d = f = i),
										A.push({
											tx1: o,
											ty1: l,
											tx2: s,
											ty2: u,
											x1: c,
											y1: d,
											x2: h,
											y2: f,
											width: g,
											color: p,
											borderDash: m,
											borderDashOffset: v,
										})));
						return (A.ticksLength = S), (A.borderValue = e), A;
					},
					_computeLabelItems: function () {
						var t,
							e,
							n,
							r,
							a,
							i,
							o,
							l,
							s,
							u,
							c,
							d,
							h = this,
							f = h.options,
							g = f.ticks,
							p = f.position,
							m = g.mirror,
							v = h.isHorizontal(),
							b = h._ticksToDraw,
							x = mn(g),
							y = g.padding,
							_ = fn(f.gridLines),
							k = -H.toRadians(h.labelRotation),
							w = [];
						for (
							'top' === p
								? ((i = h.bottom - _ - y), (o = k ? 'left' : 'center'))
								: 'bottom' === p
								? ((i = h.top + _ + y), (o = k ? 'right' : 'center'))
								: 'left' === p
								? ((a = h.right - (m ? 0 : _) - y), (o = m ? 'left' : 'right'))
								: ((a = h.left + (m ? 0 : _) + y), (o = m ? 'right' : 'left')),
								t = 0,
								e = b.length;
							t < e;
							++t
						)
							(r = (n = b[t]).label),
								sn(r) ||
									((l = h.getPixelForTick(n._index || t) + g.labelOffset),
									(u = (s = n.major ? x.major : x.minor).lineHeight),
									(c = ln(r) ? r.length : 1),
									v
										? ((a = l),
										  (d =
												'top' === p
													? ((k ? 1 : 0.5) - c) * u
													: (k ? 0 : 0.5) * u))
										: ((i = l), (d = ((1 - c) * u) / 2)),
									w.push({
										x: a,
										y: i,
										rotation: k,
										label: r,
										font: s,
										textOffset: d,
										textAlign: o,
									}));
						return w;
					},
					_drawGrid: function (t) {
						var e = this,
							n = e.options.gridLines;
						if (n.display) {
							var r,
								a,
								i,
								o,
								l,
								s = e.ctx,
								u = e.chart,
								c = H._alignPixel,
								d = n.drawBorder ? cn(n.lineWidth, 0, 0) : 0,
								h =
									e._gridLineItems ||
									(e._gridLineItems = e._computeGridLineItems(t));
							for (i = 0, o = h.length; i < o; ++i)
								(r = (l = h[i]).width),
									(a = l.color),
									r &&
										a &&
										(s.save(),
										(s.lineWidth = r),
										(s.strokeStyle = a),
										s.setLineDash &&
											(s.setLineDash(l.borderDash),
											(s.lineDashOffset = l.borderDashOffset)),
										s.beginPath(),
										n.drawTicks &&
											(s.moveTo(l.tx1, l.ty1), s.lineTo(l.tx2, l.ty2)),
										n.drawOnChartArea &&
											(s.moveTo(l.x1, l.y1), s.lineTo(l.x2, l.y2)),
										s.stroke(),
										s.restore());
							if (d) {
								var f,
									g,
									p,
									m,
									v = d,
									b = cn(n.lineWidth, h.ticksLength - 1, 1),
									x = h.borderValue;
								e.isHorizontal()
									? ((f = c(u, e.left, v) - v / 2),
									  (g = c(u, e.right, b) + b / 2),
									  (p = m = x))
									: ((p = c(u, e.top, v) - v / 2),
									  (m = c(u, e.bottom, b) + b / 2),
									  (f = g = x)),
									(s.lineWidth = d),
									(s.strokeStyle = cn(n.color, 0)),
									s.beginPath(),
									s.moveTo(f, p),
									s.lineTo(g, m),
									s.stroke();
							}
						}
					},
					_drawLabels: function () {
						var t = this;
						if (t.options.ticks.display) {
							var e,
								n,
								r,
								a,
								i,
								o,
								l,
								s,
								u = t.ctx,
								c = t._labelItems || (t._labelItems = t._computeLabelItems());
							for (e = 0, r = c.length; e < r; ++e) {
								if (
									((o = (i = c[e]).font),
									u.save(),
									u.translate(i.x, i.y),
									u.rotate(i.rotation),
									(u.font = o.string),
									(u.fillStyle = o.color),
									(u.textBaseline = 'middle'),
									(u.textAlign = i.textAlign),
									(l = i.label),
									(s = i.textOffset),
									ln(l))
								)
									for (n = 0, a = l.length; n < a; ++n)
										u.fillText('' + l[n], 0, s), (s += o.lineHeight);
								else u.fillText(l, 0, s);
								u.restore();
							}
						}
					},
					_drawTitle: function () {
						var t = this,
							e = t.ctx,
							n = t.options,
							r = n.scaleLabel;
						if (r.display) {
							var a,
								i,
								o = un(r.fontColor, z.global.defaultFontColor),
								l = H.options._parseFont(r),
								s = H.options.toPadding(r.padding),
								u = l.lineHeight / 2,
								c = n.position,
								d = 0;
							if (t.isHorizontal())
								(a = t.left + t.width / 2),
									(i =
										'bottom' === c
											? t.bottom - u - s.bottom
											: t.top + u + s.top);
							else {
								var h = 'left' === c;
								(a = h ? t.left + u + s.top : t.right - u - s.top),
									(i = t.top + t.height / 2),
									(d = h ? -0.5 * Math.PI : 0.5 * Math.PI);
							}
							e.save(),
								e.translate(a, i),
								e.rotate(d),
								(e.textAlign = 'center'),
								(e.textBaseline = 'middle'),
								(e.fillStyle = o),
								(e.font = l.string),
								e.fillText(r.labelString, 0, 0),
								e.restore();
						}
					},
					draw: function (t) {
						var e = this;
						e._isVisible() && (e._drawGrid(t), e._drawTitle(), e._drawLabels());
					},
					_layers: function () {
						var t = this,
							e = t.options,
							n = (e.ticks && e.ticks.z) || 0,
							r = (e.gridLines && e.gridLines.z) || 0;
						return t._isVisible() && n !== r && t.draw === t._draw
							? [
									{
										z: r,
										draw: function () {
											t._drawGrid.apply(t, arguments),
												t._drawTitle.apply(t, arguments);
										},
									},
									{
										z: n,
										draw: function () {
											t._drawLabels.apply(t, arguments);
										},
									},
							  ]
							: [
									{
										z: n,
										draw: function () {
											t.draw.apply(t, arguments);
										},
									},
							  ];
					},
					_getMatchingVisibleMetas: function (t) {
						var e = this,
							n = e.isHorizontal();
						return e.chart._getSortedVisibleDatasetMetas().filter(function (r) {
							return (
								(!t || r.type === t) &&
								(n ? r.xAxisID === e.id : r.yAxisID === e.id)
							);
						});
					},
				});
				xn.prototype._draw = xn.prototype.draw;
				var yn = xn,
					_n = H.isNullOrUndef,
					kn = yn.extend({
						determineDataLimits: function () {
							var t,
								e = this,
								n = e._getLabels(),
								r = e.options.ticks,
								a = r.min,
								i = r.max,
								o = 0,
								l = n.length - 1;
							void 0 !== a && (t = n.indexOf(a)) >= 0 && (o = t),
								void 0 !== i && (t = n.indexOf(i)) >= 0 && (l = t),
								(e.minIndex = o),
								(e.maxIndex = l),
								(e.min = n[o]),
								(e.max = n[l]);
						},
						buildTicks: function () {
							var t = this,
								e = t._getLabels(),
								n = t.minIndex,
								r = t.maxIndex;
							t.ticks = 0 === n && r === e.length - 1 ? e : e.slice(n, r + 1);
						},
						getLabelForIndex: function (t, e) {
							var n = this,
								r = n.chart;
							return r.getDatasetMeta(e).controller._getValueScaleId() === n.id
								? n.getRightValue(r.data.datasets[e].data[t])
								: n._getLabels()[t];
						},
						_configure: function () {
							var t = this,
								e = t.options.offset,
								n = t.ticks;
							yn.prototype._configure.call(t),
								t.isHorizontal() || (t._reversePixels = !t._reversePixels),
								n &&
									((t._startValue = t.minIndex - (e ? 0.5 : 0)),
									(t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)));
						},
						getPixelForValue: function (t, e, n) {
							var r,
								a,
								i,
								o = this;
							return (
								_n(e) || _n(n) || (t = o.chart.data.datasets[n].data[e]),
								_n(t) || (r = o.isHorizontal() ? t.x : t.y),
								(void 0 !== r || (void 0 !== t && isNaN(e))) &&
									((a = o._getLabels()),
									(t = H.valueOrDefault(r, t)),
									(e = -1 !== (i = a.indexOf(t)) ? i : e),
									isNaN(e) && (e = t)),
								o.getPixelForDecimal((e - o._startValue) / o._valueRange)
							);
						},
						getPixelForTick: function (t) {
							var e = this.ticks;
							return t < 0 || t > e.length - 1
								? null
								: this.getPixelForValue(e[t], t + this.minIndex);
						},
						getValueForPixel: function (t) {
							var e = this,
								n = Math.round(
									e._startValue + e.getDecimalForPixel(t) * e._valueRange
								);
							return Math.min(Math.max(n, 0), e.ticks.length - 1);
						},
						getBasePixel: function () {
							return this.bottom;
						},
					}),
					wn = {position: 'bottom'};
				kn._defaults = wn;
				var Mn = H.noop,
					Cn = H.isNullOrUndef;
				var Sn = yn.extend({
						getRightValue: function (t) {
							return 'string' == typeof t
								? +t
								: yn.prototype.getRightValue.call(this, t);
						},
						handleTickRangeOptions: function () {
							var t = this,
								e = t.options.ticks;
							if (e.beginAtZero) {
								var n = H.sign(t.min),
									r = H.sign(t.max);
								n < 0 && r < 0 ? (t.max = 0) : n > 0 && r > 0 && (t.min = 0);
							}
							var a = void 0 !== e.min || void 0 !== e.suggestedMin,
								i = void 0 !== e.max || void 0 !== e.suggestedMax;
							void 0 !== e.min
								? (t.min = e.min)
								: void 0 !== e.suggestedMin &&
								  (null === t.min
										? (t.min = e.suggestedMin)
										: (t.min = Math.min(t.min, e.suggestedMin))),
								void 0 !== e.max
									? (t.max = e.max)
									: void 0 !== e.suggestedMax &&
									  (null === t.max
											? (t.max = e.suggestedMax)
											: (t.max = Math.max(t.max, e.suggestedMax))),
								a !== i &&
									t.min >= t.max &&
									(a ? (t.max = t.min + 1) : (t.min = t.max - 1)),
								t.min === t.max && (t.max++, e.beginAtZero || t.min--);
						},
						getTickLimit: function () {
							var t,
								e = this,
								n = e.options.ticks,
								r = n.stepSize,
								a = n.maxTicksLimit;
							return (
								r
									? (t = Math.ceil(e.max / r) - Math.floor(e.min / r) + 1)
									: ((t = e._computeTickLimit()), (a = a || 11)),
								a && (t = Math.min(a, t)),
								t
							);
						},
						_computeTickLimit: function () {
							return Number.POSITIVE_INFINITY;
						},
						handleDirectionalChanges: Mn,
						buildTicks: function () {
							var t = this,
								e = t.options.ticks,
								n = t.getTickLimit(),
								r = {
									maxTicks: (n = Math.max(2, n)),
									min: e.min,
									max: e.max,
									precision: e.precision,
									stepSize: H.valueOrDefault(e.fixedStepSize, e.stepSize),
								},
								a = (t.ticks = (function (t, e) {
									var n,
										r,
										a,
										i,
										o = [],
										l = t.stepSize,
										s = l || 1,
										u = t.maxTicks - 1,
										c = t.min,
										d = t.max,
										h = t.precision,
										f = e.min,
										g = e.max,
										p = H.niceNum((g - f) / u / s) * s;
									if (p < 1e-14 && Cn(c) && Cn(d)) return [f, g];
									(i = Math.ceil(g / p) - Math.floor(f / p)) > u &&
										(p = H.niceNum((i * p) / u / s) * s),
										l || Cn(h)
											? (n = Math.pow(10, H._decimalPlaces(p)))
											: ((n = Math.pow(10, h)), (p = Math.ceil(p * n) / n)),
										(r = Math.floor(f / p) * p),
										(a = Math.ceil(g / p) * p),
										l &&
											(!Cn(c) && H.almostWhole(c / p, p / 1e3) && (r = c),
											!Cn(d) && H.almostWhole(d / p, p / 1e3) && (a = d)),
										(i = (a - r) / p),
										(i = H.almostEquals(i, Math.round(i), p / 1e3)
											? Math.round(i)
											: Math.ceil(i)),
										(r = Math.round(r * n) / n),
										(a = Math.round(a * n) / n),
										o.push(Cn(c) ? r : c);
									for (var m = 1; m < i; ++m)
										o.push(Math.round((r + m * p) * n) / n);
									return o.push(Cn(d) ? a : d), o;
								})(r, t));
							t.handleDirectionalChanges(),
								(t.max = H.max(a)),
								(t.min = H.min(a)),
								e.reverse
									? (a.reverse(), (t.start = t.max), (t.end = t.min))
									: ((t.start = t.min), (t.end = t.max));
						},
						convertTicksToLabels: function () {
							var t = this;
							(t.ticksAsNumbers = t.ticks.slice()),
								(t.zeroLineIndex = t.ticks.indexOf(0)),
								yn.prototype.convertTicksToLabels.call(t);
						},
						_configure: function () {
							var t,
								e = this,
								n = e.getTicks(),
								r = e.min,
								a = e.max;
							yn.prototype._configure.call(e),
								e.options.offset &&
									n.length &&
									((r -= t = (a - r) / Math.max(n.length - 1, 1) / 2),
									(a += t)),
								(e._startValue = r),
								(e._endValue = a),
								(e._valueRange = a - r);
						},
					}),
					Pn = {position: 'left', ticks: {callback: on.formatters.linear}};
				function An(t, e, n, r) {
					var a,
						i,
						o = t.options,
						l = (function (t, e, n) {
							var r = [
								n.type,
								void 0 === e && void 0 === n.stack ? n.index : '',
								n.stack,
							].join('.');
							return void 0 === t[r] && (t[r] = {pos: [], neg: []}), t[r];
						})(e, o.stacked, n),
						s = l.pos,
						u = l.neg,
						c = r.length;
					for (a = 0; a < c; ++a)
						(i = t._parseValue(r[a])),
							isNaN(i.min) ||
								isNaN(i.max) ||
								n.data[a].hidden ||
								((s[a] = s[a] || 0),
								(u[a] = u[a] || 0),
								o.relativePoints
									? (s[a] = 100)
									: i.min < 0 || i.max < 0
									? (u[a] += i.min)
									: (s[a] += i.max));
				}
				function Dn(t, e, n) {
					var r,
						a,
						i = n.length;
					for (r = 0; r < i; ++r)
						(a = t._parseValue(n[r])),
							isNaN(a.min) ||
								isNaN(a.max) ||
								e.data[r].hidden ||
								((t.min = Math.min(t.min, a.min)),
								(t.max = Math.max(t.max, a.max)));
				}
				var On = Sn.extend({
						determineDataLimits: function () {
							var t,
								e,
								n,
								r,
								a = this,
								i = a.options,
								o = a.chart.data.datasets,
								l = a._getMatchingVisibleMetas(),
								s = i.stacked,
								u = {},
								c = l.length;
							if (
								((a.min = Number.POSITIVE_INFINITY),
								(a.max = Number.NEGATIVE_INFINITY),
								void 0 === s)
							)
								for (t = 0; !s && t < c; ++t) s = void 0 !== (e = l[t]).stack;
							for (t = 0; t < c; ++t)
								(n = o[(e = l[t]).index].data),
									s ? An(a, u, e, n) : Dn(a, e, n);
							H.each(u, function (t) {
								(r = t.pos.concat(t.neg)),
									(a.min = Math.min(a.min, H.min(r))),
									(a.max = Math.max(a.max, H.max(r)));
							}),
								(a.min = H.isFinite(a.min) && !isNaN(a.min) ? a.min : 0),
								(a.max = H.isFinite(a.max) && !isNaN(a.max) ? a.max : 1),
								a.handleTickRangeOptions();
						},
						_computeTickLimit: function () {
							var t,
								e = this;
							return e.isHorizontal()
								? Math.ceil(e.width / 40)
								: ((t = H.options._parseFont(e.options.ticks)),
								  Math.ceil(e.height / t.lineHeight));
						},
						handleDirectionalChanges: function () {
							this.isHorizontal() || this.ticks.reverse();
						},
						getLabelForIndex: function (t, e) {
							return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
						},
						getPixelForValue: function (t) {
							var e = this;
							return e.getPixelForDecimal(
								(+e.getRightValue(t) - e._startValue) / e._valueRange
							);
						},
						getValueForPixel: function (t) {
							return (
								this._startValue + this.getDecimalForPixel(t) * this._valueRange
							);
						},
						getPixelForTick: function (t) {
							var e = this.ticksAsNumbers;
							return t < 0 || t > e.length - 1
								? null
								: this.getPixelForValue(e[t]);
						},
					}),
					Tn = Pn;
				On._defaults = Tn;
				var In = H.valueOrDefault,
					Fn = H.math.log10;
				var Ln = {
					position: 'left',
					ticks: {callback: on.formatters.logarithmic},
				};
				function En(t, e) {
					return H.isFinite(t) && t >= 0 ? t : e;
				}
				var Rn = yn.extend({
						determineDataLimits: function () {
							var t,
								e,
								n,
								r,
								a,
								i,
								o = this,
								l = o.options,
								s = o.chart,
								u = s.data.datasets,
								c = o.isHorizontal();
							function d(t) {
								return c ? t.xAxisID === o.id : t.yAxisID === o.id;
							}
							(o.min = Number.POSITIVE_INFINITY),
								(o.max = Number.NEGATIVE_INFINITY),
								(o.minNotZero = Number.POSITIVE_INFINITY);
							var h = l.stacked;
							if (void 0 === h)
								for (t = 0; t < u.length; t++)
									if (
										((e = s.getDatasetMeta(t)),
										s.isDatasetVisible(t) && d(e) && void 0 !== e.stack)
									) {
										h = !0;
										break;
									}
							if (l.stacked || h) {
								var f = {};
								for (t = 0; t < u.length; t++) {
									var g = [
										(e = s.getDatasetMeta(t)).type,
										void 0 === l.stacked && void 0 === e.stack ? t : '',
										e.stack,
									].join('.');
									if (s.isDatasetVisible(t) && d(e))
										for (
											void 0 === f[g] && (f[g] = []),
												a = 0,
												i = (r = u[t].data).length;
											a < i;
											a++
										) {
											var p = f[g];
											(n = o._parseValue(r[a])),
												isNaN(n.min) ||
													isNaN(n.max) ||
													e.data[a].hidden ||
													n.min < 0 ||
													n.max < 0 ||
													((p[a] = p[a] || 0), (p[a] += n.max));
										}
								}
								H.each(f, function (t) {
									if (t.length > 0) {
										var e = H.min(t),
											n = H.max(t);
										(o.min = Math.min(o.min, e)), (o.max = Math.max(o.max, n));
									}
								});
							} else
								for (t = 0; t < u.length; t++)
									if (
										((e = s.getDatasetMeta(t)), s.isDatasetVisible(t) && d(e))
									)
										for (a = 0, i = (r = u[t].data).length; a < i; a++)
											(n = o._parseValue(r[a])),
												isNaN(n.min) ||
													isNaN(n.max) ||
													e.data[a].hidden ||
													n.min < 0 ||
													n.max < 0 ||
													((o.min = Math.min(n.min, o.min)),
													(o.max = Math.max(n.max, o.max)),
													0 !== n.min &&
														(o.minNotZero = Math.min(n.min, o.minNotZero)));
							(o.min = H.isFinite(o.min) ? o.min : null),
								(o.max = H.isFinite(o.max) ? o.max : null),
								(o.minNotZero = H.isFinite(o.minNotZero) ? o.minNotZero : null),
								this.handleTickRangeOptions();
						},
						handleTickRangeOptions: function () {
							var t = this,
								e = t.options.ticks;
							(t.min = En(e.min, t.min)),
								(t.max = En(e.max, t.max)),
								t.min === t.max &&
									(0 !== t.min && null !== t.min
										? ((t.min = Math.pow(10, Math.floor(Fn(t.min)) - 1)),
										  (t.max = Math.pow(10, Math.floor(Fn(t.max)) + 1)))
										: ((t.min = 1), (t.max = 10))),
								null === t.min &&
									(t.min = Math.pow(10, Math.floor(Fn(t.max)) - 1)),
								null === t.max &&
									(t.max =
										0 !== t.min ? Math.pow(10, Math.floor(Fn(t.min)) + 1) : 10),
								null === t.minNotZero &&
									(t.min > 0
										? (t.minNotZero = t.min)
										: t.max < 1
										? (t.minNotZero = Math.pow(10, Math.floor(Fn(t.max))))
										: (t.minNotZero = 1));
						},
						buildTicks: function () {
							var t = this,
								e = t.options.ticks,
								n = !t.isHorizontal(),
								r = {min: En(e.min), max: En(e.max)},
								a = (t.ticks = (function (t, e) {
									var n,
										r,
										a = [],
										i = In(t.min, Math.pow(10, Math.floor(Fn(e.min)))),
										o = Math.floor(Fn(e.max)),
										l = Math.ceil(e.max / Math.pow(10, o));
									0 === i
										? ((n = Math.floor(Fn(e.minNotZero))),
										  (r = Math.floor(e.minNotZero / Math.pow(10, n))),
										  a.push(i),
										  (i = r * Math.pow(10, n)))
										: ((n = Math.floor(Fn(i))),
										  (r = Math.floor(i / Math.pow(10, n))));
									var s = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
									do {
										a.push(i),
											10 == ++r && ((r = 1), (s = ++n >= 0 ? 1 : s)),
											(i = Math.round(r * Math.pow(10, n) * s) / s);
									} while (n < o || (n === o && r < l));
									var u = In(t.max, i);
									return a.push(u), a;
								})(r, t));
							(t.max = H.max(a)),
								(t.min = H.min(a)),
								e.reverse
									? ((n = !n), (t.start = t.max), (t.end = t.min))
									: ((t.start = t.min), (t.end = t.max)),
								n && a.reverse();
						},
						convertTicksToLabels: function () {
							(this.tickValues = this.ticks.slice()),
								yn.prototype.convertTicksToLabels.call(this);
						},
						getLabelForIndex: function (t, e) {
							return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
						},
						getPixelForTick: function (t) {
							var e = this.tickValues;
							return t < 0 || t > e.length - 1
								? null
								: this.getPixelForValue(e[t]);
						},
						_getFirstTickValue: function (t) {
							var e = Math.floor(Fn(t));
							return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
						},
						_configure: function () {
							var t = this,
								e = t.min,
								n = 0;
							yn.prototype._configure.call(t),
								0 === e &&
									((e = t._getFirstTickValue(t.minNotZero)),
									(n =
										In(t.options.ticks.fontSize, z.global.defaultFontSize) /
										t._length)),
								(t._startValue = Fn(e)),
								(t._valueOffset = n),
								(t._valueRange = (Fn(t.max) - Fn(e)) / (1 - n));
						},
						getPixelForValue: function (t) {
							var e = this,
								n = 0;
							return (
								(t = +e.getRightValue(t)) > e.min &&
									t > 0 &&
									(n =
										(Fn(t) - e._startValue) / e._valueRange + e._valueOffset),
								e.getPixelForDecimal(n)
							);
						},
						getValueForPixel: function (t) {
							var e = this,
								n = e.getDecimalForPixel(t);
							return 0 === n && 0 === e.min
								? 0
								: Math.pow(
										10,
										e._startValue + (n - e._valueOffset) * e._valueRange
								  );
						},
					}),
					Nn = Ln;
				Rn._defaults = Nn;
				var zn = H.valueOrDefault,
					Bn = H.valueAtIndexOrDefault,
					Wn = H.options.resolve,
					Vn = {
						display: !0,
						animate: !0,
						position: 'chartArea',
						angleLines: {
							display: !0,
							color: 'rgba(0,0,0,0.1)',
							lineWidth: 1,
							borderDash: [],
							borderDashOffset: 0,
						},
						gridLines: {circular: !1},
						ticks: {
							showLabelBackdrop: !0,
							backdropColor: 'rgba(255,255,255,0.75)',
							backdropPaddingY: 2,
							backdropPaddingX: 2,
							callback: on.formatters.linear,
						},
						pointLabels: {
							display: !0,
							fontSize: 10,
							callback: function (t) {
								return t;
							},
						},
					};
				function jn(t) {
					var e = t.ticks;
					return e.display && t.display
						? zn(e.fontSize, z.global.defaultFontSize) + 2 * e.backdropPaddingY
						: 0;
				}
				function Hn(t, e, n, r, a) {
					return t === r || t === a
						? {start: e - n / 2, end: e + n / 2}
						: t < r || t > a
						? {start: e - n, end: e}
						: {start: e, end: e + n};
				}
				function qn(t) {
					return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
				}
				function Un(t, e, n, r) {
					var a,
						i,
						o = n.y + r / 2;
					if (H.isArray(e))
						for (a = 0, i = e.length; a < i; ++a)
							t.fillText(e[a], n.x, o), (o += r);
					else t.fillText(e, n.x, o);
				}
				function Zn(t, e, n) {
					90 === t || 270 === t
						? (n.y -= e.h / 2)
						: (t > 270 || t < 90) && (n.y -= e.h);
				}
				function Yn(t) {
					return H.isNumber(t) ? t : 0;
				}
				var Kn = Sn.extend({
						setDimensions: function () {
							var t = this;
							(t.width = t.maxWidth),
								(t.height = t.maxHeight),
								(t.paddingTop = jn(t.options) / 2),
								(t.xCenter = Math.floor(t.width / 2)),
								(t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
								(t.drawingArea =
									Math.min(t.height - t.paddingTop, t.width) / 2);
						},
						determineDataLimits: function () {
							var t = this,
								e = t.chart,
								n = Number.POSITIVE_INFINITY,
								r = Number.NEGATIVE_INFINITY;
							H.each(e.data.datasets, function (a, i) {
								if (e.isDatasetVisible(i)) {
									var o = e.getDatasetMeta(i);
									H.each(a.data, function (e, a) {
										var i = +t.getRightValue(e);
										isNaN(i) ||
											o.data[a].hidden ||
											((n = Math.min(i, n)), (r = Math.max(i, r)));
									});
								}
							}),
								(t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
								(t.max = r === Number.NEGATIVE_INFINITY ? 0 : r),
								t.handleTickRangeOptions();
						},
						_computeTickLimit: function () {
							return Math.ceil(this.drawingArea / jn(this.options));
						},
						convertTicksToLabels: function () {
							var t = this;
							Sn.prototype.convertTicksToLabels.call(t),
								(t.pointLabels = t.chart.data.labels.map(function () {
									var e = H.callback(
										t.options.pointLabels.callback,
										arguments,
										t
									);
									return e || 0 === e ? e : '';
								}));
						},
						getLabelForIndex: function (t, e) {
							return +this.getRightValue(this.chart.data.datasets[e].data[t]);
						},
						fit: function () {
							var t = this,
								e = t.options;
							e.display && e.pointLabels.display
								? (function (t) {
										var e,
											n,
											r,
											a = H.options._parseFont(t.options.pointLabels),
											i = {l: 0, r: t.width, t: 0, b: t.height - t.paddingTop},
											o = {};
										(t.ctx.font = a.string), (t._pointLabelSizes = []);
										var l,
											s,
											u,
											c = t.chart.data.labels.length;
										for (e = 0; e < c; e++) {
											(r = t.getPointPosition(e, t.drawingArea + 5)),
												(l = t.ctx),
												(s = a.lineHeight),
												(u = t.pointLabels[e]),
												(n = H.isArray(u)
													? {w: H.longestText(l, l.font, u), h: u.length * s}
													: {w: l.measureText(u).width, h: s}),
												(t._pointLabelSizes[e] = n);
											var d = t.getIndexAngle(e),
												h = H.toDegrees(d) % 360,
												f = Hn(h, r.x, n.w, 0, 180),
												g = Hn(h, r.y, n.h, 90, 270);
											f.start < i.l && ((i.l = f.start), (o.l = d)),
												f.end > i.r && ((i.r = f.end), (o.r = d)),
												g.start < i.t && ((i.t = g.start), (o.t = d)),
												g.end > i.b && ((i.b = g.end), (o.b = d));
										}
										t.setReductions(t.drawingArea, i, o);
								  })(t)
								: t.setCenterPoint(0, 0, 0, 0);
						},
						setReductions: function (t, e, n) {
							var r = this,
								a = e.l / Math.sin(n.l),
								i = Math.max(e.r - r.width, 0) / Math.sin(n.r),
								o = -e.t / Math.cos(n.t),
								l =
									-Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
							(a = Yn(a)),
								(i = Yn(i)),
								(o = Yn(o)),
								(l = Yn(l)),
								(r.drawingArea = Math.min(
									Math.floor(t - (a + i) / 2),
									Math.floor(t - (o + l) / 2)
								)),
								r.setCenterPoint(a, i, o, l);
						},
						setCenterPoint: function (t, e, n, r) {
							var a = this,
								i = a.width - e - a.drawingArea,
								o = t + a.drawingArea,
								l = n + a.drawingArea,
								s = a.height - a.paddingTop - r - a.drawingArea;
							(a.xCenter = Math.floor((o + i) / 2 + a.left)),
								(a.yCenter = Math.floor((l + s) / 2 + a.top + a.paddingTop));
						},
						getIndexAngle: function (t) {
							var e = this.chart,
								n =
									(t * (360 / e.data.labels.length) +
										((e.options || {}).startAngle || 0)) %
									360;
							return ((n < 0 ? n + 360 : n) * Math.PI * 2) / 360;
						},
						getDistanceFromCenterForValue: function (t) {
							var e = this;
							if (H.isNullOrUndef(t)) return NaN;
							var n = e.drawingArea / (e.max - e.min);
							return e.options.ticks.reverse
								? (e.max - t) * n
								: (t - e.min) * n;
						},
						getPointPosition: function (t, e) {
							var n = this,
								r = n.getIndexAngle(t) - Math.PI / 2;
							return {
								x: Math.cos(r) * e + n.xCenter,
								y: Math.sin(r) * e + n.yCenter,
							};
						},
						getPointPositionForValue: function (t, e) {
							return this.getPointPosition(
								t,
								this.getDistanceFromCenterForValue(e)
							);
						},
						getBasePosition: function (t) {
							var e = this,
								n = e.min,
								r = e.max;
							return e.getPointPositionForValue(
								t || 0,
								e.beginAtZero ? 0 : n < 0 && r < 0 ? r : n > 0 && r > 0 ? n : 0
							);
						},
						_drawGrid: function () {
							var t,
								e,
								n,
								r = this,
								a = r.ctx,
								i = r.options,
								o = i.gridLines,
								l = i.angleLines,
								s = zn(l.lineWidth, o.lineWidth),
								u = zn(l.color, o.color);
							if (
								(i.pointLabels.display &&
									(function (t) {
										var e = t.ctx,
											n = t.options,
											r = n.pointLabels,
											a = jn(n),
											i = t.getDistanceFromCenterForValue(
												n.ticks.reverse ? t.min : t.max
											),
											o = H.options._parseFont(r);
										e.save(), (e.font = o.string), (e.textBaseline = 'middle');
										for (var l = t.chart.data.labels.length - 1; l >= 0; l--) {
											var s = 0 === l ? a / 2 : 0,
												u = t.getPointPosition(l, i + s + 5),
												c = Bn(r.fontColor, l, z.global.defaultFontColor);
											e.fillStyle = c;
											var d = t.getIndexAngle(l),
												h = H.toDegrees(d);
											(e.textAlign = qn(h)),
												Zn(h, t._pointLabelSizes[l], u),
												Un(e, t.pointLabels[l], u, o.lineHeight);
										}
										e.restore();
									})(r),
								o.display &&
									H.each(r.ticks, function (t, n) {
										0 !== n &&
											((e = r.getDistanceFromCenterForValue(
												r.ticksAsNumbers[n]
											)),
											(function (t, e, n, r) {
												var a,
													i = t.ctx,
													o = e.circular,
													l = t.chart.data.labels.length,
													s = Bn(e.color, r - 1),
													u = Bn(e.lineWidth, r - 1);
												if ((o || l) && s && u) {
													if (
														(i.save(),
														(i.strokeStyle = s),
														(i.lineWidth = u),
														i.setLineDash &&
															(i.setLineDash(e.borderDash || []),
															(i.lineDashOffset = e.borderDashOffset || 0)),
														i.beginPath(),
														o)
													)
														i.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
													else {
														(a = t.getPointPosition(0, n)), i.moveTo(a.x, a.y);
														for (var c = 1; c < l; c++)
															(a = t.getPointPosition(c, n)),
																i.lineTo(a.x, a.y);
													}
													i.closePath(), i.stroke(), i.restore();
												}
											})(r, o, e, n));
									}),
								l.display && s && u)
							) {
								for (
									a.save(),
										a.lineWidth = s,
										a.strokeStyle = u,
										a.setLineDash &&
											(a.setLineDash(Wn([l.borderDash, o.borderDash, []])),
											(a.lineDashOffset = Wn([
												l.borderDashOffset,
												o.borderDashOffset,
												0,
											]))),
										t = r.chart.data.labels.length - 1;
									t >= 0;
									t--
								)
									(e = r.getDistanceFromCenterForValue(
										i.ticks.reverse ? r.min : r.max
									)),
										(n = r.getPointPosition(t, e)),
										a.beginPath(),
										a.moveTo(r.xCenter, r.yCenter),
										a.lineTo(n.x, n.y),
										a.stroke();
								a.restore();
							}
						},
						_drawLabels: function () {
							var t = this,
								e = t.ctx,
								n = t.options.ticks;
							if (n.display) {
								var r,
									a,
									i = t.getIndexAngle(0),
									o = H.options._parseFont(n),
									l = zn(n.fontColor, z.global.defaultFontColor);
								e.save(),
									(e.font = o.string),
									e.translate(t.xCenter, t.yCenter),
									e.rotate(i),
									(e.textAlign = 'center'),
									(e.textBaseline = 'middle'),
									H.each(t.ticks, function (i, s) {
										(0 !== s || n.reverse) &&
											((r = t.getDistanceFromCenterForValue(
												t.ticksAsNumbers[s]
											)),
											n.showLabelBackdrop &&
												((a = e.measureText(i).width),
												(e.fillStyle = n.backdropColor),
												e.fillRect(
													-a / 2 - n.backdropPaddingX,
													-r - o.size / 2 - n.backdropPaddingY,
													a + 2 * n.backdropPaddingX,
													o.size + 2 * n.backdropPaddingY
												)),
											(e.fillStyle = l),
											e.fillText(i, 0, -r));
									}),
									e.restore();
							}
						},
						_drawTitle: H.noop,
					}),
					$n = Vn;
				Kn._defaults = $n;
				var Gn = H._deprecated,
					Xn = H.options.resolve,
					Jn = H.valueOrDefault,
					Qn = Number.MIN_SAFE_INTEGER || -9007199254740991,
					tr = Number.MAX_SAFE_INTEGER || 9007199254740991,
					er = {
						millisecond: {common: !0, size: 1, steps: 1e3},
						second: {common: !0, size: 1e3, steps: 60},
						minute: {common: !0, size: 6e4, steps: 60},
						hour: {common: !0, size: 36e5, steps: 24},
						day: {common: !0, size: 864e5, steps: 30},
						week: {common: !1, size: 6048e5, steps: 4},
						month: {common: !0, size: 2628e6, steps: 12},
						quarter: {common: !1, size: 7884e6, steps: 4},
						year: {common: !0, size: 3154e7},
					},
					nr = Object.keys(er);
				function rr(t, e) {
					return t - e;
				}
				function ar(t) {
					return H.valueOrDefault(t.time.min, t.ticks.min);
				}
				function ir(t) {
					return H.valueOrDefault(t.time.max, t.ticks.max);
				}
				function or(t, e, n, r) {
					var a = (function (t, e, n) {
							for (var r, a, i, o = 0, l = t.length - 1; o >= 0 && o <= l; ) {
								if (((a = t[(r = (o + l) >> 1) - 1] || null), (i = t[r]), !a))
									return {lo: null, hi: i};
								if (i[e] < n) o = r + 1;
								else {
									if (!(a[e] > n)) return {lo: a, hi: i};
									l = r - 1;
								}
							}
							return {lo: i, hi: null};
						})(t, e, n),
						i = a.lo ? (a.hi ? a.lo : t[t.length - 2]) : t[0],
						o = a.lo ? (a.hi ? a.hi : t[t.length - 1]) : t[1],
						l = o[e] - i[e],
						s = l ? (n - i[e]) / l : 0,
						u = (o[r] - i[r]) * s;
					return i[r] + u;
				}
				function lr(t, e) {
					var n = t._adapter,
						r = t.options.time,
						a = r.parser,
						i = a || r.format,
						o = e;
					return (
						'function' == typeof a && (o = a(o)),
						H.isFinite(o) ||
							(o = 'string' == typeof i ? n.parse(o, i) : n.parse(o)),
						null !== o
							? +o
							: (a ||
									'function' != typeof i ||
									((o = i(e)), H.isFinite(o) || (o = n.parse(o))),
							  o)
					);
				}
				function sr(t, e) {
					if (H.isNullOrUndef(e)) return null;
					var n = t.options.time,
						r = lr(t, t.getRightValue(e));
					return (
						null === r || (n.round && (r = +t._adapter.startOf(r, n.round))), r
					);
				}
				function ur(t, e, n, r) {
					var a,
						i,
						o,
						l = nr.length;
					for (a = nr.indexOf(t); a < l - 1; ++a)
						if (
							((o = (i = er[nr[a]]).steps ? i.steps : tr),
							i.common && Math.ceil((n - e) / (o * i.size)) <= r)
						)
							return nr[a];
					return nr[l - 1];
				}
				function cr(t, e, n) {
					var r,
						a,
						i = [],
						o = {},
						l = e.length;
					for (r = 0; r < l; ++r)
						(o[(a = e[r])] = r), i.push({value: a, major: !1});
					return 0 !== l && n
						? (function (t, e, n, r) {
								var a,
									i,
									o = t._adapter,
									l = +o.startOf(e[0].value, r),
									s = e[e.length - 1].value;
								for (a = l; a <= s; a = +o.add(a, 1, r))
									(i = n[a]) >= 0 && (e[i].major = !0);
								return e;
						  })(t, i, o, n)
						: i;
				}
				var dr = yn.extend({
						initialize: function () {
							this.mergeTicksOptions(), yn.prototype.initialize.call(this);
						},
						update: function () {
							var t = this,
								e = t.options,
								n = e.time || (e.time = {}),
								r = (t._adapter = new an._date(e.adapters.date));
							return (
								Gn('time scale', n.format, 'time.format', 'time.parser'),
								Gn('time scale', n.min, 'time.min', 'ticks.min'),
								Gn('time scale', n.max, 'time.max', 'ticks.max'),
								H.mergeIf(n.displayFormats, r.formats()),
								yn.prototype.update.apply(t, arguments)
							);
						},
						getRightValue: function (t) {
							return (
								t && void 0 !== t.t && (t = t.t),
								yn.prototype.getRightValue.call(this, t)
							);
						},
						determineDataLimits: function () {
							var t,
								e,
								n,
								r,
								a,
								i,
								o,
								l = this,
								s = l.chart,
								u = l._adapter,
								c = l.options,
								d = c.time.unit || 'day',
								h = tr,
								f = Qn,
								g = [],
								p = [],
								m = [],
								v = l._getLabels();
							for (t = 0, n = v.length; t < n; ++t) m.push(sr(l, v[t]));
							for (t = 0, n = (s.data.datasets || []).length; t < n; ++t)
								if (s.isDatasetVisible(t))
									if (((a = s.data.datasets[t].data), H.isObject(a[0])))
										for (p[t] = [], e = 0, r = a.length; e < r; ++e)
											(i = sr(l, a[e])), g.push(i), (p[t][e] = i);
									else (p[t] = m.slice(0)), o || ((g = g.concat(m)), (o = !0));
								else p[t] = [];
							m.length &&
								((h = Math.min(h, m[0])), (f = Math.max(f, m[m.length - 1]))),
								g.length &&
									((g =
										n > 1
											? (function (t) {
													var e,
														n,
														r,
														a = {},
														i = [];
													for (e = 0, n = t.length; e < n; ++e)
														a[(r = t[e])] || ((a[r] = !0), i.push(r));
													return i;
											  })(g).sort(rr)
											: g.sort(rr)),
									(h = Math.min(h, g[0])),
									(f = Math.max(f, g[g.length - 1]))),
								(h = sr(l, ar(c)) || h),
								(f = sr(l, ir(c)) || f),
								(h = h === tr ? +u.startOf(Date.now(), d) : h),
								(f = f === Qn ? +u.endOf(Date.now(), d) + 1 : f),
								(l.min = Math.min(h, f)),
								(l.max = Math.max(h + 1, f)),
								(l._table = []),
								(l._timestamps = {data: g, datasets: p, labels: m});
						},
						buildTicks: function () {
							var t,
								e,
								n,
								r = this,
								a = r.min,
								i = r.max,
								o = r.options,
								l = o.ticks,
								s = o.time,
								u = r._timestamps,
								c = [],
								d = r.getLabelCapacity(a),
								h = l.source,
								f = o.distribution;
							for (
								u =
									'data' === h || ('auto' === h && 'series' === f)
										? u.data
										: 'labels' === h
										? u.labels
										: (function (t, e, n, r) {
												var a,
													i = t._adapter,
													o = t.options,
													l = o.time,
													s = l.unit || ur(l.minUnit, e, n, r),
													u = Xn([l.stepSize, l.unitStepSize, 1]),
													c = 'week' === s && l.isoWeekday,
													d = e,
													h = [];
												if (
													(c && (d = +i.startOf(d, 'isoWeek', c)),
													(d = +i.startOf(d, c ? 'day' : s)),
													i.diff(n, e, s) > 1e5 * u)
												)
													throw (
														e +
														' and ' +
														n +
														' are too far apart with stepSize of ' +
														u +
														' ' +
														s
													);
												for (a = d; a < n; a = +i.add(a, u, s)) h.push(a);
												return (
													(a !== n && 'ticks' !== o.bounds) || h.push(a), h
												);
										  })(r, a, i, d),
									'ticks' === o.bounds &&
										u.length &&
										((a = u[0]), (i = u[u.length - 1])),
									a = sr(r, ar(o)) || a,
									i = sr(r, ir(o)) || i,
									t = 0,
									e = u.length;
								t < e;
								++t
							)
								(n = u[t]) >= a && n <= i && c.push(n);
							return (
								(r.min = a),
								(r.max = i),
								(r._unit =
									s.unit ||
									(l.autoSkip
										? ur(s.minUnit, r.min, r.max, d)
										: (function (t, e, n, r, a) {
												var i, o;
												for (i = nr.length - 1; i >= nr.indexOf(n); i--)
													if (
														((o = nr[i]),
														er[o].common && t._adapter.diff(a, r, o) >= e - 1)
													)
														return o;
												return nr[n ? nr.indexOf(n) : 0];
										  })(r, c.length, s.minUnit, r.min, r.max))),
								(r._majorUnit =
									l.major.enabled && 'year' !== r._unit
										? (function (t) {
												for (
													var e = nr.indexOf(t) + 1, n = nr.length;
													e < n;
													++e
												)
													if (er[nr[e]].common) return nr[e];
										  })(r._unit)
										: void 0),
								(r._table = (function (t, e, n, r) {
									if ('linear' === r || !t.length)
										return [
											{time: e, pos: 0},
											{time: n, pos: 1},
										];
									var a,
										i,
										o,
										l,
										s,
										u = [],
										c = [e];
									for (a = 0, i = t.length; a < i; ++a)
										(l = t[a]) > e && l < n && c.push(l);
									for (c.push(n), a = 0, i = c.length; a < i; ++a)
										(s = c[a + 1]),
											(o = c[a - 1]),
											(l = c[a]),
											(void 0 !== o &&
												void 0 !== s &&
												Math.round((s + o) / 2) === l) ||
												u.push({time: l, pos: a / (i - 1)});
									return u;
								})(r._timestamps.data, a, i, f)),
								(r._offsets = (function (t, e, n, r, a) {
									var i,
										o,
										l = 0,
										s = 0;
									return (
										a.offset &&
											e.length &&
											((i = or(t, 'time', e[0], 'pos')),
											(l =
												1 === e.length
													? 1 - i
													: (or(t, 'time', e[1], 'pos') - i) / 2),
											(o = or(t, 'time', e[e.length - 1], 'pos')),
											(s =
												1 === e.length
													? o
													: (o - or(t, 'time', e[e.length - 2], 'pos')) / 2)),
										{start: l, end: s, factor: 1 / (l + 1 + s)}
									);
								})(r._table, c, 0, 0, o)),
								l.reverse && c.reverse(),
								cr(r, c, r._majorUnit)
							);
						},
						getLabelForIndex: function (t, e) {
							var n = this,
								r = n._adapter,
								a = n.chart.data,
								i = n.options.time,
								o = a.labels && t < a.labels.length ? a.labels[t] : '',
								l = a.datasets[e].data[t];
							return (
								H.isObject(l) && (o = n.getRightValue(l)),
								i.tooltipFormat
									? r.format(lr(n, o), i.tooltipFormat)
									: 'string' == typeof o
									? o
									: r.format(lr(n, o), i.displayFormats.datetime)
							);
						},
						tickFormatFunction: function (t, e, n, r) {
							var a = this,
								i = a._adapter,
								o = a.options,
								l = o.time.displayFormats,
								s = l[a._unit],
								u = a._majorUnit,
								c = l[u],
								d = n[e],
								h = o.ticks,
								f = u && c && d && d.major,
								g = i.format(t, r || (f ? c : s)),
								p = f ? h.major : h.minor,
								m = Xn([
									p.callback,
									p.userCallback,
									h.callback,
									h.userCallback,
								]);
							return m ? m(g, e, n) : g;
						},
						convertTicksToLabels: function (t) {
							var e,
								n,
								r = [];
							for (e = 0, n = t.length; e < n; ++e)
								r.push(this.tickFormatFunction(t[e].value, e, t));
							return r;
						},
						getPixelForOffset: function (t) {
							var e = this,
								n = e._offsets,
								r = or(e._table, 'time', t, 'pos');
							return e.getPixelForDecimal((n.start + r) * n.factor);
						},
						getPixelForValue: function (t, e, n) {
							var r = this,
								a = null;
							if (
								(void 0 !== e &&
									void 0 !== n &&
									(a = r._timestamps.datasets[n][e]),
								null === a && (a = sr(r, t)),
								null !== a)
							)
								return r.getPixelForOffset(a);
						},
						getPixelForTick: function (t) {
							var e = this.getTicks();
							return t >= 0 && t < e.length
								? this.getPixelForOffset(e[t].value)
								: null;
						},
						getValueForPixel: function (t) {
							var e = this,
								n = e._offsets,
								r = e.getDecimalForPixel(t) / n.factor - n.end,
								a = or(e._table, 'pos', r, 'time');
							return e._adapter._create(a);
						},
						_getLabelSize: function (t) {
							var e = this,
								n = e.options.ticks,
								r = e.ctx.measureText(t).width,
								a = H.toRadians(
									e.isHorizontal() ? n.maxRotation : n.minRotation
								),
								i = Math.cos(a),
								o = Math.sin(a),
								l = Jn(n.fontSize, z.global.defaultFontSize);
							return {w: r * i + l * o, h: r * o + l * i};
						},
						getLabelWidth: function (t) {
							return this._getLabelSize(t).w;
						},
						getLabelCapacity: function (t) {
							var e = this,
								n = e.options.time,
								r = n.displayFormats,
								a = r[n.unit] || r.millisecond,
								i = e.tickFormatFunction(t, 0, cr(e, [t], e._majorUnit), a),
								o = e._getLabelSize(i),
								l = Math.floor(
									e.isHorizontal() ? e.width / o.w : e.height / o.h
								);
							return e.options.offset && l--, l > 0 ? l : 1;
						},
					}),
					hr = {
						position: 'bottom',
						distribution: 'linear',
						bounds: 'data',
						adapters: {},
						time: {
							parser: !1,
							unit: !1,
							round: !1,
							displayFormat: !1,
							isoWeekday: !1,
							minUnit: 'millisecond',
							displayFormats: {},
						},
						ticks: {autoSkip: !1, source: 'auto', major: {enabled: !1}},
					};
				dr._defaults = hr;
				var fr = {
						category: kn,
						linear: On,
						logarithmic: Rn,
						radialLinear: Kn,
						time: dr,
					},
					gr = {
						datetime: 'MMM D, YYYY, h:mm:ss a',
						millisecond: 'h:mm:ss.SSS a',
						second: 'h:mm:ss a',
						minute: 'h:mm a',
						hour: 'hA',
						day: 'MMM D',
						week: 'll',
						month: 'MMM YYYY',
						quarter: '[Q]Q - YYYY',
						year: 'YYYY',
					};
				an._date.override(
					'function' == typeof t
						? {
								_id: 'moment',
								formats: function () {
									return gr;
								},
								parse: function (e, n) {
									return (
										'string' == typeof e && 'string' == typeof n
											? (e = t(e, n))
											: e instanceof t || (e = t(e)),
										e.isValid() ? e.valueOf() : null
									);
								},
								format: function (e, n) {
									return t(e).format(n);
								},
								add: function (e, n, r) {
									return t(e).add(n, r).valueOf();
								},
								diff: function (e, n, r) {
									return t(e).diff(t(n), r);
								},
								startOf: function (e, n, r) {
									return (
										(e = t(e)),
										'isoWeek' === n
											? e.isoWeekday(r).valueOf()
											: e.startOf(n).valueOf()
									);
								},
								endOf: function (e, n) {
									return t(e).endOf(n).valueOf();
								},
								_create: function (e) {
									return t(e);
								},
						  }
						: {}
				),
					z._set('global', {plugins: {filler: {propagate: !0}}});
				var pr = {
					dataset: function (t) {
						var e = t.fill,
							n = t.chart,
							r = n.getDatasetMeta(e),
							a = (r && n.isDatasetVisible(e) && r.dataset._children) || [],
							i = a.length || 0;
						return i
							? function (t, e) {
									return (e < i && a[e]._view) || null;
							  }
							: null;
					},
					boundary: function (t) {
						var e = t.boundary,
							n = e ? e.x : null,
							r = e ? e.y : null;
						return H.isArray(e)
							? function (t, n) {
									return e[n];
							  }
							: function (t) {
									return {x: null === n ? t.x : n, y: null === r ? t.y : r};
							  };
					},
				};
				function mr(t, e, n) {
					var r,
						a = t._model || {},
						i = a.fill;
					if (
						(void 0 === i && (i = !!a.backgroundColor), !1 === i || null === i)
					)
						return !1;
					if (!0 === i) return 'origin';
					if (((r = parseFloat(i, 10)), isFinite(r) && Math.floor(r) === r))
						return (
							('-' !== i[0] && '+' !== i[0]) || (r = e + r),
							!(r === e || r < 0 || r >= n) && r
						);
					switch (i) {
						case 'bottom':
							return 'start';
						case 'top':
							return 'end';
						case 'zero':
							return 'origin';
						case 'origin':
						case 'start':
						case 'end':
							return i;
						default:
							return !1;
					}
				}
				function vr(t) {
					return (t.el._scale || {}).getPointPositionForValue
						? (function (t) {
								var e,
									n,
									r,
									a,
									i,
									o = t.el._scale,
									l = o.options,
									s = o.chart.data.labels.length,
									u = t.fill,
									c = [];
								if (!s) return null;
								for (
									e = l.ticks.reverse ? o.max : o.min,
										n = l.ticks.reverse ? o.min : o.max,
										r = o.getPointPositionForValue(0, e),
										a = 0;
									a < s;
									++a
								)
									(i =
										'start' === u || 'end' === u
											? o.getPointPositionForValue(a, 'start' === u ? e : n)
											: o.getBasePosition(a)),
										l.gridLines.circular &&
											((i.cx = r.x),
											(i.cy = r.y),
											(i.angle = o.getIndexAngle(a) - Math.PI / 2)),
										c.push(i);
								return c;
						  })(t)
						: (function (t) {
								var e,
									n = t.el._model || {},
									r = t.el._scale || {},
									a = t.fill,
									i = null;
								if (isFinite(a)) return null;
								if (
									('start' === a
										? (i = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom)
										: 'end' === a
										? (i = void 0 === n.scaleTop ? r.top : n.scaleTop)
										: void 0 !== n.scaleZero
										? (i = n.scaleZero)
										: r.getBasePixel && (i = r.getBasePixel()),
									null != i)
								) {
									if (void 0 !== i.x && void 0 !== i.y) return i;
									if (H.isFinite(i))
										return {
											x: (e = r.isHorizontal()) ? i : null,
											y: e ? null : i,
										};
								}
								return null;
						  })(t);
				}
				function br(t, e, n) {
					var r,
						a = t[e].fill,
						i = [e];
					if (!n) return a;
					for (; !1 !== a && -1 === i.indexOf(a); ) {
						if (!isFinite(a)) return a;
						if (!(r = t[a])) return !1;
						if (r.visible) return a;
						i.push(a), (a = r.fill);
					}
					return !1;
				}
				function xr(t) {
					var e = t.fill,
						n = 'dataset';
					return !1 === e ? null : (isFinite(e) || (n = 'boundary'), pr[n](t));
				}
				function yr(t) {
					return t && !t.skip;
				}
				function _r(t, e, n, r, a) {
					var i, o, l, s;
					if (r && a) {
						for (t.moveTo(e[0].x, e[0].y), i = 1; i < r; ++i)
							H.canvas.lineTo(t, e[i - 1], e[i]);
						if (void 0 === n[0].angle)
							for (t.lineTo(n[a - 1].x, n[a - 1].y), i = a - 1; i > 0; --i)
								H.canvas.lineTo(t, n[i], n[i - 1], !0);
						else
							for (
								o = n[0].cx,
									l = n[0].cy,
									s = Math.sqrt(
										Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - l, 2)
									),
									i = a - 1;
								i > 0;
								--i
							)
								t.arc(o, l, s, n[i].angle, n[i - 1].angle, !0);
					}
				}
				function kr(t, e, n, r, a, i) {
					var o,
						l,
						s,
						u,
						c,
						d,
						h,
						f,
						g = e.length,
						p = r.spanGaps,
						m = [],
						v = [],
						b = 0,
						x = 0;
					for (t.beginPath(), o = 0, l = g; o < l; ++o)
						(c = n((u = e[(s = o % g)]._view), s, r)),
							(d = yr(u)),
							(h = yr(c)),
							i && void 0 === f && d && (l = g + (f = o + 1)),
							d && h
								? ((b = m.push(u)), (x = v.push(c)))
								: b &&
								  x &&
								  (p
										? (d && m.push(u), h && v.push(c))
										: (_r(t, m, v, b, x), (b = x = 0), (m = []), (v = [])));
					_r(t, m, v, b, x), t.closePath(), (t.fillStyle = a), t.fill();
				}
				var wr = {
						id: 'filler',
						afterDatasetsUpdate: function (t, e) {
							var n,
								r,
								a,
								i,
								o = (t.data.datasets || []).length,
								l = e.propagate,
								s = [];
							for (r = 0; r < o; ++r)
								(i = null),
									(a = (n = t.getDatasetMeta(r)).dataset) &&
										a._model &&
										a instanceof wt.Line &&
										(i = {
											visible: t.isDatasetVisible(r),
											fill: mr(a, r, o),
											chart: t,
											el: a,
										}),
									(n.$filler = i),
									s.push(i);
							for (r = 0; r < o; ++r)
								(i = s[r]) &&
									((i.fill = br(s, r, l)),
									(i.boundary = vr(i)),
									(i.mapper = xr(i)));
						},
						beforeDatasetsDraw: function (t) {
							var e,
								n,
								r,
								a,
								i,
								o,
								l,
								s = t._getSortedVisibleDatasetMetas(),
								u = t.ctx;
							for (n = s.length - 1; n >= 0; --n)
								(e = s[n].$filler) &&
									e.visible &&
									((a = (r = e.el)._view),
									(i = r._children || []),
									(o = e.mapper),
									(l = a.backgroundColor || z.global.defaultColor),
									o &&
										l &&
										i.length &&
										(H.canvas.clipArea(u, t.chartArea),
										kr(u, i, o, a, l, r._loop),
										H.canvas.unclipArea(u)));
						},
					},
					Mr = H.rtl.getRtlAdapter,
					Cr = H.noop,
					Sr = H.valueOrDefault;
				function Pr(t, e) {
					return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
				}
				z._set('global', {
					legend: {
						display: !0,
						position: 'top',
						align: 'center',
						fullWidth: !0,
						reverse: !1,
						weight: 1e3,
						onClick: function (t, e) {
							var n = e.datasetIndex,
								r = this.chart,
								a = r.getDatasetMeta(n);
							(a.hidden =
								null === a.hidden ? !r.data.datasets[n].hidden : null),
								r.update();
						},
						onHover: null,
						onLeave: null,
						labels: {
							boxWidth: 40,
							padding: 10,
							generateLabels: function (t) {
								var e = t.data.datasets,
									n = t.options.legend || {},
									r = n.labels && n.labels.usePointStyle;
								return t._getSortedDatasetMetas().map(function (n) {
									var a = n.controller.getStyle(r ? 0 : void 0);
									return {
										text: e[n.index].label,
										fillStyle: a.backgroundColor,
										hidden: !t.isDatasetVisible(n.index),
										lineCap: a.borderCapStyle,
										lineDash: a.borderDash,
										lineDashOffset: a.borderDashOffset,
										lineJoin: a.borderJoinStyle,
										lineWidth: a.borderWidth,
										strokeStyle: a.borderColor,
										pointStyle: a.pointStyle,
										rotation: a.rotation,
										datasetIndex: n.index,
									};
								}, this);
							},
						},
					},
					legendCallback: function (t) {
						var e,
							n,
							r,
							a = document.createElement('ul'),
							i = t.data.datasets;
						for (
							a.setAttribute('class', t.id + '-legend'), e = 0, n = i.length;
							e < n;
							e++
						)
							((r = a.appendChild(document.createElement('li'))).appendChild(
								document.createElement('span')
							).style.backgroundColor = i[e].backgroundColor),
								i[e].label &&
									r.appendChild(document.createTextNode(i[e].label));
						return a.outerHTML;
					},
				});
				var Ar = G.extend({
					initialize: function (t) {
						var e = this;
						H.extend(e, t),
							(e.legendHitBoxes = []),
							(e._hoveredItem = null),
							(e.doughnutMode = !1);
					},
					beforeUpdate: Cr,
					update: function (t, e, n) {
						var r = this;
						return (
							r.beforeUpdate(),
							(r.maxWidth = t),
							(r.maxHeight = e),
							(r.margins = n),
							r.beforeSetDimensions(),
							r.setDimensions(),
							r.afterSetDimensions(),
							r.beforeBuildLabels(),
							r.buildLabels(),
							r.afterBuildLabels(),
							r.beforeFit(),
							r.fit(),
							r.afterFit(),
							r.afterUpdate(),
							r.minSize
						);
					},
					afterUpdate: Cr,
					beforeSetDimensions: Cr,
					setDimensions: function () {
						var t = this;
						t.isHorizontal()
							? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
							: ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
							(t.paddingLeft = 0),
							(t.paddingTop = 0),
							(t.paddingRight = 0),
							(t.paddingBottom = 0),
							(t.minSize = {width: 0, height: 0});
					},
					afterSetDimensions: Cr,
					beforeBuildLabels: Cr,
					buildLabels: function () {
						var t = this,
							e = t.options.labels || {},
							n = H.callback(e.generateLabels, [t.chart], t) || [];
						e.filter &&
							(n = n.filter(function (n) {
								return e.filter(n, t.chart.data);
							})),
							t.options.reverse && n.reverse(),
							(t.legendItems = n);
					},
					afterBuildLabels: Cr,
					beforeFit: Cr,
					fit: function () {
						var t = this,
							e = t.options,
							n = e.labels,
							r = e.display,
							a = t.ctx,
							i = H.options._parseFont(n),
							o = i.size,
							l = (t.legendHitBoxes = []),
							s = t.minSize,
							u = t.isHorizontal();
						if (
							(u
								? ((s.width = t.maxWidth), (s.height = r ? 10 : 0))
								: ((s.width = r ? 10 : 0), (s.height = t.maxHeight)),
							r)
						) {
							if (((a.font = i.string), u)) {
								var c = (t.lineWidths = [0]),
									d = 0;
								(a.textAlign = 'left'),
									(a.textBaseline = 'middle'),
									H.each(t.legendItems, function (t, e) {
										var r = Pr(n, o) + o / 2 + a.measureText(t.text).width;
										(0 === e ||
											c[c.length - 1] + r + 2 * n.padding > s.width) &&
											((d += o + n.padding),
											(c[c.length - (e > 0 ? 0 : 1)] = 0)),
											(l[e] = {left: 0, top: 0, width: r, height: o}),
											(c[c.length - 1] += r + n.padding);
									}),
									(s.height += d);
							} else {
								var h = n.padding,
									f = (t.columnWidths = []),
									g = (t.columnHeights = []),
									p = n.padding,
									m = 0,
									v = 0;
								H.each(t.legendItems, function (t, e) {
									var r = Pr(n, o) + o / 2 + a.measureText(t.text).width;
									e > 0 &&
										v + o + 2 * h > s.height &&
										((p += m + n.padding),
										f.push(m),
										g.push(v),
										(m = 0),
										(v = 0)),
										(m = Math.max(m, r)),
										(v += o + h),
										(l[e] = {left: 0, top: 0, width: r, height: o});
								}),
									(p += m),
									f.push(m),
									g.push(v),
									(s.width += p);
							}
							(t.width = s.width), (t.height = s.height);
						} else t.width = s.width = t.height = s.height = 0;
					},
					afterFit: Cr,
					isHorizontal: function () {
						return (
							'top' === this.options.position ||
							'bottom' === this.options.position
						);
					},
					draw: function () {
						var t = this,
							e = t.options,
							n = e.labels,
							r = z.global,
							a = r.defaultColor,
							i = r.elements.line,
							o = t.height,
							l = t.columnHeights,
							s = t.width,
							u = t.lineWidths;
						if (e.display) {
							var c,
								d = Mr(e.rtl, t.left, t.minSize.width),
								h = t.ctx,
								f = Sr(n.fontColor, r.defaultFontColor),
								g = H.options._parseFont(n),
								p = g.size;
							(h.textAlign = d.textAlign('left')),
								(h.textBaseline = 'middle'),
								(h.lineWidth = 0.5),
								(h.strokeStyle = f),
								(h.fillStyle = f),
								(h.font = g.string);
							var m = Pr(n, p),
								v = t.legendHitBoxes,
								b = function (t, r) {
									switch (e.align) {
										case 'start':
											return n.padding;
										case 'end':
											return t - r;
										default:
											return (t - r + n.padding) / 2;
									}
								},
								x = t.isHorizontal();
							(c = x
								? {x: t.left + b(s, u[0]), y: t.top + n.padding, line: 0}
								: {x: t.left + n.padding, y: t.top + b(o, l[0]), line: 0}),
								H.rtl.overrideTextDirection(t.ctx, e.textDirection);
							var y = p + n.padding;
							H.each(t.legendItems, function (e, r) {
								var f = h.measureText(e.text).width,
									g = m + p / 2 + f,
									_ = c.x,
									k = c.y;
								d.setWidth(t.minSize.width),
									x
										? r > 0 &&
										  _ + g + n.padding > t.left + t.minSize.width &&
										  ((k = c.y += y),
										  c.line++,
										  (_ = c.x = t.left + b(s, u[c.line])))
										: r > 0 &&
										  k + y > t.top + t.minSize.height &&
										  ((_ = c.x = _ + t.columnWidths[c.line] + n.padding),
										  c.line++,
										  (k = c.y = t.top + b(o, l[c.line])));
								var w = d.x(_);
								(function (t, e, r) {
									if (!(isNaN(m) || m <= 0)) {
										h.save();
										var o = Sr(r.lineWidth, i.borderWidth);
										if (
											((h.fillStyle = Sr(r.fillStyle, a)),
											(h.lineCap = Sr(r.lineCap, i.borderCapStyle)),
											(h.lineDashOffset = Sr(
												r.lineDashOffset,
												i.borderDashOffset
											)),
											(h.lineJoin = Sr(r.lineJoin, i.borderJoinStyle)),
											(h.lineWidth = o),
											(h.strokeStyle = Sr(r.strokeStyle, a)),
											h.setLineDash &&
												h.setLineDash(Sr(r.lineDash, i.borderDash)),
											n && n.usePointStyle)
										) {
											var l = (m * Math.SQRT2) / 2,
												s = d.xPlus(t, m / 2),
												u = e + p / 2;
											H.canvas.drawPoint(h, r.pointStyle, l, s, u, r.rotation);
										} else
											h.fillRect(d.leftForLtr(t, m), e, m, p),
												0 !== o && h.strokeRect(d.leftForLtr(t, m), e, m, p);
										h.restore();
									}
								})(w, k, e),
									(v[r].left = d.leftForLtr(w, v[r].width)),
									(v[r].top = k),
									(function (t, e, n, r) {
										var a = p / 2,
											i = d.xPlus(t, m + a),
											o = e + a;
										h.fillText(n.text, i, o),
											n.hidden &&
												(h.beginPath(),
												(h.lineWidth = 2),
												h.moveTo(i, o),
												h.lineTo(d.xPlus(i, r), o),
												h.stroke());
									})(w, k, e, f),
									x ? (c.x += g + n.padding) : (c.y += y);
							}),
								H.rtl.restoreTextDirection(t.ctx, e.textDirection);
						}
					},
					_getLegendItemAt: function (t, e) {
						var n,
							r,
							a,
							i = this;
						if (t >= i.left && t <= i.right && e >= i.top && e <= i.bottom)
							for (a = i.legendHitBoxes, n = 0; n < a.length; ++n)
								if (
									t >= (r = a[n]).left &&
									t <= r.left + r.width &&
									e >= r.top &&
									e <= r.top + r.height
								)
									return i.legendItems[n];
						return null;
					},
					handleEvent: function (t) {
						var e,
							n = this,
							r = n.options,
							a = 'mouseup' === t.type ? 'click' : t.type;
						if ('mousemove' === a) {
							if (!r.onHover && !r.onLeave) return;
						} else {
							if ('click' !== a) return;
							if (!r.onClick) return;
						}
						(e = n._getLegendItemAt(t.x, t.y)),
							'click' === a
								? e && r.onClick && r.onClick.call(n, t.native, e)
								: (r.onLeave &&
										e !== n._hoveredItem &&
										(n._hoveredItem &&
											r.onLeave.call(n, t.native, n._hoveredItem),
										(n._hoveredItem = e)),
								  r.onHover && e && r.onHover.call(n, t.native, e));
					},
				});
				function Dr(t, e) {
					var n = new Ar({ctx: t.ctx, options: e, chart: t});
					me.configure(t, n, e), me.addBox(t, n), (t.legend = n);
				}
				var Or = {
						id: 'legend',
						_element: Ar,
						beforeInit: function (t) {
							var e = t.options.legend;
							e && Dr(t, e);
						},
						beforeUpdate: function (t) {
							var e = t.options.legend,
								n = t.legend;
							e
								? (H.mergeIf(e, z.global.legend),
								  n ? (me.configure(t, n, e), (n.options = e)) : Dr(t, e))
								: n && (me.removeBox(t, n), delete t.legend);
						},
						afterEvent: function (t, e) {
							var n = t.legend;
							n && n.handleEvent(e);
						},
					},
					Tr = H.noop;
				z._set('global', {
					title: {
						display: !1,
						fontStyle: 'bold',
						fullWidth: !0,
						padding: 10,
						position: 'top',
						text: '',
						weight: 2e3,
					},
				});
				var Ir = G.extend({
					initialize: function (t) {
						H.extend(this, t), (this.legendHitBoxes = []);
					},
					beforeUpdate: Tr,
					update: function (t, e, n) {
						var r = this;
						return (
							r.beforeUpdate(),
							(r.maxWidth = t),
							(r.maxHeight = e),
							(r.margins = n),
							r.beforeSetDimensions(),
							r.setDimensions(),
							r.afterSetDimensions(),
							r.beforeBuildLabels(),
							r.buildLabels(),
							r.afterBuildLabels(),
							r.beforeFit(),
							r.fit(),
							r.afterFit(),
							r.afterUpdate(),
							r.minSize
						);
					},
					afterUpdate: Tr,
					beforeSetDimensions: Tr,
					setDimensions: function () {
						var t = this;
						t.isHorizontal()
							? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
							: ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
							(t.paddingLeft = 0),
							(t.paddingTop = 0),
							(t.paddingRight = 0),
							(t.paddingBottom = 0),
							(t.minSize = {width: 0, height: 0});
					},
					afterSetDimensions: Tr,
					beforeBuildLabels: Tr,
					buildLabels: Tr,
					afterBuildLabels: Tr,
					beforeFit: Tr,
					fit: function () {
						var t,
							e = this,
							n = e.options,
							r = (e.minSize = {}),
							a = e.isHorizontal();
						n.display
							? ((t =
									(H.isArray(n.text) ? n.text.length : 1) *
										H.options._parseFont(n).lineHeight +
									2 * n.padding),
							  (e.width = r.width = a ? e.maxWidth : t),
							  (e.height = r.height = a ? t : e.maxHeight))
							: (e.width = r.width = e.height = r.height = 0);
					},
					afterFit: Tr,
					isHorizontal: function () {
						var t = this.options.position;
						return 'top' === t || 'bottom' === t;
					},
					draw: function () {
						var t = this,
							e = t.ctx,
							n = t.options;
						if (n.display) {
							var r,
								a,
								i,
								o = H.options._parseFont(n),
								l = o.lineHeight,
								s = l / 2 + n.padding,
								u = 0,
								c = t.top,
								d = t.left,
								h = t.bottom,
								f = t.right;
							(e.fillStyle = H.valueOrDefault(
								n.fontColor,
								z.global.defaultFontColor
							)),
								(e.font = o.string),
								t.isHorizontal()
									? ((a = d + (f - d) / 2), (i = c + s), (r = f - d))
									: ((a = 'left' === n.position ? d + s : f - s),
									  (i = c + (h - c) / 2),
									  (r = h - c),
									  (u = Math.PI * ('left' === n.position ? -0.5 : 0.5))),
								e.save(),
								e.translate(a, i),
								e.rotate(u),
								(e.textAlign = 'center'),
								(e.textBaseline = 'middle');
							var g = n.text;
							if (H.isArray(g))
								for (var p = 0, m = 0; m < g.length; ++m)
									e.fillText(g[m], 0, p, r), (p += l);
							else e.fillText(g, 0, 0, r);
							e.restore();
						}
					},
				});
				function Fr(t, e) {
					var n = new Ir({ctx: t.ctx, options: e, chart: t});
					me.configure(t, n, e), me.addBox(t, n), (t.titleBlock = n);
				}
				var Lr = {},
					Er = wr,
					Rr = Or,
					Nr = {
						id: 'title',
						_element: Ir,
						beforeInit: function (t) {
							var e = t.options.title;
							e && Fr(t, e);
						},
						beforeUpdate: function (t) {
							var e = t.options.title,
								n = t.titleBlock;
							e
								? (H.mergeIf(e, z.global.title),
								  n ? (me.configure(t, n, e), (n.options = e)) : Fr(t, e))
								: n && (me.removeBox(t, n), delete t.titleBlock);
						},
					};
				for (var zr in ((Lr.filler = Er),
				(Lr.legend = Rr),
				(Lr.title = Nr),
				(en.helpers = H),
				(function () {
					function t(t, e, n) {
						var r;
						return (
							'string' == typeof t
								? ((r = parseInt(t, 10)),
								  -1 !== t.indexOf('%') && (r = (r / 100) * e.parentNode[n]))
								: (r = t),
							r
						);
					}
					function e(t) {
						return null != t && 'none' !== t;
					}
					function n(n, r, a) {
						var i = document.defaultView,
							o = H._getParentNode(n),
							l = i.getComputedStyle(n)[r],
							s = i.getComputedStyle(o)[r],
							u = e(l),
							c = e(s),
							d = Number.POSITIVE_INFINITY;
						return u || c
							? Math.min(u ? t(l, n, a) : d, c ? t(s, o, a) : d)
							: 'none';
					}
					(H.where = function (t, e) {
						if (H.isArray(t) && Array.prototype.filter) return t.filter(e);
						var n = [];
						return (
							H.each(t, function (t) {
								e(t) && n.push(t);
							}),
							n
						);
					}),
						(H.findIndex = Array.prototype.findIndex
							? function (t, e, n) {
									return t.findIndex(e, n);
							  }
							: function (t, e, n) {
									n = void 0 === n ? t : n;
									for (var r = 0, a = t.length; r < a; ++r)
										if (e.call(n, t[r], r, t)) return r;
									return -1;
							  }),
						(H.findNextWhere = function (t, e, n) {
							H.isNullOrUndef(n) && (n = -1);
							for (var r = n + 1; r < t.length; r++) {
								var a = t[r];
								if (e(a)) return a;
							}
						}),
						(H.findPreviousWhere = function (t, e, n) {
							H.isNullOrUndef(n) && (n = t.length);
							for (var r = n - 1; r >= 0; r--) {
								var a = t[r];
								if (e(a)) return a;
							}
						}),
						(H.isNumber = function (t) {
							return !isNaN(parseFloat(t)) && isFinite(t);
						}),
						(H.almostEquals = function (t, e, n) {
							return Math.abs(t - e) < n;
						}),
						(H.almostWhole = function (t, e) {
							var n = Math.round(t);
							return n - e <= t && n + e >= t;
						}),
						(H.max = function (t) {
							return t.reduce(function (t, e) {
								return isNaN(e) ? t : Math.max(t, e);
							}, Number.NEGATIVE_INFINITY);
						}),
						(H.min = function (t) {
							return t.reduce(function (t, e) {
								return isNaN(e) ? t : Math.min(t, e);
							}, Number.POSITIVE_INFINITY);
						}),
						(H.sign = Math.sign
							? function (t) {
									return Math.sign(t);
							  }
							: function (t) {
									return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
							  }),
						(H.toRadians = function (t) {
							return t * (Math.PI / 180);
						}),
						(H.toDegrees = function (t) {
							return t * (180 / Math.PI);
						}),
						(H._decimalPlaces = function (t) {
							if (H.isFinite(t)) {
								for (var e = 1, n = 0; Math.round(t * e) / e !== t; )
									(e *= 10), n++;
								return n;
							}
						}),
						(H.getAngleFromPoint = function (t, e) {
							var n = e.x - t.x,
								r = e.y - t.y,
								a = Math.sqrt(n * n + r * r),
								i = Math.atan2(r, n);
							return (
								i < -0.5 * Math.PI && (i += 2 * Math.PI),
								{angle: i, distance: a}
							);
						}),
						(H.distanceBetweenPoints = function (t, e) {
							return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
						}),
						(H.aliasPixel = function (t) {
							return t % 2 == 0 ? 0 : 0.5;
						}),
						(H._alignPixel = function (t, e, n) {
							var r = t.currentDevicePixelRatio,
								a = n / 2;
							return Math.round((e - a) * r) / r + a;
						}),
						(H.splineCurve = function (t, e, n, r) {
							var a = t.skip ? e : t,
								i = e,
								o = n.skip ? e : n,
								l = Math.sqrt(Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2)),
								s = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
								u = l / (l + s),
								c = s / (l + s),
								d = r * (u = isNaN(u) ? 0 : u),
								h = r * (c = isNaN(c) ? 0 : c);
							return {
								previous: {x: i.x - d * (o.x - a.x), y: i.y - d * (o.y - a.y)},
								next: {x: i.x + h * (o.x - a.x), y: i.y + h * (o.y - a.y)},
							};
						}),
						(H.EPSILON = Number.EPSILON || 1e-14),
						(H.splineCurveMonotone = function (t) {
							var e,
								n,
								r,
								a,
								i,
								o,
								l,
								s,
								u,
								c = (t || []).map(function (t) {
									return {model: t._model, deltaK: 0, mK: 0};
								}),
								d = c.length;
							for (e = 0; e < d; ++e)
								if (!(r = c[e]).model.skip) {
									if (
										((n = e > 0 ? c[e - 1] : null),
										(a = e < d - 1 ? c[e + 1] : null) && !a.model.skip)
									) {
										var h = a.model.x - r.model.x;
										r.deltaK = 0 !== h ? (a.model.y - r.model.y) / h : 0;
									}
									!n || n.model.skip
										? (r.mK = r.deltaK)
										: !a || a.model.skip
										? (r.mK = n.deltaK)
										: this.sign(n.deltaK) !== this.sign(r.deltaK)
										? (r.mK = 0)
										: (r.mK = (n.deltaK + r.deltaK) / 2);
								}
							for (e = 0; e < d - 1; ++e)
								(r = c[e]),
									(a = c[e + 1]),
									r.model.skip ||
										a.model.skip ||
										(H.almostEquals(r.deltaK, 0, this.EPSILON)
											? (r.mK = a.mK = 0)
											: ((i = r.mK / r.deltaK),
											  (o = a.mK / r.deltaK),
											  (s = Math.pow(i, 2) + Math.pow(o, 2)) <= 9 ||
													((l = 3 / Math.sqrt(s)),
													(r.mK = i * l * r.deltaK),
													(a.mK = o * l * r.deltaK))));
							for (e = 0; e < d; ++e)
								(r = c[e]).model.skip ||
									((n = e > 0 ? c[e - 1] : null),
									(a = e < d - 1 ? c[e + 1] : null),
									n &&
										!n.model.skip &&
										((u = (r.model.x - n.model.x) / 3),
										(r.model.controlPointPreviousX = r.model.x - u),
										(r.model.controlPointPreviousY = r.model.y - u * r.mK)),
									a &&
										!a.model.skip &&
										((u = (a.model.x - r.model.x) / 3),
										(r.model.controlPointNextX = r.model.x + u),
										(r.model.controlPointNextY = r.model.y + u * r.mK)));
						}),
						(H.nextItem = function (t, e, n) {
							return n
								? e >= t.length - 1
									? t[0]
									: t[e + 1]
								: e >= t.length - 1
								? t[t.length - 1]
								: t[e + 1];
						}),
						(H.previousItem = function (t, e, n) {
							return n
								? e <= 0
									? t[t.length - 1]
									: t[e - 1]
								: e <= 0
								? t[0]
								: t[e - 1];
						}),
						(H.niceNum = function (t, e) {
							var n = Math.floor(H.log10(t)),
								r = t / Math.pow(10, n);
							return (
								(e
									? r < 1.5
										? 1
										: r < 3
										? 2
										: r < 7
										? 5
										: 10
									: r <= 1
									? 1
									: r <= 2
									? 2
									: r <= 5
									? 5
									: 10) * Math.pow(10, n)
							);
						}),
						(H.requestAnimFrame =
							'undefined' == typeof window
								? function (t) {
										t();
								  }
								: window.requestAnimationFrame ||
								  window.webkitRequestAnimationFrame ||
								  window.mozRequestAnimationFrame ||
								  window.oRequestAnimationFrame ||
								  window.msRequestAnimationFrame ||
								  function (t) {
										return window.setTimeout(t, 1e3 / 60);
								  }),
						(H.getRelativePosition = function (t, e) {
							var n,
								r,
								a = t.originalEvent || t,
								i = t.target || t.srcElement,
								o = i.getBoundingClientRect(),
								l = a.touches;
							l && l.length > 0
								? ((n = l[0].clientX), (r = l[0].clientY))
								: ((n = a.clientX), (r = a.clientY));
							var s = parseFloat(H.getStyle(i, 'padding-left')),
								u = parseFloat(H.getStyle(i, 'padding-top')),
								c = parseFloat(H.getStyle(i, 'padding-right')),
								d = parseFloat(H.getStyle(i, 'padding-bottom')),
								h = o.right - o.left - s - c,
								f = o.bottom - o.top - u - d;
							return {
								x: (n = Math.round(
									(((n - o.left - s) / h) * i.width) / e.currentDevicePixelRatio
								)),
								y: (r = Math.round(
									(((r - o.top - u) / f) * i.height) / e.currentDevicePixelRatio
								)),
							};
						}),
						(H.getConstraintWidth = function (t) {
							return n(t, 'max-width', 'clientWidth');
						}),
						(H.getConstraintHeight = function (t) {
							return n(t, 'max-height', 'clientHeight');
						}),
						(H._calculatePadding = function (t, e, n) {
							return (e = H.getStyle(t, e)).indexOf('%') > -1
								? (n * parseInt(e, 10)) / 100
								: parseInt(e, 10);
						}),
						(H._getParentNode = function (t) {
							var e = t.parentNode;
							return (
								e && '[object ShadowRoot]' === e.toString() && (e = e.host), e
							);
						}),
						(H.getMaximumWidth = function (t) {
							var e = H._getParentNode(t);
							if (!e) return t.clientWidth;
							var n = e.clientWidth,
								r =
									n -
									H._calculatePadding(e, 'padding-left', n) -
									H._calculatePadding(e, 'padding-right', n),
								a = H.getConstraintWidth(t);
							return isNaN(a) ? r : Math.min(r, a);
						}),
						(H.getMaximumHeight = function (t) {
							var e = H._getParentNode(t);
							if (!e) return t.clientHeight;
							var n = e.clientHeight,
								r =
									n -
									H._calculatePadding(e, 'padding-top', n) -
									H._calculatePadding(e, 'padding-bottom', n),
								a = H.getConstraintHeight(t);
							return isNaN(a) ? r : Math.min(r, a);
						}),
						(H.getStyle = function (t, e) {
							return t.currentStyle
								? t.currentStyle[e]
								: document.defaultView
										.getComputedStyle(t, null)
										.getPropertyValue(e);
						}),
						(H.retinaScale = function (t, e) {
							var n = (t.currentDevicePixelRatio =
								e ||
								('undefined' != typeof window && window.devicePixelRatio) ||
								1);
							if (1 !== n) {
								var r = t.canvas,
									a = t.height,
									i = t.width;
								(r.height = a * n),
									(r.width = i * n),
									t.ctx.scale(n, n),
									r.style.height ||
										r.style.width ||
										((r.style.height = a + 'px'), (r.style.width = i + 'px'));
							}
						}),
						(H.fontString = function (t, e, n) {
							return e + ' ' + t + 'px ' + n;
						}),
						(H.longestText = function (t, e, n, r) {
							var a = ((r = r || {}).data = r.data || {}),
								i = (r.garbageCollect = r.garbageCollect || []);
							r.font !== e &&
								((a = r.data = {}), (i = r.garbageCollect = []), (r.font = e)),
								(t.font = e);
							var o,
								l,
								s,
								u,
								c,
								d = 0,
								h = n.length;
							for (o = 0; o < h; o++)
								if (null != (u = n[o]) && !0 !== H.isArray(u))
									d = H.measureText(t, a, i, d, u);
								else if (H.isArray(u))
									for (l = 0, s = u.length; l < s; l++)
										null == (c = u[l]) ||
											H.isArray(c) ||
											(d = H.measureText(t, a, i, d, c));
							var f = i.length / 2;
							if (f > n.length) {
								for (o = 0; o < f; o++) delete a[i[o]];
								i.splice(0, f);
							}
							return d;
						}),
						(H.measureText = function (t, e, n, r, a) {
							var i = e[a];
							return (
								i || ((i = e[a] = t.measureText(a).width), n.push(a)),
								i > r && (r = i),
								r
							);
						}),
						(H.numberOfLabelLines = function (t) {
							var e = 1;
							return (
								H.each(t, function (t) {
									H.isArray(t) && t.length > e && (e = t.length);
								}),
								e
							);
						}),
						(H.color = k
							? function (t) {
									return (
										t instanceof CanvasGradient && (t = z.global.defaultColor),
										k(t)
									);
							  }
							: function (t) {
									return r.error('Color.js not found!'), t;
							  }),
						(H.getHoverColor = function (t) {
							return t instanceof CanvasPattern || t instanceof CanvasGradient
								? t
								: H.color(t).saturate(0.5).darken(0.1).rgbString();
						});
				})(),
				(en._adapters = an),
				(en.Animation = J),
				(en.animationService = Q),
				(en.controllers = Qt),
				(en.DatasetController = at),
				(en.defaults = z),
				(en.Element = G),
				(en.elements = wt),
				(en.Interaction = oe),
				(en.layouts = me),
				(en.platform = Fe),
				(en.plugins = Le),
				(en.Scale = yn),
				(en.scaleService = Ee),
				(en.Ticks = on),
				(en.Tooltip = Ze),
				en.helpers.each(fr, function (t, e) {
					en.scaleService.registerScaleType(e, t, t._defaults);
				}),
				Lr))
					Lr.hasOwnProperty(zr) && en.plugins.register(Lr[zr]);
				en.platform.initialize();
				var Br = en;
				return (
					'undefined' != typeof window && (window.Chart = en),
					(en.Chart = en),
					(en.Legend = Lr.legend._element),
					(en.Title = Lr.title._element),
					(en.pluginService = en.plugins),
					(en.PluginBase = en.Element.extend({})),
					(en.canvasHelpers = en.helpers.canvas),
					(en.layoutService = en.layouts),
					(en.LinearScaleBase = Sn),
					en.helpers.each(
						[
							'Bar',
							'Bubble',
							'Doughnut',
							'Line',
							'PolarArea',
							'Radar',
							'Scatter',
						],
						function (t) {
							en[t] = function (e, n) {
								return new en(
									e,
									en.helpers.merge(n || {}, {
										type: t.charAt(0).toLowerCase() + t.slice(1),
									})
								);
							};
						}
					),
					Br
				);
			})(
				(function () {
					try {
						return n(30381);
					} catch (t) {}
				})()
			);
		},
		44174: (t) => {
			t.exports = function (t, e, n, r) {
				for (var a = -1, i = null == t ? 0 : t.length; ++a < i; ) {
					var o = t[a];
					e(r, o, n(o), t);
				}
				return r;
			};
		},
		29932: (t) => {
			t.exports = function (t, e) {
				for (var n = -1, r = null == t ? 0 : t.length, a = Array(r); ++n < r; )
					a[n] = e(t[n], n, t);
				return a;
			};
		},
		81119: (t, e, n) => {
			var r = n(89881);
			t.exports = function (t, e, n, a) {
				return (
					r(t, function (t, r, i) {
						e(a, t, n(t), i);
					}),
					a
				);
			};
		},
		89465: (t, e, n) => {
			var r = n(38777);
			t.exports = function (t, e, n) {
				'__proto__' == e && r
					? r(t, e, {configurable: !0, enumerable: !0, value: n, writable: !0})
					: (t[e] = n);
			};
		},
		89881: (t, e, n) => {
			var r = n(47816),
				a = n(99291)(r);
			t.exports = a;
		},
		28483: (t, e, n) => {
			var r = n(25063)();
			t.exports = r;
		},
		47816: (t, e, n) => {
			var r = n(28483),
				a = n(3674);
			t.exports = function (t, e) {
				return t && r(t, e, a);
			};
		},
		97786: (t, e, n) => {
			var r = n(71811),
				a = n(40327);
			t.exports = function (t, e) {
				for (var n = 0, i = (e = r(e, t)).length; null != t && n < i; )
					t = t[a(e[n++])];
				return n && n == i ? t : void 0;
			};
		},
		13: (t) => {
			t.exports = function (t, e) {
				return null != t && e in Object(t);
			};
		},
		2958: (t, e, n) => {
			var r = n(46384),
				a = n(90939);
			t.exports = function (t, e, n, i) {
				var o = n.length,
					l = o,
					s = !i;
				if (null == t) return !l;
				for (t = Object(t); o--; ) {
					var u = n[o];
					if (s && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
				}
				for (; ++o < l; ) {
					var c = (u = n[o])[0],
						d = t[c],
						h = u[1];
					if (s && u[2]) {
						if (void 0 === d && !(c in t)) return !1;
					} else {
						var f = new r();
						if (i) var g = i(d, h, c, t, e, f);
						if (!(void 0 === g ? a(h, d, 3, i, f) : g)) return !1;
					}
				}
				return !0;
			};
		},
		67206: (t, e, n) => {
			var r = n(91573),
				a = n(16432),
				i = n(6557),
				o = n(1469),
				l = n(39601);
			t.exports = function (t) {
				return 'function' == typeof t
					? t
					: null == t
					? i
					: 'object' == typeof t
					? o(t)
						? a(t[0], t[1])
						: r(t)
					: l(t);
			};
		},
		91573: (t, e, n) => {
			var r = n(2958),
				a = n(1499),
				i = n(26366);
			t.exports = function (t) {
				var e = a(t);
				return 1 == e.length && e[0][2]
					? i(e[0][0], e[0][1])
					: function (n) {
							return n === t || r(n, t, e);
					  };
			};
		},
		16432: (t, e, n) => {
			var r = n(90939),
				a = n(27361),
				i = n(79095),
				o = n(15403),
				l = n(89162),
				s = n(26366),
				u = n(40327);
			t.exports = function (t, e) {
				return o(t) && l(e)
					? s(u(t), e)
					: function (n) {
							var o = a(n, t);
							return void 0 === o && o === e ? i(n, t) : r(e, o, 3);
					  };
			};
		},
		40371: (t) => {
			t.exports = function (t) {
				return function (e) {
					return null == e ? void 0 : e[t];
				};
			};
		},
		79152: (t, e, n) => {
			var r = n(97786);
			t.exports = function (t) {
				return function (e) {
					return r(e, t);
				};
			};
		},
		80531: (t, e, n) => {
			var r = n(62705),
				a = n(29932),
				i = n(1469),
				o = n(33448),
				l = r ? r.prototype : void 0,
				s = l ? l.toString : void 0;
			t.exports = function t(e) {
				if ('string' == typeof e) return e;
				if (i(e)) return a(e, t) + '';
				if (o(e)) return s ? s.call(e) : '';
				var n = e + '';
				return '0' == n && 1 / e == -1 / 0 ? '-0' : n;
			};
		},
		71811: (t, e, n) => {
			var r = n(1469),
				a = n(15403),
				i = n(55514),
				o = n(79833);
			t.exports = function (t, e) {
				return r(t) ? t : a(t, e) ? [t] : i(o(t));
			};
		},
		55189: (t, e, n) => {
			var r = n(44174),
				a = n(81119),
				i = n(67206),
				o = n(1469);
			t.exports = function (t, e) {
				return function (n, l) {
					var s = o(n) ? r : a,
						u = e ? e() : {};
					return s(n, t, i(l, 2), u);
				};
			};
		},
		99291: (t, e, n) => {
			var r = n(98612);
			t.exports = function (t, e) {
				return function (n, a) {
					if (null == n) return n;
					if (!r(n)) return t(n, a);
					for (
						var i = n.length, o = e ? i : -1, l = Object(n);
						(e ? o-- : ++o < i) && !1 !== a(l[o], o, l);

					);
					return n;
				};
			};
		},
		25063: (t) => {
			t.exports = function (t) {
				return function (e, n, r) {
					for (var a = -1, i = Object(e), o = r(e), l = o.length; l--; ) {
						var s = o[t ? l : ++a];
						if (!1 === n(i[s], s, i)) break;
					}
					return e;
				};
			};
		},
		38777: (t, e, n) => {
			var r = n(10852),
				a = (function () {
					try {
						var t = r(Object, 'defineProperty');
						return t({}, '', {}), t;
					} catch (t) {}
				})();
			t.exports = a;
		},
		1499: (t, e, n) => {
			var r = n(89162),
				a = n(3674);
			t.exports = function (t) {
				for (var e = a(t), n = e.length; n--; ) {
					var i = e[n],
						o = t[i];
					e[n] = [i, o, r(o)];
				}
				return e;
			};
		},
		222: (t, e, n) => {
			var r = n(71811),
				a = n(35694),
				i = n(1469),
				o = n(65776),
				l = n(41780),
				s = n(40327);
			t.exports = function (t, e, n) {
				for (var u = -1, c = (e = r(e, t)).length, d = !1; ++u < c; ) {
					var h = s(e[u]);
					if (!(d = null != t && n(t, h))) break;
					t = t[h];
				}
				return d || ++u != c
					? d
					: !!(c = null == t ? 0 : t.length) &&
							l(c) &&
							o(h, c) &&
							(i(t) || a(t));
			};
		},
		15403: (t, e, n) => {
			var r = n(1469),
				a = n(33448),
				i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
				o = /^\w*$/;
			t.exports = function (t, e) {
				if (r(t)) return !1;
				var n = typeof t;
				return (
					!(
						'number' != n &&
						'symbol' != n &&
						'boolean' != n &&
						null != t &&
						!a(t)
					) ||
					o.test(t) ||
					!i.test(t) ||
					(null != e && t in Object(e))
				);
			};
		},
		89162: (t, e, n) => {
			var r = n(13218);
			t.exports = function (t) {
				return t == t && !r(t);
			};
		},
		26366: (t) => {
			t.exports = function (t, e) {
				return function (n) {
					return null != n && n[t] === e && (void 0 !== e || t in Object(n));
				};
			};
		},
		24523: (t, e, n) => {
			var r = n(88306);
			t.exports = function (t) {
				var e = r(t, function (t) {
						return 500 === n.size && n.clear(), t;
					}),
					n = e.cache;
				return e;
			};
		},
		55514: (t, e, n) => {
			var r = n(24523),
				a =
					/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
				i = /\\(\\)?/g,
				o = r(function (t) {
					var e = [];
					return (
						46 === t.charCodeAt(0) && e.push(''),
						t.replace(a, function (t, n, r, a) {
							e.push(r ? a.replace(i, '$1') : n || t);
						}),
						e
					);
				});
			t.exports = o;
		},
		40327: (t, e, n) => {
			var r = n(33448);
			t.exports = function (t) {
				if ('string' == typeof t || r(t)) return t;
				var e = t + '';
				return '0' == e && 1 / t == -1 / 0 ? '-0' : e;
			};
		},
		27361: (t, e, n) => {
			var r = n(97786);
			t.exports = function (t, e, n) {
				var a = null == t ? void 0 : r(t, e);
				return void 0 === a ? n : a;
			};
		},
		79095: (t, e, n) => {
			var r = n(13),
				a = n(222);
			t.exports = function (t, e) {
				return null != t && a(t, e, r);
			};
		},
		6557: (t) => {
			t.exports = function (t) {
				return t;
			};
		},
		24350: (t, e, n) => {
			var r = n(89465),
				a = n(55189)(function (t, e, n) {
					r(t, n, e);
				});
			t.exports = a;
		},
		88306: (t, e, n) => {
			var r = n(83369);
			function a(t, e) {
				if ('function' != typeof t || (null != e && 'function' != typeof e))
					throw new TypeError('Expected a function');
				var n = function () {
					var r = arguments,
						a = e ? e.apply(this, r) : r[0],
						i = n.cache;
					if (i.has(a)) return i.get(a);
					var o = t.apply(this, r);
					return (n.cache = i.set(a, o) || i), o;
				};
				return (n.cache = new (a.Cache || r)()), n;
			}
			(a.Cache = r), (t.exports = a);
		},
		39601: (t, e, n) => {
			var r = n(40371),
				a = n(79152),
				i = n(15403),
				o = n(40327);
			t.exports = function (t) {
				return i(t) ? r(o(t)) : a(t);
			};
		},
		79833: (t, e, n) => {
			var r = n(80531);
			t.exports = function (t) {
				return null == t ? '' : r(t);
			};
		},
		46799: (t, e, n) => {
			'use strict';
			var r = n(34155),
				a = n(25108);
			e.x1 = void 0;
			var i = c(n(67294)),
				o = c(n(45697)),
				l = c(n(17757)),
				s = c(n(18446)),
				u = c(n(24350));
			function c(t) {
				return t && t.__esModule ? t : {default: t};
			}
			function d() {
				return (
					(d =
						Object.assign ||
						function (t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = arguments[e];
								for (var r in n)
									Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
							}
							return t;
						}),
					d.apply(this, arguments)
				);
			}
			function h(t) {
				return (
					(h =
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
					h(t)
				);
			}
			function f(t, e) {
				if (null == t) return {};
				var n,
					r,
					a = (function (t, e) {
						if (null == t) return {};
						var n,
							r,
							a = {},
							i = Object.keys(t);
						for (r = 0; r < i.length; r++)
							(n = i[r]), e.indexOf(n) >= 0 || (a[n] = t[n]);
						return a;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					for (r = 0; r < i.length; r++)
						(n = i[r]),
							e.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(t, n) &&
									(a[n] = t[n]));
				}
				return a;
			}
			function g(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e &&
						(r = r.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function p(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? g(Object(n), !0).forEach(function (e) {
								C(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: g(Object(n)).forEach(function (e) {
								Object.defineProperty(
									t,
									e,
									Object.getOwnPropertyDescriptor(n, e)
								);
						  });
				}
				return t;
			}
			function m(t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			}
			function v(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function b(t, e, n) {
				return e && v(t.prototype, e), n && v(t, n), t;
			}
			function x(t, e) {
				if ('function' != typeof e && null !== e)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: {value: t, writable: !0, configurable: !0},
				})),
					e && y(t, e);
			}
			function y(t, e) {
				return (
					(y =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					y(t, e)
				);
			}
			function _(t) {
				var e = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return (
							Date.prototype.toString.call(
								Reflect.construct(Date, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var n,
						r = M(t);
					if (e) {
						var a = M(this).constructor;
						n = Reflect.construct(r, arguments, a);
					} else n = r.apply(this, arguments);
					return k(this, n);
				};
			}
			function k(t, e) {
				return !e || ('object' !== h(e) && 'function' != typeof e) ? w(t) : e;
			}
			function w(t) {
				if (void 0 === t)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return t;
			}
			function M(t) {
				return (
					(M = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					M(t)
				);
			}
			function C(t, e, n) {
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
			var S = void 0 !== r && r.env && 'production',
				P = (function (t) {
					x(n, t);
					var e = _(n);
					function n() {
						var t;
						return (
							m(this, n),
							C(w((t = e.call(this))), 'handleOnClick', function (e) {
								var n = t.chartInstance,
									r = t.props,
									a = r.getDatasetAtEvent,
									i = r.getElementAtEvent,
									o = r.getElementsAtEvent,
									l = r.onElementsClick;
								a && a(n.getDatasetAtEvent(e), e),
									i && i(n.getElementAtEvent(e), e),
									o && o(n.getElementsAtEvent(e), e),
									l && l(n.getElementsAtEvent(e), e);
							}),
							C(w(t), 'ref', function (e) {
								t.element = e;
							}),
							(t.chartInstance = void 0),
							t
						);
					}
					return (
						b(n, [
							{
								key: 'componentDidMount',
								value: function () {
									this.renderChart();
								},
							},
							{
								key: 'componentDidUpdate',
								value: function () {
									if (this.props.redraw)
										return this.destroyChart(), void this.renderChart();
									this.updateChart();
								},
							},
							{
								key: 'shouldComponentUpdate',
								value: function (t) {
									var e = this.props,
										n = (e.redraw, e.type),
										r = e.options,
										a = e.plugins,
										i = e.legend,
										o = e.height,
										l = e.width;
									if (!0 === t.redraw) return !0;
									if (o !== t.height || l !== t.width) return !0;
									if (n !== t.type) return !0;
									if (!(0, s.default)(i, t.legend)) return !0;
									if (!(0, s.default)(r, t.options)) return !0;
									var u = this.transformDataProp(t);
									return (
										!(0, s.default)(this.shadowDataProp, u) ||
										!(0, s.default)(a, t.plugins)
									);
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this.destroyChart();
								},
							},
							{
								key: 'transformDataProp',
								value: function (t) {
									var e = t.data;
									return 'function' == typeof e ? e(this.element) : e;
								},
							},
							{
								key: 'memoizeDataProps',
								value: function () {
									if (this.props.data) {
										var t = this.transformDataProp(this.props);
										return (
											(this.shadowDataProp = p(
												p({}, t),
												{},
												{
													datasets:
														t.datasets &&
														t.datasets.map(function (t) {
															return p({}, t);
														}),
												}
											)),
											this.saveCurrentDatasets(),
											t
										);
									}
								},
							},
							{
								key: 'checkDatasets',
								value: function (t) {
									var e = 'production' !== S && 'prod' !== S,
										r = this.props.datasetKeyProvider !== n.getLabelAsKey,
										i = t.length > 1;
									if (e && i && !r) {
										var o = !1;
										t.forEach(function (t) {
											t.label || (o = !0);
										}),
											o &&
												a.error(
													'[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.'
												);
									}
								},
							},
							{
								key: 'getCurrentDatasets',
								value: function () {
									return (
										(this.chartInstance &&
											this.chartInstance.config.data &&
											this.chartInstance.config.data.datasets) ||
										[]
									);
								},
							},
							{
								key: 'saveCurrentDatasets',
								value: function () {
									var t = this;
									(this.datasets = this.datasets || {}),
										this.getCurrentDatasets().forEach(function (e) {
											t.datasets[t.props.datasetKeyProvider(e)] = e;
										});
								},
							},
							{
								key: 'updateChart',
								value: function () {
									var t = this,
										e = this.props.options,
										n = this.memoizeDataProps(this.props);
									if (this.chartInstance) {
										e &&
											(this.chartInstance.options =
												l.default.helpers.configMerge(
													this.chartInstance.options,
													e
												));
										var r = this.getCurrentDatasets(),
											a = n.datasets || [];
										this.checkDatasets(r);
										var i = (0, u.default)(r, this.props.datasetKeyProvider);
										(this.chartInstance.config.data.datasets = a.map(function (
											e
										) {
											var n = i[t.props.datasetKeyProvider(e)];
											if (n && n.type === e.type && e.data) {
												n.data.splice(e.data.length),
													e.data.forEach(function (t, r) {
														n.data[r] = e.data[r];
													}),
													e.data;
												var r = f(e, ['data']);
												return p(p({}, n), r);
											}
											return e;
										})),
											n.datasets;
										var o = f(n, ['datasets']);
										(this.chartInstance.config.data = p(
											p({}, this.chartInstance.config.data),
											o
										)),
											this.chartInstance.update();
									}
								},
							},
							{
								key: 'renderChart',
								value: function () {
									var t = this.props,
										e = t.options,
										r = t.legend,
										a = t.type,
										i = t.plugins,
										o = this.element,
										u = this.memoizeDataProps();
									void 0 === r ||
										(0, s.default)(n.defaultProps.legend, r) ||
										(e.legend = r),
										(this.chartInstance = new l.default(o, {
											type: a,
											data: u,
											options: e,
											plugins: i,
										}));
								},
							},
							{
								key: 'destroyChart',
								value: function () {
									if (this.chartInstance) {
										this.saveCurrentDatasets();
										var t = Object.values(this.datasets);
										(this.chartInstance.config.data.datasets = t),
											this.chartInstance.destroy();
									}
								},
							},
							{
								key: 'render',
								value: function () {
									var t = this.props,
										e = t.height,
										n = t.width,
										r = t.id;
									return i.default.createElement('canvas', {
										ref: this.ref,
										height: e,
										width: n,
										id: r,
										onClick: this.handleOnClick,
									});
								},
							},
						]),
						n
					);
				})(i.default.Component);
			C(P, 'getLabelAsKey', function (t) {
				return t.label;
			}),
				C(P, 'propTypes', {
					data: o.default.oneOfType([o.default.object, o.default.func])
						.isRequired,
					getDatasetAtEvent: o.default.func,
					getElementAtEvent: o.default.func,
					getElementsAtEvent: o.default.func,
					height: o.default.number,
					legend: o.default.object,
					onElementsClick: o.default.func,
					options: o.default.object,
					plugins: o.default.arrayOf(o.default.object),
					redraw: o.default.bool,
					type: function (t, e, n) {
						if (!l.default.controllers[t[e]])
							return new Error(
								'Invalid chart type `' + t[e] + '` supplied to `' + n + '`.'
							);
					},
					width: o.default.number,
					datasetKeyProvider: o.default.func,
				}),
				C(P, 'defaultProps', {
					legend: {display: !0, position: 'bottom'},
					type: 'doughnut',
					height: 150,
					width: 300,
					redraw: !1,
					options: {},
					datasetKeyProvider: P.getLabelAsKey,
				}),
				i.default.Component,
				i.default.Component;
			var A = (function (t) {
				x(n, t);
				var e = _(n);
				function n() {
					return m(this, n), e.apply(this, arguments);
				}
				return (
					b(n, [
						{
							key: 'render',
							value: function () {
								var t = this;
								return i.default.createElement(
									P,
									d({}, this.props, {
										ref: function (e) {
											return (t.chartInstance = e && e.chartInstance);
										},
										type: 'line',
									})
								);
							},
						},
					]),
					n
				);
			})(i.default.Component);
			(e.x1 = A),
				i.default.Component,
				i.default.Component,
				i.default.Component,
				i.default.Component,
				i.default.Component,
				i.default.Component,
				l.default.defaults;
		},
		53355: (t, e, n) => {
			'use strict';
			n.d(e, {Z: () => i});
			var r = n(47855),
				a = n(99651);
			const i = function (t, e, n) {
				var i = null == t ? 0 : t.length;
				return i
					? ((e = i - (e = n || void 0 === e ? 1 : (0, a.Z)(e))),
					  (0, r.Z)(t, e < 0 ? 0 : e, i))
					: [];
			};
		},
	},
]);
