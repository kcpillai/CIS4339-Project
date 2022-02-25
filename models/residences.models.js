const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let residenceSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    totalRent: {
        type: Number,
        required: true
    },
    timeOfResidence: {
        type: String,
        required: true
    },
    residenceYear: {
        type: Number,
        required: true
    },
    residenceMonth: {
        type: Number,
        required: true
    },
    livingArrangemets: {
        type: String,
        required: true
    },
    hasUtilities: {
        type: Boolean,
        required: true
    },
    isSubsidized: {
        type: Boolean,
        required: true
    },
    isSingleParent: {
        type: Boolean,
        required: true
    },
    modifyAt: {
        type: Date,
        required: true
    }
},
    {
        collection: 'residences'
    });

module.exports = mongoose.model('residences', residenceSchema)