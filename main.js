function add(x, y) {
    return x + y
}

let result = add(4, 5)
console.log(result)

// Write a function named "multiply" which takes two arguments 
//(as input variables) and returns their product.
// You may not use built-in math operators or functions 
// (such as the * multiplication operator). Instead, you will use a 
// FOR loop which calls your add function from the first kata.
// For example, calling multiply(6, 4) should return a result of 24, 
// which could be expressed by adding 6 to itself 4 times:
// 6 + 6 + 6 + 6 = 24

function multiply(a, b) {
    let total = 0
    for (let index = 0; index < b; index++) {

        total = add(a, total)
    }
    return total
}

console.log(multiply(4, 5))


// Write a function named "power" which takes two arguments ( x and n) 
// and returns the the result of raising x to the nth power.
// You may not use built-in math operators or functions 
// (such as the * multiplication operator), or the ** operator for power/exponentiation). 
// Instead, you will re-use functions you wrote in earlier katas to write this function.
// For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:
// 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
// And to achieve the correct result for power(3, 4), we would want to multiply 3 by itself 4 times:
// 3 * 3 * 3 * 3 = 81

function power(x, n) {
    let total = 1
    for (let index = 1; index <= n; index++) {
        total = multiply(x, total)
    }
    return total
}
console.log(power(4, 5))

// Write a function named "factorial" which takes a single argument 
// and returns the factorial of that value.
// You may not use built-in math operators or functions 
// (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.
// A factorial multiplies a given number by every number below it. 
// For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
// 5 * 4 * 3 * 2 * 1 = 120
// For example, calling factorial(4) should return a result of 24.


function factorial(x) {
    let total = x - 1
    for (let index = 1; index <= x; index++) {
        total = multiply(x, total)
    }
    return total
}
console.log(factorial(4))

// Write a function named "Fibonacci" which takes an argument n and 
//returns the nth Fibonacci number.
// You may not use built-in math operators or functions (such as the * multiplication operator). 
// Instead, you will use functions you wrote in earlier katas to write this function.
//For example, calling fibonacci(8) should return a result of 13. 
//The fibonnaci sequence begins: 0  1  1  2  3  5  8  [13]  21

function fibonacci(n) {
    let total = 1
    for (let index = 1; index <= n - 1 + n - 2; index++) {
        total = add(n - 1 + n - 2, total)
    }
    return total
}
console.log(fibonacci(4))