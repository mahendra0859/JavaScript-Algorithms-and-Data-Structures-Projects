/**
 * A Krishnamurthy number is a number whose sum of the factorial of digits is equal to the number itself.
 *  For example 145, sum of factorial of each digits:
 *  1! + 4! + 5! = 1 + 24 + 120 = 145
 */

// Function to calculate the factorial of any number
function factorial(n) {
  let fact = 1;
  while (n != 0) {
    fact *= n;
    n--;
  }
  return fact;
}

// function to Check if number is krishnamurthy
function isKrishnamurthy(n) {
  let sum = 0;

  let temp = n;
  while (temp != 0) {
    // calculate factorial of last digit
    // of temp and add it to sum
    sum += factorial(temp % 10);

    // replace value of temp by temp/10
    temp = Math.trunc(temp / 10);
  }

  // Check if number is krishnamurthy
  return sum == n;
}

console.log("Checking 145 is Krishna Murthy Number?", isKrishnamurthy(145));
