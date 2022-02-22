const uuid = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let healthSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v1,
  },
  clientID: {
    type: String,
    required: true,
  },
  hasHealthInsurance: {
    type: Boolean,
    required: true,
  },
  healthInsuranceProgram: {
    type: String,
  },
  hasFoodStamps: {
    type: Boolean,
    required: true,
  },
  foodStampsAmount: {
    type: Number,
  },
  foodStampsReason: {
    type: String,
  },

  collection: "health",
});

module.exports = mongoose.model("health", healthSchema);
