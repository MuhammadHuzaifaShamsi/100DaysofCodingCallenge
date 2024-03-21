// Question 59

let makeAdder = (value: number) => {
    return function(number: number): number {
        return number + value;
    };
}

let addTwo = makeAdder(2);
console.log(addTwo(8));