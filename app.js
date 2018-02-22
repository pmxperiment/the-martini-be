var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');


//var logTest = function(req, res, next){
//  console.log('if you see this it worked?')
//  next();
//}
//app.use(logTest);

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
//app.use(express.static(path.join(__dirname, 'public'))

//test data
var test1 = {
  name: 'Tom',
  location: 'pool'
};


//test routes
app.get('/', function(req, res){
  res.json(test1);
});





app.listen(8080, function(){
  console.log('Server Started on Port 8080..');
});
