let usernames = ["admin", "Raafe", "Huzaifa", "Nadeem", "Ahmed"];


for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello admin, would you like to see the webbsite's status?");
    } else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again.");
    }
}