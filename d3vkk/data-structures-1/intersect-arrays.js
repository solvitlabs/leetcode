/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

  var nums1Profile = {};
  for (var i = 0; i < nums1.length; i++) {
    var number = nums1[i];
    if (nums1Profile[number]) {
      nums1Profile[number]++;
    } else {
      nums1Profile[number] = 1;
    }
  }

  var nums2Profile = {};
  for (var i = 0; i < nums2.length; i++) {
    var number = nums2[i];
    if (nums2Profile[number]) {
      nums2Profile[number]++;
    } else {
      nums2Profile[number] = 1;
    }
  }

  var comparisonProfile = {};
  if (nums1.length >= nums2.length) {
    for (const property in nums1Profile) {
      if (property in nums2Profile) {
        if (nums1Profile[property] >= nums2Profile[property]) {
          comparisonProfile[property] = nums2Profile[property];
        } else {
          comparisonProfile[property] = nums1Profile[property];
        }
      }
    }
  } else {
    for (const property in nums2Profile) {
      if (property in nums1Profile) {
        if (nums1Profile[property] >= nums2Profile[property]) {
          comparisonProfile[property] = nums2Profile[property];
        } else {
          comparisonProfile[property] = nums1Profile[property];
        }
      }
    }
  }

  var finalProfile = [];
  for (const property in comparisonProfile) {
    if (comparisonProfile[property] == 1) {
      finalProfile.push(property);
    } else {
      for (let j = 0; j < comparisonProfile[property]; j++) {
        finalProfile.push(property);
      }
    }
  }

  return finalProfile;
};

console.log(intersect([1, 2, 2, 1], [2, 2, 2]));
