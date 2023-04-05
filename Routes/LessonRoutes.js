const express = require('express');
const router = express.Router();
const { isUserAuthenticated } = require("../Middleware/UserAuthenticator");
const LessonsController = require("../Controllers/LessonController");

router.use(isUserAuthenticated);

//GET REQUESTS
router.get("/:subjectId", LessonsController.getLessonsForSubject);

// //POST REQUESTS
// router.post("/", LessonsController.create);

// //UPDATE REQUESTS
// router.patch("/:id", LessonsController.update);

// //DELETE REQUESTS
// router.delete("/all", LessonsController.deleteAll);
// router.delete("/:id", LessonsController.delete);

module.exports = router;