/**
 * Coding Challeng from coderbyte
 * Run-length encoding alogorithm - The string parameter being passed and return a compressed version
 * of th estring using the Run-length encoding algorithm
 */

const runLengthEncoding = (str) => {
  let encodignStr = "";
  for (let i = 0, count = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      count++;
      encodignStr += `${count}${str[i]}`;
    }
  }
  return encodignStr;
};

console.log(runLengthEncoding("aabbcde"));
console.log(runLengthEncoding("wwwbbww"));
