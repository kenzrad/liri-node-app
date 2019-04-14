var axios = require("axios");
var moment = require("moment");

var artist = process.argv[2];

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
   function (response) {
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
            console.log("---------------------------")
        })
    console.log(`  `)
    console.log(`  `)
    console.log(`  `)
    } 
 );
