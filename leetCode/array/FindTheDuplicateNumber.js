var findDuplicate = function(nums) {
    let obj ={};
    let result = -1
    nums.forEach(num => {
        if(obj[num]){
              result = num;
         }else {
             obj[num] = true;
         }
    });
    
    return result;
};

const arr = [1,3,4,2,2];
const result = findDuplicate(arr);
console.log(result);