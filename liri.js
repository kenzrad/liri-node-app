
////Spotify////
//Read and set any environment variables with the dotenv package
require("dotenv").config();
//import key.js file
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Spotify = require('./spotify.js');
var spotify = new Spotify(keys.spotify);


////Command////
//what the user what's us to do (DO DIS!)
var userCommand = process.argv[2]
//what the user wants to query
var userQuery = process.argv.slice(3);

// console.log(userQuery);


if (process.argv[2] === "spotify-this-song") {
    spotify.songSearch(process.argv.slice(3));
}

// You should then be able to access your keys information like so


    // var bandsInTown = new bandsInTown(keys.spotify);

    // `node liri.js spotify-this-song '<song name here>'`

    
    //`node liri.js movie-this '<movie name here>'`
    //do something else

    // `do-what-it-says`
        // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        // * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
        // * Edit the text in random.txt to test out the feature for movie-this and concert-this.


// ### BONUS

    // * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
    // * Make sure you append each command you run to the `log.txt` file. 
    // * Do not overwrite your file each time you run a command.