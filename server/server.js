// Require express - gives us a function
let express = require('express');
let add = require('./modules/add.module');
let subtract = require('./modules/subtract.module');
let Cohort = require('./modules/names.module');

let vega = new Cohort ();

// Create an instance of express by calling the function returned above - gives us an object
let app = express();
let port = 5000;

function add(x,y){
    return x + y
}

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, function () {
    console.log('listening on port', port);
});

// listen for localhost:5000/vega   
app.get('/vega', function (request, response) {
    let result = subtract(3, 4)
    response.send(`Result: ${result}`)

    vega.printCohort();
});