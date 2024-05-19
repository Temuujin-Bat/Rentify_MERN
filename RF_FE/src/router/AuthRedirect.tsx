import { getAuthData } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";

const AuthRedirect = ({ children }) => {
  const { tokenDetails } = getAuthData();

  if (tokenDetails) {
    return <Navigate to="/" />;
  }

  return children;
};

export { AuthRedirect };
