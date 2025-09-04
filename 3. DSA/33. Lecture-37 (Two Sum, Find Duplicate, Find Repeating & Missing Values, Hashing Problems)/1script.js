// Q1. 2 Sum Problem                  
// Method 1 - Brute Force                     
// Time Complexity - O(n2)                   
function twoSum(arr, tar) {
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let second = arr[j];
            if (first + second === tar) {
                return [i, j];
            }
        }
    }
    return -1;
}
console.log(twoSum([5, 2, 7, 11, 15], 9));  
