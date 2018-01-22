const foot = require('./this');

test('foot.kick() should set the value of yelp property "Ouch!"', () => {
  foot.kick();
  expect(foot.yelp).toBe('Ouch!');
});
