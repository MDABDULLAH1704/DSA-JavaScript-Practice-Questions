// Q1. Pair Sum       
// Return pair in SORTED Array with target sum.          
// Time Complexity : O(n square)         
// Method 1                  
function pairSum(arr, target) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                ans.push(i);
                ans.push(j);
                return ans; // return immediately when pair is found
                // return [i, j]; // Use this return or above three lines of code    
            }
        }
    }
}
console.log(pairSum([2, 7, 12, 16, 20], 9)); 
