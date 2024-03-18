function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };


    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}


console.log(make_album("Ed Sheeran", "Divide"));
console.log(make_album("Taylor Swift", "1989", 16));
console.log(make_album("Imagine Dragons", "Evolve"));
