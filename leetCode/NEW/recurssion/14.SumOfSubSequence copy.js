function print(arr, index, result, mySum, sum ){
    if(index === arr.length){
        if(sum === mySum){
            console.log("result===", result);
            return true;
        }

        return false;
    }

    result.push(arr[index]);
    mySum += arr[index];

    if(print(arr, index+1, result, mySum, sum) === true) return true;

    mySum -= arr[index];;
    result.pop();

    if(print(arr, index+1, result, mySum, sum) === true) return true;

    return false;

}
function printAllSubsequenceWithSum(arr, sum){
    print(arr, 0, [], 0, sum) ;
}

printAllSubsequenceWithSum([1, 2, 1], 6);