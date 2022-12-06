var sumSubarrayMins = function(arr) {
    let totalMin = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            let subArr = arr.slice(i, j+1);
            totalMin += Math.min.apply(Math, subArr);
        }
    }
    return totalMin;
};

const arr = [3,1,2,4];
const result = sumSubarrayMins(arr);
console.log(result);