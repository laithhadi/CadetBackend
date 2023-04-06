const { verifyToken } = require("../Utils/TokenGenerator");

exports.isUserAuthenticated = (req, res, next) => {
    const token =
        req.body.token
        || req.query.token
        || req.headers.authorization;

    if (!token) {
        return res.status(403).send("Authentication token required!");
    }
    try {
        const tokenDecoded = verifyToken(token);
        req.user = tokenDecoded;
        next();
    } catch (err) {
        return res.status(401).send("Unauthorized!");
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "Admin") {
        return res.status(403).send({
            message: "Access Denied!"
        });
    }
    next();
};

exports.isDetachmentCommander = (req, res, next) => {
    if (req.user.role !== "Detachment Commander") {
        return res.status(403).send({
            message: "Access Denied!"
        });
    }
    next();
};
