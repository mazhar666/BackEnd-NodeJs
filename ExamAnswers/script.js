/**
 *  ============================================================= Answer The Following Questions =============================================================
 * Question 1: Hoisting in JavaScript refers to the behavior where variable and function declarations are
 *  moved to the top of their containing scope during the compilation phase, before the actual
 *  code execution takes place. This might lead to unexpected results or behavior if not understood properly.
 *
 * Question 2: In JavaScript, the super keyword is used to call methods on an object's parent or superclass.
 *  It is primarily used in the context of classes and inheritance to access and invoke methods or constructors from the parent class.
 *  The super keyword allows you to maintain a connection between a subclass and its superclass,
 *  enabling you to extend and customize the behavior of the parent class.
 *
 * Question 3: "var" has function-level or global scope, and variables are hoisted and initialized to undefined.
 *  "let" has block-level scope, and variables are hoisted but not initialized until the declaration statement.
 *  "const" has block-level scope and is used to declare constants that cannot be reassigned.
 *
 * Question 4: "Rest Parameter" is a feature introduced in ECMAScript 6 (ES6) that allows you to represent an indefinite number of arguments as an array.
 *  It's denoted by three dots (...) followed by a parameter name in the function's parameter list.
 *  This allows you to pass any number of arguments to the function, and they will be gathered into an array.
 *
 *             "Arrow Function" also known as fat arrow functions, are a concise way to write anonymous functions in JavaScript.
 *             Its uses: 1. Short Function Expressions: Arrow functions are great for short, simple function expressions, especially when you need a quick callback function. They help reduce code verbosity.
 *                       2. Callbacks: Arrow functions are often used as callback functions, particularly in functional programming and when working with higher-order functions like map, filter, and reduce.
 *                       3. Maintaining this Context: Arrow functions are used to maintain the value of this from the surrounding code. They're often used in cases where you want to use the outer this value within a nested function.
 *                       4. Avoiding function Keyword: Arrow functions provide a cleaner and more modern syntax compared to traditional function expressions, which can make your code easier to read and understand.
 *                       5. Iterating Over Object Properties: Arrow functions can be useful for quickly iterating over object properties, although they are typically used with single-expression bodies.
 *                       6. Implicit Return: Arrow functions with single-expression bodies have implicit return behavior, allowing you to write shorter code for simple calculations or transformations.
 *                       7. Alternative for 'bind': Arrow functions can be used as an alternative to the bind method when creating functions with a fixed context.
 *
 *             The Differences between 'Arrow' and 'normal' functions:
 *                   the choice between arrow functions and normal functions depends on your specific use case and requirements.
 *                   Arrow functions are concise and useful for maintaining 'this' context, while regular functions provide more flexibility and functionality,
 *                   especially when working with constructors and handling complex scoping situations.
 *
 *
 * Question 5: 'readonly' attribute: The element's value cannot be edited by the user, but it still appears normal and can be selected, copied, etc.
 *             'disabled' attribute: The element is non-interactive, visually distinct from normal elements, and its value is not submitted with the form.
 *
 *
 * Question 6: 1. Pixels (px)
 *             2. Percentage (%)
 *             3. Ems (em)
 *             4. Root Em (rem)
 *             5. Viewport Percentage (vw, vh, vmin, vmax)
 *             6. Font Relative (ch, ex)
 *             7. Fixed Units (in, cm, mm, pt, pc)
 *
 *
 * Question 7: The 'font-family' property
 *
 * Question 8: Method 1: Using Flex box.
 *             Method 2: Using Position and Transform.
 *
 *
 *  ===================================== Question 5 =====================================
 */

// 1
// function recursiveStringLength(str) {
//   // Base case: If the string is empty, its length is 0
//   if (str === "") {
//     return 0;
//   }

//   // Recursive case: Remove the first character and call the function recursively
//   return 1 + recursiveStringLength(str.slice(1));
// }

// const inputString = "Hello, world!";
// const length = recursiveStringLength(inputString);
// console.log(`Length of the string "${inputString}" is: ${length}`);
// =================================================================
// 2
// function printMultiplicationTable() {
//   for (let i = 1; i <= 12; i++) {
//     for (let j = 1; j <= 12; j++) {
//       const result = i * j;
//       console.log(`${i} * ${j} = ${result}`);
//     }
//     console.log("=================");
//   }
// }

