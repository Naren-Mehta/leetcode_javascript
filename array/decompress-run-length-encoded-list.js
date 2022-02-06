var decompressRLElist = function (nums) {
    var i = 0,
        result = [];
    while (2 * i + 1 < nums.length) {
        var feq = nums[2 * i],
            val = nums[2 * i + 1];

        for (var j = 0; j < feq; j++) {
            result.push(val);
        }
        i++;
    }

    return result;
};

var result = decompressRLElist([1, 1, 2, 3]);
console.log(result);