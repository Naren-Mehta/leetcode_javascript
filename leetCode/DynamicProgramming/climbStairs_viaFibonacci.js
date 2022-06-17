var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }
  let prev2 = 1;
  let prev1 = 2;
  for (let i = 3; i <= n; i++) {
    let result = prev1 + prev2;
    prev2 = prev1;
    prev1 = result;
  }

  return prev1;
};

console.log(climbStairs(10));
