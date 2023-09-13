function fizzBuzzGame(N) {
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzzGame(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
// ======================================================== //
function checkNumbers(num1, num2) {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

console.log(checkNumbers(50, 10)); // Output: true (num1 is 50)
console.log(checkNumbers(20, 50)); // Output: true (num2 is 50)
console.log(checkNumbers(25, 25)); // Output: true (sum of num1 and num2 is 50)
console.log(checkNumbers(30, 40)); // Output: false (neither num1 nor num2 is 50, and their sum is not 50)
