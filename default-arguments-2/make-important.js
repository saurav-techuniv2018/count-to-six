module.exports = function (message, exclamationCount = message.length) {
  const exclamations = '!'.repeat(exclamationCount);
  return `${message}${exclamations}`;
}
;