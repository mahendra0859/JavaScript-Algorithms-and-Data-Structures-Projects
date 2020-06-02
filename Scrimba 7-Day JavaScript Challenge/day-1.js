const assert = require("assert");

function addBorder(array) {
  let arr = [];
  for (let ele of array) {
    arr.push(`*${ele}*`);
  }
  arr.push("*****");
  arr.unshift("*****");
  return arr;
}

try {
  assert.deepEqual(addBorder(["abc", "ded"]), [
    "*****",
    "*abc*",
    "*ded*",
    "*****",
  ]);
  console.info("Test Case Passed");
} catch (err) {
  console.error("Test Case Failed");
}
