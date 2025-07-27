// 1. Given a string, reverse each word in the sentence.
// Method 1
// function revSentence(str) {
//     let newStr = str.split(' ');
//     for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
//         let temp = newStr[i];
//         newStr[i] = newStr[newStr.length - 1 - i];
//         newStr[newStr.length - 1 - i] = temp;
//     }
//     let result = newStr.join(' ');
//     console.log(result);
// }
// revSentence("hello how are you");

// Method 2
// let str = "hello how are you";
// let newStr = str.split(' ');
// let result = newStr.map((word) => {
//     return word.split('').reverse().join('');
// });
// console.log(result.join(' '));



// 2. How to check if an object is an array or not? Provide some code.
// function checkArray(ele) {
//     return Array.isArray(ele);
// }
// console.log(checkArray([]));
// console.log(checkArray({}));



// 3. How to empty an array in javascript. Do not reset it to a new array and do not loop through to pop each value.
// Method 1 
// let arr = [1, 2, 3, 4, 5]; 
// arr.length = 0; 
// console.log(arr); 
// Method 2 
// let arr = [1, 2, 3, 4, 5]; 
// arr = []; 
// console.log(arr); 
// Method 3 
// let arr = [1, 2, 3, 4, 5];
// for (let i = arr.length; i > 0; i--) {
//     arr.pop();
// }
// console.log(arr);
// Method 4 
// let arr = [1, 2, 3, 4, 5];
// while (arr.length > 0) {
//     arr.pop();
// }
// console.log(arr);



// 4. How would you check if a number is an integer.
// Method 1
// let res = Number.isInteger(21);
// console.log(res);
// Method 2
// let a = 12;
// if (a % 1 === 0) {
//     console.log('Integer');
// }
// else {
//     console.log('Not integer');
// }



// 5. Make this work : duplicate([1, 2, 3, 4, 5]); [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].
// function duplicate(arr) {
//     console.log(`[${arr},${arr}]`);
//     console.log(arr.concat(arr));
// }
// duplicate([1, 2, 3, 4, 5]);
