let sum=0;
    for(let i=0;i<nums.length;i++){
        let min =nums[i];
        let max =nums[i];
        for(let j=i;j<nums.length;j++){
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);
            sum+= max-min;
        }
    }
    return sum;