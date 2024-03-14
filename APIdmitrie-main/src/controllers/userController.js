const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      userName: req.body.userName,
      password: hashedPassword,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) return res.status(404).send("User not found");

    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validpassword) return res.status(400).send("Invalid password");

    const token = jwt.sign({ user }, process.env.SECRET_KEY);
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { registerUser, loginUser };
