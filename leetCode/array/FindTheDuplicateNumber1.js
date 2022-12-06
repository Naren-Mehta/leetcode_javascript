var findDuplicate = function(nums) {
    
    nums.sort((a,b) => a-b);
    let result = -1;
    nums.forEach((val, index) => {
        if(nums[index] === nums[index+1]){
            result = nums[index];
            return;
        }
    })
    
    return result;
};

const arr = [1,3,4,2,2];
const result = findDuplicate(arr);
console.log(result);