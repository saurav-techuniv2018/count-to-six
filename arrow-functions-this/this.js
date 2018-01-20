let foot = {
	kick: function () {
		this.yelp = "Ouch!";
		setImmediate(() => {
			console.log(this.yelp);
		});
	}
};

module.exports = foot;