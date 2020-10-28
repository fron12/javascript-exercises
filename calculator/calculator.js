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

function factorial(num) {
	if(num === 0) {
		return 1;
	}
	let total = 1;
	for(let i = num; i > 0; i--){
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}