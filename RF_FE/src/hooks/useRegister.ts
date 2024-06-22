import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import RegisterController from "../services/register.api";

export function useRegisterAPI() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: RegisterController,
    onSuccess: (response) => {
      if (response) {
        navigate("/login");
      }
    },
    onError: (err) => {
      console.error("Error in useRegister", `${err}`);
    },
  });

  return { mutate };
}
