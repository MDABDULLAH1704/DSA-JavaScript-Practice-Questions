// N-Queens Problem         
// Method 1                  
// Check if it's safe to place a queen
function isSafe(board, row, col, n) {
    // Check horizontal
    for (let j = 0; j < n; j++) {
        if (board[row][j] === 'Q') {
            return false;
        }
    }

    // Check vertical
    for (let i = 0; i < n; i++) {
        if (board[i][col] === 'Q') {
            return false;
        }
    }

    // Check left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }

    // Check right diagonal
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }

    return true;
}

// Backtracking function
function nQueens(board, row, n, ans) {
    if (row === n) {
        ans.push([...board]);
        return;
    }

    for (let j = 0; j < n; j++) {
        if (isSafe(board, row, j, n)) {
            // Place queen
            board[row] = board[row].substring(0, j) + 'Q' + board[row].substring(j + 1);

            // Recur for next row
            nQueens(board, row + 1, n, ans);

            // Backtrack (remove queen)
            board[row] = board[row].substring(0, j) + '.' + board[row].substring(j + 1);
        }
    }
}

// Main function
function solveNQueens(n) {
    const board = new Array(n).fill().map(() => '.'.repeat(n));
    const ans = [];
    nQueens(board, 0, n, ans);
    return ans;
}

// Example usage:
console.log(solveNQueens(4));
