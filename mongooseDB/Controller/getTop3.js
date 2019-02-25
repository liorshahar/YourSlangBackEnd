require("./connectDB");
const tvModels = require("../Models/TVshowsModels");

module.exports = () => {
  console.log("asdas");
  return tvModels.TVShowsModel.aggregate([
    {
      $unwind: "$sentences"
    },
    {
      $project: {
        tvshowname: 1,
        "sentences.text": 1,
        "sentences.tweets": 1
      }
    },

    {
      $group: {
        _id: {
          tvshowname: "$tvshowname",
          sentences: "$sentences.text",
          tweets: { $sum: { $size: "$sentences.tweets" } }
        }
      }
    },
    { $sort: { "_id.tweets": -1 } },
    { $limit: 3 }
  ]);
};
