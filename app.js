var express = require('express');
var app = express();

var mongoose = require('mongoose');

var router = require('./db/routes.js');
var bodyParser = require('body-parser');
var path = require('path');
var user = require('./models/User')


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
});

//bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
//comenting out public
//app.use(express.static('public'));
app.use(bodyParser.json());


app.options('/*', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});


app.use(router);

app.listen(process.env.PORT || 8080, function () {
  console.log('Express server is up and running on https://localhost:8080/');
});
