const rateLimit = require('express-rate-limit');

exports.rateLimiter = rateLimit({
    windowMs: process.env.RATE_LIMITER_TIMEOUT_IN_MS,
    max: process.env.RATE_LIMITER_MAX_ATTEMPTS,
    message: "Too many login attempts from this IP, please try again after 2 minutes"
});