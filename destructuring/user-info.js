function userInfo(userData) {
	let [, username, email] = userData;
	return {
		username,
		email
	};
}

module.exports = userInfo;

console.log(userInfo(process.argv.slice(2)));