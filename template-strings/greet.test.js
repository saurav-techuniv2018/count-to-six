const greet = require('./greet');

test('Should print greeting and lowercased name for input as "Michael":', () => {
  expect(greet('Michael')).toBe('Hello, Michael!\nYour name lowercased is "michael".');
});

test('Should print greeting and lowercased name for input as "thea":', () => {
  expect(greet('thea')).toBe('Hello, thea!\nYour name lowercased is "thea".');
});

test('Should return empty string if empty string is passed:', () => {
  expect(greet('')).toBe('');
});
