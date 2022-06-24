/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openingBrackets = {
    "{": "{",
    "[": "[",
    "(": "(",
  };
  const brackets = {
    "{}": "{}",
    "[]": "[]",
    "()": "()",
  };
  let pair = "";
  // Declare and initialize a stack S.
  let stack = [];
  // Run a loop on i from 0 to n.
  for (let i = 0; i < s.length; i++) {
    // If s[i] is an opening bracket, then push s[i] in the stack.
    let el = s[i];
    if (openingBrackets[el]) {
      stack.push(el);
    } else {
      //s[i] is a closing bracket,
      // matching brackets.
      firstHalf = stack[stack.length - 1];
      // The stack is empty and we have a closing bracket
      if (firstHalf === undefined) return false;
      pair = firstHalf.concat(s[i]);
      if (brackets[pair]) {
        // Valid pair
        stack.pop();
      } else {
        // Invalid pair
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("[[]]"));
console.log(isValid("{[}]"));
console.log(isValid("][}]"));
console.log(isValid("{}()[]"));
