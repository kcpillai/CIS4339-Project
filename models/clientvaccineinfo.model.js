const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientvaccineinfoSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v1,
    },
    clientID: {
      type: Number,
      required: true,
    },
    isGettingVaccine: {
      type: Boolean,
      required: true,
    },
    isVaccinated: {
      type: Boolean,
      required: true,
    },
    vaccinePreference: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'clientVaccineInfo',
  }
);

module.exports = mongoose.model('clientVaccineInfo', clientvaccineinfoSchema);
