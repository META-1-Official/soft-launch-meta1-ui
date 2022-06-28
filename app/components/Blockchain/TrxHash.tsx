import React, {FC, useState} from 'react';

interface TrxHashProps {
	trx: string;
}

const TrxHash: FC<TrxHashProps> = ({trx}) => {
	const [showTrx, setShowTrx] = useState<boolean>(false);
	return (
		<>
			{!showTrx ? (
				<div
					style={{
						cursor: 'pointer',
						borderRadius: '5px',
						background: 'black',
						padding: '3px',
						width: 'fit-content',
					}}
					onClick={() => setShowTrx(true)}
				>
					SHOW TRANSACTION ID
				</div>
			) : (
				<div>{trx}</div>
			)}
		</>
	);
};

export default TrxHash;
