const express = require("express");
const router = express.Router();
const _ = require("underscore");
const getTvShowByName = require("../mongooseDB/Controller/getTvShowByName");

router.get("/:query", function(req, res) {
  console.log(req.url);
  getTvShowByName(req.params.query).then((result, err) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

module.exports = router;
