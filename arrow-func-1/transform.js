let transform = (names) => {

    let firstCharacters = names.map(name => name[0]);
    let concatenated = firstCharacters.reduce((accumulator, currentValue) => {
        accumulator += currentValue;
        return accumulator;
    }, '');

    return concatenated;
}

module.exports = transform;