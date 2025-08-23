// Insertion Sort           
// Insertion sort builds the sorted array one element at a time. At each step, it takes the current element (curr) and inserts it into the correct position among the elements before it (which are already sorted).     
// Time Complexity : O(n2)        
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] > curr) { // shift all larger elements one step to the right     
            arr[prev + 1] = arr[prev]; // shifting element right   
            prev--; // move one step left    
        }
        arr[prev + 1] = curr; // Placing the current element in its correct position    
    }
    return arr;
}
console.log(insertionSort([4, 1, 5, 2, 3]));
