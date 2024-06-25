import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography } from "@mui/material";

import { TUserApartments } from "../../../types";

import { getApartmentsData } from "../../../store/apartments/selectors";
import UserApartmentGridCard from "./UserApartmentGridCard";

export default function UserApartmentsGridPosts() {
  const { userApartments } = getApartmentsData();

  return (
    <Box sx={{ mt: "1em" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "rgba(255, 99, 71, 1)",
          fontSize: "1.5em",
          mb: "1em",
        }}
      >
        My Apartments
      </Typography>

      <Grid container spacing={3}>
        {userApartments.map((apartment: TUserApartments) => (
          <UserApartmentGridCard apartment={apartment} key={apartment?._id} />
        ))}
      </Grid>
    </Box>
  );
}
