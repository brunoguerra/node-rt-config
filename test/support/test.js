var chai    = require('chai')
  , expect  = chai.expect
  , sinon   = require('sinon')
  , sinonChai = require("sinon-chai")
  , chaiUse = chai.use(sinonChai)
  ;

module.exports = {
  chai: chai,
  expect: expect,
  sinon: sinon
}
