const express = require('express');
const router = express.Router();
const { rateLimiter } = require("../Middleware/RateLimiter");
const AuthController = require("../Controllers/AuthController");

//POST REQUESTS
router.post("/register", AuthController.register);
router.post("/login", rateLimiter, AuthController.login);

module.exports = router;