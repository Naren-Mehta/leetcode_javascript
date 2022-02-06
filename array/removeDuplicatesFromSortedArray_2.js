

var removeDuplicates = function(nums) {
    if (nums.length==0) return 0;
    var j=0;
    for (var i=0; i<nums.length; i++){
        if (nums[i]!=nums[j]){
            nums[++j]=nums[i];
        }
    }
    return ++j;
};

var x = removeDuplicates([1,1,2,2,3,3,4]);
console.log(x);