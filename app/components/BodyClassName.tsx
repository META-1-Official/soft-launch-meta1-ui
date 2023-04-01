import React, {useEffect, useRef} from 'react';

interface IProps {
	className: string;
	children: React.ReactNode;
}

const BodyClassName = (props: IProps) => {
	const _getList = (className: string) => {
		return className.length ? className.split(' ') : [];
	};

	useEffect(() => {
		_getList(props.className).forEach((className) => {
			if (!document.body.classList.contains(className)) {
				document.body.classList.add(className);
			}
		});

		return () => {
			_getList(props.className).forEach((className) => {
				document.body.classList.remove(className);
			});
		};
	}, []);

	useEffect(() => {
		document.body.className = props.className;
	}, [props]);

	return <>{props.children}</>;
};

export default BodyClassName;
