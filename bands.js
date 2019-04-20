function BandAPI(userQuery) {
    var axios = require("axios");
    var fs = require("fs");

    //moment!
    var moment = require("moment");
    var now = moment();

    //chalk!
    var chalk = require('chalk');
    var error = chalk.bold.red;
    var link = chalk.underline.blue;
    var responseText = chalk.green;
    var titleText = chalk.bold.cyan;
    var descText = chalk.cyan;

    if (userQuery.length > 0) {
        searchConcerts(userQuery.join("+"));
    }
    else {
        //if the user doesn't choose a movie
        console.log(error("Please choose an artist!"));
    }

    function searchConcerts(artist) {
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            if (response.data.length === 0) {
                //if there aren't any event in bandsintown
                console.log(error(`I can't find any upcoming events for ${artist}`));
            }
            else {
                var displayArtist = artist.split("+").join(" ").toUpperCase();
                //print to the user
                console.log(`
                ${titleText('_______________________')}
                ${titleText('                        ')}
                ${titleText(`  ${displayArtist} EVENTS  `)}
                ${titleText('_______________________')}
                `)
                response.data.forEach(concert => {
                // converts date with moment to MM/DD/YYYY
                var date = moment(concert.datetime.slice(0, 10), "YYYY-MM-DD").format("MM/DD/YYYY");
                // consoles
                console.log(`
                ${descText(`Venue: `)}${responseText(`${concert.venue.name}`)}
                ${descText(`Location: `)}${responseText(`${concert.venue.city}, ${concert.venue.region}`)}
                ${descText(`Date: `)}${responseText(`${date}`)} 

                ${descText(`-----------------------`)}`)
                })
            } 
        });
    }
}

module.exports = BandAPI
