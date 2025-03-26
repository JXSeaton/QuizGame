const mongoose = require('mongoose');

const username = 'username';
const password = 'password';
const cluster = 'cluster';
const dbname = 'database';

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(function(){
        console.log("Mongo DB Connection Successful");
  }).catch(function(err){
	  console.log(err);
  });

const connection = mongoose.connection;

module.exports = connection;

