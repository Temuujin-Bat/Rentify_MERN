import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import RegisterController from "../services/register.api";
import { isAxiosError } from "axios";

export function useRegisterAPI() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: RegisterController,
    onSuccess: (response) => {
      if (response?.data?.msg) {
        console.log(response.data);
        navigate("/login");
      }
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data?.msg);
      } else {
        console.log("Unknown error occurred:", error.message);
      }
    },
  });

  return { mutate };
}
