
const getSubsetSum = (arr, index, sum, result) => {
    if(index >=arr.length ){
        result.push(sum);
        return;
    }

    getSubsetSum(arr, index+1, sum+ arr[index], result);
    getSubsetSum(arr, index+1, sum, result);
}

const subsetSum = (arr) =>{
    const results = [];
    getSubsetSum(arr, 0, 0, results);
    results.sort((a,b) => a-b);
    return results;
}

console.log(subsetSum([3, 1 , 2]));