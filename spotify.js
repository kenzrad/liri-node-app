function SpotifyAPI(userQuery) {
    //Read and set any environment variables with the dotenv package
    require("dotenv").config();
    //import key.js file
    var keys = require("./keys.js");
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);
    
    //chalk!
    var chalk = require('chalk');
    var error = chalk.bold.red;
    var link = chalk.underline.blue;
    var responseText = chalk.green;
    var titleText = chalk.bold.cyan;

    if (userQuery.length > 0) {
        searchSong(userQuery.join(" "));
    }
    else {
        searchSong("the sign ace of base");
    }

    function searchSong(song) {
        spotify.search({ type: 'track', query: song, limit: '1' }, function(err, data) {
            if (err) {
            return console.log(error('Error occurred: ' + err));
            }
            console.log(`  
                ${titleText('_______________________')}
                ${titleText('                        ')}
                ${titleText('    SPOTIFY SEARCH    ')}
                ${titleText('_______________________')}
                ${titleText('                        ')}
                ${responseText(data.tracks.items[0].name)}
                ${responseText(data.tracks.items[0].artists[0].name)}
                ${responseText(data.tracks.items[0].album.name)}
                ${link(data.tracks.items[0].href)}

            `);
        });
    };
        
    
}
module.exports = SpotifyAPI


