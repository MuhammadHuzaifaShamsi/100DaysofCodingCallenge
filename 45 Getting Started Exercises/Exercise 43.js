function show_magicians(magicians) {
    console.log("Magicians:");
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    let modifiedMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}


let magicianNames = ["David Copperfield", "Harry Houdini", "Derren Brown", "Penn Jillette", "Teller"];


let modifiedMagicians = make_great([...magicianNames]);


console.log("\nOriginal Magicians:");
show_magicians(magicianNames);

console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);