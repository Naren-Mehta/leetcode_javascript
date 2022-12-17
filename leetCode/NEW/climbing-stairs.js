const obj = {};
obj[1] = 1;
obj[2] = 2;

var climbStairs = function (n) {
  if (obj[n]) {
    return obj[n];
  }

  const first = climbStairs(n - 1, obj);
  obj[n - 1] = first;

  const seond = climbStairs(n - 2, obj);
  obj[n - 2] = seond;

  obj[n] = obj[n - 1] + obj[n - 2];

  return obj[n];
};

console.log(climbStairs(45));
