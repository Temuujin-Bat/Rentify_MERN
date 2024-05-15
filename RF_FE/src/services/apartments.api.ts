import axios from "axios";

async function ApartmentsController() {
  try {
    const result = await axios.get("http://localhost:1010/api/v1/apartments");

    return result.data.apartments;
  } catch (error) {
    console.error(
      "Error with the apartment.api.ts inside of services!!",
      error
    );
  }
}

export { ApartmentsController };
