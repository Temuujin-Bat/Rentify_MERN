import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import RegisterController from "../services/register.api";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";

export function useRegisterAPI() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: RegisterController,
    onSuccess: (response) => {
      if (response?.data?.msg) {
        toast.success("Registered successfully!", {
          autoClose: 1000,
          closeButton: false,
          pauseOnHover: false,
          hideProgressBar: true,
        });

        navigate("/login");
      }
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.msg, {
          autoClose: 2000,
          closeButton: false,
          pauseOnHover: false,
          hideProgressBar: true,
        });
      } else {
        toast.error("An unknown error occurred: " + error.message, {
          autoClose: 2000,
          closeButton: false,
          pauseOnHover: false,
          hideProgressBar: true,
        });
      }
    },
  });

  return { mutate };
}
