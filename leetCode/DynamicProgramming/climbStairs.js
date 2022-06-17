var map = {};
var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }

  if (map[n]) {
    return map[n];
  }
  let left = climbStairs(n - 1);
  let right = climbStairs(n - 2);
  let count = left + right;
  map[n] = count;
  return count;
};

console.log(climbStairs(5));
