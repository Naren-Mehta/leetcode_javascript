var restoreString = function(s, indices) {
    var str =[];
    for(var i =0; i< indices.length; i++){
        str[indices[i]] = s.charAt(i);
    }

    return str.join('');
}

console.log(restoreString("codeleet", indices = [4,5,6,7,0,2,1,3]));