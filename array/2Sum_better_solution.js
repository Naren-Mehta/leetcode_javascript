var twoSum = function(nums, target) {
    let temp = {}
    for (let i = 0; i < nums.length; i++) {
        const d = target - nums[i]
        if (temp[d] !== undefined) {
            return [i, temp[d]]
        }
        temp[nums[i]] = i
    }
};

console.log(twoSum([2,7,11,15], 9));