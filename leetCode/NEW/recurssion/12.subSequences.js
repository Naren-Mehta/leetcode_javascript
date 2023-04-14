function printSubSequence(arr, index, result){

    // console.log(arr, index, result);
    if(index >= arr.length){
        console.log(result);
        return;
    }

    result.push(arr[index]);
    printSubSequence(arr, index +1, result);
    result.pop();
    printSubSequence(arr, index +1, result);
}

function subSequence(arr){
    printSubSequence(arr, 0, []);
}

subSequence([3 ,1, 2]);