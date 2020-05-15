/**
 * Coding Challeng from coderbyte
 * Remove Brackets - The string parametrs besing passed , which will ontain only the character '(' and ')' and determine the minimum number
 * of brackets that need to be create a strign
 * correctly  matched brackets
 */

const removeBrackets = (str) => {
  let left_parenthesis = 0,
    right_paraenthesis = 0;
  for (char of str) {
    char === "(" ? left_parenthesis++ : right_paraenthesis++;
  }
  return Math.abs(left_parenthesis - right_paraenthesis);
};

console.log(removeBrackets("((()))))()()())"));
console.log(removeBrackets("(((())))))(((())))))))"));
