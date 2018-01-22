const minimum = require('./minimum');

test('Should return Infinity for no input:', () => {
  expect(minimum(...[])).toBe(Infinity);
});

test('Should return the first value (34) for single input:', () => {
  expect(minimum(...[34])).toBe(34);
});

test('Should return minimum value (29) for input where all values are same:', () => {
  expect(minimum(...[29, 29, 29])).toBe(29);
});

test('Should return minimum value for an input with both negative and positive values:', () => {
  expect(minimum(...[-1, 2, -34, 45, -90, 34, -32])).toBe(-90);
});

test('Should return minimum value where input is passed as separate arguments without spread: ', () => {
  expect(minimum(23, -8, 0, 3, 34)).toBe(-8);
});

test('Should return -Infinity for input containing only Infinity and -Infinity:', () => {
  expect(minimum(...[Infinity, -Infinity, Infinity, Infinity])).toBe(-Infinity);
});
