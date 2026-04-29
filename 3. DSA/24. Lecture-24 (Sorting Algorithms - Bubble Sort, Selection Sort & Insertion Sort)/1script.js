// Bubble Sort             
// (n-1) iteration           
// We Compare Adjacent element              
// Larger last me Push then Swap              
// Time Complexity : O(n2)              
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let isSwap = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap using destructuring 
                isSwap = true;
            }
        }
        // if (!isSwap) {
        if (isSwap == false) {
            break; // No swaps → array already sorted
        }
    }
    return arr;
}
console.log(bubbleSort([4, 1, 5, 2, 3]));
