var express = require('express');
var students = require('./routes/students')
var path =  require('path');
var app = express();

//static files
app.use(express.static('public'));
app.use(express.static('node_modules/angular'));
app.use(express.static('node_modules/angular-animate'));
app.use(express.static('node_modules/bootstrap'));

//express routes
app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, './public/views/index.html'));
});
app.use('/students', students);
app.get('/*', function(request, response){
  response.sendFile(path.join(__dirname, './public/views/index.html'));
});

//start server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
