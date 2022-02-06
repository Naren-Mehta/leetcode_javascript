var rotate = function(matrix) {
    for(var i=0; i<matrix.length; i++){
        for(var j=i+1; j<matrix[i].length; j++){
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
        matrix[i].reverse();
    }
    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));