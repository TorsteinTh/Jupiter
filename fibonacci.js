function fibonacci(input) {
    if (input < 2) {
        return input
    } else {
        return (fibonacci(input - 1) + fibonacci(input - 2))
    }
}


function startFibonacci() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What number would you like to enter?: ', (inputNumber) => {

        const results = fibonacci(inputNumber)

        console.log("\nf(x), x = \t", inputNumber, "\nOutput is :\t", results)

        rl.close();
    });
}


startFibonacci()