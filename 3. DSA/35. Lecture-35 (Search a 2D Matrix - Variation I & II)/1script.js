// Search in a 2D Matrix - Variation 1         

// searchInRow Function        
function searchInRow(mat, tar, row) { // Time Complexity - O(lon n)      
    let n = mat[0].length;
    let st = 0;
    let end = n - 1;
    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);
        if (tar == mat[row][mid]) {
            return true;
        }
        else if (tar > mat[row][mid]) {
            st = mid + 1;
        }
        else if (tar < mat[row][mid]) {
            end = mid - 1;
        }
    }
    return false;
}

// searchMatrix Function         
function searchMatrix(mat, tar) { // Time Complexity - O(lon m)      
    let m = mat.length;
    let n = mat[0].length;
    let startRow = 0;
    let endRow = m - 1;
    while (startRow <= endRow) {
        let midRow = Math.floor(startRow + (endRow - startRow) / 2);
        if (tar >= mat[midRow][0] && tar <= mat[midRow][n - 1]) {
            return searchInRow(mat, tar, midRow);
        }
        else if (tar > mat[midRow][n - 1]) {
            startRow = midRow + 1; // Down -> Right   
        }
        else {
            endRow = midRow - 1; // Up -> Left   
        }
    }
    return false;
}

console.log(searchMatrix(
    [[1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]],
    34
));
