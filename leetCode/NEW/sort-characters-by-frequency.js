var frequencySort = function(s) {
    const obj = {};

    for(let i=0; i<s.length; i++){
        obj[s[i]] = (obj[s[i]] ? obj[s[i]] : 0) + 1;
    }

    const sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    let result = "";

    for(const val of sorted){
        result += val.repeat(obj[val]);
    }

    return result;
};

console.log(frequencySort("tree"));