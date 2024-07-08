import User from "../models/userModel.js";
import Apartment from "../models/apartmentModel.js";
import { comparePasswords, hashPassword } from "../utils/passwordUtils.js";

export const getProfile = async (req, res) => {
  try {
    const userID = req.user.userID;

    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userID}` });
    }

    return res.status(200).json({
      _id: userID,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user?.phone,
      birthday: user?.birthday,
      photo: user?.photo,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const editProfile = async (req, res) => {
  try {
    const userID = req.user.userID;
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userID}` });
    }

    const { day, month, year } = req.body;
    const birthday = new Date(year, month - 1, day);

    await User.findByIdAndUpdate(
      userID,
      {
        birthday,
      },
      { new: true }
    );

    return res.json({ msg: "Profile updated successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const editName = async (req, res) => {
  try {
    const userID = req.user.userID;
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userID}` });
    }

    const { firstName, lastName } = req.body;

    await User.findByIdAndUpdate(userID, {
      firstName: firstName,
      lastName: lastName,
    });

    return res.json({ msg: "Name updated successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const editAccount = async (req, res) => {
  try {
    const userID = req.user.userID;
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userID}` });
    }

    const { email, phone } = req.body;

    await User.findByIdAndUpdate(userID, {
      email: email,
      phone: phone,
    });

    return res.json({ msg: "Email or phone updated successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const editPassword = async (req, res) => {
  try {
    const userID = req.user.userID;
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userID}` });
    }

    const { currentPassword, newPassword } = req.body;

    const isPasswordCorrect = await comparePasswords(
      currentPassword,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ msg: "Current password is incorrect!" });
    }

    const hashedPassword = await hashPassword(newPassword);
    req.body.password = hashedPassword;

    await User.findByIdAndUpdate(userID, { password: hashedPassword });

    return res.json({ msg: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const editApartment = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const apartment = await Apartment.findById(id);

    if (!apartment) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `No apartment with id: ${id}` });
    }

    await Apartment.findByIdAndUpdate(id, updateData);

    return res.status(204).json({ msg: "Apartment deleted successfully!" });
  } catch (error) {
    return res.status(500).json({
      message: "Error editing apartment backend",
      error: error.message,
    });
  }
};

export const userApartments = async (req, res) => {
  try {
    const { userID } = req.user;

    if (!userID) {
      return res.status(400).json({ msg: "User ID not found" });
    }

    const apartments = await Apartment.find({ owner: userID });

    if (!apartments.length) {
      return res.status(404).json({ msg: "Apartments not found" });
    }

    return res.status(200).json(apartments);
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const userSingleApartment = async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);

    if (!apartment) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `No apartment with id: ${id}` });
    }

    return res.status(200).json({
      message: "Single apartment retrieved successfully!",
      apartment,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const deleteApartment = async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await Apartment.findById(id);

    if (!apartment) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `No apartment with id: ${id}` });
    }

    await Apartment.findByIdAndDelete(id);

    return res.status(204).json({ msg: "Apartment deleted successfully!" });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting apartment backend",
      error: error.message,
    });
  }
};
