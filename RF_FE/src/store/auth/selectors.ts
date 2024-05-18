import { useSelector } from "react-redux";

export function getAuthData() {
  const { tokenDetails, authDetails } = useSelector(
    (state) => state.authReducer
  );

  return {
    tokenDetails,
    authDetails,
  };
}
