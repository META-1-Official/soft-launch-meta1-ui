const preciseOperation =
	(f) =>
	(a, b, decimalDigits = 6) =>
		+f(a, b).toFixed(decimalDigits);

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

export const ceilFloat = (floatVal, precision) => {
	precision = Math.pow(10, precision);
	return Math.ceil(floatVal * precision) / precision;
};

export const floorFloat = (floatVal, precision) => {
	precision = Math.pow(10, precision);
	return Math.floor(floatVal * precision) / precision;
};

export const expFloatToFixed = (x) => {
	var e;
	if (Math.abs(x) < 1.0) {
		e = parseInt(x.toString().split('e-')[1]);
		if (e) {
			x *= Math.pow(10, e - 1);
			x = '0.' + new Array(e).join('0') + x.toString().substring(2);
		}
	} else {
		e = parseInt(x.toString().split('+')[1]);
		if (e > 20) {
			e -= 20;
			x /= Math.pow(10, e);
			x += new Array(e + 1).join('0');
		}
	}
	return x;
};
