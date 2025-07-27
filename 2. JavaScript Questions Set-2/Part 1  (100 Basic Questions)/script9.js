// 81. Write a function that accepts an array of numbers and return only even numbers.
// Method 1
// function evenNumber(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(evenNumber([1, 2, 3, 4, 5, 6]));
// Method 2
// function evenNumber(arr) {
//     return arr.filter(num => num % 2 === 0);
// }
// console.log(evenNumber([1, 2, 3, 4, 5, 6]));
// Method 3
// function evenNumber(arr) {
//     arr.forEach(num => {
//         if (num % 2 === 0) {
//             console.log(num);
//         }
//     });
// }
// evenNumber([1, 2, 3, 4, 5, 6]);



// 82. Create a program to count the occurrences of a specific value in an array.
// Method 1
// function countOccurrence(arr, target) {
//     let count = 0;
//     arr.forEach(elem => {
//         if(elem === target) {
//             count++;
//         }
//     });
//     return count;
// }
// console.log(countOccurrence([1, 2, 3, 1, 2, 3, 2], 2));
// Method 2
// function countOccurrence(arr, target) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === target) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOccurrence([1, 2, 3, 1, 2, 3, 2], 2));



// 83. Write a function that accepts a string and return whether it is a palindrome.
// Method 1
// function checkPalindrome(str) {
//     let newStr = str.split('').reverse().join('');
//     if(newStr.toLowerCase() === str.toLowerCase()) {
//         return 'Palindrome';
//     }
//     else {
//         return 'Not Palindrome';
//     }
// }
// console.log(checkPalindrome('ABcba'));
// Method 2
// function checkPalindrome(str) {
//     let newStr = str.split('');
//     for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
//         let temp = newStr[i];
//         newStr[i] = newStr[newStr.length - 1 - i];
//         newStr[newStr.length - 1 - i] = temp;
//     }
//     let result = newStr.join('');
//     if (result.toLowerCase() === str.toLowerCase()) {
//         return 'Palindrome';
//     }
//     else {
//         return 'Not Palindrome';
//     }
// }
// console.log(checkPalindrome('ABcba'));



// 84. Create a program to log a pattern :-
// *
// * *
// * * *
// * * * *
// function printPattern(lines) {
//     for (let i = 1; i <= lines; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += '* ';
//         }
//         console.log(pattern.trim());
//         // console.log(pattern);
//     }
// }
// printPattern(4);



// 85. Write a function that returns the square of each number in an array.
// Method 1
// function squareOfNum(arr) {
//     let squaredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         squaredArr.push(arr[i] * arr[i]);
//     }
//     return squaredArr;
// }
// console.log(squareOfNum([1, 2, 3, 4, 5]));
// Method 2
// function squareOfNum(arr) {
//     let result = arr.map((val) => {
//         return val * val;
//     })
//     return result;
// }
// console.log(squareOfNum([1, 2, 3, 4, 5]));



// 86. Use a for loop to sum all odd numbers between 1 and 50.
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 !== 0) {
//         sum = sum + i;
//     }
// }
// console.log('Sum of odd numbers =', sum);



// 87. Create an object representing a person and log their full name.
// let person = {
//     firstName: 'Md',
//     lastName: 'Ali',
//     age: 20,
//     city: 'Motihari'
// };
// console.log(`${person.firstName} ${person.lastName}`);



// 88. Write a program to convert the string '10' to a number and add 5 to it.
// Method 1
// function convertStrToNum(str) {
//     let num = Number(str) + 5;
//     return num;
// }
// console.log(convertStrToNum('10'));
// Method 2
// function convertStrToNum(str) {
//     return parseInt(str) + 5;
// }
// console.log(convertStrToNum('10'));



// 89. Write a program to reverse an array without using .reverse().
// Method 1
// function revArray(arr) {
//     for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }
// console.log(revArray([1, 2, 3, 4, 5]));
// Method 2
// function revArray(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(revArray([1, 2, 3, 4, 5]));



// 90. Create a program to check if an array is empty.   
// Method 1               
// function checkEmpty(arr) {
//     if (arr.length === 0) {
//         return 'Array is empty';
//     }
//     else {
//         return 'Array is not empty'
//     }
// }
// console.log(checkEmpty([]));
