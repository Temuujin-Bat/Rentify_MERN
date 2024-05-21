import Apartment from "../models/apartmentModel.js";

export const getAllApartments = async (req, res) => {
  try {
    const { city } = req.query;
    const query = city ? { "address.city": city } : {};
    const apartments = await Apartment.find(query);

    res.status(200).json({
      message: "Apartments retrieved successfully!",
      apartments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving apartments backend",
      error: error.message,
    });
  }
};

export const getSingleApartment = async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);

    if (!apartment) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `No apartment with id: ${id}` });
    }

    res.status(200).json({
      message: "Single apartment retrieved successfully!",
      apartment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving single apartment backend",
      error: error.message,
    });
  }
};

export const addApartment = async (req, res) => {
  try {
    const newApartment = await Apartment.create(req.body);

    res.status(201).json(newApartment);
  } catch (error) {
    res.status(500).json({
      message: "Error creating apartments backend",
      error: error.message,
    });
  }
};
