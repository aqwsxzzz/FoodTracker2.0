var router = require("express").Router();

/* ROUTES TO REQUIRE */
//USER ROUTES
const post_user = require("./User/post_user");

/* ************************************** */

//POST
router.use(post_user);

module.exports = router;
