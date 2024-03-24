// Question 69

function divideAndRemainder(dividend: number, divisor: number): object {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;

    return { 
        Quotient: quotient, 
        Remainder: remainder 
    };
}

console.log(divideAndRemainder(10, 3));