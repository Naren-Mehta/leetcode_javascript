
var countKDifference = function(nums, k) {
    //#Solution 2

    var count = 0, map = {};
    for(let x of nums){
        count+= map[x+k] || 0;
        count+= map[x-k] || 0;
        map[x] = 1 + (map[x] || 0);
    }
    return count;

    //#Solution 1
    // var count = 0;
    // for(var i=0; i<nums.length-1; i++){
    //     for(var j=i+1; j<nums.length; j++){
    //         if(Math.abs(nums[i] - nums[j]) === k) {
    //             count++;
    //         }
    //     }
    // }
    // return count;
};

console.log(countKDifference([9,3,1,1,4,5,4,9,5,10], 1));