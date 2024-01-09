// Topic:- Loops


// For Loops
// for (let i = 0; i < 5; i++) {
//     console.log("i =", i);
// }


// Calculate Sum of 1 to n
// let n = prompt("Enter a number : ");
// let sum = 0;

// for (let j = 1; j <= n; j++) {
//     sum = sum + j;
// }
// console.log("Sum =", sum);


// While Loops
// let k = 1;
// while (k <= 5) {
//     console.log("k =", k);
//     k++;
// }


// Do While Loops
// let l = 1;
// do {
//     console.log("l =", i);
//     l++;
// } while (l <= 5);


// For Of Loops
// let str = "JavaScript";
// let size = 0;

// for (let i of str) {
//     console.log("i= ", i);
//     size++;
// }
// console.log("String size =", size);


// For In Loops
// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for (let key in student) {
//     console.log("key =", key, "Value =", student[key]);
//     console.log(key, "=", student[key]);
// }



// Qs1. Print all even numbers from 0 to 100.
// Method 1
// for (let number = 0; number <= 100; number = number + 2) {
//     console.log("number =", number);
// }

// Method 2
// for (let number = 0; number <= 100; number++) {
//     if (number % 2 === 0) {
//         console.log("number =", number);
//     }
// }



// Qs2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;

let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong number, Guess again : ");
}

console.log("Congratulation, you entered the right number =", gameNum);