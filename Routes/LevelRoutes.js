const express = require('express');
const router = express.Router();
const { isUserAuthenticated } = require("../Middleware/UserAuthenticator");
const LevelsController = require("../Controllers/LevelController");

router.use(isUserAuthenticated);

//GET REQUESTS
router.get("/", LevelsController.getAllLevels);

module.exports = router;