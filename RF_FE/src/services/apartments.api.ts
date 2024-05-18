import axios from "axios";

async function ApartmentsController(city: string | null) {
  try {
    const params = city ? { city } : {};
    const result = await axios.get("http://localhost:1010/api/v1/apartments", {
      params,
    });

    return result.data.apartments;
  } catch (error) {
    console.error(
      "Error with the apartment.api.ts inside of services!!",
      error
    );
  }
}

const createApartmentController = async (formData) => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/apartments",
    formData
  );
  return response.data;
};

export { ApartmentsController, createApartmentController };
