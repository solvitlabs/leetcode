/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const pascalsTriangle = [[1], [1, 1]];
  if (numRows < 1 || numRows > 30 || numRows == 0) return [];
  if (numRows == 1) return [pascalsTriangle[0]];
  if (numRows == 2) return pascalsTriangle;
  for (let i = 2; i < numRows; i++) {
    var newRow = [1];
    var previousRow = pascalsTriangle[i - 1];
    for (let j = 0; j < previousRow.length - 1; j++) {
      newRow.push(previousRow[j] + previousRow[j + 1]);
    }
    newRow.push(1);
    pascalsTriangle.push(newRow);
  }
  return pascalsTriangle;
};

console.log(generate(8));
