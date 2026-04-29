// 33. LeetCode - Search on Rotated Sorted Array : Ascending order, Distinct values            
// [3, 4, 5, 6, 7, 0, 1, 2]              
// Method 2 : Using Binary Search                  
// Time Complexity : O(log n)                  
function rotatedSortedArray(arr, target) {
    let st = 0;
    let end = arr.length - 1;
    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);
        if (arr[mid] == target) {
            return mid;
        }

        if (arr[st] <= arr[mid]) { // Left Sorted
            if (arr[st] <= target && target <= arr[mid]) {
                end = mid - 1; // target lies in left half     
            }
            else {
                st = mid + 1; // target NOT in left half → go right    
            }
        }
        else { // Right Sorted
            if (arr[mid] <= target && target <= arr[end]) {
                st = mid + 1; // target lies in right half     
            }
            else {
                end = mid - 1; // target NOT in right half → go left        
            }
        }
    }
    return -1;
}
console.log(rotatedSortedArray([3, 4, 5, 6, 7, 0, 1, 2], 0));
