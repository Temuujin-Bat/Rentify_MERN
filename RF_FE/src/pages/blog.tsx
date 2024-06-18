import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";

import { BlogGrids, BlogHero } from "../features/blog";

export default function blog() {
  return (
    <>
      <BlogHero />

      <Container maxWidth={"lg"}>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <BlogGrids />
        </Grid>
      </Container>
    </>
  );
}
