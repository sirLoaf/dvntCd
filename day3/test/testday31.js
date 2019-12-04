var assert = require('assert');
var day31 = require('../day31');

describe('Day3-1 sample input', function(){
    var ex11 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"];
    var ex12 = ["U62","R66","U55","R34","D71","R55","D58","R83"];

    var ex21 = ["R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"];
    var ex22 = ["U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"];

    var ex31 = ["R8","U5","L5","D3"];
    var ex32 = ["U7","R6","D4","L4"];

    it('ex1 should be 610', function(){
        var res = day31.intersectionCalculation(ex11,ex12);
        assert.equal(res, 610);
    });
    it('ex2 should be 410', function(){
        var res = day31.intersectionCalculation(ex21,ex22);
        assert.equal(res, 410);
    });
    it('ex3 should be 30', function(){
        var res = day31.intersectionCalculation(ex31,ex32);
        assert.equal(res, 30);
    });
});