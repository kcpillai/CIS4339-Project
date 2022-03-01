const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v1,
    },
    clientID: {
      type: Number,
      required: true,
    },
    clientName: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    clientDemographics: {
      gender: {
        type: String,
        required: true,
      },
      birthday: {
        type: String,
        required: true,
      },
      raceEthnicity: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
      numChildren: {
        type: String,
        required: true,
      },
      is65orOlder: {
        type: Boolean,
        required: true,
      },
      isVeteran: {
        type: Boolean,
        required: true,
      },
    },
    ssn: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    driverLicense: {
      type: String,
      required: true,
    },
    isNeedSupport: {
      type: Boolean,
      required: true,
    },
    clientVaccineInfo: {
      type: String,
    },
    dateTime: {
      type: String,
    },
    organization: {
      type: String,
      required: true,
    },
    employeeID: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'clients',
  }
);

module.exports = mongoose.model('clients', clientSchema);
