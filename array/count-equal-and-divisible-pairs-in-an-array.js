var countPairs = function(nums, k) {
    var count =0;

    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j] && (i*j)%k ===0){
                count++;
            }
        }
    }
    return count;
};

console.log(countPairs([3,1,2,2,2,1,3], 2));