import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import LoginController from "../services/login.api";
import { useDispatch } from "react-redux";
import { setAuth, setToken } from "../store/auth/slice";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";

export function useLoginAPI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationFn: LoginController,
    onSuccess: (response) => {
      if (response) {
        const token = response?.token || "";
        const user = response?.user;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(user));
        dispatch(setToken(token));
        dispatch(setAuth(user));

        toast.success("Login successful!", {
          autoClose: 1000,
          closeButton: false,
          pauseOnHover: false,
          hideProgressBar: true,
        });
        navigate("/");
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
