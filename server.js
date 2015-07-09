var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI, function(err) {
    if(err) {
        console.log('MongoDB connection error', err);
    } else {
        console.log('MongoDB connection successful');
    }
});

var List = mongoose.model('List', new mongoose.Schema({
  name: String,
  language: String
}));

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
});

app.get('/lists/:id', function(req, res) {
  return List.findById(req.params.id, function(err, list) {
    return res.send(list);
  });
});

app.get('/lists', function(req, res) {
  return List.find(function(err, lists) {
    return res.send(lists);
  });
});



app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});