const express = require('express');
const eventsRouter = express.Router();
const eventModel = require('../models/events.model.js');

// Get Events
eventsRouter.get('/', (req, res, next) => {
  eventModel.find((error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).json('Employee information not found');
    } else {
      res.json(data);
    }
  });
});

// Add Events
eventsRouter.post('/', (req, res, next) => {
  eventModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('Event info is added to the database.');
    }
  });
});

// Updating Events
eventsRouter.put('/events/:id', (req, res, next) => {
  eventModel.findOneAndUpdate(
    { employeeId: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Employee is edited via PUT');
        console.log('Employee has been successfully updated!', data);
      }
    }
  );
});

// Delete Event based on Event ID
eventsRouter.delete('/', (req, res, next) => {
  eventModel.deleteOne({ eventsId: req.body.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = eventsRouter;
