var assert = require('assert');
var day41 = require('../day41');

describe('Day4-2 sample input', function(){
    it('112233 should be 1', function(){
        var res = day41.calcPossiblePws("112233","112233");
        assert.equal(res, 1);
    });
    it('123444 should be 0', function(){
        var res = day41.calcPossiblePws("123444","123444");
        assert.equal(res, 0);
    });
    it('111122 should be 1', function(){
        var res = day41.calcPossiblePws("111122","111122");
        assert.equal(res, 1);
    });
});