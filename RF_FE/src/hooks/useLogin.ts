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
      const token = response?.data.token || "";
      const user = response?.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(setToken(token));
      dispatch(setAuth(user));

      navigate("/");
    },
    onError: (err) => {
      console.error("Error in useLogin", `${err}`);
    },
  });

  return { mutate };
}
