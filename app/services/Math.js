const preciseOperation =
	(operator) =>
	(a, b, decimalDigits = 6) =>
		+operator(a, b).toFixed(decimalDigits);

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export const preciseAdd = (a, b, decimalDigits) =>
	preciseOperation(add)(a, b, decimalDigits);
export const preciseMinus = (a, b, decimalDigits) =>
	preciseOperation(minus)(a, b, decimalDigits);
export const preciseMultiply = (a, b, decimalDigits) =>
	preciseOperation(multiply)(a, b, decimalDigits);
export const preciseDivide = (a, b, decimalDigits) =>
	preciseOperation(divide)(a, b, decimalDigits);

export const ceilFloat = (floatVal, precision) =>
	Math.ceil(floatVal * 10 ** precision) / 10 ** precision;

export const floorFloat = (floatVal, precision) =>
	Math.floor(floatVal * 10 ** precision) / 10 ** precision;

export const expFloatToFixed = (x) => {
	if (Math.abs(x) < 1.0) {
		const e = parseInt(x.toString().split('e-')[1]);
		if (e) {
			x *= Math.pow(10, e - 1);
			x = '0.' + '0'.repeat(e - 1) + x.toString().substring(2);
		}
	} else {
		const e = parseInt(x.toString().split('+')[1]);
		if (e > 20) {
			x /= Math.pow(10, e - 20);
			x += '0'.repeat(e - 20);
		}
	}
	return +x;
};
