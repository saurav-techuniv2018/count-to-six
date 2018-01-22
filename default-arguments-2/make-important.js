function makeImportant(message, exclamationCount = message.length) {
  const exclamations = '!'.repeat(exclamationCount);
  return `${message}${exclamations}`;
}

module.exports = makeImportant;
