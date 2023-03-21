import React from 'react';
import {Link} from 'react-router-dom';

export const DefaultOperation = ({op, block}) => {
	console.log('default op:', op);
	return (
		<span>
			<Link to={`/block/${block}`}>#{block}</Link>
		</span>
	);
};
