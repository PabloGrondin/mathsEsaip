
var express = require('express');
var fnc = require('./tools')
var bodyParser = require("body-parser");
require('./tools.js')();
var http = require("http");

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var options = {
    host: "localhost/calcul",
    method: "POST",
    port: 5000,
    headers: {
        "Content-Type": "application/json"
    }
};


app.get('/', function(req, res) {
var test = sum(1,2);
console.log(test);
  res.render('index.ejs');
});

app.post('/calcul', function(req, res) {
    console.log("receiving" +req.body);// your JSON
    var req2 = http.request(options, function (res) {
        var responseString = "";
        res.on("data", function (data) {
            responseString += data;
            // save all the data from response
        });
        res.on("end", function () {
            console.log(responseString); 
            // print to console when response ends
        });
    });
    var reqBody = JSON.stringify(req.body);
    console.log("sending" +reqBody);
    req2.write(reqBody);
    req2.end();
    res.send(req.body);// echo the result back
  });


app.listen(80);

