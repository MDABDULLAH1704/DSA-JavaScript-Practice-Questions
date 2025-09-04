// Q1. 2 Sum Problem                  
// Method 2 - Better Approach            
// Time Complexity - O(n * log(n))                   
function twoSum(arr, tar) {
    arr.sort((a, b) => a - b);
    let st = 0;
    let end = arr.length - 1;
    while (st < end) {
        let sum = arr[st] + arr[end];
        if (sum === tar) {
            return [arr[st], arr[end]];
        }
        else if (sum < tar) {
            st++;
        }
        else {
            end--;
        }
    }
    return -1;
}
console.log(twoSum([5, 2, 11, 7, 15], 9));  
