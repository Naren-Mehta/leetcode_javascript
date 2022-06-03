/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.cache = [];

  for (let row = 0; row < matrix.length; row++) {
    this.cache[row] = [];
    for (let col = 0; col < matrix[0].length; col++) {
      let prevCol = col > 0 ? this.cache[row][col - 1] : 0;
      let prevRow = row > 0 ? this.cache[row - 1][col] : 0;
      let prevCache = row > 0 && col > 0 ? this.cache[row - 1][col - 1] : 0;
      let sum = matrix[row][col] + prevCol + prevRow - prevCache;
      this.cache[row].push(sum);
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let totalArea = this.cache[row2][col2];
  let topArea = row1 > 0 ? this.cache[row1 - 1][col2] : 0;
  let sideArea = col1 > 0 ? this.cache[row2][col1 - 1] : 0;
  let cornerArea = row1 > 0 && col1 > 0 ? this.cache[row1 - 1][col1 - 1] : 0;
  return totalArea - topArea - sideArea + cornerArea;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

var obj = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
var param_1 = obj.sumRegion(2, 1, 4, 3);

console.log(param_1);
