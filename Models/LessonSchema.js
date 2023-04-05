const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true
    },
    lesson_name: {
        type: String,
        required: [true, "Lesson name is required"],
        maxLength: [100, "Lesson name must not exceed more than 100 characters"]
    }
});

const lessonModel = mongoose.model("lesson", lessonSchema, "Lessons");

module.exports = lessonModel;