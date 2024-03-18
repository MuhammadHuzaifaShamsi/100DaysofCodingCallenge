// Question 49

function myHobbies(...argumments: string[]) {
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log(`Hobby that I really enjoy is: ${element}`);
    }
}

myHobbies("Coding", "Gym", "Writing");