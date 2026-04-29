// 33. LeetCode - Search on Rotated Sorted Array : Ascending order, Distinct values            
// [3, 4, 5, 6, 7, 0, 1, 2]              
// Method 1 : Could be solve using Linear Search            
// But this method is not optimized given it is Rotated Sorted Array.       
function usingLinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(usingLinearSearch([3, 4, 5, 6, 7, 0, 1, 2], 0));
