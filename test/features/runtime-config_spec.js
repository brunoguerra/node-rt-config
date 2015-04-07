var config   = require('config')
  , test     = require('../support/test')
  , chai     = test.chai
  , expect   = test.expect
  , sinon    = test.sinon
  ;

describe('constructor', function () {
  var _subject = null;


  beforeEach(function () {
    useConfig1();
    delete require.cache[require.resolve('lib/rt-config')];
  })

	it('should load config', function (done) {
    var rtconfig = require('lib/rt-config');
    expect(rtconfig()).to.deep.property('myConfiguration.version', '0.1.0');

    useConfig2();
    rtconfig.invalidate();

    expect(rtconfig()).to.deep.property('myConfiguration.version', '0.2.0');

    done();
	})
})

function useConfig1 () {
  switchConfigFile("test/fixtures/config1.yml");
}

function useConfig2 () {
  switchConfigFile("test/fixtures/config2.yml");
}

function switchConfigFile (file) {
  config.config_rt_file = file;
}
