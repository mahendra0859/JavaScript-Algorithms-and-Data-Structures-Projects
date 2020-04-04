/**
 * Given a binary string of 0 and 1, write a program to check that the given string is valid or not. The given string is valid when there is no zero is present in between 1’s. For example, 1111, 0000111110, 1111000 are valid strings but 01010011, 01010, 101 are not.
 * Link : https://www.geeksforgeeks.org/check-binary-string-0-between-1s-not/
 */

function CheckBinaryString(str) {
  let len = str.length;
  //  First occurence of the 1 in given string
  let firt_occurence = len;
  for (let index = 0; index < len; index++) {
    if (str[index] === "1") {
      firt_occurence = index;
      break;
    }
  }
  //  Last occurence of the 1 in given string
  let last_occurence = 0;
  for (let index = len - 1; index >= 0; index--) {
    if (str[index] === "1") {
      last_occurence = index;
      break;
    }
  }
  // Check if there is any 0 in range
  for (let index = firt_occurence; index <= last_occurence; index++) {
    if (str[index] === "0") {
      return false;
    }
  }
  return true;
}

console.log(CheckBinaryString("000011111") ? "VALID" : "INVALID");
console.log(CheckBinaryString("0000111011") ? "VALID" : "INVALID");
