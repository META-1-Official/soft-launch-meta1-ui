import React from 'react';
import counterpart from 'counterpart';
import SettingsActions from 'actions/SettingsActions';

const LoginTypeSelectorView = ({type}) => {
	return (
		<div className="login-type-selector">
			<div
				className={`login-btn ${type ? 'active' : ''}`}
				onClick={() => onClick('cloud')}
			>
				Password Login (
				{counterpart.translate('wallet.password_model').toLowerCase()})
			</div>
			<div
				className={`login-btn ${type ? '' : 'active'}`}
				onClick={() => onClick('passwordless')}
			>
				Passwordless Login (Torus)
			</div>
		</div>
	);
};

const onClick = (value) => {
	const validValues = ['cloud', 'local', 'passwordless'];
	if (!value in validValues) throw new Error('Invalid login type value');

	SettingsActions.changeSetting({
		setting: 'passwordlessLogin',
		value: value === 'passwordless',
	});
	return SettingsActions.changeSetting({
		setting: 'passwordLogin',
		value: value === 'cloud',
	});
};

export default LoginTypeSelectorView;
