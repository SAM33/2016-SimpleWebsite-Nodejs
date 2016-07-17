var express = require("express");
var app = express();

app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendfile( "./web/" + req.params[0]); 
});

var port = 80
app.listen(port, function() {
    console.log("Listening on " + port);
});
