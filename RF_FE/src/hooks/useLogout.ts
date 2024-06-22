import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setAuth } from "../store/auth/slice";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    dispatch(setToken());
    dispatch(setAuth());

    navigate("/login");
  };

  return logout;
};
