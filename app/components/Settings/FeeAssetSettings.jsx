import React from 'react';
import counterpart from 'counterpart';
import {connect} from 'alt-react';
import SettingsStore from '../../stores/SettingsStore';
import {ChainStore} from 'meta1-vision-js';
import Translate from 'react-translate-component';
import AssetName from '../Utility/AssetName';
import SetDefaultFeeAssetModal from '../Modal/SetDefaultFeeAssetModal';
import StyledButton from 'components/Button/Button';

class FeeAssetSettings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			current_asset:
				ChainStore.assets_by_symbol.get(props.fee_asset) || '1.3.0',
		};
	}

	shouldComponentUpdate() {
		return true;
	}

	render() {
		const asset = ChainStore.getAsset(this.state.current_asset);
		return (
			<div className="fee-asset-wrapper">
				<div>
					<Translate
						component="span"
						content="settings.current_fee_asset"
						className="current-fee-asset"
					/>
					{asset ? <AssetName name={asset.get('symbol')} /> : null}
				</div>

				<StyledButton
					buttonType="primary"
					key="open_change_fee_asset"
					onClick={() => this.setState({showModal: true})}
				>
					{counterpart.translate('settings.change_default_fee_asset')}
				</StyledButton>
				{this.state.showModal && (
					<SetDefaultFeeAssetModal
						key="change_fee_asset_modal"
						className="modal"
						show={this.state.showModal}
						current_asset={this.state.current_asset}
						displayFees={false}
						forceDefault={false}
						onChange={(value) => {
							this.setState({current_asset: value});
						}}
						close={() => {
							this.setState({showModal: false});
						}}
					/>
				)}
			</div>
		);
	}
}

export default connect(FeeAssetSettings, {
	listenTo() {
		return [SettingsStore];
	},
	getProps(props) {
		return {
			fee_asset: SettingsStore.getState().settings.get('fee_asset'),
		};
	},
});
