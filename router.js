const express = require('express');
const router = express.Router();

const UserRoutes = require('./Routes/UserRoutes');
const SubjectRoutes = require('./Routes/SubjectRoutes');
const LessonRoutes = require('./Routes/LessonRoutes');
const LevelRoutes = require('./Routes/LevelRoutes');
const AuthRoutes = require('./Routes/AuthRoutes');
const AdminRoutes = require('./Routes/AdminRoutes');

router.use('/users', UserRoutes);
router.use('/levels', LevelRoutes);
router.use('/subjects', SubjectRoutes);
router.use('/lessons', LessonRoutes);
router.use('/admin', AdminRoutes);
router.use('/auth', AuthRoutes);

//404 page
router.use("*", (req, res) => {
    res.status(404).json({
        success: "false",
        message: "Page not found",
        error: {
            statusCode: 404,
            message: "You reached a route that is not defined on this server"
        },
    });
});


module.exports = router;