let personName = "Huzaifa Zafar";

// LOWERCASE
console.log("Lowercase: " + personName.toLowerCase());

// UPPERCASE
console.log("Uppercase: " + personName.toUpperCase());

// TITLECASE
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log("Titlecase: " + toTitleCase(personName));