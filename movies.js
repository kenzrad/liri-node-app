function MovieAPI(userQuery) {
    var axios = require("axios");
    var movie;

    if(process.argv.length > 2) {
        movie = process.argv.slice(2).join("+");

    //     * IMDB Rating of the movie.
                //     * Rotten Tomatoes Rating of the movie.
                //     * Country where the movie was produced.
                //     * Language of the movie.
                //     * Plot of the movie.
                //     * Actors in the movie.
    }
    else {
        movie = "Mr+Nobody";
    }
    //You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movie}`).then(
    function (response) {
        console.log(` `); 
        console.log(`---------------------------
        `);
        console.log(`Movie: ${response.data.Title}
        `);
        console.log(`Plot: ${response.data.Plot}
        `);
        console.log(`Starring: ${response.data.Actors}
        `)
        //need to fix rotten tomoatoes
        var tomatoes = "";
        if(typeof response.data.Ratings[1] !== 'undefined') {
            tomatoes = response.data.Ratings[1].Value;
        }
        else {
            tomatoes = "N/A" 
        }
        console.log(`Ratings: 
            Rotten Tomatoes: ${tomatoes}
            IMDB: ${response.data.imdbRating}
        `)
        console.log(`Filmed: ${response.data.Year}, ${response.data.Country}
        `)
        console.log(`---------------------------
        
        `)
        } 
    );
}

module.exports = MovieAPI
    // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        // * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
        // * It's on Netflix!

