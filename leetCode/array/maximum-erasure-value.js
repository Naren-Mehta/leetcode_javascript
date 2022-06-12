const maximumUniqueSubarray = function (nums) {
  let max = 0,
    sum = 0,
    i = 0,
    j = 0,
    map = {};
  while (i < nums.length && j < nums.length) {
    if (!map[nums[j]]) {
      sum += nums[j];
      map[nums[j++]] = true;
      max = Math.max(max, sum);
    } else {
      sum -= nums[i];
      delete map[nums[i++]];
    }
  }
  return max;
};
let result = maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]);
console.log(result);
