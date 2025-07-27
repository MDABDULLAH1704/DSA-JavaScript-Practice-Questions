// 31. Create an array of your top 5 favorite movies and log it.
// let arr = ["Hero", "War", "Animal", "SpiderMan", "Avenger"];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// arr.forEach((val) => {
//     console.log(val);
// })

// 32. Find and log the second element of an array.
// let arr = [1, 2, 3, 4];
// console.log(arr[1]);

// 33. Add two new elements to the start of an array using unshift().
// let arr = [1, 2, 3, 4];
// arr.unshift(-1, 0);
// console.log(arr);

// 34. Remove the last element of an array and log the undated array.
// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log(arr);

// 35. Use slice() to extract the first three elements of an array.
// let arr = [1, 2, 3, 4, 5];
// let newArr =  arr.slice(0, 3);
// console.log(newArr);

// 36. Find the index of a specific element in an array using indexOf().
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(2));

// 37. Check if a value exists in an array using include().
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(2));

// 38. Combine two arrays [1, 2] and [3, 4] using concat(). 
// let arr1 = [1, 2];
// let arr2 = [3, 4] ;
// console.log(arr1.concat(arr2));

// 39. Sort an array of numbers [5, 2, 9, 1] in ascending order.
// Method 1 :- Using Bubble Sort
// let arr = [5, 2, 9, 1, 7];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);
// Method 2 
// let arr = [5, 2, 9, 1, 7];
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

// 40. Write a program that creates a copy of an array without mutating the original. 
// Method 1 
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];
// console.log(arr2);
// Method 2 
// let arr = [1, 2, 3, 4];
// let arr2 = [];
// arr.forEach((val) => {
//     arr2.push(val);
// })
// console.log(arr2);
