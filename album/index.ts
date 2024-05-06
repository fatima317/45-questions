function make_album(artist_name : string, album_title : string, tracks? : number)
{
    if (tracks)
return `${artist_name}, ${album_title}, ${tracks} `
    else{
        return `${artist_name}, ${album_title}`
    }
}
console.log(make_album("Muad", "Ramadan"));
console.log(make_album("Siedd", "Blessed"));
console.log(make_album("Othman Alibrahim", "Acapella Cover", 2));


