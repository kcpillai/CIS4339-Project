const express = require("express");
const eventsRouter = express.Router();
const eventModel = require("../models/events.model.js");

eventsRouter.post("/", (req, res, next) => {
  eventModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Event info is added to the database.");
    }
  });
});

module.exports = eventsRouter;
