function SpotifyAPI(userQuery) {
    //Read and set any environment variables with the dotenv package
    require("dotenv").config();
    //import key.js file
    var keys = require("./keys.js");
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);

    if (userQuery.length > 0) {
        searchSong(userQuery.join(" "));
    }
    else {
        searchSong("the sign ace of base");
    }

    function searchSong(song) {
        spotify.search({ type: 'track', query: song, limit: '1' }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
            console.log(/n/)
                //Song name
                console.log(data.tracks.items[0].name);    
                //Artist(s)
                console.log(data.tracks.items[0].artists[0].name);    
                //Album
                console.log(data.tracks.items[0].album.name); 
                //Song preview
                console.log(data.tracks.items[0].href); 
        });
    };
        
    
}
module.exports = SpotifyAPI


