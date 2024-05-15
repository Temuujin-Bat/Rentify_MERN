import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { ApartmentsFilter, ApartmentsGrids } from "../features/apartments";
import { useGetApartmentsAPI } from "../hooks/useApartments";
import { useParamsURL } from "../hooks/useParamsURL";

export default function apartments() {
  const result = useParamsURL().get("city");

  console.log(result);

  useGetApartmentsAPI();

  return (
    <Container maxWidth={"lg"}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <ApartmentsFilter />
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12}>
        <ApartmentsGrids />
      </Grid>
    </Container>
  );
}
