const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

module.exports = schema