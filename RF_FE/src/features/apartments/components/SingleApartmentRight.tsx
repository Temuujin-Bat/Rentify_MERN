import Grid from "@mui/material/Unstable_Grid2";
import { Box, Paper, Typography } from "@mui/material";
import SingleApartmentAgentForm from "./SingleApartmentAgentForm";

import { getApartmentsData } from "../../../store/apartments/selectors";

export default function SingleApartmentRight() {
  const { singleApartment } = getApartmentsData();

  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper>
          <Typography
            sx={{
              padding: "10px",
              fontWeight: "bold",
              color: "rgba(12, 175, 255, 1)",
              "&:hover": { color: "rgba(12, 175, 255, .5)" },
            }}
          >
            Listing Number: {singleApartment?._id}
          </Typography>
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
                color: "rgba(12, 175, 255, 1)",
                fontWeight: "bold",
              }}
            >
              Contact Name:
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              {singleApartment?.name}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                color: "rgba(12, 175, 255, 1)",
                fontWeight: "bold",
              }}
            >
              Contact Number:
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                {singleApartment?.phone}
              </Typography>
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
