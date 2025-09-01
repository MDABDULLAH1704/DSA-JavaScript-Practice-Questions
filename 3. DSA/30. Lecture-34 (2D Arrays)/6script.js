// 2D Arrays Diagonal Sum            
// Method - 1         
// Time Complexity - O(n2)         
function diagonalSum(matrix) {
    let n = matrix.length;
    let diagSum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j == i) {
                diagSum = diagSum + matrix[i][j];
            }
            else if (j == n - 1 - i) {
                diagSum = diagSum + matrix[i][j];
            }
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
