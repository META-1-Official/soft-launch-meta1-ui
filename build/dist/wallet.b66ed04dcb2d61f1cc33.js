'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[882, 397],
	{
		39144: (e, t, a) => {
			a.d(t, {Z: () => y});
			var n = a(4942),
				c = a(87462),
				r = a(67294),
				l = a(94184),
				o = a.n(l),
				i = a(98423),
				s = a(65632);
			const d = function (e) {
				var t = e.prefixCls,
					a = e.className,
					l = e.hoverable,
					i = void 0 === l || l,
					d = (function (e, t) {
						var a = {};
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) &&
								t.indexOf(n) < 0 &&
								(a[n] = e[n]);
						if (
							null != e &&
							'function' == typeof Object.getOwnPropertySymbols
						) {
							var c = 0;
							for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
								t.indexOf(n[c]) < 0 &&
									Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
									(a[n[c]] = e[n[c]]);
						}
						return a;
					})(e, ['prefixCls', 'className', 'hoverable']);
				return r.createElement(s.C, null, function (e) {
					var l = (0, e.getPrefixCls)('card', t),
						s = o()(
							''.concat(l, '-grid'),
							a,
							(0, n.Z)({}, ''.concat(l, '-grid-hoverable'), i)
						);
					return r.createElement('div', (0, c.Z)({}, d, {className: s}));
				});
			};
			var m = a(47428),
				p = a(71230),
				u = a(15746),
				v = a(97647),
				b = r.forwardRef(function (e, t) {
					var a,
						l,
						b,
						y = r.useContext(s.E_),
						f = y.getPrefixCls,
						E = y.direction,
						h = r.useContext(v.Z),
						g = e.prefixCls,
						Z = e.className,
						O = e.extra,
						x = e.headStyle,
						N = void 0 === x ? {} : x,
						C = e.bodyStyle,
						P = void 0 === C ? {} : C,
						w = e.title,
						j = e.loading,
						S = e.bordered,
						k = void 0 === S || S,
						T = e.size,
						K = e.type,
						B = e.cover,
						z = e.actions,
						A = e.tabList,
						I = e.children,
						_ = e.activeTabKey,
						L = e.defaultActiveTabKey,
						G = e.tabBarExtraContent,
						M = e.hoverable,
						R = e.tabProps,
						q = void 0 === R ? {} : R,
						D = (function (e, t) {
							var a = {};
							for (var n in e)
								Object.prototype.hasOwnProperty.call(e, n) &&
									t.indexOf(n) < 0 &&
									(a[n] = e[n]);
							if (
								null != e &&
								'function' == typeof Object.getOwnPropertySymbols
							) {
								var c = 0;
								for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
									t.indexOf(n[c]) < 0 &&
										Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
										(a[n[c]] = e[n[c]]);
							}
							return a;
						})(e, [
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
						F = f('card', g),
						H = 0 === P.padding || '0px' === P.padding ? {padding: 24} : void 0,
						J = r.createElement('div', {
							className: ''.concat(F, '-loading-block'),
						}),
						Q = r.createElement(
							'div',
							{className: ''.concat(F, '-loading-content'), style: H},
							r.createElement(
								p.Z,
								{gutter: 8},
								r.createElement(u.Z, {span: 22}, J)
							),
							r.createElement(
								p.Z,
								{gutter: 8},
								r.createElement(u.Z, {span: 8}, J),
								r.createElement(u.Z, {span: 15}, J)
							),
							r.createElement(
								p.Z,
								{gutter: 8},
								r.createElement(u.Z, {span: 6}, J),
								r.createElement(u.Z, {span: 18}, J)
							),
							r.createElement(
								p.Z,
								{gutter: 8},
								r.createElement(u.Z, {span: 13}, J),
								r.createElement(u.Z, {span: 9}, J)
							),
							r.createElement(
								p.Z,
								{gutter: 8},
								r.createElement(u.Z, {span: 4}, J),
								r.createElement(u.Z, {span: 3}, J),
								r.createElement(u.Z, {span: 16}, J)
							)
						),
						U = void 0 !== _,
						V = (0, c.Z)(
							(0, c.Z)({}, q),
							((a = {}),
							(0, n.Z)(a, U ? 'activeKey' : 'defaultActiveKey', U ? _ : L),
							(0, n.Z)(a, 'tabBarExtraContent', G),
							a)
						),
						W =
							A && A.length
								? r.createElement(
										m.Z,
										(0, c.Z)({size: 'large'}, V, {
											className: ''.concat(F, '-head-tabs'),
											onChange: function (t) {
												var a;
												null === (a = e.onTabChange) ||
													void 0 === a ||
													a.call(e, t);
											},
										}),
										A.map(function (e) {
											return r.createElement(m.Z.TabPane, {
												tab: e.tab,
												disabled: e.disabled,
												key: e.key,
											});
										})
								  )
								: null;
					(w || O || W) &&
						(b = r.createElement(
							'div',
							{className: ''.concat(F, '-head'), style: N},
							r.createElement(
								'div',
								{className: ''.concat(F, '-head-wrapper')},
								w &&
									r.createElement(
										'div',
										{className: ''.concat(F, '-head-title')},
										w
									),
								O &&
									r.createElement('div', {className: ''.concat(F, '-extra')}, O)
							),
							W
						));
					var X,
						Y = B
							? r.createElement('div', {className: ''.concat(F, '-cover')}, B)
							: null,
						$ = r.createElement(
							'div',
							{className: ''.concat(F, '-body'), style: P},
							j ? Q : I
						),
						ee =
							z && z.length
								? r.createElement(
										'ul',
										{className: ''.concat(F, '-actions')},
										(function (e) {
											return e.map(function (t, a) {
												return r.createElement(
													'li',
													{
														style: {width: ''.concat(100 / e.length, '%')},
														key: 'action-'.concat(a),
													},
													r.createElement('span', null, t)
												);
											});
										})(z)
								  )
								: null,
						te = (0, i.Z)(D, ['onTabChange']),
						ae = T || h,
						ne = o()(
							F,
							((l = {}),
							(0, n.Z)(l, ''.concat(F, '-loading'), j),
							(0, n.Z)(l, ''.concat(F, '-bordered'), k),
							(0, n.Z)(l, ''.concat(F, '-hoverable'), M),
							(0, n.Z)(
								l,
								''.concat(F, '-contain-grid'),
								(r.Children.forEach(e.children, function (e) {
									e && e.type && e.type === d && (X = !0);
								}),
								X)
							),
							(0, n.Z)(l, ''.concat(F, '-contain-tabs'), A && A.length),
							(0, n.Z)(l, ''.concat(F, '-').concat(ae), ae),
							(0, n.Z)(l, ''.concat(F, '-type-').concat(K), !!K),
							(0, n.Z)(l, ''.concat(F, '-rtl'), 'rtl' === E),
							l),
							Z
						);
					return r.createElement(
						'div',
						(0, c.Z)({ref: t}, te, {className: ne}),
						b,
						Y,
						$,
						ee
					);
				});
			(b.Grid = d),
				(b.Meta = function (e) {
					return r.createElement(s.C, null, function (t) {
						var a = t.getPrefixCls,
							n = e.prefixCls,
							l = e.className,
							i = e.avatar,
							s = e.title,
							d = e.description,
							m = (function (e, t) {
								var a = {};
								for (var n in e)
									Object.prototype.hasOwnProperty.call(e, n) &&
										t.indexOf(n) < 0 &&
										(a[n] = e[n]);
								if (
									null != e &&
									'function' == typeof Object.getOwnPropertySymbols
								) {
									var c = 0;
									for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
										t.indexOf(n[c]) < 0 &&
											Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
											(a[n[c]] = e[n[c]]);
								}
								return a;
							})(e, [
								'prefixCls',
								'className',
								'avatar',
								'title',
								'description',
							]),
							p = a('card', n),
							u = o()(''.concat(p, '-meta'), l),
							v = i
								? r.createElement(
										'div',
										{className: ''.concat(p, '-meta-avatar')},
										i
								  )
								: null,
							b = s
								? r.createElement(
										'div',
										{className: ''.concat(p, '-meta-title')},
										s
								  )
								: null,
							y = d
								? r.createElement(
										'div',
										{className: ''.concat(p, '-meta-description')},
										d
								  )
								: null,
							f =
								b || y
									? r.createElement(
											'div',
											{className: ''.concat(p, '-meta-detail')},
											b,
											y
									  )
									: null;
						return r.createElement(
							'div',
							(0, c.Z)({}, m, {className: u}),
							v,
							f
						);
					});
				});
			const y = b;
		},
	},
]);
