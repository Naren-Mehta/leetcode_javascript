function doPartition (str, index, ds, results){
    if(index === str.length){
        results.push([...ds]);
        return;
    }

    for(let i=index; i<str.length;i++){
        if(isPolindrom(str, index, i)){
            ds.push(str.substring(index, i+1));
            doPartition(str, i+1, ds, results);
            ds.pop();
        }
    }


}

function isPolindrom(str, start, end){
    while(start <= end){
        if(str[start++] !== str[end--]){
            return false;
        }
    }
    return true;
}

var partition = function(s) {
    const results = [];
    const ds = [];
    doPartition(s, 0, ds, results);

    return results;
};

const result = partition("aab");
console.log(result);