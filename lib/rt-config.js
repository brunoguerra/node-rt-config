var _ = require('underscore');

module.exports = get;

var __rt_storage = "lib/configs-on-data";
var __rt_config_defaults = {
	storage: storage,
	invalidate: invalidate
};

var __rt_config = {};

function get () {
	return __rt_config;
}

function invalidate () {
	var i = require.cache.indexOf(__rt_storage);
	if(i != -1) {
		require.cache.splice(i, 1);
	}

	_.extend(__rt_config_defaults, require(__rt_storage));
}

function storage (storageNew) {
	__rt_storage = storageNew;
	invalidate();
}



/* Invalidate */
invalidate();