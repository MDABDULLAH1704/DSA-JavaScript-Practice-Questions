// Selection Sort             
// (n-1) iteration         
// Find smallest element then Swap with the first coming element after each Swap       
// Sorted part & Unsorted part      
// Time Complexity : O(n2)           
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let smallestIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[smallestIdx]) {
                smallestIdx = j;
            }
        }
        [arr[i], arr[smallestIdx]] = [arr[smallestIdx], arr[i]];
    }
    return arr;
}
console.log(selectionSort([4, 1, 5, 2, 3]));
