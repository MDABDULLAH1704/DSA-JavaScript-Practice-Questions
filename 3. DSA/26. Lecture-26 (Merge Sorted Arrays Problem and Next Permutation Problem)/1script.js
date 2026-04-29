// Merge 2 Sorted Array           
// Method 1 : Brute Force               
// Time Complexity : O((m+n) log(m+n)) due to Sorting               
function mergeSortedArrays(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
    newArr.sort((a, b) => a - b);
    return newArr;
}
console.log(mergeSortedArrays([1, 2, 3], [2, 5, 6]));
