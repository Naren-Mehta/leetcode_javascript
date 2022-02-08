var reverseString = function(s) {
    var left =0, right = s.length-1;
    while (left < right){
        console.log([s[left], s[right]]);
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
   
    return s;
};

console.log(reverseString(["h","e","l","l","o"]))
