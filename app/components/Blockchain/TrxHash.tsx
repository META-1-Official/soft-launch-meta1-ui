import React, {FC} from 'react';

interface TrxHashProps {
	trx: string;
}

const TrxHash: FC<TrxHashProps> = ({trx}) => {
	return <div>{trx}</div>;
};

export default TrxHash;
