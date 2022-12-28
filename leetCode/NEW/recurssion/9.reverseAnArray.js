

function reverse(arr, i, j){
    if(i >= j){
        return arr;
    }

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;   

    return reverse(arr, i+1, j-1);
}

 const arr = [1,2,3,4,5,6];
console.log(arr);
 const result = reverse(arr, 0, arr.length -1);
 console.log(result);