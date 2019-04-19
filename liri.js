var SpotifyAPI = require('./spotify.js');
var BandAPI = require('./bands.js');
var MovieAPI = require('./movies.js');

////Command////
//what the user what's us to do (DO DIS!)
var userCommand = process.argv[2]
//what the user wants to query
var userQuery = process.argv.slice(3);

switch (userCommand) {
    case "spotify-this-song":
        SpotifyAPI(userQuery);
        break;

    case "concert-this":
        BandAPI(userQuery);
        break;

    case "movie-this":
        MovieAPI(userQuery);
        break;
    
    case "do-what-it-says":
        // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        // * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
        // * Edit the text in random.txt to test out the feature for movie-this and concert-this.
        break;
}

// ### BONUS

    // * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
    // * Make sure you append each command you run to the `log.txt` file. 
    // * Do not overwrite your file each time you run a command.