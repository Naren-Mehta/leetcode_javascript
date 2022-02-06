var containsDuplicate = function(nums) {
    var map = {};
    for(var i=0; i<nums.length; i++){
        if(map[nums[i]] !== undefined){
            return true;
        }else{
            map[nums[i]] = nums[i];
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,4,2]));
