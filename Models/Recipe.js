const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: String,
  image: String,
  instructions: String,
  ingredients: [
    {
      _id: false,
      ingredientId: { type: Schema.Types.ObjectId, ref: "Inredient" },
      name: String,
      quantity: Number,
      unit: String,
    },
  ],
  author: { type: Schema.Types.Array.ObjectId, ref: "User" },
  rating: [{ type: Schema.Types.ObjectId, ref: "User" }],
  dateCreated: {
    type: Date,
    default: new Date().toLocaleString("en-US", {
      timeZone: "America/Montevideo",
    }),
  },
  comments: [
    {
      author: { type: Schema.Types.ObjectId, ref: "User" },
      username: String,
      text: String,
      dateCreated: {
        type: Date,
        default: new Date().toLocaleString("en-US", {
          timeZone: "America/Montevideo",
        }),
      },
    },
  ],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
