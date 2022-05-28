var twoSum = function (nums, target) {
    nums.sort((a,b) => a-b);
    console.log(nums);
    var i=0; j= nums.length-1;
    while(i<nums.length){
        var sum = nums[i] + nums[j];
        if(sum < target){
            i++;   
        }else if(sum > target){
                 j--;
        }else{
            return [i, j];
        }     
    }
};

console.log(twoSum([2, 7, 11, 15], 9));