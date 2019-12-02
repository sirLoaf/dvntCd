var fs = require('fs');

function init() {
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        if(err) throw err;
        arr = data.split(",").map(x => parseInt(x));
        console.log(arr);
        arr[1]=12;
        arr[2]=2;
        resetProgram(arr);
        console.log(arr);
        console.log(arr[0]);
    });
}
init();

function resetProgram(inputArr){
    for(var i = 0; i<inputArr.length; i+=4){
        var needToStop = false;
        if(i>inputArr.length) return;
        var opCode = inputArr[i];
        switch(opCode){
            case 1:
                //addition
                var a = inputArr[i+1];
                var b = inputArr[i+2];
                var c = inputArr[i+3];
                var result = inputArr[a]+inputArr[b];
                inputArr[c] = result;
                break;
            case 2:
                //multiplication
                var a = inputArr[i+1];
                var b = inputArr[i+2];
                var c = inputArr[i+3];
                var result = inputArr[a]*inputArr[b];
                inputArr[c] = result;
                break;
            case 99:
                needToStop = true;
                break;
        }
        if(needToStop) break;
    }
    return inputArr;
}

module.exports = {
    resetProgram : resetProgram
}