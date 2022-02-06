var uniqueMorseRepresentations = function(words) {
    var symbolArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."], map;
    var map = new Set();
    for(var i=0; i<words.length;i++ ){
       var word = words[i], str='';
       for(var j=0;j<word.length;j++){
            str +=  symbolArr[word.charCodeAt(j)-97];
       }

       map.add(str);
    }
    return map.size;
};

console.log(uniqueMorseRepresentations(['a']));