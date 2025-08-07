// Q1. Pyramid pattern 1, 121, 12321, 1234321.
function pattern(m) {
    for (let i = 0; i < m; i++) {
        // Spaces 
        let col = '';
        for (let j = 0; j < m - i - 1; j++) {
            col = col + ' ';
        }
        // Number1 
        for (let j = 1; j <= i + 1; j++) {
            col = col + j;
        }
        // Number2  
        for (let j = i; j > 0; j--) {
            col = col + j;
        }
        console.log(col);
    }
}
pattern(9);
