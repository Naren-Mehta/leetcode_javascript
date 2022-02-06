var findMedianSortedArrays = function (nums1, nums2) {
    var newArr = [],
        l1 = nums1.length,
        l2 = nums2.length,
        l3 = 0;

    if (l1 == 0 || l2 == 0) {
        l1 == 0 ? newArr = nums2 : newArr = nums1;
    } else {
        var i = 0,
            j = 0,
            k = 0;
        while (i < l1 + l2) {
            if (j < l1 && k < l2) {
                if (nums1[j] < nums2[k]) {
                    newArr[i] = nums1[j];
                    j++;
                } else {
                    newArr[i] = nums2[k];
                    k++;
                }
            } else {
                if (j < l1) {
                    newArr[i] = nums1[j];
                    j++;
                }
                if (k < l2) {
                    newArr[i] = nums2[k];
                    k++
                }
            }
            i++;
        }
    }
    l3 = newArr.length;

    if (l3 % 2 == 1) {
        return newArr[((l3 + 1) / 2) - 1];
    } else {
        return (newArr[(l3 / 2) - 1] + newArr[(l3 / 2 + 1) - 1]) / 2;
    }
};

console.log(findMedianSortedArrays([1], [4]));
