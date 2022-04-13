/*! For license information please see 326.ac4bf0c80d26c88ec009.js.LICENSE.txt */
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[326],
	{
		27326: (t, e, n) => {
			var r,
				i,
				o = n(25108);
			(r = function () {
				'use strict';
				function r(t) {
					return (r =
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
							  })(t);
				}
				!(function (t) {
					if ('object' !== r(t.console)) {
						t.console = {};
						for (
							var e,
								n,
								i = t.console,
								o = function () {},
								a = ['memory'],
								s =
									'assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'.split(
										','
									);
							(e = a.pop());

						)
							i[e] || (i[e] = {});
						for (; (n = s.pop()); ) i[n] || (i[n] = o);
					}
					var h,
						u,
						l,
						c,
						f =
							'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
					void 0 === t.btoa &&
						(t.btoa = function (t) {
							var e,
								n,
								r,
								i,
								o,
								a = 0,
								s = 0,
								h = '',
								u = [];
							if (!t) return t;
							for (
								;
								(e =
									((o =
										(t.charCodeAt(a++) << 16) |
										(t.charCodeAt(a++) << 8) |
										t.charCodeAt(a++)) >>
										18) &
									63),
									(n = (o >> 12) & 63),
									(r = (o >> 6) & 63),
									(i = 63 & o),
									(u[s++] =
										f.charAt(e) + f.charAt(n) + f.charAt(r) + f.charAt(i)),
									a < t.length;

							);
							h = u.join('');
							var l = t.length % 3;
							return (l ? h.slice(0, l - 3) : h) + '==='.slice(l || 3);
						}),
						void 0 === t.atob &&
							(t.atob = function (t) {
								var e,
									n,
									r,
									i,
									o,
									a,
									s = 0,
									h = 0,
									u = [];
								if (!t) return t;
								for (
									t += '';
									(e =
										((a =
											(f.indexOf(t.charAt(s++)) << 18) |
											(f.indexOf(t.charAt(s++)) << 12) |
											((i = f.indexOf(t.charAt(s++))) << 6) |
											(o = f.indexOf(t.charAt(s++)))) >>
											16) &
										255),
										(n = (a >> 8) & 255),
										(r = 255 & a),
										(u[h++] =
											64 == i
												? String.fromCharCode(e)
												: 64 == o
												? String.fromCharCode(e, n)
												: String.fromCharCode(e, n, r)),
										s < t.length;

								);
								return u.join('');
							}),
						Array.prototype.map ||
							(Array.prototype.map = function (t) {
								if (null == this || 'function' != typeof t)
									throw new TypeError();
								for (
									var e = Object(this),
										n = e.length >>> 0,
										r = new Array(n),
										i = 1 < arguments.length ? arguments[1] : void 0,
										o = 0;
									o < n;
									o++
								)
									o in e && (r[o] = t.call(i, e[o], o, e));
								return r;
							}),
						Array.isArray ||
							(Array.isArray = function (t) {
								return '[object Array]' === Object.prototype.toString.call(t);
							}),
						Array.prototype.forEach ||
							(Array.prototype.forEach = function (t, e) {
								if (null == this || 'function' != typeof t)
									throw new TypeError();
								for (
									var n = Object(this), r = n.length >>> 0, i = 0;
									i < r;
									i++
								)
									i in n && t.call(e, n[i], i, n);
							}),
						Array.prototype.find ||
							Object.defineProperty(Array.prototype, 'find', {
								value: function (t) {
									if (null == this)
										throw new TypeError('"this" is null or not defined');
									var e = Object(this),
										n = e.length >>> 0;
									if ('function' != typeof t)
										throw new TypeError('predicate must be a function');
									for (var r = arguments[1], i = 0; i < n; ) {
										var o = e[i];
										if (t.call(r, o, i, e)) return o;
										i++;
									}
								},
								configurable: !0,
								writable: !0,
							}),
						Object.keys ||
							(Object.keys =
								((h = Object.prototype.hasOwnProperty),
								(u = !{toString: null}.propertyIsEnumerable('toString')),
								(c = (l = [
									'toString',
									'toLocaleString',
									'valueOf',
									'hasOwnProperty',
									'isPrototypeOf',
									'propertyIsEnumerable',
									'constructor',
								]).length),
								function (t) {
									if (
										'object' !== r(t) &&
										('function' != typeof t || null === t)
									)
										throw new TypeError();
									var e,
										n,
										i = [];
									for (e in t) h.call(t, e) && i.push(e);
									if (u)
										for (n = 0; n < c; n++) h.call(t, l[n]) && i.push(l[n]);
									return i;
								})),
						'function' != typeof Object.assign &&
							(Object.assign = function (t) {
								if (null == t)
									throw new TypeError(
										'Cannot convert undefined or null to object'
									);
								t = Object(t);
								for (var e = 1; e < arguments.length; e++) {
									var n = arguments[e];
									if (null != n)
										for (var r in n)
											Object.prototype.hasOwnProperty.call(n, r) &&
												(t[r] = n[r]);
								}
								return t;
							}),
						String.prototype.trim ||
							(String.prototype.trim = function () {
								return this.replace(/^\s+|\s+$/g, '');
							}),
						String.prototype.trimLeft ||
							(String.prototype.trimLeft = function () {
								return this.replace(/^\s+/g, '');
							}),
						String.prototype.trimRight ||
							(String.prototype.trimRight = function () {
								return this.replace(/\s+$/g, '');
							}),
						(Number.isInteger =
							Number.isInteger ||
							function (t) {
								return (
									'number' == typeof t && isFinite(t) && Math.floor(t) === t
								);
							});
				})(
					('undefined' != typeof self && self) ||
						('undefined' != typeof window && window) ||
						(void 0 !== n.g && n.g) ||
						Function('return typeof this === "object" && this.content')() ||
						Function('return this')()
				);
				var a,
					s,
					h,
					u,
					l,
					c,
					f,
					p,
					d,
					g,
					m,
					y,
					v,
					w,
					b,
					x,
					N,
					L,
					A,
					S,
					_,
					F,
					P,
					k,
					I,
					C,
					B,
					j,
					E,
					M,
					O,
					q,
					T,
					R,
					D,
					U,
					z,
					H,
					W,
					V,
					G,
					Y,
					J,
					X,
					K,
					Z,
					Q,
					$,
					tt,
					et,
					nt,
					rt,
					it,
					ot,
					at,
					st,
					ht,
					ut,
					lt,
					ct,
					ft,
					pt,
					dt = (function (a) {
						function s(t) {
							if ('object' !== r(t))
								throw new Error(
									'Invalid Context passed to initialize PubSub (jsPDF-module)'
								);
							var e = {};
							(this.subscribe = function (t, n, r) {
								if (
									((r = r || !1),
									'string' != typeof t ||
										'function' != typeof n ||
										'boolean' != typeof r)
								)
									throw new Error(
										'Invalid arguments passed to PubSub.subscribe (jsPDF-module)'
									);
								e.hasOwnProperty(t) || (e[t] = {});
								var i = Math.random().toString(35);
								return (e[t][i] = [n, !!r]), i;
							}),
								(this.unsubscribe = function (t) {
									for (var n in e)
										if (e[n][t])
											return (
												delete e[n][t],
												0 === Object.keys(e[n]).length && delete e[n],
												!0
											);
									return !1;
								}),
								(this.publish = function (n) {
									if (e.hasOwnProperty(n)) {
										var r = Array.prototype.slice.call(arguments, 1),
											i = [];
										for (var s in e[n]) {
											var h = e[n][s];
											try {
												h[0].apply(t, r);
											} catch (n) {
												a.console &&
													o.error('jsPDF PubSub Error', n.message, n);
											}
											h[1] && i.push(s);
										}
										i.length && i.forEach(this.unsubscribe);
									}
								}),
								(this.getTopics = function () {
									return e;
								});
						}
						function h(t, e, n, i) {
							var u = {},
								l = [],
								c = 1;
							'object' === r(t) &&
								((t = (u = t).orientation),
								(e = u.unit || e),
								(n = u.format || n),
								(i = u.compress || u.compressPdf || i),
								(l = u.filters || (!0 === i ? ['FlateEncode'] : l)),
								(c = 'number' == typeof u.userUnit ? Math.abs(u.userUnit) : 1)),
								(e = e || 'mm'),
								(t = ('' + (t || 'P')).toLowerCase());
							var f = u.putOnlyUsedFonts || !0,
								p = {},
								d = {internal: {}, __private__: {}};
							d.__private__.PubSub = s;
							var g = '1.3',
								m = (d.__private__.getPdfVersion = function () {
									return g;
								}),
								y =
									((d.__private__.setPdfVersion = function (t) {
										g = t;
									}),
									{
										a0: [2383.94, 3370.39],
										a1: [1683.78, 2383.94],
										a2: [1190.55, 1683.78],
										a3: [841.89, 1190.55],
										a4: [595.28, 841.89],
										a5: [419.53, 595.28],
										a6: [297.64, 419.53],
										a7: [209.76, 297.64],
										a8: [147.4, 209.76],
										a9: [104.88, 147.4],
										a10: [73.7, 104.88],
										b0: [2834.65, 4008.19],
										b1: [2004.09, 2834.65],
										b2: [1417.32, 2004.09],
										b3: [1000.63, 1417.32],
										b4: [708.66, 1000.63],
										b5: [498.9, 708.66],
										b6: [354.33, 498.9],
										b7: [249.45, 354.33],
										b8: [175.75, 249.45],
										b9: [124.72, 175.75],
										b10: [87.87, 124.72],
										c0: [2599.37, 3676.54],
										c1: [1836.85, 2599.37],
										c2: [1298.27, 1836.85],
										c3: [918.43, 1298.27],
										c4: [649.13, 918.43],
										c5: [459.21, 649.13],
										c6: [323.15, 459.21],
										c7: [229.61, 323.15],
										c8: [161.57, 229.61],
										c9: [113.39, 161.57],
										c10: [79.37, 113.39],
										dl: [311.81, 623.62],
										letter: [612, 792],
										'government-letter': [576, 756],
										legal: [612, 1008],
										'junior-legal': [576, 360],
										ledger: [1224, 792],
										tabloid: [792, 1224],
										'credit-card': [153, 243],
									}),
								v =
									((d.__private__.getPageFormats = function () {
										return y;
									}),
									(d.__private__.getPageFormat = function (t) {
										return y[t];
									}));
							'string' == typeof n && (n = v(n)), (n = n || v('a4'));
							var w,
								b =
									(d.f2 =
									d.__private__.f2 =
										function (t) {
											if (isNaN(t))
												throw new Error('Invalid argument passed to jsPDF.f2');
											return t.toFixed(2);
										}),
								x = (d.__private__.f3 = function (t) {
									if (isNaN(t))
										throw new Error('Invalid argument passed to jsPDF.f3');
									return t.toFixed(3);
								}),
								N = '00000000000000000000000000000000',
								L = (d.__private__.getFileId = function () {
									return N;
								}),
								A = (d.__private__.setFileId = function (t) {
									return (
										(t =
											t ||
											'12345678901234567890123456789012'
												.split('')
												.map(function () {
													return 'ABCDEF0123456789'.charAt(
														Math.floor(16 * Math.random())
													);
												})
												.join('')),
										(N = t)
									);
								});
							(d.setFileId = function (t) {
								return A(t), this;
							}),
								(d.getFileId = function () {
									return L();
								});
							var S = (d.__private__.convertDateToPDFDate = function (t) {
									var e = t.getTimezoneOffset(),
										n = e < 0 ? '+' : '-',
										r = Math.floor(Math.abs(e / 60)),
										i = Math.abs(e % 60),
										o = [n, q(r), "'", q(i), "'"].join('');
									return [
										'D:',
										t.getFullYear(),
										q(t.getMonth() + 1),
										q(t.getDate()),
										q(t.getHours()),
										q(t.getMinutes()),
										q(t.getSeconds()),
										o,
									].join('');
								}),
								_ = (d.__private__.convertPDFDateToDate = function (t) {
									var e = parseInt(t.substr(2, 4), 10),
										n = parseInt(t.substr(6, 2), 10) - 1,
										r = parseInt(t.substr(8, 2), 10),
										i = parseInt(t.substr(10, 2), 10),
										o = parseInt(t.substr(12, 2), 10),
										a = parseInt(t.substr(14, 2), 10);
									return (
										parseInt(t.substr(16, 2), 10),
										parseInt(t.substr(20, 2), 10),
										new Date(e, n, r, i, o, a, 0)
									);
								}),
								F = (d.__private__.setCreationDate = function (t) {
									var e;
									if (
										(void 0 === t && (t = new Date()),
										'object' === r(t) &&
											'[object Date]' === Object.prototype.toString.call(t))
									)
										e = S(t);
									else {
										if (
											!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(
												t
											)
										)
											throw new Error(
												'Invalid argument passed to jsPDF.setCreationDate'
											);
										e = t;
									}
									return (w = e);
								}),
								P = (d.__private__.getCreationDate = function (t) {
									var e = w;
									return 'jsDate' === t && (e = _(w)), e;
								});
							(d.setCreationDate = function (t) {
								return F(t), this;
							}),
								(d.getCreationDate = function (t) {
									return P(t);
								});
							var k,
								I,
								C,
								B,
								j,
								E,
								M,
								O,
								q = (d.__private__.padd2 = function (t) {
									return ('0' + parseInt(t)).slice(-2);
								}),
								T = !1,
								R = [],
								D = [],
								U = 0,
								z =
									((d.__private__.setCustomOutputDestination = function (t) {
										I = t;
									}),
									(d.__private__.resetCustomOutputDestination = function (t) {
										I = void 0;
									}),
									(d.__private__.out = function (t) {
										var e;
										return (
											(t = 'string' == typeof t ? t : t.toString()),
											(e = void 0 === I ? (T ? R[k] : D) : I).push(t),
											T || (U += t.length + 1),
											e
										);
									})),
								H = (d.__private__.write = function (t) {
									return z(
										1 === arguments.length
											? t.toString()
											: Array.prototype.join.call(arguments, ' ')
									);
								}),
								W = (d.__private__.getArrayBuffer = function (t) {
									for (
										var e = t.length,
											n = new ArrayBuffer(e),
											r = new Uint8Array(n);
										e--;

									)
										r[e] = t.charCodeAt(e);
									return n;
								}),
								V = [
									['Helvetica', 'helvetica', 'normal', 'WinAnsiEncoding'],
									['Helvetica-Bold', 'helvetica', 'bold', 'WinAnsiEncoding'],
									[
										'Helvetica-Oblique',
										'helvetica',
										'italic',
										'WinAnsiEncoding',
									],
									[
										'Helvetica-BoldOblique',
										'helvetica',
										'bolditalic',
										'WinAnsiEncoding',
									],
									['Courier', 'courier', 'normal', 'WinAnsiEncoding'],
									['Courier-Bold', 'courier', 'bold', 'WinAnsiEncoding'],
									['Courier-Oblique', 'courier', 'italic', 'WinAnsiEncoding'],
									[
										'Courier-BoldOblique',
										'courier',
										'bolditalic',
										'WinAnsiEncoding',
									],
									['Times-Roman', 'times', 'normal', 'WinAnsiEncoding'],
									['Times-Bold', 'times', 'bold', 'WinAnsiEncoding'],
									['Times-Italic', 'times', 'italic', 'WinAnsiEncoding'],
									[
										'Times-BoldItalic',
										'times',
										'bolditalic',
										'WinAnsiEncoding',
									],
									['ZapfDingbats', 'zapfdingbats', 'normal', null],
									['Symbol', 'symbol', 'normal', null],
								],
								G =
									((d.__private__.getStandardFonts = function (t) {
										return V;
									}),
									u.fontSize || 16),
								Y =
									((d.__private__.setFontSize = d.setFontSize =
										function (t) {
											return (G = t), this;
										}),
									(d.__private__.getFontSize = d.getFontSize =
										function () {
											return G;
										})),
								J = u.R2L || !1,
								X =
									((d.__private__.setR2L = d.setR2L =
										function (t) {
											return (J = t), this;
										}),
									(d.__private__.getR2L = d.getR2L =
										function (t) {
											return J;
										}),
									(d.__private__.setZoomMode = function (t) {
										if (/^\d*\.?\d*\%$/.test(t)) C = t;
										else if (isNaN(t)) {
											if (
												-1 ===
												[
													void 0,
													null,
													'fullwidth',
													'fullheight',
													'fullpage',
													'original',
												].indexOf(t)
											)
												throw new Error(
													'zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' +
														t +
														'" is not recognized.'
												);
											C = t;
										} else C = parseInt(t, 10);
									})),
								K =
									((d.__private__.getZoomMode = function () {
										return C;
									}),
									(d.__private__.setPageMode = function (t) {
										if (
											-1 ==
											[
												void 0,
												null,
												'UseNone',
												'UseOutlines',
												'UseThumbs',
												'FullScreen',
											].indexOf(t)
										)
											throw new Error(
												'Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' +
													t +
													'" is not recognized.'
											);
										B = t;
									})),
								Z =
									((d.__private__.getPageMode = function () {
										return B;
									}),
									(d.__private__.setLayoutMode = function (t) {
										if (
											-1 ==
											[
												void 0,
												null,
												'continuous',
												'single',
												'twoleft',
												'tworight',
												'two',
											].indexOf(t)
										)
											throw new Error(
												'Layout mode must be one of continuous, single, twoleft, tworight. "' +
													t +
													'" is not recognized.'
											);
										j = t;
									})),
								Q =
									((d.__private__.getLayoutMode = function () {
										return j;
									}),
									(d.__private__.setDisplayMode = d.setDisplayMode =
										function (t, e, n) {
											return X(t), Z(e), K(n), this;
										}),
									{
										title: '',
										subject: '',
										author: '',
										keywords: '',
										creator: '',
									}),
								$ =
									((d.__private__.getDocumentProperty = function (t) {
										if (-1 === Object.keys(Q).indexOf(t))
											throw new Error(
												'Invalid argument passed to jsPDF.getDocumentProperty'
											);
										return Q[t];
									}),
									(d.__private__.getDocumentProperties = function (t) {
										return Q;
									}),
									(d.__private__.setDocumentProperties =
										d.setProperties =
										d.setDocumentProperties =
											function (t) {
												for (var e in Q)
													Q.hasOwnProperty(e) && t[e] && (Q[e] = t[e]);
												return this;
											}),
									(d.__private__.setDocumentProperty = function (t, e) {
										if (-1 === Object.keys(Q).indexOf(t))
											throw new Error(
												'Invalid arguments passed to jsPDF.setDocumentProperty'
											);
										return (Q[t] = e);
									}),
									0),
								tt = [],
								et = {},
								nt = {},
								rt = 0,
								it = [],
								ot = [],
								at = new s(d),
								st = u.hotfixes || [],
								ht = (d.__private__.newObject = function () {
									var t = ut();
									return lt(t, !0), t;
								}),
								ut = (d.__private__.newObjectDeferred = function () {
									return (
										(tt[++$] = function () {
											return U;
										}),
										$
									);
								}),
								lt = function (t, e) {
									return (
										(e = 'boolean' == typeof e && e),
										(tt[t] = U),
										e && z(t + ' 0 obj'),
										t
									);
								},
								ct = (d.__private__.newAdditionalObject = function () {
									var t = {objId: ut(), content: ''};
									return ot.push(t), t;
								}),
								ft = ut(),
								pt = ut(),
								dt = (d.__private__.decodeColorString = function (t) {
									var e = t.split(' ');
									if (2 === e.length && ('g' === e[1] || 'G' === e[1])) {
										var n = parseFloat(e[0]);
										e = [n, n, n, 'r'];
									}
									for (var r = '#', i = 0; i < 3; i++)
										r += (
											'0' + Math.floor(255 * parseFloat(e[i])).toString(16)
										).slice(-2);
									return r;
								}),
								gt = (d.__private__.encodeColorString = function (t) {
									var e;
									'string' == typeof t && (t = {ch1: t});
									var n = t.ch1,
										i = t.ch2,
										o = t.ch3,
										a = t.ch4,
										s =
											(t.precision,
											'draw' === t.pdfColorType
												? ['G', 'RG', 'K']
												: ['g', 'rg', 'k']);
									if ('string' == typeof n && '#' !== n.charAt(0)) {
										var h = new RGBColor(n);
										if (h.ok) n = h.toHex();
										else if (!/^\d*\.?\d*$/.test(n))
											throw new Error(
												'Invalid color "' +
													n +
													'" passed to jsPDF.encodeColorString.'
											);
									}
									if (
										('string' == typeof n &&
											/^#[0-9A-Fa-f]{3}$/.test(n) &&
											(n = '#' + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]),
										'string' == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n))
									) {
										var u = parseInt(n.substr(1), 16);
										(n = (u >> 16) & 255), (i = (u >> 8) & 255), (o = 255 & u);
									}
									if (void 0 === i || (void 0 === a && n === i && i === o))
										e =
											'string' == typeof n
												? n + ' ' + s[0]
												: 2 === t.precision
												? b(n / 255) + ' ' + s[0]
												: x(n / 255) + ' ' + s[0];
									else if (void 0 === a || 'object' === r(a)) {
										if (a && !isNaN(a.a) && 0 === a.a)
											return ['1.000', '1.000', '1.000', s[1]].join(' ');
										e =
											'string' == typeof n
												? [n, i, o, s[1]].join(' ')
												: 2 === t.precision
												? [b(n / 255), b(i / 255), b(o / 255), s[1]].join(' ')
												: [x(n / 255), x(i / 255), x(o / 255), s[1]].join(' ');
									} else
										e =
											'string' == typeof n
												? [n, i, o, a, s[2]].join(' ')
												: 2 === t.precision
												? [
														b(n / 255),
														b(i / 255),
														b(o / 255),
														b(a / 255),
														s[2],
												  ].join(' ')
												: [
														x(n / 255),
														x(i / 255),
														x(o / 255),
														x(a / 255),
														s[2],
												  ].join(' ');
									return e;
								}),
								mt = (d.__private__.getFilters = function () {
									return l;
								}),
								yt = (d.__private__.putStream = function (t) {
									var e,
										n = (t = t || {}).data || '',
										r = t.filters || mt(),
										i = t.alreadyAppliedFilters || [],
										o = t.addLength1 || !1,
										a = n.length;
									!0 === r && (r = ['FlateEncode']);
									var s = t.additionalKeyValues || [],
										u =
											(e =
												void 0 !== h.API.processDataByFilters
													? h.API.processDataByFilters(n, r)
													: {data: n, reverseChain: []}).reverseChain +
											(Array.isArray(i) ? i.join(' ') : i.toString());
									0 !== e.data.length &&
										(s.push({key: 'Length', value: e.data.length}),
										!0 === o && s.push({key: 'Length1', value: a})),
										0 != u.length &&
											(u.split('/').length - 1 == 1
												? s.push({key: 'Filter', value: u})
												: s.push({key: 'Filter', value: '[' + u + ']'})),
										z('<<');
									for (var l = 0; l < s.length; l++)
										z('/' + s[l].key + ' ' + s[l].value);
									z('>>'),
										0 !== e.data.length &&
											(z('stream'), z(e.data), z('endstream'));
								}),
								vt = (d.__private__.putPage = function (t) {
									t.mediaBox;
									var e = t.number,
										n = t.data,
										r = t.objId,
										i = t.contentsObjId;
									lt(r, !0),
										it[k].mediaBox.topRightX,
										it[k].mediaBox.bottomLeftX,
										it[k].mediaBox.topRightY,
										it[k].mediaBox.bottomLeftY,
										z('<</Type /Page'),
										z('/Parent ' + t.rootDictionaryObjId + ' 0 R'),
										z('/Resources ' + t.resourceDictionaryObjId + ' 0 R'),
										z(
											'/MediaBox [' +
												parseFloat(b(t.mediaBox.bottomLeftX)) +
												' ' +
												parseFloat(b(t.mediaBox.bottomLeftY)) +
												' ' +
												b(t.mediaBox.topRightX) +
												' ' +
												b(t.mediaBox.topRightY) +
												']'
										),
										null !== t.cropBox &&
											z(
												'/CropBox [' +
													b(t.cropBox.bottomLeftX) +
													' ' +
													b(t.cropBox.bottomLeftY) +
													' ' +
													b(t.cropBox.topRightX) +
													' ' +
													b(t.cropBox.topRightY) +
													']'
											),
										null !== t.bleedBox &&
											z(
												'/BleedBox [' +
													b(t.bleedBox.bottomLeftX) +
													' ' +
													b(t.bleedBox.bottomLeftY) +
													' ' +
													b(t.bleedBox.topRightX) +
													' ' +
													b(t.bleedBox.topRightY) +
													']'
											),
										null !== t.trimBox &&
											z(
												'/TrimBox [' +
													b(t.trimBox.bottomLeftX) +
													' ' +
													b(t.trimBox.bottomLeftY) +
													' ' +
													b(t.trimBox.topRightX) +
													' ' +
													b(t.trimBox.topRightY) +
													']'
											),
										null !== t.artBox &&
											z(
												'/ArtBox [' +
													b(t.artBox.bottomLeftX) +
													' ' +
													b(t.artBox.bottomLeftY) +
													' ' +
													b(t.artBox.topRightX) +
													' ' +
													b(t.artBox.topRightY) +
													']'
											),
										'number' == typeof t.userUnit &&
											1 !== t.userUnit &&
											z('/UserUnit ' + t.userUnit),
										at.publish('putPage', {
											objId: r,
											pageContext: it[e],
											pageNumber: e,
											page: n,
										}),
										z('/Contents ' + i + ' 0 R'),
										z('>>'),
										z('endobj');
									var o = n.join('\n');
									return (
										lt(i, !0), yt({data: o, filters: mt()}), z('endobj'), r
									);
								}),
								wt = (d.__private__.putPages = function () {
									var t,
										e,
										n = [];
									for (t = 1; t <= rt; t++)
										(it[t].objId = ut()), (it[t].contentsObjId = ut());
									for (t = 1; t <= rt; t++)
										n.push(
											vt({
												number: t,
												data: R[t],
												objId: it[t].objId,
												contentsObjId: it[t].contentsObjId,
												mediaBox: it[t].mediaBox,
												cropBox: it[t].cropBox,
												bleedBox: it[t].bleedBox,
												trimBox: it[t].trimBox,
												artBox: it[t].artBox,
												userUnit: it[t].userUnit,
												rootDictionaryObjId: ft,
												resourceDictionaryObjId: pt,
											})
										);
									lt(ft, !0), z('<</Type /Pages');
									var r = '/Kids [';
									for (e = 0; e < rt; e++) r += n[e] + ' 0 R ';
									z(r + ']'),
										z('/Count ' + rt),
										z('>>'),
										z('endobj'),
										at.publish('postPutPages');
								}),
								bt = function (t, e, n) {
									nt.hasOwnProperty(e) || (nt[e] = {}), (nt[e][n] = t);
								},
								xt = function (t, e, n, r, i) {
									i = i || !1;
									var o = 'F' + (Object.keys(et).length + 1).toString(10),
										a = {
											id: o,
											postScriptName: t,
											fontName: e,
											fontStyle: n,
											encoding: r,
											isStandardFont: i,
											metadata: {},
										};
									return (
										at.publish('addFont', {font: a, instance: this}),
										void 0 !== o && ((et[o] = a), bt(o, e, n)),
										o
									);
								},
								Nt =
									(d.__private__.pdfEscape =
									d.pdfEscape =
										function (t, e) {
											return (function (t, e) {
												var n, r, i, o, a, s, h, u, l;
												if (
													((i = (e = e || {}).sourceEncoding || 'Unicode'),
													(a = e.outputEncoding),
													(e.autoencode || a) &&
														et[E].metadata &&
														et[E].metadata[i] &&
														et[E].metadata[i].encoding &&
														((o = et[E].metadata[i].encoding),
														!a && et[E].encoding && (a = et[E].encoding),
														!a && o.codePages && (a = o.codePages[0]),
														'string' == typeof a && (a = o[a]),
														a))
												) {
													for (h = !1, s = [], n = 0, r = t.length; n < r; n++)
														(u = a[t.charCodeAt(n)])
															? s.push(String.fromCharCode(u))
															: s.push(t[n]),
															s[n].charCodeAt(0) >> 8 && (h = !0);
													t = s.join('');
												}
												for (n = t.length; void 0 === h && 0 !== n; )
													t.charCodeAt(n - 1) >> 8 && (h = !0), n--;
												if (!h) return t;
												for (
													s = e.noBOM ? [] : [254, 255], n = 0, r = t.length;
													n < r;
													n++
												) {
													if ((l = (u = t.charCodeAt(n)) >> 8) >> 8)
														throw new Error(
															'Character at position ' +
																n +
																" of string '" +
																t +
																"' exceeds 16bits. Cannot be encoded into UCS-2 BE"
														);
													s.push(l), s.push(u - (l << 8));
												}
												return String.fromCharCode.apply(void 0, s);
											})(t, e)
												.replace(/\\/g, '\\\\')
												.replace(/\(/g, '\\(')
												.replace(/\)/g, '\\)');
										}),
								Lt = (d.__private__.beginPage = function (t, e) {
									var r,
										i = 'string' == typeof e && e.toLowerCase();
									if (
										('string' == typeof t &&
											(r = v(t.toLowerCase())) &&
											((t = r[0]), (e = r[1])),
										Array.isArray(t) && ((e = t[1]), (t = t[0])),
										(isNaN(t) || isNaN(e)) && ((t = n[0]), (e = n[1])),
										i)
									) {
										switch (i.substr(0, 1)) {
											case 'l':
												t < e && (i = 's');
												break;
											case 'p':
												e < t && (i = 's');
										}
										's' === i && ((r = t), (t = e), (e = r));
									}
									(14400 < t || 14400 < e) &&
										(o.warn(
											'A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400'
										),
										(t = Math.min(14400, t)),
										(e = Math.min(14400, e))),
										(n = [t, e]),
										(T = !0),
										(R[++rt] = []),
										(it[rt] = {
											objId: 0,
											contentsObjId: 0,
											userUnit: Number(c),
											artBox: null,
											bleedBox: null,
											cropBox: null,
											trimBox: null,
											mediaBox: {
												bottomLeftX: 0,
												bottomLeftY: 0,
												topRightX: Number(t),
												topRightY: Number(e),
											},
										}),
										St(rt);
								}),
								At = function () {
									Lt.apply(this, arguments),
										Vt(Wt),
										z($t),
										0 !== oe && z(oe + ' J'),
										0 !== se && z(se + ' j'),
										at.publish('addPage', {pageNumber: rt});
								},
								St = function (t) {
									0 < t && t <= rt && (k = t);
								},
								_t =
									(d.__private__.getNumberOfPages =
									d.getNumberOfPages =
										function () {
											return R.length - 1;
										}),
								Ft = function (t, e, n) {
									var r,
										i = void 0;
									return (
										(n = n || {}),
										(t = void 0 !== t ? t : et[E].fontName),
										(e = void 0 !== e ? e : et[E].fontStyle),
										(r = t.toLowerCase()),
										void 0 !== nt[r] && void 0 !== nt[r][e]
											? (i = nt[r][e])
											: void 0 !== nt[t] && void 0 !== nt[t][e]
											? (i = nt[t][e])
											: !1 === n.disableWarning &&
											  o.warn(
													"Unable to look up font label for font '" +
														t +
														"', '" +
														e +
														"'. Refer to getFontList() for available fonts."
											  ),
										i ||
											n.noFallback ||
											(null == (i = nt.times[e]) && (i = nt.times.normal)),
										i
									);
								},
								Pt = (d.__private__.putInfo = function () {
									for (var t in (ht(),
									z('<<'),
									z('/Producer (jsPDF ' + h.version + ')'),
									Q))
										Q.hasOwnProperty(t) &&
											Q[t] &&
											z(
												'/' +
													t.substr(0, 1).toUpperCase() +
													t.substr(1) +
													' (' +
													Nt(Q[t]) +
													')'
											);
									z('/CreationDate (' + w + ')'), z('>>'), z('endobj');
								}),
								kt = (d.__private__.putCatalog = function (t) {
									var e = (t = t || {}).rootDictionaryObjId || ft;
									switch (
										(ht(),
										z('<<'),
										z('/Type /Catalog'),
										z('/Pages ' + e + ' 0 R'),
										C || (C = 'fullwidth'),
										C)
									) {
										case 'fullwidth':
											z('/OpenAction [3 0 R /FitH null]');
											break;
										case 'fullheight':
											z('/OpenAction [3 0 R /FitV null]');
											break;
										case 'fullpage':
											z('/OpenAction [3 0 R /Fit]');
											break;
										case 'original':
											z('/OpenAction [3 0 R /XYZ null null 1]');
											break;
										default:
											var n = '' + C;
											'%' === n.substr(n.length - 1) && (C = parseInt(C) / 100),
												'number' == typeof C &&
													z('/OpenAction [3 0 R /XYZ null null ' + b(C) + ']');
									}
									switch ((j || (j = 'continuous'), j)) {
										case 'continuous':
											z('/PageLayout /OneColumn');
											break;
										case 'single':
											z('/PageLayout /SinglePage');
											break;
										case 'two':
										case 'twoleft':
											z('/PageLayout /TwoColumnLeft');
											break;
										case 'tworight':
											z('/PageLayout /TwoColumnRight');
									}
									B && z('/PageMode /' + B),
										at.publish('putCatalog'),
										z('>>'),
										z('endobj');
								}),
								Ct = (d.__private__.putTrailer = function () {
									z('trailer'),
										z('<<'),
										z('/Size ' + ($ + 1)),
										z('/Root ' + $ + ' 0 R'),
										z('/Info ' + ($ - 1) + ' 0 R'),
										z('/ID [ <' + N + '> <' + N + '> ]'),
										z('>>');
								}),
								Bt = (d.__private__.putHeader = function () {
									z('%PDF-' + g), z('%ºß¬à');
								}),
								jt = (d.__private__.putXRef = function () {
									var t = 1,
										e = '0000000000';
									for (
										z('xref'),
											z('0 ' + ($ + 1)),
											z('0000000000 65535 f '),
											t = 1;
										t <= $;
										t++
									)
										'function' == typeof tt[t]
											? z((e + tt[t]()).slice(-10) + ' 00000 n ')
											: void 0 !== tt[t]
											? z((e + tt[t]).slice(-10) + ' 00000 n ')
											: z('0000000000 00000 n ');
								}),
								Et = (d.__private__.buildDocument = function () {
									(T = !1),
										(U = $ = 0),
										(D = []),
										(tt = []),
										(ot = []),
										(ft = ut()),
										(pt = ut()),
										at.publish('buildDocument'),
										Bt(),
										wt(),
										(function () {
											at.publish('putAdditionalObjects');
											for (var t = 0; t < ot.length; t++) {
												var e = ot[t];
												lt(e.objId, !0), z(e.content), z('endobj');
											}
											at.publish('postPutAdditionalObjects');
										})(),
										(function () {
											for (var t in et)
												et.hasOwnProperty(t) &&
													(!1 === f || (!0 === f && p.hasOwnProperty(t))) &&
													((e = et[t]),
													at.publish('putFont', {
														font: e,
														out: z,
														newObject: ht,
														putStream: yt,
													}),
													!0 !== e.isAlreadyPutted &&
														((e.objectNumber = ht()),
														z('<<'),
														z('/Type /Font'),
														z('/BaseFont /' + e.postScriptName),
														z('/Subtype /Type1'),
														'string' == typeof e.encoding &&
															z('/Encoding /' + e.encoding),
														z('/FirstChar 32'),
														z('/LastChar 255'),
														z('>>'),
														z('endobj')));
											var e;
										})(),
										at.publish('putResources'),
										lt(pt, !0),
										z('<<'),
										(function () {
											for (var t in (z(
												'/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]'
											),
											z('/Font <<'),
											et))
												et.hasOwnProperty(t) &&
													(!1 === f || (!0 === f && p.hasOwnProperty(t))) &&
													z('/' + t + ' ' + et[t].objectNumber + ' 0 R');
											z('>>'),
												z('/XObject <<'),
												at.publish('putXobjectDict'),
												z('>>');
										})(),
										z('>>'),
										z('endobj'),
										at.publish('postPutResources'),
										Pt(),
										kt();
									var t = U;
									return (
										jt(),
										Ct(),
										z('startxref'),
										z('' + t),
										z('%%EOF'),
										(T = !0),
										D.join('\n')
									);
								}),
								Mt = (d.__private__.getBlob = function (t) {
									return new Blob([W(t)], {type: 'application/pdf'});
								}),
								Ot =
									(d.output =
									d.__private__.output =
										(((O = function (t, e) {
											e = e || {};
											var n = Et();
											switch (
												('string' == typeof e
													? (e = {filename: e})
													: (e.filename = e.filename || 'generated.pdf'),
												t)
											) {
												case void 0:
													return n;
												case 'save':
													d.save(e.filename);
													break;
												case 'arraybuffer':
													return W(n);
												case 'blob':
													return Mt(n);
												case 'bloburi':
												case 'bloburl':
													if (
														void 0 !== a.URL &&
														'function' == typeof a.URL.createObjectURL
													)
														return (
															(a.URL && a.URL.createObjectURL(Mt(n))) || void 0
														);
													o.warn(
														'bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.'
													);
													break;
												case 'datauristring':
												case 'dataurlstring':
													return (
														'data:application/pdf;filename=' +
														e.filename +
														';base64,' +
														btoa(n)
													);
												case 'dataurlnewwindow':
													var r =
															'<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' +
															this.output('datauristring') +
															'"></iframe></body></html>',
														i = a.open();
													if (
														(null !== i && i.document.write(r),
														i || 'undefined' == typeof safari)
													)
														return i;
												case 'datauri':
												case 'dataurl':
													return (a.document.location.href =
														'data:application/pdf;filename=' +
														e.filename +
														';base64,' +
														btoa(n));
												default:
													return null;
											}
										}).foo = function () {
											try {
												return O.apply(this, arguments);
											} catch (n) {
												var t = n.stack || '';
												~t.indexOf(' at ') && (t = t.split(' at ')[1]);
												var e =
													'Error in function ' +
													t.split('\n')[0].split('<')[0] +
													': ' +
													n.message;
												if (!a.console) throw new Error(e);
												a.console.error(e, n), a.alert && alert(e);
											}
										}),
										(O.foo.bar = O).foo)),
								qt = function (t) {
									return !0 === Array.isArray(st) && -1 < st.indexOf(t);
								};
							switch (e) {
								case 'pt':
									M = 1;
									break;
								case 'mm':
									M = 72 / 25.4;
									break;
								case 'cm':
									M = 72 / 2.54;
									break;
								case 'in':
									M = 72;
									break;
								case 'px':
									M = 1 == qt('px_scaling') ? 0.75 : 96 / 72;
									break;
								case 'pc':
								case 'em':
									M = 12;
									break;
								case 'ex':
									M = 6;
									break;
								default:
									throw new Error('Invalid unit: ' + e);
							}
							F(), A();
							var Tt = (d.__private__.getPageInfo = function (t) {
									if (isNaN(t) || t % 1 != 0)
										throw new Error(
											'Invalid argument passed to jsPDF.getPageInfo'
										);
									return {
										objId: it[t].objId,
										pageNumber: t,
										pageContext: it[t],
									};
								}),
								Rt = (d.__private__.getPageInfoByObjId = function (t) {
									for (var e in it) if (it[e].objId === t) break;
									if (isNaN(t) || t % 1 != 0)
										throw new Error(
											'Invalid argument passed to jsPDF.getPageInfoByObjId'
										);
									return Tt(e);
								}),
								Dt = (d.__private__.getCurrentPageInfo = function () {
									return {
										objId: it[k].objId,
										pageNumber: k,
										pageContext: it[k],
									};
								});
							(d.addPage = function () {
								return At.apply(this, arguments), this;
							}),
								(d.setPage = function () {
									return St.apply(this, arguments), this;
								}),
								(d.insertPage = function (t) {
									return this.addPage(), this.movePage(k, t), this;
								}),
								(d.movePage = function (t, e) {
									if (e < t) {
										for (var n = R[t], r = it[t], i = t; e < i; i--)
											(R[i] = R[i - 1]), (it[i] = it[i - 1]);
										(R[e] = n), (it[e] = r), this.setPage(e);
									} else if (t < e) {
										for (n = R[t], r = it[t], i = t; i < e; i++)
											(R[i] = R[i + 1]), (it[i] = it[i + 1]);
										(R[e] = n), (it[e] = r), this.setPage(e);
									}
									return this;
								}),
								(d.deletePage = function () {
									return (
										function (t) {
											0 < t &&
												t <= rt &&
												(R.splice(t, 1), --rt < k && (k = rt), this.setPage(k));
										}.apply(this, arguments),
										this
									);
								}),
								(d.__private__.text = d.text =
									function (t, e, n, i) {
										var o;
										'number' != typeof t ||
											'number' != typeof e ||
											('string' != typeof n && !Array.isArray(n)) ||
											((o = n), (n = e), (e = t), (t = o));
										var a = arguments[3],
											s = arguments[4],
											h = arguments[5];
										if (
											(('object' === r(a) && null !== a) ||
												('string' == typeof s && ((h = s), (s = null)),
												'string' == typeof a && ((h = a), (a = null)),
												'number' == typeof a && ((s = a), (a = null)),
												(i = {flags: a, angle: s, align: h})),
											((a = a || {}).noBOM = a.noBOM || !0),
											(a.autoencode = a.autoencode || !0),
											isNaN(e) || isNaN(n) || null == t)
										)
											throw new Error('Invalid arguments passed to jsPDF.text');
										if (0 === t.length) return f;
										var u,
											l = '',
											c =
												'number' == typeof i.lineHeightFactor
													? i.lineHeightFactor
													: Ht,
											f = i.scope || this;
										function d(t) {
											for (var e, n = t.concat(), r = [], i = n.length; i--; )
												'string' == typeof (e = n.shift())
													? r.push(e)
													: Array.isArray(t) && 1 === e.length
													? r.push(e[0])
													: r.push([e[0], e[1], e[2]]);
											return r;
										}
										function g(t, e) {
											var n;
											if ('string' == typeof t) n = e(t)[0];
											else if (Array.isArray(t)) {
												for (
													var r, i, o = t.concat(), a = [], s = o.length;
													s--;

												)
													'string' == typeof (r = o.shift())
														? a.push(e(r)[0])
														: Array.isArray(r) &&
														  'string' === r[0] &&
														  ((i = e(r[0], r[1], r[2])),
														  a.push([i[0], i[1], i[2]]));
												n = a;
											}
											return n;
										}
										var m = !1,
											y = !0;
										if ('string' == typeof t) m = !0;
										else if (Array.isArray(t)) {
											for (var v, w = t.concat(), N = [], L = w.length; L--; )
												('string' != typeof (v = w.shift()) ||
													(Array.isArray(v) && 'string' != typeof v[0])) &&
													(y = !1);
											m = y;
										}
										if (!1 === m)
											throw new Error(
												'Type of text must be string or Array. "' +
													t +
													'" is not recognized.'
											);
										var A = et[E].encoding;
										('WinAnsiEncoding' !== A && 'StandardEncoding' !== A) ||
											(t = g(t, function (t, e, n) {
												return [
													((r = t),
													(r = r
														.split('\t')
														.join(Array(i.TabLen || 9).join(' '))),
													Nt(r, a)),
													e,
													n,
												];
												var r;
											})),
											'string' == typeof t &&
												(t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
										var S = G / f.internal.scaleFactor,
											_ = S * (Ht - 1);
										switch (i.baseline) {
											case 'bottom':
												n -= _;
												break;
											case 'top':
												n += S - _;
												break;
											case 'hanging':
												n += S - 2 * _;
												break;
											case 'middle':
												n += S / 2 - _;
										}
										0 < (U = i.maxWidth || 0) &&
											('string' == typeof t
												? (t = f.splitTextToSize(t, U))
												: '[object Array]' ===
														Object.prototype.toString.call(t) &&
												  (t = f.splitTextToSize(t.join(' '), U)));
										var F = {
											text: t,
											x: e,
											y: n,
											options: i,
											mutex: {
												pdfEscape: Nt,
												activeFontKey: E,
												fonts: et,
												activeFontSize: G,
											},
										};
										at.publish('preProcessText', F),
											(t = F.text),
											(s = (i = F.options).angle);
										var P = f.internal.scaleFactor,
											k = [];
										if (s) {
											s *= Math.PI / 180;
											var I = Math.cos(s),
												C = Math.sin(s);
											k = [b(I), b(C), b(-1 * C), b(I)];
										}
										void 0 !== (D = i.charSpace) && (l += x(D * P) + ' Tc\n'),
											i.lang;
										var B = -1,
											j =
												void 0 !== i.renderingMode ? i.renderingMode : i.stroke,
											M = f.internal.getCurrentPageInfo().pageContext;
										switch (j) {
											case 0:
											case !1:
											case 'fill':
												B = 0;
												break;
											case 1:
											case !0:
											case 'stroke':
												B = 1;
												break;
											case 2:
											case 'fillThenStroke':
												B = 2;
												break;
											case 3:
											case 'invisible':
												B = 3;
												break;
											case 4:
											case 'fillAndAddForClipping':
												B = 4;
												break;
											case 5:
											case 'strokeAndAddPathForClipping':
												B = 5;
												break;
											case 6:
											case 'fillThenStrokeAndAddToPathForClipping':
												B = 6;
												break;
											case 7:
											case 'addToPathForClipping':
												B = 7;
										}
										var O =
											void 0 !== M.usedRenderingMode ? M.usedRenderingMode : -1;
										-1 !== B ? (l += B + ' Tr\n') : -1 !== O && (l += '0 Tr\n'),
											-1 !== B && (M.usedRenderingMode = B),
											(h = i.align || 'left');
										var q = G * c,
											T = f.internal.pageSize.getWidth(),
											R = ((P = f.internal.scaleFactor), et[E]),
											D = i.charSpace || re,
											U = i.maxWidth || 0,
											H = ((a = {}), []);
										if (
											'[object Array]' === Object.prototype.toString.call(t)
										) {
											var W, V;
											(N = d(t)),
												'left' !== h &&
													(V = N.map(function (t) {
														return (
															(f.getStringUnitWidth(t, {
																font: R,
																charSpace: D,
																fontSize: G,
															}) *
																G) /
															P
														);
													})),
												Math.max.apply(Math, V);
											var Y,
												X = 0;
											if ('right' === h) {
												(e -= V[0]), (t = []);
												var K = 0;
												for (L = N.length; K < L; K++)
													V[K],
														(W =
															0 === K
																? ((Y = Xt(e)), Kt(n))
																: ((Y = (X - V[K]) * P), -q)),
														t.push([N[K], Y, W]),
														(X = V[K]);
											} else if ('center' === h)
												for (
													e -= V[0] / 2, t = [], K = 0, L = N.length;
													K < L;
													K++
												)
													V[K],
														(W =
															0 === K
																? ((Y = Xt(e)), Kt(n))
																: ((Y = ((X - V[K]) / 2) * P), -q)),
														t.push([N[K], Y, W]),
														(X = V[K]);
											else if ('left' === h)
												for (t = [], K = 0, L = N.length; K < L; K++)
													(W = 0 === K ? Kt(n) : -q),
														(Y = 0 === K ? Xt(e) : 0),
														t.push(N[K]);
											else {
												if ('justify' !== h)
													throw new Error(
														'Unrecognized alignment option, use "left", "center", "right" or "justify".'
													);
												for (
													t = [], U = 0 !== U ? U : T, K = 0, L = N.length;
													K < L;
													K++
												)
													(W = 0 === K ? Kt(n) : -q),
														(Y = 0 === K ? Xt(e) : 0),
														K < L - 1 &&
															H.push(
																(
																	((U - V[K]) / (N[K].split(' ').length - 1)) *
																	P
																).toFixed(2)
															),
														t.push([N[K], Y, W]);
											}
										}
										!0 === ('boolean' == typeof i.R2L ? i.R2L : J) &&
											(t = g(t, function (t, e, n) {
												return [t.split('').reverse().join(''), e, n];
											})),
											(F = {
												text: t,
												x: e,
												y: n,
												options: i,
												mutex: {
													pdfEscape: Nt,
													activeFontKey: E,
													fonts: et,
													activeFontSize: G,
												},
											}),
											at.publish('postProcessText', F),
											(t = F.text),
											(u = F.mutex.isHex),
											(N = d(t)),
											(t = []);
										var Z,
											Q,
											$,
											tt = 0,
											nt = ((L = N.length), '');
										for (K = 0; K < L; K++)
											(nt = ''),
												Array.isArray(N[K])
													? ((Z = parseFloat(N[K][1])),
													  (Q = parseFloat(N[K][2])),
													  ($ = (u ? '<' : '(') + N[K][0] + (u ? '>' : ')')),
													  (tt = 1))
													: ((Z = Xt(e)),
													  (Q = Kt(n)),
													  ($ = (u ? '<' : '(') + N[K] + (u ? '>' : ')'))),
												void 0 !== H &&
													void 0 !== H[K] &&
													(nt = H[K] + ' Tw\n'),
												0 !== k.length && 0 === K
													? t.push(
															nt +
																k.join(' ') +
																' ' +
																Z.toFixed(2) +
																' ' +
																Q.toFixed(2) +
																' Tm\n' +
																$
													  )
													: 1 === tt || (0 === tt && 0 === K)
													? t.push(
															nt +
																Z.toFixed(2) +
																' ' +
																Q.toFixed(2) +
																' Td\n' +
																$
													  )
													: t.push(nt + $);
										(t = 0 === tt ? t.join(' Tj\nT* ') : t.join(' Tj\n')),
											(t += ' Tj\n');
										var rt =
											'BT\n/' +
											E +
											' ' +
											G +
											' Tf\n' +
											(G * c).toFixed(2) +
											' TL\n' +
											ee +
											'\n';
										return (
											(rt += l), (rt += t), z((rt += 'ET')), (p[E] = !0), f
										);
									}),
								(d.__private__.lstext = d.lstext =
									function (t, e, n, r) {
										return (
											o.warn('jsPDF.lstext is deprecated'),
											this.text(t, e, n, {charSpace: r})
										);
									}),
								(d.__private__.clip = d.clip =
									function (t) {
										z('evenodd' === t ? 'W*' : 'W'), z('n');
									}),
								(d.__private__.clip_fixed = d.clip_fixed =
									function (t) {
										o.log('clip_fixed is deprecated'), d.clip(t);
									});
							var Ut = (d.__private__.isValidStyle = function (t) {
									var e = !1;
									return (
										-1 !==
											[
												void 0,
												null,
												'S',
												'F',
												'DF',
												'FD',
												'f',
												'f*',
												'B',
												'B*',
											].indexOf(t) && (e = !0),
										e
									);
								}),
								zt = (d.__private__.getStyle = function (t) {
									var e = 'S';
									return (
										'F' === t
											? (e = 'f')
											: 'FD' === t || 'DF' === t
											? (e = 'B')
											: ('f' !== t && 'f*' !== t && 'B' !== t && 'B*' !== t) ||
											  (e = t),
										e
									);
								});
							(d.__private__.line = d.line =
								function (t, e, n, r) {
									if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r))
										throw new Error('Invalid arguments passed to jsPDF.line');
									return this.lines([[n - t, r - e]], t, e);
								}),
								(d.__private__.lines = d.lines =
									function (t, e, n, r, i, o) {
										var a, s, h, u, l, c, f, p, d, g, m, y;
										if (
											('number' == typeof t &&
												((y = n), (n = e), (e = t), (t = y)),
											(r = r || [1, 1]),
											(o = o || !1),
											isNaN(e) ||
												isNaN(n) ||
												!Array.isArray(t) ||
												!Array.isArray(r) ||
												!Ut(i) ||
												'boolean' != typeof o)
										)
											throw new Error(
												'Invalid arguments passed to jsPDF.lines'
											);
										for (
											z(x(Xt(e)) + ' ' + x(Kt(n)) + ' m '),
												a = r[0],
												s = r[1],
												u = t.length,
												g = e,
												m = n,
												h = 0;
											h < u;
											h++
										)
											2 === (l = t[h]).length
												? ((g = l[0] * a + g),
												  (m = l[1] * s + m),
												  z(x(Xt(g)) + ' ' + x(Kt(m)) + ' l'))
												: ((c = l[0] * a + g),
												  (f = l[1] * s + m),
												  (p = l[2] * a + g),
												  (d = l[3] * s + m),
												  (g = l[4] * a + g),
												  (m = l[5] * s + m),
												  z(
														x(Xt(c)) +
															' ' +
															x(Kt(f)) +
															' ' +
															x(Xt(p)) +
															' ' +
															x(Kt(d)) +
															' ' +
															x(Xt(g)) +
															' ' +
															x(Kt(m)) +
															' c'
												  ));
										return o && z(' h'), null !== i && z(zt(i)), this;
									}),
								(d.__private__.rect = d.rect =
									function (t, e, n, r, i) {
										if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !Ut(i))
											throw new Error('Invalid arguments passed to jsPDF.rect');
										return (
											z(
												[b(Xt(t)), b(Kt(e)), b(n * M), b(-r * M), 're'].join(
													' '
												)
											),
											null !== i && z(zt(i)),
											this
										);
									}),
								(d.__private__.triangle = d.triangle =
									function (t, e, n, r, i, o, a) {
										if (
											isNaN(t) ||
											isNaN(e) ||
											isNaN(n) ||
											isNaN(r) ||
											isNaN(i) ||
											isNaN(o) ||
											!Ut(a)
										)
											throw new Error(
												'Invalid arguments passed to jsPDF.triangle'
											);
										return (
											this.lines(
												[
													[n - t, r - e],
													[i - n, o - r],
													[t - i, e - o],
												],
												t,
												e,
												[1, 1],
												a,
												!0
											),
											this
										);
									}),
								(d.__private__.roundedRect = d.roundedRect =
									function (t, e, n, r, i, o, a) {
										if (
											isNaN(t) ||
											isNaN(e) ||
											isNaN(n) ||
											isNaN(r) ||
											isNaN(i) ||
											isNaN(o) ||
											!Ut(a)
										)
											throw new Error(
												'Invalid arguments passed to jsPDF.roundedRect'
											);
										var s = (4 / 3) * (Math.SQRT2 - 1);
										return (
											this.lines(
												[
													[n - 2 * i, 0],
													[i * s, 0, i, o - o * s, i, o],
													[0, r - 2 * o],
													[0, o * s, -i * s, o, -i, o],
													[2 * i - n, 0],
													[-i * s, 0, -i, -o * s, -i, -o],
													[0, 2 * o - r],
													[0, -o * s, i * s, -o, i, -o],
												],
												t + i,
												e,
												[1, 1],
												a
											),
											this
										);
									}),
								(d.__private__.ellipse = d.ellipse =
									function (t, e, n, r, i) {
										if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !Ut(i))
											throw new Error(
												'Invalid arguments passed to jsPDF.ellipse'
											);
										var o = (4 / 3) * (Math.SQRT2 - 1) * n,
											a = (4 / 3) * (Math.SQRT2 - 1) * r;
										return (
											z(
												[
													b(Xt(t + n)),
													b(Kt(e)),
													'm',
													b(Xt(t + n)),
													b(Kt(e - a)),
													b(Xt(t + o)),
													b(Kt(e - r)),
													b(Xt(t)),
													b(Kt(e - r)),
													'c',
												].join(' ')
											),
											z(
												[
													b(Xt(t - o)),
													b(Kt(e - r)),
													b(Xt(t - n)),
													b(Kt(e - a)),
													b(Xt(t - n)),
													b(Kt(e)),
													'c',
												].join(' ')
											),
											z(
												[
													b(Xt(t - n)),
													b(Kt(e + a)),
													b(Xt(t - o)),
													b(Kt(e + r)),
													b(Xt(t)),
													b(Kt(e + r)),
													'c',
												].join(' ')
											),
											z(
												[
													b(Xt(t + o)),
													b(Kt(e + r)),
													b(Xt(t + n)),
													b(Kt(e + a)),
													b(Xt(t + n)),
													b(Kt(e)),
													'c',
												].join(' ')
											),
											null !== i && z(zt(i)),
											this
										);
									}),
								(d.__private__.circle = d.circle =
									function (t, e, n, r) {
										if (isNaN(t) || isNaN(e) || isNaN(n) || !Ut(r))
											throw new Error(
												'Invalid arguments passed to jsPDF.circle'
											);
										return this.ellipse(t, e, n, n, r);
									}),
								(d.setFont = function (t, e) {
									return (E = Ft(t, e, {disableWarning: !1})), this;
								}),
								(d.setFontStyle = d.setFontType =
									function (t) {
										return (E = Ft(void 0, t)), this;
									}),
								(d.__private__.getFontList = d.getFontList =
									function () {
										var t,
											e,
											n,
											r = {};
										for (t in nt)
											if (nt.hasOwnProperty(t))
												for (e in ((r[t] = n = []), nt[t]))
													nt[t].hasOwnProperty(e) && n.push(e);
										return r;
									}),
								(d.addFont = function (t, e, n, r) {
									xt.call(this, t, e, n, (r = r || 'Identity-H'));
								});
							var Ht,
								Wt = u.lineWidth || 0.200025,
								Vt =
									(d.__private__.setLineWidth =
									d.setLineWidth =
										function (t) {
											return z((t * M).toFixed(2) + ' w'), this;
										}),
								Gt =
									((d.__private__.setLineDash = h.API.setLineDash =
										function (t, e) {
											if (
												((t = t || []),
												(e = e || 0),
												isNaN(e) || !Array.isArray(t))
											)
												throw new Error(
													'Invalid arguments passed to jsPDF.setLineDash'
												);
											return (
												(t = t
													.map(function (t) {
														return (t * M).toFixed(3);
													})
													.join(' ')),
												(e = parseFloat((e * M).toFixed(3))),
												z('[' + t + '] ' + e + ' d'),
												this
											);
										}),
									(d.__private__.getLineHeight = d.getLineHeight =
										function () {
											return G * Ht;
										})),
								Yt =
									((Gt =
										d.__private__.getLineHeight =
										d.getLineHeight =
											function () {
												return G * Ht;
											}),
									(d.__private__.setLineHeightFactor = d.setLineHeightFactor =
										function (t) {
											return (
												'number' == typeof (t = t || 1.15) && (Ht = t), this
											);
										})),
								Jt =
									(d.__private__.getLineHeightFactor =
									d.getLineHeightFactor =
										function () {
											return Ht;
										});
							Yt(u.lineHeight);
							var Xt = (d.__private__.getHorizontalCoordinate = function (t) {
									return t * M;
								}),
								Kt = (d.__private__.getVerticalCoordinate = function (t) {
									return (
										it[k].mediaBox.topRightY -
										it[k].mediaBox.bottomLeftY -
										t * M
									);
								}),
								Zt = (d.__private__.getHorizontalCoordinateString = function (
									t
								) {
									return b(t * M);
								}),
								Qt = (d.__private__.getVerticalCoordinateString = function (t) {
									return b(
										it[k].mediaBox.topRightY -
											it[k].mediaBox.bottomLeftY -
											t * M
									);
								}),
								$t = u.strokeColor || '0 G',
								te =
									((d.__private__.getStrokeColor = d.getDrawColor =
										function () {
											return dt($t);
										}),
									(d.__private__.setStrokeColor = d.setDrawColor =
										function (t, e, n, r) {
											return (
												($t = gt({
													ch1: t,
													ch2: e,
													ch3: n,
													ch4: r,
													pdfColorType: 'draw',
													precision: 2,
												})),
												z($t),
												this
											);
										}),
									u.fillColor || '0 g'),
								ee =
									((d.__private__.getFillColor = d.getFillColor =
										function () {
											return dt(te);
										}),
									(d.__private__.setFillColor = d.setFillColor =
										function (t, e, n, r) {
											return (
												(te = gt({
													ch1: t,
													ch2: e,
													ch3: n,
													ch4: r,
													pdfColorType: 'fill',
													precision: 2,
												})),
												z(te),
												this
											);
										}),
									u.textColor || '0 g'),
								ne =
									(d.__private__.getTextColor =
									d.getTextColor =
										function () {
											return dt(ee);
										}),
								re =
									((d.__private__.setTextColor = d.setTextColor =
										function (t, e, n, r) {
											return (
												(ee = gt({
													ch1: t,
													ch2: e,
													ch3: n,
													ch4: r,
													pdfColorType: 'text',
													precision: 3,
												})),
												this
											);
										}),
									u.charSpace || 0),
								ie =
									(d.__private__.getCharSpace =
									d.getCharSpace =
										function () {
											return re;
										}),
								oe =
									((d.__private__.setCharSpace = d.setCharSpace =
										function (t) {
											if (isNaN(t))
												throw new Error(
													'Invalid argument passed to jsPDF.setCharSpace'
												);
											return (re = t), this;
										}),
									0);
							(d.CapJoinStyles = {
								0: 0,
								butt: 0,
								but: 0,
								miter: 0,
								1: 1,
								round: 1,
								rounded: 1,
								circle: 1,
								2: 2,
								projecting: 2,
								project: 2,
								square: 2,
								bevel: 2,
							}),
								(d.__private__.setLineCap = d.setLineCap =
									function (t) {
										var e = d.CapJoinStyles[t];
										if (void 0 === e)
											throw new Error(
												"Line cap style of '" +
													t +
													"' is not recognized. See or extend .CapJoinStyles property for valid styles"
											);
										return z((oe = e) + ' J'), this;
									});
							var ae,
								se = 0;
							for (var he in ((d.__private__.setLineJoin = d.setLineJoin =
								function (t) {
									var e = d.CapJoinStyles[t];
									if (void 0 === e)
										throw new Error(
											"Line join style of '" +
												t +
												"' is not recognized. See or extend .CapJoinStyles property for valid styles"
										);
									return z((se = e) + ' j'), this;
								}),
							(d.__private__.setMiterLimit = d.setMiterLimit =
								function (t) {
									if (((t = t || 0), isNaN(t)))
										throw new Error(
											'Invalid argument passed to jsPDF.setMiterLimit'
										);
									return (ae = parseFloat(b(t * M))), z(ae + ' M'), this;
								}),
							(d.save = function (t, e) {
								if (
									((t = t || 'generated.pdf'),
									((e = e || {}).returnPromise = e.returnPromise || !1),
									!1 !== e.returnPromise)
								)
									return new Promise(function (e, n) {
										try {
											var r = It(Mt(Et()), t);
											'function' == typeof It.unload &&
												a.setTimeout &&
												setTimeout(It.unload, 911),
												e(r);
										} catch (e) {
											n(e.message);
										}
									});
								It(Mt(Et()), t),
									'function' == typeof It.unload &&
										a.setTimeout &&
										setTimeout(It.unload, 911);
							}),
							h.API))
								h.API.hasOwnProperty(he) &&
									('events' === he && h.API.events.length
										? (function (t, e) {
												var n, r, i;
												for (i = e.length - 1; -1 !== i; i--)
													(n = e[i][0]),
														(r = e[i][1]),
														t.subscribe.apply(
															t,
															[n].concat('function' == typeof r ? [r] : r)
														);
										  })(at, h.API.events)
										: (d[he] = h.API[he]));
							return (
								(d.internal = {
									pdfEscape: Nt,
									getStyle: zt,
									getFont: function () {
										return et[Ft.apply(d, arguments)];
									},
									getFontSize: Y,
									getCharSpace: ie,
									getTextColor: ne,
									getLineHeight: Gt,
									getLineHeightFactor: Jt,
									write: H,
									getHorizontalCoordinate: Xt,
									getVerticalCoordinate: Kt,
									getCoordinateString: Zt,
									getVerticalCoordinateString: Qt,
									collections: {},
									newObject: ht,
									newAdditionalObject: ct,
									newObjectDeferred: ut,
									newObjectDeferredBegin: lt,
									getFilters: mt,
									putStream: yt,
									events: at,
									scaleFactor: M,
									pageSize: {
										getWidth: function () {
											return (
												(it[k].mediaBox.topRightX -
													it[k].mediaBox.bottomLeftX) /
												M
											);
										},
										setWidth: function (t) {
											it[k].mediaBox.topRightX =
												t * M + it[k].mediaBox.bottomLeftX;
										},
										getHeight: function () {
											return (
												(it[k].mediaBox.topRightY -
													it[k].mediaBox.bottomLeftY) /
												M
											);
										},
										setHeight: function (t) {
											it[k].mediaBox.topRightY =
												t * M + it[k].mediaBox.bottomLeftY;
										},
									},
									output: Ot,
									getNumberOfPages: _t,
									pages: R,
									out: z,
									f2: b,
									f3: x,
									getPageInfo: Tt,
									getPageInfoByObjId: Rt,
									getCurrentPageInfo: Dt,
									getPDFVersion: m,
									hasHotfix: qt,
								}),
								Object.defineProperty(d.internal.pageSize, 'width', {
									get: function () {
										return (
											(it[k].mediaBox.topRightX - it[k].mediaBox.bottomLeftX) /
											M
										);
									},
									set: function (t) {
										it[k].mediaBox.topRightX =
											t * M + it[k].mediaBox.bottomLeftX;
									},
									enumerable: !0,
									configurable: !0,
								}),
								Object.defineProperty(d.internal.pageSize, 'height', {
									get: function () {
										return (
											(it[k].mediaBox.topRightY - it[k].mediaBox.bottomLeftY) /
											M
										);
									},
									set: function (t) {
										it[k].mediaBox.topRightY =
											t * M + it[k].mediaBox.bottomLeftY;
									},
									enumerable: !0,
									configurable: !0,
								}),
								(function (t) {
									for (var e = 0, n = V.length; e < n; e++) {
										var r = xt(t[e][0], t[e][1], t[e][2], V[e][3], !0);
										p[r] = !0;
										var i = t[e][0].split('-');
										bt(r, i[0], i[1] || '');
									}
									at.publish('addFonts', {fonts: et, dictionary: nt});
								})(V),
								(E = 'F1'),
								At(n, t),
								at.publish('initialized'),
								d
							);
						}
						return (
							(h.API = {events: []}),
							(h.version = '1.5.3'),
							void 0 !==
								(i = function () {
									return h;
								}.call(e, n, e, t)) && (t.exports = i),
							h
						);
					})(
						('undefined' != typeof self && self) ||
							('undefined' != typeof window && window) ||
							(void 0 !== n.g && n.g) ||
							Function('return typeof this === "object" && this.content')() ||
							Function('return this')()
					);
				(function (t, e) {
					var n,
						i = 1,
						a = function (t) {
							return t
								.replace(/\\/g, '\\\\')
								.replace(/\(/g, '\\(')
								.replace(/\)/g, '\\)');
						},
						s = function (t) {
							return t
								.replace(/\\\\/g, '\\')
								.replace(/\\\(/g, '(')
								.replace(/\\\)/g, ')');
						},
						h = function (t) {
							if (isNaN(t))
								throw new Error('Invalid argument passed to jsPDF.f2');
							return t.toFixed(2);
						},
						u = function (t) {
							if (isNaN(t))
								throw new Error('Invalid argument passed to jsPDF.f2');
							return t.toFixed(5);
						};
					t.__acroform__ = {};
					var l = function (t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t);
						},
						c = function (t) {
							return t * i;
						},
						f = function (t) {
							return t / i;
						},
						p = function (t) {
							var e = new M(),
								n = X.internal.getHeight(t) || 0,
								r = X.internal.getWidth(t) || 0;
							return (e.BBox = [0, 0, Number(h(r)), Number(h(n))]), e;
						},
						d = (t.__acroform__.setBit = function (t, e) {
							if (((t = t || 0), (e = e || 0), isNaN(t) || isNaN(e)))
								throw new Error(
									'Invalid arguments passed to jsPDF.API.__acroform__.setBit'
								);
							return t | (1 << e);
						}),
						g = (t.__acroform__.clearBit = function (t, e) {
							if (((t = t || 0), (e = e || 0), isNaN(t) || isNaN(e)))
								throw new Error(
									'Invalid arguments passed to jsPDF.API.__acroform__.clearBit'
								);
							return t & ~(1 << e);
						}),
						m = (t.__acroform__.getBit = function (t, e) {
							if (isNaN(t) || isNaN(e))
								throw new Error(
									'Invalid arguments passed to jsPDF.API.__acroform__.getBit'
								);
							return 0 == (t & (1 << e)) ? 0 : 1;
						}),
						y = (t.__acroform__.getBitForPdf = function (t, e) {
							if (isNaN(t) || isNaN(e))
								throw new Error(
									'Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf'
								);
							return m(t, e - 1);
						}),
						v = (t.__acroform__.setBitForPdf = function (t, e) {
							if (isNaN(t) || isNaN(e))
								throw new Error(
									'Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf'
								);
							return d(t, e - 1);
						}),
						w = (t.__acroform__.clearBitForPdf = function (t, e, n) {
							if (isNaN(t) || isNaN(e))
								throw new Error(
									'Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf'
								);
							return g(t, e - 1);
						}),
						b = (t.__acroform__.calculateCoordinates = function (t) {
							var e = this.internal.getHorizontalCoordinate,
								n = this.internal.getVerticalCoordinate,
								r = t[0],
								i = t[1],
								o = t[2],
								a = t[3],
								s = {};
							return (
								(s.lowerLeft_X = e(r) || 0),
								(s.lowerLeft_Y = n(i + a) || 0),
								(s.upperRight_X = e(r + o) || 0),
								(s.upperRight_Y = n(i) || 0),
								[
									Number(h(s.lowerLeft_X)),
									Number(h(s.lowerLeft_Y)),
									Number(h(s.upperRight_X)),
									Number(h(s.upperRight_Y)),
								]
							);
						}),
						x = function (t) {
							if (t.appearanceStreamContent) return t.appearanceStreamContent;
							if (t.V || t.DV) {
								var e = [],
									r = t.V || t.DV,
									i = N(t, r),
									o = n.internal.getFont(t.fontName, t.fontStyle).id;
								e.push('/Tx BMC'),
									e.push('q'),
									e.push('BT'),
									e.push(n.__private__.encodeColorString(t.color)),
									e.push('/' + o + ' ' + h(i.fontSize) + ' Tf'),
									e.push('1 0 0 1 0 0 Tm'),
									e.push(i.text),
									e.push('ET'),
									e.push('Q'),
									e.push('EMC');
								var a = new p(t);
								return (a.stream = e.join('\n')), a;
							}
						},
						N = function (t, e) {
							var r = t.maxFontSize || 12,
								i = (t.fontName, {text: '', fontSize: ''}),
								o = (e =
									')' ==
									(e = '(' == e.substr(0, 1) ? e.substr(1) : e).substr(
										e.length - 1
									)
										? e.substr(0, e.length - 1)
										: e).split(' '),
								s = (n.__private__.encodeColorString(t.color), r),
								u = X.internal.getHeight(t) || 0;
							u = u < 0 ? -u : u;
							var l = X.internal.getWidth(t) || 0;
							l = l < 0 ? -l : l;
							var c = function (e, n, r) {
								if (e + 1 < o.length) {
									var i = n + ' ' + o[e + 1];
									return L(i, t, r).width <= l - 4;
								}
								return !1;
							};
							s++;
							t: for (;;) {
								e = '';
								var f = L('3', t, --s).height,
									p = t.multiline ? u - s : (u - f) / 2,
									d = -2,
									g = (p += 2),
									m = 0,
									y = 0,
									v = 0;
								if (s <= 0) {
									(e = '(...) Tj\n'),
										(e +=
											'% Width of Text: ' +
											L(e, t, (s = 12)).width +
											', FieldWidth:' +
											l +
											'\n');
									break;
								}
								v = L(o[0] + ' ', t, s).width;
								var w = '',
									b = 0;
								for (var x in o)
									if (o.hasOwnProperty(x)) {
										w =
											' ' == (w += o[x] + ' ').substr(w.length - 1)
												? w.substr(0, w.length - 1)
												: w;
										var N = parseInt(x);
										v = L(w + ' ', t, s).width;
										var A = c(N, w, s),
											S = x >= o.length - 1;
										if (A && !S) {
											w += ' ';
											continue;
										}
										if (A || S) {
											if (S) y = N;
											else if (t.multiline && u < (f + 2) * (b + 2) + 2)
												continue t;
										} else {
											if (!t.multiline) continue t;
											if (u < (f + 2) * (b + 2) + 2) continue t;
											y = N;
										}
										for (var _ = '', F = m; F <= y; F++) _ += o[F] + ' ';
										switch (
											((_ =
												' ' == _.substr(_.length - 1)
													? _.substr(0, _.length - 1)
													: _),
											(v = L(_, t, s).width),
											t.textAlign)
										) {
											case 'right':
												d = l - v - 2;
												break;
											case 'center':
												d = (l - v) / 2;
												break;
											default:
												d = 2;
										}
										(e += h(d) + ' ' + h(g) + ' Td\n'),
											(e += '(' + a(_) + ') Tj\n'),
											(e += -h(d) + ' 0 Td\n'),
											(g = -(s + 2)),
											(v = 0),
											(m = y + 1),
											b++,
											(w = '');
									}
								break;
							}
							return (i.text = e), (i.fontSize = s), i;
						},
						L = function (t, e, r) {
							var i = n.internal.getFont(e.fontName, e.fontStyle),
								o =
									n.getStringUnitWidth(t, {
										font: i,
										fontSize: parseFloat(r),
										charSpace: 0,
									}) * parseFloat(r);
							return {
								height:
									n.getStringUnitWidth('3', {
										font: i,
										fontSize: parseFloat(r),
										charSpace: 0,
									}) *
									parseFloat(r) *
									1.5,
								width: o,
							};
						},
						A = {
							fields: [],
							xForms: [],
							acroFormDictionaryRoot: null,
							printedOut: !1,
							internal: null,
							isInitialized: !1,
						},
						S = function () {
							n.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
							var t = n.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
							for (var e in t)
								if (t.hasOwnProperty(e)) {
									var r = t[e];
									(r.objId = void 0), r.hasAnnotation && _.call(n, r);
								}
						},
						_ = function (t) {
							var e = {type: 'reference', object: t};
							void 0 ===
								n.internal
									.getPageInfo(t.page)
									.pageContext.annotations.find(function (t) {
										return t.type === e.type && t.object === e.object;
									}) &&
								n.internal.getPageInfo(t.page).pageContext.annotations.push(e);
						},
						F = function () {
							if (void 0 === n.internal.acroformPlugin.acroFormDictionaryRoot)
								throw new Error('putCatalogCallback: Root missing.');
							n.internal.write(
								'/AcroForm ' +
									n.internal.acroformPlugin.acroFormDictionaryRoot.objId +
									' 0 R'
							);
						},
						P = function () {
							n.internal.events.unsubscribe(
								n.internal.acroformPlugin.acroFormDictionaryRoot._eventID
							),
								delete n.internal.acroformPlugin.acroFormDictionaryRoot
									._eventID,
								(n.internal.acroformPlugin.printedOut = !0);
						},
						k = function (t) {
							var e = !t;
							for (var i in (t ||
								(n.internal.newObjectDeferredBegin(
									n.internal.acroformPlugin.acroFormDictionaryRoot.objId,
									!0
								),
								n.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
							(t = t || n.internal.acroformPlugin.acroFormDictionaryRoot.Kids)))
								if (t.hasOwnProperty(i)) {
									var o = t[i],
										a = [],
										s = o.Rect;
									if (
										(o.Rect && (o.Rect = b.call(this, o.Rect)),
										n.internal.newObjectDeferredBegin(o.objId, !0),
										(o.DA = X.createDefaultAppearanceStream(o)),
										'object' === r(o) &&
											'function' == typeof o.getKeyValueListForStream &&
											(a = o.getKeyValueListForStream()),
										(o.Rect = s),
										o.hasAppearanceStream && !o.appearanceStreamContent)
									) {
										var h = x.call(this, o);
										a.push({key: 'AP', value: '<</N ' + h + '>>'}),
											n.internal.acroformPlugin.xForms.push(h);
									}
									if (o.appearanceStreamContent) {
										var u = '';
										for (var l in o.appearanceStreamContent)
											if (o.appearanceStreamContent.hasOwnProperty(l)) {
												var c = o.appearanceStreamContent[l];
												if (
													((u += '/' + l + ' '),
													(u += '<<'),
													1 <= Object.keys(c).length || Array.isArray(c))
												)
													for (var i in c) {
														var f;
														c.hasOwnProperty(i) &&
															('function' == typeof (f = c[i]) &&
																(f = f.call(this, o)),
															(u += '/' + i + ' ' + f + ' '),
															0 <=
																n.internal.acroformPlugin.xForms.indexOf(f) ||
																n.internal.acroformPlugin.xForms.push(f));
													}
												else
													'function' == typeof (f = c) && (f = f.call(this, o)),
														(u += '/' + i + ' ' + f),
														0 <= n.internal.acroformPlugin.xForms.indexOf(f) ||
															n.internal.acroformPlugin.xForms.push(f);
												u += '>>';
											}
										a.push({key: 'AP', value: '<<\n' + u + '>>'});
									}
									n.internal.putStream({additionalKeyValues: a}),
										n.internal.out('endobj');
								}
							e && I.call(this, n.internal.acroformPlugin.xForms);
						},
						I = function (t) {
							for (var e in t)
								if (t.hasOwnProperty(e)) {
									var i = e,
										o = t[e];
									n.internal.newObjectDeferredBegin(o && o.objId, !0),
										'object' === r(o) &&
											'function' == typeof o.putStream &&
											o.putStream(),
										delete t[i];
								}
						},
						C = function () {
							if (
								void 0 !== this.internal &&
								(void 0 === this.internal.acroformPlugin ||
									!1 === this.internal.acroformPlugin.isInitialized)
							) {
								if (
									((n = this),
									(q.FieldNum = 0),
									(this.internal.acroformPlugin = JSON.parse(
										JSON.stringify(A)
									)),
									this.internal.acroformPlugin.acroFormDictionaryRoot)
								)
									throw new Error(
										'Exception while creating AcroformDictionary'
									);
								(i = n.internal.scaleFactor),
									(n.internal.acroformPlugin.acroFormDictionaryRoot = new O()),
									(n.internal.acroformPlugin.acroFormDictionaryRoot._eventID =
										n.internal.events.subscribe('postPutResources', P)),
									n.internal.events.subscribe('buildDocument', S),
									n.internal.events.subscribe('putCatalog', F),
									n.internal.events.subscribe('postPutPages', k),
									(n.internal.acroformPlugin.isInitialized = !0);
							}
						},
						B = (t.__acroform__.arrayToPdfArray = function (t) {
							if (Array.isArray(t)) {
								for (var e = '[', n = 0; n < t.length; n++)
									switch ((0 !== n && (e += ' '), r(t[n]))) {
										case 'boolean':
										case 'number':
										case 'object':
											e += t[n].toString();
											break;
										case 'string':
											'/' !== t[n].substr(0, 1)
												? (e += '(' + a(t[n].toString()) + ')')
												: (e += t[n].toString());
									}
								return e + ']';
							}
							throw new Error(
								'Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray'
							);
						}),
						j = function (t) {
							return (t = t || '').toString(), '(' + a(t) + ')';
						},
						E = function () {
							var t;
							Object.defineProperty(this, 'objId', {
								configurable: !0,
								get: function () {
									if ((t || (t = n.internal.newObjectDeferred()), !t))
										throw new Error(
											"AcroFormPDFObject: Couldn't create Object ID"
										);
									return t;
								},
								set: function (e) {
									t = e;
								},
							});
						};
					(E.prototype.toString = function () {
						return this.objId + ' 0 R';
					}),
						(E.prototype.putStream = function () {
							var t = this.getKeyValueListForStream();
							n.internal.putStream({data: this.stream, additionalKeyValues: t}),
								n.internal.out('endobj');
						}),
						(E.prototype.getKeyValueListForStream = function () {
							return (function (t) {
								var e = [],
									n = Object.getOwnPropertyNames(t).filter(function (t) {
										return (
											'content' != t &&
											'appearanceStreamContent' != t &&
											'_' != t.substring(0, 1)
										);
									});
								for (var r in n)
									if (
										!1 === Object.getOwnPropertyDescriptor(t, n[r]).configurable
									) {
										var i = n[r],
											o = t[i];
										o &&
											(Array.isArray(o)
												? e.push({key: i, value: B(o)})
												: o instanceof E
												? e.push({key: i, value: o.objId + ' 0 R'})
												: 'function' != typeof o && e.push({key: i, value: o}));
									}
								return e;
							})(this);
						});
					var M = function () {
						E.call(this),
							Object.defineProperty(this, 'Type', {
								value: '/XObject',
								configurable: !1,
								writeable: !0,
							}),
							Object.defineProperty(this, 'Subtype', {
								value: '/Form',
								configurable: !1,
								writeable: !0,
							}),
							Object.defineProperty(this, 'FormType', {
								value: 1,
								configurable: !1,
								writeable: !0,
							});
						var t,
							e = [];
						Object.defineProperty(this, 'BBox', {
							configurable: !1,
							writeable: !0,
							get: function () {
								return e;
							},
							set: function (t) {
								e = t;
							},
						}),
							Object.defineProperty(this, 'Resources', {
								value: '2 0 R',
								configurable: !1,
								writeable: !0,
							}),
							Object.defineProperty(this, 'stream', {
								enumerable: !1,
								configurable: !0,
								set: function (e) {
									t = e.trim();
								},
								get: function () {
									return t || null;
								},
							});
					};
					l(M, E);
					var O = function () {
						E.call(this);
						var t,
							e = [];
						Object.defineProperty(this, 'Kids', {
							enumerable: !1,
							configurable: !0,
							get: function () {
								return 0 < e.length ? e : void 0;
							},
						}),
							Object.defineProperty(this, 'Fields', {
								enumerable: !1,
								configurable: !1,
								get: function () {
									return e;
								},
							}),
							Object.defineProperty(this, 'DA', {
								enumerable: !1,
								configurable: !1,
								get: function () {
									if (t) return '(' + t + ')';
								},
								set: function (e) {
									t = e;
								},
							});
					};
					l(O, E);
					var q = function t() {
						E.call(this);
						var e = 4;
						Object.defineProperty(this, 'F', {
							enumerable: !1,
							configurable: !1,
							get: function () {
								return e;
							},
							set: function (t) {
								if (isNaN(t))
									throw new Error(
										'Invalid value "' + t + '" for attribute F supplied.'
									);
								e = t;
							},
						}),
							Object.defineProperty(this, 'showWhenPrinted', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(e, 3));
								},
								set: function (t) {
									!0 === Boolean(t) ? (this.F = v(e, 3)) : (this.F = w(e, 3));
								},
							});
						var n = 0;
						Object.defineProperty(this, 'Ff', {
							enumerable: !1,
							configurable: !1,
							get: function () {
								return n;
							},
							set: function (t) {
								if (isNaN(t))
									throw new Error(
										'Invalid value "' + t + '" for attribute Ff supplied.'
									);
								n = t;
							},
						});
						var r = [];
						Object.defineProperty(this, 'Rect', {
							enumerable: !1,
							configurable: !1,
							get: function () {
								if (0 !== r.length) return r;
							},
							set: function (t) {
								r = void 0 !== t ? t : [];
							},
						}),
							Object.defineProperty(this, 'x', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return !r || isNaN(r[0]) ? 0 : f(r[0]);
								},
								set: function (t) {
									r[0] = c(t);
								},
							}),
							Object.defineProperty(this, 'y', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return !r || isNaN(r[1]) ? 0 : f(r[1]);
								},
								set: function (t) {
									r[1] = c(t);
								},
							}),
							Object.defineProperty(this, 'width', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return !r || isNaN(r[2]) ? 0 : f(r[2]);
								},
								set: function (t) {
									r[2] = c(t);
								},
							}),
							Object.defineProperty(this, 'height', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return !r || isNaN(r[3]) ? 0 : f(r[3]);
								},
								set: function (t) {
									r[3] = c(t);
								},
							});
						var i = '';
						Object.defineProperty(this, 'FT', {
							enumerable: !0,
							configurable: !1,
							get: function () {
								return i;
							},
							set: function (t) {
								switch (t) {
									case '/Btn':
									case '/Tx':
									case '/Ch':
									case '/Sig':
										i = t;
										break;
									default:
										throw new Error(
											'Invalid value "' + t + '" for attribute FT supplied.'
										);
								}
							},
						});
						var o = null;
						Object.defineProperty(this, 'T', {
							enumerable: !0,
							configurable: !1,
							get: function () {
								if (!o || o.length < 1) {
									if (this instanceof V) return;
									o = 'FieldObject' + t.FieldNum++;
								}
								return '(' + a(o) + ')';
							},
							set: function (t) {
								o = t.toString();
							},
						}),
							Object.defineProperty(this, 'fieldName', {
								configurable: !0,
								enumerable: !0,
								get: function () {
									return o;
								},
								set: function (t) {
									o = t;
								},
							});
						var h = 'helvetica';
						Object.defineProperty(this, 'fontName', {
							enumerable: !0,
							configurable: !0,
							get: function () {
								return h;
							},
							set: function (t) {
								h = t;
							},
						});
						var u = 'normal';
						Object.defineProperty(this, 'fontStyle', {
							enumerable: !0,
							configurable: !0,
							get: function () {
								return u;
							},
							set: function (t) {
								u = t;
							},
						});
						var l = 0;
						Object.defineProperty(this, 'fontSize', {
							enumerable: !0,
							configurable: !0,
							get: function () {
								return f(l);
							},
							set: function (t) {
								l = c(t);
							},
						});
						var p = 50;
						Object.defineProperty(this, 'maxFontSize', {
							enumerable: !0,
							configurable: !0,
							get: function () {
								return f(p);
							},
							set: function (t) {
								p = c(t);
							},
						});
						var d = 'black';
						Object.defineProperty(this, 'color', {
							enumerable: !0,
							configurable: !0,
							get: function () {
								return d;
							},
							set: function (t) {
								d = t;
							},
						});
						var g = '/F1 0 Tf 0 g';
						Object.defineProperty(this, 'DA', {
							enumerable: !0,
							configurable: !1,
							get: function () {
								if (!(!g || this instanceof V || this instanceof Y))
									return j(g);
							},
							set: function (t) {
								(t = t.toString()), (g = t);
							},
						});
						var m = null;
						Object.defineProperty(this, 'DV', {
							enumerable: !1,
							configurable: !1,
							get: function () {
								if (m) return this instanceof z == 0 ? j(m) : m;
							},
							set: function (t) {
								(t = t.toString()),
									(m =
										this instanceof z == 0
											? '(' === t.substr(0, 1)
												? s(t.substr(1, t.length - 2))
												: s(t)
											: t);
							},
						}),
							Object.defineProperty(this, 'defaultValue', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return this instanceof z == 1
										? s(m.substr(1, m.length - 1))
										: m;
								},
								set: function (t) {
									(t = t.toString()),
										(m = this instanceof z == 1 ? '/' + t : t);
								},
							});
						var b = null;
						Object.defineProperty(this, 'V', {
							enumerable: !1,
							configurable: !1,
							get: function () {
								if (b) return this instanceof z == 0 ? j(b) : b;
							},
							set: function (t) {
								(t = t.toString()),
									(b =
										this instanceof z == 0
											? '(' === t.substr(0, 1)
												? s(t.substr(1, t.length - 2))
												: s(t)
											: t);
							},
						}),
							Object.defineProperty(this, 'value', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return this instanceof z == 1
										? s(b.substr(1, b.length - 1))
										: b;
								},
								set: function (t) {
									(t = t.toString()),
										(b = this instanceof z == 1 ? '/' + t : t);
								},
							}),
							Object.defineProperty(this, 'hasAnnotation', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return this.Rect;
								},
							}),
							Object.defineProperty(this, 'Type', {
								enumerable: !0,
								configurable: !1,
								get: function () {
									return this.hasAnnotation ? '/Annot' : null;
								},
							}),
							Object.defineProperty(this, 'Subtype', {
								enumerable: !0,
								configurable: !1,
								get: function () {
									return this.hasAnnotation ? '/Widget' : null;
								},
							});
						var x,
							N = !1;
						Object.defineProperty(this, 'hasAppearanceStream', {
							enumerable: !0,
							configurable: !0,
							writeable: !0,
							get: function () {
								return N;
							},
							set: function (t) {
								(t = Boolean(t)), (N = t);
							},
						}),
							Object.defineProperty(this, 'page', {
								enumerable: !0,
								configurable: !0,
								writeable: !0,
								get: function () {
									if (x) return x;
								},
								set: function (t) {
									x = t;
								},
							}),
							Object.defineProperty(this, 'readOnly', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 1));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 1))
										: (this.Ff = w(this.Ff, 1));
								},
							}),
							Object.defineProperty(this, 'required', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 2));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 2))
										: (this.Ff = w(this.Ff, 2));
								},
							}),
							Object.defineProperty(this, 'noExport', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 3));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 3))
										: (this.Ff = w(this.Ff, 3));
								},
							});
						var L = null;
						Object.defineProperty(this, 'Q', {
							enumerable: !0,
							configurable: !1,
							get: function () {
								if (null !== L) return L;
							},
							set: function (t) {
								if (-1 === [0, 1, 2].indexOf(t))
									throw new Error(
										'Invalid value "' + t + '" for attribute Q supplied.'
									);
								L = t;
							},
						}),
							Object.defineProperty(this, 'textAlign', {
								get: function () {
									var t = 'left';
									switch (L) {
										case 0:
										default:
											t = 'left';
											break;
										case 1:
											t = 'center';
											break;
										case 2:
											t = 'right';
									}
									return t;
								},
								configurable: !0,
								enumerable: !0,
								set: function (t) {
									switch (t) {
										case 'right':
										case 2:
											L = 2;
											break;
										case 'center':
										case 1:
											L = 1;
											break;
										default:
											L = 0;
									}
								},
							});
					};
					l(q, E);
					var T = function () {
						q.call(this),
							(this.FT = '/Ch'),
							(this.V = '()'),
							(this.fontName = 'zapfdingbats');
						var t = 0;
						Object.defineProperty(this, 'TI', {
							enumerable: !0,
							configurable: !1,
							get: function () {
								return t;
							},
							set: function (e) {
								t = e;
							},
						}),
							Object.defineProperty(this, 'topIndex', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return t;
								},
								set: function (e) {
									t = e;
								},
							});
						var e = [];
						Object.defineProperty(this, 'Opt', {
							enumerable: !0,
							configurable: !1,
							get: function () {
								return B(e);
							},
							set: function (t) {
								var n, r;
								(r = []),
									'string' == typeof (n = t) &&
										(r = (function (t, e, n) {
											n || (n = 1);
											for (var r, i = []; (r = e.exec(t)); ) i.push(r[n]);
											return i;
										})(n, /\((.*?)\)/g)),
									(e = r);
							},
						}),
							(this.getOptions = function () {
								return e;
							}),
							(this.setOptions = function (t) {
								(e = t), this.sort && e.sort();
							}),
							(this.addOption = function (t) {
								(t = (t = t || '').toString()),
									e.push(t),
									this.sort && e.sort();
							}),
							(this.removeOption = function (t, n) {
								for (
									n = n || !1, t = (t = t || '').toString();
									-1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1), !1 !== n);

								);
							}),
							Object.defineProperty(this, 'combo', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 18));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 18))
										: (this.Ff = w(this.Ff, 18));
								},
							}),
							Object.defineProperty(this, 'edit', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 19));
								},
								set: function (t) {
									!0 === this.combo &&
										(!0 === Boolean(t)
											? (this.Ff = v(this.Ff, 19))
											: (this.Ff = w(this.Ff, 19)));
								},
							}),
							Object.defineProperty(this, 'sort', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 20));
								},
								set: function (t) {
									!0 === Boolean(t)
										? ((this.Ff = v(this.Ff, 20)), e.sort())
										: (this.Ff = w(this.Ff, 20));
								},
							}),
							Object.defineProperty(this, 'multiSelect', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 22));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 22))
										: (this.Ff = w(this.Ff, 22));
								},
							}),
							Object.defineProperty(this, 'doNotSpellCheck', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 23));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 23))
										: (this.Ff = w(this.Ff, 23));
								},
							}),
							Object.defineProperty(this, 'commitOnSelChange', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 27));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 27))
										: (this.Ff = w(this.Ff, 27));
								},
							}),
							(this.hasAppearanceStream = !1);
					};
					l(T, q);
					var R = function () {
						T.call(this), (this.fontName = 'helvetica'), (this.combo = !1);
					};
					l(R, T);
					var D = function () {
						R.call(this), (this.combo = !0);
					};
					l(D, R);
					var U = function () {
						D.call(this), (this.edit = !0);
					};
					l(U, D);
					var z = function () {
						q.call(this),
							(this.FT = '/Btn'),
							Object.defineProperty(this, 'noToggleToOff', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 15));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 15))
										: (this.Ff = w(this.Ff, 15));
								},
							}),
							Object.defineProperty(this, 'radio', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 16));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 16))
										: (this.Ff = w(this.Ff, 16));
								},
							}),
							Object.defineProperty(this, 'pushButton', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 17));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 17))
										: (this.Ff = w(this.Ff, 17));
								},
							}),
							Object.defineProperty(this, 'radioIsUnison', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 26));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 26))
										: (this.Ff = w(this.Ff, 26));
								},
							});
						var t,
							e = {};
						Object.defineProperty(this, 'MK', {
							enumerable: !1,
							configurable: !1,
							get: function () {
								if (0 !== Object.keys(e).length) {
									var t,
										n = [];
									for (t in (n.push('<<'), e))
										n.push('/' + t + ' (' + e[t] + ')');
									return n.push('>>'), n.join('\n');
								}
							},
							set: function (t) {
								'object' === r(t) && (e = t);
							},
						}),
							Object.defineProperty(this, 'caption', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return e.CA || '';
								},
								set: function (t) {
									'string' == typeof t && (e.CA = t);
								},
							}),
							Object.defineProperty(this, 'AS', {
								enumerable: !1,
								configurable: !1,
								get: function () {
									return t;
								},
								set: function (e) {
									t = e;
								},
							}),
							Object.defineProperty(this, 'appearanceState', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return t.substr(1, t.length - 1);
								},
								set: function (e) {
									t = '/' + e;
								},
							});
					};
					l(z, q);
					var H = function () {
						z.call(this), (this.pushButton = !0);
					};
					l(H, z);
					var W = function () {
						z.call(this), (this.radio = !0), (this.pushButton = !1);
						var t = [];
						Object.defineProperty(this, 'Kids', {
							enumerable: !0,
							configurable: !1,
							get: function () {
								return t;
							},
							set: function (e) {
								t = void 0 !== e ? e : [];
							},
						});
					};
					l(W, z);
					var V = function () {
						var t, e;
						q.call(this),
							Object.defineProperty(this, 'Parent', {
								enumerable: !1,
								configurable: !1,
								get: function () {
									return t;
								},
								set: function (e) {
									t = e;
								},
							}),
							Object.defineProperty(this, 'optionName', {
								enumerable: !1,
								configurable: !0,
								get: function () {
									return e;
								},
								set: function (t) {
									e = t;
								},
							});
						var n,
							i = {};
						Object.defineProperty(this, 'MK', {
							enumerable: !1,
							configurable: !1,
							get: function () {
								var t,
									e = [];
								for (t in (e.push('<<'), i))
									e.push('/' + t + ' (' + i[t] + ')');
								return e.push('>>'), e.join('\n');
							},
							set: function (t) {
								'object' === r(t) && (i = t);
							},
						}),
							Object.defineProperty(this, 'caption', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return i.CA || '';
								},
								set: function (t) {
									'string' == typeof t && (i.CA = t);
								},
							}),
							Object.defineProperty(this, 'AS', {
								enumerable: !1,
								configurable: !1,
								get: function () {
									return n;
								},
								set: function (t) {
									n = t;
								},
							}),
							Object.defineProperty(this, 'appearanceState', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return n.substr(1, n.length - 1);
								},
								set: function (t) {
									n = '/' + t;
								},
							}),
							(this.optionName = name),
							(this.caption = 'l'),
							(this.appearanceState = 'Off'),
							(this._AppearanceType = X.RadioButton.Circle),
							(this.appearanceStreamContent =
								this._AppearanceType.createAppearanceStream(name));
					};
					l(V, q),
						(W.prototype.setAppearance = function (t) {
							if (!('createAppearanceStream' in t) || !('getCA' in t))
								throw new Error(
									"Couldn't assign Appearance to RadioButton. Appearance was Invalid!"
								);
							for (var e in this.Kids)
								if (this.Kids.hasOwnProperty(e)) {
									var n = this.Kids[e];
									(n.appearanceStreamContent = t.createAppearanceStream(
										n.optionName
									)),
										(n.caption = t.getCA());
								}
						}),
						(W.prototype.createOption = function (t) {
							this.Kids.length;
							var e = new V();
							return (
								(e.Parent = this),
								(e.optionName = t),
								this.Kids.push(e),
								K.call(this, e),
								e
							);
						});
					var G = function () {
						z.call(this),
							(this.fontName = 'zapfdingbats'),
							(this.caption = '3'),
							(this.appearanceState = 'On'),
							(this.value = 'On'),
							(this.textAlign = 'center'),
							(this.appearanceStreamContent =
								X.CheckBox.createAppearanceStream());
					};
					l(G, z);
					var Y = function () {
						q.call(this),
							(this.FT = '/Tx'),
							Object.defineProperty(this, 'multiline', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 13));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 13))
										: (this.Ff = w(this.Ff, 13));
								},
							}),
							Object.defineProperty(this, 'fileSelect', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 21));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 21))
										: (this.Ff = w(this.Ff, 21));
								},
							}),
							Object.defineProperty(this, 'doNotSpellCheck', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 23));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 23))
										: (this.Ff = w(this.Ff, 23));
								},
							}),
							Object.defineProperty(this, 'doNotScroll', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 24));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 24))
										: (this.Ff = w(this.Ff, 24));
								},
							}),
							Object.defineProperty(this, 'comb', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 25));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 25))
										: (this.Ff = w(this.Ff, 25));
								},
							}),
							Object.defineProperty(this, 'richText', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 26));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 26))
										: (this.Ff = w(this.Ff, 26));
								},
							});
						var t = null;
						Object.defineProperty(this, 'MaxLen', {
							enumerable: !0,
							configurable: !1,
							get: function () {
								return t;
							},
							set: function (e) {
								t = e;
							},
						}),
							Object.defineProperty(this, 'maxLength', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return t;
								},
								set: function (e) {
									Number.isInteger(e) && (t = e);
								},
							}),
							Object.defineProperty(this, 'hasAppearanceStream', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return this.V || this.DV;
								},
							});
					};
					l(Y, q);
					var J = function () {
						Y.call(this),
							Object.defineProperty(this, 'password', {
								enumerable: !0,
								configurable: !0,
								get: function () {
									return Boolean(y(this.Ff, 14));
								},
								set: function (t) {
									!0 === Boolean(t)
										? (this.Ff = v(this.Ff, 14))
										: (this.Ff = w(this.Ff, 14));
								},
							}),
							(this.password = !0);
					};
					l(J, Y);
					var X = {
						CheckBox: {
							createAppearanceStream: function () {
								return {
									N: {On: X.CheckBox.YesNormal},
									D: {On: X.CheckBox.YesPushDown, Off: X.CheckBox.OffPushDown},
								};
							},
							YesPushDown: function (t) {
								var e = p(t),
									r = [],
									i = n.internal.getFont(t.fontName, t.fontStyle).id,
									o = n.__private__.encodeColorString(t.color),
									a = N(t, t.caption);
								return (
									r.push('0.749023 g'),
									r.push(
										'0 0 ' +
											h(X.internal.getWidth(t)) +
											' ' +
											h(X.internal.getHeight(t)) +
											' re'
									),
									r.push('f'),
									r.push('BMC'),
									r.push('q'),
									r.push('0 0 1 rg'),
									r.push('/' + i + ' ' + h(a.fontSize) + ' Tf ' + o),
									r.push('BT'),
									r.push(a.text),
									r.push('ET'),
									r.push('Q'),
									r.push('EMC'),
									(e.stream = r.join('\n')),
									e
								);
							},
							YesNormal: function (t) {
								var e = p(t),
									r = n.internal.getFont(t.fontName, t.fontStyle).id,
									i = n.__private__.encodeColorString(t.color),
									o = [],
									a = X.internal.getHeight(t),
									s = X.internal.getWidth(t),
									u = N(t, t.caption);
								return (
									o.push('1 g'),
									o.push('0 0 ' + h(s) + ' ' + h(a) + ' re'),
									o.push('f'),
									o.push('q'),
									o.push('0 0 1 rg'),
									o.push('0 0 ' + h(s - 1) + ' ' + h(a - 1) + ' re'),
									o.push('W'),
									o.push('n'),
									o.push('0 g'),
									o.push('BT'),
									o.push('/' + r + ' ' + h(u.fontSize) + ' Tf ' + i),
									o.push(u.text),
									o.push('ET'),
									o.push('Q'),
									(e.stream = o.join('\n')),
									e
								);
							},
							OffPushDown: function (t) {
								var e = p(t),
									n = [];
								return (
									n.push('0.749023 g'),
									n.push(
										'0 0 ' +
											h(X.internal.getWidth(t)) +
											' ' +
											h(X.internal.getHeight(t)) +
											' re'
									),
									n.push('f'),
									(e.stream = n.join('\n')),
									e
								);
							},
						},
						RadioButton: {
							Circle: {
								createAppearanceStream: function (t) {
									var e = {D: {Off: X.RadioButton.Circle.OffPushDown}, N: {}};
									return (
										(e.N[t] = X.RadioButton.Circle.YesNormal),
										(e.D[t] = X.RadioButton.Circle.YesPushDown),
										e
									);
								},
								getCA: function () {
									return 'l';
								},
								YesNormal: function (t) {
									var e = p(t),
										n = [],
										r =
											X.internal.getWidth(t) <= X.internal.getHeight(t)
												? X.internal.getWidth(t) / 4
												: X.internal.getHeight(t) / 4;
									r = Number((0.9 * r).toFixed(5));
									var i = X.internal.Bezier_C,
										o = Number((r * i).toFixed(5));
									return (
										n.push('q'),
										n.push(
											'1 0 0 1 ' +
												u(X.internal.getWidth(t) / 2) +
												' ' +
												u(X.internal.getHeight(t) / 2) +
												' cm'
										),
										n.push(r + ' 0 m'),
										n.push(r + ' ' + o + ' ' + o + ' ' + r + ' 0 ' + r + ' c'),
										n.push(
											'-' + o + ' ' + r + ' -' + r + ' ' + o + ' -' + r + ' 0 c'
										),
										n.push(
											'-' +
												r +
												' -' +
												o +
												' -' +
												o +
												' -' +
												r +
												' 0 -' +
												r +
												' c'
										),
										n.push(
											o + ' -' + r + ' ' + r + ' -' + o + ' ' + r + ' 0 c'
										),
										n.push('f'),
										n.push('Q'),
										(e.stream = n.join('\n')),
										e
									);
								},
								YesPushDown: function (t) {
									var e = p(t),
										n = [],
										r =
											X.internal.getWidth(t) <= X.internal.getHeight(t)
												? X.internal.getWidth(t) / 4
												: X.internal.getHeight(t) / 4,
										i =
											((r = Number((0.9 * r).toFixed(5))),
											Number((2 * r).toFixed(5))),
										o = Number((i * X.internal.Bezier_C).toFixed(5)),
										a = Number((r * X.internal.Bezier_C).toFixed(5));
									return (
										n.push('0.749023 g'),
										n.push('q'),
										n.push(
											'1 0 0 1 ' +
												u(X.internal.getWidth(t) / 2) +
												' ' +
												u(X.internal.getHeight(t) / 2) +
												' cm'
										),
										n.push(i + ' 0 m'),
										n.push(i + ' ' + o + ' ' + o + ' ' + i + ' 0 ' + i + ' c'),
										n.push(
											'-' + o + ' ' + i + ' -' + i + ' ' + o + ' -' + i + ' 0 c'
										),
										n.push(
											'-' +
												i +
												' -' +
												o +
												' -' +
												o +
												' -' +
												i +
												' 0 -' +
												i +
												' c'
										),
										n.push(
											o + ' -' + i + ' ' + i + ' -' + o + ' ' + i + ' 0 c'
										),
										n.push('f'),
										n.push('Q'),
										n.push('0 g'),
										n.push('q'),
										n.push(
											'1 0 0 1 ' +
												u(X.internal.getWidth(t) / 2) +
												' ' +
												u(X.internal.getHeight(t) / 2) +
												' cm'
										),
										n.push(r + ' 0 m'),
										n.push(r + ' ' + a + ' ' + a + ' ' + r + ' 0 ' + r + ' c'),
										n.push(
											'-' + a + ' ' + r + ' -' + r + ' ' + a + ' -' + r + ' 0 c'
										),
										n.push(
											'-' +
												r +
												' -' +
												a +
												' -' +
												a +
												' -' +
												r +
												' 0 -' +
												r +
												' c'
										),
										n.push(
											a + ' -' + r + ' ' + r + ' -' + a + ' ' + r + ' 0 c'
										),
										n.push('f'),
										n.push('Q'),
										(e.stream = n.join('\n')),
										e
									);
								},
								OffPushDown: function (t) {
									var e = p(t),
										n = [],
										r =
											X.internal.getWidth(t) <= X.internal.getHeight(t)
												? X.internal.getWidth(t) / 4
												: X.internal.getHeight(t) / 4,
										i =
											((r = Number((0.9 * r).toFixed(5))),
											Number((2 * r).toFixed(5))),
										o = Number((i * X.internal.Bezier_C).toFixed(5));
									return (
										n.push('0.749023 g'),
										n.push('q'),
										n.push(
											'1 0 0 1 ' +
												u(X.internal.getWidth(t) / 2) +
												' ' +
												u(X.internal.getHeight(t) / 2) +
												' cm'
										),
										n.push(i + ' 0 m'),
										n.push(i + ' ' + o + ' ' + o + ' ' + i + ' 0 ' + i + ' c'),
										n.push(
											'-' + o + ' ' + i + ' -' + i + ' ' + o + ' -' + i + ' 0 c'
										),
										n.push(
											'-' +
												i +
												' -' +
												o +
												' -' +
												o +
												' -' +
												i +
												' 0 -' +
												i +
												' c'
										),
										n.push(
											o + ' -' + i + ' ' + i + ' -' + o + ' ' + i + ' 0 c'
										),
										n.push('f'),
										n.push('Q'),
										(e.stream = n.join('\n')),
										e
									);
								},
							},
							Cross: {
								createAppearanceStream: function (t) {
									var e = {D: {Off: X.RadioButton.Cross.OffPushDown}, N: {}};
									return (
										(e.N[t] = X.RadioButton.Cross.YesNormal),
										(e.D[t] = X.RadioButton.Cross.YesPushDown),
										e
									);
								},
								getCA: function () {
									return '8';
								},
								YesNormal: function (t) {
									var e = p(t),
										n = [],
										r = X.internal.calculateCross(t);
									return (
										n.push('q'),
										n.push(
											'1 1 ' +
												h(X.internal.getWidth(t) - 2) +
												' ' +
												h(X.internal.getHeight(t) - 2) +
												' re'
										),
										n.push('W'),
										n.push('n'),
										n.push(h(r.x1.x) + ' ' + h(r.x1.y) + ' m'),
										n.push(h(r.x2.x) + ' ' + h(r.x2.y) + ' l'),
										n.push(h(r.x4.x) + ' ' + h(r.x4.y) + ' m'),
										n.push(h(r.x3.x) + ' ' + h(r.x3.y) + ' l'),
										n.push('s'),
										n.push('Q'),
										(e.stream = n.join('\n')),
										e
									);
								},
								YesPushDown: function (t) {
									var e = p(t),
										n = X.internal.calculateCross(t),
										r = [];
									return (
										r.push('0.749023 g'),
										r.push(
											'0 0 ' +
												h(X.internal.getWidth(t)) +
												' ' +
												h(X.internal.getHeight(t)) +
												' re'
										),
										r.push('f'),
										r.push('q'),
										r.push(
											'1 1 ' +
												h(X.internal.getWidth(t) - 2) +
												' ' +
												h(X.internal.getHeight(t) - 2) +
												' re'
										),
										r.push('W'),
										r.push('n'),
										r.push(h(n.x1.x) + ' ' + h(n.x1.y) + ' m'),
										r.push(h(n.x2.x) + ' ' + h(n.x2.y) + ' l'),
										r.push(h(n.x4.x) + ' ' + h(n.x4.y) + ' m'),
										r.push(h(n.x3.x) + ' ' + h(n.x3.y) + ' l'),
										r.push('s'),
										r.push('Q'),
										(e.stream = r.join('\n')),
										e
									);
								},
								OffPushDown: function (t) {
									var e = p(t),
										n = [];
									return (
										n.push('0.749023 g'),
										n.push(
											'0 0 ' +
												h(X.internal.getWidth(t)) +
												' ' +
												h(X.internal.getHeight(t)) +
												' re'
										),
										n.push('f'),
										(e.stream = n.join('\n')),
										e
									);
								},
							},
						},
						createDefaultAppearanceStream: function (t) {
							var e = n.internal.getFont(t.fontName, t.fontStyle).id,
								r = n.__private__.encodeColorString(t.color);
							return '/' + e + ' ' + t.fontSize + ' Tf ' + r;
						},
					};
					(X.internal = {
						Bezier_C: 0.551915024494,
						calculateCross: function (t) {
							var e = X.internal.getWidth(t),
								n = X.internal.getHeight(t),
								r = Math.min(e, n);
							return {
								x1: {x: (e - r) / 2, y: (n - r) / 2 + r},
								x2: {x: (e - r) / 2 + r, y: (n - r) / 2},
								x3: {x: (e - r) / 2, y: (n - r) / 2},
								x4: {x: (e - r) / 2 + r, y: (n - r) / 2 + r},
							};
						},
					}),
						(X.internal.getWidth = function (t) {
							var e = 0;
							return 'object' === r(t) && (e = c(t.Rect[2])), e;
						}),
						(X.internal.getHeight = function (t) {
							var e = 0;
							return 'object' === r(t) && (e = c(t.Rect[3])), e;
						});
					var K = (t.addField = function (t) {
						if ((C.call(this), !(t instanceof q)))
							throw new Error('Invalid argument passed to jsPDF.addField.');
						return (
							function (t) {
								n.internal.acroformPlugin.printedOut &&
									((n.internal.acroformPlugin.printedOut = !1),
									(n.internal.acroformPlugin.acroFormDictionaryRoot = null)),
									n.internal.acroformPlugin.acroFormDictionaryRoot || C.call(n),
									n.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(
										t
									);
							}.call(this, t),
							(t.page = n.internal.getCurrentPageInfo().pageNumber),
							this
						);
					});
					(t.addButton = function (t) {
						if (t instanceof z == 0)
							throw new Error('Invalid argument passed to jsPDF.addButton.');
						return K.call(this, t);
					}),
						(t.addTextField = function (t) {
							if (t instanceof Y == 0)
								throw new Error(
									'Invalid argument passed to jsPDF.addTextField.'
								);
							return K.call(this, t);
						}),
						(t.addChoiceField = function (t) {
							if (t instanceof T == 0)
								throw new Error(
									'Invalid argument passed to jsPDF.addChoiceField.'
								);
							return K.call(this, t);
						}),
						'object' == r(e) &&
						void 0 === e.ChoiceField &&
						void 0 === e.ListBox &&
						void 0 === e.ComboBox &&
						void 0 === e.EditBox &&
						void 0 === e.Button &&
						void 0 === e.PushButton &&
						void 0 === e.RadioButton &&
						void 0 === e.CheckBox &&
						void 0 === e.TextField &&
						void 0 === e.PasswordField
							? ((e.ChoiceField = T),
							  (e.ListBox = R),
							  (e.ComboBox = D),
							  (e.EditBox = U),
							  (e.Button = z),
							  (e.PushButton = H),
							  (e.RadioButton = W),
							  (e.CheckBox = G),
							  (e.TextField = Y),
							  (e.PasswordField = J),
							  (e.AcroForm = {Appearance: X}))
							: o.warn(
									'AcroForm-Classes are not populated into global-namespace, because the class-Names exist already.'
							  ),
						(t.AcroFormChoiceField = T),
						(t.AcroFormListBox = R),
						(t.AcroFormComboBox = D),
						(t.AcroFormEditBox = U),
						(t.AcroFormButton = z),
						(t.AcroFormPushButton = H),
						(t.AcroFormRadioButton = W),
						(t.AcroFormCheckBox = G),
						(t.AcroFormTextField = Y),
						(t.AcroFormPasswordField = J),
						(t.AcroFormAppearance = X),
						(t.AcroForm = {
							ChoiceField: T,
							ListBox: R,
							ComboBox: D,
							EditBox: U,
							Button: z,
							PushButton: H,
							RadioButton: W,
							CheckBox: G,
							TextField: Y,
							PasswordField: J,
							Appearance: X,
						});
				})(
					(window.tmp = dt).API,
					('undefined' != typeof window && window) || (void 0 !== n.g && n.g)
				),
					(function (t) {
						var e = 'addImage_',
							n = {
								PNG: [[137, 80, 78, 71]],
								TIFF: [
									[77, 77, 0, 42],
									[73, 73, 42, 0],
								],
								JPEG: [
									[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
									[255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
								],
								JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
								GIF87a: [[71, 73, 70, 56, 55, 97]],
								GIF89a: [[71, 73, 70, 56, 57, 97]],
								BMP: [
									[66, 77],
									[66, 65],
									[67, 73],
									[67, 80],
									[73, 67],
									[80, 84],
								],
							},
							i = (t.getImageFileTypeByImageData = function (e, r) {
								var i, a;
								r = r || 'UNKNOWN';
								var s,
									h,
									u,
									l = 'UNKNOWN';
								for (u in (t.isArrayBufferView(e) &&
									(e = t.arrayBufferToBinaryString(e)),
								n))
									for (s = n[u], i = 0; i < s.length; i += 1) {
										for (h = !0, a = 0; a < s[i].length; a += 1)
											if (void 0 !== s[i][a] && s[i][a] !== e.charCodeAt(a)) {
												h = !1;
												break;
											}
										if (!0 === h) {
											l = u;
											break;
										}
									}
								return (
									'UNKNOWN' === l &&
										'UNKNOWN' !== r &&
										(o.warn(
											'FileType of Image not recognized. Processing image as "' +
												r +
												'".'
										),
										(l = r)),
									l
								);
							}),
							a = function t(e) {
								for (
									var n = this.internal.newObject(),
										r = this.internal.write,
										i = this.internal.putStream,
										o = (0, this.internal.getFilters)();
									-1 !== o.indexOf('FlateEncode');

								)
									o.splice(o.indexOf('FlateEncode'), 1);
								e.n = n;
								var a = [];
								if (
									(a.push({key: 'Type', value: '/XObject'}),
									a.push({key: 'Subtype', value: '/Image'}),
									a.push({key: 'Width', value: e.w}),
									a.push({key: 'Height', value: e.h}),
									e.cs === this.color_spaces.INDEXED
										? a.push({
												key: 'ColorSpace',
												value:
													'[/Indexed /DeviceRGB ' +
													(e.pal.length / 3 - 1) +
													' ' +
													('smask' in e ? n + 2 : n + 1) +
													' 0 R]',
										  })
										: (a.push({key: 'ColorSpace', value: '/' + e.cs}),
										  e.cs === this.color_spaces.DEVICE_CMYK &&
												a.push({key: 'Decode', value: '[1 0 1 0 1 0 1 0]'})),
									a.push({key: 'BitsPerComponent', value: e.bpc}),
									'dp' in e &&
										a.push({key: 'DecodeParms', value: '<<' + e.dp + '>>'}),
									'trns' in e && e.trns.constructor == Array)
								) {
									for (var s = '', h = 0, u = e.trns.length; h < u; h++)
										s += e.trns[h] + ' ' + e.trns[h] + ' ';
									a.push({key: 'Mask', value: '[' + s + ']'});
								}
								'smask' in e && a.push({key: 'SMask', value: n + 1 + ' 0 R'});
								var l = void 0 !== e.f ? ['/' + e.f] : void 0;
								if (
									(i({
										data: e.data,
										additionalKeyValues: a,
										alreadyAppliedFilters: l,
									}),
									r('endobj'),
									'smask' in e)
								) {
									var c =
											'/Predictor ' +
											e.p +
											' /Colors 1 /BitsPerComponent ' +
											e.bpc +
											' /Columns ' +
											e.w,
										f = {
											w: e.w,
											h: e.h,
											cs: 'DeviceGray',
											bpc: e.bpc,
											dp: c,
											data: e.smask,
										};
									'f' in e && (f.f = e.f), t.call(this, f);
								}
								e.cs === this.color_spaces.INDEXED &&
									(this.internal.newObject(),
									i({
										data: this.arrayBufferToBinaryString(new Uint8Array(e.pal)),
									}),
									r('endobj'));
							},
							s = function () {
								var t = this.internal.collections[e + 'images'];
								for (var n in t) a.call(this, t[n]);
							},
							h = function () {
								var t,
									n = this.internal.collections[e + 'images'],
									r = this.internal.write;
								for (var i in n) r('/I' + (t = n[i]).i, t.n, '0', 'R');
							},
							u = function (e) {
								return 'function' == typeof t['process' + e.toUpperCase()];
							},
							l = function (t) {
								return 'object' === r(t) && 1 === t.nodeType;
							},
							c = function (e, n) {
								if ('IMG' === e.nodeName && e.hasAttribute('src')) {
									var r = '' + e.getAttribute('src');
									if (0 === r.indexOf('data:image/')) return unescape(r);
									var i = t.loadFile(r);
									if (void 0 !== i) return btoa(i);
								}
								if ('CANVAS' === e.nodeName) {
									var o = e;
									return e.toDataURL('image/jpeg', 1);
								}
								((o = document.createElement('canvas')).width =
									e.clientWidth || e.width),
									(o.height = e.clientHeight || e.height);
								var a = o.getContext('2d');
								if (!a)
									throw 'addImage requires canvas to be supported by browser.';
								return (
									a.drawImage(e, 0, 0, o.width, o.height),
									o.toDataURL(
										'png' == ('' + n).toLowerCase() ? 'image/png' : 'image/jpeg'
									)
								);
							},
							f = function (t, e) {
								var n;
								if (e)
									for (var r in e)
										if (t === e[r].alias) {
											n = e[r];
											break;
										}
								return n;
							};
						(t.color_spaces = {
							DEVICE_RGB: 'DeviceRGB',
							DEVICE_GRAY: 'DeviceGray',
							DEVICE_CMYK: 'DeviceCMYK',
							CAL_GREY: 'CalGray',
							CAL_RGB: 'CalRGB',
							LAB: 'Lab',
							ICC_BASED: 'ICCBased',
							INDEXED: 'Indexed',
							PATTERN: 'Pattern',
							SEPARATION: 'Separation',
							DEVICE_N: 'DeviceN',
						}),
							(t.decode = {
								DCT_DECODE: 'DCTDecode',
								FLATE_DECODE: 'FlateDecode',
								LZW_DECODE: 'LZWDecode',
								JPX_DECODE: 'JPXDecode',
								JBIG2_DECODE: 'JBIG2Decode',
								ASCII85_DECODE: 'ASCII85Decode',
								ASCII_HEX_DECODE: 'ASCIIHexDecode',
								RUN_LENGTH_DECODE: 'RunLengthDecode',
								CCITT_FAX_DECODE: 'CCITTFaxDecode',
							}),
							(t.image_compression = {
								NONE: 'NONE',
								FAST: 'FAST',
								MEDIUM: 'MEDIUM',
								SLOW: 'SLOW',
							}),
							(t.sHashCode = function (t) {
								var e,
									n = 0;
								if (0 === (t = t || '').length) return n;
								for (e = 0; e < t.length; e++)
									(n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
								return n;
							}),
							(t.isString = function (t) {
								return 'string' == typeof t;
							}),
							(t.validateStringAsBase64 = function (t) {
								(t = t || '').toString().trim();
								var e = !0;
								return (
									0 === t.length && (e = !1),
									t.length % 4 != 0 && (e = !1),
									!1 === /^[A-Za-z0-9+\/]+$/.test(t.substr(0, t.length - 2)) &&
										(e = !1),
									!1 ===
										/^[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==$/.test(
											t.substr(-2)
										) && (e = !1),
									e
								);
							}),
							(t.extractInfoFromBase64DataURI = function (t) {
								return /^data:([\w]+?\/([\w]+?));\S*;*base64,(.+)$/g.exec(t);
							}),
							(t.extractImageFromDataUrl = function (t) {
								var e = (t = t || '').split('base64,'),
									n = null;
								if (2 === e.length) {
									var r = /^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e[0]);
									Array.isArray(r) &&
										(n = {mimeType: r[1], charset: r[2], data: e[1]});
								}
								return n;
							}),
							(t.supportsArrayBuffer = function () {
								return (
									'undefined' != typeof ArrayBuffer &&
									'undefined' != typeof Uint8Array
								);
							}),
							(t.isArrayBuffer = function (t) {
								return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer;
							}),
							(t.isArrayBufferView = function (t) {
								return (
									!!this.supportsArrayBuffer() &&
									'undefined' != typeof Uint32Array &&
									(t instanceof Int8Array ||
										t instanceof Uint8Array ||
										('undefined' != typeof Uint8ClampedArray &&
											t instanceof Uint8ClampedArray) ||
										t instanceof Int16Array ||
										t instanceof Uint16Array ||
										t instanceof Int32Array ||
										t instanceof Uint32Array ||
										t instanceof Float32Array ||
										t instanceof Float64Array)
								);
							}),
							(t.binaryStringToUint8Array = function (t) {
								for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++)
									n[r] = t.charCodeAt(r);
								return n;
							}),
							(t.arrayBufferToBinaryString = function (t) {
								if ('function' == typeof atob)
									return atob(this.arrayBufferToBase64(t));
							}),
							(t.arrayBufferToBase64 = function (t) {
								for (
									var e,
										n = '',
										r =
											'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
										i = new Uint8Array(t),
										o = i.byteLength,
										a = o % 3,
										s = o - a,
										h = 0;
									h < s;
									h += 3
								)
									n +=
										r[
											(16515072 &
												(e = (i[h] << 16) | (i[h + 1] << 8) | i[h + 2])) >>
												18
										] +
										r[(258048 & e) >> 12] +
										r[(4032 & e) >> 6] +
										r[63 & e];
								return (
									1 == a
										? (n += r[(252 & (e = i[s])) >> 2] + r[(3 & e) << 4] + '==')
										: 2 == a &&
										  (n +=
												r[(64512 & (e = (i[s] << 8) | i[s + 1])) >> 10] +
												r[(1008 & e) >> 4] +
												r[(15 & e) << 2] +
												'='),
									n
								);
							}),
							(t.createImageInfo = function (
								t,
								e,
								n,
								r,
								i,
								o,
								a,
								s,
								h,
								u,
								l,
								c,
								f
							) {
								var p = {alias: s, w: e, h: n, cs: r, bpc: i, i: a, data: t};
								return (
									o && (p.f = o),
									h && (p.dp = h),
									u && (p.trns = u),
									l && (p.pal = l),
									c && (p.smask = c),
									f && (p.p = f),
									p
								);
							}),
							(t.addImage = function (n, i, a, p, d, g, m, y, v) {
								var w = '';
								if ('string' != typeof i) {
									var b = g;
									(g = d), (d = p), (p = a), (a = i), (i = b);
								}
								if ('object' === r(n) && !l(n) && 'imageData' in n) {
									var x = n;
									(n = x.imageData),
										(i = x.format || i || 'UNKNOWN'),
										(a = x.x || a || 0),
										(p = x.y || p || 0),
										(d = x.w || d),
										(g = x.h || g),
										(m = x.alias || m),
										(y = x.compression || y),
										(v = x.rotation || x.angle || v);
								}
								var N = this.internal.getFilters();
								if (
									(void 0 === y &&
										-1 !== N.indexOf('FlateEncode') &&
										(y = 'SLOW'),
									'string' == typeof n && (n = unescape(n)),
									isNaN(a) || isNaN(p))
								)
									throw (
										(o.error('jsPDF.addImage: Invalid coordinates', arguments),
										new Error('Invalid coordinates passed to jsPDF.addImage'))
									);
								var L,
									A,
									S,
									_,
									F,
									P,
									k,
									I = function () {
										var t = this.internal.collections[e + 'images'];
										return (
											t ||
												((this.internal.collections[e + 'images'] = t = {}),
												this.internal.events.subscribe('putResources', s),
												this.internal.events.subscribe('putXobjectDict', h)),
											t
										);
									}.call(this);
								if (
									!(
										(L = f(n, I)) ||
										(l(n) && (n = c(n, i)),
										(null == (k = m) || 0 === k.length) &&
											(m =
												'string' == typeof (P = n)
													? t.sHashCode(P)
													: t.isArrayBufferView(P)
													? t.sHashCode(t.arrayBufferToBinaryString(P))
													: null),
										(L = f(m, I)))
									)
								) {
									if (
										(this.isString(n) &&
											('' !== (w = this.convertStringToImageData(n)) ||
												void 0 !== (w = t.loadFile(n))) &&
											(n = w),
										(i = this.getImageFileTypeByImageData(n, i)),
										!u(i))
									)
										throw new Error(
											"addImage does not support files of type '" +
												i +
												"', please ensure that a plugin for '" +
												i +
												"' support is added."
										);
									if (
										(this.supportsArrayBuffer() &&
											(n instanceof Uint8Array ||
												((A = n), (n = this.binaryStringToUint8Array(n)))),
										!(L = this['process' + i.toUpperCase()](
											n,
											((F = 0),
											(_ = I) &&
												(F = Object.keys
													? Object.keys(_).length
													: (function (t) {
															var e = 0;
															for (var n in t) t.hasOwnProperty(n) && e++;
															return e;
													  })(_)),
											F),
											m,
											((S = y) && 'string' == typeof S && (S = S.toUpperCase()),
											S in t.image_compression ? S : t.image_compression.NONE),
											A
										)))
									)
										throw new Error(
											'An unknown error occurred whilst processing the image'
										);
								}
								return (
									function (t, e, n, r, i, o, a, s) {
										var h = function (t, e, n) {
												return (
													t || e || (e = t = -96),
													t < 0 &&
														(t =
															(-1 * n.w * 72) / t / this.internal.scaleFactor),
													e < 0 &&
														(e =
															(-1 * n.h * 72) / e / this.internal.scaleFactor),
													0 === t && (t = (e * n.w) / n.h),
													0 === e && (e = (t * n.h) / n.w),
													[t, e]
												);
											}.call(this, n, r, i),
											u = this.internal.getCoordinateString,
											l = this.internal.getVerticalCoordinateString;
										if (((n = h[0]), (r = h[1]), (a[o] = i), s)) {
											s *= Math.PI / 180;
											var c = Math.cos(s),
												f = Math.sin(s),
												p = function (t) {
													return t.toFixed(4);
												},
												d = [p(c), p(f), p(-1 * f), p(c), 0, 0, 'cm'];
										}
										this.internal.write('q'),
											s
												? (this.internal.write(
														[1, '0', '0', 1, u(t), l(e + r), 'cm'].join(' ')
												  ),
												  this.internal.write(d.join(' ')),
												  this.internal.write(
														[u(n), '0', '0', u(r), '0', '0', 'cm'].join(' ')
												  ))
												: this.internal.write(
														[u(n), '0', '0', u(r), u(t), l(e + r), 'cm'].join(
															' '
														)
												  ),
											this.internal.write('/I' + i.i + ' Do'),
											this.internal.write('Q');
									}.call(this, a, p, d, g, L, L.i, I, v),
									this
								);
							}),
							(t.convertStringToImageData = function (e) {
								var n,
									r = '';
								if (this.isString(e)) {
									var i;
									n =
										null !== (i = this.extractImageFromDataUrl(e)) ? i.data : e;
									try {
										r = atob(n);
									} catch (e) {
										throw t.validateStringAsBase64(n)
											? new Error(
													'atob-Error in jsPDF.convertStringToImageData ' +
														e.message
											  )
											: new Error(
													'Supplied Data is not a valid base64-String jsPDF.convertStringToImageData '
											  );
									}
								}
								return r;
							});
						var p = function (t, e) {
							return t.subarray(e, e + 5);
						};
						(t.processJPEG = function (t, e, n, r, o, a) {
							var s,
								h = this.decode.DCT_DECODE;
							if (
								!this.isString(t) &&
								!this.isArrayBuffer(t) &&
								!this.isArrayBufferView(t)
							)
								return null;
							if (
								(this.isString(t) &&
									(s = (function (t) {
										var e;
										if ('JPEG' !== i(t))
											throw new Error(
												'getJpegSize requires a binary string jpeg file'
											);
										for (
											var n = 256 * t.charCodeAt(4) + t.charCodeAt(5),
												r = 4,
												o = t.length;
											r < o;

										) {
											if (((r += n), 255 !== t.charCodeAt(r)))
												throw new Error(
													'getJpegSize could not find the size of the image'
												);
											if (
												192 === t.charCodeAt(r + 1) ||
												193 === t.charCodeAt(r + 1) ||
												194 === t.charCodeAt(r + 1) ||
												195 === t.charCodeAt(r + 1) ||
												196 === t.charCodeAt(r + 1) ||
												197 === t.charCodeAt(r + 1) ||
												198 === t.charCodeAt(r + 1) ||
												199 === t.charCodeAt(r + 1)
											)
												return (
													(e = 256 * t.charCodeAt(r + 5) + t.charCodeAt(r + 6)),
													[
														256 * t.charCodeAt(r + 7) + t.charCodeAt(r + 8),
														e,
														t.charCodeAt(r + 9),
													]
												);
											(r += 2),
												(n = 256 * t.charCodeAt(r) + t.charCodeAt(r + 1));
										}
									})(t)),
								this.isArrayBuffer(t) && (t = new Uint8Array(t)),
								this.isArrayBufferView(t) &&
									((s = (function (t) {
										if (65496 != ((t[0] << 8) | t[1]))
											throw new Error('Supplied data is not a JPEG');
										for (
											var e, n = t.length, r = (t[4] << 8) + t[5], i = 4;
											i < n;

										) {
											if (
												((r = ((e = p(t, (i += r)))[2] << 8) + e[3]),
												(192 === e[1] || 194 === e[1]) && 255 === e[0] && 7 < r)
											)
												return {
													width: ((e = p(t, i + 5))[2] << 8) + e[3],
													height: (e[0] << 8) + e[1],
													numcomponents: e[4],
												};
											i += 2;
										}
										throw new Error(
											'getJpegSizeFromBytes could not find the size of the image'
										);
									})(t)),
									(t = o || this.arrayBufferToBinaryString(t))),
								void 0 === a)
							)
								switch (s.numcomponents) {
									case 1:
										a = this.color_spaces.DEVICE_GRAY;
										break;
									case 4:
										a = this.color_spaces.DEVICE_CMYK;
										break;
									default:
										a = this.color_spaces.DEVICE_RGB;
								}
							return this.createImageInfo(t, s.width, s.height, a, 8, h, e, n);
						}),
							(t.processJPG = function () {
								return this.processJPEG.apply(this, arguments);
							}),
							(t.getImageProperties = function (e) {
								var n,
									r,
									i = '';
								if (
									(l(e) && (e = c(e)),
									this.isString(e) &&
										('' !== (i = this.convertStringToImageData(e)) ||
											void 0 !== (i = t.loadFile(e))) &&
										(e = i),
									(r = this.getImageFileTypeByImageData(e)),
									!u(r))
								)
									throw new Error(
										"addImage does not support files of type '" +
											r +
											"', please ensure that a plugin for '" +
											r +
											"' support is added."
									);
								if (
									(this.supportsArrayBuffer() &&
										(e instanceof Uint8Array ||
											(e = this.binaryStringToUint8Array(e))),
									!(n = this['process' + r.toUpperCase()](e)))
								)
									throw new Error(
										'An unknown error occurred whilst processing the image'
									);
								return {
									fileType: r,
									width: n.w,
									height: n.h,
									colorSpace: n.cs,
									compressionMode: n.f,
									bitsPerComponent: n.bpc,
								};
							});
					})(dt.API),
					(a = dt.API),
					dt.API.events.push([
						'addPage',
						function (t) {
							this.internal.getPageInfo(t.pageNumber).pageContext.annotations =
								[];
						},
					]),
					a.events.push([
						'putPage',
						function (t) {
							for (
								var e = this.internal.getPageInfoByObjId(t.objId),
									n = t.pageContext.annotations,
									r = function (t) {
										if (void 0 !== t && '' != t) return !0;
									},
									i = !1,
									o = 0;
								o < n.length && !i;
								o++
							)
								switch ((h = n[o]).type) {
									case 'link':
										if (r(h.options.url) || r(h.options.pageNumber)) {
											i = !0;
											break;
										}
									case 'reference':
									case 'text':
									case 'freetext':
										i = !0;
								}
							if (0 != i) {
								this.internal.write('/Annots ['), this.internal.pageSize.height;
								var a = this.internal.getCoordinateString,
									s = this.internal.getVerticalCoordinateString;
								for (o = 0; o < n.length; o++) {
									var h;
									switch ((h = n[o]).type) {
										case 'reference':
											this.internal.write(' ' + h.object.objId + ' 0 R ');
											break;
										case 'text':
											var u = this.internal.newAdditionalObject(),
												l = this.internal.newAdditionalObject(),
												c = h.title || 'Note';
											(m =
												'<</Type /Annot /Subtype /Text ' +
												(p =
													'/Rect [' +
													a(h.bounds.x) +
													' ' +
													s(h.bounds.y + h.bounds.h) +
													' ' +
													a(h.bounds.x + h.bounds.w) +
													' ' +
													s(h.bounds.y) +
													'] ') +
												'/Contents (' +
												h.contents +
												')'),
												(m += ' /Popup ' + l.objId + ' 0 R'),
												(m += ' /P ' + e.objId + ' 0 R'),
												(m += ' /T (' + c + ') >>'),
												(u.content = m);
											var f = u.objId + ' 0 R';
											(m =
												'<</Type /Annot /Subtype /Popup ' +
												(p =
													'/Rect [' +
													a(h.bounds.x + 30) +
													' ' +
													s(h.bounds.y + h.bounds.h) +
													' ' +
													a(h.bounds.x + h.bounds.w + 30) +
													' ' +
													s(h.bounds.y) +
													'] ') +
												' /Parent ' +
												f),
												h.open && (m += ' /Open true'),
												(m += ' >>'),
												(l.content = m),
												this.internal.write(u.objId, '0 R', l.objId, '0 R');
											break;
										case 'freetext':
											var p =
													'/Rect [' +
													a(h.bounds.x) +
													' ' +
													s(h.bounds.y) +
													' ' +
													a(h.bounds.x + h.bounds.w) +
													' ' +
													s(h.bounds.y + h.bounds.h) +
													'] ',
												d = h.color || '#000000';
											(m =
												'<</Type /Annot /Subtype /FreeText ' +
												p +
												'/Contents (' +
												h.contents +
												')'),
												(m +=
													' /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#' +
													d +
													')'),
												(m += ' /Border [0 0 0]'),
												(m += ' >>'),
												this.internal.write(m);
											break;
										case 'link':
											if (h.options.name) {
												var g = this.annotations._nameMap[h.options.name];
												(h.options.pageNumber = g.page), (h.options.top = g.y);
											} else h.options.top || (h.options.top = 0);
											p =
												'/Rect [' +
												a(h.x) +
												' ' +
												s(h.y) +
												' ' +
												a(h.x + h.w) +
												' ' +
												s(h.y + h.h) +
												'] ';
											var m = '';
											if (h.options.url)
												m =
													'<</Type /Annot /Subtype /Link ' +
													p +
													'/Border [0 0 0] /A <</S /URI /URI (' +
													h.options.url +
													') >>';
											else if (h.options.pageNumber)
												switch (
													((m =
														'<</Type /Annot /Subtype /Link ' +
														p +
														'/Border [0 0 0] /Dest [' +
														this.internal.getPageInfo(h.options.pageNumber)
															.objId +
														' 0 R'),
													(h.options.magFactor = h.options.magFactor || 'XYZ'),
													h.options.magFactor)
												) {
													case 'Fit':
														m += ' /Fit]';
														break;
													case 'FitH':
														m += ' /FitH ' + h.options.top + ']';
														break;
													case 'FitV':
														(h.options.left = h.options.left || 0),
															(m += ' /FitV ' + h.options.left + ']');
														break;
													default:
														var y = s(h.options.top);
														(h.options.left = h.options.left || 0),
															void 0 === h.options.zoom && (h.options.zoom = 0),
															(m +=
																' /XYZ ' +
																h.options.left +
																' ' +
																y +
																' ' +
																h.options.zoom +
																']');
												}
											'' != m && ((m += ' >>'), this.internal.write(m));
									}
								}
								this.internal.write(']');
							}
						},
					]),
					(a.createAnnotation = function (t) {
						var e = this.internal.getCurrentPageInfo();
						switch (t.type) {
							case 'link':
								this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
								break;
							case 'text':
							case 'freetext':
								e.pageContext.annotations.push(t);
						}
					}),
					(a.link = function (t, e, n, r, i) {
						this.internal
							.getCurrentPageInfo()
							.pageContext.annotations.push({
								x: t,
								y: e,
								w: n,
								h: r,
								options: i,
								type: 'link',
							});
					}),
					(a.textWithLink = function (t, e, n, r) {
						var i = this.getTextWidth(t),
							o = this.internal.getLineHeight() / this.internal.scaleFactor;
						return (
							this.text(t, e, n),
							(n += 0.2 * o),
							this.link(e, n - o, i, o, r),
							i
						);
					}),
					(a.getTextWidth = function (t) {
						var e = this.internal.getFontSize();
						return (this.getStringUnitWidth(t) * e) / this.internal.scaleFactor;
					}),
					(function (t) {
						var e = {
								1569: [65152],
								1570: [65153, 65154],
								1571: [65155, 65156],
								1572: [65157, 65158],
								1573: [65159, 65160],
								1574: [65161, 65162, 65163, 65164],
								1575: [65165, 65166],
								1576: [65167, 65168, 65169, 65170],
								1577: [65171, 65172],
								1578: [65173, 65174, 65175, 65176],
								1579: [65177, 65178, 65179, 65180],
								1580: [65181, 65182, 65183, 65184],
								1581: [65185, 65186, 65187, 65188],
								1582: [65189, 65190, 65191, 65192],
								1583: [65193, 65194],
								1584: [65195, 65196],
								1585: [65197, 65198],
								1586: [65199, 65200],
								1587: [65201, 65202, 65203, 65204],
								1588: [65205, 65206, 65207, 65208],
								1589: [65209, 65210, 65211, 65212],
								1590: [65213, 65214, 65215, 65216],
								1591: [65217, 65218, 65219, 65220],
								1592: [65221, 65222, 65223, 65224],
								1593: [65225, 65226, 65227, 65228],
								1594: [65229, 65230, 65231, 65232],
								1601: [65233, 65234, 65235, 65236],
								1602: [65237, 65238, 65239, 65240],
								1603: [65241, 65242, 65243, 65244],
								1604: [65245, 65246, 65247, 65248],
								1605: [65249, 65250, 65251, 65252],
								1606: [65253, 65254, 65255, 65256],
								1607: [65257, 65258, 65259, 65260],
								1608: [65261, 65262],
								1609: [65263, 65264, 64488, 64489],
								1610: [65265, 65266, 65267, 65268],
								1649: [64336, 64337],
								1655: [64477],
								1657: [64358, 64359, 64360, 64361],
								1658: [64350, 64351, 64352, 64353],
								1659: [64338, 64339, 64340, 64341],
								1662: [64342, 64343, 64344, 64345],
								1663: [64354, 64355, 64356, 64357],
								1664: [64346, 64347, 64348, 64349],
								1667: [64374, 64375, 64376, 64377],
								1668: [64370, 64371, 64372, 64373],
								1670: [64378, 64379, 64380, 64381],
								1671: [64382, 64383, 64384, 64385],
								1672: [64392, 64393],
								1676: [64388, 64389],
								1677: [64386, 64387],
								1678: [64390, 64391],
								1681: [64396, 64397],
								1688: [64394, 64395],
								1700: [64362, 64363, 64364, 64365],
								1702: [64366, 64367, 64368, 64369],
								1705: [64398, 64399, 64400, 64401],
								1709: [64467, 64468, 64469, 64470],
								1711: [64402, 64403, 64404, 64405],
								1713: [64410, 64411, 64412, 64413],
								1715: [64406, 64407, 64408, 64409],
								1722: [64414, 64415],
								1723: [64416, 64417, 64418, 64419],
								1726: [64426, 64427, 64428, 64429],
								1728: [64420, 64421],
								1729: [64422, 64423, 64424, 64425],
								1733: [64480, 64481],
								1734: [64473, 64474],
								1735: [64471, 64472],
								1736: [64475, 64476],
								1737: [64482, 64483],
								1739: [64478, 64479],
								1740: [64508, 64509, 64510, 64511],
								1744: [64484, 64485, 64486, 64487],
								1746: [64430, 64431],
								1747: [64432, 64433],
							},
							n = {
								65247: {65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275},
								65248: {65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276},
								65165: {65247: {65248: {65258: 65010}}},
								1617: {
									1612: 64606,
									1613: 64607,
									1614: 64608,
									1615: 64609,
									1616: 64610,
								},
							},
							r = {
								1612: 64606,
								1613: 64607,
								1614: 64608,
								1615: 64609,
								1616: 64610,
							},
							i = [1570, 1571, 1573, 1575];
						t.__arabicParser__ = {};
						var o = (t.__arabicParser__.isInArabicSubstitutionA = function (t) {
								return void 0 !== e[t.charCodeAt(0)];
							}),
							a = (t.__arabicParser__.isArabicLetter = function (t) {
								return (
									'string' == typeof t &&
									/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(
										t
									)
								);
							}),
							s = (t.__arabicParser__.isArabicEndLetter = function (t) {
								return a(t) && o(t) && e[t.charCodeAt(0)].length <= 2;
							}),
							h = (t.__arabicParser__.isArabicAlfLetter = function (t) {
								return a(t) && 0 <= i.indexOf(t.charCodeAt(0));
							}),
							u =
								((t.__arabicParser__.arabicLetterHasIsolatedForm = function (
									t
								) {
									return a(t) && o(t) && 1 <= e[t.charCodeAt(0)].length;
								}),
								(t.__arabicParser__.arabicLetterHasFinalForm = function (t) {
									return a(t) && o(t) && 2 <= e[t.charCodeAt(0)].length;
								})),
							l =
								((t.__arabicParser__.arabicLetterHasInitialForm = function (t) {
									return a(t) && o(t) && 3 <= e[t.charCodeAt(0)].length;
								}),
								(t.__arabicParser__.arabicLetterHasMedialForm = function (t) {
									return a(t) && o(t) && 4 == e[t.charCodeAt(0)].length;
								})),
							c = (t.__arabicParser__.resolveLigatures = function (t) {
								var e = 0,
									r = n,
									i = 0,
									o = '',
									a = 0;
								for (e = 0; e < t.length; e += 1)
									void 0 !== r[t.charCodeAt(e)]
										? (a++,
										  'number' == typeof (r = r[t.charCodeAt(e)]) &&
												((i =
													-1 !==
													(i = f(t.charAt(e), t.charAt(e - a), t.charAt(e + 1)))
														? i
														: 0),
												(o += String.fromCharCode(r)),
												(r = n),
												(a = 0)),
										  e === t.length - 1 &&
												((r = n),
												(o += t.charAt(e - (a - 1))),
												(e -= a - 1),
												(a = 0)))
										: ((r = n), (o += t.charAt(e - a)), (e -= a), (a = 0));
								return o;
							}),
							f =
								((t.__arabicParser__.isArabicDiacritic = function (t) {
									return void 0 !== t && void 0 !== r[t.charCodeAt(0)];
								}),
								(t.__arabicParser__.getCorrectForm = function (t, e, n) {
									return a(t)
										? !1 === o(t)
											? -1
											: !u(t) ||
											  (!a(e) && !a(n)) ||
											  (!a(n) && s(e)) ||
											  (s(t) && !a(e)) ||
											  (s(t) && h(e)) ||
											  (s(t) && s(e))
											? 0
											: l(t) && a(e) && !s(e) && a(n) && u(n)
											? 3
											: s(t) || !a(n)
											? 1
											: 2
										: -1;
								})),
							p =
								(t.__arabicParser__.processArabic =
								t.processArabic =
									function (t) {
										var n = 0,
											r = 0,
											i = 0,
											o = '',
											s = '',
											h = '',
											u = (t = t || '').split('\\s+'),
											l = [];
										for (n = 0; n < u.length; n += 1) {
											for (l.push(''), r = 0; r < u[n].length; r += 1)
												(o = u[n][r]),
													(s = u[n][r - 1]),
													(h = u[n][r + 1]),
													a(o)
														? ((i = f(o, s, h)),
														  (l[n] +=
																-1 !== i
																	? String.fromCharCode(e[o.charCodeAt(0)][i])
																	: o))
														: (l[n] += o);
											l[n] = c(l[n]);
										}
										return l.join(' ');
									});
						t.events.push([
							'preProcessText',
							function (t) {
								var e = t.text,
									n = (t.x, t.y, t.options || {}),
									r = (t.mutex, n.lang, []);
								if ('[object Array]' === Object.prototype.toString.call(e)) {
									var i = 0;
									for (r = [], i = 0; i < e.length; i += 1)
										'[object Array]' === Object.prototype.toString.call(e[i])
											? r.push([p(e[i][0]), e[i][1], e[i][2]])
											: r.push([p(e[i])]);
									t.text = r;
								} else t.text = p(e);
							},
						]);
					})(dt.API),
					(dt.API.autoPrint = function (t) {
						var e;
						return (
							'javascript' ===
							(((t = t || {}).variant = t.variant || 'non-conform'), t.variant)
								? this.addJS('print({});')
								: (this.internal.events.subscribe(
										'postPutResources',
										function () {
											(e = this.internal.newObject()),
												this.internal.out('<<'),
												this.internal.out('/S /Named'),
												this.internal.out('/Type /Action'),
												this.internal.out('/N /Print'),
												this.internal.out('>>'),
												this.internal.out('endobj');
										}
								  ),
								  this.internal.events.subscribe('putCatalog', function () {
										this.internal.out('/OpenAction ' + e + ' 0 R');
								  })),
							this
						);
					}),
					(s = dt.API),
					((h = function () {
						var t = void 0;
						Object.defineProperty(this, 'pdf', {
							get: function () {
								return t;
							},
							set: function (e) {
								t = e;
							},
						});
						var e = 150;
						Object.defineProperty(this, 'width', {
							get: function () {
								return e;
							},
							set: function (t) {
								(e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t),
									this.getContext('2d').pageWrapXEnabled &&
										(this.getContext('2d').pageWrapX = e + 1);
							},
						});
						var n = 300;
						Object.defineProperty(this, 'height', {
							get: function () {
								return n;
							},
							set: function (t) {
								(n = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t),
									this.getContext('2d').pageWrapYEnabled &&
										(this.getContext('2d').pageWrapY = n + 1);
							},
						});
						var r = [];
						Object.defineProperty(this, 'childNodes', {
							get: function () {
								return r;
							},
							set: function (t) {
								r = t;
							},
						});
						var i = {};
						Object.defineProperty(this, 'style', {
							get: function () {
								return i;
							},
							set: function (t) {
								i = t;
							},
						}),
							Object.defineProperty(this, 'parentNode', {
								get: function () {
									return !1;
								},
							});
					}).prototype.getContext = function (t, e) {
						var n;
						if ('2d' !== (t = t || '2d')) return null;
						for (n in e)
							this.pdf.context2d.hasOwnProperty(n) &&
								(this.pdf.context2d[n] = e[n]);
						return (this.pdf.context2d._canvas = this).pdf.context2d;
					}),
					(h.prototype.toDataURL = function () {
						throw new Error('toDataURL is not implemented.');
					}),
					s.events.push([
						'initialized',
						function () {
							(this.canvas = new h()), (this.canvas.pdf = this);
						},
					]),
					(u = dt.API),
					(c = {x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0}),
					(f = 1),
					(p = function (t, e, n, r, i) {
						c = {x: t, y: e, w: n, h: r, ln: i};
					}),
					(d = function () {
						return c;
					}),
					(g = {left: 0, top: 0, bottom: 0}),
					(u.setHeaderFunction = function (t) {
						l = t;
					}),
					(u.getTextDimensions = function (t, e) {
						var n = this.table_font_size || this.internal.getFontSize(),
							r =
								(this.internal.getFont().fontStyle,
								(e = e || {}).scaleFactor || this.internal.scaleFactor),
							i = 0,
							o = 0,
							a = 0;
						if ('string' == typeof t)
							0 != (i = this.getStringUnitWidth(t) * n) && (o = 1);
						else {
							if ('[object Array]' !== Object.prototype.toString.call(t))
								throw new Error(
									'getTextDimensions expects text-parameter to be of type String or an Array of Strings.'
								);
							for (var s = 0; s < t.length; s++)
								i < (a = this.getStringUnitWidth(t[s]) * n) && (i = a);
							0 !== i && (o = t.length);
						}
						return {
							w: (i /= r),
							h: Math.max(
								(o * n * this.getLineHeightFactor() -
									n * (this.getLineHeightFactor() - 1)) /
									r,
								0
							),
						};
					}),
					(u.cellAddPage = function () {
						var t = this.margins || g;
						this.addPage(), p(t.left, t.top, void 0, void 0), (f += 1);
					}),
					(u.cellInitialize = function () {
						(c = {x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0}),
							(f = 1);
					}),
					(u.cell = function (t, e, n, r, i, o, a) {
						var s = d(),
							h = !1;
						if (void 0 !== s.ln)
							if (s.ln === o) (t = s.x + s.w), (e = s.y);
							else {
								var u = this.margins || g;
								s.y + s.h + r + 13 >=
									this.internal.pageSize.getHeight() - u.bottom &&
									(this.cellAddPage(),
									(h = !0),
									this.printHeaders &&
										this.tableHeaderRow &&
										this.printHeaderRow(o, !0)),
									(e = d().y + d().h),
									h && (e = 23);
							}
						if (void 0 !== i[0])
							if (
								(this.printingHeaderRow
									? this.rect(t, e, n, r, 'FD')
									: this.rect(t, e, n, r),
								'right' === a)
							) {
								i instanceof Array || (i = [i]);
								for (var l = 0; l < i.length; l++) {
									var c = i[l],
										f =
											(this.getStringUnitWidth(c) *
												this.internal.getFontSize()) /
											this.internal.scaleFactor;
									this.text(
										c,
										t + n - f - 3,
										e + this.internal.getLineHeight() * (l + 1)
									);
								}
							} else this.text(i, t + 3, e + this.internal.getLineHeight());
						return p(t, e, n, r, o), this;
					}),
					(u.arrayMax = function (t, e) {
						var n,
							r,
							i,
							o = t[0];
						for (n = 0, r = t.length; n < r; n += 1)
							(i = t[n]), e ? -1 === e(o, i) && (o = i) : o < i && (o = i);
						return o;
					}),
					(u.table = function (t, e, n, r, i) {
						if (!n) throw 'No data for PDF table';
						var o,
							a,
							s,
							h,
							l,
							p,
							d,
							m,
							y,
							v,
							w = [],
							b = [],
							x = {},
							N = {},
							L = [],
							A = [],
							S = !1,
							_ = !0,
							F = 12,
							P = g;
						if (
							((P.width = this.internal.pageSize.getWidth()),
							i &&
								(!0 === i.autoSize && (S = !0),
								!1 === i.printHeaders && (_ = !1),
								i.fontSize && (F = i.fontSize),
								i.css &&
									void 0 !== i.css['font-size'] &&
									(F = 16 * i.css['font-size']),
								i.margins && (P = i.margins)),
							(this.lnMod = 0),
							(c = {x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0}),
							(f = 1),
							(this.printHeaders = _),
							(this.margins = P),
							this.setFontSize(F),
							(this.table_font_size = F),
							null == r)
						)
							w = Object.keys(n[0]);
						else if (r[0] && 'string' != typeof r[0])
							for (a = 0, s = r.length; a < s; a += 1)
								(o = r[a]),
									w.push(o.name),
									b.push(o.prompt),
									(N[o.name] = o.width * (19.049976 / 25.4));
						else w = r;
						if (S)
							for (
								v = function (t) {
									return t[o];
								},
									a = 0,
									s = w.length;
								a < s;
								a += 1
							) {
								for (
									x[(o = w[a])] = n.map(v),
										L.push(
											this.getTextDimensions(b[a] || o, {scaleFactor: 1}).w
										),
										d = 0,
										h = (p = x[o]).length;
									d < h;
									d += 1
								)
									(l = p[d]),
										L.push(this.getTextDimensions(l, {scaleFactor: 1}).w);
								(N[o] = u.arrayMax(L)), (L = []);
							}
						if (_) {
							var k = this.calculateLineHeight(w, N, b.length ? b : w);
							for (a = 0, s = w.length; a < s; a += 1)
								(o = w[a]),
									A.push([t, e, N[o], k, String(b.length ? b[a] : o)]);
							this.setTableHeaderRow(A), this.printHeaderRow(1, !1);
						}
						for (a = 0, s = n.length; a < s; a += 1)
							for (
								m = n[a],
									k = this.calculateLineHeight(w, N, m),
									d = 0,
									y = w.length;
								d < y;
								d += 1
							)
								(o = w[d]), this.cell(t, e, N[o], k, m[o], a + 2, o.align);
						return (
							(this.lastCellPos = c),
							(this.table_x = t),
							(this.table_y = e),
							this
						);
					}),
					(u.calculateLineHeight = function (t, e, n) {
						for (var r, i = 0, o = 0; o < t.length; o++) {
							n[(r = t[o])] = this.splitTextToSize(String(n[r]), e[r] - 3);
							var a = this.internal.getLineHeight() * n[r].length + 3;
							i < a && (i = a);
						}
						return i;
					}),
					(u.setTableHeaderRow = function (t) {
						this.tableHeaderRow = t;
					}),
					(u.printHeaderRow = function (t, e) {
						if (!this.tableHeaderRow)
							throw 'Property tableHeaderRow does not exist.';
						var n, r, i, o;
						if (((this.printingHeaderRow = !0), void 0 !== l)) {
							var a = l(this, f);
							p(a[0], a[1], a[2], a[3], -1);
						}
						this.setFontStyle('bold');
						var s = [];
						for (i = 0, o = this.tableHeaderRow.length; i < o; i += 1)
							this.setFillColor(200, 200, 200),
								(n = this.tableHeaderRow[i]),
								e &&
									((this.margins.top = 13),
									(n[1] = (this.margins && this.margins.top) || 0),
									s.push(n)),
								(r = [].concat(n)),
								this.cell.apply(this, r.concat(t));
						0 < s.length && this.setTableHeaderRow(s),
							this.setFontStyle('normal'),
							(this.printingHeaderRow = !1);
					}),
					(function (t, e) {
						var n,
							i,
							a,
							s,
							h,
							u = function (t) {
								return (
									(t = t || {}),
									(this.isStrokeTransparent = t.isStrokeTransparent || !1),
									(this.strokeOpacity = t.strokeOpacity || 1),
									(this.strokeStyle = t.strokeStyle || '#000000'),
									(this.fillStyle = t.fillStyle || '#000000'),
									(this.isFillTransparent = t.isFillTransparent || !1),
									(this.fillOpacity = t.fillOpacity || 1),
									(this.font = t.font || '10px sans-serif'),
									(this.textBaseline = t.textBaseline || 'alphabetic'),
									(this.textAlign = t.textAlign || 'left'),
									(this.lineWidth = t.lineWidth || 1),
									(this.lineJoin = t.lineJoin || 'miter'),
									(this.lineCap = t.lineCap || 'butt'),
									(this.path = t.path || []),
									(this.transform =
										void 0 !== t.transform ? t.transform.clone() : new O()),
									(this.globalCompositeOperation =
										t.globalCompositeOperation || 'normal'),
									(this.globalAlpha = t.globalAlpha || 1),
									(this.clip_path = t.clip_path || []),
									(this.currentPoint = t.currentPoint || new E()),
									(this.miterLimit = t.miterLimit || 10),
									(this.lastPoint = t.lastPoint || new E()),
									(this.ignoreClearRect =
										'boolean' != typeof t.ignoreClearRect || t.ignoreClearRect),
									this
								);
							};
						t.events.push([
							'initialized',
							function () {
								(this.context2d = new l(this)),
									(n = this.internal.f2),
									this.internal.f3,
									(i = this.internal.getCoordinateString),
									(a = this.internal.getVerticalCoordinateString),
									(s = this.internal.getHorizontalCoordinate),
									(h = this.internal.getVerticalCoordinate);
							},
						]);
						var l = function (t) {
							Object.defineProperty(this, 'canvas', {
								get: function () {
									return {parentNode: !1, style: !1};
								},
							}),
								Object.defineProperty(this, 'pdf', {
									get: function () {
										return t;
									},
								});
							var e = !1;
							Object.defineProperty(this, 'pageWrapXEnabled', {
								get: function () {
									return e;
								},
								set: function (t) {
									e = Boolean(t);
								},
							});
							var n = !1;
							Object.defineProperty(this, 'pageWrapYEnabled', {
								get: function () {
									return n;
								},
								set: function (t) {
									n = Boolean(t);
								},
							});
							var r = 0;
							Object.defineProperty(this, 'posX', {
								get: function () {
									return r;
								},
								set: function (t) {
									isNaN(t) || (r = t);
								},
							});
							var i = 0;
							Object.defineProperty(this, 'posY', {
								get: function () {
									return i;
								},
								set: function (t) {
									isNaN(t) || (i = t);
								},
							});
							var o = !1;
							Object.defineProperty(this, 'autoPaging', {
								get: function () {
									return o;
								},
								set: function (t) {
									o = Boolean(t);
								},
							});
							var a = 0;
							Object.defineProperty(this, 'lastBreak', {
								get: function () {
									return a;
								},
								set: function (t) {
									a = t;
								},
							});
							var s = [];
							Object.defineProperty(this, 'pageBreaks', {
								get: function () {
									return s;
								},
								set: function (t) {
									s = t;
								},
							});
							var h = new u();
							Object.defineProperty(this, 'ctx', {
								get: function () {
									return h;
								},
								set: function (t) {
									t instanceof u && (h = t);
								},
							}),
								Object.defineProperty(this, 'path', {
									get: function () {
										return h.path;
									},
									set: function (t) {
										h.path = t;
									},
								});
							var l = [];
							Object.defineProperty(this, 'ctxStack', {
								get: function () {
									return l;
								},
								set: function (t) {
									l = t;
								},
							}),
								Object.defineProperty(this, 'fillStyle', {
									get: function () {
										return this.ctx.fillStyle;
									},
									set: function (t) {
										var e;
										(e = c(t)),
											(this.ctx.fillStyle = e.style),
											(this.ctx.isFillTransparent = 0 === e.a),
											(this.ctx.fillOpacity = e.a),
											this.pdf.setFillColor(e.r, e.g, e.b, {a: e.a}),
											this.pdf.setTextColor(e.r, e.g, e.b, {a: e.a});
									},
								}),
								Object.defineProperty(this, 'strokeStyle', {
									get: function () {
										return this.ctx.strokeStyle;
									},
									set: function (t) {
										var e = c(t);
										(this.ctx.strokeStyle = e.style),
											(this.ctx.isStrokeTransparent = 0 === e.a),
											(this.ctx.strokeOpacity = e.a),
											0 === e.a
												? this.pdf.setDrawColor(255, 255, 255)
												: (e.a, this.pdf.setDrawColor(e.r, e.g, e.b));
									},
								}),
								Object.defineProperty(this, 'lineCap', {
									get: function () {
										return this.ctx.lineCap;
									},
									set: function (t) {
										-1 !== ['butt', 'round', 'square'].indexOf(t) &&
											((this.ctx.lineCap = t), this.pdf.setLineCap(t));
									},
								}),
								Object.defineProperty(this, 'lineWidth', {
									get: function () {
										return this.ctx.lineWidth;
									},
									set: function (t) {
										isNaN(t) ||
											((this.ctx.lineWidth = t), this.pdf.setLineWidth(t));
									},
								}),
								Object.defineProperty(this, 'lineJoin', {
									get: function () {
										return this.ctx.lineJoin;
									},
									set: function (t) {
										-1 !== ['bevel', 'round', 'miter'].indexOf(t) &&
											((this.ctx.lineJoin = t), this.pdf.setLineJoin(t));
									},
								}),
								Object.defineProperty(this, 'miterLimit', {
									get: function () {
										return this.ctx.miterLimit;
									},
									set: function (t) {
										isNaN(t) ||
											((this.ctx.miterLimit = t), this.pdf.setMiterLimit(t));
									},
								}),
								Object.defineProperty(this, 'textBaseline', {
									get: function () {
										return this.ctx.textBaseline;
									},
									set: function (t) {
										this.ctx.textBaseline = t;
									},
								}),
								Object.defineProperty(this, 'textAlign', {
									get: function () {
										return this.ctx.textAlign;
									},
									set: function (t) {
										-1 !==
											['right', 'end', 'center', 'left', 'start'].indexOf(t) &&
											(this.ctx.textAlign = t);
									},
								}),
								Object.defineProperty(this, 'font', {
									get: function () {
										return this.ctx.font;
									},
									set: function (t) {
										var e;
										if (
											((this.ctx.font = t),
											null !==
												(e =
													/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(
														t
													)))
										) {
											var n = e[1],
												r = (e[2], e[3]),
												i = e[4],
												o = e[5],
												a = e[6];
											(i =
												'px' === o
													? Math.floor(parseFloat(i))
													: 'em' === o
													? Math.floor(parseFloat(i) * this.pdf.getFontSize())
													: Math.floor(parseFloat(i))),
												this.pdf.setFontSize(i);
											var s = '';
											('bold' === r ||
												700 <= parseInt(r, 10) ||
												'bold' === n) &&
												(s = 'bold'),
												'italic' === n && (s += 'italic'),
												0 === s.length && (s = 'normal');
											for (
												var h = '',
													u = a
														.toLowerCase()
														.replace(/"|'/g, '')
														.split(/\s*,\s*/),
													l = {
														arial: 'Helvetica',
														verdana: 'Helvetica',
														helvetica: 'Helvetica',
														'sans-serif': 'Helvetica',
														fixed: 'Courier',
														monospace: 'Courier',
														terminal: 'Courier',
														courier: 'Courier',
														times: 'Times',
														cursive: 'Times',
														fantasy: 'Times',
														serif: 'Times',
													},
													c = 0;
												c < u.length;
												c++
											) {
												if (
													void 0 !==
													this.pdf.internal.getFont(u[c], s, {
														noFallback: !0,
														disableWarning: !0,
													})
												) {
													h = u[c];
													break;
												}
												if (
													'bolditalic' === s &&
													void 0 !==
														this.pdf.internal.getFont(u[c], 'bold', {
															noFallback: !0,
															disableWarning: !0,
														})
												)
													(h = u[c]), (s = 'bold');
												else if (
													void 0 !==
													this.pdf.internal.getFont(u[c], 'normal', {
														noFallback: !0,
														disableWarning: !0,
													})
												) {
													(h = u[c]), (s = 'normal');
													break;
												}
											}
											if ('' === h)
												for (c = 0; c < u.length; c++)
													if (l[u[c]]) {
														h = l[u[c]];
														break;
													}
											(h = '' === h ? 'Times' : h), this.pdf.setFont(h, s);
										}
									},
								}),
								Object.defineProperty(this, 'globalCompositeOperation', {
									get: function () {
										return this.ctx.globalCompositeOperation;
									},
									set: function (t) {
										this.ctx.globalCompositeOperation = t;
									},
								}),
								Object.defineProperty(this, 'globalAlpha', {
									get: function () {
										return this.ctx.globalAlpha;
									},
									set: function (t) {
										this.ctx.globalAlpha = t;
									},
								}),
								Object.defineProperty(this, 'ignoreClearRect', {
									get: function () {
										return this.ctx.ignoreClearRect;
									},
									set: function (t) {
										this.ctx.ignoreClearRect = Boolean(t);
									},
								});
						};
						(l.prototype.fill = function () {
							y.call(this, 'fill', !1);
						}),
							(l.prototype.stroke = function () {
								y.call(this, 'stroke', !1);
							}),
							(l.prototype.beginPath = function () {
								this.path = [{type: 'begin'}];
							}),
							(l.prototype.moveTo = function (t, e) {
								if (isNaN(t) || isNaN(e))
									throw (
										(o.error(
											'jsPDF.context2d.moveTo: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.moveTo'
										))
									);
								var n = this.ctx.transform.applyToPoint(new E(t, e));
								this.path.push({type: 'mt', x: n.x, y: n.y}),
									(this.ctx.lastPoint = new E(t, e));
							}),
							(l.prototype.closePath = function () {
								var t = new E(0, 0),
									e = 0;
								for (e = this.path.length - 1; -1 !== e; e--)
									if (
										'begin' === this.path[e].type &&
										'object' === r(this.path[e + 1]) &&
										'number' == typeof this.path[e + 1].x
									) {
										(t = new E(this.path[e + 1].x, this.path[e + 1].y)),
											this.path.push({type: 'lt', x: t.x, y: t.y});
										break;
									}
								'object' === r(this.path[e + 2]) &&
									'number' == typeof this.path[e + 2].x &&
									this.path.push(JSON.parse(JSON.stringify(this.path[e + 2]))),
									this.path.push({type: 'close'}),
									(this.ctx.lastPoint = new E(t.x, t.y));
							}),
							(l.prototype.lineTo = function (t, e) {
								if (isNaN(t) || isNaN(e))
									throw (
										(o.error(
											'jsPDF.context2d.lineTo: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.lineTo'
										))
									);
								var n = this.ctx.transform.applyToPoint(new E(t, e));
								this.path.push({type: 'lt', x: n.x, y: n.y}),
									(this.ctx.lastPoint = new E(n.x, n.y));
							}),
							(l.prototype.clip = function () {
								(this.ctx.clip_path = JSON.parse(JSON.stringify(this.path))),
									y.call(this, null, !0);
							}),
							(l.prototype.quadraticCurveTo = function (t, e, n, r) {
								if (isNaN(n) || isNaN(r) || isNaN(t) || isNaN(e))
									throw (
										(o.error(
											'jsPDF.context2d.quadraticCurveTo: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.quadraticCurveTo'
										))
									);
								var i = this.ctx.transform.applyToPoint(new E(n, r)),
									a = this.ctx.transform.applyToPoint(new E(t, e));
								this.path.push({type: 'qct', x1: a.x, y1: a.y, x: i.x, y: i.y}),
									(this.ctx.lastPoint = new E(i.x, i.y));
							}),
							(l.prototype.bezierCurveTo = function (t, e, n, r, i, a) {
								if (
									isNaN(i) ||
									isNaN(a) ||
									isNaN(t) ||
									isNaN(e) ||
									isNaN(n) ||
									isNaN(r)
								)
									throw (
										(o.error(
											'jsPDF.context2d.bezierCurveTo: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.bezierCurveTo'
										))
									);
								var s = this.ctx.transform.applyToPoint(new E(i, a)),
									h = this.ctx.transform.applyToPoint(new E(t, e)),
									u = this.ctx.transform.applyToPoint(new E(n, r));
								this.path.push({
									type: 'bct',
									x1: h.x,
									y1: h.y,
									x2: u.x,
									y2: u.y,
									x: s.x,
									y: s.y,
								}),
									(this.ctx.lastPoint = new E(s.x, s.y));
							}),
							(l.prototype.arc = function (t, e, n, r, i, a) {
								if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i))
									throw (
										(o.error(
											'jsPDF.context2d.arc: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.arc'
										))
									);
								if (((a = Boolean(a)), !this.ctx.transform.isIdentity)) {
									var s = this.ctx.transform.applyToPoint(new E(t, e));
									(t = s.x), (e = s.y);
									var h = this.ctx.transform.applyToPoint(new E(0, n)),
										u = this.ctx.transform.applyToPoint(new E(0, 0));
									n = Math.sqrt(
										Math.pow(h.x - u.x, 2) + Math.pow(h.y - u.y, 2)
									);
								}
								Math.abs(i - r) >= 2 * Math.PI && ((r = 0), (i = 2 * Math.PI)),
									this.path.push({
										type: 'arc',
										x: t,
										y: e,
										radius: n,
										startAngle: r,
										endAngle: i,
										counterclockwise: a,
									});
							}),
							(l.prototype.arcTo = function (t, e, n, r, i) {
								throw new Error('arcTo not implemented.');
							}),
							(l.prototype.rect = function (t, e, n, r) {
								if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r))
									throw (
										(o.error(
											'jsPDF.context2d.rect: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.rect'
										))
									);
								this.moveTo(t, e),
									this.lineTo(t + n, e),
									this.lineTo(t + n, e + r),
									this.lineTo(t, e + r),
									this.lineTo(t, e),
									this.lineTo(t + n, e),
									this.lineTo(t, e);
							}),
							(l.prototype.fillRect = function (t, e, n, r) {
								if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r))
									throw (
										(o.error(
											'jsPDF.context2d.fillRect: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.fillRect'
										))
									);
								if (!f.call(this)) {
									var i = {};
									'butt' !== this.lineCap &&
										((i.lineCap = this.lineCap), (this.lineCap = 'butt')),
										'miter' !== this.lineJoin &&
											((i.lineJoin = this.lineJoin), (this.lineJoin = 'miter')),
										this.beginPath(),
										this.rect(t, e, n, r),
										this.fill(),
										i.hasOwnProperty('lineCap') && (this.lineCap = i.lineCap),
										i.hasOwnProperty('lineJoin') &&
											(this.lineJoin = i.lineJoin);
								}
							}),
							(l.prototype.strokeRect = function (t, e, n, r) {
								if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r))
									throw (
										(o.error(
											'jsPDF.context2d.strokeRect: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.strokeRect'
										))
									);
								p.call(this) ||
									(this.beginPath(), this.rect(t, e, n, r), this.stroke());
							}),
							(l.prototype.clearRect = function (t, e, n, r) {
								if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r))
									throw (
										(o.error(
											'jsPDF.context2d.clearRect: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.clearRect'
										))
									);
								this.ignoreClearRect ||
									((this.fillStyle = '#ffffff'), this.fillRect(t, e, n, r));
							}),
							(l.prototype.save = function (t) {
								t = 'boolean' != typeof t || t;
								for (
									var e = this.pdf.internal.getCurrentPageInfo().pageNumber,
										n = 0;
									n < this.pdf.internal.getNumberOfPages();
									n++
								)
									this.pdf.setPage(n + 1), this.pdf.internal.out('q');
								if ((this.pdf.setPage(e), t)) {
									this.ctx.fontSize = this.pdf.internal.getFontSize();
									var r = new u(this.ctx);
									this.ctxStack.push(this.ctx), (this.ctx = r);
								}
							}),
							(l.prototype.restore = function (t) {
								t = 'boolean' != typeof t || t;
								for (
									var e = this.pdf.internal.getCurrentPageInfo().pageNumber,
										n = 0;
									n < this.pdf.internal.getNumberOfPages();
									n++
								)
									this.pdf.setPage(n + 1), this.pdf.internal.out('Q');
								this.pdf.setPage(e),
									t &&
										0 !== this.ctxStack.length &&
										((this.ctx = this.ctxStack.pop()),
										(this.fillStyle = this.ctx.fillStyle),
										(this.strokeStyle = this.ctx.strokeStyle),
										(this.font = this.ctx.font),
										(this.lineCap = this.ctx.lineCap),
										(this.lineWidth = this.ctx.lineWidth),
										(this.lineJoin = this.ctx.lineJoin));
							}),
							(l.prototype.toDataURL = function () {
								throw new Error('toDataUrl not implemented.');
							});
						var c = function (t) {
								var e, n, r, i;
								if ((!0 === t.isCanvasGradient && (t = t.getColor()), !t))
									return {r: 0, g: 0, b: 0, a: 0, style: t};
								if (
									/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(
										t
									)
								)
									i = r = n = e = 0;
								else {
									var o = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(
										t
									);
									if (null !== o)
										(e = parseInt(o[1])),
											(n = parseInt(o[2])),
											(r = parseInt(o[3])),
											(i = 1);
									else if (
										null !==
										(o =
											/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/.exec(
												t
											))
									)
										(e = parseInt(o[1])),
											(n = parseInt(o[2])),
											(r = parseInt(o[3])),
											(i = parseFloat(o[4]));
									else {
										if (
											((i = 1), 'string' == typeof t && '#' !== t.charAt(0))
										) {
											var a = new RGBColor(t);
											t = a.ok ? a.toHex() : '#000000';
										}
										4 === t.length
											? ((e = t.substring(1, 2)),
											  (e += e),
											  (n = t.substring(2, 3)),
											  (n += n),
											  (r = t.substring(3, 4)),
											  (r += r))
											: ((e = t.substring(1, 3)),
											  (n = t.substring(3, 5)),
											  (r = t.substring(5, 7))),
											(e = parseInt(e, 16)),
											(n = parseInt(n, 16)),
											(r = parseInt(r, 16));
									}
								}
								return {r: e, g: n, b: r, a: i, style: t};
							},
							f = function () {
								return this.ctx.isFillTransparent || 0 == this.globalAlpha;
							},
							p = function () {
								return Boolean(
									this.ctx.isStrokeTransparent || 0 == this.globalAlpha
								);
							};
						(l.prototype.fillText = function (t, e, n, r) {
							if (isNaN(e) || isNaN(n) || 'string' != typeof t)
								throw (
									(o.error(
										'jsPDF.context2d.fillText: Invalid arguments',
										arguments
									),
									new Error(
										'Invalid arguments passed to jsPDF.context2d.fillText'
									))
								);
							if (((r = isNaN(r) ? void 0 : r), !f.call(this))) {
								n = w.call(this, n);
								var i = I(this.ctx.transform.rotation),
									a = this.ctx.transform.scaleX;
								A.call(this, {
									text: t,
									x: e,
									y: n,
									scale: a,
									angle: i,
									align: this.textAlign,
									maxWidth: r,
								});
							}
						}),
							(l.prototype.strokeText = function (t, e, n, r) {
								if (isNaN(e) || isNaN(n) || 'string' != typeof t)
									throw (
										(o.error(
											'jsPDF.context2d.strokeText: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.strokeText'
										))
									);
								if (!p.call(this)) {
									(r = isNaN(r) ? void 0 : r), (n = w.call(this, n));
									var i = I(this.ctx.transform.rotation),
										a = this.ctx.transform.scaleX;
									A.call(this, {
										text: t,
										x: e,
										y: n,
										scale: a,
										renderingMode: 'stroke',
										angle: i,
										align: this.textAlign,
										maxWidth: r,
									});
								}
							}),
							(l.prototype.measureText = function (t) {
								if ('string' != typeof t)
									throw (
										(o.error(
											'jsPDF.context2d.measureText: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.measureText'
										))
									);
								var e = this.pdf,
									n = this.pdf.internal.scaleFactor,
									r = e.internal.getFontSize(),
									i = (e.getStringUnitWidth(t) * r) / e.internal.scaleFactor;
								return new (function (t) {
									var e = (t = t || {}).width || 0;
									return (
										Object.defineProperty(this, 'width', {
											get: function () {
												return e;
											},
										}),
										this
									);
								})({width: (i *= Math.round(((96 * n) / 72) * 1e4) / 1e4)});
							}),
							(l.prototype.scale = function (t, e) {
								if (isNaN(t) || isNaN(e))
									throw (
										(o.error(
											'jsPDF.context2d.scale: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.scale'
										))
									);
								var n = new O(t, 0, 0, e, 0, 0);
								this.ctx.transform = this.ctx.transform.multiply(n);
							}),
							(l.prototype.rotate = function (t) {
								if (isNaN(t))
									throw (
										(o.error(
											'jsPDF.context2d.rotate: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.rotate'
										))
									);
								var e = new O(
									Math.cos(t),
									Math.sin(t),
									-Math.sin(t),
									Math.cos(t),
									0,
									0
								);
								this.ctx.transform = this.ctx.transform.multiply(e);
							}),
							(l.prototype.translate = function (t, e) {
								if (isNaN(t) || isNaN(e))
									throw (
										(o.error(
											'jsPDF.context2d.translate: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.translate'
										))
									);
								var n = new O(1, 0, 0, 1, t, e);
								this.ctx.transform = this.ctx.transform.multiply(n);
							}),
							(l.prototype.transform = function (t, e, n, r, i, a) {
								if (
									isNaN(t) ||
									isNaN(e) ||
									isNaN(n) ||
									isNaN(r) ||
									isNaN(i) ||
									isNaN(a)
								)
									throw (
										(o.error(
											'jsPDF.context2d.transform: Invalid arguments',
											arguments
										),
										new Error(
											'Invalid arguments passed to jsPDF.context2d.transform'
										))
									);
								var s = new O(t, e, n, r, i, a);
								this.ctx.transform = this.ctx.transform.multiply(s);
							}),
							(l.prototype.setTransform = function (t, e, n, r, i, o) {
								(t = isNaN(t) ? 1 : t),
									(e = isNaN(e) ? 0 : e),
									(n = isNaN(n) ? 0 : n),
									(r = isNaN(r) ? 1 : r),
									(i = isNaN(i) ? 0 : i),
									(o = isNaN(o) ? 0 : o),
									(this.ctx.transform = new O(t, e, n, r, i, o));
							}),
							(l.prototype.drawImage = function (t, e, n, r, i, o, a, s, h) {
								var u = this.pdf.getImageProperties(t),
									l = 1,
									c = 1,
									f = 1,
									p = 1;
								void 0 !== r &&
									void 0 !== s &&
									((f = s / r),
									(p = h / i),
									(l = ((u.width / r) * s) / r),
									(c = ((u.height / i) * h) / i)),
									void 0 === o && ((o = e), (a = n), (n = e = 0)),
									void 0 !== r && void 0 === s && ((s = r), (h = i)),
									void 0 === r &&
										void 0 === s &&
										((s = u.width), (h = u.height));
								var g = this.ctx.transform.decompose(),
									y = I(g.rotate.shx);
								g.scale.sx, g.scale.sy;
								for (
									var w,
										b = new O(),
										x =
											((b = (b = (b = b.multiply(g.translate)).multiply(
												g.skew
											)).multiply(g.scale)).applyToPoint(new E(s, h)),
											b.applyToRectangle(
												new M(o - e * f, a - n * p, r * l, i * c)
											)),
										N = d.call(this, x),
										L = [],
										A = 0;
									A < N.length;
									A += 1
								)
									-1 === L.indexOf(N[A]) && L.push(N[A]);
								if ((L.sort(), this.autoPaging))
									for (
										var S = L[0], _ = L[L.length - 1], F = S;
										F < _ + 1;
										F++
									) {
										if (
											(this.pdf.setPage(F), 0 !== this.ctx.clip_path.length)
										) {
											var P = this.path;
											(w = JSON.parse(JSON.stringify(this.ctx.clip_path))),
												(this.path = m(
													w,
													this.posX,
													-1 * this.pdf.internal.pageSize.height * (F - 1) +
														this.posY
												)),
												v.call(this, 'fill', !0),
												(this.path = P);
										}
										var k = JSON.parse(JSON.stringify(x));
										(k = m(
											[k],
											this.posX,
											-1 * this.pdf.internal.pageSize.height * (F - 1) +
												this.posY
										)[0]),
											this.pdf.addImage(
												t,
												'jpg',
												k.x,
												k.y,
												k.w,
												k.h,
												null,
												null,
												y
											);
									}
								else
									this.pdf.addImage(
										t,
										'jpg',
										x.x,
										x.y,
										x.w,
										x.h,
										null,
										null,
										y
									);
							});
						var d = function (t, e, n) {
								var r = [];
								switch (
									((e = e || this.pdf.internal.pageSize.width),
									(n = n || this.pdf.internal.pageSize.height),
									t.type)
								) {
									default:
									case 'mt':
									case 'lt':
										r.push(Math.floor((t.y + this.posY) / n) + 1);
										break;
									case 'arc':
										r.push(Math.floor((t.y + this.posY - t.radius) / n) + 1),
											r.push(Math.floor((t.y + this.posY + t.radius) / n) + 1);
										break;
									case 'qct':
										var i = B(
											this.ctx.lastPoint.x,
											this.ctx.lastPoint.y,
											t.x1,
											t.y1,
											t.x,
											t.y
										);
										r.push(Math.floor(i.y / n) + 1),
											r.push(Math.floor((i.y + i.h) / n) + 1);
										break;
									case 'bct':
										var o = j(
											this.ctx.lastPoint.x,
											this.ctx.lastPoint.y,
											t.x1,
											t.y1,
											t.x2,
											t.y2,
											t.x,
											t.y
										);
										r.push(Math.floor(o.y / n) + 1),
											r.push(Math.floor((o.y + o.h) / n) + 1);
										break;
									case 'rect':
										r.push(Math.floor((t.y + this.posY) / n) + 1),
											r.push(Math.floor((t.y + t.h + this.posY) / n) + 1);
								}
								for (var a = 0; a < r.length; a += 1)
									for (; this.pdf.internal.getNumberOfPages() < r[a]; )
										g.call(this);
								return r;
							},
							g = function () {
								var t = this.fillStyle,
									e = this.strokeStyle,
									n = this.font,
									r = this.lineCap,
									i = this.lineWidth,
									o = this.lineJoin;
								this.pdf.addPage(),
									(this.fillStyle = t),
									(this.strokeStyle = e),
									(this.font = n),
									(this.lineCap = r),
									(this.lineWidth = i),
									(this.lineJoin = o);
							},
							m = function (t, e, n) {
								for (var r = 0; r < t.length; r++)
									switch (t[r].type) {
										case 'bct':
											(t[r].x2 += e), (t[r].y2 += n);
										case 'qct':
											(t[r].x1 += e), (t[r].y1 += n);
										default:
											(t[r].x += e), (t[r].y += n);
									}
								return t;
							},
							y = function (t, e) {
								for (
									var n,
										r,
										i = this.fillStyle,
										o = this.strokeStyle,
										a = (this.font, this.lineCap),
										s = this.lineWidth,
										h = this.lineJoin,
										u = JSON.parse(JSON.stringify(this.path)),
										l = JSON.parse(JSON.stringify(this.path)),
										c = [],
										f = 0;
									f < l.length;
									f++
								)
									if (void 0 !== l[f].x)
										for (
											var p = d.call(this, l[f]), y = 0;
											y < p.length;
											y += 1
										)
											-1 === c.indexOf(p[y]) && c.push(p[y]);
								for (f = 0; f < c.length; f++)
									for (; this.pdf.internal.getNumberOfPages() < c[f]; )
										g.call(this);
								if ((c.sort(), this.autoPaging)) {
									var w = c[0],
										b = c[c.length - 1];
									for (f = w; f < b + 1; f++) {
										if (
											(this.pdf.setPage(f),
											(this.fillStyle = i),
											(this.strokeStyle = o),
											(this.lineCap = a),
											(this.lineWidth = s),
											(this.lineJoin = h),
											0 !== this.ctx.clip_path.length)
										) {
											var x = this.path;
											(n = JSON.parse(JSON.stringify(this.ctx.clip_path))),
												(this.path = m(
													n,
													this.posX,
													-1 * this.pdf.internal.pageSize.height * (f - 1) +
														this.posY
												)),
												v.call(this, t, !0),
												(this.path = x);
										}
										(r = JSON.parse(JSON.stringify(u))),
											(this.path = m(
												r,
												this.posX,
												-1 * this.pdf.internal.pageSize.height * (f - 1) +
													this.posY
											)),
											(!1 !== e && 0 !== f) || v.call(this, t, e);
									}
								} else v.call(this, t, e);
								this.path = u;
							},
							v = function (t, e) {
								if (
									('stroke' !== t || e || !p.call(this)) &&
									('stroke' === t || e || !f.call(this))
								) {
									var n = [];
									this.ctx.globalAlpha,
										this.ctx.fillOpacity < 1 && this.ctx.fillOpacity;
									for (var r, i = this.path, o = 0; o < i.length; o++) {
										var a = i[o];
										switch (a.type) {
											case 'begin':
												n.push({begin: !0});
												break;
											case 'close':
												n.push({close: !0});
												break;
											case 'mt':
												n.push({start: a, deltas: [], abs: []});
												break;
											case 'lt':
												var s = n.length;
												if (!isNaN(i[o - 1].x)) {
													var h = [a.x - i[o - 1].x, a.y - i[o - 1].y];
													if (0 < s)
														for (; 0 <= s; s--)
															if (
																!0 !== n[s - 1].close &&
																!0 !== n[s - 1].begin
															) {
																n[s - 1].deltas.push(h), n[s - 1].abs.push(a);
																break;
															}
												}
												break;
											case 'bct':
												(h = [
													a.x1 - i[o - 1].x,
													a.y1 - i[o - 1].y,
													a.x2 - i[o - 1].x,
													a.y2 - i[o - 1].y,
													a.x - i[o - 1].x,
													a.y - i[o - 1].y,
												]),
													n[n.length - 1].deltas.push(h);
												break;
											case 'qct':
												var u = i[o - 1].x + (2 / 3) * (a.x1 - i[o - 1].x),
													l = i[o - 1].y + (2 / 3) * (a.y1 - i[o - 1].y),
													c = a.x + (2 / 3) * (a.x1 - a.x),
													d = a.y + (2 / 3) * (a.y1 - a.y),
													g = a.x,
													m = a.y;
												(h = [
													u - i[o - 1].x,
													l - i[o - 1].y,
													c - i[o - 1].x,
													d - i[o - 1].y,
													g - i[o - 1].x,
													m - i[o - 1].y,
												]),
													n[n.length - 1].deltas.push(h);
												break;
											case 'arc':
												n.push({deltas: [], abs: [], arc: !0}),
													Array.isArray(n[n.length - 1].abs) &&
														n[n.length - 1].abs.push(a);
										}
									}
									for (
										r = e ? null : 'stroke' === t ? 'stroke' : 'fill', o = 0;
										o < n.length;
										o++
									) {
										if (n[o].arc)
											for (var y = n[o].abs, v = 0; v < y.length; v++) {
												var w = y[v];
												if (void 0 !== w.startAngle) {
													var L = I(w.startAngle),
														A = I(w.endAngle),
														F = w.x,
														P = w.y;
													b.call(
														this,
														F,
														P,
														w.radius,
														L,
														A,
														w.counterclockwise,
														r,
														e
													);
												} else S.call(this, w.x, w.y);
											}
										n[o].arc ||
											!0 === n[o].close ||
											!0 === n[o].begin ||
											((F = n[o].start.x),
											(P = n[o].start.y),
											_.call(this, n[o].deltas, F, P, null, null));
									}
									r && x.call(this, r), e && N.call(this);
								}
							},
							w = function (t) {
								var e =
										this.pdf.internal.getFontSize() /
										this.pdf.internal.scaleFactor,
									n = e * (this.pdf.internal.getLineHeightFactor() - 1);
								switch (this.ctx.textBaseline) {
									case 'bottom':
										return t - n;
									case 'top':
										return t + e - n;
									case 'hanging':
										return t + e - 2 * n;
									case 'middle':
										return t + e / 2 - n;
									default:
										return t;
								}
							};
						(l.prototype.createLinearGradient = function () {
							var t = function () {};
							return (
								(t.colorStops = []),
								(t.addColorStop = function (t, e) {
									this.colorStops.push([t, e]);
								}),
								(t.getColor = function () {
									return 0 === this.colorStops.length
										? '#000000'
										: this.colorStops[0][1];
								}),
								(t.isCanvasGradient = !0),
								t
							);
						}),
							(l.prototype.createPattern = function () {
								return this.createLinearGradient();
							}),
							(l.prototype.createRadialGradient = function () {
								return this.createLinearGradient();
							});
						var b = function (t, e, n, r, i, o, a, s) {
								this.pdf.internal.scaleFactor;
								for (
									var h = C(r), u = C(i), l = P.call(this, n, h, u, o), c = 0;
									c < l.length;
									c++
								) {
									var f = l[c];
									0 === c && L.call(this, f.x1 + t, f.y1 + e),
										F.call(this, t, e, f.x2, f.y2, f.x3, f.y3, f.x4, f.y4);
								}
								s ? N.call(this) : x.call(this, a);
							},
							x = function (t) {
								switch (t) {
									case 'stroke':
										this.pdf.internal.out('S');
										break;
									case 'fill':
										this.pdf.internal.out('f');
								}
							},
							N = function () {
								this.pdf.clip();
							},
							L = function (t, e) {
								this.pdf.internal.out(i(t) + ' ' + a(e) + ' m');
							},
							A = function (t) {
								var e;
								switch (t.align) {
									case 'right':
									case 'end':
										e = 'right';
										break;
									case 'center':
										e = 'center';
										break;
									default:
										e = 'left';
								}
								var n = this.ctx.transform.applyToPoint(new E(t.x, t.y)),
									r = this.ctx.transform.decompose(),
									i = new O();
								i = (i = (i = i.multiply(r.translate)).multiply(
									r.skew
								)).multiply(r.scale);
								for (
									var o,
										a = this.pdf.getTextDimensions(t.text),
										s = this.ctx.transform.applyToRectangle(
											new M(t.x, t.y, a.w, a.h)
										),
										h = i.applyToRectangle(new M(t.x, t.y - a.h, a.w, a.h)),
										u = d.call(this, h),
										l = [],
										c = 0;
									c < u.length;
									c += 1
								)
									-1 === l.indexOf(u[c]) && l.push(u[c]);
								if ((l.sort(), !0 === this.autoPaging))
									for (
										var f = l[0], p = l[l.length - 1], g = f;
										g < p + 1;
										g++
									) {
										if (
											(this.pdf.setPage(g), 0 !== this.ctx.clip_path.length)
										) {
											var y = this.path;
											(o = JSON.parse(JSON.stringify(this.ctx.clip_path))),
												(this.path = m(
													o,
													this.posX,
													-1 * this.pdf.internal.pageSize.height * (g - 1) +
														this.posY
												)),
												v.call(this, 'fill', !0),
												(this.path = y);
										}
										var w = JSON.parse(JSON.stringify(s));
										if (
											((w = m(
												[w],
												this.posX,
												-1 * this.pdf.internal.pageSize.height * (g - 1) +
													this.posY
											)[0]),
											0.01 <= t.scale)
										) {
											var b = this.pdf.internal.getFontSize();
											this.pdf.setFontSize(b * t.scale);
										}
										this.pdf.text(t.text, w.x, w.y, {
											angle: t.angle,
											align: e,
											renderingMode: t.renderingMode,
											maxWidth: t.maxWidth,
										}),
											0.01 <= t.scale && this.pdf.setFontSize(b);
									}
								else
									0.01 <= t.scale &&
										((b = this.pdf.internal.getFontSize()),
										this.pdf.setFontSize(b * t.scale)),
										this.pdf.text(t.text, n.x + this.posX, n.y + this.posY, {
											angle: t.angle,
											align: e,
											renderingMode: t.renderingMode,
											maxWidth: t.maxWidth,
										}),
										0.01 <= t.scale && this.pdf.setFontSize(b);
							},
							S = function (t, e, n, r) {
								(n = n || 0),
									(r = r || 0),
									this.pdf.internal.out(i(t + n) + ' ' + a(e + r) + ' l');
							},
							_ = function (t, e, n) {
								return this.pdf.lines(t, e, n, null, null);
							},
							F = function (t, e, r, i, o, a, u, l) {
								this.pdf.internal.out(
									[
										n(s(r + t)),
										n(h(i + e)),
										n(s(o + t)),
										n(h(a + e)),
										n(s(u + t)),
										n(h(l + e)),
										'c',
									].join(' ')
								);
							},
							P = function (t, e, n, r) {
								var i = 2 * Math.PI,
									o = e;
								(o < i || i < o) && (o %= i);
								var a = n;
								(a < i || i < a) && (a %= i);
								for (
									var s = [],
										h = Math.PI / 2,
										u = r ? -1 : 1,
										l = e,
										c = Math.min(i, Math.abs(a - o));
									1e-5 < c;

								) {
									var f = l + u * Math.min(c, h);
									s.push(k.call(this, t, l, f)),
										(c -= Math.abs(f - l)),
										(l = f);
								}
								return s;
							},
							k = function (t, e, n) {
								var r = (n - e) / 2,
									i = t * Math.cos(r),
									o = t * Math.sin(r),
									a = i,
									s = -o,
									h = a * a + s * s,
									u = h + a * i + s * o,
									l = ((4 / 3) * (Math.sqrt(2 * h * u) - u)) / (a * o - s * i),
									c = a - l * s,
									f = s + l * a,
									p = c,
									d = -f,
									g = r + e,
									m = Math.cos(g),
									y = Math.sin(g);
								return {
									x1: t * Math.cos(e),
									y1: t * Math.sin(e),
									x2: c * m - f * y,
									y2: c * y + f * m,
									x3: p * m - d * y,
									y3: p * y + d * m,
									x4: t * Math.cos(n),
									y4: t * Math.sin(n),
								};
							},
							I = function (t) {
								return (180 * t) / Math.PI;
							},
							C = function (t) {
								return (t * Math.PI) / 180;
							},
							B = function (t, e, n, r, i, o) {
								var a = t + 0.5 * (n - t),
									s = e + 0.5 * (r - e),
									h = i + 0.5 * (n - i),
									u = o + 0.5 * (r - o),
									l = Math.min(t, i, a, h),
									c = Math.max(t, i, a, h),
									f = Math.min(e, o, s, u),
									p = Math.max(e, o, s, u);
								return new M(l, f, c - l, p - f);
							},
							j = function (t, e, n, r, i, o, a, s) {
								for (
									var h,
										u,
										l,
										c,
										f,
										p,
										d,
										g,
										m,
										y,
										v,
										w,
										b,
										x = n - t,
										N = r - e,
										L = i - n,
										A = o - r,
										S = a - i,
										_ = s - o,
										F = 0;
									F < 41;
									F++
								)
									(g =
										(p =
											(u = t + (h = F / 40) * x) + h * ((c = n + h * L) - u)) +
										h * (c + h * (i + h * S - c) - p)),
										(m =
											(d = (l = e + h * N) + h * ((f = r + h * A) - l)) +
											h * (f + h * (o + h * _ - f) - d)),
										(b =
											0 == F
												? ((w = y = g), (v = m))
												: ((y = Math.min(y, g)),
												  (v = Math.min(v, m)),
												  (w = Math.max(w, g)),
												  Math.max(b, m)));
								return new M(
									Math.round(y),
									Math.round(v),
									Math.round(w - y),
									Math.round(b - v)
								);
							},
							E = function (t, e) {
								var n = t || 0;
								Object.defineProperty(this, 'x', {
									enumerable: !0,
									get: function () {
										return n;
									},
									set: function (t) {
										isNaN(t) || (n = parseFloat(t));
									},
								});
								var r = e || 0;
								Object.defineProperty(this, 'y', {
									enumerable: !0,
									get: function () {
										return r;
									},
									set: function (t) {
										isNaN(t) || (r = parseFloat(t));
									},
								});
								var i = 'pt';
								return (
									Object.defineProperty(this, 'type', {
										enumerable: !0,
										get: function () {
											return i;
										},
										set: function (t) {
											i = t.toString();
										},
									}),
									this
								);
							},
							M = function (t, e, n, r) {
								E.call(this, t, e), (this.type = 'rect');
								var i = n || 0;
								Object.defineProperty(this, 'w', {
									enumerable: !0,
									get: function () {
										return i;
									},
									set: function (t) {
										isNaN(t) || (i = parseFloat(t));
									},
								});
								var o = r || 0;
								return (
									Object.defineProperty(this, 'h', {
										enumerable: !0,
										get: function () {
											return o;
										},
										set: function (t) {
											isNaN(t) || (o = parseFloat(t));
										},
									}),
									this
								);
							},
							O = function (t, e, n, r, i, o) {
								var a = [];
								return (
									Object.defineProperty(this, 'sx', {
										get: function () {
											return a[0];
										},
										set: function (t) {
											a[0] = Math.round(1e5 * t) / 1e5;
										},
									}),
									Object.defineProperty(this, 'shy', {
										get: function () {
											return a[1];
										},
										set: function (t) {
											a[1] = Math.round(1e5 * t) / 1e5;
										},
									}),
									Object.defineProperty(this, 'shx', {
										get: function () {
											return a[2];
										},
										set: function (t) {
											a[2] = Math.round(1e5 * t) / 1e5;
										},
									}),
									Object.defineProperty(this, 'sy', {
										get: function () {
											return a[3];
										},
										set: function (t) {
											a[3] = Math.round(1e5 * t) / 1e5;
										},
									}),
									Object.defineProperty(this, 'tx', {
										get: function () {
											return a[4];
										},
										set: function (t) {
											a[4] = Math.round(1e5 * t) / 1e5;
										},
									}),
									Object.defineProperty(this, 'ty', {
										get: function () {
											return a[5];
										},
										set: function (t) {
											a[5] = Math.round(1e5 * t) / 1e5;
										},
									}),
									Object.defineProperty(this, 'rotation', {
										get: function () {
											return Math.atan2(this.shx, this.sx);
										},
									}),
									Object.defineProperty(this, 'scaleX', {
										get: function () {
											return this.decompose().scale.sx;
										},
									}),
									Object.defineProperty(this, 'scaleY', {
										get: function () {
											return this.decompose().scale.sy;
										},
									}),
									Object.defineProperty(this, 'isIdentity', {
										get: function () {
											return (
												1 === this.sx &&
												0 === this.shy &&
												0 === this.shx &&
												1 === this.sy &&
												0 === this.tx &&
												0 === this.ty
											);
										},
									}),
									(this.sx = isNaN(t) ? 1 : t),
									(this.shy = isNaN(e) ? 0 : e),
									(this.shx = isNaN(n) ? 0 : n),
									(this.sy = isNaN(r) ? 1 : r),
									(this.tx = isNaN(i) ? 0 : i),
									(this.ty = isNaN(o) ? 0 : o),
									this
								);
							};
						(O.prototype.multiply = function (t) {
							var e = t.sx * this.sx + t.shy * this.shx,
								n = t.sx * this.shy + t.shy * this.sy,
								r = t.shx * this.sx + t.sy * this.shx,
								i = t.shx * this.shy + t.sy * this.sy,
								o = t.tx * this.sx + t.ty * this.shx + this.tx,
								a = t.tx * this.shy + t.ty * this.sy + this.ty;
							return new O(e, n, r, i, o, a);
						}),
							(O.prototype.decompose = function () {
								var t = this.sx,
									e = this.shy,
									n = this.shx,
									r = this.sy,
									i = this.tx,
									o = this.ty,
									a = Math.sqrt(t * t + e * e),
									s = (t /= a) * n + (e /= a) * r;
								(n -= t * s), (r -= e * s);
								var h = Math.sqrt(n * n + r * r);
								return (
									(s /= h),
									t * (r /= h) < e * (n /= h) &&
										((t = -t), (e = -e), (s = -s), (a = -a)),
									{
										scale: new O(a, 0, 0, h, 0, 0),
										translate: new O(1, 0, 0, 1, i, o),
										rotate: new O(t, e, -e, t, 0, 0),
										skew: new O(1, 0, s, 1, 0, 0),
									}
								);
							}),
							(O.prototype.applyToPoint = function (t) {
								var e = t.x * this.sx + t.y * this.shx + this.tx,
									n = t.x * this.shy + t.y * this.sy + this.ty;
								return new E(e, n);
							}),
							(O.prototype.applyToRectangle = function (t) {
								var e = this.applyToPoint(t),
									n = this.applyToPoint(new E(t.x + t.w, t.y + t.h));
								return new M(e.x, e.y, n.x - e.x, n.y - e.y);
							}),
							(O.prototype.clone = function () {
								var t = this.sx,
									e = this.shy,
									n = this.shx,
									r = this.sy,
									i = this.tx,
									o = this.ty;
								return new O(t, e, n, r, i, o);
							});
					})(
						dt.API,
						('undefined' != typeof self && self) ||
							('undefined' != typeof window && window) ||
							(void 0 !== n.g && n.g) ||
							Function('return typeof this === "object" && this.content')() ||
							Function('return this')()
					),
					(m = dt.API),
					(y = function (t) {
						var e, n, r, i, o, a, s, h, u, l;
						for (
							/[^\x00-\xFF]/.test(t),
								n = [],
								r = 0,
								i = (t += e = '\0\0\0\0'.slice(t.length % 4 || 4)).length;
							r < i;
							r += 4
						)
							0 !==
							(o =
								(t.charCodeAt(r) << 24) +
								(t.charCodeAt(r + 1) << 16) +
								(t.charCodeAt(r + 2) << 8) +
								t.charCodeAt(r + 3))
								? ((a =
										(o =
											((o =
												((o =
													((o = (o - (l = o % 85)) / 85) - (u = o % 85)) / 85) -
													(h = o % 85)) /
												85) -
												(s = o % 85)) /
											85) % 85),
								  n.push(a + 33, s + 33, h + 33, u + 33, l + 33))
								: n.push(122);
						return (
							(function (t, n) {
								for (var r = e.length; 0 < r; r--) t.pop();
							})(n),
							String.fromCharCode.apply(String, n) + '~>'
						);
					}),
					(v = function (t) {
						var e,
							n,
							r,
							i,
							o,
							a = String,
							s = 'length',
							h = 'charCodeAt',
							u = 'slice',
							l = 'replace';
						for (
							t[u](-2),
								t = t[u](0, -2)[l](/\s/g, '')[l]('z', '!!!!!'),
								r = [],
								i = 0,
								o = (t += e = 'uuuuu'[u](t[s] % 5 || 5))[s];
							i < o;
							i += 5
						)
							(n =
								52200625 * (t[h](i) - 33) +
								614125 * (t[h](i + 1) - 33) +
								7225 * (t[h](i + 2) - 33) +
								85 * (t[h](i + 3) - 33) +
								(t[h](i + 4) - 33)),
								r.push(
									255 & (n >> 24),
									255 & (n >> 16),
									255 & (n >> 8),
									255 & n
								);
						return (
							(function (t, n) {
								for (var r = e[s]; 0 < r; r--) t.pop();
							})(r),
							a.fromCharCode.apply(a, r)
						);
					}),
					(w = function (t) {
						for (var e = '', n = 0; n < t.length; n += 1)
							e += ('0' + t.charCodeAt(n).toString(16)).slice(-2);
						return e + '>';
					}),
					(b = function (t) {
						var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
						if (
							(-1 !== (t = t.replace(/\s/g, '')).indexOf('>') &&
								(t = t.substr(0, t.indexOf('>'))),
							t.length % 2 && (t += '0'),
							!1 === e.test(t))
						)
							return '';
						for (var n = '', r = 0; r < t.length; r += 2)
							n += String.fromCharCode('0x' + (t[r] + t[r + 1]));
						return n;
					}),
					(x = function (t, e) {
						e = Object.assign(
							{predictor: 1, colors: 1, bitsPerComponent: 8, columns: 1},
							e
						);
						for (var n, r, i = [], o = t.length; o--; ) i[o] = t.charCodeAt(o);
						return (
							(n = m.adler32cs.from(t)),
							(r = new Deflater(6)).append(new Uint8Array(i)),
							(t = r.flush()),
							(i = new Uint8Array(t.length + 6)).set(
								new Uint8Array([120, 156])
							),
							i.set(t, 2),
							i.set(
								new Uint8Array([
									255 & n,
									(n >> 8) & 255,
									(n >> 16) & 255,
									(n >> 24) & 255,
								]),
								t.length + 2
							),
							String.fromCharCode.apply(null, i)
						);
					}),
					(m.processDataByFilters = function (t, e) {
						var n = 0,
							r = t || '',
							i = [];
						for (
							'string' == typeof (e = e || []) && (e = [e]), n = 0;
							n < e.length;
							n += 1
						)
							switch (e[n]) {
								case 'ASCII85Decode':
								case '/ASCII85Decode':
									(r = v(r)), i.push('/ASCII85Encode');
									break;
								case 'ASCII85Encode':
								case '/ASCII85Encode':
									(r = y(r)), i.push('/ASCII85Decode');
									break;
								case 'ASCIIHexDecode':
								case '/ASCIIHexDecode':
									(r = b(r)), i.push('/ASCIIHexEncode');
									break;
								case 'ASCIIHexEncode':
								case '/ASCIIHexEncode':
									(r = w(r)), i.push('/ASCIIHexDecode');
									break;
								case 'FlateEncode':
								case '/FlateEncode':
									(r = x(r)), i.push('/FlateDecode');
									break;
								default:
									throw 'The filter: "' + e[n] + '" is not implemented';
							}
						return {data: r, reverseChain: i.reverse().join(' ')};
					}),
					((N = dt.API).loadFile = function (t, e, n) {
						var r;
						(e = e || !0), (n = n || function () {});
						try {
							r = (function (t, e, n) {
								var r = new XMLHttpRequest(),
									i = [],
									a = 0,
									s = function (t) {
										var e = t.length,
											n = String.fromCharCode;
										for (a = 0; a < e; a += 1) i.push(n(255 & t.charCodeAt(a)));
										return i.join('');
									};
								if (
									(r.open('GET', t, !e),
									r.overrideMimeType('text/plain; charset=x-user-defined'),
									!1 === e &&
										(r.onload = function () {
											return s(this.responseText);
										}),
									r.send(null),
									200 === r.status)
								)
									return e ? s(r.responseText) : void 0;
								o.warn('Unable to load file "' + t + '"');
							})(t, e);
						} catch (t) {
							r = void 0;
						}
						return r;
					}),
					(N.loadImageFile = N.loadFile),
					(L = dt.API),
					(A =
						('undefined' != typeof window && window) ||
						(void 0 !== n.g && n.g)),
					(S = function (t) {
						var e = r(t);
						return 'undefined' === e
							? 'undefined'
							: 'string' === e || t instanceof String
							? 'string'
							: 'number' === e || t instanceof Number
							? 'number'
							: 'function' === e || t instanceof Function
							? 'function'
							: t && t.constructor === Array
							? 'array'
							: t && 1 === t.nodeType
							? 'element'
							: 'object' === e
							? 'object'
							: 'unknown';
					}),
					(_ = function (t, e) {
						var n = document.createElement(t);
						if ((e.className && (n.className = e.className), e.innerHTML)) {
							n.innerHTML = e.innerHTML;
							for (
								var r = n.getElementsByTagName('script'), i = r.length;
								0 < i--;
								null
							)
								r[i].parentNode.removeChild(r[i]);
						}
						for (var o in e.style) n.style[o] = e.style[o];
						return n;
					}),
					((((F = function t(e) {
						var n = Object.assign(
								t.convert(Promise.resolve()),
								JSON.parse(JSON.stringify(t.template))
							),
							r = t.convert(Promise.resolve(), n);
						return (r = r.setProgress(1, t, 1, [t])).set(e);
					}).prototype = Object.create(Promise.prototype)).constructor =
						F).convert = function (t, e) {
						return (t.__proto__ = e || F.prototype), t;
					}),
					(F.template = {
						prop: {
							src: null,
							container: null,
							overlay: null,
							canvas: null,
							img: null,
							pdf: null,
							pageSize: null,
							callback: function () {},
						},
						progress: {val: 0, state: null, n: 0, stack: []},
						opt: {
							filename: 'file.pdf',
							margin: [0, 0, 0, 0],
							enableLinks: !0,
							x: 0,
							y: 0,
							html2canvas: {},
							jsPDF: {},
						},
					}),
					(F.prototype.from = function (t, e) {
						return this.then(function () {
							switch (
								(e =
									e ||
									(function (t) {
										switch (S(t)) {
											case 'string':
												return 'string';
											case 'element':
												return 'canvas' === t.nodeName.toLowerCase
													? 'canvas'
													: 'element';
											default:
												return 'unknown';
										}
									})(t))
							) {
								case 'string':
									return this.set({src: _('div', {innerHTML: t})});
								case 'element':
									return this.set({src: t});
								case 'canvas':
									return this.set({canvas: t});
								case 'img':
									return this.set({img: t});
								default:
									return this.error('Unknown source type.');
							}
						});
					}),
					(F.prototype.to = function (t) {
						switch (t) {
							case 'container':
								return this.toContainer();
							case 'canvas':
								return this.toCanvas();
							case 'img':
								return this.toImg();
							case 'pdf':
								return this.toPdf();
							default:
								return this.error('Invalid target.');
						}
					}),
					(F.prototype.toContainer = function () {
						return this.thenList([
							function () {
								return (
									this.prop.src ||
									this.error('Cannot duplicate - no source HTML.')
								);
							},
							function () {
								return this.prop.pageSize || this.setPageSize();
							},
						]).then(function () {
							var t = {
									position: 'relative',
									display: 'inline-block',
									width:
										Math.max(
											this.prop.src.clientWidth,
											this.prop.src.scrollWidth,
											this.prop.src.offsetWidth
										) + 'px',
									left: 0,
									right: 0,
									top: 0,
									margin: 'auto',
									backgroundColor: 'white',
								},
								e = (function t(e, n) {
									for (
										var r =
												3 === e.nodeType
													? document.createTextNode(e.nodeValue)
													: e.cloneNode(!1),
											i = e.firstChild;
										i;
										i = i.nextSibling
									)
										(!0 !== n && 1 === i.nodeType && 'SCRIPT' === i.nodeName) ||
											r.appendChild(t(i, n));
									return (
										1 === e.nodeType &&
											('CANVAS' === e.nodeName
												? ((r.width = e.width),
												  (r.height = e.height),
												  r.getContext('2d').drawImage(e, 0, 0))
												: ('TEXTAREA' !== e.nodeName &&
														'SELECT' !== e.nodeName) ||
												  (r.value = e.value),
											r.addEventListener(
												'load',
												function () {
													(r.scrollTop = e.scrollTop),
														(r.scrollLeft = e.scrollLeft);
												},
												!0
											)),
										r
									);
								})(this.prop.src, this.opt.html2canvas.javascriptEnabled);
							'BODY' === e.tagName &&
								(t.height =
									Math.max(
										document.body.scrollHeight,
										document.body.offsetHeight,
										document.documentElement.clientHeight,
										document.documentElement.scrollHeight,
										document.documentElement.offsetHeight
									) + 'px'),
								(this.prop.overlay = _('div', {
									className: 'html2pdf__overlay',
									style: {
										position: 'fixed',
										overflow: 'hidden',
										zIndex: 1e3,
										left: '-100000px',
										right: 0,
										bottom: 0,
										top: 0,
									},
								})),
								(this.prop.container = _('div', {
									className: 'html2pdf__container',
									style: t,
								})),
								this.prop.container.appendChild(e),
								this.prop.container.firstChild.appendChild(
									_('div', {
										style: {
											clear: 'both',
											border: '0 none transparent',
											margin: 0,
											padding: 0,
											height: 0,
										},
									})
								),
								(this.prop.container.style.float = 'none'),
								this.prop.overlay.appendChild(this.prop.container),
								document.body.appendChild(this.prop.overlay),
								(this.prop.container.firstChild.style.position = 'relative'),
								(this.prop.container.height =
									Math.max(
										this.prop.container.firstChild.clientHeight,
										this.prop.container.firstChild.scrollHeight,
										this.prop.container.firstChild.offsetHeight
									) + 'px');
						});
					}),
					(F.prototype.toCanvas = function () {
						var t = [
							function () {
								return (
									document.body.contains(this.prop.container) ||
									this.toContainer()
								);
							},
						];
						return this.thenList(t)
							.then(function () {
								var t = Object.assign({}, this.opt.html2canvas);
								if ((delete t.onrendered, this.isHtml2CanvasLoaded()))
									return html2canvas(this.prop.container, t);
							})
							.then(function (t) {
								(this.opt.html2canvas.onrendered || function () {})(t),
									(this.prop.canvas = t),
									document.body.removeChild(this.prop.overlay);
							});
					}),
					(F.prototype.toContext2d = function () {
						var t = [
							function () {
								return (
									document.body.contains(this.prop.container) ||
									this.toContainer()
								);
							},
						];
						return this.thenList(t)
							.then(function () {
								var t = this.opt.jsPDF,
									e = Object.assign(
										{
											async: !0,
											allowTaint: !0,
											backgroundColor: '#ffffff',
											imageTimeout: 15e3,
											logging: !0,
											proxy: null,
											removeContainer: !0,
											foreignObjectRendering: !1,
											useCORS: !1,
										},
										this.opt.html2canvas
									);
								if (
									(delete e.onrendered,
									(t.context2d.autoPaging = !0),
									(t.context2d.posX = this.opt.x),
									(t.context2d.posY = this.opt.y),
									(e.windowHeight = e.windowHeight || 0),
									(e.windowHeight =
										0 == e.windowHeight
											? Math.max(
													this.prop.container.clientHeight,
													this.prop.container.scrollHeight,
													this.prop.container.offsetHeight
											  )
											: e.windowHeight),
									this.isHtml2CanvasLoaded())
								)
									return html2canvas(this.prop.container, e);
							})
							.then(function (t) {
								(this.opt.html2canvas.onrendered || function () {})(t),
									(this.prop.canvas = t),
									document.body.removeChild(this.prop.overlay);
							});
					}),
					(F.prototype.toImg = function () {
						return this.thenList([
							function () {
								return this.prop.canvas || this.toCanvas();
							},
						]).then(function () {
							var t = this.prop.canvas.toDataURL(
								'image/' + this.opt.image.type,
								this.opt.image.quality
							);
							(this.prop.img = document.createElement('img')),
								(this.prop.img.src = t);
						});
					}),
					(F.prototype.toPdf = function () {
						return this.thenList([
							function () {
								return this.toContext2d();
							},
						]).then(function () {
							this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
						});
					}),
					(F.prototype.output = function (t, e, n) {
						return 'img' === (n = n || 'pdf').toLowerCase() ||
							'image' === n.toLowerCase()
							? this.outputImg(t, e)
							: this.outputPdf(t, e);
					}),
					(F.prototype.outputPdf = function (t, e) {
						return this.thenList([
							function () {
								return this.prop.pdf || this.toPdf();
							},
						]).then(function () {
							return this.prop.pdf.output(t, e);
						});
					}),
					(F.prototype.outputImg = function (t, e) {
						return this.thenList([
							function () {
								return this.prop.img || this.toImg();
							},
						]).then(function () {
							switch (t) {
								case void 0:
								case 'img':
									return this.prop.img;
								case 'datauristring':
								case 'dataurlstring':
									return this.prop.img.src;
								case 'datauri':
								case 'dataurl':
									return (document.location.href = this.prop.img.src);
								default:
									throw 'Image output type "' + t + '" is not supported.';
							}
						});
					}),
					(F.prototype.isHtml2CanvasLoaded = function () {
						var t = void 0 !== A.html2canvas;
						return t || o.error('html2canvas not loaded.'), t;
					}),
					(F.prototype.save = function (t) {
						if (this.isHtml2CanvasLoaded())
							return this.thenList([
								function () {
									return this.prop.pdf || this.toPdf();
								},
							])
								.set(t ? {filename: t} : null)
								.then(function () {
									this.prop.pdf.save(this.opt.filename);
								});
					}),
					(F.prototype.doCallback = function (t) {
						if (this.isHtml2CanvasLoaded())
							return this.thenList([
								function () {
									return this.prop.pdf || this.toPdf();
								},
							]).then(function () {
								this.prop.callback(this.prop.pdf);
							});
					}),
					(F.prototype.set = function (t) {
						if ('object' !== S(t)) return this;
						var e = Object.keys(t || {}).map(function (e) {
							if (e in F.template.prop)
								return function () {
									this.prop[e] = t[e];
								};
							switch (e) {
								case 'margin':
									return this.setMargin.bind(this, t.margin);
								case 'jsPDF':
									return function () {
										return (this.opt.jsPDF = t.jsPDF), this.setPageSize();
									};
								case 'pageSize':
									return this.setPageSize.bind(this, t.pageSize);
								default:
									return function () {
										this.opt[e] = t[e];
									};
							}
						}, this);
						return this.then(function () {
							return this.thenList(e);
						});
					}),
					(F.prototype.get = function (t, e) {
						return this.then(function () {
							var n = t in F.template.prop ? this.prop[t] : this.opt[t];
							return e ? e(n) : n;
						});
					}),
					(F.prototype.setMargin = function (t) {
						return this.then(function () {
							switch (S(t)) {
								case 'number':
									t = [t, t, t, t];
								case 'array':
									if (
										(2 === t.length && (t = [t[0], t[1], t[0], t[1]]),
										4 === t.length)
									)
										break;
								default:
									return this.error('Invalid margin array.');
							}
							this.opt.margin = t;
						}).then(this.setPageSize);
					}),
					(F.prototype.setPageSize = function (t) {
						function e(t, e) {
							return Math.floor(((t * e) / 72) * 96);
						}
						return this.then(function () {
							(t = t || dt.getPageSize(this.opt.jsPDF)).hasOwnProperty(
								'inner'
							) ||
								((t.inner = {
									width: t.width - this.opt.margin[1] - this.opt.margin[3],
									height: t.height - this.opt.margin[0] - this.opt.margin[2],
								}),
								(t.inner.px = {
									width: e(t.inner.width, t.k),
									height: e(t.inner.height, t.k),
								}),
								(t.inner.ratio = t.inner.height / t.inner.width)),
								(this.prop.pageSize = t);
						});
					}),
					(F.prototype.setProgress = function (t, e, n, r) {
						return (
							null != t && (this.progress.val = t),
							null != e && (this.progress.state = e),
							null != n && (this.progress.n = n),
							null != r && (this.progress.stack = r),
							(this.progress.ratio = this.progress.val / this.progress.state),
							this
						);
					}),
					(F.prototype.updateProgress = function (t, e, n, r) {
						return this.setProgress(
							t ? this.progress.val + t : null,
							e || null,
							n ? this.progress.n + n : null,
							r ? this.progress.stack.concat(r) : null
						);
					}),
					(F.prototype.then = function (t, e) {
						var n = this;
						return this.thenCore(t, e, function (t, e) {
							return (
								n.updateProgress(null, null, 1, [t]),
								Promise.prototype.then
									.call(this, function (e) {
										return n.updateProgress(null, t), e;
									})
									.then(t, e)
									.then(function (t) {
										return n.updateProgress(1), t;
									})
							);
						});
					}),
					(F.prototype.thenCore = function (t, e, n) {
						n = n || Promise.prototype.then;
						var r = this;
						t && (t = t.bind(r)), e && (e = e.bind(r));
						var i =
								-1 !== Promise.toString().indexOf('[native code]') &&
								'Promise' === Promise.name
									? r
									: F.convert(Object.assign({}, r), Promise.prototype),
							o = n.call(i, t, e);
						return F.convert(o, r.__proto__);
					}),
					(F.prototype.thenExternal = function (t, e) {
						return Promise.prototype.then.call(this, t, e);
					}),
					(F.prototype.thenList = function (t) {
						var e = this;
						return (
							t.forEach(function (t) {
								e = e.thenCore(t);
							}),
							e
						);
					}),
					(F.prototype.catch = function (t) {
						t && (t = t.bind(this));
						var e = Promise.prototype.catch.call(this, t);
						return F.convert(e, this);
					}),
					(F.prototype.catchExternal = function (t) {
						return Promise.prototype.catch.call(this, t);
					}),
					(F.prototype.error = function (t) {
						return this.then(function () {
							throw new Error(t);
						});
					}),
					(F.prototype.using = F.prototype.set),
					(F.prototype.saveAs = F.prototype.save),
					(F.prototype.export = F.prototype.output),
					(F.prototype.run = F.prototype.then),
					(dt.getPageSize = function (t, e, n) {
						if ('object' === r(t)) {
							var i = t;
							(t = i.orientation), (e = i.unit || e), (n = i.format || n);
						}
						(e = e || 'mm'),
							(n = n || 'a4'),
							(t = ('' + (t || 'P')).toLowerCase());
						var o = ('' + n).toLowerCase(),
							a = {
								a0: [2383.94, 3370.39],
								a1: [1683.78, 2383.94],
								a2: [1190.55, 1683.78],
								a3: [841.89, 1190.55],
								a4: [595.28, 841.89],
								a5: [419.53, 595.28],
								a6: [297.64, 419.53],
								a7: [209.76, 297.64],
								a8: [147.4, 209.76],
								a9: [104.88, 147.4],
								a10: [73.7, 104.88],
								b0: [2834.65, 4008.19],
								b1: [2004.09, 2834.65],
								b2: [1417.32, 2004.09],
								b3: [1000.63, 1417.32],
								b4: [708.66, 1000.63],
								b5: [498.9, 708.66],
								b6: [354.33, 498.9],
								b7: [249.45, 354.33],
								b8: [175.75, 249.45],
								b9: [124.72, 175.75],
								b10: [87.87, 124.72],
								c0: [2599.37, 3676.54],
								c1: [1836.85, 2599.37],
								c2: [1298.27, 1836.85],
								c3: [918.43, 1298.27],
								c4: [649.13, 918.43],
								c5: [459.21, 649.13],
								c6: [323.15, 459.21],
								c7: [229.61, 323.15],
								c8: [161.57, 229.61],
								c9: [113.39, 161.57],
								c10: [79.37, 113.39],
								dl: [311.81, 623.62],
								letter: [612, 792],
								'government-letter': [576, 756],
								legal: [612, 1008],
								'junior-legal': [576, 360],
								ledger: [1224, 792],
								tabloid: [792, 1224],
								'credit-card': [153, 243],
							};
						switch (e) {
							case 'pt':
								var s = 1;
								break;
							case 'mm':
								s = 72 / 25.4;
								break;
							case 'cm':
								s = 72 / 2.54;
								break;
							case 'in':
								s = 72;
								break;
							case 'px':
								s = 0.75;
								break;
							case 'pc':
							case 'em':
								s = 12;
								break;
							case 'ex':
								s = 6;
								break;
							default:
								throw 'Invalid unit: ' + e;
						}
						if (a.hasOwnProperty(o))
							var h = a[o][1] / s,
								u = a[o][0] / s;
						else
							try {
								(h = n[1]), (u = n[0]);
							} catch (t) {
								throw new Error('Invalid format: ' + n);
							}
						if ('p' === t || 'portrait' === t) {
							if (((t = 'p'), h < u)) {
								var l = u;
								(u = h), (h = l);
							}
						} else {
							if ('l' !== t && 'landscape' !== t)
								throw 'Invalid orientation: ' + t;
							(t = 'l'), u < h && ((l = u), (u = h), (h = l));
						}
						return {width: u, height: h, unit: e, k: s};
					}),
					(L.html = function (t, e) {
						((e = e || {}).callback = e.callback || function () {}),
							(e.html2canvas = e.html2canvas || {}),
							(e.html2canvas.canvas = e.html2canvas.canvas || this.canvas),
							(e.jsPDF = e.jsPDF || this),
							e.jsPDF;
						var n = new F(e);
						return e.worker ? n : n.from(t).doCallback();
					}),
					(dt.API.addJS = function (t) {
						return (
							(I = t),
							this.internal.events.subscribe('postPutResources', function (t) {
								(P = this.internal.newObject()),
									this.internal.out('<<'),
									this.internal.out(
										'/Names [(EmbeddedJS) ' + (P + 1) + ' 0 R]'
									),
									this.internal.out('>>'),
									this.internal.out('endobj'),
									(k = this.internal.newObject()),
									this.internal.out('<<'),
									this.internal.out('/S /JavaScript'),
									this.internal.out('/JS (' + I + ')'),
									this.internal.out('>>'),
									this.internal.out('endobj');
							}),
							this.internal.events.subscribe('putCatalog', function () {
								void 0 !== P &&
									void 0 !== k &&
									this.internal.out('/Names <</JavaScript ' + P + ' 0 R>>');
							}),
							this
						);
					}),
					(C = dt.API).events.push([
						'postPutResources',
						function () {
							var t = this,
								e = /^(\d+) 0 obj$/;
							if (0 < this.outline.root.children.length)
								for (
									var n = t.outline.render().split(/\r\n/), r = 0;
									r < n.length;
									r++
								) {
									var i = n[r],
										o = e.exec(i);
									if (null != o) {
										var a = o[1];
										t.internal.newObjectDeferredBegin(a, !1);
									}
									t.internal.write(i);
								}
							if (this.outline.createNamedDestinations) {
								var s = this.internal.pages.length,
									h = [];
								for (r = 0; r < s; r++) {
									var u = t.internal.newObject();
									h.push(u);
									var l = t.internal.getPageInfo(r + 1);
									t.internal.write(
										'<< /D[' + l.objId + ' 0 R /XYZ null null null]>> endobj'
									);
								}
								var c = t.internal.newObject();
								for (t.internal.write('<< /Names [ '), r = 0; r < h.length; r++)
									t.internal.write('(page_' + (r + 1) + ')' + h[r] + ' 0 R');
								t.internal.write(' ] >>', 'endobj'),
									t.internal.newObject(),
									t.internal.write('<< /Dests ' + c + ' 0 R'),
									t.internal.write('>>', 'endobj');
							}
						},
					]),
					C.events.push([
						'putCatalog',
						function () {
							0 < this.outline.root.children.length &&
								(this.internal.write(
									'/Outlines',
									this.outline.makeRef(this.outline.root)
								),
								this.outline.createNamedDestinations &&
									this.internal.write('/Names ' + namesOid + ' 0 R'));
						},
					]),
					C.events.push([
						'initialized',
						function () {
							var t = this;
							(t.outline = {createNamedDestinations: !1, root: {children: []}}),
								(t.outline.add = function (t, e, n) {
									var r = {title: e, options: n, children: []};
									return null == t && (t = this.root), t.children.push(r), r;
								}),
								(t.outline.render = function () {
									return (
										(this.ctx = {}),
										(this.ctx.val = ''),
										(this.ctx.pdf = t),
										this.genIds_r(this.root),
										this.renderRoot(this.root),
										this.renderItems(this.root),
										this.ctx.val
									);
								}),
								(t.outline.genIds_r = function (e) {
									e.id = t.internal.newObjectDeferred();
									for (var n = 0; n < e.children.length; n++)
										this.genIds_r(e.children[n]);
								}),
								(t.outline.renderRoot = function (t) {
									this.objStart(t),
										this.line('/Type /Outlines'),
										0 < t.children.length &&
											(this.line('/First ' + this.makeRef(t.children[0])),
											this.line(
												'/Last ' +
													this.makeRef(t.children[t.children.length - 1])
											)),
										this.line('/Count ' + this.count_r({count: 0}, t)),
										this.objEnd();
								}),
								(t.outline.renderItems = function (e) {
									this.ctx.pdf.internal.getCoordinateString;
									for (
										var n = this.ctx.pdf.internal.getVerticalCoordinateString,
											r = 0;
										r < e.children.length;
										r++
									) {
										var i = e.children[r];
										this.objStart(i),
											this.line('/Title ' + this.makeString(i.title)),
											this.line('/Parent ' + this.makeRef(e)),
											0 < r &&
												this.line('/Prev ' + this.makeRef(e.children[r - 1])),
											r < e.children.length - 1 &&
												this.line('/Next ' + this.makeRef(e.children[r + 1])),
											0 < i.children.length &&
												(this.line('/First ' + this.makeRef(i.children[0])),
												this.line(
													'/Last ' +
														this.makeRef(i.children[i.children.length - 1])
												));
										var o = (this.count = this.count_r({count: 0}, i));
										if (
											(0 < o && this.line('/Count ' + o),
											i.options && i.options.pageNumber)
										) {
											var a = t.internal.getPageInfo(i.options.pageNumber);
											this.line(
												'/Dest [' + a.objId + ' 0 R /XYZ 0 ' + n(0) + ' 0]'
											);
										}
										this.objEnd();
									}
									for (r = 0; r < e.children.length; r++)
										(i = e.children[r]), this.renderItems(i);
								}),
								(t.outline.line = function (t) {
									this.ctx.val += t + '\r\n';
								}),
								(t.outline.makeRef = function (t) {
									return t.id + ' 0 R';
								}),
								(t.outline.makeString = function (e) {
									return '(' + t.internal.pdfEscape(e) + ')';
								}),
								(t.outline.objStart = function (t) {
									this.ctx.val += '\r\n' + t.id + ' 0 obj\r\n<<\r\n';
								}),
								(t.outline.objEnd = function (t) {
									this.ctx.val += '>> \r\nendobj\r\n';
								}),
								(t.outline.count_r = function (t, e) {
									for (var n = 0; n < e.children.length; n++)
										t.count++, this.count_r(t, e.children[n]);
									return t.count;
								});
						},
					]),
					(B = dt.API),
					(j = function () {
						var t = 'function' == typeof Deflater;
						if (!t) throw new Error('requires deflate.js for compression');
						return t;
					}),
					(E = function (t, e, n, r) {
						var i = 5,
							o = D;
						switch (r) {
							case B.image_compression.FAST:
								(i = 3), (o = R);
								break;
							case B.image_compression.MEDIUM:
								(i = 6), (o = U);
								break;
							case B.image_compression.SLOW:
								(i = 9), (o = z);
						}
						t = q(t, e, n, o);
						var a = new Uint8Array(M(i)),
							s = O(t),
							h = new Deflater(i),
							u = h.append(t),
							l = h.flush(),
							c = a.length + u.length + l.length,
							f = new Uint8Array(c + 4);
						return (
							f.set(a),
							f.set(u, a.length),
							f.set(l, a.length + u.length),
							(f[c++] = (s >>> 24) & 255),
							(f[c++] = (s >>> 16) & 255),
							(f[c++] = (s >>> 8) & 255),
							(f[c++] = 255 & s),
							B.arrayBufferToBinaryString(f)
						);
					}),
					(M = function (t, e) {
						var n = ((Math.LOG2E * Math.log(32768) - 8) << 4) | 8,
							r = n << 8;
						return (
							(r |= Math.min(3, ((e - 1) & 255) >> 1) << 6),
							(r |= 0),
							[n, 255 & (r += 31 - (r % 31))]
						);
					}),
					(O = function (t, e) {
						for (var n, r = 1, i = 0, o = t.length, a = 0; 0 < o; ) {
							for (o -= n = e < o ? e : o; (i += r += t[a++]), --n; );
							(r %= 65521), (i %= 65521);
						}
						return ((i << 16) | r) >>> 0;
					}),
					(q = function (t, e, n, r) {
						for (
							var i,
								o,
								a,
								s = t.length / e,
								h = new Uint8Array(t.length + s),
								u = W(),
								l = 0;
							l < s;
							l++
						) {
							if (((a = l * e), (i = t.subarray(a, a + e)), r))
								h.set(r(i, n, o), a + l);
							else {
								for (var c = 0, f = u.length, p = []; c < f; c++)
									p[c] = u[c](i, n, o);
								var d = V(p.concat());
								h.set(p[d], a + l);
							}
							o = i;
						}
						return h;
					}),
					(T = function (t, e, n) {
						var r = Array.apply([], t);
						return r.unshift(0), r;
					}),
					(R = function (t, e, n) {
						var r,
							i = [],
							o = 0,
							a = t.length;
						for (i[0] = 1; o < a; o++)
							(r = t[o - e] || 0), (i[o + 1] = (t[o] - r + 256) & 255);
						return i;
					}),
					(D = function (t, e, n) {
						var r,
							i = [],
							o = 0,
							a = t.length;
						for (i[0] = 2; o < a; o++)
							(r = (n && n[o]) || 0), (i[o + 1] = (t[o] - r + 256) & 255);
						return i;
					}),
					(U = function (t, e, n) {
						var r,
							i,
							o = [],
							a = 0,
							s = t.length;
						for (o[0] = 3; a < s; a++)
							(r = t[a - e] || 0),
								(i = (n && n[a]) || 0),
								(o[a + 1] = (t[a] + 256 - ((r + i) >>> 1)) & 255);
						return o;
					}),
					(z = function (t, e, n) {
						var r,
							i,
							o,
							a,
							s = [],
							h = 0,
							u = t.length;
						for (s[0] = 4; h < u; h++)
							(r = t[h - e] || 0),
								(i = (n && n[h]) || 0),
								(o = (n && n[h - e]) || 0),
								(a = H(r, i, o)),
								(s[h + 1] = (t[h] - a + 256) & 255);
						return s;
					}),
					(H = function (t, e, n) {
						var r = t + e - n,
							i = Math.abs(r - t),
							o = Math.abs(r - e),
							a = Math.abs(r - n);
						return i <= o && i <= a ? t : o <= a ? e : n;
					}),
					(W = function () {
						return [T, R, D, U, z];
					}),
					(V = function (t) {
						for (var e, n, r, i = 0, o = t.length; i < o; )
							((e = G(t[i].slice(1))) < n || !n) && ((n = e), (r = i)), i++;
						return r;
					}),
					(G = function (t) {
						for (var e = 0, n = t.length, r = 0; e < n; ) r += Math.abs(t[e++]);
						return r;
					}),
					(B.processPNG = function (t, e, n, r, i) {
						var o,
							a,
							s,
							h,
							u,
							l,
							c = this.color_spaces.DEVICE_RGB,
							f = this.decode.FLATE_DECODE,
							p = 8;
						if (
							(this.isArrayBuffer(t) && (t = new Uint8Array(t)),
							this.isArrayBufferView(t))
						) {
							if ('function' != typeof PNG || 'function' != typeof Ot)
								throw new Error('PNG support requires png.js and zlib.js');
							if (
								((t = (o = new PNG(t)).imgData),
								(p = o.bits),
								(c = o.colorSpace),
								(h = o.colors),
								-1 !== [4, 6].indexOf(o.colorType))
							) {
								if (8 === o.bits)
									for (
										var d,
											g = (_ =
												32 == o.pixelBitlength
													? new Uint32Array(o.decodePixels().buffer)
													: 16 == o.pixelBitlength
													? new Uint16Array(o.decodePixels().buffer)
													: new Uint8Array(o.decodePixels().buffer)).length,
											m = new Uint8Array(g * o.colors),
											y = new Uint8Array(g),
											v = o.pixelBitlength - o.bits,
											w = 0,
											b = 0;
										w < g;
										w++
									) {
										for (x = _[w], d = 0; d < v; )
											(m[b++] = (x >>> d) & 255), (d += o.bits);
										y[w] = (x >>> d) & 255;
									}
								if (16 === o.bits) {
									(g = (_ = new Uint32Array(o.decodePixels().buffer)).length),
										(m = new Uint8Array(
											g * (32 / o.pixelBitlength) * o.colors
										)),
										(y = new Uint8Array(g * (32 / o.pixelBitlength)));
									for (var x, N = 1 < o.colors, L = (b = w = 0); w < g; )
										(x = _[w++]),
											(m[b++] = (x >>> 0) & 255),
											N &&
												((m[b++] = (x >>> 16) & 255),
												(x = _[w++]),
												(m[b++] = (x >>> 0) & 255)),
											(y[L++] = (x >>> 16) & 255);
									p = 8;
								}
								r !== B.image_compression.NONE && j()
									? ((t = E(m, o.width * o.colors, o.colors, r)),
									  (l = E(y, o.width, 1, r)))
									: ((t = m), (l = y), (f = null));
							}
							if (
								3 === o.colorType &&
								((c = this.color_spaces.INDEXED),
								(u = o.palette),
								o.transparency.indexed)
							) {
								var A = o.transparency.indexed,
									S = 0;
								for (w = 0, g = A.length; w < g; ++w) S += A[w];
								if ((S /= 255) == g - 1 && -1 !== A.indexOf(0))
									s = [A.indexOf(0)];
								else if (S !== g) {
									var _ = o.decodePixels();
									for (
										y = new Uint8Array(_.length), w = 0, g = _.length;
										w < g;
										w++
									)
										y[w] = A[_[w]];
									l = E(y, o.width, 1);
								}
							}
							var F = (function (t) {
								var e;
								switch (t) {
									case B.image_compression.FAST:
										e = 11;
										break;
									case B.image_compression.MEDIUM:
										e = 13;
										break;
									case B.image_compression.SLOW:
										e = 14;
										break;
									default:
										e = 12;
								}
								return e;
							})(r);
							return (
								(a =
									f === this.decode.FLATE_DECODE
										? '/Predictor ' +
										  F +
										  ' /Colors ' +
										  h +
										  ' /BitsPerComponent ' +
										  p +
										  ' /Columns ' +
										  o.width
										: '/Colors ' +
										  h +
										  ' /BitsPerComponent ' +
										  p +
										  ' /Columns ' +
										  o.width),
								(this.isArrayBuffer(t) || this.isArrayBufferView(t)) &&
									(t = this.arrayBufferToBinaryString(t)),
								((l && this.isArrayBuffer(l)) || this.isArrayBufferView(l)) &&
									(l = this.arrayBufferToBinaryString(l)),
								this.createImageInfo(
									t,
									o.width,
									o.height,
									c,
									p,
									f,
									e,
									n,
									a,
									s,
									u,
									l,
									F
								)
							);
						}
						throw new Error(
							'Unsupported PNG image data, try using JPEG instead.'
						);
					}),
					((Y = dt.API).processGIF89A = function (t, e, n, r, i) {
						var o = new Ct(t),
							a = o.width,
							s = o.height,
							h = [];
						o.decodeAndBlitFrameRGBA(0, h);
						var u = {data: h, width: a, height: s},
							l = new jt(100).encode(u, 100);
						return Y.processJPEG.call(this, l, e, n, r);
					}),
					(Y.processGIF87A = Y.processGIF89A),
					((J = dt.API).processBMP = function (t, e, n, r, i) {
						var o = new Et(t, !1),
							a = o.width,
							s = o.height,
							h = {data: o.getData(), width: a, height: s},
							u = new jt(100).encode(h, 100);
						return J.processJPEG.call(this, u, e, n, r);
					}),
					(dt.API.setLanguage = function (t) {
						return (
							void 0 === this.internal.languageSettings &&
								((this.internal.languageSettings = {}),
								(this.internal.languageSettings.isSubscribed = !1)),
							void 0 !==
								{
									af: 'Afrikaans',
									sq: 'Albanian',
									ar: 'Arabic (Standard)',
									'ar-DZ': 'Arabic (Algeria)',
									'ar-BH': 'Arabic (Bahrain)',
									'ar-EG': 'Arabic (Egypt)',
									'ar-IQ': 'Arabic (Iraq)',
									'ar-JO': 'Arabic (Jordan)',
									'ar-KW': 'Arabic (Kuwait)',
									'ar-LB': 'Arabic (Lebanon)',
									'ar-LY': 'Arabic (Libya)',
									'ar-MA': 'Arabic (Morocco)',
									'ar-OM': 'Arabic (Oman)',
									'ar-QA': 'Arabic (Qatar)',
									'ar-SA': 'Arabic (Saudi Arabia)',
									'ar-SY': 'Arabic (Syria)',
									'ar-TN': 'Arabic (Tunisia)',
									'ar-AE': 'Arabic (U.A.E.)',
									'ar-YE': 'Arabic (Yemen)',
									an: 'Aragonese',
									hy: 'Armenian',
									as: 'Assamese',
									ast: 'Asturian',
									az: 'Azerbaijani',
									eu: 'Basque',
									be: 'Belarusian',
									bn: 'Bengali',
									bs: 'Bosnian',
									br: 'Breton',
									bg: 'Bulgarian',
									my: 'Burmese',
									ca: 'Catalan',
									ch: 'Chamorro',
									ce: 'Chechen',
									zh: 'Chinese',
									'zh-HK': 'Chinese (Hong Kong)',
									'zh-CN': 'Chinese (PRC)',
									'zh-SG': 'Chinese (Singapore)',
									'zh-TW': 'Chinese (Taiwan)',
									cv: 'Chuvash',
									co: 'Corsican',
									cr: 'Cree',
									hr: 'Croatian',
									cs: 'Czech',
									da: 'Danish',
									nl: 'Dutch (Standard)',
									'nl-BE': 'Dutch (Belgian)',
									en: 'English',
									'en-AU': 'English (Australia)',
									'en-BZ': 'English (Belize)',
									'en-CA': 'English (Canada)',
									'en-IE': 'English (Ireland)',
									'en-JM': 'English (Jamaica)',
									'en-NZ': 'English (New Zealand)',
									'en-PH': 'English (Philippines)',
									'en-ZA': 'English (South Africa)',
									'en-TT': 'English (Trinidad & Tobago)',
									'en-GB': 'English (United Kingdom)',
									'en-US': 'English (United States)',
									'en-ZW': 'English (Zimbabwe)',
									eo: 'Esperanto',
									et: 'Estonian',
									fo: 'Faeroese',
									fj: 'Fijian',
									fi: 'Finnish',
									fr: 'French (Standard)',
									'fr-BE': 'French (Belgium)',
									'fr-CA': 'French (Canada)',
									'fr-FR': 'French (France)',
									'fr-LU': 'French (Luxembourg)',
									'fr-MC': 'French (Monaco)',
									'fr-CH': 'French (Switzerland)',
									fy: 'Frisian',
									fur: 'Friulian',
									gd: 'Gaelic (Scots)',
									'gd-IE': 'Gaelic (Irish)',
									gl: 'Galacian',
									ka: 'Georgian',
									de: 'German (Standard)',
									'de-AT': 'German (Austria)',
									'de-DE': 'German (Germany)',
									'de-LI': 'German (Liechtenstein)',
									'de-LU': 'German (Luxembourg)',
									'de-CH': 'German (Switzerland)',
									el: 'Greek',
									gu: 'Gujurati',
									ht: 'Haitian',
									he: 'Hebrew',
									hi: 'Hindi',
									hu: 'Hungarian',
									is: 'Icelandic',
									id: 'Indonesian',
									iu: 'Inuktitut',
									ga: 'Irish',
									it: 'Italian (Standard)',
									'it-CH': 'Italian (Switzerland)',
									ja: 'Japanese',
									kn: 'Kannada',
									ks: 'Kashmiri',
									kk: 'Kazakh',
									km: 'Khmer',
									ky: 'Kirghiz',
									tlh: 'Klingon',
									ko: 'Korean',
									'ko-KP': 'Korean (North Korea)',
									'ko-KR': 'Korean (South Korea)',
									la: 'Latin',
									lv: 'Latvian',
									lt: 'Lithuanian',
									lb: 'Luxembourgish',
									mk: 'FYRO Macedonian',
									ms: 'Malay',
									ml: 'Malayalam',
									mt: 'Maltese',
									mi: 'Maori',
									mr: 'Marathi',
									mo: 'Moldavian',
									nv: 'Navajo',
									ng: 'Ndonga',
									ne: 'Nepali',
									no: 'Norwegian',
									nb: 'Norwegian (Bokmal)',
									nn: 'Norwegian (Nynorsk)',
									oc: 'Occitan',
									or: 'Oriya',
									om: 'Oromo',
									fa: 'Persian',
									'fa-IR': 'Persian/Iran',
									pl: 'Polish',
									pt: 'Portuguese',
									'pt-BR': 'Portuguese (Brazil)',
									pa: 'Punjabi',
									'pa-IN': 'Punjabi (India)',
									'pa-PK': 'Punjabi (Pakistan)',
									qu: 'Quechua',
									rm: 'Rhaeto-Romanic',
									ro: 'Romanian',
									'ro-MO': 'Romanian (Moldavia)',
									ru: 'Russian',
									'ru-MO': 'Russian (Moldavia)',
									sz: 'Sami (Lappish)',
									sg: 'Sango',
									sa: 'Sanskrit',
									sc: 'Sardinian',
									sd: 'Sindhi',
									si: 'Singhalese',
									sr: 'Serbian',
									sk: 'Slovak',
									sl: 'Slovenian',
									so: 'Somani',
									sb: 'Sorbian',
									es: 'Spanish',
									'es-AR': 'Spanish (Argentina)',
									'es-BO': 'Spanish (Bolivia)',
									'es-CL': 'Spanish (Chile)',
									'es-CO': 'Spanish (Colombia)',
									'es-CR': 'Spanish (Costa Rica)',
									'es-DO': 'Spanish (Dominican Republic)',
									'es-EC': 'Spanish (Ecuador)',
									'es-SV': 'Spanish (El Salvador)',
									'es-GT': 'Spanish (Guatemala)',
									'es-HN': 'Spanish (Honduras)',
									'es-MX': 'Spanish (Mexico)',
									'es-NI': 'Spanish (Nicaragua)',
									'es-PA': 'Spanish (Panama)',
									'es-PY': 'Spanish (Paraguay)',
									'es-PE': 'Spanish (Peru)',
									'es-PR': 'Spanish (Puerto Rico)',
									'es-ES': 'Spanish (Spain)',
									'es-UY': 'Spanish (Uruguay)',
									'es-VE': 'Spanish (Venezuela)',
									sx: 'Sutu',
									sw: 'Swahili',
									sv: 'Swedish',
									'sv-FI': 'Swedish (Finland)',
									'sv-SV': 'Swedish (Sweden)',
									ta: 'Tamil',
									tt: 'Tatar',
									te: 'Teluga',
									th: 'Thai',
									tig: 'Tigre',
									ts: 'Tsonga',
									tn: 'Tswana',
									tr: 'Turkish',
									tk: 'Turkmen',
									uk: 'Ukrainian',
									hsb: 'Upper Sorbian',
									ur: 'Urdu',
									ve: 'Venda',
									vi: 'Vietnamese',
									vo: 'Volapuk',
									wa: 'Walloon',
									cy: 'Welsh',
									xh: 'Xhosa',
									ji: 'Yiddish',
									zu: 'Zulu',
								}[t] &&
								((this.internal.languageSettings.languageCode = t),
								!1 === this.internal.languageSettings.isSubscribed &&
									(this.internal.events.subscribe('putCatalog', function () {
										this.internal.write(
											'/Lang (' +
												this.internal.languageSettings.languageCode +
												')'
										);
									}),
									(this.internal.languageSettings.isSubscribed = !0))),
							this
						);
					}),
					(X = dt.API),
					(K = X.getCharWidthsArray =
						function (t, e) {
							var n,
								r,
								i,
								o = (e = e || {}).font || this.internal.getFont(),
								a = e.fontSize || this.internal.getFontSize(),
								s = e.charSpace || this.internal.getCharSpace(),
								h = e.widths ? e.widths : o.metadata.Unicode.widths,
								u = h.fof ? h.fof : 1,
								l = e.kerning ? e.kerning : o.metadata.Unicode.kerning,
								c = l.fof ? l.fof : 1,
								f = 0,
								p = h[0] || u,
								d = [];
							for (n = 0, r = t.length; n < r; n++)
								(i = t.charCodeAt(n)),
									'function' == typeof o.metadata.widthOfString
										? d.push(
												(o.metadata.widthOfGlyph(
													o.metadata.characterToGlyph(i)
												) +
													s * (1e3 / a) || 0) / 1e3
										  )
										: d.push((h[i] || p) / u + ((l[i] && l[i][f]) || 0) / c),
									(f = i);
							return d;
						}),
					(Z = X.getArraySum =
						function (t) {
							for (var e = t.length, n = 0; e; ) n += t[--e];
							return n;
						}),
					(Q = X.getStringUnitWidth =
						function (t, e) {
							var n = (e = e || {}).fontSize || this.internal.getFontSize(),
								r = e.font || this.internal.getFont(),
								i = e.charSpace || this.internal.getCharSpace();
							return 'function' == typeof r.metadata.widthOfString
								? r.metadata.widthOfString(t, n, i) / n
								: Z(K.apply(this, arguments));
						}),
					($ = function (t, e, n, r) {
						for (
							var i = [], o = 0, a = t.length, s = 0;
							o !== a && s + e[o] < n;

						)
							(s += e[o]), o++;
						i.push(t.slice(0, o));
						var h = o;
						for (s = 0; o !== a; )
							s + e[o] > r && (i.push(t.slice(h, o)), (s = 0), (h = o)),
								(s += e[o]),
								o++;
						return h !== o && i.push(t.slice(h, o)), i;
					}),
					(tt = function (t, e, n) {
						n || (n = {});
						var r,
							i,
							o,
							a,
							s,
							h,
							u = [],
							l = [u],
							c = n.textIndent || 0,
							f = 0,
							p = 0,
							d = t.split(' '),
							g = K.apply(this, [' ', n])[0];
						if (
							(h = -1 === n.lineIndent ? d[0].length + 2 : n.lineIndent || 0)
						) {
							var m = Array(h).join(' '),
								y = [];
							d.map(function (t) {
								1 < (t = t.split(/\s*\n/)).length
									? (y = y.concat(
											t.map(function (t, e) {
												return (e && t.length ? '\n' : '') + t;
											})
									  ))
									: y.push(t[0]);
							}),
								(d = y),
								(h = Q.apply(this, [m, n]));
						}
						for (o = 0, a = d.length; o < a; o++) {
							var v = 0;
							if (
								((r = d[o]),
								h && '\n' == r[0] && ((r = r.substr(1)), (v = 1)),
								(i = K.apply(this, [r, n])),
								e < c + f + (p = Z(i)) || v)
							) {
								if (e < p) {
									for (
										s = $.apply(this, [r, i, e - (c + f), e]),
											u.push(s.shift()),
											u = [s.pop()];
										s.length;

									)
										l.push([s.shift()]);
									p = Z(i.slice(r.length - (u[0] ? u[0].length : 0)));
								} else u = [r];
								l.push(u), (c = p + h), (f = g);
							} else u.push(r), (c += f + p), (f = g);
						}
						if (h)
							var w = function (t, e) {
								return (e ? m : '') + t.join(' ');
							};
						else
							w = function (t) {
								return t.join(' ');
							};
						return l.map(w);
					}),
					(X.splitTextToSize = function (t, e, n) {
						var r,
							i = (n = n || {}).fontSize || this.internal.getFontSize(),
							o = function (t) {
								if (t.widths && t.kerning)
									return {widths: t.widths, kerning: t.kerning};
								var e = this.internal.getFont(t.fontName, t.fontStyle),
									n = 'Unicode';
								return e.metadata[n]
									? {
											widths: e.metadata[n].widths || {0: 1},
											kerning: e.metadata[n].kerning || {},
									  }
									: {
											font: e.metadata,
											fontSize: this.internal.getFontSize(),
											charSpace: this.internal.getCharSpace(),
									  };
							}.call(this, n);
						r = Array.isArray(t) ? t : t.split(/\r?\n/);
						var a = (1 * this.internal.scaleFactor * e) / i;
						(o.textIndent = n.textIndent
							? (1 * n.textIndent * this.internal.scaleFactor) / i
							: 0),
							(o.lineIndent = n.lineIndent);
						var s,
							h,
							u = [];
						for (s = 0, h = r.length; s < h; s++)
							u = u.concat(tt.apply(this, [r[s], a, o]));
						return u;
					}),
					(et = dt.API),
					(rt = {
						codePages: ['WinAnsiEncoding'],
						WinAnsiEncoding: (nt = function (t) {
							for (var e = 'klmnopqrstuvwxyz', n = {}, r = 0; r < e.length; r++)
								n[e[r]] = '0123456789abcdef'[r];
							var i,
								o,
								a,
								s,
								h,
								u = {},
								l = 1,
								c = u,
								f = [],
								p = '',
								d = '',
								g = t.length - 1;
							for (r = 1; r != g; )
								(h = t[r]),
									(r += 1),
									"'" == h
										? (o = o ? ((s = o.join('')), i) : [])
										: o
										? o.push(h)
										: '{' == h
										? (f.push([c, s]), (c = {}), (s = i))
										: '}' == h
										? (((a = f.pop())[0][a[1]] = c), (s = i), (c = a[0]))
										: '-' == h
										? (l = -1)
										: s === i
										? n.hasOwnProperty(h)
											? ((p += n[h]),
											  (s = parseInt(p, 16) * l),
											  (l = 1),
											  (p = ''))
											: (p += h)
										: n.hasOwnProperty(h)
										? ((d += n[h]),
										  (c[s] = parseInt(d, 16) * l),
										  (l = 1),
										  (s = i),
										  (d = ''))
										: (d += h);
							return u;
						})(
							'{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}'
						),
					}),
					(it = {
						Unicode: {
							Courier: rt,
							'Courier-Bold': rt,
							'Courier-BoldOblique': rt,
							'Courier-Oblique': rt,
							Helvetica: rt,
							'Helvetica-Bold': rt,
							'Helvetica-BoldOblique': rt,
							'Helvetica-Oblique': rt,
							'Times-Roman': rt,
							'Times-Bold': rt,
							'Times-BoldItalic': rt,
							'Times-Italic': rt,
						},
					}),
					(ot = {
						Unicode: {
							'Courier-Oblique': nt(
								"{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"
							),
							'Times-BoldItalic': nt(
								"{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"
							),
							'Helvetica-Bold': nt(
								"{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
							),
							Courier: nt("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
							'Courier-BoldOblique': nt(
								"{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"
							),
							'Times-Bold': nt(
								"{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"
							),
							Symbol: nt(
								"{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"
							),
							Helvetica: nt(
								"{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
							),
							'Helvetica-BoldOblique': nt(
								"{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
							),
							ZapfDingbats: nt("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
							'Courier-Bold': nt("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
							'Times-Italic': nt(
								"{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"
							),
							'Times-Roman': nt(
								"{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"
							),
							'Helvetica-Oblique': nt(
								"{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
							),
						},
					}),
					et.events.push([
						'addFont',
						function (t) {
							var e,
								n,
								r,
								i = t.font,
								o = 'Unicode';
							(e = ot[o][i.postScriptName]) &&
								(((n = i.metadata[o]
									? i.metadata[o]
									: (i.metadata[o] = {})).widths = e.widths),
								(n.kerning = e.kerning)),
								(r = it[o][i.postScriptName]) &&
									((n = i.metadata[o]
										? i.metadata[o]
										: (i.metadata[o] = {})).encoding = r).codePages &&
									r.codePages.length &&
									(i.encoding = r.codePages[0]);
						},
					]),
					(at = dt),
					('undefined' != typeof self && self) ||
						(void 0 !== n.g && n.g) ||
						('undefined' != typeof window && window) ||
						Function('return this')(),
					at.API.events.push([
						'addFont',
						function (t) {
							var e = t.font,
								n = t.instance;
							if (void 0 !== n && n.existsFileInVFS(e.postScriptName)) {
								var r = n.getFileFromVFS(e.postScriptName);
								if ('string' != typeof r)
									throw new Error(
										"Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" +
											e.postScriptName +
											"')."
									);
								(e.metadata = at.API.TTFFont.open(
									e.postScriptName,
									e.fontName,
									r,
									e.encoding
								)),
									(e.metadata.Unicode = e.metadata.Unicode || {
										encoding: {},
										kerning: {},
										widths: [],
									}),
									(e.metadata.glyIdsUsed = [0]);
							} else if (!1 === e.isStandardFont)
								throw new Error(
									"Font does not exist in vFS, import fonts or remove declaration doc.addFont('" +
										e.postScriptName +
										"')."
								);
						},
					]),
					((st = dt.API).addSvg = function (t, e, n, r, i) {
						if (void 0 === e || void 0 === n)
							throw new Error("addSVG needs values for 'x' and 'y'");
						function o(t) {
							for (
								var e = parseFloat(t[1]),
									n = parseFloat(t[2]),
									r = [],
									i = 3,
									o = t.length;
								i < o;

							)
								'c' === t[i]
									? (r.push([
											parseFloat(t[i + 1]),
											parseFloat(t[i + 2]),
											parseFloat(t[i + 3]),
											parseFloat(t[i + 4]),
											parseFloat(t[i + 5]),
											parseFloat(t[i + 6]),
									  ]),
									  (i += 7))
									: 'l' === t[i]
									? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2])]),
									  (i += 3))
									: (i += 1);
							return [e, n, r];
						}
						var a,
							s,
							h,
							u,
							l,
							c,
							f,
							p,
							d =
								((a = t),
								(h = (
									((p = (u = document).createElement('iframe')),
									(l =
										'.jsPDF_sillysvg_iframe {display:none;position:absolute;}'),
									((f = (c = u).createElement('style')).type = 'text/css'),
									f.styleSheet
										? (f.styleSheet.cssText = l)
										: f.appendChild(c.createTextNode(l)),
									c.getElementsByTagName('head')[0].appendChild(f),
									(p.name = 'childframe'),
									p.setAttribute('width', 0),
									p.setAttribute('height', 0),
									p.setAttribute('frameborder', '0'),
									p.setAttribute('scrolling', 'no'),
									p.setAttribute('seamless', 'seamless'),
									p.setAttribute('class', 'jsPDF_sillysvg_iframe'),
									u.body.appendChild(p),
									(s = p)).contentWindow || s.contentDocument
								).document).write(a),
								h.close(),
								h.getElementsByTagName('svg')[0]),
							g = [1, 1],
							m = parseFloat(d.getAttribute('width')),
							y = parseFloat(d.getAttribute('height'));
						m &&
							y &&
							(r && i
								? (g = [r / m, i / y])
								: r
								? (g = [r / m, r / m])
								: i && (g = [i / y, i / y]));
						var v,
							w,
							b,
							x,
							N = d.childNodes;
						for (v = 0, w = N.length; v < w; v++)
							(b = N[v]).tagName &&
								'PATH' === b.tagName.toUpperCase() &&
								(((x = o(b.getAttribute('d').split(' ')))[0] = x[0] * g[0] + e),
								(x[1] = x[1] * g[1] + n),
								this.lines.call(this, x[2], x[0], x[1], g));
						return this;
					}),
					(st.addSVG = st.addSvg),
					(st.addSvgAsImage = function (t, e, n, r, i, a, s, h) {
						if (isNaN(e) || isNaN(n))
							throw (
								(o.error('jsPDF.addSvgAsImage: Invalid coordinates', arguments),
								new Error('Invalid coordinates passed to jsPDF.addSvgAsImage'))
							);
						if (isNaN(r) || isNaN(i))
							throw (
								(o.error(
									'jsPDF.addSvgAsImage: Invalid measurements',
									arguments
								),
								new Error(
									'Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage'
								))
							);
						var u = document.createElement('canvas');
						(u.width = r), (u.height = i);
						var l = u.getContext('2d');
						return (
							(l.fillStyle = '#fff'),
							l.fillRect(0, 0, u.width, u.height),
							canvg(u, t, {
								ignoreMouse: !0,
								ignoreAnimation: !0,
								ignoreDimensions: !0,
								ignoreClear: !0,
							}),
							this.addImage(u.toDataURL('image/jpeg', 1), e, n, r, i, s, h),
							this
						);
					}),
					(dt.API.putTotalPages = function (t) {
						var e, n;
						n =
							parseInt(this.internal.getFont().id.substr(1), 10) < 15
								? ((e = new RegExp(t, 'g')), this.internal.getNumberOfPages())
								: ((e = new RegExp(
										this.pdfEscape16(t, this.internal.getFont()),
										'g'
								  )),
								  this.pdfEscape16(
										this.internal.getNumberOfPages() + '',
										this.internal.getFont()
								  ));
						for (var r = 1; r <= this.internal.getNumberOfPages(); r++)
							for (var i = 0; i < this.internal.pages[r].length; i++)
								this.internal.pages[r][i] = this.internal.pages[r][i].replace(
									e,
									n
								);
						return this;
					}),
					(dt.API.viewerPreferences = function (t, e) {
						var n;
						(t = t || {}), (e = e || !1);
						var i,
							o,
							a = {
								HideToolbar: {
									defaultValue: !1,
									value: !1,
									type: 'boolean',
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3,
								},
								HideMenubar: {
									defaultValue: !1,
									value: !1,
									type: 'boolean',
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3,
								},
								HideWindowUI: {
									defaultValue: !1,
									value: !1,
									type: 'boolean',
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3,
								},
								FitWindow: {
									defaultValue: !1,
									value: !1,
									type: 'boolean',
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3,
								},
								CenterWindow: {
									defaultValue: !1,
									value: !1,
									type: 'boolean',
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3,
								},
								DisplayDocTitle: {
									defaultValue: !1,
									value: !1,
									type: 'boolean',
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.4,
								},
								NonFullScreenPageMode: {
									defaultValue: 'UseNone',
									value: 'UseNone',
									type: 'name',
									explicitSet: !1,
									valueSet: ['UseNone', 'UseOutlines', 'UseThumbs', 'UseOC'],
									pdfVersion: 1.3,
								},
								Direction: {
									defaultValue: 'L2R',
									value: 'L2R',
									type: 'name',
									explicitSet: !1,
									valueSet: ['L2R', 'R2L'],
									pdfVersion: 1.3,
								},
								ViewArea: {
									defaultValue: 'CropBox',
									value: 'CropBox',
									type: 'name',
									explicitSet: !1,
									valueSet: [
										'MediaBox',
										'CropBox',
										'TrimBox',
										'BleedBox',
										'ArtBox',
									],
									pdfVersion: 1.4,
								},
								ViewClip: {
									defaultValue: 'CropBox',
									value: 'CropBox',
									type: 'name',
									explicitSet: !1,
									valueSet: [
										'MediaBox',
										'CropBox',
										'TrimBox',
										'BleedBox',
										'ArtBox',
									],
									pdfVersion: 1.4,
								},
								PrintArea: {
									defaultValue: 'CropBox',
									value: 'CropBox',
									type: 'name',
									explicitSet: !1,
									valueSet: [
										'MediaBox',
										'CropBox',
										'TrimBox',
										'BleedBox',
										'ArtBox',
									],
									pdfVersion: 1.4,
								},
								PrintClip: {
									defaultValue: 'CropBox',
									value: 'CropBox',
									type: 'name',
									explicitSet: !1,
									valueSet: [
										'MediaBox',
										'CropBox',
										'TrimBox',
										'BleedBox',
										'ArtBox',
									],
									pdfVersion: 1.4,
								},
								PrintScaling: {
									defaultValue: 'AppDefault',
									value: 'AppDefault',
									type: 'name',
									explicitSet: !1,
									valueSet: ['AppDefault', 'None'],
									pdfVersion: 1.6,
								},
								Duplex: {
									defaultValue: '',
									value: 'none',
									type: 'name',
									explicitSet: !1,
									valueSet: [
										'Simplex',
										'DuplexFlipShortEdge',
										'DuplexFlipLongEdge',
										'none',
									],
									pdfVersion: 1.7,
								},
								PickTrayByPDFSize: {
									defaultValue: !1,
									value: !1,
									type: 'boolean',
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.7,
								},
								PrintPageRange: {
									defaultValue: '',
									value: '',
									type: 'array',
									explicitSet: !1,
									valueSet: null,
									pdfVersion: 1.7,
								},
								NumCopies: {
									defaultValue: 1,
									value: 1,
									type: 'integer',
									explicitSet: !1,
									valueSet: null,
									pdfVersion: 1.7,
								},
							},
							s = Object.keys(a),
							h = [],
							u = 0,
							l = 0,
							c = 0,
							f = !0;
						function p(t, e) {
							var n,
								r = !1;
							for (n = 0; n < t.length; n += 1) t[n] === e && (r = !0);
							return r;
						}
						if (
							(void 0 === this.internal.viewerpreferences &&
								((this.internal.viewerpreferences = {}),
								(this.internal.viewerpreferences.configuration = JSON.parse(
									JSON.stringify(a)
								)),
								(this.internal.viewerpreferences.isSubscribed = !1)),
							(n = this.internal.viewerpreferences.configuration),
							'reset' === t || !0 === e)
						) {
							var d = s.length;
							for (c = 0; c < d; c += 1)
								(n[s[c]].value = n[s[c]].defaultValue),
									(n[s[c]].explicitSet = !1);
						}
						if ('object' === r(t))
							for (i in t)
								if (((o = t[i]), p(s, i) && void 0 !== o)) {
									if ('boolean' === n[i].type && 'boolean' == typeof o)
										n[i].value = o;
									else if ('name' === n[i].type && p(n[i].valueSet, o))
										n[i].value = o;
									else if ('integer' === n[i].type && Number.isInteger(o))
										n[i].value = o;
									else if ('array' === n[i].type) {
										for (u = 0; u < o.length; u += 1)
											if (
												((f = !0),
												1 === o[u].length && 'number' == typeof o[u][0])
											)
												h.push(String(o[u] - 1));
											else if (1 < o[u].length) {
												for (l = 0; l < o[u].length; l += 1)
													'number' != typeof o[u][l] && (f = !1);
												!0 === f &&
													h.push([o[u][0] - 1, o[u][1] - 1].join(' '));
											}
										n[i].value = '[' + h.join(' ') + ']';
									} else n[i].value = n[i].defaultValue;
									n[i].explicitSet = !0;
								}
						return (
							!1 === this.internal.viewerpreferences.isSubscribed &&
								(this.internal.events.subscribe('putCatalog', function () {
									var t,
										e = [];
									for (t in n)
										!0 === n[t].explicitSet &&
											('name' === n[t].type
												? e.push('/' + t + ' /' + n[t].value)
												: e.push('/' + t + ' ' + n[t].value));
									0 !== e.length &&
										this.internal.write(
											'/ViewerPreferences\n<<\n' + e.join('\n') + '\n>>'
										);
								}),
								(this.internal.viewerpreferences.isSubscribed = !0)),
							(this.internal.viewerpreferences.configuration = n),
							this
						);
					}),
					(ht = dt.API),
					(ct = lt = ut = ''),
					(ht.addMetadata = function (t, e) {
						return (
							(lt = e || 'http://jspdf.default.namespaceuri/'),
							(ut = t),
							this.internal.events.subscribe('postPutResources', function () {
								if (ut) {
									var t =
											'<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
											lt +
											'"><jspdf:metadata>',
										e = unescape(
											encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')
										),
										n = unescape(encodeURIComponent(t)),
										r = unescape(encodeURIComponent(ut)),
										i = unescape(
											encodeURIComponent(
												'</jspdf:metadata></rdf:Description></rdf:RDF>'
											)
										),
										o = unescape(encodeURIComponent('</x:xmpmeta>')),
										a = n.length + r.length + i.length + e.length + o.length;
									(ct = this.internal.newObject()),
										this.internal.write(
											'<< /Type /Metadata /Subtype /XML /Length ' + a + ' >>'
										),
										this.internal.write('stream'),
										this.internal.write(e + n + r + i + o),
										this.internal.write('endstream'),
										this.internal.write('endobj');
								} else ct = '';
							}),
							this.internal.events.subscribe('putCatalog', function () {
								ct && this.internal.write('/Metadata ' + ct + ' 0 R');
							}),
							this
						);
					}),
					(function (t, e) {
						var n = t.API,
							r = (n.pdfEscape16 = function (t, e) {
								for (
									var n,
										r = e.metadata.Unicode.widths,
										i = ['', '0', '00', '000', '0000'],
										o = [''],
										a = 0,
										s = t.length;
									a < s;
									++a
								) {
									if (
										((n = e.metadata.characterToGlyph(t.charCodeAt(a))),
										e.metadata.glyIdsUsed.push(n),
										(e.metadata.toUnicode[n] = t.charCodeAt(a)),
										-1 == r.indexOf(n) &&
											(r.push(n),
											r.push([parseInt(e.metadata.widthOfGlyph(n), 10)])),
										'0' == n)
									)
										return o.join('');
									(n = n.toString(16)), o.push(i[4 - n.length], n);
								}
								return o.join('');
							}),
							i = function (t) {
								var e, n, r, i, o, a, s;
								for (
									o =
										'/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange',
										r = [],
										a = 0,
										s = (n = Object.keys(t).sort(function (t, e) {
											return t - e;
										})).length;
									a < s;
									a++
								)
									(e = n[a]),
										100 <= r.length &&
											((o +=
												'\n' +
												r.length +
												' beginbfchar\n' +
												r.join('\n') +
												'\nendbfchar'),
											(r = [])),
										(i = ('0000' + t[e].toString(16)).slice(-4)),
										(e = ('0000' + (+e).toString(16)).slice(-4)),
										r.push('<' + e + '><' + i + '>');
								return (
									r.length &&
										(o +=
											'\n' +
											r.length +
											' beginbfchar\n' +
											r.join('\n') +
											'\nendbfchar\n'),
									o +
										'endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend'
								);
							};
						n.events.push([
							'putFont',
							function (e) {
								!(function (e, n, r, o) {
									if (
										e.metadata instanceof t.API.TTFFont &&
										'Identity-H' === e.encoding
									) {
										for (
											var a = e.metadata.Unicode.widths,
												s = e.metadata.subset.encode(e.metadata.glyIdsUsed, 1),
												h = '',
												u = 0;
											u < s.length;
											u++
										)
											h += String.fromCharCode(s[u]);
										var l = r();
										o({data: h, addLength1: !0}), n('endobj');
										var c = r();
										o({data: i(e.metadata.toUnicode), addLength1: !0}),
											n('endobj');
										var f = r();
										n('<<'),
											n('/Type /FontDescriptor'),
											n('/FontName /' + e.fontName),
											n('/FontFile2 ' + l + ' 0 R'),
											n(
												'/FontBBox ' + t.API.PDFObject.convert(e.metadata.bbox)
											),
											n('/Flags ' + e.metadata.flags),
											n('/StemV ' + e.metadata.stemV),
											n('/ItalicAngle ' + e.metadata.italicAngle),
											n('/Ascent ' + e.metadata.ascender),
											n('/Descent ' + e.metadata.decender),
											n('/CapHeight ' + e.metadata.capHeight),
											n('>>'),
											n('endobj');
										var p = r();
										n('<<'),
											n('/Type /Font'),
											n('/BaseFont /' + e.fontName),
											n('/FontDescriptor ' + f + ' 0 R'),
											n('/W ' + t.API.PDFObject.convert(a)),
											n('/CIDToGIDMap /Identity'),
											n('/DW 1000'),
											n('/Subtype /CIDFontType2'),
											n('/CIDSystemInfo'),
											n('<<'),
											n('/Supplement 0'),
											n('/Registry (Adobe)'),
											n('/Ordering (' + e.encoding + ')'),
											n('>>'),
											n('>>'),
											n('endobj'),
											(e.objectNumber = r()),
											n('<<'),
											n('/Type /Font'),
											n('/Subtype /Type0'),
											n('/ToUnicode ' + c + ' 0 R'),
											n('/BaseFont /' + e.fontName),
											n('/Encoding /' + e.encoding),
											n('/DescendantFonts [' + p + ' 0 R]'),
											n('>>'),
											n('endobj'),
											(e.isAlreadyPutted = !0);
									}
								})(e.font, e.out, e.newObject, e.putStream);
							},
						]),
							n.events.push([
								'putFont',
								function (e) {
									!(function (e, n, r, o) {
										if (
											e.metadata instanceof t.API.TTFFont &&
											'WinAnsiEncoding' === e.encoding
										) {
											e.metadata.Unicode.widths;
											for (
												var a = e.metadata.rawData, s = '', h = 0;
												h < a.length;
												h++
											)
												s += String.fromCharCode(a[h]);
											var u = r();
											o({data: s, addLength1: !0}), n('endobj');
											var l = r();
											o({data: i(e.metadata.toUnicode), addLength1: !0}),
												n('endobj');
											var c = r();
											for (
												n('<<'),
													n('/Descent ' + e.metadata.decender),
													n('/CapHeight ' + e.metadata.capHeight),
													n('/StemV ' + e.metadata.stemV),
													n('/Type /FontDescriptor'),
													n('/FontFile2 ' + u + ' 0 R'),
													n('/Flags 96'),
													n(
														'/FontBBox ' +
															t.API.PDFObject.convert(e.metadata.bbox)
													),
													n('/FontName /' + e.fontName),
													n('/ItalicAngle ' + e.metadata.italicAngle),
													n('/Ascent ' + e.metadata.ascender),
													n('>>'),
													n('endobj'),
													e.objectNumber = r(),
													h = 0;
												h < e.metadata.hmtx.widths.length;
												h++
											)
												e.metadata.hmtx.widths[h] = parseInt(
													e.metadata.hmtx.widths[h] *
														(1e3 / e.metadata.head.unitsPerEm)
												);
											n(
												'<</Subtype/TrueType/Type/Font/ToUnicode ' +
													l +
													' 0 R/BaseFont/' +
													e.fontName +
													'/FontDescriptor ' +
													c +
													' 0 R/Encoding/' +
													e.encoding +
													' /FirstChar 29 /LastChar 255 /Widths ' +
													t.API.PDFObject.convert(e.metadata.hmtx.widths) +
													'>>'
											),
												n('endobj'),
												(e.isAlreadyPutted = !0);
										}
									})(e.font, e.out, e.newObject, e.putStream);
								},
							]);
						var o = function (t) {
							var e,
								n,
								i = t.text || '',
								o = t.x,
								a = t.y,
								s = t.options || {},
								h = t.mutex || {},
								u = h.pdfEscape,
								l = h.activeFontKey,
								c = h.fonts,
								f = (h.activeFontSize, ''),
								p = 0,
								d = '',
								g = c[(n = l)].encoding;
							if ('Identity-H' !== c[n].encoding)
								return {text: i, x: o, y: a, options: s, mutex: h};
							for (
								d = i,
									n = l,
									'[object Array]' === Object.prototype.toString.call(i) &&
										(d = i[0]),
									p = 0;
								p < d.length;
								p += 1
							)
								c[n].metadata.hasOwnProperty('cmap') &&
									(e = c[n].metadata.cmap.unicode.codeMap[d[p].charCodeAt(0)]),
									e ||
									(d[p].charCodeAt(0) < 256 &&
										c[n].metadata.hasOwnProperty('Unicode'))
										? (f += d[p])
										: (f += '');
							var m = '';
							return (
								parseInt(n.slice(1)) < 14 || 'WinAnsiEncoding' === g
									? (m = (function (t) {
											for (var e = '', n = 0; n < t.length; n++)
												e += '' + t.charCodeAt(n).toString(16);
											return e;
									  })(u(f, n)))
									: 'Identity-H' === g && (m = r(f, c[n])),
								(h.isHex = !0),
								{text: m, x: o, y: a, options: s, mutex: h}
							);
						};
						n.events.push([
							'postProcessText',
							function (t) {
								var e = t.text || '',
									n = t.x,
									r = t.y,
									i = t.options,
									a = t.mutex,
									s = (i.lang, []),
									h = {text: e, x: n, y: r, options: i, mutex: a};
								if ('[object Array]' === Object.prototype.toString.call(e)) {
									var u = 0;
									for (u = 0; u < e.length; u += 1)
										'[object Array]' === Object.prototype.toString.call(e[u]) &&
										3 === e[u].length
											? s.push([
													o(Object.assign({}, h, {text: e[u][0]})).text,
													e[u][1],
													e[u][2],
											  ])
											: s.push(o(Object.assign({}, h, {text: e[u]})).text);
									t.text = s;
								} else t.text = o(Object.assign({}, h, {text: e})).text;
							},
						]);
					})(
						dt,
						('undefined' != typeof self && self) ||
							(void 0 !== n.g && n.g) ||
							('undefined' != typeof window && window) ||
							Function('return this')()
					),
					(ft = dt.API),
					(pt = function (t) {
						return void 0 !== t && (void 0 === t.vFS && (t.vFS = {}), !0);
					}),
					(ft.existsFileInVFS = function (t) {
						return !!pt(this.internal) && void 0 !== this.internal.vFS[t];
					}),
					(ft.addFileToVFS = function (t, e) {
						return pt(this.internal), (this.internal.vFS[t] = e), this;
					}),
					(ft.getFileFromVFS = function (t) {
						return (
							pt(this.internal),
							void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null
						);
					}),
					(dt.API.addHTML = function (t, e, n, r, i) {
						if (
							'undefined' == typeof html2canvas &&
							'undefined' == typeof rasterizeHTML
						)
							throw new Error(
								'You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js'
							);
						'number' != typeof e && ((r = e), (i = n)),
							'function' == typeof r && ((i = r), (r = null)),
							'function' != typeof i && (i = function () {});
						var o = this.internal,
							a = o.scaleFactor,
							s = o.pageSize.getWidth(),
							h = o.pageSize.getHeight();
						if (
							(((r = r || {}).onrendered = function (t) {
								(e = parseInt(e) || 0), (n = parseInt(n) || 0);
								var o = r.dim || {},
									u = Object.assign(
										{top: 0, right: 0, bottom: 0, left: 0, useFor: 'content'},
										r.margin
									),
									l = o.h || Math.min(h, t.height / a),
									c = o.w || Math.min(s, t.width / a) - e,
									f = r.format || 'JPEG',
									p = r.imageCompression || 'SLOW';
								if (t.height > h - u.top - u.bottom && r.pagesplit) {
									var d = function (t, e, n, i, o) {
											var a = document.createElement('canvas');
											(a.height = o), (a.width = i);
											var s = a.getContext('2d');
											return (
												(s.mozImageSmoothingEnabled = !1),
												(s.webkitImageSmoothingEnabled = !1),
												(s.msImageSmoothingEnabled = !1),
												(s.imageSmoothingEnabled = !1),
												(s.fillStyle = r.backgroundColor || '#ffffff'),
												s.fillRect(0, 0, i, o),
												s.drawImage(t, e, n, i, o, 0, 0, i, o),
												a
											);
										},
										g = function () {
											for (var r, o, l = 0, g = 0, m = {}, y = !1; ; ) {
												var v;
												if (
													((g = 0),
													(m.top = 0 !== l ? u.top : n),
													(m.left = 0 !== l ? u.left : e),
													(y = (s - u.left - u.right) * a < t.width),
													'content' === u.useFor
														? 0 === l
															? ((r = Math.min((s - u.left) * a, t.width)),
															  (o = Math.min((h - u.top) * a, t.height - l)))
															: ((r = Math.min(s * a, t.width)),
															  (o = Math.min(h * a, t.height - l)),
															  (m.top = 0))
														: ((r = Math.min(
																(s - u.left - u.right) * a,
																t.width
														  )),
														  (o = Math.min(
																(h - u.bottom - u.top) * a,
																t.height - l
														  ))),
													y)
												)
													for (;;) {
														'content' === u.useFor &&
															(0 === g
																? (r = Math.min((s - u.left) * a, t.width))
																: ((r = Math.min(s * a, t.width - g)),
																  (m.left = 0)));
														var w = [
															(v = d(t, g, l, r, o)),
															m.left,
															m.top,
															v.width / a,
															v.height / a,
															f,
															null,
															p,
														];
														if (
															(this.addImage.apply(this, w),
															(g += r) >= t.width)
														)
															break;
														this.addPage();
													}
												else
													(w = [
														(v = d(t, 0, l, r, o)),
														m.left,
														m.top,
														v.width / a,
														v.height / a,
														f,
														null,
														p,
													]),
														this.addImage.apply(this, w);
												if ((l += o) >= t.height) break;
												this.addPage();
											}
											i(c, l, null, w);
										}.bind(this);
									if ('CANVAS' === t.nodeName) {
										var m = new Image();
										(m.onload = g), (m.src = t.toDataURL('image/png')), (t = m);
									} else g();
								} else {
									var y = Math.random().toString(35),
										v = [t, e, n, c, l, f, y, p];
									this.addImage.apply(this, v), i(c, l, y, v);
								}
							}.bind(this)),
							'undefined' != typeof html2canvas && !r.rstz)
						)
							return html2canvas(t, r);
						if ('undefined' == typeof rasterizeHTML) return null;
						var u = 'drawDocument';
						return (
							'string' == typeof t &&
								(u = /^http/.test(t) ? 'drawURL' : 'drawHTML'),
							(r.width = r.width || s * a),
							rasterizeHTML[u](t, void 0, r).then(
								function (t) {
									r.onrendered(t.image);
								},
								function (t) {
									i(null, t);
								}
							)
						);
					}),
					(function (t) {
						var e, n, i, a, s, h, u, l, c, f, p, d, g, m, y, v, w, b, x, N;
						(e = (function () {
							return function (e) {
								return (t.prototype = e), new t();
							};
							function t() {}
						})()),
							(f = function (t) {
								var e, n, r, i, o, a, s;
								for (
									n = 0, r = t.length, e = void 0, a = i = !1;
									!i && n !== r;

								)
									(e = t[n] = t[n].trimLeft()) && (i = !0), n++;
								for (n = r - 1; r && !a && -1 !== n; )
									(e = t[n] = t[n].trimRight()) && (a = !0), n--;
								for (o = /\s+$/g, s = !0, n = 0; n !== r; )
									'\u2028' != t[n] &&
										((e = t[n].replace(/\s+/g, ' ')),
										s && (e = e.trimLeft()),
										e && (s = o.test(e)),
										(t[n] = e)),
										n++;
								return t;
							}),
							(d = function (t) {
								var e, n, r;
								for (e = void 0, n = (r = t.split(',')).shift(); !e && n; )
									(e = i[n.trim().toLowerCase()]), (n = r.shift());
								return e;
							}),
							(g = function (t) {
								var e;
								return (
									-1 < (t = 'auto' === t ? '0px' : t).indexOf('em') &&
										!isNaN(Number(t.replace('em', ''))) &&
										(t = 18.719 * Number(t.replace('em', '')) + 'px'),
									-1 < t.indexOf('pt') &&
										!isNaN(Number(t.replace('pt', ''))) &&
										(t = 1.333 * Number(t.replace('pt', '')) + 'px'),
									(e = m[t])
										? e
										: void 0 !==
												(e = {
													'xx-small': 9,
													'x-small': 11,
													small: 13,
													medium: 16,
													large: 19,
													'x-large': 23,
													'xx-large': 28,
													auto: 0,
												}[t]) || (e = parseFloat(t))
										? (m[t] = e / 16)
										: ((e = t.match(/([\d\.]+)(px)/)),
										  Array.isArray(e) && 3 === e.length
												? (m[t] = parseFloat(e[1]) / 16)
												: (m[t] = 1))
								);
							}),
							(c = function (t) {
								var e, n, r, i, o;
								return (
									(o = t),
									(i =
										document.defaultView &&
										document.defaultView.getComputedStyle
											? document.defaultView.getComputedStyle(o, null)
											: o.currentStyle
											? o.currentStyle
											: o.style),
									(n = void 0),
									((e = {})['font-family'] =
										d(
											(r = function (t) {
												return (
													(t = t.replace(/-\D/g, function (t) {
														return t.charAt(1).toUpperCase();
													})),
													i[t]
												);
											})('font-family')
										) || 'times'),
									(e['font-style'] = a[r('font-style')] || 'normal'),
									(e['text-align'] = s[r('text-align')] || 'left'),
									'bold' === (n = h[r('font-weight')] || 'normal') &&
										('normal' === e['font-style']
											? (e['font-style'] = n)
											: (e['font-style'] = n + e['font-style'])),
									(e['font-size'] = g(r('font-size')) || 1),
									(e['line-height'] = g(r('line-height')) || 1),
									(e.display = 'inline' === r('display') ? 'inline' : 'block'),
									(n = 'block' === e.display),
									(e['margin-top'] = (n && g(r('margin-top'))) || 0),
									(e['margin-bottom'] = (n && g(r('margin-bottom'))) || 0),
									(e['padding-top'] = (n && g(r('padding-top'))) || 0),
									(e['padding-bottom'] = (n && g(r('padding-bottom'))) || 0),
									(e['margin-left'] = (n && g(r('margin-left'))) || 0),
									(e['margin-right'] = (n && g(r('margin-right'))) || 0),
									(e['padding-left'] = (n && g(r('padding-left'))) || 0),
									(e['padding-right'] = (n && g(r('padding-right'))) || 0),
									(e['page-break-before'] = r('page-break-before') || 'auto'),
									(e.float = u[r('cssFloat')] || 'none'),
									(e.clear = l[r('clear')] || 'none'),
									(e.color = r('color')),
									e
								);
							}),
							(y = function (t, e, n) {
								var r, i, o, a, s;
								if (((o = !1), (a = i = void 0), (r = n['#' + t.id])))
									if ('function' == typeof r) o = r(t, e);
									else
										for (i = 0, a = r.length; !o && i !== a; )
											(o = r[i](t, e)), i++;
								if (((r = n[t.nodeName]), !o && r))
									if ('function' == typeof r) o = r(t, e);
									else
										for (i = 0, a = r.length; !o && i !== a; )
											(o = r[i](t, e)), i++;
								for (
									s =
										'string' == typeof t.className
											? t.className.split(' ')
											: [],
										i = 0;
									i < s.length;
									i++
								)
									if (((r = n['.' + s[i]]), !o && r))
										if ('function' == typeof r) o = r(t, e);
										else
											for (i = 0, a = r.length; !o && i !== a; )
												(o = r[i](t, e)), i++;
								return o;
							}),
							(N = function (t, e) {
								var n, r, i, o, a, s, h, u, l;
								for (
									n = [],
										r = [],
										i = 0,
										l = t.rows[0].cells.length,
										h = t.clientWidth;
									i < l;

								)
									(u = t.rows[0].cells[i]),
										(r[i] = {
											name: u.textContent.toLowerCase().replace(/\s+/g, ''),
											prompt: u.textContent.replace(/\r?\n/g, ''),
											width:
												(u.clientWidth / h) *
												e.pdf.internal.pageSize.getWidth(),
										}),
										i++;
								for (i = 1; i < t.rows.length; ) {
									for (s = t.rows[i], a = {}, o = 0; o < s.cells.length; )
										(a[r[o].name] = s.cells[o].textContent.replace(
											/\r?\n/g,
											''
										)),
											o++;
									n.push(a), i++;
								}
								return {rows: n, headers: r};
							});
						var L = {
								SCRIPT: 1,
								STYLE: 1,
								NOSCRIPT: 1,
								OBJECT: 1,
								EMBED: 1,
								SELECT: 1,
							},
							A = 1;
						(n = function (t, i, o) {
							var a, s, h, u, l, f, p, d;
							for (
								s = t.childNodes,
									a = void 0,
									(l = 'block' === (h = c(t)).display) &&
										(i.setBlockBoundary(), i.setBlockStyle(h)),
									u = 0,
									f = s.length;
								u < f;

							) {
								if ('object' === r((a = s[u]))) {
									if (
										(i.executeWatchFunctions(a),
										1 === a.nodeType && 'HEADER' === a.nodeName)
									) {
										var g = a,
											m = i.pdf.margins_doc.top;
										i.pdf.internal.events.subscribe(
											'addPage',
											function (t) {
												(i.y = m),
													n(g, i, o),
													(i.pdf.margins_doc.top = i.y + 10),
													(i.y += 10);
											},
											!1
										);
									}
									if (8 === a.nodeType && '#comment' === a.nodeName)
										~a.textContent.indexOf('ADD_PAGE') &&
											(i.pdf.addPage(), (i.y = i.pdf.margins_doc.top));
									else if (1 !== a.nodeType || L[a.nodeName])
										if (3 === a.nodeType) {
											var w = a.nodeValue;
											if (a.nodeValue && 'LI' === a.parentNode.nodeName)
												if ('OL' === a.parentNode.parentNode.nodeName)
													w = A++ + '. ' + w;
												else {
													var b = h['font-size'],
														x = (3 - 0.75 * b) * i.pdf.internal.scaleFactor,
														S = 0.75 * b * i.pdf.internal.scaleFactor,
														_ = (1.74 * b) / i.pdf.internal.scaleFactor;
													d = function (t, e) {
														this.pdf.circle(t + x, e + S, _, 'FD');
													};
												}
											16 & a.ownerDocument.body.compareDocumentPosition(a) &&
												i.addText(w, h);
										} else 'string' == typeof a && i.addText(a, h);
									else {
										var F;
										if ('IMG' === a.nodeName) {
											var P = a.getAttribute('src');
											F = v[i.pdf.sHashCode(P) || P];
										}
										if (F) {
											i.pdf.internal.pageSize.getHeight() -
												i.pdf.margins_doc.bottom <
												i.y + a.height &&
												i.y > i.pdf.margins_doc.top &&
												(i.pdf.addPage(),
												(i.y = i.pdf.margins_doc.top),
												i.executeWatchFunctions(a));
											var k = c(a),
												I = i.x,
												C = 12 / i.pdf.internal.scaleFactor,
												B = (k['margin-left'] + k['padding-left']) * C,
												j = (k['margin-right'] + k['padding-right']) * C,
												E = (k['margin-top'] + k['padding-top']) * C,
												M = (k['margin-bottom'] + k['padding-bottom']) * C;
											void 0 !== k.float && 'right' === k.float
												? (I += i.settings.width - a.width - j)
												: (I += B),
												i.pdf.addImage(F, I, i.y + E, a.width, a.height),
												(F = void 0),
												'right' === k.float || 'left' === k.float
													? (i.watchFunctions.push(
															function (t, e, n, r) {
																return i.y >= e
																	? ((i.x += t), (i.settings.width += n), !0)
																	: !!(
																			r &&
																			1 === r.nodeType &&
																			!L[r.nodeName] &&
																			i.x + r.width >
																				i.pdf.margins_doc.left +
																					i.pdf.margins_doc.width
																	  ) &&
																			((i.x += t),
																			(i.y = e),
																			(i.settings.width += n),
																			!0);
															}.bind(
																this,
																'left' === k.float ? -a.width - B - j : 0,
																i.y + a.height + E + M,
																a.width
															)
													  ),
													  i.watchFunctions.push(
															function (t, e, n) {
																return (
																	!(
																		i.y < t &&
																		e === i.pdf.internal.getNumberOfPages()
																	) ||
																	(1 === n.nodeType &&
																		'both' === c(n).clear &&
																		((i.y = t), !0))
																);
															}.bind(
																this,
																i.y + a.height,
																i.pdf.internal.getNumberOfPages()
															)
													  ),
													  (i.settings.width -= a.width + B + j),
													  'left' === k.float && (i.x += a.width + B + j))
													: (i.y += a.height + E + M);
										} else if ('TABLE' === a.nodeName)
											(p = N(a, i)),
												(i.y += 10),
												i.pdf.table(i.x, i.y, p.rows, p.headers, {
													autoSize: !1,
													printHeaders: o.printHeaders,
													margins: i.pdf.margins_doc,
													css: c(a),
												}),
												(i.y = i.pdf.lastCellPos.y + i.pdf.lastCellPos.h + 20);
										else if ('OL' === a.nodeName || 'UL' === a.nodeName)
											(A = 1), y(a, i, o) || n(a, i, o), (i.y += 10);
										else if ('LI' === a.nodeName) {
											var O = i.x;
											(i.x += 20 / i.pdf.internal.scaleFactor),
												(i.y += 3),
												y(a, i, o) || n(a, i, o),
												(i.x = O);
										} else
											'BR' === a.nodeName
												? ((i.y += h['font-size'] * i.pdf.internal.scaleFactor),
												  i.addText('\u2028', e(h)))
												: y(a, i, o) || n(a, i, o);
									}
								}
								u++;
							}
							if (((o.outY = i.y), l)) return i.setBlockBoundary(d);
						}),
							(v = {}),
							(w = function (t, e, n, r) {
								var i,
									o = t.getElementsByTagName('img'),
									a = o.length,
									s = 0;
								function h() {
									e.pdf.internal.events.publish('imagesLoaded'), r(i);
								}
								function u(t, n, r) {
									if (t) {
										var o = new Image();
										(i = ++s),
											(o.crossOrigin = ''),
											(o.onerror = o.onload =
												function () {
													if (
														o.complete &&
														(0 === o.src.indexOf('data:image/') &&
															((o.width = n || o.width || 0),
															(o.height = r || o.height || 0)),
														o.width + o.height)
													) {
														var i = e.pdf.sHashCode(t) || t;
														v[i] = v[i] || o;
													}
													--s || h();
												}),
											(o.src = t);
									}
								}
								for (; a--; )
									u(o[a].getAttribute('src'), o[a].width, o[a].height);
								return s || h();
							}),
							(b = function (t, e, r) {
								var i = t.getElementsByTagName('footer');
								if (0 < i.length) {
									i = i[0];
									var o = e.pdf.internal.write,
										a = e.y;
									(e.pdf.internal.write = function () {}), n(i, e, r);
									var s = Math.ceil(e.y - a) + 5;
									(e.y = a),
										(e.pdf.internal.write = o),
										(e.pdf.margins_doc.bottom += s);
									for (
										var h = function (t) {
												var o = void 0 !== t ? t.pageNumber : 1,
													a = e.y;
												(e.y =
													e.pdf.internal.pageSize.getHeight() -
													e.pdf.margins_doc.bottom),
													(e.pdf.margins_doc.bottom -= s);
												for (
													var h = i.getElementsByTagName('span'), u = 0;
													u < h.length;
													++u
												)
													-1 <
														(' ' + h[u].className + ' ')
															.replace(/[\n\t]/g, ' ')
															.indexOf(' pageCounter ') && (h[u].innerHTML = o),
														-1 <
															(' ' + h[u].className + ' ')
																.replace(/[\n\t]/g, ' ')
																.indexOf(' totalPages ') &&
															(h[u].innerHTML = '###jsPDFVarTotalPages###');
												n(i, e, r), (e.pdf.margins_doc.bottom += s), (e.y = a);
											},
											u = i.getElementsByTagName('span'),
											l = 0;
										l < u.length;
										++l
									)
										-1 <
											(' ' + u[l].className + ' ')
												.replace(/[\n\t]/g, ' ')
												.indexOf(' totalPages ') &&
											e.pdf.internal.events.subscribe(
												'htmlRenderingFinished',
												e.pdf.putTotalPages.bind(
													e.pdf,
													'###jsPDFVarTotalPages###'
												),
												!0
											);
									e.pdf.internal.events.subscribe('addPage', h, !1),
										h(),
										(L.FOOTER = 1);
								}
							}),
							(x = function (t, e, r, i, a, s) {
								if (!e) return !1;
								var h, u, l, c;
								'string' == typeof e || e.parentNode || (e = '' + e.innerHTML),
									'string' == typeof e &&
										((h = e.replace(/<\/?script[^>]*?>/gi, '')),
										(c =
											'jsPDFhtmlText' +
											Date.now().toString() +
											(1e3 * Math.random()).toFixed(0)),
										((l = document.createElement('div')).style.cssText =
											'position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;'),
										(l.innerHTML =
											'<iframe style="height:1px;width:1px" name="' +
											c +
											'" />'),
										document.body.appendChild(l),
										(u = window.frames[c]).document.open(),
										u.document.writeln(h),
										u.document.close(),
										(e = u.document.body));
								var f,
									d = new p(t, r, i, a);
								return (
									w.call(this, e, d, a.elementHandlers, function (t) {
										b(e, d, a.elementHandlers),
											n(e, d, a.elementHandlers),
											d.pdf.internal.events.publish('htmlRenderingFinished'),
											(f = d.dispose()),
											'function' == typeof s
												? s(f)
												: t &&
												  o.error(
														'jsPDF Warning: rendering issues? provide a callback to fromHTML!'
												  );
									}),
									f || {x: d.x, y: d.y}
								);
							}),
							((p = function (t, e, n, r) {
								return (
									(this.pdf = t),
									(this.x = e),
									(this.y = n),
									(this.settings = r),
									(this.watchFunctions = []),
									this.init(),
									this
								);
							}).prototype.init = function () {
								return (
									(this.paragraph = {text: [], style: []}),
									this.pdf.internal.write('q')
								);
							}),
							(p.prototype.dispose = function () {
								return (
									this.pdf.internal.write('Q'),
									{x: this.x, y: this.y, ready: !0}
								);
							}),
							(p.prototype.executeWatchFunctions = function (t) {
								var e = !1,
									n = [];
								if (0 < this.watchFunctions.length) {
									for (var r = 0; r < this.watchFunctions.length; ++r)
										!0 === this.watchFunctions[r](t)
											? (e = !0)
											: n.push(this.watchFunctions[r]);
									this.watchFunctions = n;
								}
								return e;
							}),
							(p.prototype.splitFragmentsIntoLines = function (t, n) {
								var r, i, o, a, s, h, u, l, c, f, p, d, g, m;
								for (
									f = this.pdf.internal.scaleFactor,
										a = {},
										h = u = l = m = s = o = c = i = void 0,
										d = [(p = [])],
										r = 0,
										g = this.settings.width;
									t.length;

								)
									if (((s = t.shift()), (m = n.shift()), s))
										if (
											((o =
												a[(i = m['font-family']) + (c = m['font-style'])]) ||
												((o = this.pdf.internal.getFont(i, c).metadata.Unicode),
												(a[i + c] = o)),
											(l = {
												widths: o.widths,
												kerning: o.kerning,
												fontSize: 12 * m['font-size'],
												textIndent: r,
											}),
											(u =
												(this.pdf.getStringUnitWidth(s, l) * l.fontSize) / f),
											'\u2028' == s)
										)
											(p = []), d.push(p);
										else if (g < r + u) {
											for (
												h = this.pdf.splitTextToSize(s, g, l),
													p.push([h.shift(), m]);
												h.length;

											)
												(p = [[h.shift(), m]]), d.push(p);
											r =
												(this.pdf.getStringUnitWidth(p[0][0], l) * l.fontSize) /
												f;
										} else p.push([s, m]), (r += u);
								if (
									void 0 !== m['text-align'] &&
									('center' === m['text-align'] ||
										'right' === m['text-align'] ||
										'justify' === m['text-align'])
								)
									for (var y = 0; y < d.length; ++y) {
										var v =
											(this.pdf.getStringUnitWidth(d[y][0][0], l) *
												l.fontSize) /
											f;
										0 < y && (d[y][0][1] = e(d[y][0][1]));
										var w = g - v;
										if ('right' === m['text-align'])
											d[y][0][1]['margin-left'] = w;
										else if ('center' === m['text-align'])
											d[y][0][1]['margin-left'] = w / 2;
										else if ('justify' === m['text-align']) {
											var b = d[y][0][0].split(' ').length - 1;
											(d[y][0][1]['word-spacing'] = w / b),
												y === d.length - 1 && (d[y][0][1]['word-spacing'] = 0);
										}
									}
								return d;
							}),
							(p.prototype.RenderTextFragment = function (t, e) {
								var n, r;
								(r = 0),
									this.pdf.internal.pageSize.getHeight() -
										this.pdf.margins_doc.bottom <
										this.y + this.pdf.internal.getFontSize() &&
										(this.pdf.internal.write('ET', 'Q'),
										this.pdf.addPage(),
										(this.y = this.pdf.margins_doc.top),
										this.pdf.internal.write(
											'q',
											'BT',
											this.getPdfColor(e.color),
											this.pdf.internal.getCoordinateString(this.x),
											this.pdf.internal.getVerticalCoordinateString(this.y),
											'Td'
										),
										(r = Math.max(r, e['line-height'], e['font-size'])),
										this.pdf.internal.write(0, (-12 * r).toFixed(2), 'Td')),
									(n = this.pdf.internal.getFont(
										e['font-family'],
										e['font-style']
									));
								var i = this.getPdfColor(e.color);
								i !== this.lastTextColor &&
									(this.pdf.internal.write(i), (this.lastTextColor = i)),
									void 0 !== e['word-spacing'] &&
										0 < e['word-spacing'] &&
										this.pdf.internal.write(e['word-spacing'].toFixed(2), 'Tw'),
									this.pdf.internal.write(
										'/' + n.id,
										(12 * e['font-size']).toFixed(2),
										'Tf',
										'(' + this.pdf.internal.pdfEscape(t) + ') Tj'
									),
									void 0 !== e['word-spacing'] &&
										this.pdf.internal.write(0, 'Tw');
							}),
							(p.prototype.getPdfColor = function (t) {
								var e,
									n,
									r,
									i = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);
								if (null != i)
									(e = parseInt(i[1])),
										(n = parseInt(i[2])),
										(r = parseInt(i[3]));
								else {
									if ('string' == typeof t && '#' != t.charAt(0)) {
										var o = new RGBColor(t);
										t = o.ok ? o.toHex() : '#000000';
									}
									(e = t.substring(1, 3)),
										(e = parseInt(e, 16)),
										(n = t.substring(3, 5)),
										(n = parseInt(n, 16)),
										(r = t.substring(5, 7)),
										(r = parseInt(r, 16));
								}
								if ('string' == typeof e && /^#[0-9A-Fa-f]{6}$/.test(e)) {
									var a = parseInt(e.substr(1), 16);
									(e = (a >> 16) & 255), (n = (a >> 8) & 255), (r = 255 & a);
								}
								var s = this.f3;
								return (0 === e && 0 === n && 0 === r) || void 0 === n
									? s(e / 255) + ' g'
									: [s(e / 255), s(n / 255), s(r / 255), 'rg'].join(' ');
							}),
							(p.prototype.f3 = function (t) {
								return t.toFixed(3);
							}),
							(p.prototype.renderParagraph = function (t) {
								var e, n, r, i, o, a, s, h, u, l, c, p, d;
								if (
									((r = f(this.paragraph.text)),
									(p = this.paragraph.style),
									(e = this.paragraph.blockstyle),
									this.paragraph.priorblockstyle,
									(this.paragraph = {
										text: [],
										style: [],
										blockstyle: {},
										priorblockstyle: e,
									}),
									r.join('').trim())
								) {
									(s = this.splitFragmentsIntoLines(r, p)),
										(h = a = void 0),
										(n = 12 / this.pdf.internal.scaleFactor),
										(this.priorMarginBottom = this.priorMarginBottom || 0),
										(c =
											(Math.max(
												(e['margin-top'] || 0) - this.priorMarginBottom,
												0
											) +
												(e['padding-top'] || 0)) *
											n),
										(l =
											((e['margin-bottom'] || 0) + (e['padding-bottom'] || 0)) *
											n),
										(this.priorMarginBottom = e['margin-bottom'] || 0),
										'always' === e['page-break-before'] &&
											(this.pdf.addPage(),
											(this.y = 0),
											(c =
												((e['margin-top'] || 0) + (e['padding-top'] || 0)) *
												n)),
										(u = this.pdf.internal.write),
										(o = i = void 0),
										(this.y += c),
										u(
											'q',
											'BT 0 g',
											this.pdf.internal.getCoordinateString(this.x),
											this.pdf.internal.getVerticalCoordinateString(this.y),
											'Td'
										);
									for (var g = 0; s.length; ) {
										for (i = h = 0, o = (a = s.shift()).length; i !== o; )
											a[i][0].trim() &&
												((h = Math.max(
													h,
													a[i][1]['line-height'],
													a[i][1]['font-size']
												)),
												(d = 7 * a[i][1]['font-size'])),
												i++;
										var m = 0,
											y = 0;
										for (
											void 0 !== a[0][1]['margin-left'] &&
												0 < a[0][1]['margin-left'] &&
												((m =
													(y = this.pdf.internal.getCoordinateString(
														a[0][1]['margin-left']
													)) - g),
												(g = y)),
												u(
													m + Math.max(e['margin-left'] || 0, 0) * n,
													(-12 * h).toFixed(2),
													'Td'
												),
												i = 0,
												o = a.length;
											i !== o;

										)
											a[i][0] && this.RenderTextFragment(a[i][0], a[i][1]), i++;
										if (
											((this.y += h * n),
											this.executeWatchFunctions(a[0][1]) && 0 < s.length)
										) {
											var v = [],
												w = [];
											s.forEach(function (t) {
												for (var e = 0, n = t.length; e !== n; )
													t[e][0] && (v.push(t[e][0] + ' '), w.push(t[e][1])),
														++e;
											}),
												(s = this.splitFragmentsIntoLines(f(v), w)),
												u('ET', 'Q'),
												u(
													'q',
													'BT 0 g',
													this.pdf.internal.getCoordinateString(this.x),
													this.pdf.internal.getVerticalCoordinateString(this.y),
													'Td'
												);
										}
									}
									return (
										t &&
											'function' == typeof t &&
											t.call(this, this.x - 9, this.y - d / 2),
										u('ET', 'Q'),
										(this.y += l)
									);
								}
							}),
							(p.prototype.setBlockBoundary = function (t) {
								return this.renderParagraph(t);
							}),
							(p.prototype.setBlockStyle = function (t) {
								return (this.paragraph.blockstyle = t);
							}),
							(p.prototype.addText = function (t, e) {
								return (
									this.paragraph.text.push(t), this.paragraph.style.push(e)
								);
							}),
							(i = {
								helvetica: 'helvetica',
								'sans-serif': 'helvetica',
								'times new roman': 'times',
								serif: 'times',
								times: 'times',
								monospace: 'courier',
								courier: 'courier',
							}),
							(h = {
								100: 'normal',
								200: 'normal',
								300: 'normal',
								400: 'normal',
								500: 'bold',
								600: 'bold',
								700: 'bold',
								800: 'bold',
								900: 'bold',
								normal: 'normal',
								bold: 'bold',
								bolder: 'bold',
								lighter: 'normal',
							}),
							(a = {normal: 'normal', italic: 'italic', oblique: 'italic'}),
							(s = {
								left: 'left',
								right: 'right',
								center: 'center',
								justify: 'justify',
							}),
							(u = {none: 'none', right: 'right', left: 'left'}),
							(l = {none: 'none', both: 'both'}),
							(m = {normal: 1}),
							(t.fromHTML = function (t, e, n, r, i, o) {
								return (
									(this.margins_doc = o || {top: 0, bottom: 0}),
									r || (r = {}),
									r.elementHandlers || (r.elementHandlers = {}),
									x(this, t, isNaN(e) ? 4 : e, isNaN(n) ? 4 : n, r, i)
								);
							});
					})(dt.API),
					dt.API,
					((
						('undefined' != typeof window && window) ||
						(void 0 !== n.g && n.g)
					).html2pdf = function (t, e, n) {
						var r = e.canvas;
						if (r) {
							var i, o;
							if (
								(((r.pdf = e).annotations = {
									_nameMap: [],
									createAnnotation: function (t, n) {
										var r,
											i = e.context2d._wrapX(n.left),
											o = e.context2d._wrapY(n.top),
											a = (e.context2d._page(n.top), t.indexOf('#'));
										(r = 0 <= a ? {name: t.substring(a + 1)} : {url: t}),
											e.link(i, o, n.right - n.left, n.bottom - n.top, r);
									},
									setName: function (t, n) {
										var r = e.context2d._wrapX(n.left),
											i = e.context2d._wrapY(n.top),
											o = e.context2d._page(n.top);
										this._nameMap[t] = {page: o, x: r, y: i};
									},
								}),
								(r.annotations = e.annotations),
								(e.context2d._pageBreakAt = function (t) {
									this.pageBreaks.push(t);
								}),
								(e.context2d._gotoPage = function (t) {
									for (; e.internal.getNumberOfPages() < t; ) e.addPage();
									e.setPage(t);
								}),
								'string' == typeof t)
							) {
								t = t.replace(
									/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
									''
								);
								var a,
									s,
									h = document.createElement('iframe');
								document.body.appendChild(h),
									(null != (a = h.contentDocument) && null != a) ||
										(a = h.contentWindow.document),
									a.open(),
									a.write(t),
									a.close(),
									(i = a.body),
									(s = a.body || {}),
									(t = a.documentElement || {}),
									(o = Math.max(
										s.scrollHeight,
										s.offsetHeight,
										t.clientHeight,
										t.scrollHeight,
										t.offsetHeight
									));
							} else
								(s = (i = t).body || {}),
									(o = Math.max(
										s.scrollHeight,
										s.offsetHeight,
										t.clientHeight,
										t.scrollHeight,
										t.offsetHeight
									));
							var u = {
								async: !0,
								allowTaint: !0,
								backgroundColor: '#ffffff',
								canvas: r,
								imageTimeout: 15e3,
								logging: !0,
								proxy: null,
								removeContainer: !0,
								foreignObjectRendering: !1,
								useCORS: !1,
								windowHeight: (o = e.internal.pageSize.getHeight()),
								scrollY: o,
							};
							(e.context2d.pageWrapYEnabled = !0),
								(e.context2d.pageWrapY = e.internal.pageSize.getHeight()),
								html2canvas(i, u).then(function (t) {
									n && (h && h.parentElement.removeChild(h), n(e));
								});
						} else alert('jsPDF canvas plugin not installed');
					}),
					(window.tmp = html2pdf),
					(function (t) {
						var e =
							t.BlobBuilder ||
							t.WebKitBlobBuilder ||
							t.MSBlobBuilder ||
							t.MozBlobBuilder;
						t.URL =
							t.URL ||
							t.webkitURL ||
							function (t, e) {
								return ((e = document.createElement('a')).href = t), e;
							};
						var n = t.Blob,
							r = URL.createObjectURL,
							i = URL.revokeObjectURL,
							o = t.Symbol && t.Symbol.toStringTag,
							a = !1,
							s = !1,
							h = !!t.ArrayBuffer,
							u = e && e.prototype.append && e.prototype.getBlob;
						try {
							(a = 2 === new Blob(['ä']).size),
								(s = 2 === new Blob([new Uint8Array([1, 2])]).size);
						} catch (a) {}
						function l(t) {
							return t.map(function (t) {
								if (t.buffer instanceof ArrayBuffer) {
									var e = t.buffer;
									if (t.byteLength !== e.byteLength) {
										var n = new Uint8Array(t.byteLength);
										n.set(new Uint8Array(e, t.byteOffset, t.byteLength)),
											(e = n.buffer);
									}
									return e;
								}
								return t;
							});
						}
						function c(t, n) {
							n = n || {};
							var r = new e();
							return (
								l(t).forEach(function (t) {
									r.append(t);
								}),
								n.type ? r.getBlob(n.type) : r.getBlob()
							);
						}
						function f(t, e) {
							return new n(l(t), e || {});
						}
						if (
							(t.Blob &&
								((c.prototype = Blob.prototype),
								(f.prototype = Blob.prototype)),
							o)
						)
							try {
								(File.prototype[o] = 'File'),
									(Blob.prototype[o] = 'Blob'),
									(FileReader.prototype[o] = 'FileReader');
							} catch (a) {}
						function p() {
							var e =
									!!t.ActiveXObject ||
									('-ms-scroll-limit' in document.documentElement.style &&
										'-ms-ime-align' in document.documentElement.style),
								n = t.XMLHttpRequest && t.XMLHttpRequest.prototype.send;
							e &&
								n &&
								(XMLHttpRequest.prototype.send = function (t) {
									t instanceof Blob &&
										this.setRequestHeader('Content-Type', t.type),
										n.call(this, t);
								});
							try {
								new File([], '');
							} catch (e) {
								try {
									var r = new Function(
										'class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name;this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date;this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File'
									)();
									t.File = r;
								} catch (e) {
									(r = function (t, e, n) {
										var r = new Blob(t, n),
											i =
												n && void 0 !== n.lastModified
													? new Date(n.lastModified)
													: new Date();
										return (
											(r.name = e),
											(r.lastModifiedDate = i),
											(r.lastModified = +i),
											(r.toString = function () {
												return '[object File]';
											}),
											o && (r[o] = 'File'),
											r
										);
									}),
										(t.File = r);
								}
							}
						}
						a
							? (p(), (t.Blob = s ? t.Blob : f))
							: u
							? (p(), (t.Blob = c))
							: (function () {
									function e(t) {
										for (var e = [], n = 0; n < t.length; n++) {
											var r = t.charCodeAt(n);
											r < 128
												? e.push(r)
												: r < 2048
												? e.push(192 | (r >> 6), 128 | (63 & r))
												: r < 55296 || 57344 <= r
												? e.push(
														224 | (r >> 12),
														128 | ((r >> 6) & 63),
														128 | (63 & r)
												  )
												: (n++,
												  (r =
														65536 +
														(((1023 & r) << 10) | (1023 & t.charCodeAt(n)))),
												  e.push(
														240 | (r >> 18),
														128 | ((r >> 12) & 63),
														128 | ((r >> 6) & 63),
														128 | (63 & r)
												  ));
										}
										return e;
									}
									function n(t) {
										var e, n, r, i, o, a;
										for (e = '', r = t.length, n = 0; n < r; )
											switch ((i = t[n++]) >> 4) {
												case 0:
												case 1:
												case 2:
												case 3:
												case 4:
												case 5:
												case 6:
												case 7:
													e += String.fromCharCode(i);
													break;
												case 12:
												case 13:
													(o = t[n++]),
														(e += String.fromCharCode(
															((31 & i) << 6) | (63 & o)
														));
													break;
												case 14:
													(o = t[n++]),
														(a = t[n++]),
														(e += String.fromCharCode(
															((15 & i) << 12) |
																((63 & o) << 6) |
																((63 & a) << 0)
														));
											}
										return e;
									}
									function o(t) {
										for (
											var e = new Array(t.byteLength),
												n = new Uint8Array(t),
												r = e.length;
											r--;

										)
											e[r] = n[r];
										return e;
									}
									function a(t) {
										for (
											var e =
													'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
												n = [],
												r = 0;
											r < t.length;
											r += 3
										) {
											var i = t[r],
												o = r + 1 < t.length,
												a = o ? t[r + 1] : 0,
												s = r + 2 < t.length,
												h = s ? t[r + 2] : 0,
												u = i >> 2,
												l = ((3 & i) << 4) | (a >> 4),
												c = ((15 & a) << 2) | (h >> 6),
												f = 63 & h;
											s || ((f = 64), o || (c = 64)),
												n.push(e[u], e[l], e[c], e[f]);
										}
										return n.join('');
									}
									var s =
										Object.create ||
										function (t) {
											function e() {}
											return (e.prototype = t), new e();
										};
									if (h)
										var u = [
												'[object Int8Array]',
												'[object Uint8Array]',
												'[object Uint8ClampedArray]',
												'[object Int16Array]',
												'[object Uint16Array]',
												'[object Int32Array]',
												'[object Uint32Array]',
												'[object Float32Array]',
												'[object Float64Array]',
											],
											l =
												ArrayBuffer.isView ||
												function (t) {
													return (
														t &&
														-1 < u.indexOf(Object.prototype.toString.call(t))
													);
												};
									function c(t, n) {
										for (var r = 0, i = (t = t || []).length; r < i; r++) {
											var a = t[r];
											a instanceof c
												? (t[r] = a._buffer)
												: 'string' == typeof a
												? (t[r] = e(a))
												: h && (ArrayBuffer.prototype.isPrototypeOf(a) || l(a))
												? (t[r] = o(a))
												: h && (s = a) && DataView.prototype.isPrototypeOf(s)
												? (t[r] = o(a.buffer))
												: (t[r] = e(String(a)));
										}
										var s;
										(this._buffer = [].concat.apply([], t)),
											(this.size = this._buffer.length),
											(this.type = (n && n.type) || '');
									}
									function f(t, e, n) {
										var r = c.call(this, t, (n = n || {})) || this;
										return (
											(r.name = e),
											(r.lastModifiedDate = n.lastModified
												? new Date(n.lastModified)
												: new Date()),
											(r.lastModified = +r.lastModifiedDate),
											r
										);
									}
									if (
										((c.prototype.slice = function (t, e, n) {
											return new c(
												[this._buffer.slice(t || 0, e || this._buffer.length)],
												{type: n}
											);
										}),
										(c.prototype.toString = function () {
											return '[object Blob]';
										}),
										((f.prototype = s(c.prototype)).constructor = f),
										Object.setPrototypeOf)
									)
										Object.setPrototypeOf(f, c);
									else
										try {
											f.__proto__ = c;
										} catch (s) {}
									function p() {
										if (!(this instanceof p))
											throw new TypeError(
												"Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function."
											);
										var t = document.createDocumentFragment();
										(this.addEventListener = t.addEventListener),
											(this.dispatchEvent = function (e) {
												var n = this['on' + e.type];
												'function' == typeof n && n(e), t.dispatchEvent(e);
											}),
											(this.removeEventListener = t.removeEventListener);
									}
									function d(t, e, n) {
										if (!(e instanceof c))
											throw new TypeError(
												"Failed to execute '" +
													n +
													"' on 'FileReader': parameter 1 is not of type 'Blob'."
											);
										(t.result = ''),
											setTimeout(function () {
												(this.readyState = p.LOADING),
													t.dispatchEvent(new Event('load')),
													t.dispatchEvent(new Event('loadend'));
											});
									}
									(f.prototype.toString = function () {
										return '[object File]';
									}),
										(p.EMPTY = 0),
										(p.LOADING = 1),
										(p.DONE = 2),
										(p.prototype.error = null),
										(p.prototype.onabort = null),
										(p.prototype.onerror = null),
										(p.prototype.onload = null),
										(p.prototype.onloadend = null),
										(p.prototype.onloadstart = null),
										(p.prototype.onprogress = null),
										(p.prototype.readAsDataURL = function (t) {
											d(this, t, 'readAsDataURL'),
												(this.result =
													'data:' + t.type + ';base64,' + a(t._buffer));
										}),
										(p.prototype.readAsText = function (t) {
											d(this, t, 'readAsText'), (this.result = n(t._buffer));
										}),
										(p.prototype.readAsArrayBuffer = function (t) {
											d(this, t, 'readAsText'),
												(this.result = t._buffer.slice());
										}),
										(p.prototype.abort = function () {}),
										(URL.createObjectURL = function (t) {
											return t instanceof c
												? 'data:' + t.type + ';base64,' + a(t._buffer)
												: r.call(URL, t);
										}),
										(URL.revokeObjectURL = function (t) {
											i && i.call(URL, t);
										});
									var g = t.XMLHttpRequest && t.XMLHttpRequest.prototype.send;
									g &&
										(XMLHttpRequest.prototype.send = function (t) {
											t instanceof c
												? (this.setRequestHeader('Content-Type', t.type),
												  g.call(this, n(t._buffer)))
												: g.call(this, t);
										}),
										(t.FileReader = p),
										(t.File = f),
										(t.Blob = c);
							  })();
					})(
						('undefined' != typeof self && self) ||
							('undefined' != typeof window && window) ||
							(void 0 !== n.g && n.g) ||
							Function('return typeof this === "object" && this.content')() ||
							Function('return this')()
					);
				var gt,
					mt,
					yt,
					vt,
					wt,
					bt,
					xt,
					Nt,
					Lt,
					At,
					St,
					_t,
					Ft,
					Pt,
					kt,
					It =
						It ||
						(function (t) {
							if (
								!(
									void 0 === t ||
									('undefined' != typeof navigator &&
										/MSIE [1-9]\./.test(navigator.userAgent))
								)
							) {
								var e = t.document,
									n = function () {
										return t.URL || t.webkitURL || t;
									},
									r = e.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
									i = 'download' in r,
									o = /constructor/i.test(t.HTMLElement) || t.safari,
									a = /CriOS\/[\d]+/.test(navigator.userAgent),
									s = t.setImmediate || t.setTimeout,
									h = function (t) {
										s(function () {
											throw t;
										}, 0);
									},
									u = function (t) {
										setTimeout(function () {
											'string' == typeof t
												? n().revokeObjectURL(t)
												: t.remove();
										}, 4e4);
									},
									l = function (t) {
										return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
											t.type
										)
											? new Blob([String.fromCharCode(65279), t], {
													type: t.type,
											  })
											: t;
									},
									c = function (e, c, f) {
										f || (e = l(e));
										var p,
											d = this,
											g = 'application/octet-stream' === e.type,
											m = function () {
												!(function (t, e, n) {
													for (var r = (e = [].concat(e)).length; r--; ) {
														var i = t['on' + e[r]];
														if ('function' == typeof i)
															try {
																i.call(t, t);
															} catch (t) {
																h(t);
															}
													}
												})(d, 'writestart progress write writeend'.split(' '));
											};
										if (((d.readyState = d.INIT), i))
											return (
												(p = n().createObjectURL(e)),
												void s(function () {
													var t, e;
													(r.href = p),
														(r.download = c),
														(t = r),
														(e = new MouseEvent('click')),
														t.dispatchEvent(e),
														m(),
														u(p),
														(d.readyState = d.DONE);
												}, 0)
											);
										!(function () {
											if ((a || (g && o)) && t.FileReader) {
												var r = new FileReader();
												return (
													(r.onloadend = function () {
														var e = a
															? r.result
															: r.result.replace(
																	/^data:[^;]*;/,
																	'data:attachment/file;'
															  );
														t.open(e, '_blank') || (t.location.href = e),
															(e = void 0),
															(d.readyState = d.DONE),
															m();
													}),
													r.readAsDataURL(e),
													(d.readyState = d.INIT)
												);
											}
											p || (p = n().createObjectURL(e)),
												g
													? (t.location.href = p)
													: t.open(p, '_blank') || (t.location.href = p),
												(d.readyState = d.DONE),
												m(),
												u(p);
										})();
									},
									f = c.prototype;
								return 'undefined' != typeof navigator &&
									navigator.msSaveOrOpenBlob
									? function (t, e, n) {
											return (
												(e = e || t.name || 'download'),
												n || (t = l(t)),
												navigator.msSaveOrOpenBlob(t, e)
											);
									  }
									: ((f.abort = function () {}),
									  (f.readyState = f.INIT = 0),
									  (f.WRITING = 1),
									  (f.DONE = 2),
									  (f.error =
											f.onwritestart =
											f.onprogress =
											f.onwrite =
											f.onabort =
											f.onerror =
											f.onwriteend =
												null),
									  function (t, e, n) {
											return new c(t, e || t.name || 'download', n);
									  });
							}
						})(
							('undefined' != typeof self && self) ||
								('undefined' != typeof window && window) ||
								void 0
						);
				function Ct(t) {
					var e = 0;
					if (
						71 !== t[e++] ||
						73 !== t[e++] ||
						70 !== t[e++] ||
						56 !== t[e++] ||
						56 != ((t[e++] + 1) & 253) ||
						97 !== t[e++]
					)
						throw 'Invalid GIF 87a/89a header.';
					var n = t[e++] | (t[e++] << 8),
						r = t[e++] | (t[e++] << 8),
						i = t[e++],
						o = i >> 7,
						a = 1 << (1 + (7 & i));
					t[e++], t[e++];
					var s = null;
					o && ((s = e), (e += 3 * a));
					var h = !0,
						u = [],
						l = 0,
						c = null,
						f = 0,
						p = null;
					for (this.width = n, this.height = r; h && e < t.length; )
						switch (t[e++]) {
							case 33:
								switch (t[e++]) {
									case 255:
										if (
											11 !== t[e] ||
											(78 == t[e + 1] &&
												69 == t[e + 2] &&
												84 == t[e + 3] &&
												83 == t[e + 4] &&
												67 == t[e + 5] &&
												65 == t[e + 6] &&
												80 == t[e + 7] &&
												69 == t[e + 8] &&
												50 == t[e + 9] &&
												46 == t[e + 10] &&
												48 == t[e + 11] &&
												3 == t[e + 12] &&
												1 == t[e + 13] &&
												0 == t[e + 16])
										)
											(e += 14), (p = t[e++] | (t[e++] << 8)), e++;
										else for (e += 12; 0 !== (A = t[e++]); ) e += A;
										break;
									case 249:
										if (4 !== t[e++] || 0 !== t[e + 4])
											throw 'Invalid graphics extension block.';
										var d = t[e++];
										(l = t[e++] | (t[e++] << 8)),
											(c = t[e++]),
											0 == (1 & d) && (c = null),
											(f = (d >> 2) & 7),
											e++;
										break;
									case 254:
										for (; 0 !== (A = t[e++]); ) e += A;
										break;
									default:
										throw (
											'Unknown graphic control label: 0x' +
											t[e - 1].toString(16)
										);
								}
								break;
							case 44:
								var g = t[e++] | (t[e++] << 8),
									m = t[e++] | (t[e++] << 8),
									y = t[e++] | (t[e++] << 8),
									v = t[e++] | (t[e++] << 8),
									w = t[e++],
									b = (w >> 6) & 1,
									x = s,
									N = !1;
								w >> 7 && ((N = !0), (x = e), (e += 3 * (1 << (1 + (7 & w)))));
								var L = e;
								for (e++; ; ) {
									var A;
									if (0 === (A = t[e++])) break;
									e += A;
								}
								u.push({
									x: g,
									y: m,
									width: y,
									height: v,
									has_local_palette: N,
									palette_offset: x,
									data_offset: L,
									data_length: e - L,
									transparent_index: c,
									interlaced: !!b,
									delay: l,
									disposal: f,
								});
								break;
							case 59:
								h = !1;
								break;
							default:
								throw 'Unknown gif block: 0x' + t[e - 1].toString(16);
						}
					(this.numFrames = function () {
						return u.length;
					}),
						(this.loopCount = function () {
							return p;
						}),
						(this.frameInfo = function (t) {
							if (t < 0 || t >= u.length) throw 'Frame index out of range.';
							return u[t];
						}),
						(this.decodeAndBlitFrameBGRA = function (e, r) {
							var i = this.frameInfo(e),
								o = i.width * i.height,
								a = new Uint8Array(o);
							Bt(t, i.data_offset, a, o);
							var s = i.palette_offset,
								h = i.transparent_index;
							null === h && (h = 256);
							var u = i.width,
								l = n - u,
								c = u,
								f = 4 * (i.y * n + i.x),
								p = 4 * ((i.y + i.height) * n + i.x),
								d = f,
								g = 4 * l;
							!0 === i.interlaced && (g += 4 * (u + l) * 7);
							for (var m = 8, y = 0, v = a.length; y < v; ++y) {
								var w = a[y];
								if (
									(0 === c &&
										((c = u),
										p <= (d += g) &&
											((g = l + 4 * (u + l) * (m - 1)),
											(d = f + (u + l) * (m << 1)),
											(m >>= 1))),
									w === h)
								)
									d += 4;
								else {
									var b = t[s + 3 * w],
										x = t[s + 3 * w + 1],
										N = t[s + 3 * w + 2];
									(r[d++] = N), (r[d++] = x), (r[d++] = b), (r[d++] = 255);
								}
								--c;
							}
						}),
						(this.decodeAndBlitFrameRGBA = function (e, r) {
							var i = this.frameInfo(e),
								o = i.width * i.height,
								a = new Uint8Array(o);
							Bt(t, i.data_offset, a, o);
							var s = i.palette_offset,
								h = i.transparent_index;
							null === h && (h = 256);
							var u = i.width,
								l = n - u,
								c = u,
								f = 4 * (i.y * n + i.x),
								p = 4 * ((i.y + i.height) * n + i.x),
								d = f,
								g = 4 * l;
							!0 === i.interlaced && (g += 4 * (u + l) * 7);
							for (var m = 8, y = 0, v = a.length; y < v; ++y) {
								var w = a[y];
								if (
									(0 === c &&
										((c = u),
										p <= (d += g) &&
											((g = l + 4 * (u + l) * (m - 1)),
											(d = f + (u + l) * (m << 1)),
											(m >>= 1))),
									w === h)
								)
									d += 4;
								else {
									var b = t[s + 3 * w],
										x = t[s + 3 * w + 1],
										N = t[s + 3 * w + 2];
									(r[d++] = b), (r[d++] = x), (r[d++] = N), (r[d++] = 255);
								}
								--c;
							}
						});
				}
				function Bt(t, e, n, r) {
					for (
						var i = t[e++],
							a = 1 << i,
							s = a + 1,
							h = s + 1,
							u = i + 1,
							l = (1 << u) - 1,
							c = 0,
							f = 0,
							p = 0,
							d = t[e++],
							g = new Int32Array(4096),
							m = null;
						;

					) {
						for (; c < 16 && 0 !== d; )
							(f |= t[e++] << c), (c += 8), 1 === d ? (d = t[e++]) : --d;
						if (c < u) break;
						var y = f & l;
						if (((f >>= u), (c -= u), y !== a)) {
							if (y === s) break;
							for (var v = y < h ? y : m, w = 0, b = v; a < b; )
								(b = g[b] >> 8), ++w;
							var x = b;
							if (r < p + w + (v !== y ? 1 : 0))
								return void o.log('Warning, gif stream longer than expected.');
							n[p++] = x;
							var N = (p += w);
							for (v !== y && (n[p++] = x), b = v; w--; )
								(b = g[b]), (n[--N] = 255 & b), (b >>= 8);
							null !== m &&
								h < 4096 &&
								((g[h++] = (m << 8) | x),
								l + 1 <= h && u < 12 && (++u, (l = (l << 1) | 1))),
								(m = y);
						} else (h = s + 1), (l = (1 << (u = i + 1)) - 1), (m = null);
					}
					return (
						p !== r && o.log('Warning, gif stream shorter than expected.'), n
					);
				}
				try {
					(e.GifWriter = function (t, e, n, r) {
						var i = 0,
							o = void 0 === (r = void 0 === r ? {} : r).loop ? null : r.loop,
							a = void 0 === r.palette ? null : r.palette;
						if (e <= 0 || n <= 0 || 65535 < e || 65535 < n)
							throw 'Width/Height invalid.';
						function s(t) {
							var e = t.length;
							if (e < 2 || 256 < e || e & (e - 1))
								throw 'Invalid code/color length, must be power of 2 and 2 .. 256.';
							return e;
						}
						(t[i++] = 71),
							(t[i++] = 73),
							(t[i++] = 70),
							(t[i++] = 56),
							(t[i++] = 57),
							(t[i++] = 97);
						var h = 0,
							u = 0;
						if (null !== a) {
							for (var l = s(a); (l >>= 1); ) ++h;
							if (((l = 1 << h), --h, void 0 !== r.background)) {
								if (l <= (u = r.background))
									throw 'Background index out of range.';
								if (0 === u) throw 'Background index explicitly passed as 0.';
							}
						}
						if (
							((t[i++] = 255 & e),
							(t[i++] = (e >> 8) & 255),
							(t[i++] = 255 & n),
							(t[i++] = (n >> 8) & 255),
							(t[i++] = (null !== a ? 128 : 0) | h),
							(t[i++] = u),
							(t[i++] = 0),
							null !== a)
						)
							for (var c = 0, f = a.length; c < f; ++c) {
								var p = a[c];
								(t[i++] = (p >> 16) & 255),
									(t[i++] = (p >> 8) & 255),
									(t[i++] = 255 & p);
							}
						if (null !== o) {
							if (o < 0 || 65535 < o) throw 'Loop count invalid.';
							(t[i++] = 33),
								(t[i++] = 255),
								(t[i++] = 11),
								(t[i++] = 78),
								(t[i++] = 69),
								(t[i++] = 84),
								(t[i++] = 83),
								(t[i++] = 67),
								(t[i++] = 65),
								(t[i++] = 80),
								(t[i++] = 69),
								(t[i++] = 50),
								(t[i++] = 46),
								(t[i++] = 48),
								(t[i++] = 3),
								(t[i++] = 1),
								(t[i++] = 255 & o),
								(t[i++] = (o >> 8) & 255),
								(t[i++] = 0);
						}
						var d = !1;
						(this.addFrame = function (e, n, r, o, h, u) {
							if (
								(!0 === d && (--i, (d = !1)),
								(u = void 0 === u ? {} : u),
								e < 0 || n < 0 || 65535 < e || 65535 < n)
							)
								throw 'x/y invalid.';
							if (r <= 0 || o <= 0 || 65535 < r || 65535 < o)
								throw 'Width/Height invalid.';
							if (h.length < r * o)
								throw 'Not enough pixels for the frame size.';
							var l = !0,
								c = u.palette;
							if ((null == c && ((l = !1), (c = a)), null == c))
								throw 'Must supply either a local or global palette.';
							for (var f = s(c), p = 0; (f >>= 1); ) ++p;
							f = 1 << p;
							var g = void 0 === u.delay ? 0 : u.delay,
								m = void 0 === u.disposal ? 0 : u.disposal;
							if (m < 0 || 3 < m) throw 'Disposal out of range.';
							var y = !1,
								v = 0;
							if (
								void 0 !== u.transparent &&
								null !== u.transparent &&
								((y = !0), (v = u.transparent) < 0 || f <= v)
							)
								throw 'Transparent color index.';
							if (
								((0 !== m || y || 0 !== g) &&
									((t[i++] = 33),
									(t[i++] = 249),
									(t[i++] = 4),
									(t[i++] = (m << 2) | (!0 === y ? 1 : 0)),
									(t[i++] = 255 & g),
									(t[i++] = (g >> 8) & 255),
									(t[i++] = v),
									(t[i++] = 0)),
								(t[i++] = 44),
								(t[i++] = 255 & e),
								(t[i++] = (e >> 8) & 255),
								(t[i++] = 255 & n),
								(t[i++] = (n >> 8) & 255),
								(t[i++] = 255 & r),
								(t[i++] = (r >> 8) & 255),
								(t[i++] = 255 & o),
								(t[i++] = (o >> 8) & 255),
								(t[i++] = !0 === l ? 128 | (p - 1) : 0),
								!0 === l)
							)
								for (var w = 0, b = c.length; w < b; ++w) {
									var x = c[w];
									(t[i++] = (x >> 16) & 255),
										(t[i++] = (x >> 8) & 255),
										(t[i++] = 255 & x);
								}
							i = (function (t, e, n, r) {
								t[e++] = n;
								var i = e++,
									o = 1 << n,
									a = o - 1,
									s = o + 1,
									h = s + 1,
									u = n + 1,
									l = 0,
									c = 0;
								function f(n) {
									for (; n <= l; )
										(t[e++] = 255 & c),
											(c >>= 8),
											(l -= 8),
											e === i + 256 && ((t[i] = 255), (i = e++));
								}
								function p(t) {
									(c |= t << l), (l += u), f(8);
								}
								var d = r[0] & a,
									g = {};
								p(o);
								for (var m = 1, y = r.length; m < y; ++m) {
									var v = r[m] & a,
										w = (d << 8) | v,
										b = g[w];
									if (void 0 === b) {
										for (c |= d << l, l += u; 8 <= l; )
											(t[e++] = 255 & c),
												(c >>= 8),
												(l -= 8),
												e === i + 256 && ((t[i] = 255), (i = e++));
										4096 === h
											? (p(o), (h = s + 1), (u = n + 1), (g = {}))
											: (1 << u <= h && ++u, (g[w] = h++)),
											(d = v);
									} else d = b;
								}
								return (
									p(d),
									p(s),
									f(1),
									i + 1 === e ? (t[i] = 0) : ((t[i] = e - i - 1), (t[e++] = 0)),
									e
								);
							})(t, i, p < 2 ? 2 : p, h);
						}),
							(this.end = function () {
								return !1 === d && ((t[i++] = 59), (d = !0)), i;
							});
					}),
						(e.GifReader = Ct);
				} catch (a) {}
				function jt(t) {
					var e,
						n,
						r,
						i,
						o,
						a = Math.floor,
						s = new Array(64),
						h = new Array(64),
						u = new Array(64),
						l = new Array(64),
						c = new Array(65535),
						f = new Array(65535),
						p = new Array(64),
						d = new Array(64),
						g = [],
						m = 0,
						y = 7,
						v = new Array(64),
						w = new Array(64),
						b = new Array(64),
						x = new Array(256),
						N = new Array(2048),
						L = [
							0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12,
							17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32,
							39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47,
							50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63,
						],
						A = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
						S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						_ = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
						F = [
							1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113,
							20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36,
							51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41,
							42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74,
							83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105,
							106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134,
							135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154,
							162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181,
							182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201,
							202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227,
							228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246,
							247, 248, 249, 250,
						],
						P = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
						k = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						I = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
						C = [
							0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34,
							50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21,
							98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38,
							39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72,
							73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103,
							104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131,
							132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151,
							152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178,
							179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198,
							199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218,
							226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245,
							246, 247, 248, 249, 250,
						];
					function B(t, e) {
						for (var n = 0, r = 0, i = new Array(), o = 1; o <= 16; o++) {
							for (var a = 1; a <= t[o]; a++)
								(i[e[r]] = []), (i[e[r]][0] = n), (i[e[r]][1] = o), r++, n++;
							n *= 2;
						}
						return i;
					}
					function j(t) {
						for (var e = t[0], n = t[1] - 1; 0 <= n; )
							e & (1 << n) && (m |= 1 << y),
								n--,
								--y < 0 && (255 == m ? (E(255), E(0)) : E(m), (y = 7), (m = 0));
					}
					function E(t) {
						g.push(t);
					}
					function M(t) {
						E((t >> 8) & 255), E(255 & t);
					}
					function O(t, e, n, r, i) {
						for (
							var o,
								a = i[0],
								s = i[240],
								h = (function (t, e) {
									var n,
										r,
										i,
										o,
										a,
										s,
										h,
										u,
										l,
										c,
										f = 0;
									for (l = 0; l < 8; ++l) {
										(n = t[f]),
											(r = t[f + 1]),
											(i = t[f + 2]),
											(o = t[f + 3]),
											(a = t[f + 4]),
											(s = t[f + 5]),
											(h = t[f + 6]);
										var d = n + (u = t[f + 7]),
											g = n - u,
											m = r + h,
											y = r - h,
											v = i + s,
											w = i - s,
											b = o + a,
											x = o - a,
											N = d + b,
											L = d - b,
											A = m + v,
											S = m - v;
										(t[f] = N + A), (t[f + 4] = N - A);
										var _ = 0.707106781 * (S + L);
										(t[f + 2] = L + _), (t[f + 6] = L - _);
										var F = 0.382683433 * ((N = x + w) - (S = y + g)),
											P = 0.5411961 * N + F,
											k = 1.306562965 * S + F,
											I = 0.707106781 * (A = w + y),
											C = g + I,
											B = g - I;
										(t[f + 5] = B + P),
											(t[f + 3] = B - P),
											(t[f + 1] = C + k),
											(t[f + 7] = C - k),
											(f += 8);
									}
									for (l = f = 0; l < 8; ++l) {
										(n = t[f]),
											(r = t[f + 8]),
											(i = t[f + 16]),
											(o = t[f + 24]),
											(a = t[f + 32]),
											(s = t[f + 40]),
											(h = t[f + 48]);
										var j = n + (u = t[f + 56]),
											E = n - u,
											M = r + h,
											O = r - h,
											q = i + s,
											T = i - s,
											R = o + a,
											D = o - a,
											U = j + R,
											z = j - R,
											H = M + q,
											W = M - q;
										(t[f] = U + H), (t[f + 32] = U - H);
										var V = 0.707106781 * (W + z);
										(t[f + 16] = z + V), (t[f + 48] = z - V);
										var G = 0.382683433 * ((U = D + T) - (W = O + E)),
											Y = 0.5411961 * U + G,
											J = 1.306562965 * W + G,
											X = 0.707106781 * (H = T + O),
											K = E + X,
											Z = E - X;
										(t[f + 40] = Z + Y),
											(t[f + 24] = Z - Y),
											(t[f + 8] = K + J),
											(t[f + 56] = K - J),
											f++;
									}
									for (l = 0; l < 64; ++l)
										(c = t[l] * e[l]),
											(p[l] = 0 < c ? (c + 0.5) | 0 : (c - 0.5) | 0);
									return p;
								})(t, e),
								u = 0;
							u < 64;
							++u
						)
							d[L[u]] = h[u];
						var l = d[0] - n;
						(n = d[0]), 0 == l ? j(r[0]) : (j(r[f[(o = 32767 + l)]]), j(c[o]));
						for (var g = 63; 0 < g && 0 == d[g]; g--);
						if (0 == g) return j(a), n;
						for (var m, y = 1; y <= g; ) {
							for (var v = y; 0 == d[y] && y <= g; ++y);
							var w = y - v;
							if (16 <= w) {
								m = w >> 4;
								for (var b = 1; b <= m; ++b) j(s);
								w &= 15;
							}
							(o = 32767 + d[y]), j(i[(w << 4) + f[o]]), j(c[o]), y++;
						}
						return 63 != g && j(a), n;
					}
					function q(t) {
						t <= 0 && (t = 1),
							100 < t && (t = 100),
							o != t &&
								((function (t) {
									for (
										var e = [
												16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58,
												60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29,
												51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24,
												35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121,
												120, 101, 72, 92, 95, 98, 112, 100, 103, 99,
											],
											n = 0;
										n < 64;
										n++
									) {
										var r = a((e[n] * t + 50) / 100);
										r < 1 ? (r = 1) : 255 < r && (r = 255), (s[L[n]] = r);
									}
									for (
										var i = [
												17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99,
												99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99,
												99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
												99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
												99, 99, 99, 99, 99, 99, 99, 99,
											],
											o = 0;
										o < 64;
										o++
									) {
										var c = a((i[o] * t + 50) / 100);
										c < 1 ? (c = 1) : 255 < c && (c = 255), (h[L[o]] = c);
									}
									for (
										var f = [
												1, 1.387039845, 1.306562965, 1.175875602, 1,
												0.785694958, 0.5411961, 0.275899379,
											],
											p = 0,
											d = 0;
										d < 8;
										d++
									)
										for (var g = 0; g < 8; g++)
											(u[p] = 1 / (s[L[p]] * f[d] * f[g] * 8)),
												(l[p] = 1 / (h[L[p]] * f[d] * f[g] * 8)),
												p++;
								})(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)),
								(o = t));
					}
					(this.encode = function (t, o) {
						var a, c;
						new Date().getTime(),
							o && q(o),
							(g = new Array()),
							(m = 0),
							(y = 7),
							M(65496),
							M(65504),
							M(16),
							E(74),
							E(70),
							E(73),
							E(70),
							E(0),
							E(1),
							E(1),
							E(0),
							M(1),
							M(1),
							E(0),
							E(0),
							(function () {
								M(65499), M(132), E(0);
								for (var t = 0; t < 64; t++) E(s[t]);
								E(1);
								for (var e = 0; e < 64; e++) E(h[e]);
							})(),
							(a = t.width),
							(c = t.height),
							M(65472),
							M(17),
							E(8),
							M(c),
							M(a),
							E(3),
							E(1),
							E(17),
							E(0),
							E(2),
							E(17),
							E(1),
							E(3),
							E(17),
							E(1),
							(function () {
								M(65476), M(418), E(0);
								for (var t = 0; t < 16; t++) E(A[t + 1]);
								for (var e = 0; e <= 11; e++) E(S[e]);
								E(16);
								for (var n = 0; n < 16; n++) E(_[n + 1]);
								for (var r = 0; r <= 161; r++) E(F[r]);
								E(1);
								for (var i = 0; i < 16; i++) E(P[i + 1]);
								for (var o = 0; o <= 11; o++) E(k[o]);
								E(17);
								for (var a = 0; a < 16; a++) E(I[a + 1]);
								for (var s = 0; s <= 161; s++) E(C[s]);
							})(),
							M(65498),
							M(12),
							E(3),
							E(1),
							E(0),
							E(2),
							E(17),
							E(3),
							E(17),
							E(0),
							E(63),
							E(0);
						var f = 0,
							p = 0,
							d = 0;
						(m = 0), (y = 7), (this.encode.displayName = '_encode_');
						for (
							var x,
								L,
								B,
								T,
								R,
								D,
								U,
								z,
								H,
								W = t.data,
								V = t.width,
								G = t.height,
								Y = 4 * V,
								J = 0;
							J < G;

						) {
							for (x = 0; x < Y; ) {
								for (D = R = Y * J + x, U = -1, H = z = 0; H < 64; H++)
									(D = R + (z = H >> 3) * Y + (U = 4 * (7 & H))),
										G <= J + z && (D -= Y * (J + 1 + z - G)),
										Y <= x + U && (D -= x + U - Y + 4),
										(L = W[D++]),
										(B = W[D++]),
										(T = W[D++]),
										(v[H] =
											((N[L] + N[(B + 256) >> 0] + N[(T + 512) >> 0]) >> 16) -
											128),
										(w[H] =
											((N[(L + 768) >> 0] +
												N[(B + 1024) >> 0] +
												N[(T + 1280) >> 0]) >>
												16) -
											128),
										(b[H] =
											((N[(L + 1280) >> 0] +
												N[(B + 1536) >> 0] +
												N[(T + 1792) >> 0]) >>
												16) -
											128);
								(f = O(v, u, f, e, r)),
									(p = O(w, l, p, n, i)),
									(d = O(b, l, d, n, i)),
									(x += 32);
							}
							J += 8;
						}
						if (0 <= y) {
							var X = [];
							(X[1] = y + 1), (X[0] = (1 << (y + 1)) - 1), j(X);
						}
						return M(65497), new Uint8Array(g);
					}),
						new Date().getTime(),
						t || (t = 50),
						(function () {
							for (var t = String.fromCharCode, e = 0; e < 256; e++)
								x[e] = t(e);
						})(),
						(e = B(A, S)),
						(n = B(P, k)),
						(r = B(_, F)),
						(i = B(I, C)),
						(function () {
							for (var t = 1, e = 2, n = 1; n <= 15; n++) {
								for (var r = t; r < e; r++)
									(f[32767 + r] = n),
										(c[32767 + r] = []),
										(c[32767 + r][1] = n),
										(c[32767 + r][0] = r);
								for (var i = -(e - 1); i <= -t; i++)
									(f[32767 + i] = n),
										(c[32767 + i] = []),
										(c[32767 + i][1] = n),
										(c[32767 + i][0] = e - 1 + i);
								(t <<= 1), (e <<= 1);
							}
						})(),
						(function () {
							for (var t = 0; t < 256; t++)
								(N[t] = 19595 * t),
									(N[(t + 256) >> 0] = 38470 * t),
									(N[(t + 512) >> 0] = 7471 * t + 32768),
									(N[(t + 768) >> 0] = -11059 * t),
									(N[(t + 1024) >> 0] = -21709 * t),
									(N[(t + 1280) >> 0] = 32768 * t + 8421375),
									(N[(t + 1536) >> 0] = -27439 * t),
									(N[(t + 1792) >> 0] = -5329 * t);
						})(),
						q(t),
						new Date().getTime();
				}
				function Et(t, e) {
					if (
						((this.pos = 0),
						(this.buffer = t),
						(this.datav = new DataView(t.buffer)),
						(this.is_with_alpha = !!e),
						(this.bottom_up = !0),
						(this.flag =
							String.fromCharCode(this.buffer[0]) +
							String.fromCharCode(this.buffer[1])),
						(this.pos += 2),
						-1 === ['BM', 'BA', 'CI', 'CP', 'IC', 'PT'].indexOf(this.flag))
					)
						throw new Error('Invalid BMP File');
					this.parseHeader(), this.parseBGR();
				}
				(window.tmp = Ct),
					(dt.API.adler32cs =
						((bt =
							'function' == typeof ArrayBuffer &&
							'function' == typeof Uint8Array),
						(xt = null),
						(Nt = (function () {
							if (!bt)
								return function () {
									return !1;
								};
							try {
								var t = {};
								'function' == typeof t.Buffer && (xt = t.Buffer);
							} catch (t) {}
							return function (t) {
								return (
									t instanceof ArrayBuffer || (null !== xt && t instanceof xt)
								);
							};
						})()),
						(Lt =
							null !== xt
								? function (t) {
										return new xt(t, 'utf8').toString('binary');
								  }
								: function (t) {
										return unescape(encodeURIComponent(t));
								  }),
						(At = function (t, e) {
							for (
								var n = 65535 & t, r = t >>> 16, i = 0, o = e.length;
								i < o;
								i++
							)
								r = (r + (n = (n + (255 & e.charCodeAt(i))) % 65521)) % 65521;
							return ((r << 16) | n) >>> 0;
						}),
						(St = function (t, e) {
							for (
								var n = 65535 & t, r = t >>> 16, i = 0, o = e.length;
								i < o;
								i++
							)
								r = (r + (n = (n + e[i]) % 65521)) % 65521;
							return ((r << 16) | n) >>> 0;
						}),
						(Ft = (_t = {}).Adler32 =
							((((wt = (vt = function (t) {
								if (!(this instanceof vt))
									throw new TypeError(
										'Constructor cannot called be as a function.'
									);
								if (!isFinite((t = null == t ? 1 : +t)))
									throw new Error(
										'First arguments needs to be a finite number.'
									);
								this.checksum = t >>> 0;
							}).prototype =
								{}).constructor = vt).from =
								(((gt = function (t) {
									if (!(this instanceof vt))
										throw new TypeError(
											'Constructor cannot called be as a function.'
										);
									if (null == t)
										throw new Error('First argument needs to be a string.');
									this.checksum = At(1, t.toString());
								}).prototype = wt),
								gt)),
							(vt.fromUtf8 =
								(((mt = function (t) {
									if (!(this instanceof vt))
										throw new TypeError(
											'Constructor cannot called be as a function.'
										);
									if (null == t)
										throw new Error('First argument needs to be a string.');
									var e = Lt(t.toString());
									this.checksum = At(1, e);
								}).prototype = wt),
								mt)),
							bt &&
								(vt.fromBuffer =
									(((yt = function (t) {
										if (!(this instanceof vt))
											throw new TypeError(
												'Constructor cannot called be as a function.'
											);
										if (!Nt(t))
											throw new Error(
												'First argument needs to be ArrayBuffer.'
											);
										var e = new Uint8Array(t);
										return (this.checksum = St(1, e));
									}).prototype = wt),
									yt)),
							(wt.update = function (t) {
								if (null == t)
									throw new Error('First argument needs to be a string.');
								return (
									(t = t.toString()), (this.checksum = At(this.checksum, t))
								);
							}),
							(wt.updateUtf8 = function (t) {
								if (null == t)
									throw new Error('First argument needs to be a string.');
								var e = Lt(t.toString());
								return (this.checksum = At(this.checksum, e));
							}),
							bt &&
								(wt.updateBuffer = function (t) {
									if (!Nt(t))
										throw new Error('First argument needs to be ArrayBuffer.');
									var e = new Uint8Array(t);
									return (this.checksum = St(this.checksum, e));
								}),
							(wt.clone = function () {
								return new Ft(this.checksum);
							}),
							vt)),
						(_t.from = function (t) {
							if (null == t)
								throw new Error('First argument needs to be a string.');
							return At(1, t.toString());
						}),
						(_t.fromUtf8 = function (t) {
							if (null == t)
								throw new Error('First argument needs to be a string.');
							var e = Lt(t.toString());
							return At(1, e);
						}),
						bt &&
							(_t.fromBuffer = function (t) {
								if (!Nt(t))
									throw new Error('First argument need to be ArrayBuffer.');
								var e = new Uint8Array(t);
								return St(1, e);
							}),
						_t)),
					(function (t) {
						t.__bidiEngine__ = t.prototype.__bidiEngine__ = function (t) {
							var n,
								r,
								i,
								o,
								a,
								s,
								h,
								u = e,
								l = [
									[0, 3, 0, 1, 0, 0, 0],
									[0, 3, 0, 1, 2, 2, 0],
									[0, 3, 0, 17, 2, 0, 1],
									[0, 3, 5, 5, 4, 1, 0],
									[0, 3, 21, 21, 4, 0, 1],
									[0, 3, 5, 5, 4, 2, 0],
								],
								c = [
									[2, 0, 1, 1, 0, 1, 0],
									[2, 0, 1, 1, 0, 2, 0],
									[2, 0, 2, 1, 3, 2, 0],
									[2, 0, 2, 33, 3, 1, 1],
								],
								f = {L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6},
								p = {0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7},
								d = [
									'(',
									')',
									'(',
									'<',
									'>',
									'<',
									'[',
									']',
									'[',
									'{',
									'}',
									'{',
									'«',
									'»',
									'«',
									'‹',
									'›',
									'‹',
									'⁅',
									'⁆',
									'⁅',
									'⁽',
									'⁾',
									'⁽',
									'₍',
									'₎',
									'₍',
									'≤',
									'≥',
									'≤',
									'〈',
									'〉',
									'〈',
									'﹙',
									'﹚',
									'﹙',
									'﹛',
									'﹜',
									'﹛',
									'﹝',
									'﹞',
									'﹝',
									'﹤',
									'﹥',
									'﹤',
								],
								g = new RegExp(
									/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/
								),
								m = !1,
								y = 0;
							this.__bidiEngine__ = {};
							var v = function (t) {
									var e = t.charCodeAt(),
										n = e >> 8,
										r = p[n];
									return void 0 !== r
										? u[256 * r + (255 & e)]
										: 252 === n || 253 === n
										? 'AL'
										: g.test(n)
										? 'L'
										: 8 === n
										? 'R'
										: 'N';
								},
								w = function (t) {
									for (var e, n = 0; n < t.length; n++) {
										if ('L' === (e = v(t.charAt(n)))) return !1;
										if ('R' === e) return !0;
									}
									return !1;
								},
								b = function (t, e, a, s) {
									var h,
										u,
										l,
										c,
										f = e[s];
									switch (f) {
										case 'L':
										case 'R':
										case 'LRE':
										case 'RLE':
										case 'LRO':
										case 'RLO':
										case 'PDF':
											m = !1;
											break;
										case 'N':
										case 'AN':
											break;
										case 'EN':
											m && (f = 'AN');
											break;
										case 'AL':
											(m = !0), (f = 'R');
											break;
										case 'WS':
										case 'BN':
											f = 'N';
											break;
										case 'CS':
											s < 1 ||
											s + 1 >= e.length ||
											('EN' !== (h = a[s - 1]) && 'AN' !== h) ||
											('EN' !== (u = e[s + 1]) && 'AN' !== u)
												? (f = 'N')
												: m && (u = 'AN'),
												(f = u === h ? u : 'N');
											break;
										case 'ES':
											f =
												'EN' === (h = 0 < s ? a[s - 1] : 'B') &&
												s + 1 < e.length &&
												'EN' === e[s + 1]
													? 'EN'
													: 'N';
											break;
										case 'ET':
											if (0 < s && 'EN' === a[s - 1]) {
												f = 'EN';
												break;
											}
											if (m) {
												f = 'N';
												break;
											}
											for (l = s + 1, c = e.length; l < c && 'ET' === e[l]; )
												l++;
											f = l < c && 'EN' === e[l] ? 'EN' : 'N';
											break;
										case 'NSM':
											if (i && !o) {
												for (c = e.length, l = s + 1; l < c && 'NSM' === e[l]; )
													l++;
												if (l < c) {
													var p = t[s],
														d = (1425 <= p && p <= 2303) || 64286 === p;
													if (((h = e[l]), d && ('R' === h || 'AL' === h))) {
														f = 'R';
														break;
													}
												}
											}
											f = s < 1 || 'B' === (h = e[s - 1]) ? 'N' : a[s - 1];
											break;
										case 'B':
											(n = !(m = !1)), (f = y);
											break;
										case 'S':
											(r = !0), (f = 'N');
									}
									return f;
								},
								x = function (t, e, n) {
									var r = t.split('');
									return (
										n && N(r, n, {hiLevel: y}),
										r.reverse(),
										e && e.reverse(),
										r.join('')
									);
								},
								N = function (t, e, i) {
									var o,
										a,
										s,
										h,
										u,
										p = -1,
										d = t.length,
										g = 0,
										w = [],
										x = y ? c : l,
										N = [];
									for (r = n = m = !1, a = 0; a < d; a++) N[a] = v(t[a]);
									for (s = 0; s < d; s++) {
										if (
											((u = g),
											(w[s] = b(t, N, w, s)),
											(o = 240 & (g = x[u][f[w[s]]])),
											(g &= 15),
											(e[s] = h = x[g][5]),
											0 < o)
										)
											if (16 === o) {
												for (a = p; a < s; a++) e[a] = 1;
												p = -1;
											} else p = -1;
										if (x[g][6]) -1 === p && (p = s);
										else if (-1 < p) {
											for (a = p; a < s; a++) e[a] = h;
											p = -1;
										}
										'B' === N[s] && (e[s] = 0), (i.hiLevel |= h);
									}
									r &&
										(function (t, e, n) {
											for (var r = 0; r < n; r++)
												if ('S' === t[r]) {
													e[r] = y;
													for (var i = r - 1; 0 <= i && 'WS' === t[i]; i--)
														e[i] = y;
												}
										})(N, e, d);
								},
								L = function (t, e, r, i, o) {
									if (!(o.hiLevel < t)) {
										if (1 === t && 1 === y && !n)
											return e.reverse(), void (r && r.reverse());
										for (var a, s, h, u, l = e.length, c = 0; c < l; ) {
											if (i[c] >= t) {
												for (h = c + 1; h < l && i[h] >= t; ) h++;
												for (u = c, s = h - 1; u < s; u++, s--)
													(a = e[u]),
														(e[u] = e[s]),
														(e[s] = a),
														r && ((a = r[u]), (r[u] = r[s]), (r[s] = a));
												c = h;
											}
											c++;
										}
									}
								},
								A = function (t, e, n) {
									var r = t.split(''),
										i = {hiLevel: y};
									return (
										n || (n = []),
										N(r, n, i),
										(function (t, e, n) {
											if (0 !== n.hiLevel && h)
												for (var r, i = 0; i < t.length; i++)
													1 === e[i] &&
														0 <= (r = d.indexOf(t[i])) &&
														(t[i] = d[r + 1]);
										})(r, n, i),
										L(2, r, e, n, i),
										L(1, r, e, n, i),
										r.join('')
									);
								};
							return (
								(this.__bidiEngine__.doBidiReorder = function (t, e, n) {
									if (
										((function (t, e) {
											if (e) for (var n = 0; n < t.length; n++) e[n] = n;
											void 0 === o && (o = w(t)), void 0 === s && (s = w(t));
										})(t, e),
										i || !a || s)
									)
										if (i && a && o ^ s) (y = o ? 1 : 0), (t = x(t, e, n));
										else if (!i && a && s)
											(y = o ? 1 : 0), (t = A(t, e, n)), (t = x(t, e));
										else if (!i || o || a || s) {
											if (i && !a && o ^ s)
												(t = x(t, e)),
													(t = o
														? ((y = 0), A(t, e, n))
														: ((y = 1), (t = A(t, e, n)), x(t, e)));
											else if (i && o && !a && s)
												(y = 1), (t = A(t, e, n)), (t = x(t, e));
											else if (!i && !a && o ^ s) {
												var r = h;
												o
													? ((y = 1),
													  (t = A(t, e, n)),
													  (y = 0),
													  (h = !1),
													  (t = A(t, e, n)),
													  (h = r))
													: ((y = 0),
													  (t = A(t, e, n)),
													  (t = x(t, e)),
													  (h = !(y = 1)),
													  (t = A(t, e, n)),
													  (h = r),
													  (t = x(t, e)));
											}
										} else (y = 0), (t = A(t, e, n));
									else (y = o ? 1 : 0), (t = A(t, e, n));
									return t;
								}),
								(this.__bidiEngine__.setOptions = function (t) {
									t &&
										((i = t.isInputVisual),
										(a = t.isOutputVisual),
										(o = t.isInputRtl),
										(s = t.isOutputRtl),
										(h = t.isSymmetricSwapping));
								}),
								this.__bidiEngine__.setOptions(t),
								this.__bidiEngine__
							);
						};
						var e = [
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'S',
								'B',
								'S',
								'WS',
								'B',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'B',
								'B',
								'B',
								'S',
								'WS',
								'N',
								'N',
								'ET',
								'ET',
								'ET',
								'N',
								'N',
								'N',
								'N',
								'N',
								'ES',
								'CS',
								'ES',
								'CS',
								'CS',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'CS',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'N',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'B',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'CS',
								'N',
								'ET',
								'ET',
								'ET',
								'ET',
								'N',
								'N',
								'N',
								'N',
								'L',
								'N',
								'N',
								'BN',
								'N',
								'N',
								'ET',
								'ET',
								'EN',
								'EN',
								'N',
								'L',
								'N',
								'N',
								'N',
								'EN',
								'L',
								'N',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'L',
								'N',
								'N',
								'N',
								'N',
								'N',
								'ET',
								'N',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'R',
								'NSM',
								'R',
								'NSM',
								'NSM',
								'R',
								'NSM',
								'NSM',
								'R',
								'NSM',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'N',
								'N',
								'N',
								'N',
								'N',
								'R',
								'R',
								'R',
								'R',
								'R',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'AN',
								'AN',
								'AN',
								'AN',
								'AN',
								'AN',
								'N',
								'N',
								'AL',
								'ET',
								'ET',
								'AL',
								'CS',
								'AL',
								'N',
								'N',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'AL',
								'AL',
								'N',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'AN',
								'AN',
								'AN',
								'AN',
								'AN',
								'AN',
								'AN',
								'AN',
								'AN',
								'AN',
								'ET',
								'AN',
								'AN',
								'AL',
								'AL',
								'AL',
								'NSM',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'AN',
								'N',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'AL',
								'AL',
								'NSM',
								'NSM',
								'N',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'AL',
								'AL',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'N',
								'AL',
								'AL',
								'NSM',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'N',
								'N',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'AL',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'R',
								'R',
								'N',
								'N',
								'N',
								'N',
								'R',
								'N',
								'N',
								'N',
								'N',
								'N',
								'WS',
								'WS',
								'WS',
								'WS',
								'WS',
								'WS',
								'WS',
								'WS',
								'WS',
								'WS',
								'WS',
								'BN',
								'BN',
								'BN',
								'L',
								'R',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'WS',
								'B',
								'LRE',
								'RLE',
								'PDF',
								'LRO',
								'RLO',
								'CS',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'CS',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'WS',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'N',
								'LRI',
								'RLI',
								'FSI',
								'PDI',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'BN',
								'EN',
								'L',
								'N',
								'N',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'ES',
								'ES',
								'N',
								'N',
								'N',
								'L',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'ES',
								'ES',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'ET',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'N',
								'N',
								'R',
								'NSM',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'ES',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'N',
								'R',
								'R',
								'R',
								'R',
								'R',
								'N',
								'R',
								'N',
								'R',
								'R',
								'N',
								'R',
								'R',
								'N',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'R',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'NSM',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'CS',
								'N',
								'CS',
								'N',
								'N',
								'CS',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'ET',
								'N',
								'N',
								'ES',
								'ES',
								'N',
								'N',
								'N',
								'N',
								'N',
								'ET',
								'ET',
								'N',
								'N',
								'N',
								'N',
								'N',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'N',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'AL',
								'N',
								'N',
								'BN',
								'N',
								'N',
								'N',
								'ET',
								'ET',
								'ET',
								'N',
								'N',
								'N',
								'N',
								'N',
								'ES',
								'CS',
								'ES',
								'CS',
								'CS',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'EN',
								'CS',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'L',
								'L',
								'L',
								'L',
								'L',
								'L',
								'N',
								'N',
								'L',
								'L',
								'L',
								'N',
								'N',
								'N',
								'ET',
								'ET',
								'N',
								'N',
								'N',
								'ET',
								'ET',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
								'N',
							],
							n = new t.__bidiEngine__({isInputVisual: !0});
						t.API.events.push([
							'postProcessText',
							function (t) {
								var e = t.text,
									r = (t.x, t.y, t.options || {}),
									i = (t.mutex, r.lang, []);
								if ('[object Array]' === Object.prototype.toString.call(e)) {
									var o = 0;
									for (i = [], o = 0; o < e.length; o += 1)
										'[object Array]' === Object.prototype.toString.call(e[o])
											? i.push([n.doBidiReorder(e[o][0]), e[o][1], e[o][2]])
											: i.push([n.doBidiReorder(e[o])]);
									t.text = i;
								} else t.text = n.doBidiReorder(e);
							},
						]);
					})(dt),
					(window.tmp = jt),
					(Et.prototype.parseHeader = function () {
						if (
							((this.fileSize = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.reserved = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.offset = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.headerSize = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.width = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.height = this.datav.getInt32(this.pos, !0)),
							(this.pos += 4),
							(this.planes = this.datav.getUint16(this.pos, !0)),
							(this.pos += 2),
							(this.bitPP = this.datav.getUint16(this.pos, !0)),
							(this.pos += 2),
							(this.compress = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.rawSize = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.hr = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.vr = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.colors = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							(this.importantColors = this.datav.getUint32(this.pos, !0)),
							(this.pos += 4),
							16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15),
							this.bitPP < 15)
						) {
							var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
							this.palette = new Array(t);
							for (var e = 0; e < t; e++) {
								var n = this.datav.getUint8(this.pos++, !0),
									r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									o = this.datav.getUint8(this.pos++, !0);
								this.palette[e] = {red: i, green: r, blue: n, quad: o};
							}
						}
						this.height < 0 && ((this.height *= -1), (this.bottom_up = !1));
					}),
					(Et.prototype.parseBGR = function () {
						this.pos = this.offset;
						try {
							var t = 'bit' + this.bitPP,
								e = this.width * this.height * 4;
							(this.data = new Uint8Array(e)), this[t]();
						} catch (t) {
							o.log('bit decode error:' + t);
						}
					}),
					(Et.prototype.bit1 = function () {
						var t = Math.ceil(this.width / 8),
							e = t % 4,
							n = 0 <= this.height ? this.height - 1 : -this.height;
						for (n = this.height - 1; 0 <= n; n--) {
							for (
								var r = this.bottom_up ? n : this.height - 1 - n, i = 0;
								i < t;
								i++
							)
								for (
									var o = this.datav.getUint8(this.pos++, !0),
										a = r * this.width * 4 + 8 * i * 4,
										s = 0;
									s < 8 && 8 * i + s < this.width;
									s++
								) {
									var h = this.palette[(o >> (7 - s)) & 1];
									(this.data[a + 4 * s] = h.blue),
										(this.data[a + 4 * s + 1] = h.green),
										(this.data[a + 4 * s + 2] = h.red),
										(this.data[a + 4 * s + 3] = 255);
								}
							0 != e && (this.pos += 4 - e);
						}
					}),
					(Et.prototype.bit4 = function () {
						for (
							var t = Math.ceil(this.width / 2), e = t % 4, n = this.height - 1;
							0 <= n;
							n--
						) {
							for (
								var r = this.bottom_up ? n : this.height - 1 - n, i = 0;
								i < t;
								i++
							) {
								var o = this.datav.getUint8(this.pos++, !0),
									a = r * this.width * 4 + 2 * i * 4,
									s = o >> 4,
									h = 15 & o,
									u = this.palette[s];
								if (
									((this.data[a] = u.blue),
									(this.data[a + 1] = u.green),
									(this.data[a + 2] = u.red),
									(this.data[a + 3] = 255),
									2 * i + 1 >= this.width)
								)
									break;
								(u = this.palette[h]),
									(this.data[a + 4] = u.blue),
									(this.data[a + 4 + 1] = u.green),
									(this.data[a + 4 + 2] = u.red),
									(this.data[a + 4 + 3] = 255);
							}
							0 != e && (this.pos += 4 - e);
						}
					}),
					(Et.prototype.bit8 = function () {
						for (var t = this.width % 4, e = this.height - 1; 0 <= e; e--) {
							for (
								var n = this.bottom_up ? e : this.height - 1 - e, r = 0;
								r < this.width;
								r++
							) {
								var i = this.datav.getUint8(this.pos++, !0),
									o = n * this.width * 4 + 4 * r;
								if (i < this.palette.length) {
									var a = this.palette[i];
									(this.data[o] = a.red),
										(this.data[o + 1] = a.green),
										(this.data[o + 2] = a.blue),
										(this.data[o + 3] = 255);
								} else
									(this.data[o] = 255),
										(this.data[o + 1] = 255),
										(this.data[o + 2] = 255),
										(this.data[o + 3] = 255);
							}
							0 != t && (this.pos += 4 - t);
						}
					}),
					(Et.prototype.bit15 = function () {
						for (
							var t = this.width % 3,
								e = parseInt('11111', 2),
								n = this.height - 1;
							0 <= n;
							n--
						) {
							for (
								var r = this.bottom_up ? n : this.height - 1 - n, i = 0;
								i < this.width;
								i++
							) {
								var o = this.datav.getUint16(this.pos, !0);
								this.pos += 2;
								var a = (((o & e) / e) * 255) | 0,
									s = ((((o >> 5) & e) / e) * 255) | 0,
									h = ((((o >> 10) & e) / e) * 255) | 0,
									u = o >> 15 ? 255 : 0,
									l = r * this.width * 4 + 4 * i;
								(this.data[l] = h),
									(this.data[l + 1] = s),
									(this.data[l + 2] = a),
									(this.data[l + 3] = u);
							}
							this.pos += t;
						}
					}),
					(Et.prototype.bit16 = function () {
						for (
							var t = this.width % 3,
								e = parseInt('11111', 2),
								n = parseInt('111111', 2),
								r = this.height - 1;
							0 <= r;
							r--
						) {
							for (
								var i = this.bottom_up ? r : this.height - 1 - r, o = 0;
								o < this.width;
								o++
							) {
								var a = this.datav.getUint16(this.pos, !0);
								this.pos += 2;
								var s = (((a & e) / e) * 255) | 0,
									h = ((((a >> 5) & n) / n) * 255) | 0,
									u = (((a >> 11) / e) * 255) | 0,
									l = i * this.width * 4 + 4 * o;
								(this.data[l] = u),
									(this.data[l + 1] = h),
									(this.data[l + 2] = s),
									(this.data[l + 3] = 255);
							}
							this.pos += t;
						}
					}),
					(Et.prototype.bit24 = function () {
						for (var t = this.height - 1; 0 <= t; t--) {
							for (
								var e = this.bottom_up ? t : this.height - 1 - t, n = 0;
								n < this.width;
								n++
							) {
								var r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									o = this.datav.getUint8(this.pos++, !0),
									a = e * this.width * 4 + 4 * n;
								(this.data[a] = o),
									(this.data[a + 1] = i),
									(this.data[a + 2] = r),
									(this.data[a + 3] = 255);
							}
							this.pos += this.width % 4;
						}
					}),
					(Et.prototype.bit32 = function () {
						for (var t = this.height - 1; 0 <= t; t--)
							for (
								var e = this.bottom_up ? t : this.height - 1 - t, n = 0;
								n < this.width;
								n++
							) {
								var r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									o = this.datav.getUint8(this.pos++, !0),
									a = this.datav.getUint8(this.pos++, !0),
									s = e * this.width * 4 + 4 * n;
								(this.data[s] = o),
									(this.data[s + 1] = i),
									(this.data[s + 2] = r),
									(this.data[s + 3] = a);
							}
					}),
					(Et.prototype.getData = function () {
						return this.data;
					}),
					(window.tmp = Et),
					(function (t) {
						var e = [
							0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8,
							8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10,
							10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11,
							11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12,
							12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
							12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13,
							13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
							13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14,
							14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
							14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
							14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
							14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15,
							15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
							15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
							15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
							15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20,
							20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23,
							23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
							24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
							25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
							26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
							26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
							27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
							27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
							28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
							28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
							28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
							28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
							29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
							29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
							29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
							29, 29, 29, 29, 29, 29,
						];
						function n() {
							var t = this;
							function e(t, e) {
								for (var n = 0; (n |= 1 & t), (t >>>= 1), (n <<= 1), 0 < --e; );
								return n >>> 1;
							}
							t.build_tree = function (n) {
								var r,
									i,
									o,
									a = t.dyn_tree,
									s = t.stat_desc.static_tree,
									h = t.stat_desc.elems,
									u = -1;
								for (n.heap_len = 0, n.heap_max = 573, r = 0; r < h; r++)
									0 !== a[2 * r]
										? ((n.heap[++n.heap_len] = u = r), (n.depth[r] = 0))
										: (a[2 * r + 1] = 0);
								for (; n.heap_len < 2; )
									(a[2 * (o = n.heap[++n.heap_len] = u < 2 ? ++u : 0)] = 1),
										(n.depth[o] = 0),
										n.opt_len--,
										s && (n.static_len -= s[2 * o + 1]);
								for (
									t.max_code = u, r = Math.floor(n.heap_len / 2);
									1 <= r;
									r--
								)
									n.pqdownheap(a, r);
								for (
									o = h;
									(r = n.heap[1]),
										(n.heap[1] = n.heap[n.heap_len--]),
										n.pqdownheap(a, 1),
										(i = n.heap[1]),
										(n.heap[--n.heap_max] = r),
										(n.heap[--n.heap_max] = i),
										(a[2 * o] = a[2 * r] + a[2 * i]),
										(n.depth[o] = Math.max(n.depth[r], n.depth[i]) + 1),
										(a[2 * r + 1] = a[2 * i + 1] = o),
										(n.heap[1] = o++),
										n.pqdownheap(a, 1),
										2 <= n.heap_len;

								);
								(n.heap[--n.heap_max] = n.heap[1]),
									(function (e) {
										var n,
											r,
											i,
											o,
											a,
											s,
											h = t.dyn_tree,
											u = t.stat_desc.static_tree,
											l = t.stat_desc.extra_bits,
											c = t.stat_desc.extra_base,
											f = t.stat_desc.max_length,
											p = 0;
										for (o = 0; o <= 15; o++) e.bl_count[o] = 0;
										for (
											h[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1;
											n < 573;
											n++
										)
											f < (o = h[2 * h[2 * (r = e.heap[n]) + 1] + 1] + 1) &&
												((o = f), p++),
												(h[2 * r + 1] = o),
												r > t.max_code ||
													(e.bl_count[o]++,
													(a = 0),
													c <= r && (a = l[r - c]),
													(s = h[2 * r]),
													(e.opt_len += s * (o + a)),
													u && (e.static_len += s * (u[2 * r + 1] + a)));
										if (0 !== p) {
											do {
												for (o = f - 1; 0 === e.bl_count[o]; ) o--;
												e.bl_count[o]--,
													(e.bl_count[o + 1] += 2),
													e.bl_count[f]--,
													(p -= 2);
											} while (0 < p);
											for (o = f; 0 !== o; o--)
												for (r = e.bl_count[o]; 0 !== r; )
													(i = e.heap[--n]) > t.max_code ||
														(h[2 * i + 1] != o &&
															((e.opt_len += (o - h[2 * i + 1]) * h[2 * i]),
															(h[2 * i + 1] = o)),
														r--);
										}
									})(n),
									(function (t, n, r) {
										var i,
											o,
											a,
											s = [],
											h = 0;
										for (i = 1; i <= 15; i++) s[i] = h = (h + r[i - 1]) << 1;
										for (o = 0; o <= n; o++)
											0 !== (a = t[2 * o + 1]) && (t[2 * o] = e(s[a]++, a));
									})(a, t.max_code, n.bl_count);
							};
						}
						function r(t, e, n, r, i) {
							(this.static_tree = t),
								(this.extra_bits = e),
								(this.extra_base = n),
								(this.elems = r),
								(this.max_length = i);
						}
						function i(t, e, n, r, i) {
							(this.good_length = t),
								(this.max_lazy = e),
								(this.nice_length = n),
								(this.max_chain = r),
								(this.func = i);
						}
						(n._length_code = [
							0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12,
							12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16,
							16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18,
							18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
							20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21,
							21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22,
							22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23,
							23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24,
							24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
							24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25,
							25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
							25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26,
							26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
							26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27,
							27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
							27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28,
						]),
							(n.base_length = [
								0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40,
								48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0,
							]),
							(n.base_dist = [
								0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256,
								384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288,
								16384, 24576,
							]),
							(n.d_code = function (t) {
								return t < 256 ? e[t] : e[256 + (t >>> 7)];
							}),
							(n.extra_lbits = [
								0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
								4, 4, 4, 5, 5, 5, 5, 0,
							]),
							(n.extra_dbits = [
								0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
								9, 10, 10, 11, 11, 12, 12, 13, 13,
							]),
							(n.extra_blbits = [
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
							]),
							(n.bl_order = [
								16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
								15,
							]),
							(r.static_ltree = [
								12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28,
								8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8,
								130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146,
								8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8,
								74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90,
								8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8,
								198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8,
								214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8,
								206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8,
								222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193,
								8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8,
								49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41,
								8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8,
								185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165,
								8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8,
								117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8,
								109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8,
								125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9,
								211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9,
								243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9,
								203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9,
								235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9,
								219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9,
								251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9,
								199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9,
								231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9,
								215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9,
								247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9,
								207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9,
								239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9,
								223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9,
								255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7,
								112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7,
								4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8,
								131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8,
							]),
							(r.static_dtree = [
								0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18,
								5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5,
								25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7,
								5, 23, 5,
							]),
							(r.static_l_desc = new r(
								r.static_ltree,
								n.extra_lbits,
								257,
								286,
								15
							)),
							(r.static_d_desc = new r(
								r.static_dtree,
								n.extra_dbits,
								0,
								30,
								15
							)),
							(r.static_bl_desc = new r(null, n.extra_blbits, 0, 19, 7));
						var o = [
								new i(0, 0, 0, 0, 0),
								new i(4, 4, 8, 4, 1),
								new i(4, 5, 16, 8, 1),
								new i(4, 6, 32, 32, 1),
								new i(4, 4, 16, 16, 2),
								new i(8, 16, 32, 32, 2),
								new i(8, 16, 128, 128, 2),
								new i(8, 32, 128, 256, 2),
								new i(32, 128, 258, 1024, 2),
								new i(32, 258, 258, 4096, 2),
							],
							a = [
								'need dictionary',
								'stream end',
								'',
								'',
								'stream error',
								'data error',
								'',
								'buffer error',
								'',
								'',
							];
						function s(t, e, n, r) {
							var i = t[2 * e],
								o = t[2 * n];
							return i < o || (i == o && r[e] <= r[n]);
						}
						function h() {
							var t,
								e,
								i,
								h,
								u,
								l,
								c,
								f,
								p,
								d,
								g,
								m,
								y,
								v,
								w,
								b,
								x,
								N,
								L,
								A,
								S,
								_,
								F,
								P,
								k,
								I,
								C,
								B,
								j,
								E,
								M,
								O,
								q,
								T,
								R,
								D,
								U,
								z,
								H,
								W,
								V,
								G = this,
								Y = new n(),
								J = new n(),
								X = new n();
							function K() {
								var t;
								for (t = 0; t < 286; t++) M[2 * t] = 0;
								for (t = 0; t < 30; t++) O[2 * t] = 0;
								for (t = 0; t < 19; t++) q[2 * t] = 0;
								(M[512] = 1), (G.opt_len = G.static_len = 0), (D = z = 0);
							}
							function Z(t, e) {
								var n,
									r,
									i = -1,
									o = t[1],
									a = 0,
									s = 7,
									h = 4;
								for (
									0 === o && ((s = 138), (h = 3)),
										t[2 * (e + 1) + 1] = 65535,
										n = 0;
									n <= e;
									n++
								)
									(r = o),
										(o = t[2 * (n + 1) + 1]),
										(++a < s && r == o) ||
											(a < h
												? (q[2 * r] += a)
												: 0 !== r
												? (r != i && q[2 * r]++, q[32]++)
												: a <= 10
												? q[34]++
												: q[36]++,
											(i = r),
											(h =
												(a = 0) === o
													? ((s = 138), 3)
													: r == o
													? ((s = 6), 3)
													: ((s = 7), 4)));
							}
							function Q(t) {
								G.pending_buf[G.pending++] = t;
							}
							function $(t) {
								Q(255 & t), Q((t >>> 8) & 255);
							}
							function tt(t, e) {
								var n,
									r = e;
								16 - r < V
									? ($((W |= ((n = t) << V) & 65535)),
									  (W = n >>> (16 - V)),
									  (V += r - 16))
									: ((W |= (t << V) & 65535), (V += r));
							}
							function et(t, e) {
								var n = 2 * t;
								tt(65535 & e[n], 65535 & e[n + 1]);
							}
							function nt(t, e) {
								var n,
									r,
									i = -1,
									o = t[1],
									a = 0,
									s = 7,
									h = 4;
								for (0 === o && ((s = 138), (h = 3)), n = 0; n <= e; n++)
									if (
										((r = o), (o = t[2 * (n + 1) + 1]), !(++a < s && r == o))
									) {
										if (a < h) for (; et(r, q), 0 != --a; );
										else
											0 !== r
												? (r != i && (et(r, q), a--), et(16, q), tt(a - 3, 2))
												: a <= 10
												? (et(17, q), tt(a - 3, 3))
												: (et(18, q), tt(a - 11, 7));
										(i = r),
											(h =
												(a = 0) === o
													? ((s = 138), 3)
													: r == o
													? ((s = 6), 3)
													: ((s = 7), 4));
									}
							}
							function rt() {
								16 == V
									? ($(W), (V = W = 0))
									: 8 <= V && (Q(255 & W), (W >>>= 8), (V -= 8));
							}
							function it(t, e) {
								var r, i, o;
								if (
									((G.pending_buf[U + 2 * D] = (t >>> 8) & 255),
									(G.pending_buf[U + 2 * D + 1] = 255 & t),
									(G.pending_buf[T + D] = 255 & e),
									D++,
									0 === t
										? M[2 * e]++
										: (z++,
										  t--,
										  M[2 * (n._length_code[e] + 256 + 1)]++,
										  O[2 * n.d_code(t)]++),
									0 == (8191 & D) && 2 < C)
								) {
									for (r = 8 * D, i = S - x, o = 0; o < 30; o++)
										r += O[2 * o] * (5 + n.extra_dbits[o]);
									if (
										((r >>>= 3), z < Math.floor(D / 2) && r < Math.floor(i / 2))
									)
										return !0;
								}
								return D == R - 1;
							}
							function ot(t, e) {
								var r,
									i,
									o,
									a,
									s = 0;
								if (0 !== D)
									for (
										;
										(r =
											((G.pending_buf[U + 2 * s] << 8) & 65280) |
											(255 & G.pending_buf[U + 2 * s + 1])),
											(i = 255 & G.pending_buf[T + s]),
											s++,
											0 === r
												? et(i, t)
												: (et((o = n._length_code[i]) + 256 + 1, t),
												  0 !== (a = n.extra_lbits[o]) &&
														tt((i -= n.base_length[o]), a),
												  et((o = n.d_code(--r)), e),
												  0 !== (a = n.extra_dbits[o]) &&
														tt((r -= n.base_dist[o]), a)),
											s < D;

									);
								et(256, t), (H = t[513]);
							}
							function at() {
								8 < V ? $(W) : 0 < V && Q(255 & W), (V = W = 0);
							}
							function st(t, e, n) {
								var r, i;
								tt(0 + (n ? 1 : 0), 3),
									(r = t),
									(i = e),
									at(),
									(H = 8),
									$(i),
									$(~i),
									G.pending_buf.set(f.subarray(r, r + i), G.pending),
									(G.pending += i);
							}
							function ht(e) {
								(function (t, e, i) {
									var o,
										a,
										s = 0;
									0 < C
										? (Y.build_tree(G),
										  J.build_tree(G),
										  (s = (function () {
												var t;
												for (
													Z(M, Y.max_code),
														Z(O, J.max_code),
														X.build_tree(G),
														t = 18;
													3 <= t && 0 === q[2 * n.bl_order[t] + 1];
													t--
												);
												return (G.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
										  })()),
										  (o = (G.opt_len + 3 + 7) >>> 3),
										  (a = (G.static_len + 3 + 7) >>> 3) <= o && (o = a))
										: (o = a = e + 5),
										e + 4 <= o && -1 != t
											? st(t, e, i)
											: a == o
											? (tt(2 + (i ? 1 : 0), 3),
											  ot(r.static_ltree, r.static_dtree))
											: (tt(4 + (i ? 1 : 0), 3),
											  (function (t, e, r) {
													var i;
													for (
														tt(t - 257, 5), tt(e - 1, 5), tt(r - 4, 4), i = 0;
														i < r;
														i++
													)
														tt(q[2 * n.bl_order[i] + 1], 3);
													nt(M, t - 1), nt(O, e - 1);
											  })(Y.max_code + 1, J.max_code + 1, s + 1),
											  ot(M, O)),
										K(),
										i && at();
								})(0 <= x ? x : -1, S - x, e),
									(x = S),
									t.flush_pending();
							}
							function ut() {
								var e, n, r, i;
								do {
									if (0 == (i = p - F - S) && 0 === S && 0 === F) i = u;
									else if (-1 == i) i--;
									else if (u + u - 262 <= S) {
										for (
											f.set(f.subarray(u, u + u), 0),
												_ -= u,
												S -= u,
												x -= u,
												r = e = y;
											(n = 65535 & g[--r]),
												(g[r] = u <= n ? n - u : 0),
												0 != --e;

										);
										for (
											r = e = u;
											(n = 65535 & d[--r]),
												(d[r] = u <= n ? n - u : 0),
												0 != --e;

										);
										i += u;
									}
									if (0 === t.avail_in) return;
									(e = t.read_buf(f, S + F, i)),
										3 <= (F += e) &&
											(m = (((m = 255 & f[S]) << b) ^ (255 & f[S + 1])) & w);
								} while (F < 262 && 0 !== t.avail_in);
							}
							function lt(t) {
								var e,
									n,
									r = k,
									i = S,
									o = P,
									a = u - 262 < S ? S - (u - 262) : 0,
									s = E,
									h = c,
									l = S + 258,
									p = f[i + o - 1],
									g = f[i + o];
								j <= P && (r >>= 2), F < s && (s = F);
								do {
									if (
										f[(e = t) + o] == g &&
										f[e + o - 1] == p &&
										f[e] == f[i] &&
										f[++e] == f[i + 1]
									) {
										(i += 2), e++;
										do {} while (
											f[++i] == f[++e] &&
											f[++i] == f[++e] &&
											f[++i] == f[++e] &&
											f[++i] == f[++e] &&
											f[++i] == f[++e] &&
											f[++i] == f[++e] &&
											f[++i] == f[++e] &&
											f[++i] == f[++e] &&
											i < l
										);
										if (((n = 258 - (l - i)), (i = l - 258), o < n)) {
											if (((_ = t), s <= (o = n))) break;
											(p = f[i + o - 1]), (g = f[i + o]);
										}
									}
								} while ((t = 65535 & d[t & h]) > a && 0 != --r);
								return o <= F ? o : F;
							}
							function ct(t) {
								return (
									(t.total_in = t.total_out = 0),
									(t.msg = null),
									(G.pending = 0),
									(G.pending_out = 0),
									(e = 113),
									(h = 0),
									(Y.dyn_tree = M),
									(Y.stat_desc = r.static_l_desc),
									(J.dyn_tree = O),
									(J.stat_desc = r.static_d_desc),
									(X.dyn_tree = q),
									(X.stat_desc = r.static_bl_desc),
									(V = W = 0),
									(H = 8),
									K(),
									(function () {
										var t;
										for (p = 2 * u, t = g[y - 1] = 0; t < y - 1; t++) g[t] = 0;
										(I = o[C].max_lazy),
											(j = o[C].good_length),
											(E = o[C].nice_length),
											(k = o[C].max_chain),
											(N = P = 2),
											(m = A = F = x = S = 0);
									})(),
									0
								);
							}
							(G.depth = []),
								(G.bl_count = []),
								(G.heap = []),
								(M = []),
								(O = []),
								(q = []),
								(G.pqdownheap = function (t, e) {
									for (
										var n = G.heap, r = n[e], i = e << 1;
										i <= G.heap_len &&
										(i < G.heap_len && s(t, n[i + 1], n[i], G.depth) && i++,
										!s(t, r, n[i], G.depth));

									)
										(n[e] = n[i]), (e = i), (i <<= 1);
									n[e] = r;
								}),
								(G.deflateInit = function (t, e, n, r, o, a) {
									return (
										r || (r = 8),
										o || (o = 8),
										a || (a = 0),
										(t.msg = null),
										-1 == e && (e = 6),
										o < 1 ||
										9 < o ||
										8 != r ||
										n < 9 ||
										15 < n ||
										e < 0 ||
										9 < e ||
										a < 0 ||
										2 < a
											? -2
											: ((t.dstate = G),
											  (c = (u = 1 << (l = n)) - 1),
											  (w = (y = 1 << (v = o + 7)) - 1),
											  (b = Math.floor((v + 3 - 1) / 3)),
											  (f = new Uint8Array(2 * u)),
											  (d = []),
											  (g = []),
											  (R = 1 << (o + 6)),
											  (G.pending_buf = new Uint8Array(4 * R)),
											  (i = 4 * R),
											  (U = Math.floor(R / 2)),
											  (T = 3 * R),
											  (C = e),
											  (B = a),
											  ct(t))
									);
								}),
								(G.deflateEnd = function () {
									return 42 != e && 113 != e && 666 != e
										? -2
										: ((G.pending_buf = null),
										  (f = d = g = null),
										  (G.dstate = null),
										  113 == e ? -3 : 0);
								}),
								(G.deflateParams = function (t, e, n) {
									var r = 0;
									return (
										-1 == e && (e = 6),
										e < 0 || 9 < e || n < 0 || 2 < n
											? -2
											: (o[C].func != o[e].func &&
													0 !== t.total_in &&
													(r = t.deflate(1)),
											  C != e &&
													((I = o[(C = e)].max_lazy),
													(j = o[C].good_length),
													(E = o[C].nice_length),
													(k = o[C].max_chain)),
											  (B = n),
											  r)
									);
								}),
								(G.deflateSetDictionary = function (t, n, r) {
									var i,
										o = r,
										a = 0;
									if (!n || 42 != e) return -2;
									if (o < 3) return 0;
									for (
										u - 262 < o && (a = r - (o = u - 262)),
											f.set(n.subarray(a, a + o), 0),
											x = S = o,
											m = (((m = 255 & f[0]) << b) ^ (255 & f[1])) & w,
											i = 0;
										i <= o - 3;
										i++
									)
										(m = ((m << b) ^ (255 & f[i + 2])) & w),
											(d[i & c] = g[m]),
											(g[m] = i);
									return 0;
								}),
								(G.deflate = function (n, s) {
									var p, v, k, j, E, M;
									if (4 < s || s < 0) return -2;
									if (
										!n.next_out ||
										(!n.next_in && 0 !== n.avail_in) ||
										(666 == e && 4 != s)
									)
										return (n.msg = a[4]), -2;
									if (0 === n.avail_out) return (n.msg = a[7]), -5;
									if (
										((t = n),
										(j = h),
										(h = s),
										42 == e &&
											((v = (8 + ((l - 8) << 4)) << 8),
											3 < (k = ((C - 1) & 255) >> 1) && (k = 3),
											(v |= k << 6),
											0 !== S && (v |= 32),
											(e = 113),
											Q(((M = v += 31 - (v % 31)) >> 8) & 255),
											Q(255 & M)),
										0 !== G.pending)
									) {
										if ((t.flush_pending(), 0 === t.avail_out))
											return (h = -1), 0;
									} else if (0 === t.avail_in && s <= j && 4 != s)
										return (t.msg = a[7]), -5;
									if (666 == e && 0 !== t.avail_in) return (n.msg = a[7]), -5;
									if (0 !== t.avail_in || 0 !== F || (0 != s && 666 != e)) {
										switch (((E = -1), o[C].func)) {
											case 0:
												E = (function (e) {
													var n,
														r = 65535;
													for (i - 5 < r && (r = i - 5); ; ) {
														if (F <= 1) {
															if ((ut(), 0 === F && 0 == e)) return 0;
															if (0 === F) break;
														}
														if (
															((S += F),
															(n = x + r),
															((F = 0) === S || n <= S) &&
																((F = S - n),
																(S = n),
																ht(!1),
																0 === t.avail_out))
														)
															return 0;
														if (u - 262 <= S - x && (ht(!1), 0 === t.avail_out))
															return 0;
													}
													return (
														ht(4 == e),
														0 === t.avail_out
															? 4 == e
																? 2
																: 0
															: 4 == e
															? 3
															: 1
													);
												})(s);
												break;
											case 1:
												E = (function (e) {
													for (var n, r = 0; ; ) {
														if (F < 262) {
															if ((ut(), F < 262 && 0 == e)) return 0;
															if (0 === F) break;
														}
														if (
															(3 <= F &&
																((m = ((m << b) ^ (255 & f[S + 2])) & w),
																(r = 65535 & g[m]),
																(d[S & c] = g[m]),
																(g[m] = S)),
															0 !== r &&
																((S - r) & 65535) <= u - 262 &&
																2 != B &&
																(N = lt(r)),
															3 <= N)
														)
															if (
																((n = it(S - _, N - 3)),
																(F -= N),
																N <= I && 3 <= F)
															) {
																for (
																	N--;
																	(m = ((m << b) ^ (255 & f[2 + ++S])) & w),
																		(r = 65535 & g[m]),
																		(d[S & c] = g[m]),
																		(g[m] = S),
																		0 != --N;

																);
																S++;
															} else
																(S += N),
																	(N = 0),
																	(m =
																		(((m = 255 & f[S]) << b) ^
																			(255 & f[S + 1])) &
																		w);
														else (n = it(0, 255 & f[S])), F--, S++;
														if (n && (ht(!1), 0 === t.avail_out)) return 0;
													}
													return (
														ht(4 == e),
														0 === t.avail_out
															? 4 == e
																? 2
																: 0
															: 4 == e
															? 3
															: 1
													);
												})(s);
												break;
											case 2:
												E = (function (e) {
													for (var n, r, i = 0; ; ) {
														if (F < 262) {
															if ((ut(), F < 262 && 0 == e)) return 0;
															if (0 === F) break;
														}
														if (
															(3 <= F &&
																((m = ((m << b) ^ (255 & f[S + 2])) & w),
																(i = 65535 & g[m]),
																(d[S & c] = g[m]),
																(g[m] = S)),
															(P = N),
															(L = _),
															(N = 2),
															0 !== i &&
																P < I &&
																((S - i) & 65535) <= u - 262 &&
																(2 != B && (N = lt(i)),
																N <= 5 &&
																	(1 == B || (3 == N && 4096 < S - _)) &&
																	(N = 2)),
															3 <= P && N <= P)
														) {
															for (
																r = S + F - 3,
																	n = it(S - 1 - L, P - 3),
																	F -= P - 1,
																	P -= 2;
																++S <= r &&
																	((m = ((m << b) ^ (255 & f[S + 2])) & w),
																	(i = 65535 & g[m]),
																	(d[S & c] = g[m]),
																	(g[m] = S)),
																	0 != --P;

															);
															if (
																((A = 0),
																(N = 2),
																S++,
																n && (ht(!1), 0 === t.avail_out))
															)
																return 0;
														} else if (0 !== A) {
															if (
																((n = it(0, 255 & f[S - 1])) && ht(!1),
																S++,
																F--,
																0 === t.avail_out)
															)
																return 0;
														} else (A = 1), S++, F--;
													}
													return (
														0 !== A && ((n = it(0, 255 & f[S - 1])), (A = 0)),
														ht(4 == e),
														0 === t.avail_out
															? 4 == e
																? 2
																: 0
															: 4 == e
															? 3
															: 1
													);
												})(s);
										}
										if (((2 != E && 3 != E) || (e = 666), 0 == E || 2 == E))
											return 0 === t.avail_out && (h = -1), 0;
										if (1 == E) {
											if (1 == s)
												tt(2, 3),
													et(256, r.static_ltree),
													rt(),
													1 + H + 10 - V < 9 &&
														(tt(2, 3), et(256, r.static_ltree), rt()),
													(H = 7);
											else if ((st(0, 0, !1), 3 == s))
												for (p = 0; p < y; p++) g[p] = 0;
											if ((t.flush_pending(), 0 === t.avail_out))
												return (h = -1), 0;
										}
									}
									return 4 != s ? 0 : 1;
								});
						}
						function u() {
							(this.next_in_index = 0),
								(this.next_out_index = 0),
								(this.avail_in = 0),
								(this.total_in = 0),
								(this.avail_out = 0),
								(this.total_out = 0);
						}
						u.prototype = {
							deflateInit: function (t, e) {
								return (
									(this.dstate = new h()),
									e || (e = 15),
									this.dstate.deflateInit(this, t, e)
								);
							},
							deflate: function (t) {
								return this.dstate ? this.dstate.deflate(this, t) : -2;
							},
							deflateEnd: function () {
								if (!this.dstate) return -2;
								var t = this.dstate.deflateEnd();
								return (this.dstate = null), t;
							},
							deflateParams: function (t, e) {
								return this.dstate ? this.dstate.deflateParams(this, t, e) : -2;
							},
							deflateSetDictionary: function (t, e) {
								return this.dstate
									? this.dstate.deflateSetDictionary(this, t, e)
									: -2;
							},
							read_buf: function (t, e, n) {
								var r = this.avail_in;
								return (
									n < r && (r = n),
									0 === r
										? 0
										: ((this.avail_in -= r),
										  t.set(
												this.next_in.subarray(
													this.next_in_index,
													this.next_in_index + r
												),
												e
										  ),
										  (this.next_in_index += r),
										  (this.total_in += r),
										  r)
								);
							},
							flush_pending: function () {
								var t = this,
									e = t.dstate.pending;
								e > t.avail_out && (e = t.avail_out),
									0 !== e &&
										(t.next_out.set(
											t.dstate.pending_buf.subarray(
												t.dstate.pending_out,
												t.dstate.pending_out + e
											),
											t.next_out_index
										),
										(t.next_out_index += e),
										(t.dstate.pending_out += e),
										(t.total_out += e),
										(t.avail_out -= e),
										(t.dstate.pending -= e),
										0 === t.dstate.pending && (t.dstate.pending_out = 0));
							},
						};
						var l = t.zip || t;
						l.Deflater = l._jzlib_Deflater = function (t) {
							var e = new u(),
								n = new Uint8Array(512),
								r = t ? t.level : -1;
							void 0 === r && (r = -1),
								e.deflateInit(r),
								(e.next_out = n),
								(this.append = function (t, r) {
									var i,
										o = [],
										a = 0,
										s = 0,
										h = 0;
									if (t.length) {
										(e.next_in_index = 0),
											(e.next_in = t),
											(e.avail_in = t.length);
										do {
											if (
												((e.next_out_index = 0),
												(e.avail_out = 512),
												0 != e.deflate(0))
											)
												throw new Error('deflating: ' + e.msg);
											e.next_out_index &&
												(512 == e.next_out_index
													? o.push(new Uint8Array(n))
													: o.push(
															new Uint8Array(n.subarray(0, e.next_out_index))
													  )),
												(h += e.next_out_index),
												r &&
													0 < e.next_in_index &&
													e.next_in_index != a &&
													(r(e.next_in_index), (a = e.next_in_index));
										} while (0 < e.avail_in || 0 === e.avail_out);
										return (
											(i = new Uint8Array(h)),
											o.forEach(function (t) {
												i.set(t, s), (s += t.length);
											}),
											i
										);
									}
								}),
								(this.flush = function () {
									var t,
										r,
										i = [],
										o = 0,
										a = 0;
									do {
										if (
											((e.next_out_index = 0),
											(e.avail_out = 512),
											1 != (t = e.deflate(4)) && 0 != t)
										)
											throw new Error('deflating: ' + e.msg);
										0 < 512 - e.avail_out &&
											i.push(new Uint8Array(n.subarray(0, e.next_out_index))),
											(a += e.next_out_index);
									} while (0 < e.avail_in || 0 === e.avail_out);
									return (
										e.deflateEnd(),
										(r = new Uint8Array(a)),
										i.forEach(function (t) {
											r.set(t, o), (o += t.length);
										}),
										r
									);
								});
						};
					})(
						('undefined' != typeof self && self) ||
							('undefined' != typeof window && window) ||
							(void 0 !== n.g && n.g) ||
							Function('return typeof this === "object" && this.content')() ||
							Function('return this')()
					),
					((
						('undefined' != typeof self && self) ||
						('undefined' != typeof window && window) ||
						(void 0 !== n.g && n.g) ||
						Function('return typeof this === "object" && this.content')() ||
						Function('return this')()
					).RGBColor = function (t) {
						var e;
						(t = t || ''),
							(this.ok = !1),
							'#' == t.charAt(0) && (t = t.substr(1, 6)),
							(t = (t = t.replace(/ /g, '')).toLowerCase());
						var n = {
							aliceblue: 'f0f8ff',
							antiquewhite: 'faebd7',
							aqua: '00ffff',
							aquamarine: '7fffd4',
							azure: 'f0ffff',
							beige: 'f5f5dc',
							bisque: 'ffe4c4',
							black: '000000',
							blanchedalmond: 'ffebcd',
							blue: '0000ff',
							blueviolet: '8a2be2',
							brown: 'a52a2a',
							burlywood: 'deb887',
							cadetblue: '5f9ea0',
							chartreuse: '7fff00',
							chocolate: 'd2691e',
							coral: 'ff7f50',
							cornflowerblue: '6495ed',
							cornsilk: 'fff8dc',
							crimson: 'dc143c',
							cyan: '00ffff',
							darkblue: '00008b',
							darkcyan: '008b8b',
							darkgoldenrod: 'b8860b',
							darkgray: 'a9a9a9',
							darkgreen: '006400',
							darkkhaki: 'bdb76b',
							darkmagenta: '8b008b',
							darkolivegreen: '556b2f',
							darkorange: 'ff8c00',
							darkorchid: '9932cc',
							darkred: '8b0000',
							darksalmon: 'e9967a',
							darkseagreen: '8fbc8f',
							darkslateblue: '483d8b',
							darkslategray: '2f4f4f',
							darkturquoise: '00ced1',
							darkviolet: '9400d3',
							deeppink: 'ff1493',
							deepskyblue: '00bfff',
							dimgray: '696969',
							dodgerblue: '1e90ff',
							feldspar: 'd19275',
							firebrick: 'b22222',
							floralwhite: 'fffaf0',
							forestgreen: '228b22',
							fuchsia: 'ff00ff',
							gainsboro: 'dcdcdc',
							ghostwhite: 'f8f8ff',
							gold: 'ffd700',
							goldenrod: 'daa520',
							gray: '808080',
							green: '008000',
							greenyellow: 'adff2f',
							honeydew: 'f0fff0',
							hotpink: 'ff69b4',
							indianred: 'cd5c5c',
							indigo: '4b0082',
							ivory: 'fffff0',
							khaki: 'f0e68c',
							lavender: 'e6e6fa',
							lavenderblush: 'fff0f5',
							lawngreen: '7cfc00',
							lemonchiffon: 'fffacd',
							lightblue: 'add8e6',
							lightcoral: 'f08080',
							lightcyan: 'e0ffff',
							lightgoldenrodyellow: 'fafad2',
							lightgrey: 'd3d3d3',
							lightgreen: '90ee90',
							lightpink: 'ffb6c1',
							lightsalmon: 'ffa07a',
							lightseagreen: '20b2aa',
							lightskyblue: '87cefa',
							lightslateblue: '8470ff',
							lightslategray: '778899',
							lightsteelblue: 'b0c4de',
							lightyellow: 'ffffe0',
							lime: '00ff00',
							limegreen: '32cd32',
							linen: 'faf0e6',
							magenta: 'ff00ff',
							maroon: '800000',
							mediumaquamarine: '66cdaa',
							mediumblue: '0000cd',
							mediumorchid: 'ba55d3',
							mediumpurple: '9370d8',
							mediumseagreen: '3cb371',
							mediumslateblue: '7b68ee',
							mediumspringgreen: '00fa9a',
							mediumturquoise: '48d1cc',
							mediumvioletred: 'c71585',
							midnightblue: '191970',
							mintcream: 'f5fffa',
							mistyrose: 'ffe4e1',
							moccasin: 'ffe4b5',
							navajowhite: 'ffdead',
							navy: '000080',
							oldlace: 'fdf5e6',
							olive: '808000',
							olivedrab: '6b8e23',
							orange: 'ffa500',
							orangered: 'ff4500',
							orchid: 'da70d6',
							palegoldenrod: 'eee8aa',
							palegreen: '98fb98',
							paleturquoise: 'afeeee',
							palevioletred: 'd87093',
							papayawhip: 'ffefd5',
							peachpuff: 'ffdab9',
							peru: 'cd853f',
							pink: 'ffc0cb',
							plum: 'dda0dd',
							powderblue: 'b0e0e6',
							purple: '800080',
							red: 'ff0000',
							rosybrown: 'bc8f8f',
							royalblue: '4169e1',
							saddlebrown: '8b4513',
							salmon: 'fa8072',
							sandybrown: 'f4a460',
							seagreen: '2e8b57',
							seashell: 'fff5ee',
							sienna: 'a0522d',
							silver: 'c0c0c0',
							skyblue: '87ceeb',
							slateblue: '6a5acd',
							slategray: '708090',
							snow: 'fffafa',
							springgreen: '00ff7f',
							steelblue: '4682b4',
							tan: 'd2b48c',
							teal: '008080',
							thistle: 'd8bfd8',
							tomato: 'ff6347',
							turquoise: '40e0d0',
							violet: 'ee82ee',
							violetred: 'd02090',
							wheat: 'f5deb3',
							white: 'ffffff',
							whitesmoke: 'f5f5f5',
							yellow: 'ffff00',
							yellowgreen: '9acd32',
						};
						for (var r in n) t == r && (t = n[r]);
						for (
							var i = [
									{
										re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
										example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
										process: function (t) {
											return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
										},
									},
									{
										re: /^(\w{2})(\w{2})(\w{2})$/,
										example: ['#00ff00', '336699'],
										process: function (t) {
											return [
												parseInt(t[1], 16),
												parseInt(t[2], 16),
												parseInt(t[3], 16),
											];
										},
									},
									{
										re: /^(\w{1})(\w{1})(\w{1})$/,
										example: ['#fb0', 'f0f'],
										process: function (t) {
											return [
												parseInt(t[1] + t[1], 16),
												parseInt(t[2] + t[2], 16),
												parseInt(t[3] + t[3], 16),
											];
										},
									},
								],
								o = 0;
							o < i.length;
							o++
						) {
							var a = i[o].re,
								s = i[o].process,
								h = a.exec(t);
							h &&
								((e = s(h)),
								(this.r = e[0]),
								(this.g = e[1]),
								(this.b = e[2]),
								(this.ok = !0));
						}
						(this.r =
							this.r < 0 || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r),
							(this.g =
								this.g < 0 || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g),
							(this.b =
								this.b < 0 || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b),
							(this.toRGB = function () {
								return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
							}),
							(this.toHex = function () {
								var t = this.r.toString(16),
									e = this.g.toString(16),
									n = this.b.toString(16);
								return (
									1 == t.length && (t = '0' + t),
									1 == e.length && (e = '0' + e),
									1 == n.length && (n = '0' + n),
									'#' + t + e + n
								);
							});
					}),
					(function (t) {
						var e = '+'.charCodeAt(0),
							n = '/'.charCodeAt(0),
							r = '0'.charCodeAt(0),
							i = 'a'.charCodeAt(0),
							o = 'A'.charCodeAt(0),
							a = '-'.charCodeAt(0),
							s = '_'.charCodeAt(0),
							h = function (t) {
								var h = t.charCodeAt(0);
								return h === e || h === a
									? 62
									: h === n || h === s
									? 63
									: h < r
									? -1
									: h < r + 10
									? h - r + 26 + 26
									: h < o + 26
									? h - o
									: h < i + 26
									? h - i + 26
									: void 0;
							};
						t.API.TTFFont = (function () {
							function t(t, e, n) {
								var r;
								if (
									((this.rawData = t),
									(r = this.contents = new l(t)),
									(this.contents.pos = 4),
									'ttcf' === r.readString(4))
								) {
									if (!e)
										throw new Error('Must specify a font name for TTC files.');
									throw new Error('Font ' + e + ' not found in TTC file.');
								}
								(r.pos = 0),
									this.parse(),
									(this.subset = new k(this)),
									this.registerTTF();
							}
							return (
								(t.open = function (e, n, r, i) {
									if ('string' != typeof r)
										throw new Error(
											'Invalid argument supplied in TTFFont.open'
										);
									return new t(
										(function (t) {
											var e, n, r, i, o, a;
											if (0 < t.length % 4)
												throw new Error(
													'Invalid string. Length must be a multiple of 4'
												);
											var s = t.length;
											(o =
												'=' === t.charAt(s - 2)
													? 2
													: '=' === t.charAt(s - 1)
													? 1
													: 0),
												(a = new Uint8Array((3 * t.length) / 4 - o)),
												(r = 0 < o ? t.length - 4 : t.length);
											var u = 0;
											function l(t) {
												a[u++] = t;
											}
											for (n = e = 0; e < r; e += 4, n += 3)
												l(
													(16711680 &
														(i =
															(h(t.charAt(e)) << 18) |
															(h(t.charAt(e + 1)) << 12) |
															(h(t.charAt(e + 2)) << 6) |
															h(t.charAt(e + 3)))) >>
														16
												),
													l((65280 & i) >> 8),
													l(255 & i);
											return (
												2 === o
													? l(
															255 &
																(i =
																	(h(t.charAt(e)) << 2) |
																	(h(t.charAt(e + 1)) >> 4))
													  )
													: 1 === o &&
													  (l(
															((i =
																(h(t.charAt(e)) << 10) |
																(h(t.charAt(e + 1)) << 4) |
																(h(t.charAt(e + 2)) >> 2)) >>
																8) &
																255
													  ),
													  l(255 & i)),
												a
											);
										})(r),
										n,
										i
									);
								}),
								(t.prototype.parse = function () {
									return (
										(this.directory = new c(this.contents)),
										(this.head = new d(this)),
										(this.name = new x(this)),
										(this.cmap = new m(this)),
										(this.toUnicode = new Map()),
										(this.hhea = new y(this)),
										(this.maxp = new N(this)),
										(this.hmtx = new L(this)),
										(this.post = new w(this)),
										(this.os2 = new v(this)),
										(this.loca = new P(this)),
										(this.glyf = new S(this)),
										(this.ascender =
											(this.os2.exists && this.os2.ascender) ||
											this.hhea.ascender),
										(this.decender =
											(this.os2.exists && this.os2.decender) ||
											this.hhea.decender),
										(this.lineGap =
											(this.os2.exists && this.os2.lineGap) ||
											this.hhea.lineGap),
										(this.bbox = [
											this.head.xMin,
											this.head.yMin,
											this.head.xMax,
											this.head.yMax,
										])
									);
								}),
								(t.prototype.registerTTF = function () {
									var t, e, n, r, i;
									if (
										((this.scaleFactor = 1e3 / this.head.unitsPerEm),
										(this.bbox = function () {
											var e, n, r, i;
											for (
												i = [], e = 0, n = (r = this.bbox).length;
												e < n;
												e++
											)
												(t = r[e]), i.push(Math.round(t * this.scaleFactor));
											return i;
										}.call(this)),
										(this.stemV = 0),
										this.post.exists
											? ((n = 255 & (r = this.post.italic_angle)),
											  !0 & (e = r >> 16) && (e = -(1 + (65535 ^ e))),
											  (this.italicAngle = +(e + '.' + n)))
											: (this.italicAngle = 0),
										(this.ascender = Math.round(
											this.ascender * this.scaleFactor
										)),
										(this.decender = Math.round(
											this.decender * this.scaleFactor
										)),
										(this.lineGap = Math.round(
											this.lineGap * this.scaleFactor
										)),
										(this.capHeight =
											(this.os2.exists && this.os2.capHeight) || this.ascender),
										(this.xHeight = (this.os2.exists && this.os2.xHeight) || 0),
										(this.familyClass =
											((this.os2.exists && this.os2.familyClass) || 0) >> 8),
										(this.isSerif =
											1 === (i = this.familyClass) ||
											2 === i ||
											3 === i ||
											4 === i ||
											5 === i ||
											7 === i),
										(this.isScript = 10 === this.familyClass),
										(this.flags = 0),
										this.post.isFixedPitch && (this.flags |= 1),
										this.isSerif && (this.flags |= 2),
										this.isScript && (this.flags |= 8),
										0 !== this.italicAngle && (this.flags |= 64),
										(this.flags |= 32),
										!this.cmap.unicode)
									)
										throw new Error('No unicode cmap for font');
								}),
								(t.prototype.characterToGlyph = function (t) {
									var e;
									return (
										(null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) ||
										0
									);
								}),
								(t.prototype.widthOfGlyph = function (t) {
									var e;
									return (
										(e = 1e3 / this.head.unitsPerEm),
										this.hmtx.forGlyph(t).advance * e
									);
								}),
								(t.prototype.widthOfString = function (t, e, n) {
									var r, i, o, a, s;
									for (
										i = a = o = 0, s = (t = '' + t).length;
										0 <= s ? a < s : s < a;
										i = 0 <= s ? ++a : --a
									)
										(r = t.charCodeAt(i)),
											(o +=
												this.widthOfGlyph(this.characterToGlyph(r)) +
													n * (1e3 / e) || 0);
									return o * (e / 1e3);
								}),
								(t.prototype.lineHeight = function (t, e) {
									var n;
									return (
										null == e && (e = !1),
										(n = e ? this.lineGap : 0),
										((this.ascender + n - this.decender) / 1e3) * t
									);
								}),
								t
							);
						})();
						var u,
							l = (function () {
								function t(t) {
									(this.data = null != t ? t : []),
										(this.pos = 0),
										(this.length = this.data.length);
								}
								return (
									(t.prototype.readByte = function () {
										return this.data[this.pos++];
									}),
									(t.prototype.writeByte = function (t) {
										return (this.data[this.pos++] = t);
									}),
									(t.prototype.readUInt32 = function () {
										return (
											16777216 * this.readByte() +
											(this.readByte() << 16) +
											(this.readByte() << 8) +
											this.readByte()
										);
									}),
									(t.prototype.writeUInt32 = function (t) {
										return (
											this.writeByte((t >>> 24) & 255),
											this.writeByte((t >> 16) & 255),
											this.writeByte((t >> 8) & 255),
											this.writeByte(255 & t)
										);
									}),
									(t.prototype.readInt32 = function () {
										var t;
										return 2147483648 <= (t = this.readUInt32())
											? t - 4294967296
											: t;
									}),
									(t.prototype.writeInt32 = function (t) {
										return t < 0 && (t += 4294967296), this.writeUInt32(t);
									}),
									(t.prototype.readUInt16 = function () {
										return (this.readByte() << 8) | this.readByte();
									}),
									(t.prototype.writeUInt16 = function (t) {
										return (
											this.writeByte((t >> 8) & 255), this.writeByte(255 & t)
										);
									}),
									(t.prototype.readInt16 = function () {
										var t;
										return 32768 <= (t = this.readUInt16()) ? t - 65536 : t;
									}),
									(t.prototype.writeInt16 = function (t) {
										return t < 0 && (t += 65536), this.writeUInt16(t);
									}),
									(t.prototype.readString = function (t) {
										var e, n, r;
										for (
											n = [], e = r = 0;
											0 <= t ? r < t : t < r;
											e = 0 <= t ? ++r : --r
										)
											n[e] = String.fromCharCode(this.readByte());
										return n.join('');
									}),
									(t.prototype.writeString = function (t) {
										var e, n, r, i;
										for (
											i = [], e = n = 0, r = t.length;
											0 <= r ? n < r : r < n;
											e = 0 <= r ? ++n : --n
										)
											i.push(this.writeByte(t.charCodeAt(e)));
										return i;
									}),
									(t.prototype.readShort = function () {
										return this.readInt16();
									}),
									(t.prototype.writeShort = function (t) {
										return this.writeInt16(t);
									}),
									(t.prototype.readLongLong = function () {
										var t, e, n, r, i, o, a, s;
										return (
											(t = this.readByte()),
											(e = this.readByte()),
											(n = this.readByte()),
											(r = this.readByte()),
											(i = this.readByte()),
											(o = this.readByte()),
											(a = this.readByte()),
											(s = this.readByte()),
											128 & t
												? -1 *
												  (72057594037927940 * (255 ^ t) +
														281474976710656 * (255 ^ e) +
														1099511627776 * (255 ^ n) +
														4294967296 * (255 ^ r) +
														16777216 * (255 ^ i) +
														65536 * (255 ^ o) +
														256 * (255 ^ a) +
														(255 ^ s) +
														1)
												: 72057594037927940 * t +
												  281474976710656 * e +
												  1099511627776 * n +
												  4294967296 * r +
												  16777216 * i +
												  65536 * o +
												  256 * a +
												  s
										);
									}),
									(t.prototype.writeLongLong = function (t) {
										var e, n;
										return (
											(e = Math.floor(t / 4294967296)),
											(n = 4294967295 & t),
											this.writeByte((e >> 24) & 255),
											this.writeByte((e >> 16) & 255),
											this.writeByte((e >> 8) & 255),
											this.writeByte(255 & e),
											this.writeByte((n >> 24) & 255),
											this.writeByte((n >> 16) & 255),
											this.writeByte((n >> 8) & 255),
											this.writeByte(255 & n)
										);
									}),
									(t.prototype.readInt = function () {
										return this.readInt32();
									}),
									(t.prototype.writeInt = function (t) {
										return this.writeInt32(t);
									}),
									(t.prototype.read = function (t) {
										var e, n;
										for (
											e = [], n = 0;
											0 <= t ? n < t : t < n;
											0 <= t ? ++n : --n
										)
											e.push(this.readByte());
										return e;
									}),
									(t.prototype.write = function (t) {
										var e, n, r, i;
										for (i = [], n = 0, r = t.length; n < r; n++)
											(e = t[n]), i.push(this.writeByte(e));
										return i;
									}),
									t
								);
							})(),
							c = (function () {
								var t;
								function e(t) {
									var e, n, r;
									for (
										this.scalarType = t.readInt(),
											this.tableCount = t.readShort(),
											this.searchRange = t.readShort(),
											this.entrySelector = t.readShort(),
											this.rangeShift = t.readShort(),
											this.tables = {},
											n = 0,
											r = this.tableCount;
										0 <= r ? n < r : r < n;
										0 <= r ? ++n : --n
									)
										(e = {
											tag: t.readString(4),
											checksum: t.readInt(),
											offset: t.readInt(),
											length: t.readInt(),
										}),
											(this.tables[e.tag] = e);
								}
								return (
									(e.prototype.encode = function (e) {
										var n, r, i, o, a, s, h, u, c, f, p, d, g;
										for (g in ((p = Object.keys(e).length),
										(s = Math.log(2)),
										(c = 16 * Math.floor(Math.log(p) / s)),
										(o = Math.floor(c / s)),
										(u = 16 * p - c),
										(r = new l()).writeInt(this.scalarType),
										r.writeShort(p),
										r.writeShort(c),
										r.writeShort(o),
										r.writeShort(u),
										(i = 16 * p),
										(h = r.pos + i),
										(a = null),
										(d = []),
										e))
											for (
												f = e[g],
													r.writeString(g),
													r.writeInt(t(f)),
													r.writeInt(h),
													r.writeInt(f.length),
													d = d.concat(f),
													'head' === g && (a = h),
													h += f.length;
												h % 4;

											)
												d.push(0), h++;
										return (
											r.write(d),
											(n = 2981146554 - t(r.data)),
											(r.pos = a + 8),
											r.writeUInt32(n),
											r.data
										);
									}),
									(t = function (t) {
										var e, n, r, i;
										for (t = A.call(t); t.length % 4; ) t.push(0);
										for (n = new l(t), r = e = 0, i = t.length; r < i; r += 4)
											e += n.readUInt32();
										return 4294967295 & e;
									}),
									e
								);
							})(),
							f = {}.hasOwnProperty,
							p = function (t, e) {
								for (var n in e) f.call(e, n) && (t[n] = e[n]);
								function r() {
									this.constructor = t;
								}
								return (
									(r.prototype = e.prototype),
									(t.prototype = new r()),
									(t.__super__ = e.prototype),
									t
								);
							};
						u = (function () {
							function t(t) {
								var e;
								(this.file = t),
									(e = this.file.directory.tables[this.tag]),
									(this.exists = !!e),
									e &&
										((this.offset = e.offset),
										(this.length = e.length),
										this.parse(this.file.contents));
							}
							return (
								(t.prototype.parse = function () {}),
								(t.prototype.encode = function () {}),
								(t.prototype.raw = function () {
									return this.exists
										? ((this.file.contents.pos = this.offset),
										  this.file.contents.read(this.length))
										: null;
								}),
								t
							);
						})();
						var d = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'head'),
									(e.prototype.parse = function (t) {
										return (
											(t.pos = this.offset),
											(this.version = t.readInt()),
											(this.revision = t.readInt()),
											(this.checkSumAdjustment = t.readInt()),
											(this.magicNumber = t.readInt()),
											(this.flags = t.readShort()),
											(this.unitsPerEm = t.readShort()),
											(this.created = t.readLongLong()),
											(this.modified = t.readLongLong()),
											(this.xMin = t.readShort()),
											(this.yMin = t.readShort()),
											(this.xMax = t.readShort()),
											(this.yMax = t.readShort()),
											(this.macStyle = t.readShort()),
											(this.lowestRecPPEM = t.readShort()),
											(this.fontDirectionHint = t.readShort()),
											(this.indexToLocFormat = t.readShort()),
											(this.glyphDataFormat = t.readShort())
										);
									}),
									(e.prototype.encode = function (t) {
										var e;
										return (
											(e = new l()).writeInt(this.version),
											e.writeInt(this.revision),
											e.writeInt(this.checkSumAdjustment),
											e.writeInt(this.magicNumber),
											e.writeShort(this.flags),
											e.writeShort(this.unitsPerEm),
											e.writeLongLong(this.created),
											e.writeLongLong(this.modified),
											e.writeShort(this.xMin),
											e.writeShort(this.yMin),
											e.writeShort(this.xMax),
											e.writeShort(this.yMax),
											e.writeShort(this.macStyle),
											e.writeShort(this.lowestRecPPEM),
											e.writeShort(this.fontDirectionHint),
											e.writeShort(t),
											e.writeShort(this.glyphDataFormat),
											e.data
										);
									}),
									e
								);
							})(),
							g = (function () {
								function t(t, e) {
									var n, r, i, o, a, s, h, u, l, c, f, p, d, g, m, y, v, w;
									switch (
										((this.platformID = t.readUInt16()),
										(this.encodingID = t.readShort()),
										(this.offset = e + t.readInt()),
										(l = t.pos),
										(t.pos = this.offset),
										(this.format = t.readUInt16()),
										(this.length = t.readUInt16()),
										(this.language = t.readUInt16()),
										(this.isUnicode =
											(3 === this.platformID &&
												1 === this.encodingID &&
												4 === this.format) ||
											(0 === this.platformID && 4 === this.format)),
										(this.codeMap = {}),
										this.format)
									) {
										case 0:
											for (s = m = 0; m < 256; s = ++m)
												this.codeMap[s] = t.readByte();
											break;
										case 4:
											for (
												f = t.readUInt16(),
													c = f / 2,
													t.pos += 6,
													i = (function () {
														var e, n;
														for (
															n = [], s = e = 0;
															0 <= c ? e < c : c < e;
															s = 0 <= c ? ++e : --e
														)
															n.push(t.readUInt16());
														return n;
													})(),
													t.pos += 2,
													d = (function () {
														var e, n;
														for (
															n = [], s = e = 0;
															0 <= c ? e < c : c < e;
															s = 0 <= c ? ++e : --e
														)
															n.push(t.readUInt16());
														return n;
													})(),
													h = (function () {
														var e, n;
														for (
															n = [], s = e = 0;
															0 <= c ? e < c : c < e;
															s = 0 <= c ? ++e : --e
														)
															n.push(t.readUInt16());
														return n;
													})(),
													u = (function () {
														var e, n;
														for (
															n = [], s = e = 0;
															0 <= c ? e < c : c < e;
															s = 0 <= c ? ++e : --e
														)
															n.push(t.readUInt16());
														return n;
													})(),
													r = (this.length - t.pos + this.offset) / 2,
													a = (function () {
														var e, n;
														for (
															n = [], s = e = 0;
															0 <= r ? e < r : r < e;
															s = 0 <= r ? ++e : --e
														)
															n.push(t.readUInt16());
														return n;
													})(),
													s = y = 0,
													w = i.length;
												y < w;
												s = ++y
											)
												for (
													g = i[s], n = v = p = d[s];
													p <= g ? v <= g : g <= v;
													n = p <= g ? ++v : --v
												)
													0 === u[s]
														? (o = n + h[s])
														: 0 !==
																(o = a[u[s] / 2 + (n - p) - (c - s)] || 0) &&
														  (o += h[s]),
														(this.codeMap[n] = 65535 & o);
									}
									t.pos = l;
								}
								return (
									(t.encode = function (t, e) {
										var n,
											r,
											i,
											o,
											a,
											s,
											h,
											u,
											c,
											f,
											p,
											d,
											g,
											m,
											y,
											v,
											w,
											b,
											x,
											N,
											L,
											A,
											S,
											_,
											F,
											P,
											k,
											I,
											C,
											B,
											j,
											E,
											M,
											O,
											q,
											T,
											R,
											D,
											U,
											z,
											H,
											W,
											V,
											G,
											Y,
											J;
										switch (
											((I = new l()),
											(o = Object.keys(t).sort(function (t, e) {
												return t - e;
											})),
											e)
										) {
											case 'macroman':
												for (
													g = 0,
														m = (function () {
															var t, e;
															for (e = [], d = t = 0; t < 256; d = ++t)
																e.push(0);
															return e;
														})(),
														v = {0: 0},
														i = {},
														C = 0,
														M = o.length;
													C < M;
													C++
												)
													null == v[(V = t[(r = o[C])])] && (v[V] = ++g),
														(i[r] = {old: t[r], new: v[t[r]]}),
														(m[r] = v[t[r]]);
												return (
													I.writeUInt16(1),
													I.writeUInt16(0),
													I.writeUInt32(12),
													I.writeUInt16(0),
													I.writeUInt16(262),
													I.writeUInt16(0),
													I.write(m),
													{charMap: i, subtable: I.data, maxGlyphID: g + 1}
												);
											case 'unicode':
												for (
													P = [],
														c = [],
														v = {},
														n = {},
														y = h = null,
														B = w = 0,
														O = o.length;
													B < O;
													B++
												)
													null == v[(x = t[(r = o[B])])] && (v[x] = ++w),
														(n[r] = {old: x, new: v[x]}),
														(a = v[x] - r),
														(null != y && a === h) ||
															(y && c.push(y), P.push(r), (h = a)),
														(y = r);
												for (
													y && c.push(y),
														c.push(65535),
														P.push(65535),
														_ = 2 * (S = P.length),
														A = 2 * Math.pow(Math.log(S) / Math.LN2, 2),
														f = Math.log(A / 2) / Math.LN2,
														L = 2 * S - A,
														s = [],
														N = [],
														p = [],
														d = j = 0,
														q = P.length;
													j < q;
													d = ++j
												) {
													if (((F = P[d]), (u = c[d]), 65535 === F)) {
														s.push(0), N.push(0);
														break;
													}
													if (32768 <= F - (k = n[F].new))
														for (
															s.push(0),
																N.push(2 * (p.length + S - d)),
																r = E = F;
															F <= u ? E <= u : u <= E;
															r = F <= u ? ++E : --E
														)
															p.push(n[r].new);
													else s.push(k - F), N.push(0);
												}
												for (
													I.writeUInt16(3),
														I.writeUInt16(1),
														I.writeUInt32(12),
														I.writeUInt16(4),
														I.writeUInt16(16 + 8 * S + 2 * p.length),
														I.writeUInt16(0),
														I.writeUInt16(_),
														I.writeUInt16(A),
														I.writeUInt16(f),
														I.writeUInt16(L),
														H = 0,
														T = c.length;
													H < T;
													H++
												)
													(r = c[H]), I.writeUInt16(r);
												for (I.writeUInt16(0), W = 0, R = P.length; W < R; W++)
													(r = P[W]), I.writeUInt16(r);
												for (G = 0, D = s.length; G < D; G++)
													(a = s[G]), I.writeUInt16(a);
												for (Y = 0, U = N.length; Y < U; Y++)
													(b = N[Y]), I.writeUInt16(b);
												for (J = 0, z = p.length; J < z; J++)
													(g = p[J]), I.writeUInt16(g);
												return {
													charMap: n,
													subtable: I.data,
													maxGlyphID: w + 1,
												};
										}
									}),
									t
								);
							})(),
							m = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'cmap'),
									(e.prototype.parse = function (t) {
										var e, n, r;
										for (
											t.pos = this.offset,
												this.version = t.readUInt16(),
												n = t.readUInt16(),
												this.tables = [],
												this.unicode = null,
												r = 0;
											0 <= n ? r < n : n < r;
											0 <= n ? ++r : --r
										)
											(e = new g(t, this.offset)),
												this.tables.push(e),
												e.isUnicode &&
													null == this.unicode &&
													(this.unicode = e);
										return !0;
									}),
									(e.encode = function (t, e) {
										var n, r;
										return (
											null == e && (e = 'macroman'),
											(n = g.encode(t, e)),
											(r = new l()).writeUInt16(0),
											r.writeUInt16(1),
											(n.table = r.data.concat(n.subtable)),
											n
										);
									}),
									e
								);
							})(),
							y = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'hhea'),
									(e.prototype.parse = function (t) {
										return (
											(t.pos = this.offset),
											(this.version = t.readInt()),
											(this.ascender = t.readShort()),
											(this.decender = t.readShort()),
											(this.lineGap = t.readShort()),
											(this.advanceWidthMax = t.readShort()),
											(this.minLeftSideBearing = t.readShort()),
											(this.minRightSideBearing = t.readShort()),
											(this.xMaxExtent = t.readShort()),
											(this.caretSlopeRise = t.readShort()),
											(this.caretSlopeRun = t.readShort()),
											(this.caretOffset = t.readShort()),
											(t.pos += 8),
											(this.metricDataFormat = t.readShort()),
											(this.numberOfMetrics = t.readUInt16())
										);
									}),
									e
								);
							})(),
							v = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'OS/2'),
									(e.prototype.parse = function (t) {
										if (
											((t.pos = this.offset),
											(this.version = t.readUInt16()),
											(this.averageCharWidth = t.readShort()),
											(this.weightClass = t.readUInt16()),
											(this.widthClass = t.readUInt16()),
											(this.type = t.readShort()),
											(this.ySubscriptXSize = t.readShort()),
											(this.ySubscriptYSize = t.readShort()),
											(this.ySubscriptXOffset = t.readShort()),
											(this.ySubscriptYOffset = t.readShort()),
											(this.ySuperscriptXSize = t.readShort()),
											(this.ySuperscriptYSize = t.readShort()),
											(this.ySuperscriptXOffset = t.readShort()),
											(this.ySuperscriptYOffset = t.readShort()),
											(this.yStrikeoutSize = t.readShort()),
											(this.yStrikeoutPosition = t.readShort()),
											(this.familyClass = t.readShort()),
											(this.panose = (function () {
												var e, n;
												for (n = [], e = 0; e < 10; ++e) n.push(t.readByte());
												return n;
											})()),
											(this.charRange = (function () {
												var e, n;
												for (n = [], e = 0; e < 4; ++e) n.push(t.readInt());
												return n;
											})()),
											(this.vendorID = t.readString(4)),
											(this.selection = t.readShort()),
											(this.firstCharIndex = t.readShort()),
											(this.lastCharIndex = t.readShort()),
											0 < this.version &&
												((this.ascent = t.readShort()),
												(this.descent = t.readShort()),
												(this.lineGap = t.readShort()),
												(this.winAscent = t.readShort()),
												(this.winDescent = t.readShort()),
												(this.codePageRange = (function () {
													var e, n;
													for (n = [], e = 0; e < 2; ++e) n.push(t.readInt());
													return n;
												})()),
												1 < this.version))
										)
											return (
												(this.xHeight = t.readShort()),
												(this.capHeight = t.readShort()),
												(this.defaultChar = t.readShort()),
												(this.breakChar = t.readShort()),
												(this.maxContext = t.readShort())
											);
									}),
									e
								);
							})(),
							w = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'post'),
									(e.prototype.parse = function (t) {
										var e, n, r, i;
										switch (
											((t.pos = this.offset),
											(this.format = t.readInt()),
											(this.italicAngle = t.readInt()),
											(this.underlinePosition = t.readShort()),
											(this.underlineThickness = t.readShort()),
											(this.isFixedPitch = t.readInt()),
											(this.minMemType42 = t.readInt()),
											(this.maxMemType42 = t.readInt()),
											(this.minMemType1 = t.readInt()),
											(this.maxMemType1 = t.readInt()),
											this.format)
										) {
											case 65536:
											case 196608:
												break;
											case 131072:
												for (
													n = t.readUInt16(), this.glyphNameIndex = [], r = 0;
													0 <= n ? r < n : n < r;
													0 <= n ? ++r : --r
												)
													this.glyphNameIndex.push(t.readUInt16());
												for (
													this.names = [], i = [];
													t.pos < this.offset + this.length;

												)
													(e = t.readByte()),
														i.push(this.names.push(t.readString(e)));
												return i;
											case 151552:
												return (n = t.readUInt16()), (this.offsets = t.read(n));
											case 262144:
												return (this.map = function () {
													var e, n, r;
													for (
														r = [], e = 0, n = this.file.maxp.numGlyphs;
														0 <= n ? e < n : n < e;
														0 <= n ? ++e : --e
													)
														r.push(t.readUInt32());
													return r;
												}.call(this));
										}
									}),
									e
								);
							})(),
							b = function (t, e) {
								(this.raw = t),
									(this.length = t.length),
									(this.platformID = e.platformID),
									(this.encodingID = e.encodingID),
									(this.languageID = e.languageID);
							},
							x = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'name'),
									(e.prototype.parse = function (t) {
										var e, n, r, i, o, a, s, h, u, l, c, f;
										for (
											t.pos = this.offset,
												t.readShort(),
												e = t.readShort(),
												a = t.readShort(),
												n = [],
												i = u = 0;
											0 <= e ? u < e : e < u;
											i = 0 <= e ? ++u : --u
										)
											n.push({
												platformID: t.readShort(),
												encodingID: t.readShort(),
												languageID: t.readShort(),
												nameID: t.readShort(),
												length: t.readShort(),
												offset: this.offset + a + t.readShort(),
											});
										for (s = {}, i = l = 0, c = n.length; l < c; i = ++l)
											(r = n[i]),
												(t.pos = r.offset),
												(h = t.readString(r.length)),
												(o = new b(h, r)),
												null == s[(f = r.nameID)] && (s[f] = []),
												s[r.nameID].push(o);
										(this.strings = s),
											(this.copyright = s[0]),
											(this.fontFamily = s[1]),
											(this.fontSubfamily = s[2]),
											(this.uniqueSubfamily = s[3]),
											(this.fontName = s[4]),
											(this.version = s[5]);
										try {
											this.postscriptName = s[6][0].raw.replace(
												/[\x00-\x19\x80-\xff]/g,
												''
											);
										} catch (t) {
											this.postscriptName = s[4][0].raw.replace(
												/[\x00-\x19\x80-\xff]/g,
												''
											);
										}
										return (
											(this.trademark = s[7]),
											(this.manufacturer = s[8]),
											(this.designer = s[9]),
											(this.description = s[10]),
											(this.vendorUrl = s[11]),
											(this.designerUrl = s[12]),
											(this.license = s[13]),
											(this.licenseUrl = s[14]),
											(this.preferredFamily = s[15]),
											(this.preferredSubfamily = s[17]),
											(this.compatibleFull = s[18]),
											(this.sampleText = s[19])
										);
									}),
									e
								);
							})(),
							N = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'maxp'),
									(e.prototype.parse = function (t) {
										return (
											(t.pos = this.offset),
											(this.version = t.readInt()),
											(this.numGlyphs = t.readUInt16()),
											(this.maxPoints = t.readUInt16()),
											(this.maxContours = t.readUInt16()),
											(this.maxCompositePoints = t.readUInt16()),
											(this.maxComponentContours = t.readUInt16()),
											(this.maxZones = t.readUInt16()),
											(this.maxTwilightPoints = t.readUInt16()),
											(this.maxStorage = t.readUInt16()),
											(this.maxFunctionDefs = t.readUInt16()),
											(this.maxInstructionDefs = t.readUInt16()),
											(this.maxStackElements = t.readUInt16()),
											(this.maxSizeOfInstructions = t.readUInt16()),
											(this.maxComponentElements = t.readUInt16()),
											(this.maxComponentDepth = t.readUInt16())
										);
									}),
									e
								);
							})(),
							L = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'hmtx'),
									(e.prototype.parse = function (t) {
										var e, n, r, i, o, a, s;
										for (
											t.pos = this.offset,
												this.metrics = [],
												i = 0,
												a = this.file.hhea.numberOfMetrics;
											0 <= a ? i < a : a < i;
											0 <= a ? ++i : --i
										)
											this.metrics.push({
												advance: t.readUInt16(),
												lsb: t.readInt16(),
											});
										for (
											n =
												this.file.maxp.numGlyphs -
												this.file.hhea.numberOfMetrics,
												this.leftSideBearings = (function () {
													var e, r;
													for (
														r = [], e = 0;
														0 <= n ? e < n : n < e;
														0 <= n ? ++e : --e
													)
														r.push(t.readInt16());
													return r;
												})(),
												this.widths = function () {
													var t, e, n, i;
													for (
														i = [], t = 0, e = (n = this.metrics).length;
														t < e;
														t++
													)
														(r = n[t]), i.push(r.advance);
													return i;
												}.call(this),
												e = this.widths[this.widths.length - 1],
												s = [],
												o = 0;
											0 <= n ? o < n : n < o;
											0 <= n ? ++o : --o
										)
											s.push(this.widths.push(e));
										return s;
									}),
									(e.prototype.forGlyph = function (t) {
										return t in this.metrics
											? this.metrics[t]
											: {
													advance:
														this.metrics[this.metrics.length - 1].advance,
													lsb: this.leftSideBearings[t - this.metrics.length],
											  };
									}),
									e
								);
							})(),
							A = [].slice,
							S = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'glyf'),
									(e.prototype.parse = function (t) {
										return (this.cache = {});
									}),
									(e.prototype.glyphFor = function (t) {
										var e, n, r, i, o, a, s, h, u, c;
										return (t = t) in this.cache
											? this.cache[t]
											: ((i = this.file.loca),
											  (e = this.file.contents),
											  (n = i.indexOf(t)),
											  0 === (r = i.lengthOf(t))
													? (this.cache[t] = null)
													: ((e.pos = this.offset + n),
													  (o = (a = new l(e.read(r))).readShort()),
													  (h = a.readShort()),
													  (c = a.readShort()),
													  (s = a.readShort()),
													  (u = a.readShort()),
													  (this.cache[t] =
															-1 === o
																? new F(a, h, c, s, u)
																: new _(a, o, h, c, s, u)),
													  this.cache[t]));
									}),
									(e.prototype.encode = function (t, e, n) {
										var r, i, o, a, s;
										for (o = [], i = [], a = 0, s = e.length; a < s; a++)
											(r = t[e[a]]),
												i.push(o.length),
												r && (o = o.concat(r.encode(n)));
										return i.push(o.length), {table: o, offsets: i};
									}),
									e
								);
							})(),
							_ = (function () {
								function t(t, e, n, r, i, o) {
									(this.raw = t),
										(this.numberOfContours = e),
										(this.xMin = n),
										(this.yMin = r),
										(this.xMax = i),
										(this.yMax = o),
										(this.compound = !1);
								}
								return (
									(t.prototype.encode = function () {
										return this.raw.data;
									}),
									t
								);
							})(),
							F = (function () {
								function t(t, e, n, r, i) {
									var o, a;
									for (
										this.raw = t,
											this.xMin = e,
											this.yMin = n,
											this.xMax = r,
											this.yMax = i,
											this.compound = !0,
											this.glyphIDs = [],
											this.glyphOffsets = [],
											o = this.raw;
										(a = o.readShort()),
											this.glyphOffsets.push(o.pos),
											this.glyphIDs.push(o.readShort()),
											32 & a;

									)
										(o.pos += 1 & a ? 4 : 2),
											128 & a
												? (o.pos += 8)
												: 64 & a
												? (o.pos += 4)
												: 8 & a && (o.pos += 2);
								}
								return (
									(t.prototype.encode = function (t) {
										var e, n, r, i, o;
										for (
											n = new l(A.call(this.raw.data)),
												e = r = 0,
												i = (o = this.glyphIDs).length;
											r < i;
											e = ++r
										)
											o[e], (n.pos = this.glyphOffsets[e]);
										return n.data;
									}),
									t
								);
							})(),
							P = (function (t) {
								function e() {
									return e.__super__.constructor.apply(this, arguments);
								}
								return (
									p(e, u),
									(e.prototype.tag = 'loca'),
									(e.prototype.parse = function (t) {
										var e;
										return (
											(t.pos = this.offset),
											(e = this.file.head.indexToLocFormat),
											(this.offsets =
												0 === e
													? function () {
															var e, n, r;
															for (
																r = [], e = 0, n = this.length;
																e < n;
																e += 2
															)
																r.push(2 * t.readUInt16());
															return r;
													  }.call(this)
													: function () {
															var e, n, r;
															for (
																r = [], e = 0, n = this.length;
																e < n;
																e += 4
															)
																r.push(t.readUInt32());
															return r;
													  }.call(this))
										);
									}),
									(e.prototype.indexOf = function (t) {
										return this.offsets[t];
									}),
									(e.prototype.lengthOf = function (t) {
										return this.offsets[t + 1] - this.offsets[t];
									}),
									(e.prototype.encode = function (t, e) {
										for (
											var n = new Uint32Array(this.offsets.length),
												r = 0,
												i = 0,
												o = 0;
											o < n.length;
											++o
										)
											if (((n[o] = r), i < e.length && e[i] == o)) {
												++i, (n[o] = r);
												var a = this.offsets[o],
													s = this.offsets[o + 1] - a;
												0 < s && (r += s);
											}
										for (
											var h = new Array(4 * n.length), u = 0;
											u < n.length;
											++u
										)
											(h[4 * u + 3] = 255 & n[u]),
												(h[4 * u + 2] = (65280 & n[u]) >> 8),
												(h[4 * u + 1] = (16711680 & n[u]) >> 16),
												(h[4 * u] = (4278190080 & n[u]) >> 24);
										return h;
									}),
									e
								);
							})(),
							k = (function () {
								function t(t) {
									(this.font = t),
										(this.subset = {}),
										(this.unicodes = {}),
										(this.next = 33);
								}
								return (
									(t.prototype.generateCmap = function () {
										var t, e, n, r, i;
										for (e in ((r = this.font.cmap.tables[0].codeMap),
										(t = {}),
										(i = this.subset)))
											(n = i[e]), (t[e] = r[n]);
										return t;
									}),
									(t.prototype.glyphsFor = function (t) {
										var e, n, r, i, o, a, s;
										for (r = {}, o = 0, a = t.length; o < a; o++)
											r[(i = t[o])] = this.font.glyf.glyphFor(i);
										for (i in ((e = []), r))
											(null != (n = r[i]) ? n.compound : void 0) &&
												e.push.apply(e, n.glyphIDs);
										if (0 < e.length)
											for (i in (s = this.glyphsFor(e))) (n = s[i]), (r[i] = n);
										return r;
									}),
									(t.prototype.encode = function (t, e) {
										var n, r, i, o, a, s, h, u, l, c, f, p, d, g, y;
										for (r in ((n = m.encode(this.generateCmap(), 'unicode')),
										(o = this.glyphsFor(t)),
										(f = {0: 0}),
										(y = n.charMap)))
											f[(s = y[r]).old] = s.new;
										for (p in ((c = n.maxGlyphID), o)) p in f || (f[p] = c++);
										return (
											(u = (function (t) {
												var e, n;
												for (e in ((n = {}), t)) n[t[e]] = e;
												return n;
											})(f)),
											(l = Object.keys(u).sort(function (t, e) {
												return t - e;
											})),
											(d = (function () {
												var t, e, n;
												for (n = [], t = 0, e = l.length; t < e; t++)
													(a = l[t]), n.push(u[a]);
												return n;
											})()),
											(i = this.font.glyf.encode(o, d, f)),
											(h = this.font.loca.encode(i.offsets, d)),
											(g = {
												cmap: this.font.cmap.raw(),
												glyf: i.table,
												loca: h,
												hmtx: this.font.hmtx.raw(),
												hhea: this.font.hhea.raw(),
												maxp: this.font.maxp.raw(),
												post: this.font.post.raw(),
												name: this.font.name.raw(),
												head: this.font.head.encode(e),
											}),
											this.font.os2.exists && (g['OS/2'] = this.font.os2.raw()),
											this.font.directory.encode(g)
										);
									}),
									t
								);
							})();
						t.API.PDFObject = (function () {
							var t;
							function e() {}
							return (
								(t = function (t, e) {
									return (Array(e + 1).join('0') + t).slice(-e);
								}),
								(e.convert = function (n) {
									var r, i, o, a;
									if (Array.isArray(n))
										return (
											'[' +
											(function () {
												var t, i, o;
												for (o = [], t = 0, i = n.length; t < i; t++)
													(r = n[t]), o.push(e.convert(r));
												return o;
											})().join(' ') +
											']'
										);
									if ('string' == typeof n) return '/' + n;
									if (null != n ? n.isString : void 0) return '(' + n + ')';
									if (n instanceof Date)
										return (
											'(D:' +
											t(n.getUTCFullYear(), 4) +
											t(n.getUTCMonth(), 2) +
											t(n.getUTCDate(), 2) +
											t(n.getUTCHours(), 2) +
											t(n.getUTCMinutes(), 2) +
											t(n.getUTCSeconds(), 2) +
											'Z)'
										);
									if ('[object Object]' !== {}.toString.call(n)) return '' + n;
									for (i in ((o = ['<<']), n))
										(a = n[i]), o.push('/' + i + ' ' + e.convert(a));
									return o.push('>>'), o.join('\n');
								}),
								e
							);
						})();
					})(dt),
					(Pt =
						('undefined' != typeof self && self) ||
						('undefined' != typeof window && window) ||
						(void 0 !== n.g && n.g) ||
						Function('return typeof this === "object" && this.content')() ||
						Function('return this')()),
					(kt = (function () {
						var t, e, n;
						function r(t) {
							var e, n, r, i, o, a, s, h, u, l, c, f, p, d;
							for (
								this.data = t,
									this.pos = 8,
									this.palette = [],
									this.imgData = [],
									this.transparency = {},
									this.animation = null,
									this.text = {},
									a = null;
								;

							) {
								switch (
									((e = this.readUInt32()),
									(u = function () {
										var t, e;
										for (e = [], t = 0; t < 4; ++t)
											e.push(String.fromCharCode(this.data[this.pos++]));
										return e;
									}
										.call(this)
										.join('')))
								) {
									case 'IHDR':
										(this.width = this.readUInt32()),
											(this.height = this.readUInt32()),
											(this.bits = this.data[this.pos++]),
											(this.colorType = this.data[this.pos++]),
											(this.compressionMethod = this.data[this.pos++]),
											(this.filterMethod = this.data[this.pos++]),
											(this.interlaceMethod = this.data[this.pos++]);
										break;
									case 'acTL':
										this.animation = {
											numFrames: this.readUInt32(),
											numPlays: this.readUInt32() || 1 / 0,
											frames: [],
										};
										break;
									case 'PLTE':
										this.palette = this.read(e);
										break;
									case 'fcTL':
										a && this.animation.frames.push(a),
											(this.pos += 4),
											(a = {
												width: this.readUInt32(),
												height: this.readUInt32(),
												xOffset: this.readUInt32(),
												yOffset: this.readUInt32(),
											}),
											(o = this.readUInt16()),
											(i = this.readUInt16() || 100),
											(a.delay = (1e3 * o) / i),
											(a.disposeOp = this.data[this.pos++]),
											(a.blendOp = this.data[this.pos++]),
											(a.data = []);
										break;
									case 'IDAT':
									case 'fdAT':
										for (
											'fdAT' === u && ((this.pos += 4), (e -= 4)),
												t = (null != a ? a.data : void 0) || this.imgData,
												f = 0;
											0 <= e ? f < e : e < f;
											0 <= e ? ++f : --f
										)
											t.push(this.data[this.pos++]);
										break;
									case 'tRNS':
										switch (((this.transparency = {}), this.colorType)) {
											case 3:
												if (
													((r = this.palette.length / 3),
													(this.transparency.indexed = this.read(e)),
													this.transparency.indexed.length > r)
												)
													throw new Error(
														'More transparent colors than palette size'
													);
												if (0 < (l = r - this.transparency.indexed.length))
													for (
														p = 0;
														0 <= l ? p < l : l < p;
														0 <= l ? ++p : --p
													)
														this.transparency.indexed.push(255);
												break;
											case 0:
												this.transparency.grayscale = this.read(e)[0];
												break;
											case 2:
												this.transparency.rgb = this.read(e);
										}
										break;
									case 'tEXt':
										(s = (c = this.read(e)).indexOf(0)),
											(h = String.fromCharCode.apply(String, c.slice(0, s))),
											(this.text[h] = String.fromCharCode.apply(
												String,
												c.slice(s + 1)
											));
										break;
									case 'IEND':
										return (
											a && this.animation.frames.push(a),
											(this.colors = function () {
												switch (this.colorType) {
													case 0:
													case 3:
													case 4:
														return 1;
													case 2:
													case 6:
														return 3;
												}
											}.call(this)),
											(this.hasAlphaChannel =
												4 === (d = this.colorType) || 6 === d),
											(n = this.colors + (this.hasAlphaChannel ? 1 : 0)),
											(this.pixelBitlength = this.bits * n),
											(this.colorSpace = function () {
												switch (this.colors) {
													case 1:
														return 'DeviceGray';
													case 3:
														return 'DeviceRGB';
												}
											}.call(this)),
											void (this.imgData = new Uint8Array(this.imgData))
										);
									default:
										this.pos += e;
								}
								if (((this.pos += 4), this.pos > this.data.length))
									throw new Error('Incomplete or corrupt PNG file');
							}
						}
						(r.load = function (t, e, n) {
							var i;
							return (
								'function' == typeof e && (n = e),
								(i = new XMLHttpRequest()).open('GET', t, !0),
								(i.responseType = 'arraybuffer'),
								(i.onload = function () {
									var t;
									return (
										(t = new r(
											new Uint8Array(i.response || i.mozResponseArrayBuffer)
										)),
										'function' == typeof (null != e ? e.getContext : void 0) &&
											t.render(e),
										'function' == typeof n ? n(t) : void 0
									);
								}),
								i.send(null)
							);
						}),
							(r.prototype.read = function (t) {
								var e, n;
								for (n = [], e = 0; 0 <= t ? e < t : t < e; 0 <= t ? ++e : --e)
									n.push(this.data[this.pos++]);
								return n;
							}),
							(r.prototype.readUInt32 = function () {
								return (
									(this.data[this.pos++] << 24) |
									(this.data[this.pos++] << 16) |
									(this.data[this.pos++] << 8) |
									this.data[this.pos++]
								);
							}),
							(r.prototype.readUInt16 = function () {
								return (this.data[this.pos++] << 8) | this.data[this.pos++];
							}),
							(r.prototype.decodePixels = function (t) {
								var e = this.pixelBitlength / 8,
									n = new Uint8Array(this.width * this.height * e),
									r = 0,
									i = this;
								if ((null == t && (t = this.imgData), 0 === t.length))
									return new Uint8Array(0);
								function o(o, a, s, h) {
									var u,
										l,
										c,
										f,
										p,
										d,
										g,
										m,
										y,
										v,
										w,
										b,
										x,
										N,
										L,
										A,
										S,
										_,
										F,
										P,
										k,
										I = Math.ceil((i.width - o) / s),
										C = Math.ceil((i.height - a) / h),
										B = i.width == I && i.height == C;
									for (
										N = e * I,
											b = B ? n : new Uint8Array(N * C),
											d = t.length,
											l = x = 0;
										x < C && r < d;

									) {
										switch (t[r++]) {
											case 0:
												for (f = S = 0; S < N; f = S += 1) b[l++] = t[r++];
												break;
											case 1:
												for (f = _ = 0; _ < N; f = _ += 1)
													(u = t[r++]),
														(p = f < e ? 0 : b[l - e]),
														(b[l++] = (u + p) % 256);
												break;
											case 2:
												for (f = F = 0; F < N; f = F += 1)
													(u = t[r++]),
														(c = (f - (f % e)) / e),
														(L = x && b[(x - 1) * N + c * e + (f % e)]),
														(b[l++] = (L + u) % 256);
												break;
											case 3:
												for (f = P = 0; P < N; f = P += 1)
													(u = t[r++]),
														(c = (f - (f % e)) / e),
														(p = f < e ? 0 : b[l - e]),
														(L = x && b[(x - 1) * N + c * e + (f % e)]),
														(b[l++] = (u + Math.floor((p + L) / 2)) % 256);
												break;
											case 4:
												for (f = k = 0; k < N; f = k += 1)
													(u = t[r++]),
														(c = (f - (f % e)) / e),
														(p = f < e ? 0 : b[l - e]),
														0 === x
															? (L = A = 0)
															: ((L = b[(x - 1) * N + c * e + (f % e)]),
															  (A =
																	c && b[(x - 1) * N + (c - 1) * e + (f % e)])),
														(g = p + L - A),
														(m = Math.abs(g - p)),
														(v = Math.abs(g - L)),
														(w = Math.abs(g - A)),
														(y = m <= v && m <= w ? p : v <= w ? L : A),
														(b[l++] = (u + y) % 256);
												break;
											default:
												throw new Error(
													'Invalid filter algorithm: ' + t[r - 1]
												);
										}
										if (!B) {
											var j = ((a + x * h) * i.width + o) * e,
												E = x * N;
											for (f = 0; f < I; f += 1) {
												for (var M = 0; M < e; M += 1) n[j++] = b[E++];
												j += (s - 1) * e;
											}
										}
										x++;
									}
								}
								return (
									(t = (t = new Ot(t)).getBytes()),
									1 == i.interlaceMethod
										? (o(0, 0, 8, 8),
										  o(4, 0, 8, 8),
										  o(0, 4, 4, 8),
										  o(2, 0, 4, 4),
										  o(0, 2, 2, 4),
										  o(1, 0, 2, 2),
										  o(0, 1, 1, 2))
										: o(0, 0, 1, 1),
									n
								);
							}),
							(r.prototype.decodePalette = function () {
								var t, e, n, r, i, o, a, s, h;
								for (
									n = this.palette,
										o = this.transparency.indexed || [],
										i = new Uint8Array((o.length || 0) + n.length),
										r = 0,
										n.length,
										e = a = t = 0,
										s = n.length;
									a < s;
									e = a += 3
								)
									(i[r++] = n[e]),
										(i[r++] = n[e + 1]),
										(i[r++] = n[e + 2]),
										(i[r++] = null != (h = o[t++]) ? h : 255);
								return i;
							}),
							(r.prototype.copyToImageData = function (t, e) {
								var n, r, i, o, a, s, h, u, l, c, f;
								if (
									((r = this.colors),
									(l = null),
									(n = this.hasAlphaChannel),
									this.palette.length &&
										((l =
											null != (f = this._decodedPalette)
												? f
												: (this._decodedPalette = this.decodePalette())),
										(r = 4),
										(n = !0)),
									(u = (i = t.data || t).length),
									(a = l || e),
									(o = s = 0),
									1 === r)
								)
									for (; o < u; )
										(h = l ? 4 * e[o / 4] : s),
											(c = a[h++]),
											(i[o++] = c),
											(i[o++] = c),
											(i[o++] = c),
											(i[o++] = n ? a[h++] : 255),
											(s = h);
								else
									for (; o < u; )
										(h = l ? 4 * e[o / 4] : s),
											(i[o++] = a[h++]),
											(i[o++] = a[h++]),
											(i[o++] = a[h++]),
											(i[o++] = n ? a[h++] : 255),
											(s = h);
							}),
							(r.prototype.decode = function () {
								var t;
								return (
									(t = new Uint8Array(this.width * this.height * 4)),
									this.copyToImageData(t, this.decodePixels()),
									t
								);
							});
						try {
							(e = Pt.document.createElement('canvas')),
								(n = e.getContext('2d'));
						} catch (t) {
							return -1;
						}
						return (
							(t = function (t) {
								var r;
								return (
									(n.width = t.width),
									(n.height = t.height),
									n.clearRect(0, 0, t.width, t.height),
									n.putImageData(t, 0, 0),
									((r = new Image()).src = e.toDataURL()),
									r
								);
							}),
							(r.prototype.decodeFrames = function (e) {
								var n, r, i, o, a, s, h, u;
								if (this.animation) {
									for (
										u = [], r = a = 0, s = (h = this.animation.frames).length;
										a < s;
										r = ++a
									)
										(n = h[r]),
											(i = e.createImageData(n.width, n.height)),
											(o = this.decodePixels(new Uint8Array(n.data))),
											this.copyToImageData(i, o),
											(n.imageData = i),
											u.push((n.image = t(i)));
									return u;
								}
							}),
							(r.prototype.renderFrame = function (t, e) {
								var n, r, i;
								return (
									(n = (r = this.animation.frames)[e]),
									(i = r[e - 1]),
									0 === e && t.clearRect(0, 0, this.width, this.height),
									1 === (null != i ? i.disposeOp : void 0)
										? t.clearRect(i.xOffset, i.yOffset, i.width, i.height)
										: 2 === (null != i ? i.disposeOp : void 0) &&
										  t.putImageData(i.imageData, i.xOffset, i.yOffset),
									0 === n.blendOp &&
										t.clearRect(n.xOffset, n.yOffset, n.width, n.height),
									t.drawImage(n.image, n.xOffset, n.yOffset)
								);
							}),
							(r.prototype.animate = function (t) {
								var e,
									n,
									r,
									i,
									o,
									a,
									s = this;
								return (
									(n = 0),
									(a = this.animation),
									(i = a.numFrames),
									(r = a.frames),
									(o = a.numPlays),
									(e = function () {
										var a, h;
										if (
											((a = n++ % i),
											(h = r[a]),
											s.renderFrame(t, a),
											1 < i && n / i < o)
										)
											return (s.animation._timeout = setTimeout(e, h.delay));
									})()
								);
							}),
							(r.prototype.stopAnimation = function () {
								var t;
								return clearTimeout(
									null != (t = this.animation) ? t._timeout : void 0
								);
							}),
							(r.prototype.render = function (t) {
								var e, n;
								return (
									t._png && t._png.stopAnimation(),
									(t._png = this),
									(t.width = this.width),
									(t.height = this.height),
									(e = t.getContext('2d')),
									this.animation
										? (this.decodeFrames(e), this.animate(e))
										: ((n = e.createImageData(this.width, this.height)),
										  this.copyToImageData(n, this.decodePixels()),
										  e.putImageData(n, 0, 0))
								);
							}),
							r
						);
					})()),
					(Pt.PNG = kt);
				var Mt = (function () {
						function t() {
							(this.pos = 0),
								(this.bufferLength = 0),
								(this.eof = !1),
								(this.buffer = null);
						}
						return (
							(t.prototype = {
								ensureBuffer: function (t) {
									var e = this.buffer,
										n = e ? e.byteLength : 0;
									if (t < n) return e;
									for (var r = 512; r < t; ) r <<= 1;
									for (var i = new Uint8Array(r), o = 0; o < n; ++o)
										i[o] = e[o];
									return (this.buffer = i);
								},
								getByte: function () {
									for (var t = this.pos; this.bufferLength <= t; ) {
										if (this.eof) return null;
										this.readBlock();
									}
									return this.buffer[this.pos++];
								},
								getBytes: function (t) {
									var e = this.pos;
									if (t) {
										this.ensureBuffer(e + t);
										for (var n = e + t; !this.eof && this.bufferLength < n; )
											this.readBlock();
										var r = this.bufferLength;
										r < n && (n = r);
									} else {
										for (; !this.eof; ) this.readBlock();
										n = this.bufferLength;
									}
									return (this.pos = n), this.buffer.subarray(e, n);
								},
								lookChar: function () {
									for (var t = this.pos; this.bufferLength <= t; ) {
										if (this.eof) return null;
										this.readBlock();
									}
									return String.fromCharCode(this.buffer[this.pos]);
								},
								getChar: function () {
									for (var t = this.pos; this.bufferLength <= t; ) {
										if (this.eof) return null;
										this.readBlock();
									}
									return String.fromCharCode(this.buffer[this.pos++]);
								},
								makeSubStream: function (t, e, n) {
									for (var r = t + e; this.bufferLength <= r && !this.eof; )
										this.readBlock();
									return new Stream(this.buffer, t, e, n);
								},
								skip: function (t) {
									t || (t = 1), (this.pos += t);
								},
								reset: function () {
									this.pos = 0;
								},
							}),
							t
						);
					})(),
					Ot = (function () {
						if ('undefined' != typeof Uint32Array) {
							var t = new Uint32Array([
									16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
									15,
								]),
								e = new Uint32Array([
									3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091,
									131095, 131099, 131103, 196643, 196651, 196659, 196667,
									262211, 262227, 262243, 262259, 327811, 327843, 327875,
									327907, 258, 258, 258,
								]),
								n = new Uint32Array([
									1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633,
									262177, 262193, 327745, 327777, 393345, 393409, 459009,
									459137, 524801, 525057, 590849, 591361, 657409, 658433,
									724993, 727041, 794625, 798721, 868353, 876545,
								]),
								r = [
									new Uint32Array([
										459008, 524368, 524304, 524568, 459024, 524400, 524336,
										590016, 459016, 524384, 524320, 589984, 524288, 524416,
										524352, 590048, 459012, 524376, 524312, 589968, 459028,
										524408, 524344, 590032, 459020, 524392, 524328, 59e4,
										524296, 524424, 524360, 590064, 459010, 524372, 524308,
										524572, 459026, 524404, 524340, 590024, 459018, 524388,
										524324, 589992, 524292, 524420, 524356, 590056, 459014,
										524380, 524316, 589976, 459030, 524412, 524348, 590040,
										459022, 524396, 524332, 590008, 524300, 524428, 524364,
										590072, 459009, 524370, 524306, 524570, 459025, 524402,
										524338, 590020, 459017, 524386, 524322, 589988, 524290,
										524418, 524354, 590052, 459013, 524378, 524314, 589972,
										459029, 524410, 524346, 590036, 459021, 524394, 524330,
										590004, 524298, 524426, 524362, 590068, 459011, 524374,
										524310, 524574, 459027, 524406, 524342, 590028, 459019,
										524390, 524326, 589996, 524294, 524422, 524358, 590060,
										459015, 524382, 524318, 589980, 459031, 524414, 524350,
										590044, 459023, 524398, 524334, 590012, 524302, 524430,
										524366, 590076, 459008, 524369, 524305, 524569, 459024,
										524401, 524337, 590018, 459016, 524385, 524321, 589986,
										524289, 524417, 524353, 590050, 459012, 524377, 524313,
										589970, 459028, 524409, 524345, 590034, 459020, 524393,
										524329, 590002, 524297, 524425, 524361, 590066, 459010,
										524373, 524309, 524573, 459026, 524405, 524341, 590026,
										459018, 524389, 524325, 589994, 524293, 524421, 524357,
										590058, 459014, 524381, 524317, 589978, 459030, 524413,
										524349, 590042, 459022, 524397, 524333, 590010, 524301,
										524429, 524365, 590074, 459009, 524371, 524307, 524571,
										459025, 524403, 524339, 590022, 459017, 524387, 524323,
										589990, 524291, 524419, 524355, 590054, 459013, 524379,
										524315, 589974, 459029, 524411, 524347, 590038, 459021,
										524395, 524331, 590006, 524299, 524427, 524363, 590070,
										459011, 524375, 524311, 524575, 459027, 524407, 524343,
										590030, 459019, 524391, 524327, 589998, 524295, 524423,
										524359, 590062, 459015, 524383, 524319, 589982, 459031,
										524415, 524351, 590046, 459023, 524399, 524335, 590014,
										524303, 524431, 524367, 590078, 459008, 524368, 524304,
										524568, 459024, 524400, 524336, 590017, 459016, 524384,
										524320, 589985, 524288, 524416, 524352, 590049, 459012,
										524376, 524312, 589969, 459028, 524408, 524344, 590033,
										459020, 524392, 524328, 590001, 524296, 524424, 524360,
										590065, 459010, 524372, 524308, 524572, 459026, 524404,
										524340, 590025, 459018, 524388, 524324, 589993, 524292,
										524420, 524356, 590057, 459014, 524380, 524316, 589977,
										459030, 524412, 524348, 590041, 459022, 524396, 524332,
										590009, 524300, 524428, 524364, 590073, 459009, 524370,
										524306, 524570, 459025, 524402, 524338, 590021, 459017,
										524386, 524322, 589989, 524290, 524418, 524354, 590053,
										459013, 524378, 524314, 589973, 459029, 524410, 524346,
										590037, 459021, 524394, 524330, 590005, 524298, 524426,
										524362, 590069, 459011, 524374, 524310, 524574, 459027,
										524406, 524342, 590029, 459019, 524390, 524326, 589997,
										524294, 524422, 524358, 590061, 459015, 524382, 524318,
										589981, 459031, 524414, 524350, 590045, 459023, 524398,
										524334, 590013, 524302, 524430, 524366, 590077, 459008,
										524369, 524305, 524569, 459024, 524401, 524337, 590019,
										459016, 524385, 524321, 589987, 524289, 524417, 524353,
										590051, 459012, 524377, 524313, 589971, 459028, 524409,
										524345, 590035, 459020, 524393, 524329, 590003, 524297,
										524425, 524361, 590067, 459010, 524373, 524309, 524573,
										459026, 524405, 524341, 590027, 459018, 524389, 524325,
										589995, 524293, 524421, 524357, 590059, 459014, 524381,
										524317, 589979, 459030, 524413, 524349, 590043, 459022,
										524397, 524333, 590011, 524301, 524429, 524365, 590075,
										459009, 524371, 524307, 524571, 459025, 524403, 524339,
										590023, 459017, 524387, 524323, 589991, 524291, 524419,
										524355, 590055, 459013, 524379, 524315, 589975, 459029,
										524411, 524347, 590039, 459021, 524395, 524331, 590007,
										524299, 524427, 524363, 590071, 459011, 524375, 524311,
										524575, 459027, 524407, 524343, 590031, 459019, 524391,
										524327, 589999, 524295, 524423, 524359, 590063, 459015,
										524383, 524319, 589983, 459031, 524415, 524351, 590047,
										459023, 524399, 524335, 590015, 524303, 524431, 524367,
										590079,
									]),
									9,
								],
								i = [
									new Uint32Array([
										327680, 327696, 327688, 327704, 327684, 327700, 327692,
										327708, 327682, 327698, 327690, 327706, 327686, 327702,
										327694, 0, 327681, 327697, 327689, 327705, 327685, 327701,
										327693, 327709, 327683, 327699, 327691, 327707, 327687,
										327703, 327695, 0,
									]),
									5,
								];
							return (
								((a.prototype = Object.create(Mt.prototype)).getBits =
									function (t) {
										for (
											var e,
												n = this.codeSize,
												r = this.codeBuf,
												i = this.bytes,
												a = this.bytesPos;
											n < t;

										)
											void 0 === (e = i[a++]) &&
												o('Bad encoding in flate stream'),
												(r |= e << n),
												(n += 8);
										return (
											(e = r & ((1 << t) - 1)),
											(this.codeBuf = r >> t),
											(this.codeSize = n -= t),
											(this.bytesPos = a),
											e
										);
									}),
								(a.prototype.getCode = function (t) {
									for (
										var e = t[0],
											n = t[1],
											r = this.codeSize,
											i = this.codeBuf,
											a = this.bytes,
											s = this.bytesPos;
										r < n;

									) {
										var h;
										void 0 === (h = a[s++]) &&
											o('Bad encoding in flate stream'),
											(i |= h << r),
											(r += 8);
									}
									var u = e[i & ((1 << n) - 1)],
										l = u >> 16,
										c = 65535 & u;
									return (
										(0 == r || r < l || 0 == l) &&
											o('Bad encoding in flate stream'),
										(this.codeBuf = i >> l),
										(this.codeSize = r - l),
										(this.bytesPos = s),
										c
									);
								}),
								(a.prototype.generateHuffmanTable = function (t) {
									for (var e = t.length, n = 0, r = 0; r < e; ++r)
										t[r] > n && (n = t[r]);
									for (
										var i = 1 << n, o = new Uint32Array(i), a = 1, s = 0, h = 2;
										a <= n;
										++a, s <<= 1, h <<= 1
									)
										for (var u = 0; u < e; ++u)
											if (t[u] == a) {
												var l = 0,
													c = s;
												for (r = 0; r < a; ++r)
													(l = (l << 1) | (1 & c)), (c >>= 1);
												for (r = l; r < i; r += h) o[r] = (a << 16) | u;
												++s;
											}
									return [o, n];
								}),
								(a.prototype.readBlock = function () {
									function a(t, e, n, r, i) {
										for (var o = t.getBits(n) + r; 0 < o--; ) e[d++] = i;
									}
									var s = this.getBits(3);
									if ((1 & s && (this.eof = !0), 0 != (s >>= 1))) {
										var h, u;
										if (1 == s) (h = r), (u = i);
										else if (2 == s) {
											for (
												var l = this.getBits(5) + 257,
													c = this.getBits(5) + 1,
													f = this.getBits(4) + 4,
													p = Array(t.length),
													d = 0;
												d < f;

											)
												p[t[d++]] = this.getBits(3);
											for (
												var g = this.generateHuffmanTable(p),
													m = 0,
													y = ((d = 0), l + c),
													v = new Array(y);
												d < y;

											) {
												var w = this.getCode(g);
												16 == w
													? a(this, v, 2, 3, m)
													: 17 == w
													? a(this, v, 3, 3, (m = 0))
													: 18 == w
													? a(this, v, 7, 11, (m = 0))
													: (v[d++] = m = w);
											}
											(h = this.generateHuffmanTable(v.slice(0, l))),
												(u = this.generateHuffmanTable(v.slice(l, y)));
										} else o('Unknown block type in flate stream');
										for (
											var b = (B = this.buffer) ? B.length : 0,
												x = this.bufferLength;
											;

										) {
											var N = this.getCode(h);
											if (N < 256)
												b <= x + 1 &&
													(b = (B = this.ensureBuffer(x + 1)).length),
													(B[x++] = N);
											else {
												if (256 == N) return void (this.bufferLength = x);
												var L = (N = e[(N -= 257)]) >> 16;
												0 < L && (L = this.getBits(L)),
													(m = (65535 & N) + L),
													(N = this.getCode(u)),
													0 < (L = (N = n[N]) >> 16) && (L = this.getBits(L));
												var A = (65535 & N) + L;
												b <= x + m &&
													(b = (B = this.ensureBuffer(x + m)).length);
												for (var S = 0; S < m; ++S, ++x) B[x] = B[x - A];
											}
										}
									} else {
										var _,
											F = this.bytes,
											P = this.bytesPos;
										void 0 === (_ = F[P++]) &&
											o('Bad block header in flate stream');
										var k = _;
										void 0 === (_ = F[P++]) &&
											o('Bad block header in flate stream'),
											(k |= _ << 8),
											void 0 === (_ = F[P++]) &&
												o('Bad block header in flate stream');
										var I = _;
										void 0 === (_ = F[P++]) &&
											o('Bad block header in flate stream'),
											(I |= _ << 8) != (65535 & ~k) &&
												o('Bad uncompressed block length in flate stream'),
											(this.codeBuf = 0),
											(this.codeSize = 0);
										var C = this.bufferLength,
											B = this.ensureBuffer(C + k),
											j = C + k;
										this.bufferLength = j;
										for (var E = C; E < j; ++E) {
											if (void 0 === (_ = F[P++])) {
												this.eof = !0;
												break;
											}
											B[E] = _;
										}
										this.bytesPos = P;
									}
								}),
								a
							);
						}
						function o(t) {
							throw new Error(t);
						}
						function a(t) {
							var e = 0,
								n = t[e++],
								r = t[e++];
							(-1 != n && -1 != r) || o('Invalid header in flate stream'),
								8 != (15 & n) &&
									o('Unknown compression method in flate stream'),
								((n << 8) + r) % 31 != 0 && o('Bad FCHECK in flate stream'),
								32 & r && o('FDICT bit set in flate stream'),
								(this.bytes = t),
								(this.bytesPos = 2),
								(this.codeSize = 0),
								(this.codeBuf = 0),
								Mt.call(this);
						}
					})();
				window.tmp = Ot;
			}),
				void 0 === (i = r.call(e, n, e, t)) || (t.exports = i);
			try {
				t.exports = jsPDF;
			} catch (t) {}
		},
	},
]);
