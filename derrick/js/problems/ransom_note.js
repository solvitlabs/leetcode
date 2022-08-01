/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
//  ransomNote = "aa", magazine = "ab"
 var canConstruct = function(ransomNote, magazine) {
    // Consists only of lowercase English letters
    if (!(ransomNote.toLowerCase() === ransomNote &&
       magazine.toLowerCase() === magazine)) return false;
    
    // magazine.length >= ransomNote.length
    if (ransomNote.length > magazine.length) return false;
    
    // Create a profile object for ransomNote and magazine

    let ransomNoteProfile = {}
    let magazineProfile = {}
    let el;
    
    for (let i=0; i < ransomNote.length; i++) {
        el = ransomNote[i];
       
        ransomNoteProfile[el] = ransomNoteProfile[el] ? ransomNoteProfile[el]+1:1;
    }
    
    for (let j=0; j < magazine.length; j++) {
        el = magazine[j];
        
        magazineProfile[el] = magazineProfile[el] ? magazineProfile[el]+1: 1;
    }
    
    // Check character and frequency of ransomNote, compare it with
    // character and frequency of magazine,
    // it should be equal to or more
    for (let k=0; k < ransomNote.length; k++) {
        el = ransomNote[k];
        if (magazineProfile[el] == undefined) return false;
        
        if (magazineProfile[el] < ransomNoteProfile[el]) return false;
    }
    
    return true;  
        
};