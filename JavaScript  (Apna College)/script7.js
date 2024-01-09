// Topic:- For Each

// For Each used for only Array.



// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// arr.forEach((val) => {
//     console.log(val);
// });



// Qs1. For a given array of numbers, print the square of each value using the forEach loop.
let nums = [2, 3, 4, 5, 6];

let calcSquare = (num) => {
    console.log(num * num);
}

nums.forEach(calcSquare);



// Qs2. We are given array of marks of students. Filter out of the marks of students that scored 90+. 
let marks = [97, 64, 32, 49, 99, 96, 86, 92];


let topper = marks.filter((val) => {
    return val > 90;
});
console.log(topper);



// Qs3. Take a number n as input from user, Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.
let n = prompt("Enter a number : ");
let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log("Array =", arr);


let sum = arr.reduce((result, current) => {
    return result + current;
});
console.log("Sum =", sum);


let factorial = arr.reduce((result, current) => {
    return result * current;
});
console.log("Factorial =", factorial);
