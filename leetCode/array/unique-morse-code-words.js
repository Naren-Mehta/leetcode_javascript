var uniqueMorseRepresentations = function(words) {
    var symbolArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."], map;
    var map = {}, count=0;
    for(var i=0; i<words.length;i++ ){
       var word = words[i], str='';
       for(var j=0;j<word.length;j++){
            str +=  symbolArr[word.charCodeAt(j)-97];
       }

       if(!map[str]){
        map[str] = true;
        count++;
       }
    }
    return count;
};

console.log(uniqueMorseRepresentations(['a']));