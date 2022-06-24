/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.toLowerCase() != ransomNote) return false;
  if (magazine.toLowerCase() != magazine) return false;
  if (ransomNote.length > magazine.length) return false;

  const ransomNoteArr = ransomNote.split("");
  var ransomNoteProfile = {};
  for (let i = 0; i < ransomNoteArr.length; i++) {
    ransomNoteProfile[ransomNoteArr[i]] = ransomNoteProfile[ransomNoteArr[i]]
      ? ransomNoteProfile[ransomNoteArr[i]] + 1
      : 1;
  }

  const magazineArr = magazine.split("");
  var magazineProfile = {};
  for (let i = 0; i < magazineArr.length; i++) {
    magazineProfile[magazineArr[i]] = magazineProfile[magazineArr[i]]
      ? magazineProfile[magazineArr[i]] + 1
      : 1;
  }

  for (const character in ransomNoteProfile) {
    if (magazineProfile[character] == undefined) return false;
    if (ransomNoteProfile[character] > magazineProfile[character]) return false;
  }

  return true;
};

// console.log(canConstruct("aa", "aab"));
console.log(canConstruct("aabb", "c"));

