import React, {useEffect} from 'react';

interface IProps {
	className: string;
	children: React.ReactNode;
}

const BodyClassName = (props: IProps) => {
	useEffect(() => {
		document.body.className = props.className;
	}, []);

	useEffect(() => {
		document.body.className = props.className;
	}, [props.className]);

	return <>{props.children}</>;
};

export default BodyClassName;
