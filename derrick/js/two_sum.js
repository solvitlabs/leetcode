/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 0. check if nums.length == 1
        // return nums[0]
    // 1. sort in ascending order
    // 2. create 2 pointers (i, j)
    // 3. add the numbers in the two pointers i & j
    // 4. check if its equal to the target
        // return the pair
    // 5. check if its more or less than target
    // 6. if more than target
       // move j 1 step towards the left
    // 7. go back to step 3
    if (nums.length === 2) return [0,1];
    
    
    let numsCopy = [...nums];
    numsCopy.sort((a, b) => a - b);
    let i=0, j=nums.length - 1;
    
    let notFound = true;
    let found = [];
    while(notFound){
        let sumOfNums = numsCopy[i] + numsCopy[j];
        if (sumOfNums === target) {
            notFound = false;
            found.push(nums.indexOf(numsCopy[i]), nums.lastIndexOf(numsCopy[j]));          
        } else if(sumOfNums > target) {
            j--;
        } else {
            // sumOfNums is < target
            i++;
        }
    }
    
    return found;
    
    
};