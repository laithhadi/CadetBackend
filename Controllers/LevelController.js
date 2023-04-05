const LevelModel = require('../Models/LevelSchema');

exports.getAllLevels = async function (req, res) {
    try {
        const levels = await LevelModel.find({});
        return res.send(levels);
    } catch (error) {
        return res.status(500).send({ error: 'Something went wrong' });
    }
}