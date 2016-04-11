// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var mongoose	   = require('mongoose');
var router 		   = express.Router();   

// configuration ===========================================

var db = require('./config/db');
var port = process.env.PORT || 8080; 
mongoose.connect(db.url); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app);

// start app ===============================================
app.listen(port);          
console.log('Listening on port ' + port);

// expose app           
exports = module.exports = app;                 