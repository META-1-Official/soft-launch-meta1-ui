import React, {useEffect, useRef} from 'react';

interface IProps {
	className: string;
	children: React.ReactNode;
}

const BodyClassName = (props: IProps) => {
	const prevPropsClassName = useRef(props.className);
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
	});

	/* ComponentWillReceiveProps */
	useEffect(() => {
		const currentClassName = _getList(props.className);
		const nextClassName = _getList(prevPropsClassName.current);

		currentClassName.forEach((className) => {
			if (nextClassName.indexOf(className) === -1)
				document.body.classList.remove(className);
		});

		nextClassName.forEach((className) => {
			if (!document.body.classList.contains(className)) {
				document.body.classList.add(className);
			}
		});
	});

	return <>{props.children}</>;
};

export default BodyClassName;
