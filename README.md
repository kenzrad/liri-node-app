# LIRI Bot

### Overview

LIRI is a **L**anguage **I**nterpretation and **R**ecognition **I**nterface command line node app that takes in parameters and gives the user back data. 

### Packages

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


   * `node liri.js spotify-this-song '<song name here>'` - Searches the Spotify Node API for song information and returns the following:
        ```
        * Artist(s)
        * The song's name
        * A preview link of the song from Spotify
        * The album that the song is from
        ```
    for example:
    ![spotify example 1](https://github.com/kenzrad/liri-node-app/blob/master/screen-prints/spotify-song-1.png?raw=true)
     
     * Note: if no song is provided then your program will default to "The Sign" by Ace of Base.


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

   * `do-what-it-says`


Create and use a standard GitHub repository. As this is a CLI App, it cannot be deployed to GitHub pages or Heroku. This time you'll need to include screenshots, a GIF, and/or a video showing us that you have the app working with no bugs. You can include these screenshots/GIFs or a link to a video in a `README.md` file.

* Include screenshots (or a GIF/Video) of the typical user flow of your application. Make sure to include the use of Spotify, Bands in Town, and OMDB.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.



3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

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

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

     * It's on Netflix!

   * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.

