var assert = require('assert');
var day12 = require('../day1-2');

describe('Day1-2 Fuel calculation', function(){
    
    it('14 should be 2', function(){
        var res = day12.singleCalcOfFuel(14);
        assert.equal(res, 2);
    });
    it('1969 should be 966', function(){
        var res = day12.singleCalcOfFuel(1969);
        assert.equal(res, 966);
    });
    it('100756 should be 50346', function(){
        var res = day12.singleCalcOfFuel(100756);
        assert.equal(res, 50346);
    });
    it('124846 should be 62392', function(){
        var res = day12.singleCalcOfFuel(124846);
        assert.equal(res, 62392);
    });
});