import React from 'react';
import PropTypes from 'prop-types';
// import {HashLoader} from "react-spinners";
import {css} from '@emotion/core';

const override = css`
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
`;

const MetaLoader = (props) => {
	const {size} = props;

	const {innerWidth: width} = window;
	const isMobile = width <= 600;

	const sizes = {
		largeMobile: {
			width: '200px',
			height: '250px',
			display: 'block',
		},
		small: {
			width: '100px',
			height: 'auto',
			margin: '3rem auto',
			display: 'block',
		},
		large: {
			width: '350px',
			height: 'auto',
			margin: '3rem auto',
			display: 'block',
		},
	};

	return (
		<div
			style={
				size === 'small'
					? {
							width: '100%',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
					  }
					: {
							width: '100%',
							height: '100vh',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
					  }
			}
		>
			<img
				style={
					size === 'large' && isMobile
						? sizes['largeMobile']
						: size === 'large' && !isMobile
						? sizes['large']
						: sizes['small']
				}
				src="https://thumbs.gfycat.com/InfiniteImaginaryIndigowingedparrot.webp"
				alt="Meta1 Loader"
			/>
		</div>
	);
};

class LoadingIndicator extends React.Component {
	static propTypes = {
		type: PropTypes.string,
		loadingText: PropTypes.string,
	};

	static defaultProps = {
		type: null,
		loadingText: null,
	};

	constructor(props) {
		super(props);
		this.state = {progress: 0};
	}

	render() {
		switch (this.props.type) {
			case 'three-bounce':
				return (
					<div className="three-bounce">
						<div className="bounce1" />
						<div className="bounce2" />
						<div className="bounce3" />
					</div>
				);
				break;
			case 'circle':
				return (
					<div className="circle-wrapper">
						<div className="circle1 circle" />
						<div className="circle2 circle" />
						<div className="circle3 circle" />
						<div className="circle4 circle" />
						<div className="circle5 circle" />
						<div className="circle6 circle" />
						<div className="circle7 circle" />
						<div className="circle8 circle" />
						<div className="circle9 circle" />
						<div className="circle10 circle" />
						<div className="circle11 circle" />
						<div className="circle12 circle" />
					</div>
				);
				break;
			case 'circle-small':
				return (
					<div
						className="circle-wrapper"
						style={{height: '15px', minHeight: '15px'}}
					>
						<div className="circle1 circle" />
						<div className="circle2 circle" />
						<div className="circle3 circle" />
						<div className="circle4 circle" />
						<div className="circle5 circle" />
						<div className="circle6 circle" />
						<div className="circle7 circle" />
						<div className="circle8 circle" />
						<div className="circle9 circle" />
						<div className="circle10 circle" />
						<div className="circle11 circle" />
						<div className="circle12 circle" />
					</div>
				);
				break;
			default:
				var classes = 'loading-overlay';
				if (this.progress > 0) {
					classes += ' with-progress';
				}
				return (
					<div className={classes}>
						<div>
							<MetaLoader size={'small'} />
						</div>
					</div>
				);
		}
	}
}

export default LoadingIndicator;
