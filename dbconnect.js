const mongose= require('mongoose');

const url = 'mongodb://127.0.0.1/practice';
mongose.connect(url);
console.log("MongoDB Connected to Nodejs");



