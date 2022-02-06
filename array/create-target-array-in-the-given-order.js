// #Solution 1:

var createTargetArray = function(nums, index) {
    var result = [];
    for(var i=0; i<nums.length; i++){
        if(Number.isInteger(result[index[i]])){
            for(var j=result.length; j>index[i]; j--){
                result[j] = result[j-1];
            }
        }
        result[index[i]] = nums[i];
    }
    return result;
};

console.log(createTargetArray([0,1,0], [0,1,0]));