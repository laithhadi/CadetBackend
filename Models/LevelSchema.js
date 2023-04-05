const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true
    },
    level_name: {
        type: String,
        required: [true, "Level name is required"],
        maxLength: [100, "Level name must not exceed more than 100 characters"]
    }
});

const levelModel = mongoose.model("level", levelSchema, "Levels");

module.exports = levelModel;