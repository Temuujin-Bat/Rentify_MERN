import { Paper } from "@mui/material";
import { TUserInfo } from "../../../types";

import {
  ProfileCardsPhotoInformationEditPhoto,
  ProfileCardsPhotoInformationEditName,
} from "../index";

export default function ProfileCardsPhotoInformation({
  userInfo,
}: {
  userInfo: TUserInfo;
}) {
  return (
    <Paper elevation={4}>
      {/* Photo */}
      <ProfileCardsPhotoInformationEditPhoto userInfo={userInfo} />
      {/* Full Name */}
      <ProfileCardsPhotoInformationEditName userInfo={userInfo} />
    </Paper>
  );
}
