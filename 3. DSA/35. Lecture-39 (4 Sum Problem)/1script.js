// 4 Sum Problem               
// Time Complexity → O(n³)            
// Space Complexity → O(1)                        
function fourSum(arr, target) {
    let ans = [];
    let n = arr.length;

    arr.sort((a, b) => a - b); // sort array

    for (let i = 0; i < n; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicates for i

        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) continue; // skip duplicates for j

            let p = j + 1;
            let q = n - 1;

            while (p < q) {
                let sum = arr[i] + arr[j] + arr[p] + arr[q];

                if (sum < target) {
                    p++;
                } else if (sum > target) {
                    q--;
                } else
                    ans.push([arr[i], arr[j], arr[p], arr[q]]);
                p++;
                q--;

                // skip duplicates for p
                while (p < q && arr[p] === arr[p - 1]) p++;
            }
        }
    }
    return ans;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));