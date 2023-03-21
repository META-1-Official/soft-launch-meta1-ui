import React from 'react';
import ReactDOM from 'react-dom';
import AppInit from './AppInit';
import {Global, ThemeProvider} from '@emotion/react';
import themeDark from './lib/styles/themeDark';
import themeLight from './lib/styles/themeLight';
import GlobalStyles from 'lib/styles/GlobalStyles';
import Tap from '@tapfiliate/tapfiliate-js';
import * as Sentry from '@sentry/react';
import {BrowserTracing} from '@sentry/tracing';

import SettingsStore from 'stores/SettingsStore';
import {useState, useEffect} from 'react';

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
const Root = () => {
	const [theme, setTheme] = useState(
		SettingsStore.getState().settings.get('themes')
	);

	useEffect(() => {
		SettingsStore.listen(function () {
			setTheme(SettingsStore.getState().settings.get('themes'));
		});
	}, []);

	return (
		<ThemeProvider theme={theme === 'darkTheme' ? themeDark : themeLight}>
			<Global
				styles={GlobalStyles(theme === 'darkTheme' ? themeDark : themeLight)}
			/>
			<AppInit />
			<ToastContainer theme={theme === 'darkTheme' ? 'dark' : 'light'} />
		</ThemeProvider>
	);
};
const render = () => {
	Tap.init(process.env.TAPFILIATE_ACCOUNT_ID);
	ReactDOM.render(<Root />, rootEl);
};
render();
