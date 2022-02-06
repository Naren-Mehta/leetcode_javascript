var insertionSort = function (arr) {
    for(var i=1;i <arr.length; i++){
        var currentValue = arr[i], j=i-1;

        while(j >=0 && currentValue < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentValue;
    }
    return arr;
}
console.log(insertionSort([9, 6, 1, 5, 8, 3, 7, 10, 2, 4]));