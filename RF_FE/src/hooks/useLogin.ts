import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import LoginController from "../services/login.api";
import { useDispatch } from "react-redux";
import { setAuth, setToken } from "../store/auth/slice";

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
        navigate("/");
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  return { mutate };
}
