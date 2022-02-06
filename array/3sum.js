var threeSum = function (nums) {
    var newArr = [];
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    console.log(i,j,k);
                    var arr = [nums[i], nums[j], nums[k]];
                    newArr.push(arr);
                }
            }

        }
    }
    return newArr;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));