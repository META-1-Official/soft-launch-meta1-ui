'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[818],
	{
		94743: (e, t, n) => {
			n.r(t), n.d(t, {default: () => O});
			var r = n(67294),
				o = n(11230),
				i = n(52233),
				a = n(80129),
				c = n.n(a),
				s = n(9669),
				u = n.n(s),
				p = n(64593),
				l = n(97651),
				h = n(37983),
				f = n(37065),
				d = n(18645),
				g = n(72777),
				v = n(40226),
				m = n(44945),
				y = n(674),
				k = n(11670),
				I = n(91060),
				b = n(5757),
				w = n(35944),
				x = n(25108),
				V = n(34155);
			function A(e) {
				return (
					(A =
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
					A(e)
				);
			}
			function P(e, t, n, r, o, i, a) {
				try {
					var c = e[i](a),
						s = c.value;
				} catch (e) {
					return void n(e);
				}
				c.done ? t(s) : Promise.resolve(s).then(r, o);
			}
			function R(e) {
				return function () {
					var t = this,
						n = arguments;
					return new Promise(function (r, o) {
						var i = e.apply(t, n);
						function a(e) {
							P(i, r, o, a, c, 'next', e);
						}
						function c(e) {
							P(i, r, o, a, c, 'throw', e);
						}
						a(void 0);
					});
				};
			}
			function E(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function S(e, t) {
				return (
					(S =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					S(e, t)
				);
			}
			function C(e, t) {
				if (t && ('object' === A(t) || 'function' == typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return _(e);
			}
			function _(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function L(e) {
				return (
					(L = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					L(e)
				);
			}
			function Z(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var T,
				D = new k.ZP('__AuthData__'),
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
							t && S(e, t);
					})(P, e);
					var t,
						n,
						o,
						a,
						s,
						l,
						d,
						k,
						A =
							((d = P),
							(k = (function () {
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
									t = L(d);
								if (k) {
									var n = L(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return C(this, e);
							});
					function P() {
						var e;
						return (
							(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, P),
							Z(_((e = A.call(this))), 'timer', function (e) {
								return new Promise(function (t) {
									return setTimeout(t, e);
								});
							}),
							Z(
								_(e),
								'verifyVoiceIT',
								(function () {
									var t = R(
										regeneratorRuntime.mark(function t(n, r, o) {
											var i, a, c, s, u;
											return regeneratorRuntime.wrap(function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(i = e.props.privKey),
																(a = D.get('account_login_name', '')),
																(c = b.Z.getVerificationData),
																o && (c = b.Z.getEnrollmentData),
																(t.next = 6),
																c(n, r)
															);
														case 6:
															(s = t.sent) &&
																s.email === r &&
																'success' === s.status &&
																((u = e.genKey(''.concat(a).concat(i))),
																e.validateLogin(u, a));
														case 8:
														case 'end':
															return t.stop();
													}
											}, t);
										})
									);
									return function (e, n, r) {
										return t.apply(this, arguments);
									};
								})()
							),
							Z(
								_(e),
								'updateStatusAndProceed',
								(function () {
									var t = R(
										regeneratorRuntime.mark(function t(n) {
											var r, o, i, a;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(t.prev = 0),
																	(r = e.props.authData),
																	(o = b.Z.postVoiceItVerification),
																	n && (o = b.Z.postVoiceItEnrollment),
																	(t.next = 6),
																	o(r.email, 'success')
																);
															case 6:
																return (
																	(i = t.sent),
																	(a = i.authorization),
																	(t.next = 10),
																	e.verifyVoiceIT(a, r.email, n)
																);
															case 10:
																t.next = 15;
																break;
															case 12:
																(t.prev = 12),
																	(t.t0 = t.catch(0)),
																	x.log('Err in Verifying Enrollment', t.t0);
															case 15:
															case 'end':
																return t.stop();
														}
												},
												t,
												null,
												[[0, 12]]
											);
										})
									);
									return function (e) {
										return t.apply(this, arguments);
									};
								})()
							),
							Z(_(e), 'startEnrollment', function () {
								var t,
									n = e.state.voiceItPhrases;
								n || x.log('Issue with VoiceIT initialization'),
									T.encapsulatedVideoEnrollment({
										contentLanguage: V.env.VOICEIT_LANG,
										phrase: n[0].text,
										completionCallback:
											((t = R(
												regeneratorRuntime.mark(function t(n, r) {
													return regeneratorRuntime.wrap(function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	x.log('Status', n, r),
																		n
																			? (x.log(
																					'video enrolled successfully',
																					r
																			  ),
																			  e.updateStatusAndProceed(!0))
																			: x.log(
																					'Voice Enrollments Cancelled or Failed!'
																			  );
																case 2:
																case 'end':
																	return t.stop();
															}
													}, t);
												})
											)),
											function (e, n) {
												return t.apply(this, arguments);
											}),
									});
							}),
							Z(_(e), 'startVerification', function () {
								var t,
									n = e.state.voiceItPhrases;
								n || x.log('Issue with VoiceIT initialization'),
									T.encapsulatedVideoVerification({
										doLiveness: !0,
										contentLanguage: V.env.VOICEIT_LANG,
										phrase: n[0].text,
										needEnrollmentsCallback: function () {
											alert('A minimum of three enrollments are needed'),
												e.startEnrollment();
										},
										completionCallback:
											((t = R(
												regeneratorRuntime.mark(function t(n, r) {
													return regeneratorRuntime.wrap(function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	x.log('Status', n, r),
																		n
																			? (x.log(
																					'video enrolled successfully',
																					r
																			  ),
																			  e.updateStatusAndProceed())
																			: x.log(
																					'Voice Enrollments Cancelled or Failed!'
																			  );
																case 2:
																case 'end':
																	return t.stop();
															}
													}, t);
												})
											)),
											function (e, n) {
												return t.apply(this, arguments);
											}),
									});
							}),
							Z(
								_(e),
								'initiateVoiceItUser',
								R(
									regeneratorRuntime.mark(function t() {
										var n, r, o, i;
										return regeneratorRuntime.wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(t.prev = 0),
																(n = e.props.authData),
																(r = encodeURI(n.email)),
																(t.next = 5),
																b.Z.getUserKycProfile(r)
															);
														case 5:
															if (
																!(
																	(o = t.sent) &&
																	o.status &&
																	o.status.voiceitID
																)
															) {
																t.next = 11;
																break;
															}
															return (
																(t.next = 9),
																e.generateVoiceItUserToken(o.status.voiceitID)
															);
														case 9:
															t.next = 22;
															break;
														case 11:
															return (t.next = 13), I.Z.createVoiceItUser();
														case 13:
															if (!(i = t.sent).userId) {
																t.next = 22;
																break;
															}
															return (
																(t.next = 17),
																b.Z.postUserKycProfile(n.email, i.userId)
															);
														case 17:
															if (t.sent.result) {
																t.next = 20;
																break;
															}
															throw new Error('Error in KYC Profile update');
														case 20:
															return (
																(t.next = 22),
																e.generateVoiceItUserToken(i.userId)
															);
														case 22:
															t.next = 27;
															break;
														case 24:
															(t.prev = 24),
																(t.t0 = t.catch(0)),
																x.error('Error in initiateVoiceItUser', t.t0);
														case 27:
														case 'end':
															return t.stop();
													}
											},
											t,
											null,
											[[0, 24]]
										);
									})
								)
							),
							Z(
								_(e),
								'generateVoiceItUserToken',
								(function () {
									var t = R(
										regeneratorRuntime.mark(function t(n) {
											var r;
											return regeneratorRuntime.wrap(function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(t.next = 2), I.Z.generateVoiceItUserToken(n)
															);
														case 2:
															if ((r = t.sent)) {
																t.next = 5;
																break;
															}
															throw new Error('Error generating VoiceIT Token');
														case 5:
															T.setSecureToken(r),
																e.setState({voiceItClientHasInitialized: !0});
														case 7:
														case 'end':
															return t.stop();
													}
											}, t);
										})
									);
									return function (e) {
										return t.apply(this, arguments);
									};
								})()
							),
							Z(
								_(e),
								'onLoadVoiceItLibrary',
								(function () {
									var t = R(
										regeneratorRuntime.mark(function t(n) {
											var r;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(t.prev = 0),
																	(t.next = 3),
																	I.Z.getVoiceItPhrases(V.env.VOICEIT_LANG)
																);
															case 3:
																(r = t.sent),
																	e.setState({voiceItPhrases: r}),
																	(T = new window.VoiceIt2.initialize(
																		''.concat(V.env.VOICEIT_URL, '/api/init'),
																		V.env.VOICEIT_LANG
																	)).setThemeColor('#0000FF'),
																	e.initiateVoiceItUser(),
																	(t.next = 13);
																break;
															case 10:
																(t.prev = 10),
																	(t.t0 = t.catch(0)),
																	x.log('Error initializing VoiceIT', t.t0);
															case 13:
															case 'end':
																return t.stop();
														}
												},
												t,
												null,
												[[0, 10]]
											);
										})
									);
									return function (e) {
										return t.apply(this, arguments);
									};
								})()
							),
							(e.generateAuthData = e.generateAuthData.bind(_(e))),
							(e.authProceed = e.authProceed.bind(_(e))),
							(e.onFinishConfirm = e.onFinishConfirm.bind(_(e))),
							(e.createAccount = e.createAccount.bind(_(e))),
							(e.state = {
								skipCreationFlow: !1,
								passwordError: !1,
								redirectFromVoiceItEnrollment: '',
								redirectFromVoiceItVerification: '',
								redirectFromESign: !1,
								insertVoiceIt: !1,
								voiceItClientHasInitialized: !1,
								voiceItPhrases: [],
							}),
							(e.skipFreshCreationAndProceed =
								e.skipFreshCreationAndProceed.bind(_(e))),
							(e.validateLogin = e.validateLogin.bind(_(e))),
							(e.proceedVoiceItRedirect = e.proceedVoiceItRedirect.bind(_(e))),
							(e.proceedESignRedirect = e.proceedESignRedirect.bind(_(e))),
							e
						);
					}
					return (
						(t = P),
						(n = [
							{
								key: 'componentDidMount',
								value: function () {
									var e = this.props,
										t = e.openLogin,
										n = e.privKey,
										r = e.authData,
										o = e.setOpenLoginInstance;
									if (
										(x.log('Location Data', this.props, this.props.location),
										this.props.location && this.props.location.search)
									) {
										var i = c().parse(this.props.location.search, {
												ignoreQueryPrefix: !0,
											}).mode,
											a = c().parse(this.props.location.search, {
												ignoreQueryPrefix: !0,
											}).token,
											s = c().parse(this.props.location.search, {
												ignoreQueryPrefix: !0,
											}).signature;
										'existingEmailCreation' === i && t && n && r
											? this.skipFreshCreationAndProceed()
											: a
											? this.proceedVoiceItRedirect(a)
											: 'success' === s
											? this.proceedESignRedirect()
											: this.props.history.push('/registration');
									}
									t || o(), t && !n && this.generateAuthData();
								},
							},
							{
								key: 'componentDidUpdate',
								value: function (e, t) {
									var n = this.props,
										r = n.openLogin,
										o = n.privKey,
										i = n.authData,
										a = this.state,
										c = a.skipCreationFlow,
										s = a.voiceItClientHasInitialized;
									!r || e.openLogin || c || this.generateAuthData(),
										o &&
											i &&
											!c &&
											((o && !e.privKey) || (i && !e.authData)) &&
											this.authProceed(),
										!t.passwordError &&
											this.state.passwordError &&
											this.props.history.push('/registration'),
										s &&
											!t.voiceItClientHasInitialized &&
											this.startVerification();
								},
							},
							{
								key: 'skipFreshCreationAndProceed',
								value: function () {
									this.setState({skipCreationFlow: !0}), this.authProceed();
								},
							},
							{
								key: 'proceedVoiceItRedirect',
								value: function (e) {
									var t = D.get('account_login_name', ''),
										n = D.get('account_registration_name', '');
									t
										? (this.setState({redirectFromVoiceItVerification: e}),
										  this.props.setOpenLoginInstance())
										: n &&
										  (this.setState({redirectFromVoiceItEnrollment: e}),
										  this.props.setOpenLoginInstance());
								},
							},
							{
								key: 'proceedESignRedirect',
								value: function () {
									var e = this;
									this.setState({redirectFromESign: !0}, function () {
										e.props.setOpenLoginInstance();
									});
								},
							},
							{
								key: 'generateAuthData',
								value:
									((l = R(
										regeneratorRuntime.mark(function e() {
											var t, n, r, o, i, a;
											return regeneratorRuntime.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(t = this.props),
																	(n = t.openLogin),
																	(r = t.setPrivKey),
																	(o = t.setAuthData),
																	(e.prev = 2),
																	(e.next = 5),
																	n.init()
																);
															case 5:
																if (!n.privKey) {
																	e.next = 14;
																	break;
																}
																return (
																	(i = n.privKey), (e.next = 9), n.getUserInfo()
																);
															case 9:
																(a = e.sent), r(i), o(a), (e.next = 15);
																break;
															case 14:
																this.props.history.push('/registration');
															case 15:
																e.next = 20;
																break;
															case 17:
																(e.prev = 17),
																	(e.t0 = e.catch(2)),
																	x.log('Something went wrong!', e.t0);
															case 20:
															case 'end':
																return e.stop();
														}
												},
												e,
												this,
												[[2, 17]]
											);
										})
									)),
									function () {
										return l.apply(this, arguments);
									}),
							},
							{
								key: 'authProceed',
								value:
									((s = R(
										regeneratorRuntime.mark(function e() {
											var t, n, r, o, i, a, c, s, p, l, h, f;
											return regeneratorRuntime.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																if (
																	((t = this.props),
																	(n = t.privKey),
																	(r = t.authData),
																	(o = this.state),
																	(i = o.redirectFromVoiceItEnrollment),
																	(a = o.redirectFromVoiceItVerification),
																	(c = o.redirectFromESign),
																	(s = D.get('account_registration_name', '')),
																	(p = D.get('account_login_name', '')),
																	!s)
																) {
																	e.next = 9;
																	break;
																}
																i
																	? this.props.history.push(
																			'/registration?voiceItToken='.concat(
																				encodeURI(i)
																			)
																	  )
																	: c
																	? this.props.history.push(
																			'/registration?eSignStatus=success'
																	  )
																	: this.props.history.push(
																			'/registration?mode=proceedRegistration'
																	  ),
																	(e.next = 24);
																break;
															case 9:
																if (!p || !a) {
																	e.next = 23;
																	break;
																}
																return (
																	(e.prev = 10),
																	(e.next = 13),
																	u()({
																		url:
																			V.env.VOICEIT_URL +
																			'/apiewallet/video-verifications',
																		method: 'get',
																		headers: {
																			Accept: 'application/json',
																			Authorization: a,
																		},
																		params: {email: r.email},
																	})
																);
															case 13:
																(l = e.sent),
																	x.log('Response after jwt validation', l),
																	l &&
																		l.data &&
																		(x.log('&&&& response data', l.data),
																		l.data.email === r.email &&
																			'success' === l.data.status &&
																			((h = this.genKey(
																				''.concat(p).concat(n)
																			)),
																			this.validateLogin(h, p))),
																	(e.next = 21);
																break;
															case 18:
																(e.prev = 18),
																	(e.t0 = e.catch(10)),
																	x.log(
																		'Error proceeding auth after voiceit',
																		e.t0
																	);
															case 21:
																e.next = 24;
																break;
															case 23:
																p
																	? ((f = this.genKey(''.concat(p).concat(n))),
																	  this.validateLogin(f, p))
																	: this.props.history.push('/registration');
															case 24:
															case 'end':
																return e.stop();
														}
												},
												e,
												this,
												[[10, 18]]
											);
										})
									)),
									function () {
										return s.apply(this, arguments);
									}),
							},
							{
								key: 'genKey',
								value: function (e) {
									return 'P'.concat(i._q.fromSeed(e).toWif());
								},
							},
							{
								key: 'unlockAccount',
								value:
									((a = R(
										regeneratorRuntime.mark(function e(t, n) {
											var r;
											return regeneratorRuntime.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																r = i.BQ.getAccount(account);
															case 1:
																if (void 0 !== r) {
																	e.next = 8;
																	break;
																}
																return (
																	(r = i.BQ.getAccount(account)),
																	x.log('Chain Account', r),
																	(e.next = 6),
																	this.timer(1e3)
																);
															case 6:
																e.next = 1;
																break;
															case 8:
																f.Z.validatePassword(
																	n,
																	!0,
																	t,
																	['active', 'owner', 'memo'],
																	r
																),
																	m.Z.checkLock.defer();
															case 10:
															case 'end':
																return e.stop();
														}
												},
												e,
												this
											);
										})
									)),
									function (e, t) {
										return a.apply(this, arguments);
									}),
							},
							{
								key: 'onFinishConfirm',
								value: function (e) {
									var t = this;
									e.included &&
										e.broadcasted_transaction &&
										(g.Z.unlisten(this.onFinishConfirm),
										g.Z.reset(),
										(0, i.aN)('getAccount', this.state.accountName).then(
											function () {
												t.props.history.push(
													'/wallet/backup/create?newAccount=true'
												);
											}
										));
								},
							},
							{
								key: 'createAccount',
								value: function (e, t, n, r, o, a) {
									var c = this;
									x.log('data: ', r, e, t);
									var s = h.Z.getState().referralAccount,
										u = D.get('account_registration_registrarAccount', '');
									v.Z.createAccountWithPassword(
										e,
										t,
										u,
										s || u,
										0,
										'',
										n,
										r,
										o,
										a,
										t
									)
										.then(function () {
											v.Z.setPasswordAccount(e),
												u
													? ((0, i.aN)('getAccount', e).then(function () {
															c.unlockAccount(e, t);
													  }),
													  g.Z.listen(c.onFinishConfirm))
													: ((0, i.aN)('getAccount', e).then(function (e) {
															x.log('Data in Fetch chain', e);
													  }),
													  c.unlockAccount(e, t),
													  c.props.history.push('/market/META1_USDT'));
										})
										.catch(function (e) {
											x.log('ERROR AccountActions.createAccount ARC', e);
										});
								},
							},
							{
								key: 'validateLogin',
								value:
									((o = R(
										regeneratorRuntime.mark(function e(t, n) {
											var r, o, a, c;
											return regeneratorRuntime.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																(r = this.props.resolve),
																	(o = i.BQ.getAccount(n));
															case 2:
																if (void 0 !== o) {
																	e.next = 9;
																	break;
																}
																return (
																	(o = i.BQ.getAccount(n)),
																	x.log('Chain Account', o),
																	(e.next = 7),
																	this.timer(1e3)
																);
															case 7:
																e.next = 2;
																break;
															case 9:
																(a = f.Z.validatePassword(
																	t || '',
																	!0,
																	n,
																	['active', 'owner', 'memo'],
																	o
																)),
																	(c = a.cloudMode),
																	f.Z.isLocked()
																		? this.setState({passwordError: !0})
																		: (c && v.Z.setPasswordAccount(n),
																		  m.Z.change(),
																		  r && r(),
																		  m.Z.cancel(),
																		  D.remove('account_login_name'),
																		  this.props.history.push(
																				'/market/META1_USDT'
																		  ));
															case 11:
															case 'end':
																return e.stop();
														}
												},
												e,
												this
											);
										})
									)),
									function (e, t) {
										return o.apply(this, arguments);
									}),
							},
							{
								key: 'onInjectScript',
								value: function (e) {
									var t = e.scriptTags;
									t && (t[0].onload = this.onLoadVoiceItLibrary);
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this,
										t = this.state.insertVoiceIt;
									return (0, w.jsxs)(r.Fragment, {
										children: [
											t &&
												(0, w.jsx)(p.q, {
													script: [
														{src: '../../../voiceit_library/voiceit2.min.js'},
													],
													onChangeClientState: function (t, n) {
														return e.onInjectScript(n);
													},
												}),
											(0, w.jsx)(y.Z, {}),
										],
									});
								},
							},
						]),
						n && E(t.prototype, n),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						P
					);
				})(r.Component);
			const O = (0, o.$)(F, {
				listenTo: function () {
					return [l.Z, h.Z, d.Z];
				},
				getProps: function () {
					return {
						isLoading: l.Z.getState().isLoading,
						openLogin: l.Z.getState().openLogin,
						privKey: l.Z.getState().privKey,
						authData: l.Z.getState().authData,
						setOpenLoginInstance: l.Z.setOpenLoginInstance,
						setPrivKey: l.Z.setPrivKey,
						setAuthData: l.Z.setAuthData,
						resolve: d.Z.getState().resolve,
					};
				},
			});
		},
	},
]);
