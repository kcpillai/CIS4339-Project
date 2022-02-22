const uuid = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v1,
  },
  employeeID: {
    type: String,
    required: true,
  },
  employeeName: [
    {
      lastName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
    },
  ],
  organizationName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  employeeEmail: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  clients: [
    {
      ClientID: {
        type: Number,
        required: true,
      },
    },
  ],

  collection: "employees",
});

module.exports = mongoose.model("employees", employeeSchema);
