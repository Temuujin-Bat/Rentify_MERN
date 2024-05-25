import axios from "axios";

const CreateApartmentController = async ({ formData }) => {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/apartments",
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error with the addApartment.api.ts inside of services!!",
      error
    );
  }
};

export { CreateApartmentController };
