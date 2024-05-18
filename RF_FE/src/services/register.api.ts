import axios from "axios";

async function RegisterController(registerData) {
  try {
    await axios.post(
      "http://localhost:1010/api/v1/auth/register",
      registerData
    );
  } catch (error) {
    console.error("Error with the register API", error);
  }
}

export default RegisterController;
