

function reverse(arr, i){
    if(i >= arr.length/2){
        return arr;
    }

    const temp = arr[i];
    arr[i] = arr[arr.length -1 - i];
    arr[arr.length -1 - i] = temp;   

    return reverse(arr, i+1);
}

 const arr = [1,2,3,4,5];
console.log(arr);
 const result = reverse(arr, 0);
 console.log(result);