let safelyEscape = require('./safely-escape');

let html = function (stringParts, ...namedArguments) {
	let safelyEscapedArguments = [];

	namedArguments.forEach(p => {
		let safeArg = safelyEscape(p.toString());
		safelyEscapedArguments.push(safeArg);
	});

	let outputString = '';

	for (let i = 0; i < safelyEscapedArguments.length; ++i) {
		outputString += `${stringParts[i]}${safelyEscapedArguments[i]}`;
	}

	if (stringParts.length === namedArguments.length + 1)
		outputString += stringParts[stringParts.length - 1];

	return outputString;
}

module.exports = html;