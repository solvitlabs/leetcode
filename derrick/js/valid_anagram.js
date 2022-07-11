/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.toLowerCase() !== s && t.toLowerCase() != t) return false;  

    let sProfile = {}
    let tProfile = {}

    const sLength = s.length;
    const tLength = t.length;

    if (sLength !== tLength) return false;

    let el;

    for (let i=0; i < sLength; i++) {
        el = s[i];
        sProfile[el] = sProfile[el]?sProfile[el]+1:1;        
    }

    for (let j=0; j < tLength; j++) {
        el = t[j];
        tProfile[el] = tProfile[el]?tProfile[el]+1:1;
    }

    for(const key in sProfile) {
        if (!(key in tProfile && sProfile[key] === tProfile[key])) return false;
    }

    return true;

    
};