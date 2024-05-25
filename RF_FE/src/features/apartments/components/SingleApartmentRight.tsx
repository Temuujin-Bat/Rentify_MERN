import Grid from "@mui/material/Unstable_Grid2";
import { Box, Paper, Typography } from "@mui/material";
import SingleApartmentAgentForm from "./SingleApartmentAgentForm";

import { getApartmentsData } from "../../../store/apartments/selectors";

export default function SingleApartmentRight() {
  const { singleApartment } = getApartmentsData();

  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper
          sx={{
            padding: "10px",
            display: "flex",
          }}
        >
          <Typography
            sx={{ color: "rgba(255, 99, 71, 1)", fontWeight: "bold" }}
          >
            Listing Number:
          </Typography>
          <Typography>{singleApartment?._id}</Typography>
        </Paper>
      </Grid>

      <Grid xs={12} sm={6} md={12} lg={12}>
        <Paper
          sx={{
            padding: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
              }}
            >
              Contact Name:
            </Typography>
            <Typography>{singleApartment?.name}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
              }}
            >
              Contact Number:
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>{singleApartment?.phone}</Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>

      <Grid xs={12} sm={6} md={12} lg={12}>
        <SingleApartmentAgentForm />
      </Grid>
    </Grid>
  );
}
