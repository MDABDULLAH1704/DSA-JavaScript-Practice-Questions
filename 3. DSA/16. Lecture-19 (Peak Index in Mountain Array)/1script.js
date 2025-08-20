// LeetCode 852 : Peak Index in a Mountain Array                      
// Method : Linear Approach              
// Time Complexity : O(n)        
function peakIndex(arr) {
    let peak = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[peak]) {
            peak = i;
        }
    }
    return peak;
}
console.log(peakIndex([0, 3, 8, 9, 5, 3]));
