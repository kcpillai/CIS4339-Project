const express = require("express");
const employeeRouter = express.Router();
const employeeModel = require("../models/employees.model.js");

employeeRouter.post("/", (req, res, next) => {
  employeeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Family member info is added to the database.");
    }
  });
});

module.exports = employeeRouter;
