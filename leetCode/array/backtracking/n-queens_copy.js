var isSafe = function (row, col, board, n) {
  var dupRow = row;
  var dupCol = col;

  while (row >= 0 && col >= 0) {
    if (board[row].charAt(col) === "Q") return false;
    row--;
    col--;
  }

  row = dupRow;
  col = dupCol;

  while (col >= 0) {
    if (board[row].charAt(col) === "Q") return false;
    col--;
  }
  row = dupRow;
  col = dupCol;

  while (row < n && col >= 0) {
    if (board[row].charAt(col) === "Q") return false;
    row++;
    col--;
  }
  return true;
};
var solve = function (col, arr, ans, n) {
  if (col == n) {
    var newArr = [];
    for (var i = 0; i < n; i++) {
      newArr.push(arr[i]);
    }
    ans.push(newArr);
    return;
  }

  for (var row = 0; row < n; row++) {
    if (isSafe(row, col, arr, n)) {
      arr[row] = arr[row].substring(0, col) + 'Q' + arr[row].substring(col+1);
      // arr[row][col] = "Q";
      solve(col + 1, arr, ans, n);
      arr[row] = arr[row].substring(0, col) + '.' + arr[row].substring(col+1);
      // arr[row][col] = ".";
    }
  }
};

var solveNQueens = function (n) {
  var arr = [];
  var ans = [];
  for (var i = 0; i < n; i++) {
    var num = n;
    var str =""
    while(num>0){
      str += ".";
      num--;
    }
    arr[i] =str;
  }
  solve(0, arr, ans, n);
  return ans;
};

var ans = solveNQueens(8);
console.log(ans);
