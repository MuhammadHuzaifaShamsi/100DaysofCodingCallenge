// CURRENT USERS
let current_users = ["raafe", "huzaifa", "muzamil", "hassan", "nadeem"];

// NEW USERS
let new_users = ["hassan", "mehreen", "RAAFE", "mishal", "sania"];


for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log("Sorry, the username '" + new_users[i] + "' is not available. Please enter a new username.");
    } else {
        console.log("Congratulations! The username '" + new_users[i] + "' is available.");
    }
}