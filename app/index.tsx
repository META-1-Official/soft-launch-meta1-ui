import React from 'react';
import ReactDOM from 'react-dom';
import AppInit from './AppInit';
import {Global, ThemeProvider} from '@emotion/react';
import themeDark from './lib/styles/themeDark';
import GlobalStyles from 'lib/styles/GlobalStyles';
import Tap from '@tapfiliate/tapfiliate-js';

if (__PERFORMANCE_DEVTOOL__) {
	const {registerObserver} = require('react-perf-devtool');
	registerObserver();
}

const rootEl = document.getElementById('content');
const render = () => {
	Tap.init('30344-f2b126');

	ReactDOM.render(
		<ThemeProvider theme={themeDark}>
			<Global styles={GlobalStyles(themeDark)} />
			<AppInit />
		</ThemeProvider>,
		rootEl
	);
};
render();
