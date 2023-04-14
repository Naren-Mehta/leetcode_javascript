var solveSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        for (let c = 1; c <= 9; c++) {
          if (isValid(board, i, j, c + "")) {
            board[i][j] = c + "";

            if (solveSudoku(board)) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};

const isValid = function (board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === c) {
      return false;
    }

    if (board[row][i] === c) {
      return false;
    }

    if (
      board[3 * parseInt(row / 3) + parseInt(i / 3)][
        3 * parseInt(col / 3) + parseInt(i % 3)
      ] === c
    ) {
      return false;
    }
  }

  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);

console.log(board);
