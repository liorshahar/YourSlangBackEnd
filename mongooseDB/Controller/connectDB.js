require("dotenv").load();

const mongoose = require("mongoose");
const db_pass = process.env.DB_PASS;

//Set up default mongoose connection
const mongoDB = `mongodb://db_user:${db_pass}@ds141654.mlab.com:41654/twitter-api-tv-shows`;
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
