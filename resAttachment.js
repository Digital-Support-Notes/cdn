// res.attachment() Method Demo Example

// Importing the express
var express = require('express');

// Initializing the express and port number
var app = express();

// Initializing the router from express
var router = express.Router();
var PORT = 3000;

// Defining an endpoint
app.get('/api', function(req, res){
   res.attachment('sitelogo.png');
   console.log(res.get('Content-Disposition'));
   res.end();
});
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});
