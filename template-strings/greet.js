function greet(name) {
  if (name === '') return '';

  const message = `Hello, ${name}!\nYour name lowercased is "${name.toLowerCase()}".`;
  console.log(message);

  return message;
}

module.exports = greet;

// greet(process.argv[2]);
