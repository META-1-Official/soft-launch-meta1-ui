import React from 'react';

const TrxHash = ({trx}) => {
	const handleOpenNewTab = () => {
		const trxUrl = `${process.env.EXPLORER_META1_URL}/txs/${trx}`;
		window.open(trxUrl, '_blank');
	};
	return (
		<div
			onClick={handleOpenNewTab}
			style={{
				textDecoration: 'underline',
				color: '#ffcc00',
				cursor: 'pointer',
			}}
		>
			{trx}
		</div>
	);
};

export default TrxHash;
