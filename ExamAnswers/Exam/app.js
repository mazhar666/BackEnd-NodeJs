// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);
// console.log(numbers);

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// ================================================================
// var pokemon = ["squirtle", "chaemander", "bulbasaur"];

// var pokeLength = pokemon.reduce(function (previous, current) {
//   return previous + current.length;
// }, 0);
// console.log(pokeLength);
// ================================================================
// const numbers = [5, 10, 15];
// const reducer = numbers.reduce((accumulator, item) => {
//   return accumulator + item;
// });
// console.log(reducer);
// ================================================================
// const euros = [29.76, 41.85, 46.5];

// const doubled = euros.reduce((total, amount) => {
//   total.push(amount * 2);
//   return total;
// }, []);
// console.log(doubled);
// ================================================================
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(2));
// console.log(numbers.includes(99));
// ================================================================
// const myBoolean = true;
// if (myBoolean) {
//   const turtles = ["leonardo", "donatello", "michaelangelo", "raphael"];
//   turtles = turtles.concat("Shredder");
//   console.log(turtles);
// }
// ================================================================
// const names = ["Batman", "Catwoman", "joker", "Bane"];
// const fromIndex = 1;
// const removeCount = 2;
// const newNames = [
//   ...names.slice(0, fromIndex),
//   ...names.slice(fromIndex + removeCount),
// ];
// console.log(newNames);
// ================================================================
// console.log(typeof NaN);
// console.log(typeof String);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof [5, 10, 20]);
// ================================================================
// function showCoords(event) {
//   document.getElementById("demo").innerHTML = `
//     <p> X = ${event.clientX}</p>
//     <p> X = ${event.clientY}</p>`;
// }
// Attach an event listener to the document to listen for mousemove events
// document.addEventListener("mousemove", showCoords);
// ================================================================
// let person = {
//   profile: {
//     name: "",
//     age: 0,
//   },
// };
// console.log(person.profile.name || "Anonymous");
// console.log(person.profile.age || 18);
// console.log(person.profile.name ?? "Anonymous");
// console.log(person.profile.age ?? 18);
// ================================================================
// const colors = ["white", "black", "gray"];
// const clone = [...colors];
// console.log(clone);
// console.log(colors === clone);
// ================================================================
// const numbers = [1, 2, 3, 4, 5];
// const nums = [];
// function isEven(number) {
//   return number % 2 === 0;
// }
// const evenNumber = numbers.find(isEven),
//   evenNum = nums.find(isEven);
// console.log(evenNumber);
// console.log(evenNum);
// ================================================================
// let myFunc = (first, last) => ({ firstName: first, lastName: last }),
//   testFunc = (first, last) => { firstName: first, lastName: last };

// console.log(myFunc("john", "doe"));
// console.log(testFuncFunc("john", "doe"));
// ================================================================
// function mul(num1) {
//   return function (num2) {
//     return function (num3) {
//       return num1 * num2 * num3;
//     };
//   };
// }
// console.log(mul(1)(5)(10));
// ================================================================
// let arr = ["john", "jack", "john", "jack"];

// let result = arr.reduce((x, y) => {
//   if (!x[y]) {
//     x[y] = 0;
//   }
//   x[y]++;
//   return x;
// }, []);
// console.log(result);
