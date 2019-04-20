var SpotifyAPI = require('./spotify.js');
var BandAPI = require('./bands.js');
var MovieAPI = require('./movies.js');
var fs = require("fs");

//chalk!
var chalk = require('chalk');
var error = chalk.bold.red;
var link = chalk.underline.blue;
var responseText = chalk.green;
var titleText = chalk.bold.cyan;

//moment!
var moment = require("moment");
var now = moment();

//User input variables
var userCommand = process.argv[2]
var userQuery = process.argv.slice(3);
fs.appendFile("log.txt", `${now}: ${process.argv} \n`, function(err) {
    if (err) {
        return console.log(error('Error occurred: ' + err));
    }
}) 


checkCommands(userCommand, userQuery);

//Command cases
function checkCommands(userCommand, userQuery) {
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
            whatItSays();
            break;
    }
}

function whatItSays() {
    fs.readFile("random.txt", "utf8", function(err, data){
        if (err) {
            return console.log(error('Error occurred: ' + err));
        }
        data = data.split(",");
        userCommand = data[0];
        userQuery = data[1].split(" ");
        checkCommands(userCommand, userQuery);
    })
}

// ### BONUS

    // * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
    // * Make sure you append each command you run to the `log.txt` file. 
    // * Do not overwrite your file each time you run a command.