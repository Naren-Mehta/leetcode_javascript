var sumOddLengthSubarrays = function(arr) {


    // #solution 2
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var start = arr.length - i,
            end = i + 1,
            total = start * end,
            oddTotal = parseInt(total%2) === 0 ? parseInt(total/2) : parseInt(total/2)+1;
        sum = sum + oddTotal*arr[i];
    }

    return sum;


    //#Solution 1
    // var x =3, sum =0;

    // for(var i=0; i<arr.length; i++){
    //     sum+= arr[i];
    // }
    // while(x<=arr.length){
    //     for(var i=0; i<arr.length-x+1; i++){
    //         for(var j=i; j<i+x; j++){
    //             sum+= arr[j];
    //         }
    //     }
    //     x+=2;
    // }
    // return sum;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));