const average = require('./average');

test('Should return 0 for no input:', () => {
  expect(average()).toBe(0);
});

test('Should return the input itself(10) for single argument:', () => {
  expect(average(32)).toBe(32);
});

test('Should return the same value(17) if all inputs are equal:', () => {
  expect(average(17, 17, 17, 17)).toBe(17);
});

test('Should return average for input with positive and negative numbers:', () => {
  expect(average(-2, -1, 0, 1, 2)).toBe(0);
});
