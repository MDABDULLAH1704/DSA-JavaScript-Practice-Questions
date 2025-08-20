// Single Element in Sorted Array               
// Method : Linear Search Approach           
// Time Complexity : O(n)            
function findSingleElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
            return arr[i];
        }
    }
    return -1;
}
console.log('Element is', findSingleElement([1, 1, 2, 3, 3, 4, 4, 8, 8]));
