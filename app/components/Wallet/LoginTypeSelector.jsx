import React from 'react';
import AltContainer from 'alt-container';
import counterpart from 'counterpart';
import {Form} from 'antd';
import WalletUnlockStore from 'stores/WalletUnlockStore';
import SettingsActions from 'actions/SettingsActions';

const LoginTypeSelectorView = ({type}) => {
	return (
		<div className="login-type-selector">
			<div
				className={`login-btn ${type ? 'active' : ''}`}
				onClick={() => onClick('cloud')}
			>
				{counterpart.translate('account.name')} (
				{counterpart.translate('wallet.password_model').toLowerCase()})
			</div>
			<div
				className={`login-btn ${type ? '' : 'active'}`}
				onClick={() => onClick('local')}
			>
				{counterpart.translate('wallet.key_file')} (
				{counterpart.translate('wallet.wallet_model').toLowerCase()})
			</div>
		</div>
	);
};

const onClick = (value) => {
	const validValues = ['cloud', 'local'];
	if (!value in validValues) throw new Error('Invalid login type value');

	return SettingsActions.changeSetting({
		setting: 'passwordLogin',
		value: value === 'cloud',
	});
};

export default LoginTypeSelectorView;
