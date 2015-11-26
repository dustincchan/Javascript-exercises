
//ARRAY EXERCISES//
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


//Enumerable exercises
function double(num) {
  return num*2;
}

function myEach(array, fun) {
  for (var i = 0; i < array.length; i++) {
    fun(array[i]);
  }
}

Array.prototype.myEach = function(fun) {
  for (var i = 0; i < this.length; i++) {
    fun(this[i]);
  }
  return this;
}

Array.prototype.myMap = function(fun) {
  var result = new Array();

  this.myEach(function (el) {
    result.push(fun(el));
  });

  // }
  return result;
};


Array.prototype.myInject = function(accumulator, fun) {
    var i = 0;

    if (accumulator === 'undefined') {
      accumulator = this[0];
      i += 1;
    }
    while (i < this.length) {
      accumulator = fun(accumulator, this[i]);
      i += 1;
    }
    return accumulator;
}

function mySum(x, y) {
  return x + y;
}

console.log([1,2,3,4,5].myInject('undefined', mySum))
