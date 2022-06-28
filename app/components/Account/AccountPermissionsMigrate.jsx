import React, {useState, useRef} from 'react';
import PasswordInput from './../Forms/PasswordInput';
import WalletDb from 'stores/WalletDb';
import Translate from 'react-translate-component';
import Icon from '../Icon/Icon';
import counterpart from 'counterpart';
import {key} from 'meta1-vision-js';
import {Button} from 'antd';

const AccountPermissionsMigrate = (props) => {
	const [validePassword, setValidPassword] = useState(false);
	const [pass, setPass] = useState(null);
	const [generatedPassword, setGeneratedPassword] = useState(
		'P' + key.get_random_key().toWif().toString()
	);

	const onSubmit = () => {};

	const onPasswordChange = (e) => {
		let {valid} = e;
		let name = props.account.get('name');

		const active = !valid
			? null
			: WalletDb.generateKeyFromPassword(name, 'active', e.value).pubKey;
		const owner = !valid
			? null
			: WalletDb.generateKeyFromPassword(name, 'owner', e.value).pubKey;
		const memo = !valid
			? null
			: WalletDb.generateKeyFromPassword(name, 'memo', e.value).pubKey;
		setValidPassword(e.valid);
		setPass(e.value);
		props.onSetPasswordKeys({active, owner, memo});
	};

	const checkKeyUse = (key, role) => {
		if (!key) return false;
		if (role === 'memo') {
			return key === props.memoKey;
		} else {
			return props[`${role}Keys`].reduce((a, b) => {
				return b === key || a;
			}, false);
		}
	};

	const _onUseKey = (role, remove = false) => {
		if (remove) {
			props[role === 'active' ? 'onRemoveActive' : 'onRemoveOwner'](
				props[role],
				'_keys'
			);
		} else if (props[role]) {
			const weights = {
				active: props.account.getIn(['active', 'weight_threshold']),
				owner: props.account.getIn(['owner', 'weight_threshold']),
			};
			props[
				role === 'active'
					? 'onAddActive'
					: role === 'owner'
					? 'onAddOwner'
					: 'onSetMemo'
			](props[role], weights[role]);
		}
	};
	let activeInUse = checkKeyUse(props.active && props.active, 'active');
	let ownerInUse = checkKeyUse(props.owner && props.owner, 'owner');
	let memoInUse = checkKeyUse(props.memo && props.memo, 'memo');

	let useText = counterpart.translate('account.perm.use_text');
	let removeText = counterpart.translate('account.perm.remove_text');

	const renderKeyStatus = (type) => {
		// type => 0: active, 1: owner, 2: memo
		const title_content = [
			'account.perm.new_active',
			'account.perm.new_owner',
			'account.perm.new_memo',
		];
		const inUse = [activeInUse, ownerInUse, memoInUse][type];
		return (
			<div className={`key-stats-wrapper${inUse ? '' : ' in-not-use'}`}>
				<div className="key-name">
					<Translate content={title_content[type]} />
				</div>
				{/* <div>{[props.active, props.owner, props.memo][type]}</div> */}
				<Button
					type="primary"
					css={{
						color: inUse ? '#080000' : '#FFC000',
						background: inUse ? '#FFC000' : '#0A0B0D',
						border: inUse ? 'none' : '1px solid #1C1F27',
						borderRadius: '4px',
						height: '32px',
						width: '75px',
						fontSize: '16px',
						fontWeight: '600',
						display: type === 2 && inUse ? 'none' : 'unset',
					}}
					onClick={() => _onUseKey(['active', 'owner', 'memo'][type], inUse)}
				>
					{inUse ? removeText : useText}
				</Button>
			</div>
		);
	};

	return (
		<div className="cloud-wallet-key-section">
			<form onSubmit={onSubmit} noValidate>
				<label>
					<Translate content="wallet.generated" />
				</label>
				<div className="gen-password-field">
					<Icon name="key" className="key-icon" />
					<div>{generatedPassword}</div>
				</div>
				<label style={{marginTop: '35px'}}>
					<Translate content="account.perm.password_model_2" />
				</label>

				<PasswordInput
					confirmation={true}
					onChange={onPasswordChange}
					noLabel
					passwordLength={12}
					checkStrength
					placeholder="Password"
				/>
			</form>

			<div className="key-status">
				{renderKeyStatus(0)}
				{renderKeyStatus(1)}
				{renderKeyStatus(2)}
			</div>

			{memoInUse ? (
				<p style={{maxWidth: '800px', paddingTop: 10}} className="has-error">
					<Translate content="account.perm.memo_warning" />
				</p>
			) : null}
		</div>
	);
};

export default AccountPermissionsMigrate;
