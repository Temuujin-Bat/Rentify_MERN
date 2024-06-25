import axios from "axios";
import { TApartments } from "../types";

const CreateApartmentController = async ({
  formData,
}: {
  formData: TApartments;
}) => {
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
    throw error;
  }
};

export { CreateApartmentController };
