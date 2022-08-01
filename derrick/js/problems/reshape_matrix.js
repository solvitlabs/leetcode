/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    m = mat.length
    n = mat[0].length
    
    // Illegal operation
    if (m * n !== r * c) return mat;
    
    
    // Different shape
    let result = [];
    let column = [];

    
    // 1.Flatten the nested array
    const flatArray = [].concat(...mat);
    // 2.Recreate the matrix with dimensions r * c
    for (let i=0; i < flatArray.length; i++) {
        if (r < 0) break;
        
        column.push(flatArray[i]);
        
        if (column.length === c) {
            result.push(column);
            column = [];
            r--;
        }
        
    }
    
    return result;


};