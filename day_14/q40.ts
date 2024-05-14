function makeAlbums(artistName:string, albumTitle:string, tracks?:number){
let albums:{
    artistName:string,
    albumTitle: string,
    tracks? : number

} = {artistName, albumTitle};
if(tracks){
    albums["tracks"] = tracks;
}
return albums;

}
console.log(makeAlbums("first", "the first Albums"));
console.log(makeAlbums("Second", "the Second Albums"));
console.log(makeAlbums("Third", "the Third Albums", 15));