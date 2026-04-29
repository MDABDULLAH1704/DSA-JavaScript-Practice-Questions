// The question we can solve using Loops also can solve using Recursion.               

// printNumber             
function printNumber(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    printNumber(n - 1);
}
console.log(printNumber(4));
