import axios from "axios";

const createApartmentController = async (formData) => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/apartments",
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export { createApartmentController };
