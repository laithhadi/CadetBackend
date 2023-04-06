const PlannerModel = require('../Models/PlannerSchema');
const mongoose = require("mongoose");

exports.getPlansForCadet = async function (req, res) {
    try {
        const cadetId = req.params.id;

        const plans = await PlannerModel.find({ cadets: { $in: [cadetId] } })
            .populate('starLevel', 'level_name')
            .populate('subject', 'subject_name')
            .populate('lesson', 'lesson_name')
            .exec();

        return res.send(plans);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'Failed to fetch plans for cadet' });
    }
}

exports.create = async function (req, res) {
    try {
        const request = req.body;
        const cadetIds = request.cadets.split(',').map(cadetId => new mongoose.Types.ObjectId(cadetId));

        const plannerInstance = new PlannerModel({
            organiser: request.organiser,
            planDate: request.planDate,
            starLevel: new mongoose.Types.ObjectId(request.starLevel),
            subject: new mongoose.Types.ObjectId(request.subject),
            lesson: new mongoose.Types.ObjectId(request.lesson),
            cadets: cadetIds,
            site: request.site,
            notes: request.notes
        });

        await plannerInstance.validate();
        const createdPlanner = await plannerInstance.save();
        return res.send(createdPlanner);
    } catch (err) {
        console.log(err);
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(error => error.message);
            return res.status(400).send({ message });
        } else {
            return res.status(500).send({ message: 'Please select a cadet' });
        }
    }
}