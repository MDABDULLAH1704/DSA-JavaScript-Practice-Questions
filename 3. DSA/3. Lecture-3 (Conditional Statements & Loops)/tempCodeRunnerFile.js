(m) {
    for (let i = 1; i <= m; i++) {
        let n = 5;
        let row = '';
        for (let j = 1; j <= n; j++) {
            row = row + ' * ';
        }
        console.log(row);
    }
}
printStars(5);