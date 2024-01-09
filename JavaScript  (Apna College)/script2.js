// Topic:- Operators


// Arithmetic Operators
// let a = 5;
// let b = 2;

// console.log("a + b =", a + b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);
// a++;
// console.log("a++ =", a++);
// b--;
// console.log("b-- =", b);
// ++a;
// console.log("++a =", a);
// --b;
// console.log("--b =", b);



// Assignment Operators
// let a = 5;
// let b = 2;

// a += 4;
// console.log("a += ", a);



// Comparison Operators
// let a = 5;
// let b = 2;

// console.log("a == b : ", a == b);
// b = 5;
// console.log("a == b : ", a == b);
// b = 2;
// console.log("a != b : ", a != b);
// b = "5";
// console.log("a === b : ", a === b);
// console.log("a !== b : ", a !== b);
// b = 2;
// console.log("a > b : ", a > b);



// Logical Operators
// let a = 5;
// let b = 2;

// console.log("a && b : ", a > b && a == 5);
// console.log("a && b : ", a > b || a == 2);
// console.log("!(a > b) : ", !(a > b));



// Conditional Statement
// let age = 22;
// if (age >= 18) {
//     console.log("U can vote.");
// }
// if (age < 18) {
//     console.log("U cannot vote.");
// }

// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);

// Odd or Even
// let num = prompt("Enter a number : ");

// if (num % 2 === 0) {
//     console.log(num, "is even");
// }
// else {
//     console.log(num, "is odd");
// }



// Ternary Operators
// let age = 25;
// console.log(age > 18 ? "Adult" : "Not Adult");

// age = 12;
// let result = age > 18 ? "Adult" : "Not Adult";
// console.log(result);



// MDN Docs



// Qs1. Get user to input a number using prompt(“Enter a number: ”). Check if the number is a multiple of 5 or not.
// let number = prompt("Enter a number : ");

// if (number % 5 === 0) {
//     console.log(number, "is multiple of 5");
// }
// else {
//     console.log(number, "is not multiple of 5");
// }


// Qs2. Write a code which can give grades to students according to their scores: 
/*  90-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, E   */
let score = prompt("Enter a score : ");

if (score >= 90 && score <= 100) {
    console.log("Marks", score, ",", "Grade A");
}
else if (score >= 70 && score <= 89) {
    console.log("Marks", score, ",", "Grade B");
}
else if (score >= 60 && score <= 69) {
    console.log("Marks", score, ",", "Grade C");
}
else if (score >= 50 && score <= 59) {
    console.log("Marks", score, ",", "Grade D");
}
else {
    console.log("Marks", score, ",", "Grade E");
}