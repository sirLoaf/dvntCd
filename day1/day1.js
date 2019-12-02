var fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    arr = data.split("\r\n");
    console.log(arr);
    calculationOfFuel(arr);
});

function calculationOfFuel(arrayOfComponents){
    var fuel = arrayOfComponents.map(x => Math.floor(parseInt(x)/3)-2);
    console.log(fuel);
    var res = fuel.reduce(function(acc, current) {
        return acc+current;
    });
    console.log(res);
}
