
// var missingNumber = function(nums) {
//     var sum=0, l = nums.length;
//     for(var i=0;i<l;i++){
//         sum += nums[i];
//     }
//     var newSum = (l*(l+1))/2;
//     return newSum-sum;
    
// };

// console.log(missingNumber([3, 0, 1]));

// other solution

var missingNumber = function(nums) {
    var l = nums.length;
    for(var i=0;i<nums.length;i++){
        l += i- nums[i];
    }
    return l;
    
};

console.log(missingNumber([3, 0, 1]));