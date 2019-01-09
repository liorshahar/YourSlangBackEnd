require('dotenv').load();


var tvShowJson   = require('./stopList.json');
var mongoose     = require('mongoose');
var ObjectId     = mongoose.Types.ObjectId;
const db_pass    = process.env.DB_PASS;
var mongooseModels = require('./mongooseDB/Models/TVshowsModels')

//Set up default mongoose connection
var mongoDB = `mongodb://db_user:${db_pass}@ds141654.mlab.com:41654/twitter-api-tv-shows`;
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* 
var TVshowIten = {
    tvshowid: new ObjectId,
    tvshowname: 'Test TV Show',
    sentences:[]
}

var sentenceItem = {
    tvshowid: TVshowIten.tvshowid,
    sentenceid: new ObjectId, 
    text: 'this is text', 
}

 */

// Upload data from stop list json to mLab
/* 
tvShowJson.forEach(element => {
    var data = new mongooseModels.TVShowsModel({
        _id: new ObjectId,
        tvshowname: element.TvShow,
        sentences:[]
    });

    element.sentences.forEach(text=>{
        data.sentences.push({
            tvshowid: data._id,
            _id: new ObjectId, 
            text: text.text 
        })
    })
    data.save();
});
 */

