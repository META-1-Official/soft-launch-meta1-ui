(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[931],
	{
		99545: (e, t, n) => {
			'use strict';
			n.d(t, {Yy: () => W, aQ: () => D});
			var r = n(67294),
				o = n(45697),
				i = n.n(o),
				s = n(53825),
				a = n(62254),
				c = n(11230),
				l = n(93205),
				u = n(2362),
				f = n(50805),
				p = n(37065),
				h = n(78419),
				y = n(78598),
				d = n(58074),
				b = n.n(d),
				v = n(52233),
				m = n(60521),
				_ = n(89189),
				j = n(5675),
				g = n(71577),
				w = n(55019),
				x = n(112),
				k = n.n(x),
				O = n(35944),
				S = n(25108);
			function P(e) {
				return (
					(P =
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
					P(e)
				);
			}
			function C(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Z(e, t) {
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
					t && Z(e.prototype, t),
					n && Z(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function B(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && T(e, t);
			}
			function T(e, t) {
				return (
					(T =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					T(e, t)
				);
			}
			function A(e) {
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
						r = N(e);
					if (t) {
						var o = N(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return E(this, n);
				};
			}
			function E(e, t) {
				if (t && ('object' === P(t) || 'function' == typeof t)) return t;
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
			function N(e) {
				return (
					(N = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					N(e)
				);
			}
			var I = {
					listenTo: function () {
						return [u.Z, f.Z];
					},
					getProps: function () {
						return {wallet: u.Z.getState(), backup: f.Z.getState()};
					},
				},
				W = (function (e) {
					B(n, e);
					var t = A(n);
					function n() {
						return C(this, n), t.apply(this, arguments);
					}
					return (
						R(n, [
							{
								key: 'render',
								value: function () {
									return (0, O.jsx)('div', {
										style: {maxWidth: '40rem'},
										children: (0, O.jsxs)($, {
											noText: this.props.noText,
											newAccount:
												this.props.location && this.props.location.query
													? this.props.location.query.newAccount
													: null,
											children: [
												(0, O.jsx)(U, {}),
												this.props.noText ? null : (0, O.jsx)(G, {}),
												(0, O.jsx)(M, {downloadCb: this.props.downloadCb}),
											],
										}),
									});
								},
							},
						]),
						n
					);
				})(r.Component);
			W = (0, c.$)(W, I);
			var D = (function (e) {
				B(n, e);
				var t = A(n);
				function n() {
					var e;
					return (
						C(this, n), ((e = t.call(this)).state = {newWalletName: null}), e
					);
				}
				return (
					R(n, [
						{
							key: 'componentWillMount',
							value: function () {
								h.ZP.reset();
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props.wallet.new_wallet,
									t =
										(this.props.wallet.wallet_names.has(e),
										(0, O.jsx)(s.Z, {
											to: '/help/introduction/wallets',
											children: k().translate('wallet.wallet_types'),
										})),
									n = (0, O.jsx)(s.Z, {
										to: '/help/introduction/backups',
										children: k().translate('wallet.backup_types'),
									});
								return (0, O.jsxs)('div', {
									children: [
										(0, O.jsx)(b(), {
											style: {textAlign: 'left', maxWidth: '30rem'},
											component: 'p',
											content: 'wallet.import_backup_choose',
										}),
										(0, O.jsx)(b(), {
											className: 'text-left',
											component: 'p',
											wallet: t,
											backup: n,
											content: 'wallet.read_more',
										}),
										new FileReader().readAsBinaryString
											? null
											: (0, O.jsx)('p', {
													className: 'error',
													children:
														"Warning! You browser doesn't support some some file operations required to restore backup, we recommend you to use Chrome or Firefox browsers to restore your backup.",
											  }),
										(0, O.jsxs)(F, {
											children: [
												(0, O.jsx)(U, {}),
												(0, O.jsx)(H, {
													saveWalletObject: !0,
													children: (0, O.jsx)(K, {
														children: (0, O.jsx)(z, {}),
													}),
												}),
											],
										}),
										(0, O.jsx)('br', {}),
										(0, O.jsx)(s.Z, {
											to: '/market/META1_USDT',
											children: (0, O.jsx)(g.Z, {
												children: (0, O.jsx)(b(), {content: 'wallet.back'}),
											}),
										}),
									],
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			D = (0, c.$)(D, I);
			var z = (function (e) {
				B(n, e);
				var t = A(n);
				function n() {
					var e;
					return C(this, n), ((e = t.call(this)).state = {}), e;
				}
				return (
					R(n, [
						{
							key: 'isRestored',
							value: function () {
								var e = this.props.wallet.new_wallet;
								return this.props.wallet.wallet_names.has(e);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this.props.wallet.new_wallet;
								return this.isRestored()
									? (0, O.jsxs)('span', {
											children: [
												(0, O.jsx)('h5', {
													children: (0, O.jsx)(b(), {
														content: 'wallet.restore_success',
														name: e.toUpperCase(),
													}),
												}),
												(0, O.jsx)(s.Z, {
													to: '/market/META1_USDT',
													children: (0, O.jsx)(g.Z, {
														type: 'primary',
														children: (0, O.jsx)(b(), {
															component: 'span',
															content: 'header.dashboard',
														}),
													}),
												}),
												(0, O.jsx)('div', {children: this.props.children}),
											],
									  })
									: (0, O.jsxs)('span', {
											children: [
												(0, O.jsx)('h3', {
													children: (0, O.jsx)(b(), {
														content: 'wallet.ready_to_restore',
													}),
												}),
												(0, O.jsx)(g.Z, {
													type: 'primary',
													onClick: this.onRestore.bind(this),
													children: (0, O.jsx)(b(), {
														content: 'wallet.restore_wallet_of',
														name: e,
													}),
												}),
											],
									  });
							},
						},
						{
							key: 'onRestore',
							value: function () {
								l.Z.restore(
									this.props.wallet.new_wallet,
									this.props.backup.wallet_object
								),
									m.Z.changeSetting({setting: 'passwordLogin', value: !1});
							},
						},
					]),
					n
				);
			})(r.Component);
			z = (0, c.$)(z, I);
			var K = (function (e) {
				B(n, e);
				var t = A(n);
				function n() {
					var e;
					return (
						C(this, n),
						((e = t.call(this)).state = {new_wallet: null, accept: !1}),
						e
					);
				}
				return (
					R(n, [
						{
							key: 'componentWillMount',
							value: function () {
								var e = !!this.props.wallet.current_wallet;
								if (!e) {
									var t = 'default';
									this.props.backup.name &&
										(t = this.props.backup.name.match(/[a-z0-9_-]*/)[0]),
										u.Z.setNewWallet(t),
										this.setState({accept: !0});
								}
								if (e && this.props.backup.name && !this.state.new_wallet) {
									var n = this.props.backup.name
										.toLowerCase()
										.match(/[a-z0-9_-]*/)[0];
									n && this.setState({new_wallet: n});
								}
							},
						},
						{
							key: 'render',
							value: function () {
								if (this.state.accept)
									return (0, O.jsx)('span', {children: this.props.children});
								var e = !!this.state.new_wallet,
									t =
										!!e &&
										this.props.wallet.wallet_names.has(this.state.new_wallet),
									n = !t && e;
								return (0, O.jsxs)('form', {
									onSubmit: this.onAccept.bind(this),
									children: [
										(0, O.jsx)('h5', {
											children: (0, O.jsx)(b(), {
												content: 'wallet.new_wallet_name',
											}),
										}),
										(0, O.jsx)(w.Z, {
											type: 'text',
											id: 'new_wallet',
											onChange: this.formChange.bind(this),
											value: this.state.new_wallet,
										}),
										(0, O.jsx)('p', {
											children: t
												? (0, O.jsx)(b(), {content: 'wallet.wallet_exist'})
												: null,
										}),
										(0, O.jsx)(g.Z, {
											onClick: this.onAccept.bind(this),
											type: 'primary',
											disabled: !n,
											children: (0, O.jsx)(b(), {content: 'wallet.accept'}),
										}),
									],
								});
							},
						},
						{
							key: 'onAccept',
							value: function (e) {
								e && e.preventDefault(),
									this.setState({accept: !0}),
									u.Z.setNewWallet(this.state.new_wallet);
							},
						},
						{
							key: 'formChange',
							value: function (e) {
								var t = e.target.id,
									n = e.target.value;
								if (
									'new_wallet' !== t ||
									((n = n.toLowerCase()), !/[^a-z0-9_-]/.test(n))
								) {
									var r = {};
									(r[t] = n), this.setState(r);
								}
							},
						},
					]),
					n
				);
			})(r.Component);
			K = (0, c.$)(K, I);
			var M = (function (e) {
				B(n, e);
				var t = A(n);
				function n() {
					return C(this, n), t.apply(this, arguments);
				}
				return (
					R(n, [
						{
							key: 'componentWillMount',
							value: function () {
								try {
									this.isFileSaverSupported = !!new Blob();
								} catch (e) {}
							},
						},
						{
							key: 'componentDidMount',
							value: function () {
								this.isFileSaverSupported ||
									notification.error({
										message: k().translate(
											'notifications.backup_file_save_unsupported'
										),
									}),
									this.props.confirmation && this.createBackup();
							},
						},
						{
							key: 'getBackupName',
							value: function () {
								return (0, _.a)(this.props.wallet.current_wallet);
							},
						},
						{
							key: 'createBackup',
							value: function () {
								var e = this,
									t = p.Z.getWallet().password_pubkey;
								(0, h.D$)(t).then(function (t) {
									var n = e.getBackupName();
									h.ZP.incommingBuffer({name: n, contents: t});
								});
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this,
									t = !0;
								return (
									this.props.confirmation && (t = this.props.checkboxActive),
									(0, O.jsx)(g.Z, {
										type: 'primary',
										disabled: !t,
										onClick: function () {
											e.onDownload();
										},
										style: this.props.confirmation
											? {height: 'initial', padding: 0}
											: {},
										children: this.props.confirmation
											? (0, O.jsxs)('div', {
													className: 'download-block',
													style: {padding: '1.25rem'},
													children: [
														(0, O.jsx)('img', {
															className: 'bin-img',
															src: '/bin-file/default.svg',
															alt: 'bin',
														}),
														(0, O.jsxs)('span', {
															className: 'text-left',
															children: [
																(0, O.jsx)(b(), {
																	className: 'download-text',
																	content: 'registration.downloadFile',
																}),
																(0, O.jsx)('p', {
																	className: 'file-name',
																	style: {marginBottom: 0},
																	children: this.props.backup.name,
																}),
															],
														}),
													],
											  })
											: (0, O.jsx)(b(), {content: 'wallet.download'}),
									})
								);
							},
						},
						{
							key: 'onDownload',
							value: function () {
								var e = new Blob([this.props.backup.contents], {
									type: 'application/octet-stream; charset=us-ascii',
								});
								if (e.size !== this.props.backup.size)
									throw new Error('Invalid backup to download conversion');
								(0, y.saveAs)(e, this.props.backup.name),
									l.Z.setBackupDate(),
									this.props.downloadCb && this.props.downloadCb();
							},
						},
					]),
					n
				);
			})(r.Component);
			M = (0, c.$)(M, I);
			var $ = (function (e) {
				B(n, e);
				var t = A(n);
				function n() {
					return C(this, n), t.apply(this, arguments);
				}
				return (
					R(n, [
						{
							key: 'getBackupName',
							value: function () {
								return (0, _.a)(this.props.wallet.current_wallet);
							},
						},
						{
							key: 'render',
							value: function () {
								if (this.props.backup.contents)
									return (0, O.jsx)('div', {children: this.props.children});
								var e = null != p.Z.getWallet();
								return (0, O.jsxs)('div', {
									children: [
										this.props.noText
											? null
											: (0, O.jsxs)('div', {
													style: {textAlign: 'left'},
													children: [
														this.props.newAccount
															? (0, O.jsx)(b(), {
																	component: 'p',
																	content: 'wallet.backup_new_account',
																	wallet_name: (0, j.w)(),
															  })
															: null,
														(0, O.jsx)(b(), {
															component: 'p',
															content: 'wallet.backup_explain',
														}),
													],
											  }),
										(0, O.jsx)(g.Z, {
											type: 'primary',
											onClick: this.onCreateBackup.bind(this),
											style: {marginBottom: 10},
											disabled: !e,
											children: (0, O.jsx)(b(), {
												content: 'wallet.create_backup_of',
												name: this.props.wallet.current_wallet,
											}),
										}),
										(0, O.jsx)(q, {}),
									],
								});
							},
						},
						{
							key: 'onCreateBackup',
							value: function () {
								var e = this,
									t = p.Z.getWallet().password_pubkey;
								(0, h.D$)(t).then(function (t) {
									var n = e.getBackupName();
									h.ZP.incommingBuffer({name: n, contents: t});
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			$ = (0, c.$)($, I);
			var q = (function (e) {
					B(n, e);
					var t = A(n);
					function n() {
						return C(this, n), t.apply(this, arguments);
					}
					return (
						R(n, [
							{
								key: 'render',
								value: function () {
									if (!p.Z.getWallet()) return null;
									var e = p.Z.getWallet().backup_date,
										t = p.Z.getWallet().last_modified,
										n = e
											? (0, O.jsxs)('h4', {
													children: [
														(0, O.jsx)(b(), {content: 'wallet.last_backup'}),
														' ',
														(0, O.jsx)(a.Ji, {value: e}),
													],
											  })
											: (0, O.jsx)(b(), {
													style: {paddingTop: 20},
													className: 'facolor-error',
													component: 'p',
													content: 'wallet.never_backed_up',
											  }),
										r = null;
									return (
										e &&
											(r =
												t.getTime() > e.getTime()
													? (0, O.jsx)('h4', {
															className: 'facolor-error',
															children: (0, O.jsx)(b(), {
																content: 'wallet.need_backup',
															}),
													  })
													: (0, O.jsx)('h4', {
															className: 'success',
															children: (0, O.jsx)(b(), {
																content: 'wallet.noneed_backup',
															}),
													  })),
										(0, O.jsxs)('span', {children: [n, r]})
									);
								},
							},
						]),
						n
					);
				})(r.Component),
				F = (function (e) {
					B(n, e);
					var t = A(n);
					function n() {
						return C(this, n), t.apply(this, arguments);
					}
					return (
						R(n, [
							{
								key: 'reset',
								value: function () {
									h.ZP.reset();
								},
							},
							{
								key: 'render',
								value: function () {
									var e = (0, O.jsx)('div', {
										style: {paddingTop: 20},
										children: (0, O.jsx)(g.Z, {
											disabled: !this.props.backup.contents,
											onClick: this.reset.bind(this),
											children: (0, O.jsx)(b(), {content: 'wallet.reset'}),
										}),
									});
									if (
										this.props.backup.contents &&
										this.props.backup.public_key
									)
										return (0, O.jsxs)('span', {
											children: [this.props.children, e],
										});
									var t =
										this.props.backup.contents && !this.props.backup.public_key;
									return (0, O.jsxs)('div', {
										children: [
											(0, O.jsx)('input', {
												ref: 'file_input',
												accept: '.bin',
												type: 'file',
												id: 'backup_input_file',
												style: {border: 'solid'},
												onChange: this.onFileUpload.bind(this),
											}),
											t
												? (0, O.jsx)('h5', {
														children: (0, O.jsx)(b(), {
															content: 'wallet.invalid_format',
														}),
												  })
												: null,
											e,
										],
									});
								},
							},
							{
								key: 'onFileUpload',
								value: function (e) {
									var t = e.target.files[0];
									h.ZP.incommingWebFile(t), this.forceUpdate();
								},
							},
						]),
						n
					);
				})(r.Component);
			F = (0, c.$)(F, I);
			var U = (function (e) {
				B(n, e);
				var t = A(n);
				function n() {
					return C(this, n), t.apply(this, arguments);
				}
				return (
					R(n, [
						{
							key: 'render',
							value: function () {
								return (0, O.jsxs)('span', {
									children: [
										(0, O.jsxs)('h5', {
											children: [
												(0, O.jsx)('b', {children: this.props.backup.name}),
												' (',
												this.props.backup.size,
												' bytes)',
											],
										}),
										this.props.backup.last_modified
											? (0, O.jsx)('div', {
													children: this.props.backup.last_modified,
											  })
											: null,
										(0, O.jsx)('br', {}),
									],
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			U = (0, c.$)(U, I);
			var L,
				Q,
				J,
				H = (function (e) {
					B(n, e);
					var t = A(n);
					function n() {
						var e;
						return (
							C(this, n), ((e = t.call(this)).state = e._getInitialState()), e
						);
					}
					return (
						R(n, [
							{
								key: '_getInitialState',
								value: function () {
									return {backup_password: '', verified: !1};
								},
							},
							{
								key: 'render',
								value: function () {
									return this.state.verified
										? (0, O.jsx)('span', {children: this.props.children})
										: (0, O.jsxs)('form', {
												onSubmit: this.onPassword.bind(this),
												children: [
													(0, O.jsx)('label', {
														children: (0, O.jsx)(b(), {
															content: 'wallet.enter_password',
														}),
													}),
													(0, O.jsx)(w.Z, {
														type: 'password',
														id: 'backup_password',
														onChange: this.formChange.bind(this),
														value: this.state.backup_password,
													}),
													(0, O.jsx)(G, {}),
													(0, O.jsx)(g.Z, {
														type: 'primary',
														htmlType: 'submit',
														onClick: this.onPassword.bind(this),
														children: (0, O.jsx)(b(), {
															content: 'wallet.submit',
														}),
													}),
												],
										  });
								},
							},
							{
								key: 'onPassword',
								value: function (e) {
									var t = this;
									e && e.preventDefault();
									var n = v._q.fromSeed(this.state.backup_password || ''),
										r = this.props.backup.contents;
									(0, h.ah)(n.toWif(), r)
										.then(function (e) {
											t.setState({verified: !0}),
												t.props.saveWalletObject && f.Z.setWalletObjct(e);
										})
										.catch(function (e) {
											S.error(
												'Error verifying wallet ' + t.props.backup.name,
												e,
												e.stack
											),
												'invalid_decryption_key' === e
													? notification.error({
															message: k().translate(
																'notifications.invalid_password'
															),
													  })
													: notification.error({message: e});
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
						]),
						n
					);
				})(r.Component);
			(L = H),
				(Q = 'propTypes'),
				(J = {saveWalletObject: i().bool}),
				Q in L
					? Object.defineProperty(L, Q, {
							value: J,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (L[Q] = J),
				(H = (0, c.$)(H, I));
			var G = (function (e) {
				B(n, e);
				var t = A(n);
				function n() {
					return C(this, n), t.apply(this, arguments);
				}
				return (
					R(n, [
						{
							key: 'render',
							value: function () {
								return (0, O.jsxs)('div', {
									className: 'padding no-overflow',
									children: [
										(0, O.jsxs)('pre', {
											className: 'no-overflow',
											style: {lineHeight: '1.2'},
											children: [this.props.backup.sha1, ' * SHA1'],
										}),
										(0, O.jsx)('br', {}),
									],
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			G = (0, c.$)(G, I);
		},
		76685: (e, t, n) => {
			'use strict';
			n.d(t, {Z: () => ee});
			var r = n(67294),
				o = n(11230),
				i = n(43393),
				s = n.n(i),
				a = n(94184),
				c = n.n(a),
				l = n(112),
				u = n.n(l),
				f = n(674),
				p = n(33041),
				h = n(50837),
				y = n(20950),
				d = n(65171),
				b = n(17076),
				v = n(58074),
				m = n.n(v),
				_ = n(35944);
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
			function g(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
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
			function x(e, t) {
				return (
					(x =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					x(e, t)
				);
			}
			function k(e, t) {
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
			function O(e) {
				return (
					(O = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					O(e)
				);
			}
			var S = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && x(e, t);
				})(s, e);
				var t,
					n,
					r,
					o,
					i =
						((r = s),
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
								t = O(r);
							if (o) {
								var n = O(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return k(this, e);
						});
				function s() {
					return g(this, s), i.apply(this, arguments);
				}
				return (
					(t = s),
					(n = [
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								e.claim_account_name &&
									this.onClaimAccount(e.claim_account_name, e.checked);
							},
						},
						{
							key: 'render',
							value: function () {
								var e = this;
								if (
									void 0 === this.props.balances ||
									!this.props.total_by_account_asset.size
								)
									return (0, _.jsx)('div', {});
								var t = -1;
								return (0, _.jsx)('div', {
									children: (0, _.jsxs)('table', {
										className: 'table',
										children: [
											(0, _.jsx)('thead', {
												children: (0, _.jsxs)('tr', {
													children: [
														(0, _.jsx)('th', {}),
														(0, _.jsx)('th', {
															style: {textAlign: 'center'},
															children: (0, _.jsx)(m(), {
																content: 'wallet.unclaimed',
															}),
														}),
														(0, _.jsx)('th', {
															style: {textAlign: 'center'},
															children: (0, _.jsx)(m(), {
																content: 'wallet.unclaimed_vesting',
															}),
														}),
														(0, _.jsx)('th', {
															style: {textAlign: 'center'},
															children: (0, _.jsx)(m(), {
																content: 'account.name',
															}),
														}),
													],
												}),
											}),
											(0, _.jsx)('tbody', {
												children: this.props.total_by_account_asset
													.map(function (n, r) {
														return (0,
														_.jsxs)('tr', {children: [(0, _.jsx)('td', {children: (0, _.jsx)('input', {type: 'checkbox', checked: !!e.props.checked.get(t), onChange: e.onCheckbox.bind(e, t, n.balances)})}), (0, _.jsx)('td', {style: {textAlign: 'right'}, children: n.unclaimed ? (0, _.jsx)(b.Z, {color: 'info', amount: n.unclaimed, asset: r.get(1)}) : null}), (0, _.jsx)('td', {style: {textAlign: 'right'}, children: n.vesting.unclaimed ? (0, _.jsxs)('div', {children: [(0, _.jsx)(b.Z, {color: 'info', amount: n.vesting.unclaimed, hide_asset: !0, asset: r.get(1)}), (0, _.jsx)('span', {children: ' of '}), (0, _.jsx)(b.Z, {color: 'info', amount: n.vesting.total, asset: r.get(1)})]}) : null}), (0, _.jsxs)('td', {children: [' ', r.get(0), ' ']})]}, ++t);
													})
													.toArray(),
											}),
										],
									}),
								});
							},
						},
						{
							key: 'onCheckbox',
							value: function (e, t) {
								var n = this.props.checked;
								(n = n.get(e) ? n.delete(e) : n.set(e, t)),
									d.Z.setSelectedBalanceClaims(n);
							},
						},
						{
							key: 'onClaimAccount',
							value: function (e, t) {
								if (!t.size) {
									var n = -1;
									this.props.total_by_account_asset.forEach(function (r, o) {
										n++,
											o.get(0) === e &&
												(r.unclaimed || r.vesting.unclaimed) &&
												(t = t.set(n, r.balances));
									}),
										t.size && d.Z.setSelectedBalanceClaims(t);
								}
							},
						},
					]) && w(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(r.Component);
			const P = (S = (0, o.$)(S, {
				listenTo: function () {
					return [y.Z];
				},
				getProps: function () {
					var e = y.Z.getState(),
						t = e.balances,
						n = e.address_to_pubkey,
						r = p.Z.getState().keys,
						o = s().Map().asMutable();
					return (
						t &&
							(e.total_by_account_asset = t
								.groupBy(function (e) {
									var t = '',
										i = n.get(e.owner),
										a = r.get(i);
									a &&
										a.import_account_names &&
										(t = a.import_account_names.join(', '));
									var c,
										l,
										u,
										f = Math.ceil(
											((c = s().List([t, e.balance.asset_id])),
											(l = e.owner),
											(u = o.get(c)) ||
												((u = s().Set().asMutable()), o.set(c, u)),
											u.add(l),
											u.size / 60)
										);
									return s().List([t, e.balance.asset_id, f]);
								})
								.map(function (e) {
									return e.reduce(
										function (e, t) {
											return (
												(t.public_key_string = n.get(t.owner)),
												(e.balances = e.balances.add(t)),
												null != t.vested_balance
													? ((e.vesting.unclaimed += Number(
															t.vested_balance.amount
													  )),
													  (e.vesting.total += Number(t.balance.amount)))
													: (e.unclaimed += Number(t.balance.amount)),
												e
											);
										},
										{
											unclaimed: 0,
											vesting: {unclaimed: 0, total: 0},
											balances: s().Set(),
										}
									);
								})
								.sortBy(function (e) {
									return e;
								})),
						e
					);
				},
			}));
			var C = n(93205),
				Z = n(37983),
				R = n(8564),
				B = n(5674),
				T = n(79876),
				A = n(45697),
				E = n.n(A);
			function N(e) {
				return (
					(N =
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
					N(e)
				);
			}
			function I(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function W(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function D(e, t) {
				return (
					(D =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					D(e, t)
				);
			}
			function z(e, t) {
				if (t && ('object' === N(t) || 'function' == typeof t)) return t;
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
			function K(e) {
				return (
					(K = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					K(e)
				);
			}
			var M,
				$,
				q,
				F = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && D(e, t);
					})(s, e);
					var t,
						n,
						r,
						o,
						i =
							((r = s),
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
									t = K(r);
								if (o) {
									var n = K(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return z(this, e);
							});
					function s() {
						return I(this, s), i.apply(this, arguments);
					}
					return (
						(t = s),
						(n = [
							{
								key: 'render',
								value: function () {
									var e = this.props.accounts
										.filter(function (e) {
											return !!e;
										})
										.filter(function (e) {
											return Z.Z.isMyAccount(e);
										})
										.map(function (e) {
											return e.get('name');
										})
										.sort();
									return (0, _.jsx)('span', {
										children: (0, _.jsx)(B.Z, {
											onChange: this.onAccountSelect.bind(this),
											account_names: e,
											center: !0,
										}),
									});
								},
							},
							{
								key: 'onAccountSelect',
								value: function (e) {
									this.props.onChange(e);
								},
							},
						]) && W(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						s
					);
				})(r.Component);
			(M = F),
				($ = 'propTypes'),
				(q = {
					accounts: R.Z.ChainAccountsList.isRequired,
					onChange: E().func.isRequired,
				}),
				$ in M
					? Object.defineProperty(M, $, {
							value: q,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (M[$] = q);
			const U = (0, T.Z)(F);
			var L = n(25108);
			function Q(e) {
				return (
					(Q =
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
					Q(e)
				);
			}
			function J(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function H(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function G(e, t) {
				return (
					(G =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					G(e, t)
				);
			}
			function Y(e, t) {
				if (t && ('object' === Q(t) || 'function' == typeof t)) return t;
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
			function X(e) {
				return (
					(X = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					X(e)
				);
			}
			var V = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && G(e, t);
				})(a, e);
				var t,
					n,
					r,
					o,
					i =
						((r = a),
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
								t = X(r);
							if (o) {
								var n = X(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return Y(this, e);
						});
				function a() {
					return J(this, a), i.apply(this, arguments);
				}
				return (
					(t = a),
					(n = [
						{
							key: 'componentWillMount',
							value: function () {
								var e = p.Z.getState().keys.keySeq();
								d.Z.setPubkeys(e), (this.existing_keys = e);
							},
						},
						{
							key: 'componentWillReceiveProps',
							value: function (e) {
								var t = p.Z.getState().keys.keySeq();
								t.equals(this.existing_keys) ||
									((this.existing_keys = t), d.Z.setPubkeys(t));
							},
						},
						{
							key: 'render',
							value: function () {
								if (!this.props.account_refs.size)
									return (0, _.jsx)('div', {
										children: (0, _.jsx)('h5', {
											children: (0, _.jsx)(m(), {content: 'wallet.no_balance'}),
										}),
									});
								if (this.props.loading)
									return (0, _.jsxs)('div', {
										children: [
											(0, _.jsx)('br', {}),
											(0, _.jsxs)('h5', {
												children: [
													(0, _.jsx)(m(), {content: 'wallet.loading_balances'}),
													'…',
												],
											}),
											(0, _.jsx)('br', {}),
											(0, _.jsx)(f.Z, {type: 'three-bounce'}),
										],
									});
								if (!this.props.balances || !this.props.balances.size)
									return (0, _.jsxs)('div', {
										children: [
											(0, _.jsx)('br', {}),
											(0, _.jsx)('h5', {
												children: (0, _.jsx)(m(), {
													content: 'wallet.no_balance',
												}),
											}),
										],
									});
								var e =
										this.props.selected_balances.size &&
										this.props.claim_account_name,
									t = e
										? ' ('.concat(this.props.claim_account_name, ')')
										: null;
								return (0, _.jsxs)('div', {
									children: [
										(0, _.jsx)('div', {
											className: 'content-block center-content',
											children: (0, _.jsx)('h3', {
												className: 'no-border-bottom',
												children: (0, _.jsx)(m(), {
													content: 'wallet.claim_balances',
												}),
											}),
										}),
										(0, _.jsxs)('div', {
											className: 'grid-block vertical',
											children: [
												(0, _.jsxs)('div', {
													className: 'grid-content',
													style: {overflowY: 'hidden !important'},
													children: [
														(0, _.jsx)('div', {
															className: 'full-width-content center-content',
															children: (0, _.jsx)(
																U,
																{
																	accounts: s().List(this.props.account_refs),
																	onChange:
																		this.onClaimAccountChange.bind(this),
																},
																this.props.balances
															),
														}),
														(0, _.jsx)('br', {}),
													],
												}),
												(0, _.jsx)('br', {}),
												(0, _.jsx)(P, {}),
											],
										}),
										(0, _.jsx)('br', {}),
										(0, _.jsx)('br', {}),
										(0, _.jsxs)('div', {
											className: c()('button success', {disabled: !e}),
											onClick: this.onClaimBalance.bind(this),
											children: [
												(0, _.jsx)(m(), {content: 'wallet.claim_balance'}),
												t,
											],
										}),
										(0, _.jsx)('div', {
											className: 'button cancel',
											onClick: this.onBack.bind(this),
											children: (0, _.jsx)(m(), {content: 'wallet.cancel'}),
										}),
									],
								});
							},
						},
						{
							key: 'onBack',
							value: function (e) {
								e.preventDefault(), window.history.back();
							},
						},
						{
							key: 'onClaimAccountChange',
							value: function (e) {
								d.Z.claimAccountChange(e);
							},
						},
						{
							key: 'onClaimBalance',
							value: function () {
								C.Z.importBalance(
									this.props.claim_account_name,
									this.props.selected_balances,
									!0
								).catch(function (e) {
									L.error('claimBalance', e);
									var t = e;
									try {
										t = e.data.message;
									} catch (e) {}
									throw (
										(notification.error({
											message: u().translate(
												'notifications.balance_claim_error',
												{error_msg: t}
											),
										}),
										e)
									);
								});
							},
						},
					]) && H(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			const ee = (V = (0, o.$)(V, {
				listenTo: function () {
					return [y.Z, h.Z, p.Z];
				},
				getProps: function () {
					var e = y.Z.getState();
					return (e.account_refs = h.Z.getAccountRefs()), e;
				},
			}));
		},
		65931: (e, t, n) => {
			'use strict';
			n.r(t), n.d(t, {ExistingAccountOptions: () => $e, default: () => qe});
			var r = n(67294),
				o = n(53825),
				i = n(11230),
				s = n(2362),
				a = n(76685),
				c = n(58074),
				l = n.n(c),
				u = n(45424),
				f = n(15028),
				p = n(43393),
				h = n.n(p),
				y = n(94184),
				d = n.n(y),
				b = n(51614);
			function v(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			var m = (function () {
				function e() {
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, e);
				}
				var t, n;
				return (
					(t = e),
					(n = [
						{
							key: 'setBrainkey',
							value: function (e) {
								return e;
							},
						},
					]) && v(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					e
				);
			})();
			const _ = b.Z.createActions(m);
			var j = n(52233),
				g = n(91725);
			function w(e) {
				return (
					(w =
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
					w(e)
				);
			}
			function x(e, t) {
				return (
					(x =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					x(e, t)
				);
			}
			function k(e, t) {
				if (t && ('object' === w(t) || 'function' == typeof t)) return t;
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
			function O(e) {
				return (
					(O = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					O(e)
				);
			}
			function S(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function P(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function C(e, t, n) {
				return (
					t && P(e.prototype, t),
					n && P(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			var Z,
				R,
				B,
				T = (function () {
					function e() {
						S(this, e);
					}
					return (
						C(e, null, [
							{
								key: 'getInstance',
								value: function (t) {
									var n = e.instances.get(t);
									n ||
										((n = b.Z.createStore(A, 'BrainkeyStore')),
										e.instances.set(t, n));
									var r = t + ' subscribed_instance';
									if (!e.instances.get(r)) {
										var o = n.chainStoreUpdate.bind(n);
										j.BQ.subscribe(o), e.instances.set(r, o);
									}
									return n;
								},
							},
							{
								key: 'closeInstance',
								value: function (t) {
									var n = e.instances.get(t);
									if (!n) throw new Error('unknown instance ' + t);
									var r = t + ' subscribed_instance',
										o = e.instances.get(r);
									e.instances.delete(r), j.BQ.unsubscribe(o), n.clearCache();
								},
							},
						]),
						e
					);
				})();
			(Z = T),
				(R = 'instances'),
				(B = new Map()),
				R in Z
					? Object.defineProperty(Z, R, {
							value: B,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (Z[R] = B);
			var A = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && x(e, t);
				})(o, e);
				var t,
					n,
					r =
						((t = o),
						(n = (function () {
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
								r = O(t);
							if (n) {
								var o = O(this).constructor;
								e = Reflect.construct(r, arguments, o);
							} else e = r.apply(this, arguments);
							return k(this, e);
						});
				function o() {
					var e;
					return (
						S(this, o),
						(e = r.call(this)).clearCache(),
						e.bindListeners({onSetBrainkey: _.setBrainkey}),
						e._export('inSync', 'chainStoreUpdate', 'clearCache'),
						e
					);
				}
				return (
					C(o, [
						{
							key: 'clearCache',
							value: function () {
								(this.state = {brnkey: '', account_ids: h().Set()}),
									(this.derived_keys = new Array()),
									(this.account_ids_by_key = null);
							},
						},
						{
							key: 'onSetBrainkey',
							value: function (e) {
								this.clearCache(),
									this.setState({brnkey: e}),
									this.deriveKeys(e),
									this.chainStoreUpdate();
							},
						},
						{
							key: 'inSync',
							value: function () {
								return (
									this.derived_keys.forEach(function (e) {
										if (I(e)) return !1;
									}),
									!0
								);
							},
						},
						{
							key: 'chainStoreUpdate',
							value: function () {
								this.derived_keys.length &&
									this.account_ids_by_key !== j.BQ.account_ids_by_key &&
									((this.account_ids_by_key = j.BQ.account_ids_by_key),
									this.updateAccountIds());
							},
						},
						{
							key: 'deriveKeys',
							value: function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: this.state.brnkey,
									t = this.derived_keys.length,
									n = j.Jy.get_brainPrivateKey(e, t),
									r = E(n);
								this.derived_keys.push(r),
									this.derived_keys.length < 10 && this.deriveKeys(e);
							},
						},
						{
							key: 'updateAccountIds',
							value: function () {
								var e = this,
									t = h()
										.Set()
										.withMutations(function (t) {
											e.derived_keys.forEach(function (e) {
												return (
													(n = e.public_string),
													void (
														(r = j.BQ.getAccountRefsOfKey(n)) &&
														r.forEach(function (e) {
															t.add(e);
														})
													)
												);
												var n, r;
											});
										});
								t.equals(this.state.account_ids) ||
									((this.state.account_ids = t),
									this.setState({account_ids: t}));
							},
						},
					]),
					o
				);
			})(g.Z);
			function E(e) {
				var t = e.toPublicKey().toPublicKeyString();
				return {private_key: e, public_string: t};
			}
			var N,
				I = function (e) {
					return void 0 === j.BQ.getAccountRefsOfKey(e.public_string);
				},
				W = n(79876),
				D = n(8564),
				z = n(45697),
				K = n.n(z),
				M = n(35944),
				$ = n(25108);
			function q(e) {
				return (
					(q =
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
					q(e)
				);
			}
			function F(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function U(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function L(e, t, n) {
				return (
					t && U(e.prototype, t),
					n && U(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Q(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && J(e, t);
			}
			function J(e, t) {
				return (
					(J =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					J(e, t)
				);
			}
			function H(e) {
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
						r = Y(e);
					if (t) {
						var o = Y(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return G(this, n);
				};
			}
			function G(e, t) {
				if (t && ('object' === q(t) || 'function' == typeof t)) return t;
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
			function Y(e) {
				return (
					(Y = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Y(e)
				);
			}
			var X = (function (e) {
				Q(n, e);
				var t = H(n);
				function n() {
					var e;
					return (
						F(this, n),
						((e = t.call(this)).state = {brnkey: '', loading: !0}),
						e
					);
				}
				return (
					L(n, [
						{
							key: 'componentWillMount',
							value: function () {
								var e = this;
								fetch(''.concat('/', 'dictionary.json'))
									.then(function (t) {
										return t.json().then(function (t) {
											(N = new Set(t.en.split(','))), e.setState({loading: !1});
										});
									})
									.catch(function (e) {
										$.log('fetch dictionary error:', e);
									});
							},
						},
						{
							key: '_checkBrainKey',
							value: function () {
								var e,
									t = this.state.brnkey.split(' '),
									n = [];
								t.forEach(function (e, t) {
									if ('' !== e) {
										var r = e.toLowerCase();
										null === (r = r.match(/[a-z]+/)) || N.has(r[0])
											? n.push(
													(0, M.jsx)(
														'span',
														{
															style: {padding: '1px', margin: '1px'},
															children: e,
														},
														t
													)
											  )
											: n.push((0, M.jsx)(V, {children: e}, t));
									}
								});
								var r = !0,
									o = !0;
								return (
									n.length > 0 &&
										(this.state.brnkey.length < 50
											? ((e =
													this.state.brnkey.length +
													' characters (50 minimum)'),
											  (o = !1))
											: n.length < 16
											? (e = n.length + ' words (16 recommended)')
											: ((e = n.length + ' words'), (r = !1))),
									{warn: r, valid: o, word_count_label: e, checked_words: n}
								);
							},
						},
						{
							key: 'render',
							value: function () {
								if (this.state.loading || !N)
									return (0, M.jsx)('div', {
										style: {padding: 20},
										children: 'Fetching dictionary....',
									});
								var e = this._checkBrainKey(),
									t = e.warn,
									n = e.word_count_label,
									r = e.checked_words;
								return (0, M.jsx)('span', {
									className: '',
									children: (0, M.jsxs)('div', {
										children: [
											(0, M.jsx)('textarea', {
												tabIndex: this.props.tabIndex || 1,
												onChange: this.formChange.bind(this),
												value: this.state.brnkey,
												id: 'brnkey',
												style: {height: 100, minWidth: 450},
											}),
											(0, M.jsx)('div', {
												style: {textAlign: 'left'},
												className: 'grid-content no-padding no-overflow',
												children: r,
											}),
											this.state.check_digits && !this.props.hideCheckDigits
												? (0, M.jsxs)('div', {
														children: [
															(0, M.jsx)('br', {}),
															(0, M.jsxs)('pre', {
																className: 'no-overflow',
																children: [
																	this.state.check_digits,
																	' * Check Digits',
																],
															}),
															(0, M.jsx)('br', {}),
														],
												  })
												: null,
											(0, M.jsx)('p', {
												children: (0, M.jsx)('i', {
													className: d()({error: t}),
													children: n,
												}),
											}),
										],
									}),
								});
							},
						},
						{
							key: 'formChange',
							value: function (e) {
								var t = e.target,
									n = t.id,
									r = t.value,
									o = this._checkBrainKey().valid,
									i = {};
								if (((i[n] = r), 'brnkey' === n)) {
									var s = j.Jy.normalize_brainKey(r);
									this.props.onChange(s.length < 50 ? null : s),
										(i.check_digits =
											s.length < 50
												? null
												: j.vp.sha1(s).toString('hex').substring(0, 4));
								}
								this.setState(i),
									this.props.errorCallback && this.props.errorCallback(o);
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
			})(X, 'propTypes', {onChange: K().func.isRequired});
			var V = (function (e) {
					Q(n, e);
					var t = H(n);
					function n() {
						return F(this, n), t.apply(this, arguments);
					}
					return (
						L(n, [
							{
								key: 'render',
								value: function () {
									return (0, M.jsx)('span', {
										style: {
											borderBottom: '1px dotted #ff0000',
											padding: '1px',
											margin: '1px',
										},
										children: (0, M.jsx)('span', {
											style: {borderBottom: '1px dotted #ff0000'},
											children: this.props.children,
										}),
									});
								},
							},
						]),
						n
					);
				})(r.Component),
				ee = n(21705),
				te = n(83370),
				ne = n(52982),
				re = n(37983),
				oe = n(24300);
			function ie(e) {
				return (
					(ie =
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
					ie(e)
				);
			}
			function se(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function ae(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ce(e, t) {
				return (
					(ce =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ce(e, t)
				);
			}
			function le(e, t) {
				if (t && ('object' === ie(t) || 'function' == typeof t)) return t;
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
			function ue(e) {
				return (
					(ue = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ue(e)
				);
			}
			var fe = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && ce(e, t);
				})(s, e);
				var t,
					n,
					r,
					o,
					i =
						((r = s),
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
								t = ue(r);
							if (o) {
								var n = ue(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return le(this, e);
						});
				function s() {
					return se(this, s), i.apply(this, arguments);
				}
				return (
					(t = s),
					(n = [
						{
							key: 'onCardClick',
							value: function (e) {
								e.preventDefault();
								var t = this.props.account.get('name');
								this.props.history.push('/account/'.concat(t));
							},
						},
						{
							key: 'render',
							value: function () {
								var e = null,
									t = null,
									n = !1;
								if (this.props.account) {
									e = this.props.account.get('name');
									var r = this.props.account.get('balances');
									r &&
										(t = r
											.map(function (e) {
												return j.BQ.getObject(e).get('balance')
													? (0, M.jsx)(
															'li',
															{children: (0, M.jsx)(te.Z, {balance: e})},
															e
													  )
													: null;
											})
											.toArray()),
										(n = re.Z.isMyAccount(this.props.account));
								}
								return (0, M.jsx)('div', {
									className: 'grid-content account-card',
									onClick: this.onCardClick.bind(this),
									children: (0, M.jsxs)('div', {
										className: 'card' + (n ? ' my-account' : ''),
										children: [
											(0, M.jsx)('h4', {className: 'text-center', children: e}),
											(0, M.jsxs)('div', {
												className: 'card-content clearfix',
												children: [
													(0, M.jsx)('div', {
														className: 'float-left',
														children: (0, M.jsx)(ne.Z, {
															account: e,
															size: {height: 64, width: 64},
														}),
													}),
													(0, M.jsx)('ul', {
														className: 'balances',
														children: t,
													}),
												],
											}),
										],
									}),
								});
							},
						},
					]) && ae(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
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
			})(fe, 'propTypes', {account: D.Z.ChainAccount.isRequired}),
				(fe = (0, W.Z)(fe));
			const pe = (0, oe.Z)(fe);
			function he(e) {
				return (
					(he =
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
					he(e)
				);
			}
			function ye(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function de(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function be(e, t, n) {
				return (
					t && de(e.prototype, t),
					n && de(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function ve(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && me(e, t);
			}
			function me(e, t) {
				return (
					(me =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					me(e, t)
				);
			}
			function _e(e) {
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
						r = ge(e);
					if (t) {
						var o = ge(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return je(this, n);
				};
			}
			function je(e, t) {
				if (t && ('object' === he(t) || 'function' == typeof t)) return t;
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
			function ge(e) {
				return (
					(ge = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ge(e)
				);
			}
			var we = {
					listenTo: function () {
						return [T.getInstance('wmc')];
					},
					getProps: function () {
						return T.getInstance('wmc').getState();
					},
				},
				xe = (function (e) {
					ve(n, e);
					var t = _e(n);
					function n() {
						return ye(this, n), t.apply(this, arguments);
					}
					return (
						be(n, [
							{
								key: 'componentWillUnmount',
								value: function () {
									T.closeInstance('wmc');
								},
							},
							{
								key: 'render',
								value: function () {
									return (0, M.jsxs)('span', {
										children: [
											(0, M.jsx)('h3', {
												children: (0, M.jsx)(l(), {content: 'wallet.brainkey'}),
											}),
											(0, M.jsx)(Pe, {children: (0, M.jsx)(Oe, {})}),
										],
									});
								},
							},
						]),
						n
					);
				})(r.Component);
			const ke = (xe = (0, i.$)(xe, we));
			var Oe = (function (e) {
				ve(n, e);
				var t = _e(n);
				function n() {
					return ye(this, n), t.apply(this, arguments);
				}
				return (
					be(n, [
						{
							key: 'render',
							value: function () {
								var e = this.props.brnkey.substring(0, 10);
								return (0, M.jsxs)('span', {
									children: [
										(0, M.jsxs)('div', {
											children: [
												(0, M.jsx)('span', {className: '', children: e}),
												'…',
											],
										}),
										(0, M.jsx)('p', {}),
										this.props.account_ids.size
											? (0, M.jsx)(Se, {
													accounts: h().List(this.props.account_ids.toArray()),
											  })
											: (0, M.jsx)('h5', {
													children: (0, M.jsx)(l(), {
														content: 'wallet.no_accounts',
													}),
											  }),
									],
								});
							},
						},
					]),
					n
				);
			})(r.Component);
			Oe = (0, i.$)(Oe, we);
			var Se = (function (e) {
				ve(n, e);
				var t = _e(n);
				function n() {
					return ye(this, n), t.apply(this, arguments);
				}
				return (
					be(n, [
						{
							key: 'render',
							value: function () {
								var e = (0, ee.Z)(this.props.accounts)
									.filter(function (e) {
										return !!e[1];
									})
									.map(function (e) {
										return e[1].get('name');
									})
									.sort()
									.map(function (e) {
										return (0, M.jsx)(pe, {account: e}, e);
									});
								return (0, M.jsx)('span', {children: e});
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
			})(Se, 'propTypes', {accounts: D.Z.ChainAccountsList.isRequired}),
				(Se = (0, W.Z)(Se));
			var Pe = (function (e) {
					ve(n, e);
					var t = _e(n);
					function n() {
						var e;
						return (
							ye(this, n),
							((e = t.call(this)).state = {brnkey: '', accept: !1}),
							e
						);
					}
					return (
						be(n, [
							{
								key: 'render',
								value: function () {
									if (this.state.accept)
										return (0, M.jsx)('span', {children: this.props.children});
									var e = this.state.brnkey && '' !== this.state.brnkey;
									return (0, M.jsxs)('span', {
										className: 'grid-container',
										children: [
											(0, M.jsx)('div', {
												children: (0, M.jsx)(X, {
													onChange: this.onBrainkeyChange.bind(this),
												}),
											}),
											(0, M.jsx)('div', {
												className: d()('button success', {disabled: !e}),
												onClick: this.onAccept.bind(this),
												children: (0, M.jsx)(l(), {content: 'wallet.accept'}),
											}),
										],
									});
								},
							},
							{
								key: 'onBrainkeyChange',
								value: function (e) {
									this.setState({brnkey: e});
								},
							},
							{
								key: 'onAccept',
								value: function () {
									this.setState({accept: !0}), _.setBrainkey(this.state.brnkey);
								},
							},
						]),
						n
					);
				})(r.Component),
				Ce = n(15947),
				Ze = n(99545),
				Re = n(5675);
			function Be(e) {
				return (
					(Be =
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
					Be(e)
				);
			}
			function Te(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function Ae(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function Ee(e, t, n) {
				return (
					t && Ae(e.prototype, t),
					n && Ae(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					e
				);
			}
			function Ne(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function'
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {value: e, writable: !0, configurable: !0},
				})),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t && Ie(e, t);
			}
			function Ie(e, t) {
				return (
					(Ie =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					Ie(e, t)
				);
			}
			function We(e) {
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
						r = ze(e);
					if (t) {
						var o = ze(this).constructor;
						n = Reflect.construct(r, arguments, o);
					} else n = r.apply(this, arguments);
					return De(this, n);
				};
			}
			function De(e, t) {
				if (t && ('object' === Be(t) || 'function' == typeof t)) return t;
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
			function ze(e) {
				return (
					(ze = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ze(e)
				);
			}
			var Ke = {
					listenTo: function () {
						return [s.Z];
					},
					getProps: function () {
						return {wallet: s.Z.getState()};
					},
				},
				Me = (function (e) {
					Ne(n, e);
					var t = We(n);
					function n() {
						return Te(this, n), t.apply(this, arguments);
					}
					return (
						Ee(n, [
							{
								key: 'render',
								value: function () {
									var e = 0 != this.props.wallet.wallet_names.count();
									return (0, M.jsx)('div', {
										className: 'grid-container',
										children: (0, M.jsx)('div', {
											className: 'grid-content',
											children: (0, M.jsxs)('div', {
												className: 'content-block center-content',
												children: [
													(0, M.jsxs)('div', {
														className: 'page-header',
														children: [
															(0, M.jsx)('h1', {
																children: (0, M.jsx)(l(), {
																	content: 'account.welcome',
																	wallet_name: (0, Re.w)(),
																}),
															}),
															e
																? (0, M.jsx)('h3', {
																		children: (0, M.jsx)(l(), {
																			content: 'wallet.setup_wallet',
																		}),
																  })
																: (0, M.jsx)('h3', {
																		children: (0, M.jsx)(l(), {
																			content: 'wallet.create_wallet_backup',
																		}),
																  }),
														],
													}),
													(0, M.jsxs)('div', {
														className: 'content-block',
														children: [
															(0, M.jsxs)(u.Z, {
																children: [
																	(0, M.jsx)(f.Z, {
																		exact: !0,
																		path: '/existing-account',
																		component: Ze.aQ,
																	}),
																	(0, M.jsx)(f.Z, {
																		exact: !0,
																		path: '/existing-account/import-backup',
																		component: $e,
																	}),
																	(0, M.jsx)(f.Z, {
																		exact: !0,
																		path: '/existing-account/import-keys',
																		component: Ce.Z,
																	}),
																	(0, M.jsx)(f.Z, {
																		exact: !0,
																		path: '/existing-account/brainkey',
																		component: ke,
																	}),
																	(0, M.jsx)(f.Z, {
																		exact: !0,
																		path: '/existing-account/balance-claim',
																		component: a.Z,
																	}),
																],
															}),
															this.props.children,
														],
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
			Me = (0, i.$)(Me, Ke);
			var $e = (function (e) {
				Ne(n, e);
				var t = We(n);
				function n() {
					return Te(this, n), t.apply(this, arguments);
				}
				return (
					Ee(n, [
						{
							key: 'render',
							value: function () {
								var e = 0 != this.props.wallet.wallet_names.count();
								return (0, M.jsxs)('span', {
									children: [
										e
											? null
											: (0, M.jsxs)('div', {
													children: [
														(0, M.jsx)(o.Z, {
															to: '/existing-account/import-backup',
															children: (0, M.jsx)(l(), {
																content: 'wallet.import_backup',
																wallet_name: (0, Re.w)(),
															}),
														}),
														(0, M.jsx)('br', {}),
														(0, M.jsx)('br', {}),
														(0, M.jsx)(o.Z, {
															to: '/existing-account/import-keys',
															children: (0, M.jsx)(l(), {
																content: 'wallet.import_bts1',
															}),
														}),
														(0, M.jsx)('br', {}),
														(0, M.jsx)('br', {}),
														(0, M.jsx)(o.Z, {
															to: '/existing-account/import-keys',
															children: (0, M.jsx)(l(), {
																content: 'wallet.create_wallet',
															}),
														}),
														(0, M.jsx)('br', {}),
														(0, M.jsx)('hr', {}),
													],
											  }),
										e ? (0, M.jsx)(a.Z, {}) : null,
										e
											? (0, M.jsxs)('span', {
													children: [
														(0, M.jsx)(o.Z, {
															to: '/dashboard',
															children: (0, M.jsx)('div', {
																className: 'button outline',
																children: (0, M.jsx)(l(), {
																	component: 'span',
																	content: 'header.dashboard',
																}),
															}),
														}),
														(0, M.jsx)(o.Z, {
															to: '/wallet',
															children: (0, M.jsx)('div', {
																className: 'button outline',
																children: (0, M.jsx)(l(), {
																	content: 'settings.wallets',
																}),
															}),
														}),
													],
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
			$e = (0, i.$)($e, Ke);
			const qe = Me;
		},
		15947: (t, n, r) => {
			'use strict';
			r.d(n, {Z: () => fe});
			var o = r(67294),
				i = r(11230),
				s = r(94184),
				a = r.n(s),
				c = r(52233),
				l = r(75951),
				u = r(18825),
				f = r(33041),
				p = r(44945),
				h = r(18153),
				y = r(674),
				d = r(58074),
				b = r.n(d),
				v = r(112),
				m = r.n(v),
				_ = r(76685),
				j = r(65171),
				g = r(20950),
				w = r(17076),
				x = r(35944);
			function k(e) {
				return (
					(k =
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
					k(e)
				);
			}
			function O(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function S(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function P(e, t) {
				return (
					(P =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					P(e, t)
				);
			}
			function C(e, t) {
				if (t && ('object' === k(t) || 'function' == typeof t)) return t;
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
			function Z(e) {
				return (
					(Z = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					Z(e)
				);
			}
			var R = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && P(e, t);
				})(s, e);
				var t,
					n,
					r,
					o,
					i =
						((r = s),
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
								t = Z(r);
							if (o) {
								var n = Z(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return C(this, e);
						});
				function s() {
					return O(this, s), i.apply(this, arguments);
				}
				return (
					(t = s),
					(n = [
						{
							key: 'render',
							value: function () {
								if (void 0 === this.props.balances)
									return (0, x.jsxs)('div', {
										children: [
											(0, x.jsx)(b(), {content: 'wallet.loading_balances'}),
											'…',
										],
									});
								var e = this.props.balances
									.groupBy(function (e) {
										return e.balance.asset_id;
									})
									.map(function (e) {
										return e.reduce(function (e, t) {
											return e + Number(t.balance.amount);
										}, 0);
									});
								return e.size
									? (0, x.jsx)('div', {
											children: e
												.map(function (e, t) {
													return (0,
													x.jsx)('div', {children: (0, x.jsx)(w.Z, {color: 'info', amount: e, asset: t})}, t);
												})
												.toArray(),
									  })
									: (0, x.jsx)('div', {children: 'None'});
							},
						},
					]) && S(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(o.Component);
			const B = (R = (0, i.$)(R, {
				listenTo: function () {
					return [g.Z];
				},
				getProps: function () {
					return g.Z.getState();
				},
			}));
			var T = r(37065),
				A = r(51614);
			function E(e) {
				return (
					(E =
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
					E(e)
				);
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
			function I(e, t) {
				return (
					(I =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					I(e, t)
				);
			}
			function W(e, t) {
				if (t && ('object' === E(t) || 'function' == typeof t)) return t;
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
			function D(e) {
				return (
					(D = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					D(e)
				);
			}
			var z = (function (e) {
				!(function (e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {value: e, writable: !0, configurable: !0},
					})),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t && I(e, t);
				})(s, e);
				var t,
					n,
					r,
					o,
					i =
						((r = s),
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
								t = D(r);
							if (o) {
								var n = D(this).constructor;
								e = Reflect.construct(t, arguments, n);
							} else e = t.apply(this, arguments);
							return W(this, e);
						});
				function s() {
					var e;
					return (
						(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, s),
						((e = i.call(this)).state = e._getInitialState()),
						e._export('importing'),
						e
					);
				}
				return (
					(t = s),
					(n = [
						{
							key: '_getInitialState',
							value: function () {
								return {importing: !1};
							},
						},
						{
							key: 'importing',
							value: function (e) {
								this.setState({importing: e});
							},
						},
					]) && N(t.prototype, n),
					Object.defineProperty(t, 'prototype', {writable: !1}),
					s
				);
			})(r(91725).Z);
			const K = A.Z.createStore(z, 'ImportKeysStore');
			var M = r(25108),
				$ = r(23085).Buffer;
			function q(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			var F = void 0;
			try {
				var U = r(56119);
				if (-1 === U.indexOf('3cee441'))
					throw new Error('Incorrect hash: bts_genesiskeys_bloom.dat');
				F = U;
			} catch (e) {
				M.log(
					'WARN: Will be unable to filter META1 1.0 wallet imports, did not find assets/bts_genesiskeys_bloom.dat',
					e
				);
			}
			var L = (function () {
					function t(e) {
						!(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, t),
							e &&
								((this.bloom_buffer = e), (this.bits_in_filter = 8 * e.length));
					}
					var n, r;
					return (
						(n = t),
						(r = [
							{
								key: 'isAvailable',
								value: function () {
									return void 0 !== F;
								},
							},
							{
								key: 'init',
								value: function (t) {
									var n = this;
									if (this.bloom_buffer) t();
									else {
										if (!this.isAvailable())
											throw new Error('Genesis bloom file was not deployed');
										var r = new XMLHttpRequest();
										(r.responseType = 'blob'),
											(r.onload = function () {
												if (404 !== r.status) {
													var e = new FileReader();
													(e.onload = function (e) {
														var r = new $(e.target.result, 'binary');
														if (1048576 !== r.length)
															throw new Error('Wrong length');
														(n.bits_in_filter = 8 * r.length),
															(n.bloom_buffer = r),
															t();
													}),
														e.readAsBinaryString(r.response);
												}
											}),
											(r.onerror = function () {
												M.error('xhr.onerror', e);
											}),
											r.open('GET', F),
											r.send();
									}
								},
							},
							{
								key: 'inGenesis',
								value: function (e) {
									if (!this.bloom_buffer) throw new Error('Call init() first');
									for (var t = 0; t < 3; t++) {
										var n = c.vp.sha256(t + ':' + e),
											r =
												parseInt(n.slice(-3).toString('hex'), 16) %
												this.bits_in_filter,
											o = r >> 3,
											i = 1 << (7 & r);
										if (0 == (this.bloom_buffer[o] & i)) return !1;
									}
									return !0;
								},
							},
							{
								key: 'filter',
								value: function (e, t) {
									var n = this;
									if (!this.isAvailable())
										return (
											M.log(
												'WARN: Missing bloom filter for META1 0.9.x wallets'
											),
											void t({error: 'missing_bloom'})
										);
									var r = !0;
									t({initalizing: r}),
										this.init(function () {
											try {
												t({initalizing: (r = !1)});
												for (var o = 1, i = 0; i < e.length; i++) {
													var s = 0,
														a = 0,
														l = e[i],
														u = l.encrypted_private_keys.length;
													t({
														importing: !0,
														account_name: l.account_name,
														count: a,
														total: u,
													});
													for (
														var f = l.encrypted_private_keys.length - 1;
														f >= 0;
														f--
													) {
														if (
															(++a % o == 0 &&
																((o = 47),
																t({
																	importing: !0,
																	account_name: l.account_name,
																	count: a,
																	total: u,
																})),
															!l.public_keys)
														)
															return void t({error: 'missing_public_keys'});
														var p = l.public_keys[f];
														if (
															(/^GPH/.test(p) && (p = 'META1' + p.substring(3)),
															!n.inGenesis(p))
														) {
															for (
																var h = c.Jy.addresses(p, 'META1'),
																	y = !1,
																	d = 0;
																d < h.length;
																d++
															)
																if (n.inGenesis(h[d])) {
																	y = !0;
																	break;
																}
															y ||
																(delete l.encrypted_private_keys[f],
																delete l.public_keys[f],
																s++);
														}
													}
													var b = [],
														v = [];
													for (
														f = l.encrypted_private_keys.length - 1;
														f >= 0;
														f--
													)
														l.encrypted_private_keys[f] &&
															(b.push(l.encrypted_private_keys[f]),
															v.push(l.public_keys[f]));
													(l.encrypted_private_keys = b),
														t({
															importing: !1,
															account_name: l.account_name,
															count: a - s,
															total: u,
														}),
														(l.public_keys = v);
												}
												t({success: !0});
											} finally {
												r && t({initalizing: (r = !1)});
											}
										});
								},
							},
						]) && q(n.prototype, r),
						Object.defineProperty(n, 'prototype', {writable: !1}),
						t
					);
				})(),
				Q = r(38648),
				J = r(71577),
				H = r(55019),
				G = r(25108);
			function Y(e) {
				return (
					(Y =
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
					Y(e)
				);
			}
			function X(e, t, n, r, o, i, s) {
				try {
					var a = e[i](s),
						c = a.value;
				} catch (e) {
					return void n(e);
				}
				a.done ? t(c) : Promise.resolve(c).then(r, o);
			}
			function V(e, t) {
				var n =
					('undefined' != typeof Symbol && e[Symbol.iterator]) ||
					e['@@iterator'];
				if (!n) {
					if (
						Array.isArray(e) ||
						(n = (function (e, t) {
							if (e) {
								if ('string' == typeof e) return ee(e, t);
								var n = Object.prototype.toString.call(e).slice(8, -1);
								return (
									'Object' === n && e.constructor && (n = e.constructor.name),
									'Map' === n || 'Set' === n
										? Array.from(e)
										: 'Arguments' === n ||
										  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
										? ee(e, t)
										: void 0
								);
							}
						})(e)) ||
						(t && e && 'number' == typeof e.length)
					) {
						n && (e = n);
						var r = 0,
							o = function () {};
						return {
							s: o,
							n: function () {
								return r >= e.length ? {done: !0} : {done: !1, value: e[r++]};
							},
							e: function (e) {
								throw e;
							},
							f: o,
						};
					}
					throw new TypeError(
						'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
					);
				}
				var i,
					s = !0,
					a = !1;
				return {
					s: function () {
						n = n.call(e);
					},
					n: function () {
						var e = n.next();
						return (s = e.done), e;
					},
					e: function (e) {
						(a = !0), (i = e);
					},
					f: function () {
						try {
							s || null == n.return || n.return();
						} finally {
							if (a) throw i;
						}
					},
				};
			}
			function ee(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function te(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function ne(e, t) {
				return (
					(ne =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					ne(e, t)
				);
			}
			function re(e, t) {
				if (t && ('object' === Y(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return oe(e);
			}
			function oe(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function ie(e) {
				return (
					(ie = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					ie(e)
				);
			}
			r(61065);
			var se,
				ae,
				ce,
				le = function (e) {
					var t = e.key_count;
					return t
						? (0, x.jsxs)('span', {children: ['Found ', t, ' private keys']})
						: (0, x.jsx)('span', {});
				},
				ue = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function'
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, writable: !0, configurable: !0},
						})),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							t && ne(e, t);
					})(s, e);
					var t,
						n,
						r,
						o,
						i =
							((r = s),
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
									t = ie(r);
								if (o) {
									var n = ie(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return re(this, e);
							});
					function s() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, s),
							((e = i.call(this)).state = e._getInitialState()),
							(e._renderBalanceClaims = e._renderBalanceClaims.bind(oe(e))),
							e
						);
					}
					return (
						(t = s),
						(n = [
							{
								key: '_getInitialState',
								value: function () {
									var e =
										arguments.length > 0 &&
										void 0 !== arguments[0] &&
										arguments[0];
									return {
										keys_to_account: {},
										no_file: !0,
										account_keys: [],
										reset_file_name: e
											? this.state.reset_file_name
											: Date.now(),
										reset_password: Date.now(),
										password_checksum: null,
										import_file_message: null,
										import_password_message: null,
										imported_keys_public: {},
										key_text_message: null,
										associatedAccount: null,
										errorTextMessage: null,
										genesis_filtering: !1,
										genesis_filter_status: [],
										genesis_filter_finished: void 0,
										importSuccess: !1,
									};
								},
							},
							{
								key: 'reset',
								value: function (e, t) {
									var n = this;
									e && e.preventDefault();
									var r = this._getInitialState(t);
									this.setState(r, function () {
										return n.updateOnChange();
									});
								},
							},
							{
								key: 'onWif',
								value: function (e) {
									e.preventDefault();
									var t = this.refs.wifInput.state.value;
									this.addByPattern(t);
								},
							},
							{
								key: 'onCancel',
								value: function (e) {
									e && e.preventDefault(),
										this.setState(this._getInitialState());
								},
							},
							{
								key: 'updateOnChange',
								value: function () {
									j.Z.setPubkeys(Object.keys(this.state.imported_keys_public));
								},
							},
							{
								key: 'getImportAccountKeyCount',
								value: function (e) {
									var t = {},
										n = !1;
									for (var r in e) {
										var o,
											i = V(e[r].account_names);
										try {
											for (i.s(); !(o = i.n()).done; ) {
												var s = o.value;
												(t[s] = (t[s] || 0) + 1), (n = !0);
											}
										} catch (e) {
											i.e(e);
										} finally {
											i.f();
										}
									}
									return n ? t : null;
								},
							},
							{
								key: 'upload',
								value: function (e) {
									var t = this;
									this.reset(null, !0);
									var n = e.target.files[0],
										r = new FileReader();
									(r.onload = function (e) {
										var r = e.target.result;
										try {
											var o;
											try {
												(o = JSON.parse(r)),
													t._parseImportKeyUpload(o, n.name, function (e) {
														t.setState(e, function () {
															e.genesis_filter_finished && t._passwordCheck();
														});
													});
											} catch (e) {
												try {
													o || n.name, t._parseWalletJson(o);
												} catch (e) {
													if (!t.addByPattern(r)) throw e;
												}
												t._passwordCheck();
											}
										} catch (e) {
											G.error('... ImportKeys upload error', e),
												t.setState({import_file_message: e});
										}
									}),
										r.readAsText(n);
								},
							},
							{
								key: '_parseImportKeyUpload',
								value: function (e, t, n) {
									var r,
										o,
										i = this;
									try {
										if (!(r = e.password_checksum))
											throw t + ' is an unrecognized format';
										if (!Array.isArray(e.account_keys))
											throw t + ' is an unrecognized format';
										o = e.account_keys;
									} catch (e) {
										throw e.message || e;
									}
									var s = new L();
									s.isAvailable()
										? this.setState(
												{genesis_filter_initalizing: !0},
												function () {
													return s.init(function () {
														var e = i.state.genesis_filter_status,
															t = o;
														s.filter(t, function (i) {
															if ('missing_public_keys' === i.error)
																return (
																	G.error(
																		'un-released format, just for testing'
																	),
																	void n({
																		password_checksum: r,
																		account_keys: o,
																		genesis_filter_finished: !0,
																		genesis_filtering: !1,
																	})
																);
															i.success
																? n({
																		password_checksum: r,
																		account_keys: t,
																		genesis_filter_finished: !0,
																		genesis_filtering: !1,
																  })
																: void 0 === i.initalizing
																? void 0 !== i.importing
																	? (e.length &&
																	  e[e.length - 1].account_name ===
																			i.account_name
																			? (e[e.length - 1] = i)
																			: e.push(i),
																	  n({genesis_filter_status: e}))
																	: G.error('unknown status', i)
																: n({
																		genesis_filter_initalizing: i.initalizing,
																		genesis_filtering: !0,
																  });
														});
													});
												}
										  )
										: n({
												password_checksum: r,
												account_keys: o,
												genesis_filter_finished: !0,
												genesis_filtering: !1,
										  });
								},
							},
							{
								key: '_parseWalletJson',
								value: function (e) {
									var t,
										n,
										r = {},
										o = {},
										i = function (e, t) {
											e = u.Cq.address_prefix + e.substring(3);
											var n = c.nh.fromPublicKeyString(e).toAddressString(),
												r = o[t] || [];
											(n = 'META1' + n.substring(3)), r.push(n), (o[t] = r);
										};
									try {
										if (!Array.isArray(e))
											throw new Error('Invalid wallet format');
										var s,
											a = V(e);
										try {
											for (a.s(); !(s = a.n()).done; ) {
												var l = s.value;
												if (
													'key_record_type' == l.type &&
													l.data.account_address &&
													l.data.encrypted_private_key
												) {
													var f = l.data.account_address,
														p = r[f] || [];
													p.push(l.data.encrypted_private_key), (r[f] = p);
												} else if ('account_record_type' != l.type)
													if (
														'property_record_type' != l.type ||
														'encrypted_brainkey' != l.data.key
													) {
														if ('master_key_record_type' == l.type) {
															if (!l.data)
																throw (
																	file.name +
																	' invalid master_key_record record'
																);
															if (!l.data.checksum)
																throw (
																	file.name +
																	' is missing master_key_record checksum'
																);
															t = l.data.checksum;
														}
													} else n = l.data.value;
												else {
													var h = l.data.name;
													i(l.data.owner_key, h);
													var y,
														d = V(l.data.active_key_history);
													try {
														for (d.s(); !(y = d.n()).done; ) i(y.value[1], h);
													} catch (e) {
														d.e(e);
													} finally {
														d.f();
													}
												}
											}
										} catch (e) {
											a.e(e);
										} finally {
											a.f();
										}
										if (!n)
											throw 'Please use a META1 1.0 wallet_export_keys file instead';
										if (!t) throw file.name + ' is missing password_checksum';
										if (!enckeys.length)
											throw file.name + ' does not contain any private keys';
									} catch (e) {
										throw e.message || e;
									}
									var b = [];
									for (var v in o) {
										var m,
											_ = [],
											j = V(o[v]);
										try {
											for (j.s(); !(m = j.n()).done; ) {
												var g = r[m.value];
												if (g) {
													var w,
														x = V(g);
													try {
														for (x.s(); !(w = x.n()).done; ) {
															var k = w.value;
															_.push(k);
														}
													} catch (e) {
														x.e(e);
													} finally {
														x.f();
													}
												}
											}
										} catch (e) {
											j.e(e);
										} finally {
											j.f();
										}
										b.push({account_name: v, encrypted_private_keys: _});
									}
									this.setState({password_checksum: t, account_keys: b});
								},
							},
							{
								key: '_passwordCheck',
								value: function (e) {
									var t = this;
									e && 'preventDefault' in e && e.preventDefault();
									var n = this.refs.password,
										r = n ? n.value : '';
									if (
										this.state.password_checksum !=
										c.vp.sha512(c.vp.sha512(r)).toString('hex')
									)
										return this.setState({
											no_file: !1,
											import_password_message: r.length
												? 'Incorrect password'
												: null,
										});
									this.setState(
										{
											no_file: !1,
											reset_password: Date.now(),
											import_password_message: m().translate(
												'wallet.import_pass_match'
											),
										},
										function () {
											return t._decryptPrivateKeys(r);
										}
									);
								},
							},
							{
								key: '_decryptPrivateKeys',
								value: function (e) {
									var t,
										n = this,
										r = c.AB.fromSeed(e),
										o = !0,
										i = V(this.state.account_keys);
									try {
										for (i.s(); !(t = i.n()).done; ) {
											var s = t.value;
											if (s.encrypted_private_keys)
												for (
													var a = s.account_name.trim(),
														l = new RegExp('^' + u.Cq.address_prefix),
														f = 0;
													f < s.encrypted_private_keys.length;
													f++
												) {
													var p = s.encrypted_private_keys[f],
														h = s.public_keys ? s.public_keys[f] : null;
													try {
														var y = r.decryptHex(p);
														h
															? l.test(h) ||
															  (h = u.Cq.address_prefix + h.substring(3))
															: (h = c._q
																	.fromHex(y)
																	.toPublicKey()
																	.toPublicKeyString()),
															(this.state.imported_keys_public[h] = !0);
														var d,
															b = (
																this.state.keys_to_account[y] || {
																	account_names: [],
																}
															).account_names,
															v = !1,
															_ = V(b);
														try {
															for (_.s(); !(d = _.n()).done; )
																d.value == a && (v = !0);
														} catch (e) {
															_.e(e);
														} finally {
															_.f();
														}
														if (v) continue;
														b.push(a),
															(this.state.keys_to_account[y] = {
																account_names: b,
																public_key_string: h,
															});
													} catch (e) {
														G.log(e, e.stack);
														var j = e.message || e;
														Q.Z.error({
															message: m().translate(
																'notifications.import_keys_error',
																{account_name: a, error_msg: j}
															),
														});
													}
												}
											else {
												var g = 'Account '.concat(
													s.account_name,
													' missing encrypted_private_keys'
												);
												G.error(g), o && (Q.Z.error({message: g}), (o = !1));
											}
										}
									} catch (e) {
										i.e(e);
									} finally {
										i.f();
									}
									this.setState(
										{
											import_file_message: null,
											import_password_message: null,
											password_checksum: null,
										},
										function () {
											return n.updateOnChange();
										}
									);
								},
							},
							{
								key: '_saveImport',
								value: function (e) {
									var t = this;
									e.preventDefault();
									var n = f.Z.getState().keys,
										r = {};
									for (var o in this.state.imported_keys_public)
										n.has(o) &&
											(delete this.state.imported_keys_public[o], (r[o] = !0));
									if (
										0 !== Object.keys(this.state.imported_keys_public).length
									) {
										for (
											var i = this.state.keys_to_account,
												s = 0,
												a = Object.keys(i);
											s < a.length;
											s++
										) {
											var c = a[s],
												l = i[c];
											l.account_names, r[l.public_key_string] && delete i[c];
										}
										p.Z.unlock()
											.then(function () {
												K.importing(!0),
													setTimeout(function () {
														return t.saveImport();
													}, 200);
											})
											.catch(function () {});
									} else
										Q.Z.error({
											message: m().translate(
												'notifications.import_keys_already_imported'
											),
										});
								},
							},
							{
								key: 'saveImport',
								value: function () {
									for (
										var e = this,
											t = this.state.keys_to_account,
											n = [],
											r = 0,
											o = Object.keys(t);
										r < o.length;
										r++
									) {
										var i = o[r],
											s = t[i],
											a = s.account_names,
											c = s.public_key_string;
										n.push({
											private_plainhex: i,
											import_account_names: a,
											public_key_string: c,
										});
									}
									this.reset(),
										T.Z.importKeysWorker(n)
											.then(function (t) {
												K.importing(!1);
												var r = n.length;
												Q.Z.success({
													message: m().translate('wallet.import_key_success', {
														count: r,
													}),
												}),
													e.setState({importSuccess: !0});
											})
											.catch(function (e) {
												G.log('error:', e), K.importing(!1);
												var t = e;
												try {
													t = e.target.error.message;
												} catch (e) {}
												Q.Z.error({
													message: m().translate(
														'notifications.import_keys_error_unknown',
														{error_msg: t}
													),
												});
											});
								},
							},
							{
								key: 'addByPattern',
								value: function (e) {
									var t = this;
									if (!e)
										return (
											this.setState({
												errorTextMessage: m().translate(
													'wallet.wif_import_error'
												),
											}),
											!1
										);
									if (51 !== e.length)
										return (
											this.setState({
												errorTextMessage: m().translate(
													'wallet.wif_length_error'
												),
											}),
											!1
										);
									var n,
										r = 0,
										o = 0,
										i = V(e.match(/5[HJK][1-9A-Za-z]{49}/g) || []);
									try {
										for (i.s(); !(n = i.n()).done; ) {
											var s = n.value;
											try {
												!(function () {
													var e = c._q.fromWif(s),
														n = e.toBuffer().toString('hex'),
														o = e.toPublicKey().toPublicKeyString();
													(t.state.imported_keys_public[o] = !0),
														(t.state.keys_to_account[n] = {
															account_names: [],
															public_key_string: o,
														});
													var i = [];
													l.Z.lookupAccountByPublicKey(o).then(
														(function () {
															var e,
																n =
																	((e = regeneratorRuntime.mark(function e(n) {
																		var r;
																		return regeneratorRuntime.wrap(function (
																			e
																		) {
																			for (;;)
																				switch ((e.prev = e.next)) {
																					case 0:
																						return (
																							(r = n[0].map(function (e) {
																								return (0,
																								c.aN)('getAccount', e);
																							})),
																							(e.next = 3),
																							Promise.all(r)
																						);
																					case 3:
																						e.sent.map(function (e) {
																							var t = e.get('name');
																							-1 === i.indexOf(t) && i.push(t);
																						}),
																							t.setState({
																								associatedAccount: i,
																							});
																					case 6:
																					case 'end':
																						return e.stop();
																				}
																		},
																		e);
																	})),
																	function () {
																		var t = this,
																			n = arguments;
																		return new Promise(function (r, o) {
																			var i = e.apply(t, n);
																			function s(e) {
																				X(i, r, o, s, a, 'next', e);
																			}
																			function a(e) {
																				X(i, r, o, s, a, 'throw', e);
																			}
																			s(void 0);
																		});
																	});
															return function (e) {
																return n.apply(this, arguments);
															};
														})()
													),
														r++;
												})();
											} catch (e) {
												o++;
											}
										}
									} catch (e) {
										i.e(e);
									} finally {
										i.f();
									}
									return (
										this.setState(
											{
												key_text_message:
													'Found ' +
													(r ? r + ' valid' : '') +
													(o ? ' and ' + o + ' invalid' : '') +
													' key' +
													(r > 1 || o > 1 ? 's' : '') +
													'.',
											},
											function () {
												return t.updateOnChange();
											}
										),
										this.setState({
											key_text_message: null,
											errorTextMessage: null,
										}),
										r
									);
								},
							},
							{
								key: '_renderBalanceClaims',
								value: function () {
									return (0, x.jsxs)('div', {
										children: [
											(0, x.jsx)(_.Z, {}),
											(0, x.jsx)('div', {
												style: {paddingTop: 15},
												children: (0, x.jsx)(J.Z, {
													type: 'primary',
													onClick: this.onCancel.bind(this),
													children: (0, x.jsx)(b(), {content: 'wallet.done'}),
												}),
											}),
										],
									});
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.props.privateKey,
										n = this.state.keys_to_account,
										r = Object.keys(n).length,
										o = this.getImportAccountKeyCount(n);
									if (!T.Z.getWallet())
										return (0, x.jsx)(h.z, {importKeys: !0, hideTitle: !0});
									if (this.props.importing)
										return (0, x.jsx)('div', {
											children: (0, x.jsx)('div', {
												className: 'center-content',
												children: (0, x.jsx)(y.Z, {type: 'circle'}),
											}),
										});
									var i = this.state.genesis_filtering,
										s =
											(!!this.state.genesis_filter_status.length &&
												this.state.genesis_filter_finished,
											null);
									if (this.state.genesis_filter_status.length) {
										s = [];
										var c,
											l = V(this.state.genesis_filter_status);
										try {
											for (l.s(); !(c = l.n()).done; ) {
												var u = c.value;
												u.count &&
													u.total &&
													s.push(
														(0, x.jsxs)(
															'tr',
															{
																children: [
																	(0, x.jsx)('td', {children: u.account_name}),
																	(0, x.jsx)('td', {
																		children: i
																			? (0, x.jsxs)('span', {
																					children: [
																						'Filtering ',
																						Math.round(
																							(u.count / u.total) * 100
																						),
																						' ',
																						'%',
																						' ',
																					],
																			  })
																			: (0, x.jsx)('span', {children: u.count}),
																	}),
																],
															},
															u.account_name
														)
													);
											}
										} catch (e) {
											l.e(e);
										} finally {
											l.f();
										}
									}
									var f = 0 !== r,
										p = m().translate('wallet.import_password');
									if ((f && (p = ''), !s && o))
										for (var d in ((s = []), o))
											s.push(
												(0, x.jsxs)(
													'tr',
													{
														children: [
															(0, x.jsx)('td', {children: d}),
															(0, x.jsx)('td', {children: o[d]}),
														],
													},
													d
												)
											);
									var v = (0, x.jsx)(J.Z, {
											onClick: this.onCancel.bind(this),
											children: (0, x.jsx)(b(), {content: 'wallet.cancel'}),
										}),
										_ = 1;
									return this.state.importSuccess
										? this._renderBalanceClaims()
										: (0, x.jsxs)('div', {
												children: [
													(0, x.jsxs)('div', {
														style: {padding: '10px 0'},
														children: [
															(0, x.jsx)('span', {
																children: this.state.key_text_message
																	? this.state.key_text_message
																	: (0, x.jsx)(le, {key_count: r}),
															}),
															f
																? (0, x.jsxs)('span', {
																		children: [
																			' ',
																			'(',
																			(0, x.jsx)('a', {
																				onClick: this.reset.bind(this),
																				children: (0, x.jsx)(b(), {
																					content: 'wallet.reset',
																				}),
																			}),
																			')',
																		],
																  })
																: null,
															(0, x.jsxs)('span', {
																children: [
																	(0, x.jsx)('br', {}),
																	this.state.associatedAccount &&
																		(0, x.jsxs)('div', {
																			children: [
																				(0, x.jsx)(b(), {
																					content:
																						'wallet.wif_associated_accounts',
																				}),
																				this.state.associatedAccount.map(
																					function (e, t) {
																						return (0, x.jsx)(
																							'p',
																							{children: e},
																							t
																						);
																					}
																				),
																			],
																		}),
																],
															}),
														],
													}),
													s
														? (0, x.jsx)('div', {
																children: s.length
																	? (0, x.jsxs)('div', {
																			children: [
																				(0, x.jsxs)('table', {
																					className: 'table',
																					children: [
																						(0, x.jsx)('thead', {
																							children: (0, x.jsxs)('tr', {
																								children: [
																									(0, x.jsx)('th', {
																										children: (0, x.jsx)(b(), {
																											content:
																												'explorer.account.title',
																										}),
																									}),
																									(0, x.jsx)('th', {
																										children: (0, x.jsx)(b(), {
																											content:
																												'settings.restore_key_count',
																										}),
																									}),
																								],
																							}),
																						}),
																						(0, x.jsx)('tbody', {children: s}),
																					],
																				}),
																				(0, x.jsx)('br', {}),
																			],
																	  })
																	: m().translate('wallet.no_accounts'),
														  })
														: null,
													(0, x.jsx)('br', {}),
													f || this.state.genesis_filter_initalizing
														? null
														: (0, x.jsx)('div', {
																children: (0, x.jsxs)('div', {
																	children: [
																		(0, x.jsx)('div', {
																			children: t
																				? (0, x.jsxs)('form', {
																						onSubmit: this.onWif.bind(this),
																						children: [
																							(0, x.jsx)(b(), {
																								component: 'label',
																								content: 'wallet.paste_private',
																							}),
																							(0, x.jsx)(H.Z, {
																								ref: 'wifInput',
																								type: 'password',
																								id: 'wif',
																								tabIndex: _++,
																								style: {marginBottom: '16px'},
																							}),
																							(0, x.jsx)('div', {
																								className: 'importError',
																								children: (0, x.jsx)('span', {
																									className: 'red',
																									children:
																										this.state.errorTextMessage,
																								}),
																							}),
																							(0, x.jsx)(J.Z, {
																								type: 'primary',
																								htmlType: 'submit',
																								style: {marginRight: '16px'},
																								children: (0, x.jsx)(b(), {
																									content: 'wallet.submit',
																								}),
																							}),
																							v,
																						],
																				  })
																				: (0, x.jsxs)('form', {
																						onSubmit:
																							this._passwordCheck.bind(this),
																						children: [
																							(0, x.jsxs)('label', {
																								children: [
																									(0, x.jsx)(b(), {
																										content:
																											'wallet.bts_09_export',
																									}),
																									this.state.no_file
																										? null
																										: (0, x.jsxs)('span', {
																												children: [
																													'  (',
																													(0, x.jsx)('a', {
																														onClick:
																															this.reset.bind(
																																this
																															),
																														children: 'Reset',
																													}),
																													')',
																												],
																										  }),
																								],
																							}),
																							(0, x.jsx)(
																								'input',
																								{
																									type: 'file',
																									id: 'file_input',
																									accept: '.json',
																									style: {
																										border: 'solid',
																										marginBottom: 15,
																									},
																									onChange:
																										this.upload.bind(this),
																								},
																								this.state.reset_file_name
																							),
																							(0, x.jsx)('div', {
																								children:
																									this.state
																										.import_file_message,
																							}),
																							this.state.no_file
																								? null
																								: (0, x.jsxs)('div', {
																										children: [
																											(0, x.jsx)(
																												H.Z,
																												{
																													type: 'password',
																													ref: 'password',
																													placeholder: p,
																													onChange:
																														function () {
																															e.state
																																.import_password_message &&
																																e.state
																																	.import_password_message
																																	.length &&
																																e.setState({
																																	import_password_message:
																																		null,
																																});
																														},
																												},
																												this.state
																													.reset_password
																											),
																											(0, x.jsx)('p', {
																												className:
																													'facolor-error',
																												children:
																													this.state
																														.import_password_message,
																											}),
																										],
																								  }),
																							(0, x.jsxs)('div', {
																								className: 'button-group',
																								children: [
																									(0, x.jsx)(J.Z, {
																										type: 'primary',
																										disabled:
																											!!this.state.no_file,
																										htmlType: 'submit',
																										style: {
																											marginRight: '16px',
																										},
																										children: (0, x.jsx)(b(), {
																											content: 'wallet.submit',
																										}),
																									}),
																									v,
																								],
																							}),
																						],
																				  }),
																		}),
																		(0, x.jsx)('br', {}),
																		(0, x.jsx)('br', {}),
																	],
																}),
														  }),
													this.state.genesis_filter_initalizing
														? (0, x.jsx)('div', {
																children: (0, x.jsx)('div', {
																	className: 'center-content',
																	children: (0, x.jsx)(y.Z, {type: 'circle'}),
																}),
														  })
														: null,
													f
														? (0, x.jsxs)('div', {
																children: [
																	(0, x.jsx)('div', {
																		children: (0, x.jsxs)('div', {
																			className: 'button-group',
																			children: [
																				(0, x.jsx)('div', {
																					className: a()('button success', {
																						disabled: !f,
																					}),
																					onClick: this._saveImport.bind(this),
																					children: (0, x.jsx)(b(), {
																						content: 'wallet.import_keys',
																					}),
																				}),
																				(0, x.jsx)('div', {
																					className: 'button secondary',
																					onClick: this.reset.bind(this),
																					children: (0, x.jsx)(b(), {
																						content: 'wallet.cancel',
																					}),
																				}),
																			],
																		}),
																	}),
																	(0, x.jsx)('h4', {
																		children: (0, x.jsx)(b(), {
																			content: 'wallet.unclaimed',
																		}),
																	}),
																	(0, x.jsx)(b(), {
																		component: 'p',
																		content: 'wallet.claim_later',
																	}),
																	(0, x.jsx)('div', {
																		className: 'grid-block',
																		children: (0, x.jsxs)('div', {
																			className: 'grid-content no-overflow',
																			children: [
																				(0, x.jsx)(b(), {
																					component: 'label',
																					content: 'wallet.totals',
																				}),
																				(0, x.jsx)(B, {}),
																			],
																		}),
																	}),
																	(0, x.jsx)('br', {}),
																],
														  })
														: null,
												],
										  });
								},
							},
						]),
						n && te(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						s
					);
				})(o.Component);
			(ce = {privateKey: !0}),
				(ae = 'defaultProps') in (se = ue)
					? Object.defineProperty(se, ae, {
							value: ce,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (se[ae] = ce);
			const fe = (ue = (0, i.$)(ue, {
				listenTo: function () {
					return [K];
				},
				getProps: function () {
					return {importing: K.getState().importing};
				},
			}));
		},
		56119: (e, t, n) => {
			e.exports = n.p + 'bts_genesiskeys_bloom_3cee441.dat';
		},
		61065: (e, t, n) => {
			'use strict';
			n.r(t);
		},
	},
]);
