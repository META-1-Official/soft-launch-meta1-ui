import React from 'react';
import ChartjsAreaChart from '../Graph/Graph';
import Translate from 'react-translate-component';

interface IExploreCards {
	icon: string;
	showOtherGraph: string;
	children: React.ReactNode;
	textContent: boolean;
}

const ExploreCard = ({
	icon,
	showOtherGraph,
	children,
	textContent,
}: IExploreCards) => {
	return (
		<div
			css={(theme) => ({
				border: `1px solid ${theme.colors.borderColor}`,
				borderRadius: '10px',
				background: '#15171b',
			})}
		>
			<div
				css={() => ({
					padding: '1rem 0rem 0rem 1rem',
					display: 'flex',
					justifyContent: 'flex-start',
					minHeight: '6rem',
				})}
			>
				<div
					css={() => ({
						height: '50px',
						width: '50px',
						minWidth: '50px',
						backgroundColor: 'black',
						borderRadius: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					})}
				>
					<img src={icon} alt="Logo" />
				</div>
				<div
					css={() => ({
						marginLeft: '1rem',
					})}
				>
					<Translate
						style={{fontSize: '14px', textTransform: 'uppercase'}}
						component="span"
						content={textContent}
					/>

					{children}
				</div>
			</div>
			{!showOtherGraph && (
				<div
					css={{
						'.chartjs-tooltip': {
							minWidth: '50px !important',
						},
					}}
				>
					<ChartjsAreaChart id="engaged" height={40} />
				</div>
			)}
		</div>
	);
};

export default ExploreCard;
