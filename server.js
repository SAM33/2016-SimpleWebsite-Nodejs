var express = require("express");
var app = express();
app.use(app.router);
app.use(express.static("." + '/web'));
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});