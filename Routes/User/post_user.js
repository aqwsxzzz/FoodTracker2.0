const router = require("express").Router();
const userController = require("../../Controllers/userController");

/* CREATE A NEW USER MODEL */
router.post("/newUser", userController.newUser);

module.exports = router;
