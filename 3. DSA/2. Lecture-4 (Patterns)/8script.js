// Q1. Hollow Diamond pattern with *. 
function pattern(m) {
    // TOP HALF 
    for (let i = 0; i < m; i++) {
        // Leading Spaces 
        let col = '';
        for (let j = 0; j < m - 1 - i; j++) {
            col = col + ' ';
        }
        // First Star
        col = col + '*';
        // Middle Spaces
        if (i > 0) {
            // Spaces 
            for (let j = 0; j < 2 * i - 1; j++) {
                col = col + ' ';
            }
            // Second Star
            col = col + '*';
        }
        console.log(col);
    }

    // BOTTOM HALF 
    for (let i = 0; i < m - 1; i++) {
        // Leading Spaces 
        let col = '';
        for (let j = 0; j < i + 1; j++) {
            col = col + ' ';
        }
        // First Star
        col = col + '*';
        // Middle Spaces
        if (i != m - 2) {
            // Spaces 
            for (let j = 0; j < 2 * (m - i) - 5; j++) {
                col = col + ' ';
            }
            // Second Star
            col = col + '*';
        }
        console.log(col);
    }
}
pattern(4);
