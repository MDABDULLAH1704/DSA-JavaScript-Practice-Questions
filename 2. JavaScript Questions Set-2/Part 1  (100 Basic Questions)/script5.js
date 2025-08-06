// 41. Write a function to check if a number is even or odd.
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         console.log('Number is Even.');
//     }
//     else {
//         console.log('Number is Odd.');
//     }
// }
// checkEvenOdd(3);

// 42. Create a function to calculate the area of a circle with a given radius.
// function calArea(r) {
//     let area = Math.floor(Math.PI * r * r);
//     // let area = Math.round(Math.PI * r * r);
//     console.log(area);
// }
// calArea(2);

// 43. Write a function that accepts an array and returns the sum of its elements.
// function sumOfArrayElement(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     console.log(sum);
// }
// sumOfArrayElement([1, 2, 3, 4]);

// 44. Create a function that check if a string starts with a specific character.
// function checker(str, char) {
//     return str.toLowerCase().startsWith(char.toLowerCase());
// }
// console.log(checker("Ali", 'a'));

// 45. Write a function to find the maximum of two numbers.
// function maxOfTwoNum(a, b) {
//     if (a > b) {
//         console.log("a is maximum.");
//     }
//     else if (b > a) {
//         console.log("b is maximum.");
//     }
//     else {
//         console.log("Both numbers are equal.");
//     }
// }
// maxOfTwoNum(2, 12);

// 46. Create a function that takes a number and return its factorial.
// function calFactorial(val) {
//     let fact = 1;
//     for (let i = 1; i <= val; i++) {
//         fact = fact * i;
//     }
//     console.log(fact);
// }
// calFactorial(3);

// 47. Write a function that accepts a string and return its reverse.
// function revString(str) {
//     let newStr = str.split("");
//     for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
//         let temp = newStr[i];
//         newStr[i] = newStr[newStr.length - 1 - i];
//         newStr[newStr.length - 1 - i] = temp;
//     }
//     console.log(newStr.join(""));
// }
// revString("AliBabu")

// 48. Create a function to find the largest number in an array.
// function findLargeNumInArr(arr) {
//     // First method could be sorting.
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[max]) {
//             max = i;
//         }
//     }
//     console.log(arr[max]);
// }
// findLargeNumInArr([8, 4, 2, 6, 10, 7]);

// 49. Write a function that convert a string to kebab-case.
// function kebab(str) {
// return str.split(' ').join('-');
//     // return str.replaceAll(' ', '-');
// }
// console.log(kebab('hey how are you.'));

// 50. Create a function that log 'hello world' every time it is called.
// function helloWorld() {
//     console.log('Hello World!');
// }
// helloWorld();