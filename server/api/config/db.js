const mongoose = require('mongoose');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const dbname = process.env.DBNAME;

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(function(){
        console.log("Mongo DB Connection Successful");
  }).catch(function(err){
	  console.log(err);
  });

const connection = mongoose.connection;

module.exports = connection;

