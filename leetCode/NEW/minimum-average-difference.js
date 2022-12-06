const minimumAverageDifference = function(nums) {
    let minAvg = Number.MAX_VALUE;
    let index;
    for(let i=0; i<nums.length; i++){
        const firstArr = nums.slice(0, i+1);
        const secondArr = nums.slice(i+1, nums.length);
        const avg1 = firstArr.length ===0 ? 0 : Math.floor(firstArr.reduce((acc, curr) => acc+= curr, 0) / firstArr.length);
        const avg2 = secondArr.length ===0 ? 0 : Math.floor(secondArr.reduce((acc, curr) => acc+= curr, 0) / secondArr.length);

        if(minAvg > Math.abs(avg1 - avg2)){
            minAvg = Math.abs(avg1 - avg2);
            index = i;
        }
    }

    return index;
};

const result = minimumAverageDifference([1, 2, 3, 4, 5]);
console.log(result);