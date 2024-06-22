import { useSelector } from "react-redux";
import { RootState } from "./type";

export function getAuthData() {
  const { tokenDetails, authDetails } = useSelector(
    (state: RootState) => state.authReducer
  );

  return {
    tokenDetails,
    authDetails,
  };
}
