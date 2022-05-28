var countGoodTriplets = function (arr, a, b, c) {
  
    var count = 0;
    for(var i=0; i< arr.length-2; i++){
        for(var j=i+1; j< arr.length-1; j++){
            if(Math.abs(arr[i] - arr[j]) <= a){
                for(var k=j+1; k< arr.length; k++){
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[k] - arr[i]) <= c) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
};


var result = countGoodTriplets([7,3,7,3,12,1,12,2,3], 5, 8, 1);
console.log(result);