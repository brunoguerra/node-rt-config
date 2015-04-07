var test    = require('../support/test')
  , config  = require('config')
  , chai    = test.chai
  , sinon   = test.sinon
  , expect  = test.expect
  ;

describe('yaml-config', function () {
  var yamlconfig = null;

  it('load file', function (done) {
    config.config_rt_file = "test/fixtures/config2.yml";
    yamlconfig = require('lib/yaml-config');
    expect(yamlconfig).to.have.property('myConfiguration');
    done();
  })
})
