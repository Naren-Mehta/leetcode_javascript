var twoSum = function (numbers, target) {
  var map = {};

  for (var i = 0; i < numbers.length; i++) {
    var diff = target - numbers[i];

    console.log(diff, map, map[diff]);
    if (map[diff] != undefined) {
      return [map[diff], i+1];
    } else {
      map[numbers[i]] = i+1;
    }
  }
  return;
};

var result = twoSum([1,2,3,4,4,9,56,90], 8);
console.log(result);