

/**
 * @param {number} numRows
 * @return {number[][]}
 * O(n)
 */
 var generate = function (numRows) {
    let pT = [[1], [1,1]];   
    
    if (numRows === 1) return [[1]];
    
    let currentRow = [];
    let prevRow = [];
    
    for(let i=2; i < numRows; i++) {
        currentRow = []; //reset
        
        currentRow.push(1);
        
        prevRow = pT[i - 1];
        
        for(let j=1; j < i; j++) {
            currentRow.push(prevRow[j-1] + prevRow[j]);             
            
        }
        
        currentRow.push(1);
        
        pT.push(currentRow);
    }
    
    return pT;
}