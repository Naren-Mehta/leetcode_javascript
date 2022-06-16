var minDistance = function(word1, word2) {
    let map ={};
    let leng1 = word1.length;
    let leng2 = word2.length;

    for(let i=0;i< leng1;i++){
        if(!map[word1[i]]){
            map[word1[i]] = true;
        }
    }
    let count =0;
    for(let i=0;i< leng2;i++){
        if(map[word2[i]]){
            count++;
        }
    }

    
    return leng1 + leng2 - count*2;
};

console.log(minDistance("leetcode", "etco"));