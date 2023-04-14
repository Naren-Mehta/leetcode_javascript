
function getAllNQuean(col, n, queenArr, result, leftRow, upperDiagonal, lowerDiagonal) {
    if(col === n){
        const arr = queenArr.reduce((accu, current) => {
            accu.push(current.join(""));
            return accu;
        }, []);
        result.push(arr);
        return;
    }

    for(let row =0; row<n; row++){
        if(leftRow[row] === undefined && lowerDiagonal[row + col] ===undefined && upperDiagonal[n-1 + col - row] === undefined){
            queenArr[row][col] = 'Q';

            leftRow[row] = 1;
            lowerDiagonal[row + col] = 1;
            upperDiagonal[n-1 + col - row] = 1;

            getAllNQuean(col+1, n, queenArr, result, leftRow, upperDiagonal, lowerDiagonal);
            queenArr[row][col] ='.';
            leftRow[row] = undefined;
            lowerDiagonal[row + col] = undefined;
            upperDiagonal[n-1 + col - row] = undefined;
        }
    }
}

var solveNQueens = function(n) {
    const result = [];

    let queenArr = [];
    const innerArr = [];
    for(let i=0; i< n;i++){
        innerArr.push('.');
    }

    for(let i=0; i< n;i++){
        queenArr.push([...innerArr]);
    }
    const leftRow = [];
    const upperDiagonal = [];
    const lowerDiagonal = [];


    getAllNQuean(0, n, queenArr, result, leftRow, upperDiagonal, lowerDiagonal);
    return result;
};

const result = solveNQueens(4);
console.log("Final result===", result);