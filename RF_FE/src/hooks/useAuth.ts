import { getAuthData } from "../store/auth/selectors";

export function useAuth() {
  const { token } = getAuthData();

  return { isLoggedIn: !!token };
}
