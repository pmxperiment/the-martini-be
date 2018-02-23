var express = require('express');
var app = express();

// ? var router = require('./config/routes.js');


var bodyParser = require('body-parser');
var path = require('path');

var user = require('./models/User')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE");
  next();
});

//var logTest = function(req, res, next){
//  console.log('if you see this it worked?')
//  next();
//}
//app.use(logTest);

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//set static path
//app.use(express.static(path.join(__dirname, 'public'))

//test data
var test1 = {
  name: 'Tom',
  location: 'pool'
};


//test routes
app.get('/api/users', function(req, res){
  res.json(test1);
});



app.listen(8080, function(){
  console.log('Server Started on Port 8080..');
});
