const midpoint = require('./midpoint');

test('Should return 0.5 as midpoint when no arguments are passed: ', () => {
	expect(midpoint()).toBe(0.5);
});

test('Should return 0 as midpoint when argument -1 is passed (default upperBound is 1):', () => {
	expect(midpoint(-1)).toBe(0);
});

test('Should print the midpoint (4) when both lowerBound and upperBound are 4:', () => {
	expect(midpoint(4, 4)).toBe(4);
});

test('Should print the midpoint (7.5) when arguments 7 and 8 are passed:', () => {
	expect(midpoint(7, 8)).toBe(7.5);
});

test('Should print the midpoint (19) when arguments 16 and 22 are passed:', () => {
	expect(midpoint(16, 22)).toBe(19);
});