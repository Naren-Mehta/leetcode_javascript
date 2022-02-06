var countGoodTriplets = function (arr, a, b, c) {
    var count = 0,
        i = 0,
        j = 1,
        k = 2;

    while (i < arr.length - 2) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[k] - arr[i]) <= c) {
            count++;
        }
        k++;
        if (k == arr.length) {
            j = j + 1;
            k = j + 1;
        }
        if (j == arr.length - 1) {
            i = i + 1;
            j = i + 1;
            k = j + 1;
        }
    }
    return count;
};


var result = countGoodTriplets([7,3,7,3,12,1,12,2,3], 5, 8, 1);
console.log(result);