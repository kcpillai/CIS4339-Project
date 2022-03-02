const express = require('express');
const organizationsRouter = express.Router();
const organizationsModel = require('../models/organizations.model.js');

// Getting all the organziations
organizationsRouter.get('/', (req, res, next) => {
  organizationsModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// GET a specific organization based on organizationId
organizationsRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  organizationsModel.findOne({ organizationId: id }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send('Organization not found');
    } else {
      res.json(data);
    }
  });
});

// // Adding a Organization
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
organizationsRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  organizationsModel.findOneAndUpdate(
    { organizationId: id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Organizations is edited via PUT');
        console.log('Organizations has been successfully updated!', data);
      }
    }
  );
});

// DELETE: an endpoint to delete a organziations  record
organizationsRouter.delete('/:id', (req, res, next) => {
  organizationsModel.deleteOne(
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

module.exports = organizationsRouter;
