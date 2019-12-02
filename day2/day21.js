var fs = require('fs');

function readData(){
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        if(err) throw err;
        arr = data.split(",").map(x => parseInt(x));
        //return arr;
        figuringOut(arr);
    });
}

function init(noun, verb, arr) {
    var copyOfData = arr.slice();
    copyOfData[1]=noun;
    copyOfData[2]=verb;
    resetProgram(copyOfData);
    //console.log(arr);
    if(copyOfData[0] === 19690720){
        console.log("YES: " + noun +" "+verb)
    }
    //console.log(noun + " " + verb + copyOfData[0]);

}
function figuringOut(arr){
    for(var i = 0; i < 100; i++){
        for(var j = 0; j < 100; j++){
            init(i, j, arr);
        }
    }
}
readData();


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