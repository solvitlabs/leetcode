/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let map = new Map();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num == '.') continue;
            const markerRow = num + i + 'r';
            const markerColumn = num + j + 'c';
            const markerSquare = '' + num + ~~(i/3) + ~~(j/3) + 'sq';
            if (!map.has(markerRow) && !map.has(markerColumn) && !map.has(markerSquare)) {
                map.set(markerRow, '');
                map.set(markerColumn, '');
                map.set(markerSquare, '');
            } else {
                return false;
            }
        }
    }
    return true;
};
let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board));
