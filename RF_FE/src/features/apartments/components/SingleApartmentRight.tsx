import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Paper, Typography } from "@mui/material";
import SingleApartmentAgentForm from "./SingleApartmentAgentForm";

import { getApartmentsData } from "../../../store/apartments/selectors";

export default function SingleApartmentRight() {
  const { singleApartment } = getApartmentsData();

  return (
    <Grid container spacing={3} sx={{ mt: { xs: "-10px", md: "20px" } }}>
      <Grid xs={12} sm={7} md={12} lg={12}>
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
                mr: "5px",
              }}
            >
              Contact Name:
            </Typography>
            <Typography sx={{ fontSize: ".9em" }}>
              {singleApartment?.name}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
                mr: "5px",
              }}
            >
              Contact Number:
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: ".9em" }}>
                {singleApartment?.phone}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
                mr: "5px",
              }}
            >
              Listing Number:
            </Typography>
            <Typography sx={{ fontSize: ".9em" }}>
              {singleApartment?._id}
            </Typography>
          </Box>
        </Paper>
      </Grid>

      <Grid xs={12} sm={5} md={12} lg={12}>
        <SingleApartmentAgentForm />
      </Grid>
    </Grid>
  );
}
