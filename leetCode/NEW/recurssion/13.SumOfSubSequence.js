function print(arr, index, result, mySum, sum ){
    if(index === arr.length){
        if(sum === mySum){
            console.log("result===", result);
        }

        return;
    }

    result.push(arr[index]);
    mySum += arr[index];

    print(arr, index+1, result, mySum, sum);

    mySum -= arr[index];;
    result.pop();

    print(arr, index+1, result, mySum, sum);

}
function printAllSubsequenceWithSum(arr, sum){
    print(arr, 0, [], 0, sum) ;
}

printAllSubsequenceWithSum([1, 2, 1], 2);