var isValidSudoku = function (board) {
    var map1 = {};
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            var current_value = board[i][j];
            if(board[i][j] !== "."){

                if(map1[current_value+" in row "+i] || map1[current_value+" in col "+j] || map1[current_value+" in block "+parseInt(i/3) + "_"+parseInt(j/3)]){
                    return false;
                }
                map1[current_value+" in row "+i] = current_value+" in row "+i;
                map1[current_value+" in col "+j] = current_value+" in col "+j;
                map1[current_value+" in block "+parseInt(i/3) + "_"+parseInt(j/3)] = current_value+" in block "+parseInt(i/3) + "_"+parseInt(j/3);          
            }
        }
    }
    return true;
};

var arr = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]
];

console.log(isValidSudoku(arr));