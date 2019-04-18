// `spotify-this-song`
    //     `node liri.js spotify-this-song '<song name here>'`


//Read and set any environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

// You should then be able to access your keys information like so
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'All the Small Things', limit: '1' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
// console.log(data.tracks.items);
    console.log(data.tracks.items[0].artists[0].name);    
    console.log(data.tracks.items[0].artists[0].name);    
    console.log(data.tracks.items[0].album.name); 
    console.log(data.tracks.items[0].href); 
 
        //   * Artist(s)
        //   * The song's name
        //   * A preview link of the song from Spotify
        //   * The album that the song is from 

        // * If no song is provided then your program will default to "The Sign" by Ace of Base.

  });

