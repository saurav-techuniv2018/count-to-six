const greet = require('./greet');

test('Should print greeting and lowercased name for input as "Michael":', function () {
	expect(greet('Michael')).toBe('Hello, Michael!\nYour name lowercased is "michael".');
});

test('Should print greeting and lowercased name for input as "Thea":', function () {
	expect(greet('Thea')).toBe('Hello, Thea!\nYour name lowercased is "thea".');
});

test('Should return empty string if empty string is passed:', function () {
	expect(greet('')).toBe('');
})