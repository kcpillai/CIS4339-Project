const express = require('express');
const organizationsRouter = express.Router();
const organizationsModel = require('../models/organizations.model.js');

// Getting all the organziations
organizationsRouter.get('/', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  organizationsModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// // POST(CREATE): an endpoint that will insert an organziations info into DB.
organizationsRouter.post('/', (req, res, next) => {
  organizationsModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('organziations information is added to the database.');
    }
  });
});

// Updating organziations
organizationsRouter.put('/', (req, res, next) => {
  organizationsModel.findOneAndUpdate(
    { organizationsId: req.params.id },
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

// DELETE: an endpoint to delete a organziations  record
organizationsRouter.delete('/', (req, res, next) => {
  organizationsModel.deleteOne(
    { organizationId: req.body.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    }
  );
});

module.exports = organizationsRouter;
