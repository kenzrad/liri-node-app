function Spotify(userQuery) {
    console.log("I'm in the spotify function");
    var song;
    console.log(userQuery);
    // if (userQuery) {
    //     song = userQuery.join(" ");
    // }
    // else {
    //     song = "the sign"
    // }
    // console.log(song);

    // function songSearch(song) {
    // spotify.search({ type: 'track', query: song, limit: '1' }, function(err, data) {
    //     if (err) {
    //     return console.log('Error occurred: ' + err);
    //     }
    // // console.log(data.tracks.items);
    //     //Song name
    //     console.log(data.tracks.items[0].name);    
    //     //Artist(s)
    //     console.log(data.tracks.items[0].artists[0].name);    
    //     //Album
    //     console.log(data.tracks.items[0].album.name); 
    //     //Song preview
    //     console.log(data.tracks.items[0].href); 
    // });
    // }
}

module.exports = Spotify;


