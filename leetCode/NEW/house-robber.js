const maxProfit = function (nums, i, obj) {
  if (i >= nums.length) {
    return 0;
  }

  if (obj[i]!== undefined) {
    return obj[i];
  }

  let take = nums[i] + maxProfit(nums, i + 2, obj);
  let notTake = maxProfit(nums, i + 1, obj);

  obj[i] = Math.max(take, notTake);

  return obj[i];
};

var rob = function (nums) {
  let obj = {};
  return maxProfit(nums, 0, obj);
};

const result = rob([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

console.log(result);
