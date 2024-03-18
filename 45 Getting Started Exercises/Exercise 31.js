let usernames = [];


if (usernames.length === 0) {
    console.log("We need to find some users!");
} 
else {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === "admin") {
            console.log("Hello admin, would you like to see the website's status?");
        } 
        else {
            console.log("Hello " + usernames[i] + ", thank you for logging in again.");
        }
    }
}