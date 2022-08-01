/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    if (m === 0) {
        nums1.length = 0;
        for (let i=0; i < nums2.length; i++) {
            nums1.push(nums2[i]);
        }
        return;
    }
    
    if (n === 0) {
        return;
    }
    
    let profileObject = {};
    
    for (let i=0; i < m; i++) {
       if(profileObject[nums1[i]]) {
           profileObject[nums1[i]]++;
       } else {
           profileObject[nums1[i]] = 1;
       }
    }
    for (let i=0; i < n; i++) {
       if(profileObject[nums2[i]]) {
           profileObject[nums2[i]]++;
       } else {
           profileObject[nums2[i]] = 1;
       }
    }
    
    
    
    nums1.length = 0;
    let containsNegative = false;
    
    for (const key in profileObject) {  
        if (key.toString().indexOf('-') != -1) containsNegative = true;
        for (let i=0; i < profileObject[key]; i++) {
            nums1.push(key);
        }
        
    }
    
    if (containsNegative) nums1.sort((a, b) => a - b);
     
};