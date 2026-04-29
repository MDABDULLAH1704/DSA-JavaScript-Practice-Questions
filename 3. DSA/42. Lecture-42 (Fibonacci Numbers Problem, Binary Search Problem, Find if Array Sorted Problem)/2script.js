// Check if an Array is Sorted           
// Method 1 - Using Recursion               
function isSorted(arr, index = 0) {
    if (index >= arr.length - 1) {
        return true;
    }
    return arr[index] <= arr[index + 1] && isSorted(arr, index + 1);
}
console.log(isSorted([1, 2, 3, 4, 5]));
