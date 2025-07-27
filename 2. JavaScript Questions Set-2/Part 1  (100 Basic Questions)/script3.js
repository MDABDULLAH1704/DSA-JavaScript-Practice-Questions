// 21. Write a for loop to print numbers from 1 to 50. 
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// 22. Use a while loop to sum the numbers from 1 to 10.
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }
// console.log("Sum of number from 1 to 10 is", sum);

// 23. Create a for...of loop to log each character of the string "JavaScript".
// let str = "JavaScript";
// for (const i of str) {
//     console.log(i);
// }

// 24. Write a for loop that skips even numbers between 1 and 20.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     else {
//         console.log("Number : ", i);
//     }
// }

// 25. Use a do...while loop to log numbers from 5 to 1.
// let i = 5;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);

// 26. Create a for loop that calculates the factorial of 5.
// let fact = 1;
// for (let i = 1; i <= 5; i++) {
//     fact = fact * i;
// }
// console.log("Factorial of 5 : " ,fact);

// 27. Write a nested loop to print a 3x3 grid of numbers.
// let hold = 1;
// for (let i = 1; i <= 3; i++) {
//     let str = "";
//     for (let j = 1; j <= 3; j++) {
//         str = str + hold; 
//         hold++;
//     }
//     console.log(str);
// }

// 28. Use a for loop to reverse an array [1, 2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }
// console.log(arr);

// 29. Write a while loop that log numbers from 1 to 100 divisible by 5.
// let i = 1;
// while (i <= 100) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// 30. Use a for...in loop to iterate over an object and log its keys.
const obj = {
    name: "Ali",
    class: "10"
}
for (const key in obj) {
    console.log(key);
}