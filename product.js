const mongoose = require('mongoose');

const schema= new mongoose.Schema({
    firstname:String,
    lastname:String,
    mobileno:String,
    address:String
})

module.exports= mongoose.model('emptables',schema);

 