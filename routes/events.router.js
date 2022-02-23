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

eventsRouter.get("/", (req, res, next) => {
  eventModel.find((error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).json("Employee information not found");
    } else {
      res.json(data);
    }
  });
});

module.exports = eventsRouter;
