import React from 'react';
import counterpart from 'counterpart';
import {Form, Menu, Typography} from 'antd';
import IntlActions from 'actions/IntlActions';
import Translate from 'react-translate-component';
import SettingsActions from 'actions/SettingsActions';
import WebsocketAddModal from './WebsocketAddModal';
import SettingsEntry from './SettingsEntry';
import AccountsSettings from './AccountsSettings';
import WalletSettings from './WalletSettings';
import PasswordSettings from './PasswordSettings';
import RestoreSettings from './RestoreSettings';
import ResetSettings from './ResetSettings';
import BackupSettings from './BackupSettings';
import AccessSettings from './AccessSettings';
import {set} from 'lodash-es';
import {getAllowedLogins, getFaucet} from '../../branding';
import FaucetSettings from './FaucetSettings';

const {Title} = Typography;
class Settings extends React.Component {
	constructor(props) {
		super();
		let menuEntries = this._getMenuEntries(props);
		let activeSetting = 0;

		let tabIndex = !!props.match.params.tab
			? menuEntries.indexOf(props.match.params.tab)
			: props.viewSettings.get('activeSetting', 0);
		if (tabIndex >= 0) activeSetting = tabIndex;

		let general = [
			'locale',
			'unit',
			'fee_asset',
			'browser_notifications',
			'showSettles',
			'walletLockTimeout',
			'themes',
			'showAssetPercent',
			'viewOnlyMode',
		];

		let generalGroup = [
			{
				title: '',
				options: ['locale', 'unit'],
			},
			{
				title: 'Default Fee Paying Asset',
				options: ['fee_asset'],
			},
			{
				title: 'Browser Notifications',
				options: [
					'browser_notifications',
					'showSettles',
					'walletLockTimeout',
					'themes',
					'showAssetPercent',
					'viewOnlyMode',
				],
			},
		];

		// disable that the user can change login method if only one is allowed

		//if (getAllowedLogins().length > 1) general.push("passwordLogin");
		general.push('reset');

		this.state = {
			isAddNodeModalVisible: false,
			isRemoveNodeModalVisible: false,
			removeNode: {
				name: null,
				url: null,
			},
			apiServer: props.settings.get('apiServer'),
			activeSetting,
			menuEntries,
			settingEntries: {
				general: general,
				access: ['apiServer', 'faucet_address'],
			},
		};

		this.showAddNodeModal = this.showAddNodeModal.bind(this);
		this.hideAddNodeModal = this.hideAddNodeModal.bind(this);
		this.showRemoveNodeModal = this.showRemoveNodeModal.bind(this);
		this.hideRemoveNodeModal = this.hideRemoveNodeModal.bind(this);

		this._handleNotificationChange = this._handleNotificationChange.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.match.params.tab !== this.props.match.params.tab &&
			!!this.props.match.params.tab
		) {
			this._onChangeMenu(this.props.match.params.tab);
		}
	}

	componentWillReceiveProps(np) {
		if (
			np.settings.get('passwordLogin') !==
			this.props.settings.get('passwordLogin')
		) {
			const currentEntries = this._getMenuEntries(this.props);
			const menuEntries = this._getMenuEntries(np);
			const currentActive = currentEntries[this.state.activeSetting];
			const newActiveIndex = menuEntries.indexOf(currentActive);
			const newActive = menuEntries[newActiveIndex];
			this.setState({
				menuEntries,
			});
			if (newActiveIndex && newActiveIndex !== this.state.activeSetting) {
				this.setState({
					activeSetting: menuEntries.indexOf(currentActive),
				});
			} else if (
				!newActive ||
				this.state.activeSetting > menuEntries.length - 1
			) {
				this.setState({
					activeSetting: 0,
				});
			}
		}
	}

	showAddNodeModal() {
		this.setState({
			isAddNodeModalVisible: true,
		});
	}

	hideAddNodeModal() {
		this.setState({
			isAddNodeModalVisible: false,
		});
	}

	showRemoveNodeModal(url, name) {
		this.setState({
			isRemoveNodeModalVisible: true,
			removeNode: {
				url,
				name,
			},
		});
	}

	hideRemoveNodeModal() {
		this.setState({
			isRemoveNodeModalVisible: false,
			removeNode: {
				url: null,
				name: null,
			},
		});
	}

	_getMenuEntries(props) {
		if (props.deprecated) {
			return ['wallet', 'backup'];
		}
		let menuEntries = [];

		menuEntries.push('general');
		if (!props.settings.get('passwordLogin')) menuEntries.push('wallet');
		menuEntries.push('accounts');
		if (!props.settings.get('passwordLogin')) menuEntries.push('password');
		if (!props.settings.get('passwordLogin')) menuEntries.push('backup');
		if (!props.settings.get('passwordLogin')) menuEntries.push('restore');
		menuEntries.push('access');

		if (getFaucet().show) menuEntries.push('faucet_address');

		menuEntries.push('reset');

		return menuEntries;
	}

	triggerModal(e, ...args) {
		this.refs.ws_modal.show(e, ...args);
	}

	_handleNotificationChange(path, value) {
		// use different change handler because checkbox doesn't work
		// normal with e.preventDefault()

		let updatedValue = set(
			this.props.settings.get('browser_notifications'),
			path,
			value
		);

		SettingsActions.changeSetting({
			setting: 'browser_notifications',
			value: updatedValue,
		});
	}

	_handleSettingsEntryChange(setting, input) {
		if (!input.target) {
			this._onChangeSetting(setting, {target: {value: input}});
		} else {
			this._onChangeSetting(setting, input);
		}
	}

	_onChangeSetting(setting, e) {
		if (e.preventDefault) e.preventDefault();

		let {defaults} = this.props;
		let value = null;

		function findEntry(targetValue, targetDefaults) {
			if (!targetDefaults) return targetValue;
			if (targetDefaults[0].translate) {
				for (var i = 0; i < targetDefaults.length; i++) {
					if (
						counterpart.translate(`settings.${targetDefaults[i].translate}`) ===
						targetValue
					) {
						return i;
					}
				}
			} else {
				return targetDefaults.indexOf(targetValue);
			}
		}

		switch (setting) {
			case 'locale':
				let myLocale = counterpart.getLocale();
				if (e.target.value !== myLocale) {
					IntlActions.switchLocale(e.target.value);
					SettingsActions.changeSetting({
						setting: 'locale',
						value: e.target.value,
					});
				}
				break;

			case 'themes':
				SettingsActions.changeSetting({
					setting: 'themes',
					value: e.target.value,
				});
				break;

			case 'defaultMarkets':
				break;

			case 'walletLockTimeout':
				let newValue = parseInt(e.target.value, 10);
				if (isNaN(newValue)) newValue = 0;
				if (!isNaN(newValue) && typeof newValue === 'number') {
					SettingsActions.changeSetting({
						setting: 'walletLockTimeout',
						value: newValue,
					});
				}
				break;

			case 'inverseMarket':
			case 'confirmMarketOrder':
				value = findEntry(e.target.value, defaults[setting]) === 0; // USDT/META1 is true, META1/USDT is false
				break;

			case 'apiServer':
				SettingsActions.changeSetting({
					setting: 'apiServer',
					value: e.target.value,
				});
				this.setState({
					apiServer: e.target.value,
				});
				break;

			case 'showSettles':
			case 'showAssetPercent':
			case 'passwordLogin':
			case 'viewOnlyMode':
				let reference = defaults[setting][0];
				if (reference.translate) reference = reference.translate;
				SettingsActions.changeSetting({
					setting,
					value: e.target.value === reference,
				});
				break;

			case 'fee_asset':
			case 'unit':
				const defaultSettings = defaults['unit'];
				let index = findEntry(e.target.value, defaultSettings);
				SettingsActions.changeSetting({
					setting: setting,
					value: defaultSettings[index],
				});
				break;

			default:
				value = findEntry(e.target.value, defaults[setting]);
				break;
		}

		if (value !== null) {
			SettingsActions.changeSetting({setting: setting, value: value});
		}
	}

	onReset() {
		SettingsActions.clearSettings();
	}

	_redirectToEntry(entry) {
		this.props.history.push('/settings/' + entry);
	}

	_onChangeMenu(entry) {
		let index = this.state.menuEntries.indexOf(entry);
		this.setState({
			activeSetting: index,
		});

		SettingsActions.changeViewSetting({activeSetting: index});
	}
	onSettingMenuClick = (e) => {
		const {key} = e;
		this.setState({current: key});
		this._redirectToEntry(key);
	};

	render() {
		let {settings, defaults} = this.props;
		const {menuEntries, activeSetting, settingEntries} = this.state;
		let entries;
		let activeEntry = menuEntries[activeSetting] || menuEntries[0];

		switch (activeEntry) {
			case 'accounts':
				entries = (
					<AccountsSettings
						menuEntries={menuEntries}
						activeSetting={activeSetting}
					/>
				);
				break;

			case 'wallet':
				entries = <WalletSettings {...this.props} />;
				break;

			case 'password':
				entries = <PasswordSettings />;
				break;

			case 'backup':
				entries = <BackupSettings />;
				break;

			case 'restore':
				entries = (
					<RestoreSettings
						passwordLogin={this.props.settings.get('passwordLogin')}
					/>
				);
				break;

			case 'access':
				entries = (
					<AccessSettings
						faucet={settings.get('faucet_address')}
						nodes={defaults.apiServer}
						onChange={this._onChangeSetting.bind(this)}
						showAddNodeModal={this.showAddNodeModal}
						showRemoveNodeModal={this.showRemoveNodeModal}
						menuEntries={menuEntries}
						activeSetting={activeSetting}
					/>
				);
				break;
			case 'faucet_address':
				entries = (
					<FaucetSettings
						disabled={!getFaucet().editable}
						defaultValue={settings.get('faucet_address')}
						onChange={() =>
							getFaucet().editable
								? this._onChangeSetting.bind(this, 'faucet_address')
								: null
						}
						menuEntries={menuEntries}
						activeSetting={activeSetting}
					/>
				);
				break;

			case 'reset':
				entries = (
					<ResetSettings
						menuEntries={menuEntries}
						activeSetting={activeSetting}
					/>
				);
				break;

			default:
				entries = (
					<div
						css={{
							padding: '0rem 1rem',
						}}
					>
						<div
							css={() => ({
								padding: '1rem 1.5rem 0rem',
							})}
						>
							<Translate
								component="h3"
								css={(theme) => ({
									'&&': {
										color: theme.colors.primaryColor,
										marginBottom: '10px',
										fontSize: '1.25rem',
										textTransform: 'capitalize',
										marginBottom: '10px',
										fontWeight: '100',
										fontSize: '1.35rem',
									},
								})}
								content={'settings.' + menuEntries[activeSetting]}
							/>

							<Title
								css={() => ({
									'&&': {
										fontSize: '0.8125rem',
										marginTop: '10px',
									},
								})}
							>
								<Translate
									unsafe
									style={{
										paddingTop: 5,
										marginBottom: 30,
									}}
									content={`settings.${menuEntries[activeSetting]}_text`}
									className="panel-bg-color"
								/>
							</Title>
						</div>
						{settingEntries[activeEntry].map((setting) => {
							return (
								<SettingsEntry
									key={setting}
									setting={setting}
									settings={settings}
									defaults={
										defaults[setting === 'fee_asset' ? 'unit' : setting]
									}
									onChange={this._handleSettingsEntryChange.bind(this)}
									onNotificationChange={this._handleNotificationChange}
									locales={this.props.localesObject}
									{...this.state}
								/>
							);
						})}
					</div>
				);

				break;
		}
		return (
			<div
				css={{
					padding: '0.3rem 2rem',
					width: '75%',
				}}
			>
				<Menu
					onClick={this.onSettingMenuClick}
					selectedKeys={[activeEntry]}
					mode="horizontal"
				>
					{menuEntries.map((entry, index) => {
						return (
							<Menu.Item
								key={entry}
								className={index === activeSetting ? 'active' : ''}
							>
								<Translate content={'settings.' + entry} />
							</Menu.Item>
						);
					})}
				</Menu>
				<div
					css={(theme) => ({
						border: `1px solid ${theme.colors.borderColor}`,
						borderRadius: '7px',
					})}
				>
					<Form layout={'vertical'}>
						<div
							className={
								this.props.deprecated ? '' : 'grid-block settings-container'
							}
						>
							<div
								css={{
									height: '100%',
									flex: '1 1 auto',
								}}
							>
								<div className="grid-block small-12 no-margin vertical">
									{entries}
								</div>
							</div>
							{/* </div> */}
							<WebsocketAddModal
								removeNode={this.state.removeNode}
								isAddNodeModalVisible={this.state.isAddNodeModalVisible}
								isRemoveNodeModalVisible={this.state.isRemoveNodeModalVisible}
								onAddNodeClose={this.hideAddNodeModal}
								onRemoveNodeClose={this.hideRemoveNodeModal}
								apis={defaults['apiServer']}
								api={defaults['apiServer']
									.filter((a) => {
										return a.url === this.state.apiServer;
									})
									.reduce((a, b) => {
										return b && b.url;
									}, null)}
								changeConnection={(apiServer) => {
									this.setState({apiServer});
								}}
							/>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

export default Settings;
