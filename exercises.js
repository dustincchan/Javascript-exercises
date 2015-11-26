function uniq(ary){
  var uniqValues = new Array();
  var sortedAry = ary.sort();
  for (var idx = 1; idx < ary.length; idx++){
    if (idx === 1) {
      if (sortedAry[0] !== sortedAry[1]) {
        uniqValues.push(sortedAry[0]);
      }
    }
    if (sortedAry[idx] !== sortedAry[idx - 1]){
      uniqValues.push(sortedAry[idx]);
    }
  }
  return uniqValues;
}

function twoSum(ary) {

  var indices = new Array();
    for(var i = 0; i < ary.length; i ++) {
      for(var j = i + 1; j < ary.length; j++) {
        if (ary[i] + ary[j] === 0) {
          indices.push([i, j]);
        }
      }
    }
    return indices;
}

function myTranspose(ary) {
  var array = new Array([], [], []);
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      (array[i][j]) = (ary[j][i]);
    }
  }
  return array;
}

console.log(myTranspose([[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]]));
