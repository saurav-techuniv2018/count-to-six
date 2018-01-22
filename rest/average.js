module.exports = function average(...numbers) {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((accumulator, currentNumber) =>
    accumulator + currentNumber, 0);

  return sum / numbers.length;
}
;