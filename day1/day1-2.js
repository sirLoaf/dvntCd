var fs = require('fs');

function init() {
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        if(err) throw err;
        arr = data.split("\r\n");
        console.log(arr);
        calculationOfFuel(arr);
    });
}
//init();
function calculationOfFuel(arrayOfComponents){
    var fuel = arrayOfComponents.map(function(x) {
        return singleCalcOfFuel(x);
    });
    console.log(fuel);
    
    console.log(summarizeFuel(fuel));
}
function singleCalcOfFuel(singleComponent){
    if(singleComponent <= 6) return 0;
    var tmp = Math.floor(parseInt(singleComponent)/3)-2
    return tmp + singleCalcOfFuel(tmp);
}
function summarizeFuel(arrayOfFuel){
    return arrayOfFuel.reduce(function(acc, current) {
        return acc+current;
    });
}

module.exports = {
    singleCalcOfFuel : singleCalcOfFuel
}
