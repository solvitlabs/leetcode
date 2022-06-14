/**
 * for positive single digit numbers
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;a
  const n = mat[0].length;

  if (r == 0 || c == 0) return mat;
  if (r * c != m * n) return mat; // Different number of elements
  if (m == r && n == c) return mat; // Same matrix

  const matString = mat.toString().replace(/[\[\]',]+/g, "");

  const match = ".{1," + c + "}";
  var re = new RegExp(match, "g");
  matBreak = matString.match(re);

  var newMat = [];
  for (let i = 0; i < matBreak.length; i++) {
    newMat.push(matBreak[i].split(""));
  }

  return newMat;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    2,
    4
  )
);

