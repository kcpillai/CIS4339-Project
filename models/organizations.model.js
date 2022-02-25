const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let organizationSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v1,
    },
    organizationNameId: {
      type: String,
      required: true,
    },
    organizationDesc: {
      type: String,
      required: true,
    },
    organizationAddress: [
      {
        address1: {
          type: String,
          required: true,
        },
        address2: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        state: {
          type: String,
          required: false,
        },
        zipcode: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    collection: 'organizations',
  }
);
module.exports = mongoose.model('organizations', organizationSchema);
