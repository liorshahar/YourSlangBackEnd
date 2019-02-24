const express = require("express");
const router = express.Router();
const _ = require("underscore");
const getTvShow = require("../mongooseDB/Controller/getTvShow");
const getTvShowByDate = require("../mongooseDB/Controller/getTvShowBydate");

router.get("/", function(req, res) {
  getTvShow().then((result, err) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      tvShowArray = [];

      result.forEach(item => {
        tvShowArray.push({ item });
      });
      console.log(tvShowArray);
      res.send(tvShowArray);
    }
  });
});

router.get("/date", function(req, res) {
  getTvShowByDate();
});

module.exports = router;
