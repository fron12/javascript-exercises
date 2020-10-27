function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	return arr.reduce((total, currentValue) => {
		return total + currentValue;
	}, 0)
}

function multiply (arr) {
	return arr.reduce((total, currentValue) => {
		return total * currentValue;
	}, 1)
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}