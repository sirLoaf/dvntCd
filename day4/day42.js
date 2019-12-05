var input = "264793-803935"
var from = "264793"
var to = "803935"
function calcPossiblePws(inputFromString, inputToString, star){
    var pwCount = 0;
    from = parseInt(inputFromString);
    to = parseInt(inputToString);
    switch (star){
        case 1:
            for(var i = from ; i <= to; i++){
                var toCheck = i.toString();
                if(ruleOne(toCheck) && ruleTwo(toCheck)) pwCount++;
            }
            break;
        case 2:
            for(var i = from ; i <= to; i++){
                var toCheck = i.toString();
                if(ruleTwo(toCheck) && ruleThree(toCheck)) pwCount++;
            }
            break;
        default:
            for(var i = from ; i <= to; i++){
                var toCheck = i.toString();
                if(ruleOne(toCheck) && ruleTwo(toCheck)) pwCount++;
            }
            break;
    }
    console.log("PW Count for Star: "+ star + " : " +pwCount);
    return pwCount;
}
var result = calcPossiblePws("264793", "803935", 1);
var result2 = calcPossiblePws("264793", "803935", 2);
//console.log(result);

function ruleOne(toCheck){
    for(var i = 0 ; i < toCheck.length-1 ; i++){
        if(toCheck[i] == toCheck[i+1]) return true;
    }
    return false;
}
function ruleTwo(toCheck){
    for(var i = 0 ; i < toCheck.length-1 ; i++){
        if(toCheck[i] > toCheck[i+1]) return false;
    }
    return true;
}
function ruleThree(toCheck){
    var cnt = 1;
    for(var i = 1 ; i < toCheck.length ; i++){
        if(toCheck[i] === toCheck[i-1]) {
            cnt++;
        }else{
            if(cnt === 2) return true;
            cnt = 1;
        }
    }
    return cnt === 2;
}

module.exports = {
    calcPossiblePws : calcPossiblePws
}