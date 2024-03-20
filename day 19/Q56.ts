// Question 56

let mixedList = [1, "orange", 2, "apple", 3, true, 4, null];

const stringOnlyList = [];

for (let i = 0; i < mixedList.length; i++) {
    if(typeof mixedList[i] === 'string'){
        stringOnlyList.push(mixedList[i]);
    }
}

console.log(stringOnlyList);