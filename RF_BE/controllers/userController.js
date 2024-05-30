import User from "../models/userModel.js";
import Apartment from "../models/apartmentModel.js";

export const getUserInfo = async (req, res) => {
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
    });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const editUserInfo = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
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
