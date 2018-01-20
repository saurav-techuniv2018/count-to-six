let transform = (names) => {

    if (names.length == 0) return '';

    let firstCharacters = names.map(name => name[0]);
    let concatenated = firstCharacters.reduce((accumulator, currentValue) => {
        accumulator += currentValue;
        return accumulator;
    }, '');

    return `[${names.toString()}] becomes "${concatenated}"`;
}

module.exports = transform;
console.log(transform(process.argv.slice(2)));