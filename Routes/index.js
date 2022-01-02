var router = require("express").Router();

/* ROUTES TO REQUIRE */
//USER ROUTES
const post_user = require("./User/post_user");

//INGREDIENT ROUTES
const post_ingredient = require("./Ingredient/post_ingredient");
const get_ingredient = require("./Ingredient/get_ingredient");
/* ************************************** */

//POST
router.use(post_user);
router.use(post_ingredient);

//GET
router.use(get_ingredient);

module.exports = router;
