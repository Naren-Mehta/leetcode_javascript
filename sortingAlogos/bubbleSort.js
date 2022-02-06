var bubbleSort = function (arr) {

    for (var i = 0; i < arr.length; i++) {
        var flag =0;
        for (var j = 0; j < arr.length-1-i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = 1;
            }
        }
        console.log("====", i)
        if(flag == 0){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([9, 6, 1, 5, 8, 3, 7, 10, 2, 4]));