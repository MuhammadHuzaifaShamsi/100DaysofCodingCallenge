// Question 51

function areaReactangle(length: number, width: number) 
{
    const area = length * width;
    console.log(`The area of the Rectangle is: ${area}.`);
}

areaReactangle(2,3);

// Refactoring it into an arrow function
const areaRec = (length: number, width: number) => length * width;
console.log(`The area of the Rectangle is: ${areaRec(4,5)} .`);