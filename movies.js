function MovieAPI(userQuery) {
    var axios = require("axios");
    var fs = require("fs");
    
    //chalk!
    var chalk = require('chalk');
    var error = chalk.bold.red;
    var link = chalk.underline.blue;
    var responseText = chalk.green;
    var titleText = chalk.bold.cyan;
    var descText = chalk.cyan;

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
            console.log(`
            ${titleText('_______________________')}
            ${titleText('                        ')}
            ${titleText('      MOVIE SEARCH      ')}
            ${titleText('_______________________')}
            ${titleText('                        ')}
            ${descText(`Movie: `)}${responseText(`${response.data.Title}`)}
            ${descText(`Starring: `)}${responseText(`${response.data.Actors}`)}
            ${descText(`Filmed: `)}${responseText(`${response.data.Year}, ${response.data.Country}`)}
            ${descText(`Language: `)}${responseText(`${response.data.Language}`)}
             
            ${descText(`IMDB Rating: `)}${responseText(`${response.data.imdbRating}`)}
            ${descText(`Rotten Tomatoes Rating: `)}${responseText(`${tomatoes}`)}
             
            ${descText(`Plot: `)}${responseText(`${response.data.Plot}`)}
             
            `)
            } 
        );
    }
}

module.exports = MovieAPI


