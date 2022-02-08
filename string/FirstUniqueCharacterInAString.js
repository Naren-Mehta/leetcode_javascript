var firstUniqChar = function(s) {
    var map = {};
    for(var i=0; i< s.length; i++){
        if(map[s.charAt(i)] !== undefined){
            map[s.charAt(i)] += 1;
        }else {
            map[s.charAt(i)] = 1;
        }
    }

    for(var i=0; i< s.length; i++){
        if(map[s.charAt(i)] === 1){
            return i;
        }
    }

    return -1;
};

console.log(firstUniqChar('aabb'));