import React from 'react';
import AltContainer from 'alt-container';
import counterpart from 'counterpart';
import {Form} from 'antd';
import WalletUnlockStore from 'stores/WalletUnlockStore';
import SettingsActions from 'actions/SettingsActions';

const LoginTypeSelectorView = ({value, onChange}) => (
	<div className="login-type-selector">
		<div className="cloud-login-btn" onClick={() => onClick('cloud')}>
			{counterpart.translate('account.name')} (
			{counterpart.translate('wallet.password_model').toLowerCase()})
		</div>
		<div className="local-login-btn" onClick={() => onClick('local')}>
			{counterpart.translate('wallet.key_file')} (
			{counterpart.translate('wallet.wallet_model').toLowerCase()})
		</div>
	</div>
);

const onClick = (value) => {
	const newType = value;
	const validValues = ['cloud', 'local'];
	if (!newType in validValues) throw new Error('Invalid login type value');

	return SettingsActions.changeSetting({
		setting: 'passwordLogin',
		value: newType === 'cloud',
	});
};

export default LoginTypeSelectorView;
