import User from "../models/userModel.js";
import { comparePasswords, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
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

    const user = await User.create(req.body);
    res.status(201).json({ msg: "Registered Successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error inside authController.js/register" });
  }
};

export const login = async (req, res) => {
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
      return res
        .status(401)
        .json({ msg: "Email or password input is incorrect!" });
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

    res.status(200).json({ msg: "User logged in", token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error inside authController.js/login" });
  }
};
