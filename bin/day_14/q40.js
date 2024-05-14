"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeAlbums(artistName, albumTitle, tracks) {
    let albums = { artistName, albumTitle };
    if (tracks) {
        albums["tracks"] = tracks;
    }
    return albums;
}
console.log(makeAlbums("first", "the first Albums"));
console.log(makeAlbums("Second", "the Second Albums"));
console.log(makeAlbums("Third", "the Third Albums", 15));
