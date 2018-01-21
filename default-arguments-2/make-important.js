module.exports = function (message, exclamationCount = message.length) {
	let exclamations = '!'.repeat(exclamationCount);
	return `${message}${exclamations}`;
}