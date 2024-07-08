const Apartment = require("../models/apartmentModel.js");

export const getAllApartments = async (req, res) => {
  try {
    const { city, rooms } = req.query;

    const query = {};

    if (city) {
      query["address.city"] = city;
    }

    if (rooms) {
      query["apartment.rooms"] = rooms;
    }

    const apartments = await Apartment.find(query);

    return res.status(200).json({
      message: "Apartments retrieved successfully!",
      apartments,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving apartments backend",
      error: error.message,
    });
  }
};

export const getSingleApartment = async (req, res) => {
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
    return res.status(500).json({
      message: "Error retrieving single apartment backend",
      error: error.message,
    });
  }
};

export const addApartment = async (req, res) => {
  try {
    const { userID } = req.user;
    const newApartmentData = {
      ...req.body,
      owner: userID,
    };

    const newApartment = await Apartment.create(newApartmentData);

    return res.status(201).json(newApartment);
  } catch (error) {
    return res.status(500).json({
      message: "Error creating apartments backend",
      error: error.message,
    });
  }
};
