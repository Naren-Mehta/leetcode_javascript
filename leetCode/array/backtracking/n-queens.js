var isSafe = function (row, col, board, n) {
  var dupRow = row;
  var dupCol = col;

  while (row >= 0 && col >= 0) {
    if (board[row][col] === "Q") return false;
    row--;
    col--;
  }

  row = dupRow;
  col = dupCol;

  while (col >= 0) {
    if (board[row][col] === "Q") return false;
    col--;
  }
  row = dupRow;
  col = dupCol;

  while (row < n && col >= 0) {
    if (board[row][col] === "Q") return false;
    row++;
    col--;
  }
  return true;
};
var solve = function (col, arr, ans, n) {
  if (col == n) {
    var newArr = [];
    for (var i = 0; i < n; i++) {
      newArr.push(arr[i].join(""));
    }
    ans.push(newArr);
    return;
  }

  for (var row = 0; row < n; row++) {
    if (isSafe(row, col, arr, n)) {
      arr[row][col] = "Q";
      solve(col + 1, arr, ans, n);
      arr[row][col] = ".";
    }
  }
};

var solveNQueens = function (n) {
  var arr = [];
  var ans = [];
  for (var i = 0; i < n; i++) {
    arr[i] = [];
    for (var j = 0; j < n; j++) {
      arr[i][j] = ".";
    }
  }
  solve(0, arr, ans, n);
  return ans;
};

var ans = solveNQueens(1);
console.log(ans);
