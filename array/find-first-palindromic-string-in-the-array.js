var firstPalindrome = function(words) {
    for(var i=0; i<words.length; i++){
        var str = words[i], isPolidrom = true;
        for(var j=0; j<str.length/2; j++){
            if(str.charAt(j) !== str.charAt(str.length-1-j)){
                isPolidrom = false;
                break;
            }
        }

        if(isPolidrom){
            return str;
        }
    }

    return "";
};

var x = firstPalindrome(["abc","car","ada","racecar","cool"]);
console.log(x);