// 11. Write a javascript function to get the number of occurrences of each letter in specified string.
// function checkOccurrences(str) {
//     let occurrences = {};
//     str.split('').forEach((elem) => {
//         if (occurrences.hasOwnProperty(elem)) {
//             occurrences[elem]++;
//         }
//         else {
//             occurrences[elem] = 1;
//         }
//     });
//     return occurrences;
// }
// console.log(checkOccurrences('apple'));



// 12. Loop an array and add (sum) all members of it.
// Method 1
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.map((val) => {
//     return sum = sum + val;
// })
// console.log(`Sum = ${sum}`);
// Method 2
// let arr = [1, 2, 3, 4];
// let sum = 0;
// arr.forEach((val) => {
//     return sum = sum + val;
// })
// console.log(`Sum = ${sum}`);
// Method 3
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(`Sum = ${sum}`);



// 13. In an array of numbers and strings, only add those members which are not strings (so basically add numbers).
// function checkNumber(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum = sum + arr[i];
//         }
//     }
//     return `Sum of number in array = ${sum}`;
// }
// console.log(checkNumber([1, '2', 3, '4', 5, 'ali']));



// 14. Loop an array of objects and remove all objects which do not have gender's value male.
let arr = [
    { name: 'ali', gender: 'male' },
    { name: 'zoya', gender: 'female' },
    { name: 'fiza', gender: 'female' },
    { name: 'zara', gender: 'female' },
    { name: 'rohan', gender: 'male' },
    { name: 'mohan', gender: 'male' }
];
// Method 1
// let newArr = arr.filter((elem) => {
//     return elem.gender === 'male';
// })
// console.log(newArr);
// Method 2
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i].gender !== 'male') {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);
// Method 3 
// let result = [];
// for (let person of arr) {
//     if (person.gender === 'male') {
//         result.push(person);
//     }
// }
// console.log(result);



// 15. Write a javascript function to clone an array.
// Method 1
// function cloneArray(arr) {
//     let newArr = arr;
//     return newArr;
// }
// console.log(cloneArray([1, 2, 3]));
// Method 2
// function cloneArray(arr) {
//     return [...arr];
// }
// console.log(cloneArray([1, 2, 3]));
// Method 3
// function cloneArray(arr) {
//     let newArr = [];
//     arr.forEach((elem) => {
//         newArr.push(elem);
//     });
//     return newArr;
// }
// console.log(cloneArray([1, 2, 3]));
// Method 4
// function cloneArray(arr) {
//     let newArr = arr.map((elem) => {
//         return elem;
//     });
//     return newArr;
// }
// console.log(cloneArray([1, 2, 3]));