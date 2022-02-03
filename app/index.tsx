import React from 'react';
import ReactDOM from 'react-dom';
import AppInit from './AppInit';
import {ThemeProvider} from '@emotion/react';
import darkTheme from './lib/styles/themeDark';

if (__PERFORMANCE_DEVTOOL__) {
	const {registerObserver} = require('react-perf-devtool');
	registerObserver();
}

const rootEl = document.getElementById('content');
const render = () => {
	ReactDOM.render(
		<ThemeProvider theme={darkTheme}>
			<AppInit />
		</ThemeProvider>,
		rootEl
	);
};
render();
