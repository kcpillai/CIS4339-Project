const express = require('express');
const employeeRouter = express.Router();
const employeeModel = require('../models/employees.model.js');

// GET Employees
employeeRouter.get('/', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  employeeModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// // POST(CREATE): an endpoint that will insert an employee info into DB.
employeeRouter.post('/', (req, res, next) => {
  employeeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('Worker information is added to the database.');
    }
  });
});

// Updating Employee
employeeRouter.put('/employees/:id', (req, res, next) => {
  employeeModel.findOneAndUpdate(
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

// DELETE: an endpoint to delete a client employment record by client ID.
employeeRouter.delete('/:id', (req, res, next) => {
  employeeModel.remove({ employeeId: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = employeeRouter;
