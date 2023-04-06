const express = require('express');
const router = express.Router();
const UsersController = require("../Controllers/UserController");

//GET REQUESTS
router.get("/", UsersController.index);
router.get("/cadets", UsersController.getAllCadets);
router.get("/:id", UsersController.show);

//POST REQUESTS
router.post("/", UsersController.create);

//UPDATE REQUESTS
router.patch("/:id", UsersController.update);

//DELETE REQUESTS
router.delete("/:id", UsersController.delete);

module.exports = router;