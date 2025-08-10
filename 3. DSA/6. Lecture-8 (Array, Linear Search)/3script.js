// Reverse an Array                 
// Method : Two pointer approach       
// Time Complexity is O(n)      
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap using destructuring
        start++;
        end--;
    }
    return arr;

}
console.log(reverseArray([1, 2, 3, 4, 5]));
