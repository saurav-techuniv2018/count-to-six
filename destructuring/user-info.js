function userInfo(userData) {
  const [, username, email] = userData;
  return {
    username,
    email,
  };
}

module.exports = userInfo;

console.log(userInfo(process.argv.slice(2)));
