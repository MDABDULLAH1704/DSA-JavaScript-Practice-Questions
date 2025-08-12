// Pair Sum - Return pair in SORTED Array with target sum.          
// Time Complexity : O(n)          
// Method 2                   
function pairSum(arr, target) {
    let ans = [];
    let st = 0;
    let end = arr.length - 1;
    while (st < end) {
        let pairSum = arr[st] + arr[end];
        if (pairSum > target) {
            end--;
        } else if (pairSum < target) {
            st++;
        } else {
            ans.push(st);
            ans.push(end);
            return ans; // stop after finding first pair     
        }
    }
    return ans;
}
console.log(pairSum([2, 7, 11, 15], 9));
