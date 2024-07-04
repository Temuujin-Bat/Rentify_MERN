import { ReactNode } from "react";
import { getAuthData } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";

const AuthRedirect = ({ children }: { children: ReactNode }) => {
  const { token } = getAuthData();

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export { AuthRedirect };
