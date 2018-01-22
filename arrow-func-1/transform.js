const transform = (names) => {
  if (names.length === 0) return '';

  const firstCharacters = names.map(name => name[0]);
  const concatenated = firstCharacters.reduce((accumulator, currentValue) => {
    let resultSoFar = accumulator;
    resultSoFar += currentValue;
    return resultSoFar;
  }, '');

  return `[${names.toString()}] becomes "${concatenated}"`;
};

module.exports = transform;

// console.log(transform(process.argv.slice(2)));
