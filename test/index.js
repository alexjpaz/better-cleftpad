var should = require('chai').should(),
  clefpadder = require('../index');

describe('#clefpad', function() {
  it('does not pad a string with zero clefs;', function() {
    clefpadder('The Greens', 0).should.equal('The Greens');
  });
  it('pads a string with one clef;', function() {
    clefpadder('LadyGaga', 1).should.equal('🎼LadyGaga🎼');
  });
  it('pads a string with two clefs;', function() {
    clefpadder('Lordi', 2).should.equal('🎼🎼Lordi🎼🎼');
  });
});
