
var express = require('express');
var fnc = require('./tools')
var bodyParser = require("body-parser");
require('./tools.js')();

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res) {
var test = sum(1,2);
console.log(test);
  res.render('index.ejs');
});

app.post('/calcul', function(req, res) {
    console.log(req.body);// your JSON
    res.send(req.body);// echo the result back
  });

app.listen(80);

