import React from 'react';
import Iframe from 'react-iframe';

class Arts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Iframe
				url={`${process.env.DEFAULT_ASSET_URL}explorer-backing-assets`}
				display="initial"
				position="relative"
				allowFullScreen
			/>
		);
	}
}

export default Arts;
