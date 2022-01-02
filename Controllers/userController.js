const User = require("../Models/User");

/* CREATE A NEW USER */

exports.newUser = async (req, res, next) => {
  try {
    const { username } = req.body;

    const user = new User({
      username,
    });

    await user.save();
    res.json(user);
  } catch (err) {
    res.json(next(err));
  }
};
