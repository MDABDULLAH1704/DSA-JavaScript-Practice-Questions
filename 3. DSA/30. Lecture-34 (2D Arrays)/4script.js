// Q. Maximum Row Sum          
function maxRowSum(matrix) {
    let maxSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum = rowSum + matrix[i][j];
        }
        maxSum = Math.max(maxSum, rowSum);
    }
    return maxSum;
}

console.log(maxRowSum(
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]]
));
