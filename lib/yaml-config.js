var fs = require('fs');

// resolve configuration file name from config.config_rt_file
var fileName = ((process.env['CONFIG_DIR'] || process.cwd())+'/') + (require('config').config_rt_file || "var/data.yml");

var __data = { config: { source: fileName }};
readFile();


module.exports = __data;



/**
* Read File
*/
function readFile (argument) {
  var fileContent;
  if (fs.existsSync(fileName)) {
    // Try loading the file.
    try {
      fileContent = fs.readFileSync(fileName, 'UTF-8');
    }
    catch (e2) {
      console.error(e2);
      throw new Error('Config file ' + fileName + ' cannot be read');
    }
    __data = readYaml(fileContent);
  } else {
    __data.config.found = false;
  }
}

/**
* Parse Yaml file
*/
function readYaml (fileContent) {
	var configObject, Yaml;
	// basead (or copied from) on https://github.com/lorenwest/node-config/blob/master/lib/config.js#L813
	// Why is it? to fully compatibility with node-config
	// Lazy loading
  try {
    // Try to load the better js-yaml module
    Yaml = require('js-yaml');
  }
  catch (e) {
    try {
      // If it doesn't exist, load the fallback visionmedia yaml module.
      VisionmediaYaml = require('yaml');
    }
    catch (e) { }
  }

	if (Yaml) {
		configObject = Yaml.load(fileContent);
	} else if (VisionmediaYaml) {
		// The yaml library doesn't like strings that have newlines but don't
		// end in a newline: https://github.com/visionmedia/js-yaml/issues/issue/13
		fileContent += '\n';
		configObject = VisionmediaYaml.eval(util.stripYamlComments(fileContent));
	} else {
		console.error("No YAML parser loaded.  Suggest adding js-yaml dependency to your package.json file.")
	}

	return configObject;
}
