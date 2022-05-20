var countPairs = function (nums, k) {
  let map = {},
    count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      let arr = map[nums[i]];
      for (let index of arr) {
        if ((index * i) % k === 0) {
          count++;
        }
      }
      arr.push(i);
      map[nums[i]] = arr;
    } else {
      map[nums[i]] = [i];
    }
  }

  return count;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
