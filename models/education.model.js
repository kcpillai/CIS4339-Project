const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let educationSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v1,
    },
    clientID: {
      type: String,
      required: true,
    },
    hasAttended: {
      type: Boolean,
      required: true,
    },
    school: {
      type: String,
    },
    lastGrade: {
      type: String,
    },
    hasGraduated: {
      type: Boolean,
      required: true,
    },
    degree: {
      type: String,
    },
    certification: {
      type: String,
    },
  },

  {
    collection: 'education',
  }
);

module.exports = mongoose.model('education', educationSchema);
