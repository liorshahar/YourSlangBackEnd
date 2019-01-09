require("./connectDB");
const tvModels = require("../Models/TVshowsModels");

module.exports = () => {
  return tvModels.TVShowsModel.aggregate([
    {
      $unwind: "$sentences"
    },
    {
      $project: { tvshowname: 1, "sentences.text": 1, "sentences.tweets": 1 }
    },
    {
      $group: {
        _id: "$tvshowname",
        showId: { $first: "$_id" },
        sentences: { $sum: 1 },
        tweets: { $sum: { $size: "$sentences.tweets" } }
      }
    }
  ]);
};
