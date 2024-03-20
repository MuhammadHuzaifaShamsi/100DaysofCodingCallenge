// Question 57

let allGrades = [60, 74, 45, 98, 84, 90];

let sum = 0;

for(let i = 0; i < allGrades.length; i++){
    sum += allGrades[i];
}

const averageGrade = sum / allGrades.length;

console.log(averageGrade);

