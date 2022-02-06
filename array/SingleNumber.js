var singleNumber = function(nums) {
    var map = {};
    for(var i=0; i<nums.length;i++){
        if(map[nums[i]] === true){
            map[nums[i]] = false;
        }else{
            map[nums[i]] = true;
        }
    }

    return Object.keys(map).find(key => map[key] === true);
};

console.log(singleNumber([1]));