import React from 'react';
import AltContainer from 'alt-container';
import counterpart from 'counterpart';
import {Form, Select} from 'antd';
import WalletUnlockStore from 'stores/WalletUnlockStore';
import SettingsActions from 'actions/SettingsActions';

const LoginTypeSelectorView = ({value, onChange}) => (
	<Form.Item label={counterpart.translate('account.login_with')}>
		<Select onChange={onChange} value={value}>
			<Select.Option value="passwordless">
				{counterpart.translate('wallet.passwordless_model')}(
				{counterpart.translate('wallet.password_model').toLowerCase()})
			</Select.Option>
			<Select.Option value="cloud">
				{counterpart.translate('account.name')}(
				{counterpart.translate('wallet.password_model').toLowerCase()})
			</Select.Option>
			<Select.Option value="local">
				{counterpart.translate('wallet.key_file')} (
				{counterpart.translate('wallet.wallet_model').toLowerCase()})
			</Select.Option>
		</Select>
	</Form.Item>
);

const LoginTypeSelector = (props) => (
	<AltContainer
		stores={[WalletUnlockStore]}
		inject={{
			value: () => {
				if (WalletUnlockStore.getState().passwordLogin) {
					return 'cloud';
				} else if (WalletUnlockStore.getState().passwordlessLogin) {
					return 'passwordless';
				}
				return 'local';
			},
		}}
		actions={() => ({
			onChange: (value) => {
				const newType = value;
				const validValues = ['passwordless', 'cloud', 'local'];
				if (!newType in validValues)
					throw new Error('Invalid login type value');

				SettingsActions.changeSetting({
					setting: 'passwordlessLogin',
					value: newType === 'passwordless',
				});
				return SettingsActions.changeSetting({
					setting: 'passwordLogin',
					value: newType === 'cloud',
				});
			},
		})}
	>
		<LoginTypeSelectorView {...props} />
	</AltContainer>
);

export default LoginTypeSelector;
