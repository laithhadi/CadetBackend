const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true
    },
    level_id: {
        type: mongoose.Types.ObjectId,
        required: [true, "Level ID is required"]
    },
    subject_name: {
        type: String,
        required: [true, "Subject name is required"],
        maxLength: [100, "Subject name must not exceed more than 100 characters"]
    }
});

const subjectModel = mongoose.model("subject", subjectSchema, "Subjects");

module.exports = subjectModel;