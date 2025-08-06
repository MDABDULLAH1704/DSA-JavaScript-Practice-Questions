// 61. Create an object with properties name, age and city. Log the object.
// let obj = {
//     name:'Ali',
//     age:20,
//     city:'Motihari'
// }
// console.log(obj);

// 62. Add a new property isStudent to the object above and set it to true.
// let obj = {
//     name: 'Ali',
//     age: 20,
//     city: 'Motihari'
// }
// obj.isStudent = true,
//     console.log(obj);

// 63. Access and log the value of the city property using bracket notation.
// let obj = {
//     name: 'Ali',
//     age: 20,
//     city: 'Motihari'
// }
// console.log(obj['city']);
// console.log(obj.city);

// 64. Delete the age property from an object and log the updated object.
// let obj = {
//     name: 'Ali',
//     age: 20,
//     city: 'Motihari'
// }
// console.log(delete obj['age']);
// console.log(delete obj.age);
// console.log(obj);

// 65. Write a function that accepts an object and logs all its keys.
// function showObjKeys(obj) {
//     return Object.keys(obj);
// }
// console.log(showObjKeys({ name: 'Ali', age: 20 }));
// function showObjValues(obj) {
//     return Object.values(obj);
// }
// console.log(showObjValues({ name: 'Ali', age: 20 }));

// 66. Create an array of objects representing books with title and author properties.
// let books = [
//     {
//         title: 'How to Learn',
//         author: 'Ali'
//     },
//     {
//         title: 'How to Earn',
//         author: 'Babu'
//     }
// ];
// console.log(books);

// 67. Access and log the author of the second book in an array.
// console.log(books[1].author);

// 68. Write a program to check if a specific key exists in an object.
// Method 1
// let obj = {
//     name: 'Ali',
//     age: 20,
//     city: 'Motihari'
// };
// let result = Object.keys(obj).includes('age');
// console.log(result);
// Method 2
// let obj = {
//     name: 'Ali',
//     age: 20,
//     city: 'Motihari'
// };
// if (obj.hasOwnProperty('age')) {
//     console.log('Key "age" exists in the object.');
// } else {
//     console.log('Key "age" does not exist.');
// }
// Method 3
// let obj = {
//     name: 'Ali',
//     age: 20,
//     city: 'Motihari'
// };
// let keyToCheck = 'age';
// if (keyToCheck in obj) {
//     console.log(`Key "${keyToCheck}" exists in the object.`);
// } else {
//     console.log(`Key "${keyToCheck}" does not exist.`);
// }

// 69. Create a function to count the number of keys in an object.
// let object = {
//     name: 'Ali',
//     age: 20,
//     city: 'Motihari'
// };
// function countKeys(obj) {
//     let count = 0;
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countKeys(object));

// 70. Use Object.assign() to merge two objects.
// let obj1 = {
//     name: 'Ali',
//     age: 20
// };
// let obj2 = {
//     city: 'Motihari',
//     country: 'India'
// };
// let newObj = Object.assign(obj1, obj2);
// console.log(newObj);
