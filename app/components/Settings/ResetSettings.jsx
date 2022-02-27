import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import SettingsActions from 'actions/SettingsActions';
import {Typography} from 'antd';
import willTransitionTo from '../../routerTransition';
import StyledButton from 'components/Button/Button';

const {Title} = Typography;
export default class ResetSettings extends React.Component {
	constructor() {
		super();

		this.state = {
			message: null,
		};
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

	render() {
		return (
			<div>
				<div
					css={(theme) => ({
						padding: '1rem 1.5rem',
						borderBottom: `1px solid ${theme.colors.borderColor}`,
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
						content={
							'settings.' + this.props.menuEntries[this.props.activeSetting]
						}
					/>

					<Title
						css={() => ({
							'&&': {
								fontSize: '0.8125rem',
								textTransform: 'capitalize',
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
							content={`settings.${
								this.props.menuEntries[this.props.activeSetting]
							}_text`}
							className="panel-bg-color"
						/>
					</Title>
				</div>
				<div
					css={{
						padding: '1rem 1.5rem',
					}}
				>
					<Translate
						component="div"
						style={{
							fontWeight: 'normal',
							fontFamily: 'Roboto-Medium, arial, sans-serif',
							fontStyle: 'normal',
							fontSize: '14px',
						}}
						content={'settings.reset_text_description'}
						generalName={counterpart.translate('settings.general')}
						with={{
							generalName: counterpart.translate('settings.general'),
							accessName: counterpart.translate('settings.access'),
							faucetName: counterpart.translate('settings.faucet_address'),
						}}
					/>

					<StyledButton
						type="primary"
						css={{marginTop: '30px'}}
						onClick={() => {
							SettingsActions.clearSettings().then(() => {
								this._setMessage('settings.restore_default_success');
								setTimeout(() => {
									willTransitionTo(false);
								}, 50);
							});
						}}
					>
						{counterpart.translate('settings.reset')}
					</StyledButton>

					<div
						className="facolor-success"
						style={{marginTop: '20px', height: '18px'}}
					>
						{this.state.message}
					</div>
				</div>
			</div>
		);
	}
}
