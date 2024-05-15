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
      message: "Error retrieving apartments",
      error: error.message,
    });
  }
};
