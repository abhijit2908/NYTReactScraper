const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const request = require("request");
const PORT = process.env.PORT || 3001;
//const axios=require("axios");
const db=require("./models/Articles.js");



// var apiKey="ac86ca842e7d4a18aa7da113b2ed1bbf";

// var queryTerm = "trump";
// var numResults = 5;
// var startYear = 2016;
// var endYear = 2017;
// var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;
// var newURL = queryURLBase + "&q=" + queryTerm;






// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
//app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
 process.env.MONGODB_URI || "mongodb://localhost/nytreact",
 {
   useMongoClient: true
 }
);

// Start the API server
app.listen(PORT, function() {
 console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// axios.get(newURL).then(function(response){

// 	console.log(response);
// })

// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//    'api-key': "ac86ca842e7d4a18aa7da113b2ed1bbf",
//    'q': "trump",
//    'begin_date': "20140101",
//    'end_date': "20170101"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);

//  body.response.docs.forEach(function(element){
//   // console.log(body.response.docs[0].pub_date);
//   // console.log(body.response.docs[0].web_url);

//   var results={
//   	title:element.snippet,
//   	date:element.pub_date,
//   	url:element.web_url
//   };


// }).then(function(response){
// 	console.log(response);
// })
// })
