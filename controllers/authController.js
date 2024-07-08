const User = require("../models/userModel.js");
const { comparePasswords, hashPassword } = require("../utils/passwordUtils");
const { createJWT } = require("../utils/tokenUtils");

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        error: "Please provide email, password, first name, and last name",
      });
    }

    const findEmail = await User.findOne({ email });

    if (findEmail) {
      return res.status(409).json({ msg: "Email is already registered" });
    }

    const hashedPassword = await hashPassword(password);
    req.body.password = hashedPassword;

    const userData = await User.create(req.body);

    const user = {
      userID: userData._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    };

    return res.status(201).json({ msg: "Registered Successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error inside authController.js/register" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return register.status(400).json({ msg: "Insert email and password." });
    }

    const userData = await User.findOne({ email: req.body.email });

    if (!userData) {
      return res.status(401).json({ msg: "Email or password incorrect." });
    }

    const isPasswordCorrect = await comparePasswords(
      req.body.password,
      userData.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ msg: "Email or password is incorrect!" });
    }

    const token = createJWT({ userID: userData._id, name: userData.firstName });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: true,
    });

    const user = {
      userID: userData._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    };

    return res.status(200).json({ msg: "User logged in", token, user });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error inside authController.js/login" });
  }
};

module.exports = { register, login };
