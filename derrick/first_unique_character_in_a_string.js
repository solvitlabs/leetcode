/**
 * @param {string} s
 * @return {number}
 */
//  Input: s = "leetcode"
/**
 * {
    l: 1,
    e: 3,
    t: 1,
    c: 1,
    0: 1,
    d: 1
 }
    
 */
// Input: s = "loveleetcode"
 var firstUniqChar = function(s) {
    let sProfile = {};
    let el;
    let sLength = s.length;
    
    for (let i=0; i < sLength; i++) {
        el = s[i];
        sProfile[el] = sProfile[el] ? sProfile[el]+1 : 1;        
    }

    for (let j=0; j < sLength; j++) {
        el = s[j];
        if (sProfile[el] === 1) return j;
    }
    
    return -1;
    
};