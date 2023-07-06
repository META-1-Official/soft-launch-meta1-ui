import React from 'react';
import AssetStore from 'stores/AssetStore';
import SettingsStore from 'stores/SettingsStore';
import AltContainer from 'alt-container';
import Assets from './Assets';

class AssetsContainer extends React.Component {
	render() {
		return (
			<AltContainer
				stores={[AssetStore, SettingsStore]}
				inject={{
					assets: () => {
						let assets = AssetStore.getState().assets;

						// temporal code
						let asset_env_list = process.env.CRYPTOS_ARRAY.split(',');
						assets = assets.filter((asset) => {
							return asset_env_list.includes(asset.symbol);
						});

						return assets;
					},
					filterMPA: () => {
						return SettingsStore.getState().viewSettings.get('filterMPA');
					},
					filterUIA: () => {
						return SettingsStore.getState().viewSettings.get('filterUIA');
					},
				}}
			>
				<Assets />
			</AltContainer>
		);
	}
}

export default AssetsContainer;
