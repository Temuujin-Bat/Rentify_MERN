import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { getUserData } from "../../../store/user/selectors";
import {
  ProfileCardsPasswordChange,
  ProfileCardsPhotoInformation,
  ProfileCardsInfo,
  ProfileCardsAccountInfo,
} from "../index";

export default function ProfileCards() {
  const { userInfo } = getUserData();

  return (
    <Grid container spacing={3} sx={{ mt: "20px" }}>
      {/* Change Password */}
      <ProfileCardsPasswordChange />

      {/* Photo and Full Name */}
      <Grid xs={12} sm={12} md={12} lg={12}>
        <ProfileCardsPhotoInformation userInfo={userInfo} />
      </Grid>

      {/* Profile Info */}
      <Grid xs={12} sm={12} md={12} lg={12}>
        <ProfileCardsInfo userInfo={userInfo} />
      </Grid>

      {/* Account Info */}
      <Grid xs={12} sm={12} md={12} lg={12}>
        <ProfileCardsAccountInfo userInfo={userInfo} />
      </Grid>
    </Grid>
  );
}
