function BandAPI(userQuery) {
    var moment = require("moment");
    var axios = require("axios");

    //chalk!
    var chalk = require('chalk');
    var error = chalk.bold.red;
    var link = chalk.underline.blue;

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
                console.log(`  `)
                console.log(`  `)
                console.log(`  `)
                console.log(`---------------${artist.toUpperCase()} EVENTS----------------`)
                console.log(`  `)
                console.log(`  `)
                console.log("---------------------------")
                    response.data.forEach(concert => {
                        // converts date with moment to MM/DD/YYYY
                        var date = moment(concert.datetime.slice(0, 10), "YYYY-MM-DD").format("MM/DD/YYYY");

                        // consoles
                        console.log(`Venue: ${concert.venue.name}`)
                        console.log(`Location: ${concert.venue.city}, ${concert.venue.region}`)
                        console.log(`Date: ${date}`)
                        console.log("-----------------------------------------------------")
                    })
                console.log(`  `)
                console.log(`  `)
                console.log(`  `)
            } 
        });
    }
}

module.exports = BandAPI
