(m) {
    for (let i = 0; i < m; i++) {
        let num = 1;
        let row = '';
        for (let j = 0; j <= i; j++) {
            row = row + num;
            num++;
        }
        console.log(row);
    }
}
pattern(5);