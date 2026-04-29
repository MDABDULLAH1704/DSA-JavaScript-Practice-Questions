// LeetCode 136. Single Number - Given a non empty array of integers num, every element appears twice except for one. Find that single one.          
// function singleNumber(arr) {
//     let ans = 0;
//     arr.forEach(val => {
//         ans = ans ^ val;
//     });
//     return ans;
// }
// console.log(singleNumber([1, 2, 3, 2, 1]));



// Method 1   
// function singleNumber(arr) {
//     let freq = {};
//     for (let num of arr) {
//         if (freq[num]) {
//             freq[num]++;      // count repeats
//         } else {
//             freq[num] = 1;    // first time
//         }
//     }
//     // Find the number with count 1
//     for (let key in freq) {
//         if (freq[key] === 1) {
//             return Number(key);
//         }
//     }
// }
// console.log(singleNumber([1, 2, 3, 2, 1])); // 3



// Method 2 - Using Sorting       
function singleNumber(arr) {
    arr.sort(); // sort the array
    for (let i = 0; i < arr.length; i = i + 2) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i];
        }
    }
}
console.log(singleNumber([1, 2, 3, 2, 1])); // 3

