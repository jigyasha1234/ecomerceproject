const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/product_list');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'error connecting to mongoDB'));
db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});


// middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',require('./routes/products'));

// connecting to server
app.listen(8000, () => {
    console.log("Backend Server is running on port 8000");
});