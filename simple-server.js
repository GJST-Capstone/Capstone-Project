var http = require("http");
var st = require('st');
var Router = require("routes-router");
var redirect = require("redirecter");
var sendHtml = require("send-data/html"); //may also need send-data/json
var formBody = require("body/form");
var templates = require('./server-templates/compiled-templates');

// Authentication stuff:
var pwd = require("pwd");
var config = require('./config');
var db = require('orchestrate')(config.dbKey);


var router = Router();
// The body module handles the async parsing of the data in a POST request:
//var textBody = require('body');
var jsonBody = require('body/json'); // include for json posting

// Create api routes:
router.addRoute("/api", {
  GET:  function(req,res,opts) {
      console.log("getting...");
      console.log(JSON.stringify(opts));
      res.end("Got it!");
  },
  PUT:  function(req,res,opts) {
      console.log("putting...");
      console.log(JSON.stringify(opts));
      res.end("It's put!");
  },
  POST: function(req,res,opts) {
      console.log("posting...");
      console.log(JSON.stringify(opts));
      //textBody(req,res,function(err,body) {
      jsonBody(req,res,function(err,body) { //Alternative: expects json body
        if (err) {
                res.statusCode = 418;// override default 200
              return res.end("Post failed!")
            }
        console.log('body = '+ body);
        res.end("It's posted!");
      });
  },
  DELETE: function(req,res,opts) {
      console.log("deleting...");
      console.log(JSON.stringify(opts));
      res.end("It's deleted!");
  }
});


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

router.addRoute("/", {
  GET: function (req, res, opts) {
    sendHtml(req, res, templates.index({ message: "health app"}));
  },
});


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

router.addRoute("/public/*", st({
  path: __dirname + "/public",
  url: "/public"
}));

var server = http.createServer(router);
server.listen(3000);
console.log("example auth server listening on port 3000");
