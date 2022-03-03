//CRUD APIs
const express = require('express');
const incomeRouter = express.Router();
const incomeModel = require('../models/incomes.model.js');

// Done
// GET income
incomeRouter.get('/', (req, res, next) => { //retrieve data from the collection using mongoose schema
    incomeModel.find((error, data) => {
    if (error) {
      // using a call to next() function to send out error message if error is encountered
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// ADD income
incomeRouter.post('/', (req, res, next) => {
    incomeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('income added.');
    }
  });
});


// Update income with income id
incomeRouter.put('/:id', (req, res, next) => {
    incomeModel.findOneAndUpdate(
    { incomeId: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('income edited via PUT');
        console.log('income successfully updated via PUT', data);
      }
    }
  );
});

// DELETE income given id
incomeRouter.delete('/:id', (req, res, next) => {
  //mongoose deletes record based off of document id
  incomeModel.findOneAndRemove(
    { incomeId: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
        res.send('income is deleted.');
      }
    }
  );
});

module.exports = incomeRouter;
