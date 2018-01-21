const userInfo = require('./user-info');

test('Should return username and email for valid input array:', () => {
	expect(userInfo([1, 'michael', 'michael@gmail.com', 34, 'Michael', 'Stevens']))
		.toEqual({
			username: 'michael',
			email: 'michael@gmail.com'
		});
});