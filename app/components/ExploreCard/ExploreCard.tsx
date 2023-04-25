import React from 'react';
import ChartjsAreaChart from '../Graph/Graph';
import Translate from 'react-translate-component';
import {Grid} from 'antd';

const {useBreakpoint} = Grid;

interface IExploreCards {
	icon: string;
	showAreaChart: string;
	children: React.ReactNode;
	textContent: boolean;
	witnessCard: string;
}

const ExploreCard = ({
	icon,
	showAreaChart,
	children,
	textContent,
	witnessCard,
}: IExploreCards) => {
	const screens = useBreakpoint();

	return (
		<div
			className="explorer-card"
			css={(theme) => ({
				border: `1px solid ${theme.colors.borderColor}`,
				borderRadius: '10px',
				background: theme.colors.cardBackgroundColor,
				minHeight: screens['sm'] === true ? '150px' : '200px',
				position: 'relative',
			})}
		>
			<div
				css={() => ({
					padding: '1rem 0rem 0rem 1rem',
					display: 'flex',
					justifyContent: 'flex-start',
					flexDirection: screens['sm'] === true ? 'row' : 'column',
					alignItems: screens['sm'] === true ? 'flex-start' : 'center',
					textAlign: screens['sm'] === true ? 'left' : 'center',
					minHeight: witnessCard ? '5rem' : showAreaChart ? '6rem' : '134px',
				})}
			>
				<div
					css={(theme) => ({
						height: '50px',
						width: '50px',
						minWidth: '50px',
						backgroundColor: theme.colors.logoBackgroundColor,
						borderRadius: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						border: `1px solid ${theme.colors.borderColor}`,
					})}
				>
					<img src={icon} alt="Logo" />
				</div>
				<div
					css={() => ({
						marginLeft: screens['sm'] === true ? '1rem' : 0,
						marginTop: screens['sm'] === true ? 0 : '1rem',
						width: '100%',
						paddingRight: screens['sm'] === true ? '2rem' : '1rem',
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
			{showAreaChart && (
				<div
					css={{
						'.chartjs-tooltip': {
							minWidth: '50px !important',
						},
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 0,
					}}
				>
					<ChartjsAreaChart id="engaged" height={40} />
				</div>
			)}
		</div>
	);
};

export default ExploreCard;
