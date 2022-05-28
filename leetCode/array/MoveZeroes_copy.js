var moveZeroes = function(nums) {
    var count =0;
   for(var i=0; i< nums.length ; i++){
    if(nums[i] === 0){
        count++;
    }else if (count>0){
        nums[i-count]= nums[i];
        nums[i] = 0;
    }
   }
   return nums;
};

console.log(moveZeroes([0,1,0,3,12]));