var input = "264793-803935"
var from = "264793"
var to = "803935"
function calcPossiblePws(inputFromString, inputToString){
    var pwCount = 0;
    var stack = [];
    from = parseInt(inputFromString);
    to = parseInt(inputToString);
    for(var i = from ; i <= to; i++){
        var toCheck = i.toString().split('');
        var skip = false;
        var twoDigitsAreTheSame = false;
        for(var x = 0; x < toCheck.length-1; x++){
            if(toCheck[x] > toCheck[x+1]){
                skip = true;
            }
            if(toCheck[x] === toCheck[x+1]){
                twoDigitsAreTheSame = true;
                //check if char occurs more than twice
                var thirdToCheck = stack.pop();
                if(thirdToCheck === toCheck[x]) twoDigitsAreTheSame = false;
                stack.push(toCheck[x+1])
            }
            
        }
        if(skip) continue;
        if(twoDigitsAreTheSame) pwCount++;
        //console.log(toCheck.join(''))
    }
    return pwCount;

}
var result = calcPossiblePws("264793", "803935");
console.log(result);

module.exports = {
    calcPossiblePws : calcPossiblePws
}