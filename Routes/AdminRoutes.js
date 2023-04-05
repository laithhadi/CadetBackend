const express = require('express');
const router = express.Router();
const { isUserAuthenticated, isAdmin } = require("../Middleware/UserAuthenticator");
// const AdminController = require("../Controllers/AdminController");

router.use(isUserAuthenticated, isAdmin);

//GET REQUESTS
router.get("/");

// //POST REQUESTS
// router.post("/", LessonsController.create);

// //UPDATE REQUESTS
// router.patch("/:id", LessonsController.update);

// //DELETE REQUESTS
// router.delete("/all", LessonsController.deleteAll);
// router.delete("/:id", LessonsController.delete);

module.exports = router;