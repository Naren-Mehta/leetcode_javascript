var moveZeroes = function(nums) {
    var newArr = [];
    for(var i=0; i<nums.length;i++){
        if(nums[i]!== 0){
            newArr.push(nums[i]);
        }
    }

    for(var i= newArr.length; i< nums.length; i++){
        newArr.push(0);
    }

    return newArr;
};

console.log(moveZeroes([0,0,1]));