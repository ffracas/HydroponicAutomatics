var express = require('express');
var app = express();
var mongoose = require('mongoose');
var plantsInfo = require('./src/model/plantDataModel')
var confInfo = require('./src/model/configModel')
var bodyParser = require('body-parser');
var schedule = require('node-schedule');

app.use(bodyParser.urlencoded({ limit: '50mb',  extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use('/static', express.static(__dirname + '/public'));

var path = require('path');
global.appRoot = path.resolve(__dirname);
global.routerPath = path.resolve(__dirname + '/public');

var routes = require('./src/routes/autohydro');
routes(app);

mongoose.connect('mongodb://localhost:27017/hydroponics', {useNewUrlParser: true});

app.listen(3000, function () {
    console.log('Node API server started on port 3000!');
  });