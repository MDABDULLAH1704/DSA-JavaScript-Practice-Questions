// Merge 2 Sorted Array           
// Method 2 : Efficient Way               
// Time Complexity : O(m+n)          
function mergeSortedArrays(arr1, arr2, m, n) {
    let index = m + n - 1;
    let i = m - 1;
    let j = n - 1;
    while (i >= 0 && j >= 0) {
        if (arr1[i] >= arr2[j]) {
            arr1[index] = arr1[i];
            index--;
            i--;
        }
        else {
            arr1[index] = arr2[j];
            index--;
            j--;
        }
    }
    while (j >= 0) {
        arr1[index] = arr2[j];
        index--;
        j--;
    }
    return arr1;
}
console.log(mergeSortedArrays([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3));
