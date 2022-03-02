const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v1,
    },
    eventsId: {
      type: Number,
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    eventDescription: {
      type: String,
      required: true,
    },

    eventInfo: [
      {
        eventDate: {
          type: Date,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        zipcode: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    collection: 'events',
  }
);

module.exports = mongoose.model('events', eventSchema);
