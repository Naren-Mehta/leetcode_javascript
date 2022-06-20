var subArrayRanges = function(nums) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            let subArr = nums.slice(i, j+1);
            sum += Math.max(...subArr) - Math.min(...subArr);
        }
    }
    return sum;
};

console.log(subArrayRanges([1,2,3]));