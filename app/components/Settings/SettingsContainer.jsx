import React from 'react';
import SettingsStore from 'stores/SettingsStore';
import IntlStore from 'stores/IntlStore';
import AltContainer from 'alt-container';
import Settings from './Settings';
import Footer from '../Layout/Footer';
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
				<PageHeader title="Settings" />

				<Settings {...this.props} />
				<Footer />
			</AltContainer>
		);
	}
}

export default SettingsContainer;
