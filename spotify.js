//Read and set any environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

// You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);

// `spotify-this-song`
    //     `node liri.js spotify-this-song '<song name here>'`

    // * This will show the following information about the song in your terminal/bash window

        //   * Artist(s)
        //   * The song's name
        //   * A preview link of the song from Spotify
        //   * The album that the song is from

        // * If no song is provided then your program will default to "The Sign" by Ace of Base.

        // * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

        // * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

        // * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

        // * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

        // * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

        // * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).
