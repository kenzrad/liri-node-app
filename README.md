# LIRI Bot

## Overview

LIRI is a **L**anguage **I**nterpretation and **R**ecognition **I**nterface command line node app that takes in parameters and gives the user back data. 

[![IMAGE ALT TEXT HERE](https://www.youtube.com/watch?v=ib95R-dgW_4&feature=youtu.be.jpg)](https://www.youtube.com/watch?v=ib95R-dgW_4&feature=youtu.be)

## Packages

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api) - Used to search for song data
* [Axios](https://www.npmjs.com/package/axios) - Used to access the Bands-in-Town and OMDB APIs to look up concert and movie data (respectively)
* [Moment](https://www.npmjs.com/package/moment) - Used to convert date formats for the Bands-in-Town API
* [DotEnv](https://www.npmjs.com/package/dotenv) - Used to store secrets for the Spotify API
* [Chalk](https://www.npmjs.com/package/chalk#styles) - Used to style up the console log to make things a bit more interesting

## DotEnv and Key Files

You will need to generate your own `.env` and `keys.js` files to store your spotify key information. 

* Code the following inside `keys.js`:

    ```js
    console.log('this is loaded');

    exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
    };
    ```

* Code the following inside `.env` (note: you will need to replace `your-spotify-id` and `your-spotify-secret` with your generated ID and secret from the spotify developer API)
    ```js
    # Spotify API keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    ```

## Using LIRI

LIRI accepts four commands from the user:
   * `node liri.js concert-this <artist/band name here>` - Searches the Bands-in-Town API for concert dates for the given artist. It will return the following information:

        ```
        * Name of the venue
        * Venue location
        * Date of the Event (use moment to format this as "MM/DD/YYYY")
        ```
        <img src="https://raw.githubusercontent.com/kenzrad/liri-node-app/master/screen-prints/concert-artist-1.png" />

    * If there isn't any upcoming events for the given artist, an error message will show:
    
        <img src="https://raw.githubusercontent.com/kenzrad/liri-node-app/master/screen-prints/concert-artist-2.png" />

   * `node liri.js spotify-this-song '<song name here>'` - Searches the Spotify Node API for song information and returns the following:

        ```
        * Artist(s)
        * The song's name
        * A preview link of the song from Spotify
        * The album that the song is from
        ```
 
        <img src="https://raw.githubusercontent.com/kenzrad/liri-node-app/master/screen-prints/spotify-song-1.png" />


Note: if no song is provided then your program will default to "The Sign" by Ace of Base.


   * `node liri.js movie-this '<movie name here>'` - Searches the OMDB API for Movie information

        ```
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
        ```
        
        <img src="https://raw.githubusercontent.com/kenzrad/liri-node-app/master/screen-prints/movie-title-1.png" />

        *If the user doesn't select a movie, LIRI will show details for "Mr. Nobody!"
        
        <img src="https://raw.githubusercontent.com/kenzrad/liri-node-app/master/screen-prints/movie-title-2.png" />

   * `node liri.js do-what-it-says` 
        This command will use the `fs` Node package to read a `random.txt` file to call one of LIRI's commands


## Log File

All commands sent to LIRI will be logged in the log.txt file. You can see past search responses along with any errors encountered in this file (along with timestamps, brought to you by moment.js)

