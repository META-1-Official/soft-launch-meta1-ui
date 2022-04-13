'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[288],
	{
		12787: (e, t, n) => {
			n.d(t, {Z: () => v});
			var r = n(67294),
				s = n(62254),
				o = n(58074),
				a = n.n(o),
				l = n(93205),
				i = n(37065),
				c = n(52233),
				u = n(39144),
				d = n(71577),
				p = n(55019),
				h = n(35944);
			function f(e) {
				return (
					(f =
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
					f(e)
				);
			}
			function w(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function y(e, t) {
				return (
					(y =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					y(e, t)
				);
			}
			function b(e, t) {
				if (t && ('object' === f(t) || 'function' == typeof t)) return t;
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
			function j(e) {
				return (
					(j = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					j(e)
				);
			}
			var v = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && y(e, t);
				})(v, e);
				var t,
					n,
					r,
					o,
					f =
						((r = v),
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
							} catch (e) {
								return !1;
							}
						})()),
						function () {
							var e,
								t = j(r);
							if (o) {
								var n = j(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return b(this, e);
						});
				function v() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, v),
						((e = f.call(this)).state = e._getInitialState()),
						e
					);
				}
				return (
					(t = v),
					(n = [
						{
							key: '_getInitialState',
							value: function () {
								return {password: null, brainkey: null, invalid_password: !1};
							},
						},
						{
							key: 'render',
							value: function () {
								var e,
									t = i.Z.getWallet().brainkey_backup_date,
									n = t
										? (0, h.jsxs)('div', {
												children: [
													(0, h.jsx)(a(), {
														content: 'wallet.brainkey_backed_up',
													}),
													':',
													' ',
													(0, h.jsx)(s.Ji, {value: t}),
												],
										  })
										: (0, h.jsx)(a(), {
												className: 'facolor-error',
												component: 'p',
												content: 'wallet.brainkey_not_backed_up',
										  });
								if (this.state.verified) {
									var r = c.vp
										.sha1(this.state.brainkey)
										.toString('hex')
										.substring(0, 4);
									e = (0, h.jsxs)('div', {
										children: [
											(0, h.jsx)('h3', {
												children: (0, h.jsx)(a(), {content: 'wallet.brainkey'}),
											}),
											(0, h.jsx)(u.Z, {children: this.state.brainkey}),
											(0, h.jsx)('br', {}),
											(0, h.jsxs)('pre', {
												className: 'no-overflow',
												children: ['sha1 hash of the brainkey: ', r],
											}),
											(0, h.jsx)('br', {}),
											n,
										],
									});
								}
								return (
									!e &&
										this.state.brainkey &&
										((r = c.vp
											.sha1(this.state.brainkey)
											.toString('hex')
											.substring(0, 4)),
										(e = (0, h.jsxs)('span', {
											children: [
												(0, h.jsx)('h3', {
													children: (0, h.jsx)(a(), {
														content: 'wallet.brainkey',
													}),
												}),
												(0, h.jsx)(u.Z, {children: this.state.brainkey}),
												(0, h.jsx)('div', {
													style: {padding: '10px 0'},
													children: (0, h.jsxs)('pre', {
														className: 'no-overflow',
														children: ['sha1 hash of your brainkey: ', r],
													}),
												}),
												(0, h.jsx)('hr', {}),
												(0, h.jsxs)('div', {
													style: {padding: '10px 0 20px 0'},
													children: [
														(0, h.jsx)(a(), {content: 'wallet.brainkey_w1'}),
														(0, h.jsx)('br', {}),
														(0, h.jsx)(a(), {content: 'wallet.brainkey_w2'}),
														(0, h.jsx)('br', {}),
														(0, h.jsx)(a(), {content: 'wallet.brainkey_w3'}),
													],
												}),
												(0, h.jsx)(d.Z, {
													type: 'primary',
													onClick: this.onComplete.bind(this),
													children: (0, h.jsx)(a(), {content: 'wallet.verify'}),
												}),
												(0, h.jsx)(d.Z, {
													type: 'default',
													onClick: this.reset.bind(this),
													children: (0, h.jsx)(a(), {content: 'wallet.cancel'}),
												}),
											],
										}))),
									e ||
										(this.state.password && this.state.password,
										(e = (0, h.jsxs)('span', {
											children: [
												(0, h.jsx)('label', {
													children: (0, h.jsx)(a(), {
														content: 'wallet.enter_password',
													}),
												}),
												(0, h.jsxs)('form', {
													onSubmit: this.onSubmit.bind(this),
													className: 'name-form',
													noValidate: !0,
													children: [
														(0, h.jsx)(p.Z, {
															type: 'password',
															id: 'password',
															onChange: this.onPassword.bind(this),
														}),
														(0, h.jsx)('p', {
															children: this.state.invalid_password
																? (0, h.jsx)('span', {
																		className: 'error',
																		children: 'Invalid password',
																  })
																: (0, h.jsx)('span', {
																		children: (0, h.jsx)(a(), {
																			content: 'wallet.pwd4brainkey',
																		}),
																  }),
														}),
														(0, h.jsxs)('div', {
															children: [n, (0, h.jsx)('br', {})],
														}),
														(0, h.jsx)(d.Z, {
															type: 'primary',
															children: (0, h.jsx)(a(), {
																content: 'wallet.show_brainkey',
															}),
														}),
													],
												}),
											],
										}))),
									(0, h.jsx)('div', {
										className: 'grid-block vertical',
										children: (0, h.jsx)('div', {
											className: 'grid-content no-overflow',
											children: e,
										}),
									})
								);
							},
						},
						{
							key: 'onComplete',
							value: function (e) {
								this.setState({verified: !0}), l.Z.setBrainkeyBackupDate();
							},
						},
						{
							key: 'reset',
							value: function (e) {
								e && e.preventDefault(), this.setState(this._getInitialState());
							},
						},
						{
							key: 'onBack',
							value: function (e) {
								e.preventDefault(), window.history.back();
							},
						},
						{
							key: 'onSubmit',
							value: function (e) {
								e.preventDefault();
								var t = i.Z.isLocked();
								if (i.Z.validatePassword(this.state.password, !0).success) {
									var n = i.Z.getBrainKey();
									t && i.Z.onLock(), this.setState({brainkey: n});
								} else this.setState({invalid_password: !0});
							},
						},
						{
							key: 'onPassword',
							value: function (e) {
								this.setState({password: e.target.value, invalid_password: !1});
							},
						},
					]) && w(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					v
				);
			})(r.Component);
		},
		40822: (e, t, n) => {
			n.d(t, {Z: () => M});
			var r = n(67294),
				s = n(53825),
				o = n(58074),
				a = n.n(o),
				l = n(37065),
				i = n(43393),
				c = n.n(i),
				u = n(94184),
				d = n.n(u),
				p = n(45697),
				h = n.n(p),
				f = n(112),
				w = n.n(f),
				y = n(22712),
				b = n(35944);
			function j(e) {
				return (
					(j =
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
					j(e)
				);
			}
			function v(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function m(e, t) {
				return (
					(m =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					m(e, t)
				);
			}
			function x(e, t) {
				if (t && ('object' === j(t) || 'function' == typeof t)) return t;
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
			function _(e) {
				return (
					(_ = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					_(e)
				);
			}
			var g,
				k,
				Z,
				O = y.Z.Item,
				C = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && m(e, t);
					})(a, e);
					var t,
						n,
						r,
						s,
						o =
							((r = a),
							(s = (function () {
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
									t = _(r);
								if (s) {
									var n = _(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return x(this, e);
							});
					function a() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, a),
							((e = o.call(this)).state = {
								password: '',
								confirm: '',
								errors: c().Map(),
								valid: !1,
							}),
							e
						);
					}
					return (
						(t = a),
						(n = [
							{
								key: 'componentDidMount',
								value: function () {
									this.refs.firstPassword && this.refs.firstPassword.focus();
								},
							},
							{
								key: 'formChange',
								value: function (e) {
									var t = {};
									(t[
										'current-password' === e.target.id ? 'password' : 'confirm'
									] = e.target.value),
										this.setState(t, this.validate);
								},
							},
							{
								key: 'validate',
								value: function () {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: this.state,
										t = e.password,
										n = e.confirm;
									(n = n.trim()), (t = t.trim());
									var r = c().Map();
									0 !== t.length &&
										t.length < 8 &&
										(r = r.set(
											'password_length',
											'Password must be 8 characters or more'
										)),
										'' !== t &&
											'' !== n &&
											t !== n &&
											(r = r.set('password_match', 'Passwords do not match'));
									var s = t.length >= 8 && t === n;
									this.setState({errors: r, valid: s}),
										this.props.onValid(s ? t : null);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this.state,
										t = e.password,
										n = e.confirm,
										r = e.errors,
										s = this.props.newPassword,
										o = 1;
									return (0, b.jsxs)('div', {
										className: d()({'has-error': r.size}),
										children: [
											(0, b.jsx)(O, {
												label: w().translate(
													s ? 'wallet.new_password' : 'wallet.password'
												),
												children: (0, b.jsx)('section', {
													children: (0, b.jsx)('input', {
														type: 'password',
														id: 'current-password',
														autoComplete: 'current-password',
														ref: 'firstPassword',
														onChange: this.formChange.bind(this),
														value: t,
														tabIndex: o++,
													}),
												}),
											}),
											(0, b.jsx)(O, {
												label: w().translate(
													s ? 'wallet.new_confirm' : 'wallet.confirm'
												),
												children: (0, b.jsx)('section', {
													children: (0, b.jsx)('input', {
														type: 'password',
														id: 'new-password',
														autoComplete: 'new-password',
														onChange: this.formChange.bind(this),
														value: n,
														tabIndex: o++,
													}),
												}),
											}),
											(0, b.jsx)('div', {
												style: {paddingBottom: 10},
												children:
													r.get('password_match') || r.get('password_length'),
											}),
											this.props.children,
											(0, b.jsx)('br', {}),
										],
									});
								},
							},
						]),
						n && v(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						a
					);
				})(r.Component);
			(g = C),
				(k = 'propTypes'),
				(Z = {onValid: h().func.isRequired}),
				k in g
					? Object.defineProperty(g, k, {
							value: Z,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (g[k] = Z);
			var S = n(38648),
				P = n(71577),
				N = n(55019),
				R = n(25108);
			function T(e) {
				return (
					(T =
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
					T(e)
				);
			}
			function E(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function B(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function D(e, t, n) {
				return (
					t && B(e.prototype, t),
					n && B(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function I(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && W(e, t);
			}
			function W(e, t) {
				return (
					(W =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					W(e, t)
				);
			}
			function V(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
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
				})();
				return function () {
					var n,
						r = z(e);
					if (t) {
						var s = z(this).constructor;
						n = Reflect.construct(r, arguments, s);
					} else n = r.apply(this, arguments);
					return A(this, n);
				};
			}
			function A(e, t) {
				if (t && ('object' === T(t) || 'function' == typeof t)) return t;
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
			function z(e) {
				return (
					(z = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					z(e)
				);
			}
			var L = y.Z.Item,
				M = (function (e) {
					I(n, e);
					var t = V(n);
					function n() {
						var e;
						return E(this, n), ((e = t.call(this)).state = {success: !1}), e;
					}
					return (
						D(n, [
							{
								key: 'onAccept',
								value: function (e) {
									var t = this;
									e.preventDefault();
									var n = this.state,
										r = n.old_password,
										s = n.new_password;
									l.Z.changePassword(r, s, !0)
										.then(function () {
											S.Z.success({
												message: w().translate(
													'notifications.password_change_success'
												),
											}),
												t.setState({success: !0});
										})
										.catch(function (e) {
											R.error(e),
												S.Z.error({
													message: w().translate(
														'notifications.password_change_failure',
														{error_msg: e}
													),
												});
										});
								},
							},
							{
								key: 'onOldPassword',
								value: function (e) {
									this.setState({old_password: e});
								},
							},
							{
								key: 'onNewPassword',
								value: function (e) {
									this.setState({new_password: e});
								},
							},
							{
								key: '_onCancel',
								value: function () {
									this.setState({old_password: ''}), this.refs.pwd.cancel();
								},
							},
							{
								key: 'render',
								value: function () {
									var e = !!this.state.new_password;
									return this.state.success
										? (0, b.jsxs)('div', {
												children: [
													(0, b.jsx)(a(), {
														component: 'p',
														content: 'wallet.change_success',
													}),
													(0, b.jsx)(a(), {
														component: 'p',
														content: 'wallet.change_backup',
													}),
													(0, b.jsx)(s.Z, {
														to: '/wallet/backup/create',
														children: (0, b.jsx)(P.Z, {
															children: (0, b.jsx)(a(), {
																content: 'wallet.create_backup',
															}),
														}),
													}),
												],
										  })
										: (0, b.jsx)('span', {
												children: (0, b.jsx)($, {
													ref: 'pwd',
													onValid: this.onOldPassword.bind(this),
													children: (0, b.jsxs)(C, {
														onSubmit: this.onAccept.bind(this),
														newPassword: !0,
														onValid: this.onNewPassword.bind(this),
														children: [
															(0, b.jsx)(P.Z, {
																type: 'primary',
																disabled: !e,
																htmlType: 'submit',
																style: {marginRight: '16px'},
																onClick: this.onAccept.bind(this),
																children: (0, b.jsx)(a(), {
																	content: 'wallet.accept',
																}),
															}),
															(0, b.jsx)(P.Z, {
																onClick: this._onCancel.bind(this),
																children: (0, b.jsx)(a(), {
																	content: 'wallet.cancel',
																}),
															}),
														],
													}),
												}),
										  });
								},
							},
						]),
						n
					);
				})(r.Component),
				$ = (function (e) {
					I(n, e);
					var t = V(n);
					function n() {
						var e;
						return (
							E(this, n),
							((e = t.call(this)).state = {password: '', verified: !1}),
							e
						);
					}
					return (
						D(n, [
							{
								key: 'cancel',
								value: function () {
									this.setState({verified: !1, password: ''});
								},
							},
							{
								key: 'onPassword',
								value: function (e) {
									e.preventDefault(),
										l.Z.validatePassword(this.state.password, !0).success
											? (this.setState({verified: !0}),
											  this.props.onValid(this.state.password))
											: S.Z.error({
													message: w().translate(
														'notifications.invalid_password'
													),
											  });
								},
							},
							{
								key: 'formChange',
								value: function (e) {
									var t = {};
									(t[e.target.id] = e.target.value), this.setState(t);
								},
							},
							{
								key: 'render',
								value: function () {
									return this.state.verified
										? (0, b.jsx)('div', {
												className: 'grid-content',
												children: this.props.children,
										  })
										: (0, b.jsx)(y.Z, {
												onSubmit: this.onPassword.bind(this),
												children: (0, b.jsxs)(L, {
													label: w().translate('wallet.existing_password'),
													children: [
														(0, b.jsx)('section', {
															children: (0, b.jsx)(N.Z, {
																placeholder: w().translate(
																	'wallet.current_pass'
																),
																type: 'password',
																id: 'password',
																autoComplete: 'current-password',
																onChange: this.formChange.bind(this),
																value: this.state.password,
															}),
														}),
														(0, b.jsx)(P.Z, {
															type: 'primary',
															children: (0, b.jsx)(a(), {
																content: 'wallet.submit',
															}),
														}),
													],
												}),
										  });
								},
							},
						]),
						n
					);
				})(r.Component);
			!(function (e, t, n) {
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = n);
			})($, 'propTypes', {onValid: h().func.isRequired}),
				r.Component;
		},
		288: (e, t, n) => {
			n.r(t),
				n.d(t, {
					ChangeActiveWallet: () => M,
					WalletDelete: () => $,
					WalletOptions: () => L,
					default: () => q,
				});
			var r = n(67294),
				s = n(53825),
				o = n(11230),
				a = n(93205),
				l = n(78419),
				i = n(2362),
				c = n(58074),
				u = n.n(c),
				d = (n(94184), n(112)),
				p = n.n(d),
				h = n(45424),
				f = n(15028),
				w = n(65931),
				y = n(15947),
				b = n(76685),
				j = n(40822),
				v = n(18153),
				m = n(99545),
				x = n(12787),
				_ = n(22712),
				g = n(42239),
				k = n(39144),
				Z = n(55019),
				O = n(71577),
				C = n(35944);
			function S(e) {
				return (
					(S =
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
					S(e)
				);
			}
			function P(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function N(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function R(e, t, n) {
				return (
					t && N(e.prototype, t),
					n && N(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function T(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && E(e, t);
			}
			function E(e, t) {
				return (
					(E =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					E(e, t)
				);
			}
			function B(e) {
				var t = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
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
				})();
				return function () {
					var n,
						r = I(e);
					if (t) {
						var s = I(this).constructor;
						n = Reflect.construct(r, arguments, s);
					} else n = r.apply(this, arguments);
					return D(this, n);
				};
			}
			function D(e, t) {
				if (t && ('object' === S(t) || 'function' == typeof t)) return t;
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
			function I(e) {
				return (
					(I = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					I(e)
				);
			}
			var W = _.Z.Item,
				V = g.Z.Option,
				A = {
					listenTo: function () {
						return [i.Z];
					},
					getProps: function () {
						return i.Z.getState();
					},
				},
				z = (function (e) {
					T(n, e);
					var t = B(n);
					function n() {
						return P(this, n), t.apply(this, arguments);
					}
					return (
						R(n, [
							{
								key: 'getTitle',
								value: function () {
									switch (this.props.location.pathname) {
										case '/wallet/create':
											return 'wallet.create_wallet';
										case '/wallet/backup/create':
											return 'wallet.create_backup';
										case '/wallet/backup/restore':
											return 'wallet.restore_backup';
										case '/wallet/backup/brainkey':
											return 'wallet.backup_brainkey';
										case '/wallet/delete':
											return 'wallet.delete_wallet';
										case '/wallet/change-password':
											return 'wallet.change_password';
										case '/wallet/import-keys':
											return 'wallet.import_keys';
										default:
											return 'wallet.console';
									}
								},
							},
							{
								key: 'render',
								value: function () {
									return (0, C.jsx)('div', {
										className: 'grid-block vertical',
										children: (0, C.jsx)('div', {
											className: 'grid-container',
											style: {maxWidth: '40rem'},
											children: (0, C.jsxs)('div', {
												className: 'content-block',
												children: [
													(0, C.jsx)('div', {
														className: 'page-header',
														children: (0, C.jsx)(u(), {
															component: 'h3',
															content: this.getTitle(),
														}),
													}),
													(0, C.jsx)('div', {
														className: 'content-block',
														children: (0, C.jsxs)(h.Z, {
															children: [
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet',
																	component: L,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/change',
																	component: M,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/change-password',
																	component: j.Z,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/import-keys',
																	component: y.Z,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/brainkey',
																	component: w.ExistingAccountOptions,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/create',
																	component: v.z,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/delete',
																	component: $,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/backup/restore',
																	component: m.aQ,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/backup/create',
																	component: m.Yy,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/backup/brainkey',
																	component: x.Z,
																}),
																(0, C.jsx)(f.Z, {
																	exact: !0,
																	path: '/wallet/balance-claims',
																	component: b.Z,
																}),
															],
														}),
													}),
												],
											}),
										}),
									});
								},
							},
						]),
						n
					);
				})(r.Component);
			z = (0, o.$)(z, A);
			var L = (function (e) {
				T(n, e);
				var t = B(n);
				function n() {
					return P(this, n), t.apply(this, arguments);
				}
				return (
					R(n, [
						{
							key: 'render',
							value: function () {
								var e = !!this.props.current_wallet,
									t = this.props.wallet_names.size > 1,
									n = this.props.current_wallet
										? this.props.current_wallet.toUpperCase()
										: '';
								return (0, C.jsxs)('span', {
									children: [
										(0, C.jsxs)('div', {
											className: 'grid-block',
											children: [
												(0, C.jsx)('div', {
													className: 'grid-content',
													children: (0, C.jsxs)(k.Z, {
														children: [
															(0, C.jsxs)('label', {
																children: [
																	(0, C.jsx)(u(), {
																		content: 'wallet.active_wallet',
																	}),
																	':',
																],
															}),
															(0, C.jsx)('div', {children: n}),
															(0, C.jsx)('br', {}),
															t
																? (0, C.jsx)(s.Z, {
																		to: '/wallet/change',
																		children: (0, C.jsx)('div', {
																			className: 'button outline success',
																			children: (0, C.jsx)(u(), {
																				content: 'wallet.change_wallet',
																			}),
																		}),
																  })
																: null,
														],
													}),
												}),
												(0, C.jsx)('div', {
													className: 'grid-content',
													children: (0, C.jsxs)(k.Z, {
														children: [
															(0, C.jsx)('label', {
																children: (0, C.jsx)(u(), {
																	content: 'wallet.import_keys_tool',
																}),
															}),
															(0, C.jsx)('div', {
																style: {visibility: 'hidden'},
																children: 'Dummy',
															}),
															(0, C.jsx)('br', {}),
															e
																? (0, C.jsx)(s.Z, {
																		to: '/wallet/import-keys',
																		children: (0, C.jsx)('div', {
																			className: 'button outline success',
																			children: (0, C.jsx)(u(), {
																				content: 'wallet.import_keys',
																			}),
																		}),
																  })
																: null,
														],
													}),
												}),
												e
													? (0, C.jsx)('div', {
															className: 'grid-content',
															children: (0, C.jsxs)(k.Z, {
																children: [
																	(0, C.jsx)('label', {
																		children: (0, C.jsx)(u(), {
																			content: 'wallet.balance_claims',
																		}),
																	}),
																	(0, C.jsx)('div', {
																		style: {visibility: 'hidden'},
																		children: 'Dummy',
																	}),
																	(0, C.jsx)('br', {}),
																	(0, C.jsx)(s.Z, {
																		to: '/wallet/balance-claims',
																		children: (0, C.jsx)('div', {
																			className: 'button outline success',
																			children: (0, C.jsx)(u(), {
																				content: 'wallet.balance_claim_lookup',
																			}),
																		}),
																	}),
																],
															}),
													  })
													: null,
											],
										}),
										e
											? (0, C.jsx)(s.Z, {
													to: '/wallet/backup/create',
													children: (0, C.jsx)('div', {
														className: 'button outline success',
														children: (0, C.jsx)(u(), {
															content: 'wallet.create_backup',
														}),
													}),
											  })
											: null,
										e
											? (0, C.jsx)(s.Z, {
													to: '/wallet/backup/brainkey',
													children: (0, C.jsx)('div', {
														className: 'button outline success',
														children: (0, C.jsx)(u(), {
															content: 'wallet.backup_brainkey',
														}),
													}),
											  })
											: null,
										(0, C.jsx)(s.Z, {
											to: '/wallet/backup/restore',
											children: (0, C.jsx)('div', {
												className: 'button outline success',
												children: (0, C.jsx)(u(), {
													content: 'wallet.restore_backup',
												}),
											}),
										}),
										(0, C.jsx)('br', {}),
										e ? (0, C.jsx)('br', {}) : null,
										(0, C.jsx)(s.Z, {
											to: '/wallet/create',
											children: (0, C.jsx)('div', {
												className: 'button outline success',
												children: (0, C.jsx)(u(), {
													content: 'wallet.new_wallet',
												}),
											}),
										}),
										e
											? (0, C.jsx)(s.Z, {
													to: '/wallet/delete',
													children: (0, C.jsx)('div', {
														className: 'button outline success',
														children: (0, C.jsx)(u(), {
															content: 'wallet.delete_wallet',
														}),
													}),
											  })
											: null,
										e
											? (0, C.jsx)(s.Z, {
													to: '/wallet/change-password',
													children: (0, C.jsx)('div', {
														className: 'button outline success',
														children: (0, C.jsx)(u(), {
															content: 'wallet.change_password',
														}),
													}),
											  })
											: null,
									],
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			L = (0, o.$)(L, A);
			var M = (function (e) {
				T(n, e);
				var t = B(n);
				function n() {
					var e;
					return P(this, n), ((e = t.call(this)).state = {}), e;
				}
				return (
					R(n, [
						{
							key: 'componentWillMount',
							value: function () {
								var e = this.props.current_wallet;
								this.setState({current_wallet: e});
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								e.current_wallet !== this.state.current_wallet &&
									this.setState({current_wallet: e.current_wallet});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = i.Z.getState(),
									t = [];
								e.wallet_names.forEach(function (e) {
									t.push(
										(0, C.jsx)(V, {value: e, children: e.toLowerCase()}, e)
									);
								});
								var n = this.state.current_wallet !== this.props.current_wallet;
								return (0, C.jsxs)('div', {
									children: [
										(0, C.jsx)('section', {
											children: (0, C.jsx)(W, {
												label: p().translate('wallet.active_wallet'),
												className: 'no-offset',
												children: (0, C.jsx)('ul', {
													className: 'unstyled-list',
													children: (0, C.jsx)('li', {
														className: 'with-dropdown',
														style: {borderBottom: 0},
														children:
															e.wallet_names.count() <= 1
																? (0, C.jsx)(Z.Z, {
																		className: 'settings--input',
																		defaultValue: this.state.current_wallet,
																		disabled: !0,
																  })
																: (0, C.jsx)(g.Z, {
																		className: 'settings--select',
																		value: this.state.current_wallet,
																		onChange: this.onChange.bind(this),
																		children: t,
																  }),
													}),
												}),
											}),
										}),
										(0, C.jsx)(s.Z, {
											to: '/wallet/create',
											children: (0, C.jsx)(O.Z, {
												style: {marginRight: '16px'},
												children: (0, C.jsx)(u(), {
													content: 'wallet.new_wallet',
												}),
											}),
										}),
										n
											? (0, C.jsx)(O.Z, {
													onClick: this.onConfirm.bind(this),
													children: (0, C.jsx)(u(), {
														content: 'wallet.change',
														name: this.state.current_wallet,
													}),
											  })
											: null,
									],
								});
							},
						},
						{
							key: 'onConfirm',
							value: function () {
								a.Z.setWallet(this.state.current_wallet), l.ZP.reset();
							},
						},
						{
							key: 'onChange',
							value: function (e) {
								var t = e;
								this.setState({current_wallet: t});
							},
						},
					]),
					n
				);
			})(r.Component);
			M = (0, o.$)(M, A);
			var $ = (function (e) {
				T(n, e);
				var t = B(n);
				function n() {
					var e;
					return (
						P(this, n),
						((e = t.call(this)).state = {selected_wallet: null, confirm: 0}),
						e
					);
				}
				return (
					R(n, [
						{
							key: '_onCancel',
							value: function () {
								this.setState({confirm: 0, selected_wallet: null});
							},
						},
						{
							key: 'render',
							value: function () {
								if (1 === this.state.confirm)
									return (0, C.jsxs)('div', {
										style: {paddingTop: 20},
										children: [
											(0, C.jsx)('h4', {
												children: (0, C.jsx)(u(), {
													content: 'wallet.delete_confirm_line1',
												}),
											}),
											(0, C.jsx)(u(), {
												component: 'p',
												content: 'wallet.delete_confirm_line3',
											}),
											(0, C.jsx)('br', {}),
											(0, C.jsx)(O.Z, {
												onClick: this.onConfirm2.bind(this),
												style: {marginRight: '16px'},
												children: (0, C.jsx)(u(), {
													content: 'wallet.delete_confirm_line4',
													name: this.state.selected_wallet,
												}),
											}),
											(0, C.jsx)(O.Z, {
												onClick: this._onCancel.bind(this),
												children: (0, C.jsx)(u(), {content: 'wallet.cancel'}),
											}),
										],
									});
								var e = [
									(0, C.jsx)(
										V,
										{
											value: ' ',
											disabled: this.props.wallet_names.size > 1,
											children: ' ',
										},
										'placeholder'
									),
								];
								e.push(
									(0, C.jsxs)(
										V,
										{
											value: '',
											children: [p().translate('settings.delete_select'), '…'],
										},
										'select_option'
									)
								),
									this.props.wallet_names.forEach(function (t) {
										e.push(
											(0, C.jsx)(V, {value: t, children: t.toLowerCase()}, t)
										);
									});
								var t = !!this.state.selected_wallet;
								return (0, C.jsxs)('div', {
									style: {paddingTop: 20},
									children: [
										(0, C.jsx)('section', {
											children: (0, C.jsx)(W, {
												label: p().translate('wallet.delete_wallet'),
												className: 'no-offset',
												children: (0, C.jsx)('ul', {
													className: 'unstyled-list',
													children: (0, C.jsx)('li', {
														className: 'with-dropdown',
														style: {borderBottom: 0},
														children: (0, C.jsx)(g.Z, {
															className: 'settings--select',
															value: this.state.selected_wallet || '',
															style: {margin: '0 auto'},
															onChange: this.onChange.bind(this),
															children: e,
														}),
													}),
												}),
											}),
										}),
										(0, C.jsx)(O.Z, {
											disabled: !t,
											onClick: this.onConfirm.bind(this),
											children: (0, C.jsx)(u(), {
												content: this.state.selected_wallet
													? 'wallet.delete_wallet_name'
													: 'wallet.delete_wallet',
												name: this.state.selected_wallet,
											}),
										}),
									],
								});
							},
						},
						{
							key: 'onConfirm',
							value: function () {
								this.setState({confirm: 1});
							},
						},
						{
							key: 'onConfirm2',
							value: function () {
								a.Z.deleteWallet(this.state.selected_wallet), this._onCancel();
							},
						},
						{
							key: 'onChange',
							value: function (e) {
								this.setState({selected_wallet: e});
							},
						},
					]),
					n
				);
			})(r.Component);
			$ = (0, o.$)($, A);
			const q = z;
		},
	},
]);
