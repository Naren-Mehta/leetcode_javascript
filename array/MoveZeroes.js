var moveZeroes = function(nums) {
    var shiftArray = function (index){
        for(var i=index; i<nums.length-1;i++){
            nums[i] = nums[i+1];
        }
        nums[nums.length-1] = 0;
    }
    var x =0, count = nums.length-1;

    while(x < nums.length && count >= 0){
        if(nums[x] === 0){
            shiftArray(x);
        }else{
            x++;
        }
        count--;
    }
    return nums;
};

console.log(moveZeroes([0]));