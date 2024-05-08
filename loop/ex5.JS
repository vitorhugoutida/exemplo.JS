// FOR
// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const sequence = fibonacci(10);
console.log("Os primeiros 10 números da sequência de Fibonacci são:");
console.log(sequence.join(', '));