// Binary Search : It is always occur in Sorted Array                              
// Time Complexity : O(log n)         
// Method : Iterative Approach               
function binarySearch(arr, target) {
    let st = 0;
    let end = arr.length - 1;
    while (st <= end) {
        // let mid = Math.floor((st + end) / 2);
        let mid = Math.floor(st + (end - st) / 2);
        if (target > arr[mid]) {
            st = mid + 1;
        }
        else if (target < arr[mid]) {
            end = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
console.log(binarySearch([-1, 0, 3, 4, 5, 9, 12], 12));
