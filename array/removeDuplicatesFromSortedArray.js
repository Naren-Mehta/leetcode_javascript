
var leftShift = function (index, nums){
    for(var j= index; j<nums.length-1; j++){
        nums[j] = nums[j+1];
    }
    nums[nums.length-1] = undefined;
};

var removeDuplicates = function(nums) {
    var map = {}, count= 1, i= 1;
    map[nums[0]] = nums[0];
    while(nums[i] !== undefined){
        if(map[nums[i]] !== undefined){
            leftShift(i, nums);
        }else{
            map[nums[i]] = nums[i];
            i++;
            count++;
        }
    }
    console.log(nums);
    return count;
};

var x = removeDuplicates([-3,-1,-1,0,0,0,0,0,2]);
console.log(x);