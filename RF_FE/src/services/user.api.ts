import axios from "axios";

async function UserInfoController() {
  try {
    const result = await axios.get(
      "http://localhost:1010/api/v1/user/profile",
      {
        withCredentials: true,
      }
    );

    return result;
  } catch (error) {
    throw error;
  }
}

export { UserInfoController };
