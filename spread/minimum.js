let minimum = function () {
	let numbersArray = Array.prototype.slice.call(arguments);

	let minValue = numbersArray.reduce((accumulator, currentNumber) => {
		return accumulator < currentNumber ? accumulator : currentNumber;
	}, Infinity);

	return minValue;
}

module.exports = minimum;

//console.log(`The minimum of [${process.argv.slice(2)}] is ${minimum(...process.argv.slice(2))}`);