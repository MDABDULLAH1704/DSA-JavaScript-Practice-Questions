// Q2. Find Repeating & Missing Values     
// Time Complexity - O(n2)            
function findMissingAndRepeatedValues(grid) {
    let n = grid.length;
    let s = new Set();
    let ans = [];
    let a, b;
    let actualSum = 0;
    let expSum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            actualSum = actualSum + grid[i][j];
            if (s.has(grid[i][j])) {
                a = grid[i][j]; // repeated number
                ans.push(a);
            }
            s.add(grid[i][j]);
        }
    }
    expSum = (n * n * (n * n + 1)) / 2; // expected sum n2         
    b = expSum - actualSum + a; // missing number        
    ans.push(b);

    return ans;
}
console.log(findMissingAndRepeatedValues([[1, 3], [2, 2]]));
console.log(findMissingAndRepeatedValues([[9, 1, 7], [8, 9, 2], [3, 4, 6]]));  
