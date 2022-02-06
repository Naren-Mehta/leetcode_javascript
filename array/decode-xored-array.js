var decode = function(encoded, first) {
    var result = [];
    result.push(first);
    for(var i=0; i<encoded.length+1;i++){
        var x = encoded[i];
        if(i == 0){
            encoded[i] = first;
        }
        result.push(encoded[i]);
    }
    for(var i=1; i<result.length;i++){
        result[i] = result[i-1] ^ result[i];
    }
    return result;
};

console.log(decode([6,2,7,3], 4));