var targetIndices =function(arr){
    var max1 =arr[0], max2 =0;
    for(var i=1; i<arr.length; i++){
        if(arr[i] > max1){
            max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i] > max2){
            max2 = arr[i];
        }
    }
    return max2;
}

var x = targetIndices([5,6,7,1,2,3,9,8]);
console.log(x);