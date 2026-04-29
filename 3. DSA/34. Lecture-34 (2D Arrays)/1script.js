// 2D Array Declaration & Print       
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12, 13]
];

for (let i = 0; i < matrix.length; i++) {
    let col = '';
    for (let j = 0; j < matrix[i].length; j++) {
        col = col + matrix[i][j] + ' ';
    }
    console.log(col);
}

