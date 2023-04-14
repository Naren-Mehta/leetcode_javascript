
function findCombination (arr, target, index, ds, result){

    if(target === 0){
        result.push([...ds])
        return;
    }
    
    for(let i=index; i < arr.length; i++){

        if(i > index && arr[i] === arr[i-1]) {
            continue;
        }

        if(arr[i] > target){
            break;
        }

        ds.push(arr[i]);
        findCombination(arr, target - arr[i], i+1, ds, result);
        ds.pop();
    }
}

var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a-b);
    findCombination(candidates, target, 0, [], result);

    return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));