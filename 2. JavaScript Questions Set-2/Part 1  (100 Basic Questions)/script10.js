// 91. Write a program to fetch the current date and format it as DD/MM/YYYY.
// Method 1
// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// console.log(`${day}/${month}/${year}`);
// Method 2
// let date = new Date();
// let day = String(date.getDate()).padStart(2, '0');
// let month = String( date.getMonth() + 1).padStart(2, '0');
// let year = date.getFullYear();
// console.log(`${day}/${month}/${year}`);



// 92. Write a program to find the smallest number in an array.
// method 1
// function findSmallestNum(arr) {
//     if (arr.length === 0) return undefined;
//     let smallest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }
//     return smallest;
// }
// console.log(findSmallestNum([1, 2, 3, 4, 5]));
// Method 2
// function findSmallestNum(arr) {
//     return Math.min(...arr);
// }
// console.log(findSmallestNum([1, 2, -3, 4, 5]));



// 93. Create a function to return the Fibonacci sequence upto n terms.
// Method 1
// function Fibonacci(n) {
//     let sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         let next = sequence[i - 1] + sequence[i - 2];
//         sequence.push(next);
//     }
//     return sequence;
// }
// console.log(Fibonacci(10));



// 94. Use a try...catch block to handle division by zero.
// function divide(a, b) {
//     try {
//         if (b === 0) throw new Error("Division by zero is not allowed.");
//         return a / b;
//     } catch (error) {
//         console.error(error.message);
//         return null;
//     }
// }
// console.log(divide(10, 2));
// console.log(divide(10, 0));



// 95. Write a program to find the index of the first vowel in a string.
// Method 1
// function findFirstVowel(str) {
//     let newStr = str.toLowerCase();
//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u') {
//             return `index = ${i}`;
//         }
//     }
//     return -1;
// }
// console.log(findFirstVowel('QWERTY'));
// Method 2
// function findFirstVowel(str) {
//     let newStr = str.toLowerCase();
//     for (let i = 0; i < newStr.length; i++) {
//         if ('aeiou'.includes(newStr[i])) {
//             return `index = ${i}`;
//         }
//     }
//     return -1;
// }
// console.log(findFirstVowel('QWERTY'));



// 96. Create a function that accepts an array and return only unique values.
// Method 1
// function retUniqueVal(arr) {
//     let seen = {};
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!seen[arr[i]]) {
//             seen[arr[i]] = true;
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(retUniqueVal([1, 2, 1, 2, 3, 4]));
// Method 2
// function retUniqueVal(arr) {
//     return [...new Set(arr)];
// }
// console.log(retUniqueVal([1, 2, 3, 4, 1, 2]));



// 97. Write a program to merge two sorted arrays into one sorted array.
// function mergeTwoSortedArray(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0, j = 0;
//     // Traverse both arrays and compare elements
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }
//     // Add remaining elements of arr1 (if any)
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }
//     // Add remaining elements of arr2 (if any)
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }
//     return mergedArray;
// }
// console.log(mergeTwoSortedArray([1, 3, 5], [2, 4, 6]));
// console.log(mergeTwoSortedArray([2, 4, 6], [1, 3, 5]));



// 98. Create a function to count the number of words in a string.
// Method 1 :- To count character
// function countWord(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         count++;
//     }
//     return count;
// }
// console.log(countWord('javascript'));
// Method 2 :- To count word     
// function countWord(str) {
//     let count = 0;
//     let newStr = str.trim().split(/\s+/);
//     for (let i = 0; i < newStr.length; i++) {
//         count++;
//     }
//     return count;
// }
// console.log(countWord('hi how are you'));
// Method 3 :- To count word       
// function countWord(str) {
//     let newStr = str.trim().split(/\s+/);
//     return newStr.length;
// }
// console.log(countWord('hi how are you'));



// 99. Write a program to toggle a button background color when clicked.             



// 100. Write a function to check if all elements in an array are greater than a specific value.           
function checkValue(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= val) {
            return false;
        }
    }
    return true;
}
console.log(checkValue([3, 4, 5], 2));
