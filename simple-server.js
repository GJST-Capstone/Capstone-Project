var http = require("http");
var st = require('st');
var Router = require("routes-router");
var redirect = require("redirecter");
var sendHtml = require("send-data/html"); //may also need send-data/json
var formBody = require("body/form");
var templates = require('./server-templates/compiled-templates');

// Authentication stuff:
var pwd = require("pwd");
// var config = require('./config'); // prior to Heroku
var config = (process.env.HEROKU)? // Heroku method
  { 
    dbKey: process.env.DBKEY
  } :
  require('./config.js');
var db = require('orchestrate')(config.dbKey);


var router = Router();
// The body module handles the async parsing of the data in a POST request:
//var textBody = require('body');
var jsonBody = require('body/json'); // include for json posting


router.addRoute("/", {
  GET: function (req, res, opts) {
    sendHtml(req, res, templates.index({ message: "RatherFit"}));
  },
});

router.addRoute("/joel", {
  GET: function (req, res, opts) {
    sendHtml(req, res, templates.joel({ message: "hello joel"}));
  },
});

router.addRoute("/api", {

  GET: function(req,res,opts) { 

        function forwardOrchResults(result) {
            var values = result.body.results.map(getValue);
            console.log("Returning array: "+JSON.stringify(values));
            res.end(JSON.stringify(values));
        }

        function handleFailure(err) {
            console.log("Error: "+err);
            res.end(err);
        }

        console.log("Processing GET request...");
        console.log("Options:"+JSON.stringify(opts));
        var queryStr = opts.parsedUrl.query;

        if (queryStr) { // expect set of keys, search db for only those
            var queryObj = querystring.decode(opts.parsedUrl.query);
            var keyStr = queryObj.keys;
            if (!keyStr) throw "query includes no keys";
            // turn '1,2,3' into 'key:(1 OR 2 OR 3)':
            var searchStr = "key:(" + keyStr.split(',').join(' OR ') + ")";
            console.log("Searching db for "+searchStr);

            // return subset of db:
            db.search(dbCollectionName, searchStr)
            .then(forwardOrchResults)
            .fail(handleFailure)
        } else {
            db.list(dbCollectionName)
            .then(forwardOrchResults)
            .fail(handleFailure) 
        }
    },

  POST: function(req,res,opts) {
            console.log("Processing POST request...");
            console.log(JSON.stringify(opts));
      jsonBody(req,res, function saveBody(err,body) {
            var key = String(body.key);
            console.log("Body:");
            console.log(body);
        db.put(dbCollectionName,key,body)
            .then(function(result){
              res.end('done!');
            })
            .fail(function(err){
                console.log("err: "+err);
                res.end();
            });
      });
  }
});

router.addRoute("/public/*", st({
  path: __dirname + "/public",
  url: "/public"
}));

var server = http.createServer(router);
var serverLocation = (process.env.PORT || 5000)
server.listen(serverLocation);
console.log("example auth server listening on port " + serverLocation);

// function createUser (user, password) {
//   pwd.hash(password, function (err, salt, hash) {
//     if (err) {
//       throw err
//     }
//     user.salt = salt;
//     user.hash = String(hash);

//     db.put('users', user.name, user)
//     .then(function (result) {
//       console.log("success!")
//     })
//     .fail(function (err) {
//       console.error(err);
//     })
//   })
// }

//uncomment to create a user
//createUser({name: "steve"}, "123"); 

// function authenticate(name, password, callback) {
//   db.get('users', name)
//     .then(function(result){
//       var user = result.body;
//       if (!user) {
//         return callback(new Error("empty response"))
//       }

//       pwd.hash(password, user.salt, function (err, hash) {
//         if (err) {
//           return callback(err)
//         }

//         if (String(hash) === user.hash) { //success!
//           return callback(null, user)
//         }

//         callback(new Error("invalid password"))
//       })
//     })
//     .fail(function (err) {
//       callback(new Error("user not found"));
//     });
// }

// router.addRoute("/login", {
//   GET: function (req, res, opts) {
//     sendHtml(req, res, templates.login({ message: "Please log in"}));
//   },
//   POST: function (req, res, opts) { //process login form...

//     formBody(req, res, function (err, body) { // when form body is ready...
//       if (err) {
//         return console.log(err);
//       }

//       authenticate(body.username, body.password, function (err, user) {
//         if (err || !user) { //problem
//           console.log(err);
//           sendHtml(req,res,templates.login({ message: "Nope!  Try again."}));
//         } else { //success
//           console.log("authenticated user "+user.name)
//           sendHtml(req, res, templates.index({message: "Welcome, "+user.name+"!"}));
//         }
//       })//authenticate
//     })//formBody
//   }
// });
