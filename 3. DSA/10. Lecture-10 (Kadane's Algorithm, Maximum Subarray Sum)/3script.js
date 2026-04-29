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



// Method 2
// function maxSumOfSubArr(arr) {
//     if (arr.length === 0) return 0;

//     let currSum = 0;
//     let maxSum = arr[0];

//     let start = 0, end = 0, tempStart = 0;

//     for (let i = 0; i < arr.length; i++) {

//         currSum += arr[i];

//         if (currSum > maxSum) {
//             maxSum = currSum;
//             start = tempStart;   // update start
//             end = i;             // update end
//         }

//         if (currSum < 0) {
//             currSum = 0;
//             tempStart = i + 1;   // next element becomes potential start
//         }
//     }

//     console.log("Max Sum =", maxSum);
//     console.log("Subarray =", arr.slice(start, end + 1));
// }

// maxSumOfSubArr([1, -2, -3, 4, 5]);







