import React, {useEffect, useRef} from 'react';

const CircleProgressBar = ({
	width,
	height,
	progress,
	backgroundLineColor,
	progressLineColor,
	backgroundLineSize,
	progressLineSize,
	backgroundLineLength,
	progressLineLength,
	progressLineSpacing,
	style,
}) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Increase canvas resolution for better quality
		const scaleFactor = window.devicePixelRatio;
		canvas.width = width * scaleFactor;
		canvas.height = height * scaleFactor;

		// Enable anti-aliasing
		ctx.imageSmoothingEnabled = true;
		ctx.scale(scaleFactor, scaleFactor);

		const centerX = width / 2;
		const centerY = height / 2;
		const radius1 = 160;
		const radius2 = 165;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw a black background with 75% transparency
		ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Clear a transparent hole in the center
		ctx.globalCompositeOperation = 'destination-out';
		ctx.arc(centerX, centerY, radius1 - progressLineLength, 0, 2 * Math.PI);
		ctx.fill();
		ctx.globalCompositeOperation = 'source-over';

		// Draw the background circle with background dashes
		ctx.beginPath();
		for (
			let angle = 0;
			angle <= 2 * Math.PI;
			angle += (Math.PI / 180) * progressLineSpacing
		) {
			const startX1 =
				centerX + (radius1 - backgroundLineSize / 2) * Math.cos(angle);
			const startY1 =
				centerY + (radius1 - backgroundLineSize / 2) * Math.sin(angle);
			const endX1 =
				centerX +
				(radius1 - backgroundLineSize / 2 - backgroundLineLength) *
					Math.cos(angle);
			const endY1 =
				centerY +
				(radius1 - backgroundLineSize / 2 - backgroundLineLength) *
					Math.sin(angle);
			ctx.moveTo(startX1, startY1);
			ctx.lineTo(endX1, endY1);
		}
		ctx.strokeStyle = backgroundLineColor;
		ctx.lineWidth = 2;
		ctx.stroke();

		// Draw the progress arc with progress dashes
		ctx.beginPath();
		for (
			let angle = 0;
			angle <= 2 * Math.PI;
			angle += (Math.PI / 180) * progressLineSpacing
		) {
			if (angle <= 2 * Math.PI * progress) {
				const startX2 =
					centerX + (radius2 - progressLineSize / 2) * Math.cos(angle);
				const startY2 =
					centerY + (radius2 - progressLineSize / 2) * Math.sin(angle);
				const endX2 =
					centerX +
					(radius2 - progressLineSize / 2 - progressLineLength) *
						Math.cos(angle);
				const endY2 =
					centerY +
					(radius2 - progressLineSize / 2 - progressLineLength) *
						Math.sin(angle);
				ctx.moveTo(startX2, startY2);
				ctx.lineTo(endX2, endY2);
			}
		}
		ctx.strokeStyle = progressLineColor;
		ctx.lineWidth = progressLineSize;
		ctx.stroke();
	}, [
		width,
		progress,
		backgroundLineColor,
		progressLineColor,
		backgroundLineSize,
		progressLineSize,
		backgroundLineLength,
		progressLineLength,
		progressLineSpacing,
	]);

	return (
		<canvas
			ref={canvasRef}
			width={width}
			height={height}
			style={style}
		></canvas>
	);
};

export default CircleProgressBar;
