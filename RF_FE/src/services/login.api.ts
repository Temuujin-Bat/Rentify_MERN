import axios from "axios";
import { TLogin } from "../types";

async function LoginController(loginData: TLogin) {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/auth/login",
      loginData,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default LoginController;
