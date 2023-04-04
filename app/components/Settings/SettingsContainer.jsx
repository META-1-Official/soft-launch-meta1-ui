import React from 'react';
import counterpart from 'counterpart';
import SettingsStore from 'stores/SettingsStore';
import IntlStore from 'stores/IntlStore';
import AltContainer from 'alt-container';
import Settings from './Settings';
import PageHeader from 'components/PageHeader/PageHeader';
class SettingsContainer extends React.Component {
	render() {
		return (
			<AltContainer
				stores={[SettingsStore]}
				inject={{
					settings: () => {
						return SettingsStore.getState().settings;
					},
					viewSettings: () => {
						return SettingsStore.getState().viewSettings;
					},
					defaults: () => {
						return SettingsStore.getState().defaults;
					},
					localesObject: () => {
						return IntlStore.getState().localesObject;
					},
					apiLatencies: () => {
						return SettingsStore.getState().apiLatencies;
					},
				}}
			>
				<PageHeader
					title={counterpart.translate('header.settings')}
					showDivider
					level={2}
				/>
				<Settings {...this.props} />
			</AltContainer>
		);
	}
}

export default SettingsContainer;
