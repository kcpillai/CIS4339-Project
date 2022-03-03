const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let incomeSchema = new Schema({
    _id: { 
		type: String, 
        default: uuid.v1 
	},
	clientID: {
		type: Number,
      	required: true
	},
    isHeadOfHousehold: {
        type: Boolean,
        required: true
    },
    monthlyIncome: {
        type: Number,
        required: true
    },
    spousalSupport:{ 
        type: Number,
        required: true
    },
    workComp:{ 
        type: Number,
        required: true
    },
    childSupport:{ 
        type: Number, 
        required: true
    },
    tanf:{ 
        type: Number,
        required: true
    },
    ssi:{ 
        type: Number,
        required: true
    },
    unemployment:{ 
        type: Number,
        required: true
    },
    socialSecurity:{ 
        type: Number,
        required: true
    },
    otherIncome: { 
        type: Number,
        required: true
    }
},
    {
        collection: 'incomes'
});

module.exports = mongoose.model('incomes', incomeSchema)