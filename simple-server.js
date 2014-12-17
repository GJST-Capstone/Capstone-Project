var http = require("http");
var st = require('st');
var Router = require("routes-router");
var redirect = require("redirecter");
var sendHtml = require("send-data/html"); //may also need send-data/json
var formBody = require("body/form");
var templates = require('./server-templates/compiled-templates');

// Authentication:
var pwd = require("pwd");
// var config = require('./config'); // prior to Heroku
var config = (process.env.HEROKU)? // Heroku method
  {
    dbKey: process.env.DBKEY 
  } :
  require('./config.js');
var db = require('orchestrate')(config.dbKey);

// Database collection name for 'like' counts:
var dbCollectionName = 'count';

var router = Router();
// The body module handles the async parsing of the data in a POST request:
// var textBody = require('body');
var jsonBody = require('body/json');
var querystring = require('querystring');

router.addRoute("/", {
  GET: function (req, res, opts) {
    sendHtml(req, res, templates.index({ message: "RatherFit"}));
  },
});



router.addRoute("/public/*", st({
  path: __dirname + "/public",
  url: "/public"
}));

var server = http.createServer(router);
var serverLocation = (process.env.PORT || 5000)
server.listen(serverLocation);
console.log("example auth server listening on port " + serverLocation);

