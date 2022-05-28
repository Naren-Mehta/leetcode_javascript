var diagonalSum = function(mat) {
    const l = mat[0].length;
    let sum =0;
    for(let i=0; i<l;i++ ){
       sum += mat[i][i];

       if(i != (l-1-i)){
            sum += mat[i][l-1-i];
       }
    }
    return sum;
};


var mat = [[5]]
console.log(diagonalSum(mat));