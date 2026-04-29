// Q1. WAF to calculate sum and product of all numbers in an array.              
// function sumProduct(arr) {
//     let sum = 0;
//     let prod = 1;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         prod = prod * arr[i];
//     }
//     return [sum, prod];
// }
// console.log(sumProduct([1, 2, 3, 4, 5]));



// Q2. WAF to swap Max and Min number of an array.                
// function swapMaxMin(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     let maxIndex = 0;
//     let minIndex = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//             maxIndex = i;
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//             minIndex = i;
//         }
//     }
//     let temp = arr[maxIndex];
//     arr[maxIndex] = arr[minIndex];
//     arr[minIndex] = temp;
//     return arr;
// }
// console.log(swapMaxMin([1, 2, 3, 4, 5]));



// Q3. WAF to print all unique values in an array.               
// function uniqueValues(arr) {
//     let obj = {};
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!obj.hasOwnProperty(arr[i])) {
//             obj[arr[i]] = true;
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(uniqueValues([1, 2, 3, 2, 1, 3, 4]));



// Q4. WAF to print intersection of 2 arrays.      
function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    return result;
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5]));

