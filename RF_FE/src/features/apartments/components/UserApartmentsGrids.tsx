import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { getApartmentsData } from "../../../store/apartments/selectors";
import {
  Box,
  Button,
  Typography,
  Link,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import img from "../../../assets/homePage/homePageHero.webp";
import { Apartment, Bed, ViewInAr } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function UserApartmentsGrids() {
  const { userApartments } = getApartmentsData();
  const navigate = useNavigate();

  return (
    <>
      {userApartments && userApartments.length !== 0 ? (
        <>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "rgba(255, 99, 71, 1)",
              fontSize: "1.5em",
            }}
          >
            My Posted Apartments
          </Typography>
          <Grid container spacing={3}>
            {userApartments.map((apartment) => (
              <Grid
                key={apartment._id}
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": { boxShadow: 10 },
                }}
              >
                <Link
                  href={`/user/apartment/${apartment._id}`}
                  sx={{ textDecoration: "none" }}
                >
                  <Card sx={{ height: "340px" }}>
                    <CardMedia sx={{ height: "65%", position: "relative" }}>
                      {/* <ApartmentsGridsImagesList /> */}

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
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component={"img"}
            src={img}
            sx={{ borderRadius: "100px", height: "250px", width: "200px" }}
          />

          <Typography>No Apartments</Typography>

          <Button
            sx={{
              borderRadius: "20px",
              color: "rgba(255, 99, 71, 1)",
              fontWeight: "bold",
              border: "2px solid rgba(50, 205, 50, 1)",
              fontSize: ".6em",
              "&:hover": {
                border: "2px solid rgba(50, 205, 50, .5)",
                color: "rgba(255, 99, 71, .5)",
              },
            }}
            onClick={() => navigate("/addAds")}
          >
            What would you like to post?
          </Button>
        </Box>
      )}
    </>
  );
}
