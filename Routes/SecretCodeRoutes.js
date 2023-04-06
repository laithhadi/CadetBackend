const express = require('express');
const router = express.Router();
const { isUserAuthenticated, isAdmin } = require("../Middleware/UserAuthenticator");
const SecretCodeController = require("../Controllers/SecretCodeController");

router.use(isUserAuthenticated, isAdmin);

//GET REQUESTS
router.get("/", SecretCodeController.getAllCodes);

module.exports = router;