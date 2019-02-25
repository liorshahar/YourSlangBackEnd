const express = require("express");
const router = express.Router();
const _ = require("underscore");
const getTvShow = require("../mongooseDB/Controller/getTvShow");

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

module.exports = router;
