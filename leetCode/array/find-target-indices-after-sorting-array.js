var targetIndices = function(nums, target) {
    var newArr= [];
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            if(nums[i] > nums[j]){
                var x = nums[i];
                nums[i] = nums[j];
                nums[j] = x;
                
            }
        }
    }

    for(var i=0;i<nums.length;i++){
        if(nums[i] === target){
            newArr.push(i);
        }
    }

    return newArr;

};

var x = targetIndices([1,2,5,2,3], 5);
console.log(x);