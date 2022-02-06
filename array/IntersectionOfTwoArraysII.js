var intersect = function(nums1, nums2) {
    var map = {}, newArr = [];
    for(var i=0; i<nums1.length; i++){
        if(map[nums1[i]]!== undefined){
            map[nums1[i]] = map[nums1[i]] +1;
        }else{
            map[nums1[i]] = 1;
        }
    }

    for(var i=0; i<nums2.length; i++){
        if(map[nums2[i]]>0){
            newArr.push(nums2[i]);
            map[nums2[i]]= map[nums2[i]]-1;
        }
    }

    return newArr;

};

console.log(intersect([1,2,2,1], [2,2]))