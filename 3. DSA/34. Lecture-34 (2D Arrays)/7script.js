// 2D Arrays Diagonal Sum            
// Method - 2         
// Time Complexity - O(n)         
function diagonalSum(matrix) {
    let n = matrix.length;
    let diagSum = 0;
    for (let i = 0; i < n; i++) {
        diagSum = diagSum + matrix[i][i];
        if (i != n - 1 - i) {
            diagSum = diagSum + matrix[i][n - 1 - i];
        }
    }
    return diagSum;
}

console.log(diagonalSum(
    [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]]
));
