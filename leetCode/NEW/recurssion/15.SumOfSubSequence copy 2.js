function print(arr, index, result, mySum, sum ){

    if (mySum > sum) return 0;

    if(index === arr.length){
        if(sum === mySum){
            // console.log("result===", result);
            return 1;
        }

        return 0;
    }

    result.push(arr[index]);
    mySum += arr[index];

    const left = print(arr, index+1, result, mySum, sum);

    mySum -= arr[index];;
    result.pop();

    const right = print(arr, index+1, result, mySum, sum);

    return left + right;

}
function printAllSubsequenceWithSum(arr, sum){
    return print(arr, 0, [], 0, sum) ;
}

console.log("===", printAllSubsequenceWithSum([1, 2, 1], 2));