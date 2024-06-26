import { useSelector } from "react-redux";

export function getUserData() {
  const { userInfo } = useSelector((state) => state.userReducer);

  return {
    userInfo,
  };
}
