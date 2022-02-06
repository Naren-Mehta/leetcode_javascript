var twoSum = function(nums, target) {
    var map = {};

    for(var i=0; i<nums.length; i++){
        map[nums[i]] = i;
    }

    for(var i=0; i<nums.length; i++){
        var value = target - nums[i];
        if(map[value] && map[value] != i){
            return [i, map[value]];
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));