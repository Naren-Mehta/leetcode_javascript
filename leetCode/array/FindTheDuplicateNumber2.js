var findDuplicate = function(nums) {
    
    while (nums[0] != nums[nums[0]]) {
        console.log(nums[0], nums[1]);
        let nxt = nums[nums[0]];
        nums[nums[0]] = nums[0];
        nums[0] = nxt;
        console.log(nums);
    }
    return nums[0];
};

const arr = [1,3,4,2,2];
const result = findDuplicate(arr);
console.log(result);