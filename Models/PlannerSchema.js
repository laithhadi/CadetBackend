const mongoose = require("mongoose");

const plannerSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true
    },
    planDate: {
        type: Date,
        required: [true, 'Event start date is required'],
    },
    starLevel: {
        type: mongoose.Types.ObjectId,
        ref: 'level',
        required: [true]
    },
    subject: {
        type: mongoose.Types.ObjectId,
        ref: 'subject',
        required: [true]
    },
    lesson: {
        type: mongoose.Types.ObjectId,
        ref: 'lesson',
        required: [true]
    },
    cadets: [{
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: [true],
    }],
    site: {
        type: String,
        required: [true, "Site is required"],
        maxLength: [58, "Site must not exceed more than 58 characters"]
    },
    notes: {
        type: String
    }
});

const plannerModel = mongoose.model("planner", plannerSchema, "Planner");

module.exports = plannerModel;