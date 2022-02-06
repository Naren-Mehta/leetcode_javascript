var singleNumber = function(nums) {
    let num = nums[0];
    for (let i = 1; i < nums.length; i++) {
        console.log(num,nums[i]);
        console.log(num^nums[i]);
        num ^= nums[i];
        console.log()
    }
    
    return num;
};

console.log(singleNumber([4,1,2,1,2]));