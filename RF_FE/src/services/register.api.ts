import axios from "axios";

async function RegisterController(registerData) {
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
