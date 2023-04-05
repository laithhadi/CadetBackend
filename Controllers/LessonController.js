const LessonModel = require('../Models/LessonSchema');
const mongoose = require('mongoose');

exports.getLessonsForSubject = async function (req, res) {
    try {
        const lessons = await LessonModel.find({ subject_id: new mongoose.Types.ObjectId(req.params.subjectId) });
        return res.send(lessons);
    } catch (error) {
        return res.status(500).send({ error: 'Something went wrong' });
    }
}