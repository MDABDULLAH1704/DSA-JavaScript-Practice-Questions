// 16. Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of an array.
// Method 1
// function retrieve(arr, n) {
//     if (arr == null) return undefined;
//     if (n == null) {
//         return arr[0];
//     } else {
//         return arr.slice(0, n);
//     }
// }
// console.log(retrieve([1, 2, 3, 4, 5], 3));
// Method 2
// function retrieve(arr, n) {
//     if (arr == null) return undefined;
//     if (n == null) return arr[0];
//     let newArr = [];
//     for (let i = 0; i < n && i < arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(retrieve([1, 2, 3, 4, 5], 3));



// 17. Write a javascript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of an array.
// function retrieveLast(arr, n) {
//     if (arr == null) return undefined;
//     if (n == null) return arr[arr.length - 1];
//     let newArr = [];
//     for (let i = arr.length - n; i < arr.length; i++) {
//         if (i >= 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(retrieveLast([1, 2, 3, 4, 5], 3));



// 18. Write a javascript program to find the most frequent item of an array. (Hard level)
// function findMostFrequent(arr) {
//     let freq = {};
//     arr.forEach((elem) => {
//         if (freq.hasOwnProperty(elem)) {
//             freq[elem]++;
//         }
//         else {
//             freq[elem] = 1;
//         }
//     });
//     console.log(freq);

//     let result = Object.keys(freq).reduce((acc, next) => {
//         return freq[acc] > freq[next] ? acc : next;
//     })
//     return `Most frequent item = ${result}`;
// }
// console.log(findMostFrequent([1, 2, 3, 1, 2, 1, 5, 2, 7, 2]));
// console.log(findMostFrequent(['ali', 'feza', 'ali', 'zoya', 'zara', 'ali']));



// 19. Write a javascript program to shuffle an array.
// function shuffle(arr) {
//     // Find the shuffle area first
//     let totalShuffleArea = arr.length;
//     while (totalShuffleArea > 0) {
//         totalShuffleArea--;
//         // Find a random number
//         let indexToBeExchange = Math.floor(Math.random() * totalShuffleArea);
//         let temp = arr[totalShuffleArea];
//         arr[totalShuffleArea] = arr[indexToBeExchange];
//         arr[indexToBeExchange] = temp;
//     }
//     return arr;
// }
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));



// 20. Write a javascript program to compute the union of two arrays.
// Method 1
// function unionOfTwoArr(arr1, arr2) {
//     return [...new Set(arr1.concat(arr2))]
//     // return [...new Set([...arr1, ...arr2])]
// }
// console.log(unionOfTwoArr([1, 2, 3], [2, 3, 4]));
// Method 2
// function unionOfTwoArr(arr1, arr2) {
//     let arr = arr1.concat(arr2);
//     let newArr = new Set(arr);
//     return newArr;
// }
// console.log(unionOfTwoArr([1, 2, 3], [2, 3, 4]));



// 21. Number is Prime or Not
function isPrime(n) {
    if (n <= 1) {
        console.log('Not Prime');
        return;
    }
    // for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log('Not Prime');
            return;
        }
    }
    console.log('Prime');
}
isPrime(312);