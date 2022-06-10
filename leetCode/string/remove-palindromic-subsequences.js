
var isPalindrome = function(s){
    var l = s.length;
    var mid = l%2==0? l/2 : (l+1)/2;
    for(var i=0;i<mid;i++){
        if(s.charAt(i) !== s.charAt(s.length-1-i)){
            return false;
        }
    }
    return true;
};

var removePalindromeSub = function(s) {
    var count =0;
    if(isPalindrome(s)){
        count++;
        return count;
    }

    for(var i=0;i<s.length;i++){
        var str = s.substring(0,i)+s.substring(i+1);
        if(isPalindrome(str)){
            count++;
            return count+1;
        }
    }

    return count;
};

console.log(removePalindromeSub('ababb'));