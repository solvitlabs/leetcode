/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let sProfile = {};
    let el;
    let sLength = s.length;
    let character;
    
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