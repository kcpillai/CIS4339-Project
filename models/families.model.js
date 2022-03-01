const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let familySchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: String,
        required: true
    },
    familyMember: [{
        lastName: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        relation: {
            type: String,
            required: true
        },
        race: {
            type: String,
            required: true
        },
        pregnant: {
            type: Boolean,
            required: true
        },
        whereWorkOrStudy: {
            type: String,
            required: true
        },
        occupationOrGrade: {
            type: String,
            required: true
        }
    }]
},
    {
        collection: 'families'
    });

    module.exports = mongoose.model('families', familySchema)