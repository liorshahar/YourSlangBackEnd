require("./connectDB");
const tvModels = require("../Models/TVshowsModels");

module.exports = query => {
  return tvModels.TVShowsModel.aggregate([
    {
      $unwind: "$sentences"
    },
    {
      $project: {
        tvshowname: 1,
        imgsrc: 1,
        "sentences.text": 1,
        "sentences.tweets": 1
      }
    }
  ]);
};
