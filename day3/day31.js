var fs = require('fs');
init();
function init() {
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        if(err) throw err;
        arr = data.split("\r\n");
        wireOne = arr[0].split(",");
        wireTwo = arr[1].split(",");
        var result = intersectionCalculation(wireOne, wireTwo);
        console.log(result);
    });
}


function intersectionCalculation(wOne, wTwo){
    var wOneCordinates = createCordinates(wOne);
    var wTwoCordinates = createCordinates(wTwo);
    var res = findIntersectionAndCalculateDistance(wOneCordinates, wTwoCordinates)
    var lowestW1 = Number.POSITIVE_INFINITY;
    //console.log(res);
    for(var i = 0; i < res.length; i++){
        var tmp = res[i].stepsTotal
        if(tmp < lowestW1 && tmp !== 0) {
            lowestW1 = tmp;
        }

    }
    //console.log(lowestW1);
    return lowestW1;
    
}

function createCordinates(wire){
    var wireCordinates = [];
    var x=0;
    var y=0;
    var totalSteps=0;
    wireCordinates.push({x:0,y:0, steps:0});
    for(var i = 0; i < wire.length; i++){
        var elem = wire[i].toString();
        var steps = parseInt(elem.substring(1, elem.length));
        if(elem.startsWith("U")){
            y += steps;
        }
        if(elem.startsWith("D")){
            y -= steps;
        }
        if(elem.startsWith("L")){
            x -= steps;
        }
        if(elem.startsWith("R")){
            x += steps;
        }
        totalSteps = totalSteps+Math.abs(steps);
        wireCordinates.push({x:x, y:y, steps:totalSteps})
    }
    //console.log(wireCordinates)
    return wireCordinates;
}

function findIntersectionAndCalculateDistance(w1Cordinates, w2Cordinates){
    var dist = [];
    for(var i = 0; i < w1Cordinates.length; i++){
        for(var j = 0; j < w2Cordinates.length; j++){
            if(j+2>w2Cordinates.length) break;
            if(i+2>w1Cordinates.length) break;
            
            var rest = intersect(w1Cordinates[i].x, w1Cordinates[i].y, w1Cordinates[i+1].x, w1Cordinates[i+1].y,
                w2Cordinates[j].x, w2Cordinates[j].y, w2Cordinates[j+1].x, w2Cordinates[j+1].y);
            if(rest){
                //console.log(rest)
                dist.push({dist:Math.abs(rest.x)+Math.abs(rest.y), 
                    stepsTotal:w1Cordinates[i].steps+Math.abs(w1Cordinates[i].x-rest.x)+Math.abs(w1Cordinates[i].y-rest.y)+
                        w2Cordinates[j].steps+Math.abs(w2Cordinates[j].x-rest.x)+Math.abs(w2Cordinates[j].y-rest.y),
                    x: rest.x,
                    y: rest.y})
            }

            
        }
    }
    return dist;
}

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {

    // Check if none of the lines are of length 0
      if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
          return false
      }
  
      denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  
    // Lines are parallel
      if (denominator === 0) {
          return false
      }
  
      let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
      let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
  
    // is the intersection along the segments
      if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
          return false
      }
  
    // Return a object with the x and y coordinates of the intersection
      let x = x1 + ua * (x2 - x1)
      let y = y1 + ua * (y2 - y1)
  
      return {x, y}
}

module.exports = {
    intersectionCalculation : intersectionCalculation
}
