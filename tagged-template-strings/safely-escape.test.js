const safelyEscape = require('./safely-escape');

test('Should return empty string for input as empty string:', () => {
  expect(safelyEscape('')).toBe('');
});

test('Should return the input itself for input containing no invalid characters:', () => {
  expect(safelyEscape('hello')).toBe('hello');
});

test('Should return escaped string for string containing a single invalid character:', () => {
  expect(safelyEscape('Hansel & Gretel')).toBe('Hansel &amp; Gretel');
});

test('Should return escaped string for string containing a same unescaped character:', () => {
  expect(safelyEscape('Hello "World"')).toBe('Hello &quot;World&quot;');
});

test('Should return escaped string for input containing multiple invalid characters:', () => {
  expect(safelyEscape('apt update && apt upgrade > output.txt'))
    .toBe('apt update &amp;&amp; apt upgrade &gt; output.txt');
});
