import axios from "axios";

async function LoginController(loginData) {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/auth/login",
      loginData,
      { withCredentials: true }
    );

    return response;
  } catch (error) {
    console.error("Error with the login API", error);
  }
}

export default LoginController;
