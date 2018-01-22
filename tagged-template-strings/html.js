const safelyEscape = require('./safely-escape');

function html(stringParts, ...namedArguments) {
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
}

module.exports = html;
