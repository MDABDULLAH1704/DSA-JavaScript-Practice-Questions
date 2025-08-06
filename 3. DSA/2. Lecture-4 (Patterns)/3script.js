// Triangle pattern      
function printStars(m) {
    for (let i = 0; i < m; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row = row + '* ';
        }
        console.log(row);
    }
}
printStars(5);
