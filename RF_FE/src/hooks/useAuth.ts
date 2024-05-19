import { getAuthData } from "../store/auth/selectors";

export function useAuth() {
  const { tokenDetails } = getAuthData();

  return { isLoggedIn: !!tokenDetails };
}
