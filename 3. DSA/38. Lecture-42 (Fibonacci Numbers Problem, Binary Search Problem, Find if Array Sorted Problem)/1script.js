// Fibonacci Series           
// Method - Using Recursion               
function Fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
console.log(Fibonacci(1)); // 1
console.log(Fibonacci(2)); // 1
console.log(Fibonacci(3)); // 2
console.log(Fibonacci(4)); // 3
console.log(Fibonacci(5)); // 5
console.log(Fibonacci(6)); // 8
console.log(Fibonacci(7)); // 13
