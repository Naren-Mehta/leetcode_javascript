var runningSum = function(nums) {
    for(var i=1;i<nums.length;i++){
        nums[i] += nums[i-1];
    }
    return nums;
};

console.log(runningSum([3,1,2,10,1]));

