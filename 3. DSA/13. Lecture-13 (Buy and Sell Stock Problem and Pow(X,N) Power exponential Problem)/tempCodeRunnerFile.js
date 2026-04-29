(x, n) {
    let ans = 1;
    for (let i = 0; i < n; i++) {
        ans = ans * x;
    }
    return ans;
}
console.log(XPowerN(3,