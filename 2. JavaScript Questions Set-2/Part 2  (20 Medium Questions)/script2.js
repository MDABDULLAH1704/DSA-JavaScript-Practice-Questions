// 6. Write a javascript function that reverse a number.
// Method 1
// function revNumber(val) {
//     let result = Number(val.toString().split('').reverse().join(''));
//     console.log(result);
// }
// revNumber(1234);
// Method 2
// function revNumber(val) {
//     let result = val.toString().split('');
//     for (let i = 0; i < Math.floor(result.length / 2); i++) {
//         let temp = result[i];
//         result[i] = result[result.length - 1 - i];
//         result[result.length - 1 - i] = temp;
//     }
//     console.log(Number(result.join('')));
// }
// revNumber(123456);
// Method 3
// function revNumber(num) {
//     let rev = 0;
//     while (num > 0) {
//         let rem = num % 10;
//         rev = rev * 10 + rem;
//         num = Math.floor(num / 10);
//     }
//     return rev;
// }
// console.log(revNumber(123));



// 7. Write a javascript function that checks whether a passed string is palindrome or not.
// Method 1
// function checkPalindrome(str) {
//     let arr = str.toLowerCase().split('');
//     for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//         if (arr[i] === arr[arr.length - 1 - i]) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(checkPalindrome('AabbccBBAa'));
// Method 2
// function checkPalindrome(str) {
//     let reversed = str.toLowerCase().split('').reverse().join('');
//     if (reversed === str.toLowerCase()) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(checkPalindrome('ABCcba'));



// 8. Write a javascript function that return a passed string with letters in alphabetical order.
// Method 1
// function retStrToAlphaOrder(str) {
//     let newStr = str.split('').sort().join('');
//     console.log(newStr);
// }
// retStrToAlphaOrder('dcba');
// Method 2
// function retStrToAlphaOrder(str) {
//     let arr = str.split('');
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j].charCodeAt(0) > arr[j + 1].charCodeAt(0)) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr.join('');
// }
// console.log(retStrToAlphaOrder('dcba'));



// 9. Write a javascript function that accepts a string as a parameter and convert the first letter of each word of the string in upper case.
// function capitalizeEachWord(str) {
//     let arr = str.split(' ');
//     let result = arr.map((word) => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     console.log(result.join(' '));
// }
// capitalizeEachWord('hello how are you.');



// 10. Write a javascript function which accepts an argument and return the type.
// function returnType(val) {
//     return typeof val;
// }
// // Examples :
// console.log(returnType(123));         // "number"
// console.log(returnType("hello"));     // "string"
// console.log(returnType(true));        // "boolean"
// console.log(returnType({}));          // "object"
// console.log(returnType(null));        // "object" (quirk of JS)
// console.log(returnType(undefined));   // "undefined"
// console.log(returnType(() => { }));   // "function"
// console.log(returnType([]));          // "object" (arrays are objects)