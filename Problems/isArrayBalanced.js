/**
 * Given an array of even size, task is to find minimum value that can be added to an element so that array become balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of right half.
 * Link : https://www.geeksforgeeks.org/find-the-minimum-value-to-be-added-so-that-array-becomes-balanced/
 */

function isArrayBalanced(arr) {
  let sum1 = 0,
    sum2 = 0;
  // summ of first half of the array
  for (let i = 0; i < arr.length / 2; i++) {
    sum1 += arr[i];
  }
  // summ of second half of the array
  for (let i = arr.length / 2; i < arr.length; i++) {
    sum2 += arr[i];
  }
  return sum1 === sum2;
}

console.log("Is array balanced", isArrayBalanced([1, 7, 1, 1, 7, 1]));
