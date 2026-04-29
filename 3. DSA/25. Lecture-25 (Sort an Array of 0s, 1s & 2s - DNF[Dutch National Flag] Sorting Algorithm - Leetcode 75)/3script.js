// Sort Array with 0s, 1s & 2s             
// [2, 0, 2, 1, 1, 0, 1, 2, 0, 0]               
// Method : Dutch National Flag Algorithm (One-pass solution)           
// Time Complexity : O(n)                
function sortArray(arr) {
    let low = 0; // Marks the boundary of 0s (left side)  
    let mid = 0; // The current element we are checking  
    let high = arr.length - 1; // Marks the boundary of 2s (right side)  

    while (mid <= high) {
        if (arr[mid] === 0) { // current element (0) belongs to the left side  
            [arr[low], arr[mid]] = [arr[mid], arr[low]]; // swap   
            low++;
            mid++;
        } else if (arr[mid] === 1) { // current element (1) is already in the correct middle region  
            mid++;
        } else { // current element (2) belongs to the right side  
            [arr[mid], arr[high]] = [arr[high], arr[mid]]; // swap  
            high--;
            // After placing a 2 at the correct end position:
            // The right region (2s) expands by 1.
            // So we shrink the high pointer (high--) to move the boundary one step left.
        }
    }
    return arr;
}

console.log(sortArray([2, 0, 2, 1, 1, 0, 1, 2, 0, 0]));
