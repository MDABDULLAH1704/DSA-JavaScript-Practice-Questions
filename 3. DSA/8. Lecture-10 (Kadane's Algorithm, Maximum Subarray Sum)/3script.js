// Maximum SubArray Sum - Kadane's Algorithm           
// Time Complexity - O(n)       
function maxSumOfSubArr(arr) {
    if (arr.length === 0) return 0; // handle empty array
    let currSum = 0;
    let maxSum = arr[0];
    for (let st = 0; st < arr.length; st++) {
        currSum = currSum + arr[st];
        maxSum = Math.max(maxSum, currSum);
        if (currSum < 0) {
            currSum = 0;
        }
    }
    console.log("max subarray sum = " + maxSum);
}
maxSumOfSubArr([1, -2, 3, -4, 5]);
