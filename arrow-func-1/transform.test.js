let transform = require('./transform');

test('Should return empty string for input as an empty array: ', () => {
    expect(transform([])).toBe('');
});

test('Should return "Haf" for input as "Hello arrow functions" :', () => {
    expect(transform(['Hello', 'arrow', 'functions'])).toBe('Haf');
});