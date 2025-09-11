// Binary Search           
// Method - Using Recursion              
function binarySearchRecursion(arr, tar, st, end) {
    if (st > end) {
        return -1;  // Target not found
    }

    let mid = Math.floor(st + (end - st) / 2);
    if (arr[mid] === tar) {
        return mid;
    }
    else if (arr[mid] < tar) {
        return binarySearchRecursion(arr, tar, mid + 1, end);
    }
    else {
        return binarySearchRecursion(arr, tar, st, mid - 1);
    }
}
let arr = [1, 2, 3, 4, 5];
let tar = 51;
console.log(binarySearchRecursion(arr, tar, 0, arr.length - 1));
