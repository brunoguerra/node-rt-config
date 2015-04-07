var redis    = require('redis')
  , client   = redis.createClient()
  , chai     = require('chai')
  , expect   = chai.expect

client.on("error", function (err) {
	console.log("Error " + err);
});


describe('Storaging on redis', function(){
	var key = "string test key";
	var value = "string test val";
	it ('Store values', function(){
		client.set(key, value, redis.print);
		client.get(key, expectEqualTo(value));
	})

})

// humanize
function expectEqualTo(value) {
	return function (err, data) {
		if (err) throw err;
		expect(data).to.be.equal(value);
	}
}