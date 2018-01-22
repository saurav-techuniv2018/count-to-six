const safelyEscape = (inputString) => {
  if (inputString === '') return '';

  const escapeSequences = [
    {
      char: /&/,
      escape: '&amp;',
    },
    {
      char: /'/,
      escape: '&apos;',
    },
    {
      char: /"/,
      escape: '&quot;',
    },
    {
      char: /</,
      escape: '&lt;',
    },
    {
      char: />/,
      escape: '&gt;',
    },
  ];

  let resultString = inputString;
  escapeSequences.forEach((p) => {
    resultString = resultString.replace(new RegExp(p.char, 'g'), p.escape);
  });

  return resultString;
};

const html = (stringParts, ...namedArguments) => {
  const safelyEscapedArguments = [];

  namedArguments.forEach((p) => {
    const safeArg = safelyEscape(p.toString());
    safelyEscapedArguments.push(safeArg);
  });

  let outputString = '';

  for (let i = 0; i < safelyEscapedArguments.length; i += 1) {
    outputString += `${stringParts[i]}${safelyEscapedArguments[i]}`;
  }

  if (stringParts.length === namedArguments.length + 1) {
    outputString += stringParts[stringParts.length - 1];
  }

  return outputString;
};

const name = process.argv[2];
const message = process.argv[3];
console.log(html`<b>${name} says</b>: "${message}"`);
