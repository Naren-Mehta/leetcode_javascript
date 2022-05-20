var largestAltitude = function (gain) {
  let sum = 0,
    max = 0;
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    max = Math.max(max, sum);
  }

  return max;
};

console.log(largestAltitude([-5,1,5,0,-7]));

// console.log(Math.max(0, ...[-4, -3, -2, -1, 4, 3, 2]));
