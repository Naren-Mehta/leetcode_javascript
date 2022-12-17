
var minFallingPathSum = function(matrix) {
    const n = matrix[0].length;
    let minSum = Number.MAX_VALUE;

    if(matrix.length === 1 && matrix[0].length === 1){
        return matrix[0][0];
    }

    for(let i=1;i<n; i++){
        for(let j=0;j<n; j++){
            const min = Math.min(matrix[i-1][Math.max(0, j-1)], matrix[i-1][j], matrix[i-1][Math.min(n-1, j+1)]);
            matrix[i][j] += min;

            if(i === n-1){
                minSum = Math.min(minSum, matrix[i][j]);
            }
        }
    }

    return minSum;
};

const result = minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]);
console.log(result);