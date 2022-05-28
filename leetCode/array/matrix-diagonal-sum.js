var diagonalSum = function(mat) {
    const length = mat[0].length;
    let sum =0;
    for(let i=0; i<length;i++ ){
        for(let j=0; j<length;j++ ){
            if(i === j || i+j === length-1){
                sum += mat[i][j];
            }
        }
    }

    return sum;
};


var mat = [[5]]
console.log(diagonalSum(mat));