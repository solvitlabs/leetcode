/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    // Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
    // Input: nums1 = [1,2,2,1], nums2 = [2,2]
    // Output: [2,2]
    let profile1 = {};
    let profile2 = {};
    let profile3 = {};
    let result = [];
    
    
    nums1.forEach(el => {
       if (el in profile1) {
           profile1[el]++;
       } else {
           profile1[el] = 1;
       }
    });
    
    
    nums2.forEach(el => {
       if (el in profile2)  {
           profile2[el]++;
       } else {
           profile2[el] = 1;
       }
    });
    
    let isNums1Smaller = nums1.length <= nums2.length ? true : false;
    
    if (isNums1Smaller) {
        for (const property in profile1) {
           if (property in profile2) {
               let occurrencesProfile2 = profile2[property];
               let occurrencesProfile1 = profile1[property];
               
                if (occurrencesProfile2 >= occurrencesProfile1) {
                    profile3[property] = occurrencesProfile1;
                } else {
                    profile3[property] = occurrencesProfile2 ;
                }
                    
           }

        }
        
    } else {
        for (const property in profile2) {
            if (property in profile1) {
               let occurrencesProfile2 = profile2[property];
               let occurrencesProfile1 = profile1[property];
                
                if (occurrencesProfile1 >= occurrencesProfile2) {
                    profile3[property] = occurrencesProfile2;
                } else {
                    profile3[property] = occurrencesProfile1;
                }
                    
            }

        }

    }
    
    
    for (const property in profile3) {
        for (let i=0; i < profile3[property]; i++) {
            result.push(property);
        }
       
    }  

    
    return result;
    
    
    
    
};