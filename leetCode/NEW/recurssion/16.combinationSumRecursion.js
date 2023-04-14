function combinationSum(arr, target, index, results, resultArr){

    if(index === arr.length){
        if(target === 0){
            resultArr.push([...results]);
        }

        return;
    }

    if(arr[index] <= target){
        results.push(arr[index]);
        combinationSum(arr, target - arr[index], index, results, resultArr);
        results.pop();
    }

    combinationSum(arr, target, index+1, results, resultArr);
}

function sum(arr, sum){
    const result = []
    combinationSum(arr, sum, 0, [], result);

    return result;
}

console.log(sum([2, 3, 6, 7], 7));