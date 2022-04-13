'use strict';
(this.webpackChunkBitShares2_light =
	this.webpackChunkBitShares2_light || []).push([
	[975],
	{
		4622: (t, e, n) => {
			n.r(e), n.d(e, {default: () => v});
			var r = n(67294),
				o = n(11230),
				s = n(99959),
				c = n(37983),
				i = n(40840),
				a = n(58074),
				l = n.n(a),
				u = n(112),
				p = n.n(u),
				f = n(38648),
				h = n(35944),
				y = n(25108);
			function d(t) {
				return (
					(d =
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
					d(t)
				);
			}
			function x(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function b(t, e) {
				return (
					(b =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					b(t, e)
				);
			}
			function g(t, e) {
				if (e && ('object' === d(e) || 'function' == typeof e)) return e;
				if (void 0 !== e)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					);
				return (function (t) {
					if (void 0 === t)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return t;
				})(t);
			}
			function j(t) {
				return (
					(j = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					j(t)
				);
			}
			var m = (function (t) {
				!(function (t, e) {
					if ('function' != typeof e && null !== e)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(t.prototype = Object.create(e && e.prototype, {
						constructor: {value: t, writable: !0, configurable: !0},
					})),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e && b(t, e);
				})(a, t);
				var e,
					n,
					r,
					o,
					c =
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
							} catch (t) {
								return !1;
							}
						})()),
						function () {
							var t,
								e = j(r);
							if (o) {
								var n = j(this).constructor;
								t = Reflect.construct(e, arguments, n);
							} else t = e.apply(this, arguments);
							return g(this, t);
						});
				function a() {
					var t;
					return (
						(function (t, e) {
							if (!(t instanceof e))
								throw new TypeError('Cannot call a class as a function');
						})(this, a),
						((t = c.call(this)).state = {
							title: null,
							start: new Date(),
							end: null,
							pay: null,
							url: 'http://',
							vesting: 7,
						}),
						t
					);
				}
				return (
					(e = a),
					(n = [
						{
							key: 'shouldComponentUpdate',
							value: function (t, e) {
								return (
									t.currentAccount,
									this.props.currentAccount,
									!i.Z.are_equal_shallow(e, this.state)
								);
							},
						},
						{
							key: 'onSubmit',
							value: function () {
								s.Z.createWorker(this.state, this.props.currentAccount).catch(
									function (t) {
										y.log('error', t);
										var e =
											t.message && t.message.length && t.message.length > 0
												? t.message.split('stack')[0]
												: 'unknown error';
										f.Z.error({
											message: p().translate(
												'notifications.worker_create_failure',
												{error_msg: e}
											),
										});
									}
								);
							},
						},
						{
							key: 'render',
							value: function () {
								var t = this;
								return (
									y.log('state:', this.state),
									(0, h.jsx)('div', {
										className: 'grid-block',
										style: {paddingTop: 20},
										children: (0, h.jsxs)('div', {
											className: 'grid-content large-9 large-offset-3 small-12',
											children: [
												(0, h.jsx)(l(), {
													content: 'explorer.workers.create',
													component: 'h3',
												}),
												(0, h.jsxs)('form', {
													style: {maxWidth: 800},
													children: [
														(0, h.jsx)(l(), {
															content: 'explorer.workers.create_text_1',
															component: 'p',
														}),
														(0, h.jsx)(l(), {
															content: 'explorer.workers.create_text_2',
															component: 'p',
														}),
														(0, h.jsxs)('label', {
															children: [
																(0, h.jsx)(l(), {
																	content: 'explorer.workers.title',
																}),
																(0, h.jsx)('input', {
																	onChange: function (e) {
																		t.setState({title: e.target.value});
																	},
																	type: 'text',
																}),
															],
														}),
														(0, h.jsx)(l(), {
															content: 'explorer.workers.name_text',
															component: 'p',
														}),
														(0, h.jsx)('div', {
															style: {
																width: '50%',
																paddingRight: '2.5%',
																display: 'inline-block',
															},
															children: (0, h.jsxs)('label', {
																children: [
																	(0, h.jsx)(l(), {
																		content: 'account.votes.start',
																	}),
																	(0, h.jsx)('input', {
																		onChange: function (e) {
																			t.setState({
																				start: new Date(e.target.value),
																			});
																		},
																		type: 'date',
																	}),
																],
															}),
														}),
														(0, h.jsx)('div', {
															style: {
																width: '50%',
																paddingLeft: '2.5%',
																display: 'inline-block',
															},
															children: (0, h.jsxs)('label', {
																children: [
																	(0, h.jsx)(l(), {
																		content: 'account.votes.end',
																	}),
																	(0, h.jsx)('input', {
																		onChange: function (e) {
																			t.setState({
																				end: new Date(e.target.value),
																			});
																		},
																		type: 'date',
																	}),
																],
															}),
														}),
														(0, h.jsx)(l(), {
															content: 'explorer.workers.date_text',
															component: 'p',
														}),
														(0, h.jsxs)('label', {
															children: [
																(0, h.jsx)(l(), {
																	content: 'explorer.workers.daily_pay',
																}),
																(0, h.jsx)('input', {
																	onChange: function (e) {
																		t.setState({pay: e.target.value});
																	},
																	type: 'number',
																}),
															],
														}),
														(0, h.jsx)(l(), {
															content: 'explorer.workers.pay_text',
															component: 'p',
														}),
														(0, h.jsxs)('label', {
															children: [
																(0, h.jsx)(l(), {
																	content: 'explorer.workers.website',
																}),
																(0, h.jsx)('input', {
																	onChange: function (e) {
																		t.setState({url: e.target.value});
																	},
																	type: 'text',
																}),
															],
														}),
														(0, h.jsx)(l(), {
															content: 'explorer.workers.url_text',
															component: 'p',
														}),
														(0, h.jsxs)('label', {
															children: [
																(0, h.jsx)(l(), {
																	content: 'explorer.workers.vesting_pay',
																}),
																(0, h.jsx)('input', {
																	defaultValue: this.state.vesting,
																	onChange: function (e) {
																		t.setState({
																			vesting: parseInt(e.target.value),
																		});
																	},
																	type: 'number',
																}),
															],
														}),
														(0, h.jsx)(l(), {
															content: 'explorer.workers.vesting_text',
															component: 'p',
														}),
														(0, h.jsx)('div', {
															className: 'button-group',
															onClick: this.onSubmit.bind(this),
															children: (0, h.jsx)('div', {
																className: 'button',
																type: 'submit',
																children: 'Publish',
															}),
														}),
													],
												}),
											],
										}),
									})
								);
							},
						},
					]) && x(e.prototype, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					a
				);
			})(r.Component);
			const v = (m = (0, o.$)(m, {
				listenTo: function () {
					return [c.Z];
				},
				getProps: function () {
					return {currentAccount: c.Z.getState().currentAccount};
				},
			}));
		},
	},
]);
