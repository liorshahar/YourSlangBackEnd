const express = require("express");
const router = express.Router();
const _ = require("underscore");
const getTvShowByName = require("../mongooseDB/Controller/getTvShowByName");
const getTop3 = require("../mongooseDB/Controller/getTop3");

router.get("/:query", function(req, res) {
  getTvShowByName(req.params.query).then((result, err) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

router.get("/top3", function(req, res) {
  getTop3(req.params.query).then((result, err) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

module.exports = router;
