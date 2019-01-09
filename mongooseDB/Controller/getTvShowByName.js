require("./connectDB");
const tvModels = require("../Models/TVshowsModels");

module.exports = query => {
  return tvModels.TVShowsModel.aggregate([{ $match: { tvshowname: query } }]);
};
