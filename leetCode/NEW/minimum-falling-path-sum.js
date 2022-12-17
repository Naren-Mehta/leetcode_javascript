

let min = Number.MAX_VALUE;

const minFallingSum = (matrix, i, j, sum)=> {

    console.log("====test==", i, j)
    if(j < 0 || j > matrix[0].length){
        return Number.MAX_VALUE;
    }

    if(i === matrix[0].length){
        return sum;
    }

    console.log("======", i, j, matrix[i][j]);


    let resultDown = minFallingSum(matrix, i+1, j, matrix[i][j] + sum);

    let resultLeft = minFallingSum(matrix, i+1, j-1, matrix[i][j] + sum);

    let resultRight = minFallingSum(matrix, i+1, j+1, matrix[i][j] + sum);

    // console.log("===i,j ",i, j);
    console.log("==result==",resultDown, resultLeft, resultRight)

    min = Math.min(min, resultDown, resultLeft, resultRight);
    console.log("=min==",min)
    // return Math.min(Math.min(resultDown, resultLeft), resultRight);

}

var minFallingPathSum = function(matrix) {
    return minFallingSum(matrix, 0, 0, 0);
};

const result = minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]);