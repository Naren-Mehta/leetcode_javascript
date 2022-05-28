var threeSum = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    });
    var newArr = [];
    for (var i = 0; i < nums.length - 2; i++) {
        var j = i + 1,
            k = nums.length;
        if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
            while (j < k) {
                var sum = nums[i] + nums[j] + nums[k];
                if (sum == 0) {
                    newArr.push([nums[i], nums[j], nums[k]]);
                    while (nums[j] === nums[j + 1]) j++;
                    while (nums[k] === nums[k - 1]) k--;
                    j++;
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

    }
    return newArr;
}

console.log(threeSum([-2, 0, 0, 2, 2]));