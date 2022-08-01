/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const flattenedArray = [].concat(...matrix);
    return flattenedArray.indexOf(target) == -1? false :true;
};