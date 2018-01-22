function safelyEscape(inputString) {
  if (inputString === '') return '';

  const escapeSequences = [
    {
      // Put ampersand first, or else the '&' character from other escape
      // sequences would get replaced
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
}

module.exports = safelyEscape;
