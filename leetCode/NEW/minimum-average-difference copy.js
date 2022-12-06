const minimumAverageDifference = function(nums) {
    let minAvg = Number.MAX_VALUE;
    let index = 0;
    let n = nums.length;

    for(let i=1; i<nums.length; i++){
        nums[i] += nums[i-1];
    }

    for(let i=0; i<nums.length; i++){
        const left = nums[i];
        const right = nums[n -1] - left;

        const val = Math.abs(parseInt(left/(i+1)) - parseInt(right/ (n -1 -i)));

        if(val < minAvg){
            minAvg = val;
            index = i;
        }
    }

    if (parseInt(nums[n-1] / n) < minAvg) {
        index = n-1;
    }

    return index;
};

const result = minimumAverageDifference([2, 5, 3, 9, 5, 3]);
console.log(result);