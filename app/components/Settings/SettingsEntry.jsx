import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import AssetName from '../Utility/AssetName';
import Notify from 'notifyjs';
import FeeAssetSettings from './FeeAssetSettings';
import {Checkbox, Select, Typography, Input, Form} from 'antd';
import StyledSelect from 'components/Select/Select';

const {Text} = Typography;
const FormItem = Form.Item;
const Option = Select.Option;

export default class SettingsEntry extends React.Component {
	constructor() {
		super();

		this.state = {
			message: null,
		};

		this.handleNotificationChange = this.handleNotificationChange.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.settings.get(prevProps.setting) !==
			this.props.settings.get(this.props.setting)
		) {
			if (this.refs.walletLockTimeoutRef) {
				this.refs.walletLockTimeoutRef.focus();
			}
		}
	}

	_setMessage(key) {
		this.setState({
			message: counterpart.translate(key),
		});

		this.timer = setTimeout(() => {
			this.setState({message: null});
		}, 4000);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	handleNotificationChange(path) {
		return (evt) => {
			this.props.onNotificationChange(path, !!evt.target.checked);
		};
	}

	render() {
		let {defaults, setting, settings} = this.props;
		let options,
			optional,
			confirmButton,
			value,
			input,
			selected = settings.get(setting);
		let noHeader = false;
		let component = null;

		switch (setting) {
			case 'locale':
				value = selected;
				options = defaults.map((entry) => {
					let translationKey = 'languages.' + entry;
					let value = counterpart.translate(translationKey);

					return (
						<Option className={'customOption'} key={entry} value={entry}>
							{value}
						</Option>
					);
				});

				break;

			case 'themes':
				value = selected;
				options = defaults.map((entry) => {
					let translationKey = 'settings.' + entry;
					let value = counterpart.translate(translationKey);

					return (
						<Option className={'customOption'} key={entry} value={entry}>
							{value}
						</Option>
					);
				});

				break;

			case 'browser_notifications':
				value = selected;

				component = (
					<div className="settings-notifications">
						<div className="settings-notifications-item">
							{counterpart.translate('settings.browser_notifications_allow')}
							<Checkbox
								id="browser_notifications.allow"
								checked={!!value.allow}
								onChange={this.handleNotificationChange('allow')}
							/>
						</div>
						<div className="settings-notifications-item">
							{counterpart.translate(
								'settings.browser_notifications_additional_transfer_to_me'
							)}
							<Checkbox
								id="browser_notifications.additional.transferToMe"
								disabled={!value.allow}
								checked={!!value.additional.transferToMe}
								onChange={this.handleNotificationChange(
									'additional.transferToMe'
								)}
							/>
						</div>
						{!!value.allow && Notify.needsPermission && (
							<a
								href="https://goo.gl/zZ7NHY"
								target="_blank"
								rel="noopener noreferrer"
								className="external-link"
							>
								<Translate
									component="div"
									className="settings-notifications-no-browser-support"
									content="settings.browser_notifications_disabled_by_browser_notify"
								/>
							</a>
						)}
					</div>
				);

				break;

			case 'fee_asset':
				options = null;
				value = true;
				component = <FeeAssetSettings key="fee_asset_component" />;
				break;

			case 'defaultMarkets':
				options = null;
				value = null;
				break;

			case 'walletLockTimeout':
				value = selected;
				input = (
					<Input
						css={(theme) => ({
							'&&': {
								backgroundColor: theme.colors.inputBackgroundColor,
								border: 'none',
								color: theme.colors.inputTextColor,
								borderRadius: '6px',
							},
						})}
						ref="walletLockTimeoutRef"
						type="text"
						value={selected}
						onChange={this.props.onChange.bind(this, setting)}
					/>
				);
				break;

			default:
				if (typeof selected === 'number') {
					value = defaults[selected];
				} else if (typeof selected === 'boolean') {
					if (selected) {
						value = defaults[0];
					} else {
						value = defaults[1];
					}
				} else if (typeof selected === 'string') {
					value = selected;
				}

				if (defaults) {
					options = defaults.map((entry) => {
						let option = entry.translate
							? counterpart.translate(`settings.${entry.translate}`)
							: entry;
						if (setting === 'unit' || setting === 'fee_asset') {
							option = <AssetName name={entry} />;
						}
						let key = entry.translate ? entry.translate : entry;
						return (
							<Option
								className={'customOption'}
								value={entry.translate ? entry.translate : entry}
								key={key}
							>
								{option}
							</Option>
						);
					});
				} else {
					input = (
						<input
							css={(theme) => ({
								'&&': {
									backgroundColor: theme.colors.inputBackgroundColor,
									border: 'none',
									color: theme.colors.inputTextColor,
									borderRadius: '6px',
								},
							})}
							type="text"
							defaultValue={value}
							onBlur={this.props.onChange.bind(this, setting)}
						/>
					);
				}
				break;
		}
		if (typeof value !== 'number' && !value && !options) return null;

		if (value && value.translate) {
			value = value.translate;
		}

		const EntryLayout = ({noHeader, setting, children}) => {
			return (
				<>
					{(noHeader && children) || (
						<FormItem label={counterpart.translate(`settings.${setting}`)}>
							{children}
						</FormItem>
					)}
				</>
			);
		};

		return (
			<div className="setting-entry">
				<EntryLayout noHeader={noHeader} setting={setting}>
					{options ? (
						<>
							{optional}
							<StyledSelect
								value={value}
								onChange={this.props.onChange.bind(this, setting)}
								disabled={setting == 'viewOnlyMode'}
							>
								{options}
							</StyledSelect>
							{confirmButton}
						</>
					) : null}
					{input ? input : null}

					{component ? component : null}
				</EntryLayout>
				<div className="facolor-success">{this.state.message}</div>
			</div>
		);
	}
}
