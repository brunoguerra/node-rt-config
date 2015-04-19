module.exports = RuntimeConfig;

var __rt_storage = "./yaml-config";
var __rt_config = {};

function RuntimeConfig () {
	return __rt_config;
}

RuntimeConfig.storage = storage;
RuntimeConfig.invalidate = invalidate;

function invalidate () {
	delete require.cache[require.resolve(__rt_storage)];
	__rt_config = require(__rt_storage);
}

function storage (storageNew) {
	__rt_storage = storageNew;
	invalidate();
}

/* starts invalidating */
invalidate();
