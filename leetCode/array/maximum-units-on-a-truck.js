//https://leetcode.com/problems/maximum-units-on-a-truck/

var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });

  let totalUnit = 0;
  let i=0;
  while(truckSize>0 && i< boxTypes.length){
    let fitIt = Math.min(boxTypes[i][0], truckSize);
    totalUnit += fitIt * boxTypes[i][1];
    truckSize -= boxTypes[i][0];
    i++;
  }
  return totalUnit;
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
