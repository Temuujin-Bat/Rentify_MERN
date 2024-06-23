import axios from "axios";
import { TRegister } from "../types";

async function RegisterController(registerData: TRegister) {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/auth/register",
      registerData
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export default RegisterController;
