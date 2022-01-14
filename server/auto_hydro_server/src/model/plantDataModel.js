var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plantDataSchema = new Schema({
    session: {
        type: String,
        required: "Session is required"
    },
    plant: {  
        type: String,
        required: "Plant is required"
    },
    plantFam: {
        type: String,
        required: "Plant family is required"
    },
    date: {
        type: String,
        required: "Date is required"
    }, 
    envTemp: {
        type: Number,
        required: "Environment temperature data are required"
    }, 
    envHumid: {
        type: Number,
        required: "Environment humidity data are required"
    }, 
    watTemp: {
        type: Number,
        required: "Water temperature data are required"
    }, 
    watLvl: {
        type: Number,
        required: "Water level data are required"
    }, 
    watPh: {
        type: Number,
        required: "Water pH data are required"
    }, 
    watNut: {
        type: Number,
        required: "Water nutrient data are required"
    }
});

module.exports = mongoose.model('plantsInfo', plantDataSchema);