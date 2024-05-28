import axios from "axios";

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
    console.error(
      "Error with the apartment.api.ts inside of services!!",
      error
    );
  }
}

async function UserSingleApartmentController(id) {
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

async function UserDeleteApartmentController(id) {
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

async function UserEditApartmentController(id, updatedData) {
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
