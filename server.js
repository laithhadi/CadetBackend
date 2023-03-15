require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || process.env.LOCAL_PORT;
const router = require("./router");
const cors = require("cors");
const corsOptions = require('./Config/CorsOptions');
const { logger } = require('./Middleware/Logger');
const errorHandler = require('./Middleware/ErrorHandler');
const helmet = require("helmet");

//DATABASE CONNECTION
require('./Config/DBConnection');

//Logger
app.use(logger);

//CORS
app.use(cors(corsOptions));

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10mb" }));
app.use(router);

//Error Handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`My app is listening on localhost:${port}`);
});