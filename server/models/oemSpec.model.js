const mongoose = require("mongoose");

const oemSpecSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    listPrice: {
        type: Number,
        required: true
    },
    colors: {
        type: [String]
    },
    mileage: {
        type: Number,
        required: true
    },
    power: {
        type: Number,
        required: true
    },
    maxSpeed: {
        type: Number,
        required: true
    }
}, { versionKey: false, timestamps: true });

const OEM_SpecModel = mongoose.model('oemSpec', oemSpecSchema);

module.exports = OEM_SpecModel;