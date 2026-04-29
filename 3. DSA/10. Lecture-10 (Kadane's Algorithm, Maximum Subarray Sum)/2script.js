// Maximum SubArray Sum      
// Time Complexity - O(n square)       
function maxSumOfSubArr(arr) {
    // let maxSum = Number.NEGATIVE_INFINITY; // same as INT_MIN 
    // let maxSum = -Infinity; 
    // let maxSum = Number.MIN_SAFE_INTEGER; // -9007199254740991 
    let maxSum = arr[0]; 
    for (let st = 0; st < arr.length; st++) {
        let currSum = 0;
        for (let end = st; end < arr.length; end++) {
            currSum = currSum + arr[end];
            maxSum = Math.max(maxSum, currSum);
        }
    }
    console.log("max subarray sum = " + maxSum);
}
maxSumOfSubArr([1, 2, -3, 4, 5]); 
