const Recipe = require("../Models/Recipe");

/* CREATE NEW RECIPE */

exports.newRecipe = async (req, res, next) => {
  try {
    const { instructions, name, ingredients } = req.body;

    const recipe = new Recipe({
      name,
      instructions,
      author: req.user._id,
      ingredients,
    });

    await recipe.save();
    res.json(recipe);
  } catch (err) {
    res.json(next(err));
  }
};
