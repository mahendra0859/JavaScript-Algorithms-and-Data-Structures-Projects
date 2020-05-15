/**
 * Coding Challeng from coderbyte
 * Nonrepeating Character - return the first non-repeating character
 */

const nonRepeatingCharacter = (str) => {
  let spaceRemovedStr = str.replace(/\s/g, "");
  for (let i = 0; i < spaceRemovedStr.length; i++) {
    let char = spaceRemovedStr.charAt(i);
    if (
      spaceRemovedStr.indexOf(char) === i &&
      spaceRemovedStr.indexOf(char, i + 1) == -1
    )
      return char;
  }
};

console.log("nonRepeatingCharacter", nonRepeatingCharacter("abcdef"));
console.log("nonRepeatingCharacter", nonRepeatingCharacter("hello world hi "));
