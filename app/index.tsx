import React from 'react';
import ReactDOM from 'react-dom';
import AppInit from './AppInit';
import {Global, ThemeProvider} from '@emotion/react';
import themeDark from './lib/styles/themeDark';
import themeLight from './lib/styles/themeLight';
import GlobalStyles from 'lib/styles/GlobalStyles';
import Tap from '@tapfiliate/tapfiliate-js';
import SettingsStore from 'stores/SettingsStore';
import {useState, useEffect} from 'react';

if (__PERFORMANCE_DEVTOOL__) {
	const {registerObserver} = require('react-perf-devtool');
	registerObserver();
}

const rootEl = document.getElementById('content');

function Root() {
	const [theme, setTheme] = useState(
		SettingsStore.getState().settings.get('themes')
	);

	useEffect(() => {
		SettingsStore.listen(function (state) {
			setTheme(SettingsStore.getState().settings.get('themes'));
		});
	}, []);

	return (
		<ThemeProvider theme={theme === 'darkTheme' ? themeDark : themeLight}>
			<Global
				styles={GlobalStyles(theme === 'darkTheme' ? themeDark : themeLight)}
			/>
			<AppInit />
		</ThemeProvider>
	);
}

const render = () => {
	Tap.init('30344-f2b126');
	ReactDOM.render(<Root />, rootEl);
};

render();
