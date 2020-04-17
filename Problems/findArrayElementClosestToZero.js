/** Find the element closest to zero */

const findArrayElementClosestToZero = (arr) => {
  if (arr.length) {
    closestNumber = arr[0];
    arr.forEach((ele) => {
      if (Math.abs(ele) < Math.abs(closestNumber)) {
        closestNumber = ele;
      } else if (
        Math.abs(ele) === Math.abs(closestNumber) &&
        closestNumber < 0
      ) {
        closestNumber = ele;
      }
    });
    return closestNumber;
  } else {
    return 0;
  }
};

console.log(
  "Element closest to zero ",
  findArrayElementClosestToZero([5, 6, 7, 9, -2, -2, 2])
);
console.log(
  "Element closest to zero ",
  findArrayElementClosestToZero([
    7,
    -10,
    13,
    8,
    4,
    -7.2,
    -12,
    -3.7,
    3.5,
    -9.6,
    6.5,
    -1.7,
    -6.2,
    7,
  ])
);
console.log("Element closest to zero ", findArrayElementClosestToZero([]));
