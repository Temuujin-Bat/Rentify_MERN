import axios from "axios";

async function UserInfoController() {
  try {
    const result = await axios.get("http://localhost:1010/api/v1/user/info", {
      withCredentials: true,
    });

    return result;
  } catch (error) {
    console.error(
      "Error with the apartment.api.ts inside of services!!",
      error
    );
  }
}

export { UserInfoController };
