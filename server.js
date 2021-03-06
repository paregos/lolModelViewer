const express = require('express');
var request = require('request');


// Initialisation
const app=express();
const router = express.Router();

app.use(express.static(__dirname + '/src'));

app.engine('html', require('ejs').renderFile);


app.get('*', (req, res) => {
  res.render('./index.html');
});

// Error handling
app.use(function (err, req, res, next) {
    // Return 500 for any uncaught errors
    console.log(err);
    res.status(500).send('Something broke!');
});

var server=app.listen((process.env.PORT || 3010),function(){
console.log("We have started our server on port " +(process.env.PORT || 3010));
});


module.exports = app;