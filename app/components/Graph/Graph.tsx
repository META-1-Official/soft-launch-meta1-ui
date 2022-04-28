import React from 'react';
import {Line} from 'react-chartjs-2';
import {customTooltips, chartLinearGradient} from './chartUtilities';

const ChartjsAreaChart = (props: any) => {
	const {labels, datasets, options, width, height, layout, id} = props;
	const data = {
		labels,
		datasets,
	};

	return (
		<div
			className="parentContainer"
			css={{
				display: 'block',
				'.chart-divider': {
					display: 'block',
					width: '100%',
					height: '100px',
				},
				'.chartjs-tooltip': {
					opacity: 1,
					position: 'absolute',
					background: 'grey',
					boxShadow: '0 8px 10px #9299B815',
					padding: '10px 12px !important',
					borderRadius: '3px',
					border: '1px solid #F1F2F6',
					minWidth: '80px',
					'-webkit-transition': 'all 0.5s ease',
					transition: 'all 0.5s ease',
					transform: 'translate(-50%, 5%)',
					zIndex: 222,
					top: 0,
					left: 0,
					// @media only screen and (max-width: 1199px){
					//     padding: 6px 8px !important,
					// }
					'& :before': {
						position: 'absolute',
						// content: '',
						borderTop: ' 5px solid #fff',
						borderLeft: '5px solid transparent',
						borderRight: '5px solid transparent',
						bottom: '-5px',
						transform: 'translateX(-50%)',
					},
				},
				'.chartjs-tooltip-key': {
					display: 'inline-block',
					width: '10px',
					height: '10px',
					background: 'pink',
				},
				'.tooltip-title': {
					color: 'black',
					fontSize: '12px',
					fontWeight: 500,
					textTransform: 'capitalize',
					marginBottom: '4px',
				},
				'.tooltip-value': {
					color: 'black',
					fontSize: '22px',
					fontWeight: 600,
				},
				'.tooltip-value sup': {
					fontSize: '12px',
					// @media only screen and (max-width: 1199px){
					//     font-size: 11px;
					// }
				},
				table: {
					tbody: {
						td: {
							fontSize: '13px',
							fontWeight: 500,
							// paddingBottom: '3px',
							whiteSpace: 'nowrap',
							color: 'black',
							'.data-label': {
								color: 'grey',
							},
						},
					},
				},
			}}
		>
			<Line
				id={id}
				data={data}
				width={width}
				height={height}
				options={{
					tooltips: {
						mode: 'nearest',
						intersect: false,
						enabled: false,
						custom: customTooltips,
						callbacks: {
							labelColor(tooltipItem, chart) {
								return {
									backgroundColor: datasets.map((item) => item.borderColor),
									borderColor: 'transparent',
								};
							},
						},
					},
					...options,
					...layout,
				}}
			/>
		</div>
	);
};

ChartjsAreaChart.defaultProps = {
	labels: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	],

	datasets: [
		{
			data: [15, 10, 20, 35, 40, 30, 35, 40, 20, 50, 50, 70],
			borderColor: '#ffc000',
			borderWidth: 1,
			fill: true,
			backgroundColor: () =>
				chartLinearGradient(document.getElementById('engaged'), 165, {
					start: '#0e1013',
					end: '#141619',
				}),
			pointHoverRadius: 0,
			pointHoverBorderColor: 'transparent',
		},
	],
	options: {
		maintainAspectRatio: true,
		hover: {
			mode: 'nearest',
			intersect: false,
		},
		layout: {
			padding: {
				left: -10,
				right: 0,
				top: 0,
				bottom: -10,
			},
		},
		legend: {
			display: false,
			labels: {
				display: false,
			},
		},
		elements: {
			point: {
				radius: 0,
			},
		},
		scales: {
			yAxes: [
				{
					stacked: true,
					gridLines: {
						display: false,
						color: '#e5e9f2',
					},
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						display: false,
						stepSize: 10,
					},
				},
			],
			xAxes: [
				{
					stacked: true,
					gridLines: {
						display: false,
					},
					ticks: {
						beginAtZero: true,
						fontSize: 13,
						display: false,
					},
				},
			],
		},
	},
};

export default ChartjsAreaChart;
