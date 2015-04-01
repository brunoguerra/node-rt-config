var fs = require('fs');
var config = require('config');

var fileName;
var __data = {};

fileName = config.config_rt_file || "var/data.json";

if (fs.existsSync(fileName, read)) {
	__data = fs.readFileSync(fileName);
}

module.exports = __data;
