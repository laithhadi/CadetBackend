const { logEvent } = require('./Logger');

const errorHandler = (err, req, res, next) => {
    logEvent(`${err.name}: ${err.message}`, 'error_logs.txt');
    console.error(err.stack)
    res.status(500).send(err.message);
}

module.exports = errorHandler;