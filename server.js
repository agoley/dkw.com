// Express server for DKW Communications

// modules =================================================
var express = require('express');
var app = express();
var path = require('path');

// configuration ===========================================

// set the static files location
app.use(express.static(__dirname + '/public')); 

// set our port
var port = process.env.PORT || 3000; 

// routes ==================================================

// route to handle all AngularJS requests
app.get('*', function(req, res) {
    res.sendFile('index.html',
        { root: path.join(__dirname, './public/views') });
});

// start app ===============================================
app.listen(port, function () {
    console.log('dkw.com is running at localhost:' + port);
});