import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AddAds } from "../features/addAds";

export default function addAds() {
  return (
    <>
      <Box
        sx={{
          background: "rgba(0,0,0,.1)",
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: "-1",
        }}
      />

      <Container maxWidth={"lg"}>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <AddAds />
        </Grid>
      </Container>
    </>
  );
}
