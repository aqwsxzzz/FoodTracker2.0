const router = require("express").Router();
const ingredientController = require("../../Controllers/ingredientController");

/* GET ALL INGREDIENTS ARRAY */

router.get("/allIngredients", ingredientController.getAllIngredients);

module.exports = router;
