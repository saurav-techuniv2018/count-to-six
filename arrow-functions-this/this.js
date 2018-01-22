const foot = {
  kick() {
    this.yelp = 'Ouch!';
    setImmediate(() => {
      console.log(this.yelp);
    });
  },
};

module.exports = foot;

// foot.kick();
