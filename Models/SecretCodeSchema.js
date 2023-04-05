const mongoose = require('mongoose');

const secretCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    }
});

const SecretCodeModel = mongoose.model('SecretCode', secretCodeSchema, "SecretCodes");

module.exports = SecretCodeModel;