var express = require('express');
var app = express();
var router = require('./db/routes.js');
var bodyParser = require('body-parser');
var path = require('path');
var user = require('./models/User')


//bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE");
  next();
});

//bodyParser middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.use(router);

// test data
// var test1 = {
//   name: 'Tom',
//   location: 'pool'
// };
//
//
// //test routes
// app.get('/api/users', function(req, res){
//   res.json(test1);
// });

app.listen(process.env.PORT || 8080, function () {
  console.log('Express server is up and running on https://localhost:8080/');
});
