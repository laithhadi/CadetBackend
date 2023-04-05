const SubjectModel = require('../Models/SubjectSchema');
const mongoose = require('mongoose');

exports.getSubjectsForStarLevel = async function (req, res) {
    try {
        const subjects = await SubjectModel.find({ level_id: new mongoose.Types.ObjectId(req.params.levelId) });
        return res.send(subjects);
    } catch (error) {
        return res.status(500).send({ error: 'Something went wrong' });
    }
}

// exports.create = async function (req, res) {
//     try {
//         const request = req.body;

//         const userInstance = new UserModel({
//             username: request.username,
//             password: request.password,
//         });

//         await userInstance.validate();
//         const updatedUser = await userInstance.save();
//         return res.send(updatedUser);
//     } catch (err) {
//         if (err.name === 'ValidationError') {
//             const errors = Object.values(err.errors).map(error => error.message);
//             return res.status(400).send({ errors });
//         } else {
//             //TODO: other error handling
//             return res.status(500).send({ error: 'Something went wrong' });
//         }
//     }
// }

// exports.update = async function (req, res) {
//     try {
//         const user = await UserModel.findOneAndUpdate(
//             req.params.id, req.body, { runValidators: true, new: true }
//         );
//         return res.send(user);
//     } catch (error) {
//         if (err.name === 'ValidationError') {
//             const errors = Object.values(err.errors).map(error => error.message);
//             return res.status(400).send({ errors });
//         } else {
//             //TODO: other error handling
//             return res.status(500).send({ error: 'Something went wrong' });
//         }
//     }
// }

// exports.deleteAll = async function (req, res) {
//     try {
//         const user = await UserModel.deleteMany({ isAdmin: { $ne: true } });
//         return res.send(user);
//     } catch (error) {
//         //TODO: error handling
//         return res.status(500).send({ error: 'Something went wrong' });
//     }
// }

// exports.delete = async function (req, res) {
//     try {
//         const user = await UserModel.findByIdAndDelete(req.params.id);
//         return res.send(user);
//     } catch (error) {
//         //TODO: error handling
//         return res.status(500).send({ error: 'Something went wrong' });
//     }
// }