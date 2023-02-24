import React from 'react';
import ReactDOM from 'react-dom';
import AppInit from './AppInit';
import {Global, ThemeProvider} from '@emotion/react';
import themeDark from './lib/styles/themeDark';
import GlobalStyles from 'lib/styles/GlobalStyles';
import Tap from '@tapfiliate/tapfiliate-js';
import * as Sentry from '@sentry/react';
import {BrowserTracing} from '@sentry/tracing';

import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

if (__PERFORMANCE_DEVTOOL__) {
	const {registerObserver} = require('react-perf-devtool');
	registerObserver();
}

Sentry.init({
	dsn: process.env.SENTRY_DSN,
	integrations: [new BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

const rootEl = document.getElementById('content');
const render = () => {
	Tap.init('30344-f2b126');

	ReactDOM.render(
		<ThemeProvider theme={themeDark}>
			<Global styles={GlobalStyles(themeDark)} />
			<AppInit />
			<ToastContainer theme="dark" />
		</ThemeProvider>,
		rootEl
	);
};
render();
