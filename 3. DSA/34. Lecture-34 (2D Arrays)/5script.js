// Q. Maximum Col Sum          
function maxColSum(matrix) {
    let maxSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
        let colSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            colSum = colSum + matrix[i][j]; // notice i before j
        }
        maxSum = Math.max(maxSum, colSum);
    }
    return maxSum;
}

console.log(maxColSum(
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
));