// printMultiplicationTable();
// =================================================================
// 3
// function getElementsAtOddPositions(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }

//   return result;
// }

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddPositionElements = getElementsAtOddPositions(inputArray);

// console.log("Elements at odd positions:", oddPositionElements);
// =================================================================
// 4
// function isPrime(number) {
//   if (number <= 1) {
//     return false; // Numbers less than or equal to 1 are not prime
//   }

//   // Check for divisibility from 2 to the square root of the number
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false; // If divisible by any number, it's not prime
//     }
//   }

//   return true; // If not divisible by any number, it's prime
// }

// const numberToCheck = 17;
// if (isPrime(numberToCheck)) {
//   console.log(`${numberToCheck} is a prime number.`);
// } else {
//   console.log(`${numberToCheck} is not a prime number.`);
// }
// =================================================================
// 5
//  the Js code =>
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");

// var body = document.getElementById("gradient");
// var button = document.querySelector(".random");

// function setGradient() {
//   body.style.background = `linear-gradient( to right, ${color1.value}, ${color2.value}) `;
// }

// //here we intializing the value to color1 picker and color2 picker

// color1.value = "#00FF00";
// color2.value = "#FF0000";
// setGradient();

// function setRandomColor() {
//   color1.value = "#" + Math.floor(Math.random() * 0x1000000).toString(16);
//   color2.value = "#" + Math.floor(Math.random() * 0x1000000).toString(16);
//   setGradient();
// }

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);
// button.addEventListener("click", setRandomColor);

// The HTML code =>
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>BackGround Generator</title>
//     <link rel="stylesheet" href="style.css">
// </head>

// <body id="gradient">
//     <h1>Background Generator</h1>
//     <input type="color" class="color1" name="color1">
//     <input type="color" class="color2" name="color2">
//     <button type="button" class="random" name="Random">Random Button</button>

//     <script src="script.js"></script>
// </body>

// </html>

// THe CSS Code =>
// body {
//     font: "Raleway", sans-seriff;
//     color: rgba(0, 0, 0, .5);
//     text-align: center;
//     text-transform: uppercase;
//     top: 15%;
//     letter-spacing: .5em;
//     background: linear-gradient(to right, red, yellow);
// }

// h1 {
//     font: 600 3.5em "Raleway", sans-seriff;
//     color: rgba(0, 0, 0, 0.5);
//     text-align: center;
//     text-transform: uppercase;
//     letter-spacing: .3em;
//     width: 100%;
// }

// .random {
//     font-size: 16px;
//     padding: 5px;
//     border-radius: 3px;
//     color: #88CC88;
//     font-weight: bold;
// }

// .random:hover {
//     color: #fff;
// }

// =================================================================
// 6
// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;

//     for (let char of str) {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }

//     return count;
//   }

//   const inputString = "Hello, World!";
//   const vowelCount = countVowels(inputString);

//   console.log(`Number of vowels in "${inputString}": ${vowelCount}`);
// =================================================================
// 7
// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     set_value(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//   class Zebra extends Animal {
//     constructor(name, age, origin) {
//       super(name, age);
//       this.origin = origin;
//     }

//     getInfo() {
//       return `${this.name} is a zebra, ${this.age} years old, and originates from ${this.origin}.`;
//     }
//   }

//   class Dolphin extends Animal {
//     constructor(name, age, origin) {
//       super(name, age);
//       this.origin = origin;
//     }

//     getInfo() {
//       return `${this.name} is a dolphin, ${this.age} years old, and originates from ${this.origin}.`;
//     }
//   }

//   const zebra1 = new Zebra("Zara", 5, "Africa");
//   const dolphin1 = new Dolphin("Dolly", 10, "Ocean");

//   console.log(zebra1.getInfo());
//   console.log(dolphin1.getInfo());
// =================================================================
// 9
// class MyObject {
//     constructor(name, message) {
//       this.name = name.toString();
//       this.message = message.toString();
//     }

//     getName() {
//       return this.message;
//     }
//   }

//   const obj1 = new MyObject("John", "Hello");
//   const obj2 = new MyObject("Alice", "Hi");

//   console.log(obj1.getName()); // Output: Hello
//   console.log(obj2.getName()); // Output: Hi
// =================================================================
