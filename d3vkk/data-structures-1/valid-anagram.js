/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * O(nlogn)
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
