const uuid = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let eventSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v1,
    },
    ClientID: {
      type: String,
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
          type: String,
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
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    collection: "events",
  }
);

module.exports = mongoose.model("events", eventSchema);
