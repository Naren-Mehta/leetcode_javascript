var transpose = function(matrix) {
    var newArr =[];
    var row = matrix.length;
    var col= matrix[0].length;
    for(var i=0;i<col;i++){
        var arr = [];
        for(var j=0;j<row;j++){
            arr.push(matrix[j][i]);
        }
        newArr.push(arr);
    }

    return newArr;
};

console.log(transpose([[1,2,3,4],[5,6,7,8]]));

