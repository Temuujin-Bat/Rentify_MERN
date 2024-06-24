import { useSelector } from "react-redux";
import { RootState } from "./type";

export function getAuthData() {
  const { token, userDetails } = useSelector(
    (state: RootState) => state.authReducer
  );

  return {
    token,
    userDetails,
  };
}
