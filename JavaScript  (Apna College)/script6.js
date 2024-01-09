// Topic:- Function


// function myFunction(msg) {
//     console.log(msg);
// }
// myFunction("I love JS");


// Sum
// function sum2(x, y) {
//     let s = x + y;
//     return s;
// }
// console.log(sum2(3, 3));

// Function ke parameters like Local Variables (You can use function variable out of the function block or Braces.)


// Arrow Function
// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(3, 2));


// Multiplication Arrow Function
// const mult = (c, d) => {
//     return c * d;
// }
// console.log(mult(3, 3));



// Qs1. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Apna College"));