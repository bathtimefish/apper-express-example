var express = require('express');
var apper = require('apper')();
var app = express();

app.use(apper.expressApp);
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

