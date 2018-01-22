const makeImportant = require('./make-important');

test('Should return empty string for input as an empty string:', () => {
  expect(makeImportant('')).toBe('');
});

test('Should return "Hi!!" for input as Hi:', () => {
  expect(makeImportant('Hi')).toBe('Hi!!');
});

test('Should return "Hello!!" for input as "Hello" and 8', () => {
  expect(makeImportant('Hello', 8)).toBe('Hello!!!!!!!!');
});

test('Should return "test!!!!" for input as "test" and undefined', () => {
  expect(makeImportant('test', undefined)).toBe('test!!!!');
});
