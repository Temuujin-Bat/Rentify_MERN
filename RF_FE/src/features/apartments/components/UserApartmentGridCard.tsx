import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography, Paper } from "@mui/material";

import {
  UserApartmentGridCardDelete,
  UserApartmentGridCardEdit,
  UserApartmentGridCardShowAD,
} from "../index";

import { TApartments } from "../../../types";

export default function UserApartmentGridCard({
  apartment,
}: {
  apartment: TApartments;
}) {
  return (
    <Grid xs={12} sm={6} md={6} lg={6}>
      <Paper elevation={10}>
        <Box
          sx={{
            width: "100%",
            height: "55px",
            backgroundColor: "rgba(255, 99, 71, .9)",
            color: "rgba(255,255,255, 1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2em",
              ml: "20px",
            }}
          >
            {apartment?.address?.city}
          </Typography>

          <Typography sx={{ mr: "20px" }}>
            {new Date(apartment?.createdAt || "").toLocaleDateString("en-GB")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "rgba(255, 99, 71, .1)",
            height: "50px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              {apartment?.price} $
            </Typography>
            <Typography>/mo</Typography>
          </Box>

          <Typography sx={{ fontWeight: "bold" }}>
            {apartment?.address?.street} {apartment?.address?.buildingNumber}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",

            boxShadow: "10",
            padding: "10px",
          }}
        >
          <UserApartmentGridCardDelete apartment={apartment} />

          <UserApartmentGridCardEdit apartment={apartment} />

          <UserApartmentGridCardShowAD apartment={apartment} />
        </Box>
      </Paper>
    </Grid>
  );
}
