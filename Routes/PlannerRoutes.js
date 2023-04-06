const express = require('express');
const router = express.Router();
const { isUserAuthenticated, isDetachmentCommander } = require("../Middleware/UserAuthenticator");
const PlannerController = require("../Controllers/PlannerController");

router.use(isUserAuthenticated);

//GET REQUESTS
router.get("/cadet/:id", PlannerController.getPlansForCadet);
router.get("/organiser/:id", PlannerController.getOrganiserPlans);

router.use(isDetachmentCommander);

// //POST REQUESTS
router.post("/", PlannerController.create);

// //UPDATE REQUESTS
// router.patch("/:id", LessonsController.update);

// //DELETE REQUESTS
// router.delete("/all", LessonsController.deleteAll);
// router.delete("/:id", LessonsController.delete);

module.exports = router;