// Single Element in Sorted Array                
// Method : Binary Search Approach            
// Time Complexity : O(log n)             
function findSingleElement(arr) {
    let st = 0;
    let end = arr.length - 1;

    if (arr.length == 1) return arr[0];

    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        if (mid == 0 && arr[0] != arr[1]) return arr[mid];
        if (mid == arr.length - 1 && arr[arr.length - 1] != arr[arr.length - 2]) return arr[mid];

        if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) return arr[mid];

        if (mid % 2 == 0) { // Even    
            if (arr[mid] == arr[mid - 1]) {
                end = mid - 1; // Go -> Left   
            }
            else {
                st = mid + 1; // Go -> Right   
            }
        }
        else { // Odd    
            if (arr[mid] == arr[mid - 1]) {
                st = mid + 1; // Go -> Right   
            }
            else {
                end = mid - 1; // Go -> Left   
            }
        }
    }
}
console.log('Element is', findSingleElement([1, 1, 2, 3, 3, 4, 4, 8, 8]));
