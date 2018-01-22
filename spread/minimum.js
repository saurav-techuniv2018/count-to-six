function minimum(...numbersArray) {
  const minValue = numbersArray.reduce((accumulator, currentNumber) =>
    (accumulator < currentNumber ? accumulator : currentNumber), Infinity);

  return minValue;
}

module.exports = minimum;

// console.log(`The minimum of [${process.argv.slice(2)}] is ${minimum(...process.argv.slice(2))}`);
