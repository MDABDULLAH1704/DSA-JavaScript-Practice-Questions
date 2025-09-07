// SubArray Sum Equals K                        
// Method 1           
// Time Complexity - O(n2)                      
// Space Complexity - O(1)            
function subArraySum(arr, tar) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j];
            if (sum === tar) {
                count++;
            }
        }
    }
    return count;
}
console.log(subArraySum([9, 4, 20, 3, 10, 5], 33));
