// Avina Bhakta
//CRUD APIs
const express = require('express');
const residencesRouter = express.Router();
const residencesModel = require('../models/residences.model.js');


// GET all residences
residencesRouter.get('/', (req, res, next) => {
  //get data 
  residencesModel.find((error, data) => {
    if (error) {
      // send out error message if there is an error
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// GET a specific residence info based on clientId
residencesRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  residencesModel.findOne({ clientID: id }, (error, data) => {
    if (error) {
      // send out error message if there is an error
      return next(error);
    } else if (data === null) {
      res.status(404).send('Client not found');
    } else {
      res.json(data);
    }
  });
});

// ADD residences
residencesRouter.post('/', (req, res, next) => {
  residencesModel.create(req.body, (error, data) => {
    if (error) {
      // send out error message if there is an error
      return next(error);
    } else {
      res.send('Residences have been added.');
    }
  });
});

// Update residences with residence id
residencesRouter.put('/:id', (req, res, next) => {
    residencesModel.findOneAndUpdate(
    { residencesID: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        // send out error message if there is an error
        return next(error);
      } else {
        res.send('residences edited via PUT');
        console.log('residences successfully updated via PUT', data);
      }
    }
  );
});

// DELETE residence records given id
residencesRouter.delete('/:id', (req, res, next) => {
  //deletes record based off of id
  residencesModel.findOneAndRemove(
    { clientID: req.params.id },
    (error, data) => {
      if (error) {
        // send out error message if there is an error
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    }
  );
});

module.exports = residencesRouter;
