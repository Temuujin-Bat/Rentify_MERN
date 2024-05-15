import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import telaviv from "../../../assets/homePage/homePageHero.webp";

export default function HomePopularCities() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: "20px 0px 20px 0px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "rgba(12, 175, 255, 1)",
              fontSize: "1.5em",
              mb: "5px",
              textAlign: "center",
            }}
          >
            Find a property in popular cities
          </Typography>
          <Typography sx={{ color: "rgba(0, 0, 0, 1)" }}>
            The most popular cities in Israel
          </Typography>
        </Box>
      </Grid>

      {cities.map((city, index) => (
        <Grid xs={12} sm={12} md={4} lg={4} key={index}>
          <Link
            href={`/apartments?city=${city.name}`}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textDecoration: "none",
              height: "100px",
              borderRadius: "20px",
              boxShadow: 1,
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": { boxShadow: 10 },
              cursor: "pointer",
            }}
          >
            <Box
              component={"img"}
              src={city.img}
              sx={{
                height: "100%",
                width: "50%",
                objectFit: "cover",
                borderRadius: "20px 0 0px 20px",
              }}
            />

            <Box
              sx={{
                ml: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(12, 175, 255, 1)",
                }}
              >
                Find rental home in
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "1.2em",
                }}
              >
                {city.name}
              </Typography>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

const cities = [
  {
    name: "Tel Aviv",
    img: telaviv,
  },
  {
    name: "Jerusalem",
    img: telaviv,
  },
  {
    name: "Haifa",
    img: telaviv,
  },
];