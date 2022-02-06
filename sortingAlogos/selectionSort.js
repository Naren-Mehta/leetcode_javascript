var selectionSort = function(arr){

    for(var i=0; i<arr.length-1; i++){
        var minIndex = i;
        for(var j=i+1; j<arr.length; j++){
            if(arr[minIndex] > arr[j] ){
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;


}

console.log(selectionSort([9,6,1,5,8,3,7]));