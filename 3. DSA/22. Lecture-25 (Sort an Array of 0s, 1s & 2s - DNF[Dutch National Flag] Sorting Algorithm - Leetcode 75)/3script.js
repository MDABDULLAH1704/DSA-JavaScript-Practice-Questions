// Sort Array with 0s, 1s & 2s             
// [2, 0, 2, 1, 1, 0, 1, 2, 0, 0]               
// Method : Dutch National Flag Algorithm (One-pass solution)           
// Time Complexity : O(n)                
// Optimized One-pass Solution (Dutch National Flag Algorithm)
function sortArray(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            // swap arr[low] and arr[mid]
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            // swap arr[mid] and arr[high]
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}

console.log(sortArray([2, 0, 2, 1, 1, 0, 1, 2, 0, 0]));
