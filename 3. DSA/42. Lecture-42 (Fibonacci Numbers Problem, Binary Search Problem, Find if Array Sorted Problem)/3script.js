// Check if an Array is Sorted           
// Method 2 - Using Recursion               
function isSorted(arr, index = 0) {
    if (index >= arr.length - 1) {
        return true;
    }
    if (arr[index] <= arr[index + 1]) {
        return isSorted(arr, index + 1);
    } else {
        return false;
    }
}
console.log(isSorted([1, 2, 3, 4, 5]));
