// Sort Array with 0s, 1s & 2s             
// [2, 0, 2, 1, 1, 0, 1, 2, 0, 0]               
// Method : Optimal (or Counting) Approach              
// Time Complexity : O(n)                
function sortArray(arr) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count0++;
        else if (arr[i] === 1) count1++;
        else count2++;
    }
    let index = 0;
    for (let i = 0; i < count0; i++) {
        arr[index] = 0;
        index++;
    }
    for (let i = 0; i < count1; i++) {
        arr[index] = 1;
        index++;
    }
    for (let i = 0; i < count2; i++) {
        arr[index] = 2;
        index++;
    }
    return arr;
}
console.log(sortArray([2, 0, 1, 1, 0, 1, 2, 0, 0]));
