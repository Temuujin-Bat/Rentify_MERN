import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography, Paper } from "@mui/material";
import { Apartment, Bed, ViewInAr } from "@mui/icons-material";

import {
  UserApartmentGridCardDelete,
  UserApartmentGridCardEdit,
  UserApartmentGridCardShowAD,
} from "../index";

import { TUserApartments } from "../../../types";

export default function UserApartmentGridCard({
  apartment,
}: {
  apartment: TUserApartments;
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
            {new Date(apartment?.createdAt).toLocaleDateString("en-GB")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Bed sx={{ color: "rgba(26, 188, 156, 1)" }} />
            <Typography sx={{ color: "rgba(255, 99, 71, 1)" }}>
              Rooms
            </Typography>
            <Typography>{apartment?.apartment?.rooms}</Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Apartment sx={{ color: "rgba(26, 188, 156, 1)" }} />

            <Typography sx={{ color: "rgba(255, 99, 71, 1)" }}>Type</Typography>
            <Typography>Apartment</Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <ViewInAr sx={{ color: "rgba(26, 188, 156, 1)" }} />
            <Typography sx={{ color: "rgba(255, 99, 71, 1)" }}>Size</Typography>
            <Typography>{apartment?.apartment?.size} m2</Typography>
          </Box>
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
            {apartment?.address?.street}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <UserApartmentGridCardDelete apartment={apartment} />

          <UserApartmentGridCardEdit apartment={apartment} />

          <UserApartmentGridCardShowAD apartment={apartment} />
        </Box>
      </Paper>
    </Grid>
  );
}
