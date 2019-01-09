//Require Mongoose
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
//Define a schema
var Schema = mongoose.Schema;

// Create Tweets Schema
var tweetsSchema = new Schema({_id: ObjectId, text: String,  createdAt: String});

// Create sentences child schema
var sentencesSchema = new Schema({ tvshowid: String, _id: ObjectId, text: String, tweets:[tweetsSchema],  child: tweetsSchema });


// Create TV show schema
var TVShowsSchema = new Schema({
  _id: ObjectId,
  tvshowname: String,
  sentences:[sentencesSchema],
  child: sentencesSchema
},{collection: 'TVShowsCollection'});

module.exports = {
  TVShowsSchema: TVShowsSchema,
  tweetsSchema: tweetsSchema
}