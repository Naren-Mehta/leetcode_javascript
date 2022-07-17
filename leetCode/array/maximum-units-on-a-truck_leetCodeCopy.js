//https://leetcode.com/problems/maximum-units-on-a-truck/

var maximumUnits = function (boxTypes, truckSize) {
  let arr = [];

  for (let i in boxTypes) {
    console.log(boxTypes[i]);
    arr[boxTypes[i][1]] = arr[boxTypes[i][1]]
      ? arr[boxTypes[i][1]] + boxTypes[i][0]
      : boxTypes[i][0];
  }
  console.log(arr);
  let boxes = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i]) {
      let fitIn = Math.min(arr[i], truckSize);
      boxes += i * fitIn;
      truckSize -= fitIn;
      if (truckSize == 0) {
        return boxes;
      }
    }
  }
  return boxes;
};

const result = maximumUnits(
  [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  10
);

console.log(result);
