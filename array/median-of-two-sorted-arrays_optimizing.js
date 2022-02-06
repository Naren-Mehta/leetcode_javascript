var findMedianSortedArrays = function (nums1, nums2) {
    var l1 = nums1.length,
        l2 = nums2.length,
        i = 0,
        j = 0,
        k = 0,
        med1 = 0,
        med2 = 0;

    while (i <= (l1 + l2) / 2) {
        med1 = med2;
        if (j == l1) {
            med2 = nums2[k];
            k++;
        } else if (k == l2) {
            med2 = nums1[j];
            j++;
        } else if (nums1[j] < nums2[k]) {
            med2 = nums1[j];
            j++;
        } else {
            med2 = nums2[k];
            k++
        }
        i++;
    }
    
    if ((l1+l2) % 2 == 0) {
        return (med1+med2)/2;
    }

    return med2;
};

console.log(findMedianSortedArrays([1], [4]));