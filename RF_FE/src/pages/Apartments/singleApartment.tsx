import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import { useGetSingleApartmentAPI } from "../../hooks/useApartments";
import {
  SingleApartmentHeroImages,
  SingleApartmentLeft,
  SingleApartmentRight,
} from "../../features/apartments";

export default function singleApartment() {
  const { id } = useParams();

  useGetSingleApartmentAPI(id);

  return (
    <>
      <SingleApartmentHeroImages />

      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={8} lg={8}>
            <SingleApartmentLeft />
          </Grid>

          <Grid xs={12} sm={12} md={4} lg={4}>
            <SingleApartmentRight />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
