const assert = require("assert");

function firstDuplicate(nums) {
  /** Solution 1: Own solution */
  let duplicates = {};
  for (ele of nums)
    if (nums.indexOf(ele, nums.indexOf(ele) + 1) != -1)
      duplicates[nums.indexOf(ele, nums.indexOf(ele) + 1)] = ele;

  for (ele in duplicates)
    if (duplicates.hasOwnProperty(ele)) return duplicates[ele];

  return -1;

  /** Solution 2: Other's solution */
  //   let sortObj = {};
  //   let firstDuplicateNum = -1;
  //   for (n of nums) {
  //     if (sortObj.hasOwnProperty(n)) {
  //       firstDuplicateNum = n;
  //       break;
  //     } else {
  //       sortObj[n] = 1;
  //     }
  //   }
  //   return firstDuplicateNum;

  /** Solution 3: Other's solution */

  //   const checked = [];

  //   for (const num of nums) {
  //     if (checked.includes(num)) return num;
  //     checked.push(num);
  //   }

  //   return -1;
}
// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));

try {
  assert.equal(firstDuplicate([2, 1, 3, 5, 3, 2]), 3, "First Test Case failed");
  assert.equal(
    firstDuplicate([2, 1, 3, 5, 4, 6]),
    -1,
    "Second Test Case Failed"
  );
  console.info("ALL Test Case Passed");
} catch (err) {
  console.error(err.message);
}
