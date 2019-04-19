function MovieAPI(userQuery) {
    var axios = require("axios");
    
    //chalk!
    var chalk = require('chalk');
    var error = chalk.bold.red;
    var link = chalk.underline.blue;


    if (userQuery.length > 0) {
        searchMovie(userQuery.join("+"));
    }
    else {
        //if the user doesn't choose a movie
        searchMovie("Mr+Nobody");
    }

    function searchMovie(movie) {
        axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movie}`).then(
        function (response) {

            //getting rotten tomator rating
            var tomatoes = "";
            if(typeof response.data.Ratings[1] !== 'undefined') {
                tomatoes = response.data.Ratings[1].Value;
            }
            else {
                tomatoes = "N/A" 
            }

            //print to the user
            console.log(`  `)
            console.log(`  `)
            console.log(`  `)
            console.log(`---------------MOVIE SEARCH----------------`)
            console.log(`  `)
            console.log(`  `)
            console.log("---------------------------")
            console.log(` `); 
            console.log(`Movie: ${response.data.Title}
            `);
            //Plot of the movie.
            console.log(`Plot: ${response.data.Plot}
            `);
            //Actors in the movie.
            console.log(`Starring: ${response.data.Actors}
            `)
            //Ratings (IMDB and Rotten Tomatoes)
            console.log(`Ratings: 
                Rotten Tomatoes: ${tomatoes}
                IMDB: ${response.data.imdbRating}
            `)
            //Country and year of production
            console.log(`Filmed: ${response.data.Year}, ${response.data.Country}
            `)
            //Language of the movie.
            console.log(`Filmed: ${response.data.Language}
            `)
            console.log(`---------------------------
            
            `)
            } 
        );
    }
}

module.exports = MovieAPI


