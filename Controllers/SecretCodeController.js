const SecretCodeModel = require('../Models/SecretCodeSchema');

exports.getAllCodes = async function (req, res) {
    try {
        const codes = await SecretCodeModel.find({});
        return res.send(codes);
    } catch (error) {
        return res.status(500).send({ error: 'Something went wrong' });
    }
}