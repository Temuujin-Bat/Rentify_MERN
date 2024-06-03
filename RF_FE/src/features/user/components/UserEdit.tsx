import Grid from "@mui/material/Unstable_Grid2";
import { TextField, Typography } from "@mui/material";
import { getUserData } from "../../../store/user/selectors";

export default function userEdit() {
  const { userInfo } = getUserData();

  return (
    <div>
      <Typography>{userInfo?.email}</Typography>
      <Typography>{userInfo?.firstName}</Typography>
      <Typography>{userInfo?.lastName}</Typography>
    </div>
  );
}
