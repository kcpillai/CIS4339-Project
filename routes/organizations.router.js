const express = require('express');
const organziationsRouter = express.Router();
const organizationsModel = require('../models/organizations.model.js');

// Getting all the organziations
organziationsRouter.get('/', (req, res, next) => {
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
organziationsRouter.post('/', (req, res, next) => {
  organizationsModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('organziations information is added to the database.');
    }
  });
});

// Updating organziations
organziationsRouter.put('/employees/:id', (req, res, next) => {
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
organziationsRouter.delete('/:id', (req, res, next) => {
  organizationsModel.remove(
    { organizationId: req.params.id },
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

module.exports = organziationsRouter;
