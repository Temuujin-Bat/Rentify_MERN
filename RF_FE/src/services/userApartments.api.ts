import axios from "axios";
import { TApartments } from "../types";

async function UserApartmentsController() {
  try {
    const result = await axios.get(
      "http://localhost:1010/api/v1/user/apartments",
      {
        withCredentials: true,
      }
    );

    return result.data;
  } catch (error) {
    throw error;
  }
}

async function UserSingleApartmentController(id: string) {
  try {
    const result = await axios.get(
      `http://localhost:1010/api/v1/user/apartment/${id}`,
      {
        withCredentials: true,
      }
    );

    return result.data.apartment;
  } catch (error) {
    console.error(
      "Error with the apartment.api.ts inside of services!!",
      error
    );
  }
}

async function UserDeleteApartmentController(id: string) {
  try {
    await axios.delete(`http://localhost:1010/api/v1/user/apartment/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(
      "Error with the apartment.api.ts inside of services!!",
      error
    );
  }
}

async function UserEditApartmentController(
  id: string,
  updatedData: TApartments
) {
  try {
    await axios.put(
      `http://localhost:1010/api/v1/user/apartment/${id}`,
      updatedData,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error(
      "Error with the apartment.api.ts inside of services!!",
      error
    );
  }
}

export {
  UserApartmentsController,
  UserSingleApartmentController,
  UserDeleteApartmentController,
  UserEditApartmentController,
};
