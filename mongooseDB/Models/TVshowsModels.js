//Require Mongoose
var mongoose = require('mongoose');

// Require schema
var TwitterSchema = require('../Schems/TVShowsSchema');

// Compile model from schema
var TVShowsModel = mongoose.model('TVShowsModel', TwitterSchema.TVShowsSchema );
var TweetsModel = mongoose.model('TweetsModel', TwitterSchema.tweetsSchema );

module.exports = {
    TVShowsModel: TVShowsModel,
    TweetsModel: TweetsModel
}