var countPairs = function(nums, k) {
    const obj = {};
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = [i];
        }else{
            let arr = obj[nums[i]];
            for(let j=0; j< arr.length; j++){
                if(i*arr[j] % k === 0){
                    count ++; 
                }
            }
            arr.push(i);
            obj[nums[i]] = arr;
        }
    }
    return count;
};

let nums = [1, 2,3,4];
let k = 1
console.log(countPairs(nums, k));