var assert = require('assert');
var day2 = require('./day2');

describe('Day2 Program reset', function(){
    
    it('1,0,0,0,99 should be 2,0,0,0,99', function(){
        var res = day2.resetProgram([1,0,0,0,99])
        var endRes = [2,0,0,0,99];
        assert.equal(JSON.stringify(res), JSON.stringify(endRes));
    });
    it('2,3,0,3,99 should be 2,3,0,6,99', function(){
        var res = day2.resetProgram([2,3,0,3,99])
        var endRes = [2,3,0,6,99];
        assert.equal(JSON.stringify(res), JSON.stringify(endRes));
    });
    it('2,4,4,5,99,0 should be 2,4,4,5,99,9801', function(){
        var res = day2.resetProgram([2,4,4,5,99,0])
        var endRes = [2,4,4,5,99,9801];
        assert.equal(JSON.stringify(res), JSON.stringify(endRes));
    });
    it('1,1,1,4,99,5,6,0,99 should be 30,1,1,4,2,5,6,0,99', function(){
        var res = day2.resetProgram([1,1,1,4,99,5,6,0,99])
        console.log(res);
        var endRes = [30,1,1,4,2,5,6,0,99];
        assert.equal(JSON.stringify(res), JSON.stringify(endRes));
    });
});