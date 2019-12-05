var input = "264793-803935"
var from = "264793"
var to = "803935"
var pwCount = 0;

for(var i = 264793 ; i <= 803935; i++){
    var toCheck = i.toString().split('');
    var skip = false;
    var twoDigitsAreTheSame = false;
    for(var x = 0; x < toCheck.length-1; x++){
        if(toCheck[x] > toCheck[x+1]){
            skip = true;
        }
        if(toCheck[x] === toCheck[x+1]){
            twoDigitsAreTheSame = true;
        }
    }
    if(skip) continue;
    if(twoDigitsAreTheSame) pwCount++;
    //console.log(toCheck.join(''))
}
console.log(pwCount);
