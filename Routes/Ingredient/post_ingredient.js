const router = require("express").Router();
const ingredientController = require("../../Controllers/ingredientController");

/* CREATE NEW INGREDENT */

router.post("/newIngredient", ingredientController.newIngredient);

module.exports = router;
