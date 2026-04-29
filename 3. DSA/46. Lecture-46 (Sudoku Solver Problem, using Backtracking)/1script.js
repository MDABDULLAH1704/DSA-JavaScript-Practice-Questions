// Sudoku Solver Problem                

// Check if placing a digit is valid
function isValid(board, row, col, digit) {
    for (let i = 0; i < 9; i++) {
        // Check row
        if (board[row][i] === digit) return false;
        // Check column
        if (board[i][col] === digit) return false;
        // Check 3x3 sub-grid
        let subRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        let subCol = 3 * Math.floor(col / 3) + (i % 3);
        if (board[subRow][subCol] === digit) return false;
    }
    return true;
}

// Recursive helper function 
function helper(board, row, col) {
    if (row === 9) return true; // All rows completed → solved 
    // Move to next row/col 
    let nextRow = row;
    let nextCol = col + 1;
    if (nextCol === 9) {
        nextRow++;
        nextCol = 0;
    }
    // If already filled, move to next cell 
    if (board[row][col] !== '.') {
        return helper(board, nextRow, nextCol);
    }
    // Try placing digits 1-9 
    for (let d = 1; d <= 9; d++) {
        let digit = d.toString();
        if (isValid(board, row, col, digit)) {
            board[row][col] = digit;
            if (helper(board, nextRow, nextCol)) return true;
            // Backtrack
            board[row][col] = '.';
        }
    }
    return false; // No valid digit found
}

// Main function to solve Sudoku
function solveSudoku(board) {
    helper(board, 0, 0);
}

// Example Sudoku board
let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
// Solve and print
solveSudoku(board);
console.log("✅ Solved Sudoku:");
console.table(board);

