const express = require("express");
const router = express.Router();
const eventModel = require("../models/event.model.js");

router.post("/", (req, res, next) => {
  eventModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Event info is added to the database.");
    }
  });
});

module.exports = router;
