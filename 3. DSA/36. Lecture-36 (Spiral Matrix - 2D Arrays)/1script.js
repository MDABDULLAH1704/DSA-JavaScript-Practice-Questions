// Spiral Matrix                   
// Time Complexity - O(m x n)                 
function spiralOrder(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let srow = 0;
    let erow = m - 1;
    let scol = 0;
    let ecol = n - 1;
    let ans = [];

    while (srow <= erow && scol <= ecol) {
        // top   
        for (let j = scol; j <= ecol; j++) {
            ans.push(matrix[srow][j]);
        }
        // right   
        for (let i = srow + 1; i <= erow; i++) {
            ans.push(matrix[i][ecol]);
        }
        // bottom   
        for (let j = ecol - 1; j >= scol; j--) {
            if (srow === erow) break;
            ans.push(matrix[erow][j]);
        }
        // left   
        for (let i = erow - 1; i >= srow + 1; i--) {
            if (scol === ecol) break;
            ans.push(matrix[i][scol]);
        }
        srow++;
        erow--;
        scol++;
        ecol--;
    }
    return ans;
}
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

