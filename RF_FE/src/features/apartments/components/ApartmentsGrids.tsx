import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Card,
  Link,
  CardMedia,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import { Apartment, Bed, ViewInAr } from "@mui/icons-material";

import ApartmentsGridsImagesList from "./ApartmentsGridsImagesList";
import { getApartmentsData } from "../../../store/apartments/selectors";

export default function ApartmentsGrids() {
  const { apartments } = getApartmentsData();

  return (
    <Grid container spacing={3} sx={{ marginTop: "30px" }}>
      {apartments.map((apartment, index) => (
        <Grid
          xs={12}
          sm={6}
          md={6}
          lg={4}
          key={index}
          sx={{
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": { boxShadow: 10 },
          }}
        >
          <Link
            href={`/apartments/${apartment._id}`}
            sx={{ textDecoration: "none" }}
          >
            <Card sx={{ height: "340px" }}>
              <CardMedia sx={{ height: "65%", position: "relative" }}>
                <ApartmentsGridsImagesList />

                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "35px",
                    backgroundColor: "rgba(255, 99, 71, .9)",
                    color: "rgba(255,255,255, 1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  {apartment?.address?.city}
                </Typography>
              </CardMedia>

              <CardContent
                sx={{
                  height: "25%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Bed />
                  <Typography sx={{ color: "rgba(255, 99, 71, 1)" }}>
                    Rooms
                  </Typography>
                  <Typography>{apartment?.apartment?.rooms}</Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <Apartment />

                  <Typography sx={{ color: "rgba(255, 99, 71, 1)" }}>
                    Type
                  </Typography>
                  <Typography>Apartment</Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <ViewInAr />
                  <Typography sx={{ color: "rgba(255, 99, 71, 1)" }}>
                    Size
                  </Typography>
                  <Typography>{apartment?.apartment?.size} m2</Typography>
                </Box>
              </CardContent>

              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(255, 99, 71, .1)",
                  height: "10%",
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
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
