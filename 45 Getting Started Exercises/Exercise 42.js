let magicianNames = ["David Copperfield", "Harry Houdini", "Derren Brown", "Penn Jillette", "Teller"];

function show_magicians(magicians) {
    console.log("Magicians:");
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}



function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}




make_great(magicianNames);

show_magicians(magicianNames);
