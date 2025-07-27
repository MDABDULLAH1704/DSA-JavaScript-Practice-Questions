// 1. Find the sum of all elements in an array using a function.
// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i of arr) {
//         sum = sum + i;
//     }
//     return sum;
// }

// let array = [1, 2, 3, 4, 5];
// let result = sumOfArray(array);
// console.log(`Sum of array = ${result}`);



// 2. Remove that number which is less than 2 from an array using a function.
// function Remove(arr) {
//     return arr > 2;
// }

// let array = [1, 2, 3, 2, 4, 5, 3, 7, 2];
// let newArray = array.filter(Remove);
// console.log(newArray);



// 3. Remove duplicate elements from an array using a function.
// function duplicate(arr) {
//     let newArray = [];

//     for (const i of arr) {
//         if (!newArray.includes(i)) {
//             newArray.push(i);
//         }
//     }
//     console.log(newArray);
// }

// let array = [1, 3, 2, 1, 3, 4, 3, 5, 4];
// let result = duplicate(array);



// 4. Write a function to check if a specific element exists in an array.
// function isElementInArray(arr) {
//     for (const i of arr) {
//         if (i === 'orange') {
// console.log(i);   //
//             return i;
//         }
//     }
// }

// let fruits = ['apple', 'banana', 'orange'];
// let result = isElementInArray(fruits);
// console.log(result);



// 5. Write a function to filter out the even numbers from an array.
// function evenNumber(arr) {
//     let newArray = [];

//     for (const i of arr) {
//         if (i % 2 === 0) {
//             newArray.push(i);
//         }
//     }
//     console.log(newArray);
// }

// let array = [0, 1, 2, 3, 4, 5, 6];
// let result = evenNumber(array);



// 6. Write a function to reverse the elements of an array.

// Method 1
// function reverseArray(arr) {
//     return arr.reverse();
// }

// const colors = ['red', 'green', 'blue', 'yellow'];
// let result = reverseArray(colors);
// console.log(result);


// Method 2
function reverseArray(arr) {
    let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const naturalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(naturalArray);
console.log(reversedArray);