// Taking Input and Print                 
let rows = parseInt(prompt('Enter number of rows'));
let cols = parseInt(prompt('Enter number of cols'));

let matrix = [];

for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = parseInt(prompt(`Enter element [${i}][${j}]:`));
    }
}

console.log("Matrix:");
for (let i = 0; i < rows; i++) {
    console.log(matrix[i].join(" "));
}

