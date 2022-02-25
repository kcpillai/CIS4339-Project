const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientvaccineinfoSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true
    },
    isGettingVaccine: {
        type: Boolean,
        required: true
    },
    isVaccinated: {
        type: Boolean,
        required: true
    },
    vacccinePreference: {
        type: String,
        required: true
    }
    },
    {
        collection: 'clientvaccineinfo'
    
    });

module.exports = mongoose.model('clientvaccineinfo', clientvaccineinfoSchema)