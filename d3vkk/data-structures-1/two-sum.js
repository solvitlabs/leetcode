/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const origNums = [...nums];
  var numsSorted = nums.sort(function (a, b) {
    return a - b;
  });
  var i = 0;
  var j = numsSorted.length - 1;
  var soln;

  function recurse() {
    var numa = numsSorted[i];
    var numb = numsSorted[j];
    var sum = numa + numb;

    if (sum === target) {
      soln = [origNums.indexOf(numa), origNums.lastIndexOf(numb)];
    } else if (sum > target && j !== 0) {
      j--;
      recurse();
    } else {
      i++;
      recurse();
    }
  }

  recurse();

  return soln;
};
