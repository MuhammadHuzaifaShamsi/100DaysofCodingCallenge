// Question 58

function calculateAverage(scores: number[]){

    let sum: number = 0;
    for (let i: number = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    
    let average: number = sum / scores.length;

    console.log(average);
}

calculateAverage([90,89,90,76,78]);

