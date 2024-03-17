// QUESTION: 48

let laptopPrices1 = [10000, 15000, 20000];
let laptopPrices2 = [12000, 22000, 32000];

let sortedPrices = [...laptopPrices1, ...laptopPrices2].sort((a, b) => a - b);

console.log(sortedPrices);