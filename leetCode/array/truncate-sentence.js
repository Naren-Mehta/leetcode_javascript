var truncateSentence = function(s, k) {
   var spaceCount = 0, i=0;
    while(spaceCount <k && i < s.length){
          if(s.charAt(i) === ' '){
             spaceCount++;
             }
        i++;
    }
    return spaceCount === k ? s.substring(0, i-1) : s;
};

var x =truncateSentence('Hello how are you Contestant', 4);
console.log(x);