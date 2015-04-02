module.exports = rtConfig;

var __rt_storage = "lib/configs-on-data";
var __rt_config = {};

rtConfig.storage: storage;
rtConfig.invalidate: invalidate;

function rtConfig () {
	return __rt_config;
}

function invalidate () {
	var i = require.cache.indexOf(__rt_storage);
	if(i != -1) {
		require.cache.splice(i, 1);
	}

	__rt_config = require(__rt_storage);
}

function storage (storageNew) {
	__rt_storage = storageNew;
	invalidate();
}

/* starts invalidating */
invalidate();