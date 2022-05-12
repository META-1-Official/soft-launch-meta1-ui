import React from 'react';

const SectionBlock = ({title, children}) => {
	return (
		<div className="section">
			<div className="header-title">{title}</div>
			<div className="section-content">{children}</div>
		</div>
	);
};

export default SectionBlock;
