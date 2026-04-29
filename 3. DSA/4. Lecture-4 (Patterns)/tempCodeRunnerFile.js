
    let num = 0;
    for (let i = 0; i < m; i++) {
        let col = '';
        for (let j = 0; j <= i; j++) {
            col = col + String.fromCharCode(65 + num) + ' ';
            num++;
        }
        console.log(col);
    }
}
pattern(4);