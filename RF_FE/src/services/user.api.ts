import axios from "axios";
import { TPassword } from "../types";

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

async function UserPasswordController(passwordData: TPassword) {
  try {
    await axios.put(
      "http://localhost:1010/api/v1/user/password-change",
      passwordData,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    throw error;
  }
}

export { UserInfoController, UserPasswordController };
