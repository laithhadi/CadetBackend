const express = require('express');
const router = express.Router();
const { isUserAuthenticated } = require("../Middleware/UserAuthenticator");
const SubjectsController = require("../Controllers/SubjectController");

router.use(isUserAuthenticated);

//GET REQUESTS
router.get("/:levelId", SubjectsController.getSubjectsForStarLevel);

// //POST REQUESTS
// router.post("/", SubjectsController.create);

// //UPDATE REQUESTS
// router.patch("/:id", SubjectsController.update);

// //DELETE REQUESTS
// router.delete("/all", SubjectsController.deleteAll);
// router.delete("/:id", SubjectsController.delete);

module.exports = router;