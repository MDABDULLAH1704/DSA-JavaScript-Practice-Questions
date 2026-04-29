// Binary Search : It is always occur in Sorted Array                              
// Time Complexity : O(log n) & O(log n) - Space Complexity            
// Method : Using Recursion                
function binarySearch(arr, target, st, end) {
    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);
        if (target > arr[mid]) {
            return binarySearch(arr, target, mid + 1, end);
        }
        else if (target < arr[mid]) {
            return binarySearch(arr, target, st, mid - 1);
        }
        else {
            return mid;
        }
    }
    return -1;
}
console.log(binarySearch([-1, 0, 3, 4, 5, 9, 12], 3, 0, 6));
