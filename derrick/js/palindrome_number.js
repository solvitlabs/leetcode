/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const str = x.toString();
    const reversedStr = reverse(str);
    
    return (str === reversedStr) ? true: false;
};

var reverse = function(str) {
    const arr = str.split("");
    const reversedArr = arr.reverse();
    return reversedArr.join("");
}