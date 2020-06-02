const assert = require("assert");

function addTwoDigits(num) {
  //  write code here.
  return num
    .toString()
    .split("")
    .reduce((acc, ele) => (acc += parseInt(ele)), 0);
}

try {
  assert.equal(addTwoDigits(29), 11);
  console.info("Test Case Passed");
} catch (err) {
  console.error("Test Case Failed");
}
