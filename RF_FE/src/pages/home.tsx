import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";
import { HomeHero, HomeInformation, HomePopularCities } from "../features/home";

export default function home() {
  return (
    <>
      <HomeHero />

      <Container maxWidth={"lg"}>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <HomePopularCities />
        </Grid>
      </Container>

      <HomeInformation />
    </>
  );
}
