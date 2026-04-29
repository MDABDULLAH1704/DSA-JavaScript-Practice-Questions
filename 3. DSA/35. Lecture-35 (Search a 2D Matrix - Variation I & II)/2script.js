// Search in a 2D Matrix - Variation 2         
function searchMatrix(matrix, target) {
    let m = matrix.length;       // number of rows
    let n = matrix[0].length;    // number of columns
    let r = 0;       // start from first row
    let c = n - 1;   // start from last column (top-right corner)

    while (r < m && c >= 0) {
        if (matrix[r][c] === target) {
            return true;   // found target
        } else if (matrix[r][c] > target) {
            c--;   // move left
        } else {
            r++;   // move down
        }
    }
    return false; 
}

console.log(searchMatrix(
    [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ],
    5
));

console.log(searchMatrix(
    [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ],
    20
)); 
