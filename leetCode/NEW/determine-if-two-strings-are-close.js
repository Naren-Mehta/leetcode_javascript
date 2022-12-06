var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length){
        return false;
    }

    const map1 = new Map();
    const map2 = new Map();

    for(let i=0; i<word1.length; i++){
        map1.set(word1[i], (map1.has(word1[i]) ? map1.get(word1[i]) : 0) + 1 );
        map2.set(word2[i], (map2.has(word2[i]) ? map2.get(word2[i]) : 0) + 1 );
    }

    const key1 = Array.from(map1.keys());
    const key2 = Array.from(map2.keys());

    const array1 = Array.from(map1.values()).sort((a, b) => a-b);
    const array2 = Array.from(map2.values()).sort((a, b) => a-b);

    for (let i = 0; i < array1.length; i++) {
        if(!key1.includes(key2[i]) || array1[i] !== array2[i]){
            return false;
        }
    }
   
    return true;
};

console.log(closeStrings("uau", "ssx"));