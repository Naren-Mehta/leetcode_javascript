var uniqueOccurrences = function(arr) {
    const map = {};

    for(let i=0; i<arr.length; i++){
        map[arr[i]] = (map[arr[i]] ? map[arr[i]] : 0) + 1;
    }

    const resultMap = {};

    for(const val of Object.values(map)){
        if(resultMap[val]){
            return false;
        }

        resultMap[val] = 1;
    }

    return true;
};

console.log(uniqueOccurrences([3,5,-2,-3,-6,-6]));